#pragma once
#include <iostream>
#include <sys/types.h>
#include "CommandExecuter.h"
#ifdef _WIN32
#else
#include <pwd.h>
#endif
using namespace std;

class UserManager
{
public:
    UserManager();
    static void CreateUser(const char*userName, const char*passWord);
    ~UserManager();
};

