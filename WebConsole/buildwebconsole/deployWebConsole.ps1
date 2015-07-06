$subscriptionName="OSTC Shanghai Dev"
$existingSubscription = Get-AzureSubscription -SubscriptionName $subscriptionName
if($existingSubscription -eq $null)
{
    Clear-AzureProfile -Force
    Add-AzureAccount
}
Select-AzureSubscription $subscriptionName

.\buildWebConsole.ps1

$Prefix="azurewebconsole"
$buildType="Debug"
$location="East Asia"
$azureWebConsoleDataBaseName = $Prefix+"db"
$databaseEdition="Basic"
$azureWebConsoleAzureServiceName=$Prefix
$azureWebConsoleServiceRoleName="AzureWebConsoleWebRole"
$azureWebConsoleSteppingNodeRoleName="AzureWebConsoleSteppingNode"
$AllowedCrossDomainHost="*"
$DatabaseUserName= "azurewebconsole"
$DatabasePassword="User@123"

$Slot="Staging"
$currentFolder = pwd

$deploymentStorageAccountName = "andliuwebconsole"
$diagnosticStorageAccountName = "andliuwebconsole"

function MakeSureStorageAccountExists
{
    param
    (
        $StorageName
    )
    $storageAccount = Get-AzureStorageAccount -StorageAccountName $StorageName -ErrorAction 'SilentlyContinue'
    if($storageAccount -eq $null)
    {
        Write-Output "storage '$StorageName' not exist, create it..."
        New-AzureStorageAccount -StorageAccountName $StorageName -Location $location
    }
    $storageAccount=$null
}

MakeSureStorageAccountExists -StorageName $diagnosticStorageAccountName
MakeSureStorageAccountExists -StorageName $deploymentStorageAccountName

# todo generate the database name
# make sure that there exists one database in the specified location.
function GetSpecifiedLocationDataBaseServer
{    
    $dataBaseServer = Get-AzureSqlDatabaseServer -ErrorAction 'SilentlyContinue'
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
    $database = Get-AzureSqlDatabase -ServerName $ServerName -DatabaseName $DatabaseName -ErrorAction 'SilentlyContinue'
    if($database -eq $null)
    {
        New-AzureSqlDatabase -DatabaseName $DatabaseName -ServerName $databaseServerInSpecifiedLocation.ServerName -Edition $databaseEdition
    }
}

MakeSureDatabaseExists -DatabaseName $azureWebConsoleDataBaseName -ServerName $databaseServerInSpecifiedLocation.ServerName

Set-AzureSubscription -SubscriptionName $subscriptionName -CurrentStorageAccountName $deploymentStorageAccountName
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
MakeSureAzureServiceExists -ServiceName $azureWebConsoleAzureServiceName

$diagnosticStorageKey = (Get-AzureStorageKey -StorageAccountName $diagnosticStorageAccountName).Primary
Write-Host "DiagnosticStorageAccountName is $diagnosticStorageAccountName "
$storageContext = New-AzureStorageContext -StorageAccountName $diagnosticStorageAccountName -StorageAccountKey $diagnosticStorageKey

function ReplaceRealValue
{
    param
    (
    $TemplateOrigin
    )
    # get the account key    
    
    $TemplateOrigin=$TemplateOrigin -replace "{DiagnosticStorageAccountName}",$diagnosticStorageAccountName
    $TemplateOrigin=$TemplateOrigin -replace "{DiagnosticStorageAccountKey}",$diagnosticStorageKey
    $TemplateOrigin=$TemplateOrigin -replace "{DATABASE_SERVER_NAME}",$databaseServerInSpecifiedLocation.ServerName
    $TemplateOrigin=$TemplateOrigin -replace "{DATABASE_NAME}",$azureWebConsoleDataBaseName
    $TemplateOrigin=$TemplateOrigin -replace "{DATABASE_USER_NAME}",$DatabaseUserName
    $TemplateOrigin=$TemplateOrigin -replace "{DATABASE_PASSWORD}",$DatabasePassword
    $TemplateOrigin=$TemplateOrigin -replace "{AllowedCrossDomainHost}",$AllowedCrossDomainHost
    return $TemplateOrigin
}

