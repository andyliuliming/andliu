#pragma once
#include <string>
using namespace std;

class HandlerManifest
{
public:
    string installCommand;
    string enableCommand;
    HandlerManifest();
    ~HandlerManifest();
};

