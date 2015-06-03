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
import os
import os.path
import subprocess
from encryption import *
from common import CommonVariables
from devmanager import DevManager
from diskutil import *

class EnvironmentManager(object):
    def __init__(self, hutil):
        self.hutil = hutil
        pass

     #self.command = protected_settings.get('command')
        #self.force = protected_settings.get('force')
        #self.devpath = None
        #self.query = protected_settings.get('query')
        #self.exist_query = protected_settings.get('existQuery')
        #self.filesystem = protected_settings.get('filesystem')
        #self.mountname = protected_settings.get('mountname')
        #self.mountpoint = protected_settings.get('mountpoint')
        #self.passphrase = protected_settings.get('passphrase')
    def prepare_newdisk_encryption_parameters(self, extension_parameter):
        encryption_parameters = VMEncryptionAttachNewParameter()
        #if(extension_parameter.mountname is None or extension_parameter.mountname == ""):
        #    encryption_parameters.mountname = CommonVariables.default_mount_name
        #else:
        #    encryption_parameters.mountname = extension_parameter.mountname

        if(extension_parameter.filesystem is None or extension_parameter.filesystem == ""):
            encryption_parameters.filesystem = CommonVariables.default_file_system
        else:
            encryption_parameters.filesystem = extension_parameter.filesystem

        #if(extension_parameter.dev_mapper_name is None or extension_parameter.dev_mapper_name == ""):
        #    encryption_parameters.dev_mapper_name = CommonVariables.default_mapper_name
        #else:
        #    encryption_parameters.dev_mapper_name = extension_parameter.dev_mapper_name

        encryption_parameters.passphrase = extension_parameter.passphrase
        
        encryption_parameters.mountpoint = extension_parameter.mountpoint

        # build up the target partitions
        target_partition = DiskPartition()
        if(extension_parameter.query.has_key("devpath")):
            target_partition.devpath = extension_parameter.query["devpath"]
        else:
            # scsi_host,channel,target_number,LUN
            # find the scsi using the filter
            dev_manager = DevManager(self.hutil)
            target_partition.devpath = dev_manager.query_dev_uuid_path(extension_parameter.query["scsi_number"])
            if(target_partition.devpath == None):
                raise Exception("the scsi number is not found")
        encryption_parameters.target_disk_partitions.append(target_partition)

        ## prepare the mount point
        #if(not os.path.exists(encryption_parameters.mountpoint)):
        #    self.hutil.log("the mountpoint does not exist, create it" + encryption_parameters.mountpoint)
        #    os.mkdir(encryption_parameters.mountpoint)

        #encryption_parameters.keydisk_mount_point = os.path.join(encryption_parameters.mountpoint, CommonVariables.key_disk_mountname)
        #i = 0
        #while(os.path.exists(encryption_parameters.keydisk_mount_point)):
        #    i+=1
        #    encryption_parameters.keydisk_mount_point = os.path.join(encryption_parameters.mountpoint, CommonVariables.key_disk_mountname + str(i))

        #self.hutil.log("creating the keydisk_mount_point " + encryption_parameters.keydisk_mount_point)
        #os.mkdir(encryption_parameters.keydisk_mount_point)

        #keydisk_mount_item = "/dev/disk/by-label/" + CommonVariables.key_disk_label + " " + encryption_parameters.keydisk_mount_point + " " + CommonVariables.key_disk_fs_type + " defaults\n"

        #encryption_parameters.dev_mapper_path = os.path.join(CommonVariables.dev_mapper_root, encryption_parameters.dev_mapper_name)
        #i = 0
        #encryption_parameters.dev_mapper_name = encryption_parameters.dev_mapper_name
        #while(os.path.exists(encryption_parameters.dev_mapper_path)):
        #    i+=1
        #    encryption_parameters.dev_mapper_name = encryption_parameters.dev_mapper_name + str(i)
        #    encryption_parameters.dev_mapper_path = os.path.join(CommonVariables.dev_mapper_root, encryption_parameters.dev_mapper_name + str(i))


        #encryption_parameters.encrypted_device_mount_point = os.path.join(encryption_parameters.mountpoint,encryption_parameters.mountname)
        #i = 0
        #encryption_parameters.mount_name = encryption_parameters.mountname
        #while(os.path.exists(encryption_parameters.encrypted_device_mount_point)):
        #    i += 1
        #    encryption_parameters.mount_name = encryption_parameters.mountname + str(i)
        #    encryption_parameters.encrypted_device_mount_point = os.path.join(encryption_parameters.mountpoint, encryption_parameters.mountname + str(i))
        #self.hutil.log("creating the encrypted_disk_mount_point " + encryption_parameters.encrypted_device_mount_point)
        #os.mkdir(encryption_parameters.encrypted_device_mount_point)

        return encryption_parameters

    def validate_environment_for_newdisk(self, encryption_parameters):
        # we should make sure that the disk is an empty disk.
        # call the lsblk -l /dev/sde
        
        self.hutil.log("dev path == " + str(encryption_parameters.devpath))
        p = subprocess.Popen(['lsblk', '-l', encryption_parameters.devpath], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        out_lsblk_output, err = p.communicate()
        out_lsblk_output = str(out_lsblk_output)

        self.hutil.log("out_lsblk_output:\n" + out_lsblk_output)
        lines = out_lsblk_output.splitlines()
        line_number = len(lines)
        self.hutil.log("first line is " + str(lines[0]))
        headers = lines[0].strip().split()
        type_index = -1
        headers_items_length = len(headers)
        self.hutil.log("headers_items_length is " + str(headers_items_length))
        for i in range(0,headers_items_length - 1):
            print(headers[i] + "i " + str(i))
            if(headers[i].strip().lower() == "type"):
                type_index = i
                break
        if(type_index == -1):
            return CommonVariables.environment_error

        is_blank_disk = True

        for x in range(1,line_number - 1):
            datas = lines[x].strip().split()
            if(datas[type_index].strip().lower() == 'disk'):
                is_blank_disk = False

        self.hutil.log("out_lsblk_output:\n" + str(out_lsblk_output))
        if(not is_blank_disk):
            if(encryption_parameters.force == "true"):
                return CommonVariables.success
            else:
                return CommonVariables.device_not_blank
        return CommonVariables.success
    
    def validate_environment_for_existingdisk(self,encryption_parameters):
        #TODO implement this
        # TODO check the target disk have enough space
        return CommonVariables.success

    """
    the 
    """
    def prepare_existingdisk_encryption_parameters(self, extension_parameter):
        exist_encryption_parameters = VMEncryptionExistDiskParameter()

        if(extension_parameter.dev_mapper_name is None or extension_parameter.dev_mapper_name == ""):
            exist_encryption_parameters.dev_mapper_name = CommonVariables.default_mapper_name
        else:
            exist_encryption_parameters.dev_mapper_name = extension_parameter.dev_mapper_name

        exist_encryption_parameters.passphrase = extension_parameter.passphrase
        exist_encryption_parameters.dev_mapper_origin_path = os.path.join(CommonVariables.dev_mapper_root, exist_encryption_parameters.dev_mapper_name)
        dev_manager = DevManager(self.hutil)

        if(extension_parameter.query.has_key("devpath")):
            exist_encryption_parameters.encryption_dev_root_path = extension_parameter.query["devpath"]
        else:
            # scsi_host,channel,target_number,LUN
            # find the scsi using the filter
            self.hutil.log("scsi_number to query is " + extension_parameter.query["scsi_number"])
            exist_encryption_parameters.encryption_dev_root_path = dev_manager.query_dev_uuid_path(extension_parameter.query["scsi_number"])
            if(exist_encryption_parameters.encryption_dev_root_path == None):
                raise Exception("the scsi number is not found")
        
        if(extension_parameter.exist_query.has_key("devpath")):
            exist_encryption_parameters.exist_devpath = extension_parameter.exist_query["devpath"]
        else:
            # scsi_host,channel,target_number,LUN
            # find the scsi using the filter
            self.hutil.log("scsi_number to query is " + extension_parameter.exist_query["scsi_number"])
            exist_encryption_parameters.exist_devpath = dev_manager.query_dev_uuid_path(extension_parameter.exist_query["scsi_number"])
            if(exist_encryption_parameters.exist_devpath == None):
                raise Exception("the scsi number is not found")

        disk_info_parser = DiskInfoParser(self.hutil)
        # get the partitions info of the origin device
        origin_disk_partitions = disk_info_parser.get_disk_partitions(exist_encryption_parameters.exist_devpath)
        exist_encryption_parameters.origin_disk_partitions=origin_disk_partitions
        return exist_encryption_parameters