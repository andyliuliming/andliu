#pragma once

class AgentConfig
{
public:
    static AgentConfig& getInstance()
    {
        static AgentConfig    instance;
        return instance;
    }
private:
    AgentConfig() {
    }
    AgentConfig(AgentConfig const&);              // Don't Implement.
    void LoadConfig(const char * configFile);
    void operator=(AgentConfig const&); // Don't implement
};

