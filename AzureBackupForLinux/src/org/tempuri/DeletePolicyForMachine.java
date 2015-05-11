
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.DeletePolicyInfoArgs;


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
 *         &lt;element name="deletePolicyInfo" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}DeletePolicyInfoArgs" minOccurs="0"/>
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
    "deletePolicyInfo"
})
@XmlRootElement(name = "DeletePolicyForMachine")
public class DeletePolicyForMachine {

    @XmlElementRef(name = "deletePolicyInfo", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<DeletePolicyInfoArgs> deletePolicyInfo;

    /**
     * Gets the value of the deletePolicyInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link DeletePolicyInfoArgs }{@code >}
     *     
     */
    public JAXBElement<DeletePolicyInfoArgs> getDeletePolicyInfo() {
        return deletePolicyInfo;
    }

    /**
     * Sets the value of the deletePolicyInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link DeletePolicyInfoArgs }{@code >}
     *     
     */
    public void setDeletePolicyInfo(JAXBElement<DeletePolicyInfoArgs> value) {
        this.deletePolicyInfo = value;
    }

}
