if(!$env:Path.Contains("MSBuild"))
{
    $env:Path += 'C:\Program Files (x86)\MSBuild\12.0\Bin'
}


msbuild /t:Clean

msbuild .\OTerm2WebRole\OTerm2WebRole\OTerm2WebRole.csproj
msbuild .\OTerm2WebRole\OTerm2.ccproj /t:Publish /p:TargetProfile=Cloud /p:EnableIntelliTrace=true `
        /p:IntelliTraceConnectionString='"BaseEndpoint=core.windows.net;Protocol=https;AccountName=happyzldiagnostic;AccountKey=/fKR567gb3f+BRLodIBIOHJHdqn74ZyMPmaeHBPlB/VbzPnIT25pKjPXyYHatH4g2N0Jd1lJzekP99teFwZgmA=="'

