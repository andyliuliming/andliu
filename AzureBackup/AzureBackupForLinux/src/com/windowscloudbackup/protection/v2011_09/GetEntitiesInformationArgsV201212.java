
package com.windowscloudbackup.protection.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.rocatalog.v2011_09.ROCatalogRequestContext;


/**
 * <p>Java class for GetEntitiesInformationArgs_V2012_12 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GetEntitiesInformationArgs_V2012_12">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/Protection/V2011_09}GetEntitiesInformationArgs_V2011_09">
 *       &lt;sequence>
 *         &lt;element name="CatalogRequestContext" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ROCatalogRequestContext"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GetEntitiesInformationArgs_V2012_12", propOrder = {
    "catalogRequestContext"
})
@XmlSeeAlso({
    GetEntitiesInformationArgsV201304 .class
})
public class GetEntitiesInformationArgsV201212
    extends GetEntitiesInformationArgsV201109
{

    @XmlElement(name = "CatalogRequestContext", required = true, nillable = true)
    protected ROCatalogRequestContext catalogRequestContext;

    /**
     * Gets the value of the catalogRequestContext property.
     * 
     * @return
     *     possible object is
     *     {@link ROCatalogRequestContext }
     *     
     */
    public ROCatalogRequestContext getCatalogRequestContext() {
        return catalogRequestContext;
    }

    /**
     * Sets the value of the catalogRequestContext property.
     * 
     * @param value
     *     allowed object is
     *     {@link ROCatalogRequestContext }
     *     
     */
    public void setCatalogRequestContext(ROCatalogRequestContext value) {
        this.catalogRequestContext = value;
    }

}
