#include "AbstractDistro.h"
#include "FileOperator.h"
#include "Logger.h"
#include "Macros.h"
#include "OvfEnv.h"
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
    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:HostName/text()", &namespaces, this->hostName);
    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:UserName/text()", &namespaces, this->userName);
    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:UserPassword/text()", &namespaces, this->passWord);
    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:DisableSshPasswordAuthentication/text()", &namespaces, this->disableSshPasswordAuthentication);
    XmlRoutine::getNodeText(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:CustomData/text()", &namespaces, this->customData);

    xmlXPathObjectPtr publicKeys = 
        XmlRoutine::getNodes(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:SSH/wa:PublicKeys", &namespaces);
    if (publicKeys != NULL)
    {
        if (publicKeys->nodesetval != NULL)
        {
            for (int j = 0; j < publicKeys->nodesetval->nodeNr; j++)
            {
                xmlNodePtr publicKey = publicKeys->nodesetval->nodeTab[j];
                xmlXPathObjectPtr fingerPrintObject = XmlRoutine::findNodeByRelativeXpath(doc, publicKey, "./Fingerprint/text()");
                xmlXPathObjectPtr pathObject = XmlRoutine::findNodeByRelativeXpath(doc, publicKey, "./Path/text()");
                string fingerPrint = (char *)fingerPrintObject->nodesetval->nodeTab[0]->content;
                string path = (char*)pathObject->nodesetval->nodeTab[0]->content;
                this->SshPublicKeys[fingerPrint] = path;
            }
        }
    }
    xmlXPathFreeObject(publicKeys);

    xmlXPathObjectPtr keyPairs =
        XmlRoutine::getNodes(doc, "/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:SSH/wa:KeyPairs", &namespaces);
    if (keyPairs != NULL)
    {
        if (keyPairs->nodesetval != NULL)
        {
            for (int i = 0; i < keyPairs->nodesetval->nodeNr; i++)
            {
                xmlNodePtr keyPair = publicKeys->nodesetval->nodeTab[i];
                xmlXPathObjectPtr fingerPrintObject = XmlRoutine::findNodeByRelativeXpath(doc, keyPair, "./Fingerprint/text()");
                xmlXPathObjectPtr pathObject = XmlRoutine::findNodeByRelativeXpath(doc, keyPair, "./Path/text()");
                string fingerPrint = (char *)fingerPrintObject->nodesetval->nodeTab[0]->content;
                string path = (char*)pathObject->nodesetval->nodeTab[0]->content;
                this->SshPublicKeys[fingerPrint] = path;
            }
        }
    }
    xmlXPathFreeObject(keyPairs);

    xmlFreeDoc(doc);
    return AGENT_SUCCESS;
}

int OvfEnv::Process()
{
    AbstractDistro::getInstance().setHostName(this->hostName);
    int createUserResult = UserManager::CreateUser(this->userName,this->passWord);
    return createUserResult;
}

OvfEnv::~OvfEnv()
{
}
