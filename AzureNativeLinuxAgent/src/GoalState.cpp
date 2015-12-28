#include <iostream>
#include "GoalState.h"
#include "HostingEnvironmentConfig.h"
#include "HttpRoutine.h"
#include "XmlRoutine.h"

#ifdef _WIN32
#else
#include <libxml++/libxml++.h>
using namespace xmlpp;
using namespace Glib;
#endif

using namespace std;

GoalState::GoalState()
{
}

void GoalState::UpdateGoalState()
{
#ifdef _WIN32
#else

    /* set our custom set of headers */

    string * result = HttpRoutine::Get("http://168.63.129.16/machine/?comp=goalstate");

    DomParser parser;
    parser.set_throw_messages(false);
    parser.set_substitute_entities(true);
    ustring uResult = *result;
    parser.parse_memory(uResult);
    Node * root = parser.get_document()->get_root_node();

    NodeSet incarnationSet = root->find("/GoalState/Incarnation[1]/text()");
    if (incarnationSet.size() > 0) {
        const TextNode* incarnationNode = dynamic_cast<const TextNode*>(incarnationSet[0]);
        (this->incarnation) = incarnationNode->get_content();
        cout << "incarnation: " << (this->incarnation) << endl;
    }
    NodeSet containerIdSet = root->find("/GoalState/Container/ContainerId/text()");
    if (containerIdSet.size() > 0) {
        const TextNode* containerIdNode = dynamic_cast<const TextNode*>(containerIdSet[0]);
        (this->containerId) = containerIdNode->get_content();
        cout << "containerId: " << (this->containerId) << endl;
    }
    NodeSet hostingEnvironmentConfigSet = root->find("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/HostingEnvironmentConfig/text()");
    if (hostingEnvironmentConfigSet.size() > 0) {
        const TextNode* hostingEnvironmentConfigNode = dynamic_cast<const TextNode*>(hostingEnvironmentConfigSet[0]);
        (this->hostingEnvironmentConfig) = hostingEnvironmentConfigNode->get_content();
        cout << "hostingEnvironmentConfig: " << (this->hostingEnvironmentConfig) << endl;
    }
    NodeSet sharedConfigSet = root->find("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/SharedConfig/text()");
    if (sharedConfigSet.size() > 0) {
        const TextNode* sharedConfigNode = dynamic_cast<const TextNode*>(sharedConfigSet[0]);
        (this->sharedConfig) = sharedConfigNode->get_content();
        cout << "sharedConfig: " << (this->sharedConfig) << endl;
    }
    NodeSet extensionsConfigSet = root->find("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ExtensionsConfig/text()");
    if (extensionsConfigSet.size() > 0) {
        const TextNode* extensionsConfigNode = dynamic_cast<const TextNode*>(extensionsConfigSet[0]);
        (this->extensionsConfig) = extensionsConfigNode->get_content();
        cout << "extensionsConfig: " << (this->extensionsConfig) << endl;
    }
    NodeSet fullConfigSet = root->find("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/FullConfig/text()");
    if (fullConfigSet.size() > 0) {
        const TextNode* fullConfigNode = dynamic_cast<const TextNode*>(fullConfigSet[0]);
        (this->fullConfig) = fullConfigNode->get_content();
        cout << "fullConfig: " << (this->fullConfig) << endl;
    }
    NodeSet configNameSet = root->find("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ConfigName/text()");
    if (configNameSet.size() > 0) {
        const TextNode* configNameNode = dynamic_cast<const TextNode*>(configNameSet[0]);
        (this->configName) = configNameNode->get_content();
        cout << "configName: " << (this->configName) << endl;
    }
    NodeSet certificatesSet = root->find("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/Certificates/text()");
    if (certificatesSet.size() > 0) {
        const TextNode* certificatesNode = dynamic_cast<const TextNode*>(certificatesSet[0]);
        (this->certificates) = certificatesNode->get_content();
        cout << "certificates: " << (this->certificates) << endl;
    }

    // construct the instances

#endif
}

void GoalState::Process()
{
}


GoalState::~GoalState()
{
}
