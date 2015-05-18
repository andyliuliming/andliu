
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityId;


/**
 * <p>Java class for EncryptionKeyEx complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="EncryptionKeyEx">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}EncryptionKey">
 *       &lt;sequence>
 *         &lt;element name="KeyId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "EncryptionKeyEx", propOrder = {
    "keyId"
})
@XmlSeeAlso({
    EncryptionKeyExV201109 .class
})
public class EncryptionKeyEx
    extends EncryptionKey
{

    @XmlElement(name = "KeyId", required = true, nillable = true)
    protected EntityId keyId;

    /**
     * Gets the value of the keyId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityId }
     *     
     */
    public EntityId getKeyId() {
        return keyId;
    }

    /**
     * Sets the value of the keyId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityId }
     *     
     */
    public void setKeyId(EntityId value) {
        this.keyId = value;
    }

}
