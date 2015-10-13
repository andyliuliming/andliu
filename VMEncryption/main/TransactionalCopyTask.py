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
from Common import EncryptionError
class CopyTask(object):
    def __init__(self):
        pass

class TransactionalCopyTask(object):
    def __init__(self,logger, device_item, destination, patching, encryptionEnvironment):
        self.logger=logger
        self.encryptionEnvironment = encryptionEnvironment
        self.device_item = device_item
        self.destination = destination
        self.patching = patching
        self.slice_size = 512 * 1000# this is in byte
        pass

    def copying_tasks(self):
        pass

    def copy_using_cp(self, from_device, to_device):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "' + 'sg_dd oflag=sparse if=' + from_device + ' of=' + to_device
        self.logger.log("copying from " + str(from_device) + " to " + str(to_device) + " using command " + str(commandToExecute))
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            self.logger.log(str(commandToExecute) + ' is ' + str(returnCode))
        return returnCode

    def copy_using_dd(self, from_device, to_device):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "' + 'dd conv=sparse if=' + from_device + ' of=' + to_device + ' bs=512"'
        self.logger.log("copying from " + str(from_device) + " to " + str(to_device) + " using command " + str(commandToExecute))
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            self.logger.log(str(commandToExecute) + ' is ' + str(returnCode))
        return returnCode

    def begin_copy(self):
        """
        check the device_item size first, cut it 
        """
        if(self.patching.distro_info[0].lower() == "ubuntu" and self.patching.distro_info[1] == "12.04"):
            return self.copy_using_cp(os.path.join("/dev/", self.device_item.name),self.destination)
        else:
            return self.copy_using_dd(os.path.join("/dev/", self.device_item.name),self.destination)


    def current_progress(self):
        """
        If you read man dd, it refers you to info coreutils 'dd invocation' which says, in part,
        Sending an INFO signal to a running dd process makes it print I/O statistics to standard error and then resume copying. In the example below, dd is run in the background to copy 10 million blocks. The kill command makes it output intermediate I/O statistics, and when dd completes normally or is killed by the SIGINT signal, it outputs the final statistics.

            $ dd if=/dev/zero of=/dev/null count=10MB & pid=$!
            $ kill -s INFO $pid; wait $pid
            3385223+0 records in
            3385223+0 records out
            1733234176 bytes (1.7 GB) copied, 6.42173 seconds, 270 MB/s
            10000000+0 records in
            10000000+0 records out
            5120000000 bytes (5.1 GB) copied, 18.913 seconds, 271 MB/s
        On systems lacking the INFO signal dd responds to the USR1 signal instead, unless the POSIXLY_CORRECT environment variable is set.

        """
        pass


