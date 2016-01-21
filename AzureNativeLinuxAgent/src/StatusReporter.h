#pragma once
#include "AzureEnvironment.h"
#include "GoalState.h"
class StatusReporter
{
public:
    StatusReporter();
    int ReportReady(AzureEnvironment& environment, GoalState & goalState, string &incarnationValue);
    int ReportNotReady(AzureEnvironment& environment, GoalState & goalState, const char*status, const char*desc);
    int ReportRoleProperties(AzureEnvironment& environment, GoalState& goalState, const char* thumbprint);
    ~StatusReporter();
};

