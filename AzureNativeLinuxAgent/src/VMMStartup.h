#pragma once
#include <string>
using namespace std;
class VMMStartup
{
private:
    string VMM_CONFIG_FILE_NAME ;
    void TryLoadAtapiix();
public:
    VMMStartup();
    void Startup();
    ~VMMStartup();
};

