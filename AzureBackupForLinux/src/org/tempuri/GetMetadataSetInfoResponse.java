
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfMetadataSetNameValueInfoEx;


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
 *         &lt;element name="GetMetadataSetInfoResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfMetadataSetNameValueInfoEx" minOccurs="0"/>
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
    "getMetadataSetInfoResult"
})
@XmlRootElement(name = "GetMetadataSetInfoResponse")
public class GetMetadataSetInfoResponse {

    @XmlElementRef(name = "GetMetadataSetInfoResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfMetadataSetNameValueInfoEx> getMetadataSetInfoResult;

    /**
     * Gets the value of the getMetadataSetInfoResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfMetadataSetNameValueInfoEx }{@code >}
     *     
     */
    public JAXBElement<ArrayOfMetadataSetNameValueInfoEx> getGetMetadataSetInfoResult() {
        return getMetadataSetInfoResult;
    }

    /**
     * Sets the value of the getMetadataSetInfoResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfMetadataSetNameValueInfoEx }{@code >}
     *     
     */
    public void setGetMetadataSetInfoResult(JAXBElement<ArrayOfMetadataSetNameValueInfoEx> value) {
        this.getMetadataSetInfoResult = value;
    }

}
