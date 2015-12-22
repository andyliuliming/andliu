#include "CommandExecuter.h"
#include "Macros.h"
#include <string>
#include <iostream>
#include <cstdio>
#include <stdio.h>
#include <memory>
CommandExecuter::CommandExecuter()
{
}

std::string CommandExecuter::exec(const char* cmd) {
    std::shared_ptr<FILE> pipe(POPEN(cmd, "r"), PCLOSE);
    if (!pipe) return "ERROR";
    char buffer[128];
    std::string result = "";
    while (!feof(pipe.get())) {
        if (fgets(buffer, 128, pipe.get()) != NULL)
            result += buffer;
    }
    return result;
}

CommandExecuter::~CommandExecuter()
{
}
