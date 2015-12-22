#pragma once
#include <string>
class CommandExecuter
{
public:
    CommandExecuter();
    std::string exec(const char* cmd);
    ~CommandExecuter();
};

