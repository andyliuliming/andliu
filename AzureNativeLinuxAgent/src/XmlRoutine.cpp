
#include "Logger.h"
#include "XmlRoutine.h"
using namespace std;

XmlRoutine::XmlRoutine()
{
}
#ifdef _WIN32
//windows code goes here
#else
xmlXPathObjectPtr XmlRoutine::findNodeByRelativeXpath(xmlDocPtr doc, xmlNodePtr rootnode, const xmlChar * xpathExpr)
{
    xmlXPathContextPtr xpathCtx = xmlXPathNewContext(doc);
    // Important part
    xpathCtx->node = rootnode;
    xmlXPathObjectPtr xpathObj = xmlXPathEvalExpression(xpathExpr, xpathCtx);
    xmlXPathFreeContext(xpathCtx);
    return xpathObj;
}

xmlNodePtr XmlRoutine::findNodeByName(xmlNodePtr rootnode, const xmlChar * nodename)
{
    xmlNodePtr node = rootnode;
    if (node == NULL)
    {
        return NULL;
    }

    while (node != NULL)
    {
        if (!xmlStrcmp(node->name, nodename))
        {
            return node;
        }
        else if (node->children != NULL)
        {
            xmlNodePtr intNode = findNodeByName(node->children, nodename);
            if (intNode != NULL)
            {
                return intNode;
            }
        }
        node = node->next;
    }
    return NULL;
}

xmlXPathObjectPtr XmlRoutine::getNodes(xmlDocPtr doc, const xmlChar* xpathExpr, map<string, string> * namespaces)
{
    xmlXPathContextPtr xpathCtx;
    xmlXPathObjectPtr xpathObj;
    xpathCtx = xmlXPathNewContext(doc);
    if (xpathCtx == NULL)
    {
        Logger::getInstance().Error("Error: unable to create new XPath context");
        return NULL;
    }

    if (namespaces != NULL)
    {
        for (std::map<string, string>::iterator it = namespaces->begin(); it != namespaces->end(); ++it)
        {
            if (xmlXPathRegisterNs(xpathCtx, BAD_CAST it->first.c_str(), BAD_CAST it->second.c_str()) != 0)
            {
                Logger::getInstance().Error("Error: unable to register NS with prefix");
            }
        }
    }

    xpathObj = xmlXPathEvalExpression(xpathExpr, xpathCtx);
    if (xpathObj == NULL)
    {
        Logger::getInstance().Error("Error: unable to evaluate xpath expression \"%s\"\n", xpathExpr);
        return NULL;
    }

    xmlXPathFreeContext(xpathCtx);
    return xpathObj;
}

string * XmlRoutine::getNodeText(xmlDocPtr doc, const xmlChar* xpathExpr, map<string, string> * namespaces)
{
    string * result = NULL;

    /* Evaluate xpath expression */
    //
    xmlXPathObjectPtr xpathObj = getNodes(doc, xpathExpr, namespaces);
    if (xpathObj == NULL)
    {
        Logger::getInstance().Error("Error: unable to evaluate xpath expression \"%s\"", xpathExpr);
        return NULL;
    }
    else
    {
        if (xpathObj->nodesetval == NULL)
        {
            Logger::getInstance().Error("Error: node set is null for \"%s\"", xpathExpr);
            return NULL;
        }
        xmlNodeSetPtr nodes = xpathObj->nodesetval;
        result = new string((const char*)nodes->nodeTab[0]->content);
        xmlXPathFreeObject(xpathObj);
        return result;
    }
}
#endif

XmlRoutine::~XmlRoutine()
{
}