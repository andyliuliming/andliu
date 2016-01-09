#include <cstdio>

#include <memory>
#include <stdio.h>
#include <string>

#include "CommandExecuter.h"
#include "CommandResult.h"
#include "Macros.h"
using namespace std;

CommandExecuter::CommandExecuter()
{
}

CommandResultPtr CommandExecuter::RunGetOutput(const char* cmd) {
    CommandResultPtr commandResult = make_shared<CommandResult>();
    FILE* pipe = POPEN(cmd, "r");
    if (!pipe)
    {
        commandResult.get()->exitCode = 1;
        return commandResult;
    }
    char buffer[128];
    string *result = new string();

    while (!feof(pipe)) {
        if (fgets(buffer, 128, pipe) != NULL)
        {
            result->append(buffer);
        }
    }
    int returnCode = PCLOSE(pipe);
    commandResult->exitCode = returnCode;
    commandResult->output = result;
    return commandResult;
}

CommandExecuter::~CommandExecuter()
{
}
