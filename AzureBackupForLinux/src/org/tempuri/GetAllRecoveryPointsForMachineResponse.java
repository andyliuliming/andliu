
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointInfoResponse;


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
 *         &lt;element name="GetAllRecoveryPointsForMachineResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}RecoveryPointInfoResponse" minOccurs="0"/>
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
    "getAllRecoveryPointsForMachineResult"
})
@XmlRootElement(name = "GetAllRecoveryPointsForMachineResponse")
public class GetAllRecoveryPointsForMachineResponse {

    @XmlElementRef(name = "GetAllRecoveryPointsForMachineResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<RecoveryPointInfoResponse> getAllRecoveryPointsForMachineResult;

    /**
     * Gets the value of the getAllRecoveryPointsForMachineResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link RecoveryPointInfoResponse }{@code >}
     *     
     */
    public JAXBElement<RecoveryPointInfoResponse> getGetAllRecoveryPointsForMachineResult() {
        return getAllRecoveryPointsForMachineResult;
    }

    /**
     * Sets the value of the getAllRecoveryPointsForMachineResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link RecoveryPointInfoResponse }{@code >}
     *     
     */
    public void setGetAllRecoveryPointsForMachineResult(JAXBElement<RecoveryPointInfoResponse> value) {
        this.getAllRecoveryPointsForMachineResult = value;
    }

}
