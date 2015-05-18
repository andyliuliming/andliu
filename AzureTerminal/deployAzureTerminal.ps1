$subscriptionName="Windows Azure MSDN - Visual Studio Ultimate"
$existingSubscription = Get-AzureSubscription -SubscriptionName $subscriptionName
if($existingSubscription -eq $null)
{
    Clear-AzureProfile -Force
    Add-AzureAccount
}
Select-AzureSubscription $subscriptionName

.\buildhappyzl.ps1


$buildType="Debug"


$happyzlAuthenticationAzureServiceName="happyzlauthenticationazureservice"
$happyzlAuthenticationServiceRoleName="HappyZLAuthenticationService"


#$AllowedCrossDomainHost="http://$happyzlPortalAzureServiceName.cloudapp.net,http://happyzl.com,https://$happyzlPortalAzureServiceName.cloudapp.net,https://happyzl.com"
$AllowedCrossDomainHost="*"

$reservedIpForAuthenticationService="happyzl_authentication_ip"
$reservedIpForImageService="happyzl_image_ip"
$reservedIpForProductService="happyzl_product_ip"
$reservedIpForPortalService="happyzl_portal_ip"
$reservedIpForActivityService="happyzl_activity_ip"

$databaseEdition="Basic"
$JPushAppKey="fa6e839e835c358051d7f363"
$JPushMasterSecret="e7f67c10617cc11559a03f08"
$UpYunImageBucket="happyzlimages"
#$UpYunOperatorName="happyzl"
#$UpYunOperatorPassword="User@123"
$UpYunFormToken="RFGllJwSR6wzEDmRkP3yA+gMImA="
$DatabaseUserName="happyzl"
$DatabasePassword="User@123"
$SMSProviderKey="f5516977503a9fa613d0e3ef4bc1064d"
$SMSCompanyName="开心之旅"
$deploymentStorageAccountName="happyzldeployments"
$diagnosticStorageAccountName="happyzldiagnostic"

$HappyZLAuthenticationCacheAddress="happyzlcache.redis.cache.windows.net"
$HappyZLAuthenticationCacheKey="eNjNlSmoZeXLuNWH9P0czxNajibFqcvSp1IeM34BODQ="

$HappyZLProductCacheAddress="happyzlcache.redis.cache.windows.net"
$HappyZLProductCacheKey="eNjNlSmoZeXLuNWH9P0czxNajibFqcvSp1IeM34BODQ="

$HappyZLActivityCacheAddress="happyzlcache.redis.cache.windows.net"
$HappyZLActivityCacheKey="eNjNlSmoZeXLuNWH9P0czxNajibFqcvSp1IeM34BODQ="


$Stage="Production"
$currentFolder = pwd

function MakeSureStorageAccountExists
{
    param
    (
        $StorageName
    )
    $storageAccount = Get-AzureStorageAccount -StorageAccountName $StorageName
    if($storageAccount -eq $null)
    {
        Write-Output "storage '$StorageName' not exist, create it..."
        New-AzureStorageAccount -StorageAccountName $StorageName -Location $location
    }
    $storageAccount=$null
}

MakeSureStorageAccountExists -StorageName $diagnosticStorageAccountName
MakeSureStorageAccountExists -StorageName $deploymentStorageAccountName

function MakeSureReservedIpExists
{
    param
    (
    $ReservedIpName
    )
    $reservedIp = Get-AzureReservedIP -ReservedIPName $ReservedIpName
    if($reservedIp -eq $null)
    {
        Write-Output "reserved ip '$ReservedIpName' not exist, create it..."
        New-AzureReservedIP -ReservedIPName $ReservedIpName -Location $location
    }
    $reservedIp=$null
}

MakeSureReservedIpExists -ReservedIpName $reservedIpForAuthenticationService
MakeSureReservedIpExists -ReservedIpName $reservedIpForImageService
MakeSureReservedIpExists -ReservedIpName $reservedIpForProductService
MakeSureReservedIpExists -ReservedIpName $reservedIpForPortalService
MakeSureReservedIpExists -ReservedIpName $reservedIpForActivityService


Set-AzureSubscription -SubscriptionName "Windows Azure MSDN - Visual Studio Ultimate" -CurrentStorageAccountName $deploymentStorageAccountName
#buildhappyzl.ps1

