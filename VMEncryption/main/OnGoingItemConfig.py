import os.path
from Common import CommonVariables
from ConfigParser import ConfigParser
from ConfigUtil import ConfigUtil
from ConfigUtil import ConfigKeyValuePair

class OnGoingItemConfig(object):
    def __init__(self, encryption_environment,logger):
        self.encryption_environment = encryption_environment
        self.dev_uuid_path = None
        self.mapper_name = None
        self.luks_header_file_path = None
        self.phase = None
        self.header_slice_file_path = None
        self.file_system = None
        self.mount_point=None 
        self.ongoing_item_config = ConfigUtil(encryption_environment.azure_crypt_ongoing_item_config_path,'azure_crypt_ongoing_item_config',logger)

    def config_file_exists(self):
        return self.ongoing_item_config.config_file_exists()

    def get_dev_uuid_path(self):
        return self.ongoing_item_config.get_config(CommonVariables.OngoingItemDevUUIDPathKey)

    def get_mapper_name(self):
        return self.ongoing_item_config.get_config(CommonVariables.OngoingItemMapperNameKey)

    def get_header_file_path(self):
        return self.ongoing_item_config.get_config(CommonVariables.OngoingItemHeaderFilePathKey)

    def get_phase(self):
        return self.ongoing_item_config.get_config(CommonVariables.OngoingItemPhaseKey)

    def get_header_slice_file_path(self):
        return self.ongoing_item_config.get_config(CommonVariables.OngoingItemHeaderSliceFilePathKey)

    def get_file_system(self):
        return self.ongoing_item_config.get_config(CommonVariables.OngoingItemFileSystemKey)

    def get_mount_point(self):
        return self.ongoing_item_config.get_config(CommonVariables.OngoingItemMountPointKey)

    def commit(self):
        key_value_pairs = []
        dev_path_pair = ConfigKeyValuePair(CommonVariables.OngoingItemDevUUIDPathKey,self.dev_uuid_path)
        key_value_pairs.append(dev_path_pair)

        mapper_name_pair = ConfigKeyValuePair(CommonVariables.OngoingItemMapperNameKey,self.mapper_name)
        key_value_pairs.append(mapper_name_pair)

        header_file_pair = ConfigKeyValuePair(CommonVariables.OngoingItemHeaderFilePathKey,self.luks_header_file_path)
        key_value_pairs.append(header_file_pair)

        phase_pair = ConfigKeyValuePair(CommonVariables.OngoingItemPhaseKey,self.phase)
        key_value_pairs.append(phase_pair)

        header_slice_file_pair = ConfigKeyValuePair(CommonVariables.OngoingItemHeaderSliceFilePathKey,self.header_slice_file_path)
        key_value_pairs.append(header_slice_file_pair)

        file_system_pair = ConfigKeyValuePair(CommonVariables.OngoingItemFileSystemKey,self.file_system)
        key_value_pairs.append(file_system_pair)

        mount_point_pair = ConfigKeyValuePair(CommonVariables.OngoingItemMountPointKey,self.mount_point)
        key_value_pairs.append(mount_point_pair)

        self.ongoing_item_config.save_configs(key_value_pairs)

    def clear_config(self):
        try:
            if(os.path.exists(self.encryption_environment.azure_crypt_ongoing_item_config_path)):
               os.remove(self.encryption_environment.azure_crypt_ongoing_item_config_path)
            return True
        except OSError as e:
            self.logger.log("Failed to clear_queue with error: %s, stack trace: %s" % (str(e), traceback.format_exc()))
            return False