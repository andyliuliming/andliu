class EncryptionParameter(object):
     def __init__(self):
         self.devpath = None
         self.mountname = None
         self.mountpoint = None
         self.filesystem = None
         self.dev_mapper_name = None
         self.force = False
         self.keydisk_mount_point = None
         self.dev_mapper_path = None
         self.encrypted_disk_mount_point = None
         self.passphrase = None
         pass

class ExistEncryptionParameter(object):
    def __init__(self):
         self.devpath = None
         self.dev_mapper_path = None
         self.dev_mapper_name = None
         self.exist_devpath = None
         self.force = False
         self.passphrase = None
         pass