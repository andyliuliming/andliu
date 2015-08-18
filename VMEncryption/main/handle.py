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
#Main function is the only entrence to this extension handler
def main():
    global hutil,MyPatching,encryption_logger
    HandlerUtil.LoggerInit('/var/log/waagent.log','/dev/stdout')
    HandlerUtil.waagent.Log("%s started to handle." % (CommonVariables.extension_name)) 
    hutil = HandlerUtil.HandlerUtility(HandlerUtil.waagent.Log, HandlerUtil.waagent.Error, CommonVariables.extension_name)
    encryption_logger = Backuplogger(hutil)
    MyPatching = GetMyPatching()
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
    hutil.do_exit(0, 'Install','Installed','0', 'Install Succeeded')

def enable():
    hutil.do_parse_context('Enable')
    # we need to start another subprocess to do it, because the initial process
    # would be killed by the wala in 5 minutes.
    encryption_logger.log("enabling...")
    start_daemon()

def daemon():
    hutil.do_parse_context('Executing')
    try:
        # Ensure the same configuration is executed only once
        # If the previous enable failed, we do not have retry logic here.
        # TODO Remount all

        """
        search for the bek volume, then mount it:)
        """
        disk_util = DiskUtil(hutil, MyPatching, encryption_logger)
        encryptionconfig = EncryptionConfig()
        bek_util = BekUtil(disk_util,encryption_logger)
        bek_filename = encryptionconfig.get_bek_filename()
        bek_filesystem = encryptionconfig.get_bek_filesystem()
        passphrase = bek_util.get_bek_passphrase(bek_filename,bek_filesystem)
        if(passphrase != None):
            crypt_items = disk_util.get_crypt_items()
            if(crypt_items is not None):
                for i in range(0,len(crypt_items)):
                    crypt_item = crypt_items[i]
                    disk_util.mount_crypt_item(crypt_item,passphrase)

        hutil.exit_if_enabled()

        """
        protectedSettings is the privateConfig passed from Powershell.
        """
        protected_settings = hutil._context._config['runtimeSettings'][0]['handlerSettings'].get('protectedSettings')
        public_settings = hutil._context._config['runtimeSettings'][0]['handlerSettings'].get('publicSettings')
        extension_parameter = ExtensionParameter(hutil, protected_settings, public_settings)

        """
        if there's bek file name/bek file system in the parameter, then update the encryption config
        """
        encryptionconfig.update_config(extension_parameter)
        bek_filename = encryptionconfig.get_bek_filename()
        bek_filesystem = encryptionconfig.get_bek_filesystem()

        # validate the parameters format
        para_validate_result = extension_parameter.validate_parameter_format()

        if(para_validate_result != 0):
            hutil.do_exit(0, 'Enable', 'error', str(para_validate_result), "parameter not right")
        # install the required softwares.

        encryption_logger.log("trying to install the extras")
        MyPatching.install_extras(extension_parameter)

        #store the luks passphrase in the secret.
        keyVaultUtil = KeyVaultUtil(encryption_logger)
        passphraseEncoded = base64.standard_b64encode(extension_parameter.passphrase)

        keyVaultUtil.create_key(passphraseEncoded,extension_parameter.keyvault_uri,\
            extension_parameter.encryption_keyvault_uri,\
            extension_parameter.client_id,\
            extension_parameter.alg_name,extension_parameter.client_secret,extension_parameter.bek_filename)

        luks_header_path = disk_util.create_luks_header()
        ########### the existing scenario starts ###################
        # we do not support the backup version policy
        # {"command":"enableencryption_format","query":[{"source_scsi_number":"[5:0:0:0]","filesystem":"ext4","mount_point":"/mnt/"}],
        # {"command":"enableencryption_all_inplace"}],
        # {"command":"enableencryption_clone","query":[{"source_scsi_number":"[5:0:0:0]","target_scsi_number":"[5:0:0:2]"},{"source_scsi_number":"[5:0:0:1]","target_scsi_number":"[5:0:0:3]"}],
        # {"command":"enableencryption_inplace","query":[{"source_scsi_number":"[5:0:0:0]","in-place":"true"}"}],
        # this is the encryption in place
        # "force":"true", "passphrase":"User@123"}

        if(extension_parameter.command == "enableencryption_format"):
            encryption_logger.log("executing the enableencryption_format command.")
            # check whether the current is stripped disk
            # we need to change the uuid after the encryption.
            # http://www.sudo-juice.com/how-to-change-the-uuid-of-a-linux-partition/
            encryption_query_len = len(extension_parameter.query)

            # check the disk is blank
            for i in range(0, encryption_query_len):
                current_mapping = extension_parameter.query[i]
                scsi_number_to_format = current_mapping["source_scsi_number"]
                exist_disk_path = disk_util.query_dev_sdx_path_by_scsi_id(scsi_number_to_format)
                encryption_logger.log("checking the blank for scsi number: " + str(scsi_number_to_format))
                if(not disk_util.is_blank_disk(exist_disk_path)):
                    hutil.do_exit(1, 'Enable','error', CommonVariables.device_not_blank, 'Enable failed. enableencryption_format called on an not blank device'+str(scsi_number_to_format));

            for i in range(0, encryption_query_len):
                current_mapping = extension_parameter.query[i]
                mapper_name = str(uuid.uuid4())
                file_system = current_mapping["filesystem"]
                mount_point = os.path.join(current_mapping["mount_point"], mapper_name)
                exist_disk_path = disk_util.query_dev_sdx_path_by_scsi_id(current_mapping["source_scsi_number"])

                disk_util.encrypt_disk(exist_disk_path, extension_parameter.passphrase, mapper_name, luks_header_path)
                disk_util.format_disk(os.path.join("/dev/mapper/", mapper_name), file_system)
                disk_util.make_sure_disk_exists(os.path.join(current_mapping["mount_point"], mapper_name))
                #TODO make the mount name better.
                disk_util.mount_filesystem(os.path.join("/dev/mapper/", mapper_name), mount_point)

                """
                TODO: watchout that we need to use the uuid instead of the sdx, because it would be changed after rebooting.
                the reason we do not get it before the formating is before that, the uuid is not created.
                """
                crypt_item = CryptItem()
                crypt_item.mapper_name = mapper_name
                crypt_item.file_system = file_system
                crypt_item.dev_path = exist_disk_path
                crypt_item.luks_header_path = luks_header_path
                crypt_item.mount_point = mount_point
                disk_util.update_crypt_item(crypt_item)

        elif(extension_parameter.command == "enableencryption_all_inplace"):
            encryption_logger.log("executing the enableencryption_all_inplace command.")
            devices = disk_util.get_lsblk(None)
            azure_blk_items = disk_util.get_azure_devices()
            encrypted_items = []
            for i in range(0,len(devices)):
                device_item = devices[i]
                encryption_logger.log("device_item == " + str(device_item))

                should_skip = disk_util.should_skip_for_inplace_encryption(device_item)

                if(device_item.name in encrypted_items):
                    encryption_logger.log("already did a operation " + str(device_item))
                    should_skip = True

                if(not should_skip):
                    if(device_item.mountpoint != ""):
                        disk_util.umount(device_item.mountpoint)
                    encrypted_items.append(device_item.name)
                    mapper_name = str(uuid.uuid4())
                    encryption_logger.log("encrypting " + str(device_item))
                    disk_util.encrypt_disk(os.path.join("/dev/", device_item.name), extension_parameter.passphrase, mapper_name,luks_header_path)
                    encryption_logger.log("copying data " + str(device_item))
                    disk_util.copy(os.path.join("/dev/" ,device_item.name), os.path.join(CommonVariables.dev_mapper_root, mapper_name))

                    crypt_item_to_update = CryptItem()
                    crypt_item_to_update.mapper_name = mapper_name
                    crypt_item_to_update.dev_path = os.path.join("/dev/" ,device_item.name)
                    crypt_item_to_update.luks_header_path = luks_header_path
                    crypt_item_to_update.file_system = device_item.fstype
                    crypt_item_to_update.mount_point = device_item.mountpoint
                    disk_util.update_crypt_item(crypt_item_to_update)
                    if(device_item.mountpoint != ""):
                        disk_util.mount_filesystem(os.path.join(CommonVariables.dev_mapper_root,mapper_name), device_item.mountpoint)

        # {"command":"enableencryption_clone","query":[{"source_scsi_number":"[5:0:0:0]","target_scsi_number":"[5:0:0:2]"},{"source_scsi_number":"[5:0:0:1]","target_scsi_number":"[5:0:0:3]"}],
        elif(extension_parameter.command == "enableencryption_clone"):
            encryption_logger.log("executing the enableencryption_clone command.")
            # scsi_host,channel,target_number,LUN
            # find the scsi using the filter
            encryption_keypair_len = len(extension_parameter.query)

            # save the mounts info down.
            encryption_items = []
            source_blk_item_dict = dict()
            """
            checking the scsi device.
            """
            for i in range(0, encryption_keypair_len):
                encryption_logger.log("checking the encryptoin_keypair parameter")
                current_mapping = extension_parameter.query[i]
                source_scsi_number = current_mapping["source_scsi_number"]
                encryption_logger.log("scsi_number to query is " + str(source_scsi_number))
                exist_disk_path = disk_util.query_dev_sdx_path_by_scsi_id(source_scsi_number)

                encryption_logger.log("exist_disk_path is " + str(exist_disk_path))
                if(exist_disk_path == None):
                    raise Exception("the source scsi number is not found")

                source_blk_items = disk_util.get_lsblk(exist_disk_path)
                """
                we should only support the part and disk
                first we need to check whether it's the full disk file system.
                """
                for j in range(0,len(source_blk_items)):
                    source_blk_item = source_blk_items[j]
                    if(source_blk_item.type != "disk" and source_blk_item.type != "part"):
                        encryption_logger.log("the device type " + str(source_blk_item) + " found, we do not support it yet.")
                        hutil.do_exit(1, 'Enable','error', CommonVariables.device_not_blank, 'Enable failed. source device have type: ' + str(source_blk_item.type))
                """
                check the target device is blank or not
                """
                target_scsi_number = current_mapping["target_scsi_number"]
                encryption_logger.log("scsi_number to query is " + str(target_scsi_number))
                encryption_dev_root_path = disk_util.query_dev_sdx_path_by_scsi_id(target_scsi_number)
                
                # scsi_host,channel,target_number,LUN
                # find the scsi using the filter
                encryption_logger.log("encryption_dev_root_path is " + str(encryption_dev_root_path))
                if(encryption_dev_root_path == None):
                    raise Exception("the target scsi number is not found")

                if(not disk_util.is_blank_disk(encryption_dev_root_path)):
                    encryption_logger.log("the target device is not a blank disk.")
                    hutil.do_exit(1, 'Enable','error', CommonVariables.device_not_blank, 'Enable failed. enableencryption_all_inplace called on an not blank device'+str(target_scsi_number));

            for i in range(0, encryption_keypair_len):
                current_mapping = extension_parameter.query[i]
                source_scsi_number = current_mapping["source_scsi_number"]
                encryption_logger.log("scsi_number to query is " + str(source_scsi_number))
                exist_disk_path = disk_util.query_dev_sdx_path_by_scsi_id(source_scsi_number)

                source_blk_items = disk_util.get_lsblk(exist_disk_path)
                target_scsi_number = current_mapping["target_scsi_number"]
                encryption_logger.log("scsi_number to query is " + str(target_scsi_number))
                encryption_dev_root_path = disk_util.query_dev_sdx_path_by_scsi_id(target_scsi_number)
                """
                the part/disk check is done in upward.
                if there's only one item and the item type is disk, then encrypt the whole disk.
                """
                if(len(source_blk_items) == 0):
                    encryption_logger.log("no block device found on " + str(exist_disk_path))
                elif(len(source_blk_items) == 1):
                    source_blk_item = source_blk_items[0]
                    if(source_blk_item.type == "disk" and source_blk_item.fstype != ""):
                        mapper_name = str(uuid.uuid4())
                        encryption_result = disk_util.encrypt_disk(encryption_dev_root_path, extension_parameter.passphrase, mapper_name, luks_header_path)
                        if(encryption_result.code == CommonVariables.success):
                            disk_util.copy(exist_disk_path, os.path.join(CommonVariables.dev_mapper_root,mapper_name))
                        else:
                            encryption_logger.log("encrypt disk result: " + str(encryption_result))
                else:
                    source_blk_items.sort(key=lambda x: x.size, reverse=True)
                    disk_util.clone_partition_table(target_dev=encryption_dev_root_path,source_dev=exist_disk_path)
                    target_blk_items = disk_util.get_lsblk(encryption_dev_root_path)
                    target_blk_items.sort(key=lambda x: x.size, reverse=True)
                    for j in range(0,len(source_blk_items)):
                        source_blk_item = source_blk_items[j]
                        if(source_blk_item.type == "part" and source_blk_item.fstype != ""):
                            disk_util.umount(os.path.join("/dev/",source_blk_item.name))
                            target_blk_item = target_blk_items[j]
                            #skip those device without file system.
                            mapper_name = str(uuid.uuid4())
                            encryption_result = disk_util.encrypt_disk(os.path.join("/dev/",target_blk_item.name), extension_parameter.passphrase, mapper_name, luks_header_path)
                            if(encryption_result.code == CommonVariables.success):
                                disk_util.copy(source_blk_item.dev_path, os.path.join(CommonVariables.dev_mapper_root,mapper_name))
                                crypt_item_to_update = CryptItem()
                                crypt_item_to_update.mapper_name = mapper_name
                                crypt_item_to_update.dev_path = os.path.join("/dev/" ,target_blk_item.name)
                                crypt_item_to_update.luks_header_path = luks_header_path
                                crypt_item_to_update.file_system = source_blk_item.fstype
                                crypt_item_to_update.mount_point = source_blk_item.mountpoint
                                disk_util.update_crypt_item(crypt_item_to_update)
                                if(source_blk_item.mountpoint != ""):
                                    disk_util.mount_filesystem(os.path.join(CommonVariables.dev_mapper_root,mapper_name), source_blk_item.mountpoint)
                            else:
                                encryption_logger.log("encrypt disk result: " + str(encryption_result))
                        else:
                            encryption_logger.log("skip item : " + str(source_blk_item))
        else:
            hutil.do_exit(1, 'Enable','error','1', 'Enable failed. wrong parameter command')
    except Exception, e:
        # mount the file systems back.
        hutil.error("Failed to enable the extension with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
        hutil.do_exit(1, 'Enable','error','1', 'Enable failed.')
    finally:
        pass

def start_daemon():
    public_settings = hutil.get_public_settings()
    args = [os.path.join(os.getcwd(), __file__), "-daemon"]
    encryption_logger.log("start_daemon with args:" + str(args))
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
