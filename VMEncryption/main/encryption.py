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
import sys
import os
from common import CommonVariables
from subprocess import *  
from patch import *
from __builtin__ import False

class EncryptionError(object):
    def __init__(self):
        self.errorcode = CommonVariables.success
        self.state = None
        self.code = CommonVariables.success
        self.info = None
    def __str__(self):
        return "errorcode: " + str(self.errorcode) + " state:" + str(self.state) + " code:" + str(self.code) + " info:" + str(self.info)

class EncryptionDeviceParameter(object):
    def __init__(self):
        # this is the /dev/sdd1 path, and then we use the cryptsetup luksFormat
        # /dev/sdd1 to formati
        self.plain_target_dev_path = None
        self.dev_mapper_name = None
        self.dev_mapper_path = None
        self.passphrase = None
    pass

class VMEncryptionParameter(object):
    def __init__(self):
        # if it's the attach new scenario, the origin_disk_partition would be
        # empty.
        self.origin_disk_partitions = []
        self.target_disk_partitions = []

class VMEncryptionAttachNewParameter(VMEncryptionParameter):
     def __init__(self):
         super.__init__(self)
         self.filesystem = None
         self.force = False
         self.encrypted_device_mount_point = None
         self.mountpoint = None
         self.keydisk_mount_point = None

class VMEncryptionExistDiskParameter(VMEncryptionParameter):
    def __init__(self):
        super.__init__(self)
        self.exist_devpath = None
        self.force = False