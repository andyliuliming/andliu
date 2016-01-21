#pragma once
#include "HandlerManifest.h"
#include <json-c/json.h>

class JsonRoutine
{
public:
    JsonRoutine();
    static int ParseHandlerManifest(string& filePath, HandlerManifest &result);
    ~JsonRoutine();
}; 