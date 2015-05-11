
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.ArrayOfEntityIdV201109;


/**
 * <p>Java class for RecoveryPointInfoResponse_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="RecoveryPointInfoResponse_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}RecoveryPointInfoResponse">
 *       &lt;sequence>
 *         &lt;element name="RecoveryPointIds" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}ArrayOfEntityId_V2011_09" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RecoveryPointInfoResponse_V2011_09", propOrder = {
    "recoveryPointIds"
})
public class RecoveryPointInfoResponseV201109
    extends RecoveryPointInfoResponse
{

    @XmlElementRef(name = "RecoveryPointIds", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfEntityIdV201109> recoveryPointIds;

    /**
     * Gets the value of the recoveryPointIds property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfEntityIdV201109 }{@code >}
     *     
     */
    public JAXBElement<ArrayOfEntityIdV201109> getRecoveryPointIds() {
        return recoveryPointIds;
    }

    /**
     * Sets the value of the recoveryPointIds property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfEntityIdV201109 }{@code >}
     *     
     */
    public void setRecoveryPointIds(JAXBElement<ArrayOfEntityIdV201109> value) {
        this.recoveryPointIds = value;
    }

}
