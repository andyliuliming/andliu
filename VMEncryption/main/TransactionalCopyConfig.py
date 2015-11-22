#!/usr/bin/env python
#
# VMEncryption extension
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
import subprocess
import os
import os.path
import sys
from subprocess import *
from CommandExecuter import CommandExecuter
from Common import CommonVariables
from ConfigUtil import *

class TransactionalCopyConfig(object):
    def __init__(self, encryption_environment,logger):
        self.encryptionEnvironment = encryption_environment
        self.source_dev_full_path = None
        self.block_size = None
        self.total_size = None
        self.current_slice_index = None
        self.from_end = None
        # we should have different file for different device.
        self.transactional_copy_config = ConfigUtil(encryption_environment.azure_crypt_current_transactional_copy_path,'azure_crypt_copy_config',logger)

    def config_file_exists(self):
        return self.transactional_copy_config.config_file_exists()

    def get_total_size(self):
        return self.transactional_copy_config.get_config(CommonVariables.CurrentTotalSizeKey)

    def get_slice_size(self):
        return self.transactional_copy_config.get_config(CommonVariables.CurrentSliceSizeKey)

    def get_current_slice_index(self):
        return self.transactional_copy_config.get_config(CommonVariables.CurrentSliceIndexKey)

    def get_current_source_dev_path(self):
        return self.transactional_copy_config.get_config(CommonVariables.CurrentDeviceNameKey)

    def get_current_from_end(self):
        return self.transactional_copy_config.get_config(CommonVariables.CurrentFromEndKey)

    def commit(self):
        key_value_pairs = []
        total_size_pair = ConfigKeyValuePair(CommonVariables.CurrentTotalSizeKey,self.total_size)
        key_value_pairs.append(total_size_pair)

        slice_size_pair = ConfigKeyValuePair(CommonVariables.CurrentSliceSizeKey,self.block_size)
        key_value_pairs.append(slice_size_pair)

        source_dev_full_path_pair = ConfigKeyValuePair(CommonVariables.CurrentDeviceNameKey,self.source_dev_full_path)
        key_value_pairs.append(source_dev_full_path)

        current_slice_index_pair = ConfigKeyValuePair(CommonVariables.CurrentSliceIndexKey,self.current_slice_index)
        key_value_pairs.append(current_slice_index_pair)

        from_end_pair = ConfigKeyValuePair(CommonVariables.CurrentFromEndKey,self.from_end)
        key_value_pairs.append(from_end_pair)

        self.transactional_copy_config.save_configs(key_value_pairs)