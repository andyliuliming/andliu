
package com.windowscloudbackup.protection.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;
import com.windowscloudbackup.rocatalog.v2011_09.RequestContextV201109;


/**
 * <p>Java class for SetLastAccessTimeForRPArgs_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="SetLastAccessTimeForRPArgs_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/Protection/V2011_09}SetLastAccessTimeForRPArgs">
 *       &lt;sequence>
 *         &lt;element name="EntityId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *         &lt;element name="RequestContext" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}RequestContext_V2011_09" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "SetLastAccessTimeForRPArgs_V2011_09", propOrder = {
    "entityId",
    "requestContext"
})
public class SetLastAccessTimeForRPArgsV201109
    extends SetLastAccessTimeForRPArgs
{

    @XmlElement(name = "EntityId", required = true, nillable = true)
    protected EntityIdV201109 entityId;
    @XmlElementRef(name = "RequestContext", namespace = "http://windowscloudbackup.com/Protection/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<RequestContextV201109> requestContext;

    /**
     * Gets the value of the entityId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityIdV201109 }
     *     
     */
    public EntityIdV201109 getEntityId() {
        return entityId;
    }

    /**
     * Sets the value of the entityId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityIdV201109 }
     *     
     */
    public void setEntityId(EntityIdV201109 value) {
        this.entityId = value;
    }

    /**
     * Gets the value of the requestContext property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link RequestContextV201109 }{@code >}
     *     
     */
    public JAXBElement<RequestContextV201109> getRequestContext() {
        return requestContext;
    }

    /**
     * Sets the value of the requestContext property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link RequestContextV201109 }{@code >}
     *     
     */
    public void setRequestContext(JAXBElement<RequestContextV201109> value) {
        this.requestContext = value;
    }

}
