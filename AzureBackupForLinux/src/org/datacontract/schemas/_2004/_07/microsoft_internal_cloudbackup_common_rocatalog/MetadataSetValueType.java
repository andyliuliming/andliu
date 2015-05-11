
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for MetadataSetValueType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="MetadataSetValueType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Integer"/>
 *     &lt;enumeration value="Integer64"/>
 *     &lt;enumeration value="String"/>
 *     &lt;enumeration value="Binary"/>
 *     &lt;enumeration value="Guid"/>
 *     &lt;enumeration value="DateTime"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "MetadataSetValueType", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface")
@XmlEnum
public enum MetadataSetValueType {

    @XmlEnumValue("Integer")
    INTEGER("Integer"),
    @XmlEnumValue("Integer64")
    INTEGER_64("Integer64"),
    @XmlEnumValue("String")
    STRING("String"),
    @XmlEnumValue("Binary")
    BINARY("Binary"),
    @XmlEnumValue("Guid")
    GUID("Guid"),
    @XmlEnumValue("DateTime")
    DATE_TIME("DateTime");
    private final String value;

    MetadataSetValueType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static MetadataSetValueType fromValue(String v) {
        for (MetadataSetValueType c: MetadataSetValueType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
