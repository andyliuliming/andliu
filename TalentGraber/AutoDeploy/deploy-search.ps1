param($Environment = "AzureCloud")

$deploySearchCommand = "install-elasticsearch.ps1"
$rebuildIndex = "RebuildIndex.bat"
$searchContainer = "searchresource"
$deploySearchScript = "http://$storageAccountName.$StorageAccountEndpoint/$searchContainer/$deploySearchCommand"

#Upload resource to storage account
$context = GetStorageAccountContext -ResoureGroupName $ResourceGroupName -Name $storageAccountName
MakeSureContainerExits -Context $context -Container $searchContainer

UploadResource -Context $context -ContainerName $searchContainer -FileName "$deploySearchCommand" -Overwrite
UploadResource -Context $context -ContainerName $searchContainer -FileName "$rebuildIndex" -Overwrite

for($i = 0; $i -lt $searchClusterInstanceCount; $i++)
{
    Write-Host "Deploy ElasticSearch on $searchVMNamePrefix$i" -ForegroundColor Green

    $scripturi = "http://$storageAccountName.$StorageAccountEndpoint/$searchContainer/$deploySearchCommand"
    RunCommandOnVM -ResourceGroupName $ResourceGroupName -Location $location -vmName "$searchVMNamePrefix$i" -scripturi $scripturi -command "$deploySearchCommand -deploymentStorageAccount $storageAccountName > c:\install-elasticsearch.txt 2>&1"
}