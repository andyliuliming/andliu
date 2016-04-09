######################  common config     ############################
$buildType = "Debug"
$Prefix = "StarDust"

###################### account for monitoring #######################
$MonitoringAccount="13310100283"
$MonitoringPassword="User@123"

###################### storage related  #############################
$storageType="Standard_GRS"
$deploymentStorageAccountName=$Prefix.ToLower() + "deployments"
$diagnosticStorageAccountName=$Prefix.ToLower() + "diagnostic"
$imageStorageAccountName=$Prefix.ToLower() + "images"
$imageStorageAccountKey = ""
$StorageAccountEndpoint = ""

######################  database related  ############################
$goldDataBaseName = "stardustgold"
$collation = "SQL_Latin1_General_CP1_CI_AS"
$databaseEdition="Basic"
#https://msdn.microsoft.com/en-us/library/Dn546722.aspx
$databaseVersion=2.0
$databaseMaxSize=(2*1024*1024*1024)# this is in bytes
$databaseUserName="StarDust"
$databasePassword="User@123"
$databaseServerName="stardustdatabase"

######################  azure service related  ############################
$StarDustAffinityGroupName = "StarDustAffinityGroup"
$StarDustProductAzureServiceName = "StarDustProductAzureService"
$StarDustProductServiceRoleName = "StarDustProductService"
$StarDustPortalAzureServiceName = "StarDustPortalAzureService"
$StarDustPortalServiceRoleName = "StarDustPortalService"

####################################  redis cache related #####################################
$StarDustRedisCacheProductServerName = "StarDustcache"
$StarDustProductCacheAddress=$StarDustRedisCacheProductServerName+".redis.cache.windows.net"
$StarDustProductCacheKey=""

####################################  porn image detection ####################################
$WanXiangAppId="10031424"
$WanXiangSecretId="AKID0CGuJzFzot73krquuui9Kmj91SxIkMUC"
$WanXiangSecretKey="izZoLPWxtT35vwyZQihyt5mMKwZIdFWE"

#$AllowedCrossDomainHost="http://$StarDustPortalAzureServiceName.cloudapp.net,http://StarDust.com,https://$StarDustPortalAzureServiceName.cloudapp.net,https://StarDust.com"
$AllowedCrossDomainHost="*"
$StarDustResourceGroupName="StarDustResourceGroup"
$reservedIpForProductServiceName = $Prefix + "_product_ip"
$reservedIpForProductServiceNameStage = $Prefix + "_product_ip_stage"
$reservedIpForPortalServiceName = $Prefix + "_portal_ip"
$reservedIpForPortalServiceNameStage = $Prefix + "_portal_ip_stage"

#################################### all kinds of accounts #######################################

$ErrorActionPreference= 'Stop'
$currentFolder = pwd
$currentFolder="$currentFolder/.."

function ReplaceRealValue
{
    param
    (
    $TemplateOrigin
    )
    # get the account key
    $TemplateOrigin=$TemplateOrigin -replace "{DiagnosticStorageAccountName}",$diagnosticStorageAccountName
    $TemplateOrigin=$TemplateOrigin -replace "{DiagnosticStorageAccountKey}",$diagnosticStorageKey
    $TemplateOrigin=$TemplateOrigin -replace "{DATABASE_SERVER_NAME}",$databaseServerName
    $TemplateOrigin=$TemplateOrigin -replace "{DATABASE_SUFFIX}",$databaseSuffix
    $TemplateOrigin=$TemplateOrigin -replace "{GOLD_DATABASENAME}",$goldDataBaseName
    $TemplateOrigin=$TemplateOrigin -replace "{DATABASE_USER_NAME}",$databaseUserName
    $TemplateOrigin=$TemplateOrigin -replace "{DATABASE_PASSWORD}",$databasePassword
    $TemplateOrigin=$TemplateOrigin -replace "{StarDustProductServiceAddress}",$StarDustProductServiceAddress
    $TemplateOrigin=$TemplateOrigin -replace "{StarDustSearchClusterName}",$StarDustSearchClusterName
    $TemplateOrigin=$TemplateOrigin -replace "{StarDustSearchClusterPort}",$StarDustSearchClusterPort
    $TemplateOrigin=$TemplateOrigin -replace "{StorageAccountEndpoint}",$StorageAccountEndpoint
    $TemplateOrigin=$TemplateOrigin -replace "{AzureImageStorageAccount}",$imageStorageAccountName
    $TemplateOrigin=$TemplateOrigin -replace "{AzureImageStorageAccountKey}",$imageStorageAccountKey

    # #####################porn image detection ##########################
    $TemplateOrigin=$TemplateOrigin -replace "{WanXiangAppId}",$WanXiangAppId
    $TemplateOrigin=$TemplateOrigin -replace "{WanXiangSecretId}",$WanXiangSecretId
    $TemplateOrigin=$TemplateOrigin -replace "{WanXiangSecretKey}",$WanXiangSecretKey
    # ##################### monitoring accounts ##########################
    $TemplateOrigin=$TemplateOrigin -replace "{MonitoringAccount}",$MonitoringAccount
    $TemplateOrigin=$TemplateOrigin -replace "{MonitoringPassword}",$MonitoringPassword

    # ##################### fulfill the redis cache ########################
    $TemplateOrigin=$TemplateOrigin -replace "{StarDustProductCacheAddress}",$StarDustProductCacheAddress
    $TemplateOrigin=$TemplateOrigin -replace "{StarDustProductCacheKey}",$StarDustProductCacheKey
    
    # ##################### network related ##############################
    $TemplateOrigin=$TemplateOrigin -replace "___StarDust_portal_ip___",$reservedIpForPortalServiceName
    $TemplateOrigin=$TemplateOrigin -replace "___StarDust_product_ip___",$reservedIpForProductServiceName
    $TemplateOrigin=$TemplateOrigin -replace "{AllowedCrossDomainHost}",$AllowedCrossDomainHost

    # ##################### kuaidi100 related ############################

    return $TemplateOrigin
}