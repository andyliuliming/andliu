#include "HttpResponse.h"
#include "StringUtil.h"
#include <string>
using namespace std;

HttpResponse::HttpResponse()
{
    this->headers = new map<string, string>();
}

void HttpResponse::addHeader(const char * header_item)
{
    string headerLine = string(header_item);
    string spliter = ":";
    vector<string> splitted;
    StringUtil::string_split(headerLine, spliter, &splitted);
    if (splitted.size() > 1)
    {
        this->headers->insert(pair<string, string>(splitted[0], splitted[1]));
    }
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
