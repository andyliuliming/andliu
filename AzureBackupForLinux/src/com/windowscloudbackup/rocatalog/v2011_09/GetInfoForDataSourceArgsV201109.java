
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;


/**
 * <p>Java class for GetInfoForDataSourceArgs_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GetInfoForDataSourceArgs_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}GetInfoForMachineArgs">
 *       &lt;sequence>
 *         &lt;element name="DataSourceId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}EntityId_V2011_09"/>
 *         &lt;element name="NumberOfRPs" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="RequestContext" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}RequestContext_V2011_09"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GetInfoForDataSourceArgs_V2011_09", propOrder = {
    "dataSourceId",
    "numberOfRPs",
    "requestContext"
})
public class GetInfoForDataSourceArgsV201109
    extends GetInfoForMachineArgs
{

    @XmlElement(name = "DataSourceId", required = true, nillable = true)
    protected EntityIdV201109 dataSourceId;
    @XmlElement(name = "NumberOfRPs")
    protected int numberOfRPs;
    @XmlElement(name = "RequestContext", required = true, nillable = true)
    protected RequestContextV201109 requestContext;

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
     * Gets the value of the numberOfRPs property.
     * 
     */
    public int getNumberOfRPs() {
        return numberOfRPs;
    }

    /**
     * Sets the value of the numberOfRPs property.
     * 
     */
    public void setNumberOfRPs(int value) {
        this.numberOfRPs = value;
    }

    /**
     * Gets the value of the requestContext property.
     * 
     * @return
     *     possible object is
     *     {@link RequestContextV201109 }
     *     
     */
    public RequestContextV201109 getRequestContext() {
        return requestContext;
    }

    /**
     * Sets the value of the requestContext property.
     * 
     * @param value
     *     allowed object is
     *     {@link RequestContextV201109 }
     *     
     */
    public void setRequestContext(RequestContextV201109 value) {
        this.requestContext = value;
    }

}
