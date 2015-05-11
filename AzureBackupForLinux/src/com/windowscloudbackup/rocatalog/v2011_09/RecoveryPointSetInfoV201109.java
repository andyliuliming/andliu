
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;


/**
 * <p>Java class for RecoveryPointSetInfo_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="RecoveryPointSetInfo_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}RecoveryPointSetInfo">
 *       &lt;sequence>
 *         &lt;element name="MetadataSetId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RecoveryPointSetInfo_V2011_09", propOrder = {
    "metadataSetId"
})
public class RecoveryPointSetInfoV201109
    extends RecoveryPointSetInfo
{

    @XmlElementRef(name = "MetadataSetId", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<EntityIdV201109> metadataSetId;

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

}
