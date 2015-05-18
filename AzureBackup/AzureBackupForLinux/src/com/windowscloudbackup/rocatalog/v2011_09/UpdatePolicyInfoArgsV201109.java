
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;


/**
 * <p>Java class for UpdatePolicyInfoArgs_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="UpdatePolicyInfoArgs_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}UpdatePolicyInfoArgs">
 *       &lt;sequence>
 *         &lt;element name="DataSources" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfUpdateDataSourceInfo_V2011_09" minOccurs="0"/>
 *         &lt;element name="PolicyId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *         &lt;element name="RetentionPolicy" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}UpdateChildPolicy_V2011_09" minOccurs="0"/>
 *         &lt;element name="SchedulePolicy" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}UpdateChildPolicy_V2011_09" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "UpdatePolicyInfoArgs_V2011_09", propOrder = {
    "dataSources",
    "policyId",
    "retentionPolicy",
    "schedulePolicy"
})
public class UpdatePolicyInfoArgsV201109
    extends UpdatePolicyInfoArgs
{

    @XmlElementRef(name = "DataSources", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfUpdateDataSourceInfoV201109> dataSources;
    @XmlElement(name = "PolicyId", required = true, nillable = true)
    protected EntityIdV201109 policyId;
    @XmlElementRef(name = "RetentionPolicy", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<UpdateChildPolicyV201109> retentionPolicy;
    @XmlElementRef(name = "SchedulePolicy", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<UpdateChildPolicyV201109> schedulePolicy;

    /**
     * Gets the value of the dataSources property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfUpdateDataSourceInfoV201109 }{@code >}
     *     
     */
    public JAXBElement<ArrayOfUpdateDataSourceInfoV201109> getDataSources() {
        return dataSources;
    }

    /**
     * Sets the value of the dataSources property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfUpdateDataSourceInfoV201109 }{@code >}
     *     
     */
    public void setDataSources(JAXBElement<ArrayOfUpdateDataSourceInfoV201109> value) {
        this.dataSources = value;
    }

    /**
     * Gets the value of the policyId property.
     * 
     * @return
     *     possible object is
     *     {@link EntityIdV201109 }
     *     
     */
    public EntityIdV201109 getPolicyId() {
        return policyId;
    }

    /**
     * Sets the value of the policyId property.
     * 
     * @param value
     *     allowed object is
     *     {@link EntityIdV201109 }
     *     
     */
    public void setPolicyId(EntityIdV201109 value) {
        this.policyId = value;
    }

    /**
     * Gets the value of the retentionPolicy property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link UpdateChildPolicyV201109 }{@code >}
     *     
     */
    public JAXBElement<UpdateChildPolicyV201109> getRetentionPolicy() {
        return retentionPolicy;
    }

    /**
     * Sets the value of the retentionPolicy property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link UpdateChildPolicyV201109 }{@code >}
     *     
     */
    public void setRetentionPolicy(JAXBElement<UpdateChildPolicyV201109> value) {
        this.retentionPolicy = value;
    }

    /**
     * Gets the value of the schedulePolicy property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link UpdateChildPolicyV201109 }{@code >}
     *     
     */
    public JAXBElement<UpdateChildPolicyV201109> getSchedulePolicy() {
        return schedulePolicy;
    }

    /**
     * Sets the value of the schedulePolicy property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link UpdateChildPolicyV201109 }{@code >}
     *     
     */
    public void setSchedulePolicy(JAXBElement<UpdateChildPolicyV201109> value) {
        this.schedulePolicy = value;
    }

}
