#pragma once
#include <string>
using namespace std;

class GoalState
{
private:
    string * certificates;
    string * configName;
    string * containerId;
    string * extensionsConfig;
    string * fullConfig;
    string * hostingEnvironmentConfig;
    string * incarnation;
    string * roleInstanceId;
    string * sharedConfig;
public:
    GoalState();
    void UpdateGoalState();
    void Process();
    ~GoalState();
};

