mkdir ostc
xcopy /Y ..\src\LimingStore .\
xcopy /Y ..\..\OTerm2WebRole\OTerm2Role\scripts .\release
xcopy /Y C:\Users\andliu\.m2\repository\com\jcraft\jsch\0.1.52\jsch-0.1.52.jar .\release
robocopy /MIR ..\target\classes\ostc .\ostc


jar cvf .\release\OTerm.jar .\ostc\sh\webconsole\* .\message.properties
#jar cvf .\release\OTermProgress.jar .\ostc\sh\webconsole\progress\*
jarsigner -keystore LimingStore.jks .\release\OTerm.jar LimingStoreAlias -storepass User@123
#jarsigner -keystore LimingStore.jks .\release\OTermProgress.jar LimingStoreAlias -storepass User@123
jarsigner -keystore LimingStore.jks .\release\jsch-0.1.52.jar LimingStoreAlias -storepass User@123