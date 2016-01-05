#pragma once
#include <iostream>
using namespace std;

class ZipRoutine
{
public:
    ZipRoutine();
    static int UnZipToDirectory(const char * archive, const char * zipExtractDirectory);
    ~ZipRoutine();
};

