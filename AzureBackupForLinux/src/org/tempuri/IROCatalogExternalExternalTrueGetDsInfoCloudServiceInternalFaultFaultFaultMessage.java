
package org.tempuri;

import javax.xml.ws.WebFault;


/**
 * This class was generated by Apache CXF 3.0.2
 * 2014-12-11T20:29:56.263+08:00
 * Generated source version: 3.0.2
 */

@WebFault(name = "CloudServiceInternalFault", targetNamespace = "http://windowscloudbackup.com/CloudCommon/V2011_09")
public class IROCatalogExternalExternalTrueGetDsInfoCloudServiceInternalFaultFaultFaultMessage extends Exception {
    
    private com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault cloudServiceInternalFault;

    public IROCatalogExternalExternalTrueGetDsInfoCloudServiceInternalFaultFaultFaultMessage() {
        super();
    }
    
    public IROCatalogExternalExternalTrueGetDsInfoCloudServiceInternalFaultFaultFaultMessage(String message) {
        super(message);
    }
    
    public IROCatalogExternalExternalTrueGetDsInfoCloudServiceInternalFaultFaultFaultMessage(String message, Throwable cause) {
        super(message, cause);
    }

    public IROCatalogExternalExternalTrueGetDsInfoCloudServiceInternalFaultFaultFaultMessage(String message, com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault cloudServiceInternalFault) {
        super(message);
        this.cloudServiceInternalFault = cloudServiceInternalFault;
    }

    public IROCatalogExternalExternalTrueGetDsInfoCloudServiceInternalFaultFaultFaultMessage(String message, com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault cloudServiceInternalFault, Throwable cause) {
        super(message, cause);
        this.cloudServiceInternalFault = cloudServiceInternalFault;
    }

    public com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault getFaultInfo() {
        return this.cloudServiceInternalFault;
    }
}
