#include "HttpResponse.h"

HttpResponse::HttpResponse()
{
    this->headers = new map<string, string>();
}


HttpResponse::~HttpResponse()
{
    if (this->body != NULL)
    {
        delete this->body;
        this->body = NULL;
    }
    if (this->headers != NULL)
    {
        delete this->headers;
        this->headers = NULL;
    }
}
