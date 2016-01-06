#include <stdio.h>
#include <cstdarg>
#ifdef _WIN32
#else
#include <syslog.h>
#include <unistd.h>
#endif
#include "Logger.h"
using namespace std;
void Logger::Verbose(const char * msg, ...)
{
    va_list arguments;                     // A place to store the list of arguments
    double sum = 0;
    va_start(arguments, msg);           // Initializing arguments to store all values after num
#ifdef _WIN32
#else
    syslog(LOG_DEBUG, msg, arguments);
#endif
    va_end(arguments);                  // Cleans up the list
}

void Logger::Log(const char * msg, ...)
{
    va_list arguments;                     // A place to store the list of arguments
    double sum = 0;
    va_start(arguments, msg);           // Initializing arguments to store all values after num
#ifdef _WIN32
#else
    syslog(LOG_INFO, msg, arguments);
#endif
    va_end(arguments);                  // Cleans up the list
}

void Logger::Warning(const char * msg, ...)
{
    va_list arguments;                     // A place to store the list of arguments
    double sum = 0;
    va_start(arguments, msg);           // Initializing arguments to store all values after num
#ifdef _WIN32
#else
    syslog(LOG_WARNING, msg, arguments);
#endif
    va_end(arguments);                  // Cleans up the list
}

void Logger::Error(const char * msg, ...) {
    {
        va_list arguments;                     // A place to store the list of arguments
        double sum = 0;
        va_start(arguments, msg);           // Initializing arguments to store all values after num
#ifdef _WIN32
#else
        syslog(LOG_ERR, msg, arguments);
#endif
        va_end(arguments);                  // Cleans up the list
    }
}
