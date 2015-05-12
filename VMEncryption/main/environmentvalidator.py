#!/usr/bin/env python
#
# VMEncryption extension
#
# Copyright 2014 Microsoft Corporation
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
class EnvironmentValidator(object):
    def __init__(self, hutil):
        self.hutil = hutil
        pass
    def validate_environment(self, encryption_parameters):
        # we should make sure that the disk is an empty disk.
        # call the lsblk -l /dev/sde
        
        self.hutil.log("dev path == " + str(encryption_parameters.devpath))
        p = subprocess.Popen(['lsblk', '-l', encryption_parameters.devpath], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        out_lsblk_output, err = p.communicate()
        out_lsblk_output = str(out_lsblk_output)

        self.hutil.log("out_lsblk_output" + out_lsblk_output)
        lines = out_lsblk_output.splitlines()
        line_number = len(lines)
        self.hutil.log("first line is " + str(lines[0]))
        headers = lines[0].strip().split()
        type_index = -1
        headers_items_length = len(headers)
        self.hutil.log("headers_items_length" + str(headers_items_length))
        for i in range(0,headers_items_length - 1):
            print(headers[i] + "i " + str(i))
            if(headers[i].strip().lower() == "type"):
                type_index = i
                break
        if(type_index == -1):
            return CommonVariables.environment_error

        is_blank_disk = True

        for x in range(1,line_number - 1):
            datas = lines[x].strip().split()
            if(datas[type_index].strip().lower() == 'disk'):
                is_blank_disk = False

        self.hutil.log("out_lsblk_output" + str(out_lsblk_output))
        if(not is_blank_disk):
            if(encryption_parameters.force == "true"):
                return CommonVariables.success
            else:
                return CommonVariables.device_not_blank
        return CommonVariables.success
