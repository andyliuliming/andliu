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
import sys
from subprocess import *
import shutil
import uuid
from common import *



class DiskUtil(object):
    def __init__(self,hutil,patching,logger):
        self.hutil = hutil
        self.patching = patching
        self.logger = logger
        self.ide_class_id="{32412632-86cb-44a2-9b5c-50d1417354f5}"
        self.vmbus_sys_path = '/sys/bus/vmbus/devices'

    def copy_using_cp(self,from_device,to_device):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "' + 'sg_dd oflag=sparse if=' + from_device + ' of=' + to_device
        self.logger.log("copying from " + str(from_device) + " to " + str(to_device) + " using command " + str(commandToExecute))
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "from_device is " + str(from_device) + " to_device is " + str(to_device)
            self.logger.log(str(commandToExecute) + ' is ' + str(returnCode))
        return error

    def copy_using_dd(self,from_device,to_device):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "' + 'dd conv=sparse if=' + from_device + ' of=' + to_device + ' bs=512"'
        self.logger.log("copying from " + str(from_device) + " to " + str(to_device) + " using command " + str(commandToExecute))
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "from_device is " + str(from_device) + " to_device is " + str(to_device)
            self.logger.log(str(commandToExecute) + ' is ' + str(returnCode))
        return error

    def copy(self,from_device,to_device):
        """
        if the os is ubuntu 12.04, then ues the cp --sparse instead.
        """
        print(self.patching.distro_info)
        if(self.patching.distro_info[0].lower() == "ubuntu" and self.patching.distro_info[1] == "12.04"):
            return self.copy_using_cp(from_device,to_device)
        else:
            return self.copy_using_dd(from_device,to_device)

    def get_disk_partition_table_type(self, dev_path):
        p = subprocess.Popen(['udevadm', 'info', '-q', 'property', '-n',dev_path], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        udevadm_output, err = p.communicate()
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
        blk_items = self.get_lsblk(dev_path)
        for i in range(0,len(blk_items)):
            if(blk_items[i].type == "part"):
                disk_partitions.append(blk_items[i])
        return disk_partitions

    def clone_partition_table(self, target_dev, source_dev):
        # partition it
        # http://superuser.com/questions/823922/dm-cryptluks-can-i-have-a-separate-header-without-storing-it-on-the-luks-encry
        if(self.get_disk_partition_table_type(source_dev) == "dos"):
            commandToExecute = '/bin/bash -c "' + 'sfdisk -d ' + source_dev + ' | sfdisk --force ' + target_dev + '"'
            proc = Popen(commandToExecute, shell=True)
            returnCode = proc.wait()
            return returnCode
        elif(self.get_disk_partition_table_type(target_dev) == "gpt"):
            #sgdisk -R=/dev/sdb /dev/sda
            commandToExecute = '/bin/bash -c "' + 'sgdisk -R=' + target_dev + ' ' + source_dev + + '"'
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
        commandToExecute = '/bin/bash -c "' + mkfs_command + ' ' + dev_path + ' 2> /dev/null"'
        self.logger.log("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mkfs_error
            error.info = "command to execute is " + commandToExecute
            self.logger.log('mkfs_command returnCode is ' + str(returnCode))
        return error

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
    def mount_filesystem(self,dev_path,mount_point):
        commandToExecute = '/bin/bash -c "mount ' + dev_path + ' ' + mount_point + '"'
        self.logger.log("mount file system, execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        return returnCode

    def make_sure_disk_exists(self,path):
        #mkdir -p foo/bar/baz
        commandToExecute = '/bin/bash -c "mkdir -p ' + path + '"'
        self.logger.log("make sure path exists, execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        return returnCode

    def get_crypt_items(self):
        crypt_items = []
        azure_crypt_mount = '/etc/azure_crypt_mount'
        if not os.path.exists(azure_crypt_mount):
            self.logger.log(azure_crypt_mount + " not exists")
            return None
        else:
            with open("/etc/fstab",'r') as f:
                existing_content = f.read()
                crypt_mount_items = existing_content.splitlines()
                for i in range(0,len(crypt_mount_items)):
                    crypt_mount_item = crypt_mount_items[i]
                    if(crypt_mount_item.strip() != ""):
                        crypt_mount_item_properties = crypt_mount_item.strip().split()
                        crypt_item = CryptItem()
                        crypt_item.name = crypt_mount_item_properties[0]
                        crypt_item.dev_path = crypt_mount_item_properties[1]
                        crypt_item.luks_header_path = crypt_mount_item_properties[2]
                        crypt_item.mount_point = crypt_mount_item_properties[3]
                        crypt_items.append(crypt_item)
        return crypt_items

    def update_crypt_item(self,crypt_item):
        azure_crypt_mount = '/etc/azure_crypt_mount'
        if not os.path.exists(azure_crypt_mount):
            with open(azure_crypt_mount,'w') as wf:
                wf.write("")

        mount_content_item = crypt_item.name + " " + crypt_item.dev_path + " " + crypt_item.luks_header_path + " " + crypt_item.mount_point
        with open("/etc/azure_crypt_mount",'r') as f:
            existing_content = f.read()
            new_mount_content = existing_content + "\n" + mount_content_item
        with open("/etc/azure_crypt_mount",'w') as wf:
            existing_content+="\n" + mount_content_item
            wf.write(new_mount_content)
        # <target name> <source device> <key file> <options>

    def create_luks_header(self):
        luks_header_path = "/azureluksheader"
        if(os.path.exists(luks_header_path)):
            return luks_header_path
        else:
            # dd if=/dev/zero bs=8388608 count=1 > /luks_header_path
            commandToExecute = '/bin/bash -c "' + 'dd if=/dev/zero bs=8388608 count=1 > ' + luks_header_path + '"'
            proc = Popen(commandToExecute, shell=True)
            returnCode = proc.wait()
            self.logger.log("result of make luks header result is " + str(returnCode))
            return luks_header_path

    def encrypt_disk(self, devpath, passphrase, mappername, headerfile):
        error = EncryptionError()
        self.hutil.log("dev path to cryptsetup luksFormat " + str(devpath))
        commandToExecute = '/bin/bash -c "' + 'echo -n "' + passphrase + '" | cryptsetup luksFormat ' + devpath + ' --header ' + headerfile + '"'

        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_format_error
            error.info = "devpath is " + str(devpath)
            self.logger.log('cryptsetup -y luksFormat returnCode is ' + str(returnCode))
            return error

        commandToExecute = '/bin/bash -c "' + 'echo -n "' + passphrase + '" | cryptsetup luksOpen ' + devpath + ' ' + mappername + ' --header ' + headerfile + '"'
        self.hutil.log("dev mapper name to cryptsetup luksFormat " + (mappername))
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "devpath is " + str(devpath) + " dev_mapper_name is " + str(mappername)
            self.logger.log('cryptsetup luksOpen returnCode is ' + str(returnCode))
            return error
        return error

    def get_passphrase_from_bek(self):

        pass

    def mount_crypt_item(self, crypt_item):
        """

        """
        pass

    def umount(self, path):
        commandToExecute = '/bin/bash -c "umount ' + path + ' 2> /dev/null"'
        self.logger.log("umount, execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        return returnCode

    def mount_all(self):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "mount -a 2> /dev/null"'
        self.logger.log("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mount_error
            error.info = "commandToExecute is " + commandToExecute
            self.logger.log('mount returnCode is ' + str(returnCode))
        return error

    def query_dev_sdx_path(self,scsi_number):
        p = Popen(['lsscsi', scsi_number], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        identity, err = p.communicate()
        # identity sample: [5:0:0:0] disk Msft Virtual Disk 1.0 /dev/sdc
        self.logger.log("lsscsi output is: \n" + identity)
        vals = identity.split()
        if(vals == None or len(vals) == 0):
            return None
        sdx_path = vals[len(vals) - 1]
        return sdx_path

    def query_dev_uuid_path_by_sdx_path(self,sdx_path):
        p = Popen(['blkid',sdx_path],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
        identity,err = p.communicate()
        identity = identity.lower()
        self.logger.log("blkid output is: \n" + identity)
        uuid_pattern = 'uuid="'
        index_of_uuid = identity.find(uuid_pattern)
        identity = identity[index_of_uuid + len(uuid_pattern):]
        index_of_quote = identity.find('"')
        uuid = identity[0:index_of_quote]
        if(uuid.strip() == ""):
            return sdx_path
        return os.path.join("/dev/disk/by-uuid/",uuid)

    def query_dev_uuid_path_by_scsi_number(self,scsi_number):
        # find the scsi using the filter
        # TODO figure out why the disk formated using fdisk do not have uuid
        sdx_path = self.query_dev_sdx_path(scsi_number)
        return query_dev_uuid_by_sdx_path(sdx_path)

    def get_lsblk(self, dev_path):
        self.logger.log("getting the blk info from " + str(dev_path))
        blk_items = []
        # lsblk -b -n -P -o NAME,TYPE,FSTYPE,MOUNTPOINT,LABEL,UUID,MODEL
        if(dev_path is None):
            p = subprocess.Popen(['lsblk', '-b', '-n','-P','-o','NAME,TYPE,FSTYPE,MOUNTPOINT,LABEL,UUID,MODEL'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        else:
            p = subprocess.Popen(['lsblk', '-b', '-n','-P','-o','NAME,TYPE,FSTYPE,MOUNTPOINT,LABEL,UUID,MODEL',dev_path], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        out_lsblk_output, err = p.communicate()
        out_lsblk_output = str(out_lsblk_output)
        self.logger.log("out_lsblk_output:\n" + str(out_lsblk_output))
        lines = out_lsblk_output.splitlines()
        for i in range(0,len(lines)):
            item_value_str = lines[i].strip()
            if(item_value_str != ""):
                disk_info_item_array = item_value_str.split()
                blk_item = LsblkItem()
                disk_info_item_array_length = len(disk_info_item_array)
                for j in range(0, disk_info_item_array_length):
                    disk_info_property = disk_info_item_array[j]
                    property_item_pair = disk_info_property.split('=')
                    if(property_item_pair[0] == 'NAME'):
                        blk_item.name = property_item_pair[1].strip('"')

                    if(property_item_pair[0] == 'TYPE'):
                        blk_item.type = property_item_pair[1].strip('"')

                    if(property_item_pair[0] == 'FSTYPE'):
                        blk_item.fstype = property_item_pair[1].strip('"')
                        
                    if(property_item_pair[0] == 'MOUNTPOINT'):
                        blk_item.mountpoint = property_item_pair[1].strip('"')

                    if(property_item_pair[0] == 'LABEL'):
                        blk_item.label = property_item_pair[1].strip('"')

                    if(property_item_pair[0] == 'UUID'):
                        blk_item.uuid = property_item_pair[1].strip('"')

                    if(property_item_pair[0] == 'MODEL'):
                        blk_item.model = property_item_pair[1].strip('"')

                blk_items.append(blk_item)
        return blk_items

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
            supported_device_type = ["disk","part","raid0","raid1","raid5","raid10"]
            if(device_item.type not in supported_device_type):
                self.logger.log("the device type: " + str(device_item.type) + " is not supported yet")
                return True

            sub_items = self.get_lsblk("/dev/" + device_item.name)
            if(len(sub_items) > 1):
                self.logger.log("there's sub items for the device: " + str(device_item.name) + ", so skip it")
                return True

            azure_blk_items = self.get_azure_devices()
            if(device_item.type == "crypt"):
                self.logger.log("device_item.type is " + str(device_item.type) + " so skip it")
                return True

            if(device_item.mountpoint == "/"):
                self.logger.log("the mountpoint is root, so skip. " + str(device_item))
                return True

            for j in range(0,len(azure_blk_items)):
                if(azure_blk_items[j].name == device_item.name):
                    self.logger.log("the mountpoint is the azure disk root or resource, so skip it.")
                    return True
            return False

    def get_azure_devices(self):
        ide_devices = self.get_ide_devices()
        blk_items = []
        for i in range(0,len(ide_devices)):
            ide_device=ide_devices[i]
            current_blk_items = self.get_lsblk("/dev/" + ide_device)
            for j in range(0,len(current_blk_items)):
                blk_items.append(current_blk_items[i])
        return blk_items

    def get_ide_devices(self):
        """
        this only return the device names of the ide.
        """
        ide_devices = []
        for vmbus in os.listdir(vmbus_sys_path):
            f = open('%s/%s/%s' % (vmbus_sys_path, vmbus, 'class_id'), 'r')
            class_id = f.read()
            f.close()
            if(class_id.strip() == self.ide_class_id):
                device_sdx_path = self.find_block_sdx_path(vmbus)
                ide_devices.append(device_sdx_path)
        return ide_devices

    def find_block_sdx_path(self,vmbus):
        for root, dirs, files in os.walk(self.vmbus_sys_path + vmbus):
            if root.endswith("/block"):
                device = dirs[0]
                break
        return None