#include "AgentConfig.h"
using namespace std;
#include <iostream>
#ifdef _WIN32
//windows code goes here

#else
//linux code goes here

#include <libconfig.h++>

using namespace libconfig;
#endif

AgentConfig::AgentConfig()
{

}

void AgentConfig::LoadConfig(const char * configFile)
{
    #ifdef _WIN32
        //windows code goes here
    #else
        //linux code goes here
        Config cfg;

        // Read the file. If there is an error, report it and exit.
        try
        {
            cfg.readFile("example.cfg");
        }
        catch (const FileIOException &fioex)
        {
            std::cerr << "I/O error while reading file." << std::endl;
        }
    #endif
}


AgentConfig::~AgentConfig()
{
}
