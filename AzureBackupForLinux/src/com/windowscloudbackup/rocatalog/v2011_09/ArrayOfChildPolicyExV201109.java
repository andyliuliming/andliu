
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfChildPolicyEx_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfChildPolicyEx_V2011_09">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ChildPolicyEx_V2011_09" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ChildPolicyEx_V2011_09" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfChildPolicyEx_V2011_09", propOrder = {
    "childPolicyExV201109"
})
public class ArrayOfChildPolicyExV201109 {

    @XmlElement(name = "ChildPolicyEx_V2011_09", nillable = true)
    protected List<ChildPolicyExV201109> childPolicyExV201109;

    /**
     * Gets the value of the childPolicyExV201109 property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the childPolicyExV201109 property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getChildPolicyExV201109().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ChildPolicyExV201109 }
     * 
     * 
     */
    public List<ChildPolicyExV201109> getChildPolicyExV201109() {
        if (childPolicyExV201109 == null) {
            childPolicyExV201109 = new ArrayList<ChildPolicyExV201109>();
        }
        return this.childPolicyExV201109;
    }

}
