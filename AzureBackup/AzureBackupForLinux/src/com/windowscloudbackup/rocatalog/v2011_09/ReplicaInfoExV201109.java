
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
import com.windowscloudbackup.cloudcommon.v2011_09.ClientStampV201109;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.DRHealthStatus;


/**
 * <p>Java class for ReplicaInfoEx_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ReplicaInfoEx_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}ReplicaInfoEx">
 *       &lt;sequence>
 *         &lt;element name="ClientStamp" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}ClientStamp_V2011_09" minOccurs="0"/>
 *         &lt;element name="ContainerId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *         &lt;element name="CurrentBlobUpdateTime" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="HealthStatus" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}DRHealthStatus" minOccurs="0"/>
 *         &lt;element name="LogicalGCTime" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="MetadataSetId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09" minOccurs="0"/>
 *         &lt;element name="PhysicalGCTime" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ReplicaInfoEx_V2011_09", propOrder = {
    "clientStamp",
    "containerId",
    "currentBlobUpdateTime",
    "healthStatus",
    "logicalGCTime",
    "metadataSetId",
    "physicalGCTime"
})
@XmlSeeAlso({
    ReplicaInfoExV201304 .class
})
public class ReplicaInfoExV201109
    extends ReplicaInfoEx
{

    @XmlElementRef(name = "ClientStamp", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<ClientStampV201109> clientStamp;
    @XmlElement(name = "ContainerId", required = true, nillable = true)
    protected EntityIdV201109 containerId;
    @XmlElement(name = "CurrentBlobUpdateTime")
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar currentBlobUpdateTime;
    @XmlElement(name = "HealthStatus")
    @XmlSchemaType(name = "string")
    protected DRHealthStatus healthStatus;
    @XmlElementRef(name = "LogicalGCTime", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<XMLGregorianCalendar> logicalGCTime;
    @XmlElementRef(name = "MetadataSetId", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<EntityIdV201109> metadataSetId;
    @XmlElementRef(name = "PhysicalGCTime", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<XMLGregorianCalendar> physicalGCTime;

    /**
     * Gets the value of the clientStamp property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ClientStampV201109 }{@code >}
     *     
     */
    public JAXBElement<ClientStampV201109> getClientStamp() {
        return clientStamp;
    }

    /**
     * Sets the value of the clientStamp property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ClientStampV201109 }{@code >}
     *     
     */
    public void setClientStamp(JAXBElement<ClientStampV201109> value) {
        this.clientStamp = value;
    }

    /**
     * Gets the value of the containerId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityIdV201109 }
     *     
     */
    public EntityIdV201109 getContainerId() {
        return containerId;
    }

    /**
     * Sets the value of the containerId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityIdV201109 }
     *     
     */
    public void setContainerId(EntityIdV201109 value) {
        this.containerId = value;
    }

    /**
     * Gets the value of the currentBlobUpdateTime property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getCurrentBlobUpdateTime() {
        return currentBlobUpdateTime;
    }

    /**
     * Sets the value of the currentBlobUpdateTime property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setCurrentBlobUpdateTime(XMLGregorianCalendar value) {
        this.currentBlobUpdateTime = value;
    }

    /**
     * Gets the value of the healthStatus property.
     * 
     * @return
     *     possible object is
     *     {@link DRHealthStatus }
     *     
     */
    public DRHealthStatus getHealthStatus() {
        return healthStatus;
    }

    /**
     * Sets the value of the healthStatus property.
     * 
     * @param value
     *     allowed object is
     *     {@link DRHealthStatus }
     *     
     */
    public void setHealthStatus(DRHealthStatus value) {
        this.healthStatus = value;
    }

    /**
     * Gets the value of the logicalGCTime property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link XMLGregorianCalendar }{@code >}
     *     
     */
    public JAXBElement<XMLGregorianCalendar> getLogicalGCTime() {
        return logicalGCTime;
    }

    /**
     * Sets the value of the logicalGCTime property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link XMLGregorianCalendar }{@code >}
     *     
     */
    public void setLogicalGCTime(JAXBElement<XMLGregorianCalendar> value) {
        this.logicalGCTime = value;
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
     * Gets the value of the physicalGCTime property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link XMLGregorianCalendar }{@code >}
     *     
     */
    public JAXBElement<XMLGregorianCalendar> getPhysicalGCTime() {
        return physicalGCTime;
    }

    /**
     * Sets the value of the physicalGCTime property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link XMLGregorianCalendar }{@code >}
     *     
     */
    public void setPhysicalGCTime(JAXBElement<XMLGregorianCalendar> value) {
        this.physicalGCTime = value;
    }

}
