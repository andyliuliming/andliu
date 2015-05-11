
package com.windowscloudbackup.cloudcommon.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfEntityId_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfEntityId_V2011_09">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="EntityId_V2011_09" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfEntityId_V2011_09", propOrder = {
    "entityIdV201109"
})
public class ArrayOfEntityIdV201109 {

    @XmlElement(name = "EntityId_V2011_09", nillable = true)
    protected List<EntityIdV201109> entityIdV201109;

    /**
     * Gets the value of the entityIdV201109 property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the entityIdV201109 property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getEntityIdV201109().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link EntityIdV201109 }
     * 
     * 
     */
    public List<EntityIdV201109> getEntityIdV201109() {
        if (entityIdV201109 == null) {
            entityIdV201109 = new ArrayList<EntityIdV201109>();
        }
        return this.entityIdV201109;
    }

}
