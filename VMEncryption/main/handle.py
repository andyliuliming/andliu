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
from Common import *
from ExtensionParameter import ExtensionParameter
from ExtensionParameter import EncryptionItem
from DiskUtil import DiskUtil
from BackupLogger import BackupLogger
from KeyVaultUtil import KeyVaultUtil
from EncryptionConfig import *
from patch import *
from BekUtil import *
from EncryptionMark import EncryptionMark
from EncryptionMark import EncryptionRequest
from EncryptionEnvironment import EncryptionEnvironment
#Main function is the only entrence to this extension handler

def exit_without_status_report():
    sys.exit(0)

def main():
    global hutil,MyPatching,logger,encryptionEnvironment
    HandlerUtil.LoggerInit('/var/log/waagent.log','/dev/stdout')
    HandlerUtil.waagent.Log("%s started to handle." % (CommonVariables.extension_name)) 
    hutil = HandlerUtil.HandlerUtility(HandlerUtil.waagent.Log, HandlerUtil.waagent.Error, CommonVariables.extension_name)
    logger = BackupLogger(hutil)
    encryptionEnvironment = EncryptionEnvironment()
    MyPatching = GetMyPatching(logger)
    if MyPatching == None:
        hutil.do_exit(0, 'Enable', CommonVariables.extension_error_status, str(CommonVariables.os_not_supported), 'the os is not supported')

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
    hutil.do_exit(0, 'Install', CommonVariables.extension_success_status, str(CommonVariables.success), 'Install Succeeded')

