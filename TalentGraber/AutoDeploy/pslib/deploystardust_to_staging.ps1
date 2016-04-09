. .\pslib\azureadapter.ps1

if($Environment -eq "AzureChinaCloud")
{
. .\pslib\common-china.ps1
}else
{
. .\pslib\common-global.ps1
}

.\pslib\buildStarDust.ps1

Set-AzureSubscription -SubscriptionId $subscriptionId -CurrentStorageAccountName $deploymentStorageAccountName

$diagnosticStorageKey = GetStorageAccountKey -ResourceGroupName $ResourceGroupName -StorageAccountName $diagnosticStorageAccountName
Write-Host "DiagnosticStorageAccountName is $diagnosticStorageAccountName and key is $diagnosticStorageKey"

$diagnosticStorageContext = New-AzureStorageContext -StorageAccountName $diagnosticStorageAccountName -StorageAccountKey $diagnosticStorageKey

$StarDustProductCacheKey = GetRedisCacheKey -ResourceGroupName $ResourceGroupName -name $StarDustRedisCacheProductServerName

$imageStorageAccountKey = GetStorageAccountKey -ResourceGroupName $ResourceGroupName -StorageAccountName $imageStorageAccountName

# Set-AzureDeployment -Upgrade we should check whether the azure service exists.
# i don't know why the CurrentStorageAccountName is mandatory...

#replace the values in the service service/diagnostic config
#$StarDustProductServiceConfig = "$currentFolder/$ProductAzureServiceName/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"
$StarDustProductServiceConfig = "$currentFolder/$ProductAzureServiceProjectName/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"

$cloudConfig = Get-Content -Encoding UTF8 -Path $StarDustProductServiceConfig
$cloudConfig = ReplaceRealValue -TemplateOrigin $cloudConfig
Set-Content -Encoding UTF8 -Path $StarDustProductServiceConfig -Value $cloudConfig

#todo generate the CloudDeploy.cscfg according to the cloud because.

$deploymentStorageKey = GetStorageAccountKey -ResourceGroupName $ResourceGroupName -StorageAccountName $deploymentStorageAccountName
Write-Host "DeploymentStorageAccountName is $deploymentStorageAccountName "
$deploymentStorageContext = New-AzureStorageContext -StorageAccountName $deploymentStorageAccountName -StorageAccountKey $deploymentStorageKey



##### product service ############################################################
Write-Host "deploying the product service"
NewOrUpgradeDeployment -ServiceName $ProductAzureServiceName `
            -Package "$currentFolder/$ProductAzureServiceProjectName/bin/$buildType/app.publish/ProductAzureService.cspkg" `
            -Configuration $StarDustProductServiceConfig `
            -StorageContext $deploymentStorageContext `
            -Slot Staging

###### wait for the role to be running status ###########################
While($true)
{
    $StarDustProductAzureServiceStagingDeployment = Get-AzureDeployment -ServiceName $ProductAzureServiceName -Slot Staging
    if($StarDustProductAzureServiceStagingDeployment.Status -eq "Running")
    {
        Write-Host "role status is $StarDustProductAzureServiceStagingDeployment.Status"
        break;
    }
    else
    {
        Write-Host "$ProductAzureServiceName status is "+$StarDustProductAzureServiceStagingDeployment.Status
        Start-Sleep -s 5
    }
}
