#include <iostream>
#include "FileOperator.h"
#include "ZipRoutine.h"

#ifdef _WIN32
#else
#include <dirent.h>
#include <errno.h>
#include <fcntl.h>
#include <limits.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/resource.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>
#include <zip.h>
#endif
using namespace std;

ZipRoutine::ZipRoutine()
{
    //
}

/*
the zipExtractDirectory format should be like /var/lib/waagent/xxx_version/
*/
int ZipRoutine::UnZipToDirectory(string& archive, string& zipExtractDirectory)
{
#ifdef _WIN32
    return 0;
#else
    struct zip *za;
    struct zip_file *zf;
    struct zip_stat sb;
    char buf[100];
    int err;
    int i, len;
    int fd;
    long long sum;

    if ((za = zip_open(archive.c_str(), 0, &err)) == NULL)
    {
        zip_error_to_str(buf, sizeof(buf), err, errno);
        cerr << "can't open zip archive: " << buf << endl;
        return 1;
    }
    cout << "zip open success." << endl;

    int entries_num = zip_get_num_entries(za, 0);
    cout << "entries_num is :" << entries_num << endl;
    for (i = 0; i < entries_num; i++)
    {
        if (zip_stat_index(za, i, 0, &sb) == 0)
        {
            printf("==================/n");
            len = strlen(sb.name);
            printf("Name: [%s], ", sb.name);
            printf("Size: [%llu], ", (unsigned long long)(sb.size));
            printf("mtime: [%u]\n", (unsigned int)sb.mtime);
            
            // create the sub dir
            string relative_path = string(sb.name);
            int last_index_slash = relative_path.find_last_of('/');
            if (last_index_slash != string::npos)
            {
                //not find so it's 
                string folder_part = relative_path.substr(0, last_index_slash);
                string newFolderPath = zipExtractDirectory + folder_part;

                cout << " try to create dir" << newFolderPath << endl;
                int make_dir_result = FileOperator::make_dir(newFolderPath.c_str());

                cout << " make dir result: " << make_dir_result << endl;
            }
            if (last_index_slash != (relative_path.length() - 1))
            {
                zf = zip_fopen_index(za, i, 0);
                if (!zf)
                {
                    fprintf(stderr, "failed to open file with index\n");
                    break;
                }
                string newFolderPath = zipExtractDirectory + sb.name;
                fd = open(newFolderPath.c_str(), O_RDWR | O_TRUNC | O_CREAT, 0644);
                if (fd < 0)
                {
                    cout << "length is negative" << endl;
                    break;
                }

                sum = 0;
                while (sum != sb.size)
                {
                    len = zip_fread(zf, buf, 100);
                    if (len < 0)
                    {
                        cout << "length is negative" << endl;
                        break;
                    }
                    int written_bytes = write(fd, buf, len);
                    if (len != written_bytes)
                    {
                        cout << " written bytes is not equals to the read" << endl;
                    }
                    sum += len;
                }
                close(fd);
                zip_fclose(zf);
            }
        }
        else
        {
            printf("File[%s] Line[%d]/n", __FILE__, __LINE__);
        }
    }

    if (zip_close(za) == -1)
    {
        cerr << "can't close zip archive: " << archive << endl;
        return 1;
    }

    return 0;
#endif
}


ZipRoutine::~ZipRoutine()
{
}
