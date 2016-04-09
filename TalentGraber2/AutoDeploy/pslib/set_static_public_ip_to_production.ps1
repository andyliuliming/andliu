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
Write-Host "Set reserved ip $reservedIpForProductServiceName for $StarDustProductAzureServiceName for the Production"
Set-AzureReservedIPAssociation -ReservedIPName $reservedIpForProductServiceName -ServiceName $StarDustProductAzureServiceName -Slot Production

Write-Host "Set reserved ip $reservedIpForPortalServiceName for $StarDustPortalAzureServiceName for the Production"
Set-AzureReservedIPAssociation -ReservedIPName $reservedIpForPortalServiceName -ServiceName $StarDustPortalAzureServiceName -Slot Production
