
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.DataSourceInfoEx;


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
 *         &lt;element name="GetDsInfoResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}DataSourceInfoEx" minOccurs="0"/>
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
    "getDsInfoResult"
})
@XmlRootElement(name = "GetDsInfoResponse")
public class GetDsInfoResponse {

    @XmlElementRef(name = "GetDsInfoResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<DataSourceInfoEx> getDsInfoResult;

    /**
     * Gets the value of the getDsInfoResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link DataSourceInfoEx }{@code >}
     *     
     */
    public JAXBElement<DataSourceInfoEx> getGetDsInfoResult() {
        return getDsInfoResult;
    }

    /**
     * Sets the value of the getDsInfoResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link DataSourceInfoEx }{@code >}
     *     
     */
    public void setGetDsInfoResult(JAXBElement<DataSourceInfoEx> value) {
        this.getDsInfoResult = value;
    }

}
