
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for RecoveryPointInfoEx_V2014_09 complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="RecoveryPointInfoEx_V2014_09">
 *   &lt;complexContent>
 *     &lt;extension base="{http://windowscloudbackup.com/ROCatalog/V2011_09}RecoveryPointInfoEx_V2011_09">
 *       &lt;sequence>
 *         &lt;element name="OsVersion" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RecoveryPointInfoEx_V2014_09", propOrder = {
    "osVersion"
})
public class RecoveryPointInfoExV201409
    extends RecoveryPointInfoExV201109
{

    @XmlElement(name = "OsVersion")
    protected long osVersion;

    /**
     * Gets the value of the osVersion property.
     * 
     */
    public long getOsVersion() {
        return osVersion;
    }

    /**
     * Sets the value of the osVersion property.
     * 
     */
    public void setOsVersion(long value) {
        this.osVersion = value;
    }

}
