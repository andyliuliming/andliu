#pragma once
#include "CommandExecuter.h"
#ifdef _WIN32
#elif defined BSD
#else
#include <libudev.h>
#endif
class DeviceRoutine
{
public:
    DeviceRoutine();
    static void setIsciTimeOut();
    static string* findRomDevice();
    ~DeviceRoutine();
};

