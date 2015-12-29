#pragma once
#include "AzureEnvironment.h"
#include "GoalState.h"
class StatusReporter
{
public:
    StatusReporter();
    void ReportReady(AzureEnvironment* environment,GoalState * goalState);
    void ReportNotReady(AzureEnvironment* environment, GoalState * goalState, const char*status, const char*desc);
    ~StatusReporter();
};

