#pragma once
#include <string>
using namespace std;
class CommandResult
{
public:
    int exitCode;
    string *output;
    CommandResult();
    ~CommandResult();
};

