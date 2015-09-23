#!/usr/bin/env python
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
class CommonVariables:
    azure_path = 'main/azure'
    utils_path_name = 'Utils'
    extension_name = 'VMEncryption'
    extension_version = 0.1 
    extension_type = extension_name
    extension_media_link = 'https://andliu.blob.core.windows.net/extensions/' + extension_name + '-' + str(extension_version) + '.zip'
    extension_label = 'Windows Azure VMEncryption Extension for Linux IaaS'
    extension_description = extension_label
    default_file_system = 'ext4'
    default_mount_name = 'encrypted_disk'
    dev_mapper_root = '/dev/mapper/'
    extension_success_status = 'success'
    extension_error_status = 'error'
    BekVolumeFileSystem = 'vfat'
    """
    parameter key names
    """
    PassphraseFileNameKey = 'BekFileName'
    KeyEncryptionKeyURLKey = 'KeyEncryptionKeyURL'
    KeyVaultURLKey = 'KeyVaultURL'
    AADClientIDKey = 'AADClientID'
    KeyEncryptionAlgorithmKey = 'KeyEncryptionAlgorithm'
    DiskFormatQuerykey = "DiskFormatQuery"
    """
    value for VolumeTypeKey could be OS or Data
    """
    VolumeTypeKey = 'BitlockerVolumeType'
    AADClientSecretKey = 'AADClientSecret'
    SecretUriKey = 'SecretUri'

    """
    command types
    """
    enableencryption_all_inplace = 'enableencryption_all_inplace'
    enableencryption_format = 'enableencryption_format'

    # error code
    success = 0
    os_not_supported = 1
    luks_format_error = 2
    scsi_number_not_found = 3
    device_not_blank = 4
    environment_error = 5
    luks_open_error = 6
    mkfs_error = 7
    folder_conflict_error = 8
    mount_error = 9
    mount_point_not_exists = 10
    passphrase_too_long_or_none = 11
    parameter_error = 12
    create_encryption_secret_failed = 13
    encrypttion_already_enabled = 14
    passphrase_file_not_found = 15
    command_not_support = 16
    volue_type_not_support = 17
    copy_data_error = 18
    unknown_error = 100

class TestHooks:
    search_not_only_ide = False
    use_hard_code_passphrase = False
    hard_code_passphrase = "Quattro!"

class EncryptionError(object):
    def __init__(self):
        self.errorcode = CommonVariables.success
        self.state = None
        self.code = CommonVariables.success
        self.info = None
    def __str__(self):
        return "errorcode: " + str(self.errorcode) + " state:" + str(self.state) + " code:" + str(self.code) + " info:" + str(self.info)

class LsblkItem(object):
    def __init__(self):
        #NAME,TYPE,FSTYPE,MOUNTPOINT,LABEL,UUID,MODEL
        self.name = None
        self.type = None
        self.fstype = None
        self.mountpoint = None
        self.label = None
        self.uuid = None
        self.model = None
        self.size = None
    def __str__(self):
        return "name:" + str(self.name) + " type:" + str(self.type) + " fstype:" + str(self.fstype) + " mountpoint:" + str(self.mountpoint) + " label" + str(self.label) + " model:" + str(self.model)

class CryptItem(object):
    def __init__(self):
        self.mapper_name = None
        self.dev_path = None
        self.mount_point = None
        self.file_system = None
        self.luks_header_path = None
        
    def __str__(self):
        return "name: " + str(self.mapper_name) + " dev_path:" + str(self.dev_path) + " mount_point:" + str(self.mount_point) + " file_system:" + str(self.file_system) + " luks_header_path:" + str(self.luks_header_path)

class DiskPartition(object):
    def __init__(self):
        self.dev_path = ""
        self.start = 0
        self.end = 0
        self.size = 0
        self.name = ""
        self.type = ""
        self.uuid_path = ""

class EncryptionItem(object):
    def __init__(self):
        self.exist_disk_path = None
        """
        flag whether we just format it
        """
        self.encryption_dev_root_path = None
        self.origin_disk_partitions = None
        self.target_disk_partitions = None
