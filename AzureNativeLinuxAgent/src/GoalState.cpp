#include "AzureEnvironment.h"
#include "FileOperator.h"
#include "GoalState.h"
#include "HostingEnvironmentConfig.h"
#include "HttpRoutine.h"
#include "Logger.h"
#include "StringUtil.h"
#include "XmlRoutine.h"
#include <map>
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
    //TODO: wrapper up a XML handling in our code
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
    this->certificatesUrl = XmlRoutine::getNodeText(doc, certificatesXpathExpr, NULL);
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

    // get the certificates from the server.
    if (this->certificatesUrl != NULL)
    {
        this->certificates = new Certificates();
        string * certificationFileContent = FileOperator::get_content(TRANSPORT_CERT_PUB);
        vector<string> splitResult;
        string spliter = "\n";
        StringUtil::string_split(*certificationFileContent, spliter, &splitResult);
        string pureCertText;
        for (int i = 0; i < splitResult.size(); i++)
        {
            if (splitResult[i].find("CERTIFICATE")== string::npos)
            {
                pureCertText += splitResult[i];
            }
        }
        //TODO get rid of the cert headers.
        map<string, string> headers;
        headers["x-ms-agent-name"]= WAAGENT_NAME;
        headers["x-ms-version"]= WAAGENT_VERSION;
        headers["x-ms-cipher-name"] = TRANSPORT_CERT_CIPHER_NAME;
        headers["x-ms-guest-agent-public-x509-cert"] = pureCertText;
        string * certificationsText = HttpRoutine::Get(this->certificatesUrl->c_str(),&headers);
        
        // get certificates from the remote using the public cert.
        this->certificates->Parse(certificationsText);
    }
    else
    {
        Logger::getInstance().Warning("certificates url is null.");
    }
#endif
}

void GoalState::Process()
{
    this->hostingEnvironmentConfig->Process();
    this->sharedConfig->Process();
    this->extensionsConfig->Process();
    this->certificates->Process();
}


GoalState::~GoalState()
{
}
