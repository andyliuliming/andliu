
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.protection.v2011_09.SetLastAccessTimeForRPArgs;


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
 *         &lt;element name="rpArgs" type="{http://windowscloudbackup.com/Protection/V2011_09}SetLastAccessTimeForRPArgs" minOccurs="0"/>
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
    "rpArgs"
})
@XmlRootElement(name = "SetLastAccessTimeForRP")
public class SetLastAccessTimeForRP {

    @XmlElementRef(name = "rpArgs", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<SetLastAccessTimeForRPArgs> rpArgs;

    /**
     * Gets the value of the rpArgs property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link SetLastAccessTimeForRPArgs }{@code >}
     *     
     */
    public JAXBElement<SetLastAccessTimeForRPArgs> getRpArgs() {
        return rpArgs;
    }

    /**
     * Sets the value of the rpArgs property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link SetLastAccessTimeForRPArgs }{@code >}
     *     
     */
    public void setRpArgs(JAXBElement<SetLastAccessTimeForRPArgs> value) {
        this.rpArgs = value;
    }

}
