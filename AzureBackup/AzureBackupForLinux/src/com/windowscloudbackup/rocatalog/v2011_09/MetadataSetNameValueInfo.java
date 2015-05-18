
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.ContractVersions;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog.MetadataLocation;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog.MetadataSetValueType;


/**
 * <p>Java class for MetadataSetNameValueInfo complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="MetadataSetNameValueInfo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ContractVersion" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}ContractVersions"/>
 *         &lt;element name="MDSetName" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="MDSetValue" type="{http://www.w3.org/2001/XMLSchema}base64Binary"/>
 *         &lt;element name="MDSetValueType" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface}MetadataSetValueType"/>
 *         &lt;element name="MetadataLocation" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface}MetadataLocation"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "MetadataSetNameValueInfo", propOrder = {
    "contractVersion",
    "mdSetName",
    "mdSetValue",
    "mdSetValueType",
    "metadataLocation"
})
@XmlSeeAlso({
    MetadataSetNameValueInfoV201109 .class,
    MetadataSetNameValueInfoEx.class
})
public class MetadataSetNameValueInfo {

    @XmlElement(name = "ContractVersion", required = true)
    @XmlSchemaType(name = "string")
    protected ContractVersions contractVersion;
    @XmlElement(name = "MDSetName", required = true, nillable = true)
    protected String mdSetName;
    @XmlElement(name = "MDSetValue", required = true, nillable = true)
    protected byte[] mdSetValue;
    @XmlElement(name = "MDSetValueType", required = true)
    @XmlSchemaType(name = "string")
    protected MetadataSetValueType mdSetValueType;
    @XmlElement(name = "MetadataLocation", required = true)
    @XmlSchemaType(name = "string")
    protected MetadataLocation metadataLocation;

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
     * Gets the value of the mdSetName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMDSetName() {
        return mdSetName;
    }

    /**
     * Sets the value of the mdSetName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMDSetName(String value) {
        this.mdSetName = value;
    }

    /**
     * Gets the value of the mdSetValue property.
     * 
     * @return
     *     possible object is
     *     byte[]
     */
    public byte[] getMDSetValue() {
        return mdSetValue;
    }

    /**
     * Sets the value of the mdSetValue property.
     * 
     * @param value
     *     allowed object is
     *     byte[]
     */
    public void setMDSetValue(byte[] value) {
        this.mdSetValue = value;
    }

    /**
     * Gets the value of the mdSetValueType property.
     * 
     * @return
     *     possible object is
     *     {@link MetadataSetValueType }
     *     
     */
    public MetadataSetValueType getMDSetValueType() {
        return mdSetValueType;
    }

    /**
     * Sets the value of the mdSetValueType property.
     * 
     * @param value
     *     allowed object is
     *     {@link MetadataSetValueType }
     *     
     */
    public void setMDSetValueType(MetadataSetValueType value) {
        this.mdSetValueType = value;
    }

    /**
     * Gets the value of the metadataLocation property.
     * 
     * @return
     *     possible object is
     *     {@link MetadataLocation }
     *     
     */
    public MetadataLocation getMetadataLocation() {
        return metadataLocation;
    }

    /**
     * Sets the value of the metadataLocation property.
     * 
     * @param value
     *     allowed object is
     *     {@link MetadataLocation }
     *     
     */
    public void setMetadataLocation(MetadataLocation value) {
        this.metadataLocation = value;
    }

}
