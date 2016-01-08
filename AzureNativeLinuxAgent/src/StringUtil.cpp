#include "Macros.h"
#include "StringUtil.h"
#include <algorithm> 
#include <functional> 
#include <stdlib.h>
using namespace std;
StringUtil::StringUtil()
{
}

void StringUtil::string_split(string& s, string& delim, vector< string >* ret)
{
    size_t last = 0;
    size_t index = s.find_first_of(delim, last);
    while (index != string::npos)
    {
        ret->push_back(s.substr(last, index - last));
        last = index + 1;
        index = s.find_first_of(delim, last);
    }
    if (index - last>0)
    {
        ret->push_back(s.substr(last, index - last));
    }
}

// trim from both endsstatic string &trim(const string &s, const string &ws);
string StringUtil::trim(const string &s, const string &ws)
{
    string str = s;
    size_t found;
    found = str.find_last_not_of(ws);
    if (found != string::npos)
        str.erase(found + 1);
    else
        str.clear();            // str is all whitespace

    found = str.find_first_not_of(ws);
    if (found != string::npos)
        str.erase(0, found);
    else
        str.clear();            // str is all whitespace

    return str;
}

void StringUtil::gen_random(char * s, const int len)
{
    static const char alphanum[] =
        "0123456789"
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        "abcdefghijklmnopqrstuvwxyz";

    for (int i = 0; i < len; ++i) {
        s[i] = alphanum[RANDOM() % (sizeof(alphanum) - 1)];
    }
    s[len] = 0;
}

StringUtil::~StringUtil()
{
}
