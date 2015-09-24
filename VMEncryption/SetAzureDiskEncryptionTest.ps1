#scp -r main root@fareast-andliu.cloudapp.net:/var/lib/waagent/Microsoft.OSTCExtensions.VMEncryption-0.1/main


#Add-AzureAccount
Select-AzureSubscription "CRP TiP Sub 001"

New-AzureKeyVault -VaultName "andliukeyvault" -ResourceGroupName "andliu-encrypt" -Location westus

Set-AzureKeyVaultAccessPolicy -VaultName andliukeyvault -ResourceGroupName andliu-encrypt -ServicePrincipalName b7b48143-6c58-4cd4-a9e0-0a15cbda0614 -PermissionsToKeys all -PermissionsToSecrets all

Add-AzureKeyVaultKey -VaultName "andliukeyvault" -Name "mykey" -Destination Software

#"command":"enableencryption_all_inplace",
#"KeyEncryptionKeyURL":"https://andliukeyvault.vault.azure.net/keys/mykey",
#        "KeyVaultURL":"https://andliukeyvault.vault.azure.net/",
#        "AADClientID":"b7b48143-6c58-4cd4-a9e0-0a15cbda0614",
#        "KeyEncryptionAlgorithm":"RSA1_5",
#        "BitlockerVolumeType":"Data"
Set-AzureDiskEncryptionExtension -ResourceGroupName "andliuresourcegroup" -Name "VMEncryption" -Location "eastasia" -VMName "andliu-ubuntu2" -AadClientID "b7b48143-6c58-4cd4-a9e0-0a15cbda0614" -AadClientSecret "/XazYdJ9XaMBbiQ0dwSoyue7LbkQ1OJOePGGcrG3dkA=" -KeyVaultURL "https://andliukeyvault.vault.azure.net/" -KeyEncryptionKeyURL "https://andliukeyvault.vault.azure.net/keys/mykey" -KeyEncryptionAlgorithm "RSA1_5" -VolumeType "Data" -Tag vmencryptiontag