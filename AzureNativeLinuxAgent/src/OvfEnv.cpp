
#include "OvfEnv.h"
#include "FileOperator.h"
#include "UserManager.h"
#include "XmlRoutine.h"
using namespace std;

OvfEnv::OvfEnv()
{
    configFilePath = new string("/var/lib/waagent/Native_ovf-env.xml");
}

void OvfEnv::Parse(string * sharedConfigText)
{
    //TODO: remove the password before saving to disk
    FileOperator::save_file(sharedConfigText, configFilePath);
#ifdef _WIN32
#else
    xmlDocPtr doc = xmlParseMemory(sharedConfigText->c_str(), sharedConfigText->size());
    xmlNodePtr root = xmlDocGetRootElement(doc);
    

    map<string, string> namespaces;
    namespaces["oe"] = "http://schemas.dmtf.org/ovf/environment/1";
    namespaces["wa"] = "http://schemas.microsoft.com/windowsazure";

    const xmlChar* userNameXpathExpr = xmlCharStrdup("/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:UserName/text()");
    this->userName = *(XmlRoutine::getNodeText(doc, userNameXpathExpr, &namespaces));

    delete userNameXpathExpr;

    const xmlChar* passWordXpathExpr = xmlCharStrdup("/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:UserPassword/text()");
    this->passWord = *(XmlRoutine::getNodeText(doc, passWordXpathExpr, &namespaces));
    delete passWordXpathExpr;


    const xmlChar* disableSshPasswordAuthenticationXpathExpr = xmlCharStrdup("/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:DisableSshPasswordAuthentication/text()");
    this->disableSshPasswordAuthentication = *(XmlRoutine::getNodeText(doc, disableSshPasswordAuthenticationXpathExpr, &namespaces));
    delete disableSshPasswordAuthenticationXpathExpr;

    xmlFreeDoc(doc);
#endif
}

void OvfEnv::Process()
{
    UserManager::CreateUser(this->userName.c_str(),this->passWord.c_str());
}

OvfEnv::~OvfEnv()
{
    if (configFilePath != NULL) {
        delete configFilePath;
        configFilePath = NULL;
    }
}
