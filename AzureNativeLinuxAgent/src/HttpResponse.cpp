#include "HttpResponse.h"



HttpResponse::HttpResponse()
{
}


HttpResponse::~HttpResponse()
{
    if (this->body != NULL)
    {
        delete this->body;
        this->body = NULL;
    }
}
