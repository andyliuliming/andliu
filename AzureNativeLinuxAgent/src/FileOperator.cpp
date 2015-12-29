#include <fstream>
#include <streambuf>

#include "FileOperator.h"
using namespace std;

FileOperator::FileOperator()
{
}

bool FileOperator::file_exists(const std::string & name)
{
    struct stat buffer;
    return (stat(name.c_str(), &buffer) == 0);
}

int FileOperator::make_dir(const std::string & name)
{
    string mkdirCmd = "mkdir -p " + name;
    int dir_err = system(mkdirCmd.c_str());
    return dir_err;
}

void FileOperator::save_file(const string * content, const string * fileName)
{
    ofstream myfile;
    myfile.open(*fileName);
    myfile << *content;
    myfile.close();
}

string * FileOperator::get_content(const string * fileName)
{
    ifstream t(fileName->c_str());
    string *str=new string((istreambuf_iterator<char>(t)), istreambuf_iterator<char>());
    return str;
}


FileOperator::~FileOperator()
{
}
