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
import time
import urlparse
import httplib
from urlparse import urljoin
from keyvault import *

import time
import datetime

#Main function is the only entrence to this extension handler
class Fakelogger(object):
    def __init__(self):
        self.msg = ''
        self.__StorageVersion = "2014-02-14"

    """description of class"""
    def log(self, msg):
        log_msg = (str(datetime.datetime.now()) + '   '+ msg + '\n')
        print(log_msg)

def main():
    logger =Fakelogger()
    keyVaultUtil = KeyVaultUtil(logger)
    #"https://diskencryptionkeyvault.vault.azure.net/keys/DiskEncryption-Kek/9bab277dd9be400bb88a7df7a49d2431
    #https://diskencryptionkeyvault.vault.azure.net/secrets
    #Passphrase, KeyVaultURL, KeyEncryptionKeyURL, AADClientID, KeyEncryptionAlgorithm, AADClientSecret,DiskEncryptionKeyFileName):
    #keyVaultUtil.create_kek_secret("VGhpcyBpcyB0aGUgcGxhaW4gdGV4dCBtZXNzYWdlLg" \
    #    ,"https://andliukeyvault.vault.azure.net/secrets/"\
    #    ,"https://andliukeyvault.vault.azure.net/keys/mykey","0c46e28c-e8cb-490d-bd4f-21626b6601f6","RSA1_5","q01ejLCpGd+ObJDA6meuZD+CiU72uxU7U4LcaRSd60s=")
    keyVaultUtil.create_kek_secret("Quattro!",\
                                   "https://diskencryptionkeyvault.vault.azure.net/",\
                                   "https://diskencryptionkeyvault.vault.azure.net/keys/DiskEncryption-Kek",\
                                   "b7b48143-6c58-4cd4-a9e0-0a15cbda0614",\
                                   "RSA1_5",\
                                   "/XazYdJ9XaMBbiQ0dwSoyue7LbkQ1OJOePGGcrG3dkA=",\
                                   "LinuxPassPhraseFileName")

    keyVaultUtil.create_kek_secret("Quattro!",\
                                   "https://diskencryptionkeyvault.vault.azure.net/",\
                                   None,\
                                   "b7b48143-6c58-4cd4-a9e0-0a15cbda0614",\
                                   None,\
                                   "/XazYdJ9XaMBbiQ0dwSoyue7LbkQ1OJOePGGcrG3dkA=",\
                                   "LinuxPassPhraseFileName")


if __name__ == '__main__' :
    main()
