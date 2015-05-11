
package org.tempuri;

/**
 * Please modify this class to meet your needs
 * This class is not complete
 */

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.Action;
import javax.xml.ws.FaultAction;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

/**
 * This class was generated by Apache CXF 3.0.2
 * 2014-12-11T20:29:55.632+08:00
 * Generated source version: 3.0.2
 * 
 */
public final class IROCatalogExternalExternalTrue_BasicHttpBindingIROCatalogExternalExternalTrue_Client {

    private static final QName SERVICE_NAME = new QName("http://tempuri.org/", "ROCatalogExternalService");

    private IROCatalogExternalExternalTrue_BasicHttpBindingIROCatalogExternalExternalTrue_Client() {
    }

    public static void main(String args[]) throws java.lang.Exception {
        URL wsdlURL = ROCatalogExternalService.WSDL_LOCATION;
        if (args.length > 0 && args[0] != null && !"".equals(args[0])) { 
            File wsdlFile = new File(args[0]);
            try {
                if (wsdlFile.exists()) {
                    wsdlURL = wsdlFile.toURI().toURL();
                } else {
                    wsdlURL = new URL(args[0]);
                }
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }
      
        ROCatalogExternalService ss = new ROCatalogExternalService(wsdlURL, SERVICE_NAME);
        IROCatalogExternalExternalTrue port = ss.getBasicHttpBindingIROCatalogExternalExternalTrue();  
        
        {
        System.out.println("Invoking getAllPoliciesForMachine...");
        com.windowscloudbackup.rocatalog.v2011_09.GetInfoForMachineArgs _getAllPoliciesForMachine_machineArgs = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.ArrayOfGetPolicyInfoArgs _getAllPoliciesForMachine__return = port.getAllPoliciesForMachine(_getAllPoliciesForMachine_machineArgs);
            System.out.println("getAllPoliciesForMachine.result=" + _getAllPoliciesForMachine__return);

        } catch (IROCatalogExternalExternalTrueGetAllPoliciesForMachineCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllPoliciesForMachine_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetAllPoliciesForMachineCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllPoliciesForMachine_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getCurrentEncryptionKey...");
        com.windowscloudbackup.rocatalog.v2011_09.ReadEncryptionKeyRequest _getCurrentEncryptionKey_request = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.EncryptionKeyEx _getCurrentEncryptionKey__return = port.getCurrentEncryptionKey(_getCurrentEncryptionKey_request);
            System.out.println("getCurrentEncryptionKey.result=" + _getCurrentEncryptionKey__return);

        } catch (IROCatalogExternalExternalTrueGetCurrentEncryptionKeyCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetCurrentEncryptionKey_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetCurrentEncryptionKeyCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetCurrentEncryptionKey_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking updateReplicaClientStamp...");
        com.windowscloudbackup.rocatalog.v2011_09.UpdateReplicaClientStampArgs _updateReplicaClientStamp_replicaClientStampArgs = null;
        try {
            port.updateReplicaClientStamp(_updateReplicaClientStamp_replicaClientStampArgs);

        } catch (IROCatalogExternalExternalTrueUpdateReplicaClientStampCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_UpdateReplicaClientStamp_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueUpdateReplicaClientStampCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_UpdateReplicaClientStamp_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking addMDSetAndMetadataNameValue...");
        com.windowscloudbackup.rocatalog.v2011_09.AddMDSetAndMetadataNameValueArgs _addMDSetAndMetadataNameValue_metaDataNameValue = null;
        try {
            com.windowscloudbackup.cloudcommon.v2011_09.EntityId _addMDSetAndMetadataNameValue__return = port.addMDSetAndMetadataNameValue(_addMDSetAndMetadataNameValue_metaDataNameValue);
            System.out.println("addMDSetAndMetadataNameValue.result=" + _addMDSetAndMetadataNameValue__return);

        } catch (IROCatalogExternalExternalTrueAddMDSetAndMetadataNameValueCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddMDSetAndMetadataNameValue_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueAddMDSetAndMetadataNameValueCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddMDSetAndMetadataNameValue_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getStorageUsageForMachine...");
        com.windowscloudbackup.protection.v2011_09.StorageUsageForMachineRequest _getStorageUsageForMachine_args = null;
        try {
            com.windowscloudbackup.protection.v2011_09.StorageUsageForMachineResponse _getStorageUsageForMachine__return = port.getStorageUsageForMachine(_getStorageUsageForMachine_args);
            System.out.println("getStorageUsageForMachine.result=" + _getStorageUsageForMachine__return);

        } catch (IROCatalogExternalExternalTrueGetStorageUsageForMachineCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetStorageUsageForMachine_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetStorageUsageForMachineCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetStorageUsageForMachine_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getPoliciesInfoForDsIds...");
        com.windowscloudbackup.protection.v2011_09.GetEntitiesInformationArgs _getPoliciesInfoForDsIds_dsIds = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.ArrayOfGetPolicyInfoArgs _getPoliciesInfoForDsIds__return = port.getPoliciesInfoForDsIds(_getPoliciesInfoForDsIds_dsIds);
            System.out.println("getPoliciesInfoForDsIds.result=" + _getPoliciesInfoForDsIds__return);

        } catch (IROCatalogExternalExternalTrueGetPoliciesInfoForDsIdsCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetPoliciesInfoForDsIds_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetPoliciesInfoForDsIdsCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetPoliciesInfoForDsIds_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking setLastAccessTimeForRP...");
        com.windowscloudbackup.protection.v2011_09.SetLastAccessTimeForRPArgs _setLastAccessTimeForRP_rpArgs = null;
        try {
            port.setLastAccessTimeForRP(_setLastAccessTimeForRP_rpArgs);

        } catch (IROCatalogExternalExternalTrueSetLastAccessTimeForRPCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_SetLastAccessTimeForRP_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueSetLastAccessTimeForRPCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_SetLastAccessTimeForRP_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking deleteRecoveryPoints...");
        com.windowscloudbackup.rocatalog.v2011_09.DeleteRecoveryPointsInfoArgs _deleteRecoveryPoints_dsInfo = null;
        try {
            port.deleteRecoveryPoints(_deleteRecoveryPoints_dsInfo);

        } catch (IROCatalogExternalExternalTrueDeleteRecoveryPointsCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_DeleteRecoveryPoints_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueDeleteRecoveryPointsCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_DeleteRecoveryPoints_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getAllRecoverableDSForMachine...");
        com.windowscloudbackup.rocatalog.v2011_09.GetInfoForMachineArgs _getAllRecoverableDSForMachine_machineArgs = null;
        try {
            com.windowscloudbackup.cloudcommon.v2011_09.ArrayOfEntityId _getAllRecoverableDSForMachine__return = port.getAllRecoverableDSForMachine(_getAllRecoverableDSForMachine_machineArgs);
            System.out.println("getAllRecoverableDSForMachine.result=" + _getAllRecoverableDSForMachine__return);

        } catch (IROCatalogExternalExternalTrueGetAllRecoverableDSForMachineCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllRecoverableDSForMachine_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetAllRecoverableDSForMachineCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllRecoverableDSForMachine_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getAllRecoveryPointsForMachine...");
        com.windowscloudbackup.rocatalog.v2011_09.GetInfoForMachineArgs _getAllRecoveryPointsForMachine_machineArgs = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointInfoResponse _getAllRecoveryPointsForMachine__return = port.getAllRecoveryPointsForMachine(_getAllRecoveryPointsForMachine_machineArgs);
            System.out.println("getAllRecoveryPointsForMachine.result=" + _getAllRecoveryPointsForMachine__return);

        } catch (IROCatalogExternalExternalTrueGetAllRecoveryPointsForMachineCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllRecoveryPointsForMachine_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetAllRecoveryPointsForMachineCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllRecoveryPointsForMachine_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getAllRecoveryPointsForDataSource...");
        com.windowscloudbackup.rocatalog.v2011_09.GetInfoForMachineArgs _getAllRecoveryPointsForDataSource_dataSourceArgs = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointInfoResponse _getAllRecoveryPointsForDataSource__return = port.getAllRecoveryPointsForDataSource(_getAllRecoveryPointsForDataSource_dataSourceArgs);
            System.out.println("getAllRecoveryPointsForDataSource.result=" + _getAllRecoveryPointsForDataSource__return);

        } catch (IROCatalogExternalExternalTrueGetAllRecoveryPointsForDataSourceCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllRecoveryPointsForDataSource_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetAllRecoveryPointsForDataSourceCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllRecoveryPointsForDataSource_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking addMetadataNameValue...");
        com.windowscloudbackup.rocatalog.v2011_09.AddMDSetArgs _addMetadataNameValue_metaDataNameValue = null;
        try {
            port.addMetadataNameValue(_addMetadataNameValue_metaDataNameValue);

        } catch (IROCatalogExternalExternalTrueAddMetadataNameValueCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddMetadataNameValue_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueAddMetadataNameValueCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddMetadataNameValue_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking addDsVolumeReplicaMap...");
        com.windowscloudbackup.rocatalog.v2011_09.ArrayOfAddDsVolumeReplicaMap _addDsVolumeReplicaMap_dsVolRepMap = null;
        try {
            port.addDsVolumeReplicaMap(_addDsVolumeReplicaMap_dsVolRepMap);

        } catch (IROCatalogExternalExternalTrueAddDsVolumeReplicaMapCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddDsVolumeReplicaMap_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueAddDsVolumeReplicaMapCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddDsVolumeReplicaMap_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getAllPolicyIds...");
        com.windowscloudbackup.rocatalog.v2011_09.GetInfoForMachineArgs _getAllPolicyIds_machineArgs = null;
        try {
            com.windowscloudbackup.cloudcommon.v2011_09.ArrayOfEntityId _getAllPolicyIds__return = port.getAllPolicyIds(_getAllPolicyIds_machineArgs);
            System.out.println("getAllPolicyIds.result=" + _getAllPolicyIds__return);

        } catch (IROCatalogExternalExternalTrueGetAllPolicyIdsCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllPolicyIds_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetAllPolicyIdsCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllPolicyIds_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking addRPVolumeReplicaMapInfo...");
        com.windowscloudbackup.rocatalog.v2011_09.ArrayOfAddRPVolumeReplicaMap _addRPVolumeReplicaMapInfo_rpVolumeReplicaInfo = null;
        try {
            port.addRPVolumeReplicaMapInfo(_addRPVolumeReplicaMapInfo_rpVolumeReplicaInfo);

        } catch (IROCatalogExternalExternalTrueAddRPVolumeReplicaMapInfoCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddRPVolumeReplicaMapInfo_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueAddRPVolumeReplicaMapInfoCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddRPVolumeReplicaMapInfo_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getAllPolicies...");
        com.windowscloudbackup.rocatalog.v2011_09.GetInfoForMachineArgs _getAllPolicies_machineArgs = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.ArrayOfGetPolicyInfoArgs _getAllPolicies__return = port.getAllPolicies(_getAllPolicies_machineArgs);
            System.out.println("getAllPolicies.result=" + _getAllPolicies__return);

        } catch (IROCatalogExternalExternalTrueGetAllPoliciesCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllPolicies_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetAllPoliciesCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllPolicies_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getRPVolumeReplicaMapInfo...");
        com.windowscloudbackup.protection.v2011_09.GetEntityInformationArgs _getRPVolumeReplicaMapInfo_entity = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.ArrayOfGetRPVolumeReplicaMapResponse _getRPVolumeReplicaMapInfo__return = port.getRPVolumeReplicaMapInfo(_getRPVolumeReplicaMapInfo_entity);
            System.out.println("getRPVolumeReplicaMapInfo.result=" + _getRPVolumeReplicaMapInfo__return);

        } catch (IROCatalogExternalExternalTrueGetRPVolumeReplicaMapInfoCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetRPVolumeReplicaMapInfo_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetRPVolumeReplicaMapInfoCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetRPVolumeReplicaMapInfo_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getDsVolumeReplicaMap...");
        com.windowscloudbackup.protection.v2011_09.GetEntityInformationArgs _getDsVolumeReplicaMap_entity = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.ArrayOfGetDsVolumeReplicaMap _getDsVolumeReplicaMap__return = port.getDsVolumeReplicaMap(_getDsVolumeReplicaMap_entity);
            System.out.println("getDsVolumeReplicaMap.result=" + _getDsVolumeReplicaMap__return);

        } catch (IROCatalogExternalExternalTrueGetDsVolumeReplicaMapCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetDsVolumeReplicaMap_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetDsVolumeReplicaMapCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetDsVolumeReplicaMap_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking deletePolicyForMachine...");
        com.windowscloudbackup.rocatalog.v2011_09.DeletePolicyInfoArgs _deletePolicyForMachine_deletePolicyInfo = null;
        try {
            port.deletePolicyForMachine(_deletePolicyForMachine_deletePolicyInfo);

        } catch (IROCatalogExternalExternalTrueDeletePolicyForMachineCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_DeletePolicyForMachine_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueDeletePolicyForMachineCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_DeletePolicyForMachine_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking updateDatasourceVolumeClientStamp...");
        com.windowscloudbackup.rocatalog.v2011_09.UpdateDatasourceVolumeClientStampArgs _updateDatasourceVolumeClientStamp_dsVolStampArgs = null;
        try {
            port.updateDatasourceVolumeClientStamp(_updateDatasourceVolumeClientStamp_dsVolStampArgs);

        } catch (IROCatalogExternalExternalTrueUpdateDatasourceVolumeClientStampCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_UpdateDatasourceVolumeClientStamp_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueUpdateDatasourceVolumeClientStampCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_UpdateDatasourceVolumeClientStamp_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking addRPSetInfo...");
        com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointSetInfo _addRPSetInfo_rpSetInfo = null;
        try {
            com.windowscloudbackup.cloudcommon.v2011_09.EntityId _addRPSetInfo__return = port.addRPSetInfo(_addRPSetInfo_rpSetInfo);
            System.out.println("addRPSetInfo.result=" + _addRPSetInfo__return);

        } catch (IROCatalogExternalExternalTrueAddRPSetInfoCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddRPSetInfo_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueAddRPSetInfoCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddRPSetInfo_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking deletePolicy...");
        com.windowscloudbackup.rocatalog.v2011_09.DeletePolicyInfoArgs _deletePolicy_deletePolicyInfo = null;
        try {
            port.deletePolicy(_deletePolicy_deletePolicyInfo);

        } catch (IROCatalogExternalExternalTrueDeletePolicyCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_DeletePolicy_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueDeletePolicyCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_DeletePolicy_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getAllRPForDS...");
        com.windowscloudbackup.protection.v2011_09.GetEntityInformationArgs _getAllRPForDS_entity = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.ArrayOfRecoveryPointInfoEx _getAllRPForDS__return = port.getAllRPForDS(_getAllRPForDS_entity);
            System.out.println("getAllRPForDS.result=" + _getAllRPForDS__return);

        } catch (IROCatalogExternalExternalTrueGetAllRPForDSCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllRPForDS_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetAllRPForDSCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllRPForDS_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getPolicyAndRPInfoForMachine...");
        com.windowscloudbackup.rocatalog.v2011_09.GetInfoForMachineArgs _getPolicyAndRPInfoForMachine_machineArgs = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.PolicyAndRPInfoResponse _getPolicyAndRPInfoForMachine__return = port.getPolicyAndRPInfoForMachine(_getPolicyAndRPInfoForMachine_machineArgs);
            System.out.println("getPolicyAndRPInfoForMachine.result=" + _getPolicyAndRPInfoForMachine__return);

        } catch (IROCatalogExternalExternalTrueGetPolicyAndRPInfoForMachineCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetPolicyAndRPInfoForMachine_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetPolicyAndRPInfoForMachineCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetPolicyAndRPInfoForMachine_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getRPInfo...");
        com.windowscloudbackup.protection.v2011_09.GetEntityInformationArgs _getRPInfo_entity = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointInfoEx _getRPInfo__return = port.getRPInfo(_getRPInfo_entity);
            System.out.println("getRPInfo.result=" + _getRPInfo__return);

        } catch (IROCatalogExternalExternalTrueGetRPInfoCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetRPInfo_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetRPInfoCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetRPInfo_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking addRPInfo...");
        com.windowscloudbackup.rocatalog.v2011_09.RecoveryPointInfo _addRPInfo_rpInfo = null;
        try {
            com.windowscloudbackup.cloudcommon.v2011_09.EntityId _addRPInfo__return = port.addRPInfo(_addRPInfo_rpInfo);
            System.out.println("addRPInfo.result=" + _addRPInfo__return);

        } catch (IROCatalogExternalExternalTrueAddRPInfoCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddRPInfo_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueAddRPInfoCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddRPInfo_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getAllEncryptionKeys...");
        com.windowscloudbackup.rocatalog.v2011_09.ReadEncryptionKeyRequest _getAllEncryptionKeys_request = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.ArrayOfEncryptionKeyEx _getAllEncryptionKeys__return = port.getAllEncryptionKeys(_getAllEncryptionKeys_request);
            System.out.println("getAllEncryptionKeys.result=" + _getAllEncryptionKeys__return);

        } catch (IROCatalogExternalExternalTrueGetAllEncryptionKeysCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllEncryptionKeys_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetAllEncryptionKeysCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetAllEncryptionKeys_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking updatePolicyInfo...");
        com.windowscloudbackup.rocatalog.v2011_09.UpdatePolicyInfoArgs _updatePolicyInfo_policyInfo = null;
        try {
            port.updatePolicyInfo(_updatePolicyInfo_policyInfo);

        } catch (IROCatalogExternalExternalTrueUpdatePolicyInfoCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_UpdatePolicyInfo_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueUpdatePolicyInfoCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_UpdatePolicyInfo_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getStatus...");
        com.windowscloudbackup.cloudcommon.v2011_09.GenericAsyncStatusArgs _getStatus_request = null;
        try {
            com.windowscloudbackup.cloudcommon.v2011_09.GenericAsyncStatusResult _getStatus__return = port.getStatus(_getStatus_request);
            System.out.println("getStatus.result=" + _getStatus__return);

        } catch (IROCatalogExternalExternalTrueGetStatusCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetStatus_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetStatusCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetStatus_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getDataSourcesInfo...");
        com.windowscloudbackup.rocatalog.v2011_09.GetDsArrayInfoArgs _getDataSourcesInfo_dataSourcesInfo = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.ArrayOfDataSourceInfoEx _getDataSourcesInfo__return = port.getDataSourcesInfo(_getDataSourcesInfo_dataSourcesInfo);
            System.out.println("getDataSourcesInfo.result=" + _getDataSourcesInfo__return);

        } catch (IROCatalogExternalExternalTrueGetDataSourcesInfoCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetDataSourcesInfo_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetDataSourcesInfoCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetDataSourcesInfo_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking writeEncryptionKeys...");
        com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysRequest _writeEncryptionKeys_request = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.WriteEncryptionKeysResponse _writeEncryptionKeys__return = port.writeEncryptionKeys(_writeEncryptionKeys_request);
            System.out.println("writeEncryptionKeys.result=" + _writeEncryptionKeys__return);

        } catch (IROCatalogExternalExternalTrueWriteEncryptionKeysCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_WriteEncryptionKeys_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueWriteEncryptionKeysCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_WriteEncryptionKeys_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking addPolicy...");
        com.windowscloudbackup.rocatalog.v2011_09.AddPolicyArgs _addPolicy_policyInfo = null;
        try {
            com.windowscloudbackup.cloudcommon.v2011_09.EntityId _addPolicy__return = port.addPolicy(_addPolicy_policyInfo);
            System.out.println("addPolicy.result=" + _addPolicy__return);

        } catch (IROCatalogExternalExternalTrueAddPolicyCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddPolicy_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueAddPolicyCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_AddPolicy_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getReplica...");
        com.windowscloudbackup.rocatalog.v2011_09.GetReplicaArgs _getReplica_replicaId = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.ReplicaInfoEx _getReplica__return = port.getReplica(_getReplica_replicaId);
            System.out.println("getReplica.result=" + _getReplica__return);

        } catch (IROCatalogExternalExternalTrueGetReplicaCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetReplica_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetReplicaCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetReplica_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getMetadataSetInfo...");
        com.windowscloudbackup.protection.v2011_09.GetEntityInformationArgs _getMetadataSetInfo_entity = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.ArrayOfMetadataSetNameValueInfoEx _getMetadataSetInfo__return = port.getMetadataSetInfo(_getMetadataSetInfo_entity);
            System.out.println("getMetadataSetInfo.result=" + _getMetadataSetInfo__return);

        } catch (IROCatalogExternalExternalTrueGetMetadataSetInfoCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetMetadataSetInfo_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetMetadataSetInfoCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetMetadataSetInfo_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }
        {
        System.out.println("Invoking getDsInfo...");
        com.windowscloudbackup.protection.v2011_09.GetEntityInformationArgs _getDsInfo_entity = null;
        try {
            com.windowscloudbackup.rocatalog.v2011_09.DataSourceInfoEx _getDsInfo__return = port.getDsInfo(_getDsInfo_entity);
            System.out.println("getDsInfo.result=" + _getDsInfo__return);

        } catch (IROCatalogExternalExternalTrueGetDsInfoCloudServiceInternalFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetDsInfo_CloudServiceInternalFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        } catch (IROCatalogExternalExternalTrueGetDsInfoCloudServiceFaultFaultFaultMessage e) { 
            System.out.println("Expected exception: IROCatalogExternalExternal_True_GetDsInfo_CloudServiceFaultFault_FaultMessage has occurred.");
            System.out.println(e.toString());
        }
            }

        System.exit(0);
    }

}
