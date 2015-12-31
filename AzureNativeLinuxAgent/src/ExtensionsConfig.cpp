#include "ExtensionsConfig.h"
#include "FileOperator.h"
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


#endif
}

void ExtensionsConfig::Process()
{

}

ExtensionsConfig::~ExtensionsConfig()
{
}
