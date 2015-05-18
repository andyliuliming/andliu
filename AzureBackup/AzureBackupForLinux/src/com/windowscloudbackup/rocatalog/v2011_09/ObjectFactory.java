
package com.windowscloudbackup.rocatalog.v2011_09;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.datatype.XMLGregorianCalendar;
import javax.xml.namespace.QName;
import com.microsoft.schemas._2003._10.serialization.arrays.ArrayOfdateTime;
import com.microsoft.schemas._2003._10.serialization.arrays.ArrayOfstring;
import com.windowscloudbackup.cloudcommon.v2011_09.ArrayOfEntityIdV201109;
import com.windowscloudbackup.cloudcommon.v2011_09.ClientStampV201109;
import com.windowscloudbackup.cloudcommon.v2011_09.EntityIdV201109;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.windowscloudbackup.rocatalog.v2011_09 package. 
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

    private final static QName _UpdatePolicyInfoArgsV201109SchedulePolicy_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "SchedulePolicy");
    private final static QName _UpdatePolicyInfoArgsV201109RetentionPolicy_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RetentionPolicy");
    private final static QName _UpdatePolicyInfoArgsV201109DataSources_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DataSources");
    private final static QName _DataSourceInfoExV201304_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DataSourceInfoEx_V2013_04");
    private final static QName _ReplicaInfoExV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ReplicaInfoEx_V2011_09");
    private final static QName _GetInfoForDataSourceArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetInfoForDataSourceArgs_V2011_09");
    private final static QName _DeletePolicyInfoArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DeletePolicyInfoArgs");
    private final static QName _DataSourceInfoExV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DataSourceInfoEx_V2011_09");
    private final static QName _DeleteRecoveryPointsInfoArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DeleteRecoveryPointsInfoArgs");
    private final static QName _ArrayOfAddDsVolumeReplicaMap_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfAddDsVolumeReplicaMap");
    private final static QName _EncryptionKeyV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "EncryptionKey_V2011_09");
    private final static QName _ReadMachineEncryptionKeyRequestV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ReadMachineEncryptionKeyRequest_V2011_09");
    private final static QName _GetDsVolumeReplicaMapResponseV201304_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetDsVolumeReplicaMapResponse_V2013_04");
    private final static QName _WriteMachineEncryptionKeysRequest_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "WriteMachineEncryptionKeysRequest");
    private final static QName _ArrayOfMetadataSetNameValueInfoEx_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfMetadataSetNameValueInfoEx");
    private final static QName _ArrayOfGetPolicyInfoArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfGetPolicyInfoArgs_V2011_09");
    private final static QName _DataSourceInfo_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DataSourceInfo");
    private final static QName _DeleteRecoveryPointsInfoArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DeleteRecoveryPointsInfoArgs_V2011_09");
    private final static QName _AddDsVolumeReplicaMap_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "AddDsVolumeReplicaMap");
    private final static QName _ArrayOfGetDsVolumeReplicaMap_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfGetDsVolumeReplicaMap");
    private final static QName _ROCatalogRequestContext_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ROCatalogRequestContext");
    private final static QName _ArrayOfDataSourceInfoExV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfDataSourceInfoEx_V2011_09");
    private final static QName _ArrayOfChildPolicyExV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfChildPolicyEx_V2011_09");
    private final static QName _ReadEncryptionKeyRequest_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ReadEncryptionKeyRequest");
    private final static QName _ArrayOfEncryptionKeyExV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfEncryptionKeyEx_V2011_09");
    private final static QName _UpdateDatasourceVolumeClientStampArgsV201201_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "UpdateDatasourceVolumeClientStampArgs_V2012_01");
    private final static QName _VolumeInfoEx_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "VolumeInfoEx");
    private final static QName _GetReplicaArgsV201404_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetReplicaArgs_V2014_04");
    private final static QName _UpdateReplicaClientStampArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "UpdateReplicaClientStampArgs_V2011_09");
    private final static QName _ReplicaInfoExV201304_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ReplicaInfoEx_V2013_04");
    private final static QName _AddMDSetArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "AddMDSetArgs");
    private final static QName _ArrayOfEncryptionKeyEx_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfEncryptionKeyEx");
    private final static QName _MetadataSetNameValueInfoExV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "MetadataSetNameValueInfoEx_V2011_09");
    private final static QName _UpdatePolicyInfoArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "UpdatePolicyInfoArgs");
    private final static QName _ChildPolicyV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ChildPolicy_V2011_09");
    private final static QName _WriteEncryptionKeysRequest_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "WriteEncryptionKeysRequest");
    private final static QName _RecoveryPointInfoResponseV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointInfoResponse_V2011_09");
    private final static QName _RecoveryPointInfoExV201409_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointInfoEx_V2014_09");
    private final static QName _AddRPVolumeReplicaMapV201409_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "AddRPVolumeReplicaMap_V2014_09");
    private final static QName _MetadataSetNameValueInfoEx_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "MetadataSetNameValueInfoEx");
    private final static QName _ArrayOfMetadataSetNameValueInfoExV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfMetadataSetNameValueInfoEx_V2011_09");
    private final static QName _RecoveryPointInfoV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointInfo_V2011_09");
    private final static QName _VolumeInfo_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "VolumeInfo");
    private final static QName _WriteEncryptionKeysResponse_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "WriteEncryptionKeysResponse");
    private final static QName _ArrayOfDataSourceInfoEx_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfDataSourceInfoEx");
    private final static QName _EncryptionKeyEx_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "EncryptionKeyEx");
    private final static QName _GetRPVolumeReplicaMapResponseV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetRPVolumeReplicaMapResponse_V2011_09");
    private final static QName _RecoveryPointInfoExV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointInfoEx_V2011_09");
    private final static QName _ChildPolicy_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ChildPolicy");
    private final static QName _RecoveryPointSetInfoV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointSetInfo_V2011_09");
    private final static QName _ReplicaInfo_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ReplicaInfo");
    private final static QName _ReadMachineEncryptionKeyRequest_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ReadMachineEncryptionKeyRequest");
    private final static QName _ROCatalogRequestContextV201212_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ROCatalogRequestContext_V2012_12");
    private final static QName _WriteMachineEncryptionKeysRequestV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "WriteMachineEncryptionKeysRequest_V2011_09");
    private final static QName _GetPolicyInfoArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetPolicyInfoArgs");
    private final static QName _GetReplicaArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetReplicaArgs");
    private final static QName _GetDsVolumeReplicaMap_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetDsVolumeReplicaMap");
    private final static QName _RequestContextV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RequestContext_V2011_09");
    private final static QName _ArrayOfRecoveryPointInfoEx_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfRecoveryPointInfoEx");
    private final static QName _EncryptionKeyExV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "EncryptionKeyEx_V2011_09");
    private final static QName _PolicyAndRPInfoResponseV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "PolicyAndRPInfoResponse_V2011_09");
    private final static QName _UpdateChildPolicy_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "UpdateChildPolicy");
    private final static QName _DataSourceInfoEx_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DataSourceInfoEx");
    private final static QName _UpdateChildPolicyV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "UpdateChildPolicy_V2011_09");
    private final static QName _MetadataSetNameValueInfoV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "MetadataSetNameValueInfo_V2011_09");
    private final static QName _GetInfoForMachineArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetInfoForMachineArgs_V2011_09");
    private final static QName _UpdatePolicyInfoArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "UpdatePolicyInfoArgs_V2011_09");
    private final static QName _ArrayOfAddRPVolumeReplicaMap_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfAddRPVolumeReplicaMap");
    private final static QName _AddPolicyArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "AddPolicyArgs_V2011_09");
    private final static QName _WriteEncryptionKeysResponseV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "WriteEncryptionKeysResponse_V2011_09");
    private final static QName _GetPolicyInfoArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetPolicyInfoArgs_V2011_09");
    private final static QName _AddMDSetAndMetadataNameValueArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "AddMDSetAndMetadataNameValueArgs");
    private final static QName _RecoveryPointSetInfo_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointSetInfo");
    private final static QName _VolumeInfoExV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "VolumeInfoEx_V2011_09");
    private final static QName _PolicyInfoBaseV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "PolicyInfoBase_V2011_09");
    private final static QName _ChildPolicyExV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ChildPolicyEx_V2011_09");
    private final static QName _AddRPVolumeReplicaMap_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "AddRPVolumeReplicaMap");
    private final static QName _RequestContext_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RequestContext");
    private final static QName _PolicyInfoBase_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "PolicyInfoBase");
    private final static QName _DeletePolicyInfoArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DeletePolicyInfoArgs_V2011_09");
    private final static QName _AddMDSetArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "AddMDSetArgs_V2011_09");
    private final static QName _AddRPVolumeReplicaMapV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "AddRPVolumeReplicaMap_V2011_09");
    private final static QName _ReplicaInfoV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ReplicaInfo_V2011_09");
    private final static QName _GetReplicaArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetReplicaArgs_V2011_09");
    private final static QName _GetDsVolumeReplicaMapV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetDsVolumeReplicaMap_V2011_09");
    private final static QName _AddMDSetAndMetadataNameValueArgsV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "AddMDSetAndMetadataNameValueArgs_V2011_09");
    private final static QName _UpdateDataSourceInfoV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "UpdateDataSourceInfo_V2011_09");
    private final static QName _ReplicaInfoEx_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ReplicaInfoEx");
    private final static QName _UpdateDatasourceVolumeClientStampArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "UpdateDatasourceVolumeClientStampArgs");
    private final static QName _GetInfoForMachineArgsV201205_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetInfoForMachineArgs_V2012_05");
    private final static QName _UpdateReplicaClientStampArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "UpdateReplicaClientStampArgs");
    private final static QName _AddDsVolumeReplicaMapV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "AddDsVolumeReplicaMap_V2011_09");
    private final static QName _PolicyAndRPInfoResponse_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "PolicyAndRPInfoResponse");
    private final static QName _DataSourceInfoV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DataSourceInfo_V2011_09");
    private final static QName _UpdateDataSourceInfo_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "UpdateDataSourceInfo");
    private final static QName _AddPolicyArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "AddPolicyArgs");
    private final static QName _ArrayOfUpdateDataSourceInfoV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfUpdateDataSourceInfo_V2011_09");
    private final static QName _MetadataSetNameValueInfo_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "MetadataSetNameValueInfo");
    private final static QName _RecoveryPointInfoResponse_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointInfoResponse");
    private final static QName _GetRPVolumeReplicaMapResponse_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetRPVolumeReplicaMapResponse");
    private final static QName _EncryptionKey_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "EncryptionKey");
    private final static QName _RecoveryPointInfoEx_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointInfoEx");
    private final static QName _GetDsArrayInfoArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetDsArrayInfoArgs");
    private final static QName _GetReplicaArgsV201304_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetReplicaArgs_V2013_04");
    private final static QName _ArrayOfDataSourceInfoV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfDataSourceInfo_V2011_09");
    private final static QName _GetInfoForMachineArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetInfoForMachineArgs");
    private final static QName _GetDsArrayInfoArgsV201205_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "GetDsArrayInfoArgs_V2012_05");
    private final static QName _ChildPolicyEx_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ChildPolicyEx");
    private final static QName _ArrayOfGetPolicyInfoArgs_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfGetPolicyInfoArgs");
    private final static QName _ArrayOfGetRPVolumeReplicaMapResponse_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ArrayOfGetRPVolumeReplicaMapResponse");
    private final static QName _VolumeInfoV201109_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "VolumeInfo_V2011_09");
    private final static QName _ReplicaInfoExV201404_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ReplicaInfoEx_V2014_04");
    private final static QName _RecoveryPointInfo_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointInfo");
    private final static QName _ReplicaInfoV201109MetadataSetId_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "MetadataSetId");
    private final static QName _ReplicaInfoExV201109LogicalGCTime_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "LogicalGCTime");
    private final static QName _ReplicaInfoExV201109PhysicalGCTime_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "PhysicalGCTime");
    private final static QName _ReplicaInfoExV201109ClientStamp_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ClientStamp");
    private final static QName _UpdateDataSourceInfoV201109PolicyId_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "PolicyId");
    private final static QName _DataSourceInfoFriendlyName_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "FriendlyName");
    private final static QName _AddPolicyArgsMachineName_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "MachineName");
    private final static QName _AddMDSetArgsV201109MetadataSet_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "MetadataSet");
    private final static QName _RecoveryPointInfoDataSourceVersion_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DataSourceVersion");
    private final static QName _RecoveryPointInfoExV201109RecoveryPointSetId_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointSetId");
    private final static QName _RecoveryPointInfoExV201109DependentRecoveryPointId_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DependentRecoveryPointId");
    private final static QName _PolicyAndRPInfoResponseV201109PolicyInfo_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "PolicyInfo");
    private final static QName _PolicyAndRPInfoResponseV201109RPInfo_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RPInfo");
    private final static QName _RecoveryPointInfoResponseDataSourceNames_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DataSourceNames");
    private final static QName _RecoveryPointInfoResponseRecoveryPointInTimes_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointInTimes");
    private final static QName _RecoveryPointInfoResponseV201109RecoveryPointIds_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "RecoveryPointIds");
    private final static QName _DataSourceInfoExFileCatalogStampUri_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "FileCatalogStampUri");
    private final static QName _ChildPolicyPolicyXml_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "PolicyXml");
    private final static QName _GetReplicaArgsV201109DatasourceId_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "DatasourceId");
    private final static QName _GetReplicaArgsV201109ContainerId_QNAME = new QName("http://windowscloudbackup.com/ROCatalog/V2011_09", "ContainerId");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.windowscloudbackup.rocatalog.v2011_09
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ArrayOfGetRPVolumeReplicaMapResponse }
     * 
     */
    public ArrayOfGetRPVolumeReplicaMapResponse createArrayOfGetRPVolumeReplicaMapResponse() {
        return new ArrayOfGetRPVolumeReplicaMapResponse();
    }

    /**
     * Create an instance of {@link ArrayOfMetadataSetNameValueInfoEx }
     * 
     */
    public ArrayOfMetadataSetNameValueInfoEx createArrayOfMetadataSetNameValueInfoEx() {
        return new ArrayOfMetadataSetNameValueInfoEx();
    }

    /**
     * Create an instance of {@link GetInfoForMachineArgs }
     * 
     */
    public GetInfoForMachineArgs createGetInfoForMachineArgs() {
        return new GetInfoForMachineArgs();
    }

    /**
     * Create an instance of {@link ArrayOfGetPolicyInfoArgs }
     * 
     */
    public ArrayOfGetPolicyInfoArgs createArrayOfGetPolicyInfoArgs() {
        return new ArrayOfGetPolicyInfoArgs();
    }

    /**
     * Create an instance of {@link GetReplicaArgs }
     * 
     */
    public GetReplicaArgs createGetReplicaArgs() {
        return new GetReplicaArgs();
    }

    /**
     * Create an instance of {@link AddMDSetAndMetadataNameValueArgs }
     * 
     */
    public AddMDSetAndMetadataNameValueArgs createAddMDSetAndMetadataNameValueArgs() {
        return new AddMDSetAndMetadataNameValueArgs();
    }

    /**
     * Create an instance of {@link UpdatePolicyInfoArgs }
     * 
     */
    public UpdatePolicyInfoArgs createUpdatePolicyInfoArgs() {
        return new UpdatePolicyInfoArgs();
    }

    /**
     * Create an instance of {@link WriteEncryptionKeysResponse }
     * 
     */
    public WriteEncryptionKeysResponse createWriteEncryptionKeysResponse() {
        return new WriteEncryptionKeysResponse();
    }

    /**
     * Create an instance of {@link DeletePolicyInfoArgs }
     * 
     */
    public DeletePolicyInfoArgs createDeletePolicyInfoArgs() {
        return new DeletePolicyInfoArgs();
    }

    /**
     * Create an instance of {@link ReadEncryptionKeyRequest }
     * 
     */
    public ReadEncryptionKeyRequest createReadEncryptionKeyRequest() {
        return new ReadEncryptionKeyRequest();
    }

    /**
     * Create an instance of {@link UpdateReplicaClientStampArgs }
     * 
     */
    public UpdateReplicaClientStampArgs createUpdateReplicaClientStampArgs() {
        return new UpdateReplicaClientStampArgs();
    }

    /**
     * Create an instance of {@link UpdateDatasourceVolumeClientStampArgs }
     * 
     */
    public UpdateDatasourceVolumeClientStampArgs createUpdateDatasourceVolumeClientStampArgs() {
        return new UpdateDatasourceVolumeClientStampArgs();
    }

    /**
     * Create an instance of {@link RecoveryPointInfo }
     * 
     */
    public RecoveryPointInfo createRecoveryPointInfo() {
        return new RecoveryPointInfo();
    }

    /**
     * Create an instance of {@link RecoveryPointInfoEx }
     * 
     */
    public RecoveryPointInfoEx createRecoveryPointInfoEx() {
        return new RecoveryPointInfoEx();
    }

    /**
     * Create an instance of {@link EncryptionKeyEx }
     * 
     */
    public EncryptionKeyEx createEncryptionKeyEx() {
        return new EncryptionKeyEx();
    }

    /**
     * Create an instance of {@link RecoveryPointInfoResponse }
     * 
     */
    public RecoveryPointInfoResponse createRecoveryPointInfoResponse() {
        return new RecoveryPointInfoResponse();
    }

    /**
     * Create an instance of {@link DataSourceInfoEx }
     * 
     */
    public DataSourceInfoEx createDataSourceInfoEx() {
        return new DataSourceInfoEx();
    }

    /**
     * Create an instance of {@link PolicyAndRPInfoResponse }
     * 
     */
    public PolicyAndRPInfoResponse createPolicyAndRPInfoResponse() {
        return new PolicyAndRPInfoResponse();
    }

    /**
     * Create an instance of {@link AddMDSetArgs }
     * 
     */
    public AddMDSetArgs createAddMDSetArgs() {
        return new AddMDSetArgs();
    }

    /**
     * Create an instance of {@link ArrayOfRecoveryPointInfoEx }
     * 
     */
    public ArrayOfRecoveryPointInfoEx createArrayOfRecoveryPointInfoEx() {
        return new ArrayOfRecoveryPointInfoEx();
    }

    /**
     * Create an instance of {@link ArrayOfAddRPVolumeReplicaMap }
     * 
     */
    public ArrayOfAddRPVolumeReplicaMap createArrayOfAddRPVolumeReplicaMap() {
        return new ArrayOfAddRPVolumeReplicaMap();
    }

    /**
     * Create an instance of {@link ArrayOfAddDsVolumeReplicaMap }
     * 
     */
    public ArrayOfAddDsVolumeReplicaMap createArrayOfAddDsVolumeReplicaMap() {
        return new ArrayOfAddDsVolumeReplicaMap();
    }

    /**
     * Create an instance of {@link ArrayOfDataSourceInfoEx }
     * 
     */
    public ArrayOfDataSourceInfoEx createArrayOfDataSourceInfoEx() {
        return new ArrayOfDataSourceInfoEx();
    }

    /**
     * Create an instance of {@link AddPolicyArgs }
     * 
     */
    public AddPolicyArgs createAddPolicyArgs() {
        return new AddPolicyArgs();
    }

    /**
     * Create an instance of {@link RecoveryPointSetInfo }
     * 
     */
    public RecoveryPointSetInfo createRecoveryPointSetInfo() {
        return new RecoveryPointSetInfo();
    }

    /**
     * Create an instance of {@link ReplicaInfoEx }
     * 
     */
    public ReplicaInfoEx createReplicaInfoEx() {
        return new ReplicaInfoEx();
    }

    /**
     * Create an instance of {@link ArrayOfEncryptionKeyEx }
     * 
     */
    public ArrayOfEncryptionKeyEx createArrayOfEncryptionKeyEx() {
        return new ArrayOfEncryptionKeyEx();
    }

    /**
     * Create an instance of {@link WriteEncryptionKeysRequest }
     * 
     */
    public WriteEncryptionKeysRequest createWriteEncryptionKeysRequest() {
        return new WriteEncryptionKeysRequest();
    }

    /**
     * Create an instance of {@link GetDsArrayInfoArgs }
     * 
     */
    public GetDsArrayInfoArgs createGetDsArrayInfoArgs() {
        return new GetDsArrayInfoArgs();
    }

    /**
     * Create an instance of {@link DeleteRecoveryPointsInfoArgs }
     * 
     */
    public DeleteRecoveryPointsInfoArgs createDeleteRecoveryPointsInfoArgs() {
        return new DeleteRecoveryPointsInfoArgs();
    }

    /**
     * Create an instance of {@link ArrayOfGetDsVolumeReplicaMap }
     * 
     */
    public ArrayOfGetDsVolumeReplicaMap createArrayOfGetDsVolumeReplicaMap() {
        return new ArrayOfGetDsVolumeReplicaMap();
    }

    /**
     * Create an instance of {@link GetInfoForMachineArgsV201205 }
     * 
     */
    public GetInfoForMachineArgsV201205 createGetInfoForMachineArgsV201205() {
        return new GetInfoForMachineArgsV201205();
    }

    /**
     * Create an instance of {@link UpdateDataSourceInfoV201109 }
     * 
     */
    public UpdateDataSourceInfoV201109 createUpdateDataSourceInfoV201109() {
        return new UpdateDataSourceInfoV201109();
    }

    /**
     * Create an instance of {@link AddMDSetAndMetadataNameValueArgsV201109 }
     * 
     */
    public AddMDSetAndMetadataNameValueArgsV201109 createAddMDSetAndMetadataNameValueArgsV201109() {
        return new AddMDSetAndMetadataNameValueArgsV201109();
    }

    /**
     * Create an instance of {@link GetDsVolumeReplicaMapV201109 }
     * 
     */
    public GetDsVolumeReplicaMapV201109 createGetDsVolumeReplicaMapV201109() {
        return new GetDsVolumeReplicaMapV201109();
    }

    /**
     * Create an instance of {@link GetReplicaArgsV201109 }
     * 
     */
    public GetReplicaArgsV201109 createGetReplicaArgsV201109() {
        return new GetReplicaArgsV201109();
    }

    /**
     * Create an instance of {@link AddDsVolumeReplicaMapV201109 }
     * 
     */
    public AddDsVolumeReplicaMapV201109 createAddDsVolumeReplicaMapV201109() {
        return new AddDsVolumeReplicaMapV201109();
    }

    /**
     * Create an instance of {@link UpdateDataSourceInfo }
     * 
     */
    public UpdateDataSourceInfo createUpdateDataSourceInfo() {
        return new UpdateDataSourceInfo();
    }

    /**
     * Create an instance of {@link DataSourceInfoV201109 }
     * 
     */
    public DataSourceInfoV201109 createDataSourceInfoV201109() {
        return new DataSourceInfoV201109();
    }

    /**
     * Create an instance of {@link MetadataSetNameValueInfo }
     * 
     */
    public MetadataSetNameValueInfo createMetadataSetNameValueInfo() {
        return new MetadataSetNameValueInfo();
    }

    /**
     * Create an instance of {@link ArrayOfUpdateDataSourceInfoV201109 }
     * 
     */
    public ArrayOfUpdateDataSourceInfoV201109 createArrayOfUpdateDataSourceInfoV201109() {
        return new ArrayOfUpdateDataSourceInfoV201109();
    }

    /**
     * Create an instance of {@link EncryptionKey }
     * 
     */
    public EncryptionKey createEncryptionKey() {
        return new EncryptionKey();
    }

    /**
     * Create an instance of {@link GetRPVolumeReplicaMapResponse }
     * 
     */
    public GetRPVolumeReplicaMapResponse createGetRPVolumeReplicaMapResponse() {
        return new GetRPVolumeReplicaMapResponse();
    }

    /**
     * Create an instance of {@link GetDsArrayInfoArgsV201205 }
     * 
     */
    public GetDsArrayInfoArgsV201205 createGetDsArrayInfoArgsV201205() {
        return new GetDsArrayInfoArgsV201205();
    }

    /**
     * Create an instance of {@link GetReplicaArgsV201304 }
     * 
     */
    public GetReplicaArgsV201304 createGetReplicaArgsV201304() {
        return new GetReplicaArgsV201304();
    }

    /**
     * Create an instance of {@link ArrayOfDataSourceInfoV201109 }
     * 
     */
    public ArrayOfDataSourceInfoV201109 createArrayOfDataSourceInfoV201109() {
        return new ArrayOfDataSourceInfoV201109();
    }

    /**
     * Create an instance of {@link ChildPolicyEx }
     * 
     */
    public ChildPolicyEx createChildPolicyEx() {
        return new ChildPolicyEx();
    }

    /**
     * Create an instance of {@link ReplicaInfoExV201404 }
     * 
     */
    public ReplicaInfoExV201404 createReplicaInfoExV201404() {
        return new ReplicaInfoExV201404();
    }

    /**
     * Create an instance of {@link VolumeInfoV201109 }
     * 
     */
    public VolumeInfoV201109 createVolumeInfoV201109() {
        return new VolumeInfoV201109();
    }

    /**
     * Create an instance of {@link RequestContextV201109 }
     * 
     */
    public RequestContextV201109 createRequestContextV201109() {
        return new RequestContextV201109();
    }

    /**
     * Create an instance of {@link PolicyAndRPInfoResponseV201109 }
     * 
     */
    public PolicyAndRPInfoResponseV201109 createPolicyAndRPInfoResponseV201109() {
        return new PolicyAndRPInfoResponseV201109();
    }

    /**
     * Create an instance of {@link EncryptionKeyExV201109 }
     * 
     */
    public EncryptionKeyExV201109 createEncryptionKeyExV201109() {
        return new EncryptionKeyExV201109();
    }

    /**
     * Create an instance of {@link GetInfoForMachineArgsV201109 }
     * 
     */
    public GetInfoForMachineArgsV201109 createGetInfoForMachineArgsV201109() {
        return new GetInfoForMachineArgsV201109();
    }

    /**
     * Create an instance of {@link UpdatePolicyInfoArgsV201109 }
     * 
     */
    public UpdatePolicyInfoArgsV201109 createUpdatePolicyInfoArgsV201109() {
        return new UpdatePolicyInfoArgsV201109();
    }

    /**
     * Create an instance of {@link UpdateChildPolicyV201109 }
     * 
     */
    public UpdateChildPolicyV201109 createUpdateChildPolicyV201109() {
        return new UpdateChildPolicyV201109();
    }

    /**
     * Create an instance of {@link MetadataSetNameValueInfoV201109 }
     * 
     */
    public MetadataSetNameValueInfoV201109 createMetadataSetNameValueInfoV201109() {
        return new MetadataSetNameValueInfoV201109();
    }

    /**
     * Create an instance of {@link UpdateChildPolicy }
     * 
     */
    public UpdateChildPolicy createUpdateChildPolicy() {
        return new UpdateChildPolicy();
    }

    /**
     * Create an instance of {@link GetPolicyInfoArgsV201109 }
     * 
     */
    public GetPolicyInfoArgsV201109 createGetPolicyInfoArgsV201109() {
        return new GetPolicyInfoArgsV201109();
    }

    /**
     * Create an instance of {@link WriteEncryptionKeysResponseV201109 }
     * 
     */
    public WriteEncryptionKeysResponseV201109 createWriteEncryptionKeysResponseV201109() {
        return new WriteEncryptionKeysResponseV201109();
    }

    /**
     * Create an instance of {@link AddPolicyArgsV201109 }
     * 
     */
    public AddPolicyArgsV201109 createAddPolicyArgsV201109() {
        return new AddPolicyArgsV201109();
    }

    /**
     * Create an instance of {@link AddRPVolumeReplicaMap }
     * 
     */
    public AddRPVolumeReplicaMap createAddRPVolumeReplicaMap() {
        return new AddRPVolumeReplicaMap();
    }

    /**
     * Create an instance of {@link ChildPolicyExV201109 }
     * 
     */
    public ChildPolicyExV201109 createChildPolicyExV201109() {
        return new ChildPolicyExV201109();
    }

    /**
     * Create an instance of {@link PolicyInfoBaseV201109 }
     * 
     */
    public PolicyInfoBaseV201109 createPolicyInfoBaseV201109() {
        return new PolicyInfoBaseV201109();
    }

    /**
     * Create an instance of {@link VolumeInfoExV201109 }
     * 
     */
    public VolumeInfoExV201109 createVolumeInfoExV201109() {
        return new VolumeInfoExV201109();
    }

    /**
     * Create an instance of {@link RequestContext }
     * 
     */
    public RequestContext createRequestContext() {
        return new RequestContext();
    }

    /**
     * Create an instance of {@link DeletePolicyInfoArgsV201109 }
     * 
     */
    public DeletePolicyInfoArgsV201109 createDeletePolicyInfoArgsV201109() {
        return new DeletePolicyInfoArgsV201109();
    }

    /**
     * Create an instance of {@link PolicyInfoBase }
     * 
     */
    public PolicyInfoBase createPolicyInfoBase() {
        return new PolicyInfoBase();
    }

    /**
     * Create an instance of {@link ReplicaInfoV201109 }
     * 
     */
    public ReplicaInfoV201109 createReplicaInfoV201109() {
        return new ReplicaInfoV201109();
    }

    /**
     * Create an instance of {@link AddRPVolumeReplicaMapV201109 }
     * 
     */
    public AddRPVolumeReplicaMapV201109 createAddRPVolumeReplicaMapV201109() {
        return new AddRPVolumeReplicaMapV201109();
    }

    /**
     * Create an instance of {@link AddMDSetArgsV201109 }
     * 
     */
    public AddMDSetArgsV201109 createAddMDSetArgsV201109() {
        return new AddMDSetArgsV201109();
    }

    /**
     * Create an instance of {@link RecoveryPointInfoExV201409 }
     * 
     */
    public RecoveryPointInfoExV201409 createRecoveryPointInfoExV201409() {
        return new RecoveryPointInfoExV201409();
    }

    /**
     * Create an instance of {@link RecoveryPointInfoResponseV201109 }
     * 
     */
    public RecoveryPointInfoResponseV201109 createRecoveryPointInfoResponseV201109() {
        return new RecoveryPointInfoResponseV201109();
    }

    /**
     * Create an instance of {@link ChildPolicyV201109 }
     * 
     */
    public ChildPolicyV201109 createChildPolicyV201109() {
        return new ChildPolicyV201109();
    }

    /**
     * Create an instance of {@link MetadataSetNameValueInfoEx }
     * 
     */
    public MetadataSetNameValueInfoEx createMetadataSetNameValueInfoEx() {
        return new MetadataSetNameValueInfoEx();
    }

    /**
     * Create an instance of {@link AddRPVolumeReplicaMapV201409 }
     * 
     */
    public AddRPVolumeReplicaMapV201409 createAddRPVolumeReplicaMapV201409() {
        return new AddRPVolumeReplicaMapV201409();
    }

    /**
     * Create an instance of {@link VolumeInfo }
     * 
     */
    public VolumeInfo createVolumeInfo() {
        return new VolumeInfo();
    }

    /**
     * Create an instance of {@link RecoveryPointInfoV201109 }
     * 
     */
    public RecoveryPointInfoV201109 createRecoveryPointInfoV201109() {
        return new RecoveryPointInfoV201109();
    }

    /**
     * Create an instance of {@link ArrayOfMetadataSetNameValueInfoExV201109 }
     * 
     */
    public ArrayOfMetadataSetNameValueInfoExV201109 createArrayOfMetadataSetNameValueInfoExV201109() {
        return new ArrayOfMetadataSetNameValueInfoExV201109();
    }

    /**
     * Create an instance of {@link ReplicaInfo }
     * 
     */
    public ReplicaInfo createReplicaInfo() {
        return new ReplicaInfo();
    }

    /**
     * Create an instance of {@link RecoveryPointSetInfoV201109 }
     * 
     */
    public RecoveryPointSetInfoV201109 createRecoveryPointSetInfoV201109() {
        return new RecoveryPointSetInfoV201109();
    }

    /**
     * Create an instance of {@link ChildPolicy }
     * 
     */
    public ChildPolicy createChildPolicy() {
        return new ChildPolicy();
    }

    /**
     * Create an instance of {@link RecoveryPointInfoExV201109 }
     * 
     */
    public RecoveryPointInfoExV201109 createRecoveryPointInfoExV201109() {
        return new RecoveryPointInfoExV201109();
    }

    /**
     * Create an instance of {@link GetRPVolumeReplicaMapResponseV201109 }
     * 
     */
    public GetRPVolumeReplicaMapResponseV201109 createGetRPVolumeReplicaMapResponseV201109() {
        return new GetRPVolumeReplicaMapResponseV201109();
    }

    /**
     * Create an instance of {@link WriteMachineEncryptionKeysRequestV201109 }
     * 
     */
    public WriteMachineEncryptionKeysRequestV201109 createWriteMachineEncryptionKeysRequestV201109() {
        return new WriteMachineEncryptionKeysRequestV201109();
    }

    /**
     * Create an instance of {@link ROCatalogRequestContextV201212 }
     * 
     */
    public ROCatalogRequestContextV201212 createROCatalogRequestContextV201212() {
        return new ROCatalogRequestContextV201212();
    }

    /**
     * Create an instance of {@link ReadMachineEncryptionKeyRequest }
     * 
     */
    public ReadMachineEncryptionKeyRequest createReadMachineEncryptionKeyRequest() {
        return new ReadMachineEncryptionKeyRequest();
    }

    /**
     * Create an instance of {@link GetPolicyInfoArgs }
     * 
     */
    public GetPolicyInfoArgs createGetPolicyInfoArgs() {
        return new GetPolicyInfoArgs();
    }

    /**
     * Create an instance of {@link GetDsVolumeReplicaMap }
     * 
     */
    public GetDsVolumeReplicaMap createGetDsVolumeReplicaMap() {
        return new GetDsVolumeReplicaMap();
    }

    /**
     * Create an instance of {@link DataSourceInfoExV201109 }
     * 
     */
    public DataSourceInfoExV201109 createDataSourceInfoExV201109() {
        return new DataSourceInfoExV201109();
    }

    /**
     * Create an instance of {@link GetInfoForDataSourceArgsV201109 }
     * 
     */
    public GetInfoForDataSourceArgsV201109 createGetInfoForDataSourceArgsV201109() {
        return new GetInfoForDataSourceArgsV201109();
    }

    /**
     * Create an instance of {@link ReplicaInfoExV201109 }
     * 
     */
    public ReplicaInfoExV201109 createReplicaInfoExV201109() {
        return new ReplicaInfoExV201109();
    }

    /**
     * Create an instance of {@link DataSourceInfoExV201304 }
     * 
     */
    public DataSourceInfoExV201304 createDataSourceInfoExV201304() {
        return new DataSourceInfoExV201304();
    }

    /**
     * Create an instance of {@link EncryptionKeyV201109 }
     * 
     */
    public EncryptionKeyV201109 createEncryptionKeyV201109() {
        return new EncryptionKeyV201109();
    }

    /**
     * Create an instance of {@link WriteMachineEncryptionKeysRequest }
     * 
     */
    public WriteMachineEncryptionKeysRequest createWriteMachineEncryptionKeysRequest() {
        return new WriteMachineEncryptionKeysRequest();
    }

    /**
     * Create an instance of {@link GetDsVolumeReplicaMapResponseV201304 }
     * 
     */
    public GetDsVolumeReplicaMapResponseV201304 createGetDsVolumeReplicaMapResponseV201304() {
        return new GetDsVolumeReplicaMapResponseV201304();
    }

    /**
     * Create an instance of {@link ReadMachineEncryptionKeyRequestV201109 }
     * 
     */
    public ReadMachineEncryptionKeyRequestV201109 createReadMachineEncryptionKeyRequestV201109() {
        return new ReadMachineEncryptionKeyRequestV201109();
    }

    /**
     * Create an instance of {@link ROCatalogRequestContext }
     * 
     */
    public ROCatalogRequestContext createROCatalogRequestContext() {
        return new ROCatalogRequestContext();
    }

    /**
     * Create an instance of {@link AddDsVolumeReplicaMap }
     * 
     */
    public AddDsVolumeReplicaMap createAddDsVolumeReplicaMap() {
        return new AddDsVolumeReplicaMap();
    }

    /**
     * Create an instance of {@link DeleteRecoveryPointsInfoArgsV201109 }
     * 
     */
    public DeleteRecoveryPointsInfoArgsV201109 createDeleteRecoveryPointsInfoArgsV201109() {
        return new DeleteRecoveryPointsInfoArgsV201109();
    }

    /**
     * Create an instance of {@link DataSourceInfo }
     * 
     */
    public DataSourceInfo createDataSourceInfo() {
        return new DataSourceInfo();
    }

    /**
     * Create an instance of {@link ArrayOfGetPolicyInfoArgsV201109 }
     * 
     */
    public ArrayOfGetPolicyInfoArgsV201109 createArrayOfGetPolicyInfoArgsV201109() {
        return new ArrayOfGetPolicyInfoArgsV201109();
    }

    /**
     * Create an instance of {@link ArrayOfChildPolicyExV201109 }
     * 
     */
    public ArrayOfChildPolicyExV201109 createArrayOfChildPolicyExV201109() {
        return new ArrayOfChildPolicyExV201109();
    }

    /**
     * Create an instance of {@link ArrayOfDataSourceInfoExV201109 }
     * 
     */
    public ArrayOfDataSourceInfoExV201109 createArrayOfDataSourceInfoExV201109() {
        return new ArrayOfDataSourceInfoExV201109();
    }

    /**
     * Create an instance of {@link UpdateDatasourceVolumeClientStampArgsV201201 }
     * 
     */
    public UpdateDatasourceVolumeClientStampArgsV201201 createUpdateDatasourceVolumeClientStampArgsV201201() {
        return new UpdateDatasourceVolumeClientStampArgsV201201();
    }

    /**
     * Create an instance of {@link ArrayOfEncryptionKeyExV201109 }
     * 
     */
    public ArrayOfEncryptionKeyExV201109 createArrayOfEncryptionKeyExV201109() {
        return new ArrayOfEncryptionKeyExV201109();
    }

    /**
     * Create an instance of {@link ReplicaInfoExV201304 }
     * 
     */
    public ReplicaInfoExV201304 createReplicaInfoExV201304() {
        return new ReplicaInfoExV201304();
    }

    /**
     * Create an instance of {@link UpdateReplicaClientStampArgsV201109 }
     * 
     */
    public UpdateReplicaClientStampArgsV201109 createUpdateReplicaClientStampArgsV201109() {
        return new UpdateReplicaClientStampArgsV201109();
    }

    /**
     * Create an instance of {@link GetReplicaArgsV201404 }
     * 
     */
    public GetReplicaArgsV201404 createGetReplicaArgsV201404() {
        return new GetReplicaArgsV201404();
    }

    /**
     * Create an instance of {@link VolumeInfoEx }
     * 
     */
    public VolumeInfoEx createVolumeInfoEx() {
        return new VolumeInfoEx();
    }

    /**
     * Create an instance of {@link MetadataSetNameValueInfoExV201109 }
     * 
     */
    public MetadataSetNameValueInfoExV201109 createMetadataSetNameValueInfoExV201109() {
        return new MetadataSetNameValueInfoExV201109();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateChildPolicyV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "SchedulePolicy", scope = UpdatePolicyInfoArgsV201109 .class)
    public JAXBElement<UpdateChildPolicyV201109> createUpdatePolicyInfoArgsV201109SchedulePolicy(UpdateChildPolicyV201109 value) {
        return new JAXBElement<UpdateChildPolicyV201109>(_UpdatePolicyInfoArgsV201109SchedulePolicy_QNAME, UpdateChildPolicyV201109 .class, UpdatePolicyInfoArgsV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateChildPolicyV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RetentionPolicy", scope = UpdatePolicyInfoArgsV201109 .class)
    public JAXBElement<UpdateChildPolicyV201109> createUpdatePolicyInfoArgsV201109RetentionPolicy(UpdateChildPolicyV201109 value) {
        return new JAXBElement<UpdateChildPolicyV201109>(_UpdatePolicyInfoArgsV201109RetentionPolicy_QNAME, UpdateChildPolicyV201109 .class, UpdatePolicyInfoArgsV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfUpdateDataSourceInfoV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DataSources", scope = UpdatePolicyInfoArgsV201109 .class)
    public JAXBElement<ArrayOfUpdateDataSourceInfoV201109> createUpdatePolicyInfoArgsV201109DataSources(ArrayOfUpdateDataSourceInfoV201109 value) {
        return new JAXBElement<ArrayOfUpdateDataSourceInfoV201109>(_UpdatePolicyInfoArgsV201109DataSources_QNAME, ArrayOfUpdateDataSourceInfoV201109 .class, UpdatePolicyInfoArgsV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DataSourceInfoExV201304 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DataSourceInfoEx_V2013_04")
    public JAXBElement<DataSourceInfoExV201304> createDataSourceInfoExV201304(DataSourceInfoExV201304 value) {
        return new JAXBElement<DataSourceInfoExV201304>(_DataSourceInfoExV201304_QNAME, DataSourceInfoExV201304 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReplicaInfoExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ReplicaInfoEx_V2011_09")
    public JAXBElement<ReplicaInfoExV201109> createReplicaInfoExV201109(ReplicaInfoExV201109 value) {
        return new JAXBElement<ReplicaInfoExV201109>(_ReplicaInfoExV201109_QNAME, ReplicaInfoExV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetInfoForDataSourceArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetInfoForDataSourceArgs_V2011_09")
    public JAXBElement<GetInfoForDataSourceArgsV201109> createGetInfoForDataSourceArgsV201109(GetInfoForDataSourceArgsV201109 value) {
        return new JAXBElement<GetInfoForDataSourceArgsV201109>(_GetInfoForDataSourceArgsV201109_QNAME, GetInfoForDataSourceArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DeletePolicyInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DeletePolicyInfoArgs")
    public JAXBElement<DeletePolicyInfoArgs> createDeletePolicyInfoArgs(DeletePolicyInfoArgs value) {
        return new JAXBElement<DeletePolicyInfoArgs>(_DeletePolicyInfoArgs_QNAME, DeletePolicyInfoArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DataSourceInfoExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DataSourceInfoEx_V2011_09")
    public JAXBElement<DataSourceInfoExV201109> createDataSourceInfoExV201109(DataSourceInfoExV201109 value) {
        return new JAXBElement<DataSourceInfoExV201109>(_DataSourceInfoExV201109_QNAME, DataSourceInfoExV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DeleteRecoveryPointsInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DeleteRecoveryPointsInfoArgs")
    public JAXBElement<DeleteRecoveryPointsInfoArgs> createDeleteRecoveryPointsInfoArgs(DeleteRecoveryPointsInfoArgs value) {
        return new JAXBElement<DeleteRecoveryPointsInfoArgs>(_DeleteRecoveryPointsInfoArgs_QNAME, DeleteRecoveryPointsInfoArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfAddDsVolumeReplicaMap }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfAddDsVolumeReplicaMap")
    public JAXBElement<ArrayOfAddDsVolumeReplicaMap> createArrayOfAddDsVolumeReplicaMap(ArrayOfAddDsVolumeReplicaMap value) {
        return new JAXBElement<ArrayOfAddDsVolumeReplicaMap>(_ArrayOfAddDsVolumeReplicaMap_QNAME, ArrayOfAddDsVolumeReplicaMap.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EncryptionKeyV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "EncryptionKey_V2011_09")
    public JAXBElement<EncryptionKeyV201109> createEncryptionKeyV201109(EncryptionKeyV201109 value) {
        return new JAXBElement<EncryptionKeyV201109>(_EncryptionKeyV201109_QNAME, EncryptionKeyV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReadMachineEncryptionKeyRequestV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ReadMachineEncryptionKeyRequest_V2011_09")
    public JAXBElement<ReadMachineEncryptionKeyRequestV201109> createReadMachineEncryptionKeyRequestV201109(ReadMachineEncryptionKeyRequestV201109 value) {
        return new JAXBElement<ReadMachineEncryptionKeyRequestV201109>(_ReadMachineEncryptionKeyRequestV201109_QNAME, ReadMachineEncryptionKeyRequestV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDsVolumeReplicaMapResponseV201304 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetDsVolumeReplicaMapResponse_V2013_04")
    public JAXBElement<GetDsVolumeReplicaMapResponseV201304> createGetDsVolumeReplicaMapResponseV201304(GetDsVolumeReplicaMapResponseV201304 value) {
        return new JAXBElement<GetDsVolumeReplicaMapResponseV201304>(_GetDsVolumeReplicaMapResponseV201304_QNAME, GetDsVolumeReplicaMapResponseV201304 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link WriteMachineEncryptionKeysRequest }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "WriteMachineEncryptionKeysRequest")
    public JAXBElement<WriteMachineEncryptionKeysRequest> createWriteMachineEncryptionKeysRequest(WriteMachineEncryptionKeysRequest value) {
        return new JAXBElement<WriteMachineEncryptionKeysRequest>(_WriteMachineEncryptionKeysRequest_QNAME, WriteMachineEncryptionKeysRequest.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfMetadataSetNameValueInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfMetadataSetNameValueInfoEx")
    public JAXBElement<ArrayOfMetadataSetNameValueInfoEx> createArrayOfMetadataSetNameValueInfoEx(ArrayOfMetadataSetNameValueInfoEx value) {
        return new JAXBElement<ArrayOfMetadataSetNameValueInfoEx>(_ArrayOfMetadataSetNameValueInfoEx_QNAME, ArrayOfMetadataSetNameValueInfoEx.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfGetPolicyInfoArgs_V2011_09")
    public JAXBElement<ArrayOfGetPolicyInfoArgsV201109> createArrayOfGetPolicyInfoArgsV201109(ArrayOfGetPolicyInfoArgsV201109 value) {
        return new JAXBElement<ArrayOfGetPolicyInfoArgsV201109>(_ArrayOfGetPolicyInfoArgsV201109_QNAME, ArrayOfGetPolicyInfoArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DataSourceInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DataSourceInfo")
    public JAXBElement<DataSourceInfo> createDataSourceInfo(DataSourceInfo value) {
        return new JAXBElement<DataSourceInfo>(_DataSourceInfo_QNAME, DataSourceInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DeleteRecoveryPointsInfoArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DeleteRecoveryPointsInfoArgs_V2011_09")
    public JAXBElement<DeleteRecoveryPointsInfoArgsV201109> createDeleteRecoveryPointsInfoArgsV201109(DeleteRecoveryPointsInfoArgsV201109 value) {
        return new JAXBElement<DeleteRecoveryPointsInfoArgsV201109>(_DeleteRecoveryPointsInfoArgsV201109_QNAME, DeleteRecoveryPointsInfoArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddDsVolumeReplicaMap }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "AddDsVolumeReplicaMap")
    public JAXBElement<AddDsVolumeReplicaMap> createAddDsVolumeReplicaMap(AddDsVolumeReplicaMap value) {
        return new JAXBElement<AddDsVolumeReplicaMap>(_AddDsVolumeReplicaMap_QNAME, AddDsVolumeReplicaMap.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfGetDsVolumeReplicaMap }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfGetDsVolumeReplicaMap")
    public JAXBElement<ArrayOfGetDsVolumeReplicaMap> createArrayOfGetDsVolumeReplicaMap(ArrayOfGetDsVolumeReplicaMap value) {
        return new JAXBElement<ArrayOfGetDsVolumeReplicaMap>(_ArrayOfGetDsVolumeReplicaMap_QNAME, ArrayOfGetDsVolumeReplicaMap.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ROCatalogRequestContext }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ROCatalogRequestContext")
    public JAXBElement<ROCatalogRequestContext> createROCatalogRequestContext(ROCatalogRequestContext value) {
        return new JAXBElement<ROCatalogRequestContext>(_ROCatalogRequestContext_QNAME, ROCatalogRequestContext.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfDataSourceInfoExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfDataSourceInfoEx_V2011_09")
    public JAXBElement<ArrayOfDataSourceInfoExV201109> createArrayOfDataSourceInfoExV201109(ArrayOfDataSourceInfoExV201109 value) {
        return new JAXBElement<ArrayOfDataSourceInfoExV201109>(_ArrayOfDataSourceInfoExV201109_QNAME, ArrayOfDataSourceInfoExV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfChildPolicyExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfChildPolicyEx_V2011_09")
    public JAXBElement<ArrayOfChildPolicyExV201109> createArrayOfChildPolicyExV201109(ArrayOfChildPolicyExV201109 value) {
        return new JAXBElement<ArrayOfChildPolicyExV201109>(_ArrayOfChildPolicyExV201109_QNAME, ArrayOfChildPolicyExV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReadEncryptionKeyRequest }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ReadEncryptionKeyRequest")
    public JAXBElement<ReadEncryptionKeyRequest> createReadEncryptionKeyRequest(ReadEncryptionKeyRequest value) {
        return new JAXBElement<ReadEncryptionKeyRequest>(_ReadEncryptionKeyRequest_QNAME, ReadEncryptionKeyRequest.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfEncryptionKeyExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfEncryptionKeyEx_V2011_09")
    public JAXBElement<ArrayOfEncryptionKeyExV201109> createArrayOfEncryptionKeyExV201109(ArrayOfEncryptionKeyExV201109 value) {
        return new JAXBElement<ArrayOfEncryptionKeyExV201109>(_ArrayOfEncryptionKeyExV201109_QNAME, ArrayOfEncryptionKeyExV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateDatasourceVolumeClientStampArgsV201201 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "UpdateDatasourceVolumeClientStampArgs_V2012_01")
    public JAXBElement<UpdateDatasourceVolumeClientStampArgsV201201> createUpdateDatasourceVolumeClientStampArgsV201201(UpdateDatasourceVolumeClientStampArgsV201201 value) {
        return new JAXBElement<UpdateDatasourceVolumeClientStampArgsV201201>(_UpdateDatasourceVolumeClientStampArgsV201201_QNAME, UpdateDatasourceVolumeClientStampArgsV201201 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link VolumeInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "VolumeInfoEx")
    public JAXBElement<VolumeInfoEx> createVolumeInfoEx(VolumeInfoEx value) {
        return new JAXBElement<VolumeInfoEx>(_VolumeInfoEx_QNAME, VolumeInfoEx.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetReplicaArgsV201404 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetReplicaArgs_V2014_04")
    public JAXBElement<GetReplicaArgsV201404> createGetReplicaArgsV201404(GetReplicaArgsV201404 value) {
        return new JAXBElement<GetReplicaArgsV201404>(_GetReplicaArgsV201404_QNAME, GetReplicaArgsV201404 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateReplicaClientStampArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "UpdateReplicaClientStampArgs_V2011_09")
    public JAXBElement<UpdateReplicaClientStampArgsV201109> createUpdateReplicaClientStampArgsV201109(UpdateReplicaClientStampArgsV201109 value) {
        return new JAXBElement<UpdateReplicaClientStampArgsV201109>(_UpdateReplicaClientStampArgsV201109_QNAME, UpdateReplicaClientStampArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReplicaInfoExV201304 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ReplicaInfoEx_V2013_04")
    public JAXBElement<ReplicaInfoExV201304> createReplicaInfoExV201304(ReplicaInfoExV201304 value) {
        return new JAXBElement<ReplicaInfoExV201304>(_ReplicaInfoExV201304_QNAME, ReplicaInfoExV201304 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddMDSetArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "AddMDSetArgs")
    public JAXBElement<AddMDSetArgs> createAddMDSetArgs(AddMDSetArgs value) {
        return new JAXBElement<AddMDSetArgs>(_AddMDSetArgs_QNAME, AddMDSetArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfEncryptionKeyEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfEncryptionKeyEx")
    public JAXBElement<ArrayOfEncryptionKeyEx> createArrayOfEncryptionKeyEx(ArrayOfEncryptionKeyEx value) {
        return new JAXBElement<ArrayOfEncryptionKeyEx>(_ArrayOfEncryptionKeyEx_QNAME, ArrayOfEncryptionKeyEx.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link MetadataSetNameValueInfoExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSetNameValueInfoEx_V2011_09")
    public JAXBElement<MetadataSetNameValueInfoExV201109> createMetadataSetNameValueInfoExV201109(MetadataSetNameValueInfoExV201109 value) {
        return new JAXBElement<MetadataSetNameValueInfoExV201109>(_MetadataSetNameValueInfoExV201109_QNAME, MetadataSetNameValueInfoExV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdatePolicyInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "UpdatePolicyInfoArgs")
    public JAXBElement<UpdatePolicyInfoArgs> createUpdatePolicyInfoArgs(UpdatePolicyInfoArgs value) {
        return new JAXBElement<UpdatePolicyInfoArgs>(_UpdatePolicyInfoArgs_QNAME, UpdatePolicyInfoArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ChildPolicyV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ChildPolicy_V2011_09")
    public JAXBElement<ChildPolicyV201109> createChildPolicyV201109(ChildPolicyV201109 value) {
        return new JAXBElement<ChildPolicyV201109>(_ChildPolicyV201109_QNAME, ChildPolicyV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link WriteEncryptionKeysRequest }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "WriteEncryptionKeysRequest")
    public JAXBElement<WriteEncryptionKeysRequest> createWriteEncryptionKeysRequest(WriteEncryptionKeysRequest value) {
        return new JAXBElement<WriteEncryptionKeysRequest>(_WriteEncryptionKeysRequest_QNAME, WriteEncryptionKeysRequest.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfoResponseV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointInfoResponse_V2011_09")
    public JAXBElement<RecoveryPointInfoResponseV201109> createRecoveryPointInfoResponseV201109(RecoveryPointInfoResponseV201109 value) {
        return new JAXBElement<RecoveryPointInfoResponseV201109>(_RecoveryPointInfoResponseV201109_QNAME, RecoveryPointInfoResponseV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfoExV201409 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointInfoEx_V2014_09")
    public JAXBElement<RecoveryPointInfoExV201409> createRecoveryPointInfoExV201409(RecoveryPointInfoExV201409 value) {
        return new JAXBElement<RecoveryPointInfoExV201409>(_RecoveryPointInfoExV201409_QNAME, RecoveryPointInfoExV201409 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddRPVolumeReplicaMapV201409 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "AddRPVolumeReplicaMap_V2014_09")
    public JAXBElement<AddRPVolumeReplicaMapV201409> createAddRPVolumeReplicaMapV201409(AddRPVolumeReplicaMapV201409 value) {
        return new JAXBElement<AddRPVolumeReplicaMapV201409>(_AddRPVolumeReplicaMapV201409_QNAME, AddRPVolumeReplicaMapV201409 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link MetadataSetNameValueInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSetNameValueInfoEx")
    public JAXBElement<MetadataSetNameValueInfoEx> createMetadataSetNameValueInfoEx(MetadataSetNameValueInfoEx value) {
        return new JAXBElement<MetadataSetNameValueInfoEx>(_MetadataSetNameValueInfoEx_QNAME, MetadataSetNameValueInfoEx.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfMetadataSetNameValueInfoExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfMetadataSetNameValueInfoEx_V2011_09")
    public JAXBElement<ArrayOfMetadataSetNameValueInfoExV201109> createArrayOfMetadataSetNameValueInfoExV201109(ArrayOfMetadataSetNameValueInfoExV201109 value) {
        return new JAXBElement<ArrayOfMetadataSetNameValueInfoExV201109>(_ArrayOfMetadataSetNameValueInfoExV201109_QNAME, ArrayOfMetadataSetNameValueInfoExV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfoV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointInfo_V2011_09")
    public JAXBElement<RecoveryPointInfoV201109> createRecoveryPointInfoV201109(RecoveryPointInfoV201109 value) {
        return new JAXBElement<RecoveryPointInfoV201109>(_RecoveryPointInfoV201109_QNAME, RecoveryPointInfoV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link VolumeInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "VolumeInfo")
    public JAXBElement<VolumeInfo> createVolumeInfo(VolumeInfo value) {
        return new JAXBElement<VolumeInfo>(_VolumeInfo_QNAME, VolumeInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link WriteEncryptionKeysResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "WriteEncryptionKeysResponse")
    public JAXBElement<WriteEncryptionKeysResponse> createWriteEncryptionKeysResponse(WriteEncryptionKeysResponse value) {
        return new JAXBElement<WriteEncryptionKeysResponse>(_WriteEncryptionKeysResponse_QNAME, WriteEncryptionKeysResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfDataSourceInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfDataSourceInfoEx")
    public JAXBElement<ArrayOfDataSourceInfoEx> createArrayOfDataSourceInfoEx(ArrayOfDataSourceInfoEx value) {
        return new JAXBElement<ArrayOfDataSourceInfoEx>(_ArrayOfDataSourceInfoEx_QNAME, ArrayOfDataSourceInfoEx.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EncryptionKeyEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "EncryptionKeyEx")
    public JAXBElement<EncryptionKeyEx> createEncryptionKeyEx(EncryptionKeyEx value) {
        return new JAXBElement<EncryptionKeyEx>(_EncryptionKeyEx_QNAME, EncryptionKeyEx.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetRPVolumeReplicaMapResponseV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetRPVolumeReplicaMapResponse_V2011_09")
    public JAXBElement<GetRPVolumeReplicaMapResponseV201109> createGetRPVolumeReplicaMapResponseV201109(GetRPVolumeReplicaMapResponseV201109 value) {
        return new JAXBElement<GetRPVolumeReplicaMapResponseV201109>(_GetRPVolumeReplicaMapResponseV201109_QNAME, GetRPVolumeReplicaMapResponseV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfoExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointInfoEx_V2011_09")
    public JAXBElement<RecoveryPointInfoExV201109> createRecoveryPointInfoExV201109(RecoveryPointInfoExV201109 value) {
        return new JAXBElement<RecoveryPointInfoExV201109>(_RecoveryPointInfoExV201109_QNAME, RecoveryPointInfoExV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ChildPolicy }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ChildPolicy")
    public JAXBElement<ChildPolicy> createChildPolicy(ChildPolicy value) {
        return new JAXBElement<ChildPolicy>(_ChildPolicy_QNAME, ChildPolicy.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointSetInfoV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointSetInfo_V2011_09")
    public JAXBElement<RecoveryPointSetInfoV201109> createRecoveryPointSetInfoV201109(RecoveryPointSetInfoV201109 value) {
        return new JAXBElement<RecoveryPointSetInfoV201109>(_RecoveryPointSetInfoV201109_QNAME, RecoveryPointSetInfoV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReplicaInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ReplicaInfo")
    public JAXBElement<ReplicaInfo> createReplicaInfo(ReplicaInfo value) {
        return new JAXBElement<ReplicaInfo>(_ReplicaInfo_QNAME, ReplicaInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReadMachineEncryptionKeyRequest }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ReadMachineEncryptionKeyRequest")
    public JAXBElement<ReadMachineEncryptionKeyRequest> createReadMachineEncryptionKeyRequest(ReadMachineEncryptionKeyRequest value) {
        return new JAXBElement<ReadMachineEncryptionKeyRequest>(_ReadMachineEncryptionKeyRequest_QNAME, ReadMachineEncryptionKeyRequest.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ROCatalogRequestContextV201212 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ROCatalogRequestContext_V2012_12")
    public JAXBElement<ROCatalogRequestContextV201212> createROCatalogRequestContextV201212(ROCatalogRequestContextV201212 value) {
        return new JAXBElement<ROCatalogRequestContextV201212>(_ROCatalogRequestContextV201212_QNAME, ROCatalogRequestContextV201212 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link WriteMachineEncryptionKeysRequestV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "WriteMachineEncryptionKeysRequest_V2011_09")
    public JAXBElement<WriteMachineEncryptionKeysRequestV201109> createWriteMachineEncryptionKeysRequestV201109(WriteMachineEncryptionKeysRequestV201109 value) {
        return new JAXBElement<WriteMachineEncryptionKeysRequestV201109>(_WriteMachineEncryptionKeysRequestV201109_QNAME, WriteMachineEncryptionKeysRequestV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetPolicyInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetPolicyInfoArgs")
    public JAXBElement<GetPolicyInfoArgs> createGetPolicyInfoArgs(GetPolicyInfoArgs value) {
        return new JAXBElement<GetPolicyInfoArgs>(_GetPolicyInfoArgs_QNAME, GetPolicyInfoArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetReplicaArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetReplicaArgs")
    public JAXBElement<GetReplicaArgs> createGetReplicaArgs(GetReplicaArgs value) {
        return new JAXBElement<GetReplicaArgs>(_GetReplicaArgs_QNAME, GetReplicaArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDsVolumeReplicaMap }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetDsVolumeReplicaMap")
    public JAXBElement<GetDsVolumeReplicaMap> createGetDsVolumeReplicaMap(GetDsVolumeReplicaMap value) {
        return new JAXBElement<GetDsVolumeReplicaMap>(_GetDsVolumeReplicaMap_QNAME, GetDsVolumeReplicaMap.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RequestContextV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RequestContext_V2011_09")
    public JAXBElement<RequestContextV201109> createRequestContextV201109(RequestContextV201109 value) {
        return new JAXBElement<RequestContextV201109>(_RequestContextV201109_QNAME, RequestContextV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfRecoveryPointInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfRecoveryPointInfoEx")
    public JAXBElement<ArrayOfRecoveryPointInfoEx> createArrayOfRecoveryPointInfoEx(ArrayOfRecoveryPointInfoEx value) {
        return new JAXBElement<ArrayOfRecoveryPointInfoEx>(_ArrayOfRecoveryPointInfoEx_QNAME, ArrayOfRecoveryPointInfoEx.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EncryptionKeyExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "EncryptionKeyEx_V2011_09")
    public JAXBElement<EncryptionKeyExV201109> createEncryptionKeyExV201109(EncryptionKeyExV201109 value) {
        return new JAXBElement<EncryptionKeyExV201109>(_EncryptionKeyExV201109_QNAME, EncryptionKeyExV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link PolicyAndRPInfoResponseV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "PolicyAndRPInfoResponse_V2011_09")
    public JAXBElement<PolicyAndRPInfoResponseV201109> createPolicyAndRPInfoResponseV201109(PolicyAndRPInfoResponseV201109 value) {
        return new JAXBElement<PolicyAndRPInfoResponseV201109>(_PolicyAndRPInfoResponseV201109_QNAME, PolicyAndRPInfoResponseV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateChildPolicy }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "UpdateChildPolicy")
    public JAXBElement<UpdateChildPolicy> createUpdateChildPolicy(UpdateChildPolicy value) {
        return new JAXBElement<UpdateChildPolicy>(_UpdateChildPolicy_QNAME, UpdateChildPolicy.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DataSourceInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DataSourceInfoEx")
    public JAXBElement<DataSourceInfoEx> createDataSourceInfoEx(DataSourceInfoEx value) {
        return new JAXBElement<DataSourceInfoEx>(_DataSourceInfoEx_QNAME, DataSourceInfoEx.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateChildPolicyV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "UpdateChildPolicy_V2011_09")
    public JAXBElement<UpdateChildPolicyV201109> createUpdateChildPolicyV201109(UpdateChildPolicyV201109 value) {
        return new JAXBElement<UpdateChildPolicyV201109>(_UpdateChildPolicyV201109_QNAME, UpdateChildPolicyV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link MetadataSetNameValueInfoV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSetNameValueInfo_V2011_09")
    public JAXBElement<MetadataSetNameValueInfoV201109> createMetadataSetNameValueInfoV201109(MetadataSetNameValueInfoV201109 value) {
        return new JAXBElement<MetadataSetNameValueInfoV201109>(_MetadataSetNameValueInfoV201109_QNAME, MetadataSetNameValueInfoV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetInfoForMachineArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetInfoForMachineArgs_V2011_09")
    public JAXBElement<GetInfoForMachineArgsV201109> createGetInfoForMachineArgsV201109(GetInfoForMachineArgsV201109 value) {
        return new JAXBElement<GetInfoForMachineArgsV201109>(_GetInfoForMachineArgsV201109_QNAME, GetInfoForMachineArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdatePolicyInfoArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "UpdatePolicyInfoArgs_V2011_09")
    public JAXBElement<UpdatePolicyInfoArgsV201109> createUpdatePolicyInfoArgsV201109(UpdatePolicyInfoArgsV201109 value) {
        return new JAXBElement<UpdatePolicyInfoArgsV201109>(_UpdatePolicyInfoArgsV201109_QNAME, UpdatePolicyInfoArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfAddRPVolumeReplicaMap }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfAddRPVolumeReplicaMap")
    public JAXBElement<ArrayOfAddRPVolumeReplicaMap> createArrayOfAddRPVolumeReplicaMap(ArrayOfAddRPVolumeReplicaMap value) {
        return new JAXBElement<ArrayOfAddRPVolumeReplicaMap>(_ArrayOfAddRPVolumeReplicaMap_QNAME, ArrayOfAddRPVolumeReplicaMap.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddPolicyArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "AddPolicyArgs_V2011_09")
    public JAXBElement<AddPolicyArgsV201109> createAddPolicyArgsV201109(AddPolicyArgsV201109 value) {
        return new JAXBElement<AddPolicyArgsV201109>(_AddPolicyArgsV201109_QNAME, AddPolicyArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link WriteEncryptionKeysResponseV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "WriteEncryptionKeysResponse_V2011_09")
    public JAXBElement<WriteEncryptionKeysResponseV201109> createWriteEncryptionKeysResponseV201109(WriteEncryptionKeysResponseV201109 value) {
        return new JAXBElement<WriteEncryptionKeysResponseV201109>(_WriteEncryptionKeysResponseV201109_QNAME, WriteEncryptionKeysResponseV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetPolicyInfoArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetPolicyInfoArgs_V2011_09")
    public JAXBElement<GetPolicyInfoArgsV201109> createGetPolicyInfoArgsV201109(GetPolicyInfoArgsV201109 value) {
        return new JAXBElement<GetPolicyInfoArgsV201109>(_GetPolicyInfoArgsV201109_QNAME, GetPolicyInfoArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddMDSetAndMetadataNameValueArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "AddMDSetAndMetadataNameValueArgs")
    public JAXBElement<AddMDSetAndMetadataNameValueArgs> createAddMDSetAndMetadataNameValueArgs(AddMDSetAndMetadataNameValueArgs value) {
        return new JAXBElement<AddMDSetAndMetadataNameValueArgs>(_AddMDSetAndMetadataNameValueArgs_QNAME, AddMDSetAndMetadataNameValueArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointSetInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointSetInfo")
    public JAXBElement<RecoveryPointSetInfo> createRecoveryPointSetInfo(RecoveryPointSetInfo value) {
        return new JAXBElement<RecoveryPointSetInfo>(_RecoveryPointSetInfo_QNAME, RecoveryPointSetInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link VolumeInfoExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "VolumeInfoEx_V2011_09")
    public JAXBElement<VolumeInfoExV201109> createVolumeInfoExV201109(VolumeInfoExV201109 value) {
        return new JAXBElement<VolumeInfoExV201109>(_VolumeInfoExV201109_QNAME, VolumeInfoExV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link PolicyInfoBaseV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "PolicyInfoBase_V2011_09")
    public JAXBElement<PolicyInfoBaseV201109> createPolicyInfoBaseV201109(PolicyInfoBaseV201109 value) {
        return new JAXBElement<PolicyInfoBaseV201109>(_PolicyInfoBaseV201109_QNAME, PolicyInfoBaseV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ChildPolicyExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ChildPolicyEx_V2011_09")
    public JAXBElement<ChildPolicyExV201109> createChildPolicyExV201109(ChildPolicyExV201109 value) {
        return new JAXBElement<ChildPolicyExV201109>(_ChildPolicyExV201109_QNAME, ChildPolicyExV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddRPVolumeReplicaMap }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "AddRPVolumeReplicaMap")
    public JAXBElement<AddRPVolumeReplicaMap> createAddRPVolumeReplicaMap(AddRPVolumeReplicaMap value) {
        return new JAXBElement<AddRPVolumeReplicaMap>(_AddRPVolumeReplicaMap_QNAME, AddRPVolumeReplicaMap.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RequestContext }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RequestContext")
    public JAXBElement<RequestContext> createRequestContext(RequestContext value) {
        return new JAXBElement<RequestContext>(_RequestContext_QNAME, RequestContext.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link PolicyInfoBase }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "PolicyInfoBase")
    public JAXBElement<PolicyInfoBase> createPolicyInfoBase(PolicyInfoBase value) {
        return new JAXBElement<PolicyInfoBase>(_PolicyInfoBase_QNAME, PolicyInfoBase.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DeletePolicyInfoArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DeletePolicyInfoArgs_V2011_09")
    public JAXBElement<DeletePolicyInfoArgsV201109> createDeletePolicyInfoArgsV201109(DeletePolicyInfoArgsV201109 value) {
        return new JAXBElement<DeletePolicyInfoArgsV201109>(_DeletePolicyInfoArgsV201109_QNAME, DeletePolicyInfoArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddMDSetArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "AddMDSetArgs_V2011_09")
    public JAXBElement<AddMDSetArgsV201109> createAddMDSetArgsV201109(AddMDSetArgsV201109 value) {
        return new JAXBElement<AddMDSetArgsV201109>(_AddMDSetArgsV201109_QNAME, AddMDSetArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddRPVolumeReplicaMapV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "AddRPVolumeReplicaMap_V2011_09")
    public JAXBElement<AddRPVolumeReplicaMapV201109> createAddRPVolumeReplicaMapV201109(AddRPVolumeReplicaMapV201109 value) {
        return new JAXBElement<AddRPVolumeReplicaMapV201109>(_AddRPVolumeReplicaMapV201109_QNAME, AddRPVolumeReplicaMapV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReplicaInfoV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ReplicaInfo_V2011_09")
    public JAXBElement<ReplicaInfoV201109> createReplicaInfoV201109(ReplicaInfoV201109 value) {
        return new JAXBElement<ReplicaInfoV201109>(_ReplicaInfoV201109_QNAME, ReplicaInfoV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetReplicaArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetReplicaArgs_V2011_09")
    public JAXBElement<GetReplicaArgsV201109> createGetReplicaArgsV201109(GetReplicaArgsV201109 value) {
        return new JAXBElement<GetReplicaArgsV201109>(_GetReplicaArgsV201109_QNAME, GetReplicaArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDsVolumeReplicaMapV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetDsVolumeReplicaMap_V2011_09")
    public JAXBElement<GetDsVolumeReplicaMapV201109> createGetDsVolumeReplicaMapV201109(GetDsVolumeReplicaMapV201109 value) {
        return new JAXBElement<GetDsVolumeReplicaMapV201109>(_GetDsVolumeReplicaMapV201109_QNAME, GetDsVolumeReplicaMapV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddMDSetAndMetadataNameValueArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "AddMDSetAndMetadataNameValueArgs_V2011_09")
    public JAXBElement<AddMDSetAndMetadataNameValueArgsV201109> createAddMDSetAndMetadataNameValueArgsV201109(AddMDSetAndMetadataNameValueArgsV201109 value) {
        return new JAXBElement<AddMDSetAndMetadataNameValueArgsV201109>(_AddMDSetAndMetadataNameValueArgsV201109_QNAME, AddMDSetAndMetadataNameValueArgsV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateDataSourceInfoV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "UpdateDataSourceInfo_V2011_09")
    public JAXBElement<UpdateDataSourceInfoV201109> createUpdateDataSourceInfoV201109(UpdateDataSourceInfoV201109 value) {
        return new JAXBElement<UpdateDataSourceInfoV201109>(_UpdateDataSourceInfoV201109_QNAME, UpdateDataSourceInfoV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReplicaInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ReplicaInfoEx")
    public JAXBElement<ReplicaInfoEx> createReplicaInfoEx(ReplicaInfoEx value) {
        return new JAXBElement<ReplicaInfoEx>(_ReplicaInfoEx_QNAME, ReplicaInfoEx.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateDatasourceVolumeClientStampArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "UpdateDatasourceVolumeClientStampArgs")
    public JAXBElement<UpdateDatasourceVolumeClientStampArgs> createUpdateDatasourceVolumeClientStampArgs(UpdateDatasourceVolumeClientStampArgs value) {
        return new JAXBElement<UpdateDatasourceVolumeClientStampArgs>(_UpdateDatasourceVolumeClientStampArgs_QNAME, UpdateDatasourceVolumeClientStampArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetInfoForMachineArgsV201205 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetInfoForMachineArgs_V2012_05")
    public JAXBElement<GetInfoForMachineArgsV201205> createGetInfoForMachineArgsV201205(GetInfoForMachineArgsV201205 value) {
        return new JAXBElement<GetInfoForMachineArgsV201205>(_GetInfoForMachineArgsV201205_QNAME, GetInfoForMachineArgsV201205 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateReplicaClientStampArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "UpdateReplicaClientStampArgs")
    public JAXBElement<UpdateReplicaClientStampArgs> createUpdateReplicaClientStampArgs(UpdateReplicaClientStampArgs value) {
        return new JAXBElement<UpdateReplicaClientStampArgs>(_UpdateReplicaClientStampArgs_QNAME, UpdateReplicaClientStampArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddDsVolumeReplicaMapV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "AddDsVolumeReplicaMap_V2011_09")
    public JAXBElement<AddDsVolumeReplicaMapV201109> createAddDsVolumeReplicaMapV201109(AddDsVolumeReplicaMapV201109 value) {
        return new JAXBElement<AddDsVolumeReplicaMapV201109>(_AddDsVolumeReplicaMapV201109_QNAME, AddDsVolumeReplicaMapV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link PolicyAndRPInfoResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "PolicyAndRPInfoResponse")
    public JAXBElement<PolicyAndRPInfoResponse> createPolicyAndRPInfoResponse(PolicyAndRPInfoResponse value) {
        return new JAXBElement<PolicyAndRPInfoResponse>(_PolicyAndRPInfoResponse_QNAME, PolicyAndRPInfoResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link DataSourceInfoV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DataSourceInfo_V2011_09")
    public JAXBElement<DataSourceInfoV201109> createDataSourceInfoV201109(DataSourceInfoV201109 value) {
        return new JAXBElement<DataSourceInfoV201109>(_DataSourceInfoV201109_QNAME, DataSourceInfoV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link UpdateDataSourceInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "UpdateDataSourceInfo")
    public JAXBElement<UpdateDataSourceInfo> createUpdateDataSourceInfo(UpdateDataSourceInfo value) {
        return new JAXBElement<UpdateDataSourceInfo>(_UpdateDataSourceInfo_QNAME, UpdateDataSourceInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link AddPolicyArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "AddPolicyArgs")
    public JAXBElement<AddPolicyArgs> createAddPolicyArgs(AddPolicyArgs value) {
        return new JAXBElement<AddPolicyArgs>(_AddPolicyArgs_QNAME, AddPolicyArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfUpdateDataSourceInfoV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfUpdateDataSourceInfo_V2011_09")
    public JAXBElement<ArrayOfUpdateDataSourceInfoV201109> createArrayOfUpdateDataSourceInfoV201109(ArrayOfUpdateDataSourceInfoV201109 value) {
        return new JAXBElement<ArrayOfUpdateDataSourceInfoV201109>(_ArrayOfUpdateDataSourceInfoV201109_QNAME, ArrayOfUpdateDataSourceInfoV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link MetadataSetNameValueInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSetNameValueInfo")
    public JAXBElement<MetadataSetNameValueInfo> createMetadataSetNameValueInfo(MetadataSetNameValueInfo value) {
        return new JAXBElement<MetadataSetNameValueInfo>(_MetadataSetNameValueInfo_QNAME, MetadataSetNameValueInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfoResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointInfoResponse")
    public JAXBElement<RecoveryPointInfoResponse> createRecoveryPointInfoResponse(RecoveryPointInfoResponse value) {
        return new JAXBElement<RecoveryPointInfoResponse>(_RecoveryPointInfoResponse_QNAME, RecoveryPointInfoResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetRPVolumeReplicaMapResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetRPVolumeReplicaMapResponse")
    public JAXBElement<GetRPVolumeReplicaMapResponse> createGetRPVolumeReplicaMapResponse(GetRPVolumeReplicaMapResponse value) {
        return new JAXBElement<GetRPVolumeReplicaMapResponse>(_GetRPVolumeReplicaMapResponse_QNAME, GetRPVolumeReplicaMapResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EncryptionKey }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "EncryptionKey")
    public JAXBElement<EncryptionKey> createEncryptionKey(EncryptionKey value) {
        return new JAXBElement<EncryptionKey>(_EncryptionKey_QNAME, EncryptionKey.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfoEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointInfoEx")
    public JAXBElement<RecoveryPointInfoEx> createRecoveryPointInfoEx(RecoveryPointInfoEx value) {
        return new JAXBElement<RecoveryPointInfoEx>(_RecoveryPointInfoEx_QNAME, RecoveryPointInfoEx.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDsArrayInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetDsArrayInfoArgs")
    public JAXBElement<GetDsArrayInfoArgs> createGetDsArrayInfoArgs(GetDsArrayInfoArgs value) {
        return new JAXBElement<GetDsArrayInfoArgs>(_GetDsArrayInfoArgs_QNAME, GetDsArrayInfoArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetReplicaArgsV201304 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetReplicaArgs_V2013_04")
    public JAXBElement<GetReplicaArgsV201304> createGetReplicaArgsV201304(GetReplicaArgsV201304 value) {
        return new JAXBElement<GetReplicaArgsV201304>(_GetReplicaArgsV201304_QNAME, GetReplicaArgsV201304 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfDataSourceInfoV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfDataSourceInfo_V2011_09")
    public JAXBElement<ArrayOfDataSourceInfoV201109> createArrayOfDataSourceInfoV201109(ArrayOfDataSourceInfoV201109 value) {
        return new JAXBElement<ArrayOfDataSourceInfoV201109>(_ArrayOfDataSourceInfoV201109_QNAME, ArrayOfDataSourceInfoV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetInfoForMachineArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetInfoForMachineArgs")
    public JAXBElement<GetInfoForMachineArgs> createGetInfoForMachineArgs(GetInfoForMachineArgs value) {
        return new JAXBElement<GetInfoForMachineArgs>(_GetInfoForMachineArgs_QNAME, GetInfoForMachineArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GetDsArrayInfoArgsV201205 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "GetDsArrayInfoArgs_V2012_05")
    public JAXBElement<GetDsArrayInfoArgsV201205> createGetDsArrayInfoArgsV201205(GetDsArrayInfoArgsV201205 value) {
        return new JAXBElement<GetDsArrayInfoArgsV201205>(_GetDsArrayInfoArgsV201205_QNAME, GetDsArrayInfoArgsV201205 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ChildPolicyEx }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ChildPolicyEx")
    public JAXBElement<ChildPolicyEx> createChildPolicyEx(ChildPolicyEx value) {
        return new JAXBElement<ChildPolicyEx>(_ChildPolicyEx_QNAME, ChildPolicyEx.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgs }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfGetPolicyInfoArgs")
    public JAXBElement<ArrayOfGetPolicyInfoArgs> createArrayOfGetPolicyInfoArgs(ArrayOfGetPolicyInfoArgs value) {
        return new JAXBElement<ArrayOfGetPolicyInfoArgs>(_ArrayOfGetPolicyInfoArgs_QNAME, ArrayOfGetPolicyInfoArgs.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfGetRPVolumeReplicaMapResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ArrayOfGetRPVolumeReplicaMapResponse")
    public JAXBElement<ArrayOfGetRPVolumeReplicaMapResponse> createArrayOfGetRPVolumeReplicaMapResponse(ArrayOfGetRPVolumeReplicaMapResponse value) {
        return new JAXBElement<ArrayOfGetRPVolumeReplicaMapResponse>(_ArrayOfGetRPVolumeReplicaMapResponse_QNAME, ArrayOfGetRPVolumeReplicaMapResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link VolumeInfoV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "VolumeInfo_V2011_09")
    public JAXBElement<VolumeInfoV201109> createVolumeInfoV201109(VolumeInfoV201109 value) {
        return new JAXBElement<VolumeInfoV201109>(_VolumeInfoV201109_QNAME, VolumeInfoV201109 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ReplicaInfoExV201404 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ReplicaInfoEx_V2014_04")
    public JAXBElement<ReplicaInfoExV201404> createReplicaInfoExV201404(ReplicaInfoExV201404 value) {
        return new JAXBElement<ReplicaInfoExV201404>(_ReplicaInfoExV201404_QNAME, ReplicaInfoExV201404 .class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointInfo")
    public JAXBElement<RecoveryPointInfo> createRecoveryPointInfo(RecoveryPointInfo value) {
        return new JAXBElement<RecoveryPointInfo>(_RecoveryPointInfo_QNAME, RecoveryPointInfo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ChildPolicyV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RetentionPolicy", scope = AddPolicyArgsV201109 .class)
    public JAXBElement<ChildPolicyV201109> createAddPolicyArgsV201109RetentionPolicy(ChildPolicyV201109 value) {
        return new JAXBElement<ChildPolicyV201109>(_UpdatePolicyInfoArgsV201109RetentionPolicy_QNAME, ChildPolicyV201109 .class, AddPolicyArgsV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSetId", scope = ReplicaInfoV201109 .class)
    public JAXBElement<EntityIdV201109> createReplicaInfoV201109MetadataSetId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_ReplicaInfoV201109MetadataSetId_QNAME, EntityIdV201109 .class, ReplicaInfoV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link XMLGregorianCalendar }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "LogicalGCTime", scope = ReplicaInfoExV201109 .class)
    public JAXBElement<XMLGregorianCalendar> createReplicaInfoExV201109LogicalGCTime(XMLGregorianCalendar value) {
        return new JAXBElement<XMLGregorianCalendar>(_ReplicaInfoExV201109LogicalGCTime_QNAME, XMLGregorianCalendar.class, ReplicaInfoExV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link XMLGregorianCalendar }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "PhysicalGCTime", scope = ReplicaInfoExV201109 .class)
    public JAXBElement<XMLGregorianCalendar> createReplicaInfoExV201109PhysicalGCTime(XMLGregorianCalendar value) {
        return new JAXBElement<XMLGregorianCalendar>(_ReplicaInfoExV201109PhysicalGCTime_QNAME, XMLGregorianCalendar.class, ReplicaInfoExV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ClientStampV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ClientStamp", scope = ReplicaInfoExV201109 .class)
    public JAXBElement<ClientStampV201109> createReplicaInfoExV201109ClientStamp(ClientStampV201109 value) {
        return new JAXBElement<ClientStampV201109>(_ReplicaInfoExV201109ClientStamp_QNAME, ClientStampV201109 .class, ReplicaInfoExV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSetId", scope = ReplicaInfoExV201109 .class)
    public JAXBElement<EntityIdV201109> createReplicaInfoExV201109MetadataSetId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_ReplicaInfoV201109MetadataSetId_QNAME, EntityIdV201109 .class, ReplicaInfoExV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "PolicyId", scope = UpdateDataSourceInfoV201109 .class)
    public JAXBElement<EntityIdV201109> createUpdateDataSourceInfoV201109PolicyId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_UpdateDataSourceInfoV201109PolicyId_QNAME, EntityIdV201109 .class, UpdateDataSourceInfoV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSetId", scope = UpdateDataSourceInfoV201109 .class)
    public JAXBElement<EntityIdV201109> createUpdateDataSourceInfoV201109MetadataSetId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_ReplicaInfoV201109MetadataSetId_QNAME, EntityIdV201109 .class, UpdateDataSourceInfoV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "FriendlyName", scope = DataSourceInfo.class)
    public JAXBElement<String> createDataSourceInfoFriendlyName(String value) {
        return new JAXBElement<String>(_DataSourceInfoFriendlyName_QNAME, String.class, DataSourceInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MachineName", scope = AddPolicyArgs.class)
    public JAXBElement<String> createAddPolicyArgsMachineName(String value) {
        return new JAXBElement<String>(_AddPolicyArgsMachineName_QNAME, String.class, AddPolicyArgs.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfMetadataSetNameValueInfoExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSet", scope = AddMDSetArgsV201109 .class)
    public JAXBElement<ArrayOfMetadataSetNameValueInfoExV201109> createAddMDSetArgsV201109MetadataSet(ArrayOfMetadataSetNameValueInfoExV201109 value) {
        return new JAXBElement<ArrayOfMetadataSetNameValueInfoExV201109>(_AddMDSetArgsV201109MetadataSet_QNAME, ArrayOfMetadataSetNameValueInfoExV201109 .class, AddMDSetArgsV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RequestContextV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RequestContext", scope = AddMDSetArgsV201109 .class)
    public JAXBElement<RequestContextV201109> createAddMDSetArgsV201109RequestContext(RequestContextV201109 value) {
        return new JAXBElement<RequestContextV201109>(_RequestContext_QNAME, RequestContextV201109 .class, AddMDSetArgsV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSetId", scope = RecoveryPointSetInfoV201109 .class)
    public JAXBElement<EntityIdV201109> createRecoveryPointSetInfoV201109MetadataSetId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_ReplicaInfoV201109MetadataSetId_QNAME, EntityIdV201109 .class, RecoveryPointSetInfoV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "FriendlyName", scope = RecoveryPointInfo.class)
    public JAXBElement<String> createRecoveryPointInfoFriendlyName(String value) {
        return new JAXBElement<String>(_DataSourceInfoFriendlyName_QNAME, String.class, RecoveryPointInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DataSourceVersion", scope = RecoveryPointInfo.class)
    public JAXBElement<String> createRecoveryPointInfoDataSourceVersion(String value) {
        return new JAXBElement<String>(_RecoveryPointInfoDataSourceVersion_QNAME, String.class, RecoveryPointInfo.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link VolumeInfoV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "VolumeInfo", scope = AddDsVolumeReplicaMapV201109 .class)
    public JAXBElement<VolumeInfoV201109> createAddDsVolumeReplicaMapV201109VolumeInfo(VolumeInfoV201109 value) {
        return new JAXBElement<VolumeInfoV201109>(_VolumeInfo_QNAME, VolumeInfoV201109 .class, AddDsVolumeReplicaMapV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointSetId", scope = RecoveryPointInfoExV201109 .class)
    public JAXBElement<EntityIdV201109> createRecoveryPointInfoExV201109RecoveryPointSetId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_RecoveryPointInfoExV201109RecoveryPointSetId_QNAME, EntityIdV201109 .class, RecoveryPointInfoExV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DependentRecoveryPointId", scope = RecoveryPointInfoExV201109 .class)
    public JAXBElement<EntityIdV201109> createRecoveryPointInfoExV201109DependentRecoveryPointId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_RecoveryPointInfoExV201109DependentRecoveryPointId_QNAME, EntityIdV201109 .class, RecoveryPointInfoExV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSetId", scope = RecoveryPointInfoExV201109 .class)
    public JAXBElement<EntityIdV201109> createRecoveryPointInfoExV201109MetadataSetId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_ReplicaInfoV201109MetadataSetId_QNAME, EntityIdV201109 .class, RecoveryPointInfoExV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfGetPolicyInfoArgsV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "PolicyInfo", scope = PolicyAndRPInfoResponseV201109 .class)
    public JAXBElement<ArrayOfGetPolicyInfoArgsV201109> createPolicyAndRPInfoResponseV201109PolicyInfo(ArrayOfGetPolicyInfoArgsV201109 value) {
        return new JAXBElement<ArrayOfGetPolicyInfoArgsV201109>(_PolicyAndRPInfoResponseV201109PolicyInfo_QNAME, ArrayOfGetPolicyInfoArgsV201109 .class, PolicyAndRPInfoResponseV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RecoveryPointInfoResponseV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RPInfo", scope = PolicyAndRPInfoResponseV201109 .class)
    public JAXBElement<RecoveryPointInfoResponseV201109> createPolicyAndRPInfoResponseV201109RPInfo(RecoveryPointInfoResponseV201109 value) {
        return new JAXBElement<RecoveryPointInfoResponseV201109>(_PolicyAndRPInfoResponseV201109RPInfo_QNAME, RecoveryPointInfoResponseV201109 .class, PolicyAndRPInfoResponseV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfstring }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DataSourceNames", scope = RecoveryPointInfoResponse.class)
    public JAXBElement<ArrayOfstring> createRecoveryPointInfoResponseDataSourceNames(ArrayOfstring value) {
        return new JAXBElement<ArrayOfstring>(_RecoveryPointInfoResponseDataSourceNames_QNAME, ArrayOfstring.class, RecoveryPointInfoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfdateTime }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointInTimes", scope = RecoveryPointInfoResponse.class)
    public JAXBElement<ArrayOfdateTime> createRecoveryPointInfoResponseRecoveryPointInTimes(ArrayOfdateTime value) {
        return new JAXBElement<ArrayOfdateTime>(_RecoveryPointInfoResponseRecoveryPointInTimes_QNAME, ArrayOfdateTime.class, RecoveryPointInfoResponse.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ArrayOfEntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RecoveryPointIds", scope = RecoveryPointInfoResponseV201109 .class)
    public JAXBElement<ArrayOfEntityIdV201109> createRecoveryPointInfoResponseV201109RecoveryPointIds(ArrayOfEntityIdV201109 value) {
        return new JAXBElement<ArrayOfEntityIdV201109>(_RecoveryPointInfoResponseV201109RecoveryPointIds_QNAME, ArrayOfEntityIdV201109 .class, RecoveryPointInfoResponseV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link VolumeInfoExV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "VolumeInfo", scope = GetDsVolumeReplicaMapV201109 .class)
    public JAXBElement<VolumeInfoExV201109> createGetDsVolumeReplicaMapV201109VolumeInfo(VolumeInfoExV201109 value) {
        return new JAXBElement<VolumeInfoExV201109>(_VolumeInfo_QNAME, VolumeInfoExV201109 .class, GetDsVolumeReplicaMapV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ClientStampV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ClientStamp", scope = GetDsVolumeReplicaMapV201109 .class)
    public JAXBElement<ClientStampV201109> createGetDsVolumeReplicaMapV201109ClientStamp(ClientStampV201109 value) {
        return new JAXBElement<ClientStampV201109>(_ReplicaInfoExV201109ClientStamp_QNAME, ClientStampV201109 .class, GetDsVolumeReplicaMapV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "FileCatalogStampUri", scope = DataSourceInfoEx.class)
    public JAXBElement<String> createDataSourceInfoExFileCatalogStampUri(String value) {
        return new JAXBElement<String>(_DataSourceInfoExFileCatalogStampUri_QNAME, String.class, DataSourceInfoEx.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DependentRecoveryPointId", scope = RecoveryPointInfoV201109 .class)
    public JAXBElement<EntityIdV201109> createRecoveryPointInfoV201109DependentRecoveryPointId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_RecoveryPointInfoExV201109DependentRecoveryPointId_QNAME, EntityIdV201109 .class, RecoveryPointInfoV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSetId", scope = RecoveryPointInfoV201109 .class)
    public JAXBElement<EntityIdV201109> createRecoveryPointInfoV201109MetadataSetId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_ReplicaInfoV201109MetadataSetId_QNAME, EntityIdV201109 .class, RecoveryPointInfoV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "PolicyId", scope = DataSourceInfoExV201109 .class)
    public JAXBElement<EntityIdV201109> createDataSourceInfoExV201109PolicyId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_UpdateDataSourceInfoV201109PolicyId_QNAME, EntityIdV201109 .class, DataSourceInfoExV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "MetadataSetId", scope = DataSourceInfoExV201109 .class)
    public JAXBElement<EntityIdV201109> createDataSourceInfoExV201109MetadataSetId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_ReplicaInfoV201109MetadataSetId_QNAME, EntityIdV201109 .class, DataSourceInfoExV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link String }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "PolicyXml", scope = ChildPolicy.class)
    public JAXBElement<String> createChildPolicyPolicyXml(String value) {
        return new JAXBElement<String>(_ChildPolicyPolicyXml_QNAME, String.class, ChildPolicy.class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RequestContextV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RequestContext", scope = AddMDSetAndMetadataNameValueArgsV201109 .class)
    public JAXBElement<RequestContextV201109> createAddMDSetAndMetadataNameValueArgsV201109RequestContext(RequestContextV201109 value) {
        return new JAXBElement<RequestContextV201109>(_RequestContext_QNAME, RequestContextV201109 .class, AddMDSetAndMetadataNameValueArgsV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RequestContextV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RequestContext", scope = GetDsArrayInfoArgsV201205 .class)
    public JAXBElement<RequestContextV201109> createGetDsArrayInfoArgsV201205RequestContext(RequestContextV201109 value) {
        return new JAXBElement<RequestContextV201109>(_RequestContext_QNAME, RequestContextV201109 .class, GetDsArrayInfoArgsV201205 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "DatasourceId", scope = GetReplicaArgsV201109 .class)
    public JAXBElement<EntityIdV201109> createGetReplicaArgsV201109DatasourceId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_GetReplicaArgsV201109DatasourceId_QNAME, EntityIdV201109 .class, GetReplicaArgsV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link EntityIdV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "ContainerId", scope = GetReplicaArgsV201109 .class)
    public JAXBElement<EntityIdV201109> createGetReplicaArgsV201109ContainerId(EntityIdV201109 value) {
        return new JAXBElement<EntityIdV201109>(_GetReplicaArgsV201109ContainerId_QNAME, EntityIdV201109 .class, GetReplicaArgsV201109 .class, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RequestContextV201109 }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://windowscloudbackup.com/ROCatalog/V2011_09", name = "RequestContext", scope = GetReplicaArgsV201109 .class)
    public JAXBElement<RequestContextV201109> createGetReplicaArgsV201109RequestContext(RequestContextV201109 value) {
        return new JAXBElement<RequestContextV201109>(_RequestContext_QNAME, RequestContextV201109 .class, GetReplicaArgsV201109 .class, value);
    }

}
