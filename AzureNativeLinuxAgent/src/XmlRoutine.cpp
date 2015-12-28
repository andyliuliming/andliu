#include "XmlRoutine.h"

#include <iostream>
using namespace std;

XmlRoutine::XmlRoutine()
{
}
#ifdef _WIN32
//windows code goes here
#else
string * XmlRoutine::getNodeText(xmlDocPtr doc, const xmlChar* xpathExpr)
{
    string * result = NULL;
    xmlXPathContextPtr xpathCtx;
    xmlXPathObjectPtr xpathObj;
    xpathCtx = xmlXPathNewContext(doc);
    if (xpathCtx == NULL) {
        fprintf(stderr, "Error: unable to create new XPath context\n");
        return result;
    }

    /* Evaluate xpath expression */
    //
    xpathObj = xmlXPathEvalExpression(xpathExpr, xpathCtx);
    if (xpathObj == NULL) {
        fprintf(stderr, "Error: unable to evaluate xpath expression \"%s\"\n", xpathExpr);
        xmlXPathFreeContext(xpathCtx);
        return result;
    }
    else
    {
        if (xpathObj->nodesetval == NULL) {
            fprintf(stderr, "Error: node set is null for \"%s\"\n", xpathExpr);
            xmlXPathFreeContext(xpathCtx);
            return NULL;
        }
        xmlNodeSetPtr nodes = xpathObj->nodesetval;
        cout << "nodes->nodeNr is: " << nodes->nodeNr << endl;
        cout << "nodes content :" << nodes->nodeTab[0]->content << endl;
        result = new string((const char*)nodes->nodeTab[0]->content);
        xmlXPathFreeObject(xpathObj);
        xmlXPathFreeContext(xpathCtx);
        return result;
    }
}
#endif

XmlRoutine::~XmlRoutine()
{
}