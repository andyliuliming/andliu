#pragma once
#ifdef _WIN32
#else
#include <curl/curl.h>
#endif
class HttpRoutine
{
public:
    HttpRoutine();
    static void Get(const char * url);
    ~HttpRoutine();
};

