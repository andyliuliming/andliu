. .\pslib\Invoke-MsBuild.ps1
if($Environment -eq "AzureChinaCloud")
{
. .\pslib\common-china.ps1
}else
{
. .\pslib\common-global.ps1
}
. .\pslib\azureadapter.ps1

# wrap up the javascript and the css
npm install -g requirejs
r.js.cmd -o ..\PortalService\management-build.js

Invoke-MsBuild -Path ..\TalentGraberService.sln -P "/t:Clean" #-ShowBuildWindow

Invoke-MsBuild -Path ..\pic_dotnet_sdk\pic_dotnet_sdk.csproj -P "/P:Configuration=$buildType" # -ShowBuildWindow
# build the authentication lib
Invoke-MsBuild -Path ..\Common\Common.csproj -P "/P:Configuration=$buildType" # -ShowBuildWindow
# build the AzureEnvironment

# build the database model project
Invoke-MsBuild -Path ..\Model\Model.csproj -P "/P:Configuration=$buildType" #-ShowBuildWindow

Invoke-MsBuild -Path ..\DataCacheLayer\DataCacheLayer.csproj -P "/P:Configuration=$buildType" #-ShowBuildWindow

# build the service base project
Invoke-MsBuild -Path ..\ServiceBase\ServiceBase.csproj -P "/P:Configuration=$buildType" #-ShowBuildWindow

Write-Host "DiagnosticStorageAccountName is $diagnosticStorageAccountName"
$diagnosticStorageKey=GetStorageAccountKey -ResourceGroupName $StarDustResourceGroupName -StorageAccountName $diagnosticStorageAccountName
Write-Host "diagnosticStorageKey is $diagnosticStorageKey"

$intelliTraceConnectionString="BaseEndpoint=core.windows.net;Protocol=https;AccountName="+$diagnosticStorageAccountName+";AccountKey="+$diagnosticStorageKey

$intelliTraceParameter='"'+"$intelliTraceConnectionString"+'"'

Invoke-MsBuild -Path ..\StarDustProductService\StarDustProductService.csproj -P "/P:Configuration=$buildType"# -ShowBuildWindow
Invoke-MsBuild -Path ..\StarDustProductAzureService\StarDustProductAzureService.ccproj -P "/P:Configuration=$buildType /t:Publish /p:TargetProfile=Cloud /p:EnableIntelliTrace=true /p:IntelliTraceConnectionString=$intelliTraceParameter"# -ShowBuildWindow

Invoke-MsBuild -Path ..\StarDustPortalService\StarDustPortalService.csproj -P "/P:Configuration=$buildType"# -ShowBuildWindow
Invoke-MsBuild -Path ..\StarDustPortalAzureService\StarDustPortalAzureService.ccproj -P "/P:Configuration=$buildType /t:Publish /p:TargetProfile=Cloud /p:EnableIntelliTrace=true /p:IntelliTraceConnectionString=$intelliTraceParameter"# -ShowBuildWindow
