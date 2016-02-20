#pragma once
#include <string>
#include <map>
using namespace std;

class OvfEnv
{
private:
    string hostName;
    string userName;
    string passWord;
    string disableSshPasswordAuthentication;
    string customData;
    string fingerPrint;
    map<string, string> SshPublicKeys;
    int majorVersion = 1;
    int minorVersion = 0;
public:
    OvfEnv(); 
    int Parse(string &sharedConfigText);
    int Process();
    ~OvfEnv();
};

