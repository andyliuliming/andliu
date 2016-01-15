#include <fstream>
#include <streambuf>

#include "FileOperator.h"
#include "Logger.h"
#include "Macros.h"
using namespace std;

FileOperator::FileOperator()
{
}

bool FileOperator::file_exists(const char* name)
{
    struct stat buffer;
    return (stat(name, &buffer) == 0);
}

bool FileOperator::move_file(const char * from, const char *to)
{
    return rename(from, to);
}

int FileOperator::make_dir(const char* dir_path)
{
    string mkdirCmd = string("mkdir -p ") + dir_path;
    int dir_err = system(mkdirCmd.c_str());
    return dir_err;
}

void FileOperator::save_file(const string & content, const string & fileName)
{
    ofstream myfile;
    myfile.open(fileName);
    myfile << content;
    myfile.close();
}

void FileOperator::save_file(const char * content, long size, const char * fileName)
{
    ofstream myfile;
    myfile.open(fileName);
    myfile << content;
//    myfile.write(content, size);
    myfile.close();
}

int FileOperator::get_content(const char * fileName, string &content)
{
    if (file_exists(fileName))
    {
        ifstream t(fileName);
        content = string((istreambuf_iterator<char>(t)), istreambuf_iterator<char>());
        return 0;
    }
    else
    {
        return 1;
    }
}




FileOperator::~FileOperator()
{
}
