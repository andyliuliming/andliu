#pragma once
#include <string>
#include "XmlRoutine.h"
using namespace std;
class ExtensionConfig
{
public:
    string autoUpgrade;
    string failoverLocation;
    string location;
    string name;
    string runAsStartupTask;
    string isJson;
    string state;
    string version;
    string RuntimeSettings;

    void PrepareExtensionPackage(string &incarnationStr);
    void DownloadExtractExtensions(xmlDocPtr manifestXmlDoc, const char* pluginXpathManifestExpr);

    ExtensionConfig();
    ~ExtensionConfig();
};

