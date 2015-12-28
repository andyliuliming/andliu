#include "GoalState.h"
#include "HttpRoutine.h"
#include <iostream>

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
    chunk = curl_slist_append(chunk, "x-ms-agent-name: WALinuxAgent");

    /* Modify a header curl otherwise adds differently */
    chunk = curl_slist_append(chunk, "x-ms-version: 2012-11-30");

    /* set our custom set of headers */

    string result = HttpRoutine::Get("http://168.63.129.16/machine/?comp=goalstate", chunk);

    curl_slist_free_all(chunk);

    xmlDocPtr doc = xmlParseMemory(result.c_str(), result.size());
    xmlNodePtr root = xmlDocGetRootElement(doc);
    cout << "root name is " << root->name << endl;

    const xmlChar* incarnationXpathExpr = xmlCharStrdup( "/GoalState/Incarnation[1]/text()");
    this->incarnation = XmlRoutine::getNodeText(doc, incarnationXpathExpr);
    delete incarnationXpathExpr;

    const xmlChar* containerIdXpathExpr = xmlCharStrdup( "/GoalState/Container/ContainerId/text()");
    this->containerId = XmlRoutine::getNodeText(doc, containerIdXpathExpr);
    delete containerIdXpathExpr;

    const xmlChar* hostingEnvironmentConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/HostingEnvironmentConfig/text()");
    this->hostingEnvironmentConfig = XmlRoutine::getNodeText(doc, hostingEnvironmentConfigXpathExpr);
    delete hostingEnvironmentConfigXpathExpr;


    const xmlChar* sharedConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/SharedConfig/text()");
    this->sharedConfig = XmlRoutine::getNodeText(doc, sharedConfigXpathExpr);
    delete sharedConfigXpathExpr;

#endif
}


GoalState::~GoalState()
{
    if (this->containerId != NULL) {
        delete this->containerId;
        this->containerId = NULL;
    }
    if (this->incarnation != NULL) {
        delete this->incarnation;
        this->incarnation = NULL;
    }
    if (this->roleInstanceId != NULL) {
        delete this->roleInstanceId;
        this->roleInstanceId = NULL;
    }
    if (this->hostingEnvironmentConfig != NULL) {
        delete this->hostingEnvironmentConfig;
        this->hostingEnvironmentConfig = NULL;
    }
}
