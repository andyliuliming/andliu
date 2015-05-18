if(!$env:Path.Contains("MSBuild"))
{
    $env:Path += 'C:\Program Files (x86)\MSBuild\12.0\Bin'
}


.\pack_and_sign.bat
xcopy /Y .\release\*.jar ..\AzureTerminalAzureService\AzureTerminalWebRole\java

msbuild /t:Clean

msbuild ..\AzureTerminalAzureService\AzureTerminalWebRole\AzureTerminalAzureService.csproj
msbuild ..\AzureTerminalAzureService\AzureTerminalAzureService.ccproj /t:Publish /p:TargetProfile=Cloud /p:EnableIntelliTrace=true `
        /p:IntelliTraceConnectionString='"BaseEndpoint=core.windows.net;Protocol=https;AccountName=azureterminal;AccountKey=rosJO41UigS5Y58cKYAMXjFVeKvRDyql+4Af6rFygOYPHfI+6m5Du6FE7rFVeffE7Nq6dlZsjES9Stt3g0ECVA=="'

