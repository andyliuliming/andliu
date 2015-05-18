
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for AddPolicyArgs_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="AddPolicyArgs_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}AddPolicyArgs">
 *       &lt;sequence>
 *         &lt;element name="DataSources" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfDataSourceInfo_V2011_09"/>
 *         &lt;element name="RetentionPolicy" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ChildPolicy_V2011_09" minOccurs="0"/>
 *         &lt;element name="SchedulePolicy" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ChildPolicy_V2011_09"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AddPolicyArgs_V2011_09", propOrder = {
    "dataSources",
    "retentionPolicy",
    "schedulePolicy"
})
public class AddPolicyArgsV201109
    extends AddPolicyArgs
{

    @XmlElement(name = "DataSources", required = true, nillable = true)
    protected ArrayOfDataSourceInfoV201109 dataSources;
    @XmlElementRef(name = "RetentionPolicy", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<ChildPolicyV201109> retentionPolicy;
    @XmlElement(name = "SchedulePolicy", required = true, nillable = true)
    protected ChildPolicyV201109 schedulePolicy;

    /**
     * Gets the value of the dataSources property.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfDataSourceInfoV201109 }
     *     
     */
    public ArrayOfDataSourceInfoV201109 getDataSources() {
        return dataSources;
    }

    /**
     * Sets the value of the dataSources property.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfDataSourceInfoV201109 }
     *     
     */
    public void setDataSources(ArrayOfDataSourceInfoV201109 value) {
        this.dataSources = value;
    }

    /**
     * Gets the value of the retentionPolicy property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ChildPolicyV201109 }{@code >}
     *     
     */
    public JAXBElement<ChildPolicyV201109> getRetentionPolicy() {
        return retentionPolicy;
    }

    /**
     * Sets the value of the retentionPolicy property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ChildPolicyV201109 }{@code >}
     *     
     */
    public void setRetentionPolicy(JAXBElement<ChildPolicyV201109> value) {
        this.retentionPolicy = value;
    }

    /**
     * Gets the value of the schedulePolicy property.
     * 
     * @return
     *     possible object is
     *     {@link ChildPolicyV201109 }
     *     
     */
    public ChildPolicyV201109 getSchedulePolicy() {
        return schedulePolicy;
    }

    /**
     * Sets the value of the schedulePolicy property.
     * 
     * @param value
     *     allowed object is
     *     {@link ChildPolicyV201109 }
     *     
     */
    public void setSchedulePolicy(ChildPolicyV201109 value) {
        this.schedulePolicy = value;
    }

}
