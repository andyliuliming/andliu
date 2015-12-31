#pragma once
#include <string>
using namespace std;
class ExtensionsConfig
{
private:
public:
    ExtensionsConfig();
    void Parse(string * extensionsConfigText);
    void Process();
    ~ExtensionsConfig();
};

