#include <string>
#include "AgentConfig.h"
#include "StringUtil.h"
#include "UserManager.h"
#ifdef _WIN32
#else
#include <crypt.h>
#endif
using namespace std;

UserManager::UserManager()
{
}


void UserManager::CreateUser(const char * userName, const char * passWord)
{

#ifdef _WIN32
#else
    struct passwd * existed = getpwnam(userName);

    if (existed != NULL) {
        cout << "user existed already" << endl;
    }else
    {
    string command = string("useradd -m ") + userName;
    CommandExecuter::RunGetOutput(command.c_str());


    AgentConfig::getInstance().LoadConfig();

    string *crypt_id = AgentConfig::getInstance().getConfig("Provisioning_PasswordCryptId");
    if (crypt_id == NULL) {
        crypt_id = new string("6");
    }

    string *salt_len = AgentConfig::getInstance().getConfig("Provisioning_PasswordCryptSaltLength");

    int salt_len_val = 10;
    if (salt_len != NULL)
    {
        salt_len_val = stoi(*salt_len);
    }

    char * salt = new char[salt_len_val];
    StringUtil::gen_random(salt, salt_len_val);
    string realSalt = string(*crypt_id)+salt;
    char * passWordToSet = crypt(passWord, realSalt.c_str());

    string changePasswordCmd = string("usermod -p '") + passWordToSet + "'" + userName;
    CommandResult *commandResult = CommandExecuter::RunGetOutput(changePasswordCmd.c_str());
    cout << *(commandResult->output) << endl;
}
#endif
}


UserManager::~UserManager()
{
}
