
package com.windowscloudbackup.cloudcommon.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for GenericAsyncStatusArgs_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GenericAsyncStatusArgs_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/CloudCommon/V2011_09}GenericAsyncStatusArgs">
 *       &lt;sequence>
 *         &lt;element name="ClientStatusPollTime" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *         &lt;element name="Id" type="{http://schemas.microsoft.com/2003/10/Serialization/}guid"/>
 *         &lt;element name="LastHearbeatTime" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *         &lt;element name="LastTimeClientReceivedNewHeartbeat" type="{http://www.w3.org/2001/XMLSchema}dateTime"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GenericAsyncStatusArgs_V2011_09", propOrder = {
    "clientStatusPollTime",
    "id",
    "lastHearbeatTime",
    "lastTimeClientReceivedNewHeartbeat"
})
public class GenericAsyncStatusArgsV201109
    extends GenericAsyncStatusArgs
{

    @XmlElement(name = "ClientStatusPollTime", required = true)
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar clientStatusPollTime;
    @XmlElement(name = "Id", required = true)
    protected String id;
    @XmlElement(name = "LastHearbeatTime", required = true)
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar lastHearbeatTime;
    @XmlElement(name = "LastTimeClientReceivedNewHeartbeat", required = true)
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar lastTimeClientReceivedNewHeartbeat;

    /**
     * Gets the value of the clientStatusPollTime property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getClientStatusPollTime() {
        return clientStatusPollTime;
    }

    /**
     * Sets the value of the clientStatusPollTime property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setClientStatusPollTime(XMLGregorianCalendar value) {
        this.clientStatusPollTime = value;
    }

    /**
     * Gets the value of the id property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getId() {
        return id;
    }

    /**
     * Sets the value of the id property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setId(String value) {
        this.id = value;
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
     * Gets the value of the lastTimeClientReceivedNewHeartbeat property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getLastTimeClientReceivedNewHeartbeat() {
        return lastTimeClientReceivedNewHeartbeat;
    }

    /**
     * Sets the value of the lastTimeClientReceivedNewHeartbeat property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setLastTimeClientReceivedNewHeartbeat(XMLGregorianCalendar value) {
        this.lastTimeClientReceivedNewHeartbeat = value;
    }

}