# create the cloud services if not exists
function MakeSureAzureServiceExists 
{
     param
      (
        $ServiceName
     )
     $azureService = Get-AzureService -ServiceName $ServiceName
     if($azureService -eq $null)
     {
        Write-Output "azure service '$ServiceName' not exist, create it..."
        New-AzureService -ServiceName $ServiceName -Location $location
     }
    $azureService=$null
}
MakeSureAzureServiceExists -ServiceName $happyzlAuthenticationAzureServiceName
MakeSureAzureServiceExists -ServiceName $happyzlImageAzureServiceName
MakeSureAzureServiceExists -ServiceName $happyzlProductAzureServiceName
MakeSureAzureServiceExists -ServiceName $happyzlPortalAzureServiceName
MakeSureAzureServiceExists -ServiceName $happyzlActivityAzureServiceName
MakeSureAzureServiceExists -ServiceName $happyzlMailRoomAzureServiceName

# todo generate the database name
# make sure that there exists one database in the specified location.
function GetSpecifiedLocationDataBaseServer
{    
    $dataBaseServer = Get-AzureSqlDatabaseServer
    if($dataBaseServer -eq $null)
    {
        Write-Host "no database servers exists, create it."
        $sqlDatabaseServer = New-AzureSqlDatabaseServer -Location $location -AdministratorLogin $DatabaseUserName -AdministratorLoginPassword $DatabasePassword
        return $sqlDatabaseServer        
    }
    else
    {
     if($dataBaseServer.Location -ne $location)
     {
        Write-Host "location "+$dataBaseServer.Location + " not expected, create it"
        $sqlDatabaseServer = New-AzureSqlDatabaseServer -Location $location
        return $sqlDatabaseServer  
     }
     else
     {
        return $dataBaseServer
     }
    }
}

$databaseServerInSpecifiedLocation = GetSpecifiedLocationDataBaseServer

function MakeSureDatabaseExists
{
    param
    (
    $ServerName,
    $DatabaseName
    )
    $database = Get-AzureSqlDatabase -ServerName $ServerName -DatabaseName $DatabaseName
    if($database -eq $null)
    {
        New-AzureSqlDatabase -DatabaseName $DatabaseName -ServerName $databaseServerInSpecifiedLocation.ServerName -Edition $databaseEdition
    }
}

MakeSureDatabaseExists -DatabaseName $goldDataBaseName -ServerName $databaseServerInSpecifiedLocation.ServerName
MakeSureDatabaseExists -DatabaseName $silverDataBaseName -ServerName $databaseServerInSpecifiedLocation.ServerName
MakeSureDatabaseExists -DatabaseName $activityDataBaseName -ServerName $databaseServerInSpecifiedLocation.ServerName
#MakeSureDatabaseExists -DatabaseName $imageDataBaseName -ServerName $databaseServerInSpecifiedLocation.ServerName

# create database schemas



# todo create the database schema

# Set-AzureDeployment -Upgrade we should check whether the azure service exists.
# i don't know why the CurrentStorageAccountName is mandatory...

# ./buildhappyzl.ps1

