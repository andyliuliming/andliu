
package com.windowscloudbackup.protection.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.ContractVersions;


/**
 * <p>Java class for StorageUsageForMachineResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="StorageUsageForMachineResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ContractVersion" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}ContractVersions"/>
 *         &lt;element name="StorageUsedByMachineInBytes" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "StorageUsageForMachineResponse", propOrder = {
    "contractVersion",
    "storageUsedByMachineInBytes"
})
@XmlSeeAlso({
    StorageUsageForMachineResponseV201109 .class
})
public class StorageUsageForMachineResponse {

    @XmlElement(name = "ContractVersion", required = true)
    @XmlSchemaType(name = "string")
    protected ContractVersions contractVersion;
    @XmlElement(name = "StorageUsedByMachineInBytes")
    protected long storageUsedByMachineInBytes;

    /**
     * Gets the value of the contractVersion property.
     * 
     * @return
     *     possible object is
     *     {@link ContractVersions }
     *     
     */
    public ContractVersions getContractVersion() {
        return contractVersion;
    }

    /**
     * Sets the value of the contractVersion property.
     * 
     * @param value
     *     allowed object is
     *     {@link ContractVersions }
     *     
     */
    public void setContractVersion(ContractVersions value) {
        this.contractVersion = value;
    }

    /**
     * Gets the value of the storageUsedByMachineInBytes property.
     * 
     */
    public long getStorageUsedByMachineInBytes() {
        return storageUsedByMachineInBytes;
    }

    /**
     * Sets the value of the storageUsedByMachineInBytes property.
     * 
     */
    public void setStorageUsedByMachineInBytes(long value) {
        this.storageUsedByMachineInBytes = value;
    }

}
