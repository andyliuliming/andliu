#include <string>
#include <iostream>
#include <cstdio>
#include <stdio.h>
#include <memory>
#include "CommandExecuter.h"
#include "Macros.h"
#include "CommandResult.h"
CommandExecuter::CommandExecuter()
{
}

CommandResult * CommandExecuter::RunGetOutput(const char* cmd) {
    CommandResult *commandResult = new CommandResult();
    std::shared_ptr<FILE> pipe(POPEN(cmd, "r"), PCLOSE);
    if (!pipe)
    {
        commandResult->exitCode = 1;
        return commandResult;
    }
    char buffer[128];
    std::string result = "";
    while (!feof(pipe.get())) {
        if (fgets(buffer, 128, pipe.get()) != NULL)
            result += buffer;
    }
    FILE *f = pipe.get();
    int returnCode = PCLOSE(f);
    commandResult->exitCode = returnCode;
    commandResult->output = &result;
    return commandResult;
}

CommandExecuter::~CommandExecuter()
{
}
