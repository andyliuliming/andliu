#scp -r main root@fareast-andliu.cloudapp.net:/var/lib/waagent/Microsoft.OSTCExtensions.VMEncryption-0.1/main

function Encrypt-Disk
{
	param
	(
		[string]$cloudServiceName,
		[string]$virtualMachineName
	)
    $vm = (Get-AzureVM -ServiceName $cloudServiceName -Name $virtualMachineName)


    $publicConfig='
    {
        "command":"enableencryption_clone",
        "query":[{"source_scsi_number":"[5:0:0:0]","target_scsi_number":"[5:0:0:1]"},{"source_scsi_number":"[5:0:0:2]","target_scsi_number":"[5:0:0:3]"}],
        "filesystem":"ext4",
        "mountpoint":"/mnt/",
        "KeyEncryptionKeyURL":"https://andliukeyvault.vault.azure.net/keys/mykey",
        "KeyVaultURL":"https://andliukeyvault.vault.azure.net/",
        "AADClientID":"0c46e28c-e8cb-490d-bd4f-21626b6601f6",
        "KeyEncryptionAlgorithm":"RSA1_5",
        "BekFileSystem":"vfat"
    }'

    $privateConfig='
    {
        "AADClientSecret":"q01ejLCpGd+ObJDA6meuZD+CiU72uxU7U4LcaRSd60s="
    }
    '
    $tempAzurevm = (Get-AzureVM -ServiceName $cloudServiceName -Name $virtualMachineName)
 
    set-azurevmextension -extensionName "VMEncryption" -Publisher "Microsoft.OSTCExtensions" -Version 0.1 -vm $tempAzurevm -PrivateConfiguration $privateConfig -PublicConfiguration $publicConfig | update-azurevm
}


Add-AzureAccount
Select-AzureSubscription "OSTC Shanghai Dev"
Encrypt-Disk -cloudServiceName "andliu-ubuntu14" -virtualMachineName "andliu-ubuntu14"
