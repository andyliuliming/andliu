
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.protection.v2011_09.StorageUsageForMachineResponse;


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
 *         &lt;element name="GetStorageUsageForMachineResult" type="{http://windowscloudbackup.com/Protection/V2011_09}StorageUsageForMachineResponse" minOccurs="0"/>
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
    "getStorageUsageForMachineResult"
})
@XmlRootElement(name = "GetStorageUsageForMachineResponse")
public class GetStorageUsageForMachineResponse {

    @XmlElementRef(name = "GetStorageUsageForMachineResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<StorageUsageForMachineResponse> getStorageUsageForMachineResult;

    /**
     * Gets the value of the getStorageUsageForMachineResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link StorageUsageForMachineResponse }{@code >}
     *     
     */
    public JAXBElement<StorageUsageForMachineResponse> getGetStorageUsageForMachineResult() {
        return getStorageUsageForMachineResult;
    }

    /**
     * Sets the value of the getStorageUsageForMachineResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link StorageUsageForMachineResponse }{@code >}
     *     
     */
    public void setGetStorageUsageForMachineResult(JAXBElement<StorageUsageForMachineResponse> value) {
        this.getStorageUsageForMachineResult = value;
    }

}
