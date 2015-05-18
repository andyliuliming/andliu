
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfEncryptionKeyEx_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfEncryptionKeyEx_V2011_09">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="EncryptionKeyEx_V2011_09" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}EncryptionKeyEx_V2011_09" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfEncryptionKeyEx_V2011_09", propOrder = {
    "encryptionKeyExV201109"
})
public class ArrayOfEncryptionKeyExV201109 {

    @XmlElement(name = "EncryptionKeyEx_V2011_09", nillable = true)
    protected List<EncryptionKeyExV201109> encryptionKeyExV201109;

    /**
     * Gets the value of the encryptionKeyExV201109 property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the encryptionKeyExV201109 property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getEncryptionKeyExV201109().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link EncryptionKeyExV201109 }
     * 
     * 
     */
    public List<EncryptionKeyExV201109> getEncryptionKeyExV201109() {
        if (encryptionKeyExV201109 == null) {
            encryptionKeyExV201109 = new ArrayList<EncryptionKeyExV201109>();
        }
        return this.encryptionKeyExV201109;
    }

}
