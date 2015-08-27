#scp -r main root@fareast-andliu.cloudapp.net:/var/lib/waagent/Microsoft.OSTCExtensions.VMEncryption-0.1/main
. .\keyvault_prepare.ps1

#$passphrase="VGhpcyBpcyB0aGUgcGxhaW4gdGV4dCBtZXNzYWdlLg"
#$encryption_keyvault_uri="https://andliukeyvault.vault.azure.net/keys/mykey"
#$keyvault_uri="https://andliukeyvault.vault.azure.net/"
#$AADClientID="0c46e28c-e8cb-490d-bd4f-21626b6601f6"
#$AADClientSecret="q01ejLCpGd+ObJDA6meuZD+CiU72uxU7U4LcaRSd60s="
#$alg_name="RSA1_5"
function Encrypt-Disk
{
    param
    (
        [string]$cloudServiceName,
        [string]$virtualMachineName
    )
    $vm = (Get-AzureVM -ServiceName $cloudServiceName -Name $virtualMachineName)

    $osDisk = $vm | Get-AzureOSDisk 
    $osDiskMediaLink = $osDisk.MediaLink
    $destinationKeyDiskPath = $osDiskMediaLink.Scheme+"://"+$osDiskMediaLink.Host+$osDiskMediaLink.Segments[0]+$osDiskMediaLink.Segments[1]+"empty_disk_blob"+[guid]::NewGuid().ToString()+".vhd"
    #prepare the keydisk

    # get the max lun of the vm
    #$dataDisks = $vm | Get-AzureDataDisk
    # $lun = -1
    # Foreach($disk in $dataDisks)
    # {
    #    if($disk.lun -gt $lun)
    #    {
    #        $lun=$disk.lun
    #    }
    #}
    #$lun+=1
    #Write-Output "the lun of your newly attached disk is "+$lun
    #Add-AzureDataDisk -CreateNew -DiskSizeInGB 3 -DiskLabel "disklabel$lun" -VM $vm -LUN $lun -MediaLocation $destinationKeyDiskPath| update-azurevm
    # $encryption_keyvault_uri="https://andliukeyvault.vault.azure.net/keys/mykey"
    #$keyvault_uri="https://andliukeyvault.vault.azure.net/"
    #$AADClientID="0c46e28c-e8cb-490d-bd4f-21626b6601f6"
    #$AADClientSecret="q01ejLCpGd+ObJDA6meuZD+CiU72uxU7U4LcaRSd60s="
    #$alg_name="RSA1_5"
    $publicConfig='
    {
        "command":"enableencryption_all_inplace",
        "KeyVaultURL":"https://andliukeyvault.vault.azure.net/",
        "AADClientID":"0c46e28c-e8cb-490d-bd4f-21626b6601f6",
        "BekFileSystem":"vfat"
    }
    '

    $privateConfig='
    {
        "AADClientSecret":"q01ejLCpGd+ObJDA6meuZD+CiU72uxU7U4LcaRSd60s="
    }
    '

    #construct the parameters

    $tempAzurevm = (Get-AzureVM -ServiceName $cloudServiceName -Name $virtualMachineName)
 
    set-azurevmextension -extensionName "VMEncryption" -Publisher "Microsoft.OSTCExtensions" -Version 0.1 -vm $tempAzurevm -PrivateConfiguration $privateConfig -PublicConfiguration $publicConfig| update-azurevm
}

#Add-AzureAccount
Select-AzureSubscription "OSTC Shanghai Dev"
Encrypt-Disk -cloudServiceName "andliu-ubuntu14" -virtualMachineName "andliu-ubuntu14"
