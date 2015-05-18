
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ROCatalogRequestContext_V2012_12 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ROCatalogRequestContext_V2012_12">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}ROCatalogRequestContext">
 *       &lt;sequence>
 *         &lt;element name="IsAuthRequired" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ROCatalogRequestContext_V2012_12", propOrder = {
    "isAuthRequired"
})
public class ROCatalogRequestContextV201212
    extends ROCatalogRequestContext
{

    @XmlElement(name = "IsAuthRequired")
    protected Boolean isAuthRequired;

    /**
     * Gets the value of the isAuthRequired property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isIsAuthRequired() {
        return isAuthRequired;
    }

    /**
     * Sets the value of the isAuthRequired property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setIsAuthRequired(Boolean value) {
        this.isAuthRequired = value;
    }

}
