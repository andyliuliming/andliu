#pragma once
#include <string>
using namespace std;
class VMMStartup
{
private:
    void TryLoadAtapiix();
public:
    VMMStartup();
    void Startup();
    ~VMMStartup();
};

