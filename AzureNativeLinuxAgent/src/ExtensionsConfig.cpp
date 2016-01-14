#include "CommandExecuter.h"
#include "ExtensionsConfig.h"
#include "FileOperator.h"
#include "HandlerManifest.h"
#include "HttpRoutine.h"
#include "JsonRoutine.h"
#include "Logger.h"
#include "Macros.h"
#include "ZipRoutine.h"

ExtensionsConfig::ExtensionsConfig()
{
}

void ExtensionsConfig::ReportExtensionsStatus()
{
    Logger::getInstance().Verbose("start report extensions status.");
    for (int i = 0; i < this->extensionConfigs.size(); i++)
    {
        Logger::getInstance().Verbose("trying to get the extension's status");
    }
    Logger::getInstance().Verbose("end report extensions status.");
}


void ExtensionsConfig::Parse(string & extensionsConfigText) {
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    xmlDocPtr extensionsConfigDoc = xmlParseMemory(extensionsConfigText.c_str(), extensionsConfigText.size());
    xmlNodePtr root = xmlDocGetRootElement(extensionsConfigDoc);
    string incarnationStr;
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
        XmlRoutine::getNodeContent(statusBlobXpathObj->nodesetval->nodeTab[0], this->statusBlobType);
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
