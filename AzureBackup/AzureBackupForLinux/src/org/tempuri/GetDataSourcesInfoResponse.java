
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfDataSourceInfoEx;


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
 *         &lt;element name="GetDataSourcesInfoResult" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfDataSourceInfoEx" minOccurs="0"/>
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
    "getDataSourcesInfoResult"
})
@XmlRootElement(name = "GetDataSourcesInfoResponse")
public class GetDataSourcesInfoResponse {

    @XmlElementRef(name = "GetDataSourcesInfoResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfDataSourceInfoEx> getDataSourcesInfoResult;

    /**
     * Gets the value of the getDataSourcesInfoResult property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfDataSourceInfoEx }{@code >}
     *     
     */
    public JAXBElement<ArrayOfDataSourceInfoEx> getGetDataSourcesInfoResult() {
        return getDataSourcesInfoResult;
    }

    /**
     * Sets the value of the getDataSourcesInfoResult property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfDataSourceInfoEx }{@code >}
     *     
     */
    public void setGetDataSourcesInfoResult(JAXBElement<ArrayOfDataSourceInfoEx> value) {
        this.getDataSourcesInfoResult = value;
    }

}
