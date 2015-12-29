#pragma once
#include "CommandExecuter.h"
#ifdef _WIN32
#else
#include <libudev.h>
#endif
class DeviceRoutine
{
public:
    DeviceRoutine();
    static void setIsciTimeOut();
    static void findRomDevice();
    ~DeviceRoutine();
};

