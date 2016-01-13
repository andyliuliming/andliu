#include "CommandExecuter.h"
#include "ExtensionsConfig.h"
#include "FileOperator.h"
#include "HandlerManifest.h"
#include "HttpRoutine.h"
#include "JsonRoutine.h"
#include "Logger.h"
#include "Macros.h"
#include "ZipRoutine.h"
void ExtensionsConfig::DownloadExtractExtensions(xmlDocPtr manifestXmlDoc, int i, const xmlChar* pluginXpathManifestExpr)
{
    xmlXPathObjectPtr xpathManifestObj = XmlRoutine::getNodes(manifestXmlDoc, pluginXpathManifestExpr, NULL);

    xmlNodeSetPtr pluginManifestNodes = xpathManifestObj->nodesetval;
    for (int j = 0; j < pluginManifestNodes->nodeNr; j++)
    {
        xmlXPathObjectPtr versionObjects = XmlRoutine::findNodeByRelativeXpath(manifestXmlDoc, pluginManifestNodes->nodeTab[j], BAD_CAST "./Version/text()");
        string currentVersion = string((const char*)versionObjects->nodesetval->nodeTab[0]->content);
        xmlXPathFreeObject(versionObjects);
        if (currentVersion == this->extensionConfigs[i]->version)
        {
            // downloading the bundles
            xmlXPathObjectPtr uriObjects = XmlRoutine::findNodeByRelativeXpath(manifestXmlDoc, pluginManifestNodes->nodeTab[j], BAD_CAST "./Uris/Uri/text()");
            string bundleFilePath = string(WAAGENT_LIB_BASE_DIR) + "Native_" + this->extensionConfigs[i]->name + "_" + this->extensionConfigs[i]->version + ".zip";
            HttpRoutine::GetToFile((const char*)(uriObjects->nodesetval->nodeTab[0]->content), NULL, bundleFilePath.c_str());
            string extensionPath;
            FileOperator::get_extension_path(this->extensionConfigs[i]->name, this->extensionConfigs[i]->version, extensionPath);
            FileOperator::make_dir(extensionPath.c_str());
            ZipRoutine::UnZipToDirectory(bundleFilePath.c_str(), extensionPath.c_str());

            string changePermissionCommand = string("find ") + extensionPath + " -type f | xargs chmod  u+x ";
            CommandExecuter::RunGetOutput(changePermissionCommand.c_str());
            break;
        }
    }
    xmlXPathFreeObject(xpathManifestObj);
}

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

    const xmlChar* pluginXpathExpr = xmlCharStrdup("/Extensions/Plugins/Plugin");
    xmlXPathObjectPtr pluginsXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, pluginXpathExpr, NULL);
    delete pluginXpathExpr;
    pluginXpathExpr = NULL;

    //statusBlobType
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    xmlNodeSetPtr nodes = pluginsXpathObj->nodesetval;
    this->extensionConfigs.clear();
    for (int i = 0; i < nodes->nodeNr; i++)
    {
        ExtensionConfig *newConfig = new ExtensionConfig();
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "name", newConfig->name);
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "version", newConfig->version);
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "location", newConfig->location);
        XmlRoutine::getNodeProperty(nodes->nodeTab[i], "failoverlocation", newConfig->failoverLocation);
        this->extensionConfigs.push_back(newConfig);
    }
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    xmlXPathFreeObject(pluginsXpathObj);

    for (int i = 0; i < this->extensionConfigs.size(); i++)
    {
        Logger::getInstance().Verbose("download/extract extension %s", this->extensionConfigs[i]->name.c_str());
        // get the manifest, get the bundle zip file location, download it, extract it.
        HttpResponse response;
        int getResult = HttpRoutine::Get(this->extensionConfigs[i]->location.c_str(), NULL, response);
        if (getResult != 0)
        {
            getResult = HttpRoutine::Get(this->extensionConfigs[i]->failoverLocation.c_str(), NULL, response);
        }

        if (getResult != 0)
        {
            // download the extension bundle zip.
            string filepath = string(WAAGENT_LIB_BASE_DIR) + "Native_" + this->extensionConfigs[i]->name + "." + incarnationStr + ".manifest";
            FileOperator::save_file(response.body, filepath);
            xmlDocPtr manifestXmlDoc = xmlParseMemory(response.body.c_str(), response.body.size());
            const xmlChar* pluginXpathManifestExpr = xmlCharStrdup("/PluginVersionManifest/Plugins/Plugin");
            this->DownloadExtractExtensions(manifestXmlDoc, i, pluginXpathManifestExpr);
            delete pluginXpathManifestExpr;
            pluginXpathManifestExpr = NULL;

            const xmlChar* internalPluginXpathManifestExpr = xmlCharStrdup("/PluginVersionManifest/InternalPlugins/Plugin");
            this->DownloadExtractExtensions(manifestXmlDoc, i, internalPluginXpathManifestExpr);

            /*handler_env = '[{  "name": "' + name + '", "seqNo": "' + seqNo + '", "version": 1.0,  "handlerEnvironment": {    "logFolder": "' + os.path.dirname(p.plugin_log) + '",    "configFolder": "' + root + '/config",    "statusFolder": "' + root + '/status",    "heartbeatFile": "' + root + '/heartbeat.log"}}]'
                SetFileContents(root + '/HandlerEnvironment.json', handler_env)*/

            delete internalPluginXpathManifestExpr;
            internalPluginXpathManifestExpr = NULL;

            xmlFreeDoc(manifestXmlDoc);
        }
        else
        {
            //TODO: error handling.
            Logger::getInstance().Error("failed to get the extensions manifest");
        }

        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

        const xmlChar* pluginSettingsXpathExpr = xmlCharStrdup("/Extensions/PluginSettings/Plugin");
        xmlXPathObjectPtr pluginSettingsXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, pluginSettingsXpathExpr, NULL);
        delete pluginSettingsXpathExpr;
        pluginSettingsXpathExpr = NULL;
        xmlNodeSetPtr pluginSettingsNodeSet = pluginSettingsXpathObj->nodesetval;
        for (int pluginIndex = 0; pluginIndex < pluginSettingsNodeSet->nodeNr; pluginIndex++)
        {
            Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
            string pluginName, pluginVersion, seqNo;
            XmlRoutine::getNodeProperty(pluginSettingsNodeSet->nodeTab[pluginIndex], "name", pluginName);
            XmlRoutine::getNodeProperty(pluginSettingsNodeSet->nodeTab[pluginIndex], "version", pluginVersion);

            xmlXPathObjectPtr runtimeSettingsXpathObject = XmlRoutine::findNodeByRelativeXpath(extensionsConfigDoc,
                pluginSettingsNodeSet->nodeTab[pluginIndex],
                BAD_CAST "./RuntimeSettings");
            XmlRoutine::getNodeProperty(runtimeSettingsXpathObject->nodesetval->nodeTab[0], "seqNo", seqNo);
            string extensionPath;
            FileOperator::get_extension_path(pluginName, pluginVersion, extensionPath);

            Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

            string configFolderPath = extensionPath + "config/";
            FileOperator::make_dir(configFolderPath.c_str());
            string settingFilePath = configFolderPath + seqNo + ".settings";
            //TODO check delete this.

            Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

            string settingFileContent;
            XmlRoutine::getNodeContent(runtimeSettingsXpathObject->nodesetval->nodeTab[0], settingFileContent);
            FileOperator::save_file(settingFileContent, settingFilePath);
            Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
        }
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    }


    const xmlChar* statusBlobXpathExpr = xmlCharStrdup("/Extensions/StatusUploadBlob");
    xmlXPathObjectPtr statusBlobXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, statusBlobXpathExpr, NULL);
    delete statusBlobXpathExpr;
    statusBlobXpathExpr = NULL;

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
        int parseHandlerManifest = JsonRoutine::ParseHandlerManifest(manifestFilePath.c_str(),handlerManifest);
        if (parseHandlerManifest == 0)
        {
            Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
            CommandExecuter::PosixSpawn(handlerManifest.installCommand, extensionPath);
            CommandExecuter::PosixSpawn(handlerManifest.enableCommand, extensionPath);
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
