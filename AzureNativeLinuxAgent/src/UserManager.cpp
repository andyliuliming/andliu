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
        CommandResultPtr addUserResult = CommandExecuter::RunGetOutput(command);
        //TODO deallocate the c_str();
        Logger::getInstance().Log("user add result: %s", addUserResult->output->c_str());
        AgentConfig::getInstance().LoadConfig();

        string crypt_id;
        int getCryptIdResult = AgentConfig::getInstance().getConfig("Provisioning_PasswordCryptId", crypt_id);
        if (getCryptIdResult != 0)
        {
            crypt_id = string("6");
        }

        string salt_len;
        int getSaltLenResult = AgentConfig::getInstance().getConfig("Provisioning_PasswordCryptSaltLength", salt_len);

        int salt_len_val = 10;
        if (getSaltLenResult != 0)
        {
            salt_len_val = atoi((salt_len).c_str());
        }

        if (salt_len_val == 0)
        {
            return 1;
        }

        char * salt = new char[salt_len_val];
        StringUtil::gen_random(salt, salt_len_val);
        string realSalt = crypt_id + salt;
        char * passWordToSet = crypt(passWord, realSalt.c_str());
        delete salt;
        salt = NULL;
        string changePasswordCmd = string("usermod -p '") + passWordToSet + "' " + userNameToCreate;
        delete passWordToSet;
        passWordToSet = NULL;
        CommandResultPtr commandResult = CommandExecuter::RunGetOutput(changePasswordCmd.c_str());
        Logger::getInstance().Log("user add result: %s", commandResult->output->c_str());
        return 0;
    }
}


UserManager::~UserManager()
{
}
