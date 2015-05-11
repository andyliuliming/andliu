
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import com.windowscloudbackup.cloudcommon.v2011_09.ArrayOfEntityIdV201109;


/**
 * <p>Java class for DeleteRecoveryPointsInfoArgs_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="DeleteRecoveryPointsInfoArgs_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}DeleteRecoveryPointsInfoArgs">
 *       &lt;sequence>
 *         &lt;element name="DatasourceId" type="{http://windowscloudbackup.com/CloudCommon/V2011_09}ArrayOfEntityId_V2011_09"/>
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
@XmlType(name = "DeleteRecoveryPointsInfoArgs_V2011_09", propOrder = {
    "datasourceId",
    "requestContext"
})
public class DeleteRecoveryPointsInfoArgsV201109
    extends DeleteRecoveryPointsInfoArgs
{

    @XmlElement(name = "DatasourceId", required = true, nillable = true)
    protected ArrayOfEntityIdV201109 datasourceId;
    @XmlElement(name = "RequestContext", required = true, nillable = true)
    protected RequestContextV201109 requestContext;

    /**
     * Gets the value of the datasourceId property.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfEntityIdV201109 }
     *     
     */
    public ArrayOfEntityIdV201109 getDatasourceId() {
        return datasourceId;
    }

    /**
     * Sets the value of the datasourceId property.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfEntityIdV201109 }
     *     
     */
    public void setDatasourceId(ArrayOfEntityIdV201109 value) {
        this.datasourceId = value;
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
