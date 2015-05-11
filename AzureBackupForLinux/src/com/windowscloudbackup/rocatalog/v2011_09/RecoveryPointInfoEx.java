
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityId;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog.RecoveryPointStates;


/**
 * <p>Java class for RecoveryPointInfoEx complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="RecoveryPointInfoEx">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}RecoveryPointInfo">
 *       &lt;sequence>
 *         &lt;element name="RecoveryPointId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId"/>
 *         &lt;element name="State" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface}RecoveryPointStates" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RecoveryPointInfoEx", propOrder = {
    "recoveryPointId",
    "state"
})
@XmlSeeAlso({
    RecoveryPointInfoExV201109 .class
})
public class RecoveryPointInfoEx
    extends RecoveryPointInfo
{

    @XmlElement(name = "RecoveryPointId", required = true, nillable = true)
    protected EntityId recoveryPointId;
    @XmlElement(name = "State")
    @XmlSchemaType(name = "string")
    protected RecoveryPointStates state;

    /**
     * Gets the value of the recoveryPointId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityId }
     *     
     */
    public EntityId getRecoveryPointId() {
        return recoveryPointId;
    }

    /**
     * Sets the value of the recoveryPointId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityId }
     *     
     */
    public void setRecoveryPointId(EntityId value) {
        this.recoveryPointId = value;
    }

    /**
     * Gets the value of the state property.
     * 
     * @return
     *     possible object is
     *     {@link RecoveryPointStates }
     *     
     */
    public RecoveryPointStates getState() {
        return state;
    }

    /**
     * Sets the value of the state property.
     * 
     * @param value
     *     allowed object is
     *     {@link RecoveryPointStates }
     *     
     */
    public void setState(RecoveryPointStates value) {
        this.state = value;
    }

}
