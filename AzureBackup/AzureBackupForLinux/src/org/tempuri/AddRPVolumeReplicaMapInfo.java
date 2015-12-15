
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfAddRPVolumeReplicaMap;


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
 *         &lt;element name="rpVolumeReplicaInfo" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfAddRPVolumeReplicaMap" minOccurs="0"/>
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
    "rpVolumeReplicaInfo"
})
@XmlRootElement(name = "AddRPVolumeReplicaMapInfo")
public class AddRPVolumeReplicaMapInfo {

    @XmlElementRef(name = "rpVolumeReplicaInfo", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfAddRPVolumeReplicaMap> rpVolumeReplicaInfo;

    /**
     * Gets the value of the rpVolumeReplicaInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfAddRPVolumeReplicaMap }{@code >}
     *     
     */
    public JAXBElement<ArrayOfAddRPVolumeReplicaMap> getRpVolumeReplicaInfo() {
        return rpVolumeReplicaInfo;
    }

    /**
     * Sets the value of the rpVolumeReplicaInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfAddRPVolumeReplicaMap }{@code >}
     *     
     */
    public void setRpVolumeReplicaInfo(JAXBElement<ArrayOfAddRPVolumeReplicaMap> value) {
        this.rpVolumeReplicaInfo = value;
    }

}
