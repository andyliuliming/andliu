#pragma once
#include <iostream>
using namespace std;

class ZipRoutine
{
public:
    ZipRoutine();
    static int UnZipToDirectory(string& archive, string& zipExtractDirectory);
    ~ZipRoutine();
};

