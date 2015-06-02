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
from Utils import HandlerUtil
from common import CommonVariables
from extensionparameter import ExtensionParameter
from encryption import *
from mounter import Mounter
from devmanager import DevManager
from environmentmanager import EnvironmentManager
from rebootmanager import RebootManager
from diskutil import *
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

        extension_parameter = ExtensionParameter(hutil, protected_settings, public_settings)

        # validate the parameters format
        para_validate_result = extension_parameter.validate_parameter_format()

        if(para_validate_result != 0):
            hutil.do_exit(0, 'Enable', 'error', str(para_validate_result), "parameter not right")


        # install the required softwares.
        MyPatching = GetMyPatching()
        if MyPatching == None:
            hutil.do_exit(0, 'Enable','error', str(CommonVariables.os_not_supported), 'the os is not supported')
        else:
            MyPatching.install_extras(extension_parameter)

        #construct the encryption parameters starts
        
        environment_manager = EnvironmentManager(hutil)

        #construct the encryption parameters ends

        ########### the new disk scenario starts ###################

        if(extension_parameter.command == CommonVariables.newdisk_command):
            encryption_parameters = environment_manager.prepare_newdisk_encryption_parameters(extension_parameter)

            environment_validation_result = environment_manager.validate_environment_for_newdisk(encryption_parameters)

            if(environment_validation_result != CommonVariables.success):
                hutil.do_exit(0, 'Enable', 'error', str(environment_validation_result), 'error when validating the environment')
            else:
                # the config_reboot is a decorator, it will modify the
                # encryption_parameters .
                # TODO: make the return parameter a error code.
                # we should encrypt the disk first, then configure_reboot

                encryption = Encryption(hutil)
                reboot_manager = RebootManager(hutil)
                mounter = Mounter(hutil)

                encryption_result = encryption.encrypt_disk(encryption_parameters)
                if(encryption_result.errorcode != CommonVariables.success):
                    hutil.do_exit(0, 'Enable', encryption_result.state, str(encryption_result.code), encryption_result.info)
                encryption_result = encryption.format_disk(encryption_parameters)
                encryption_parameters = reboot_manager.configure_reboot(encryption_parameters)
                mounter.mount_all()
                
                hutil.do_exit(0, 'Enable', encryption_result.state, str(encryption_result.code), encryption_result.info)
                # execute the mount -a
                # then check the volume is mounted successfully
                #mounter.mount(encryption_parameters)
                # mount the disk..

        ########### the new disk scenario ends ###################




        ########### the existing scenario starts ###################
        elif(extension_parameter.command == CommonVariables.existdisk_command):
            # {"command":"existingdisk","query":{"scsi_number":"[5:0:0:1]","devpath":"/dev/sdb"},"force":"true","existQuery":{"scsi_number":"[5:0:0:1]","devpath":"/dev/sdc"}
            # "devmapper":"sdb_encrypt","passphrase":"User@123"
            # }

            # the prepare function would construct the dev_mapper_origin_path
            # it's
            # something like /dev/devmapper/sdb_encrypt
            # and exist_devpath
            exist_encryption_parameters = environment_manager.prepare_existingdisk_encryption_parameters(extension_parameter)
            # devpath would be come /dev/disk/
            environment_validation_result = environment_manager.validate_environment_for_existingdisk(exist_encryption_parameters)
            if(environment_validation_result != CommonVariables.success):
                hutil.do_exit(0, 'Enable', 'error', str(environment_validation_result), 'error when validating the environment')
            else:
                # check whether the new attached disk is bigger than the
                # existing one.

                encryption = Encryption(hutil)

                # reboot_manager = RebootManager(hutil)
                # mounter = Mounter(hutil)
                disk_copy = DiskCopy(hutil)

                disk_info_parser = DiskInfoParser(hutil)
                
                ## structure of the disk_partition is
                # devpath devname size
                disk_partitions = disk_info_parser.get_disk_partitions(exist_encryption_parameters.exist_devpath)
                disk_partitioner = DiskPartitioner(hutil)
                disk_copy = DiskCopy(hutil)
                disk_partitioner.partit(disk_partitions)
                for disk_partition in disk_partitions:
                    exist_encryption_parameters.devpath = disk_partition.devpath
                    exist_encryption_parameters.dev_mapper_name = disk_partition.devname
                    encryption_result = encryption.encrypt_disk(exist_encryption_parameters)
                    if(encryption_result == CommonVariables.success):
                        disk_copy.copy(exist_encryption_parameters.exist_devpath, exist_encryption_parameters.dev_mapper_origin_path)
                    else:
                        hutil.log("encrypt disk result: " + str(encryption_result))
                    pass
                mounter.mount_all()
            pass

    except Exception, e:
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
