#include <string>
#include "AzureEnvironment.h"
#include "CommandExecuter.h"
#include "DeviceRoutine.h"
#include "GoalState.h"
#include "Logger.h"
#include "Macros.h"
#include "Provisioner.h"
#include "StatusReporter.h"
#include "VMMStartup.h"
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
    Provisioner *provisioner = new Provisioner();
    while (true) {
        // a. UpdateGoalState
        // b. process goal state

        GoalState *goalState = new GoalState();
        goalState->UpdateGoalState();

        if (!provisioner->isProvisioned()) {
            StatusReporter *statusReporter = new StatusReporter();
            statusReporter->ReportNotReady(azureEnvironment, goalState, "Provisioning", "Starting");
        }

        goalState->Process();

        if (!provisioner->isProvisioned()) {
            Logger::getInstance().Log("doing provision.");
            provisioner->Prosess();
        }
        SLEEP(25 * 1000);
    }
}
