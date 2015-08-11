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
import xml.parsers.expat
from Utils import HandlerUtil
from common import *

# parameter format should be like this:
#{"command":"enableencryption","query":[{"source_scsi_number":"[5:0:0:0]","target_scsi_number":"[5:0:0:2]"},{"source_scsi_number":"[5:0:0:1]","target_scsi_number":"[5:0:0:3]"}],
#"force":"true", "passphrase":"User@123"}
class ExtensionParameter(object):
    def __init__(self, hutil, protected_settings, public_settings):
        """
        TODO: we should validate the parameter first
        """
        self.hutil = hutil
        self.command = protected_settings.get('command')
        self.force = protected_settings.get('force')
        self.devpath = None
        self.query = protected_settings.get('query')
        self.passphrase = protected_settings.get('passphrase')
        self.encryption_keyvault_uri = protected_settings.get('encryption_keyvault_uri')
        self.keyvault_uri = protected_settings.get('keyvault_uri')
        self.client_id = protected_settings.get('client_id')
        self.client_secret = protected_settings.get('client_secret')
        self.alg_name = protected_settings.get('alg_name')
        self.bek_filename = protected_settings.get('BekFileName')
        self.bek_filesystem = protected_settings.get('BekFileSystem')
        # parse the query from the array


    def validate_parameter_format(self):
        if(self.passphrase is None):
            self.hutil.log("passphrase is none")
            return CommonVariables.parameter_error
        if(self.command is None):
            return CommonVariables.parameter_error
        elif(self.command == 'newdisk'):
            pass
        if(self.force is not None):
            if(self.force != "true" and self.force != "false"):
                self.hutil.log("parameter 'force' should be 'true' or 'false'")
                return CommonVariables.parameter_error
        #if(self.query is None):
        #    return CommonVariables.parameter_error
        return CommonVariables.success
