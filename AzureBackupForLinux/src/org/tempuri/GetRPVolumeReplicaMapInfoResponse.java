
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfGetRPVolumeReplicaMapResponse;


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
 *         &lt;element name="GetRPVolumeReplicaMapInfoResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfGetRPVolumeReplicaMapResponse" minOccurs="0"/>
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
    "getRPVolumeReplicaMapInfoResult"
})
@XmlRootElement(name = "GetRPVolumeReplicaMapInfoResponse")
public class GetRPVolumeReplicaMapInfoResponse {

    @XmlElementRef(name = "GetRPVolumeReplicaMapInfoResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfGetRPVolumeReplicaMapResponse> getRPVolumeReplicaMapInfoResult;

    /**
     * Gets the value of the getRPVolumeReplicaMapInfoResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetRPVolumeReplicaMapResponse }{@code >}
     *     
     */
    public JAXBElement<ArrayOfGetRPVolumeReplicaMapResponse> getGetRPVolumeReplicaMapInfoResult() {
        return getRPVolumeReplicaMapInfoResult;
    }

    /**
     * Sets the value of the getRPVolumeReplicaMapInfoResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetRPVolumeReplicaMapResponse }{@code >}
     *     
     */
    public void setGetRPVolumeReplicaMapInfoResult(JAXBElement<ArrayOfGetRPVolumeReplicaMapResponse> value) {
        this.getRPVolumeReplicaMapInfoResult = value;
    }

}
