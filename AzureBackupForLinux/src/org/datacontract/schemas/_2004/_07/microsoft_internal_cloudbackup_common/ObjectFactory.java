
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common package. 
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

    private final static QName _IdType_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CatalogCommon", "IdType");
    private final static QName _ROCatalogTenantType_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CatalogCommon", "ROCatalogTenantType");
    private final static QName _OperationType_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CatalogCommon", "OperationType");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link IdType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CatalogCommon", name = "IdType")
    public JAXBElement<IdType> createIdType(IdType value) {
        return new JAXBElement<IdType>(_IdType_QNAME, IdType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ROCatalogTenantType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CatalogCommon", name = "ROCatalogTenantType")
    public JAXBElement<ROCatalogTenantType> createROCatalogTenantType(ROCatalogTenantType value) {
        return new JAXBElement<ROCatalogTenantType>(_ROCatalogTenantType_QNAME, ROCatalogTenantType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link OperationType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.CatalogCommon", name = "OperationType")
    public JAXBElement<OperationType> createOperationType(OperationType value) {
        return new JAXBElement<OperationType>(_OperationType_QNAME, OperationType.class, null, value);
    }

}
