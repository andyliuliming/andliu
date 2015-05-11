
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common.OperationType;


/**
 * <p>Java class for UpdateDataSourceInfo complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="UpdateDataSourceInfo">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}DataSourceInfoEx">
 *       &lt;sequence>
 *         &lt;element name="OperationType" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CatalogCommon}OperationType"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "UpdateDataSourceInfo", propOrder = {
    "operationType"
})
@XmlSeeAlso({
    UpdateDataSourceInfoV201109 .class
})
public class UpdateDataSourceInfo
    extends DataSourceInfoEx
{

    @XmlElement(name = "OperationType", required = true)
    @XmlSchemaType(name = "string")
    protected OperationType operationType;

    /**
     * Gets the value of the operationType property.
     * 
     * @return
     *     possible object is
     *     {@link OperationType }
     *     
     */
    public OperationType getOperationType() {
        return operationType;
    }

    /**
     * Sets the value of the operationType property.
     * 
     * @param value
     *     allowed object is
     *     {@link OperationType }
     *     
     */
    public void setOperationType(OperationType value) {
        this.operationType = value;
    }

}
