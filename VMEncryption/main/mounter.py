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
import os
import subprocess
from subprocess import *
import shutil
import uuid
from encryption import EncryptionError
from common import CommonVariables

class Mounter(object):
    def __init__(self,logger,hutil):
        self.hutil = hutil

    def get_mounts(self):
        mounts = []
        p = subprocess.Popen(['lsblk', '-l', '-n','-o','NAME,TYPE,FSTYPE,MOUNTPOINT'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        out_lsblk_output, err = p.communicate()
        out_lsblk_output = str(out_lsblk_output)
        self.logger.log("out_lsblk_output:\n" + str(out_lsblk_output))
        lines = out_lsblk_output.splitlines()
        line_number = len(lines)
        for i in range(0,line_number):
            item_value_str=lines[i].strip()
            if(item_value_str != null):
                item_value = item_value_str.split()
                if(len(item_value)>3):
                    name = item_value[0]
                    type = item_value[1]
                    fstype = item_value[2]
                    mountpoint = item_value[3]
                    mount = Mount(name, type, fstype, mountpoint)
                    
#                2015/07/27 22:52:59 sda                    disk             
#2015/07/27 22:52:59 sda1                   part xfs         /boot
#2015/07/27 22:52:59 sda2                   part xfs         /
#2015/07/27 22:52:59 sdb                    disk             
#2015/07/27 22:52:59 sdb1                   part ext4        /tmp
#2015/07/27 22:52:59 sdc                    disk LVM2_member 
#2015/07/27 22:52:59 VG_STRIPED-SDI_STRIPED lvm  xfs         /home
#2015/07/27 22:52:59 sdd                    disk LVM2_member 
#2015/07/27 22:52:59 VG_STRIPED-SDI_STRIPED lvm  xfs         /home
#2015/07/27 22:52:59 sde                    disk LVM2_member 
#2015/07/27 22:52:59 VG_STRIPED-SDI_STRIPED lvm  xfs         /home
#2015/07/27 22:52:59 sdf                    disk LVM2_member 
#2015/07/27 22:52:59 VG_STRIPED-SDI_STRIPED lvm  xfs         /home


#2015/07/16 21:11:58 fd0         disk                    
#2015/07/16 21:11:58 sda         disk  linux_raid_member 
#2015/07/16 21:11:58 md127       raid0 ext4              /data
#2015/07/16 21:11:58 sdb         disk  LVM2_member       
#2015/07/16 21:11:58 vg03-lv_app lvm   ext4              /app
#2015/07/16 21:11:58 sdc         disk  linux_raid_member 
#2015/07/16 21:11:58 md127       raid0 ext4              /data
#2015/07/16 21:11:58 sdd         disk  linux_raid_member 
#2015/07/16 21:11:58 md127       raid0 ext4              /data
#2015/07/16 21:11:58 sde         disk                    
#2015/07/16 21:11:58 sde1        part  ext4              /
#2015/07/16 21:11:58 sdf         disk                    
#2015/07/16 21:11:58 sdf1        part  ext3              /mnt/resource
                    inserted=False
                    for j in range(0,len(mounts)):
                        if(mounts[j].name==name):
                            inserted=True
                    if(not inserted):
                        mounts.append(mount)
        return mounts

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