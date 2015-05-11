
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for PolicyStates.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="PolicyStates">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Valid"/>
 *     &lt;enumeration value="Deleted"/>
 *     &lt;enumeration value="Paused"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "PolicyStates", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface")
@XmlEnum
public enum PolicyStates {

    @XmlEnumValue("Valid")
    VALID("Valid"),
    @XmlEnumValue("Deleted")
    DELETED("Deleted"),
    @XmlEnumValue("Paused")
    PAUSED("Paused");
    private final String value;

    PolicyStates(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static PolicyStates fromValue(String v) {
        for (PolicyStates c: PolicyStates.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
