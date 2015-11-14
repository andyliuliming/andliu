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
    skip_source_size is in byte, skip_target_size is also in byte
    slice_size is in byte 50M
    """
    def __init__(self,logger, device_item, destination, patching, encryption_environment,slice_size=52428800,skip_source_size=0,skip_target_size=0):
        self.command_executer = CommandExecuter(self.logger)
        self.device_item = device_item
        self.destination = destination
        self.encryption_environment = encryption_environment
        self.logger = logger
        self.patching = patching
        self.skip_source_size = skip_source_size
        self.skip_target_size = skip_target_size
        self.slice_size = slice_size
        self.slice_file_path = self.tmpfs_mount_point + "/slice_file"
        self.tmpfs_mount_point = "/mnt/azure_encrypt_tmpfs"
        self.transactional_copy_config = ConfigUtil(encryption_environment.azure_crypt_current_transactional_copy_path,'azure_crypt_copy_config',logger)
    
    def prepare_mem_fs(self):
        commandToExecute = self.patching.mount_path + " -t tmpfs -o size=" + str(self.slice_size + 1024) + " tmpfs " + self.tmpfs_mount_point
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

    def begin_copy(self):
        """
        check the device_item size first, cut it 
        """
        total_size = self.device_item.size
        last_slice_size = total_size % self.slice_size
        total_slice_size = (total_size - last_slice_size) / self.slice_size

        origin_device_path = os.path.join("/dev/",self.device_item.name)
        returnCode = CommonVariables.success

        copy_command = None
        self.transactional_copy_config.save_config(CommonVariables.CurrentDeviceNameKey,self.device_item.name)
        self.transactional_copy_config.save_config(CommonVariables.CurrentSliceSizeKey,self.slice_size)
        self.transactional_copy_config.save_config(CommonVariables.CurrentTotalSizeKey,(total_slice_size + 1))
        for i in range(0, total_slice_size):
            copy_command = self.patching.dd_path
            self.copy_internal(copy_command=copy_command,from_device=origin_device_path,to_device=self.destination,skip=i,size=self.slice_size)
            self.transactional_copy_config.save_config(CommonVariables.CurrentSliceIndexKey,i)

        """
        copy the bytes not align with the slice_size
        """
        if(last_slice_size > 0):
            copy_command = self.patching.dd_path
            self.copy_internal(copy_command=copy_command,from_device=origin_device_path,to_device=self.destination,skip=total_slice_size,size=last_slice_size)
            self.transactional_copy_config.save_config(CommonVariables.CurrentSliceIndexKey,(total_slice_size + 1))
        return returnCode