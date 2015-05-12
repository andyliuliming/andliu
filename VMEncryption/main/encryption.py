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
from keymanager import *
from __builtin__ import False

class EncryptionError(object):
    def __init__(self):
        self.errorcode = None
        self.state = None
        self.code = None
        self.info = None
        
class EncryptionParameter(object):
     def __init__(self):
         self.devpath = None
         self.mountname = None
         self.mountpoint = None
         self.filesystem = None
         self.devmapper_name = None
         self.force = False
         self.keydisk_mount_point = None
         self.dev_mapper_path = None
         self.encrypted_disk_mount_point = None
         pass

class Encryption(object):
    """
    description of class
    """
    def __init__(self,hutil):
        self.hutil = hutil

    #validate whether the paras are ok, check if the block device is indeed an
    #empty disk.

    def encrypt_new_disk(self, encryption_parameters):
        error = EncryptionError()
        # handle the error cases
        # #
        # {"command":"disk","query":{"scsi_number":"[5:0:0:1]","devpath":"/dev/sdb"},
        # "filesystem":"ext4","devmapper":"sdb_encrypt","mountname":"mountname","mountpoint":"/mnt/","password":"password1","passphrase":"User@123"
        commandToExecute = '/bin/bash -c "' + 'echo -n "' + encryption_parameters.passphrase + '" | cryptsetup luksFormat ' + encryption_parameters.devpath + '"'
        # print(commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_format_error
            error.info = "devpath is " + str(encryption_parameters.devpath)
            print('cryptsetup -y luksFormat returnCode is ' + str(returnCode))
            return error

        commandToExecute = '/bin/bash -c "' + 'echo -n "' + encryption_parameters.passphrase + '" | cryptsetup luksOpen ' + encryption_parameters.devpath + ' ' + encryption_parameters.dev_mapper_name + '"'
        #print(commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "devpath is " + str(encryption_parameters.devpath) + " dev_mapper_name is " + str(encryption_parameters.dev_mapper_name)
            print('cryptsetup luksOpen returnCode is ' + str(returnCode))
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
            pass
        commandToExecute = '/bin/bash -c "' + mkfs_command + ' ' + encryption_parameters.dev_mapper_path + ' <<< ' + encryption_parameters.mount_name + ' 2> /dev/null"'
        print(commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mkfs_error
            error.info = "commandToExecute is " + commandToExecute
            print('mkfs_command returnCode is ' + str(returnCode))
            return error

        commandToExecute = '/bin/bash -c "mount ' + encryption_parameters.dev_mapper_path + ' ' + (encryption_parameters.encrypted_disk_mount_point) + ' 2> /dev/null"'
        print(commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mount_error
            error.info = "commandToExecute is " + commandToExecute
            print('mount returnCode is ' + str(returnCode))
            return error
        pass

    """
    encrypt the existing disk
    """
    def encrypt_existing_disk(self):
        # check whether the new attached disk is bigger than the existing one.

        pass

    def encrypt(self, encryption_parameters):
        error = None
        # TODO we should support the unicode passphrase?
        if(encryption_parameters.command == 'newdisk'):
            error = self.encrypt_new_disk(config_result)
        elif(encryption_parameters.command == 'existingdisk'):
            pass
        elif(encryption_parameters.command == 'folder'):
            error = EncryptionError()
            commandToExecute = 'ecryptfs-setup-private'
            proc = Popen(commandToExecute, shell=True)
            returnCode = proc.wait() 
            if(returnCode != 0):
                error.errorcode = returnCode
                print('returnCode is ' + str(returnCode))
                return error
        return error

