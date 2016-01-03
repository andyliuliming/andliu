#include <iostream>
#include "AgentConfig.h"
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
        std::cerr << "I/O error while reading file." << std::endl;
    }
#endif
}

string * AgentConfig::getConfig(const char * propertyName)
{
    string *result = NULL;
#ifdef _WIN32
    return result;
#else
    try {
        string propertyValue =  this->config->lookup(propertyName);
        result = new string(propertyValue);
    }
    catch (SettingNotFoundException e) {
        std::cerr << "SettingNotFoundException" << endl;
    }
    return result;
#endif
}
