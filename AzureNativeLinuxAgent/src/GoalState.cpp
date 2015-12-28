#include <iostream>
#include "GoalState.h"
#include "HostingEnvironmentConfig.h"
#include "HttpRoutine.h"
#include "XmlRoutine.h"
using namespace std;

GoalState::GoalState()
{
}

void GoalState::UpdateGoalState()
{
#ifdef _WIN32
#else
    struct curl_slist *chunk = NULL;

    /* Add a custom header */
    /*"x-ms-agent-name": GuestAgentName,
        "x-ms-version" : ProtocolVersion*/
    chunk = curl_slist_append(chunk, "x-ms-agent-name: AzureNativeLinuxAgent");

    /* Modify a header curl otherwise adds differently */
    chunk = curl_slist_append(chunk, "x-ms-version: 2012-11-30");

    /* set our custom set of headers */

    string result = HttpRoutine::Get("http://168.63.129.16/machine/?comp=goalstate", chunk);

    curl_slist_free_all(chunk);

    xmlDocPtr doc = xmlParseMemory(result.c_str(), result.size());
    xmlNodePtr root = xmlDocGetRootElement(doc);
    cout << "root name is " << root->name << endl;

    const xmlChar* incarnationXpathExpr = xmlCharStrdup("/GoalState/Incarnation[1]/text()");
    this->incarnation = XmlRoutine::getNodeText(doc, incarnationXpathExpr);
    delete incarnationXpathExpr;

    const xmlChar* containerIdXpathExpr = xmlCharStrdup("/GoalState/Container/ContainerId/text()");
    this->containerId = XmlRoutine::getNodeText(doc, containerIdXpathExpr);
    delete containerIdXpathExpr;

    const xmlChar* hostingEnvironmentConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/HostingEnvironmentConfig/text()");
    this->hostingEnvironmentConfig = XmlRoutine::getNodeText(doc, hostingEnvironmentConfigXpathExpr);
    delete hostingEnvironmentConfigXpathExpr;

    const xmlChar* sharedConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/SharedConfig/text()");
    this->sharedConfig = XmlRoutine::getNodeText(doc, sharedConfigXpathExpr);
    delete sharedConfigXpathExpr;

    const xmlChar* extensionsConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ExtensionsConfig/text()");
    this->extensionsConfig = XmlRoutine::getNodeText(doc, extensionsConfigXpathExpr);
    delete extensionsConfigXpathExpr;

    const xmlChar* fullConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/FullConfig/text()");
    this->fullConfig = XmlRoutine::getNodeText(doc, fullConfigXpathExpr);
    delete fullConfigXpathExpr;

    const xmlChar* configNameXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ConfigName/text()");
    this->configName = XmlRoutine::getNodeText(doc, configNameXpathExpr);
    delete configNameXpathExpr;

    const xmlChar* certificatesXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/Certificates/text()");
    this->certificates = XmlRoutine::getNodeText(doc, certificatesXpathExpr);
    delete certificatesXpathExpr;

    // construct the instances
    
#endif
}

void GoalState::Process()
{
}


GoalState::~GoalState()
{
    if (this->certificates != NULL) {
        delete this->certificates;
        this->certificates = NULL;
    }
    if (this->configName != NULL) {
        delete this->configName;
        this->configName = NULL;
    }
    if (this->containerId != NULL) {
        delete this->containerId;
        this->containerId = NULL;
    }
    if (this->extensionsConfig != NULL) {
        delete this->extensionsConfig;
        this->extensionsConfig = NULL;
    }
    if (this->fullConfig != NULL) {
        delete this->fullConfig;
        this->fullConfig = NULL;
    }
    if (this->hostingEnvironmentConfig != NULL) {
        delete this->hostingEnvironmentConfig;
        this->hostingEnvironmentConfig = NULL;
    }
    if (this->incarnation != NULL) {
        delete this->incarnation;
        this->incarnation = NULL;
    }
    if (this->roleInstanceId != NULL) {
        delete this->roleInstanceId;
        this->roleInstanceId = NULL;
    }
    if (this->sharedConfig != NULL) {
        delete this->sharedConfig;
        this->sharedConfig = NULL;
    }
}
