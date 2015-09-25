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
from common import CommonVariables
from ConfigParser import ConfigParser
from ConfigUtil import ConfigUtil

class EncryptionConfig(object):
    def __init__(self, encryptionEnvironment,logger):
        self.encryptionEnvironment = encryptionEnvironment
        self.encryption_config = ConfigUtil(encryptionEnvironment.encryptio_config_path,'azure_crypt_config',logger)

    def config_file_exists(self):
        return self.encryption_config.config_file_exists()

    def save_bek_filename(self, passphrase_file_name):
        self.encryption_config.save_config(CommonVariables.PassphraseFileNameKey, passphrase_file_name)

    def get_bek_filename(self):
        return self.encryption_config.get_config(CommonVariables.PassphraseFileNameKey)

    def save_bek_filesystem(self, bek_filesystem):
        self.encryption_config.save_config(CommonVariables.VolumeTypeKey, bek_filesystem)

    def get_bek_filesystem(self):
        return self.encryption_config.get_config(CommonVariables.VolumeTypeKey)

    def save_secret_uri(self,secret_uri):
        self.encryption_config.save_config(CommonVariables.SecretUriKey,secret_uri)

    def get_secret_uri(self):
        return self.encryption_config.get_config(CommonVariables.SecretUriKey)
