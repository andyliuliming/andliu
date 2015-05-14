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
import subprocess
import sys  
class DiskCopy(object):
    def __init__(self,hutil):
        self.hutil = hutil

    def copy(self,from_device,to_device):
        #dd if=/dev/sda of=/dev/mapper/sda-crypt bs=512
        error = EncryptionError()
        self.hutil.log("copying from " + from_device + " to " + to_device)
        commandToExecute = '/bin/bash -c "' + 'if=' + from_device + ' of=' + to_device + ' bs=512"'

        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "devpath is " + str(encryption_parameters.devpath) + " dev_mapper_name is " + str(encryption_parameters.dev_mapper_name)
            self.hutil.log('cryptsetup luksOpen returnCode is ' + str(returnCode))
        return error


