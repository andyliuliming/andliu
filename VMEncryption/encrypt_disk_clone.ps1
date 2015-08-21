#scp -r main root@fareast-andliu.cloudapp.net:/var/lib/waagent/Microsoft.OSTCExtensions.VMEncryption-0.1/main

function Encrypt-Disk
{
	param
	(
		[string]$cloudServiceName,
		[string]$virtualMachineName
	)
    $vm = (Get-AzureVM -ServiceName $cloudServiceName -Name $virtualMachineName)


    $privateConfig='
    {
        "command":"enableencryption_clone",
        "query":[{"source_scsi_number":"[5:0:0:0]","target_scsi_number":"[5:0:0:1]"},{"source_scsi_number":"[5:0:0:2]","target_scsi_number":"[5:0:0:3]"}],
        "passphrase":"Quattro!",
        "filesystem":"ext4",
        "mountpoint":"/mnt/",
        "encryption_keyvault_uri":"https://andliukeyvault.vault.azure.net/keys/mykey",
        "keyvault_uri":"https://andliukeyvault.vault.azure.net/",
        "client_id":"0c46e28c-e8cb-490d-bd4f-21626b6601f6",
        "client_secret":"q01ejLCpGd+ObJDA6meuZD+CiU72uxU7U4LcaRSd60s=",
        "alg_name":"RSA1_5",
        "BekFileName":"LinuxPassPhraseFileName",
        "BekFileSystem":"vfat"
    }'

    $tempAzurevm = (Get-AzureVM -ServiceName $cloudServiceName -Name $virtualMachineName)
 
    set-azurevmextension -extensionName "VMEncryption" -Publisher "Microsoft.OSTCExtensions" -Version 0.1 -vm $tempAzurevm -PrivateConfiguration $privateConfig | update-azurevm
}


Add-AzureAccount
Select-AzureSubscription "OSTC Shanghai Dev"
Encrypt-Disk -cloudServiceName "andliu-ubuntu14" -virtualMachineName "andliu-ubuntu14"
