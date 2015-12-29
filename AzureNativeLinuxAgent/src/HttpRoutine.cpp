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


string* HttpRoutine::Get(const char * url)
{
    string *buffer = NULL;
#ifdef _WIN32
    // your windows code.
#else
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
    buffer = new string();
    bool initResult = init(conn, url, buffer);
    cout << "init Result: " << initResult << endl;
    if (chunk != NULL) {
        code = curl_easy_setopt(conn, CURLOPT_HTTPHEADER, chunk);
        cout << "set header result: " << code << endl;
    }
    code = curl_easy_perform(conn);
    cout << "curl_easy_perform result: " << code << endl;
    curl_easy_cleanup(conn);

    curl_slist_free_all(chunk);
    if (code != CURLE_OK)
    {
        fprintf(stderr, "Failed to get '%s' [%s]\n", url, errorBuffer);
    }
    else
    {
        cout << *buffer << endl;
    }
#endif
    return buffer;
}

string * HttpRoutine::Post(const char * url, map<string,string> * headers,const char * data)
{
    string *buffer = NULL;
#ifdef _WIN32
    // your windows code.
#else

    struct curl_slist *chunk = NULL;
    if (chunk != NULL) {
        /* Add a custom header */
        for (std::map<string, string>::iterator it = headers->begin(); it != headers->end(); ++it)
        {
            string headerValue = it->first + ": " + it->second;
            chunk = curl_slist_append(chunk, headerValue.c_str());
        }
    }
    CURL *conn = NULL;
    CURLcode code;
    //curl_global_init is not thread safe.
    curl_global_init(CURL_GLOBAL_DEFAULT);
    buffer = new string();
    bool initResult = init(conn, url, buffer);
    cout << "init Result: " << initResult << endl;
    if (chunk != NULL) {
        code = curl_easy_setopt(conn, CURLOPT_HTTPHEADER, chunk);
        cout << "set header result: " << code << endl;
    }
    curl_easy_setopt(conn, CURLOPT_POSTFIELDS, data);
    code = curl_easy_perform(conn);
    cout << "curl_easy_perform result: " << code << endl;

    curl_slist_free_all(chunk);
    curl_easy_cleanup(conn);

    if (code != CURLE_OK)
    {
        fprintf(stderr, "Failed to post '%s' [%s]\n", url, errorBuffer);
    }
    else
    {
        cout << *buffer << endl;
    }
#endif
    return buffer;
}



HttpRoutine::~HttpRoutine()
{
}
