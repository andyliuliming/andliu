#pragma once
#include "HandlerManifest.h"
#ifdef _WIN32
#else
#include <json-glib/json-glib.h>
#endif
class JsonRoutine
{
public:
    JsonRoutine();
    static HandlerManifest* ParseHandlerManifest(const char * filePath);
    ~JsonRoutine();
};

