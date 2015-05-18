
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfMetadataSetNameValueInfoEx_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfMetadataSetNameValueInfoEx_V2011_09">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="MetadataSetNameValueInfoEx_V2011_09" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}MetadataSetNameValueInfoEx_V2011_09" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfMetadataSetNameValueInfoEx_V2011_09", propOrder = {
    "metadataSetNameValueInfoExV201109"
})
public class ArrayOfMetadataSetNameValueInfoExV201109 {

    @XmlElement(name = "MetadataSetNameValueInfoEx_V2011_09", nillable = true)
    protected List<MetadataSetNameValueInfoExV201109> metadataSetNameValueInfoExV201109;

    /**
     * Gets the value of the metadataSetNameValueInfoExV201109 property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the metadataSetNameValueInfoExV201109 property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getMetadataSetNameValueInfoExV201109().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link MetadataSetNameValueInfoExV201109 }
     * 
     * 
     */
    public List<MetadataSetNameValueInfoExV201109> getMetadataSetNameValueInfoExV201109() {
        if (metadataSetNameValueInfoExV201109 == null) {
            metadataSetNameValueInfoExV201109 = new ArrayList<MetadataSetNameValueInfoExV201109>();
        }
        return this.metadataSetNameValueInfoExV201109;
    }

}
