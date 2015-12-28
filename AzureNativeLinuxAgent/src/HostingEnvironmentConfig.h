#pragma once
#include <string>
using namespace std;
class HostingEnvironmentConfig
{
public:
    HostingEnvironmentConfig();
    void Process();
    void Parse(string * hostingEnvironmentConfigText);
    ~HostingEnvironmentConfig();
};

