
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_async;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlEnumValue;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for AsyncWorkState.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * <p>
 * <pre>
 * &lt;simpleType name="AsyncWorkState">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *     &lt;enumeration value="InProgress"/>
 *     &lt;enumeration value="Failed"/>
 *     &lt;enumeration value="Cancelled"/>
 *     &lt;enumeration value="Succeeded"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "AsyncWorkState", namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.Async.Interface")
@XmlEnum
public enum AsyncWorkState {

    @XmlEnumValue("InProgress")
    IN_PROGRESS("InProgress"),
    @XmlEnumValue("Failed")
    FAILED("Failed"),
    @XmlEnumValue("Cancelled")
    CANCELLED("Cancelled"),
    @XmlEnumValue("Succeeded")
    SUCCEEDED("Succeeded");
    private final String value;

    AsyncWorkState(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static AsyncWorkState fromValue(String v) {
        for (AsyncWorkState c: AsyncWorkState.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
