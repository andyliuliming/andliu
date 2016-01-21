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
#include <algorithm>
#include <string.h>
#include <stdlib.h>
#include <regex>
using namespace std;

int main(void)
{
    int chdirResult = chdir(WORKING_DIR);

    int currentPid = getpid();
    char *pidBuff = new char[32];
    sprintf(pidBuff, "%d", currentPid);
    FileOperator::save_file(pidBuff, strlen(pidBuff), WAAGENT_PID_FILE);
    delete pidBuff;
    pidBuff = NULL;


    // 2. do dhcp 
    Logger::getInstance().Log("DoDhcpWork");
    AzureEnvironment azureEnvironment;// = new AzureEnvironment();
    int dhcpWorkResult = 1;

    while (dhcpWorkResult != 0)
    {
        dhcpWorkResult = azureEnvironment.DoDhcpWork();
        if (dhcpWorkResult != 0)
        {
            Logger::getInstance().Error("no azure environment found.");
            SLEEP(120 * 1000);
        }
    }
    Logger::getInstance().Log("azure environment found.");

    // 3. check version
    int checkResult = azureEnvironment.CheckVersion();
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
    string incarnationReturned;
    bool justStarted = true;
    GoalState goalState;

    StatusReporter *statusReporter = new StatusReporter();

    while (true)
    {
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
        // a. UpdateGoalState
        // b. process goal state
        if (justStarted
            || goalState.incarnation.compare(incarnationReturned) != 0)
        {
            Logger::getInstance().Verbose("incarnation in goal state is %s, incarnaitonReturned is %s", goalState.incarnation.c_str(), incarnationReturned.c_str());
            justStarted = false;
            Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
            Logger::getInstance().Verbose("start goal state");
            goalState.UpdateGoalState(azureEnvironment);
            Logger::getInstance().Verbose("end update goal state");
            if (!provisioned)
            {
                statusReporter->ReportNotReady(azureEnvironment, goalState, "Provisioning", "Starting");
                Logger::getInstance().Verbose("report not ready end");
            }

            if (!provisioned)
            {
                Logger::getInstance().Log("doing provision.");
                int provisionResult = provisioner->Prosess();
                if (provisioned == 0)
                {
                    provisioner->markProvisioned();
                    provisioned = true;
                }
                else
                {
                    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
                    Logger::getInstance().Log("provision failed");
                }
            }

            AgentConfig::getInstance().LoadConfig();

            string type;
            int result = AgentConfig::getInstance().getConfig("Provisioning_SshHostKeyPairType", type);
            if (result != 0)
            {
                type = "rsa";
            }
            Logger::getInstance().Verbose("start process.");
            goalState.Process();
            Logger::getInstance().Verbose("end process");

            string host_key_path = string("/etc/ssh/ssh_host_") + type + "_key.pub";

            string commandToGetFingerPrint = string("ssh-keygen -lf ") + host_key_path;
            CommandResult fingerPrintResult;
            CommandExecuter::RunGetOutput(commandToGetFingerPrint, fingerPrintResult);
            vector<string> splitResult;
            string spliter = " ";
            StringUtil::string_split(*(fingerPrintResult.output), spliter, &splitResult);
            statusReporter->ReportRoleProperties(azureEnvironment, goalState, splitResult[1].c_str());
        }
        else
        {
            Logger::getInstance().Verbose("the goal status is null or the incarnationReturned is empty, or the incarnation is same");
        }

        int sleepToReduceAccessDenied = 3;
        SLEEP(3 * 1000);
        if (provisioned)
        {
            Logger::getInstance().Log("reporting ready");
            Logger::getInstance().Verbose("start do report ready");
            int reportReadyResult = statusReporter->ReportReady(azureEnvironment, goalState, incarnationReturned);
            Logger::getInstance().Verbose("end report ready result: %d", reportReadyResult);
        }

        SLEEP(25 * 1000);
    }
}
