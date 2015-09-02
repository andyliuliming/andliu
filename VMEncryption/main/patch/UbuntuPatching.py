#!/usr/bin/python
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
# Requires Python 2.4+


import os
import sys
import imp
import base64
import re
import json
import platform
import shutil
import time
import traceback
import datetime
import subprocess
from AbstractPatching import AbstractPatching
from common import *


class UbuntuPatching(AbstractPatching):
    def __init__(self,logger):
        super(UbuntuPatching,self).__init__()
        self.logger = logger

    def install_extras(self):
        """
        install the sg_dd because the default dd do not support the sparse write
        """
        if(self.distro_info[0].lower() == "ubuntu" and self.distro_info[1] == "12.04"):
            common_extras = ['cryptsetup-bin','lsscsi','gdisk','udevadm','sg_dd']
        else:
            common_extras = ['cryptsetup-bin','lsscsi','gdisk','udevadm']
        for extra in common_extras:
            self.logger.log("installation for " + extra + 'result is ' + str(subprocess.call(['apt-get', 'install','-y', extra])))