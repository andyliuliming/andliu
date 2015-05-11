
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
 * <p>Java class for UpdateDatasourceVolumeClientStampArgs complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="UpdateDatasourceVolumeClientStampArgs">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ClientStamp" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}Stamp"/>
 *         &lt;element name="ContractVersion" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}ContractVersions"/>
 *         &lt;element name="DataSourceId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId"/>
 *         &lt;element name="ReplicaId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId"/>
 *         &lt;element name="VolumeId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "UpdateDatasourceVolumeClientStampArgs", propOrder = {
    "clientStamp",
    "contractVersion",
    "dataSourceId",
    "replicaId",
    "volumeId"
})
@XmlSeeAlso({
    UpdateDatasourceVolumeClientStampArgsV201201 .class
})
public class UpdateDatasourceVolumeClientStampArgs {

    @XmlElement(name = "ClientStamp", required = true, nillable = true)
    protected Stamp clientStamp;
    @XmlElement(name = "ContractVersion", required = true)
    @XmlSchemaType(name = "string")
    protected ContractVersions contractVersion;
    @XmlElement(name = "DataSourceId", required = true, nillable = true)
    protected EntityId dataSourceId;
    @XmlElement(name = "ReplicaId", required = true, nillable = true)
    protected EntityId replicaId;
    @XmlElement(name = "VolumeId", required = true, nillable = true)
    protected EntityId volumeId;

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
     * Gets the value of the dataSourceId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityId }
     *     
     */
    public EntityId getDataSourceId() {
        return dataSourceId;
    }

    /**
     * Sets the value of the dataSourceId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityId }
     *     
     */
    public void setDataSourceId(EntityId value) {
        this.dataSourceId = value;
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

    /**
     * Gets the value of the volumeId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityId }
     *     
     */
    public EntityId getVolumeId() {
        return volumeId;
    }

    /**
     * Sets the value of the volumeId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityId }
     *     
     */
    public void setVolumeId(EntityId value) {
        this.volumeId = value;
    }

}
