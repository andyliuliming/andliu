
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.ContractVersions;


/**
 * <p>Java class for VolumeInfo complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="VolumeInfo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ContractVersion" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}ContractVersions"/>
 *         &lt;element name="MntMgrUniqueId" type="{http://www.w3.org/2001/XMLSchema}base64Binary"/>
 *         &lt;element name="MountPoints" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="VolumeFlags" type="{http://www.w3.org/2001/XMLSchema}short"/>
 *         &lt;element name="VolumeGuidName" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="VolumeLabel" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "VolumeInfo", propOrder = {
    "contractVersion",
    "mntMgrUniqueId",
    "mountPoints",
    "volumeFlags",
    "volumeGuidName",
    "volumeLabel"
})
@XmlSeeAlso({
    VolumeInfoV201109 .class,
    VolumeInfoEx.class
})
public class VolumeInfo {

    @XmlElement(name = "ContractVersion", required = true)
    @XmlSchemaType(name = "string")
    protected ContractVersions contractVersion;
    @XmlElement(name = "MntMgrUniqueId", required = true, nillable = true)
    protected byte[] mntMgrUniqueId;
    @XmlElement(name = "MountPoints", required = true, nillable = true)
    protected String mountPoints;
    @XmlElement(name = "VolumeFlags")
    protected short volumeFlags;
    @XmlElement(name = "VolumeGuidName", required = true, nillable = true)
    protected String volumeGuidName;
    @XmlElement(name = "VolumeLabel", required = true, nillable = true)
    protected String volumeLabel;

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
     * Gets the value of the mntMgrUniqueId property.
     * 
     * @return
     *     possible object is
     *     byte[]
     */
    public byte[] getMntMgrUniqueId() {
        return mntMgrUniqueId;
    }

    /**
     * Sets the value of the mntMgrUniqueId property.
     * 
     * @param value
     *     allowed object is
     *     byte[]
     */
    public void setMntMgrUniqueId(byte[] value) {
        this.mntMgrUniqueId = value;
    }

    /**
     * Gets the value of the mountPoints property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMountPoints() {
        return mountPoints;
    }

    /**
     * Sets the value of the mountPoints property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMountPoints(String value) {
        this.mountPoints = value;
    }

    /**
     * Gets the value of the volumeFlags property.
     * 
     */
    public short getVolumeFlags() {
        return volumeFlags;
    }

    /**
     * Sets the value of the volumeFlags property.
     * 
     */
    public void setVolumeFlags(short value) {
        this.volumeFlags = value;
    }

    /**
     * Gets the value of the volumeGuidName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVolumeGuidName() {
        return volumeGuidName;
    }

    /**
     * Sets the value of the volumeGuidName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVolumeGuidName(String value) {
        this.volumeGuidName = value;
    }

    /**
     * Gets the value of the volumeLabel property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVolumeLabel() {
        return volumeLabel;
    }

    /**
     * Sets the value of the volumeLabel property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVolumeLabel(String value) {
        this.volumeLabel = value;
    }

}
