
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for RecoveryPointStates.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="RecoveryPointStates">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Valid"/>
 *     &lt;enumeration value="Deleted"/>
 *     &lt;enumeration value="Retain"/>
 *     &lt;enumeration value="PhaseOut"/>
 *     &lt;enumeration value="Blocked"/>
 *     &lt;enumeration value="ProvisioningInProgress"/>
 *     &lt;enumeration value="ProvisioningDone"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "RecoveryPointStates", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface")
@XmlEnum
public enum RecoveryPointStates {

    @XmlEnumValue("Valid")
    VALID("Valid"),
    @XmlEnumValue("Deleted")
    DELETED("Deleted"),
    @XmlEnumValue("Retain")
    RETAIN("Retain"),
    @XmlEnumValue("PhaseOut")
    PHASE_OUT("PhaseOut"),
    @XmlEnumValue("Blocked")
    BLOCKED("Blocked"),
    @XmlEnumValue("ProvisioningInProgress")
    PROVISIONING_IN_PROGRESS("ProvisioningInProgress"),
    @XmlEnumValue("ProvisioningDone")
    PROVISIONING_DONE("ProvisioningDone");
    private final String value;

    RecoveryPointStates(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static RecoveryPointStates fromValue(String v) {
        for (RecoveryPointStates c: RecoveryPointStates.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
