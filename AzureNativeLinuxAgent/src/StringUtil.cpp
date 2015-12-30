#include "StringUtil.h"



StringUtil::StringUtil()
{
}

void StringUtil::string_split(std::string& s, std::string& delim, std::vector< std::string >* ret)
{
    size_t last = 0;
    size_t index = s.find_first_of(delim, last);
    while (index != std::string::npos)
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


void StringUtil::gen_random(char * s, const int len)
{
    static const char alphanum[] =
        "0123456789"
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        "abcdefghijklmnopqrstuvwxyz";

    for (int i = 0; i < len; ++i) {
        s[i] = alphanum[rand() % (sizeof(alphanum) - 1)];
    }
    s[len] = 0;
}

StringUtil::~StringUtil()
{
}
