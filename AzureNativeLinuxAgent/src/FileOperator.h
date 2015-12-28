#pragma once
#include <string>
#include <sys/stat.h>
#include <cstdlib>
#include <iostream>
#include <fstream>
using namespace std;

class FileOperator
{
public:
    FileOperator();
    static bool file_exists(const std::string& name);
    static int make_dir(const std::string& name);
    static void save_file(const string *content, const string *fileName);
    ~FileOperator();
};

