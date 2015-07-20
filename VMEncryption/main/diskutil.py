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
        self.size = 0
        self.name = ""
        self.type = ""

class DiskUtil(object):
    def __init__(self,hutil):
        self.hutil = hutil

    def copy(self,from_device,to_device):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "' + 'dd conv=sparse if=' + from_device + ' of=' + to_device + ' bs=512"'
        
        self.hutil.log("copying from " + str(from_device) + " to " + str(to_device) + " using command " + str(commandToExecute))
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "from_device is " + str(from_device) + " to_device is " + str(to_device)
            self.hutil.log('cryptsetup luksOpen returnCode is ' + str(returnCode))
        return error

    def get_disk_partition_table_type(self,devpath):
        # parted /dev/sdc print
        # and find for Partition Table: msdos
        # TODO: implement this
        return "mbr"

    def get_disk_partitions(self, devpath):
        #TODO check the dev path parameter
        disk_partitions = []
        
        p = subprocess.Popen(['lsblk', '-b', '-n', '-P', '-o','NAME,TYPE,FSTYPE,SIZE,MOUNTPOINT', devpath], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        out_lsblk_output, err = p.communicate()
        out_lsblk_output = str(out_lsblk_output)
        self.hutil.log("out_lsblk_output:\n" + str(out_lsblk_output))
        disk_info_lines = out_lsblk_output.splitlines()
        line_number = len(disk_info_lines)
        for i in range(0,line_number):
            disk_info_item_value = disk_info_lines[i].strip()
            disk_info_item_array = disk_info_item_value.split()
            disk_info_item_array_length = len(disk_info_item_array)
            partition = DiskPartition()
            for j in range(0, disk_info_item_array_length):
                disk_info_property = disk_info_item_array[j]
                if(disk_info_property.startswith('SIZE')):
                    partition.size = long(disk_info_property.split('=')[1].strip('"'))
                if(disk_info_property.startswith('NAME')):
                    partition.name = disk_info_property.split('=')[1].strip('"')
                    partition.dev_path = "/dev/" + partition.name
                if(disk_info_property.startswith('TYPE')):
                    partition.type = disk_info_property.split('=')[1].strip('"')
            # skip the disk, because we do not need the
            if(partition.type == "part"):
                disk_partitions.append(partition)
        return disk_partitions

    def clone_partition_table(self, target_dev, source_dev):
        # partition it
        # http://superuser.com/questions/823922/dm-cryptluks-can-i-have-a-separate-header-without-storing-it-on-the-luks-encry
        commandToExecute = '/bin/bash -c "' + 'sfdisk -d ' + source_dev + ' | sfdisk --force ' + target_dev + '"'
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        pass

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
        commandToExecute = '/bin/bash -c "' + mkfs_command + ' ' + dev_path + ' 2> /dev/null"'
        self.hutil.log("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mkfs_error
            error.info = "command to execute is " + commandToExecute
            self.hutil.log('mkfs_command returnCode is ' + str(returnCode))
        return error


