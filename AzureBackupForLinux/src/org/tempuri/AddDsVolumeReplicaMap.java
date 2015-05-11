
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfAddDsVolumeReplicaMap;


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
 *         &lt;element name="dsVolRepMap" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfAddDsVolumeReplicaMap" minOccurs="0"/>
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
    "dsVolRepMap"
})
@XmlRootElement(name = "AddDsVolumeReplicaMap")
public class AddDsVolumeReplicaMap {

    @XmlElementRef(name = "dsVolRepMap", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfAddDsVolumeReplicaMap> dsVolRepMap;

    /**
     * Gets the value of the dsVolRepMap property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfAddDsVolumeReplicaMap }{@code >}
     *     
     */
    public JAXBElement<ArrayOfAddDsVolumeReplicaMap> getDsVolRepMap() {
        return dsVolRepMap;
    }

    /**
     * Sets the value of the dsVolRepMap property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfAddDsVolumeReplicaMap }{@code >}
     *     
     */
    public void setDsVolRepMap(JAXBElement<ArrayOfAddDsVolumeReplicaMap> value) {
        this.dsVolRepMap = value;
    }

}
