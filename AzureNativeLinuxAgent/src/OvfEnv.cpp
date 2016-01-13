#include "OvfEnv.h"
#include "FileOperator.h"
#include "UserManager.h"
#include "XmlRoutine.h"
using namespace std;

OvfEnv::OvfEnv()
{
}

void OvfEnv::Parse(string &sharedConfigText)
{
    //TODO: remove the password before saving to disk
    FileOperator::save_file(sharedConfigText, string("/var/lib/waagent/Native_ovf-env.xml"));

    xmlDocPtr doc = xmlParseMemory(sharedConfigText.c_str(), sharedConfigText.size());
    xmlNodePtr root = xmlDocGetRootElement(doc);

    map<string, string> namespaces;
    namespaces["oe"] = "http://schemas.dmtf.org/ovf/environment/1";
    namespaces["wa"] = "http://schemas.microsoft.com/windowsazure";

    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:UserName/text()", &namespaces, this->userName);
    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:UserPassword/text()", &namespaces, this->passWord);
    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:DisableSshPasswordAuthentication/text()", &namespaces, this->disableSshPasswordAuthentication);

    xmlFreeDoc(doc);
}

void OvfEnv::Process()
{
    UserManager::CreateUser(this->userName,this->passWord);
}

OvfEnv::~OvfEnv()
{
}
