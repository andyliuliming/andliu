if($Environment -eq "AzureChinaCloud")
{
. .\pslib\common-china.ps1
}else
{
. .\pslib\common-global.ps1
}
. .\pslib\azureadapter.ps1

Write-Host "DiagnosticStorageAccountName is $diagnosticStorageAccountName "
$diagnosticStorageKey=GetStorageAccountKey -ResourceGroupName $StarDustResourceGroupName -StorageAccountName $diagnosticStorageAccountName
$diagnosticStorageContext = New-AzureStorageContext -StorageAccountName $diagnosticStorageAccountName -StorageAccountKey $diagnosticStorageKey

$StarDustProductCacheKey = GetRedisCacheKey -ResourceGroupName $StarDustResourceGroupName -name $StarDustRedisCacheProductServerName

$StarDustProductServiceDiagnosticConfig = "$currentFolder/$StarDustProductAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.$StarDustProductServiceRoleName.PubConfig.xml"
$diagnosticConfig = Get-Content -Encoding UTF8 -Path $StarDustProductServiceDiagnosticConfig
$diagnosticConfig = ReplaceRealValue -TemplateOrigin $diagnosticConfig
Set-Content -Encoding UTF8 -Path $StarDustProductServiceDiagnosticConfig -Value $diagnosticConfig

Write-Host "setting the product service diagnostic extension"
SetDiagnosticExtension -ServiceName $StarDustProductAzureServiceName -StorageContext $diagnosticStorageContext -RoleName $StarDustProductServiceRoleName -DiagnosticConfigurationPath $StarDustProductServiceDiagnosticConfig -Slot Production

