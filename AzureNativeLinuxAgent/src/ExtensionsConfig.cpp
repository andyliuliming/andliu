#include "CommandExecuter.h"
#include "ExtensionsConfig.h"
#include "FileOperator.h"
#include "HandlerManifest.h"
#include "HttpRoutine.h"
#include "JsonRoutine.h"
#include "Macros.h"
#include "XmlRoutine.h"
#ifdef _WIN32
#else
#include "ZipRoutine.h"
#include <glibmm/ustring.h>
using namespace Glib;
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

    ustring incarnationStr((const char*)incarnation);
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
        newConfig->name = ustring((const char*)name);
        xmlChar * version = xmlGetProp(nodes->nodeTab[i], xmlCharStrdup("version"));
        newConfig->version = ustring((const char*)version);
        xmlChar * location = xmlGetProp(nodes->nodeTab[i], xmlCharStrdup("location"));
        newConfig->location = ustring((const char*)location);
        xmlChar * failoverLocation = xmlGetProp(nodes->nodeTab[i], xmlCharStrdup("failoverlocation"));
        newConfig->failoverLocation = ustring((const char*)failoverLocation);
        this->extensionConfigs.push_back(newConfig);
    }
    xmlXPathFreeObject(pluginsXpathObj);

    for (int i = 0; i < this->extensionConfigs.size(); i++)
    {
        // get the manifest, get the bundle zip file location, download it, extract it.
        string * manifestXmlContent = HttpRoutine::Get(this->extensionConfigs[i]->location.c_str(), NULL);
        if (manifestXmlContent == NULL)
        {
            manifestXmlContent = HttpRoutine::Get(this->extensionConfigs[i]->failoverLocation.c_str(), NULL);
        }

        if (manifestXmlContent != NULL)
        {
            string filepath = string(WAAGENT_LIB_BASE_DIR) + "Native_" + this->extensionConfigs[i]->name + "." + incarnationStr + ".manifest";
            FileOperator::save_file(manifestXmlContent, &filepath);
            xmlDocPtr manifestXmlDoc = xmlParseMemory(manifestXmlContent->c_str(), manifestXmlContent->size());

            const xmlChar* pluginXpathManifestExpr = xmlCharStrdup("/PluginVersionManifest/Plugins/Plugin");
            xmlXPathObjectPtr xpathManifestObj = XmlRoutine::getNodes(manifestXmlDoc, pluginXpathManifestExpr, NULL);

            delete pluginXpathManifestExpr;
            xmlNodeSetPtr pluginNodes = xpathManifestObj->nodesetval;
            for (int j = 0; j < pluginNodes->nodeNr; j++)
            {
                xmlXPathObjectPtr versionObjects = XmlRoutine::findNodeByRelativeXpath(manifestXmlDoc, pluginNodes->nodeTab[j], BAD_CAST "./Version/text()");
                string currentVersion = string((const char*)versionObjects->nodesetval->nodeTab[0]->content);

                xmlXPathFreeObject(versionObjects);

                if (currentVersion == extensionConfigs[i]->version)
                {
                    // downloading the bundles
                    xmlXPathObjectPtr uriObjects = XmlRoutine::findNodeByRelativeXpath(manifestXmlDoc, pluginNodes->nodeTab[j], BAD_CAST "./Uris/Uri/text()");
                    string bundleFilePath = string(WAAGENT_LIB_BASE_DIR) + "Native_" + extensionConfigs[i]->name + "_" + extensionConfigs[i]->version + ".zip";
                    //// get the uri
                    HttpRoutine::GetToFile((const char*)(uriObjects->nodesetval->nodeTab[0]->content), NULL, bundleFilePath.c_str());

                    string bundleZipExtractDirectory = string(WAAGENT_LIB_BASE_DIR) + "Native_" + extensionConfigs[i]->name + "_" + extensionConfigs[i]->version + "/";

                    FileOperator::make_dir(bundleZipExtractDirectory.c_str());

                    ZipRoutine::UnZipToDirectory(bundleFilePath.c_str(), bundleZipExtractDirectory.c_str());
                    break;
                }
            }
            xmlXPathFreeObject(xpathManifestObj);
        }
        else
        {
            //TODO: error handling.
        }

        const xmlChar* pluginSettingsXpathExpr = xmlCharStrdup("/Extensions/PluginSettings/Plugin");
        xmlXPathObjectPtr pluginSettingsXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, pluginSettingsXpathExpr, NULL);
        delete pluginSettingsXpathExpr;
        xmlNodeSetPtr pluginSettingsNodeSet = pluginSettingsXpathObj->nodesetval;
        for (int pluginIndex = 0; pluginIndex < pluginSettingsNodeSet->nodeNr; pluginIndex++)
        {
            xmlChar * pluginName = xmlGetProp(pluginSettingsNodeSet->nodeTab[pluginIndex], xmlCharStrdup("name"));
            xmlChar * pluginVersion = xmlGetProp(pluginSettingsNodeSet->nodeTab[pluginIndex], xmlCharStrdup("version"));
            xmlXPathObjectPtr runtimeSettingsXpathObject = XmlRoutine::findNodeByRelativeXpath(extensionsConfigDoc,
                pluginSettingsNodeSet->nodeTab[pluginIndex], BAD_CAST "./RuntimeSettings");

            xmlChar * seqNo = xmlGetProp(runtimeSettingsXpathObject->nodesetval->nodeTab[pluginIndex], xmlCharStrdup("seqNo"));

            string settingFilePath = string("/var/lib/waagent/Native_") +
                ustring((const char*)pluginName) + "_" + ustring((const char*)pluginVersion) + "/config/" + ustring((const char*)seqNo) + ".settings";

            const char* runtimeSettingsText = (const char*)xmlNodeGetContent(runtimeSettingsXpathObject->nodesetval->nodeTab[0]);
            string *settingFileContent = new string(runtimeSettingsText);
            FileOperator::save_file(settingFileContent, &settingFilePath);

            string bundleZipExtractDirectory = string(WAAGENT_LIB_BASE_DIR) + "Native_" + extensionConfigs[i]->name + "_" + extensionConfigs[i]->version + "/";

            string manifestFilePath = bundleZipExtractDirectory + "/HandlerManifest.json";

            HandlerManifest * handlerManifest = JsonRoutine::ParseHandlerManifest(manifestFilePath.c_str());
            CommandResultPtr installResult = CommandExecuter::RunGetOutput(handlerManifest->installCommand);
            CommandResultPtr enableResult = CommandExecuter::RunGetOutput(handlerManifest->enableCommand);
            //handle it 
        }
    }
    xmlFreeDoc(extensionsConfigDoc);
    xmlCleanupParser();

#endif
}

void ExtensionsConfig::Process()
{

}

ExtensionsConfig::~ExtensionsConfig()
{
}
