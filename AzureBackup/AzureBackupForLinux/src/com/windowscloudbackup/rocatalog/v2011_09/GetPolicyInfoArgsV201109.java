
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for GetPolicyInfoArgs_V2011_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GetPolicyInfoArgs_V2011_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}GetPolicyInfoArgs">
 *       &lt;sequence>
 *         &lt;element name="ChildPolicies" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfChildPolicyEx_V2011_09"/>
 *         &lt;element name="DataSources" type="{http://windowscloudbackup.com/ROCatalog/V2011_09}ArrayOfDataSourceInfoEx_V2011_09"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GetPolicyInfoArgs_V2011_09", propOrder = {
    "childPolicies",
    "dataSources"
})
public class GetPolicyInfoArgsV201109
    extends GetPolicyInfoArgs
{

    @XmlElement(name = "ChildPolicies", required = true, nillable = true)
    protected ArrayOfChildPolicyExV201109 childPolicies;
    @XmlElement(name = "DataSources", required = true, nillable = true)
    protected ArrayOfDataSourceInfoExV201109 dataSources;

    /**
     * Gets the value of the childPolicies property.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfChildPolicyExV201109 }
     *     
     */
    public ArrayOfChildPolicyExV201109 getChildPolicies() {
        return childPolicies;
    }

    /**
     * Sets the value of the childPolicies property.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfChildPolicyExV201109 }
     *     
     */
    public void setChildPolicies(ArrayOfChildPolicyExV201109 value) {
        this.childPolicies = value;
    }

    /**
     * Gets the value of the dataSources property.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfDataSourceInfoExV201109 }
     *     
     */
    public ArrayOfDataSourceInfoExV201109 getDataSources() {
        return dataSources;
    }

    /**
     * Sets the value of the dataSources property.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfDataSourceInfoExV201109 }
     *     
     */
    public void setDataSources(ArrayOfDataSourceInfoExV201109 value) {
        this.dataSources = value;
    }

}
