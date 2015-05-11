
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.ContractVersions;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog.RecoveryPointGenerationType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog.RecoveryPointType;


/**
 * <p>Java class for RecoveryPointInfo complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="RecoveryPointInfo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ContractVersion" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}ContractVersions"/>
 *         &lt;element name="DataSourceVersion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="FileSpecXml" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="FriendlyName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="RecoveryPointGFS" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface}RecoveryPointGenerationType" minOccurs="0"/>
 *         &lt;element name="RecoveryPointTime" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *         &lt;element name="RecoveryPointType" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface}RecoveryPointType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RecoveryPointInfo", propOrder = {
    "contractVersion",
    "dataSourceVersion",
    "fileSpecXml",
    "friendlyName",
    "recoveryPointGFS",
    "recoveryPointTime",
    "recoveryPointType"
})
@XmlSeeAlso({
    RecoveryPointInfoV201109 .class,
    RecoveryPointInfoEx.class
})
public class RecoveryPointInfo {

    @XmlElement(name = "ContractVersion", required = true)
    @XmlSchemaType(name = "string")
    protected ContractVersions contractVersion;
    @XmlElementRef(name = "DataSourceVersion", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<String> dataSourceVersion;
    @XmlElement(name = "FileSpecXml", required = true, nillable = true)
    protected String fileSpecXml;
    @XmlElementRef(name = "FriendlyName", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<String> friendlyName;
    @XmlElement(name = "RecoveryPointGFS")
    @XmlSchemaType(name = "string")
    protected RecoveryPointGenerationType recoveryPointGFS;
    @XmlElement(name = "RecoveryPointTime", required = true)
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar recoveryPointTime;
    @XmlElement(name = "RecoveryPointType")
    @XmlSchemaType(name = "string")
    protected RecoveryPointType recoveryPointType;

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
     * Gets the value of the dataSourceVersion property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getDataSourceVersion() {
        return dataSourceVersion;
    }

    /**
     * Sets the value of the dataSourceVersion property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setDataSourceVersion(JAXBElement<String> value) {
        this.dataSourceVersion = value;
    }

    /**
     * Gets the value of the fileSpecXml property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFileSpecXml() {
        return fileSpecXml;
    }

    /**
     * Sets the value of the fileSpecXml property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFileSpecXml(String value) {
        this.fileSpecXml = value;
    }

    /**
     * Gets the value of the friendlyName property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getFriendlyName() {
        return friendlyName;
    }

    /**
     * Sets the value of the friendlyName property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setFriendlyName(JAXBElement<String> value) {
        this.friendlyName = value;
    }

    /**
     * Gets the value of the recoveryPointGFS property.
     * 
     * @return
     *     possible object is
     *     {@link RecoveryPointGenerationType }
     *     
     */
    public RecoveryPointGenerationType getRecoveryPointGFS() {
        return recoveryPointGFS;
    }

    /**
     * Sets the value of the recoveryPointGFS property.
     * 
     * @param value
     *     allowed object is
     *     {@link RecoveryPointGenerationType }
     *     
     */
    public void setRecoveryPointGFS(RecoveryPointGenerationType value) {
        this.recoveryPointGFS = value;
    }

    /**
     * Gets the value of the recoveryPointTime property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getRecoveryPointTime() {
        return recoveryPointTime;
    }

    /**
     * Sets the value of the recoveryPointTime property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setRecoveryPointTime(XMLGregorianCalendar value) {
        this.recoveryPointTime = value;
    }

    /**
     * Gets the value of the recoveryPointType property.
     * 
     * @return
     *     possible object is
     *     {@link RecoveryPointType }
     *     
     */
    public RecoveryPointType getRecoveryPointType() {
        return recoveryPointType;
    }

    /**
     * Sets the value of the recoveryPointType property.
     * 
     * @param value
     *     allowed object is
     *     {@link RecoveryPointType }
     *     
     */
    public void setRecoveryPointType(RecoveryPointType value) {
        this.recoveryPointType = value;
    }

}