def enable():
    hutil.do_parse_context('Enable')
    # we need to start another subprocess to do it, because the initial process
    # would be killed by the wala in 5 minutes.
    logger.log('enabling...')

    try:
        encryption_config = EncryptionConfig(encryptionEnvironment, logger)
        existed_passphrase = None
        kek_secret_id_created = None

        """
        trying to mount the crypted items.
        """
        disk_util = DiskUtil(hutil, MyPatching, logger, encryptionEnvironment)
        bek_util = BekUtil(disk_util, logger)
        if(encryption_config.config_file_exists()):
            existed_passphrase = bek_util.get_bek_passphrase(encryption_config)
            if(existed_passphrase != None):
                crypt_items = disk_util.get_crypt_items()
                if(crypt_items is not None):
                    for i in range(0, len(crypt_items)):
                        crypt_item = crypt_items[i]
                        #None is the placeholder if the file system is not
                        #mounted
                        luks_open_result = disk_util.luks_open(existed_passphrase,crypt_item.dev_path,crypt_item.mapper_name,crypt_item.luks_header_path)
                        if(luks_open_result == CommonVariables.success):
                            if(crypt_item.mount_point != 'None'):
                                disk_util.mount_crypt_item(crypt_item, existed_passphrase)
                            else:
                                logger.log('skipping mount for the item ' + str(crypt_item))
            else:
                """
                the config exists, and the passphrase not get is a error case.
                """
                logger.log("the config file exists, but we could not get the passphrase according to it.")
                exit_without_status_report()
                #hutil.do_exit(0,'Enable',CommonVariables.extension_error_status,str(CommonVariables.passphrase_file_not_found),'The passphrase could not get.')

        encryption_marker = EncryptionMark(logger, encryptionEnvironment)
        if encryption_marker.is_encryption_marked():
            # verify the encryption mark
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
            """
            validate the parameters
            """
            if(extension_parameter.VolumeType != 'Data'):
                hutil.do_exit(0, 'Enable', CommonVariables.extension_error_status,str(CommonVariables.volue_type_not_support), 'VolumeType ' + str(extension_parameter.VolumeType) + ' is not supported.')

            if(extension_parameter.command not in [CommonVariables.EnableEncryption, CommonVariables.EnableEncryptionFormat]):
                hutil.do_exit(0, 'Enable', CommonVariables.extension_error_status,str(CommonVariables.command_not_support), 'Command ' + str(extension_parameter.command) + ' is not supported.')

            """
            this is the fresh call case
            """
            #handle the passphrase related
            if(existed_passphrase == None):
                extension_parameter.passphrase = bek_util.generate_passphrase(extension_parameter.KeyEncryptionAlgorithm)
                kek_secret_id_created = keyVaultUtil.create_kek_secret(Passphrase = extension_parameter.passphrase,\
                    KeyVaultURL = extension_parameter.KeyVaultURL,\
                    KeyEncryptionKeyURL = extension_parameter.KeyEncryptionKeyURL,\
                    AADClientID = extension_parameter.AADClientID,\
                    KeyEncryptionAlgorithm = extension_parameter.KeyEncryptionAlgorithm,\
                    AADClientSecret = extension_parameter.AADClientSecret,\
                    DiskEncryptionKeyFileName = extension_parameter.DiskEncryptionKeyFileName)

                if(kek_secret_id_created == None):
                    hutil.do_exit(0, 'Enable', CommonVariables.extension_error_status, str(CommonVariables.create_encryption_secret_failed), 'Enable failed.')
                else:
                    encryption_config.passphrase_file_name = extension_parameter.DiskEncryptionKeyFileName
                    encryption_config.bek_filesystem = CommonVariables.BekVolumeFileSystem
                    encryption_config.secret_id = kek_secret_id_created
                    encryption_config.commit()

            encryption_request = EncryptionRequest(logger)
            encryption_request.command = extension_parameter.command
            encryption_request.volume_type = extension_parameter.VolumeType
            encryption_request.parameters = extension_parameter.DiskFormatQuery
            encryption_marker.mark_encryption(encryption_request)

            # TODO check the encryption request is marked at the very
            # beginning.
            # TODO implement the format encryption
            if(kek_secret_id_created != None):
                hutil.do_exit(0, 'Enable', CommonVariables.extension_success_status, str(CommonVariables.success), str(kek_secret_id_created))
            else:
                """
                the enabling called again. the passphrase would be re-used.
                """
                start_daemon()
                hutil.do_exit(0, 'Enable', CommonVariables.extension_success_status, str(CommonVariables.encrypttion_already_enabled), str(kek_secret_id_created))

    except Exception as e:
        hutil.error("Failed to enable the extension with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
        hutil.do_exit(0, 'Enable',CommonVariables.extension_error_status,str(CommonVariables.unknown_error), 'Enable failed.')

def enable_encryption_format(passphrase,luks_header_path,encryption_queue, disk_util, bek_util):
    # get the disks to format."["5:0:0:1":"5:0:0:2"]"
    encryption_parameters = encryption_queue.current_parameters()
    encryption_parameters_obj = json.loads(encryption_parameters)
    for scsi_num in encryption_parameters_obj:
        sdx_path = disk_util.query_dev_sdx_path_by_scsi_id(scsi_num)
        devices = disk_util.get_device_items(sdx_path)
        if(len(devices) != 1):
            logger.log("the device with scsi number:" + scsi_num + " have more than one sub device. so skip it.")
            continue
        else:
            device_item = devices[0]
            if(device_item.fstype == "" and device_item.type == "disk"):
                mapper_name = str(uuid.uuid4())
                logger.log("encrypting " + str(device_item))
                encrypt_error = disk_util.encrypt_disk(os.path.join("/dev/", device_item.name), passphrase, mapper_name, luks_header_path)
                if(encrypt_error.errorcode == CommonVariables.success):
                    file_system = "ext4"
                    disk_util.format_disk("/dev/mapper/" + mapper_name,file_system)
                    crypt_item_to_update = CryptItem()
                    crypt_item_to_update.mapper_name = mapper_name
                    crypt_item_to_update.dev_path = os.path.join("/dev/" ,device_item.name)
                    crypt_item_to_update.luks_header_path = luks_header_path
                    crypt_item_to_update.file_system = file_system
                    crypt_item_to_update.mount_point = "/mnt/mapper_name"

                    disk_util.make_sure_path_exists(crypt_item_to_update.mount_point)
                    disk_util.update_crypt_item(crypt_item_to_update)
                    disk_util.mount_filesystem(os.path.join(CommonVariables.dev_mapper_root,mapper_name), device_item.mountpoint)
                else:
                    hutil.do_exit(0,'Enable',CommonVariables.extension_error_status,str(encrypt_error.code),encrypt_error.info)

def enable_encryption_all_in_place(passphrase, luks_header_path, encryption_queue, disk_util,bek_util):
    ########### the existing scenario starts ###################
    # {"command":"enableencryption_format","query":[{"source_scsi_number":"[5:0:0:0]","filesystem":"ext4","mount_point":"/mnt/"}],
    # {"command":"enableencryption_all_inplace"}],
    # {"command":"enableencryption_clone","query":[{"source_scsi_number":"[5:0:0:0]","target_scsi_number":"[5:0:0:2]"},{"source_scsi_number":"[5:0:0:1]","target_scsi_number":"[5:0:0:3]"}],
    # {"command":"enableencryption_inplace","query":[{"source_scsi_number":"[5:0:0:0]","in-place":"true"}"}],
    # this is the encryption in place
    # "force":"true", "passphrase":"User@123"}
    logger.log("executing the enableencryption_all_inplace command.")
    device_items = disk_util.get_device_items(None)
    encrypted_items = []
    error_message = ""
    for device_item in device_items:
        logger.log("device_item == " + str(device_item))

        should_skip = disk_util.should_skip_for_inplace_encryption(device_item)
        if(not should_skip):
            if(device_item.name == bek_util.passphrase_device):
                logger.log("skip for the passphrase disk " + str(device_item))
                should_skip = True
            if(device_item.name in encrypted_items):
                logger.log("already did a operation " + str(device_item) + " so skip it")
                should_skip = True

        if(not should_skip):
            umount_status_code = CommonVariables.success
            if(device_item.mountpoint != ""):
                umount_status_code = disk_util.umount(device_item.mountpoint)
            if(umount_status_code != CommonVariables.success):
                    logger.log("error occured when do the umount for " + device_item.mountpoint + str(umount_status_code))
            else:
                encrypted_items.append(device_item.name)
                mapper_name = str(uuid.uuid4())
                logger.log("encrypting " + str(device_item))
                encrypt_error = disk_util.encrypt_disk(os.path.join("/dev/", device_item.name), passphrase, mapper_name, luks_header_path)
                if(encrypt_error.errorcode == CommonVariables.success):
                    logger.log("start copying data " + str(device_item))
                    copy_result = disk_util.copy(device_item, os.path.join(CommonVariables.dev_mapper_root, mapper_name))
                    if(copy_result != CommonVariables.success):
                        error_message = error_message + "the copying result is " + copy_result + " so skip the mounting"
                        logger.log("the copying result is " + copy_result + " so skip the mounting")
                        hutil.do_exit(0, 'Enable', CommonVariables.extension_error_status, str(CommonVariables.copy_data_error), error_message)
                    else:
                        crypt_item_to_update = CryptItem()
                        crypt_item_to_update.mapper_name = mapper_name
                        crypt_item_to_update.dev_path = os.path.join("/dev/" ,device_item.name)
                        crypt_item_to_update.luks_header_path = luks_header_path
                        crypt_item_to_update.file_system = device_item.fstype
                        # if the original mountpoint is empty, then leave
                        # it as
                        # None
                        if device_item.mountpoint == "" or device_item.mountpoint == None:
                            crypt_item_to_update.mount_point = "None"
                        else:
                            crypt_item_to_update.mount_point = device_item.mountpoint
                        disk_util.update_crypt_item(crypt_item_to_update)

                        if(crypt_item_to_update.mount_point != "None"):
                            disk_util.mount_filesystem(os.path.join(CommonVariables.dev_mapper_root,mapper_name), device_item.mountpoint)
                        else:
                            logger.log("the crypt_item_to_update.mount_point is None, so we do not mount it.")
                else:
                    hutil.do_exit(0,'Enable',CommonVariables.extension_error_status,str(encrypt_error.code),encrypt_error.info)

def daemon():
    hutil.do_parse_context('Executing')
    try:
        # Ensure the same configuration is executed only once
        # If the previous enable failed, we do not have retry logic here.
        # TODO Remount all
        encryption_queue = EncryptionMark(logger, encryptionEnvironment)
        if(encryption_queue.is_encryption_marked()):
            logger.log("encryption is marked.")
        else:
            return

        if(encryption_queue.current_command() == CommonVariables.EnableEncryptionFormat):
            enable_encryption_format()
        else:
            """
            search for the bek volume, then mount it:)
            """
            disk_util = DiskUtil(hutil, MyPatching, logger, encryptionEnvironment)

            encryption_config = EncryptionConfig(encryptionEnvironment,logger)
            bek_passphrase = None
            """
            try to find the attached bek volume, and use the file to mount the crypted volumes,
            and if the passphrase file is found, then we will re-use it for the future.
            """
            bek_util = BekUtil(disk_util, logger)
            if(encryption_config.config_file_exists()):
                bek_passphrase = bek_util.get_bek_passphrase(encryption_config)

            if(bek_passphrase == None):
                hutil.do_exit(0, 'Enable',CommonVariables.extension_error_status, CommonVariables.passphrase_file_not_found, 'Passphrase file not found.')
            else:
                """
                check whether there's a scheduled encryption task
                """
                logger.log("trying to install the extras")
                MyPatching.install_extras()

                """
                if the key is not created successfully, the encrypted file system should not 
                """
                logger.log("creating luks header")
                luks_header_path = disk_util.create_luks_header()

                if(encryption_queue.current_command() == CommonVariables.EnableEncryption):
                    enable_encryption_all_in_place(bek_passphrase,luks_header_path, encryption_queue, disk_util, bek_util)
                elif(encryption_queue.current_command() == CommonVariables.EnableEncryptionFormat):
                    enable_encryption_format(bek_passphrase,luks_header_path,encryption_queue,disk_util)
                else:
                    #TODO we should exit.
                    logger.log("command " + str(encryption_queue.current_command()) + " not supported")

    except Exception as e:
        # mount the file systems back.
        hutil.error("Failed to enable the extension with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
        hutil.do_exit(0, 'Enable',CommonVariables.extension_error_status,'1', 'Enable failed.')
    finally:
        encryption_queue = EncryptionMark(logger, encryptionEnvironment)
        #TODO not remove it, backed it up.
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
    hutil.do_exit(0,'Uninstall',CommonVariables.extension_success_status,'0', 'Uninstall succeeded')

def disable():
    hutil.do_parse_context('Disable')
    hutil.do_exit(0,'Disable',CommonVariables.extension_success_status,'0', 'Disable Succeeded')

def update():
    hutil.do_parse_context('Upadate')
    hutil.do_exit(0,'Update',CommonVariables.extension_success_status,'0', 'Update Succeeded')

if __name__ == '__main__' :
    main()
