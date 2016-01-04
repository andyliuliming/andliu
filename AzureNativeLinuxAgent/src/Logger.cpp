#include <iostream>
#include <stdio.h>
#ifdef _WIN32
#else
#include <syslog.h>
#include <unistd.h>
#endif
#include "Logger.h"
using namespace std;
void Logger::Verbose(const char * msg)
{
#ifdef _WIN32
#else
    syslog(LOG_NOTICE, msg);
#endif
}

void Logger::Log(const char * msg)
{
#ifdef _WIN32
#else
    syslog(LOG_INFO, msg);
#endif
}
