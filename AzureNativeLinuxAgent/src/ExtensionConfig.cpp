#include "ExtensionConfig.h"
#include "FileOperator.h"
#include "HttpRoutine.h"
#include "CommandExecuter.h"
#include "Logger.h"
#include "XmlRoutine.h"
#include "ZipRoutine.h"

void ExtensionConfig::DownloadExtractExtensions(xmlDocPtr manifestXmlDoc, const char* pluginXpathManifestExpr)
{
    xmlXPathObjectPtr xpathManifestObj = XmlRoutine::getNodes(manifestXmlDoc, pluginXpathManifestExpr, NULL);

    xmlNodeSetPtr pluginManifestNodes = xpathManifestObj->nodesetval;
    for (int j = 0; j < pluginManifestNodes->nodeNr; j++)
    {
        xmlXPathObjectPtr versionObjects = XmlRoutine::findNodeByRelativeXpath(manifestXmlDoc, pluginManifestNodes->nodeTab[j], "./Version/text()");
        string currentVersion = (const char*)versionObjects->nodesetval->nodeTab[0]->content;
        xmlXPathFreeObject(versionObjects);
        if (currentVersion == this->version)
        {
            // downloading the bundles
            xmlXPathObjectPtr uriObjects = XmlRoutine::findNodeByRelativeXpath(manifestXmlDoc, pluginManifestNodes->nodeTab[j], "./Uris/Uri/text()");
            string bundleFilePath = string(WAAGENT_LIB_BASE_DIR) + "Native_" + this->name + "_" + this->version + ".zip";
            HttpRoutine::GetToFile((const char*)(uriObjects->nodesetval->nodeTab[0]->content), NULL, bundleFilePath.c_str());
            string extensionPath;
            FileOperator::get_extension_path(this->name, this->version, extensionPath);
            FileOperator::make_dir(extensionPath.c_str());
            ZipRoutine::UnZipToDirectory(bundleFilePath.c_str(), extensionPath.c_str());

            string changePermissionCommand = string("find ") + extensionPath + " -type f | xargs chmod  u+x ";
            CommandResult changePermissionResult;
            CommandExecuter::RunGetOutput(changePermissionCommand.c_str(), changePermissionResult);
            break;
        }
    }
    xmlXPathFreeObject(xpathManifestObj);
}
void ExtensionConfig::PrepareExtensionPackage(string &incarnationStr)
{
    Logger::getInstance().Verbose("download/extract extension %s", this->name.c_str());
    // get the manifest, get the bundle zip file location, download it, extract it.
    HttpResponse response;
    int getResult = HttpRoutine::Get(this->location.c_str(), NULL, response);
    if (getResult != 0)
    {
        getResult = HttpRoutine::Get(this->failoverLocation.c_str(), NULL, response);
    }

    if (getResult != 0)
    {
        // download the extension bundle zip.
        string filepath = string(WAAGENT_LIB_BASE_DIR) + "Native_" + this->name + "." + incarnationStr + ".manifest";
        FileOperator::save_file(response.body, filepath);
        xmlDocPtr manifestXmlDoc = xmlParseMemory(response.body.c_str(), response.body.size());
        this->DownloadExtractExtensions(manifestXmlDoc, "/PluginVersionManifest/Plugins/Plugin");

        this->DownloadExtractExtensions(manifestXmlDoc, "/PluginVersionManifest/InternalPlugins/Plugin");

        /*handler_env = '[{  "name": "' + name + '", "seqNo": "' + seqNo + '", "version": 1.0,  "handlerEnvironment": {    "logFolder": "' + os.path.dirname(p.plugin_log) + '",    "configFolder": "' + root + '/config",    "statusFolder": "' + root + '/status",    "heartbeatFile": "' + root + '/heartbeat.log"}}]'
        SetFileContents(root + '/HandlerEnvironment.json', handler_env)*/

        xmlFreeDoc(manifestXmlDoc);
    }
    else
    {
        //TODO: error handling.
        Logger::getInstance().Error("failed to get the extensions manifest");
    }
}

ExtensionConfig::ExtensionConfig()
{
}


ExtensionConfig::~ExtensionConfig()
{
}
