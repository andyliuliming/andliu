#include "VMMStartup.h"
#include "CommandExecuter.h"
#include "Logger.h"
#include "FileFunctions.h"

VMMStartup::VMMStartup()
{
    this->VMM_CONFIG_FILE_NAME == "linuxosconfiguration.xml";
}

void VMMStartup::TryLoadAtapiix() {
    Logger::getInstance().Verbose("trying to load ata_piix");
    CommandExecuter *executer = new CommandExecuter();
    CommandResult *commandResult = executer->RunGetOutput("uname -r");

    string krn_pth = "/lib/modules/" + *(commandResult->output) + "/kernel/drivers/ata/ata_piix.ko";

    Logger::getInstance().Verbose("clear it.");
    delete commandResult;
    commandResult = NULL;

    Logger::getInstance().Verbose("trying to find ata_piix");
    commandResult = executer->RunGetOutput("lsmod | grep ata_piix");
    if (commandResult->exitCode == EXIT_SUCCESS)
    {
        Logger::getInstance().Log("Module driver for ATAPI CD-ROM is already present.");
    }
    else
    {
        delete commandResult;
        commandResult = NULL;

        if (file_exists(krn_pth)) {
            string insertModuleCommand = "insmod " + krn_pth;
            commandResult = executer->RunGetOutput(insertModuleCommand.c_str());
        }
    }
}

void VMMStartup::Startup() {
    this->TryLoadAtapiix();
    string secureMountPoint = "/mnt/cdrom/secure";
    if (!file_exists(secureMountPoint.c_str())) {
        make_dir(secureMountPoint.c_str());
    }
}

VMMStartup::~VMMStartup()
{
}
