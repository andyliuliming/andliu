
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.ArrayOfEntityId;


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
 *         &lt;element name="GetAllPolicyIdsResult" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}ArrayOfEntityId" minOccurs="0"/>
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
    "getAllPolicyIdsResult"
})
@XmlRootElement(name = "GetAllPolicyIdsResponse")
public class GetAllPolicyIdsResponse {

    @XmlElementRef(name = "GetAllPolicyIdsResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfEntityId> getAllPolicyIdsResult;

    /**
     * Gets the value of the getAllPolicyIdsResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfEntityId }{@code >}
     *     
     */
    public JAXBElement<ArrayOfEntityId> getGetAllPolicyIdsResult() {
        return getAllPolicyIdsResult;
    }

    /**
     * Sets the value of the getAllPolicyIdsResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfEntityId }{@code >}
     *     
     */
    public void setGetAllPolicyIdsResult(JAXBElement<ArrayOfEntityId> value) {
        this.getAllPolicyIdsResult = value;
    }

}
