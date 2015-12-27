#include "HttpRoutine.h"



HttpRoutine::HttpRoutine()
{
}

void HttpRoutine::Get(const char * url)
{

#ifdef _WIN32
    // your windows code.
#else
    //http://curl.haxx.se/libcurl/c/htmltitle.html
    CURL *conn = NULL;
    CURLcode code;
    //curl_global_init is not thread safe.
    curl_global_init(CURL_GLOBAL_DEFAULT);
#endif
}


HttpRoutine::~HttpRoutine()
{
}
