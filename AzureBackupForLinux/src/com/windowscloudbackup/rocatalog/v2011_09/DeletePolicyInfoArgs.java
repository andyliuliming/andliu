
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.ContractVersions;


/**
 * <p>Java class for DeletePolicyInfoArgs complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="DeletePolicyInfoArgs">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ContractVersion" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}ContractVersions"/>
 *         &lt;element name="DeleteBackups" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="RowVersion" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "DeletePolicyInfoArgs", propOrder = {
    "contractVersion",
    "deleteBackups",
    "rowVersion"
})
@XmlSeeAlso({
    DeletePolicyInfoArgsV201109 .class
})
public class DeletePolicyInfoArgs {

    @XmlElement(name = "ContractVersion", required = true)
    @XmlSchemaType(name = "string")
    protected ContractVersions contractVersion;
    @XmlElement(name = "DeleteBackups")
    protected boolean deleteBackups;
    @XmlElement(name = "RowVersion")
    protected long rowVersion;

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
     * Gets the value of the deleteBackups property.
     * 
     */
    public boolean isDeleteBackups() {
        return deleteBackups;
    }

    /**
     * Sets the value of the deleteBackups property.
     * 
     */
    public void setDeleteBackups(boolean value) {
        this.deleteBackups = value;
    }

    /**
     * Gets the value of the rowVersion property.
     * 
     */
    public long getRowVersion() {
        return rowVersion;
    }

    /**
     * Sets the value of the rowVersion property.
     * 
     */
    public void setRowVersion(long value) {
        this.rowVersion = value;
    }

}
