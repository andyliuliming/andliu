
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.EncryptionKeyEx;


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
 *         &lt;element name="GetCurrentEncryptionKeyResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}EncryptionKeyEx" minOccurs="0"/>
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
    "getCurrentEncryptionKeyResult"
})
@XmlRootElement(name = "GetCurrentEncryptionKeyResponse")
public class GetCurrentEncryptionKeyResponse {

    @XmlElementRef(name = "GetCurrentEncryptionKeyResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<EncryptionKeyEx> getCurrentEncryptionKeyResult;

    /**
     * Gets the value of the getCurrentEncryptionKeyResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link EncryptionKeyEx }{@code >}
     *     
     */
    public JAXBElement<EncryptionKeyEx> getGetCurrentEncryptionKeyResult() {
        return getCurrentEncryptionKeyResult;
    }

    /**
     * Sets the value of the getCurrentEncryptionKeyResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link EncryptionKeyEx }{@code >}
     *     
     */
    public void setGetCurrentEncryptionKeyResult(JAXBElement<EncryptionKeyEx> value) {
        this.getCurrentEncryptionKeyResult = value;
    }

}
