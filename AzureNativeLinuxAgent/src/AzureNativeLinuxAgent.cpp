#include <string>
#include "CommandExecuter.h"
#include "VMMStartup.h"
using namespace std;

int main(void)
{
    VMMStartup *vmmStartUp = new VMMStartup();
    vmmStartUp->Startup();
}
