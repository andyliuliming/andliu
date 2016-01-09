#pragma once
#include <cstdlib>
#include <fstream>
#include <string>
#include <sys/stat.h>
using namespace std;

class FileOperator
{
public:
    FileOperator();
    static bool file_exists(const char* name);
    static int make_dir(const char* dir_path);
    static bool move_file(const char * from, const char *to);
    static void save_file(const char * content, long size, const char * fileName);
    static void save_file(const string *content, const string *fileName);
    static string * get_content(const char *fileName);
    static string * get_extension_path(const char* pluginName, const char* version);
    ~FileOperator();
};

