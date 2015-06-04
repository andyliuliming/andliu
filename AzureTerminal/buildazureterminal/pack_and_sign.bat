mkdir release
xcopy /Y ..\AzureTerminalAppletProxy\src\message.properties .\
robocopy /MIR ..\AzureTerminalAppletProxy\target\classes\ostc .\ostc
robocopy /MIR ..\AzureTerminalAppletProxy\target\classes\com .\com


jar cvfm .\release\OTerm.jar ..\AzureTerminalAppletProxy\proxymanifest.txt .\ostc\sh\webconsole\* .\com\jcraft\jsch\* .\message.properties
jarsigner -keystore LimingStore.jks .\release\OTerm.jar LimingStoreAlias -storepass User@123