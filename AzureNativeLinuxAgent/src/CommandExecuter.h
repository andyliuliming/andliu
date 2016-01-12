#pragma once
#include <memory>
#include <string>
#include <vector>
#include "CommandResult.h"
using namespace std;

typedef shared_ptr<CommandResult> CommandResultPtr;
class CommandExecuter
{
public:
    CommandExecuter();
    static void PosixSpawn(const char* cmd, const char* cwd);
    static CommandResultPtr RunGetOutput(const char* cmd);
    ~CommandExecuter();
};

