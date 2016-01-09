#include <string>
#include "AgentConfig.h"
#include "AzureEnvironment.h"
#include "CertificationRoutine.h"
#include "CommandExecuter.h"
#include "DeviceRoutine.h"
#include "ExtensionsConfig.h"
#include "FileOperator.h"
#include "GoalState.h"
#include "Logger.h"
#include "Macros.h"
#include "Provisioner.h"
#include "StatusReporter.h"
#include "StringUtil.h"
#include "VMMStartup.h"
#ifdef _WIN32
#include <direct.h>
#else
#endif
#include <algorithm>
#include <string.h>
#include <stdlib.h>
#include <regex>
using namespace std;

int main(void)
{
    int chdirResult = chdir(WORKING_DIR);
#ifdef _WIN32
#else
    int currentPid = getpid();
    char *pidBuff = new char[32];
    sprintf(pidBuff, "%d", currentPid);
    FileOperator::save_file(pidBuff, strlen(pidBuff), WAAGENT_PID_FILE);
    delete pidBuff;
    pidBuff = NULL;
#endif

    // 1.  vmm start up
    Logger::getInstance().Log("starting vmm");
    VMMStartup *vmmStartUp = new VMMStartup();
    vmmStartUp->Startup();

    // 2. do dhcp 
    Logger::getInstance().Log("DoDhcpWork");
    AzureEnvironment *azureEnvironment = new AzureEnvironment();
    int dhcpWorkResult = 1;

    while (dhcpWorkResult != 0)
    {
        dhcpWorkResult = azureEnvironment->DoDhcpWork();
        if (dhcpWorkResult != 0)
        {
            Logger::getInstance().Error("no azure environment found.");
            SLEEP(120 * 1000);
        }
    }
    Logger::getInstance().Log("azure environment found.");

    // 3. check version
    int checkResult = azureEnvironment->CheckVersion();
    if (checkResult != 0)
    {
        Logger::getInstance().Error("check version failed, so exit.");
        exit(1);
    }

    // 4. Set SCSI timeout on SCSI disks
    DeviceRoutine::setIsciTimeOut();
    // 5. GenerateTransportCert
    int transportCertGenerationResult = CertificationRoutine::GenerateTransportCertification();
    if (transportCertGenerationResult != 0)
    {
        Logger::getInstance().Error("generate the certification failed");
    }

    // 6. where true daemon
    Provisioner *provisioner = new Provisioner();
    bool provisioned = provisioner->isProvisioned();
    while (true)
    {
        // a. UpdateGoalState
        // b. process goal state

        GoalState *goalState = new GoalState();
        goalState->UpdateGoalState(azureEnvironment);

        StatusReporter *statusReporter = new StatusReporter();

        if (!provisioned)
        {
            statusReporter->ReportNotReady(azureEnvironment, goalState, "Provisioning", "Starting");
        }

        if (!provisioned)
        {
            Logger::getInstance().Log("doing provision.");
            provisioner->Prosess();
            provisioned = true;
        }

        AgentConfig::getInstance().LoadConfig();

        string *type = AgentConfig::getInstance().getConfig("Provisioning_SshHostKeyPairType");
        if (type == NULL)
        {
            type = new string("rsa");
        }

        string host_key_path = string("/etc/ssh/ssh_host_") + (*type) + "_key.pub";
        string commandToGetFingerPrint = string("ssh-keygen -lf ") + host_key_path;
        shared_ptr<CommandResult> fingerprintResult = CommandExecuter::RunGetOutput(commandToGetFingerPrint.c_str());
        vector<string> splitResult;
        string spliter = " ";
        StringUtil::string_split(*(fingerprintResult->output), spliter, &splitResult);
        statusReporter->ReportRoleProperties(azureEnvironment, goalState, splitResult[1].c_str());

        int sleepToReduceAccessDenied = 3;
        SLEEP(3 * 1000);
        if (provisioned)
        {
            Logger::getInstance().Log("reporting ready");
            statusReporter->ReportReady(azureEnvironment, goalState);
        }

        goalState->Process();

        SLEEP(25 * 1000);
    }
}
