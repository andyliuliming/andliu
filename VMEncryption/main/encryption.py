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
        return "errorcode: " + str(self.errorcode) + " state:" + str(self.state) + " code:" + (self.code) + " info:" + (self.info)

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

class Encryption(object):
    """
    description of class
    """
    def __init__(self, hutil):
        self.hutil = hutil

    #validate whether the paras are ok, check if the block device is indeed an
    #empty disk.

    def format_disk(self, filesystem,devpath):
        error = EncryptionError()
        mkfs_command = ""
        if(filesystem == "ext4"):
            mkfs_command = "mkfs.ext4"
        elif(filesystem == "ext3"):
            mkfs_command = "mkfs.ext3"
        elif(filesystem == "xfs"):
            mkfs_command = "mkfs.xfs"
        elif(filesystem == "btrfs"):
            mkfs_command = "mkfs.btrfs"

        commandToExecute = '/bin/bash -c "' + mkfs_command + ' ' + devpath + ' 2> /dev/null"'
        self.hutil.log("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mkfs_error
            error.info = "command to execute is " + commandToExecute
            self.hutil.log('mkfs_command returnCode is ' + str(returnCode))
        return error

    def encrypt_disk(self, devpath,passphrase,mappername):
        error = EncryptionError()
        self.hutil.log("dev path to cryptsetup luksFormat " + str(devpath))
        commandToExecute = '/bin/bash -c "' + 'echo -n "' + passphrase + '" | cryptsetup luksFormat ' + devpath + '"'

        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_format_error
            error.info = "devpath is " + str(devpath)
            self.hutil.log('cryptsetup -y luksFormat returnCode is ' + str(returnCode))
            return error

        commandToExecute = '/bin/bash -c "' + 'echo -n "' + passphrase + '" | cryptsetup luksOpen ' + devpath + ' ' + mappername + '"'
        self.hutil.log("dev mapper name to cryptsetup luksFormat " + (mappername))
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "devpath is " + str(devpath) + " dev_mapper_name is " + str(mappername)
            self.hutil.log('cryptsetup luksOpen returnCode is ' + str(returnCode))
            return error
        # we should specify the file system?
        # if self.paras.fstype is specified, then use it, if not, use ext4
        return error


    def encrypt_folder(self):
        error = EncryptionError()
        commandToExecute = 'ecryptfs-setup-private'
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait() 
        if(returnCode != 0):
            error.errorcode = returnCode
            self.hutil.log('returnCode is ' + str(returnCode))
        return error