#!/usr/bin/env python
#
# VM Backup extension
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
import uuid
import string
import subprocess
import sys
import imp
import shlex
import traceback
import urllib2
import urlparse
import httplib

#Main function is the only entrence to this extension handler
def main():
    uuid.uuid4()
    #p = subprocess.Popen(['lsscsi','[*:0:0:' + str(para_parser.lun) + ']'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    #identity, err = p.communicate()
    identity="[5:0:0:2]    disk    Msft     Virtual Disk     1.0   /dev/sde"
    vals=identity.split()
    print(vals[len(vals)-1])
    dict = {"a" : "apple", "b" : "banana", "g" : "grape", "o" : "orange"}
    print(dict.has_key("g"))
    pass

if __name__ == '__main__' :
    main()
