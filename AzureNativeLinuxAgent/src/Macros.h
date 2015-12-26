#pragma once
#include <string>
#include <iostream>
#include <cstdio>
#include <stdio.h>
#include <stdlib.h>
#include <memory>
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
#define SLEEP usleep
#define SOCKET_OPTION_P
#define SEND_TO_OPTION
#define RECV_TO_OPTION
#define CLOSESOCKET close
#endif


typedef unsigned char       BYTE, *PBYTE;
typedef unsigned char       UINT8, *PUINT8;



#define DHCPDISCOVER (1)
#define DHCP_UDP_PORT (68)
#define DHCP_UDP_TO_PORT (67)