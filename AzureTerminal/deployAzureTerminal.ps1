$subscriptionName="OSTC Shanghai Dev"
$existingSubscription = Get-AzureSubscription -SubscriptionName $subscriptionName
if($existingSubscription -eq $null)
{
    Clear-AzureProfile -Force
    Add-AzureAccount
}
Select-AzureSubscription $subscriptionName

.\buildAzureTerminal.ps1


$buildType="Debug"
$location="East Asia"

$azureWebTerminalAzureServiceName="azureterminal"
$azureWebTerminalServiceRoleName="AzureTerminalWebRole"

$deploymentAndDiagnosticStorageAccountName="azureterminal"


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

MakeSureStorageAccountExists -StorageName $deploymentAndDiagnosticStorageAccountName



Set-AzureSubscription -SubscriptionName $subscriptionName -CurrentStorageAccountName $deploymentAndDiagnosticStorageAccountName
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
MakeSureAzureServiceExists -ServiceName $azureWebTerminalAzureServiceName


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
    
    $diagnosticStorageKey = (Get-AzureStorageKey -StorageAccountName $deploymentAndDiagnosticStorageAccountName).Primary
    Write-Host "DiagnosticStorageAccountName is $deploymentAndDiagnosticStorageAccountName "
    $storageContext = New-AzureStorageContext -StorageAccountName $deploymentAndDiagnosticStorageAccountName -StorageAccountKey $diagnosticStorageKey
 
    $DiagnosticConfig = New-AzureServiceDiagnosticsExtensionConfig -StorageContext $storageContext -DiagnosticsConfigurationPath $DiagnosticConfigPath -Role $RoleName
    New-AzureDeployment -ServiceName $ServiceName -Package $Package -Configuration $Configuration -Slot $Slot -ExtensionConfiguration @($DiagnosticConfig)
    $azureDeployment = $null
}


"deploying the azure terminal service"
$azureTerminalServiceConfig = "$currentFolder/AzureTerminalAzureService/bin/$buildType/app.publish/ServiceConfiguration.Cloud.cscfg"

$azureTerminalServiceDiagnosticConfig = "$currentFolder/AzureTerminalAzureService/bin/$buildType/app.publish/Extensions/PaaSDiagnostics.AzureTerminalWebRole.PubConfig.xml"


NewOrUpgradeDeployment -ServiceName $azureWebTerminalAzureServiceName `
            -Package "$currentFolder/AzureTerminalAzureService/bin/$buildType/app.publish/AzureTerminalAzureService.cspkg" `
            -Configuration $azureTerminalServiceConfig `
            -DiagnosticConfigPath $azureTerminalServiceDiagnosticConfig `
            -RoleName "AzureTerminalWebRole"`
            -Slot $Stage