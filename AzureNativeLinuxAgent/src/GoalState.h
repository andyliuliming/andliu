#pragma once
#include <string>
using namespace std;

class GoalState
{
private:
    string roleInstanceId;
    string incarnation;
    string containerId;
public:
    GoalState();
    void UpdateGoalState();
    void Parse(const char * goalStateXmlContent);
    ~GoalState();
};

