#include <string>
#include "AgentConfig.h"
#include "Logger.h"
#include "StringUtil.h"
#include "UserManager.h"
#ifdef _WIN32
#else
#include <cstdlib>
#include <unistd.h>
#endif
using namespace std;

UserManager::UserManager()
{
}


int UserManager::CreateUser(const char * userName, const char * passWord)
{
#ifdef _WIN32
#else
    string userNameToCreate = string(userName);

    struct passwd * existed = getpwnam(userNameToCreate.c_str());

    if (existed != NULL)
    {
        Logger::getInstance().Error("user existed already");
        return 1;
    }
    else
    {
        string command = string("useradd -m ") + userNameToCreate;
        CommandResultPtr addUserResult = CommandExecuter::RunGetOutput(command.c_str());
        Logger::getInstance().Log("user add result: %s", addUserResult->output->c_str());
        AgentConfig::getInstance().LoadConfig();

        string *crypt_id = AgentConfig::getInstance().getConfig("Provisioning_PasswordCryptId");
        if (crypt_id == NULL)
        {
            crypt_id = new string("6");
        }

        string *salt_len = AgentConfig::getInstance().getConfig("Provisioning_PasswordCryptSaltLength");

        int salt_len_val = 10;
        if (salt_len != NULL)
        {
            salt_len_val = atoi((*salt_len).c_str());
        }

        if (salt_len_val == 0)
        {
            delete salt_len;
            salt_len = NULL;
            return 1;
        }

        delete salt_len;
        salt_len = NULL;

        char * salt = new char[salt_len_val];
        StringUtil::gen_random(salt, salt_len_val);
        string realSalt = string(*crypt_id) + salt;
        char * passWordToSet = crypt(passWord, realSalt.c_str());

        string changePasswordCmd = string("usermod -p '") + passWordToSet + "' " + userNameToCreate;
        CommandResultPtr commandResult = CommandExecuter::RunGetOutput(changePasswordCmd.c_str());
        Logger::getInstance().Log("user add result: %s", commandResult->output->c_str());
        return 0;
    }
#endif
}


UserManager::~UserManager()
{
}
