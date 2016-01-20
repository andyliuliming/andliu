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
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

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
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    // 2. do the ovf-env
    string *romDevicePath = DeviceRoutine::findRomDevice();
    FileOperator::make_dir(SECURE_MOUNT_POINT);
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    string mountCommand("mount -t udf " + *romDevicePath + " " + SECURE_MOUNT_POINT);
    CommandResult mountResult;
    CommandExecuter::RunGetOutput(mountCommand, mountResult);
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    string ovfEnvFullPath = OVF_ENV_FILE_FULL_PATH;
    string ovfFileContent;
    int getOvfFileContentResult = FileOperator::get_content(OVF_ENV_FILE_FULL_PATH, ovfFileContent);
    string umountCommand = string("umount ") + SECURE_MOUNT_POINT;
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    CommandResult umountResult;
    CommandExecuter::RunGetOutput(umountCommand, umountResult);
    if (getOvfFileContentResult == 0)
    {
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

        OvfEnv *ovfEnv = new OvfEnv();
        ovfEnv->Parse(ovfFileContent);
        ovfEnv->Process();
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
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
