
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog.ReplicaStates;


/**
 * <p>Java class for ReplicaInfoEx complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ReplicaInfoEx">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}ReplicaInfo">
 *       &lt;sequence>
 *         &lt;element name="State" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface}ReplicaStates" minOccurs="0"/>
 *         &lt;element name="StorageInBytes" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ReplicaInfoEx", propOrder = {
    "state",
    "storageInBytes"
})
@XmlSeeAlso({
    ReplicaInfoExV201109 .class
})
public class ReplicaInfoEx
    extends ReplicaInfo
{

    @XmlElement(name = "State")
    @XmlSchemaType(name = "string")
    protected ReplicaStates state;
    @XmlElement(name = "StorageInBytes")
    protected Long storageInBytes;

    /**
     * Gets the value of the state property.
     * 
     * @return
     *     possible object is
     *     {@link ReplicaStates }
     *     
     */
    public ReplicaStates getState() {
        return state;
    }

    /**
     * Sets the value of the state property.
     * 
     * @param value
     *     allowed object is
     *     {@link ReplicaStates }
     *     
     */
    public void setState(ReplicaStates value) {
        this.state = value;
    }

    /**
     * Gets the value of the storageInBytes property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getStorageInBytes() {
        return storageInBytes;
    }

    /**
     * Sets the value of the storageInBytes property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setStorageInBytes(Long value) {
        this.storageInBytes = value;
    }

}
