#pragma once
#ifdef _WIN32
#else
#include <syslog.h>
#endif
class Logger
{
public:
    static Logger& getInstance()
    {
        static Logger instance;
        return instance;
    }
    void Verbose(const char *msg);
    void Log(const char *msg);
private:
    Logger() {
#ifdef _WIN32
#else
        setlogmask(LOG_UPTO(LOG_NOTICE));
        openlog("AzureNativeLinuxAgent", LOG_CONS | LOG_PID | LOG_NDELAY, LOG_LOCAL1);

        
#endif
    }
    Logger(Logger const&);              // Don't Implement.
    ~Logger() {
#ifdef _WIN32
#else
        closelog();
#endif
    }
    void operator=(Logger const&); // Don't implement
};
