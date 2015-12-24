#pragma once
class GoalState
{
public:
    GoalState();
    void Parse(const char * goalStateXmlContent);
    ~GoalState();
};

