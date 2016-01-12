#include <stdio.h> 
#include <string>
#include <dirent.h> 
#include <sys/param.h>
#include "AgentConfig.h"
#include "DeviceRoutine.h"
#include "FileOperator.h"
#include "Logger.h"
#include "StringUtil.h"

using namespace std;
DeviceRoutine::DeviceRoutine()
{
}

void DeviceRoutine::setIsciTimeOut()
{
    AgentConfig::getInstance().LoadConfig();
    string timeOut;
    int getTimeOutResult = AgentConfig::getInstance().getConfig("OS_RootDeviceScsiTimeout", timeOut);
    Logger::getInstance().Verbose("timeout set to:%s", timeOut.c_str());
    if (getTimeOutResult == 0)
    {
        #ifdef BSD
            string commandToSetTimeOut = "sysctl kern.cam.da.default_timeout=" + timeOut;
            CommandExecuter::RunGetOutput(commandToSetTimeOut.c_str());
        #else
            DIR           *d;
            struct dirent *dir;
            d = opendir("/sys/block");

            if (d != NULL)
            {
                while ((dir = readdir(d)) != NULL)
                {
                    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
                    string directoryName = string(dir->d_name);
                    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
                    if (directoryName.find("sd")==0)
                    {
                        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
                        string timeOutFile = "/sys/block/" + directoryName + "/device/timeout";
                        setBlockDeviceTimeOut(timeOutFile.c_str(), timeOut.c_str());
                        Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
                        break;
                    }
                }
                closedir(d);
            }
        #endif
    }
}

string * DeviceRoutine::findRomDevice()
{
    string *result = NULL;
#ifdef BSD
    //TODO just get the information from /proc/sys/dev/cdrom/info
    DIR           *d;
    struct dirent *dir;
    d = opendir("/dev");

    if (d)
    {
        while ((dir = readdir(d)) != NULL)
        {
            string directoryName = string(dir->d_name);

            if (directoryName.find_first_of("acd"))
            {
                break;
            }
        }
        closedir(d);
        result = new string(dir->d_name);

        delete dir;
        dir = NULL;
    }
    return result;
#else
    struct udev *udev;
    struct udev_enumerate *enumerate;
    struct udev_list_entry *devices, *dev_list_entry;
    struct udev_device *dev;

    /* Create the udev object */
    udev = udev_new();
    if (!udev) {
        printf("Can't create udev\n");
        return result;
    }

    /* Create a list of the devices in the 'hidraw' subsystem. */
    enumerate = udev_enumerate_new(udev);
    udev_enumerate_add_match_subsystem(enumerate, "block");
    udev_enumerate_scan_devices(enumerate);
    devices = udev_enumerate_get_list_entry(enumerate);
    /* For each item enumerated, print out its information.
    udev_list_entry_foreach is a macro which expands to
    a loop. The loop will be executed for each member in
    devices, setting dev_list_entry to a list entry
    which contains the device's path in /sys. */

    udev_list_entry_foreach(dev_list_entry, devices) {
        const char *path;

        /* Get the filename of the /sys entry for the device
        and create a udev_device object (dev) representing it */
        path = udev_list_entry_get_name(dev_list_entry);
        dev = udev_device_new_from_syspath(udev, path);

        /* usb_device_get_devnode() returns the path to the device node
        itself in /dev. */
        printf("Device Node Path: %s\n", udev_device_get_devnode(dev));

        /* From here, we can call get_sysattr_value() for each file
        in the device's /sys entry. The strings passed into these
        functions (idProduct, idVendor, serial, etc.) correspond
        directly to the files in the directory which represents
        the USB device. Note that USB strings are Unicode, UCS2
        encoded, but the strings returned from
        udev_device_get_sysattr_value() are UTF-8 encoded. */
        printf("\tVID/PID: %s %s\n", udev_device_get_sysattr_value(dev, "idVendor"), udev_device_get_sysattr_value(dev, "idProduct"));
        printf("\t%s\n  %s\n", udev_device_get_sysattr_value(dev, "manufacturer"), udev_device_get_sysattr_value(dev, "product"));
        printf("\tserial: %s\n", udev_device_get_sysattr_value(dev, "serial"));
        printf("\tType: '%s'\n", udev_device_get_devtype(dev));
        printf("\tVendor: '%s'\n", udev_device_get_sysattr_value(dev, "device/vendor"));
        printf("\tModel: '%s'\n", udev_device_get_property_value(dev, "ID_MODEL"));
        printf("\tSerial: '%s'\n", udev_device_get_property_value(dev, "ID_SERIAL"));
        printf("\tShort serial: '%s'\n", udev_device_get_property_value(dev, "ID_SERIAL_SHORT"));
        printf("\tRevision: '%s'\n", udev_device_get_property_value(dev, "ID_REVISION"));
        const char * model = udev_device_get_property_value(dev, "ID_MODEL");
        if (model != NULL) {
            string modelStr(model);
            if (modelStr.compare("Virtual_CD") == 0)
            {
                result = new string(udev_device_get_devnode(dev));
            }
        }
        udev_device_unref(dev);
    }
    /* Free the enumerator object */
    udev_enumerate_unref(enumerate);

    udev_unref(udev);
    return result;
#endif
}


void DeviceRoutine::setBlockDeviceTimeOut(const char * timeOutFile, const char * timeOut)
{
    Logger::getInstance().Verbose("File[%s] Line[%d]", __FILE__, __LINE__);
    string timeOutContent;
    int getContentResult =  FileOperator::get_content(timeOutFile, timeOutContent);
    if (getContentResult == 0)
    {
        StringUtil::trim(timeOutContent);
        string timeOutToSet = string(timeOut);
        if (timeOutContent != timeOutToSet)
        {
            FileOperator::save_file(timeOutToSet, string(timeOutFile));
        }
        //TODO implement this.
    }
    else
    {
        //TODO implement this.
    }
}

DeviceRoutine::~DeviceRoutine()
{
}
