if($Environment -eq "AzureChinaCloud")
{
. .\pslib\common-china.ps1
}else
{
. .\pslib\common-global.ps1
}
. .\pslib\azureadapter.ps1

$ErrorActionPreference= 'Continue'

Remove-AzureReservedIPAssociation -ReservedIPName $reservedIpForProductServiceNameStage -ServiceName $StarDustProductAzureServiceName -Slot Staging -ErrorAction Continue -Force 
Remove-AzureReservedIPAssociation -ReservedIPName $reservedIpForProductServiceNameStage -ServiceName $StarDustProductAzureServiceName -Slot Production -ErrorAction Continue -Force 
Remove-AzureReservedIPAssociation -ReservedIPName $reservedIpForPortalServiceNameStage -ServiceName $StarDustPortalAzureServiceName -Slot Staging -ErrorAction Continue -Force 
Remove-AzureReservedIPAssociation -ReservedIPName $reservedIpForPortalServiceNameStage -ServiceName $StarDustPortalAzureServiceName -Slot Production -ErrorAction Continue -Force 
