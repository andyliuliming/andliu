
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ROCatalogTenantType.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="ROCatalogTenantType">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="InvalidType"/>
 *     &lt;enumeration value="Container"/>
 *     &lt;enumeration value="Datasource"/>
 *     &lt;enumeration value="RecoveryPoint"/>
 *     &lt;enumeration value="Replica"/>
 *     &lt;enumeration value="ReplicaSnapshot"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "ROCatalogTenantType", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CatalogCommon")
@XmlEnum
public enum ROCatalogTenantType {

    @XmlEnumValue("InvalidType")
    INVALID_TYPE("InvalidType"),
    @XmlEnumValue("Container")
    CONTAINER("Container"),
    @XmlEnumValue("Datasource")
    DATASOURCE("Datasource"),
    @XmlEnumValue("RecoveryPoint")
    RECOVERY_POINT("RecoveryPoint"),
    @XmlEnumValue("Replica")
    REPLICA("Replica"),
    @XmlEnumValue("ReplicaSnapshot")
    REPLICA_SNAPSHOT("ReplicaSnapshot");
    private final String value;

    ROCatalogTenantType(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static ROCatalogTenantType fromValue(String v) {
        for (ROCatalogTenantType c: ROCatalogTenantType.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
