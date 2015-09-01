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

import array
import base64
import os
import os.path
import re
import string
import subprocess
import sys
import imp
import uuid
import shlex
import traceback
import urllib2
import urlparse
import httplib
from Utils import HandlerUtil
from common import *
from extensionparameter import ExtensionParameter
from extensionparameter import EncryptionItem
from rebootmanager import RebootManager
from diskutil import *
from backuplogger import Backuplogger
from keyvault import *
from encryptionconfig import *
from patch import *
from bekutil import *
from EncryptionQueue import *

#Main function is the only entrence to this extension handler
def main():
    global hutil,MyPatching,logger
    HandlerUtil.LoggerInit('/var/log/waagent.log','/dev/stdout')
    HandlerUtil.waagent.Log("%s started to handle." % (CommonVariables.extension_name)) 
    hutil = HandlerUtil.HandlerUtility(HandlerUtil.waagent.Log, HandlerUtil.waagent.Error, CommonVariables.extension_name)
    logger = Backuplogger(hutil)
    MyPatching = GetMyPatching(logger)
    if MyPatching == None:
        hutil.do_exit(0, 'Enable','error', str(CommonVariables.os_not_supported), 'the os is not supported')

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
        elif re.match("^([-/]*)(daemon)", a):
            daemon()

def install():
    hutil.do_parse_context('Install')
    hutil.do_exit(0, 'Install','success','0', 'Install Succeeded')

