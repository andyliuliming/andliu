#pragma once
#include <string>
using namespace std;

class GoalState
{
private:
    string * roleInstanceId;
    string * incarnation;
    string * containerId;
    string * hostingEnvironmentConfig;
    string * sharedConfig;
public:
    GoalState();
    void UpdateGoalState();
    ~GoalState();
};

