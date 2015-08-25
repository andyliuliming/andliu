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
#Main function is the only entrence to this extension handler
def urljoin(*args):
        """
        Joins given arguments into a url. Trailing but not leading slashes are
        stripped for each argument.
        """

        return "/".join(map(lambda x: str(x).rstrip('/'), args))

def main():
    timestamp = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    util =  KeyVaultUtil(None)
    #0c46e28c-e8cb-490d-bd4f-21626b6601f6
    #q01ejLCpGd+ObJDA6meuZD+CiU72uxU7U4LcaRSd60s=
    #passphrase, secret_keyvault_uri, encryption_keyvault_uri, client_id, alg_name, AADClientSecret
    key_id="https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token"
    sasuri_obj = urlparse.urlparse(key_id)
    xxxww=urljoin("https://login.microsoftonline.com/","secrets","secret1")
#    POST https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token HTTP/1.1
#Content-Type: application/x-www-form-urlencoded
#client-request-id: b892f049-7d4a-4447-91bc-d99ad72c0023
#return-client-request-id: true
#x-client-SKU: .NET
#x-client-Ver: 2.11.0.0
#x-client-CPU: x64
#x-client-OS: Microsoft Windows NT 6.2.9200.0
#x-client-last-request: b892f049-7d4a-4447-91bc-d99ad72c0023
#x-client-last-response-time: 503
#x-client-last-endpoint: instance
#Host: login.microsoftonline.com
#Content-Length: 180
#Expect: 100-continue

#resource=https%3A%2F%2Fvault.azure.net&client_id=0c46e28c-e8cb-490d-bd4f-21626b6601f6&AADClientSecret=q01ejLCpGd%2BObJDA6meuZD%2BCiU72uxU7U4LcaRSd60s%3D&grant_type=client_credentials
#HTTP/1.1 200 OK
#Cache-Control: no-cache, no-store
#Pragma: no-cache
#Content-Type: application/json; charset=utf-8
#Expires: -1
#Server: Microsoft-IIS/8.5
#x-ms-request-id: 8177ca00-8d3a-4e82-a3fa-520047b5cbc6
#client-request-id: b892f049-7d4a-4447-91bc-d99ad72c0023
#x-ms-gateway-service-instanceid: ESTSFE_IN_53
#X-Content-Type-Options: nosniff
#Strict-Transport-Security: max-age=31536000; includeSubDomains
#P3P: CP="DSP CUR OTPi IND OTRi ONL FIN"
#Set-Cookie: flight-uxoptin=true; path=/; secure; HttpOnly
#Set-Cookie: x-ms-gateway-slice=productionb; path=/; secure; HttpOnly
#Set-Cookie: stsservicecookie=ests; path=/; secure; HttpOnly
#X-Powered-By: ASP.NET
#Date: Fri, 07 Aug 2015 03:26:36 GMT
#Content-Length: 1204

#{"expires_in":"3599","token_type":"Bearer","expires_on":"1438921595","not_before":"1438917695","resource":"https://vault.azure.net","access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL3ZhdWx0LmF6dXJlLm5ldCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpYXQiOjE0Mzg5MTc2OTUsIm5iZiI6MTQzODkxNzY5NSwiZXhwIjoxNDM4OTIxNTk1LCJ2ZXIiOiIxLjAiLCJ0aWQiOiI3MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDciLCJvaWQiOiJjYjNjNjllMi0xMmM2LTRjZTctYTk3Yy0zZDc2ZWRhMmZiOTgiLCJzdWIiOiJjYjNjNjllMi0xMmM2LTRjZTctYTk3Yy0zZDc2ZWRhMmZiOTgiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiYXBwaWQiOiIwYzQ2ZTI4Yy1lOGNiLTQ5MGQtYmQ0Zi0yMTYyNmI2NjAxZjYiLCJhcHBpZGFjciI6IjEifQ.VDK0o-PhI_sPlhQLyA4X-rAbx6Kcl2S6ioV5MTh9-kzMJvftjXYIXB2Dc88rbCHO8D7v_dToH8_Ub4WV7-5uLYbUuN78L_7KtKU5k-YPZy9UDeH6_cTXlF9qj1JIzss2y3xzZII10YcRxO0KG4xt0jJ1uOae9RSDgUWACZshC1pgMUXBVfrrlM-zbjr8Ttg2-BVxNLnIlBhGs7s7qVpvHQ2Ahig5j1SFMoOw0vQcsLXW_0k3sIugoRNilOys2wwlS6EQ9TbH3ZlKJl_q8FJBRvN28LgzyqBTJ-_jScUUHTEbMJQZALtguZntIu90ffkHcgcRkliRTycjdbBtIgAYlA"}

    util.create_kek_secret("VGhpcyBpcyB0aGUgcGxhaW4gdGV4dCBtZXNzYWdlLg" \
        ,"https://andliukeyvault.vault.azure.net/secrets/"\
        ,"https://andliukeyvault.vault.azure.net/keys/mykey","0c46e28c-e8cb-490d-bd4f-21626b6601f6","RSA1_5","q01ejLCpGd+ObJDA6meuZD+CiU72uxU7U4LcaRSd60s=")
    pass

if __name__ == '__main__' :
    main()
