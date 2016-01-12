#include "AgentConfig.h"
#include "CommandExecuter.h"
#include "DeviceRoutine.h"
#include "FileOperator.h"
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
        CommandResultPtr removeCommandResult = CommandExecuter::RunGetOutput("rm -f /etc/ssh/ssh_host_*key*");
        CommandResultPtr generateCommandResult = CommandExecuter::RunGetOutput(("ssh-keygen -N '' -t " + type + " -f /etc/ssh/ssh_host_" + type + "_key").c_str());
    }
    // 2. do the ovf-env
    string *romDevicePath = DeviceRoutine::findRomDevice();
    FileOperator::make_dir(SECURE_MOUNT_POINT);
    string command("mount " + *romDevicePath + " " + SECURE_MOUNT_POINT);
    CommandExecuter::RunGetOutput(command.c_str());
    string ovfEnvFullPath = string(OVF_ENV_FILE_FULL_PATH);
    string * fileContent = FileOperator::get_content(OVF_ENV_FILE_FULL_PATH);
    string umount2 = string("umount ") + SECURE_MOUNT_POINT;
    CommandExecuter::RunGetOutput(umount2.c_str());

    OvfEnv *ovfEnv = new OvfEnv();
    ovfEnv->Parse(fileContent);
    ovfEnv->Process();

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