function ReplaceRealValue
{
    param
    (
    $TemplateOrigin
    )
    # get the account key
    $diagnosticStorageKey = (Get-AzureStorageKey -StorageAccountName $diagnosticStorageAccountName).Primary
    $TemplateOrigin=$TemplateOrigin -replace '{JPushAppKey}',$JPushAppKey
    $TemplateOrigin=$TemplateOrigin -replace '{JPushMasterSecret}',$JPushMasterSecret
    $TemplateOrigin=$TemplateOrigin -replace '{DiagnosticStorageAccountName}',$diagnosticStorageAccountName
    $TemplateOrigin=$TemplateOrigin -replace '{DiagnosticStorageAccountKey}',$diagnosticStorageKey
    $TemplateOrigin=$TemplateOrigin -replace '{DATABASE_SERVER_NAME}',$databaseServerInSpecifiedLocation.ServerName
    $TemplateOrigin=$TemplateOrigin -replace '{GOLD_DATABASENAME}',$goldDataBaseName
    $TemplateOrigin=$TemplateOrigin -replace '{SILVER_DATABASENAME}',$silverDataBaseName
    $TemplateOrigin=$TemplateOrigin -replace '{IMAGE_DATABASENAME}',$imageDataBaseName
    $TemplateOrigin=$TemplateOrigin -replace '{ACTIVITY_DATABASENAME}',$activityDataBaseName
    $TemplateOrigin=$TemplateOrigin -replace '{DATABASE_USER_NAME}',$DatabaseUserName
    $TemplateOrigin=$TemplateOrigin -replace '{DATABASE_PASSWORD}',$DatabasePassword
    #$TemplateOrigin=$TemplateOrigin -replace '{UpYunOperatorName}',$UpYunOperatorName
    #$TemplateOrigin=$TemplateOrigin -replace '{UpYunOperatorPassword}',$UpYunOperatorPassword
    $TemplateOrigin=$TemplateOrigin -replace '{UpYunFormToken}',$UpYunFormToken
    $TemplateOrigin=$TemplateOrigin -replace '{UpYunImageBucket}',$UpYunImageBucket
    $TemplateOrigin=$TemplateOrigin -replace '{SMSProviderKey}',$SMSProviderKey
    $TemplateOrigin=$TemplateOrigin -replace '{SMSCompanyName}',$SMSCompanyName
    
    # ##################### fulfill the redis cache ########################        
    $TemplateOrigin=$TemplateOrigin -replace '{HappyZLAuthenticationCacheAddress}',$HappyZLAuthenticationCacheAddress
    $TemplateOrigin=$TemplateOrigin -replace '{HappyZLAuthenticationCacheKey}',$HappyZLAuthenticationCacheKey
    $TemplateOrigin=$TemplateOrigin -replace '{HappyZLProductCacheAddress}',$HappyZLProductCacheAddress
    $TemplateOrigin=$TemplateOrigin -replace '{HappyZLProductCacheKey}',$HappyZLProductCacheKey
    $TemplateOrigin=$TemplateOrigin -replace '{HappyZLActivityCacheAddress}',$HappyZLActivityCacheAddress
    $TemplateOrigin=$TemplateOrigin -replace '{HappyZLActivityCacheKey}',$HappyZLActivityCacheKey
    # #####################fulfill the redis cache end######################
    
    $TemplateOrigin=$TemplateOrigin -replace '___happyzl_authentication_ip___',$reservedIpForAuthenticationService
    $TemplateOrigin=$TemplateOrigin -replace '___happyzl_activity_ip___',$reservedIpForActivityService
    $TemplateOrigin=$TemplateOrigin -replace '___happyzl_image_ip___',$reservedIpForImageService
    $TemplateOrigin=$TemplateOrigin -replace '___happyzl_portal_ip___',$reservedIpForPortalService
    $TemplateOrigin=$TemplateOrigin -replace '___happyzl_product_ip___',$reservedIpForProductService
    $TemplateOrigin=$TemplateOrigin -replace '{AllowedCrossDomainHost}',$AllowedCrossDomainHost
    return $TemplateOrigin
}

#replace the values in the service service/diagnostic config
$happyzlAuthenticationServiceConfig = "$currentFolder/$happyzlAuthenticationAzureServiceName/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"
$cloudConfig = Get-Content -Encoding UTF8 -Path $happyzlAuthenticationServiceConfig
$cloudConfig = ReplaceRealValue -TemplateOrigin $cloudConfig
Set-Content -Encoding UTF8 -Path $happyzlAuthenticationServiceConfig -Value $cloudConfig

$happyzlAuthenticationServiceDiagnosticConfig = "$currentFolder/$happyzlAuthenticationAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.HappyZLAuthenticationService.PubConfig.xml"
$diagnosticConfig = Get-Content -Encoding UTF8 -Path $happyzlAuthenticationServiceDiagnosticConfig
$diagnosticConfig = ReplaceRealValue -TemplateOrigin $diagnosticConfig
Set-Content -Encoding UTF8 -Path $happyzlAuthenticationServiceDiagnosticConfig -Value $diagnosticConfig

#replace the values in the service service/diagnostic config
$happyzlImageServiceConfig = "$currentFolder/$happyzlImageAzureServiceName/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"
$cloudConfig = Get-Content -Encoding UTF8 -Path $happyzlImageServiceConfig
$cloudConfig = ReplaceRealValue -TemplateOrigin $cloudConfig
Set-Content -Encoding UTF8 -Path $happyzlImageServiceConfig -Value $cloudConfig

