
package org.tempuri;

import javax.xml.ws.WebFault;


/**
 * This class was generated by Apache CXF 3.0.2
 * 2014-12-11T20:29:56.201+08:00
 * Generated source version: 3.0.2
 */

@WebFault(name = "CloudServiceInternalFault", targetNamespace = "http://windowscloudbackup.com/CloudCommon/V2011_09")
public class IROCatalogExternalExternalTrueGetAllEncryptionKeysCloudServiceInternalFaultFaultFaultMessage extends Exception {
    
    private com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault cloudServiceInternalFault;

    public IROCatalogExternalExternalTrueGetAllEncryptionKeysCloudServiceInternalFaultFaultFaultMessage() {
        super();
    }
    
    public IROCatalogExternalExternalTrueGetAllEncryptionKeysCloudServiceInternalFaultFaultFaultMessage(String message) {
        super(message);
    }
    
    public IROCatalogExternalExternalTrueGetAllEncryptionKeysCloudServiceInternalFaultFaultFaultMessage(String message, Throwable cause) {
        super(message, cause);
    }

    public IROCatalogExternalExternalTrueGetAllEncryptionKeysCloudServiceInternalFaultFaultFaultMessage(String message, com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault cloudServiceInternalFault) {
        super(message);
        this.cloudServiceInternalFault = cloudServiceInternalFault;
    }

    public IROCatalogExternalExternalTrueGetAllEncryptionKeysCloudServiceInternalFaultFaultFaultMessage(String message, com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault cloudServiceInternalFault, Throwable cause) {
        super(message, cause);
        this.cloudServiceInternalFault = cloudServiceInternalFault;
    }

    public com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceInternalFault getFaultInfo() {
        return this.cloudServiceInternalFault;
    }
}
