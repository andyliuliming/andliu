#include "ExtensionsConfig.h"
#include "FileOperator.h"
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
    //configFilePath = new string("/var/lib/waagent/Native_ExtensionsConfig.xml");
}


void ExtensionsConfig::Parse(string * extensionsConfigText) {
#ifdef _WIN32
#else
    xmlDocPtr extensionsConfigDoc = xmlParseMemory(extensionsConfigText->c_str(), extensionsConfigText->size());
    xmlNodePtr root = xmlDocGetRootElement(extensionsConfigDoc);
    cout << "root name is " << root->name << endl;
    xmlChar * incarnation = xmlGetProp(root, xmlCharStrdup("goalStateIncarnation"));

    ustring incarnationStr((const char*)incarnation);
    string configFilePath = string("/var/lib/waagent/Native_ExtensionsConfig.") + incarnationStr + ".xml";
    string * configFilePathP = new string(configFilePath);
    FileOperator::save_file(extensionsConfigText, configFilePathP);
    delete configFilePathP;
    configFilePathP = NULL;
    // TODO garbage collection it.

    const xmlChar* pluginXpathExpr = xmlCharStrdup("/Extensions/Plugins/Plugin");
    xmlXPathObjectPtr pluginsXpathObj = XmlRoutine::getNodes(extensionsConfigDoc, pluginXpathExpr, NULL);
    delete pluginXpathExpr;
    xmlNodeSetPtr nodes = pluginsXpathObj->nodesetval;
    cout << "plugin node count: " << nodes->nodeNr << endl;
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
            cout << "checking the version in manifest file..." << endl;
            xmlXPathObjectPtr xpathManifestObj = XmlRoutine::getNodes(manifestXmlDoc, pluginXpathManifestExpr, NULL);

            cout << "checking the version in manifest file2..." << endl;
            delete pluginXpathManifestExpr;
            xmlNodeSetPtr pluginNodes = xpathManifestObj->nodesetval;
            for (int j = 0; j < pluginNodes->nodeNr; j++)
            {
                cout << "checking the version in manifest file3..." << endl;
                xmlXPathObjectPtr versionObjects = XmlRoutine::findNodeByRelativeXpath(manifestXmlDoc, pluginNodes->nodeTab[j], BAD_CAST "./Version/text()");
                cout << "version node count is:" << versionObjects->nodesetval->nodeNr << endl;
                cout << "version in manifest: " << (const char*)(versionObjects->nodesetval->nodeTab[0]->content) << endl;
                cout << "version in manifest: " << (const char*)versionObjects->nodesetval->nodeTab[0]->name << endl;
                ustring currentVersion = ustring((const char*)versionObjects->nodesetval->nodeTab[0]->content);

                xmlXPathFreeObject(versionObjects);

                if (currentVersion == extensionConfigs[i]->version)
                {
                    cout << "got the version!!!!" << endl;
                    // downloading the bundles
                    xmlXPathObjectPtr uriObjects = XmlRoutine::findNodeByRelativeXpath(manifestXmlDoc, pluginNodes->nodeTab[j], BAD_CAST "./Uris/Uri/text()");
                    cout << "try to find the version" << endl;
                    string bundleFilePath = string(WAAGENT_LIB_BASE_DIR) + "Native_" + extensionConfigs[i]->name + "_" + extensionConfigs[i]->version + ".zip";
                    //// get the uri
                    HttpRoutine::GetToFile((const char*)(uriObjects->nodesetval->nodeTab[0]->content), NULL, bundleFilePath.c_str());

                    string bundleZipPath = bundleFilePath;
                    string bundleZipExtractDirectory = string(WAAGENT_LIB_BASE_DIR) + "Native_" + extensionConfigs[i]->name + "_" + extensionConfigs[i]->version + "/";
                    
                    FileOperator::make_dir(bundleZipExtractDirectory.c_str());

                    ZipRoutine::UnZipToDirectory(bundleZipPath, bundleZipExtractDirectory);

                    string manifestFilePath = bundleZipExtractDirectory + "/HandlerManifest.json";

                    JsonRoutine::ParseFile(manifestFilePath.c_str());
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
        cout << "settings file node count: " << pluginSettingsNodeSet->nodeNr << endl;
        for (int i = 0; i < pluginSettingsNodeSet->nodeNr; i++)
        {
            xmlChar * pluginName = xmlGetProp(pluginSettingsNodeSet->nodeTab[i], xmlCharStrdup("name"));
            //newConfig->name = ustring((const char*)name);
            xmlChar * pluginVersion = xmlGetProp(pluginSettingsNodeSet->nodeTab[i], xmlCharStrdup("version"));

            xmlXPathObjectPtr runtimeSettingsXpathObject = XmlRoutine::findNodeByRelativeXpath(extensionsConfigDoc,
                pluginSettingsNodeSet->nodeTab[i], BAD_CAST "./RuntimeSettings");

            xmlChar * seqNo = xmlGetProp(runtimeSettingsXpathObject->nodesetval->nodeTab[i], xmlCharStrdup("seqNo"));

            string settingFilePath = string("/var/lib/waagent/Native_") +
                ustring((const char*)pluginName) + "_" + ustring((const char*)pluginVersion) + "/config/" + ustring((const char*)seqNo) + ".settings";

            const char* runtimeSettingsText = (const char*)xmlNodeGetContent(runtimeSettingsXpathObject->nodesetval->nodeTab[0]);

            cout << "runtime settings text is :" << runtimeSettingsText << "seq no is :" << (const char*)seqNo << endl;
            string *settingFileContent = new string(runtimeSettingsText);
            FileOperator::save_file(settingFileContent, &settingFilePath);

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
