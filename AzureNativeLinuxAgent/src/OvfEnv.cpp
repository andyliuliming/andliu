#include "OvfEnv.h"
#include "FileOperator.h"
#include "Logger.h"
#include "Macros.h"
#include "StringUtil.h"
#include "UserManager.h"
#include "XmlRoutine.h"
using namespace std;

OvfEnv::OvfEnv()
{
}

int OvfEnv::Parse(string &sharedConfigText)
{
    //TODO: remove the password before saving to disk
    FileOperator::save_file(sharedConfigText, string("/var/lib/waagent/Native_ovf-env.xml"));

    xmlDocPtr doc = xmlParseMemory(sharedConfigText.c_str(), sharedConfigText.size());
    xmlNodePtr root = xmlDocGetRootElement(doc);

    map<string, string> namespaces;
    namespaces["oe"] = "http://schemas.dmtf.org/ovf/environment/1";
    namespaces["wa"] = "http://schemas.microsoft.com/windowsazure";
    string version;

    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:Version/text()", &namespaces, version);
    vector<string> splitResult;
    string spliter = ".";
    StringUtil::string_split(version, spliter, &splitResult);
    bool newer = false;
    int major = atoi(splitResult[0].c_str());
    int minor = atoi(splitResult[1].c_str());
    if (major != this->majorVersion)
    {
        return OVF_VERSION_NOT_MATCH;
    }
    else
    {
        if (minor > this->minorVersion)
        {
            Logger::getInstance().Warning("Newer provisioning configuration detected. Please consider updating waagent.");
        }
    }
    //TODO: find the section with the specified version.(if have multiple ProvisioningSections).
    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:UserName/text()", &namespaces, this->userName);
    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:UserPassword/text()", &namespaces, this->passWord);
    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:DisableSshPasswordAuthentication/text()", &namespaces, this->disableSshPasswordAuthentication);
    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:CustomData/text()", &namespaces, this->customData);

    //TODO: handle the public key too.
    xmlFreeDoc(doc);
    return AGENT_SUCCESS;
}

int OvfEnv::Process()
{
    int createUserResult = UserManager::CreateUser(this->userName,this->passWord);
    return createUserResult;
}

OvfEnv::~OvfEnv()
{
}
