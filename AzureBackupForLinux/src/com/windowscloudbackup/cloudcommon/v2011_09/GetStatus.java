
package com.windowscloudbackup.cloudcommon.v2011_09;

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
 *         &lt;element name="request" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}GenericAsyncStatusArgs" minOccurs="0"/>
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
    "request"
})
@XmlRootElement(name = "GetStatus")
public class GetStatus {

    @XmlElementRef(name = "request", namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<GenericAsyncStatusArgs> request;

    /**
     * Gets the value of the request property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link GenericAsyncStatusArgs }{@code >}
     *     
     */
    public JAXBElement<GenericAsyncStatusArgs> getRequest() {
        return request;
    }

    /**
     * Sets the value of the request property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link GenericAsyncStatusArgs }{@code >}
     *     
     */
    public void setRequest(JAXBElement<GenericAsyncStatusArgs> value) {
        this.request = value;
    }

}
