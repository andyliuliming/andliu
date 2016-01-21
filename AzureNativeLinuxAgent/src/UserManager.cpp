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


int UserManager::CreateUser(const string& userName, const string& passWord)
{
    Logger::getInstance().Warning("creating the user");
    struct passwd * existed = getpwnam(userName.c_str());

    if (existed != NULL)
    {
        Logger::getInstance().Error("user existed already");
        return 1;
    }
    else
    {

#ifdef BSD
        string command = string("pw useradd ") + userName + " -m";
        CommandResult addUserResult;
        CommandExecuter::RunGetOutput(command, addUserResult);
        //TODO deallocate the c_str();
        Logger::getInstance().Log("user add result: %s", addUserResult.output->c_str());
        AgentConfig::getInstance().LoadConfig();

        string changePasswordCmd = string("echo -n ") + password + string(" | pw usermod ") + userName + " -h0";
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
        CommandResult commandResult;
        CommandExecuter::RunGetOutput(changePasswordCmd, commandResult);
        if (commandResult.exitCode == 0)
        {
            Logger::getInstance().Warning("user add result:%d, %s", commandResult.exitCode, commandResult.output->c_str());
        }
        else
        {
            Logger::getInstance().Warning("user add result:%d %s", commandResult.exitCode, commandResult.output->c_str());
        }
#else
        string command = string("useradd -m ") + userName;
        CommandResult addUserResult;
        CommandExecuter::RunGetOutput(command,addUserResult);
        //TODO deallocate the c_str();
        Logger::getInstance().Log("user add result: %s", addUserResult.output->c_str());
        AgentConfig::getInstance().LoadConfig();

        string crypt_id;
        int getCryptIdResult = AgentConfig::getInstance().getConfig("Provisioning_PasswordCryptId", crypt_id);
        if (getCryptIdResult != 0)
        {
            Logger::getInstance().Warning("Provisioning_PasswordCryptId not found");
            crypt_id = "6";
        }

        string salt_len;
        int getSaltLenResult = AgentConfig::getInstance().getConfig("Provisioning_PasswordCryptSaltLength", salt_len);

        int salt_len_val = 10;
        if (getSaltLenResult == 0)
        {
            Logger::getInstance().Warning("Provisioning_PasswordCryptSaltLength found");
            salt_len_val = atoi((salt_len).c_str());
        }

        if (salt_len_val == 0)
        {
            Logger::getInstance().Warning("salt_len_val is zero");
            return 1;
        }

        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
        char * salt = new char[salt_len_val];
        StringUtil::gen_random(salt, salt_len_val);
        string realSalt = crypt_id + salt;
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
        //TODO check whether the c_str is deallocated.
        char * passWordToSet = crypt(passWord.c_str(), realSalt.c_str());
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
        delete salt;
        salt = NULL;
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);

        string changePasswordCmd = string("usermod -p '") + passWordToSet + "' " + userName;
        delete passWordToSet;
        passWordToSet = NULL;
        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
        CommandResult commandResult;
        CommandExecuter::RunGetOutput(changePasswordCmd, commandResult);
        if (commandResult.exitCode == 0)
        {
            Logger::getInstance().Warning("user add result:%d, %s", commandResult.exitCode, commandResult.output->c_str());
        }
        else
        {
            Logger::getInstance().Warning("user add result:%d %s", commandResult.exitCode, commandResult.output->c_str());
        }
        return 0;
#endif
    }
}


UserManager::~UserManager()
{
}
