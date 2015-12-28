#pragma once
#include <string>
using namespace std;
class ExtensionsConfig
{
public:
    ExtensionsConfig();
    void Parse(string * hostingEnvironmentConfigText);
    void Process();
    ~ExtensionsConfig();
};

