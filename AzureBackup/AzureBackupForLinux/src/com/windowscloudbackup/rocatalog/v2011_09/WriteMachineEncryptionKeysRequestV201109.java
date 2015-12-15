
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for WriteMachineEncryptionKeysRequest_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="WriteMachineEncryptionKeysRequest_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}WriteMachineEncryptionKeysRequest">
 *       &lt;sequence>
 *         &lt;element name="CurrentKey" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}EncryptionKey_V2011_09"/>
 *         &lt;element name="OldKeys" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfEncryptionKeyEx_V2011_09"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "WriteMachineEncryptionKeysRequest_V2011_09", propOrder = {
    "currentKey",
    "oldKeys"
})
public class WriteMachineEncryptionKeysRequestV201109
    extends WriteMachineEncryptionKeysRequest
{

    @XmlElement(name = "CurrentKey", required = true, nillable = true)
    protected EncryptionKeyV201109 currentKey;
    @XmlElement(name = "OldKeys", required = true, nillable = true)
    protected ArrayOfEncryptionKeyExV201109 oldKeys;

    /**
     * Gets the value of the currentKey property.
     * 
     * @return
     *     possible object is
     *     {@link EncryptionKeyV201109 }
     *     
     */
    public EncryptionKeyV201109 getCurrentKey() {
        return currentKey;
    }

    /**
     * Sets the value of the currentKey property.
     * 
     * @param value
     *     allowed object is
     *     {@link EncryptionKeyV201109 }
     *     
     */
    public void setCurrentKey(EncryptionKeyV201109 value) {
        this.currentKey = value;
    }

    /**
     * Gets the value of the oldKeys property.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfEncryptionKeyExV201109 }
     *     
     */
    public ArrayOfEncryptionKeyExV201109 getOldKeys() {
        return oldKeys;
    }

    /**
     * Sets the value of the oldKeys property.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfEncryptionKeyExV201109 }
     *     
     */
    public void setOldKeys(ArrayOfEncryptionKeyExV201109 value) {
        this.oldKeys = value;
    }

}
