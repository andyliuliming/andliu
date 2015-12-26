#pragma once

class AgentConfig
{
public:
    static AgentConfig& getInstance()
    {
        static AgentConfig    instance;
        return instance;
    }
    void LoadConfig(const char * configFile);
private:
    AgentConfig() {
    }
    AgentConfig(AgentConfig const&);              // Don't Implement.
    void operator=(AgentConfig const&); // Don't implement
};

