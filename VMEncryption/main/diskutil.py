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
from common import CommonVariables
from encryption import EncryptionError
from common import CommonVariables

class LsblkItem(object):
    def __init__(self):
        #NAME,TYPE,FSTYPE,MOUNTPOINT,LABEL,UUID,MODEL
        self.name = None
        self.type = None
        self.fstype = None
        self.mountpoint = None
        self.label = None
        self.uuid = None
        self.model = None
    def __str__(self):
        return "name:" + str(self.name) + " type:" + str(self.type) + " fstype:" + str(self.fstype) + " mountpoint:" + str(self.mountpoint) + " label" + str(self.label) + " model:" + str(self.model)

class CryptItem(object):
    def __init__(self):
        self.name = None
        self.dev_path = None
        self.options = None
        self.mount_point = None
        self.luks_header_path = None

class DiskPartition(object):
    def __init__(self):
        self.dev_path = ""
        self.start = 0
        self.end = 0
        self.size = 0
        self.name = ""
        self.type = ""
        self.uuid_path = ""

class DiskUtil(object):
    def __init__(self,hutil,patching,logger):
        self.hutil = hutil
        self.patching = patching
        self.logger = logger

    def copy_using_cp(self,from_device,to_device):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "' + 'sg_dd oflag=sparse if=' + from_device + ' of=' + to_device
        self.logger("copying from " + str(from_device) + " to " + str(to_device) + " using command " + str(commandToExecute))
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "from_device is " + str(from_device) + " to_device is " + str(to_device)
            self.logger(str(commandToExecute) + ' is ' + str(returnCode))
        return error

    def copy_using_dd(self,from_device,to_device):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "' + 'dd conv=sparse if=' + from_device + ' of=' + to_device + ' bs=512"'
        self.logger("copying from " + str(from_device) + " to " + str(to_device) + " using command " + str(commandToExecute))
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.luks_open_error
            error.info = "from_device is " + str(from_device) + " to_device is " + str(to_device)
            self.logger(str(commandToExecute) + ' is ' + str(returnCode))
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
        self.logger("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mkfs_error
            error.info = "command to execute is " + commandToExecute
            self.logger('mkfs_command returnCode is ' + str(returnCode))
        return error

    def get_azure_devices(self):
        #/dev/disk/azure/root
        #/dev/disk/azure/resource
        ide0_device = self.DeviceForIdePort(0)
        self.logger.log("ide 0 device is " + str(ide0_device))
        if(ide0_device == None):
            return None
        ide1_device = self.DeviceForIdePort(1)
        self.logger.log("ide 1 device is " + str(ide1_device))
        if(ide1_device == None):
            return None

        blk_items = []
        root_blk_items = self.get_lsblk("/dev/" + ide0_device)#"/dev/disk/azure/root")
        for i in range(0,len(root_blk_items)):
            blk_items.append(root_blk_items[i])

        resource_blk_items = self.get_lsblk("/dev/" + ide1_device)#"/dev/disk/azure/resource")
        for i in range(0,len(resource_blk_items)):
            blk_items.append(resource_blk_items[i])
        return blk_items

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
        self.logger("mount file system, execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        return returnCode

    """
    replace the mounts entry from the orign disk partition to the target_disk_partition
    """
    def update_mount_info(self, encryption_items):
        # get the output of mount
        # get the content of fstab
        # [Device] [Mount Point] [File System Type] [Options] [Dump] [Pass]
        # backup the /etc/fstab file
        # TODO Handle exception
        shutil.copy2('/etc/fstab', '/etc/fstab.backup.' + str(str(uuid.uuid4())))
        new_mount_content = ""
        with open("/etc/fstab",'r') as f:
            mount_lines = f.read().splitlines()
            for i in range(len(mount_lines)):
                line_stripped = mount_lines[i].strip()
                if(not line_stripped.startswith("#") and not line_stripped == ""):
                    """
                    /dev/sdb1 /mnt auto defaults,nobootwait,comment=cloudconfig 0 2
                    """
                    print ("mount_lines[i] == " + str(mount_lines[i]))
                    item_array = mount_lines[i].split()
                    dev_path_in_mount = item_array[0]
                    for j in range(len(encryption_items)):
                        encryption_item = encryption_items[j]
                        found = False
                        for k in range(len(encryption_item.origin_disk_partitions)):
                            if(dev_path_in_mount == encryption_item.origin_disk_partitions[k].dev_path):
                                white_space = " "
                                item_array[0] = encryption_item.target_disk_partitions[k].dev_path
                                new_mount_content = new_mount_content + "\n" + white_space.join(item_array)
                                found = True
                                pass
                            if (dev_path_in_mount == encryption_item.origin_disk_partitions[k].uuid_path):
                                white_space = " "
                                item_array[0] = encryption_item.target_disk_partitions[k].uuid_path
                                new_mount_content = new_mount_content + "\n" + white_space.join(item_array)
                                found = True
                        if(not found):
                            new_mount_content = new_mount_content + mount_lines[i]
                else:
                    new_mount_content = new_mount_content + "\n" + line_stripped
        with open("/etc/fstab",'w') as wf:
            wf.write(new_mount_content)

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
                for i in range(0,crypt_mount_items):
                    crypt_mount_item = crypt_mount_items[i]
                    if(crypt_mount_item.strip() != ""):
                        crypt_mount_item_properties = crypt_mount_item.strip().split()
                        crypt_item = CryptItem()
                        crypt_item.name = crypt_mount_item_properties[0]
                        crypt_item.dev_path = crypt_mount_item_properties[0]
                        crypt_item.options = crypt_mount_item_properties[0]
                        crypt_item.luks_header_path = crypt_mount_item_properties[0]
                        crypt_items.append(crypt_item)
        return crypt_items

    def update_crypt_item(self,crypt_item):
        #externaldrive UUID=2f9a8428-ac69-478a-88a2-4aa458565431 none
        #luks,timeout=180
        #shutil.copy2('/etc/crypttab', '/etc/crypttab.backup.' +
        #str(str(uuid.uuid4())))
        azure_crypt_mount = '/etc/azure_crypt_mount'
        if not os.path.exists(azure_crypt_mount):
            with open(azure_crypt_mount,'w') as wf:
                wf.write("")

        mount_content_item = crypt_item.name + " " + crypt_item.dev_path + " " + crypt_item.options + " " + crypt_item.luks_header_path
        with open("/etc/fstab",'r') as f:
            existing_content = f.read()
            new_mount_content = existing_content + "\n" + mount_content_item
        with open("/etc/fstab",'w') as wf:
            existing_content+="\n" + mount_content_item
            wf.write(new_mount_content)

    
        # <target name> <source device> <key file> <options>
    def mount_crypt_item(self,mount_item):

        pass

    def umount(self,path):
        self.logger.log("umount " + str(path))

    def mount_all(self):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "mount -a 2> /dev/null"'
        self.logger("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mount_error
            error.info = "commandToExecute is " + commandToExecute
            self.logger('mount returnCode is ' + str(returnCode))
        return error

    def query_dev_sdx_path(self,scsi_number):
        p = Popen(['lsscsi', scsi_number], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        identity, err = p.communicate()
        # identity sample: [5:0:0:0] disk Msft Virtual Disk 1.0 /dev/sdc
        self.logger("lsscsi output is: \n" + identity)
        vals = identity.split()
        if(vals == None or len(vals) == 0):
            return None
        sdx_path = vals[len(vals) - 1]
        return sdx_path

    def query_dev_uuid_path_by_sdx_path(self,sdx_path):
        p = Popen(['blkid',sdx_path],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
        identity,err = p.communicate()
        identity = identity.lower()
        self.logger("blkid output is: \n" + identity)
        uuid_pattern = 'uuid="'
        index_of_uuid = identity.find(uuid_pattern)
        identity = identity[index_of_uuid + len(uuid_pattern):]
        index_of_quote = identity.find('"')
        uuid = identity[0:index_of_quote]
        # output /dev/sdc: UUID="7a396578-5701-4ce6-8fc6-ff31316d5672"
        # TYPE="crypto_LUKS"
        #print("uuid=" + uuid)
        if(uuid.strip() == ""):
            return sdx_path
        return os.path.join("/dev/disk/by-uuid/",uuid)

    def query_dev_uuid_path_by_scsi_number(self,scsi_number):
        # find the scsi using the filter
        # TODO figure out why the disk formated using fdisk do not have uuid
        sdx_path = self.query_dev_sdx_path(scsi_number)
        return query_dev_uuid_by_sdx_path(sdx_path)
    
    def get_blkid(self,dev_path):
        #self.logger.log("getting the blk info from " + str(dev_path))
        #blk_items = []
        #if(dev_path is None):
        #    p = subprocess.Popen(['lsblk', '-b',
        #    '-n','-P','-o','NAME,TYPE,FSTYPE,MOUNTPOINT,LABEL,UUID,MODEL'],
        #    stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        #else:
        #    p = subprocess.Popen(['lsblk', '-b',
        #    '-n','-P','-o','NAME,TYPE,FSTYPE,MOUNTPOINT,LABEL,UUID,MODEL',dev_path],
        #    stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        #out_lsblk_output, err = p.communicate()
        #out_lsblk_output = str(out_lsblk_output)
        #self.logger.log("out_lsblk_output:\n" + str(out_lsblk_output))
        #lines = out_lsblk_output.splitlines()
        #for i in range(0,len(lines)):
        #    item_value_str = lines[i].strip()
        #    if(item_value_str != ""):
        #        disk_info_item_array = item_value_str.split()
        #        blk_item = LsblkItem()
        #        disk_info_item_array_length = len(disk_info_item_array)
        #        for j in range(0, disk_info_item_array_length):
        #            disk_info_property = disk_info_item_array[j]
        #            property_item_pair = disk_info_property.split('=')
        #            if(property_item_pair[0] == 'NAME'):
        #                blk_item.name = property_item_pair[1].strip('"')

        #            if(property_item_pair[0] == 'TYPE'):
        #                blk_item.type = property_item_pair[1].strip('"')

        #            if(property_item_pair[0] == 'FSTYPE'):
        #                blk_item.fstype = property_item_pair[1].strip('"')
                        
        #            if(property_item_pair[0] == 'MOUNTPOINT'):
        #                blk_item.mountpoint = property_item_pair[1].strip('"')

        #            if(property_item_pair[0] == 'LABEL'):
        #                blk_item.label = property_item_pair[1].strip('"')

        #            if(property_item_pair[0] == 'UUID'):
        #                blk_item.uuid = property_item_pair[1].strip('"')

        #            if(property_item_pair[0] == 'MODEL'):
        #                blk_item.model = property_item_pair[1].strip('"')

        #        blk_items.append(blk_item)
        #return blk_items
        pass

    def get_lsblk(self, dev_path):
        self.logger.log("getting the blk info from " + str(dev_path))
        blk_items = []
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

    def DeviceForIdePort(self,n):
        """
        Return device name attached to ide port 'n'.
        """
        if n > 3:
            return None
        g0 = "00000000"
        if n > 1:
            g0 = "00000001"
            n = n - 2
        device = None
        path = "/sys/bus/vmbus/devices/"
        for vmbus in os.listdir(path):
            """
            Read and return contents of 'filepath'.
            """
            mode = 'r'
            c = None
            filepath = path + vmbus + "/device_id"
            try:
                with open(filepath) as F :
                    c = F.read()
            except IOError, e:
                self.logger.log('reading from file ' + filepath + ' exception is ' + str(e))
                return None
            guid = (c).lstrip('{').split('-')
            if guid[0] == g0 and guid[1] == "000" + str(n):
                for root, dirs, files in os.walk(path + vmbus):
                    if root.endswith("/block"):
                        device = dirs[0]
                        break
                    else : #older distros
                        for d in dirs:
                            if ':' in d and "block" == d.split(':')[0]:
                                device = d.split(':')[1]
                                break
                break
        return device
