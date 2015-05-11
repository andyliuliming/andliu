
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for AddPolicyArgs complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AddPolicyArgs">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}PolicyInfoBase">
 *       &lt;sequence>
 *         &lt;element name="MachineName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AddPolicyArgs", propOrder = {
    "machineName"
})
@XmlSeeAlso({
    AddPolicyArgsV201109 .class
})
public class AddPolicyArgs
    extends PolicyInfoBase
{

    @XmlElementRef(name = "MachineName", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<String> machineName;

    /**
     * Gets the value of the machineName property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getMachineName() {
        return machineName;
    }

    /**
     * Sets the value of the machineName property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setMachineName(JAXBElement<String> value) {
        this.machineName = value;
    }

}
