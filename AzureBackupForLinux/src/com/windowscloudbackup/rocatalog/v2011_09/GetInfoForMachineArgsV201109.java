
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for GetInfoForMachineArgs_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GetInfoForMachineArgs_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}GetInfoForMachineArgs">
 *       &lt;sequence>
 *         &lt;element name="RequestContext" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}RequestContext_V2011_09"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GetInfoForMachineArgs_V2011_09", propOrder = {
    "requestContext"
})
@XmlSeeAlso({
    GetInfoForMachineArgsV201205 .class
})
public class GetInfoForMachineArgsV201109
    extends GetInfoForMachineArgs
{

    @XmlElement(name = "RequestContext", required = true, nillable = true)
    protected RequestContextV201109 requestContext;

    /**
     * Gets the value of the requestContext property.
     * 
     * @return
     *     possible object is
     *     {@link RequestContextV201109 }
     *     
     */
    public RequestContextV201109 getRequestContext() {
        return requestContext;
    }

    /**
     * Sets the value of the requestContext property.
     * 
     * @param value
     *     allowed object is
     *     {@link RequestContextV201109 }
     *     
     */
    public void setRequestContext(RequestContextV201109 value) {
        this.requestContext = value;
    }

}
