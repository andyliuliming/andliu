#include "DeviceRoutine.h"
#include "FileOperator.h"
#include "Macros.h"
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
    string *romDevicePath = DeviceRoutine::findRomDevice();
    FileOperator::make_dir(SECURE_MOUNT_POINT);
    string command("mount " + *romDevicePath + " " + SECURE_MOUNT_POINT);
    CommandExecuter::RunGetOutput(command.c_str());
    string ovfEnvFullPath = string(OVF_ENV_FILE_FULL_PATH);
    string *ovfEnvFileFullPath = new string(OVF_ENV_FILE_FULL_PATH);
    string * fileContent = FileOperator::get_content(ovfEnvFileFullPath);
    xmlDocPtr doc = xmlParseMemory(fileContent->c_str(), fileContent->size());
    xmlNodePtr root = xmlDocGetRootElement(doc);
    cout << "ovf_enf.xml root name is " << root->name << endl;

    

    xmlFreeDoc(doc);
    string umount2 = string("umount ") + SECURE_MOUNT_POINT;
    CommandExecuter::RunGetOutput(umount2.c_str());
#endif
}


Provisioner::~Provisioner()
{
}
