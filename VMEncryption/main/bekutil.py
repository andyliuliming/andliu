﻿#!/usr/bin/env python
#
# VM Backup extension
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
from diskutil import *
import os.path
class BekUtil(object):
    """description of class"""
    def __init__(self,disk_util):
        self.disk_util = disk_util
        self.bek_filesystem_mount_point = '/mnt/azure_passphrase'

    def get_bek_passphrase(self,bek_filename,bek_filesystem):
        azure_devices = self.disk_util.get_azure_devices()
        pass_phrase=None
        for i in range(0,len(azure_devices)):
            azure_device = azure_devices[i]
            if(azure_device.fstype == bek_filesystem):
                #TODO handle the failure case
                disk_util.make_sure_disk_exists(self.bek_filesystem_mount_point)
                disk_util.mount_filesystem(os.path.join('/dev/' + azure_device.name),"/mnt/azure_passphrase",bek_filesystem)
                #search for the passphrase file.
                if(os.path.exists(os.path.join(self.bek_filesystem_mount_point,bek_filename))):
                    with open("/etc/fstab",'r') as f:
                        pass_phrase = f.read()
                disk_util.umount(self.bek_filesystem_mount_point)
        return pass_phrase