
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.protection.v2011_09.GetEntitiesInformationArgs;


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
 *         &lt;element name="dsIds" type="{http://windowscloudbackup.com/Protection/V2011_09}GetEntitiesInformationArgs" minOccurs="0"/>
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
    "dsIds"
})
@XmlRootElement(name = "GetPoliciesInfoForDsIds")
public class GetPoliciesInfoForDsIds {

    @XmlElementRef(name = "dsIds", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<GetEntitiesInformationArgs> dsIds;

    /**
     * Gets the value of the dsIds property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link GetEntitiesInformationArgs }{@code >}
     *     
     */
    public JAXBElement<GetEntitiesInformationArgs> getDsIds() {
        return dsIds;
    }

    /**
     * Sets the value of the dsIds property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link GetEntitiesInformationArgs }{@code >}
     *     
     */
    public void setDsIds(JAXBElement<GetEntitiesInformationArgs> value) {
        this.dsIds = value;
    }

}
