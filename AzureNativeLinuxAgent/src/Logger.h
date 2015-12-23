#pragma once
class Logger
{
public:
    static Logger& getInstance()
    {
        static Logger    instance;
        return instance;
    }
    void Verbose(const char *msg);
    void Log(const char *msg);
private:
    Logger() {
    }
    Logger(Logger const&);              // Don't Implement.
    void operator=(Logger const&); // Don't implement
};
