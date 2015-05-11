
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.GetDsArrayInfoArgs;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="dataSourcesInfo" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}GetDsArrayInfoArgs" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "dataSourcesInfo"
})
@XmlRootElement(name = "GetDataSourcesInfo")
public class GetDataSourcesInfo {

    @XmlElementRef(name = "dataSourcesInfo", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<GetDsArrayInfoArgs> dataSourcesInfo;

    /**
     * Gets the value of the dataSourcesInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link GetDsArrayInfoArgs }{@code >}
     *     
     */
    public JAXBElement<GetDsArrayInfoArgs> getDataSourcesInfo() {
        return dataSourcesInfo;
    }

    /**
     * Sets the value of the dataSourcesInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link GetDsArrayInfoArgs }{@code >}
     *     
     */
    public void setDataSourcesInfo(JAXBElement<GetDsArrayInfoArgs> value) {
        this.dataSourcesInfo = value;
    }

}
