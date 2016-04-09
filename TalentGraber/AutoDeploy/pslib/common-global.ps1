. .\pslib\common.ps1
######################  common config     ############################
$buildType = "Debug"
$Prefix = "StarDust"
$location = "East Asia"
$Environment = "AzureCloud"
$subscriptionId="c4528d9e-c99a-48bb-b12d-fde2176a43b8"

######################  azure service related  ############################
$StarDustProductServiceAddress="http://stardustproductazureservice.cloudapp.net"
$StorageAccountEndpoint = "core.windows.net"
$databaseSuffix = "database.windows.net"
####################################  redis cache related #####################################
$StarDustProductCacheAddress=$StarDustRedisCacheProductServerName+".redis.cache.windows.net"
$StarDustAuthenticationCacheKey=""
$StarDustProductCacheKey=""


#$AllowedCrossDomainHost="http://$StarDustPortalAzureServiceName.cloudapp.net,http://StarDust.com,https://$StarDustPortalAzureServiceName.cloudapp.net,https://StarDust.com"
$AllowedCrossDomainHost="*"

#################################### wechat pay related ############################################

#################################### ali pay related ##############################################

#################################### kuaidi 100 related ###########################################

$ErrorActionPreference= 'Stop'
$currentFolder = pwd
$currentFolder="$currentFolder/.."