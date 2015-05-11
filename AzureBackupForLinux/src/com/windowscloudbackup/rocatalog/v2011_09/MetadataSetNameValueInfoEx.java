
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityId;


/**
 * <p>Java class for MetadataSetNameValueInfoEx complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="MetadataSetNameValueInfoEx">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}MetadataSetNameValueInfo">
 *       &lt;sequence>
 *         &lt;element name="MetadataSetId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "MetadataSetNameValueInfoEx", propOrder = {
    "metadataSetId"
})
@XmlSeeAlso({
    MetadataSetNameValueInfoExV201109 .class
})
public class MetadataSetNameValueInfoEx
    extends MetadataSetNameValueInfo
{

    @XmlElement(name = "MetadataSetId", required = true, nillable = true)
    protected EntityId metadataSetId;

    /**
     * Gets the value of the metadataSetId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityId }
     *     
     */
    public EntityId getMetadataSetId() {
        return metadataSetId;
    }

    /**
     * Sets the value of the metadataSetId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityId }
     *     
     */
    public void setMetadataSetId(EntityId value) {
        this.metadataSetId = value;
    }

}
