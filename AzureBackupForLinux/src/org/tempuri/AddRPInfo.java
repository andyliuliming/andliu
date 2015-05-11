
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointInfo;


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
 *         &lt;element name="rpInfo" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}RecoveryPointInfo" minOccurs="0"/>
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
    "rpInfo"
})
@XmlRootElement(name = "AddRPInfo")
public class AddRPInfo {

    @XmlElementRef(name = "rpInfo", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<RecoveryPointInfo> rpInfo;

    /**
     * Gets the value of the rpInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link RecoveryPointInfo }{@code >}
     *     
     */
    public JAXBElement<RecoveryPointInfo> getRpInfo() {
        return rpInfo;
    }

    /**
     * Sets the value of the rpInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link RecoveryPointInfo }{@code >}
     *     
     */
    public void setRpInfo(JAXBElement<RecoveryPointInfo> value) {
        this.rpInfo = value;
    }

}
