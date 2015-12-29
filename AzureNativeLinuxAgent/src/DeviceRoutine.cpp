#include <iostream>
using namespace std; 
#include "AgentConfig.h"
#include "DeviceRoutine.h"
#include "Logger.h"

DeviceRoutine::DeviceRoutine()
{
}

void DeviceRoutine::setIsciTimeOut()
{
    AgentConfig::getInstance().LoadConfig(NULL);

    string timeOut = AgentConfig::getInstance().getConfig("OS_RootDeviceScsiTimeout");

    Logger::getInstance().Verbose("timeout set to:");
    Logger::getInstance().Verbose(timeOut.c_str());
}

void DeviceRoutine::findRomDevice()
{
#ifdef _WIN32
#else
    struct udev *udev;
    struct udev_enumerate *enumerate;
    struct udev_list_entry *devices, *dev_list_entry;
    struct udev_device *dev;

    /* Create the udev object */
    udev = udev_new();
    if (!udev) {
        printf("Can't create udev\n");
        exit(1);
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

        /* The device pointed to by dev contains information about
        the hidraw device. In order to get information about the
        USB device, get the parent device with the
        subsystem/devtype pair of "usb"/"usb_device". This will
        be several levels up the tree, but the function will find
        it.*/
        /*dev = udev_device_get_parent_with_subsystem_devtype(
            dev,
            "usb",
            "usb_device");
        if (!dev) {
            printf("Unable to find parent usb device.");
            exit(1);
        }*/

        /* From here, we can call get_sysattr_value() for each file
        in the device's /sys entry. The strings passed into these
        functions (idProduct, idVendor, serial, etc.) correspond
        directly to the files in the directory which represents
        the USB device. Note that USB strings are Unicode, UCS2
        encoded, but the strings returned from
        udev_device_get_sysattr_value() are UTF-8 encoded. */
        printf("\tVID/PID: %s %s\n",
            udev_device_get_sysattr_value(dev, "idVendor"),
            udev_device_get_sysattr_value(dev, "idProduct"));
        printf("\t%s\n  %s\n",
            udev_device_get_sysattr_value(dev, "manufacturer"),
            udev_device_get_sysattr_value(dev, "product"));
        printf("\tserial: %s\n",
            udev_device_get_sysattr_value(dev, "serial"));
        printf("\tType: '%s'\n", udev_device_get_devtype(dev));
        printf("\tVendor: '%s'\n", udev_device_get_sysattr_value(dev, "device/vendor"));
        printf("\tModel: '%s'\n", udev_device_get_property_value(dev, "ID_MODEL"));
        printf("\tSerial: '%s'\n", udev_device_get_property_value(dev, "ID_SERIAL"));
        printf("\tShort serial: '%s'\n", udev_device_get_property_value(dev, "ID_SERIAL_SHORT"));
        printf("\tRevision: '%s'\n", udev_device_get_property_value(dev, "ID_REVISION"));
        udev_device_unref(dev);
    }
    /* Free the enumerator object */
    udev_enumerate_unref(enumerate);

    udev_unref(udev);
#endif
}


DeviceRoutine::~DeviceRoutine()
{
}
