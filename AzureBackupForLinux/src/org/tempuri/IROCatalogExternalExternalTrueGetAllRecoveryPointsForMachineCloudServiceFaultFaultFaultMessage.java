
package org.tempuri;

import javax.xml.ws.WebFault;


/**
 * This class was generated by Apache CXF 3.0.2
 * 2014-12-11T20:29:56.027+08:00
 * Generated source version: 3.0.2
 */

@WebFault(name = "CloudServiceFault", targetNamespace = "http://windowscloudbackup.com/CloudCommon/V2011_09")
public class IROCatalogExternalExternalTrueGetAllRecoveryPointsForMachineCloudServiceFaultFaultFaultMessage extends Exception {
    
    private com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceFault cloudServiceFault;

    public IROCatalogExternalExternalTrueGetAllRecoveryPointsForMachineCloudServiceFaultFaultFaultMessage() {
        super();
    }
    
    public IROCatalogExternalExternalTrueGetAllRecoveryPointsForMachineCloudServiceFaultFaultFaultMessage(String message) {
        super(message);
    }
    
    public IROCatalogExternalExternalTrueGetAllRecoveryPointsForMachineCloudServiceFaultFaultFaultMessage(String message, Throwable cause) {
        super(message, cause);
    }

    public IROCatalogExternalExternalTrueGetAllRecoveryPointsForMachineCloudServiceFaultFaultFaultMessage(String message, com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceFault cloudServiceFault) {
        super(message);
        this.cloudServiceFault = cloudServiceFault;
    }

    public IROCatalogExternalExternalTrueGetAllRecoveryPointsForMachineCloudServiceFaultFaultFaultMessage(String message, com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceFault cloudServiceFault, Throwable cause) {
        super(message, cause);
        this.cloudServiceFault = cloudServiceFault;
    }

    public com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceFault getFaultInfo() {
        return this.cloudServiceFault;
    }
}
