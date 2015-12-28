#pragma once
#include <string>
using namespace std;
class HostingEnvironmentConfig
{
private:
    string *configFilePath;
public:
    HostingEnvironmentConfig();
    void Parse(string * hostingEnvironmentConfigText);
    void Process();

    ~HostingEnvironmentConfig();
};

