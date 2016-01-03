#pragma once
class HandlerManifest
{
public:
    const char*installCommand;
    const char*enableCommand;
    HandlerManifest();
    ~HandlerManifest();
};

