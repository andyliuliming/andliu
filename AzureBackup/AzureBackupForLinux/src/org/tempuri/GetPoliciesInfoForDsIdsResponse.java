
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
 *         &lt;element name="GetPoliciesInfoForDsIdsResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfGetPolicyInfoArgs" minOccurs="0"/>
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
    "getPoliciesInfoForDsIdsResult"
})
@XmlRootElement(name = "GetPoliciesInfoForDsIdsResponse")
public class GetPoliciesInfoForDsIdsResponse {

    @XmlElementRef(name = "GetPoliciesInfoForDsIdsResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfGetPolicyInfoArgs> getPoliciesInfoForDsIdsResult;

    /**
     * Gets the value of the getPoliciesInfoForDsIdsResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgs }{@code >}
     *     
     */
    public JAXBElement<ArrayOfGetPolicyInfoArgs> getGetPoliciesInfoForDsIdsResult() {
        return getPoliciesInfoForDsIdsResult;
    }

    /**
     * Sets the value of the getPoliciesInfoForDsIdsResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgs }{@code >}
     *     
     */
    public void setGetPoliciesInfoForDsIdsResult(JAXBElement<ArrayOfGetPolicyInfoArgs> value) {
        this.getPoliciesInfoForDsIdsResult = value;
    }

}
