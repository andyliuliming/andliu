#pragma once
#include <map>
#include <memory>
#include <string>
using namespace std;

class HttpResponse
{
public:
    int status_code;
    map<string, string> *headers;
    string *body;
    string *raw_header;
    HttpResponse();

    ~HttpResponse();
};

