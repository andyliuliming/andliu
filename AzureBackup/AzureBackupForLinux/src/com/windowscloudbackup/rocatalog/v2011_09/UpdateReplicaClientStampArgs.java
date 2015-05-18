
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityId;
import com.windowscloudbackup.cloudcommon.v2011_09.Stamp;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.ContractVersions;


/**
 * <p>Java class for UpdateReplicaClientStampArgs complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="UpdateReplicaClientStampArgs">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ClientStamp" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}Stamp"/>
 *         &lt;element name="ContractVersion" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}ContractVersions"/>
 *         &lt;element name="ReplicaId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "UpdateReplicaClientStampArgs", propOrder = {
    "clientStamp",
    "contractVersion",
    "replicaId"
})
@XmlSeeAlso({
    UpdateReplicaClientStampArgsV201109 .class
})
public class UpdateReplicaClientStampArgs {

    @XmlElement(name = "ClientStamp", required = true, nillable = true)
    protected Stamp clientStamp;
    @XmlElement(name = "ContractVersion", required = true)
    @XmlSchemaType(name = "string")
    protected ContractVersions contractVersion;
    @XmlElement(name = "ReplicaId", required = true, nillable = true)
    protected EntityId replicaId;

    /**
     * Gets the value of the clientStamp property.
     * 
     * @return
     *     possible object is
     *     {@link Stamp }
     *     
     */
    public Stamp getClientStamp() {
        return clientStamp;
    }

    /**
     * Sets the value of the clientStamp property.
     * 
     * @param value
     *     allowed object is
     *     {@link Stamp }
     *     
     */
    public void setClientStamp(Stamp value) {
        this.clientStamp = value;
    }

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
     * Gets the value of the replicaId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityId }
     *     
     */
    public EntityId getReplicaId() {
        return replicaId;
    }

    /**
     * Sets the value of the replicaId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityId }
     *     
     */
    public void setReplicaId(EntityId value) {
        this.replicaId = value;
    }

}
