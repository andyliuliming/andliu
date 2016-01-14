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
        string extensionPath;
        FileOperator::get_extension_path(this->extensionConfigs[i]->name, this->extensionConfigs[i]->version, extensionPath);
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
    }
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    xmlXPathFreeObject(pluginsXpathObj);

    for (int i = 0; i < this->extensionConfigs.size(); i++)
    {
        this->extensionConfigs[i]->PrepareExtensionPackage(incarnationStr);
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
        string pluginSettingsPath = string("/Extensions/PluginSettings/Plugin[@name='") + this->extensionConfigs[i]->name + "' and @version='" + this->extensionConfigs[i]->version + "']/RuntimeSettings";

        xmlXPathObjectPtr pluginSettingsXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, pluginSettingsPath.c_str(), NULL);
        xmlNodeSetPtr pluginSettingsNodeSet = pluginSettingsXpathObj->nodesetval;

        if (pluginSettingsNodeSet->nodeNr > 0)
        {
            string seqNo;
            XmlRoutine::getNodeProperty(pluginSettingsNodeSet->nodeTab[0], "seqNo", seqNo);
            string extensionPathOut;
            FileOperator::get_extension_path(this->extensionConfigs[i]->name, this->extensionConfigs[i]->version, extensionPathOut);
            string settingFileContent;
            XmlRoutine::getNodeContent(pluginSettingsNodeSet->nodeTab[0], settingFileContent);
            string configFolderPath = extensionPathOut + "config/";
            FileOperator::make_dir(configFolderPath.c_str());
            string settingFilePath = configFolderPath + seqNo + ".settings";
            FileOperator::save_file(settingFileContent, settingFilePath);
        }
        else
        {
            Logger::getInstance().Warning("no plugin settings found for this extension");
        }
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    }


    xmlXPathObjectPtr statusBlobXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, "/Extensions/StatusUploadBlob", NULL);

    if (statusBlobXpathObj->nodesetval != NULL
        && statusBlobXpathObj->nodesetval->nodeNr > 0)
    {
        //TODO error handling for the statusBlobType
        XmlRoutine::getNodeProperty(statusBlobXpathObj->nodesetval->nodeTab[0], "statusBlobType", statusBlobType);
        XmlRoutine::getNodeContent(statusBlobXpathObj->nodesetval->nodeTab[0], statusBlobType);
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
        //handle it 
        Logger::getInstance().Verbose("start handling extension %s", this->extensionConfigs[i]->name.c_str());
        string  extensionPath;
        FileOperator::get_extension_path(this->extensionConfigs[i]->name, this->extensionConfigs[i]->version, extensionPath);
        string manifestFilePath = extensionPath + "/HandlerManifest.json";

        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
        HandlerManifest handlerManifest;
        int parseHandlerManifest = JsonRoutine::ParseHandlerManifest(manifestFilePath,handlerManifest);
        if (parseHandlerManifest == 0)
        {

            Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
            CommandExecuter::PosixSpawn(handlerManifest.installCommand, extensionPath);
            CommandExecuter::PosixSpawn(handlerManifest.enableCommand, extensionPath);
            Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
        }
        else
        {
            //TODO error handling.
        }
        Logger::getInstance().Verbose("end handling extension");
    }
    Logger::getInstance().Verbose("end processing extensions.");

    this->ReportExtensionsStatus();
}

ExtensionsConfig::~ExtensionsConfig()
{

}
