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
import httplib
import imp
import json
import os
import os.path
import re
import shlex
import string
import subprocess
import sys
import tempfile
import traceback
import urllib2
import urlparse
import uuid

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
    global hutil,MyPatching,logger,encryption_environment
    HandlerUtil.LoggerInit('/var/log/waagent.log','/dev/stdout')
    HandlerUtil.waagent.Log("%s started to handle." % (CommonVariables.extension_name))
    
    hutil = HandlerUtil.HandlerUtility(HandlerUtil.waagent.Log, HandlerUtil.waagent.Error, CommonVariables.extension_name)
    logger = BackupLogger(hutil)
    MyPatching = GetMyPatching(logger)
    hutil.patching = MyPatching
    
    encryption_environment = EncryptionEnvironment(patching=MyPatching,logger=logger)
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
        encryption_config = EncryptionConfig(encryption_environment, logger)
        existed_passphrase_file = None
        kek_secret_id_created = None

        """
        trying to mount the crypted items.
        """
        disk_util = DiskUtil(hutil, MyPatching, logger, encryption_environment)
        bek_util = BekUtil(disk_util, logger)

        #make sure the azure disk config path exists.
        config_path_result = disk_util.make_sure_path_exists(encryption_environment.encryption_config_path)
        if(config_path_result != CommonVariables.process_success):
            logger.log(msg="azure encryption path creation failed.",level=CommonVariables.ErrorLevel)
        if(encryption_config.config_file_exists()):
            existed_passphrase_file = bek_util.get_bek_passphrase_file(encryption_config)
            if(existed_passphrase_file != None):
                crypt_items = disk_util.get_crypt_items()
                if(crypt_items is not None):
                    for i in range(0, len(crypt_items)):
                        crypt_item = crypt_items[i]
                        #add walkarounf for the centos 7.0
                        se_linux_status=None
                        if(MyPatching.distro_info[0].lower() == 'centos' and MyPatching.distro_info[1].startswith('7.0')):
                            se_linux_status = encryption_environment.get_se_linux()
                            if(se_linux_status.lower() == 'enforcing'):
                                encryption_environment.disable_se_linux()
                        luks_open_result = disk_util.luks_open(passphrase_file=existed_passphrase_file,dev_path=crypt_item.dev_path,mapper_name=crypt_item.mapper_name,header_file=crypt_item.luks_header_path)
                        logger.log("luks open result is " + str(luks_open_result))
                        if(MyPatching.distro_info[0].lower() == 'centos' and MyPatching.distro_info[1].startswith('7.0')):
                            if(se_linux_status is not None and se_linux_status.lower() == 'enforcing'):
                                encryption_environment.enable_se_linux()
                        if(crypt_item.mount_point != 'None'):
                            disk_util.mount_crypt_item(crypt_item, existed_passphrase_file)
                        else:
                            logger.log(msg=('mount_point is None so skipping mount for the item ' + str(crypt_item)),level=CommonVariables.WarningLevel)
                bek_util.umount_azure_passhprase(encryption_config)
            else:
                """
                the config exists, and the passphrase not get is a error case.
                """
                logger.log(msg="the config file exists, but we could not get the passphrase according to it.",level=CommonVariables.ErrorLevel)
                bek_util.umount_azure_passhprase(encryption_config)
                exit_without_status_report()
                #hutil.do_exit(0,'Enable',CommonVariables.extension_error_status,str(CommonVariables.passphrase_file_not_found),'The
                #passphrase could not get.')

        encryption_marker = EncryptionMark(logger, encryption_environment)
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
            if(existed_passphrase_file == None):
                if(extension_parameter.passphrase is None or extension_parameter.passphrase == ""):
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
            encryption_request.diskFormatQuery = extension_parameter.DiskFormatQuery
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

