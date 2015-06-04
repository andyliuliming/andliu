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
import uuid
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
from diskutil import DiskUtil
from diskutil import DiskPartition
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

        #environment_manager = EnvironmentManager(hutil)

        #construct the encryption parameters ends

        ########### the new disk scenario starts ###################
        
        dev_manager = DevManager(hutil)

        if(extension_parameter.command == CommonVariables.newdisk_command):
        #    self.hutil = hutil
        #self.command = protected_settings.get('command')
        #self.force = protected_settings.get('force')
        #self.devpath = None
        #self.query = protected_settings.get('query')
        #self.exist_query = protected_settings.get('existQuery')
        #self.filesystem = protected_settings.get('filesystem')
        #self.mountpoint = protected_settings.get('mountpoint')
        #self.passphrase = protected_settings.get('passphrase')
            #vm_encryption_attach_new_para =
            #environment_manager.prepare_newdisk_encryption_parameters(extension_parameter)
            #vm_encryption_attach_new_para = VMEncryptionAttachNewParameter()

            #if(extension_parameter.mountname is None or
            #extension_parameter.mountname == ""):
            #    encryption_parameters.mountname =
            #    CommonVariables.default_mount_name
            #else:
            #    encryption_parameters.mountname =
            #    extension_parameter.mountname

            #if(extension_parameter.filesystem is None or
            #extension_parameter.filesystem == ""):
            #    vm_encryption_attach_new_para.filesystem =
            #    CommonVariables.default_file_system
            #else:
            #    vm_encryption_attach_new_para.filesystem =
            #    extension_parameter.filesystem

            ##if(extension_parameter.dev_mapper_name is None or
            ##extension_parameter.dev_mapper_name == ""):
            ##    encryption_parameters.dev_mapper_name =
            ##    CommonVariables.default_mapper_name
            ##else:
            ##    encryption_parameters.dev_mapper_name =
            ##    extension_parameter.dev_mapper_name

            #vm_encryption_attach_new_para.passphrase =
            #extension_parameter.passphrase
        
            #vm_encryption_attach_new_para.mountpoint =
            #extension_parameter.mountpoint

            # build up the target partitions
            target_partition = DiskPartition()
            if(extension_parameter.query.has_key("devpath")):
                target_partition.devpath = extension_parameter.query["devpath"]
            else:
                # scsi_host,channel,target_number,LUN
                # find the scsi using the filter
                target_partition.devpath = dev_manager.query_dev_uuid_path(extension_parameter.query["scsi_number"])
                if(target_partition.devpath == None):
                    raise Exception("the scsi number is not found")

            #encryption_parameters.target_disk_partitions.append(target_partition)
            #environment_validation_result =
            #environment_manager.validate_environment_for_newdisk(vm_encryption_attach_new_para)

            #if(environment_validation_result != CommonVariables.success):
            #    hutil.do_exit(0, 'Enable', 'error',
            #    str(environment_validation_result), 'error when validating the
            #    environment')
            #else:
                # the config_reboot is a decorator, it will modify the
                # encryption_parameters .
                # TODO: make the return parameter a error code.
                # we should encrypt the disk first, then configure_reboot

            encryption = Encryption(hutil)
            #construct the encryption disk format
            
            mapper_name = uuid.uuid4()
            encryption_result = encryption.encrypt_disk(target_partition.devpath,extension_parameter.passphrase,mapper_name)
            if(encryption_result.errorcode != CommonVariables.success):
                hutil.do_exit(0, 'Enable', encryption_result.state, str(encryption_result.code), encryption_result.info)

            encryption_result = encryption.format_disk(vm_encryption_attach_new_para.filesystem,device_parameter, os.path.join(CommonVariables.dev_mapper_root, mapper_name))

            # prepare the mount point
            mountpoint = encryption_parameters.mountpoint
            if(not os.path.exists(mountpoint)):
                hutil.log("the mountpoint does not exist, create it" + encryption_parameters.mountpoint)
                os.mkdir(mountpoint)
            # prepare the mount path for the encrypted disk
            mount_name = uuid.uuid4()


            keydisk_mount_point = os.path.join(mountpoint, CommonVariables.key_disk_mountname)
            i = 0
            while(os.path.exists(keydisk_mount_point)):
                i+=1
                keydisk_mount_point = os.path.join(encryption_parameters.mountpoint, CommonVariables.key_disk_mountname + str(i))

            hutil.log("creating the keydisk_mount_point " + keydisk_mount_point)
            os.mkdir(keydisk_mount_point)


            keydisk_mount_item = CommonVariables.key_disk_label_path + +" " + str(keydisk_mount_point) + " vfat defaults\n"
            hutil.log("keydisk_mount_item is " + str(keydisk_mount_item))
            
            encrypted_disk_mount_item = str(os.path.join(CommonVariables.dev_mapper_root,mapper_name)) + " " + str(os.path.join(mountpoint,mount_name)) + encryption_parameters.filesystem + " defaults\n"
            #"/dev/mapper/sdd1 /mnt/xxxencreypted ext4 defaults\n"
            hutil.log("encrypted_disk_mount_item is " + str(encrypted_disk_mount_item))

            attached_encrypted_disk_item = str(mapper_name) + " " + str(target_partition.devpath) + " " + os.path.join(keydisk_mount_point,CommonVariables.passphrase_file_name) + " luks\n"
            hutil.log("attached_encrypted_disk_item is " + str(attached_encrypted_disk_item))
            #"sdc1 /dev/sdd1 /mnt/keydisk/keyfile luks\n"
    #keydisk_mount_item ,encrypted_disk_mount_item,attached_encrypted_disk_item
    
            reboot_manager = RebootManager(hutil)
            vm_encryption_attach_new_para = reboot_manager.configure_reboot(keydisk_mount_item,encrypted_disk_mount_item,attached_encrypted_disk_item)
            
            mounter = Mounter(hutil)
            mounter.mount_all()

            hutil.do_exit(0, 'Enable', encryption_result.state, str(encryption_result.code), encryption_result.info)
        ########### the new disk scenario ends ###################




        ########### the existing scenario starts ###################
        elif(extension_parameter.command == CommonVariables.existdisk_command):
            # {"command":"existingdisk","query":{"scsi_number":"[5:0:0:1]","devpath":"/dev/sdb"},"force":"true","existQuery":{"scsi_number":"[5:0:0:1]","devpath":"/dev/sdc"}
            # "passphrase":"User@123"
            # }
            disk_util = DiskUtil(hutil)
            # the prepare function would construct the dev_mapper_origin_path
            # it's
            # something like /dev/devmapper/sdb_encrypt
            # and exist_devpath
            # the exist_encryption_parameters should contains the partitions
            # info
            exist_disk_path = ""
            if(extension_parameter.exist_query.has_key("devpath")):
                exist_disk_path = extension_parameter.exist_query["devpath"]
            else:
                # scsi_host,channel,target_number,LUN
                # find the scsi using the filter
                hutil.log("scsi_number to query is " + extension_parameter.exist_query["scsi_number"])
                exist_disk_path = dev_manager.query_dev_uuid_path(extension_parameter.exist_query["scsi_number"])
                if(exist_disk_path == None):
                    raise Exception("the scsi number is not found")


            #disk_info_parser = DiskInfoParser(self.hutil)
            # get the partitions info of the origin device
            origin_disk_partitions = disk_util.get_disk_partitions(exist_disk_path)
            #exist_encryption_parameters.origin_disk_partitions =
            #origin_disk_partitions




            if(extension_parameter.query.has_key("devpath")):
                encryption_dev_root_path = extension_parameter.query["devpath"]
            else:
                # scsi_host,channel,target_number,LUN
                # find the scsi using the filter
                hutil.log("scsi_number to query is " + extension_parameter.query["scsi_number"])
                encryption_dev_root_path = dev_manager.query_dev_uuid_path(extension_parameter.query["scsi_number"])
                if(encryption_dev_root_path == None):
                    raise Exception("the scsi number is not found")


            #exist_encryption_parameters =
            #environment_manager.prepare_existingdisk_encryption_parameters(extension_parameter)
            # devpath would be come /dev/disk/
            #environment_validation_result =
            #environment_manager.validate_environment_for_existingdisk(exist_encryption_parameters)
            #if(environment_validation_result != CommonVariables.success):
            #    hutil.do_exit(0, 'Enable', 'error',
            #    str(environment_validation_result), 'error when validating the
            #    environment')
            #else:
            # check whether the new attached disk is bigger than the
            # existing one.

            #disk_info_parser = DiskInfoParser(hutil)
                
            ## structure of the disk_partition is
            # devpath devname size
            # /dev/sdc1 sdc1 100202
            #disk_partitions =
            #disk_info_parser.get_disk_partitions(exist_encryption_parameters.exist_devpath)
            target_disk_partitions = disk_util.partit(encryption_dev_root_path,origin_disk_partitions)


            encryption = Encryption(hutil)

            # reboot_manager = RebootManager(hutil)
            #disk_copy = DiskCopy(hutil)

            for partition_index in range(len(origin_disk_partitions)):

            #for disk_partition in target_disk_partitions:
                origin_disk_partition = origin_disk_partitions[partition_index]
                #exist_encryption_parameters.encryption_dev_root_path =
                #disk_partition.devpath
                #exist_encryption_parameters.dev_mapper_name =
                #disk_partition.devname
                mapper_name = uuid.uuid4()
                encryption_result = encryption.encrypt_disk(origin_disk_partition.dev_path,extension_parameter.passphrase,str(mapper_name))

                #for partition_index in origin_disk_partitions.length():

                # code is our definition.
                if(encryption_result.code == CommonVariables.success):
                    #target_disk_partition
                    disk_util.copy(origin_disk_partition.dev_path, os.path.join(CommonVariables.dev_mapper_root,str(mapper_name)))
                else:
                    hutil.log("encrypt disk result: " + str(encryption_result))
            
            mounter = Mounter(hutil)
            mounter.mount_all()

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
