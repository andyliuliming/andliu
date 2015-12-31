#include "ExtensionsConfig.h"
#include "FileOperator.h"
#include "HttpRoutine.h"
#include "Macros.h"
#include "XmlRoutine.h"
#ifdef _WIN32
#else
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
    xmlDocPtr doc = xmlParseMemory(extensionsConfigText->c_str(), extensionsConfigText->size());
    xmlNodePtr root = xmlDocGetRootElement(doc);
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
    xmlXPathObjectPtr xpathObj = XmlRoutine::getNodes(doc, pluginXpathExpr, NULL);
    delete pluginXpathExpr;
    xmlNodeSetPtr nodes = xpathObj->nodesetval;
    cout << "plugin node count: " << nodes->nodeNr << endl;
    this->extensionConfigs.clear();
    for (int i = 0; i < nodes->nodeNr; i++) {
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
    xmlXPathFreeObject(xpathObj);

    for (int i = 0; i < this->extensionConfigs.size(); i++) {
        // get the manifest
        string * result = HttpRoutine::Get(this->extensionConfigs[i]->location.c_str(), NULL);
        if (result == NULL)
        {
            result = HttpRoutine::Get(this->extensionConfigs[i]->failoverLocation.c_str(), NULL);
        }

        if (result != NULL) {
            string filepath = string(LIB_DIR) + "Native_" + this->extensionConfigs[i]->name + "." + incarnationStr + ".manifest";
            FileOperator::save_file(result, &filepath);
            xmlDocPtr doc2 = xmlParseMemory(result->c_str(), result->size());

            const xmlChar* pluginXpathManifestExpr = xmlCharStrdup("/PluginVersionManifest/Plugins/Plugin");
            cout << "checking the version in manifest file..." << endl;
            xmlXPathObjectPtr xpathManifestObj = XmlRoutine::getNodes(doc2, pluginXpathManifestExpr, NULL);

            cout << "checking the version in manifest file2..." << endl;
            delete pluginXpathManifestExpr;
            xmlNodeSetPtr pluginNodes = xpathManifestObj->nodesetval;
            for (int j = 0; j < pluginNodes->nodeNr; j++)
            {
                cout << "checking the version in manifest file3..." << endl;
                xmlXPathObjectPtr versionObjects = XmlRoutine::findNodeByRelativeXpath(doc2, pluginNodes->nodeTab[j], BAD_CAST "./Version/text()");
                cout << "version node count is:" << versionObjects->nodesetval->nodeNr << endl;
                cout << "version in manifest: " << (const char*)(versionObjects->nodesetval->nodeTab[0]->content) << endl;
                cout << "version in manifest: " << (const char*)versionObjects->nodesetval->nodeTab[0]->name << endl;
                ustring currentVersion = ustring((const char*)versionObjects->nodesetval->nodeTab[0]->content);

                xmlXPathFreeObject(versionObjects);

                if (currentVersion == extensionConfigs[i]->version) 
                {
                    cout << "got the version!!!!" << endl;
                    // downloading the bundles
                    xmlXPathObjectPtr uriObjects = XmlRoutine::findNodeByRelativeXpath(doc2, pluginNodes->nodeTab[j], BAD_CAST "./Uris/Uri/text()");
                    cout << "try to find the version" << endl;
                    string bundleFilePath = string("/var/lib/waagent/Native_") + extensionConfigs[i]->name + "___" + extensionConfigs[i]->version + ".zip";
                    //// get the uri
                    //const char * bundleContent = HttpRoutine::Get((const char*)(uriObjects->nodesetval->nodeTab[0]->content), NULL);
                    HttpRoutine::GetToFile((const char*)(uriObjects->nodesetval->nodeTab[0]->content), NULL, bundleFilePath.c_str());
                    break;
                }
            }
            xmlXPathFreeObject(xpathManifestObj);
            // first try to find the 
            // get the bundle uri from the manifest.
}

    }

#endif
}

void ExtensionsConfig::Process()
{

}

ExtensionsConfig::~ExtensionsConfig()
{
}
