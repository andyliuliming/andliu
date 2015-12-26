#include <string>
#include "CommandExecuter.h"
#include "VMMStartup.h"
#include "Macros.h"
#include "AzureEnvironment.h"
#include "Logger.h"
#include "DeviceRoutine.h"

using namespace std;

int main(void)
{
    // 1.  vmm start up
    Logger::getInstance().Log("starting vmm");
    VMMStartup *vmmStartUp = new VMMStartup();
    vmmStartUp->Startup();

    // 2. do dhcp 
    Logger::getInstance().Log("DoDhcpWork"); 
    AzureEnvironment *azureEnvironment = new AzureEnvironment();
    int dhcpWorkResult = azureEnvironment->DoDhcpWork();

    // 3. check version
    int checkResult = azureEnvironment->CheckVersion();

    // 4. Set SCSI timeout on SCSI disks
    DeviceRoutine::setIsciTimeOut();
    // 5. GenerateTransportCert

    // 6. where true daemon
    while (true) {
        // a. UpdateGoalState
        // b. process goal state
        SLEEP(25 * 1000);
    }
}
