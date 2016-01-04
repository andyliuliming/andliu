#include <iostream>
#include <stdio.h>
#include "AzureEnvironment.h"
#include "CommandExecuter.h"
#include "Logger.h"
#include "Macros.h"
#include "NetworkRoutine.h"
#include "StringUtil.h"

#ifdef _WIN32
#include <WinSock2.h>
#include<ws2tcpip.h>
#pragma comment(lib, "Ws2_32.lib")
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
using namespace std;
AzureEnvironment::AzureEnvironment()
{
}

int AzureEnvironment::DoDhcpWork()
{
    //Open DHCP port if iptables is enabled.
    shared_ptr<CommandResult> commandResult = CommandExecuter::RunGetOutput("iptables -D INPUT -p udp --dport 68 -j ACCEPT");

    commandResult = CommandExecuter::RunGetOutput("iptables -I INPUT -p udp --dport 68 -j ACCEPT");

    PDHCPRequest dhcpRequest = NetworkRoutine::BuildDHCPRequest();

    // Configure the default routes.
    bool missingDefaultRoute = true;
    commandResult = CommandExecuter::RunGetOutput("route -n");
    vector<string> splitResult;
    string spliter = "\n";
    StringUtil::string_split((*(commandResult->output)), spliter, &splitResult);
    for (unsigned int i = 0; i < splitResult.size(); i++) {
        cout << splitResult[i] << " \n";
    }

    struct sockaddr_in addr;
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = inet_addr("0.0.0.0");
    addr.sin_port = htons(DHCP_UDP_PORT);

    int sck = 0;
    /* Get a socket handle. */
    sck = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
    if (sck < 0)
    {
        Logger::getInstance().Verbose("sck < 0 ");
        perror("socket");
    }
    int so_broadcast = 1;
    int so_reuseaddr = 1;
    setsockopt(sck, SOL_SOCKET, SO_BROADCAST, SOCKET_OPTION_P&so_broadcast, sizeof(so_broadcast));
    setsockopt(sck, SOL_SOCKET, SO_REUSEADDR, SOCKET_OPTION_P&so_reuseaddr, sizeof(so_reuseaddr));

    if (bind(sck, (struct sockaddr *)&addr, sizeof(addr)) < 0)
    {
        CLOSESOCKET(sck);
    }
    else
    {
        struct sockaddr_in addr_to;
        addr_to.sin_family = AF_INET;
        addr_to.sin_addr.s_addr = inet_addr("255.255.255.255");
        addr_to.sin_port = htons(DHCP_UDP_TO_PORT);
        cout << "dhcp request size is: " << sizeof(*dhcpRequest) << endl;
        long sendResult = sendto(sck, SEND_TO_OPTION dhcpRequest, sizeof(DHCPRequest), 0,
            (struct sockaddr *)&addr_to, sizeof(addr_to));
        if (sendResult < 0)
        {
            Logger::getInstance().Verbose("send failed\n");
        }
        else
        {
            Logger::getInstance().Verbose("send ok\n");
            struct timeval tv_out;
            tv_out.tv_sec = 6;
            tv_out.tv_usec = 0;
            setsockopt(sck, SOL_SOCKET, SO_RCVTIMEO, SOCKET_OPTION_P&tv_out, sizeof(tv_out));
            int bufferSize = 1024;
            PBYTE buffer = new BYTE[bufferSize];
            int addr_len = sizeof(struct sockaddr_in);
            int recvResult = recvfrom(sck, RECV_TO_OPTION buffer, bufferSize, 0, (struct sockaddr *)&addr, (socklen_t*)&addr_len);
            if (recvResult < 0)
            {
                Logger::getInstance().Verbose("recv failed.");
            }
            else
            {
                Logger::getInstance().Verbose("recv succeeded.");
            }
            cout << "recvResult:" << recvResult << endl;
            int i = 0xF0; //offset to first option
            while (i < recvResult)
            {
                BYTE option = buffer[i];
                long option_length = 0;
                if ((i + 1) < recvResult) {
                    option_length = buffer[i + 1];
                    cout << "option_length:" << option_length << endl;
                    Logger::getInstance().Verbose("option_length is: ");
                }
                if (option == 255) {
                    Logger::getInstance().Verbose("255 got");
                }
                if (option == 249) {
                    Logger::getInstance().Verbose("249 got");
                }
                if (option == 3) {
                    Logger::getInstance().Verbose("3 got");
                }
                if (option == 245) {
                    Logger::getInstance().Verbose("245 got, so the ip is:\n");
                    cout << (int)(buffer[i + 2]) << "." << (int)(buffer[i + 3]) << "." << (int)(buffer[i + 4]) << "." << (int)(buffer[i + 5]) << endl;
                    char ip[INET6_ADDRSTRLEN];
                    sprintf(ip, "%d.%d.%d.%d", (int)(buffer[i + 2]), (int)(buffer[i + 3]), (int)(buffer[i + 4]), (int)(buffer[i + 5]));
                    wireServerAddress = ip;
                }
                i += (option_length + 2);
            }
            Logger::getInstance().Verbose("final");
        }

    }

    return 0;
}

int AzureEnvironment::CheckVersion()
{
    return 0;
}


AzureEnvironment::~AzureEnvironment()
{
}
