#!/usr/bin/env python
#
# VMEncryption extension
#
# Copyright 2015 Microsoft Corporation
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Requires Python 2.7+
#
import subprocess
import os
import os.path
import sys
import shlex
from subprocess import *
from CommandExecuter import CommandExecuter
from Common import CommonVariables
from ConfigUtil import ConfigUtil
from OnGoingItemConfig import *

class TransactionalCopyTask(object):
    """
    copy_total_size is in byte, skip_target_size is also in byte
    slice_size is in byte 50M
    """
    def __init__(self, logger, disk_util, ongoing_item_config, patching, encryption_environment):
        """
        copy_total_size is in bytes.
        """
        self.command_executer = CommandExecuter(logger)
        self.ongoing_item_config= ongoing_item_config
        self.encryption_environment = encryption_environment
        self.logger = logger
        self.patching = patching
        self.disk_util = disk_util
        self.tmpfs_mount_point = "/mnt/azure_encrypt_tmpfs"
        self.slice_file_path = self.tmpfs_mount_point + "/slice_file"
    
    def begin_copy(self):
        """
        check the device_item size first, cut it 
        """

        total_size = self.ongoing_item_config.get_current_total_copy_size()
        block_size = self.ongoing_item_config.get_current_block_size()
        last_slice_size = total_size % block_size
        total_slice_size = (total_size - last_slice_size) / block_size
        from_end = self.ongoing_item_config.get_from_end()
        source_dev_full_path = self.ongoing_item_config.get_current_source_path()
        destination = self.ongoing_item_config.get_current_destination()
        current_slice_index = self.ongoing_item_config.get_current_slice_index()
        returnCode = CommonVariables.success

        copy_command = None

        if(from_end.lower()=='true'):
            #copy from end to the beginning.
            if(last_slice_size > 0):
                copy_command = self.patching.dd_path
                copy_result = self.copy_internal(copy_command=copy_command,from_device=source_dev_full_path,to_device=destination,skip=total_slice_size,size=last_slice_size)
                if(copy_result == CommonVariables.process_success):
                    ongoing_item_config.current_slice_index = total_slice_size + 1
                    ongoing_item_config.commit()
                else:
                    return copy_result

            for i in range(0, total_slice_size):
                copy_command = self.patching.dd_path
                skip_block = (total_slice_size - i - 1)
                copy_result = self.copy_internal(copy_command=copy_command,from_device=source_dev_full_path,to_device=destination,skip=skip_block,size=block_size)
                if(copy_result == CommonVariables.process_success):
                    ongoing_item_config.current_slice_index = i
                    ongoing_item_config.commit()
                else:
                    return copy_result
            return CommonVariables.process_success

        else:
            for i in range(0, total_slice_size):
                copy_command = self.patching.dd_path
                copy_result = self.copy_internal(copy_command=copy_command,\
                                                    from_device=source_dev_full_path,to_device=destination,\
                                                    skip=i,size=block_size)
                if(copy_result == CommonVariables.process_success):
                    ongoing_item_config.current_slice_index = i
                    ongoing_item_config.commit()
                else:
                    return copy_result

            """
            copy the bytes not align with the slice_size
            """
            if(last_slice_size > 0):
                copy_command = self.patching.dd_path
                copy_result = self.copy_internal(copy_command=copy_command,\
                                                    from_device=source_dev_full_path, to_device=destination,\
                                                    skip=total_slice_size, size=last_slice_size)
                if(copy_result == CommonVariables.process_success):
                    ongoing_item_config.current_slice_index = total_slice_size + 1
                    ongoing_item_config.commit()
                else:
                    return copy_result
            return CommonVariables.process_success

    """
    TODO: if the copy failed?
    """
    def copy_internal(self, copy_command, from_device, to_device, skip, size):
        """
        first, copy the data to the middle cache
        """
        dd_cmd = str(copy_command) + ' if=' + from_device + ' of=' + self.slice_file_path + ' bs=' + str(size) + ' skip=' + str(skip) + ' count=1'
        returnCode = self.command_executer.Execute(dd_cmd)
        if(returnCode != CommonVariables.process_success):
            self.logger.log(str(dd_cmd) + ' is ' + str(returnCode))

        """
        second, copy the data in the middle cache to the target device.
        """
        backup_slice_item_cmd = str(copy_command) + ' if=' + self.slice_file_path + ' of=' + self.encryption_environment.copy_slice_item_backup_file + ' bs=' + str(size) + ' seek=' + str(skip) + ' count=1'
        backup_slice_args = shlex.split(backup_slice_item_cmd)
        backup_process = Popen(backup_slice_args)

        dd_cmd = str(copy_command) + ' if=' + self.slice_file_path + ' of=' + to_device + ' bs=' + str(size) + ' seek=' + str(skip) + ' count=1'
        returnCode = self.command_executer.Execute(dd_cmd)
        if(returnCode != CommonVariables.process_success):
            self.logger.log(str(dd_cmd) + ' is ' + str(returnCode))
        else:
            #the copy done correctly, so clear the backup slice file item.
            backup_process.kill()
            if(os.path.exists(self.encryption_environment.copy_slice_item_backup_file)):
                os.remove(self.encryption_environment.copy_slice_item_backup_file)
        return returnCode

    def prepare_mem_fs(self):
        self.disk_util.make_sure_path_exists(self.tmpfs_mount_point)
        commandToExecute = self.patching.mount_path + " -t tmpfs -o size=" + str(self.block_size + 1024) + " tmpfs " + self.tmpfs_mount_point
        self.logger.log("prepare mem fs script is: " + str(commandToExecute))
        returnCode = self.command_executer.Execute(commandToExecute)
        return returnCode

    def clear_mem_fs(self):
        commandToExecute = self.patching.umount_path + " " + self.tmpfs_mount_point
        returnCode = self.command_executer.Execute(commandToExecute)
        return returnCode
