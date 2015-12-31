#pragma once
#include <string>
using namespace std;
class ExtensionConfig
{
public:
    bool isJson;
    string failoverLocation;
    string location;
    string name;
    string state;
    string version;
    ExtensionConfig();
    ~ExtensionConfig();
};

