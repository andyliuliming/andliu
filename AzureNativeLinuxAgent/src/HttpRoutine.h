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
    //
    //  libcurl write callback function
    //
    static int writer(char *data, size_t size, size_t nmemb, string *writerData);
    static int writerToFile(char *data, size_t size, size_t nmemb, FILE *file);
#ifdef _WIN32
#else
    static char errorBuffer[CURL_ERROR_SIZE];
    static bool init_common(CURL *&conn, const char *url);
#endif
public:
    HttpRoutine();
    static string * GetWithDefaultHeader(const char *url);
    static string* Get(const char * url, map<string, string> * headers);
    static int GetToFile(const char * url, map<string, string> * headers, const char * filePath);
    static string* Post(const char * url, map<string, string> * headers, const char * data);
#ifdef _WIN32
#else
#endif
    ~HttpRoutine();
};

