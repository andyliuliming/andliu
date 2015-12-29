#include <string>
#include "FileOperator.h"
#include "HostingEnvironmentConfig.h"
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
