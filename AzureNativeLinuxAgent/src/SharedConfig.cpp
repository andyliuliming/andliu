
#include "FileOperator.h"
#include "SharedConfig.h"

SharedConfig::SharedConfig()
{
    configFilePath = new string("/var/lib/waagent/Native_SharedConfig.xml");
}

void SharedConfig::Parse(string * sharedConfigText)
{
    FileOperator::save_file(sharedConfigText, configFilePath);
}
void SharedConfig::Process()
{
}


SharedConfig::~SharedConfig()
{
}
