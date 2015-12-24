#include "NetworkRoutine.h"
#include "Logger.h"
#include <stdio.h>
#ifdef _WIN32
#include <WinSock2.h>
#else
#include <arpa/inet.h>
#include <sys/socket.h>
#include <ifaddrs.h>
#include <sys/socket.h> // Needed for the socket functions
#include <curl/curl.h>
#include <string.h>
#include <netdb.h>
#include <sys/ioctl.h>
#include <net/if.h>
#endif

//http://curl.haxx.se/libcurl/cplusplus/

NetworkRoutine::NetworkRoutine()
{
}

/*
TODO we should get the first active network interface.
*/
string NetworkRoutine::GetMacAddress()
{
    
    #ifdef _WIN32
        return string();
    #else
        char buf[8192] = { 0 };
        struct ifconf ifc = { 0 };
        struct ifreq *ifr = NULL;
        int sck = 0;
        int nInterfaces = 0;
        int i = 0;
        char ip[INET6_ADDRSTRLEN] = { 0 };
        char macp[19];
        struct ifreq *item;
        struct sockaddr *addr;

        /* Get a socket handle. */
        sck = socket(PF_INET, SOCK_DGRAM, 0);
        if (sck < 0)
        {
            Logger::getInstance().Verbose("sck < 0 ");
            perror("socket");
        }

        /* Query available interfaces. */
        ifc.ifc_len = sizeof(buf);
        ifc.ifc_buf = buf;
        if (ioctl(sck, SIOCGIFCONF, &ifc) < 0)
        {
            Logger::getInstance().Verbose("ioctl(sck, SIOCGIFCONF, &ifc) < 0");
            perror("ioctl(SIOCGIFCONF)");
        }

        /* Iterate through the list of interfaces. */
        ifr = ifc.ifc_req;
        nInterfaces = ifc.ifc_len / sizeof(struct ifreq);

        for (i = 0; i < nInterfaces; i++)
        {
            item = &ifr[i];

            addr = &(item->ifr_addr);

            /* Get the IP address*/
            if (ioctl(sck, SIOCGIFADDR, item) < 0)
            {
                Logger::getInstance().Verbose("ioctl(OSIOCGIFADDR)");
                perror("ioctl(OSIOCGIFADDR)");
            }

            if (inet_ntop(AF_INET, &(((struct sockaddr_in *)addr)->sin_addr), ip, sizeof ip) == NULL) //vracia adresu interf
            {
                Logger::getInstance().Verbose("inet_ntop");
                perror("inet_ntop");
                continue;
            }

            /* Get the MAC address */
            if (ioctl(sck, SIOCGIFHWADDR, item) < 0)
            {
                Logger::getInstance().Verbose("ioctl(SIOCGIFHWADDR)");
                perror("ioctl(SIOCGIFHWADDR)");
            }

            /* display result */
            Logger::getInstance().Verbose("printing the result:");
            sprintf(macp, " %02x:%02x:%02x:%02x:%02x:%02x",
                (unsigned char)item->ifr_hwaddr.sa_data[0],
                (unsigned char)item->ifr_hwaddr.sa_data[1],
                (unsigned char)item->ifr_hwaddr.sa_data[2],
                (unsigned char)item->ifr_hwaddr.sa_data[3],
                (unsigned char)item->ifr_hwaddr.sa_data[4],
                (unsigned char)item->ifr_hwaddr.sa_data[5]);

            printf("%s %s ", ip, macp);
        }
        return string();
    #endif
}


NetworkRoutine::~NetworkRoutine()
{
}
