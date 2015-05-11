
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.DeleteRecoveryPointsInfoArgs;


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
 *         &lt;element name="dsInfo" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}DeleteRecoveryPointsInfoArgs" minOccurs="0"/>
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
    "dsInfo"
})
@XmlRootElement(name = "DeleteRecoveryPoints")
public class DeleteRecoveryPoints {

    @XmlElementRef(name = "dsInfo", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<DeleteRecoveryPointsInfoArgs> dsInfo;

    /**
     * Gets the value of the dsInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link DeleteRecoveryPointsInfoArgs }{@code >}
     *     
     */
    public JAXBElement<DeleteRecoveryPointsInfoArgs> getDsInfo() {
        return dsInfo;
    }

    /**
     * Sets the value of the dsInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link DeleteRecoveryPointsInfoArgs }{@code >}
     *     
     */
    public void setDsInfo(JAXBElement<DeleteRecoveryPointsInfoArgs> value) {
        this.dsInfo = value;
    }

}
