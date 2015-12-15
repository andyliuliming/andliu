
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.UpdateReplicaClientStampArgs;


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
 *         &lt;element name="ReplicaClientStampArgs" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}UpdateReplicaClientStampArgs" minOccurs="0"/>
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
    "replicaClientStampArgs"
})
@XmlRootElement(name = "UpdateReplicaClientStamp")
public class UpdateReplicaClientStamp {

    @XmlElementRef(name = "ReplicaClientStampArgs", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<UpdateReplicaClientStampArgs> replicaClientStampArgs;

    /**
     * Gets the value of the replicaClientStampArgs property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link UpdateReplicaClientStampArgs }{@code >}
     *     
     */
    public JAXBElement<UpdateReplicaClientStampArgs> getReplicaClientStampArgs() {
        return replicaClientStampArgs;
    }

    /**
     * Sets the value of the replicaClientStampArgs property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link UpdateReplicaClientStampArgs }{@code >}
     *     
     */
    public void setReplicaClientStampArgs(JAXBElement<UpdateReplicaClientStampArgs> value) {
        this.replicaClientStampArgs = value;
    }

}
