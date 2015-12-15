
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.GetReplicaArgs;


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
 *         &lt;element name="replicaId" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}GetReplicaArgs" minOccurs="0"/>
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
    "replicaId"
})
@XmlRootElement(name = "GetReplica")
public class GetReplica {

    @XmlElementRef(name = "replicaId", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<GetReplicaArgs> replicaId;

    /**
     * Gets the value of the replicaId property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link GetReplicaArgs }{@code >}
     *     
     */
    public JAXBElement<GetReplicaArgs> getReplicaId() {
        return replicaId;
    }

    /**
     * Sets the value of the replicaId property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link GetReplicaArgs }{@code >}
     *     
     */
    public void setReplicaId(JAXBElement<GetReplicaArgs> value) {
        this.replicaId = value;
    }

}
