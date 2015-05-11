
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for MetadataLocation.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="MetadataLocation">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="InPlace"/>
 *     &lt;enumeration value="Blob"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "MetadataLocation", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface")
@XmlEnum
public enum MetadataLocation {

    @XmlEnumValue("InPlace")
    IN_PLACE("InPlace"),
    @XmlEnumValue("Blob")
    BLOB("Blob");
    private final String value;

    MetadataLocation(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static MetadataLocation fromValue(String v) {
        for (MetadataLocation c: MetadataLocation.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
