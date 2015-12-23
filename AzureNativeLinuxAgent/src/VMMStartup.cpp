#include "VMMStartup.h"
#include "CommandExecuter.h"
#include "Logger.h"
#include "FileFunctions.h"

VMMStartup::VMMStartup()
{
    this->VMM_CONFIG_FILE_NAME == "linuxosconfiguration.xml";
}

void VMMStartup::TryLoadAtapiix() {
    CommandExecuter *executer = new CommandExecuter();
    CommandResult *commandResult = executer->RunGetOutput("uname -r");

    string krn_pth = "/lib/modules/" + *(commandResult->output) + "/kernel/drivers/ata/ata_piix.ko";
    delete commandResult;
    commandResult = NULL;
    commandResult = executer->RunGetOutput("lsmod | grep ata_piix");
    if (commandResult->exitCode == EXIT_SUCCESS)
    {
        Logger::getInstance().Log("");
    }
}

void VMMStartup::Startup() {
    this->TryLoadAtapiix();

    if (!file_exists("/mnt/cdrom/secure")) {

    }
    /*if os.path.exists('/mnt/cdrom/secure') == False:
    CreateDir("/mnt/cdrom/secure", "root", 0700)*/
}

VMMStartup::~VMMStartup()
{
}
