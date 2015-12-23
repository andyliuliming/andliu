#pragma once
#include <string>
#include <vector>
#include "CommandResult.h"
class CommandExecuter
{
public:
    CommandExecuter();
    CommandResult * RunGetOutput(const char* cmd);
    ~CommandExecuter();
};

