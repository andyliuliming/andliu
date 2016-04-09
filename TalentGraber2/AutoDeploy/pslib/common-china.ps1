. .\pslib\common.ps1
######################  common config     ############################
$location = "China East"
$Environment = "AzureChinaCloud"
$subscriptionId = "cc1624c7-3f1d-4ed3-a855-668a86e96ad8"

######################  azure service related  ############################
$StarDustProductServiceAddress="http://stardustproductazureservice.chinacloudapp.cn"
$StorageAccountEndpoint = "core.chinacloudapi.cn"
$databaseSuffix = "database.chinacloudapi.cn"
####################################  redis cache related #####################################
$StarDustProductCacheAddress = $StarDustRedisCacheProductServerName+".redis.cache.chinacloudapi.cn"
$StarDustAuthenticationCacheKey = ""
$StarDustProductCacheKey = ""


#$AllowedCrossDomainHost="http://$StarDustPortalAzureServiceName.cloudapp.net,http://StarDust.com,https://$StarDustPortalAzureServiceName.cloudapp.net,https://StarDust.com"
$AllowedCrossDomainHost="*"


$ErrorActionPreference= 'Stop'
$currentFolder = pwd
$currentFolder="$currentFolder/.."