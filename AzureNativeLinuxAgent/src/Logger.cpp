#include "Logger.h"
#include <iostream>
using namespace std;
void Logger::Verbose(const char * msg)
{
    cout << msg << endl;
}

void Logger::Log(const char * msg)
{
    cout << msg << endl;
}
