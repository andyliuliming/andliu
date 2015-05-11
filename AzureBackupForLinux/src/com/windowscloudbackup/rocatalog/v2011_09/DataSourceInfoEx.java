
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityId;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog.PolicyStates;


/**
 * <p>Java class for DataSourceInfoEx complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="DataSourceInfoEx">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}DataSourceInfo">
 *       &lt;sequence>
 *         &lt;element name="DsId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId"/>
 *         &lt;element name="FileCatalogStampId" type="{http://schemas.microsoft.com/2003/10/Serialization/}guid" minOccurs="0"/>
 *         &lt;element name="FileCatalogStampUri" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RowVersion" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="State" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface}PolicyStates" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "DataSourceInfoEx", propOrder = {
    "dsId",
    "fileCatalogStampId",
    "fileCatalogStampUri",
    "rowVersion",
    "state"
})
@XmlSeeAlso({
    UpdateDataSourceInfo.class,
    DataSourceInfoExV201109 .class
})
public class DataSourceInfoEx
    extends DataSourceInfo
{

    @XmlElement(name = "DsId", required = true, nillable = true)
    protected EntityId dsId;
    @XmlElement(name = "FileCatalogStampId")
    protected String fileCatalogStampId;
    @XmlElementRef(name = "FileCatalogStampUri", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<String> fileCatalogStampUri;
    @XmlElement(name = "RowVersion")
    protected Long rowVersion;
    @XmlElement(name = "State")
    @XmlSchemaType(name = "string")
    protected PolicyStates state;

    /**
     * Gets the value of the dsId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityId }
     *     
     */
    public EntityId getDsId() {
        return dsId;
    }

    /**
     * Sets the value of the dsId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityId }
     *     
     */
    public void setDsId(EntityId value) {
        this.dsId = value;
    }

    /**
     * Gets the value of the fileCatalogStampId property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFileCatalogStampId() {
        return fileCatalogStampId;
    }

    /**
     * Sets the value of the fileCatalogStampId property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFileCatalogStampId(String value) {
        this.fileCatalogStampId = value;
    }

    /**
     * Gets the value of the fileCatalogStampUri property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getFileCatalogStampUri() {
        return fileCatalogStampUri;
    }

    /**
     * Sets the value of the fileCatalogStampUri property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setFileCatalogStampUri(JAXBElement<String> value) {
        this.fileCatalogStampUri = value;
    }

    /**
     * Gets the value of the rowVersion property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getRowVersion() {
        return rowVersion;
    }

    /**
     * Sets the value of the rowVersion property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setRowVersion(Long value) {
        this.rowVersion = value;
    }

    /**
     * Gets the value of the state property.
     * 
     * @return
     *     possible object is
     *     {@link PolicyStates }
     *     
     */
    public PolicyStates getState() {
        return state;
    }

    /**
     * Sets the value of the state property.
     * 
     * @param value
     *     allowed object is
     *     {@link PolicyStates }
     *     
     */
    public void setState(PolicyStates value) {
        this.state = value;
    }

}
