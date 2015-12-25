#pragma once
#include <string>
using namespace std;
class NetworkRoutine
{
public:
    NetworkRoutine();
    string GetMacAddress();
    bool isDHCPEnabled();
    void stopDHCP();
    ~NetworkRoutine();
};

