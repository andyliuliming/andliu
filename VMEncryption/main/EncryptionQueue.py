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

class EncryptionRequest(object):
    def __init__(self,logger):
        self.command = None
        self.volume_type = None
        self.parameters = None
        self.logger = logger

class EncryptionQueue(object):
    def __init__(self,encryptionEnvironment):
        self.encryptionEnvironment = encryptionEnvironment
        self.queue_file_path = encryptionEnvironment.azure_crypt_request_queue_path
        self.encryption_config = ConfigUtil(self.queue_file_path,'encryption_request_queue')

    def mark_encryption(self, encryption_request):
        self.encryption_config.save_config("command", encryption_request.command)
        self.encryption_config.save_config("volume_type", encryption_request.volume_type)
        self.encryption_config.save_config("parameters", encryption_request.parameters)

    def clear_queue(self):
        try:
            os.remove(self.queue_file_path)
            return True
        except OSError as e:
            self.logger.log("Failed to clear_queue with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
            return False

    def current_command(self):
        self.encryption_config.get_config("command")

    def current_parameters(self):
        self.encryption_config.get_config("parameters")

    def is_encryption_marked(self):
        """
        we should compare the timestamp of the file with the current system time
        if not match (in 30 minutes, then should skip the file)
        """
        return os.path.exists(self.queue_file_path)