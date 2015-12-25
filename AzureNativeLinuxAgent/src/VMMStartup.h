#pragma once
#include <string>
using namespace std;
class VMMStartup
{
private:
    string VMM_CONFIG_FILE_NAME ;
    string SECURE_MOUNT_POINT;
    string VMM_CONFIG_FILE_FULL_PATH;
    void TryLoadAtapiix();
public:
    VMMStartup();
    void Startup();
    ~VMMStartup();
};

