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
import subprocess
import os
import os.path
import shlex
import sys
from subprocess import *
import shutil
import uuid
from TransactionalCopyTask import TransactionalCopyTask
from Common import CommonVariables

class DiskUtil(object):
    def __init__(self, hutil, patching, logger, encryption_environment):
        self.encryption_environment = encryption_environment
        self.hutil = hutil
        self.patching = patching
        self.logger = logger
        self.ide_class_id = "{32412632-86cb-44a2-9b5c-50d1417354f5}"
        self.vmbus_sys_path = '/sys/bus/vmbus/devices'

    def copy(self, source_dev_name, copy_total_size, destination,from_end=False):
        copy_task = TransactionalCopyTask(self.logger, source_dev_name=source_dev_name, copy_total_size=copy_total_size, destination=destination, patching=self.patching,encryption_environment= self.encryption_environment,from_end=from_end)
        mem_fs_result = copy_task.prepare_mem_fs()
        if(mem_fs_result != CommonVariables.process_success):
            return CommonVariables.copy_data_error

        returnCode = copy_task.begin_copy()
        copy_task.clear_mem_fs()
        return returnCode

    def get_disk_partition_table_type(self, dev_path):
        p = subprocess.Popen(['udevadm', 'info', '-q', 'property', '-n',dev_path], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        udevadm_output, err = p.communicate()
        # todo handle this error case.
        udevadm_output = str(udevadm_output)
        property_info_lines = udevadm_output.splitlines()
        for i in range(0,len(property_info_lines)):
            property_name = property_info_lines[i].split("=")[0]
            if(property_name == "ID_PART_TABLE_TYPE"):
                return property_info_lines[i].split("=")[1]
        return None

    def get_disk_partitions(self, dev_path):
        #TODO check the dev path parameter
        disk_partitions = []
        blk_items = self.get_device_items(dev_path)
        for i in range(0,len(blk_items)):
            if(blk_items[i].type == "part"):
                disk_partitions.append(blk_items[i])
        return disk_partitions

    def clone_partition_table(self, target_dev, source_dev):
        self.logger.log("cloning the partition table from " + str(source_dev) + " to " + str(target_dev))
        if(self.get_disk_partition_table_type(source_dev) == "dos"):
            commandToExecute = self.patching.bash_path + ' -c "' + 'sfdisk -d ' + source_dev + ' | sfdisk --force ' + target_dev + '"'
            proc = Popen(commandToExecute, shell=True)
            returnCode = proc.wait()
            return returnCode
        elif(self.get_disk_partition_table_type(target_dev) == "gpt"):
            commandToExecute = self.patching.bash_path + ' -c "' + 'sgdisk -R=' + target_dev + ' ' + source_dev + + '"'
            proc = Popen(commandToExecute, shell=True)
            returnCode = proc.wait()
            return returnCode
        return None

    def format_disk(self, dev_path, filesystem):
        error = EncryptionError()
        mkfs_command = ""
        if(filesystem == "ext4"):
            mkfs_command = "mkfs.ext4"
        elif(filesystem == "ext3"):
            mkfs_command = "mkfs.ext3"
        elif(filesystem == "xfs"):
            mkfs_command = "mkfs.xfs"
        elif(filesystem == "btrfs"):
            mkfs_command = "mkfs.btrfs"
        mkfs_cmd = mkfs_command + ' ' + dev_path
        self.logger.log("command to execute :" + mkfs_cmd)
        mkfs_cmd_args = shlex.split(mkfs_cmd)
        proc = Popen(mkfs_cmd_args)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mkfs_error
            error.info = "command to execute is " + commandToExecute
            self.logger.log('mkfs_command returnCode is ' + str(returnCode))
        return error

    def make_sure_path_exists(self,path):
        mkdir_cmd = self.patching.mkdir_path + ' -p ' + path
        self.logger.log("make sure path exists, execute :" + mkdir_cmd)
        mkdir_cmd_args = shlex.split(mkdir_cmd)
        proc = Popen(mkdir_cmd_args)
        returnCode = proc.wait()
        return returnCode

    def get_crypt_items(self):
        crypt_items = []
        if not os.path.exists(self.encryption_environment.azure_crypt_mount_config_path):
            self.logger.log(self.encryption_environment.azure_crypt_mount_config_path + " not exists")
            return None
        else:
            with open(self.encryption_environment.azure_crypt_mount_config_path,'r') as f:
                existing_content = f.read()
                crypt_mount_items = existing_content.splitlines()
                for i in range(0,len(crypt_mount_items)):
                    crypt_mount_item = crypt_mount_items[i]
                    if(crypt_mount_item.strip() != ""):
                        crypt_mount_item_properties = crypt_mount_item.strip().split()
                        crypt_item = CryptItem()
                        crypt_item.mapper_name = crypt_mount_item_properties[0]
                        crypt_item.dev_path = crypt_mount_item_properties[1]
                        crypt_item.luks_header_path = crypt_mount_item_properties[2]
                        crypt_item.mount_point = crypt_mount_item_properties[3]
                        crypt_item.file_system = crypt_mount_item_properties[4]
                        crypt_items.append(crypt_item)
        return crypt_items

    def update_crypt_item(self,crypt_item):
        if not os.path.exists(self.encryption_environment.azure_crypt_mount_config_path):
            with open(self.encryption_environment.azure_crypt_mount_config_path,'w') as wf:
                wf.write("")

        mount_content_item = crypt_item.mapper_name + " " + crypt_item.dev_path + " " + crypt_item.luks_header_path + " " + crypt_item.mount_point + " " + crypt_item.file_system
        with open(self.encryption_environment.azure_crypt_mount_config_path,'r') as f:
            existing_content = f.read()
            new_mount_content = existing_content + "\n" + mount_content_item
        with open(self.encryption_environment.azure_crypt_mount_config_path,'w') as wf:
            existing_content+="\n" + mount_content_item
            wf.write(new_mount_content)
        # <target name> <source device> <key file> <options>

    def create_luks_header(self):
        if(os.path.exists(self.encryption_environment.luks_header_path)):
            return self.encryption_environment.luks_header_path
        else:
            commandToExecute = self.patching.bash_path + ' -c "' + self.patching.dd_path + ' if=/dev/zero bs=33554432 count=1 > ' + self.encryption_environment.luks_header_path + '"'
            proc = Popen(commandToExecute, shell=True)
            returnCode = proc.wait()
            self.logger.log("result of make luks header result is " + str(returnCode))
            return self.encryption_environment.luks_header_path

    def encrypt_disk(self, dev_path, passphrase_file, mapper_name, header_file):
        error = EncryptionError()
        returnCode = self.luks_format(passphrase_file=passphrase_file, dev_path=dev_path, headerfile=header_file)
        if(returnCode != CommonVariables.process_success):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_format_error
            error.info = "luks format failed, devpath is " + str(dev_path)
            self.logger.log('cryptsetup luksFormat returnCode is ' + str(returnCode))
            return error

        returnCode = self.luks_open(passphrase_file=passphrase_file, dev_path=dev_path, mapper_name=mapper_name,header_file= header_file)
        if(returnCode != CommonVariables.process_success):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "luks open failed, devpath is " + str(dev_path) + " dev_mapper_name is " + str(mapper_name)
            self.logger.log('cryptsetup luksOpen returnCode is ' + str(returnCode))
        return error

    def check_fs(self,devpath):
        self.logger.log("checking fs:" + str(devpath))
        return True

    def expand_fs(self,devpath):
        expandfs_cmd = self.patching.resize2fs_path + devpath
        self.logger.log("cryptsetup_cmd is:" + expandfs_cmd)
        expandfs_cmd_args = shlex.split(expandfs_cmd)
        shrinkfs_p = Popen(expandfs_cmd_args)
        returnCode = shrinkfs_p.wait()
        return returnCode

    def shrink_fs(self,devpath):
        shrinkfs_cmd = self.patching.resize2fs_path + ' -M ' + devpath
        self.logger.log("cryptsetup_cmd is:" + shrinkfs_cmd)
        shrinkfs_cmd_args = shlex.split(shrinkfs_cmd)
        shrinkfs_p = Popen(shrinkfs_cmd_args)
        returnCode = shrinkfs_p.wait()
        return returnCode

    def luks_format_without_header(self,passphrase_file,devpath):
        pass

    def luks_open_without_header(self,passphrase_file,devpath):
        pass
    """
    return the return code of the process for error handling.
    """
    def luks_format(self,passphrase_file,dev_path,headerfile):
        self.hutil.log("dev path to cryptsetup luksFormat " + str(dev_path))
        cryptsetup_cmd = self.patching.cryptsetup_path + ' luksFormat ' + dev_path + ' --header ' + headerfile + ' -d ' + passphrase_file + ' -q'
        self.logger.log("cryptsetup_cmd is:" + cryptsetup_cmd)
        cryptsetup_cmd_args = shlex.split(cryptsetup_cmd)
        cryptsetup_p = Popen(cryptsetup_cmd_args)
        returnCode = cryptsetup_p.wait()
        return returnCode

    """
    return the return code of the process for error handling.
    """
    def luks_open(self,passphrase_file,dev_path,mapper_name,header_file):
        self.hutil.log("dev mapper name to cryptsetup luksOpen " + (mapper_name))
        cryptsetup_cmd = self.patching.cryptsetup_path + ' luksOpen ' + dev_path + ' ' + mapper_name + ' --header ' + header_file + ' -d ' + passphrase_file + ' -q'
        self.logger.log("cryptsetup_cmd is:" + cryptsetup_cmd)
        cryptsetup_cmd_args = shlex.split(cryptsetup_cmd)
        cryptsetup_p = Popen(cryptsetup_cmd_args)
        returnCode = cryptsetup_p.wait()
        return returnCode

    #TODO error handling.
    def append_mount_info(self, dev_path, mount_point):
        shutil.copy2('/etc/fstab', '/etc/fstab.backup.' + str(str(uuid.uuid4())))
        mount_content_item = dev_path + " " + mount_point + "  auto defaults 0 0"
        new_mount_content = ""
        with open("/etc/fstab",'r') as f:
            existing_content = f.read()
            new_mount_content = existing_content + "\n" + mount_content_item
        with open("/etc/fstab",'w') as wf:
            wf.write(new_mount_content)

    """
    mount the file system.
    """
    def mount_filesystem(self,dev_path,mount_point,file_system=None):
        returnCode = -1
        if file_system == None:
            mount_cmd = self.patching.mount_path + ' ' + dev_path + ' ' + mount_point
            self.logger.log("mount file system, execute :" + mount_cmd)
            mount_cmd_args = shlex.split(mount_cmd)
            proc = Popen(mount_cmd_args)
            returnCode = proc.wait()
        else: 
            mount_cmd = self.patching.mount_path + ' ' + dev_path + ' ' + mount_point + ' -t ' + file_system
            self.logger.log("mount file system, execute :" + mount_cmd)
            mount_cmd_args = shlex.split(mount_cmd)
            proc = Popen(mount_cmd_args)
            returnCode = proc.wait()
        return returnCode

    def mount_crypt_item(self, crypt_item, passphrase):
        self.logger.log("trying to mount the crypt item:" + str(crypt_item))
        mount_filesystem_result = self.mount_filesystem(os.path.join('/dev/mapper',crypt_item.mapper_name),crypt_item.mount_point,crypt_item.file_system)
        self.logger.log("mount file system result: " + str(mount_filesystem_result))

    def umount(self, path):
        umount_cmd = self.patching.umount_path + ' ' + path
        self.logger.log("umount, execute :" + umount_cmd)
        umount_cmd_args = shlex.split(umount_cmd)
        proc = Popen(umount_cmd_args)
        returnCode = proc.wait()
        return returnCode

    def mount_all(self):
        error = EncryptionError()
        mount_all_cmd = self.patching.mount_path + ' -a'
        self.logger.log("command to execute :" + mount_all_cmd)
        mount_all_cmd_args = shlex.split(mount_all_cmd)
        proc = Popen(mount_all_cmd_args)
        returnCode = proc.wait()
        if(returnCode != CommonVariables.process_success):
            error.errorcode = returnCode
            error.code = CommonVariables.mount_error
            error.info = "commandToExecute is " + commandToExecute
            self.logger.log('mount returnCode is ' + str(returnCode))
        return error

    def query_dev_sdx_path_by_scsi_id(self,scsi_number): 
        p = Popen([self.patching.lsscsi_path, scsi_number], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        identity, err = p.communicate()
        # identity sample: [5:0:0:0] disk Msft Virtual Disk 1.0 /dev/sdc
        self.logger.log("lsscsi output is: \n" + identity)
        vals = identity.split()
        if(vals == None or len(vals) == 0):
            return None
        sdx_path = vals[len(vals) - 1]
        return sdx_path

    def is_blank_disk(self,dev_path):
        blk_items = self.get_device_items(dev_path)
        for i in range(0,len(blk_items)):
            blk_item = blk_items[i]
            if(blk_item.fstype != "" or blk_item.type != "disk"):
                self.logger.log("the device  " + str(dev_path) + "is not blank blk item is " + str(blk_item))
                return False
        return True

    """
    the behaviour is if we could get the uuid, then return, if not, just return the sdx.
    """
    def query_dev_uuid_path_by_sdx_path(self, sdx_path):
        self.logger.log("querying the sdx path of:" + str(sdx_path))
        #blkid path
        p = Popen([self.patching.blkid_path,sdx_path], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        identity,err = p.communicate()
        identity = identity.lower()
        self.logger.log("blkid output is: \n" + identity)
        uuid_pattern = 'uuid="'
        index_of_uuid = identity.find(uuid_pattern)
        identity = identity[index_of_uuid + len(uuid_pattern):]
        index_of_quote = identity.find('"')
        uuid = identity[0:index_of_quote]
        if(uuid.strip() == ""):
            #TODO this is strange?  BUGBUG
            return sdx_path
        return os.path.join("/dev/disk/by-uuid/",uuid)

    def query_dev_uuid_path_by_scsi_number(self,scsi_number):
        # find the scsi using the filter
        # TODO figure out why the disk formated using fdisk do not have uuid
        sdx_path = self.query_dev_sdx_path_by_scsi_id(scsi_number)
        return self.query_dev_uuid_path_by_sdx_path(sdx_path)

    def get_device_items(self, dev_path):
        self.logger.log("getting the blk info from " + str(dev_path))
        device_items = []
        if(dev_path is None):
            p = Popen([self.patching.lsblk_path, '-b', '-n','-P','-o','NAME,TYPE,FSTYPE,MOUNTPOINT,LABEL,UUID,MODEL,SIZE'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        else:
            p = Popen([self.patching.lsblk_path, '-b', '-n','-P','-o','NAME,TYPE,FSTYPE,MOUNTPOINT,LABEL,UUID,MODEL,SIZE',dev_path], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        out_lsblk_output, err = p.communicate()
        out_lsblk_output = str(out_lsblk_output)
        self.logger.log("out_lsblk_output:\n" + str(out_lsblk_output))
        lines = out_lsblk_output.splitlines()
        for i in range(0,len(lines)):
            item_value_str = lines[i].strip()
            if(item_value_str != ""):
                disk_info_item_array = item_value_str.split()
                device_item = DeviceItem()
                disk_info_item_array_length = len(disk_info_item_array)
                for j in range(0, disk_info_item_array_length):
                    disk_info_property = disk_info_item_array[j]
                    property_item_pair = disk_info_property.split('=')
                    if(property_item_pair[0] == 'SIZE'):
                        device_item.size = int(property_item_pair[1].strip('"'))

                    if(property_item_pair[0] == 'NAME'):
                        device_item.name = property_item_pair[1].strip('"')

                    if(property_item_pair[0] == 'TYPE'):
                        device_item.type = property_item_pair[1].strip('"')

                    if(property_item_pair[0] == 'FSTYPE'):
                        device_item.fstype = property_item_pair[1].strip('"')
                        
                    if(property_item_pair[0] == 'MOUNTPOINT'):
                        device_item.mountpoint = property_item_pair[1].strip('"')

                    if(property_item_pair[0] == 'LABEL'):
                        device_item.label = property_item_pair[1].strip('"')

                    if(property_item_pair[0] == 'UUID'):
                        device_item.uuid = property_item_pair[1].strip('"')

                    if(property_item_pair[0] == 'MODEL'):
                        device_item.model = property_item_pair[1].strip('"')

                device_items.append(device_item)
        return device_items
    
    def should_skip_for_inplace_encryption(self, device_item):
        """
        TYPE="raid0"
        TYPE="partition"
        TYPE="crypt"

        first check whether there's one file system on it.
        if the type is disk, then to check whether it have child-items, say the partition, lvm or crypt luks.
        if the answer is yes, then skip it.
        """
        if(device_item.fstype == None or device_item.fstype == ""):
            return True
        else:
            if(device_item.size < CommonVariables.min_filesystem_size_support):
                self.logger.log("the device size is too small," + str(device_item.size) + " so skip it")
                return True

            supported_device_type = ["disk","part","raid0","raid1","raid5","raid10"]
            if(device_item.type not in supported_device_type):
                self.logger.log("the device type: " + str(device_item.type) + " is not supported yet, so skip it")
                return True

            sub_items = self.get_device_items("/dev/" + device_item.name)
            if(len(sub_items) > 1):
                self.logger.log("there's sub items for the device: " + str(device_item.name) + ", so skip it")
                return True

            azure_blk_items = self.get_azure_devices()
            if(device_item.type == "crypt"):
                self.logger.log("device_item.type is " + str(device_item.type) + ", so skip it")
                return True

            if(device_item.mountpoint == "/"):
                self.logger.log("the mountpoint is root " + str(device_item) + ", so skip it")
                return True
            for azure_blk_item in azure_blk_items:
                if(azure_blk_item.name == device_item.name):
                    self.logger.log("the mountpoint is the azure disk root or resource, so skip it.")
                    return True
            return False

    def get_azure_devices(self):
        ide_devices = self.get_ide_devices()
        blk_items = []
        for ide_device in ide_devices:
            current_blk_items = self.get_device_items("/dev/" + ide_device)
            for current_blk_item in current_blk_items:
                blk_items.append(current_blk_item)
        return blk_items

    def get_ide_devices(self):
        """
        this only return the device names of the ide.
        """
        ide_devices = []
        for vmbus in os.listdir(self.vmbus_sys_path):
            f = open('%s/%s/%s' % (self.vmbus_sys_path, vmbus, 'class_id'), 'r')
            class_id = f.read()
            f.close()
            if(class_id.strip() == self.ide_class_id):
                device_sdx_path = self.find_block_sdx_path(vmbus)
                self.logger.log("found one ide with vmbus:" + str(vmbus) + " and the sdx path is: " + str(device_sdx_path))
                ide_devices.append(device_sdx_path)
        return ide_devices

    def find_block_sdx_path(self,vmbus):
        device = None
        for root, dirs, files in os.walk(os.path.join(self.vmbus_sys_path ,vmbus)):
            if root.endswith("/block"):
                device = dirs[0]
            else : #older distros
                for d in dirs:
                    if ':' in d and "block" == d.split(':')[0]:
                        device = d.split(':')[1]
                        break
        return device
