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
    return false;
}

void Provisioner::Prosess()
{
#ifdef _WIN32
#else
    AgentConfig::getInstance().LoadConfig();
    // 1. try to handle the ssh host key related
    string *type = AgentConfig::getInstance().getConfig("Provisioning_SshHostKeyPairType");
    if (type == NULL) {
        type = new string("rsa");
    }
    string *regenerateKeys = AgentConfig::getInstance().getConfig("Provisioning_RegenerateSshHostKeyPair");
    if (regenerateKeys == NULL || regenerateKeys->find("y") == 0) {
        CommandExecuter::RunGetOutput("rm -f /etc/ssh/ssh_host_*key*");
        CommandExecuter::RunGetOutput(("ssh-keygen -N '' -t " + *type + " -f /etc/ssh/ssh_host_" + *type + "_key").c_str());
    }
    // 2. do the ovf-env
    string *romDevicePath = DeviceRoutine::findRomDevice();
    FileOperator::make_dir(SECURE_MOUNT_POINT);
    string command("mount " + *romDevicePath + " " + SECURE_MOUNT_POINT);
    CommandExecuter::RunGetOutput(command.c_str());
    string ovfEnvFullPath = string(OVF_ENV_FILE_FULL_PATH);
    string *ovfEnvFileFullPath = new string(OVF_ENV_FILE_FULL_PATH);
    string * fileContent = FileOperator::get_content(ovfEnvFileFullPath);
    
    OvfEnv *ovfEnv = new OvfEnv();
    ovfEnv->Parse(fileContent);
    ovfEnv->Process();
        
    string umount2 = string("umount ") + SECURE_MOUNT_POINT;
    CommandExecuter::RunGetOutput(umount2.c_str());


    // 3. 
#endif
}


Provisioner::~Provisioner()
{
}
