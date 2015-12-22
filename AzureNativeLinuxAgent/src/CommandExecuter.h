#pragma once
#include <string>
#include <vector>
class CommandExecuter
{
public:
    CommandExecuter();
    std::string exec(const char* cmd);
    ~CommandExecuter();
};

