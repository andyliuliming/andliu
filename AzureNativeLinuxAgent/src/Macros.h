#pragma once
#include <cstdio>
#include <iostream>
#include <memory>
#include <stdio.h>
#include <stdlib.h>
#include <string>
#ifdef _WIN32
//windows code goes here
#define POPEN _popen
#define PCLOSE _pclose
#define SLEEP _sleep
#define SOCKET_OPTION_P (const char*)
#define SEND_TO_OPTION (const char*)
#define RECV_TO_OPTION (char*)
#define CLOSESOCKET closesocket
#else
#include <unistd.h>
//linux code goes here
#define POPEN popen
#define PCLOSE pclose
#define SLEEP(x) usleep(x*1000)
#define SOCKET_OPTION_P
#define SEND_TO_OPTION
#define RECV_TO_OPTION
#define CLOSESOCKET close
#endif

#define VMM_CONFIG_FILE_NAME ("linuxosconfiguration.xml")
#define SECURE_MOUNT_POINT ("/mnt/cdrom/secure")
#define OVF_ENV_FILE_NAME ("ovf-env.xml")
#define VMM_CONFIG_FILE_FULL_PATH ("/mnt/cdrom/secure/linuxosconfiguration.xml")
#define OVF_ENV_FILE_FULL_PATH ("/mnt/cdrom/secure/ovf-env.xml")
#define WAAGENT_LIB_BASE_DIR  ("/var/lib/waagent/")

typedef unsigned char       BYTE, *PBYTE;
typedef unsigned char       UINT8, *PUINT8;



#define DHCPDISCOVER (1)
#define DHCP_UDP_PORT (68)
#define DHCP_UDP_TO_PORT (67)