def enable_encryption_format(passphrase, encryption_queue, disk_util):
    encryption_parameters = encryption_queue.encryptionDiskFormatQuery()

    encryption_format_items = json.loads(encryption_parameters)
    for encryption_item in encryption_format_items:
        sdx_path = disk_util.query_dev_sdx_path_by_scsi_id(encryption_item["scsi"])
        devices = disk_util.get_device_items(sdx_path)
        if(len(devices) != 1):
            logger.log(msg=("the device with scsi number:" + str(encryption_item["scsi"]) + " have more than one sub device. so skip it."),level=CommonVariables.WarningLevel)
            continue
        else:
            device_item = devices[0]
            if(device_item.fstype == "" and device_item.type == "disk"):
                mapper_name = str(uuid.uuid4())
                logger.log("encrypting " + str(device_item))
                device_to_encrypt = os.path.join("/dev/", device_item.name)
                encrypted_device_path = os.path.join(CommonVariables.dev_mapper_root,mapper_name)
                #TODO add walkaround
                encrypt_error = None
                try:
                    se_linux_status = None
                    if(MyPatching.distro_info[0].lower() == 'centos' and MyPatching.distro_info[1].startswith('7.0')):
                        se_linux_status = encryption_environment.get_se_linux()
                        if(se_linux_status.lower() == 'enforcing'):
                            encryption_environment.disable_se_linux()
                    encrypt_error = disk_util.encrypt_disk(device_to_encrypt, passphrase, mapper_name, header_file=None)
                finally:
                    if(MyPatching.distro_info[0].lower() == 'centos' and MyPatching.distro_info[1].startswith('7.0')):
                        if(se_linux_status is not None and se_linux_status.lower() == 'enforcing'):
                            encryption_environment.enable_se_linux()
                if(encrypt_error is not None and encrypt_error.errorcode == CommonVariables.success):
                    #TODO: let customer specify it in the parameter
                    file_system = CommonVariables.default_file_system
                    disk_util.format_disk(encrypted_device_path, file_system)
                    crypt_item_to_update = CryptItem()
                    crypt_item_to_update.mapper_name = mapper_name
                    crypt_item_to_update.dev_path = device_to_encrypt
                    crypt_item_to_update.luks_header_path = "None"
                    crypt_item_to_update.file_system = file_system

                    if(encryption_item["name"] is not None):
                        crypt_item_to_update.mount_point = "/mnt/" + str(encryption_item["name"])
                    else:
                        crypt_item_to_update.mount_point = "/mnt/" + mapper_name

                    disk_util.make_sure_path_exists(crypt_item_to_update.mount_point)
                    disk_util.update_crypt_item(crypt_item_to_update)

                    mount_result = disk_util.mount_filesystem(dev_path=encrypted_device_path,mount_point=crypt_item_to_update.mount_point)
                    logger.log("mount result is " + str(mount_result))
                else:
                    hutil.do_exit(0,'Enable',CommonVariables.extension_error_status,str(encrypt_error.code),encrypt_error.info)
            else:
                logger.log("the item fstype is not empty or the type is not a disk")

