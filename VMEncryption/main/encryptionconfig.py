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
import os.path
from ConfigParser import ConfigParser
class EncryptionConfig(object):
    def __init__(self):
        self.config_file_path = '/etc/azure_crypt_config.ini'
        self.azure_crypt_config_section = 'azure_crypt_config'

    def config_file_exists(self):
        return os.path.exists(self.config_file_path)

    def update_config(self, extension_parameter):
        bek_filename = self.get_bek_filename()
        bek_filesystem = self.get_bek_filesystem()
        if(extension_parameter.DiskEncryptionKeyFileName != None):
            if(bek_filename != extension_parameter.DiskEncryptionKeyFileName):
                self.save_bek_filename(extension_parameter.DiskEncryptionKeyFileName)

        if(extension_parameter.VolumeType != None):
            if(bek_filename != extension_parameter.VolumeType):
                self.save_bek_filesystem(extension_parameter.VolumeType)

    def save_config(self, prop_name, prop_value):
        #TODO make the operation an transaction.
        config = ConfigParser()
        if(os.path.exists(self.config_file_path)):
            config.read(self.config_file_path)
        # read values from a section
        if(not config.has_section(self.azure_crypt_config_section)):
            config.add_section(self.azure_crypt_config_section)
        config.set(self.azure_crypt_config_section, prop_name, prop_value)
        with open(self.config_file_path, 'wb') as configfile:
            config.write(configfile)

    def get_config(self,prop_name):
        # write the configs, the bek file name and so on.
        if(os.path.exists(self.config_file_path)):
            config = ConfigParser()
            config.read(self.config_file_path)
            # read values from a section
            prop_value = config.get(self.azure_crypt_config_section, prop_name)
            return prop_value
        else:
            return None

    def save_bek_filename(self, passphrase_file_name):
        self.save_config('BekFileName', passphrase_file_name)

    def get_bek_filename(self):
        return self.get_config('BekFileName')

    def save_bek_filesystem(self, bek_filesystem):
        self.save_config('BekFileSystem', bek_filesystem)

    def get_bek_filesystem(self):
        return self.get_config('BekFileSystem')