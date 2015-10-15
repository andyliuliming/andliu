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
    def __init__(self,logger, device_item, destination, patching, encryptionEnvironment):
        self.logger = logger
        self.encryptionEnvironment = encryptionEnvironment
        self.device_item = device_item
        self.destination = destination
        self.patching = patching
        self.slice_size = 52428800# this is in byte 50M
        self.command_executer = CommandExecuter(self.logger)
        self.tmpfs_mount_point = "/mnt/azure_encrypt_tmpfs"
        self.slice_file_path = self.tmpfs_mount_point + "/slice_file"
        self.transactional_copy_config = ConfigUtil(encryptionEnvironment.azure_crypt_current_transactional_copy_path,'azure_crypt_copy_config',logger)
    
    def prepare_mem_fs(self):
        commandToExecute = "mount -t tmpfs -o size=" + str(self.slice_size + 1024) + " tmpfs " + self.tmpfs_mount_point
        returnCode = self.command_executer.Execute(commandToExecute)
        return returnCode

    def clear_mem_fs(self):
        commandToExecute = "umount " + self.tmpfs_mount_point
        returnCode = self.command_executer.Execute(commandToExecute)
        return returnCode

    """
    TODO: if the copy failed?
    """
    def copy_internal(self,copy_command,from_device,to_device,skip,size):
        """
        first, copy the data to the middle cache
        """
        commandToExecute = '/bin/bash -c "' + str(copy_command) + ' if=' + from_device + ' of=' + self.slice_file_path + ' bs=' + str(size) + " skip=" + str(skip)
        #self.logger.log("copying from " + str(from_device) + " to " + str(to_device) + " using command " + str(commandToExecute))
        returnCode = self.command_executer.Execute(commandToExecute)
        if(returnCode != 0):
            self.logger.log(str(commandToExecute) + ' is ' + str(returnCode))

        """
        second, copy the data in the middle cache to the target device.
        """
        commandToExecute = '/bin/bash -c "' + str(copy_command) + ' if=' + self.slice_file_path + ' of=' + to_device + ' bs=' + str(size) + " seek=" + str(skip)
        #self.logger.log("copying from " + str(from_device) + " to " + str(to_device) + " using command " + str(commandToExecute))
        returnCode = self.command_executer.Execute(commandToExecute)
        if(returnCode != 0):
            self.logger.log(str(commandToExecute) + ' is ' + str(returnCode))

    def begin_copy(self):
        """
        check the device_item size first, cut it 
        """
        total_size = self.device_item.size
        last_slice_size = total_size % self.slice_size
        total_slice_size = (total_size - last_slice_size) / self.slice_size
        using_cp_to_copy = False
        if(self.patching.distro_info[0].lower() == "ubuntu" and self.patching.distro_info[1] == "12.04"):
            using_cp_to_copy = True

        origin_device_path = os.path.join("/dev/",self.device_item.name)
        returnCode = CommonVariables.success

        self.transactional_copy_config.save_config(CommonVariables.CurrentDeviceNameKey,self.device_item.name)
        self.transactional_copy_config.save_config(CommonVariables.CurrentSliceSizeKey,self.slice_size)
        for i in range(0, total_slice_size):
            self.transactional_copy_config.save_config(CommonVariables.CurrentSliceIndexKey,i)
            if(using_cp_to_copy):
                copy_command = 'sg_dd oflag=sparse'
            else:
                copy_command = 'dd conv=sparse'
            self.copy_internal(copy_command,origin_device_path,self.destination,i,self.slice_size)

        """
        copy the bytes not align with the slice_size
        """
        if(last_slice_size > 0):
            if(using_cp_to_copy):
                copy_command = 'sg_dd oflag=sparse'
            else:
                copy_command = 'dd conv=sparse'
            self.copy_internal(copy_command,origin_device_path,self.destination,total_slice_size,last_slice_size)
        return returnCode