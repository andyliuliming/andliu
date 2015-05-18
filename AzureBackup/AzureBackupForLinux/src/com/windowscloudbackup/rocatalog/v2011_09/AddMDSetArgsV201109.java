
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for AddMDSetArgs_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AddMDSetArgs_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}AddMDSetArgs">
 *       &lt;sequence>
 *         &lt;element name="MetadataSet" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfMetadataSetNameValueInfoEx_V2011_09" minOccurs="0"/>
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
@XmlType(name = "AddMDSetArgs_V2011_09", propOrder = {
    "metadataSet",
    "requestContext"
})
public class AddMDSetArgsV201109
    extends AddMDSetArgs
{

    @XmlElementRef(name = "MetadataSet", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfMetadataSetNameValueInfoExV201109> metadataSet;
    @XmlElementRef(name = "RequestContext", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<RequestContextV201109> requestContext;

    /**
     * Gets the value of the metadataSet property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfMetadataSetNameValueInfoExV201109 }{@code >}
     *     
     */
    public JAXBElement<ArrayOfMetadataSetNameValueInfoExV201109> getMetadataSet() {
        return metadataSet;
    }

    /**
     * Sets the value of the metadataSet property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfMetadataSetNameValueInfoExV201109 }{@code >}
     *     
     */
    public void setMetadataSet(JAXBElement<ArrayOfMetadataSetNameValueInfoExV201109> value) {
        this.metadataSet = value;
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
