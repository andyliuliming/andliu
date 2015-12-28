#include <string>
#include "HostingEnvironmentConfig.h"
#include "FileOperator.h"
using namespace std;
HostingEnvironmentConfig::HostingEnvironmentConfig()
{
    configFilePath = new string("/var/lib/waagent/Native_HostingEnvironmentConfig.xml");
}
void HostingEnvironmentConfig::Parse(string * hostingEnvironmentConfigText)
{
    FileOperator::save_file(hostingEnvironmentConfigText, configFilePath);
}
void HostingEnvironmentConfig::Process()
{
}


HostingEnvironmentConfig::~HostingEnvironmentConfig()
{
}
