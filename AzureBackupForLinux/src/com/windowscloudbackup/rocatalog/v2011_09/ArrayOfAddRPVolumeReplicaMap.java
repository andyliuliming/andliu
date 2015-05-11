
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfAddRPVolumeReplicaMap complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfAddRPVolumeReplicaMap">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="AddRPVolumeReplicaMap" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}AddRPVolumeReplicaMap" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfAddRPVolumeReplicaMap", propOrder = {
    "addRPVolumeReplicaMap"
})
public class ArrayOfAddRPVolumeReplicaMap {

    @XmlElement(name = "AddRPVolumeReplicaMap", nillable = true)
    protected List<AddRPVolumeReplicaMap> addRPVolumeReplicaMap;

    /**
     * Gets the value of the addRPVolumeReplicaMap property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the addRPVolumeReplicaMap property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getAddRPVolumeReplicaMap().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link AddRPVolumeReplicaMap }
     * 
     * 
     */
    public List<AddRPVolumeReplicaMap> getAddRPVolumeReplicaMap() {
        if (addRPVolumeReplicaMap == null) {
            addRPVolumeReplicaMap = new ArrayList<AddRPVolumeReplicaMap>();
        }
        return this.addRPVolumeReplicaMap;
    }

}
