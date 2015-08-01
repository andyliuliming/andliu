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
from common import CommonVariables
from extensionparameter import ExtensionParameter
from extensionparameter import EncryptionItem
from encryption import *
from rebootmanager import RebootManager
from diskutil import DiskUtil
from diskutil import DiskPartition
from backuplogger import Backuplogger
#Main function is the only entrence to this extension handler
def main():
    global hutil,MyPatching,backup_logger
    HandlerUtil.LoggerInit('/var/log/waagent.log','/dev/stdout')
    HandlerUtil.waagent.Log("%s started to handle." % (CommonVariables.extension_name)) 
    hutil = HandlerUtil.HandlerUtility(HandlerUtil.waagent.Log, HandlerUtil.waagent.Error, CommonVariables.extension_name)
    backup_logger = Backuplogger(hutil)
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
    backup_logger.log("")
    start_daemon()

def daemon():
    hutil.do_parse_context('Executing')
    try:
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

        backup_logger.log("trying to install the extras")
        MyPatching.install_extras(extension_parameter)

        #dev_manager = DevManager(hutil)
        #disk_util = Mounter(backup_logger,hutil)
        disk_util = DiskUtil(hutil, MyPatching,backup_logger)
        encryption = Encryption(hutil)

        luks_header_path = encryption.create_luks_header()
        ########### the existing scenario starts ###################
        # we do not support the backup version policy
        # {"command":"enableencryption","query":[{"source_scsi_number":"[5:0:0:0]","target_scsi_number":"[5:0:0:2]"},{"source_scsi_number":"[5:0:0:1]","target_scsi_number":"[5:0:0:3]"}],
        # {"command":"enableencryption_inplace","query":[{"source_scsi_number":"[5:0:0:0]","in-place":"true"}"}],
        # {"command":"enableencryption_format","query":[{"source_scsi_number":"[5:0:0:0]","filesystem":"ext4","mount_point":"/mnt/"}],
        # this is the encryption in place
        # {"command":"enableencryption_all_inplace"}],
        # "force":"true", "passphrase":"User@123"}

        if(extension_parameter.command == "enableencryption_format"):
            backup_logger.log("executing the enableencryption_format command.")
            # check whether the current is stripped disk
            # we need to change the uuid after the encryption.
            # http://www.sudo-juice.com/how-to-change-the-uuid-of-a-linux-partition/
            encryption_keypair_len = len(extension_parameter.query)
            for i in range(0, encryption_keypair_len):
                mapper_name = str(uuid.uuid4())
                exist_disk_path = disk_util.query_dev_sdx_path(current_mapping["source_scsi_number"])
                encryption.encrypt_disk(exist_disk_path, extension_parameter.passphrase, mapper_name, luks_header_path)
        elif(extension_parameter.command == "enableencryption_all_inplace"):
            backup_logger.log("executing the enableencryption_all_inplace command.")
            mounts = disk_util.get_mounts()
            
            azure_blk_items = disk_util.get_azure_devices()

            for i in range(0,len(mounts)):
                mount_item = mounts[i]
                mapper_name = str(uuid.uuid4())
                # how to create raid?
                # sudo mdadm --create /dev/md128 --level 0 --raid-devices 2
                # /dev/sde /dev/sdf
                # double check it, because we will have data loss if we do it
                # twice it's not a crypt device
                backup_logger.log("mount_item == " + str(mount_item))
                #TODO skip the resource disk
                should_skip = False
                for j in range(0,len(azure_blk_items)):
                    if(azure_blk_items[j].name == mount_item.name):
                        backup_logger.log("the mountpoint is the azure disk root or resource, so skip it.")
                        should_skip = True
                if(mount_item.mountpoint == "/"):
                    backup_logger.log("the mountpoint is root, so skip." + str(mount_item))
                    should_skip = True
                if(should_skip):
                    pass
                else:
                    backup_logger.log("encrypting " + str(mount_item))
                    encryption.encrypt_disk("/dev/" + mount_item.name, extension_parameter.passphrase, mapper_name, luks_header_path)
                    disk_util.copy("/dev/" + mount_item.name, os.path.join(CommonVariables.dev_mapper_root,mapper_name))

        elif(extension_parameter.command == "enableencryption"):
            backup_logger.log("executing the enableencryption_all_inplace command.")
            # scsi_host,channel,target_number,LUN
            # find the scsi using the filter
            encryption_keypair_len = len(extension_parameter.query)

            # save the mounts info down.

            encryption_items = []
            # check the scsi
            for i in range(0, encryption_keypair_len):
                backup_logger.log("checking the encryptoin_keypair parameter")
                current_mapping = extension_parameter.query[i]
                backup_logger.log("scsi_number to query is " + str(current_mapping["source_scsi_number"]))
                exist_disk_path = disk_util.query_dev_sdx_path(current_mapping["source_scsi_number"])#disk_util.query_dev_uuid_path(current_mapping["source_scsi_number"])

                backup_logger.log("exist_disk_path is " + str(exist_disk_path))
                if(exist_disk_path == None):
                    raise Exception("the scsi number is not found")

                backup_logger.log("scsi_number to query is " + str(current_mapping["target_scsi_number"]))
                encryption_dev_root_path = disk_util.query_dev_sdx_path(current_mapping["target_scsi_number"])#disk_util.query_dev_uuid_path(current_mapping["target_scsi_number"])

                # scsi_host,channel,target_number,LUN
                # find the scsi using the filter

                backup_logger.log("encryption_dev_root_path is " + str(encryption_dev_root_path))
                if(encryption_dev_root_path == None):
                    raise Exception("the scsi number is not found")

                encryption_item = EncryptionItem()
                encryption_item.exist_disk_path = exist_disk_path
                encryption_item.encryption_dev_root_path = encryption_dev_root_path
                encryption_item.origin_disk_partitions = disk_util.get_disk_partitions(encryption_item.exist_disk_path)
                encryption_items.append(encryption_item)

            # find the existing mapping, both by uuid and the sdx path

            for i in range(0, encryption_keypair_len):
                print ("################" + str(encryption_items))
                encryption_item = encryption_items[i]

                ################### device is a blank one ###################
                disk_util.clone_partition_table(encryption_item.encryption_dev_root_path,encryption_item.exist_disk_path)
                encryption_item.target_disk_partitions = disk_util.get_disk_partitions(encryption_item.encryption_dev_root_path)
                #TODO: make the source/target pair matches exactly
                for partition_index in range(len(encryption_item.origin_disk_partitions)):
                    origin_disk_partition = encryption_item.origin_disk_partitions[partition_index]
                    target_disk_partition = encryption_item.target_disk_partitions[partition_index]
                    mapper_name = str(uuid.uuid4())
                    encryption_result = encryption.encrypt_disk(target_disk_partition.dev_path, extension_parameter.passphrase, mapper_name, luks_header_path)

                    if(encryption_result.code == CommonVariables.success):
                        disk_util.copy(origin_disk_partition.dev_path, os.path.join(CommonVariables.dev_mapper_root,mapper_name))
                    else:
                        backup_logger.log("encrypt disk result: " + str(encryption_result))
            # TODO:change the fstab to do the mounting

            # disk_util.replace_mounts_in_fs_tab(encryption_item.origin_disk_partitions,
            # encryption_item.target_disk_partitions)
            disk_util.update_mount_info(encryption_items)
            disk_util.mount_all()
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
