$subscriptionNameArray=@("OSTC Shanghai Dev","OSTC Shanghai Test","OSTC Shanghai PM")

[System.Collections.ArrayList]$azureDiskNotAttachedList = @()

Foreach($subscriptionName in $subscriptionNameArray)
{
    $existingSubscription = Get-AzureSubscription -SubscriptionName $subscriptionName
    if($existingSubscription -eq $null)
    {
        Clear-AzureProfile -Force
        Add-AzureAccount
    }
    Select-AzureSubscription $subscriptionName

    $azureDisks = Get-AzureDisk
    Foreach($azureDisk in $azureDisks)
    {
        if($azureDisk.AttachedTo -eq $null)
        {
            $azureDiskNotAttachedList.Add($azureDisk.MediaLink.AbsoluteUri)
        }
    }
}

$output=""
$outputFile="disksnotattached.txt"
Foreach($azureDiskNotAttached in $azureDiskNotAttachedList)
{
    $output+=$azureDiskNotAttached
    $output+="`n"
}

Set-Content -Encoding UTF8 -Path $outputFile -Value $output