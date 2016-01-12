#include <cstdio>
#include <memory>
#include <spawn.h>
#include <stdio.h>
#include <string>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>

#include "CommandExecuter.h"
#include "CommandResult.h"
#include "Logger.h"
#include "Macros.h"
using namespace std;

CommandExecuter::CommandExecuter()
{
}

void CommandExecuter::PosixSpawn(const char* cmd,const char* cwd)
{
    pid_t pid;
    int status;
    pid = fork();
    if (pid == 0)
    {
        int chDirResult = chdir(cwd);
        CommandResultPtr installResult = CommandExecuter::RunGetOutput(cmd);
        if (installResult->exitCode != 0)
        {
            Logger::getInstance().Error("subprocess exit with code:%d, output:%s", installResult->exitCode, installResult->output->c_str());
        }
        exit(installResult->exitCode);
    }
    else
    {
        if (waitpid(pid, &status, 0) != -1)
        {
            Logger::getInstance().Log("Child exited with status %i", status);
        }
        else
        {
            Logger::getInstance().Error("waitpid failed");
        }

    }
}

CommandResultPtr CommandExecuter::RunGetOutput(const char* cmd) {
    CommandResultPtr commandResult = make_shared<CommandResult>();
    FILE* pipe = POPEN(cmd, "r");
    if (!pipe)
    {
        commandResult->exitCode = 1;
        return commandResult;
    }
    char buffer[128];
    string *result = new string();

    while (!feof(pipe))
    {
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
