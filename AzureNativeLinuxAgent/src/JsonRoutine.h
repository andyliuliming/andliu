#pragma once
#include "HandlerManifest.h"
#include <json-glib/json-glib.h>

class JsonRoutine
{
public:
    JsonRoutine();
    static int ParseHandlerManifest(string& filePath, HandlerManifest &result);
    ~JsonRoutine();
}; 