
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfDataSourceInfoEx_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfDataSourceInfoEx_V2011_09">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="DataSourceInfoEx_V2011_09" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}DataSourceInfoEx_V2011_09" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfDataSourceInfoEx_V2011_09", propOrder = {
    "dataSourceInfoExV201109"
})
public class ArrayOfDataSourceInfoExV201109 {

    @XmlElement(name = "DataSourceInfoEx_V2011_09", nillable = true)
    protected List<DataSourceInfoExV201109> dataSourceInfoExV201109;

    /**
     * Gets the value of the dataSourceInfoExV201109 property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the dataSourceInfoExV201109 property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDataSourceInfoExV201109().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link DataSourceInfoExV201109 }
     * 
     * 
     */
    public List<DataSourceInfoExV201109> getDataSourceInfoExV201109() {
        if (dataSourceInfoExV201109 == null) {
            dataSourceInfoExV201109 = new ArrayList<DataSourceInfoExV201109>();
        }
        return this.dataSourceInfoExV201109;
    }

}