def enable():
    hutil.do_parse_context('Enable')
    # we need to start another subprocess to do it, because the initial process
    # would be killed by the wala in 5 minutes.
    logger.log("enabling...")

    try:
        encryption_config = EncryptionConfig()
        passphrase = None
        created_kek_secret_uri = None
        
        disk_util = DiskUtil(hutil, MyPatching, logger)
        bek_util = BekUtil(disk_util, logger)
        if(encryption_config.config_file_exists()):
            passphrase = bek_util.get_bek_passphrase(encryption_config)
            if(passphrase != None):
                crypt_items = disk_util.get_crypt_items()
                if(crypt_items is not None):
                    for i in range(0, len(crypt_items)):
                        crypt_item = crypt_items[i]
                        #None is the placeholder if the file system is not mounted
                        if(crypt_item.mount_point!="None"):
                            disk_util.mount_crypt_item(crypt_item, passphrase)
                        else:
                            logger.log("skipping mount for the item " + str(crypt_item))

        encryption_queue = EncryptionQueue()
        if encryption_queue.is_encryption_marked():
            start_daemon()
        else:
            hutil.exit_if_enabled()

            """
            creating the secret, the secret would be transferred to a bek volume after the updatevm called in powershell.
            """
            protected_settings = hutil._context._config['runtimeSettings'][0]['handlerSettings'].get('protectedSettings')
            public_settings = hutil._context._config['runtimeSettings'][0]['handlerSettings'].get('publicSettings')

            #store the luks passphrase in the secret.
            keyVaultUtil = KeyVaultUtil(logger)

            extension_parameter = ExtensionParameter(hutil, protected_settings, public_settings)
            if(passphrase == None):
                extension_parameter.passphrase = bek_util.generate_passphrase()
                created_kek_secret_uri = keyVaultUtil.create_kek_secret(Passphrase = extension_parameter.passphrase,\
                    KeyVaultURL = extension_parameter.KeyVaultURL,\
                    KeyEncryptionKeyURL = extension_parameter.KeyEncryptionKeyURL,\
                    AADClientID = extension_parameter.AADClientID,\
                    KeyEncryptionAlgorithm = extension_parameter.KeyEncryptionAlgorithm,\
                    AADClientSecret = extension_parameter.AADClientSecret,\
                    DiskEncryptionKeyFileName = extension_parameter.DiskEncryptionKeyFileName)
                if(created_kek_secret_uri == None):
                    hutil.do_exit(0, 'Enable', 'error', str(CommonVariables.create_encryption_secret_failed), 'Enable failed.')
                else:
                    encryption_config.save_bek_filename(extension_parameter.DiskEncryptionKeyFileName)
                    encryption_config.save_bek_filesystem(extension_parameter.VolumeType)
                    encryption_config.save_secret_uri(created_kek_secret_uri)
                    
                    encryption_request = EncryptionRequest()
                    encryption_request.command = CommonVariables.enableencryption_all_inplace
                    encryption_queue.mark_encryption(encryption_request)
                    hutil.do_exit(0, 'Enable', 'success', str(CommonVariables.success), str(created_kek_secret_uri))
            else:
                """
                the enabling called again.
                """
                encryption_request = EncryptionRequest()
                encryption_request.command = CommonVariables.enableencryption_all_inplace
                encryption_queue.mark_encryption(encryption_request)
                start_daemon()
                hutil.do_exit(0, 'Enable', 'success', str(CommonVariables.encrypttion_already_enabled), str(created_kek_secret_uri))

    except Exception as e:
        hutil.error("Failed to enable the extension with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
        hutil.do_exit(0, 'Enable','error',str(CommonVariables.unknown_error), 'Enable failed.')

def daemon():
    hutil.do_parse_context('Executing')
    try:
        # Ensure the same configuration is executed only once
        # If the previous enable failed, we do not have retry logic here.
        # TODO Remount all
        """
        search for the bek volume, then mount it:)
        """
        disk_util = DiskUtil(hutil, MyPatching, logger)

        encryption_config = EncryptionConfig()
        passphrase = None
        """
        try to find the attached bek volume, and use the file to mount the crypted volumes,
        and if the passphrase file is found, then we will re-use it for the future.
        """
        bek_util = BekUtil(disk_util, logger)
        if(encryption_config.config_file_exists()):
            passphrase = bek_util.get_bek_passphrase(encryption_config)

        if(passphrase == None):
            hutil.do_exit(0, 'Enable','error', CommonVariables.passphrase_file_not_found, 'Passphrase file not found.')
        else:
            """
            check whether there's a scheduled encryption task
            """

            logger.log("trying to install the extras")
            MyPatching.install_extras()

            """
            if the key is not created successfully, the encrypted file system should not 
            """
            luks_header_path = disk_util.create_luks_header()
            ########### the existing scenario starts ###################
            # we do not support the backup version policy
            # {"command":"enableencryption_format","query":[{"source_scsi_number":"[5:0:0:0]","filesystem":"ext4","mount_point":"/mnt/"}],
            # {"command":"enableencryption_all_inplace"}],
            # {"command":"enableencryption_clone","query":[{"source_scsi_number":"[5:0:0:0]","target_scsi_number":"[5:0:0:2]"},{"source_scsi_number":"[5:0:0:1]","target_scsi_number":"[5:0:0:3]"}],
            # {"command":"enableencryption_inplace","query":[{"source_scsi_number":"[5:0:0:0]","in-place":"true"}"}],
            # this is the encryption in place
            # "force":"true", "passphrase":"User@123"}
            logger.log("executing the enableencryption_all_inplace command.")
            devices = disk_util.get_lsblk(None)
            azure_blk_items = disk_util.get_azure_devices()
            encrypted_items = []
            for i in range(0,len(devices)):
                device_item = devices[i]
                logger.log("device_item == " + str(device_item))

                should_skip = disk_util.should_skip_for_inplace_encryption(device_item)

                if(device_item.name in encrypted_items):
                    logger.log("already did a operation " + str(device_item))
                    should_skip = True

                if(not should_skip):
                    if(device_item.mountpoint != ""):
                        disk_util.umount(device_item.mountpoint)
                    encrypted_items.append(device_item.name)
                    mapper_name = str(uuid.uuid4())
                    logger.log("encrypting " + str(device_item))
                    disk_util.encrypt_disk(os.path.join("/dev/", device_item.name), passphrase, mapper_name,luks_header_path)
                    logger.log("copying data " + str(device_item))
                    disk_util.copy(os.path.join("/dev/" ,device_item.name), os.path.join(CommonVariables.dev_mapper_root, mapper_name))

                    crypt_item_to_update = CryptItem()
                    crypt_item_to_update.mapper_name = mapper_name
                    crypt_item_to_update.dev_path = os.path.join("/dev/" ,device_item.name)
                    crypt_item_to_update.luks_header_path = luks_header_path
                    crypt_item_to_update.file_system = device_item.fstype
                    # if the original mountpoint is empty, then leave it as
                    # None
                    if device_item.mountpoint=="" or device_item.mountpoint==None:
                        crypt_item_to_update.mount_point = "None"
                    else:
                        crypt_item_to_update.mount_point = device_item.mountpoint
                    disk_util.update_crypt_item(crypt_item_to_update)

                    if(crypt_item_to_update.mount_point != "None"):
                        disk_util.mount_filesystem(os.path.join(CommonVariables.dev_mapper_root,mapper_name), device_item.mountpoint)
    except Exception as e:
        # mount the file systems back.
        hutil.error("Failed to enable the extension with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
        hutil.do_exit(0, 'Enable','error','1', 'Enable failed.')
    finally:
        encryption_queue = EncryptionQueue()
        encryption_queue.clear_queue()
        logger.log("finally in daemon")

def start_daemon():
    args = [os.path.join(os.getcwd(), __file__), "-daemon"]
    logger.log("start_daemon with args:" + str(args))
    #This process will start a new background process by calling
    #    handle.py -daemon
    #to run the script and will exit itself immediatelly.

    #Redirect stdout and stderr to /dev/null.  Otherwise daemon process will
    #throw Broke pipe exeception when parent process exit.
    devnull = open(os.devnull, 'w')
    child = subprocess.Popen(args, stdout=devnull, stderr=devnull)
    hutil.do_exit(0, 'Enable', 'transitioning', '0', 'Launching the script...')

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
