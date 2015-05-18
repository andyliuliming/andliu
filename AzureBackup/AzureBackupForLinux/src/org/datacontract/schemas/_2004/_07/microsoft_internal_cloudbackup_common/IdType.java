
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for IdType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="IdType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="Integer"/>
 *     &lt;enumeration value="Guid"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "IdType", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CatalogCommon")
@XmlEnum
public enum IdType {

    @XmlEnumValue("Integer")
    INTEGER("Integer"),
    @XmlEnumValue("Guid")
    GUID("Guid");
    private final String value;

    IdType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static IdType fromValue(String v) {
        for (IdType c: IdType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
