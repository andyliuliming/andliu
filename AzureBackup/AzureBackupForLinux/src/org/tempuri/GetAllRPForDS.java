
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.protection.v2011_09.GetEntityInformationArgs;


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
 *         &lt;element name="entity" type="{http://windowscloudbackup.com/Protection/V2011_09}GetEntityInformationArgs" minOccurs="0"/>
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
    "entity"
})
@XmlRootElement(name = "GetAllRPForDS")
public class GetAllRPForDS {

    @XmlElementRef(name = "entity", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<GetEntityInformationArgs> entity;

    /**
     * Gets the value of the entity property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link GetEntityInformationArgs }{@code >}
     *     
     */
    public JAXBElement<GetEntityInformationArgs> getEntity() {
        return entity;
    }

    /**
     * Sets the value of the entity property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link GetEntityInformationArgs }{@code >}
     *     
     */
    public void setEntity(JAXBElement<GetEntityInformationArgs> value) {
        this.entity = value;
    }

}
