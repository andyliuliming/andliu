#include "NetworkRoutine.h"
#include "Logger.h"
#include <stdio.h>
#include <stdlib.h>
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
PUINT8 NetworkRoutine::GetMacAddress()
{
    PUINT8 MAC_ADDRESS = new UINT8[6];
#ifdef _WIN32
    return MAC_ADDRESS;
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
    printf("interfaces number %d\n", nInterfaces);
    for (i = 0; i < nInterfaces; i++)
    {
        item = &ifr[i];
        addr = &(item->ifr_addr);
        /* Get the IP address*/
        if (ioctl(sck, SIOCGIFADDR, item) < 0)
        {
            Logger::getInstance().Verbose("ioctl(OSIOCGIFADDR) error.");
            perror("ioctl(OSIOCGIFADDR)");
        }

        if (inet_ntop(AF_INET, &(((struct sockaddr_in *)addr)->sin_addr), ip, sizeof ip) == NULL) //vracia adresu interf
        {
            Logger::getInstance().Verbose("inet_ntop error.");
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
        sprintf(macp, " %02x:%02x:%02x:%02x:%02x:%02x",
            (unsigned char)item->ifr_hwaddr.sa_data[0],
            (unsigned char)item->ifr_hwaddr.sa_data[1],
            (unsigned char)item->ifr_hwaddr.sa_data[2],
            (unsigned char)item->ifr_hwaddr.sa_data[3],
            (unsigned char)item->ifr_hwaddr.sa_data[4],
            (unsigned char)item->ifr_hwaddr.sa_data[5]);

        Logger::getInstance().Verbose("printing the result:\n");
        printf("interface name : %s \n", item->ifr_name);
        printf("%s\n %s \n", ip, macp);
        if (item->ifr_name[0] != 'l'
            &&item->ifr_name[1] != 'o')
        {
            Logger::getInstance().Verbose(" if name is not lo, so set the mac.");
            MAC_ADDRESS[0] = item->ifr_hwaddr.sa_data[0];
            MAC_ADDRESS[1] = item->ifr_hwaddr.sa_data[1];
            MAC_ADDRESS[2] = item->ifr_hwaddr.sa_data[2];
            MAC_ADDRESS[3] = item->ifr_hwaddr.sa_data[3];
            MAC_ADDRESS[4] = item->ifr_hwaddr.sa_data[4];
            MAC_ADDRESS[5] = item->ifr_hwaddr.sa_data[5];
            break;
        }
    }
    return MAC_ADDRESS;
#endif
}

PDHCPRequest NetworkRoutine::BuildDHCPRequest()
{
    PDHCPRequest dhcpRequest = new DHCPRequest();
    dhcpRequest->Opcode = 1;
    dhcpRequest->HardwareAddressType = 1;
    dhcpRequest->HardwareAddressLength = 6;
    dhcpRequest->Hops = 0;

    int lvalue = rand();
    memcpy(dhcpRequest->TransactionID, &lvalue, 4);

    memset(dhcpRequest->Seconds, 0, 2);

    PUINT8 macAddress = NetworkRoutine::GetMacAddress();
    memcpy(dhcpRequest->ClientHardwareAddress, macAddress, 6);
    delete macAddress;

    //99, 130, 83, 99, 53, 1, 1, 255
    PUINT8 magicCookie = new UINT8[99, 130, 83, 99];
    memcpy(dhcpRequest->MagicCookie, magicCookie, 4);
    delete magicCookie;
    dhcpRequest->MessageTypeCode = 53;
    dhcpRequest->MessageTypeLength = 1;
    dhcpRequest->MessageType = DHCPDISCOVER;
    dhcpRequest->End = 255;
    return dhcpRequest;
}

bool NetworkRoutine::isDHCPEnabled()
{
    return false;
}

void NetworkRoutine::stopDHCP()
{
}


NetworkRoutine::~NetworkRoutine()
{
}
