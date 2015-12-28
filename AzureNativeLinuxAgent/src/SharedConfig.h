#pragma once
#include <string>
using namespace std;
class SharedConfig
{
public:
    SharedConfig();
    void Parse(string * hostingEnvironmentConfigText);
    void Process();
    ~SharedConfig();
};

