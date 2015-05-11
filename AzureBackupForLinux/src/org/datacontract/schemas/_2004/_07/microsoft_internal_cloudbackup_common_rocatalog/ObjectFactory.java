
package org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog package. 
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

    private final static QName _RecoveryPointGenerationType_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", "RecoveryPointGenerationType");
    private final static QName _MetadataSetValueType_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", "MetadataSetValueType");
    private final static QName _VolumeStates_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", "VolumeStates");
    private final static QName _PolicyStates_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", "PolicyStates");
    private final static QName _RecoveryPointStates_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", "RecoveryPointStates");
    private final static QName _MetadataLocation_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", "MetadataLocation");
    private final static QName _PolicyType_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", "PolicyType");
    private final static QName _RecoveryPointType_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", "RecoveryPointType");
    private final static QName _ReplicaStates_QNAME = new QName("http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", "ReplicaStates");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: org.datacontract.schemas._2004._07.microsoft_internal_cloudbackup_common_rocatalog
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointGenerationType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", name = "RecoveryPointGenerationType")
    public JAXBElement<RecoveryPointGenerationType> createRecoveryPointGenerationType(RecoveryPointGenerationType value) {
        return new JAXBElement<RecoveryPointGenerationType>(_RecoveryPointGenerationType_QNAME, RecoveryPointGenerationType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link MetadataSetValueType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", name = "MetadataSetValueType")
    public JAXBElement<MetadataSetValueType> createMetadataSetValueType(MetadataSetValueType value) {
        return new JAXBElement<MetadataSetValueType>(_MetadataSetValueType_QNAME, MetadataSetValueType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link VolumeStates }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", name = "VolumeStates")
    public JAXBElement<VolumeStates> createVolumeStates(VolumeStates value) {
        return new JAXBElement<VolumeStates>(_VolumeStates_QNAME, VolumeStates.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link PolicyStates }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", name = "PolicyStates")
    public JAXBElement<PolicyStates> createPolicyStates(PolicyStates value) {
        return new JAXBElement<PolicyStates>(_PolicyStates_QNAME, PolicyStates.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointStates }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", name = "RecoveryPointStates")
    public JAXBElement<RecoveryPointStates> createRecoveryPointStates(RecoveryPointStates value) {
        return new JAXBElement<RecoveryPointStates>(_RecoveryPointStates_QNAME, RecoveryPointStates.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link MetadataLocation }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", name = "MetadataLocation")
    public JAXBElement<MetadataLocation> createMetadataLocation(MetadataLocation value) {
        return new JAXBElement<MetadataLocation>(_MetadataLocation_QNAME, MetadataLocation.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link PolicyType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", name = "PolicyType")
    public JAXBElement<PolicyType> createPolicyType(PolicyType value) {
        return new JAXBElement<PolicyType>(_PolicyType_QNAME, PolicyType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", name = "RecoveryPointType")
    public JAXBElement<RecoveryPointType> createRecoveryPointType(RecoveryPointType value) {
        return new JAXBElement<RecoveryPointType>(_RecoveryPointType_QNAME, RecoveryPointType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReplicaStates }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://schemas.datacontract.org/2004/07/Microsoft.Internal.CloudBackup.Common.ROCatalog.Interface", name = "ReplicaStates")
    public JAXBElement<ReplicaStates> createReplicaStates(ReplicaStates value) {
        return new JAXBElement<ReplicaStates>(_ReplicaStates_QNAME, ReplicaStates.class, null, value);
    }

}
