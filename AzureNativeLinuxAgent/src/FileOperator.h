#pragma once
#include <cstdlib>
#include <fstream>
#include <iostream>
#include <string>
#include <sys/stat.h>
using namespace std;

class FileOperator
{
public:
    FileOperator();
    static bool file_exists(const string& name);
    static int make_dir(const string& name);
    static void save_file(const string *content, const string *fileName);
    static string * get_content(const string *fileName);
    ~FileOperator();
};

