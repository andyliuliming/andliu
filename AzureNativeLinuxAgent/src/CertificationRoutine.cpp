#include "CertificationRoutine.h"
#include "CommandExecuter.h"
#include "FileOperator.h"
#include <string>
using namespace std;

CertificationRoutine::CertificationRoutine()
{
}

int CertificationRoutine::GenerateTransportCertification()
{
    //TODO: generate the openssl
    CommandResultPtr result = CommandExecuter::RunGetOutput("openssl req -x509 -nodes -subj /CN=LinuxTransport -days 32768 -newkey rsa:2048 -keyout TransportPrivate.pem -out TransportCert.pem");
    return result->exitCode;
}

CertificationRoutine::~CertificationRoutine()
{
}
