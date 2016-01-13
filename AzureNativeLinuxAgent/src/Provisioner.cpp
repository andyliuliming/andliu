#include "AgentConfig.h"
#include "CommandExecuter.h"
#include "DeviceRoutine.h"
#include "FileOperator.h"
#include "Logger.h"
#include "Macros.h"
#include "OvfEnv.h"
#include "Provisioner.h"
#include "XmlRoutine.h"

Provisioner::Provisioner()
{
}

bool Provisioner::isProvisioned()
{
    return FileOperator::file_exists(PROVISIONED_FILE_PATH);
}

int Provisioner::Prosess()
{
    //1. provision re-generate key
    AgentConfig::getInstance().LoadConfig();

    string type;
    int getKeyPairTypeResult = AgentConfig::getInstance().getConfig("Provisioning_SshHostKeyPairType", type);
    if (getKeyPairTypeResult != 0)
    {
        type = string("rsa");
    }
    string regenerateKeys;
    int getRegenerateKeysResult = AgentConfig::getInstance().getConfig("Provisioning_RegenerateSshHostKeyPair", regenerateKeys);
    if (getRegenerateKeysResult != 0 || regenerateKeys.find("y") == 0)
    {
        CommandResult removeCommandResult;
        CommandExecuter::RunGetOutput("rm -f /etc/ssh/ssh_host_*key*",removeCommandResult);
        CommandResult generateCommandResult;
        //TODO deallocate the c_str() here.
        CommandExecuter::RunGetOutput(("ssh-keygen -N '' -t " + type + " -f /etc/ssh/ssh_host_" + type + "_key").c_str(), generateCommandResult);
    }
    // 2. do the ovf-env
    string *romDevicePath = DeviceRoutine::findRomDevice();
    FileOperator::make_dir(SECURE_MOUNT_POINT);
    string mountCommand("mount " + *romDevicePath + " " + SECURE_MOUNT_POINT);
    CommandResult mountResult;
    CommandExecuter::RunGetOutput(mountCommand, mountResult);
    string ovfEnvFullPath = string(OVF_ENV_FILE_FULL_PATH);
    string ovfFileContent;
    int getOvfFileContentResult = FileOperator::get_content(OVF_ENV_FILE_FULL_PATH, ovfFileContent);
    string umountCommand = string("umount ") + SECURE_MOUNT_POINT;
    CommandResult umountResult;
    CommandExecuter::RunGetOutput(umountCommand, umountResult);
    if (getOvfFileContentResult == 0)
    {
        OvfEnv *ovfEnv = new OvfEnv();
        ovfEnv->Parse(ovfFileContent);
        ovfEnv->Process();
    }
    else
    {
        Logger::getInstance().Error("get OvfFile Content failed.");
        //TODO error handling.
    }
    // 2. This is done here because regenerated SSH host key pairs may be potentially overwritten when processing the ovfxml

    /* fingerprint = RunGetOutput("ssh-keygen -lf /etc/ssh/ssh_host_" + type + "_key.pub")[1].rstrip().split()[1].replace(':', '')
    self.ReportRoleProperties(fingerprint)*/
    return 0;
}

void Provisioner::markProvisioned()
{
    FileOperator::save_file("", 0, PROVISIONED_FILE_PATH);
}


Provisioner::~Provisioner()
{
}
