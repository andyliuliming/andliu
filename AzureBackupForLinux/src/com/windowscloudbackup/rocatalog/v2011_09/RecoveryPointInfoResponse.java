
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import com.microsoft.schemas._2003._10.serialization.arrays.ArrayOfdateTime;
import com.microsoft.schemas._2003._10.serialization.arrays.ArrayOfstring;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon.ContractVersions;


/**
 * <p>Java class for RecoveryPointInfoResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="RecoveryPointInfoResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ContractVersion" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface}ContractVersions"/>
 *         &lt;element name="DataSourceNames" type="{http://schemas.microsoft.com/2003/10/Serialization/Arrays}ArrayOfstring" minOccurs="0"/>
 *         &lt;element name="NumberOfRecoveryPoints" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="RecoveryPointInTimes" type="{http://schemas.microsoft.com/2003/10/Serialization/Arrays}ArrayOfdateTime" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RecoveryPointInfoResponse", propOrder = {
    "contractVersion",
    "dataSourceNames",
    "numberOfRecoveryPoints",
    "recoveryPointInTimes"
})
@XmlSeeAlso({
    RecoveryPointInfoResponseV201109 .class
})
public class RecoveryPointInfoResponse {

    @XmlElement(name = "ContractVersion", required = true)
    @XmlSchemaType(name = "string")
    protected ContractVersions contractVersion;
    @XmlElementRef(name = "DataSourceNames", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfstring> dataSourceNames;
    @XmlElement(name = "NumberOfRecoveryPoints")
    protected long numberOfRecoveryPoints;
    @XmlElementRef(name = "RecoveryPointInTimes", namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfdateTime> recoveryPointInTimes;

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
     * Gets the value of the dataSourceNames property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfstring }{@code >}
     *     
     */
    public JAXBElement<ArrayOfstring> getDataSourceNames() {
        return dataSourceNames;
    }

    /**
     * Sets the value of the dataSourceNames property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfstring }{@code >}
     *     
     */
    public void setDataSourceNames(JAXBElement<ArrayOfstring> value) {
        this.dataSourceNames = value;
    }

    /**
     * Gets the value of the numberOfRecoveryPoints property.
     * 
     */
    public long getNumberOfRecoveryPoints() {
        return numberOfRecoveryPoints;
    }

    /**
     * Sets the value of the numberOfRecoveryPoints property.
     * 
     */
    public void setNumberOfRecoveryPoints(long value) {
        this.numberOfRecoveryPoints = value;
    }

    /**
     * Gets the value of the recoveryPointInTimes property.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfdateTime }{@code >}
     *     
     */
    public JAXBElement<ArrayOfdateTime> getRecoveryPointInTimes() {
        return recoveryPointInTimes;
    }

    /**
     * Sets the value of the recoveryPointInTimes property.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfdateTime }{@code >}
     *     
     */
    public void setRecoveryPointInTimes(JAXBElement<ArrayOfdateTime> value) {
        this.recoveryPointInTimes = value;
    }

}
