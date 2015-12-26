#include "DeviceRoutine.h"
#include "AgentConfig.h"


DeviceRoutine::DeviceRoutine()
{
}

void DeviceRoutine::setIsciTimeOut()
{
    AgentConfig::getInstance().LoadConfig(NULL);
}


DeviceRoutine::~DeviceRoutine()
{
}
