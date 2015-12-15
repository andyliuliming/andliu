if(!$env:Path.Contains("MSBuild"))
{
    $env:Path += 'C:\Program Files (x86)\MSBuild\12.0\Bin'
}

#C:\Users\andliu\Documents\GitHub\andliu\AzureTerminal\AzureTerminalAzureService\AzureTerminalWebRole\scripts\terminal.js

#$destination="$pwd\..\AzureWebConsoleWebRole\web\js\lib\term_downloaded.js"
#$source ="https://raw.githubusercontent.com/andyliuliming/term.js/master/src/term.js"

#Invoke-WebRequest $source -OutFile $destination


msbuild /t:Clean

msbuild ..\AzureWebConsoleCommon\AzureWebConsoleCommon.csproj
msbuild ..\AzureManagementLib\AzureManagementLib.csproj
msbuild ..\AzureWebConsoleDomain\AzureWebConsoleDomain.csproj
msbuild ..\Renci.SshNet\Renci.SshNet.csproj
msbuild ..\AzureWebConsoleWebRole\AzureWebConsoleWebRole.csproj
msbuild ..\AzureWebConsoleAzureService\AzureWebConsoleAzureService.ccproj /t:Publish /p:TargetProfile=Cloud /p:EnableIntelliTrace=true `
        /p:IntelliTraceConnectionString='"BaseEndpoint=core.windows.net;Protocol=https;AccountName=azureterminal;AccountKey=rosJO41UigS5Y58cKYAMXjFVeKvRDyql+4Af6rFygOYPHfI+6m5Du6FE7rFVeffE7Nq6dlZsjES9Stt3g0ECVA=="'

