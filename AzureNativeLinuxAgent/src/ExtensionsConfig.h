#pragma once
#include <string>
#include <vector>
#include "ExtensionConfig.h"
using namespace std;
class ExtensionsConfig
{
private:
    vector<ExtensionConfig*> extensionConfigs;
    string statusUploadBlobUri;
    string statusBlobType;
public:
    ExtensionsConfig();
    void Parse(string * extensionsConfigText);
    void Process();
    ~ExtensionsConfig();
};

