#scp -r main root@fareast-andliu.cloudapp.net:/var/lib/waagent/Microsoft.OSTCExtensions.VMEncryption-0.1/main


$passphrase="VGhpcyBpcyB0aGUgcGxhaW4gdGV4dCBtZXNzYWdlLg"
$encryption_keyvault_uri="https://andliukeyvault.vault.azure.net/keys/mykey"
$keyvault_uri="https://andliukeyvault.vault.azure.net/"
$AADClientID="0c46e28c-e8cb-490d-bd4f-21626b6601f6"
$AADClientSecret="q01ejLCpGd+ObJDA6meuZD+CiU72uxU7U4LcaRSd60s="
$alg_name="RSA1_5"
# passphrase, secret_keyvault_uri, encryption_keyvault_uri, AADClientID, alg_name, AADClientSecret
#Add-AzureAccount
#Select-AzureSubscription "OSTC Shanghai Dev"
#Encrypt-Disk -cloudServiceName "andliu-ubuntu14" -virtualMachineName "andliu-ubuntu14"