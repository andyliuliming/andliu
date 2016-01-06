#include <iostream>
#include "AgentConfig.h"
#include "Logger.h"
using namespace std;

void AgentConfig::LoadConfig()
{
#ifdef _WIN32
    //windows code goes here
#else
    //linux code goes here
    if (this->config != NULL) {
        delete this->config;
        this->config = NULL;
    }
    this->config = new Config();
    // Read the file. If there is an error, report it and exit.
    try
    {
        this->config->readFile("/etc/waagent_native.conf");
    }
    catch (const FileIOException &fioex)
    {
        Logger::getInstance().Error("I/O error while reading file.");
    }
#endif
}

string * AgentConfig::getConfig(const char * propertyName)
{
    string *result = NULL;
#ifdef _WIN32
    return result;
#else
    try
    {
        Setting &propertyValue = this->config->lookup(propertyName);
        result = new string(propertyValue.c_str());
    }
    catch (SettingNotFoundException e)
    {
        Logger::getInstance().Error("SettingNotFoundException");
    }
    return result;
#endif
}
