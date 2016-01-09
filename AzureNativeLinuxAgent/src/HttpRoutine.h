#pragma once
#include "HttpResponse.h"
#include <map>
#include <stdio.h>
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
    //
    //  libcurl write callback function
    //
    static size_t writer(const char *data, size_t size, size_t nmemb, string *writerData);
    static size_t writerToFile(const char *data, size_t size, size_t nmemb, FILE *file);
    static size_t header_callback(char *buffer, size_t size, size_t nitems, void *userdata);
#ifdef _WIN32
#else
    static char errorBuffer[CURL_ERROR_SIZE];
    static bool init_common(CURL *&conn, const char *url);
#endif
public:
    HttpRoutine();
    static HttpResponse* GetWithDefaultHeader(const char *url);
    static HttpResponse* Get(const char * url, map<string, string> * headers);
    static int GetToFile(const char * url, map<string, string> * headers, const char * filePath);
    static string* Post(const char * url, map<string, string> * headers, const char * data);
#ifdef _WIN32
#else
#endif
    ~HttpRoutine();
};

