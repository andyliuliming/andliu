
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfGetPolicyInfoArgs complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfGetPolicyInfoArgs">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="GetPolicyInfoArgs" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}GetPolicyInfoArgs" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfGetPolicyInfoArgs", propOrder = {
    "getPolicyInfoArgs"
})
public class ArrayOfGetPolicyInfoArgs {

    @XmlElement(name = "GetPolicyInfoArgs", nillable = true)
    protected List<GetPolicyInfoArgs> getPolicyInfoArgs;

    /**
     * Gets the value of the getPolicyInfoArgs property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the getPolicyInfoArgs property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getGetPolicyInfoArgs().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link GetPolicyInfoArgs }
     * 
     * 
     */
    public List<GetPolicyInfoArgs> getGetPolicyInfoArgs() {
        if (getPolicyInfoArgs == null) {
            getPolicyInfoArgs = new ArrayList<GetPolicyInfoArgs>();
        }
        return this.getPolicyInfoArgs;
    }

}
