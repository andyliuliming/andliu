
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfAddDsVolumeReplicaMap complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfAddDsVolumeReplicaMap">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="AddDsVolumeReplicaMap" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}AddDsVolumeReplicaMap" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfAddDsVolumeReplicaMap", propOrder = {
    "addDsVolumeReplicaMap"
})
public class ArrayOfAddDsVolumeReplicaMap {

    @XmlElement(name = "AddDsVolumeReplicaMap", nillable = true)
    protected List<AddDsVolumeReplicaMap> addDsVolumeReplicaMap;

    /**
     * Gets the value of the addDsVolumeReplicaMap property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the addDsVolumeReplicaMap property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getAddDsVolumeReplicaMap().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link AddDsVolumeReplicaMap }
     * 
     * 
     */
    public List<AddDsVolumeReplicaMap> getAddDsVolumeReplicaMap() {
        if (addDsVolumeReplicaMap == null) {
            addDsVolumeReplicaMap = new ArrayList<AddDsVolumeReplicaMap>();
        }
        return this.addDsVolumeReplicaMap;
    }

}
