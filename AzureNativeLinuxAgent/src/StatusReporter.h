#pragma once
#include "AzureEnvironment.h"
#include "GoalState.h"
class StatusReporter
{
public:
    StatusReporter();
    string ReportReady(AzureEnvironment* environment, GoalState * goalState);
    void ReportNotReady(AzureEnvironment* environment, GoalState * goalState, const char*status, const char*desc);
    void ReportRoleProperties(AzureEnvironment* environment, GoalState* goalState, const char* thumbprint);
    ~StatusReporter();
};

