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
from subprocess import *
import os.path
from Utils import HandlerUtil
from common import CommonVariables
# parameter format should be like this:
# {"command":"disk","query":{"scsi_number":"[5:0:0:1]","devpath":"/dev/sdb"},"force":"true"
# "filesystem":"ext4","devmapper":"sdb_encrypt","mountname":"mountname","mountpoint":"/mnt/","password":"password1","passphrase":"User@123"
# }
# {"command":"folder","path":"/home/andy/Private","password":"password1"}
class DevManager(object):
    def __init__(self,hutil):
        self.hutil = hutil
        pass

    def query_dev_sdx_path(self,scsi_number):
        p = Popen(['lsscsi', scsi_number], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        identity, err = p.communicate()
        # identity sample: [5:0:0:0] disk Msft Virtual Disk 1.0 /dev/sdc
        self.hutil.log("lsscsi output is: \n" + identity)
        vals = identity.split()
        if(vals == None or len(vals) == 0):
            return None
        sdx_path = vals[len(vals) - 1]
        return sdx_path

    def query_dev_uuid_path_by_sdx_path(self,sdx_path):
        p = Popen(['blkid',sdx_path],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
        identity,err = p.communicate()
        identity = identity.lower()
        self.hutil.log("blkid output is: \n" + identity)
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