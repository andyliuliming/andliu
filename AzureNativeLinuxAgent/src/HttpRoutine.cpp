#include "HttpRoutine.h"
#include <iostream>
using namespace std;


#ifdef _WIN32
// your windows code goes here.
#else
char HttpRoutine::errorBuffer[CURL_ERROR_SIZE];
string HttpRoutine::buffer;
#endif 

HttpRoutine::HttpRoutine()
{
}

#ifdef _WIN32

#else
int HttpRoutine::writer(char *data, size_t size, size_t nmemb, string *writerData)
{
    if (writerData == NULL) {
        return 0;
    }
    writerData->append(data, size*nmemb);
    return size * nmemb;
}

bool HttpRoutine::init(CURL *&conn, const char *url) {
    CURLcode code;

    conn = curl_easy_init();

    if (conn == NULL)
    {
        fprintf(stderr, "Failed to create CURL connection\n");
        exit(EXIT_FAILURE);
    }

    code = curl_easy_setopt(conn, CURLOPT_ERRORBUFFER, errorBuffer);
    if (code != CURLE_OK)
    {
        fprintf(stderr, "Failed to set error buffer [%d]\n", code);
        return false;
    }

    code = curl_easy_setopt(conn, CURLOPT_URL, url);
    if (code != CURLE_OK)
    {
        fprintf(stderr, "Failed to set URL [%s]\n", errorBuffer);
        return false;
    }

    code = curl_easy_setopt(conn, CURLOPT_FOLLOWLOCATION, 1L);
    if (code != CURLE_OK)
    {
        fprintf(stderr, "Failed to set redirect option [%s]\n", errorBuffer);
        return false;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEFUNCTION, writer);
    if (code != CURLE_OK)
    {
        fprintf(stderr, "Failed to set writer [%s]\n", errorBuffer);
        return false;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEDATA, &(buffer));
    if (code != CURLE_OK)
    {
        fprintf(stderr, "Failed to set write data [%s]\n", errorBuffer);
        return false;
    }

    return true;
}
#endif


#ifdef _WIN32
// your windows code.
#else
void HttpRoutine::Get(const char * url, struct curl_slist *chunk)
{
    //http://curl.haxx.se/libcurl/c/htmltitle.html
    CURL *conn = NULL;
    CURLcode code;
    //curl_global_init is not thread safe.
    curl_global_init(CURL_GLOBAL_DEFAULT);
    bool initResult = init(conn, url);
    cout << "init Result: " << initResult << endl;
    if (chunk != NULL) {
        code = curl_easy_setopt(conn, CURLOPT_HTTPHEADER, chunk);
        cout << "set header result: " << code << endl;
    }
    code = curl_easy_perform(conn);
    cout << "curl_easy_perform result: " << code << endl;
    curl_easy_cleanup(conn);

    if (code != CURLE_OK)
    {
        fprintf(stderr, "Failed to get '%s' [%s]\n", url, errorBuffer);
    }else
    {
        cout << buffer << endl;
    }
}

#endif


HttpRoutine::~HttpRoutine()
{
}
