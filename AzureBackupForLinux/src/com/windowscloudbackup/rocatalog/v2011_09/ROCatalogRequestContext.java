
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityId;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common.ROCatalogTenantType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.ContractVersions;


/**
 * <p>Java class for ROCatalogRequestContext complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ROCatalogRequestContext">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ContractVersion" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}ContractVersions"/>
 *         &lt;element name="TenantId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId"/>
 *         &lt;element name="TenantType" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CatalogCommon}ROCatalogTenantType"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ROCatalogRequestContext", propOrder = {
    "contractVersion",
    "tenantId",
    "tenantType"
})
@XmlSeeAlso({
    ROCatalogRequestContextV201212 .class
})
public class ROCatalogRequestContext {

    @XmlElement(name = "ContractVersion", required = true)
    @XmlSchemaType(name = "string")
    protected ContractVersions contractVersion;
    @XmlElement(name = "TenantId", required = true, nillable = true)
    protected EntityId tenantId;
    @XmlElement(name = "TenantType", required = true)
    @XmlSchemaType(name = "string")
    protected ROCatalogTenantType tenantType;

    /**
     * Gets the value of the contractVersion property.
     * 
     * @return
     *     possible object is
     *     {@link ContractVersions }
     *     
     */
    public ContractVersions getContractVersion() {
        return contractVersion;
    }

    /**
     * Sets the value of the contractVersion property.
     * 
     * @param value
     *     allowed object is
     *     {@link ContractVersions }
     *     
     */
    public void setContractVersion(ContractVersions value) {
        this.contractVersion = value;
    }

    /**
     * Gets the value of the tenantId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityId }
     *     
     */
    public EntityId getTenantId() {
        return tenantId;
    }

    /**
     * Sets the value of the tenantId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityId }
     *     
     */
    public void setTenantId(EntityId value) {
        this.tenantId = value;
    }

    /**
     * Gets the value of the tenantType property.
     * 
     * @return
     *     possible object is
     *     {@link ROCatalogTenantType }
     *     
     */
    public ROCatalogTenantType getTenantType() {
        return tenantType;
    }

    /**
     * Sets the value of the tenantType property.
     * 
     * @param value
     *     allowed object is
     *     {@link ROCatalogTenantType }
     *     
     */
    public void setTenantType(ROCatalogTenantType value) {
        this.tenantType = value;
    }

}
