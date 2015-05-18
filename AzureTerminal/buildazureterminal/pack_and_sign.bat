mkdir release
xcopy /Y ..\AzureTerminalAppletProxy\src\message.properties .\
xcopy /Y C:\Users\andliu\.m2\repository\com\jcraft\jsch\0.1.52\jsch-0.1.52.jar .\release
robocopy /MIR ..\AzureTerminalAppletProxy\target\classes\ostc .\ostc


jar cvf .\release\OTerm.jar .\ostc\sh\webconsole\* .\message.properties
jarsigner -keystore LimingStore.jks .\release\OTerm.jar LimingStoreAlias -storepass User@123
jarsigner -keystore LimingStore.jks .\release\jsch-0.1.52.jar LimingStoreAlias -storepass User@123