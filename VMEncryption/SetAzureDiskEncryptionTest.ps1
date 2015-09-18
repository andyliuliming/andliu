#scp -r main root@fareast-andliu.cloudapp.net:/var/lib/waagent/Microsoft.OSTCExtensions.VMEncryption-0.1/main


#Add-AzureAccount
Select-AzureSubscription "OSTC Shanghai Dev"
#"command":"enableencryption_all_inplace",
#"KeyEncryptionKeyURL":"https://andliukeyvault.vault.azure.net/keys/mykey",
#        "KeyVaultURL":"https://andliukeyvault.vault.azure.net/",
#        "AADClientID":"0c46e28c-e8cb-490d-bd4f-21626b6601f6",
#        "KeyEncryptionAlgorithm":"RSA1_5",
#        "BitlockerVolumeType":"Data"
Set-AzureDiskEncryptionExtension -ResourceGroupName "andliuresourcegroup" -Name "VMEncryption" -Location "eastasia" -VMName "andliu-ubuntu2" -AadClientID "0c46e28c-e8cb-490d-bd4f-21626b6601f6" -AadClientSecret "q01ejLCpGd+ObJDA6meuZD+CiU72uxU7U4LcaRSd60s=" -KeyVaultURL "https://andliukeyvault.vault.azure.net/" -KeyEncryptionKeyURL "https://andliukeyvault.vault.azure.net/keys/mykey" -KeyEncryptionAlgorithm "RSA1_5" -VolumeType "Data" -Tag vmencryptiontag