
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointInfoEx;


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
 *         &lt;element name="GetRPInfoResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}RecoveryPointInfoEx" minOccurs="0"/>
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
    "getRPInfoResult"
})
@XmlRootElement(name = "GetRPInfoResponse")
public class GetRPInfoResponse {

    @XmlElementRef(name = "GetRPInfoResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<RecoveryPointInfoEx> getRPInfoResult;

    /**
     * Gets the value of the getRPInfoResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link RecoveryPointInfoEx }{@code >}
     *     
     */
    public JAXBElement<RecoveryPointInfoEx> getGetRPInfoResult() {
        return getRPInfoResult;
    }

    /**
     * Sets the value of the getRPInfoResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link RecoveryPointInfoEx }{@code >}
     *     
     */
    public void setGetRPInfoResult(JAXBElement<RecoveryPointInfoEx> value) {
        this.getRPInfoResult = value;
    }

}
