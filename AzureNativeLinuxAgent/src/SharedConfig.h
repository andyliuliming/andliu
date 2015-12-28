#pragma once
#include <string>
using namespace std;
class SharedConfig
{
private:
    string *configFilePath;
public:
    SharedConfig();
    void Parse(string * sharedConfigText);
    void Process();
    ~SharedConfig();
};

