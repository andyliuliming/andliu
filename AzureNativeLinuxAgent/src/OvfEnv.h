#pragma once
#include <string>
using namespace std;

class OvfEnv
{
private:
    string *configFilePath;
public:
    OvfEnv(); 
    void Parse(string * sharedConfigText);
    void Process();
    ~OvfEnv();
};

