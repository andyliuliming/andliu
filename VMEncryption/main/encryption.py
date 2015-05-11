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

class ConfigRebootResult:
    def __init__(self):
        self.dev_mapper_name = None
        self.mount_name = None
        self.encrypted_disk_mount_point = None
        self.dev_mapper_path = None
        self.key_disk_mount_point = None
        pass

class Encryption(object):
    """
    description of class
    """
    def __init__(self,hutil, paras):
        self.hutil = hutil
        self.paras = paras

    #validate whether the paras are ok, check if the block device is indeed an
    #empty disk.
    def validate_environment(self):
        # we should make sure that the disk is an empty disk.
        # call the lsblk -l /dev/sde
        
        self.hutil.log("dev path == " + str(self.paras.devpath))
        p = subprocess.Popen(['lsblk', '-l', self.paras.devpath], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        out_lsblk_output, err = p.communicate()
        out_lsblk_output = str(out_lsblk_output)

        self.hutil.log("out_lsblk_output" + out_lsblk_output)
        lines = out_lsblk_output.splitlines()
        line_number = len(lines)
        self.hutil.log("first line is " + str(lines[0]))
        headers = lines[0].strip().split()
        type_index = -1
        headers_items_length = len(headers)
        print("headers_items_length" + str(headers_items_length))
        for i in range(0,headers_items_length - 1):
            print(headers[i] + "i " + str(i))
            if(headers[i].strip().lower() == "type"):
                type_index = i
                break
        if(type_index == -1):
            return CommonVariables.environment_error

        is_blank_disk = True

        for x in range(1,line_number - 1):
            datas = lines[x].strip().split()
            if(datas[type_index].strip().lower() == 'disk'):
                is_blank_disk = False

        print("out_lsblk_output" + str(out_lsblk_output))
        if(not is_blank_disk):
            if(self.paras.force == "true"):
                return CommonVariables.success
            else:
                return CommonVariables.device_not_blank
        return CommonVariables.success

    def config_reboot(self):
        # append an item in the /etc/fstab
        # first we should try to mount the key disk
        # /dev/disk/by-label/KEYDISK /mnt/keydisk vfat defaults
        # /dev/mapper/sdc_encrypted /mnt/sdc_encrypted ext4 defaults
        config_result = ConfigRebootResult()

        if(not os.path.exists(self.paras.mountpoint)):
            # create it
            os.mkdir(self.paras.mountpoint)

        config_result.keydisk_mount_point = os.path.join(self.paras.mountpoint,CommonVariables.key_disk_mountname)
        i = 0
        while(os.path.exists(config_result.keydisk_mount_point)):
            i+=1
            config_result.keydisk_mount_point = os.path.join(self.paras.mountpoint,CommonVariables.key_disk_mountname + str(i))
            print("config_result.keydisk_mount_point==" + str(config_result.keydisk_mount_point))
        os.mkdir(config_result.keydisk_mount_point)

        keydisk_mount_item = "/dev/disk/by-label/" + CommonVariables.key_disk_label + " " + config_result.keydisk_mount_point + " " + CommonVariables.key_disk_fs_type + " defaults\n"

        config_result.dev_mapper_path = os.path.join(CommonVariables.dev_mapper_path,self.paras.devmapper_name)
        i = 0
        config_result.dev_mapper_name = self.paras.devmapper_name
        while(os.path.exists(config_result.dev_mapper_path)):
            i+=1
            config_result.dev_mapper_name = self.paras.devmapper_name + str(i)
            config_result.dev_mapper_path = os.path.join(CommonVariables.dev_mapper_path, self.paras.devmapper_name + str(i))


        config_result.encrypted_disk_mount_point = os.path.join(self.paras.mountpoint,self.paras.mountname)
        i = 0
        config_result.mount_name = self.paras.mountname
        while(os.path.exists(config_result.encrypted_disk_mount_point)):
            i+=1
            config_result.mount_name = self.paras.mountname + str(i)
            config_result.encrypted_disk_mount_point = os.path.join(self.paras.mountpoint, self.paras.mountname + str(i))
        os.mkdir(config_result.encrypted_disk_mount_point)
        # the string line would be add in the /etc/fstab
        encrypted_disk_mount_item = config_result.dev_mapper_path + " " + config_result.encrypted_disk_mount_point + " " + self.paras.filesystem + " defaults\n"

        # the string added in to the /etc/crypttab
        passphrase_file_path = os.path.join(config_result.keydisk_mount_point,CommonVariables.passphrase_file_name)
        attached_encrypted_disk_item = config_result.dev_mapper_name + " " + self.paras.devpath + " " + passphrase_file_path + " luks\n"


        fstab_file_handler = open("/etc/fstab","r+")
        fstab_file_handler.seek(-2, 2)
        file_end_two_char = fstab_file_handler.read(2)
        if(file_end_two_char.find('\n') == -1):
            fstab_file_handler.seek(0,2)
            fstab_file_handler.write('\n')
        fstab_file_handler.write(keydisk_mount_item)
        fstab_file_handler.write(encrypted_disk_mount_item)
        fstab_file_handler.close()

        crypttab_file_handler = open("/etc/crypttab","r+")
        crypttab_file_handler.seek(-2, 2)
        file_end_two_char = crypttab_file_handler.read(2)
        if(file_end_two_char.find('\n') == -1):
            crypttab_file_handler.seek(0,2)
            crypttab_file_handler.write('\n')
        crypttab_file_handler.write(attached_encrypted_disk_item)
        crypttab_file_handler.close()

        #TODO we should run the cryptdisks_start encrypted_disk_mapper to do a
        #check
        return config_result

    def encrypt(self, config_result):
        error = EncryptionError()
        # TODO we should support the unicode passphrase?
        if(self.paras.command == 'disk'):
            # handle the error cases
            # #
            # {"command":"disk","query":{"scsi_number":"[5:0:0:1]","devpath":"/dev/sdb"},
            # "filesystem":"ext4","devmapper":"sdb_encrypt","mountname":"mountname","mountpoint":"/mnt/","password":"password1","passphrase":"User@123"
            commandToExecute = '/bin/bash -c "' + 'echo -n "' + self.paras.passphrase + '" | cryptsetup luksFormat ' + self.paras.devpath + '"'
            # print(commandToExecute)
            proc = Popen(commandToExecute, shell=True)
            returnCode = proc.wait()
            if(returnCode != 0):
                error.errorcode = returnCode
                error.code = CommonVariables.luks_format_error
                error.info = "devpath is " + str(self.paras.devpath)
                print('cryptsetup -y luksFormat returnCode is ' + str(returnCode))
                return error

            commandToExecute = '/bin/bash -c "' + 'echo -n "' + self.paras.passphrase + '" | cryptsetup luksOpen ' + self.paras.devpath + ' ' + config_result.dev_mapper_name + '"'
            #print(commandToExecute)
            proc = Popen(commandToExecute, shell=True)
            returnCode = proc.wait()
            if(returnCode != 0):
                error.errorcode = returnCode
                error.code = CommonVariables.luks_open_error
                error.info = "devpath is " + str(self.paras.devpath) + " dev_mapper_name is " + str(config_result.dev_mapper_name)
                print('cryptsetup luksOpen returnCode is ' + str(returnCode))
                return error

            # we should specify the file system?
            # if self.paras.fstype is specified, then use it, if not, use ext4
            mkfs_command = ""
            if(self.paras.filesystem == "ext4"):
                mkfs_command = "mkfs.ext4"
            elif(self.paras.filesystem == "ext3"):
                mkfs_command = "mkfs.ext3"
            elif(self.paras.filesystem == "xfs"):
                mkfs_command = "mkfs.xfs"
            elif(self.paras.filesystem == "btrfs"):
                mkfs_command = "mkfs.btrfs"
                pass
            commandToExecute = '/bin/bash -c "' + mkfs_command + ' ' + config_result.dev_mapper_path + ' <<< ' + config_result.mount_name + ' 2> /dev/null"'
            print(commandToExecute)
            proc = Popen(commandToExecute, shell=True)
            returnCode = proc.wait()
            if(returnCode != 0):
                error.errorcode = returnCode
                error.code = CommonVariables.mkfs_error
                error.info = "commandToExecute is " + commandToExecute
                print('mkfs_command returnCode is ' + str(returnCode))
                return error

            commandToExecute = '/bin/bash -c "mount ' + config_result.dev_mapper_path + ' ' + (config_result.encrypted_disk_mount_point) + ' 2> /dev/null"'
            print(commandToExecute)
            proc = Popen(commandToExecute, shell=True)
            returnCode = proc.wait()
            if(returnCode != 0):
                error.errorcode = returnCode
                error.code = CommonVariables.mount_error
                error.info = "commandToExecute is " + commandToExecute
                print('mount returnCode is ' + str(returnCode))
                return error

        elif(self.paras.command == 'folder'):
            commandToExecute = 'ecryptfs-setup-private'
            proc = Popen(commandToExecute, shell=True)
            returnCode = proc.wait() 
            if(returnCode != 0):
                error.errorcode = returnCode
                print('returnCode is ' + str(returnCode))
                return error
        return error

