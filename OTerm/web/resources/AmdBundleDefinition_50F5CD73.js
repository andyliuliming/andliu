var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("WebsitesExtension/TypeScript/Program",
["require","exports","./_generated/ExtensionDefinition","./_generated/ViewModelFactories","./Shared/SharedArea",
"./Data/Data.Websites","./Data/Data.Regions","./Rpc/RpcCallbacks","./ExtensionAssets/Links","./ContinuousDeployment/Models/TypeMetadata"],
function(n,t,i,r,u,f,e,o,s,h){var c=WebsiteExtension.ExtensionAssets,l;return function(n){"use strict";
function l(){return new t}function a(n){var t=[],i,r;for(i in n)t.push(i);r=v();t.forEach(function(t)
{var i=n[t];t.indexOf("_")!=0&&$.isFunction(i)&&(n[t]=function(){var n=i.apply(this,arguments);return n&&
$.isFunction(n.then)?n.then(function(n){return n&&$.isFunction(n.initialize)&&n.initialize(),$.extend(
n,r),n}):n})})}function v(){return{resources:$.extend({},{general:c.Resources.General,create:c.Resources.
Create,config:c.Resources.Config,propertySheet:c.Resources.PropertySheet,quickStart:c.Resources.QuickStart}),
links:$.extend({},s.Links)}}var t=function(n){function t(){n.apply(this,arguments)}return __extends(
t,n),t.prototype.initialize=function(){this.viewModelFactories=new r.ViewModelFactoriesBase;a(this.viewModelFactories);
this._initializeDataContexts();f.initializeWebsitesAndServerFarms();e.initializeRegions();ExtensionCore.
Csm.getResourceGroupsAsync();o.registerCallbacks(u.DataContext.instance);h.Register();MsPortalFx.Base.
Diagnostics.Telemetry.initialize(i.definitionName,!1)},t.prototype._initializeDataContexts=function(
){this.viewModelFactories.Shared().setDataContext(u.DataContext.instance)},t.prototype.getDefinition=
function(){return i.getDefinition()},t}(MsPortalFx.Extension.EntryPointBase);n.create=l}(l||(l={})),
l});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("WebsitesExtension/TypeScript/_generated/ViewModelFactories",
["require","exports"],function(n){var t;return function(t){var i=function(t){function i(){t.apply(this,
arguments)}return __extends(i,t),i.prototype.BackupSummaryPartViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../ViewModels/Parts/BackupRestore/BackupSummaryPartViewModel",function(n){return new
n.BackupSummaryPartViewModel(t,i,r.dataContext)},n)},i.prototype.BizTalkPart=function(t,i){var r=this;
return this.loadViewModelAsync("../ViewModels/Parts/BiztalkPartViewModel",function(n){return new n.BizTalkPart(
t,i,r.dataContext)},n)},i.prototype.SingleWebsitePart=function(t,i){var r=this;return this.loadViewModelAsync(
"../ViewModels/Parts/SingleWebsitePart",function(n){return new n.SingleWebsitePart(t,i,r.dataContext)}
,n)},i.prototype.SingleWebHostingPlanPart=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/SingleWebHostingPlanPart",
function(n){return new n.SingleWebHostingPlanPart(t,i,r.dataContext)},n)},i.prototype.WebsiteCurrentSpendPart=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/WebsiteCurrentSpendPart",
function(n){return new n.WebsiteCurrentSpendPart(t,i,r.dataContext)},n)},i.prototype.WebsiteScaleYourSitePart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteScaleYourSitePart",
function(n){return new n.WebsiteScaleYourSitePart(t,i,r.dataContext)},n)},i.prototype.RoutingRulesSummaryPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/RoutingRulesSummaryPart",
function(n){return new n.RoutingRulesSummaryPart(t,i,r.dataContext)},n)},i.prototype.SiteExtensionsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/SiteExtensionsPartViewModel",
function(n){return new n.SiteExtensionsPartViewModel(t,i,r.dataContext)},n)},i.prototype.ProcessExplorerLauncherPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessExplorerLauncherPart",
function(n){return new n.ProcessExplorerLauncherPart(t,i,r.dataContext)},n)},i.prototype.SingleSiteExtensionPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/SingleSiteExtensionPart",
function(n){return new n.SingleSiteExtensionPart(t,i,r.dataContext)},n)},i.prototype.WebsiteQuickStartLauncherPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteQuickStartLauncher",
function(n){return new n.WebsiteQuickStartLauncherPart(t,i,r.dataContext)},n)},i.prototype.WebsitePropertySheetLauncherPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsitePropertySheetLauncherPart",
function(n){return new n.WebsitePropertySheetLauncherPart(t,i,r.dataContext)},n)},i.prototype.WebsiteSettingsLauncherPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteSettingsLauncherPartViewModel",
function(n){return new n.WebsiteSettingsLauncherPartViewModel(t,i,r.dataContext)},n)},i.prototype.LogStreamLauncherPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/LogStreamLauncherPart",
function(n){return new n.LogStreamLauncherPart(t,i,r.dataContext)},n)},i.prototype.WebsiteLogsLauncherPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteLogsLauncherPart",
function(n){return new n.WebsiteLogsLauncherPart(t,i,r.dataContext)},n)},i.prototype.WebsiteSlotsSummaryPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteSlotsSummaryPart",
function(n){return new n.WebsiteSlotsSummaryPart(t,i,r.dataContext)},n)},i.prototype.ConsoleLauncherPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/ConsoleLauncherPart",function(
n){return new n.ConsoleLauncherPart(t,i,r.dataContext)},n)},i.prototype.WebjobsPartViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebjobsPartViewModel",function(n)
{return new n.WebjobsPartViewModel(t,i,r.dataContext)},n)},i.prototype.WebsitePortBridgeSummaryPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsitePortBridgeSummaryPart",
function(n){return new n.WebsitePortBridgeSummaryPart(t,i,r.dataContext)},n)},i.prototype.WebsitePublishCredentialsPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsitePublishCredentialsPart",
function(n){return new n.WebsitePublishCredentialsPart(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigLauncherSiteSettingsPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigLauncherSiteSettingsPart",
function(n){return new n.WebsiteConfigLauncherSiteSettingsPart(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigLauncherDomainsAndSslPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigLauncherDomainsAndSslPart",
function(n){return new n.WebsiteConfigLauncherDomainsAndSslPart(t,i,r.dataContext)},n)},i.prototype.
TrafficManagerViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/TrafficManagerViewModel",
function(n){return new n.TrafficManagerViewModel(t,i,r.dataContext)},n)},i.prototype.BlankPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Shared/SharedArea",function(n){return new
n.BlankPartViewModel(t,i,r.dataContext)},n)},i.prototype.WebsiteSetupVPNNetworkPart=function(t,i){var
r=this;return this.loadViewModelAsync("../VPNNetwork/ViewModels/WebsiteSetupVPNNetworkPart",function(
n){return new n.WebsiteSetupVPNNetworkPart(t,i,r.dataContext)},n)},i.prototype.SyncCertificatesCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../VPNNetwork/ViewModels/SyncCertificatesCommand",
function(n){return new n.SyncCertificatesCommand(t,i,r.dataContext)},n)},i.prototype.DisconnectNetworkCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../VPNNetwork/ViewModels/DisconnectNetworkCommand",
function(n){return new n.DisconnectNetworkCommand(t,i,r.dataContext)},n)},i.prototype.WHPSetupVPNNetworkPart=
function(t,i){var r=this;return this.loadViewModelAsync("../VPNNetwork/ViewModels/WHPSetupVPNNetworkPart",
function(n){return new n.WHPSetupVPNNetworkPart(t,i,r.dataContext)},n)},i.prototype.SetupContinuousDeploymentLauncherPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupContinuousDeploymentLauncherPart",
function(n){return new n.SetupContinuousDeploymentLauncherPart(t,i,r.dataContext)},n)},i.prototype.ContinuousDeploymentInfoPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/ContinuousDeploymentInfoPart",
function(n){return new n.ContinuousDeploymentInfoPart(t,i,r.dataContext)},n)},i.prototype.AddSiteExtensionWizardBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.AddSiteExtensionWizardBlade(t,i,r.dataContext)},n)},i.prototype.AddSiteExtensionWizardBladeWizard=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/AddSiteExtensionWizardBladeWizard",
function(n){return new n.AddSiteExtensionWizardBladeWizard(t,i,r.dataContext)},n)},i.prototype.AddSiteExtensionWizardPickExtensionBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.AddSiteExtensionWizardPickExtensionBlade(t,i,r.dataContext)},n)},i.prototype.AddSiteExtensionWizardPickExtension=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/AddSiteExtensionWizardPickExtension",
function(n){return new n.AddSiteExtensionWizardPickExtension(t,i,r.dataContext)},n)},i.prototype.AddSiteExtensionWizardAcceptLegalTermsBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.AddSiteExtensionWizardAcceptLegalTermsBlade(t,i,r.dataContext)},n)},i.prototype.AddSiteExtensionWizardAcceptLegalTerms=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/AddSiteExtensionWizardAcceptLegalTerms",
function(n){return new n.AddSiteExtensionWizardAcceptLegalTerms(t,i,r.dataContext)},n)},i.prototype.
AppServiceEnvironmentCreateWizardBlade=function(t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/AppServiceEnvironmentCreateWizardBlade",
function(n){return new n.AppServiceEnvironmentCreateWizardBlade(t,i,r.dataContext)},n)},i.prototype.
CreateAppHostingEnvironmentWizardPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../AppServiceEnvironment/Create/ViewModels/AppServiceEnvironmentCreateWizardPart",function(n){return new
n.CreateAppHostingEnvironmentWizardPartViewModel(t,i,r.dataContext)},n)},i.prototype.BackupBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.BackupBladeViewModel(t,i,r.dataContext)},n)},i.prototype.BackupHistoryChartPart=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/BackupHistoryChartPart",
function(n){return new n.BackupHistoryChartPart(t,i,r.dataContext)},n)},i.prototype.BackupConfigurationPickerPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/BackupConfigurationPickerPart",
function(n){return new n.BackupConfigurationPickerPart(t,i,r.dataContext)},n)},i.prototype.BackupConfigurationDatabasePickerPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/BackupConfigurationDatabasePickerPart",
function(n){return new n.BackupConfigurationDatabasePickerPart(t,i,r.dataContext)},n)},i.prototype.BackupConfigurationPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/BackupConfigurationPart",
function(n){return new n.BackupConfigurationPart(t,i,r.dataContext)},n)},i.prototype.BackupHistoryGridPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/BackupHistoryGridPart",
function(n){return new n.BackupHistoryGridPart(t,i,r.dataContext)},n)},i.prototype.SaveBackupConfigCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/BackupRestore/SaveBackupConfigCommand",
function(n){return new n.SaveBackupConfigCommand(t,i,r.dataContext)},n)},i.prototype.DiscardBackupConfigCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/BackupRestore/DiscardBackupConfigCommand",
function(n){return new n.DiscardBackupConfigCommand(t,i,r.dataContext)},n)},i.prototype.BackupCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/BackupRestore/BackupCommand",
function(n){return new n.BackupCommand(t,i,r.dataContext)},n)},i.prototype.RestoreCommand=function(t,
i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/BackupRestore/RestoreCommand",function(
n){return new n.RestoreCommand(t,i,r.dataContext)},n)},i.prototype.BackupDetailBladeViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(n){return new
n.BackupDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.BackupDetailPart=function(t,i){var r=
this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/BackupDetailPart",function(n)
{return new n.BackupDetailPart(t,i,r.dataContext)},n)},i.prototype.ConsoleBlade=function(t,i){var r=
this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(n){return new n.
ConsoleBlade(t,i,r.dataContext)},n)},i.prototype.Console=function(t,i){var r=this;return this.loadViewModelAsync(
"../ViewModels/Controls/ConsoleControl",function(n){return new n.Console(t,i,r.dataContext)},n)},i.prototype.
WebsiteCreateAppSettingsStepBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Creates/CreateWebsiteBlades",
function(n){return new n.WebsiteCreateAppSettingsStepBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
CreateWebsiteAppSettingsStep=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Creates/CreateWebsiteAppSettingsStep",
function(n){return new n.CreateWebsiteAppSettingsStep(t,i,r.dataContext)},n)},i.prototype.WebsiteAndDatabaseCreateConnectionStringStepBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Creates/CreateWebsiteBlades",
function(n){return new n.WebsiteAndDatabaseCreateConnectionStringStepBladeViewModel(t,i,r.dataContext)}
,n)},i.prototype.WebsiteAndDatabaseCreateConnectionStringStepViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../ViewModels/Creates/CreateWebsiteAndDatabaseConnectionStringStep",function(n){
return new n.WebsiteAndDatabaseCreateConnectionStringStepViewModel(t,i,r.dataContext)},n)},i.prototype.
CreateWebsiteAndSqlWizardBlade=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Creates/CreateWebsiteBlades",
function(n){return new n.CreateWebsiteAndSqlWizardBlade(t,i,r.dataContext)},n)},i.prototype.CreateWebsiteAndSqlWizardPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Creates/CreateWebsiteAndSqlWizardPart",
function(n){return new n.CreateWebsiteAndSqlWizardPart(t,i,r.dataContext)},n)},i.prototype.CreateWebsiteAndMySqlWizardBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Creates/CreateWebsiteBlades",
function(n){return new n.CreateWebsiteAndMySqlWizardBlade(t,i,r.dataContext)},n)},i.prototype.CreateWebsiteAndMySqlWizardPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Creates/CreateWebsiteAndMySqlWizardPart",
function(n){return new n.CreateWebsiteAndMySqlWizardPart(t,i,r.dataContext)},n)},i.prototype.CreateWebsiteWizardBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Creates/CreateWebsiteBlades",
function(n){return new n.CreateWebsiteWizardBlade(t,i,r.dataContext)},n)},i.prototype.CreateWebsiteWizardPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Creates/CreateWebsiteWizardPart",
function(n){return new n.CreateWebsiteWizardPart(t,i,r.dataContext)},n)},i.prototype.ResetFtpCredentialsBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.ResetFtpCredentialsBlade(t,i,r.dataContext)},n)},i.prototype.FtpCredentialsPart=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/FtpCredentialsPart",function(n){
return new n.FtpCredentialsPart(t,i,r.dataContext)},n)},i.prototype.SaveFtpCredentialsCommand=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/SaveFtpCredentials",function(
n){return new n.SaveFtpCredentialsCommand(t,i,r.dataContext)},n)},i.prototype.DiscardFtpCredentialsCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/DiscardFtpCredentials",
function(n){return new n.DiscardFtpCredentialsCommand(t,i,r.dataContext)},n)},i.prototype.HybridConnectionPropertiesBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.HybridConnectionPropertiesBladeViewModel(t,i,r.dataContext)},n)},i.prototype.HybridConnectionPropertiesPartViewmodel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/HybridConnectionPropertiesPartViewmodel",
function(n){return new n.HybridConnectionPropertiesPartViewmodel(t,i,r.dataContext)},n)},i.prototype.
LogStreamBlade=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",
function(n){return new n.LogStreamBlade(t,i,r.dataContext)},n)},i.prototype.LogStreamPart=function(t,
i){var r=this;return this.loadViewModelAsync("../ViewModels/Controls/LogStreamControl",function(n){return new
n.LogStreamPart(t,i,r.dataContext)},n)},i.prototype.ApplicationLogsCommandViewModel=function(t,i){var
r=this;return this.loadViewModelAsync("../ViewModels/Controls/LogStreamControl",function(n){return new
n.ApplicationLogsCommandViewModel(t,i,r.dataContext)},n)},i.prototype.WebServerLogsCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Controls/LogStreamControl",function(
n){return new n.WebServerLogsCommandViewModel(t,i,r.dataContext)},n)},i.prototype.PauseStreamingLogCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Controls/LogStreamControl",function(
n){return new n.PauseStreamingLogCommandViewModel(t,i,r.dataContext)},n)},i.prototype.StartStreamingLogCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Controls/LogStreamControl",function(
n){return new n.StartStreamingLogCommandViewModel(t,i,r.dataContext)},n)},i.prototype.ClearStreamingLogCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Controls/LogStreamControl",function(
n){return new n.ClearStreamingLogCommandViewModel(t,i,r.dataContext)},n)},i.prototype.PortBridgeItemDetailsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.PortBridgeItemDetailsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.HybridConnectionPropertiesLauncherPartViewmodel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/HybridConnectionPropertiesLauncherPartViewmodel",
function(n){return new n.HybridConnectionPropertiesLauncherPartViewmodel(t,i,r.dataContext)},n)},i.prototype.
HybridConnectionSummaryPartViewmodel=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/HybridConnectionSummaryPartViewmodel",
function(n){return new n.HybridConnectionSummaryPartViewmodel(t,i,r.dataContext)},n)},i.prototype.InstanceBrowserBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.InstanceBrowserBlade(t,i,r.dataContext)},n)},i.prototype.InstanceBrowserPart=function(
){throw new Error("Method 'InstanceBrowserPart' not implemented");},i.prototype.ProcessExplorerBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.ProcessExplorerBlade(t,i,r.dataContext)},n)},i.prototype.ProcessGridPart=function(t,
i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessGridPart",function(n){return new
n.ProcessGridPart(t,i,r.dataContext)},n)},i.prototype.FindHandleCommandViewModel=function(t,i){var r=
this;return this.loadViewModelAsync("../ViewModels/Commands/FindHandleCommandViewModel",function(n){
return new n.FindHandleCommandViewModel(t,i,r.dataContext)},n)},i.prototype.ProcessFindHandleBlade=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(n){return new
n.ProcessFindHandleBlade(t,i,r.dataContext)},n)},i.prototype.ProcessHandlesGridPart=function(t,i){var
r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessHandlesGridPart",function(n){return new
n.ProcessHandlesGridPart(t,i,r.dataContext)},n)},i.prototype.ProcessDetailsBlade=function(t,i){var r=
this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(n){return new n.
ProcessDetailsBlade(t,i,r.dataContext)},n)},i.prototype.ProcessSummaryPart=function(t,i){var r=this;
return this.loadViewModelAsync("../ViewModels/Parts/ProcessSummaryPart",function(n){return new n.ProcessSummaryPart(
t,i,r.dataContext)},n)},i.prototype.ProcessHandlesSummaryPart=function(t,i){var r=this;return this.loadViewModelAsync(
"../ViewModels/Parts/ProcessHandlesSummaryPart",function(n){return new n.ProcessHandlesSummaryPart(t,
i,r.dataContext)},n)},i.prototype.ProcessModulesSummaryPart=function(t,i){var r=this;return this.loadViewModelAsync(
"../ViewModels/Parts/ProcessModulesSummaryPart",function(n){return new n.ProcessModulesSummaryPart(t,
i,r.dataContext)},n)},i.prototype.ProcessCPUUsageChart=function(t,i){var r=this;return this.loadViewModelAsync(
"../ViewModels/Parts/ProcessCPUUsageChart",function(n){return new n.ProcessCPUUsageChart(t,i,r.dataContext)}
,n)},i.prototype.ProcessThreadsChart=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessThreadsChart",
function(n){return new n.ProcessThreadsChart(t,i,r.dataContext)},n)},i.prototype.ProcessMemoryPart=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessMemoryPart",function(n){return new
n.ProcessMemoryPart(t,i,r.dataContext)},n)},i.prototype.ProcessWorkingSetChart=function(t,i){var r=this;
return this.loadViewModelAsync("../ViewModels/Parts/ProcessWorkingSetChart",function(n){return new n.
ProcessWorkingSetChart(t,i,r.dataContext)},n)},i.prototype.ProcessVirtualMemoryChart=function(t,i){var
r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessVirtualMemoryChart",function(n){return new
n.ProcessVirtualMemoryChart(t,i,r.dataContext)},n)},i.prototype.KillProcessCommandViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/KillProcessCommandViewModel",
function(n){return new n.KillProcessCommandViewModel(t,i,r.dataContext)},n)},i.prototype.ModulesBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.ModulesBlade(t,i,r.dataContext)},n)},i.prototype.ProcessModulesPart=function(t,i){var
r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessModulesPart",function(n){return new
n.ProcessModulesPart(t,i,r.dataContext)},n)},i.prototype.ThreadsBlade=function(t,i){var r=this;return this.
loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(n){return new n.ThreadsBlade(t,i,
r.dataContext)},n)},i.prototype.ProcessThreadsPart=function(t,i){var r=this;return this.loadViewModelAsync(
"../ViewModels/Parts/ProcessThreadsPart",function(n){return new n.ProcessThreadsPart(t,i,r.dataContext)}
,n)},i.prototype.WorkingSetDetailsBlade=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",
function(n){return new n.WorkingSetDetailsBlade(t,i,r.dataContext)},n)},i.prototype.ProcessWorkingSetPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessWorkingSetPart",
function(n){return new n.ProcessWorkingSetPart(t,i,r.dataContext)},n)},i.prototype.VirtualMemoryDetailsBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.VirtualMemoryDetailsBlade(t,i,r.dataContext)},n)},i.prototype.ProcessVirtualMemoryPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessVirtualMemoryPart",
function(n){return new n.ProcessVirtualMemoryPart(t,i,r.dataContext)},n)},i.prototype.CPUUsageDetailsBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.CPUUsageDetailsBlade(t,i,r.dataContext)},n)},i.prototype.ProcessCPUUsagePart=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessCPUUsagePart",function(n)
{return new n.ProcessCPUUsagePart(t,i,r.dataContext)},n)},i.prototype.HandlesDetailsBlade=function(t,
i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(n){return new
n.HandlesDetailsBlade(t,i,r.dataContext)},n)},i.prototype.ProcessHandlesPart=function(t,i){var r=this;
return this.loadViewModelAsync("../ViewModels/Parts/ProcessHandlesPart",function(n){return new n.ProcessHandlesPart(
t,i,r.dataContext)},n)},i.prototype.ModuleDetailsBlade=function(t,i){var r=this;return this.loadViewModelAsync(
"../ViewModels/Blades/BladeViewModels",function(n){return new n.ModuleDetailsBlade(t,i,r.dataContext)}
,n)},i.prototype.ProcessModuleDetailsPart=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessModuleDetailsPart",
function(n){return new n.ProcessModuleDetailsPart(t,i,r.dataContext)},n)},i.prototype.ThreadDetailsBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.ThreadDetailsBlade(t,i,r.dataContext)},n)},i.prototype.ProcessThreadDetailsPart=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/ProcessThreadDetailsPart",function(
n){return new n.ProcessThreadDetailsPart(t,i,r.dataContext)},n)},i.prototype.PropertySheetBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.PropertySheetBladeViewModel(t,i,r.dataContext)},n)},i.prototype.WebsitePropertySheetPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsitePropertySheetPart",
function(n){return new n.WebsitePropertySheetPart(t,i,r.dataContext)},n)},i.prototype.QuickStartBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.QuickStartBlade(t,i,r.dataContext)},n)},i.prototype.WebsiteQuickStartWizardPart=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsitesQuickStart",function(n){
return new n.WebsiteQuickStartWizardPart(t,i,r.dataContext)},n)},i.prototype.RestoreSettingsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.RestoreSettingsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.RestoreSettingsPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/RestoreSettingsPart",
function(n){return new n.RestoreSettingsPart(t,i,r.dataContext)},n)},i.prototype.RestoreCreateWebsiteBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.RestoreCreateWebsiteBladeViewModel(t,i,r.dataContext)},n)},i.prototype.RestoreCreateWebsitePart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/RestoreCreateWebsitePart",
function(n){return new n.RestoreCreateWebsitePart(t,i,r.dataContext)},n)},i.prototype.RestoreDatabasesBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.RestoreDatabasesBladeViewModel(t,i,r.dataContext)},n)},i.prototype.RestoreDatabasesPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/RestoreDatabasesPart",
function(n){return new n.RestoreDatabasesPart(t,i,r.dataContext)},n)},i.prototype.DatabaseRestoreOptionsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.DatabaseRestoreOptionsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.DatabaseRestoreOptionsPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/DatabaseRestoreOptionsPart",
function(n){return new n.DatabaseRestoreOptionsPart(t,i,r.dataContext)},n)},i.prototype.SiteExtensionItemDetailsBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.SiteExtensionItemDetailsBlade(t,i,r.dataContext)},n)},i.prototype.SiteExtensionsDetailsPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/SiteExtensionsDetailsPart",
function(n){return new n.SiteExtensionsDetailsPart(t,i,r.dataContext)},n)},i.prototype.SiteExtensionsListBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.SiteExtensionsListBlade(t,i,r.dataContext)},n)},i.prototype.SiteExtensionsListPart=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/SiteExtensionsListPart",function(
n){return new n.SiteExtensionsListPart(t,i,r.dataContext)},n)},i.prototype.LaunchAddSiteExtension=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/SiteExtensionsCommands/LaunchAddSiteExtension",
function(n){return new n.LaunchAddSiteExtension(t,i,r.dataContext)},n)},i.prototype.UploadCertificateBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.UploadCertificateBlade(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigFormUploadCertificatePart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormUploadCertificatePart",
function(n){return new n.WebsiteConfigFormUploadCertificatePart(t,i,r.dataContext)},n)},i.prototype.
SaveCertificateCommand=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/SaveCertificate",
function(n){return new n.SaveCertificateCommand(t,i,r.dataContext)},n)},i.prototype.DiscardCertificateCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/DiscardCertificate",
function(n){return new n.DiscardCertificateCommand(t,i,r.dataContext)},n)},i.prototype.WebsiteUsageBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsiteUsageBlade(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanUsageGraphChartPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebHostingPlanUsageGraphChartPart",
function(n){return new n.WebHostingPlanUsageGraphChartPart(t,i,r.dataContext)},n)},i.prototype.UsageGaugeDetailPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/Usage",function(n){return new
n.UsageGaugeDetailPart(t,i,r.dataContext)},n)},i.prototype.UsageGaugeBlade=function(t,i){var r=this;
return this.loadViewModelAsync("../ViewModels/Parts/Usage",function(n){return new n.UsageGaugeBlade(
t,i,r.dataContext)},n)},i.prototype.WebHostingPlanDashboardBlade=function(t,i){var r=this;return this.
loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(n){return new n.WebHostingPlanDashboardBlade(
t,i,r.dataContext)},n)},i.prototype.WebHostingPlanQuickStartLauncherPart=function(t,i){var r=this;return this.
loadViewModelAsync("../ViewModels/Parts/WebHostingPlanQuickStartLauncher",function(n){return new n.WebHostingPlanQuickStartLauncherPart(
t,i,r.dataContext)},n)},i.prototype.WebHostingPlanPropertySheetLauncherPart=function(t,i){var r=this;
return this.loadViewModelAsync("../ViewModels/Parts/WebHostingPlanPropertySheetLauncher",function(n)
{return new n.WebHostingPlanPropertySheetLauncherPart(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanQuotaSummaryPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebHostingPlanQuotaSummaryPart",
function(n){return new n.WebHostingPlanQuotaSummaryPart(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanPricingTierLauncherExtender=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebHostingPlanPricingTierLauncherExtender",
function(n){return new n.WebHostingPlanPricingTierLauncherExtender(t,i,r.dataContext)},n)},i.prototype.
DeleteWebHostingPlanCommandViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/DeleteWebHostingPlanCommandViewModel",
function(n){return new n.DeleteWebHostingPlanCommandViewModel(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanPickerBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebHostingPlanPickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanPickerListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebHostingPlanPickerListViewModel",
function(n){return new n.WebHostingPlanPickerListViewModel(t,i,r.dataContext)},n)},i.prototype.CreateWebHostingPlanBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.CreateWebHostingPlanBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CreateWebHostingPlanFormPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/CreateWebHostingPlanFormPartViewModel",
function(n){return new n.CreateWebHostingPlanFormPartViewModel(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanPickerPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebHostingPlanPickerPart",
function(n){return new n.WebHostingPlanPickerPart(t,i,r.dataContext)},n)},i.prototype.WebsiteSpecPickerBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsiteSpecPickerBlade(t,i,r.dataContext)},n)},i.prototype.WebsiteSpecPickerExtender=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteSpecPickerExtender",
function(n){return new n.WebsiteSpecPickerExtender(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanDetailUsagePart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebhostingPlanDetailUsagePart",
function(n){return new n.WebHostingPlanDetailUsagePart(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanPropertySheetBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebHostingPlanPropertySheetBladeViewModel(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanPropertySheetPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebHostingPlanPropertySheetPart",
function(n){return new n.WebHostingPlanPropertySheetPart(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanQuickStartBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebHostingPlanQuickStartBlade(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanQuickStartWizardPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebHostingPlanQuickStart",
function(n){return new n.WebHostingPlanQuickStartWizardPart(t,i,r.dataContext)},n)},i.prototype.WebJobsAddBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebJobsAddBlade(t,i,r.dataContext)},n)},i.prototype.WebJobsAddPart=function(t,i){var
r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebJobsAddPart",function(n){return new n.
WebJobsAddPart(t,i,r.dataContext)},n)},i.prototype.WebJobsListBlade=function(t,i){var r=this;return this.
loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(n){return new n.WebJobsListBlade(
t,i,r.dataContext)},n)},i.prototype.WebJobsListPart=function(t,i){var r=this;return this.loadViewModelAsync(
"../ViewModels/Parts/WebJobsListPart",function(n){return new n.WebJobsListPart(t,i,r.dataContext)},n)}
,i.prototype.WebJobsAddCommand=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/WebJobsAddCommand",
function(n){return new n.WebJobsAddCommand(t,i,r.dataContext)},n)},i.prototype.WebsiteAddSlotBlade=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(n){return new
n.WebsiteAddSlotBlade(t,i,r.dataContext)},n)},i.prototype.WebsiteAddSlotPart=function(t,i){var r=this;
return this.loadViewModelAsync("../ViewModels/Parts/WebsiteAddSlotPart",function(n){return new n.WebsiteAddSlotPart(
t,i,r.dataContext)},n)},i.prototype.WebsiteConfigSiteSettingsBlade=function(t,i){var r=this;return this.
loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(n){return new n.WebsiteConfigSiteSettingsBlade(
t,i,r.dataContext)},n)},i.prototype.WebsiteConfigFormGeneralSettingsPart=function(t,i){var r=this;return this.
loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormGeneralSettingsPart",function(n){return new
n.WebsiteConfigFormGeneralSettingsPart(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigFormAutoSwapPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormAutoSwapPart",
function(n){return new n.WebsiteConfigFormAutoSwapPart(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigFormDebuggingPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormDebuggingPart",
function(n){return new n.WebsiteConfigFormDebuggingPart(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigFormAppSettingsPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormAppSettingsPart",
function(n){return new n.WebsiteConfigFormAppSettingsPart(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigFormConnectionStringsPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormConnectionStringsPart",
function(n){return new n.WebsiteConfigFormConnectionStringsPart(t,i,r.dataContext)},n)},i.prototype.
WebsiteConfigFormDefaultDocumentsPart=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormDefaultDocumentsPart",
function(n){return new n.WebsiteConfigFormDefaultDocumentsPart(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigFormHandlerMappingsPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormHandlerMappingsPart",
function(n){return new n.WebsiteConfigFormHandlerMappingsPart(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigFormVirtualApplicationsAndDirectoriesPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormVirtualApplicationsAndDirectoriesPart",
function(n){return new n.WebsiteConfigFormVirtualApplicationsAndDirectoriesPart(t,i,r.dataContext)},
n)},i.prototype.SaveSiteSettingsCommand=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/SaveSiteSettings",
function(n){return new n.SaveSiteSettingsCommand(t,i,r.dataContext)},n)},i.prototype.DiscardSiteSettingsCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/DiscardSiteSettings",
function(n){return new n.DiscardSiteSettingsCommand(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigSSLSettingsBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsiteConfigSSLSettingsBlade(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigFormCertificatesPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormCertificatesPart",
function(n){return new n.WebsiteConfigFormCertificatesPart(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigFormDomainsPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormDomainsPart",
function(n){return new n.WebsiteConfigFormDomainsPart(t,i,r.dataContext)},n)},i.prototype.WebsiteConfigFormSslBindingPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteConfigFormSslBindingPart",
function(n){return new n.WebsiteConfigFormSslBindingPart(t,i,r.dataContext)},n)},i.prototype.SaveSSLCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/SaveSSL",function(n)
{return new n.SaveSSLCommand(t,i,r.dataContext)},n)},i.prototype.DiscardSSLCommand=function(t,i){var
r=this;return this.loadViewModelAsync("../ViewModels/Commands/DiscardSSL",function(n){return new n.DiscardSSLCommand(
t,i,r.dataContext)},n)},i.prototype.WebsiteLinkedDatabasesBladeViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(n){return new n.WebsiteLinkedDatabasesBladeViewModel(
t,i,r.dataContext)},n)},i.prototype.WebsiteLinkedDatabasesListViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../ViewModels/Parts/BackupRestore/WebsiteLinkedDatabasesListViewModel",function(
n){return new n.WebsiteLinkedDatabasesListViewModel(t,i,r.dataContext)},n)},i.prototype.WebsiteLogsBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsiteLogsBlade(t,i,r.dataContext)},n)},i.prototype.WebsiteLogsDownloadLogsPart=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteLogsDownloadLogsPart",function(
n){return new n.WebsiteLogsDownloadLogsPart(t,i,r.dataContext)},n)},i.prototype.WebsiteLogsPart=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteLogsPart",function(n){return new
n.WebsiteLogsPart(t,i,r.dataContext)},n)},i.prototype.SaveWebsiteLogsCommand=function(t,i){var r=this;
return this.loadViewModelAsync("../ViewModels/Commands/SaveWebsiteLogsSettings",function(n){return new
n.SaveWebsiteLogsCommand(t,i,r.dataContext)},n)},i.prototype.DiscardWebsiteLogsCommand=function(t,i)
{var r=this;return this.loadViewModelAsync("../ViewModels/Commands/DiscardWebsiteLogsSettings",function(
n){return new n.DiscardWebsiteLogsCommand(t,i,r.dataContext)},n)},i.prototype.WebsitePickerBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsitePickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.WebsitesListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/WebsitesListViewModel",
function(n){return new n.WebsitesListViewModel(t,i,r.dataContext)},n)},i.prototype.ExistingWebsitesPickerBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.ExistingWebsitesPickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ExistingWebsitesPickerListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Pickers/ExistingWebsitesPickerListViewModel",
function(n){return new n.ExistingWebsitesPickerListViewModel(t,i,r.dataContext)},n)},i.prototype.WebsiteSlotsPickerBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsiteSlotsPickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.WebsiteSlotsListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BackupRestore/WebsiteSlotsListViewModel",
function(n){return new n.WebsiteSlotsListViewModel(t,i,r.dataContext)},n)},i.prototype.WebsitePortBridgeListBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsitePortBridgeListBlade(t,i,r.dataContext)},n)},i.prototype.WebsitePortBridgeListPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsitePortBridgeListPart",
function(n){return new n.WebsitePortBridgeListPart(t,i,r.dataContext)},n)},i.prototype.LaunchAddPortBridgeEndpointCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/PortBridgeCommands/LaunchAddPortBridgeEndpointCommand",
function(n){return new n.LaunchAddPortBridgeEndpointCommand(t,i,r.dataContext)},n)},i.prototype.WebsiteRoutingRulesBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsiteRoutingRulesBlade(t,i,r.dataContext)},n)},i.prototype.RoutingRulesFormPart=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/RoutingRulesFormPart",function(n)
{return new n.RoutingRulesFormPart(t,i,r.dataContext)},n)},i.prototype.WebSiteRoutingRulesAddSlots=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebSiteRoutingRulesAddSlots",function(
n){return new n.WebSiteRoutingRulesAddSlots(t,i,r.dataContext)},n)},i.prototype.SaveSiteRoutingSettingsCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/SaveSiteRoutingSettings",
function(n){return new n.SaveSiteRoutingSettingsCommand(t,i,r.dataContext)},n)},i.prototype.LaunchAddSlotCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/LaunchAddSlotCommand",
function(n){return new n.LaunchAddSlotCommand(t,i,r.dataContext)},n)},i.prototype.WebsiteDashboardBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsiteDashboardBlade(t,i,r.dataContext)},n)},i.prototype.WebsiteApplicationProviderSetupPartExtender=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteApplicationProviderSetupPartExtender",
function(n){return new n.WebsiteApplicationProviderSetupPartExtender(t,i,r.dataContext)},n)},i.prototype.
WebsiteBladeResourceSummaryViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteBladeResourceSummaryViewModel",
function(n){return new n.WebsiteBladeResourceSummaryViewModel(t,i,r.dataContext)},n)},i.prototype.SettingsCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/SettingsCommandViewModel",
function(n){return new n.SettingsCommandViewModel(t,i,r.dataContext)},n)},i.prototype.BrowseCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/BrowseCommandViewModel",
function(n){return new n.BrowseCommandViewModel(t,i,r.dataContext)},n)},i.prototype.StartCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/StartCommandViewModel",
function(n){return new n.StartCommandViewModel(t,i,r.dataContext)},n)},i.prototype.StopCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/StopCommandViewModel",
function(n){return new n.StopCommandViewModel(t,i,r.dataContext)},n)},i.prototype.SlotSwapCommand=function(
t,i){var r=this;return this.loadViewModelAsync("../SlotSwap/ViewModels/SlotSwapCommand",function(n){
return new n.SlotSwapCommand(t,i,r.dataContext)},n)},i.prototype.RestartCommandViewModel=function(t,
i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/RestartCommandViewModel",function(
n){return new n.RestartCommandViewModel(t,i,r.dataContext)},n)},i.prototype.DeleteCommandViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/DeleteCommandViewModel",function(
n){return new n.DeleteCommandViewModel(t,i,r.dataContext)},n)},i.prototype.DownloadPublishProfileCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/DownloadPublishProfileCommand",
function(n){return new n.DownloadPublishProfileCommandViewModel(t,i,r.dataContext)},n)},i.prototype.
ResetPublishProfileCommandViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/ResetPublishProfileCommandViewModel",
function(n){return new n.ResetPublishProfileCommandViewModel(t,i,r.dataContext)},n)},i.prototype.ChangeWebHostingPlanCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/ChangeWebHostingPlanCommand",
function(n){return new n.ChangeWebHostingPlanCommand(t,i,r.dataContext)},n)},i.prototype.ComingSoonBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.ComingSoonBlade(t,i,r.dataContext)},n)},i.prototype.ComingSoonBladePartViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/ComingSoonBladePartViewModel",function(
n){return new n.ComingSoonBladePartViewModel(t,i,r.dataContext)},n)},i.prototype.BizTalkComingSoonPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BizTalkComingSoonPartViewModel",
function(n){return new n.BizTalkComingSoonPartViewModel(t,i,r.dataContext)},n)},i.prototype.ContinuousDeploymentDetailsBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/ContinuousDeploymentDetailsBlade",
function(n){return new n.ContinuousDeploymentDetailsBlade(t,i,r.dataContext)},n)},i.prototype.ContinuousDeploymentDetailsPropertyPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/ContinuousDeploymentDetailsPropertyPart",
function(n){return new n.ContinuousDeploymentDetailsPropertyPart(t,i,r.dataContext)},n)},i.prototype.
ContinuousDeploymentDetailsLogPart=function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/ContinuousDeploymentDetailsLogPart",
function(n){return new n.ContinuousDeploymentDetailsLogPart(t,i,r.dataContext)},n)},i.prototype.ReDeploy=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/Commands/ReDeploy",
function(n){return new n.ReDeploy(t,i,r.dataContext)},n)},i.prototype.DeleteDeployment=function(t,i)
{var r=this;return this.loadViewModelAsync("../ContinuousDeployment/Commands/DeleteDeployment",function(
n){return new n.DeleteDeployment(t,i,r.dataContext)},n)},i.prototype.ContinuousDeploymentListBlade=function(
t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/ContinuousDeploymentListBlade",
function(n){return new n.ContinuousDeploymentListBlade(t,i,r.dataContext)},n)},i.prototype.ContinuousDeploymentListPart=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/ContinuousDeploymentListPart",
function(n){return new n.ContinuousDeploymentListPart(t,i,r.dataContext)},n)},i.prototype.ContinuousDeploymentDetailsLogEntryBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/ContinuousDeploymentDetailsLogEntryBlade",
function(n){return new n.ContinuousDeploymentDetailsLogEntryBlade(t,i,r.dataContext)},n)},i.prototype.
ContinuousDeploymentDetailsLogEntryPart=function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/ContinuousDeploymentDetailsLogEntryPart",
function(n){return new n.ContinuousDeploymentDetailsLogEntryPart(t,i,r.dataContext)},n)},i.prototype.
RegionPickerBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",
function(n){return new n.RegionPickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.RegionPickerListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Creates/LocationPickerListViewModel",
function(n){return new n.RegionPickerListViewModel(t,i,r.dataContext)},n)},i.prototype.WorkerPoolPickerBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WorkerPoolPickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.WorkerPoolPickerListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Creates/WorkerPoolPicker",function(
n){return new n.WorkerPoolPickerListViewModel(t,i,r.dataContext)},n)},i.prototype.WebsiteSlotsListBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsiteSlotsListBlade(t,i,r.dataContext)},n)},i.prototype.WebsiteSlotsListPart=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteSlotsListPart",function(n)
{return new n.WebsiteSlotsListPart(t,i,r.dataContext)},n)},i.prototype.WebsiteSwapSlotsPickerBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsiteSwapSlotsPickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.WebsiteSwapSlotsPickerListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteSwapSlotsPickerListViewModel",
function(n){return new n.WebsiteSwapSlotsPickerListViewModel(t,i,r.dataContext)},n)},i.prototype.CreateWordPressWizardBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../../Client/Create/ViewModels/Blades/CreateWordPressWizardBlade",
function(n){return new n.CreateWordPressWizardBlade(t,i,r.dataContext)},n)},i.prototype.CreateWordPressWizardPart=
function(t,i){var r=this;return this.loadViewModelAsync("../../Client/Create/ViewModels/Parts/CreateWordPressWizardPart",
function(n){return new n.CreateWordPressWizardPart(t,i,r.dataContext)},n)},i.prototype.VPNNetworkListBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../VPNNetwork/ViewModels/VPNNetworkListBlade",
function(n){return new n.VPNNetworkListBlade(t,i,r.dataContext)},n)},i.prototype.VPNNetworkListPart=
function(t,i){var r=this;return this.loadViewModelAsync("../VPNNetwork/ViewModels/VPNNetworkListPart",
function(n){return new n.VPNNetworkListPart(t,i,r.dataContext)},n)},i.prototype.VPNNetworkPropertiesBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../VPNNetwork/ViewModels/VPNNetworkPropertiesBlade",
function(n){return new n.VPNNetworkPropertiesBlade(t,i,r.dataContext)},n)},i.prototype.VPNNetworkPropertiesPart=
function(t,i){var r=this;return this.loadViewModelAsync("../VPNNetwork/ViewModels/VPNNetworkPropertiesPart",
function(n){return new n.VPNNetworkPropertiesPart(t,i,r.dataContext)},n)},i.prototype.WebsiteSwapSlotsFormBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.WebsiteSwapSlotsFormBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SlotSwapPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../SlotSwap/ViewModels/SlotSwapPartPickerViewModel",
function(n){return new n.SlotSwapPartViewModel(t,i,r.dataContext)},n)},i.prototype.SlotPreviewBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.SlotPreviewBlade(t,i,r.dataContext)},n)},i.prototype.SlotDiffsViewModel=function(t,i)
{var r=this;return this.loadViewModelAsync("../SlotSwap/ViewModels/SlotDiffsViewModel",function(n){return new
n.SlotDiffsViewModel(t,i,r.dataContext)},n)},i.prototype.SetupContinuousDeploymentBladeViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupContinuousDeploymentBladeViewModel",
function(n){return new n.SetupContinuousDeploymentBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
SetupContinuousDeploymentPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupContinuousDeploymentPartViewModel",
function(n){return new n.SetupContinuousDeploymentPartViewModel(t,i,r.dataContext)},n)},i.prototype.
ProviderPickerBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/ProviderPickerBladeViewModel",
function(n){return new n.ProviderPickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ProviderPickerPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/ProviderPickerPartViewModel",
function(n){return new n.ProviderPickerPartViewModel(t,i,r.dataContext)},n)},i.prototype.SetupBasicAuthenticationBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupBasicAuthenticationBladeViewModel",
function(n){return new n.SetupBasicAuthenticationBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
SetupBasicAuthenticationPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupBasicAuthenticationPartViewModel",
function(n){return new n.SetupBasicAuthenticationPartViewModel(t,i,r.dataContext)},n)},i.prototype.SetupOAuthBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupOAuthViewModels",
function(n){return new n.SetupOAuthBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SetupOAuthPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupOAuthViewModels",
function(n){return new n.SetupOAuthPartViewModel(t,i,r.dataContext)},n)},i.prototype.SetupOAuthOrgBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupOAuthOrgViewModels",
function(n){return new n.SetupOAuthOrgBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SetupOAuthOrgPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupOAuthOrgViewModels",
function(n){return new n.SetupOAuthOrgPartViewModel(t,i,r.dataContext)},n)},i.prototype.SetupOAuthProjectBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupOAuthProjectViewModels",
function(n){return new n.SetupOAuthProjectBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SetupOAuthProjectPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupOAuthProjectViewModels",
function(n){return new n.SetupOAuthProjectPartViewModel(t,i,r.dataContext)},n)},i.prototype.SetupOAuthBranchBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupOAuthBranchViewModels",
function(n){return new n.SetupOAuthBranchBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SetupOAuthBranchPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupOAuthBranchViewModels",
function(n){return new n.SetupOAuthBranchPartViewModel(t,i,r.dataContext)},n)},i.prototype.SetupDropboxFolderBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupDropboxFolderViewModels",
function(n){return new n.SetupDropboxFolderBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SetupDropboxFolderPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/ViewModels/SetupDropboxFolderViewModels",
function(n){return new n.SetupDropboxFolderPartViewModel(t,i,r.dataContext)},n)},i.prototype.WebsiteSettingsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/WebsiteSettingsBladeViewModel",
function(n){return new n.WebsiteSettingsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.WebsiteSettingsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteSettingsPartViewModel",
function(n){return new n.WebsiteSettingsPartViewModel(t,i,r.dataContext)},n)},i.prototype.EasyAuthenticationBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Blades/BladeViewModels",function(
n){return new n.EasyAuthenticationBlade(t,i,r.dataContext)},n)},i.prototype.EasyAuthenticationPart=function(
t,i){var r=this;return this.loadViewModelAsync("../EasyAuth/ViewModel/EasyAuthenticationPart",function(
n){return new n.EasyAuthenticationPart(t,i,r.dataContext)},n)},i.prototype.SaveEasyAuthCommand=function(
t,i){var r=this;return this.loadViewModelAsync("../EasyAuth/Commands/SaveEasyAuthCommand",function(n)
{return new n.SaveEasyAuthCommand(t,i,r.dataContext)},n)},i.prototype.DiscardEasyAuthCommand=function(
t,i){var r=this;return this.loadViewModelAsync("../EasyAuth/Commands/DiscardEasyAuthCommand",function(
n){return new n.DiscardEasyAuthCommand(t,i,r.dataContext)},n)},i.prototype.AppServiceEnvironmentVNETBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/AppServiceEnvironmentVNETBlade",
function(n){return new n.AppServiceEnvironmentVNETBlade(t,i,r.dataContext)},n)},i.prototype.AppServiceEnvironmentVNETPart=
function(t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/AppServiceEnvironmentVNETPart",
function(n){return new n.AppServiceEnvironmentVNETPart(t,i,r.dataContext)},n)},i.prototype.SubnetPickerBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/SubnetPickerBlade",
function(n){return new n.SubnetPickerBlade(t,i,r.dataContext)},n)},i.prototype.SubnetPicker=function(
t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/SubnetPickerList",
function(n){return new n.SubnetPicker(t,i,r.dataContext)},n)},i.prototype.VNETPickerBlade=function(t,
i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/VNETPickerBlade",
function(n){return new n.VNETPickerBlade(t,i,r.dataContext)},n)},i.prototype.VNETPicker=function(t,i)
{var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/VnetPickerList",
function(n){return new n.VNETPicker(t,i,r.dataContext)},n)},i.prototype.SubnetQuickCreateBlade=function(
t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/SubnetQuickCreateBlade",
function(n){return new n.SubnetQuickCreateBlade(t,i,r.dataContext)},n)},i.prototype.SubnetQuickCreate=
function(t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/SubnetQuickCreatePart",
function(n){return new n.SubnetQuickCreate(t,i,r.dataContext)},n)},i.prototype.VNETQuickCreateBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/VNETQuickCreateBlade",
function(n){return new n.VNETQuickCreateBlade(t,i,r.dataContext)},n)},i.prototype.VNETQuickCreate=function(
t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/VNETQuickCreatePart",
function(n){return new n.VNETQuickCreate(t,i,r.dataContext)},n)},i.prototype.AppServiceEnvironmentScaleBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/AppServiceEnvironmentScaleBlade",
function(n){return new n.AppServiceEnvironmentScaleBlade(t,i,r.dataContext)},n)},i.prototype.AppServiceEnvironmentScalePart=
function(t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/AppServiceEnvironmentScalePart",
function(n){return new n.AppServiceEnvironmentScalePart(t,i,r.dataContext)},n)},i.prototype.ASESpecPickerBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/ASESpecPickerBlade",
function(n){return new n.ASESpecPickerBlade(t,i,r.dataContext)},n)},i.prototype.ASESpecPickerExtender=
function(t,i){var r=this;return this.loadViewModelAsync("../AppServiceEnvironment/Create/ViewModels/ASESpecPickerExtender",
function(n){return new n.ASESpecPickerExtender(t,i,r.dataContext)},n)},i.prototype.WebsiteResourceIdAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Adapters/WebsiteResourceIdAdapterPartViewModel",
function(n){return new n.WebsiteResourceIdAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.RequestsAndErrorsAdapterViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Adapters/RequestsAndErrorsAdapterViewModel",
function(n){return new n.RequestsAndErrorsAdapterViewModel(t,i,r.dataContext)},n)},i.prototype.Http4xxAdapterViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Adapters/Http4xxAdapterViewModel",
function(n){return new n.Http4xxAdapterViewModel(t,i,r.dataContext)},n)},i.prototype.Http5xxAdapterViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Adapters/Http5xxAdapterViewModel",
function(n){return new n.Http5xxAdapterViewModel(t,i,r.dataContext)},n)},i.prototype.CpuPercentageAdapterViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Adapters/CpuPercentageAdapterViewModel",
function(n){return new n.CpuPercentageAdapterViewModel(t,i,r.dataContext)},n)},i.prototype.WebsiteUsageGaugeAdapterViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Adapters/WebsiteUsageGaugeAdapterViewModel",
function(n){return new n.WebsiteUsageGaugeAdapterViewModel(t,i,r.dataContext)},n)},i.prototype.WebTestsWebSiteAdapterViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Adapters/WebTestsWebSiteAdapterViewModel",
function(n){return new n.WebTestsWebSiteAdapterViewModel(t,i,r.dataContext)},n)},i.prototype.AlertsSummaryAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Adapters/AlertsSummaryAdapterPartViewModel",
function(n){return new n.AlertsSummaryAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.CurrentSpendAdapterViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Adapters/CurrentSpendAdapterViewModel",
function(n){return new n.CurrentSpendAdapterViewModel(t,i,r.dataContext)},n)},i.prototype.EventsSummaryAdapterViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Adapters/EventsSummaryAdapterViewModel",
function(n){return new n.EventsSummaryAdapterViewModel(t,i,r.dataContext)},n)},i.prototype.HostingPlanAdaptedScaleSummaryPart=
function(t,i){var r=this;return this.loadViewModelAsync("../../Client/Adapters/Parts/HostingPlanAdaptedScaleSummaryPart",
function(n){return new n.HostingPlanAdaptedScaleSummaryPart(t,i,r.dataContext)},n)},i.prototype.SyncCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousDeployment/Commands/Sync",function(
n){return new n.SyncCommand(t,i,r.dataContext)},n)},i.prototype.DisconnectScmCommandViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/DisconnectScmCommandViewModel",
function(n){return new n.DisconnectScmCommandViewModel(t,i,r.dataContext)},n)},i.prototype.BrowseToExtension=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/SiteExtensionsCommands/BrowseToExtension",
function(n){return new n.BrowseToExtension(t,i,r.dataContext)},n)},i.prototype.UpdateExtension=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/SiteExtensionsCommands/UpdateExtension",
function(n){return new n.UpdateExtension(t,i,r.dataContext)},n)},i.prototype.DeleteExtension=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/SiteExtensionsCommands/DeleteExtension",
function(n){return new n.DeleteExtension(t,i,r.dataContext)},n)},i.prototype.WebJobRunCommand=function(
t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/WebJobRunCommand",function(n)
{return new n.WebJobRunCommand(t,i,r.dataContext)},n)},i.prototype.WebJobDeleteCommand=function(t,i)
{var r=this;return this.loadViewModelAsync("../ViewModels/Commands/WebJobDeleteCommand",function(n){
return new n.WebJobDeleteCommand(t,i,r.dataContext)},n)},i.prototype.WebJobStartCommand=function(t,i)
{var r=this;return this.loadViewModelAsync("../ViewModels/Commands/WebJobStartCommand",function(n){return new
n.WebJobStartCommand(t,i,r.dataContext)},n)},i.prototype.WebJobStopCommand=function(t,i){var r=this;
return this.loadViewModelAsync("../ViewModels/Commands/WebJobStopCommand",function(n){return new n.WebJobStopCommand(
t,i,r.dataContext)},n)},i.prototype.SyncPrimaryKeyCommandViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../ViewModels/Commands/PortBridgeCommands/SyncPrimaryKeyCommandViewModel",function(
n){return new n.SyncPrimaryKeyCommandViewModel(t,i,r.dataContext)},n)},i.prototype.SyncSecondaryKeyCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/PortBridgeCommands/SyncSecondaryKeyCommandViewModel",
function(n){return new n.SyncSecondaryKeyCommandViewModel(t,i,r.dataContext)},n)},i.prototype.UnRegisterPBEndpointCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/PortBridgeCommands/UnRegisterPBEndpointCommandViewModel",
function(n){return new n.UnRegisterPBEndpointCommandViewModel(t,i,r.dataContext)},n)},i.prototype.DeletePBEndpointCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Commands/PortBridgeCommands/DeletePBEndpointCommandViewModel",
function(n){return new n.DeletePBEndpointCommandViewModel(t,i,r.dataContext)},n)},i.prototype.WebsiteBrowseViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/WebsiteBrowseViewModel",function(
n){return new n.WebsiteBrowseViewModel(t,i,r.dataContext)},n)},i.prototype.WebsiteGridColumnsService=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/WebsiteGridColumnsService",function(
n){return new n.WebsiteGridColumnsService(t,i,r.dataContext)},n)},i.prototype.WebsiteResourceTypeService=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteResourceTypeService",
function(n){return new n.WebsiteResourceTypeService(t,i,r.dataContext)},n)},i.prototype.WebsiteResourceMappingViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebsiteResourceMappingViewModel",
function(n){return new n.WebsiteResourceMappingViewModel(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanBrowseService=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/WebHostingPlanBrowseService",function(
n){return new n.WebHostingPlanBrowseService(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanGridColumnsService=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/WebHostingPlanGridColumnsService",
function(n){return new n.WebHostingPlanGridColumnsService(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanResourceTypeService=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebHostingPlanResourceTypeService",
function(n){return new n.WebHostingPlanResourceTypeService(t,i,r.dataContext)},n)},i.prototype.WebHostingPlanResourceMappingViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/WebHostingPlanResourceMappingViewModel",
function(n){return new n.WebHostingPlanResourceMappingViewModel(t,i,r.dataContext)},n)},i.prototype.
BizTalkResourceTypeService=function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BizTalkResourceTypeService",
function(n){return new n.BizTalkResourceTypeService(t,i,r.dataContext)},n)},i.prototype.BizTalkResourceMappingViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ViewModels/Parts/BizTalkResourceMappingViewModel",
function(n){return new n.BizTalkResourceMappingViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase),r;t.SharedViewModelFactoriesBase=i;r=function(){function n(){}
return n.prototype.SetSharedViewModelFactories=function(n){this._SharedViewModelFactories=n},n.prototype.
Shared=function(){return this._SharedViewModelFactories=this._SharedViewModelFactories||new i,this._SharedViewModelFactories}
,n.prototype.BackupSummaryPartViewModel=function(n,t){return this.Shared().BackupSummaryPartViewModel(
n,t)},n.prototype.BizTalkPart=function(n,t){return this.Shared().BizTalkPart(n,t)},n.prototype.SingleWebsitePart=
function(n,t){return this.Shared().SingleWebsitePart(n,t)},n.prototype.SingleWebHostingPlanPart=function(
n,t){return this.Shared().SingleWebHostingPlanPart(n,t)},n.prototype.WebsiteCurrentSpendPart=function(
n,t){return this.Shared().WebsiteCurrentSpendPart(n,t)},n.prototype.WebsiteScaleYourSitePart=function(
n,t){return this.Shared().WebsiteScaleYourSitePart(n,t)},n.prototype.RoutingRulesSummaryPart=function(
n,t){return this.Shared().RoutingRulesSummaryPart(n,t)},n.prototype.SiteExtensionsPartViewModel=function(
n,t){return this.Shared().SiteExtensionsPartViewModel(n,t)},n.prototype.ProcessExplorerLauncherPart=
function(n,t){return this.Shared().ProcessExplorerLauncherPart(n,t)},n.prototype.SingleSiteExtensionPart=
function(n,t){return this.Shared().SingleSiteExtensionPart(n,t)},n.prototype.WebsiteQuickStartLauncherPart=
function(n,t){return this.Shared().WebsiteQuickStartLauncherPart(n,t)},n.prototype.WebsitePropertySheetLauncherPart=
function(n,t){return this.Shared().WebsitePropertySheetLauncherPart(n,t)},n.prototype.WebsiteSettingsLauncherPartViewModel=
function(n,t){return this.Shared().WebsiteSettingsLauncherPartViewModel(n,t)},n.prototype.LogStreamLauncherPart=
function(n,t){return this.Shared().LogStreamLauncherPart(n,t)},n.prototype.WebsiteLogsLauncherPart=function(
n,t){return this.Shared().WebsiteLogsLauncherPart(n,t)},n.prototype.WebsiteSlotsSummaryPart=function(
n,t){return this.Shared().WebsiteSlotsSummaryPart(n,t)},n.prototype.ConsoleLauncherPart=function(n,t)
{return this.Shared().ConsoleLauncherPart(n,t)},n.prototype.WebjobsPartViewModel=function(n,t){return this.
Shared().WebjobsPartViewModel(n,t)},n.prototype.WebsitePortBridgeSummaryPart=function(n,t){return this.
Shared().WebsitePortBridgeSummaryPart(n,t)},n.prototype.WebsitePublishCredentialsPart=function(n,t){
return this.Shared().WebsitePublishCredentialsPart(n,t)},n.prototype.WebsiteConfigLauncherSiteSettingsPart=
function(n,t){return this.Shared().WebsiteConfigLauncherSiteSettingsPart(n,t)},n.prototype.WebsiteConfigLauncherDomainsAndSslPart=
function(n,t){return this.Shared().WebsiteConfigLauncherDomainsAndSslPart(n,t)},n.prototype.TrafficManagerViewModel=
function(n,t){return this.Shared().TrafficManagerViewModel(n,t)},n.prototype.BlankPartViewModel=function(
n,t){return this.Shared().BlankPartViewModel(n,t)},n.prototype.WebsiteSetupVPNNetworkPart=function(n,
t){return this.Shared().WebsiteSetupVPNNetworkPart(n,t)},n.prototype.SyncCertificatesCommand=function(
n,t){return this.Shared().SyncCertificatesCommand(n,t)},n.prototype.DisconnectNetworkCommand=function(
n,t){return this.Shared().DisconnectNetworkCommand(n,t)},n.prototype.WHPSetupVPNNetworkPart=function(
n,t){return this.Shared().WHPSetupVPNNetworkPart(n,t)},n.prototype.SetupContinuousDeploymentLauncherPart=
function(n,t){return this.Shared().SetupContinuousDeploymentLauncherPart(n,t)},n.prototype.ContinuousDeploymentInfoPart=
function(n,t){return this.Shared().ContinuousDeploymentInfoPart(n,t)},n.prototype.AddSiteExtensionWizardBlade=
function(n,t){return this.Shared().AddSiteExtensionWizardBlade(n,t)},n.prototype.AddSiteExtensionWizardBladeWizard=
function(n,t){return this.Shared().AddSiteExtensionWizardBladeWizard(n,t)},n.prototype.AddSiteExtensionWizardPickExtensionBlade=
function(n,t){return this.Shared().AddSiteExtensionWizardPickExtensionBlade(n,t)},n.prototype.AddSiteExtensionWizardPickExtension=
function(n,t){return this.Shared().AddSiteExtensionWizardPickExtension(n,t)},n.prototype.AddSiteExtensionWizardAcceptLegalTermsBlade=
function(n,t){return this.Shared().AddSiteExtensionWizardAcceptLegalTermsBlade(n,t)},n.prototype.AddSiteExtensionWizardAcceptLegalTerms=
function(n,t){return this.Shared().AddSiteExtensionWizardAcceptLegalTerms(n,t)},n.prototype.AppServiceEnvironmentCreateWizardBlade=
function(n,t){return this.Shared().AppServiceEnvironmentCreateWizardBlade(n,t)},n.prototype.CreateAppHostingEnvironmentWizardPartViewModel=
function(n,t){return this.Shared().CreateAppHostingEnvironmentWizardPartViewModel(n,t)},n.prototype.
BackupBladeViewModel=function(n,t){return this.Shared().BackupBladeViewModel(n,t)},n.prototype.BackupHistoryChartPart=
function(n,t){return this.Shared().BackupHistoryChartPart(n,t)},n.prototype.BackupConfigurationPickerPart=
function(n,t){return this.Shared().BackupConfigurationPickerPart(n,t)},n.prototype.BackupConfigurationDatabasePickerPart=
function(n,t){return this.Shared().BackupConfigurationDatabasePickerPart(n,t)},n.prototype.BackupConfigurationPart=
function(n,t){return this.Shared().BackupConfigurationPart(n,t)},n.prototype.BackupHistoryGridPart=function(
n,t){return this.Shared().BackupHistoryGridPart(n,t)},n.prototype.SaveBackupConfigCommand=function(n,
t){return this.Shared().SaveBackupConfigCommand(n,t)},n.prototype.DiscardBackupConfigCommand=function(
n,t){return this.Shared().DiscardBackupConfigCommand(n,t)},n.prototype.BackupCommand=function(n,t){return this.
Shared().BackupCommand(n,t)},n.prototype.RestoreCommand=function(n,t){return this.Shared().RestoreCommand(
n,t)},n.prototype.BackupDetailBladeViewModel=function(n,t){return this.Shared().BackupDetailBladeViewModel(
n,t)},n.prototype.BackupDetailPart=function(n,t){return this.Shared().BackupDetailPart(n,t)},n.prototype.
ConsoleBlade=function(n,t){return this.Shared().ConsoleBlade(n,t)},n.prototype.Console=function(n,t)
{return this.Shared().Console(n,t)},n.prototype.WebsiteCreateAppSettingsStepBladeViewModel=function(
n,t){return this.Shared().WebsiteCreateAppSettingsStepBladeViewModel(n,t)},n.prototype.CreateWebsiteAppSettingsStep=
function(n,t){return this.Shared().CreateWebsiteAppSettingsStep(n,t)},n.prototype.WebsiteAndDatabaseCreateConnectionStringStepBladeViewModel=
function(n,t){return this.Shared().WebsiteAndDatabaseCreateConnectionStringStepBladeViewModel(n,t)},
n.prototype.WebsiteAndDatabaseCreateConnectionStringStepViewModel=function(n,t){return this.Shared().
WebsiteAndDatabaseCreateConnectionStringStepViewModel(n,t)},n.prototype.CreateWebsiteAndSqlWizardBlade=
function(n,t){return this.Shared().CreateWebsiteAndSqlWizardBlade(n,t)},n.prototype.CreateWebsiteAndSqlWizardPart=
function(n,t){return this.Shared().CreateWebsiteAndSqlWizardPart(n,t)},n.prototype.CreateWebsiteAndMySqlWizardBlade=
function(n,t){return this.Shared().CreateWebsiteAndMySqlWizardBlade(n,t)},n.prototype.CreateWebsiteAndMySqlWizardPart=
function(n,t){return this.Shared().CreateWebsiteAndMySqlWizardPart(n,t)},n.prototype.CreateWebsiteWizardBlade=
function(n,t){return this.Shared().CreateWebsiteWizardBlade(n,t)},n.prototype.CreateWebsiteWizardPart=
function(n,t){return this.Shared().CreateWebsiteWizardPart(n,t)},n.prototype.ResetFtpCredentialsBlade=
function(n,t){return this.Shared().ResetFtpCredentialsBlade(n,t)},n.prototype.FtpCredentialsPart=function(
n,t){return this.Shared().FtpCredentialsPart(n,t)},n.prototype.SaveFtpCredentialsCommand=function(n,
t){return this.Shared().SaveFtpCredentialsCommand(n,t)},n.prototype.DiscardFtpCredentialsCommand=function(
n,t){return this.Shared().DiscardFtpCredentialsCommand(n,t)},n.prototype.HybridConnectionPropertiesBladeViewModel=
function(n,t){return this.Shared().HybridConnectionPropertiesBladeViewModel(n,t)},n.prototype.HybridConnectionPropertiesPartViewmodel=
function(n,t){return this.Shared().HybridConnectionPropertiesPartViewmodel(n,t)},n.prototype.LogStreamBlade=
function(n,t){return this.Shared().LogStreamBlade(n,t)},n.prototype.LogStreamPart=function(n,t){return this.
Shared().LogStreamPart(n,t)},n.prototype.ApplicationLogsCommandViewModel=function(n,t){return this.Shared(
).ApplicationLogsCommandViewModel(n,t)},n.prototype.WebServerLogsCommandViewModel=function(n,t){return this.
Shared().WebServerLogsCommandViewModel(n,t)},n.prototype.PauseStreamingLogCommandViewModel=function(
n,t){return this.Shared().PauseStreamingLogCommandViewModel(n,t)},n.prototype.StartStreamingLogCommandViewModel=
function(n,t){return this.Shared().StartStreamingLogCommandViewModel(n,t)},n.prototype.ClearStreamingLogCommandViewModel=
function(n,t){return this.Shared().ClearStreamingLogCommandViewModel(n,t)},n.prototype.PortBridgeItemDetailsBladeViewModel=
function(n,t){return this.Shared().PortBridgeItemDetailsBladeViewModel(n,t)},n.prototype.HybridConnectionPropertiesLauncherPartViewmodel=
function(n,t){return this.Shared().HybridConnectionPropertiesLauncherPartViewmodel(n,t)},n.prototype.
HybridConnectionSummaryPartViewmodel=function(n,t){return this.Shared().HybridConnectionSummaryPartViewmodel(
n,t)},n.prototype.InstanceBrowserBlade=function(n,t){return this.Shared().InstanceBrowserBlade(n,t)}
,n.prototype.InstanceBrowserPart=function(n,t){return this.Shared().InstanceBrowserPart(n,t)},n.prototype.
ProcessExplorerBlade=function(n,t){return this.Shared().ProcessExplorerBlade(n,t)},n.prototype.ProcessGridPart=
function(n,t){return this.Shared().ProcessGridPart(n,t)},n.prototype.FindHandleCommandViewModel=function(
n,t){return this.Shared().FindHandleCommandViewModel(n,t)},n.prototype.ProcessFindHandleBlade=function(
n,t){return this.Shared().ProcessFindHandleBlade(n,t)},n.prototype.ProcessHandlesGridPart=function(n,
t){return this.Shared().ProcessHandlesGridPart(n,t)},n.prototype.ProcessDetailsBlade=function(n,t){return this.
Shared().ProcessDetailsBlade(n,t)},n.prototype.ProcessSummaryPart=function(n,t){return this.Shared().
ProcessSummaryPart(n,t)},n.prototype.ProcessHandlesSummaryPart=function(n,t){return this.Shared().ProcessHandlesSummaryPart(
n,t)},n.prototype.ProcessModulesSummaryPart=function(n,t){return this.Shared().ProcessModulesSummaryPart(
n,t)},n.prototype.ProcessCPUUsageChart=function(n,t){return this.Shared().ProcessCPUUsageChart(n,t)}
,n.prototype.ProcessThreadsChart=function(n,t){return this.Shared().ProcessThreadsChart(n,t)},n.prototype.
ProcessMemoryPart=function(n,t){return this.Shared().ProcessMemoryPart(n,t)},n.prototype.ProcessWorkingSetChart=
function(n,t){return this.Shared().ProcessWorkingSetChart(n,t)},n.prototype.ProcessVirtualMemoryChart=
function(n,t){return this.Shared().ProcessVirtualMemoryChart(n,t)},n.prototype.KillProcessCommandViewModel=
function(n,t){return this.Shared().KillProcessCommandViewModel(n,t)},n.prototype.ModulesBlade=function(
n,t){return this.Shared().ModulesBlade(n,t)},n.prototype.ProcessModulesPart=function(n,t){return this.
Shared().ProcessModulesPart(n,t)},n.prototype.ThreadsBlade=function(n,t){return this.Shared().ThreadsBlade(
n,t)},n.prototype.ProcessThreadsPart=function(n,t){return this.Shared().ProcessThreadsPart(n,t)},n.prototype.
WorkingSetDetailsBlade=function(n,t){return this.Shared().WorkingSetDetailsBlade(n,t)},n.prototype.ProcessWorkingSetPart=
function(n,t){return this.Shared().ProcessWorkingSetPart(n,t)},n.prototype.VirtualMemoryDetailsBlade=
function(n,t){return this.Shared().VirtualMemoryDetailsBlade(n,t)},n.prototype.ProcessVirtualMemoryPart=
function(n,t){return this.Shared().ProcessVirtualMemoryPart(n,t)},n.prototype.CPUUsageDetailsBlade=function(
n,t){return this.Shared().CPUUsageDetailsBlade(n,t)},n.prototype.ProcessCPUUsagePart=function(n,t){return this.
Shared().ProcessCPUUsagePart(n,t)},n.prototype.HandlesDetailsBlade=function(n,t){return this.Shared(
).HandlesDetailsBlade(n,t)},n.prototype.ProcessHandlesPart=function(n,t){return this.Shared().ProcessHandlesPart(
n,t)},n.prototype.ModuleDetailsBlade=function(n,t){return this.Shared().ModuleDetailsBlade(n,t)},n.prototype.
ProcessModuleDetailsPart=function(n,t){return this.Shared().ProcessModuleDetailsPart(n,t)},n.prototype.
ThreadDetailsBlade=function(n,t){return this.Shared().ThreadDetailsBlade(n,t)},n.prototype.ProcessThreadDetailsPart=
function(n,t){return this.Shared().ProcessThreadDetailsPart(n,t)},n.prototype.PropertySheetBladeViewModel=
function(n,t){return this.Shared().PropertySheetBladeViewModel(n,t)},n.prototype.WebsitePropertySheetPart=
function(n,t){return this.Shared().WebsitePropertySheetPart(n,t)},n.prototype.QuickStartBlade=function(
n,t){return this.Shared().QuickStartBlade(n,t)},n.prototype.WebsiteQuickStartWizardPart=function(n,t)
{return this.Shared().WebsiteQuickStartWizardPart(n,t)},n.prototype.RestoreSettingsBladeViewModel=function(
n,t){return this.Shared().RestoreSettingsBladeViewModel(n,t)},n.prototype.RestoreSettingsPart=function(
n,t){return this.Shared().RestoreSettingsPart(n,t)},n.prototype.RestoreCreateWebsiteBladeViewModel=function(
n,t){return this.Shared().RestoreCreateWebsiteBladeViewModel(n,t)},n.prototype.RestoreCreateWebsitePart=
function(n,t){return this.Shared().RestoreCreateWebsitePart(n,t)},n.prototype.RestoreDatabasesBladeViewModel=
function(n,t){return this.Shared().RestoreDatabasesBladeViewModel(n,t)},n.prototype.RestoreDatabasesPart=
function(n,t){return this.Shared().RestoreDatabasesPart(n,t)},n.prototype.DatabaseRestoreOptionsBladeViewModel=
function(n,t){return this.Shared().DatabaseRestoreOptionsBladeViewModel(n,t)},n.prototype.DatabaseRestoreOptionsPart=
function(n,t){return this.Shared().DatabaseRestoreOptionsPart(n,t)},n.prototype.SiteExtensionItemDetailsBlade=
function(n,t){return this.Shared().SiteExtensionItemDetailsBlade(n,t)},n.prototype.SiteExtensionsDetailsPart=
function(n,t){return this.Shared().SiteExtensionsDetailsPart(n,t)},n.prototype.SiteExtensionsListBlade=
function(n,t){return this.Shared().SiteExtensionsListBlade(n,t)},n.prototype.SiteExtensionsListPart=
function(n,t){return this.Shared().SiteExtensionsListPart(n,t)},n.prototype.LaunchAddSiteExtension=function(
n,t){return this.Shared().LaunchAddSiteExtension(n,t)},n.prototype.UploadCertificateBlade=function(n,
t){return this.Shared().UploadCertificateBlade(n,t)},n.prototype.WebsiteConfigFormUploadCertificatePart=
function(n,t){return this.Shared().WebsiteConfigFormUploadCertificatePart(n,t)},n.prototype.SaveCertificateCommand=
function(n,t){return this.Shared().SaveCertificateCommand(n,t)},n.prototype.DiscardCertificateCommand=
function(n,t){return this.Shared().DiscardCertificateCommand(n,t)},n.prototype.WebsiteUsageBlade=function(
n,t){return this.Shared().WebsiteUsageBlade(n,t)},n.prototype.WebHostingPlanUsageGraphChartPart=function(
n,t){return this.Shared().WebHostingPlanUsageGraphChartPart(n,t)},n.prototype.UsageGaugeDetailPart=function(
n,t){return this.Shared().UsageGaugeDetailPart(n,t)},n.prototype.UsageGaugeBlade=function(n,t){return this.
Shared().UsageGaugeBlade(n,t)},n.prototype.WebHostingPlanDashboardBlade=function(n,t){return this.Shared(
).WebHostingPlanDashboardBlade(n,t)},n.prototype.WebHostingPlanQuickStartLauncherPart=function(n,t){
return this.Shared().WebHostingPlanQuickStartLauncherPart(n,t)},n.prototype.WebHostingPlanPropertySheetLauncherPart=
function(n,t){return this.Shared().WebHostingPlanPropertySheetLauncherPart(n,t)},n.prototype.WebHostingPlanQuotaSummaryPart=
function(n,t){return this.Shared().WebHostingPlanQuotaSummaryPart(n,t)},n.prototype.WebHostingPlanPricingTierLauncherExtender=
function(n,t){return this.Shared().WebHostingPlanPricingTierLauncherExtender(n,t)},n.prototype.DeleteWebHostingPlanCommandViewModel=
function(n,t){return this.Shared().DeleteWebHostingPlanCommandViewModel(n,t)},n.prototype.WebHostingPlanPickerBladeViewModel=
function(n,t){return this.Shared().WebHostingPlanPickerBladeViewModel(n,t)},n.prototype.WebHostingPlanPickerListViewModel=
function(n,t){return this.Shared().WebHostingPlanPickerListViewModel(n,t)},n.prototype.CreateWebHostingPlanBladeViewModel=
function(n,t){return this.Shared().CreateWebHostingPlanBladeViewModel(n,t)},n.prototype.CreateWebHostingPlanFormPartViewModel=
function(n,t){return this.Shared().CreateWebHostingPlanFormPartViewModel(n,t)},n.prototype.WebHostingPlanPickerPart=
function(n,t){return this.Shared().WebHostingPlanPickerPart(n,t)},n.prototype.WebsiteSpecPickerBlade=
function(n,t){return this.Shared().WebsiteSpecPickerBlade(n,t)},n.prototype.WebsiteSpecPickerExtender=
function(n,t){return this.Shared().WebsiteSpecPickerExtender(n,t)},n.prototype.WebHostingPlanDetailUsagePart=
function(n,t){return this.Shared().WebHostingPlanDetailUsagePart(n,t)},n.prototype.WebHostingPlanPropertySheetBladeViewModel=
function(n,t){return this.Shared().WebHostingPlanPropertySheetBladeViewModel(n,t)},n.prototype.WebHostingPlanPropertySheetPart=
function(n,t){return this.Shared().WebHostingPlanPropertySheetPart(n,t)},n.prototype.WebHostingPlanQuickStartBlade=
function(n,t){return this.Shared().WebHostingPlanQuickStartBlade(n,t)},n.prototype.WebHostingPlanQuickStartWizardPart=
function(n,t){return this.Shared().WebHostingPlanQuickStartWizardPart(n,t)},n.prototype.WebJobsAddBlade=
function(n,t){return this.Shared().WebJobsAddBlade(n,t)},n.prototype.WebJobsAddPart=function(n,t){return this.
Shared().WebJobsAddPart(n,t)},n.prototype.WebJobsListBlade=function(n,t){return this.Shared().WebJobsListBlade(
n,t)},n.prototype.WebJobsListPart=function(n,t){return this.Shared().WebJobsListPart(n,t)},n.prototype.
WebJobsAddCommand=function(n,t){return this.Shared().WebJobsAddCommand(n,t)},n.prototype.WebsiteAddSlotBlade=
function(n,t){return this.Shared().WebsiteAddSlotBlade(n,t)},n.prototype.WebsiteAddSlotPart=function(
n,t){return this.Shared().WebsiteAddSlotPart(n,t)},n.prototype.WebsiteConfigSiteSettingsBlade=function(
n,t){return this.Shared().WebsiteConfigSiteSettingsBlade(n,t)},n.prototype.WebsiteConfigFormGeneralSettingsPart=
function(n,t){return this.Shared().WebsiteConfigFormGeneralSettingsPart(n,t)},n.prototype.WebsiteConfigFormAutoSwapPart=
function(n,t){return this.Shared().WebsiteConfigFormAutoSwapPart(n,t)},n.prototype.WebsiteConfigFormDebuggingPart=
function(n,t){return this.Shared().WebsiteConfigFormDebuggingPart(n,t)},n.prototype.WebsiteConfigFormAppSettingsPart=
function(n,t){return this.Shared().WebsiteConfigFormAppSettingsPart(n,t)},n.prototype.WebsiteConfigFormConnectionStringsPart=
function(n,t){return this.Shared().WebsiteConfigFormConnectionStringsPart(n,t)},n.prototype.WebsiteConfigFormDefaultDocumentsPart=
function(n,t){return this.Shared().WebsiteConfigFormDefaultDocumentsPart(n,t)},n.prototype.WebsiteConfigFormHandlerMappingsPart=
function(n,t){return this.Shared().WebsiteConfigFormHandlerMappingsPart(n,t)},n.prototype.WebsiteConfigFormVirtualApplicationsAndDirectoriesPart=
function(n,t){return this.Shared().WebsiteConfigFormVirtualApplicationsAndDirectoriesPart(n,t)},n.prototype.
SaveSiteSettingsCommand=function(n,t){return this.Shared().SaveSiteSettingsCommand(n,t)},n.prototype.
DiscardSiteSettingsCommand=function(n,t){return this.Shared().DiscardSiteSettingsCommand(n,t)},n.prototype.
WebsiteConfigSSLSettingsBlade=function(n,t){return this.Shared().WebsiteConfigSSLSettingsBlade(n,t)}
,n.prototype.WebsiteConfigFormCertificatesPart=function(n,t){return this.Shared().WebsiteConfigFormCertificatesPart(
n,t)},n.prototype.WebsiteConfigFormDomainsPart=function(n,t){return this.Shared().WebsiteConfigFormDomainsPart(
n,t)},n.prototype.WebsiteConfigFormSslBindingPart=function(n,t){return this.Shared().WebsiteConfigFormSslBindingPart(
n,t)},n.prototype.SaveSSLCommand=function(n,t){return this.Shared().SaveSSLCommand(n,t)},n.prototype.
DiscardSSLCommand=function(n,t){return this.Shared().DiscardSSLCommand(n,t)},n.prototype.WebsiteLinkedDatabasesBladeViewModel=
function(n,t){return this.Shared().WebsiteLinkedDatabasesBladeViewModel(n,t)},n.prototype.WebsiteLinkedDatabasesListViewModel=
function(n,t){return this.Shared().WebsiteLinkedDatabasesListViewModel(n,t)},n.prototype.WebsiteLogsBlade=
function(n,t){return this.Shared().WebsiteLogsBlade(n,t)},n.prototype.WebsiteLogsDownloadLogsPart=function(
n,t){return this.Shared().WebsiteLogsDownloadLogsPart(n,t)},n.prototype.WebsiteLogsPart=function(n,t)
{return this.Shared().WebsiteLogsPart(n,t)},n.prototype.SaveWebsiteLogsCommand=function(n,t){return this.
Shared().SaveWebsiteLogsCommand(n,t)},n.prototype.DiscardWebsiteLogsCommand=function(n,t){return this.
Shared().DiscardWebsiteLogsCommand(n,t)},n.prototype.WebsitePickerBladeViewModel=function(n,t){return this.
Shared().WebsitePickerBladeViewModel(n,t)},n.prototype.WebsitesListViewModel=function(n,t){return this.
Shared().WebsitesListViewModel(n,t)},n.prototype.ExistingWebsitesPickerBladeViewModel=function(n,t){
return this.Shared().ExistingWebsitesPickerBladeViewModel(n,t)},n.prototype.ExistingWebsitesPickerListViewModel=
function(n,t){return this.Shared().ExistingWebsitesPickerListViewModel(n,t)},n.prototype.WebsiteSlotsPickerBladeViewModel=
function(n,t){return this.Shared().WebsiteSlotsPickerBladeViewModel(n,t)},n.prototype.WebsiteSlotsListViewModel=
function(n,t){return this.Shared().WebsiteSlotsListViewModel(n,t)},n.prototype.WebsitePortBridgeListBlade=
function(n,t){return this.Shared().WebsitePortBridgeListBlade(n,t)},n.prototype.WebsitePortBridgeListPart=
function(n,t){return this.Shared().WebsitePortBridgeListPart(n,t)},n.prototype.LaunchAddPortBridgeEndpointCommand=
function(n,t){return this.Shared().LaunchAddPortBridgeEndpointCommand(n,t)},n.prototype.WebsiteRoutingRulesBlade=
function(n,t){return this.Shared().WebsiteRoutingRulesBlade(n,t)},n.prototype.RoutingRulesFormPart=function(
n,t){return this.Shared().RoutingRulesFormPart(n,t)},n.prototype.WebSiteRoutingRulesAddSlots=function(
n,t){return this.Shared().WebSiteRoutingRulesAddSlots(n,t)},n.prototype.SaveSiteRoutingSettingsCommand=
function(n,t){return this.Shared().SaveSiteRoutingSettingsCommand(n,t)},n.prototype.LaunchAddSlotCommand=
function(n,t){return this.Shared().LaunchAddSlotCommand(n,t)},n.prototype.WebsiteDashboardBlade=function(
n,t){return this.Shared().WebsiteDashboardBlade(n,t)},n.prototype.WebsiteApplicationProviderSetupPartExtender=
function(n,t){return this.Shared().WebsiteApplicationProviderSetupPartExtender(n,t)},n.prototype.WebsiteBladeResourceSummaryViewModel=
function(n,t){return this.Shared().WebsiteBladeResourceSummaryViewModel(n,t)},n.prototype.SettingsCommandViewModel=
function(n,t){return this.Shared().SettingsCommandViewModel(n,t)},n.prototype.BrowseCommandViewModel=
function(n,t){return this.Shared().BrowseCommandViewModel(n,t)},n.prototype.StartCommandViewModel=function(
n,t){return this.Shared().StartCommandViewModel(n,t)},n.prototype.StopCommandViewModel=function(n,t)
{return this.Shared().StopCommandViewModel(n,t)},n.prototype.SlotSwapCommand=function(n,t){return this.
Shared().SlotSwapCommand(n,t)},n.prototype.RestartCommandViewModel=function(n,t){return this.Shared(
).RestartCommandViewModel(n,t)},n.prototype.DeleteCommandViewModel=function(n,t){return this.Shared(
).DeleteCommandViewModel(n,t)},n.prototype.DownloadPublishProfileCommandViewModel=function(n,t){return this.
Shared().DownloadPublishProfileCommandViewModel(n,t)},n.prototype.ResetPublishProfileCommandViewModel=
function(n,t){return this.Shared().ResetPublishProfileCommandViewModel(n,t)},n.prototype.ChangeWebHostingPlanCommand=
function(n,t){return this.Shared().ChangeWebHostingPlanCommand(n,t)},n.prototype.ComingSoonBlade=function(
n,t){return this.Shared().ComingSoonBlade(n,t)},n.prototype.ComingSoonBladePartViewModel=function(n,
t){return this.Shared().ComingSoonBladePartViewModel(n,t)},n.prototype.BizTalkComingSoonPartViewModel=
function(n,t){return this.Shared().BizTalkComingSoonPartViewModel(n,t)},n.prototype.ContinuousDeploymentDetailsBlade=
function(n,t){return this.Shared().ContinuousDeploymentDetailsBlade(n,t)},n.prototype.ContinuousDeploymentDetailsPropertyPart=
function(n,t){return this.Shared().ContinuousDeploymentDetailsPropertyPart(n,t)},n.prototype.ContinuousDeploymentDetailsLogPart=
function(n,t){return this.Shared().ContinuousDeploymentDetailsLogPart(n,t)},n.prototype.ReDeploy=function(
n,t){return this.Shared().ReDeploy(n,t)},n.prototype.DeleteDeployment=function(n,t){return this.Shared(
).DeleteDeployment(n,t)},n.prototype.ContinuousDeploymentListBlade=function(n,t){return this.Shared(
).ContinuousDeploymentListBlade(n,t)},n.prototype.ContinuousDeploymentListPart=function(n,t){return this.
Shared().ContinuousDeploymentListPart(n,t)},n.prototype.ContinuousDeploymentDetailsLogEntryBlade=function(
n,t){return this.Shared().ContinuousDeploymentDetailsLogEntryBlade(n,t)},n.prototype.ContinuousDeploymentDetailsLogEntryPart=
function(n,t){return this.Shared().ContinuousDeploymentDetailsLogEntryPart(n,t)},n.prototype.RegionPickerBladeViewModel=
function(n,t){return this.Shared().RegionPickerBladeViewModel(n,t)},n.prototype.RegionPickerListViewModel=
function(n,t){return this.Shared().RegionPickerListViewModel(n,t)},n.prototype.WorkerPoolPickerBladeViewModel=
function(n,t){return this.Shared().WorkerPoolPickerBladeViewModel(n,t)},n.prototype.WorkerPoolPickerListViewModel=
function(n,t){return this.Shared().WorkerPoolPickerListViewModel(n,t)},n.prototype.WebsiteSlotsListBlade=
function(n,t){return this.Shared().WebsiteSlotsListBlade(n,t)},n.prototype.WebsiteSlotsListPart=function(
n,t){return this.Shared().WebsiteSlotsListPart(n,t)},n.prototype.WebsiteSwapSlotsPickerBladeViewModel=
function(n,t){return this.Shared().WebsiteSwapSlotsPickerBladeViewModel(n,t)},n.prototype.WebsiteSwapSlotsPickerListViewModel=
function(n,t){return this.Shared().WebsiteSwapSlotsPickerListViewModel(n,t)},n.prototype.CreateWordPressWizardBlade=
function(n,t){return this.Shared().CreateWordPressWizardBlade(n,t)},n.prototype.CreateWordPressWizardPart=
function(n,t){return this.Shared().CreateWordPressWizardPart(n,t)},n.prototype.VPNNetworkListBlade=function(
n,t){return this.Shared().VPNNetworkListBlade(n,t)},n.prototype.VPNNetworkListPart=function(n,t){return this.
Shared().VPNNetworkListPart(n,t)},n.prototype.VPNNetworkPropertiesBlade=function(n,t){return this.Shared(
).VPNNetworkPropertiesBlade(n,t)},n.prototype.VPNNetworkPropertiesPart=function(n,t){return this.Shared(
).VPNNetworkPropertiesPart(n,t)},n.prototype.WebsiteSwapSlotsFormBladeViewModel=function(n,t){return this.
Shared().WebsiteSwapSlotsFormBladeViewModel(n,t)},n.prototype.SlotSwapPartViewModel=function(n,t){return this.
Shared().SlotSwapPartViewModel(n,t)},n.prototype.SlotPreviewBlade=function(n,t){return this.Shared().
SlotPreviewBlade(n,t)},n.prototype.SlotDiffsViewModel=function(n,t){return this.Shared().SlotDiffsViewModel(
n,t)},n.prototype.SetupContinuousDeploymentBladeViewModel=function(n,t){return this.Shared().SetupContinuousDeploymentBladeViewModel(
n,t)},n.prototype.SetupContinuousDeploymentPartViewModel=function(n,t){return this.Shared().SetupContinuousDeploymentPartViewModel(
n,t)},n.prototype.ProviderPickerBladeViewModel=function(n,t){return this.Shared().ProviderPickerBladeViewModel(
n,t)},n.prototype.ProviderPickerPartViewModel=function(n,t){return this.Shared().ProviderPickerPartViewModel(
n,t)},n.prototype.SetupBasicAuthenticationBladeViewModel=function(n,t){return this.Shared().SetupBasicAuthenticationBladeViewModel(
n,t)},n.prototype.SetupBasicAuthenticationPartViewModel=function(n,t){return this.Shared().SetupBasicAuthenticationPartViewModel(
n,t)},n.prototype.SetupOAuthBladeViewModel=function(n,t){return this.Shared().SetupOAuthBladeViewModel(
n,t)},n.prototype.SetupOAuthPartViewModel=function(n,t){return this.Shared().SetupOAuthPartViewModel(
n,t)},n.prototype.SetupOAuthOrgBladeViewModel=function(n,t){return this.Shared().SetupOAuthOrgBladeViewModel(
n,t)},n.prototype.SetupOAuthOrgPartViewModel=function(n,t){return this.Shared().SetupOAuthOrgPartViewModel(
n,t)},n.prototype.SetupOAuthProjectBladeViewModel=function(n,t){return this.Shared().SetupOAuthProjectBladeViewModel(
n,t)},n.prototype.SetupOAuthProjectPartViewModel=function(n,t){return this.Shared().SetupOAuthProjectPartViewModel(
n,t)},n.prototype.SetupOAuthBranchBladeViewModel=function(n,t){return this.Shared().SetupOAuthBranchBladeViewModel(
n,t)},n.prototype.SetupOAuthBranchPartViewModel=function(n,t){return this.Shared().SetupOAuthBranchPartViewModel(
n,t)},n.prototype.SetupDropboxFolderBladeViewModel=function(n,t){return this.Shared().SetupDropboxFolderBladeViewModel(
n,t)},n.prototype.SetupDropboxFolderPartViewModel=function(n,t){return this.Shared().SetupDropboxFolderPartViewModel(
n,t)},n.prototype.WebsiteSettingsBladeViewModel=function(n,t){return this.Shared().WebsiteSettingsBladeViewModel(
n,t)},n.prototype.WebsiteSettingsPartViewModel=function(n,t){return this.Shared().WebsiteSettingsPartViewModel(
n,t)},n.prototype.EasyAuthenticationBlade=function(n,t){return this.Shared().EasyAuthenticationBlade(
n,t)},n.prototype.EasyAuthenticationPart=function(n,t){return this.Shared().EasyAuthenticationPart(n,
t)},n.prototype.SaveEasyAuthCommand=function(n,t){return this.Shared().SaveEasyAuthCommand(n,t)},n.prototype.
DiscardEasyAuthCommand=function(n,t){return this.Shared().DiscardEasyAuthCommand(n,t)},n.prototype.AppServiceEnvironmentVNETBlade=
function(n,t){return this.Shared().AppServiceEnvironmentVNETBlade(n,t)},n.prototype.AppServiceEnvironmentVNETPart=
function(n,t){return this.Shared().AppServiceEnvironmentVNETPart(n,t)},n.prototype.SubnetPickerBlade=
function(n,t){return this.Shared().SubnetPickerBlade(n,t)},n.prototype.SubnetPicker=function(n,t){return this.
Shared().SubnetPicker(n,t)},n.prototype.VNETPickerBlade=function(n,t){return this.Shared().VNETPickerBlade(
n,t)},n.prototype.VNETPicker=function(n,t){return this.Shared().VNETPicker(n,t)},n.prototype.SubnetQuickCreateBlade=
function(n,t){return this.Shared().SubnetQuickCreateBlade(n,t)},n.prototype.SubnetQuickCreate=function(
n,t){return this.Shared().SubnetQuickCreate(n,t)},n.prototype.VNETQuickCreateBlade=function(n,t){return this.
Shared().VNETQuickCreateBlade(n,t)},n.prototype.VNETQuickCreate=function(n,t){return this.Shared().VNETQuickCreate(
n,t)},n.prototype.AppServiceEnvironmentScaleBlade=function(n,t){return this.Shared().AppServiceEnvironmentScaleBlade(
n,t)},n.prototype.AppServiceEnvironmentScalePart=function(n,t){return this.Shared().AppServiceEnvironmentScalePart(
n,t)},n.prototype.ASESpecPickerBlade=function(n,t){return this.Shared().ASESpecPickerBlade(n,t)},n.prototype.
ASESpecPickerExtender=function(n,t){return this.Shared().ASESpecPickerExtender(n,t)},n.prototype.WebsiteResourceIdAdapterPartViewModel=
function(n,t){return this.Shared().WebsiteResourceIdAdapterPartViewModel(n,t)},n.prototype.RequestsAndErrorsAdapterViewModel=
function(n,t){return this.Shared().RequestsAndErrorsAdapterViewModel(n,t)},n.prototype.Http4xxAdapterViewModel=
function(n,t){return this.Shared().Http4xxAdapterViewModel(n,t)},n.prototype.Http5xxAdapterViewModel=
function(n,t){return this.Shared().Http5xxAdapterViewModel(n,t)},n.prototype.CpuPercentageAdapterViewModel=
function(n,t){return this.Shared().CpuPercentageAdapterViewModel(n,t)},n.prototype.WebsiteUsageGaugeAdapterViewModel=
function(n,t){return this.Shared().WebsiteUsageGaugeAdapterViewModel(n,t)},n.prototype.WebTestsWebSiteAdapterViewModel=
function(n,t){return this.Shared().WebTestsWebSiteAdapterViewModel(n,t)},n.prototype.AlertsSummaryAdapterPartViewModel=
function(n,t){return this.Shared().AlertsSummaryAdapterPartViewModel(n,t)},n.prototype.CurrentSpendAdapterViewModel=
function(n,t){return this.Shared().CurrentSpendAdapterViewModel(n,t)},n.prototype.EventsSummaryAdapterViewModel=
function(n,t){return this.Shared().EventsSummaryAdapterViewModel(n,t)},n.prototype.HostingPlanAdaptedScaleSummaryPart=
function(n,t){return this.Shared().HostingPlanAdaptedScaleSummaryPart(n,t)},n.prototype.SyncCommand=
function(n,t){return this.Shared().SyncCommand(n,t)},n.prototype.DisconnectScmCommandViewModel=function(
n,t){return this.Shared().DisconnectScmCommandViewModel(n,t)},n.prototype.BrowseToExtension=function(
n,t){return this.Shared().BrowseToExtension(n,t)},n.prototype.UpdateExtension=function(n,t){return this.
Shared().UpdateExtension(n,t)},n.prototype.DeleteExtension=function(n,t){return this.Shared().DeleteExtension(
n,t)},n.prototype.WebJobRunCommand=function(n,t){return this.Shared().WebJobRunCommand(n,t)},n.prototype.
WebJobDeleteCommand=function(n,t){return this.Shared().WebJobDeleteCommand(n,t)},n.prototype.WebJobStartCommand=
function(n,t){return this.Shared().WebJobStartCommand(n,t)},n.prototype.WebJobStopCommand=function(n,
t){return this.Shared().WebJobStopCommand(n,t)},n.prototype.SyncPrimaryKeyCommandViewModel=function(
n,t){return this.Shared().SyncPrimaryKeyCommandViewModel(n,t)},n.prototype.SyncSecondaryKeyCommandViewModel=
function(n,t){return this.Shared().SyncSecondaryKeyCommandViewModel(n,t)},n.prototype.UnRegisterPBEndpointCommandViewModel=
function(n,t){return this.Shared().UnRegisterPBEndpointCommandViewModel(n,t)},n.prototype.DeletePBEndpointCommandViewModel=
function(n,t){return this.Shared().DeletePBEndpointCommandViewModel(n,t)},n.prototype.WebsiteBrowseViewModel=
function(n,t){return this.Shared().WebsiteBrowseViewModel(n,t)},n.prototype.WebsiteGridColumnsService=
function(n,t){return this.Shared().WebsiteGridColumnsService(n,t)},n.prototype.WebsiteResourceTypeService=
function(n,t){return this.Shared().WebsiteResourceTypeService(n,t)},n.prototype.WebsiteResourceMappingViewModel=
function(n,t){return this.Shared().WebsiteResourceMappingViewModel(n,t)},n.prototype.WebHostingPlanBrowseService=
function(n,t){return this.Shared().WebHostingPlanBrowseService(n,t)},n.prototype.WebHostingPlanGridColumnsService=
function(n,t){return this.Shared().WebHostingPlanGridColumnsService(n,t)},n.prototype.WebHostingPlanResourceTypeService=
function(n,t){return this.Shared().WebHostingPlanResourceTypeService(n,t)},n.prototype.WebHostingPlanResourceMappingViewModel=
function(n,t){return this.Shared().WebHostingPlanResourceMappingViewModel(n,t)},n.prototype.BizTalkResourceTypeService=
function(n,t){return this.Shared().BizTalkResourceTypeService(n,t)},n.prototype.BizTalkResourceMappingViewModel=
function(n,t){return this.Shared().BizTalkResourceMappingViewModel(n,t)},n}();t.ViewModelFactoriesBase=
r}(t||(t={})),t});define("WebsitesExtension/TypeScript/Rpc/RpcCallbacks",["require","exports","../ExtensionAssets/Constants",
"../Operations/Operations","../Ajax/Ajax","../Utility/Utility.Urls","../Ajax/Ajax.SourceControl","../ContinuousDeployment/Models/ProviderType"],
function(n,t,i,r,u,f,e){var o;return function(n){"use strict";function c(n){s=n;MsPortalFx.Services.
Rpc.registerCallback(t.createWebsite,l);MsPortalFx.Services.Rpc.registerCallback(t.setupWebsiteTfsScm,
a);MsPortalFx.Services.Rpc.registerCallback(t.disconnectWebsiteTfsScm,v);MsPortalFx.Services.Rpc.registerCallback(
t.triggerDisconnectWebsiteScm,y);MsPortalFx.Services.Rpc.registerCallback(t.triggerDeploymentsListUpdated,
p)}function l(n){var i,r,e,s;o(t.createWebsite,"Creating website with data: {0}".format(ko.toJSON(n)));
i={};r=n.RequestData.galleryParameters.selectedTemplateId;for(e in n.RequestData[r])i[e]={value:n.RequestData[
r][e]};return s=Q(u.createWebsiteWithCsmTemplate(n.RequestData.galleryParameters.subscriptionId,i.resourceGroup.
value,n.RequestData.galleryParameters.resourceGroupLocation,n.RequestData.galleryParameters.selectedTemplateId,
i)),s.then(function(r){return o(t.createWebsite,"Successfully created website '{0}'.".format(i.siteName.
value)),{Status:r.ProvisionStatus,ID:n.ID,websiteInfo:{subscriptionId:n.RequestData.galleryParameters.
subscriptionId,name:i.siteName.value,resourceGroup:i.resourceGroup.value,webSpace:r.Website.WebSpace,
location:i.siteLocation.value,csmId:f.getWebsiteCsmId(n.RequestData.galleryParameters.subscriptionId,
i.resourceGroup.value,i.siteName.value)}}}).catch(function(){var n="Failed create website '{0}'.".format(
i.siteName.value);o(t.createWebsite,n);throw new Error(n);})}function a(n){o(t.setupWebsiteTfsScm,"Setting up SCM with data: {0}".
format(ko.toJSON(n)));n.Result.CsmID?r.tagWebsiteWithResourceId(n.Result.SubscriptionId,n.Result.ResourceGroup,
n.Result.WebsiteName,n.Result.CsmID):o(t.setupWebsiteTfsScm,"No CSM id from TFS, skip tagging.");var
i={Name:n.Result.WebsiteName,ResourceGroup:n.Result.ResourceGroup},u=Q(e.setupScm(n.Result.SubscriptionId,
i,1,n.Result.Location,n.Result.Options));return u.then(function(){o(t.setupWebsiteTfsScm,"Successfully set up SCM for website '{0}'.".
format(n.Result.WebsiteName))}).catch(function(){var i="Failed to set up SCM for website '{0}'.".format(
n.Result.WebsiteName);o(t.setupWebsiteTfsScm,i);throw new Error(i);})}function v(n){var r,f,c;return o(
t.disconnectWebsiteTfsScm,"Disconnecting SCM with data: {0}".format(ko.toJSON(n))),r={},n.CsmID?r={Key:
MsPortalFx.ViewModels.Services.ResourceTypes.buildLinkTagName(n.CsmID),Value:"empty"}:o(t.disconnectWebsiteTfsScm,
"No CSM id from TFS while disconnnection, skip tagging."),f={Name:n.WebsiteName,ResourceGroup:n.ResourceGroup},
c=Q(e.disconnectScm(n.SubscriptionId,f,n.WebsiteLocation,1)).then(function(){var f,e;if(n.CsmID)return f=
s.websitesData.scmInfoCache.createView(h),f.fetch({Name:n.WebsiteName,ResourceGroup:n.ResourceGroup,
SubscriptionId:n.SubscriptionId}),e=Q(u.UntagWebsiteResourceGroup(n.SubscriptionId,n.ResourceGroup,n.
WebsiteName,[r])),e.then(function(){o(t.disconnectWebsiteTfsScm,"Successfully disconnected and untagged Scm for website '{0}'.".
format(n.WebsiteName))}).catch(function(){o(t.disconnectWebsiteTfsScm,"Successfully disconnected website '{0}'.".
format(n.WebsiteName))}),Q.all([f.refresh(),e]);ExtensionCore.UI.Notifications.createWarningNotification(
i.Asset.ExtensionName,i.NotificationEventSource.WebsiteRemoveTagResourceWarning,[n.WebsiteName],n.SubscriptionId);
o(t.disconnectWebsiteTfsScm,"Successfully disconnected website '{0}'.".format(n.WebsiteName))}).catch(
function(){var i="Failed to disconnect Scm for website '{0}'.".format(n.WebsiteName);o(t.disconnectWebsiteTfsScm,
i);throw new Error(i);}),c}function y(n){var r="Triggering event '{0}' for website '{1}'.".format(i.
WebsiteEvents.disconnectScm,ko.toJS(n));o(t.triggerDisconnectWebsiteScm,r);s.events.trigger(i.WebsiteEvents.
disconnectScm,[n])}function p(n,r){var u="Triggering event '{0}' for website '{1}'.".format(i.WebsiteEvents.
deploymentsListUpdated,ko.toJS(n));o(t.triggerDeploymentsListUpdated,u);s.events.trigger(i.WebsiteEvents.
deploymentsListUpdated,[n,r])}function o(n,t){MsPortalFx.Base.Diagnostics.Log.writeEntry(0,"WebsiteExtension.Rpc.{0}".
format(n),t)}var s,t,h;n.registerCallbacks=c;t=function(){function n(){}return n.createWebsite="CreateWebsite",
n.setupWebsiteTfsScm="SetupWebSiteScm",n.disconnectWebsiteTfsScm="DisconnectWebSiteScm",n.triggerDisconnectWebsiteScm=
"triggerDisconnectWebsiteScm",n.triggerDeploymentsListUpdated="triggerDeploymentsListUpdated",n}();h=
new MsPortalFx.Internal.Base.TriggerableLifetimeManager}(o||(o={})),o});define("WebsitesExtension/TypeScript/ContinuousDeployment/Models/TypeMetadata",
["require","exports"],function(){var n;return function(n){"use strict";function t(){var n={name:"WebsiteExtension.Models.ContinuousDeployment.ScmDeployment",
properties:{id:{isArray:!1,itemType:null,persistEdits:!0},status:{isArray:!1,itemType:null,persistEdits:
!0},status_text:{isArray:!1,itemType:null,persistEdits:!0},author_email:{isArray:!1,itemType:null,persistEdits:
!0},author:{isArray:!1,itemType:null,persistEdits:!1},deployer:{isArray:!1,itemType:null,persistEdits:
!1},message:{isArray:!1,itemType:null,persistEdits:!1},progress:{isArray:!1,itemType:null,persistEdits:
!1},received_time:{isArray:!1,itemType:null,persistEdits:!1},start_time:{isArray:!1,itemType:null,persistEdits:
!1},end_time:{isArray:!1,itemType:null,persistEdits:!1},last_success_end_time:{isArray:!1,itemType:null,
persistEdits:!1},complete:{isArray:!1,itemType:null,persistEdits:!1},active:{isArray:!1,itemType:null,
persistEdits:!1},url:{isArray:!1,itemType:null,persistEdits:!1},log_url:{isArray:!1,itemType:null,persistEdits:
!1},is_readonly:{isArray:!1,itemType:null,persistEdits:!1},resourceUri:{isArray:!1,itemType:null,persistEdits:
!1}},idProperties:["id","end_time","active"],entityType:!0};MsPortalFx.Data.Metadata.setTypeMetadata(
n.name,n);MsPortalFx.Data.Metadata.setTypeMetadata("WebsiteExtension.Models.ContinuousDeployment.ScmDeploymentLog",
{name:"WebsiteExtension.Models.ContinuousDeployment.ScmDeploymentLog",properties:{type:{isArray:!1,itemType:
null,persistEdits:!0},log_time:{isArray:!1,itemType:null,persistEdits:!0},message:{isArray:!1,itemType:
null,persistEdits:!0},id:{isArray:!1,itemType:null,persistEdits:!0},details_url:{isArray:!1,itemType:
null,persistEdits:!1}},idProperties:["id"],entityType:!0});MsPortalFx.Data.Metadata.setTypeMetadata(
"WebsiteExtension.Models.ContinuousDeployment.ScmInfo",{name:"WebsiteExtension.Models.ContinuousDeployment.ScmInfo",
properties:{ScmType:{isArray:!1,itemType:null,persistEdits:!0},ScmUri:{isArray:!1,itemType:null,persistEdits:
!0},RepositoryUri:{isArray:!1,itemType:null,persistEdits:!0},GitUriFormat:{isArray:!1,itemType:null,
persistEdits:!0},PublishingUsername:{isArray:!1,itemType:null,persistEdits:!1}},idProperties:["ScmType"],
entityType:!0})}n.Register=t}(n||(n={})),n})