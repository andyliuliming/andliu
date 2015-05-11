
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.AddMDSetAndMetadataNameValueArgs;


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
 *         &lt;element name="metaDataNameValue" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}AddMDSetAndMetadataNameValueArgs" minOccurs="0"/>
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
    "metaDataNameValue"
})
@XmlRootElement(name = "AddMDSetAndMetadataNameValue")
public class AddMDSetAndMetadataNameValue {

    @XmlElementRef(name = "metaDataNameValue", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<AddMDSetAndMetadataNameValueArgs> metaDataNameValue;

    /**
     * Gets the value of the metaDataNameValue property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link AddMDSetAndMetadataNameValueArgs }{@code >}
     *     
     */
    public JAXBElement<AddMDSetAndMetadataNameValueArgs> getMetaDataNameValue() {
        return metaDataNameValue;
    }

    /**
     * Sets the value of the metaDataNameValue property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link AddMDSetAndMetadataNameValueArgs }{@code >}
     *     
     */
    public void setMetaDataNameValue(JAXBElement<AddMDSetAndMetadataNameValueArgs> value) {
        this.metaDataNameValue = value;
    }

}
