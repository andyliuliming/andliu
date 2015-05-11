
package com.windowscloudbackup.cloudcommon.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;
import org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_async.AsyncWorkState;


/**
 * <p>Java class for GenericAsyncStatusResult_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GenericAsyncStatusResult_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/CloudCommon/V2011_09}GenericAsyncStatusResult">
 *       &lt;sequence>
 *         &lt;element name="Fault" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}CloudServiceFault"/>
 *         &lt;element name="LastHearbeatTime" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *         &lt;element name="State" type="{http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.Async.Interface}AsyncWorkState"/>
 *         &lt;element name="WorkReturnsResponse" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GenericAsyncStatusResult_V2011_09", propOrder = {
    "fault",
    "lastHearbeatTime",
    "state",
    "workReturnsResponse"
})
public class GenericAsyncStatusResultV201109
    extends GenericAsyncStatusResult
{

    @XmlElement(name = "Fault", required = true, nillable = true)
    protected CloudServiceFault fault;
    @XmlElement(name = "LastHearbeatTime", required = true)
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar lastHearbeatTime;
    @XmlElement(name = "State", required = true)
    @XmlSchemaType(name = "string")
    protected AsyncWorkState state;
    @XmlElement(name = "WorkReturnsResponse")
    protected boolean workReturnsResponse;

    /**
     * Gets the value of the fault property.
     * 
     * @return
     *     possible object is
     *     {@link CloudServiceFault }
     *     
     */
    public CloudServiceFault getFault() {
        return fault;
    }

    /**
     * Sets the value of the fault property.
     * 
     * @param value
     *     allowed object is
     *     {@link CloudServiceFault }
     *     
     */
    public void setFault(CloudServiceFault value) {
        this.fault = value;
    }

    /**
     * Gets the value of the lastHearbeatTime property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getLastHearbeatTime() {
        return lastHearbeatTime;
    }

    /**
     * Sets the value of the lastHearbeatTime property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setLastHearbeatTime(XMLGregorianCalendar value) {
        this.lastHearbeatTime = value;
    }

    /**
     * Gets the value of the state property.
     * 
     * @return
     *     possible object is
     *     {@link AsyncWorkState }
     *     
     */
    public AsyncWorkState getState() {
        return state;
    }

    /**
     * Sets the value of the state property.
     * 
     * @param value
     *     allowed object is
     *     {@link AsyncWorkState }
     *     
     */
    public void setState(AsyncWorkState value) {
        this.state = value;
    }

    /**
     * Gets the value of the workReturnsResponse property.
     * 
     */
    public boolean isWorkReturnsResponse() {
        return workReturnsResponse;
    }

    /**
     * Sets the value of the workReturnsResponse property.
     * 
     */
    public void setWorkReturnsResponse(boolean value) {
        this.workReturnsResponse = value;
    }

}
