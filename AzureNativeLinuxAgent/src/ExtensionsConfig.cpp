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
    /*const xmlChar* incarnationXpathExpr = xmlCharStrdup("/GoalState/Incarnation[1]/text()");
    this->incarnation = *(XmlRoutine::getNodeText(doc, incarnationXpathExpr, NULL));
    cout << "incarnation: " << this->incarnation << endl;
    delete incarnationXpathExpr;*/
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

    for (int i = 0; i < this->extensionConfigs.size(); i++) {
        // get the manifest
        string * result = HttpRoutine::Get(this->extensionConfigs[i]->location.c_str(),NULL);
        if (result == NULL)
        {
            result = HttpRoutine::Get(this->extensionConfigs[i]->failoverLocation.c_str(), NULL);
        }

        if (result != NULL) {
            string filepath = string(LIB_DIR) + "Native_" + this->extensionConfigs[i]->name + "." + incarnationStr + ".manifest";
            FileOperator::save_file(result, &filepath);

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
