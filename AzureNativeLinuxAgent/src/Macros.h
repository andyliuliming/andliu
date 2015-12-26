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
#else
#include <unistd.h>
//linux code goes here
#define POPEN popen
#define PCLOSE pclose
#define SLEEP usleep
#endif


typedef unsigned char       BYTE, *PBYTE;
typedef unsigned char       UINT8, *PUINT8;

#define DHCPDISCOVER (1)
#define DHCP_UDP_PORT (68)
#define DHCP_UDP_TO_PORT (67)