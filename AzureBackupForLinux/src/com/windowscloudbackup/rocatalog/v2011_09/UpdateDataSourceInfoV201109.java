
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;


/**
 * <p>Java class for UpdateDataSourceInfo_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="UpdateDataSourceInfo_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}UpdateDataSourceInfo">
 *       &lt;sequence>
 *         &lt;element name="MetadataSetId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09" minOccurs="0"/>
 *         &lt;element name="PolicyId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "UpdateDataSourceInfo_V2011_09", propOrder = {
    "metadataSetId",
    "policyId"
})
public class UpdateDataSourceInfoV201109
    extends UpdateDataSourceInfo
{

    @XmlElementRef(name = "MetadataSetId", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<EntityIdV201109> metadataSetId;
    @XmlElementRef(name = "PolicyId", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<EntityIdV201109> policyId;

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
     * Gets the value of the policyId property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}
     *     
     */
    public JAXBElement<EntityIdV201109> getPolicyId() {
        return policyId;
    }

    /**
     * Sets the value of the policyId property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}
     *     
     */
    public void setPolicyId(JAXBElement<EntityIdV201109> value) {
        this.policyId = value;
    }

}
