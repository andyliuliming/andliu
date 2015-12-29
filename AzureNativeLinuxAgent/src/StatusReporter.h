#pragma once
class StatusReporter
{
public:
    StatusReporter();
    void ReportReady();
    void ReportNotReady();
    ~StatusReporter();
};

