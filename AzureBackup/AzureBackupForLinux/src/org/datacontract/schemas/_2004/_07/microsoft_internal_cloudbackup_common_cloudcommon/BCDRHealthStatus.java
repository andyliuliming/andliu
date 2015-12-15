
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for BCDRHealthStatus.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="BCDRHealthStatus">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Healthy"/>
 *     &lt;enumeration value="BCDRVerificationNeeded"/>
 *     &lt;enumeration value="BCDRVerified"/>
 *     &lt;enumeration value="NotDefined"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "BCDRHealthStatus", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface")
@XmlEnum
public enum BCDRHealthStatus {

    @XmlEnumValue("Healthy")
    HEALTHY("Healthy"),
    @XmlEnumValue("BCDRVerificationNeeded")
    BCDR_VERIFICATION_NEEDED("BCDRVerificationNeeded"),
    @XmlEnumValue("BCDRVerified")
    BCDR_VERIFIED("BCDRVerified"),
    @XmlEnumValue("NotDefined")
    NOT_DEFINED("NotDefined");
    private final String value;

    BCDRHealthStatus(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static BCDRHealthStatus fromValue(String v) {
        for (BCDRHealthStatus c: BCDRHealthStatus.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
