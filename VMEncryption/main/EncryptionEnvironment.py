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
class EncryptionEnvironment(object):
    """description of class"""
    def __init__(self):
        self.encryptio_config_path = '/etc/azure_crypt_config.ini'
        self.azure_crypt_mount_config_path = '/etc/azure_crypt_mount'
        self.azure_crypt_request_queue_path = '/etc/azure_crypt_request_queue.ini'
        self.azure_crypt_transactional_copy_path = '/mnt/azure_transaction_copy'
        self.luks_header_path = '/azureluksheader'

    def make_sure_config_exists(self):
        pass