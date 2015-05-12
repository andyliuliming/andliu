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

import array
import base64
import os
import os.path
import re
import string
import subprocess
import sys
import imp
import shlex
import traceback
import urllib2
import urlparse
import httplib
from common import CommonVariables
from parameterparser import ParameterParser
from Utils import HandlerUtil
from encryption import *
from devmanager import DevManager
from environmentvalidator import EnvironmentValidator
from rebootmanager import RebootManager

#Main function is the only entrence to this extension handler
def main():
    global hutil
    HandlerUtil.LoggerInit('/var/log/waagent.log','/dev/stdout')
    HandlerUtil.waagent.Log("%s started to handle." % (CommonVariables.extension_name)) 
    hutil = HandlerUtil.HandlerUtility(HandlerUtil.waagent.Log, HandlerUtil.waagent.Error, CommonVariables.extension_name)

    for a in sys.argv[1:]:
        if re.match("^([-/]*)(disable)", a):
            disable()
        elif re.match("^([-/]*)(uninstall)", a):
            uninstall()
        elif re.match("^([-/]*)(install)", a):
            install()
        elif re.match("^([-/]*)(enable)", a):
            enable()
        elif re.match("^([-/]*)(update)", a):
            update()

def install():
    hutil.do_parse_context('Install')
    hutil.do_exit(0, 'Install','Installed','0', 'Install Succeeded')

def enable():
    try:
        hutil.do_parse_context('Enable')
        # Ensure the same configuration is executed only once
        # If the previous enable failed, we do not have retry logic here.
        hutil.exit_if_enabled()

        """
        protectedSettings is the privateConfig passed from Powershell.
        """
        protected_settings = hutil._context._config['runtimeSettings'][0]['handlerSettings'].get('protectedSettings')
        public_settings = hutil._context._config['runtimeSettings'][0]['handlerSettings'].get('publicSettings')

        para_parser = ParameterParser(hutil, protected_settings, public_settings)
        para_validate_result = para_parser.validate()
        if(para_validate_result != 0):
            hutil.do_exit(0, 'Enable', 'error',str(para_validate_result), "parameter not right")

        MyPatching = GetMyPatching()
        if MyPatching == None:
            hutil.do_exit(0,'Enable','error',str(CommonVariables.os_not_supported),'the os is not supported')
        else:
            MyPatching.install_extras(para_parser)



        #construct the encryption parameters starts
        encryption_parameters = EncryptionParameter()
        encryption_parameters.mountpoint = para_parser.mountpoint

        if(para_parser.mountname is None or para_parser.mountname == ""):
            encryption_parameters.mountname = CommonVariables.default_mount_name

        if(para_parser.filesystem is None or para_parser.filesystem == ""):
            encryption_parameters.filesystem = "ext4"

        if(para_parser.devmapper_name is None or para_parser.devmapper_name == ""):
            encryption_parameters.devmapper_name = CommonVariables.default_mapper_name

        if(para_parser.query.has_key("devpath")):
            encryption_parameters.devpath = para_parser.query["devpath"]
        else:
            # scsi_host,channel,target_number,LUN
            # find the scsi using the filter
            dev_manager = DevManager()
            encryption_parameters.devpath = dev_manager.query_dev_uuid_path(para_parser.query["scsi_number"])
        #construct the encryption parameters ends




        encryption = Encryption(hutil)
        environment_validator = EnvironmentValidator(hutil)
        reboot_manager = RebootManager(hutil)
        environment_validation_result = environment_validator.validate_environment(encryption_parameters)
        if(environment_validation_result != CommonVariables.success):
            hutil.do_exit(0, 'Enable', 'error',str(environment_validation_result), 'error when validating the environment')
        else:
            # the config_reboot is a decorator, it will modify the encryption_parameters .
            # TODO: make the return parameter a error code.
            encryption_parameters = reboot_manager.configure_reboot(encryption_parameters)
            encryption_result = encryption.encrypt(encryption_parameters)
            hutil.do_exit(0, 'Enable', encryption_result.state,str(encryption_result.code), encryption_result.info)

    except Exception, e:
        print(str(e))
        hutil.error("Failed to enable the extension with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
        hutil.do_exit(1, 'Enable','error','1', 'Enable failed.')
    finally:
        pass

def uninstall():
    hutil.do_parse_context('Uninstall')
    hutil.do_exit(0,'Uninstall','success','0', 'Uninstall succeeded')

def disable():
    hutil.do_parse_context('Disable')
    hutil.do_exit(0,'Disable','success','0', 'Disable Succeeded')

def update():
    hutil.do_parse_context('Upadate')
    hutil.do_exit(0,'Update','success','0', 'Update Succeeded')

if __name__ == '__main__' :
    main()
