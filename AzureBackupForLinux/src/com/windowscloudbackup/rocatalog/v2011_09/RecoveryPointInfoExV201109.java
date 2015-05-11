
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
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;


/**
 * <p>Java class for RecoveryPointInfoEx_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="RecoveryPointInfoEx_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}RecoveryPointInfoEx">
 *       &lt;sequence>
 *         &lt;element name="DataSourceId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *         &lt;element name="DependentRecoveryPointId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09" minOccurs="0"/>
 *         &lt;element name="LastAccessedTime" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="MetadataSetId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09" minOccurs="0"/>
 *         &lt;element name="RecoveryPointSetId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RecoveryPointInfoEx_V2011_09", propOrder = {
    "dataSourceId",
    "dependentRecoveryPointId",
    "lastAccessedTime",
    "metadataSetId",
    "recoveryPointSetId"
})
@XmlSeeAlso({
    RecoveryPointInfoExV201409 .class
})
public class RecoveryPointInfoExV201109
    extends RecoveryPointInfoEx
{

    @XmlElement(name = "DataSourceId", required = true, nillable = true)
    protected EntityIdV201109 dataSourceId;
    @XmlElementRef(name = "DependentRecoveryPointId", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<EntityIdV201109> dependentRecoveryPointId;
    @XmlElement(name = "LastAccessedTime")
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar lastAccessedTime;
    @XmlElementRef(name = "MetadataSetId", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<EntityIdV201109> metadataSetId;
    @XmlElementRef(name = "RecoveryPointSetId", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<EntityIdV201109> recoveryPointSetId;

    /**
     * Gets the value of the dataSourceId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityIdV201109 }
     *     
     */
    public EntityIdV201109 getDataSourceId() {
        return dataSourceId;
    }

    /**
     * Sets the value of the dataSourceId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityIdV201109 }
     *     
     */
    public void setDataSourceId(EntityIdV201109 value) {
        this.dataSourceId = value;
    }

    /**
     * Gets the value of the dependentRecoveryPointId property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}
     *     
     */
    public JAXBElement<EntityIdV201109> getDependentRecoveryPointId() {
        return dependentRecoveryPointId;
    }

    /**
     * Sets the value of the dependentRecoveryPointId property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}
     *     
     */
    public void setDependentRecoveryPointId(JAXBElement<EntityIdV201109> value) {
        this.dependentRecoveryPointId = value;
    }

    /**
     * Gets the value of the lastAccessedTime property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getLastAccessedTime() {
        return lastAccessedTime;
    }

    /**
     * Sets the value of the lastAccessedTime property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setLastAccessedTime(XMLGregorianCalendar value) {
        this.lastAccessedTime = value;
    }

    /**
     * Gets the value of the metadataSetId property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}
     *     
     */
    public JAXBElement<EntityIdV201109> getMetadataSetId() {
        return metadataSetId;
    }

    /**
     * Sets the value of the metadataSetId property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}
     *     
     */
    public void setMetadataSetId(JAXBElement<EntityIdV201109> value) {
        this.metadataSetId = value;
    }

    /**
     * Gets the value of the recoveryPointSetId property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}
     *     
     */
    public JAXBElement<EntityIdV201109> getRecoveryPointSetId() {
        return recoveryPointSetId;
    }

    /**
     * Sets the value of the recoveryPointSetId property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}
     *     
     */
    public void setRecoveryPointSetId(JAXBElement<EntityIdV201109> value) {
        this.recoveryPointSetId = value;
    }

}
