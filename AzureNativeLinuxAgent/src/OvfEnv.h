#pragma once
#include <string>
using namespace std;

class OvfEnv
{
private:
    string userName;
    string passWord;
    string disableSshPasswordAuthentication;
    string customData;
    int majorVersion = 1;
    int minorVersion = 0;
public:
    OvfEnv(); 
    int Parse(string &sharedConfigText);
    int Process();
    ~OvfEnv();
};

