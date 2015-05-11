
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfGetRPVolumeReplicaMapResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfGetRPVolumeReplicaMapResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="GetRPVolumeReplicaMapResponse" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}GetRPVolumeReplicaMapResponse" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfGetRPVolumeReplicaMapResponse", propOrder = {
    "getRPVolumeReplicaMapResponse"
})
public class ArrayOfGetRPVolumeReplicaMapResponse {

    @XmlElement(name = "GetRPVolumeReplicaMapResponse", nillable = true)
    protected List<GetRPVolumeReplicaMapResponse> getRPVolumeReplicaMapResponse;

    /**
     * Gets the value of the getRPVolumeReplicaMapResponse property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the getRPVolumeReplicaMapResponse property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getGetRPVolumeReplicaMapResponse().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link GetRPVolumeReplicaMapResponse }
     * 
     * 
     */
    public List<GetRPVolumeReplicaMapResponse> getGetRPVolumeReplicaMapResponse() {
        if (getRPVolumeReplicaMapResponse == null) {
            getRPVolumeReplicaMapResponse = new ArrayList<GetRPVolumeReplicaMapResponse>();
        }
        return this.getRPVolumeReplicaMapResponse;
    }

}
