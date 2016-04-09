if($Environment -eq "AzureChinaCloud")
{
. .\pslib\common-china.ps1
}else
{
. .\pslib\common-global.ps1
}
. .\pslib\azureadapter.ps1

$ErrorActionPreference= 'Continue'

Remove-AzureReservedIPAssociation -ReservedIPName $reservedIpForProductServiceName -ServiceName $StarDustProductAzureServiceName -Slot Staging -ErrorAction Continue -Force 
Remove-AzureReservedIPAssociation -ReservedIPName $reservedIpForProductServiceName -ServiceName $StarDustProductAzureServiceName -Slot Production -ErrorAction Continue -Force 
Remove-AzureReservedIPAssociation -ReservedIPName $reservedIpForPortalServiceName -ServiceName $StarDustPortalAzureServiceName -Slot Staging -ErrorAction Continue -Force 
Remove-AzureReservedIPAssociation -ReservedIPName $reservedIpForPortalServiceName -ServiceName $StarDustPortalAzureServiceName -Slot Production -ErrorAction Continue -Force 
