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

$diagnosticStorageKey = GetStorageAccountKey -ResourceGroupName $StarDustResourceGroupName -StorageAccountName $diagnosticStorageAccountName
Write-Host "DiagnosticStorageAccountName is $diagnosticStorageAccountName and key is $diagnosticStorageKey"

$diagnosticStorageContext = New-AzureStorageContext -StorageAccountName $diagnosticStorageAccountName -StorageAccountKey $diagnosticStorageKey

$StarDustProductCacheKey = GetRedisCacheKey -ResourceGroupName $StarDustResourceGroupName -name $StarDustRedisCacheProductServerName

$imageStorageAccountKey = GetStorageAccountKey -ResourceGroupName $StarDustResourceGroupName -StorageAccountName $imageStorageAccountName

# Set-AzureDeployment -Upgrade we should check whether the azure service exists.
# i don't know why the CurrentStorageAccountName is mandatory...

#replace the values in the service service/diagnostic config
#$StarDustProductServiceConfig = "$currentFolder/$StarDustProductAzureServiceName/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"
$StarDustProductServiceConfig = "$currentFolder/StarDustProductAzureService/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"

$cloudConfig = Get-Content -Encoding UTF8 -Path $StarDustProductServiceConfig
$cloudConfig = ReplaceRealValue -TemplateOrigin $cloudConfig
Set-Content -Encoding UTF8 -Path $StarDustProductServiceConfig -Value $cloudConfig

#replace the values in the service service/diagnostic config
#$StarDustPortalServiceConfig = "$currentFolder/$StarDustPortalAzureServiceName/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"
$StarDustPortalServiceConfig = "$currentFolder/StarDustPortalAzureService/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"
$cloudConfig = Get-Content -Encoding UTF8 -Path $StarDustPortalServiceConfig
$cloudConfig = ReplaceRealValue -TemplateOrigin $cloudConfig
Set-Content -Encoding UTF8 -Path $StarDustPortalServiceConfig -Value $cloudConfig

#todo generate the CloudDeploy.cscfg according to the cloud because.

$deploymentStorageKey = GetStorageAccountKey -ResourceGroupName $StarDustResourceGroupName -StorageAccountName $deploymentStorageAccountName
Write-Host "DeploymentStorageAccountName is $deploymentStorageAccountName "
$deploymentStorageContext = New-AzureStorageContext -StorageAccountName $deploymentStorageAccountName -StorageAccountKey $deploymentStorageKey



##### product service ############################################################
Write-Host "deploying the product service"
NewOrUpgradeDeployment -ServiceName $StarDustProductAzureServiceName `
            -Package "$currentFolder/StarDustProductAzureService/bin/$buildType/app.publish/StarDustProductAzureService.cspkg" `
            -Configuration $StarDustProductServiceConfig `
            -StorageContext $deploymentStorageContext `
            -Slot Staging

##### portal service ######################################################
Write-Host "deploying the portal service"
NewOrUpgradeDeployment -ServiceName $StarDustPortalAzureServiceName `
            -Package "$currentFolder/StarDustPortalAzureService/bin/$buildType/app.publish/StarDustPortalAzureService.cspkg" `
            -Configuration $StarDustPortalServiceConfig `
            -StorageContext $deploymentStorageContext `
            -Slot Staging

###### wait for the role to be running status ###########################
While($true)
{
    $StarDustProductAzureServiceStagingDeployment = Get-AzureDeployment -ServiceName $StarDustProductAzureServiceName -Slot Staging
    if($StarDustProductAzureServiceStagingDeployment.Status -eq "Running")
    {
        Write-Host "role status is $StarDustProductAzureServiceStagingDeployment.Status"
        break;
    }
    else
    {
        Write-Host "$StarDustProductAzureServiceName status is "+$StarDustProductAzureServiceStagingDeployment.Status
        Start-Sleep -s 5
    }
}

While($true)
{
    $StarDustPortalAzureServiceStagingDeployment = Get-AzureDeployment -ServiceName $StarDustPortalAzureServiceName -Slot Staging
    if($StarDustPortalAzureServiceStagingDeployment.Status -eq "Running")
    {
        Write-Host "role status is $StarDustPortalAzureServiceStagingDeployment.Status"
        break;
    }
    else
    {
        Write-Host "$StarDustPortalAzureServiceName status is "+$StarDustPortalAzureServiceStagingDeployment.Status
        Start-Sleep -s 5
    }
}