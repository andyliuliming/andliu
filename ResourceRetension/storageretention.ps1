$subscriptionNameArray=@("OSTC Shanghai Dev","OSTC Shanghai Test","OSTC Shanghai PM")


[System.Collections.ArrayList]$vhdNotModifiedList = @()
Foreach($subscriptionName in $subscriptionNameArray)
{
    $existingSubscription = Get-AzureSubscription -SubscriptionName $subscriptionName
    if($existingSubscription -eq $null)
    {
        Clear-AzureProfile -Force
        Add-AzureAccount
    }
    Select-AzureSubscription $subscriptionName

    $storageAccounts = Get-AzureStorageAccount


    Foreach($storageAccount in $storageAccounts)
    {
         $storagPrimaryKey = (Get-AzureStorageKey -StorageAccountName $storageAccount.StorageAccountName).Primary
         $storageContext = New-AzureStorageContext ¨CStorageAccountName $storageAccount.StorageAccountName ¨CStorageAccountKey $storagPrimaryKey
         $storageContainers = Get-AzureStorageContainer -Context $storageContext
         Foreach($storageContainer in $storageContainers){
            Write-Host($storageContainer)
            $storageBlobs = Get-AzureStorageBlob -Container $storageContainer.Name -Context $storageContext
            Foreach($storageBlob in $storageBlobs){
                $now=Get-Date
                $now=$now.ToUniversalTime()
                $lastModifiedTime = $storageBlob.LastModified.UtcDateTime
                if($storageBlob.Name.EndsWith(".vhd"))
                {
                    if($lastModifiedTime -lt $now.AddDays(-30))
                    {
                        Write-Host ("more than 30 days not modified $lastModifiedTime should be deleted") 
                        $vhdNotModifiedList.Add($storageAccount.StorageAccountName+".blob.core.windows.net/" + $storageContainer.Name +"/"+ $storageBlob.Name)           
                        #Write-Host ($storageBlob)
                    }
                }
            }
         }
    }
}


$output=""
$outputFile="storageblobnotmodifiedfor30days.txt"
Foreach($blobToBeDelete in $vhdNotModifiedList)
{
    $output+=$blobToBeDelete
    $output+="`n"
}

Set-Content -Encoding UTF8 -Path $outputFile -Value $output

