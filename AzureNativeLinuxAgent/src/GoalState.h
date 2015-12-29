#pragma once
#include <string>
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
    GoalState();
    void UpdateGoalState();
    void Process();
    ~GoalState();
};

