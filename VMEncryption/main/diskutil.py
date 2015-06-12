#!/usr/bin/env python
#
# VMEncryption extension
#
# Copyright 2014 Microsoft Corporation
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
import sys  
from subprocess import *  
from encryption import EncryptionError
from common import CommonVariables

class DiskPartition(object):
    def __init__(self):
        self.dev_path = ""
        self.start = 0
        self.end = 0

class DiskUtil(object):
    def __init__(self,hutil):
        self.hutil = hutil
        pass
    def copy(self,from_device,to_device):
        #dd if=/dev/sda of=/dev/mapper/sda-crypt bs=512
        error = EncryptionError()
        self.hutil.log("copying from " + from_device + " to " + to_device)
        commandToExecute = '/bin/bash -c "' + 'dd if=' + from_device + ' of=' + to_device + ' bs=512K"'

        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "from_device is " + str(from_device) + " to_device is " + str(to_device)
            self.hutil.log('cryptsetup luksOpen returnCode is ' + str(returnCode))
        return error
    def get_disk_partitions(self,devpath):
        disk_partitions = []
        space_reserved = 8 * 1024
        space_index = 0
        diskPartition1 = DiskPartition()
        diskPartition1.dev_path = "/dev/sdc1"
        diskPartition1.start = 2048 
        diskPartition1.end = 1000000 
        disk_partitions.append(diskPartition1)
        space_index += 1
        diskPartition2 = DiskPartition()
        diskPartition2.dev_path = "/dev/sdc2"
        diskPartition2.start = 1000001
        diskPartition2.end = 4194303 
        disk_partitions.append(diskPartition2)
        return disk_partitions

    def partit(self,target_dev,origin_disk_partitions):
        target_disk_partitions = []
        space_reserved = 8 * 1024
        space_index = 0
        diskPartition1 = DiskPartition()
        diskPartition1.dev_path = "/dev/sdd1"
        diskPartition1.start = 2048 + space_reserved * space_index
        diskPartition1.end = 1000000 + space_reserved * space_index
        target_disk_partitions.append(diskPartition1)
        space_index += 1
        diskPartition2 = DiskPartition()
        diskPartition2.dev_path = "/dev/sdd2"
        diskPartition2.start = 1000001 + space_reserved * space_index
        diskPartition2.end = 4194303 + space_reserved * space_index
        target_disk_partitions.append(diskPartition2)
        return target_disk_partitions

    def format_disk(self, dev_path):
        error = EncryptionError()
        mkfs_command = ""
        if(encryption_parameters.filesystem == "ext4"):
            mkfs_command = "mkfs.ext4"
        elif(encryption_parameters.filesystem == "ext3"):
            mkfs_command = "mkfs.ext3"
        elif(encryption_parameters.filesystem == "xfs"):
            mkfs_command = "mkfs.xfs"
        elif(encryption_parameters.filesystem == "btrfs"):
            mkfs_command = "mkfs.btrfs"
        #' <<< ' + encryption_parameters.mount_name +
        commandToExecute = '/bin/bash -c "' + mkfs_command + ' ' + dev_path +  ' 2> /dev/null"'
        self.hutil.log("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mkfs_error
            error.info = "command to execute is " + commandToExecute
            self.hutil.log('mkfs_command returnCode is ' + str(returnCode))
        return error


