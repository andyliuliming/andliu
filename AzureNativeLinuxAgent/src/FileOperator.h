#pragma once
#include <string>
#include <sys/stat.h>
#include <cstdlib>
using namespace std;

class FileOperator
{
public:
    FileOperator();
    inline static bool file_exists(const std::string& name) {
        struct stat buffer;
        return (stat(name.c_str(), &buffer) == 0);
    }

    inline static int make_dir(const std::string& name) {
        string mkdirCmd = "mkdir -p " + name;
        int dir_err = system(mkdirCmd.c_str());
        return dir_err;
    }
    ~FileOperator();
};

