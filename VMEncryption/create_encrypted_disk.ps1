function Create-Encrypted-Disk
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
    $dataDisks = $vm | Get-AzureDataDisk
    $lun = -1
    Foreach($disk in $dataDisks)
    {
        if($disk.lun -gt $lun)
        {
            $lun=$disk.lun
        }
    }
    $lun+=1
    Write-Output "the lun of your newly attached disk is "+$lun
    Add-AzureDataDisk -CreateNew -DiskSizeInGB 12 -DiskLabel "disklabel$lun" -VM $vm -LUN $lun -MediaLocation $destinationKeyDiskPath| update-azurevm

    $privateConfig='
    {
		"command":"disk",
		"query":{"scsi_number":"[5:0:0:'+$lun+']"},
		"passphrase":"MicrosoftLoveLinuxBecauseWeHaveCCIC@123",
		"filesystem":"ext4",
		"mountpoint":"/mnt/"}
    '

    $tempAzurevm = (Get-AzureVM -ServiceName $cloudServiceName -Name $virtualMachineName)
 
    set-azurevmextension -extensionName "VMEncryption" -Publisher "Microsoft.OSTCExtensions" -Version 0.1 -vm $tempAzurevm -PrivateConfiguration $privateConfig | update-azurevm
}


Add-AzureAccount
Select-AzureSubscription "OSTC Shanghai Dev"
Create-Encrypted-Disk -cloudServiceName "fareast-andliu" -virtualMachineName "fareast-andliu"
