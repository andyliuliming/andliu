
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ContractVersions.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="ContractVersions">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="InvalidVersion"/>
 *     &lt;enumeration value="V2011_09"/>
 *     &lt;enumeration value="V2012_02"/>
 *     &lt;enumeration value="V2012_05"/>
 *     &lt;enumeration value="V2012_12"/>
 *     &lt;enumeration value="V2013_04"/>
 *     &lt;enumeration value="V2013_10"/>
 *     &lt;enumeration value="V2013_11"/>
 *     &lt;enumeration value="V2014_04"/>
 *     &lt;enumeration value="V2014_06"/>
 *     &lt;enumeration value="V2014_07"/>
 *     &lt;enumeration value="V2014_09"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "ContractVersions", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface")
@XmlEnum
public enum ContractVersions {

    @XmlEnumValue("InvalidVersion")
    INVALID_VERSION("InvalidVersion"),
    @XmlEnumValue("V2011_09")
    V_2011_09("V2011_09"),
    @XmlEnumValue("V2012_02")
    V_2012_02("V2012_02"),
    @XmlEnumValue("V2012_05")
    V_2012_05("V2012_05"),
    @XmlEnumValue("V2012_12")
    V_2012_12("V2012_12"),
    @XmlEnumValue("V2013_04")
    V_2013_04("V2013_04"),
    @XmlEnumValue("V2013_10")
    V_2013_10("V2013_10"),
    @XmlEnumValue("V2013_11")
    V_2013_11("V2013_11"),
    @XmlEnumValue("V2014_04")
    V_2014_04("V2014_04"),
    @XmlEnumValue("V2014_06")
    V_2014_06("V2014_06"),
    @XmlEnumValue("V2014_07")
    V_2014_07("V2014_07"),
    @XmlEnumValue("V2014_09")
    V_2014_09("V2014_09");
    private final String value;

    ContractVersions(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static ContractVersions fromValue(String v) {
        for (ContractVersions c: ContractVersions.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
