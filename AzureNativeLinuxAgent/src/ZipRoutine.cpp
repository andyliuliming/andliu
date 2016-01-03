#include <iostream>
#include "ZipRoutine.h"

#ifdef _WIN32
#else
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#include <unistd.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <dirent.h>
#include <limits.h>
#include <unistd.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <dirent.h>
#include <fcntl.h>
#include <limits.h>
#include <sys/resource.h>
#include <sys/types.h>
#include <zip.h>
#endif
using namespace std;

ZipRoutine::ZipRoutine()
{
    //
}

void ZipRoutine::safe_create_dir(const char *dir)
{
#ifdef _WIN32
#else
    if (mkdir(dir, 0755) < 0) {
        if (errno != EEXIST) {
            perror(dir);
            exit(1);
        }
    }
#endif
}

int ZipRoutine::UnZipToDirectory(const char * archive, const char * zipExtractDirectory)
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

    if ((za = zip_open(archive, 0, &err)) == NULL) {
        zip_error_to_str(buf, sizeof(buf), err, errno);
        fprintf(stderr, "can't open zip archive `%s': %s/n",
            archive, buf);
        return 1;
    }
    cout << "zip open success." << endl;

    int entries_num = zip_get_num_entries(za, 0);
    for (i = 0; i < entries_num; i++) {
        if (zip_stat_index(za, i, 0, &sb) == 0) {
            printf("==================/n");
            len = strlen(sb.name);
            printf("Name: [%s], ", sb.name);
            printf("Size: [%llu], ", sb.size);
            printf("mtime: [%u]\n", (unsigned int)sb.mtime);
            if (sb.name[len - 1] == '/') {
                cout << " try to create dir" << sb.name << endl;
                ZipRoutine::safe_create_dir(sb.name);
            }
            else {
                zf = zip_fopen_index(za, i, 0);
                if (!zf) {
                    fprintf(stderr, "failed to open file with index\n");
                    break;
                }

                fd = open(sb.name, O_RDWR | O_TRUNC | O_CREAT, 0644);
                if (fd < 0) {
                    cout << "length is negative" << endl;
                    break;
                }

                sum = 0;
                while (sum != sb.size) {
                    len = zip_fread(zf, buf, 100);
                    if (len < 0) {
                        cout << "length is negative" << endl;
                        break;
                    }
                    write(fd, buf, len);
                    sum += len;
                }
                close(fd);
                zip_fclose(zf);
            }
        }
        else {
            printf("File[%s] Line[%d]/n", __FILE__, __LINE__);
        }
    }

    if (zip_close(za) == -1) {
        fprintf(stderr, "can't close zip archive `%s'/n", archive);
        return 1;
    }

    return 0;
#endif
}


ZipRoutine::~ZipRoutine()
{
}
