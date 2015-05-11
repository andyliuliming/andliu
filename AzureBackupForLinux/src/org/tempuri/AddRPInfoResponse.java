
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityId;


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
 *         &lt;element name="AddRPInfoResult" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId" minOccurs="0"/>
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
    "addRPInfoResult"
})
@XmlRootElement(name = "AddRPInfoResponse")
public class AddRPInfoResponse {

    @XmlElementRef(name = "AddRPInfoResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<EntityId> addRPInfoResult;

    /**
     * Gets the value of the addRPInfoResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link EntityId }{@code >}
     *     
     */
    public JAXBElement<EntityId> getAddRPInfoResult() {
        return addRPInfoResult;
    }

    /**
     * Sets the value of the addRPInfoResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link EntityId }{@code >}
     *     
     */
    public void setAddRPInfoResult(JAXBElement<EntityId> value) {
        this.addRPInfoResult = value;
    }

}
