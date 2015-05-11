
package com.windowscloudbackup.rocatalog.v2011_09;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ArrayOfDataSourceInfoEx complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfDataSourceInfoEx">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="DataSourceInfoEx" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}DataSourceInfoEx" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfDataSourceInfoEx", propOrder = {
    "dataSourceInfoEx"
})
public class ArrayOfDataSourceInfoEx {

    @XmlElement(name = "DataSourceInfoEx", nillable = true)
    protected List<DataSourceInfoEx> dataSourceInfoEx;

    /**
     * Gets the value of the dataSourceInfoEx property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the dataSourceInfoEx property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDataSourceInfoEx().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link DataSourceInfoEx }
     * 
     * 
     */
    public List<DataSourceInfoEx> getDataSourceInfoEx() {
        if (dataSourceInfoEx == null) {
            dataSourceInfoEx = new ArrayList<DataSourceInfoEx>();
        }
        return this.dataSourceInfoEx;
    }

}
