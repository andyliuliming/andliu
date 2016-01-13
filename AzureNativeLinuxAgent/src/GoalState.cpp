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

void GoalState::UpdateGoalState(AzureEnvironment &azureEnvironment)
{
    string goalStateEndpoint = string("http://") + azureEnvironment.wireServerAddress + "/machine/?comp=goalstate";

    //TODO: wrapper up a XML handling in our code
    /* set our custom set of headers */
    HttpResponse goalStateResponse;
    int getGoalStateResult = HttpRoutine::GetWithDefaultHeader(goalStateEndpoint.c_str(), goalStateResponse);
    if (getGoalStateResult == 0)
    {
        xmlDocPtr goalStateDoc = xmlParseMemory(goalStateResponse.body->c_str(), goalStateResponse.body->size());
        xmlNodePtr root = xmlDocGetRootElement(goalStateDoc);

        const xmlChar* incarnationXpathExpr = xmlCharStrdup("/GoalState/Incarnation[1]/text()");
        this->incarnation = *(XmlRoutine::getNodeText(goalStateDoc, incarnationXpathExpr, NULL));
        delete incarnationXpathExpr;

        const xmlChar* containerIdXpathExpr = xmlCharStrdup("/GoalState/Container/ContainerId/text()");
        this->containerId = *(XmlRoutine::getNodeText(goalStateDoc, containerIdXpathExpr, NULL));
        delete containerIdXpathExpr;

        const xmlChar* roleInstanceIdXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/InstanceId/text()");
        this->roleInstanceId = *(XmlRoutine::getNodeText(goalStateDoc, roleInstanceIdXpathExpr, NULL));
        delete roleInstanceIdXpathExpr;

        const xmlChar* hostingEnvironmentConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/HostingEnvironmentConfig/text()");
        this->hostingEnvironmentConfigUrl = *(XmlRoutine::getNodeText(goalStateDoc, hostingEnvironmentConfigXpathExpr, NULL));
        delete hostingEnvironmentConfigXpathExpr;

        const xmlChar* sharedConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/SharedConfig/text()");
        this->sharedConfigUrl = *(XmlRoutine::getNodeText(goalStateDoc, sharedConfigXpathExpr, NULL));
        delete sharedConfigXpathExpr;

        const xmlChar* extensionsConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ExtensionsConfig/text()");
        this->extensionsConfigUrl = *(XmlRoutine::getNodeText(goalStateDoc, extensionsConfigXpathExpr, NULL));
        delete extensionsConfigXpathExpr;

        const xmlChar* fullConfigXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/FullConfig/text()");
        this->fullConfigUrl = *(XmlRoutine::getNodeText(goalStateDoc, fullConfigXpathExpr, NULL));
        delete fullConfigXpathExpr;

        const xmlChar* configNameXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ConfigName/text()");
        this->configName = *(XmlRoutine::getNodeText(goalStateDoc, configNameXpathExpr, NULL));
        delete configNameXpathExpr;

        const xmlChar* certificatesXpathExpr = xmlCharStrdup("/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/Certificates/text()");
        this->certificatesUrl = XmlRoutine::getNodeText(goalStateDoc, certificatesXpathExpr, NULL);
        delete certificatesXpathExpr;

        xmlFreeDoc(goalStateDoc);

        // saving the goal state file 
        string goalStageFileName = this->goalStageFilePrefix + incarnation + ".xml";
        FileOperator::save_file(*(goalStateResponse.body), goalStageFileName);
        // construct the instances
        HttpResponse hostingEnvironmentConfigText;
        int getHostingEnvironmentConfigResult = HttpRoutine::GetWithDefaultHeader(this->hostingEnvironmentConfigUrl.c_str(), hostingEnvironmentConfigText);
        if (getHostingEnvironmentConfigResult == 0)
        {
            this->hostingEnvironmentConfig = new HostingEnvironmentConfig();
            this->hostingEnvironmentConfig->Parse(*(hostingEnvironmentConfigText.body));
        }
        else
        {
            //TODO error handling.
        }
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

        HttpResponse sharedConfigText;
        int getSharedConfigResult = HttpRoutine::GetWithDefaultHeader(this->sharedConfigUrl.c_str(), sharedConfigText);
        if (getSharedConfigResult == 0)
        {
            this->sharedConfig = new SharedConfig();
            this->sharedConfig->Parse(*(sharedConfigText.body));
        }
        else
        {
            //TODO error handling.
        }
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

        HttpResponse extentionsConfigText;
        int getExtensionsConfigResult = HttpRoutine::GetWithDefaultHeader(this->extensionsConfigUrl.c_str(), extentionsConfigText);
        if (getExtensionsConfigResult == 0)
        {
            this->extensionsConfig = new ExtensionsConfig();
            this->extensionsConfig->Parse(*(extentionsConfigText.body));
        }
        else
        {
            //TODO error handling.
        }
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

        // get the certificates from the server.
        if (this->certificatesUrl != NULL)
        {
            this->certificates = new Certificates();
            string certificationFileContent;
            int getCertificationFileContentResult = FileOperator::get_content(TRANSPORT_CERT_PUB, certificationFileContent);
            if (getCertificationFileContentResult == 0)
            {
                vector<string> splitResult;
                string spliter = "\n";
                StringUtil::string_split(certificationFileContent, spliter, &splitResult);
                string pureCertText;
                for (int i = 0; i < splitResult.size(); i++)
                {
                    if (splitResult[i].find("CERTIFICATE") == string::npos)
                    {
                        pureCertText += splitResult[i];
                    }
                }
                Logger::getInstance().Verbose("pureCertText is %s", pureCertText.c_str());
                //TODO get rid of the cert headers.
                map<string, string> headers;
                headers["x-ms-agent-name"] = WAAGENT_NAME;
                headers["x-ms-version"] = WAAGENT_VERSION;
                headers["x-ms-cipher-name"] = TRANSPORT_CERT_CIPHER_NAME;
                headers["x-ms-guest-agent-public-x509-cert"] = pureCertText;
                HttpResponse certificationsText;
                int getResult = HttpRoutine::Get(this->certificatesUrl->c_str(), &headers, certificationsText);
                // get certificates from the remote using the public cert.
                if (getResult == 0)
                {
                    this->certificates->Parse(*(certificationsText.body));
                }
            }
            else
            {
                Logger::getInstance().Error("get the transport cert pub failed.");
                // TODO error handling
            }
        }
        else
        {
            Logger::getInstance().Warning("certificates url is null.");
        }
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    }
    else
    {
        //TODO Error handling.
    }
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
