
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfGetPolicyInfoArgs;


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
 *         &lt;element name="GetAllPoliciesForMachineResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfGetPolicyInfoArgs" minOccurs="0"/>
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
    "getAllPoliciesForMachineResult"
})
@XmlRootElement(name = "GetAllPoliciesForMachineResponse")
public class GetAllPoliciesForMachineResponse {

    @XmlElementRef(name = "GetAllPoliciesForMachineResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfGetPolicyInfoArgs> getAllPoliciesForMachineResult;

    /**
     * Gets the value of the getAllPoliciesForMachineResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgs }{@code >}
     *     
     */
    public JAXBElement<ArrayOfGetPolicyInfoArgs> getGetAllPoliciesForMachineResult() {
        return getAllPoliciesForMachineResult;
    }

    /**
     * Sets the value of the getAllPoliciesForMachineResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgs }{@code >}
     *     
     */
    public void setGetAllPoliciesForMachineResult(JAXBElement<ArrayOfGetPolicyInfoArgs> value) {
        this.getAllPoliciesForMachineResult = value;
    }

}
