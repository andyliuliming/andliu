
package org.tempuri;

import javax.xml.ws.WebFault;


/**
 * This class was generated by Apache CXF 3.0.2
 * 2014-12-11T20:29:55.730+08:00
 * Generated source version: 3.0.2
 */

@WebFault(name = "CloudServiceInternalFault", targetNamespace = "http://windowscloudbackup.com/CloudCommon/V2011_09")
public class IROCatalogExternalExternalTrueGetCurrentEncryptionKeyCloudServiceInternalFaultFaultFaultMessage extends Exception {
    
    private com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault cloudServiceInternalFault;

    public IROCatalogExternalExternalTrueGetCurrentEncryptionKeyCloudServiceInternalFaultFaultFaultMessage() {
        super();
    }
    
    public IROCatalogExternalExternalTrueGetCurrentEncryptionKeyCloudServiceInternalFaultFaultFaultMessage(String message) {
        super(message);
    }
    
    public IROCatalogExternalExternalTrueGetCurrentEncryptionKeyCloudServiceInternalFaultFaultFaultMessage(String message, Throwable cause) {
        super(message, cause);
    }

    public IROCatalogExternalExternalTrueGetCurrentEncryptionKeyCloudServiceInternalFaultFaultFaultMessage(String message, com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault cloudServiceInternalFault) {
        super(message);
        this.cloudServiceInternalFault = cloudServiceInternalFault;
    }

    public IROCatalogExternalExternalTrueGetCurrentEncryptionKeyCloudServiceInternalFaultFaultFaultMessage(String message, com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault cloudServiceInternalFault, Throwable cause) {
        super(message, cause);
        this.cloudServiceInternalFault = cloudServiceInternalFault;
    }

    public com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault getFaultInfo() {
        return this.cloudServiceInternalFault;
    }
}
