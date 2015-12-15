
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;
import com.windowscloudbackup.cloudcommon.v2011_09.ArrayOfEntityId;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityId;
import com.windowscloudbackup.protection.v2011_09.GetEntitiesInformationArgs;
import com.windowscloudbackup.protection.v2011_09.GetEntityInformationArgs;
import com.windowscloudbackup.protection.v2011_09.SetLastAccessTimeForRPArgs;
import com.windowscloudbackup.protection.v2011_09.StorageUsageForMachineRequest;
import com.windowscloudbackup.protection.v2011_09.StorageUsageForMachineResponse;
import com.windowscloudbackup.rocatalog.v2011_09.AddMDSetAndMetadataNameValueArgs;
import com.windowscloudbackup.rocatalog.v2011_09.AddMDSetArgs;
import com.windowscloudbackup.rocatalog.v2011_09.AddPolicyArgs;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfAddDsVolumeReplicaMap;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfAddRPVolumeReplicaMap;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfDataSourceInfoEx;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfEncryptionKeyEx;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfGetDsVolumeReplicaMap;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfGetPolicyInfoArgs;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfGetRPVolumeReplicaMapResponse;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfMetadataSetNameValueInfoEx;
import com.windowscloudbackup.rocatalog.v2011_09.ArrayOfRecoveryPointInfoEx;
import com.windowscloudbackup.rocatalog.v2011_09.DataSourceInfoEx;
import com.windowscloudbackup.rocatalog.v2011_09.DeletePolicyInfoArgs;
import com.windowscloudbackup.rocatalog.v2011_09.DeleteRecoveryPointsInfoArgs;
import com.windowscloudbackup.rocatalog.v2011_09.EncryptionKeyEx;
import com.windowscloudbackup.rocatalog.v2011_09.GetDsArrayInfoArgs;
import com.windowscloudbackup.rocatalog.v2011_09.GetInfoForMachineArgs;
import com.windowscloudbackup.rocatalog.v2011_09.GetReplicaArgs;
import com.windowscloudbackup.rocatalog.v2011_09.PolicyAndRPInfoResponse;
import com.windowscloudbackup.rocatalog.v2011_09.ReadEncryptionKeyRequest;
import com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointInfo;
import com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointInfoEx;
import com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointInfoResponse;
import com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointSetInfo;
import com.windowscloudbackup.rocatalog.v2011_09.ReplicaInfoEx;
import com.windowscloudbackup.rocatalog.v2011_09.UpdateDatasourceVolumeClientStampArgs;
import com.windowscloudbackup.rocatalog.v2011_09.UpdatePolicyInfoArgs;
import com.windowscloudbackup.rocatalog.v2011_09.UpdateReplicaClientStampArgs;
import com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysRequest;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the org.tempuri package. 
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

    private final static QName _GetCurrentEncryptionKeyRequest_QNAME = new QName("http://tempuri.org/", "request");
    private final static QName _GetAllRecoverableDSForMachineResponseGetAllRecoverableDSForMachineResult_QNAME = new QName("http://tempuri.org/", "GetAllRecoverableDSForMachineResult");
    private final static QName _UpdateDatasourceVolumeClientStampDsVolStampArgs_QNAME = new QName("http://tempuri.org/", "dsVolStampArgs");
    private final static QName _UpdateReplicaClientStampReplicaClientStampArgs_QNAME = new QName("http://tempuri.org/", "ReplicaClientStampArgs");
    private final static QName _GetDsVolumeReplicaMapEntity_QNAME = new QName("http://tempuri.org/", "entity");
    private final static QName _AddDsVolumeReplicaMapDsVolRepMap_QNAME = new QName("http://tempuri.org/", "dsVolRepMap");
    private final static QName _GetAllPoliciesForMachineResponseGetAllPoliciesForMachineResult_QNAME = new QName("http://tempuri.org/", "GetAllPoliciesForMachineResult");
    private final static QName _GetPolicyAndRPInfoForMachineResponseGetPolicyAndRPInfoForMachineResult_QNAME = new QName("http://tempuri.org/", "GetPolicyAndRPInfoForMachineResult");
    private final static QName _AddPolicyPolicyInfo_QNAME = new QName("http://tempuri.org/", "policyInfo");
    private final static QName _GetDsInfoResponseGetDsInfoResult_QNAME = new QName("http://tempuri.org/", "GetDsInfoResult");
    private final static QName _GetDataSourcesInfoDataSourcesInfo_QNAME = new QName("http://tempuri.org/", "dataSourcesInfo");
    private final static QName _GetRPInfoResponseGetRPInfoResult_QNAME = new QName("http://tempuri.org/", "GetRPInfoResult");
    private final static QName _GetCurrentEncryptionKeyResponseGetCurrentEncryptionKeyResult_QNAME = new QName("http://tempuri.org/", "GetCurrentEncryptionKeyResult");
    private final static QName _AddMetadataNameValueMetaDataNameValue_QNAME = new QName("http://tempuri.org/", "metaDataNameValue");
    private final static QName _AddRPInfoResponseAddRPInfoResult_QNAME = new QName("http://tempuri.org/", "AddRPInfoResult");
    private final static QName _GetReplicaResponseGetReplicaResult_QNAME = new QName("http://tempuri.org/", "GetReplicaResult");
    private final static QName _GetAllRecoveryPointsForDataSourceResponseGetAllRecoveryPointsForDataSourceResult_QNAME = new QName("http://tempuri.org/", "GetAllRecoveryPointsForDataSourceResult");
    private final static QName _GetMetadataSetInfoResponseGetMetadataSetInfoResult_QNAME = new QName("http://tempuri.org/", "GetMetadataSetInfoResult");
    private final static QName _GetStorageUsageForMachineResponseGetStorageUsageForMachineResult_QNAME = new QName("http://tempuri.org/", "GetStorageUsageForMachineResult");
    private final static QName _AddMDSetAndMetadataNameValueResponseAddMDSetAndMetadataNameValueResult_QNAME = new QName("http://tempuri.org/", "AddMDSetAndMetadataNameValueResult");
    private final static QName _AddPolicyResponseAddPolicyResult_QNAME = new QName("http://tempuri.org/", "AddPolicyResult");
    private final static QName _AddRPVolumeReplicaMapInfoRpVolumeReplicaInfo_QNAME = new QName("http://tempuri.org/", "rpVolumeReplicaInfo");
    private final static QName _GetDsVolumeReplicaMapResponseGetDsVolumeReplicaMapResult_QNAME = new QName("http://tempuri.org/", "GetDsVolumeReplicaMapResult");
    private final static QName _GetPoliciesInfoForDsIdsDsIds_QNAME = new QName("http://tempuri.org/", "dsIds");
    private final static QName _GetStorageUsageForMachineArgs_QNAME = new QName("http://tempuri.org/", "args");
    private final static QName _GetPolicyAndRPInfoForMachineMachineArgs_QNAME = new QName("http://tempuri.org/", "machineArgs");
    private final static QName _GetAllRPForDSResponseGetAllRPForDSResult_QNAME = new QName("http://tempuri.org/", "GetAllRPForDSResult");
    private final static QName _WriteEncryptionKeysResponseWriteEncryptionKeysResult_QNAME = new QName("http://tempuri.org/", "WriteEncryptionKeysResult");
    private final static QName _GetAllPoliciesResponseGetAllPoliciesResult_QNAME = new QName("http://tempuri.org/", "GetAllPoliciesResult");
    private final static QName _AddRPInfoRpInfo_QNAME = new QName("http://tempuri.org/", "rpInfo");
    private final static QName _GetAllRecoveryPointsForMachineResponseGetAllRecoveryPointsForMachineResult_QNAME = new QName("http://tempuri.org/", "GetAllRecoveryPointsForMachineResult");
    private final static QName _SetLastAccessTimeForRPRpArgs_QNAME = new QName("http://tempuri.org/", "rpArgs");
    private final static QName _GetAllEncryptionKeysResponseGetAllEncryptionKeysResult_QNAME = new QName("http://tempuri.org/", "GetAllEncryptionKeysResult");
    private final static QName _DeletePolicyForMachineDeletePolicyInfo_QNAME = new QName("http://tempuri.org/", "deletePolicyInfo");
    private final static QName _GetPoliciesInfoForDsIdsResponseGetPoliciesInfoForDsIdsResult_QNAME = new QName("http://tempuri.org/", "GetPoliciesInfoForDsIdsResult");
    private final static QName _GetReplicaReplicaId_QNAME = new QName("http://tempuri.org/", "replicaId");
    private final static QName _AddRPSetInfoResponseAddRPSetInfoResult_QNAME = new QName("http://tempuri.org/", "AddRPSetInfoResult");
    private final static QName _GetDataSourcesInfoResponseGetDataSourcesInfoResult_QNAME = new QName("http://tempuri.org/", "GetDataSourcesInfoResult");
    private final static QName _GetRPVolumeReplicaMapInfoResponseGetRPVolumeReplicaMapInfoResult_QNAME = new QName("http://tempuri.org/", "GetRPVolumeReplicaMapInfoResult");
    private final static QName _GetAllRecoveryPointsForDataSourceDataSourceArgs_QNAME = new QName("http://tempuri.org/", "dataSourceArgs");
    private final static QName _DeleteRecoveryPointsDsInfo_QNAME = new QName("http://tempuri.org/", "dsInfo");
    private final static QName _AddRPSetInfoRpSetInfo_QNAME = new QName("http://tempuri.org/", "rpSetInfo");
    private final static QName _GetAllPolicyIdsResponseGetAllPolicyIdsResult_QNAME = new QName("http://tempuri.org/", "GetAllPolicyIdsResult");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: org.tempuri
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link AddDsVolumeReplicaMapResponse }
     * 
     */
    public AddDsVolumeReplicaMapResponse createAddDsVolumeReplicaMapResponse() {
        return new AddDsVolumeReplicaMapResponse();
    }

    /**
     * Create an instance of {@link GetRPVolumeReplicaMapInfoResponse }
     * 
     */
    public GetRPVolumeReplicaMapInfoResponse createGetRPVolumeReplicaMapInfoResponse() {
        return new GetRPVolumeReplicaMapInfoResponse();
    }

    /**
     * Create an instance of {@link GetMetadataSetInfoResponse }
     * 
     */
    public GetMetadataSetInfoResponse createGetMetadataSetInfoResponse() {
        return new GetMetadataSetInfoResponse();
    }

    /**
     * Create an instance of {@link GetAllRecoveryPointsForMachine }
     * 
     */
    public GetAllRecoveryPointsForMachine createGetAllRecoveryPointsForMachine() {
        return new GetAllRecoveryPointsForMachine();
    }

    /**
     * Create an instance of {@link GetAllPoliciesResponse }
     * 
     */
    public GetAllPoliciesResponse createGetAllPoliciesResponse() {
        return new GetAllPoliciesResponse();
    }

    /**
     * Create an instance of {@link GetPoliciesInfoForDsIdsResponse }
     * 
     */
    public GetPoliciesInfoForDsIdsResponse createGetPoliciesInfoForDsIdsResponse() {
        return new GetPoliciesInfoForDsIdsResponse();
    }

    /**
     * Create an instance of {@link GetReplica }
     * 
     */
    public GetReplica createGetReplica() {
        return new GetReplica();
    }

    /**
     * Create an instance of {@link GetMetadataSetInfo }
     * 
     */
    public GetMetadataSetInfo createGetMetadataSetInfo() {
        return new GetMetadataSetInfo();
    }

    /**
     * Create an instance of {@link AddMDSetAndMetadataNameValue }
     * 
     */
    public AddMDSetAndMetadataNameValue createAddMDSetAndMetadataNameValue() {
        return new AddMDSetAndMetadataNameValue();
    }

    /**
     * Create an instance of {@link UpdatePolicyInfo }
     * 
     */
    public UpdatePolicyInfo createUpdatePolicyInfo() {
        return new UpdatePolicyInfo();
    }

    /**
     * Create an instance of {@link GetAllRecoverableDSForMachine }
     * 
     */
    public GetAllRecoverableDSForMachine createGetAllRecoverableDSForMachine() {
        return new GetAllRecoverableDSForMachine();
    }

    /**
     * Create an instance of {@link org.tempuri.WriteEncryptionKeysResponse }
     * 
     */
    public org.tempuri.WriteEncryptionKeysResponse createWriteEncryptionKeysResponse() {
        return new org.tempuri.WriteEncryptionKeysResponse();
    }

    /**
     * Create an instance of {@link GetAllPoliciesForMachine }
     * 
     */
    public GetAllPoliciesForMachine createGetAllPoliciesForMachine() {
        return new GetAllPoliciesForMachine();
    }

    /**
     * Create an instance of {@link DeletePolicyForMachine }
     * 
     */
    public DeletePolicyForMachine createDeletePolicyForMachine() {
        return new DeletePolicyForMachine();
    }

    /**
     * Create an instance of {@link GetAllEncryptionKeys }
     * 
     */
    public GetAllEncryptionKeys createGetAllEncryptionKeys() {
        return new GetAllEncryptionKeys();
    }

    /**
     * Create an instance of {@link DeletePolicyForMachineResponse }
     * 
     */
    public DeletePolicyForMachineResponse createDeletePolicyForMachineResponse() {
        return new DeletePolicyForMachineResponse();
    }

    /**
     * Create an instance of {@link UpdateReplicaClientStamp }
     * 
     */
    public UpdateReplicaClientStamp createUpdateReplicaClientStamp() {
        return new UpdateReplicaClientStamp();
    }

    /**
     * Create an instance of {@link AddMDSetAndMetadataNameValueResponse }
     * 
     */
    public AddMDSetAndMetadataNameValueResponse createAddMDSetAndMetadataNameValueResponse() {
        return new AddMDSetAndMetadataNameValueResponse();
    }

    /**
     * Create an instance of {@link UpdateDatasourceVolumeClientStamp }
     * 
     */
    public UpdateDatasourceVolumeClientStamp createUpdateDatasourceVolumeClientStamp() {
        return new UpdateDatasourceVolumeClientStamp();
    }

    /**
     * Create an instance of {@link UpdateDatasourceVolumeClientStampResponse }
     * 
     */
    public UpdateDatasourceVolumeClientStampResponse createUpdateDatasourceVolumeClientStampResponse() {
        return new UpdateDatasourceVolumeClientStampResponse();
    }

    /**
     * Create an instance of {@link GetAllRPForDS }
     * 
     */
    public GetAllRPForDS createGetAllRPForDS() {
        return new GetAllRPForDS();
    }

    /**
     * Create an instance of {@link AddRPSetInfoResponse }
     * 
     */
    public AddRPSetInfoResponse createAddRPSetInfoResponse() {
        return new AddRPSetInfoResponse();
    }

    /**
     * Create an instance of {@link AddRPInfo }
     * 
     */
    public AddRPInfo createAddRPInfo() {
        return new AddRPInfo();
    }

    /**
     * Create an instance of {@link GetRPVolumeReplicaMapInfo }
     * 
     */
    public GetRPVolumeReplicaMapInfo createGetRPVolumeReplicaMapInfo() {
        return new GetRPVolumeReplicaMapInfo();
    }

    /**
     * Create an instance of {@link GetDsInfo }
     * 
     */
    public GetDsInfo createGetDsInfo() {
        return new GetDsInfo();
    }

    /**
     * Create an instance of {@link GetRPInfoResponse }
     * 
     */
    public GetRPInfoResponse createGetRPInfoResponse() {
        return new GetRPInfoResponse();
    }

    /**
     * Create an instance of {@link GetCurrentEncryptionKeyResponse }
     * 
     */
    public GetCurrentEncryptionKeyResponse createGetCurrentEncryptionKeyResponse() {
        return new GetCurrentEncryptionKeyResponse();
    }

    /**
     * Create an instance of {@link GetStorageUsageForMachine }
     * 
     */
    public GetStorageUsageForMachine createGetStorageUsageForMachine() {
        return new GetStorageUsageForMachine();
    }

    /**
     * Create an instance of {@link GetAllRecoveryPointsForDataSourceResponse }
     * 
     */
    public GetAllRecoveryPointsForDataSourceResponse createGetAllRecoveryPointsForDataSourceResponse() {
        return new GetAllRecoveryPointsForDataSourceResponse();
    }

    /**
     * Create an instance of {@link GetDsInfoResponse }
     * 
     */
    public GetDsInfoResponse createGetDsInfoResponse() {
        return new GetDsInfoResponse();
    }

    /**
     * Create an instance of {@link GetDsVolumeReplicaMap }
     * 
     */
    public GetDsVolumeReplicaMap createGetDsVolumeReplicaMap() {
        return new GetDsVolumeReplicaMap();
    }

    /**
     * Create an instance of {@link AddRPVolumeReplicaMapInfoResponse }
     * 
     */
    public AddRPVolumeReplicaMapInfoResponse createAddRPVolumeReplicaMapInfoResponse() {
        return new AddRPVolumeReplicaMapInfoResponse();
    }

    /**
     * Create an instance of {@link UpdatePolicyInfoResponse }
     * 
     */
    public UpdatePolicyInfoResponse createUpdatePolicyInfoResponse() {
        return new UpdatePolicyInfoResponse();
    }

    /**
     * Create an instance of {@link GetStorageUsageForMachineResponse }
     * 
     */
    public GetStorageUsageForMachineResponse createGetStorageUsageForMachineResponse() {
        return new GetStorageUsageForMachineResponse();
    }

    /**
     * Create an instance of {@link GetAllRecoveryPointsForMachineResponse }
     * 
     */
    public GetAllRecoveryPointsForMachineResponse createGetAllRecoveryPointsForMachineResponse() {
        return new GetAllRecoveryPointsForMachineResponse();
    }

    /**
     * Create an instance of {@link DeletePolicyResponse }
     * 
     */
    public DeletePolicyResponse createDeletePolicyResponse() {
        return new DeletePolicyResponse();
    }

    /**
     * Create an instance of {@link GetPolicyAndRPInfoForMachineResponse }
     * 
     */
    public GetPolicyAndRPInfoForMachineResponse createGetPolicyAndRPInfoForMachineResponse() {
        return new GetPolicyAndRPInfoForMachineResponse();
    }

    /**
     * Create an instance of {@link UpdateReplicaClientStampResponse }
     * 
     */
    public UpdateReplicaClientStampResponse createUpdateReplicaClientStampResponse() {
        return new UpdateReplicaClientStampResponse();
    }

    /**
     * Create an instance of {@link AddMetadataNameValue }
     * 
     */
    public AddMetadataNameValue createAddMetadataNameValue() {
        return new AddMetadataNameValue();
    }

    /**
     * Create an instance of {@link GetAllPolicies }
     * 
     */
    public GetAllPolicies createGetAllPolicies() {
        return new GetAllPolicies();
    }

    /**
     * Create an instance of {@link GetAllPolicyIds }
     * 
     */
    public GetAllPolicyIds createGetAllPolicyIds() {
        return new GetAllPolicyIds();
    }

    /**
     * Create an instance of {@link GetPoliciesInfoForDsIds }
     * 
     */
    public GetPoliciesInfoForDsIds createGetPoliciesInfoForDsIds() {
        return new GetPoliciesInfoForDsIds();
    }

    /**
     * Create an instance of {@link GetAllRPForDSResponse }
     * 
     */
    public GetAllRPForDSResponse createGetAllRPForDSResponse() {
        return new GetAllRPForDSResponse();
    }

    /**
     * Create an instance of {@link AddRPVolumeReplicaMapInfo }
     * 
     */
    public AddRPVolumeReplicaMapInfo createAddRPVolumeReplicaMapInfo() {
        return new AddRPVolumeReplicaMapInfo();
    }

    /**
     * Create an instance of {@link AddDsVolumeReplicaMap }
     * 
     */
    public AddDsVolumeReplicaMap createAddDsVolumeReplicaMap() {
        return new AddDsVolumeReplicaMap();
    }

    /**
     * Create an instance of {@link GetAllRecoveryPointsForDataSource }
     * 
     */
    public GetAllRecoveryPointsForDataSource createGetAllRecoveryPointsForDataSource() {
        return new GetAllRecoveryPointsForDataSource();
    }

    /**
     * Create an instance of {@link GetAllPoliciesForMachineResponse }
     * 
     */
    public GetAllPoliciesForMachineResponse createGetAllPoliciesForMachineResponse() {
        return new GetAllPoliciesForMachineResponse();
    }

    /**
     * Create an instance of {@link GetAllRecoverableDSForMachineResponse }
     * 
     */
    public GetAllRecoverableDSForMachineResponse createGetAllRecoverableDSForMachineResponse() {
        return new GetAllRecoverableDSForMachineResponse();
    }

    /**
     * Create an instance of {@link GetRPInfo }
     * 
     */
    public GetRPInfo createGetRPInfo() {
        return new GetRPInfo();
    }

    /**
     * Create an instance of {@link GetDataSourcesInfoResponse }
     * 
     */
    public GetDataSourcesInfoResponse createGetDataSourcesInfoResponse() {
        return new GetDataSourcesInfoResponse();
    }

    /**
     * Create an instance of {@link AddPolicy }
     * 
     */
    public AddPolicy createAddPolicy() {
        return new AddPolicy();
    }

    /**
     * Create an instance of {@link DeletePolicy }
     * 
     */
    public DeletePolicy createDeletePolicy() {
        return new DeletePolicy();
    }

    /**
     * Create an instance of {@link AddRPSetInfo }
     * 
     */
    public AddRPSetInfo createAddRPSetInfo() {
        return new AddRPSetInfo();
    }

    /**
     * Create an instance of {@link GetAllPolicyIdsResponse }
     * 
     */
    public GetAllPolicyIdsResponse createGetAllPolicyIdsResponse() {
        return new GetAllPolicyIdsResponse();
    }

    /**
     * Create an instance of {@link SetLastAccessTimeForRPResponse }
     * 
     */
    public SetLastAccessTimeForRPResponse createSetLastAccessTimeForRPResponse() {
        return new SetLastAccessTimeForRPResponse();
    }

    /**
     * Create an instance of {@link GetReplicaResponse }
     * 
     */
    public GetReplicaResponse createGetReplicaResponse() {
        return new GetReplicaResponse();
    }

    /**
     * Create an instance of {@link GetAllEncryptionKeysResponse }
     * 
     */
    public GetAllEncryptionKeysResponse createGetAllEncryptionKeysResponse() {
        return new GetAllEncryptionKeysResponse();
    }

    /**
     * Create an instance of {@link AddMetadataNameValueResponse }
     * 
     */
    public AddMetadataNameValueResponse createAddMetadataNameValueResponse() {
        return new AddMetadataNameValueResponse();
    }

    /**
     * Create an instance of {@link AddRPInfoResponse }
     * 
     */
    public AddRPInfoResponse createAddRPInfoResponse() {
        return new AddRPInfoResponse();
    }

    /**
     * Create an instance of {@link WriteEncryptionKeys }
     * 
     */
    public WriteEncryptionKeys createWriteEncryptionKeys() {
        return new WriteEncryptionKeys();
    }

    /**
     * Create an instance of {@link GetPolicyAndRPInfoForMachine }
     * 
     */
    public GetPolicyAndRPInfoForMachine createGetPolicyAndRPInfoForMachine() {
        return new GetPolicyAndRPInfoForMachine();
    }

    /**
     * Create an instance of {@link AddPolicyResponse }
     * 
     */
    public AddPolicyResponse createAddPolicyResponse() {
        return new AddPolicyResponse();
    }

    /**
     * Create an instance of {@link DeleteRecoveryPointsResponse }
     * 
     */
    public DeleteRecoveryPointsResponse createDeleteRecoveryPointsResponse() {
        return new DeleteRecoveryPointsResponse();
    }

    /**
     * Create an instance of {@link GetDataSourcesInfo }
     * 
     */
    public GetDataSourcesInfo createGetDataSourcesInfo() {
        return new GetDataSourcesInfo();
    }

    /**
     * Create an instance of {@link GetCurrentEncryptionKey }
     * 
     */
    public GetCurrentEncryptionKey createGetCurrentEncryptionKey() {
        return new GetCurrentEncryptionKey();
    }

    /**
     * Create an instance of {@link DeleteRecoveryPoints }
     * 
     */
    public DeleteRecoveryPoints createDeleteRecoveryPoints() {
        return new DeleteRecoveryPoints();
    }

    /**
     * Create an instance of {@link GetDsVolumeReplicaMapResponse }
     * 
     */
    public GetDsVolumeReplicaMapResponse createGetDsVolumeReplicaMapResponse() {
        return new GetDsVolumeReplicaMapResponse();
    }

    /**
     * Create an instance of {@link SetLastAccessTimeForRP }
     * 
     */
    public SetLastAccessTimeForRP createSetLastAccessTimeForRP() {
        return new SetLastAccessTimeForRP();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReadEncryptionKeyRequest }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "request", scope = GetCurrentEncryptionKey.class)
    public JAXBElement<ReadEncryptionKeyRequest> createGetCurrentEncryptionKeyRequest(ReadEncryptionKeyRequest value) {
        return new JAXBElement<ReadEncryptionKeyRequest>(_GetCurrentEncryptionKeyRequest_QNAME, ReadEncryptionKeyRequest.class, GetCurrentEncryptionKey.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfEntityId }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetAllRecoverableDSForMachineResult", scope = GetAllRecoverableDSForMachineResponse.class)
    public JAXBElement<ArrayOfEntityId> createGetAllRecoverableDSForMachineResponseGetAllRecoverableDSForMachineResult(ArrayOfEntityId value) {
        return new JAXBElement<ArrayOfEntityId>(_GetAllRecoverableDSForMachineResponseGetAllRecoverableDSForMachineResult_QNAME, ArrayOfEntityId.class, GetAllRecoverableDSForMachineResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateDatasourceVolumeClientStampArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "dsVolStampArgs", scope = UpdateDatasourceVolumeClientStamp.class)
    public JAXBElement<UpdateDatasourceVolumeClientStampArgs> createUpdateDatasourceVolumeClientStampDsVolStampArgs(UpdateDatasourceVolumeClientStampArgs value) {
        return new JAXBElement<UpdateDatasourceVolumeClientStampArgs>(_UpdateDatasourceVolumeClientStampDsVolStampArgs_QNAME, UpdateDatasourceVolumeClientStampArgs.class, UpdateDatasourceVolumeClientStamp.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateReplicaClientStampArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "ReplicaClientStampArgs", scope = UpdateReplicaClientStamp.class)
    public JAXBElement<UpdateReplicaClientStampArgs> createUpdateReplicaClientStampReplicaClientStampArgs(UpdateReplicaClientStampArgs value) {
        return new JAXBElement<UpdateReplicaClientStampArgs>(_UpdateReplicaClientStampReplicaClientStampArgs_QNAME, UpdateReplicaClientStampArgs.class, UpdateReplicaClientStamp.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetEntityInformationArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "entity", scope = GetDsVolumeReplicaMap.class)
    public JAXBElement<GetEntityInformationArgs> createGetDsVolumeReplicaMapEntity(GetEntityInformationArgs value) {
        return new JAXBElement<GetEntityInformationArgs>(_GetDsVolumeReplicaMapEntity_QNAME, GetEntityInformationArgs.class, GetDsVolumeReplicaMap.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfAddDsVolumeReplicaMap }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "dsVolRepMap", scope = AddDsVolumeReplicaMap.class)
    public JAXBElement<ArrayOfAddDsVolumeReplicaMap> createAddDsVolumeReplicaMapDsVolRepMap(ArrayOfAddDsVolumeReplicaMap value) {
        return new JAXBElement<ArrayOfAddDsVolumeReplicaMap>(_AddDsVolumeReplicaMapDsVolRepMap_QNAME, ArrayOfAddDsVolumeReplicaMap.class, AddDsVolumeReplicaMap.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetAllPoliciesForMachineResult", scope = GetAllPoliciesForMachineResponse.class)
    public JAXBElement<ArrayOfGetPolicyInfoArgs> createGetAllPoliciesForMachineResponseGetAllPoliciesForMachineResult(ArrayOfGetPolicyInfoArgs value) {
        return new JAXBElement<ArrayOfGetPolicyInfoArgs>(_GetAllPoliciesForMachineResponseGetAllPoliciesForMachineResult_QNAME, ArrayOfGetPolicyInfoArgs.class, GetAllPoliciesForMachineResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link PolicyAndRPInfoResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetPolicyAndRPInfoForMachineResult", scope = GetPolicyAndRPInfoForMachineResponse.class)
    public JAXBElement<PolicyAndRPInfoResponse> createGetPolicyAndRPInfoForMachineResponseGetPolicyAndRPInfoForMachineResult(PolicyAndRPInfoResponse value) {
        return new JAXBElement<PolicyAndRPInfoResponse>(_GetPolicyAndRPInfoForMachineResponseGetPolicyAndRPInfoForMachineResult_QNAME, PolicyAndRPInfoResponse.class, GetPolicyAndRPInfoForMachineResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReadEncryptionKeyRequest }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "request", scope = GetAllEncryptionKeys.class)
    public JAXBElement<ReadEncryptionKeyRequest> createGetAllEncryptionKeysRequest(ReadEncryptionKeyRequest value) {
        return new JAXBElement<ReadEncryptionKeyRequest>(_GetCurrentEncryptionKeyRequest_QNAME, ReadEncryptionKeyRequest.class, GetAllEncryptionKeys.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddPolicyArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "policyInfo", scope = AddPolicy.class)
    public JAXBElement<AddPolicyArgs> createAddPolicyPolicyInfo(AddPolicyArgs value) {
        return new JAXBElement<AddPolicyArgs>(_AddPolicyPolicyInfo_QNAME, AddPolicyArgs.class, AddPolicy.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetEntityInformationArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "entity", scope = GetDsInfo.class)
    public JAXBElement<GetEntityInformationArgs> createGetDsInfoEntity(GetEntityInformationArgs value) {
        return new JAXBElement<GetEntityInformationArgs>(_GetDsVolumeReplicaMapEntity_QNAME, GetEntityInformationArgs.class, GetDsInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DataSourceInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetDsInfoResult", scope = GetDsInfoResponse.class)
    public JAXBElement<DataSourceInfoEx> createGetDsInfoResponseGetDsInfoResult(DataSourceInfoEx value) {
        return new JAXBElement<DataSourceInfoEx>(_GetDsInfoResponseGetDsInfoResult_QNAME, DataSourceInfoEx.class, GetDsInfoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDsArrayInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "dataSourcesInfo", scope = GetDataSourcesInfo.class)
    public JAXBElement<GetDsArrayInfoArgs> createGetDataSourcesInfoDataSourcesInfo(GetDsArrayInfoArgs value) {
        return new JAXBElement<GetDsArrayInfoArgs>(_GetDataSourcesInfoDataSourcesInfo_QNAME, GetDsArrayInfoArgs.class, GetDataSourcesInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdatePolicyInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "policyInfo", scope = UpdatePolicyInfo.class)
    public JAXBElement<UpdatePolicyInfoArgs> createUpdatePolicyInfoPolicyInfo(UpdatePolicyInfoArgs value) {
        return new JAXBElement<UpdatePolicyInfoArgs>(_AddPolicyPolicyInfo_QNAME, UpdatePolicyInfoArgs.class, UpdatePolicyInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetRPInfoResult", scope = GetRPInfoResponse.class)
    public JAXBElement<RecoveryPointInfoEx> createGetRPInfoResponseGetRPInfoResult(RecoveryPointInfoEx value) {
        return new JAXBElement<RecoveryPointInfoEx>(_GetRPInfoResponseGetRPInfoResult_QNAME, RecoveryPointInfoEx.class, GetRPInfoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetEntityInformationArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "entity", scope = GetRPInfo.class)
    public JAXBElement<GetEntityInformationArgs> createGetRPInfoEntity(GetEntityInformationArgs value) {
        return new JAXBElement<GetEntityInformationArgs>(_GetDsVolumeReplicaMapEntity_QNAME, GetEntityInformationArgs.class, GetRPInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EncryptionKeyEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetCurrentEncryptionKeyResult", scope = GetCurrentEncryptionKeyResponse.class)
    public JAXBElement<EncryptionKeyEx> createGetCurrentEncryptionKeyResponseGetCurrentEncryptionKeyResult(EncryptionKeyEx value) {
        return new JAXBElement<EncryptionKeyEx>(_GetCurrentEncryptionKeyResponseGetCurrentEncryptionKeyResult_QNAME, EncryptionKeyEx.class, GetCurrentEncryptionKeyResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddMDSetArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "metaDataNameValue", scope = AddMetadataNameValue.class)
    public JAXBElement<AddMDSetArgs> createAddMetadataNameValueMetaDataNameValue(AddMDSetArgs value) {
        return new JAXBElement<AddMDSetArgs>(_AddMetadataNameValueMetaDataNameValue_QNAME, AddMDSetArgs.class, AddMetadataNameValue.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityId }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "AddRPInfoResult", scope = AddRPInfoResponse.class)
    public JAXBElement<EntityId> createAddRPInfoResponseAddRPInfoResult(EntityId value) {
        return new JAXBElement<EntityId>(_AddRPInfoResponseAddRPInfoResult_QNAME, EntityId.class, AddRPInfoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReplicaInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetReplicaResult", scope = GetReplicaResponse.class)
    public JAXBElement<ReplicaInfoEx> createGetReplicaResponseGetReplicaResult(ReplicaInfoEx value) {
        return new JAXBElement<ReplicaInfoEx>(_GetReplicaResponseGetReplicaResult_QNAME, ReplicaInfoEx.class, GetReplicaResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfoResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetAllRecoveryPointsForDataSourceResult", scope = GetAllRecoveryPointsForDataSourceResponse.class)
    public JAXBElement<RecoveryPointInfoResponse> createGetAllRecoveryPointsForDataSourceResponseGetAllRecoveryPointsForDataSourceResult(RecoveryPointInfoResponse value) {
        return new JAXBElement<RecoveryPointInfoResponse>(_GetAllRecoveryPointsForDataSourceResponseGetAllRecoveryPointsForDataSourceResult_QNAME, RecoveryPointInfoResponse.class, GetAllRecoveryPointsForDataSourceResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetEntityInformationArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "entity", scope = GetRPVolumeReplicaMapInfo.class)
    public JAXBElement<GetEntityInformationArgs> createGetRPVolumeReplicaMapInfoEntity(GetEntityInformationArgs value) {
        return new JAXBElement<GetEntityInformationArgs>(_GetDsVolumeReplicaMapEntity_QNAME, GetEntityInformationArgs.class, GetRPVolumeReplicaMapInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddMDSetAndMetadataNameValueArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "metaDataNameValue", scope = AddMDSetAndMetadataNameValue.class)
    public JAXBElement<AddMDSetAndMetadataNameValueArgs> createAddMDSetAndMetadataNameValueMetaDataNameValue(AddMDSetAndMetadataNameValueArgs value) {
        return new JAXBElement<AddMDSetAndMetadataNameValueArgs>(_AddMetadataNameValueMetaDataNameValue_QNAME, AddMDSetAndMetadataNameValueArgs.class, AddMDSetAndMetadataNameValue.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfMetadataSetNameValueInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetMetadataSetInfoResult", scope = GetMetadataSetInfoResponse.class)
    public JAXBElement<ArrayOfMetadataSetNameValueInfoEx> createGetMetadataSetInfoResponseGetMetadataSetInfoResult(ArrayOfMetadataSetNameValueInfoEx value) {
        return new JAXBElement<ArrayOfMetadataSetNameValueInfoEx>(_GetMetadataSetInfoResponseGetMetadataSetInfoResult_QNAME, ArrayOfMetadataSetNameValueInfoEx.class, GetMetadataSetInfoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetEntityInformationArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "entity", scope = GetAllRPForDS.class)
    public JAXBElement<GetEntityInformationArgs> createGetAllRPForDSEntity(GetEntityInformationArgs value) {
        return new JAXBElement<GetEntityInformationArgs>(_GetDsVolumeReplicaMapEntity_QNAME, GetEntityInformationArgs.class, GetAllRPForDS.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link StorageUsageForMachineResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetStorageUsageForMachineResult", scope = GetStorageUsageForMachineResponse.class)
    public JAXBElement<StorageUsageForMachineResponse> createGetStorageUsageForMachineResponseGetStorageUsageForMachineResult(StorageUsageForMachineResponse value) {
        return new JAXBElement<StorageUsageForMachineResponse>(_GetStorageUsageForMachineResponseGetStorageUsageForMachineResult_QNAME, StorageUsageForMachineResponse.class, GetStorageUsageForMachineResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityId }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "AddMDSetAndMetadataNameValueResult", scope = AddMDSetAndMetadataNameValueResponse.class)
    public JAXBElement<EntityId> createAddMDSetAndMetadataNameValueResponseAddMDSetAndMetadataNameValueResult(EntityId value) {
        return new JAXBElement<EntityId>(_AddMDSetAndMetadataNameValueResponseAddMDSetAndMetadataNameValueResult_QNAME, EntityId.class, AddMDSetAndMetadataNameValueResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityId }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "AddPolicyResult", scope = AddPolicyResponse.class)
    public JAXBElement<EntityId> createAddPolicyResponseAddPolicyResult(EntityId value) {
        return new JAXBElement<EntityId>(_AddPolicyResponseAddPolicyResult_QNAME, EntityId.class, AddPolicyResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfAddRPVolumeReplicaMap }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "rpVolumeReplicaInfo", scope = AddRPVolumeReplicaMapInfo.class)
    public JAXBElement<ArrayOfAddRPVolumeReplicaMap> createAddRPVolumeReplicaMapInfoRpVolumeReplicaInfo(ArrayOfAddRPVolumeReplicaMap value) {
        return new JAXBElement<ArrayOfAddRPVolumeReplicaMap>(_AddRPVolumeReplicaMapInfoRpVolumeReplicaInfo_QNAME, ArrayOfAddRPVolumeReplicaMap.class, AddRPVolumeReplicaMapInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetEntityInformationArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "entity", scope = GetMetadataSetInfo.class)
    public JAXBElement<GetEntityInformationArgs> createGetMetadataSetInfoEntity(GetEntityInformationArgs value) {
        return new JAXBElement<GetEntityInformationArgs>(_GetDsVolumeReplicaMapEntity_QNAME, GetEntityInformationArgs.class, GetMetadataSetInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfGetDsVolumeReplicaMap }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetDsVolumeReplicaMapResult", scope = GetDsVolumeReplicaMapResponse.class)
    public JAXBElement<ArrayOfGetDsVolumeReplicaMap> createGetDsVolumeReplicaMapResponseGetDsVolumeReplicaMapResult(ArrayOfGetDsVolumeReplicaMap value) {
        return new JAXBElement<ArrayOfGetDsVolumeReplicaMap>(_GetDsVolumeReplicaMapResponseGetDsVolumeReplicaMapResult_QNAME, ArrayOfGetDsVolumeReplicaMap.class, GetDsVolumeReplicaMapResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link WriteEncryptionKeysRequest }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "request", scope = WriteEncryptionKeys.class)
    public JAXBElement<WriteEncryptionKeysRequest> createWriteEncryptionKeysRequest(WriteEncryptionKeysRequest value) {
        return new JAXBElement<WriteEncryptionKeysRequest>(_GetCurrentEncryptionKeyRequest_QNAME, WriteEncryptionKeysRequest.class, WriteEncryptionKeys.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetEntitiesInformationArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "dsIds", scope = GetPoliciesInfoForDsIds.class)
    public JAXBElement<GetEntitiesInformationArgs> createGetPoliciesInfoForDsIdsDsIds(GetEntitiesInformationArgs value) {
        return new JAXBElement<GetEntitiesInformationArgs>(_GetPoliciesInfoForDsIdsDsIds_QNAME, GetEntitiesInformationArgs.class, GetPoliciesInfoForDsIds.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link StorageUsageForMachineRequest }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "args", scope = GetStorageUsageForMachine.class)
    public JAXBElement<StorageUsageForMachineRequest> createGetStorageUsageForMachineArgs(StorageUsageForMachineRequest value) {
        return new JAXBElement<StorageUsageForMachineRequest>(_GetStorageUsageForMachineArgs_QNAME, StorageUsageForMachineRequest.class, GetStorageUsageForMachine.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetInfoForMachineArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "machineArgs", scope = GetPolicyAndRPInfoForMachine.class)
    public JAXBElement<GetInfoForMachineArgs> createGetPolicyAndRPInfoForMachineMachineArgs(GetInfoForMachineArgs value) {
        return new JAXBElement<GetInfoForMachineArgs>(_GetPolicyAndRPInfoForMachineMachineArgs_QNAME, GetInfoForMachineArgs.class, GetPolicyAndRPInfoForMachine.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfRecoveryPointInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetAllRPForDSResult", scope = GetAllRPForDSResponse.class)
    public JAXBElement<ArrayOfRecoveryPointInfoEx> createGetAllRPForDSResponseGetAllRPForDSResult(ArrayOfRecoveryPointInfoEx value) {
        return new JAXBElement<ArrayOfRecoveryPointInfoEx>(_GetAllRPForDSResponseGetAllRPForDSResult_QNAME, ArrayOfRecoveryPointInfoEx.class, GetAllRPForDSResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "WriteEncryptionKeysResult", scope = org.tempuri.WriteEncryptionKeysResponse.class)
    public JAXBElement<com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysResponse> createWriteEncryptionKeysResponseWriteEncryptionKeysResult(com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysResponse value) {
        return new JAXBElement<com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysResponse>(_WriteEncryptionKeysResponseWriteEncryptionKeysResult_QNAME, com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysResponse.class, org.tempuri.WriteEncryptionKeysResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetInfoForMachineArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "machineArgs", scope = GetAllPolicyIds.class)
    public JAXBElement<GetInfoForMachineArgs> createGetAllPolicyIdsMachineArgs(GetInfoForMachineArgs value) {
        return new JAXBElement<GetInfoForMachineArgs>(_GetPolicyAndRPInfoForMachineMachineArgs_QNAME, GetInfoForMachineArgs.class, GetAllPolicyIds.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetAllPoliciesResult", scope = GetAllPoliciesResponse.class)
    public JAXBElement<ArrayOfGetPolicyInfoArgs> createGetAllPoliciesResponseGetAllPoliciesResult(ArrayOfGetPolicyInfoArgs value) {
        return new JAXBElement<ArrayOfGetPolicyInfoArgs>(_GetAllPoliciesResponseGetAllPoliciesResult_QNAME, ArrayOfGetPolicyInfoArgs.class, GetAllPoliciesResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "rpInfo", scope = AddRPInfo.class)
    public JAXBElement<RecoveryPointInfo> createAddRPInfoRpInfo(RecoveryPointInfo value) {
        return new JAXBElement<RecoveryPointInfo>(_AddRPInfoRpInfo_QNAME, RecoveryPointInfo.class, AddRPInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfoResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetAllRecoveryPointsForMachineResult", scope = GetAllRecoveryPointsForMachineResponse.class)
    public JAXBElement<RecoveryPointInfoResponse> createGetAllRecoveryPointsForMachineResponseGetAllRecoveryPointsForMachineResult(RecoveryPointInfoResponse value) {
        return new JAXBElement<RecoveryPointInfoResponse>(_GetAllRecoveryPointsForMachineResponseGetAllRecoveryPointsForMachineResult_QNAME, RecoveryPointInfoResponse.class, GetAllRecoveryPointsForMachineResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetInfoForMachineArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "machineArgs", scope = GetAllRecoveryPointsForMachine.class)
    public JAXBElement<GetInfoForMachineArgs> createGetAllRecoveryPointsForMachineMachineArgs(GetInfoForMachineArgs value) {
        return new JAXBElement<GetInfoForMachineArgs>(_GetPolicyAndRPInfoForMachineMachineArgs_QNAME, GetInfoForMachineArgs.class, GetAllRecoveryPointsForMachine.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link SetLastAccessTimeForRPArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "rpArgs", scope = SetLastAccessTimeForRP.class)
    public JAXBElement<SetLastAccessTimeForRPArgs> createSetLastAccessTimeForRPRpArgs(SetLastAccessTimeForRPArgs value) {
        return new JAXBElement<SetLastAccessTimeForRPArgs>(_SetLastAccessTimeForRPRpArgs_QNAME, SetLastAccessTimeForRPArgs.class, SetLastAccessTimeForRP.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfEncryptionKeyEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetAllEncryptionKeysResult", scope = GetAllEncryptionKeysResponse.class)
    public JAXBElement<ArrayOfEncryptionKeyEx> createGetAllEncryptionKeysResponseGetAllEncryptionKeysResult(ArrayOfEncryptionKeyEx value) {
        return new JAXBElement<ArrayOfEncryptionKeyEx>(_GetAllEncryptionKeysResponseGetAllEncryptionKeysResult_QNAME, ArrayOfEncryptionKeyEx.class, GetAllEncryptionKeysResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetInfoForMachineArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "machineArgs", scope = GetAllPoliciesForMachine.class)
    public JAXBElement<GetInfoForMachineArgs> createGetAllPoliciesForMachineMachineArgs(GetInfoForMachineArgs value) {
        return new JAXBElement<GetInfoForMachineArgs>(_GetPolicyAndRPInfoForMachineMachineArgs_QNAME, GetInfoForMachineArgs.class, GetAllPoliciesForMachine.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DeletePolicyInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "deletePolicyInfo", scope = DeletePolicyForMachine.class)
    public JAXBElement<DeletePolicyInfoArgs> createDeletePolicyForMachineDeletePolicyInfo(DeletePolicyInfoArgs value) {
        return new JAXBElement<DeletePolicyInfoArgs>(_DeletePolicyForMachineDeletePolicyInfo_QNAME, DeletePolicyInfoArgs.class, DeletePolicyForMachine.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetInfoForMachineArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "machineArgs", scope = GetAllRecoverableDSForMachine.class)
    public JAXBElement<GetInfoForMachineArgs> createGetAllRecoverableDSForMachineMachineArgs(GetInfoForMachineArgs value) {
        return new JAXBElement<GetInfoForMachineArgs>(_GetPolicyAndRPInfoForMachineMachineArgs_QNAME, GetInfoForMachineArgs.class, GetAllRecoverableDSForMachine.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DeletePolicyInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "deletePolicyInfo", scope = DeletePolicy.class)
    public JAXBElement<DeletePolicyInfoArgs> createDeletePolicyDeletePolicyInfo(DeletePolicyInfoArgs value) {
        return new JAXBElement<DeletePolicyInfoArgs>(_DeletePolicyForMachineDeletePolicyInfo_QNAME, DeletePolicyInfoArgs.class, DeletePolicy.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetPoliciesInfoForDsIdsResult", scope = GetPoliciesInfoForDsIdsResponse.class)
    public JAXBElement<ArrayOfGetPolicyInfoArgs> createGetPoliciesInfoForDsIdsResponseGetPoliciesInfoForDsIdsResult(ArrayOfGetPolicyInfoArgs value) {
        return new JAXBElement<ArrayOfGetPolicyInfoArgs>(_GetPoliciesInfoForDsIdsResponseGetPoliciesInfoForDsIdsResult_QNAME, ArrayOfGetPolicyInfoArgs.class, GetPoliciesInfoForDsIdsResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetReplicaArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "replicaId", scope = GetReplica.class)
    public JAXBElement<GetReplicaArgs> createGetReplicaReplicaId(GetReplicaArgs value) {
        return new JAXBElement<GetReplicaArgs>(_GetReplicaReplicaId_QNAME, GetReplicaArgs.class, GetReplica.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityId }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "AddRPSetInfoResult", scope = AddRPSetInfoResponse.class)
    public JAXBElement<EntityId> createAddRPSetInfoResponseAddRPSetInfoResult(EntityId value) {
        return new JAXBElement<EntityId>(_AddRPSetInfoResponseAddRPSetInfoResult_QNAME, EntityId.class, AddRPSetInfoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfDataSourceInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetDataSourcesInfoResult", scope = GetDataSourcesInfoResponse.class)
    public JAXBElement<ArrayOfDataSourceInfoEx> createGetDataSourcesInfoResponseGetDataSourcesInfoResult(ArrayOfDataSourceInfoEx value) {
        return new JAXBElement<ArrayOfDataSourceInfoEx>(_GetDataSourcesInfoResponseGetDataSourcesInfoResult_QNAME, ArrayOfDataSourceInfoEx.class, GetDataSourcesInfoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfGetRPVolumeReplicaMapResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetRPVolumeReplicaMapInfoResult", scope = GetRPVolumeReplicaMapInfoResponse.class)
    public JAXBElement<ArrayOfGetRPVolumeReplicaMapResponse> createGetRPVolumeReplicaMapInfoResponseGetRPVolumeReplicaMapInfoResult(ArrayOfGetRPVolumeReplicaMapResponse value) {
        return new JAXBElement<ArrayOfGetRPVolumeReplicaMapResponse>(_GetRPVolumeReplicaMapInfoResponseGetRPVolumeReplicaMapInfoResult_QNAME, ArrayOfGetRPVolumeReplicaMapResponse.class, GetRPVolumeReplicaMapInfoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetInfoForMachineArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "dataSourceArgs", scope = GetAllRecoveryPointsForDataSource.class)
    public JAXBElement<GetInfoForMachineArgs> createGetAllRecoveryPointsForDataSourceDataSourceArgs(GetInfoForMachineArgs value) {
        return new JAXBElement<GetInfoForMachineArgs>(_GetAllRecoveryPointsForDataSourceDataSourceArgs_QNAME, GetInfoForMachineArgs.class, GetAllRecoveryPointsForDataSource.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetInfoForMachineArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "machineArgs", scope = GetAllPolicies.class)
    public JAXBElement<GetInfoForMachineArgs> createGetAllPoliciesMachineArgs(GetInfoForMachineArgs value) {
        return new JAXBElement<GetInfoForMachineArgs>(_GetPolicyAndRPInfoForMachineMachineArgs_QNAME, GetInfoForMachineArgs.class, GetAllPolicies.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DeleteRecoveryPointsInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "dsInfo", scope = DeleteRecoveryPoints.class)
    public JAXBElement<DeleteRecoveryPointsInfoArgs> createDeleteRecoveryPointsDsInfo(DeleteRecoveryPointsInfoArgs value) {
        return new JAXBElement<DeleteRecoveryPointsInfoArgs>(_DeleteRecoveryPointsDsInfo_QNAME, DeleteRecoveryPointsInfoArgs.class, DeleteRecoveryPoints.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointSetInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "rpSetInfo", scope = AddRPSetInfo.class)
    public JAXBElement<RecoveryPointSetInfo> createAddRPSetInfoRpSetInfo(RecoveryPointSetInfo value) {
        return new JAXBElement<RecoveryPointSetInfo>(_AddRPSetInfoRpSetInfo_QNAME, RecoveryPointSetInfo.class, AddRPSetInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfEntityId }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://tempuri.org/", name = "GetAllPolicyIdsResult", scope = GetAllPolicyIdsResponse.class)
    public JAXBElement<ArrayOfEntityId> createGetAllPolicyIdsResponseGetAllPolicyIdsResult(ArrayOfEntityId value) {
        return new JAXBElement<ArrayOfEntityId>(_GetAllPolicyIdsResponseGetAllPolicyIdsResult_QNAME, ArrayOfEntityId.class, GetAllPolicyIdsResponse.class, value);
    }

}
