#include "HttpRoutine.h"
#include "Logger.h"
#include <string.h>
using namespace std;

char HttpRoutine::errorBuffer[CURL_ERROR_SIZE];


HttpRoutine::HttpRoutine()
{
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



int HttpRoutine::GetWithDefaultHeader(const char *url, HttpResponse &response)
{
    map<string, string> headers;
    headers["x-ms-agent-name"] = WAAGENT_NAME;
    headers["Content-Type"] = "text/xml; charset=utf-8";
    headers["x-ms-version"] = WAAGENT_VERSION;
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    int getResult = HttpRoutine::Get(url, &headers, response);
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    return getResult;
}

int HttpRoutine::Get(const char * url, map<string, string> * headers, HttpResponse &response)
{
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    int returnCode = 0;

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
    CURLcode code = CURLE_OK;
    //curl_global_init is not thread safe.
    curl_global_init(CURL_GLOBAL_DEFAULT);

    bool initResult = init_common(conn, url);

    code = curl_easy_setopt(conn, CURLOPT_HEADERFUNCTION, header_callback);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set header callback [%s]", errorBuffer);
        returnCode = 1;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEHEADER, &response);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set header data [%s]", errorBuffer);
        returnCode = 1;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEFUNCTION, writer);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set writer [%s]", errorBuffer);
        returnCode = 1;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEDATA, &response.body);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set write data [%s]", errorBuffer);
        returnCode = 1;
    }

    if (chunk != NULL)
    {
        code = curl_easy_setopt(conn, CURLOPT_HTTPHEADER, chunk);
        if (code != CURLE_OK)
        {
            returnCode = 1;
            Logger::getInstance().Error("Failed to set http header: %s", errorBuffer);
        }
    }

    code = curl_easy_perform(conn);
    curl_easy_cleanup(conn);
    curl_slist_free_all(chunk);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to get '%s' [%s]", url, errorBuffer);
        returnCode = 1;
    }
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    return returnCode;
}

int HttpRoutine::GetToFile(const char * url, map<string, string> * headers, const char * filePath)
{
    int returnCode = 0;
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
        returnCode = 1;
        return returnCode;
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

    if (chunk != NULL)
    {
        code = curl_easy_setopt(conn, CURLOPT_HTTPHEADER, chunk);
        if (code != CURLE_OK)
        {
            initResult = false;
        }
    }
    if (initResult == true)
    {
        code = curl_easy_perform(conn);
        if (code != CURLE_OK)
        {
            Logger::getInstance().Error("Failed to get '%s' [%s]\n", url, errorBuffer);
            returnCode = 1;
        }
    }
    fclose(fp);
    curl_easy_cleanup(conn);
    curl_slist_free_all(chunk);

    return returnCode;

}

int HttpRoutine::Put(const char * url, map<string, string> * headers, const char * data, HttpResponse &response)
{
    int returnCode = 0;
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

    code = curl_easy_setopt(conn, CURLOPT_UPLOAD, 1L);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set opt CURLOPT_UPLOAD [%s]\n", errorBuffer);
        initResult = false;
    }
    /* HTTP PUT please */
    code = curl_easy_setopt(conn, CURLOPT_PUT, 1L);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set opt CURLOPT_PUT [%s]\n", errorBuffer);
        initResult = false;
    }
    size_t dataLength = strlen(data);
    code = curl_easy_setopt(conn, CURLOPT_INFILESIZE, (curl_off_t)dataLength);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set header CURLOPT_INFILESIZE_LARGE [%s]\n", errorBuffer);
        initResult = false;
    }
    code = curl_easy_setopt(conn, CURLOPT_HEADERFUNCTION, header_callback);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set header callback [%s]\n", errorBuffer);
        initResult = false;
    }

    code = curl_easy_setopt(conn, CURLOPT_WRITEHEADER, &response);
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

    code = curl_easy_setopt(conn, CURLOPT_WRITEDATA, &response.body);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set write data [%s]\n", errorBuffer);
        initResult = false;
    }

    if (chunk != NULL)
    {
        code = curl_easy_setopt(conn, CURLOPT_HTTPHEADER, chunk);
        if (code != CURLE_OK)
        {
            initResult = false;
        }
    }
    code = curl_easy_setopt(conn, CURLOPT_READDATA, data);
    if (code != CURLE_OK)
    {
        initResult = false;
    }
    if (initResult == true)
    {
        code = curl_easy_perform(conn);
        if (code != CURLE_OK)
        {
            returnCode = 1;
        }
    }
    else
    {
        returnCode = 1;
    }
    curl_easy_cleanup(conn);
    curl_slist_free_all(chunk);

    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to post '%s' [%s]\n", url, errorBuffer);
    }
    return returnCode;
}

int HttpRoutine::Post(const char * url, map<string, string> * headers, const char * data, HttpResponse &response)
{
    int returnCode = 0;
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

    code = curl_easy_setopt(conn, CURLOPT_WRITEHEADER, &response);
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

    code = curl_easy_setopt(conn, CURLOPT_WRITEDATA, &response.body);
    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to set write data [%s]\n", errorBuffer);
        initResult = false;
    }

    if (chunk != NULL)
    {
        code = curl_easy_setopt(conn, CURLOPT_HTTPHEADER, chunk);
        if (code != CURLE_OK)
        {
            initResult = false;
        }
    }
    code = curl_easy_setopt(conn, CURLOPT_POSTFIELDS, data);
    if (code != CURLE_OK)
    {
        initResult = false;
    }
    if (initResult == true)
    {
        code = curl_easy_perform(conn);
        if (code != CURLE_OK)
        {
            returnCode = 1;
        }
    }
    else
    {
        returnCode = 1;
    }
    curl_easy_cleanup(conn);
    curl_slist_free_all(chunk);

    if (code != CURLE_OK)
    {
        Logger::getInstance().Error("Failed to post '%s' [%s]\n", url, errorBuffer);
    }
    return returnCode;
}

HttpRoutine::~HttpRoutine()
{
}
