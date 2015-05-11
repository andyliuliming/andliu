
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.AddPolicyArgs;


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
 *         &lt;element name="policyInfo" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}AddPolicyArgs" minOccurs="0"/>
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
    "policyInfo"
})
@XmlRootElement(name = "AddPolicy")
public class AddPolicy {

    @XmlElementRef(name = "policyInfo", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<AddPolicyArgs> policyInfo;

    /**
     * Gets the value of the policyInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link AddPolicyArgs }{@code >}
     *     
     */
    public JAXBElement<AddPolicyArgs> getPolicyInfo() {
        return policyInfo;
    }

    /**
     * Sets the value of the policyInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link AddPolicyArgs }{@code >}
     *     
     */
    public void setPolicyInfo(JAXBElement<AddPolicyArgs> value) {
        this.policyInfo = value;
    }

}
