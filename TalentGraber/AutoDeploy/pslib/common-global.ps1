﻿. .\pslib\common.ps1
######################  common config     ############################
$buildType = "Debug"
$Prefix = "StarDust"
$location = "East Asia"
$Environment = "AzureCloud"
$subscriptionId="c4528d9e-c99a-48bb-b12d-fde2176a43b8"

######################  azure service related  ############################
$StarDustProductServiceAddress="http://"+$StarDustProductAzureServiceName+".chinacloudapp.cn"
$StorageAccountEndpoint = "core.windows.net"
$databaseSuffix = "database.windows.net"

$AllowedCrossDomainHost="*"

$ErrorActionPreference= 'Stop'
$currentFolder = pwd
$currentFolder="$currentFolder/.."