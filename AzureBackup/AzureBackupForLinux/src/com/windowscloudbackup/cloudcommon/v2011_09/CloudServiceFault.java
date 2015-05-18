
package com.windowscloudbackup.cloudcommon.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for CloudServiceFault complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="CloudServiceFault">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="DetailedErrorCode" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="DetailedErrorSource" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="ErrorCode" type="{Microsoft.Internal.EnterpriseStorage.Dls.AccessManager.Utils}ErrorCode"/>
 *         &lt;element name="Message" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CloudServiceFault", propOrder = {
    "detailedErrorCode",
    "detailedErrorSource",
    "errorCode",
    "message"
})
@XmlSeeAlso({
    CloudServiceInternalFault.class
})
public class CloudServiceFault {

    @XmlElement(name = "DetailedErrorCode")
    protected int detailedErrorCode;
    @XmlElement(name = "DetailedErrorSource", required = true, nillable = true)
    protected String detailedErrorSource;
    @XmlElement(name = "ErrorCode", required = true)
    protected String errorCode;
    @XmlElement(name = "Message", required = true, nillable = true)
    protected String message;

    /**
     * Gets the value of the detailedErrorCode property.
     * 
     */
    public int getDetailedErrorCode() {
        return detailedErrorCode;
    }

    /**
     * Sets the value of the detailedErrorCode property.
     * 
     */
    public void setDetailedErrorCode(int value) {
        this.detailedErrorCode = value;
    }

    /**
     * Gets the value of the detailedErrorSource property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDetailedErrorSource() {
        return detailedErrorSource;
    }

    /**
     * Sets the value of the detailedErrorSource property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDetailedErrorSource(String value) {
        this.detailedErrorSource = value;
    }

    /**
     * Gets the value of the errorCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getErrorCode() {
        return errorCode;
    }

    /**
     * Sets the value of the errorCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setErrorCode(String value) {
        this.errorCode = value;
    }

    /**
     * Gets the value of the message property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMessage() {
        return message;
    }

    /**
     * Sets the value of the message property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMessage(String value) {
        this.message = value;
    }

}
