#include "HttpRoutine.h"
#include "Logger.h"
using namespace std;

char HttpRoutine::errorBuffer[CURL_ERROR_SIZE];


HttpRoutine::HttpRoutine()
{
}

HttpResponse * HttpRoutine::GetWithDefaultHeader(const char *url)
{
    string *buffer = NULL;
    map<string, string> headers;
    headers["x-ms-agent-name"] = WAAGENT_NAME;
    headers["Content-Type"] = "text/xml; charset=utf-8";
    headers["x-ms-version"] = WAAGENT_VERSION;
    HttpResponse *response = HttpRoutine::Get(url, &headers);
    return response;
}

size_t HttpRoutine::writer(const char *data, size_t size, size_t nmemb, string *writerData)
{
    if (writerData == NULL)
    {
        return 0;
    }
    writerData->append(data, size*nmemb);
    return size * nmemb;
}

size_t HttpRoutine::header_callback(const char *data, size_t size, size_t nitems, HttpResponse *writerData)
{
    if (writerData == NULL)
    {
        return 0;
    }
    if (data != NULL)
    {
        writerData->addHeader(data);
    }
    return size*nitems;
}

size_t HttpRoutine::writerToFile(const char * data, size_t size, size_t nmemb, FILE * file)
{
    if (data == NULL)
    {
        return 0;
    }
    else
    {
        size_t written = fwrite(data, size, nmemb, file);
        return written;
    }
}

bool HttpRoutine::init_common(CURL *&conn, const char *url)
{
    CURLcode code;
    conn = curl_easy_init();
    if (conn == NULL)
    {
        Logger::getInstance().Error("Failed to create CURL connection");
        return false;
    }
    code = curl_easy_setopt(conn, CURLOPT_ERRORBUFFER, errorBuffer);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set error buffer [%d]\n", code);
        return false;
    }
    code = curl_easy_setopt(conn, CURLOPT_URL, url);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set URL [%s]\n", errorBuffer);
        return false;
    }
    code = curl_easy_setopt(conn, CURLOPT_FOLLOWLOCATION, 1L);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set redirect option [%s]\n", errorBuffer);
        return false;
    }
    return true;
}


HttpResponse* HttpRoutine::Get(const char * url, map<string, string> *headers)
{
    string *body_buffer = new string();
    HttpResponse *response = new HttpResponse();
    response->body = body_buffer;

    struct curl_slist *chunk = NULL;
    if (headers != NULL)
    {
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

    bool initResult = init_common(conn, url);

    code = curl_easy_setopt(conn, CURLOPT_HEADERFUNCTION, header_callback);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set header callback [%s]\n", errorBuffer);
        initResult = false;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEHEADER, response);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set header data [%s]\n", errorBuffer);
        initResult = false;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEFUNCTION, writer);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set writer [%s]\n", errorBuffer);
        initResult = false;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEDATA, body_buffer);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set write data [%s]\n", errorBuffer);
        initResult = false;
    }

    if (chunk != NULL)
    {
        code = curl_easy_setopt(conn, CURLOPT_HTTPHEADER, chunk);
    }

    code = curl_easy_perform(conn);

    curl_easy_cleanup(conn);

    curl_slist_free_all(chunk);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to get '%s' [%s]\n", url, errorBuffer);
    }
    return response;
}

int HttpRoutine::GetToFile(const char * url, map<string, string> * headers, const char * filePath)
{
    FILE *fp;
    struct curl_slist *chunk = NULL;
    if (headers != NULL)
    {
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
    fp = fopen(filePath, "wb");
    if (fp == NULL)
    {
        Logger::getInstance().Error("fopen result is : %d", fp);
        return 1;
    }

    bool initResult = init_common(conn, url);

    code = curl_easy_setopt(conn, CURLOPT_WRITEFUNCTION, writerToFile);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set writer [%s]\n", errorBuffer);
        initResult = false;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEDATA, fp);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set write data [%s]\n", errorBuffer);
        initResult = false;
    }

    if (chunk != NULL) {
        code = curl_easy_setopt(conn, CURLOPT_HTTPHEADER, chunk);
    }

    code = curl_easy_perform(conn);
    fclose(fp);
    curl_easy_cleanup(conn);

    curl_slist_free_all(chunk);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to get '%s' [%s]\n", url, errorBuffer);
        return 1;
    }
    return 0;

}

HttpResponse * HttpRoutine::Post(const char * url, map<string, string> * headers, const char * data)
{
    string *body_buffer = new string();
    HttpResponse * response = new HttpResponse();
    response->body = body_buffer;

    struct curl_slist *chunk = NULL;
    if (headers != NULL)
    {
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
    body_buffer = new string();
    bool initResult = init_common(conn, url);

    code = curl_easy_setopt(conn, CURLOPT_HEADERFUNCTION, header_callback);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set header callback [%s]\n", errorBuffer);
        initResult = false;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEHEADER, response);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set header data [%s]\n", errorBuffer);
        initResult = false;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEFUNCTION, writer);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set writer [%s]\n", errorBuffer);
        initResult = false;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEDATA, body_buffer);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set write data [%s]\n", errorBuffer);
        initResult = false;
    }

    if (chunk != NULL)
    {
        code = curl_easy_setopt(conn, CURLOPT_HTTPHEADER, chunk);
    }

    curl_easy_setopt(conn, CURLOPT_POSTFIELDS, data);

    code = curl_easy_perform(conn);

    curl_easy_cleanup(conn);
    curl_slist_free_all(chunk);

    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to post '%s' [%s]\n", url, errorBuffer);
    }
    return response;
}

HttpRoutine::~HttpRoutine()
{
}
