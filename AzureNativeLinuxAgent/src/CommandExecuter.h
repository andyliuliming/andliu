#pragma once
#include <string>
#include <vector>
#include "CommandResult.h"
class CommandExecuter
{
public:
    CommandExecuter();
    static CommandResult * RunGetOutput(const char* cmd);
    ~CommandExecuter();
};

