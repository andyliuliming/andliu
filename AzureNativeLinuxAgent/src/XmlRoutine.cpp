
#include "Logger.h"
#include "XmlRoutine.h"
using namespace std;

XmlRoutine::XmlRoutine()
{
}

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

void XmlRoutine::getNodeContent(xmlNodePtr node, string &value)
{
    const char* runtimeSettingsText = (const char*)xmlNodeGetContent(node);
    value = string(runtimeSettingsText);
    delete runtimeSettingsText;
    runtimeSettingsText = NULL;
}

void XmlRoutine::getNodeProperty(xmlNodePtr node, const char* propertyName, string&value)
{
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

    xmlChar * propertyDup = xmlCharStrdup(propertyName);
    xmlChar * incarnation = xmlGetProp(node, propertyDup);
    //TODO error handling when the incarnation is not there.
    value = string((const char*)incarnation);
    delete incarnation;
    incarnation = NULL;
    delete propertyDup;
    propertyDup = NULL;

    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
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

XmlRoutine::~XmlRoutine()
{
}