
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.ContractVersions;


/**
 * <p>Java class for DataSourceInfo complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="DataSourceInfo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ComponentName" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="ContractVersion" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}ContractVersions"/>
 *         &lt;element name="FileSpecXml" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="FriendlyName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="LogicalPath" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="WriterGuid" type="{http://schemas.microsoft.com/2003/10/Serialization/}guid"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "DataSourceInfo", propOrder = {
    "componentName",
    "contractVersion",
    "fileSpecXml",
    "friendlyName",
    "logicalPath",
    "writerGuid"
})
@XmlSeeAlso({
    DataSourceInfoV201109 .class,
    DataSourceInfoEx.class
})
public class DataSourceInfo {

    @XmlElement(name = "ComponentName", required = true, nillable = true)
    protected String componentName;
    @XmlElement(name = "ContractVersion", required = true)
    @XmlSchemaType(name = "string")
    protected ContractVersions contractVersion;
    @XmlElement(name = "FileSpecXml", required = true, nillable = true)
    protected String fileSpecXml;
    @XmlElementRef(name = "FriendlyName", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<String> friendlyName;
    @XmlElement(name = "LogicalPath", required = true, nillable = true)
    protected String logicalPath;
    @XmlElement(name = "WriterGuid", required = true)
    protected String writerGuid;

    /**
     * Gets the value of the componentName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getComponentName() {
        return componentName;
    }

    /**
     * Sets the value of the componentName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setComponentName(String value) {
        this.componentName = value;
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
     * Gets the value of the logicalPath property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLogicalPath() {
        return logicalPath;
    }

    /**
     * Sets the value of the logicalPath property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLogicalPath(String value) {
        this.logicalPath = value;
    }

    /**
     * Gets the value of the writerGuid property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getWriterGuid() {
        return writerGuid;
    }

    /**
     * Sets the value of the writerGuid property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setWriterGuid(String value) {
        this.writerGuid = value;
    }

}
