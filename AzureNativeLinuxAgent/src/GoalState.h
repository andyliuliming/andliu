#pragma once


class GoalState
{
public:
    GoalState();
    void UpdateGoalState();
    void Parse(const char * goalStateXmlContent);
    ~GoalState();
};

