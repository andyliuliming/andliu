
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityId;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog.VolumeStates;


/**
 * <p>Java class for VolumeInfoEx complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="VolumeInfoEx">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}VolumeInfo">
 *       &lt;sequence>
 *         &lt;element name="RowVersion" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="State" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface}VolumeStates"/>
 *         &lt;element name="VolumeId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "VolumeInfoEx", propOrder = {
    "rowVersion",
    "state",
    "volumeId"
})
@XmlSeeAlso({
    VolumeInfoExV201109 .class
})
public class VolumeInfoEx
    extends VolumeInfo
{

    @XmlElement(name = "RowVersion")
    protected long rowVersion;
    @XmlElement(name = "State", required = true)
    @XmlSchemaType(name = "string")
    protected VolumeStates state;
    @XmlElement(name = "VolumeId", required = true, nillable = true)
    protected EntityId volumeId;

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

    /**
     * Gets the value of the state property.
     * 
     * @return
     *     possible object is
     *     {@link VolumeStates }
     *     
     */
    public VolumeStates getState() {
        return state;
    }

    /**
     * Sets the value of the state property.
     * 
     * @param value
     *     allowed object is
     *     {@link VolumeStates }
     *     
     */
    public void setState(VolumeStates value) {
        this.state = value;
    }

    /**
     * Gets the value of the volumeId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityId }
     *     
     */
    public EntityId getVolumeId() {
        return volumeId;
    }

    /**
     * Sets the value of the volumeId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityId }
     *     
     */
    public void setVolumeId(EntityId value) {
        this.volumeId = value;
    }

}
