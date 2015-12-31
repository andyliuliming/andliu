#pragma once
#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <map>
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
    //
    //  libcurl write callback function
    //

    static int writer(char *data, size_t size, size_t nmemb, string *writerData);
    static bool init(CURL *&conn, const char *url,string *buffer);

#endif
public:
    HttpRoutine();
    static string * GetWithDefaultHeader(const char *url);
    static string* Get(const char * url, map<string, string> * headers);
    static string* Post(const char * url, map<string, string> * headers, const char * data);
#ifdef _WIN32
#else
#endif
    ~HttpRoutine();
};

