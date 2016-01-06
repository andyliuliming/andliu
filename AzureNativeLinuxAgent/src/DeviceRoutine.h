#pragma once
#include "CommandExecuter.h"
#ifndef _WIN32
#include <dirent.h> 
#include <sys/param.h>
#endif

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


