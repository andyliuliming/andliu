
package com.windowscloudbackup.cloudcommon.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common.IdType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.ContractVersions;


/**
 * <p>Java class for EntityId complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="EntityId">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ContractVersion" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}ContractVersions"/>
 *         &lt;element name="IdBytes" type="{http://www.w3.org/2001/XMLSchema}base64Binary"/>
 *         &lt;element name="IdType" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CatalogCommon}IdType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "EntityId", propOrder = {
    "contractVersion",
    "idBytes",
    "idType"
})
@XmlSeeAlso({
    EntityIdV201109 .class
})
public class EntityId {

    @XmlElement(name = "ContractVersion", required = true)
    @XmlSchemaType(name = "string")
    protected ContractVersions contractVersion;
    @XmlElement(name = "IdBytes", required = true, nillable = true)
    protected byte[] idBytes;
    @XmlElement(name = "IdType", required = true)
    @XmlSchemaType(name = "string")
    protected IdType idType;

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
     * Gets the value of the idBytes property.
     * 
     * @return
     *     possible object is
     *     byte[]
     */
    public byte[] getIdBytes() {
        return idBytes;
    }

    /**
     * Sets the value of the idBytes property.
     * 
     * @param value
     *     allowed object is
     *     byte[]
     */
    public void setIdBytes(byte[] value) {
        this.idBytes = value;
    }

    /**
     * Gets the value of the idType property.
     * 
     * @return
     *     possible object is
     *     {@link IdType }
     *     
     */
    public IdType getIdType() {
        return idType;
    }

    /**
     * Sets the value of the idType property.
     * 
     * @param value
     *     allowed object is
     *     {@link IdType }
     *     
     */
    public void setIdType(IdType value) {
        this.idType = value;
    }

}
