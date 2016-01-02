#pragma once
#ifdef _WIN32
#else
#include <json-glib/json-glib.h>
#endif
class JsonRoutine
{
public:
    JsonRoutine();
#ifdef _WIN32
#else
    static JsonNode * ParseFile(const char * filePath);
#endif
    ~JsonRoutine();
};

