#pragma once
#include "Macros.h"
#include "NetworkRoutine.h"
#include <string>
using namespace std;
class AzureEnvironment
{
public:
    string wireServerAddress;
    AzureEnvironment();
    int DoDhcpWork();
    int CheckVersion();
    ~AzureEnvironment();
};

