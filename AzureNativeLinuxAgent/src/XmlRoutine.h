#pragma once
#include <string>

#include <stdio.h>
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
    static string * getNodeText(xmlDocPtr doc, const xmlChar* xpathExpr);
#endif
    ~XmlRoutine();
};