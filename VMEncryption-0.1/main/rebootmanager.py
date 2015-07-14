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
from encryption import EncryptionError
import os
import os.path
from common import CommonVariables
class RebootManager(object):
    def __init__(self, hutil):
        self.hutil = hutil
        pass

    def configure_reboot(self, keydisk_mount_item ,encrypted_disk_mount_item,attached_encrypted_disk_item):
        error = EncryptionError()
        # append an item in the /etc/fstab
        # first we should try to mount the key disk
        # /dev/disk/by-label/KEYDISK /mnt/keydisk vfat defaults
        # /dev/mapper/sdc_encrypted /mnt/sdc_encrypted ext4 defaults

        # the string line would be add in the /etc/fstab
        #encrypted_disk_mount_item = encryption_parameters.dev_mapper_path + "
        #" + encryption_parameters.encrypted_device_mount_point + " " +
        #encryption_parameters.filesystem + " defaults\n"

        # the string added in to the /etc/crypttab
        # passphrase_file_path =
        # os.path.join(encryption_parameters.keydisk_mount_point,
        # CommonVariables.passphrase_file_name)
        #attached_encrypted_disk_item = encryption_parameters.dev_mapper_name +
        #" " + encryption_parameters.devpath + " " + passphrase_file_path + "
        #luks\n"

       
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
        return error
