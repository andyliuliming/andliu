
#include "AzureEnvironment.h"
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

void GoalState::UpdateGoalState(AzureEnvironment *azureEnvironment)
{

    string goalStateEndpoint = string("http://") + azureEnvironment->wireServerAddress + "/machine/?comp=goalstate";
#ifdef _WIN32
#else
    /* set our custom set of headers */
    string * goalStateText = HttpRoutine::GetWithDefaultHeader(goalStateEndpoint.c_str());
    xmlDocPtr doc = xmlParseMemory(goalStateText->c_str(), goalStateText->size());
    xmlNodePtr root = xmlDocGetRootElement(doc);

    const xmlChar* incarnationXpathExpr = xmlCharStrdup("/GoalState/Incarnation[1]/text()");
    this->incarnation = *(XmlRoutine::getNodeText(doc, incarnationXpathExpr, NULL));
    delete incarnationXpathExpr;

    const xmlChar* containerIdXpathExpr = xmlCharStrdup("/GoalState/Container/ContainerId/text()");
    this->containerId = *(XmlRoutine::getNodeText(doc, containerIdXpathExpr, NULL));
    delete containerIdXpathExpr;

    const xmlChar* roleInstanceIdXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/InstanceId/text()");
    this->roleInstanceId = *(XmlRoutine::getNodeText(doc, roleInstanceIdXpathExpr, NULL));
    delete roleInstanceIdXpathExpr;

    const xmlChar* hostingEnvironmentConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/HostingEnvironmentConfig/text()");
    this->hostingEnvironmentConfigUrl = *(XmlRoutine::getNodeText(doc, hostingEnvironmentConfigXpathExpr, NULL));
    delete hostingEnvironmentConfigXpathExpr;

    const xmlChar* sharedConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/SharedConfig/text()");
    this->sharedConfigUrl = *(XmlRoutine::getNodeText(doc, sharedConfigXpathExpr, NULL));
    delete sharedConfigXpathExpr;

    const xmlChar* extensionsConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ExtensionsConfig/text()");
    this->extensionsConfigUrl = *(XmlRoutine::getNodeText(doc, extensionsConfigXpathExpr, NULL));
    delete extensionsConfigXpathExpr;

    const xmlChar* fullConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/FullConfig/text()");
    this->fullConfigUrl = *(XmlRoutine::getNodeText(doc, fullConfigXpathExpr, NULL));
    delete fullConfigXpathExpr;

    const xmlChar* configNameXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ConfigName/text()");
    this->configName = *(XmlRoutine::getNodeText(doc, configNameXpathExpr, NULL));
    delete configNameXpathExpr;

    const xmlChar* certificatesXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/Certificates/text()");
    string *certificateText = XmlRoutine::getNodeText(doc, certificatesXpathExpr, NULL);
    if (certificateText != NULL) {
        this->certificatesUrl = *(certificateText);
    }
    delete certificatesXpathExpr;

    xmlFreeDoc(doc);

    // saving the goal state file 
    string goalStageFileName = this->goalStageFilePrefix + incarnation + ".xml";
    FileOperator::save_file(goalStateText, &goalStageFileName);
    // construct the instances
    string * hostingEnvironmentConfigText = HttpRoutine::GetWithDefaultHeader(this->hostingEnvironmentConfigUrl.c_str());
    this->hostingEnvironmentConfig = new HostingEnvironmentConfig();
    this->hostingEnvironmentConfig->Parse(hostingEnvironmentConfigText);

    string * sharedConfigText = HttpRoutine::GetWithDefaultHeader(this->sharedConfigUrl.c_str());
    this->sharedConfig = new SharedConfig();
    this->sharedConfig->Parse(sharedConfigText);

    string * extentionsConfigText = HttpRoutine::GetWithDefaultHeader(this->extensionsConfigUrl.c_str());
    this->extensionsConfig = new ExtensionsConfig();
    this->extensionsConfig->Parse(extentionsConfigText);
#endif
}

void GoalState::Process()
{
    this->hostingEnvironmentConfig->Process();
    this->sharedConfig->Process();
    this->extensionsConfig->Process();
}


GoalState::~GoalState()
{
}
