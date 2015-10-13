﻿#!/usr/bin/env python
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
from Common import CommonVariables
from ConfigParser import ConfigParser
from ConfigUtil import ConfigUtil
from ConfigUtil import ConfigKeyValuePair
class EncryptionConfig(object):
    def __init__(self, encryptionEnvironment,logger):
        self.encryptionEnvironment = encryptionEnvironment
        self.encryption_config = ConfigUtil(encryptionEnvironment.encryption_config_path,'azure_crypt_config',logger)
        self.passphrase_file_name = None
        self.bek_filesystem = None
        self.secret_id = None

    def config_file_exists(self):
        return self.encryption_config.config_file_exists()

    def get_bek_filename(self):
        return self.encryption_config.get_config(CommonVariables.PassphraseFileNameKey)
    
    def get_bek_filesystem(self):
        return self.encryption_config.get_config(CommonVariables.BekVolumeFileSystemKey)

    def get_secret_id(self):
        return self.encryption_config.get_config(CommonVariables.SecretUriKey)

    def commit(self):
        key_value_pairs = []
        command = ConfigKeyValuePair(CommonVariables.PassphraseFileNameKey,self.passphrase_file_name)
        key_value_pairs.append(command)
        volume_type = ConfigKeyValuePair(CommonVariables.VolumeTypeKey,self.bek_filesystem)
        key_value_pairs.append(volume_type)
        parameters = ConfigKeyValuePair(CommonVariables.SecretUriKey,self.secret_id)
        key_value_pairs.append(parameters)
        self.encryption_config.save_configs(key_value_pairs)