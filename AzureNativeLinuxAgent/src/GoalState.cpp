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
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    string goalStateEndpoint = string("http://") + azureEnvironment.wireServerAddress + "/machine/?comp=goalstate";

    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    //TODO: wrapper up a XML handling in our code
    /* set our custom set of headers */
    HttpResponse goalStateResponse;
    int getGoalStateResult = HttpRoutine::GetWithDefaultHeader(goalStateEndpoint.c_str(), goalStateResponse);

    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    if (getGoalStateResult == 0)
    {
        xmlDocPtr goalStateDoc = xmlParseMemory(goalStateResponse.body.c_str(), goalStateResponse.body.size());
        xmlNodePtr root = xmlDocGetRootElement(goalStateDoc);

        XmlRoutine::getNodeText(goalStateDoc, "/GoalState/Incarnation[1]/text()", NULL, this->incarnation);

        XmlRoutine::getNodeText(goalStateDoc, "/GoalState/Container/ContainerId/text()", NULL, this->containerId);

        XmlRoutine::getNodeText(goalStateDoc, "/GoalState/Container/RoleInstanceList/RoleInstance/InstanceId/text()", NULL, this->roleInstanceId);

        XmlRoutine::getNodeText(goalStateDoc, "/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/HostingEnvironmentConfig/text()", NULL, this->hostingEnvironmentConfigUrl);

        XmlRoutine::getNodeText(goalStateDoc, "/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/SharedConfig/text()", NULL, this->sharedConfigUrl);

        XmlRoutine::getNodeText(goalStateDoc, "/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ExtensionsConfig/text()", NULL, this->extensionsConfigUrl);

        XmlRoutine::getNodeText(goalStateDoc, "/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/FullConfig/text()", NULL, this->fullConfigUrl);

        XmlRoutine::getNodeText(goalStateDoc, "/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/ConfigName/text()", NULL, this->configName);

        XmlRoutine::getNodeText(goalStateDoc, "/GoalState/Container/RoleInstanceList/RoleInstance/Configuration/Certificates/text()", NULL, this->certificatesUrl);

        xmlFreeDoc(goalStateDoc);

        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

        // saving the goal state file 
        string goalStageFileName = this->goalStageFilePrefix + incarnation + ".xml";
        FileOperator::save_file(goalStateResponse.body, goalStageFileName);

        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
        // construct the instances
        HttpResponse hostingEnvironmentConfigText;
        int getHostingEnvironmentConfigResult = HttpRoutine::GetWithDefaultHeader(this->hostingEnvironmentConfigUrl.c_str(), hostingEnvironmentConfigText);
        if (getHostingEnvironmentConfigResult == 0)
        {
            this->hostingEnvironmentConfig = new HostingEnvironmentConfig();
            this->hostingEnvironmentConfig->Parse(hostingEnvironmentConfigText.body);
        }
        else
        {
            Logger::getInstance().Error("File[%s] Line[%d]", __FILE__, __LINE__);
            Logger::getInstance().Error("failed to get the host environment config");
            //TODO error handling.
        }
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

        HttpResponse sharedConfigText;
        int getSharedConfigResult = HttpRoutine::GetWithDefaultHeader(this->sharedConfigUrl.c_str(), sharedConfigText);
        if (getSharedConfigResult == 0)
        {
            this->sharedConfig = new SharedConfig();
            this->sharedConfig->Parse(sharedConfigText.body);
        }
        else
        {
            Logger::getInstance().Error("File[%s] Line[%d]", __FILE__, __LINE__);
            Logger::getInstance().Error("failed to get the shared config");
            //TODO error handling.
        }
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

        HttpResponse extentionsConfigText;
        int getExtensionsConfigResult = HttpRoutine::GetWithDefaultHeader(this->extensionsConfigUrl.c_str(), extentionsConfigText);
        if (getExtensionsConfigResult == 0)
        {
            this->extensionsConfig = new ExtensionsConfig();
            this->extensionsConfig->Parse(extentionsConfigText.body);
        }
        else
        {
            Logger::getInstance().Error("File[%s] Line[%d]", __FILE__, __LINE__);
            Logger::getInstance().Error("failed to get the extensions config");
            //TODO error handling.
        }
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

        // get the certificates from the server.
        if (this->certificatesUrl.length() > 0)
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
                int getResult = HttpRoutine::Get(this->certificatesUrl.c_str(), &headers, certificationsText);
                // get certificates from the remote using the public cert.
                if (getResult == 0)
                {
                    this->certificates->Parse(certificationsText.body);
                }
            }
            else
            {
                Logger::getInstance().Error("File[%s] Line[%d]", __FILE__, __LINE__);
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
    if (this->hostingEnvironmentConfig != NULL)
    {
        delete hostingEnvironmentConfig;
        hostingEnvironmentConfig = NULL;
    }
    if (this->sharedConfig != NULL)
    {
        delete sharedConfig;
        sharedConfig = NULL;
    }
    if (this->extensionsConfig != NULL)
    {
        delete extensionsConfig;
        extensionsConfig = NULL;
    }
    if (this->certificates != NULL)
    {
        delete certificates;
        certificates = NULL;
    }
}
