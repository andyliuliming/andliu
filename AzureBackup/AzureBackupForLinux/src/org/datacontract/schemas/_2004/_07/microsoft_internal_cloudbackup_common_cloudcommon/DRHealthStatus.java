
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for DRHealthStatus.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="DRHealthStatus">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Healthy"/>
 *     &lt;enumeration value="Unhealthy"/>
 *     &lt;enumeration value="MarkedForDRRecovery"/>
 *     &lt;enumeration value="DRRecovered"/>
 *     &lt;enumeration value="DRRecoveryFlagCleared"/>
 *     &lt;enumeration value="VerifiedGood"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "DRHealthStatus", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface")
@XmlEnum
public enum DRHealthStatus {

    @XmlEnumValue("Healthy")
    HEALTHY("Healthy"),
    @XmlEnumValue("Unhealthy")
    UNHEALTHY("Unhealthy"),
    @XmlEnumValue("MarkedForDRRecovery")
    MARKED_FOR_DR_RECOVERY("MarkedForDRRecovery"),
    @XmlEnumValue("DRRecovered")
    DR_RECOVERED("DRRecovered"),
    @XmlEnumValue("DRRecoveryFlagCleared")
    DR_RECOVERY_FLAG_CLEARED("DRRecoveryFlagCleared"),
    @XmlEnumValue("VerifiedGood")
    VERIFIED_GOOD("VerifiedGood");
    private final String value;

    DRHealthStatus(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static DRHealthStatus fromValue(String v) {
        for (DRHealthStatus c: DRHealthStatus.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
