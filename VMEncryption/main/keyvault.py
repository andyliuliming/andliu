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
import httplib
import urlparse
import urllib
import json
class KeyVaultUtil(object):
    """description of class"""
    def __init__(self,logger):
        self.api_version = "2015-06-01"
        self.logger = logger
        pass

    def get_token(self,client_id,client_secret):
        #https://andliukeyvault.vault.azure.net/keys/mykey/create?api-version=2015-06-01
        pass

    """
    secret_keyvault_uri should be https://andliukeyvault.vault.azure.net/secretes/security1
    
    encryption_keyvault_uri should be https://andliukeyvault.vault.azure.net/keys/mykey/encrypt?api-version=2015-06-01
    """
    def create_key(self, passphrase, secret_keyvault_uri, encryption_keyvault_uri, client_id, alg_name, client_secret):

        """
        api for encrypt use key is https://msdn.microsoft.com/en-us/library/azure/dn878060.aspx
        """
        sasuri_obj = urlparse.urlparse(secret_keyvault_uri)
        connection = httplib.HTTPSConnection(sasuri_obj.hostname)
        request_content = '{"alg":' + alg_name + ',"value":' + client_secret + '}'
        headers = {}
        connection.request('POST', sasuri_obj.path + '?' + sasuri_obj.query , request_content, headers = headers)
        result = connection.getresponse()

        
        # get the WWW-Authenticate headers
        bearerHeader = result.getheader("www-authenticate")

        authorize_uri = "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47"
        keyvault_resource_name = "https://vault.azure.net"
        # https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token
        # get the access token
        sasuri_obj = urlparse.urlparse(authorize_uri+"/oauth2/token")
        connection = httplib.HTTPSConnection(sasuri_obj.hostname)
        request_content = "resource="+urllib.quote(keyvault_resource_name) + "&client_id=" + client_id + "&client_secret=" + urllib.quote(client_secret) + "&grant_type=client_credentials"
        headers = {}
        connection.request('POST', sasuri_obj.path  , (request_content), headers = headers)
        result = connection.getresponse()

        result_content = result.read()
        result_json = json.loads(result_content)
        access_token = result_json["access_token"]
        #WWW-Authenticate: Bearer authorization="https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47", resource="https://vault.azure.net"



        """
        get the key information, to get the key id, so we can use that key to do encryption
        https://mykeyvault.vault.azure.net/keys/{key-name}?api-version={api-version}
        https://msdn.microsoft.com/en-us/library/azure/dn878080.aspx
        """
        sasuri_obj = urlparse.urlparse(encryption_keyvault_uri)
        connection = httplib.HTTPSConnection(sasuri_obj.hostname)
        headers = {}
        headers["Authorization"] = "Bearer "+access_token
        #Authorization: Bearer 
        connection.request('GET', sasuri_obj.path + '?' + sasuri_obj.query, headers = headers)
        result = connection.getresponse()
        result_content = result.read()
        result_json = json.loads(result_content)
        key_id=result_json["key"]["kid"]


        """
        encrypt our passphrase using the encryption key
        api for encrypt use key is https://msdn.microsoft.com/en-us/library/azure/dn878060.aspx
        """
        sasuri_obj = urlparse.urlparse(key_id)
        connection = httplib.HTTPSConnection(sasuri_obj.hostname)
        request_content = '{"alg":"' + alg_name + '","value":"' + passphrase + '"}'
        headers = {}
        headers["Authorization"] = "Bearer "+access_token
        #Authorization: Bearer 
        connection.request('POST', key_id + "/encrypt" + '?' + sasuri_obj.query , request_content, headers = headers)
        result = connection.getresponse()

        """
        create secret api https://msdn.microsoft.com/en-us/library/azure/dn903618.aspx
        https://mykeyvault.vault.azure.net/secrets/{secret-name}?api-version={api-version}
        """
        sasuri_obj = urlparse.urlparse(secret_keyvault_uri)
        connection = httplib.HTTPSConnection(sasuri_obj.hostname)
        request_content = '{"value":' + alg_name + ',"value":' + client_secret + ',"attributes":{"enabled":"true"}' + '}'
        headers = {}
        #headers["x-ms-date"] = timestamp
        #headers["x-ms-version"] = self.__StorageVersion
        connection.request('PUT', sasuri_obj.path + '?' + sasuri_obj.query , request_content, headers = headers)
        result = connection.getresponse()