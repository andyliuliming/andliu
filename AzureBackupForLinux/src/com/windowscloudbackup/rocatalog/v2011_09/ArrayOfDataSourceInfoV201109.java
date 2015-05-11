
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfDataSourceInfo_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfDataSourceInfo_V2011_09">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="DataSourceInfo_V2011_09" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}DataSourceInfo_V2011_09" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfDataSourceInfo_V2011_09", propOrder = {
    "dataSourceInfoV201109"
})
public class ArrayOfDataSourceInfoV201109 {

    @XmlElement(name = "DataSourceInfo_V2011_09", nillable = true)
    protected List<DataSourceInfoV201109> dataSourceInfoV201109;

    /**
     * Gets the value of the dataSourceInfoV201109 property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the dataSourceInfoV201109 property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDataSourceInfoV201109().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link DataSourceInfoV201109 }
     * 
     * 
     */
    public List<DataSourceInfoV201109> getDataSourceInfoV201109() {
        if (dataSourceInfoV201109 == null) {
            dataSourceInfoV201109 = new ArrayList<DataSourceInfoV201109>();
        }
        return this.dataSourceInfoV201109;
    }

}
