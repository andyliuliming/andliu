
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="WriteEncryptionKeysResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}WriteEncryptionKeysResponse" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "writeEncryptionKeysResult"
})
@XmlRootElement(name = "WriteEncryptionKeysResponse")
public class WriteEncryptionKeysResponse {

    @XmlElementRef(name = "WriteEncryptionKeysResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysResponse> writeEncryptionKeysResult;

    /**
     * Gets the value of the writeEncryptionKeysResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysResponse }{@code >}
     *     
     */
    public JAXBElement<com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysResponse> getWriteEncryptionKeysResult() {
        return writeEncryptionKeysResult;
    }

    /**
     * Sets the value of the writeEncryptionKeysResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysResponse }{@code >}
     *     
     */
    public void setWriteEncryptionKeysResult(JAXBElement<com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysResponse> value) {
        this.writeEncryptionKeysResult = value;
    }

}
