#pragma once
#include <string>
#include "AzureEnvironment.h"
#include "ExtensionsConfig.h"
#include "HostingEnvironmentConfig.h"
#include "SharedConfig.h"
using namespace std;

class GoalState
{
public:
    string  certificatesUrl;
    string  configName;
    string  containerId;
    string  extensionsConfigUrl;
    string  fullConfigUrl;
    string  hostingEnvironmentConfigUrl;
    string  incarnation;
    string  roleInstanceId;
    string  sharedConfigUrl;
    string goalStageFilePrefix;
    HostingEnvironmentConfig * hostingEnvironmentConfig;
    SharedConfig *sharedConfig;
    ExtensionsConfig *extensionsConfig;
    GoalState();
    void UpdateGoalState(AzureEnvironment *azureEnvironment);
    void Process();
    ~GoalState();
};