def enable_encryption_all_in_place(passphrase_file, encryption_queue, disk_util,bek_util):
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
                logger.log("error occured when do the umount for " + str(device_item.mountpoint) + str(umount_status_code))
            else:
                encrypted_items.append(device_item.name)
                mapper_name = str(uuid.uuid4())
                logger.log("encrypting " + str(device_item))
                device_path = os.path.join("/dev/", device_item.name)
                device_mapper_path = os.path.join(CommonVariables.dev_mapper_root, mapper_name)
                if(MyPatching.distro_info[0].lower() == "centos" and MyPatching.distro_info[1].startswith('6.')):
                    # 1.  check the file system e2fsck -f /dev/sdd
                    # 2.  resize2fs to resize the fs
                    # 3.  backup the first header of the
                    # original(2097152==4096*512 byte=2048*1K byte=2M byte),
                    #     say /tmp/file1 dd if=/dev/sdd of=/tmp/file1 bs=2M
                    #     count=1
                    # 4.  call the luksFormat to format the original disk
                    # 5.  call the luksOpen to open the luks mapper device.
                    # 6.  copy the orignal data to the encrypted one.
                    #     suppose the original data is 123456780, and the 1
                    #     stands for the header
                    #
                    #     calculate the count need to copy count = (total
                    #     size/4M - 1)
                    #     then the progress would be dd if=/dev/sdd
                    #     of=/dev/mapper/uuid seek=2M skip=2M bs=2M
                    #                                dd if=/tmp/file1
                    #                                of=/dev/mapper/uuid bs=2M
                    #                                count=1
                    logger.log(msg="this is the centos 6 serios, need special handling.",level=CommonVariables.WarningLevel)
                    # we only support ext file systems.
                    if(not device_item.fstype.lower().startswith("ext")):
                        logger.log(msg="we only support ext file systems for centos 6.5/6.6/6.7",level=CommonVariables.WarningLevel)
                        continue
                    check_fs_result = disk_util.check_fs(dev_path = device_path)
                    if(check_fs_result != CommonVariables.process_success):
                        logger.log(msg=("check fs result failed with code " + str(check_fs_result) + " for: " + str(device_path)),level=CommonVariables.ErrorLevel)
                    luks_header_size = 4096 * 512
                    shrinkfs_result = disk_util.shrink_fs(device_path)
                    if(shrinkfs_result != CommonVariables.process_success):
                        logger.log(msg=("shrink file system failed, return code is: " + str(shrinkfs_result)),level=CommonVariables.ErrorLevel)
                        continue
                    tmpfile_created = tempfile.NamedTemporaryFile()
                    tmpfile_created.close()
                    #TODO: the copy progress file seems not cleared.
                    copy_result = disk_util.copy(source_dev_name=device_path,copy_total_size=CommonVariables.default_block_size,destination = tmpfile_created.name)

                    if(copy_result != CommonVariables.process_success):
                        logger.log(msg=("copy the header block failed, return code is: " + str(copy_result)),level=CommonVariables.ErrorLevel)
                        continue
                    encrypt_error = disk_util.encrypt_disk(dev_path=device_path,passphrase_file=passphrase_file,mapper_name=mapper_name,header_file=None)
                    # get the luks_header_size
                    if(encrypt_error.code != CommonVariables.success):
                        logger.log(msg="encrypt file system failed.",level=CommonVariables.ErrorLevel)
                        continue

                    copy_result = disk_util.copy(source_dev_name=device_path,copy_total_size=(device_item.size - luks_header_size),destination=device_mapper_path,from_end=True)
                    if(copy_result != CommonVariables.process_success):
                        logger.log(msg=("copy the main content block failed, return code is: " + str(copy_result)),level=CommonVariables.ErrorLevel)
                        continue
                    copy_result = disk_util.copy(tmpfile_created.name, CommonVariables.default_block_size, device_mapper_path, from_end=False)
                    expand_fs_result = disk_util.expand_fs(dev_path=device_mapper_path)
                    if(expand_fs_result != CommonVariables.process_success):
                        logger.log(msg=("expand fs result is: " + str(expand_fs_result)),level=CommonVariables.ErrorLevel)
                else:
                    luks_header_file = disk_util.create_luks_header(mapper_name)
                    encrypt_error = None
                    try:
                        se_linux_status = None
                        #walkaround for the centos 7.0
                        if(MyPatching.distro_info[0].lower() == 'centos' and MyPatching.distro_info[1].startswith('7.0')):
                            se_linux_status = encryption_environment.get_se_linux()
                            if(se_linux_status.lower() == 'enforcing'):
                                encryption_environment.disable_se_linux()
                        encrypt_error = disk_util.encrypt_disk(device_path, passphrase_file, mapper_name,header_file=luks_header_file)
                    finally:
                        if(MyPatching.distro_info[0].lower() == 'centos' and MyPatching.distro_info[1].startswith('7.0')):
                            if(se_linux_status is not None and se_linux_status.lower() == 'enforcing'):
                                encryption_environment.enable_se_linux()
                    if(encrypt_error is not None and encrypt_error.errorcode == CommonVariables.success):
                        logger.log("start copying data " + str(device_item))
                        copy_result = disk_util.copy(source_dev_name=device_item.name,copy_total_size= device_item.size,destination= device_mapper_path,from_end=False)
                        if(copy_result != CommonVariables.success):
                            error_message = error_message + "the copying result is " + copy_result + " so skip the mounting"
                            logger.log(msg=("the copying result is " + copy_result + " so skip the mounting"),level=CommonVariables.ErrorLevel)
                            #hutil.do_exit(0, 'Enable', CommonVariables.extension_error_status, str(CommonVariables.copy_data_error), error_message)
                            continue
                        else:
                            crypt_item_to_update = CryptItem()
                            crypt_item_to_update.mapper_name = mapper_name
                            crypt_item_to_update.dev_path = device_path
                            crypt_item_to_update.luks_header_path = luks_header_file
                            crypt_item_to_update.file_system = device_item.fstype
                            # if the original mountpoint is empty, then leave
                            # it as None
                            if device_item.mountpoint == "" or device_item.mountpoint == None:
                                crypt_item_to_update.mount_point = "None"
                            else:
                                crypt_item_to_update.mount_point = device_item.mountpoint
                            disk_util.update_crypt_item(crypt_item_to_update)

                            if(crypt_item_to_update.mount_point != "None"):
                                disk_util.mount_filesystem(device_mapper_path, device_item.mountpoint)
                            else:
                                logger.log("the crypt_item_to_update.mount_point is None, so we do not mount it.")
                    else:
                        logger.log(msg=("the encrypton for " + str(device_item) + " failed"),level=CommonVariables.ErrorLevel)
                        continue
                        #hutil.do_exit(0,'Enable',CommonVariables.extension_error_status,str(encrypt_error.code),encrypt_error.info)

