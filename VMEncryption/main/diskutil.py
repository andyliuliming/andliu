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
class DiskCopy(object):
    def __init__(self,hutil):
        self.hutil = hutil

    def copy(self,from_device,to_device):
        #dd if=/dev/sda of=/dev/mapper/sda-crypt bs=512
        error = EncryptionError()
        self.hutil.log("copying from " + from_device + " to " + to_device)
        commandToExecute = '/bin/bash -c "' + 'dd if=' + from_device + ' of=' + to_device + ' bs=5M"'

        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "devpath is " + str(encryption_parameters.devpath) + " dev_mapper_name is " + str(encryption_parameters.dev_mapper_name)
            self.hutil.log('cryptsetup luksOpen returnCode is ' + str(returnCode))
        return error

class DiskPartition(object):
    def __init__(self):
        self.devname = ""
        self.devpath=""
        self.start = 0
        self.end=0

class DiskInfoParser(object):
    def __init__(self,hutil):
        self.hutil = hutil
    def get_disk_partitions(self,devpath):
        disk_partitions = []
        space_reserved = 8 * 1024
        space_index = 0
        diskPartition1 = DiskPartition()
        diskPartition1.devname = "sdc1"
        diskPartition1.devpath = "/dev/sdc1"
        diskPartition1.start = 2048 + space_reserved * space_index
        diskPartition1.end = 1000000 + space_reserved * space_index
        disk_partitions.append(diskPartition1)
        space_index += 1
        diskPartition2 = DiskPartition()
        diskPartition2.devname = "sdc2"
        diskPartition2.devpath = "/dev/sdc2"
        diskPartition2.start = 1000001 + space_reserved * space_index
        diskPartition2.end = 20971519 + space_reserved * space_index
        disk_partitions.append(diskPartition2)
        return None

class DiskPartitioner(object):
    def __init__(self,hutil):
        self.hutil = hutil
    def partit(self,disk_partitions):
        pass


