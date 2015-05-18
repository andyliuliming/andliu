
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointSetInfo;


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
 *         &lt;element name="rpSetInfo" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}RecoveryPointSetInfo" minOccurs="0"/>
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
    "rpSetInfo"
})
@XmlRootElement(name = "AddRPSetInfo")
public class AddRPSetInfo {

    @XmlElementRef(name = "rpSetInfo", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<RecoveryPointSetInfo> rpSetInfo;

    /**
     * Gets the value of the rpSetInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link RecoveryPointSetInfo }{@code >}
     *     
     */
    public JAXBElement<RecoveryPointSetInfo> getRpSetInfo() {
        return rpSetInfo;
    }

    /**
     * Sets the value of the rpSetInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link RecoveryPointSetInfo }{@code >}
     *     
     */
    public void setRpSetInfo(JAXBElement<RecoveryPointSetInfo> value) {
        this.rpSetInfo = value;
    }

}
