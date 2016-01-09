#pragma once
#include <string>
#include <map>
#include <memory>
using namespace std;

class HttpResponse
{
public:
    int status_code;
    map<string, string> headers;
    string *body;
    HttpResponse();

    ~HttpResponse();
};

