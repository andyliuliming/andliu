#pragma once
#include <string>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <string>
#ifdef _WIN32
#else
#include <curl/curl.h>
#endif
using namespace std;

class HttpRoutine
{
private:
#ifdef _WIN32
#else
    static char errorBuffer[CURL_ERROR_SIZE];
    static string buffer;
    //
    //  libcurl write callback function
    //

    static int writer(char *data, size_t size, size_t nmemb, string *writerData);
    static bool init(CURL *&conn, const char *url);

#endif
public:
    HttpRoutine(); 
#ifdef _WIN32
#else
    static void Get(const char * url, struct curl_slist *chunk);
#endif
    ~HttpRoutine();
};

