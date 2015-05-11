
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;


/**
 * <p>Java class for AddDsVolumeReplicaMap_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AddDsVolumeReplicaMap_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}AddDsVolumeReplicaMap">
 *       &lt;sequence>
 *         &lt;element name="DataSourceId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *         &lt;element name="ReplicaId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *         &lt;element name="VolumeInfo" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}VolumeInfo_V2011_09" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AddDsVolumeReplicaMap_V2011_09", propOrder = {
    "dataSourceId",
    "replicaId",
    "volumeInfo"
})
public class AddDsVolumeReplicaMapV201109
    extends AddDsVolumeReplicaMap
{

    @XmlElement(name = "DataSourceId", required = true, nillable = true)
    protected EntityIdV201109 dataSourceId;
    @XmlElement(name = "ReplicaId", required = true, nillable = true)
    protected EntityIdV201109 replicaId;
    @XmlElementRef(name = "VolumeInfo", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<VolumeInfoV201109> volumeInfo;

    /**
     * Gets the value of the dataSourceId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityIdV201109 }
     *     
     */
    public EntityIdV201109 getDataSourceId() {
        return dataSourceId;
    }

    /**
     * Sets the value of the dataSourceId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityIdV201109 }
     *     
     */
    public void setDataSourceId(EntityIdV201109 value) {
        this.dataSourceId = value;
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
     * Gets the value of the volumeInfo property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link VolumeInfoV201109 }{@code >}
     *     
     */
    public JAXBElement<VolumeInfoV201109> getVolumeInfo() {
        return volumeInfo;
    }

    /**
     * Sets the value of the volumeInfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link VolumeInfoV201109 }{@code >}
     *     
     */
    public void setVolumeInfo(JAXBElement<VolumeInfoV201109> value) {
        this.volumeInfo = value;
    }

}
