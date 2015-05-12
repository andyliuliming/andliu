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
class RebootManager(object):
    def __init__(self, hutil):
        self.hutil = hutil
        pass
    def configure_reboot(self, encryption_parameters):
        # append an item in the /etc/fstab
        # first we should try to mount the key disk
        # /dev/disk/by-label/KEYDISK /mnt/keydisk vfat defaults
        # /dev/mapper/sdc_encrypted /mnt/sdc_encrypted ext4 defaults

        if(not os.path.exists(encryption_parameters.mountpoint)):
            # create it
            self.hutil.Log("the mountpoint does not exist, create it" + encryption_parameters.mountpoint)
            os.mkdir(encryption_parameters.mountpoint)

        encryption_parameters.keydisk_mount_point = os.path.join(encryption_parameters.mountpoint, CommonVariables.key_disk_mountname)
        i = 0
        while(os.path.exists(encryption_parameters.keydisk_mount_point)):
            i+=1
            encryption_parameters.keydisk_mount_point = os.path.join(encryption_parameters.mountpoint, CommonVariables.key_disk_mountname + str(i))
        
        self.hutil.Log("creating the keydisk_mount_point " + encryption_parameters.keydisk_mount_point)
        os.mkdir(encryption_parameters.keydisk_mount_point)

        keydisk_mount_item = "/dev/disk/by-label/" + CommonVariables.key_disk_label + " " + encryption_parameters.keydisk_mount_point + " " + CommonVariables.key_disk_fs_type + " defaults\n"

        encryption_parameters.dev_mapper_path = os.path.join(CommonVariables.dev_mapper_path,encryption_parameters.devmapper_name)
        i = 0
        encryption_parameters.dev_mapper_name = encryption_parameters.devmapper_name
        while(os.path.exists(encryption_parameters.dev_mapper_path)):
            i+=1
            encryption_parameters.dev_mapper_name = encryption_parameters.devmapper_name + str(i)
            encryption_parameters.dev_mapper_path = os.path.join(CommonVariables.dev_mapper_path, encryption_parameters.devmapper_name + str(i))


        encryption_parameters.encrypted_disk_mount_point = os.path.join(encryption_parameters.mountpoint,encryption_parameters.mountname)
        i = 0
        encryption_parameters.mount_name = encryption_parameters.mountname
        while(os.path.exists(encryption_parameters.encrypted_disk_mount_point)):
            i += 1
            encryption_parameters.mount_name = encryption_parameters.mountname + str(i)
            encryption_parameters.encrypted_disk_mount_point = os.path.join(encryption_parameters.mountpoint, encryption_parameters.mountname + str(i))
        self.hutil.Log("creating the encrypted_disk_mount_point " + encryption_parameters.encrypted_disk_mount_point)
        os.mkdir(encryption_parameters.encrypted_disk_mount_point)
        # the string line would be add in the /etc/fstab
        encrypted_disk_mount_item = encryption_parameters.dev_mapper_path + " " + encryption_parameters.encrypted_disk_mount_point + " " + encryption_parameters.filesystem + " defaults\n"

        # the string added in to the /etc/crypttab
        passphrase_file_path = os.path.join(encryption_parameters.keydisk_mount_point,CommonVariables.passphrase_file_name)
        attached_encrypted_disk_item = encryption_parameters.dev_mapper_name + " " + encryption_parameters.devpath + " " + passphrase_file_path + " luks\n"

       
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
        return encryption_parameters