$happyzlImageServiceDiagnosticConfig = "$currentFolder/$happyzlImageAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.HappyZLImageService.PubConfig.xml"
$diagnosticConfig = Get-Content -Encoding UTF8 -Path $happyzlImageServiceDiagnosticConfig
$diagnosticConfig = ReplaceRealValue -TemplateOrigin $diagnosticConfig
Set-Content -Encoding UTF8 -Path $happyzlImageServiceDiagnosticConfig -Value $diagnosticConfig

#replace the values in the service service/diagnostic config
$happyzlProductServiceConfig = "$currentFolder/$happyzlProductAzureServiceName/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"
$cloudConfig = Get-Content -Encoding UTF8 -Path $happyzlProductServiceConfig
$cloudConfig = ReplaceRealValue -TemplateOrigin $cloudConfig
Set-Content -Encoding UTF8 -Path $happyzlProductServiceConfig -Value $cloudConfig

$happyzlProductServiceDiagnosticConfig = "$currentFolder/$happyzlProductAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.HappyZLProductService.PubConfig.xml"
$diagnosticConfig = Get-Content -Encoding UTF8 -Path $happyzlProductServiceDiagnosticConfig
$diagnosticConfig = ReplaceRealValue -TemplateOrigin $diagnosticConfig
Set-Content -Encoding UTF8 -Path $happyzlProductServiceDiagnosticConfig -Value $diagnosticConfig

#replace the values in the service service/diagnostic config
$happyzlPortalServiceConfig = "$currentFolder/$happyzlPortalAzureServiceName/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"
$cloudConfig = Get-Content -Encoding UTF8 -Path $happyzlPortalServiceConfig
$cloudConfig = ReplaceRealValue -TemplateOrigin $cloudConfig
Set-Content -Encoding UTF8 -Path $happyzlPortalServiceConfig -Value $cloudConfig

$happyzlPortalServiceDiagnosticConfig = "$currentFolder/$happyzlPortalAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.HappyZLPortalService.PubConfig.xml"
$diagnosticConfig = Get-Content -Encoding UTF8 -Path $happyzlPortalServiceDiagnosticConfig
$diagnosticConfig = ReplaceRealValue -TemplateOrigin $diagnosticConfig
Set-Content -Encoding UTF8 -Path $happyzlPortalServiceDiagnosticConfig -Value $diagnosticConfig

# replace the values in the service service/diagnostic config
$happyzlActivityServiceConfig = "$currentFolder/$happyzlActivityAzureServiceName/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"
$cloudConfig = Get-Content -Encoding UTF8 -Path $happyzlActivityServiceConfig
$cloudConfig = ReplaceRealValue -TemplateOrigin $cloudConfig
Set-Content -Encoding UTF8 -Path $happyzlActivityServiceConfig -Value $cloudConfig

$happyzlActivityServiceDiagnosticConfig = "$currentFolder/$happyzlActivityAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.HappyZLActivityService.PubConfig.xml"
$diagnosticConfig = Get-Content -Encoding UTF8 -Path $happyzlActivityServiceDiagnosticConfig
$diagnosticConfig = ReplaceRealValue -TemplateOrigin $diagnosticConfig
Set-Content -Encoding UTF8 -Path $happyzlActivityServiceDiagnosticConfig -Value $diagnosticConfig

# replace the values in the service service/diagnostic config
$happyzlMailRoomServiceConfig = "$currentFolder/$happyzlMailRoomAzureServiceName/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"
$cloudConfig = Get-Content -Encoding UTF8 -Path $happyzlMailRoomServiceConfig
$cloudConfig = ReplaceRealValue -TemplateOrigin $cloudConfig
Set-Content -Encoding UTF8 -Path $happyzlMailRoomServiceConfig -Value $cloudConfig

$happyzlMailRoomServiceDiagnosticConfig = "$currentFolder/$happyzlMailRoomAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.HappyZLMailRoomService.PubConfig.xml"
$diagnosticConfig = Get-Content -Encoding UTF8 -Path $happyzlMailRoomServiceDiagnosticConfig
$diagnosticConfig = ReplaceRealValue -TemplateOrigin $diagnosticConfig
Set-Content -Encoding UTF8 -Path $happyzlMailRoomServiceDiagnosticConfig -Value $diagnosticConfig

#todo generate the CloudDeploy.cscfg according to the cloud because.

