﻿#!/usr/bin/env python
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
import os
import subprocess
from subprocess import *
import shutil
import uuid
from encryption import EncryptionError
from common import CommonVariables

class Mounter(object):
    def __init__(self,hutil):
        self.hutil = hutil
        pass
    
    """
    replace the mounts entry from the orign disk partition to the target_disk_partition
    """
    def update_mount_info(self, encryption_items):
        # get the output of mount
        # get the content of fstab
        # [Device] [Mount Point] [File System Type] [Options] [Dump] [Pass]
        # backup the /etc/fstab file
        # TODO Handle exception

        shutil.copy2('/etc/fstab', '/etc/fstab.backup'+str(str(uuid.uuid4())))

        new_mount_content = ""
        with open("/etc/fstab",'r') as f:
            mount_lines = f.read().splitlines()
            for i in range(len(mount_lines)):
                line_stripped = mount_lines[i].strip()
                if(not line_stripped.startswith("#") and not line_stripped == ""):
                    """
                    /dev/sdb1 /mnt auto defaults,nobootwait,comment=cloudconfig 0 2
                    """
                    print ("mount_lines[i] == " + str(mount_lines[i]))
                    item_array = mount_lines[i].split()
                    dev_path_in_mount = item_array[0]
                    for j in range(len(encryption_items)):
                        encryption_item = encryption_items[j]
                        found = False
                        for k in range(len(encryption_item.origin_disk_partitions)):
                            if(dev_path_in_mount == encryption_item.origin_disk_partitions[k].dev_path):
                                white_space = " "
                                item_array[0] = encryption_item.target_disk_partitions[k].dev_path
                                new_mount_content = new_mount_content + "\n" + white_space.join(item_array)
                                found = True
                                pass
                            if (dev_path_in_mount == encryption_item.origin_disk_partitions[k].uuid_path):
                                white_space = " "
                                item_array[0] = encryption_item.target_disk_partitions[k].uuid_path
                                new_mount_content = new_mount_content + "\n" + white_space.join(item_array)
                                found = True
                        if(not found):
                            new_mount_content = new_mount_content + mount_lines[i]
                else:
                    new_mount_content = new_mount_content + "\n" + line_stripped
        with open("/etc/fstab",'w') as wf:
            wf.write(new_mount_content)

    def mount_all(self):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "mount -a 2> /dev/null"'
        self.hutil.log("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mount_error
            error.info = "commandToExecute is " + commandToExecute
            self.hutil.log('mount returnCode is ' + str(returnCode))
        return error