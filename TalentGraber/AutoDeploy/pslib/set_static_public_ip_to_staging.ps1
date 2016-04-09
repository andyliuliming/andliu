if($Environment -eq "AzureChinaCloud")
{
. .\pslib\common-china.ps1
}else
{
. .\pslib\common-global.ps1
}
. .\pslib\azureadapter.ps1

$ErrorActionPreference= 'Continue'

# bind the reserved ip to the target.
Write-Host "Set reserved ip $reservedIpForProductServiceNameStage for $StarDustProductAzureServiceName for the Staging"
Set-AzureReservedIPAssociation -ReservedIPName $reservedIpForProductServiceNameStage -ServiceName $StarDustProductAzureServiceName -Slot Staging

Write-Host "Set reserved ip $reservedIpForPortalServiceNameStage for $StarDustPortalAzureServiceName for the Staging"
Set-AzureReservedIPAssociation -ReservedIPName $reservedIpForPortalServiceNameStage -ServiceName $StarDustPortalAzureServiceName -Slot Staging
