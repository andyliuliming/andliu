
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.BCDRHealthStatus;


/**
 * <p>Java class for DataSourceInfoEx_V2013_04 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="DataSourceInfoEx_V2013_04">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}DataSourceInfoEx_V2011_09">
 *       &lt;sequence>
 *         &lt;element name="BcdrHealthStatus" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}BCDRHealthStatus" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "DataSourceInfoEx_V2013_04", propOrder = {
    "bcdrHealthStatus"
})
public class DataSourceInfoExV201304
    extends DataSourceInfoExV201109
{

    @XmlElement(name = "BcdrHealthStatus")
    @XmlSchemaType(name = "string")
    protected BCDRHealthStatus bcdrHealthStatus;

    /**
     * Gets the value of the bcdrHealthStatus property.
     * 
     * @return
     *     possible object is
     *     {@link BCDRHealthStatus }
     *     
     */
    public BCDRHealthStatus getBcdrHealthStatus() {
        return bcdrHealthStatus;
    }

    /**
     * Sets the value of the bcdrHealthStatus property.
     * 
     * @param value
     *     allowed object is
     *     {@link BCDRHealthStatus }
     *     
     */
    public void setBcdrHealthStatus(BCDRHealthStatus value) {
        this.bcdrHealthStatus = value;
    }

}
