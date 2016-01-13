#pragma once
#include "HandlerManifest.h"
#include <json-glib/json-glib.h>

class JsonRoutine
{
public:
    JsonRoutine();
    static int ParseHandlerManifest(const char * filePath, HandlerManifest &result);
    ~JsonRoutine();
}; 