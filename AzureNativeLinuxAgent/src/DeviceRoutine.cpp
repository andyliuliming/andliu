#include "DeviceRoutine.h"
#include "AgentConfig.h"
#include "Logger.h"

DeviceRoutine::DeviceRoutine()
{
}

void DeviceRoutine::setIsciTimeOut()
{
    AgentConfig::getInstance().LoadConfig(NULL);

    string timeOut = AgentConfig::getInstance().getConfig("OS_RootDeviceScsiTimeout");

    Logger::getInstance().Verbose("timeout set to:");
    Logger::getInstance().Verbose(timeOut.c_str());
}


DeviceRoutine::~DeviceRoutine()
{
}
