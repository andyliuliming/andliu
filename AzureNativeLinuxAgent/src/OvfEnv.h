#pragma once
#include <string>
using namespace std;

class OvfEnv
{
private:
    string userName;
    string passWord;
    string disableSshPasswordAuthentication;
public:
    OvfEnv(); 
    void Parse(string &sharedConfigText);
    void Process();
    ~OvfEnv();
};

