#include <iostream>
#include "Logger.h"
using namespace std;
void Logger::Verbose(const char * msg)
{
    cout << msg << endl;
}

void Logger::Log(const char * msg)
{
    cout << msg << endl;
}
