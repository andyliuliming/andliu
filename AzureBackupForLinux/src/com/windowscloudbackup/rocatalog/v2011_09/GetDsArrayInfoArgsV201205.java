
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for GetDsArrayInfoArgs_V2012_05 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GetDsArrayInfoArgs_V2012_05">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}GetDsArrayInfoArgs">
 *       &lt;sequence>
 *         &lt;element name="RequestContext" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}RequestContext_V2011_09" minOccurs="0"/>
 *         &lt;element name="dsInfoArray" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfDataSourceInfo_V2011_09"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GetDsArrayInfoArgs_V2012_05", propOrder = {
    "requestContext",
    "dsInfoArray"
})
public class GetDsArrayInfoArgsV201205
    extends GetDsArrayInfoArgs
{

    @XmlElementRef(name = "RequestContext", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<RequestContextV201109> requestContext;
    @XmlElement(required = true, nillable = true)
    protected ArrayOfDataSourceInfoV201109 dsInfoArray;

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

    /**
     * Gets the value of the dsInfoArray property.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfDataSourceInfoV201109 }
     *     
     */
    public ArrayOfDataSourceInfoV201109 getDsInfoArray() {
        return dsInfoArray;
    }

    /**
     * Sets the value of the dsInfoArray property.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfDataSourceInfoV201109 }
     *     
     */
    public void setDsInfoArray(ArrayOfDataSourceInfoV201109 value) {
        this.dsInfoArray = value;
    }

}
