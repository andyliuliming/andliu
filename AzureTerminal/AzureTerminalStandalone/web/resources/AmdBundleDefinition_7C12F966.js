var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Program",["require","exports","./_generated/ExtensionDefinition",
"./_generated/ViewModelFactories","./Shared/Configuration","./Shared/InsightsTelemetry","./Shared/Profiler",
"./Shared/Enumerations","./Shared/DataContext","./Shared/DataModels/MonitoredDataProvider","./Shared/ComponentIdService",
"./CreateApplication/CreateApplicationArea","./EndUserAnalytics/EndUserAnalyticsArea","./MonitoredApplications/MonitoredApplicationsArea",
"./Overview/OverviewArea","./Search/SearchArea","./WebTests/WebTestsArea","./MetricsExplorer/MetricsExplorerArea",
"./ContinuousExport/ContinuousExportArea","./Billing/BillingArea"],function(n,t,i,r,u,f,e,o,s,h,c,l,
a,v,y,p,w,b,k,d){"use strict";function tt(){return new nt}var nt=function(n){function t(){n.apply(this,
arguments)}return __extends(t,n),t.prototype.getDefinition=function(){return i.getDefinition()},t.prototype.
initialize=function(){var r=this,n,i,t;this.viewModelFactories=new g;f.initializeTelemetry();n=window.
fx.environment;i=u.getSettings();i.getUseAuthenticatedUserIdInTelemetry()?MsPortalFx.Base.Security.getAuthorizationToken(
).then(function(n){var t;f.setUniqueUserId(f.AITelemetryConstants.UnknownIbizaUser);(t=r.getUniqueUserId(
n.header))?f.setUniqueUserId(t):f.logWarning("Set UniqueUserId failed",3,f.AITelemetryConstants.EntryPoint,
undefined)},function(){f.setUniqueUserId(f.AITelemetryConstants.UnknownIbizaUser);f.logError("Token Fetch Error",
3,f.AITelemetryConstants.EntryPoint,undefined)}).finally(function(){f.logCustomEvent(f.AITelemetryConstants.
AppInsightsExtensionLoadedEventName,3,f.AITelemetryConstants.EntryPoint,undefined)}):f.logCustomEvent(
f.AITelemetryConstants.AppInsightsExtensionLoadedEventName,3,f.AITelemetryConstants.EntryPoint,undefined);
n&&(t=n.traceStr,t&&t.indexOf&&t.indexOf("aiprofiler")>=0&&e.enableProfiler());n&&i&&this.getEnvironmentShellVersions(
);this.registerCallbacks()},t.prototype.registerCallbacks=function(){MsPortalFx.Services.Rpc.registerCallback(
"GetApplications",function(n){var t=Q.defer(),i=new h.MonitoredDataProvider(n);return i.getApplicationInfo(
).then(function(n){t.resolve(JSON.stringify(n))},function(n){var i=n&&n.responseText?n.responseText:
n;t.reject("GetApplications request failed with error"+i)}),t.promise});MsPortalFx.Services.Rpc.registerCallback(
"CheckAIResourceExistsInSubscription",function(n,t){return c.fetchMatchingComponentInSubscription(n,
t,f.AITelemetryConstants.RPCCheckAIResourceExistsInSubscription).then(function(n){return n?!0:!1})});
MsPortalFx.Services.Rpc.registerCallback("LinkToAIComponent",function(n,t){var i=Q.defer(),r=c.resourceIdToComponentId(
t);return c.fetch(r,f.AITelemetryConstants.RPCLinkToAIComponent).then(function(t){c.hasLink(n,t)?i.resolve(
):c.createOrUpdate(r,t,n,!0,f.AITelemetryConstants.RPCLinkToAIComponent).then(function(){var n=t.properties.
TenantId+t.name;f.logCustomEvent("AddedHiddenLink",3,f.AITelemetryConstants.RPCLinkToAIComponent,r,{
Application_ID_V2:n});i.resolve()},function(){f.logError("Failed to link ai resource to resource",3,
"RPCLinkToAIComponent",r,{resourceId:n});i.reject()})},function(){f.logError("Failed to get ai resource",
3,"RPCLinkToAIComponent",r);i.reject()}),i.promise})},t.prototype.getEnvironmentShellVersions=function(
){$.ajax("/IbizaEnvironment/GetEnvironmentShellVersions").then(function(n){n&&$.extend(window.fx.environment,
n)},function(n){var t={_componentId:undefined,_containerName:"GetEnvironmentShellVersions",_queryName:
"GetEnvironmentShellVersions"};f.logAjaxQuery(t,1,n)})},t.prototype.getUniqueUserId=function(n){var t,
u,i,e,r,o;if(!n||typeof n!="string"||(i=n.split(" "),i.length<2)||(e=i[1],r=e.split("."),r.length<2))
return undefined;if(o=r[1],$.base64)u=$.base64.decode(o);else return f.logWarning("jQuery base64 plugin not loaded.",
3,f.AITelemetryConstants.EntryPoint,undefined),undefined;try{return t=JSON.parse(u),t?t.oid:undefined}
catch(s){return f.logException(s,3,f.AITelemetryConstants.EntryPoint,undefined),undefined}},t}(MsPortalFx.
Extension.EntryPointBase),g;t.EntryPoint=nt;u._setIbizaEnvironment(window.fx.environment);g=function(
n){function t(){n.call(this);var t=new s.DataContext;this.CreateApplication().setDataContext(new l.DataContext);
this.EndUserAnalytics().setDataContext(new a.DataContext(t));this.MonitoredApplications().setDataContext(
new v.DataContext(t));this.Overview().setDataContext(new y.DataContext(t));this.Search().setDataContext(
new p.DataContext(t));this.WebTests().setDataContext(new w.DataContext(t));this.MetricsExplorer().setDataContext(
new b.DataContext(t));this.ContinuousExport().setDataContext(new k.DataContext(t));this.Billing().setDataContext(
new d.DataContext(t))}return __extends(t,n),t}(r.ViewModelFactoriesBase);t.ViewModelFactories=g;t.create=
tt});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("_generated/ViewModelFactories",["require",
"exports"],function(n){var t;return function(t){var a=function(t){function i(){t.apply(this,arguments)}
return __extends(i,t),i.prototype.MonitoredApplicationsTileViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../MonitoredApplications/ViewModels/MonitoredApplicationsTileViewModel",function(
n){return new n.MonitoredApplicationsTileViewModel(t,i,r.dataContext)},n)},i.prototype.DeleteApplicationCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../MonitoredApplications/ViewModels/DeleteApplicationCommand",
function(n){return new n.DeleteApplicationCommand(t,i,r.dataContext)},n)},i.prototype.ApplicationsAssetViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../MonitoredApplications/ViewModels/ApplicationsAssetViewModel",
function(n){return new n.ApplicationsAssetViewModel(t,i,r.dataContext)},n)},i.prototype.ComponentResourceTypeService=
function(t,i){var r=this;return this.loadViewModelAsync("../MonitoredApplications/Services/ComponentResourceTypeService",
function(n){return new n.ComponentResourceTypeService(t,i,r.dataContext)},n)},i.prototype.ComponentResourceMappingViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../MonitoredApplications/ViewModels/ComponentResourceMappingViewModel",
function(n){return new n.ComponentResourceMappingViewModel(t,i,r.dataContext)},n)},i.prototype.ApplicationsDynamicBladeService=
function(t,i){var r=this;return this.loadViewModelAsync("../MonitoredApplications/Services/ApplicationsDynamicBladeService",
function(n){return new n.ApplicationsDynamicBladeService(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase),i,r,u,f,e,o,s,h,c,l,v;t.MonitoredApplicationsViewModelFactoriesBase=
a;i=function(t){function i(){t.apply(this,arguments)}return __extends(i,t),i.prototype.EventSearchPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/EventSearchPartViewModel",
function(n){return new n.EventSearchPartViewModel(t,i,r.dataContext)},n)},i.prototype.AppInsightsCollectionViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsCollectionViewModel",
function(n){return new n.AppInsightsCollectionViewModel(t,i,r.dataContext)},n)},i.prototype.QuickStartBladePartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/QuickStartViewModel",
function(n){return new n.QuickStartBladePartViewModel(t,i,r.dataContext)},n)},i.prototype.PropertiesButtonPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/PropertiesButtonPartViewModel",
function(n){return new n.PropertiesButtonPartViewModel(t,i,r.dataContext)},n)},i.prototype.PinnedOverviewsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/PinnedPartViewModel",
function(n){return new n.PinnedOverviewsPartViewModel(t,i,r.dataContext)},n)},i.prototype.TopExceptionsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/TopExceptionsPartViewModel",
function(n){return new n.TopExceptionsPartViewModel(t,i,r.dataContext)},n)},i.prototype.MetricsExplorerBlankViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/MetricsExplorerBlankViewModel",
function(n){return new n.MetricsExplorerBlankViewModel(t,i,r.dataContext)},n)},i.prototype.AspNetServersPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AspNetServersPartViewModel",
function(n){return new n.AspNetServersPartViewModel(t,i,r.dataContext)},n)},i.prototype.FailuresExceptionsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/FailuresExceptionsPartViewModel",
function(n){return new n.FailuresExceptionsPartViewModel(t,i,r.dataContext)},n)},i.prototype.PerformanceDependenciesPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/PerformanceDependenciesPartViewModel",
function(n){return new n.PerformanceDependenciesPartViewModel(t,i,r.dataContext)},n)},i.prototype.BrowserPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/BrowserPartViewModel",
function(n){return new n.BrowserPartViewModel(t,i,r.dataContext)},n)},i.prototype.SummaryAssetPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/SummaryAssetPartViewModel",
function(n){return new n.SummaryAssetPartViewModel(t,i,r.dataContext)},n)},i.prototype.DailyActiveUsersAssetPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/DailyActiveUsersAssetPartViewModel",
function(n){return new n.DailyActiveUsersAssetPartViewModel(t,i,r.dataContext)},n)},i.prototype.TrendlinePartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/TrendlinePartViewModel",
function(n){return new n.TrendlinePartViewModel(t,i,r.dataContext)},n)},i.prototype.FavoritesPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/FavoritesPartViewModel",
function(n){return new n.FavoritesPartViewModel(t,i,r.dataContext)},n)},i.prototype.FavoritesBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/FavoritesBladeViewModel",
function(n){return new n.FavoritesBladeViewModel(t,i,r.dataContext)},n)},i.prototype.FavoritesListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/FavoritesListViewModel",
function(n){return new n.FavoritesListViewModel(t,i,r.dataContext)},n)},i.prototype.FavoritesListRefreshCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/FavoritesListRefreshCommandViewModel",
function(n){return new n.FavoritesListRefreshCommandViewModel(t,i,r.dataContext)},n)},i.prototype.QuickStartBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/QuickStartViewModel",
function(n){return new n.QuickStartBladeViewModel(t,i,r.dataContext)},n)},i.prototype.QuickStartBladeInfoListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/QuickStartViewModel",
function(n){return new n.QuickStartBladeInfoListViewModel(t,i,r.dataContext)},n)},i.prototype.EventsConfigurationBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/EventsConfigurationBladeViewModel",
function(n){return new n.EventsConfigurationBladeViewModel(t,i,r.dataContext)},n)},i.prototype.EventsConfigurationViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/EventsConfigurationViewModel",
function(n){return new n.EventsConfigurationViewModel(t,i,r.dataContext)},n)},i.prototype.PropertiesBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/PropertiesBladeViewModel",
function(n){return new n.PropertiesBladeViewModel(t,i,r.dataContext)},n)},i.prototype.PropertiesFormViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/PropertiesFormViewModel",
function(n){return new n.PropertiesFormViewModel(t,i,r.dataContext)},n)},i.prototype.AspNetOverviewBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AspNetOverviewBladeViewModel",
function(n){return new n.AspNetOverviewBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ComponentResourceSummaryViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/ComponentResourceSummaryViewModel",
function(n){return new n.ComponentResourceSummaryViewModel(t,i,r.dataContext)},n)},i.prototype.SettingsCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/SettingsList",function(
n){return new n.SettingsCommand(t,i,r.dataContext)},n)},i.prototype.TimeRangeCommand=function(t,i){var
r=this;return this.loadViewModelAsync("../Overview/ViewModels/TimeRangeCommand",function(n){return new
n.TimeRangeCommand(t,i,r.dataContext)},n)},i.prototype.RefreshBladeCommand=function(t,i){var r=this;
return this.loadViewModelAsync("../Overview/ViewModels/RefreshBladeCommand",function(n){return new n.
RefreshBladeCommand(t,i,r.dataContext)},n)},i.prototype.DeleteApplicationCommand=function(t,i){var r=
this;return this.loadViewModelAsync("../Overview/ViewModels/DeleteApplicationCommand",function(n){return new
n.DeleteApplicationCommand(t,i,r.dataContext)},n)},i.prototype.DeviceOverviewBladeViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/DeviceOverviewBladeViewModel",
function(n){return new n.DeviceOverviewBladeViewModel(t,i,r.dataContext)},n)},i.prototype.JavaWebOverviewBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/JavaWebOverviewBladeViewModel",
function(n){return new n.JavaWebOverviewBladeViewModel(t,i,r.dataContext)},n)},i.prototype.JavaWebConfigurationBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/JavaWebConfigurationBladeViewModel",
function(n){return new n.JavaWebConfigurationBladeViewModel(t,i,r.dataContext)},n)},i.prototype.JavaWebLogConfigurationDescriptionPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/JavaWebConfigurationBladeViewModel",
function(n){return new n.JavaWebLogConfigurationDescriptionPartViewModel(t,i,r.dataContext)},n)},i.prototype.
JavaWebLogConfigurationPartOneViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/JavaWebConfigurationBladeViewModel",
function(n){return new n.JavaWebLogConfigurationPartOneViewModel(t,i,r.dataContext)},n)},i.prototype.
JavaWebGetCodeConfigurationViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/JavaWebConfigurationViewModel",
function(n){return new n.JavaWebGetCodeConfigurationViewModel(t,i,r.dataContext)},n)},i.prototype.JavaWebLogConfigurationPartTwoViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/JavaWebConfigurationBladeViewModel",
function(n){return new n.JavaWebLogConfigurationPartTwoViewModel(t,i,r.dataContext)},n)},i.prototype.
GettingStartedCustomEventsBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/GettingStartedCustomEventsBladeViewModel",
function(n){return new n.GettingStartedCustomEventsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
DevicesNoticeBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/DevicesNoticePartViewModel",
function(n){return new n.DevicesNoticeBladeViewModel(t,i,r.dataContext)},n)},i.prototype.DevicesNoticePartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/DevicesNoticePartViewModel",
function(n){return new n.DevicesNoticePartViewModel(t,i,r.dataContext)},n)},i.prototype.AttachBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AttachBladeViewModel",
function(n){return new n.AttachBladeViewModel(t,i,r.dataContext)},n)},i.prototype.AttachActionBarViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AttachActionBarViewModel",
function(n){return new n.AttachActionBarViewModel(t,i,r.dataContext)},n)},i.prototype.AttachGridViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AttachBladeViewModel",
function(n){return new n.AttachGridViewModel(t,i,r.dataContext)},n)},i.prototype.SettingListBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/SettingsList",function(
n){return new n.SettingListBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SettingListPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/SettingsList",function(
n){return new n.SettingListPartViewModel(t,i,r.dataContext)},n)},i.prototype.AlertsPartAdapterViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AlertsPartAdapterViewModel",
function(n){return new n.AlertsPartAdapterViewModel(t,i,r.dataContext)},n)},i.prototype.OverviewTimelineAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.OverviewTimelineAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.DiagnosticsTimelineAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.DiagnosticsTimelineAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.
PerformanceTimelineAdapterPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.PerformanceTimelineAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.
UsageTimelineAdapterPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.UsageTimelineAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.TopExceptionsAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.TopExceptionsAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.SlowestRequestsAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.SlowestRequestsAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.TopFailedRequestsAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.TopFailedRequestsAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.QuickStartAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.QuickStartAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.PageViewsAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.PageViewsAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.AllWebTestsResponseTimeFullGalleryAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.AllWebTestsResponseTimeFullGalleryAdapterPartViewModel(t,i,r.dataContext)},
n)},i.prototype.TagsAdapterPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.TagsAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.PropertiesAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.PropertiesAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.CustomEventsAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.CustomEventsAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.TopCrashesAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.TopCrashesAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceMapAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.ResourceMapAdapterPartViewModel(t,i,r.dataContext)},n)},i.prototype.EventsSummaryAdapterPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Overview/ViewModels/AppInsightsAdapterPartsViewModels",
function(n){return new n.EventsSummaryAdapterPartViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.OverviewViewModelFactoriesBase=i;r=function(t){function i(){
t.apply(this,arguments)}return __extends(i,t),i.prototype.EndUserAnalyticsWebSiteViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/EndUserAnalyticsViewModel",
function(n){return new n.EndUserAnalyticsWebSiteViewModel(t,i,r.dataContext)},n)},i.prototype.EndUserAnalyticsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/EndUserAnalyticsViewModel",
function(n){return new n.EndUserAnalyticsViewModel(t,i,r.dataContext)},n)},i.prototype.BrowsersWebsitesViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/BrowsersViewModel",
function(n){return new n.BrowsersWebsitesViewModel(t,i,r.dataContext)},n)},i.prototype.BrowsersViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/BrowsersViewModel",
function(n){return new n.BrowsersViewModel(t,i,r.dataContext)},n)},i.prototype.SlowestRequestsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/SlowestRequestsViewModel",
function(n){return new n.SlowestRequestsViewModel(t,i,r.dataContext)},n)},i.prototype.SummaryPageViewsDetailGridViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/PageViewsDetailViewModel",
function(n){return new n.SummaryPageViewsDetailGridViewModel(t,i,r.dataContext)},n)},i.prototype.PageViewsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/PageViewsViewModel",
function(n){return new n.PageViewsViewModel(t,i,r.dataContext)},n)},i.prototype.EndUserAnalyticsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/EndUserAnalyticsBladeViewModel",
function(n){return new n.EndUserAnalyticsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.DevicesViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/DevicesViewModel",
function(n){return new n.DevicesViewModel(t,i,r.dataContext)},n)},i.prototype.SessionsViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/SessionsViewModel",function(
n){return new n.SessionsViewModel(t,i,r.dataContext)},n)},i.prototype.ConfigurationLauncherViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/ConfigurationLauncherViewModel",
function(n){return new n.ConfigurationLauncherViewModel(t,i,r.dataContext)},n)},i.prototype.TimeRangeCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/TimeRangeCommand",
function(n){return new n.TimeRangeCommand(t,i,r.dataContext)},n)},i.prototype.RefreshBladeCommand=function(
t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/RefreshBladeCommand",
function(n){return new n.RefreshBladeCommand(t,i,r.dataContext)},n)},i.prototype.ConfigurationBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/ConfigurationBladeViewModel",
function(n){return new n.ConfigurationBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ConfigurationViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../EndUserAnalytics/ViewModels/ConfigurationViewModel",
function(n){return new n.ConfigurationViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.
ViewModelAreaFactoriesBase);t.EndUserAnalyticsViewModelFactoriesBase=r;u=function(t){function i(){t.
apply(this,arguments)}return __extends(i,t),i.prototype.EventDetailTileViewModel=function(t,i){var r=
this;return this.loadViewModelAsync("../Search/ViewModels/EventDetailTileViewModel",function(n){return new
n.EventDetailTileViewModel(t,i,r.dataContext)},n)},i.prototype.SearchPinnedPartViewModel=function(t,
i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/SearchPinnedPartViewModel",function(
n){return new n.SearchPinnedPartViewModel(t,i,r.dataContext)},n)},i.prototype.SearchBladeViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/SearchBladeViewModel",function(
n){return new n.SearchBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SearchControlPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/SearchControlViewModel",
function(n){return new n.SearchControlPartViewModel(t,i,r.dataContext)},n)},i.prototype.TimeRangeCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/TimeRangeCommand",function(
n){return new n.TimeRangeCommand(t,i,r.dataContext)},n)},i.prototype.FilterCommandViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/FilterCommandViewModel",function(
n){return new n.FilterCommandViewModel(t,i,r.dataContext)},n)},i.prototype.SearchRefreshCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/SearchRefreshCommandViewModel",
function(n){return new n.SearchRefreshCommandViewModel(t,i,r.dataContext)},n)},i.prototype.ResetFiltersCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/ResetFiltersCommandViewModel",
function(n){return new n.ResetFiltersCommandViewModel(t,i,r.dataContext)},n)},i.prototype.SetupLoggingCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/SetupLoggingCommandViewModel",
function(n){return new n.SetupLoggingCommandViewModel(t,i,r.dataContext)},n)},i.prototype.FavoritesCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/FavoritesCommandViewModel",
function(n){return new n.FavoritesCommandViewModel(t,i,r.dataContext)},n)},i.prototype.FilterDetailsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/FilterDetailsBladeViewModel",
function(n){return new n.FilterDetailsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SearchFilterDetailPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/SearchFilterDetailPartViewModel",
function(n){return new n.SearchFilterDetailPartViewModel(t,i,r.dataContext)},n)},i.prototype.ClearFiltersCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/ClearFiltersCommandViewModel",
function(n){return new n.ClearFiltersCommandViewModel(t,i,r.dataContext)},n)},i.prototype.SearchResultDetailBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/SearchResultDetailBladeViewModel",
function(n){return new n.SearchResultDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.EventPropertiesCustomPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/EventPropertiesCustomPartViewModel",
function(n){return new n.EventPropertiesCustomPartViewModel(t,i,r.dataContext)},n)},i.prototype.MonacoBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/MonacoViewModels",function(
n){return new n.MonacoBladeViewModel(t,i,r.dataContext)},n)},i.prototype.EditorPartViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/MonacoViewModels",function(n){return new
n.EditorPartViewModel(t,i,r.dataContext)},n)},i.prototype.TimeSelectorDetailBladeViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/TimeSelectorDetailBladeViewModel",
function(n){return new n.TimeSelectorDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.TimeRangeSelectorPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/TimeRangeSelectorPartViewModel",
function(n){return new n.TimeRangeSelectorPartViewModel(t,i,r.dataContext)},n)},i.prototype.EventDetailsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/EventDetailsBladeViewModel",
function(n){return new n.EventDetailsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CustomEventDetailsCustomPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/CustomEventDetailsCustomPartViewModel",
function(n){return new n.CustomEventDetailsCustomPartViewModel(t,i,r.dataContext)},n)},i.prototype.ExceptionDetailsCustomPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/ExceptionDetailsCustomPartViewModel",
function(n){return new n.ExceptionDetailsCustomPartViewModel(t,i,r.dataContext)},n)},i.prototype.PageViewDetailsCustomPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/PageViewDetailsCustomPartViewModel",
function(n){return new n.PageViewDetailsCustomPartViewModel(t,i,r.dataContext)},n)},i.prototype.RequestDetailsCustomPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/RequestDetailsCustomPartViewModel",
function(n){return new n.RequestDetailsCustomPartViewModel(t,i,r.dataContext)},n)},i.prototype.TraceDetailsCustomPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/TraceDetailsCustomPartViewModel",
function(n){return new n.TraceDetailsCustomPartViewModel(t,i,r.dataContext)},n)},i.prototype.SearchCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/SearchCommandViewModel",
function(n){return new n.SearchCommandViewModel(t,i,r.dataContext)},n)},i.prototype.ViewFullCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/ViewModels/SearchCommandViewModel",
function(n){return new n.ViewFullCommandViewModel(t,i,r.dataContext)},n)},i.prototype.EventDetailResourceTypeService=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/Services/EventDetailResourceTypeService",
function(n){return new n.EventDetailResourceTypeService(t,i,r.dataContext)},n)},i.prototype.EventDetailResourceMappingService=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/Services/EventDetailResourceMappingService",
function(n){return new n.EventDetailResourceMappingService(t,i,r.dataContext)},n)},i.prototype.EventDetailDynamicBladeService=
function(t,i){var r=this;return this.loadViewModelAsync("../Search/Services/EventDetailDynamicBladeService",
function(n){return new n.EventDetailDynamicBladeService(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.SearchViewModelFactoriesBase=u;f=function(t){function i(){t.
apply(this,arguments)}return __extends(i,t),i.prototype.ExceptionsBarChartViewModel=function(t,i){var
r=this;return this.loadViewModelAsync("../PerformanceMonitoring/ViewModels/ExceptionsBarChartViewModel",
function(n){return new n.ExceptionsBarChartViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.PerformanceMonitoringViewModelFactoriesBase=f;e=function(t){
function i(){t.apply(this,arguments)}return __extends(i,t),i.prototype.ContinuousExportButtonViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/ContinuousExportButtonViewModel",
function(n){return new n.ContinuousExportButtonViewModel(t,i,r.dataContext)},n)},i.prototype.ContinuousExportBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/ContinuousExportBladeViewModel",
function(n){return new n.ContinuousExportBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ContinuousExportBillingTextBoxViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/ContinuousExportBillingTextBoxViewModel",
function(n){return new n.ContinuousExportBillingTextBoxViewModel(t,i,r.dataContext)},n)},i.prototype.
ContinuousExportPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/ContinuousExportPartViewModel",
function(n){return new n.ContinuousExportPartViewModel(t,i,r.dataContext)},n)},i.prototype.AddContinuousExportCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/AddContinuousExportCommandViewModel",
function(n){return new n.AddContinuousExportCommandViewModel(t,i,r.dataContext)},n)},i.prototype.RefreshContinuousExportCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/RefreshContinuousExportCommandViewModel",
function(n){return new n.RefreshContinuousExportCommandViewModel(t,i,r.dataContext)},n)},i.prototype.
CreateContinuousExportBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/ContinuousExportBladeViewModel",
function(n){return new n.CreateContinuousExportBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CreateContinuousExportPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/CreateContinuousExportPartViewModel",
function(n){return new n.CreateContinuousExportPartViewModel(t,i,r.dataContext)},n)},i.prototype.ContinuousExportEventTypesBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/ContinuousExportBladeViewModel",
function(n){return new n.ContinuousExportEventTypesBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
ContinuousExportEventTypesPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/ContinuousExportEventTypesPartViewModel",
function(n){return new n.ContinuousExportEventTypesPartViewModel(t,i,r.dataContext)},n)},i.prototype.
ContinuousExportEditBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/ContinuousExportBladeViewModel",
function(n){return new n.ContinuousExportEditBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SaveContinuousExportCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/SaveContinuousExportCommandViewModel",
function(n){return new n.SaveContinuousExportCommandViewModel(t,i,r.dataContext)},n)},i.prototype.EnableContinuousExportCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/DisableContinuousExportCommandViewModel",
function(n){return new n.EnableContinuousExportCommandViewModel(t,i,r.dataContext)},n)},i.prototype.
DisableContinuousExportCommandViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/DisableContinuousExportCommandViewModel",
function(n){return new n.DisableContinuousExportCommandViewModel(t,i,r.dataContext)},n)},i.prototype.
DeleteContinuousExportCommandViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ContinuousExport/ViewModels/DeleteContinuousExportCommandViewModel",
function(n){return new n.DeleteContinuousExportCommandViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.
Internal.Extension.ViewModelAreaFactoriesBase);t.ContinuousExportViewModelFactoriesBase=e;o=function(
t){function i(){t.apply(this,arguments)}return __extends(i,t),i.prototype.WebTestTileViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/WebTestTileViewModel",function(
n){return new n.WebTestTileViewModel(t,i,r.dataContext)},n)},i.prototype.WebTestsWebSitesSetupViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/WebTestsSetupViewModel",
function(n){return new n.WebTestsWebSitesSetupViewModel(t,i,r.dataContext)},n)},i.prototype.WebTestsSetupViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/WebTestsSetupViewModel",
function(n){return new n.WebTestsSetupViewModel(t,i,r.dataContext)},n)},i.prototype.WebTestsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/WebTestsViewModel",function(
n){return new n.WebTestsViewModel(t,i,r.dataContext)},n)},i.prototype.AllWebTestsResponseTimeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/AllWebTestsResponseTimeViewModel",
function(n){return new n.AllWebTestsResponseTimeViewModel(t,i,r.dataContext)},n)},i.prototype.AllWebTestsResponseTimeFullViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/AllWebTestsResponseTimeFullViewModel",
function(n){return new n.AllWebTestsResponseTimeFullViewModel(t,i,r.dataContext)},n)},i.prototype.WebTestsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/WebTestsBladeViewModel",
function(n){return new n.WebTestsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ResponseTimeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/ResponseTimeViewModel",
function(n){return new n.ResponseTimeViewModel(t,i,r.dataContext)},n)},i.prototype.AllWebTestsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/AllWebTestsViewModel",
function(n){return new n.AllWebTestsViewModel(t,i,r.dataContext)},n)},i.prototype.CommandAddWebTestViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CommandAddWebTestViewModel",
function(n){return new n.CommandAddWebTestViewModel(t,i,r.dataContext)},n)},i.prototype.TimeRangeCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/Commands",function(n)
{return new n.TimeRangeCommand(t,i,r.dataContext)},n)},i.prototype.RefreshBladeCommand=function(t,i)
{var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/Commands",function(n){return new n.
RefreshBladeCommand(t,i,r.dataContext)},n)},i.prototype.WebTestsDetailBladeViewModel=function(t,i){var
r=this;return this.loadViewModelAsync("../WebTests/ViewModels/WebTestsDetailBladeViewModel",function(
n){return new n.WebTestsDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ResponseAndAvailabilityViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/ResponseAndAvailabilityViewModel",
function(n){return new n.ResponseAndAvailabilityViewModel(t,i,r.dataContext)},n)},i.prototype.TestLocationsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/TestLocationsViewModel",
function(n){return new n.TestLocationsViewModel(t,i,r.dataContext)},n)},i.prototype.CommandEditWebTestViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CommandEditWebTestViewModel",
function(n){return new n.CommandEditWebTestViewModel(t,i,r.dataContext)},n)},i.prototype.CommandDownloadWebTestViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CommandDownloadWebTestViewModel",
function(n){return new n.CommandDownloadWebTestViewModel(t,i,r.dataContext)},n)},i.prototype.EnableWebTestCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CommandEnableWebTestViewModel",
function(n){return new n.EnableWebTestCommandViewModel(t,i,r.dataContext)},n)},i.prototype.DisableWebTestCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CommandEnableWebTestViewModel",
function(n){return new n.DisableWebTestCommandViewModel(t,i,r.dataContext)},n)},i.prototype.CommandDeleteWebTestViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CommandDeleteWebTestViewModel",
function(n){return new n.CommandDeleteWebTestViewModel(t,i,r.dataContext)},n)},i.prototype.WebTestLocationDetailBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/WebTestLocationDetailBladeViewModel",
function(n){return new n.WebTestLocationDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ResponseAndAvailabilityLocationViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/ResponseAndAvailabilityLocationViewModel",
function(n){return new n.ResponseAndAvailabilityLocationViewModel(t,i,r.dataContext)},n)},i.prototype.
FailedTestsViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/FailedTestsViewModel",
function(n){return new n.FailedTestsViewModel(t,i,r.dataContext)},n)},i.prototype.WebTestResultBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/WebTestResultBladeViewModel",
function(n){return new n.WebTestResultBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SummaryViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/SummaryViewModel",function(
n){return new n.SummaryViewModel(t,i,r.dataContext)},n)},i.prototype.ResultGridViewModel=function(t,
i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/ResultGridViewModel",function(n)
{return new n.ResultGridViewModel(t,i,r.dataContext)},n)},i.prototype.DownloadViewModel=function(t,i)
{var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/DownloadViewModel",function(n){return new
n.DownloadViewModel(t,i,r.dataContext)},n)},i.prototype.WebTestResultDetailBladeViewModel=function(t,
i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/WebTestResultDetailBladeViewModel",
function(n){return new n.WebTestResultDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ResultGridResponseHeadersViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/ResultGridResponseHeadersViewModel",
function(n){return new n.ResultGridResponseHeadersViewModel(t,i,r.dataContext)},n)},i.prototype.ResultGridResponseBodyViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/ResultGridResponseBodyViewModel",
function(n){return new n.ResultGridResponseBodyViewModel(t,i,r.dataContext)},n)},i.prototype.ResultGridDetailRulesViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/ResultGridDetailRulesViewModel",
function(n){return new n.ResultGridDetailRulesViewModel(t,i,r.dataContext)},n)},i.prototype.ResultGridDetailExceptionViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/ResultGridDetailExceptionViewModel",
function(n){return new n.ResultGridDetailExceptionViewModel(t,i,r.dataContext)},n)},i.prototype.CreateWebTestBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CreateWebTestBladeViewModel",
function(n){return new n.CreateWebTestBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CreateWebTestViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CreateWebTestViewModel",
function(n){return new n.CreateWebTestViewModel(t,i,r.dataContext)},n)},i.prototype.EditWebTestBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CreateWebTestBladeViewModel",
function(n){return new n.EditWebTestBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CreateWebTestLocationBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CreateWebTestBladeViewModel",
function(n){return new n.CreateWebTestLocationBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CreateWebTestLocationViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CreateWebTestLocationViewModel",
function(n){return new n.CreateWebTestLocationViewModel(t,i,r.dataContext)},n)},i.prototype.CreateWebTestCriteriaBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CreateWebTestBladeViewModel",
function(n){return new n.CreateWebTestCriteriaBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CreateWebTestCriteriaViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CreateWebTestCriteriaViewModel",
function(n){return new n.CreateWebTestCriteriaViewModel(t,i,r.dataContext)},n)},i.prototype.CreateWebTestAlertBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CreateWebTestBladeViewModel",
function(n){return new n.CreateWebTestAlertBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CreateWebTestAlertViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/ViewModels/CreateWebTestAlertViewModel",
function(n){return new n.CreateWebTestAlertViewModel(t,i,r.dataContext)},n)},i.prototype.WebTestResourceTypeService=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/Services/WebTestResourceTypeService",
function(n){return new n.WebTestResourceTypeService(t,i,r.dataContext)},n)},i.prototype.WebTestResourceMappingService=
function(t,i){var r=this;return this.loadViewModelAsync("../WebTests/Services/WebTestResourceMappingService",
function(n){return new n.WebTestResourceMappingService(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.WebTestsViewModelFactoriesBase=o;s=function(t){function i(){
t.apply(this,arguments)}return __extends(i,t),i.prototype.MetricsExplorerOutsideMEBladeViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/MetricsExplorerOutsideMEBladeViewModel",
function(n){return new n.MetricsExplorerOutsideMEBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
MetricsExplorerViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/MetricsExplorerViewModel",
function(n){return new n.MetricsExplorerViewModel(t,i,r.dataContext)},n)},i.prototype.MetricsExplorerBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/MetricsExplorerBladeViewModel",
function(n){return new n.MetricsExplorerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.AddChartCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/AddChartCommandViewModel",
function(n){return new n.AddChartCommandViewModel(t,i,r.dataContext)},n)},i.prototype.TimeRangeCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/TimeRangeCommand",
function(n){return new n.TimeRangeCommand(t,i,r.dataContext)},n)},i.prototype.FilterCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/FilterCommandViewModel",
function(n){return new n.FilterCommandViewModel(t,i,r.dataContext)},n)},i.prototype.RefreshBladeCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/RefreshBladeCommand",
function(n){return new n.RefreshBladeCommand(t,i,r.dataContext)},n)},i.prototype.AlertRulesCommand=function(
t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/AlertRulesCommand",function(
n){return new n.AlertRulesCommand(t,i,r.dataContext)},n)},i.prototype.FavoritesCommandViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/FavoritesCommandViewModel",
function(n){return new n.FavoritesCommandViewModel(t,i,r.dataContext)},n)},i.prototype.MetricsExplorerEditBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/MetricsExplorerEditBladeViewModel",
function(n){return new n.MetricsExplorerEditBladeViewModel(t,i,r.dataContext)},n)},i.prototype.MetricsExplorerEditViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/MetricsExplorerEditViewModel",
function(n){return new n.MetricsExplorerEditViewModel(t,i,r.dataContext)},n)},i.prototype.MetricsExplorerEditDeveloperViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/MetricsExplorerEditDeveloperViewModel",
function(n){return new n.MetricsExplorerEditDeveloperViewModel(t,i,r.dataContext)},n)},i.prototype.RemoveChartCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/RemoveChartCommandViewModel",
function(n){return new n.RemoveChartCommandViewModel(t,i,r.dataContext)},n)},i.prototype.MetricsExplorerEditChartNoticeBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../MetricsExplorer/ViewModels/MetricsExplorerEditChartNoticeBladeViewModel",
function(n){return new n.MetricsExplorerEditChartNoticeBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
MetricsExplorerEditChartNoticePartViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../MetricsExplorer/ViewModels/MetricsExplorerEditChartNoticePartViewModel",function(n){return new n.
MetricsExplorerEditChartNoticePartViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.
ViewModelAreaFactoriesBase);t.MetricsExplorerViewModelFactoriesBase=s;h=function(t){function i(){t.apply(
this,arguments)}return __extends(i,t),i.prototype.TelemetryEventsGaugePartViewModel=function(t,i){var
r=this;return this.loadViewModelAsync("../Billing/ViewModels/TelemetryEventsGaugePartViewModel",function(
n){return new n.TelemetryEventsGaugePartViewModel(t,i,r.dataContext)},n)},i.prototype.OverageOnOffSwitchPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/OverageOnOffSwitchPartViewModel",
function(n){return new n.OverageOnOffSwitchPartViewModel(t,i,r.dataContext)},n)},i.prototype.EventManagementBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/EventManagementBladeViewModel",
function(n){return new n.EventManagementBladeViewModel(t,i,r.dataContext)},n)},i.prototype.PricingTierLauncherExtender=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/PricingTierLauncherExtender",
function(n){return new n.PricingTierLauncherExtender(t,i,r.dataContext)},n)},i.prototype.BillingSpecPickerBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingSpecPickerBladeViewModel",
function(n){return new n.BillingSpecPickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.BillingSpecPickerExtender=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingSpecPickerBladeViewModel",
function(n){return new n.BillingSpecPickerExtender(t,i,r.dataContext)},n)},i.prototype.BillingComingSoonBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingComingSoonBladeViewModel",
function(n){return new n.BillingComingSoonBladeViewModel(t,i,r.dataContext)},n)},i.prototype.BillingComingSoonPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingComingSoonBladeViewModel",
function(n){return new n.BillingComingSoonPartViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.BillingViewModelFactoriesBase=h;c=function(t){function i(){t.
apply(this,arguments)}return __extends(i,t),i.prototype.CreateApplicationBladeViewModel=function(t,i)
{var r=this;return this.loadViewModelAsync("../CreateApplication/ViewModels/CreateApplicationBladeViewModel",
function(n){return new n.CreateApplicationBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CreateApplicationViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../CreateApplication/ViewModels/CreateApplicationViewModel",
function(n){return new n.CreateApplicationViewModel(t,i,r.dataContext)},n)},i.prototype.SelectApplicationTypeBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../CreateApplication/ViewModels/SelectApplicationTypeBladeViewModel",
function(n){return new n.SelectApplicationTypeBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SelectApplicationTypePartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../CreateApplication/ViewModels/SelectApplicationTypePartViewModel",
function(n){return new n.SelectApplicationTypePartViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.CreateApplicationViewModelFactoriesBase=c;l=function(t){function i(
){t.apply(this,arguments)}return __extends(i,t),i.prototype.ViewInMetricsExplorerViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Shared/CommonControls/ViewModels/ViewInMetricsExplorerViewModel",
function(n){return new n.ViewInMetricsExplorerViewModel(t,i,r.dataContext)},n)},i.prototype.ViewInDiagnosticSearchViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Shared/CommonControls/ViewModels/ViewInDiagnosticSearchViewModel",
function(n){return new n.ViewInDiagnosticSearchViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.SharedViewModelFactoriesBase=l;v=function(){function n(){}return n.
prototype.SetMonitoredApplicationsViewModelFactories=function(n){this._MonitoredApplicationsViewModelFactories=
n},n.prototype.MonitoredApplications=function(){return this._MonitoredApplicationsViewModelFactories=
this._MonitoredApplicationsViewModelFactories||new a,this._MonitoredApplicationsViewModelFactories},
n.prototype.MonitoredApplications$MonitoredApplicationsTileViewModel=function(n,t){return this.MonitoredApplications(
).MonitoredApplicationsTileViewModel(n,t)},n.prototype.SetOverviewViewModelFactories=function(n){this.
_OverviewViewModelFactories=n},n.prototype.Overview=function(){return this._OverviewViewModelFactories=
this._OverviewViewModelFactories||new i,this._OverviewViewModelFactories},n.prototype.Overview$EventSearchPartViewModel=
function(n,t){return this.Overview().EventSearchPartViewModel(n,t)},n.prototype.Overview$AppInsightsCollectionViewModel=
function(n,t){return this.Overview().AppInsightsCollectionViewModel(n,t)},n.prototype.Overview$QuickStartBladePartViewModel=
function(n,t){return this.Overview().QuickStartBladePartViewModel(n,t)},n.prototype.Overview$PropertiesButtonPartViewModel=
function(n,t){return this.Overview().PropertiesButtonPartViewModel(n,t)},n.prototype.Overview$PinnedOverviewsPartViewModel=
function(n,t){return this.Overview().PinnedOverviewsPartViewModel(n,t)},n.prototype.Overview$TopExceptionsPartViewModel=
function(n,t){return this.Overview().TopExceptionsPartViewModel(n,t)},n.prototype.Overview$MetricsExplorerBlankViewModel=
function(n,t){return this.Overview().MetricsExplorerBlankViewModel(n,t)},n.prototype.Overview$AspNetServersPartViewModel=
function(n,t){return this.Overview().AspNetServersPartViewModel(n,t)},n.prototype.Overview$FailuresExceptionsPartViewModel=
function(n,t){return this.Overview().FailuresExceptionsPartViewModel(n,t)},n.prototype.Overview$PerformanceDependenciesPartViewModel=
function(n,t){return this.Overview().PerformanceDependenciesPartViewModel(n,t)},n.prototype.Overview$BrowserPartViewModel=
function(n,t){return this.Overview().BrowserPartViewModel(n,t)},n.prototype.Overview$SummaryAssetPartViewModel=
function(n,t){return this.Overview().SummaryAssetPartViewModel(n,t)},n.prototype.Overview$DailyActiveUsersAssetPartViewModel=
function(n,t){return this.Overview().DailyActiveUsersAssetPartViewModel(n,t)},n.prototype.Overview$TrendlinePartViewModel=
function(n,t){return this.Overview().TrendlinePartViewModel(n,t)},n.prototype.Overview$FavoritesPartViewModel=
function(n,t){return this.Overview().FavoritesPartViewModel(n,t)},n.prototype.SetEndUserAnalyticsViewModelFactories=
function(n){this._EndUserAnalyticsViewModelFactories=n},n.prototype.EndUserAnalytics=function(){return this.
_EndUserAnalyticsViewModelFactories=this._EndUserAnalyticsViewModelFactories||new r,this._EndUserAnalyticsViewModelFactories}
,n.prototype.EndUserAnalytics$EndUserAnalyticsWebSiteViewModel=function(n,t){return this.EndUserAnalytics(
).EndUserAnalyticsWebSiteViewModel(n,t)},n.prototype.EndUserAnalytics$EndUserAnalyticsViewModel=function(
n,t){return this.EndUserAnalytics().EndUserAnalyticsViewModel(n,t)},n.prototype.EndUserAnalytics$BrowsersWebsitesViewModel=
function(n,t){return this.EndUserAnalytics().BrowsersWebsitesViewModel(n,t)},n.prototype.EndUserAnalytics$BrowsersViewModel=
function(n,t){return this.EndUserAnalytics().BrowsersViewModel(n,t)},n.prototype.EndUserAnalytics$SlowestRequestsViewModel=
function(n,t){return this.EndUserAnalytics().SlowestRequestsViewModel(n,t)},n.prototype.EndUserAnalytics$SummaryPageViewsDetailGridViewModel=
function(n,t){return this.EndUserAnalytics().SummaryPageViewsDetailGridViewModel(n,t)},n.prototype.EndUserAnalytics$PageViewsViewModel=
function(n,t){return this.EndUserAnalytics().PageViewsViewModel(n,t)},n.prototype.SetSearchViewModelFactories=
function(n){this._SearchViewModelFactories=n},n.prototype.Search=function(){return this._SearchViewModelFactories=
this._SearchViewModelFactories||new u,this._SearchViewModelFactories},n.prototype.Search$EventDetailTileViewModel=
function(n,t){return this.Search().EventDetailTileViewModel(n,t)},n.prototype.Search$SearchPinnedPartViewModel=
function(n,t){return this.Search().SearchPinnedPartViewModel(n,t)},n.prototype.SetPerformanceMonitoringViewModelFactories=
function(n){this._PerformanceMonitoringViewModelFactories=n},n.prototype.PerformanceMonitoring=function(
){return this._PerformanceMonitoringViewModelFactories=this._PerformanceMonitoringViewModelFactories||
new f,this._PerformanceMonitoringViewModelFactories},n.prototype.PerformanceMonitoring$ExceptionsBarChartViewModel=
function(n,t){return this.PerformanceMonitoring().ExceptionsBarChartViewModel(n,t)},n.prototype.SetContinuousExportViewModelFactories=
function(n){this._ContinuousExportViewModelFactories=n},n.prototype.ContinuousExport=function(){return this.
_ContinuousExportViewModelFactories=this._ContinuousExportViewModelFactories||new e,this._ContinuousExportViewModelFactories}
,n.prototype.ContinuousExport$ContinuousExportButtonViewModel=function(n,t){return this.ContinuousExport(
).ContinuousExportButtonViewModel(n,t)},n.prototype.SetWebTestsViewModelFactories=function(n){this._WebTestsViewModelFactories=
n},n.prototype.WebTests=function(){return this._WebTestsViewModelFactories=this._WebTestsViewModelFactories||
new o,this._WebTestsViewModelFactories},n.prototype.WebTests$WebTestTileViewModel=function(n,t){return this.
WebTests().WebTestTileViewModel(n,t)},n.prototype.WebTests$WebTestsWebSitesSetupViewModel=function(n,
t){return this.WebTests().WebTestsWebSitesSetupViewModel(n,t)},n.prototype.WebTests$WebTestsSetupViewModel=
function(n,t){return this.WebTests().WebTestsSetupViewModel(n,t)},n.prototype.WebTests$WebTestsViewModel=
function(n,t){return this.WebTests().WebTestsViewModel(n,t)},n.prototype.WebTests$AllWebTestsResponseTimeViewModel=
function(n,t){return this.WebTests().AllWebTestsResponseTimeViewModel(n,t)},n.prototype.WebTests$AllWebTestsResponseTimeFullViewModel=
function(n,t){return this.WebTests().AllWebTestsResponseTimeFullViewModel(n,t)},n.prototype.SetMetricsExplorerViewModelFactories=
function(n){this._MetricsExplorerViewModelFactories=n},n.prototype.MetricsExplorer=function(){return this.
_MetricsExplorerViewModelFactories=this._MetricsExplorerViewModelFactories||new s,this._MetricsExplorerViewModelFactories}
,n.prototype.MetricsExplorer$MetricsExplorerOutsideMEBladeViewModel=function(n,t){return this.MetricsExplorer(
).MetricsExplorerOutsideMEBladeViewModel(n,t)},n.prototype.MetricsExplorer$MetricsExplorerViewModel=
function(n,t){return this.MetricsExplorer().MetricsExplorerViewModel(n,t)},n.prototype.SetBillingViewModelFactories=
function(n){this._BillingViewModelFactories=n},n.prototype.Billing=function(){return this._BillingViewModelFactories=
this._BillingViewModelFactories||new h,this._BillingViewModelFactories},n.prototype.Billing$TelemetryEventsGaugePartViewModel=
function(n,t){return this.Billing().TelemetryEventsGaugePartViewModel(n,t)},n.prototype.Billing$OverageOnOffSwitchPartViewModel=
function(n,t){return this.Billing().OverageOnOffSwitchPartViewModel(n,t)},n.prototype.Overview$FavoritesBladeViewModel=
function(n,t){return this.Overview().FavoritesBladeViewModel(n,t)},n.prototype.Overview$FavoritesListViewModel=
function(n,t){return this.Overview().FavoritesListViewModel(n,t)},n.prototype.Overview$FavoritesListRefreshCommandViewModel=
function(n,t){return this.Overview().FavoritesListRefreshCommandViewModel(n,t)},n.prototype.Overview$QuickStartBladeViewModel=
function(n,t){return this.Overview().QuickStartBladeViewModel(n,t)},n.prototype.Overview$QuickStartBladeInfoListViewModel=
function(n,t){return this.Overview().QuickStartBladeInfoListViewModel(n,t)},n.prototype.Overview$EventsConfigurationBladeViewModel=
function(n,t){return this.Overview().EventsConfigurationBladeViewModel(n,t)},n.prototype.Overview$EventsConfigurationViewModel=
function(n,t){return this.Overview().EventsConfigurationViewModel(n,t)},n.prototype.Overview$PropertiesBladeViewModel=
function(n,t){return this.Overview().PropertiesBladeViewModel(n,t)},n.prototype.Overview$PropertiesFormViewModel=
function(n,t){return this.Overview().PropertiesFormViewModel(n,t)},n.prototype.Overview$AspNetOverviewBladeViewModel=
function(n,t){return this.Overview().AspNetOverviewBladeViewModel(n,t)},n.prototype.Overview$ComponentResourceSummaryViewModel=
function(n,t){return this.Overview().ComponentResourceSummaryViewModel(n,t)},n.prototype.Overview$SettingsCommand=
function(n,t){return this.Overview().SettingsCommand(n,t)},n.prototype.Overview$TimeRangeCommand=function(
n,t){return this.Overview().TimeRangeCommand(n,t)},n.prototype.Overview$RefreshBladeCommand=function(
n,t){return this.Overview().RefreshBladeCommand(n,t)},n.prototype.Overview$DeleteApplicationCommand=
function(n,t){return this.Overview().DeleteApplicationCommand(n,t)},n.prototype.Overview$DeviceOverviewBladeViewModel=
function(n,t){return this.Overview().DeviceOverviewBladeViewModel(n,t)},n.prototype.Overview$JavaWebOverviewBladeViewModel=
function(n,t){return this.Overview().JavaWebOverviewBladeViewModel(n,t)},n.prototype.Overview$JavaWebConfigurationBladeViewModel=
function(n,t){return this.Overview().JavaWebConfigurationBladeViewModel(n,t)},n.prototype.Overview$JavaWebLogConfigurationDescriptionPartViewModel=
function(n,t){return this.Overview().JavaWebLogConfigurationDescriptionPartViewModel(n,t)},n.prototype.
Overview$JavaWebLogConfigurationPartOneViewModel=function(n,t){return this.Overview().JavaWebLogConfigurationPartOneViewModel(
n,t)},n.prototype.Overview$JavaWebGetCodeConfigurationViewModel=function(n,t){return this.Overview().
JavaWebGetCodeConfigurationViewModel(n,t)},n.prototype.Overview$JavaWebLogConfigurationPartTwoViewModel=
function(n,t){return this.Overview().JavaWebLogConfigurationPartTwoViewModel(n,t)},n.prototype.Overview$GettingStartedCustomEventsBladeViewModel=
function(n,t){return this.Overview().GettingStartedCustomEventsBladeViewModel(n,t)},n.prototype.Overview$DevicesNoticeBladeViewModel=
function(n,t){return this.Overview().DevicesNoticeBladeViewModel(n,t)},n.prototype.Overview$DevicesNoticePartViewModel=
function(n,t){return this.Overview().DevicesNoticePartViewModel(n,t)},n.prototype.Overview$AttachBladeViewModel=
function(n,t){return this.Overview().AttachBladeViewModel(n,t)},n.prototype.Overview$AttachActionBarViewModel=
function(n,t){return this.Overview().AttachActionBarViewModel(n,t)},n.prototype.Overview$AttachGridViewModel=
function(n,t){return this.Overview().AttachGridViewModel(n,t)},n.prototype.Overview$SettingListBladeViewModel=
function(n,t){return this.Overview().SettingListBladeViewModel(n,t)},n.prototype.Overview$SettingListPartViewModel=
function(n,t){return this.Overview().SettingListPartViewModel(n,t)},n.prototype.EndUserAnalytics$EndUserAnalyticsBladeViewModel=
function(n,t){return this.EndUserAnalytics().EndUserAnalyticsBladeViewModel(n,t)},n.prototype.EndUserAnalytics$DevicesViewModel=
function(n,t){return this.EndUserAnalytics().DevicesViewModel(n,t)},n.prototype.EndUserAnalytics$SessionsViewModel=
function(n,t){return this.EndUserAnalytics().SessionsViewModel(n,t)},n.prototype.EndUserAnalytics$ConfigurationLauncherViewModel=
function(n,t){return this.EndUserAnalytics().ConfigurationLauncherViewModel(n,t)},n.prototype.EndUserAnalytics$TimeRangeCommand=
function(n,t){return this.EndUserAnalytics().TimeRangeCommand(n,t)},n.prototype.EndUserAnalytics$RefreshBladeCommand=
function(n,t){return this.EndUserAnalytics().RefreshBladeCommand(n,t)},n.prototype.EndUserAnalytics$ConfigurationBladeViewModel=
function(n,t){return this.EndUserAnalytics().ConfigurationBladeViewModel(n,t)},n.prototype.EndUserAnalytics$ConfigurationViewModel=
function(n,t){return this.EndUserAnalytics().ConfigurationViewModel(n,t)},n.prototype.Search$SearchBladeViewModel=
function(n,t){return this.Search().SearchBladeViewModel(n,t)},n.prototype.Search$SearchControlPartViewModel=
function(n,t){return this.Search().SearchControlPartViewModel(n,t)},n.prototype.Search$TimeRangeCommand=
function(n,t){return this.Search().TimeRangeCommand(n,t)},n.prototype.Search$FilterCommandViewModel=
function(n,t){return this.Search().FilterCommandViewModel(n,t)},n.prototype.Search$SearchRefreshCommandViewModel=
function(n,t){return this.Search().SearchRefreshCommandViewModel(n,t)},n.prototype.Search$ResetFiltersCommandViewModel=
function(n,t){return this.Search().ResetFiltersCommandViewModel(n,t)},n.prototype.Search$SetupLoggingCommandViewModel=
function(n,t){return this.Search().SetupLoggingCommandViewModel(n,t)},n.prototype.Search$FavoritesCommandViewModel=
function(n,t){return this.Search().FavoritesCommandViewModel(n,t)},n.prototype.Search$FilterDetailsBladeViewModel=
function(n,t){return this.Search().FilterDetailsBladeViewModel(n,t)},n.prototype.Search$SearchFilterDetailPartViewModel=
function(n,t){return this.Search().SearchFilterDetailPartViewModel(n,t)},n.prototype.Search$ClearFiltersCommandViewModel=
function(n,t){return this.Search().ClearFiltersCommandViewModel(n,t)},n.prototype.Search$SearchResultDetailBladeViewModel=
function(n,t){return this.Search().SearchResultDetailBladeViewModel(n,t)},n.prototype.Search$EventPropertiesCustomPartViewModel=
function(n,t){return this.Search().EventPropertiesCustomPartViewModel(n,t)},n.prototype.Search$MonacoBladeViewModel=
function(n,t){return this.Search().MonacoBladeViewModel(n,t)},n.prototype.Search$EditorPartViewModel=
function(n,t){return this.Search().EditorPartViewModel(n,t)},n.prototype.Search$TimeSelectorDetailBladeViewModel=
function(n,t){return this.Search().TimeSelectorDetailBladeViewModel(n,t)},n.prototype.Search$TimeRangeSelectorPartViewModel=
function(n,t){return this.Search().TimeRangeSelectorPartViewModel(n,t)},n.prototype.Search$EventDetailsBladeViewModel=
function(n,t){return this.Search().EventDetailsBladeViewModel(n,t)},n.prototype.Search$CustomEventDetailsCustomPartViewModel=
function(n,t){return this.Search().CustomEventDetailsCustomPartViewModel(n,t)},n.prototype.Search$ExceptionDetailsCustomPartViewModel=
function(n,t){return this.Search().ExceptionDetailsCustomPartViewModel(n,t)},n.prototype.Search$PageViewDetailsCustomPartViewModel=
function(n,t){return this.Search().PageViewDetailsCustomPartViewModel(n,t)},n.prototype.Search$RequestDetailsCustomPartViewModel=
function(n,t){return this.Search().RequestDetailsCustomPartViewModel(n,t)},n.prototype.Search$TraceDetailsCustomPartViewModel=
function(n,t){return this.Search().TraceDetailsCustomPartViewModel(n,t)},n.prototype.SetCreateApplicationViewModelFactories=
function(n){this._CreateApplicationViewModelFactories=n},n.prototype.CreateApplication=function(){return this.
_CreateApplicationViewModelFactories=this._CreateApplicationViewModelFactories||new c,this._CreateApplicationViewModelFactories}
,n.prototype.CreateApplication$CreateApplicationBladeViewModel=function(n,t){return this.CreateApplication(
).CreateApplicationBladeViewModel(n,t)},n.prototype.CreateApplication$CreateApplicationViewModel=function(
n,t){return this.CreateApplication().CreateApplicationViewModel(n,t)},n.prototype.CreateApplication$SelectApplicationTypeBladeViewModel=
function(n,t){return this.CreateApplication().SelectApplicationTypeBladeViewModel(n,t)},n.prototype.
CreateApplication$SelectApplicationTypePartViewModel=function(n,t){return this.CreateApplication().SelectApplicationTypePartViewModel(
n,t)},n.prototype.ContinuousExport$ContinuousExportBladeViewModel=function(n,t){return this.ContinuousExport(
).ContinuousExportBladeViewModel(n,t)},n.prototype.ContinuousExport$ContinuousExportBillingTextBoxViewModel=
function(n,t){return this.ContinuousExport().ContinuousExportBillingTextBoxViewModel(n,t)},n.prototype.
ContinuousExport$ContinuousExportPartViewModel=function(n,t){return this.ContinuousExport().ContinuousExportPartViewModel(
n,t)},n.prototype.ContinuousExport$AddContinuousExportCommandViewModel=function(n,t){return this.ContinuousExport(
).AddContinuousExportCommandViewModel(n,t)},n.prototype.ContinuousExport$RefreshContinuousExportCommandViewModel=
function(n,t){return this.ContinuousExport().RefreshContinuousExportCommandViewModel(n,t)},n.prototype.
ContinuousExport$CreateContinuousExportBladeViewModel=function(n,t){return this.ContinuousExport().CreateContinuousExportBladeViewModel(
n,t)},n.prototype.ContinuousExport$CreateContinuousExportPartViewModel=function(n,t){return this.ContinuousExport(
).CreateContinuousExportPartViewModel(n,t)},n.prototype.ContinuousExport$ContinuousExportEventTypesBladeViewModel=
function(n,t){return this.ContinuousExport().ContinuousExportEventTypesBladeViewModel(n,t)},n.prototype.
ContinuousExport$ContinuousExportEventTypesPartViewModel=function(n,t){return this.ContinuousExport(
).ContinuousExportEventTypesPartViewModel(n,t)},n.prototype.ContinuousExport$ContinuousExportEditBladeViewModel=
function(n,t){return this.ContinuousExport().ContinuousExportEditBladeViewModel(n,t)},n.prototype.ContinuousExport$SaveContinuousExportCommandViewModel=
function(n,t){return this.ContinuousExport().SaveContinuousExportCommandViewModel(n,t)},n.prototype.
ContinuousExport$EnableContinuousExportCommandViewModel=function(n,t){return this.ContinuousExport().
EnableContinuousExportCommandViewModel(n,t)},n.prototype.ContinuousExport$DisableContinuousExportCommandViewModel=
function(n,t){return this.ContinuousExport().DisableContinuousExportCommandViewModel(n,t)},n.prototype.
ContinuousExport$DeleteContinuousExportCommandViewModel=function(n,t){return this.ContinuousExport().
DeleteContinuousExportCommandViewModel(n,t)},n.prototype.WebTests$WebTestsBladeViewModel=function(n,
t){return this.WebTests().WebTestsBladeViewModel(n,t)},n.prototype.WebTests$ResponseTimeViewModel=function(
n,t){return this.WebTests().ResponseTimeViewModel(n,t)},n.prototype.WebTests$AllWebTestsViewModel=function(
n,t){return this.WebTests().AllWebTestsViewModel(n,t)},n.prototype.WebTests$CommandAddWebTestViewModel=
function(n,t){return this.WebTests().CommandAddWebTestViewModel(n,t)},n.prototype.WebTests$TimeRangeCommand=
function(n,t){return this.WebTests().TimeRangeCommand(n,t)},n.prototype.WebTests$RefreshBladeCommand=
function(n,t){return this.WebTests().RefreshBladeCommand(n,t)},n.prototype.WebTests$WebTestsDetailBladeViewModel=
function(n,t){return this.WebTests().WebTestsDetailBladeViewModel(n,t)},n.prototype.WebTests$ResponseAndAvailabilityViewModel=
function(n,t){return this.WebTests().ResponseAndAvailabilityViewModel(n,t)},n.prototype.WebTests$TestLocationsViewModel=
function(n,t){return this.WebTests().TestLocationsViewModel(n,t)},n.prototype.WebTests$CommandEditWebTestViewModel=
function(n,t){return this.WebTests().CommandEditWebTestViewModel(n,t)},n.prototype.WebTests$CommandDownloadWebTestViewModel=
function(n,t){return this.WebTests().CommandDownloadWebTestViewModel(n,t)},n.prototype.WebTests$EnableWebTestCommandViewModel=
function(n,t){return this.WebTests().EnableWebTestCommandViewModel(n,t)},n.prototype.WebTests$DisableWebTestCommandViewModel=
function(n,t){return this.WebTests().DisableWebTestCommandViewModel(n,t)},n.prototype.WebTests$CommandDeleteWebTestViewModel=
function(n,t){return this.WebTests().CommandDeleteWebTestViewModel(n,t)},n.prototype.WebTests$WebTestLocationDetailBladeViewModel=
function(n,t){return this.WebTests().WebTestLocationDetailBladeViewModel(n,t)},n.prototype.WebTests$ResponseAndAvailabilityLocationViewModel=
function(n,t){return this.WebTests().ResponseAndAvailabilityLocationViewModel(n,t)},n.prototype.WebTests$FailedTestsViewModel=
function(n,t){return this.WebTests().FailedTestsViewModel(n,t)},n.prototype.WebTests$WebTestResultBladeViewModel=
function(n,t){return this.WebTests().WebTestResultBladeViewModel(n,t)},n.prototype.WebTests$SummaryViewModel=
function(n,t){return this.WebTests().SummaryViewModel(n,t)},n.prototype.WebTests$ResultGridViewModel=
function(n,t){return this.WebTests().ResultGridViewModel(n,t)},n.prototype.WebTests$DownloadViewModel=
function(n,t){return this.WebTests().DownloadViewModel(n,t)},n.prototype.WebTests$WebTestResultDetailBladeViewModel=
function(n,t){return this.WebTests().WebTestResultDetailBladeViewModel(n,t)},n.prototype.WebTests$ResultGridResponseHeadersViewModel=
function(n,t){return this.WebTests().ResultGridResponseHeadersViewModel(n,t)},n.prototype.WebTests$ResultGridResponseBodyViewModel=
function(n,t){return this.WebTests().ResultGridResponseBodyViewModel(n,t)},n.prototype.WebTests$ResultGridDetailRulesViewModel=
function(n,t){return this.WebTests().ResultGridDetailRulesViewModel(n,t)},n.prototype.WebTests$ResultGridDetailExceptionViewModel=
function(n,t){return this.WebTests().ResultGridDetailExceptionViewModel(n,t)},n.prototype.WebTests$CreateWebTestBladeViewModel=
function(n,t){return this.WebTests().CreateWebTestBladeViewModel(n,t)},n.prototype.WebTests$CreateWebTestViewModel=
function(n,t){return this.WebTests().CreateWebTestViewModel(n,t)},n.prototype.WebTests$EditWebTestBladeViewModel=
function(n,t){return this.WebTests().EditWebTestBladeViewModel(n,t)},n.prototype.WebTests$CreateWebTestLocationBladeViewModel=
function(n,t){return this.WebTests().CreateWebTestLocationBladeViewModel(n,t)},n.prototype.WebTests$CreateWebTestLocationViewModel=
function(n,t){return this.WebTests().CreateWebTestLocationViewModel(n,t)},n.prototype.WebTests$CreateWebTestCriteriaBladeViewModel=
function(n,t){return this.WebTests().CreateWebTestCriteriaBladeViewModel(n,t)},n.prototype.WebTests$CreateWebTestCriteriaViewModel=
function(n,t){return this.WebTests().CreateWebTestCriteriaViewModel(n,t)},n.prototype.WebTests$CreateWebTestAlertBladeViewModel=
function(n,t){return this.WebTests().CreateWebTestAlertBladeViewModel(n,t)},n.prototype.WebTests$CreateWebTestAlertViewModel=
function(n,t){return this.WebTests().CreateWebTestAlertViewModel(n,t)},n.prototype.MetricsExplorer$MetricsExplorerBladeViewModel=
function(n,t){return this.MetricsExplorer().MetricsExplorerBladeViewModel(n,t)},n.prototype.MetricsExplorer$AddChartCommandViewModel=
function(n,t){return this.MetricsExplorer().AddChartCommandViewModel(n,t)},n.prototype.MetricsExplorer$TimeRangeCommand=
function(n,t){return this.MetricsExplorer().TimeRangeCommand(n,t)},n.prototype.MetricsExplorer$FilterCommandViewModel=
function(n,t){return this.MetricsExplorer().FilterCommandViewModel(n,t)},n.prototype.MetricsExplorer$RefreshBladeCommand=
function(n,t){return this.MetricsExplorer().RefreshBladeCommand(n,t)},n.prototype.MetricsExplorer$AlertRulesCommand=
function(n,t){return this.MetricsExplorer().AlertRulesCommand(n,t)},n.prototype.MetricsExplorer$FavoritesCommandViewModel=
function(n,t){return this.MetricsExplorer().FavoritesCommandViewModel(n,t)},n.prototype.MetricsExplorer$MetricsExplorerEditBladeViewModel=
function(n,t){return this.MetricsExplorer().MetricsExplorerEditBladeViewModel(n,t)},n.prototype.MetricsExplorer$MetricsExplorerEditViewModel=
function(n,t){return this.MetricsExplorer().MetricsExplorerEditViewModel(n,t)},n.prototype.MetricsExplorer$MetricsExplorerEditDeveloperViewModel=
function(n,t){return this.MetricsExplorer().MetricsExplorerEditDeveloperViewModel(n,t)},n.prototype.
MetricsExplorer$RemoveChartCommandViewModel=function(n,t){return this.MetricsExplorer().RemoveChartCommandViewModel(
n,t)},n.prototype.MetricsExplorer$MetricsExplorerEditChartNoticeBladeViewModel=function(n,t){return this.
MetricsExplorer().MetricsExplorerEditChartNoticeBladeViewModel(n,t)},n.prototype.MetricsExplorer$MetricsExplorerEditChartNoticePartViewModel=
function(n,t){return this.MetricsExplorer().MetricsExplorerEditChartNoticePartViewModel(n,t)},n.prototype.
Billing$EventManagementBladeViewModel=function(n,t){return this.Billing().EventManagementBladeViewModel(
n,t)},n.prototype.Billing$PricingTierLauncherExtender=function(n,t){return this.Billing().PricingTierLauncherExtender(
n,t)},n.prototype.Billing$BillingSpecPickerBladeViewModel=function(n,t){return this.Billing().BillingSpecPickerBladeViewModel(
n,t)},n.prototype.Billing$BillingSpecPickerExtender=function(n,t){return this.Billing().BillingSpecPickerExtender(
n,t)},n.prototype.Billing$BillingComingSoonBladeViewModel=function(n,t){return this.Billing().BillingComingSoonBladeViewModel(
n,t)},n.prototype.Billing$BillingComingSoonPartViewModel=function(n,t){return this.Billing().BillingComingSoonPartViewModel(
n,t)},n.prototype.Overview$AlertsPartAdapterViewModel=function(n,t){return this.Overview().AlertsPartAdapterViewModel(
n,t)},n.prototype.Overview$OverviewTimelineAdapterPartViewModel=function(n,t){return this.Overview().
OverviewTimelineAdapterPartViewModel(n,t)},n.prototype.Overview$DiagnosticsTimelineAdapterPartViewModel=
function(n,t){return this.Overview().DiagnosticsTimelineAdapterPartViewModel(n,t)},n.prototype.Overview$PerformanceTimelineAdapterPartViewModel=
function(n,t){return this.Overview().PerformanceTimelineAdapterPartViewModel(n,t)},n.prototype.Overview$UsageTimelineAdapterPartViewModel=
function(n,t){return this.Overview().UsageTimelineAdapterPartViewModel(n,t)},n.prototype.Overview$TopExceptionsAdapterPartViewModel=
function(n,t){return this.Overview().TopExceptionsAdapterPartViewModel(n,t)},n.prototype.Overview$SlowestRequestsAdapterPartViewModel=
function(n,t){return this.Overview().SlowestRequestsAdapterPartViewModel(n,t)},n.prototype.Overview$TopFailedRequestsAdapterPartViewModel=
function(n,t){return this.Overview().TopFailedRequestsAdapterPartViewModel(n,t)},n.prototype.Overview$QuickStartAdapterPartViewModel=
function(n,t){return this.Overview().QuickStartAdapterPartViewModel(n,t)},n.prototype.Overview$PageViewsAdapterPartViewModel=
function(n,t){return this.Overview().PageViewsAdapterPartViewModel(n,t)},n.prototype.Overview$AllWebTestsResponseTimeFullGalleryAdapterPartViewModel=
function(n,t){return this.Overview().AllWebTestsResponseTimeFullGalleryAdapterPartViewModel(n,t)},n.
prototype.Overview$TagsAdapterPartViewModel=function(n,t){return this.Overview().TagsAdapterPartViewModel(
n,t)},n.prototype.Overview$PropertiesAdapterPartViewModel=function(n,t){return this.Overview().PropertiesAdapterPartViewModel(
n,t)},n.prototype.Overview$CustomEventsAdapterPartViewModel=function(n,t){return this.Overview().CustomEventsAdapterPartViewModel(
n,t)},n.prototype.Overview$TopCrashesAdapterPartViewModel=function(n,t){return this.Overview().TopCrashesAdapterPartViewModel(
n,t)},n.prototype.Overview$ResourceMapAdapterPartViewModel=function(n,t){return this.Overview().ResourceMapAdapterPartViewModel(
n,t)},n.prototype.Overview$EventsSummaryAdapterPartViewModel=function(n,t){return this.Overview().EventsSummaryAdapterPartViewModel(
n,t)},n.prototype.MonitoredApplications$DeleteApplicationCommand=function(n,t){return this.MonitoredApplications(
).DeleteApplicationCommand(n,t)},n.prototype.Search$SearchCommandViewModel=function(n,t){return this.
Search().SearchCommandViewModel(n,t)},n.prototype.Search$ViewFullCommandViewModel=function(n,t){return this.
Search().ViewFullCommandViewModel(n,t)},n.prototype.SetSharedViewModelFactories=function(n){this._SharedViewModelFactories=
n},n.prototype.Shared=function(){return this._SharedViewModelFactories=this._SharedViewModelFactories||
new l,this._SharedViewModelFactories},n.prototype.ViewInMetricsExplorerViewModel=function(n,t){return this.
Shared().ViewInMetricsExplorerViewModel(n,t)},n.prototype.ViewInDiagnosticSearchViewModel=function(n,
t){return this.Shared().ViewInDiagnosticSearchViewModel(n,t)},n.prototype.MonitoredApplications$ApplicationsAssetViewModel=
function(n,t){return this.MonitoredApplications().ApplicationsAssetViewModel(n,t)},n.prototype.MonitoredApplications$ComponentResourceTypeService=
function(n,t){return this.MonitoredApplications().ComponentResourceTypeService(n,t)},n.prototype.MonitoredApplications$ComponentResourceMappingViewModel=
function(n,t){return this.MonitoredApplications().ComponentResourceMappingViewModel(n,t)},n.prototype.
MonitoredApplications$ApplicationsDynamicBladeService=function(n,t){return this.MonitoredApplications(
).ApplicationsDynamicBladeService(n,t)},n.prototype.Search$EventDetailResourceTypeService=function(n,
t){return this.Search().EventDetailResourceTypeService(n,t)},n.prototype.Search$EventDetailResourceMappingService=
function(n,t){return this.Search().EventDetailResourceMappingService(n,t)},n.prototype.Search$EventDetailDynamicBladeService=
function(n,t){return this.Search().EventDetailDynamicBladeService(n,t)},n.prototype.WebTests$WebTestResourceTypeService=
function(n,t){return this.WebTests().WebTestResourceTypeService(n,t)},n.prototype.WebTests$WebTestResourceMappingService=
function(n,t){return this.WebTests().WebTestResourceMappingService(n,t)},n}();t.ViewModelFactoriesBase=
v}(t||(t={})),t});define("Shared/DataContext",["require","exports","../_generated/ExtensionDefinition",
"./InsightsTelemetry","./ComponentIdCache","./ComponentIdService","./Constants","./EntityCacheHelper",
"./NoDataHelper","./QueryBase","./TimeContext","./TransformHelper","./DataModels/MetricsMetadataResult",
"./DataModels/AttributeMetadataResult","./BillingPlanForComponentIdModel","./DataModels/ApplicationRowData",
"./DataModels/NoDataQueries","./DataModels/WebTestResourceId","./FavoriteViewHelper","./DataModels/EventType",
"./DataQueries/Search.DataSource","./SearchQueryBase","./DataQueries/AggregateQuery","./DataQueries/MetadataQuery"],
function(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt,it){"use strict";var ut=function(){function n(
){var t,i;this.lastRefreshDate=ko.observable();this._entityStartTimeMap={};this._aggregateQueryEntityCache=
o.createEntityCacheWithSourceUrl(e.GraphPathTemplates.Aggregate,tt.AggregateQuery.getResult,null,tt.
getKey);this._noRequestsEverEntityCache=o.createEntityCacheWithSourceUrl(e.GraphPathTemplates.Aggregate,
w.NoRequestsEverQuery.transform,null,tt.getKey);this.requestsNoDataHelperFactory=new s.NoDataHelperFactory(
this._noRequestsEverEntityCache,function(n,t){return new w.NoRequestsEverQuery(n,e.NoPartSpecific,t)}
,this,e.AggregateEndpointNotProvisionedCode);this._noSessionsEverEntityCache=o.createEntityCacheWithSourceUrl(
e.GraphPathTemplates.Aggregate,w.NoSessionsEverQuery.transform,null,tt.getKey);this.sessionsNoDataHelperFactory=
new s.NoDataHelperFactory(this._noSessionsEverEntityCache,function(n,t){return new w.NoSessionsEverQuery(
n,e.NoPartSpecific,t)},this,e.AggregateEndpointNotProvisionedCode);this._noPageViewsEverEntityCache=
o.createEntityCacheWithSourceUrl(e.GraphPathTemplates.Aggregate,w.NoPageViewsEverQuery.transform,null,
tt.getKey);this.pageViewsNoDataHelperFactory=new s.NoDataHelperFactory(this._noPageViewsEverEntityCache,
function(n,t){return new w.NoPageViewsEverQuery(n,e.NoPartSpecific,t)},this,e.AggregateEndpointNotProvisionedCode);
this._noCustomEventsEverEntityCache=o.createEntityCacheWithSourceUrl(e.GraphPathTemplates.Aggregate,
w.NoCustomEventsEverQuery.transform,null,tt.getKey);this.customEventsNoDataHelperFactory=new s.NoDataHelperFactory(
this._noCustomEventsEverEntityCache,function(n,t){return new w.NoCustomEventsEverQuery(n,e.NoPartSpecific,
t)},this,e.AggregateEndpointNotProvisionedCode);this._noCrashesEverEntityCache=o.createEntityCacheWithSourceUrl(
e.GraphPathTemplates.Aggregate,w.NoCrashesEverQuery.transform,null,tt.getKey);this.crashesNoDataHelperFactory=
new s.NoDataHelperFactory(this._noCrashesEverEntityCache,function(n,t){return new w.NoCrashesEverQuery(
n,e.NoPartSpecific,t)},this,e.AggregateEndpointNotProvisionedCode);t=o.createEntityCacheWithSourceUrl(
e.GraphPathTemplates.Aggregate,w.NoRemoteDependenciesEverQuery.transform,null,tt.getKey);this.remoteDependenciesNoDataHelperFactory=
new s.NoDataHelperFactory(t,function(n,t){return new w.NoRemoteDependenciesEverQuery(n,e.NoPartSpecific,
t)},this,e.AggregateEndpointNotProvisionedCode);i=o.createEntityCacheWithSourceUrl(e.GraphPathTemplates.
Aggregate,w.NoPerfCountersEverQuery.transform,null,tt.getKey);this.perfCountersNoDataHelperFactory=new
s.NoDataHelperFactory(i,function(n,t){return new w.NoPerfCountersEverQuery(n,e.NoPartSpecific,t)},this,
e.AggregateEndpointNotProvisionedCode);this.lastRefreshDate(new Date);this._attributeMetadataEntityCache=
o.createEntityCacheWithSourceUrl(e.GraphPathTemplates.AttributeMetadata,v.transform,null,it.AttributesMetadataQuery.
getKey);this._metricsMetadataEntityCache=o.createEntityCacheWithSourceUrl(e.GraphPathTemplates.MetricsMetadata,
a.transform,null,it.MetricsMetadataQuery.getKey);this._monitoredApplicationsEntityCache=o.createEntityCacheWithGetData(
n._loadComponents,n._getKey);this._webTestsEntityCache=o.createEntityCacheWithSourceUrl(e.GraphPathTemplates.
WebTests,b.FilterToWebSite,undefined,h.getKey);this._billingPlanForComponentIdEntityCache=o.createEntityCacheWithSourceUrl(
e.GraphPathTemplates.BillingPlanForComponent,y.transformBillingPlan,null,h.getKey);this._favoriteDataForComponentEntityCache=
o.createEntityCacheWithSourceUrl(e.GraphPathTemplates.Favorites,null,null,h.getKey);this._favoriteDataFormEditScopeCache=
MsPortalFx.Data.EditScopeCache.createNew({supplyNewData:function(){return new k.FavoriteEditScopeSwitch}
});this._searchResultsEntityCache=o.createEntityCacheWithSourceUrl(e.GraphPathTemplates.V2SearchResults,
n.transformSearchResults,null,g.SearchResultsQuery.getKey);this._linkedWebTestEntityCache=o.createEntityCacheWithSourceUrl(
e.GraphPathTemplates.WebTests,n.filterToComponent,null,h.getKey);this._setupChannels()}return Object.
defineProperty(n,"SubscriptionData",{get:function(){return n.subscriptions||(n.subscriptions=new MsPortal.
Azure.SubscriptionsData),n.subscriptions},enumerable:!0,configurable:!0}),n._getKey=function(){return i.
definitionName},n._loadComponents=function(){var i=ko.observableArray([]),t=$.Deferred();return n.SubscriptionData.
loadPromise.then(function(){if(n.SubscriptionData.subscriptions()&&n.SubscriptionData.subscriptions(
).length>0){var e=n.SubscriptionData.subscriptions().length;n.SubscriptionData.subscriptions().forEach(
function(o){f.fetchComponentsForSubscription(o.subscriptionID,r.AITelemetryConstants.MonitoredApplicationsArea).
then(function(t){t.forEach(function(t){t.name&&i.push(new p.ApplicationRowData(t,n.SubscriptionData))}
)}).finally(function(){--e==0&&(t.resolve(i),u.update(i()))})})}else r.logWarning("No subscriptions found",
3,r.AITelemetryConstants.MonitoredApplicationsArea,undefined),t.reject()}).catch(function(){r.logWarning(
"Fetch subscriptions error",3,r.AITelemetryConstants.MonitoredApplicationsArea,undefined);t.reject()}
),t.promise()},n.prototype.registerForRefresh=function(n,t){this.lastRefreshDate.subscribe(t,function(
t){var i=n.timeContext?n.timeContext():undefined;if(i)n.onRefresh(c.copy(i,t))})},n.prototype.AddOrUpdateInitializationTime=
function(n,t){t&&(this._entityStartTimeMap[t]=n)},n.prototype.GetInitializationTime=function(n){return this.
_entityStartTimeMap[n]},n.filterToComponent=function(n,t){var i=l.unwrapCsmArray(n),r;return i===null?
null:(r={SubscriptionId:t.subscriptionId,ResourceGroup:t.resourceGroup,Name:t.componentName},b.FilterToComponent(
i,r))},n.transformSearchResults=function(n,t){var r=new d.SearchResults,i=nt.SearchQueryBase.getResult(
n),f,u,e;if(i&&i.total!==undefined){if(r.totalCount=i.total,i.hits&&$.isArray(i.hits))for(r.items=[],
f=0;f<i.hits.length;f++)u=i.hits[f],u&&u.document&&(e=d.EventFactory.CreateSummary(u.document,u.highlight,
t?t._attributeMetadataContainer:undefined),e&&r.items.push({result:e}));r.items.length>0&&r.items.sort(
function(n,t){var i=t.result.eventTime,r=n.result.eventTime;return i!==undefined&&r!==undefined?i.getTime(
)-r.getTime():1})}return r},n.prototype._setupChannels=function(){var n=this;this.Channels={__channels:
{}};this.Channels.deleteChannel=function(n){this.__channels[n]||delete this.__channels[n]}.bind(this.
Channels);this.Channels.getOrCreate=function(n){return this.__channels[n]||(this.__channels[n]=new rt),
this.__channels[n]}.bind(this.Channels);setInterval(function(){for(var t in n.Channels.__channels)n.
Channels.__channels[t].isPurgable()&&delete n.Channels.__channels[t]},6e4)},n}(),rt;t.DataContext=ut;
rt=function(){function n(){this._implementation=ko.observable()}return n.prototype.publish=function(
n){this._implementation.notifySubscribers(n)},n.prototype.subscribe=function(n,t){this._implementation.
subscribe(n,t)},n.prototype.isPurgable=function(){return this._implementation.getSubscriptionsCount(
)===0},n}();t.PubSubChannel=rt});define("Shared/DataModels/AttributeMetadataResult",["require","exports"],
function(n,t){function e(n,t){var r=i(n);return t._metaDataContainer.transformWithClientSideMetadata(
r)}function i(n){var t=[];return n.d.results.value.forEach(function(n){var i=n.MetricMetadataIds?n.MetricMetadataIds.
map(r):[],e=n.DocumentTypes?n.DocumentTypes.split(",").map(function(n){return n.trim()}):[],o={Key:n.
Key,SearchResponseKey:n.SearchResponseKey,DisplayName:n.DisplayName,IsVisible:n.IsVisible,DisplayOrder:
n.DisplayOrder,IsFacet:n.Type!=null&&n.Type===u,IsAttribute:n.Type!=null&&n.Type===f,DataType:n.DataType,
MetricMetadataIds:i,DocumentTypes:e,CanonicalKey:n.CanonicalKey,Description:n.Description,IgnoreWhenNoValue:
n.IgnoreWhenNoValue};t.push(o)}),t}function r(n){return n[0]==="0"?n.substring(2):n}var u="Dimension",
f="Attribute";t.transform=e;t.transformAttributesResultFromBackend=i;t.dimensionTransform=r});define(
"Shared/DataModels/ApplicationRowData",["require","exports","../Constants","../ComponentIdService","ClientResources",
"../../_generated/ExtensionDefinition"],function(n,t,i,r,u,f){"use strict";var e=function(){function n(
n,t){this.componentName=n.name;this.type=i.ApplicationType.Web;n.properties&&(this.type=n.properties.
Application_Type);this.componentId=r.getComponentId(n);this.usage=ko.observable("");this.performance=
ko.observable("");this.status=ko.observable(null);this.setTypeBasedParameters(this.type);this.id=ko.
observable(this.componentId);this.commandGroup="MonitoredApplicationCommands";this.commandGroupOwner=
f.definitionName;var u=t.getSubscription(this.componentId.SubscriptionId);this.subscriptionName=u?ko.
observable(u.subscriptionName):ko.observable("")}return n.prototype.setTypeBasedParameters=function(
n){switch(n){case i.ApplicationType.Phone:this.displayType=u.applicationsWindowsPhone;this.icon=MsPortalFx.
Base.Images.Polychromatic.Mobile();break;case i.ApplicationType.Store:this.displayType=u.applicationsWindowsStore;
this.icon=MsPortalFx.Base.Images.Polychromatic.Store();break;case i.ApplicationType.Java:this.displayType=
u.applicationsJavaWeb;this.icon=MsPortalFx.Base.Images.Polychromatic.Website();break;default:this.displayType=
u.applicationsAspDotNet;this.icon=MsPortalFx.Base.Images.Polychromatic.Website()}},n}();t.ApplicationRowData=
e});define("Shared/DataModels/WebTestResourceId",["require","exports","../Constants","../TransformHelper"],
function(n,t,i,r){"use strict";function u(n,t){var i=f(t).toLowerCase(),r=e(t).toLowerCase();return n.
filter(function(n){var u,t;if(n.tags)for(u in n.tags)if(t=u.toLowerCase(),t===i||t===r)return!0;return!1}
)}function o(n,t){var i=r.unwrapCsmArray(n),f;return i===null?null:(f={SubscriptionId:t.subscriptionId,
ResourceGroup:t.resourceGroup,Name:t.componentName},u(i,f))}function f(n){return i.WebTests.LinkToComponentTemplate.
format(n)}function e(n){return"Link:/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroup}/providers/microsoft.insights/components/{Name}".
format(n)}t.FilterToComponent=u;t.FilterToWebSite=o;t.getComponentLink=f;t.getOldComponentLink=e});define(
"CreateApplication/CreateApplicationArea",["require","exports"],function(n,t){var i=function(){function n(
){}return n}();t.DataContext=i});define("EndUserAnalytics/EndUserAnalyticsArea",["require","exports",
"../Shared/Constants","../Shared/DataQueries/AggregateQuery","../Shared/EntityCacheHelper"],function(
n,t,i,r,u){"use strict";var f=function(){function n(n){this.sharedDataContext=n;this._aggregateQueryEntityCache=
u.createEntityCacheWithSourceUrl(i.GraphPathTemplates.Aggregate,r.AggregateQuery.getResult,null,r.getKey)}
return n}();t.DataContext=f});define("MonitoredApplications/MonitoredApplicationsArea",["require","exports",
"../Shared/DataQueries/AggregateQuery","../Shared/Constants","../Shared/EntityCacheHelper"],function(
n,t,i,r,u){"use strict";var f=function(){function n(n){this._metricEntityCache=u.createEntityCacheWithSourceUrl(
r.GraphPathTemplates.Aggregate,i.AggregateQuery.getResult,null,i.getKey);this.sharedDataContext=n}return n}
();t.DataContext=f});define("Overview/OverviewArea",["require","exports","../Shared/DataQueries/AggregateQuery",
"../Shared/Constants","../Shared/EntityCacheHelper","../Shared/CommonControls/DataModels/SegmentationSummaryQuery",
"../Shared/CommonControls/DataModels/RequestSummaryQuery"],function(n,t,i,r,u,f,e){"use strict";var o=
function(){function n(n){this.sharedDataContext=n;this._segmentationSummaryEntityCache=u.createEntityCacheWithSourceUrl(
r.GraphPathTemplates.Aggregate,f.SegmentationSummaryQuery.segementationSummaryTransform,null,i.getKey);
this._summarySeriesEntityCache=u.createEntityCacheWithSourceUrl(r.GraphPathTemplates.Aggregate,e.RequestSummaryQuery.
transform,null,i.getKey);this._dataSeriesEntityCache=u.createEntityCacheWithSourceUrl(r.GraphPathTemplates.
Aggregate,null,null,i.getKey)}return n}();t.DataContext=o});define("Search/SearchArea",["require","exports",
"../Shared/Constants","../Shared/EntityCacheHelper","../Shared/DataModels/EventType","./DataModels/SearchTimelineResult",
"./DataSources/SearchDetailsQuery","./DataSources/FacetsQuery","../Shared/DataQueries/AggregateQuery"],
function(n,t,i,r,u,f,e,o,s){"use strict";var h=function(){function n(n){this.sharedDataContext=n;this.
_timelineResultsEntityCache=r.createEntityCacheWithSourceUrl(i.GraphPathTemplates.Aggregate,f.transformEvents,
null,s.getKey);this._searchDetailsEntityCache=r.createEntityCacheWithSourceUrl(i.GraphPathTemplates.
V2SearchResults,u.SearchDetailResult.transformEvents,null,e.SearchDetailsQuery.getKey);this._attributeMetadataEntityCache=
n._attributeMetadataEntityCache;this._facetsEntityCache=r.createEntityCacheWithSourceUrl(i.GraphPathTemplates.
Aggregate,o.FacetsQuery.facetsTransform,null,s.getKey)}return n}();t.DataContext=h});define("Search/DataModels/SearchTimelineResult",
["require","exports","../../Shared/DataQueries/AggregateQuery"],function(n,t,i){"use strict";function f(
n){var t=i.AggregateQuery.getResult(n),u;return t&&t.aggregations&&t.aggregations["context.data.eventTime"]&&
(u=t.aggregations["context.data.eventTime"].buckets,$.isArray(u))?u.map(function(n){return r(n)}):null}
function r(n){return{time:new Date(n.key),count:parseInt(n.doc_count,10)}}var u=function(){function n(
){}return n}();t.SearchTimelineResult=u;t.transformEvents=f;t.transformEvent=r});define("WebTests/WebTestsArea",
["require","exports","../Shared/Constants","../Shared/EntityCacheHelper","../Shared/DataModels/PerfStoreMetricSeries",
"../Shared/QueryBase","../Shared/TransformHelper","./DataModels/WebTestHelper"],function(n,t,i,r,u,f,
e,o){"use strict";var s=function(){function n(n){this.webTestsBladeContentState=ko.observable({state:
0,text:""});this.sharedDataContext=n;this._alertsEntityCache=r.createEntityCacheWithSourceUrl(i.GraphPathTemplates.
Alerts,e.unwrapCsmArray,null,f.getKey);this._componentMetricEntityCache=r.createEntityCacheWithSourceUrl(
i.GraphPathTemplates.ComponentMetrics,null,null,f.getKey);this._componentMetricSeriesEntityCache=r.createEntityCacheWithSourceUrl(
i.GraphPathTemplates.ComponentMetrics,u.PerfStoreMetricSeries.transform,null,f.getKey);this._gettingStartedEntityCache=
r.createEntityCacheWithSourceUrl(i.GraphPathTemplates.WebTests,function(n){return e.unwrapCsmArray(n)}
,2,f.getKey);this._locationsEntityCache=r.createEntityCacheWithSourceUrl(i.GraphPathTemplates.ComponentMonitorLocations,
null,null,f.getKey);this._webTestsMetricEntityCache=r.createEntityCacheWithSourceUrl(i.GraphPathTemplates.
WebTestsMetrics,null,null,f.getKey);this._webTestsMetricSeriesEntityCache=r.createEntityCacheWithSourceUrl(
i.GraphPathTemplates.WebTestsMetrics,u.PerfStoreMetricSeries.transform,null,f.getKey);this._webTestsLocationMetricEntityCache=
r.createEntityCacheWithSourceUrl(i.GraphPathTemplates.WebTestsLocationMetrics,null,null,f.getKey);this.
_webTestsAllLocationsMetricEntityCache=r.createEntityCacheWithSourceUrl(i.GraphPathTemplates.WebTestsLocationMetrics,
null,null,f.getKey)}return n.prototype.webTestExistsValidation=function(n,t,i){return o.webTestExistsValidation(
n,t,i)},n}();t.DataContext=s});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Shared/DataModels/PerfStoreMetricSeries",["require","exports"],function(n,t){var u=MsPortalFx.ViewModels.
Controls.Visualization.Chart,r,i;r=function(n){function t(t,i,r,u,f,e,o,s,h,c){n.call(this);this.name(
t);this._aggregatedValue=r;this._count=u;this._min=f;this._max=e;this._sampleCount=o;this._startTime=
s;this._endTime=h;this._total=c;this.values(i)}return __extends(t,n),t.prototype.getAggregatedValue=
function(){return this._aggregatedValue},t.prototype.getCount=function(){return this._count},t.prototype.
getMin=function(){return this._min},t.prototype.getMax=function(){return this._max},t.prototype.getSampleCount=
function(){return this._sampleCount},t.prototype.getStartTime=function(){return this._startTime},t.prototype.
getEndTime=function(){return this._endTime},t.prototype.getTotal=function(){return this._total},t.prototype.
isEmpty=function(){return this.values()&&this.values().length?!1:!0},t.transform=function(n){var e,r;
if(!n||!n.Values)return null;var o=[],h=n.AggregatedValue,c=n.SampleCount,l=n.Values.length,u=null,f=
null,a=new Date(n.StartTime),v=new Date(n.EndTime),s=0;for(n.Values.length&&(u=n.Values[0].Average,f=
n.Values[0].Average),e=0;e<n.Values.length;e++)r=n.Values[e],s+=r.Total,r.Average>f?f=r.Average:r.Average<
u&&(u=r.Average),o.push(new i(new Date(r.TimeCreated),r.Average,r.Count,r.Minimum,r.Maximum,r.Total,
r.Weight));return new t(n.Name,o,h,l,u,f,c,a,v,s)},t}(MsPortalFx.ViewModels.Controls.Visualization.Chart.
Series);t.PerfStoreMetricSeries=r;i=function(n){function t(t,i,r,u,f,e,o){n.call(this,t,i);this._average=
i;this._timeCreated=t;this._count=r;this._min=u;this._max=f;this._total=e;this._weight=o}return __extends(
t,n),t.prototype.getAverage=function(){return this._average},t.prototype.getCount=function(){return this.
_count},t.prototype.getMin=function(){return this._min},t.prototype.getMax=function(){return this._max}
,t.prototype.getTimeCreated=function(){return this._timeCreated},t.prototype.getTotal=function(){return this.
_total},t.prototype.getWeight=function(){return this._weight},t}(u.ChartItem);t.PerfStoreMetricSeriesItem=
i});define("MetricsExplorer/MetricsExplorerArea",["require","exports","../Shared/Constants","../Shared/DataQueries/AggregateQuery",
"../Shared/EntityCacheHelper","../Shared/CommonControls/DataModels/RequestSummaryQuery","../Shared/CommonControls/DataModels/SegmentationSummaryQuery"],
function(n,t,i,r,u,f,e){"use strict";var o=function(){function n(n){this.sharedDataContext=n;this._dataSeriesEntityCache=
u.createEntityCacheWithSourceUrl(i.GraphPathTemplates.Aggregate,null,null,r.getKey);this._segmentationSummaryEntityCache=
u.createEntityCacheWithSourceUrl(i.GraphPathTemplates.Aggregate,e.SegmentationSummaryQuery.segementationSummaryTransform,
null,r.getKey);this._segmentatedSeriesEntityCache=u.createEntityCacheWithSourceUrl(i.GraphPathTemplates.
Aggregate,null,null,r.getKey);this._otherSeriesAndSummaryEntityCache=u.createEntityCacheWithSourceUrl(
i.GraphPathTemplates.Aggregate,null,null,r.getKey);this._summarySeriesEntityCache=u.createEntityCacheWithSourceUrl(
i.GraphPathTemplates.Aggregate,f.RequestSummaryQuery.transform,null,r.getKey);this._seriesAndSummaryEntityCache=
u.createEntityCacheWithSourceUrl(i.GraphPathTemplates.Aggregate,null,null,r.getKey);this._attributeMetadataEntityCache=
n._attributeMetadataEntityCache;this._metricsMetadataEntityCache=n._metricsMetadataEntityCache}return n}
();t.DataContext=o});define("ContinuousExport/ContinuousExportArea",["require","exports","../Shared/Constants",
"../Shared/QueryBase","../Shared/EntityCacheHelper","ClientResources","./DataModels/ContinuousExport",
"./DataModels/ContinuousExportEventTypesHelper"],function(n,t,i,r,u,f,e,o){"use strict";var s=function(
){function n(t){this.sharedDataContext=t;this._continuousExportEntityCache=u.createEntityCacheWithSourceUrl(
i.GraphPathTemplates.ContinuousExport,function(t){for(var r,u,s=[],i=0;i<t.length;i++){t[i].LastSuccessTime?
(u=n.convertUtcDateStringToLocalDate(t[i].LastSuccessTime),r=u?u.toRelativeString("timestamp"):""):r=
f.awaitingTelemetry;var c=o.ConvertRecordTypesToEventTypes(t[i].RecordTypes),h=t[i].IsUserEnabled===
"True",l=h?t[i].ExportStatus:"Disabled",a=new e.ContinuousExport(t[i].StorageName,t[i].ContainerName,
c,r,l,t[i].ExportId,t[i].InstrumentationKey,t[i].DestinationStorageAccount,h);s.push(a)}return s},null,
r.getKey)}return n.convertUtcDateStringToLocalDate=function(n){var t=new Date(n),i=new Date(Date.UTC(
t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds(
)));return isNaN(i.getFullYear())?null:i},n}();t.DataContext=s});define("Billing/BillingArea",["require",
"exports","./DataModels/BillingPlansQuery","./DataModels/OveragePricesQuery","../Shared/Constants","../Shared/EntityCacheHelper",
"../Shared/QueryBase"],function(n,t,i,r,u,f,e){"use strict";var o=function(){function n(n){this.sharedDataContext=
n;this._currentBillingPlan=ko.observable();this._billingPlansEntityCache=f.createEntityCacheWithSourceUrl(
u.GraphPathTemplates.BillingPlans,i.transform,null,e.getKey);this._overagePricesEntityCache=f.createEntityCacheWithGetData(
r.loadOveragePrices,e.getKey)}return n}();t.DataContext=o})