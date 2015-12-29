#include <iostream>
#include "AgentConfig.h"
using namespace std;

void AgentConfig::LoadConfig(const char * configFile)
{
#ifdef _WIN32
    //windows code goes here
#else
    //linux code goes here
    this->config = new Config();
    // Read the file. If there is an error, report it and exit.
    try
    {
        this->config->readFile("./waagent.conf");
    }
    catch (const FileIOException &fioex)
    {
        std::cerr << "I/O error while reading file." << std::endl;
    }
#endif
}

string AgentConfig::getConfig(const char * propertyName)
{
#ifdef _WIN32
    return string();
#else
    return this->config->lookup(propertyName);
#endif
}
