
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ReplicaInfoEx_V2014_04 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ReplicaInfoEx_V2014_04">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}ReplicaInfoEx_V2013_04">
 *       &lt;sequence>
 *         &lt;element name="ETag" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="PermanentBlobXml" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ReplicaInfoEx_V2014_04", propOrder = {
    "eTag",
    "permanentBlobXml"
})
public class ReplicaInfoExV201404
    extends ReplicaInfoExV201304
{

    @XmlElement(name = "ETag", required = true, nillable = true)
    protected String eTag;
    @XmlElement(name = "PermanentBlobXml", required = true, nillable = true)
    protected String permanentBlobXml;

    /**
     * Gets the value of the eTag property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getETag() {
        return eTag;
    }

    /**
     * Sets the value of the eTag property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setETag(String value) {
        this.eTag = value;
    }

    /**
     * Gets the value of the permanentBlobXml property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPermanentBlobXml() {
        return permanentBlobXml;
    }

    /**
     * Sets the value of the permanentBlobXml property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPermanentBlobXml(String value) {
        this.permanentBlobXml = value;
    }

}