def daemon():
    hutil.do_parse_context('Executing')
    try:
        # Ensure the same configuration is executed only once
        # If the previous enable failed, we do not have retry logic here.
        # TODO Remount all
        encryption_queue = EncryptionMark(logger, encryption_environment)
        if(encryption_queue.is_encryption_marked()):
            logger.log("encryption is marked.")
        else:
            return

        """
        search for the bek volume, then mount it:)
        """
        disk_util = DiskUtil(hutil, MyPatching, logger, encryption_environment)

        encryption_config = EncryptionConfig(encryption_environment,logger)
        bek_passphrase_file = None
        """
        try to find the attached bek volume, and use the file to mount the crypted volumes,
        and if the passphrase file is found, then we will re-use it for the future.
        """
        bek_util = BekUtil(disk_util, logger)
        if(encryption_config.config_file_exists()):
            bek_passphrase_file = bek_util.get_bek_passphrase_file(encryption_config)

        if(bek_passphrase_file == None):
            hutil.do_exit(0, 'Enable', CommonVariables.extension_error_status, CommonVariables.passphrase_file_not_found, 'Passphrase file not found.')
        else:
            """
            check whether there's a scheduled encryption task
            """
            logger.log("trying to install the extras")
            MyPatching.install_extras()

            """
            if the key is not created successfully, the encrypted file system should not 
            """

            if(encryption_queue.current_command() == CommonVariables.EnableEncryption):
                enable_encryption_all_in_place(bek_passphrase_file, encryption_queue, disk_util, bek_util)
            elif(encryption_queue.current_command() == CommonVariables.EnableEncryptionFormat):
                enable_encryption_format(bek_passphrase_file, encryption_queue, disk_util)
            else:
                #TODO we should exit.
                logger.log("command " + str(encryption_queue.current_command()) + " not supported")
        bek_util.umount_azure_passhprase(encryption_config)

    except Exception as e:
        # mount the file systems back.
        hutil.error("Failed to enable the extension with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
        hutil.do_exit(0, 'Enable',CommonVariables.extension_error_status, '1', 'Enable failed.')
    finally:
        encryption_queue = EncryptionMark(logger, encryption_environment)
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
