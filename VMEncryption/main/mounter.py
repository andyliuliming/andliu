class Mounter(object):
    def __init__(self,hutil):
        self.hutil = hutil
        pass

    def mount_all(self):
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "mount -a 2> /dev/null"'
        self.hutil.Log("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mount_error
            error.info = "commandToExecute is " + commandToExecute
            self.hutil.Log('mount returnCode is ' + str(returnCode))
        return error

    def mount(self, encryption_parameters):
        
        error = EncryptionError()
        commandToExecute = '/bin/bash -c "mount ' + encryption_parameters.dev_mapper_path + ' ' + (encryption_parameters.encrypted_disk_mount_point) + ' 2> /dev/null"'
        self.hutil.Log("command to execute :" + commandToExecute)
        proc = Popen(commandToExecute, shell=True)
        returnCode = proc.wait()
        if(returnCode != 0):
            error.errorcode = returnCode
            error.code = CommonVariables.mount_error
            error.info = "commandToExecute is " + commandToExecute
            self.hutil.Log('mount returnCode is ' + str(returnCode))
        return error
    """description of class"""


