Write-Host "This is azureadapter.ps1"

# TODO check the affinity is in the location.

Function MakeSureAffinityGroupExists
{
    param
    (
        $Location,
        $AffinityGroupName
    )
    $affinityGroup = Get-AzureAffinityGroup -Name $AffinityGroupName -ErrorAction SilentlyContinue
    if($affinityGroup -eq $null)
    {
        Write-Host " affinith group $AffinityGroupName not exists."
        New-AzureAffinityGroup -Name $AffinityGroupName -Location $Location
    }
}

Function MakeSureStorageAccountExists
{
    param
    (
        $StorageName,
        $Location
    )
    $storageAccount = Get-AzureStorageAccount -StorageAccountName $StorageName -ErrorAction SilentlyContinue
    if($storageAccount -eq $null)
    {
        Write-Output "storage '$StorageName' not exist, create it..."
        New-AzureStorageAccount -StorageAccountName $StorageName -Location $Location
    }
    else
    {
        Write-Host $storageAccount.StorageAccountStatus
        Write-Host "storage '$StorageName' exists already, skip creating."
    }
    $storageAccount = $null
}

Function GetStorageAccountKey
{
    param
    (
        $StorageAccountName,
        $ResourceGroupName
    )
    # resource api is Get-AzureStorageAccountKey
    $storageAccountKey = (Get-AzureStorageKey -StorageAccountName $StorageAccountName).Primary
    
    return $storageAccountKey
}

Function MakeSureAzureServiceExists 
{
     param
     (
        $ServiceName,
        $AffinityGroupName
     )
     $azureService = Get-AzureService -ServiceName $ServiceName -ErrorAction SilentlyContinue
     if($azureService -eq $null)
     {
        Write-Output "azure service '$ServiceName' not exist, create it... with affinity '$AffinityGroupName'"
        New-AzureService -ServiceName $ServiceName -AffinityGroup $AffinityGroupName
     }
    $azureService=$null
}

#the database server does not have the affinity group concept. so only check the location.

Function MakeSureDatabaseExists
{
    param
    (
        $ResourceGroupName,
        $ServerName,
        $DatabaseName,
        $DatabaseEdition,
        $DatabaseMaxSize
    )
    $databases = Get-AzureRmSqlDatabase -ResourceGroupName $ResourceGroupName -ServerName $ServerName
    $database = $null
    foreach($item in $databases){
        if($item.DatabaseName -eq $DatabaseName){
            $database=$item
        }
    }
    if($database -eq $null)
    {
        New-AzureRmSqlDatabase -ResourceGroupName $ResourceGroupName -ServerName $ServerName -DatabaseName $DatabaseName -Edition $DatabaseEdition -MaxSizeBytes $DatabaseMaxSize
    }
    $database = $null
}

Function MakeSureDatabaseServerExists
{
    param
    (
        $ServerName,
        $ResourceGroupName,
        $Location,
        $DatabaseEdition,
        $Credential
    )
    $sqlServer = $null
    $sqlServers = Get-AzureRmSqlServer -ResourceGroupName $ResourceGroupName
    foreach($item in $sqlServers){
        if($item.ServerName -eq $ServerName){
            $sqlServer = $item
        }
    }
    if($sqlServer -eq $null)
    {
        New-AzureRmSqlServer -ResourceGroupName $ResourceGroupName -ServerName $ServerName -SqlAdministratorCredentials $Credential -Location $Location
        New-AzureRmSqlServerFirewallRule -ResourceGroupName $ResourceGroupName -ServerName $ServerName -AllowAllAzureIPs
    }
    $sqlServer = $null
}

Function NewOrUpgradeDeployment
{
    param
    (
        $ServiceName,
        $Package,
        $Configuration,
        $Slot,
        $StorageContext
    )
    Write-Host "Trying to deploy $ServiceName"
    $azureDeployment = Get-AzureDeployment -ServiceName $ServiceName -Slot $Slot -ErrorAction SilentlyContinue
 
    if($azureDeployment -eq $null)
    {
        Write-Host "no azure deployment exists in $Slot, so create it directly..."
        New-AzureDeployment -ServiceName $ServiceName -Package $Package -Configuration $Configuration -Slot $Slot
    }
    else
    {
        if ($azureDeployment.Name -ne $null) 
        {
            Write-Output "Deployment exists in $ServiceName of $Slot. remove it first."
            Remove-AzureDeployment -ServiceName $ServiceName -Slot $Slot -Force
        }
        New-AzureDeployment -ServiceName $ServiceName -Package $Package -Configuration $Configuration -Slot $Slot
    }
    $azureDeployment = $null
}

Function SetDiagnosticExtension
{
    param
    (
        $ServiceName,
        $DiagnosticConfigurationPath,
        $RoleName,
        $Slot
    )
    Write-Host "setting diagnostic extension for $ServiceName $RoleName"
    Set-AzureServiceDiagnosticsExtension -ServiceName $ServiceName -DiagnosticsConfigurationPath $DiagnosticConfigurationPath -Role $RoleName -Slot $Slot
}

Function MakeSureReservedIpExists
{
    param
    (
    $ReservedIpName,
    $Location
    )
    $reservedIp = Get-AzureReservedIP -ReservedIPName $ReservedIpName -ErrorAction SilentlyContinue
    if($reservedIp -eq $null)
    {
        Write-Output "reserved ip '$ReservedIpName' in $Location not exist, create it..."
        New-AzureReservedIP -ReservedIPName $ReservedIpName -Location $Location
    }
    $reservedIp = $null
}

Function MakeSureResourceGroupExists
{
    param
    (
        $ResourceGroupName,
        $Location
    )

    $resourceGroup = $null
    $existedResourceGroups = Get-AzureRmResourceGroup
    foreach ($item in $existedResourceGroups)
    {
        if($item.ResourceGroupName -eq $ResourceGroupName){
            $resourceGroup = $item
        }
    }

    if($resourceGroup -eq $null)
    {
        Write-Output "resource group '$ResourceGroupName' in $Location not exist, create it..."
        New-AzureRmResourceGroup -ResourceGroupName  $ResourceGroupName -Location $Location
    }
    $resourceGroup = $null
}

Function MakeSureRedisCacheExists
{
    param
    (
        $RedisCacheServerName,
        $ResourceGroupName,
        $Location,
        $Size,
        $Sku
    )
    $redisCacheServers = Get-AzureRmRedisCache -ResourceGroupName $ResourceGroupName
    foreach($item in $redisCacheServers){
        if($item.Name -eq $RedisCacheServerName){
            $redisCacheServer = $item
        }
    }
    if($redisCacheServer -eq $null)
    {
        New-AzureRmRedisCache -ResourceGroupName $ResourceGroupName -Name $RedisCacheServerName -Location $Location -Sku $Sku -Size $Size -EnableNonSslPort $true
    }
    $redisCacheServer = $null
}

Function GetRedisCacheKey
{
    param
    (
        $ResourceGroupName,
        $Name
    )
    $redisCacheKey=(Get-AzureRmRedisCacheKey -ResourceGroupName $ResourceGroupName -name $Name).PrimaryKey
    return $redisCacheKey
}