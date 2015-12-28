#pragma once
#include <string>
using namespace std;
#ifdef _WIN32
//windows code goes here
#else
//linux code goes here
#include <libconfig.h++>
using namespace libconfig;
#endif
class AgentConfig
{
public:
    static AgentConfig& getInstance()
    {
        static AgentConfig    instance;
        return instance;
    }
    void LoadConfig(const char * configFile);
    string getConfig(const char * propertyName);
private:
    AgentConfig() {
    }
#ifdef _WIN32
#else
    Config *config;
#endif
    AgentConfig(AgentConfig const&);              // Don't Implement.
    ~AgentConfig() {
    };
    void operator=(AgentConfig const&); // Don't implement
};

