
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for PolicyAndRPInfoResponse_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="PolicyAndRPInfoResponse_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}PolicyAndRPInfoResponse">
 *       &lt;sequence>
 *         &lt;element name="PolicyInfo" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfGetPolicyInfoArgs_V2011_09" minOccurs="0"/>
 *         &lt;element name="RPInfo" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}RecoveryPointInfoResponse_V2011_09" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "PolicyAndRPInfoResponse_V2011_09", propOrder = {
    "policyInfo",
    "rpInfo"
})
public class PolicyAndRPInfoResponseV201109
    extends PolicyAndRPInfoResponse
{

    @XmlElementRef(name = "PolicyInfo", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfGetPolicyInfoArgsV201109> policyInfo;
    @XmlElementRef(name = "RPInfo", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<RecoveryPointInfoResponseV201109> rpInfo;

    /**
     * Gets the value of the policyInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgsV201109 }{@code >}
     *     
     */
    public JAXBElement<ArrayOfGetPolicyInfoArgsV201109> getPolicyInfo() {
        return policyInfo;
    }

    /**
     * Sets the value of the policyInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgsV201109 }{@code >}
     *     
     */
    public void setPolicyInfo(JAXBElement<ArrayOfGetPolicyInfoArgsV201109> value) {
        this.policyInfo = value;
    }

    /**
     * Gets the value of the rpInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link RecoveryPointInfoResponseV201109 }{@code >}
     *     
     */
    public JAXBElement<RecoveryPointInfoResponseV201109> getRPInfo() {
        return rpInfo;
    }

    /**
     * Sets the value of the rpInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link RecoveryPointInfoResponseV201109 }{@code >}
     *     
     */
    public void setRPInfo(JAXBElement<RecoveryPointInfoResponseV201109> value) {
        this.rpInfo = value;
    }

}
