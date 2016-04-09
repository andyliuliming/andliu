if($Environment -eq "AzureChinaCloud")
{
. .\pslib\common-china.ps1
}else
{
. .\pslib\common-global.ps1
}
. .\pslib\azureadapter.ps1


$ErrorActionPreference= 'Continue'


$Slot="Staging"

Remove-AzureDeployment -ServiceName $StarDustProductAzureServiceName -Slot $Slot -Force
Write-Host "$StarDustProductAzureServiceName is removed"
Remove-AzureDeployment -ServiceName $StarDustPortalAzureServiceName -Slot $Slot -Force
Write-Host "$StarDustPortalAzureServiceName is removed"
