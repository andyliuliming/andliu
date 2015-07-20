import subprocess
from subprocess import *
from encryption import EncryptionError
from common import CommonVariables
class Mounter(object):
    def __init__(self,hutil):
        self.hutil = hutil
        pass

    def mount_all(self):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "mount -a 2> /dev/null"'
        self.hutil.log("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mount_error
            error.info = "commandToExecute is " + commandToExecute
            self.hutil.log('mount returnCode is ' + str(returnCode))
        return error

    """
    replace the mounts entry from the orign disk partition to the target_disk_partition
    """
    def replace_mounts_in_fs_tab(self,origin_disk_partitions,target_disk_partitions):
        #TODO
        pass

    def find_mounts(self,dev_path):
        pass