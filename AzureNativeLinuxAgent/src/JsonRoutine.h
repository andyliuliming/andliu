#pragma once
#include "HandlerManifest.h"
#include <json-glib/json-glib.h>

class JsonRoutine
{
public:
    JsonRoutine();
    static HandlerManifest* ParseHandlerManifest(const char * filePath);
    ~JsonRoutine();
};

