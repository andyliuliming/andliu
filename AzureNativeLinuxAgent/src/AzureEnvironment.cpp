#include "AzureEnvironment.h"
#include "CommandExecuter.h"

#include "Macros.h"
#include <stdio.h>
#include "NetworkRoutine.h"

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
