
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog.PolicyStates;


/**
 * <p>Java class for UpdatePolicyInfoArgs complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="UpdatePolicyInfoArgs">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}PolicyInfoBase">
 *       &lt;sequence>
 *         &lt;element name="LastModifiedTime" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="RowVersion" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="State" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface}PolicyStates" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "UpdatePolicyInfoArgs", propOrder = {
    "lastModifiedTime",
    "rowVersion",
    "state"
})
@XmlSeeAlso({
    UpdatePolicyInfoArgsV201109 .class
})
public class UpdatePolicyInfoArgs
    extends PolicyInfoBase
{

    @XmlElement(name = "LastModifiedTime")
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar lastModifiedTime;
    @XmlElement(name = "RowVersion")
    protected long rowVersion;
    @XmlElement(name = "State")
    @XmlSchemaType(name = "string")
    protected PolicyStates state;

    /**
     * Gets the value of the lastModifiedTime property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getLastModifiedTime() {
        return lastModifiedTime;
    }

    /**
     * Sets the value of the lastModifiedTime property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setLastModifiedTime(XMLGregorianCalendar value) {
        this.lastModifiedTime = value;
    }

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
     *     {@link PolicyStates }
     *     
     */
    public PolicyStates getState() {
        return state;
    }

    /**
     * Sets the value of the state property.
     * 
     * @param value
     *     allowed object is
     *     {@link PolicyStates }
     *     
     */
    public void setState(PolicyStates value) {
        this.state = value;
    }

}
