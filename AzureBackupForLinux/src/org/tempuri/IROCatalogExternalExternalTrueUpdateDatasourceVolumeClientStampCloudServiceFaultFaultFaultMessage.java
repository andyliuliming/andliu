
package org.tempuri;

import javax.xml.ws.WebFault;


/**
 * This class was generated by Apache CXF 3.0.2
 * 2014-12-11T20:29:56.134+08:00
 * Generated source version: 3.0.2
 */

@WebFault(name = "CloudServiceFault", targetNamespace = "http://windowscloudbackup.com/CloudCommon/V2011_09")
public class IROCatalogExternalExternalTrueUpdateDatasourceVolumeClientStampCloudServiceFaultFaultFaultMessage extends Exception {
    
    private com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceFault cloudServiceFault;

    public IROCatalogExternalExternalTrueUpdateDatasourceVolumeClientStampCloudServiceFaultFaultFaultMessage() {
        super();
    }
    
    public IROCatalogExternalExternalTrueUpdateDatasourceVolumeClientStampCloudServiceFaultFaultFaultMessage(String message) {
        super(message);
    }
    
    public IROCatalogExternalExternalTrueUpdateDatasourceVolumeClientStampCloudServiceFaultFaultFaultMessage(String message, Throwable cause) {
        super(message, cause);
    }

    public IROCatalogExternalExternalTrueUpdateDatasourceVolumeClientStampCloudServiceFaultFaultFaultMessage(String message, com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceFault cloudServiceFault) {
        super(message);
        this.cloudServiceFault = cloudServiceFault;
    }

    public IROCatalogExternalExternalTrueUpdateDatasourceVolumeClientStampCloudServiceFaultFaultFaultMessage(String message, com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceFault cloudServiceFault, Throwable cause) {
        super(message, cause);
        this.cloudServiceFault = cloudServiceFault;
    }

    public com.windowscloudbackup.cloudcommon.v2011_09.CloudServiceFault getFaultInfo() {
        return this.cloudServiceFault;
    }
}
