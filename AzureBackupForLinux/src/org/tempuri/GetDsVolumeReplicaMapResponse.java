
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfGetDsVolumeReplicaMap;


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
 *         &lt;element name="GetDsVolumeReplicaMapResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfGetDsVolumeReplicaMap" minOccurs="0"/>
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
    "getDsVolumeReplicaMapResult"
})
@XmlRootElement(name = "GetDsVolumeReplicaMapResponse")
public class GetDsVolumeReplicaMapResponse {

    @XmlElementRef(name = "GetDsVolumeReplicaMapResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfGetDsVolumeReplicaMap> getDsVolumeReplicaMapResult;

    /**
     * Gets the value of the getDsVolumeReplicaMapResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetDsVolumeReplicaMap }{@code >}
     *     
     */
    public JAXBElement<ArrayOfGetDsVolumeReplicaMap> getGetDsVolumeReplicaMapResult() {
        return getDsVolumeReplicaMapResult;
    }

    /**
     * Sets the value of the getDsVolumeReplicaMapResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfGetDsVolumeReplicaMap }{@code >}
     *     
     */
    public void setGetDsVolumeReplicaMapResult(JAXBElement<ArrayOfGetDsVolumeReplicaMap> value) {
        this.getDsVolumeReplicaMapResult = value;
    }

}
