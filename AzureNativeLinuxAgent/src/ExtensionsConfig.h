#pragma once
#include <string>
#include <vector>
#include "ExtensionConfig.h"
using namespace std;
class ExtensionsConfig
{
private:
    vector<ExtensionConfig*> extensionConfigs;
public:
    ExtensionsConfig();
    void Parse(string * extensionsConfigText);
    void Process();
    ~ExtensionsConfig();
};

