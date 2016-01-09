#include "CommandExecuter.h"
#include "ExtensionsConfig.h"
#include "FileOperator.h"
#include "HandlerManifest.h"
#include "HttpRoutine.h"
#include "JsonRoutine.h"
#include "Logger.h"
#include "Macros.h"
#include "XmlRoutine.h"
#ifdef _WIN32
#else
#include "ZipRoutine.h"
#endif
ExtensionsConfig::ExtensionsConfig()
{
}


void ExtensionsConfig::Parse(string * extensionsConfigText) {
#ifdef _WIN32
#else
    xmlDocPtr extensionsConfigDoc = xmlParseMemory(extensionsConfigText->c_str(), extensionsConfigText->size());
    xmlNodePtr root = xmlDocGetRootElement(extensionsConfigDoc);

    xmlChar * incarnation = xmlGetProp(root, xmlCharStrdup("goalStateIncarnation"));

    string incarnationStr((const char*)incarnation);
    string configFilePath = string("/var/lib/waagent/Native_ExtensionsConfig.") + incarnationStr + ".xml";
    shared_ptr<string> configFilePathP = make_shared<string>(configFilePath);

    FileOperator::save_file(extensionsConfigText, configFilePathP.get());

    const xmlChar* pluginXpathExpr = xmlCharStrdup("/Extensions/Plugins/Plugin");
    xmlXPathObjectPtr pluginsXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, pluginXpathExpr, NULL);
    delete pluginXpathExpr;
    xmlNodeSetPtr nodes = pluginsXpathObj->nodesetval;
    this->extensionConfigs.clear();
    for (int i = 0; i < nodes->nodeNr; i++)
    {
        ExtensionConfig *newConfig = new ExtensionConfig();
        xmlChar * name = xmlGetProp(nodes->nodeTab[i], xmlCharStrdup("name"));
        newConfig->name = string((const char*)name);
        xmlChar * version = xmlGetProp(nodes->nodeTab[i], xmlCharStrdup("version"));
        newConfig->version = string((const char*)version);
        xmlChar * location = xmlGetProp(nodes->nodeTab[i], xmlCharStrdup("location"));
        newConfig->location = string((const char*)location);
        xmlChar * failoverLocation = xmlGetProp(nodes->nodeTab[i], xmlCharStrdup("failoverlocation"));
        newConfig->failoverLocation = string((const char*)failoverLocation);
        this->extensionConfigs.push_back(newConfig);
    }
    xmlXPathFreeObject(pluginsXpathObj);

    for (int i = 0; i < this->extensionConfigs.size(); i++)
    {
        // get the manifest, get the bundle zip file location, download it, extract it.
        HttpResponse *response  = HttpRoutine::Get(this->extensionConfigs[i]->location.c_str(), NULL);
        if (response == NULL)
        {
            response = HttpRoutine::Get(this->extensionConfigs[i]->failoverLocation.c_str(), NULL);
        }

        if (response != NULL)
        {
            // download the extension bundle zip.
            string filepath = string(WAAGENT_LIB_BASE_DIR) + "Native_" + this->extensionConfigs[i]->name + "." + incarnationStr + ".manifest";
            FileOperator::save_file(response->body, &filepath);
            xmlDocPtr manifestXmlDoc = xmlParseMemory(response->body->c_str(), response->body->size());
            const xmlChar* pluginXpathManifestExpr = xmlCharStrdup("/PluginVersionManifest/Plugins/Plugin");
            xmlXPathObjectPtr xpathManifestObj = XmlRoutine::getNodes(manifestXmlDoc, pluginXpathManifestExpr, NULL);
            delete pluginXpathManifestExpr;
            xmlNodeSetPtr pluginManifestNodes = xpathManifestObj->nodesetval;
            for (int j = 0; j < pluginManifestNodes->nodeNr; j++)
            {
                xmlXPathObjectPtr versionObjects = XmlRoutine::findNodeByRelativeXpath(manifestXmlDoc, pluginManifestNodes->nodeTab[j], BAD_CAST "./Version/text()");
                string currentVersion = string((const char*)versionObjects->nodesetval->nodeTab[0]->content);
                xmlXPathFreeObject(versionObjects);
                if (currentVersion == extensionConfigs[i]->version)
                {
                    // downloading the bundles
                    xmlXPathObjectPtr uriObjects = XmlRoutine::findNodeByRelativeXpath(manifestXmlDoc, pluginManifestNodes->nodeTab[j], BAD_CAST "./Uris/Uri/text()");
                    string bundleFilePath = string(WAAGENT_LIB_BASE_DIR) + "Native_" + extensionConfigs[i]->name + "_" + extensionConfigs[i]->version + ".zip";
                    HttpRoutine::GetToFile((const char*)(uriObjects->nodesetval->nodeTab[0]->content), NULL, bundleFilePath.c_str());
                    string *extensionPath = FileOperator::get_extension_path(extensionConfigs[i]->name.c_str(), extensionConfigs[i]->version.c_str());
                    FileOperator::make_dir(extensionPath->c_str());
                    ZipRoutine::UnZipToDirectory(bundleFilePath.c_str(), extensionPath->c_str());
                    delete extensionPath;
                    extensionPath = NULL;
                    break;
                }
            }
            xmlXPathFreeObject(xpathManifestObj);
        }
        else
        {
            //TODO: error handling.
            Logger::getInstance().Error("failed to get the extensions manifest");
        }

        const xmlChar* pluginSettingsXpathExpr = xmlCharStrdup("/Extensions/PluginSettings/Plugin");
        xmlXPathObjectPtr pluginSettingsXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, pluginSettingsXpathExpr, NULL);
        delete pluginSettingsXpathExpr;
        xmlNodeSetPtr pluginSettingsNodeSet = pluginSettingsXpathObj->nodesetval;
        for (int pluginIndex = 0; pluginIndex < pluginSettingsNodeSet->nodeNr; pluginIndex++)
        {
            xmlChar * pluginName = xmlGetProp(pluginSettingsNodeSet->nodeTab[pluginIndex], xmlCharStrdup("name"));
            xmlChar * pluginVersion = xmlGetProp(pluginSettingsNodeSet->nodeTab[pluginIndex], xmlCharStrdup("version"));
            xmlXPathObjectPtr runtimeSettingsXpathObject = XmlRoutine::findNodeByRelativeXpath(extensionsConfigDoc, pluginSettingsNodeSet->nodeTab[pluginIndex], BAD_CAST "./RuntimeSettings");
            xmlChar * seqNo = xmlGetProp(runtimeSettingsXpathObject->nodesetval->nodeTab[pluginIndex], xmlCharStrdup("seqNo"));
            string *extensionPath = FileOperator::get_extension_path((const char*)pluginName, (const char*)pluginVersion);
            string settingFilePath = *extensionPath + "config/" + string((const char*)seqNo) + ".settings";
            //TODO check delete this.
            const char* runtimeSettingsText = (const char*)xmlNodeGetContent(runtimeSettingsXpathObject->nodesetval->nodeTab[0]);
            string *settingFileContent = new string(runtimeSettingsText);
            FileOperator::save_file(settingFileContent, &settingFilePath);
        }
    }
    xmlFreeDoc(extensionsConfigDoc);
    xmlCleanupParser();

#endif
}

void ExtensionsConfig::Process()
{
    for (int i = 0; i < this->extensionConfigs.size(); i++)
    {
        //handle it 
        string * extensionPath = FileOperator::get_extension_path(this->extensionConfigs[i]->name.c_str(),
            this->extensionConfigs[i]->version.c_str());
        string manifestFilePath = *extensionPath + "/HandlerManifest.json";
        delete extensionPath;
        extensionPath = NULL;
        HandlerManifest * handlerManifest = JsonRoutine::ParseHandlerManifest(manifestFilePath.c_str());
        CommandResultPtr installResult = CommandExecuter::RunGetOutput(handlerManifest->installCommand);
        CommandResultPtr enableResult = CommandExecuter::RunGetOutput(handlerManifest->enableCommand);
    }
    // start the extensions.
}

ExtensionsConfig::~ExtensionsConfig()
{
}
