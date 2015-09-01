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
class EncryptionRequest(object):
    def __init__(self):
        self.command = None

class EncryptionQueue(object):
    def __init__(self):
        self.queue_file_path='/etc/azure_crypt_request_queue'

    def mark_encryption(self,encryption_request):
        file = open(self.queue_file_path,'w')
        file.write("")
        file.close()

    def pop_request(self):

        pass
    def is_encryption_marked(self):
        """
        we should compare the timestamp of the file with the current system time
        if not match (in 30 minutes, then should skip the file)
        """
        return os.path.exists(self.queue_file_path)
        #file = open(self.store_identity_file,'w')
        #machine_identity = self.current_identity()
        #print(machine_identity)
        #file.write(machine_identity)
        #file.close()