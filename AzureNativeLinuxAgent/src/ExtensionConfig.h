#pragma once
#include <string>
#include "XmlRoutine.h"
using namespace std;
class ExtensionConfig
{
private:
    void DownloadExtractExtensions(xmlDocPtr manifestXmlDoc, const char* pluginXpathManifestExpr);
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
    void Process();
    void SaveHandlerStatus();
    void SavePluginSettings(string &seqNo,string &settings);
    ExtensionConfig();
    ~ExtensionConfig();
};

