#include "AzureEnvironment.h"
#include "CommandExecuter.h"
#include "Macros.h"
#include "NetworkRoutine.h"
#include <stdio.h>
#include "StringUtil.h"
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
AzureEnvironment::AzureEnvironment()
{
}

void AzureEnvironment::DoDhcpWork()
{
    //Open DHCP port if iptables is enabled.
    CommandResult * commandResult = CommandExecuter::RunGetOutput("iptables -D INPUT -p udp --dport 68 -j ACCEPT");
    delete commandResult;
    commandResult = NULL;
    commandResult = CommandExecuter::RunGetOutput("iptables -I INPUT -p udp --dport 68 -j ACCEPT");
    delete commandResult;
    commandResult = NULL;

    PDHCPRequest dhcpRequest = NetworkRoutine::BuildDHCPRequest();

    bool missingDefaultRoute = true;
    commandResult = CommandExecuter::RunGetOutput("route -n");
    vector<string> splitResult;
    string spliter = "\n";
    /*CommandResult &refCommandResult = *commandResult;*/
    StringUtil::string_split((*(commandResult->output)), spliter, &splitResult);
    for (unsigned int i = 0; i < splitResult.size(); i++) {
        cout << splitResult[i] << " ";
    }
    /*string routes = RunGetOutput("route -n")[1]*/
    #ifdef _WIN32
        //TOTO: implement this in windows
    #else
        int sck = 0;
        sck = socket(PF_INET, SOCK_DGRAM, 0);
    #endif
}


AzureEnvironment::~AzureEnvironment()
{
}
