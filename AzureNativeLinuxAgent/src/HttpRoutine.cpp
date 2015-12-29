#include <iostream>
#include "HttpRoutine.h"
using namespace std;

#ifdef _WIN32
// your windows code goes here.
#else
char HttpRoutine::errorBuffer[CURL_ERROR_SIZE];
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

bool HttpRoutine::init(CURL *&conn, const char *url, string *buffer) {
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

    code = curl_easy_setopt(conn, CURLOPT_WRITEDATA, buffer);
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
string* HttpRoutine::Get(const char * url)
{
    struct curl_slist *chunk = NULL;

    /* Add a custom header */
    /*"x-ms-agent-name": GuestAgentName,
    "x-ms-version" : ProtocolVersion*/
    chunk = curl_slist_append(chunk, "x-ms-agent-name: AzureNativeLinuxAgent");

    /* Modify a header curl otherwise adds differently */
    chunk = curl_slist_append(chunk, "x-ms-version: 2012-11-30");
    //http://curl.haxx.se/libcurl/c/htmltitle.html
    CURL *conn = NULL;
    CURLcode code;
    //curl_global_init is not thread safe.
    curl_global_init(CURL_GLOBAL_DEFAULT);
    string *buffer = new string();
    bool initResult = init(conn, url, buffer);
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
    }
    else
    {
        cout << *buffer << endl;
    }
    curl_slist_free_all(chunk);
    return buffer;
}

string * HttpRoutine::Post(const char * url, curl_slist * chunk,const char * data)
{
    //struct curl_slist *chunk = NULL;

    /* Add a custom header */
    /*"x-ms-agent-name": GuestAgentName,
    "x-ms-version" : ProtocolVersion*/
    //chunk = curl_slist_append(chunk, "x-ms-agent-name: AzureNativeLinuxAgent");

    /* Modify a header curl otherwise adds differently */
    //chunk = curl_slist_append(chunk, "x-ms-version: 2012-11-30");
    //http://curl.haxx.se/libcurl/c/htmltitle.html
    CURL *conn = NULL;
    CURLcode code;
    //curl_global_init is not thread safe.
    curl_global_init(CURL_GLOBAL_DEFAULT);
    string *buffer = new string();
    bool initResult = init(conn, url, buffer);
    cout << "init Result: " << initResult << endl;
    if (chunk != NULL) {
        code = curl_easy_setopt(conn, CURLOPT_HTTPHEADER, chunk);
        cout << "set header result: " << code << endl;
    }
    curl_easy_setopt(conn, CURLOPT_POSTFIELDS, data);
    code = curl_easy_perform(conn);
    cout << "curl_easy_perform result: " << code << endl;
    curl_easy_cleanup(conn);

    if (code != CURLE_OK)
    {
        fprintf(stderr, "Failed to get '%s' [%s]\n", url, errorBuffer);
    }
    else
    {
        cout << *buffer << endl;
    }
    //curl_slist_free_all(chunk);
    return buffer;
}

#endif


HttpRoutine::~HttpRoutine()
{
}
