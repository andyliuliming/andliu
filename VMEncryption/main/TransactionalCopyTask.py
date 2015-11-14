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
from subprocess import *
from CommandExecuter import CommandExecuter
from Common import EncryptionError
from Common import CommonVariables
from ConfigUtil import ConfigUtil

class TransactionalCopyTask(object):
    """
    copy_total_size is in byte, skip_target_size is also in byte
    slice_size is in byte 50M
    """
    def __init__(self,logger,disk_util, source_dev_name, copy_total_size, destination, patching, encryption_environment,\
                    block_size=CommonVariables.default_block_size,skip_source_block=0,skip_target_block=0,from_end=False):
        """
        copy_total_size is in bytes.
        """
        self.command_executer = CommandExecuter(logger)
        self.source_dev_name = source_dev_name
        self.source_total_size = copy_total_size
        self.destination = destination
        self.encryption_environment = encryption_environment
        self.from_end = from_end
        self.logger = logger
        self.patching = patching
        self.skip_source_block = skip_source_block
        self.skip_target_block = skip_target_block
        self.block_size = block_size
        self.disk_util = disk_util
        self.tmpfs_mount_point = "/mnt/azure_encrypt_tmpfs"
        self.slice_file_path = self.tmpfs_mount_point + "/slice_file"
        self.transactional_copy_config = ConfigUtil(encryption_environment.azure_crypt_current_transactional_copy_path,'azure_crypt_copy_config',logger)
    
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

    """
    TODO: if the copy failed?
    """
    def copy_internal(self,copy_command,from_device,to_device,skip,size):
        """
        first, copy the data to the middle cache
        """
        dd_cmd = str(copy_command) + ' if=' + from_device + ' of=' + self.slice_file_path + ' bs=' + str(size) + ' skip=' + str(skip) + ' count=1'
        returnCode = self.command_executer.Execute(dd_cmd)
        if(returnCode != 0):
            self.logger.log(str(dd_cmd) + ' is ' + str(returnCode))

        """
        second, copy the data in the middle cache to the target device.
        """
        dd_cmd = str(copy_command) + ' if=' + self.slice_file_path + ' of=' + to_device + ' bs=' + str(size) + ' seek=' + str(skip) + ' count=1'
        returnCode = self.command_executer.Execute(dd_cmd)
        if(returnCode != 0):
            self.logger.log(str(dd_cmd) + ' is ' + str(returnCode))
        return returnCode

    def begin_copy(self):
        """
        check the device_item size first, cut it 
        """
        total_size = self.source_total_size
        last_slice_size = total_size % self.block_size
        total_slice_size = (total_size - last_slice_size) / self.block_size

        origin_device_path = os.path.join("/dev/",self.source_dev_name)
        returnCode = CommonVariables.success

        copy_command = None
        self.transactional_copy_config.save_config(CommonVariables.CurrentDeviceNameKey,self.source_dev_name)
        self.transactional_copy_config.save_config(CommonVariables.CurrentSliceSizeKey,self.block_size)
        self.transactional_copy_config.save_config(CommonVariables.CurrentTotalSizeKey,(total_slice_size + 1))
        if(self.from_end):
            #copy from end to the beginning.
            if(last_slice_size > 0):
                copy_command = self.patching.dd_path
                copy_result = self.copy_internal(copy_command=copy_command,from_device=origin_device_path,to_device=self.destination,skip=total_slice_size,size=last_slice_size)
                if(copy_result==CommonVariables.process_success):
                    self.transactional_copy_config.save_config(CommonVariables.CurrentSliceIndexKey,(total_slice_size + 1))
                else:
                    return copy_result

            for i in range(total_slice_size, 0):
                copy_command = self.patching.dd_path
                copy_result = self.copy_internal(copy_command=copy_command,from_device=origin_device_path,to_device=self.destination,skip=i,size=self.block_size)
                if(copy_result==CommonVariables.process_success):
                    self.transactional_copy_config.save_config(CommonVariables.CurrentSliceIndexKey,i)
                else:
                    return copy_result
        else:
            for i in range(0, total_slice_size):
                copy_command = self.patching.dd_path
                copy_result = self.copy_internal(copy_command=copy_command,from_device=origin_device_path,to_device=self.destination,skip=i,size=self.block_size)
                if(copy_result==CommonVariables.process_success):
                    self.transactional_copy_config.save_config(CommonVariables.CurrentSliceIndexKey,i)
                else:
                    return copy_result

            """
            copy the bytes not align with the slice_size
            """
            if(last_slice_size > 0):
                copy_command = self.patching.dd_path
                copy_result = self.copy_internal(copy_command=copy_command,from_device=origin_device_path,to_device=self.destination,skip=total_slice_size,size=last_slice_size)
                if(copy_result==CommonVariables.process_success):
                    self.transactional_copy_config.save_config(CommonVariables.CurrentSliceIndexKey,(total_slice_size + 1))
                else:
                    return copy_result