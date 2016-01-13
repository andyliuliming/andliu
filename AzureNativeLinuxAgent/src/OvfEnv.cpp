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

    const xmlChar* userNameXpathExpr = xmlCharStrdup("/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:UserName/text()");
    XmlRoutine::getNodeText(doc, userNameXpathExpr, &namespaces, this->userName);

    delete userNameXpathExpr;
    userNameXpathExpr = NULL;

    const xmlChar* passWordXpathExpr = xmlCharStrdup("/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:UserPassword/text()");
    XmlRoutine::getNodeText(doc, passWordXpathExpr, &namespaces, this->passWord);
    delete passWordXpathExpr;
    passWordXpathExpr = NULL;

    const xmlChar* disableSshPasswordAuthenticationXpathExpr = xmlCharStrdup("/oe:Environment/wa:ProvisioningSection/wa:LinuxProvisioningConfigurationSet/wa:DisableSshPasswordAuthentication/text()");
    XmlRoutine::getNodeText(doc, disableSshPasswordAuthenticationXpathExpr, &namespaces, this->disableSshPasswordAuthentication);
    delete disableSshPasswordAuthenticationXpathExpr;

    xmlFreeDoc(doc);
}

void OvfEnv::Process()
{
    UserManager::CreateUser(this->userName.c_str(),this->passWord.c_str());
}

OvfEnv::~OvfEnv()
{
}
