#pragma once
class ZipRoutine
{
public:
    ZipRoutine();
    static void safe_create_dir(const char *dir);
    static int UnZipToDirectory(const char * archive, const char * zipExtractDirectory);
    ~ZipRoutine();
};

