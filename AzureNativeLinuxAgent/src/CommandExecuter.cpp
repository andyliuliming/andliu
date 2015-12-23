#include <string>
#include <iostream>
#include <cstdio>
#include <stdio.h>
#include <memory>
#include "CommandExecuter.h"
#include "Macros.h"
#include "CommandResult.h"
using namespace std;

CommandExecuter::CommandExecuter()
{
}

CommandResult * CommandExecuter::RunGetOutput(const char* cmd) {
    CommandResult *commandResult = new CommandResult();
    FILE* pipe = POPEN(cmd, "r");
    //std::shared_ptr<FILE> pipe(POPEN(cmd, "r"), PCLOSE);
    if (!pipe)
    {
        commandResult->exitCode = 1;
        return commandResult;
    }
    char buffer[128];
    string *result = new string();

    while (!feof(pipe)) {
        if (fgets(buffer, 128, pipe) != NULL)
            result->append(buffer);
    }
    int returnCode = PCLOSE(pipe);
    commandResult->exitCode = returnCode;
    commandResult->output = result;
    return commandResult;
}

CommandExecuter::~CommandExecuter()
{
}
