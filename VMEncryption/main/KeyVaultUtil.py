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
import traceback
from common import *

class KeyVaultUtil(object):
    def __init__(self,logger):
        self.api_version = "2015-06-01"
        self.logger = logger

    def urljoin(self,*args):
        """
        Joins given arguments into a url. Trailing but not leading slashes are
        stripped for each argument.
        """
        return "/".join(map(lambda x: str(x).rstrip('/'), args))

    """
    The Passphrase is a plain encoded string. before the encryption it would be base64encoding.
    return the secret uri if creation successfully.
    """
    def create_kek_secret(self, Passphrase, KeyVaultURL, KeyEncryptionKeyURL, AADClientID, KeyEncryptionAlgorithm, AADClientSecret, DiskEncryptionKeyFileName):
        try:
            self.logger.log("start creating kek secret")
            passphrase_encoded = base64.standard_b64encode(Passphrase)
            sasuri_obj = urlparse.urlparse(self.urljoin(KeyVaultURL,"keys"))
            connection = httplib.HTTPSConnection(sasuri_obj.hostname)
            headers = {}
            connection.request('GET', sasuri_obj.path + '?api-version=' + self.api_version , headers = headers)
            result = connection.getresponse()
            self.logger.log(str(result.status) + " " + str(result.getheaders()))
            connection.close()

            """
            get the access token 
            """
            self.logger.log("getting the access token.")
            bearerHeader = result.getheader("www-authenticate")

            authorize_uri = self.get_authorize_uri(bearerHeader)
            if(authorize_uri == None):
                return None
            access_token = self.get_access_token(authorize_uri,AADClientID,AADClientSecret)
            if(access_token == None):
                return None

            """
            we should skip encrypting the passphrase if the KeyVaultURL and KeyEncryptionKeyURL is empty
            """
            if(KeyEncryptionKeyURL == None):
                secret_value = passphrase_encoded
            else:
                secret_value = self.encrypt_passphrase(access_token, passphrase_encoded,KeyVaultURL, KeyEncryptionKeyURL, AADClientID, KeyEncryptionAlgorithm, AADClientSecret)
            if(secret_value == None):
                return None

            secret_id = self.create_secret(access_token,KeyVaultURL,secret_value,KeyEncryptionAlgorithm,DiskEncryptionKeyFileName)

            return secret_id
        except Exception as e:
            self.logger.log("Failed to create_kek_secret with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
            return None

    def get_access_token(self,AuthorizeUri,AADClientID,AADClientSecret):
        keyvault_resource_name = "https://vault.azure.net"
        sasuri_obj = urlparse.urlparse(AuthorizeUri + "/oauth2/token")
        connection = httplib.HTTPSConnection(sasuri_obj.hostname)
        request_content = "resource=" + urllib.quote(keyvault_resource_name) + "&client_id=" + AADClientID + "&client_secret=" + urllib.quote(AADClientSecret) + "&grant_type=client_credentials"
        headers = {}
        connection.request('POST', sasuri_obj.path , (request_content), headers = headers)
        result = connection.getresponse()
        self.logger.log(str(result.status) + " " + str(result.getheaders()))

        if(result.status != httplib.OK and result.status != httplib.ACCEPTED):
            return CommonVariables.create_encryption_secret_failed
        result_content = result.read()
        connection.close()

        result_json = json.loads(result_content)
        access_token = result_json["access_token"]
        return access_token

    """
    return the encrypted secret uri if success. else return None
    """
    def encrypt_passphrase(self,AccessToken,Passphrase, KeyVaultURL, KeyEncryptionKeyURL, AADClientID, KeyEncryptionAlgorithm, AADClientSecret):
        try:
            """
            api for encrypt use key is https://msdn.microsoft.com/en-us/library/azure/dn878060.aspx
            get the key information, to get the key id, so we can use that key to do encryption
            https://mykeyvault.vault.azure.net/keys/{key-name}?api-version={api-version}
            https://msdn.microsoft.com/en-us/library/azure/dn878080.aspx
            """
            self.logger.log("getting the info of the key.")
            sasuri_obj = urlparse.urlparse(KeyEncryptionKeyURL)
            connection = httplib.HTTPSConnection(sasuri_obj.hostname)
            headers = {}
            headers["Authorization"] = "Bearer " + AccessToken
            #Authorization: Bearer
            connection.request('GET', sasuri_obj.path + '?api-version=' + self.api_version, headers = headers)
            result = connection.getresponse()
            self.logger.log(str(result.status) + " " + str(result.getheaders()))
            if(result.status != httplib.OK and result.status != httplib.ACCEPTED):
                return CommonVariables.create_encryption_secret_failed
            result_content = result.read()
            connection.close()
            result_json = json.loads(result_content)
            key_id = result_json["key"]["kid"]

            """
            encrypt our passphrase using the encryption key
            api for encrypt use key is https://msdn.microsoft.com/en-us/library/azure/dn878060.aspx
            """
            self.logger.log("encrypting the secret using key." + str(key_id) + " " + str(Passphrase) + " " + str(AccessToken))
            sasuri_obj = urlparse.urlparse(key_id)
            connection = httplib.HTTPSConnection(sasuri_obj.hostname)
            request_content = '{"alg":"' + KeyEncryptionAlgorithm + '","value":"' + Passphrase + '"}'
            headers = {}
            headers["Content-Type"] = "application/json"
            headers["Authorization"] = "Bearer " + str(AccessToken)
            #Authorization: Bearer
            relative_path = sasuri_obj.path + "/encrypt" + '?api-version=' + self.api_version
            self.logger.log("crypt path to post is " + str(relative_path))
            connection.request('POST', relative_path , request_content, headers = headers)
            result = connection.getresponse()
            self.logger.log(str(result.status) + " " + str(result.getheaders()))
            if(result.status != httplib.OK and result.status != httplib.ACCEPTED):
                return CommonVariables.create_encryption_secret_failed
            result_content = result.read()
            connection.close()
            result_json = json.loads(result_content)
            secret_value = result_json[u'value']
            return secret_value
        except Exception as e:
            self.logger.log("Failed to encrypt_passphrase with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
            return None

    def create_secret(self,AccessToken,KeyVaultURL,secret_value,KeyEncryptionAlgorithm,DiskEncryptionKeyFileName):
        """
        create secret api https://msdn.microsoft.com/en-us/library/azure/dn903618.aspx
        https://mykeyvault.vault.azure.net/secrets/{secret-name}?api-version={api-version}
        """
        try:
            secret_name = str(uuid.uuid4())
            secret_keyvault_uri = self.urljoin(KeyVaultURL,"secrets",secret_name)
            self.logger.log("secret_keyvault_uri is :" + str(secret_keyvault_uri) + " and keyvault_uri is :" + str(KeyVaultURL))
            sasuri_obj = urlparse.urlparse(secret_keyvault_uri)
            connection = httplib.HTTPSConnection(sasuri_obj.hostname)
            if(KeyEncryptionAlgorithm == None):
                request_content = '{{"value":"{0}","attributes":{{"enabled":"true"}},"tags":{{"DiskEncryptionKeyFileName":"{1}"}}}}'\
                    .format(str(secret_value),DiskEncryptionKeyFileName)
            else:
                request_content = '{{"value":"{0}","attributes":{{"enabled":"true"}},"tags":{{"DiskEncryptionKeyEncryptionAlgorithm":"{1}","DiskEncryptionKeyFileName":"{2}"}}}}'\
                    .format(str(secret_value),KeyEncryptionAlgorithm,DiskEncryptionKeyFileName)

            headers = {}
            headers["Content-Type"] = "application/json"
            headers["Authorization"] = "Bearer " + AccessToken
            connection.request('PUT', sasuri_obj.path + '?api-version=' + self.api_version , request_content, headers = headers)
            result = connection.getresponse()
            self.logger.log(str(result.status) + " " + str(result.getheaders()))
            result_content = result.read()
            self.logger.log(result_content)
            result_json = json.loads(result_content)
            secret_id = result_json["id"]
            connection.close()
            if(result.status != httplib.OK and result.status != httplib.ACCEPTED):
                return None
            return secret_id
        except Exception as e:
            self.logger.log("Failed to create_secret with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
            return None

    def get_authorize_uri(self,bearerHeader):
        """
        Bearer authorization="https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47", resource="https://vault.azure.net"
        """
        try:
            self.logger.log("trying to get the authorize uri from " + str(bearerHeader))
            bearerString = str(bearerHeader)
            authoirzation_key = 'authorization="'
            authoirzation_index = bearerString.index(authoirzation_key)
            bearerString = bearerString[(authoirzation_index + len(authoirzation_key)):]
            bearerString = bearerString[0:bearerString.index('"')]

            return bearerString
        except Exception as e:
            self.logger.log("Failed to get_authorize_uri with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
            return None
