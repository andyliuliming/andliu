#pragma once
#include "Macros.h"
#include "NetworkRoutine.h"
class AzureEnvironment
{
public:
    AzureEnvironment();
    void DoDhcpWork();
    ~AzureEnvironment();
};

