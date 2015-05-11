
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for RecoveryPointGenerationType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="RecoveryPointGenerationType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="GrandFather"/>
 *     &lt;enumeration value="Father"/>
 *     &lt;enumeration value="Son"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "RecoveryPointGenerationType", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface")
@XmlEnum
public enum RecoveryPointGenerationType {

    @XmlEnumValue("GrandFather")
    GRAND_FATHER("GrandFather"),
    @XmlEnumValue("Father")
    FATHER("Father"),
    @XmlEnumValue("Son")
    SON("Son");
    private final String value;

    RecoveryPointGenerationType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static RecoveryPointGenerationType fromValue(String v) {
        for (RecoveryPointGenerationType c: RecoveryPointGenerationType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
