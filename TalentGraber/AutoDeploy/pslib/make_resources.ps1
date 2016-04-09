if($Environment -eq "AzureChinaCloud")
{
. .\pslib\common-china.ps1
}else
{
. .\pslib\common-global.ps1
}
. .\pslib\azureadapter.ps1

$ErrorActionPreference= 'Continue'

MakeSureAffinityGroupExists -Location $location -AffinityGroupName $AffinityGroupName
# create the cloud services if not exists
MakeSureAzureServiceExists -ServiceName $ProductAzureServiceName -AffinityGroupName $AffinityGroupName
MakeSureAzureServiceExists -ServiceName $StarDustPortalAzureServiceName -AffinityGroupName $AffinityGroupName


MakeSureResourceGroupExists -ResourceGroupName $ResourceGroupName -Location $location
$Sku = "Basic"
$Size = "C2"
MakeSureRedisCacheExists -RedisCacheServerName $StarDustRedisCacheProductServerName -ResourceGroupName $ResourceGroupName -Location $location -Size $Size -Sku $Sku


$databaseSecpasswd = ConvertTo-SecureString $databasePassword -AsPlainText -Force
$databaseCredential = New-Object System.Management.Automation.PSCredential ($databaseUserName, $databaseSecpasswd)
MakeSureDatabaseServerExists -ResourceGroupName $ResourceGroupName -ServerName $databaseServerName -Credential $databaseCredential -Location $location
MakeSureDatabaseExists -ResourceGroupName $ResourceGroupName -DatabaseName $goldDataBaseName -ServerName $databaseServerName -DatabaseEdition $databaseEdition -DatabaseMaxSize $databaseMaxSize


MakeSureStorageAccountExists -StorageName $diagnosticStorageAccountName -Location $location
MakeSureStorageAccountExists -StorageName $deploymentStorageAccountName -Location $location
MakeSureStorageAccountExists -StorageName $imageStorageAccountName -Location $location


#MakeSureReservedIpExists -ReservedIpName $reservedIpForProductServiceName -Location $location
#MakeSureReservedIpExists -ReservedIpName $reservedIpForProductServiceNameStage -Location $location
#MakeSureReservedIpExists -ReservedIpName $reservedIpForPortalServiceName -Location $location
#MakeSureReservedIpExists -ReservedIpName $reservedIpForPortalServiceNameStage -Location $location