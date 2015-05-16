mkdir ostc
xcopy /Y ..\web\* .\release
xcopy /Y ..\src\LimingStore .\
xcopy /Y ..\src\message.properties .\
xcopy /Y ..\references\jsch-0.1.52.jar .\release
robocopy /MIR ..\target\classes\ostc .\ostc


jar cvf .\release\OTerm.jar .\ostc\sh\webconsole\* .\ostc\sh\webconsole2\* .\message.properties
jar cvf .\release\OTermProgress.jar .\ostc\sh\webconsole\progress\*
#jarsigner -keystore LimingStore.jks .\release\OTerm.jar LimingStoreAlias -storepass User@123
#jarsigner -keystore LimingStore.jks .\release\OTermProgress.jar LimingStoreAlias -storepass User@123#
#jarsigner -keystore LimingStore.jks .\release\jsch-0.1.52.jar LimingStoreAlias -storepass User@123