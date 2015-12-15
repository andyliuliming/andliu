#scp -r main root@fareast-andliu.cloudapp.net:/var/lib/waagent/Microsoft.OSTCExtensions.VMEncryption-0.1/main


#Add-AzureAccount
#Select-AzureSubscription "OSTC Shanghai Dev"
Add-AzureRmAccount 
Set-AzureRmContext -SubscriptionName "OSTC Shanghai Dev"

$resourceGroupName="andliu-southeastasia"
$vmName="andliu-ubuntu14"
$aadClientId="944d7169-e8ac-425b-958d-c07048761c7e"
$aadClientSecret="loveyouazure"
$keyVaultName = "mydiskencryptionvault"
$keyVaultUrl="https://mydiskencryptionvault.vault.azure.net"
#$location="North Central US"
$diskEncryptionKeyVaultId="/subscriptions/c4528d9e-c99a-48bb-b12d-fde2176a43b8/resourceGroups/andliu-southeastasia/providers/Microsoft.KeyVault/vaults/mydiskencryptionvault"
$keyEncryptionKeyVaultId="/subscriptions/c4528d9e-c99a-48bb-b12d-fde2176a43b8/resourceGroups/andliu-southeastasia/providers/Microsoft.KeyVault/vaults/mydiskencryptionvault"
$keyEncryptionKeyUrl=$null
$keyEncryptionAlgorithm="RSA-OAEP"
$volumeType="Data"
$extensionName="andliu-ubuntu14"
$sequenceVersion = "7"

#"command":"enableencryption_all_inplace",
#"KeyEncryptionKeyURL":"https://andliukeyvault.vault.azure.net/keys/mykey",
#        "KeyVaultURL":"https://andliukeyvault.vault.azure.net/",
#        "AADClientID":"b7b48143-6c58-4cd4-a9e0-0a15cbda0614",
#        "KeyEncryptionAlgorithm":"RSA1_5",
#        "BitlockerVolumeType":"Data"

#New-AzureRmVMDiskEncryptionEnvironment -ResourceGroupName $resourceGroupName -ApplicationDisplayName mydiskencryptionapp -ApplicationHomePage https://mydiskencryptionapp.onmicrosoft.com -IdentifierUris https://mydiskencryptionapp.onmicrosoft.com -AadClientSecret $aadClientSecret -KeyVaultName $keyVaultName


Set-AzureRmVMDiskEncryptionExtension -ResourceGroupName $resourceGroupName -VMName $vmName -AadClientID $aadClientId -AadClientSecret $aadClientSecret -DiskEncryptionKeyVaultUrl $keyVaultUrl -DiskEncryptionKeyVaultId $diskEncryptionKeyVaultId -KeyEncryptionKeyVaultId $keyEncryptionKeyVaultId -KeyEncryptionAlgorithm $keyEncryptionAlgorithm -VolumeType $volumeType -Name $extensionName -SequenceVersion $sequenceVersion


azure vm enable-disk-encryption -g andliuresourcegroup2 -n andliu-encrypt6 -a b7b48143-6c58-4cd4-a9e0-0a15cbda0614 -p /XazYdJ9XaMBbiQ0dwSoyue7LbkQ1OJOePGGcrG3dkA= -k https://andliukeyvault.vault.azure.net -r /subscriptions/c4528d9e-c99a-48bb-b12d-fde2176a43b8/resourceGroups/andliuresourcegroup2/providers/Microsoft.KeyVault/vaults/andliukeyvault -t Data -h "Quattro!"