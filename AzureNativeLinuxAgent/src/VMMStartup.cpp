#include "VMMStartup.h"
#include "CommandExecuter.h"
#include "Logger.h"
#include "FileOperator.h"

VMMStartup::VMMStartup()
{
    this->VMM_CONFIG_FILE_NAME = "linuxosconfiguration.xml";
    this->SECURE_MOUNT_POINT = "/mnt/cdrom/secure";
    this->VMM_CONFIG_FILE_FULL_PATH = this->SECURE_MOUNT_POINT + "/" + this->VMM_CONFIG_FILE_NAME;
}

void VMMStartup::TryLoadAtapiix() {
    Logger::getInstance().Verbose("trying to load ata_piix");
    CommandResult *commandResult = CommandExecuter::RunGetOutput("uname -r");

    string krn_pth = "/lib/modules/" + *(commandResult->output) + "/kernel/drivers/ata/ata_piix.ko";

    Logger::getInstance().Verbose("clear it.");
    delete commandResult;
    commandResult = NULL;

    Logger::getInstance().Verbose("trying to find ata_piix");
    commandResult = CommandExecuter::RunGetOutput("lsmod | grep ata_piix");
    if (commandResult->exitCode == EXIT_SUCCESS)
    {
        Logger::getInstance().Log("Module driver for ATAPI CD-ROM is already present.");
    }
    else
    {
        delete commandResult;
        commandResult = NULL;

        if (FileOperator::file_exists(krn_pth)) {
            string insertModuleCommand = "insmod " + krn_pth;
            commandResult = CommandExecuter::RunGetOutput(insertModuleCommand.c_str());
        }
    }
}

void VMMStartup::Startup() {
    this->TryLoadAtapiix();

    if (!FileOperator::file_exists(SECURE_MOUNT_POINT.c_str())) {
        FileOperator::make_dir(SECURE_MOUNT_POINT.c_str());
        //TODO make this folder "root", 0700)
    }
}

VMMStartup::~VMMStartup()
{
}
