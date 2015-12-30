#include <string>
#include "AgentConfig.h"
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
    bool provisioned = provisioner->isProvisioned();
    while (true) {
        // a. UpdateGoalState
        // b. process goal state

        GoalState *goalState = new GoalState();
        goalState->UpdateGoalState();

        StatusReporter *statusReporter = new StatusReporter();

        if (!provisioned) {
            statusReporter->ReportNotReady(azureEnvironment, goalState, "Provisioning", "Starting");
        }

        goalState->Process();

        if (!provisioned) {
            Logger::getInstance().Log("doing provision.");
            provisioner->Prosess();
            provisioned = true;
        }

        AgentConfig::getInstance().LoadConfig();

        string *type = AgentConfig::getInstance().getConfig("Provisioning_SshHostKeyPairType");
        if (type == NULL) {
            type = new string("rsa");
        }

        string *regenerateKeys = AgentConfig::getInstance().getConfig("Provisioning_RegenerateSshHostKeyPair");
        if (regenerateKeys == NULL || regenerateKeys->find("y") == 0) {
            CommandExecuter::RunGetOutput("rm -f /etc/ssh/ssh_host_*key*");
            CommandResult * commandResult = CommandExecuter::RunGetOutput(("ssh-keygen -N '' -t " + *type + " -f /etc/ssh/ssh_host_" + *type + "_key").c_str());
            statusReporter->ReportRoleProperties(azureEnvironment, goalState, commandResult->output->c_str());
        }

        if (provisioned) {
            statusReporter->ReportReady(azureEnvironment, goalState);
        }

        SLEEP(25 * 1000);
    }
}
