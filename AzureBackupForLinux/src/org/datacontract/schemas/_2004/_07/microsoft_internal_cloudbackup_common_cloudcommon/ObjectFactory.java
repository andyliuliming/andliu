
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _ContractVersions_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface", "ContractVersions");
    private final static QName _DRHealthStatus_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface", "DRHealthStatus");
    private final static QName _BCDRHealthStatus_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface", "BCDRHealthStatus");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_cloudcommon
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ContractVersions }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface", name = "ContractVersions")
    public JAXBElement<ContractVersions> createContractVersions(ContractVersions value) {
        return new JAXBElement<ContractVersions>(_ContractVersions_QNAME, ContractVersions.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DRHealthStatus }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface", name = "DRHealthStatus")
    public JAXBElement<DRHealthStatus> createDRHealthStatus(DRHealthStatus value) {
        return new JAXBElement<DRHealthStatus>(_DRHealthStatus_QNAME, DRHealthStatus.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link BCDRHealthStatus }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CloudCommon.Interface", name = "BCDRHealthStatus")
    public JAXBElement<BCDRHealthStatus> createBCDRHealthStatus(BCDRHealthStatus value) {
        return new JAXBElement<BCDRHealthStatus>(_BCDRHealthStatus_QNAME, BCDRHealthStatus.class, null, value);
    }

}
