
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
 *         &lt;element name="GetAllPoliciesResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfGetPolicyInfoArgs" minOccurs="0"/>
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
    "getAllPoliciesResult"
})
@XmlRootElement(name = "GetAllPoliciesResponse")
public class GetAllPoliciesResponse {

    @XmlElementRef(name = "GetAllPoliciesResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfGetPolicyInfoArgs> getAllPoliciesResult;

    /**
     * Gets the value of the getAllPoliciesResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgs }{@code >}
     *     
     */
    public JAXBElement<ArrayOfGetPolicyInfoArgs> getGetAllPoliciesResult() {
        return getAllPoliciesResult;
    }

    /**
     * Sets the value of the getAllPoliciesResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgs }{@code >}
     *     
     */
    public void setGetAllPoliciesResult(JAXBElement<ArrayOfGetPolicyInfoArgs> value) {
        this.getAllPoliciesResult = value;
    }

}
