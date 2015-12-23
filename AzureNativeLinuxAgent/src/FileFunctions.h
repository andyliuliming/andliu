#pragma once
#include <string>
#include <sys/stat.h>
#include <cstdlib>
#include <string>
using namespace std;

inline bool file_exists(const std::string& name) {
    struct stat buffer;
    return (stat(name.c_str(), &buffer) == 0);
}

inline int make_dir(const std::string& name) {
    string mkdirCmd = "mkdir -p " + name;
    int dir_err = system(mkdirCmd.c_str());
    return dir_err;
}