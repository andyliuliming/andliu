#include <iostream>
#include "FileOperator.h"
#include "GoalState.h"
#include "HostingEnvironmentConfig.h"
#include "HttpRoutine.h"
#include "XmlRoutine.h"
using namespace std;

GoalState::GoalState()
{
    goalStageFilePrefix = "/var/lib/waagent/Native_GoalState.";
}

void GoalState::UpdateGoalState()
{
#ifdef _WIN32
#else

    /* set our custom set of headers */

    string * goalStateText = HttpRoutine::Get("http://168.63.129.16/machine/?comp=goalstate");

    xmlDocPtr doc = xmlParseMemory(goalStateText->c_str(), goalStateText->size());
    xmlNodePtr root = xmlDocGetRootElement(doc);
    cout << "root name is " << root->name << endl;

    const xmlChar* incarnationXpathExpr = xmlCharStrdup("/GoalState/Incarnation[1]/text()");
    this->incarnation = *(XmlRoutine::getNodeText(doc, incarnationXpathExpr, NULL));
    cout << "incarnation: " << this->incarnation << endl;
    delete incarnationXpathExpr;

    const xmlChar* containerIdXpathExpr = xmlCharStrdup("/GoalState/Container/ContainerId/text()");
    this->containerId = *(XmlRoutine::getNodeText(doc, containerIdXpathExpr, NULL));
    cout << "containerId: " << this->containerId << endl;
    delete containerIdXpathExpr;

    const xmlChar* roleInstanceIdXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/InstanceId/text()");
    this->roleInstanceId = *(XmlRoutine::getNodeText(doc, roleInstanceIdXpathExpr, NULL));
    cout << "roleInstanceId: " << this->roleInstanceId << endl;
    delete roleInstanceIdXpathExpr;

    const xmlChar* hostingEnvironmentConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/HostingEnvironmentConfig/text()");
    this->hostingEnvironmentConfigUrl = *(XmlRoutine::getNodeText(doc, hostingEnvironmentConfigXpathExpr, NULL));
    cout << "hostingEnvironmentConfigUrl: " << this->hostingEnvironmentConfigUrl << endl;
    delete hostingEnvironmentConfigXpathExpr;

    const xmlChar* sharedConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/SharedConfig/text()");
    this->sharedConfigUrl = *(XmlRoutine::getNodeText(doc, sharedConfigXpathExpr, NULL));
    cout << "sharedConfigUrl: " << this->sharedConfigUrl << endl;
    delete sharedConfigXpathExpr;

    const xmlChar* extensionsConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ExtensionsConfig/text()");
    this->extensionsConfigUrl = *(XmlRoutine::getNodeText(doc, extensionsConfigXpathExpr, NULL));
    cout << "extensionsConfigUrl: " << this->extensionsConfigUrl << endl;
    delete extensionsConfigXpathExpr;

    const xmlChar* fullConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/FullConfig/text()");
    this->fullConfigUrl = *(XmlRoutine::getNodeText(doc, fullConfigXpathExpr, NULL));
    cout << "fullConfigUrl: " << this->fullConfigUrl << endl;
    delete fullConfigXpathExpr;

    const xmlChar* configNameXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ConfigName/text()");
    this->configName = *(XmlRoutine::getNodeText(doc, configNameXpathExpr, NULL));
    cout << "configName: " << this->configName << endl;
    delete configNameXpathExpr;

    const xmlChar* certificatesXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/Certificates/text()");
    string *certificateText = XmlRoutine::getNodeText(doc, certificatesXpathExpr, NULL);
    if (certificateText != NULL) {
        this->certificatesUrl = *(certificateText);
        cout << "certificatesUrl: " << this->certificatesUrl << endl;
    }
    delete certificatesXpathExpr;

    xmlFreeDoc(doc);

    // saving the goal state file 
    string goalStageFileName = this->goalStageFilePrefix + incarnation + ".xml";
    FileOperator::save_file(goalStateText, &goalStageFileName);
    // construct the instances
    string * hostingEnvironmentConfigText = HttpRoutine::Get(this->hostingEnvironmentConfigUrl.c_str());
    this->hostingEnvironmentConfig = new HostingEnvironmentConfig();
    this->hostingEnvironmentConfig->Parse(hostingEnvironmentConfigText);

    string * sharedConfigText = HttpRoutine::Get(this->sharedConfigUrl.c_str());
    this->sharedConfig = new SharedConfig();
    this->sharedConfig->Parse(sharedConfigText);

    string * extentionsConfigText = HttpRoutine::Get(this->extensionsConfigUrl.c_str());
    this->extensionsConfig = new ExtensionsConfig();
    this->extensionsConfig->Parse(extentionsConfigText);
#endif
}

void GoalState::Process()
{
    this->hostingEnvironmentConfig->Process();
    this->sharedConfig->Process();
}


GoalState::~GoalState()
{
}
