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
import os
import os.path
import traceback
from ConfigUtil import *
from Common import CommonVariables

class EncryptionRequest(object):
    def __init__(self,logger):
        self.command = None
        self.volume_type = None
        self.parameters = None
        self.logger = logger

class EncryptionMark(object):
    def __init__(self,logger,encryptionEnvironment):
        self.logger = logger
        self.encryptionEnvironment = encryptionEnvironment
        self.encryption_config = ConfigUtil(self.encryptionEnvironment.azure_crypt_request_queue_path,'encryption_request_queue',self.logger)

    def mark_encryption(self, encryption_request):
        key_value_pairs = []
        command = ConfigKeyValuePair(CommonVariables.EncryptionCommandKey,encryption_request.command)
        key_value_pairs.append(command)
        volume_type = ConfigKeyValuePair(CommonVariables.EncryptionVolumeTypeKey,encryption_request.volume_type)
        key_value_pairs.append(volume_type)
        parameters = ConfigKeyValuePair(CommonVariables.EncryptionParametersKey,encryption_request.parameters)
        key_value_pairs.append(parameters)
        self.encryption_config.save_config(key_value_pairs)

    def clear_queue(self):
        try:
            if(os.path.exists(self.encryptionEnvironment.azure_crypt_request_queue_path)):
                os.remove(self.encryptionEnvironment.azure_crypt_request_queue_path)
            return True
        except OSError as e:
            self.logger.log("Failed to clear_queue with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
            return False

    def current_command(self):
        return self.encryption_config.get_config(CommonVariables.EncryptionCommandKey)

    def current_parameters(self):
        self.encryption_config.get_config('parameters')

    def is_encryption_marked(self):
        """
        we should compare the timestamp of the file with the current system time
        if not match (in 30 minutes, then should skip the file)
        """
        return self.encryption_config.config_file_exists()