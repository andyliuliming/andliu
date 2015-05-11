
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;


/**
 * <p>Java class for AddRPVolumeReplicaMap_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AddRPVolumeReplicaMap_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}AddRPVolumeReplicaMap">
 *       &lt;sequence>
 *         &lt;element name="RecoveryPointId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *         &lt;element name="ReplicaId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *         &lt;element name="ReplicaSnapshotId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *         &lt;element name="VolumeInfo" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}VolumeInfo_V2011_09"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AddRPVolumeReplicaMap_V2011_09", propOrder = {
    "recoveryPointId",
    "replicaId",
    "replicaSnapshotId",
    "volumeInfo"
})
@XmlSeeAlso({
    AddRPVolumeReplicaMapV201409 .class
})
public class AddRPVolumeReplicaMapV201109
    extends AddRPVolumeReplicaMap
{

    @XmlElement(name = "RecoveryPointId", required = true, nillable = true)
    protected EntityIdV201109 recoveryPointId;
    @XmlElement(name = "ReplicaId", required = true, nillable = true)
    protected EntityIdV201109 replicaId;
    @XmlElement(name = "ReplicaSnapshotId", required = true, nillable = true)
    protected EntityIdV201109 replicaSnapshotId;
    @XmlElement(name = "VolumeInfo", required = true, nillable = true)
    protected VolumeInfoV201109 volumeInfo;

    /**
     * Gets the value of the recoveryPointId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityIdV201109 }
     *     
     */
    public EntityIdV201109 getRecoveryPointId() {
        return recoveryPointId;
    }

    /**
     * Sets the value of the recoveryPointId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityIdV201109 }
     *     
     */
    public void setRecoveryPointId(EntityIdV201109 value) {
        this.recoveryPointId = value;
    }

    /**
     * Gets the value of the replicaId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityIdV201109 }
     *     
     */
    public EntityIdV201109 getReplicaId() {
        return replicaId;
    }

    /**
     * Sets the value of the replicaId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityIdV201109 }
     *     
     */
    public void setReplicaId(EntityIdV201109 value) {
        this.replicaId = value;
    }

    /**
     * Gets the value of the replicaSnapshotId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityIdV201109 }
     *     
     */
    public EntityIdV201109 getReplicaSnapshotId() {
        return replicaSnapshotId;
    }

    /**
     * Sets the value of the replicaSnapshotId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityIdV201109 }
     *     
     */
    public void setReplicaSnapshotId(EntityIdV201109 value) {
        this.replicaSnapshotId = value;
    }

    /**
     * Gets the value of the volumeInfo property.
     * 
     * @return
     *     possible object is
     *     {@link VolumeInfoV201109 }
     *     
     */
    public VolumeInfoV201109 getVolumeInfo() {
        return volumeInfo;
    }

    /**
     * Sets the value of the volumeInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link VolumeInfoV201109 }
     *     
     */
    public void setVolumeInfo(VolumeInfoV201109 value) {
        this.volumeInfo = value;
    }

}
