#include "CommandExecuter.h"
#include "ExtensionConfig.h"
#include "FileOperator.h"
#include "HandlerManifest.h"
#include "HttpRoutine.h"
#include "JsonRoutine.h"
#include "Logger.h"
#include "XmlRoutine.h"
#include "ZipRoutine.h"
#include <cstring>
using namespace std;

int ExtensionConfig::DownloadExtractExtensions(xmlDocPtr manifestXmlDoc, const char* pluginXpathManifestExpr)
{
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
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
            this->get_extension_path(this->name, this->version, extensionPath);
            FileOperator::make_dir(extensionPath.c_str());
            ZipRoutine::UnZipToDirectory(bundleFilePath.c_str(), extensionPath.c_str());

            string changePermissionCommand = string("find ") + extensionPath + " -type f | xargs chmod  u+x ";
            CommandResult changePermissionResult;
            CommandExecuter::RunGetOutput(changePermissionCommand.c_str(), changePermissionResult);
            break;
        }
    }
    xmlXPathFreeObject(xpathManifestObj);
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    return 0;
}

int ExtensionConfig::PrepareExtensionPackage(string &incarnationStr)
{
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    if (this->state.compare("uninstall") == 0
        || this->state.compare("disabled") == 0)
    {
        Logger::getInstance().Verbose("the extension is disabled/uninstalled");
    }

    Logger::getInstance().Verbose("download/extract extension %s", this->name.c_str());
    // get the manifest, get the bundle zip file location, download it, extract it.
    HttpResponse response;
    int getResult = HttpRoutine::Get(this->location.c_str(), NULL, response);
    if (getResult != 0)
    {
        Logger::getInstance().Verbose("failed to get the manifest file from location, download from failover location.");
        getResult = HttpRoutine::Get(this->failoverLocation.c_str(), NULL, response);
    }
    if (getResult == 0)
    {
        // download the extension bundle zip.
        string filepath = string(WAAGENT_LIB_BASE_DIR) + "Native_" + this->name + "." + incarnationStr + ".manifest";
        FileOperator::save_file(response.body, filepath);
        xmlDocPtr manifestXmlDoc = xmlParseMemory(response.body.c_str(), response.body.size());
        this->DownloadExtractExtensions(manifestXmlDoc, "/PluginVersionManifest/Plugins/Plugin");
        this->DownloadExtractExtensions(manifestXmlDoc, "/PluginVersionManifest/InternalPlugins/Plugin");

        xmlFreeDoc(manifestXmlDoc);
    }
    else
    {
        //TODO: error handling.
        Logger::getInstance().Error("failed to get the extensions manifest");
    }
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    return 0;
}
int ExtensionConfig::get_extension_path(string& pluginName, string& pluginVersion, string&extensionPath)
{
    extensionPath = string(WAAGENT_LIB_BASE_DIR) + "Native_" + pluginName + "_" + pluginVersion + "/";
    return 0;
}

void ExtensionConfig::SavePluginSettings(string &seqNo, string &settings)
{
    string extensionPathOut;
    this->get_extension_path(this->name, this->version, extensionPathOut);

    string configFolderPath = extensionPathOut + "config/";
    FileOperator::make_dir(configFolderPath.c_str());
    string settingFilePath = configFolderPath + seqNo + ".settings";
    FileOperator::save_file(settings, settingFilePath);

    SaveHandlerEnvironemnt(seqNo, extensionPathOut);
}

int ExtensionConfig::Uninstall()
{
    //TODO implement this.
    return 1;
}

int ExtensionConfig::Disable()
{
    //TODO implement this.
    return 1;
}

int ExtensionConfig::Update(string &previous_version)
{
    //TODO implement this.
    return 1;
}

int ExtensionConfig::SaveHandlerEnvironemnt(string &seqNo, string &extensionPathOut)
{
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    //TODO implement this.
    string logDir = string(EXTENSION_LOG_BASE_DIR) + this->name + "/" + this->version;
    string configFolder = extensionPathOut + "config";
    string statusFolder = extensionPathOut + "status";
    string heartBeatFile = extensionPathOut + "heartbeat.log";

    const char* handleEnvFormat = "[{\"name\":\"%s\",\"seqNo\":\"%s\",\"version\":%s,\"handlerEnvironment\":{\
\"logFolder\":\"%s\",\"configFolder\":\"%s\",\
\"statusFolder\":\"%s\",\"heartbeatFile\":\"%s\"}}]";
    int sizeOfHandleEnv = this->name.length() + seqNo.length()
        + this->version.length() + logDir.length()
        + configFolder.length() + statusFolder.length()
        + heartBeatFile.length() + strlen(handleEnvFormat);
    Logger::getInstance().Error("SIZE OF sizeOfHandleEnv IS: %d", sizeOfHandleEnv);
    char* handleEnvText = new char[sizeOfHandleEnv + 1]();

    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    sprintf(handleEnvText, handleEnvFormat,
        this->name.c_str(), seqNo.c_str(),
        version.c_str(), logDir.c_str(),
        configFolder.c_str(), statusFolder.c_str(),
        heartBeatFile.c_str());
    string handlelEnvironmentFilePath = extensionPathOut + "HandlerEnvironment.json";

    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    //TODO make sure the strings are all deallocated including the c_str() ones.
    FileOperator::save_file(handleEnvText, sizeOfHandleEnv, handlelEnvironmentFilePath.c_str());
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    delete[]handleEnvText;
    handleEnvText = NULL;
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    //TODO make sure the handleEnvFormat is deallocated.
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    return 0;
}

int ExtensionConfig::Process()
{
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    //handle it 
    Logger::getInstance().Verbose("start handling extension %s", this->name.c_str());
    string  extensionPath;
    this->get_extension_path(this->name, this->version, extensionPath);
    string manifestFilePath = extensionPath + "/HandlerManifest.json";

    HandlerManifest handlerManifest;
    int parseHandlerManifest = JsonRoutine::ParseHandlerManifest(manifestFilePath, handlerManifest);
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
    return 0;
}


ExtensionConfig::ExtensionConfig()
{
}


ExtensionConfig::~ExtensionConfig()
{
}
