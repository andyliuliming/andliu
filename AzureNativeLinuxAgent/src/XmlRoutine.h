#pragma once
#include <map>
#include <stdio.h>
#include <string>
#ifdef _WIN32
//windows code goes here
#else
//linux code goes here
#include <libxml/xmlreader.h>
#include <libxml/xmlmemory.h>
#include <libxml/tree.h>
#include <libxml/parser.h>
#include <libxml/xpath.h>
#include <libxml/xpathInternals.h>
#endif
using namespace std;

class XmlRoutine
{
public:
    XmlRoutine();
#ifdef _WIN32
    //windows code goes here
#else
    static xmlXPathObjectPtr getNodes(xmlDocPtr doc, const xmlChar* xpathExpr, map<string, string> * namespaces);
    static string * getNodeText(xmlDocPtr doc, const xmlChar* xpathExpr, map<string, string> * namespaces);
#endif
    ~XmlRoutine();
};