function NewOrUpgradeDeployment
{
    param
    (
    $ServiceName,
    $RoleName,
    $Package,
    $Configuration,
    $Slot,
    $DiagnosticConfigPath
    )
    $azureDeployment = Get-AzureDeployment -ServiceName $ServiceName
    if($azureDeployment -eq $null)
    {
        Write-Host "no azure deployment exists, so create directly..."
    }
    else
    {
        if ($azureDeployment.Name -ne $null) 
        {
            Write-Output "Deployment exists in $ServiceName. remove it."
            Remove-AzureDeployment -Slot $Slot -ServiceName $ServiceName -Force
        } 
        
    }
    
    $diagnosticStorageKey = (Get-AzureStorageKey -StorageAccountName $diagnosticStorageAccountName).Primary
    Write-Host "DiagnosticStorageAccountName is $diagnosticStorageAccountName "
    $storageContext = New-AzureStorageContext -StorageAccountName $diagnosticStorageAccountName -StorageAccountKey $diagnosticStorageKey
 
    $DiagnosticConfig = New-AzureServiceDiagnosticsExtensionConfig -StorageContext $storageContext -DiagnosticsConfigurationPath $DiagnosticConfigPath -Role $RoleName
    New-AzureDeployment -ServiceName $ServiceName -Package $Package -Configuration $Configuration -Slot $Slot -ExtensionConfiguration @($DiagnosticConfig)
    $azureDeployment = $null
}


"deploying the authentication service"

NewOrUpgradeDeployment -ServiceName $happyzlAuthenticationAzureServiceName `
            -Package "$currentFolder/$happyzlAuthenticationAzureServiceName/bin/$buildType/app.publish/$happyzlAuthenticationAzureServiceName.cspkg" `
            -Configuration $happyzlAuthenticationServiceConfig `
            -DiagnosticConfigPath $happyzlAuthenticationServiceDiagnosticConfig `
            -RoleName "HappyZLAuthenticationService"`
            -Slot $Stage
#Move-AzureDeployment -ServiceName $happyzlAuthenticationAzureServiceName

NewOrUpgradeDeployment -ServiceName $happyzlProductAzureServiceName `
            -Package "$currentFolder/$happyzlProductAzureServiceName/bin/$buildType/app.publish/$happyzlProductAzureServiceName.cspkg" `
            -Configuration $happyzlProductServiceConfig `
            -DiagnosticConfigPath "$currentFolder/$happyzlProductAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.HappyZLProductService.PubConfig.xml" `
            -RoleName "HappyZLProductService"`
            -Slot $Stage

NewOrUpgradeDeployment -ServiceName $happyzlImageAzureServiceName `
            -Package "$currentFolder/$happyzlImageAzureServiceName/bin/$buildType/app.publish/$happyzlImageAzureServiceName.cspkg" `
            -Configuration $happyzlImageServiceConfig `
            -DiagnosticConfigPath "$currentFolder/$happyzlImageAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.HappyZLImageService.PubConfig.xml" `
            -RoleName "HappyZLImageService"`
            -Slot $Stage

NewOrUpgradeDeployment -ServiceName $happyzlPortalAzureServiceName `
            -Package "$currentFolder/$happyzlPortalAzureServiceName/bin/$buildType/app.publish/$happyzlPortalAzureServiceName.cspkg" `
            -Configuration $happyzlPortalServiceConfig `
            -DiagnosticConfigPath "$currentFolder/$happyzlPortalAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.HappyZLPortalService.PubConfig.xml" `
            -RoleName "HappyZLPortalService"`
            -Slot $Stage

NewOrUpgradeDeployment -ServiceName $happyzlActivityAzureServiceName `
            -Package "$currentFolder/$happyzlActivityAzureServiceName/bin/$buildType/app.publish/$happyzlActivityAzureServiceName.cspkg" `
            -Configuration $happyzlActivityServiceConfig `
            -DiagnosticConfigPath "$currentFolder/$happyzlActivityAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.HappyZLActivityService.PubConfig.xml" `
            -RoleName "HappyZLActivityService"`
            -Slot $Stage

NewOrUpgradeDeployment -ServiceName $happyzlMailRoomAzureServiceName `
            -Package "$currentFolder/$happyzlMailRoomAzureServiceName/bin/$buildType/app.publish/$happyzlMailRoomAzureServiceName.cspkg" `
            -Configuration $happyzlMailRoomServiceConfig `
            -DiagnosticConfigPath "$currentFolder/$happyzlMailRoomAzureServiceName/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.HappyZLMailRoomService.PubConfig.xml" `
            -RoleName "HappyZLMailRoomService"`
            -Slot $Stage