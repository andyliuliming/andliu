#pragma once
#include <string>
#include <vector>
using namespace std;

class StringUtil
{
public:
    StringUtil();
    static void string_split(std::string& s, std::string& delim, std::vector< std::string >* ret);
    static void gen_random(char *s, const int len);
    ~StringUtil();
};