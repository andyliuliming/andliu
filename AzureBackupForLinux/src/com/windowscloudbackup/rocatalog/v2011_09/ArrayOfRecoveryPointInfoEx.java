
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfRecoveryPointInfoEx complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfRecoveryPointInfoEx">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="RecoveryPointInfoEx" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}RecoveryPointInfoEx" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfRecoveryPointInfoEx", propOrder = {
    "recoveryPointInfoEx"
})
public class ArrayOfRecoveryPointInfoEx {

    @XmlElement(name = "RecoveryPointInfoEx", nillable = true)
    protected List<RecoveryPointInfoEx> recoveryPointInfoEx;

    /**
     * Gets the value of the recoveryPointInfoEx property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the recoveryPointInfoEx property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getRecoveryPointInfoEx().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link RecoveryPointInfoEx }
     * 
     * 
     */
    public List<RecoveryPointInfoEx> getRecoveryPointInfoEx() {
        if (recoveryPointInfoEx == null) {
            recoveryPointInfoEx = new ArrayList<RecoveryPointInfoEx>();
        }
        return this.recoveryPointInfoEx;
    }

}
