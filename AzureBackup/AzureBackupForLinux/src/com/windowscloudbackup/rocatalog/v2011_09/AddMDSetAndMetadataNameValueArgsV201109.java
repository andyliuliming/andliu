
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for AddMDSetAndMetadataNameValueArgs_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AddMDSetAndMetadataNameValueArgs_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}AddMDSetAndMetadataNameValueArgs">
 *       &lt;sequence>
 *         &lt;element name="MetadataSetNameValue" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}MetadataSetNameValueInfo_V2011_09"/>
 *         &lt;element name="RequestContext" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}RequestContext_V2011_09" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AddMDSetAndMetadataNameValueArgs_V2011_09", propOrder = {
    "metadataSetNameValue",
    "requestContext"
})
public class AddMDSetAndMetadataNameValueArgsV201109
    extends AddMDSetAndMetadataNameValueArgs
{

    @XmlElement(name = "MetadataSetNameValue", required = true, nillable = true)
    protected MetadataSetNameValueInfoV201109 metadataSetNameValue;
    @XmlElementRef(name = "RequestContext", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<RequestContextV201109> requestContext;

    /**
     * Gets the value of the metadataSetNameValue property.
     * 
     * @return
     *     possible object is
     *     {@link MetadataSetNameValueInfoV201109 }
     *     
     */
    public MetadataSetNameValueInfoV201109 getMetadataSetNameValue() {
        return metadataSetNameValue;
    }

    /**
     * Sets the value of the metadataSetNameValue property.
     * 
     * @param value
     *     allowed object is
     *     {@link MetadataSetNameValueInfoV201109 }
     *     
     */
    public void setMetadataSetNameValue(MetadataSetNameValueInfoV201109 value) {
        this.metadataSetNameValue = value;
    }

    /**
     * Gets the value of the requestContext property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link RequestContextV201109 }{@code >}
     *     
     */
    public JAXBElement<RequestContextV201109> getRequestContext() {
        return requestContext;
    }

    /**
     * Sets the value of the requestContext property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link RequestContextV201109 }{@code >}
     *     
     */
    public void setRequestContext(JAXBElement<RequestContextV201109> value) {
        this.requestContext = value;
    }

}
