#include "Provisioner.h"
#include "DeviceRoutine.h"


Provisioner::Provisioner()
{
}

bool Provisioner::isProvisioned()
{
    return false;
}

void Provisioner::Prosess()
{
    DeviceRoutine::findRomDevice();
}


Provisioner::~Provisioner()
{
}
