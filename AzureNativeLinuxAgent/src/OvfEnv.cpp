#include "OvfEnv.h"
#include "FileOperator.h"


OvfEnv::OvfEnv()
{
    configFilePath = new string("/var/lib/waagent/Native_ovf-env.xml");
}

void OvfEnv::Parse(string * sharedConfigText)
{
    FileOperator::save_file(sharedConfigText, configFilePath);
}

void OvfEnv::Process()
{
}

OvfEnv::~OvfEnv()
{
    if (configFilePath != NULL) {
        delete configFilePath;
        configFilePath = NULL;
    }
}
