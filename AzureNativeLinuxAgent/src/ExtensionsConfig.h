#pragma once
#include <string>
#include <vector>
#include "ExtensionConfig.h"
#include "XmlRoutine.h"
using namespace std;
class ExtensionsConfig
{
private:
    vector<ExtensionConfig*> extensionConfigs;
    string statusUploadBlobUri;
    string statusBlobType;
    void DownloadExtractExtensions(xmlDocPtr manifestXmlDoc,int i, const xmlChar* pluginXpathManifestExpr);
public:
    ExtensionsConfig();
    void ReportExtensionsStatus();
    void Parse(string &extensionsConfigText);
    void Process();
    ~ExtensionsConfig();
};

