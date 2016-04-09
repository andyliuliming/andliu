if($Environment -eq "AzureChinaCloud")
{
. .\pslib\common-china.ps1
}else
{
. .\pslib\common-global.ps1
}
. .\pslib\azureadapter.ps1

Write-Host "DiagnosticStorageAccountName is $diagnosticStorageAccountName "
$diagnosticStorageKey=GetStorageAccountKey -ResourceGroupName $ResourceGroupName -StorageAccountName $diagnosticStorageAccountName
$diagnosticStorageContext = New-AzureStorageContext -StorageAccountName $diagnosticStorageAccountName -StorageAccountKey $diagnosticStorageKey

$StarDustProductCacheKey = GetRedisCacheKey -ResourceGroupName $ResourceGroupName -name $StarDustRedisCacheProductServerName

$StarDustProductServiceDiagnosticConfig = "$currentFolder/$ProductAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.$ProductServiceRoleName.PubConfig.xml"
$diagnosticConfig = Get-Content -Encoding UTF8 -Path $StarDustProductServiceDiagnosticConfig
$diagnosticConfig = ReplaceRealValue -TemplateOrigin $diagnosticConfig
Set-Content -Encoding UTF8 -Path $StarDustProductServiceDiagnosticConfig -Value $diagnosticConfig

Write-Host "setting the product service diagnostic extension"
SetDiagnosticExtension -ServiceName $ProductAzureServiceName -StorageContext $diagnosticStorageContext -RoleName $ProductServiceRoleName -DiagnosticConfigurationPath $StarDustProductServiceDiagnosticConfig -Slot Production

