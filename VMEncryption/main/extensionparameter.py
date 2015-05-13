#!/usr/bin/env python
#
# VMEncryption extension
#
# Copyright 2014 Microsoft Corporation
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
from common import CommonVariables


# parameter format should be like this:
# {"command":"newdisk","query":{"scsi_number":"[5:0:0:1]","devpath":"/dev/sdb"},"force":"true"
# "filesystem":"ext4","devmapper":"sdb_encrypt","mountname":"mountname","mountpoint":"/mnt/","password":"password1","passphrase":"User@123"
# }

# {"command":"existingdisk","query":{"scsi_number":"[5:0:0:1]","devpath":"/dev/sdb"},"force":"true","existQuery":{"scsi_number":"[5:0:0:1]","devpath":"/dev/sdc"}
# "devmapper":"sdb_encrypt","passphrase":"User@123"
# }

# {"command":"folder","path":"/home/andy/Private","password":"password1"}
class ExtensionParameter(object):

    def __init__(self,hutil, protected_settings, public_settings):
        """
        TODO: we should validate the parameter first
        """
        self.hutil = hutil
        self.command = protected_settings.get('command')
        self.force = protected_settings.get('force')
        self.devpath = None
        self.query = protected_settings.get('query')
        self.exist_query = protected_settings.get('existQuery')
        self.filesystem = protected_settings.get('filesystem')
        self.mountname = protected_settings.get('mountname')
        self.mountpoint = protected_settings.get('mountpoint')
        self.passphrase = protected_settings.get('passphrase')

    def validate_parameter_format(self):
        if(self.query is None):
            return CommonVariables.parameter_error
        if(self.passphrase is None):
            self.hutil.log("passphrase is none")
            return CommonVariables.parameter_error
        if(self.command is None):
            return CommonVariables.parameter_error
        elif(self.command=='newdisk'):

            pass
        if(self.force is not None):
            if(self.force != "true" and self.force != "false"):
                self.hutil.log("parameter 'force' should be 'true' or 'false'")
                return CommonVariables.parameter_error
        return CommonVariables.success