#replace the values in the service service/diagnostic config
$azureWebConsoleServiceConfig = "$currentFolder/../AzureWebConsoleAzureService/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"
$cloudConfig = Get-Content -Encoding UTF8 -Path $azureWebConsoleServiceConfig
$cloudConfig = ReplaceRealValue -TemplateOrigin $cloudConfig
Set-Content -Encoding UTF8 -Path $azureWebConsoleServiceConfig -Value $cloudConfig

function NewOrUpgradeDeployment
{
    param
    (
    $ServiceName,
    $RoleName,
    $Package,
    $Configuration,
    $Slot
    )
    $azureDeployment = Get-AzureDeployment -ServiceName $ServiceName -Slot $Slot

    if($azureDeployment -eq $null)
    {
        Write-Host "no azure deployment exists, so create directly..."        
        New-AzureDeployment -ServiceName $ServiceName -Package $Package -Configuration $Configuration -Slot $Slot
        $azureDeployment = $null
    }
    else
    {           
        Set-AzureDeployment -Upgrade -ServiceName $ServiceName -Package $Package -Configuration $Configuration -Slot $Slot
        $azureDeployment = $null
    }
}       

"deploying the azure terminal service"
$azureTerminalServiceConfig = "$currentFolder/../AzureWebConsoleAzureService/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"


NewOrUpgradeDeployment -ServiceName $azureWebConsoleAzureServiceName `
            -Package "$currentFolder/../AzureWebConsoleAzureService/bin/$buildType/app.publish/AzureWebConsoleAzureService.cspkg" `
            -Configuration $azureTerminalServiceConfig `
            -RoleName $azureWebConsoleServiceRoleName `
            -Slot $Slot

# set the diagnostic extension
function SetDiagnosticExtension
{
    param
    (
    $ServiceName,
    $DiagnosticConfigurationPath,
    $RoleName,
    $StorageContext,
    $Slot
    )
    Set-AzureServiceDiagnosticsExtension -ServiceName $ServiceName -DiagnosticsConfigurationPath $DiagnosticConfigurationPath -Role $RoleName -Slot $Slot -StorageContext $StorageContext 
}

$azureTerminalServiceDiagnosticConfig = "$currentFolder/../AzureWebConsoleAzureService/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.AzureWebConsoleWebRole.PubConfig.xml"

$diagnosticConfig = Get-Content -Encoding UTF8 -Path $azureTerminalServiceDiagnosticConfig
$diagnosticConfig = ReplaceRealValue -TemplateOrigin $diagnosticConfig
Set-Content -Encoding UTF8 -Path $azureTerminalServiceDiagnosticConfig -Value $diagnosticConfig

$azureTerminalSteppingNodeDiagnosticConfig = "$currentFolder/../AzureWebConsoleAzureService/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.AzureWebConsoleSteppingNode.PubConfig.xml"
$diagnosticConfig = Get-Content -Encoding UTF8 -Path $azureTerminalSteppingNodeDiagnosticConfig
$diagnosticConfig = ReplaceRealValue -TemplateOrigin $diagnosticConfig
Set-Content -Encoding UTF8 -Path $azureTerminalSteppingNodeDiagnosticConfig -Value $diagnosticConfig

Write-Host "setting diagnostic extensions..."     
SetDiagnosticExtension -ServiceName $azureWebConsoleAzureServiceName -StorageContext $storageContext -RoleName $azureWebConsoleServiceRoleName -DiagnosticConfigurationPath $azureTerminalServiceDiagnosticConfig -Slot $Slot
SetDiagnosticExtension -ServiceName $azureWebConsoleAzureServiceName -StorageContext $storageContext -RoleName $azureWebConsoleSteppingNodeRoleName -DiagnosticConfigurationPath $azureTerminalSteppingNodeDiagnosticConfig -Slot $Slot