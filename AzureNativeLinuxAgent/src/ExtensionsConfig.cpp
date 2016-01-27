#include "CommandExecuter.h"
#include "ExtensionsConfig.h"
#include "FileOperator.h"
#include "HandlerManifest.h"
#include "HttpRoutine.h"
#include "JsonRoutine.h"
#include "Logger.h"
#include "Macros.h"
#include "ZipRoutine.h"

int ExtensionsConfig::GenerateAggStatus(ExtensionConfig & extensionConfig, string &aggStatus)
{

    return 0;
}

ExtensionsConfig::ExtensionsConfig()
{
}

void ExtensionsConfig::ReportExtensionsStatus()
{
    Logger::getInstance().Verbose("start report extensions status.");
    string statuses = "";
    for (int i = 0; i < this->extensionConfigs.size(); i++)
    {
        Logger::getInstance().Verbose("trying to get the extension: %s status", extensionConfigs[i]->name.c_str());
    }
    Logger::getInstance().Verbose("end report extensions status.");
    
    time_t     now = time(NULL);
    struct tm  tstruct;
    char       tstamp[80];
    tstruct = *localtime(&now);
    // Visit http://en.cppreference.com/w/cpp/chrono/c/strftime
    // for more information about date/time format
    strftime(tstamp, sizeof(tstamp), "%Y-%m-%dT%H.%M.%SZ", &tstruct);
    string agent_state = "Ready";
    string agent_msg = "GuestAgent is running and accepting new configurations.";
    json_object *status = json_object_new_object();

    json_object_object_add(status, "version", json_object_new_string("1.0"));
    json_object_object_add(status, "timestampUTC", json_object_new_string(tstamp));

    json_object *aggregateStatus = json_object_new_object();
    json_object *guestAgentStatus = json_object_new_object();
    json_object_object_add(guestAgentStatus, "version", json_object_new_string(WAAGENT_VERSION));
    json_object_object_add(guestAgentStatus, "status", json_object_new_string(agent_state.c_str()));

    json_object *statusesArray = json_object_new_array();
    // TODO add the status into the statusesArray
    json_object_object_add(guestAgentStatus, "handlerAggregateStatus", statusesArray);
    json_object *formattedMessage = json_object_new_object();
    json_object_object_add(formattedMessage, "lang", json_object_new_string("en-US"));
    json_object_object_add(formattedMessage, "message", json_object_new_string(agent_msg.c_str()));
    json_object_object_add(guestAgentStatus, "formattedMessage", formattedMessage);
    json_object_object_add(aggregateStatus, "aggregateStatus", guestAgentStatus);

    json_object_object_add(status, "aggregateStatus", aggregateStatus);

    const char * status_str = json_object_to_json_string(status);
    Logger::getInstance().Error("status string is %s", status_str);
    HttpResponse response;
    int postResult = HttpRoutine::Post(this->statusUploadBlobUri.c_str(), NULL, status_str, response);
    if (postResult != 0)
    {
        Logger::getInstance().Error("failed to report the status %d", postResult);
        Logger::getInstance().Error("status upload blob uri is :%s", this->statusUploadBlobUri.c_str());
    }
}


void ExtensionsConfig::Parse(string & extensionsConfigText) {
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    xmlDocPtr extensionsConfigDoc = xmlParseMemory(extensionsConfigText.c_str(), extensionsConfigText.size());
    xmlNodePtr root = xmlDocGetRootElement(extensionsConfigDoc);
    XmlRoutine::getNodeProperty(root, "goalStateIncarnation", incarnationStr);
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    string configFilePath = string("/var/lib/waagent/Native_ExtensionsConfig.") + incarnationStr + ".xml";
    FileOperator::save_file(extensionsConfigText, configFilePath);
    xmlXPathObjectPtr pluginsXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, "/Extensions/Plugins/Plugin", NULL);

    //statusBlobType
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    xmlNodeSetPtr nodes = pluginsXpathObj->nodesetval;
    this->extensionConfigs.clear();
    for (int i = 0; i < nodes->nodeNr; i++)
    {
        ExtensionConfig *newConfig = new ExtensionConfig();
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "autoUpgrade", newConfig->autoUpgrade);
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "failoverlocation", newConfig->failoverLocation);
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "isJson", newConfig->isJson);
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "location", newConfig->location);
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "name", newConfig->name);
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "runAsStartupTask", newConfig->runAsStartupTask);
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "state", newConfig->state);
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "version", newConfig->version);
        this->extensionConfigs.push_back(newConfig);

        newConfig->PrepareExtensionPackage(incarnationStr);

        string pluginSettingsPath = string("/Extensions/PluginSettings/Plugin[@name='")
            + newConfig->name
            + "' and @version='" + newConfig->version
            + "']/RuntimeSettings";
        //TODO make sure the c_str is deallocated
        xmlXPathObjectPtr pluginSettingsXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, pluginSettingsPath.c_str(), NULL);
        if (pluginSettingsXpathObj != NULL
            && pluginSettingsXpathObj->nodesetval != NULL
            && pluginSettingsXpathObj->nodesetval->nodeNr > 0)
        {
            string seqNo;
            XmlRoutine::getNodeProperty(pluginSettingsXpathObj->nodesetval->nodeTab[0], "seqNo", seqNo);
            string settingFileContent;
            XmlRoutine::getNodeContent(pluginSettingsXpathObj->nodesetval->nodeTab[0], settingFileContent);
            newConfig->SavePluginSettings(seqNo, settingFileContent);
        }
        else
        {
            Logger::getInstance().Warning("no plugin settings found for this extension");
        }
        xmlXPathFreeObject(pluginSettingsXpathObj);
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    }
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    xmlXPathFreeObject(pluginsXpathObj);

    xmlXPathObjectPtr statusBlobXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, "/Extensions/StatusUploadBlob", NULL);
    if (statusBlobXpathObj->nodesetval != NULL
        && statusBlobXpathObj->nodesetval->nodeNr > 0)
    {
        //TODO error handling for the statusBlobType
        XmlRoutine::getNodeProperty(statusBlobXpathObj->nodesetval->nodeTab[0], "statusBlobType", this->statusBlobType);
        XmlRoutine::getNodeContent(statusBlobXpathObj->nodesetval->nodeTab[0], this->statusUploadBlobUri);
        
        Logger::getInstance().Verbose("the status blob type:%s, uri:%s", this->statusBlobType.c_str(), this->statusUploadBlobUri.c_str());
    }
    else
    {
        Logger::getInstance().Warning("no status blob element found.");
    }

    xmlXPathFreeObject(statusBlobXpathObj);
    xmlFreeDoc(extensionsConfigDoc);
    xmlCleanupParser();
}

void ExtensionsConfig::Process()
{
    Logger::getInstance().Verbose("start processing extensions.");
    for (int i = 0; i < this->extensionConfigs.size(); i++)
    {
        this->extensionConfigs[i]->Process();
    }
    Logger::getInstance().Verbose("end processing extensions.");

    this->ReportExtensionsStatus();
}

ExtensionsConfig::~ExtensionsConfig()
{

}
