
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for PolicyType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="PolicyType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Root"/>
 *     &lt;enumeration value="SchedulePolicy"/>
 *     &lt;enumeration value="RetentionPolicy"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "PolicyType", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface")
@XmlEnum
public enum PolicyType {

    @XmlEnumValue("Root")
    ROOT("Root"),
    @XmlEnumValue("SchedulePolicy")
    SCHEDULE_POLICY("SchedulePolicy"),
    @XmlEnumValue("RetentionPolicy")
    RETENTION_POLICY("RetentionPolicy");
    private final String value;

    PolicyType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static PolicyType fromValue(String v) {
        for (PolicyType c: PolicyType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
