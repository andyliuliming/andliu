var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/InsightsBlade",["require",
"exports","./InsightsTelemetry"],function(n,t,i){"use strict";var r=function(n){function t(t){n.call(
this);this.BladeName=t;i.logBladeOpened(t)}return __extends(t,n),t.prototype.onInputsSet=function(){
return null},t}(MsPortalFx.ViewModels.Blade);t.InsightsBlade=r});define("Shared/InsightsTelemetry",[
"require","exports","./DateUtils","./Configuration","./Enumerations","./Profiler"],function(n,t,i,r,
u,f){"use strict";function ft(){c=window.appInsights;ct()}function et(n){c.context.user.id=n}function ht(
n,t,r){y&&s||k();s[p.format(o[n])]++;t===1&&(s[w.format(o[n])]++,s[v.format(o[n],r)]++);var u=new Date;
i.compare(u,y)>6e4&&d(0)}function ct(){window.addEventListener("beforeunload",function(){y||k();d(1)}
)}function k(){y=new Date;s={};[0,1].forEach(function(n){st.forEach(function(t){if(t===v)for(var i in
u.ContainerLoadFailReason)isNaN(i)&&(s[t.format(o[n],i)]=0);else s[t.format(o[n])]=0})})}function d(
n){var i={},t={};i[e.Source]=b[n];[0,1].forEach(function(n){var f=s[p.format(o[n])],r;if(f>0){t[e.ErrorRate]=
s[w.format(o[n])]/f*100;a(o[n]+" load error rate",undefined,undefined,undefined,i,t);for(r in u.ContainerLoadFailReason)
t[e.ErrorRate]=s[v.format(o[n],r)]/f*100,isNaN(r)&&a(o[n]+" load error rate - "+r,undefined,undefined,
undefined,i,t)}});k()}function lt(n,t,i){var r={};i&&(r[e.Duration]=i);l(3,n,undefined,undefined,undefined,
t,r);f.Profiler.enter("Blade load: "+n)}function g(n,t,i,r){l(5,h.PartClicked,n,i,t,r,undefined)}function nt(
n,t,i){l(5,h.CommandClicked,n,t,undefined,i,undefined)}function tt(n,t,i,r,f,s,h,c,a){var p=o[t]+" load",
v={},y;if(v[e.ActionTye]=ot[r],v[e.Result]=u.Result[f],s&&$.extend(v,s),f===1)if(s&&s.status)switch(
s.status){case 500:case 502:case 503:case 504:v[e.LoadFailReason]=u.ContainerLoadFailReason[0];break
default:v[e.LoadFailReason]=u.ContainerLoadFailReason[1]}else v[e.LoadFailReason]=u.ContainerLoadFailReason[
1];(t===0||t===1)&&ht(t,f,v[e.LoadFailReason]);y={};c&&(y[e.Duration]=c);a&&(y[e.DurationFromBladeLoad]=
a);l(5,p,i,n,h,v,y)}function at(n,t,i,r,f){var p=h.AjaxQuery,v,y,c,o,s,a;if(n&&(v=n._componentId,y=n.
_containerName,c=n._queryName),o={},i){if(i.responseText){o[e.ResponseText]=i.responseText;try{s=JSON.
parse(i.responseText);s&&s.error&&s.error.code&&(o[e.ErrorCode]=s.error.code)}catch(w){}}i.statusText&&
(o[e.StatusText]=i.statusText);o[e.Status]=i.status?i.status.toString():"-1"}o[e.Result]=u.Result[t];
c&&(o[e.QueryName]=c);$.extend(o,r);a={};f&&(a[e.Duration]=f);l(5,p,y,v,undefined,o,a)}function a(n,
t,i,r,u,f){var s={};t&&(s[e.ContainerType]=o[t]);$.extend(s,u);l(5,n,i,r,undefined,s,f)}function vt(
n,t,i,r,u,f,s){var h={};t&&(h[e.ContainerType]=o[t]);$.extend(h,f);l(5,n,i,r,u,h,s)}function yt(n,t,
i,r,u,f){var o={},s,h;n&&(o[e.ErrorMessage]=n);u&&$.extend(o,u);s={};f&&(s[e.Duration]=f);a(e.ErrorLogging,
t,i,r,o,s);console&&(h="App Insights error: "+n+". container name: "+i,r&&(h+=". componentId: "+r.Name),
console.warn(h))}function it(n,t,i,r,u,f,o){var s={},c;n&&(s[e.ErrorObject]=n);u&&(s[e.HandledAt]=u);
$.extend(s,f);c={};o&&(c[e.Duration]=o);l(2,h.LogException,i,r,undefined,s,c)}function rt(n,t,i,r,u)
{var f={};n&&(f[e.ErrorMessage]=n);$.extend(f,u);a(e.WarningLogging,t,i,r,f,undefined)}function pt(n)
{for(var t in n)n.hasOwnProperty(t)&&n[t]===undefined&&(n[t]="")}function l(n,t,i,u,f,o,s){var h,a,v,
y,p,w;if(c){h={};$.extend(h,o);u&&u.Metadata&&(h[e.Application_ID_V2]=u.Metadata.accountId+u.Name,h[
e.AccountId]=u.Metadata.accountId,h[e.Application_Type]=u.Metadata.applicationType,h[e.Flow_Type]=u.
Metadata.flowType,h[e.Request_Source]=u.Metadata.requestSource,h[e.Creation_Date]=u.Metadata.creationDate,
h[e.CustomerInstrumentationKey]=u.Metadata.instrumentationKey);i&&(h[e.Part_Name]=i);f&&(h[e.IsConfigured]=
f?!0:!1);a=h[e.AccountId];a&&(c.config.accountId=a,delete h[e.AccountId]);var l=r.getSettings(),b=l.
getShellVersion(),k=l.getEnvironments();b&&(h[e.IbizaVersion]=b,v=l.getEnvironmentName(),v&&(h[e.IbizaEnvironment]=
v));k&&$.extend(h,k);y=l.getAppInsightsVersion();y&&(h[e.AppInsightsVersion]=y);pt(h);switch(n){case
3:c.startTrackPage(t);c.stopTrackPage(t,undefined,h,s);return;case 2:p=h[e.ErrorObject];p&&delete h[
e.ErrorObject];w=h[e.HandledAt];w&&delete h[e.HandledAt];c.trackException(p,w,h,s);return;default:c.
trackEvent(t,h,s);return}}}function wt(n,t){return f.instrumentPromise(n,t)}var e,h,c,ut;(function(n)
{n.InsightsTelemetryArea="InsightsTelemetry";n.DefaultFlowType="Redfield";n.DefaultRequestSource="IbizaAIExtensionAuto";
n.MetricsExplorer="MetricsExplorer";n.ContinuousExportBlade="ContinuousExportBlade";n.CreateContinuousExportBlade=
"CreateContinuousExportBlade";n.ContinuousExportEventTypesBlade="ContinuousExportEventTypesBlade";n.
ContinuousExportEditBlade="ContinuousExportEditBlade";n.ContinuousExportButtonPart="ContinuousExportButtonPart";
n.ContinuousExportPart="ContinuousExportPart";n.CreateContinuousExportPart="CreateContinuousExportPart";
n.ContinuousExportEventTypesPart="ContinuousExportEventTypesPart";n.ContinuousExportBillingTextBoxPart=
"ContinuousExportBillingTextBoxPart";n.AddContinuousExportCommand="AddContinuousExportCommand";n.DeleteContinuousExportCommand=
"DeleteContinuousExportCommand";n.RefreshContinuousExportCommand="RefreshContinuousExportCommand";n.
SaveContinuousExportCommand="SaveContinuousExportCommand";n.EnableContinuousExportCommand="EnableContinuousExportCommand";
n.DisableContinuousExportCommand="DisableContinuousExportCommand";n.CreateApplicationBlade="CreateApplicationBlade";
n.SelectApplicationTypeBlade="SelectApplicationTypeBlade";n.CreateApplicationPart="CreateApplicationPart";
n.CreateApplicationForm="CreateApplicationForm";n.SelectApplicationTypePart="SelectApplicationTypePart";
n.ConfigurationBlade="ConfigurationBlade";n.EventsConfigurationBlade="EventsConfigurationBlade";n.EndUserAnalyticsBlade=
"EndUserAnalyticsBlade";n.PageViewsBlade="PageViewsBlade";n.SlowestRequestsBlade="SlowestRequestsBlade";
n.QuickStartBlade="QuickStartBlade";n.BrowsersPart="BrowsersPart";n.BrowsersWebsitesPart="BrowsersWebsitesPart";
n.ConfigurationLauncherPart="ConfigurationLauncherPart";n.ConfigurationPart="ConfigurationPart";n.DevicesPart=
"DevicesPart";n.EndUserAnalyticsPart="EndUserAnalyticsPart";n.EndUserAnalyticsWebSitePart="EndUserAnalyticsWebSitePart";
n.GettingStartedPart="GettingStartedPart";n.PageViewsPart="PageViewsPart";n.SessionsPart="SessionsPart";
n.SlowestRequestsDetailChartPart="SlowestRequestsDetailChartPart";n.SlowestRequestsDetailGridPart="SlowestRequestsDetailGridPart";
n.SlowestRequestsPart="SlowestRequestsPart";n.SummaryPageViewsDetailGridPart="SummaryPageViewsDetailGridPart";
n.SummaryCustomEventsDetailGridPart="SummaryCustomEventsDetailGridPart";n.TopExceptionsPart="TopExceptionsPart";
n.TopFailedRequestsPart="TopFailedRequestsPart";n.QuickStartOverviewPart="QuickStartOverviewPart";n.
ComingSoonDevicesPart="ComingSoonDevicesPart";n.PinnedOverviewsPart="PinnedOverviewsPart";n.AIAttachBlade=
"AIAttachBlade";n.AIAttachGridPart="AIAttachGridPart";n.BrowseApplicationBlade="BrowseApplicationsBlade";
n.MonitoredApplicationsTile="MonitoredApplicationsTile";n.MonitoredDataProvider="MonitoredDataProvider";
n.MonitoredApplicationsArea="MonitoredApplicationsArea";n.ApplicationsBrowseService="ApplicationsBrowseService";
n.AspNetOverviewBlade="AspNetOverviewBlade";n.DeviceOverviewBlade="DeviceOverviewBlade";n.JavaWebOverviewBlade=
"JavaWebOverviewBlade";n.JavaWebConfigurationBlade="JavaWebConfigurationBlade";n.GettingStartedCustomEventsBlade=
"GettingStartedCustomEventsBlade";n.PropertiesBlade="PropertiesBlade";n.SettingsBlade="SettingsBlade";
n.EventSearchPart="EventSearchPart";n.ServersPart="ServersPart";n.RequestRatePart="RequestRatePart";
n.SessionsByRegionPart="SessionsByRegionPart";n.RequestsByRegionPart="RequestsByRegionPart";n.TopCustomEventsPart=
"TopCustomEvents";n.TopDeviceModelsPart="Usage_L0_TopDeviceModelsPart";n.TopSessionByCountryPart="Usage_L0_TopSessionByCountryPart";
n.TopBrowsersPart="Usage_L0_TopBrowsersPart";n.SessionsStartedPart="SessionsStartedPart";n.SlowestServerRequestsPart=
"SlowestServerRequestsPart";n.CustomEventsPart="Usage_L0_CustomEventsPart";n.TopCrashesPart="TopCrashesPart";
n.AverageResponseTimePart="AverageResponseTimePart";n.FailedRequestsRatePart="FailedRequestsRatePart";
n.PropertiesButtonPart="PropertiesButtonPart";n.PropertiesFormPart="PropertiesFormPart";n.AlertsPart=
"AlertsPart";n.MetricsExplorerBlank="MetricsExplorerBlank";n.SessionEngagementPart="Usage_L0_SessionEngagementPart";
n.DauSummaryPart="Usage_L0_DauSummaryPart";n.SettingsListPart="SettingsListPart";n.SummaryTrendlinePart=
"SummaryTrendlinePart";n.SessionsSummaryTrendlinePart="Usage_L0_SessionsSummaryTrendlinePart";n.CrashesSummaryTrendlinePart=
"Usage_L0_CrashesSummaryTrendlinePart";n.FavoritesPart="FavoritesPart";n.FavoritesListPart="FavoritesListPart";
n.FavoritesSplitter="FavoritesSplitter";n.FavoritesListRefreshCommand="FavoritesListRefreshCommand";
n.FavoriteSaveCommand="FavoriteSaveCommand";n.FavoriteSaveAsCommand="FavoriteSaveAsCommand";n.FavoriteDeleteCommand=
"FavoriteDeleteCommand";n.FavoriteCommand="FavoriteCommand";n.SettingsCommand="SettingsCommand";n.BillingComingSoonBlade=
"BillingComingSoonBlade";n.BillingSpecPickerBlade="BillingSpecPickerBlade";n.BillingEventManagementBlade=
"BillingEventManagementBlade";n.BillingComingSoonPart="BillingComingSoonPart";n.BillingSpecPickerPart=
"BillingSpecPickerPart";n.BillingPricingTierPart="BillingPricingTierPart";n.EventsLastMonthPart="EventsLastMonthPart";
n.TelemetryEventsGaugePart="TelemetryEventsGaugePart";n.OverageOnOffSwitchPart="OverageOnOffSwitchPart";
n.ExceptionsBarChartPart="ExceptionsBarChartPart";n.MetricsExplorerBlade="MetricsExplorerBlade";n.MetricsExplorerComingSoonBlade=
"MetricsExplorerComingSoonBlade";n.MetricsExplorerEditBlade="MetricsExplorerEditBlade";n.MetricsExplorerCustomPart=
"MetricsExplorerCustomPart";n.MetricsExplorerBaseChart="MetricsExplorerBaseChart";n.MetricsExplorerLineChart=
"MetricsExplorerLineChart";n.MetricsExplorerBarChart="MetricsExplorerBarChart";n.MetricsExplorerAreaChart=
"MetricsExplorerAreaChart";n.MetricsExplorerGrid="MetricsExplorerGrid";n.MetricsExplorerImage="MetricsExplorerImage";
n.MetricsExplorerDeveloperEditPart="MetricsExplorerDeveloperEditPart";n.MetricsExplorerEditPart="MetricsExplorerEditPart";
n.MetricsExplorerAlertRulesCommand="MetricsExplorerAlertRulesCommand";n.MetricsExplorerAddChartCommand=
"MetricsExplorerAddChartCommand";n.MetricsExplorerRemoveChartCommand="MetricsExplorerRemoveChartCommand";
n.RPCLinkToAIComponent="RPC.LinkToAIComponent";n.RPCCheckAIResourceExistsInSubscription="RPC.CheckAIResourceExistsInSubscription";
n.RBAC="RBAC";n.SearchBlade="SearchBlade";n.TimeSelectorDetailBlade="TimeSelectorDetailBlade";n.SearchResultDetailBlade=
"SearchResultDetailBlade";n.FilterDetailsBlade="FilterDetailsBlade";n.MonacoBlade="FullValueBlade";n.
TimeSelectorPart="TimeSelectorPart";n.SearchControlPart="SearchControlPart";n.SearchSetupLoggingPart=
"SetupLoggingPart";n.TimeSelectorDetailPart="TimeSelectorDetailPart";n.SearchResultDetailsPart="SearchResultDetailsPart";
n.SearchControlTimelineChart="SearchControlTimelineChart";n.SearchFilterDetailPart="SearchFilterDetailPart";
n.CallStackPart="CallStackPart";n.EventDetailsPart="EventDetailsPart";n.ExceptionDetailsPart="ExceptionDetailsPart";
n.PageViewDetailsPart="PageViewDetailsPart";n.RequestDetailsPart="RequestDetailsPart";n.TraceDetailsPart=
"TraceDetailsPart";n.EventDetailTilePart="EventDetailTilePart";n.RelatedItemsPart="RelatedItemsPart";
n.MonacoPart="FullValuePart";n.relatedEventsfor5Min="relatedEventsfor5Min";n.relatedTrace="relatedTrace";
n.relatedException="relatedException";n.relatedRequest="relatedRequest";n.relatedView="relatedView";
n.relatedEventsInSession="relatedEventsInSession";n.relatedAllTelemetry="relatedAllTelemetry";n.TimeRangeCommand=
"TimeRangeCommand";n.SearchFilterCommand="SearchFilterCommand";n.RefreshCommand="RefreshCommand";n.SearchRefreshCommand=
"SearchRefreshCommand";n.ResetFiltersCommand="SearchFiltersResetFiltersCommand";n.ClearFiltersCommand=
"SearchFiltersClearFiltersCommand";n.EventSearchCommand="EventSearchCommand";n.EventViewFullPropertyCommand=
"EventViewFullPropertyCommand";n.ClearFiltersYes=n.ClearFiltersCommand+"Yes";n.ClearFiltersNo=n.ClearFiltersCommand+
"No";n.ResetFiltersYes=n.ResetFiltersCommand+"Yes";n.ResetFiltersNo=n.ResetFiltersCommand+"No";n.EventDetailResourceMappingService=
"EventDetailResourceMappingService";n.SearchFilterBladeUsable="SearchFilterBladeUsable";n.SearchFilterBladeEventCountLoaded=
"SearchFilterBladeEventCountLoaded ";n.SearchFilterBladeFacetExpanded="SearchFilterBladeFacetExpanded";
n.RemoveFacetTagClick="RemoveFacetTagClick";n.OpenFacetTagClick="OpenFacetTagClick";n.SearchStringChanged=
"SearchStringChanged";n.FacetsSearchStringChanged="FacetsSearchStringChanged";n.FacetValueLoadMoreClick=
"FacetValueLoadMoreClick";n.EventFacetChecked="EventFacetChecked";n.EventFacetRemoved="EventFacetRemoved";
n.FacetChecked="FacetChecked";n.FacetRemoved="FacetRemoved";n.FacetExpanded="FacetExpanded";n.FacetCollapsed=
"FacetCollapsed";n.SelectRelatedItem="SelectRelatedItem";n.RowSelected="RowSelected";n.SearchGridLoaded=
"SearchGridLoaded";n.SearchChartLoaded="SearchChartLoaded";n.AccountSelectionBlade="AccountSelectionBlade";
n.WebsitesBlade="WebsitesBlade";n.WebsitesPart="WebsitesPart";n.SearchPart="SearchPart";n.MetricsExplorerPart=
"MetricsExplorerPart";n.CreateApplicationProvisioningPart="CreateApplicationProvisioningPart";n.AccountSelectionDevPart=
"AccountSelectionDevPart";n.AccountSelectionCsmPart="AccountSelectionCsmPart";n.AspNetOverviewLauncherPart=
"AspNetOverviewLauncherPart";n.DevicesOverviewLauncherPart="DevicesOverviewLauncherPart";n.JavaWebOverviewLauncherPart=
"JavaWebOverviewLauncherPart";n.ComingSoonLauncherPart="ComingSoonLauncherPart";n.WebTestsBlade="WebTestsBlade";
n.WebTestsDetailBlade="WebTestsDetailBlade";n.WebTestLocationDetailBlade="WebTestLocationDetailBlade";
n.WebTestResultBlade="WebTestResultBlade";n.WebTestResultDetailBlade="WebTestResultDetailBlade";n.CreateWebTestBlade=
"CreateWebTestBlade";n.EditWebTestBlade="EditWebTestBlade";n.CreateWebTestLocationBlade="CreateWebTestLocationBlade";
n.CreateWebTestCriteriaBlade="CreateWebTestCriteriaBlade";n.CreateWebTestAlertBlade="CreateWebTestAlertBlade";
n.AllWebTestsResponseTimePart="AllWebTestsResponseTimePart";n.WebTestsWebSitePart="WebTestsWebSitePart";
n.WebTestsSetupPart="WebTestsSetupPart";n.WebTestsPart="WebTestsPart";n.AvailabilityTrendPart="AvailabilityTrendPart";
n.AvailabilityGaugePart="AvailabilityGaugePart";n.AvailabilityNavigationButton="AvailabilityNavigationButton";
n.ResponseTimePart="ResponseTimePart";n.AllWebTestsPart="AllWebTestsPart";n.ResponseAndAvailabilityLocationPart=
"ResponseAndAvailabilityLocationPart";n.ResponseAndAvailabilityPart="ResponseAndAvailabilityPart";n.
WebTestsTestLocationPart="WebTestsTestLocationPart";n.FailedTestsPart="FailedTestsPart";n.WebTestsSummaryPart=
"WebTestsSummaryPart";n.WebTestsDownloadPart="WebTestsDownloadPart";n.WebTestFileDownloadPart="WebTestFileDownloadPart";
n.WebTestsResultGridPart="WebTestsResultGridPart";n.ResultGridDetailExceptionPart="ResultGridDetailExceptionPart";
n.ResultGridDetailRulesPart="ResultGridDetailRulesPart";n.ResultGridResponseHeadersPart="ResultGridResponseHeadersPart";
n.ResultGridResponseBodyPart="ResultGridResponseBodyPart";n.CreateWebTestPart="CreateWebTestPart";n.
CreateWebTestLocationPart="CreateWebTestLocationPart";n.CreateWebTestCriteriaPart="CreateWebTestCriteriaPart";
n.CreateWebTestAlertPart="CreateWebTestAlertPart";n.WebTestsGettingStartedPart="WebTestsGettingStartedPart";
n.WebTestTilePart="WebTestTilePart";n.AppInsightsAdaptedPart="AppInsightsAdaptedPart";n.OverviewTimelineAdaptedPart=
"OverviewTimelineAdaptedPart";n.PerformanceTimelineAdaptedPart="PerformanceTimelineAdaptedPart";n.DiagnosticsTimelineAdaptedPart=
"DiagnosticsTimelineAdaptedPart";n.UsageTimelineAdaptedPart="UsageTimelineAdaptedPart";n.TopExceptionsAdaptedPart=
"TopExceptionsAdaptedPart";n.SlowestRequestsAdaptedPart="SlowestRequestsAdaptedPart";n.TopFailedRequestsAdaptedPart=
"TopFailedRequestsAdaptedPart";n.QuickStartAdaptedPart="QuickStartAdaptedPart";n.PageViewsAdaptedPart=
"PageViewsAdaptedPart";n.AllWebTestsResponseTimeFullGalleryAdaptedPart="AllWebTestsResponseTimeFullGalleryAdaptedPart";
n.TagsAdaptedPart="TagsAdaptedPart";n.PropertiesAdaptedPart="PropertiesAdaptedPart";n.TopEventsAdaptedPart=
"TopEventsAdaptedPart";n.TopCrashesAdaptedPart="TopCrashesAdaptedPart";n.ResourceMapAdaptedPart="ResourceMapAdaptedPart";
n.CustomEventsAdaptedPart="CustomEventsAdaptedPart";n.TelemetryEventsAdaptedPart="TelemetryEventsAdaptedPart";
n.CreateWebTestCommand="CreateWebTestCommand";n.EditWebTestCommand="EditWebTestCommand";n.EnableWebTestCommand=
"EnableWebTestCommand";n.DisableWebTestCommand="DisableWebTestCommand";n.DeleteWebTestCommand="DeleteWebTestCommand";
n.DeleteApplicationCommand="DeleteApplicationCommand";n.ComponentResourceMapping="ComponentResourceMapping";
n.ComponentIdService="ComponentIdService";n.WebsiteComponentIdHelper="WebsiteComponentIdHelper";n.WarningLogging=
"Warning logging";n.ErrorLogging="Error logging";n.TimeRangeChangedEventName="Time range changed";n.
GridBladeAction="Grid blade action";n.AppInsightsExtensionLoadedEventName="AppInsightsExtension Loaded";
n.EntryPoint="EntryPoint";n.UnknownIbizaUser="UnknownIbizaUser";n.AccountId="accountId";n.ActionTye=
"action type";n.ActionName="action name";n.Application_ID_V2="Application_ID_V2";n.Application_Type=
"Application_Type";n.AppInsightsVersion="appInsightsVersion";n.ClientRequestId="ClientRequestId";n.ContainerType=
"container type";n.Creation_Date="Creation_Date";n.CustomerInstrumentationKey="CustomerInstrumentationKey";
n.Duration="duration";n.ErrorCode="error code";n.ErrorObject="error object";n.ErrorMessage="ErrorMessage";
n.ErrorRate="error rate";n.Flow_Type="Flow_Type";n.HandledAt="handledAt";n.IbizaEnvironment="ibizaEnvironment";
n.IbizaVersion="ibizaVersion";n.IsConfigured="isConfigured";n.LoadFailReason="load fail reason";n.Part_Name=
"Part_Name";n.QueryName="query name";n.Request_Source="Request_Source";n.Response="Response";n.ResponseText=
"ResponseText";n.Result="result";n.Status="Status";n.StatusText="StatusText";n.Source="Source";n.Type=
"Type";n.Url="Url";n.DurationFromBladeLoad="durationext";n.ParentBladeName="ParentBladeName";n.ItemSelected=
"ItemSelected";n.UnknownParentBlade="UnknownParentBlade";n.BladeName="BladeName";n.ChartDefinitionId=
"ChartDefinitionId";n.ChartId="chartId"})(e=t.AITelemetryConstants||(t.AITelemetryConstants={})),function(
n){n.UnresolvedPromise="UnresolvedPromise";n.MethodCompletedWithError="MethodError";n.InnerPromiseCompletedWithError=
"InnerPromiseError";n.ViewModelInstrumented="VMInstrumented";n.LogException="Log exception";n.AjaxQuery=
"Ajax query";n.CommandClicked="Command clicked";n.PartClicked="Part clicked";n.LoadWarning="Load warning";
n.OtherActionCompleted="Other action completed"}(h||(h={}));t.initializeTelemetry=ft;t.setUniqueUserId=
et;var o=["Blade","Part","Command","Other"],ot=["OnInputsSet","OnRefresh","Other"],p="{0} load",w="{0} load fail",
v="{0} load fail - {1}",st=[p,w,v],y,s,b;(function(n){n[n.Regular=0]="Regular";n[n.BrowserClose=1]="BrowserClose"}
)(b||(b={}));t.logBladeOpened=lt;t.logPartClicked=g;t.logCommandClicked=nt;t.logContainerLoad=tt;t.logAjaxQuery=
at;t.logCustomEvent=a;t.logCustomEventWithHasData=vt;t.logError=yt;t.logException=it;t.logWarning=rt;
ut=function(){function n(n,t){var i=this,r;this._viewModel=n;this.disableInstrumentation=!1;this._customProperties=
{};this._lifetimeManager=t;this._viewModel.size&&this._viewModel.size.subscribe&&(r=this._viewModel,
this._currentSize=r.size(),r.size.subscribe(this._lifetimeManager,function(n){var t={};t.OldSize=MsPortalFx.
Parts.PartSize[i._currentSize];t.NewSize=MsPortalFx.Parts.PartSize[n];i._logCustomEvent("Part Resized",
null,t,null);i._currentSize=n}))}return n.createSelectableInstrumented=function(n,t,i,r){var u=MsPortalFx.
ViewModels.Part.createSelectableViewModel(t,i),f=u.onClick;return u.onClick=function(){var t=r?r():undefined;
g(n._containerName,n.hasUserData(),t);$.isFunction(f)&&f.apply(u,arguments)},u},n.prototype.addCustomProperty=
function(n,t){n&&t&&(this._customProperties.hasOwnProperty(n)&&console.log("Property value for "+n+" already exists"),
this._customProperties[n]=t)},n.prototype.getCustomProperties=function(){return this._customProperties}
,n.prototype.instrumentCommandClick=function(n,t){nt(this._viewModel._containerName,n,t)},n.prototype.
instrument=function(n,t,i,r,u){return this.instrumentAndProfile(this._viewModel._containerName+"."+t.
toString(),n,t,i,r,u)},n.prototype.instrumentAndProfile=function(n,t,r,u,e,o){var s=this,c,l,a;if(this.
disableInstrumentation)return u();c=new Date;l=function(n){return o?i.compare(n,o):undefined};f.Profiler.
enter(n);try{a=f.instrumentPromise(u(),"Result promise")}catch(v){this._logInstrumentCompleteTelemetry(
r,t,1,e,i.compare(new Date,c));it(v,this._viewModel._containerType,this._viewModel._containerName,t,
undefined,e);throw v;}finally{f.Profiler.exit()}return a?a.then(function(){$.isArray(s._viewModel._promisesTelemetry)?
Q.all(s._viewModel._promisesTelemetry).then(function(){s._logInstrumentCompleteTelemetry(r,t,0,e,i.compare(
new Date,c),l(new Date))},function(){var n={};arguments&&arguments[0]&&(n=s._extractErrorProperty(arguments[
0]));$.extend(n,e);rt(h.LoadWarning,s._viewModel._containerType,s._viewModel._containerName,t,n,i.compare(
new Date,c))}):s._logInstrumentCompleteTelemetry(r,t,0,e,i.compare(new Date,c),l(new Date))},function(
){var n={};arguments&&arguments[0]&&(n=s._extractErrorProperty(arguments[0]));$.extend(n,e);s._logInstrumentCompleteTelemetry(
r,t,1,n,i.compare(new Date,c),l(new Date))}):(this._logInstrumentCompleteTelemetry(r,t,0,e,i.compare(
new Date,c),l(new Date)),null)},n.prototype._logInstrumentCompleteTelemetry=function(n,t,i,r,f,o){var
s,c;n===0||n===1?tt(t,this._viewModel._containerType,this._viewModel._containerName,n,i,r,this._hasData(
),f,o):(s={},f&&(s[e.Duration]=f),o&&(s[e.DurationFromBladeLoad]=o),c={},i&&(c[e.Result]=u.Result[i]),
$.extend(c,r),this._logCustomEvent(h.OtherActionCompleted,t,c,s))},n.prototype._logCustomEvent=function(
n,t,i,r){a(n,this._viewModel._containerType,this._viewModel._containerName,t,i,r)},n.prototype._hasData=
function(){var n;return $.isFunction(this._viewModel.hasUserData)&&(n=!!this._viewModel.hasUserData(
)),n},n.prototype._extractErrorProperty=function(n){var r={},i={},t;typeof n=="string"||typeof n=="number"||
typeof n=="boolean"?i[e.ErrorMessage]=n:i=n;for(t in n)t&&(typeof i[t]=="string"||typeof i[t]=="number"||
typeof i[t]=="boolean")&&(r[t]=i[t]);return r},n}();t.TelemetryHelper=ut;t.instrumentPromise=wt});define(
"Shared/DateUtils",["require","exports","MsPortalFx/Globalization","ClientResources"],function(n,t,i,
r){"use strict";function f(n,t,i){return new Date(n.getTime()+Math.round(u.convert(t,i,u.milliseconds)))}
function e(n,t){return f(n,t,u.days)}function o(n,t){return f(n,t,u.hours)}function s(n,t){return f(
n,t,u.milliseconds)}function h(n,t){return f(n,t,u.minutes)}function c(n,t){return f(n,t,u.seconds)}
function l(n,i){return new Date(n.getTime()+i*t.unitsInMilliseconds.Years)}function a(n,t){return!t||
!n?Number.NaN:n.getTime()-t.getTime()}function v(n,t,i,r){var f=u.getScalar(t,u.milliseconds),e=i?Math.
floor:Math.round;return r&&(f*=r),new Date(e(n.getTime()/f)*f)}function y(n){return new Date(n.getUTCFullYear(
),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCMilliseconds())}function p(
n){return this.formatTime(n)+" "+i.DateTimeFormat.create(i.DateTimeFormat.shortDatePattern).format(n)}
function w(n){return i.DateTimeFormat.create(i.DateTimeFormat.shortTimePattern).format(n)}function b(
n,t){return n===u.milliseconds?r.grainMilliseconds.format(t):n===u.seconds?r.grainSeconds.format(t):
n===u.minutes?r.grainMinutes.format(t):n===u.hours?r.grainHours.format(t):n===u.days?r.grainDays.format(
t):r.grainMilliseconds.format(t)}var u=function(){function n(){}return n.getDisplayUnit=function(t,i)
{var r=n.convert(t,i,n.milliseconds);return t===0?i:r<=1e3?n.milliseconds:r<=6e4?n.seconds:r<=36e5?n.
minutes:r<=864e5?n.hours:n.days},n.getScalar=function(n,t){return t.scalar/n.scalar},n.convert=function(
n,t,i){return n*i.scalar/t.scalar},n.getUnitFromStr=function(t){return t==="ms"?n.milliseconds:t==="sec"||
t==="seconds"?n.seconds:void 0},n.ticks={name:"tick",scalar:864e9},n.milliseconds={name:"ms",scalar:
864e5},n.seconds={name:"sec",scalar:86400},n.minutes={name:"min",scalar:1440},n.hours={name:"hours",
scalar:24},n.days={name:"days",scalar:1},n}();t.TimeUnits=u;t.unitsInMilliseconds={Ticks:.0001,Milliseconds:
1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Years:31536e6};t.addDate=f;t.addDays=e;t.addHours=o;
t.addMilliseconds=s;t.addMinutes=h;t.addSeconds=c;t.addYears=l;t.compare=a;t.roundDate=v;t.toUniversalTime=
y;t.formatDateTime=p;t.formatTime=w;t.getTimeUnitDisplayName=b});define("Shared/Configuration",["require",
"exports"],function(n,t){function e(){return i||(i=new r(window.fx.environment)),i}function o(){return u}
function s(n){u=n}var i,u,f=["prod","mpac","inactive","df"],r;t.getSettings=e;t.getIbizaEnvironment=
o;t._setIbizaEnvironment=s;r=function(){function n(n){this._data=n}return n.prototype.getGraphHosts=
function(){if(!this._graphHosts){var n=this._data.graphhosts;this._graphHosts=n?n.split(";"):[]}return this.
_graphHosts},n.prototype.getCsmUrl=function(){return this._data.csmurl},n.prototype.getCsmEnvironment=
function(){return this._data["csm-env"]},n.prototype.getDefaultEnvironment=function(){return this._data.
defaultenvironment},n.prototype.getUseCsmBypass=function(){return this._getBooleanSettingValue("usecsmbypass")}
,n.prototype.getUseCsm=function(){return this._getBooleanSettingValue("usecsm")},n.prototype.getUseCors=
function(){return this._getBooleanSettingValue("usecors")},n.prototype.getGraphApiVersion=function()
{return this._data.graphapiversion},n.prototype.getCsmApiVersion=function(){return this._data.csmapiversion}
,n.prototype.getAlertRulesApiVersion=function(){return this._data.alertrulesapiversion},n.prototype.
getFeaturesApiVersion=function(){return this._data.featuresapiversion},n.prototype.getWebSitesApiVersion=
function(){return this._data.websitesapiversion},n.prototype.getEnableBillingForAllSubscriptions=function(
){return this._getBooleanSettingValue("enablebillingforallsubscriptions")},n.prototype.getEnableLatencyReporting=
function(){return this._getBooleanSettingValue("enablelatencyreporting")},n.prototype.getEnableLatencyMetricReporting=
function(){return this._getBooleanSettingValue("enablelatencymetricreporting")},n.prototype.getShellVersion=
function(){return this._data.shellVersion},n.prototype.getResourceTokenTimeoutMinutes=function(){return this.
_data.resourcetokentimeoutminutes},n.prototype.getResourceTokenTimeSkewMinutes=function(){return this.
_data.resourcetokentimeskewminutes},n.prototype.getEnvironments=function(){var t=this,n={};return f.
forEach(function(i){return n[i]=t._data[i]}),n},n.prototype.getEnvironmentName=function(){var t=this,
n;return this._environment?this._environment:(n=this.getShellVersion(),!n)?"":(this._environment=f.first(
function(i){return t._data[i]===n})||"dev",this._environment)},n.prototype.getAppInsightsVersion=function(
){return this._data.appInsightsVersion},n.prototype.isUsingTestBackend=function(){return this._getBooleanSettingValue(
"isusingtestbackend")},n.prototype.getUseAuthenticatedUserIdInTelemetry=function(){return this._getBooleanSettingValue(
"useAuthenticatedUserIdInTelemetry")},n.prototype._getBooleanSettingValue=function(n){var t=this._data[
n];return t!==undefined&&(t=t.toLowerCase()),t==="true"},n}();t.Configuration=r});define("Shared/Enumerations",
["require","exports"],function(n,t){var i,r,u,f,e,o,s,h,c,l,a,v;(function(n){n[n.NoAggregation=0]="NoAggregation"}
)(t.AggregationLevelId||(t.AggregationLevelId={}));i=t.AggregationLevelId,function(n){n[n.None=0]="None";
n[n.Sum=1]="Sum";n[n.Min=2]="Min";n[n.Max=3]="Max";n[n.Avg=4]="Avg";n[n.Value_Count=5]="Value_Count";
n[n.Cardinality=6]="Cardinality";n[n.ExtendedStats=7]="ExtendedStats"}(t.Aggregation||(t.Aggregation=
{}));r=t.Aggregation,function(n){n[n.hour=0]="hour";n[n.minute=1]="minute";n[n.day=2]="day"}(t.Grain||
(t.Grain={}));u=t.Grain,function(n){n[n.Request=1]="Request";n[n.BasicException=2]="BasicException";
n[n.View=3]="View";n[n.Trace=4]="Trace";n[n.Event=5]="Event";n[n.RemoteDependency=6]="RemoteDependency";
n[n.Ajax=7]="Ajax";n[n.Metric=8]="Metric";n[n.ClientPerformance=9]="ClientPerformance";n[n.PerformanceCounter=
10]="PerformanceCounter";n[n.SessionMetric=11]="SessionMetric"}(t.EventType||(t.EventType={}));f=t.EventType,
function(n){n[n.Unknown=0]="Unknown";n[n.NoDataInTimeRange=1]="NoDataInTimeRange";n[n.ComponentNotProvisioned=
2]="ComponentNotProvisioned"}(t.NoDataStatus||(t.NoDataStatus={}));e=t.NoDataStatus,function(n){n[n.
All=0]="All";n[n.Service=1]="Service";n[n.Device=2]="Device"}(t.MetricsApplicationCategory||(t.MetricsApplicationCategory=
{}));o=t.MetricsApplicationCategory,function(n){n[n.FirstLoad=0]="FirstLoad";n[n.Refresh=1]="Refresh";
n[n.LoadMore=2]="LoadMore"}(t.GridLoadState||(t.GridLoadState={}));s=t.GridLoadState,function(n){n[n.
AggregatedData=1]="AggregatedData";n[n.RawData=2]="RawData";n[n.Legacy=3]="Legacy"}(t.DataRetentionType||
(t.DataRetentionType={}));h=t.DataRetentionType,function(n){n[n.Healthy=0]="Healthy";n[n.Latent=1]="Latent";
n[n.Failed=2]="Failed"}(t.LatencyCommunicationCode||(t.LatencyCommunicationCode={}));c=t.LatencyCommunicationCode,
function(n){n[n.Succeed=0]="Succeed";n[n.Fail=1]="Fail"}(t.Result||(t.Result={}));l=t.Result,function(
n){n[n.Backend=0]="Backend";n[n.Other=1]="Other"}(t.ContainerLoadFailReason||(t.ContainerLoadFailReason=
{}));a=t.ContainerLoadFailReason,function(n){n[n.RelativeTimeRange=1]="RelativeTimeRange";n[n.AbsoluteTimeRange=
2]="AbsoluteTimeRange"}(t.TimeSelectionType||(t.TimeSelectionType={}));v=t.TimeSelectionType});define(
"Shared/Profiler",["require","exports"],function(n,t){function o(n,t){if(n){var i=new e(n,t);i.capture(
)}return n}function s(n){return n}function h(){t.Profiler=new i;t.instrumentPromise=o;window.AIProfiler=
t.Profiler}t.Profiler;t.instrumentPromise;var i=function(){function n(){this.rootOps=[];this.opStack=
[]}return n.prototype.flush=function(){var n=this.rootOps;return this.rootOps=[],this.opStack=[],n.map(
function(n){return n.serialize()})},n.prototype.enter=function(n){var t;return this.current()?t=this.
current().createChild(n):(t=new r(n),this.rootOps.push(t)),this.pushOp(t),t.markStart(),t},n.prototype.
current=function(){return this.opStack.length?this.opStack[this.opStack.length-1]:null},n.prototype.
exit=function(){var n=this.current();n&&(n.markEnd(),this.popOp())},n.prototype.pushOp=function(n){this.
opStack.push(n)},n.prototype.popOp=function(){this.opStack.pop()},n.prototype.enabled=function(){return!0}
,n.prototype.stopwatch=function(){for(var t=0,i=99999999999999,n=0;n<this.rootOps.length;n++)t=this.
rootOps[n].findMaxTime(t),i=this.rootOps[n].findMinTime(i);return this.rootOps=[],this.opStack=[],Math.
max(0,t-i)},n}(),r=function(){function n(n){this.children=[];this.parent=null;this.description=n;this.
startTime=0;this.endTime=0}return n.prototype.createChild=function(t){var i=new n(t);return this.children.
push(i),i.parent=this,i},n.prototype.markStart=function(){this.startTime||(this.startTime=Date.now())}
,n.prototype.markEnd=function(){this.endTime||(this.endTime=Date.now())},n.prototype.serialize=function(
){var n={name:this.description,startTime:this.startTime,endTime:this.endTime};return this.children.length>
0&&(n.children=this.children.map(function(n){return n.serialize()})),n},n.prototype.findMinTime=function(
n){var t=n,i;for(this.startTime&&(t=Math.min(t,this.startTime)),i=0;i<this.children.length;i++)t=this.
children[i].findMinTime(t);return t},n.prototype.findMaxTime=function(n){var t=n,i;for(this.endTime&&
(t=Math.max(t,this.endTime)),this.startTime&&(t=Math.max(t,this.startTime)),i=0;i<this.children.length;
i++)t=this.children[i].findMaxTime(t);return t},n}(),u=function(){function n(){this._dummy=new f}return n.
prototype.flush=function(){return[]},n.prototype.enter=function(){return this._dummy},n.prototype.current=
function(){return this._dummy},n.prototype.exit=function(){return},n.prototype.pushOp=function(){return}
,n.prototype.popOp=function(){return},n.prototype.enabled=function(){return!1},n.prototype.stopwatch=
function(){return console.log("Profiler is disabled."),0},n}(),f=function(){function n(){this.children=
[];this.parent=null}return n.prototype.createChild=function(){return this},n.prototype.markStart=function(
){return},n.prototype.markEnd=function(){return},n.prototype.serialize=function(){return{}},n}(),e=function(
){function n(n,i){this.promise=n;var r=t.Profiler.current();r?this.operation=r.createChild(i||"Promise"):
(this.operation=t.Profiler.enter(i||"Untracked promise"),t.Profiler.popOp());this.operation.markStart(
);this.recursing=!1}return n.prototype._safeCall=function(n){if(this.recursing)return null;this.recursing=
!0;try{return n()}finally{this.recursing=!1}},n.prototype.capture=function(){var n=this,i;this.promise[
"&INSTRUMENTED&"]||(this.promise["&INSTRUMENTED&"]=this,i=this.operation,this.promise.then&&(this.originalThen=
this.promise.then,this._safeCall(function(){return n.promise.then(function(){i.markEnd()},function()
{i.markEnd()})}),this.promise.then=function(){var u,o;if(n.recursing)return n.originalThen.apply(n.promise,
arguments);var f=arguments[0],e=arguments[1],s=function(){i.markEnd();t.Profiler.pushOp(i);try{return t.
instrumentPromise(f.apply(this,arguments),"then-result")}finally{t.Profiler.popOp()}},h=function(){i.
markEnd();t.Profiler.pushOp(i);try{return t.instrumentPromise(e.apply(this,arguments),"then-error-result")}
finally{t.Profiler.popOp()}},r=[];for(f?r.push(s):arguments.length>0&&r.push(f),e?r.push(h):arguments.
length>1&&r.push(e),u=2;u<arguments.length;u++)r.push(arguments[u]);t.Profiler.pushOp(i);try{return o=
n._safeCall(function(){return n.originalThen.apply(n.promise,r)}),t.instrumentPromise(o,"then")}finally{
t.Profiler.popOp()}}),this.promise.finally&&(this.originalFinally=this.promise.finally,this._safeCall(
function(){return n.promise.finally(function(){i.markEnd()},function(){i.markEnd()})}),this.promise.
finally=function(){var r,o;if(n.recursing)return n.originalFinally.apply(n.promise,arguments);var u=
arguments[0],f=arguments[1],e=n.operation,s=function(){t.Profiler.pushOp(e);try{return t.instrumentPromise(
u.apply(this,arguments),"finally-result")}finally{t.Profiler.popOp()}},h=function(){t.Profiler.pushOp(
e);try{return t.instrumentPromise(f.apply(this,arguments),"finally-error-result")}finally{t.Profiler.
popOp()}},i=[];for(u?i.push(s):arguments.length>0&&i.push(u),f?i.push(h):arguments.length>1&&i.push(
f),r=2;r<arguments.length;r++)i.push(arguments[r]);t.Profiler.pushOp(e);try{return o=n._safeCall(function(
){return n.originalFinally.apply(n.promise,i)}),t.instrumentPromise(o,"finally")}finally{t.Profiler.
popOp()}}))},n}();t.Profiler=new u;t.instrumentPromise=s;t.enableProfiler=h});define("Shared/Constants",
["require","exports","./DateUtils","./Enumerations","ClientResources"],function(n,t,i,r,u){"use strict";
function s(n){var t=f[n];return t===undefined&&(f[n]=n,t=n),t}var e,o,f;t.InsightsProvider="microsoft.insights";
t.AlertRulesProvider="microsoft.insights/alertrules";t.FeaturesProvider="microsoft.insights/features";
t.WebSitesProvider="microsoft.web";t.ResourceType={Component:"components",WebTest:"webtests"};t.GraphPathTemplates=
{Aggregate:"providers/microsoft.insights/components/{componentName}/Aggregate",AlertRules:"providers/microsoft.insights/alertrules/{alertName}",
AlertRulesIncidents:"providers/microsoft.insights/alertrules/{alertName}/incidents",BillingPlans:"providers/microsoft.insights/queries/components/BillingPlans",
BillingPlanForComponent:"providers/microsoft.insights/components/{componentName}/BillingPlanForComponent",
CsmBase:"/subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}",CsmSubscriptionBase:"/subscriptions/{subscriptionId}",
ComponentList:"providers/microsoft.insights/components",Components:"providers/microsoft.insights/components/{componentName}",
ComponentMetrics:"providers/microsoft.insights/components/{componentName}/metrics/{metricName}/samples",
ComponentMonitorLocations:"providers/microsoft.insights/components/{componentName}/syntheticmonitorlocations",
FeatureAvailability:"providers/microsoft.features/providers/microsoft.insights/features/{featureName}",
MetricsMetadata:"providers/microsoft.insights/components/{componentName}/MetricMetadata",AttributeMetadata:
"providers/microsoft.insights/components/{componentName}/AttributeMetadata",RegisterNamespace:"providers/microsoft.insights/register",
SearchResults:"providers/microsoft.insights/components/{componentName}/Adhoc",V2SearchResults:"providers/microsoft.insights/components/{componentName}/Search",
UsageInstrumentation:"providers/microsoft.insights/components/{componentName}/usageinstrumentation",
Websites:"providers/microsoft.web/sites/{websiteName}",WebTest:"providers/microsoft.insights/webtests/{webTestName}",
WebTests:"providers/microsoft.insights/webtests",Alerts:"providers/microsoft.insights/alertrules",WebTestsMetrics:
"providers/microsoft.insights/webtests/{testName}/metrics/{metricName}/samples",WebTestsLocationMetrics:
"providers/microsoft.insights/webtests/{testName}/locations/{location}/metrics/{metricName}/samples",
Wildcard:"$all",EventDetails:"providers/microsoft.insights/components/{componentName}/eventdetails/{eventType}/event/{eventId}",
EventDetailsWithTime:"providers/microsoft.insights/components/{componentName}/eventdetails/{eventType}/event/{eventId};{eventTime}",
ContinuousExport:"providers/microsoft.insights/components/{componentName}/ExportConfiguration",ExtensionState:
"providers/microsoft.web/sites/{site}/siteextensions",ExtenstionStateWithSlot:"providers/microsoft.web/sites/{site}/slots/{slotName}/siteextensions",
LatencyComm:"providers/microsoft.insights/queries/components/views/LatencyMonitoring/getdata",Favorites:
"providers/microsoft.insights/components/{componentName}/favorites",Favorite:"providers/microsoft.insights/components/{componentName}/favorites/{favoriteId}"};
t.MetricNames={Availability15Min:"GSMT_Av15",AvailabilityRaw:"GSMT_AvRaW",AvailabilityResponseTimeRaw:
"GSMT_AvRtRaw",ResponseTimeAggregated:"GSMT_RtAgg",RequestRate:"request_rate",TotalRequests:"request.count",
FailedRequests:"requestFailed.count",NewSessions:"new_sessions",Sessions:"context.session.id.hash",PageViews:
"view.count",CustomEventsCount:"event.count",TelemetryItemCount:"billingMetric.telemetryItemCountMetric.value",
ActiveUsers:"context.user.anonId.hash",ServerResponseTime:"request.duration",BrowserResponseTime:"clientPerformance.total.value",
BrowserPageLoadConnectTime:"clientPerformance.networkConnection.value",BrowserSendRequestTime:"clientPerformance.sendRequest.value",
BrowserReceivingResponseTime:"clientPerformance.receiveRequest.value",BrowserClientProcessingTime:"clientPerformance.clientProcess.value",
NoRequestsEver:"request.count",RemoteDependencyDuration:"remoteDependency.durationMetric.value",RemoteDependencyCount:
"remoteDependency.durationMetric.count",FailedRemoteDependencyCount:"remoteDependencyFailed.durationMetric.count",
Exceptions:"basicException.count",Crashes:"basicExceptionCrash.count",BrowserExceptions:"basicExceptionBrowser.count",
ServerExceptions:"basicExceptionServer.count",SessionDuration:"sessionMetric.durationMetric.value",SessionCustomEvents:
"sessionMetric.eventCountMetric.value",SessionPageViews:"sessionMetric.pageCountMetric.value",SessionRequests:
"sessionMetric.requestCountMetric.value",SessionExceptions:"sessionMetric.exceptionCountMetric.value",
TimeBetweenSessions:"sessionMetric.anonymousUserDurationSinceLastVisitMetric.value",AspNetPerformanceCounterRequestRate:
"performanceCounter.requests_per_sec.value",PerformanceCounterAvailableBytes:"performanceCounter.available_bytes.value",
PerformanceCounterExceptionPerSec:"performanceCounter.number_of_exceps_thrown_per_sec.value",ProcessorNonIdlePercentage:
"performanceCounter.percentage_processor_total.value",ProcessorCPU:"performanceCounter.percentage_processor_time.value",
ProcessorMemory:"performanceCounter.available_bytes.value",AspNetRequestsInQueue:"performanceCounter.requests_in_application_queue.value",
ProcessIORate:"performanceCounter.io_data_bytes_per_sec.value",AspNetRequestsExecutionTime:"performanceCounter.request_execution_time.value",
NewUsers:"context.user.new",ImpactedUsers:"context.user.impactedUsers"};t.MetricMetadata={MetricUnitTypeCounter:
"Counter",MetricUnitTypeTimer:"Timer"};t.DimensionNames={RequestTime:"context.data.eventTime",RequestCount:
"request.count",Url:"request.name",EntryUrl:"sessionMetric.entryUrl",ExitUrl:"sessionMetric.exitUrl",
EntryEvent:"sessionMetric.entryEvent",ExitEvent:"sessionMetric.exitEvent",RequestName:"request.name",
Region:"context.location.country",ESDeviceType:"natural_dim.devicetype.value",DeviceType:"context.device.type",
CustomEventName:"event.name",CustomEventCount:"customevent.count",BrowserName:"naturaldim.browser.name",
ExceptionTypeName:"basicException.typeName",ExceptionMessage:"basicException.message",ExceptionMethod:
"basicException.method",SuccessfulRequest:"request.success",RequestId:"request.id",BaseUrl:"request.urlData.base",
RequestUrl:"request.url",RequestResponseCode:"request.responseCode",RequestDuration:"request.duration",
OperationId:"context.operation.id",OperationName:"context.operation.name",RemoteDependencyName:"remoteDependency.durationMetric.name",
RemoteDependencyType:"remoteDependency.type",DeviceId:"context.device.id",BrowserExceptionFileName:"basicException.parsedStack.fileName",
SessionId:"context.session.id",ClientIp:"context.location.clientip",MessageRaw:"message.raw",ViewName:
"view.name",ViewUrl:"view.url",ExceptionProblemId:"basicException.problemId",ExceptionSeverity:"basicException.severityLevel",
Browser:"context.device.browser",BrowserVersion:"context.device.browserVersion",OsVersion:"context.device.osVersion",
ScreenResolution:"context.device.screenResolution.value",LocationContinent:"context.location.continent",
LocationCountry:"context.location.country",LocationProvince:"context.location.province",LocationCity:
"context.location.city",RoleInstance:"context.device.roleInstance",ApplicationVersionDimensionId:"context.application.version",
DeviceModelDimensionId:"context.device.deviceModel"};t.FunctionNames={Sum:"Sum",Min:"Min",Max:"Max",
Avg:"Avg",UniqueCount:"UniqueCount",Cardinality:"Cardinality",ExtendedStats:"ExtendedStats"};t.AggregateEndpointNotProvisionedCode=
471;t.Usage={ActivitiesMetric:"Activities",AvgPageLoadTimeMetric:"AvgPageLoadTime",SessionsMetric:"Sessions"};
t.WebTests={ProviderId:"df5f4ee2-d8c6-438b-8dcf-811a631a2ef6",SyntheticMonitorId:"SyntheticMonitorId",
SyntheticMonitorLocationId:"SyntheticMonitorLocationId",MaxWebtestCount:10,LinkToComponentTemplate:"hidden-link:/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroup}/providers/microsoft.insights/components/{Name}",
TestKind:{Ping:"ping",Multistep:"multistep"}};t.Regex={Email:/^[^\s;@]+@[^\s;@]+\.[^\s;@]+(;[^\s;@]+@[^\s;@]+\.[^\s;@]+)*;?$/i,
UrlHttp:/^(http(s)?:\/\/)(([a-zA-Z0-9\.\-\_]{2,256}\.[a-z]{2,6})|(\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b))/i,
WebTestName:/^\s*[a-zA-Z][0-9a-zA-Z\s-]{0,14}?[0-9a-zA-Z]?\s*$/};t.Colors={ChartSuccess:"msportalfx-bgcolor-j1",
ChartFailure:"msportalfx-bgcolor-c0",Success:"msportalfx-bgcolor-themeSuccess",PriorPeriodSeries:"msportalfx-bgcolor-k1",
SuccessAzc:"azc-color-j1",Error:"msportalfx-bgcolor-themeError",Warning:"msportalfx-bgcolor-themeWarning",
NoDataMetric:"msportalfx-bgcolor-k0t2",MsPortalFxBgColorTemplate:"msportalfx-bgcolor-{key}",Gradient:
["f0","g1","g0","g2","h2","h0","h1","i1","i0","i2","j1","j0","j2","a0","a1","b2","b0","c2","b1","c0",
"c1","d0","d1","e2","e0","e1","f1",],msPortalFxBgColor:["msportalfx-bgcolor-g0","msportalfx-bgcolor-f0",
"msportalfx-bgcolor-e0","msportalfx-bgcolor-h0","msportalfx-bgcolor-i0","msportalfx-bgcolor-j0","msportalfx-bgcolor-a1",
"msportalfx-bgcolor-b1","msportalfx-bgcolor-c1","msportalfx-bgcolor-d1","msportalfx-bgcolor-e1","msportalfx-bgcolor-f1",
"msportalfx-bgcolor-g1","msportalfx-bgcolor-h1","msportalfx-bgcolor-i1","msportalfx-bgcolor-j1","msportalfx-bgcolor-b2",
"msportalfx-bgcolor-c2","msportalfx-bgcolor-e2","msportalfx-bgcolor-g2","msportalfx-bgcolor-h2","msportalfx-bgcolor-i2",
"msportalfx-bgcolor-j2","msportalfx-bgcolor-a0","msportalfx-bgcolor-b0","msportalfx-bgcolor-c0","msportalfx-bgcolor-d0"],
MinimumPaletteColors:7,palettes:{defaultPalette:["msportalfx-bgcolor-g0","msportalfx-bgcolor-j0t1","msportalfx-bgcolor-h2",
"msportalfx-bgcolor-h1","msportalfx-bgcolor-g2","msportalfx-bgcolor-j2","msportalfx-bgcolor-j1","msportalfx-bgcolor-a0",
"msportalfx-bgcolor-i0","msportalfx-bgcolor-d0t1","msportalfx-bgcolor-c1","msportalfx-bgcolor-j0","msportalfx-bgcolor-f0t2",
"msportalfx-bgcolor-i0t1","msportalfx-bgcolor-e0t1","msportalfx-bgcolor-b2","msportalfx-bgcolor-c2",
"msportalfx-bgcolor-e2","msportalfx-bgcolor-h0","msportalfx-bgcolor-b0t1","msportalfx-bgcolor-b1","msportalfx-bgcolor-a1",
"msportalfx-bgcolor-d0","msportalfx-bgcolor-i2","msportalfx-bgcolor-c0","msportalfx-bgcolor-g0t1"],blueHues:
["msportalfx-bgcolor-g0","msportalfx-bgcolor-g0t1","msportalfx-bgcolor-g0s1","msportalfx-bgcolor-g2",
"msportalfx-bgcolor-g1","msportalfx-bgcolor-g0t2","msportalfx-bgcolor-f2",],darkBlueHues:["msportalfx-bgcolor-f0",
"msportalfx-bgcolor-g1","msportalfx-bgcolor-g0s1","msportalfx-bgcolor-f2","msportalfx-bgcolor-f0t1",
"msportalfx-bgcolor-themeMain","msportalfx-bgcolor-h2","msportalfx-bgcolor-g0s2"],greenHues:["msportalfx-bgcolor-j1",
"msportalfx-bgcolor-j0","msportalfx-bgcolor-i0t1","msportalfx-bgcolor-j0t1","msportalfx-bgcolor-i0",
"msportalfx-bgcolor-i0t2","msportalfx-bgcolor-i2",],warmHues:["msportalfx-bgcolor-b2","msportalfx-bgcolor-b0",
"msportalfx-bgcolor-a1","msportalfx-bgcolor-b1","msportalfx-bgcolor-b0t1","msportalfx-bgcolor-c0","msportalfx-bgcolor-c0t1",
],purpleHues:["msportalfx-bgcolor-f0t2","msportalfx-bgcolor-e0t1","msportalfx-bgcolor-d0t2","msportalfx-bgcolor-e2",
"msportalfx-bgcolor-e0","msportalfx-bgcolor-e0t2","msportalfx-bgcolor-e0s1",],yellowHues:["msportalfx-bgcolor-a0",
"msportalfx-bgcolor-a0t2","msportalfx-bgcolor-a0t1","msportalfx-bgcolor-j2","msportalfx-bgcolor-a2",
"msportalfx-bgcolor-j0t2","msportalfx-bgcolor-a0s1",],passFail:["msportalfx-bgcolor-j1","msportalfx-bgcolor-d0",
"msportalfx-bgcolor-j0","msportalfx-bgcolor-i0t1","msportalfx-bgcolor-j0t1","msportalfx-bgcolor-i0",
"msportalfx-bgcolor-i0t2",],fail:["msportalfx-bgcolor-d0","msportalfx-bgcolor-j0","msportalfx-bgcolor-i0t1",
"msportalfx-bgcolor-j0t1","msportalfx-bgcolor-i0","msportalfx-bgcolor-i0t2","msportalfx-bgcolor-i2",
]}};t.ApplicationType={Phone:"phone",Store:"store",Web:"web",Java:"java"};t.Durations={OneMinute:i.unitsInMilliseconds.
Minutes,OneHour:i.unitsInMilliseconds.Hours,OneDay:i.unitsInMilliseconds.Days,TwoDays:i.unitsInMilliseconds.
Days*2,ThreeDays:i.unitsInMilliseconds.Days*3,OneWeek:i.unitsInMilliseconds.Days*7,LastFourWeeks:i.unitsInMilliseconds.
Days*7,ShouldBeThirtyButReallySevenDays:i.unitsInMilliseconds.Days*7};t.HistoricalQuery={MaxRawDataTimeRangeInDays:
28,MinGrainSpanForHistoricalData:new MsPortalFx.ViewModels.Controls.Visualization.Chart.DateSpan(0,0,
0,1,0,0,0),MinGrainSpan:new MsPortalFx.ViewModels.Controls.Visualization.Chart.DateSpan(0,0,0,0,0,1,
0)};t.Queries={Base:"BaseQuery",AppListMetrics:"AppListMetricsQuery",AttributeMetadata:"AttributeMetadataQuery",
AverageResponseTimeSummary:"AverageResponseTimeSummaryQuery",Devices:"DevicesQuery",FailedRequestsRate:
"FailedRequestsRateQuery",Metadata:"MetadataQuery",MetricsMetadata:"MetricsMetadataQuery",NoPageViewsEver:
"NoPageViewsEverQuery",NoPerfCountersEver:"NoPerfCountersEverQuery",NoRemoteDependenciesEver:"NoRemoteDependenciesEverQuery",
NoRequestsEver:"NoRequestsEverQuery",NoSessionsEver:"NoSessionsEverQuery",PageViews:"PageViewsQuery",
RequestRateSeries:"RequestRateSeriesQuery",RequestRateSummary:"RequestRateSummaryQuery",RequestsByRegion:
"RequestsByRegionQuery",RequestSummary:"RequestSummaryQuery",RequestTime:"RequestTimeQuery",RequestTimePrior:
"RequestTimeQuery_Prior",SegmentationSummary:"SegmentationSummaryQuery",SegmentationSeries:"SegmentationSeriesQuery",
ServerRequests:"ServerRequestsQuery",SessionsPerHour:"SessionsPerHourQuery",SessionsPerCountry:"SessionsPerCountryQuery",
SessionsStarted:"SessionsStartedQuery",SessionsTotal:"SessionsTotalQuery",SlowestPages:"SlowestPagesQuery",
Summary:"SummaryQuery",EventsLastMonth:"EventsLastMonthQuery",TopBrowsers:"TopBrowsersQuery",TopDeviceModels:
"TopDeviceModelsQuery",TopServerExceptions:"TopServerExceptionsQuery",TopPageViews:"TopPageViewsQuery",
TopPageViewsAbsoluteUrl:"TopPageViewsAbsoluteUrlQuery",TotalRequests:"TotalRequests",NoCustomEventsEver:
"NoCustomEventsEverQuery",NoCrashesEver:"NoCrashesEverQuery",GetAlerts:"GetAlertsQuery",Alert:"AlertQuery",
SetBillingPlan:"SetBillingPlanQuery",BillingPlan:"BillingPlanQuery",GetOveragePrices:"GetOveragePricesQuery",
GetComponent:"GetComponentQuery",PutComponent:"PutComponentQuery",FetchComponentsForSubscription:"FetchComponentsForSubscriptionQuery",
DeleteApplication:"DeleteApplicationQuery",RegisterNamespace:"RegisterNamespaceQuery",CreateContinuousExport:
"CreateContinuousExportQuery",UpdateContinuousExport:"UpdateContinuousExportQuery",DeleteContinuousExport:
"DeleteContinuousExportQuery",DeleteAllExportsForIkey:"DeleteAllExportsForIkeyQuery",ContinuousExport:
"ContinuousExportQuery",GetFeatureStatus:"GetFeatureStatusQuery",GettingStarted:"GettingStartedQuery",
LatencyStatus:"LatencyStatusQuery",MonitoredApplication:"MonitoredApplicationQuery",SearchFacets:"SearchFacetsQuery",
SearchResults:"SearchResultsQuery",SearchTimeline:"SearchTimelineQuery",SearchDetails:"SearchDetailsQuery",
RelatedSearchDetails:"RelatedSearchDetailsQuery",UsageInstrumentation:"UsageInstrumentationQuery",WebsiteComponentId:
"WebsiteComponentIdQuery",CreateWebTest:"CreateWebTestQuery",DeleteWebTest:"DeleteWebTestQuery",LinkedWebTests:
"LinkedWebTestsQuery",PerfStore:"PerfStoreQuery",WebTestMetric:"WebTestMetricQuery",WebTestResult:"WebTestResultQuery",
WebTests:"WebTestsQuery",WebTestsByWebTestId:"WebTestsByWebTestIdQuery",WebTestServerLocation:"WebTestServerLocationQuery",
WebSiteExtensions:"WebSiteExtensionsQuery",GetFavoritesList:"GetFavoritesList",PutFavorite:"PutFavorite",
DeleteFavorite:"DeleteFavorite"};t.Features={Billing:"billing"};t.InsufficientAIAccess="InsufficientAccess";
t.NoPartSpecific="NoPartSpecific";t.ApplicationLocationDisplayKey="centralus";t.ApplicationInsightsProviderIdentifier=
"Microsoft.ApplicationInsights";t.MaxMetricsAllowedInEditGrid=5;t.MetricsExplorerUriToken="chartDefinitionId";
t.MetricsExplorerUriNameKey="name";t.JsonUriPrefix=this.MetricsExplorerUriToken+":?"+this.MetricsExplorerUriNameKey+
"=",function(n){n.PageViews="PageViews";n.Requests="Requests";n.RemoteDependencies="RemoteDependencies";
n.PerfCounters="PerfCounters";n.CustomEvents="CustomEvents";n.Crashes="Crashes";n.DefaultSkipRetryNoDataQuery=
"DefaultSkipRetryNoDataQuery"}(e=t.MetricsExplorerChartNoDataHelperKind||(t.MetricsExplorerChartNoDataHelperKind=
{})),function(n){n.Supported=[4,1,3,5,2];n.EventNames={Trace:{documentName:"message",displayName:u.searchFilterEventTypeTrace},
Request:{documentName:"request",displayName:u.searchFilterEventTypeRequests},View:{documentName:"view",
displayName:u.searchFilterEventTypeViews},Event:{documentName:"event",displayName:u.searchFilterEventTypeCustomEvent},
BasicException:{documentName:"basicException",displayName:u.searchFilterEventTypeExceptions}}}(o=t.SupportedSearchEventTypes||
(t.SupportedSearchEventTypes={}));t.SearchAllToken="*";t.monthLengthInDays=365.25/12;t.minDate=new Date(
"2013/01/01");f={Free:u.freeBillingPlanTitle,Standard:u.standardBillingPlanTitle,Premium:u.premiumBillingPlanTitle,
FreeTrial:u.freeTrialBillingPlanTitle,TempDefault:"Temporary Default"};t.MapPlanIdToTitle=s;t.FavoriteVersions=
{FavoriteSearchVersion:"Search",FavoriteMEVersion:"ME"};t.FavoriteTypes={SharedFavorite:"shared",MyFavorite:
"user"};t.minimumRangeInDaysForDailyGrain_Usage=7;t.minimumRangeInDaysForDailyGrain_Default=30});define(
"Billing/BillingSpecProvider",["require","exports","../Shared/QueryBase","./DataModels/OveragePricesQuery",
"../Shared/Constants"],function(n,t,i,r,u){"use strict";t.BillingPlans={Free:"Free",Standard:"Standard",
Premium:"Premium",FreeTrial:"FreeTrial",TempDefault:"TempDefault"};var f=function(){function n(n,t){
this._dataContext=t;this._billingPlansView=this._dataContext._billingPlansEntityCache.createView(n);
this._overagePricesView=this._dataContext._overagePricesEntityCache.createView(n)}return n.prototype.
GetSpecData=function(n,t){var f=this,r=$.Deferred(),e={SubscriptionId:n,Name:"",ResourceGroup:""};return this.
_billingPlansView.fetch(new i.QueryBase(e,t,u.Queries.BillingPlan)).then(function(){r.resolve($.extend(
!0,{},f._billingPlansView.item()))},function(){r.reject("Could not get billing specs")}),r.promise()}
,n.prototype.GetSpecBySpecId=function(n,t,i){var r=$.Deferred();return this.GetSpecData(n,i).then(function(
n){r.resolve(n.SpecData.specs.first(function(n){return n.id===t}))},function(){r.reject("Could not get billing spec by id: "+
t)}),r.promise()},n.prototype.GetOveragePrices=function(n,t,i){var f=this,u=$.Deferred();return this.
_overagePricesView.fetch(new r.GetOveragePricesQuery(n,i,t)).then(function(){u.resolve(f._overagePricesView.
item().costs)},function(){u.reject("Failed to get overage prices")}),u.promise()},n}();t.BillingSpecProvider=
f});define("Shared/QueryBase",["require","exports","./TimeContext"],function(n,t,i){"use strict";function r(
n,t){var r,i;if(n===undefined||n===null)return"null";if(typeof n!="object")throw new Error("Only objects may be serialized.");
r=[];for(i in n)t&&t.some(function(n){return n===i})||!n.hasOwnProperty(i)||/_.*/.test(i)||$.isFunction(
n[i])||r.push({key:i,value:n[i]});return r.sort(function(n,t){return n.key.localeCompare(t.key)}),r.
map(function(n){return"{0}={1}".format(n.key,u(n.value))}).join(";")}function e(n){var t=[];return t.
push("queryProperties={{0}}".format(r(n,["queryParams","timeContext"]))),n.queryParams&&t.push("queryParams={{0}}".
format(r(n.queryParams))),n.timeContext&&t.push(i.getKey(n.timeContext)),t.join(";")}function u(n){var
t=null;if(n===undefined||n===null)t="null";else if(typeof n=="object")if(n instanceof Date)t=n.toISOString(
);else throw new Error("Only values which are a string, number, boolean, Date or undefined may be serialized.");
else t=n.toString();return t}var f=function(){function n(n,t,i){this._componentId=n;this._containerName=
t;this._queryName=i;this.subscriptionId=n.SubscriptionId;this.resourceGroup=n.ResourceGroup;this.componentName=
n.Name}return n.prototype.getPayload=function(){throw new Error("Derived classes must implement getPayload.");
},n.prototype.prepareQuery=function(){if(this.timeContext&&this.queryParams){var n=i.toTimeRange(this.
timeContext);this.queryParams.endTime=n.endTime.toISOString();this.queryParams.startTime=n.startTime.
toISOString()}},n}();t.QueryBase=f;t._serializeObject=r;t.getKey=e;t._serializeValue=u});define("Shared/TimeContext",
["require","exports","./DateUtils"],function(n,t,i){"use strict";function u(n,t){return new r(n.durationMs,
n.endTime,t.toISOString(),n.isInitialTime)}function f(n){var t=n.endTime?n.endTime:new Date;return{startTime:
i.addMilliseconds(t,-n.durationMs),endTime:t}}function e(n,t){return new r(t.getTime()-n.getTime(),t)}
function o(n,t){var u=i.compare(t,n);return new r(u,t)}function s(n,t,i){return!n&&!t?!0:!n||!t?!1:i?
n.durationMs===t.durationMs:n.durationMs===t.durationMs&&h(n.endTime,t.endTime)}function h(n,t){return!n&&
!t?!0:!n||!t?!1:n.getTime()===t.getTime()}function c(n){var t=n.endTime;return t?"timeContext={startTime={0};endTime={1}}".
format(i.addMilliseconds(t,-n.durationMs).toISOString(),t.toISOString()):(t=i.roundDate(new Date,i.TimeUnits.
minutes,!0,5),"timeContext={startTime={0};endTime={1};createdTime={2}}".format(i.addMilliseconds(t,-n.
durationMs).toISOString(),t.toISOString(),n.createdTime))}var r=function(){function n(n,t,i,r){this.
durationMs=n;this.endTime=t;this.createdTime=i||(new Date).toISOString();this.isInitialTime=r||!1}return n}
();t.TimeContext=r;t.copy=u;t.toTimeRange=f;t.fromTimeRange=e;t.createFixedTimeContext=o;t.equals=s;
t.getKey=c});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)
t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Billing/DataModels/OveragePricesQuery",
["require","exports","../../Shared/Constants","../../Shared/QueryBase"],function(n,t,i,r){"use strict";
function f(n){var t=$.Deferred(),i={subscriptionId:n.subscriptionId,specResourceSets:n.GetOverageResources(
),specsToAllowZeroCost:[],specType:"Application Insights"};return MsPortalFx.Services.Rpc.invokeCallback(
MsPortalFx.Base.Constants.ExtensionNames.Billing,"getSpecsCosts",i).then(function(n){n&&n.isSuccess?
t.resolve(n):t.reject({reason:"Getting AI overage prices failed."})},function(n){t.reject(n)}),t.promise(
)}var u=function(n){function t(t,r,u){n.call(this,t,u,i.Queries.GetOveragePrices);this.overageResources=
JSON.stringify(r)}return __extends(t,n),t.prototype.GetOverageResources=function(){return JSON.parse(
this.overageResources)},t}(r.QueryBase);t.GetOveragePricesQuery=u;t.loadOveragePrices=f});define("Shared/ComponentIdCache",
["require","exports","./ComponentIdService","./InsightsTelemetry","ClientResources","../_generated/ExtensionDefinition"],
function(n,t,i,r,u,f){"use strict";function s(n){n.forEach(function(n){var t=i.componentIdToResourceId(
n.componentId),r=e[t];r||(e[t]=n.componentId)})}function h(n,t,r){var f=i.componentIdToResourceId(n),
u=e[f];return u?r?u.Metadata&&u.Metadata.accountId?$.Deferred().resolve(u).promise():o(u,t).then(function(
n){return e[f]=n,n}):$.Deferred().resolve(u).promise():o(n,t).then(function(n){return e[f]=n,n})}function c(
n,t){return n&&t&&n.Name===t.Name&&n.ResourceGroup===t.ResourceGroup&&n.SubscriptionId===t.SubscriptionId?
!0:!1}function o(n,t){var o=$.Deferred(),e={subscriptionId:n.SubscriptionId,name:n.Name};return i.fetch(
n,t).then(function(f){f&&f.properties?(o.resolve(i.getComponentId(f)),f.properties.TenantId&&f.properties.
Application_Type&&f.properties.Flow_Type&&f.properties.Request_Source||(e=$.extend(e,{Application_ID_V2:
f.properties.TenantId+n.Name,TenantId:f.properties.TenantId,Application_Type:f.properties.Application_Type,
Flow_Type:f.properties.Flow_Type,Request_Source:f.properties.Request_Source}),r.logWarning("Success, but not all telemetry properties has value.",
3,t,n,e))):(o.reject({reason:u.resourceNotfound}),r.logWarning("Success, but properties is empty.",3,
t,n,e))},function(u){u&&u.status===404&&(r.logWarning("ComponentId.fetch not found",3,t,n),MsPortalFx.
UI.AssetManager.notifyAssetDeleted(f.AssetTypeNames.applicationInsights,n),MsPortalFx.UI.AssetManager.
notifyAssetDeleted(f.AssetTypeNames.applicationInsights,i.componentIdToResourceId(n)));o.reject(u);r.
logWarning("ComponentId.fetch Failed.",3,t,n,e)}),o.promise()}var e={};t.update=s;t.getFullComponentId=
h;t.checkComponentIdEquality=c});define("Shared/ComponentIdService",["require","exports","./AjaxHelper",
"./Constants","./InsightsTelemetry","../_generated/ExtensionDefinition","./UrlHelper","./QueryBase",
"./Logging","./ThenableWrapper","./TransformHelper"],function(n,t,i,r,u,f,e,o,s,h,c){"use strict";function y(
n){var t=nt(n.id);return typeof t.ResourceGroup=="undefined"||typeof t.Name=="undefined"||typeof t.SubscriptionId==
"undefined"?null:(n.properties&&(t.Metadata={applicationType:n.properties.Application_Type,flowType:
n.properties.Flow_Type,requestSource:n.properties.Request_Source,accountId:n.properties.TenantId,instrumentationKey:
n.properties.InstrumentationKey,creationDate:n.properties.CreationDate}),t)}function p(n,t,i){i===void
0&&(i=!0);var r=w(n,t,i);return r&&r.length>0?r[0]:null}function w(n,t,i){i===void 0&&(i=!0);var f=new
RegExp(n,"i"),r=[],u=[];return t.forEach(function(n,t){var e=!1,o,s,i;for(o in n.tags)if(s=o,i=f.exec(
s),i&&i.length>0){e=!0;break}e?r.push(t):u.push(t)}),i?r.map(function(n){return t[n]}):u.map(function(
n){return t[n]})}function tt(n,t){var i=a(n),f=RegExp("/sites/","i"),r,u;return r=f.test(n)?"hidden-link:/subscriptions/{0}/resourceGroups/[^/]*/providers/microsoft\\.web/sites/{1}".
format(i.SubscriptionId,i.Name):"hidden-link:/subscriptions/{0}/resourceGroups/[^/]*/providers/Microsoft\\.ClassicCompute/virtualMachines/{1}".
format(i.SubscriptionId,i.Name),u=p(r,[t]),u!=null}function b(n,t,f,o,s,h){var l=this,c,v;return(h||
(h=$.Deferred()),c=a(f),!c.ResourceGroup||!c.SubscriptionId)?(h.reject(["Invalid input resourceId","ComponentIdService.createOrUpdate"]),
h.promise()):(v=k(f),t.tags||(t.tags={}),t.tags[v]="Resource",it(c).then(function(a){u.logCustomEvent(
u.AITelemetryConstants.RBAC,3,"Subscription access",undefined,{hasPermission:a});a?d(n,t,s).then(function(
){h.resolve()},function(a){if(a&&a.status===409&&o){var v=e.buildGraphProxyPath(c.SubscriptionId,"",
r.GraphPathTemplates.RegisterNamespace,null,!0),y={_componentId:c,_containerName:s,_queryName:r.Queries.
RegisterNamespace};i.apiPost(v,y).then(function(){var i=l._params?l._params._containerName:u.AITelemetryConstants.
ComponentIdService;b(n,t,f,!1,i,h=h)},function(n){h.reject([n,"ComponentIdService.createOrUpdate: register component"])}
)}else h.reject([a,"ComponentIdService.createOrUpdate: create component"])}):h.reject([r.InsufficientAIAccess,
"ComponentIdService.createOrUpdate: Insufficient access"])}),h.promise())}function it(n){return MsPortalFx.
Base.Security.hasPermission("/subscriptions/"+n.SubscriptionId,[f.AssetTypes.ApplicationInsights.Permissions.
write])}function k(n){return"{0}{1}".format("hidden-link:",n)}function rt(n,t,i,r,f,e){return r||(r=
u.AITelemetryConstants.DefaultFlowType),f||(f=u.AITelemetryConstants.DefaultRequestSource),e||(e={applicationType:
t}),{id:"",type:"",name:n,location:i,tags:e,properties:{ApplicationId:n,Application_Type:t,Flow_Type:
r,Request_Source:f,InstrumentationKey:null,CreationDate:(new Date).toString()}}}function l(n){return e.
buildGraphProxyPath(n.SubscriptionId,n.ResourceGroup,r.GraphPathTemplates.Components,{componentName:
n.Name})}function ut(n,t){var u=l(n),f={_componentId:n,_containerName:t,_queryName:r.Queries.GetComponent};
return i.apiGet(u,f)}function d(n,t,u){var f=l(n),e={_componentId:n,_containerName:u,_queryName:r.Queries.
PutComponent};return i.apiPut(f,e,t)}function ft(n,t){var u=l(n),f={_componentId:n,_containerName:t,
_queryName:r.Queries.DeleteApplication};return i.apiDelete(u,f)}function g(n,t){var f=e.buildGraphProxyPath(
n,"",r.GraphPathTemplates.ComponentList),u=$.Deferred(),o={_componentId:undefined,_containerName:t,_queryName:
r.Queries.FetchComponentsForSubscription};return i.apiGet(f,o).then(function(n){var t=c.unwrapCsmArray(
n);t===null&&(t=[]);u.resolve(t)},function(n){u.reject(n)}),u.promise()}function et(n,t,i){var r=$.Deferred(
);return g(n,i).then(function(n){var i=n.first(function(n){return n.name.toLocaleLowerCase().localeCompare(
t.toLocaleLowerCase())===0});i?r.resolve(y(i)):r.resolve(null)},function(n){r.reject(n)}),r.promise(
)}function nt(n){for(var i=(n+"").split("/"),r,u,f,t=0;t<i.length;t++)switch(i[t].toLowerCase()){case"subscriptions":
t+1<i.length&&(r=i[t+1],t++);break;case"resourcegroups":t+1<i.length&&(u=i[t+1],t++);break;case"components":
t+1<i.length&&(f=i[t+1],t++)}return{SubscriptionId:r,ResourceGroup:u,Name:f}}function a(n){for(var i=
(n+"").split("/"),u,f,r,e,t=0;t<i.length;t++)switch(i[t].toLowerCase()){case"subscriptions":t+1<i.length&&
(u=i[t+1],t++);break;case"resourcegroups":t+1<i.length&&(f=i[t+1],t++);break;case"slots":t+1<i.length&&
(e=i[t+1],t++);break;case"sites":t+1<i.length&&(r=i[t+1],t++)}return r=r?r:i[i.length-1],{Name:r,SubscriptionId:
u,ResourceGroup:f,slotName:e}}function v(n){var t=new MsPortalFx.ViewModels.Services.ResourceTypes.ResourceDescriptor;
return t.subscription=n.SubscriptionId,t.resourceGroup=n.ResourceGroup,t.resource=n.Name,t.type="components",
t.provider="microsoft.insights",t.types=[t.type],t.resources=[t.resource],MsPortalFx.ViewModels.Services.
ResourceTypes.buildResourceIdFromDescriptor(t)}function ot(n,t,i){var e=[],c=undefined,u=[],l,a,f;return t&&
(l=new o.QueryBase(n,i,r.Queries.LinkedWebTests),a=t.fetch(l).then(function(){var n=t.item();n&&n.forEach(
function(n){return u.push(n.id)})}),e.push(a)),f=$.Deferred(),h.all(e).then(function(){c&&u.push(c)}
).then(function(){u.push(v(n));f.resolve(u.reverse())}).catch(function(t){var i=t&&t.responseText?t.
responseText:t;s.errorConsole("failed to query resources: "+i,"ComponentIdService.lookupLinkedResources");
f.resolve([v(n)])}),f.promise()}function st(n,t){return!n&&!t?!0:n&&t?n.SubscriptionId===t.SubscriptionId&&
n.ResourceGroup&&t.ResourceGroup&&n.ResourceGroup.toLowerCase()===t.ResourceGroup.toLowerCase()&&n.Name&&
t.Name&&n.Name.toLowerCase()===t.Name.toLowerCase():!1}t.getComponentId=y;t._filter=p;t._findComponents=
w;t.hasLink=tt;t.createOrUpdate=b;t.getLinkString=k;t.getDefaultPayloadForCreateComponent=rt;t._getGraphPath=
l;t.fetch=ut;t.create=d;t.destroy=ft;t.fetchComponentsForSubscription=g;t.fetchMatchingComponentInSubscription=
et;t.resourceIdToComponentId=nt;t.nonAIResourceIdToNonAIComponentId=a;t.componentIdToResourceId=v;t.
lookupLinkedResources=ot;t.Equal=st});define("Shared/AjaxHelper",["require","exports","./AjaxCore","./Configuration",
"./Enumerations","./InsightsTelemetry","./Router","./ResourceTokenCache"],function(n,t,i,r,u,f,e,o){
"use strict";function l(n,t){return s(n,null,t)}function a(n,t,i){return s(n,{type:"POST",contentType:
"application/json; charset=utf-8",data:JSON.stringify(i)},t)}function v(n,t,i){var r={type:"PUT",contentType:
"application/json; charset=utf-8",data:JSON.stringify(i)};return i&&("Request_Source"in i&&(r.Request_Source=
i.Request_Source),"Application_Type"in i&&(r.Application_Type=i.Application_Type),"Flow_Type"in i&&(
r.Flow_Type=i.Flow_Type)),s(n,r,t)}function y(n,t,i){return s(n,{type:"PATCH",contentType:"application/json; charset=utf-8",
data:JSON.stringify(i)},t)}function p(n,t){return s(n,{type:"DELETE",contentType:"application/json; charset=utf-8"},
t)}function s(n,t,u){var s=new Date,l=r.getSettings(),o;return l.isUsingTestBackend()&&b(n)?k(n):(o=
e.getInstance().getRouteInfo(n),h(o).then(function(n){var r=c(o,n);return i.ajax(s,o.url,r,t,u)},function(
i){var r={},e;return r[f.AITelemetryConstants.Url]=n,r[f.AITelemetryConstants.Type]=t&&t.type?t.type:
"GET",e=Date.now()-s.getTime(),f.logAjaxQuery(u,1,i,r,e),i}))}function h(n){return n.isRedirected?w(
n):i.getIbizaAuthorizationHeader()}function w(n){return o.getInstance().getAuthorizationHeader(n.resourceId).
then(function(t){return t?t:(n.url=n.originalUrl,n.isRedirected=!1,i.getIbizaAuthorizationHeader())}
)}function c(n,t){var r=i.buildHeaders(t);return n&&n.isRedirected&&(r["x-original-request-uri"]=n.originalUrl),
r}function b(n){var t=!1;return n&&(t=n.indexOf("providers/microsoft.insights/alertrules")!==-1),t}function k(
){var n=$.Deferred();return n.resolveWith({value:[]}),n.promise()}t.apiGet=l;t.apiPost=a;t.apiPut=v;
t.apiPatch=y;t.apiDelete=p;t.ajax=s;t.getAuthorizationHeader=h;t.buildHeaders=c});define("Shared/AjaxCore",
["require","exports","./Configuration","./Enumerations","./InsightsTelemetry"],function(n,t,i,r,u){"use strict";
function f(n,i,r,f,e){n=n||new Date;var o={headers:r,dataType:"json",traditional:!0,timeout:t.DefaultTimeout};
return $.ajax(i,$.extend(o,f)).then(function(f){var s=Date.now()-n.getTime(),o={};return o[u.AITelemetryConstants.
Url]=i,o[u.AITelemetryConstants.ClientRequestId]=r[t.ClientRequestIdHeaderName],u.logAjaxQuery(e,0,undefined,
o,s),f},function(o,s){var h={},c;return h[u.AITelemetryConstants.Url]=i,h[u.AITelemetryConstants.ClientRequestId]=
r[t.ClientRequestIdHeaderName],h[u.AITelemetryConstants.Type]=f&&f.type?f.type:"GET",s&&(h[u.AITelemetryConstants.
Response]=s),c=Date.now()-n.getTime(),u.logAjaxQuery(e,1,o,h,c),o})}function e(){return MsPortalFx.Base.
Security.getAuthorizationToken().then(function(n){return n.header})}function o(n){var r={},u=i.getSettings(
);return r.Authorization=n,r[t.ClientRequestIdHeaderName]=MsPortalFx.Util.newGuid(),r["x-ms-client-session-id"]=
i.getIbizaEnvironment().sessionId,r["x-ms-version"]=u.getAppInsightsVersion(),u.getCsmEnvironment()!==
u.getDefaultEnvironment()&&(r["CSM-Env"]=i.getSettings().getCsmEnvironment()),r}t.DefaultTimeout=3e5;
t.ClientRequestIdHeaderName="x-ms-client-request-id";t.ajax=f;t.getIbizaAuthorizationHeader=e;t.buildHeaders=
o});define("Shared/Router",["require","exports","./Configuration","./ResourceCore","./Constants"],function(
n,t,i,r,u){"use strict";function o(){return f||(f=new e),f}function s(){f=undefined}var f,e;t.getInstance=
o;t._reset=s;e=function(){function n(){this._graphHostIndex=0}return n.prototype.getRouteInfo=function(
n){var t={originalUrl:n,url:n,resourceId:null,isRedirected:!1},u,f,e;return!i.getSettings().getUseCsmBypass(
)||!i.getSettings().getUseCsm()||!i.getSettings().getUseCors()?t:(u=document.createElement("a"),u.href=
n,f=r.resourceIdToResourceInfo(u.pathname),f&&(e=this._getBypassUrl(f,u),e&&(t.url=e,t.resourceId=f,
t.isRedirected=!0)),t)},n.prototype._getBypassUrl=function(n,t){var r,i;return n.RemainingPathSegments&&
n.RemainingPathSegments.length>0&&n.ResourceType===u.ResourceType.Component&&n.RemainingPathSegments[
0].toLowerCase()==="aggregate"&&(t.hostname=this._getGraphHost(),i=t.pathname,i.startsWith("/")||(i=
"/"+i),t.pathname="/data/arm"+i,r=t.href),r},n.prototype._getGraphHost=function(){this._graphHosts||
(this._graphHosts=i.getSettings().getGraphHosts());var n=this._graphHosts[this._graphHostIndex++];return this.
_graphHostIndex===this._graphHosts.length&&(this._graphHostIndex=0),n},n}();t.Router=e});define("Shared/ResourceCore",
["require","exports"],function(n,t){function r(n){var r={},f=(n+"").split("/").filter(function(n){return n!==
""}),t,u;return f.length<8?null:(t={parts:f,location:0},!(u=i(t,"subscriptions")))?null:(r.SubscriptionId=
u,!(u=i(t,"resourcegroups")))?null:(r.ResourceGroup=u,!(u=i(t,"providers")))?null:u.toLowerCase()!==
"microsoft.insights"?null:(r.ResourceType=t.parts[t.location].toLowerCase(),!(u=i(t)))?null:(r.Name=
u,t.location<t.parts.length&&(r.RemainingPathSegments=t.parts.slice(t.location).filter(function(n){return n!==
""}),r.RemainingPathSegments.length===0&&delete r.RemainingPathSegments),r)}function u(n){return n&&
!MsPortalFx.Util.isNullOrUndefined(n.SubscriptionId)&&!MsPortalFx.Util.isNullOrUndefined(n.ResourceGroup)&&
!MsPortalFx.Util.isNullOrUndefined(n.ResourceType)&&!MsPortalFx.Util.isNullOrUndefined(n.Name)}function i(
n,t){var r=n.parts[n.location],i;return t&&r.toLowerCase()!==t.toLowerCase()?null:(n.location++,i=n.
parts[n.location],n.location++,i)}t.resourceIdToResourceInfo=r;t.isFullResourceInfo=u});define("Shared/ResourceTokenCache",
["require","exports","./AjaxCore","./Configuration","./ResourceCore","./DateUtils"],function(n,t,i,r,
u,f){function a(){return e||(e=new o),e}function v(){e=undefined}var s="/subscriptions/{SubscriptionId}/resourcegroups/{ResourceGroup}/providers/microsoft.insights/{ResourceType}/{Name}",
o;"use strict";var h=r.getSettings().getResourceTokenTimeoutMinutes(),c=h/2,l=r.getSettings().getResourceTokenTimeSkewMinutes(
),e;t.getInstance=a;t._reset=v;o=function(){function n(){this._cache={};this._pendingRequestCache={}}
return n.prototype.getAuthorizationHeader=function(n){var t=this;return Q.fcall(function(){var r=t._buildKey(
n),i,u;return r?(i=t._cache[r],i&&(u=new Date,i.expires<f.addMinutes(u,l)?(t._cache[r]=undefined,i=null):
u>f.addMinutes(i.expires,c*-1)&&t._getToken(r)),i||t._getToken(r),i?"Bearer "+i.token:null):null})},
n.prototype._buildKey=function(n){if(u.isFullResourceInfo(n))return s.format(n).toLowerCase()},n.prototype.
_getToken=function(n){var i=this,r=this._pendingRequestCache[n],u,t;return r?r:(u=this._buildTokenUrl(
n),t=this._makeTokenRequest(u,null).then(function(t){i._cache[n]={expires:new Date(t.expires),token:
t.token}}).finally(function(){delete i._pendingRequestCache[n]}),this._pendingRequestCache[n]=t,t)},
n.prototype._buildTokenUrl=function(n){var t=r.getSettings();return t.getCsmUrl()+n+"/gettoken?api-version="+
t.getGraphApiVersion()},n.prototype._makeTokenRequest=function(n,t){var r=new Date;return i.getIbizaAuthorizationHeader(
).then(function(u){var f=i.buildHeaders(u);return i.ajax(r,n,f,null,{_containerName:null,_componentId:
t,_queryName:"GetToken"})})},n}();t.ResourceTokenCache=o});define("_generated/ExtensionDefinition",[
"require","exports","ClientResources"],function(n,t,i){var r;return function(n){function u(){if(t.definition)
{var n=t.definition;return t.definition=null,n}throw new Error("Extension definition is no longer available.");
}var t,f,r,e,o,s,h;(function(n){var t={name:"AppInsightsExtension",version:"1.0",hash:"aSgAEC5hyn/VKK6G5Aah21nF7W00wTEjV7EVvp9YoBU=",
schemaVersion:"1.0.0.0",sdkVersion:"5.0.1.244 (release#3cb4076.150306-1340)",partsCatalog:[{commandGroupReference:
{name:"MonitoredApplicationCommands",commands:[{name:"DeleteApplication",bindings:[{property:"id",valuesFrom:
[{referenceType:0,property:"content.assetId"}]}]}]},assetType:"ApplicationInsights",assetIdInputProperty:
"id",name:"MonitoredApplicationsTile",viewModel:"MonitoredApplications$MonitoredApplicationsTileViewModel",
partKind:22,inputs:["id"],bindings:[{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}],details:
[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],
viewStateProperties:null},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"EventSearchPart",
viewModel:"Overview$EventSearchPartViewModel",partKind:22,inputs:["ComponentId","TimeContext"],bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:1,property:"TimeContext"}]}],details:[{blade:"SearchBlade",selectableBindings:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}],additionalInputArguments:
[{property:"InitialFilter",valuesFrom:[{referenceType:0,property:"content.initialFilter"}]},{property:
"InitialTime",valuesFrom:[{referenceType:0,property:"content.timeContext"}]},{property:"InitialQueryText",
valuesFrom:[{referenceType:0,property:"content.queryText"}]},{property:"BIFavoriteData",valuesFrom:[
{referenceType:0,property:"content.favoriteData"}]}]}],initialSize:1,viewStateProperties:null},{assetType:
"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"TopCustomEventsGrid",viewModel:"Overview$AppInsightsCollectionViewModel",
partKind:25,inputs:["ComponentId","TimeContext"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],
initialSize:10,viewStateProperties:null},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",
name:"TopCrashesPart",viewModel:"Overview$AppInsightsCollectionViewModel",partKind:25,inputs:["ComponentId",
"TimeContext"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.deviceTimeContext"}]}],details:
[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]},{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:3,viewStateProperties:
null},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"TopDevicesPart",viewModel:
"Overview$AppInsightsCollectionViewModel",partKind:25,inputs:["ComponentId","TimeContext"],bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.deviceTimeContext"}]}],details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:4,viewStateProperties:null},
{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"TopSessionsByCountryPart",
viewModel:"Overview$AppInsightsCollectionViewModel",partKind:25,inputs:["ComponentId","TimeContext"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:
"TimeContext",valuesFrom:[{referenceType:3,property:"content.deviceTimeContext"}]}],details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:3,viewStateProperties:null},
{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"TopBrowsersPart",viewModel:
"Overview$AppInsightsCollectionViewModel",partKind:25,inputs:["ComponentId","TimeContext"],bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.deviceTimeContext"}]}],details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:4,viewStateProperties:null},
{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"QuickStartBladePart",viewModel:
"Overview$QuickStartBladePartViewModel",partKind:21,inputs:["ComponentId"],bindings:[{property:"ComponentId",
valuesFrom:[{referenceType:1,property:"ComponentId"}]}],details:[{blade:"QuickStartBlade",selectableBindings:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}]}],initialSize:
1,viewStateProperties:null},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:
"PropertiesButtonPart",viewModel:"Overview$PropertiesButtonPartViewModel",partKind:20,inputs:["ComponentId"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}],details:[{
blade:"PropertiesBlade",additionalInputArguments:[{property:"ComponentId",valuesFrom:[{referenceType:
0,property:"content.componentId"}]}]}],initialSize:1,viewStateProperties:null},{assetType:"ApplicationInsights",
assetIdInputProperty:"id",name:"AspNetOverviewPinnedPart",viewModel:"Overview$PinnedOverviewsPartViewModel",
partKind:22,inputs:["id"],bindings:[{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}],details:
[{blade:"AspNetOverview",selectableBindings:[{property:"id",valuesFrom:[{referenceType:0,property:"content.resourceId"}]}]}],
viewStateProperties:null},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"TopExceptionsPart",
viewModel:"Overview$TopExceptionsPartViewModel",partKind:25,inputs:["ComponentId","TimeContext"],bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],details:[{invocationInputArguments:[
{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:3,viewStateProperties:null},
{name:"MetricsExplorerBlank",viewModel:"Overview$MetricsExplorerBlankViewModel",partKind:20,inputs:[
"ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}],
details:[{blade:"MetricsExplorerBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:
0,property:"content.componentId"}]}],additionalInputArguments:[{property:"MetricsExplorerJsonDefinitionId",
valuesFrom:[{referenceType:0,property:"content.MetricsExplorerJsonDefinitionId"}]},{property:"BladeId",
valuesFrom:[{referenceType:0,property:"content.BladeId"}]},{property:"TimeContext",valuesFrom:[{referenceType:
0,property:"content.timeContext"}]},{property:"CurrentFilter",valuesFrom:[{referenceType:0,property:
"content.currentFilter"}]},{property:"FavoriteData",valuesFrom:[{referenceType:0,property:"content.favoriteData"}]}]}],
initialSize:1,viewStateProperties:null},{name:"MetricsExplorerFailuresExceptions",viewModel:"Overview$MetricsExplorerBlankViewModel",
partKind:20,inputs:["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]}],details:[{blade:"MetricsExplorerBlade",selectableBindings:[{property:"ComponentId",
valuesFrom:[{referenceType:0,property:"content.componentId"}]}],additionalInputArguments:[{property:
"MetricsExplorerJsonDefinitionId",valuesFrom:[{referenceType:0,property:"content.MetricsExplorerJsonDefinitionId"}]},
{property:"BladeId",valuesFrom:[{referenceType:0,property:"content.BladeId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:0,property:"content.timeContext"}]},{property:"CurrentFilter",valuesFrom:
[{referenceType:0,property:"content.currentFilter"}]},{property:"FavoriteData",valuesFrom:[{referenceType:
0,property:"content.favoriteData"}]}]}],initialSize:1,viewStateProperties:null},{name:"AspNetServersPart",
viewModel:"Overview$AspNetServersPartViewModel",partKind:20,inputs:["ComponentId","timeContext"],bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:1,property:"timeContext"}]}],details:[{blade:"MetricsExplorerBlade",selectableBindings:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}],additionalInputArguments:
[{property:"MetricsExplorerJsonDefinitionId",valuesFrom:[{referenceType:0,property:"content.MetricsExplorerJsonDefinitionId"}]},
{property:"BladeId",valuesFrom:[{referenceType:0,property:"content.BladeId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:0,property:"content.timeContext"}]},{property:"CurrentFilter",valuesFrom:
[{referenceType:0,property:"content.currentFilter"}]},{property:"FavoriteData",valuesFrom:[{referenceType:
0,property:"content.favoriteData"}]}]}],initialSize:1,viewStateProperties:null},{name:"FailuresExceptionPart",
viewModel:"Overview$FailuresExceptionsPartViewModel",partKind:20,inputs:["ComponentId","timeContext"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:1,property:"timeContext"}]}],details:[{blade:"MetricsExplorerBlade",selectableBindings:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}],additionalInputArguments:
[{property:"MetricsExplorerJsonDefinitionId",valuesFrom:[{referenceType:0,property:"content.MetricsExplorerJsonDefinitionId"}]},
{property:"BladeId",valuesFrom:[{referenceType:0,property:"content.BladeId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:0,property:"content.timeContext"}]},{property:"CurrentFilter",valuesFrom:
[{referenceType:0,property:"content.currentFilter"}]},{property:"FavoriteData",valuesFrom:[{referenceType:
0,property:"content.favoriteData"}]}]}],initialSize:1,viewStateProperties:null},{name:"PerformanceDependenciesPart",
viewModel:"Overview$PerformanceDependenciesPartViewModel",partKind:20,inputs:["ComponentId","timeContext"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:1,property:"timeContext"}]}],details:[{blade:"MetricsExplorerBlade",selectableBindings:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}],additionalInputArguments:
[{property:"MetricsExplorerJsonDefinitionId",valuesFrom:[{referenceType:0,property:"content.MetricsExplorerJsonDefinitionId"}]},
{property:"BladeId",valuesFrom:[{referenceType:0,property:"content.BladeId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:0,property:"content.timeContext"}]},{property:"CurrentFilter",valuesFrom:
[{referenceType:0,property:"content.currentFilter"}]},{property:"FavoriteData",valuesFrom:[{referenceType:
0,property:"content.favoriteData"}]}]}],initialSize:1,viewStateProperties:null},{name:"BrowserPart",
viewModel:"Overview$BrowserPartViewModel",partKind:20,inputs:["ComponentId","timeContext"],bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:1,property:"timeContext"}]}],details:[{blade:"MetricsExplorerBlade",selectableBindings:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}],additionalInputArguments:
[{property:"MetricsExplorerJsonDefinitionId",valuesFrom:[{referenceType:0,property:"content.MetricsExplorerJsonDefinitionId"}]},
{property:"BladeId",valuesFrom:[{referenceType:0,property:"content.BladeId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:0,property:"content.timeContext"}]},{property:"CurrentFilter",valuesFrom:
[{referenceType:0,property:"content.currentFilter"}]},{property:"FavoriteData",valuesFrom:[{referenceType:
0,property:"content.favoriteData"}]}]}],initialSize:1,viewStateProperties:null},{assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",name:"TopFailedRequestsPart",viewModel:"Overview$AppInsightsCollectionViewModel",
partKind:25,inputs:["ComponentId","TimeContext"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],
initialSize:3,viewStateProperties:null},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",
name:"SummaryAssetPart",viewModel:"Overview$SummaryAssetPartViewModel",partKind:22,inputs:["ComponentId",
"TimeContext"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:1,viewStateProperties:
null},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"DauAssetPart",viewModel:
"Overview$DailyActiveUsersAssetPartViewModel",partKind:22,inputs:["ComponentId","TimeContext"],bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],details:[{invocationInputArguments:[
{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:1,viewStateProperties:
null},{name:"TrendlinePart",viewModel:"Overview$TrendlinePartViewModel",partKind:0,inputs:["ComponentId"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]}],htmlTemplate:
"pdc68ce45c61e48400d8bd98a65f8095846",details:[{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"container.selectable.value"}]}]}],initialSize:1,supportedSizes:[1],viewStateProperties:null},
{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"SlowestRequestsPart",viewModel:
"Overview$AppInsightsCollectionViewModel",partKind:25,inputs:["ComponentId","TimeContext"],bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],details:[{invocationInputArguments:[
{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:6,viewStateProperties:null},
{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"FavoritesPart",viewModel:"Overview$FavoritesPartViewModel",
partKind:22,inputs:["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]}],details:[{blade:"FavoritesBlade",selectableBindings:[{property:"ComponentId",valuesFrom:
[{referenceType:0,property:"content.componentId"}]}]}],initialSize:1,viewStateProperties:null},{assetType:
"ApplicationInsights",assetIdInputProperty:"id",name:"DeviceOverviewPinnedPart",viewModel:"Overview$PinnedOverviewsPartViewModel",
partKind:22,inputs:["id"],bindings:[{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}],details:
[{blade:"DeviceOverview",selectableBindings:[{property:"id",valuesFrom:[{referenceType:0,property:"content.resourceId"}]}]}],
viewStateProperties:null},{assetType:"ApplicationInsights",assetIdInputProperty:"id",name:"JavaWebOverviewPinnedPart",
viewModel:"Overview$PinnedOverviewsPartViewModel",partKind:22,inputs:["id"],bindings:[{property:"id",
valuesFrom:[{referenceType:1,property:"id"}]}],details:[{blade:"JavaWebOverview",selectableBindings:
[{property:"id",valuesFrom:[{referenceType:0,property:"content.resourceId"}]}]}],viewStateProperties:
null},{name:"EndUserAnalyticsWebSite",viewModel:"EndUserAnalytics$EndUserAnalyticsWebSiteViewModel",
partKind:26,inputs:["WebsiteId"],bindings:[{property:"WebsiteId",valuesFrom:[{referenceType:1,property:
"WebsiteId"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],
initialSize:4,viewStateProperties:null},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",
name:"EndUserAnalytics",viewModel:"EndUserAnalytics$EndUserAnalyticsViewModel",partKind:26,inputs:["ComponentId"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}],details:[{
invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],
initialSize:4,viewStateProperties:null},{name:"BrowsersWebSite",viewModel:"EndUserAnalytics$BrowsersWebsitesViewModel",
partKind:28,inputs:["WebsiteId"],bindings:[{property:"WebsiteId",valuesFrom:[{referenceType:1,property:
"WebsiteId"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],
initialSize:3,viewStateProperties:null},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",
name:"Browsers",viewModel:"EndUserAnalytics$BrowsersViewModel",partKind:28,inputs:["ComponentId","TimeContext"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:1,property:"TimeContext"}]}],details:[{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:3,viewStateProperties:null},
{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"SlowestRequests",viewModel:
"EndUserAnalytics$SlowestRequestsViewModel",partKind:25,inputs:["ComponentId"],bindings:[{property:"ComponentId",
valuesFrom:[{referenceType:1,property:"ComponentId"}]}],details:[{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:3,viewStateProperties:null},
{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"SummaryPageViewsDetailGrid",
viewModel:"EndUserAnalytics$SummaryPageViewsDetailGridViewModel",partKind:25,inputs:["ComponentId","TimeContext"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:
"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:2,viewStateProperties:null},
{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"PageViews",viewModel:"EndUserAnalytics$PageViewsViewModel",
partKind:26,inputs:["ComponentId","TimeContext"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.ComponentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],
initialSize:5,viewStateProperties:null},{assetType:"EventDetail",assetIdInputProperty:"id",name:"EventDetailsTile",
viewModel:"Search$EventDetailTileViewModel",partKind:22,inputs:["id"],bindings:[{property:"id",valuesFrom:
[{referenceType:1,property:"id"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"container.selectable.value"}]}]}],viewStateProperties:null},{assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",name:"SearchPinnedPart",viewModel:"Search$SearchPinnedPartViewModel",
partKind:22,inputs:["ComponentId","InitialFilter","InitialTime","InitialQueryText","BIFavoriteData"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"CurrentFilter",
valuesFrom:[{referenceType:1,property:"InitialFilter"}]},{property:"CurrentTimeSelection",valuesFrom:
[{referenceType:1,property:"InitialTime"}]},{property:"CurrentQueryText",valuesFrom:[{referenceType:
1,property:"InitialQueryText"}]},{property:"FavoriteData",valuesFrom:[{referenceType:1,property:"BIFavoriteData"}]}],
details:[{blade:"SearchBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:
0,property:"content.componentId"}]}],additionalInputArguments:[{property:"InitialFilter",valuesFrom:
[{referenceType:0,property:"content.initialFilter"}]},{property:"InitialTime",valuesFrom:[{referenceType:
0,property:"content.timeContext"}]},{property:"InitialQueryText",valuesFrom:[{referenceType:0,property:
"content.queryText"}]},{property:"BIFavoriteData",valuesFrom:[{referenceType:0,property:"content.favoriteData"}]}]}],
initialSize:1,viewStateProperties:null},{name:"ExceptionsBarChart",viewModel:"PerformanceMonitoring$ExceptionsBarChartViewModel",
partKind:26,inputs:["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]}],details:[],initialSize:3,viewStateProperties:null},{assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",name:"ContinuousExportButtonPart",viewModel:"ContinuousExport$ContinuousExportButtonViewModel",
partKind:20,inputs:["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:
"content.componentId"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:
"container.selectable.value"}]}]}],initialSize:1,viewStateProperties:null},{assetType:"WebTest",assetIdInputProperty:
"id",name:"WebTestTile",viewModel:"WebTests$WebTestTileViewModel",partKind:22,inputs:["id"],bindings:
[{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}],details:[{blade:"WebTestAssetBlade",selectableBindings:
[{property:"id",valuesFrom:[{referenceType:0,property:"content.assetId"}]}]}],viewStateProperties:null},
{name:"WebTestsWebSite",viewModel:"WebTests$WebTestsWebSitesSetupViewModel",partKind:17,inputs:["WebsiteId",
"Sku"],bindings:[{property:"WebsiteId",valuesFrom:[{referenceType:1,property:"WebsiteId"}]},{property:
"Sku",valuesFrom:[{referenceType:1,property:"Sku"}]}],details:[{blade:"CreateWebTestBlade",additionalInputArguments:
[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.inputs"}]},
{property:"collectorBindingInternals-errors",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.errors"}]},
{property:"stepInput",valuesFrom:[{referenceType:0,property:"content.stepInput"}]}],outputArguments:
[{property:"fromProviderBindingInternals.outputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},
{property:"fromProviderBindingInternals.commit",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},
{property:"stepOutput",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:2,viewStateProperties:
null},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"WebTests",viewModel:
"WebTests$WebTestsSetupViewModel",partKind:17,inputs:["ComponentId","MutateTarget","PartTitle","MutateTargetInputs"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"MutateTarget",
valuesFrom:[{referenceType:1,property:"MutateTarget"}]},{property:"PartTitle",valuesFrom:[{referenceType:
1,property:"PartTitle"}]},{property:"MutateTargetInputs",valuesFrom:[{referenceType:1,property:"MutateTargetInputs"}]}],
details:[{blade:"CreateWebTestBlade",additionalInputArguments:[{property:"collectorBindingInternals-inputs",
valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",
valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:
[{referenceType:0,property:"content.stepInput"}]}],outputArguments:[{property:"fromProviderBindingInternals.outputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},{property:"fromProviderBindingInternals.commit",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:
[{referenceType:1,property:"stepOutput"}]}]}],initialSize:2,viewStateProperties:null},{assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",name:"WebTestsGrid",viewModel:"WebTests$WebTestsViewModel",partKind:
25,inputs:["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}],
details:[{blade:"WebTestsBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:
0,property:"content.componentId"}]}]}],initialSize:2,viewStateProperties:null},{assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",name:"AllWebTestsResponseTime",viewModel:"WebTests$AllWebTestsResponseTimeViewModel",
partKind:22,inputs:["ComponentId","TimeContext"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
1,property:"ComponentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:1,property:"TimeContext"}]}],
details:[{blade:"WebTestsBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:
0,property:"content.componentId"}]}]}],initialSize:1,viewStateProperties:null},{assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",name:"AllWebTestsResponseTimeFull",viewModel:"WebTests$AllWebTestsResponseTimeFullViewModel",
partKind:26,inputs:["ComponentId","TimeContext"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
1,property:"ComponentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:1,property:"TimeContext"}]}],
details:[],initialSize:5,viewStateProperties:null},{assetType:"ApplicationInsights",assetIdInputProperty:
"ComponentId",name:"AllWebTestsResponseTimeFullGallery",viewModel:"WebTests$AllWebTestsResponseTimeFullViewModel",
partKind:26,inputs:["ComponentId","TimeContext"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
1,property:"ComponentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:1,property:"TimeContext"}]}],
details:[{blade:"WebTestsBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:
0,property:"content.componentId"}]}]}],initialSize:5,viewStateProperties:null},{assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",name:"MetricsExplorerOutsideMEBladePart",viewModel:"MetricsExplorer$MetricsExplorerOutsideMEBladeViewModel",
partKind:0,inputs:["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]}],htmlTemplate:"pdcdeb1a85b98ff4d16aba91d75731e268e",details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.activatedGridLinks"}]}]},{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.listViewViewModel.extensionOptions.selectable.selection"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.pairedTimelineVM.extensionOptions.selectable.selection"}]}]},
{selectablePath:"content.openTimeRangeSpot",blade:"TimeSelectorDetailBlade",selectableBindings:[{property:
"timeInput",valuesFrom:[{referenceType:0,property:"content.timeContext"}]}],additionalInputArguments:
[{property:"componentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]},{property:"customTimeRangeValidationFactory",
valuesFrom:[{referenceType:0,property:"content.customTimeRangeValidationFactory"}]},{property:"timeRangeSelectorRangeType",
valuesFrom:[{referenceType:0,property:"content.timeRangeSelectorRangeType"}]},{property:"parentBlade",
valuesFrom:[{referenceType:0,property:"content.parentBladeName"}]}],outputArguments:[{property:"timeContext",
valuesFrom:[{referenceType:1,property:"timeOutput"}]}]},{selectablePath:"content.filtersSummary.openFilterSelectable",
blade:"FilterDetailsBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:0,
property:"content.componentId"}]}],additionalInputArguments:[{property:"filterInput",valuesFrom:[{referenceType:
0,property:"content.selectedFilter"}]},{property:"CurrentTimeSelection",valuesFrom:[{referenceType:0,
property:"content.timeContext"}]},{property:"SearchString",valuesFrom:[{referenceType:0,property:"content.searchPhrase"}]},
{property:"ParentBlade",valuesFrom:[{referenceType:5,property:"constant_MetricsExplorer",constantValue:
"MetricsExplorer"}]}],outputArguments:[{property:"CurrentFilter",valuesFrom:[{referenceType:1,property:
"selectedEventTypes"}]}]}],supportedSizes:[8,5,11],viewStateProperties:["content.metricsExplorerJson",
"content.listViewViewModel.extensionOptions.selectable.selection.selectedItems","content.listViewViewModel.extensionOptions.selectable.selection.activatedItems",
"content.pairedTimelineVM.extensionOptions.selectable.selection.selectedItems","content.pairedTimelineVM.extensionOptions.selectable.selection.activatedItems",
"content.selectedFilter"]},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:
"MetricsExplorerPart",viewModel:"MetricsExplorer$MetricsExplorerViewModel",partKind:0,inputs:["ComponentId"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}],htmlTemplate:
"pdcbd142efdc7d14913b35d6361d170c067",details:[{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"content.activatedGridLinks"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"content.listViewViewModel.extensionOptions.selectable.selection"}]}]},{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.pairedTimelineVM.extensionOptions.selectable.selection"}]}]},
{selectablePath:"content.openTimeRangeSpot",blade:"TimeSelectorDetailBlade",selectableBindings:[{property:
"timeInput",valuesFrom:[{referenceType:0,property:"content.timeContext"}]}],additionalInputArguments:
[{property:"componentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]},{property:"customTimeRangeValidationFactory",
valuesFrom:[{referenceType:0,property:"content.customTimeRangeValidationFactory"}]},{property:"timeRangeSelectorRangeType",
valuesFrom:[{referenceType:0,property:"content.timeRangeSelectorRangeType"}]},{property:"parentBlade",
valuesFrom:[{referenceType:0,property:"content.parentBladeName"}]}],outputArguments:[{property:"timeContext",
valuesFrom:[{referenceType:1,property:"timeOutput"}]}]},{selectablePath:"content.filtersSummary.openFilterSelectable",
blade:"FilterDetailsBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:0,
property:"content.componentId"}]}],additionalInputArguments:[{property:"filterInput",valuesFrom:[{referenceType:
0,property:"content.selectedFilter"}]},{property:"CurrentTimeSelection",valuesFrom:[{referenceType:0,
property:"content.timeContext"}]},{property:"SearchString",valuesFrom:[{referenceType:0,property:"content.searchPhrase"}]},
{property:"ParentBlade",valuesFrom:[{referenceType:5,property:"constant_MetricsExplorer",constantValue:
"MetricsExplorer"}]}],outputArguments:[{property:"CurrentFilter",valuesFrom:[{referenceType:1,property:
"selectedEventTypes"}]}]}],supportedSizes:[8,5,11],viewStateProperties:["content.metricsExplorerJson",
"content.listViewViewModel.extensionOptions.selectable.selection.selectedItems","content.listViewViewModel.extensionOptions.selectable.selection.activatedItems",
"content.pairedTimelineVM.extensionOptions.selectable.selection.selectedItems","content.pairedTimelineVM.extensionOptions.selectable.selection.activatedItems",
"content.selectedFilter"]},{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:
"TelemetryEventsGaugePart",viewModel:"Billing$TelemetryEventsGaugePartViewModel",partKind:27,inputs:
["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}],
details:[{blade:"EventManagementBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:
0,property:"content.ComponentId"}]}]}],initialSize:3,viewStateProperties:null},{name:"OverageOnOffSwitchPart",
viewModel:"Billing$OverageOnOffSwitchPartViewModel",partKind:0,inputs:["ComponentId"],bindings:[{property:
"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}],htmlTemplate:"pdcaa7ad20e1dae4fb98fa80cd54e46ff2b",
details:[],initialSize:5,supportedSizes:[5],viewStateProperties:null},{partGalleryInfo:{title:i.commandAlertRules,
description:null,category:i.summaryCategory,thumbnail:MsPortalFx.Base.Images.StatusBadge.Success(),thumbnailStretch:
0},inputDefinitions:[{name:"ComponentId",type:"InsightsExtension.Shared.DataModels.ComponentId",optional:
!1,isAssetId:!0}],reference:{partTypeName:"AlertsSummaryPart",extension:"Microsoft_Azure_Insights",bindings:
[{property:"targetResourceIds",valuesFrom:[{referenceType:7,property:"content.alertsResourceIds"}]},
{property:"options",valuesFrom:[{referenceType:7,property:"content.alertsOptions"}]}],initialSize:1},
assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"AdaptedAlertsPart",viewModel:
"Overview$AlertsPartAdapterViewModel",partKind:0,initialSize:2,viewStateProperties:null},{partGalleryInfo:
{title:i.insightsTimeline,description:null,category:i.healthCategory,thumbnail:MsPortalFx.Base.Images.
PartGallery.StackedAreaChart(),thumbnailStretch:1},inputDefinitions:[{name:"ComponentId",type:"Key",
optional:!1,isAssetId:!0}],reference:{partTypeName:"MetricsExplorerPart",bindings:[{property:"ComponentId",
valuesFrom:[{referenceType:7,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{
referenceType:7,property:"content.timeContext"}]},{property:"MetricsExplorerJsonDefinitionId",valuesFrom:
[{referenceType:5,property:"constant_InsightsTimelineMetrics",constantValue:"InsightsTimelineMetrics"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]}]},
assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"OverviewTimeLineAdapterPart",
viewModel:"Overview$OverviewTimelineAdapterPartViewModel",partKind:0,initialSize:5,viewStateProperties:
null},{partGalleryInfo:{title:i.diagnosticsTimeline,description:null,category:i.diagnosticsCategory,
thumbnail:MsPortalFx.Base.Images.PartGallery.StackedAreaChart(),thumbnailStretch:1},inputDefinitions:
[{name:"ComponentId",type:"Key",optional:!1,isAssetId:!0}],reference:{partTypeName:"MetricsExplorerPart",
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:7,property:"content.componentId"}]},{property:
"TimeContext",valuesFrom:[{referenceType:7,property:"content.timeContext"}]},{property:"MetricsExplorerJsonDefinitionId",
valuesFrom:[{referenceType:5,property:"constant_DiagnosticsTimelineMetrics",constantValue:"DiagnosticsTimelineMetrics"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]}]},
assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"DiagnosticsTimeLineAdapterPart",
viewModel:"Overview$DiagnosticsTimelineAdapterPartViewModel",partKind:0,initialSize:5,viewStateProperties:
null},{partGalleryInfo:{title:i.performanceTimeLineTitle,description:null,category:i.performanceCategory,
thumbnail:MsPortalFx.Base.Images.PartGallery.StackedAreaChart(),thumbnailStretch:1},inputDefinitions:
[{name:"ComponentId",type:"Key",optional:!1,isAssetId:!0}],reference:{partTypeName:"MetricsExplorerPart",
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:7,property:"content.componentId"}]},{property:
"TimeContext",valuesFrom:[{referenceType:7,property:"content.timeContext"}]},{property:"MetricsExplorerJsonDefinitionId",
valuesFrom:[{referenceType:5,property:"constant_PerformanceTimelineMetrics",constantValue:"PerformanceTimelineMetrics"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]}]},
assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"PerformanceTimeLineAdapterPart",
viewModel:"Overview$PerformanceTimelineAdapterPartViewModel",partKind:0,initialSize:5,viewStateProperties:
null},{partGalleryInfo:{title:i.usageTimelineTitle,description:null,category:i.analyticsCategory,thumbnail:
MsPortalFx.Base.Images.PartGallery.StackedAreaChart(),thumbnailStretch:1},inputDefinitions:[{name:"ComponentId",
type:"Key",optional:!1,isAssetId:!0}],reference:{partTypeName:"MetricsExplorerPart",bindings:[{property:
"ComponentId",valuesFrom:[{referenceType:7,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:7,property:"content.timeContext"}]},{property:"MetricsExplorerJsonDefinitionId",
valuesFrom:[{referenceType:5,property:"constant_Usage_L0_UsageAnalyticsMetrics",constantValue:"Usage_L0_UsageAnalyticsMetrics"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]}]},
assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"UsageTimeLineAdapterPart",viewModel:
"Overview$UsageTimelineAdapterPartViewModel",partKind:0,initialSize:5,viewStateProperties:null},{partGalleryInfo:
{title:i.topExceptionsTitle,description:null,category:i.diagnosticsCategory,thumbnail:MsPortalFx.Base.
Images.PartGallery.GridWithMoreData(),thumbnailStretch:1},inputDefinitions:[{name:"ComponentId",type:
"Key",optional:!1,isAssetId:!0}],reference:{partTypeName:"TopExceptionsPart",bindings:[{property:"ComponentId",
valuesFrom:[{referenceType:7,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{
referenceType:7,property:"content.timeContext"}]}]},assetType:"ApplicationInsights",assetIdInputProperty:
"ComponentId",name:"TopExceptionsAdapterPart",viewModel:"Overview$TopExceptionsAdapterPartViewModel",
partKind:0,initialSize:3,viewStateProperties:null},{partGalleryInfo:{title:i.slowestRequestsTitle,description:
null,category:i.performanceCategory,thumbnail:MsPortalFx.Base.Images.PartGallery.GridWithMoreData(),
thumbnailStretch:1},inputDefinitions:[{name:"ComponentId",type:"Key",optional:!1,isAssetId:!0}],reference:
{partTypeName:"SlowestRequests",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:7,property:
"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:7,property:"content.timeContext"}]}]},
assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"SlowestRequestsAdapterPart",
viewModel:"Overview$SlowestRequestsAdapterPartViewModel",partKind:0,initialSize:3,viewStateProperties:
null},{partGalleryInfo:{title:i.topFailedRequestsTitle,description:null,category:i.diagnosticsCategory,
thumbnail:MsPortalFx.Base.Images.PartGallery.GridWithMoreData(),thumbnailStretch:1},inputDefinitions:
[{name:"ComponentId",type:"Key",optional:!1,isAssetId:!0}],reference:{partTypeName:"TopFailedRequestsPart",
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:7,property:"content.componentId"}]},{property:
"TimeContext",valuesFrom:[{referenceType:7,property:"content.timeContext"}]},{property:"ChartJsonDefinitionId",
valuesFrom:[{referenceType:5,property:"constant_TopFailedRequestsGridMetrics",constantValue:"TopFailedRequestsGridMetrics"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]}]},
assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"TopFailedRequestsAdapterPart",
viewModel:"Overview$TopFailedRequestsAdapterPartViewModel",partKind:0,initialSize:3,viewStateProperties:
null},{partGalleryInfo:{title:i.quickStartTitle,description:null,category:i.summaryCategory,thumbnail:
MsPortalFx.Base.Images.AzureQuickstart(3),thumbnailStretch:0},inputDefinitions:[{name:"ComponentId",
type:"Key",optional:!1,isAssetId:!0}],reference:{partTypeName:"QuickStartBladePart",bindings:[{property:
"ComponentId",valuesFrom:[{referenceType:7,property:"content.componentId"}]}]},assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",name:"QuickStartBladePartAdapterPart",viewModel:"Overview$QuickStartAdapterPartViewModel",
partKind:0,initialSize:3,viewStateProperties:null},{partGalleryInfo:{title:i.topPageViewsTitle,description:
null,category:i.analyticsCategory,thumbnail:MsPortalFx.Base.Images.PartGallery.GridWithMoreData(),thumbnailStretch:
1},inputDefinitions:[{name:"ComponentId",type:"Key",optional:!1,isAssetId:!0}],reference:{partTypeName:
"PageViews",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:7,property:"content.componentId"}]},
{property:"TimeContext",valuesFrom:[{referenceType:7,property:"content.timeContext"}]}]},assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",name:"PageViewsAdapterPart",viewModel:"Overview$PageViewsAdapterPartViewModel",
partKind:0,initialSize:5,viewStateProperties:null},{partGalleryInfo:{title:i.allWebTestsGalleryTitle,
description:null,category:i.analyticsCategory,thumbnail:MsPortalFx.Base.Images.PartGallery.GridWithMoreData(
),thumbnailStretch:1},inputDefinitions:[{name:"ComponentId",type:"Key",optional:!1,isAssetId:!0}],reference:
{partTypeName:"AllWebTestsResponseTimeFullGallery",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
7,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:7,property:"content.timeContext"}]}]},
assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"AllWebTestsResponseTimeFullGalleryAdapterPart",
viewModel:"Overview$AllWebTestsResponseTimeFullGalleryAdapterPartViewModel",partKind:0,initialSize:5,
viewStateProperties:null},{partGalleryInfo:{title:i.tagsTitle,description:null,category:i.summaryCategory,
thumbnail:MsPortalFx.Base.Images.Tag(),thumbnailStretch:0},inputDefinitions:[{name:"ComponentId",type:
"Key",optional:!1,isAssetId:!0}],reference:{partTypeName:"ResourceTagsPart",extension:"HubsExtension",
bindings:[{property:"resourceId",valuesFrom:[{referenceType:7,property:"content.resourceId"}]}],initialSize:
1},assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"TagsPart",viewModel:"Overview$TagsAdapterPartViewModel",
partKind:0,initialSize:0,viewStateProperties:null},{partGalleryInfo:{title:i.overviewPropertiesButtonTitle,
description:null,category:i.summaryCategory,thumbnail:MsPortalFx.Base.Images.Properties(3),thumbnailStretch:
0},inputDefinitions:[{name:"ComponentId",type:"Key",optional:!1,isAssetId:!0}],reference:{partTypeName:
"PropertiesButtonPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:7,property:"content.componentId"}]}]},
assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"PropertiesAdapterPart",viewModel:
"Overview$PropertiesAdapterPartViewModel",partKind:0,initialSize:0,viewStateProperties:null},{partGalleryInfo:
{title:i.customEventsTitle,description:null,category:i.analyticsCategory,thumbnail:MsPortalFx.Base.Images.
PartGallery.GridWithMoreData(),thumbnailStretch:1},inputDefinitions:[{name:"ComponentId",type:"Key",
optional:!1,isAssetId:!0}],reference:{partTypeName:"TopCustomEventsGrid",bindings:[{property:"ComponentId",
valuesFrom:[{referenceType:7,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{
referenceType:7,property:"content.timeContext"}]},{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:
5,property:"constant_CustomEventsGridMetrics",constantValue:"CustomEventsGridMetrics"}]},{property:"BladeId",
valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]}]},assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",name:"TopCustomEventsGridAdaptedPart",viewModel:"Overview$CustomEventsAdapterPartViewModel",
partKind:0,initialSize:10,viewStateProperties:null},{partGalleryInfo:{title:i.topCrashesAdaptedPartTitle,
description:null,category:i.diagnosticsCategory,thumbnail:MsPortalFx.Base.Images.PartGallery.GridWithMoreData(
),thumbnailStretch:1},inputDefinitions:[{name:"ComponentId",type:"Key",optional:!1,isAssetId:!0}],reference:
{partTypeName:"TopCrashesPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:7,property:
"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:7,property:"content.timeContext"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_TopCrashesGridMetric",
constantValue:"TopCrashesGridMetric"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",
constantValue:"Overview"}]}]},assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:
"TopCrashesAdaptedPart",viewModel:"Overview$TopCrashesAdapterPartViewModel",partKind:0,initialSize:3,
viewStateProperties:null},{partGalleryInfo:{title:i.resourceMapAdaptedPartTitle,description:null,category:
i.summaryCategory,thumbnail:MsPortalFx.Base.Images.PartGallery.ResourceMap(),thumbnailStretch:1},inputDefinitions:
[{name:"ComponentId",type:"Key",optional:!1,isAssetId:!0}],reference:{partTypeName:"ResourceMapPart",
extension:"HubsExtension",bindings:[{property:"assetId",valuesFrom:[{referenceType:7,property:"content.componentId"}]},
{property:"assetOwner",valuesFrom:[{referenceType:5,property:"constant_AppInsightsExtension",constantValue:
"AppInsightsExtension"}]},{property:"assetType",valuesFrom:[{referenceType:5,property:"constant_ApplicationInsights",
constantValue:"ApplicationInsights"}]}],initialSize:3},assetType:"ApplicationInsights",assetIdInputProperty:
"ComponentId",name:"ApplicationInsighsResourceMapAdaptedPartPart",viewModel:"Overview$ResourceMapAdapterPartViewModel",
partKind:0,initialSize:3,viewStateProperties:null},{partGalleryInfo:{title:i.topEventsAdaptedPartTitle,
description:null,category:i.summaryCategory,thumbnail:MsPortalFx.Base.Images.PartGallery.SingleBarChartLarge(
),thumbnailStretch:1},inputDefinitions:[{name:"ComponentId",type:"Key",optional:!1,isAssetId:!0}],reference:
{partTypeName:"EventsSummaryPart",extension:"Microsoft_Azure_Insights",bindings:[{property:"resourceId",
valuesFrom:[{referenceType:7,property:"content.resourceId"}]},{property:"options",valuesFrom:[{referenceType:
7,property:"content.eventsOptions"}]}],initialSize:2},assetType:"ApplicationInsights",assetIdInputProperty:
"ComponentId",name:"ApplicationInsighsEventsSummaryPartAdaptedPartPart",viewModel:"Overview$EventsSummaryAdapterPartViewModel",
partKind:0,initialSize:2,viewStateProperties:null}],blades:[{inputs:["ComponentId"],templateKeyInputs:
["ComponentId"],commandGroup:"FavoritesBladeCommands",bindings:[{property:"ComponentId",valuesFrom:[
{referenceType:3,property:"content.ComponentId"}]}],width:0,locked:!0,assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",pinnedPart:"FavoritesPart",pinnable:!0,name:"FavoritesBlade",lenses:
[{title:null,name:"FavoritesLens",partInstances:[{name:"FavoritesListPart",inline:{name:null,viewModel:
"Overview$FavoritesListViewModel",partKind:0,inputs:["ComponentId","refreshList"],bindings:[{property:
"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"refreshList",valuesFrom:
[{referenceType:4,property:"content.refreshFavoritesList",bladeCommand:"FavoritesRefreshCommand"}],optional:
!0}],htmlTemplate:"pdc7cff3f5cd4b642569fce6790966fe77d",details:[{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.favoritesGrid.selectableData"}]}],outputArguments:[{property:"favoriteObj",
valuesFrom:[{referenceType:1,property:"BfavoriteData"}]}]}],initialSize:8,supportedSizes:[8],viewStateProperties:
null}}]}],viewModelName:"Overview$FavoritesBladeViewModel",viewModelInputs:[{property:"ComponentId",
valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{inputs:["ComponentId"],templateKeyInputs:[
"ComponentId"],locked:!0,pinnable:!1,style:5,name:"QuickStartBlade",lenses:[{title:null,name:"QuickStartLens",
partInstances:[{name:"QuickStartDetailPart",inline:{name:null,viewModel:"Overview$QuickStartBladeInfoListViewModel",
partKind:0,inputs:["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]}],htmlTemplate:"pdc9556ae659aeb4943964fe46d3883b606",details:[{selectablePath:"content.configurationBladeSelectable",
blade:"ConfigurationBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:0,
property:"content.ComponentId"}]}]},{selectablePath:"content.javaWebConfigurationBladeSelectable",blade:
"JavaWebConfigurationBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:0,
property:"content.ComponentId"}]}]}],initialSize:7,supportedSizes:[7],viewStateProperties:null}}]}],
viewModelName:"Overview$QuickStartBladeViewModel",viewModelInputs:[{property:"ComponentId",valuesFrom:
[{referenceType:1,property:"ComponentId"}]}]},{inputs:["ComponentId"],templateKeyInputs:["ComponentId"],
width:1,locked:!0,name:"EventsConfigurationBlade",lenses:[{title:null,name:"ConfigurationBladeLens",
partInstances:[{name:"ConfigurationPart",inline:{name:null,viewModel:"Overview$EventsConfigurationViewModel",
partKind:0,inputs:["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]}],htmlTemplate:"pdc5e1442d415bb46a2a8173f6b3fbee73b",details:[],initialSize:8,supportedSizes:
[8],viewStateProperties:null}}]}],viewModelName:"Overview$EventsConfigurationBladeViewModel"},{inputs:
["ComponentId"],width:0,locked:!0,style:6,name:"PropertiesBlade",lenses:[{title:null,name:"PropertiesBlade_lens1",
partInstances:[{name:"PropertiesPart",inline:{name:null,viewModel:"Overview$PropertiesFormViewModel",
partKind:24,inputs:["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selection"}]}]}],
initialSize:8,viewStateProperties:null}}]}],viewModelName:"Overview$PropertiesBladeViewModel",viewModelInputs:
[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{inputs:["id"],templateKeyInputs:
["id"],commandGroup:"AspNetOverviewCommands",bindings:[{property:"id",valuesFrom:[{referenceType:3,property:
"content.componentId"}]}],width:2,assetType:"ApplicationInsights",assetIdInputProperty:"id",pinnedPart:
"AspNetOverviewPinnedPart",pinnable:!0,name:"AspNetOverview",lenses:[{title:i.overviewApplicationHealthTitle,
name:"ApplicationHealthLens",partInstances:[{name:"InsightsTimeline_MetricsExplorerPartReferenceOveriew",
reference:{partTypeName:"MetricsExplorerOutsideMEBladePart",bindings:[{property:"ComponentId",valuesFrom:
[{referenceType:3,property:"content.componentId"}]},{property:"MetricsExplorerJsonDefinitionId",valuesFrom:
[{referenceType:5,property:"constant_InsightsTimelineMetrics",constantValue:"InsightsTimelineMetrics"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],initialSize:
8}}]},{title:null,name:"ApplicationHealthButtonsLens",partInstances:[{name:"AllWebTestsPart",reference:
{partTypeName:"AllWebTestsResponseTime",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
initialSize:1}},{name:"EventSearchPartReference",reference:{partTypeName:"EventSearchPart",bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],initialSize:0}},{name:"MetricsExplorerBlank",
reference:{partTypeName:"MetricsExplorerBlank",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]}],initialSize:0}},{name:"FavoritesPartReference",reference:{partTypeName:
"FavoritesPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]}],
initialSize:0}},{name:"FailuresExceptionsPartReference",reference:{partTypeName:"FailuresExceptionPart",
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:
"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],initialSize:0}},{name:
"PerformanceDependenciesPartReference",reference:{partTypeName:"PerformanceDependenciesPart",bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],initialSize:0}},{name:"AspNetServersPartReference",
reference:{partTypeName:"AspNetServersPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
initialSize:0}},{name:"BrowserPartReference",reference:{partTypeName:"BrowserPart",bindings:[{property:
"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],initialSize:0}}]},{title:i.usageAnalyticsOverview,
name:"UsageAnalyticsOverview",partInstances:[{name:"UsageAnalytics_MetricsExplorerPartReference",reference:
{partTypeName:"MetricsExplorerOutsideMEBladePart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"MetricsExplorerJsonDefinitionId",valuesFrom:[{referenceType:
5,property:"constant_Usage_L0_UsageAnalyticsMetrics",constantValue:"Usage_L0_UsageAnalyticsMetrics"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastFourWeeks"}]}],
initialSize:8}}]},{title:null,name:"UsageAnalyticsDetails",partInstances:[{name:"SummaryCustomEventsDetailGridPartReference",
reference:{partTypeName:"TopCustomEventsGrid",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastFourWeeks"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_CustomEventsGridMetrics",
constantValue:"CustomEventsGridMetrics"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:
"constant_Overview",constantValue:"Overview"}]}],initialSize:10}},{name:"TopBrowsersPartReference",reference:
{partTypeName:"TopBrowsersPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:
"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastFourWeeks"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_TopBrowsersGridMetric",
constantValue:"TopBrowsersGridMetric"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",
constantValue:"Overview"}]}],initialSize:10}},{name:"TopSessionsByCountryReference",reference:{partTypeName:
"TopSessionsByCountryPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastFourWeeks"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_TopSessionByCountryGridMetric",
constantValue:"TopSessionByCountryGridMetric"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:
"constant_Overview",constantValue:"Overview"}]}],initialSize:3}},{name:"SessionDurationSummaryPartReference",
reference:{partTypeName:"SummaryAssetPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastFourWeeks"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_SessionsEngagementMetricForServiceApp",
constantValue:"SessionsEngagementMetricForServiceApp"}]},{property:"BladeId",valuesFrom:[{referenceType:
5,property:"constant_Overview",constantValue:"Overview"}]}],initialSize:1}},{name:"DauSummaryPartReference",
reference:{partTypeName:"DauAssetPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastFourWeeks"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_DauMetricForServiceApp",
constantValue:"DauMetricForServiceApp"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:
"constant_Overview",constantValue:"Overview"}]}],initialSize:1}}]},{title:i.operationsLensTitle,name:
"Operations",partInstances:[{name:"ContinuousExportButtonPartReference",reference:{partTypeName:"ContinuousExportButtonPart",
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]}],initialSize:
2}},{name:"Events",reference:{partTypeName:"EventsSummaryPart",extension:"Microsoft_Azure_Insights",
bindings:[{property:"resourceId",valuesFrom:[{referenceType:3,property:"content.resourceId"}]},{property:
"options",valuesFrom:[{referenceType:3,property:"content.eventsOptions"}]}],initialSize:2}},{name:"AssetPart",
reference:{partTypeName:"AdaptedAlertsPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]}],initialSize:2}}]},{title:null,isSummary:!0,name:"AspNetResourceSummary",
partInstances:[{name:"ResourceSummaryPart",inline:{partState:{inputIdentityProperties:["content.collapsed"]},
name:null,viewModel:"Overview$ComponentResourceSummaryViewModel",partKind:30,inputs:["resourceId","ParentBlade"],
bindings:[{property:"resourceId",valuesFrom:[{referenceType:1,property:"id"}]},{property:"ParentBlade",
valuesFrom:[{referenceType:3,property:"content.BladeName"}]}],details:[{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.selection"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"content.resourceGroupSelectable"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"content.tagsSelectable"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:
"content.accessSelectable"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.settingsSelectable"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.quickStartSelectable"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.keysSelectable"}]}]}],initialSize:
8,viewStateProperties:null}}]}],viewModelName:"Overview$AspNetOverviewBladeViewModel",viewModelInputs:
[{property:"timeRangeCommandInputs",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection",
bladeCommand:"TimeRangeCommand"}],optional:!0},{property:"id",valuesFrom:[{referenceType:1,property:
"id"}]}]},{inputs:["id"],templateKeyInputs:["id"],commandGroup:"DeviceOverviewCommands",bindings:[{property:
"id",valuesFrom:[{referenceType:3,property:"content.componentId"}]}],assetType:"ApplicationInsights",
assetIdInputProperty:"id",pinnedPart:"DeviceOverviewPinnedPart",pinnable:!0,name:"DeviceOverview",lenses:
[{title:i.applicationHealthTitle,name:"ApplicationHealthLens",partInstances:[{name:"InsightsTimeline_MetricsExplorerPartReference",
reference:{partTypeName:"MetricsExplorerPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"MetricsExplorerJsonDefinitionId",valuesFrom:[{referenceType:
5,property:"constant_Usage_L0_DeviceApplicationHealthMetrics",constantValue:"Usage_L0_DeviceApplicationHealthMetrics"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.deviceTimeContext"}]}],initialSize:
5}},{name:"MetricsExplorerBlank",reference:{partTypeName:"MetricsExplorerBlank",bindings:[{property:
"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]}],initialSize:0}},{name:
"FavoritesPartReference",reference:{partTypeName:"FavoritesPart",bindings:[{property:"ComponentId",valuesFrom:
[{referenceType:3,property:"content.componentId"}]}],initialSize:0}},{name:"SessionsTodayTrendlinePartReference",
reference:{partTypeName:"TrendlinePart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastOneDay"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_SessionsTrendlineMetricForDeviceApp",
constantValue:"SessionsTrendlineMetricForDeviceApp"}]}],initialSize:1}},{name:"CrashesTodayTrendlinePartReference",
reference:{partTypeName:"TrendlinePart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastOneDay"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_CrashesTrendlineMetricForDeviceApp",
constantValue:"CrashesTrendlineMetricForDeviceApp"}]}],initialSize:1}}]},{title:i.deviceUsageTitle,name:
"DeviceUsageLens",partInstances:[{name:"SummaryCustomEventsDetailGridPartReference",reference:{partTypeName:
"TopCustomEventsGrid",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.deviceTimeContext"}]},{property:
"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_DeviceCustomEventsGridMetrics",
constantValue:"DeviceCustomEventsGridMetrics"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:
"constant_Overview",constantValue:"Overview"}]}],initialSize:10}},{name:"TopDevicesPartReference",reference:
{partTypeName:"TopDevicesPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:
"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.deviceTimeContext"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_TopDevicesGridMetric",
constantValue:"TopDevicesGridMetric"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",
constantValue:"Overview"}]}],initialSize:4}},{name:"TopSessionsByCountryReference",reference:{partTypeName:
"TopSessionsByCountryPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.deviceTimeContext"}]},{property:
"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_TopSessionByCountryGridMetric",
constantValue:"TopSessionByCountryGridMetric"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:
"constant_Overview",constantValue:"Overview"}]}],initialSize:3}},{name:"SessionDurationSummaryPartReference",
reference:{partTypeName:"SummaryAssetPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.deviceTimeContext"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_SessionsEngagementMetricForDeviceApp",
constantValue:"SessionsEngagementMetricForDeviceApp"}]},{property:"BladeId",valuesFrom:[{referenceType:
5,property:"constant_Overview",constantValue:"Overview"}]}],initialSize:1}}]},{title:i.overviewDiagnosticsTitle,
name:"DiagnosticsLens",partInstances:[{name:"TopCrashesPartReference",reference:{partTypeName:"TopCrashesPart",
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:
"TimeContext",valuesFrom:[{referenceType:3,property:"content.deviceTimeContext"}]},{property:"ChartJsonDefinitionId",
valuesFrom:[{referenceType:5,property:"constant_TopCrashesGridMetric",constantValue:"TopCrashesGridMetric"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]}],
initialSize:3}},{name:"EventSearchPartReference",reference:{partTypeName:"EventSearchPart",bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.deviceTimeContext"}]}],initialSize:2}}]},{title:i.operationsLensTitle,
name:"Operations",partInstances:[{name:"ContinuousExportButtonPartReference",reference:{partTypeName:
"ContinuousExportButtonPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:
"content.componentId"}]}],initialSize:2}},{name:"Events",reference:{partTypeName:"EventsSummaryPart",
extension:"Microsoft_Azure_Insights",bindings:[{property:"resourceId",valuesFrom:[{referenceType:3,property:
"content.resourceId"}]},{property:"options",valuesFrom:[{referenceType:3,property:"content.eventsOptions"}]}],
initialSize:2}},{name:"AssetPart",reference:{partTypeName:"AdaptedAlertsPart",bindings:[{property:"ComponentId",
valuesFrom:[{referenceType:3,property:"content.componentId"}]}],initialSize:2}}]},{title:null,isSummary:
!0,name:"DeviceResourceSummary",partInstances:[{name:"ResourceSummaryPart",inline:{partState:{inputIdentityProperties:
["content.collapsed"]},name:null,viewModel:"Overview$ComponentResourceSummaryViewModel",partKind:30,
inputs:["resourceId","ParentBlade"],bindings:[{property:"resourceId",valuesFrom:[{referenceType:1,property:
"id"}]},{property:"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]}],details:
[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selection"}]}]},{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.resourceGroupSelectable"}]}]},{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.tagsSelectable"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.accessSelectable"}]}]},{invocationInputArguments:[{valuesFrom:[{
referenceType:0,property:"content.settingsSelectable"}]}]},{invocationInputArguments:[{valuesFrom:[{
referenceType:0,property:"content.quickStartSelectable"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.keysSelectable"}]}]}],initialSize:8,viewStateProperties:null}}]}],
viewModelName:"Overview$DeviceOverviewBladeViewModel",viewModelInputs:[{property:"deviceTimeContext",
valuesFrom:[{referenceType:4,property:"content.currentTimeSelection",bladeCommand:"TimeRangeCommand"}],
optional:!0},{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["id"],templateKeyInputs:
["id"],commandGroup:"JavaWebOverviewCommands",bindings:[{property:"id",valuesFrom:[{referenceType:3,
property:"content.componentId"}]}],width:2,assetType:"ApplicationInsights",assetIdInputProperty:"id",
pinnedPart:"JavaWebOverviewPinnedPart",pinnable:!0,name:"JavaWebOverview",lenses:[{title:i.overviewApplicationHealthTitle,
name:"ApplicationHealthLens",partInstances:[{name:"InsightsTimeline_MetricsExplorerPartReferenceOveriew",
reference:{partTypeName:"MetricsExplorerPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"MetricsExplorerJsonDefinitionId",valuesFrom:[{referenceType:
5,property:"constant_InsightsTimelineMetrics",constantValue:"InsightsTimelineMetrics"}]},{property:"BladeId",
valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],initialSize:8}}]},{title:null,name:"ApplicationHealthButtonsLens",
partInstances:[{name:"AllWebTestsPart",reference:{partTypeName:"AllWebTestsResponseTime",bindings:[{
property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],initialSize:1}},{name:"MetricsExplorerBlank",
reference:{partTypeName:"MetricsExplorerBlank",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]}],initialSize:0}},{name:"EventSearchPartReference",reference:{partTypeName:
"EventSearchPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],initialSize:
0}},{name:"FavoritesPartReference",reference:{partTypeName:"FavoritesPart",bindings:[{property:"ComponentId",
valuesFrom:[{referenceType:3,property:"content.componentId"}]}],initialSize:0}},{name:"FailuresExceptionsPartReference",
reference:{partTypeName:"FailuresExceptionPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
initialSize:0}},{name:"PerformanceDependenciesPartReference",reference:{partTypeName:"PerformanceDependenciesPart",
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:
"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],initialSize:0}},{name:
"BrowserPartReference",reference:{partTypeName:"BrowserPart",bindings:[{property:"ComponentId",valuesFrom:
[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:
3,property:"content.timeContext"}]}],initialSize:1}}]},{title:i.usageAnalyticsOverview,name:"UsageAnalyticsOverview",
partInstances:[{name:"UsageAnalytics_MetricsExplorerPartReference",reference:{partTypeName:"MetricsExplorerPart",
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:
"MetricsExplorerJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_Usage_L0_UsageAnalyticsMetrics",
constantValue:"Usage_L0_UsageAnalyticsMetrics"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:
"constant_Overview",constantValue:"Overview"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,
property:"content.timeContextLastFourWeeks"}]}],initialSize:8}}]},{title:null,name:"UsageAnalyticsDetails",
partInstances:[{name:"SummaryCustomEventsDetailGridPartReference",reference:{partTypeName:"TopCustomEventsGrid",
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:
"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastFourWeeks"}]},{property:
"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_CustomEventsGridMetrics",constantValue:
"CustomEventsGridMetrics"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",
constantValue:"Overview"}]}],initialSize:10}},{name:"TopBrowsersPartReference",reference:{partTypeName:
"TopBrowsersPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastFourWeeks"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_TopBrowsersGridMetric",
constantValue:"TopBrowsersGridMetric"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",
constantValue:"Overview"}]}],initialSize:4}},{name:"TopSessionsByCountryReference",reference:{partTypeName:
"TopSessionsByCountryPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastFourWeeks"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_TopSessionByCountryGridMetric",
constantValue:"TopSessionByCountryGridMetric"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:
"constant_Overview",constantValue:"Overview"}]}],initialSize:3}},{name:"SessionDurationSummaryPartReference",
reference:{partTypeName:"SummaryAssetPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContextLastFourWeeks"}]},
{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_SessionsEngagementMetricForServiceApp",
constantValue:"SessionsEngagementMetricForServiceApp"}]},{property:"BladeId",valuesFrom:[{referenceType:
5,property:"constant_Overview",constantValue:"Overview"}]}],initialSize:1}}]},{title:i.overviewDiagnosticsTitle,
name:"DiagnosticsLens",partInstances:[{name:"TopFailedRequestsPartReference",reference:{partTypeName:
"TopFailedRequestsPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]},{property:"ChartJsonDefinitionId",
valuesFrom:[{referenceType:5,property:"constant_TopFailedRequestsGridMetrics",constantValue:"TopFailedRequestsGridMetrics"}]},
{property:"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]}],
initialSize:3}},{name:"SlowestRequestsPartReference",reference:{partTypeName:"SlowestRequestsPart",bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]},{property:"BladeId",valuesFrom:[{referenceType:
5,property:"constant_Overview",constantValue:"Overview"}]},{property:"ChartJsonDefinitionId",valuesFrom:
[{referenceType:5,property:"constant_SlowestRequestsGridMetrics",constantValue:"SlowestRequestsGridMetrics"}]}]}},
{name:"TopExceptionsPartReference",reference:{partTypeName:"TopExceptionsPart",bindings:[{property:"ComponentId",
valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"TimeContext",valuesFrom:[{
referenceType:3,property:"content.timeContext"}]},{property:"ChartJsonDefinitionId",valuesFrom:[{referenceType:
5,property:"constant_TopExceptionsGridMetrics",constantValue:"TopExceptionsGridMetrics"}]},{property:
"BladeId",valuesFrom:[{referenceType:5,property:"constant_Overview",constantValue:"Overview"}]}],initialSize:
3}}]},{title:i.operationsLensTitle,name:"Operations",partInstances:[{name:"ContinuousExportButtonPartReference",
reference:{partTypeName:"ContinuousExportButtonPart",bindings:[{property:"ComponentId",valuesFrom:[{
referenceType:3,property:"content.componentId"}]}],initialSize:3}},{name:"Events",reference:{partTypeName:
"EventsSummaryPart",extension:"Microsoft_Azure_Insights",bindings:[{property:"resourceId",valuesFrom:
[{referenceType:3,property:"content.resourceId"}]},{property:"options",valuesFrom:[{referenceType:3,
property:"content.eventsOptions"}]}],initialSize:2}},{name:"AssetPart",reference:{partTypeName:"AdaptedAlertsPart",
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]}],initialSize:
2}}]},{title:null,isSummary:!0,name:"JavaWebResourceSummary",partInstances:[{name:"ResourceSummaryPart",
inline:{partState:{inputIdentityProperties:["content.collapsed"]},name:null,viewModel:"Overview$ComponentResourceSummaryViewModel",
partKind:30,inputs:["resourceId","ParentBlade"],bindings:[{property:"resourceId",valuesFrom:[{referenceType:
1,property:"id"}]},{property:"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]}],
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selection"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.resourceGroupSelectable"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.tagsSelectable"}]}]},{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.accessSelectable"}]}]},{invocationInputArguments:[{
valuesFrom:[{referenceType:0,property:"content.settingsSelectable"}]}]},{invocationInputArguments:[{
valuesFrom:[{referenceType:0,property:"content.quickStartSelectable"}]}]},{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.keysSelectable"}]}]}],initialSize:8,viewStateProperties:
null}}]}],viewModelName:"Overview$JavaWebOverviewBladeViewModel",viewModelInputs:[{property:"timeContext",
valuesFrom:[{referenceType:4,property:"content.currentTimeSelection",bladeCommand:"TimeRangeCommand"}],
optional:!0},{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["ComponentId"],
templateKeyInputs:["ComponentId"],width:1,locked:!0,name:"JavaWebConfigurationBlade",lenses:[{title:
null,name:"JavaWebLogConfigurationLens",partInstances:[{name:"JavaWebLogConfigurationDescription",inline:
{name:null,viewModel:"Overview$JavaWebLogConfigurationDescriptionPartViewModel",partKind:0,inputs:[],
bindings:[],htmlTemplate:"pdc90acdacca0434a2d9876ba2d880be947",details:[],initialSize:7,supportedSizes:
[7],viewStateProperties:null}},{name:"JavaWebLogConfigurationPartOne",inline:{name:null,viewModel:"Overview$JavaWebLogConfigurationPartOneViewModel",
partKind:23,inputs:[],bindings:[],details:[],viewStateProperties:null}},{name:"SelectLogFormPart",inline:
{name:null,viewModel:"Overview$JavaWebGetCodeConfigurationViewModel",partKind:0,inputs:["ComponentId"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}],htmlTemplate:
"pdcb7e71e67f639452f956aa6453241c8b4",details:[],initialSize:7,supportedSizes:[7],viewStateProperties:
null}},{name:"JavaWebLogPartTwoConfiguration",inline:{name:null,viewModel:"Overview$JavaWebLogConfigurationPartTwoViewModel",
partKind:23,inputs:[],bindings:[],details:[],viewStateProperties:null}}]}],viewModelName:"Overview$JavaWebConfigurationBladeViewModel",
viewModelInputs:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{inputs:
["ComponentId"],templateKeyInputs:["ComponentId"],assetType:"ApplicationInsights",assetIdInputProperty:
"ComponentId",name:"GettingStartedCustomEvents",lenses:[],viewModelName:"Overview$GettingStartedCustomEventsBladeViewModel",
viewModelInputs:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{width:
1,locked:!0,style:4,name:"DevicesComingSoonBlade",lenses:[{title:null,name:"DevicesComingSoonBlade_lens1",
partInstances:[{name:"NoticePart",inline:{name:null,viewModel:"Overview$DevicesNoticePartViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc4a31c01b7ab042aaa9c721ef85b1f379",details:[],initialSize:
9,supportedSizes:[9],viewStateProperties:null}}]}],viewModelName:"Overview$DevicesNoticeBladeViewModel"},
{width:0,locked:!0,pinnable:!1,actionBar:{name:"",actionBarKind:1,viewModel:"Overview$AttachActionBarViewModel",
bindings:[{property:"valid",valuesFrom:[{referenceType:0,property:"content.selectionMade",part:"AttachGridPart"}]}]},
name:"AIAttachBlade",lenses:[{title:null,name:"AttachGridLens",partInstances:[{name:"AttachGridPart",
inline:{name:null,viewModel:"Overview$AttachGridViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:
"pdceef1754b62bd4292ac59f32dd2908843",details:[],initialSize:8,supportedSizes:[8],viewStateProperties:
null},parameterProvider:!0}]}],viewModelName:"Overview$AttachBladeViewModel"},{inputs:["ComponentId",
"ParentBlade"],width:0,locked:!0,style:2,name:"SettingListBlade",lenses:[{title:null,name:"SettingListLens",
partInstances:[{name:"SettingListPart",inline:{name:null,viewModel:"Overview$SettingListPartViewModel",
partKind:0,inputs:["ComponentId","ParentBlade"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
1,property:"ComponentId"}]},{property:"ParentBlade",valuesFrom:[{referenceType:1,property:"ParentBlade"}]}],
htmlTemplate:"pdcf7933e1cf4b84f1486fbab64dd508c44",details:[{invocationInputArguments:[{valuesFrom:[
{referenceType:0,property:"content.settingList.selectableData"}]}]}],initialSize:8,supportedSizes:[8],
viewStateProperties:["content.settingList.selectableData.activatedItems","content.settingList.selectableData.selectedItems"]}}]}],
viewModelName:"Overview$SettingListBladeViewModel",viewModelInputs:[{property:"ComponentId",valuesFrom:
[{referenceType:1,property:"ComponentId"}]},{property:"ParentBlade",valuesFrom:[{referenceType:1,property:
"ParentBlade"}]}]},{inputs:["ComponentId"],templateKeyInputs:["ComponentId"],commandGroup:"EndUserAnalyticsBladeCommands",
assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:"EndUserAnalyticsBlade",lenses:
[{title:i.environmentsTitle,name:"BrowsersLens",partInstances:[{name:"BrowsersPartReference",reference:
{partTypeName:"Browsers",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},
{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}]}},{name:"Devices",
inline:{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:null,viewModel:"EndUserAnalytics$DevicesViewModel",
partKind:25,inputs:["ComponentId","TimeContext"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
1,property:"ComponentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
details:[],initialSize:2,viewStateProperties:null}}]},{title:i.activitiesTitle,name:"ActivitiesOverviewLens",
partInstances:[{name:"PageViewsPartReference",reference:{partTypeName:"PageViews",bindings:[{property:
"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"TimeContext",valuesFrom:
[{referenceType:3,property:"content.timeContext"}]}]}},{name:"SlowestRequestsPartReference",reference:
{partTypeName:"SlowestRequests",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}]}},
{name:"Sessions",inline:{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:null,
viewModel:"EndUserAnalytics$SessionsViewModel",partKind:26,inputs:["ComponentId","TimeContext"],bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],details:[{invocationInputArguments:[
{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:2,viewStateProperties:
null}}]},{title:i.configurationTitle,name:"ConfigurationLens",partInstances:[{name:"Configuration",inline:
{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:null,viewModel:"EndUserAnalytics$ConfigurationLauncherViewModel",
partKind:20,inputs:["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]}],details:[{blade:"ConfigurationBlade",selectableBindings:[{property:"ComponentId",valuesFrom:
[{referenceType:0,property:"content.componentId"}]}]}],initialSize:1,viewStateProperties:null}}]}],viewModelName:
"EndUserAnalytics$EndUserAnalyticsBladeViewModel",viewModelInputs:[{property:"timeContext",valuesFrom:
[{referenceType:4,property:"content.currentTimeSelection",bladeCommand:"TimeRangeCommand"}],optional:
!0},{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{inputs:["ComponentId"],
templateKeyInputs:["ComponentId"],width:1,locked:!0,name:"ConfigurationBlade",lenses:[{title:null,name:
"ConfigurationBladeLens",partInstances:[{name:"ConfigurationPart",inline:{name:null,viewModel:"EndUserAnalytics$ConfigurationViewModel",
partKind:0,inputs:["ComponentId"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]}],htmlTemplate:"pdcd62ed4f567454ac68d5a9fb7a42fe9cd",details:[],initialSize:8,supportedSizes:
[8],viewStateProperties:null}}]}],viewModelName:"EndUserAnalytics$ConfigurationBladeViewModel"},{inputs:
["ComponentId","InitialFilter","InitialTime","InitialQueryText","BIFavoriteData"],templateKeyInputs:
["ComponentId"],outputs:["BfavoriteData"],commandGroup:"SearchBladeCommands",bindings:[{property:"InitialFilter",
valuesFrom:[{referenceType:0,property:"content.currentFilter",part:"SearchControl"}]},{property:"InitialTime",
valuesFrom:[{referenceType:3,property:"content.InitialTime"}]},{property:"InitialQueryText",valuesFrom:
[{referenceType:0,property:"content.lastSearchPhrase",part:"SearchControl"}]},{property:"ComponentId",
valuesFrom:[{referenceType:3,property:"content.ComponentId"}]},{property:"BIFavoriteData",valuesFrom:
[{referenceType:0,property:"content.favoritePane.favoriteData",part:"SearchControl"}]},{property:"BfavoriteData",
valuesFrom:[{referenceType:4,property:"content.CfavoriteData",bladeCommand:"SearchFavoriteCommand"}]}],
width:1,locked:!0,editScopeType:"PDLEditScope",assetType:"ApplicationInsights",assetIdInputProperty:
"ComponentId",pinnedPart:"SearchPinnedPart",pinnable:!0,name:"SearchBlade",lenses:[{title:null,name:
"SearchControlLens",partInstances:[{name:"SearchControl",inline:{name:null,viewModel:"Search$SearchControlPartViewModel",
partKind:0,inputs:["ComponentId","InitialFilter","InitialTime","SearchString","PIFavoriteData","CurrentFilter",
"refreshSearch","CurrentFilter","showFavoriteConfig"],bindings:[{property:"ComponentId",valuesFrom:[
{referenceType:1,property:"ComponentId"}]},{property:"CurrentFilter",valuesFrom:[{referenceType:1,property:
"InitialFilter"}]},{property:"CurrentTimeSelection",valuesFrom:[{referenceType:1,property:"InitialTime"}]},
{property:"SearchString",valuesFrom:[{referenceType:1,property:"InitialQueryText"}]},{property:"PIFavoriteData",
valuesFrom:[{referenceType:1,property:"BIFavoriteData"}]},{property:"CurrentFilter",valuesFrom:[{referenceType:
4,property:"content.currentFilter",bladeCommand:"FilterCommand"}],optional:!0},{property:"refreshSearch",
valuesFrom:[{referenceType:4,property:"content.refreshSearch",bladeCommand:"SearchRefreshCommand"}],
optional:!0},{property:"CurrentFilter",valuesFrom:[{referenceType:4,property:"content.resetSearchFilters",
bladeCommand:"ResetFiltersCommand"}],optional:!0},{property:"showFavoriteConfig",valuesFrom:[{referenceType:
4,property:"content.showFavoriteConfig",bladeCommand:"SearchFavoriteCommand"}],optional:!0}],htmlTemplate:
"pdcf31085acde5c48c08d209bd84b44e4c7",details:[{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"content.selectableData"}]}]},{selectablePath:"content.openTimeRangeSpot",blade:"TimeSelectorDetailBlade",
selectableBindings:[{property:"timeInput",valuesFrom:[{referenceType:0,property:"content.currentTimeSelection"}]}],
additionalInputArguments:[{property:"componentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]},
{property:"customTimeRangeValidationFactory",valuesFrom:[{referenceType:0,property:"content.customTimeRangeValidationFactory"}]},
{property:"timeRangeSelectorRangeType",valuesFrom:[{referenceType:0,property:"content.timeRangeSelectorRangeType"}]},
{property:"parentBlade",valuesFrom:[{referenceType:0,property:"content.parentBladeName"}]}],outputArguments:
[{property:"CurrentTimeSelection",valuesFrom:[{referenceType:1,property:"timeOutput"}]}]},{selectablePath:
"content.filtersSummary.openFilterSelectable",blade:"FilterDetailsBlade",selectableBindings:[{property:
"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}],additionalInputArguments:
[{property:"filterInput",valuesFrom:[{referenceType:0,property:"content.currentFilter"}]},{property:
"CurrentTimeSelection",valuesFrom:[{referenceType:0,property:"content.currentTimeSelection"}]},{property:
"SearchString",valuesFrom:[{referenceType:0,property:"content.lastSearchPhrase"}]},{property:"ParentBlade",
valuesFrom:[{referenceType:5,property:"constant_SearchExplorer",constantValue:"SearchExplorer"}]}],outputArguments:
[{property:"CurrentFilter",valuesFrom:[{referenceType:1,property:"selectedEventTypes"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:["content.searchTextBoxVM.value","content.currentTimeSelection",
"content.currentFilter"]}}]}],viewModelName:"Search$SearchBladeViewModel",viewModelInputs:[{property:
"CurrentTime",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection",bladeCommand:"TimeRangeCommand"}],
optional:!0},{property:"BIFavoriteData",valuesFrom:[{referenceType:4,property:"content.CfavoriteData",
bladeCommand:"SearchFavoriteCommand"}],optional:!0},{property:"ComponentId",valuesFrom:[{referenceType:
1,property:"ComponentId"}]},{property:"InitialTime",valuesFrom:[{referenceType:1,property:"InitialTime"}]},
{property:"InitialFilter",valuesFrom:[{referenceType:1,property:"InitialFilter"}]},{property:"InitialQueryText",
valuesFrom:[{referenceType:1,property:"InitialQueryText"}]},{property:"BIFavoriteData",valuesFrom:[{
referenceType:1,property:"BIFavoriteData"}]}]},{inputs:["ComponentId","filterInput","CurrentTimeSelection",
"SearchString","ParentBlade"],templateKeyInputs:["ComponentId"],outputs:["selectedEventTypes"],commandGroup:
"FilterDetailsBladeCommands",bindings:[{property:"selectedEventTypes",valuesFrom:[{referenceType:0,property:
"content.selectedEventTypes",part:"FilterDetailPart"}]}],width:0,locked:!0,pinnable:!1,style:7,name:
"FilterDetailsBlade",lenses:[{title:null,name:"FilterDetailBladeLens",partInstances:[{name:"FilterDetailPart",
inline:{name:null,viewModel:"Search$SearchFilterDetailPartViewModel",partKind:0,inputs:["CurrentFilter",
"ComponentId","CurrentTimeSelection","SearchString","ParentBlade","CurrentFilter"],bindings:[{property:
"CurrentFilter",valuesFrom:[{referenceType:1,property:"filterInput"}]},{property:"ComponentId",valuesFrom:
[{referenceType:1,property:"ComponentId"}]},{property:"CurrentTimeSelection",valuesFrom:[{referenceType:
1,property:"CurrentTimeSelection"}]},{property:"SearchString",valuesFrom:[{referenceType:1,property:
"SearchString"}]},{property:"ParentBlade",valuesFrom:[{referenceType:1,property:"ParentBlade"}]},{property:
"CurrentFilter",valuesFrom:[{referenceType:4,property:"content.clearSearchFilters",bladeCommand:"ClearFiltersCommand"}],
optional:!0}],htmlTemplate:"pdc98a6d332309c4faa8719dad7260b1c96",details:[],initialSize:8,supportedSizes:
[8],viewStateProperties:["content.selectedEventTypes"]}}]}],viewModelName:"Search$FilterDetailsBladeViewModel",
viewModelInputs:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{inputs:
["currentItem","ComponentId"],templateKeyInputs:["currentItem"],width:0,locked:!0,pinnable:!1,name:"SearchResultDetailBlade",
lenses:[{title:null,name:"SearchResultDetailsPartLens",partInstances:[{name:"SearchResultDetailsPart",
inline:{name:null,viewModel:"Search$EventPropertiesCustomPartViewModel",partKind:0,inputs:["currentItem",
"ComponentId"],bindings:[{property:"currentItem",valuesFrom:[{referenceType:1,property:"currentItem"}]},
{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}],htmlTemplate:"pdc589fa78ef386431fa99981b756c8b3b7",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"container.selectable.selectedValue"}]}]}],
initialSize:8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"Search$SearchResultDetailBladeViewModel",
viewModelInputs:[{property:"currentItem",valuesFrom:[{referenceType:1,property:"currentItem"}]},{property:
"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{inputs:["name","value"],templateKeyInputs:
["name"],width:1,locked:!0,pinnable:!1,name:"MonacoBlade",lenses:[{title:null,name:"MonacoLens",partInstances:
[{name:"EditorPart",inline:{name:null,viewModel:"Search$EditorPartViewModel",partKind:15,inputs:["value"],
bindings:[{property:"value",valuesFrom:[{referenceType:1,property:"value"}]}],details:[],initialSize:
9,viewStateProperties:null}}]}],viewModelName:"Search$MonacoBladeViewModel",viewModelInputs:[{property:
"name",valuesFrom:[{referenceType:1,property:"name"}]}]},{inputs:["timeInput","customTimeRangeValidationFactory",
"timeRangeSelectorRangeType","componentId","parentBlade"],templateKeyInputs:["timeInput"],outputs:["timeOutput"],
bindings:[{property:"timeOutput",valuesFrom:[{referenceType:0,property:"content.timeOutput",part:"TimeRangeSelectorDetailPart"}]}],
width:0,locked:!0,pinnable:!1,style:4,name:"TimeSelectorDetailBlade",lenses:[{title:null,name:"TimeSelectorDetailBladeLens",
partInstances:[{name:"TimeRangeSelectorDetailPart",inline:{name:null,viewModel:"Search$TimeRangeSelectorPartViewModel",
partKind:0,inputs:["componentId","customTimeRangeValidationFactory","timeRangeSelectorRangeType","timeInput",
"parentBlade"],bindings:[{property:"componentId",valuesFrom:[{referenceType:1,property:"componentId"}]},
{property:"customTimeRangeValidationFactory",valuesFrom:[{referenceType:1,property:"customTimeRangeValidationFactory"}]},
{property:"timeRangeSelectorRangeType",valuesFrom:[{referenceType:1,property:"timeRangeSelectorRangeType"}]},
{property:"timeInput",valuesFrom:[{referenceType:1,property:"timeInput"}]},{property:"parentBlade",valuesFrom:
[{referenceType:1,property:"parentBlade"}]}],htmlTemplate:"pdcd99f0e6bf42a4366ba12abf0ebfdc567",details:
[],initialSize:8,supportedSizes:[8],viewStateProperties:["content.timeOutput"]}}]}],viewModelName:"Search$TimeSelectorDetailBladeViewModel"},
{inputs:["id"],templateKeyInputs:["id"],bindings:[{property:"id",valuesFrom:[{referenceType:3,property:
"content.eventId"}]}],width:1,locked:!0,pinnedPart:"EventDetailsTile",pinnable:!0,name:"SearchResultCustomEventDetailBlade",
lenses:[{title:null,name:"EventDetailsLens",partInstances:[{name:"EventDetailsCustomPart",inline:{name:
null,viewModel:"Search$CustomEventDetailsCustomPartViewModel",partKind:0,inputs:["eventId","maxPropertyCount"],
bindings:[{property:"eventId",valuesFrom:[{referenceType:1,property:"id"}]},{property:"maxPropertyCount",
valuesFrom:[{referenceType:5,property:"constant_3",constantValue:"3"}]}],htmlTemplate:"pdc81817d34e5c6444fa5027575fa5a0978",
details:[{selectablePath:"content.topNGrid.selectable",blade:"SearchResultDetailBlade",selectableBindings:
[{property:"currentItem",valuesFrom:[{referenceType:0,property:"content.currentItem"}]}],additionalInputArguments:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}]},{selectablePath:
"content.relatedItemsGrid.gridViewModel.selectableData",blade:"SearchBlade",selectableBindings:[{property:
"ComponentId",valuesFrom:[{referenceType:6,property:"componentId"}]},{property:"InitialTime",valuesFrom:
[{referenceType:6,property:"timeContext"}]},{property:"InitialFilter",valuesFrom:[{referenceType:6,property:
"searchFilter"}]},{property:"InitialQueryText",valuesFrom:[{referenceType:6,property:"queryText"}]}],
additionalInputArguments:[{property:"BIFavoriteData",valuesFrom:[{referenceType:0,property:"content.favoriteData"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.propertyActionSelectable.selectedValue"}]}]}],
initialSize:8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"Search$EventDetailsBladeViewModel",
viewModelInputs:[{property:"eventId",valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["id"],
templateKeyInputs:["id"],bindings:[{property:"id",valuesFrom:[{referenceType:3,property:"content.eventId"}]}],
width:1,locked:!0,pinnedPart:"EventDetailsTile",pinnable:!0,name:"SearchResultExceptionDetailBlade",
lenses:[{title:null,name:"ExceptionDetailsLens",partInstances:[{name:"ExceptionDetailsCustomPart",inline:
{name:null,viewModel:"Search$ExceptionDetailsCustomPartViewModel",partKind:0,inputs:["eventId","maxPropertyCount"],
bindings:[{property:"eventId",valuesFrom:[{referenceType:1,property:"id"}]},{property:"maxPropertyCount",
valuesFrom:[{referenceType:5,property:"constant_6",constantValue:"6"}]}],htmlTemplate:"pdc50e56e0308d14cc39011532cf04c6924",
details:[{selectablePath:"content.topNGrid.selectable",blade:"SearchResultDetailBlade",selectableBindings:
[{property:"currentItem",valuesFrom:[{referenceType:0,property:"content.currentItem"}]}],additionalInputArguments:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}]},{selectablePath:
"content.relatedItemsGrid.gridViewModel.selectableData",blade:"SearchBlade",selectableBindings:[{property:
"ComponentId",valuesFrom:[{referenceType:6,property:"componentId"}]},{property:"InitialTime",valuesFrom:
[{referenceType:6,property:"timeContext"}]},{property:"InitialFilter",valuesFrom:[{referenceType:6,property:
"searchFilter"}]},{property:"InitialQueryText",valuesFrom:[{referenceType:6,property:"queryText"}]}],
additionalInputArguments:[{property:"BIFavoriteData",valuesFrom:[{referenceType:0,property:"content.favoriteData"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.propertyActionSelectable.selectedValue"}]}]}],
initialSize:8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"Search$EventDetailsBladeViewModel",
viewModelInputs:[{property:"eventId",valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["id"],
templateKeyInputs:["id"],bindings:[{property:"id",valuesFrom:[{referenceType:3,property:"content.eventId"}]}],
width:1,locked:!0,pinnedPart:"EventDetailsTile",pinnable:!0,name:"SearchResultPageViewDetailBlade",lenses:
[{title:null,name:"EventDetailsLens",partInstances:[{name:"PageViewDetailsCustomPart",inline:{name:null,
viewModel:"Search$PageViewDetailsCustomPartViewModel",partKind:0,inputs:["eventId","maxPropertyCount"],
bindings:[{property:"eventId",valuesFrom:[{referenceType:1,property:"id"}]},{property:"maxPropertyCount",
valuesFrom:[{referenceType:5,property:"constant_11",constantValue:"11"}]}],htmlTemplate:"pdc2b8262f0e44349e5a4cf76312fc0d4ca",
details:[{selectablePath:"content.topNGrid.selectable",blade:"SearchResultDetailBlade",selectableBindings:
[{property:"currentItem",valuesFrom:[{referenceType:0,property:"content.currentItem"}]}],additionalInputArguments:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}]},{selectablePath:
"content.relatedItemsGrid.gridViewModel.selectableData",blade:"SearchBlade",selectableBindings:[{property:
"ComponentId",valuesFrom:[{referenceType:6,property:"componentId"}]},{property:"InitialTime",valuesFrom:
[{referenceType:6,property:"timeContext"}]},{property:"InitialFilter",valuesFrom:[{referenceType:6,property:
"searchFilter"}]},{property:"InitialQueryText",valuesFrom:[{referenceType:6,property:"queryText"}]}],
additionalInputArguments:[{property:"BIFavoriteData",valuesFrom:[{referenceType:0,property:"content.favoriteData"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.propertyActionSelectable.selectedValue"}]}]}],
initialSize:8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"Search$EventDetailsBladeViewModel",
viewModelInputs:[{property:"eventId",valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["id"],
templateKeyInputs:["id"],bindings:[{property:"id",valuesFrom:[{referenceType:3,property:"content.eventId"}]}],
width:1,locked:!0,pinnedPart:"EventDetailsTile",pinnable:!0,name:"SearchResultRequestDetailBlade",lenses:
[{title:null,name:"DetailsLens",partInstances:[{name:"RequestDetailsCustomPart",inline:{name:null,viewModel:
"Search$RequestDetailsCustomPartViewModel",partKind:0,inputs:["eventId","maxPropertyCount"],bindings:
[{property:"eventId",valuesFrom:[{referenceType:1,property:"id"}]},{property:"maxPropertyCount",valuesFrom:
[{referenceType:5,property:"constant_8",constantValue:"8"}]}],htmlTemplate:"pdc33233f5d607145e0bfafd7437ced2132",
details:[{selectablePath:"content.topNGrid.selectable",blade:"SearchResultDetailBlade",selectableBindings:
[{property:"currentItem",valuesFrom:[{referenceType:0,property:"content.currentItem"}]}],additionalInputArguments:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}]},{selectablePath:
"content.relatedItemsGrid.gridViewModel.selectableData",blade:"SearchBlade",selectableBindings:[{property:
"ComponentId",valuesFrom:[{referenceType:6,property:"componentId"}]},{property:"InitialTime",valuesFrom:
[{referenceType:6,property:"timeContext"}]},{property:"InitialFilter",valuesFrom:[{referenceType:6,property:
"searchFilter"}]},{property:"InitialQueryText",valuesFrom:[{referenceType:6,property:"queryText"}]}],
additionalInputArguments:[{property:"BIFavoriteData",valuesFrom:[{referenceType:0,property:"content.favoriteData"}]}]},
{selectablePath:"content.relatedExceptionsGrid.selectableData",blade:"SearchResultExceptionDetailBlade",
selectableBindings:[{property:"id",valuesFrom:[{referenceType:6,property:"id"}]}]},{selectablePath:"content.remoteDependenciesGrid.selectableData",
blade:"SearchResultDetailBlade",selectableBindings:[{property:"currentItem",valuesFrom:[{referenceType:
6,property:"event"}]}],additionalInputArguments:[{property:"ComponentId",valuesFrom:[{referenceType:
0,property:"content.componentId"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:
"content.propertyActionSelectable.selectedValue"}]}]}],initialSize:8,supportedSizes:[8],viewStateProperties:
null}}]}],viewModelName:"Search$EventDetailsBladeViewModel",viewModelInputs:[{property:"eventId",valuesFrom:
[{referenceType:1,property:"id"}]}]},{inputs:["id"],templateKeyInputs:["id"],bindings:[{property:"id",
valuesFrom:[{referenceType:3,property:"content.eventId"}]}],width:1,locked:!0,pinnedPart:"EventDetailsTile",
pinnable:!0,name:"SearchResultTraceDetailBlade",lenses:[{title:null,name:"EventDetailsLens",partInstances:
[{name:"TraceDetailsCustomPart",inline:{name:null,viewModel:"Search$TraceDetailsCustomPartViewModel",
partKind:0,inputs:["eventId","maxPropertyCount"],bindings:[{property:"eventId",valuesFrom:[{referenceType:
1,property:"id"}]},{property:"maxPropertyCount",valuesFrom:[{referenceType:5,property:"constant_4",constantValue:
"4"}]}],htmlTemplate:"pdca1d194c706dd4a52925d93260552f0f4",details:[{selectablePath:"content.topNGrid.selectable",
blade:"SearchResultDetailBlade",selectableBindings:[{property:"currentItem",valuesFrom:[{referenceType:
0,property:"content.currentItem"}]}],additionalInputArguments:[{property:"ComponentId",valuesFrom:[{
referenceType:0,property:"content.componentId"}]}]},{selectablePath:"content.relatedItemsGrid.gridViewModel.selectableData",
blade:"SearchBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:6,property:
"componentId"}]},{property:"InitialTime",valuesFrom:[{referenceType:6,property:"timeContext"}]},{property:
"InitialFilter",valuesFrom:[{referenceType:6,property:"searchFilter"}]},{property:"InitialQueryText",
valuesFrom:[{referenceType:6,property:"queryText"}]}],additionalInputArguments:[{property:"BIFavoriteData",
valuesFrom:[{referenceType:0,property:"content.favoriteData"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.propertyActionSelectable.selectedValue"}]}]}],initialSize:8,supportedSizes:
[8],viewStateProperties:null}}]}],viewModelName:"Search$EventDetailsBladeViewModel",viewModelInputs:
[{property:"eventId",valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["collectorBindingInternals-inputs",
"collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs","collectorBindingInternals-commit",
"stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",valuesFrom:[{referenceType:0,property:
"content.privateFpTcBI.outputs",part:"CreateWizardStepPart"}]},{property:"collectorBindingInternals-commit",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",part:"CreateWizardStepPart"}]},
{property:"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],width:0,locked:!0,
editScopeType:"PDLEditScope",pinnable:!1,style:3,actionBar:{name:"",actionBarKind:1,bindings:[{property:
"isProvisioningBlade",valuesFrom:[{referenceType:0,property:"content.enableProvisioning",part:"CreateWizardStepPart"}]},
{property:"valid",valuesFrom:[{referenceType:0,property:"content.valid",part:"CreateWizardStepPart"}]},
{property:"input",valuesFrom:[{referenceType:1,property:"stepInput"}]},{property:"eula",valuesFrom:[
{referenceType:0,property:"content.eula",part:"CreateWizardStepPart"}]},{property:"secondaryLinkDisplayText",
valuesFrom:[{referenceType:0,property:"content.secondaryLinkDisplayText",part:"CreateWizardStepPart"}]},
{property:"actionInProgress",valuesFrom:[{referenceType:0,property:"content.actionInProgress",part:"CreateWizardStepPart"}]}]},
discardEditsOnSelectionChange:!0,name:"CreateApplicationBlade",lenses:[{title:null,name:"CreateApplicationBlade_lens1",
partInstances:[{name:"CreateWizardStepPart",inline:{name:null,viewModel:"CreateApplication$CreateApplicationViewModel",
partKind:0,inputs:["editScopeId","privateFcTpBI.inputs","privateFcTpBI.errors","output","provisionOnStartboardPart",
"masterIsProvisioningPart"],bindings:[{property:"editScopeId",valuesFrom:[{referenceType:1,property:
"editScopeId"}]},{property:"privateFcTpBI.inputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"privateFcTpBI.errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},
{property:"output",valuesFrom:[{referenceType:2,property:"content.output"}]},{property:"provisionOnStartboardPart",
valuesFrom:[{referenceType:2,property:"content.provisionOnStartboardPart"}]},{property:"masterIsProvisioningPart",
valuesFrom:[{referenceType:2,property:"content.masterIsProvisioningPart"}]}],htmlTemplate:"pdcb48f34b6f8a44f1cb4b3388b792cd3a1",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectable.value"}]}],
additionalInputArguments:[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,
property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",valuesFrom:[
{referenceType:0,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:[{referenceType:
0,property:"content.stepInput"}]}],outputArguments:[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-outputs"}]},{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:[{referenceType:1,
property:"stepOutput"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.hotSpot"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.secondaryLinkSelectable.value"}]}],
outputArguments:[{property:"output",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:["content.selectable.isSelected","content.selectable.isActivated",
"content.selectable.selectedValue","content.hotSpot.selectedItems","content.hotSpot.activatedItems",
"content.hotSpot.itemsWithChildEdits","content.secondaryLinkDisplayText","content.secondaryLinkSelectable.isSelected",
"content.secondaryLinkSelectable.selectedValue"]}}]}],viewModelName:"CreateApplication$CreateApplicationBladeViewModel",
viewModelInputs:[{property:"createInputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]}]},{inputs:
["collectorBindingInternals-inputs","collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs",
"collectorBindingInternals-commit","stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.outputs",part:"ResourceListPart"}]},{property:
"collectorBindingInternals-commit",valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",
part:"ResourceListPart"}]},{property:"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],
width:0,locked:!0,editScopeType:"PDLEditScope",pinnable:!1,style:3,actionBar:{name:"",actionBarKind:
2,bindings:[{property:"valid",valuesFrom:[{referenceType:0,property:"content.valid",part:"ResourceListPart"}]},
{property:"showSelectButton",valuesFrom:[{referenceType:0,property:"content.multiselectEnabled",part:
"ResourceListPart"}]},{property:"triggerSelectAction",valuesFrom:[{referenceType:0,property:"content.triggerSelectAction",
part:"ResourceListPart"}]},{property:"input",valuesFrom:[{referenceType:1,property:"stepInput"}]},{property:
"eula",valuesFrom:[{referenceType:0,property:"content.eula",part:"ResourceListPart"}]}]},discardEditsOnSelectionChange:
!0,name:"SelectApplicationTypeBlade",lenses:[{title:null,name:"SelectApplicationTypeBlade_lens1",partInstances:
[{name:"ResourceListPart",inline:{name:null,viewModel:"CreateApplication$SelectApplicationTypePartViewModel",
partKind:0,inputs:["editScopeId","privateFcTpBI.inputs","privateFcTpBI.errors","stepInput","output"],
bindings:[{property:"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]},{property:"privateFcTpBI.inputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},{property:"privateFcTpBI.errors",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},{property:"stepInput",valuesFrom:
[{referenceType:1,property:"stepInput"}]},{property:"output",valuesFrom:[{referenceType:2,property:"content.output"}]}],
htmlTemplate:"pdc1b1315b0925f441b868b5ca520985665",details:[{invocationInputArguments:[{valuesFrom:[
{referenceType:0,property:"content.pickerActivationBladeOpener"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.createActionBladeOpener"}]}],additionalInputArguments:[{property:
"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.inputs"}]},
{property:"collectorBindingInternals-errors",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.errors"}]},
{property:"stepInput",valuesFrom:[{referenceType:0,property:"content.stepInput"}]}],outputArguments:
[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},
{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},
{property:"stepOutput",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:8,supportedSizes:
[8],viewStateProperties:null}}]}],viewModelName:"CreateApplication$SelectApplicationTypeBladeViewModel",
viewModelInputs:[{property:"pickerErrors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]}]},
{inputs:["ComponentId"],templateKeyInputs:["ComponentId"],commandGroup:"ContinuousExportBladeCommands",
locked:!0,name:"ContinuousExportBlade",lenses:[{title:null,name:"ContinuousExportLens",partInstances:
[{name:"ContinuousExportBillingTextBox",inline:{name:null,viewModel:"ContinuousExport$ContinuousExportBillingTextBoxViewModel",
partKind:0,inputs:["ComponentId","BillingPlanSupportExportData","BillingPlanIsUnknown"],bindings:[{property:
"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"BillingPlanSupportExportData",
valuesFrom:[{referenceType:3,property:"content.billingPlanSupportExportData"}]},{property:"BillingPlanIsUnknown",
valuesFrom:[{referenceType:3,property:"content.billingPlanIsUnknown"}]}],htmlTemplate:"pdca25f55fb7c444583a9b16328fea5c605",
details:[{selectablePath:"content.openBillingBladeSpot",blade:"EventManagementBlade",selectableBindings:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:null}},{name:"ContinousExportGrid",inline:{commandGroupReference:
{name:"ContinuousExportCommands",commands:[]},assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",
name:null,viewModel:"ContinuousExport$ContinuousExportPartViewModel",partKind:14,inputs:["ComponentId",
"BillingPlanSupportExportData"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:
"content.componentId"}]},{property:"BillingPlanSupportExportData",valuesFrom:[{referenceType:3,property:
"content.billingPlanSupportExportData"}]}],details:[{selectablePath:"content.selectableData",blade:"ContinuousExportEditBlade",
selectableBindings:[{property:"CurrentItemId",valuesFrom:[{referenceType:6,property:"exportId"}]}],additionalInputArguments:
[{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}]}],initialSize:
7,viewStateProperties:null}}]}],viewModelName:"ContinuousExport$ContinuousExportBladeViewModel",viewModelInputs:
[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{inputs:["collectorBindingInternals-inputs",
"collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs","collectorBindingInternals-commit",
"stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",valuesFrom:[{referenceType:0,property:
"content.privateFpTcBI.outputs",part:"CreateWizardStepPart"}]},{property:"collectorBindingInternals-commit",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",part:"CreateWizardStepPart"}]},
{property:"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],width:0,locked:!0,
editScopeType:"PDLEditScope",pinnable:!1,style:3,actionBar:{name:"",actionBarKind:1,bindings:[{property:
"isProvisioningBlade",valuesFrom:[{referenceType:0,property:"content.enableProvisioning",part:"CreateWizardStepPart"}]},
{property:"valid",valuesFrom:[{referenceType:0,property:"content.valid",part:"CreateWizardStepPart"}]},
{property:"input",valuesFrom:[{referenceType:1,property:"stepInput"}]},{property:"eula",valuesFrom:[
{referenceType:0,property:"content.eula",part:"CreateWizardStepPart"}]},{property:"secondaryLinkDisplayText",
valuesFrom:[{referenceType:0,property:"content.secondaryLinkDisplayText",part:"CreateWizardStepPart"}]},
{property:"actionInProgress",valuesFrom:[{referenceType:0,property:"content.actionInProgress",part:"CreateWizardStepPart"}]}]},
discardEditsOnSelectionChange:!0,name:"CreateContinuousExportBlade",lenses:[{title:null,name:"CreateContinuousExportBlade_lens1",
partInstances:[{name:"CreateWizardStepPart",inline:{name:null,viewModel:"ContinuousExport$CreateContinuousExportPartViewModel",
partKind:0,inputs:["editScopeId","privateFcTpBI.inputs","privateFcTpBI.errors","output","provisionOnStartboardPart",
"masterIsProvisioningPart"],bindings:[{property:"editScopeId",valuesFrom:[{referenceType:1,property:
"editScopeId"}]},{property:"privateFcTpBI.inputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"privateFcTpBI.errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},
{property:"output",valuesFrom:[{referenceType:2,property:"content.output"}]},{property:"provisionOnStartboardPart",
valuesFrom:[{referenceType:2,property:"content.provisionOnStartboardPart"}]},{property:"masterIsProvisioningPart",
valuesFrom:[{referenceType:2,property:"content.masterIsProvisioningPart"}]}],htmlTemplate:"pdc5db4a12ace5640fbb41aa0ba9bdfc757",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectable.value"}]}],
additionalInputArguments:[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,
property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",valuesFrom:[
{referenceType:0,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:[{referenceType:
0,property:"content.stepInput"}]}],outputArguments:[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-outputs"}]},{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:[{referenceType:1,
property:"stepOutput"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.hotSpot"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.secondaryLinkSelectable.value"}]}],
outputArguments:[{property:"output",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:["content.selectable.isSelected","content.selectable.isActivated",
"content.selectable.selectedValue","content.hotSpot.selectedItems","content.hotSpot.activatedItems",
"content.hotSpot.itemsWithChildEdits","content.secondaryLinkDisplayText","content.secondaryLinkSelectable.isSelected",
"content.secondaryLinkSelectable.selectedValue"]}}]}],viewModelName:"ContinuousExport$CreateContinuousExportBladeViewModel",
viewModelInputs:[{property:"createInputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]}]},{inputs:
["collectorBindingInternals-inputs","collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs",
"collectorBindingInternals-commit","stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.outputs",part:"CreateWizardStepPart"}]},
{property:"collectorBindingInternals-commit",valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",
part:"CreateWizardStepPart"}]},{property:"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],
width:0,locked:!0,editScopeType:"PDLEditScope",pinnable:!1,style:3,actionBar:{name:"",actionBarKind:
1,bindings:[{property:"isProvisioningBlade",valuesFrom:[{referenceType:0,property:"content.enableProvisioning",
part:"CreateWizardStepPart"}]},{property:"valid",valuesFrom:[{referenceType:0,property:"content.valid",
part:"CreateWizardStepPart"}]},{property:"input",valuesFrom:[{referenceType:1,property:"stepInput"}]},
{property:"eula",valuesFrom:[{referenceType:0,property:"content.eula",part:"CreateWizardStepPart"}]},
{property:"secondaryLinkDisplayText",valuesFrom:[{referenceType:0,property:"content.secondaryLinkDisplayText",
part:"CreateWizardStepPart"}]},{property:"actionInProgress",valuesFrom:[{referenceType:0,property:"content.actionInProgress",
part:"CreateWizardStepPart"}]}]},discardEditsOnSelectionChange:!0,name:"ContinuousExportEventTypesBlade",
lenses:[{title:null,name:"ContinuousExportEventTypesBlade_lens1",partInstances:[{name:"CreateWizardStepPart",
inline:{name:null,viewModel:"ContinuousExport$ContinuousExportEventTypesPartViewModel",partKind:0,inputs:
["editScopeId","privateFcTpBI.inputs","privateFcTpBI.errors","output","provisionOnStartboardPart","masterIsProvisioningPart"],
bindings:[{property:"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]},{property:"privateFcTpBI.inputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},{property:"privateFcTpBI.errors",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},{property:"output",valuesFrom:
[{referenceType:2,property:"content.output"}]},{property:"provisionOnStartboardPart",valuesFrom:[{referenceType:
2,property:"content.provisionOnStartboardPart"}]},{property:"masterIsProvisioningPart",valuesFrom:[{
referenceType:2,property:"content.masterIsProvisioningPart"}]}],htmlTemplate:"pdc1c59cf7995ac482cb8e5c0ed7fc47dea",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectable.value"}]}],
additionalInputArguments:[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,
property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",valuesFrom:[
{referenceType:0,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:[{referenceType:
0,property:"content.stepInput"}]}],outputArguments:[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-outputs"}]},{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:[{referenceType:1,
property:"stepOutput"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.hotSpot"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.secondaryLinkSelectable.value"}]}],
outputArguments:[{property:"output",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:["content.selectable.isSelected","content.selectable.isActivated",
"content.selectable.selectedValue","content.hotSpot.selectedItems","content.hotSpot.activatedItems",
"content.hotSpot.itemsWithChildEdits","content.secondaryLinkDisplayText","content.secondaryLinkSelectable.isSelected",
"content.secondaryLinkSelectable.selectedValue"]}}]}],viewModelName:"ContinuousExport$ContinuousExportEventTypesBladeViewModel",
viewModelInputs:[{property:"createInputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]}]},{inputs:
["CurrentItemId","ComponentId"],templateKeyInputs:["CurrentItemId"],commandGroup:"ContinuousExportEditBladeCommands",
width:0,locked:!0,editScopeType:"PDLEditScope",name:"ContinuousExportEditBlade",lenses:[{title:null,
name:"ContinuousExportProperties",partInstances:[{name:"EditContinousExportPart",inline:{name:null,viewModel:
"ContinuousExport$CreateContinuousExportPartViewModel",partKind:0,inputs:["ExportInfo","ComponentId",
"editScopeId","saveConfigurationExecuted"],bindings:[{property:"ExportInfo",valuesFrom:[{referenceType:
3,property:"content.exportInfo"}]},{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},
{property:"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]},{property:"saveConfigurationExecuted",
valuesFrom:[{referenceType:4,property:"content.saveConfigurationExecuted",bladeCommand:"SaveContinuousExport"}],
optional:!0}],htmlTemplate:"pdca540a32177154bb486c5874b2f4330d5",details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.destinationSelector.selectable.value"}]}],additionalInputArguments:
[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.inputs"}]},
{property:"collectorBindingInternals-errors",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.errors"}]},
{property:"stepInput",valuesFrom:[{referenceType:0,property:"content.stepInput"}]}],outputArguments:
[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},
{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},
{property:"stepOutput",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]},{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.eventTypesSelector.selectable.value"}]}],additionalInputArguments:
[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.inputs"}]},
{property:"collectorBindingInternals-errors",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.errors"}]},
{property:"stepInput",valuesFrom:[{referenceType:0,property:"content.stepInput"}]}],outputArguments:
[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},
{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},
{property:"stepOutput",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:9,supportedSizes:
[9],viewStateProperties:null}}]}],viewModelName:"ContinuousExport$ContinuousExportEditBladeViewModel",
viewModelInputs:[{property:"CurrentItemId",valuesFrom:[{referenceType:1,property:"CurrentItemId"}]},
{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{inputs:["ComponentId"],
templateKeyInputs:["ComponentId"],commandGroup:"WebTestsBladeCommands",locked:!0,assetType:"ApplicationInsights",
assetIdInputProperty:"ComponentId",name:"WebTestsBlade",lenses:[{title:null,name:"AvailabilityLens",
partInstances:[{name:"AllWebTestsPart",reference:{partTypeName:"AllWebTestsResponseTimeFull",bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]}]}},{name:"ResponseTime",inline:{assetType:
"ApplicationInsights",assetIdInputProperty:"ComponentId",name:null,viewModel:"WebTests$ResponseTimeViewModel",
partKind:26,inputs:["ComponentId","TimeContext"],bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
1,property:"ComponentId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
details:[],initialSize:5,viewStateProperties:null}}]},{title:i.allWebTests,name:"AllWebTestsLens",partInstances:
[{name:"AllWebTests",inline:{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",name:
null,viewModel:"WebTests$AllWebTestsViewModel",partKind:14,inputs:["ComponentId","TimeContext"],bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"TimeContext",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],details:[{selectablePath:"content.selectableData",
blade:"WebTestDetailBlade",selectableBindings:[{property:"Id",valuesFrom:[{referenceType:6,property:
"id"}]},{property:"WebTestInfo",valuesFrom:[{referenceType:0,property:"content.webTestInfo"}]}],additionalInputArguments:
[{property:"TimeContext",valuesFrom:[{referenceType:0,property:"content.timeContext"}]}]}],initialSize:
7,viewStateProperties:null}}]}],viewModelName:"WebTests$WebTestsBladeViewModel",viewModelInputs:[{property:
"timeContext",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection",bladeCommand:"TimeRangeCommand"}],
optional:!0},{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{inputs:
["Id","WebTestInfo","TimeContext"],templateKeyInputs:["Id","WebTestInfo"],commandGroup:"WebTestDetailBladeCommands",
locked:!0,name:"WebTestDetailBlade",lenses:[{title:null,name:"ResponseAndAvailabilityLens",partInstances:
[{name:"ResponseAndAvailability",inline:{name:null,viewModel:"WebTests$ResponseAndAvailabilityViewModel",
partKind:26,inputs:["WebTestInfo","timeContext"],bindings:[{property:"WebTestInfo",valuesFrom:[{referenceType:
3,property:"content.webTestInfo"}]},{property:"timeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
details:[],initialSize:8,viewStateProperties:null}}]},{title:i.webTestsTestLocation,name:"WebTestsTestLocationLens",
partInstances:[{name:"WebTestsTestLocation",inline:{name:null,viewModel:"WebTests$TestLocationsViewModel",
partKind:14,inputs:["WebTestInfo","TimeContext"],bindings:[{property:"WebTestInfo",valuesFrom:[{referenceType:
3,property:"content.webTestInfo"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
details:[{selectablePath:"content.selectableData",blade:"WebTestLocationDetailBlade",selectableBindings:
[{property:"Id",valuesFrom:[{referenceType:6,property:"location"}]},{property:"WebTestInfo",valuesFrom:
[{referenceType:0,property:"content.webTestInfoItem"}]}],additionalInputArguments:[{property:"TimeContext",
valuesFrom:[{referenceType:0,property:"content.timeContext"}]}]}],initialSize:8,viewStateProperties:
null}}]}],viewModelName:"WebTests$WebTestsDetailBladeViewModel",viewModelInputs:[{property:"timeContext",
valuesFrom:[{referenceType:4,property:"content.currentTimeSelection",bladeCommand:"TimeRangeCommand"}],
optional:!0},{property:"WebTestInfo",valuesFrom:[{referenceType:1,property:"WebTestInfo"}]},{property:
"timeContext",valuesFrom:[{referenceType:1,property:"TimeContext"}]}]},{inputs:["id"],templateKeyInputs:
["id"],commandGroup:"WebTestAssetBladeCommands",assetType:"WebTest",assetIdInputProperty:"id",name:"WebTestAssetBlade",
lenses:[{title:null,name:"ResponseAndAvailabilityLens",partInstances:[{name:"ResponseAndAvailability",
inline:{name:null,viewModel:"WebTests$ResponseAndAvailabilityViewModel",partKind:26,inputs:["WebTestInfo",
"timeContext"],bindings:[{property:"WebTestInfo",valuesFrom:[{referenceType:3,property:"content.webTestInfo"}]},
{property:"timeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],details:[],initialSize:
8,viewStateProperties:null}}]},{title:i.webTestsTestLocation,name:"WebTestsTestLocationLens",partInstances:
[{name:"WebTestsTestLocation",inline:{name:null,viewModel:"WebTests$TestLocationsViewModel",partKind:
14,inputs:["WebTestInfo","TimeContext"],bindings:[{property:"WebTestInfo",valuesFrom:[{referenceType:
3,property:"content.webTestInfo"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
details:[{selectablePath:"content.selectableData",blade:"WebTestLocationDetailBlade",selectableBindings:
[{property:"Id",valuesFrom:[{referenceType:6,property:"location"}]},{property:"WebTestInfo",valuesFrom:
[{referenceType:0,property:"content.webTestInfoItem"}]}],additionalInputArguments:[{property:"TimeContext",
valuesFrom:[{referenceType:0,property:"content.timeContext"}]}]}],initialSize:8,viewStateProperties:
null}}]}],viewModelName:"WebTests$WebTestsDetailBladeViewModel",viewModelInputs:[{property:"timeContext",
valuesFrom:[{referenceType:4,property:"content.currentTimeSelection",bladeCommand:"TimeRangeCommand"}],
optional:!0},{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["Id","WebTestInfo",
"TimeContext"],templateKeyInputs:["Id","WebTestInfo"],commandGroup:"WebTestLocationDetailBladeCommands",
locked:!0,name:"WebTestLocationDetailBlade",lenses:[{title:null,name:"ResponseAndAvailabilityLocationLens",
partInstances:[{name:"ResultGridResponseHeaders",inline:{name:null,viewModel:"WebTests$ResponseAndAvailabilityLocationViewModel",
partKind:0,inputs:["WebTestInfo","timeContext"],bindings:[{property:"WebTestInfo",valuesFrom:[{referenceType:
3,property:"content.webTestInfo"}]},{property:"timeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],
htmlTemplate:"pdc915c3a2eefe54284b2d0e37b74fb1ebb",details:[{selectablePath:"content.isSelectedSelectable",
blade:"WebTestResultBlade",selectableBindings:[{property:"Id",valuesFrom:[{referenceType:0,property:
"content.selectedWebTestResultId"}]},{property:"WebTestResultInfo",valuesFrom:[{referenceType:0,property:
"content.selectedWebTestResultInfo"}]}]}],initialSize:8,supportedSizes:[8],viewStateProperties:null}}]},
{title:i.webTestsFailedTests,name:"WebTestsFailedTestsLens",partInstances:[{name:"FailedTests",inline:
{name:null,viewModel:"WebTests$FailedTestsViewModel",partKind:14,inputs:["WebTestInfo","timeContext"],
bindings:[{property:"WebTestInfo",valuesFrom:[{referenceType:3,property:"content.webTestInfo"}]},{property:
"timeContext",valuesFrom:[{referenceType:3,property:"content.timeContext"}]}],details:[{selectablePath:
"content.selectableData",blade:"WebTestResultBlade",selectableBindings:[{property:"Id",valuesFrom:[{
referenceType:6,property:"key"}]},{property:"WebTestResultInfo",valuesFrom:[{referenceType:0,property:
"content.selectedWebTestResultInfo"}]}]}],initialSize:8,viewStateProperties:null}}]}],viewModelName:
"WebTests$WebTestLocationDetailBladeViewModel",viewModelInputs:[{property:"timeContext",valuesFrom:[
{referenceType:4,property:"content.currentTimeSelection",bladeCommand:"TimeRangeCommand"}],optional:
!0},{property:"WebTestInfo",valuesFrom:[{referenceType:1,property:"WebTestInfo"}]},{property:"timeContext",
valuesFrom:[{referenceType:1,property:"TimeContext"}]}]},{inputs:["Id","WebTestResultInfo"],templateKeyInputs:
["Id","WebTestResultInfo"],commandGroup:"WebTestResultBladeCommands",locked:!0,name:"WebTestResultBlade",
lenses:[{title:null,name:"TestSummaryResultLens",partInstances:[{name:"Summary",inline:{name:null,viewModel:
"WebTests$SummaryViewModel",partKind:24,inputs:["WebTestResultInfo"],bindings:[{property:"WebTestResultInfo",
valuesFrom:[{referenceType:1,property:"WebTestResultInfo"}]}],details:[],initialSize:7,viewStateProperties:
null}}]},{title:i.webTestResults,name:"TestOnlineDetailLens",partInstances:[{name:"ResultGrid",inline:
{name:null,viewModel:"WebTests$ResultGridViewModel",partKind:14,inputs:["WebTestResultInfo"],bindings:
[{property:"WebTestResultInfo",valuesFrom:[{referenceType:1,property:"WebTestResultInfo"}]}],details:
[{selectablePath:"content.selectableData",blade:"WebTestResultDetailBlade",selectableBindings:[{property:
"Id",valuesFrom:[{referenceType:6,property:"Id"}]},{property:"WebTestStep",valuesFrom:[{referenceType:
0,property:"content.selectedWebTestStep"}]}]}],initialSize:8,viewStateProperties:null}}]}],viewModelName:
"WebTests$WebTestResultBladeViewModel",viewModelInputs:[{property:"WebTestResultInfo",valuesFrom:[{referenceType:
1,property:"WebTestResultInfo"}]}]},{inputs:["Id","WebTestStep"],templateKeyInputs:["Id","WebTestStep"],
locked:!0,name:"WebTestResultDetailBlade",lenses:[{title:i.resultGridResponseHeadersLensTitle,name:"ResultGridResponseHeadersLens",
partInstances:[{name:"ResultGridResponseHeaders",inline:{name:null,viewModel:"WebTests$ResultGridResponseHeadersViewModel",
partKind:0,inputs:["WebTestStep"],bindings:[{property:"WebTestStep",valuesFrom:[{referenceType:1,property:
"WebTestStep"}]}],htmlTemplate:"pdc91f279519a7a4496aca0c1251b800016",details:[],initialSize:8,supportedSizes:
[8],viewStateProperties:null}}]},{title:i.resultGridResponseBodyLensTitle,name:"ResultGridResponseBodyLens",
partInstances:[{name:"ResultGridResponseBody",inline:{name:null,viewModel:"WebTests$ResultGridResponseBodyViewModel",
partKind:0,inputs:["WebTestStep"],bindings:[{property:"WebTestStep",valuesFrom:[{referenceType:1,property:
"WebTestStep"}]}],htmlTemplate:"pdc09e3060dfb3e4d4689a8c9a2e44b4d6f",details:[],initialSize:8,supportedSizes:
[8],viewStateProperties:null}}]},{title:i.resultGridDetailRulesLensTitle,name:"ResultGridDetailRulesLens",
partInstances:[{name:"ResultGridDetailRules",inline:{name:null,viewModel:"WebTests$ResultGridDetailRulesViewModel",
partKind:14,inputs:["WebTestStep"],bindings:[{property:"WebTestStep",valuesFrom:[{referenceType:1,property:
"WebTestStep"}]}],details:[],initialSize:8,viewStateProperties:null}}]},{title:i.resultGridDetailExceptionLensTitle,
name:"ResultGridDetailExceptionLens",partInstances:[{name:"ResultGridDetailException",inline:{name:null,
viewModel:"WebTests$ResultGridDetailExceptionViewModel",partKind:0,inputs:["WebTestStep"],bindings:[
{property:"WebTestStep",valuesFrom:[{referenceType:1,property:"WebTestStep"}]}],htmlTemplate:"pdca5d613881f244897aaca0dc0e7ba88d8",
details:[],initialSize:8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"WebTests$WebTestResultDetailBladeViewModel",
viewModelInputs:[{property:"WebTestStep",valuesFrom:[{referenceType:1,property:"WebTestStep"}]}]},{inputs:
["collectorBindingInternals-inputs","collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs",
"collectorBindingInternals-commit","stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.outputs",part:"CreateWizardStepPart"}]},
{property:"collectorBindingInternals-commit",valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",
part:"CreateWizardStepPart"}]},{property:"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],
width:0,locked:!0,editScopeType:"PDLEditScope",pinnable:!1,style:3,actionBar:{name:"",actionBarKind:
1,bindings:[{property:"isProvisioningBlade",valuesFrom:[{referenceType:0,property:"content.enableProvisioning",
part:"CreateWizardStepPart"}]},{property:"valid",valuesFrom:[{referenceType:0,property:"content.valid",
part:"CreateWizardStepPart"}]},{property:"input",valuesFrom:[{referenceType:1,property:"stepInput"}]},
{property:"eula",valuesFrom:[{referenceType:0,property:"content.eula",part:"CreateWizardStepPart"}]},
{property:"secondaryLinkDisplayText",valuesFrom:[{referenceType:0,property:"content.secondaryLinkDisplayText",
part:"CreateWizardStepPart"}]},{property:"actionInProgress",valuesFrom:[{referenceType:0,property:"content.actionInProgress",
part:"CreateWizardStepPart"}]}]},discardEditsOnSelectionChange:!0,name:"CreateWebTestBlade",lenses:[
{title:null,name:"CreateWebTestBlade_lens1",partInstances:[{name:"CreateWizardStepPart",inline:{name:
null,viewModel:"WebTests$CreateWebTestViewModel",partKind:0,inputs:["editScopeId","privateFcTpBI.inputs",
"privateFcTpBI.errors","output","provisionOnStartboardPart","masterIsProvisioningPart"],bindings:[{property:
"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]},{property:"privateFcTpBI.inputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},{property:"privateFcTpBI.errors",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},{property:"output",valuesFrom:
[{referenceType:2,property:"content.output"}]},{property:"provisionOnStartboardPart",valuesFrom:[{referenceType:
2,property:"content.provisionOnStartboardPart"}]},{property:"masterIsProvisioningPart",valuesFrom:[{
referenceType:2,property:"content.masterIsProvisioningPart"}]}],htmlTemplate:"pdc1effa0bcc70e49918ae7d828f944b932",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectable.value"}]}],
additionalInputArguments:[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,
property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",valuesFrom:[
{referenceType:0,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:[{referenceType:
0,property:"content.stepInput"}]}],outputArguments:[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-outputs"}]},{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:[{referenceType:1,
property:"stepOutput"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.hotSpot"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.secondaryLinkSelectable.value"}]}],
outputArguments:[{property:"output",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:["content.selectable.isSelected","content.selectable.isActivated",
"content.selectable.selectedValue","content.hotSpot.selectedItems","content.hotSpot.activatedItems",
"content.hotSpot.itemsWithChildEdits","content.secondaryLinkDisplayText","content.secondaryLinkSelectable.isSelected",
"content.secondaryLinkSelectable.selectedValue"]}}]}],viewModelName:"WebTests$CreateWebTestBladeViewModel",
viewModelInputs:[{property:"createInputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]}]},{inputs:
["collectorBindingInternals-inputs","collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs",
"collectorBindingInternals-commit","stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.outputs",part:"CreateWizardStepPart"}]},
{property:"collectorBindingInternals-commit",valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",
part:"CreateWizardStepPart"}]},{property:"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],
width:0,locked:!0,editScopeType:"PDLEditScope",pinnable:!1,style:3,actionBar:{name:"",actionBarKind:
1,bindings:[{property:"isProvisioningBlade",valuesFrom:[{referenceType:0,property:"content.enableProvisioning",
part:"CreateWizardStepPart"}]},{property:"valid",valuesFrom:[{referenceType:0,property:"content.valid",
part:"CreateWizardStepPart"}]},{property:"input",valuesFrom:[{referenceType:1,property:"stepInput"}]},
{property:"eula",valuesFrom:[{referenceType:0,property:"content.eula",part:"CreateWizardStepPart"}]},
{property:"secondaryLinkDisplayText",valuesFrom:[{referenceType:0,property:"content.secondaryLinkDisplayText",
part:"CreateWizardStepPart"}]},{property:"actionInProgress",valuesFrom:[{referenceType:0,property:"content.actionInProgress",
part:"CreateWizardStepPart"}]}]},discardEditsOnSelectionChange:!0,name:"EditWebTestBlade",lenses:[{title:
null,name:"EditWebTestBlade_lens1",partInstances:[{name:"CreateWizardStepPart",inline:{name:null,viewModel:
"WebTests$CreateWebTestViewModel",partKind:0,inputs:["editScopeId","privateFcTpBI.inputs","privateFcTpBI.errors",
"output","provisionOnStartboardPart","masterIsProvisioningPart"],bindings:[{property:"editScopeId",valuesFrom:
[{referenceType:1,property:"editScopeId"}]},{property:"privateFcTpBI.inputs",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-inputs"}]},{property:"privateFcTpBI.errors",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-errors"}]},{property:"output",valuesFrom:[{referenceType:2,property:
"content.output"}]},{property:"provisionOnStartboardPart",valuesFrom:[{referenceType:2,property:"content.provisionOnStartboardPart"}]},
{property:"masterIsProvisioningPart",valuesFrom:[{referenceType:2,property:"content.masterIsProvisioningPart"}]}],
htmlTemplate:"pdce78470ec2baf41bb995b3f4252f175ed",details:[{invocationInputArguments:[{valuesFrom:[
{referenceType:0,property:"content.selectable.value"}]}],additionalInputArguments:[{property:"collectorBindingInternals-inputs",
valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",
valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:
[{referenceType:0,property:"content.stepInput"}]}],outputArguments:[{property:"privateFpTcBI.outputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},{property:"privateFpTcBI.commit",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:
[{referenceType:1,property:"stepOutput"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"content.hotSpot"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:
"content.secondaryLinkSelectable.value"}]}],outputArguments:[{property:"output",valuesFrom:[{referenceType:
1,property:"stepOutput"}]}]}],initialSize:8,supportedSizes:[8],viewStateProperties:["content.selectable.isSelected",
"content.selectable.isActivated","content.selectable.selectedValue","content.hotSpot.selectedItems",
"content.hotSpot.activatedItems","content.hotSpot.itemsWithChildEdits","content.secondaryLinkDisplayText",
"content.secondaryLinkSelectable.isSelected","content.secondaryLinkSelectable.selectedValue"]}}]}],viewModelName:
"WebTests$EditWebTestBladeViewModel",viewModelInputs:[{property:"createInputs",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-inputs"}]},{property:"errors",valuesFrom:[{referenceType:1,property:
"collectorBindingInternals-errors"}]}]},{inputs:["collectorBindingInternals-inputs","collectorBindingInternals-errors",
"stepInput"],outputs:["collectorBindingInternals-outputs","collectorBindingInternals-commit","stepOutput"],
bindings:[{property:"collectorBindingInternals-outputs",valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.outputs",
part:"CreateWizardStepPart"}]},{property:"collectorBindingInternals-commit",valuesFrom:[{referenceType:
0,property:"content.privateFpTcBI.commit",part:"CreateWizardStepPart"}]},{property:"stepOutput",valuesFrom:
[{referenceType:2,property:"content.output"}]}],width:0,locked:!0,editScopeType:"PDLEditScope",pinnable:
!1,style:3,actionBar:{name:"",actionBarKind:1,bindings:[{property:"isProvisioningBlade",valuesFrom:[
{referenceType:0,property:"content.enableProvisioning",part:"CreateWizardStepPart"}]},{property:"valid",
valuesFrom:[{referenceType:0,property:"content.valid",part:"CreateWizardStepPart"}]},{property:"input",
valuesFrom:[{referenceType:1,property:"stepInput"}]},{property:"eula",valuesFrom:[{referenceType:0,property:
"content.eula",part:"CreateWizardStepPart"}]},{property:"secondaryLinkDisplayText",valuesFrom:[{referenceType:
0,property:"content.secondaryLinkDisplayText",part:"CreateWizardStepPart"}]},{property:"actionInProgress",
valuesFrom:[{referenceType:0,property:"content.actionInProgress",part:"CreateWizardStepPart"}]}]},discardEditsOnSelectionChange:
!0,name:"CreateWebTestLocationBlade",lenses:[{title:null,name:"CreateWebTestLocationBlade_lens1",partInstances:
[{name:"CreateWizardStepPart",inline:{name:null,viewModel:"WebTests$CreateWebTestLocationViewModel",
partKind:0,inputs:["editScopeId","privateFcTpBI.inputs","privateFcTpBI.errors","output","provisionOnStartboardPart",
"masterIsProvisioningPart"],bindings:[{property:"editScopeId",valuesFrom:[{referenceType:1,property:
"editScopeId"}]},{property:"privateFcTpBI.inputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"privateFcTpBI.errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},
{property:"output",valuesFrom:[{referenceType:2,property:"content.output"}]},{property:"provisionOnStartboardPart",
valuesFrom:[{referenceType:2,property:"content.provisionOnStartboardPart"}]},{property:"masterIsProvisioningPart",
valuesFrom:[{referenceType:2,property:"content.masterIsProvisioningPart"}]}],htmlTemplate:"pdca8a480665c6c44998071c4989656945a",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectable.value"}]}],
additionalInputArguments:[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,
property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",valuesFrom:[
{referenceType:0,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:[{referenceType:
0,property:"content.stepInput"}]}],outputArguments:[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-outputs"}]},{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:[{referenceType:1,
property:"stepOutput"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.hotSpot"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.secondaryLinkSelectable.value"}]}],
outputArguments:[{property:"output",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:["content.selectable.isSelected","content.selectable.isActivated",
"content.selectable.selectedValue","content.hotSpot.selectedItems","content.hotSpot.activatedItems",
"content.hotSpot.itemsWithChildEdits","content.secondaryLinkDisplayText","content.secondaryLinkSelectable.isSelected",
"content.secondaryLinkSelectable.selectedValue"]}}]}],viewModelName:"WebTests$CreateWebTestLocationBladeViewModel",
viewModelInputs:[{property:"createInputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]}]},{inputs:
["collectorBindingInternals-inputs","collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs",
"collectorBindingInternals-commit","stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.outputs",part:"CreateWizardStepPart"}]},
{property:"collectorBindingInternals-commit",valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",
part:"CreateWizardStepPart"}]},{property:"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],
width:0,locked:!0,editScopeType:"PDLEditScope",pinnable:!1,style:3,actionBar:{name:"",actionBarKind:
1,bindings:[{property:"isProvisioningBlade",valuesFrom:[{referenceType:0,property:"content.enableProvisioning",
part:"CreateWizardStepPart"}]},{property:"valid",valuesFrom:[{referenceType:0,property:"content.valid",
part:"CreateWizardStepPart"}]},{property:"input",valuesFrom:[{referenceType:1,property:"stepInput"}]},
{property:"eula",valuesFrom:[{referenceType:0,property:"content.eula",part:"CreateWizardStepPart"}]},
{property:"secondaryLinkDisplayText",valuesFrom:[{referenceType:0,property:"content.secondaryLinkDisplayText",
part:"CreateWizardStepPart"}]},{property:"actionInProgress",valuesFrom:[{referenceType:0,property:"content.actionInProgress",
part:"CreateWizardStepPart"}]}]},discardEditsOnSelectionChange:!0,name:"CreateWebTestCriteriaBlade",
lenses:[{title:null,name:"CreateWebTestCriteriaBlade_lens1",partInstances:[{name:"CreateWizardStepPart",
inline:{name:null,viewModel:"WebTests$CreateWebTestCriteriaViewModel",partKind:0,inputs:["editScopeId",
"privateFcTpBI.inputs","privateFcTpBI.errors","output","provisionOnStartboardPart","masterIsProvisioningPart"],
bindings:[{property:"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]},{property:"privateFcTpBI.inputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},{property:"privateFcTpBI.errors",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},{property:"output",valuesFrom:
[{referenceType:2,property:"content.output"}]},{property:"provisionOnStartboardPart",valuesFrom:[{referenceType:
2,property:"content.provisionOnStartboardPart"}]},{property:"masterIsProvisioningPart",valuesFrom:[{
referenceType:2,property:"content.masterIsProvisioningPart"}]}],htmlTemplate:"pdc541a9659dd234b19881339fbf036f7b7",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectable.value"}]}],
additionalInputArguments:[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,
property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",valuesFrom:[
{referenceType:0,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:[{referenceType:
0,property:"content.stepInput"}]}],outputArguments:[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-outputs"}]},{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:[{referenceType:1,
property:"stepOutput"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.hotSpot"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.secondaryLinkSelectable.value"}]}],
outputArguments:[{property:"output",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:["content.selectable.isSelected","content.selectable.isActivated",
"content.selectable.selectedValue","content.hotSpot.selectedItems","content.hotSpot.activatedItems",
"content.hotSpot.itemsWithChildEdits","content.secondaryLinkDisplayText","content.secondaryLinkSelectable.isSelected",
"content.secondaryLinkSelectable.selectedValue"]}}]}],viewModelName:"WebTests$CreateWebTestCriteriaBladeViewModel",
viewModelInputs:[{property:"createInputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]}]},{inputs:
["collectorBindingInternals-inputs","collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs",
"collectorBindingInternals-commit","stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.outputs",part:"CreateWizardStepPart"}]},
{property:"collectorBindingInternals-commit",valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",
part:"CreateWizardStepPart"}]},{property:"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],
width:0,locked:!0,editScopeType:"PDLEditScope",pinnable:!1,style:3,actionBar:{name:"",actionBarKind:
1,bindings:[{property:"isProvisioningBlade",valuesFrom:[{referenceType:0,property:"content.enableProvisioning",
part:"CreateWizardStepPart"}]},{property:"valid",valuesFrom:[{referenceType:0,property:"content.valid",
part:"CreateWizardStepPart"}]},{property:"input",valuesFrom:[{referenceType:1,property:"stepInput"}]},
{property:"eula",valuesFrom:[{referenceType:0,property:"content.eula",part:"CreateWizardStepPart"}]},
{property:"secondaryLinkDisplayText",valuesFrom:[{referenceType:0,property:"content.secondaryLinkDisplayText",
part:"CreateWizardStepPart"}]},{property:"actionInProgress",valuesFrom:[{referenceType:0,property:"content.actionInProgress",
part:"CreateWizardStepPart"}]}]},discardEditsOnSelectionChange:!0,name:"CreateWebTestAlertBlade",lenses:
[{title:null,name:"CreateWebTestAlertBlade_lens1",partInstances:[{name:"CreateWizardStepPart",inline:
{name:null,viewModel:"WebTests$CreateWebTestAlertViewModel",partKind:0,inputs:["editScopeId","privateFcTpBI.inputs",
"privateFcTpBI.errors","output","provisionOnStartboardPart","masterIsProvisioningPart"],bindings:[{property:
"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]},{property:"privateFcTpBI.inputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},{property:"privateFcTpBI.errors",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},{property:"output",valuesFrom:
[{referenceType:2,property:"content.output"}]},{property:"provisionOnStartboardPart",valuesFrom:[{referenceType:
2,property:"content.provisionOnStartboardPart"}]},{property:"masterIsProvisioningPart",valuesFrom:[{
referenceType:2,property:"content.masterIsProvisioningPart"}]}],htmlTemplate:"pdc5905aad5cabb43cda79543341a9083b1",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectable.value"}]}],
additionalInputArguments:[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,
property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",valuesFrom:[
{referenceType:0,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:[{referenceType:
0,property:"content.stepInput"}]}],outputArguments:[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-outputs"}]},{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:[{referenceType:1,
property:"stepOutput"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.hotSpot"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.secondaryLinkSelectable.value"}]}],
outputArguments:[{property:"output",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:["content.selectable.isSelected","content.selectable.isActivated",
"content.selectable.selectedValue","content.hotSpot.selectedItems","content.hotSpot.activatedItems",
"content.hotSpot.itemsWithChildEdits","content.secondaryLinkDisplayText","content.secondaryLinkSelectable.isSelected",
"content.secondaryLinkSelectable.selectedValue"]}}]}],viewModelName:"WebTests$CreateWebTestAlertBladeViewModel",
viewModelInputs:[{property:"createInputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]}]},{inputs:
["ComponentId","MetricsExplorerJsonDefinitionId","BladeId","TimeContext","CurrentFilter","FavoriteData"],
templateKeyInputs:["ComponentId"],outputs:["BfavoriteData"],commandGroup:"MetricsExplorerBladeCommands",
bindings:[{property:"BfavoriteData",valuesFrom:[{referenceType:4,property:"content.CfavoriteData",bladeCommand:
"MEFavoriteCommand"}]}],locked:!0,editScopeType:"PDLEditScope",assetType:"ApplicationInsights",assetIdInputProperty:
"ComponentId",pinnable:!1,name:"MetricsExplorerBlade",lenses:[{title:null,name:"MetricsExplorerLens",
partInstances:[{name:"MetricsExplorerPartReference",reference:{partTypeName:"MetricsExplorerPart",bindings:
[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"MetricsExplorerJsonDefinitionId",
valuesFrom:[{referenceType:1,property:"MetricsExplorerJsonDefinitionId"}]},{property:"BladeId",valuesFrom:
[{referenceType:1,property:"BladeId"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:
"content.TimeContext"}]},{property:"CurrentFilter",valuesFrom:[{referenceType:1,property:"CurrentFilter"}]},
{property:"FavoriteData",valuesFrom:[{referenceType:1,property:"FavoriteData"}]},{property:"CurrentFilter",
valuesFrom:[{referenceType:4,property:"content.currentFilter",bladeCommand:"FilterCommand"}],optional:
!0},{property:"showFavoriteConfig",valuesFrom:[{referenceType:4,property:"content.showFavoriteConfig",
bladeCommand:"MEFavoriteCommand"}],optional:!0}],initialSize:8}}]}],viewModelName:"MetricsExplorer$MetricsExplorerBladeViewModel",
viewModelInputs:[{property:"CurrentTime",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection",
bladeCommand:"TimeRangeCommand"}],optional:!0},{property:"FavoriteData",valuesFrom:[{referenceType:4,
property:"content.CfavoriteData",bladeCommand:"MEFavoriteCommand"}],optional:!0},{property:"ComponentId",
valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"MetricsExplorerJsonDefinitionId",valuesFrom:
[{referenceType:1,property:"MetricsExplorerJsonDefinitionId"}]},{property:"BladeId",valuesFrom:[{referenceType:
1,property:"BladeId"}]},{property:"TimeContext",valuesFrom:[{referenceType:1,property:"TimeContext"}]},
{property:"CurrentFilter",valuesFrom:[{referenceType:1,property:"CurrentFilter"}]},{property:"FavoriteData",
valuesFrom:[{referenceType:1,property:"FavoriteData"}]}]},{inputs:["ComponentId","MetricsExplorerJsonDefinitionId",
"MetricsExplorerSelectedChartId","BladeId"],templateKeyInputs:["ComponentId"],commandGroup:"MetricsExplorerEditBladeCommands",
width:0,locked:!0,assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",pinnable:!1,style:
8,name:"MetricsExplorerEditBlade",lenses:[{title:null,name:"MetricsExplorerEditLens",partInstances:[
{name:"MetricsExplorerEditPart",inline:{assetType:"ApplicationInsights",assetIdInputProperty:"ComponentId",
name:null,viewModel:"MetricsExplorer$MetricsExplorerEditViewModel",partKind:0,inputs:["ComponentId",
"MetricsExplorerJsonDefinitionId","MetricsExplorerSelectedChartId","BladeId"],bindings:[{property:"ComponentId",
valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"MetricsExplorerJsonDefinitionId",valuesFrom:
[{referenceType:1,property:"MetricsExplorerJsonDefinitionId"}]},{property:"MetricsExplorerSelectedChartId",
valuesFrom:[{referenceType:1,property:"MetricsExplorerSelectedChartId"}]},{property:"BladeId",valuesFrom:
[{referenceType:1,property:"BladeId"}]}],htmlTemplate:"pdc30522d899c604d7eb262fc972a15618d",details:
[],initialSize:8,supportedSizes:[8],viewStateProperties:null}}]},{title:null,name:"MetricsExplorerEditDeveloperLens",
partInstances:[{name:"MetricsExplorerEditDeveloperPart",inline:{assetType:"ApplicationInsights",assetIdInputProperty:
"ComponentId",name:null,viewModel:"MetricsExplorer$MetricsExplorerEditDeveloperViewModel",partKind:0,
inputs:["ComponentId","MetricsExplorerJsonDefinitionId","MetricsExplorerSelectedChartId","BladeId"],
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"MetricsExplorerJsonDefinitionId",
valuesFrom:[{referenceType:1,property:"MetricsExplorerJsonDefinitionId"}]},{property:"MetricsExplorerSelectedChartId",
valuesFrom:[{referenceType:1,property:"MetricsExplorerSelectedChartId"}]},{property:"BladeId",valuesFrom:
[{referenceType:1,property:"BladeId"}]}],htmlTemplate:"pdc678666a4e9a5409ea933931ed20fc24c",details:
[],initialSize:8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"MetricsExplorer$MetricsExplorerEditBladeViewModel",
viewModelInputs:[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{width:
1,locked:!0,style:4,name:"MetricsExplorerEditChartNoticeBlade",lenses:[{title:null,name:"MetricsExplorerEditChartNoticeBlade_lens1",
partInstances:[{name:"NoticePart",inline:{name:null,viewModel:"MetricsExplorer$MetricsExplorerEditChartNoticePartViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc1be4e199fba643f9a9b32c94b257f2ad",details:[],initialSize:
9,supportedSizes:[9],viewStateProperties:null}}]}],viewModelName:"MetricsExplorer$MetricsExplorerEditChartNoticeBladeViewModel"},
{inputs:["ComponentId"],templateKeyInputs:["ComponentId"],name:"EventManagementBlade",lenses:[{title:
i.billingEventManagementLensTitle,name:"EventManagementLens",partInstances:[{name:"TelemetryEventsGaugePartRef",
reference:{partTypeName:"TelemetryEventsGaugePart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]},{property:"isTelemetryEventsGuagePartSelectable",valuesFrom:[{referenceType:
5,property:"constant_false",constantValue:"false"}]}],initialSize:4}},{name:"OverageOnOffSwitchPartRef",
reference:{partTypeName:"OverageOnOffSwitchPart",bindings:[{property:"ComponentId",valuesFrom:[{referenceType:
3,property:"content.componentId"}]}],initialSize:3}},{name:"PricingTierLauncherPartWide",reference:{
partTypeName:"PricingTierLauncher",extension:"HubsExtension",bindings:[{property:"entityId",valuesFrom:
[{referenceType:3,property:"content.componentId"}]}],initialSize:3,extenderViewModel:"Billing$PricingTierLauncherExtender"}}]},
{title:i.billingEventManagementDataVolumeTitleTitle,name:"EventManagementDataVolumeLens",partInstances:
[{name:"EventsLastMonth_MetricsExplorerPartReference",reference:{partTypeName:"MetricsExplorerPart",
bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:
"MetricsExplorerJsonDefinitionId",valuesFrom:[{referenceType:5,property:"constant_EventsLastMonthMetrics",
constantValue:"EventsLastMonthMetrics"}]},{property:"BladeId",valuesFrom:[{referenceType:5,property:
"constant_Billing",constantValue:"Billing"}]},{property:"TimeContext",valuesFrom:[{referenceType:3,property:
"content.timeContext"}]}],initialSize:5}}]}],viewModelName:"Billing$EventManagementBladeViewModel",viewModelInputs:
[{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]},{inputs:["collectorBindingInternals-inputs",
"collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs","collectorBindingInternals-commit",
"stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",valuesFrom:[{referenceType:0,property:
"content.privateFpTcBI.outputs",part:"BrowseAllPart"}]},{property:"collectorBindingInternals-commit",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",part:"BrowseAllPart"}]},{property:
"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],width:1,locked:!0,editScopeType:
"PDLEditScope",pinnable:!1,style:3,actionBar:{name:"",actionBarKind:2,bindings:[{property:"valid",valuesFrom:
[{referenceType:0,property:"content.valid",part:"BrowseAllPart"}]},{property:"input",valuesFrom:[{referenceType:
1,property:"stepInput"}]}]},discardEditsOnSelectionChange:!0,name:"BillingSpecPicker",lenses:[{title:
null,name:"BrowseAllLens",partInstances:[{name:"BrowseAllPart",reference:{partTypeName:"SpecPickerListViewPart",
extension:"HubsExtension",bindings:[{property:"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]},
{property:"privateFcTpBI.inputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"privateFcTpBI.errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},
{property:"stepInput",valuesFrom:[{referenceType:1,property:"stepInput"}]},{property:"output",valuesFrom:
[{referenceType:2,property:"content.output"}]}],initialSize:9,extenderViewModel:"Billing$BillingSpecPickerExtender"}}]}],
viewModelName:"Billing$BillingSpecPickerBladeViewModel"},{width:1,locked:!0,style:4,name:"BillingComingSoonBlade",
lenses:[{title:null,name:"BillingComingSoonBlade_lens1",partInstances:[{name:"NoticePart",inline:{name:
null,viewModel:"Billing$BillingComingSoonPartViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:
"pdcbafc49416db34b658fef2a1cf41a002b",details:[],initialSize:9,supportedSizes:[9],viewStateProperties:
null}}]}],viewModelName:"Billing$BillingComingSoonBladeViewModel"}],commandGroups:[{name:"MonitoredApplicationCommands",
commands:[{name:"DeleteApplication",text:i.deleteApplication,viewModel:"MonitoredApplications$DeleteApplicationCommand",
assetType:"ApplicationInsights",assetIdInputProperty:"id",commandKind:0,bindings:[{property:"id",valuesFrom:
[{referenceType:1,property:"id"}]}]}]},{name:"EventPropertiesCommands",commands:[{name:"SearchForProperty",
text:i.searchBladeTitle,viewModel:"Search$SearchCommandViewModel",commandKind:0,bindings:[{property:
"partId",valuesFrom:[{referenceType:0,property:"content.partId"}]},{property:"key",valuesFrom:[{referenceType:
1,property:"canonicalKey"}]},{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}]},
{name:"ViewProperty",text:i.eventPropertiesViewProperty,viewModel:"Search$ViewFullCommandViewModel",
commandKind:0,bindings:[{property:"partId",valuesFrom:[{referenceType:0,property:"content.partId"}]},
{property:"value",valuesFrom:[{referenceType:1,property:"value"}]},{property:"ComponentId",valuesFrom:
[{referenceType:0,property:"content.componentId"}]}]}]},{name:"ContinuousExportCommands",commands:[{
name:"DeleteConfiguration",text:i.commandDelete,viewModel:"ContinuousExport$DeleteContinuousExportCommandViewModel",
commandKind:0,bindings:[{property:"ExportInfo",valuesFrom:[{referenceType:0,property:"content.selectableData.selectedItems"}]},
{property:"ComponentId",valuesFrom:[{referenceType:0,property:"content.componentId"}]}]}]},{name:"GridCommands",
commands:[{text:i.commandViewInMetricsExplorer,viewModel:"ViewInMetricsExplorerViewModel",commandKind:
0,bindings:[]},{text:i.commandViewInDiagnosticSearch,viewModel:"ViewInDiagnosticSearchViewModel",commandKind:
0,bindings:[]}]},{name:"FavoritesBladeCommands",commands:[{name:"FavoritesRefreshCommand",text:i.refreshButtonText,
viewModel:"Overview$FavoritesListRefreshCommandViewModel",commandKind:0,bindings:[]}]},{name:"AspNetOverviewCommands",
commands:[{name:"SettingsCommand",text:i.settings,viewModel:"Overview$SettingsCommand",details:{blade:
"SettingListBlade",additionalInputArguments:[{property:"ComponentId",valuesFrom:[{referenceType:4,property:
"content.ComponentId"}]},{property:"ParentBlade",valuesFrom:[{referenceType:4,property:"content.ParentBlade"}]}]},
commandKind:2,bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]}]},{name:"TimeRangeCommand",
text:i.searchTimeRangeCommandTitle,viewModel:"Overview$TimeRangeCommand",details:{blade:"TimeSelectorDetailBlade",
selectableBindings:[{property:"timeInput",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection"}]}],
additionalInputArguments:[{property:"customTimeRangeValidationFactory",valuesFrom:[{referenceType:4,
property:"content.customTimeRangeValidationFactory"}]},{property:"timeRangeSelectorRangeType",valuesFrom:
[{referenceType:4,property:"content.timeRangeSelectorRangeType"}]},{property:"componentId",valuesFrom:
[{referenceType:4,property:"content.componentId"}]},{property:"parentBlade",valuesFrom:[{referenceType:
4,property:"content.parentBlade"}]}],outputArguments:[{property:"currentTimeSelection",valuesFrom:[{
referenceType:1,property:"timeOutput"}]}]},commandKind:2,bindings:[{property:"initialTime",valuesFrom:
[{referenceType:3,property:"content.timeContext"}]},{property:"customTimeRangeValidationFactory",valuesFrom:
[{referenceType:3,property:"content.CustomTimeRangeValidationFactory"}]},{property:"ComponentId",valuesFrom:
[{referenceType:3,property:"content.componentId"}]},{property:"ParentBlade",valuesFrom:[{referenceType:
3,property:"content.BladeName"}]}]},{name:"RefreshBlade",text:i.refreshButtonText,viewModel:"Overview$RefreshBladeCommand",
commandKind:0,bindings:[{property:"id",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]}]},{name:"DeleteApplication",
text:i.deleteApplication,viewModel:"Overview$DeleteApplicationCommand",assetType:"ApplicationInsights",
assetIdInputProperty:"id",commandKind:0,bindings:[{property:"id",valuesFrom:[{referenceType:3,property:
"content.componentId"}]},{property:"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]}]}]},
{name:"DeviceOverviewCommands",commands:[{name:"SettingsCommand",text:i.settings,viewModel:"Overview$SettingsCommand",
details:{blade:"SettingListBlade",additionalInputArguments:[{property:"ComponentId",valuesFrom:[{referenceType:
4,property:"content.ComponentId"}]},{property:"ParentBlade",valuesFrom:[{referenceType:4,property:"content.ParentBlade"}]}]},
commandKind:2,bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},
{property:"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]}]},{name:"TimeRangeCommand",
text:i.searchTimeRangeCommandTitle,viewModel:"Overview$TimeRangeCommand",details:{blade:"TimeSelectorDetailBlade",
selectableBindings:[{property:"timeInput",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection"}]}],
additionalInputArguments:[{property:"customTimeRangeValidationFactory",valuesFrom:[{referenceType:4,
property:"content.customTimeRangeValidationFactory"}]},{property:"timeRangeSelectorRangeType",valuesFrom:
[{referenceType:4,property:"content.timeRangeSelectorRangeType"}]},{property:"componentId",valuesFrom:
[{referenceType:4,property:"content.componentId"}]},{property:"parentBlade",valuesFrom:[{referenceType:
4,property:"content.parentBlade"}]}],outputArguments:[{property:"currentTimeSelection",valuesFrom:[{
referenceType:1,property:"timeOutput"}]}]},commandKind:2,bindings:[{property:"initialTime",valuesFrom:
[{referenceType:3,property:"content.deviceTimeContext"}]},{property:"customTimeRangeValidationFactory",
valuesFrom:[{referenceType:3,property:"content.CustomTimeRangeValidationFactory"}]},{property:"ComponentId",
valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"ParentBlade",valuesFrom:[{
referenceType:3,property:"content.BladeName"}]}]},{name:"RefreshBlade",text:i.refreshButtonText,viewModel:
"Overview$RefreshBladeCommand",commandKind:0,bindings:[{property:"ParentBlade",valuesFrom:[{referenceType:
3,property:"content.BladeName"}]}]},{name:"DeleteApplication",text:i.deleteApplication,viewModel:"Overview$DeleteApplicationCommand",
assetType:"ApplicationInsights",assetIdInputProperty:"id",commandKind:0,bindings:[{property:"id",valuesFrom:
[{referenceType:3,property:"content.componentId"}]},{property:"ParentBlade",valuesFrom:[{referenceType:
3,property:"content.BladeName"}]}]}]},{name:"JavaWebOverviewCommands",commands:[{name:"SettingsCommand",
text:i.settings,viewModel:"Overview$SettingsCommand",details:{blade:"SettingListBlade",additionalInputArguments:
[{property:"ComponentId",valuesFrom:[{referenceType:4,property:"content.ComponentId"}]},{property:"ParentBlade",
valuesFrom:[{referenceType:4,property:"content.ParentBlade"}]}]},commandKind:2,bindings:[{property:"ComponentId",
valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"ParentBlade",valuesFrom:[{
referenceType:3,property:"content.BladeName"}]}]},{name:"TimeRangeCommand",text:i.searchTimeRangeCommandTitle,
viewModel:"Overview$TimeRangeCommand",details:{blade:"TimeSelectorDetailBlade",selectableBindings:[{
property:"timeInput",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection"}]}],additionalInputArguments:
[{property:"customTimeRangeValidationFactory",valuesFrom:[{referenceType:4,property:"content.customTimeRangeValidationFactory"}]},
{property:"timeRangeSelectorRangeType",valuesFrom:[{referenceType:4,property:"content.timeRangeSelectorRangeType"}]},
{property:"componentId",valuesFrom:[{referenceType:4,property:"content.componentId"}]},{property:"parentBlade",
valuesFrom:[{referenceType:4,property:"content.parentBlade"}]}],outputArguments:[{property:"currentTimeSelection",
valuesFrom:[{referenceType:1,property:"timeOutput"}]}]},commandKind:2,bindings:[{property:"initialTime",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]},{property:"customTimeRangeValidationFactory",
valuesFrom:[{referenceType:3,property:"content.CustomTimeRangeValidationFactory"}]},{property:"ComponentId",
valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"ParentBlade",valuesFrom:[{
referenceType:3,property:"content.BladeName"}]}]},{name:"RefreshBlade",text:i.refreshButtonText,viewModel:
"Overview$RefreshBladeCommand",commandKind:0,bindings:[{property:"ParentBlade",valuesFrom:[{referenceType:
3,property:"content.BladeName"}]}]},{name:"DeleteApplication",text:i.deleteApplication,viewModel:"Overview$DeleteApplicationCommand",
assetType:"ApplicationInsights",assetIdInputProperty:"id",commandKind:0,bindings:[{property:"id",valuesFrom:
[{referenceType:3,property:"content.componentId"}]},{property:"ParentBlade",valuesFrom:[{referenceType:
3,property:"content.BladeName"}]}]}]},{name:"EndUserAnalyticsBladeCommands",commands:[{name:"TimeRangeCommand",
text:i.searchTimeRangeCommandTitle,viewModel:"EndUserAnalytics$TimeRangeCommand",details:{blade:"TimeSelectorDetailBlade",
selectableBindings:[{property:"timeInput",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection"}]}],
additionalInputArguments:[{property:"customTimeRangeValidationFactory",valuesFrom:[{referenceType:4,
property:"content.customTimeRangeValidationFactory"}]},{property:"timeRangeSelectorRangeType",valuesFrom:
[{referenceType:4,property:"content.timeRangeSelectorRangeType"}]},{property:"componentId",valuesFrom:
[{referenceType:4,property:"content.componentId"}]},{property:"parentBlade",valuesFrom:[{referenceType:
4,property:"content.parentBlade"}]}],outputArguments:[{property:"currentTimeSelection",valuesFrom:[{
referenceType:1,property:"timeOutput"}]}]},commandKind:2,bindings:[{property:"initialTime",valuesFrom:
[{referenceType:3,property:"content.timeContext"}]},{property:"customTimeRangeValidationFactory",valuesFrom:
[{referenceType:3,property:"content.CustomTimeRangeValidationFactory"}]},{property:"ComponentId",valuesFrom:
[{referenceType:1,property:"ComponentId"}]},{property:"ParentBlade",valuesFrom:[{referenceType:3,property:
"content.BladeName"}]}]},{name:"RefreshBlade",text:i.refreshButtonText,viewModel:"EndUserAnalytics$RefreshBladeCommand",
commandKind:0,bindings:[{property:"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]}]}]},
{name:"SearchBladeCommands",commands:[{name:"TimeRangeCommand",text:i.searchTimeRangeCommandTitle,viewModel:
"Search$TimeRangeCommand",details:{blade:"TimeSelectorDetailBlade",selectableBindings:[{property:"timeInput",
valuesFrom:[{referenceType:4,property:"content.currentTimeSelection"}]}],additionalInputArguments:[{
property:"customTimeRangeValidationFactory",valuesFrom:[{referenceType:4,property:"content.customTimeRangeValidationFactory"}]},
{property:"timeRangeSelectorRangeType",valuesFrom:[{referenceType:4,property:"content.timeRangeSelectorRangeType"}]},
{property:"componentId",valuesFrom:[{referenceType:4,property:"content.componentId"}]},{property:"parentBlade",
valuesFrom:[{referenceType:4,property:"content.parentBlade"}]}],outputArguments:[{property:"currentTimeSelection",
valuesFrom:[{referenceType:1,property:"timeOutput"}]}]},commandKind:2,bindings:[{property:"initialTime",
valuesFrom:[{referenceType:3,property:"content.InitialTime"}]},{property:"customTimeRangeValidationFactory",
valuesFrom:[{referenceType:3,property:"content.CustomTimeRangeValidationFactory"}]},{property:"timeRangeSelectorRangeType",
valuesFrom:[{referenceType:3,property:"content.TimeRangeSelectorRangeType"}]},{property:"ComponentId",
valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"ParentBlade",valuesFrom:[{referenceType:
3,property:"content.BladeName"}]}]},{name:"FilterCommand",text:i.filterCommandName,viewModel:"Search$FilterCommandViewModel",
details:{blade:"FilterDetailsBlade",selectableBindings:[{property:"ComponentId",valuesFrom:[{referenceType:
4,property:"content.componentId"}]}],additionalInputArguments:[{property:"filterInput",valuesFrom:[{
referenceType:4,property:"content.initialFilters"}]},{property:"CurrentTimeSelection",valuesFrom:[{referenceType:
4,property:"content.currentTimeSelection"}]},{property:"SearchString",valuesFrom:[{referenceType:4,property:
"content.searchString"}]},{property:"ParentBlade",valuesFrom:[{referenceType:5,property:"constant_SearchExplorer",
constantValue:"SearchExplorer"}]}],outputArguments:[{property:"currentFilter",valuesFrom:[{referenceType:
1,property:"selectedEventTypes"}]}]},commandKind:2,bindings:[{property:"initialFilter",valuesFrom:[{
referenceType:0,property:"content.currentFilter",part:"SearchControl"}]},{property:"ComponentId",valuesFrom:
[{referenceType:1,property:"ComponentId"}]},{property:"SearchString",valuesFrom:[{referenceType:0,property:
"content.lastSearchPhrase",part:"SearchControl"}]},{property:"CurrentTimeSelection",valuesFrom:[{referenceType:
0,property:"content.currentTimeSelection",part:"SearchControl"}]}]},{name:"SearchRefreshCommand",text:
i.refreshButtonText,viewModel:"Search$SearchRefreshCommandViewModel",commandKind:0,bindings:[{property:
"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]}]},{name:"ResetFiltersCommand",
text:i.resetFiltersCommandTitle,viewModel:"Search$ResetFiltersCommandViewModel",commandKind:0,bindings:
[{property:"initialFilter",valuesFrom:[{referenceType:3,property:"content.InitialFilter"}]}]},{text:
i.searchSetupLoggingCommandTitle,viewModel:"Search$SetupLoggingCommandViewModel",commandKind:1,bindings:
[]},{name:"SearchFavoriteCommand",text:i.favoriteCommandName,viewModel:"Search$FavoritesCommandViewModel",
commandKind:0,bindings:[{property:"favoriteTopPaneStatus",valuesFrom:[{referenceType:0,property:"content.favoritePane.isFavoriteTopPaneExpanded",
part:"SearchControl"}]},{property:"isFavoriteDataDirty",valuesFrom:[{referenceType:0,property:"content.favoritePane.isFavoriteDataDirty",
part:"SearchControl"}]},{property:"CIfavoriteData",valuesFrom:[{referenceType:0,property:"content.favoritePane.favoriteData",
part:"SearchControl"}]},{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},
{property:"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]}]}]},{name:"FilterDetailsBladeCommands",
commands:[{name:"ClearFiltersCommand",text:i.clearFiltersCommandTitle,viewModel:"Search$ClearFiltersCommandViewModel",
commandKind:0,bindings:[]}]},{name:"ContinuousExportBladeCommands",commands:[{name:"AddContinuousExport",
text:i.add,viewModel:"ContinuousExport$AddContinuousExportCommandViewModel",details:{blade:"CreateContinuousExportBlade",
additionalInputArguments:[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:4,
property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",valuesFrom:[
{referenceType:4,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:[{referenceType:
4,property:"content.stepInput"}]}],outputArguments:[{property:"fromProviderBindingInternals.outputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},{property:"fromProviderBindingInternals.commit",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:
[{referenceType:1,property:"stepOutput"}]}]},commandKind:2,bindings:[{property:"ComponentId",valuesFrom:
[{referenceType:3,property:"content.componentId"}]},{property:"BillingPlanSupportExportData",valuesFrom:
[{referenceType:3,property:"content.billingPlanSupportExportData"}]}]},{name:"RefreshContinuousExport",
text:i.refreshButtonText,viewModel:"ContinuousExport$RefreshContinuousExportCommandViewModel",commandKind:
0,bindings:[{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]},{
property:"BillingPlanSupportExportData",valuesFrom:[{referenceType:3,property:"content.billingPlanSupportExportData"}]},
{property:"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]}]}]},{name:"ContinuousExportEditBladeCommands",
commands:[{name:"SaveContinuousExport",text:i.commandSave,viewModel:"ContinuousExport$SaveContinuousExportCommandViewModel",
commandKind:0,bindings:[{property:"formValid",valuesFrom:[{referenceType:0,property:"content.valid",
part:"EditContinousExportPart"}]},{property:"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]}]},
{name:"EnableContinuousExport",text:i.commandEnable,viewModel:"ContinuousExport$EnableContinuousExportCommandViewModel",
commandKind:0,bindings:[{property:"ExportInfo",valuesFrom:[{referenceType:3,property:"content.exportInfo"}]},
{property:"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]}]},{name:"DisableContinuousExport",
text:i.commandDisable,viewModel:"ContinuousExport$DisableContinuousExportCommandViewModel",commandKind:
0,bindings:[{property:"ExportInfo",valuesFrom:[{referenceType:3,property:"content.exportInfo"}]},{property:
"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]}]},{name:"DeleteContinuousExport",
text:i.commandDelete,viewModel:"ContinuousExport$DeleteContinuousExportCommandViewModel",commandKind:
0,bindings:[{property:"ExportInfo",valuesFrom:[{referenceType:3,property:"content.exportInfo"}]},{property:
"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]}]}]},{name:"WebTestsBladeCommands",
commands:[{name:"CreateWebTest",text:i.commandAddWebTest,viewModel:"WebTests$CommandAddWebTestViewModel",
details:{blade:"CreateWebTestBlade",additionalInputArguments:[{property:"collectorBindingInternals-inputs",
valuesFrom:[{referenceType:4,property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",
valuesFrom:[{referenceType:4,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:
[{referenceType:4,property:"content.stepInput"}]}],outputArguments:[{property:"fromProviderBindingInternals.outputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},{property:"fromProviderBindingInternals.commit",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:
[{referenceType:1,property:"stepOutput"}]}]},commandKind:2,bindings:[{property:"ComponentId",valuesFrom:
[{referenceType:1,property:"ComponentId"}]}]},{name:"TimeRangeCommand",text:i.searchTimeRangeCommandTitle,
viewModel:"WebTests$TimeRangeCommand",details:{blade:"TimeSelectorDetailBlade",selectableBindings:[{
property:"timeInput",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection"}]}],additionalInputArguments:
[{property:"customTimeRangeValidationFactory",valuesFrom:[{referenceType:4,property:"content.customTimeRangeValidationFactory"}]},
{property:"timeRangeSelectorRangeType",valuesFrom:[{referenceType:4,property:"content.timeRangeSelectorRangeType"}]},
{property:"componentId",valuesFrom:[{referenceType:4,property:"content.componentId"}]},{property:"parentBlade",
valuesFrom:[{referenceType:4,property:"content.parentBlade"}]}],outputArguments:[{property:"currentTimeSelection",
valuesFrom:[{referenceType:1,property:"timeOutput"}]}]},commandKind:2,bindings:[{property:"initialTime",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]},{property:"customTimeRangeValidationFactory",
valuesFrom:[{referenceType:3,property:"content.CustomTimeRangeValidationFactory"}]},{property:"ComponentId",
valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"ParentBlade",valuesFrom:[{referenceType:
3,property:"content.BladeName"}]}]},{name:"RefreshBlade",text:i.refreshButtonText,viewModel:"WebTests$RefreshBladeCommand",
commandKind:0,bindings:[{property:"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]}]}]},
{name:"WebTestDetailBladeCommands",commands:[{name:"EditWebTest",text:i.commandEditTest,viewModel:"WebTests$CommandEditWebTestViewModel",
details:{blade:"EditWebTestBlade",additionalInputArguments:[{property:"collectorBindingInternals-inputs",
valuesFrom:[{referenceType:4,property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",
valuesFrom:[{referenceType:4,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:
[{referenceType:4,property:"content.stepInput"}]}],outputArguments:[{property:"fromProviderBindingInternals.outputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},{property:"fromProviderBindingInternals.commit",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:
[{referenceType:1,property:"stepOutput"}]}]},commandKind:2,bindings:[{property:"WebTestInfo",valuesFrom:
[{referenceType:3,property:"content.webTestInfo"}]}]},{text:i.downloadWebTestFile,viewModel:"WebTests$CommandDownloadWebTestViewModel",
commandKind:1,bindings:[{property:"WebTestInfo",valuesFrom:[{referenceType:3,property:"content.webTestInfo"}]}]},
{text:i.commandEnable,viewModel:"WebTests$EnableWebTestCommandViewModel",commandKind:0,bindings:[{property:
"WebTestInfo",valuesFrom:[{referenceType:3,property:"content.webTestInfo"}]}]},{text:i.commandDisable,
viewModel:"WebTests$DisableWebTestCommandViewModel",commandKind:0,bindings:[{property:"WebTestInfo",
valuesFrom:[{referenceType:3,property:"content.webTestInfo"}]}]},{text:i.commandDelete,viewModel:"WebTests$CommandDeleteWebTestViewModel",
commandKind:0,bindings:[{property:"WebTestInfo",valuesFrom:[{referenceType:3,property:"content.webTestInfo"}]}]},
{name:"TimeRangeCommand",text:i.searchTimeRangeCommandTitle,viewModel:"WebTests$TimeRangeCommand",details:
{blade:"TimeSelectorDetailBlade",selectableBindings:[{property:"timeInput",valuesFrom:[{referenceType:
4,property:"content.currentTimeSelection"}]}],additionalInputArguments:[{property:"customTimeRangeValidationFactory",
valuesFrom:[{referenceType:4,property:"content.customTimeRangeValidationFactory"}]},{property:"timeRangeSelectorRangeType",
valuesFrom:[{referenceType:4,property:"content.timeRangeSelectorRangeType"}]},{property:"componentId",
valuesFrom:[{referenceType:4,property:"content.componentId"}]},{property:"parentBlade",valuesFrom:[{
referenceType:4,property:"content.parentBlade"}]}],outputArguments:[{property:"currentTimeSelection",
valuesFrom:[{referenceType:1,property:"timeOutput"}]}]},commandKind:2,bindings:[{property:"initialTime",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]},{property:"customTimeRangeValidationFactory",
valuesFrom:[{referenceType:3,property:"content.CustomTimeRangeValidationFactory"}]},{property:"ComponentId",
valuesFrom:[{referenceType:3,property:"content.ComponentId"}]},{property:"ParentBlade",valuesFrom:[{
referenceType:3,property:"content.BladeName"}]}]},{name:"RefreshBlade",text:i.refreshButtonText,viewModel:
"WebTests$RefreshBladeCommand",commandKind:0,bindings:[{property:"ParentBlade",valuesFrom:[{referenceType:
3,property:"content.BladeName"}]}]}]},{name:"WebTestAssetBladeCommands",commands:[{name:"EditWebTest",
text:i.commandEditTest,viewModel:"WebTests$CommandEditWebTestViewModel",details:{blade:"EditWebTestBlade",
additionalInputArguments:[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:4,
property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",valuesFrom:[
{referenceType:4,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:[{referenceType:
4,property:"content.stepInput"}]}],outputArguments:[{property:"fromProviderBindingInternals.outputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},{property:"fromProviderBindingInternals.commit",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:
[{referenceType:1,property:"stepOutput"}]}]},commandKind:2,bindings:[{property:"WebTestInfo",valuesFrom:
[{referenceType:3,property:"content.webTestInfo"}]}]},{text:i.commandEnable,viewModel:"WebTests$EnableWebTestCommandViewModel",
commandKind:0,bindings:[{property:"WebTestInfo",valuesFrom:[{referenceType:3,property:"content.webTestInfo"}]}]},
{text:i.commandDisable,viewModel:"WebTests$DisableWebTestCommandViewModel",commandKind:0,bindings:[{
property:"WebTestInfo",valuesFrom:[{referenceType:3,property:"content.webTestInfo"}]}]},{text:i.commandDelete,
viewModel:"WebTests$CommandDeleteWebTestViewModel",commandKind:0,bindings:[{property:"WebTestInfo",valuesFrom:
[{referenceType:3,property:"content.webTestInfo"}]}]},{name:"TimeRangeCommand",text:i.searchTimeRangeCommandTitle,
viewModel:"WebTests$TimeRangeCommand",details:{blade:"TimeSelectorDetailBlade",selectableBindings:[{
property:"timeInput",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection"}]}],additionalInputArguments:
[{property:"customTimeRangeValidationFactory",valuesFrom:[{referenceType:4,property:"content.customTimeRangeValidationFactory"}]},
{property:"timeRangeSelectorRangeType",valuesFrom:[{referenceType:4,property:"content.timeRangeSelectorRangeType"}]},
{property:"componentId",valuesFrom:[{referenceType:4,property:"content.componentId"}]},{property:"parentBlade",
valuesFrom:[{referenceType:4,property:"content.parentBlade"}]}],outputArguments:[{property:"currentTimeSelection",
valuesFrom:[{referenceType:1,property:"timeOutput"}]}]},commandKind:2,bindings:[{property:"initialTime",
valuesFrom:[{referenceType:3,property:"content.timeContext"}]},{property:"customTimeRangeValidationFactory",
valuesFrom:[{referenceType:3,property:"content.CustomTimeRangeValidationFactory"}]},{property:"ComponentId",
valuesFrom:[{referenceType:3,property:"content.ComponentId"}]},{property:"ParentBlade",valuesFrom:[{
referenceType:3,property:"content.BladeName"}]}]},{name:"RefreshBlade",text:i.refreshButtonText,viewModel:
"WebTests$RefreshBladeCommand",commandKind:0,bindings:[{property:"ParentBlade",valuesFrom:[{referenceType:
3,property:"content.BladeName"}]}]}]},{name:"WebTestLocationDetailBladeCommands",commands:[{name:"TimeRangeCommand",
text:i.searchTimeRangeCommandTitle,viewModel:"WebTests$TimeRangeCommand",details:{blade:"TimeSelectorDetailBlade",
selectableBindings:[{property:"timeInput",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection"}]}],
additionalInputArguments:[{property:"parentBlade",valuesFrom:[{referenceType:4,property:"content.parentBlade"}]},
{property:"componentId",valuesFrom:[{referenceType:4,property:"content.componentId"}]},{property:"customTimeRangeValidationFactory",
valuesFrom:[{referenceType:4,property:"content.customTimeRangeValidationFactory"}]},{property:"timeRangeSelectorRangeType",
valuesFrom:[{referenceType:4,property:"content.timeRangeSelectorRangeType"}]}],outputArguments:[{property:
"currentTimeSelection",valuesFrom:[{referenceType:1,property:"timeOutput"}]}]},commandKind:2,bindings:
[{property:"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]},{property:"ComponentId",
valuesFrom:[{referenceType:3,property:"content.ComponentId"}]},{property:"initialTime",valuesFrom:[{
referenceType:3,property:"content.timeContext"}]},{property:"customTimeRangeValidationFactory",valuesFrom:
[{referenceType:3,property:"content.CustomTimeRangeValidationFactory"}]}]}]},{name:"WebTestResultBladeCommands",
commands:[{text:i.webTestResultsOpenInVs,viewModel:"WebTests$DownloadViewModel",commandKind:1,bindings:
[{property:"WebTestResultInfo",valuesFrom:[{referenceType:1,property:"WebTestResultInfo"}]}]}]},{name:
"MetricsExplorerBladeCommands",commands:[{name:"AddChartCommand",text:i.metricsExplorerAddChartCommand,
viewModel:"MetricsExplorer$AddChartCommandViewModel",commandKind:0,bindings:[{property:"MetricsExplorerJsonDefinitionId",
valuesFrom:[{referenceType:1,property:"MetricsExplorerJsonDefinitionId"}]},{property:"BladeId",valuesFrom:
[{referenceType:1,property:"BladeId"}]},{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]},{property:"enabledState",valuesFrom:[{referenceType:0,property:"content.addChartEnabledState",
part:"MetricsExplorerPartReference"}]}]},{name:"TimeRangeCommand",text:i.searchTimeRangeCommandTitle,
viewModel:"MetricsExplorer$TimeRangeCommand",details:{blade:"TimeSelectorDetailBlade",selectableBindings:
[{property:"timeInput",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection"}]}],additionalInputArguments:
[{property:"customTimeRangeValidationFactory",valuesFrom:[{referenceType:4,property:"content.customTimeRangeValidationFactory"}]},
{property:"timeRangeSelectorRangeType",valuesFrom:[{referenceType:4,property:"content.timeRangeSelectorRangeType"}]},
{property:"componentId",valuesFrom:[{referenceType:4,property:"content.componentId"}]},{property:"parentBlade",
valuesFrom:[{referenceType:4,property:"content.parentBlade"}]}],outputArguments:[{property:"currentTimeSelection",
valuesFrom:[{referenceType:1,property:"timeOutput"}]}]},commandKind:2,bindings:[{property:"initialTime",
valuesFrom:[{referenceType:3,property:"content.TimeContext"}]},{property:"customTimeRangeValidationFactory",
valuesFrom:[{referenceType:3,property:"content.CustomTimeRangeValidationFactory"}]},{property:"timeRangeSelectorRangeType",
valuesFrom:[{referenceType:3,property:"content.TimeRangeSelectorRangeType"}]},{property:"ComponentId",
valuesFrom:[{referenceType:3,property:"content.componentId"}]},{property:"ParentBlade",valuesFrom:[{
referenceType:3,property:"content.BladeName"}]}]},{name:"FilterCommand",text:i.filterCommandName,viewModel:
"MetricsExplorer$FilterCommandViewModel",details:{blade:"FilterDetailsBlade",selectableBindings:[{property:
"ComponentId",valuesFrom:[{referenceType:4,property:"content.componentId"}]}],additionalInputArguments:
[{property:"filterInput",valuesFrom:[{referenceType:4,property:"content.initialFilters"}]},{property:
"CurrentTimeSelection",valuesFrom:[{referenceType:4,property:"content.currentTimeSelection"}]},{property:
"SearchString",valuesFrom:[{referenceType:4,property:"content.searchString"}]},{property:"ParentBlade",
valuesFrom:[{referenceType:5,property:"constant_MetricsExplorer",constantValue:"MetricsExplorer"}]}],
outputArguments:[{property:"currentFilter",valuesFrom:[{referenceType:1,property:"selectedEventTypes"}]}]},
commandKind:2,bindings:[{property:"initialFilter",valuesFrom:[{referenceType:0,property:"content.selectedFilter",
part:"MetricsExplorerPartReference"}]},{property:"ComponentId",valuesFrom:[{referenceType:1,property:
"ComponentId"}]},{property:"SearchString",valuesFrom:[{referenceType:0,property:"content.searchPhrase",
part:"MetricsExplorerPartReference"}]},{property:"CurrentTimeSelection",valuesFrom:[{referenceType:0,
property:"content.timeContext",part:"MetricsExplorerPartReference"}]}]},{name:"RefreshBlade",text:i.
refreshButtonText,viewModel:"MetricsExplorer$RefreshBladeCommand",commandKind:0,bindings:[{property:
"ParentBlade",valuesFrom:[{referenceType:3,property:"content.BladeName"}]}]},{name:"AlertRulesCommand",
text:i.commandAlertRules,viewModel:"MetricsExplorer$AlertRulesCommand",details:{blade:"AlertsListBlade",
bladeExtension:"Microsoft_Azure_Insights",selectableBindings:[{property:"targetResourceIds",valuesFrom:
[{referenceType:4,property:"content.alertResourceIds"}]}],additionalInputArguments:[{property:"options",
valuesFrom:[{referenceType:4,property:"content.alertOptions"}]}]},commandKind:2,bindings:[{property:
"ComponentId",valuesFrom:[{referenceType:3,property:"content.componentId"}]}]},{name:"MEFavoriteCommand",
text:i.favoriteCommandName,viewModel:"MetricsExplorer$FavoritesCommandViewModel",commandKind:0,bindings:
[{property:"favoriteTopPaneStatus",valuesFrom:[{referenceType:0,property:"content.favoritePane.isFavoriteTopPaneExpanded",
part:"MetricsExplorerPartReference"}]},{property:"isFavoriteDataDirty",valuesFrom:[{referenceType:0,
property:"content.favoritePane.isFavoriteDataDirty",part:"MetricsExplorerPartReference"}]},{property:
"CIfavoriteData",valuesFrom:[{referenceType:0,property:"content.favoritePane.favoriteData",part:"MetricsExplorerPartReference"}]},
{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]},{property:"editScopeId",
valuesFrom:[{referenceType:1,property:"editScopeId"}]}]}]},{name:"MetricsExplorerEditBladeCommands",
commands:[{name:"RemoveChartCommand",text:i.metricsExplorerRemoveChartCommand,viewModel:"MetricsExplorer$RemoveChartCommandViewModel",
commandKind:0,bindings:[{property:"MetricsExplorerJsonDefinitionId",valuesFrom:[{referenceType:1,property:
"MetricsExplorerJsonDefinitionId"}]},{property:"MetricsExplorerSelectedChartId",valuesFrom:[{referenceType:
1,property:"MetricsExplorerSelectedChartId"}]},{property:"BladeId",valuesFrom:[{referenceType:1,property:
"BladeId"}]},{property:"ComponentId",valuesFrom:[{referenceType:1,property:"ComponentId"}]}]}]}],htmlTemplates:
{pdc7cff3f5cd4b642569fce6790966fe77d:"<div style=\"width:100%; margin-top:10px;\" data-bind='pcGrid: favoritesGrid'><\/div> ",
pdc9556ae659aeb4943964fe46d3883b606:'<div class="msportalfx-pannable-all-children ext-quickstart"> <div data-bind="visible: showQuickStartText"> <div class="ext-quickstart-section-header"> <h2 data-bind="text: welcomeSectionTitle"><\/h2> <\/div> <div data-bind="visible: showQuickStartFromVsDescription"> <h3 data-bind="text: quickStartFromVsDescription"><\/h3> <\/div> <!-- first block --> <ul data-bind="foreach: quickStartInfoFirstSection"> <li class="ext-quickstart-listitem" data-bind="visible: isVisible"> <div class="ext-quickstart-add-section"> <div> <div class="ext-quickstart-leftcolumn-icon" data-bind="image: icon"><\/div> <\/div> <div class="ext-quickstart-add-rightcolumn"> <div> <h2 data-bind="text: title"><\/h2> <\/div> <div data-bind="text: description"><\/div> <ul class="ext-quickstart-links msportalfx-removeDefaultListStyle" data-bind="foreach: linkData"> <!-- ko if: $data.uri --> <li> <span> <a data-bind="text: $data.text, attr: { href: $data.uri }" target="_blank"><\/a> <\/span> <div class="ext-quickstart-help-linkImage" data-bind="image: linkImage"><\/div> <\/li> <!-- /ko --> <!-- ko if: $data.selectable --> <li> <div class="ext-quickstart-removepadding" data-bind="pcHotSpot: $data.selectable"> <span data-bind=\'text: $data.text\'><\/span> <div class="ext-quickstart-help-linkImage" data-bind=\'image: linkImage\'><\/div> <\/div> <\/li> <!-- /ko --> <\/ul> <\/div> <\/div> <\/li> <\/ul> <div data-bind="visible: showQuickStartRedfieldText"> <img class="ext-quickstart-separator" data-bind=\'attr : {src: separatorDataImagePath }\'/> <div class="ext-quickstart-section-header"> <h2 data-bind="text: quickStartFromServerTitle"><\/h2> <\/div> <div> <h3 data-bind="text: quickStartFromServerDescription"><\/h3> <\/div> <\/div> <ul data-bind="foreach: quickStartInfoSecondSection"> <li class="ext-quickstart-listitem" data-bind="visible: isVisible"> <div class="ext-quickstart-add-section"> <div> <div class="ext-quickstart-leftcolumn-icon" data-bind="image: icon"><\/div> <\/div> <div class="ext-quickstart-add-rightcolumn"> <div> <h2 data-bind="text: title"><\/h2> <\/div> <div data-bind="text: description"><\/div> <ul class="ext-quickstart-links msportalfx-removeDefaultListStyle" data-bind="foreach: linkData"> <!-- ko if: $data.uri --> <li> <span> <a data-bind="text: $data.text, attr: { href: $data.uri }" target="_blank"><\/a> <\/span> <div class="ext-quickstart-help-linkImage" data-bind="image: linkImage"><\/div> <\/li> <!-- /ko --> <!-- ko if: $data.selectable --> <li> <span class="ext-quickstart-removepadding" data-bind="pcHotSpot: $data.selectable, text: $data.text"><\/span> <div class="ext-quickstart-help-linkImage" data-bind="image: linkImage"><\/div> <\/li> <!-- /ko --> <\/ul> <\/div> <\/div> <\/li> <\/ul> <\/div> <\/div>',
pdc5e1442d415bb46a2a8173f6b3fbee73b:'<!-- ko if: size() == MsPortalFx.Parts.PartSize.FullWidthFitHeight --> <div data-bind="visible: isViewModelVisible"> <p>Custom events enable you capture and analyze key user interactions. Get started using the simple steps below.<\/p> <table class="msportalfx-removeTableBorders" style="width:400px;"> <tbody style="vertical-align:bottom;"> <tr> <td style="width:15%; vertical-align: top;"> <span class="msportalfx-number-jumbo">1<\/span> <\/td> <td> <div><h3 data-bind="text: firstTitle"><\/h3><\/div> <div data-bind="text: firstDescription"><\/div> <div data-bind="formElement: webLanguageSelectOptionGroup, visible: isWebType" style="margin-top: 10px; margin-bottom: 0;"><\/div> <div data-bind="formElement: javaLanguageSelectOptionGroup, visible: isJavaType" style="margin-top: 10px; margin-bottom: 0;"><\/div> <br data-bind = "visible: isCSharpOrJavaSelected"/> <\/td> <\/tr> <tr> <td style="width:15%;"> <\/td> <td> <span data-bind="text: topText, visible: isWebTypeOrJavaType"><\/span> <a data-bind="attr: { href: url}, text: linkDescription , visible: isWebTypeOrJavaType" target="_blank"><\/a> <span data-bind="text: restTopText , visible: isWebTypeOrJavaType"><\/span> <\/td> <\/tr> <tr> <td style="width: 15%;"><\/td> <td> <div style="width:450px" data-bind=\'pcMultiLineTextBox: script\'><\/div> <\/td> <\/tr> <tr style="height:70px;  border-top: 1px solid #F2F2F2;"> <td style="width:15%;  vertical-align: top;"> <span class="msportalfx-number-jumbo">2<\/span> <\/td> <td> <div><h3 data-bind="text: secondTitle"><\/h3><\/div> <div data-bind="text: secondDescription"><\/div> <\/td> <\/tr> <tr style="height:20px; border-top: 1px solid #F2F2F2;" > <td style="width:15%;"><\/td> <td> <br/> <span> <a data-bind="text: urlInformation.text, attr: { href: urlInformation.uri }" target="_blank"><\/a> <\/span> <div class="ext-quickstart-help-linkImage" data-bind="image: urlInformation.linkImage"><\/div> <\/td> <\/tr> <\/tbody> <\/table> <\/div> <!-- /ko -->',
pdc90acdacca0434a2d9876ba2d880be947:'<div> <h4 data-bind="text: javaWebLogConfigurationDescriptions"><\/h4> <\/div>',
pdcb7e71e67f639452f956aa6453241c8b4:'<div class="msportalfx-form msportalfx-form-full"> <p> <div style="margin-bottom: 0px;  margin-left:70px; padding-bottom: 0px;"> <div data-bind="formElement: javaClientSelectOptionsGroup"><\/div> <\/div> <\/p> <p> <div style="margin-bottom: 0px; margin-left:70px; padding-bottom: 0px;height: 135px;width: 450px; border-style: solid; border-width:thin;border-color:darkgray"> <div data-bind="pcEditor: logConfigurationCodeMultiLineScript"><\/div> <\/div> <\/p> <\/div>',
pdc4a31c01b7ab042aaa9c721ef85b1f379:'<div data-bind="pcNotice: $root"><\/div>',pdceef1754b62bd4292ac59f32dd2908843:
"<div data-bind='formElement: attachForm'/>",pdcf7933e1cf4b84f1486fbab64dd508c44:'<div data-bind="pcGrid: settingList"><\/div>',
pdcd62ed4f567454ac68d5a9fb7a42fe9cd:'<!-- ko if: size() == MsPortalFx.Parts.PartSize.FullWidthFitHeight --> <div class="msportalfx-removepartpaddingside" style="height: 600px;"> <div data-bind="pcEditor: configurationScript"><\/div> <\/div> <!-- /ko -->',
pdcf31085acde5c48c08d209bd84b44e4c7:'<!-- ko if: favoritePane.showFavoritePane() --> <div style="padding-bottom:5px"> <div style="width:100%; height: 5px" data-bind=\'pcProgressBar: favoritePane.favoriteProgressBar, visible: favoritePane.isFavoriteProgressVisible\'><\/div> <div data-bind="pcToolbar: favoritePane.favoriteToolBarVM"><\/div> <div style="padding-bottom:7px" data-bind="formElement: favoritePane.favoriteNameTextBox"><\/div> <div style="height:50px; display: inline-block" data-bind="formElement: favoritePane.favoritePrivacyDropDown"><\/div> <div style="height:50px; display: inline-block; padding-left: 20%" data-bind="formElement: favoritePane.favoriteTimeDropDown"><\/div> <\/div> <!-- /ko --> <!-- ko if: displayTimeRangeWarning() --> <div style="margin-top: 10px;margin-bottom: 10px;" class="msportalfx-bgcolor-paletteLightGray" data-bind="pcHotSpot: openTimeRangeSpot"> <div data-bind="image: MsPortalFx.Base.Images.StatusBadge.Warning()" class="ext-small-icon ext-create-message" style="padding: 5px"><\/div> <span data-bind=\'text: timeRangeWarningString\' class="ext-create-message" style="width: auto; padding: 5px 5px 0px 5px;"><\/span> <div style="clear:both;"><\/div> <\/div> <!-- /ko --> <span data-bind=\'text: searchLabel\'><\/span> <div data-bind=\'pcDockedBalloon: infoBalloonViewModel\'><\/div> <div style="width:100%" data-bind="formElement: searchTextBoxVM"><\/div> <div style="width:94%; height: 5px" data-bind=\'pcProgressBar: searchProgressBar, visible: searchInProgress\'><\/div> <!-- ko if: hasData() --> <div data-bind="visible: searchResultsTotalCount() != null"> <!-- ko with: filtersSummary --> <span data-bind=" text: searchResultFilterText"><\/span> <!-- ko foreach: searchResultEvents() --> <span class="msportalfx-bgcolor-k0t2" style="margin: 5px 5px 0px 0px; padding: 1px 0px 2px 5px; white-space: nowrap;"> <span class="msportalfx-text-white msportalfx-text-ellipsis" style="padding:0px; height: 20px; border:none; min-width: 5px; vertical-align: middle" data-bind="text: eventName, pcButton: openFilterVM"><\/span> <span class="msportalfx-removepartpadding msportalfx-text-white msportalfx-text-regular" style="margin: 5px 0px 0px; padding: 3px 0px; border: none; width: 15px; height: 18px; min-width: 15px;" data-bind="pcButton: removeEventVM, visible: $root.canRemoveEvent">x<\/span> <\/span> <!--   /ko --> <span data-bind="visible: searchResultFacetsFilter().length > 0" style="padding: 3px 0px"> <span data-bind=" text: searchResultFacetsFilterText"><\/span> <!-- ko foreach: searchResultFacetsFilter() --> <!-- ko foreach: values --> <span class="msportalfx-bgcolor-k0t2 ext-filter-tag"> <span class="ext-filter-infoballoon" data-bind="pcDockedBalloon: infoBalloonViewModel()"><\/span> <span class="msportalfx-text-white msportalfx-text-ellipsis ext-filter-text" data-bind="text: facetValue, pcButton: openFilterVM"><\/span> <span class="msportalfx-text-white msportalfx-text-regular ext-filter-close" data-bind="pcButton: removeFaceValueVM">x<\/span> <\/span> <!--   /ko --> <!--   /ko --> <\/span> <!--   /ko --> <\/div> <!-- /ko --> <!-- ko if: hasTimelineItems() --> <div class=\'msportalfx-layoutChildren-horizontal-inlineblock\'> <div style="height:200px; padding-top:10px; width: 100%" data-bind=\'pcChart: barChartVM\' class=\'msportalfx-layoutChildren-child\'><\/div> <\/div> <!-- /ko --> <div style="width:100%; margin-top:10px" data-bind=\'pcGrid: $data\'><\/div> ',
pdc98a6d332309c4faa8719dad7260b1c96:'<!-- ko ifnot: ready() --> <div style="width:100%" data-bind=\'pcProgressBar: progressBar\'><\/div> <!-- /ko --> <div> <!-- ko foreach: allFacets() --> <table class="ext-search-filter-facet-table"> <thead> <tr> <th colspan="3" class=\'msportalfx-text-header\' data-bind="text: displayName" style="text-align:left; width: 100%"/> <th colspan="3" style="text-align:right"><div data-bind="pcDockedBalloon: infoBalloonViewModel" style="text-align:right"><\/div><\/th> <\/tr> <\/thead> <tbody data-bind="foreach: facetValues()"> <tr> <td style="width:10%"><div data-bind="pcCheckBox: checkBoxViewModel"><\/div><\/td> <td style="width:75%" data-bind="text: displayName()"><\/td> <td colspan="2" style="width:15%; text-align:right" data-bind="text: totalNumber()"><\/td> <\/tr> <\/tbody> <\/table> <!-- /ko --> <div class=\'msportalfx-text-header\' style=\'display: block; padding-bottom: 10px; padding-top: 10px;\' data-bind="text: propertiesTitle"><\/div> <!-- ko ifnot: facetsLoadingFailedText() --> <div style="width:100%; padding-bottom: 5px;" data-bind="pcTextBox: searchTextBoxVM"><\/div> <!-- ko ifnot: noFacetsFoundText() --> <div style=\'padding-bottom: 10px;\' data-bind=\'pcTreeView: treeViewVM\'><\/div> <!-- /ko --> <!-- ko if: noFacetsFoundText() --> <div style=\'padding-top: 5px;\' data-bind="text: noFacetsFoundText()"><\/div> <!-- /ko --> <!-- ko if: parentBlade() === "SearchExplorer" --> <table class="ext-search-filter-facet-table"> <thead> <tr> <th class=\'msportalfx-text-header\' data-bind="text: searchFiltersSettingsDisplayName" style="text-align:left; width: 100%"/> <\/tr> <\/thead> <tbody> <tr> <td><div data-bind="formElement: permissiveFiltersCheckBox"><\/div><\/td> <\/tr> <\/tbody> <\/table> <!-- /ko --> <!-- /ko --> <div data-bind="text: facetsLoadingFailedText()"><\/div> <\/div> ',
pdc589fa78ef386431fa99981b756c8b3b7:"<div data-bind=\"pcToolbar: toolbarVM\"><\/div> <!-- ko ifnot: isGrouped --> <div data-bind='pcGrid: propertiesGrid'><\/div> <!-- /ko --> <!-- ko if: isGrouped --> <div data-bind='pcGrid: groupedPropertiesGrid'><\/div> <!-- /ko -->",
pdcd99f0e6bf42a4366ba12abf0ebfdc567:'<div data-bind="pcListView: timeRangeListViewViewModel"><\/div>',
pdc81817d34e5c6444fa5027575fa5a0978:"<!-- ko ifnot: ready() --> <div style=\"width:100%\" data-bind='pcProgressBar: progressBar'><\/div> <!-- /ko --> <!-- ko if: notFoundText() --> <div style=\"margin: 10px 10px 0px 10px;\" class=\"msportalfx-bgcolor-paletteLightGray\"> <div data-bind=\"image: MsPortalFx.Base.Images.Warning()\" class=\"ext-large-icon ext-create-message\"><\/div> <span data-bind='text: notFoundText' class=\"ext-create-message\" style=\"width: 80%; padding: 5px 5px 0px 5px;\"><\/span> <div style=\"clear:both;\"><\/div> <\/div> <!-- /ko --> <!-- ko ifnot: notFoundText() --> <div> <!-- top N section --> <div style='display: block; padding-bottom: 12px'> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px' data-bind=\"text: propertiesTitle\"><\/span> <div data-bind='pcGrid: topNGrid.gridViewModel'><\/div> <!-- ko if:topNGrid.hasMoreData() --> <div data-bind=\"pcHotSpot: topNGrid.selectable\" style='position: absolute; right: 0; width: 30px;height: 20px;padding: 0;vertical-align: middle;'> <div style=\"text-align: center;\">&#8230<\/div> <\/div> <!-- /ko --> <\/div> <!-- ko if: hasCustomProperties() --> <div style='display: block; padding-bottom: 12px;padding-top:30px'> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px' data-bind=\"text: customPropertiesTitle\"><\/span> <div data-bind='pcGrid: customPropertiesTopNGrid.gridViewModel'><\/div> <\/div> <!-- /ko --> <!-- related items section --> <!-- ko if: hasRelatedItems() --> <div> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px; padding-top:30px' data-bind=\"text: relatedItemsTitle\"><\/span> <div data-bind='pcGrid: relatedItemsGrid.gridViewModel'><\/div> <\/div> <!-- /ko --> <\/div> <!-- /ko -->",
pdc50e56e0308d14cc39011532cf04c6924:"<!-- ko ifnot: ready() --> <div style=\"width:100%\" data-bind='pcProgressBar: progressBar'><\/div> <!-- /ko --> <!-- ko if: notFoundText() --> <div style=\"margin: 10px 10px 0px 10px;\" class=\"msportalfx-bgcolor-paletteLightGray\"> <div data-bind=\"image: MsPortalFx.Base.Images.Warning()\" class=\"ext-large-icon ext-create-message\"><\/div> <span data-bind='text: notFoundText' class=\"ext-create-message\" style=\"width: 80%; padding: 5px 5px 0px 5px;\"><\/span> <div style=\"clear:both;\"><\/div> <\/div> <!-- /ko --> <!-- ko ifnot: notFoundText() --> <div> <!-- top N section --> <div style='display: block; padding-bottom: 12px'> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px' data-bind=\"text: propertiesTitle\"><\/span> <div data-bind='pcGrid: topNGrid.gridViewModel'><\/div> <!-- ko if:topNGrid.hasMoreData() --> <div data-bind=\"pcHotSpot: topNGrid.selectable\" style='position: absolute; right: 0; width: 30px;height: 20px;padding: 0;vertical-align: middle;'> <div style=\"text-align: center;\">&#8230<\/div> <\/div> <!-- /ko --> <\/div> <!-- ko if: hasCustomProperties() --> <div style='display: block; padding-bottom: 12px;padding-top:30px'> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px' data-bind=\"text: customPropertiesTitle\"><\/span> <div data-bind='pcGrid: customPropertiesTopNGrid.gridViewModel'><\/div> <\/div> <!-- /ko --> <!-- all of the exceptions inside this exception --> <!-- ko if: hasExceptions()  --> <div> <div style='display: block; padding-bottom: 4px; padding-top: 24px; position: relative;'> <span class='msportalfx-text-createsectionheader' data-bind=\"text: allExceptionsTitle\"><\/span> <!-- ko if: hasFullStack() --> <div style=\"position: absolute; right: 0; bottom: 4px;\"><div data-bind='pcCheckBox: justMyCodeCheckBox'><\/div> <span data-bind=\"text: justMyCodeText\"><\/span><\/div> <!-- /ko --> <\/div> <!-- ko if: hasFullStack() --> <div data-bind='pcGrid: allExceptionsStackFramesGrid'><\/div> <!-- /ko --> <!-- ko ifnot: hasFullStack() --> <pre class=\"msportalfx-code\"><code data-bind=\"text: simpleCallStack\"><\/code><\/pre> <!-- /ko --> <\/div> <!-- /ko --> <!-- related items section --> <!-- ko if: hasRelatedItems() --> <div> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px; padding-top:24px' data-bind=\"text: relatedItemsTitle\"><\/span> <div data-bind='pcGrid: relatedItemsGrid.gridViewModel'><\/div> <\/div> <!-- /ko --> <\/div> <!-- /ko --> ",
pdc2b8262f0e44349e5a4cf76312fc0d4ca:"<!-- ko ifnot: ready() --> <div style=\"width:100%\" data-bind='pcProgressBar: progressBar'><\/div> <!-- /ko --> <!-- ko if: notFoundText() --> <div style=\"margin: 10px 10px 0px 10px;\" class=\"msportalfx-bgcolor-paletteLightGray\"> <div data-bind=\"image: MsPortalFx.Base.Images.Warning()\" class=\"ext-large-icon ext-create-message\"><\/div> <span data-bind='text: notFoundText' class=\"ext-create-message\" style=\"width: 80%; padding: 5px 5px 0px 5px;\"><\/span> <div style=\"clear:both;\"><\/div> <\/div> <!-- /ko --> <!-- ko ifnot: notFoundText() --> <div> <!-- top N section --> <div style='display: block; padding-bottom: 12px'> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px' data-bind=\"text: propertiesTitle\"><\/span> <div data-bind='pcGrid: topNGrid.gridViewModel'><\/div> <!-- ko if:topNGrid.hasMoreData() --> <div data-bind=\"pcHotSpot: topNGrid.selectable\" style='position: absolute; right: 0; width: 30px;height: 20px;padding: 0;vertical-align: middle;'> <div style=\"text-align: center;\">&#8230<\/div> <\/div> <!-- /ko --> <\/div> <!-- ko if: hasCustomProperties() --> <div style='display: block; padding-bottom: 12px;padding-top:30px'> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px' data-bind=\"text: customPropertiesTitle\"><\/span> <div data-bind='pcGrid: customPropertiesTopNGrid.gridViewModel'><\/div> <\/div> <!-- /ko --> <!-- related items section --> <!-- ko if: hasRelatedItems() --> <div> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px; padding-top:30px' data-bind=\"text: relatedItemsTitle\"><\/span> <div data-bind='pcGrid: relatedItemsGrid.gridViewModel'><\/div> <\/div> <!-- /ko --> <\/div> <!-- /ko -->",
pdc33233f5d607145e0bfafd7437ced2132:"<!-- ko ifnot: ready() --> <div style=\"width:100%\" data-bind='pcProgressBar: progressBar'><\/div> <!-- /ko --> <!-- ko if: notFoundText() --> <div style=\"margin: 10px 10px 0px 10px;\" class=\"msportalfx-bgcolor-paletteLightGray\"> <div data-bind=\"image: MsPortalFx.Base.Images.Warning()\" class=\"ext-large-icon ext-create-message\"><\/div> <span data-bind='text: notFoundText' class=\"ext-create-message\" style=\"width: 80%; padding: 5px 5px 0px 5px;\"><\/span> <div style=\"clear:both;\"><\/div> <\/div> <!-- /ko --> <!-- ko ifnot: notFoundText() --> <div> <!-- top N section --> <div style='display: block; padding-bottom: 12px'> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px' data-bind=\"text: propertiesTitle\"><\/span> <div data-bind='pcGrid: topNGrid.gridViewModel'><\/div> <!-- ko if:topNGrid.hasMoreData() --> <div data-bind=\"pcHotSpot: topNGrid.selectable\" style='position: absolute; right: 0; width: 30px;height: 20px;padding: 0;vertical-align: middle;'> <div style=\"text-align: center;\">&#8230<\/div> <\/div> <!-- /ko --> <\/div> <!-- ko if: hasCustomProperties() --> <div style='display: block; padding-bottom: 12px;padding-top:30px'> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px' data-bind=\"text: customPropertiesTitle\"><\/span> <div data-bind='pcGrid: customPropertiesTopNGrid.gridViewModel'><\/div> <\/div> <!-- /ko --> <!-- knockout here for if failed request items--> <!-- ko if: isFailedRequest() --> <div> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px; padding-top:30px' data-bind=\"text: exceptionSectionTitle\"><\/span> <div> <div data-bind=\"pcGrid: relatedExceptionsGrid\"><\/div> <\/div> <\/div> <!-- /ko --> <!-- end failed request--> <!-- ko if: hasRemoteDependencies() --> <div> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px; padding-top:30px' data-bind=\"text: dependenciesSectionTitle\"><\/span> <div> <div data-bind=\"pcGrid: remoteDependenciesGrid\"><\/div> <\/div> <\/div> <!-- /ko --> <!-- related items section --> <!-- ko if: hasRelatedItems() --> <div> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px; padding-top:30px' data-bind=\"text: relatedItemsTitle\"><\/span> <div data-bind='pcGrid: relatedItemsGrid.gridViewModel'><\/div> <\/div> <!-- /ko --> <\/div> <!-- /ko -->",
pdca1d194c706dd4a52925d93260552f0f4:"<!-- ko ifnot: ready() --> <div style=\"width:100%\" data-bind='pcProgressBar: progressBar'><\/div> <!-- /ko --> <!-- ko if: notFoundText() --> <div style=\"margin: 10px 10px 0px 10px;\" class=\"msportalfx-bgcolor-paletteLightGray\"> <div data-bind=\"image: MsPortalFx.Base.Images.Warning()\" class=\"ext-large-icon ext-create-message\"><\/div> <span data-bind='text: notFoundText' class=\"ext-create-message\" style=\"width: 80%; padding: 5px 5px 0px 5px;\"><\/span> <div style=\"clear:both;\"><\/div> <\/div> <!-- /ko --> <!-- ko ifnot: notFoundText() --> <div> <!-- top N section --> <div style='display: block; padding-bottom: 12px'> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px' data-bind=\"text: propertiesTitle\"><\/span> <div data-bind='pcGrid: topNGrid.gridViewModel'><\/div> <!-- ko if:topNGrid.hasMoreData() --> <div data-bind=\"pcHotSpot: topNGrid.selectable\" style='position: absolute; right: 0; width: 30px;height: 20px;padding: 0;vertical-align: middle;'> <div style=\"text-align: center;\">&#8230<\/div> <\/div> <!-- /ko --> <\/div> <!-- ko if: hasCustomProperties() --> <div style='display: block; padding-bottom: 12px;padding-top:30px'> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px' data-bind=\"text: customPropertiesTitle\"><\/span> <div data-bind='pcGrid: customPropertiesTopNGrid.gridViewModel'><\/div> <\/div> <!-- /ko --> <!-- related items section --> <!-- ko if: hasRelatedItems() --> <div> <span class='msportalfx-text-createsectionheader' style='display: block; padding-bottom: 4px; padding-top:30px' data-bind=\"text: relatedItemsTitle\"><\/span> <div data-bind='pcGrid: relatedItemsGrid.gridViewModel'><\/div> <\/div> <!-- /ko --> <\/div> <!-- /ko --> ",
pdcb48f34b6f8a44f1cb4b3388b792cd3a1:'<div data-bind="fxParameterCollector: $root"><\/div> <div class="msportalfx-form"> <div data-bind="formElement: generalSection"> <div data-bind="formElement: applicationNameField"><\/div> <div data-bind="formElement: applicationTypeField"><\/div> <div data-bind="formElement: resourceGroupField"><\/div> <div data-bind="formElement: subscriptionField"><\/div> <div data-bind="formElement: regionSelector"><\/div> <\/div> <\/div> ',
pdc1b1315b0925f441b868b5ca520985665:'<div data-bind="pcPicker: $root"><\/div>',pdca25f55fb7c444583a9b16328fea5c605:
'<!-- ko if: showUpsellMessage() --> <div> <table> <tbody> <tr> <td data-bind="image: upsellIcon" class="ext-create-message" style="margin: 10px 10px 0px; height: 44px; width: 44px;"><\/td> <td> <div class="msportalfx-bgcolor-paletteLightGray" style="margin: 10px 0px 0px; height: 46px; width: 120%;"> <span data-bind=\'text: upsellMessage\' class="ext-create-message" style="width: 80%; padding: 5px 5px 0px 10px; white-space: pre-line;"><\/span> <br> <div data-bind="pcHotSpot: openBillingBladeSpot" class="msportalfx-bgcolor-paletteLightGray" style="margin-top: 3px"> <span data-bind=\'text:deepLinkText\' style="width: 80%; white-space: pre-line; color:#0099FF"><\/span> <\/div> <\/div> <\/td> <\/tr> <\/tbody> <\/table> <\/div> <!-- /ko -->',
pdc5db4a12ace5640fbb41aa0ba9bdfc757:'<div class="msportalfx-form"> <div data-bind="formElement: createContinuousExportSection"> <div data-bind="formElement: destinationSelector"><\/div> <div data-bind="formElement: eventTypesSelector"><\/div> <\/div> <\/div>',
pdc1c59cf7995ac482cb8e5c0ed7fc47dea:'<div class="msportalfx-form"> <table> <thead> <tr> <th colspan="2" class=\'msportalfx-text-header\' data-bind="text: eventTypesText" style="text-align:left; padding: 10px; width: 100%"/> <\/tr> <\/thead> <tbody data-bind="foreach: eventTypes()"> <tr> <td style="width: 38%; margin-bottom: -50px"> <table> <tr> <td style="padding-left: 10px" data-bind="text: displayName()"><\/td> <td style="text-align: left; margin-left: -3px"><div data-bind="pcDockedBalloon: infoBalloonViewModel"><\/div><\/td> <\/tr> <\/table> <\/td> <td style="width: 62%; margin-bottom: -50px" data-bind="formElement: optionsGroup"><\/td> <\/tr> <\/tbody> <\/table> <\/div>',
pdca540a32177154bb486c5874b2f4330d5:'<div class="msportalfx-form"> <div data-bind="formElement: createContinuousExportSection"> <div data-bind="formElement: destinationSelector"><\/div> <div data-bind="formElement: eventTypesSelector"><\/div> <\/div> <\/div>',
pdc915c3a2eefe54284b2d0e37b74fb1ebb:'<div data-bind="pcChart: $data, click: clickEvent" style="height: 355px"><\/div>',
pdc91f279519a7a4496aca0c1251b800016:'<div style="border: 1px solid #ddd" data-bind="style: { height: editorHeight() }"> <div data-bind="pcEditor: editorVM"><\/div> <\/div>',
pdc09e3060dfb3e4d4689a8c9a2e44b4d6f:'<div style="border: 1px solid #ddd" data-bind="style: { height: editorHeight() }"> <div data-bind="pcEditor: editorVM"><\/div> <\/div>',
pdca5d613881f244897aaca0dc0e7ba88d8:'<div style="border: 1px solid #ddd" data-bind="style: { height: editorHeight() }"> <div data-bind="pcEditor: editorVM"><\/div> <\/div>',
pdc1effa0bcc70e49918ae7d828f944b932:'<div class="msportalfx-form"> <!-- ko if: maxTestsCreated() --> <div style="margin: 10px 10px 0px 10px;" class="msportalfx-bgcolor-paletteLightGray"> <div data-bind="image: MsPortalFx.Base.Images.Warning()" class="ext-large-icon ext-create-message"><\/div> <span data-bind=\'text: maxTestsMessage\' class="ext-create-message" style="width: 80%; padding: 5px 5px 0px 5px;"><\/span> <div style="clear:both;"><\/div> <\/div> <!-- /ko --> <!-- ko ifnot: skuCanCreateTests() --> <div style="margin: 10px 10px 0px 10px;" class="msportalfx-bgcolor-paletteLightGray"> <div data-bind="image: upsellIcon" class="ext-large-icon ext-create-message msportalfx-bgcolor-g0"><\/div> <span data-bind=\'text: upsellMessage\' class="ext-create-message" style="width: 80%; padding: 5px 5px 0px 5px;"><\/span> <div style="clear:both;"><\/div> <\/div> <!-- /ko --> <div data-bind="formElement: testName"><\/div> <div data-bind="formElement: testType"><\/div> <!-- ko ifnot: isMultiStep() --> <div data-bind="formElement: url"><\/div> <!-- /ko --> <!-- ko if: isMultiStep() --> <div class="msportalfx-form-formelement msportalfx-form-fileUploadField"> <div class="msportalfx-form-labelcontainer"> <label data-bind="text: fileFieldText"><\/label> <\/div> <!-- ko if: previousFileMessage() --> <div style="margin: 5px 5px 5px 0px;" class="msportalfx-bgcolor-paletteLightGray"> <span data-bind=\'text: previousFileMessage\' class="ext-create-message" style="width: 80%; padding: 5px 5px 5px 5px;"><\/span> <div style="clear:both;"><\/div> <\/div> <!-- /ko --> <div class="msportalfx-form-elementContainer"> <div data-bind="pcFileUpload: fileUpload"><\/div> <\/div> <\/div> <!-- /ko --> <div data-bind="formElement: locationSelector"><\/div> <div data-bind="formElement: criteriaSelector"><\/div> <div data-bind="formElement: alertSelector"><\/div> <\/div>',
pdce78470ec2baf41bb995b3f4252f175ed:'<div class="msportalfx-form"> <!-- ko if: maxTestsCreated() --> <div style="margin: 10px 10px 0px 10px;" class="msportalfx-bgcolor-paletteLightGray"> <div data-bind="image: MsPortalFx.Base.Images.Warning()" class="ext-large-icon ext-create-message"><\/div> <span data-bind=\'text: maxTestsMessage\' class="ext-create-message" style="width: 80%; padding: 5px 5px 0px 5px;"><\/span> <div style="clear:both;"><\/div> <\/div> <!-- /ko --> <!-- ko ifnot: skuCanCreateTests() --> <div style="margin: 10px 10px 0px 10px;" class="msportalfx-bgcolor-paletteLightGray"> <div data-bind="image: upsellIcon" class="ext-large-icon ext-create-message msportalfx-bgcolor-g0"><\/div> <span data-bind=\'text: upsellMessage\' class="ext-create-message" style="width: 80%; padding: 5px 5px 0px 5px;"><\/span> <div style="clear:both;"><\/div> <\/div> <!-- /ko --> <div data-bind="formElement: testName"><\/div> <div data-bind="formElement: testType"><\/div> <!-- ko ifnot: isMultiStep() --> <div data-bind="formElement: url"><\/div> <!-- /ko --> <!-- ko if: isMultiStep() --> <div class="msportalfx-form-formelement msportalfx-form-fileUploadField"> <div class="msportalfx-form-labelcontainer"> <label data-bind="text: fileFieldText"><\/label> <\/div> <!-- ko if: previousFileMessage() --> <div style="margin: 5px 5px 5px 0px;" class="msportalfx-bgcolor-paletteLightGray"> <span data-bind=\'text: previousFileMessage\' class="ext-create-message" style="width: 80%; padding: 5px 5px 5px 5px;"><\/span> <div style="clear:both;"><\/div> <\/div> <!-- /ko --> <div class="msportalfx-form-elementContainer"> <div data-bind="pcFileUpload: fileUpload"><\/div> <\/div> <\/div> <!-- /ko --> <div data-bind="formElement: locationSelector"><\/div> <div data-bind="formElement: criteriaSelector"><\/div> <div data-bind="formElement: alertSelector"><\/div> <\/div>',
pdca8a480665c6c44998071c4989656945a:'<div style="padding-top: 25px; padding-left: 20px; padding-right: 20px"> <div style="border-bottom: 1px solid #ddd"><\/div> <div data-bind="foreach: { data: locationSection.children, as: \'location\' }"> <div style="padding-top: 10px; padding-bottom: 10px; padding-left: 25px; border-bottom: 1px solid #ddd"> <div data-bind="formElement: location"><\/div> <\/div> <\/div> <\/div>',
pdc541a9659dd234b19881339fbf036f7b7:'<div data-bind="formElement: useHttpStatusCode" style="padding-top: 10px; padding-left: 25px"><\/div> <div class="msportalfx-form"> <div data-bind="formElement: httpStatusCodeValue"><\/div> <\/div> <div data-bind="formElement: useContentMatch" style="padding-left: 25px"><\/div> <div class="msportalfx-form"> <div data-bind="formElement: contentMatchValue"><\/div> <\/div>',
pdc5905aad5cabb43cda79543341a9083b1:'<div data-bind="formElement: state" style="padding-top: 10px; padding-left: 25px"><\/div> <div data-bind="formElement: sensitivity" style="padding-left: 25px"><\/div> <div data-bind="formElement: emailEnabled" style="padding-left: 25px"><\/div> <div class="msportalfx-form"> <div data-bind="formElement: additionalEmail"><\/div> <\/div>',
pdc30522d899c604d7eb262fc972a15618d:'<div style="padding-left:15px" class="msportalfx-form msportalfx-form-full"> <p> <div style="margin: 0px 9% 0px 0px" data-bind="visible: chartTypeIdentified"> <div data-bind="formElement: chartTypeOptionsGroup" style="margin-bottom: 0;"><\/div> <div data-bind="formElement: chartHeightSlider, visible:chartHeightVisible" style="margin-top:10px; margin-bottom: 0;"><\/div> <div data-bind="formElement: priorPeriodOptionGroup" style="margin-top:10px; margin-bottom: 0;"><\/div> <div data-bind="formElement: horizontalBarsOptionGroup, visible: horizontalBarsOptionGroupVisible" style="margin-top:10px; margin-bottom: 0;"><\/div> <div data-bind="formElement: groupingOptionsGroup" style="margin-top:10px; margin-bottom: 0;"><\/div> <div data-bind="formElement: groupingDropdown, visible: groupingDropdownVisible" style="margin-top:10px; margin-bottom: 0;"><\/div> <div style="margin-top:10px"> <!-- specify right side margin slightly bigger to accommodate filter box due to using Blade style Basic --> <!-- specify text-transofrm to none for the label heading case to render as is --> <label class="msportalfx-text-label msportalfx-text-muted-50" style="text-transform: none;" data-bind=\'text: standardMetricsLabel\'><\/label> <div style="padding-top:5px;" data-bind="pcGrid: metricsGridVM"><\/div> <\/div> <\/div> <\/p> <\/div> ',
pdc678666a4e9a5409ea933931ed20fc24c:'<!-- ko if: isDeveloperMode() --> ﻿<div style="padding-left:15px"> <div style="height:250px; width:265px;" data-bind=\'pcMultiLineTextBox: textBoxJsonVM\'><\/div> <div style="height:30px; width:100px; display:block;" data-bind="pcButton: buttonApplyChartVM">Apply<\/div> <div style="height:30px; width:265px; display:block" data-bind=\'pcTextBox: textBoxResultVM\'><\/div> <\/div> <!-- /ko --> ',
pdc1be4e199fba643f9a9b32c94b257f2ad:'<div data-bind="pcNotice: $root"><\/div>',pdcbafc49416db34b658fef2a1cf41a002b:
'<div data-bind="pcNotice: $root"><\/div>',pdc68ce45c61e48400d8bd98a65f8095846:'<div style="margin: 0 0 0 0"> <div> <span class="msportalfx-text-header-regular" data-bind="text: partTitle" style="display: inline-block; padding: 0 0 0 0"><\/span> <span class=\'ext-filter-infoballoon\' data-bind="visible: infoBalloonVisible, pcDockedBalloon: infoBalloonViewModel"><\/span> <\/div> <div style="display: block; float: right"> <span class="ext-small-icon" data-bind="image: trendIcon" style="display: block; float: right"><\/span> <span class="msportalfx-number-medium" data-bind="text: trendValue"><\/span> <span class="msportalfx-number-medium-adorn" data-bind="text: trendUnits"><\/span> <\/div> <\/div>',
pdcdeb1a85b98ff4d16aba91d75731e268e:'<!-- ko if: !isHostedOutsideMetricsExplorerBlade()--> <!-- ko if: favoritePane.showFavoritePane() --> <div style="padding-bottom:5px"> <div style="width:100%; height: 5px" data-bind=\'pcProgressBar: favoritePane.favoriteProgressBar, visible: favoritePane.isFavoriteProgressVisible\'><\/div> <div data-bind="pcToolbar: favoritePane.favoriteToolBarVM"><\/div> <div style="padding-bottom:7px" data-bind="formElement: favoritePane.favoriteNameTextBox"><\/div> <div style="height:50px; display: inline-block" data-bind="formElement: favoritePane.favoritePrivacyDropDown"><\/div> <div style="height:50px; display: inline-block; padding-left: 20%" data-bind="formElement: favoritePane.favoriteTimeDropDown"><\/div> <\/div> <!-- /ko --> <!--If this is hosted inside a ME blade, need to move the title inside the ME part --> <span data-bind="text: inlinePartTitle" class="msportalfx-text-header-regular" style="display: block; padding: 0px 0px 12px 0px;"><\/span> <!-- /ko --> <!-- ko if: displayIllFormedOrNotPresentJSONMessage()--> <!-- If we cannot find JSON from LOCAL MAP or ENTITY CACHE, show a simply message for debugging purpose --> <span data-bind=\'text: illFormedOrNotPresentJSONMessage\' class="ext-create-message" style="width: auto; padding: 5px 5px 0px 5px;"><\/span> <!-- /ko --> <!-- ko if: !displayIllFormedOrNotPresentJSONMessage()--> <!-- ko if: !isHostedOutsideMetricsExplorerBlade()--> <!-- ko if: displayTimeRangeWarning() --> <div style="margin-top: 10px;margin-bottom: 10px;" class="msportalfx-bgcolor-paletteLightGray" data-bind="pcHotSpot: openTimeRangeSpot"> <div data-bind="image: MsPortalFx.Base.Images.StatusBadge.Warning()" class="ext-small-icon ext-create-message" style="padding: 5px"><\/div> <span data-bind=\'text: timeRangeWarningString\' class="ext-create-message" style="width: auto; padding: 5px 5px 0px 5px;"><\/span> <div style="clear:both;"><\/div> <\/div> <!-- /ko --> <!-- /ko --> <!-- ko if: showFilterSummary() --> <!-- ko with: filtersSummary --> <div style="padding-bottom:7px;margin-top:-15px;"> <span data-bind="text: searchResultFilterText"><\/span> <span style="padding: 3px 0px"> <!-- ko foreach: searchResultFacetsFilter() --> <!-- ko foreach: values --> <span class="msportalfx-bgcolor-k0t2 ext-filter-tag"> <span class="ext-filter-infoballoon" data-bind="pcDockedBalloon: infoBalloonViewModel()"><\/span> <span class="msportalfx-text-white msportalfx-text-ellipsis ext-filter-text" data-bind="text: facetValue, pcButton: openFilterVM"><\/span> <span class="msportalfx-text-white msportalfx-text-regular ext-filter-close" data-bind="pcButton: removeFaceValueVM">x<\/span> <\/span> <!--   /ko --> <!--   /ko --> <\/span> <\/div> <!--   /ko --> <!--   /ko --> <!-- Default container title css class fxs-part-title has a fixed height of 49 px which reserves too much space. Moving top margin to adjust for that --> <div style="padding-top: 0px; margin-top: -10px"> <div data-bind="pcPairedTimeline: pairedTimelineVM, css: { \'ext-part-stretch-paired-timeline\': isHostedOutsideMetricsExplorerBlade() }"><\/div> <\/div> <div data-bind="pcListView: listViewViewModel" class="ext-list-view-vm"><\/div> <!-- /ko --> <!-- ko if: developerViewModel --> <!-- ko if: developerViewModel.isDeveloperMode() --> <div style="margin-top: 5px;"> <div style="width: 525px; height: 250px" data-bind=\'pcMultiLineTextBox: developerViewModel.textBoxJsonVM\'><\/div> <div style="width:120px;vertical-align: bottom;float:left;" data-bind="pcButton: developerViewModel.buttonReloadChartVM">Reload Charts<\/div> <div style="width:120px;vertical-align: bottom;" data-bind="pcButton: developerViewModel.buttonSaveChartVM">SaveToCache<\/div> <br> <div style="width:395px;vertical-align: bottom;float:left;padding: 0px 0px 0px 10px;" data-bind=\'pcTextBox: developerViewModel.textBoxResultVM\'><\/div> <\/div> <!-- /ko --> <!-- /ko -->',
pdcbd142efdc7d14913b35d6361d170c067:'<!-- ko if: !isHostedOutsideMetricsExplorerBlade()--> <!-- ko if: favoritePane.showFavoritePane() --> <div style="padding-bottom:5px"> <div style="width:100%; height: 5px" data-bind=\'pcProgressBar: favoritePane.favoriteProgressBar, visible: favoritePane.isFavoriteProgressVisible\'><\/div> <div data-bind="pcToolbar: favoritePane.favoriteToolBarVM"><\/div> <div style="padding-bottom:7px" data-bind="formElement: favoritePane.favoriteNameTextBox"><\/div> <div style="height:50px; display: inline-block" data-bind="formElement: favoritePane.favoritePrivacyDropDown"><\/div> <div style="height:50px; display: inline-block; padding-left: 20%" data-bind="formElement: favoritePane.favoriteTimeDropDown"><\/div> <\/div> <!-- /ko --> <!--If this is hosted inside a ME blade, need to move the title inside the ME part --> <span data-bind="text: inlinePartTitle" class="msportalfx-text-header-regular" style="display: block; padding: 0px 0px 12px 0px;"><\/span> <!-- /ko --> <!-- ko if: displayIllFormedOrNotPresentJSONMessage()--> <!-- If we cannot find JSON from LOCAL MAP or ENTITY CACHE, show a simply message for debugging purpose --> <span data-bind=\'text: illFormedOrNotPresentJSONMessage\' class="ext-create-message" style="width: auto; padding: 5px 5px 0px 5px;"><\/span> <!-- /ko --> <!-- ko if: !displayIllFormedOrNotPresentJSONMessage()--> <!-- ko if: !isHostedOutsideMetricsExplorerBlade()--> <!-- ko if: displayTimeRangeWarning() --> <div style="margin-top: 10px;margin-bottom: 10px;" class="msportalfx-bgcolor-paletteLightGray" data-bind="pcHotSpot: openTimeRangeSpot"> <div data-bind="image: MsPortalFx.Base.Images.StatusBadge.Warning()" class="ext-small-icon ext-create-message" style="padding: 5px"><\/div> <span data-bind=\'text: timeRangeWarningString\' class="ext-create-message" style="width: auto; padding: 5px 5px 0px 5px;"><\/span> <div style="clear:both;"><\/div> <\/div> <!-- /ko --> <!-- /ko --> <!-- ko if: showFilterSummary() --> <!-- ko with: filtersSummary --> <div style="padding-bottom:7px;margin-top:-15px;"> <span data-bind="text: searchResultFilterText"><\/span> <span style="padding: 3px 0px"> <!-- ko foreach: searchResultFacetsFilter() --> <!-- ko foreach: values --> <span class="msportalfx-bgcolor-k0t2 ext-filter-tag"> <span class="ext-filter-infoballoon" data-bind="pcDockedBalloon: infoBalloonViewModel()"><\/span> <span class="msportalfx-text-white msportalfx-text-ellipsis ext-filter-text" data-bind="text: facetValue, pcButton: openFilterVM"><\/span> <span class="msportalfx-text-white msportalfx-text-regular ext-filter-close" data-bind="pcButton: removeFaceValueVM">x<\/span> <\/span> <!--   /ko --> <!--   /ko --> <\/span> <\/div> <!--   /ko --> <!--   /ko --> <!-- Default container title css class fxs-part-title has a fixed height of 49 px which reserves too much space. Moving top margin to adjust for that --> <div style="padding-top: 0px; margin-top: -10px"> <div data-bind="pcPairedTimeline: pairedTimelineVM, css: { \'ext-part-stretch-paired-timeline\': isHostedOutsideMetricsExplorerBlade() }"><\/div> <\/div> <div data-bind="pcListView: listViewViewModel" class="ext-list-view-vm"><\/div> <!-- /ko --> <!-- ko if: developerViewModel --> <!-- ko if: developerViewModel.isDeveloperMode() --> <div style="margin-top: 5px;"> <div style="width: 525px; height: 250px" data-bind=\'pcMultiLineTextBox: developerViewModel.textBoxJsonVM\'><\/div> <div style="width:120px;vertical-align: bottom;float:left;" data-bind="pcButton: developerViewModel.buttonReloadChartVM">Reload Charts<\/div> <div style="width:120px;vertical-align: bottom;" data-bind="pcButton: developerViewModel.buttonSaveChartVM">SaveToCache<\/div> <br> <div style="width:395px;vertical-align: bottom;float:left;padding: 0px 0px 0px 10px;" data-bind=\'pcTextBox: developerViewModel.textBoxResultVM\'><\/div> <\/div> <!-- /ko --> <!-- /ko -->',
pdcaa7ad20e1dae4fb98fa80cd54e46ff2b:"<div> <b><span data-bind='text: optionPickerOverageLabel'><\/span><\/b> <\/div> <div> <div><span class=\"msportalfx-text-muted-50\" data-bind='text: optionPickerOverageExplanation'><\/span><div data-bind='pcDockedBalloon: infoBalloonViewModel'/><\/div> <div style=\"margin-bottom: 0px; margin-top: 10px;\" data-bind=\"formElement: optionPickerOverage\"/> <\/div> <div> <div><span class=\"msportalfx-text-muted-50\" data-bind='text: optionPickerOverageExplanation2'><\/span><\/div> <\/div> "},
styleSheets:[".ext-small-icon{width:16px;height:16px;padding:10px}.ext-medium-icon{width:24px;height:24px;padding:10px}.ext-large-icon{width:24px;height:24px;padding:10px}.ext-create-message{display:inline-block;float:left}.ext-wrapping-text{white-space:normal;word-wrap:break-word}.ext-wrap-and-break{white-space:normal;word-break:break-all}.ext-search-result{padding:6px 0 6px 0}.ext-search-result-3-line-text{word-wrap:break-word;word-break:break-all;overflow:hidden;white-space:normal}.ext-search-filter-facet-table{padding:10px 5px;width:100%;word-break:break-all}.ext-search-filter-facet-table th:not(:first-child),.ext-search-filter-facet-table tr td:not(:first-child){padding:10px 0 0 5px}.ext-search-filter-facet-table tr td:first-child{padding-top:10px}.ext-search-filter-facet-table tr td:last-child{padding:10px 0 0 0}.ext-search-time-range-item{width:90%;padding:10px}.ext-search-custom-time-range-container{padding-left:3%}.ext-search-custom-time-range-form-element{width:68%}.ext-search-metrics-bar{display:inline-block;width:5px;float:left;margin-right:5px;height:100%;overflow:hidden}.ext-filter-tag{margin:5px 5px 0 0;padding:1px 0 2px 0;white-space:nowrap}.ext-filter-infoballoon{height:19px;margin-right:-6px;margin-left:2px;vertical-align:middle}.ext-filter-text{height:20px;min-width:5px;max-width:200px;padding:0;border:none;vertical-align:middle}.ext-filter-close{height:18px;min-width:15px;width:15px;margin:5px 0 0;padding:3px 0;border:none}",
".ext-list-view-vm li>div:nth-of-type(2),.ext-list-view-vm li>svg{display:none}.ext-part-stretch-paired-timeline{width:calc(100% + 14px + 15px);margin:-16px -15px 0 -14px}",
".ext-quickstart{width:auto;margin-bottom:30px;margin-right:10px;margin-left:20px}ext-quickstart-section-header h1{margin-bottom:30px}.ext-quickstart-leftcolumn-icon{display:inline-block;height:50px;width:50px;float:left}.ext-quickstart-add-rightcolumn{width:calc(100% - 50px - 2*25px);margin:0 25px;vertical-align:top;display:inline-block}.ext-quickstart-add-section{margin-bottom:15px;margin-left:-20px}.ext-quickstart-links{display:block;margin-top:8px;margin-bottom:5px}.ext-quickstart-help-linkImage{width:10px;height:10px;padding-left:2px;display:inline-block}.ext-quickstart-separator{margin-left:-50px;margin-bottom:10px}.ext-quickstart-listitem{margin-top:25px;margin-bottom:26px;display:block}.ext-quickstart-removepadding{padding-left:0;padding-right:0}"]};
n.definition=t})(t||(t={}));n.definitionName="AppInsightsExtension";n.getDefinition=u,function(n){var
t,i,r,u,f;(function(n){n.name="Microsoft_Azure_AD"})(t=n.Microsoft_Azure_AD||(n.Microsoft_Azure_AD={
})),function(n){n.name="Microsoft_Azure_Insights";var t;(function(n){var t,i,r,u,f,e,o,s,h,c;(function(
n){n.name="EventsListBlade";var t;(function(n){n.resourceId="resourceId";n.assetName="assetName";n.options=
"options"})(t=n.Inputs||(n.Inputs={}))})(t=n.EventsListBlade||(n.EventsListBlade={})),function(n){n.
name="EventDetailBlade";var t;(function(n){n.assetName="assetName";n.event="event";n.options="options"}
)(t=n.Inputs||(n.Inputs={}))}(i=n.EventDetailBlade||(n.EventDetailBlade={})),function(n){n.name="AlertsListBlade";
var t;(function(n){n.targetResourceIds="targetResourceIds";n.options="options"})(t=n.Inputs||(n.Inputs=
{}))}(r=n.AlertsListBlade||(n.AlertsListBlade={})),function(n){var t,i;n.name="AlertAddBlade",function(
n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(u=n.AlertAddBlade||
(n.AlertAddBlade={})),function(n){n.name="MetricAlertEditBlade";var t;(function(n){n.subscriptionId=
"subscriptionId";n.resourceGroup="resourceGroup";n.ruleName="ruleName";n.targets="targets"})(t=n.Inputs||
(n.Inputs={}))}(f=n.MetricAlertEditBlade||(n.MetricAlertEditBlade={})),function(n){var t,i;n.name="MetricsDetailsBlade",
function(n){n.initQuerySetting="initQuerySetting";n.options="options"}(t=n.Inputs||(n.Inputs={})),function(
n){n.metricQuerySetting="metricQuerySetting"}(i=n.Outputs||(n.Outputs={}))}(e=n.MetricsDetailsBlade||
(n.MetricsDetailsBlade={})),function(n){var t,i;n.name="MetricsChartConfigurationBlade",function(n){
n.initQuerySetting="initQuerySetting"}(t=n.Inputs||(n.Inputs={})),function(n){n.metricQuerySetting="metricQuerySetting"}
(i=n.Outputs||(n.Outputs={}))}(o=n.MetricsChartConfigurationBlade||(n.MetricsChartConfigurationBlade=
{})),function(n){var t,i;n.name="DiagnosticsConfigurationBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(s=n.DiagnosticsConfigurationBlade||(n.DiagnosticsConfigurationBlade=
{})),function(n){n.name="UsageGaugeBlade";var t;(function(n){n.resourceId="resourceId";n.usageMetricName=
"usageMetricName";n.options="options"})(t=n.Inputs||(n.Inputs={}))}(h=n.UsageGaugeBlade||(n.UsageGaugeBlade=
{})),function(n){n.name="EventAlertEditBlade";var t;(function(n){n.subscriptionId="subscriptionId";n.
resourceGroup="resourceGroup";n.ruleName="ruleName";n.targets="targets"})(t=n.Inputs||(n.Inputs={}))}
(c=n.EventAlertEditBlade||(n.EventAlertEditBlade={}))})(t=n.Blades||(n.Blades={}))}(i=n.Microsoft_Azure_Insights||
(n.Microsoft_Azure_Insights={})),function(n){n.name="MicrosoftAzureClassicStorageExtension";var t;(function(
n){var t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt,it,rt;(function(n){var t,i;n.name="AddFileShareWizardBlade",
function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))})(t=n.AddFileShareWizardBlade||
(n.AddFileShareWizardBlade={})),function(n){var t,i;n.name="AddFileShareBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(i=n.AddFileShareBlade||(n.AddFileShareBlade=
{})),function(n){n.name="FileSharesBlade";var t;(function(n){n.classicStorageAccountId="classicStorageAccountId"}
)(t=n.Inputs||(n.Inputs={}))}(r=n.FileSharesBlade||(n.FileSharesBlade={})),function(n){var t,i;n.name=
"ClassicStorageAccountDelete",function(n){n.id="id"}(t=n.Inputs||(n.Inputs={})),function(n){n.actionBarOutput=
"actionBarOutput"}(i=n.Outputs||(n.Outputs={}))}(u=n.ClassicStorageAccountDelete||(n.ClassicStorageAccountDelete=
{})),function(n){n.name="ClassicStorageAccountBlade";var t;(function(n){n.id="id"})(t=n.Inputs||(n.Inputs=
{}))}(f=n.ClassicStorageAccountBlade||(n.ClassicStorageAccountBlade={})),function(n){n.name="ClassicStorageAccountBlade_ZRS";
var t;(function(n){n.id="id"})(t=n.Inputs||(n.Inputs={}))}(e=n.ClassicStorageAccountBlade_ZRS||(n.ClassicStorageAccountBlade_ZRS=
{})),function(n){var t,i;n.name="CreateClassicStorageAccountBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(o=n.CreateClassicStorageAccountBlade||(n.CreateClassicStorageAccountBlade=
{})),function(n){n.name="ClassicStorageAccountPropertiesBlade";var t;(function(n){n.classicStorageAccountId=
"classicStorageAccountId"})(t=n.Inputs||(n.Inputs={}))}(s=n.ClassicStorageAccountPropertiesBlade||(n.
ClassicStorageAccountPropertiesBlade={})),function(n){n.name="ContainersBlade";var t;(function(n){n.
classicStorageAccountId="classicStorageAccountId"})(t=n.Inputs||(n.Inputs={}))}(h=n.ContainersBlade||
(n.ContainersBlade={})),function(n){n.name="KeyManagementBlade";var t;(function(n){n.id="id"})(t=n.Inputs||
(n.Inputs={}))}(c=n.KeyManagementBlade||(n.KeyManagementBlade={})),function(n){n.name="ComingSoonBlade";
var t;(function(n){n.info="info"})(t=n.Inputs||(n.Inputs={}))}(l=n.ComingSoonBlade||(n.ComingSoonBlade=
{})),function(n){n.name="ClassicStorageAccountQuickStartBlade";var t;(function(n){n.classicStorageAccountId=
"classicStorageAccountId"})(t=n.Inputs||(n.Inputs={}))}(a=n.ClassicStorageAccountQuickStartBlade||(n.
ClassicStorageAccountQuickStartBlade={})),function(n){var t,i;n.name="StorageServicePicker",function(
n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(v=n.StorageServicePicker||
(n.StorageServicePicker={})),function(n){var t,i;n.name="StorageAccountPickerBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(y=n.StorageAccountPickerBlade||(n.StorageAccountPickerBlade=
{})),function(n){var t,i;n.name="StorageContainerPickerBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(p=n.StorageContainerPickerBlade||(n.StorageContainerPickerBlade=
{})),function(n){var t,i;n.name="StorageBlobPickerBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(w=n.StorageBlobPickerBlade||(n.StorageBlobPickerBlade=
{})),function(n){var t,i;n.name="AddContainerWizardBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(b=n.AddContainerWizardBlade||(n.AddContainerWizardBlade=
{})),function(n){var t,i;n.name="AddContainerBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(k=n.AddContainerBlade||(n.AddContainerBlade={})),function(n){n.name="EditContainerBlade";
var t;(function(n){n.classicStorageAccountId="classicStorageAccountId";n.containerName="containerName"}
)(t=n.Inputs||(n.Inputs={}))}(d=n.EditContainerBlade||(n.EditContainerBlade={})),function(n){n.name=
"QueuesBlade";var t;(function(n){n.classicStorageAccountId="classicStorageAccountId"})(t=n.Inputs||(n.
Inputs={}))}(g=n.QueuesBlade||(n.QueuesBlade={})),function(n){n.name="TablesBlade";var t;(function(n)
{n.classicStorageAccountId="classicStorageAccountId"})(t=n.Inputs||(n.Inputs={}))}(nt=n.TablesBlade||
(n.TablesBlade={})),function(n){var t,i;n.name="ClassicStorageSpecRecommendationBlade",function(n){n.
collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(tt=n.ClassicStorageSpecRecommendationBlade||
(n.ClassicStorageSpecRecommendationBlade={})),function(n){var t,i;n.name="ClassicStorageSpecPickerBlade",
function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(it=n.ClassicStorageSpecPickerBlade||
(n.ClassicStorageSpecPickerBlade={})),function(n){n.name="ClassicStorageAccountSettingsBlade";var t;
(function(n){n.classicStorageAccountId="classicStorageAccountId"})(t=n.Inputs||(n.Inputs={}))}(rt=n.
ClassicStorageAccountSettingsBlade||(n.ClassicStorageAccountSettingsBlade={}))})(t=n.Blades||(n.Blades=
{}))}(r=n.MicrosoftAzureClassicStorageExtension||(n.MicrosoftAzureClassicStorageExtension={})),function(
n){n.name="WebsitesExtension"}(u=n.WebsitesExtension||(n.WebsitesExtension={})),function(n){n.name="HubsExtension";
var t;(function(n){var t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt,it,rt,ut,ft,et,ot,st,ht,ct,lt,at,
vt,yt,pt,wt,bt,kt,dt,gt,ni;(function(n){n.name="ResourcesWithTagBlade";var t;(function(n){n.tagKey="tagKey";
n.tagValue="tagValue"})(t=n.Inputs||(n.Inputs={}))})(t=n.ResourcesWithTagBlade||(n.ResourcesWithTagBlade=
{})),function(n){n.name="ResourceTagsListBlade";var t;(function(n){n.resourceId="resourceId"})(t=n.Inputs||
(n.Inputs={}))}(i=n.ResourceTagsListBlade||(n.ResourceTagsListBlade={})),function(n){n.name="SubscriptionTagsListBlade"}
(r=n.SubscriptionTagsListBlade||(n.SubscriptionTagsListBlade={})),function(n){n.name="SettingsBlade"}
(u=n.SettingsBlade||(n.SettingsBlade={})),function(n){var t,i;n.name="LanguageSelectionBlade",function(
n){n.actionBarInput="actionBarInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.actionBarOutput="actionBarOutput";
n.value="value"}(i=n.Outputs||(n.Outputs={}))}(f=n.LanguageSelectionBlade||(n.LanguageSelectionBlade=
{})),function(n){n.name="ResourceMapBlade";var t;(function(n){n.assetOwner="assetOwner";n.assetType=
"assetType";n.assetId="assetId"})(t=n.Inputs||(n.Inputs={}))}(e=n.ResourceMapBlade||(n.ResourceMapBlade=
{})),function(n){n.name="ResourceListBlade";var t;(function(n){n.resource="resource";n.filter="filter";
n.band="band"})(t=n.Inputs||(n.Inputs={}))}(o=n.ResourceListBlade||(n.ResourceListBlade={})),function(
n){n.name="DeploymentsListBlade";var t;(function(n){n.resourceGroup="resourceGroup"})(t=n.Inputs||(n.
Inputs={}))}(s=n.DeploymentsListBlade||(n.DeploymentsListBlade={})),function(n){n.name="DeploymentDetailsBlade";
var t;(function(n){n.deploymentId="deploymentId"})(t=n.Inputs||(n.Inputs={}))}(h=n.DeploymentDetailsBlade||
(n.DeploymentDetailsBlade={})),function(n){n.name="ResourceGroupMapBlade";var t;(function(n){n.id="id"}
)(t=n.Inputs||(n.Inputs={}))}(c=n.ResourceGroupMapBlade||(n.ResourceGroupMapBlade={})),function(n){n.
name="ResourceGroupQuickStartBlade";var t;(function(n){n.resourceGroup="resourceGroup"})(t=n.Inputs||
(n.Inputs={}))}(l=n.ResourceGroupQuickStartBlade||(n.ResourceGroupQuickStartBlade={})),function(n){n.
name="ResourceGroupPropertiesBlade";var t;(function(n){n.resourceGroup="resourceGroup"})(t=n.Inputs||
(n.Inputs={}))}(a=n.ResourceGroupPropertiesBlade||(n.ResourceGroupPropertiesBlade={})),function(n){n.
name="ResourceGroupListBlade";var t;(function(n){n.resourceGroup="resourceGroup";n.filter="filter";n.
band="band"})(t=n.Inputs||(n.Inputs={}))}(v=n.ResourceGroupListBlade||(n.ResourceGroupListBlade={})),
function(n){n.name="ResourceGroupEventsBlade";var t;(function(n){n.id="id"})(t=n.Inputs||(n.Inputs={
}))}(y=n.ResourceGroupEventsBlade||(n.ResourceGroupEventsBlade={})),function(n){var t,i;n.name="ResourceGroupDeleteBlade",
function(n){n.resourceGroup="resourceGroup"}(t=n.Inputs||(n.Inputs={})),function(n){n.actionBarOutput=
"actionBarOutput"}(i=n.Outputs||(n.Outputs={}))}(p=n.ResourceGroupDeleteBlade||(n.ResourceGroupDeleteBlade=
{})),function(n){n.name="ManagementTeamBlade";var t;(function(n){n.subscriptionId="subscriptionId"})
(t=n.Inputs||(n.Inputs={}))}(w=n.ManagementTeamBlade||(n.ManagementTeamBlade={})),function(n){n.name=
"ServicesHealthBlade"}(b=n.ServicesHealthBlade||(n.ServicesHealthBlade={})),function(n){n.name="ServiceBlade";
var t;(function(n){n.serviceId="serviceId"})(t=n.Inputs||(n.Inputs={}))}(k=n.ServiceBlade||(n.ServiceBlade=
{})),function(n){n.name="ServiceRegionBlade";var t;(function(n){n.serviceRegionId="serviceRegionId"}
)(t=n.Inputs||(n.Inputs={}))}(d=n.ServiceRegionBlade||(n.ServiceRegionBlade={})),function(n){var t,i;
n.name="RegionPickerBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(g=n.RegionPickerBlade||(n.RegionPickerBlade={})),function(n){var t,i;n.name="ResourceGroupPickerBlade",
function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(nt=n.ResourceGroupPickerBlade||
(n.ResourceGroupPickerBlade={})),function(n){var t,i;n.name="CreateResourceGroupBlade",function(n){n.
collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(tt=n.CreateResourceGroupBlade||
(n.CreateResourceGroupBlade={})),function(n){var t,i;n.name="SubscriptionPickerBlade",function(n){n.
collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(it=n.SubscriptionPickerBlade||
(n.SubscriptionPickerBlade={})),function(n){n.name="WhatsNewBlade"}(rt=n.WhatsNewBlade||(n.WhatsNewBlade=
{})),function(n){n.name="HelpAndSupportBlade"}(ut=n.HelpAndSupportBlade||(n.HelpAndSupportBlade={})),
function(n){n.name="NoSubscriptionsBlade"}(ft=n.NoSubscriptionsBlade||(n.NoSubscriptionsBlade={})),function(
n){n.name="NoMsdnOfferOnSubscriptionsBlade"}(et=n.NoMsdnOfferOnSubscriptionsBlade||(n.NoMsdnOfferOnSubscriptionsBlade=
{})),function(n){n.name="TourBlade"}(ot=n.TourBlade||(n.TourBlade={})),function(n){n.name="TourBladesBlade"}
(st=n.TourBladesBlade||(n.TourBladesBlade={})),function(n){n.name="TourCustomizingBlade"}(ht=n.TourCustomizingBlade||
(n.TourCustomizingBlade={})),function(n){n.name="HelpBlade"}(ct=n.HelpBlade||(n.HelpBlade={})),function(
n){n.name="GalleryMenuBlade";var t;(function(n){n.selectedMenuItemId="selectedMenuItemId"})(t=n.Inputs||
(n.Inputs={}))}(lt=n.GalleryMenuBlade||(n.GalleryMenuBlade={})),function(n){n.name="GalleryFeaturedMenuItemBlade";
var t;(function(n){n.selectedMenuItemId="selectedMenuItemId"})(t=n.Inputs||(n.Inputs={}))}(at=n.GalleryFeaturedMenuItemBlade||
(n.GalleryFeaturedMenuItemBlade={})),function(n){var t,i;n.name="GalleryItemDetailsBlade",function(n)
{n.galleryItem="galleryItem";n.resourceGroupId="resourceGroupId";n.resourceGroupLocation="resourceGroupLocation";
n.actionBarInput="actionBarInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.stepOutput="stepOutput"}
(i=n.Outputs||(n.Outputs={}))}(vt=n.GalleryItemDetailsBlade||(n.GalleryItemDetailsBlade={})),function(
n){n.name="GalleryResultsListBlade";var t;(function(n){n.selectedSubMenuItemId="selectedSubMenuItemId"}
)(t=n.Inputs||(n.Inputs={}))}(yt=n.GalleryResultsListBlade||(n.GalleryResultsListBlade={})),function(
n){n.name="GalleryLaunchCreateFailedBlade";var t;(function(n){n.galleryItem="galleryItem"})(t=n.Inputs||
(n.Inputs={}))}(pt=n.GalleryLaunchCreateFailedBlade||(n.GalleryLaunchCreateFailedBlade={})),function(
n){var t,i;n.name="PricingSummaryBlade",function(n){n.galleryPricingInfo="galleryPricingInfo";n.galleryItem=
"galleryItem"}(t=n.Inputs||(n.Inputs={})),function(n){n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs=
{}))}(wt=n.PricingSummaryBlade||(n.PricingSummaryBlade={})),function(n){var t,i;n.name="LegalTermsBlade",
function(n){n.galleryPricingInfo="galleryPricingInfo";n.galleryItem="galleryItem"}(t=n.Inputs||(n.Inputs=
{})),function(n){n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(bt=n.LegalTermsBlade||(n.LegalTermsBlade=
{})),function(n){var t,i;n.name="LegalTermsDetailsBlade",function(n){n.id="id";n.title="title";n.displayName=
"displayName";n.htmlContent="htmlContent"}(t=n.Inputs||(n.Inputs={})),function(n){n.stepOutput="stepOutput";
n.hasErrors="hasErrors"}(i=n.Outputs||(n.Outputs={}))}(kt=n.LegalTermsDetailsBlade||(n.LegalTermsDetailsBlade=
{})),function(n){n.name="NotificationsBlade"}(dt=n.NotificationsBlade||(n.NotificationsBlade={})),function(
n){n.name="BrowseAllBlade"}(gt=n.BrowseAllBlade||(n.BrowseAllBlade={})),function(n){n.name="BrowseServiceBlade";
var t;(function(n){n.name="name";n.assetTypeId="assetTypeId"})(t=n.Inputs||(n.Inputs={}))}(ni=n.BrowseServiceBlade||
(n.BrowseServiceBlade={}))})(t=n.Blades||(n.Blades={}))}(f=n.HubsExtension||(n.HubsExtension={}))}(f=
n.External||(n.External={})),function(n){var t,i,r;(function(n){n.name="ApplicationInsights";var t;(
function(n){n.read="Microsoft.Insights/components/read";n.deletePermission="Microsoft.Insights/components/delete";
n.write="Microsoft.Insights/components/write"})(t=n.Permissions||(n.Permissions={}))})(t=n.ApplicationInsights||
(n.ApplicationInsights={})),function(n){n.name="EventDetail"}(i=n.EventDetail||(n.EventDetail={})),function(
n){n.name="WebTest";var t;(function(n){n.read="Microsoft.Insights/webtests/read";n.deletePermission=
"Microsoft.Insights/webtests/delete";n.write="Microsoft.Insights/webtests/write"})(t=n.Permissions||
(n.Permissions={}))}(r=n.WebTest||(n.WebTest={}))}(r=n.AssetTypes||(n.AssetTypes={})),function(n){n.
applicationInsights=r.ApplicationInsights.name;n.eventDetail=r.EventDetail.name;n.webTest=r.WebTest.
name}(e=n.AssetTypeNames||(n.AssetTypeNames={})),function(n){n.favoritesBlade="FavoritesBlade";n.quickStartBlade=
"QuickStartBlade";n.eventsConfigurationBlade="EventsConfigurationBlade";n.propertiesBlade="PropertiesBlade";
n.aspNetOverview="AspNetOverview";n.deviceOverview="DeviceOverview";n.javaWebOverview="JavaWebOverview";
n.javaWebConfigurationBlade="JavaWebConfigurationBlade";n.gettingStartedCustomEvents="GettingStartedCustomEvents";
n.devicesComingSoonBlade="DevicesComingSoonBlade";n.aIAttachBlade="AIAttachBlade";n.settingListBlade=
"SettingListBlade";n.endUserAnalyticsBlade="EndUserAnalyticsBlade";n.configurationBlade="ConfigurationBlade";
n.searchBlade="SearchBlade";n.filterDetailsBlade="FilterDetailsBlade";n.searchResultDetailBlade="SearchResultDetailBlade";
n.monacoBlade="MonacoBlade";n.timeSelectorDetailBlade="TimeSelectorDetailBlade";n.searchResultCustomEventDetailBlade=
"SearchResultCustomEventDetailBlade";n.searchResultExceptionDetailBlade="SearchResultExceptionDetailBlade";
n.searchResultPageViewDetailBlade="SearchResultPageViewDetailBlade";n.searchResultRequestDetailBlade=
"SearchResultRequestDetailBlade";n.searchResultTraceDetailBlade="SearchResultTraceDetailBlade";n.createApplicationBlade=
"CreateApplicationBlade";n.selectApplicationTypeBlade="SelectApplicationTypeBlade";n.continuousExportBlade=
"ContinuousExportBlade";n.createContinuousExportBlade="CreateContinuousExportBlade";n.continuousExportEventTypesBlade=
"ContinuousExportEventTypesBlade";n.continuousExportEditBlade="ContinuousExportEditBlade";n.webTestsBlade=
"WebTestsBlade";n.webTestDetailBlade="WebTestDetailBlade";n.webTestAssetBlade="WebTestAssetBlade";n.
webTestLocationDetailBlade="WebTestLocationDetailBlade";n.webTestResultBlade="WebTestResultBlade";n.
webTestResultDetailBlade="WebTestResultDetailBlade";n.createWebTestBlade="CreateWebTestBlade";n.editWebTestBlade=
"EditWebTestBlade";n.createWebTestLocationBlade="CreateWebTestLocationBlade";n.createWebTestCriteriaBlade=
"CreateWebTestCriteriaBlade";n.createWebTestAlertBlade="CreateWebTestAlertBlade";n.metricsExplorerBlade=
"MetricsExplorerBlade";n.metricsExplorerEditBlade="MetricsExplorerEditBlade";n.metricsExplorerEditChartNoticeBlade=
"MetricsExplorerEditChartNoticeBlade";n.eventManagementBlade="EventManagementBlade";n.billingSpecPicker=
"BillingSpecPicker";n.billingComingSoonBlade="BillingComingSoonBlade"}(o=n.BladeNames||(n.BladeNames=
{})),function(n){n.monitoredApplicationCommands="MonitoredApplicationCommands";n.eventPropertiesCommands=
"EventPropertiesCommands";n.continuousExportCommands="ContinuousExportCommands";n.gridCommands="GridCommands"}
(s=n.CommandGroupNames||(n.CommandGroupNames={})),function(n){var t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,
k,d,g,nt,tt,it,rt,ut,ft,et;(function(n){n.name="MetricAlertNotification";n.activated={status:"Activated"};
n.resolved={status:"Resolved"}})(t=n.MetricAlertNotification||(n.MetricAlertNotification={})),function(
n){n.name="WebTestAlertNotification";n.activated={status:"Activated"};n.resolved={status:"Resolved"}}
(i=n.WebTestAlertNotification||(n.WebTestAlertNotification={})),function(n){n.name="ThrottlingAlert";
n.activated={status:"Activated"};n.resolved={status:"Resolved"}}(r=n.ThrottlingAlert||(n.ThrottlingAlert=
{})),function(n){n.name="favoriteNotification";n.creatingFavorite={status:"CreatingFavorite"};n.created=
{status:"Created"};n.createFail={status:"CreateFail"};n.savingFavorite={status:"SavingFavorite"};n.saved=
{status:"Saved"};n.saveFail={status:"SaveFail"};n.deletingFavorite={status:"DeletingFavorite"};n.deleted=
{status:"Deleted"};n.deleteFail={status:"DeleteFail"}}(u=n.FavoriteNotification||(n.FavoriteNotification=
{})),function(n){n.name="webTestNotification";n.started={status:"started"};n.succeeded={status:"succeeded"};
n.warning={status:"warning"};n.error={status:"error"}}(f=n.WebTestNotification||(n.WebTestNotification=
{})),function(n){n.name="ContinuousExportCreateNotification";n.success={status:"success"};n.error={status:
"error"}}(e=n.ContinuousExportCreateNotification||(n.ContinuousExportCreateNotification={})),function(
n){n.name="ContinuousExportUpdateNotification";n.success={status:"success"};n.error={status:"error"}}
(o=n.ContinuousExportUpdateNotification||(n.ContinuousExportUpdateNotification={})),function(n){n.name=
"ContinuousExportDeleteNotification";n.success={status:"success"};n.error={status:"error"}}(s=n.ContinuousExportDeleteNotification||
(n.ContinuousExportDeleteNotification={})),function(n){n.name="ContinuousExportDisableNotification";
n.success={status:"success"};n.error={status:"error"}}(h=n.ContinuousExportDisableNotification||(n.ContinuousExportDisableNotification=
{})),function(n){n.name="ContinuousExportEnableNotification";n.success={status:"success"};n.error={status:
"error"}}(c=n.ContinuousExportEnableNotification||(n.ContinuousExportEnableNotification={})),function(
n){n.name="ContinuousExportDestinationStorageKeyChangedNotification";n.failed={status:"Failed"}}(l=n.
ContinuousExportDestinationStorageKeyChangedNotification||(n.ContinuousExportDestinationStorageKeyChangedNotification=
{})),function(n){n.name="ContinuousExportIsAboutToBeDisabledDestinationStorageKeyChangedNotification";
n.failed={status:"Failed"}}(a=n.ContinuousExportIsAboutToBeDisabledDestinationStorageKeyChangedNotification||
(n.ContinuousExportIsAboutToBeDisabledDestinationStorageKeyChangedNotification={})),function(n){n.name=
"ContinuousExportIsDisabledDestinationStorageKeyChangedNotification";n.failed={status:"Failed"}}(v=n.
ContinuousExportIsDisabledDestinationStorageKeyChangedNotification||(n.ContinuousExportIsDisabledDestinationStorageKeyChangedNotification=
{})),function(n){n.name="ContinuousExportDestinationStorageIsOutOfCapcityNotification";n.failed={status:
"Failed"}}(y=n.ContinuousExportDestinationStorageIsOutOfCapcityNotification||(n.ContinuousExportDestinationStorageIsOutOfCapcityNotification=
{})),function(n){n.name="ContinuousExportIsAboutToBeDisabledDestinationStorageIsOutOfCapcityNotification";
n.failed={status:"Failed"}}(p=n.ContinuousExportIsAboutToBeDisabledDestinationStorageIsOutOfCapcityNotification||
(n.ContinuousExportIsAboutToBeDisabledDestinationStorageIsOutOfCapcityNotification={})),function(n){
n.name="ContinuousExportIsDisabledDestinationStorageIsOutOfCapcityNotification";n.failed={status:"Failed"}}
(w=n.ContinuousExportIsDisabledDestinationStorageIsOutOfCapcityNotification||(n.ContinuousExportIsDisabledDestinationStorageIsOutOfCapcityNotification=
{})),function(n){n.name="ContinuousExportDestinationIsUnavailableNotification";n.failed={status:"Failed"}}
(b=n.ContinuousExportDestinationIsUnavailableNotification||(n.ContinuousExportDestinationIsUnavailableNotification=
{})),function(n){n.name="ContinuousExportIsAboutToBeDisabledDestinationIsUnavailableNotification";n.
failed={status:"Failed"}}(k=n.ContinuousExportIsAboutToBeDisabledDestinationIsUnavailableNotification||
(n.ContinuousExportIsAboutToBeDisabledDestinationIsUnavailableNotification={})),function(n){n.name="ContinuousExportIsDisabledDestinationIsUnavailableNotification";
n.failed={status:"Failed"}}(d=n.ContinuousExportIsDisabledDestinationIsUnavailableNotification||(n.ContinuousExportIsDisabledDestinationIsUnavailableNotification=
{})),function(n){n.name="ContinuousExportIsDisabledApplicationInFreeTierNotification";n.failed={status:
"Failed"}}(g=n.ContinuousExportIsDisabledApplicationInFreeTierNotification||(n.ContinuousExportIsDisabledApplicationInFreeTierNotification=
{})),function(n){n.name="ContinuousExportBillingNotification";n.error={status:"error"}}(nt=n.ContinuousExportBillingNotification||
(n.ContinuousExportBillingNotification={})),function(n){n.name="QuotaAlertFreeTierOverageDisabled";n.
error={status:"Error"};n.warning={status:"Warning"}}(tt=n.QuotaAlertFreeTierOverageDisabled||(n.QuotaAlertFreeTierOverageDisabled=
{})),function(n){n.name="QuotaAlertStandardTierOverageDisabled";n.error={status:"Error"};n.warning={
status:"Warning"}}(it=n.QuotaAlertStandardTierOverageDisabled||(n.QuotaAlertStandardTierOverageDisabled=
{})),function(n){n.name="QuotaAlertPremiumTierOverageDisabled";n.error={status:"Error"};n.warning={status:
"Warning"}}(rt=n.QuotaAlertPremiumTierOverageDisabled||(n.QuotaAlertPremiumTierOverageDisabled={})),
function(n){n.name="QuotaAlert100PercentOverageEnabled";n.info={status:"Info"}}(ut=n.QuotaAlert100PercentOverageEnabled||
(n.QuotaAlert100PercentOverageEnabled={})),function(n){n.name="QuotaAlert80PercentOverageEnabled";n.
info={status:"Info"}}(ft=n.QuotaAlert80PercentOverageEnabled||(n.QuotaAlert80PercentOverageEnabled={
})),function(n){n.name="QuotaAlertTestTierOverageDisabled";n.error={status:"Error"};n.warning={status:
"Warning"}}(et=n.QuotaAlertTestTierOverageDisabled||(n.QuotaAlertTestTierOverageDisabled={}))}(h=n.NotificationDefinitions||
(n.NotificationDefinitions={}))}(r||(r={})),r});define("Shared/UrlHelper",["require","exports","./Configuration",
"./Constants"],function(n,t,i,r){"use strict";function h(n,t){return o(t.subscriptionId,t.resourceGroup,
n,t,t.queryParams)}function u(n,t){return r.GraphPathTemplates.CsmBase.format({subscriptionId:n,resourceGroup:
t})}function f(n){return r.GraphPathTemplates.CsmSubscriptionBase.format({subscriptionId:n})}function e(
n,t,e,o,s){var h,c,l;return h=t===""?"{csmPath}/{graphPath}".format({csmPath:f(n),graphPath:e}):"{csmPath}/{graphPath}".
format({csmPath:u(n,t),graphPath:e}),o||(o={}),c=$.extend({},o),l=h.indexOf(r.InsightsProvider)!==-1?
h.indexOf(r.AlertRulesProvider)!==-1?i.getSettings().getAlertRulesApiVersion():h.indexOf(r.FeaturesProvider)!==
-1?i.getSettings().getFeaturesApiVersion():i.getSettings().getGraphApiVersion():h.indexOf(r.WebSitesProvider)!==
-1?i.getSettings().getWebSitesApiVersion():i.getSettings().getCsmApiVersion(),c["api-version"]=l,s||
(h+="?"+$.param(c)),h}function o(n,t,r,u,f){var h=e(n,t,r.format(u),f),o=i.getSettings(),c;return o.
getUseCsm()&&o.getUseCors()?(c=o.getCsmUrl(),c+h):s(h)}function s(n){var t=MsPortalFx.Base.Resources.
getAppRelativeUri("/api/proxy");return"{proxyUrl}?path={fullGraphPath}".format({proxyUrl:t,fullGraphPath:
encodeURIComponent(n)})}function c(){return"axxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[x]/g,function(
){var n=Math.random()*16|0,t=n;return t.toString(16)})}t.getUrlFromGraphTemplate=h;t.buildCsmPath=u;
t.buildCsmPathWithSubscription=f;t.buildGraphPath=e;t.buildGraphProxyPath=o;t.addApiProxy=s;t.getGuidStartingWithLetter=
c});define("Shared/Logging",["require","exports"],function(n,t){function i(n,t){if(console){var i="[AIError]";
i+="area: "+t+"; ";i+=n&&typeof n!="string"?n.responseText:n;console.warn(i)}}t.errorConsole=i});define(
"Shared/ThenableWrapper",["require","exports"],function(n,t){function r(n){var t,i;if(n.length<0)return null;
for(t=n[0],i=1;i<n.length;i++)t=function(n){return t.then(function(){return n},function(n){return n}
)}(n[i]);return t}var i=function(){function n(n){var t=this;if(this._deferred=$.Deferred(),!n){this.
_deferred.resolve();return}n.then(function(){t._deferred.resolve()},function(n){t._deferred.reject(n)}
)}return n.prototype.promise=function(){return this._deferred.promise()},n}();t.ThenableWrapper=i;t.
all=r});define("Shared/TransformHelper",["require","exports"],function(n,t){function i(n){var t=null;
return n&&n.value&&$.isArray(n.value)&&(t=n.value),t}t.unwrapCsmArray=i});define("Billing/DataModels/BillingPlansQuery",
["require","exports","ClientResources","../../Shared/Constants","../../_generated/SvgDefinitions","../BillingSpecProvider"],
function(n,t,i,r,u,f){"use strict";function s(n){var t=o[n];return t===undefined&&(t={color:"darkOrchid",
code:String.fromCharCode(80+Object.keys(o).length),title:n},o[n]=t),t}function h(n){for(var t,o,l,a,
f=[],h=[],c=[],r=0;r<n.length;r++)t=n[r],o=s(t.PlanName),f.push({id:t.PlanName,colorScheme:o.color,title:
o.title,specCode:o.code,promotedFeatures:[{value:t.RawDataRetention.toString(),unitDescription:i.billingPlanRawDataRetentionDescription}],
features:[{id:e.devices,displayValue:i.billingPlanUnlimitedDescription},{id:e.basicEvents,displayValue:
i.billingPlanUnlimitedDescription}],cost:{amount:t.ResourceId?null:0,caption:i.billingPlanMonthEstimatedDescription}}),
t.ResourceId&&(l={id:t.PlanName,quotas:[{resourceId:t.ResourceId,quantity:1}]},c.push(l)),t.MonthlyCap&&
f[r].promotedFeatures.push({value:(t.MonthlyCap/Math.pow(10,6)).toString(),unitDescription:i.billingPlanTelemetryEventsDescription}),
t.AggregatedDataRetention?f[r].features.push({id:e.aggregateData,displayValue:t.AggregatedDataRetention+
" "+i.billingPlanMonthsDescription}):f[r].features.push({id:e.aggregateData,displayValue:i.billingPlanUnlimitedDescription}),
t.SupportExportData&&f[r].features.push({id:e.dataExport,displayValue:i.billingPlanDataExportDescription}),
t.OverageResourceId&&(f[r].features.push({id:e.overage,displayValue:i.unableToDisplayPriceMessage}),
a={id:t.PlanName,firstParty:[{resourceId:t.OverageResourceId,quantity:1}],thirdParty:[]},h.push(a));
var v=[{id:e.devices,displayName:i.billingPlanDevicesDescription,iconImage:u.Content.Images.serversAndMobileDevices},
{id:e.basicEvents,displayName:i.billingPlanBasicEventsDescription,iconImage:u.Content.Images.basicTelemetry},
{id:e.aggregateData,displayName:i.billingPlanDataRetentionDescription,iconImage:u.Content.Images.dataRetention},
{id:e.dataExport,displayName:i.continuousExportTitle,iconName:"Backup"},{id:e.overage,displayName:i.
billingPlanOverageDescription,iconImage:u.Content.Images.overage}],y={"default":c},p={specs:f,features:
v,resourceMap:y,specsToAllowZeroCost:["Free"],specType:"Application Insights"};return{SpecData:p,OverageResourceIds:
h}}var e=function(){function n(){}return n.devices="devices",n.basicEvents="basicEvents",n.aggregateData=
"aggregateData",n.dataExport="dataExport",n.overage="overage",n}(),o;t.FeatureIds=e;o={Free:{color:"orange",
code:"F",title:r.MapPlanIdToTitle(f.BillingPlans.Free)},Standard:{color:"yellowGreen",code:"S",title:
r.MapPlanIdToTitle(f.BillingPlans.Standard)},Premium:{color:"mediumBlue",code:"P",title:r.MapPlanIdToTitle(
f.BillingPlans.Premium)},FreeTrial:{color:"mediumBlue",code:"T",title:r.MapPlanIdToTitle(f.BillingPlans.
FreeTrial)},TempDefault:{color:"darkOrchid",code:"D",title:r.MapPlanIdToTitle(f.BillingPlans.TempDefault)}};
t.transform=h});define("_generated/SvgDefinitions",["require","exports"],function(){var n;return function(
n){"use strict";var t;(function(n){var t;(function(n){n.categorizedView={type:1,data:'<svg viewBox="0 0 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g id="iconBg"> <path d="M1,6h5V1H1V6z M2,3h1V2h1v1h1v1H4v1H3V4H2V3z M1,15h5v-5H1V15z M2,12h1v-1h1v1h1v1H4v1H3 v-1H2V12z M7,1h5v1H7V1z M15,4h-2V3h2V4z M15,6h-2V5h2V6z M15,8h-2V7h2V8z M15,10h-2V9h2V10z M13,14h2v1h-2V14z M7,3h5v1H7V3z M7,5 h5v1H7V5z M7,7h5v1H7V7z M7,9h5v1H7V9z M7,12h5v1H7V12z M7,14h5v1H7V14z"/> <\/g> <\/svg>'};
n.sortAscending={type:1,data:'<svg viewBox="0 0 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g id="iconBg"> <path d="M2,11h3l-3,3v1h5v-1H4.013L7,11.051L6.952,11H7v-1H2V11z M4.5,3.25L5.2,5H3.8L4.5,3.25z M8,1v7H1V1H8z M7,7L5,2H4L2,7h1l0.399-1h2.201L6,7H7z"/> <\/g> <g id="colorAction"> <path d="M15,8v2l-3,3l-3-3V8l2,2V4h2v6L15,8z"/> <\/g> <\/svg>'};
n.sortByColumn={type:1,data:'<svg viewBox="0 0 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g id="iconBg"> <path d="M10,12.414V15H2V1h8v2v4.586L8.414,6H9V3H3v3h5v1H3v3h5v0.414L8.586,11H3v3h6v-2.586 L10,12.414z"/> <\/g> <g id="colorAction"> <polygon points="13,10 13,4 11,4 11,10 9,8 9,10 12,13 15,10 15,8 "/> <\/g> <\/svg>'};
n.alerts={type:1,data:'<svg viewBox="0 0 80 80" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g> <path fill="#231F20" d="M62.1,58.3c-1.5-2.9-2.9-8.3-2.9-18.7c0-21.9-6.5-28.3-19.2-28.3c-12.7,0-19.2,6.4-19.2,28.3 c0,10.4-1.4,15.8-2.9,18.7h-5.2v6.4h54.8v-6.4H62.1z"/> <\/g> <path fill="#231F20" d="M31.3,66.7c0.7,4.2,4.3,7.4,8.7,7.4s8.1-3.2,8.7-7.4H31.3z"/> <circle fill="#231F20" cx="39.9" cy="9.3" r="5.7"/> <\/svg>'};
n.dependency={type:1,data:'<svg viewBox="0 0 24 24" class="msportalfx-svg-placeholder" role="img"><title><\/title> <path d="M11.3,12.8l-0.9-0.9l2.5-2.5l0.9,0.9L11.3,12.8z M10.1,14.1l-0.9-0.9l-2.5,2.5l0.9,0.9L10.1,14.1z M6.3,17.8L5.4,17L3,19.5 l0.9,0.9L6.3,17.8z M18.3,3.6h-6.2v1.3h5.3l-3.3,3.3L15,9.1l3.3-3.3v5.4h1.2V4.9V3.6H18.3z"/> <\/svg>'};
n.continuousExport={type:1,data:'<svg viewBox="0 0 50 50" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g> <path d="M19.4,45.9l2.8-3.8c-7.3-1.6-14.1-7.8-14.8-15.7c-0.7-8.6,4.8-16.3,12.9-18.5l3-3.9l-3.8-3.5 C7.5,3.3-1,14.5,0.1,27.1c1,12,10.5,21.3,22,22.7L19.4,45.9z" class="msportalfx-svg-c19"/> <path d="M28.8,0.2l2.4,3.9l-3.3,3.6c7.3,1.7,14.1,7.9,14.8,15.7c0.7,8.5-4.7,16.2-12.7,18.5l-2.3,4.3l3.5,3 c11.7-3,19.8-14,18.7-26.4C48.9,11,39.9,1.9,28.8,0.2z" class="msportalfx-svg-c19"/> <\/g> <g> <rect x="12.7" y="21.5" width="4.1" height="9.7" class="msportalfx-svg-c19"/> <rect x="19.5" y="16" width="4.1" height="15.2" class="msportalfx-svg-c15"/> <rect x="26.3" y="22.9" width="4.1" height="8.3" class="msportalfx-svg-c16"/> <rect x="33.2" y="18.7" width="4.1" height="12.4" class="msportalfx-svg-c19"/> <\/g> <\/svg>'};
n.log={type:1,data:'<svg viewBox="-0.5 0.5 24 24" class="msportalfx-svg-placeholder" role="img"><title><\/title> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5,2.5v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h15v-20H4.5z M17.5,20.5h-11v-16h11V20.5z"/> <rect x="8.5" y="7.5" fill-rule="evenodd" clip-rule="evenodd" width="7" height="2"/> <\/svg>'};
n.pageView={type:1,data:'<svg viewBox="0 33.6 24 24" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect x="3.7" y="37.2" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" width="17" height="16.7"/> <rect x="6.4" y="40.6" width="11.7" height="3.6"/> <rect x="6.4" y="45" width="3.6" height="4.4"/> <rect x="10.8" y="47.6" width="7.3" height="1.8"/> <rect x="10.8" y="44.9" width="7.3" height="1.8"/> <\/svg>'};
n.request={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title> <path d="M3.5,9.5h-2v-7h7v2h2v-4h-11v11h4V9.5z" class="msportalfx-svg-c04"/> <path d="M4.5,5.5v11h11v-11H4.5z M6.5,7.5h2v2h-2V7.5z M13.5,14.5h-7v-3h2h1h1v-4h3V14.5z" class="msportalfx-svg-c04"/> <\/svg>'};
n.addCode={type:1,data:'<svg viewBox="0 0 46 46" class="msportalfx-svg-placeholder" role="img"><title><\/title> <polygon points="14.1,9.1 0.9,21.2 0.9,25.9 14.1,37.7 14.1,30.3 6.7,23.4 14.1,16.8 " class="msportalfx-svg-c01"/> <polygon points="31.7,9.1 31.7,16.8 39.1,23.4 31.7,30.3 31.7,37.7 44.9,25.9 44.9,21.2 " class="msportalfx-svg-c01"/> <polygon points="32,21 25,21 25,14 21,14 21,21 14,21 14,25 21,25 21,32 25,32 25,25 32,25 " class="msportalfx-svg-c01"/> <\/svg>'};
n.javaIcon={type:1,data:'<svg viewBox="0 0 48 24" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g id="Layer_1"> <\/g> <g id="Quickstart_x5F_1"> <rect x="0.1" y="1.5" fill="none" width="49.9" height="21.9"/> <text transform="matrix(1 0 0 1 9.152222e-002 19.9791)" font-family="Segoe UI" font-weight="700" font-size="25" class="msportalfx-svg-c01">.JSP<\/text> <\/g> <\/svg>'};
n.failuresAndExceptions={type:1,data:'<svg viewBox="0 0 50 50" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g id="Layer_1"> <\/g> <g id="Normal_Blade"> <g id="Graph_2_"> <rect x="7" y="16" fill="#EB008B" width="5" height="20"/> <rect x="17" y="11" fill="#EB008B" width="5" height="25"/> <rect x="27" y="18" fill="#EB008B" width="5" height="18"/> <rect x="37" y="14" fill="#EB008B" width="5" height="22"/> <\/g> <g id="Warning_1_"> <g> <path d="M25.3,39.8c-0.9,0-1.6-0.4-2-1.2c-0.4-0.8-0.4-1.7,0-2.4l4.4-7.7l4.4-7.3c0.5-0.8,1.2-1.2,2-1.2 c0.8,0,1.5,0.4,1.9,1.2l8.8,15.1c0.5,0.8,0.5,1.7,0.1,2.4c-0.4,0.7-1.2,1.1-2.1,1.1H25.3z" class="msportalfx-svg-c10"/> <path d="M34,20.6c0.5,0,1,0.3,1.4,0.9l4.4,7.6l4.4,7.5c0.7,1.2,0,2.6-1.4,2.6H34h-8.7c-1.4,0-2.1-1.4-1.4-2.6 l4.4-7.8l4.4-7.3C33,20.9,33.5,20.6,34,20.6 M34,19.3L34,19.3c-1,0-2,0.6-2.5,1.5l-4.4,7.3l-4.4,7.8c-0.6,1-0.6,2.1,0,3.1 c0.5,0.9,1.5,1.5,2.6,1.5H34h8.7c1.1,0,2.1-0.6,2.6-1.5c0.5-0.9,0.5-2.1-0.1-3.1l-4.4-7.5l-4.4-7.6C36,19.9,35,19.3,34,19.3 L34,19.3z" class="msportalfx-svg-c01"/> <\/g> <circle cx="34" cy="34.9" r="1.4" class="msportalfx-svg-c01"/> <polygon points="34.3,26.2 33.9,26.2 32.8,26.2 33.2,32.9 33.9,32.9 34.3,32.9 35,32.9 35.4,26.2 " class="msportalfx-svg-c01"/> <\/g> <\/g> <\/svg>'};
n.performanceAndDependancies={type:1,data:'<svg viewBox="0 0 50 50" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g id="Layer_1"> <\/g> <g id="Normal_Blade"> <g id="dependencies"> <g id="Website_1_"> <path d="M31.7,32c-2.6,2-5.6,2.9-8.6,2.9c-4.3,0-8.5-1.9-11.3-5.6c-4.8-6.2-3.6-15.2,2.7-20 c2.6-2,5.6-2.9,8.6-2.9c4.3,0,8.5,1.9,11.3,5.6C39.2,18.3,38,27.2,31.7,32" class="msportalfx-svg-c15"/> <path d="M29.1,23.2c1,1.3,3,1.6,4.3,0.6c0.1-0.1,0.1-0.1,0.2-0.2c1.4,1,2.3,1.6,2.9,2c0.2-0.4,0.3-0.8,0.4-1.2 c-0.6-0.4-1.3-1-2.4-1.9c0.4-1,0.2-2.1-0.4-2.9c-1-1.2-2.6-1.5-4-0.8c-1.5-1.3-3-2.8-4.7-4.5c5.2-2.8,8.9-2.4,8.9-2.4 c-0.6-0.8-1.3-1.5-2.1-2.1c-2.2-0.3-5.6-0.3-9.5,1.8l0,0h0c-1.3-1.4-2.6-2.8-4-4.4c-0.6,0.2-1.3,0.5-1.9,0.8 c1,1.6,2.3,3.3,3.8,4.9l0,0c0,0,0,0,0,0c-1.3,0.9-2.7,2.1-4,3.4c-0.2,0.2-0.3,0.4-0.5,0.5c-0.8-0.2-1.6-0.1-2.3,0.2 c-1.3-2.8-1.2-5-1-6.2c-0.6,0.6-1.1,1.2-1.5,1.9c-0.3,1.4-0.4,3.4,0.6,5.8c-1.2,1.5-1.2,3.6,0,5.2c0.1,0.1,0.2,0.3,0.3,0.4 c-0.5,1.8-0.8,3.5-0.8,5c0.1,0.2,0.1,0.3,0.3,0.5c0.7,0.9,1.5,1.6,2.4,2.3c-0.1-1.6,0-3.9,1-6.5c0.7,0.1,1.3-0.1,2-0.3 c0.4,0.3,0.7,0.6,1.2,1c1.4,1.1,2.8,2,4.1,2.6c-0.1,0.7,0.1,1.4,0.6,2c1,1.2,2.7,1.5,4,0.5c0.3-0.2,0.5-0.4,0.6-0.7 c2.2,0.5,4.2,0.6,5.6,0.6c0.2,0,1.2-1.4,1.8-2.2c-0.9,0.2-3.5,0.5-7-0.5c-0.1-0.4-0.2-0.8-0.5-1.1c-0.9-1.2-2.5-1.4-3.8-0.6 c-1.2-0.7-2.5-1.5-3.8-2.6c-0.3-0.2-0.5-0.4-0.8-0.6c0.8-1.3,0.9-2.9,0.2-4.3c0.2-0.2,0.3-0.3,0.5-0.5c1.3-1.2,2.6-2.2,3.7-3 c0,0-0.1-0.1-0.1-0.1c0,0,0.1,0.1,0.1,0.1l0,0c1.8,1.6,3.7,3.2,5.4,4.6C28.3,21,28.4,22.3,29.1,23.2z" class="msportalfx-svg-c01"/> <\/g> <g id="DB_1_"> <path d="M34.4,41.9h0.1c4.4,0,7.9-1.3,7.9-2.9V23.7h-8.1V41.9z" class="msportalfx-svg-c15"/> <g id="arrow"> <\/g> <path d="M26.6,23.7V39c0,1.6,3.5,2.9,7.9,2.9V23.7L26.6,23.7z" class="msportalfx-svg-c16"/> <path d="M42.5,23.7c0,1.6-3.5,2.9-7.9,2.9c-4.4,0-7.9-1.3-7.9-2.9c0-1.6,3.5-2.9,7.9-2.9 C38.9,20.8,42.5,22.1,42.5,23.7" class="msportalfx-svg-c01"/> <path d="M40.9,23.5c0,1.1-2.8,1.9-6.3,1.9c-3.5,0-6.3-0.8-6.3-1.9s2.8-1.9,6.3-1.9S40.9,22.5,40.9,23.5" class="msportalfx-svg-c14"/> <path d="M39.5,24.7c0.8-0.3,1.3-0.7,1.3-1.2c0-1.1-2.8-1.9-6.3-1.9c-3.5,0-6.3,0.8-6.3,1.9c0,0.4,0.5,0.8,1.3,1.2 c1.2-0.4,3-0.7,5-0.7C36.6,23.9,38.4,24.3,39.5,24.7" class="msportalfx-svg-c13"/> <\/g> <g id="Pathiee_2"> <path fill="#DADDE0" d="M34.6,35.3c-1,0-1.8,0.7-2.1,1.6h-8.3c-3.5,0-6.4-2.9-6.4-6.4h-1.3c0,4.2,3.5,7.7,7.7,7.7h8.3 c0.3,0.9,1.1,1.6,2.1,1.6c1.2,0,2.2-1,2.2-2.2C36.8,36.3,35.8,35.3,34.6,35.3z"/> <\/g> <rect id="Pathiee" x="16.5" y="26.7" fill="#DADDE0" width="1.3" height="4"/> <\/g> <\/g> <\/svg>'};
n.server={type:1,data:'<svg viewBox="-274 576 50 50" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g> <path d="M-233.6,623.5c0,1.4-1.1,2.5-2.5,2.5h-24.3c-1.4,0-2.5-1.1-2.5-2.5v-44.9c0-1.4,1.1-2.5,2.5-2.5h24.3 c1.4,0,2.5,1.1,2.5,2.5V623.5z" class="msportalfx-svg-c05"/> <path d="M-258.7,603c0-1.8,1.4-3.2,3.2-3.2h14.6c1.8,0,3.2,1.4,3.2,3.2l0,0c0,1.8-1.4,3.2-3.2,3.2h-14.6 C-257.3,606.2-258.7,604.8-258.7,603L-258.7,603z" class="msportalfx-svg-c06"/> <circle cx="-255.4" cy="603" r="2.1" class="msportalfx-svg-c13"/> <path d="M-258.7,593.5c0-1.8,1.4-3.2,3.2-3.2h14.6c1.8,0,3.2,1.4,3.2,3.2l0,0c0,1.8-1.4,3.2-3.2,3.2h-14.6 C-257.3,596.7-258.7,595.3-258.7,593.5L-258.7,593.5z" class="msportalfx-svg-c06"/> <circle cx="-255.4" cy="593.5" r="2.1" class="msportalfx-svg-c13"/> <path d="M-258.7,584.1c0-1.8,1.4-3.2,3.2-3.2h14.6c1.8,0,3.2,1.4,3.2,3.2l0,0c0,1.8-1.4,3.2-3.2,3.2h-14.6 C-257.3,587.3-258.7,585.8-258.7,584.1L-258.7,584.1z" class="msportalfx-svg-c06"/> <circle cx="-255.4" cy="584.1" r="2.1" class="msportalfx-svg-c13"/> <\/g> <\/svg>'};
n.serversAndMobileDevices={type:1,data:'<svg viewBox="275 1149 50 50" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g> <path d="M306.2,1196c0,1.4-1.1,2.4-2.4,2.4H280c-1.4,0-2.5-1.1-2.5-2.4v-44c0-1.4,1.1-2.4,2.5-2.4h23.8 c1.4,0,2.4,1.1,2.4,2.4V1196L306.2,1196z" class="msportalfx-svg-c05"/> <path d="M281.6,1175.9c0-1.8,1.4-3.1,3.1-3.1h14.3c1.8,0,3.1,1.4,3.1,3.1l0,0c0,1.8-1.4,3.1-3.1,3.1h-14.3 C283,1179,281.6,1177.6,281.6,1175.9L281.6,1175.9z" class="msportalfx-svg-c06"/> <circle cx="284.9" cy="1175.9" r="2.1" class="msportalfx-svg-c13"/> <path d="M281.6,1166.6c0-1.8,1.4-3.1,3.1-3.1h14.3c1.8,0,3.1,1.4,3.1,3.1l0,0c0,1.8-1.4,3.1-3.1,3.1h-14.3 C283,1169.7,281.6,1168.3,281.6,1166.6L281.6,1166.6z" class="msportalfx-svg-c06"/> <circle cx="284.9" cy="1166.6" r="2.1" class="msportalfx-svg-c13"/> <path d="M281.6,1157.3c0-1.8,1.4-3.1,3.1-3.1h14.3c1.8,0,3.1,1.4,3.1,3.1l0,0c0,1.8-1.4,3.1-3.1,3.1h-14.3 C283,1160.5,281.6,1159,281.6,1157.3L281.6,1157.3z" class="msportalfx-svg-c06"/> <circle cx="284.9" cy="1157.3" r="2.1" class="msportalfx-svg-c13"/> <\/g> <g id="Phone"> <path d="M318.5,1162.4c1.2,0,2.1,0.9,2.1,2.1v30c0,1.2-0.9,2.1-2.1,2.1H301c-1.2,0-2.1-0.9-2.1-2.1v-30.1 c0-1.2,0.9-2.1,2.1-2.1L318.5,1162.4 M318.5,1160.5H301c-2.3,0-4,1.8-4,4v30c0,2.3,1.8,4,4,4h17.4c2.3,0,4-1.8,4-4v-30.1 C322.5,1162.2,320.7,1160.5,318.5,1160.5L318.5,1160.5z" class="msportalfx-svg-c01"/> <path d="M320.5,1194.5c0,1.2-0.9,2.1-2.1,2.1H301c-1.2,0-2.1-0.9-2.1-2.1v-30.1c0-1.2,0.9-2.1,2.1-2.1h17.4 c1.2,0,2.1,0.9,2.1,2.1V1194.5L320.5,1194.5z" class="msportalfx-svg-c05"/> <rect x="300.5" y="1165.8" width="18.5" height="24" class="msportalfx-svg-c15"/> <path d="M312.7,1193.2c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-1.1,0.9-2,2-2S312.7,1192.1,312.7,1193.2" class="msportalfx-svg-c01"/> <path d="M312,1193.2c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3 C311.4,1191.9,312,1192.5,312,1193.2" class="msportalfx-svg-c13"/> <path opacity="0.15" enable-background="new " d="M300.5,1189.9v-24h15.6l1.4-3.4h-16.4c-1.2,0-2.1,0.9-2.1,2.1 v30c0,1.2,0.9,2.1,2.1,2.1h2.5l2.7-6.7L300.5,1189.9L300.5,1189.9z" class="msportalfx-svg-c01"/> <path d="M314.3,1164.3c0,0.3-0.2,0.5-0.5,0.5h-6c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h6 C314,1163.8,314.3,1164,314.3,1164.3" class="msportalfx-svg-c06"/> <path d="M314.3,1164.3c0,0.3-0.2,0.5-0.5,0.5h-6c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h6 C314,1163.8,314.3,1164,314.3,1164.3" class="msportalfx-svg-c01"/> <path d="M309.8,1176.9L309.8,1176.9l-6.1-3.5c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0-0.1,0.1-0.2l6-3.4c0.1,0,0.1,0,0.2,0 l6,3.4c0.1,0,0.1,0.1,0.1,0.2c0,0.1,0,0.1-0.1,0.2L309.8,1176.9C309.8,1176.9,309.8,1176.9,309.8,1176.9" class="msportalfx-svg-c01"/> <path opacity="0.7" enable-background="new " d="M308.9,1185.4L308.9,1185.4l-6.1-3.5c-0.1,0-0.1-0.1-0.1-0.2v-7 c0-0.1,0-0.1,0.1-0.2c0.1,0,0.1,0,0.2,0l6,3.4c0.1,0,0.1,0.1,0.1,0.2v7C309.1,1185.3,309.1,1185.4,308.9,1185.4 C309,1185.4,309,1185.4,308.9,1185.4" class="msportalfx-svg-c01"/> <path opacity="0.4" enable-background="new " d="M310.6,1185.4C310.5,1185.4,310.5,1185.4,310.6,1185.4 c-0.2-0.1-0.2-0.1-0.2-0.2v-6.9c0-0.1,0-0.1,0.1-0.2l6-3.4c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.1,0.2v6.9c0,0.1,0,0.1-0.1,0.2 L310.6,1185.4L310.6,1185.4" class="msportalfx-svg-c01"/> <\/g> <\/svg>'};
n.basicTelemetry={type:1,data:'<svg viewBox="0 0 50 50" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g id="Basic"> <rect x="13.3" y="18.8" width="4" height="16" class="msportalfx-svg-c19"/> <rect x="20.3" y="14.8" width="4" height="20" class="msportalfx-svg-c15"/> <rect x="27.3" y="22.8" width="4" height="12" class="msportalfx-svg-c16"/> <rect x="34.3" y="16.8" width="4" height="18" class="msportalfx-svg-c19"/> <polygon points="45,41.2 6.8,41.2 6.8,11 9.2,11 9.2,38.8 45,38.8 " class="msportalfx-svg-c06"/> <\/g> <\/svg>'};
n.dataRetention={type:1,data:'<svg viewBox="275 1149 50 50" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g id="Retention"> <path d="M300.2,1199h0.3c10.4,0,18.8-3,18.8-6.8v-36.3h-19.1L300.2,1199L300.2,1199z" class="msportalfx-svg-c15"/> <g id="arrow_copy"> <\/g> <path d="M281.7,1155.8v36.3c0,3.8,8.4,6.8,18.8,6.8v-43.1H281.7z" class="msportalfx-svg-c16"/> <path d="M319.3,1155.8c0,3.8-8.4,6.8-18.8,6.8s-18.8-3-18.8-6.8c0-3.8,8.4-6.8,18.8-6.8S319.3,1152,319.3,1155.8" class="msportalfx-svg-c01"/> <path d="M315.4,1155.4c0,2.5-6.7,4.5-14.9,4.5s-14.9-2-14.9-4.5s6.7-4.5,14.9-4.5S315.4,1152.9,315.4,1155.4" class="msportalfx-svg-c14"/> <path d="M312.3,1158.2c2-0.8,3.1-1.8,3.1-2.8c0-2.5-6.7-4.5-14.9-4.5s-14.9,2-14.9,4.5c0,1,1.1,2,3.1,2.8 c2.8-1,7-1.8,11.8-1.8S309.5,1157.2,312.3,1158.2" class="msportalfx-svg-c13"/> <g id="Arrow"> <path d="M309.9,1183.7v5h-18.8v-5h-2.5v7.5h23.9v-7.5H309.9z" class="msportalfx-svg-c01"/> <polygon points="302.3,1180.9 307.4,1176.3 307.4,1180 300.5,1186.2 293.6,1180 293.6,1176.3 298.7,1180.9 298.7,1169.9 302.3,1169.9 " class="msportalfx-svg-c01"/> <\/g> <\/g> <g id="_x31_" display="none"> <path display="inline" d="M546.7,9117.4h28.8c1195.2,0,2160-345.6,2160-777.6V4178.2H546.7V9117.4z" class="msportalfx-svg-c15"/> <g id="arrow" display="inline"> <\/g> <g display="inline"> <path d="M3383.5,8008.6l187.2-1108.8l-388.8,230.4c-331.2-532.8-849.6-921.6-1468.8-1080 c-633.6-172.8-1296-72-1857.6,259.2s-964.8,864-1137.6,1497.6l561.6,144c129.6-489.6,432-892.8,864-1152s936-331.2,1425.6-201.6 c460.8,115.2,849.6,403.2,1108.8,820.8l-374.4,216L3383.5,8008.6z" class="msportalfx-svg-c13"/> <\/g> <path display="inline" d="M-1584.5,4163.8v4161.6c0,432,964.8,777.6,2160,777.6V4163.8H-1584.5z" class="msportalfx-svg-c16"/> <path display="inline" d="M2735.5,4163.8c0,432-964.8,777.6-2160,777.6s-2160-345.6-2160-777.6 s964.8-777.6,2160-777.6C1770.7,3386.2,2735.5,3731.8,2735.5,4163.8" class="msportalfx-svg-c01"/> <path display="inline" d="M2289.1,4120.6c0,288-763.2,518.4-1713.6,518.4s-1713.6-230.4-1713.6-518.4 s763.2-518.4,1713.6-518.4S2289.1,3832.6,2289.1,4120.6" class="msportalfx-svg-c14"/> <path display="inline" d="M1929.1,4437.4c230.4-86.4,360-201.6,360-316.8c0-288-763.2-518.4-1713.6-518.4 s-1713.6,230.4-1713.6,518.4c0,115.2,129.6,230.4,360,316.8c316.8-115.2,806.4-201.6,1353.6-201.6S1612.3,4322.2,1929.1,4437.4" class="msportalfx-svg-c13"/> <\/g> <g id="_x32_" display="none"> <g id="DB" display="inline"> <path d="M1833.1,9131.8h14.4c820.8,0,1483.2-244.8,1483.2-532.8V5733.4h-1512v3398.4L1833.1,9131.8L1833.1,9131.8z " class="msportalfx-svg-c15"/> <path d="M364.3,5733.4V8599c0,302.4,662.4,532.8,1483.2,532.8V5733.4H364.3z" class="msportalfx-svg-c16"/> <path d="M3330.7,5733.4c0,302.4-662.4,532.8-1483.2,532.8S364.3,6021.4,364.3,5733.4 c0-302.4,662.4-532.8,1483.2-532.8S3330.7,5431,3330.7,5733.4" class="msportalfx-svg-c01"/> <path d="M3028.3,5704.6c0,201.6-532.8,360-1180.8,360s-1180.8-158.4-1180.8-360s532.8-360,1180.8-360 S3028.3,5503,3028.3,5704.6" class="msportalfx-svg-c14"/> <path d="M2783.5,5920.6c158.4-57.6,244.8-129.6,244.8-216c0-201.6-532.8-360-1180.8-360S666.7,5503,666.7,5704.6 c0,86.4,86.4,158.4,244.8,216c216-86.4,547.2-144,936-144C2221.9,5776.6,2567.5,5834.2,2783.5,5920.6" class="msportalfx-svg-c13"/> <\/g> <path display="inline" d="M-427.7,6208.6c0-43.2,0-86.4,0-129.6c0-691.2,576-1252.8,1267.2-1252.8 c417.6,0,792,201.6,1022.4,518.4c144-86.4,331.2-144,504-144c532.8,0,964.8,432,964.8,950.4v72c360,187.2,547.2,475.2,547.2,849.6 c0,590.4-475.2,1051.2-1094.4,1051.2H76.3c-619.2,0-1094.4-460.8-1094.4-1051.2C-1018.1,6683.8-802.1,6381.4-427.7,6208.6z" class="msportalfx-svg-c19"/> <path display="inline" d="M3517.9,6496.6v-72c0-432-288-806.4-691.2-936c0,43.2,0,72,0,115.2 c0,936-748.8,1670.4-1713.6,1670.4H-946.1c0,28.8-14.4,72-14.4,100.8c0,604.8,489.6,1080,1123.2,1080h2793.6 c633.6,0,1123.2-475.2,1123.2-1080C4093.9,6986.2,3892.3,6683.8,3517.9,6496.6z" class="msportalfx-svg-c19"/> <g display="inline"> <path d="M2898.7,8167l720-864h-446.4c-14.4-633.6-273.6-1224-720-1670.4c-460.8-460.8-1080-720-1742.4-720 s-1267.2,259.2-1742.4,720l403.2,403.2c360-360,820.8-547.2,1324.8-547.2s979.2,187.2,1324.8,547.2 c345.6,345.6,532.8,792,547.2,1267.2h-432L2898.7,8167z" class="msportalfx-svg-c01"/> <\/g> <path display="inline" d="M-2011.7,4768.6c0-43.2,0-86.4,0-129.6c0-691.2,576-1252.8,1267.2-1252.8 c417.6,0,792,201.6,1022.4,518.4c144-86.4,331.2-144,504-144c532.8,0,964.8,432,964.8,950.4v72c360,187.2,547.2,475.2,547.2,849.6 c0,590.4-475.2,1051.2-1094.4,1051.2h-2707.2c-619.2,0-1094.4-460.8-1094.4-1051.2C-2602.1,5243.8-2386.1,4941.4-2011.7,4768.6z" class="msportalfx-svg-c15"/> <\/g> <g id="_x33_" display="none"> <path display="inline" d="M-1594.1,5239c0-57.6,0-100.8,0-158.4c0-835.2,691.2-1512,1526.4-1512 c504,0,964.8,244.8,1252.8,633.6c187.2-115.2,388.8-172.8,619.2-172.8c633.6,0,1166.4,518.4,1166.4,1152v86.4 c432,216,662.4,576,662.4,1036.8c0,705.6-576,1267.2-1324.8,1267.2H-960.5c-748.8,0-1324.8-561.6-1324.8-1267.2 C-2299.7,5815-2040.5,5440.6-1594.1,5239z" class="msportalfx-svg-c19"/> <path display="inline" d="M2970.7,7888.6c-28.8-648-302.4-1267.2-763.2-1728 c-489.6-489.6-1137.6-763.2-1828.8-763.2l0,0l0,0v144l0,0c43.2,0,86.4,0,129.6,0c-43.2,0-86.4,0-129.6,0v720 c460.8,0,907.2,187.2,1224,504c302.4,302.4,475.2,691.2,504,1123.2h-561.6l489.6,561.6l489.6,561.6l489.6-561.6l489.6-561.6H2970.7 z" class="msportalfx-svg-c13"/> <g display="inline"> <path d="M2783.5,7327c-158.4,57.6-316.8,86.4-489.6,86.4h-417.6c129.6,230.4,216,489.6,230.4,748.8h-561.6 l489.6,561.6l489.6,561.6l489.6-561.6l489.6-561.6h-532.8C2956.3,7874.2,2884.3,7600.6,2783.5,7327z" class="msportalfx-svg-c15"/> <path d="M364.3,6549.4v-720c43.2,0,86.4,0,129.6,0c-43.2,0-86.4,0-129.6,0l0,0v-144l0,0l0,0 c691.2,0,1339.2,273.6,1828.8,763.2c259.2,259.2,446.4,561.6,576,892.8c489.6-187.2,835.2-633.6,835.2-1180.8 c0-460.8-230.4-820.8-662.4-1036.8v-86.4c0-633.6-518.4-1152-1152-1152c-216,0-432,57.6-619.2,172.8 c-288-388.8-748.8-633.6-1252.8-633.6c-849.6,0-1526.4,676.8-1526.4,1512c0,57.6,0,100.8,0,158.4 c-460.8,216-705.6,590.4-705.6,1065.6c0,705.6,576,1267.2,1324.8,1267.2h2851.2c-72-129.6-172.8-259.2-273.6-360 C1271.5,6722.2,839.5,6549.4,364.3,6549.4z" class="msportalfx-svg-c15"/> <path d="M2783.5,7327c-129.6-331.2-316.8-633.6-576-892.8C1717.9,5944.6,1069.9,5671,378.7,5671l0,0l0,0v144l0,0 c43.2,0,86.4,0,129.6,0c-43.2,0-86.4,0-129.6,0v720c460.8,0,907.2,187.2,1224,504c115.2,115.2,201.6,230.4,273.6,360h417.6 C2466.7,7413.4,2639.5,7384.6,2783.5,7327z" class="msportalfx-svg-c01"/> <\/g> <\/g> <\/svg>'};
n.overage={type:1,data:'<svg viewBox="0 0 50 50" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g id="overageCosts"> <polygon points="14.2,31.7 10.9,35.8 10.9,37 42.3,37 42.3,13 33.5,25.5 " class="msportalfx-svg-c15"/> <polygon points="42.3,11.2 42.2,11.2 32.9,24.7 13.6,30.8 10.9,34.2 10.9,37 11.3,37 14.8,32.5 34.1,26.3 42.3,14.6 " class="msportalfx-svg-c19"/> <polygon points="32.6,26.9 42.3,13 42.3,26.9 " class="msportalfx-svg-c18"/> <polygon points="42.3,11.2 42.2,11.2 32.9,24.6 31.1,25.1 31.1,27.2 34.1,26.4 42.3,14.6 " class="msportalfx-svg-c08"/> <path d="M40.4,27h-3.1v-2.1h3.1V27z M34.2,27h-3.1v-2.1h3.1V27z M28,27H25v-2.1H28V27z M21.9,27h-3.1v-2.1h3.1V27z M15.7,27h-3.1v-2.1h3.1V27z" class="msportalfx-svg-c08"/> <polygon points="45,41.2 6.8,41.2 6.8,11 9.2,11 9.2,38.8 45,38.8 " class="msportalfx-svg-c06"/> <\/g> <\/svg>'};
n.advancedTelemetry={type:1,data:'<svg viewBox="0 0 50 50" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g id="Advanced"> <polygon points="45,41.2 6.8,41.2 6.8,11 9.2,11 9.2,38.8 45,38.8 " class="msportalfx-svg-c06"/> <polygon points="12.3,33.4 41.3,33.4 41.3,19.2 36.5,20.4 34.4,17.4 32.4,20.7 28.6,15.7 24.6,23.7 21.9,20 18.1,22.4 12.3,16.9 " class="msportalfx-svg-c15"/> <polygon points="41.3,26.9 38,27.1 36.6,27 33.2,21.7 29.1,27.7 27.3,25.4 25.2,27.9 22.4,23.2 20.2,27.1 17.6,27.3 16,24.1 14.2,27 12.3,25.9 12.3,35.8 41.3,35.7 " class="msportalfx-svg-c19"/> <polygon points="12.3,35.7 41.3,35.7 41.3,30.3 37.6,31 36.8,32 33.1,26.6 29.8,30.5 27.8,29.6 25.2,30.2 23.2,29.1 20.2,29.7 18.9,31.7 15.3,29.4 14.1,30.8 12.3,28.9 " class="msportalfx-svg-c16"/> <\/g> <\/svg>'};
n.saveAs={type:1,data:'<svg viewBox="0 0 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title> <path d="M8.2,14.8c0.2,0,0.2-0.2,0.1-0.3l-1.9-1.9c-0.1-0.1-0.3-0.1-0.3,0.1l-1.1,3c-0.1,0.2,0.1,0.3,0.3,0.3L8.2,14.8z"/> <path d="M15.3,5.7c-1.4-1.4-1.9-0.2-1.9-0.2C13.2,5.6,13,5.8,12.8,6c-0.1,0.1-0.1,0.3,0,0.6l1.7,1.7c0.1,0.1,0.4,0.1,0.6,0 c0.1-0.1,0.3-0.4,0.5-0.6C15.6,7.6,16.7,7,15.3,5.7z"/> <path d="M10,13.3c-0.1,0.1-0.4,0.1-0.6,0l-1.8-1.8c-0.1-0.1-0.1-0.3,0-0.5l3.7-3.6c0.1-0.1,0.4-0.1,0.6,0l1.7,1.7 c0.1,0.1,0.1,0.4,0,0.6L10,13.3z"/> <path d="M8.4,7.7L12,4.1V1.2C12,0.5,11.7,0,11,0H1C0.3,0,0,0.5,0,1.2v9.6C0,11.5,0.3,12,1,12h0.6V8.5c0-0.4,0.3-0.8,0.8-0.8H8.4z M1.6,4.6V2.3c0-0.4,0.3-0.8,0.8-0.8h7.2c0.4,0,0.8,0.4,0.8,0.9v2.3c0,0.4-0.3,0.7-0.8,0.7H2.4C2,5.4,1.6,5.1,1.6,4.6z"/> <polygon points="6,10.1 6,10 3,10 3,12 4.1,12 "/> <\/svg>'}}
)(t=n.Images||(n.Images={}))})(t=n.Content||(n.Content={}))}(n||(n={})),n});define("Shared/BillingPlanForComponentIdModel",
["require","exports","./AjaxHelper","./Constants","./UrlHelper","./QueryBase"],function(n,t,i,r,u,f)
{"use strict";function e(n){var t=null;return n&&n.d&&n.d.results&&(t=n.d.results),t}t.transformBillingPlan=
e;var o=function(){function n(n,t){this._billingPlanForComponentView=t._billingPlanForComponentIdEntityCache.
createView(n)}return n.prototype.GetBillingPlanForComponentId=function(n,t){var u=this,i=$.Deferred(
);return this._billingPlanForComponentView.fetch(new f.QueryBase(n,t,r.Queries.BillingPlan)).then(function(
){var t=u._billingPlanForComponentView.item();t?i.resolve(t):i.reject("Could not get billing plan for component id: "+
n.Name)},function(){i.reject("Could not get billing plan for component id: "+n.Name)}),i.promise()},
n.prototype.SetBillingPlanForComponentId=function(t,i,u,f){var o=this,e=$.Deferred(),s={_componentId:
t,_containerName:f,_queryName:r.Queries.SetBillingPlan},h=n._buildBillingPlanForComponentIdPath(t,{planSelected:
i,payOverage:u});return n._setBillingPlanFromGraphPath(h,s).then(function(){o._billingPlanForComponentView.
refresh().then(function(){e.resolve()},function(){e.reject("Unable to clear the cache for billing plan.")}
)},function(){e.reject("Could not set Spec for component id: "+t.Name)}),e.promise()},n._setBillingPlanFromGraphPath=
function(n,t){return i.apiPost(n,t)},n._buildBillingPlanForComponentIdPath=function(n,t){return u.buildGraphProxyPath(
n.SubscriptionId,n.ResourceGroup,r.GraphPathTemplates.BillingPlanForComponent,{componentName:n.Name},
t)},n}();t.BillingPlanForComponentIdModel=o});__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r};define("Shared/DataQueries/AggregateQuery",["require","exports","../SearchQueryBase","../Constants",
"../QueryBase"],function(n,t,i,r,u){"use strict";function f(n){var t=n._payload,o=null,i,r,f,e,s;return t.
DimensionFilters&&(o=t.DimensionFilters.map(function(n){if(n.FilterExpression)return"{dimension={0};filterExpression={1}}".
format(n.Dimension.Key,n.FilterExpression)}).join(";")),i=null,t.MetricsToCalculate&&(i=t.MetricsToCalculate.
map(function(n){return"{metric={0};applyFunction={1}}".format(n.Metric.Key,n.ApplyFunction)}).join(";")),
r=null,t.AggregateByDimension&&(r=t.AggregateByDimension.map(function(n){return n.Dimensions.map(function(
n){return"{dimension={0};grain={1};top={2}}".format(n.Key,n.Grain?n.Grain:null,n.Top?n.Top:null)}).join(
",")}).join(";")),f="",t.Query&&(f=";query={text={0}}".format(t.Query.Text)),e="",t.Streams&&(e=";streams=[{0}]".
format(t.Streams.join(","))),s=u.getKey(n),s+";payload={dimensionFilter={0};metricsToCalculate={1};aggregateByDimension={2}{3}{4}}".
format(o,i,r,f,e)}t.getKey=f;var e=function(n){function t(t,i,u){n.call(this,t,i,u);this._graphTemplate=
r.GraphPathTemplates.Aggregate;this._payload={}}return __extends(t,n),t.prototype.getSearchRequestPayload=
function(){return this._payload},t.prototype.addMetricsToCalculate=function(n,t){this._payload.MetricsToCalculate||
(this._payload.MetricsToCalculate=[]);this._payload.MetricsToCalculate.push({Metric:{Key:n},ApplyFunction:
t})},t.prototype.addAggregateByDimension=function(n,t,i){if(MsPortalFx.Base.Utilities.isNullOrUndefined(
n))this.addNestedDimensionAggregates([]);else{var r={Key:n};MsPortalFx.Base.Utilities.isNullOrUndefined(
t)||(r.Grain=t);MsPortalFx.Base.Utilities.isNullOrUndefined(i)||(r.Top=i);this.addNestedDimensionAggregates(
[r])}},t.prototype.addNestedDimensionAggregates=function(n){this._payload.AggregateByDimension||(this.
_payload.AggregateByDimension=[]);this._payload.AggregateByDimension.push({Dimensions:n})},t}(i.SearchQueryBase);
t.AggregateQuery=e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var
i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/SearchQueryBase",
["require","exports","./AttributeMetadataContainer","./QueryBase","./TimeContext","./Constants"],function(
n,t,i,r,u,f){"use strict";function e(n,t,r){var u="";return n.forEach(function(n,f){var e=n;r&&(e=r.
tryDimensionValueFromDisplayName(n,t));e=i.AttributeMetadataContainer.transformAttributeMetadata(t,e,
r);f===0?u="Key eq "+e:u+=" or Key eq "+e}),u}function o(n,t){return n&&t?"({0}) AND ({1})".format(n,
t):n?n:t?t:""}t.CreateFilterExpression=e;t.CreateAndStatement=o;var s=function(n){function t(t,i,r){
n.call(this,t,i,r)}return __extends(t,n),t.prototype.getSearchRequestPayload=function(){throw new Error(
"Derived classes must implement getSearchRequestPayload.");},t.prototype.includeTimeRangeFilter=function(
){return!0},t.prototype.getPayload=function(){var n=this.getSearchRequestPayload(),t;return this.includeTimeRangeFilter(
)&&this.timeContext&&(n=jQuery.extend(!0,{},n,{}),t=u.toTimeRange(this.timeContext),n.DimensionFilters||
(n.DimensionFilters=[]),n.DimensionFilters.push({Dimension:{Key:f.DimensionNames.RequestTime},Start:
t.startTime.toISOString(),End:t.endTime.toISOString()})),n},t.prototype.setQueryText=function(n){n&&
n.trim().length!==0||(n="*");this.getSearchRequestPayload().Query={Text:n}},t.prototype.addEventType=
function(n,t){t===void 0&&(t=!1);var i=this.getSearchRequestPayload();(!i.Streams||t)&&(i.Streams=[]);
i.Streams.push(n)},t.prototype.addDimensionFilter=function(n,t){var i=this.getSearchRequestPayload();
i.DimensionFilters||(i.DimensionFilters=[]);i.DimensionFilters.firstIndex(function(i){return i.Dimension.
Key===n&&i.FilterExpression===t})<0&&i.DimensionFilters.push({Dimension:{Key:n},FilterExpression:t})}
,t.prototype.addFacetFilters=function(n,t){var i,r;for(i in n)n[i].length>0&&(r=e(n[i],i,t),r&&r.length>
0&&this.addDimensionFilter(i,r))},t.getResult=function(n){return n&&n.d&&n.d.results&&n.d.results.value?
JSON.parse(n.d.results.value):null},t.prototype.prepareQuery=function(){this.httpMethod||(this.httpMethod=
"POST")},t}(r.QueryBase);t.SearchQueryBase=s});__extends=this.__extends||function(n,t){function r(){
this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Shared/AttributeMetadataContainer",["require","exports","./Constants","./MetadataContainer",
"./ClientSideMetadata","./DataQueries/MetadataQuery"],function(n,t,i,r,u,f){"use strict";var e=function(
n){function t(t,r,u){this._metadataCachedOnSearchResponseKey={};var f=r._attributeMetadataEntityCache.
createView(t);n.call(this,t,f,u,i.Queries.AttributeMetadata,!0)}return __extends(t,n),t.prototype.createQuery=
function(){return new f.AttributesMetadataQuery(this._componentId(),this._partName,this._queryName,this.
_currentRefreshStamp,this)},t.prototype.getRefreshStamp=function(n){return n===void 0&&(n=!1),n?++t.
_attributeRefreshStamp:t._attributeRefreshStamp},t.prototype.getMetadataKey=function(n){return n?n.Key:
null},t.prototype.getAttributeMetadataBySearchResponseKey=function(n){var i=this,t=this.getAllMetadataMap(
);return Object.keys(this._metadataCachedOnSearchResponseKey).length<Object.keys(t).length&&Object.keys(
t).forEach(function(n){var r=t[n];i._metadataCachedOnSearchResponseKey[r.SearchResponseKey]=r}),this.
_metadataCachedOnSearchResponseKey[n]},t.prototype.getClientSideMetadata=function(){return u.attributeMetadata}
,t.transformAttributeMetadata=function(n,t,i){var r,u;return t?(r=null,i&&(u=i.getMetadata(n),u&&(r=
u.DataType)),r||(r=/\.id$/i.test(n)?"string":isNaN(parseFloat(t))?/^([TF]|true|false)$/.test(t)?"boolean":
isNaN(Date.parse(t))?"string":"date":"number"),r==="string"?t="'"+t.replace(/'/g,"''")+"'":r==="boolean"&&
(t==="T"?t="true":t==="F"&&(t="false")),t):t},t.prototype.tryGetDisplayNameFromDimensionValue=function(
n,t){var i=this.getMetadata(n);return i&&i.Values&&i.Values[t]?i.Values[t]:t},t.prototype.tryDimensionValueFromDisplayName=
function(n,t){var i=this.getMetadata(t),r;if(i&&i.Values)for(r in i.Values)if(i.Values[r]===n)return r;
return n},t._attributeRefreshStamp=0,t}(r.MetadataContainer);t.AttributeMetadataContainer=e});define(
"Shared/MetadataContainer",["require","exports","./InsightsTelemetry","./ClientSideMetadata","./DataModels/MetadataCollection"],
function(n,t,i,r,u){"use strict";var f=function(){function n(n,t,i,r,u){this._componentId=ko.observable(
);this._partName=i;this._caseInsensitive=u;this._queryName=r;this._metaDataView=t;this._currentRefreshStamp=
this.getRefreshStamp();this._metadataCollection=undefined;this._metaDataView.item.subscribe(n,this._storeMetadata,
this)}return n.prototype.onInputsSet=function(n){return this.issueMetadataQuery(n.ComponentId)},n.prototype.
onInputsSetWithForceRefresh=function(n){var t=this.getRefreshStamp();return this._currentRefreshStamp===
t?(this.getRefreshStamp(!0),this.issueMetadataQuery(n)):(this._currentRefreshStamp=t,this._metaDataPromise)}
,n.prototype.issueMetadataQuery=function(n){this._componentId(n);this._currentRefreshStamp=this.getRefreshStamp(
);var t=this.createQuery();return this._metaDataPromise=this._metaDataView.fetch(t),this._metaDataPromise}
,n.prototype.createQuery=function(){throw new Error("Derived classes must implement createQuery.");}
,n.prototype.getRefreshStamp=function(n){n===void 0&&(n=!1);throw new Error("Derived classes must implement getRefreshStamp.");
},n.prototype.getMetadataKey=function(){throw new Error("Derived classes must implement getMetadataKey.");
},n.prototype.getMetadataPromise=function(){return this._metaDataPromise},n.prototype.getMetadata=function(
n){var t=this._caseInsensitive?n.toUpperCase():n;return this._metadataCollection?this._metadataCollection.
_metadataMap[t]:null},n.prototype.getAllMetadata=function(){return this._metadataCollection?this._metadataCollection.
_metadataArray:[]},n.prototype.getAllMetadataMap=function(){return this._metadataCollection?this._metadataCollection.
_metadataMap:{}},n.prototype.isSupportedMetadata=function(n){return!!n},n.prototype.getClientSideMetadata=
function(){return undefined},n.prototype.getClientSideMetadataTransformationFunc=function(){return undefined}
,n.prototype._storeMetadata=function(n){this._metadataCollection=n},n.prototype.transformWithClientSideMetadata=
function(n){var a=this,l=new u.MetadataCollection,t,f,e,o,s,h,c;if(n){if(t={},n.forEach(function(n){
var i=a.getMetadataKey(n);!i||(a._caseInsensitive&&(i=i.toUpperCase()),t[i]=n)},this),f=this.getClientSideMetadata(
),e=this.getClientSideMetadataTransformationFunc(),f)if(this._caseInsensitive)for(o in f)s=o.toUpperCase(
),t[s]?r.mergeMetadataProperties(t[s],f[o],e):t[s]=e?e(f[o]):f[o];else r.mergeMetadataProperties(t,f,
e);for(h in t)c=t[h],this.isSupportedMetadata(c)?(l._metadataMap[h]=c,l._metadataArray.push(c)):i.logWarning(
"Metadata {0} is not currently supported.".format(h),3,this._partName,this._componentId());n.length===
0&&i.logError("Receive empty metaData collection from backend",3,this._partName,this._componentId())}
return l},n}();t.MetadataContainer=f});define("Shared/ClientSideMetadata",["require","exports","ClientResources"],
function(n,t,i){"use strict";function r(n,t,i){if(i===void 0&&(i=undefined),n)for(var u in t)typeof t[
u]=="object"&&n[u]&&typeof n[u]=="object"?r(n[u],t[u]):n[u]=i?i(t[u]):t[u]}t.mergeMetadataProperties=
r;t.attributeMetadata={"context.device.os":{Key:"context.device.os",Description:i.attributeMetadataDescriptionContextDeviceOs,
DisplayOrder:10025},"context.device.os.analyzed":{Key:"context.device.os.analyzed",Description:i.attributeMetadataDescriptionContextDeviceOsAnalyzed,
DisplayOrder:Number.MAX_VALUE},"context.device.osVersion":{Key:"context.device.osVersion",Description:
i.attributeMetadataDescriptionContextDeviceOsVersion,DisplayOrder:10030},"context.device.type":{Key:
"context.device.type",Description:i.attributeMetadataDescriptionContextDeviceType,DisplayOrder:10040},
"context.device.vmName":{Key:"context.device.vmName",Description:i.attributeMetadataDescriptionContextDeviceVmName,
DisplayOrder:10050},"context.device.roleName":{Key:"context.device.roleName",Description:i.attributeMetadataDescriptionContextDeviceRoleName,
DisplayOrder:10060},"context.device.roleInstance":{Key:"context.device.roleInstance",Description:i.attributeMetadataDescriptionContextDeviceRoleInstance,
DisplayOrder:10070},"context.device.oemName":{Key:"context.device.oemName",Description:i.attributeMetadataDescriptionContextDeviceOemName,
DisplayOrder:10080},"context.device.oemName.analyzed":{Key:"context.device.oemName.analyzed",Description:
i.attributeMetadataDescriptionContextDeviceOemNameAnalyzed,DisplayOrder:Number.MAX_VALUE},"context.device.browser":
{Key:"context.device.browser",Description:i.attributeMetadataDescriptionContextDeviceBrowser,DisplayOrder:
10090},"context.device.browserVersion":{Key:"context.device.browserVersion",Description:i.attributeMetadataDescriptionContextDeviceBrowserVersion,
DisplayOrder:10100},"context.application.version":{Key:"context.application.version",Description:i.attributeMetadataDescriptionContextApplicationVersion,
DisplayOrder:Number.MAX_VALUE},"context.location.continent":{Key:"context.location.continent",Description:
i.attributeMetadataDescriptionContextLocationContinent,DisplayOrder:10120},"context.location.continent.analyzed":
{Key:"context.location.continent.analyzed",Description:i.attributeMetadataDescriptionContextLocationContinentAnalyzed,
DisplayOrder:Number.MAX_VALUE},"context.location.country":{Key:"context.location.country",Description:
i.attributeMetadataDescriptionContextLocationCountry,DisplayOrder:10130},"context.location.country.analyzed":
{Key:"context.location.country.analyzed",Description:i.attributeMetadataDescriptionContextLocationCountryAnalyzed,
DisplayOrder:Number.MAX_VALUE},"context.location.province":{Key:"context.location.province",Description:
i.attributeMetadataDescriptionContextLocationProvince,DisplayOrder:10140},"context.location.province.analyzed":
{Key:"context.location.province.analyzed",Description:i.attributeMetadataDescriptionContextLocationProvinceAnalyzed,
DisplayOrder:Number.MAX_VALUE},"context.location.city":{Key:"context.location.city",Description:i.attributeMetadataDescriptionContextLocationCity,
DisplayOrder:10150},"context.location.city.analyzed":{Key:"context.location.city.analyzed",Description:
i.attributeMetadataDescriptionContextLocationCityAnalyzed,DisplayOrder:Number.MAX_VALUE},"context.device.deviceModel":
{Key:"context.device.deviceModel",Description:i.attributeMetadataDescriptionContextDeviceDeviceModel,
DisplayOrder:10160},"context.device.deviceModel.analyzed":{Key:"context.device.deviceModel.analyzed",
Description:i.attributeMetadataDescriptionContextDeviceDeviceModelAnalyzed,DisplayOrder:Number.MAX_VALUE},
"context.device.network":{Key:"context.device.network",Description:i.attributeMetadataDescriptionContextDeviceNetwork,
DisplayOrder:10170},"context.device.language":{Key:"context.device.language",Description:i.attributeMetadataDescriptionContextDeviceLanguage,
DisplayOrder:10180},"context.device.language.analyzed":{Key:"context.device.language.analyzed",Description:
i.attributeMetadataDescriptionContextDeviceLanguageAnalyzed,DisplayOrder:Number.MAX_VALUE},"context.device.deploymentId":
{Key:"context.device.deploymentId",Description:i.attributeMetadataDescriptionContextDeviceDeploymentId,
DisplayOrder:10190},"context.device.screenResolution.value":{Key:"context.device.screenResolution.value",
Description:i.attributeMetadataDescriptionContextDeviceScreenResolutionValue,DisplayOrder:Number.MAX_VALUE},
"context.device.screenResolution.height":{Key:"context.device.screenResolution.height",Description:i.
attributeMetadataDescriptionContextDeviceScreenResolutionHeight,DisplayOrder:10200},"context.device.screenResolution.width":
{Key:"context.device.screenResolution.width",Description:i.attributeMetadataDescriptionContextDeviceScreenResolutionWidth,
DisplayOrder:10210},"context.device.locale":{Key:"context.device.locale",Description:i.attributeMetadataDescriptionContextDeviceLocale,
DisplayOrder:10220},"context.location.clientip.raw":{Key:"context.location.clientip.raw",Description:
i.attributeMetadataDescriptionContextLocationClientipRaw,DisplayOrder:Number.MAX_VALUE},"context.device.userAgent":
{Key:"context.device.userAgent",Description:i.attributeMetadataDescriptionContextDeviceUserAgent,DisplayOrder:
10020},"context.device.id":{Key:"context.device.id",Description:i.attributeMetadataDescriptionContextDeviceId,
DisplayOrder:10260},"context.data.eventTime":{Key:"context.data.eventTime",Description:i.attributeMetadataDescriptionContextDataEventTime,
DisplayOrder:1e3},"context.user.accountId":{Key:"context.user.accountId",Description:i.attributeMetadataDescriptionContextUserAccountId,
DisplayOrder:Number.MAX_VALUE},"context.session.id":{Key:"context.session.id",Description:i.attributeMetadataDescriptionContextSessionId,
DisplayOrder:Number.MAX_VALUE},"context.operation.id":{Key:"context.operation.id",Description:i.attributeMetadataDescriptionContextOperationId,
DisplayOrder:10240},"context.user.anonId":{Key:"context.user.anonId",Description:i.attributeMetadataDescriptionContextUserAnonId,
DisplayOrder:Number.MAX_VALUE},"context.user.authId":{Key:"context.user.authId",Description:i.attributeMetadataDescriptionContextUserAuthId,
DisplayOrder:Number.MAX_VALUE},"context.operation.parentId":{Key:"context.operation.parentId",Description:
i.attributeMetadataDescriptionContextOperationParentId,DisplayOrder:Number.MAX_VALUE},"context.user.anonAcquisitionDate":
{Key:"context.user.anonAcquisitionDate",Description:i.attributeMetadataDescriptionContextUserAnonAcquisitionDate,
DisplayOrder:Number.MAX_VALUE},"context.user.authAcquisitionDate":{Key:"context.user.authAcquisitionDate",
Description:i.attributeMetadataDescriptionContextUserAuthAcquisitionDate,DisplayOrder:Number.MAX_VALUE},
"context.user.accountAcquisitionDate":{Key:"context.user.accountAcquisitionDate",Description:i.attributeMetadataDescriptionContextUserAccountAcquisitionDate,
DisplayOrder:Number.MAX_VALUE},"context.location.point.lat":{Key:"context.location.point.lat",Description:
i.attributeMetadataDescriptionContextLocationPointLat,DisplayOrder:Number.MAX_VALUE},"context.location.point.lon":
{Key:"context.location.point.lon",Description:i.attributeMetadataDescriptionContextLocationPointLon,
DisplayOrder:Number.MAX_VALUE},"message.raw":{Key:"message.raw",Description:i.attributeMetadataDescriptionMessageRaw,
DisplayOrder:Number.MAX_VALUE},"message.id":{Key:"message.id",Description:i.attributeMetadataDescriptionMessageId,
DisplayOrder:Number.MAX_VALUE},"message.processId":{Key:"message.processId",Description:i.attributeMetadataDescriptionMessageProcessId,
DisplayOrder:1070},"message.level":{Key:"message.level",Description:i.attributeMetadataDescriptionMessageLevel,
DisplayOrder:Number.MAX_VALUE},"message.excerpt":{Key:"message.excerpt",Description:i.attributeMetadataDescriptionMessageExcerpt,
DisplayOrder:Number.MAX_VALUE},"message.sourceType":{Key:"message.sourceType",Description:i.attributeMetadataDescriptionMessageSourceType,
DisplayOrder:Number.MAX_VALUE},"message.threadId":{Key:"message.threadId",Description:i.attributeMetadataDescriptionMessageThreadId,
DisplayOrder:Number.MAX_VALUE},"message.context":{Key:"message.context",Description:i.attributeMetadataDescriptionMessageContext,
DisplayOrder:Number.MAX_VALUE},"message.exception":{Key:"message.exception",Description:i.attributeMetadataDescriptionMessageException,
DisplayOrder:Number.MAX_VALUE},"message.formatProvider":{Key:"message.formatProvider",Description:i.
attributeMetadataDescriptionMessageFormatProvider,DisplayOrder:Number.MAX_VALUE},"message.formatMessage":
{Key:"message.formatMessage",Description:i.attributeMetadataDescriptionMessageFormatMessage,DisplayOrder:
Number.MAX_VALUE},"message.loggerName":{Key:"message.loggerName",Description:i.attributeMetadataDescriptionMessageLoggerName,
DisplayOrder:Number.MAX_VALUE},"message.loggerShortName":{Key:"message.loggerShortName",Description:
i.attributeMetadataDescriptionMessageLoggerShortName,DisplayOrder:Number.MAX_VALUE},"message.parameters":
{Key:"message.parameters",Description:i.attributeMetadataDescriptionMessageParameters,DisplayOrder:Number.
MAX_VALUE},"message.sequenceId":{Key:"message.sequenceId",Description:i.attributeMetadataDescriptionMessageSequenceId,
DisplayOrder:Number.MAX_VALUE},"message.stackTrace":{Key:"message.stackTrace",Description:i.attributeMetadataDescriptionMessageStackTrace,
DisplayOrder:Number.MAX_VALUE},"message.userStackFrame":{Key:"message.userStackFrame",Description:i.
attributeMetadataDescriptionMessageUserStackFrame,DisplayOrder:Number.MAX_VALUE},"message.userStackFrameNumber":
{Key:"message.userStackFrameNumber",Description:i.attributeMetadataDescriptionMessageUserStackFrameNumber,
DisplayOrder:Number.MAX_VALUE},"message.severity":{Key:"message.severity",Description:i.attributeMetadataDescriptionMessageSeverity,
DisplayOrder:Number.MAX_VALUE},"message.hasStackTrace":{Key:"message.hasStackTrace",Description:i.attributeMetadataDescriptionMessageHasStackTrace,
DisplayOrder:Number.MAX_VALUE},"message.timestamp":{Key:"message.timestamp",Description:i.attributeMetadataDescriptionMessageTimestamp,
DisplayOrder:Number.MAX_VALUE},"message.className":{Key:"message.className",Description:i.attributeMetadataDescriptionMessageClassName,
DisplayOrder:Number.MAX_VALUE},"message.methodName":{Key:"message.methodName",Description:i.attributeMetadataDescriptionMessageMethodName,
DisplayOrder:Number.MAX_VALUE},"message.lineNumber":{Key:"message.lineNumber",Description:i.attributeMetadataDescriptionMessageLineNumber,
DisplayOrder:Number.MAX_VALUE},"message.userName":{Key:"message.userName",Description:i.attributeMetadataDescriptionMessageUserName,
DisplayOrder:Number.MAX_VALUE},"message.domain":{Key:"message.domain",Description:i.attributeMetadataDescriptionMessageDomain,
DisplayOrder:Number.MAX_VALUE},"message.machineName":{Key:"message.machineName",Description:i.attributeMetadataDescriptionMessageMachineName,
DisplayOrder:Number.MAX_VALUE},"message.processorCount":{Key:"message.processorCount",Description:i.
attributeMetadataDescriptionMessageProcessorCount,DisplayOrder:Number.MAX_VALUE},"message.rawUrl":{Key:
"message.rawUrl",Description:i.attributeMetadataDescriptionMessageRawUrl,DisplayOrder:Number.MAX_VALUE},
"message.severityLevel":{Key:"message.severityLevel",Description:i.attributeMetadataDescriptionMessageSeverityLevel,
DisplayOrder:1040},"request.name":{Key:"request.name",Description:i.attributeMetadataDescriptionRequestName,
DisplayOrder:Number.MAX_VALUE},"request.name.analyzed":{Key:"request.name.analyzed",Description:i.attributeMetadataDescriptionRequestNameAnalyzed,
DisplayOrder:Number.MAX_VALUE},"request.responseCode":{Key:"request.responseCode",Description:i.attributeMetadataDescriptionRequestResponseCode,
DisplayOrder:Number.MAX_VALUE},"request.success":{Key:"request.success",Description:i.attributeMetadataDescriptionRequestSuccess,
DisplayOrder:3040},"request.duration":{Key:"request.duration",Description:i.attributeMetadataDescriptionRequestDuration,
DisplayOrder:3030},"request.count":{Key:"request.count",Description:i.attributeMetadataDescriptionRequestCount,
DisplayOrder:3070},"request.id":{Key:"request.id",Description:i.attributeMetadataDescriptionRequestId,
DisplayOrder:3050},"request.urlData.protocol":{Key:"request.urlData.protocol",Description:i.attributeMetadataDescriptionRequestUrlDataProtocol,
DisplayOrder:Number.MAX_VALUE},"request.urlData.host":{Key:"request.urlData.host",Description:i.attributeMetadataDescriptionRequestUrlDataHost,
DisplayOrder:Number.MAX_VALUE},"request.urlData.base":{Key:"request.urlData.base",Description:i.attributeMetadataDescriptionRequestUrlDataBase,
DisplayOrder:Number.MAX_VALUE},"request.url":{Key:"request.url",Description:i.attributeMetadataDescriptionRequestUrl,
DisplayOrder:Number.MAX_VALUE},"request.urlData.queryParameters.parameter":{Key:"request.urlData.queryParameters.parameter",
Description:i.attributeMetadataDescriptionRequestUrlDataQueryParametersParameter,DisplayOrder:Number.
MAX_VALUE},"request.urlData.hashTag":{Key:"request.urlData.hashTag",Description:i.attributeMetadataDescriptionRequestUrlDataHashTag,
DisplayOrder:Number.MAX_VALUE},"request.httpMethod":{Key:"request.httpMethod",Description:i.attributeMetadataDescriptionRequestHttpMethod,
DisplayOrder:Number.MAX_VALUE},"request.urlData.queryParameters.value":{Key:"request.urlData.queryParameters.value",
Description:i.attributeMetadataDescriptionRequestUrlDataQueryParametersValue,DisplayOrder:Number.MAX_VALUE},
"request.urlData.port":{Key:"request.urlData.port",Description:i.attributeMetadataDescriptionRequestUrlDataPort,
DisplayOrder:Number.MAX_VALUE},"basicException.message":{Key:"basicException.message",Description:i.
attributeMetadataDescriptionBasicExceptionMessage,DisplayOrder:Number.MAX_VALUE},"basicException.handledAt":
{Key:"basicException.handledAt",Description:i.attributeMetadataDescriptionBasicExceptionHandledAt,DisplayOrder:
Number.MAX_VALUE},"basicException.handledAt.analyzed":{Key:"basicException.handledAt.analyzed",Description:
i.attributeMetadataDescriptionBasicExceptionHandledAtAnalyzed,DisplayOrder:Number.MAX_VALUE},"basicException.typeName":
{Key:"basicException.typeName",Description:i.attributeMetadataDescriptionBasicExceptionTypeName,DisplayOrder:
Number.MAX_VALUE},"basicException.typeName.analyzed":{Key:"basicException.typeName.analyzed",Description:
i.attributeMetadataDescriptionBasicExceptionTypeNameAnalyzed,DisplayOrder:Number.MAX_VALUE},"basicException.parsedStack.assembly":
{Key:"basicException.parsedStack.assembly",Description:i.attributeMetadataDescriptionBasicExceptionParsedStackAssembly,
DisplayOrder:Number.MAX_VALUE},"basicException.parsedStack.fileName":{Key:"basicException.parsedStack.fileName",
Description:i.attributeMetadataDescriptionBasicExceptionParsedStackFileName,DisplayOrder:Number.MAX_VALUE},
"basicException.parsedStack.fileName.analyzed":{Key:"basicException.parsedStack.fileName.analyzed",Description:
i.attributeMetadataDescriptionBasicExceptionParsedStackFileNameAnalyzed,DisplayOrder:Number.MAX_VALUE},
"basicException.exceptionType":{Key:"basicException.exceptionType",Description:i.attributeMetadataDescriptionBasicExceptionExceptionType,
DisplayOrder:Number.MAX_VALUE},"basicException.exceptionType.analyzed":{Key:"basicException.exceptionType.analyzed",
Description:i.attributeMetadataDescriptionBasicExceptionExceptionTypeAnalyzed,DisplayOrder:Number.MAX_VALUE},
"basicException.method":{Key:"basicException.method",Description:i.attributeMetadataDescriptionBasicExceptionMethod,
DisplayOrder:4080},"basicException.method.analyzed":{Key:"basicException.method.analyzed",Description:
i.attributeMetadataDescriptionBasicExceptionMethodAnalyzed,DisplayOrder:Number.MAX_VALUE},"basicException.assembly":
{Key:"basicException.assembly",Description:i.attributeMetadataDescriptionBasicExceptionAssembly,DisplayOrder:
4090},"basicException.assembly.analyzed":{Key:"basicException.assembly.analyzed",Description:i.attributeMetadataDescriptionBasicExceptionAssemblyAnalyzed,
DisplayOrder:Number.MAX_VALUE},"basicException.problemId":{Key:"basicException.problemId",Description:
i.attributeMetadataDescriptionBasicExceptionProblemId,DisplayOrder:Number.MAX_VALUE},"basicException.problemId.analyzed":
{Key:"basicException.problemId.analyzed",Description:i.attributeMetadataDescriptionBasicExceptionProblemIdAnalyzed,
DisplayOrder:Number.MAX_VALUE},"basicException.count":{Key:"basicException.count",Description:i.attributeMetadataDescriptionBasicExceptionCount,
DisplayOrder:Number.MAX_VALUE},"basicException.stack":{Key:"basicException.stack",Description:i.attributeMetadataDescriptionBasicExceptionStack,
DisplayOrder:Number.MAX_VALUE},"basicException.hasFullStack":{Key:"basicException.hasFullStack",Description:
i.attributeMetadataDescriptionBasicExceptionHasFullStack,DisplayOrder:Number.MAX_VALUE},"basicException.hasFullStack.analyzed":
{Key:"basicException.hasFullStack.analyzed",Description:i.attributeMetadataDescriptionBasicExceptionHasFullStackAnalyzed,
DisplayOrder:Number.MAX_VALUE},"basicException.parsedStack.method":{Key:"basicException.parsedStack.method",
Description:i.attributeMetadataDescriptionBasicExceptionParsedStackMethod,DisplayOrder:Number.MAX_VALUE},
"basicException.parsedStack.level":{Key:"basicException.parsedStack.level",Description:i.attributeMetadataDescriptionBasicExceptionParsedStackLevel,
DisplayOrder:Number.MAX_VALUE},"basicException.parsedStack.line":{Key:"basicException.parsedStack.line",
Description:i.attributeMetadataDescriptionBasicExceptionParsedStackLine,DisplayOrder:Number.MAX_VALUE},
"basicException.outerId":{Key:"basicException.outerId",Description:i.attributeMetadataDescriptionBasicExceptionOuterId,
DisplayOrder:Number.MAX_VALUE},"basicException.severityLevel":{Key:"basicException.severityLevel",Description:
i.attributeMetadataDescriptionBasicExceptionSeverityLevel,DisplayOrder:Number.MAX_VALUE},"basicException.outerExceptionType":
{Key:"basicException.outerExceptionType",Description:i.attributeMetadataDescriptionBasicExceptionOuterExceptionType,
DisplayOrder:Number.MAX_VALUE},"basicException.outerExceptionType.analyzed":{Key:"basicException.outerExceptionType.analyzed",
Description:i.attributeMetadataDescriptionBasicExceptionOuterExceptionTypeAnalyzed,DisplayOrder:Number.
MAX_VALUE},"basicException.outerExceptionThrownAtMethod":{Key:"basicException.outerExceptionThrownAtMethod",
Description:i.attributeMetadataDescriptionBasicExceptionOuterExceptionThrownAtMethod,DisplayOrder:Number.
MAX_VALUE},"basicException.outerExceptionThrownAtMethod.analyzed":{Key:"basicException.outerExceptionThrownAtMethod.analyzed",
Description:i.attributeMetadataDescriptionBasicExceptionOuterExceptionThrownAtMethodAnalyzed,DisplayOrder:
Number.MAX_VALUE},"basicException.outerExceptionThrownAtAssembly":{Key:"basicException.outerExceptionThrownAtAssembly",
Description:i.attributeMetadataDescriptionBasicExceptionOuterExceptionThrownAtAssembly,DisplayOrder:
Number.MAX_VALUE},"basicException.outerExceptionThrownAtAssembly.analyzed":{Key:"basicException.outerExceptionThrownAtAssembly.analyzed",
Description:i.attributeMetadataDescriptionBasicExceptionOuterExceptionThrownAtAssemblyAnalyzed,DisplayOrder:
Number.MAX_VALUE},"basicException.outerExceptionMessage":{Key:"basicException.outerExceptionMessage",
Description:i.attributeMetadataDescriptionBasicExceptionOuterExceptionMessage,DisplayOrder:Number.MAX_VALUE},
"basicException.innermostExceptionType":{Key:"basicException.innermostExceptionType",Description:i.attributeMetadataDescriptionBasicExceptionInnermostExceptionType,
DisplayOrder:Number.MAX_VALUE},"basicException.innermostExceptionType.analyzed":{Key:"basicException.innermostExceptionType.analyzed",
Description:i.attributeMetadataDescriptionBasicExceptionInnermostExceptionTypeAnalyzed,DisplayOrder:
Number.MAX_VALUE},"basicException.innermostExceptionThrownAtMethod":{Key:"basicException.innermostExceptionThrownAtMethod",
Description:i.attributeMetadataDescriptionBasicExceptionInnermostExceptionThrownAtMethod,DisplayOrder:
Number.MAX_VALUE},"basicException.innermostExceptionThrownAtMethod.analyzed":{Key:"basicException.innermostExceptionThrownAtMethod.analyzed",
Description:i.attributeMetadataDescriptionBasicExceptionInnermostExceptionThrownAtMethodAnalyzed,DisplayOrder:
Number.MAX_VALUE},"basicException.innermostExceptionThrownAtAssembly":{Key:"basicException.innermostExceptionThrownAtAssembly",
Description:i.attributeMetadataDescriptionBasicExceptionInnermostExceptionThrownAtAssembly,DisplayOrder:
Number.MAX_VALUE},"basicException.innermostExceptionThrownAtAssembly.analyzed":{Key:"basicException.innermostExceptionThrownAtAssembly.analyzed",
Description:i.attributeMetadataDescriptionBasicExceptionInnermostExceptionThrownAtAssemblyAnalyzed,DisplayOrder:
Number.MAX_VALUE},"basicException.innermostExceptionMessage":{Key:"basicException.innermostExceptionMessage",
Description:i.attributeMetadataDescriptionBasicExceptionInnermostExceptionMessage,DisplayOrder:Number.
MAX_VALUE},"basicException.failedUserCodeMethod":{Key:"basicException.failedUserCodeMethod",Description:
i.attributeMetadataDescriptionBasicExceptionFailedUserCodeMethod,DisplayOrder:Number.MAX_VALUE},"basicException.failedUserCodeMethod.analyzed":
{Key:"basicException.failedUserCodeMethod.analyzed",Description:i.attributeMetadataDescriptionBasicExceptionFailedUserCodeMethodAnalyzed,
DisplayOrder:Number.MAX_VALUE},"basicException.failedUserCodeAssembly":{Key:"basicException.failedUserCodeAssembly",
Description:i.attributeMetadataDescriptionBasicExceptionFailedUserCodeAssembly,DisplayOrder:Number.MAX_VALUE},
"basicException.failedUserCodeAssembly.analyzed":{Key:"basicException.failedUserCodeAssembly.analyzed",
Description:i.attributeMetadataDescriptionBasicExceptionFailedUserCodeAssemblyAnalyzed,DisplayOrder:
Number.MAX_VALUE},"basicException.exceptionGroup":{Key:"basicException.exceptionGroup",Description:i.
attributeMetadataDescriptionBasicExceptionExceptionGroup,DisplayOrder:Number.MAX_VALUE},"basicException.exceptionGroup.analyzed":
{Key:"basicException.exceptionGroup.analyzed",Description:i.attributeMetadataDescriptionBasicExceptionExceptionGroupAnalyzed,
DisplayOrder:Number.MAX_VALUE},"view.name":{Key:"view.name",Description:i.attributeMetadataDescriptionViewName,
DisplayOrder:5e3},"view.name.analyzed":{Key:"view.name.analyzed",Description:i.attributeMetadataDescriptionViewNameAnalyzed,
DisplayOrder:Number.MAX_VALUE},"view.url":{Key:"view.url",Description:i.attributeMetadataDescriptionViewUrl,
DisplayOrder:5010},"view.urlData.raw":{Key:"view.urlData.raw",Description:i.attributeMetadataDescriptionViewUrlDataRaw,
DisplayOrder:Number.MAX_VALUE},"view.urlData.base":{Key:"view.urlData.base",Description:i.attributeMetadataDescriptionViewUrlDataBase,
DisplayOrder:Number.MAX_VALUE},"view.referrerData.raw":{Key:"view.referrerData.raw",Description:i.attributeMetadataDescriptionViewReferrerDataRaw,
DisplayOrder:5040},"view.referrerData.base":{Key:"view.referrerData.base",Description:i.attributeMetadataDescriptionViewReferrerDataBase,
DisplayOrder:5051},"view.count":{Key:"view.count",Description:i.attributeMetadataDescriptionViewCount,
DisplayOrder:Number.MAX_VALUE},"view.urlData.port":{Key:"view.urlData.port",Description:i.attributeMetadataDescriptionViewUrlDataPort,
DisplayOrder:Number.MAX_VALUE},"view.urlData.hashTag":{Key:"view.urlData.hashTag",Description:i.attributeMetadataDescriptionViewUrlDataHashTag,
DisplayOrder:Number.MAX_VALUE},"view.urlData.host":{Key:"view.urlData.host",Description:i.attributeMetadataDescriptionViewUrlDataHost,
DisplayOrder:Number.MAX_VALUE},"view.urlData.protocol":{Key:"view.urlData.protocol",Description:i.attributeMetadataDescriptionViewUrlDataProtocol,
DisplayOrder:Number.MAX_VALUE},"event.name":{Key:"event.name",Description:i.attributeMetadataDescriptionEventName,
DisplayOrder:2e3},"event.name.analyzed":{Key:"event.name.analyzed",Description:i.attributeMetadataDescriptionEventNameAnalyzed,
DisplayOrder:Number.MAX_VALUE},"event.pageName":{Key:"event.pageName",Description:i.attributeMetadataDescriptionEventPageName,
DisplayOrder:Number.MAX_VALUE},"event.type":{Key:"event.type",Description:i.attributeMetadataDescriptionEventType,
DisplayOrder:Number.MAX_VALUE},"event.count":{Key:"event.count",Description:i.attributeMetadataDescriptionEventCount,
DisplayOrder:2020},"event.urlData.protocol":{Key:"event.urlData.protocol",Description:i.attributeMetadataDescriptionEventUrlDataProtocol,
DisplayOrder:Number.MAX_VALUE},"event.urlData.host":{Key:"event.urlData.host",Description:i.attributeMetadataDescriptionEventUrlDataHost,
DisplayOrder:Number.MAX_VALUE},"event.urlData.base":{Key:"event.urlData.base",Description:i.attributeMetadataDescriptionEventUrlDataBase,
DisplayOrder:Number.MAX_VALUE},"event.urlData.raw":{Key:"event.urlData.raw",Description:i.attributeMetadataDescriptionEventUrlDataRaw,
DisplayOrder:Number.MAX_VALUE},"event.urlData.queryParameters.parameter":{Key:"event.urlData.queryParameters.parameter",
Description:i.attributeMetadataDescriptionEventUrlDataQueryParametersParameter,DisplayOrder:Number.MAX_VALUE},
"event.urlData.hashTag":{Key:"event.urlData.hashTag",Description:i.attributeMetadataDescriptionEventUrlDataHashTag,
DisplayOrder:Number.MAX_VALUE},"event.urlData.queryParameters.value":{Key:"event.urlData.queryParameters.value",
Description:i.attributeMetadataDescriptionEventUrlDataQueryParametersValue,DisplayOrder:Number.MAX_VALUE},
"clientPerformance.urlData.raw":{Key:"clientPerformance.urlData.raw",Description:i.attributeMetadataDescriptionClientPerformanceUrlDataRaw,
DisplayOrder:Number.MAX_VALUE},"clientPerformance.urlData.base":{Key:"clientPerformance.urlData.base",
Description:i.attributeMetadataDescriptionClientPerformanceUrlDataBase,DisplayOrder:Number.MAX_VALUE},
"clientPerformance.total.value":{Key:"clientPerformance.total.value",Description:i.attributeMetadataDescriptionClientPerformanceTotalValue,
DisplayOrder:Number.MAX_VALUE},"clientPerformance.networkConnection.value":{Key:"clientPerformance.networkConnection.value",
Description:i.attributeMetadataDescriptionClientPerformanceNetworkConnectionValue,DisplayOrder:Number.
MAX_VALUE},"clientPerformance.sendRequest.value":{Key:"clientPerformance.sendRequest.value",Description:
i.attributeMetadataDescriptionClientPerformanceSendRequestValue,DisplayOrder:Number.MAX_VALUE},"clientPerformance.receiveRequest.value":
{Key:"clientPerformance.receiveRequest.value",Description:i.attributeMetadataDescriptionClientPerformanceReceiveRequestValue,
DisplayOrder:Number.MAX_VALUE},"clientPerformance.clientProcess.value":{Key:"clientPerformance.clientProcess.value",
Description:i.attributeMetadataDescriptionClientPerformanceClientProcessValue,DisplayOrder:Number.MAX_VALUE},
"remoteDependency.durationMetric.count":{Key:"remoteDependency.durationMetric.count",Description:i.attributeMetadataDescriptionRemoteDependencyDurationMetricCount,
DisplayOrder:Number.MAX_VALUE},"remoteDependency.durationMetric.value":{Key:"remoteDependency.durationMetric.value",
Description:i.attributeMetadataDescriptionRemoteDependencyDurationMetricValue,DisplayOrder:Number.MAX_VALUE},
"remoteDependency.durationMetric.name":{Key:"remoteDependency.durationMetric.name",Description:i.attributeMetadataDescriptionRemoteDependencyDurationMetricName,
DisplayOrder:Number.MAX_VALUE},"remoteDependency.type":{Key:"remoteDependency.type",Description:i.attributeMetadataDescriptionRemoteDependencyType,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.id":{Key:"sessionMetric.id",Description:i.attributeMetadataDescriptionSessionMetricId,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.durationMetric.value":{Key:"sessionMetric.durationMetric.value",
Description:i.attributeMetadataDescriptionSessionMetricDurationMetricValue,DisplayOrder:Number.MAX_VALUE},
"sessionMetric.entryUrl":{Key:"sessionMetric.entryUrl",Description:i.attributeMetadataDescriptionSessionMetricEntryUrl,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.entryUrl.analyzed":{Key:"sessionMetric.entryUrl.analyzed",
Description:i.attributeMetadataDescriptionSessionMetricEntryUrlAnalyzed,DisplayOrder:Number.MAX_VALUE},
"sessionMetric.exitUrl":{Key:"sessionMetric.exitUrl",Description:i.attributeMetadataDescriptionSessionMetricExitUrl,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.exitUrl.analyzed":{Key:"sessionMetric.exitUrl.analyzed",
Description:i.attributeMetadataDescriptionSessionMetricExitUrlAnalyzed,DisplayOrder:Number.MAX_VALUE},
"sessionMetric.eventCountMetric.value":{Key:"sessionMetric.eventCountMetric.value",DisplayName:i.attributeMetadataDisplayNameSessionMetricEventCountMetricValue,
Description:i.attributeMetadataDescriptionSessionMetricEventCountMetricValue,DisplayOrder:Number.MAX_VALUE},
"sessionMetric.pageBounceActivity":{Key:"sessionMetric.pageBounceActivity",DisplayName:i.attributeMetadataDisplayNameSessionMetricPageBounceActivity,
Description:i.attributeMetadataDescriptionSessionMetricPageBounceActivity,DisplayOrder:Number.MAX_VALUE,
Values:{1:i.pageBounceSinglePage,2:i.pageBounceMultiplePages},HelpMessage:i.latentComputeDimensionHelpMessage},
"sessionMetric.pageBounceActivity.analyzed":{Key:"sessionMetric.pageBounceActivity.analyzed",DisplayName:
i.attributeMetadataDisplayNameSessionMetricPageBounceActivityAnalyzed,Description:i.attributeMetadataDescriptionSessionMetricPageBounceActivityAnalyzed,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.entryEvent":{Key:"sessionMetric.entryEvent",Description:
i.attributeMetadataDescriptionSessionMetricEntryEvent,DisplayOrder:Number.MAX_VALUE},"sessionMetric.entryEvent.analyzed":
{Key:"sessionMetric.entryEvent.analyzed",Description:i.attributeMetadataDescriptionSessionMetricEntryEventAnalyzed,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.exitEvent":{Key:"sessionMetric.exitEvent",Description:
i.attributeMetadataDescriptionSessionMetricExitEvent,DisplayOrder:Number.MAX_VALUE},"sessionMetric.exitEvent.analyzed":
{Key:"sessionMetric.exitEvent.analyzed",Description:i.attributeMetadataDescriptionSessionMetricExitEventAnalyzed,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.pageCountMetric.value":{Key:"sessionMetric.pageCountMetric.value",
DisplayName:i.attributeMetadataDisplayNameSessionMetricPageCountMetricValue,Description:i.attributeMetadataDescriptionSessionMetricPageCountMetricValue,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.exceptionCountMetric.value":{Key:"sessionMetric.exceptionCountMetric.value",
DisplayName:i.attributeMetadataDisplayNameSessionMetricExceptionCountMetricValue,Description:i.attributeMetadataDescriptionSessionMetricExceptionCountMetricValue,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.requestCountMetric.value":{Key:"sessionMetric.requestCountMetric.value",
DisplayName:i.attributeMetadataDisplayNameSessionMetricRequestCountMetricValue,Description:i.attributeMetadataDescriptionSessionMetricRequestCountMetricValue,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.anonymousUserDurationSinceLastVisitMetric.value":{Key:
"sessionMetric.anonymousUserDurationSinceLastVisitMetric.value",Description:i.attributeMetadataDescriptionSessionMetricAnonymousUserDurationSinceLastVisitMetricValue,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.authenticatedUserDurationSinceLastVisitMetric.value":{
Key:"sessionMetric.authenticatedUserDurationSinceLastVisitMetric.value",Description:i.attributeMetadataDescriptionSessionMetricAuthenticatedUserDurationSinceLastVisitMetricValue,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.anonymousUserSessionCountMetric.value":{Key:"sessionMetric.anonymousUserSessionCountMetric.value",
Description:i.attributeMetadataDescriptionSessionMetricAnonymousUserSessionCountMetricValue,DisplayOrder:
Number.MAX_VALUE},"sessionMetric.authenticatedUserSessionCountMetric.value":{Key:"sessionMetric.authenticatedUserSessionCountMetric.value",
Description:i.attributeMetadataDescriptionSessionMetricAuthenticatedUserSessionCountMetricValue,DisplayOrder:
Number.MAX_VALUE},"sessionMetric.authenticatedAccountSessionCountMetric.value":{Key:"sessionMetric.authenticatedAccountSessionCountMetric.value",
Description:i.attributeMetadataDescriptionSessionMetricAuthenticatedAccountSessionCountMetricValue,DisplayOrder:
Number.MAX_VALUE},"sessionMetric.authenticatedAccountDurationSinceLastVisitMetric.value":{Key:"sessionMetric.authenticatedAccountDurationSinceLastVisitMetric.value",
Description:i.attributeMetadataDescriptionSessionMetricAuthenticatedAccountDurationSinceLastVisitMetricValue,
DisplayOrder:Number.MAX_VALUE},"performanceCounter.categoryName":{Key:"performanceCounter.categoryName",
Description:i.attributeMetadataDescriptionPerformanceCounterCategoryName,DisplayOrder:Number.MAX_VALUE},
"performanceCounter.instanceName":{Key:"performanceCounter.instanceName",Description:i.attributeMetadataDescriptionPerformanceCounterInstanceName,
DisplayOrder:Number.MAX_VALUE}};t.metricMetadata={"context.user.anonId.hash":{Key:"context.user.anonId.hash",
Description:i.metricMetadataDescriptionContextUserAnonIdHash,DisplayOrder:Number.MAX_VALUE},"context.user.authId.hash":
{Key:"context.user.authId.hash",Description:i.metricMetadataDescriptionContextUserAuthIdHash,DisplayOrder:
Number.MAX_VALUE},"context.user.accountId.hash":{Key:"context.user.accountId.hash",Description:i.metricMetadataDescriptionContextUserAccountIdHash,
DisplayOrder:Number.MAX_VALUE},"context.session.id.hash":{Key:"context.session.id.hash",Description:
i.metricMetadataDescriptionContextSessionIdHash,DisplayOrder:Number.MAX_VALUE},"context.user.new":{Key:
"context.user.new",Description:i.metricMetadataDescriptionContextUserNew,DisplayOrder:Number.MAX_VALUE},
"request.count":{Key:"request.count",Description:i.metricMetadataDescriptionRequestCount,DisplayOrder:
3070},"requestFailed.count":{Key:"requestFailed.count",Description:i.metricMetadataDescriptionRequestFailedCount,
DisplayOrder:Number.MAX_VALUE},"request.duration":{Key:"request.duration",Description:i.metricMetadataDescriptionRequestDuration,
DisplayOrder:3030},"basicException.count":{Key:"basicException.count",Description:i.metricMetadataDescriptionBasicExceptionCount,
DisplayOrder:Number.MAX_VALUE},"basicExceptionBrowser.count":{Key:"basicExceptionBrowser.count",Description:
i.metricMetadataDescriptionBasicExceptionBrowserCount,DisplayOrder:Number.MAX_VALUE},"basicExceptionServer.count":
{Key:"basicExceptionServer.count",Description:i.metricMetadataDescriptionBasicExceptionServerCount,DisplayOrder:
Number.MAX_VALUE},"basicExceptionCrash.count":{Key:"basicExceptionCrash.count",Description:i.metricMetadataDescriptionBasicExceptionCrashCount,
DisplayOrder:Number.MAX_VALUE},"basicExceptionHandled.count":{Key:"basicExceptionHandled.count",Description:
i.metricMetadataDescriptionBasicExceptionHandledCount,DisplayOrder:Number.MAX_VALUE},"context.user.impactedUsers":
{Key:"context.user.impactedUsers",Description:i.metricMetadataDescriptionContextUserImpactedUsers,DisplayOrder:
Number.MAX_VALUE},"remoteDependency.durationMetric.count":{Key:"remoteDependency.durationMetric.count",
Description:i.metricMetadataDescriptionRemoteDependencyDurationMetricCount,DisplayOrder:Number.MAX_VALUE},
"remoteDependencyFailed.durationMetric.count":{Key:"remoteDependencyFailed.durationMetric.count",Description:
i.metricMetadataDescriptionRemoteDependencyFailedDurationMetricCount,DisplayOrder:Number.MAX_VALUE},
"remoteDependency.durationMetric.value":{Key:"remoteDependency.durationMetric.value",Description:i.metricMetadataDescriptionRemoteDependencyDurationMetricValue,
DisplayOrder:Number.MAX_VALUE},"view.count":{Key:"view.count",Description:i.metricMetadataDescriptionViewCount,
DisplayOrder:Number.MAX_VALUE},"view.durationMetric.value":{Key:"view.durationMetric.value",Description:
i.metricMetadataDescriptionViewDurationMetricValue,DisplayOrder:Number.MAX_VALUE},"clientPerformance.total.value":
{Key:"clientPerformance.total.value",Description:i.metricMetadataDescriptionClientPerformanceTotalValue,
DisplayOrder:Number.MAX_VALUE},"clientPerformance.networkConnection.value":{Key:"clientPerformance.networkConnection.value",
Description:i.metricMetadataDescriptionClientPerformanceNetworkConnectionValue,DisplayOrder:Number.MAX_VALUE},
"clientPerformance.sendRequest.value":{Key:"clientPerformance.sendRequest.value",Description:i.metricMetadataDescriptionClientPerformanceSendRequestValue,
DisplayOrder:Number.MAX_VALUE},"clientPerformance.receiveRequest.value":{Key:"clientPerformance.receiveRequest.value",
Description:i.metricMetadataDescriptionClientPerformanceReceiveRequestValue,DisplayOrder:Number.MAX_VALUE},
"clientPerformance.clientProcess.value":{Key:"clientPerformance.clientProcess.value",Description:i.metricMetadataDescriptionClientPerformanceClientProcessValue,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.durationMetric.value":{Key:"sessionMetric.durationMetric.value",
Description:i.metricMetadataDescriptionSessionMetricDurationMetricValue,DisplayOrder:Number.MAX_VALUE},
"sessionMetric.anonymousUserDurationSinceLastVisitMetric.value":{Key:"sessionMetric.anonymousUserDurationSinceLastVisitMetric.value",
Description:i.metricMetadataDescriptionSessionMetricAnonymousUserDurationSinceLastVisitMetricValue,DisplayOrder:
Number.MAX_VALUE},"sessionMetric.eventCountMetric.value":{Key:"sessionMetric.eventCountMetric.value",
DisplayName:i.metricMetadataDisplayNameSessionMetricEventCountMetricValue,Description:i.metricMetadataDescriptionSessionMetricEventCountMetricValue,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.pageCountMetric.value":{Key:"sessionMetric.pageCountMetric.value",
DisplayName:i.metricMetadataDisplayNameSessionMetricPageCountMetricValue,Description:i.metricMetadataDescriptionSessionMetricPageCountMetricValue,
DisplayOrder:Number.MAX_VALUE},"sessionMetric.exceptionCountMetric.value":{Key:"sessionMetric.exceptionCountMetric.value",
DisplayName:i.metricMetadataDisplayNameSessionMetricExceptionCountMetricValue,Description:i.metricMetadataDescriptionSessionMetricExceptionCountMetricValue,
DisplayOrder:Number.MAX_VALUE},"event.count":{Key:"event.count",Description:i.metricMetadataDescriptionEventCount,
DisplayOrder:2020},"performanceCounter.percentage_processor_time.value":{Key:"performanceCounter.percentage_processor_time.value",
Description:i.metricMetadataDescriptionPerformanceCounterPercentageProcessorTimeValue,DisplayOrder:Number.
MAX_VALUE},"performanceCounter.available_bytes.value":{Key:"performanceCounter.available_bytes.value",
Description:i.metricMetadataDescriptionPerformanceCounterAvailableBytesValue,DisplayOrder:Number.MAX_VALUE},
"performanceCounter.requests_per_sec.value":{Key:"performanceCounter.requests_per_sec.value",Description:
i.metricMetadataDescriptionPerformanceCounterRequestsPerSecValue,DisplayOrder:Number.MAX_VALUE},"performanceCounter.number_of_exceps_thrown_per_sec.value":
{Key:"performanceCounter.number_of_exceps_thrown_per_sec.value",Description:i.metricMetadataDescriptionPerformanceCounterNumberOfExcepsThrownPerSecValue,
DisplayOrder:Number.MAX_VALUE},"performanceCounter.process_private_bytes.value":{Key:"performanceCounter.process_private_bytes.value",
Description:i.metricMetadataDescriptionPerformanceCounterProcessPrivateBytesValue,DisplayOrder:Number.
MAX_VALUE},"performanceCounter.io_data_bytes_per_sec.value":{Key:"performanceCounter.io_data_bytes_per_sec.value",
Description:i.metricMetadataDescriptionPerformanceCounterIoDataBytesPerSecValue,DisplayOrder:Number.
MAX_VALUE},"performanceCounter.request_execution_time.value":{Key:"performanceCounter.request_execution_time.value",
Description:i.metricMetadataDescriptionPerformanceCounterRequestExecutionTimeValue,DisplayOrder:Number.
MAX_VALUE},"performanceCounter.requests_in_application_queue.value":{Key:"performanceCounter.requests_in_application_queue.value",
Description:i.metricMetadataDescriptionPerformanceCounterRequestsInApplicationQueueValue,DisplayOrder:
Number.MAX_VALUE},"performanceCounter.percentage_processor_total.value":{Key:"performanceCounter.percentage_processor_total.value",
Description:i.metricMetadataDescriptionPerformanceCounterPercentageProcessorTotalValue,DisplayOrder:
Number.MAX_VALUE},"request.rate":{Key:"request.rate",Description:i.metricMetadataDescriptionRequestRate,
DisplayOrder:Number.MAX_VALUE}}});define("Shared/DataModels/MetadataCollection",["require","exports"],
function(n,t){var i=function(){function n(){this._metadataMap={};this._metadataArray=[]}return n}();
t.MetadataCollection=i});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(
var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/DataQueries/MetadataQuery",
["require","exports","../QueryBase"],function(n,t,i){"use strict";function u(n,t,i,r){return"componentName={0};subscriptionId={1};queryNamee={2};refreshStamp={3}".
format(n,t,i,r)}var r=function(n){function t(t,i,r,u,f){n.call(this,t,i,r);this._refreshStamp=u;this.
_metaDataContainer=f}return __extends(t,n),t}(i.QueryBase),f,e;t.MetadataQuery=r;f=function(n){function t(
){n.apply(this,arguments)}return __extends(t,n),t.getKey=function(n){return u(n.componentName,n.subscriptionId,
n._queryName,n._refreshStamp)},t}(r);t.AttributesMetadataQuery=f;e=function(n){function t(){n.apply(
this,arguments)}return __extends(t,n),t.getKey=function(n){return u(n.componentName,n.subscriptionId,
n._queryName,n._refreshStamp)},t}(r);t.MetricsMetadataQuery=e});define("Shared/NoDataHelper",["require",
"exports","./ThenableWrapper","./TimeContext","./InsightsTelemetry","../_generated/ExtensionDefinition",
"./Enumerations"],function(n,t,i,r,u,f){"use strict";var s=function(){function n(n){this._parameters=
n}return n.prototype.isEmpty=function(){return this._parameters.isEmptyCallback.isEmpty()},n.prototype.
onNoData=function(){this._parameters.container.noDataMessage(this._parameters.noDataMessage);this._changeBladeAction(
this._parameters.noDataBlade);this._parameters.onNoData&&this._parameters.onNoData()},n.prototype.onNotProvisioned=
function(){this._parameters.container.noDataMessage(this._parameters.notProvisionedMessage);this._changeBladeAction(
this._parameters.notProvisionedBlade);this._parameters.onNotProvisioned&&this._parameters.onNotProvisioned(
)},n.prototype.onBackendErrorReceived=function(){this._parameters.container.noDataMessage(this._parameters.
backendErrorReceivedMessage);this._parameters.onBackendErrorReceived&&this._parameters.onBackendErrorReceived(
)},n.prototype.onHasData=function(){this._parameters.container.noDataMessage(null);this._changeBladeAction(
this._parameters.defaultBlade)},n.prototype._changeBladeAction=function(n){if(n&&this._parameters.getBladeDetails&&
this._parameters.container.selectable){var t={detailBlade:n,extension:f.definitionName,detailBladeInputs:
this._parameters.getBladeDetails(n)};this._parameters.container.selectable.selectedValue(t)}},n}(),o,
e;t.DefaultNoDataHandler=s;o=function(){function n(n,t,i,u){this._entityCache=n;this._queryFactory=t;
this.timeContext=ko.pureComputed(function(){return new r.TimeContext(0,null,i.lastRefreshDate())});this.
_notProvisionedStatusCode=u}return n.prototype.createNoDataHelper=function(n,t){var i=this._entityCache.
createView(n);return new e(t,this._notProvisionedStatusCode,i,this._queryFactory,this.timeContext)},
n.createDefaultSkipRetryNoDataQueryHelper=function(n,t){return new e(n,t)},n}();t.NoDataHelperFactory=
o;e=function(){function n(n,t,i,r,u){this._callbacks=n;this._queryFactory=r;this._entityView=i;this.
_notProvisionedCode=t;this._timeContext=u}return n.all=function(n){var t,i;if(n.length<0)return null;
for(t=n[0],i=1;i<n.length;i++)t=function(n){return t.then(function(){return n},function(n){return n}
)}(n[i]);return t},n.prototype.preCheckQueries=function(t){for(var r,i=this,u=[],f=1;f<arguments.length;
f++)u[f-1]=arguments[f];return r=$.Deferred(),this.canRetryWithNoDataQuery()?this._entityView.fetch(
this._queryFactory(t,this._timeContext())).then(function(){if(i._entityView.item()===2)i._callbacks.
onNotProvisioned(),r.resolve();else if(i._entityView.item()===1)i._callbacks.onNoData(),r.resolve();
else{var t;if(u&&u.length)t=u.map(function(n){return n()});else return null;n.all(t).then(function()
{i._callbacks.isEmpty()?i._callbacks.onNoData():i._callbacks.onHasData();r.resolve()},function(n){i.
handleQueryError(r,n)})}},function(n){i.handleQueryError(r,n)}):r.reject({reason:"Cannot issue no data query since entityView and queryFactory are not specified in ctor."}),
r},n.prototype.runQueriesInputsInstrumented=function(n,t,i){for(var o,f=this,e=[],r=3;r<arguments.length;
r++)e[r-3]=arguments[r];return o=new u.TelemetryHelper(n,i),o.instrument(t,0,function(){return f.runQueries.
apply(f,[t].concat(e))})},n.prototype.runQueriesRefreshInstrumented=function(n,t,i){for(var o,f=this,
e=[],r=3;r<arguments.length;r++)e[r-3]=arguments[r];return o=new u.TelemetryHelper(n,i),o.instrument(
t,1,function(){return f.runQueries.apply(f,[t].concat(e))})},n.prototype.runQueriesInstrumented=function(
n,t,i,r){for(var s,e=this,o=[],f=4;f<arguments.length;f++)o[f-4]=arguments[f];return s=new u.TelemetryHelper(
n,i),s.instrument(t,r,function(){return e.runQueries.apply(e,[t].concat(o))})},n.prototype.runQueries=
function(n){for(var o,r,t=this,f=[],e=1;e<arguments.length;e++)f[e-1]=arguments[e];if(f&&f.length)o=
i.all(f);else return null;return r=$.Deferred(),o.then(function(){if(t._callbacks.isEmpty())if(t.canRetryWithNoDataQuery(
)){var i=t._entityView.fetch(t._queryFactory(n,t._timeContext()));i.then(function(){t._entityView.item(
)!==2?t._callbacks.onNoData():t._callbacks.onNotProvisioned();r.resolve()},function(n){t.handleQueryError(
r,n)})}else t._callbacks.onNoData(),r.resolve();else t._callbacks.onHasData(),r.resolve()},function(
n){t.handleQueryError(r,n)}),u.instrumentPromise(r.promise(),"NoDataHelper.runQueries")},n.prototype.
canRetryWithNoDataQuery=function(){return!!this._queryFactory&&!!this._entityView&&!!this._timeContext}
,n.prototype.handleQueryError=function(n,t){t&&t.status&&t.status===this._notProvisionedCode?(this._callbacks.
onNotProvisioned(),n.resolve()):(this._callbacks.onBackendErrorReceived(),n.reject(t))},n}()});define(
"Shared/NumberUtils",["require","exports"],function(n,t){function i(n){return(n=Math.round(n),n<1e3)?
{value:n.toString(),unit:""}:n<.995*1e4?{value:(n/1e3).toFixed(1),unit:"K"}:n<.9995*1e6?{value:(n/1e3)
.toFixed(0),unit:"K"}:n<.995*1e7?{value:(n/1e6).toFixed(1),unit:"M"}:{value:(n/1e6).toFixed(0),unit:
"M"}}function r(n){return n<1?n.toPrecision(2):n<10?n.toFixed(2):n<100?n.toFixed(1):(n=Math.round(n),
n.toString())}function u(n,t){var r,u,i,f;if(t||(t=function(n){return n}),n.length===0)return undefined;
for(r=t(n[0]),u=n[0],i=1;i<n.length;i++)f=t(n[i]),f>r&&(r=f,u=n[i]);return u}t.FormatWithSingleDecimalAndUnits=
i;t.FormatTimerSignificantDigits=r;t.ArrayMax=u});define("ContinuousExport/DataModels/ContinuousExportModel",
["require","exports"],function(n,t){var u=function(){function n(){this.Destination=new i;this.EventTypes=
new r}return n}(),i,r;t.ContinuousExportModel=u;i=function(){function n(){this.sharedAccessSignature=
ko.observable()}return n}();t.DestinationModel=i;r=function(){function n(){this.types=ko.observable(
)}return n}();t.EventTypesModel=r});define("ContinuousExport/DataModels/ContinuousExportCommandsHelper",
["require","exports","../../Shared/Constants","ClientResources","../../Shared/UrlHelper","../../Shared/AjaxHelper",
"../../Shared/Logging","../../_generated/ExtensionDefinition","../../Shared/QueryBase","../../Shared/ComponentIdCache",
"../../Shared/InsightsTelemetry","./CreateContinuousExportQuery","./DeleteContinuousExportQuery","./UpdateContinuousExportQuery",
"./ContinuousExportEventTypesHelper"],function(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y){"use strict";function d(
n,t,r,s,h){var v=y.ConvertEventTypesToRecordTypes(s),c=new l.CreateContinuousExportQuery(n,h),a;return c.
queryParams={iKey:n.Metadata.instrumentationKey,recordTypes:v,appName:n.Name,destinationType:"Blob",
destinationUri:t,isUserEnabled:"true",subscriptionId:n.SubscriptionId,resourceGroup:n.ResourceGroup},
a=u.getUrlFromGraphTemplate(i.GraphPathTemplates.ContinuousExport,c),f.apiPost(a,c).then(function(){
return p(o.NotificationDefinitions.ContinuousExportCreateNotification.name,o.NotificationDefinitions.
ContinuousExportCreateNotification.success)},function(n){e.errorConsole(n,"ContinuousExportCommandsHelper.CreateContinuousExport");
k(n)})}function g(n,t,r,s,h,c){var l=w(n,t,r,s,c,h),a=u.getUrlFromGraphTemplate(i.GraphPathTemplates.
ContinuousExport,l);return f.apiPut(a,l).then(function(){return p(o.NotificationDefinitions.ContinuousExportUpdateNotification.
name,o.NotificationDefinitions.ContinuousExportUpdateNotification.success)},function(n){p(o.NotificationDefinitions.
ContinuousExportUpdateNotification.name,o.NotificationDefinitions.ContinuousExportUpdateNotification.
error);e.errorConsole(n,"ContinuousExportCommandsHelper.UpdateContinuousExport")})}function nt(n,t,r,
s,h){var c=w(n,t,r,s,h,"true"),l=u.getUrlFromGraphTemplate(i.GraphPathTemplates.ContinuousExport,c);
return f.apiPut(l,c).then(function(){return p(o.NotificationDefinitions.ContinuousExportEnableNotification.
name,o.NotificationDefinitions.ContinuousExportEnableNotification.success)},function(n){p(o.NotificationDefinitions.
ContinuousExportEnableNotification.name,o.NotificationDefinitions.ContinuousExportEnableNotification.
error);e.errorConsole(n,"ContinuousExportCommandsHelper.EnableContinuousExport")})}function tt(n,t,r,
s,h){var c=w(n,t,r,s,h,"false"),l=u.getUrlFromGraphTemplate(i.GraphPathTemplates.ContinuousExport,c);
return f.apiPut(l,c).then(function(){return p(o.NotificationDefinitions.ContinuousExportDisableNotification.
name,o.NotificationDefinitions.ContinuousExportDisableNotification.success)},function(n){p(o.NotificationDefinitions.
ContinuousExportDisableNotification.name,o.NotificationDefinitions.ContinuousExportDisableNotification.
error);e.errorConsole(n,"ContinuousExportCommandsHelper.DisableContinuousExport")})}function w(n,t,i,
r,u,f){var o=y.ConvertEventTypesToRecordTypes(i),e=new v.UpdateContinuousExportQuery(n,u);return e.queryParams=
{iKey:n.Metadata.instrumentationKey,exportId:t,recordTypes:o,appName:n.Name,destinationType:"Blob",destinationUri:
r,isUserEnabled:f,subscriptionId:n.SubscriptionId,resourceGroup:n.ResourceGroup},e}function it(n,t,r)
{var s=new a.DeleteContinuousExportQuery(n,r),h;return s.queryParams={iKey:n.Metadata.instrumentationKey,
exportId:t},h=u.getUrlFromGraphTemplate(i.GraphPathTemplates.ContinuousExport,s),f.apiDelete(h,s).then(
function(){return p(o.NotificationDefinitions.ContinuousExportDeleteNotification.name,o.NotificationDefinitions.
ContinuousExportDeleteNotification.success)},function(n){p(o.NotificationDefinitions.ContinuousExportDeleteNotification.
name,o.NotificationDefinitions.ContinuousExportDeleteNotification.error);e.errorConsole(n,"ContinuousExportCommandsHelper.DeleteContinuousExport")}
)}function b(n,t){var r=new s.QueryBase(n,t,i.Queries.DeleteAllExportsForIkey),o;return r.queryParams=
{iKey:n.Metadata.instrumentationKey},o=u.getUrlFromGraphTemplate(i.GraphPathTemplates.ContinuousExport,
r),f.apiDelete(o,r).fail(function(n){e.errorConsole(n,"ContinuousExportCommandsHelper.DeleteAllExportsForIkey")}
)}function rt(n,t){return h.getFullComponentId(n,t,!0).then(function(n){b(n,t).done(function(){var i=
{iKey:n.Metadata.instrumentationKey};c.logCustomEvent("AllApplicationExportsDeleted",2,t,n,i)})})}function k(
n){var i=r.tryAgainMessage,u,t;n&&n.statusText&&n.statusText==="Conflict"&&(i=r.continuousExportConflictMessage);
u=MsPortalFx.UI.NotificationManager.create(o.NotificationDefinitions.ContinuousExportCreateNotification.
name);t={};t.message=i;u.raise(o.NotificationDefinitions.ContinuousExportCreateNotification.error,undefined,
t)}function p(n,t){var i=MsPortalFx.UI.NotificationManager.create(n);i.raise(t,undefined,{})}function ut(
n,t){return n.first(function(n){return n&&n.exportId===t})}t.CreateContinuousExport=d;t.UpdateContinuousExport=
g;t.EnableContinuousExport=nt;t.DisableContinuousExport=tt;t.CreateUpdateContinuousExportQuery=w;t.DeleteContinuousExport=
it;t.DeleteAllExportsForIkey=b;t.DeleteAllExports=rt;t.RaiseExportCreateFailureNotification=k;t.RaiseStatusNotification=
p;t.GetContinuousExportInfoById=ut});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"ContinuousExport/DataModels/CreateContinuousExportQuery",["require","exports","../../Shared/Constants",
"../../Shared/QueryBase"],function(n,t,i,r){"use strict";var u=function(n){function t(t,r){n.call(this,
t,r,i.Queries.CreateContinuousExport)}return __extends(t,n),t}(r.QueryBase);t.CreateContinuousExportQuery=
u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("ContinuousExport/DataModels/DeleteContinuousExportQuery",
["require","exports","../../Shared/Constants","../../Shared/QueryBase"],function(n,t,i,r){"use strict";
var u=function(n){function t(t,r){n.call(this,t,r,i.Queries.DeleteContinuousExport)}return __extends(
t,n),t}(r.QueryBase);t.DeleteContinuousExportQuery=u});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("ContinuousExport/DataModels/UpdateContinuousExportQuery",["require","exports","../../Shared/Constants",
"../../Shared/QueryBase"],function(n,t,i,r){"use strict";var u=function(n){function t(t,r){n.call(this,
t,r,i.Queries.UpdateContinuousExport)}return __extends(t,n),t}(r.QueryBase);t.UpdateContinuousExportQuery=
u});define("ContinuousExport/DataModels/ContinuousExportEventTypesHelper",["require","exports","ClientResources"],
function(n,t,i){"use strict";function r(){return[i.continuousExportEventTypeCustomEvent,i.continuousExportEventTypeDependency,
i.continuousExportEventTypeException,i.continuousExportEventTypeMetric,i.continuousExportEventTypeBrowserPageLoad,
i.continuousExportEventTypePageView,i.continuousExportEventTypePerformanceCounter,i.continuousExportEventTypeRequest,
i.continuousExportEventTypeTrace,]}function e(n){switch(n){case i.continuousExportEventTypeRequest:return i.
continuousExportEventTypeRequestInfo;case i.continuousExportEventTypeCustomEvent:return i.continuousExportEventTypeCustomEventInfo
case i.continuousExportEventTypeException:return i.continuousExportEventTypeExceptionInfo;case i.continuousExportEventTypeTrace:
return i.continuousExportEventTypeTraceInfo;case i.continuousExportEventTypeMetric:return i.continuousExportEventTypeMetricInfo
case i.continuousExportEventTypePageView:return i.continuousExportEventTypePageViewInfo;case i.continuousExportEventTypePerformanceCounter:
return i.continuousExportEventTypePerformanceCounterInfo;case i.continuousExportEventTypeBrowserPageLoad:
return i.continuousExportEventTypeBrowserPageLoadInfo;case i.continuousExportEventTypeDependency:return i.
continuousExportEventTypeDependencyInfo}throw new Error("unknown event type: "+n);}function u(n){switch(
n){case i.continuousExportEventTypeRequest:return"Requests";case i.continuousExportEventTypeCustomEvent:
return"Event";case i.continuousExportEventTypeException:return"Exceptions";case i.continuousExportEventTypeTrace:
return"Messages";case i.continuousExportEventTypeMetric:return"Metrics";case i.continuousExportEventTypePageView:
return"PageViews";case i.continuousExportEventTypePerformanceCounter:return"PerformanceCounters";case
i.continuousExportEventTypeBrowserPageLoad:return"PageViewPerformance";case i.continuousExportEventTypeDependency:
return"Rdd"}throw new Error("unknown event type: "+n);}function f(n){switch(n){case"Requests":return i.
continuousExportEventTypeRequest;case"Event":return i.continuousExportEventTypeCustomEvent;case"Exceptions":
return i.continuousExportEventTypeException;case"Messages":return i.continuousExportEventTypeTrace;case"Metrics":
return i.continuousExportEventTypeMetric;case"PageViews":return i.continuousExportEventTypePageView;
case"PerformanceCounters":return i.continuousExportEventTypePerformanceCounter;case"PageViewPerformance":
return i.continuousExportEventTypeBrowserPageLoad;case"Rdd":return i.continuousExportEventTypeDependency}
return""}function o(n){var t=JSON.parse(n),r,i,f,e;if(!t||!$.isArray(t))throw new Error("eventTypes expected to be an array of event type names");
for(r=[],i=0;i<t.length;i++)f=t[i],e=u(f),r.push(e);return r.join(",")}function s(n){for(var e,i,r=n?
n.split(",").map(function(n){return n.trim()}):[],u=[],t=0;t<r.length;t++)e=r[t],i=f(e),i&&u.push(i);
return JSON.stringify(u)}function h(){for(var t,u=[],f=r(),n=0;n<f.length;n++)t=f[n],t!==i.continuousExportEventTypeTrace&&
u.push(t);return JSON.stringify(u)}t.GetEventTypes=r;t.GetEventTypeInfoBalloon=e;t.GetRecordType=u;t.
GetEventType=f;t.ConvertEventTypesToRecordTypes=o;t.ConvertRecordTypesToEventTypes=s;t.GetDefaultEventTypes=
h});define("ContinuousExport/DataModels/ContinuousExportDestinationHelper",["require","exports"],function(
n,t){function i(n){return n?n.split("//")[1].split(".")[0]:""}function r(n){return n?n.split("//")[1].
split("/")[1].split("?")[0]:""}t.GetStorageAccountName=i;t.GetContainerName=r});define("ContinuousExport/DataModels/ContinuousExport",
["require","exports","../../_generated/ExtensionDefinition"],function(n,t,i){"use strict";var u=function(
){function n(n,t,i,r,u,f,e,o,s){this.storageName=n;this.containerName=t;this.eventTypes=i;this.lastSuccessTime=
r;this.exportStatus=u;this.exportId=f;this.instrumentationKey=e;this.destinationUri=o;this.isEnabled=
s}return n}(),r;t.ContinuousExport=u;r=function(){function n(n,t,r,u,f,e,o,s,h){this.storageName=ko.
observable(n);this.containerName=ko.observable(t);this.eventTypes=ko.observable(r);this.lastSuccessTime=
ko.observable(u);this.exportStatus=ko.observable(f);this.exportId=e;this.instrumentationKey=o;this.destinationUri=
ko.observable(s);this.isEnabled=ko.observable(h);this.commandGroup="ContinuousExportCommands";this.commandGroupOwner=
i.definitionName}return n}();t.ContinuousExportGridItem=r});__extends=this.__extends||function(n,t){
function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("CreateApplication/DataModels/CreateApplicationDataModel",["require","exports"],
function(n,t){var i=function(n){function t(){n.apply(this,arguments);this.application={name:ko.observable(
),type:ko.observable(),regionId:ko.observable()}}return __extends(t,n),t}(MsPortalFx.Services.Gallery.
GalleryDataModel);t.CreateApplicationDataModel=i});define("CreateApplication/DataModels/ApplicationTypeDataModel",
["require","exports","../../Shared/Constants","ClientResources"],function(n,t,i,r){"use strict";function f(
){return[new u(i.ApplicationType.Web,r.createApplicationAspDotNetApplication),new u(i.ApplicationType.
Phone,r.createApplicationWindowsPhoneApplication),new u(i.ApplicationType.Store,r.createApplicationWindowsStoreApplication),
new u(i.ApplicationType.Java,r.createApplicationJavaWebApplication)]}var u=function(){function n(n,t)
{this.id=n;this.displayName=t}return n}();t.ApplicationType=u;t.getApplicationTypesList=f});define("CreateApplication/DataModels/GeoRegion",
["require","exports","../../Shared/Constants","ClientResources"],function(n,t,i,r){"use strict";function f(
){return[new u(i.ApplicationLocationDisplayKey,r.createApplicationCentralUS),]}var u=function(){function n(
n,t){this.id=n;this.displayName=t}return n}();t.GeoRegion=u;t.getGeoRegionsList=f});define("EndUserAnalytics/DataModels/PartInputs",
["require","exports"],function(){"use strict"});define("Shared/MetricsExplorerChartDefinition",["require",
"exports","./Constants","./InsightsTelemetry","../_generated/ExtensionDefinition","./ChartIdentifier",
"./StringMapUtils"],function(n,t,i,r,u,f,e){"use strict";var o=function(){function n(){if(this._chartDefinitionSet=
{},this._chartDefinitionSetInProduct={},this._bladeDefinitions=[],this._bladeDefinitionsInProduct=[],
n._instance)throw new Error("Error: Instantiation failed: Use MetricsExplorerChartDefinition.Instance() instead of new.");
this.setBladeDefinition(n.AspNetServersMetrics,{title:"aspNetServerPartTitle",charts:[{id:"b2f8708b-4a48-4b35-b96e-7622caca21ce",
chartType:"Area",chartHeight:4,palette:"blueHues",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
ProcessorCPU}]},{id:"093583d1-bc86-4c2e-91d8-527a2411910b",chartType:"Area",chartHeight:1,palette:"greenHues",
aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.PerformanceCounterAvailableBytes}]},{id:"03fd5488-b020-417b-97e2-bf7564568d3b",
chartType:"Area",chartHeight:1,palette:"blueHues",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
ProcessIORate}]},{id:"c31fd4cc-be41-449e-a657-d16d2e9c8487",chartType:"Area",chartHeight:1,palette:"fail",
aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.PerformanceCounterExceptionPerSec}]},{id:
"8b942f02-ef58-46ac-877a-2f4c16a17a4f",chartType:"Area",chartHeight:1,palette:"warmHues",aggregation:
i.FunctionNames.Avg,metrics:[{id:i.MetricNames.AspNetPerformanceCounterRequestRate}]},{id:"efeb44cf-822a-430e-a8a3-364ad5072d9c",
chartType:"Grid",metrics:[{id:i.MetricNames.ProcessorCPU},{id:i.MetricNames.PerformanceCounterAvailableBytes},
{id:i.MetricNames.ProcessIORate},{id:i.MetricNames.PerformanceCounterExceptionPerSec},],grouping:{kind:
"ByDimension",dimension:i.DimensionNames.RoleInstance},clickAction:{defaultBlade:"MetricsExplorerBlade",
uri:"chartDefinitionId:?name=Server/AspNetServersDrillThruMetrics"}},{id:"277619ce-3c6d-4314-b867-bdd97429f9de",
chartType:"Grid",metrics:[{id:i.MetricNames.ProcessorCPU},{id:i.MetricNames.PerformanceCounterAvailableBytes},
{id:i.MetricNames.ProcessIORate},{id:i.MetricNames.PerformanceCounterExceptionPerSec},],grouping:{kind:
"ByDimension",dimension:i.DimensionNames.DeviceId},clickAction:{defaultBlade:"MetricsExplorerBlade",
uri:"chartDefinitionId:?name=Server/AspNetServersDrillThruMetrics"}},],actions:[]});this.setBladeDefinition(
n.BlankChart,{charts:[{id:"90a7134d-9a38-4c25-88d3-a495209873eb",chartType:"Area",chartHeight:4},{id:
"0c289098-88e8-4010-b212-546815cddf70",chartType:"Area",chartHeight:4},{id:"1d5a6a3a-9fa1-4099-9cf9-05eff72d1b02",
chartType:"Area",chartHeight:2}]});this.setBladeDefinition(n.BrowsersMetrics,{title:"usageTitlesUserProfileDrillIn",
charts:[{id:"14FCB953-1E2C-4942-87AF-C4E86A3C2C7D",chartType:"Area",chartHeight:4,palette:"blueHues",
aggregation:i.FunctionNames.Cardinality,grouping:{kind:"ByDimension",dimension:i.DimensionNames.Browser},
metrics:[{id:i.MetricNames.Sessions}]},{id:"FCD44452-2648-483A-A9B1-645ECBB5E757",grouping:{kind:"ByDimension",
dimension:i.DimensionNames.BrowserVersion},chartType:"Grid",palette:"blueHues",aggregation:i.FunctionNames.
Cardinality,metrics:[{id:i.MetricNames.Sessions}],clickAction:{defaultBlade:"MetricsExplorerBlade",uri:
n.BrowsersMeToMeMetrics}},{id:"D5E0C675-F295-4BE9-BFCC-425B9EE73F0E",grouping:{kind:"ByDimension",dimension:
i.DimensionNames.OsVersion},chartType:"Grid",palette:"greenHues",aggregation:i.FunctionNames.Cardinality,
metrics:[{id:i.MetricNames.Sessions}],clickAction:{defaultBlade:"MetricsExplorerBlade",uri:n.BrowsersMeToMeMetrics}},
{id:"F786F5D6-3C7F-41EE-94B7-A2DA3A389E0A",grouping:{kind:"ByDimension",dimension:i.DimensionNames.ScreenResolution},
chartType:"Grid",palette:"fail",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}],
clickAction:{defaultBlade:"MetricsExplorerBlade",uri:n.BrowsersMeToMeMetrics}}]});this.setBladeDefinition(
n.TelemetryEventsMetrics,{title:"billingEventsMETitle",charts:[{id:"586A9B12-F2EA-44C1-B533-1CACB1048D51",
chartType:"Bar",chartHeight:5,palette:"greenHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
TelemetryItemCount}],grouping:{kind:"ByDimension",dimension:"billingMetric.documentType"}},{id:"1A91053D-BDD0-481B-87C6-B4682369D929",
grouping:{kind:"ByDimension",dimension:"billingMetric.documentType"},chartType:"Grid",palette:"greenHues",
aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.TelemetryItemCount}]}],minimumRangeInDaysForDailyGrain:
i.minimumRangeInDaysForDailyGrain_Usage});this.setBladeDefinition(n.SessionsPerHourMetrics,{charts:[
{id:"8F1265E4-B63E-48BE-A936-0DD153D65600",chartType:"Line",chartHeight:3,aggregation:i.FunctionNames.
Cardinality,metrics:[{id:i.MetricNames.Sessions}]},{id:"F4940F70-602C-4F7B-B417-023AC6B3EA31",chartType:
"Line",chartHeight:2,aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.PageViews}]},{id:"3AC93A6F-173D-42C5-B9F2-6A022894A522",
chartType:"Grid",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}],grouping:
{kind:"ByDimension",dimension:i.DimensionNames.ViewName}},{id:"1DC6FB91-9E3B-43B7-9344-018A2BC65723",
chartType:"Grid",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.PageViews}],grouping:{kind:
"ByDimension",dimension:i.DimensionNames.ViewName}}]});this.setBladeDefinition(n.TopPagesMetrics,{title:
"usageTitlesPagesDrillIn",charts:[{id:"08B3F0C8-A74F-4FA8-BBC7-5D0EA8E68309",chartType:"Area",chartHeight:
4,aggregation:i.FunctionNames.Sum,grouping:{kind:"ByDimension",dimension:i.DimensionNames.ViewName},
metrics:[{id:i.MetricNames.PageViews}]},{id:"70F5B4EC-558F-42AD-BCEF-F6198FD177B7",chartType:"Area",
palette:"warmHues",chartHeight:1,aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.
ActiveUsers}]},{id:"0019573F-E900-4D83-A9C6-A0D0D675DE4A",chartType:"Area",palette:"greenHues",chartHeight:
1,aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.SessionPageViews}]},{id:"FB584165-2907-41AB-B3A6-6856EE6D5F4A",
chartType:"Grid",metrics:[{id:i.MetricNames.PageViews},{id:i.MetricNames.ActiveUsers},{id:i.MetricNames.
Sessions}],clickAction:{defaultBlade:"MetricsExplorerBlade",uri:n.ServicePagesMeToMe},grouping:{kind:
"ByDimension",dimension:i.DimensionNames.ViewName}},{id:"7D09AEAE-3F85-40A0-89E9-9B9B1BD1F258",chartType:
"Grid",palette:"fail",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}],
grouping:{kind:"ByDimension",dimension:i.DimensionNames.EntryUrl}},{id:"8135E762-2C13-4CD5-BD03-64BFA75716E5",
chartType:"Grid",palette:"yellowHues",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.
Sessions}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.ExitUrl}}],minimumRangeInDaysForDailyGrain:
i.minimumRangeInDaysForDailyGrain_Usage});this.setBladeDefinition(n.SlowestRequestMetricsPastWeek,{charts:
[{id:"D6DAAED9-7D90-4265-877D-EFCD5AB0026F",chartType:"Line",chartHeight:3,aggregation:i.FunctionNames.
Avg,metrics:[{id:"clientPerformance.total.value"}],grouping:{kind:"ByDimension",dimension:"clientPerformance.urlData.base"}},
{id:"364FD457-739B-4C62-9668-EA49E62FBA44",chartType:"Grid",aggregation:i.FunctionNames.Avg,metrics:
[{id:"clientPerformance.total.value"}],grouping:{kind:"ByDimension",dimension:"clientPerformance.urlData.base"}}]});
this.setBladeDefinition(n.TopFivePagesMetrics,{charts:[{id:"C7CA7F54-6604-4D05-8CBA-E88400097A81",chartType:
"Line",chartHeight:3,aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.PageViews}]},{id:"7EE576D6-3968-4F8F-AA8A-A247B917DB0B",
chartType:"Grid",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.PageViews}],grouping:{kind:
"ByDimension",dimension:i.DimensionNames.ViewName}}]});this.setBladeDefinition(n.DeveloperModeTestMetrics,
{charts:[{id:"CC293164-71BC-4B85-B5A4-FDBA1D221167",chartType:"Area",chartHeight:5,aggregation:i.FunctionNames.
Sum,grouping:{kind:"ByDimension",dimension:"request.name"},metrics:[{id:"request.count"}]},{id:"894A6CCF-556B-4392-A2B9-99D182AFA7D9",
chartType:"Line",chartHeight:2,aggregation:i.FunctionNames.Sum,metrics:[{id:"request.count"}],grouping:
{kind:"ByDimension",dimension:"request.success"}},{id:"5CDBAEC3-011D-4E7A-9A5F-C71BA15CC586",chartType:
"Line",chartHeight:5,aggregation:i.FunctionNames.Sum,metrics:[{id:"request.count"}],grouping:{kind:"ByDimension",
dimension:"context.location.country"}},{id:"2704B695-2025-4F6B-9FCB-6E5F7374E9E4",chartType:"Area",chartHeight:
2,aggregation:i.FunctionNames.Sum,metrics:[{id:"request.count"},{id:"view.count"}]},{id:"ABCD991A-72F0-4A0D-9C36-AF11D8F767F1",
chartType:"Area",chartHeight:3,aggregation:"Cardinality",grouping:{kind:"ByMetric"},metrics:[{id:"context.session.id.hash"},
{id:"context.user.anonId.hash"}]},{id:"EACD981A-72F0-4A0D-9C36-AF11D8F767F1",chartType:"Bar",chartHeight:
3,aggregation:"Cardinality",grouping:{kind:"ByMetric"},metrics:[{id:"context.session.id.hash"},{id:"context.user.anonId.hash"}]},
{id:"3804B695-2A25-6F6B-9FCB-6E5F7374E9E4",chartType:"Line",chartHeight:1,aggregation:i.FunctionNames.
Avg,metrics:[{id:"request.duration"}]},{id:"6EB95C86-6607-4DCA-9348-F82DB10B7DCB",chartType:"Line",chartHeight:
5,aggregation:i.FunctionNames.Cardinality,metrics:[{id:"context.session.id.hash"}],grouping:{kind:"ByDimension",
dimension:"context.device.browser"}},{id:"EBBC991A-72F0-4A0D-9C36-AF11D8F767F1",chartType:"Line",chartHeight:
2,aggregation:i.FunctionNames.Cardinality,metrics:[{id:"context.session.id.hash"}]},{id:"128E8DA6-0255-41A5-91E9-2C66E095B1D5",
chartType:"Grid",aggregation:i.FunctionNames.Sum,grouping:{kind:"ByDimension",dimension:"request.name"},
metrics:[{id:"request.count"}],palette:"greenHues",clickAction:{defaultBlade:"MetricsExplorerBlade",
uri:"chartDefinitionId:?name=InternalTesting/DeveloperModeTestGridRowDrillThru"},horizontalBars:!0},
{id:"7446113B-2FBE-43E9-A6C1-7AD35279511B",chartType:"Grid",aggregation:i.FunctionNames.Sum,metrics:
[{id:"request.count"}],grouping:{kind:"ByDimension",dimension:"request.success"},clickAction:{defaultBlade:
"MetricsExplorerBlade",uri:"chartDefinitionId:?name=InternalTesting/DeveloperModeTestGridRowDrillThru_2"},
horizontalBars:!0},{id:"B794BC29-4A58-47D6-AC28-23AA5C2FE053",chartType:"Grid",aggregation:i.FunctionNames.
Sum,metrics:[{id:"request.count"}],grouping:{kind:"ByDimension",dimension:"context.location.country"}},
{id:"A8F2045B-6020-4F49-AED8-F12151024D01",chartType:"Grid",aggregation:i.FunctionNames.Cardinality,
metrics:[{id:"context.session.id.hash"}],grouping:{kind:"ByDimension",dimension:"context.device.browser"}},
{id:"416C00B3-9248-42FE-AC41-4B2CECF46F30",chartType:"Grid",aggregation:i.FunctionNames.Avg,metrics:
[{id:"request.duration"}],grouping:{kind:"ByDimension",dimension:"request.name"}},{id:"9462654B-4931-4728-8C9E-1801CE6FC649",
chartType:"Line",chartHeight:1,aggregation:i.FunctionNames.Max,metrics:[{id:"request.duration"}]},{id:
"62ECB148-3FBB-C917-BF28-3DCB0EC24B68",chartType:"Line",chartHeight:1,aggregation:i.FunctionNames.Min,
metrics:[{id:"request.duration"}]},{id:"C62FB421-6947-4FEC-8D2E-D9BC0D1A197F",chartType:"Image",aggregation:
i.FunctionNames.Avg,metrics:[{id:"Average failed requests"}],image:"failedRequestRateComingSoon.png"},
{id:"12300000-8A17-4b77-b8d2-02237906c0b7",chartType:"Bar",chartHeight:3,aggregation:i.FunctionNames.
Cardinality,metrics:[{id:"context.user.anonId.hash"},{id:"context.user.authId.hash"},{id:"context.user.accountId.hash"}]},
{id:"D98D25CF-06F7-44D5-980D-DB73AD0BB6CD",chartType:"Bar",chartHeight:1,aggregation:i.FunctionNames.
Cardinality,metrics:[{id:"context.session.id.hash"}]},{id:"7E999CAB-2E37-435A-8A37-24456EB440A8",chartType:
"Bar",chartHeight:1,aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.Exceptions}]},{id:"1722CE07-0011-443E-8CA7-3380A10808A2",
chartType:"Line",chartHeight:5,aggregation:i.FunctionNames.Sum,metrics:[{id:"clientPerformance.total.value"},
{id:"clientPerformance.networkConnection.value"},{id:"clientPerformance.sendRequest.value"},{id:"clientPerformance.receiveRequest.value"},
{id:"clientPerformance.clientProcess.value"}]}]});this.setBladeDefinition(n.RequestRateMetrics,{charts:
[{id:"09FABCF4-75B8-4493-9C9F-E75E4A65C97E",chartType:"Line",chartHeight:3,aggregation:i.FunctionNames.
Sum,metrics:[{id:i.MetricNames.TotalRequests}]},{id:"55555555-8117-4b7f-b8d2-02237906c0b7",chartType:
"Line",chartHeight:1,aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.ServerResponseTime}]},
{id:"B133603B-6641-4A31-A7F8-F3A4078F23C2",chartType:"Grid",aggregation:i.FunctionNames.Sum,metrics:
[{id:i.MetricNames.TotalRequests}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.Url}}]});
this.setBladeDefinition(n.AverageResponseTimeMetrics,{charts:[{id:"25D6582C-2B34-4552-8A85-51A6FD8ABDA4",
chartType:"Line",chartHeight:3,aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.ServerResponseTime}]},
{id:"88888888-8117-4b7f-b8d2-02237906c0b7",chartType:"Line",chartHeight:1,aggregation:i.FunctionNames.
Sum,metrics:[{id:i.MetricNames.TotalRequests}]},{id:"28188BE6-7784-41B5-A92B-2F5E516BB29C",chartType:
"Grid",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.ServerResponseTime}],grouping:{kind:
"ByDimension",dimension:i.DimensionNames.Url}}]});this.setBladeDefinition(n.SlowestRequestMetrics,{charts:
[{id:"420C10A2-D7E8-43B1-8C66-AE41B1103A40",chartType:"Area",chartHeight:4,palette:"blueHues",aggregation:
i.FunctionNames.Avg,metrics:[{id:i.MetricNames.ServerResponseTime}]},{id:"67702595-81E1-4644-966D-AED0D16A1268",
chartType:"Area",chartHeight:2,palette:"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
RemoteDependencyDuration}]},{id:"6F0C269C-CC40-4CBB-95F4-2FADE40D6762",chartType:"Grid",grouping:{kind:
"ByDimension",dimension:i.DimensionNames.Url},aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
ServerResponseTime}]},{id:"FF433B87-556B-4DBD-A4A1-9FBF6E8799D4",chartType:"Grid",grouping:{kind:"ByDimension",
dimension:i.DimensionNames.RemoteDependencyName},aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
RemoteDependencyDuration}]}]});this.setBladeDefinition(n.TopExceptionsMetrics,{charts:[{id:"73EE70B4-6002-4E65-8966-462462B8A7F8",
chartType:"Area",chartHeight:4,palette:"warmHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
ServerExceptions}]},{id:"C9976E78-542D-4F2C-8F63-804326690F7D",chartType:"Area",chartHeight:1,palette:
"greenHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.FailedRemoteDependencyCount}],
grouping:{kind:"ByDimension",dimension:i.DimensionNames.RemoteDependencyType}},{id:"431D636A-A6E3-4A14-A0FF-EBE6E8B47D28",
chartType:"Bar",chartHeight:1,palette:"fail",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
FailedRequests}]},{id:"88A8B5B7-B1B4-456B-A24F-8A1E4BCBEC02",chartType:"Area",chartHeight:1,palette:
"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.TotalRequests}]},{id:"A7441672-DCC1-4F5F-B922-DF810B968D04",
chartType:"Grid",grouping:{kind:"ByDimension",dimension:i.DimensionNames.ExceptionProblemId},aggregation:
i.FunctionNames.Sum,metrics:[{id:i.MetricNames.ServerExceptions}]}]});this.setBladeDefinition(n.EventsLastMonthMetrics,
{title:"billingEventsChartTitle",charts:[{id:"6B1035EB-7F71-43CD-9283-A7C7138C19EE",chartType:"Bar",
chartHeight:5,palette:"greenHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.TelemetryItemCount}],
grouping:{kind:"ByDimension",dimension:"billingMetric.documentType"}}],actions:[{id:"6B1035EB-7F71-43CD-9283-A7C7138C19EE",
noDataHelperKind:i.MetricsExplorerChartNoDataHelperKind.DefaultSkipRetryNoDataQuery,defaultBlade:u.BladeNames.
metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:n.TelemetryEventsMetrics},notProvisionedBlade:
u.BladeNames.billingComingSoonBlade,noDataMessage:"noTelemetryEvents",notProvisionedMessage:"noTelemetryEvents"}],
minimumRangeInDaysForDailyGrain:i.minimumRangeInDaysForDailyGrain_Usage});this.setBladeDefinition(n.
InsightsTimelineMetrics,{title:"insightsTimeline",charts:[{id:f.CreateId(r.AITelemetryConstants.AspNetOverviewBlade,
"5AB2D44A-4B9A-4A38-BB92-83C183C3CF5E"),chartType:"Area",chartHeight:2,palette:"blueHues",aggregation:
i.FunctionNames.Avg,metrics:[{id:i.MetricNames.ServerResponseTime}]},{id:f.CreateId(r.AITelemetryConstants.
AspNetOverviewBlade,"02CE4C39-298B-46C2-9862-AD4431E54B51"),chartType:"Area",chartHeight:4,palette:"greenHues",
aggregation:i.FunctionNames.Avg,grouping:{kind:"ByMetric"},metrics:[{id:i.MetricNames.BrowserResponseTime}]},
{id:f.CreateId(r.AITelemetryConstants.AspNetOverviewBlade,"1891984D-A36A-4FF6-842E-847E443CEEB8"),chartType:
"Area",chartHeight:2,palette:"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.TotalRequests}]},
{id:f.CreateId(r.AITelemetryConstants.AspNetOverviewBlade,"E716332C-7910-407E-8D8B-159FAAC6B3AB"),chartType:
"Bar",chartHeight:1,palette:"fail",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.FailedRequests}]}],
actions:[{id:f.CreateId(r.AITelemetryConstants.AspNetOverviewBlade,"02CE4C39-298B-46C2-9862-AD4431E54B51"),
noDataHelperKind:i.MetricsExplorerChartNoDataHelperKind.PageViews,defaultBlade:u.BladeNames.metricsExplorerBlade,
defaultBladeInputs:{MetricsExplorerJsonDefinitionId:n.BrowserPerformanceTimelineMetrics},notProvisionedBlade:
u.BladeNames.configurationBlade,noDataMessage:"noBrowserResponseTimeData",notProvisionedMessage:"learnCollectBrowserPerfData"},
{id:f.CreateId(r.AITelemetryConstants.AspNetOverviewBlade,"5AB2D44A-4B9A-4A38-BB92-83C183C3CF5E"),defaultBlade:
u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:"chartDefinitionId:?name=Common/Performances/ServerPerformanceTimelineMetrics"},
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectServerResponseTimeData"},
{id:f.CreateId(r.AITelemetryConstants.AspNetOverviewBlade,"1891984D-A36A-4FF6-842E-847E443CEEB8"),defaultBlade:
u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:"chartDefinitionId:?name=Common/Performances/RequestsDetailTimelineMetrics"},
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectServerRequestData"},
{id:f.CreateId(r.AITelemetryConstants.AspNetOverviewBlade,"E716332C-7910-407E-8D8B-159FAAC6B3AB"),defaultBlade:
u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:n.FailedRequestsDetailTimelineMetrics},
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectFailedRequestData"}]});
this.setBladeDefinition(n.IndividualException,{charts:[{id:"53BAEFB3-83AB-4D47-8463-317FD216CAF2",chartType:
"Area",chartHeight:4,palette:"warmHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.Exceptions}]},
{id:"E398C351-26BF-407A-83BD-A3126126DEAD",chartType:"Area",palette:"warmHues",chartHeight:2,priorPeriod:
!1,aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.ActiveUsers}]},{id:"985652B2-1EFB-4F63-81C2-2500893A3336",
chartType:"Grid",grouping:{kind:"ByDimension",dimension:i.DimensionNames.ExceptionProblemId},aggregation:
i.FunctionNames.Sum,metrics:[{id:i.MetricNames.Exceptions}]}]});this.setBladeDefinition(n.IndividualClientPerformance,
{charts:[{id:"20647636-8451-42AC-BC88-D445F4765BC7",chartType:"Area",chartHeight:4,palette:"greenHues",
aggregation:i.FunctionNames.Avg,grouping:{kind:"ByMetric"},metrics:[{id:i.MetricNames.BrowserClientProcessingTime},
{id:i.MetricNames.BrowserSendRequestTime},{id:i.MetricNames.BrowserReceivingResponseTime},{id:i.MetricNames.
BrowserPageLoadConnectTime},]}]});this.setBladeDefinition(n.IndividualDependency,{charts:[{id:"00446CEE-7781-44E2-B7E7-936221742CDA",
chartType:"Area",chartHeight:4,palette:"warmHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
RemoteDependencyCount}]},{id:"EEDB7CAF-39F6-4E80-8272-02119F8BA921",chartType:"Area",chartHeight:2,palette:
"warmHues",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.RemoteDependencyDuration}]},{id:
"B272C358-1639-4CDF-9568-51D25670544B",chartType:"Area",palette:"warmHues",chartHeight:1,priorPeriod:
!1,aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.ActiveUsers}]},{id:"076B27A9-C042-4CF2-AB27-41AE9092BB4B",
chartType:"Grid",grouping:{kind:"ByDimension",dimension:i.DimensionNames.RemoteDependencyName},aggregation:
i.FunctionNames.Avg,metrics:[{id:i.MetricNames.RemoteDependencyDuration}]}]});this.setBladeDefinition(
n.IndividualRequest,{charts:[{id:"18F9FD59-B849-4524-A547-17FFFBF28788",chartType:"Area",chartHeight:
4,palette:"greenHues",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.ServerResponseTime}]},
{id:"3B6F0286-82A3-46CB-80ED-17A05A26369A",chartType:"Area",chartHeight:1,palette:"blueHues",aggregation:
i.FunctionNames.Sum,metrics:[{id:i.MetricNames.TotalRequests}]},{id:"70F5B4EC-558F-42AD-BCEF-F6198FD177B7",
chartType:"Area",palette:"warmHues",chartHeight:1,priorPeriod:!1,aggregation:i.FunctionNames.Cardinality,
metrics:[{id:i.MetricNames.ActiveUsers}]},{id:"E1F9D680-50FF-49D7-AE84-5FC223D47DDE",chartType:"Grid",
grouping:{kind:"ByDimension",dimension:i.DimensionNames.BaseUrl},aggregation:i.FunctionNames.Avg,metrics:
[{id:i.MetricNames.ServerResponseTime}]}]});this.setBladeDefinition(n.BrowserPerformanceTimelineMetrics,
{title:"browsersTitle",charts:[{id:"EF32A2B1-59D0-4C79-ACAB-1FCC5550E732",chartType:"Area",chartHeight:
4,palette:"greenHues",aggregation:i.FunctionNames.Avg,grouping:{kind:"ByMetric"},metrics:[{id:i.MetricNames.
BrowserClientProcessingTime},{id:i.MetricNames.BrowserSendRequestTime},{id:i.MetricNames.BrowserReceivingResponseTime},
{id:i.MetricNames.BrowserPageLoadConnectTime},]},{id:"96FF22BB-C1E7-4BF6-8FD8-DB24FEBBDCBC",chartType:
"Area",palette:"blueHues",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.ServerResponseTime}]},
{id:"9B0C8163-B4CB-43BB-A709-1A2B2BBDF5AA",chartType:"Area",palette:"fail",aggregation:i.FunctionNames.
Sum,metrics:[{id:i.MetricNames.BrowserExceptions}]},{id:"2C251251-92A6-40D0-988D-3CB4DD1302C6",chartType:
"Area",palette:"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.PageViews}]},{id:
"CA466DEF-2B3D-409D-BB2E-1184AC54E7B0",chartType:"Grid",aggregation:i.FunctionNames.Avg,metrics:[{id:
i.MetricNames.BrowserResponseTime}],grouping:{kind:"ByDimension",dimension:"clientPerformance.urlData.base"},
clickAction:{defaultBlade:"MetricsExplorerBlade",uri:"IndividualClientPerformance"}},{id:"1B6113A9-29BB-4F5D-B91A-DE64A206071F",
chartType:"Grid",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.BrowserExceptions}],grouping:
{kind:"ByDimension",dimension:i.DimensionNames.ExceptionProblemId},clickAction:{defaultBlade:"MetricsExplorerBlade",
uri:"IndividualException"}}]});this.setBladeDefinition(n.DeviceApplicationHealthMetrics,{title:"insightsTimeline",
charts:[{id:"EBBC991A-72F0-4A0D-9C36-AF11D8F767F1",chartType:"Area",chartHeight:2,aggregation:i.FunctionNames.
Cardinality,palette:"warmHues",grouping:{kind:"ByMetric"},metrics:[{id:i.MetricNames.ActiveUsers}]},
{id:"E68AAB5E-3973-4A75-B08F-91458318DF9B",chartType:"Area",chartHeight:1,palette:"greenHues",aggregation:
i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}]},{id:"E5D70B2C-1CAC-42EA-97B6-BFF4F865E7E7",
chartType:"Area",chartHeight:1,palette:"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
PageViews}]},{id:"8B7C0453-BFC4-4585-9824-10D6DDD2E888",chartType:"Bar",chartHeight:1,palette:"fail",
aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.Crashes}]}],actions:[{id:"E68AAB5E-3973-4A75-B08F-91458318DF9B",
defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:n.
DeviceSessionsMetrics},notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectSessionData"},
{id:"E5D70B2C-1CAC-42EA-97B6-BFF4F865E7E7",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:n.DevicePagesMetrics},notProvisionedBlade:u.BladeNames.quickStartBlade,
notProvisionedMessage:"learnCollectPageViewData"},{id:"EBBC991A-72F0-4A0D-9C36-AF11D8F767F1",defaultBlade:
u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:n.DeviceUsersMetrics},
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectUserData"},{id:"8B7C0453-BFC4-4585-9824-10D6DDD2E888",
defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:n.
CrashesMetrics},noDataHelperKind:i.MetricsExplorerChartNoDataHelperKind.Crashes,noDataMessage:"noCrashesInPeriod",
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectCrashesData"}]},
n.Deprecated_DeviceApplicationHealthMetrics);this.setBladeDefinition(n.DevicePagesMetrics,{title:"usageTitlesPagesDrillIn",
charts:[{id:"E7E919AF-79C2-4F0A-BB4B-1412D2476331",chartType:"Area",chartHeight:4,aggregation:i.FunctionNames.
Sum,grouping:{kind:"ByDimension",dimension:i.DimensionNames.ViewName},metrics:[{id:i.MetricNames.PageViews}]},
{id:"93A4BEBE-B4AE-4F18-A932-6F857B2F46A3",chartType:"Area",palette:"warmHues",chartHeight:1,aggregation:
i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.ActiveUsers}]},{id:"4222CC55-CBAE-44FF-9AFD-909157A57CE7",
chartType:"Area",palette:"greenHues",chartHeight:1,aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
SessionPageViews}]},{id:"5DB39B35-FBCC-4570-B1D0-B5CFF4F60F0C",chartType:"Grid",metrics:[{id:i.MetricNames.
PageViews},{id:i.MetricNames.ActiveUsers},{id:i.MetricNames.Sessions}],clickAction:{defaultBlade:"MetricsExplorerBlade",
uri:n.DevicePagesMeToMe},grouping:{kind:"ByDimension",dimension:i.DimensionNames.ViewName}},{id:"40B1902B-6B0C-4F72-8555-54F2014EF6F5",
chartType:"Grid",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}],palette:
"greenHues",grouping:{kind:"ByDimension",dimension:i.DimensionNames.ExitUrl}}]});this.setBladeDefinition(
n.DeviceUsersMetrics,{title:"usageTitlesUsersDrillIn",charts:[{id:"86123C29-12DD-42DC-81A7-9A72C2F1EAC0",
chartType:"Area",chartHeight:4,palette:"warmHues",aggregation:i.FunctionNames.Cardinality,metrics:[{
id:i.MetricNames.ActiveUsers}]},{id:"44087DDD-C43F-49A9-A65B-A5DB4BEB503B",chartType:"Area",chartHeight:
1,palette:"yellowHues",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.NewUsers}]},
{id:"3DCD4060-9491-4057-9743-A78CFDA6151E",grouping:{kind:"ByDimension",dimension:i.DimensionNames.LocationCountry},
chartType:"Grid",palette:"warmHues",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.
ActiveUsers}],clickAction:{defaultBlade:"MetricsExplorerBlade",uri:n.SessionByCountryMeToMeMetrics}}]});
this.setBladeDefinition(n.DeviceSessionsMetrics,{title:"usageTitlesSessionsDrillIn",charts:[{id:"DFB62CBB-6242-407C-B058-9F15D6F3BE0C",
chartType:"Area",chartHeight:4,palette:"greenHues",aggregation:i.FunctionNames.Cardinality,grouping:
{kind:"ByDimension",dimension:i.DimensionNames.ApplicationVersionDimensionId},metrics:[{id:i.MetricNames.
Sessions}]},{id:"6DB73158-4DE7-4D02-9C7B-37F2A7C3623E",chartType:"Area",chartHeight:1,palette:"warmHues",
aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.ActiveUsers}]},{id:"45605C98-1CC4-40D0-A0C0-5D1944E6E1C8",
chartType:"Area",chartHeight:1,palette:"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
PageViews}]},{id:"AD819128-B535-4C30-AA28-0814B6AEE326",chartType:"Area",chartHeight:1,palette:"greenHues",
aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.TimeBetweenSessions}]},{id:"081BD3F3-86B8-44A7-9800-763E6031014D",
chartType:"Grid",aggregation:i.FunctionNames.Cardinality,palette:"greenHues",metrics:[{id:i.MetricNames.
Sessions}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.ApplicationVersionDimensionId}}]});
this.setBladeDefinition(n.CrashesMetrics,{charts:[{id:"59cfadec-6253-474f-b3eb-9a1a49aad580",chartType:
"Bar",chartHeight:4,palette:"fail",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.Crashes}]},
{id:"7EEC4202-1B7E-40B7-9EFE-2850DA40424B",chartType:"Area",chartHeight:1,palette:"blueHues",aggregation:
i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.ImpactedUsers}]},{id:"59F23260-3644-4D31-90F0-A62A12B511E6",
chartType:"Grid",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.Crashes}],grouping:{kind:
"ByDimension",dimension:i.DimensionNames.ExceptionProblemId}}]});this.setBladeDefinition(n.TopDeviceMetrics,
{title:"usageTitlesUserProfileDrillIn",charts:[{id:"B7AD5961-6523-4A1C-B243-E394C134F772",chartType:
"Area",chartHeight:4,palette:"blueHues",aggregation:i.FunctionNames.Cardinality,grouping:{kind:"ByDimension",
dimension:i.DimensionNames.DeviceType},metrics:[{id:i.MetricNames.Sessions}]},{id:"A8F2045B-6020-4F49-AED8-F12151024D01",
grouping:{kind:"ByDimension",dimension:i.DimensionNames.DeviceModelDimensionId},chartType:"Grid",palette:
"blueHues",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}],clickAction:
{defaultBlade:"MetricsExplorerBlade",uri:n.DevicesMeToMeMetrics}},{id:"0E69597F-9F8A-4CA5-B35D-CC68898354CC",
grouping:{kind:"ByDimension",dimension:i.DimensionNames.OsVersion},chartType:"Grid",palette:"greenHues",
aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}],clickAction:{defaultBlade:
"MetricsExplorerBlade",uri:n.DevicesMeToMeMetrics}},{id:"00F1C36B-8D5F-4E9A-AD42-926020B5DF0C",grouping:
{kind:"ByDimension",dimension:i.DimensionNames.ScreenResolution},chartType:"Grid",palette:"fail",aggregation:
i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}],clickAction:{defaultBlade:"MetricsExplorerBlade",
uri:n.DevicesMeToMeMetrics}}]});this.setBladeDefinition(n.TopSessionbyCountryMetric,{title:"usageTitlesUserProfileDrillIn",
charts:[{id:"5D2FB900-8133-4A0A-86EA-E07FFF2379BC",chartType:"Area",chartHeight:4,palette:"greenHues",
aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}],grouping:{kind:"ByDimension",
dimension:i.DimensionNames.LocationCountry}},{id:"3DB47A9B-A311-471A-AA4D-746AA502643E",chartType:"Grid",
palette:"greenHues",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions},{id:
i.MetricNames.ActiveUsers}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.LocationCountry},
clickAction:{defaultBlade:"MetricsExplorerBlade",uri:n.SessionByCountryMeToMeMetrics}}]});this.setBladeDefinition(
n.JavaWebDiagnosticsTimelineMetrics,{title:"diagnosticsTimeline",charts:[{id:"4DF9C3C3-46F1-43D9-8644-D18F82B6E4C6",
chartType:"Area",chartHeight:3,palette:"warmHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
ServerExceptions}]},{id:"8B7C0453-BFC4-4585-9824-10D6DDD2E888",chartType:"Area",chartHeight:1,palette:
"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.BrowserExceptions}]},{id:"92A5B6F2-A6D2-4BF2-90F0-8D5067BE87AC",
chartType:"Bar",chartHeight:1,palette:"fail",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
FailedRequests}]}],actions:[{id:"4DF9C3C3-46F1-43D9-8644-D18F82B6E4C6",defaultBlade:u.BladeNames.metricsExplorerBlade,
defaultBladeInputs:{MetricsExplorerJsonDefinitionId:n.TopExceptionsMetrics},notProvisionedBlade:u.BladeNames.
quickStartBlade,notProvisionedMessage:"learnCollectServerExceptionData"},{id:"8B7C0453-BFC4-4585-9824-10D6DDD2E888",
defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:"chartDefinitionId:?name=Common/Diagnostics/BrowserExceptionsMetrics"},
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectBrowserExceptionData"},
{id:"92A5B6F2-A6D2-4BF2-90F0-8D5067BE87AC",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:n.FailedRequestsDetailTimelineMetrics},notProvisionedBlade:u.BladeNames.
quickStartBlade,notProvisionedMessage:"learnCollectFailedRequestData"}]});this.setBladeDefinition(n.
FailedRequestsDetailTimelineMetrics,{title:"failuresExceptionsPartTitle",charts:[{id:"EAE7A235-339A-4225-9463-590FC0E08498",
chartType:"Bar",chartHeight:4,palette:"fail",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
FailedRequests}]},{id:"00AF23DD-0E77-4C25-B4E8-ACC3E4DB5CCE",chartType:"Area",chartHeight:1,palette:
"warmHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.FailedRemoteDependencyCount}],
grouping:{kind:"ByDimension",dimension:i.DimensionNames.RemoteDependencyType}},{id:"E199D637-057E-489B-BC3B-E351C08BE7CA",
chartType:"Bar",chartHeight:1,palette:"fail",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
Exceptions}]},{id:"D220C9B3-DF04-47E0-B991-7F0F88D06AA0",chartType:"Area",chartHeight:1,palette:"blueHues",
aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.TotalRequests}]},{id:"02866033-638F-4629-B86F-F1094A2BDAF0",
chartType:"Area",chartHeight:1,priorPeriod:!1,aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.
MetricNames.ActiveUsers}]},{id:"AFA7DB59-1397-4242-B783-E330F81F3BF3",chartType:"Grid",aggregation:i.
FunctionNames.Sum,metrics:[{id:i.MetricNames.FailedRequests}],grouping:{kind:"ByDimension",dimension:
i.DimensionNames.BaseUrl},clickAction:{defaultBlade:"MetricsExplorerBlade",uri:"IndividualRequest"}},
{id:"28F902FB-916E-4BD8-974F-3250991DA97A",chartType:"Grid",grouping:{kind:"ByDimension",dimension:i.
DimensionNames.RemoteDependencyName},metrics:[{id:i.MetricNames.FailedRemoteDependencyCount}],aggregation:
i.FunctionNames.Sum,clickAction:{defaultBlade:"MetricsExplorerBlade",uri:"IndividualDependency"}},{id:
"5284A031-5BCA-479E-9EA1-A2A4DDF175B6",chartType:"Grid",aggregation:i.FunctionNames.Sum,metrics:[{id:
i.MetricNames.Exceptions}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.ExceptionProblemId},
clickAction:{defaultBlade:"MetricsExplorerBlade",uri:"IndividualException"}}]});this.setBladeDefinition(
n.DiagnosticsTimelineMetrics,{title:"diagnosticsTimeline",charts:[{id:"4DF9C3C3-46F1-43D9-8644-D18F82B6E4C6",
chartType:"Area",chartHeight:2,palette:"warmHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
ServerExceptions}]},{id:"8B7C0453-BFC4-4585-9824-10D6DDD2E888",chartType:"Area",chartHeight:1,palette:
"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.BrowserExceptions}]},{id:"B19B54A8-DFEE-47C4-97EC-7D563BC9D612",
chartType:"Area",chartHeight:1,palette:"greenHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
FailedRemoteDependencyCount}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.RemoteDependencyType}},
{id:"92A5B6F2-A6D2-4BF2-90F0-8D5067BE87AC",chartType:"Bar",chartHeight:1,palette:"fail",aggregation:
i.FunctionNames.Sum,metrics:[{id:i.MetricNames.FailedRequests}]}],actions:[{id:"4DF9C3C3-46F1-43D9-8644-D18F82B6E4C6",
defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:n.
TopExceptionsMetrics},notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectServerExceptionData"},
{id:"8B7C0453-BFC4-4585-9824-10D6DDD2E888",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:"chartDefinitionId:?name=Common/Diagnostics/BrowserExceptionsMetrics"},
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectBrowserExceptionData"},
{id:"B19B54A8-DFEE-47C4-97EC-7D563BC9D612",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:n.FailedDependenciesDetailTimelineMetrics},notProvisionedBlade:u.BladeNames.
quickStartBlade,notProvisionedMessage:"learnCollectDepData"},{id:"92A5B6F2-A6D2-4BF2-90F0-8D5067BE87AC",
defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:n.
FailedRequestsDetailTimelineMetrics},notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:
"learnCollectFailedRequestData"}]});this.setBladeDefinition(n.DeviceCustomEventsBladeMetrics,{title:
"usageTitlesCustomEventsDrillIn",charts:[{id:"8F8CF168-90CA-4F99-A600-31A822C06D85",chartType:"Area",
chartHeight:4,palette:"darkBlueHues",aggregation:i.FunctionNames.Sum,grouping:{kind:"ByDimension",dimension:
i.DimensionNames.CustomEventName},metrics:[{id:i.MetricNames.CustomEventsCount}]},{id:"03F88B16-6403-47BF-9D68-582C086D2F7A",
chartType:"Area",palette:"warmHues",chartHeight:1,aggregation:i.FunctionNames.Cardinality,metrics:[{
id:i.MetricNames.ActiveUsers}]},{id:"86E1835C-CB05-4436-835E-0719F7F8EFF2",chartType:"Area",palette:
"greenHues",chartHeight:1,aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.SessionCustomEvents}]},
{id:"9E5BC4E0-2001-41DF-8256-CFA2200D8838",chartType:"Grid",metrics:[{id:i.MetricNames.CustomEventsCount},
{id:i.MetricNames.ActiveUsers},{id:i.MetricNames.Sessions}],grouping:{kind:"ByDimension",dimension:i.
DimensionNames.CustomEventName},clickAction:{defaultBlade:"MetricsExplorerBlade",uri:n.DeviceCustomEventMeToMe}},
{id:"B38B0C4C-A1B7-47B5-BBD0-FAFF292B69E0",chartType:"Grid",aggregation:i.FunctionNames.Cardinality,
metrics:[{id:i.MetricNames.Sessions}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.EntryEvent}},
{id:"86D0C445-2911-4B72-BA6B-19C828B25D58",chartType:"Grid",palette:"yellowHues",aggregation:i.FunctionNames.
Cardinality,metrics:[{id:i.MetricNames.Sessions}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.
ExitEvent}}]});this.setBladeDefinition(n.FailedDependenciesDetailTimelineMetrics,{charts:[{id:"5C05AABB-7CFC-4B57-9DDB-7F87E98A57FD",
chartType:"Area",chartHeight:4,palette:"warmHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
FailedRemoteDependencyCount}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.RemoteDependencyType}},
{id:"585BAC62-33A4-4250-8784-C893B797ACD1",chartType:"Bar",chartHeight:1,palette:"fail",aggregation:
i.FunctionNames.Sum,metrics:[{id:i.MetricNames.FailedRequests}]},{id:"6225A135-B688-49C3-9318-AE46D38FAE01",
chartType:"Area",palette:"blueHues",grouping:{kind:"ByDimension",dimension:i.DimensionNames.ExceptionProblemId},
aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.ServerExceptions}]},{id:"557ADBDE-80BC-4262-B39C-3586351D55A3",
chartType:"Area",chartHeight:1,palette:"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
TotalRequests}]},{id:"9219460B-26D8-40CE-A199-1FD74B4587E3",chartType:"Grid",grouping:{kind:"ByDimension",
dimension:i.DimensionNames.RemoteDependencyName},metrics:[{id:i.MetricNames.FailedRemoteDependencyCount}],
aggregation:i.FunctionNames.Sum},{id:"ECC6D408-1DAD-4EA3-876F-B464A25FB34F",chartType:"Grid",aggregation:
i.FunctionNames.Sum,metrics:[{id:i.MetricNames.FailedRequests}],grouping:{kind:"ByDimension",dimension:
i.DimensionNames.BaseUrl}}]});this.setBladeDefinition(n.PerformanceTimelineMetrics,{title:"performanceTimeline",
charts:[{id:"C6BE5BE4-9D8A-49F3-A4E9-70BF0D53F281",chartType:"Area",chartHeight:2,palette:"blueHues",
aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.RemoteDependencyDuration}],grouping:{kind:
"ByDimension",dimension:i.DimensionNames.RemoteDependencyType}},{id:"BDEE9BAA-3591-486A-A890-EE139AFDBEF0",
chartType:"Area",chartHeight:1,palette:"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
TotalRequests}]},{id:"ECDF2DFC-1A8B-42A2-B19B-353AE75EFF8D",chartType:"Area",chartHeight:1,palette:"yellowHues",
aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.ProcessorNonIdlePercentage}]},{id:"4E79EB23-6BD0-4103-AB53-3051D0050F61",
chartType:"Area",chartHeight:1,palette:"greenHues",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
PerformanceCounterAvailableBytes}]}],actions:[{id:"C6BE5BE4-9D8A-49F3-A4E9-70BF0D53F281",defaultBlade:
u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:n.RemoteDependenciesDetailMetrics},
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectDepData"},{id:"BDEE9BAA-3591-486A-A890-EE139AFDBEF0",
defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:"chartDefinitionId:?name=Common/Performances/RequestsDetailTimelineMetrics"},
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectServerRequestData"},
{id:"ECDF2DFC-1A8B-42A2-B19B-353AE75EFF8D",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:n.CPUDetailTimelineMetrics},notProvisionedBlade:u.BladeNames.quickStartBlade,
notProvisionedMessage:"learnCollectPerfCounterData"},{id:"4E79EB23-6BD0-4103-AB53-3051D0050F61",defaultBlade:
u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:n.MemoryDetailTimelineMetrics},
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectPerfCounterData"}]});
this.setBladeDefinition(n.RemoteDependenciesDetailMetrics,{charts:[{id:"E23C1D9B-E95E-4B26-AD2D-FF4B68F7E679",
chartType:"Area",chartHeight:4,palette:"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
RemoteDependencyDuration}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.RemoteDependencyType}},
{id:"8DF5DC56-392C-417B-A948-E170E8A7F139",chartType:"Area",chartHeight:2,palette:"blueHues",aggregation:
i.FunctionNames.Sum,metrics:[{id:i.MetricNames.RemoteDependencyCount}],grouping:{kind:"ByDimension",
dimension:i.DimensionNames.RemoteDependencyType}},{id:"21DEF4F7-0EE4-4C2F-8796-CE8891C97381",chartType:
"Area",chartHeight:1,palette:"blueHues",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.ServerResponseTime}]},
{id:"D7495C82-F1F0-4992-9888-334B89A9E203",chartType:"Area",chartHeight:1,palette:"greenHues",aggregation:
i.FunctionNames.Avg,metrics:[{id:i.MetricNames.AspNetPerformanceCounterRequestRate}]},{id:"E93CC2B3-8DD7-4D99-AF7B-4247BE890E24",
chartType:"Area",chartHeight:1,palette:"yellowHues",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
ProcessorNonIdlePercentage}]},{id:"1A513074-CE4E-46D2-B6FA-0C6C65C15149",chartType:"Grid",grouping:{
kind:"ByDimension",dimension:i.DimensionNames.RemoteDependencyName},metrics:[{id:i.MetricNames.RemoteDependencyDuration}],
aggregation:i.FunctionNames.Avg},{id:"C8FB98BE-9B25-4116-B144-E802D28CF331",chartType:"Grid",grouping:
{kind:"ByDimension",dimension:i.DimensionNames.Url},aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
ServerResponseTime}]}]});this.setBladeDefinition(n.CPUDetailTimelineMetrics,{charts:[{id:"E429369D-0667-419F-8BEC-1A1D7D5FEF05",
chartType:"Area",chartHeight:4,palette:"yellowHues",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
ProcessorNonIdlePercentage}]},{id:"ADCA9A39-CD8C-4696-BA2E-53541D9ED9AC",chartType:"Area",chartHeight:
1,palette:"greenHues",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.PerformanceCounterAvailableBytes}]},
{id:"267B21AE-3F66-45F7-9DC2-7F76ED2E1594",chartType:"Area",chartHeight:1,palette:"blueHues",aggregation:
i.FunctionNames.Sum,metrics:[{id:i.MetricNames.TotalRequests}]},{id:"3BBB8A74-4DD6-4147-BEC6-96AE9C112F28",
chartType:"Grid",grouping:{kind:"ByDimension",dimension:i.DimensionNames.DeviceId},aggregation:i.FunctionNames.
Avg,metrics:[{id:i.MetricNames.ProcessorNonIdlePercentage}]}]});this.setBladeDefinition(n.MemoryDetailTimelineMetrics,
{charts:[{id:"1FA16CB0-647D-4882-BE61-A43D503B6F3D",chartType:"Area",chartHeight:4,palette:"greenHues",
aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.PerformanceCounterAvailableBytes}]},{id:"5772D904-7447-432A-92DB-7835A6B2AE4D",
chartType:"Area",chartHeight:1,palette:"yellowHues",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
ProcessorNonIdlePercentage}]},{id:"DA006ACE-835E-4119-BD96-100E6CE765FA",chartType:"Area",chartHeight:
1,palette:"blueHues",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.TotalRequests}]},{id:
"867E1E41-5BB8-4B1A-8F3A-AEBEF6BCDC95",chartType:"Grid",grouping:{kind:"ByDimension",dimension:i.DimensionNames.
DeviceId},aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.ProcessorNonIdlePercentage}]}]});
this.setBladeDefinition(n.UsageAnalyticsMetrics,{title:"usageTimelineTitle",charts:[{id:"F2CA7FB5-FB46-4932-AAA6-A9BE759DEC8C",
chartType:"Area",chartHeight:3,palette:"warmHues",aggregation:i.FunctionNames.Cardinality,metrics:[{
id:i.MetricNames.ActiveUsers}]},{id:"7456CFE0-22CB-488E-B15E-7088BD58E5BF",chartType:"Area",chartHeight:
2,palette:"greenHues",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}]},
{id:"8A4EA1AD-09C2-4AF9-B0D8-8BFF0AC37C11",chartType:"Area",chartHeight:2,palette:"blueHues",aggregation:
i.FunctionNames.Sum,metrics:[{id:i.MetricNames.PageViews}]}],actions:[{id:"7456CFE0-22CB-488E-B15E-7088BD58E5BF",
defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:"chartDefinitionId:?name=Common/Sessions/Usage_L1_SessionsMetrics"},
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectSessionData"},{id:
"8A4EA1AD-09C2-4AF9-B0D8-8BFF0AC37C11",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:n.TopPagesMetrics},notProvisionedBlade:u.BladeNames.quickStartBlade,
notProvisionedMessage:"learnCollectPageViewData"},{id:"F2CA7FB5-FB46-4932-AAA6-A9BE759DEC8C",defaultBlade:
u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:"chartDefinitionId:?name=Common/Usages/Usage_L1_UniqueUsersMetrics"},
notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:"learnCollectUserData"}],minimumRangeInDaysForDailyGrain:
i.minimumRangeInDaysForDailyGrain_Usage},n.Deprecated_UsageAnalyticsMetrics);this.setBladeDefinition(
n.CustomEventsMetrics,{title:"usageTitlesCustomEventsDrillIn",charts:[{id:"259B1CD4-24AF-4A82-B39E-549E6221E5D9",
chartType:"Area",chartHeight:3,aggregation:i.FunctionNames.Sum,palette:"darkBlueHues",grouping:{kind:
"ByDimension",dimension:i.DimensionNames.CustomEventName},metrics:[{id:i.MetricNames.CustomEventsCount}]},
{id:"72A6D0FC-3B07-425C-AE8F-26C958772661",chartType:"Area",palette:"warmHues",chartHeight:1,aggregation:
i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.ActiveUsers}]},{id:"3DB32821-D593-4764-8733-62217E1CBE92",
chartType:"Area",palette:"greenHues",chartHeight:1,aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
SessionCustomEvents}]},{id:"162E5149-B2E3-491E-8364-2F56C95DEADD",chartType:"Grid",metrics:[{id:i.MetricNames.
CustomEventsCount},{id:i.MetricNames.ActiveUsers},{id:i.MetricNames.Sessions}],clickAction:{defaultBlade:
"MetricsExplorerBlade",uri:n.ServiceCustomEventMeToMe},grouping:{kind:"ByDimension",dimension:i.DimensionNames.
CustomEventName}},{id:"83FF03F3-D890-4CB0-9921-FD39F3206BC7",chartType:"Grid",aggregation:i.FunctionNames.
Cardinality,metrics:[{id:i.MetricNames.Sessions}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.
EntryEvent}},{id:"13BE913D-BF95-4F87-B9FA-699C88DAE87D",chartType:"Grid",palette:"yellowHues",aggregation:
i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}],grouping:{kind:"ByDimension",dimension:
i.DimensionNames.ExitEvent}}],minimumRangeInDaysForDailyGrain:i.minimumRangeInDaysForDailyGrain_Usage});
this.setBladeDefinition(n.SessionsEngagementDrillInMetricsForServiceApp,{title:"usageTitlesSessionDurationDrillIn",
charts:[{id:"B04F41D1-A4F4-46FA-83CC-9B2E0E3DE182",chartType:"Area",palette:"warmHues",chartHeight:4,
aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.SessionDuration}]},{id:"0A42B652-E331-4102-B4E2-B3D95E5BF4FB",
chartType:"Area",palette:"greenHues",chartHeight:1,aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
SessionPageViews}]},{id:"F9310257-6333-480F-8F0C-3A4751E12CE6",chartType:"Area",palette:"blueHues",chartHeight:
1,aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.SessionCustomEvents}]},{id:"ABBF0D59-B19A-48DB-BE3A-31C60A0C587F",
chartType:"Area",palette:"fail",chartHeight:1,aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
SessionExceptions}]},{id:"8422A4CD-67B1-43DE-B251-E05711D3669D",chartType:"Area",chartHeight:1,palette:
"greenHues",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}]},{id:"B472C1AA-D681-4150-92B5-B48F549B8CFC",
chartType:"Grid",aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.SessionDuration}],grouping:
{kind:"ByDimension",dimension:i.DimensionNames.BrowserVersion},clickAction:{defaultBlade:"MetricsExplorerBlade",
uri:"chartDefinitionId:?name=Common/Usages/Usage_L2_SessionDurationMeToMe"}}],minimumRangeInDaysForDailyGrain:
i.minimumRangeInDaysForDailyGrain_Usage});this.setBladeDefinition(n.SessionsEngagementDrillInMetricsForDeviceApp,
{title:"usageTitlesSessionDurationDrillIn",charts:[{id:"307A74E8-C2BA-4B94-BF6D-4AB78761CB2C",chartType:
"Area",palette:"warmHues",chartHeight:4,aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.SessionDuration}]},
{id:"3FE18731-CDFE-4689-A74B-B6FF84E4FB15",chartType:"Area",palette:"greenHues",chartHeight:1,aggregation:
i.FunctionNames.Avg,metrics:[{id:i.MetricNames.SessionPageViews}]},{id:"C49A7431-F876-4546-BEC1-0CB79D7CB488",
chartType:"Area",palette:"blueHues",chartHeight:1,aggregation:i.FunctionNames.Avg,metrics:[{id:i.MetricNames.
SessionCustomEvents}]},{id:"8F0156A6-1E61-4636-99C2-C398AA8BEF1F",chartType:"Area",palette:"fail",chartHeight:
1,aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.Crashes}]},{id:"CC1E2185-746C-413A-8F29-08B43959AD55",
chartType:"Area",chartHeight:1,palette:"greenHues",aggregation:i.FunctionNames.Cardinality,metrics:[
{id:i.MetricNames.Sessions}]},{id:"6BD47C72-4C62-4578-B3D0-04F9956A4C43",chartType:"Grid",aggregation:
i.FunctionNames.Avg,metrics:[{id:i.MetricNames.SessionDuration}],grouping:{kind:"ByDimension",dimension:
i.DimensionNames.ApplicationVersionDimensionId},clickAction:{defaultBlade:"MetricsExplorerBlade",uri:
"chartDefinitionId:?name=Common/Usages/Usage_L2_DeviceSessionDurationMeToMe"}}],minimumRangeInDaysForDailyGrain:
i.minimumRangeInDaysForDailyGrain_Usage});this.setBladeDefinition(n.DeviceCustomEventMeToMe,{title:"usageTitlesCustomEventsMeToMe",
charts:[{id:"61F0EE6E-E169-486D-8E0A-C8E0D92F3BD3",chartType:"Area",palette:"darkBlueHues",chartHeight:
4,aggregation:i.FunctionNames.Sum,grouping:{kind:"ByDimension",dimension:i.DimensionNames.CustomEventName},
metrics:[{id:i.MetricNames.CustomEventsCount}]},{id:"CD67AC19-32B5-4F31-AF20-DA019291009D",chartType:
"Area",palette:"warmHues",chartHeight:1,aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.
ActiveUsers}]},{id:"7D0FEC5D-3D12-48CF-ADA2-8628E0E4256E",chartType:"Area",palette:"greenHues",chartHeight:
1,aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}]},{id:"EAE85228-D86C-4773-9403-192CB6FABCB7",
grouping:{kind:"ByDimension",dimension:i.DimensionNames.ApplicationVersionDimensionId},palette:"darkBlueHues",
chartType:"Grid",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.CustomEventsCount}]},{id:
"3F57BAEB-587C-406F-A8AC-7EBA75706379",grouping:{kind:"ByDimension",dimension:i.DimensionNames.Region},
palette:"yellowHues",chartType:"Grid",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.CustomEventsCount}]}],
minimumRangeInDaysForDailyGrain:i.minimumRangeInDaysForDailyGrain_Usage,customFilter:"'Event name':'{0}' OR 'Entry custom event':'{0}' OR 'Exit custom event':'{0}'"});
this.setBladeDefinition(n.DevicePagesMeToMe,{title:"usageTitlesPagesMeToMe",charts:[{id:"0FCD811E-7FB6-446B-A6F9-FA4E4217C519",
chartType:"Area",chartHeight:4,aggregation:i.FunctionNames.Sum,grouping:{kind:"ByDimension",dimension:
i.DimensionNames.ViewName},metrics:[{id:i.MetricNames.PageViews}]},{id:"EA892348-3ACD-438F-8D02-1DC447FFDE9B",
chartType:"Area",palette:"warmHues",chartHeight:1,aggregation:i.FunctionNames.Cardinality,metrics:[{
id:i.MetricNames.ActiveUsers}]},{id:"041994FC-EE3E-44AD-94BC-D8AA655F063E",chartType:"Area",palette:
"greenHues",chartHeight:1,aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}]},
{id:"1B87D699-F3D9-4EC1-BE7E-887A1D1A1901",chartType:"Grid",aggregation:i.FunctionNames.Sum,grouping:
{kind:"ByDimension",dimension:i.DimensionNames.ApplicationVersionDimensionId},metrics:[{id:i.MetricNames.
PageViews}]},{id:"1CACAF17-9581-4D25-955D-0D2E14711B1E",grouping:{kind:"ByDimension",dimension:i.DimensionNames.
Region},palette:"yellowHues",chartType:"Grid",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.
PageViews}]}],minimumRangeInDaysForDailyGrain:i.minimumRangeInDaysForDailyGrain_Usage,customFilter:"'Page name':'{0}' OR 'Entry page':'{0}' OR 'Exit page':'{0}'"});
this.setBladeDefinition(n.ServicePagesMeToMe,{title:"usageTitlesPagesMeToMe",charts:[{id:"96F5B96A-5B87-4BEC-AA16-8E4335A3F348",
chartType:"Area",chartHeight:4,aggregation:i.FunctionNames.Sum,grouping:{kind:"ByDimension",dimension:
i.DimensionNames.ViewName},metrics:[{id:i.MetricNames.PageViews}]},{id:"994FB228-FFA1-4522-A825-7940F9F9DE6B",
chartType:"Area",palette:"warmHues",chartHeight:1,aggregation:i.FunctionNames.Cardinality,metrics:[{
id:i.MetricNames.ActiveUsers}]},{id:"CEE88D6D-6E14-4201-A76D-D65BFDD56DB4",chartType:"Area",palette:
"greenHues",chartHeight:1,aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}]},
{id:"FA6884FB-4655-4E54-94E7-61B40430CB25",chartType:"Grid",aggregation:i.FunctionNames.Sum,grouping:
{kind:"ByDimension",dimension:i.DimensionNames.BrowserVersion},metrics:[{id:i.MetricNames.PageViews}]},
{id:"1E84EFB3-F9EC-40D4-8D06-06F9E1D331F4",grouping:{kind:"ByDimension",dimension:i.DimensionNames.Region},
palette:"yellowHues",chartType:"Grid",aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.PageViews}]}],
minimumRangeInDaysForDailyGrain:i.minimumRangeInDaysForDailyGrain_Usage,customFilter:"'Page name':'{0}' OR 'Entry page':'{0}' OR 'Exit page':'{0}'"});
this.setBladeDefinition(n.ServiceCustomEventMeToMe,{title:"usageTitlesCustomEventsMeToMe",charts:[{id:
"BE286E7A-98FE-44F6-92C4-B63EEB4FFB49",chartType:"Area",palette:"darkBlueHues",chartHeight:4,aggregation:
i.FunctionNames.Sum,grouping:{kind:"ByDimension",dimension:i.DimensionNames.CustomEventName},metrics:
[{id:i.MetricNames.CustomEventsCount}]},{id:"1F7DEAFD-FE92-4FD5-A6A6-1D8CE6347A40",chartType:"Area",
palette:"warmHues",chartHeight:1,aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.
ActiveUsers}]},{id:"ED2A3F28-B6E6-4B60-8A67-10623C8F3F1D",chartType:"Area",palette:"greenHues",chartHeight:
1,aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}]},{id:"8EAAFBFB-570B-464F-8E3F-394D1A563C27",
grouping:{kind:"ByDimension",dimension:i.DimensionNames.BrowserVersion},chartType:"Grid",palette:"darkBlueHues",
aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.CustomEventsCount}]},{id:"83E48493-01C7-4B92-AFB1-F9B068A61892",
grouping:{kind:"ByDimension",dimension:i.DimensionNames.Region},palette:"yellowHues",chartType:"Grid",
aggregation:i.FunctionNames.Sum,metrics:[{id:i.MetricNames.CustomEventsCount}]}],minimumRangeInDaysForDailyGrain:
i.minimumRangeInDaysForDailyGrain_Usage,customFilter:"'Event name':'{0}' OR 'Entry custom event':'{0}' OR 'Exit custom event':'{0}'"});
this.setBladeDefinition(n.SessionByCountryMeToMeMetrics,{title:"usageTitlesUserProfileMeToMe",charts:
[{id:"90C7304E-AEFC-4C89-9434-F8CA1552B2B1",chartType:"Area",chartHeight:4,palette:"greenHues",aggregation:
i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}],grouping:{kind:"ByDimension",dimension:
i.DimensionNames.LocationCountry}},{id:"7B1DC987-5636-4577-B065-B541C99FDC00",chartType:"Grid",palette:
"greenHues",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions},{id:i.MetricNames.
ActiveUsers}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.LocationCountry}}],minimumRangeInDaysForDailyGrain:
i.minimumRangeInDaysForDailyGrain_Usage,customFilter:"'Country or region':'{0}'"});this.setBladeDefinition(
n.DevicesMeToMeMetrics,{title:"usageTitlesUserProfileMeToMe",charts:[{id:"27293551-810C-4568-8F55-A596540B02A6",
chartType:"Area",chartHeight:4,palette:"blueHues",aggregation:i.FunctionNames.Cardinality,metrics:[{
id:i.MetricNames.Sessions}],grouping:{kind:"ByDimension",dimension:i.DimensionNames.DeviceModelDimensionId}},
{id:"85472177-AB7C-4672-9A0D-463938E415B3",grouping:{kind:"ByDimension",dimension:i.DimensionNames.DeviceModelDimensionId},
chartType:"Grid",palette:"blueHues",aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.
Sessions}]},{id:"45368768-6F78-47B9-9EB5-CBFF62B51E51",grouping:{kind:"ByDimension",dimension:i.DimensionNames.
OsVersion},chartType:"Grid",palette:"greenHues",aggregation:i.FunctionNames.Cardinality,metrics:[{id:
i.MetricNames.Sessions}]},{id:"22489FE5-205D-4B98-A2F4-EAD13DDE0E47",grouping:{kind:"ByDimension",dimension:
i.DimensionNames.ScreenResolution},chartType:"Grid",palette:"fail",aggregation:i.FunctionNames.Cardinality,
metrics:[{id:i.MetricNames.Sessions}]}],minimumRangeInDaysForDailyGrain:i.minimumRangeInDaysForDailyGrain_Usage,
customFilter:"'Device model':'{0}'"});this.setBladeDefinition(n.BrowsersMeToMeMetrics,{title:"usageTitlesUserProfileMeToMe",
charts:[{id:"12679CEF-E69C-45C5-9624-EA8CAB6CB92D",chartType:"Area",chartHeight:4,palette:"blueHues",
aggregation:i.FunctionNames.Cardinality,grouping:{kind:"ByDimension",dimension:i.DimensionNames.Browser},
metrics:[{id:i.MetricNames.Sessions}]},{id:"F07DDEB1-7632-4661-9CA2-F7C6B229D046",grouping:{kind:"ByDimension",
dimension:i.DimensionNames.BrowserVersion},chartType:"Grid",palette:"blueHues",aggregation:i.FunctionNames.
Cardinality,metrics:[{id:i.MetricNames.Sessions}]},{id:"D8008B2C-3537-4F27-855B-E2D9FB49B207",grouping:
{kind:"ByDimension",dimension:i.DimensionNames.OsVersion},chartType:"Grid",palette:"greenHues",aggregation:
i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}]},{id:"9F1F51DF-718D-4DAD-870C-56683438A5AB",
grouping:{kind:"ByDimension",dimension:i.DimensionNames.ScreenResolution},chartType:"Grid",palette:"fail",
aggregation:i.FunctionNames.Cardinality,metrics:[{id:i.MetricNames.Sessions}]}],minimumRangeInDaysForDailyGrain:
i.minimumRangeInDaysForDailyGrain_Usage,customFilter:"'Browser version':'{0}'"});n._instance=this}return n.
Instance=function(){return n._instance===null&&(n._instance=new n),n._instance},n.prototype.fetchJsonDefintion=
function(t){if(n.validateId(t),!this._chartDefinitionSet[t])throw new Error("Error: Unrecognized metricsExplorerChartDefinitionId specified: "+
t);return this._chartDefinitionSet[t]},n.validateId=function(n){if(!n||n.length===0)throw new Error(
"Error: invalid metricsExplorerChartDefinitionId specified: "+n);},n.prototype.getBladeDefinitions=function(
){return this._bladeDefinitions},n.prototype.setTestBladeDefinition=function(n,t){this._chartDefinitionSetInProduct&&
Object.keys(this._chartDefinitionSetInProduct).length!==0||(this._chartDefinitionSetInProduct=e.clone(
this._chartDefinitionSet));this._bladeDefinitionsInProduct&&this._bladeDefinitionsInProduct.length!==
0||(this._bladeDefinitionsInProduct=this._bladeDefinitions.slice(0));this._chartDefinitionSet=e.clone(
this._chartDefinitionSetInProduct);this._bladeDefinitions=this._bladeDefinitionsInProduct.slice(0);this.
setBladeDefinition(n,t)},n._extractMetricsExplorerDefinitionId=function(n){var t,u,r;return MsPortalFx.
Util.isNullOrUndefined(n)||n.length===0?null:(t=n.split(":"),!t||t.length!==2||t[0]!==i.MetricsExplorerUriToken||
t[1].length===0)?null:t[1].substring(0,1)!=="?"?null:(u=t[1].substring(1),r=u.split("="),r.length!==
2||r[0]!==i.MetricsExplorerUriNameKey)?null:r[1].length!==0?r[1]:null},n.getJsonDefinitionId=function(
t){n.validateId(t);var i=n._extractMetricsExplorerDefinitionId(t);return i!==null?i:t},n.isDeveloperModeTestMetricsChartDefinition=
function(t){var i=n.getJsonDefinitionId(t);return i===n.DeveloperModeTestMetrics||i===n.DeveloperModeTestGridRowDrillThru||
i===n.DeveloperModeTestGridRowDrillThru_2},n.prototype.setBladeDefinition=function(t,i,r){n.validateId(
t);n.validateChartDefinition(i);this._chartDefinitionSet[t]=JSON.stringify(i,null,2);this._bladeDefinitions.
push(t);r&&(this._chartDefinitionSet[r]=this._chartDefinitionSet[t],this._bladeDefinitions.push(r))}
,n.validateChartDefinition=function(n){if(typeof n=="string")throw new Error("Error: chartDefinition is expected to be json object");
},n.Deprecated_UsageAnalyticsMetrics="UsageAnalyticsMetrics",n.Deprecated_DeviceApplicationHealthMetrics=
"DeviceApplicationHealthMetrics",n.DeveloperModeTestMetrics="DeveloperModeTestMetrics",n.DeveloperModeTestGridRowDrillThru=
"DeveloperModeTestGridRowDrillThru",n.DeveloperModeTestGridRowDrillThru_2="DeveloperModeTestGridRowDrillThru_2",
n.AspNetServersMetrics="AspNetServersMetrics",n.BrowsersMetrics="Usage_L1_BrowsersMetrics",n.RequestRateMetrics=
"RequestRateMetrics",n.AverageResponseTimeMetrics="AverageResponseTimeMetrics",n.TopExceptionsMetrics=
"TopExceptionsMetrics",n.SessionsPerHourMetrics="SessionsPerHourMetrics",n.SlowestRequestMetrics="SlowestRequestMetrics",
n.TopPagesMetrics="Usage_L1_TopPagesGridMetrics",n.SlowestRequestMetricsPastWeek="SlowestRequestMetricsPastWeek",
n.TopFivePagesMetrics="TopFivePagesChartMetrics",n.DiagnosticsTimelineMetrics="DiagnosticsTimelineMetrics",
n.InsightsTimelineMetrics="InsightsTimelineMetrics",n.EventsLastMonthMetrics="EventsLastMonthMetrics",
n.IndividualRequest="IndividualRequest",n.IndividualDependency="IndividualDependency",n.IndividualException=
"IndividualException",n.IndividualClientPerformance="IndividualClientPerformance",n.UsageAnalyticsMetrics=
"Usage_L0_UsageAnalyticsMetrics",n.PerformanceTimelineMetrics="PerformanceTimelineMetrics",n.BrowserPerformanceTimelineMetrics=
"BrowserPerformanceTimelineMetrics",n.RemoteDependenciesDetailMetrics="RemoteDependenciesDetailMetrics",
n.FailedRequestsDetailTimelineMetrics="FailedRequestsDetailTimelineMetrics",n.FailedDependenciesDetailTimelineMetrics=
"FailedDependenciesDetailTimelineMetrics",n.CPUDetailTimelineMetrics="CPUDetailTimelineMetrics",n.MemoryDetailTimelineMetrics=
"MemoryDetailTimelineMetrics",n.CustomEventsMetrics="Usage_L1_CustomEventsMetrics",n.DeviceApplicationHealthMetrics=
"Usage_L0_DeviceApplicationHealthMetrics",n.DeviceCustomEventsBladeMetrics="Usage_L1_DeviceCustomEventsBladeMetrics",
n.DeviceSessionsMetrics="Usage_L1_DeviceSessionsMetrics",n.DevicePagesMetrics="Usage_L1_DevicePagesMetrics",
n.DeviceUsersMetrics="Usage_L1_DeviceUsersMetrics",n.JavaWebDiagnosticsTimelineMetrics="JavaWebDiagnosticsTimelineMetrics",
n.TopDeviceMetrics="Usage_L1_TopDeviceMetrics",n.TopSessionbyCountryMetric="Usage_L1_TopSessionbyCountryMetric",
n.CrashesMetrics="CrashesMetrics",n.BlankChart="BlankChart",n.TelemetryEventsMetrics="TelemetryEventsMetrics",
n.SessionsEngagementDrillInMetricsForServiceApp="Usage_L1_SessionsEngagementDrillInMetricsForServiceApp",
n.SessionsEngagementDrillInMetricsForDeviceApp="Usage_L1_SessionsEngagementDrillInMetricsForDeviceApp",
n.DeviceCustomEventMeToMe="Usage_L2_DeviceCustomEventMeToMe",n.ServiceCustomEventMeToMe="Usage_L2_ServiceCustomEventMeToMe",
n.DevicePagesMeToMe="Usage_L2_DevicePagesMeToMe",n.ServicePagesMeToMe="Usage_L2_ServicePagesMeToMe",
n.SessionByCountryMeToMeMetrics="Usage_L2_SessionByCountryMeToMeMetrics",n.DevicesMeToMeMetrics="Usage_L2_DevicesMeToMeMetrics",
n.BrowsersMeToMeMetrics="Usage_L2_BrowsersMeToMeMetrics",n._instance=null,n}(),s;t.MetricsExplorerChartDefinition=
o;s=new o});define("Shared/ChartIdentifier",["require","exports"],function(n,t){function r(n,t){return n+
"."+t}var i=function(){function n(){}return n.GetParentEntity=function(n){if(!MsPortalFx.Util.isNullOrUndefined(
n)){var t=n.indexOf(".");return t>0?n.substring(0,t):undefined}},n}();t.ChartIdentifier=i;t.CreateId=
r});define("Shared/StringMapUtils",["require","exports"],function(n,t){function i(n){if(!n)return n;
var t={};return Object.keys(n).forEach(function(i){t[i]=n[i]}),t}t.clone=i});define("Shared/JsonDefinitionService",
["require","exports","./InsightsTelemetry","./AjaxHelper","./DataModels/MetricsExplorerDataModel","./DataModels/MEDataModelWrapper",
"./MetricsExplorerChartDefinition"],function(n,t,i,r,u,f,e){"use strict";var s=function(){function n(
){}return n}(),o;t.JsonDefinitionId=s;o=function(){function n(){var t=this;if(this._bladePartIdsMap=
{},this._containerName="JsonDefinitionService",this._containerType=3,n._instance)throw new Error("Error: Instantiation failed: Use JsonDefinitionService.Instance() instead of new.");
this._metricsExplorerDataModels={};this._dataModelsForOpennedBlades={};e.MetricsExplorerChartDefinition.
Instance().getBladeDefinitions().forEach(function(n){var o=e.MetricsExplorerChartDefinition.Instance(
).fetchJsonDefintion(n),r=u.ConvertFrom(o,t._containerType,t._containerName,undefined),f;r?r.jsonUri(
n):i.logError("Failed to retrieve ME data model",t._containerType,t._containerName,undefined);f=ko.observable(
r);t._metricsExplorerDataModels[n]=f});this._chartDefinitionsEntityCache=new MsPortalFx.Data.EntityCache(
{entityTypeName:"ApplicationInsights_JsonDefinitions",httpMethod:"GET",sourceUri:function(n){return JSON.
stringify(n)},supplyData:function(n,i,r,u,f){return t._supplyMetricsExplorerDataModel(n,i,r,u,f)},pollFrequency:
1});n._instance=this}return n.Instance=function(){return n._instance===null&&(n._instance=new n),n._instance}
,n.createUniqueBladeId=function(){return(Math.random()+1).toString(36).substring(1,6)},n.getPartId=function(
n,t,i){var r=e.MetricsExplorerChartDefinition.getJsonDefinitionId(i),u=n?n.SubscriptionId+"_"+n.Name:
"";return t+"_"+r+"_"+u},n.prototype.deleteAllDataModels=function(t){var r,u,i;if(t&&n.Instance()._bladePartIdsMap[
t]&&n.Instance()._bladePartIdsMap[t].length>0){for(u=n.Instance()._bladePartIdsMap[t].length,i=0;i<u;
i++)r=n.Instance()._bladePartIdsMap[t][i],n.Instance()._dataModelsForOpennedBlades[r]&&delete n.Instance(
)._dataModelsForOpennedBlades[r];delete n.Instance()._bladePartIdsMap[t]}},n.prototype.deleteMEDataModel=
function(t,r,u,f,e){var s,o,h;r&&t&&n.Instance()._dataModelsForOpennedBlades[r]&&(delete n.Instance(
)._dataModelsForOpennedBlades[r],s=!1,o=n.Instance()._bladePartIdsMap[t],o&&o.length>0&&(h=o.indexOf(
r,0),h!==undefined&&(o.splice(h,1),s=!0)),s||i.logError("deleteMEDataModel: Mis-match",u,f,e,{bladeId:
t,partId:r}),n.Instance()._bladePartIdsMap[t]&&n.Instance()._bladePartIdsMap[t].length===0&&delete n.
Instance()._bladePartIdsMap[t])},n.prototype.getMEDataModel=function(t,r,u,f){var e=n.Instance()._dataModelsForOpennedBlades[
t];return e||i.logError("no MEDataModelWrapper stored in the DataContext",r,u,f,{partId:t}),e},n.prototype.
getOrFetchMEDataModel=function(t,r,u,f,o,s){var a=this,h=$.Deferred(),c=n.getPartId(t,r,u),l;return c&&
(l=n.Instance()._dataModelsForOpennedBlades[c],l?h.resolve(l):(f||h.reject({reason:"need to specify entityView for fetching Json defintions."}),
e.MetricsExplorerChartDefinition.validateId(u),f.fetch({jsonUri:u}).then(function(){var n=f.item(),i=
a.clonedAndStoreDataModel(r,c,n,o,s,t);h.resolve(i)},function(n){h.reject(n)}))),i.instrumentPromise(
h.promise(),"Get/fetch ME data model")},n.prototype.saveMEDataModel=function(n,t,i,r,u){var f=this;this.
_chartDefinitionsEntityCache.applyChanges(function(e,o){var s=o.data,h,c;s&&s()&&s().jsonUri()===t&&
(h=f.getMEDataModel(n,i,r,u),MsPortalFx.Data.DataSet.mergeWithoutAtomization(h._meDataModel(),s()),c=
s()._modelChanged(),s()._modelChanged(++c))})},n._getChartDefinitionPath=function(n){e.MetricsExplorerChartDefinition.
validateId(n);var i=".json",r=n.startsWith("/")?"":"/",t=n.toLocaleLowerCase();return t=t.endsWith(i)?
n:n+i,MsPortalFx.Base.Resources.getContentUri("Content/ChartDefs"+r+t)},n.prototype._supplyMetricsExplorerDataModel=
function(t,i,f,o,s){var l=this,h=Q.defer(),c,a;return s?s.jsonUri?(c=e.MetricsExplorerChartDefinition.
_extractMetricsExplorerDefinitionId(s.jsonUri),c?(a=n._getChartDefinitionPath(c),r.apiGet(a,null).then(
function(n){if(n){var t=u.ConvertFrom(JSON.stringify(n),l._containerType,l._containerName,undefined);
t&&t.jsonUri(s.jsonUri);h.resolve(t)}else h.reject({reason:"Ajax_apiGet failed to get json",jsonUri:
s.jsonUri})},function(n){h.reject(n)})):n.Instance()._metricsExplorerDataModels[s.jsonUri]?h.resolve(
n.Instance()._metricsExplorerDataModels[s.jsonUri]()):h.reject({reason:"Can't find json defintiion from LOCAL MAP. reject promise",
jsonUri:s.jsonUri})):h.reject({reason:"jsonUri for JsonDefinitionId(params) in _supplyMetricsExplorerDataModel method should not be null"}):
h.reject({reason:"parameter params in _supplyMetricsExplorerDataModel method should not be null"}),h.
promise},n.prototype.clonedAndStoreDataModel=function(t,r,e,o,s,h){var c,l,a;return e?(c=u.ConvertFrom(
u.ConvertToJson(e),o,s,h),c.partId(r),c.actions=e.actions,l=new f.MEDataModelWrapper(c),n.Instance().
_dataModelsForOpennedBlades[r]=l,n.Instance()._bladePartIdsMap[t]||(n.Instance()._bladePartIdsMap[t]=
[]),a=n.Instance()._bladePartIdsMap[t].indexOf(r,0),a<0?n.Instance()._bladePartIdsMap[t].push(r):i.logError(
"PartId already exist in Blade Context.",o,s,h,{bladeId:t,partId:r}),l):null},n._instance=null,n}();
t.JsonDefinitionService=o});define("Shared/DataModels/MetricsExplorerDataModel",["require","exports",
"../Constants","../TimeContext","../TimeRangeCommandBase","../InsightsTelemetry","../CommonControls/DataModels/MetricsExplorerChartDataModel",
"../CommonControls/DataModels/MetricsExplorerChartNoDataModel","../CommonControls/DataModels/GroupingDefinition",
"../Enumerations","./MetricsExplorerActionDataModel","ClientResources"],function(n,t,i,r,u,f,e,o,s,h,
c,l){"use strict";function v(n,t,r,u){var h,s,w,v,b,k,d,g,y,tt,nt,p;e.globalColorIndex=-1;h=null;try{
if(s=JSON.parse(n),s.charts&&$.isArray(s.charts)){for(h=new a,h.charts=ko.observableArray([]),s.title?
(w="",w=l.hasOwnProperty(s.title)?l[s.title]:s.title,h.title(w)):h.title(undefined),s.version&&h.version(
s.version),s.minimumRangeInDaysForDailyGrain&&((s.minimumRangeInDaysForDailyGrain<7||s.minimumRangeInDaysForDailyGrain>
30)&&(s.minimumRangeInDaysForDailyGrain=i.minimumRangeInDaysForDailyGrain_Default),h.minimumRangeInDaysForDailyGrain(
s.minimumRangeInDaysForDailyGrain)),h.jsonUri(s.jsonUri),h.partId(s.partId),v=0;v<s.charts.length;v++)
b=new e.MetricsExplorerChartDataModel(s.charts[v]),b.id!==undefined?h.charts.push(ko.observable(b)):
f.logError("Undefined chartDataModel.id is not allowed and is skipped ",t,r,u);if(k=h.charts().map(function(
n){return n().id}),d=$.makeArray($(k).filter(function(n,t){return n===k.lastIndexOf(t)})),d.length!==
h.charts().length)return f.logError("Each chart in the Json file should have distinct id to identify a chart in the collection. uniqueIds.length:{0} vs charts.length:{1}".
format(d.length,h.charts().length),t,r,u),null;if(s.filters&&$.isArray(s.filters)){for(g=[],y=0;y<s.
filters.length;y++)tt=s.filters[y],g.push(ko.observable(tt));h.filters(g)}if(s.actions&&$.isArray(s.
actions)){for(nt=new c.MetricsExplorerActionDataModel,p=0;p<s.actions.length;p++)nt.addChartNoDataModel(
new o.MetricsExplorerChartNoDataModel(s.actions[p]));h.actions(nt)}s.timeContext&&(s.timeContext.endTime&&
(s.timeContext.endTime=new Date(s.timeContext.endTime)),h.timeContext(s.timeContext))}else f.logError(
"No charts specified in JSON:{0}".format(n),t,r,u)}catch(it){return f.logException(it,t,r,u),null}return h}
function y(n){return JSON.stringify(n,function(n,t){switch(n){case"":return t;case"chartType":return e.
ChartType[t()];case"aggregation":return h.Aggregation[t()];case"kind":return s.GroupingKind[t];default:
return ko.isObservable(t)?t():t}},2)}function p(n,t){var h,f,i,o,s,c,u,l,a;if(!n&&!t)return!0;if(n&&
t){if(n.version()!==t.version()||n.title()!==t.title()||n.jsonUri()!==t.jsonUri()||(h=n.filters(),f=
t.filters(),h.length!==f.length))return!1;for(i=0;i<f.length;i++)if(o=h[i](),s=f[i](),o.dimension!==
s.dimension||o.facetValues.length!==s.facetValues.length||!o.facetValues.every(function(n,t){return n===
s.facetValues[t]}))return!1;if(!MsPortalFx.Base.Utilities.deepEquals(n.actions(),t.actions())||(c=n.
charts().length,c!==t.charts().length))return!1;for(u=0;u<c;u++)if(l=n.charts()[u](),a=t.charts()[u](
),!e.Equals(l,a))return!1;return r.equals(n.timeContext(),t.timeContext())?!0:!1}return!1}t.ConvertFrom=
v;t.ConvertToJson=y;t.Equals=p;var a=function(){function n(){this.version=ko.observable(n._currentVersion);
this.charts=ko.observableArray([]);this.title=ko.observable("");this.filters=ko.observableArray([]);
this.timeContext=ko.observable(u.TimeRangeCommandBase.GetDefaultTimeRange());this.actions=ko.observable(
);this.jsonUri=ko.observable("");this.partId=ko.observable("");this.minimumRangeInDaysForDailyGrain=
ko.observable(30);this._modelChanged=ko.observable(0)}return n.prototype.GetChartDataModelWithId=function(
n,t,i,r){var u=this.GetChartIndex(n,t,i,r);return u>=0?this.charts()[u]():(f.logError("Cannot find chartDataModel with the specified id:"+
n.toString(),t,i,r),null)},n.prototype.GetChartIndex=function(n,t,i,r){if(!n||n.length===0)return f.
logError("No id specified",t,i,r),-1;if(this.charts()&&this.charts().length>0)for(var u=0;u<this.charts(
).length;u++)if(this.charts()[u]().id===n)return u;return-1},n._currentVersion="1.1",n}();t.MetricsExplorerDataModel=
a});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/TimeRangeCommandBase",["require",
"exports","./InsightsTelemetry","./Constants","./InsightsTelemetry","./TimeContext","./TimeRangeSelectorHelper"],
function(n,t,i,r,u,f){"use strict";var e=function(n){function t(t){n.call(this,t);this.icon(MsPortalFx.
Base.Images.Clock());this._container=t;this._containerName=i.AITelemetryConstants.TimeRangeCommand;this.
_containerType=2;this.componentId=ko.observable();this.currentTimeSelection=ko.observable();this.customTimeRangeValidationFactory=
ko.observable();this.timeRangeSelectorRangeType=ko.observable(0);this.parentBlade=ko.observable();this.
_telemetryHelper=new u.TelemetryHelper(this,t)}return __extends(t,n),t.prototype.onInputsSet=function(
n){var t=this,i=n&&n.ComponentId?n.ComponentId:undefined;return this._telemetryHelper.instrument(i,0,
function(){return n&&(t.componentId(n.ComponentId),t.parentBlade(n.ParentBlade),n.customTimeRangeValidationFactory&&
t.customTimeRangeValidationFactory(n.customTimeRangeValidationFactory),n.timeRangeSelectorRangeType&&
t.timeRangeSelectorRangeType(n.timeRangeSelectorRangeType),!n.initialTime||n.currentTimeSelection||f.
equals(n.initialTime,t.currentTimeSelection())?n.currentTimeSelection&&!f.equals(n.currentTimeSelection,
t.currentTimeSelection())&&t.currentTimeSelection(n.currentTimeSelection):t.currentTimeSelection(n.initialTime)),
null})},t.GetDefaultTimeRange=function(){return new f.TimeContext(r.Durations.OneDay)},t.prototype.hasUserData=
function(){return!1},t}(MsPortalFx.ViewModels.OpenBladeCommand);t.TimeRangeCommandBase=e});define("Shared/TimeRangeSelectorHelper",
["require","exports","./TimeContext","./DateUtils","./ChartUtils","ClientResources"],function(n,t,i,
r,u,f){"use strict";(function(n){n[n.Default=0]="Default";n[n.Historical=1]="Historical"})(t.TimeRangeSelectorRangeType||
(t.TimeRangeSelectorRangeType={}));var o=t.TimeRangeSelectorRangeType,e=function(){function n(n,t){this.
_container=n;this.timeRangeItems=this._getTimeRanges(t)}return n.prototype.getMatchingTimeRangeItem=
function(n){var t=undefined,u,f,r;if(n)if(n.endTime)t=this.timeRangeItems.last(),u=i.toTimeRange(n),
t.startDateTimeViewModel.value(u.startTime),t.endDateTimeViewModel.value(u.endTime);else for(f=this.
timeRangeItems,r=0;r<f.length;r++)if(t=f[r],this._timeContextCompareListViewItem(n,t))break;return t}
,n.prototype.getTimeContextSubTitleString=function(n,t,e,o,s){var l,a,h,c;return(o===void 0&&(o=""),
s===void 0&&(s=u.Instance()),l=this.getMatchingTimeRangeItem(n),a=s.getDisplayedGrainPeriod(e,n,!0),
l)?(l.isCustom?(c=i.toTimeRange(n),h=c.startTime.toDateString()!==c.endTime.toDateString()?r.formatDateTime(
c.startTime):r.formatTime(c.startTime),h=f.bladeSubtitleCustomTimeRange.format(h,r.formatDateTime(c.
endTime))):h=l.name,MsPortalFx.Base.Utilities.isNullOrWhiteSpace(o)?"{0} ({1} {2}) - {3}".format(h,a,
f.grainSubTitlePointString,t):"{0} ({1} {2}) - {3} - {4}".format(h,a,f.grainSubTitlePointString,o,t)):
t},n.prototype._timeContextCompareListViewItem=function(n,t){if(!n||!t)return!1;if(n.endTime){if(t.isCustom)
{var u=i.toTimeRange(n);return t.startDateTimeViewModel.value()===u.startTime&&t.endDateTimeViewModel.
value()===u.endTime}}else if(!t.isCustom)return t.hours*r.unitsInMilliseconds.Hours===n.durationMs;return!1}
,n.prototype._getTimeRanges=function(n){var i={formatString:ko.observable("g")},r=new MsPortalFx.ViewModels.
Obsolete.Forms.DateTimeComboBox.ViewModel(this._container,i),u=new MsPortalFx.ViewModels.Obsolete.Forms.
DateTimeComboBox.ViewModel(this._container,i),t=[];return t.push(this._createTimeRangeItem(f.timeSelectorLastHourRange,
!1,1)),t.push(this._createTimeRangeItem(f.timeSelectorLast0HoursRange.format("4"),!1,4)),t.push(this.
_createTimeRangeItem(f.timeSelectorLast0HoursRange.format("12"),!1,12)),t.push(this._createTimeRangeItem(
f.timeSelectorLast0HoursRange.format("24"),!1,24)),t.push(this._createTimeRangeItem(f.timeSelectorLast0HoursRange.
format("48"),!1,48)),t.push(this._createTimeRangeItem(f.timeSelectorLast0DaysRange.format("3"),!1,72)),
t.push(this._createTimeRangeItem(f.timeSelectorLast0DaysRange.format("7"),!1,168)),n===1&&(t.push(this.
_createTimeRangeItem(f.timeSelectorLast0WeeksRange.format("4"),!1,672)),t.push(this._createTimeRangeItem(
f.timeSelectorLast0DaysRange.format("90"),!1,2160))),t.push(this._createTimeRangeItem(f.customTimeRangeTitle,
!0,0,r,u)),t},n.prototype._createTimeRangeItem=function(n,t,i,r,u){return{name:n,hours:i,isCustom:t,
endDateTimeViewModel:t?u:undefined,startDateTimeViewModel:t?r:undefined,cssClass:ko.observable("ext-search-time-range-item"),
startTimeString:f.customTimeRangeStart,endTimeString:f.customTimeRangeEnd}},n}();t.TimeRangeSelectorHelper=
e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/ChartUtils",["require","exports",
"./TimeContext","./DateUtils","./Constants","ClientResources"],function(n,t,i,r,u,f){function l(n){return n===
void 0&&(n=u.minimumRangeInDaysForDailyGrain_Default),n===u.minimumRangeInDaysForDailyGrain_Usage?c:
n===u.minimumRangeInDaysForDailyGrain_Default?h:new o}var e=MsPortalFx.ViewModels.Controls.Visualization.
Chart,o,s,h,c;o=function(){function n(n){n===void 0&&(n=u.minimumRangeInDaysForDailyGrain_Default);this.
_maxBuckets=30;this._minAgeOfResourceMs=5*r.unitsInMilliseconds.Minutes;this._minDaysForDailyGrain=n}
return n.prototype.setXAxisRange=function(n,t,i){var r=this.getXAxisRange(t,i);n.max(r.endTime);n.min(
r.startTime)},n.prototype.getXAxisRange=function(n,t){var u=i.toTimeRange(t),e,f;return t.isInitialTime&&
n.Metadata&&n.Metadata.creationDate&&(e=new Date(n.Metadata.creationDate),f=Math.max(this._minAgeOfResourceMs,
r.compare(u.endTime,e)),f<t.durationMs&&(u.startTime=r.addMilliseconds(u.endTime,-f))),u},n.prototype.
getChartDateSpan=function(n){var t=i.toTimeRange(n);return this.getChartDateSpanFromTimeRange(t)},n.
prototype.getChartDateSpanFromTimeRange=function(n){var t=n.endTime.getTime()-n.startTime.getTime();
return this.getChartGrainSpanFromDuration(t,n.startTime)},n.prototype.getChartGrainSpanFromDuration=
function(n,t){var o=r.TimeUnits.convert(n,r.TimeUnits.milliseconds,r.TimeUnits.days),i=r.TimeUnits.convert(
n,r.TimeUnits.milliseconds,r.TimeUnits.hours),f=r.TimeUnits.convert(n,r.TimeUnits.milliseconds,r.TimeUnits.
minutes),s=this._computeSeconds(f),u,c,h;return o>=this._minDaysForDailyGrain?(c=this._computeDays(o),
u=new e.DateSpan(0,0,c)):o>1?(i=this._computeHours(o),u=i>=24?new e.DateSpan(0,0,Math.floor(i/24)):new
e.DateSpan(0,0,0,i)):i>1?(f=this._computeMinutes(i),u=f>=60?new e.DateSpan(0,0,0,Math.floor(f/60)):new
e.DateSpan(0,0,0,0,f)):u=s>=60?new e.DateSpan(0,0,0,0,Math.floor(s/60)):new e.DateSpan(0,0,0,0,0,s),
h=this._getMinimalGrainAccordingToStartTime(t),this._compare(u,h)>=0?u:h},n.prototype.getGrain=function(
n,t){var r=this.getXAxisRange(n,t),i=this.getChartDateSpanFromTimeRange(r);return i.days>0?i.days.toString(
)+"d":i.hours>0?i.hours.toString()+"h":i.minutes>0?i.minutes.toString()+"m":i.seconds.toString()+"s"}
,n.prototype.getDisplayedGrainPeriod=function(n,t,i){i===void 0&&(i=!1);var u=this.getXAxisRange(n,t),
r=this.getChartDateSpanFromTimeRange(u);return r.days>0?r.days===1||i?f.grainOneDay.format(r.days.toString(
)):f.grainDays.format(r.days.toString()):r.hours>0?r.hours===1||i?f.grainOneHour.format(r.hours.toString(
)):f.grainHours.format(r.hours.toString()):r.minutes>0?r.minutes===1||i?f.grainOneMinute.format(r.minutes.
toString()):f.grainMinutes.format(r.minutes.toString()):r.seconds===1||i?f.grainOneSecond.format(r.seconds.
toString()):f.grainSeconds.format(r.seconds.toString())},n.prototype.addXAxisBuffer=function(n){var u=
this.getChartDateSpanFromTimeRange(n),t=0,i={startTime:n.startTime,endTime:n.endTime};return u.days>
0?(t=1,i.startTime=r.addDays(n.startTime,-t),i.endTime=r.addDays(n.endTime,t/2)):u.hours>0?(t=u.hours,
i.startTime=r.addHours(n.startTime,-t),i.endTime=r.addHours(n.endTime,t/2)):u.minutes>0&&(t=u.minutes,
i.startTime=r.addMinutes(n.startTime,-t),i.endTime=r.addMinutes(n.endTime,t/2)),i},n.prototype.snapTimeRangeToGrain=
function(n,t,i){var u,o,s,h,f,c,l,a,e;return i===void 0&&(i=!1),t||(t=this.getChartDateSpanFromTimeRange(
n)),u={startTime:new Date(n.startTime.getTime()),endTime:new Date(n.endTime.getTime())},u.startTime.
setUTCMilliseconds(0),u.endTime.setUTCMilliseconds(0),u.startTime.setUTCSeconds(0),u.endTime.setUTCSeconds(
0),t.days>0?(u.startTime.setUTCMinutes(0),u.endTime.setUTCMinutes(0),u.startTime.setUTCHours(0),u.endTime.
setUTCHours(0),n.endTime.getUTCHours()>0&&(u.endTime=r.addDays(u.endTime,1)),i&&(u.endTime=r.addDays(
u.endTime,t.days*-1))):t.hours>0?(u.startTime.setUTCMinutes(0),u.endTime.setUTCMinutes(0),o=u.startTime.
getUTCHours(),s=Math.floor(o/t.hours)*t.hours,u.startTime.setUTCHours(s),h=u.endTime.getUTCHours(),f=
Math.ceil(h/t.hours)*t.hours,t.hours===1&&n.endTime.getUTCMinutes()>0&&f++,i&&(f=f-t.hours),u.endTime.
setUTCHours(f)):t.minutes>0&&(c=u.startTime.getUTCMinutes(),l=Math.floor(c/t.minutes)*t.minutes,u.startTime.
setUTCMinutes(l),a=u.endTime.getUTCMinutes(),e=Math.ceil(a/t.minutes)*t.minutes,t.minutes===1&&n.endTime.
getUTCSeconds()>0&&e++,i&&(e=e-t.minutes),u.endTime.setUTCMinutes(e)),u},n.prototype.getXAxisValues=
function(n,t){var o=this.getXAxisRange(n,t),u=this.getChartDateSpanFromTimeRange(o),f=this.snapTimeRangeToGrain(
o,u,!0),e=[],i=f.startTime;if(u.days>0)while(i.getTime()<=f.endTime.getTime())e.push(i),i=r.addDays(
i,u.days);else if(u.hours>0)while(i.getTime()<=f.endTime.getTime())e.push(i),i=r.addHours(i,u.hours)
else if(u.minutes>0)while(i.getTime()<=f.endTime.getTime())e.push(i),i=r.addMinutes(i,u.minutes);else
if(u.seconds>0)while(i.getTime()<=f.endTime.getTime())e.push(i),i=r.addSeconds(i,u.seconds);else throw new
Error("Unknown grain specified");return e},n.prototype._computeHelper=function(n,t,i){for(var r=0;r<
t.length;r++)if(n/t[r]*i<=this._maxBuckets)return t[r]},n.prototype._computeDays=function(n){return this.
_computeHelper(n,[1,2,7,14],1)},n.prototype._computeHours=function(n){return this._computeHelper(n,[
1,2,3,4,6,12,24],24)},n.prototype._computeMinutes=function(n){return this._computeHelper(n,[1,5,10,15,
30,60],60)},n.prototype._computeSeconds=function(n){return this._computeHelper(n,[10,30,60,120],60)}
,n.prototype._getMinimalGrainAccordingToStartTime=function(n){var t=r.addDays(new Date,-u.HistoricalQuery.
MaxRawDataTimeRangeInDays);return r.compare(n,t)>0?u.HistoricalQuery.MinGrainSpan:u.HistoricalQuery.
MinGrainSpanForHistoricalData},n.prototype._compare=function(n,t){return this._dateSpanToSeconds(n)-
this._dateSpanToSeconds(t)},n.prototype._dateSpanToSeconds=function(n){return n.seconds+r.TimeUnits.
convert(n.minutes,r.TimeUnits.minutes,r.TimeUnits.seconds)+r.TimeUnits.convert(n.hours,r.TimeUnits.hours,
r.TimeUnits.seconds)+r.TimeUnits.convert(n.days,r.TimeUnits.days,r.TimeUnits.seconds)+r.TimeUnits.convert(
n.months*31,r.TimeUnits.days,r.TimeUnits.seconds)+r.TimeUnits.convert(n.years*365,r.TimeUnits.days,r.
TimeUnits.seconds)},n}();t.ChartGrainUtils=o;s=function(n){function t(t){n.call(this);this.grainSpan=
t}return __extends(t,n),t.prototype.getChartGrainSpanFromDuration=function(){return this.grainSpan},
t}(o);t.ChartGrainUtilsWithSetGrain=s;h=new o;c=new o(u.minimumRangeInDaysForDailyGrain_Usage);t.Instance=
l});define("Shared/CommonControls/DataModels/MetricsExplorerChartDataModel",["require","exports","../../DataModels/AggregationData",
"../../InsightsTelemetry","./GroupingDefinition","../../Constants","ClientResources","../../InsightsTelemetry",
"../../Enumerations","../../../_generated/ExtensionDefinition"],function(n,t,i,r,u,f,e,o,s,h){"use strict";
function v(n){switch(n){case 7:return e.captionAverage;case 4:return e.captionAverage;case 3:return e.
captionMax;case 2:return e.captionMin;case 1:return e.captionTotal;case 6:return e.captionCardinality}
return""}function y(n,t,i){t===void 0&&(t=undefined);i===void 0&&(i=undefined);var r={MEJsonDefinitionId:
n};return t&&(r.chartId=t),i&&(r.chartDescription=i.getDescription()),r}function p(n,t){var r,i;if(!n&&
!t)return!0;if(n&&t){if(n.id!==t.id||n.chartType()!==t.chartType()||n.chartHeight()!==t.chartHeight(
)||n.priorPeriod()!==t.priorPeriod()||n.horizontalBars()!==t.horizontalBars())return!1;if(n.grouping(
)||t.grouping())if(n.grouping()&&t.grouping()){if(n.grouping().dimension!==t.grouping().dimension||n.
grouping().kind!==t.grouping().kind)return!1}else return!1;if(n.clickAction.defaultBlade!==t.clickAction.
defaultBlade||n.clickAction.uri!==t.clickAction.uri||(r=n.metrics().length,r!==t.metrics().length))return!1;
for(i=0;i<r;i++)if(n.metrics()[i].id!==t.metrics()[i].id||n.metrics()[i].metricAggregation!==t.metrics(
)[i].metricAggregation)return!1;return!0}return!1}var l,c,w,a;t.globalColorIndex=-1;t.GetAggregationString=
v;t.getCustomTelemetryProperties=y;t.Equals=p;l=function(){function n(n){var t=this;this._toggleModelChange=
ko.observable(!1);this.localColorIndex=-1;this.palette=n.palette;this._sanitizeId(n.id);this._sanitizeGrouping(
n.grouping);this._sanitizeClickAction(n.clickAction);this._sanitizeChartType(n.chartType);this._sanitizeChartHeight(
n.chartHeight);this._sanitizeMetrics(n.metrics,n.aggregation);this._sanitizePriorPeriod(n.priorPeriod);
this._sanitizeHorizontalBars(n.horizontalBars);this._sanitizeImage(n.image);this._validateModel();this.
_modelChanged=ko.pureComputed(function(){var n="";return t.id&&(n+=t.id+":"),t.metrics()&&t.metrics(
).forEach(function(t){return n+=t.id.toString()}),t.chartType()&&(n+=t.chartType().toString()),t.priorPeriod(
)&&(n+=t.priorPeriod().toString()),t._toggleModelChange()&&(n+=t._toggleModelChange().toString()),t.
grouping()&&(n+=JSON.stringify(t.grouping())),t.chartHeight()&&(n+=t.chartHeight().toString()),t.horizontalBars(
)&&(n+=t.horizontalBars().toString()),n}).extend({throttle:100})}return n.extractChartIdFromModelChangeNotification=
function(n){var t;return n&&n.length>0&&(t=n.indexOf(":"),t>0)?n.substring(0,t):null},n.prototype.refreshChartDataModel=
function(n){this.grouping(n.grouping());this.chartType(n.chartType());this.chartHeight(n.chartHeight(
));this.metrics(n.metrics());this.image=n.image;this.priorPeriod(n.priorPeriod());this.horizontalBars(
n.horizontalBars());this._toggleModelChange(!this._toggleModelChange())},n.prototype.getJsonString=function(
){var n=this;return JSON.stringify(this,function(t,i){if(t==="")return i;switch(t){case"chartType":return c[
n.chartType()];case"color":return undefined;case"metrics":return n.metrics();case"kind":return u.GroupingKind[
i];case"grouping":return n.grouping();case"priorPeriod":return n.priorPeriod();case"chartHeight":return n.
chartHeight();case"horizontalBars":return n.horizontalBars();default:return i}},2)},n.prototype.getDescription=
function(){var n="";return this.chartType&&(n+="T:"+c[this.chartType()]),this.chartHeight()>0&&(n.length>
0&&(n+="_"),n+="H:"+this.chartHeight().toString()),this.metrics()&&this.metrics().forEach(function(t)
{n.length>0&&(n+="_");n+="M:"+t.id.toString();t.metricAggregation&&(n+="_A:"+t.metricAggregation)}),
this.grouping()&&(n.length>0&&(n+="_"),n+="GK:"+u.GroupingKind[this.grouping().kind],this.grouping().
dimension&&(n+="_GD:"+this.grouping().dimension)),this.priorPeriod&&(n.length>0&&(n+="_"),n+="P:"+this.
priorPeriod().toString()),this.horizontalBars&&(n.length>0&&(n+="_"),n+="HB:"+this.horizontalBars().
toString()),this.clickAction&&(n.length>0&&(n+="_"),n+="C:"+this.clickAction.defaultBlade.toString(),
this.clickAction.uri&&(n+="_U:"+this.clickAction.uri.toString())),this.image&&(n.length>0&&(n+="_"),
n+="I:"+this.image),n},n.prototype._updateGroupingDefinition=function(t){this.grouping(t);this.clickAction=
n._getDefaultClickAction()},n.prototype._isGroupedByDimension=function(){return this.grouping()!==undefined&&
this.grouping().kind===1},n.prototype._canEnablePriorPeriod=function(){return this.metrics().length===
1&&this.chartType()!==2},n.prototype._canEnableHorizontalBars=function(){return this.metrics().length>
0&&this.metrics().length<=2&&this.chartType()===2},n.prototype._canShowHorizontalBars=function(){return this.
chartType()===2},n.prototype._getNextColor=function(){var n=f.Colors.palettes[this.palette];return n?
n[++this.localColorIndex%n.length]:(n=f.Colors.palettes.defaultPalette,n[++t.globalColorIndex%n.length])}
,n.prototype._hasSumAggregation=function(){return this.metrics().some(function(n){return s.Aggregation[
n.metricAggregation]===1})},n.prototype._isMultiMetricGrid=function(){var n,t;return this.chartType(
)===2&&(n=this.metrics(),n&&n.length>1)?(t=n[0].id,n.some(function(n){return n.id!==t})):!1},n.prototype.
_getGridType=function(){return this.chartType()===2?this.grouping()?this._isMultiMetricGrid()?1:0:this.
_isMultiMetricGrid()?1:this.metrics()?2:0:3},n._getDefaultClickAction=function(){return{defaultBlade:
h.BladeNames.searchBlade,uri:undefined}},n.prototype._sanitizeId=function(n){this.id=typeof n=="string"?
n:undefined},n.prototype._sanitizeGrouping=function(n){if(n&&typeof n.kind=="string"){var t=u.GroupingKind[
n.kind];t!==1||n.dimension?this.grouping=ko.observable({kind:t,dimension:n.dimension}):(o.logError("Grouping by dimension requires a dimension be specified. Grouping disabled.",
1,o.AITelemetryConstants.MetricsExplorerCustomPart,undefined),this.grouping=ko.observable(undefined))}
else this.grouping=ko.observable(undefined)},n.prototype._sanitizeClickAction=function(t){var i=n._getDefaultClickAction(
);t&&typeof t.defaultBlade=="string"&&(i.defaultBlade=t.defaultBlade,t.uri&&typeof t.uri=="string"?i.
uri=t.uri:i.defaultBlade=h.BladeNames.searchBlade);this.clickAction=i},n.prototype._sanitizeChartType=
function(n){this.chartType=n&&typeof n=="string"?ko.observable(c[n]):ko.observable(undefined)},n.prototype.
_sanitizeChartHeight=function(n){if(this.chartHeight=ko.observable(1),n&&typeof n=="number"){var t=n;
t>0&&(this.chartHeight=ko.observable(t))}},n.prototype._sanitizeMetrics=function(n,t){var u,e,i,r;if(
n&&$.isArray(n)){for(u=[],e=t&&typeof t=="string"&&s.Aggregation[t]>-1?t:undefined,i=0;i<n.length;i++)
if(n[i].id&&typeof n[i].id=="string"){if(this.chartType&&this.chartType()===2&&i>=f.MaxMetricsAllowedInEditGrid)
{o.logError("Grid chart allows up to {0} metrics to be specified. metric {1} is skipped.".format(f.MaxMetricsAllowedInEditGrid,
n[i].id),1,o.AITelemetryConstants.MetricsExplorerCustomPart,undefined);break}r={id:n[i].id,color:n[i].
color?n[i].color:this._getNextColor()};n[i].metricAggregation&&typeof n[i].metricAggregation=="string"?
r.metricAggregation=n[i].metricAggregation:e&&(r.metricAggregation=e);u.push(r)}this.metrics=ko.observableArray(
u)}else this.metrics=ko.observableArray([])},n.prototype._sanitizePriorPeriod=function(n){this.priorPeriod=
typeof n=="boolean"?ko.observable(n):ko.observable(!1)},n.prototype._sanitizeHorizontalBars=function(
n){this.horizontalBars=typeof n=="boolean"?ko.observable(n):ko.observable(!0)},n.prototype._sanitizeImage=
function(n){this.image=typeof n=="string"?n:undefined},n.prototype._validateModel=function(){!this.grouping(
)||this.grouping().kind!==2||this.chartType()===3||this.chartType()===1||(o.logError("Grouping by metric is only supported on Area and Bar charts, '{0}' selected. Grouping disabled.".
format(c[this.chartType()]),1,o.AITelemetryConstants.MetricsExplorerCustomPart,undefined),this.grouping=
ko.observable(undefined))},n.prototype.updateMetricsAggregationFromMetadata=function(n){var f=this,t=
[],u=!1;this.metrics().forEach(function(h){if(!h.hasOwnProperty("metricAggregation")&&h.id&&n){u=!0;
var c=n.getMetadata(h.id);c&&c.getAggregationTypeData()?h.metricAggregation=s.Aggregation[i.getAggregationFunction(
c.getAggregationTypeData())].toString():(o.logError("Initializing metrics' aggregation:"+e.metricsExplorerMetadataNotFound.
format(h.id)+" Uses aggregation None, dataModel:{0}".format(f.id),1,r.AITelemetryConstants.MetricsExplorerCustomPart,
undefined),h.metricAggregation=0..toString())}t.push(h)});u&&this.metrics(t)},n}();t.MetricsExplorerChartDataModel=
l,function(n){n[n.Line=0]="Line";n[n.Bar=1]="Bar";n[n.Grid=2]="Grid";n[n.Area=3]="Area";n[n.Image=4]=
"Image"}(t.ChartType||(t.ChartType={}));c=t.ChartType,function(n){n[n.SingleMetricGrid=0]="SingleMetricGrid";
n[n.MultiMetricGrid=1]="MultiMetricGrid";n[n.RawGrid=2]="RawGrid";n[n.NotSuportedOrNonGrid=3]="NotSuportedOrNonGrid"}
(t.GridType||(t.GridType={}));w=t.GridType;a=function(){function n(){}return n.getAggregationDisplayName=
function(n){switch(n){case 1:return e.aggregationSum;case 2:return e.aggregationMin;case 3:return e.
aggregationMax;case 4:return e.aggregationAvg;case 6:return e.aggregationCardinality;case 7:return e.
aggregationExtendedStats;case 5:return e.aggregationValueCount;case 0:return""}return""},n.getMetricDefaultAggregationDescription=
function(n){var t=i.getAggregationFunction(n.getAggregationTypeData());switch(t){case 1:return e.metricDefaultAggregationSum
case 4:return e.metricDefaultAggregationAverage;case 6:return e.metricDefaultAggregationCardinality}
return""},n}();t.ChartDataModelHelper=a});define("Shared/DataModels/AggregationData",["require","exports",
"../Enumerations"],function(n,t){"use strict";function r(n){return n?n.defaultAggregationFunction():
0}var i=function(){function n(n,t){this.Id="";this.AggregationFunctions=[];this.Id=n;this.AggregationFunctions=
t}return n.prototype.defaultAggregationFunction=function(){return this.AggregationFunctions.length>0?
this.AggregationFunctions[0]:0},n}();t.AggregationData=i;t.AggregationA=new i("A",[6]);t.AggregationB=
new i("B",[1,4,2,3,5]);t.AggregationC=new i("C",[4,1,2,3,5]);t.getAggregationFunction=r});define("Shared/CommonControls/DataModels/GroupingDefinition",
["require","exports"],function(n,t){(function(n){n[n.None=0]="None";n[n.ByDimension=1]="ByDimension";
n[n.ByMetric=2]="ByMetric"})(t.GroupingKind||(t.GroupingKind={}));var i=t.GroupingKind});define("Shared/CommonControls/DataModels/MetricsExplorerChartNoDataModel",
["require","exports","ClientResources"],function(n,t,i){"use strict";var r=function(){function n(n){
function t(n,t){return typeof n=="string"?n:t}function u(n,t){return typeof n=="string"?i.hasOwnProperty(
n)?i[n]:n:t}function r(n){return typeof n=="object"&&n!==null?n:{}}n||(n={});this.id=t(n.id,null);this.
noDataMessage=u(n.noDataMessage,null);this.noDataHelperKind=t(n.noDataHelperKind,null);this.notProvisionedMessage=
u(n.notProvisionedMessage,null);this.defaultBlade=t(n.defaultBlade,null);this.noDataBlade=t(n.noDataBlade,
null);this.notProvisionedBlade=t(n.notProvisionedBlade,null);this.defaultBladeInputs=r(n.defaultBladeInputs);
this.noDataBladeInputs=r(n.noDataBladeInputs);this.notProvisionedBladeInputs=r(n.notProvisionedBladeInputs)}
return n}();t.MetricsExplorerChartNoDataModel=r});define("Shared/DataModels/MetricsExplorerActionDataModel",
["require","exports"],function(n,t){"use strict";var i=function(){function n(){this._chartDataMap={}}
return n.prototype.getCharts=function(){return $.extend({},this._chartDataMap)},n.prototype.addChartNoDataModel=
function(n){typeof n.id=="string"&&(this._chartDataMap[n.id]=n)},n}();t.MetricsExplorerActionDataModel=
i});define("Shared/DataModels/MEDataModelWrapper",["require","exports"],function(n,t){"use strict";var
i=function(){function n(n){this._meDataModel=ko.observable(n);this._addChartSubscribable=ko.observable(
0);this._removeChartSubscribable=ko.observable("")}return n}();t.MEDataModelWrapper=i});define("Shared/DataModels/AggregateListSet",
["require","exports"],function(n,t){function r(n,t,r,u,f){var h,c,e,o,s,l,a;if(n&&n.aggregations&&n.
aggregations[u]&&n.aggregations[u].buckets)for(c=n.aggregations[u].buckets,e=t,r&&(e+="."+r),h=new i(
[]),o=0;o<c.length;o++)s=c[o],s[e]&&(l=s.key,a=f?f(l):l,h.items.push({bucket:a,value:s[e].value}));return h}
function u(n,t,i){var r=t+"."+i,u;return n&&n.aggregations&&n.aggregations.result&&n.aggregations.result[
r]?(u=n.aggregations.result[r],u.value):undefined}var i=function(){function n(n){this._items=n}return Object.
defineProperty(n.prototype,"items",{get:function(){return this._items},enumerable:!0,configurable:!0}),
Object.defineProperty(n.prototype,"valueSum",{get:function(){return this.items.map(function(n){return n.
value}).reduce(function(n,t){return n+t},0)},enumerable:!0,configurable:!0}),n}();t.List=i;t.ExtractList=
r;t.ExtractValue=u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var
i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/WebsiteComponentIdHelper",
["require","exports","./QueryBase","./EntityCacheHelper","./Constants","./UrlHelper","./InsightsTelemetry",
"./ComponentIdService","./Logging","./ComponentIdCache"],function(n,t,i,r,u,f,e,o,s,h){"use strict";
function y(n){return"websiteName={websiteName};resourceGroup={resourceGroup};subscriptionId={subscriptionId}".
format(n)}function b(){return c._componentIdEntityCache||(c._componentIdEntityCache=r.createEntityCacheWithGetData(
p,y)),c._componentIdEntityCache}function k(n){var t=l(n),i;return c._componentIdToWebsiteCache.hasOwnProperty(
t)||(i={webSiteId:null,sku:ko.observable()},c._componentIdToWebsiteCache[t]=ko.observable(i)),c._componentIdToWebsiteCache[
t]}function d(n){var i,r,t;if(n&&n.tags!==null){i=new RegExp("hidden-link:(/subscriptions/[^/]+/resourcegroups/[^/]+/providers/microsoft.web/sites/[^/]+)",
"i");for(r in n.tags)if(t=i.exec(r),t&&t.length>1)return t[1]}return null}function l(n){return"{0}/{1}/{2}".
format(n.SubscriptionId,n.ResourceGroup,n.Name)}function p(n){var t=new c(n);return t.getComponentId(
)}function a(n,t){var i=MsPortalFx.ViewModels.Controls.Validators.escapeRegExpOperators(t);return"link:/subscriptions/{0}/resourceGroups/[^/]*/providers/microsoft\\.web/sites/{1}$".
format(n,i)}function v(n,t){var i=a(n,t);return"hidden-"+i}var w=function(n){function t(t,i,r){var f=
{Name:t.Name,ResourceGroup:t.ResourceGroup,SubscriptionId:t.SubscriptionId};n.call(this,f,r,u.Queries.
WebsiteComponentId);this.websiteName=t.Name;this.websiteId=t;this.sku=i}return __extends(t,n),t}(i.QueryBase),
c;t.WebsiteComponentIdQuery=w;t.getKey=y;t.getEntityCache=b;t.getWebSiteInfoForComponentId=k;t.getWebsiteResourceId=
d;t._getComponentIdKey=l;t._getComponentId=p;c=function(){function n(n){if(this._deferred=$.Deferred(
),this._deferredInternal=$.Deferred(),!(n.websiteName&&n.resourceGroup&&n.subscriptionId))throw new Error(
"Invalid websiteId.");this._params=n;this.websiteComponentId={Name:n.websiteName,ResourceGroup:n.resourceGroup,
SubscriptionId:n.subscriptionId}}return n._cacheWebSite=function(t,i,r){var f=l(t),u=n._componentIdToWebsiteCache[
f],e;u?(u().webSiteId=i,u().sku(r)):(e={webSiteId:i,sku:ko.observable(r)},n._componentIdToWebsiteCache[
f]=ko.observable(e))},n.componentIdToResourceId=function(n){var t=u.GraphPathTemplates.Websites.format(
{websiteName:n.Name});return f.buildGraphPath(n.SubscriptionId,n.ResourceGroup,t,null,!0)},n._deleteOldLink=
function(n){var u=new RegExp("^link:/subscriptions/[^/]*/resourceGroups/[^/]*/providers/microsoft\\.web/sites/[^/]*",
"i"),t,i,r;if(n!==null){if(t=[],n.tags!==null)for(i in n.tags)r=u.exec(i),r&&r.length>0&&t.push(i);t.
forEach(function(t){delete n.tags[t]})}},n.prototype.getComponentId=function(){var t=this;return this.
_findRelatedComponent().then(function(i){var r=i.id,f,s,h;i.payload?(f=o.getComponentId(i.payload),f&&
(r.Name=f.Name,r.SubscriptionId=f.SubscriptionId,r.ResourceGroup=f.ResourceGroup),n._deleteOldLink(i.
payload),s=t.hasWebsiteLink(t.websiteComponentId,i.payload),s?t._componentLookupCompleted(r):(h=t._params?
t._params._containerName:e.AITelemetryConstants.WebsiteComponentIdHelper,o.createOrUpdate(r,i.payload,
n.componentIdToResourceId(t.websiteComponentId),!0,h).then(function(){t._componentLookupCompleted(r)}
,function(n){t._onError(n[0],n[1])}))):(r.Metadata={applicationType:u.ApplicationType.Web,flowType:e.
AITelemetryConstants.DefaultFlowType,requestSource:e.AITelemetryConstants.DefaultRequestSource},t._createComponent(
r))},function(n){return t._onError(n,"WebsiteComponentIdHelper.getComponentId: lookup component")}),
this._deferred.promise()},n.prototype.hasWebsiteLink=function(n,t){var i=o._filter(v(n.SubscriptionId,
n.Name),[t]);return i!=null},n.prototype._findRelatedComponent=function(){var n=this,t=this._params?
this._params._containerName:e.AITelemetryConstants.WebsiteComponentIdHelper;return o.fetchComponentsForSubscription(
this.websiteComponentId.SubscriptionId,t).then(function(t){t&&t.length!==0?n._checkResultsForComponent(
n.websiteComponentId,t):n._deferredInternal.resolve({id:n.websiteComponentId,payload:null})},function(
t){n._deferredInternal.reject(t)}),this._deferredInternal.promise()},n.prototype._checkResultsForComponent=
function(t,i){var e=jQuery.extend(!0,{},t,{}),r=null,l=a(t.SubscriptionId,t.Name),y=v(t.SubscriptionId,
t.Name),h=o._filter(y,i),u,f,s,c;if(r=h?h:o._filter(l,i),u=!!r,r===null)for(f=0;f<n.MaxLookup&&!u;f++)
f>0&&(e.Name=t.Name+"-"+f),s=i.filter(function(n){var t=o.getComponentId(n);return t?t.Name.toUpperCase(
)===e.Name.toUpperCase():!1}),s.length>0?(c="(hidden-)?link:/subscriptions/[^/]*/resourceGroups/[^/]*/providers/microsoft\\.web/sites/[^/]*",
r=o._filter(c,s,!1),u=!!r):u=!0;u?this._deferredInternal.resolve({id:e,payload:r}):this._deferredInternal.
reject("Failed to create component")},n.prototype._createComponent=function(t){var i=this,r=o.getDefaultPayloadForCreateComponent(
t.Name,u.ApplicationType.Web,u.ApplicationLocationDisplayKey),f=this._params?this._params._containerName:
e.AITelemetryConstants.WebsiteComponentIdHelper;o.createOrUpdate(t,r,n.componentIdToResourceId(this.
websiteComponentId),!0,f).then(function(){i._componentLookupCompleted(t)},function(n){i._onError(n[0],
n[1])})},n.prototype._componentLookupCompleted=function(t){var i=this,r=this._params?this._params._containerName:
e.AITelemetryConstants.WebsiteComponentIdHelper;n._checkForTelemetryProperties(t,r).then(function(t)
{n._cacheWebSite(t,i._params.websiteId,i._params.sku);i._deferred.resolve(t)})},n._checkForTelemetryProperties=
function(n,t){return n.Metadata?$.Deferred().resolve(n).promise():h.getFullComponentId(n,t,!0).then(
function(n){return n})},n.prototype._onError=function(n,t){s.errorConsole(n,t);this._deferred.reject(
n)},n._componentIdToWebsiteCache={},n.MaxLookup=4,n}();t.WebsiteComponentIdHelper=c;t.linkedWebsiteFormat=
a;t.hiddenlinkedWebsiteFormat=v});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Shared/EntityCacheHelper",["require","exports","./UrlHelper","./DataCacheLoader"],function(n,t,i,r)
{"use strict";function u(n,t,u,f){var e=new r.DataCacheLoader({graphTemplate:n,sourceUrl:i.getUrlFromGraphTemplate,
pollFrequency:u,transform:t,serialize:f});return new MsPortalFx.Data.EntityCache({loader:e})}function f(
n,t,i){var u=new r.DataCacheLoader({getData:n,serialize:t,transform:i});return new MsPortalFx.Data.EntityCache(
{loader:u})}function e(n,t,i,u){var f=new r.DataCacheLoader({getData:n,serialize:t,transform:u});return new
o({loader:f},i)}t.createEntityCacheWithSourceUrl=u;t.createEntityCacheWithGetData=f;t.createEntityCacheWrapper=
e;var o=function(n){function t(t,i){n.call(this,t);this._dataContext=i}return __extends(t,n),t.prototype.
createView=function(t){var r=this,i=n.prototype.createView.call(this,t),u=i.fetch;return i.fetch=function(
n){return n.__lifespan=t,n.__dataContext=r._dataContext,u.call(i,n)},i},t}(MsPortalFx.Data.EntityCache)}
);__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/DataCacheLoader",["require",
"exports","./AjaxCore","./AjaxHelper","./Enumerations","./InsightsTelemetry"],function(n,t,i,r,u,f){
"use strict";var e=function(n){function t(t){if(t.getData){if(this._getData=t.getData,t.sourceUrl)throw new
Error("If a 'getData' function is provided, do not provide a 'sourceUrl'.");if(t.serialize)this._serialize=
t.serialize;else throw new Error("If a 'getData' function is provided, a 'serialize' function is required.");
}else if(t.sourceUrl)if(this._sourceUrl=t.sourceUrl,this._serialize=t.serialize,t.graphTemplate)this.
_graphTemplate=t.graphTemplate;else throw new Error("If a 'sourceUrl function is provided, a 'graphTemplate' is required.");
else throw new Error("A 'getData' function or a 'sourceUrl' function is required when constructing a DataCacheLoader.");
if(t.pollFrequency&&!t.sourceUrl)throw new Error("If a 'pollFrequency' is provided, a 'sourceUrl' function is required.");
this._pollRate=t.pollFrequency;this._transform=t.transform;this._dataSets={};this._dataSetParams={};
n.call(this,t)}return __extends(t,n),t.prototype.serializeParams=function(n){return this._serialize?
this._serialize(n):this._sourceUrl(this._graphTemplate,n)},t.prototype.loadDataSetForParams=function(
n,u){var e=this,h,l=new Date,o=null,c,s;return(u._containerName&&u._queryName&&(o=u),u.prepareQuery(
),this._sourceUrl&&this._pollRate)?(c=i.getIbizaAuthorizationHeader().then(function(i){var s=r.buildHeaders(
null,i),h={uri:e._sourceUrl(e._graphTemplate,u),httpMethod:t._defaultHttpMethod,pollFrequency:e._pollRate,
ajaxHeaders:s},c=MsPortalFx.Data.Loader.getData(n,h);return c.then(function(t,i){if(e._transform){var
r=new MsPortalFx.Data.DataSet(n);return r.merge([]),i.data.subscribe(function(n){var t=e._transform(
n,u);r.data(t)}),i.data.valueHasMutated(),r}return i},function(){var n={},t;n.dataSetName=arguments[
0];t=(new Date).getTime()-l.getTime();f.logAjaxQuery(o,1,arguments[1],n,t)})}),$.extend(c,{dataSetName:
n})):(h=this._sourceUrl&&u.httpMethod==="POST"?r.apiPost(this._sourceUrl(this._graphTemplate,u),o,u.
getPayload()):this._sourceUrl?r.apiGet(this._sourceUrl(this._graphTemplate,u),o):this._getData(u),s=
$.Deferred(),h.then(function(t){var i;i=e._transform?e._transform(t,u):t;e._dataSets[n]||(e._dataSets[
n]=new MsPortalFx.Data.DataSet(n),e._dataSetParams[n]=u,e._dataSets[n].merge([]));e._dataSets[n].data(
i);s.resolve(e._dataSets[n])},function(n){s.reject(n)}),$.extend(s.promise(),{dataSetName:n}))},t.prototype.
refreshDataSet=function(n){var t=this._dataSetParams[n.dataSetName];return this.loadDataSetForParams(
n.dataSetName,t)},t.prototype.disposeDataSet=function(n){delete this._dataSets[n.dataSetName];delete
this._dataSetParams[n.dataSetName]},t._defaultHttpMethod="GET",t}(MsPortalFx.Data.DataCacheLoader);t.
DataCacheLoader=e});define("Shared/DataModels/SearchFilterInputModel",["require","exports","../Enumerations",
"../Constants","ClientResources"],function(n,t,i,r,u){"use strict";function o(n){return n===void 0&&
(n=!1),{eventTypes:r.SupportedSearchEventTypes.Supported,typeFacets:{},createdTime:n?(new Date).getTime(
):0,isPermissive:!1,customFilter:""}}function s(n,t){return!n&&!t?!0:n&&t?e(n.eventTypes,t.eventTypes)&&
h(n.typeFacets,t.typeFacets)&&n.isPermissive===t.isPermissive&&n.customFilter===t.customFilter:!1}function e(
n,t){return!n&&!t?!0:n&&t?n.length!==t.length?!1:n.every(function(n){return t.some(function(t){return t===
n})}):void 0}function h(n,t){return!t&&!n?!0:t&&n&&Object.keys(t)&&Object.keys(n)&&Object.keys(n).length===
Object.keys(t).length&&Object.keys(t).every(function(i){return Object.keys(n).some(function(r){return n[
r].length===t[i].length&&n[r].every(function(n){return t[i].some(function(t){return t===n})})})})?!0:
!1}function c(n,t,i){if(!n||!n.typeFacets)return null;var r=JSON.parse(JSON.stringify(n));return r.typeFacets[
t]&&(r.typeFacets[t].remove(i),r.typeFacets[t].length===0&&delete r.typeFacets[t]),new f(r.eventTypes,
r.typeFacets,!1,"")}function l(n,t){if(!n||!n.eventTypes)return null;var i=JSON.parse(JSON.stringify(
n));return i.eventTypes.remove(t),new f(i.eventTypes,i.typeFacets,!1,"")}function a(n){switch(n){case
1:return u.searchFilterEventTypeRequests;case 2:return u.searchFilterEventTypeExceptions;case 3:return u.
searchFilterEventTypeViews;case 4:return u.searchFilterEventTypeTrace;case 5:return u.searchFilterEventTypeCustomEvent
case 6:return u.searchFilterEventTypeRemoteDependency;default:return null}}function v(n){switch(n){case
1:return"Request";case 2:return"BasicException";case 3:return"View";case 4:return"Message";case 5:return"Event"
case 6:return"RemoteDependency";case 10:return"PerformanceCounter";case 7:return"Ajax";case 8:return"Metric"
case 9:return"ClientPerformance";case 11:return"SessionMetric";default:return null}}function y(n,t){
var i=new MsPortalFx.ViewModels.Controls.DockedBalloon.ViewModel(n);return i.type=0,i.content(t),i}function p(
n,t,i){if(t.isPermissive){var r={},u=t.typeFacets;return i&&Object.keys(u).forEach(function(t){var f=
i[t.toUpperCase()];f&&f.DocumentTypes.some(function(t){return t.toUpperCase()===n.toUpperCase()})&&(
r[t]=u[t])}),r}return t.typeFacets}var f=function(){function n(n,t,i,r){this.eventTypes=n;this.typeFacets=
t;this.isPermissive=i;this.customFilter=r;this.createdTime=(new Date).getTime()+1}return n.clone=function(
n,t){return{eventTypes:n.eventTypes,typeFacets:n.typeFacets,isPermissive:n.isPermissive,customFilter:
n.customFilter,createdTime:t?(new Date).getTime()+1:n.createdTime}},n.createEmptyFilters=function(){
return{eventTypes:[],typeFacets:{},isPermissive:!1,createdTime:0,customFilter:""}},n}();t.SearchFilterInputModel=
f;t.getDefaultSearchFilters=o;t.FiltersEqual=s;t.searchFiltersEqual=e;t.removeFacetValue=c;t.removeEvent=
l;t.getEventTypeDisplayName=a;t.getEventName=v;t.createInfoBalloonViewModel=y;t.filterTypeFacetsByEventType=
p});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/CustomTimeRange",["require",
"exports","./DateUtils","./TimeContext","ClientResources","./InsightsTelemetry","./Enumerations","./Constants"],
function(n,t,i,r,u,f,e,o){"use strict";function c(n,t,i,r){var u=$.Deferred();return t?n.GetBillingPlanForComponentId(
t,r).then(function(n){i().rawDataRetention=n.BillingPlanDescription.RawDataRetention;i().planName=o.
MapPlanIdToTitle(n.BillingPlanDescription.PlanName);n.BillingPlanDescription.AggregatedDataRetention&&
(i().aggDataRetention=n.BillingPlanDescription.AggregatedDataRetention);u.resolve()},function(){i().
rawDataRetention=null;i().planName="";u.resolve()}):u.resolve(),u.promise()}var h=function(){function n(
n){this.maxTime=n}return n.prototype.createValidator=function(n,t,i,r,u,f){return i?new s(t,!0,this.
maxTime,r,u,f):new s(n,!1,this.maxTime,r,u,f)},n}(),s;t.DefaultCustomTimeRangeValidationFactory=h;s=
function(n){function t(t,i,r,u,e,o){var s=this,h;n.call(this,null,function(n){return s._validator(n)}
);this._boundaryTime=t;this._isStart=i;this._timeOutput=u;this._maxDaysFromNow=r;this._planName="";this.
_parentBlade="";e&&e.rawDataRetention&&e.rawDataRetention!==null&&(this._maxDaysFromNow=e.rawDataRetention);
e&&e.planName&&(this._planName=e.planName);e&&e.aggDataRetention&&(h=e.aggDataRetention);o&&(this._parentBlade=
o);this._parentBlade===f.AITelemetryConstants.SearchBlade?this._dataRetentionType=2:(this._parentBlade===
f.AITelemetryConstants.MetricsExplorerBlade||this._parentBlade===f.AITelemetryConstants.AspNetOverviewBlade||
this._parentBlade===f.AITelemetryConstants.EndUserAnalyticsBlade||this._parentBlade===f.AITelemetryConstants.
DeviceOverviewBlade)&&(this._dataRetentionType=1,this._maxDaysFromNow=30);this._planName===""&&this.
_maxDaysFromNow!==null&&this._dataRetentionType!==1&&(this._dataRetentionType=3)}return __extends(t,
n),t.prototype.isValid=function(n,t){var u=new Date,r=null;return this._maxDaysFromNow!==null?r=i.addDays(
u,-this._maxDaysFromNow):(this._maxDaysFromNow=30,r=i.addDays(u,-30)),r==null?!0:n&&t&&r<=n&&n<t&&n<
u},t.prototype._validator=function(n){var o=$.Deferred();if(!n)return o.resolve({valid:!0,message:""}).
promise();var t={valid:!1,message:u.validateTimeRangeDefaultErrorMessage},e=new Date,f=null;return this.
_maxDaysFromNow!==null?f=i.addDays(e,-this._maxDaysFromNow):(this._maxDaysFromNow=30,f=i.addDays(e,-30)),
this._isStart?!f||f<=n&&n<e&&(!this._boundaryTime()||n<this._boundaryTime())?(this._boundaryTime()&&
this._timeOutput(r.createFixedTimeContext(n,this._boundaryTime())),t={valid:!0,message:""}):n?this._dataRetentionType===
3&&n<f?t.message=u.validateTimeRangeMinTime0Days.format(this._maxDaysFromNow.toString()):this._dataRetentionType===
2&&n<f?t.message=u.rawDataTimeRangeValidationString.format("",this._maxDaysFromNow.toString()):this.
_dataRetentionType===1&&n<f?t.message=u.validateTimeRangeMinTime0Days.format(this._maxDaysFromNow.toString(
)):n<f?t.message=u.validateTimeRangeMinTime0Days.format(this._maxDaysFromNow.toString()):n>=e?t.message=
u.validateStartTimeBeforeNow:n>=this._boundaryTime()&&(t.message=u.validateStartTimeBeforeEndTime):t.
message=u.validateStartTimeNotEmpty:!f||f<=n&&(!this._boundaryTime()||this._boundaryTime()<n)?(this.
_boundaryTime()&&f<=this._boundaryTime()&&this._boundaryTime()<e&&this._timeOutput(r.createFixedTimeContext(
this._boundaryTime(),n)),t={valid:!0,message:""}):n?this._dataRetentionType===3&&n<f?t.message=u.validateTimeRangeMinTime0Days.
format(this._maxDaysFromNow.toString()):this._dataRetentionType===2&&n<f?t.message=u.rawDataTimeRangeValidationString.
format("",this._maxDaysFromNow.toString()):this._dataRetentionType===1&&n<f?t.message=u.validateTimeRangeMinTime0Days.
format(this._maxDaysFromNow.toString()):n<f?t.message=u.validateTimeRangeMinTime0Days.format(this._maxDaysFromNow.
toString()):n<=this._boundaryTime()&&(t.message=u.validateEndTimeAfterStartTime):t.message=u.validateEndTimeNotEmpty,
o.resolve(t).promise()},t}(MsPortalFx.ViewModels.CustomValidation);t.CustomDateTimeComboValidator=s;
t.getBillingPlanInfo=c});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(
var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("EndUserAnalytics/DataModels/SessionsPerHourQuery",
["require","exports","../../Shared/Constants","../../Shared/DataModels/AggregateListSet","../../Shared/DataQueries/AggregateQuery",
"../../Shared/ChartUtils"],function(n,t,i,r,u,f){var e=function(n){function t(r,u,e){n.call(this,r,u,
i.Queries.SessionsPerHour);this.addMetricsToCalculate(t.metricName,i.FunctionNames.Cardinality);this.
addAggregateByDimension(i.DimensionNames.RequestTime,f.Instance().getGrain(r,e))}return __extends(t,
n),t.getSessionsPerHourList=function(n){return r.ExtractList(n,t.metricName,i.FunctionNames.Cardinality,
i.DimensionNames.RequestTime,function(n){return new Date(n)})},t.metricName="context.session.id.hash",
t}(u.AggregateQuery);t.SessionsPerHourQuery=e});define("Shared/DataModels/MetricRuleMetricBuilder",[
"require","exports","../DateUtils","../CommonControls/DataModels/MetricsExplorerChartDataModel","../TimeContext",
"ClientResources"],function(n,t,i,r,u,f){function h(){return o===null&&(o=new s),o}var e=MsPortalFx.
ViewModels.Controls.Visualization.Chart,o,s;o=null;t.Instance=h;s=function(){function n(){if(o)throw new
Error("Error: Instantiation failed: Use MetricRuleMetricBuilder.Instance() instead of new.");}return n.
prototype._createMetricRules=function(n,t,i,r,u,e,o){for(var h=i.metrics(),c=[],a=i._isGroupedByDimension(
),s=0;s<h.length;s++){var l=h[s],v=this._buildMetricInfoBalloonText(t,r,i,l.id,u,e,o),y=f.columnValueNoData,
p=this._createSingleMetricRule(n,l.id,v,y);if(c.push(p),a)break}return c},n.prototype._buildPriorPeriodInfoBallonText=
function(n,t,r,e,o){var s=u.toTimeRange(r);s.startTime=i.addMilliseconds(s.startTime,-e);s.endTime=i.
addMilliseconds(s.endTime,-e);var h=o.snapTimeRangeToGrain(s),c=n.getMetadata(t);return f.priorPeriodMetricInfoBallonText.
format(c?c.DisplayName:t,h.startTime.toLocaleString(),h.endTime.toLocaleString())},n.prototype._buildMetricInfoBalloonText=
function(n,t,i,u,e,o,s){var c="",a=i._isGroupedByDimension(),v=a?i.metrics()[0].id:u,h=n.getMetadata(
v),y=h?r.ChartDataModelHelper.getMetricDefaultAggregationDescription(h):"",p=h&&!!h.Description?h.Description:
v,w=s.getDisplayedGrainPeriod(e,o);if(a){var b=i.grouping().dimension.toUpperCase(),l=t[b],k=l&&!!l.
DisplayName?l.DisplayName:b;c=f.segmentedMetricInfoBallonText.format(p,y,k,w)}else c=f.nonSegmentedMetricInfoBallonText.
format(p,y,w);return c},n.prototype._createSingleMetricRule=function(n,t,i,r,u,o){var s,h;return r===
void 0&&(r=undefined),u===void 0&&(u=undefined),o===void 0&&(o=!0),s=new e.MetricRuleMetric,s.aggregationScope(
2),s.aggregationType(7),s.aggregationSeriesName(t),s.showBarColor(o),i&&(h=new MsPortalFx.ViewModels.
Controls.DockedBalloon.ViewModel(n),h.content(i),h.position(1),s.defaultInfoBalloon(h)),r!==undefined&&
(f.columnValueNoData===r&&s.unit(" "),s.customValue(r)),u&&s.unit(u),s},n.prototype.createPointMetricRule=
function(){var t=new e.MetricRule,n;return t.scope(2),n=new e.MetricRuleMetric,n.aggregationScope(2),
n.aggregationType(1),t.metrics([n]),t},n.prototype.createMultiSeriesMetricRule=function(){var t=new e.
MetricRule,n;return t.scope(4),n=new e.MetricRuleMetric,n.aggregationScope(1),n.aggregationType(1),t.
metrics([n]),t},n}();t.MetricRuleMetricBuilder=s});define("Shared/CommonControls/ViewModels/ChartInputs",
["require","exports"],function(n,t){"use strict";var i=function(){function n(n,t,i,r,u,f,e){this.ComponentId=
n;this.ChartDataModel=t;this.MetricsMetadataContainer=i;this.AttributeMetadataContainer=r;this.MetricsExplorerJsonDefinitionId=
u;this.bladeId=f;this.DimensionFilters=e;this.chartNoDataModel=null;this.bladeActionChange=null;this.
isHostedOutsideMetricsExplorerBlade=!1}return n.prototype.setupNoDataModelInput=function(n,t,i){this.
chartNoDataModel=n;this.bladeActionChange=t;this.isHostedOutsideMetricsExplorerBlade=i},n}();t.ChartInputs=
i});define("Shared/DataModels/FiltersSummary",["require","exports","./SearchFilterInputModel","ClientResources",
"../../Shared/InsightsTelemetry","../../Search/ViewModels/DetailsCustomPartViewModelBase"],function(
n,t,i,r,u,f){"use strict";var e=function(){function n(n,t,f,e,o,s){var h=this;s===void 0&&(s=ko.observable(
!1));this.searchResultFacetsFilterText=ko.observable(r.searchResultSummaryWithString);this.searchResultFilterText=
ko.observable(r.searchResultFilterText);this.searchResultFacetsFilter=ko.observable([]);this.openFilterSelectable=
new MsPortalFx.ViewModels.Selectable;this.searchResultEvents=ko.observable(this._getEventsSummary(t(
)));this.currentFilter=t;this._filterChanged=s;this._attributeMetadataContainer=f;this._partName=e;this.
_componentId=o;this._container=n;this.currentFilter.subscribe(n,function(t){h.searchResultEvents(h._getEventsSummary(
t));var r=t&&t.typeFacets?t.typeFacets:{},f=[];Object.keys(r).forEach(function(t){var e=[];r[t].forEach(
function(r){var o=new MsPortalFx.ViewModels.Controls.Forms.Button.ViewModel(n),f;o.click=function(){
h.currentFilter(i.removeFacetValue(h.currentFilter(),t,r));u.logCustomEvent(u.AITelemetryConstants.RemoveFacetTagClick,
3,h._partName,h._componentId,{Facet:t,FacetValue:r});h._filterChanged(!0)};f=new MsPortalFx.ViewModels.
Controls.Forms.Button.ViewModel(n);f.click=function(){h.openFilterSelectable.isSelected(!0);u.logCustomEvent(
u.AITelemetryConstants.OpenFacetTagClick,3,h._partName,h._componentId,{Facet:t,FacetValue:r})};e.push(
{facetValue:r,openFilterVM:f,removeFaceValueVM:o,infoBalloonViewModel:h._getFacetTagInfoBalloon(t,r)})}
);f.push({facetName:t,values:e})});h.searchResultFacetsFilter(f)})}return n.prototype._getFacetTagInfoBalloon=
function(n,t){var r=this,u=ko.observable(null);return this._attributeMetadataContainer.getMetadataPromise(
).then(function(){var e=r._attributeMetadataContainer.getMetadata(n),o=f.formatSearchHint(t,e.CanonicalKey,
e.Description);u(i.createInfoBalloonViewModel(r._container,o))}),u},n.prototype._getCurrentFilterString=
function(){var n;return this.currentFilter()&&this.currentFilter().eventTypes&&this.currentFilter().
eventTypes.forEach(function(t,r){r===0?n=i.getEventTypeDisplayName(t):n+=", "+i.getEventTypeDisplayName(
t)}),n},n.prototype._getEventsSummary=function(n){var t=this,r=[];return n&&n.eventTypes&&n.eventTypes.
forEach(function(f){var o=new MsPortalFx.ViewModels.Controls.Forms.Button.ViewModel(t._container),e;
o.click=function(){t.currentFilter(i.removeEvent(t.currentFilter(),f));u.logCustomEvent(u.AITelemetryConstants.
RemoveFacetTagClick,3,t._partName,t._componentId,{Facet:f,FacetValue:n});t._filterChanged(!0)};e=new
MsPortalFx.ViewModels.Controls.Forms.Button.ViewModel(t._container);e.click=function(){t.openFilterSelectable.
isSelected(!0);u.logCustomEvent(u.AITelemetryConstants.OpenFacetTagClick,3,t._partName,t._componentId,
{Facet:f,FacetValue:n})};r.push({eventType:f,eventName:i.getEventTypeDisplayName(f),openFilterVM:e,removeEventVM:
o})}),r},n}();t.FiltersSummary=e});define("Search/ViewModels/DetailsCustomPartViewModelBase",["require",
"exports","ClientResources","../../Shared/Constants","../../Shared/InsightsTelemetry","../../Shared/DataModels/SearchFilterInputModel",
"../../Shared/TimeContext","../../Shared/Enumerations","../../Shared/AttributeMetadataContainer","../../Shared/MetricsMetadataContainer",
"../../Shared/StringUtils","../../Shared/DataModels/EventType","../DataModels/CustomPropertyHelper",
"./TopNControlViewModel","./RelatedDetailsPartViewModel","../DataSources/SearchDetailsQuery","../../_generated/ExtensionDefinition",
"../DataModels/SearchInput","../../_generated/SvgDefinitions"],function(n,t,i,r,u,f,e,o,s,h,c,l,a,v,
y,p,w,b,k){"use strict";function rt(n,t,i,r,u){d(n,t,i,r,u);g(n,t,i,u)}function d(n,t,i,r,u){var h,o,
e,c,f,s,a;if(t){h=l.Constants.getNoUIProperties();for(o in t.properties)h[o]===undefined&&(e=t.properties[
o],e!==undefined&&(c=e,f=r.getMetadata(o),f&&f.Unit&&f.Scale!==1&&(s=Number(e),s&&(a=s*f.Scale,e=Math.
round(a*100)/100+f.Unit)),nt(n,i,o,e,c,u,f)))}}function g(n,t,i,r){var e,u,f;if(t)for(e=a.GetFlatListOfProperties(
t),u=0;u<e.length;u++)f=e[u],nt(n,i,f.propertyName,f.propertyValue,f.propertyValue,r)}function nt(n,
t,i,r,u,e,o){var s=e.getMetadata(i),a,v,y,p;if(s==null||s.IsVisible){var w=s?s.DisplayName:o?o.DisplayName:
i,b=s?s.DisplayOrder:Number.MAX_VALUE,l=o?o.CanonicalKey:s?s.CanonicalKey:w,k=s&&s.IsFacet?s.Key:null,
h=r,d=r!==u;(s&&r&&s.DataType==="date"&&(typeof r=="string"?(a=r,a.charAt(a.length-1)==="Z"&&(v=new Date(
r),h=v.toISOString(),r=v.toLocaleString())):r instanceof Date&&(h=r.toISOString(),r=r.toLocaleString(
))),typeof r=="string"&&(r=c.truncateSearchString(r,300)),!r&&s&&s.IgnoreWhenNoValue)||(y=tt(h,l,o?o.
Description:s?s.Description:undefined),p=null,y&&(p=f.createInfoBalloonViewModel(n,y)),d&&(l=null,h=
null),t.push({key:i,displayName:w,infoBalloonVM:p,value:r,rank:b,canonicalKey:l,canonizedValue:h,facetKey:
k}))}}function tt(n,t,r){return(r?r+"<br><br>":"")+(t?'{0} "{1}":"{2}"'.format(i.searchHintPrefix,t,
n):"")}function it(n,t,i,r){var o="",u=null,s,e;return r&&(i&&r.facetKey&&(s=i.getMetadata(r.facetKey))
&&s.IsFacet?(e={},e[r.facetKey]=[r.value],u=new f.SearchFilterInputModel([2,5,1,4,3],e,!1,"")):(o=b.
formatSimpleSearchQuery(r.canonicalKey,r.value),u=f.getDefaultSearchFilters(!0))),{detailBlade:w.BladeNames.
searchBlade,detailBladeInputs:{ComponentId:n,InitialFilter:u,InitialTime:t,InitialQueryText:o,BIFavoriteData:
null}}}t.populateTopNItems=rt;t.formatSearchHint=tt;t.createSearchBladeDynamicBladeInputs=it;var ut=
function(){function n(n,t,f){var o=this,c;this._containerName=u.AITelemetryConstants.EventDetailsPart;
this._containerType=1;this._container=n;this.favoriteData=ko.observable(null);this.propertiesTitle=ko.
observable();this.relatedItemsTitle=ko.observable(i.relatedItems);this.eventId=ko.observable();this.
currentItem=ko.observable();this.componentId=ko.observable();this.notFoundText=ko.observable(null);this.
hasRelatedItems=ko.observable(!1);this.ready=ko.observable();this.selectedProperty=ko.observable();this.
progressBar=new MsPortalFx.ViewModels.Controls.Visualization.ProgressBar.ViewModel(n);this.progressBar.
status(4);this._detailsView=f._searchDetailsEntityCache.createView(n);this._metricsMetadataContainer=
new h.MetricsMetadataContainer(n,f.sharedDataContext);this._attributeMetadataContainer=new s.AttributeMetadataContainer(
n,f.sharedDataContext,this._containerName);this._topNItems=ko.observableArray();c={visibleItemsCount:
6,itemRankingFunction:this._getRankingFunction(),showHeader:!1};this.topNGrid=new v.TopNControlViewModel(
n,c,this.selectedProperty);this.customPropertiesTopNGrid=new v.TopNControlViewModel(n,{visibleItemsCount:
1e3,itemComparisonFunction:function(n,t){return n.displayName.localeCompareIgnoreCase(t.displayName)}
,showHeader:!1},this.selectedProperty);this.hasCustomProperties=ko.pureComputed(function(){return o.
customPropertiesTopNGrid.gridViewModel.items().length>0},this);this.customPropertiesTitle=ko.observable(
i.customPropertiesTitle);this.relatedItemsGrid=new y.RelatedDetailsPartViewModel(n,f,this._attributeMetadataContainer);
this.partId=MsPortalFx.Util.newGuid();this.propertyActionSelectable=u.TelemetryHelper.createSelectableInstrumented(
this,t,undefined,this.componentId);f.sharedDataContext.Channels.getOrCreate(this.partId).subscribe(n,
function(n){var t=o.topNGrid.selectedItem(),i,f;switch(n){case u.AITelemetryConstants.EventSearchCommand:
i=it(o.componentId(),new e.TimeContext(r.Durations.OneDay),o._attributeMetadataContainer,t);o.propertyActionSelectable.
selectedValue(i);break;case u.AITelemetryConstants.EventViewFullPropertyCommand:t&&(f={detailBlade:w.
BladeNames.monacoBlade,detailBladeInputs:{name:t.name,value:t.value?t.value.toString():""}},o.propertyActionSelectable.
selectedValue(f))}})}return n.prototype.onInputsSet=function(n){var t=this;return this.ready(!1),this.
_telemetryHelper.instrument(n.eventId.componentId,0,function(){if(n.maxPropertyCount&&t.topNGrid.updateOptions(
{visibleItemsCount:Number(n.maxPropertyCount)}),n.eventId){t.eventId(null);t.currentItem(null);t._updateItem(
t.currentItem());t.eventId(n.eventId);t.componentId(t.eventId().componentId);t.propertiesTitle(i.customEventSearchResultDetailsBladeTitle.
format(f.getEventTypeDisplayName(t.eventId().eventType)));var r=new p.SearchDetailsQuery(t.componentId(
),t._containerName,t.eventId().eventType,t.eventId().id,t.eventId().eventTime),u=t._detailsView.fetch(
r).finally(function(){var n=t._detailsView.item(),r,u;n&&n.items&&n.items.length>0?(r=n.items[0],u=l.
EventFactory.CreateEvent(r.document,t._attributeMetadataContainer),t.currentItem(u),t.notFoundText(null)):
(t.currentItem(null),t.notFoundText(i.eventDetailsNotFoundText.format(f.getEventTypeDisplayName(t.eventId(
).eventType),t.eventId().name||t.eventId().id)))}),e=t._metricsMetadataContainer.onInputsSet({ComponentId:
t.componentId()}),o=t._attributeMetadataContainer.onInputsSet({ComponentId:t.componentId()});return Q.
allSettled([u,o,e]).finally(function(){t._updateItem(t.currentItem()).finally(function(){t.ready(!0)}
)})}return t.currentItem(null),t.eventId(null),t.componentId(null),t.notFoundText(i.eventDetailsInvalidText),
t.ready(!0),null}),null},n.prototype._getEventTypeId=function(){throw new Error("subclasses must implement _getEventTypeId");
},n.prototype._configureTopN=function(){var t=this,n;this._curatedRanks={};n=l.Constants.getEventTypeInfos(
)[this._getEventTypeId()];n.topNMetadatas.forEach(function(n,i){return t._curatedRanks[n.propertyName]=
i+1})},n.prototype._updateItem=function(n){var o=this,r,t,e,i;this._configureTopN();r=$.Deferred();t=
[];try{e=this._update(n);e&&t.push(e)}catch(s){u.logException(s,this._containerType,this._containerName,
this.componentId())}return i=this._createRelatedItems(this.eventId(),n),i.forEach(function(n){n.infoMessage&&
!n.infoBalloon&&(n.infoBalloon=f.createInfoBalloonViewModel(o._container,n.infoMessage))}),this.hasRelatedItems(
!!i),t.push(this.relatedItemsGrid.updateItems(this.eventId(),n,i)),Q.allSettled(t).finally(function(
){return r.resolve()}),r},n.prototype._update=function(n){var i=[],t;return d(this._container,n,i,this.
_metricsMetadataContainer,this._attributeMetadataContainer),this.topNGrid.updateItems(i),t=[],g(this.
_container,n,t,this._attributeMetadataContainer),this.customPropertiesTopNGrid.updateItems(t),null},
n.prototype.hasUserData=function(){return!0},n.prototype._getRankingFunction=function(){var n=this;return function(
t){if(n._curatedRanks){var i=n._curatedRanks[t.key];return i?i:t.rank===Number.MAX_VALUE?Number.MAX_VALUE:
t.rank+Object.keys(n._curatedRanks).length+1}return t.rank?t.rank:Number.MAX_VALUE}},n.prototype._createRelatedItems=
function(n,t){var s=[],h,o;return t&&(h=new e.TimeContext(r.Durations.OneWeek,new Date,null,!0),o={},
t.sessionId&&(o[r.DimensionNames.SessionId]=[t.sessionId],s.push({name:i.relatedItemsAllTelemetryInSession,
count:ko.observable(),componentId:n.componentId,timeContext:h,searchFilter:ko.observable(new f.SearchFilterInputModel(
[2,5,1,4,3],o,!1,"")),queryText:null,icon:k.Content.Images.dependency,telemetryKey:u.AITelemetryConstants.
relatedEventsInSession,infoMessage:i.relatedItemsAllTelemetryInSessionInfo})),o={},s.push({name:i.relatedItemsAllIn5Minutes,
count:ko.observable(),componentId:n.componentId,timeContext:new e.TimeContext(r.Durations.OneMinute*
10,new Date(t.eventTime.getTime()+r.Durations.OneMinute*5),null,!0),searchFilter:ko.observable(f.getDefaultSearchFilters(
)),queryText:null,icon:k.Content.Images.dependency,telemetryKey:u.AITelemetryConstants.relatedEventsfor5Min,
infoMessage:i.relatedItemsAllIn5MinutesInfo})),s},n}();t.DetailsCustomPartViewModelBase=ut});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/MetricsMetadataContainer",["require",
"exports","./Constants","ClientResources","./DataModels/MetricsMetadataResult","./InsightsTelemetry",
"./MetadataContainer","./ClientSideMetadata","./DataQueries/MetadataQuery"],function(n,t,i,r,u,f,e,o,
s){"use strict";var h=function(n){function t(t,r){var u=r._metricsMetadataEntityCache.createView(t);
n.call(this,t,u,f.AITelemetryConstants.MetricsExplorerCustomPart,i.Queries.MetricsMetadata,!1)}return __extends(
t,n),t.prototype.createQuery=function(){return new s.MetricsMetadataQuery(this._componentId(),this._partName,
this._queryName,this._currentRefreshStamp,this)},t.prototype.getRefreshStamp=function(n){return n===
void 0&&(n=!1),n?++t._metricMetadataRefreshStamp:t._metricMetadataRefreshStamp},t.prototype.getMetadataKey=
function(n){return n?n.Key:null},t.prototype.isSupportedMetadata=function(n){return n&&!!n.getAggregationTypeData(
)},t.prototype.getMetricsMetadata=function(n){var u=this,t={},i=this.getAllMetadata();return n.forEach(
function(n){var e=i.first(function(t){return t.Key===n.id});e?t[n.id]=e:i.length!==0&&f.logError(r.metricsExplorerMetadataNotFound.
format(n.id),1,f.AITelemetryConstants.MetricsExplorerCustomPart,u._componentId())},this),t},t.prototype.
getClientSideMetadata=function(){return o.metricMetadata},t.prototype.getClientSideMetadataTransformationFunc=
function(){return t._transformClientMetadata},t._transformClientMetadata=function(n){var t=new u.MetricsMetadataResult(
n.Key,"","",1,"","","Standard");return o.mergeMetadataProperties(t,n),t},t._metricMetadataRefreshStamp=
0,t}(e.MetadataContainer);t.MetricsMetadataContainer=h});define("Shared/DataModels/MetricsMetadataResult",
["require","exports","./AggregationData","ClientResources","../NumberUtils","../DateUtils","../UnitHelper",
"../Enumerations"],function(n,t,i,r,u,f,e,o){"use strict";function c(n,t){var i=s(n);return t._metaDataContainer.
transformWithClientSideMetadata(i)}function s(n){var t=[];return n.d.results.value.forEach(function(
n){if(n.IsVisible){var i=n.DimensionIds.map(l),r=n.DocumentTypes?n.DocumentTypes.split(", "):[],u=new
h(n.Key,n.DisplayName,n.Unit,n.Scale,n.Type,n.AggregationType,n.Category,n.Description,i,r,n.ApplicationType,
n.CanonicalKey);t.push(u)}}),t}function l(n){return n[0]==="0"?n.substring(2):n}function a(n){switch(
n){case"web":return 1;case"phone":case"store":return 2;default:return null}}t.transform=c;t.transformMetricsResultFromBackend=
s;var h=function(){function n(n,t,i,r,u,f,e,s,h,c,l,a){s===void 0&&(s="");h===void 0&&(h=[]);c===void
0&&(c=[]);l===void 0&&(l="");a===void 0&&(a="");this.Key="";this.DisplayName="";this.Unit="";this.Scale=
1;this.Type="";this.AggregationType="";this.Category="Standard";this.Description="";this.DimensionIds=
[];this.CanonicalKey="";this.Key=n;this.DisplayName=t;this.Unit=i;this.Scale=r;this.Type=u;this.AggregationType=
f;this.Category=e;this.DocumentTypes=c;this.Description=s;this.DimensionIds=h;this.ApplicationCategory=
o.MetricsApplicationCategory[l];this.CanonicalKey=a}return n.prototype.getScaledMetricValueWithUnits=
function(n){var i,t,o,s;if(n===null)return r.columnValueNoData;if(i="0",t=n,this.Scale&&(t=t*this.Scale),
e.isTimeBasedUnit(this.Unit))if(o=this.getTimeUnit(),!o)this.Scale&&(t=Math.round(t)),i=t.toString()+
" "+this.Unit;else{var h=f.TimeUnits.getDisplayUnit(t,o),c=f.TimeUnits.convert(t,o,h),l=c?u.FormatTimerSignificantDigits(
c):"0";i=l+" "+h.name}else s=u.FormatWithSingleDecimalAndUnits(t),i=s.value,s.unit&&(i+=" "+s.unit);
return i},n.prototype.getTimeUnit=function(){return e.isTimeBasedUnit(this.Unit)?f.TimeUnits.getUnitFromStr(
this.Unit):null},n.prototype.getAggregationTypeData=function(){switch(this.AggregationType){case"A":
return i.AggregationA;case"B":return i.AggregationB;case"C":return i.AggregationC;default:return null}
},n.prototype.isCompatibleApplicationCategory=function(n){return this.ApplicationCategory?this.ApplicationCategory===
n||this.ApplicationCategory===0:!0},n}();t.MetricsMetadataResult=h;t.getApplicationCategory=a});define(
"Shared/UnitHelper",["require","exports","./DateUtils"],function(n,t,i){"use strict";function u(n){switch(
n){case i.TimeUnits.milliseconds:return 23;case i.TimeUnits.seconds:return 24;case i.TimeUnits.minutes:
return 25;case i.TimeUnits.hours:return 26;case i.TimeUnits.days:return 27;default:return null}}function f(
n){var t=r[n];switch(t){case 0:return 2;case 1:return 11;case 2:return 17;case 3:return 26;case 4:return 4
case 5:return 25;case 6:return 23;case 7:return 1;case 8:return 31;case 9:return 24;default:return null}
}function e(n){var t=r[n];return t===3||t===5||t===9||t===6}t.convertTimeUnitToIbizaUnit=u;t.convertMDMUnitToIbizaUnit=
f,function(n){n[n.bytes=0]="bytes";n[n.bytesPerSec=1]="bytesPerSec";n[n.count=2]="count";n[n.hours=3]=
"hours";n[n.mb=4]="mb";n[n.minutes=5]="minutes";n[n.ms=6]="ms";n[n.percent=7]="percent";n[n.perSec=8]=
"perSec";n[n.seconds=9]="seconds"}(t.MDMUnit||(t.MDMUnit={}));var r=t.MDMUnit;t.isTimeBasedUnit=e});
define("Shared/StringUtils",["require","exports"],function(n,t){function i(n){return n.replace(/&&|\|\||[\+\-\!\(\)\{\}\[\]\^\"\~\*\?\:\/\\]/g,
"\\$&")}function r(n,t){return n=n.replace(/\s+/i," ").trim(),n.length>t&&(n=n.substring(0,t-3)+"..."),
n}t.escapeSearchString=i;t.truncateSearchString=r});define("Shared/DataModels/EventType",["require",
"exports","../Enumerations","../Constants","../SearchQueryBase","../StringUtils","./SearchFilterInputModel"],
function(n,t,i,r,u,f,e){"use strict";var o=function(){function n(){}return n.getEventTypeInfos=function(
){var n=[];return n[1]=new c,n[2]=new l,n[3]=new a,n[4]=new y,n[5]=new v,n[6]=new p,n},n.getCommonFields=
function(){return[{propertyName:"context.data.eventTime",propertyValuePath:["context","data","eventTime"],
transform:function(n){return new Date(n)}},{propertyName:r.DimensionNames.SessionId,propertyValuePath:
["context","session","id"]},{propertyName:r.DimensionNames.OperationId,propertyValuePath:["context",
"operation","id"]},{propertyName:"context.location.clientip.raw",propertyValuePath:["context","location",
"clientip"]},{propertyName:"context.location.continent",propertyValuePath:["context","location","continent"]},
{propertyName:"context.location.country",propertyValuePath:["context","location","country"]},{propertyName:
"context.location.province",propertyValuePath:["context","location","province"]},{propertyName:"context.location.city",
propertyValuePath:["context","location","city"]},{propertyName:"context.device.id",propertyValuePath:
["context","device","id"]},{propertyName:"context.device.oemName",propertyValuePath:["context","device",
"oemName"]},{propertyName:"context.device.userAgent",propertyValuePath:["context","device","userAgent"]},
{propertyName:"context.device.locale",propertyValuePath:["context","device","locale"]},{propertyName:
"context.device.deviceModel",propertyValuePath:["context","device","deviceModel"]},{propertyName:"context.device.type",
propertyValuePath:["context","device","type"]},{propertyName:"context.device.screenResolution.value",
propertyValuePath:["context","device","screenResolution","value"]},{propertyName:"context.device.network",
propertyValuePath:["context","device","network"]},]},n.getCustomProperties=function(){return[{name:"urlData",
includeNameInPrefix:!0,includeIndex:!1,includeEventName:!0},{name:"measurement",includeNameInPrefix:
!0,includeIndex:!1,includeEventName:!0},{name:"pageViewPerf",includeNameInPrefix:!0,includeIndex:!1,
includeEventName:!0},{name:"properties",includeNameInPrefix:!1,includeIndex:!0,includeEventName:!1},
]},n.getCustomFormattedProperties=function(){return[]},n.getNoUIProperties=function(){var n=[];return n.
properties="properties",n.documentContext="documentContext",n.urlData="urlData",n.measurement="measurement",
n.parsedStack="parsedStack",n.pageViewPerf="pageViewPerf",n.eventType="eventType",n.eventTime="eventTime",
n.id="id",n.exceptionId="exceptionId",n.allExceptions="allExceptions",n.operationId="operationId",n.
outerId="outerId",n.sessionId="sessionId",n.sql="sql",n},n.SearchResultsPerPage=100,n.EventsListSize=
5,n}(),s,b,h,c,l,a,v,y,p,k,d,w,g,nt,tt;t.Constants=o;s=function(){function n(){this.properties={};this.
customMetrics={};this.customDimensions={}}return n}();t.IEvent=s;b=function(){function n(){this.fields=
[];this.cssClass=""}return n}();t.IEventSummary=b;h=function(){function n(){}return n.CreateEvent=function(
t,i){var a=this,r=null,l,f,u,v,h,c;if(t)for(l=o.getEventTypeInfos(),f=0;f<l.length;f++)if(u=l[f],u&&
t[u.eventValueName]){r=new s;r&&t&&(r.eventTypeId=f,r.eventType=e.getEventTypeDisplayName(f),u.standardProperties.
forEach(function(n){r[n.propertyName]=a.getValue(t,n.propertyValuePath,n.transform)}),v=o.getCommonFields(
).concat(u.metadatas),v.forEach(function(n){r.properties[n.propertyName]=a.getValue(t,n.propertyValuePath,
n.transform)}),h=["context","custom","metrics"],c=this.getValue(t,h,null),c&&(r.customMetrics=n._transformCustomItems(
c,h,i)),h=["context","custom","dimensions"],c=this.getValue(t,h,null),c&&(r.customDimensions=n._transformCustomItems(
c,h,i)),u.postProcesser&&u.postProcesser(r,t));break}return r},n.CreateSummary=function(t,i,u){var w=
this,l,c,s,h,a,v,y,p;if(t){for(l=o.getEventTypeInfos(),c=0;c<l.length;c++)s=l[c],s&&t[s.eventValueName]&&
(h={eventTime:undefined,eventType:e.getEventTypeDisplayName(s.eventType),eventTypeId:s.eventType,name:
"",id:undefined,fields:[],cssClass:r.Colors.msPortalFxBgColor[c],sessionId:""},s.standardProperties.
forEach(function(n){h[n.propertyName]=w.getValue(t,n.propertyValuePath,n.transform)}),a=n._processHighlights(
i,s.eventSummaryFieldKey,u),v=undefined,a&&(v=n._copyHighlights(h,a)),y=s.summaryMetadatas.map(function(
i){return n._copyFromMetaData(t,i)}),p=n._mergeFixedAndHighlightFields(v,y),p.forEach(function(n){n.
value&&h.fields.push(n)}),h.name&&(h.name=f.truncateSearchString(h.name,240)));return h}},n._processHighlights=
function(t,i,r){var u,s,f,e,o;if(t){u={haveMessageHighlight:!1,items:[]};for(s in t)f=t[s],f&&$.isArray(
f)&&f.length>0&&(e=s.replace(/\.analyzed$/i,""),e=n._getKeyFromSearchResponseKey(e,r),u.items.push({
property:e,key:s,value:f[0],isMessage:e===i}));if(u.items.length>1&&(o=u.items.first(function(n){return n.
isMessage}),o!=null&&o!==u.items[0]&&(u.items.remove(o),u.items.splice(0,0,o))),u.items.length>0)return u.
haveMessageHighlight=u.items[0].isMessage,u.items=u.items.slice(0,u.haveMessageHighlight?4:3),u}return null}
,n._flattenPropertyPath=function(n){return n.length>1&&n[1]===0&&(n=n.slice(0),n.splice(1,1)),n?n.join(
"."):""},n._copyFromMetaData=function(t,i){return{property:i.propertyName,key:n._flattenPropertyPath(
i.propertyValuePath),value:MsPortalFx.Base.Utilities.htmlEncode(this.getValue(t,i.propertyValuePath,
i.transform)),isMessage:!1}},n._getKeyFromSearchResponseKey=function(n,t){var r=n,i;return t&&t.getAllMetadataMap(
)&&(i=t.getAttributeMetadataBySearchResponseKey(n),i&&(r=i.Key)),r},n._transformCustomItems=function(
t,i,r){var u=null,e={},h=this._flattenPropertyPath(i),f,o,s;for(f in t)u=t[f],u&&u.value!==undefined&&
(o=h+"."+f+".value",s=n._getKeyFromSearchResponseKey(o,r),e[s]={name:u.name,value:u.value});return e}
,n._mergeFixedAndHighlightFields=function(n,t){var i=[],r;return n&&n.length!==0?t&&t.length!==0?(r=
0,t.forEach(function(t){var u=n.first(function(n){return n.key===t.key});u?(i.push(u),r++):i.push(t)}
),r===0&&n.length>0&&i.push(n[0])):i=n:i=t,i},n._copyHighlights=function(n,t){var i=t.haveMessageHighlight?
1:0;return t.haveMessageHighlight&&(n.name=t.items[0].value),t.items.slice(i,i+3)},n.getValue=function(
n,t,i){for(var r=n,u=0;u<t.length;u++){if(r===undefined)break;r=r[t[u]]}return r!==undefined&&i?i(r):
r},n}();t.EventFactory=h;c=function(){function n(){this.eventType=1;this.eventName=e.getEventName(1);
this.eventSummaryFieldKey="request.name";this.eventValueName="request"}return Object.defineProperty(
n.prototype,"standardProperties",{get:function(){return[{propertyName:"eventTime",propertyValuePath:
["context","data","eventTime"],transform:function(n){return new Date(n)}},{propertyName:"name",propertyValuePath:
["request",0,"name"]},{propertyName:"id",propertyValuePath:["internal","data","id"]},{propertyName:"sessionId",
propertyValuePath:["context","session","id"]},]},enumerable:!0,configurable:!0}),Object.defineProperty(
n.prototype,"metadatas",{get:function(){return[{propertyName:r.DimensionNames.OperationId,propertyValuePath:
["request",0,"id"]},{propertyName:"request.controller",propertyValuePath:["request",0,"controller"]},
{propertyName:"request.name",propertyValuePath:["request",0,"name"]},{propertyName:"request.startTime",
propertyValuePath:["request",0,"startTime"]},{propertyName:"request.responseCode",propertyValuePath:
["request",0,"responseCode"]},{propertyName:"request.success",propertyValuePath:["request",0,"success"]},
{propertyName:"request.duration",propertyValuePath:["request",0,"durationMetric","value"]},{propertyName:
"request.count",propertyValuePath:["request",0,"count"]},{propertyName:"request.url",propertyValuePath:
["request",0,"url"]},{propertyName:"request.urlData.host",propertyValuePath:["request",0,"urlData","host"]},
{propertyName:"request.urlData.base",propertyValuePath:["request",0,"urlData","base"]},{propertyName:
"request.urlData.port",propertyValuePath:["request",0,"urlData","port"]},{propertyName:"request.urlData.hashTag",
propertyValuePath:["request",0,"urlData","hashTag"]},{propertyName:"request.urlData.protocol",propertyValuePath:
["request",0,"urlData","protocol"]},]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"summaryMetadatas",{get:function(){return[{propertyName:r.DimensionNames.RequestUrl,propertyValuePath:
["request",0,"url"]},{propertyName:r.DimensionNames.RequestResponseCode,propertyValuePath:["request",
0,"responseCode"]},{propertyName:r.DimensionNames.RequestDuration,propertyValuePath:["request",0,"durationMetric",
"value"]},]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topNMetadatas",{get:
function(){return[{propertyName:r.DimensionNames.RequestTime,propertyValuePath:["context","data","eventTime"],
transform:function(n){return new Date(n)}},{propertyName:r.DimensionNames.RequestName,propertyValuePath:
["request",0,"name"]},{propertyName:r.DimensionNames.RequestResponseCode,propertyValuePath:["request",
0,"responseCode"]},{propertyName:r.DimensionNames.SuccessfulRequest,propertyValuePath:["request",0,"success"]},
{propertyName:r.DimensionNames.RequestDuration,propertyValuePath:["request",0,"durationMetric","value"]},
{propertyName:r.DimensionNames.RequestUrl,propertyValuePath:["request",0,"url"]},{propertyName:"context.location.clientip.raw",
propertyValuePath:["context","location","clientip"]},{propertyName:r.DimensionNames.DeviceId,propertyValuePath:
["context","device","id"]},]},enumerable:!0,configurable:!0}),n}();t.RequestTypeInfo=c;l=function(){
function n(){this.eventType=2;this.eventName=e.getEventName(2);this.eventSummaryFieldKey="basicException.message";
this.eventValueName="basicException";this.postProcesser=this.postProcess}return Object.defineProperty(
n.prototype,"standardProperties",{get:function(){return[{propertyName:"eventTime",propertyValuePath:
["context","data","eventTime"],transform:function(n){return new Date(n)}},{propertyName:"name",propertyValuePath:
["basicException",0,"message"]},{propertyName:"id",propertyValuePath:["internal","data","id"]},{propertyName:
"sessionId",propertyValuePath:["context","session","id"]},]},enumerable:!0,configurable:!0}),Object.
defineProperty(n.prototype,"metadatas",{get:function(){return[{propertyName:"basicException.properties",
propertyValuePath:["basicException",0,"properties"]},{propertyName:"basicException.measurement",propertyValuePath:
["basicException",0,"measurement"]},{propertyName:"basicException.exceptionId",propertyValuePath:["basicException",
0,"id"]},{propertyName:"basicException.outerId",propertyValuePath:["basicException",0,"outerId"]},{propertyName:
"basicException.typeName",propertyValuePath:["basicException",0,"typeName"]},{propertyName:"basicException.message",
propertyValuePath:["basicException",0,"message"]},{propertyName:"basicException.hasFullStack",propertyValuePath:
["basicException",0,"hasFullStack"]},{propertyName:"basicException.stack",propertyValuePath:["basicException",
0,"stack"]},{propertyName:"basicException.parsedStack",propertyValuePath:["basicException",0,"parsedStack"]},
{propertyName:"basicException.handledAt",propertyValuePath:["basicException",0,"handledAt"]},{propertyName:
"basicException.severityLevel",propertyValuePath:["basicException",1,"severityLevel"]},{propertyName:
"basicException.problemId",propertyValuePath:["basicException",0,"problemId"]},{propertyName:"basicException.method",
propertyValuePath:["basicException",0,"method"]},{propertyName:"basicException.exceptionType",propertyValuePath:
["basicException",0,"exceptionType"]},{propertyName:"allExceptions",propertyValuePath:["basicException"],
transform:function(t){return n.populateAllExceptions(t)}},]},enumerable:!0,configurable:!0}),n.getInnerExceptionMetaData=
function(n){return n===void 0&&(n=0),[{propertyName:"basicException.properties",propertyValuePath:[n,
"properties"]},{propertyName:"basicException.measurement",propertyValuePath:[n,"measurement"]},{propertyName:
"basicException.exceptionId",propertyValuePath:[n,"id"]},{propertyName:"basicException.outerId",propertyValuePath:
[n,"outerId"]},{propertyName:"basicException.typeName",propertyValuePath:[n,"typeName"]},{propertyName:
"basicException.message",propertyValuePath:[n,"message"]},{propertyName:"basicException.hasFullStack",
propertyValuePath:[n,"hasFullStack"]},{propertyName:"basicException.stack",propertyValuePath:[n,"stack"]},
{propertyName:"basicException.parsedStack",propertyValuePath:[n,"parsedStack"]},{propertyName:"basicException.handledAt",
propertyValuePath:[n,"handledAt"]},{propertyName:"basicException.problemId",propertyValuePath:[n,"problemId"]},
{propertyName:"basicException.method",propertyValuePath:[n,"method"]},{propertyName:"basicException.exceptionType",
propertyValuePath:[n,"exceptionType"]},]},Object.defineProperty(n.prototype,"summaryMetadatas",{get:
function(){return[{propertyName:r.DimensionNames.ExceptionTypeName,propertyValuePath:["basicException",
0,"typeName"]},{propertyName:r.DimensionNames.ExceptionMethod,propertyValuePath:["basicException",0,
"method"]},{propertyName:r.DimensionNames.ExceptionProblemId,propertyValuePath:["basicException",0,"problemId"]},
{propertyName:r.DimensionNames.ExceptionSeverity,propertyValuePath:["basicException",1,"severityLevel"]},
]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topNMetadatas",{get:function()
{return[{propertyName:r.DimensionNames.RequestTime,propertyValuePath:["context","data","eventTime"],
transform:function(n){return new Date(n)}},{propertyName:r.DimensionNames.ExceptionMessage,propertyValuePath:
["basicException",0,"message"]},{propertyName:r.DimensionNames.ExceptionTypeName,propertyValuePath:[
"basicException",0,"typeName"]},{propertyName:r.DimensionNames.ExceptionMethod,propertyValuePath:["basicException",
0,"method"]},{propertyName:r.DimensionNames.ExceptionSeverity,propertyValuePath:["basicException",1,
"severityLevel"]},]},enumerable:!0,configurable:!0}),n.populateAllExceptions=function(t){var u=[],i,
r,f;if($.isArray(t))for(i=0;i<t.length;i++)r=new s,f=n.getInnerExceptionMetaData(i),f.forEach(function(
n){r.properties[n.propertyName]=h.getValue(t,n.propertyValuePath,n.transform)}),u.push(r);return u},
n.prototype.postProcess=function(n){var t,i;n&&$.isArray(n.properties.allExceptions)&&(t=n.properties.
allExceptions,t.forEach(function(t){t.eventTime=n.eventTime;t.eventType=n.eventType;t.id=n.id;t.sessionId=
n.sessionId;t.properties.allExceptions=undefined}),i=t.first(function(n){return n.properties["basicException.exceptionId"]===
"Representative"}),i&&t.remove(i))},n}();t.BasicExceptionTypeInfo=l;a=function(){function n(){this.eventType=
3;this.eventName=e.getEventName(3);this.eventValueName="view";this.eventSummaryFieldKey="view.name"}
return Object.defineProperty(n.prototype,"standardProperties",{get:function(){return[{propertyName:"eventTime",
propertyValuePath:["context","data","eventTime"],transform:function(n){return new Date(n)}},{propertyName:
"name",propertyValuePath:["view",0,"name"]},{propertyName:"id",propertyValuePath:["internal","data",
"id"]},{propertyName:"sessionId",propertyValuePath:["context","session","id"]},]},enumerable:!0,configurable:
!0}),Object.defineProperty(n.prototype,"metadatas",{get:function(){return[{propertyName:"view.properties",
propertyValuePath:["view",0,"properties"]},{propertyName:"view.measurement",propertyValuePath:["view",
0,"measurement"]},{propertyName:"view.responseCode",propertyValuePath:["view",0,"responseCode"]},{propertyName:
"view.success",propertyValuePath:["view",0,"success"]},{propertyName:"view.name",propertyValuePath:[
"view",0,"name"]},{propertyName:"view.durationMetric.value",propertyValuePath:["view",0,"durationMetric",
"value"]},{propertyName:"view.count",propertyValuePath:["view",0,"count"]},{propertyName:"view.url",
propertyValuePath:["view",0,"url"]},{propertyName:"view.urlData.host",propertyValuePath:["view",0,"urlData",
"host"]},{propertyName:"view.urlData.base",propertyValuePath:["view",0,"urlData","base"]},{propertyName:
"view.urlData.port",propertyValuePath:["view",0,"urlData","port"]},{propertyName:"view.urlData.hashTag",
propertyValuePath:["view",0,"urlData","hashTag"]},{propertyName:"view.urlData.protocol",propertyValuePath:
["view",0,"urlData","protocol"]},]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"summaryMetadatas",{get:function(){return[{propertyName:r.DimensionNames.ViewUrl,propertyValuePath:[
"view",0,"url"]},{propertyName:"view.durationMetric.value",propertyValuePath:["view",0,"durationMetric",
"value"]},{propertyName:"context.device.userAgent",propertyValuePath:["context","device","userAgent"]},
]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topNMetadatas",{get:function()
{return[{propertyName:r.DimensionNames.ViewUrl,propertyValuePath:["view",0,"url"]},{propertyName:r.DimensionNames.
BrowserVersion,propertyValuePath:["context","device","browserVersion"]},{propertyName:r.DimensionNames.
ScreenResolution,propertyValuePath:["context","device","screenResolution","value"]},{propertyName:r.
DimensionNames.LocationContinent,propertyValuePath:["context","location","continent"]},{propertyName:
r.DimensionNames.LocationCountry,propertyValuePath:["context","location","country"]},{propertyName:r.
DimensionNames.LocationProvince,propertyValuePath:["context","location","province"]},{propertyName:r.
DimensionNames.LocationCity,propertyValuePath:["context","location","city"]},{propertyName:"context.location.clientip.raw",
propertyValuePath:["context","location","clientip"]},{propertyName:r.DimensionNames.DeviceId,propertyValuePath:
["context","device","id"]},]},enumerable:!0,configurable:!0}),n}();t.PageViewTypeInfo=a;v=function()
{function n(){this.eventType=5;this.eventName=e.getEventName(5);this.eventValueName="event";this.eventSummaryFieldKey=
"event.name"}return Object.defineProperty(n.prototype,"standardProperties",{get:function(){return[{propertyName:
"eventTime",propertyValuePath:["context","data","eventTime"],transform:function(n){return new Date(n)}
},{propertyName:"name",propertyValuePath:["event",0,"name"]},{propertyName:"id",propertyValuePath:["internal",
"data","id"]},{propertyName:"sessionId",propertyValuePath:["context","session","id"]},]},enumerable:
!0,configurable:!0}),Object.defineProperty(n.prototype,"metadatas",{get:function(){return[{propertyName:
"event.measurement",propertyValuePath:["event",0,"measurement"]},{propertyName:"event.type",propertyValuePath:
["event",0,"type"]},{propertyName:"event.name",propertyValuePath:["event",0,"name"]},{propertyName:"event.duration",
propertyValuePath:["event",0,"durationMetric","count"]},{propertyName:"event.count",propertyValuePath:
["event",0,"count"]},{propertyName:"event.url",propertyValuePath:["event",0,"url"]},{propertyName:"event.urlData.host",
propertyValuePath:["event",0,"urlData","host"]},{propertyName:"event.urlData.base",propertyValuePath:
["event",0,"urlData","base"]},{propertyName:"event.urlData.port",propertyValuePath:["event",0,"urlData",
"port"]},{propertyName:"event.urlData.hashTag",propertyValuePath:["event",0,"urlData","hashTag"]},{propertyName:
"event.urlData.protocol",propertyValuePath:["event",0,"urlData","protocol"]},]},enumerable:!0,configurable:
!0}),Object.defineProperty(n.prototype,"summaryMetadatas",{get:function(){return[{propertyName:r.DimensionNames.
DeviceId,propertyValuePath:["context","device","id"]},{propertyName:"context.application.version",propertyValuePath:
["context","application","version"]},{propertyName:"context.device.os",propertyValuePath:["context",
"device","os"]},]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topNMetadatas",
{get:function(){return[{propertyName:r.DimensionNames.RequestTime,propertyValuePath:["context","data",
"eventTime"],transform:function(n){return new Date(n)}},{propertyName:r.DimensionNames.CustomEventName,
propertyValuePath:["event",0,"name"]},{propertyName:r.DimensionNames.DeviceId,propertyValuePath:["context",
"device","id"]},]},enumerable:!0,configurable:!0}),n}();t.CustomEventTypeInfo=v;y=function(){function n(
){this.eventType=4;this.eventName=e.getEventName(4);this.eventValueName="message";this.eventSummaryFieldKey=
"message.raw"}return Object.defineProperty(n.prototype,"standardProperties",{get:function(){return[{
propertyName:"eventTime",propertyValuePath:["context","data","eventTime"],transform:function(n){return new
Date(n)}},{propertyName:"name",propertyValuePath:["message",0,"raw"]},{propertyName:"id",propertyValuePath:
["internal","data","id"]},{propertyName:"sessionId",propertyValuePath:["context","session","id"]},]}
,enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"metadatas",{get:function(){return[
{propertyName:"message.raw",propertyValuePath:["message",0,"raw"]},{propertyName:"message.severityLevel",
propertyValuePath:["message",0,"severityLevel"]},]},enumerable:!0,configurable:!0}),Object.defineProperty(
n.prototype,"summaryMetadatas",{get:function(){return[{propertyName:r.DimensionNames.DeviceId,propertyValuePath:
["context","device","id"]},{propertyName:"message.severityLevel",propertyValuePath:["message",0,"severityLevel"]},
]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topNMetadatas",{get:function()
{return[{propertyName:r.DimensionNames.RequestTime,propertyValuePath:["context","data","eventTime"],
transform:function(n){return new Date(n)}},{propertyName:r.DimensionNames.DeviceId,propertyValuePath:
["context","device","id"]},{propertyName:r.DimensionNames.MessageRaw,propertyValuePath:["message",0,
"raw"]},{propertyName:"message.severityLevel",propertyValuePath:["message",0,"severityLevel"]},]},enumerable:
!0,configurable:!0}),n}();t.MessageTypeInfo=y;p=function(){function n(){this.eventType=6;this.eventName=
e.getEventName(6);this.eventValueName="remoteDependency";this.eventSummaryFieldKey="remoteDependency.durationMetric.name"}
return Object.defineProperty(n.prototype,"standardProperties",{get:function(){return[{propertyName:"eventTime",
propertyValuePath:["context","data","eventTime"],transform:function(n){return new Date(n)}},{propertyName:
"name",propertyValuePath:["remoteDependency",0,"durationMetric","name"]},{propertyName:"id",propertyValuePath:
["internal","data","id"]},{propertyName:"sessionId",propertyValuePath:["context","session","id"]},]}
,enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"metadatas",{get:function(){return[
{propertyName:"remoteDependency.type",propertyValuePath:["remoteDependency",0,"type"]},{propertyName:
"remoteDependency.url",propertyValuePath:["remoteDependency",0,"url"]},{propertyName:"remoteDependency.success",
propertyValuePath:["remoteDependency",0,"success"]},{propertyName:"remoteDependency.async",propertyValuePath:
["remoteDependency",0,"async"]},{propertyName:"remoteDependency.durationMetric.name",propertyValuePath:
["remoteDependency",0,"durationMetric","name"]},{propertyName:"remoteDependency.durationMetric.value",
propertyValuePath:["remoteDependency",0,"durationMetric","value"]},]},enumerable:!0,configurable:!0}),
Object.defineProperty(n.prototype,"summaryMetadatas",{get:function(){return[{propertyName:"remoteDependency.url",
propertyValuePath:["remoteDependency",0,"url"]},{propertyName:"remoteDependency.success",propertyValuePath:
["remoteDependency",0,"success"]},{propertyName:"remoteDependency.async",propertyValuePath:["remoteDependency",
0,"async"]},]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topNMetadatas",{get:
function(){return[]},enumerable:!0,configurable:!0}),n}();t.RemoteDependencyTypeInfo=p;k=function(){
function n(){this.haveMessageHighlight=!1;this.items=[]}return n.removeHighlightAndHtmlDecode=function(
t){if(t){var i=new RegExp(MsPortalFx.Util.regexEscape(n.startTag),"g"),r=new RegExp(MsPortalFx.Util.
regexEscape(n.endTag),"g");return n._decodeHTMLEntities(t.replace(i,"").replace(r,""))}},n._decodeHTMLEntities=
function(t){for(var i=0;i<n.__entities.length;++i)t=t.replace(n.__entities[i].entityRe,n.__entities[
i].strVal);return t},n.startTag='<span class="msportalfx-highlight">',n.endTag="<\/span>",n.__entities=
[{entityRe:/&apos;/g,strVal:"'"},{entityRe:/&amp;/g,strVal:"&"},{entityRe:/&lt;/g,strVal:"<"},{entityRe:
/&gt;/g,strVal:">"},{entityRe:/&quot;/g,strVal:">"},{entityRe:/&#x2F;/g,strVal:"/"},{entityRe:/&nbsp;/g,
strVal:" "},],n}();t.Highlights=k;d=function(){function n(){}return n}();t.SearchResultRow=d;w=function(
){function n(){}return n}();t.SearchDetailRow=w;g=function(){function n(){this.isMessage=!1}return n}
();t.SummaryField=g;nt=function(){function n(){}return n.SearchResultsPerPage=100,n}();t.SearchResults=
nt;tt=function(){function n(){}return n.transformEvents=function(t){var f=new n,i=u.SearchQueryBase.
getResult(t),e,r,o,s;if(i&&i.total!==undefined&&(f.totalCount=i.total,f.items=[],i.hits&&$.isArray(i.
hits)))for(e=0;e<i.hits.length;e++)r=i.hits[e],r&&r.document&&(o=new w,s=h.CreateSummary(r.document,
null),s&&(o.summary=s),o.document=r.document,f.items.push(o));return f},n}();t.SearchDetailResult=tt}
);define("Search/DataModels/CustomPropertyHelper",["require","exports","../../Shared/DataModels/EventType",
"../../Shared/InsightsTelemetry"],function(n,t,i,r){"use strict";function s(n){var t=[];return n&&(u(
n.customDimensions,t),u(n.customMetrics,t)),t}function u(n,t){var i=null,r,u;if($.isArray(n))for(r=0;
r<n.length;r++)i=n[r],i.name&&i.value!==undefined&&t.push({propertyName:i.name,propertyValue:i.value})
else for(u in n)i=n[u],i&&i.name&&i.value!==undefined?t.push({propertyName:i.name,propertyValue:i.value}):
typeof u=="string"&&t.push({propertyName:u,propertyValue:i})}function h(n,t){for(var i=n,r=0;r<t.length;
r++){if(i===undefined)break;i=i[t[r]]}return i}function c(n){return n?i.Constants.getCustomFormattedProperties(
).filter(function(t){return n.hasOwnProperty(t.name)}):[]}function l(n,t,i,u,e,o,s){var h,c,l;if(s===
void 0&&(s=null),n[i]!==undefined){h=n[i];try{typeof h=="string"&&(h=JSON.parse(n[i]));c=t;l=e?i:null;
l&&(c=c?c+"."+l:l);h&&f(c,h,u,o,s)}catch(a){r.logException(a,1,r.AITelemetryConstants.SearchResultDetailsPart,
undefined)}}}function o(n){return n&&typeof n=="object"?!1:!0}function f(n,t,i,r,u){var f,s,o;if(u===
void 0&&(u=null),t&&i)if($.isArray(t))for(f=0;f<t.length;f++)s=r?f.toString():null,e(n,t,f,s,i,r,u);
else for(o in t)e(n,t,o,o,i,r,u)}function e(n,t,i,r,u,e,s){var c,h,l,a;(s===void 0&&(s=null),c=r?n+"."+
r.toString():n,n||(c=r.toString()),h=t[i],s&&s.indexOf(c)>=0)||(o(h)?(l=typeof h=="object"?h?h.toString(
):"null":h.toString(),a={propertyName:c,propertyValue:l},u.push(a)):f(c,h,u,e))}t.GetFlatListOfProperties=
s;t.AddNameValueProperties=u;t.getValue=h;t.GetCustomFormattedProperties=c;t.AddFlatListProperties=l;
t.isLeafNode=o;t.addPropertiesToList=f;t.processSubNode=e});define("Search/ViewModels/TopNControlViewModel",
["require","exports","../../_generated/ExtensionDefinition"],function(n,t,i){"use strict";var r=function(
){function n(n,t,i){this.hasMoreData=ko.observable();var r=ko.observableArray();this.gridViewModel=new
MsPortalFx.ViewModels.Controls.Lists.Grid.ViewModel(n,r,MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.
ContextMenuShortcut|MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.SelectableRow,this._getGridOptions(
));this.gridViewModel.columns=ko.observableArray(this.getDefaultColumnDefinitions());this.updateOptions(
t);this.gridViewModel.showHeader=this.options.showHeader?!0:!1;this.selectable=new MsPortalFx.ViewModels.
Selectable(!0);this.selectedItem=i?i:ko.observable()}return n.prototype._getGridOptions=function(){var
n=this;return{selectableRow:{selectionMode:1,itemMatchesSelection:function(n,t){return n.key===t.key}
,createSelection:function(t){return n.selectedItem({canonicalKey:t.canonicalKey,value:t.canonizedValue,
name:t.displayName,facetKey:t.facetKey}),t}}}},n.prototype.updateItems=function(n){if(!n||n.length===
0){this.gridViewModel.items.removeAll();this.hasMoreData(!1);return}this.hasMoreData(!0);var t=this.
compare?n.stableSort(this.compare):n,r=this.options.visibleItemsCount>0?t.slice(0,this.options.visibleItemsCount):
t;r.forEach(function(n){n.commandGroup=i.CommandGroupNames.eventPropertiesCommands});this.gridViewModel.
items(r)},n.prototype.updateOptions=function(n){var t=this,i=$.extend({},this.options,n);this.options?
this.options=i:Object.defineProperty(this,"options",{value:i,writable:!0});this.options.itemComparisonFunction?
this.compare=this.options.itemComparisonFunction:this.options.itemRankingFunction&&(this.compare=function(
n,i){return t.options.itemRankingFunction(n)-t.options.itemRankingFunction(i)})},n.prototype.getDefaultColumnDefinitions=
function(){return[{itemKey:"displayName",name:ko.observable("displayName"),width:ko.observable("25%")},
{itemKey:"infoBalloonVM",name:ko.observable("infoBalloonVM"),width:ko.observable("5%"),format:1e3,formatOptions:
{htmlBindingsTemplate:"<div data-bind='if: value'><span data-bind='pcDockedBalloon: value'><\/span><\/div>"}},
{itemKey:"value",name:ko.observable("value"),width:ko.observable("70%"),format:1e3,formatOptions:{htmlBindingsTemplate:
"<div class='ext-wrapping-text msportalfx-wordbreak-breakall'><span data-bind='text: value'><\/span><\/div>"}}]}
,n}();t.TopNControlViewModel=r});define("Search/ViewModels/RelatedDetailsPartViewModel",["require","exports",
"../../Shared/InsightsTelemetry","../../Shared/DataModels/SearchFilterInputModel","../../Shared/DataModels/SearchDataNavigator",
"../../Shared/DataQueries/Search.DataSource"],function(n,t,i,r,u,f){"use strict";var e=function(){function n(
n,t,u){var f=this;this._container=n;this._dataContext=t;this._attributeMetadataContainer=u;this._componentId=
ko.observable();this._eventId=ko.observable();this._event=ko.observable();var e=ko.observableArray(),
o=MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.SelectableRow,s={selectableRow:{selectionMode:
1,activateOnSelected:ko.observable(!0),itemMatchesSelection:function(n,t){return n.name===t.name},createSelection:
function(n){return n.searchFilter(r.SearchFilterInputModel.clone(n.searchFilter(),!0)),n},rowSelect:
function(n,t){t&&t.selected&&t.selected.item&&i.logCustomEvent(i.AITelemetryConstants.SelectRelatedItem,
1,i.AITelemetryConstants.RelatedItemsPart,f._componentId(),{selectedItem:t.selected.item.telemetryKey,
eventId:f._eventId().id,eventType:r.getEventTypeDisplayName(f._eventId().eventType)})}}};this.gridViewModel=
new MsPortalFx.ViewModels.Controls.Lists.Grid.ViewModel(n,e,o,s);this.gridViewModel.showHeader=!1;this.
gridViewModel.columns=ko.observableArray(this.getDefaultColumnDefinitions())}return n.prototype.updateItems=
function(n,t,r){var e=this,s,o,h;return this.gridViewModel.items.removeAll(),this._eventId(n),this._event(
t),this._componentId(n?n.componentId:null),s=$.Deferred(),o=[],t&&r&&(h=[],r.forEach(function(n){var
r,t,s;n.timeContext.endTime=n.timeContext.endTime||new Date;r=new Date(n.timeContext.endTime.getTime(
)-n.timeContext.durationMs);n.count.subscribe(e._container,function(t){var i=e.gridViewModel.getRowMetadata(
n);i&&i.disabled(t<=0)});t=new u.SearchDataNavigator(e._container,n.searchFilter,n.count,ko.observable(
),e._dataContext.sharedDataContext,e._attributeMetadataContainer);s=new f.SearchResultsQuery(e._componentId(
),i.AITelemetryConstants.RelatedItemsPart,null,[],r,n.timeContext.endTime,n.searchFilter().typeFacets,
n.searchFilter().customFilter,e._attributeMetadataContainer,!1);h.push(t.setQuery(s).finally(function(
){t.loadBySkipTake(0,1,null)}));o.push(n)}),Q.allSettled(h).finally(function(){return s.resolve()})),
this.gridViewModel.items(o),o.length===0?s.resolve():o.forEach(function(n){var t=e.gridViewModel.getRowMetadata(
n);t&&t.disabled(!0)}),s},n.prototype.getDefaultColumnDefinitions=function(){return[{itemKey:"icon",
name:ko.observable("icon"),width:ko.observable("32px"),format:111},{itemKey:"name",width:ko.observable(
"80%"),name:ko.observable("name")},{itemKey:"count",width:ko.observable("15%"),name:ko.observable("count"),
format:1e3,formatOptions:{htmlBindingsTemplate:"<span data-bind='text: value()' style='float: right; text-align: right; padding-right: 8px'><\/span>"}},
{itemKey:"infoBalloon",width:ko.observable("5%"),name:ko.observable("info"),format:1e3,formatOptions:
{htmlBindingsTemplate:"<div data-bind='if: value'><div data-bind='pcDockedBalloon: value'><\/div><\/div>"}}]}
,n}();t.RelatedDetailsPartViewModel=e});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Shared/DataModels/SearchDataNavigator",["require","exports","../InsightsTelemetry","../Enumerations",
"../DataModels/SearchFilterInputModel","../MetricsMetadataContainer","../Logging","ClientResources",
"./EventType"],function(n,t,i,r,u,f,e,o,s){"use strict";var h=function(){function n(n,t,i,r,u){this.
_searchResultsView=t;this._currentFilter=i;this._searchFailedMessage=r;this._skipCount=u}return n.prototype.
loadBySkipTake=function(n,t,i,r){var f=this,h=[],c=$.Deferred();return t&&t._attributeMetadataContainer&&
t._attributeMetadataContainer.getMetadataPromise().finally(function(){var n=t._attributeMetadataContainer.
getAllMetadataMap();f._currentFilter().eventTypes.forEach(function(i){var l=u.filterTypeFacetsByEventType(
u.getEventName(i),f._currentFilter(),n),o=t,c;o.addEventType(s.Constants.getEventTypeInfos()[i].eventName,
!0);o.queryParams={$skip:f._skipCount[i].toString(),$top:r.toString()};o.addFacetFilters(l,t._attributeMetadataContainer);
c=f._searchResultsView[i].fetch(o);h.push(c);c.catch(function(n){e.errorConsole(n,"SearchDataNavigatorOptions.loadByContinuationToken")}
)});Q.allSettled(h).then(function(n){if(n){var t=!0,i=n.every(function(n){return n&&n.state==="rejected"?
(n.reason&&n.reason.status===500||(t=!1),!0):!1});i&&(t?f._searchFailedMessage(o.searchGridInvalidSearchQuery):
f._searchFailedMessage(o.searchGridFailedSearchQuery))}c.resolve()})}),c.promise()},n.prototype.loadByContinuationToken=
function(){return null},n}(),c;t.SearchDataNavigatorOptions=h;c=function(n){function t(t,u,e,o,c,l){
var a=this,v;this._skipCount={length:s.Constants.EventsListSize};for(v in r.EventType)this._skipCount[
v]=0;this._searchResultsView={length:s.Constants.EventsListSize};ko.reactor(t,function(){u().eventTypes.
forEach(function(n){a._searchResultsView[n]||(a._searchResultsView[n]=c._searchResultsEntityCache.createView(
t))})});this._currentFilters=u;this._searchDataNavigatorOptions=new h(t,this._searchResultsView,u,o,
this._skipCount);this._attributeMetadataContainer=l;this._metricsMetadataContainer=new f.MetricsMetadataContainer(
t,c);this.items=ko.observable();this.metadata=ko.observable({});this.totalCount=e;n.call(this,t,this.
items,this.metadata,this._searchDataNavigatorOptions);this._resetRequested=!0;this.loadBySkipTake=function(
t,u,f){return a._resetRequested||i.logCustomEvent("Load More Pressed",1,i.AITelemetryConstants.SearchControlPart,
undefined),a._resetRequested=!1,n.prototype.loadBySkipTake.call(a,t,u,f).then(function(){var t=a.mergeEventResults(
),n=0;for(var i in r.EventType)n=n+a._skipCount[i];a.metadata({totalItemCount:a.totalCount()});a._updateGrid(
t)})};this.setQuery=function(t){for(var i in r.EventType)a._skipCount[i]=0;if(a._metricsMetadataContainer.
getMetadataPromise()===undefined)a._metricsMetadataContainer.onInputsSet({ComponentId:t._componentId});
return a._resetRequested=!0,a.metadata({}),n.prototype.setQuery.call(a,t)}}return __extends(t,n),t.prototype.
mergeEventResults=function(){var u=this,n={length:s.Constants.EventsListSize},f=[],e=0,h=!0,i=[],t={
length:s.Constants.EventsListSize},o,r;if(this._currentFilters().eventTypes.forEach(function(r){t[r]=
0;u._searchResultsView[r].item()&&(h=!1,n[r]=u._searchResultsView[r].item().items,e=e+u._searchResultsView[
r].item().totalCount,e>0&&i.push(r))}),h)return null;if(this.totalCount(e),i.length===1||i.filter(function(
t){return n[t]&&n[t].length>0}).length<2)o=i.first(function(t){return n[t]&&n[t].length>0}),o&&(f=n[
o],t[o]=f.length);else if(n)while(i.every(function(i){return n[i][t[i]]!==undefined})||i.some(function(
i){return n[i][t[i]]!==undefined})&&f.length<100)r=i.reduce(function(i,r){var u=n[i]?n[i][t[i]]:null,
f=n[r]?n[r][t[r]]:null;return u&&u.result.eventTime&&f&&f.result.eventTime?u.result.eventTime>f.result.
eventTime?i:r:(!u||!u.result.eventTime)&&(n[i]&&n[i].remove(n[i][t[i]]),f&&f.result.eventTime)?r:(!f||
!f.result.eventTime)&&(n[r]&&n[r].remove(n[r][t[r]]),u&&u.result.eventTime)?i:null}),r&&(f.push(n[r][
t[r]]),t[r]=t[r]+1);return this._currentFilters().eventTypes.forEach(function(n){return u._skipCount[
n]=u._skipCount[n]+t[n]}),f},t.prototype._updateGrid=function(n){var i=this,t;n&&n.length>0?(t=this.
_metricsMetadataContainer.getMetadataPromise(),t?t.finally(function(){n.forEach(function(n){n.result.
fields.forEach(function(n){return i._updateSummaryField(n)})});i.items(n)}):this.items(n)):n?this.items(
[]):this.items(null)},t.prototype._updateSummaryField=function(n){var t=this._metricsMetadataContainer.
getMetadata(n.property),r,u,i;t&&(t.Unit&&t.Scale!==1&&(r=Number(n.value),r&&(u=r*t.Scale,n.value=Math.
round(u*100)/100+t.Unit)),t.DisplayName&&(n.property=t.DisplayName));i=this._attributeMetadataContainer.
getMetadata(n.property);i&&i.DisplayName&&(n.property=i.DisplayName)},t}(MsPortalFx.Data.RemoteDataNavigator);
t.SearchDataNavigator=c});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(
var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/DataQueries/Search.DataSource",
["require","exports","../Constants","../TimeContext","../SearchQueryBase","../QueryBase","../DataModels/EventType"],
function(n,t,i,r,u,f,e){"use strict";var o=function(n){function t(t,f,o,s,h,c,l,a,v,y){var p=this;n.
call(this,t,f,i.Queries.SearchResults);this._payload={};this._attributeMetadataContainer=v;s&&s.forEach(
function(n){return p.addEventType(n)});o=u.CreateAndStatement(o,a);this.setQueryText(o);y!==undefined?
this.setIncludeDocumentsInResult(y):this.setIncludeDocumentsInResult(!0);this.timeContext=r.fromTimeRange(
h,c);this.setHighlightSettings(e.Highlights.startTag,e.Highlights.endTag);this.addFacetFilters(l,v)}
return __extends(t,n),t.prototype.getSearchRequestPayload=function(){return this._payload},t.prototype.
setHighlightSettings=function(n,t,i){(!i||i<0)&&(i=150);this._payload.Highlight={PreTags:[n],PostTags:
[t],Fields:[{Name:"*",FragmentSize:i}]}},t.prototype.setIncludeDocumentsInResult=function(n){this._payload.
IncludeDocumentsInResult=n},t.getKey=function(n){var t=n._payload,u=null,e=null,o,s,h,c,l,a,v;return n.
timeContext&&(o=r.toTimeRange(n.timeContext),e=";{dimension={0};Start={1};End={2}}".format(i.DimensionNames.
RequestTime,o.startTime.toISOString(),o.endTime.toISOString())),t.DimensionFilters&&(u=t.DimensionFilters.
map(function(n){return n.Dimension.Key}).join(";"),e&&(u+=e)),s="",t.Query&&(s=";query={text={0}}".format(
t.Query.Text)),h="",t.Streams&&(h=";streams=[{0}]".format(t.Streams.join(","))),c="",t.IncludeDocumentsInResult!==
undefined&&(c=";IncludeDocumentsInResult={0}".format(t.IncludeDocumentsInResult)),l="",t.Highlight!==
undefined&&(a="",t.Highlight.Fields&&(a=";Fields=[{0}]".format(t.Highlight.Fields.map(function(n){return"{Name={0};FragmentSize={1}}".
format(n.Name,n.FragmentSize)}).join(","))),l=";Highlight={PreTags=[{0}];PostTags=[{1}]{2}}".format(
t.Highlight.PreTags.join(","),t.Highlight.PostTags.join(","),a)),v=f.getKey(n),v+";payload={dimensionFilter={0};{1}{2}{3}{4}}".
format(u,s,h,c,l)},t}(u.SearchQueryBase);t.SearchResultsQuery=o});__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("Search/DataSources/SearchDetailsQuery",["require","exports","../../Shared/Constants",
"../../Shared/TimeContext","../../Shared/SearchQueryBase","../../Shared/DateUtils","../../Shared/DataModels/EventType"],
function(n,t,i,r,u,f,e){"use strict";var o=function(n){function t(t,u,o,s,h){n.call(this,t,u,i.Queries.
SearchDetails);this._payload={};this.addEventType(e.Constants.getEventTypeInfos()[o].eventName);this.
setQueryText('internal.data.id:"{0}"'.format(s));this.queryParams={$top:"1"};this.setIncludeDocumentsInResult(
!0);this.timeContext=h?new r.TimeContext(i.Durations.OneMinute,f.addSeconds(h,30)):new r.TimeContext(
i.Durations.OneWeek,null,null,!0)}return __extends(t,n),t.prototype.getSearchRequestPayload=function(
){return this._payload},t.prototype.setIncludeDocumentsInResult=function(n){this._payload.IncludeDocumentsInResult=
n},t.getKey=function(n){var t=n._payload,i="query={text={0}}".format(t.Query.Text),r="streams=[{0}]".
format(t.Streams.join(","));return"{0};{1}".format(i,r)},t}(u.SearchQueryBase);t.SearchDetailsQuery=
o});define("Search/DataModels/SearchInput",["require","exports","../../Shared/TimeContext","../../Shared/DataModels/SearchFilterInputModel",
"../../Shared/Constants","../../Shared/InsightsTelemetry"],function(n,t,i,r,u,f){"use strict";function c(
n,t,u,o,s,h){var c=!1,a,l;return n.refreshSearch?!0:(n.CurrentTimeSelection&&!i.equals(t(),n.CurrentTimeSelection)&&
(t(n.CurrentTimeSelection),f.logCustomEvent(f.AITelemetryConstants.TimeRangeChangedEventName,h,s,n.ComponentId),
c=!0),n.CurrentFilter&&n.CurrentFilter.eventTypes&&n.CurrentFilter.eventTypes.length>0&&!r.FiltersEqual(
u(),n.CurrentFilter)&&(!u()||n.CurrentFilter.createdTime>u().createdTime)&&(u(n.CurrentFilter),c=!0),
(n.SearchString||o()&&!n.SearchString)&&(a=e(o()),l=e(n.SearchString),a.searchQuery!==l.searchQuery&&
(o(l.forView),f.logCustomEvent(f.AITelemetryConstants.SearchStringChanged,h,s,n.ComponentId,{SearchString:
l.searchQuery}),c=!0)),c)}function e(n){var f;if(!n)return{searchQuery:"",forView:""};for(var c=n.replace(
s,':"$1\'$2"'),e=[],h=[],i=null;null!=(i=o.exec(c));){for(var t=0,r="",u="",t=1;t<=4;t++)if(i[t]!==undefined)
{r+=(t===2||t===3?"'{0}':":"{0}:").format(i[t]);u+=(t===2||t===3?'"{0}":':"{0}:").format(i[t]);break}
for(t=5;t<=8;t++)if(i[t]!==undefined){f=(t===6||t===7?'"{0}"':"{0}").format(i[t]);r+=f;u+=f;break}i[
9]!==undefined&&(r+=i[9],u+=i[9]);e.push(r);h.push(u)}return{searchQuery:e.join(" "),forView:h.join(
" ")}}function l(n,t){return'"{0}":"{1}"'.format(n,t)}function a(n){var t=u.SearchAllToken;return n!==
undefined&&n.length!==0&&(t=e(n).searchQuery),t}function v(n){var t=e(n);return t?t.forView===u.SearchAllToken?
"":t.forView:n}var h=function(){function n(){}return n}(),o,s;t.SearchInput=h;t.checkNeedsReset=c;o=
/(?:(?:([\w]+\.[\w]+)|"([\w ]+)"|'([\w ]+)'|([\w]+)):(?:[\s]*(?:(\w[\w?*]+)|'([^']+)'|"((?:[^"\\]|\\.)*)"|((?:[\[\{\(][^\]\}\)]+[\]\}\)])|(?:["'][^"']+["'])))))|("(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[-+]?(["][^"]*["]|['][^']*[']|[\(][^\)]*[\)]|[\{][^\}]*[\}]|[\[][^\]]*[\]])|-?\b[\S]+(?:\?*|\*)|\))/g;
s=/:[\s]*'([^']+)\\'([^']+)'/;t.parseAndNormalizeSearchString=e;t.formatSimpleSearchQuery=l;t.getQueryStringFromDisplayString=
a;t.getDisplayStringFromQueryString=v});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Shared/CommonControls/DataModels/SegmentationSummaryQuery",["require","exports","../../ChartUtils",
"../../Constants","../../Enumerations","../../DataQueries/SegmentationSummaryQueryBase","./MetricsExplorerQueryBase"],
function(n,t,i,r,u,f,e){"use strict";var o=function(n){function t(t,f,o,s,h,c,l,a,v,y){var w,p,b;h===
void 0&&(h=null);c===void 0&&(c=null);l===void 0&&(l=null);a===void 0&&(a=null);v===void 0&&(v={});y===
void 0&&(y=i.Instance());w=!1;c?(p=c,w=!0):p=u.Aggregation[o.metrics().first().metricAggregation];b=
l?u.Aggregation[l].toLowerCase():u.Aggregation[p].toLowerCase();n.call(this,t,f,r.Queries.SegmentationSummary,
o.metrics(),[o.grouping().dimension],p,b,null,h,w,a,v);this.timeContext=s;e.MetricsExplorerQueryBase.
addTimeFilter(this,t,s,!0,y)}return __extends(t,n),t.segementationSummaryTransform=function(n,t){var
i,r;return t&&(i=f.SegmentationSummaryQueryBase.transform(n,t),t._groupings&&t._groupings.length===1)?
(r=t._groupings[0],i[r]?i[r]:[]):[]},t.prototype.includeTimeRangeFilter=function(){return!1},t}(f.SegmentationSummaryQueryBase);
t.SegmentationSummaryQuery=o});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Shared/DataQueries/SegmentationSummaryQueryBase",["require","exports","./AggregateQuery","../Constants",
"../InsightsTelemetry","../Enumerations","ClientResources"],function(n,t,i,r,u,f,e){"use strict";var
o=function(n){function t(t,i,e,o,s,h,c,l,a,v,y,p){var w=this;c===void 0&&(c="");l===void 0&&(l=null);
a===void 0&&(a=null);v===void 0&&(v=!1);y===void 0&&(y=null);p===void 0&&(p={});n.call(this,t,i,r.Queries.
SegmentationSummary);this._metrics=o;this._groupings=s;this._aggregationFunction=h;this._orderByAggregation=
c;this._isExplicitAggregation=v;this.addFacetFilters(p,y);this._attributesMetadata=y;l&&this.setQueryText(
l);s.forEach(function(n){w.addAggregateByDimension(n,null,a)});o.forEach(function(n){var t;w._isExplicitAggregation&&
w._aggregationFunction?t=f.Aggregation[w._aggregationFunction].toString():n.hasOwnProperty("metricAggregation")&&
n.metricAggregation!==""?t=n.metricAggregation:w._aggregationFunction?(u.logError("In SegmentationSummaryQueryBase: Metric {0} is missing metricAggregaion property, uses dataModel aggregation:".
format(n.id),3,i,w._componentId),t=f.Aggregation[w._aggregationFunction].toString()):(u.logError("In SegmentationSummaryQueryBase: Metric {0} is missing metricAggregaion property, also missing dataModel aggregation, uses default aggregation (Sum):".
format(n.id),3,i,w._componentId),t=f.Aggregation[1].toString());w.addMetricsToCalculate(n.id,t)})}return __extends(
t,n),t.transform=function(n,i){var f,o,r,e;if(!i)return{};f=null;try{o=n.d.results.value;f=JSON.parse(
o)}catch(s){return u.logException(s,3,i._containerName,i._componentId),{}}return(r=t._extractList(f,
i._metrics,i._aggregationFunction,i._groupings,i._isExplicitAggregation,i._attributesMetadata),i._metrics&&
i._metrics.length>1)?r:(e={},r&&Object.keys(r).length>0?Object.keys(r).forEach(function(n){r[n]?e[n]=
r[n].sort(function(n,t){return t[i._orderByAggregation]-n[i._orderByAggregation]}):u.logError("Metric "+
i._metrics[0].id+" does not exist in the result when getting data",3,i._containerName,i._componentId)}
):u.logError("Metric "+i._metrics[0].id+" does not exist in the result when getting data",3,i._containerName,
i._componentId),e)},t._getMetricResultKey=function(n){return"{0}.{1}".format(n.id,n.metricAggregation)}
,t._getInternalMetricKey=function(n){var t=f.Aggregation[n.metricAggregation]===f.Aggregation[7]?f.Aggregation[
4]:f.Aggregation[n.metricAggregation];return"{0}.{1}".format(n.id,f.Aggregation[t])},t._extractList=
function(n,i,r,u,o,s){var c=this,h,l;return o===void 0&&(o=!1),s===void 0&&(s=null),h=null,l={},n&&n.
aggregations&&u&&u.forEach(function(u){var b,w,a,k,y,p,v,d,g;if(n.aggregations[u]&&n.aggregations[u].
buckets)for(h=[],b=n.aggregations[u].buckets,w=0;w<b.length;w++)a=b[w],k=a.key,s&&(k=s.tryGetDisplayNameFromDimensionValue(
u,a.key)),y={attribute:k},y.attribute===""&&(y.attribute=e.noName),p=!1,i&&i.length!==0?t._isMultiMetrics(
i)?(y.multiGridMetricValues=[],i.forEach(function(n){v=c._getMetricResultKey(n);var t;t=n.metricAggregation===
f.Aggregation[7]?a[v]===undefined?e.columnValueNoData:a[v].avg===null?e.columnValueNoData:a[v].avg:a[
v]===undefined||a[v].value==null?e.columnValueNoData:a[v].value;y.multiGridMetricValues.push({metric:
c._getInternalMetricKey(n),value:t});p=!0})):i.forEach(function(n){var t=o?f.Aggregation[r[0]].toString(
):n.metricAggregation;v=c._getMetricResultKey(n);a[v]&&(t===f.Aggregation[7]?(y.count=a[v].count,y.min=
a[v].min,y.max=a[v].max,y.avg=a[v].avg,y.sum=a[v].sum,y.sum_of_squares=a[v].sum_of_squares,y.variance=
a[v].variance,y.std_deviation=a[v].std_deviation,p=!0):a[v].value&&(y[t.toLowerCase()]=a[v].value,p=
!0))}):(d=f.Aggregation[r],g=d.toLowerCase(),y[g]=a.doc_count,p=!0),p&&h.push(y);l[u]=h}),l},t._isMultiMetrics=
function(n){if(n.length>1){var t=n[0].id;return n.some(function(n){return n.id!==t})}return!1},t}(i.
AggregateQuery);t.SegmentationSummaryQueryBase=o});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Shared/CommonControls/DataModels/MetricsExplorerQueryBase",["require","exports","../../DataQueries/AggregateQuery",
"../../Constants","../../ChartUtils"],function(n,t,i,r,u){"use strict";var f=function(n){function t(
i,r,f,e,o,s){o===void 0&&(o=!0);s===void 0&&(s=u.Instance());n.call(this,i,r,f);this.timeContext=e;t.
addTimeFilter(this,i,e,o,s)}return __extends(t,n),t.prototype.includeTimeRangeFilter=function(){return!1}
,t.addTimeFilter=function(n,t,i,f,e){f===void 0&&(f=!0);e===void 0&&(e=u.Instance());var o=e.getXAxisRange(
t,i),s=f?e.snapTimeRangeToGrain(o):o;n._payload.DimensionFilters||(n._payload.DimensionFilters=[]);n.
_payload.DimensionFilters.push({Dimension:{Key:r.DimensionNames.RequestTime},Start:s.startTime.toISOString(
),End:s.endTime.toISOString()})},t}(i.AggregateQuery);t.MetricsExplorerQueryBase=f});define("Shared/CommonControls/ViewModels/MetricsExplorerChartNoDataHelper",
["require","exports","../../Constants","ClientResources","../../../Shared/NoDataHelper"],function(n,
t,i,r,u){"use strict";var f=function(){function n(n,t,i,r){this._noDataCallback=r;this._dataStatus=undefined;
this._hasDataCallback=null;this._isActive=!0;this.reinitialize(n,t,i)}return n.prototype.reinitialize=
function(n,t,r){this._dataModel=n;this._noDataHelper=this._dataModel.noDataHelperKind===i.MetricsExplorerChartNoDataHelperKind.
PageViews?r.pageViewsNoDataHelperFactory.createNoDataHelper(t,this):this._dataModel.noDataHelperKind===
i.MetricsExplorerChartNoDataHelperKind.Requests?r.requestsNoDataHelperFactory.createNoDataHelper(t,this):
this._dataModel.noDataHelperKind===i.MetricsExplorerChartNoDataHelperKind.RemoteDependencies?r.remoteDependenciesNoDataHelperFactory.
createNoDataHelper(t,this):this._dataModel.noDataHelperKind===i.MetricsExplorerChartNoDataHelperKind.
PerfCounters?r.perfCountersNoDataHelperFactory.createNoDataHelper(t,this):this._dataModel.noDataHelperKind===
i.MetricsExplorerChartNoDataHelperKind.CustomEvents?r.customEventsNoDataHelperFactory.createNoDataHelper(
t,this):this._dataModel.noDataHelperKind===i.MetricsExplorerChartNoDataHelperKind.Crashes?r.crashesNoDataHelperFactory.
createNoDataHelper(t,this):this._dataModel.noDataHelperKind===i.MetricsExplorerChartNoDataHelperKind.
DefaultSkipRetryNoDataQuery?u.NoDataHelperFactory.createDefaultSkipRetryNoDataQueryHelper(this,i.AggregateEndpointNotProvisionedCode):
null},n.prototype._fetchDefaultNoDataMessage=function(n){var i=!0,t;return n&&this._dataModel.notProvisionedMessage&&
(i=!1),t=null,i&&(t=this._dataModel.noDataMessage,t||(t=r.noDataInGivenTimePeriod)),t},n.prototype.unadvise=
function(){this._isActive=!1;this._noDataHelper=null;this._hasDataCallback=null},n.prototype.wrapQuery=
function(n,t,i){return this._noDataHelper!==null&&i!==null?(this._hasDataCallback=t,this._noDataHelper.
runQueries(n,i)):(this._hasDataCallback=null,i)},n.prototype.getBladeAction=function(){var n;return this.
_dataStatus===1&&this._dataModel.noDataBlade?(n={bladeName:this._dataModel.noDataBlade},this._dataModel.
noDataBladeInputs&&(n.bladeInputs=$.extend({},this._dataModel.noDataBladeInputs))):this._dataStatus===
2&&this._dataModel.notProvisionedBlade?(n={bladeName:this._dataModel.notProvisionedBlade},this._dataModel.
notProvisionedBladeInputs&&(n.bladeInputs=$.extend({},this._dataModel.notProvisionedBladeInputs))):this.
_dataModel.defaultBlade&&(n={bladeName:this._dataModel.defaultBlade},this._dataModel.defaultBladeInputs&&
(n.bladeInputs=$.extend({},this._dataModel.defaultBladeInputs))),n},n.prototype.isEmpty=function(){return this.
_hasDataCallback!==null&&!this._hasDataCallback()},n.prototype.onHasData=function(){this._isActive&&
this._dataStatus!==0&&(this._dataStatus=0,this._noDataCallback.onBladeActionChanged())},n.prototype.
onNotProvisioned=function(){this._isActive&&(typeof this._dataModel.notProvisionedMessage=="string"?
this._noDataCallback.setNoDataMessage(this._dataModel.notProvisionedMessage,2):this._noDataCallback.
setNoDataMessage(null,2),this._dataStatus!==2&&(this._dataStatus=2,this._noDataCallback.onBladeActionChanged(
)))},n.prototype.onNoData=function(){this._isActive&&(typeof this._dataModel.noDataMessage=="string"?
this._noDataCallback.setNoDataMessage(this._dataModel.noDataMessage,1):this._noDataCallback.setNoDataMessage(
null,1),this._dataStatus!==1&&(this._dataStatus=1,this._noDataCallback.onBladeActionChanged()))},n.prototype.
onBackendErrorReceived=function(){this._isActive&&(this._noDataCallback.setNoDataMessage(r.errorRetrievingData,
3),this._dataStatus!==3&&(this._dataStatus=3))},n}(),e;t.MetricsExplorerChartNoDataHelper=f,function(
n){n[n.HasData=0]="HasData";n[n.NoData=1]="NoData";n[n.NotProvisioned=2]="NotProvisioned";n[n.ErrorRetrievingData=
3]="ErrorRetrievingData"}(t.ChartDataStatus||(t.ChartDataStatus={}));e=t.ChartDataStatus});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/CommonControls/DataModels/RequestSummaryQuery",
["require","exports","../../InsightsTelemetry","../../Constants","../../Enumerations","../../InsightsTelemetry",
"./MetricsExplorerQueryBase"],function(n,t,i,r,u,f,e){"use strict";var o=function(n){function t(t,e,
o,s,h,c,l){var a=this;h===void 0&&(h=null);c===void 0&&(c={});l===void 0&&(l=!0);n.call(this,t,e,r.Queries.
RequestSummary,s,l);this._metrics=[];this._metrics=o.metrics();this._metrics.forEach(function(n){var
t;n.hasOwnProperty("metricAggregation")&&n.metricAggregation!==""?t=n.metricAggregation:(t=u.Aggregation[
0],f.logError("In RequestSummaryQuery: Metric {0} is missing metricAggregaion property, uses dataModel aggregation".
format(n.id),1,i.AITelemetryConstants.MetricsExplorerCustomPart,a._componentId));a.addMetricsToCalculate(
n.id,t)});this.addFacetFilters(c,h)}return __extends(t,n),t.ExtractSummary=function(n,t,i){var r,u,e;
if(!n||!n.d||!n.d.results||!n.d.results.value)return null;r=null;u="";try{u=n.d.results.value;r=JSON.
parse(u)}catch(o){f.logException(o,1,f.AITelemetryConstants.MetricsExplorerBaseChart,i)}return!r||!r.
aggregations?null:(e={},t.forEach(function(n){var o="{0}.{1}".format(n.id,n.metricAggregation),t=null;
r.aggregations.result?t=r.aggregations.result[o]:r.aggregations&&(t=r.aggregations[o]);t?e[n.id]=t.value:
f.logError("Metric {0} does not exist in the result. Result JSON: {1}".format(o,u),1,f.AITelemetryConstants.
MetricsExplorerBaseChart,i)}),e)},t.transform=function(n,i){return i?t.ExtractSummary(n,i._metrics,i.
_componentId):null},t}(e.MetricsExplorerQueryBase);t.RequestSummaryQuery=o});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("Shared/CommonControls/DataModels/RequestTimeQuery",["require",
"exports","../../DataModels/AggregateListSet","../../ChartUtils","../../Constants","../../Enumerations",
"../../InsightsTelemetry","./MetricsExplorerQueryBase"],function(n,t,i,r,u,f,e,o){var h=MsPortalFx.ViewModels.
Controls.Visualization.Chart,s;s=function(n){function t(t,i,f,e,o,s,h){var l=this,c;o===void 0&&(o=null);
s===void 0&&(s={});h===void 0&&(h=r.Instance());n.call(this,t,i,u.Queries.RequestTime,e,!0,h);this._metrics=
[];c=h.getGrain(t,e);this.addAggregateByDimension(u.DimensionNames.RequestTime,c);this._metrics=f.metrics(
);this._metrics.forEach(function(n){l.addMetricsToCalculate(n.id,n.metricAggregation)});this.addFacetFilters(
s,o)}return __extends(t,n),t.transform=function(n,i){if(!i)return null;var r=t.ExtracSeries(n,i._metrics,
i._componentId);return r&&r.length!==0?r:null},t.ExtracSeries=function(n,t,r){var s=[],c,v,p,l,o,y,a;
if(!n||!n.d||!n.d.results||!n.d.results.value){for(c=0;c<t.length;c++)v=new MsPortalFx.ViewModels.Controls.
Visualization.Chart.Series,v.name(t[c].id),s.push(v);return s}l="";try{l=n.d.results.value;p=JSON.parse(
l)}catch(w){return e.logException(w,1,e.AITelemetryConstants.MetricsExplorerBaseChart,r),null}for(o=
0;o<t.length;o++)y=i.ExtractList(p,t[o].id,t[o].metricAggregation,u.DimensionNames.RequestTime,function(
n){return new Date(n)}),y?(a=new MsPortalFx.ViewModels.Controls.Visualization.Chart.Series,a.name(t[
o].id),a.values(y.items.map(function(n){return new h.ChartItem(n.bucket,n.value)})),s.push(a)):e.logError(
"Metric {0}.{1} does not exist in the result when getting data point Value Result JSON: {2} ".format(
t[o].id,f.Aggregation[t[o].metricAggregation],l),1,e.AITelemetryConstants.MetricsExplorerBaseChart,r);
return s},t}(o.MetricsExplorerQueryBase);t.RequestTimeQuery=s});__extends=this.__extends||function(n,
t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("Shared/CommonControls/ViewModels/AppInsightsBaseGridViewModel",["require",
"exports","../DataModels/AppInsightsGridDataNavigator","../../ChartUtils","../ViewModels/GridRowSelectableSource",
"../DataModels/GroupingDefinition","../../Enumerations","../../InsightsTelemetry","../DataModels/MetricsExplorerChartDataModel",
"./MetricsExplorerChartNoDataHelper","ClientResources","../../ThenableWrapper","../../TimeContext","../../JsonDefinitionService",
"./AppInsightsGridContentProviderFactory"],function(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y){var p=MsPortalFx.
ViewModels.Controls.Lists.Grid,w;w=function(n){function t(t,r,f){var e=this;this._metricsExplorerEntityView=
v.JsonDefinitionService.Instance()._chartDefinitionsEntityCache.createView(t);this._gridRowBladeSelectionSource=
new u.GridRowSelectableSource(r,o.AITelemetryConstants.MetricsExplorerGrid);this._containerName=this.
getGridPartName();this._containerType=1;this._maxRowCountPerLoad=10;this._loadState=ko.observable(0);
this._refreshLoadCount=ko.observable(this._maxRowCountPerLoad);this.nonAttributeColumnWidth="90px";this.
_selectedFilters={};this._noData=!1;this._meChartNoDataHelper=null;this._metricsExplorerJsonDefinitionId=
"";this.id="";this._bladeId="";this._partId="";this.componentId=ko.observable();this.showHeader=!0;this.
_defaultNoDataMessage=null;this._container=t;this._metricsMetadataContainer=undefined;this._attributeMetadataContainer=
undefined;this.timeContext=ko.observable(f);this._initializeDimensionInfoBalloonVM(this._container);
this._excludedColumns=[];this._totalValue=null;this._container.width.subscribe(this._container,function(
){e._updateHorizontalBarWidth(e.columns())});this.items=ko.observableArray([]);this._dataNavigator=new
i.AppInsightsGridDataNavigator(this._container,this._loadState,this._maxRowCountPerLoad,this._refreshLoadCount,
this._updateGrid.bind(this),this._setGridRowSelection.bind(this));this._selectableRowExtensionOptions=
this._gridRowBladeSelectionSource.getSelectableRowExtensionOptions(function(){return e._selectedFilters}
,function(){return e._metricsMetadataContainer},function(){return e._getSnappedTimeContext()},function(
){return e.componentId},function(){return e._dataNavigator});n.call(this,t,null,p.Extensions.SelectableRow|
p.Extensions.Pageable,this._selectableRowExtensionOptions);this.noRowsMessage=ko.observable(c.loadingText);
this._gridContentProvider=null;this._telemetryHelper=new o.TelemetryHelper(this,t)}return __extends(
t,n),t.prototype.updateItemDataModel=function(n,t){var u=this,r,i;return this._ensureGridContentProviderIsPresentAndCompatible(
t),r=n.getMetadataPromise(),this.id=t.id,i=$.Deferred(),l.all([r]).finally(function(){u._gridContentProvider.
updateMetricsForExtendedStats(t,n);setTimeout(function(){i.resolve()},150)}),i},t.prototype.onInputsSet=
function(n){var t=this,i,r;return this.componentId(n.ComponentId),this._container.assetName(n.ComponentId.
Name),this._metricsMetadataContainer=n.MetricsMetadataContainer,this._attributeMetadataContainer=n.AttributeMetadataContainer,
this.id=n.ChartDataModel.id,this._metricsExplorerJsonDefinitionId=n.MetricsExplorerJsonDefinitionId,
this._selectedFilters=n.DimensionFilters?n.DimensionFilters:{},this._bladeId=n.bladeId,this._partId=
v.JsonDefinitionService.getPartId(this.componentId(),this._bladeId,this._metricsExplorerJsonDefinitionId),
i=s.getCustomTelemetryProperties(this._metricsExplorerJsonDefinitionId,this.id,this.getMetricsExplorerChartDataModel(
)),r=this._telemetryHelper.instrument(n.ComponentId,0,function(){return t._setupChartNoDataModel(n.chartNoDataModel,
n.bladeActionChange,n.isHostedOutsideMetricsExplorerBlade),t._internalRefresh(t.timeContext(),!1)},i),
r},t.prototype.getAttributeMetadataContainer=function(){return this._attributeMetadataContainer},t.prototype.
getMetricsMetadataContainer=function(){return this._metricsMetadataContainer},t.prototype.getSharedDataContext=
function(){throw new Error("Derived classes must implement getSharedDataContext.");},t.prototype.getAreaDataContext=
function(){throw new Error("Derived classes must implement getAreaDataContext.");},t.prototype.getMetricsExplorerChartDataModel=
function(){throw new Error("Derived classes must implement getMetricsExplorerChartDataModel.");},t.prototype.
getGridPartName=function(){throw new Error("Derived classes must implement getGridPartName.");},t.prototype.
hasUserData=function(){return!this._noData},t.prototype.setNoDataMessage=function(n){this._defaultNoDataMessage=
n;this._updateGridNoData(!0,this._defaultNoDataMessage)},t.prototype.onBladeActionChanged=function()
{if(this._meBladeActionChanged)this._meBladeActionChanged.onBladeActionChanged(this.id)},t.prototype.
getBladeAction=function(){return this._meChartNoDataHelper?this._meChartNoDataHelper.getBladeAction(
):null},t.prototype.tearDown=function(){!this._meChartNoDataHelper||this._meChartNoDataHelper.unadvise(
);this._meChartNoDataHelper=null},t.prototype._internalRefresh=function(n,t){var i=this,f,r,e,u;if((
t===void 0&&(t=!0),this.timeContext(n),f=this.componentId(),r=this.getMetricsExplorerChartDataModel(
),!r)||(e=this.items().length,t&&this._loadState()!==0&&(this._loadState(1),this._refreshLoadCount(e>
this._maxRowCountPerLoad?e:this._maxRowCountPerLoad),this._dataNavigator._showLoadMore(!1)),this.items(
[]),this._totalValue=null,u=r.grouping(),!u||u.kind!==1||!u.dimension))return null;this._ensureGridContentProviderIsPresentAndCompatible(
r);this._gridContentProvider.onInputsSet({componentId:this.componentId(),metricContainer:this.getMetricsMetadataContainer(
),attributeContainer:this.getAttributeMetadataContainer(),chartDataModel:r});if(!r.metrics()||r.metrics(
).length===0)return this._updateColumns(),this._updateGridNoData(!0,c.noDataInGivenTimePeriod),this.
_onInternalRefreshComplete(),null;var s=this._attributeMetadataContainer.getMetadataPromise(),h=this.
_metricsMetadataContainer.getMetadataPromise();return o.instrumentPromise(l.all([s,h])).catch(function(
){o.logError("Metrics or attribute metadata failed",i._containerType,i._containerName,f)}).finally(function(
){i._gridContentProvider.updateMetricsForExtendedStats(r,i._metricsMetadataContainer);var n={ChartDataModel:
r};i._gridRowBladeSelectionSource.onInputsSet(n);i._updateColumns();return i._dataNavigator.onInputsSet(
{PartName:i.getGridPartName(),ComponentId:f})}).catch(function(n){i._updateGrid([],$.Deferred().reject(
n).promise())}).then(function(){return i._loadState()===0?i._dataNavigator.loadByContinuationToken():
$.Deferred().resolve().promise()}).finally(function(){return i._onInternalRefreshComplete(),$.Deferred(
).resolve().promise()})},t.prototype._updateGridNoData=function(n,t){t===void 0&&(t=null);this._noData=
n;this.noRowsMessage(n?t:"")},t.prototype._updateGrid=function(n,t){t===void 0&&(t=$.Deferred().resolve(
).promise());var i=n.length===0;return this._loadState()===0&&(this.items(n),n=[]),this._loadState(2),
this._updateGridNoData(i,this._defaultNoDataMessage),this._meChartNoDataHelper&&this._meChartNoDataHelper.
wrapQuery(this.componentId(),this.hasUserData.bind(this),t),n},t.prototype._setGridRowSelection=function(
n){var r=this,i,t;this._loadState()!==0&&this._gridRowBladeSelectionSource._selectedItem&&(i=n.first(
function(n){return n.attribute===r._gridRowBladeSelectionSource._selectedItem.attribute}),i&&(t=this.
getRowMetadata(i),t&&(t.selected(!0),t.activated("attribute"))))},t.prototype._getSnappedTimeContext=
function(){var t=r.Instance().getXAxisRange(this.componentId(),this.timeContext()),n=r.Instance().snapTimeRangeToGrain(
t),i=a.fromTimeRange(n.startTime,n.endTime);return ko.observable(i)},t.prototype._onInternalRefreshComplete=
function(){return null},t.prototype._setupChartNoDataModel=function(n,t,i){this._defaultNoDataMessage=
c.noDataInGivenTimePeriod;n&&(this._meBladeActionChanged=t,this._meChartNoDataHelper=new h.MetricsExplorerChartNoDataHelper(
n,this._container,this.getSharedDataContext(),this),this._defaultNoDataMessage=this._meChartNoDataHelper.
_fetchDefaultNoDataMessage(i))},t.prototype._updateColumns=function(){var n=this._gridContentProvider.
getColumnDefinitions();this.columns(n)},t.prototype._updateHorizontalBarWidth=function(n){var t=n.first(
function(n){return n.format===113});t&&t.width(this._getHorizontalBarWidth())},t.prototype._getHorizontalBarWidth=
function(){return this._container.width()<325?"24px":"130px"},t.prototype._isExcludedColumn=function(
n){return this._excludedColumns&&Array.isArray(this._excludedColumns)?this._excludedColumns.indexOf(
n)>-1:!1},t.prototype._ensureGridContentProviderIsPresentAndCompatible=function(n){this._gridContentProvider&&
this._gridContentProvider.isChartDataModelCompatibleWithProvider(n)||(this._gridContentProvider=y.Instance(
).createGridContentProvider(this,n));this._dataNavigator._updateGridContntProvider(this._gridContentProvider)}
,t.prototype.dispose=function(){v.JsonDefinitionService.Instance().deleteAllDataModels(this._bladeId)}
,t.prototype._initializeDimensionInfoBalloonVM=function(n){this.infoBalloonVisible=ko.observable(!1);
this.infoBalloonViewModel=new MsPortalFx.ViewModels.Controls.DockedBalloon.ViewModel(n);this.infoBalloonViewModel.
position=ko.observable(1)},t}(p.ViewModel);t.AppInsightsBaseGridViewModel=w});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("Shared/CommonControls/DataModels/AppInsightsGridDataNavigator",
["require","exports","../../DateUtils","../../Enumerations","../../InsightsTelemetry","ClientResources",
"../../ThenableWrapper"],function(n,t,i,r,u,f,e){"use strict";var o=function(){function n(n,t,i,r){this.
_gridContentProvider=undefined;this._loadState=t;this._maxRowCountPerLoad=i;this._refreshLoadCount=r;
this._topQueried=0}return n.prototype.loadByContinuationToken=function(t,i){var r=t.continuationToken?
parseInt(t.continuationToken,10):0;if(this._loadState()===0||this._loadState()===1||!this._gridContentProvider.
fetchRowItems()||this._gridContentProvider.fetchRowItems().length===0||this._gridContentProvider.fetchRowItems(
).length<r+this._maxRowCountPerLoad){switch(this._loadState()){case 0:this._topQueried=this._maxRowCountPerLoad;
break;case 1:this._topQueried=this._refreshLoadCount();break;default:this._topQueried=r*10<=n._maxGridRows?
r*10:n._maxGridRows}return this._gridContentProvider.issueFetchQuery(this._topQueried,i)}return $.Deferred(
).resolve().promise()},Object.defineProperty(n.prototype,"gridContentProvider",{get:function(){return this.
_gridContentProvider},set:function(n){this._gridContentProvider=n},enumerable:!0,configurable:!0}),n.
_maxGridRows=100,n}(),s;t.AppInsightsGridDataNavigatorOptions=o;s=function(n){function t(t,e,s,h,c,l)
{var a=this;this._container=t;this._containerName=undefined;this._componentId=undefined;this.items=ko.
observable();this._showLoadMore=ko.observable(!1);this._loadMoreLabel=ko.observable(f.appInsightsGridLoadMore);
this._maxRowCountPerLoad=s;this._loadState=e;this._refreshLoadCount=h;this.metadata=ko.observable({});
this._updateGridCallback=c;this._updateGridSelectionCallBack=l;this._dataNavigatorOptions=new o(this.
_container,this._loadState,this._maxRowCountPerLoad,this._refreshLoadCount);n.call(this,t,this.items,
this.metadata,this._dataNavigatorOptions);this.loadByContinuationToken=function(){var s,t=a.metadata(
).continuationToken?parseInt(a.metadata().continuationToken,10):0,e={gridLoadState:r.GridLoadState[a.
_loadState()]},h={currentCount:t};return a._loadState()===2&&a._loadMoreLabel()===f.appInsightsGridNoMoreToLoad?
(u.logCustomEvent("No more items can be loaded clicked",1,a._containerName,a._componentId,e,h),a.items(
).length>0&&a.items([]),$.Deferred().resolve().promise()):(a._loadState()===2&&(u.logCustomEvent("Load More clicked",
1,a._containerName,a._componentId,e,h),s=new Date),u.instrumentPromise(n.prototype.loadByContinuationToken.
call(a),"AppInsightsGridDataNavigator").then(function(){var n=a._dataNavigatorOptions.gridContentProvider.
fetchRowItems(),l,h,c,v,y;return n&&n.length>0?(a._loadMoreLabel(f.appInsightsGridLoadMore),l=[],c=a.
_loadState()===1?a._refreshLoadCount():a._maxRowCountPerLoad,t+c>o._maxGridRows&&(c=o._maxGridRows-t),
n.length>t+c?(h=t+c,l=n.slice(t,t+c),a._showLoadMore(!0),h>=o._maxGridRows&&a._loadMoreLabel(f.appInsightsGridNoMoreToLoad)):
(h=n.length,t<h&&(l=n.slice(t)),a._showLoadMore(!1)),a.metadata({continuationToken:h.toString()}),a.
_updateGridData(l),a._loadState()===2&&s&&(v=i.compare(new Date,s),e={gridLoadState:r.GridLoadState[
2]},y={currentCount:h,duration:v},u.logCustomEvent("Grid load",1,a._containerName,a._componentId,e,y))):
(a._updateGridData([]),a._showLoadMore(!1)),$.Deferred().resolve().promise()},function(n){return a._loadState(
)===2?(a._loadMoreLabel(f.appInsightsGridLoadFail),a._showLoadMore(!0),u.logError("Failed to load more data",
1,a._containerName,a._componentId)):(a._showLoadMore(!1),a._updateGridData([],$.Deferred().reject(n).
promise())),$.Deferred().reject(n).promise()}))};this.resetLoadByContinuationToken=function(t){a.metadata(
{});a._showLoadMore(!1);a.items([]);n.prototype.resetLoadByContinuationToken.call(a,t)};this.setQuery=
function(t){return a.metadata({}),n.prototype.setQuery.call(a,t).then(function(){a._updateGridSelectionCallBack(
a.items())})}}return __extends(t,n),t.prototype.onInputsSet=function(n){this._containerName=n.PartName;
this._componentId=n.ComponentId;var t=this._dataNavigatorOptions.gridContentProvider.getQuery(this._maxRowCountPerLoad+
1),i=this.setQuery(t);return new e.ThenableWrapper(i).promise()},t.prototype._updateGridContntProvider=
function(n){this._dataNavigatorOptions.gridContentProvider=n},t.prototype._updateGridData=function(n,
t){t===void 0&&(t=$.Deferred().resolve().promise());this.items(this._updateGridCallback(n,t))},Object.
defineProperty(t.prototype,"dataNavigatorOptions",{get:function(){return this._dataNavigatorOptions}
,enumerable:!0,configurable:!0}),t}(MsPortalFx.Data.RemoteDataNavigator);t.AppInsightsGridDataNavigator=
s});define("Shared/CommonControls/ViewModels/GridRowSelectableSource",["require","exports","../ViewModels/AppInsightsGridRowBladeActionFactory"],
function(n,t,i){var u=MsPortalFx.ViewModels.Controls.Lists.Grid,r;r=function(){function n(n,t){this.
_initialState=n;this._partName=t;this._selectedItem=null}return n.prototype.getSelectableRowExtensionOptions=
function(n,t,r,u,f){var e=this,s=function(f){if(!e._chartDataModel)return null;var s=e._chartDataModel.
_isGroupedByDimension()?e._chartDataModel.grouping().dimension:undefined,h=u(),c=r(),l=n(),o=i.AppInsightsGridRowBladeActionFactory.
Instance().getRowSelectionAction(e._chartDataModel.clickAction,e._partName,e._chartDataModel.id,l,h(
),c(),t(),e._chartDataModel.metrics().map(function(n){return n.id}),s,f.attribute);return e._selectedItem=
o,o},h=function(n,t){return n.attribute===t.attribute},o=f();return{selectableRow:{activateOnSelection:
ko.observable(!0),selectionMode:1,itemMatchesSelection:h,createSelection:s},pageable:{type:0,dataNavigator:
o,showLabel:o._showLoadMore,label:o._loadMoreLabel}}},n.prototype.onInputsSet=function(n){this._chartDataModel=
n.ChartDataModel;return},n}();t.GridRowSelectableSource=r});define("Shared/CommonControls/ViewModels/AppInsightsGridRowBladeActionFactory",
["require","exports","../../Enumerations","../../Constants","../../../_generated/ExtensionDefinition",
"../../InsightsTelemetry","../../DataModels/SearchFilterInputModel","../../../_generated/ExtensionDefinition",
"../../JsonDefinitionService"],function(n,t,i,r,u,f,e,o,s){"use strict";var h=function(){function n(
){if(n._instance)throw new Error("Error: Instantiation failed: Use AppInsightsGridRowBladeActionFactory.Instance() instead of new.");
}return n.Instance=function(){return n._instance===null&&(n._instance=new n),n._instance},n.prototype.
getRowSelectionAction=function(n,t,i,r,e,o,s,h,c,l){var v=null,a={};a[f.AITelemetryConstants.ChartId]=
i;a[f.AITelemetryConstants.BladeName]=n.defaultBlade;switch(n.defaultBlade){case u.BladeNames.metricsExplorerBlade:
v=this._createMetricsExplorerBladeAction(s,n.uri,r,i,h,c,l,e,o,a);break;case u.BladeNames.searchBlade:
default:v=this._createSearchBladeAction(s,t,r,i,h,c,l,e,o,a)}return v?f.logCustomEvent(f.AITelemetryConstants.
GridBladeAction,3,t,e,a):f.logError("Failed to create blade action",1,t,e,a),v},n.prototype._createMetricsExplorerBladeAction=
function(n,t,i,r,u,h,c,l,a,v){var y=this._createBladeFilter(n,u,i,h,c,v,!0),w,p;return y||(y=e.getDefaultSearchFilters(
)),w=s.JsonDefinitionService.createUniqueBladeId(),p=null,p={id:r,detailBlade:o.BladeNames.metricsExplorerBlade,
extension:o.definitionName,detailBladeInputs:{MetricsExplorerJsonDefinitionId:t,BladeId:w,ComponentId:
l,TimeContext:a,CurrentFilter:y,FavoriteData:null,showFavoriteConfig:!1},attribute:c},v[f.AITelemetryConstants.
BladeName]=o.BladeNames.metricsExplorerBlade,v[f.AITelemetryConstants.ChartDefinitionId]=t,p},n.prototype.
_createSearchBladeAction=function(n,t,i,r,u,e,s,h,c,l){var v=null,w=this._createBladeFilter(n,u,i,e,
s,l,!1),y,b,p,a;if(w!=null){y=null;switch(u[0]){case"context.user.new":y='context.session.isFirst:"true"';
break;case"basicExceptionServer.count":y='context.device.id:(-"browser")'}b={ComponentId:h,InitialFilter:
w,InitialQueryText:y,InitialTime:c,BIFavoriteData:null};v={id:r,detailBlade:o.BladeNames.searchBlade,
extension:o.definitionName,detailBladeInputs:b,attribute:s}}else v={id:r,detailBlade:o.BladeNames.metricsExplorerEditChartNoticeBlade,
extension:o.definitionName,detailBladeInputs:{},attribute:s},p="Metrics collection is empty or null, cannot launch SE/ME blade.",
u&&(a="",u.forEach(function(n){a+=","+n}),a=a.substring(1),p="Metrics: ({0}) does not have any documentType supported by Search.".
format(a)),f.logWarning(p,3,t,null,{dimension:e,attribute:s});return l[f.AITelemetryConstants.BladeName]=
v.detailBlade,v},n.prototype._createBladeFilter=function(n,t,i,r,u,f,o){var h,s,c;if(MsPortalFx.Util.
isNullOrUndefined(n)||MsPortalFx.Util.isNullOrUndefined(u)||MsPortalFx.Util.isNullOrUndefined(t)||t.
length===0)return null;if(h=this._getCombinedDocumentTypes(n,t,f,o),h.length>0){if(s={},i)for(c in i)
s[c]=i[c];switch(t[0]){case"requestFailed.count":s["request.success"]=["false"];break;case"basicExceptionBrowser.count":
s["context.device.id"]=["browser"];break;case"basicExceptionCrash.count":s["basicException.handledAt"]=
["Unhandled"];break;case"context.user.impactedUsers":s["basicException.handledAt"]=["Unhandled"];break
case"basicExceptionHandled.count":s["basicException.handledAt"]=["UserCode","Platform"]}return r&&(s[
r]=[u]),new e.SearchFilterInputModel(h,s,!1,"")}return null},n.prototype._getCombinedDocumentTypes=function(
n,t,u,f){for(var o,c,e=[],h=[],s=0;s<t.length;s++)o=n.getMetadata(t[s]),o&&o.DocumentTypes&&o.DocumentTypes.
forEach(function(n){var t=i.EventType[n];t&&(f||r.SupportedSearchEventTypes.Supported.indexOf(t)>=0)
?e.indexOf(t)===-1&&e.push(t):h.push(n+":Not Supported")});return c=e.map(function(n){return i.EventType[
n]}),u.DocTypes=JSON.stringify(c.concatUnique(h)),e},n._instance=null,n}();t.AppInsightsGridRowBladeActionFactory=
h});define("Shared/CommonControls/ViewModels/AppInsightsGridContentProviderFactory",["require","exports",
"../DataModels/MetricsExplorerChartDataModel","./AggregationGridContentProvider"],function(n,t,i,r){
"use strict";function e(){return u||(u=new f),u}var u=null,f;t.Instance=e;f=function(){function n(){}
return n.prototype.createGridContentProvider=function(n,t){var i=t._getGridType();switch(i){case 1:case
0:return new r.AggregationGridContentProvider(n);case 2:throw new Error("Raw grid is not supported yet!");
case 3:throw new Error("chartDataModel is not a single/multi or raw grid.");}},n}();t.AppInsightsGridContentProviderFactory=
f});define("Shared/CommonControls/ViewModels/AggregationGridContentProvider",["require","exports","../../Enumerations",
"../../Constants","../../InsightsTelemetry","../DataModels/MetricsExplorerChartDataModel","ClientResources",
"../DataModels/RequestSummaryQuery","../DataModels/SegmentationSummaryQuery","../../ThenableWrapper",
"MsPortalFx/Globalization","../../NumberUtils"],function(n,t,i,r,u,f,e,o,s,h,c,l){"use strict";var a=
function(){function n(n){this._gridHost=n;this._multiGridColumnsMapping=[];this._segmentationEntityView=
undefined;this._summaryEntityView=undefined;this._providerInputs=undefined;this._transfomedGridItems=
null}return n.prototype.onInputsSet=function(n){this._providerInputs=n;var t=this._providerInputs.chartDataModel;
return t._hasSumAggregation()&&(this._summaryQuery=new o.RequestSummaryQuery(this._providerInputs.componentId,
this._gridHost.getGridPartName(),t,this._gridHost.timeContext(),this._providerInputs.attributeContainer,
this._gridHost._selectedFilters)),null},n.prototype.isChartDataModelCompatibleWithProvider=function(
n){var t=n._getGridType();return t===0||t===1},n.prototype.getQuery=function(n){return new s.SegmentationSummaryQuery(
this._providerInputs.componentId,this._gridHost.getGridPartName(),this._providerInputs.chartDataModel,
this._gridHost.timeContext(),n,null,null,this._providerInputs.attributeContainer,this._gridHost._selectedFilters)}
,n.prototype.issueFetchQuery=function(n,t){var o=this,i,r,f,e,u;return this._gridHost._loadState()===
1&&(this._totalValue=null),i=t,r=i.getPayload(),r.AggregateByDimension.forEach(function(t){return t.
Dimensions.forEach(function(t){return t.Top=n+1})}),i._payload=r,f=this.segmentationEntityView.fetch(
i),e=this.summaryEntityView.fetch(this._summaryQuery),this._transfomedGridItems=null,u=$.when(new h.
ThenableWrapper(f),new h.ThenableWrapper(e)),u.then(function(){o.fetchRowItems()}),u},n.prototype.fetchRowItems=
function(){if(!this._transfomedGridItems){var n=this.segmentationEntityView.item();n&&(this._transfomedGridItems=
this._transformCollection(n,this.summaryEntityView.item()))}return this._transfomedGridItems},n.prototype.
getColumnDefinitions=function(){var o=this,n=this._providerInputs.chartDataModel,w,k,h,a,v,d,s,nt;if(
!n.metrics()||n.metrics().length===0)return w=this._createColumnDefinition("attribute","",!0),[w];var
t=[],c=n.grouping(),b=c.dimension,l=this._providerInputs.attributeContainer.getMetadata(c.dimension);
if(l&&(l.DisplayName?b=l.DisplayName:u.logError("Could not get DisplayName for grouping",1,this._gridHost.
getGridPartName(),this._providerInputs.componentId,{grouping:c.dimension})),k=this._createColumnDefinition(
"attribute",b,!0),t.push(k),h=n._getGridType(),1===h){for(this._multiGridColumnsMapping=[],a=[],v=n.
metrics().length,v>r.MaxMetricsAllowedInEditGrid&&(d=n.metrics()[r.MaxMetricsAllowedInEditGrid].id,u.
logError("Grid chart allows up to "+r.MaxMetricsAllowedInEditGrid+" metrics to be specified. Additional metrics follow metric "+
d+" are skipped.",1,this._gridHost.getGridPartName(),this._providerInputs.componentId)),s=0;s<v&&s<r.
MaxMetricsAllowedInEditGrid;s++){var y=n.metrics()[s].id,p=i.Aggregation[n.metrics()[s].metricAggregation],
tt="{0}.{1}".format(y,i.Aggregation[p]),it=p===4?"{0} ({1})".format(this._getMetricDisplayName(y),i.
Aggregation[p]):this._getMetricDisplayName(y),g="value"+(s+1).toString(),rt=this._createColumnDefinition(
g,it);t.push(rt);nt={metric:tt,column:g};a.push(nt)}this._multiGridColumnsMapping=a}else if(0===h)n.
metrics().forEach(function(n){var r=i.Aggregation[n.metricAggregation],u,s,h,c,l;r!==7&&(u=f.GetAggregationString(
r),s=o._createColumnDefinition("value1",u),t.push(s));r!==1||o._gridHost._isExcludedColumn(e.metricsPercentTotalColumn)?
r===7&&(o._gridHost._isExcludedColumn(e.count)||(c=o._createColumnDefinition("value2",e.count),t.push(
c)),o._gridHost._isExcludedColumn(e.stdDev)||(l=o._createColumnDefinition("value3",e.stdDev),t.push(
l))):(h=o._createColumnDefinition("value2",e.metricsPercentTotalColumn),t.push(h))});else throw new Error(
"Unsupported gridType:"+h);return n._canEnableHorizontalBars()&&n.horizontalBars()&&this._createHorizontalBars(
t[1],t),t},n.prototype._createHorizontalBars=function(n,t){var i=this._createColumnDefinition("horizontal_bar_data",
n.name(),!1);i.width=ko.observable(this._gridHost._getHorizontalBarWidth());i.format=113;this._hasCustomPalette(
this._providerInputs.chartDataModel.palette)&&(i.formatOptions={percentageBar:{barColorKey:"horizontal_bar_color"}});
n.name("");n.width=ko.observable("70px");t.splice(t.indexOf(n),0,i)},n.prototype._hasCustomPalette=function(
n){return n&&r.Colors.palettes[n]},n.prototype._createColumnDefinition=function(n,t,i){i===void 0&&(
i=!1);var r={itemKey:n,name:ko.observable(t),activatable:ko.observable(!0)};return i||(r.width=ko.observable(
this._gridHost.nonAttributeColumnWidth)),r},n.prototype._getMetricDisplayName=function(n){var r=this.
_providerInputs.chartDataModel.metrics(),i=this._providerInputs.metricContainer.getMetricsMetadata(r),
t;return i&&(t=i[n],t)?t.DisplayName:""},n.prototype.updateMetricsForExtendedStats=function(n,t){if(
n.updateMetricsAggregationFromMetadata(t),n._isMultiMetricGrid())n.metrics.remove(function(n){return n.
metricAggregation===i.Aggregation[7]});else if(n.metrics().length===1&&n.metrics().first().metricAggregation===
i.Aggregation[4]){var r=JSON.parse(JSON.stringify(n.metrics().first()));r.metricAggregation=i.Aggregation[
7];n.metrics.push(r)}},Object.defineProperty(n.prototype,"segmentationEntityView",{get:function(){return this.
_segmentationEntityView||(this._segmentationEntityView=this._gridHost.getAreaDataContext()._segmentationSummaryEntityCache.
createView(this._gridHost._container)),this._segmentationEntityView},enumerable:!0,configurable:!0}),
Object.defineProperty(n.prototype,"summaryEntityView",{get:function(){return this._summaryEntityView||
(this._summaryEntityView=this._gridHost.getAreaDataContext()._summarySeriesEntityCache.createView(this.
_gridHost._container)),this._summaryEntityView},enumerable:!0,configurable:!0}),n.prototype._transformCollection=
function(n,t){var i=this,r;return t===void 0&&(t=null),r=n.length===0,(this._gridHost._loadState()===
0||this._gridHost._loadState()===1)&&(r||(this._totalValue=this._calculateHorizontalBarsTotal(n[0]))),
n.map(function(n){return i._transform(n,i.summaryEntityView.item())})},n.prototype._calculateHorizontalBarsTotal=
function(n){var t,i,r;return n.multiGridMetricValues&&n.multiGridMetricValues.length>0?(t=this._multiGridColumnsMapping.
first(function(n){return n.column==="value1"}),i=t?n.multiGridMetricValues.first(function(n){return n.
metric===t.metric}):null,i?i.value:null):(r=this._providerInputs.chartDataModel.metrics()[0],r?n[r.metricAggregation.
toLowerCase()]:null)},n.prototype._transform=function(n,t){var r=this,s;t===void 0&&(t=null);var h=this.
_providerInputs.chartDataModel,o=this._providerInputs.componentId,f={attribute:n.attribute};if(this.
_createHorizontalBarColor(f,h.palette),n.multiGridMetricValues&&n.multiGridMetricValues.length>0){if(
!this._multiGridColumnsMapping||this._multiGridColumnsMapping.length===0)return u.logError("Unable to process multiGrid results, missing mapping of dimensions to grid's columns",
1,this._gridHost.getGridPartName(),o),null;n.multiGridMetricValues.forEach(function(n){var i=r._multiGridColumnsMapping.
first(function(t){return t.metric===n.metric}),s,t;if(i===null)u.logError("Unable to process multi-metrics grid results, metric "+
n.metric+" in result doesn't match the grid's columns.",1,r._gridHost.getGridPartName(),o);else{s=n.
metric.substring(0,n.metric.lastIndexOf("."));t=n.value===e.columnValueNoData?e.columnValueNoData:r.
_getScaledMetricValueWithUnits(s,n.value);switch(i.column){case"value1":f.value1=t;f.horizontal_bar_data=
r._totalValue?n.value/r._totalValue*100:0;n.value>r._totalValue&&u.logWarning("Metric value is larger than total value",
1,r._gridHost.getGridPartName(),o);break;case"value2":f.value2=t;break;case"value3":f.value3=t;break
case"value4":f.value4=t;break;case"value5":f.value5=t;break;default:u.logError("Unable to process multiGrid results, invalid mapping of dimensions to grid's columns.",
1,r._gridHost.getGridPartName(),o)}}})}else s=h.metrics()[0].id,h.metrics().forEach(function(e){var a=
i.Aggregation[e.metricAggregation],h,p,w,b,v,y;a!==7&&(h=n[i.Aggregation[a].toLowerCase()],p=r._getScaledMetricValueWithUnits(
s,h),f.value1=p,f.horizontal_bar_data=r._totalValue?h/r._totalValue*100:0,h>r._totalValue&&u.logWarning(
"Metric value is larger than total value",1,r._gridHost.getGridPartName(),o));a===1&&t?(w=t[s],b=h/w,
f.value2=c.NumberFormat.create({style:"percent",minimumFractionDigits:1,maximumFractionDigits:1}).format(
b)):a===7&&(v=l.FormatWithSingleDecimalAndUnits(n.count),y=v.value,v.unit&&(y+=" "+v.unit),f.value2=
y,f.value3=r._getScaledMetricValueWithUnits(s,n.std_deviation))});return f},n.prototype._createHorizontalBarColor=
function(n,t){if(this._hasCustomPalette(t)){var i=r.Colors.palettes[t];n.horizontal_bar_color=i[0].replace(
"msportalfx-bgcolor-","")}},n.prototype._getScaledMetricValueWithUnits=function(n,t){var i=this._providerInputs.
metricContainer?this._providerInputs.metricContainer.getMetadata(n):null;return i?i.getScaledMetricValueWithUnits(
t):t.toFixed(0)},n}();t.AggregationGridContentProvider=a});define("Shared/DataModels/FavoritesData",
["require","exports","../TimeContext","../TimeRangeCommandBase","../JsonDefinitionService","./SearchFilterInputModel",
"./MetricsExplorerDataModel"],function(n,t,i,r,u,f,e){"use strict";function c(n,t){return!t&&!n?!0:t&&
n?n.FavoriteId===t.FavoriteId&&n.Name===t.Name&&n.FavoriteType===t.FavoriteType&&n.Version===t.Version&&
n.Config===t.Config:!1}function l(n,t){if(!n||!n.Config||n.Config===""||!t)return!1;var r=JSON.parse(
n.Config);return r&&r.TimeSelection&&r.TimeSelection?(r.TimeSelection.endTime&&(r.TimeSelection.endTime=
new Date(r.TimeSelection.endTime)),i.equals(r.TimeSelection,t)):!1}var h=function(){function n(n,t,i)
{this.TimeSelection=n;this.SearchFilter=t;this.QueryText=i}return n.fromJSON=function(t){if(t){var i=
JSON.parse(t);return i&&(i.TimeSelection?i.TimeSelection.endTime&&(i.TimeSelection.endTime=new Date(
i.TimeSelection.endTime)):i.TimeSelection=r.TimeRangeCommandBase.GetDefaultTimeRange(),i.QueryText||
(i.QueryText=""),i.SearchFilter=i.SearchFilter?f.SearchFilterInputModel.clone(i.SearchFilter,!0):f.getDefaultSearchFilters(
!0)),new n(ko.observable(i.TimeSelection),ko.observable(i.SearchFilter),ko.observable(i.QueryText))}
return null},n.prototype.equalsCurrentConfig=function(t){var r=n.fromJSON(t);return r.QueryText()!==
this.QueryText()||!f.FiltersEqual(r.SearchFilter(),this.SearchFilter())||!i.equals(r.TimeSelection(),
this.TimeSelection(),!0)?!1:!0},n.prototype.getConfigJSON=function(){return ko.toJSON(this)},n}(),o,
s;t.FavoriteSearchConfigData=h;o=function(){function n(n,t,i){this.TimeSelection=n;this.bladeId=t;this.
jsonDefintionId=i;this._metricsDataModel=ko.observable()}return n.fromJSON=function(t,i,r,f,o,s){var
h,c,a,l;return(s===void 0&&(s=!0),t)?(h=n.getServerObject(t),h.MEDataModelRawJSON&&(l=e.ConvertFrom(
h.MEDataModelRawJSON,f,r,i),l&&(c=u.JsonDefinitionService.createUniqueBladeId(),a=u.JsonDefinitionService.
getPartId(i,c,o),u.JsonDefinitionService.Instance().clonedAndStoreDataModel(c,a,l,f,r,i))),new n(ko.
observable(h.TimeSelection),ko.observable(c),ko.observable(o))):null},n.getServerObject=function(n){
var t=JSON.parse(n);return t&&(t.TimeSelection?t.TimeSelection.endTime&&(t.TimeSelection.endTime=new
Date(t.TimeSelection.endTime)):t.TimeSelection=r.TimeRangeCommandBase.GetDefaultTimeRange()),t},n.prototype.
equalsCurrentConfig=function(t,r,f,o){var s=n.getServerObject(t);if(!i.equals(s.TimeSelection,this.TimeSelection(
)))return!1;var h=u.JsonDefinitionService.getPartId(r,this.bladeId(),this.jsonDefintionId()),c=u.JsonDefinitionService.
Instance().getMEDataModel(h,o,f,r)._meDataModel(),l=e.ConvertFrom(s.MEDataModelRawJSON,o,f,r);return e.
Equals(c,l)},n.prototype.getConfigJSON=function(n){var i=u.JsonDefinitionService.getPartId(n,this.bladeId(
),this.jsonDefintionId()),t;return i&&(t=u.JsonDefinitionService.Instance().getMEDataModel(i,3,"FavoriteMEConfigData",
n)._meDataModel(),t)?JSON.stringify({TimeSelection:this.TimeSelection(),MEDataModelRawJSON:e.ConvertToJson(
t)}):null},n}();t.FavoriteMEConfigData=o;s=function(){function n(n,t,i){this.FavoriteId=i?i:MsPortalFx.
Util.newGuid().toLowerCase();this.Name=n.FavoriteName();this.FavoriteType=n.FavoriteType();this.Version=
n.Version;this.Config=t}return n}();t.FavoriteData=s;t.FavoriteEqual=c;t.FavoriteTimeSelectionEqual=
l});define("Shared/FavoriteViewHelper",["require","exports","./FavoritesDataHelper","./DataModels/FavoritesData",
"../_generated/ExtensionDefinition","./InsightsTelemetry","./Constants","./Enumerations","../_generated/SvgDefinitions",
"./TimeContext","ClientResources"],function(n,t,i,r,u,f,e,o,s,h,c){var l=MsPortalFx.ViewModels.Toolbars,
p=MsPortalFx.Base.Images,a,v,y,w,b;a=function(){function n(n){this._containerName=f.AITelemetryConstants.
FavoriteSaveCommand;this._containerType=2;this.canExecute=ko.observable(!0);this._context=n}return n.
prototype.execute=function(){var i=this,n,s,t;this._context.favoriteProgress(!0);var c=Q.defer(),o=MsPortalFx.
UI.NotificationManager.create(u.NotificationDefinitions.FavoriteNotification.name),e={};return e.favName=
this._context.favoriteCommandData.FavoriteName(),n=this._context.favoriteCommandData.Config.TimeSelection(
),this._context.favoriteCommandData.TimeType()!==2||n.endTime||this._context.favoriteCommandData.Config.
TimeSelection(new h.TimeContext(n.durationMs,new Date,n.createdTime,n.isInitialTime)),s=this._context.
favoriteCommandData.Config.getConfigJSON(this._context.favoriteCommandData.ComponentId()),t=null,t=this.
_context.favoriteData()&&this._context.favoriteData().FavoriteId?new r.FavoriteData(this._context.favoriteCommandData,
s,this._context.favoriteData().FavoriteId):new r.FavoriteData(this._context.favoriteCommandData,s),t!==
null&&(o.raise(u.NotificationDefinitions.FavoriteNotification.savingFavorite,undefined,e),this._context.
favoritesDataHelper.SetFavoriteDataForComponentId(this._context.favoriteCommandData.ComponentId(),t,
f.AITelemetryConstants.FavoritesSplitter).then(function(){i._context.favoriteData(t);i._context.isFavoriteDataDirty(
!1);o.raise(u.NotificationDefinitions.FavoriteNotification.saved,undefined,e)},function(){o.raise(u.
NotificationDefinitions.FavoriteNotification.saveFail,undefined,e)}).finally(function(){i._context.favoriteProgress(
!1);i._context.isFavoritePaneExpanded(!1);c.resolve()})),f.logCommandClicked(this._containerName,this.
_context.favoriteCommandData.ComponentId()),c.promise},n.prototype.hasUserData=function(){return!1},
n}();t.FavoriteSaveToolCommand=a;v=function(){function n(n){this._containerName=f.AITelemetryConstants.
FavoriteSaveAsCommand;this._containerType=2;this.canExecute=ko.observable(!0);this._context=n;this._currName=
this._context.saveAsDialogTextBoxValue}return n.prototype.execute=function(n){var t=this,c=Q.defer(),
o=MsPortalFx.UI.NotificationManager.create(u.NotificationDefinitions.FavoriteNotification.name),e={},
i,l,a,s;return n===4&&(this._context.favoriteProgress(!0),e.favName=this._currName(),i=this._context.
favoriteCommandData.Config.TimeSelection(),this._context.favoriteCommandData.TimeType()!==2||i.endTime||
this._context.favoriteCommandData.Config.TimeSelection(new h.TimeContext(i.durationMs,new Date,i.createdTime,
i.isInitialTime)),l=this._currName(),this._context.favoriteCommandData.FavoriteName(this._currName()),
a=this._context.favoriteCommandData.Config.getConfigJSON(this._context.favoriteCommandData.ComponentId(
)),s=new r.FavoriteData(this._context.favoriteCommandData,a),o.raise(u.NotificationDefinitions.FavoriteNotification.
creatingFavorite,undefined,e),this._context.favoritesDataHelper.SetFavoriteDataForComponentId(this._context.
favoriteCommandData.ComponentId(),s,f.AITelemetryConstants.FavoritesSplitter).then(function(){t._context.
favoriteData(s);t._context.isFavoriteDataDirty(!1);o.raise(u.NotificationDefinitions.FavoriteNotification.
created,undefined,e)},function(){t._context.favoriteCommandData.FavoriteName(l);o.raise(u.NotificationDefinitions.
FavoriteNotification.createFail,undefined,e)}).finally(function(){t._context.favoriteProgress(!1);t.
_context.isFavoritePaneExpanded(!1);c.resolve()})),f.logCommandClicked(this._containerName,this._context.
favoriteCommandData.ComponentId()),c.promise},n.prototype.hasUserData=function(){return!1},n}();t.FavoriteSaveAsToolCommand=
v;y=function(){function n(n){this._containerName=f.AITelemetryConstants.FavoriteDeleteCommand;this._containerType=
2;this.canExecute=ko.observable(!0);this._context=n}return n.prototype.execute=function(n){var t=this,
e=Q.defer(),r=MsPortalFx.UI.NotificationManager.create(u.NotificationDefinitions.FavoriteNotification.
name),i={};return i.favName=this._context.favoriteCommandData.FavoriteName(),n===6&&(this._context.favoriteProgress(
!0),r.raise(u.NotificationDefinitions.FavoriteNotification.deletingFavorite,undefined,i),this._context.
favoritesDataHelper.DeleteFavoriteForComponentId(this._context.favoriteCommandData.ComponentId(),this.
_context.favoriteData(),f.AITelemetryConstants.FavoritesSplitter).then(function(){t._context.favoriteCommandData.
FavoriteName(t._context.favoriteCommandData.FavoriteName());t._context.favoriteData(null);t._context.
isFavoriteDataDirty(!1);r.raise(u.NotificationDefinitions.FavoriteNotification.deleted,undefined,i)}
,function(){r.raise(u.NotificationDefinitions.FavoriteNotification.deleteFail,undefined,i)}).finally(
function(){t._context.favoriteProgress(!1);t._context.isFavoritePaneExpanded(!1);e.resolve()})),f.logCommandClicked(
this._containerName,this._context.favoriteCommandData.ComponentId()),e.promise},n.prototype.hasUserData=
function(){return!1},n}();t.FavoriteDeleteDialogToolCommand=y;w=function(){function n(t,r,u){var o=this,
b,k,d,g,h,w,nt;this._containerName=f.AITelemetryConstants.FavoritesSplitter;this._containerType=3;this.
_container=t.container;this._favViewContext=ko.observable(t);this.favoriteToolBarVM=new MsPortalFx.ViewModels.
Toolbars.Toolbar(t.container);this.componentId=ko.observable();this.currentTimeSelection=ko.observable(
);this.isFavoriteTopPaneExpanded=ko.observable(!1);this.favoriteData=ko.observable(null);this.isfavoriteFormInitialize=
ko.observable(!0);this.usedSharedFavoriteNames=ko.observableArray([]);this.usedMyFavoriteNames=ko.observableArray(
[]);this.usedFavoriteNames=ko.observableArray([]);this.isFavoriteDataDirty=ko.observable(!1);this.favoriteProgressBar=
new MsPortalFx.ViewModels.Controls.Visualization.ProgressBar.ViewModel(this._container);this.favoriteProgressBar.
status(4);this.isFavoriteProgressVisible=ko.observable(!1);this.showFavoritePane=ko.observable(!1);this.
_favoritesDataHelper=new i.FavoritesDataHelper(this._container,t.dataContext.sharedDataContext);this.
curFavName=ko.observable("");b={label:ko.observable(c.favoriteNameTextBoxTitle),infoBalloonContent:ko.
observable(c.favoriteNameTextBoxInfoBalloonMsg),valueUpdateTrigger:1,validations:ko.observableArray(
[new MsPortalFx.ViewModels.CustomValidation(null,function(n){return o._validateFavoriteName(n)})])};
this.favoriteNameTextBox=new MsPortalFx.ViewModels.Forms.TextBox.ViewModel(this._container,b);this.favoriteNameTextBox.
value(t.defaultBladeName);this.favoriteNameTextBox.valid.subscribe(this._container,function(n){n?(o.
_favoriteSaveAsCommandViewModel.disabled(!1),o._favoriteSaveCommandViewModel.disabled(!1)):(o._favoriteSaveAsCommandViewModel.
disabled(!0),o._favoriteSaveCommandViewModel.disabled(!0))});k={label:ko.observable(c.favoritePrivacyTitle),
infoBalloonContent:ko.observable(c.favoritePrivacyInfoBalloonMsg),options:ko.observableArray([{text:
ko.observable(c.sharedFavoritesLabel),value:e.FavoriteTypes.SharedFavorite},{text:ko.observable(c.myFavoritesLabel),
value:e.FavoriteTypes.MyFavorite}])};this.favoritePrivacyDropDown=new MsPortalFx.ViewModels.Forms.DropDown.
ViewModel(this._container,k);this.favoritePrivacyDropDown.value(e.FavoriteTypes.SharedFavorite);d={label:
ko.observable(c.favoriteTimeTypeDropDownTitle),infoBalloonContent:ko.observable(c.favoriteTimeTypeDropDownInfoBalloonMsg),
options:ko.observableArray([{text:ko.observable(c.favoriteRelativeTimeType),value:1},{text:ko.observable(
c.favoriteAbsoluteTimeType),value:2}])};this.favoriteTimeDropDown=new MsPortalFx.ViewModels.Forms.DropDown.
ViewModel(this._container,d);this.favoriteTimeDropDown.value(1);this.favoriteTimeDropDown.enabled(!0);
g={label:ko.observable(c.favoriteNameTextBoxTitle),infoBalloonContent:ko.observable(c.favoriteNameTextBoxInfoBalloonMsg),
valueUpdateTrigger:1,validations:ko.observableArray([new MsPortalFx.ViewModels.CustomValidation(null,
function(n){return o._validateFavoriteName(n)})])};this.SaveAsDialogTextBox=new MsPortalFx.ViewModels.
Forms.TextBox.ViewModel(this._container,g);this.SaveAsDialogTextBox.value(t.defaultBladeName);this._favoriteCommandData=
{FavoriteName:this.favoriteNameTextBox.value,ComponentId:this.componentId,TimeType:this.favoriteTimeDropDown.
value,FavoriteType:this.favoritePrivacyDropDown.value,Version:u,Config:r};h={isFavoritePaneExpanded:
this.isFavoriteTopPaneExpanded,favoriteCommandData:this._favoriteCommandData,favoriteData:this.favoriteData,
isFavoriteDataDirty:this.isFavoriteDataDirty,favoritesDataHelper:this._favoritesDataHelper,saveAsDialogTextBoxValue:
this.SaveAsDialogTextBox.value,favoriteProgress:this.isFavoriteProgressVisible};ko.computed(this._container,
function(){o.favoriteData()&&o.isfavoriteFormInitialize()===!1&&(o._favoriteCommandData.FavoriteName(
)!==o.favoriteData().Name||o._favoriteCommandData.FavoriteType()!==o.favoriteData().FavoriteType)&&o.
isFavoriteDataDirty(!0)});this._favoriteSaveCommandViewModel=new l.CommandButton;this._favoriteSaveCommandViewModel.
label(c.commandSave);this._favoriteSaveCommandViewModel.icon(p.Save());this._favoriteSaveCommandViewModel.
commandContext(n._favoriteSaveCommandContextName);this._favoriteSaveCommandViewModel.command=new a(h);
this._favoriteSaveCommandViewModel.disabled(!1);w=new MsPortalFx.ViewModels.Dialogs.FormDialog(c.commandSaveAs);
w.row1column1=this.SaveAsDialogTextBox;this._favoriteSaveAsCommandViewModel=new l.DialogButton;this.
_favoriteSaveAsCommandViewModel.label(c.commandSaveAs);this._favoriteSaveAsCommandViewModel.icon(s.Content.
Images.saveAs);this._favoriteSaveAsCommandViewModel.dialogOptions=w;this._favoriteSaveAsCommandViewModel.
command=new v(h);this._favoriteSaveAsCommandViewModel.disabled(!1);this._favoriteDeleteCommandViewModel=
new l.DialogButton;this._favoriteDeleteCommandViewModel.label(c.commandDelete);this._favoriteDeleteCommandViewModel.
icon(p.Delete());nt=new MsPortalFx.ViewModels.Dialogs.MessageBox(c.favoriteDeleteMsgTitle,c.favoriteDeletePrompt,
4);this._favoriteDeleteCommandViewModel.dialogOptions=nt;this._favoriteDeleteCommandViewModel.command=
new y(h);this._favoriteDeleteCommandViewModel.disabled(!0);this.favoriteToolBarVM.setItems([this._favoriteSaveCommandViewModel,
this._favoriteSaveAsCommandViewModel,this._favoriteDeleteCommandViewModel]);this.showFavoritePane.subscribe(
this._container,function(n){n!==!0||o.favoriteData()&&o.usedFavoriteNames().length!==0||(o.componentId(
)?o._favoritesDataHelper.getFavoritesDataForComponentId(o.componentId(),t.partName).then(function(n)
{o._fillUsedFavNames(n);var t=o._createFavNameSuggestions();o.SaveAsDialogTextBox.value(t);o.favoriteNameTextBox.
value(t)},function(){f.logWarning("Fail to get favorites list for component, no unique name suggestion for the favorite name",
o._containerType,o._containerName,o.componentId(),{Area:"Favorites"})}):f.logWarning("No componentID",
o._containerType,o._containerName,o.componentId(),{Area:"Favorites"}))})}return n.prototype.onInputsSet=
function(n){var t=this,i;!this.componentId()&&n.ComponentId&&this.componentId(n.ComponentId);n&&n.FavoriteData?
this._favoritesDataHelper.getFavoritesDataForComponentId(this.componentId(),this._containerName).then(
function(i){var u=i.first(function(t){return t.FavoriteId===n.FavoriteData.FavoriteId});u?(t._favoriteDeleteCommandViewModel.
disabled(!1),r.FavoriteEqual(t.favoriteData(),u)?t._favoriteCommandData.Config.equalsCurrentConfig(t.
favoriteData().Config,t.componentId(),t._containerName,t._containerType,t.favoriteData().Name)?t.isFavoriteDataDirty(
!1):t.isFavoriteDataDirty(!0):(t.favoriteData(u),t.favoriteNameTextBox.value(u.Name),t.favoritePrivacyDropDown.
value(u.FavoriteType)),t.curFavName(u.Name),t._fillUsedFavNames(i),t.SaveAsDialogTextBox.value(t._createFavNameSuggestions(
))):(t.favoriteData(null),t.curFavName(""),t.isFavoriteDataDirty(!1))},function(){f.logWarning("Fail to get favorites list for component, Fail to get favorites list for component in favorite view model helper oninputset method",
t._containerType,t._containerName,t.componentId(),{Area:"Favorites"})}).finally(function(){return t.
isfavoriteFormInitialize(!1)}):n.FavoriteData||this._favoriteDeleteCommandViewModel.disabled(!0);n.CurrentTimeSelection&&
(this.currentTimeSelection(n.CurrentTimeSelection),i=!!n.CurrentTimeSelection.endTime,(!this.favoriteTimeDropDown.
enabled()||this.favoriteTimeDropDown.enabled()&&this.favoriteTimeDropDown.value()===1)&&this.favoriteTimeDropDown.
value(i?2:1),this.favoriteTimeDropDown.enabled(!i));n.showFavoriteConfig!==null&&n.showFavoriteConfig!==
undefined&&n.showFavoriteConfig!==this.showFavoritePane()&&(this.showFavoritePane(n.showFavoriteConfig),
this.isFavoriteTopPaneExpanded(n.showFavoriteConfig))},n.prototype._validateFavoriteName=function(n)
{var r=$.Deferred(),t=!0,i="";return n&&n.trim().length!==0?this.curFavName()!==n&&(n=n.trim(),n.length>
255?(i=c.createFavoriteNameTooLong,t=!1):this.favoritePrivacyDropDown.value()===e.FavoriteTypes.SharedFavorite&&
this.usedSharedFavoriteNames()&&this.usedSharedFavoriteNames().length>0?(t=this.usedSharedFavoriteNames(
).indexOf(n)>-1?!1:!0,i=t?i:c.favoritesNameDupErrorMsg):this.favoritePrivacyDropDown.value()===e.FavoriteTypes.
MyFavorite&&this.usedMyFavoriteNames()&&this.usedMyFavoriteNames().length>0&&(t=this.usedMyFavoriteNames(
).indexOf(n)>-1?!1:!0,i=t?i:c.favoritesNameDupErrorMsg)):(i=c.createFavoriteNameRequired,t=!1),r.resolve(
{valid:t,message:i}),r.promise()},n.prototype._fillUsedFavNames=function(n){var t=[],i=[],r=[];n.forEach(
function(n){n.FavoriteType===e.FavoriteTypes.MyFavorite?t.push(n.Name):i.push(n.Name);r.push(n.Name)}
);this.usedMyFavoriteNames(t);this.usedSharedFavoriteNames(i);this.usedFavoriteNames(r)},n.prototype.
_createFavNameSuggestions=function(){var n=this.favoriteNameTextBox.value(),r,t,i;if(!this.usedFavoriteNames(
)||this.usedFavoriteNames().length===0)if(this.favoriteData()&&this.favoriteData().Name)n=this.favoriteData(
).Name.trim();else return n;if(r=/[0-9]+$/g,n=n.replace(r,"").trim(),this.usedFavoriteNames().first(
function(t){return t.toLocaleLowerCase()===n.toLocaleLowerCase()})){for(t=1;t<=Number.MAX_VALUE;t++)
if(i=n+" "+t,!this.usedFavoriteNames().first(function(n){return n.toLocaleLowerCase()===i.toLocaleLowerCase(
)}))return i}else return n},n.prototype.hasUserData=function(){return!1},n._favoriteSaveCommandContextName=
"Favorite Save Command Context",n}();t.FavoritePanelCreator=w;b=function(){function n(){this.dirtyState=
ko.observable(!1)}return n}();t.FavoriteEditScopeSwitch=b});define("Shared/FavoritesDataHelper",["require",
"exports","./AjaxHelper","./UrlHelper","./Constants","./QueryBase"],function(n,t,i,r,u,f){"use strict";
var e=function(){function n(n,t){this._favoritesView=t._favoriteDataForComponentEntityCache.createView(
n)}return n.prototype.getFavoritesDataForComponentId=function(n,t,i){var e=this,r;return i===void 0&&
(i=!1),r=$.Deferred(),this._favoritesView.item()?i?this._favoritesView.refresh().then(function(){r.resolve(
e._favoritesView.item())}):r.resolve(this._favoritesView.item()):this._favoritesView.fetch(new f.QueryBase(
n,t,u.Queries.GetFavoritesList)).then(function(){var t=e._favoritesView.item();t?r.resolve(t):r.reject(
{reason:"Null returned for Favorites list query: "+n.Name})},function(){r.reject({reason:"Could not get favorites data for componentid: "+
n.Name})}),r.promise()},n.prototype.SetFavoriteDataForComponentId=function(t,i,r){var s=this,f=$.Deferred(
),e,o;return i&&i.FavoriteId?(e=n._buildFavoriteDataForComponentIdPath(t,i.FavoriteId),o={_componentId:
t,_containerName:r,_queryName:u.Queries.PutFavorite},n._setFavoriteDataFromGraphPath(e,o,i).then(function(
){s._favoritesView.refresh().then(function(){f.resolve()},function(){f.reject({reason:"Unable to clear the cache for favorites."})}
)},function(){f.reject({reason:"Could not set favorites for component id: "+t.Name})})):f.reject({reason:
"No favorite Data with component: "+t.Name}),f.promise()},n.prototype.DeleteFavoriteForComponentId=function(
t,i,r){var s=this,f=$.Deferred(),e,o;return i&&i.FavoriteId?(e=n._buildFavoriteDataForComponentIdPath(
t,i.FavoriteId),o={_componentId:t,_containerName:r,_queryName:u.Queries.DeleteFavorite},n._deleteFavoriteDataFromGraphPath(
e,o).then(function(){s._favoritesView.refresh().then(function(){f.resolve()},function(){f.reject({reason:
"Unable to clear the cache for favorites."})})},function(){f.reject({reason:"Could not delete favorites for component id: "+
t.Name})})):f.reject({reason:"No favorite Data with component: "+t.Name}),f.promise()},n._setFavoriteDataFromGraphPath=
function(n,t,r){return i.apiPut(n,t,r)},n._deleteFavoriteDataFromGraphPath=function(n,t){return i.apiDelete(
n,t)},n._buildFavoriteDataForComponentIdPath=function(n,t){return r.buildGraphProxyPath(n.SubscriptionId,
n.ResourceGroup,u.GraphPathTemplates.Favorite,{componentName:n.Name,favoriteId:t})},n}();t.FavoritesDataHelper=
e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/FavoritesCommandBase",["require",
"exports","./InsightsTelemetry","./DataModels/FavoritesData","../_generated/ExtensionDefinition","./ComponentIdService"],
function(n,t,i,r,u,f){"use strict";var e=function(n){function t(t,r,u){var f=this;n.call(this);this.
_editScopeView=u._favoriteDataFormEditScopeCache.createView(t);this.icon(MsPortalFx.Base.Images.Favorite(
));this._containerName=i.AITelemetryConstants.FavoriteCommand;this._containerType=2;this.showFavoriteConfig=
ko.observable(!1);this._editScopeView=u._favoriteDataFormEditScopeCache.createView(t);this._editScope=
this._editScopeView.editScope;this.isCurrentDocDirty=ko.observable(!1);this.isCurrentDocDirty.subscribe(
t,function(n){n===!0?f._editScope().root.dirtyState(!0):f._editScope().revertAll()});this.CfavoriteData=
ko.observable();this._telemetryHelper=new i.TelemetryHelper(this,t)}return __extends(t,n),t.prototype.
hasUserData=function(){return!1},t.prototype.execute=function(){this.showFavoriteConfig()===!0?this.
showFavoriteConfig(!1):this.showFavoriteConfig(!0);i.logCommandClicked(this._containerName,undefined)}
,t.prototype.onInputsSet=function(n){var t=this;if(n)return n.ComponentId&&MsPortalFx.Base.Security.
hasPermission(f.componentIdToResourceId(n.ComponentId),[u.AssetTypes.ApplicationInsights.Permissions.
write]).then(function(r){if(i.logCustomEvent(i.AITelemetryConstants.RBAC,t._containerType,t._containerName,
n.ComponentId,{hasPermission:r}),r)t.enabled(!0);else{t.enabled(!1);return}}),r.FavoriteEqual(this.CfavoriteData(
),n.CIfavoriteData)||this.CfavoriteData(n.CIfavoriteData),n.favoriteTopPaneStatus===!1&&this.showFavoriteConfig(
)!==n.favoriteTopPaneStatus&&this.showFavoriteConfig(n.favoriteTopPaneStatus),this._editScope()&&this.
_editScope().root&&this.isCurrentDocDirty()!==n.isFavoriteDataDirty&&this.isCurrentDocDirty(n.isFavoriteDataDirty),
this._telemetryHelper.instrument(undefined,0,function(){return t._editScopeView.fetchForNewData(n.editScopeId)}
)},t}(MsPortalFx.ViewModels.Command);t.FavoritesCommandBase=e});__extends=this.__extends||function(n,
t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("Shared/DataModels/NoDataQueries",["require","exports","../TimeContext","../Constants",
"../DataQueries/AggregateQuery","../Enumerations"],function(n,t,i,r,u){"use strict";var l=function(n)
{function t(u,f,e){n.call(this,u,f,r.Queries.NoRequestsEver);this.timeContext=e?new i.TimeContext(r.
Durations.ShouldBeThirtyButReallySevenDays,undefined,e.createdTime):new i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays);
this.addMetricsToCalculate(t.noRequestsEverMetric.name,t.noRequestsEverMetric.aggregateFunction)}return __extends(
t,n),t.transform=function(n){if(!n||!n.d||!n.d.results||!n.d.results.value)return 0;var i=JSON.parse(
n.d.results.value),r=i.aggregations.result[t.noRequestsEverMetric.name+"."+t.noRequestsEverMetric.aggregateFunction].
value;return r===0?2:1},t.noRequestsEverMetric={name:r.MetricNames.NoRequestsEver,aggregateFunction:
r.FunctionNames.Sum},t}(u.AggregateQuery),f,e,o,s,h,c;t.NoRequestsEverQuery=l;f=function(n){function t(
u,f,e){n.call(this,u,f,r.Queries.NoSessionsEver);this.timeContext=e?new i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays,
undefined,e.createdTime):new i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays);this.addMetricsToCalculate(
t.noSessionsEverMetric.name,t.noSessionsEverMetric.aggregateFunction)}return __extends(t,n),t.transform=
function(n){if(!n||!n.d||!n.d.results||!n.d.results.value)return 0;var i=JSON.parse(n.d.results.value),
r=i.aggregations.result[t.noSessionsEverMetric.name+"."+t.noSessionsEverMetric.aggregateFunction].value;
return r===0?2:1},t.noSessionsEverMetric={name:r.MetricNames.Sessions,aggregateFunction:r.FunctionNames.
Cardinality},t}(u.AggregateQuery);t.NoSessionsEverQuery=f;e=function(n){function t(u,f,e){n.call(this,
u,f,r.Queries.NoPageViewsEver);this.timeContext=e?new i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays,
undefined,e.createdTime):new i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays);this.addMetricsToCalculate(
t.noPageViewsEverMetric.name,t.noPageViewsEverMetric.aggregateFunction)}return __extends(t,n),t.transform=
function(n){var i,r,u;return n&&n.d&&n.d.results&&n.d.results.value&&(i=JSON.parse(n.d.results.value),
i&&i.aggregations&&i.aggregations.result&&(r=i.aggregations.result[t.noPageViewsEverMetric.name+"."+
t.noPageViewsEverMetric.aggregateFunction],r))?(u=r.value,u===0?2:1):0},t.noPageViewsEverMetric={name:
r.MetricNames.PageViews,aggregateFunction:r.FunctionNames.Sum},t}(u.AggregateQuery);t.NoPageViewsEverQuery=
e;o=function(n){function t(t,u,f){n.call(this,t,u,r.Queries.NoCustomEventsEver);this.timeContext=f?new
i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays,undefined,f.createdTime):new i.TimeContext(
r.Durations.ShouldBeThirtyButReallySevenDays);this.addMetricsToCalculate(r.MetricNames.CustomEventsCount,
r.FunctionNames.Sum)}return __extends(t,n),t.transform=function(n){var t,i,u;return n&&n.d&&n.d.results&&
n.d.results.value&&(t=JSON.parse(n.d.results.value),t&&t.aggregations&&t.aggregations.result&&(i=t.aggregations.
result[r.MetricNames.CustomEventsCount+"."+r.FunctionNames.Sum],i))?(u=i.value,u===0?2:1):0},t}(u.AggregateQuery);
t.NoCustomEventsEverQuery=o;s=function(n){function t(t,u,f){n.call(this,t,u,r.Queries.NoCrashesEver);
this.timeContext=f?new i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays,undefined,f.createdTime):
new i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays);this.addMetricsToCalculate(r.MetricNames.
Crashes,r.FunctionNames.Sum)}return __extends(t,n),t.transform=function(n){var t,i,u;return n&&n.d&&
n.d.results&&n.d.results.value&&(t=JSON.parse(n.d.results.value),t&&t.aggregations&&t.aggregations.result&&
(i=t.aggregations.result[r.MetricNames.Crashes+"."+r.FunctionNames.Sum],i))?(u=i.value,u===0?2:1):0}
,t}(u.AggregateQuery);t.NoCrashesEverQuery=s;h=function(n){function t(u,f,e){n.call(this,u,f,r.Queries.
NoRemoteDependenciesEver);this.timeContext=e?new i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays,
undefined,e.createdTime):new i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays);this.addMetricsToCalculate(
t.noRemoteDependenciesEverMetric.name,t.noRemoteDependenciesEverMetric.aggregateFunction)}return __extends(
t,n),t.transform=function(n){var i,r,u;return n&&n.d&&n.d.results&&n.d.results.value&&(i=JSON.parse(
n.d.results.value),i&&i.aggregations&&i.aggregations.result&&(r=i.aggregations.result[t.noRemoteDependenciesEverMetric.
name+"."+t.noRemoteDependenciesEverMetric.aggregateFunction],r))?(u=r.value,u===0?2:1):0},t.noRemoteDependenciesEverMetric=
{name:r.MetricNames.RemoteDependencyCount,aggregateFunction:r.FunctionNames.Sum},t}(u.AggregateQuery);
t.NoRemoteDependenciesEverQuery=h;c=function(n){function t(u,f,e){n.call(this,u,f,r.Queries.NoPerfCountersEver);
this.timeContext=e?new i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays,undefined,e.createdTime):
new i.TimeContext(r.Durations.ShouldBeThirtyButReallySevenDays);this.addMetricsToCalculate(t.noPerfCountersEverMetric.
name,t.noPerfCountersEverMetric.aggregateFunction)}return __extends(t,n),t.transform=function(n){var
i,r,u;return n&&n.d&&n.d.results&&n.d.results.value&&(i=JSON.parse(n.d.results.value),i&&i.aggregations&&
i.aggregations.result&&(r=i.aggregations.result[t.noPerfCountersEverMetric.name+"."+t.noPerfCountersEverMetric.
aggregateFunction],r))?(u=r.value,u===0?2:1):0},t.noPerfCountersEverMetric={name:"performanceCounter.available_bytes.value",
aggregateFunction:r.FunctionNames.Sum},t}(u.AggregateQuery);t.NoPerfCountersEverQuery=c});define("Shared/DataModels/MonitoredDataProvider",
["require","exports","../../Shared/AjaxHelper","../DataQueries/AlertQuery","../DataQueries/AverageResponseTimeSummaryQuery",
"../ComponentIdService","../Constants","../../Shared/InsightsTelemetry","../QueryBase","../DataQueries/ServerRequestsQuery",
"../TransformHelper","../../Shared/ThenableWrapper","../../Shared/TimeContext","../../Shared/UrlHelper",
"../WebsiteComponentIdHelper","../WebSiteExtensionService"],function(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y,p)
{"use strict";var b=function(){function n(n){if(MsPortalFx.Util.isNullOrUndefined(n))throw new Error(
"Invalid input parameter");this.monitoredComponentId=f.nonAIResourceIdToNonAIComponentId(n);this.resourceId=
n.toLowerCase();this.ResourceType=this.resourceId.indexOf("microsoft.classiccompute/virtualmachines")>
0?2:1;this._containerName=o.AITelemetryConstants.MonitoredDataProvider;this._containerType=3}return n.
prototype.getApplicationInfo=function(){var t=this,n=$.Deferred(),i=[];return this.ResourceType===1?
p.fetchExtensionState(this.monitoredComponentId,o.AITelemetryConstants.MonitoredDataProvider).then(function(
r){r&&r.id?t.getApplicationInfoWithLinkedComponents().then(function(t){n.resolve(t)}):n.resolve(i)},
function(t){n.reject(t)}):this.getApplicationInfoWithLinkedComponents().then(function(t){n.resolve(t)}
),n.promise()},n.prototype.getApplicationInfoWithLinkedComponents=function(){var t=this,n=$.Deferred(
),i=[],r=[],u=new a.TimeContext(e.Durations.OneHour);return f.fetchComponentsForSubscription(this.monitoredComponentId.
SubscriptionId,o.AITelemetryConstants.MonitoredDataProvider).then(function(f){var e=t._getLinkedAIComponents(
f);e.forEach(function(n){var f=t._getMonitoredState(n,u).then(function(n){return i.push(n)});r.push(
f)});Q.all(r).then(function(){n.resolve(i)},function(t){n.reject(t)})}),n.promise()},n.prototype.hasUserData=
function(){return!1},n.prototype._getMonitoredState=function(t,i){var u=$.Deferred(),r=f.resourceIdToComponentId(
t.id),a,v=[],y=n.getServerResponseTime(r,i),p=undefined,o,s,h,c;return y.then(function(n){return p=n}
),o=undefined,s=n.getFailedRequests(r,i),s.then(function(n){return o=n}),h=undefined,c=n.hasActiveAlerts(
r,this._containerName),c.then(function(n){return h=n?"Unhealthy":"Healthy"}),v.push(y,s,c),l.all(v).
then(function(){a={lastStatus:h,lastResponseTimeSeconds:p,lastErrorRatePercent:o,name:r.Name,id:t.id,
displayName:r.Name,providerId:e.ApplicationInsightsProviderIdentifier};u.resolve(a)},function(n){u.reject(
n)}),u.promise()},n.getServerResponseTime=function(t,r){var f=$.Deferred(),s=undefined,o=new u.AverageResponseTimeSummaryQuery(
t,e.Queries.AverageResponseTimeSummary),h,c;return o.timeContext=r,h=v.getUrlFromGraphTemplate(e.GraphPathTemplates.
Aggregate,o),c=i.apiPost(h,o,o.getPayload()),c.then(function(n){s=u.AverageResponseTimeSummaryQuery.
getAverageServerResponseTime(n);f.resolve(s)},function(t){n.IsNotProvisioned(t)?f.resolve(null):f.reject(
t)}),f.promise()},n.getFailedRequests=function(t,r){var f=undefined,c=undefined,u=$.Deferred(),s=new
h.ServerRequestsQuery(t,o.AITelemetryConstants.MonitoredDataProvider),l,a;return s.timeContext=r,l=v.
getUrlFromGraphTemplate(e.GraphPathTemplates.Aggregate,s),a=i.apiPost(l,s,s.getPayload()),a.then(function(
n){var t=h.ServerRequestsQuery.getRequestsCount(n);f=t[h.ServerRequestsQuery.TotalRequestsMetric];c=
t[h.ServerRequestsQuery.FailedRequestsMetric];MsPortalFx.Util.isNullOrUndefined(c)||MsPortalFx.Util.
isNullOrUndefined(f)||f===0?u.resolve(null):u.resolve(c/f*100)},function(t){n.IsNotProvisioned(t)?u.
resolve(null):u.reject(t)}),u.promise()},n.hasActiveAlerts=function(t,r){var u=$.Deferred(),f=new s.
QueryBase(t,r,e.Queries.GetAlerts),o=v.getUrlFromGraphTemplate(e.GraphPathTemplates.Alerts,f);return i.
apiGet(o,f).then(function(i){var e=c.unwrapCsmArray(i),f,o;if(!e||e.length===0){u.resolve(undefined);
return}if(o="hidden-link:/subscriptions/{0}/resourcegroups/{1}/providers/microsoft.insights/components/{2}".
format(t.SubscriptionId,t.ResourceGroup,t.Name).toLowerCase(),f=n.findLinkedEnabledAlertRules(e,t,o),
!f||f.length===0){u.resolve(undefined);return}n._lookupAlerts(f,t,u,r)},function(n){u.reject(n)}),u.
promise()},n.prototype._getLinkedAIComponents=function(t){var i;return i=this.ResourceType===1?y.hiddenlinkedWebsiteFormat(
this.monitoredComponentId.SubscriptionId,this.monitoredComponentId.Name):n.hiddenlinkedVMFormat(this.
monitoredComponentId.SubscriptionId,this.monitoredComponentId.Name),f._findComponents(i,t)},n._lookupAlerts=
function(n,t,u,f){for(var o,a,h=!1,l=[],s=0;s<n.length;s++)o=new r.AlertQuery(t,f),o.alertName=n[s].
name,a=v.getUrlFromGraphTemplate(e.GraphPathTemplates.AlertRulesIncidents,o),l.push(i.apiGet(a,o));Q.
allSettled(l).then(function(n){h=n.some(function(n){var i=c.unwrapCsmArray(n.value),t;return i?(t=i,
t&&t.length>0&&t.some(function(n){return n.isActive===!0})):!1});u.resolve(h)},function(n){u.reject(
n)})},n.findLinkedEnabledAlertRules=function(n,t,i){return n.filter(function(n){var t=JSON.stringify(
n.tags).toLowerCase();return(n.properties.IsEnabled||n.properties.isEnabled)&&t.toLowerCase().indexOf(
i)>0})},n.IsNotProvisioned=function(n){return n&&n.status===e.AggregateEndpointNotProvisionedCode},n.
hiddenlinkedVMFormat=function(n,t){var i=MsPortalFx.ViewModels.Controls.Validators.escapeRegExpOperators(
t);return"hidden-link:/subscriptions/{0}/resourceGroups/[^/]*/providers/Microsoft\\.ClassicCompute/virtualMachines/{1}$".
format(n,i)},n}(),w;t.MonitoredDataProvider=b,function(n){n[n.Website=1]="Website";n[n.VirtualMachine=
2]="VirtualMachine"}(w||(w={}))});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Shared/DataQueries/AlertQuery",["require","exports","../../Shared/Constants","../../Shared/QueryBase"],
function(n,t,i,r){"use strict";var u=function(n){function t(t,r){n.call(this,t,r,i.Queries.Alert)}return __extends(
t,n),t.getKey=function(){throw Error("Not implemented - this query does not support key serialization.");
},t}(r.QueryBase);t.AlertQuery=u});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Shared/DataQueries/AverageResponseTimeSummaryQuery",["require","exports","../../Shared/DataModels/AggregateListSet",
"../../Shared/DataQueries/AggregateQuery","../../Shared/Constants","../../Shared/DateUtils"],function(
n,t,i,r,u,f){"use strict";var e=function(n){function t(t,i){n.call(this,t,i,u.Queries.AverageResponseTimeSummary);
this.addMetricsToCalculate(u.MetricNames.ServerResponseTime,u.FunctionNames.Avg)}return __extends(t,
n),t.getAverageServerResponseTime=function(n){var e=r.AggregateQuery.getResult(n),t=i.ExtractValue(e,
u.MetricNames.ServerResponseTime,u.FunctionNames.Avg);return MsPortalFx.Util.isNullOrUndefined(t)?null:
f.TimeUnits.convert(t,f.TimeUnits.ticks,f.TimeUnits.seconds)},t}(r.AggregateQuery);t.AverageResponseTimeSummaryQuery=
e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/DataQueries/ServerRequestsQuery",
["require","exports","./AggregateQuery","../Constants","../DataModels/AggregateListSet"],function(n,
t,i,r,u){"use strict";var f=function(n){function t(i,u){n.call(this,i,u,r.Queries.TotalRequests);this.
addMetricsToCalculate(t.FailedRequestsMetric,r.FunctionNames.Sum);this.addMetricsToCalculate(t.TotalRequestsMetric,
r.FunctionNames.Sum)}return __extends(t,n),t.getRequestsCount=function(n){var e=i.AggregateQuery.getResult(
n),o=u.ExtractValue(e,t.TotalRequestsMetric,r.FunctionNames.Sum),s=u.ExtractValue(e,t.FailedRequestsMetric,
r.FunctionNames.Sum),f={};return f[t.TotalRequestsMetric]=o,f[t.FailedRequestsMetric]=s,f},t.TotalRequestsMetric=
r.MetricNames.TotalRequests,t.FailedRequestsMetric=r.MetricNames.FailedRequests,t}(i.AggregateQuery);
t.ServerRequestsQuery=f});define("Shared/WebSiteExtensionService",["require","exports","./AjaxHelper",
"./Constants","./UrlHelper"],function(n,t,i,r,u){"use strict";function f(n){return n.slotName?r.GraphPathTemplates.
ExtenstionStateWithSlot.format({site:n.Name,slotName:n.slotName}):r.GraphPathTemplates.ExtensionState.
format({site:n.Name})}function e(n,t){var e=$.Deferred();if(!n)throw new Error("ComponentId: null or undefined.");
var o=f(n),s=u.buildGraphProxyPath(n.SubscriptionId,n.ResourceGroup,o),h={_componentId:undefined,_containerName:
t,_queryName:r.Queries.WebSiteExtensions};return i.apiGet(s,h).then(function(n){var t=[];n&&n.properties&&
(t=n.properties);e.resolve(t)},function(n){e.reject(n)}),e.promise()}function o(n,i){var r=$.Deferred(
),u=null;return e(n,i).then(function(n){if(n)for(var i=0;i<n.length;i++)if(n[i].id===t.WebSiteExtensionName)
{u=n[i];break}r.resolve(u)},function(n){r.reject(n)}),r.promise()}t.WebSiteExtensionName="Microsoft.ApplicationInsights.AzureWebSites";
t.fetchExtensionState=o});define("Shared/ChartDefinition",["require","exports","./InsightsTelemetry",
"./Constants","../_generated/ExtensionDefinition","./MetricsExplorerChartDefinition","ClientResources",
"./StringMapUtils"],function(n,t,i,r,u,f,e,o){"use strict";var s=function(){function n(){if(this._chartDefinitionSet=
{},this._chartDefinitionSetInProduct={},this._chartDefinitions=[],this._chartDefinitionsInProduct=[],
this._actionDefinitionSet={},this._actionDefinitions=[],this._titleSet={},n._instance)throw new Error(
"Error: Instantiation failed: Use ChartDefinition.Instance() instead of new.");this.setChartAndActionDefinitionAndTitle(
n.CustomEventsGridMetrics,{chart:{id:"A3E8B6EF-6C0A-446E-9242-DCAB2E1B9F71",name:i.AITelemetryConstants.
CustomEventsPart,chartType:"Grid",palette:"darkBlueHues",aggregation:r.FunctionNames.Sum,metrics:[{id:
r.MetricNames.CustomEventsCount}],grouping:{kind:"ByDimension",dimension:r.DimensionNames.CustomEventName},
clickAction:{defaultBlade:"MetricsExplorerBlade",uri:f.MetricsExplorerChartDefinition.ServiceCustomEventMeToMe},
excludedColumns:[e.metricsPercentTotalColumn]}},{action:{id:"A3E8B6EF-6C0A-446E-9242-DCAB2E1B9F71",defaultBlade:
u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:f.MetricsExplorerChartDefinition.
CustomEventsMetrics},notProvisionedBlade:u.BladeNames.eventsConfigurationBlade,notProvisionedMessage:
e.learnCollectCustomEventData,noDataHelperKind:r.MetricsExplorerChartNoDataHelperKind.CustomEvents,noDataMessage:
e.noCustomEventsInPeriod}},e.customEventsTitle);this.setChartAndActionDefinitionAndTitle(n.DeviceCustomEventsGridMetrics,
{chart:{id:"51DE6314-886B-4BB9-8071-889DB5B4275C",name:i.AITelemetryConstants.CustomEventsPart,chartType:
"Grid",palette:"darkBlueHues",aggregation:r.FunctionNames.Sum,metrics:[{id:r.MetricNames.CustomEventsCount}],
grouping:{kind:"ByDimension",dimension:r.DimensionNames.CustomEventName},clickAction:{defaultBlade:"MetricsExplorerBlade",
uri:f.MetricsExplorerChartDefinition.DeviceCustomEventMeToMe},excludedColumns:[e.metricsPercentTotalColumn]}},
{action:{id:"51DE6314-886B-4BB9-8071-889DB5B4275C",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:f.MetricsExplorerChartDefinition.DeviceCustomEventsBladeMetrics},notProvisionedBlade:
u.BladeNames.eventsConfigurationBlade,notProvisionedMessage:e.learnCollectCustomEventData,noDataHelperKind:
r.MetricsExplorerChartNoDataHelperKind.CustomEvents,noDataMessage:e.noCustomEventsInPeriod}},e.customEventsTitle);
this.setChartAndActionDefinitionAndTitle(n.TopFailedRequestsGridMetrics,{chart:{id:"279B1754-DA9B-4F86-BDD7-2AAD447B00C8",
name:i.AITelemetryConstants.TopFailedRequestsPart,chartType:"Grid",aggregation:r.FunctionNames.Sum,metrics:
[{id:r.MetricNames.FailedRequests}],grouping:{kind:"ByDimension",dimension:r.DimensionNames.BaseUrl},
horizontalBars:!0,palette:"fail",excludedColumns:[e.metricsPercentTotalColumn],clickAction:{defaultBlade:
"MetricsExplorerBlade",uri:"IndividualRequest"}}},{action:{id:"279B1754-DA9B-4F86-BDD7-2AAD447B00C8",
defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:f.
MetricsExplorerChartDefinition.FailedRequestsDetailTimelineMetrics},notProvisionedBlade:u.BladeNames.
quickStartBlade,notProvisionedMessage:e.learnCollectFailedRequestData,noDataHelperKind:r.MetricsExplorerChartNoDataHelperKind.
Requests,noDataMessage:e.noFailedRequestsInPeriod}},e.topFailedRequestsTitle);this.setChartAndActionDefinitionAndTitle(
n.TopExceptionsGridMetrics,{chart:{id:"ED218DAB-62A7-481F-AC0E-606004B178D2",name:i.AITelemetryConstants.
TopExceptionsPart,chartType:"Grid",aggregation:r.FunctionNames.Sum,metrics:[{id:r.MetricNames.ServerExceptions}],
grouping:{kind:"ByDimension",dimension:r.DimensionNames.ExceptionProblemId},palette:"fail",excludedColumns:
[],horizontalBars:!0,clickAction:{defaultBlade:"MetricsExplorerBlade",uri:"IndividualException"}}},{
action:{id:"ED218DAB-62A7-481F-AC0E-606004B178D2",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:f.MetricsExplorerChartDefinition.TopExceptionsMetrics},notProvisionedBlade:
u.BladeNames.quickStartBlade,notProvisionedMessage:e.learnCollectFailedRequestData,noDataHelperKind:
"",noDataMessage:""}},e.topExceptionsTitle);this.setChartAndActionDefinitionAndTitle(n.SlowestRequestsGridMetrics,
{chart:{id:"59DD47F2-A74C-4A4B-A258-E3D1E2B64BDD",name:i.AITelemetryConstants.SlowestServerRequestsPart,
chartType:"Grid",aggregation:r.FunctionNames.Avg,metrics:[{id:r.MetricNames.ServerResponseTime}],grouping:
{kind:"ByDimension",dimension:r.DimensionNames.BaseUrl},horizontalBars:!1,palette:"blueHues",excludedColumns:
[e.count,e.stdDev],clickAction:{defaultBlade:"MetricsExplorerBlade",uri:"IndividualRequest"}}},{action:
{id:"59DD47F2-A74C-4A4B-A258-E3D1E2B64BDD",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:f.MetricsExplorerChartDefinition.SlowestRequestMetrics},notProvisionedBlade:
u.BladeNames.quickStartBlade,notProvisionedMessage:e.learnCollectServerRequestData,noDataHelperKind:
r.MetricsExplorerChartNoDataHelperKind.Requests,noDataMessage:e.noRequestsInTimePeriod}},e.slowestRequestsTitle);
this.setChartAndActionDefinitionAndTitle(n.TopDevicesGridMetric,{chart:{id:"3EB22DE5-2E25-4063-A0F3-C653BCA11418",
name:i.AITelemetryConstants.TopDeviceModelsPart,chartType:"Grid",palette:"blueHues",aggregation:r.FunctionNames.
Cardinality,metrics:[{id:r.MetricNames.Sessions}],grouping:{kind:"ByDimension",dimension:r.DimensionNames.
DeviceModelDimensionId},clickAction:{defaultBlade:"MetricsExplorerBlade",uri:f.MetricsExplorerChartDefinition.
DevicesMeToMeMetrics}}},{action:{id:"3EB22DE5-2E25-4063-A0F3-C653BCA11418",defaultBlade:u.BladeNames.
metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:f.MetricsExplorerChartDefinition.
TopDeviceMetrics},notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:e.learnCollectSessionData,
noDataHelperKind:r.MetricsExplorerChartNoDataHelperKind.Requests,noDataMessage:e.noDataMessage}},e.topDeviceModelsTitle);
this.setChartAndActionDefinitionAndTitle(n.TopSessionByCountryGridMetric,{chart:{id:"DCA06040-25DA-4D70-A083-BB6D901D3EEF",
name:i.AITelemetryConstants.TopSessionByCountryPart,chartType:"Grid",palette:"greenHues",aggregation:
r.FunctionNames.Cardinality,metrics:[{id:r.MetricNames.Sessions}],grouping:{kind:"ByDimension",dimension:
r.DimensionNames.LocationCountry},clickAction:{defaultBlade:"MetricsExplorerBlade",uri:f.MetricsExplorerChartDefinition.
SessionByCountryMeToMeMetrics}}},{action:{id:"DCA06040-25DA-4D70-A083-BB6D901D3EEF",defaultBlade:u.BladeNames.
metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:f.MetricsExplorerChartDefinition.
TopSessionbyCountryMetric},notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:e.
learnCollectSessionData,noDataHelperKind:r.MetricsExplorerChartNoDataHelperKind.Requests,noDataMessage:
e.noDataMessage}},e.sessionsByRegionTitle);this.setChartAndActionDefinitionAndTitle(n.TopBrowsersGridMetric,
{chart:{id:"5F958EB6-7493-4887-9DC2-90605909FD9D",name:i.AITelemetryConstants.TopBrowsersPart,chartType:
"Grid",palette:"blueHues",aggregation:r.FunctionNames.Cardinality,metrics:[{id:r.MetricNames.Sessions}],
grouping:{kind:"ByDimension",dimension:r.DimensionNames.BrowserVersion},clickAction:{defaultBlade:"MetricsExplorerBlade",
uri:f.MetricsExplorerChartDefinition.BrowsersMeToMeMetrics}}},{action:{id:"5F958EB6-7493-4887-9DC2-90605909FD9D",
defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:f.
MetricsExplorerChartDefinition.BrowsersMetrics},notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:
e.learnCollectSessionData,noDataHelperKind:r.MetricsExplorerChartNoDataHelperKind.Requests,noDataMessage:
e.noDataMessage}},e.topBrowsersTitle);this.setChartAndActionDefinitionAndTitle(n.SessionsEngagementMetricForServiceApp,
{chart:{id:"2BFD2F49-F7FF-4CF6-9939-153FB7F06539",name:i.AITelemetryConstants.SessionEngagementPart,
chartType:"Grid",aggregation:r.FunctionNames.Avg,metrics:[{id:r.MetricNames.SessionDuration}],grouping:
{kind:"ByDimension",dimension:r.DimensionNames.LocationContinent}}},{action:{id:"2BFD2F49-F7FF-4CF6-9939-153FB7F06539",
defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:f.
MetricsExplorerChartDefinition.SessionsEngagementDrillInMetricsForServiceApp},notProvisionedBlade:u.
BladeNames.quickStartBlade,noDataHelperKind:r.MetricsExplorerChartNoDataHelperKind.DefaultSkipRetryNoDataQuery}},
e.sessionEngagementPartTitle);this.setChartAndActionDefinitionAndTitle(n.DauMetricForServiceApp,{chart:
{id:"3A3BE3D3-10E1-4717-8F19-E74B9D75DE14",name:i.AITelemetryConstants.DauSummaryPart,chartType:"Grid",
aggregation:r.FunctionNames.Cardinality,metrics:[{id:r.MetricNames.ActiveUsers}]}},{action:{id:"3A3BE3D3-10E1-4717-8F19-E74B9D75DE14",
defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:"chartDefinitionId:?name=Common/Usages/Usage_L1_UniqueUsersMetrics"},
notProvisionedBlade:u.BladeNames.quickStartBlade,noDataHelperKind:r.MetricsExplorerChartNoDataHelperKind.
DefaultSkipRetryNoDataQuery}},e.dailyActiveUsersPartTitle);this.setChartAndActionDefinitionAndTitle(
n.SessionsEngagementMetricForDeviceApp,{chart:{id:"68904F04-7623-44BA-8A07-5C46CAF57ED6",name:i.AITelemetryConstants.
SessionEngagementPart,chartType:"Chart",aggregation:r.FunctionNames.Avg,metrics:[{id:r.MetricNames.SessionDuration}]}},
{action:{id:"68904F04-7623-44BA-8A07-5C46CAF57ED6",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:f.MetricsExplorerChartDefinition.SessionsEngagementDrillInMetricsForDeviceApp},
notProvisionedBlade:u.BladeNames.quickStartBlade,noDataHelperKind:r.MetricsExplorerChartNoDataHelperKind.
DefaultSkipRetryNoDataQuery}},e.sessionEngagementPartTitle);this.setChartAndActionDefinitionAndTitle(
n.TopCrashesGridMetric,{chart:{id:"5FB712C9-B176-49DC-ADBB-9BDF2FE33579",name:i.AITelemetryConstants.
TopCrashesPart,chartType:"Grid",aggregation:r.FunctionNames.Sum,metrics:[{id:r.MetricNames.Crashes}],
grouping:{kind:"ByDimension",dimension:r.DimensionNames.ExceptionProblemId},excludedColumns:[e.metricsPercentTotalColumn]}},
{action:{id:"5FB712C9-B176-49DC-ADBB-9BDF2FE33579",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:f.MetricsExplorerChartDefinition.CrashesMetrics},notProvisionedBlade:
u.BladeNames.quickStartBlade,notProvisionedMessage:e.learnCollectCrashesData,noDataHelperKind:r.MetricsExplorerChartNoDataHelperKind.
Requests,noDataMessage:e.noCrashesInPeriod}},e.crashesTitle);this.setChartAndActionDefinitionAndTitle(
n.SessionsTrendlineMetricForDeviceApp,{chart:{id:"D687A005-35C2-45A3-B7C3-535C021D2660",name:i.AITelemetryConstants.
SessionsSummaryTrendlinePart,chartType:"Grid",aggregation:r.FunctionNames.Cardinality,metrics:[{id:r.
MetricNames.Sessions}]}},{action:{id:"D687A005-35C2-45A3-B7C3-535C021D2660",defaultBlade:u.BladeNames.
metricsExplorerBlade,defaultBladeInputs:{MetricsExplorerJsonDefinitionId:f.MetricsExplorerChartDefinition.
DeviceSessionsMetrics},notProvisionedBlade:u.BladeNames.quickStartBlade,notProvisionedMessage:e.learnCollectSessionData,
noDataHelperKind:r.MetricsExplorerChartNoDataHelperKind.DefaultSkipRetryNoDataQuery,noDataMessage:e.
noSessionsInPeriod}},e.sessionsTrendlinePartTite);this.setChartAndActionDefinitionAndTitle(n.CrashesTrendlineMetricForDeviceApp,
{chart:{id:"0D8A2408-EB36-471C-A105-BA18D046A5A0",name:i.AITelemetryConstants.CrashesSummaryTrendlinePart,
chartType:"Grid",aggregation:r.FunctionNames.Sum,metrics:[{id:r.MetricNames.Crashes}]}},{action:{id:
"0D8A2408-EB36-471C-A105-BA18D046A5A0",defaultBlade:u.BladeNames.metricsExplorerBlade,defaultBladeInputs:
{MetricsExplorerJsonDefinitionId:f.MetricsExplorerChartDefinition.CrashesMetrics},noDataHelperKind:r.
MetricsExplorerChartNoDataHelperKind.Crashes,noDataMessage:e.noCrashesInPeriod,notProvisionedBlade:u.
BladeNames.quickStartBlade,notProvisionedMessage:e.learnCollectCrashesData}},e.crashesTrendlinePartTite);
n._instance=this}return n.Instance=function(){return n._instance===null&&(n._instance=new n),n._instance}
,n.prototype.fetchChartJsonDefintion=function(n){if(this.validateId(n),!this._chartDefinitionSet[n])
throw new Error("Error: Unrecognized chartDefinitionId specified");return this._chartDefinitionSet[n]}
,n.prototype.fetchActionJsonDefinition=function(n){return(this.validateId(n),!this._actionDefinitionSet[
n])?null:this._actionDefinitionSet[n]},n.prototype.fetchTitle=function(n){return(this.validateId(n),
!this._titleSet[n])?"":this._titleSet[n]},n.prototype.setTestChartDefinition=function(n,t){this._chartDefinitionSetInProduct&&
Object.keys(this._chartDefinitionSetInProduct).length!==0||(this._chartDefinitionSetInProduct=o.clone(
this._chartDefinitionSet));this._chartDefinitionsInProduct&&this._chartDefinitionsInProduct.length!==
0||(this._chartDefinitionsInProduct=this._chartDefinitions.slice(0));this._chartDefinitionSet=o.clone(
this._chartDefinitionSetInProduct);this._chartDefinitions=this._chartDefinitionsInProduct.slice(0);this.
setChartDefinition(n,t)},n.prototype.setJsonChartAndActionDefinitionAndTitle=function(n,t,i,r){this.
validateId(n);this._chartDefinitionSet[n]=t;this._actionDefinitionSet[n]=i;this._titleSet[n]=r},n.prototype.
setChartDefinition=function(n,t){this.validateId(n);this.validateChartDefinition(t);this._chartDefinitionSet[
n]=JSON.stringify(t,null,2);this._chartDefinitions.push(n)},n.prototype.setActionDefinition=function(
n,t){this._actionDefinitionSet[n]=JSON.stringify(t,null,2);this._actionDefinitions.push(n)},n.prototype.
setChartAndActionDefinition=function(n,t,i){this.setChartDefinition(n,t);i&&this.setActionDefinition(
n,i)},n.prototype.setChartAndActionDefinitionAndTitle=function(n,t,i,r){this.setChartAndActionDefinition(
n,t,i);this._titleSet[n]=r},n.prototype.validateId=function(n){if(!n||n.length===0)throw new Error("Error: invalid chartDefinitionId specified");
},n.prototype.validateChartDefinition=function(n){if(typeof n=="string")throw new Error("Error: chartDefinition is expected to be json object");
},n.CustomEventsGridMetrics="CustomEventsGridMetrics",n.DeviceCustomEventsGridMetrics="DeviceCustomEventsGridMetrics",
n.TopFailedRequestsGridMetrics="TopFailedRequestsGridMetrics",n.TopExceptionsGridMetrics="TopExceptionsGridMetrics",
n.SlowestRequestsGridMetrics="SlowestRequestsGridMetrics",n.TopDevicesGridMetric="TopDevicesGridMetric",
n.TopSessionByCountryGridMetric="TopSessionByCountryGridMetric",n.TopBrowsersGridMetric="TopBrowsersGridMetric",
n.DauMetricForServiceApp="DauMetricForServiceApp",n.SessionsEngagementMetricForServiceApp="SessionsEngagementMetricForServiceApp",
n.SessionsEngagementMetricForDeviceApp="SessionsEngagementMetricForDeviceApp",n.TopCrashesGridMetric=
"TopCrashesGridMetric",n.SessionsTrendlineMetricForDeviceApp="SessionsTrendlineMetricForDeviceApp",n.
CrashesTrendlineMetricForDeviceApp="CrashesTrendlineMetricForDeviceApp",n._instance=null,n}(),h;t.ChartDefinition=
s;h=new s});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.
hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/FilterCommandViewModelBase",
["require","exports","./InsightsTelemetry","./TimeContext","./ComponentIdService","./DataModels/SearchFilterInputModel"],
function(n,t,i,r,u,f){"use strict";var e=function(n){function t(t){n.call(this,t);this.icon(MsPortalFx.
Base.Images.Filter());this._container=t;this._containerName=i.AITelemetryConstants.SearchFilterCommand;
this._containerType=2;this.currentFilter=ko.observable();this.initialFilters=ko.observable();this.currentTimeSelection=
ko.observable();this.componentId=ko.observable();this.searchString=ko.observable();this._telemetryHelper=
new i.TelemetryHelper(this,t)}return __extends(t,n),t.prototype.onInputsSet=function(n){var t=this;return this.
_telemetryHelper.instrument(n.ComponentId,0,function(){return n&&n.ComponentId&&(n.CurrentTimeSelection&&
!r.equals(t.currentTimeSelection(),n.CurrentTimeSelection)&&t.currentTimeSelection(n.CurrentTimeSelection),
n.SearchString&&n.SearchString!==""&&t.searchString()!==n.SearchString&&t.searchString(n.SearchString),
n.initialFilter&&n.initialFilter.eventTypes&&n.initialFilter.eventTypes.length>0&&!f.FiltersEqual(t.
initialFilters(),n.initialFilter)&&t.initialFilters(n.initialFilter),n.currentFilter&&n.currentFilter.
eventTypes&&n.currentFilter.eventTypes.length>0&&!f.FiltersEqual(t.currentFilter(),n.currentFilter)&&
t.currentFilter(n.currentFilter),u.Equal(t.componentId(),n.ComponentId)||t.componentId(n.ComponentId)),
null})},t.prototype.hasUserData=function(){return!1},t}(MsPortalFx.ViewModels.OpenBladeCommand);t.FilterCommandViewModelBase=
e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("EndUserAnalytics/DataModels/TopPageViewsQuery",
["require","exports","../../Shared/Constants","../../Shared/DataModels/AggregateListSet","../../Shared/DataQueries/AggregateQuery"],
function(n,t,i,r,u){"use strict";var e=function(n){function t(r,u){n.call(this,r,u,i.Queries.TopPageViews);
this.addMetricsToCalculate(t.viewCountMetricName,i.FunctionNames.Sum);this.addMetricsToCalculate(t.sessionCountMetricName,
i.FunctionNames.Cardinality);this.addAggregateByDimension(t.pageDimension)}return __extends(t,n),t.getTopPageViewsList=
function(n){return r.ExtractList(n,t.viewCountMetricName,i.FunctionNames.Sum,t.pageDimension)},t.getTopSessionsList=
function(n){return r.ExtractList(n,t.sessionCountMetricName,i.FunctionNames.Cardinality,t.pageDimension)}
,t.sessionCountMetricName="context.session.id.hash",t.viewCountMetricName="view.count",t.pageDimension=
"view.name",t}(u.AggregateQuery),f;t.TopPageViewsQuery=e;f=function(n){function t(r,u){n.call(this,r,
u,i.Queries.TopPageViewsAbsoluteUrl);this.addMetricsToCalculate(t.viewCountMetricName,i.FunctionNames.
Sum);this.addMetricsToCalculate(t.sessionCountMetricName,i.FunctionNames.Cardinality);this.addAggregateByDimension(
t.pageDimension)}return __extends(t,n),t.getTopPageViewsList=function(n){return r.ExtractList(n,t.viewCountMetricName,
i.FunctionNames.Sum,t.pageDimension)},t.sessionCountMetricName="context.session.id.hash",t.viewCountMetricName=
"view.count",t.pageDimension="view.name",t}(u.AggregateQuery);t.TopPageViewsAbsoluteUrlQuery=f});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/DataModels/Aggregations",["require",
"exports"],function(n,t){var r=MsPortalFx.ViewModels.Controls.Visualization.Chart,i;i=function(n){function t(
t,i){var u,r;if(n.call(this),this.values(t),!MsPortalFx.Util.isNullOrUndefined(t)&&t.length>0){for(this.
_min=this._max=t[0].yValue,this._total=this._average=0,u=0;u<t.length;u++)r=t[u],this._total+=r.yValue,
r.yValue>this._max?this._max=r.yValue:r.yValue<this._min&&(this._min=r.yValue);i?this._average=i(t.map(
function(n){return n.yValue})):this._average+=this._total/t.length}}return __extends(t,n),Object.defineProperty(
t.prototype,"min",{get:function(){return this._min},enumerable:!0,configurable:!0}),Object.defineProperty(
t.prototype,"max",{get:function(){return this._max},enumerable:!0,configurable:!0}),Object.defineProperty(
t.prototype,"total",{get:function(){return this._total},enumerable:!0,configurable:!0}),Object.defineProperty(
t.prototype,"average",{get:function(){return this._average},enumerable:!0,configurable:!0}),t}(r.Series);
t.SeriesAggregations=i});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(
var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/RefreshCommandBase",
["require","exports","./InsightsTelemetry"],function(n,t,i){"use strict";var r=function(n){function t(
t,r,u){n.call(this);this._containerName=i.AITelemetryConstants.RefreshCommand;this._containerType=2;
this.sharedDataContext=u;this.icon(MsPortalFx.Base.Images.Refresh());this._telemetryHelper=new i.TelemetryHelper(
this,t)}return __extends(t,n),t.prototype.hasUserData=function(){return!1},t.prototype.onInputsSet=function(
n){var t=this;return this._telemetryHelper.instrument(this.componentId,0,function(){return t.componentId=
n.id,t.parentBladeName=n.ParentBlade,null})},t.prototype.execute=function(){this._telemetryHelper.addCustomProperty(
i.AITelemetryConstants.ParentBladeName,this.parentBladeName);this._telemetryHelper.instrumentCommandClick(
this.componentId,this._telemetryHelper.getCustomProperties());this.sharedDataContext.lastRefreshDate(
new Date)},t}(MsPortalFx.ViewModels.Command);t.RefreshBladeCommandBase=r});define("MetricsExplorer/ViewModels/IMetricsExplorerListViewItem",
["require","exports"],function(){"use strict"});__extends=this.__extends||function(n,t){function r()
{this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Shared/SearchButtonViewModelBase",["require","exports","ClientResources","./InsightsTelemetry",
"./Constants","./Enumerations","./NumberUtils","./Logging","../Overview/DataModels/CountEventsQuery"],
function(n,t,i,r,u,f,e,o,s){"use strict";var h=function(n){function t(t,f,e){n.call(this);this._containerName=
r.AITelemetryConstants.EventSearchPart;this._containerType=1;this._container=t;this.initialFilter=ko.
observable();this.queryText=ko.observable();this.favoriteData=ko.observable();this.timeContext=ko.observable(
);this.componentId=ko.observable();this.assetType("");this.assetName(i.searchBladeTitle);this.status(
"");this.icon(MsPortalFx.Base.Images.Polychromatic.Search());this.state(0);this._componentSearchMetrics=
[{eventType:1,name:"Request",eventName:"Request",count:ko.observable(),unit:ko.observable(),cssClass:
u.Colors.msPortalFxBgColor[1],view:e._aggregateQueryEntityCache.createView(t)},{eventType:2,name:"Exception",
eventName:"BasicException",count:ko.observable(),unit:ko.observable(),cssClass:u.Colors.msPortalFxBgColor[
2],view:e._aggregateQueryEntityCache.createView(t)},{eventType:3,name:"Page View",eventName:"View",count:
ko.observable(),unit:ko.observable(),cssClass:u.Colors.msPortalFxBgColor[3],view:e._aggregateQueryEntityCache.
createView(t)},{eventType:5,name:"Custom Event",eventName:"Event",count:ko.observable(),unit:ko.observable(
),cssClass:u.Colors.msPortalFxBgColor[5],view:e._aggregateQueryEntityCache.createView(t)},{eventType:
4,name:"Trace",eventName:"Message",count:ko.observable(),unit:ko.observable(),cssClass:u.Colors.msPortalFxBgColor[
4],view:e._aggregateQueryEntityCache.createView(t)}];this._telemetryHelper=new r.TelemetryHelper(this,
t);t.selectable=r.TelemetryHelper.createSelectableInstrumented(this,f,undefined,this.componentId)}return __extends(
t,n),t.prototype.onInputsSet=function(n){var t=this;return this.componentId(n&&n.ComponentId?n.ComponentId:
undefined),this.favoriteData()&&this.favoriteData().Name?this.assetName(this.favoriteData().Name):this.
favoriteData(null),this.assetType(this.componentId()?this.componentId().Name:""),this._telemetryHelper.
instrument(this.componentId(),0,function(){return t.doRefresh(t.componentId(),t.timeContext())}),null}
,t.prototype.hasUserData=function(){return!1},t.prototype.doRefresh=function(n,t){var r=this,u=$.Deferred(
),f=[],h;return this._componentSearchMetrics.forEach(function(i){var e=new s.CountEventsQuery(n,[i.eventName],
t,r._containerName),u=i.view.fetch(e);u.catch(function(n){o.errorConsole("failed to query for Event Count: "+
n.responseText,"EventSearchPartViewModel.onInputSet")});f.push(u)}),h=Q.allSettled(f).then(function(
){var t=0,n;r._componentSearchMetrics.forEach(function(n){var i=n.view.item(),u,r;if(i&&i.aggregations&&
i.aggregations["context.data.eventTime"]&&i.aggregations["context.data.eventTime"].buckets)for(u=i.aggregations[
"context.data.eventTime"].buckets,r=0;r<u.length;r++)t+=u[r].doc_count});n=e.FormatWithSingleDecimalAndUnits(
t);r.status(i.searchButtonEventCountFormat.format(n.value+" "+n.unit))}),h.then(function(){u.resolve(
)}),u},t}(MsPortalFx.ViewModels.AssetPart);t.SearchButtonViewModelBase=h});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("Overview/DataModels/CountEventsQuery",["require","exports","../../Shared/Constants",
"../../Shared/DataQueries/AggregateQuery"],function(n,t,i,r){"use strict";var u=function(n){function t(
t,r,u,f){var e=this;n.call(this,t,f,i.Queries.SearchTimeline);r&&r.forEach(function(n){return e.addEventType(
n)});this.addAggregateByDimension(i.DimensionNames.RequestTime,"1d");this.timeContext=u}return __extends(
t,n),t}(r.AggregateQuery);t.CountEventsQuery=u});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Shared/CommonControls/ViewModels/ViewInDiagnosticSearchViewModel",["require","exports"],
function(n,t){"use strict";var i=function(n){function t(){n.call(this)}return __extends(t,n),t.prototype.
execute=function(){n.prototype.execute.call(this)},t}(MsPortalFx.ViewModels.Command);t.ViewInDiagnosticSearchViewModel=
i});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Shared/CommonControls/ViewModels/ViewInMetricsExplorerViewModel",
["require","exports"],function(n,t){"use strict";var i=function(n){function t(){n.call(this)}return __extends(
t,n),t.prototype.execute=function(){n.prototype.execute.call(this)},t}(MsPortalFx.ViewModels.Command);
t.ViewInMetricsExplorerViewModel=i});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Overview/ViewModels/OverviewBladeViewModel",["require","exports","../../Shared/ComponentIdService",
"../../Shared/ComponentIdCache","../../Shared/InsightsBlade","../../Shared/CustomTimeRange","../../Shared/TimeContext",
"../../Shared/Constants","../../Shared/Configuration","../../Shared/InsightsTelemetry","../../Shared/Profiler",
"../../Shared/TimeRangeSelectorHelper","../../_generated/ExtensionDefinition","../../Shared/BillingPlanForComponentIdModel",
"ClientResources","../../Shared/DateUtils","../../Shared/Enumerations","../DataModels/LatencyCommunicationQuery"],
function(n,t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b){"use strict";var k=function(n){function t(t,i,r,u){n.call(
this,t);this.timeContext=ko.observable();this.timeRangeCommandInputs=ko.observable();this.timeContextLastFourWeeks=
ko.observable();this.timeContextLastOneDay=ko.observable();this.deviceTimeContext=ko.observable();this.
componentId=ko.observable();this.resourceId=ko.observable();this.eventsOptions=ko.observable({});this.
_sharedDataContext=u.sharedDataContext;this._bladeName=t;this.icon(MsPortalFx.Base.Images.Polychromatic.
AppInsights());this.timeContext(new e.TimeContext(o.Durations.OneDay,null,null,!0));this.timeContextLastFourWeeks(
new e.TimeContext(o.Durations.LastFourWeeks,null,null,!0));this.timeContextLastOneDay(new e.TimeContext(
o.Durations.OneDay,null,null,!0));this.deviceTimeContext(new e.TimeContext(o.Durations.LastFourWeeks,
null,null,!0));this.CustomTimeRangeValidationFactory=ko.observable(new f.DefaultCustomTimeRangeValidationFactory(
null));this._timeRangeHelper=new l.TimeRangeSelectorHelper(i,0);this._container=i;this._billingPlanForComponentIdModel=
new v.BillingPlanForComponentIdModel(i,u.sharedDataContext);this._timeRangeWarningInfo=ko.observable(
{planName:"",rawDataRetention:null})}return __extends(t,n),t.prototype.onInputsSet=function(n){var t=
this;c.Profiler.enter("OverviewBlade.onInputsSet");try{return this._sharedDataContext.AddOrUpdateInitializationTime(
new Date,this._bladeName),!n.timeContext||n.timeRangeCommandInputs||e.equals(n.timeContext,this.timeContext(
))?n.timeRangeCommandInputs&&!e.equals(n.timeRangeCommandInputs,this.timeContext())&&this.timeContext(
n.timeRangeCommandInputs):this.timeContext(n.timeContext),!n.deviceTimeContext||n.timeRangeCommandInputs||
e.equals(n.deviceTimeContext,this.deviceTimeContext())?n.timeRangeCommandInputs&&!e.equals(n.timeRangeCommandInputs,
this.timeContext())&&this.deviceTimeContext(n.timeRangeCommandInputs):this.deviceTimeContext(n.deviceTimeContext),
this.setComponentId(n.id).finally(function(){t.subtitle(t._setSubTitleFromType(t.componentId()));h.instrumentPromise(
MsPortalFx.Base.Security.hasPermission(t.resourceId(),[a.AssetTypes.ApplicationInsights.Permissions.
read]).then(function(n){h.logCustomEvent(h.AITelemetryConstants.RBAC,0,t.BladeName,t.componentId(),{
hasPermission:n});n||t._container.unauthorized()}),"RBAC permission query");h.instrumentPromise(f.getBillingPlanInfo(
t._billingPlanForComponentIdModel,t.componentId(),t._timeRangeWarningInfo,t.BladeName),"Get billing plan info").
finally(function(){var n=t._timeRangeWarningInfo().aggDataRetention,i,r;n&&(i=new Date,r=p.addDays(i,
-n*o.monthLengthInDays),e.toTimeRange(t.timeContext()).startTime<r&&(t.contentState(2),t.contentStateDisplayText(
y.aggregateDataTimeRangeWarningString.format(n))))});var n=s.getSettings();n.getEnableLatencyReporting(
)===!0&&h.instrumentPromise(b.fetchLatencyStatus(t.componentId(),t.BladeName),"Latency status").then(
function(i){if(i!=null)if(i.state===1){var r=y.latencyWarningMessage;n.getEnableLatencyMetricReporting(
)===!0&&(r=b.getTimeString(i.latencyInSeconds));t.contentStateDisplayText(r);t.contentState(2)}else i.
state===2&&(t.contentStateDisplayText(y.latencyErrorMessage),t.contentState(3))})})}finally{c.Profiler.
exit()}},t.prototype._setSubTitleFromType=function(){return""},t.prototype.setComponentId=function(n)
{var f=this,t=null,u;return typeof n=="string"?(this.resourceId(n),t=i.resourceIdToComponentId(n)):(
t=n,this.resourceId(i.componentIdToResourceId(t))),u=$.Deferred(),this.componentId()&&i.Equal(this.componentId(
),t)?u.resolve():(this.title(t.Name),t.Metadata?(this.componentId(t),u.resolve()):h.instrumentPromise(
r.getFullComponentId(t,this.BladeName).then(function(n){f.componentId(n)},function(){f.componentId(t);
h.logError("Cannot retrieve full ComponentId",0,f.BladeName,f.componentId())}).finally(function(){u.
resolve()}),"Fetch Component")),u.promise()},t}(u.InsightsBlade);t.OverviewBladeViewModel=k});define(
"Overview/DataModels/LatencyCommunicationQuery",["require","exports","../../Shared/AjaxHelper","../../Shared/Constants",
"../../Shared/UrlHelper","../../Shared/Enumerations","ClientResources"],function(n,t,i,r,u,f,e){"use strict";
function s(n,t){var e=u.buildGraphProxyPath(n.SubscriptionId,"",r.GraphPathTemplates.LatencyComm),o=
{_componentId:n,_containerName:t,_queryName:r.Queries.LatencyStatus},f={state:0,latencyInSeconds:0};
return i.apiGet(e,o).then(function(n){return n&&n.d&&n.d.results&&n.d.results.hasOwnProperty("HealthState")&&
(f.state=n.d.results.HealthState),n&&n.d&&n.d.results&&n.d.results.hasOwnProperty("LatencyInSeconds")&&
(f.latencyInSeconds=n.d.results.LatencyInSeconds),f})}function h(n){var t=Math.floor(n/60),i=e.latencyMetricWarningMessageMinutes.
format(t);return t===1&&(i=e.latencyMetricWarningMessageOneMinute.format(t)),i}var o=function(){function n(
){}return n}();t.LatencyCommunication=o;t.fetchLatencyStatus=s;t.getTimeString=h});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("Overview/ViewModels/AttachActionBarViewModel",["require","exports"],
function(n,t){var i=function(n){function t(t){n.call(this,t);this.valid(!1)}return __extends(t,n),t.
prototype.onInputsSet=function(t){return n.prototype.onInputsSet.call(this,t),this.valid(t.valid),null}
,t}(MsPortalFx.ViewModels.ActionBars.CreateActionBar.ViewModel);t.AttachActionBarViewModel=i});define(
"MetricsExplorer/DataModels/MetricsExplorerEditPartInputs",["require","exports"],function(n,t){var i=
function(){function n(n,t,i,r){this.ComponentId=n;this.MetricsExplorerJsonDefinitionId=t;this.MetricsExplorerSelectedChartId=
i;this.BladeId=r}return n}();t.MetricsExplorerEditPartInputs=i});define("Shared/DataModels/MetricsExplorerPartInputs",
["require","exports"],function(){"use strict"});__extends=this.__extends||function(n,t){function r()
{this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Shared/DeleteApplicationCommandBase",["require","exports","./InsightsTelemetry","./ComponentIdService",
"ClientResources","./QueryBase","../_generated/ExtensionDefinition","../ContinuousExport/DataModels/ContinuousExportCommandsHelper",
"./Constants"],function(n,t,i,r,u,f,e,o,s){var h=function(n){function t(t,r,f){var e=this;n.call(this);
this._containerName=i.AITelemetryConstants.DeleteApplicationCommand;this._containerType=2;this.assetId=
ko.observable();this._hasAccess=ko.observable(!0);this._dataContext=f;this._deleteContactMessageBox=
new MsPortalFx.ViewModels.Dialogs.MessageBox(u.deleteApplicationTitle,u.deleteApplicationConfirmation,
4);this._retryMessageBox=new MsPortalFx.ViewModels.Dialogs.MessageBox(u.deleteApplicationError,u.deleteApplicationErrorText,
3);this._progressBox=new MsPortalFx.ViewModels.Dialogs.ProgressBox(null,u.deleteApplicationProgress);
this.enabled=ko.pureComputed(function(){return!!e.assetId()&&e._hasAccess()});this.icon(MsPortalFx.Base.
Images.Delete());this._telemetryHelper=new i.TelemetryHelper(this,t)}return __extends(t,n),t.prototype.
onInputsSet=function(n){var t=this,u=n&&n.id?n.id:undefined;return this._telemetryHelper.instrument(
u,0,function(){t.assetId(n.id);t._parentBladeName=n.ParentBlade;var u=r.componentIdToResourceId(n.id);
return MsPortalFx.Base.Security.hasPermission(u,[e.AssetTypes.ApplicationInsights.Permissions.deletePermission]).
then(function(n){i.logCustomEvent(i.AITelemetryConstants.RBAC,t._containerType,t._containerName,null,
{hasPermission:n});n||t._hasAccess(!1)})})},t.prototype.hasUserData=function(){return!1},t.prototype.
execute=function(){var n=this.assetId?this.assetId.peek():undefined;this.dialog(this._deleteContactMessageBox);
this._telemetryHelper.addCustomProperty(i.AITelemetryConstants.ParentBladeName,this._parentBladeName);
this._telemetryHelper.instrumentCommandClick(n,this._telemetryHelper.getCustomProperties())},t.prototype.
dialogClick=function(n){this.dialog()===this._deleteContactMessageBox?n===6?this._deleteApplication(
):this.status(0):this.dialog()===this._retryMessageBox&&(n===5?this._deleteApplication():this.status(
0))},t.prototype._deleteApplication=function(){var n=this,t;this.dialog(this._progressBox);this._progressBox.
completionPercentage(50);t=this.assetId();r.destroy(t,this._containerName).then(function(){n.status(
0);o.DeleteAllExports(t,n._containerName);MsPortalFx.UI.AssetManager.notifyAssetDeleted(e.AssetTypeNames.
applicationInsights,t);MsPortalFx.UI.AssetManager.notifyAssetDeleted(e.AssetTypeNames.applicationInsights,
r.componentIdToResourceId(t));n._dataContext._monitoredApplicationsEntityCache.refresh(new f.QueryBase(
{},n._containerName,s.Queries.MonitoredApplication),null)},function(){n.dialog(n._retryMessageBox)})}
,t}(MsPortalFx.ViewModels.Command);t.DeleteApplicationCommand=h});define("PerformanceMonitoring/PerformanceMonitoringArea",
["require","exports"],function(n,t){var i=function(){function n(){}return n}();t.DataContext=i});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Search/DataSources/FacetsQuery",["require",
"exports","../../Shared/Enumerations","../../Shared/InsightsTelemetry","../../Shared/DataQueries/SegmentationSummaryQueryBase",
"../../Shared/Constants","../../Shared/SearchQueryBase"],function(n,t,i,r,u,f,e){"use strict";var o=
function(n){function t(u,o,s,h,c,l,a,v,y){var p,w;if(o===r.AITelemetryConstants.MetricsExplorerCustomPart&&
(p=this.getCountMetricByEventName(h),p)){w={id:p,color:null,metricAggregation:i.Aggregation[1]};n.call(
this,u,o,f.Queries.SearchFacets,[w],s,t.aggregationFunction,t.aggregationFunction.toString().toLowerCase(
),null,y,!1,v,l);return}c=e.CreateAndStatement(c,a);n.call(this,u,o,f.Queries.SearchFacets,[],s,t.aggregationFunction,
t.aggregationFunction.toString().toLowerCase(),c,y,!1,v,l);this.addEventType(h)}return __extends(t,n),
t.prototype.getCountMetricByEventName=function(n){switch(i.EventType[n]){case 1:return f.MetricNames.
TotalRequests;case 3:return f.MetricNames.PageViews;case 5:return f.MetricNames.CustomEventsCount;case
2:return f.MetricNames.Exceptions;case 6:return f.MetricNames.RemoteDependencyCount;default:return null}
},t.facetsTransform=function(n,r){if(r){var f=u.SegmentationSummaryQueryBase.transform(n,r),o=i.Aggregation[
t.aggregationFunction].toLowerCase(),e={};if(f)return Object.keys(f).forEach(function(n){var t=f[n],
i=t?t.map(function(t){var i=t[o];return typeof i=="number"&&(i=Number(i.toFixed(0))),{dimensionKey:n,
displayName:t.attribute,totalNumber:ko.observable(i),_isVisible:ko.observable(!1)}}):undefined;e[n]=
i}),e}return undefined},t.aggregationFunction=1,t}(u.SegmentationSummaryQueryBase);t.FacetsQuery=o});
define("WebTests/DataModels/WebTestHelper",["require","exports","../../Shared/AjaxHelper","./AlertHelper",
"./AzureFxDataModels","../../Shared/ComponentIdService","../../Shared/Constants","../../_generated/ExtensionDefinition",
"../../Shared/InsightsTelemetry","../../Shared/Logging","ClientResources","../../Shared/UrlHelper","./WebTestQuery"],
function(n,t,i,r,u,f,e,o,s,h,c,l,a){"use strict";function p(n,t,r){var u=new a.WebTestQuery(n,r),f;return u.
webTestName=t.name,u.payload=t,f=l.getUrlFromGraphTemplate(e.GraphPathTemplates.WebTest,u),i.apiPut(
f,u,u.payload).fail(function(n){h.errorConsole(n,"InsightsExtension.WebTests.DataSources.createWebTest")}
)}function b(n,t,i,u){var f=v(o.NotificationDefinitions.WebTestNotification.started,"started",t.properties.
Name,undefined);return p(n,t,u).then(function(){r.createAlert(n,i,u).fail(function(n){v(o.NotificationDefinitions.
WebTestNotification.warning,n,t.properties.Name,f)});v(o.NotificationDefinitions.WebTestNotification.
succeeded,"success",t.properties.Name,f)},function(n){v(o.NotificationDefinitions.WebTestNotification.
error,n,t.properties.Name,f)})}function k(n,t,r){var u=l.buildGraphProxyPath(n.SubscriptionId,n.ResourceGroup,
e.GraphPathTemplates.WebTest,{webTestName:t}),f={_componentId:n,_containerName:r,_queryName:e.Queries.
WebTestsByWebTestId};return i.apiGet(u,f)}function d(n,t){var r=new a.WebTestQuery(n.componentId,t),
u;return r.webTestName=n.id,u=l.getUrlFromGraphTemplate(e.GraphPathTemplates.WebTest,r),i.apiDelete(
u,r).fail(function(n){h.errorConsole(n,"InsightsExtension.WebTests.DataSources.deleteWebTest")})}function g(
n,t){var i=new MsPortalFx.ViewModels.ParameterCollection.ParameterCollectionInput,u=n.Name,f={useHttpStatusCode:
!0,httpStatusCodeValue:"200",useContentMatch:!1,contentMatchValue:""},o={state:c.webTestsAlertsEnabled,
sensitivity:1,emailEnabled:!0,additionalEmail:""},r={testName:"",testType:e.WebTests.TestKind.Ping,url:
c.webSiteString.format(u),fileContent:"",fileName:"",enabled:!0,frequency:300,timeout:30,serializedCriteria:
JSON.stringify(f),serializedAlerts:JSON.stringify(o),serializedLocations:JSON.stringify(["us-tx-sn1-azr"])};
return i.inputParameters={main:{testName:"",testType:e.WebTests.TestKind.Ping,url:t?c.webSiteString.
format(u):"",fileContent:"",fileName:"",serializedCriteria:JSON.stringify(f),serializedAlerts:JSON.stringify(
o),serializedLocations:JSON.stringify(["us-tx-sn1-azr"])},locations:{serializedArray:r.serializedLocations},
criteria:JSON.parse(r.serializedCriteria),alerts:JSON.parse(r.serializedAlerts)},i.options={enableProvisioning:
!0,galleryOptions:{uiDefinition:{markup:{reference:{provisioningPartName:"",provisioningPartExtension:
""}}}},componentId:n,isCreateMode:!0},i}function nt(n,t){var i,r;if($.isArray(n))for(i=0;i<n.length;
i++)if(r=n[i],r&&r.name===t)return r}function tt(n,t){var i=new u.WebTestAzureFxDataModel,p=y("Url",
n),s=y("ExpectedHttpStatusCode",n),h=y('Name="FindText".*?Value',n),a,v;i.main.testName(n.properties.
Name.trim());i.main.testType(ft(n));i.main.url(p);i.main.enabled(n.properties.Enabled.toString());i.
main.frequency(n.properties.Frequency.toString());i.main.timeout(n.properties.Timeout.toString());i.
main.testType()===e.WebTests.TestKind.Multistep&&n&&n.properties&&n.properties.Configuration&&n.properties.
Configuration.WebTest&&(i.main.fileContent(n.properties.Configuration.WebTest),i.main.fileName(n.properties.
Description));i.locations.serializedArray(et(n));i.criteria.useHttpStatusCode(s!=="0");i.criteria.httpStatusCodeValue(
s);i.criteria.useContentMatch(!!h);i.criteria.contentMatchValue(h);var w=t&&t.properties&&(t.properties.
isEnabled||t.properties.IsEnabled)?c.webTestsAlertsEnabled:c.webTestsAlertsDisabled,f=t&&t.properties?
t.properties:{},o=f&&f.Condition?f.Condition:f.condition,l=o&&o.WindowSize?o.WindowSize:o&&o.windowSize?
o.windowSize:"PT5m",b=l==="PT15M"?1:l==="PT10M"?2:3,r=f&&f.Action?f.Action:f.action,k=r&&$.isArray(r.
CustomEmails)?r.CustomEmails.join("; "):r&&$.isArray(r.customEmails)?r.customEmails.join("; "):"";return i.
alerts.state(w),i.alerts.sensitivity(b),i.alerts.emailEnabled(r&&(r.SendToServiceOwners||r.sendToServiceOwners)
),i.alerts.additionalEmail(k),a=new u.WebTestAzureFxPackagedCriteria(i),v=new u.WebTestAzureFxPackagedAlert(
i),i.main.serializedCriteria(JSON.stringify(a)),i.main.serializedAlerts(JSON.stringify(v)),i}function it(
n,t,i,u){var f=w(n).length;return r.GetAlertFromFormData(n,t,i,f,u)}function rt(n,t,i,r){r||(r=n.main.
testName().trim().toLowerCase()+"-"+t.Name.toLowerCase());var u=MsPortalFx.Util.newGuid().toLowerCase(
);return{name:r,location:"Central US",tags:st(t,i),properties:{Name:n.main.testName().trim(),Description:
n.main.testType()===e.WebTests.TestKind.Multistep?n.main.fileName():"",Enabled:n.main.enabled&&n.main.
enabled()==="false"?!1:!0,Frequency:n.main.frequency?+n.main.frequency():300,Timeout:n.main.timeout?
+n.main.timeout():30,Locations:w(n),Configuration:{WebTest:ct(n,u)},SyntheticMonitorId:r,Kind:n.main.
testType()}}}function ut(n){return e.GraphPathTemplates.CsmBase.format({subscriptionId:n.SubscriptionId,
resourceGroup:n.ResourceGroup})}function v(n,t,i,r){var u=null,e={},f;if(e.webTest=i,r||(r=MsPortalFx.
UI.NotificationManager.create(o.NotificationDefinitions.WebTestNotification.name)),t!=="started"||t!==
"success"){try{f=JSON.parse(t.responseText);f&&f.message&&(u=f.message)}catch(h){s.logException(h,3,
"WebTestHelper",undefined)}u||(u=t.responseText||t);e.errorMessage=u}return r.raise(n,undefined,e),r}
function y(n,t){if(t&&t.properties&&t.properties.Configuration&&t.properties.Configuration.WebTest){
var r=t.properties.Configuration.WebTest,u=RegExp("("+n+'=")(.*?)(")'),i=r.match(u);if($.isArray(i))
return i[2]}}function ft(n){return n.properties.Kind||e.WebTests.TestKind.Ping}function et(n){var t=
$.map(n.properties.Locations,function(n){return n.Id});return JSON.stringify(t)}function ot(n){var u=
new RegExp("^(?:hidden-)?link:/subscriptions/([^/]*)/resourceGroups/([^/]*)/providers/microsoft\\.insights/components/([^/]*)",
"i"),i,r,t;if(n&&n.tags){i=null;for(r in n.tags)if(n.tags[r]==="Resource"&&(t=u.exec(r),t.length===4))
{i={SubscriptionId:t[1],ResourceGroup:t[2],Name:t[3]};break}return i}return null}function st(n,t){var
r=ht(n),i={};return i[r]="Resource",t&&(i[f.getLinkString(t)]="Resource"),i}function ht(n){return"hidden-link:/subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroup}/providers/microsoft.insights/components/{Name}".
format(n)}function w(n){var t=JSON.parse(n.locations.serializedArray());return $.map(t,function(n){return{
Id:n}})}function ct(n,t){if(n.main.testType()===e.WebTests.TestKind.Multistep)return n.main.fileContent(
);var r=MsPortalFx.ViewModels.ParameterCollection.Models.modelToParameters(n),i=lt(n.criteria.useHttpStatusCode(
),n.criteria.useContentMatch());return i=i.format(r.criteria),i=i.format(r.main),i.format({id:t,requestId:
l.getGuidStartingWithLetter()})}function lt(n,t){return'        <WebTest         Name="{testName}"         Id="{id}"         Enabled="True"         CssProjectStructure=""         CssIteration=""         Timeout="0"         WorkItemIds=""         xmlns="http://microsoft.com/schemas/VisualStudio/TeamTest/2010"         Description=""         CredentialUserName=""         CredentialPassword=""         PreAuthenticate="True"         Proxy="default"         StopOnError="False"         RecordedResultFile=""         ResultsLocale="">        <Items>        <Request         Method="GET"         Guid="{requestId}"         Version="1.1"         Url="{url}"         ThinkTime="0"         Timeout="300"         ParseDependentRequests="True"         FollowRedirects="True"         RecordResult="True"         Cache="False"         ResponseTimeGoal="0"         Encoding="utf-8"         ExpectedHttpStatusCode="{useDefaultStatusCode}"         ExpectedResponseUrl=""         ReportingName=""         IgnoreHttpStatusCode="False" />        <\/Items>{validationRules}        <\/WebTest>'.
format({validationRules:t?'        <ValidationRules>        <ValidationRule         Classname="Microsoft.VisualStudio.TestTools.WebTesting.Rules.ValidationRuleFindText, Microsoft.VisualStudio.QualityTools.WebTestFramework, Version=10.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a"         DisplayName="Find Text"         Description="Verifies the existence of the specified text in the response."         Level="High"         ExectuionOrder="BeforeDependents">        <RuleParameters>        <RuleParameter Name="FindText" Value="{contentMatchValue}" />        <RuleParameter Name="IgnoreCase" Value="False" />        <RuleParameter Name="UseRegularExpression" Value="False" />        <RuleParameter Name="PassIfTextFound" Value="True" />        <\/RuleParameters>        <\/ValidationRule>        <\/ValidationRules>':
"",useDefaultStatusCode:n?"{httpStatusCodeValue}":"0"})}function at(){return $.Deferred().resolve({valid:
!0,message:""}).promise()}function vt(n,t,i){if(i&&i.length){var r=t.toLowerCase()+"-"+n;return!!!i.
first(function(n){return n.name===r})}return!0}t.createWebTest=p;t.createWebTestAndAlert=b;t.fetchWebTest=
k;t.deleteWebTest=d;t.GetDefaultParameters=g;t.GetWebTestById=nt;t.GetDataFromWebTest=tt;t.GetAlertFromFormData=
it;t.GetWebTestFromFormData=rt;t.componentIdToResourceGroupId=ut;t.showNotification=v;t.getLinkedComponent=
ot;t.dummyValidation=at;t.webTestExistsValidation=vt});define("WebTests/DataModels/AlertHelper",["require",
"exports","../../Shared/InsightsTelemetry","../../Shared/AjaxHelper","../../Shared/DataQueries/AlertQuery",
"../../Shared/Constants","../../Shared/Logging","ClientResources","../../Shared/UrlHelper"],function(
n,t,i,r,u,f,e,o,s){"use strict";function v(n,t,i){var o=new u.AlertQuery(n,i),h;return o.alertName=t.
name,o.payload=t,h=s.getUrlFromGraphTemplate(f.GraphPathTemplates.AlertRules,o),r.apiPut(h,o,o.payload).
fail(function(n){e.errorConsole(n,"InsightsExtension.WebTests.DataSources.createAlert")})}function y(
n,t,i){var o=new u.AlertQuery(n,i),h;return o.alertName=t.name,o.payload=t,h=s.getUrlFromGraphTemplate(
f.GraphPathTemplates.AlertRules,o),r.apiPatch(h,o,o.payload).fail(function(n){e.errorConsole(n,"InsightsExtension.WebTests.DataSources.createAlert")}
)}function p(n,t,i){var o=new u.AlertQuery(n,i),h;return o.alertName=t.name,h=s.getUrlFromGraphTemplate(
f.GraphPathTemplates.AlertRules,o),r.apiDelete(h,o).fail(function(n){e.errorConsole(n,"InsightsExtension.WebTests.DataSources.deleteAlert")}
)}function w(n,t){var i=h(n,t,!0);return i&&i.length>0?i[0]:null}function h(n,t,i){var r,o=[],u,f,e;
if($.isArray(n)?r=n:n&&$.isArray(n.value)&&(r=n.value),r)for(u=0;u<r.length;u++)f=r[u],e=JSON.stringify(
f.tags),e&&e.indexOf(t)>=0&&(!i||a(f))&&o.push(f);return o}function b(n,t,i,r,u){return u||(u=i+"-"+
MsPortalFx.Util.newGuid().toLowerCase()),{name:u,location:"East US",tags:k(t,i),properties:g(n,u,c(t,
i),r)}}function k(n,t){var i={};return i["hidden-link:"+d(n)]="Resource",i["hidden-link:"+c(n,t)]="Resource",
i}function d(n){return l(n)+"components/{Name}".format(n)}function c(n,t){return l(n)+"webtests/{webTestId}".
format({webTestId:t})}function l(n){return"/subscriptions/{SubscriptionId}/resourcegroups/{ResourceGroup}/providers/microsoft.insights/".
format(n)}function g(n,t,i,r){var u=o.webTestsAlertsEnabled===n.alerts.state();return{Name:t,Description:
"",IsEnabled:u,Condition:nt(n,i,r),Action:it(n)}}function nt(n,t,i){var r="PT5M",u=1;switch(n.alerts.
sensitivity()){case 1:r="PT15M";u=i;break;case 2:r="PT10M";u=Math.round(i/2);break;case 3:r="PT5M";u=
1}return{"odata.type":"Microsoft.Azure.Management.Insights.Models.LocationThresholdRuleCondition",DataSource:
tt(t),WindowSize:r,FailedLocationCount:u}}function tt(n){return{"odata.type":"Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource",
MetricName:f.MetricNames.AvailabilityRaw,ResourceUri:n}}function it(n){var i=[],t;return n&&$.isFunction(
n.alerts.additionalEmail)&&(t=n.alerts.additionalEmail(),t&&$.isFunction(t.split)&&(i=t.split(";").map(
function(n){return n.trim()}).filter(function(n){return!!n}))),{"odata.type":"Microsoft.Azure.Management.Insights.Models.RuleEmailAction",
SendToServiceOwners:!!n.alerts.emailEnabled(),CustomEmails:i}}function a(n){var r=n&&n.properties?n.
properties:undefined,t;if(r){var u=r.Condition?r.Condition:r.condition,f=r.Action?r.Action:r.action,
e=n.hasOwnProperty("name"),o=u&&(u.hasOwnProperty("WindowSize")||u.hasOwnProperty("windowSize")),s=u&&
(u.hasOwnProperty("FailedLocationCount")||u.hasOwnProperty("failedLocationCount")),h=f&&(f.hasOwnProperty(
"CustomEmails")||f.hasOwnProperty("customEmails"));return e&&o&&s&&h?n:(t="Could not parse Alert JSON:",
t=e?t:t+" hasName missing",t=o?t:t+" hasWindowSize missing",t=s?t:t+" hasFailedLocationCount missing",
t=h?t:t+" hasCustomEmails missing",i.logError(t,1,i.AITelemetryConstants.CreateWebTestAlertPart,undefined),
undefined)}return i.logError("Could not parse Alert JSON: properties missing",1,i.AITelemetryConstants.
CreateWebTestAlertPart,undefined),undefined}t.createAlert=v;t.editAlert=y;t.deleteAlert=p;t.GetAlertById=
w;t.GetAllLinkedAlertsById=h;t.GetAlertFromFormData=b;t._verifyAlertItem=a});define("WebTests/DataModels/AzureFxDataModels",
["require","exports","../../Shared/Constants"],function(n,t,i){"use strict";var s=function(){function n(
){this.alerts={state:ko.observable(""),sensitivity:ko.observable(),emailEnabled:ko.observable(),additionalEmail:
ko.observable("")}}return n}(),r,u,f,e,o;t.WebTestAlertAzureFxDataModel=s;r=function(){function n(){
this.locations={serializedArray:ko.observable("")}}return n}();t.WebTestLocationAzureFxDataModel=r;u=
function(){function n(){this.criteria={useHttpStatusCode:ko.observable(),httpStatusCodeValue:ko.observable(
),useContentMatch:ko.observable(),contentMatchValue:ko.observable()}}return n}();t.WebTestCriteriaAzureFxDataModel=
u;f=function(){function n(n){this.contentMatchValue=n.criteria.contentMatchValue();this.httpStatusCodeValue=
n.criteria.httpStatusCodeValue();this.useContentMatch=n.criteria.useContentMatch();this.useHttpStatusCode=
n.criteria.useHttpStatusCode()}return n}();t.WebTestAzureFxPackagedCriteria=f;e=function(){function n(
n){this.additionalEmail=n.alerts.additionalEmail();this.emailEnabled=n.alerts.emailEnabled();this.sensitivity=
n.alerts.sensitivity();this.state=n.alerts.state()}return n}();t.WebTestAzureFxPackagedAlert=e;o=function(
){function n(){this.main={testName:ko.observable(""),testType:ko.observable(i.WebTests.TestKind.Ping),
url:ko.observable(""),fileContent:ko.observable(""),serializedCriteria:ko.observable(""),serializedAlerts:
ko.observable(""),fileName:ko.observable(""),enabled:ko.observable(""),frequency:ko.observable(""),timeout:
ko.observable("")};this.locations={serializedArray:ko.observable("")};this.criteria={useHttpStatusCode:
ko.observable(),httpStatusCodeValue:ko.observable(),useContentMatch:ko.observable(),contentMatchValue:
ko.observable()};this.alerts={state:ko.observable(""),sensitivity:ko.observable(),emailEnabled:ko.observable(
),additionalEmail:ko.observable("")}}return n}();t.WebTestAzureFxDataModel=o});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("WebTests/DataModels/WebTestQuery",["require","exports","../../Shared/Constants",
"../../Shared/QueryBase"],function(n,t,i,r){"use strict";var u=function(n){function t(t,r){n.call(this,
t,r,i.Queries.CreateWebTest)}return __extends(t,n),t.getKey=function(){throw Error("Not implemented - this query does not support key serialization.");
},t}(r.QueryBase);t.WebTestQuery=u});define("Search/Services/EventDetailResourceMappingService",["require",
"exports","../../Shared/Enumerations","../../Shared/InsightsTelemetry","../../Shared/Constants"],function(
n,t,i,r,u){function s(n){var t=null,r;if(n&&(n=n[0].toUpperCase()+n.slice(1),t=i.EventType[n],!t)){n=
n.toLowerCase();for(r in i.EventType)if(typeof r=="string"&&r.toLowerCase()===n){t=i.EventType[r];break}
}return t}function e(n){if(n&&n.componentId){var t;return t=n.eventTime?u.GraphPathTemplates.EventDetailsWithTime.
format({componentName:n.componentId.Name,eventType:i.EventType[n.eventType],eventId:n.id,eventTime:n.
eventTime}):u.GraphPathTemplates.EventDetails.format({componentName:n.componentId.Name,eventType:i.EventType[
n.eventType],eventId:n.id}),"{0}/{1}".format(u.GraphPathTemplates.CsmBase.format({resourceGroup:n.componentId.
ResourceGroup,subscriptionId:n.componentId.SubscriptionId}),t)}return null}function o(n){"use strict";
var e=null,o,h,c,i,l,f,a,t,u,v;if(n&&(a=new RegExp("subscriptions/([^/]*)/resourcegroups/([^/]*)/providers/microsoft.insights/components/([^/]*)/eventdetails/([^/]*)/event/([^/]*)",
"i"),t=a.exec(n),t&&t.length===6&&(o=t[1],h=t[2],c=t[3],f=s(t[4]),f))){if(i=t[5],u=i.split(";"),u.length>
1){i=u[0];try{l=new Date(u[1])}catch(y){r.logException(y,3,r.AITelemetryConstants.EventDetailResourceMappingService,
undefined)}}v={SubscriptionId:o,ResourceGroup:h,Name:c};e={id:i,name:null,eventType:f,componentId:v,
eventTime:l}}return $.Deferred().resolve(e).promise()}var h=MsPortalFx.ViewModels.Services.ResourceTypes,
f;f=function(){function n(n,t,i){this._containerName=r.AITelemetryConstants.EventDetailResourceMappingService;
this._containerType=3;this._dataContext=i}return n.prototype.hasUserData=function(){return!1},n.prototype.
mapResourceIdToAssetId=function(n){var t=$.Deferred();return o(n).then(function(n){t.resolve(n)}).catch(
function(){t.reject({reason:1,message:""})}),t},n.prototype.mapAssetIdToResourceId=function(n){return $.
Deferred().resolve(e(n)).promise()},n.prototype.signalResourcesChanged=function(){return null},n}();
t.EventDetailResourceMappingService=f;t.eventIdToResourceId=e;t.resourceIdToEventId=o});__extends=this.
__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[
i]);r.prototype=t.prototype;n.prototype=new r};define("Search/Services/EventDetailDynamicBladeService",
["require","exports","../../_generated/ExtensionDefinition","../../Shared/Enumerations"],function(n,
t,i){var u=MsPortalFx.ViewModels.Services.DynamicBlade,r;r=function(n){function t(t){n.call(this);this.
_container=t}return __extends(t,n),t.prototype.onInputsSet=function(n){var i=n.assetId,r=$.Deferred(
);return i?this.bladeName(t.getBladeName(i.eventType)):this.bladeName(t.getBladeName(0)),r.resolve().
promise()},t.getBladeName=function(n){var t;switch(n){case 2:t=i.BladeNames.searchResultExceptionDetailBlade;
break;case 5:t=i.BladeNames.searchResultCustomEventDetailBlade;break;case 1:t=i.BladeNames.searchResultRequestDetailBlade;
break;case 3:t=i.BladeNames.searchResultPageViewDetailBlade;break;default:case 4:t=i.BladeNames.searchResultTraceDetailBlade}
return t},t}(u.Service);t.EventDetailDynamicBladeService=r});define("Shared/SharedArea",["require","exports"],
function(n,t){"use strict";var i=function(){function n(n){this.sharedDataContext=n}return n}();t.DataContext=
i});define("Websites/WebsitesArea",["require","exports"],function(n,t){var i=function(){function n()
{}return n}();t.DataContext=i});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"WebTests/DataModels/WebTestMetricQuery",["require","exports","../../Shared/DataQueries/PerfStoreQuery",
"../../Shared/Constants","../../Shared/DateUtils","../../Shared/Enumerations"],function(n,t,i,r,u){"use strict";
var f=function(n){function t(t,i){n.call(this,t,i,r.Queries.WebTestMetric)}return __extends(t,n),t.buildAllLocationsResultQuery=
function(n,i){var e=u.roundDate(new Date,u.TimeUnits.minutes,!0,5),o=u.addDays(e,-3),s={startTime:o.
toISOString(),endTime:e.toISOString(),aggregationlevelid:0,providerId:r.WebTests.ProviderId},f=new t(
n.componentId,i);return f.queryParams=s,f.testName=n.id,f.location=r.GraphPathTemplates.Wildcard,f.metricName=
r.MetricNames.AvailabilityResponseTimeRaw,f},t.buildLocationResultQuery=function(n,i,u){var e={aggregationlevelid:
0,providerId:r.WebTests.ProviderId},f=new t(n.componentId,u);return f.queryParams=e,f.timeContext=i,
f.testName=n.id,f.location=n.location,f.metricName=r.MetricNames.AvailabilityResponseTimeRaw,f},t}(i.
PerfStoreQuery);t.WebTestMetricQuery=f});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Shared/DataQueries/PerfStoreQuery",["require","exports","../QueryBase","../Constants"],function(n,t,
i,r){"use strict";var u=function(n){function t(t,i,u){n.call(this,t,i,u?u:r.Queries.PerfStore)}return __extends(
t,n),t}(i.QueryBase);t.PerfStoreQuery=u});define("WebTests/Services/WebTestResourceMappingService",[
"require","exports","../DataModels/WebTestHelper"],function(n,t,i){"use strict";var r=function(){function n(
n,t,i){this._dataContext=i}return n.resourceIdToWebTestInfo=function(n,t){for(var s,u=(n+"").split("/"),
e,o,f,r=0;r<u.length;r++)switch(u[r].toLowerCase()){case"subscriptions":r+1<u.length&&(e=u[r+1],r++);
break;case"resourcegroups":r+1<u.length&&(o=u[r+1],r++);break;case"webtests":r+1<u.length&&(f=u[r+1],
r++)}return s={SubscriptionId:e,ResourceGroup:o,Name:""},i.fetchWebTest(s,f,t).then(function(n){var t=
i.getLinkedComponent(n);return{id:f,name:n.properties.Name,location:n.location,componentId:t}})},n.prototype.
mapResourceIdToAssetId=function(n){return $.Deferred().resolve(n).promise()},n.prototype.mapAssetIdToResourceId=
function(n){return $.Deferred().resolve(n).promise()},n.prototype.signalResourcesChanged=function(){
return $.Deferred().resolve().promise()},n}();t.WebTestResourceMappingService=r});define("WebTests/DataModels/WebTestsAvailability",
["require","exports","../../Shared/Constants","../../Shared/DateUtils","../../Shared/DataModels/WebTestServerLocation"],
function(n,t,i,r,u){"use strict";var f=function(){function n(){}return n.transform=function(t){var f=
{componentId:null,id:null,name:ko.observable(null),enabled:null,provisioningStatus:"none",location:null,
locationDisplayName:null,availabilityTwentyMin:ko.observable(null),availabilityOneHr:ko.observable(null),
availabilityTwentyFourHr:ko.observable(null),availabilitySeventyTwoHr:ko.observable(null)},e,v;if(t&&
t.Values&&t.Values.length){var d=Date.now(),y=t.Values,p=0,h=0,w=0,c=0,b=0,l=0,k=0,a=0,g=i.Durations.
ThreeDays,nt=r.unitsInMilliseconds.Minutes*20;for(e=0;e<y.length;e++){var u=y[e],o=d-Date.parse(u.TimeCreated),
s=u.Weight*u.Average;o<nt&&(h+=u.Weight,p+=s);o<r.unitsInMilliseconds.Hours&&(c+=u.Weight,w+=s);o<r.
unitsInMilliseconds.Days&&(l+=u.Weight,b+=s);o<g&&(a+=u.Weight,k+=s)}v=h>0?Math.floor(100*p/h):null;
f.availabilityTwentyMin(v);f.availabilityOneHr(c>0?Math.floor(100*w/c):null);f.availabilityTwentyFourHr(
l>0?Math.floor(100*b/l):null);f.availabilitySeventyTwoHr(a>0?Math.floor(100*k/a):null);f.provisioningStatus=
n.convertToStatus(v)}return f},n.transformSet=function(t,f,e,o){for(var y,ft,h,et,s,d,c,a,ut,ot,v={},
g=0;g<e.length;g++)y=e[g].Id,ft=u.getDisplayName(o,y),v[y]={componentId:t.componentId,id:t.id,name:ko.
observable(t.name),enabled:null,provisioningStatus:"none",location:y,locationDisplayName:ft,availabilityTwentyMin:
ko.observable(null),availabilityOneHr:ko.observable(null),availabilityTwentyFourHr:ko.observable(null),
availabilitySeventyTwoHr:ko.observable(null)};if(f&&f.d&&f.d.results&&f.d.results.length){var st=Date.
now(),p=f.d.results,ht=r.unitsInMilliseconds.Minutes*20;for(h=0;h<p.length;h++)if(et=p[h].Context[i.
WebTests.SyntheticMonitorLocationId],s=v[et],!$.isEmptyObject(s)){var l=0,nt=0,w=0,tt=0,b=0,it=0,k=0,
rt=0,ct=i.Durations.ThreeDays;for(d=0;d<p[h].Values.length;d++)c=p[h].Values[d],a=st-Date.parse(c.TimeCreated),
a<ht&&(nt++,l+=c.Average>0?1:0),a<r.unitsInMilliseconds.Hours&&(tt++,w+=c.Average>0?1:0),a<r.unitsInMilliseconds.
Days&&(it++,b+=c.Average>0?1:0),a<ct&&(rt++,k+=c.Average>0?1:0);l=nt>0?Math.floor(100*l/nt):null;w=tt>
0?Math.floor(100*w/tt):null;b=it>0?Math.floor(100*b/it):null;k=rt>0?Math.floor(100*k/rt):null;s.provisioningStatus=
n.convertToStatus(l);s.availabilityTwentyMin(l);s.availabilityOneHr(w);s.availabilityTwentyFourHr(b);
s.availabilitySeventyTwoHr(k)}}ut=[];for(ot in v)ut.push(v[ot]);return n.sort(ut)},n.sort=function(n)
{return n.sort(function(n,t){var r=n.availabilityTwentyMin(),i,u,f,e;return($.isNumeric(r)||(r=-1),i=
t.availabilityTwentyMin(),$.isNumeric(i)||(i=-1),u=r-i,u!==0)?u:(r=n.availabilityOneHr(),$.isNumeric(
r)||(r=-1),i=t.availabilityOneHr(),$.isNumeric(i)||(i=-1),u=r-i,u!==0)?u:(r=n.availabilityTwentyFourHr(
),$.isNumeric(r)||(r=-1),i=t.availabilityTwentyFourHr(),$.isNumeric(i)||(i=-1),u=r-i,u!==0)?u:(r=n.availabilitySeventyTwoHr(
),$.isNumeric(r)||(r=-1),i=t.availabilitySeventyTwoHr(),$.isNumeric(i)||(i=-1),u=r-i,u!==0)?u:(f=n.name(
),$.isEmptyObject(f)&&(f=""),e=t.name(),$.isEmptyObject(e)&&(e=""),f!==e)?f>e?1:-1:(f=n.locationDisplayName,
$.isEmptyObject(f)&&(f=""),e=t.locationDisplayName,$.isEmptyObject(e)&&(e=""),f!==e)?f>e?1:-1:0})},n.
convertToStatus=function(n){return n==null?"none":n<100?"warning":"success"},n}();t.WebTestsAvailability=
f});define("Shared/DataModels/WebTestServerLocation",["require","exports"],function(n,t){function i(
n,t){var i,r;if($.isArray(n))for(i=0;i<n.length;i++)if(r=n[i],r.Tag===t)return r.DisplayName}t.getDisplayName=
i;var r=function(){function n(){}return n}();t.WebTestServerLocation=r});define("WebTests/DataModels/WebTestResultInfo",
["require","exports","../../Shared/Configuration","../../Shared/Constants","../../Shared/DateUtils",
"ClientResources","../../Shared/UrlHelper","../../Shared/DataModels/WebTestServerLocation"],function(
n,t,i,r,u,f,e,o){"use strict";var p=function(){function n(){}return n.transform=function(n,t,i){var s,
h,e,v;if(!t||!t.Values||!t.Values.length)return null;var y=new Date,c=[],l=t.Context[r.WebTests.SyntheticMonitorLocationId];
if($.isArray(t.Values)){for(s=[],h=0;h<t.Values.length;h++)if(e=t.Values[h],e.Average<0){var p=Math.
round(e.Average*-u.unitsInMilliseconds.Seconds),a=Date.parse(e.TimeCreated),w=o.getDisplayName(i,l),
b={id:n.id,componentId:n.componentId,group:l,locationDisplayName:w,name:n.name,description:new Date(
e.TimeCreated).toRelativeString("timestamp",y),responseTime:p+" "+f.unitMs,timeStampMs:a,key:name+a+
l};s.push(b)}s.sort(function(n,t){return t.timeStampMs-n.timeStampMs});v=s.splice(0,5);c=c.concat(v)}
return c},n}(),h,c,l,a,s,v,y;t.WebTestResultInfo=p;h=function(){function n(){}return n}();t.WebTestResponseHeader=
h;c=function(){function n(){}return n}();t.WebTestException=c;l=function(){function n(){}return n}();
t.WebTestRulesDetail=l;a=function(){function n(){}return n}();t.WebTestStepDetail=a;s=function(){function n(
){}return n.formatTimeDisplay=function(n){return n?f.webTestStepTimeFormat.format(n.toFixed(3)):"-"}
,n}();t.WebTestStep=s;v=function(){function n(){}return n.getResultUrl=function(n){var t={subscriptionId:
n.componentId.SubscriptionId,resourceGroup:n.componentId.ResourceGroup,webTestId:n.id,location:n.group,
timestamp:n.timeStampMs/u.unitsInMilliseconds.Seconds,api:i.getSettings().getGraphApiVersion()},r="subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/microsoft.insights/webtests/{webTestId}/locations/{location}/results?Timestamp={timestamp}&Passed=false&searchmode=all&Deserialized=true&api-version={api}".
format(t);return e.addApiProxy(r)},n}();t.WebTestResult=v;y=function(){function n(){var n=this;this.
_allSteps=[];this._visibleSteps=[];this.expand=function(t){t.expanded(!0);n.update()};this.collapse=
function(t){t.expanded(!1);n.update()};this.expandAll=function(){ko.utils.arrayForEach(n._allSteps,function(
n){n.expanded(!0)});n.update()};this.collapseAll=function(){ko.utils.arrayForEach(n._allSteps,function(
n){n.expanded(!1)});n.update()};this.items=ko.observable();this.update()}return n.prototype.setHierarchyItems=
function(n){this._allSteps=[];n&&n.Steps&&n.Steps.length>0&&(this._setHierarchyItems(n.Steps,0),this.
_allSteps=n.Steps)},n.prototype.update=function(){this._visibleSteps=[];this._getHierarchyItems(this.
_allSteps);this.items(this._visibleSteps)},n.prototype._setHierarchyItems=function(n,t){var i=this;n&&
n.length>0&&ko.utils.arrayForEach(n,function(n){var r=n.DependantRequests&&n.DependantRequests.length>
0;n.TotalTimeDisplay=s.formatTimeDisplay(n.TotalTime);n.RequestTimeDisplay=s.formatTimeDisplay(n.RequestTime);
n.depth=ko.observable(t);n.expandable=ko.observable(r);n.expanded=ko.observable(!1);r&&i._setHierarchyItems(
n.DependantRequests,t+1)})},n.prototype._getHierarchyItems=function(n){var t=this;n&&n.length>0&&ko.
utils.arrayForEach(n,function(n){t._visibleSteps.push(n);var i=n.DependantRequests&&n.DependantRequests.
length>0;i&&n.expanded()&&t._getHierarchyItems(n.DependantRequests)})},n}();t.WebTestStepHierarchy=y}
);__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("WebTests/DataModels/PerfstoreMetric",
["require","exports","ClientResources","../../Shared/Constants","../../Shared/DateUtils"],function(n,
t,i,r,u){var f=MsPortalFx.ViewModels.Controls.Visualization.Chart,e,s,o,h;e=function(){function n(){}
return n._createChartItem=function(n,t){if(t===void 0&&(t=1),n&&n.TimeCreated&&!isNaN(n.Average)){var
i=new Date(Date.parse(n.TimeCreated)),r=n.Average*t;return new f.ChartItem(i,r)}return},n}();t.PerfStoreMetric=
e;s=function(){function n(){}return n.transform=function(n){var f=[],o=[],i;if(n&&$.isArray(n.Values))
for(i=0;i<n.Values.length;i++){var s=n.Values[i],h=!!(s.Weight&2),t=e._createChartItem(s);t&&(t.yValue=
Math.abs(t.yValue)*u.unitsInMilliseconds.Seconds,n.Context&&n.Context[r.WebTests.SyntheticMonitorLocationId]&&
(t.location=n.Context[r.WebTests.SyntheticMonitorLocationId]),h?(t.success=!0,f.push(t)):(t.success=
!1,o.push(t)))}return{passed:f,failed:o}},n}();t.WebTestResultItems=s;o=function(){function n(n,t){this.
passed=new f.Series;this.passed.name(n+t+i.perfStoreMetricPassed);this.failed=new f.Series;this.failed.
name(n+t+i.perfStoreMetricFailed)}return n}();t.WebTestResultSeries=o;h=function(n){function t(t,i){
n.call(this,t,i);this.location=i}return __extends(t,n),t}(o);t.WebTestLocationResultSeries=h})