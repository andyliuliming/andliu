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
    static void PosixSpawn(string& cmd, string &cwd);
    static CommandResultPtr RunGetOutput(string &cmd);
    static CommandResultPtr RunGetOutput(const char* cmd);
    ~CommandExecuter();
};

