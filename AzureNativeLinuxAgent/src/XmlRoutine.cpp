#include <iostream>
#include "XmlRoutine.h"
using namespace std;

XmlRoutine::XmlRoutine()
{
}
#ifdef _WIN32
//windows code goes here
#else
xmlXPathObjectPtr XmlRoutine::getNodes(xmlDocPtr doc, const xmlChar* xpathExpr, map<string, string> * namespaces)
{
    xmlXPathContextPtr xpathCtx;
    xmlXPathObjectPtr xpathObj;
    xpathCtx = xmlXPathNewContext(doc);
    if (xpathCtx == NULL) {
        fprintf(stderr, "Error: unable to create new XPath context\n");
        return NULL;
    }

    if (namespaces != NULL) {
        for (std::map<string, string>::iterator it = namespaces->begin(); it != namespaces->end(); ++it)
        {
            if (xmlXPathRegisterNs(xpathCtx, BAD_CAST it->first.c_str(), BAD_CAST it->second.c_str()) != 0) {
                fprintf(stderr, "Error: unable to register NS with prefix");
            }
        }
    }

    xpathObj = xmlXPathEvalExpression(xpathExpr, xpathCtx);
    if (xpathObj == NULL) {
        fprintf(stderr, "Error: unable to evaluate xpath expression \"%s\"\n", xpathExpr);
        return NULL;
    }

    xmlXPathFreeContext(xpathCtx);
    return xpathObj;
}

string * XmlRoutine::getNodeText(xmlDocPtr doc, const xmlChar* xpathExpr, map<string,string> * namespaces)
{
    string * result = NULL;

    /* Evaluate xpath expression */
    //
    xmlXPathObjectPtr xpathObj = getNodes(doc, xpathExpr, namespaces);
    if (xpathObj == NULL) {
        fprintf(stderr, "Error: unable to evaluate xpath expression \"%s\"\n", xpathExpr);
        return NULL;
    }
    else
    {
        if (xpathObj->nodesetval == NULL) {
            fprintf(stderr, "Error: node set is null for \"%s\"\n", xpathExpr);
            return NULL;
        }
        xmlNodeSetPtr nodes = xpathObj->nodesetval;
        cout << "nodes->nodeNr is: " << nodes->nodeNr << endl;
        cout << "nodes content :" << nodes->nodeTab[0]->content << endl;
        result = new string((const char*)nodes->nodeTab[0]->content);
        xmlXPathFreeObject(xpathObj);
        return result;
    }
}
#endif

XmlRoutine::~XmlRoutine()
{
}