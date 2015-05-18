
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.BCDRHealthStatus;


/**
 * <p>Java class for ReplicaInfoEx_V2013_04 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ReplicaInfoEx_V2013_04">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}ReplicaInfoEx_V2011_09">
 *       &lt;sequence>
 *         &lt;element name="BcdrHealthStatus" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}BCDRHealthStatus"/>
 *         &lt;element name="DsId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ReplicaInfoEx_V2013_04", propOrder = {
    "bcdrHealthStatus",
    "dsId"
})
@XmlSeeAlso({
    ReplicaInfoExV201404 .class
})
public class ReplicaInfoExV201304
    extends ReplicaInfoExV201109
{

    @XmlElement(name = "BcdrHealthStatus", required = true)
    @XmlSchemaType(name = "string")
    protected BCDRHealthStatus bcdrHealthStatus;
    @XmlElement(name = "DsId", required = true, nillable = true)
    protected EntityIdV201109 dsId;

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

    /**
     * Gets the value of the dsId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityIdV201109 }
     *     
     */
    public EntityIdV201109 getDsId() {
        return dsId;
    }

    /**
     * Sets the value of the dsId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityIdV201109 }
     *     
     */
    public void setDsId(EntityIdV201109 value) {
        this.dsId = value;
    }

}
