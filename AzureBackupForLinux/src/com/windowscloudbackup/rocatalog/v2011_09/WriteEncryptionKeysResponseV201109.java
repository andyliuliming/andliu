
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;


/**
 * <p>Java class for WriteEncryptionKeysResponse_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="WriteEncryptionKeysResponse_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}WriteEncryptionKeysResponse">
 *       &lt;sequence>
 *         &lt;element name="CurrentKeyId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "WriteEncryptionKeysResponse_V2011_09", propOrder = {
    "currentKeyId"
})
public class WriteEncryptionKeysResponseV201109
    extends WriteEncryptionKeysResponse
{

    @XmlElement(name = "CurrentKeyId", required = true, nillable = true)
    protected EntityIdV201109 currentKeyId;

    /**
     * Gets the value of the currentKeyId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityIdV201109 }
     *     
     */
    public EntityIdV201109 getCurrentKeyId() {
        return currentKeyId;
    }

    /**
     * Sets the value of the currentKeyId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityIdV201109 }
     *     
     */
    public void setCurrentKeyId(EntityIdV201109 value) {
        this.currentKeyId = value;
    }

}
