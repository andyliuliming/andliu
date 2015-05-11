
package com.windowscloudbackup.cloudcommon.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.windowscloudbackup.cloudcommon.v2011_09 package. 
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

    private final static QName _Stamp_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "Stamp");
    private final static QName _CloudServiceInternalFault_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "CloudServiceInternalFault");
    private final static QName _CloudServiceFault_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "CloudServiceFault");
    private final static QName _GenericAsyncStatusResult_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "GenericAsyncStatusResult");
    private final static QName _GenericAsyncStatusResultV201109_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "GenericAsyncStatusResult_V2011_09");
    private final static QName _ArrayOfEntityId_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "ArrayOfEntityId");
    private final static QName _GenericAsyncStatusArgsV201109_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "GenericAsyncStatusArgs_V2011_09");
    private final static QName _GenericAsyncStatusArgsV201202_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "GenericAsyncStatusArgs_V2012_02");
    private final static QName _ArrayOfEntityIdV201109_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "ArrayOfEntityId_V2011_09");
    private final static QName _ClientStampV201109_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "ClientStamp_V2011_09");
    private final static QName _EntityIdV201109_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "EntityId_V2011_09");
    private final static QName _EntityId_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "EntityId");
    private final static QName _GenericAsyncStatusArgs_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "GenericAsyncStatusArgs");
    private final static QName _GetStatusRequest_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "request");
    private final static QName _GetStatusResponseGetStatusResult_QNAME = new QName("http://windowscloudbackup.com/CloudCommon/V2011_09", "GetStatusResult");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.windowscloudbackup.cloudcommon.v2011_09
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link EntityId }
     * 
     */
    public EntityId createEntityId() {
        return new EntityId();
    }

    /**
     * Create an instance of {@link ArrayOfEntityId }
     * 
     */
    public ArrayOfEntityId createArrayOfEntityId() {
        return new ArrayOfEntityId();
    }

    /**
     * Create an instance of {@link GenericAsyncStatusArgsV201109 }
     * 
     */
    public GenericAsyncStatusArgsV201109 createGenericAsyncStatusArgsV201109() {
        return new GenericAsyncStatusArgsV201109();
    }

    /**
     * Create an instance of {@link GenericAsyncStatusResult }
     * 
     */
    public GenericAsyncStatusResult createGenericAsyncStatusResult() {
        return new GenericAsyncStatusResult();
    }

    /**
     * Create an instance of {@link ClientStampV201109 }
     * 
     */
    public ClientStampV201109 createClientStampV201109() {
        return new ClientStampV201109();
    }

    /**
     * Create an instance of {@link CloudServiceInternalFault }
     * 
     */
    public CloudServiceInternalFault createCloudServiceInternalFault() {
        return new CloudServiceInternalFault();
    }

    /**
     * Create an instance of {@link ArrayOfEntityIdV201109 }
     * 
     */
    public ArrayOfEntityIdV201109 createArrayOfEntityIdV201109() {
        return new ArrayOfEntityIdV201109();
    }

    /**
     * Create an instance of {@link GetStatus }
     * 
     */
    public GetStatus createGetStatus() {
        return new GetStatus();
    }

    /**
     * Create an instance of {@link GenericAsyncStatusArgs }
     * 
     */
    public GenericAsyncStatusArgs createGenericAsyncStatusArgs() {
        return new GenericAsyncStatusArgs();
    }

    /**
     * Create an instance of {@link Stamp }
     * 
     */
    public Stamp createStamp() {
        return new Stamp();
    }

    /**
     * Create an instance of {@link EntityIdV201109 }
     * 
     */
    public EntityIdV201109 createEntityIdV201109() {
        return new EntityIdV201109();
    }

    /**
     * Create an instance of {@link GetStatusResponse }
     * 
     */
    public GetStatusResponse createGetStatusResponse() {
        return new GetStatusResponse();
    }

    /**
     * Create an instance of {@link GenericAsyncStatusArgsV201202 }
     * 
     */
    public GenericAsyncStatusArgsV201202 createGenericAsyncStatusArgsV201202() {
        return new GenericAsyncStatusArgsV201202();
    }

    /**
     * Create an instance of {@link CloudServiceFault }
     * 
     */
    public CloudServiceFault createCloudServiceFault() {
        return new CloudServiceFault();
    }

    /**
     * Create an instance of {@link GenericAsyncStatusResultV201109 }
     * 
     */
    public GenericAsyncStatusResultV201109 createGenericAsyncStatusResultV201109() {
        return new GenericAsyncStatusResultV201109();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link Stamp }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "Stamp")
    public JAXBElement<Stamp> createStamp(Stamp value) {
        return new JAXBElement<Stamp>(_Stamp_QNAME, Stamp.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CloudServiceInternalFault }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "CloudServiceInternalFault")
    public JAXBElement<CloudServiceInternalFault> createCloudServiceInternalFault(CloudServiceInternalFault value) {
        return new JAXBElement<CloudServiceInternalFault>(_CloudServiceInternalFault_QNAME, CloudServiceInternalFault.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link CloudServiceFault }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "CloudServiceFault")
    public JAXBElement<CloudServiceFault> createCloudServiceFault(CloudServiceFault value) {
        return new JAXBElement<CloudServiceFault>(_CloudServiceFault_QNAME, CloudServiceFault.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GenericAsyncStatusResult }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "GenericAsyncStatusResult")
    public JAXBElement<GenericAsyncStatusResult> createGenericAsyncStatusResult(GenericAsyncStatusResult value) {
        return new JAXBElement<GenericAsyncStatusResult>(_GenericAsyncStatusResult_QNAME, GenericAsyncStatusResult.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GenericAsyncStatusResultV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "GenericAsyncStatusResult_V2011_09")
    public JAXBElement<GenericAsyncStatusResultV201109> createGenericAsyncStatusResultV201109(GenericAsyncStatusResultV201109 value) {
        return new JAXBElement<GenericAsyncStatusResultV201109>(_GenericAsyncStatusResultV201109_QNAME, GenericAsyncStatusResultV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfEntityId }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "ArrayOfEntityId")
    public JAXBElement<ArrayOfEntityId> createArrayOfEntityId(ArrayOfEntityId value) {
        return new JAXBElement<ArrayOfEntityId>(_ArrayOfEntityId_QNAME, ArrayOfEntityId.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GenericAsyncStatusArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "GenericAsyncStatusArgs_V2011_09")
    public JAXBElement<GenericAsyncStatusArgsV201109> createGenericAsyncStatusArgsV201109(GenericAsyncStatusArgsV201109 value) {
        return new JAXBElement<GenericAsyncStatusArgsV201109>(_GenericAsyncStatusArgsV201109_QNAME, GenericAsyncStatusArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GenericAsyncStatusArgsV201202 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "GenericAsyncStatusArgs_V2012_02")
    public JAXBElement<GenericAsyncStatusArgsV201202> createGenericAsyncStatusArgsV201202(GenericAsyncStatusArgsV201202 value) {
        return new JAXBElement<GenericAsyncStatusArgsV201202>(_GenericAsyncStatusArgsV201202_QNAME, GenericAsyncStatusArgsV201202 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfEntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "ArrayOfEntityId_V2011_09")
    public JAXBElement<ArrayOfEntityIdV201109> createArrayOfEntityIdV201109(ArrayOfEntityIdV201109 value) {
        return new JAXBElement<ArrayOfEntityIdV201109>(_ArrayOfEntityIdV201109_QNAME, ArrayOfEntityIdV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ClientStampV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "ClientStamp_V2011_09")
    public JAXBElement<ClientStampV201109> createClientStampV201109(ClientStampV201109 value) {
        return new JAXBElement<ClientStampV201109>(_ClientStampV201109_QNAME, ClientStampV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "EntityId_V2011_09")
    public JAXBElement<EntityIdV201109> createEntityIdV201109(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_EntityIdV201109_QNAME, EntityIdV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityId }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "EntityId")
    public JAXBElement<EntityId> createEntityId(EntityId value) {
        return new JAXBElement<EntityId>(_EntityId_QNAME, EntityId.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GenericAsyncStatusArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "GenericAsyncStatusArgs")
    public JAXBElement<GenericAsyncStatusArgs> createGenericAsyncStatusArgs(GenericAsyncStatusArgs value) {
        return new JAXBElement<GenericAsyncStatusArgs>(_GenericAsyncStatusArgs_QNAME, GenericAsyncStatusArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GenericAsyncStatusArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "request", scope = GetStatus.class)
    public JAXBElement<GenericAsyncStatusArgs> createGetStatusRequest(GenericAsyncStatusArgs value) {
        return new JAXBElement<GenericAsyncStatusArgs>(_GetStatusRequest_QNAME, GenericAsyncStatusArgs.class, GetStatus.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GenericAsyncStatusResult }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/CloudCommon/V2011_09", name = "GetStatusResult", scope = GetStatusResponse.class)
    public JAXBElement<GenericAsyncStatusResult> createGetStatusResponseGetStatusResult(GenericAsyncStatusResult value) {
        return new JAXBElement<GenericAsyncStatusResult>(_GetStatusResponseGetStatusResult_QNAME, GenericAsyncStatusResult.class, GetStatusResponse.class, value);
    }

}
