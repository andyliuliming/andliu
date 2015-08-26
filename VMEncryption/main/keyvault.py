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
import uuid
import base64

class KeyVaultUtil(object):
    """description of class"""
    def __init__(self,logger):
        self.api_version = "2015-06-01"
        self.logger = logger

    def get_token(self,AADClientID,AADClientSecret):
        #https://andliukeyvault.vault.azure.net/keys/mykey/create?api-version=2015-06-01
        pass

    def urljoin(self,*args):
        """
        Joins given arguments into a url. Trailing but not leading slashes are
        stripped for each argument.
        """
        return "/".join(map(lambda x: str(x).rstrip('/'), args))

    def create_kek_secret(self, Passphrase, KeyVaultURL, KeyEncryptionKeyURL, AADClientID, KeyEncryptionAlgorithm, AADClientSecret,DiskEncryptionKeyFileName):
        """
        secret_keyvault_uri should be https://andliukeyvault.vault.azure.net/secrets/security1
        KeyEncryptionKeyURL should be https://andliukeyvault.vault.azure.net/keys/mykey/encrypt?api-version=2015-06-01
        """
        """
        api for encrypt use key is https://msdn.microsoft.com/en-us/library/azure/dn878060.aspx
        """
        #self.logger.log("KeyEncryptionKeyURL==" +
        #str(KeyEncryptionKeyURL))
        sasuri_obj = urlparse.urlparse(KeyEncryptionKeyURL)
        connection = httplib.HTTPSConnection(sasuri_obj.hostname)
        request_content = '{"alg":"' + KeyEncryptionAlgorithm + '","value":"' + Passphrase + '"}'
        headers = {}
        connection.request('POST', sasuri_obj.path + '?api-version=' + self.api_version , request_content, headers = headers)
        result = connection.getresponse()
        self.logger.log(str(result.status) + " " + str(result.getheaders()))
        connection.close()

        # get the WWW-Authenticate headers
        """
        get the access token 
        """
        self.logger.log("getting the access token.")
        bearerHeader = result.getheader("www-authenticate")
        authorize_uri = "https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47"
        keyvault_resource_name = "https://vault.azure.net"
        # https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token
        # get the access token
        sasuri_obj = urlparse.urlparse(authorize_uri + "/oauth2/token")
        connection = httplib.HTTPSConnection(sasuri_obj.hostname)
        request_content = "resource=" + urllib.quote(keyvault_resource_name) + "&client_id=" + AADClientID + "&client_secret=" + urllib.quote(AADClientSecret) + "&grant_type=client_credentials"
        headers = {}
        connection.request('POST', sasuri_obj.path  , (request_content), headers = headers)
        result = connection.getresponse()
        self.logger.log(str(result.status) + " " + str(result.getheaders()))
        result_content = result.read()
        connection.close()
        result_json = json.loads(result_content)
        access_token = result_json["access_token"]
        #WWW-Authenticate: Bearer
        #authorization="https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47",
        #resource="https://vault.azure.net"


        """
        get the key information, to get the key id, so we can use that key to do encryption
        https://mykeyvault.vault.azure.net/keys/{key-name}?api-version={api-version}
        https://msdn.microsoft.com/en-us/library/azure/dn878080.aspx
        """
        self.logger.log("getting the info of the key.")
        sasuri_obj = urlparse.urlparse(KeyEncryptionKeyURL)
        connection = httplib.HTTPSConnection(sasuri_obj.hostname)
        headers = {}
        headers["Authorization"] = "Bearer " + access_token
        #Authorization: Bearer
        connection.request('GET', sasuri_obj.path + '?api-version=' + self.api_version, headers = headers)
        result = connection.getresponse()
        self.logger.log(str(result.status) + " " + str(result.getheaders()))

        result_content = result.read()
        connection.close()
        result_json = json.loads(result_content)
        key_id = result_json["key"]["kid"]


        """
        encrypt our passphrase using the encryption key
        api for encrypt use key is https://msdn.microsoft.com/en-us/library/azure/dn878060.aspx
        """
        self.logger.log("encrypting the secret using key." + str(key_id) + " " + str(Passphrase) + " " + str(access_token))
        sasuri_obj = urlparse.urlparse(key_id)
        connection = httplib.HTTPSConnection(sasuri_obj.hostname)
        request_content = '{"alg":"' + KeyEncryptionAlgorithm + '","value":"' + Passphrase + '"}'
        headers = {}
        headers["Content-Type"] = "application/json"
        headers["Authorization"] = "Bearer " + str(access_token)
        #Authorization: Bearer
        relative_path = sasuri_obj.path + "/encrypt" + '?api-version=' + self.api_version
        self.logger.log("crypt path to post is " + str(relative_path))
        connection.request('POST', relative_path , request_content, headers = headers)
        result = connection.getresponse()
        self.logger.log(str(result.status) + " " + str(result.getheaders()))

        result_content = result.read()
        connection.close()
        result_json = json.loads(result_content)
        
        """
        create secret api https://msdn.microsoft.com/en-us/library/azure/dn903618.aspx
        https://mykeyvault.vault.azure.net/secrets/{secret-name}?api-version={api-version}
        """
        self.logger.log("creating the secret.")
        secret_name = str(uuid.uuid4())

        secret_keyvault_uri = self.urljoin(KeyVaultURL,"secrets",secret_name)
        self.logger.log("secret_keyvault_uri is :" + str(secret_keyvault_uri) + " and keyvault_uri is :" + str(KeyVaultURL))
        sasuri_obj = urlparse.urlparse(secret_keyvault_uri)
        connection = httplib.HTTPSConnection(sasuri_obj.hostname)
        secret_value = result_json[u'value']
        request_content = '{{"value":"{0}","attributes":{{"enabled":"true"}},"tags":{{"DiskEncryptionKeyEncryptionAlgorithm":"{1}","DiskEncryptionKeyFileName":"{2}"}}}}'\
            .format(str(secret_value),KeyEncryptionAlgorithm,DiskEncryptionKeyFileName)

        headers = {}
        headers["Content-Type"] = "application/json"
        headers["Authorization"] = "Bearer " + access_token
        connection.request('PUT', sasuri_obj.path + '?api-version=' + self.api_version , request_content, headers = headers)
        result = connection.getresponse()
        self.logger.log(str(result.status) + " " + str(result.getheaders()))

        result_content = result.read()
        connection.close()
        self.logger.log("the result for creating secret is " + str(result_content))
        result_json = json.loads(result_content)