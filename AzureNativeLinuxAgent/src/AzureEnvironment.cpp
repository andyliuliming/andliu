#include "AzureEnvironment.h"
#include "CommandExecuter.h"
#include "Macros.h"
#include "NetworkRoutine.h"
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
AzureEnvironment::AzureEnvironment()
{
}

void AzureEnvironment::DoDhcpWork()
{
    //Open DHCP port if iptables is enabled.
    CommandExecuter *executer = new CommandExecuter();
    CommandResult * commandResult = executer->RunGetOutput("iptables -D INPUT -p udp --dport 68 -j ACCEPT");
    delete commandResult;
    commandResult = NULL;
    commandResult = executer->RunGetOutput("iptables -I INPUT -p udp --dport 68 -j ACCEPT");
    delete commandResult;
    commandResult = NULL;

    BYTE* dhcpRequest = this->BuildDhcpRequest();

    #ifdef _WIN32
        //TOTO: implement this in windows
    #else
        int sck = 0;
        sck = socket(PF_INET, SOCK_DGRAM, 0);
    #endif
}

BYTE* AzureEnvironment::BuildDhcpRequest()
{
    BYTE * dhcpRequest = new BYTE[244];
    NetworkRoutine *routine = new NetworkRoutine();
    string macAddress = routine->GetMacAddress();



    return dhcpRequest;
}


AzureEnvironment::~AzureEnvironment()
{
}
