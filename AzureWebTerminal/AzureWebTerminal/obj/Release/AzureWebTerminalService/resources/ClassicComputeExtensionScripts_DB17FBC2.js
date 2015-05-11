var ClassicComputeExtension;(function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";
function i(){var i="ClassicComputeExtension.ExtensionAssets.Resources.AvailabilitySet",n=window,t;if(
n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error("Unable to find the resources for '"+
i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o,s,h;(function(n){n.deletingVM=t("Info_deletingVM")}
)(r=n.Info||(n.Info={})),function(n){n.displayVirtualMachineCountMessage=t("grid_displayVirtualMachineCountMessage")}
(u=n.Grid||(n.Grid={}));n.differentDomainNameHelpBalloonContent=t("differentDomainNameHelpBalloonContent"),
function(n){n.noAvailabilitySet=t("Warning_noAvailabilitySet");n.availabilitySetWithOneVM=t("Warning_availabilitySetWithOneVM")}
(f=n.Warning||(n.Warning={})),function(n){n.misconfigured=t("status_misconfigured");n.notConfigured=
t("status_notConfigured")}(e=n.Status||(n.Status={})),function(n){n.nameAlreadyExists=t("Validation_nameAlreadyExists");
n.nameRequired=t("Validation_nameRequired");n.nameRegex=t("Validation_nameRegex");n.nameLength=t("Validation_nameLength")}
(o=n.Validation||(n.Validation={}));n.addBladeSubtitle=t("addBladeSubtitle");n.name=t("Name");n.addBladeTitle=
t("addBladeTitle"),function(n){n.add=t("commandTitle_add");n.save=t("commandTitle_save");n.discard=t(
"commandTitle_discard")}(s=n.CommandTitle||(n.CommandTitle={}));n.standaloneVM=t("StandaloneVM");n.saveLabel=
t("saveLabel");n.saveConfirmation=t("saveConfirmation");n.discardLabel=t("discardLabel");n.notificationUpdateAvailabilitySetSuccessTitle=
t("NotificationUpdateAvailabilitySetSuccessTitle");n.notificationUpdateAvailabilitySetSuccessMessage=
t("NotificationUpdateAvailabilitySetSuccessMessage");n.notificationUpdateAvailabilitySetInProgressTitle=
t("NotificationUpdateAvailabilitySetInProgressTitle");n.notificationUpdateAvailabilitySetInProgressMessage=
t("NotificationUpdateAvailabilitySetInProgressMessage");n.notificationUpdateAvailabilitySetFailureTitle=
t("NotificationUpdateAvailabilitySetFailureTitle");n.notificationUpdateAvailabilitySetFailureMessage=
t("NotificationUpdateAvailabilitySetFailureMessage");n.saveConfirmationTitle=t("saveConfirmationTitle");
n.saveConfirmationMessage=t("saveConfirmationMessage");n.loading=t("Loading");n.emptyText=t("EmptyText"),
function(n){var i,r,u;n.noRows=t("Picker_noRows"),function(n){n.title=t("Picker_NoAvailabilitySet_title");
n.description=t("Picker_NoAvailabilitySet_description")}(i=n.NoAvailabilitySet||(n.NoAvailabilitySet=
{})),function(n){n.title=t("Picker_Blade_title")}(r=n.Blade||(n.Blade={})),function(n){n.template=t(
"Picker_AttachedVms_template")}(u=n.AttachedVms||(n.AttachedVms={}))}(h=n.Picker||(n.Picker={}));n.availabilitySetDescription=
t("AvailabilitySetDescription");n.availabilitySet=t("AvailabilitySet")})(t=n.AvailabilitySet||(n.AvailabilitySet=
{}))})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets={}))})(ClassicComputeExtension||
(ClassicComputeExtension={})),function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";
function i(){var i="ClassicComputeExtension.ExtensionAssets.Resources.Create",n=window,t;if(n.Resources&&
n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error("Unable to find the resources for '"+
i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt,it,rt,ut,
ft,et,ot,st,ht,ct,lt;(function(n){var i;(function(n){n.nameAlreadyExistsInResourceGroup=t("Hostname_Validation_nameAlreadyExistsInResourceGroup")}
)(i=n.Validation||(n.Validation={}))})(r=n.Hostname||(n.Hostname={})),function(n){var i;(function(n)
{var i;(function(n){var i,r,u;(function(n){n.title=t("UserImage_CreateVM_Notification_Success_title");
n.message=t("UserImage_CreateVM_Notification_Success_message")})(i=n.Success||(n.Success={})),function(
n){n.title=t("UserImage_CreateVM_Notification_InProgress_title");n.message=t("UserImage_CreateVM_Notification_InProgress_message")}
(r=n.InProgress||(n.InProgress={})),function(n){n.title=t("UserImage_CreateVM_Notification_Failure_title");
n.message=t("UserImage_CreateVM_Notification_Failure_message")}(u=n.Failure||(n.Failure={}))})(i=n.Notification||
(n.Notification={}))})(i=n.CreateVM||(n.CreateVM={}))}(u=n.UserImage||(n.UserImage={})),function(n){
var i;(function(n){var i;(function(n){var i,r,u;(function(n){n.title=t("UserDisk_CreateVM_Notification_Success_title");
n.message=t("UserDisk_CreateVM_Notification_Success_message")})(i=n.Success||(n.Success={})),function(
n){n.title=t("UserDisk_CreateVM_Notification_InProgress_title");n.message=t("UserDisk_CreateVM_Notification_InProgress_message")}
(r=n.InProgress||(n.InProgress={})),function(n){n.title=t("UserDisk_CreateVM_Notification_Failure_title");
n.message=t("UserDisk_CreateVM_Notification_Failure_message")}(u=n.Failure||(n.Failure={}))})(i=n.Notification||
(n.Notification={}))})(i=n.CreateVM||(n.CreateVM={}))}(f=n.UserDisk||(n.UserDisk={})),function(n){var
i,r,u;(function(n){n.infoMessage=t("ResourceExtension_DefaultExtensions_infoMessage")})(i=n.DefaultExtensions||
(n.DefaultExtensions={})),function(n){n.hotSpot=t("ResourceExtension_AddExtension_hotSpot")}(r=n.AddExtension||
(n.AddExtension={})),function(n){n.description=t("ResourceExtension_Blade_description");n.title=t("ResourceExtension_Blade_title")}
(u=n.Blade||(n.Blade={}))}(e=n.ResourceExtension||(n.ResourceExtension={})),function(n){var i,r,u,f,
e,o,s,h,c,l,a,v,y,p;(function(n){n.title=t("AzurePackWebSites_RoleConfig_title")})(i=n.RoleConfig||(n.
RoleConfig={})),function(n){n.title=t("AzurePackWebSites_Ww_title");n.info=t("AzurePackWebSites_Ww_info")}
(r=n.Ww||(n.Ww={})),function(n){n.title=t("AzurePackWebSites_Ws_title");n.info=t("AzurePackWebSites_Ws_info")}
(u=n.Ws||(n.Ws={})),function(n){n.title=t("AzurePackWebSites_Wm_title");n.info=t("AzurePackWebSites_Wm_info")}
(f=n.Wm||(n.Wm={})),function(n){n.title=t("AzurePackWebSites_Wl_title");n.info=t("AzurePackWebSites_Wl_info")}
(e=n.Wl||(n.Wl={})),function(n){n.title=t("AzurePackWebSites_Ux_title");n.info=t("AzurePackWebSites_Ux_info")}
(o=n.Ux||(n.Ux={})),function(n){n.title=t("AzurePackWebSites_Pb_title");n.info=t("AzurePackWebSites_Pb_info")}
(s=n.Pb||(n.Pb={})),function(n){n.title=t("AzurePackWebSites_Mn_title");n.info=t("AzurePackWebSites_Mn_info")}
(h=n.Mn||(n.Mn={})),function(n){n.title=t("AzurePackWebSites_MachineConfig_title");n.info=t("AzurePackWebSites_MachineConfig_info")}
(c=n.MachineConfig||(n.MachineConfig={})),function(n){n.title=t("AzurePackWebSites_Lb_title");n.info=
t("AzurePackWebSites_Lb_info")}(l=n.Lb||(n.Lb={})),function(n){n.title=t("AzurePackWebSites_Fs_title");
n.info=t("AzurePackWebSites_Fs_info")}(a=n.Fs||(n.Fs={})),function(n){n.title=t("AzurePackWebSites_Db_title");
n.info=t("AzurePackWebSites_Db_info")}(v=n.Db||(n.Db={})),function(n){n.title=t("AzurePackWebSites_Cn_title");
n.info=t("AzurePackWebSites_Cn_info")}(y=n.Cn||(n.Cn={})),function(n){n.title=t("AzurePackWebSites_Blade_title")}
(p=n.Blade||(n.Blade={}))}(o=n.AzurePackWebSites||(n.AzurePackWebSites={})),function(n){var i;(function(
n){n.title=t("ImageVersion_Blade_title")})(i=n.Blade||(n.Blade={}))}(s=n.ImageVersion||(n.ImageVersion=
{})),function(n){n.configuredMessage=t("Endpoints_ConfiguredMessage")}(h=n.Endpoints||(n.Endpoints={
})),function(n){var i;(function(n){n.title=t("EndpointConfiguration_Blade_title")})(i=n.Blade||(n.Blade=
{}))}(c=n.EndpointConfiguration||(n.EndpointConfiguration={})),function(n){var i,r,u,f,e,o,s,h,c,l,a,
v,y,p,w,b,k,d,g,nt,tt,it,rt,ut,ft,et,ot,st,ht,ct,lt,at,vt,yt,pt,wt,bt,kt;(function(n){var i;(function(
n){n.title=t("Field_SQLAutoPatching_Selector_title");n.helpBalloonMessage=t("Field_SQLAutoPatching_Selector_helpBalloonMessage")}
)(i=n.Selector||(n.Selector={}))})(i=n.SQLAutoPatching||(n.SQLAutoPatching={})),function(n){var i;(function(
n){n.title=t("Field_SQLAutoBackup_Selector_title");n.helpBalloonMessage=t("Field_SQLAutoBackup_Selector_helpBalloonMessage")}
)(i=n.Selector||(n.Selector={}))}(r=n.SQLAutoBackup||(n.SQLAutoBackup={})),function(n){n.lockedText=
t("Field_OptionalConfiguration_lockedText");n.title=t("Field_OptionalConfiguration_title");n.displayText=
t("Field_OptionalConfiguration_displayText")}(u=n.OptionalConfiguration||(n.OptionalConfiguration={})
),function(n){n.updatedTitle=t("Field_IpAddress_updatedTitle");n.defaultTitle=t("Field_IpAddress_defaultTitle");
var i;(function(n){n.title=t("Field_IpAddress_Selector_title")})(i=n.Selector||(n.Selector={}))}(f=n.
IpAddress||(n.IpAddress={})),function(n){var i;(function(n){n.reservedIp=t("Field_Location_Locked_reservedIp");
n.storage=t("Field_Location_Locked_storage");n.network=t("Field_Location_Locked_network");n.domainName=
t("Field_Location_Locked_domainName")})(i=n.Locked||(n.Locked={}))}(e=n.Location||(n.Location={})),function(
n){var i;(function(n){n.performanceMonitoring=t("Field_Subscription_Locked_PerformanceMonitoring");n.
storage=t("Field_Subscription_Locked_storage");n.domainName=t("Field_Subscription_Locked_domainName");
n.network=t("Field_Subscription_Locked_network")})(i=n.Locked||(n.Locked={}))}(o=n.Subscription||(n.
Subscription={})),function(n){var i,r;(function(n){n.lockedBalloonText=t("Field_NewRelic_Selector_lockedBalloonText")}
)(i=n.Selector||(n.Selector={})),function(n){n.title=t("Field_NewRelic_Enabled_title");n.on=t("Field_NewRelic_Enabled_on");
n.off=t("Field_NewRelic_Enabled_off");n.helpBalloon=t("Field_NewRelic_Enabled_helpBalloon")}(r=n.Enabled||
(n.Enabled={}))}(s=n.NewRelic||(n.NewRelic={})),function(n){var i;(function(n){n.title=t("Field_PerformanceMonitoring_Selector_title")}
)(i=n.Selector||(n.Selector={}))}(h=n.PerformanceMonitoring||(n.PerformanceMonitoring={})),function(
n){var i;(function(n){n.loading=t("Field_Selector_DisplayText_loading");n.configured=t("Field_Selector_DisplayText_configured");
n.reviewDefault=t("Field_Selector_DisplayText_reviewDefault");n.notConfigured=t("Field_Selector_DisplayText_notConfigured")}
)(i=n.DisplayText||(n.DisplayText={}))}(c=n.Selector||(n.Selector={})),function(n){var i;(function(n)
{n.standard=t("Field_Diagnostics_Status_standard");n.off=t("Field_Diagnostics_Status_off");n.custom=
t("Field_Diagnostics_Status_custom")})(i=n.Status||(n.Status={}));n.title=t("Field_diagnostics_title")}
(l=n.Diagnostics||(n.Diagnostics={})),function(n){var i;(function(n){n.title=t("Field_StorageAccount_Selector_title")}
)(i=n.Selector||(n.Selector={}))}(a=n.StorageAccount||(n.StorageAccount={})),function(n){var i;(function(
n){n.domainName=t("Field_ResourceGroup_Locked_domainName")})(i=n.Locked||(n.Locked={}))}(v=n.ResourceGroup||
(n.ResourceGroup={})),function(n){var i;(function(n){n.title=t("Field_Storage_Selector_title")})(i=n.
Selector||(n.Selector={}))}(y=n.Storage||(n.Storage={})),function(n){n.emptyText=t("Field_DomainUser_emptyText");
n.title=t("Field_DomainUser_title")}(p=n.DomainUser||(n.DomainUser={})),function(n){n.title=t("Field_SshKey_title")}
(w=n.SshKey||(n.SshKey={})),function(n){var i;(function(n){n.title=t("Field_DomainName_Selector_title")}
)(i=n.Selector||(n.Selector={}))}(b=n.DomainName||(n.DomainName={})),function(n){var i;(function(n){
n.title=t("Field_VirtualNetwork_Selector_title")})(i=n.Selector||(n.Selector={}))}(k=n.VirtualNetwork||
(n.VirtualNetwork={})),function(n){var i;(function(n){n.title=t("Field_Subnet_Selector_title")})(i=n.
Selector||(n.Selector={}))}(d=n.Subnet||(n.Subnet={})),function(n){var i;(function(n){n.title=t("Field_DNSServers_Selector_title")}
)(i=n.Selector||(n.Selector={}));n.azureProvided=t("Field_DNSServers_azureProvided")}(g=n.DNSServers||
(n.DNSServers={})),function(n){n.title=t("Field_DomainToJoin_title")}(nt=n.DomainToJoin||(n.DomainToJoin=
{})),function(n){n.title=t("Field_DomainPassword_title")}(tt=n.DomainPassword||(n.DomainPassword={})
),function(n){var i;(function(n){n.title=t("Field_Timezone_Selector_title")})(i=n.Selector||(n.Selector=
{}))}(it=n.Timezone||(n.Timezone={})),function(n){n.title=t("Field_OSRelease_title")}(rt=n.OSRelease||
(n.OSRelease={})),function(n){var i;(function(n){n.title=t("Field_DomainJoin_Selector_title")})(i=n.
Selector||(n.Selector={}))}(ut=n.DomainJoin||(n.DomainJoin={})),function(n){n.off=t("Field_AutomaticUpdates_off");
n.on=t("Field_AutomaticUpdates_on");n.title=t("Field_AutomaticUpdates_title")}(ft=n.AutomaticUpdates||
(n.AutomaticUpdates={})),function(n){var i;(function(n){n.title=t("Field_OSSettings_Selector_title")}
)(i=n.Selector||(n.Selector={}))}(et=n.OSSettings||(n.OSSettings={})),function(n){var i;(function(n)
{n.title=t("Field_Network_Selector_title")})(i=n.Selector||(n.Selector={}))}(ot=n.Network||(n.Network=
{})),function(n){var i;(function(n){n.title=t("Field_ImageVersion_Selector_title")})(i=n.Selector||(n.
Selector={}))}(st=n.ImageVersion||(n.ImageVersion={})),function(n){var i;(function(n){n.title=t("Field_Extensions_Selector_title");
var i;(function(n){n.noExtensions=t("Field_Extensions_Selector_DisplayText_noExtensions")})(i=n.DisplayText||
(n.DisplayText={}))})(i=n.Selector||(n.Selector={}))}(ht=n.Extensions||(n.Extensions={})),function(n)
{var i;(function(n){n.title=t("Field_Disks_Selector_title")})(i=n.Selector||(n.Selector={}))}(ct=n.Disks||
(n.Disks={})),function(n){var i;(function(n){n.title=t("Field_Endpoints_Selector_title")})(i=n.Selector||
(n.Selector={}))}(lt=n.Endpoints||(n.Endpoints={})),function(n){var i;(function(n){n.title=t("Field_AvailabilitySet_Selector_title")}
)(i=n.Selector||(n.Selector={}))}(at=n.AvailabilitySet||(n.AvailabilitySet={})),function(n){n.title=
t("Field_PricingTier_title")}(vt=n.PricingTier||(n.PricingTier={})),function(n){n.title=t("Field_SshPublicKey_title")}
(yt=n.SshPublicKey||(n.SshPublicKey={})),function(n){n.title=t("Field_AuthenticationType_title")}(pt=
n.AuthenticationType||(n.AuthenticationType={})),function(n){var i,r;(function(n){n.empty=t("Field_UserName_Windows_empty")}
)(i=n.Windows||(n.Windows={}));n.title=t("Field_UserName_title"),function(n){n.empty=t("Field_UserName_Linux_empty")}
(r=n.Linux||(n.Linux={}))}(wt=n.UserName||(n.UserName={})),function(n){n.title=t("Field_Password_title")}
(bt=n.Password||(n.Password={})),function(n){n.title=t("Field_HostName_title");n.empty=t("Field_HostName_empty")}
(kt=n.HostName||(n.HostName={}))}(l=n.Field||(n.Field={})),function(n){var i,r,u,f,e,o,s;(function(n)
{var i,r,u,f,e,o,s,h,c;(function(n){n.helpBalloonMessage=t("SQLAlwaysOn_Field_PricingTier_helpBalloonMessage");
n.title=t("SQLAlwaysOn_Field_PricingTier_title")})(i=n.PricingTier||(n.PricingTier={})),function(n){
n.helpBalloonText=t("SQLAlwaysOn_Field_NewExistingDomain_helpBalloonText")}(r=n.NewExistingDomain||(n.
NewExistingDomain={})),function(n){var i;(function(n){n.length=t("SQLAlwaysOn_Field_AvailabilityGroupName_Validation_length")}
)(i=n.Validation||(n.Validation={}));n.title=t("SQLAlwaysOn_Field_AvailabilityGroupName_title");n.helpBalloonText=
t("SQLAlwaysOn_Field_AvailabilityGroupName_helpBalloonText")}(u=n.AvailabilityGroupName||(n.AvailabilityGroupName=
{})),function(n){n.title=t("SQLAlwaysOn_Field_SetAvailabilityGroupListener_title");n.helpBalloonText=
t("SQLAlwaysOn_Field_SetAvailabilityGroupListener_helpBalloonText")}(f=n.SetAvailabilityGroupListener||
(n.SetAvailabilityGroupListener={})),function(n){n.title=t("SQLAlwaysOn_Field_HostNamePrefix_title");
n.helpBalloonText=t("SQLAlwaysOn_Field_HostNamePrefix_helpBalloonText")}(e=n.HostNamePrefix||(n.HostNamePrefix=
{})),function(n){n.title=t("SQLAlwaysOn_Field_ConfirmPassword_title")}(o=n.ConfirmPassword||(n.ConfirmPassword=
{})),function(n){n.title=t("SQLAlwaysOn_Field_AvailabilityGroupListenerPort_title");n.helpBalloonText=
t("SQLAlwaysOn_Field_AvailabilityGroupListenerPort_helpBalloonText")}(s=n.AvailabilityGroupListenerPort||
(n.AvailabilityGroupListenerPort={})),function(n){n.title=t("SQLAlwaysOn_Field_AvailabilityGroupListenerName_title");
n.helpBalloonText=t("SQLAlwaysOn_Field_AvailabilityGroupListenerName_helpBalloonText")}(h=n.AvailabilityGroupListenerName||
(n.AvailabilityGroupListenerName={})),function(n){n.title=t("SQLAlwaysOn_Field_Password_title")}(c=n.
Password||(n.Password={}))})(i=n.Field||(n.Field={})),function(n){n.subscriptionByNetwork=t("SQLAlwaysOn_Locking_subscriptionByNetwork");
n.locationByNetwork=t("SQLAlwaysOn_Locking_locationByNetwork");n.subscriptionByStorage=t("SQLAlwaysOn_Locking_subscriptionByStorage");
n.locationByStorage=t("SQLAlwaysOn_Locking_locationByStorage")}(r=n.Locking||(n.Locking={})),function(
n){var i;(function(n){var i,r,u,f;(function(n){n.title=t("SQLAlwaysOn_SqlServers_Field_WitnessPricingTier_title");
n.lockedText=t("SQLAlwaysOn_SqlServers_Field_WitnessPricingTier_lockedText");n.displayTemplate=t("SQLAlwaysOn_SqlServers_Field_WitnessPricingTier_displayTemplate")}
)(i=n.WitnessPricingTier||(n.WitnessPricingTier={})),function(n){n.inlineLabel=t("SQLAlwaysOn_SqlServers_Field_UseAdminPassword_inlineLabel");
n.helpBalloonText=t("SQLAlwaysOn_SqlServers_Field_UseAdminPassword_helpBalloonText")}(r=n.UseAdminPassword||
(n.UseAdminPassword={})),function(n){n.title=t("SQLAlwaysOn_SqlServers_Field_ServerAccount_title");n.
helpBalloonText=t("SQLAlwaysOn_SqlServers_Field_ServerAccount_helpBalloonText")}(u=n.ServerAccount||
(n.ServerAccount={})),function(n){n.highAvailabilityDisplayText=t("SQLAlwaysOn_SqlServers_Field_PricingTier_highAvailabilityDisplayText")}
(f=n.PricingTier||(n.PricingTier={}))})(i=n.Field||(n.Field={}))}(u=n.SqlServers||(n.SqlServers={})),
function(n){n.storageBySubscription=t("SQLAlwaysOn_Filtering_storageBySubscription");n.storageByLocation=
t("SQLAlwaysOn_Filtering_storageByLocation")}(f=n.Filtering||(n.Filtering={})),function(n){var i,r;(
function(n){n.displayText=t("SQLAlwaysOn_OptionalConfiguration_Selector_displayText")})(i=n.Selector||
(n.Selector={})),function(n){n.title=t("SQLAlwaysOn_OptionalConfiguration_Blade_title")}(r=n.Blade||
(n.Blade={}))}(e=n.OptionalConfiguration||(n.OptionalConfiguration={})),function(n){var i,r,u;(function(
n){n.displayText=t("SQLAlwaysOn_CreateSQLAlwaysOn_Selectors_displayText")})(i=n.Selectors||(n.Selectors=
{})),function(n){var i,r,u,f,e;(function(n){n.title=t("SQLAlwaysOn_CreateSQLAlwaysOn_Field_UserName_title");
n.helpBalloonText=t("SQLAlwaysOn_CreateSQLAlwaysOn_Field_UserName_helpBalloonText")})(i=n.UserName||
(n.UserName={})),function(n){n.title=t("SQLAlwaysOn_CreateSQLAlwaysOn_Field_SQLServerSettingsSelector_title")}
(r=n.SQLServerSettingsSelector||(n.SQLServerSettingsSelector={})),function(n){n.title=t("SQLAlwaysOn_CreateSQLAlwaysOn_Field_ResourceGroupName_title");
n.helpBalloonText=t("SQLAlwaysOn_CreateSQLAlwaysOn_Field_ResourceGroupName_helpBalloonText")}(u=n.ResourceGroupName||
(n.ResourceGroupName={})),function(n){n.title=t("SQLAlwaysOn_CreateSQLAlwaysOn_Field_OptionalConfigurationSelector_title")}
(f=n.OptionalConfigurationSelector||(n.OptionalConfigurationSelector={})),function(n){n.title=t("SQLAlwaysOn_CreateSQLAlwaysOn_Field_DomainJoinSelector_title");
n.displayText=t("SQLAlwaysOn_CreateSQLAlwaysOn_Field_DomainJoinSelector_displayText")}(e=n.DomainJoinSelector||
(n.DomainJoinSelector={}))}(r=n.Field||(n.Field={})),function(n){n.title=t("SQLAlwaysOn_CreateSQLAlwaysOn_blade_title");
n.description=t("SQLAlwaysOn_CreateSQLAlwaysOn_blade_description")}(u=n.Blade||(n.Blade={}))}(o=n.CreateSQLAlwaysOn||
(n.CreateSQLAlwaysOn={})),function(n){var i;(function(n){n.title=t("SQLAlwaysOn_SQLServer_Blade_title");
n.description=t("SQLAlwaysOn_SQLServer_Blade_description")})(i=n.Blade||(n.Blade={}))}(s=n.SQLServer||
(n.SQLServer={}))}(a=n.SQLAlwaysOn||(n.SQLAlwaysOn={})),function(n){var i,r;(function(n){var i,r,u,f,
e,o,s;(function(n){n.notAllowedText=t("DomainJoin_Field_ExistingDomain_notAllowedText");n.title=t("DomainJoin_Field_ExistingDomain_title")}
)(i=n.ExistingDomain||(n.ExistingDomain={})),function(n){n.title=t("DomainJoin_Field_ExistingDomainName_title")}
(r=n.ExistingDomainName||(n.ExistingDomainName={})),function(n){n.title=t("DomainJoin_Field_JoinDomain_title")}
(u=n.JoinDomain||(n.JoinDomain={})),function(n){n.title=t("DomainJoin_Field_UserName_title");n.helpBalloonText=
t("DomainJoin_Field_UserName_helpBalloonText")}(f=n.UserName||(n.UserName={})),function(n){n.highAvailabilityDisplayText=
t("DomainJoin_Field_PricingTier_highAvailabilityDisplayText")}(e=n.PricingTier||(n.PricingTier={})),
function(n){n.title=t("DomainJoin_Field_NewDomain_title")}(o=n.NewDomain||(n.NewDomain={})),function(
n){n.title=t("DomainJoin_Field_Domain_title");n.helpBalloonText=t("DomainJoin_Field_Domain_helpBalloonText")}
(s=n.Domain||(n.Domain={}))})(i=n.Field||(n.Field={})),function(n){n.description=t("DomainJoin_Blade_description");
n.title=t("DomainJoin_Blade_title")}(r=n.Blade||(n.Blade={}))}(v=n.DomainJoin||(n.DomainJoin={}));n.
disabledSpecMessageWithGalleryItem=t("disabledSpecMessageWithGalleryItem");n.disabledSpecMessage=t("disabledSpecMessage"),
function(n){var i,r,u;(function(n){var i;(function(n){n.regex=t("DataStax_Validation_ResourceGroupName_regex");
n.maxLength=t("DataStax_Validation_ResourceGroupName_maxLength")})(i=n.ResourceGroupName||(n.ResourceGroupName=
{}))})(i=n.Validation||(n.Validation={})),function(n){var i,r,u,f,e,o,s,h;(function(n){n.title=t("DataStax_Field_Password_title")}
)(i=n.Password||(n.Password={})),function(n){n.title=t("DataStax_Field_ConfirmPassword_title")}(r=n.
ConfirmPassword||(n.ConfirmPassword={})),function(n){n.helpBalloon=t("DataStax_Field_StoragePricing_helpBalloon");
n.title=t("DataStax_Field_StoragePricing_title")}(u=n.StoragePricing||(n.StoragePricing={})),function(
n){n.helpBalloon=t("DataStax_Field_NodePricingTier_helpBalloon");n.title=t("DataStax_Field_NodePricingTier_title")}
(f=n.NodePricingTier||(n.NodePricingTier={})),function(n){n.title=t("DataStax_Field_Username_title");
n.helpBalloon=t("DataStax_Field_Username_helpBalloon")}(e=n.Username||(n.Username={})),function(n){n.
title=t("DataStax_Field_SSH_title");n.helpBalloon=t("DataStax_Field_SSH_helpBalloon")}(o=n.SSH||(n.SSH=
{})),function(n){n.title=t("DataStax_Field_ResourceGroup_title");n.helpBalloon=t("DataStax_Field_ResourceGroup_helpBalloon")}
(s=n.ResourceGroup||(n.ResourceGroup={})),function(n){n.title=t("DataStax_Field_OpsCenterServerPricingTier_title");
n.helpBalloon=t("DataStax_Field_OpsCenterServerPricingTier_helpBalloon")}(h=n.OpsCenterServerPricingTier||
(n.OpsCenterServerPricingTier={}))}(r=n.Field||(n.Field={})),function(n){n.title=t("DataStax_Blade_title")}
(u=n.Blade||(n.Blade={}))}(y=n.DataStax||(n.DataStax={})),function(n){n.reservedIps=t("OverQuota_reservedIps");
n.requestIncrease=t("OverQuota_requestIncrease");n.virtualNetworks=t("OverQuota_virtualNetworks");n.
storageAccounts=t("OverQuota_storageAccounts");n.domainNames=t("OverQuota_domainNames");n.dnsServers=
t("OverQuota_dnsServers");n.cores=t("OverQuota_cores")}(p=n.OverQuota||(n.OverQuota={})),function(n)
{var i,r,u,f,e;(function(n){var i;(function(n){n.text=t("Filter_ResourceGroup_ReservedIp_text")})(i=
n.ReservedIp||(n.ReservedIp={}))})(i=n.ResourceGroup||(n.ResourceGroup={})),function(n){var i,r;(function(
n){n.text=t("Filter_StorageAccount_AccountType_text")})(i=n.AccountType||(n.AccountType={})),function(
n){n.text=t("Filter_StorageAccount_Location_text")}(r=n.Location||(n.Location={}))}(r=n.StorageAccount||
(n.StorageAccount={})),function(n){n.text=t("Filter_Location_text")}(u=n.Location||(n.Location={})),
function(n){var i,r,u;(function(n){n.text=t("Filter_VirtualNetwork_Subscription_text")})(i=n.Subscription||
(n.Subscription={})),function(n){n.text=t("Filter_VirtualNetwork_ResourceGroup_text")}(r=n.ResourceGroup||
(n.ResourceGroup={})),function(n){n.text=t("Filter_VirtualNetwork_Location_text")}(u=n.Location||(n.
Location={}))}(f=n.VirtualNetwork||(n.VirtualNetwork={})),function(n){var i,r,u;(function(n){n.text=
t("Filter_Domain_Subscription_text")})(i=n.Subscription||(n.Subscription={})),function(n){n.text=t("Filter_Domain_ResourceGroup_text")}
(r=n.ResourceGroup||(n.ResourceGroup={})),function(n){n.text=t("Filter_Domain_Location_text")}(u=n.Location||
(n.Location={}))}(e=n.Domain||(n.Domain={}))}(w=n.Filter||(n.Filter={})),function(n){n.vm=t("Pricing_vm");
n.storage=t("Pricing_storage");var i;(function(n){n.noGateway=t("Pricing_Network_noGateway")})(i=n.Network||
(n.Network={}));n.network=t("Pricing_network");n.month=t("Pricing_month")}(b=n.Pricing||(n.Pricing={
})),function(n){var i;(function(n){n.help=t("VirtualIpAddress_Options_help");n.title=t("VirtualIpAddress_Options_title");
n.reserved=t("VirtualIpAddress_Options_reserved");n.dynamic=t("VirtualIpAddress_Options_dynamic")})(
i=n.Options||(n.Options={}))}(k=n.VirtualIpAddress||(n.VirtualIpAddress={})),function(n){var i,r;(function(
n){n.help=t("InstanceIpAddress_Options_help");n.title=t("InstanceIpAddress_Options_title");n.on=t("InstanceIpAddress_Options_on");
n.off=t("InstanceIpAddress_Options_off")})(i=n.Options||(n.Options={})),function(n){n.title=t("InstanceIpAddress_IdleTimeOut_title")}
(r=n.IdleTimeOut||(n.IdleTimeOut={}))}(d=n.InstanceIpAddress||(n.InstanceIpAddress={})),function(n){
var i;(function(n){n.title=t("NewRelic_Blade_title");n.description=t("NewRelic_Blade_description")})
(i=n.Blade||(n.Blade={}))}(g=n.NewRelic||(n.NewRelic={})),function(n){var i;(function(n){n.title=t("Selector_ReservedIpAddress_title")}
)(i=n.ReservedIpAddress||(n.ReservedIpAddress={}))}(nt=n.Selector||(n.Selector={}));n.notSupportedStorageAccountType=
t("notSupportedStorageAccountType"),function(n){var i,r;(function(n){n.title=t("Cloudera_Blade_title")}
)(i=n.Blade||(n.Blade={})),function(n){var i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g;(function(n){n.title=
t("Cloudera_Field_Workload_title");n.helpBalloon=t("Cloudera_Field_Workload_helpBalloon");n.hbase=t(
"Cloudera_Field_Workload_hbase");n.analytics=t("Cloudera_Field_Workload_analytics")})(i=n.Workload||
(n.Workload={})),function(n){n.title=t("Cloudera_Field_WorkerSize_title")}(r=n.WorkerSize||(n.WorkerSize=
{})),function(n){n.title=t("Cloudera_Field_WorkerCount_title");n.helpBalloon=t("Cloudera_Field_WorkerCount_helpBalloon");
n.maxWorkers=t("Cloudera_Field_WorkerCount_maxWorkers");n.minWorkers=t("Cloudera_Field_WorkerCount_minWorkers")}
(u=n.WorkerCount||(n.WorkerCount={})),function(n){n.title=t("Cloudera_Field_WorkerConfig_title");n.displayTemplate=
t("Cloudera_Field_WorkerConfig_displayTemplate")}(f=n.WorkerConfig||(n.WorkerConfig={})),function(n)
{n.title=t("Cloudera_Field_Username_title");n.helpBalloon=t("Cloudera_Field_Username_helpBalloon")}(
e=n.Username||(n.Username={})),function(n){n.title=t("Cloudera_Field_StoragePricing_title")}(o=n.StoragePricing||
(n.StoragePricing={})),function(n){n.title=t("Cloudera_Field_SSH_title");n.helpBalloon=t("Cloudera_Field_SSH_helpBalloon")}
(s=n.SSH||(n.SSH={})),function(n){n.title=t("Cloudera_Field_SparkVersion_title");n.helpBalloon=t("Cloudera_Field_SparkVersion_helpBalloon")}
(h=n.SparkVersion||(n.SparkVersion={})),function(n){n.title=t("Cloudera_Field_SearchVersion_title");
n.helpBalloon=t("Cloudera_Field_SearchVersion_helpBalloon")}(c=n.SearchVersion||(n.SearchVersion={})
),function(n){n.regexValidation=t("Cloudera_Field_ClusterName_regexValidation");n.title=t("Cloudera_Field_ClusterName_title");
n.helpBalloon=t("Cloudera_Field_ClusterName_helpBalloon")}(l=n.ClusterName||(n.ClusterName={})),function(
n){n.title=t("Cloudera_Field_ResourceGroup_title");n.helpBalloon=t("Cloudera_Field_ResourceGroup_helpBalloon")}
(a=n.ResourceGroup||(n.ResourceGroup={})),function(n){n.title=t("Cloudera_Field_Products_title")}(v=
n.Products||(n.Products={})),function(n){n.title=t("Cloudera_Field_MasterPricing_title")}(y=n.MasterPricing||
(n.MasterPricing={})),function(n){n.title=t("Cloudera_Field_ImpalaVersion_title");n.helpBalloon=t("Cloudera_Field_ImpalaVersion_helpBalloon")}
(p=n.ImpalaVersion||(n.ImpalaVersion={})),function(n){n.title=t("Cloudera_Field_HA_title");n.helpBalloon=
t("Cloudera_Field_HA_helpBalloon")}(w=n.HA||(n.HA={})),function(n){n.title=t("Cloudera_Field_EnableSpark_title");
n.helpBalloon=t("Cloudera_Field_EnableSpark_helpBalloon")}(b=n.EnableSpark||(n.EnableSpark={})),function(
n){n.title=t("Cloudera_Field_EnableSearch_title");n.helpBalloon=t("Cloudera_Field_EnableSearch_helpBalloon")}
(k=n.EnableSearch||(n.EnableSearch={})),function(n){n.title=t("Cloudera_Field_EnableImpala_title");n.
helpBalloon=t("Cloudera_Field_EnableImpala_helpBalloon")}(d=n.EnableImpala||(n.EnableImpala={})),function(
n){n.title=t("Cloudera_Field_CDHVersion_title");n.helpBalloon=t("Cloudera_Field_CDHVersion_helpBalloon")}
(g=n.CDHVersion||(n.CDHVersion={}))}(r=n.Field||(n.Field={}))}(tt=n.Cloudera||(n.Cloudera={})),function(
n){var i,r,u,f,e,o,s,h,c,l;(function(n){n.range=t("Validation_Field_range");n.digits=t("Validation_Field_digits");
n.required=t("Validation_Field_required")})(i=n.Field||(n.Field={})),function(n){n.generateDefaultValues=
t("Validation_ResourceGroupName_generateDefaultValues")}(r=n.ResourceGroupName||(n.ResourceGroupName=
{})),function(n){var i,r;(function(n){n.errorMessage=t("Validation_UserName_NoDomain_ErrorMessage")}
)(i=n.NoDomain||(n.NoDomain={}));n.reserved=t("Validation_UserName_reserved"),function(n){n.spaces=t(
"Validation_UserName_Windows_spaces");n.periods=t("Validation_UserName_Windows_periods")}(r=n.Windows||
(n.Windows={}));n.regex=t("Validation_UserName_regex")}(u=n.UserName||(n.UserName={})),function(n){n.
reserved=t("Validation_Password_reserved");n.strength=t("Validation_Password_strength");n.length=t("Validation_Password_length")}
(f=n.Password||(n.Password={})),function(n){n.maxLength=t("Validation_HostNamePrefix_maxLength")}(e=
n.HostNamePrefix||(n.HostNamePrefix={})),function(n){n.regex=t("Validation_FullyQualifiedDomainName_regex")}
(o=n.FullyQualifiedDomainName||(n.FullyQualifiedDomainName={})),function(n){n.invalid=t("Validation_SshKey_invalid")}
(s=n.SshKey||(n.SshKey={})),function(n){n.locked=t("Validation_DomainName_locked")}(h=n.DomainName||
(n.DomainName={})),function(n){var i;(function(n){n.regex=t("Validation_Linux_HostName_regex")})(i=n.
HostName||(n.HostName={}))}(c=n.Linux||(n.Linux={})),function(n){var i;(function(n){n.regex=t("Validation_Windows_HostName_regex")}
)(i=n.HostName||(n.HostName={}))}(l=n.Windows||(n.Windows={}))}(it=n.Validation||(n.Validation={})),
function(n){var i,r,u,f,e,o,s,h;(function(n){var i,r;(function(n){var i,r,u,f;(function(n){n.inlineLabel=
t("SharePoint_SqlServers_Field_UseAdminPassword_inlineLabel");n.helpBalloonText=t("SharePoint_SqlServers_Field_UseAdminPassword_helpBalloonText")}
)(i=n.UseAdminPassword||(n.UseAdminPassword={})),function(n){n.title=t("SharePoint_SqlServers_Field_WitnessPricingTier_title");
n.lockedText=t("SharePoint_SqlServers_Field_WitnessPricingTier_lockedText");n.displayTemplate=t("SharePoint_SqlServers_Field_WitnessPricingTier_displayTemplate")}
(r=n.WitnessPricingTier||(n.WitnessPricingTier={})),function(n){n.highAvailabilityDisplayText=t("SharePoint_SqlServers_Field_PricingTier_highAvailabilityDisplayText")}
(u=n.PricingTier||(n.PricingTier={})),function(n){n.title=t("SharePoint_SqlServers_Field_ServerAccount_title");
n.helpBalloonText=t("SharePoint_SqlServers_Field_ServerAccount_helpBalloonText")}(f=n.ServerAccount||
(n.ServerAccount={}))})(i=n.Field||(n.Field={})),function(n){n.title=t("SharePoint_SqlServers_Blade_title");
n.description=t("SharePoint_SqlServers_Blade_description")}(r=n.Blade||(n.Blade={}))})(i=n.SqlServers||
(n.SqlServers={})),function(n){var i,r;(function(n){var i,r,u,f,e,o;(function(n){n.inlineLabel=t("SharePoint_SharePointServers_Field_UseAdminPassword_inlineLabel");
n.helpBalloonText=t("SharePoint_SharePointServers_Field_UseAdminPassword_helpBalloonText")})(i=n.UseAdminPassword||
(n.UseAdminPassword={})),function(n){n.title=t("SharePoint_SharePointServers_Field_FarmPassphrase_title");
n.helpBalloonText=t("SharePoint_SharePointServers_Field_FarmPassphrase_helpBalloonText")}(r=n.FarmPassphrase||
(n.FarmPassphrase={})),function(n){n.title=t("SharePoint_SharePointServers_Field_FarmConfirmPassphrase_title")}
(u=n.FarmConfirmPassphrase||(n.FarmConfirmPassphrase={})),function(n){n.title=t("SharePoint_SharePointServers_Field_FarmAccount_title");
n.helpBalloonText=t("SharePoint_SharePointServers_Field_FarmAccount_helpBalloonText")}(f=n.FarmAccount||
(n.FarmAccount={})),function(n){n.highAvailabilityDisplayText=t("SharePoint_SharePointServers_Field_PricingTier_highAvailabilityDisplayText")}
(e=n.PricingTier||(n.PricingTier={})),function(n){n.title=t("SharePoint_SharePointServers_Field_UserAccount_title");
n.helpBalloonText=t("SharePoint_SharePointServers_Field_UserAccount_helpBalloonText")}(o=n.UserAccount||
(n.UserAccount={}))})(i=n.Field||(n.Field={})),function(n){n.title=t("SharePoint_SharePointServers_Blade_title");
n.description=t("SharePoint_SharePointServers_Blade_description")}(r=n.Blade||(n.Blade={}))}(r=n.SharePointServers||
(n.SharePointServers={})),function(n){n.subscriptionByStorage=t("SharePoint_Locking_subscriptionByStorage");
n.locationByStorage=t("SharePoint_Locking_locationByStorage")}(u=n.Locking||(n.Locking={})),function(
n){n.storageBySubscription=t("SharePoint_Filtering_storageBySubscription");n.storageByLocation=t("SharePoint_Filtering_storageByLocation")}
(f=n.Filtering||(n.Filtering={})),function(n){var i,r;(function(n){n.displayText=t("SharePoint_OptionalConfiguration_Selector_displayText")}
)(i=n.Selector||(n.Selector={})),function(n){n.title=t("SharePoint_OptionalConfiguration_Blade_title")}
(r=n.Blade||(n.Blade={}))}(e=n.OptionalConfiguration||(n.OptionalConfiguration={})),function(n){var i,
r;(function(n){var i,r;(function(n){n.highAvailabilityDisplayText=t("SharePoint_DomainControllers_Field_PricingTier_highAvailabilityDisplayText")}
)(i=n.PricingTier||(n.PricingTier={})),function(n){n.title=t("SharePoint_DomainControllers_Field_Domain_title");
n.helpBalloonText=t("SharePoint_DomainControllers_Field_Domain_helpBalloonText")}(r=n.Domain||(n.Domain=
{}))})(i=n.Field||(n.Field={})),function(n){n.title=t("SharePoint_DomainControllers_Blade_title");n.
description=t("SharePoint_DomainControllers_Blade_description")}(r=n.Blade||(n.Blade={}))}(o=n.DomainControllers||
(n.DomainControllers={})),function(n){var i,r,u,f;(function(n){n.title=t("SharePoint_Field_PricingTier_title")}
)(i=n.PricingTier||(n.PricingTier={})),function(n){n.title=t("SharePoint_Field_Password_title")}(r=n.
Password||(n.Password={})),function(n){n.title=t("SharePoint_Field_HostNamePrefix_title");n.helpBalloonText=
t("SharePoint_Field_HostNamePrefix_helpBalloonText")}(u=n.HostNamePrefix||(n.HostNamePrefix={})),function(
n){n.title=t("SharePoint_Field_ConfirmPassword_title")}(f=n.ConfirmPassword||(n.ConfirmPassword={}))}
(s=n.Field||(n.Field={})),function(n){var i,r,u;(function(n){n.description=t("SharePoint_CreateSharePoint_Blade_description");
n.title=t("SharePoint_CreateSharePoint_Blade_title")})(i=n.Blade||(n.Blade={})),function(n){n.displayText=
t("SharePoint_CreateSharePoint_Selectors_displayText")}(r=n.Selectors||(n.Selectors={})),function(n)
{var i,r,u,f,e,o,s;(function(n){n.title=t("SharePoint_CreateSharePoint_Field_SqlServersSelector_title")}
)(i=n.SqlServersSelector||(n.SqlServersSelector={})),function(n){n.title=t("SharePoint_CreateSharePoint_Field_SharePointServersSelector_title")}
(r=n.SharePointServersSelector||(n.SharePointServersSelector={})),function(n){n.title=t("SharePoint_CreateSharePoint_Field_OptionalConfigurationSelector_title")}
(u=n.OptionalConfigurationSelector||(n.OptionalConfigurationSelector={})),function(n){n.title=t("SharePoint_CreateSharePoint_Field_DomainControllersSelector_title")}
(f=n.DomainControllersSelector||(n.DomainControllersSelector={})),function(n){n.title=t("SharePoint_CreateSharePoint_Field_UserName_title");
n.helpBalloonText=t("SharePoint_CreateSharePoint_Field_UserName_helpBalloonText")}(e=n.UserName||(n.
UserName={})),function(n){n.title=t("SharePoint_CreateSharePoint_Field_ResourceGroupName_title");n.helpBalloonText=
t("SharePoint_CreateSharePoint_Field_ResourceGroupName_helpBalloonText")}(o=n.ResourceGroupName||(n.
ResourceGroupName={})),function(n){n.title=t("SharePoint_CreateSharePoint_Field_HighAvailability_title");
n.inlineLabel=t("SharePoint_CreateSharePoint_Field_HighAvailability_inlineLabel");n.helpBalloonText=
t("SharePoint_CreateSharePoint_Field_HighAvailability_helpBalloonText")}(s=n.HighAvailability||(n.HighAvailability=
{}))}(u=n.Field||(n.Field={}))}(h=n.CreateSharePoint||(n.CreateSharePoint={}))}(rt=n.SharePoint||(n.
SharePoint={})),function(n){var i;(function(n){n.title=t("PrivateIp_Options_title");n.staticIp=t("PrivateIp_Options_staticIp");
n.dhcp=t("PrivateIp_Options_dhcp")})(i=n.Options||(n.Options={}))}(ut=n.PrivateIp||(n.PrivateIp={})),
function(n){var i,r;(function(n){var i;(function(n){n.title=t("IpAddress_Picker_Blade_title")})(i=n.
Blade||(n.Blade={}))})(i=n.Picker||(n.Picker={})),function(n){n.title=t("IpAddress_Field_title")}(r=
n.Field||(n.Field={}))}(ft=n.IpAddress||(n.IpAddress={})),function(n){var i;(function(n){n.text=t("Help_SshKey_text")}
)(i=n.SshKey||(n.SshKey={}))}(et=n.Help||(n.Help={})),function(n){var i;(function(n){n.title=t("Network_Blade_title")}
)(i=n.Blade||(n.Blade={}))}(ot=n.Network||(n.Network={})),function(n){var i;(function(n){n.title=t("TimeZone_Blade_title")}
)(i=n.Blade||(n.Blade={}))}(st=n.TimeZone||(n.TimeZone={})),function(n){var i;(function(n){n.title=t(
"OSSettings_Blade_title")})(i=n.Blade||(n.Blade={}))}(ht=n.OSSettings||(n.OSSettings={})),function(n)
{var i;(function(n){n.title=t("OptionalConfig_Blade_title")})(i=n.Blade||(n.Blade={}))}(ct=n.OptionalConfig||
(n.OptionalConfig={})),function(n){var i;(function(n){n.title=t("EntryPoint_Blade_title")})(i=n.Blade||
(n.Blade={}))}(lt=n.EntryPoint||(n.EntryPoint={}))})(t=n.Create||(n.Create={}))})(t=n.Resources||(n.
Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets={}))}(ClassicComputeExtension||(ClassicComputeExtension=
{})),function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";function i(){
var i="ClassicComputeExtension.ExtensionAssets.Resources.DomainName",n=window,t;if(n.Resources&&n.Resources.
getResources&&(t=n.Resources.getResources(i)),!t)throw new Error("Unable to find the resources for '"+
i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o,s,h,c;(function(n){n.nameRequired=t("Validation_nameRequired");
n.nameRegex=t("Validation_nameRegex");n.nameLength=t("Validation_nameLength");n.notAvailable=t("Validation_notAvailable")}
)(r=n.Validation||(n.Validation={}));n.singular=t("singular");n.plural=t("plural");n.lowerSingular=t(
"lowerSingular");n.lowerPlural=t("lowerPlural"),function(n){var i,r;n.paasFilterReason=t("Picker_paasFilterReason");
n.noRows=t("Picker_noRows");n.header=t("Picker_header"),function(n){n.title=t("Picker_Create_title")}
(i=n.Create||(n.Create={})),function(n){n.title=t("Picker_Blade_title")}(r=n.Blade||(n.Blade={}))}(u=
n.Picker||(n.Picker={})),function(n){var i;(function(n){n.title=t("DomainName_ComingSoon_title");n.header=
t("DomainName_ComingSoon_header");n.description=t("DomainName_ComingSoon_description");n.callToActionText=
t("DomainName_ComingSoon_callToActionText")})(i=n.ComingSoon||(n.ComingSoon={}))}(f=n.DomainName||(n.
DomainName={})),function(n){var i,r;(function(n){n.title=t("Create_Domain_title")})(i=n.Domain||(n.Domain=
{})),function(n){n.title=t("Create_Blade_title")}(r=n.Blade||(n.Blade={}))}(e=n.Create||(n.Create={})
),function(n){n.vip=t("Properties_vip");n.url=t("Properties_url");n.subscriptionName=t("Properties_subscriptionName");
n.subscriptionId=t("Properties_subscriptionId");n.statusTitle=t("Properties_statusTitle");n.resourceID=
t("Properties_resourceID");n.location=t("Properties_location");n.launcherPartTitle=t("Properties_launcherPartTitle");
n.bladeTitle=t("Properties_bladeTitle")}(o=n.Properties||(n.Properties={})),function(n){n.unknown=t(
"Status_unknown");n.resolvingDns=t("Status_resolvingDns");n.deleting=t("Status_deleting");n.deleted=
t("Status_deleted");n.creating=t("Status_creating");n.created=t("Status_created");n.changing=t("Status_changing")}
(s=n.Status||(n.Status={})),function(n){n.overview=t("Lens_overview")}(h=n.Lens||(n.Lens={}));n.domainNames=
t("domainNames");n.domainName=t("domainName"),function(n){n.status=t("ColumnNames_status");n.name=t(
"ColumnNames_name");n.location=t("ColumnNames_location")}(c=n.ColumnNames||(n.ColumnNames={}))})(t=n.
DomainName||(n.DomainName={}))})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets=
{}))}(ClassicComputeExtension||(ClassicComputeExtension={})),function(n){var t;(function(n){var t;(function(
n){var t;(function(n){"use strict";function i(){var i="ClassicComputeExtension.ExtensionAssets.Resources.General",
n=window,t;if(n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error(
"Unable to find the resources for '"+i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o,s,h;
(function(n){n.users=t("Settings_users");n.roles=t("Settings_roles");var i;(function(n){var i,r,u,f,
e,o,s,h,c;(function(n){n.rbac=t("Settings_Keywords_Users_rbac");n.access=t("Settings_Keywords_Users_access")}
)(i=n.Users||(n.Users={})),function(n){n.rBAC=t("Settings_Keywords_Roles_RBAC");n.access=t("Settings_Keywords_Roles_access")}
(r=n.Roles||(n.Roles={})),function(n){n.loadBalancer=t("Settings_Keywords_LoadBalancedSets_loadBalancer");
n.lb=t("Settings_Keywords_LoadBalancedSets_lb")}(u=n.LoadBalancedSets||(n.LoadBalancedSets={})),function(
n){n.script=t("Settings_Keywords_Extensions_script");n.av=t("Settings_Keywords_Extensions_av");n.antiVirus=
t("Settings_Keywords_Extensions_antiVirus")}(f=n.Extensions||(n.Extensions={})),function(n){n.vhds=t(
"Settings_Keywords_Disks_vhds");n.ssd=t("Settings_Keywords_Disks_ssd");n.vhd=t("Settings_Keywords_Disks_vhd")}
(e=n.Disks||(n.Disks={})),function(n){n.sla=t("Settings_Keywords_AvailabilitySet_sla")}(o=n.AvailabilitySet||
(n.AvailabilitySet={})),function(n){n.ports=t("Settings_Keywords_Endpoints_ports");n.port=t("Settings_Keywords_Endpoints_port")}
(s=n.Endpoints||(n.Endpoints={})),function(n){n.ip=t("Settings_Keywords_IpAddresses_ip");n.subnet=t(
"Settings_Keywords_IpAddresses_subnet");n.instance=t("Settings_Keywords_IpAddresses_instance");n.publicKeyword=
t("Settings_Keywords_IpAddresses_publicKeyword");n.privateKeyword=t("Settings_Keywords_IpAddresses_privateKeyword")}
(h=n.IpAddresses||(n.IpAddresses={})),function(n){n.subscription=t("Settings_Keywords_Properties_subscription");
n.location=t("Settings_Keywords_Properties_location");n.resource=t("Settings_Keywords_Properties_resource");
n.deployment=t("Settings_Keywords_Properties_deployment");n.operatingSystem=t("Settings_Keywords_Properties_operatingSystem");
n.os=t("Settings_Keywords_Properties_os");n.ipAddress=t("Settings_Keywords_Properties_ipAddress");n.
hostName=t("Settings_Keywords_Properties_hostName");n.domainName=t("Settings_Keywords_Properties_domainName");
n.status=t("Settings_Keywords_Properties_status")}(c=n.Properties||(n.Properties={}))})(i=n.Keywords||
(n.Keywords={}));n.loadBalancedSets=t("Settings_loadBalancedSets");n.extensions=t("Settings_extensions");
n.disks=t("Settings_disks");n.settingsDescription=t("Settings_settingsDescription");n.settings=t("Settings_settings");
n.scale=t("Settings_scale");n.properties=t("Settings_properties");n.ipAddresses=t("Settings_ipAddresses");
n.endpointsDescription=t("Settings_endpointsDescription");n.endpoints=t("Settings_endpoints");n.availabilitySet=
t("Settings_availabilitySet")})(r=n.Settings||(n.Settings={})),function(n){n.sizeLabel=t("ResourceSummary_sizeLabel");
n.privateIpLabel=t("ResourceSummary_privateIpLabel");n.virtualIpLabel=t("ResourceSummary_virtualIpLabel");
n.dnsNameLabel=t("ResourceSummary_dnsNameLabel");n.subscriptionIdLabel=t("ResourceSummary_subscriptionIdLabel");
n.subscriptionNameLabel=t("ResourceSummary_subscriptionNameLabel");n.locationLabel=t("ResourceSummary_locationLabel");
n.statusLabel=t("ResourceSummary_statusLabel")}(u=n.ResourceSummary||(n.ResourceSummary={}));n.alertRulesDescription=
t("alertRulesDescription");n.alertRules=t("alertRules"),function(n){n.eventsDescription=t("Operations_eventsDescription");
n.events=t("Operations_events")}(f=n.Operations||(n.Operations={})),function(n){n.usersDescription=t(
"Access_usersDescription");n.users=t("Access_users");n.rolesDescription=t("Access_rolesDescription");
n.roles=t("Access_roles")}(e=n.Access||(n.Access={})),function(n){n.pricingTierDescription=t("Usage_pricingTierDescription");
n.pricingTierTitle=t("Usage_pricingTierTitle")}(o=n.Usage||(n.Usage={}));n.resourceMapDescription=t(
"resourceMapDescription");n.resourceMapTitle=t("resourceMapTitle");n.metricsDiskReadWriteDescription=
t("metricsDiskReadWriteDescription");n.metricsDiskReadWrite=t("metricsDiskReadWrite");n.metricsNetworkInOutDescription=
t("metricsNetworkInOutDescription");n.metricsNetworkInOut=t("metricsNetworkInOut"),function(n){var i,
r;(function(n){var i,r;(function(n){var i;(function(n){var i,r,u,f;(function(n){n.title=t("QuickStart_Parts_Main_Sections_Work_title");
var i;(function(n){var i,r,u;(function(n){n.text=t("QuickStart_Parts_Main_Sections_Work_Links_ControlTraffic_text")}
)(i=n.ControlTraffic||(n.ControlTraffic={})),function(n){n.text=t("QuickStart_Parts_Main_Sections_Work_Links_ConnectToVM_text")}
(r=n.ConnectToVM||(n.ConnectToVM={})),function(n){n.text=t("QuickStart_Parts_Main_Sections_Work_Links_AddStorage_text")}
(u=n.AddStorage||(n.AddStorage={}))})(i=n.Links||(n.Links={}));n.description=t("QuickStart_Parts_Main_Sections_Work_description")}
)(i=n.Work||(n.Work={})),function(n){n.title=t("QuickStart_Parts_Main_Sections_Tools_title");var i;(
function(n){var i,r;(function(n){n.text=t("QuickStart_Parts_Main_Sections_Tools_Links_InstallPS_text")}
)(i=n.InstallPS||(n.InstallPS={})),function(n){n.text=t("QuickStart_Parts_Main_Sections_Tools_Links_InstallCMD_text")}
(r=n.InstallCMD||(n.InstallCMD={}))})(i=n.Links||(n.Links={}));n.description=t("QuickStart_Parts_Main_Sections_Tools_description")}
(r=n.Tools||(n.Tools={})),function(n){n.title=t("QuickStart_Parts_Main_Sections_Learn_title");var i;
(function(n){var i,r,u,f;(function(n){n.text=t("QuickStart_Parts_Main_Sections_Learn_Links_Tutorials_text")}
)(i=n.Tutorials||(n.Tutorials={})),function(n){n.text=t("QuickStart_Parts_Main_Sections_Learn_Links_SupportForums_text")}
(r=n.SupportForums||(n.SupportForums={})),function(n){n.text=t("QuickStart_Parts_Main_Sections_Learn_Links_RestAPI_text")}
(u=n.RestAPI||(n.RestAPI={})),function(n){n.text=t("QuickStart_Parts_Main_Sections_Learn_Links_FAQ_text")}
(f=n.FAQ||(n.FAQ={}))})(i=n.Links||(n.Links={}));n.description=t("QuickStart_Parts_Main_Sections_Learn_description")}
(u=n.Learn||(n.Learn={})),function(n){n.title=t("QuickStart_Parts_Main_Sections_Enhance_title");var i;
(function(n){var i,r,u,f;(function(n){n.text=t("QuickStart_Parts_Main_Sections_Enhance_Links_VirtualNetworks_text")}
)(i=n.VirtualNetworks||(n.VirtualNetworks={})),function(n){n.text=t("QuickStart_Parts_Main_Sections_Enhance_Links_LoadBalance_text")}
(r=n.LoadBalance||(n.LoadBalance={})),function(n){n.text=t("QuickStart_Parts_Main_Sections_Enhance_Links_EnableHighAvailability_text")}
(u=n.EnableHighAvailability||(n.EnableHighAvailability={})),function(n){n.text=t("QuickStart_Parts_Main_Sections_Enhance_Links_Capture_text")}
(f=n.Capture||(n.Capture={}))})(i=n.Links||(n.Links={}));n.description=t("QuickStart_Parts_Main_Sections_Enhance_description")}
(f=n.Enhance||(n.Enhance={}))})(i=n.Sections||(n.Sections={}))})(i=n.Main||(n.Main={})),function(n){
n.description=t("QuickStart_Parts_Launcher_description");n.title=t("QuickStart_Parts_Launcher_title");
n.shortTitle=t("QuickStart_Parts_Launcher_shortTitle")}(r=n.Launcher||(n.Launcher={}))})(i=n.Parts||
(n.Parts={})),function(n){var i;(function(n){n.title=t("QuickStart_Blades_Main_title")})(i=n.Main||(n.
Main={}))}(r=n.Blades||(n.Blades={}))}(s=n.QuickStart||(n.QuickStart={}));n.metricsPercentageCPUdescription=
t("metricsPercentageCPUdescription");n.metricsPercentageCPU=t("metricsPercentageCPU"),function(n){n.
extensionsAdded=t("ResourceExtension_extensionsAdded");n.noExtensionsMessage=t("ResourceExtension_noExtensionsMessage")}
(h=n.ResourceExtension||(n.ResourceExtension={}));n.configuredStatus=t("configuredStatus");n.loadingStatus=
t("loadingStatus")})(t=n.General||(n.General={}))})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||
(n.ExtensionAssets={}))}(ClassicComputeExtension||(ClassicComputeExtension={})),function(n){var t;(function(
n){var t;(function(n){var t;(function(n){"use strict";function i(){var i="ClassicComputeExtension.ExtensionAssets.Resources.Hortonworks",
n=window,t;if(n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error(
"Unable to find the resources for '"+i+"'.");return function(n){return t[n]}}var t=i(),r,u;(function(
n){var i,r;(function(n){var i;(function(n){n.rangeValidationMessage=t("WorkerConfiguration_InstanceCount_Validation_rangeValidationMessage");
n.invalidInstanceCountMessage=t("WorkerConfiguration_InstanceCount_Validation_invalidInstanceCountMessage")}
)(i=n.Validation||(n.Validation={}))})(i=n.InstanceCount||(n.InstanceCount={})),function(n){var i,r;
(function(n){n.title=t("WorkerConfiguration_Field_PricingTier_title");n.helpBalloonMessage=t("WorkerConfiguration_Field_PricingTier_helpBalloonMessage")}
)(i=n.PricingTier||(n.PricingTier={})),function(n){n.title=t("WorkerConfiguration_Field_NumberOfInstances_title");
n.helpBalloonMessage=t("WorkerConfiguration_Field_NumberOfInstances_helpBalloonMessage")}(r=n.NumberOfInstances||
(n.NumberOfInstances={}))}(r=n.Field||(n.Field={}));n.bladeTitle=t("WorkerConfiguration_bladeTitle")}
)(r=n.WorkerConfiguration||(n.WorkerConfiguration={})),function(n){var i;(function(n){var i,r,u,f,e,
o,s,h,c,l,a;(function(n){n.title=t("Create_Field_Workload_title");n.standard=t("Create_Field_Workload_standard");
n.helpBalloonMessage=t("Create_Field_Workload_helpBalloonMessage");n.evaluation=t("Create_Field_Workload_evaluation")}
)(i=n.Workload||(n.Workload={})),function(n){n.title=t("Create_Field_WorkerConfiguration_title");n.helpBalloonMessage=
t("Create_Field_WorkerConfiguration_helpBalloonMessage")}(r=n.WorkerConfiguration||(n.WorkerConfiguration=
{})),function(n){n.title=t("Create_Field_UserName_title");n.helpBalloonMessage=t("Create_Field_UserName_helpBalloonMessage")}
(u=n.UserName||(n.UserName={})),function(n){n.title=t("Create_Field_Subscription_title")}(f=n.Subscription||
(n.Subscription={})),function(n){n.title=t("Create_Field_StorageAccountPricingTier_title");n.helpBalloonMessage=
t("Create_Field_StorageAccountPricingTier_helpBalloonMessage")}(e=n.StorageAccountPricingTier||(n.StorageAccountPricingTier=
{})),function(n){n.title=t("Create_Field_SSHKey_title");n.helpBalloonMessage=t("Create_Field_SSHKey_helpBalloonMessage");
n.defaultText=t("Create_Field_SSHKey_defaultText")}(o=n.SSHKey||(n.SSHKey={})),function(n){n.title=t(
"Create_Field_ResourceGroup_title");n.helpBalloonMessage=t("Create_Field_ResourceGroup_helpBalloonMessage")}
(s=n.ResourceGroup||(n.ResourceGroup={})),function(n){n.title=t("Create_Field_MasterPricingTier_title");
n.helpBalloonMessage=t("Create_Field_MasterPricingTier_helpBalloonMessage")}(h=n.MasterPricingTier||
(n.MasterPricingTier={})),function(n){n.title=t("Create_Field_Location_title")}(c=n.Location||(n.Location=
{})),function(n){n.title=t("Create_Field_ConfirmAmbariPassword_title");n.helpBalloonMessage=t("Create_Field_ConfirmAmbariPassword_helpBalloonMessage")}
(l=n.ConfirmAmbariPassword||(n.ConfirmAmbariPassword={})),function(n){n.title=t("Create_Field_AmbariPassword_title");
n.helpBalloonMessage=t("Create_Field_AmbariPassword_helpBalloonMessage")}(a=n.AmbariPassword||(n.AmbariPassword=
{}))})(i=n.Field||(n.Field={}));n.bladeTitle=t("Create_bladeTitle")}(u=n.Create||(n.Create={}))})(t=
n.Hortonworks||(n.Hortonworks={}))})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets=
{}))}(ClassicComputeExtension||(ClassicComputeExtension={})),function(n){var t;(function(n){var t;(function(
n){var t;(function(n){"use strict";function i(){var i="ClassicComputeExtension.ExtensionAssets.Resources.LoadBalancedSets",
n=window,t;if(n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error(
"Unable to find the resources for '"+i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o,s,h,
c,l,a,v,y,p,w,b,k,d;(function(n){n.vmHasIlbMessage=t("JoinLoadBalancedSet_VmHasIlbMessage");n.isNarrowVnetMessage=
t("JoinLoadBalancedSet_IsNarrowVnetMessage")})(r=n.JoinLoadBalancedSet||(n.JoinLoadBalancedSet={})),
function(n){var i,r,u;(function(n){var i,r,u,f;(function(n){n.text=t("JoinLoadBalancedSetBlade_Field_LbsOptionHelp_text")}
)(i=n.LbsOptionHelp||(n.LbsOptionHelp={})),function(n){n.text=t("JoinLoadBalancedSetBlade_Field_PickLoadBalancedSet_text")}
(r=n.PickLoadBalancedSet||(n.PickLoadBalancedSet={})),function(n){n.text=t("JoinLoadBalancedSetBlade_Field_PrivatePort_text")}
(u=n.PrivatePort||(n.PrivatePort={})),function(n){n.text=t("JoinLoadBalancedSetBlade_Field_EndpointName_text")}
(f=n.EndpointName||(n.EndpointName={}))})(i=n.Field||(n.Field={})),function(n){var i;(function(n){n.
displayText=t("JoinLoadBalancedSetBlade_Lbs_Selector_displayText")})(i=n.Selector||(n.Selector={}))}
(r=n.Lbs||(n.Lbs={})),function(n){var i,r,u,f;(function(n){var i;(function(n){n.text=t("JoinLoadBalancedSetBlade_Validation_NewOrSelectExist_Required_text")}
)(i=n.Required||(n.Required={}))})(i=n.NewOrSelectExist||(n.NewOrSelectExist={})),function(n){var i;
(function(n){var i;(function(n){n.textFormat=t("JoinLoadBalancedSetBlade_Validation_Field_PrivatePort_EnableFloatingIp_textFormat")}
)(i=n.EnableFloatingIp||(n.EnableFloatingIp={}))})(i=n.PrivatePort||(n.PrivatePort={}))}(r=n.Field||
(n.Field={})),function(n){var i;(function(n){n.text=t("JoinLoadBalancedSetBlade_Validation_PrivatePort_Required_text")}
)(i=n.Required||(n.Required={}))}(u=n.PrivatePort||(n.PrivatePort={})),function(n){var i;(function(n)
{n.text=t("JoinLoadBalancedSetBlade_Validation_EndpointName_Required_text")})(i=n.Required||(n.Required=
{}))}(f=n.EndpointName||(n.EndpointName={}))}(u=n.Validation||(n.Validation={}));n.title=t("JoinLoadBalancedSetBlade_title");
n.description=t("JoinLoadBalancedSetBlade_description")}(u=n.JoinLoadBalancedSetBlade||(n.JoinLoadBalancedSetBlade=
{})),function(n){var i,r,u,f,e;(function(n){n.message=t("PickLoadBalancedSetBlade_UseExisting_message")}
)(i=n.UseExisting||(n.UseExisting={})),function(n){n.textFormat=t("PickLoadBalancedSetBlade_MoreThanOneVM_textFormat")}
(r=n.MoreThanOneVM||(n.MoreThanOneVM={})),function(n){n.text=t("PickLoadBalancedSetBlade_DisableReason_text")}
(u=n.DisableReason||(n.DisableReason={})),function(n){n.text=t("PickLoadBalancedSetBlade_EmptyList_text")}
(f=n.EmptyList||(n.EmptyList={})),function(n){n.title=t("PickLoadBalancedSetBlade_CreateNew_title");
n.message=t("PickLoadBalancedSetBlade_CreateNew_message")}(e=n.CreateNew||(n.CreateNew={}));n.title=
t("PickLoadBalancedSetBlade_title");n.description=t("PickLoadBalancedSetBlade_description")}(f=n.PickLoadBalancedSetBlade||
(n.PickLoadBalancedSetBlade={})),function(n){n.labelText=t("Probe_labelText")}(e=n.Probe||(n.Probe={
})),function(n){n.labelText=t("LbsType_labelText")}(o=n.LbsType||(n.LbsType={})),function(n){n.labelText=
t("IpAddress_labelText")}(s=n.IpAddress||(n.IpAddress={})),function(n){n.labelText=t("Endpoint_labelText")}
(h=n.Endpoint||(n.Endpoint={})),function(n){n.labelText=t("DnsName_labelText")}(c=n.DnsName||(n.DnsName=
{}));n.description=t("Description");n.pollingAborted=t("pollingAborted"),function(n){n.statictext=t(
"LoadBalancedSetIpAddressOption_statictext");n.dynamic=t("LoadBalancedSetIpAddressOption_dynamic");n.
text=t("LoadBalancedSetIpAddressOption_text")}(l=n.LoadBalancedSetIpAddressOption||(n.LoadBalancedSetIpAddressOption=
{})),function(n){var i,r;(function(n){var i,r,u,f,e,o,s,h;(function(n){var i;(function(n){n.text=t("NewLoadBalancedSetBlade_Validation_IPAddress_Required_text")}
)(i=n.Required||(n.Required={}))})(i=n.IPAddress||(n.IPAddress={})),function(n){var i,r,u;(function(
n){n.text=t("NewLoadBalancedSetBlade_Validation_Name_ValidChars_text")})(i=n.ValidChars||(n.ValidChars=
{})),function(n){n.textFormat=t("NewLoadBalancedSetBlade_Validation_Name_Length_textFormat")}(r=n.Length||
(n.Length={})),function(n){n.text=t("NewLoadBalancedSetBlade_Validation_Name_Required_text")}(u=n.Required||
(n.Required={}))}(r=n.Name||(n.Name={})),function(n){var i;(function(n){n.text=t("NewLoadBalancedSetBlade_Validation_PublicPort_Required_text")}
)(i=n.Required||(n.Required={}))}(u=n.PublicPort||(n.PublicPort={})),function(n){var i;(function(n){
n.text=t("NewLoadBalancedSetBlade_Validation_ProbePort_Required_text")})(i=n.Required||(n.Required={
}))}(f=n.ProbePort||(n.ProbePort={})),function(n){var i;(function(n){n.text=t("NewLoadBalancedSetBlade_Validation_ProbeNumberOfRetries_Required_text")}
)(i=n.Required||(n.Required={}))}(e=n.ProbeNumberOfRetries||(n.ProbeNumberOfRetries={})),function(n)
{var i;(function(n){n.text=t("NewLoadBalancedSetBlade_Validation_ProbeInterval_Required_text")})(i=n.
Required||(n.Required={}))}(o=n.ProbeInterval||(n.ProbeInterval={})),function(n){var i;(function(n){
n.textFormat=t("NewLoadBalancedSetBlade_Validation_PortNumber_Range_textFormat")})(i=n.Range||(n.Range=
{}))}(s=n.PortNumber||(n.PortNumber={})),function(n){n.textFormat=t("NewLoadBalancedSetBlade_Validation_GreaterThan_textFormat")}
(h=n.GreaterThan||(n.GreaterThan={}))})(i=n.Validation||(n.Validation={})),function(n){var i,r,u,f,e,
o,s,h,c,l,a;(function(n){n.text=t("NewLoadBalancedSetBlade_Field_IPAddress_text")})(i=n.IPAddress||(n.
IPAddress={})),function(n){n.helpText=t("NewLoadBalancedSetBlade_Field_ProbeNumberOfRetries_helpText");
n.text=t("NewLoadBalancedSetBlade_Field_ProbeNumberOfRetries_text")}(r=n.ProbeNumberOfRetries||(n.ProbeNumberOfRetries=
{})),function(n){var i,r;(function(n){n.textFormat=t("NewLoadBalancedSetBlade_Field_AclRules_Rules_textFormat")}
)(i=n.Rules||(n.Rules={}));n.text=t("NewLoadBalancedSetBlade_Field_AclRules_text"),function(n){n.text=
t("NewLoadBalancedSetBlade_Field_AclRules_NoRules_text")}(r=n.NoRules||(n.NoRules={}))}(u=n.AclRules||
(n.AclRules={})),function(n){n.text=t("NewLoadBalancedSetBlade_Field_ProbePath_text")}(f=n.ProbePath||
(n.ProbePath={})),function(n){n.text=t("NewLoadBalancedSetBlade_Field_PublicPort_text")}(e=n.PublicPort||
(n.PublicPort={})),function(n){n.text=t("NewLoadBalancedSetBlade_Field_Protocol_text")}(o=n.Protocol||
(n.Protocol={})),function(n){n.text=t("NewLoadBalancedSetBlade_Field_ProbeProtocol_text")}(s=n.ProbeProtocol||
(n.ProbeProtocol={})),function(n){n.text=t("NewLoadBalancedSetBlade_Field_ProbePort_text")}(h=n.ProbePort||
(n.ProbePort={})),function(n){n.text=t("NewLoadBalancedSetBlade_Field_ProbeInterval_text")}(c=n.ProbeInterval||
(n.ProbeInterval={})),function(n){n.text=t("NewLoadBalancedSetBlade_Field_Name_text")}(l=n.Name||(n.
Name={})),function(n){n.text=t("NewLoadBalancedSetBlade_Field_FloatingIP_text");var i;(function(n){n.
message=t("NewLoadBalancedSetBlade_Field_FloatingIP_Help_message")})(i=n.Help||(n.Help={}))}(a=n.FloatingIP||
(n.FloatingIP={}))}(r=n.Field||(n.Field={}));n.title=t("NewLoadBalancedSetBlade_title");n.description=
t("NewLoadBalancedSetBlade_description")}(a=n.NewLoadBalancedSetBlade||(n.NewLoadBalancedSetBlade={})
),function(n){n.text=t("LoadBalancedSetType_text");n.publicText=t("LoadBalancedSetType_PublicText");
var i;(function(n){n.text=t("LoadBalancedSetType_Internal_text")})(i=n.Internal||(n.Internal={}))}(v=
n.LoadBalancedSetType||(n.LoadBalancedSetType={})),function(n){var i,r,u;(function(n){var i,r;(function(
n){n.text=t("LoadBalancedSetDetailsBlade_Validation_MissingProbe_text")})(i=n.MissingProbe||(n.MissingProbe=
{})),function(n){n.text=t("LoadBalancedSetDetailsBlade_Validation_Unique_text")}(r=n.Unique||(n.Unique=
{}))})(i=n.Validation||(n.Validation={})),function(n){var i,r;(function(n){var i;(function(n){var i,
r,u,f,e;(function(n){var i,r;(function(n){n.text=t("LoadBalancedSetDetailsBlade_Section_ACL_Column_Action_Permit_text")}
)(i=n.Permit||(n.Permit={})),function(n){n.text=t("LoadBalancedSetDetailsBlade_Section_ACL_Column_Action_Deny_text")}
(r=n.Deny||(n.Deny={}));n.text=t("LoadBalancedSetDetailsBlade_Section_ACL_Column_Action_text")})(i=n.
Action||(n.Action={})),function(n){n.text=t("LoadBalancedSetDetailsBlade_Section_ACL_Column_RemoteSubnet_text")}
(r=n.RemoteSubnet||(n.RemoteSubnet={})),function(n){n.text=t("LoadBalancedSetDetailsBlade_Section_ACL_Column_Order_text")}
(u=n.Order||(n.Order={})),function(n){n.text=t("LoadBalancedSetDetailsBlade_Section_ACL_Column_Name_text")}
(f=n.Name||(n.Name={})),function(n){n.text=t("LoadBalancedSetDetailsBlade_Section_ACL_Column_Empty_text")}
(e=n.Empty||(n.Empty={}))})(i=n.Column||(n.Column={}));n.title=t("LoadBalancedSetDetailsBlade_Section_ACL_title")}
)(i=n.ACL||(n.ACL={})),function(n){var i,r;(function(n){var i,r,u,f;(function(n){n.text=t("LoadBalancedSetDetailsBlade_Section_VirtualMachines_Column_EndpointName_text")}
)(i=n.EndpointName||(n.EndpointName={})),function(n){n.text=t("LoadBalancedSetDetailsBlade_Section_VirtualMachines_Column_Status_text")}
(r=n.Status||(n.Status={})),function(n){n.text=t("LoadBalancedSetDetailsBlade_Section_VirtualMachines_Column_PrivatePort_text")}
(u=n.PrivatePort||(n.PrivatePort={})),function(n){n.text=t("LoadBalancedSetDetailsBlade_Section_VirtualMachines_Column_Name_text")}
(f=n.Name||(n.Name={}))})(i=n.Column||(n.Column={})),function(n){n.text=t("LoadBalancedSetDetailsBlade_Section_VirtualMachines_Empty_text")}
(r=n.Empty||(n.Empty={}));n.title=t("LoadBalancedSetDetailsBlade_Section_VirtualMachines_title")}(r=
n.VirtualMachines||(n.VirtualMachines={}))}(r=n.Section||(n.Section={})),function(n){var i,r,u;(function(
n){var i;(function(n){n.title=t("LoadBalancedSetDetailsBlade_Command_Leave_Confirm_title");n.message=
t("LoadBalancedSetDetailsBlade_Command_Leave_Confirm_message");var i;(function(n){n.message=t("LoadBalancedSetDetailsBlade_Command_Leave_Confirm_LastVirtualMachine_message")}
)(i=n.LastVirtualMachine||(n.LastVirtualMachine={}))})(i=n.Confirm||(n.Confirm={}));n.text=t("LoadBalancedSetDetailsBlade_Command_Leave_text")}
)(i=n.Leave||(n.Leave={})),function(n){var i;(function(n){n.title=t("LoadBalancedSetDetailsBlade_Command_Save_Confirm_title");
n.message=t("LoadBalancedSetDetailsBlade_Command_Save_Confirm_message")})(i=n.Confirm||(n.Confirm={})
);n.text=t("LoadBalancedSetDetailsBlade_Command_Save_text")}(r=n.Save||(n.Save={})),function(n){n.text=
t("LoadBalancedSetDetailsBlade_Command_Discard_text")}(u=n.Discard||(n.Discard={}))}(u=n.Command||(n.
Command={}));n.title=t("LoadBalancedSetDetailsBlade_title")}(y=n.LoadBalancedSetDetailsBlade||(n.LoadBalancedSetDetailsBlade=
{}));n.enabledText=t("enabledText");n.disabledText=t("disabledText"),function(n){var i,r,u;(function(
n){var i,r,u;(function(n){n.title=t("Notification_DeleteLoadBalancedSet_Success_title");n.message=t(
"Notification_DeleteLoadBalancedSet_Success_message")})(i=n.Success||(n.Success={})),function(n){n.title=
t("Notification_DeleteLoadBalancedSet_InProgress_title");n.message=t("Notification_DeleteLoadBalancedSet_InProgress_message")}
(r=n.InProgress||(n.InProgress={})),function(n){n.title=t("Notification_DeleteLoadBalancedSet_Failure_title");
n.message=t("Notification_DeleteLoadBalancedSet_Failure_message")}(u=n.Failure||(n.Failure={}))})(i=
n.DeleteLoadBalancedSet||(n.DeleteLoadBalancedSet={})),function(n){var i,r,u;(function(n){n.title=t(
"Notification_UpdateLoadBalancedSet_Success_title");n.message=t("Notification_UpdateLoadBalancedSet_Success_message")}
)(i=n.Success||(n.Success={})),function(n){n.title=t("Notification_UpdateLoadBalancedSet_InProgress_title");
n.message=t("Notification_UpdateLoadBalancedSet_InProgress_message")}(r=n.InProgress||(n.InProgress=
{})),function(n){n.title=t("Notification_UpdateLoadBalancedSet_Failure_title");n.message=t("Notification_UpdateLoadBalancedSet_Failure_message")}
(u=n.Failure||(n.Failure={}))}(r=n.UpdateLoadBalancedSet||(n.UpdateLoadBalancedSet={})),function(n){
var i,r,u;(function(n){n.title=t("Notification_JoinVirtualMachineToLoadBalancedSet_Success_title");n.
message=t("Notification_JoinVirtualMachineToLoadBalancedSet_Success_message")})(i=n.Success||(n.Success=
{})),function(n){n.title=t("Notification_JoinVirtualMachineToLoadBalancedSet_InProgress_title");n.message=
t("Notification_JoinVirtualMachineToLoadBalancedSet_InProgress_message")}(r=n.InProgress||(n.InProgress=
{})),function(n){n.title=t("Notification_JoinVirtualMachineToLoadBalancedSet_Failure_title");n.message=
t("Notification_JoinVirtualMachineToLoadBalancedSet_Failure_message")}(u=n.Failure||(n.Failure={}))}
(u=n.JoinVirtualMachineToLoadBalancedSet||(n.JoinVirtualMachineToLoadBalancedSet={}))}(p=n.Notification||
(n.Notification={})),function(n){n.text=t("Loading_text")}(w=n.Loading||(n.Loading={})),function(n){
var i,r,u,f;n.title=t("LoadBalancedSetBlade_title"),function(n){n.text=t("LoadBalancedSetBlade_Empty_text")}
(i=n.Empty||(n.Empty={})),function(n){var i;(function(n){n.text=t("LoadBalancedSetBlade_Commands_Join_text")}
)(i=n.Join||(n.Join={}))}(r=n.Commands||(n.Commands={})),function(n){var i,r,u,f,e;(function(n){n.text=
t("LoadBalancedSetBlade_Column_VirtualMachines_text")})(i=n.VirtualMachines||(n.VirtualMachines={})),
function(n){n.text=t("LoadBalancedSetBlade_Column_PublicPort_text")}(r=n.PublicPort||(n.PublicPort={
})),function(n){n.text=t("LoadBalancedSetBlade_Column_Protocol_text")}(u=n.Protocol||(n.Protocol={})
),function(n){n.text=t("LoadBalancedSetBlade_Column_Name_text")}(f=n.Name||(n.Name={})),function(n){
n.text=t("LoadBalancedSetBlade_Column_AclRules_text")}(e=n.AclRules||(n.AclRules={}))}(u=n.Column||(n.
Column={})),function(n){n.text=t("LoadBalancedSetBlade_BasicVM_text")}(f=n.BasicVM||(n.BasicVM={}))}
(b=n.LoadBalancedSetBlade||(n.LoadBalancedSetBlade={})),function(n){n.description=t("LauncherPart_description");
n.title=t("LauncherPart_title")}(k=n.LauncherPart||(n.LauncherPart={})),function(n){n.text=t("GridLoading_text")}
(d=n.GridLoading||(n.GridLoading={}))})(t=n.LoadBalancedSets||(n.LoadBalancedSets={}))})(t=n.Resources||
(n.Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets={}))}(ClassicComputeExtension||(ClassicComputeExtension=
{})),function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";function i(){
var i="ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachineDisk",n=window,t;if(n.Resources&&
n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error("Unable to find the resources for '"+
i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o,s,h;(function(n){var i,r,u,f,e,o,s,h;(function(
n){n.nameRegex=t("AttachDisk_Validation_nameRegex");n.diskNameLength=t("AttachDisk_Validation_diskNameLength");
n.vhdFileNameInvalid=t("AttachDisk_Validation_vhdFileNameInvalid");n.vhdFileAlreadyAttachedToVM=t("AttachDisk_Validation_vhdFileAlreadyAttachedToVM");
n.diskSizeRangeValidation=t("AttachDisk_Validation_diskSizeRangeValidation");n.diskSizeNumericValidation=
t("AttachDisk_Validation_diskSizeNumericValidation");n.required=t("AttachDisk_Validation_required")}
)(i=n.Validation||(n.Validation={}));n.maximumIops512=t("attachDisk_maximumIops512");n.maximumIops128=
t("attachDisk_maximumIops128");n.maximumIops1024=t("attachDisk_maximumIops1024");n.maximumIops=t("attachDisk_maximumIops"),
function(n){n.filterStorageAccountBySubscriptionText=t("AttachDisk_StorageAccount_filterStorageAccountBySubscriptionText");
n.filterStorageAccountByLocationText=t("AttachDisk_StorageAccount_filterStorageAccountByLocationText");
n.filterStorageAccountByAccountTypeText=t("AttachDisk_StorageAccount_filterStorageAccountByAccountTypeText")}
(r=n.StorageAccount||(n.StorageAccount={})),function(n){n.filterText=t("AttachDisk_VhdFile_filterText")}
(u=n.VhdFile||(n.VhdFile={})),function(n){n.bladeTitle=t("attachDisk_diskSelection_bladeTitle")}(f=n.
DiskSelection||(n.DiskSelection={})),function(n){n.bladeTitle=t("attachDisk_containerSelection_bladeTitle")}
(e=n.ContainerSelection||(n.ContainerSelection={}));n.vhdContainer=t("AttachDisk_vhdContainer"),function(
n){n.vhdContainer=t("AttachDisk_DefaultText_vhdContainer");n.vhdFile=t("AttachDisk_DefaultText_vhdFile");
n.diskSize=t("AttachDisk_DefaultText_diskSize");n.diskName=t("AttachDisk_DefaultText_diskName");n.diskDescription=
t("AttachDisk_DefaultText_diskDescription")}(o=n.DefaultText||(n.DefaultText={})),function(n){n.attachNewDisk=
t("AttachDisk_BladeTitle_attachNewDisk");n.attachExistingDisk=t("AttachDisk_BladeTitle_attachExistingDisk")}
(s=n.BladeTitle||(n.BladeTitle={}));n.vhdFile=t("AttachDisk_vhdFile"),function(n){n.readWrite=t("AttachDisk_HostCachingValues_readWrite");
n.readOnly=t("AttachDisk_HostCachingValues_readOnly");n.none=t("AttachDisk_HostCachingValues_none")}
(h=n.HostCachingValues||(n.HostCachingValues={}));n.hostCaching=t("AttachDisk_hostCaching");n.diskSize=
t("AttachDisk_diskSize");n.diskName=t("AttachDisk_diskName");n.diskDescription=t("AttachDisk_diskDescription")}
)(r=n.AttachDisk||(n.AttachDisk={}));n.maximumNumberOfDisksAttached=t("maximumNumberOfDisksAttached");
n.updatingVirtualMachine=t("updatingVirtualMachine"),function(n){var i;(function(n){n.hostCachingNotSupported=
t("Properties_Validation_hostCachingNotSupported")})(i=n.Validation||(n.Validation={}));n.saveLabel=
t("Properties_saveLabel");n.saveConfirmation=t("Properties_saveConfirmation");n.discardLabel=t("Properties_discardLabel");
n.caching=t("Properties_caching");n.lun=t("Properties_lun");n.diskId=t("Properties_diskId");n.vhdLocation=
t("Properties_vhdLocation");n.type=t("Properties_type");n.diskSize=t("Properties_diskSize")}(u=n.Properties||
(n.Properties={})),function(n){n.updateDiskSuccessTitle=t("Notification_updateDiskSuccessTitle");n.updateDiskSuccessMessage=
t("Notification_updateDiskSuccessMessage");n.updateDiskInProgressTitle=t("Notification_updateDiskInProgressTitle");
n.updateDiskInProgressMessage=t("Notification_updateDiskInProgressMessage");n.updateDiskFailureTitle=
t("Notification_updateDiskFailureTitle");n.updateDiskFailureMessage=t("Notification_updateDiskFailureMessage");
n.detachDiskSuccessTitle=t("Notification_detachDiskSuccessTitle");n.detachDiskSuccessMessage=t("Notification_detachDiskSuccessMessage");
n.detachDiskInProgressTitle=t("Notification_detachDiskInProgressTitle");n.detachDiskInProgressMessage=
t("Notification_detachDiskInProgressMessage");n.detachDiskFailureTitle=t("Notification_detachDiskFailureTitle");
n.detachDiskFailureMessage=t("Notification_detachDiskFailureMessage");n.attachDiskFailureTitle=t("Notification_attachDiskFailureTitle");
n.attachDiskFailureMessage=t("Notification_attachDiskFailureMessage");n.attachDiskSuccessTitle=t("Notification_attachDiskSuccessTitle");
n.attachDiskSuccessMessage=t("Notification_attachDiskSuccessMessage");n.attachDiskInProgressTitle=t(
"Notification_attachDiskInProgressTitle");n.attachDiskInProgressMessage=t("Notification_attachDiskInProgressMessage")}
(f=n.Notification||(n.Notification={})),function(n){n.detachLabel=t("DetachDisk_detachLabel");n.detachConfirmation=
t("DetachDisk_detachConfirmation")}(e=n.DetachDisk||(n.DetachDisk={})),function(n){n.readWrite=t("HostCaching_readWrite");
n.readOnly=t("HostCaching_readOnly");n.none=t("HostCaching_none")}(o=n.HostCaching||(n.HostCaching={
})),function(n){n.osDiskType=t("columnName_osDiskType");n.dataDisksType=t("columnName_dataDisksType");
n.vhdUri=t("ColumnName_vhdUri");n.name=t("ColumnName_name");n.diskSize=t("ColumnName_diskSize")}(s=n.
ColumnName||(n.ColumnName={}));n.diskSizeFormatter=t("diskSizeFormatter"),function(n){n.saveCommand=
t("CommandTitle_saveCommand");n.discardCommand=t("CommandTitle_discardCommand");n.detachCommand=t("CommandTitle_detachCommand");
n.attachNewDisk=t("CommandTitle_attachNewDisk");n.attachExistingDisk=t("CommandTitle_attachExistingDisk")}
(h=n.CommandTitle||(n.CommandTitle={}));n.totalDisksSize=t("totalDisksSize");n.osDisk=t("osDisk");n.
numberOfDisks=t("numberOfDisks");n.noDisksFound=t("noDisksFound");n.disksDescription=t("disksDescription");
n.disks=t("disks");n.disk=t("disk");n.dataDisk=t("dataDisk")})(t=n.VirtualMachineDisk||(n.VirtualMachineDisk=
{}))})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets={}))}(ClassicComputeExtension||
(ClassicComputeExtension={})),function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";
function i(){var i="ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachineEndpoint",n=window,
t;if(n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error("Unable to find the resources for '"+
i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o;(function(n){n.enabled=t("endpointFloatingIP_enabled");
n.disabled=t("endpointFloatingIP_disabled")})(r=n.EndpointFloatingIP||(n.EndpointFloatingIP={}));n.endpointTitle=
t("endpointTitle"),function(n){n.endpointsDetail=t("Endpoints_EndpointsDetail");n.aclSelectorTitle=t(
"Endpoints_AclSelectorTitle");var i;(function(n){var i,r;(function(n){n.text=t("Endpoints_Acl_Rules_text")}
)(i=n.Rules||(n.Rules={})),function(n){n.text=t("Endpoints_Acl_NoRules_text")}(r=n.NoRules||(n.NoRules=
{}))})(i=n.Acl||(n.Acl={}));n.aclLabel=t("Endpoints_AclLabel")}(u=n.Endpoints||(n.Endpoints={})),function(
n){var i;(function(n){var i,r;(function(n){n.text=t("Validation_ACL_Require_text")})(i=n.Require||(n.
Require={})),function(n){var i;(function(n){n.text=t("Validation_ACL_Order_MustBePositive_text")})(i=
n.MustBePositive||(n.MustBePositive={}))}(r=n.Order||(n.Order={}))})(i=n.ACL||(n.ACL={}));n.maxEndpointsReached=
t("Validation_MaxEndpointsReached");n.reservedPorts=t("Validation_ReservedPorts");n.publicPortAndProtocolConflict=
t("Validation_publicPortAndProtocolConflict");n.privatePortAndProtocolConflict=t("Validation_privatePortAndProtocolConflict");
n.endpointAlreadyExists=t("Validation_endpointAlreadyExists");n.endpointNameValidation=t("Validation_endpointNameValidation");
n.endpointNameLengthValidation=t("Validation_endpointNameLengthValidation");n.requiredField=t("Validation_requiredField");
n.maxPortValue=t("Validation_maxPortValue")}(f=n.Validation||(n.Validation={})),function(n){var i,r;
(function(n){n.http=t("endpoint_protocol_http");n.udp=t("endpoint_protocol_udp");n.tcp=t("endpoint_protocol_tcp")}
)(i=n.Protocol||(n.Protocol={}));n.standalone=t("endpoint_Standalone");n.loadBalanced=t("endpoint_LoadBalanced");
n.aclRules=t("endpoint_AclRules");n.discardLabel=t("endpoint_DiscardLabel");n.deleteLabel=t("endpoint_DeleteLabel");
n.deleteConfirmation=t("endpoint_DeleteConfirmation");n.addBaldeTitle=t("endpoint_AddBaldeTitle");n.
floatingIp=t("endpoint_floatingIp"),function(n){n.helpText=t("endpoint_directServerReturn_helpText")}
(r=n.DirectServerReturn||(n.DirectServerReturn={}));n.publicPort=t("endpoint_publicPort");n.protocol=
t("endpoint_protocol");n.privatePort=t("endpoint_privatePort");n.noEndpointsFound=t("endpoint_noEndpointsFound");
n.name=t("endpoint_name");n.loading=t("endpoint_loading")}(e=n.Endpoint||(n.Endpoint={}));n.loadBalancedEndpointStatus=
t("LoadBalancedEndpointStatus");n.notificationUpdateVMEndpointSuccessTitle=t("notificationUpdateVMEndpointSuccessTitle");
n.notificationUpdateVMEndpointSuccessMessage=t("notificationUpdateVMEndpointSuccessMessage");n.notificationUpdateVMEndpointInProgressTitle=
t("notificationUpdateVMEndpointInProgressTitle");n.notificationUpdateVMEndpointInProgressMessage=t("notificationUpdateVMEndpointInProgressMessage");
n.notificationUpdateVMEndpointInFailureTitle=t("notificationUpdateVMEndpointInFailureTitle");n.notificationUpdateVMEndpointInFailureMessage=
t("notificationUpdateVMEndpointInFailureMessage");n.notificationRemoveVMEndpointSuccessTitle=t("notificationRemoveVMEndpointSuccessTitle");
n.notificationRemoveVMEndpointSuccessMessage=t("notificationRemoveVMEndpointSuccessMessage");n.notificationRemoveVMEndpointInProgressTitle=
t("notificationRemoveVMEndpointInProgressTitle");n.notificationRemoveVMEndpointInProgressMessage=t("notificationRemoveVMEndpointInProgressMessage");
n.notificationRemoveVMEndpointInFailureTitle=t("notificationRemoveVMEndpointInFailureTitle");n.notificationRemoveVMEndpointInFailureMessage=
t("notificationRemoveVMEndpointInFailureMessage");n.notificationAddVMEndpointSuccessTitle=t("NotificationAddVMEndpointSuccessTitle");
n.notificationAddVMEndpointSuccessMessage=t("NotificationAddVMEndpointSuccessMessage");n.notificationAddVMEndpointInProgressTitle=
t("NotificationAddVMEndpointInProgressTitle");n.notificationAddVMEndpointInProgressMessage=t("NotificationAddVMEndpointInProgressMessage");
n.notificationAddVMEndpointInFailureTitle=t("NotificationAddVMEndpointInFailureTitle");n.notificationAddVMEndpointInFailureMessage=
t("NotificationAddVMEndpointInFailureMessage");n.directServerReturnNotification=t("DirectServerReturnNotification"),
function(n){n.add=t("endpointCommandTitle_add")}(o=n.EndpointCommandTitle||(n.EndpointCommandTitle={
}));n.noItemsFound=t("noItemsFound");n.endpointsTitle=t("endpointsTitle")})(t=n.VirtualMachineEndpoint||
(n.VirtualMachineEndpoint={}))})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets=
{}))}(ClassicComputeExtension||(ClassicComputeExtension={})),function(n){var t;(function(n){var t;(function(
n){var t;(function(n){"use strict";function i(){var i="ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachineIPAddress",
n=window,t;if(n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error(
"Unable to find the resources for '"+i+"'.");return function(n){return t[n]}}var t=i(),r;n.idleTimeout=
t("idleTimeout");n.off=t("off");n.on=t("on");n.loadingStatus=t("loadingStatus");n.publicIPAddressInfo=
t("publicIPAddressInfo");n.couldNotConfigureIPAddress=t("couldNotConfigureIPAddress");n.updateIPAddressSuccessTitle=
t("updateIPAddressSuccessTitle");n.updateIPAddressSuccessMessage=t("updateIPAddressSuccessMessage");
n.updateIPAddressInProgressTitle=t("updateIPAddressInProgressTitle");n.updateIPAddressInProgressMessage=
t("updateIPAddressInProgressMessage");n.updateIPAddressFailureTitle=t("updateIPAddressFailureTitle");
n.updateIPAddressFailureMessage=t("updateIPAddressFailureMessage");n.saveConfirmation=t("saveConfirmation");
n.saveLabel=t("saveLabel");n.discardLabel=t("discardLabel");n.discardCommand=t("discardCommand");n.saveCommand=
t("saveCommand");n.requiredField=t("requiredField");n.enterIPAddress=t("enterIPAddress");n.reserved=
t("reserved");n.staticIPAddress=t("staticIPAddress");n.dynamic=t("dynamic");n.ipAddress=t("ipAddress");
n.subnet=t("subnet");n.ipAddressAssignment=t("ipAddressAssignment");n.instanceIPAddress=t("instanceIPAddress");
n.privateIPAddress=t("privateIPAddress");n.virtualIPAddress=t("virtualIPAddress");n.updatingIPAddresses=
t("updatingIPAddresses");n.ipAddressesBladeTitle=t("ipAddressesBladeTitle");n.instanceIP=t("instanceIP");
n.staticPrivateIP=t("staticPrivateIP");n.dynamicPrivateIP=t("dynamicPrivateIP");n.reservedVirtualIP=
t("reservedVirtualIP");n.dynamicVirtualIP=t("dynamicVirtualIP"),function(n){var i;(function(n){n.callToActionUri=
t("IpAddresses_ComingSoon_callToActionUri");n.title=t("IpAddresses_ComingSoon_title");n.header=t("IpAddresses_ComingSoon_header");
n.description=t("IpAddresses_ComingSoon_description");n.callToActionText=t("IpAddresses_ComingSoon_callToActionText")}
)(i=n.ComingSoon||(n.ComingSoon={}));n.launcherPartDescription=t("IpAddresses_launcherPartDescription");
n.launcherPartTitle=t("IpAddresses_launcherPartTitle")}(r=n.IpAddresses||(n.IpAddresses={}))})(t=n.VirtualMachineIPAddress||
(n.VirtualMachineIPAddress={}))})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets=
{}))}(ClassicComputeExtension||(ClassicComputeExtension={})),function(n){var t;(function(n){var t;(function(
n){var t;(function(n){"use strict";function i(){var i="ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachineResourceExtension",
n=window,t;if(n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error(
"Unable to find the resources for '"+i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o,s,h;
(function(n){n.removeCommand=t("CommandTitle_removeCommand");n.enableCommand=t("CommandTitle_enableCommand");
n.updateCommand=t("CommandTitle_updateCommand");n.disableCommand=t("CommandTitle_disableCommand");n.
deleteCommand=t("CommandTitle_deleteCommand");n.addResourceExtension=t("CommandTitle_addResourceExtension")}
)(r=n.CommandTitle||(n.CommandTitle={}));n.newRelicNotAllowedOnNonWindows=t("newRelicNotAllowedOnNonWindows");
n.resourceExtensionStatusDetails=t("resourceExtensionStatusDetails"),function(n){n.viewDetailExtensionStatus=
t("Properties_viewDetailExtensionStatus");n.version=t("Properties_version");n.status=t("Properties_status");
n.publisher=t("Properties_publisher");n.message=t("Properties_message");n.learnMore=t("Properties_learnMore")}
(u=n.Properties||(n.Properties={})),function(n){n.upperCaseValidation=t("AddExtension_upperCaseValidation");
n.rangeValidation=t("AddExtension_rangeValidation");n.punctuationValidation=t("AddExtension_punctuationValidation");
n.notHasCharactersValidation=t("AddExtension_notHasCharactersValidation");n.minLengthValidation=t("AddExtension_minLengthValidation");
n.maxLengthValidation=t("AddExtension_maxLengthValidation");n.lowerCaseValidation=t("AddExtension_lowerCaseValidation");
n.letterValidation=t("AddExtension_letterValidation");n.hasCharactersValidation=t("AddExtension_hasCharactersValidation");
n.digitsValidation=t("AddExtension_digitsValidation");n.noParametersRequiredInformation=t("AddExtension_noParametersRequiredInformation");
n.duplicateExtensionExistsWarning=t("AddExtension_duplicateExtensionExistsWarning");n.requiredValidation=
t("AddExtension_requiredValidation");var i;(function(n){n.addExtension=t("AddExtension_BladeTitle_addExtension")}
)(i=n.BladeTitle||(n.BladeTitle={}))}(f=n.AddExtension||(n.AddExtension={})),function(n){n.windowsWarningMessage=
t("GuestAgentRequired_windowsWarningMessage");n.linuxWarningMessage=t("GuestAgentRequired_linuxWarningMessage")}
(e=n.GuestAgentRequired||(n.GuestAgentRequired={}));n.updatingVirtualMachine=t("updatingVirtualMachine"),
function(n){n.addExtensionSuccessTitle=t("Notification_addExtensionSuccessTitle");n.addExtensionSuccessMessage=
t("Notification_addExtensionSuccessMessage");n.addExtensionInProgressTitle=t("Notification_addExtensionInProgressTitle");
n.addExtensionInProgressMessage=t("Notification_addExtensionInProgressMessage");n.addExtensionFailureTitle=
t("Notification_addExtensionFailureTitle");n.addExtensionFailureMessage=t("Notification_addExtensionFailureMessage");
n.enableExtensionSuccessTitle=t("Notification_enableExtensionSuccessTitle");n.enableExtensionSuccessMessage=
t("Notification_enableExtensionSuccessMessage");n.enableExtensionInProgressTitle=t("Notification_enableExtensionInProgressTitle");
n.enableExtensionInProgressMessage=t("Notification_enableExtensionInProgressMessage");n.enableExtensionFailureTitle=
t("Notification_enableExtensionFailureTitle");n.enableExtensionFailureMessage=t("Notification_enableExtensionFailureMessage");
n.disableExtensionSuccessTitle=t("Notification_disableExtensionSuccessTitle");n.disableExtensionSuccessMessage=
t("Notification_disableExtensionSuccessMessage");n.disableExtensionInProgressTitle=t("Notification_disableExtensionInProgressTitle");
n.disableExtensionInProgressMessage=t("Notification_disableExtensionInProgressMessage");n.disableExtensionFailureTitle=
t("Notification_disableExtensionFailureTitle");n.disableExtensionFailureMessage=t("Notification_disableExtensionFailureMessage");
n.deleteExtensionSuccessTitle=t("Notification_deleteExtensionSuccessTitle");n.deleteExtensionSuccessMessage=
t("Notification_deleteExtensionSuccessMessage");n.deleteExtensionInProgressTitle=t("Notification_deleteExtensionInProgressTitle");
n.deleteExtensionInProgressMessage=t("Notification_deleteExtensionInProgressMessage");n.deleteExtensionFailureTitle=
t("Notification_deleteExtensionFailureTitle");n.deleteExtensionFailureMessage=t("Notification_deleteExtensionFailureMessage")}
(o=n.Notification||(n.Notification={})),function(n){n.enableLabel=t("Commands_enableLabel");n.enableConfirmation=
t("Commands_enableConfirmation");n.disableLabel=t("Commands_disableLabel");n.disableConfirmation=t("Commands_disableConfirmation");
n.deleteLabel=t("Commands_deleteLabel");n.deleteConfirmation=t("Commands_deleteConfirmation")}(s=n.Commands||
(n.Commands={}));n.installedExtensions=t("installedExtensions");n.noExtensionsFound=t("noExtensionsFound"),
function(n){n.version=t("ColumnName_version");n.status=t("ColumnName_status");n.publisher=t("ColumnName_publisher");
n.extensionName=t("ColumnName_extensionName")}(h=n.ColumnName||(n.ColumnName={}));n.numberOfExtensions=
t("numberOfExtensions");n.resourceExtensionsDescription=t("resourceExtensionsDescription");n.resourceExtensions=
t("resourceExtensions");n.resourceExtension=t("resourceExtension")})(t=n.VirtualMachineResourceExtension||
(n.VirtualMachineResourceExtension={}))})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||(n.
ExtensionAssets={}))}(ClassicComputeExtension||(ClassicComputeExtension={})),function(n){var t;(function(
n){var t;(function(n){var t;(function(n){"use strict";function i(){var i="ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachine",
n=window,t;if(n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error(
"Unable to find the resources for '"+i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o,s,h,
c,l,a,v,y,p,w;(function(n){var i,r,u,f,e,o,s;(function(n){var i;(function(n){n.invalidImageName=t("VMCapture_ImageName_Validation_invalidImageName")}
)(i=n.Validation||(n.Validation={}));n.title=t("VMCapture_ImageName_title")})(i=n.ImageName||(n.ImageName=
{})),function(n){var i;(function(n){n.message=t("VMCapture_Windows_SysPrep_message")})(i=n.SysPrep||
(n.SysPrep={}))}(r=n.Windows||(n.Windows={})),function(n){n.helpBalloonMessage=t("VMCapture_Sysprep_helpBalloonMessage")}
(u=n.Sysprep||(n.Sysprep={})),function(n){n.warning=t("VMCapture_RunningStatus_warning")}(f=n.RunningStatus||
(n.RunningStatus={})),function(n){var i;(function(n){n.message=t("VMCapture_Linux_SysPrep_message")}
)(i=n.SysPrep||(n.SysPrep={}))}(e=n.Linux||(n.Linux={})),function(n){n.title=t("VMCapture_ImageLabel_title")}
(o=n.ImageLabel||(n.ImageLabel={})),function(n){n.warning=t("VMCapture_DeleteStatus_warning")}(s=n.DeleteStatus||
(n.DeleteStatus={}))})(r=n.VMCapture||(n.VMCapture={}));n.notificationVMCaptureSuccessTitle=t("notificationVMCaptureSuccessTitle");
n.notificationVMCaptureSuccessMessage=t("notificationVMCaptureSuccessMessage");n.notificationVMCaptureInprogressTitle=
t("notificationVMCaptureInprogressTitle");n.notificationVMCaptureInprogressMessage=t("notificationVMCaptureInprogressMessage");
n.notificationVMCaptureFailureTitle=t("notificationVMCaptureFailureTitle");n.notificationVMCaptureFailureMessage=
t("notificationVMCaptureFailureMessage"),function(n){var i,r;(function(n){n.title=t("Blade_Capture_title");
n.description=t("Blade_Capture_description")})(i=n.Capture||(n.Capture={})),function(n){n.byolSubtitle=
t("Blade_SpecPicker_byolSubtitle");n.title=t("Blade_SpecPicker_title");n.subtitle=t("Blade_SpecPicker_subtitle")}
(r=n.SpecPicker||(n.SpecPicker={}))}(u=n.Blade||(n.Blade={})),function(n){n.captureCommand=t("vmCommandTitle_captureCommand");
n.settings=t("vmCommandTitle_settings");n.mandatoryGrid=t("VmCommandTitle_mandatoryGrid");n.optionalGrid=
t("VmCommandTitle_optionalGrid");n.deleteCommand=t("VmCommandTitle_deleteCommand");n.connect=t("vmCommandTitle_connect");
n.shutdown=t("vmCommandTitle_shutdown");n.restart=t("vmCommandTitle_restart");n.start=t("vmCommandTitle_start")}
(f=n.VmCommandTitle||(n.VmCommandTitle={})),function(n){n.a11=t("SpecId_a11");n.a10=t("SpecId_a10");
n.small=t("SpecId_small");n.medium=t("SpecId_medium");n.large=t("SpecId_large");n.extraSmall=t("SpecId_extraSmall");
n.extraLarge=t("SpecId_extraLarge");n.a9=t("SpecId_a9");n.a8=t("SpecId_a8");n.a7=t("SpecId_a7");n.a6=
t("SpecId_a6");n.a5=t("SpecId_a5")}(e=n.SpecId||(n.SpecId={}));n.singular=t("singular");n.plural=t("plural");
n.lowerSingular=t("lowerSingular");n.lowerPlural=t("lowerPlural"),function(n){n.summaryCategory=t("PartGallery_summaryCategory")}
(o=n.PartGallery||(n.PartGallery={})),function(n){n.standardG5=t("SpecPicker_standardG5");n.standardG4=
t("SpecPicker_standardG4");n.standardG3=t("SpecPicker_standardG3");n.standardG2=t("SpecPicker_standardG2");
n.standardG1=t("SpecPicker_standardG1");n.disabledForDomainName=t("SpecPicker_disabledForDomainName");
n.messageForEa=t("SpecPicker_messageForEa");n.message=t("SpecPicker_message");n.standardD4=t("SpecPicker_standardD4");
n.standardD3=t("SpecPicker_standardD3");n.standardD2=t("SpecPicker_standardD2");n.standardD14=t("SpecPicker_standardD14");
n.standardD13=t("SpecPicker_standardD13");n.standardD12=t("SpecPicker_standardD12");n.standardD11=t(
"SpecPicker_standardD11");n.standardD1=t("SpecPicker_standardD1");n.standard=t("SpecPicker_standard");
n.small=t("SpecPicker_small");n.rdmaSupport=t("SpecPicker_rdmaSupport");n.medium=t("SpecPicker_medium");
n.maxIOPs=t("SpecPicker_maxIOPs");n.loadBalancing=t("SpecPicker_loadBalancing");n.ssdCache=t("SpecPicker_ssdCache");
n.premiumDisk=t("SpecPicker_premiumDisk");n.large=t("SpecPicker_large");n.gb=t("SpecPicker_gb");n.extraSmall=
t("SpecPicker_extraSmall");n.extraLarge=t("SpecPicker_extraLarge");n.dataDisks=t("SpecPicker_dataDisks");
n.currencyCode=t("SpecPicker_currencyCode");n.cores=t("SpecPicker_cores");n.core=t("SpecPicker_core");
n.captionPerInstance=t("SpecPicker_captionPerInstance");n.caption=t("SpecPicker_caption");n.basicA4=
t("SpecPicker_basicA4");n.basicA3=t("SpecPicker_basicA3");n.basicA2=t("SpecPicker_basicA2");n.basicA1=
t("SpecPicker_basicA1");n.basicA0=t("SpecPicker_basicA0");n.basic=t("SpecPicker_basic");n.autoScale=
t("SpecPicker_autoScale");n.notEnoughSupportedDiskCount=t("SpecPicker_notEnoughSupportedDiskCount");
n.disabledSpecialVmHelpBalloonLinkText=t("SpecPicker_disabledSpecialVmHelpBalloonLinkText");n.disabledSpecialVmHelpBalloonMessage=
t("SpecPicker_disabledSpecialVmHelpBalloonMessage");n.disabledLocations=t("SpecPicker_disabledLocations")}
(s=n.SpecPicker||(n.SpecPicker={})),function(n){n.subscriptionName=t("ColumnNames_subscriptionName");
n.status=t("ColumnNames_status");n.name=t("ColumnNames_name");n.location=t("ColumnNames_location")}(
h=n.ColumnNames||(n.ColumnNames={})),function(n){n.access=t("Lens_access");n.pricingTier=t("Lens_pricingTier");
n.downloadRdp=t("Lens_downloadRdp");n.monitoring=t("Lens_monitoring");n.operations=t("Lens_operations");
n.usage=t("Lens_usage");n.overview=t("Lens_overview");n.configuration=t("Lens_configuration")}(c=n.Lens||
(n.Lens={})),function(n){n.displayText=t("CurrentSpend_displayText")}(l=n.CurrentSpend||(n.CurrentSpend=
{})),function(n){n.launcherPartDescription=t("Scale_launcherPartDescription");n.launcherPartTitle=t(
"Scale_launcherPartTitle");var i;(function(n){n.title=t("Scale_ComingSoon_title");n.header=t("Scale_ComingSoon_header");
n.description=t("Scale_ComingSoon_description");n.callToActionText=t("Scale_ComingSoon_callToActionText")}
)(i=n.ComingSoon||(n.ComingSoon={}))}(a=n.Scale||(n.Scale={})),function(n){n.warning=t("Status_warning");
n.misconfigured=t("Status_misconfigured");var i;(function(n){n.warningNote=t("Status_stoppedVM_WarningNote")}
)(i=n.StoppedVM||(n.StoppedVM={}));n.stoppedVM=t("Status_stoppedVM");n.restarting=t("Status_restarting");
n.provisioningFailed=t("Status_ProvisioningFailed");n.failedStartingVM=t("Status_FailedStartingVM");
n.deleting=t("Status_deleting");n.creating=t("Status_creating");n.unknown=t("Status_unknown");n.stopping=
t("Status_stopping");n.stopped=t("Status_stopped");n.starting=t("Status_starting");n.running=t("Status_running");
n.provisioning=t("Status_provisioning")}(v=n.Status||(n.Status={}));n.vmShutdownTextWillBeReleased=t(
"vmShutdownTextWillBeReleased");n.vmShutdownTextComma=t("vmShutdownTextComma");n.vmShutdownConfirmationMessageStaticDipConfigured=
t("vmShutdownConfirmationMessageStaticDipConfigured");n.vmShutdownConfirmationMessageInstanceIPConfigured=
t("vmShutdownConfirmationMessageInstanceIPConfigured");n.vmShutdownConfirmationMessageLastVMInRole=t(
"vmShutdownConfirmationMessageLastVMInRole");n.loading=t("loading");n.domainName=t("domainName");n.disks=
t("disks");n.loadBalancedSets=t("loadBalancedSets");n.virtualIPAddress=t("virtualIPAddress");n.instanceIPAddress=
t("instanceIPAddress");n.privateIPAddress=t("privateIPAddress");n.columnType=t("columnType");n.columnItem=
t("columnItem");n.notificationDnDeleteSuccessTitle=t("notificationDnDeleteSuccessTitle");n.notificationDnDeleteSuccessMessage=
t("notificationDnDeleteSuccessMessage");n.notificationDnDeleteInprogressTitle=t("notificationDnDeleteInprogressTitle");
n.notificationDnDeleteInprogressMessage=t("notificationDnDeleteInprogressMessage");n.notificationDnDeleteFailureTitle=
t("notificationDnDeleteFailureTitle");n.notificationDnDeleteFailureMessage=t("notificationDnDeleteFailureMessage");
n.deleteVmMessage=t("deleteVmMessage");n.confirmDeleteEnterVmName=t("confirmDeleteEnterVmName");n.confirmDeleteEnterVmNameValidation=
t("confirmDeleteEnterVmNameValidation");n.vmDeleteBladeTitle=t("vmDeleteBladeTitle");n.notificationVmResizeSuccessTitle=
t("notificationVmResizeSuccessTitle");n.notificationVmResizeSuccessMessage=t("notificationVmResizeSuccessMessage");
n.notificationVmResizeInprogressTitle=t("notificationVmResizeInprogressTitle");n.notificationVmResizeInprogressMessage=
t("notificationVmResizeInprogressMessage");n.notificationVmResizeFailureTitle=t("notificationVmResizeFailureTitle");
n.notificationVmResizeFailureMessage=t("notificationVmResizeFailureMessage"),function(n){n.sshLabel=
t("vmConnectCommand_SshLabel");n.noSShEnabled=t("vmConnectCommand_NoSShEnabled")}(y=n.VmConnectCommand||
(n.VmConnectCommand={}));n.notificationVmDeleteSuccessTitle=t("notificationVmDeleteSuccessTitle");n.
notificationVmDeleteSuccessMessage=t("notificationVmDeleteSuccessMessage");n.notificationVmDeleteInprogressTitle=
t("notificationVmDeleteInprogressTitle");n.notificationVmDeleteInprogressMessage=t("notificationVmDeleteInprogressMessage");
n.notificationVmDeleteFailureTitle=t("notificationVmDeleteFailureTitle");n.notificationVmDeleteFailureMessage=
t("notificationVmDeleteFailureMessage");n.vmDeleteConfirmationTitle=t("vmDeleteConfirmationTitle");n.
vmDeleteConfirmationMessage=t("vmDeleteConfirmationMessage");n.downloadPartTitle=t("DownloadPartTitle");
n.connectBladeTitle=t("ConnectBladeTitle"),function(n){n.deploymentIdTitle=t("Properties_deploymentIdTitle");
n.instanceIpAddressTitle=t("Properties_instanceIpAddressTitle");n.virtualIpAddressTitle=t("Properties_virtualIpAddressTitle");
n.subscriptionName=t("Properties_subscriptionName");n.subscriptionId=t("Properties_subscriptionId");
n.resourceID=t("Properties_resourceID");n.operatingSystemTitle=t("Properties_operatingSystemTitle");
n.location=t("Properties_location");n.hostNameTitle=t("Properties_hostNameTitle");n.domainNameTitle=
t("Properties_domainNameTitle");n.privateIpAddressTitle=t("Properties_privateIpAddressTitle");n.statusTitle=
t("Properties_statusTitle");n.launcherPartDescription=t("Properties_launcherPartDescription");n.launcherPartTitle=
t("Properties_launcherPartTitle");n.bladeTitle=t("Properties_bladeTitle")}(p=n.Properties||(n.Properties=
{}));n.metricsDisabledMessage=t("metricsDisabledMessage"),function(n){n.launcherPartDescription=t("EstimatedSpend_launcherPartDescription");
n.launcherPartTitle=t("EstimatedSpend_launcherPartTitle")}(w=n.EstimatedSpend||(n.EstimatedSpend={})
);n.windowsOperatingSystem=t("windowsOperatingSystem");n.linuxOperatingSystem=t("linuxOperatingSystem");
n.vmShutdownConfirmationTitle=t("vmShutdownConfirmationTitle");n.vmShutdownConfirmationMessage=t("vmShutdownConfirmationMessage");
n.notificationVmShutdownSuccessTitle=t("notificationVmShutdownSuccessTitle");n.notificationVmShutdownSuccessMessage=
t("notificationVmShutdownSuccessMessage");n.notificationVmShutdownInprogressTitle=t("notificationVmShutdownInprogressTitle");
n.notificationVmShutdownInprogressMessage=t("notificationVmShutdownInprogressMessage");n.notificationVmShutdownFailureTitle=
t("notificationVmShutdownFailureTitle");n.notificationVmShutdownFailureMessage=t("notificationVmShutdownFailureMessage");
n.vmStartConfirmationTitle=t("vmStartConfirmationTitle");n.vmStartConfirmationMessage=t("vmStartConfirmationMessage");
n.vmRestartConfirmationTitle=t("vmRestartConfirmationTitle");n.vmRestartConfirmationMessage=t("vmRestartConfirmationMessage");
n.notificationVmStartSuccessTitle=t("notificationVmStartSuccessTitle");n.notificationVmStartSuccessMessage=
t("notificationVmStartSuccessMessage");n.notificationVmStartInprogressTitle=t("notificationVmStartInprogressTitle");
n.notificationVmStartInprogressMessage=t("notificationVmStartInprogressMessage");n.notificationVmStartFailureTitle=
t("notificationVmStartFailureTitle");n.notificationVmStartFailureMessage=t("notificationVmStartFailureMessage");
n.notificationVmRestartSuccessTitle=t("notificationVmRestartSuccessTitle");n.notificationVmRestartSuccessMessage=
t("notificationVmRestartSuccessMessage");n.notificationVmRestartInprogressTitle=t("notificationVmRestartInprogressTitle");
n.notificationVmRestartInprogressMessage=t("notificationVmRestartInprogressMessage");n.notificationVmRestartFailureTitle=
t("notificationVmRestartFailureTitle");n.notificationVmRestartFailureMessage=t("notificationVmRestartFailureMessage");
n.virtualMachines=t("virtualMachines");n.virtualMachine=t("virtualMachine")})(t=n.VirtualMachine||(n.
VirtualMachine={}))})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets={})
)}(ClassicComputeExtension||(ClassicComputeExtension={})),function(n){var t;(function(n){var t;(function(
n){var t;(function(n){"use strict";function i(){var i="ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachineCreateTimezone",
n=window,t;if(n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error(
"Unable to find the resources for '"+i+"'.");return function(n){return t[n]}}var t=i();n.yakutskStandardTime=
t("yakutskStandardTime");n.wEuropeStandardTime=t("wEuropeStandardTime");n.westPacificStandardTime=t(
"westPacificStandardTime");n.westAsiaStandardTime=t("westAsiaStandardTime");n.wCentralAfricaStandardTime=
t("wCentralAfricaStandardTime");n.wAustraliaStandardTime=t("wAustraliaStandardTime");n.vladivostokStandardTime=
t("vladivostokStandardTime");n.venezuelaStandardTime=t("venezuelaStandardTime");n.utc12=t("utc12");n.
utc11=t("utc11");n.utc02=t("utc02");n.utc=t("utc");n.usMountainStandardTime=t("usMountainStandardTime");
n.usEasternStandardTime=t("usEasternStandardTime");n.ulaanbaatarStandardTime=t("ulaanbaatarStandardTime");
n.turkeyStandardTime=t("turkeyStandardTime");n.tongaStandardTime=t("tongaStandardTime");n.tokyoStandardTime=
t("tokyoStandardTime");n.tasmaniaStandardTime=t("tasmaniaStandardTime");n.taipeiStandardTime=t("taipeiStandardTime");
n.syriaStandardTime=t("syriaStandardTime");n.sriLankaStandardTime=t("sriLankaStandardTime");n.southAfricaStandardTime=
t("southAfricaStandardTime");n.singaporeStandardTime=t("singaporeStandardTime");n.seAsiaStandardTime=
t("seAsiaStandardTime");n.saWesternStandardTime=t("saWesternStandardTime");n.saPacificStandardTime=t(
"saPacificStandardTime");n.samoaStandardTime=t("samoaStandardTime");n.saEasternStandardTime=t("saEasternStandardTime");
n.russianStandardTime=t("russianStandardTime");n.romanceStandardTime=t("romanceStandardTime");n.paraguayStandardTime=
t("paraguayStandardTime");n.pakistanStandardTime=t("pakistanStandardTime");n.pacificStandardTimeMexico=
t("pacificStandardTimeMexico");n.pacificStandardTime=t("pacificStandardTime");n.pacificSAStandardTime=
t("pacificSAStandardTime");n.northAsiaStandardTime=t("northAsiaStandardTime");n.northAsiaEastStandardTime=
t("northAsiaEastStandardTime");n.newZealandStandardTime=t("newZealandStandardTime");n.newfoundlandStandardTime=
t("newfoundlandStandardTime");n.nepalStandardTime=t("nepalStandardTime");n.nCentralAsiaStandardTime=
t("nCentralAsiaStandardTime");n.namibiaStandardTime=t("namibiaStandardTime");n.myanmarStandardTime=t(
"myanmarStandardTime");n.mountainStandardTimeMexico=t("mountainStandardTimeMexico");n.mountainStandardTime=
t("mountainStandardTime");n.moroccoStandardTime=t("moroccoStandardTime");n.montevideoStandardTime=t(
"montevideoStandardTime");n.middleEastStandardTime=t("middleEastStandardTime");n.mauritiusStandardTime=
t("mauritiusStandardTime");n.magadanStandardTime=t("magadanStandardTime");n.libyaStandardTime=t("libyaStandardTime");
n.koreaStandardTime=t("koreaStandardTime");n.kaliningradStandardTime=t("kaliningradStandardTime");n.
jordanStandardTime=t("jordanStandardTime");n.israelStandardTime=t("israelStandardTime");n.iranStandardTime=
t("iranStandardTime");n.indiaStandardTime=t("indiaStandardTime");n.hawaiianStandardTime=t("hawaiianStandardTime");
n.gtbStandardTime=t("gtbStandardTime");n.greenwichStandardTime=t("greenwichStandardTime");n.greenlandStandardTime=
t("greenlandStandardTime");n.gmtStandardTime=t("gmtStandardTime");n.georgianStandardTime=t("georgianStandardTime");
n.fleStandardTime=t("fleStandardTime");n.fijiStandardTime=t("fijiStandardTime");n.eSouthAmericaStandardTime=
t("eSouthAmericaStandardTime");n.ekaterinburgStandardTime=t("ekaterinburgStandardTime");n.egyptStandardTime=
t("egyptStandardTime");n.eEuropeStandardTime=t("eEuropeStandardTime");n.eAustraliaStandardTime=t("eAustraliaStandardTime");
n.easternStandardTime=t("easternStandardTime");n.eAfricaStandardTime=t("eAfricaStandardTime");n.datelineStandardTime=
t("datelineStandardTime");n.chinaStandardTime=t("chinaStandardTime");n.centralStandardTimeMexico=t("centralStandardTimeMexico");
n.centralStandardTime=t("centralStandardTime");n.centralPacificStandardTime=t("centralPacificStandardTime");
n.centralEuropeStandardTime=t("centralEuropeStandardTime");n.centralEuropeanStandardTime=t("centralEuropeanStandardTime");
n.centralBrazilianStandardTime=t("centralBrazilianStandardTime");n.centralAsiaStandardTime=t("centralAsiaStandardTime");
n.centralAmericaStandardTime=t("centralAmericaStandardTime");n.cenAustraliaStandardTime=t("cenAustraliaStandardTime");
n.caucasusStandardTime=t("caucasusStandardTime");n.capeVerdeStandardTime=t("capeVerdeStandardTime");
n.canadaCentralStandardTime=t("canadaCentralStandardTime");n.bangladeshStandardTime=t("bangladeshStandardTime");
n.bahiaStandardTime=t("bahiaStandardTime");n.azoresStandardTime=t("azoresStandardTime");n.azerbaijanStandardTime=
t("azerbaijanStandardTime");n.ausEasternStandardTime=t("ausEasternStandardTime");n.ausCentralStandardTime=
t("ausCentralStandardTime");n.atlanticStandardTime=t("atlanticStandardTime");n.argentinaStandardTime=
t("argentinaStandardTime");n.arabStandardTime=t("arabStandardTime");n.arabicStandardTime=t("arabicStandardTime");
n.arabianStandardTime=t("arabianStandardTime");n.alaskanStandardTime=t("alaskanStandardTime");n.afghanistanStandardTime=
t("afghanistanStandardTime")})(t=n.VirtualMachineCreateTimezone||(n.VirtualMachineCreateTimezone={})
)})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets={}))}(ClassicComputeExtension||
(ClassicComputeExtension={})),function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";
function i(){var i="ClassicComputeExtension.ExtensionAssets.Resources.DisksAndImagesResources",n=window,
t;if(n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error("Unable to find the resources for '"+
i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e;(function(n){n.stateTitle=t("DiskProperties_StateTitle");
var i;(function(n){var i;(function(n){n.notAvailable=t("DiskProperties_Command_PricingTier_notAvailable")}
)(i=n.PricingTier||(n.PricingTier={}))})(i=n.Command||(n.Command={}));n.vhdUrl=t("DiskProperties_VhdUrl");
n.unattachedLabel=t("DiskProperties_UnattachedLabel");n.susbcriptionTitle=t("DiskProperties_SusbcriptionTitle");
n.susbcriptionIdLabel=t("DiskProperties_SusbcriptionIdLabel");n.subscriptionName=t("DiskProperties_SubscriptionName");
n.state=t("DiskProperties_State");n.source=t("DiskProperties_Source");n.size=t("DiskProperties_Size");
n.osFamily=t("DiskProperties_OsFamily");n.operatingSystemTitle=t("DiskProperties_OperatingSystemTitle");
n.nameTitle=t("DiskProperties_NameTitle");n.locationTitle=t("DiskProperties_LocationTitle");n.locationLabel=
t("DiskProperties_LocationLabel");n.ioType=t("DiskProperties_IoType");n.attachedLabel=t("DiskProperties_AttachedLabel")}
)(r=n.DiskProperties||(n.DiskProperties={}));n.diskAlreadyAttachedMessage=t("DiskAlreadyAttachedMessage"),
function(n){n.numberOfDisks=t("ImageProperties_NumberOfDisks");var i;(function(n){var i;(function(n)
{n.notAvailable=t("ImageProperties_Command_PricingTier_notAvailable")})(i=n.PricingTier||(n.PricingTier=
{}))})(i=n.Command||(n.Command={}));n.vhdUrl=t("ImageProperties_VhdUrl");n.source=t("ImageProperties_Source");
n.size=t("ImageProperties_Size");n.oSState=t("ImageProperties_OSState");n.osFamily=t("ImageProperties_OsFamily");
n.nameTitle=t("ImageProperties_NameTitle");n.ioType=t("ImageProperties_IoType")}(u=n.ImageProperties||
(n.ImageProperties={})),function(n){n.singular=t("UserImages_singular");n.plural=t("UserImages_plural");
n.lowerSingular=t("UserImages_lowerSingular");n.lowerPlural=t("UserImages_lowerPlural")}(f=n.UserImages||
(n.UserImages={}));n.singular=t("singular");n.plural=t("plural");n.lowerSingular=t("lowerSingular");
n.lowerPlural=t("lowerPlural");n.imagesBladeSubTitle=t("ImagesBladeSubTitle");n.disksBladeSubTitle=t(
"DisksBladeSubTitle"),function(n){var i;(function(n){n.createVMTitle=t("DiskImageProperties_Command_createVMTitle")}
)(i=n.Command||(n.Command={}))}(e=n.DiskImageProperties||(n.DiskImageProperties={}))})(t=n.DisksAndImagesResources||
(n.DisksAndImagesResources={}))})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets=
{}))}(ClassicComputeExtension||(ClassicComputeExtension={}))