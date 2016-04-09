######################  common config     ############################
$buildType = "Debug"
$Prefix = "TalentGraber"

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
$goldDataBaseName = "talentgrabergold"
$collation = "SQL_Latin1_General_CP1_CI_AS"
$databaseEdition="Basic"
#https://msdn.microsoft.com/en-us/library/Dn546722.aspx
$databaseVersion=2.0
$databaseMaxSize=(2*1024*1024*1024)# this is in bytes
$databaseUserName="TalentGraber"
$databasePassword="User@123"
$databaseServerName="talentgraberdatabase"

######################  azure service related  ############################
$StarDustAffinityGroupName = "TalentGraberAffinityGroup"
$StarDustProductAzureServiceName = "TalentGraberProductAzureService"
$StarDustProductAzureServiceProjectName = "ProductAzureService"
$StarDustProductServiceRoleName = "ProductService"

$AllowedCrossDomainHost="*"
$StarDustResourceGroupName="TalentGraberResourceGroup"

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