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
        self.errorcode = None
        self.state = None
        self.code = None
        self.info = None

class Encryption(object):
    """
    description of class
    """
    def __init__(self,hutil):
        self.hutil = hutil

    #validate whether the paras are ok, check if the block device is indeed an
    #empty disk.

    def encrypt_disk(self, encryption_parameters):
        error = EncryptionError()
        print("#########"+encryption_parameters.passphrase)
        print("#########"+encryption_parameters.devpath)
        commandToExecute = '/bin/bash -c "' + 'echo -n "' + encryption_parameters.passphrase + '" | cryptsetup luksFormat ' + encryption_parameters.devpath + '"'

        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_format_error
            error.info = "devpath is " + str(encryption_parameters.devpath)
            self.hutil.log('cryptsetup -y luksFormat returnCode is ' + str(returnCode))
            return error

        commandToExecute = '/bin/bash -c "' + 'echo -n "' + encryption_parameters.passphrase + '" | cryptsetup luksOpen ' + encryption_parameters.devpath + ' ' + encryption_parameters.dev_mapper_name + '"'

        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "devpath is " + str(encryption_parameters.devpath) + " dev_mapper_name is " + str(encryption_parameters.dev_mapper_name)
            self.hutil.log('cryptsetup luksOpen returnCode is ' + str(returnCode))
            return error

        # we should specify the file system?
        # if self.paras.fstype is specified, then use it, if not, use ext4
        mkfs_command = ""
        if(encryption_parameters.filesystem == "ext4"):
            mkfs_command = "mkfs.ext4"
        elif(encryption_parameters.filesystem == "ext3"):
            mkfs_command = "mkfs.ext3"
        elif(encryption_parameters.filesystem == "xfs"):
            mkfs_command = "mkfs.xfs"
        elif(encryption_parameters.filesystem == "btrfs"):
            mkfs_command = "mkfs.btrfs"

        commandToExecute = '/bin/bash -c "' + mkfs_command + ' ' + encryption_parameters.dev_mapper_path + ' <<< ' + encryption_parameters.mount_name + ' 2> /dev/null"'
        self.hutil.log("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mkfs_error
            error.info = "commandToExecute is " + commandToExecute
            self.hutil.log('mkfs_command returnCode is ' + str(returnCode))
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