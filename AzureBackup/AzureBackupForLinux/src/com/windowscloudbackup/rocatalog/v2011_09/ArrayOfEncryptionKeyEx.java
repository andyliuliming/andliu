
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfEncryptionKeyEx complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfEncryptionKeyEx">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="EncryptionKeyEx" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}EncryptionKeyEx" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfEncryptionKeyEx", propOrder = {
    "encryptionKeyEx"
})
public class ArrayOfEncryptionKeyEx {

    @XmlElement(name = "EncryptionKeyEx", nillable = true)
    protected List<EncryptionKeyEx> encryptionKeyEx;

    /**
     * Gets the value of the encryptionKeyEx property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the encryptionKeyEx property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getEncryptionKeyEx().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link EncryptionKeyEx }
     * 
     * 
     */
    public List<EncryptionKeyEx> getEncryptionKeyEx() {
        if (encryptionKeyEx == null) {
            encryptionKeyEx = new ArrayList<EncryptionKeyEx>();
        }
        return this.encryptionKeyEx;
    }

}
