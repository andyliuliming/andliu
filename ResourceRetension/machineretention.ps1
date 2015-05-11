$subscriptionNameArray=@("OSTC Shanghai Dev","OSTC Shanghai Test","OSTC Shanghai PM")


[System.Collections.ArrayList]$largeVMs = @()
[System.Collections.ArrayList]$mediumVMs = @()

Foreach($subscriptionName in $subscriptionNameArray)
{
    $existingSubscription = Get-AzureSubscription -SubscriptionName $subscriptionName
    if($existingSubscription -eq $null)
    {
        Clear-AzureProfile -Force
        Add-AzureAccount
    }
    Select-AzureSubscription $subscriptionName

    $azureVMs = Get-AzureVM


    Foreach($azureVM in $azureVMs)
    {
        if($azureVM.InstanceSize -eq "Large"){
            $largeVMs.Add($azureVM)
        }
        if($azureVM.InstanceSize -eq "Medium"){
            $mediumVMs.Add($azureVM)
        }
    }
}


$output=""
$outputFile="largevms.txt"
Foreach($largeVM in $largeVMs)
{
    $output+=$largeVM.Name
    $output+="`n"
}

Set-Content -Encoding UTF8 -Path $outputFile -Value $output

$output=""
$outputFile="mediumvms.txt"
Foreach($mediumVM in $mediumVMs)
{
    $output+=$mediumVM.Name
    $output+="`n"
}

Set-Content -Encoding UTF8 -Path $outputFile -Value $output