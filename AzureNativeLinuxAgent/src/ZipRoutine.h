#pragma once
#include <iostream>
using namespace std;

class ZipRoutine
{
public:
    ZipRoutine();
    static void safe_create_dir(const char *dir);
    static int UnZipToDirectory(string& archive, string& zipExtractDirectory);
    ~ZipRoutine();
};

