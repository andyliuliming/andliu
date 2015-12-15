"use strict";var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("InsightsExtension/Client/EntryPoint",
["require","exports","./Alerts/AlertsArea","./Events/EventsArea","./Applications/ApplicationsArea","./Diagnostics/DiagnosticsArea",
"./Metrics/MetricsArea","./Usages/UsagesArea","./Scales/ScalesArea","./_generated/ExtensionDefinition",
"./_generated/ViewModelFactories"],function(n,t,i,r,u,f,e,o,s,h,c){var l=i.DataContext,a=r.DataContext,
v=u.DataContext,y=f.DataContext,p=e.DataContext,w=o.DataContext,b=s.DataContext;return function(n){function t(
){n.apply(this,arguments)}return __extends(t,n),t.create=function(){return new t},t.prototype.initialize=
function(){this.viewModelFactories=new c.ViewModelFactoriesBase;this.initializeDataContexts()},t.prototype.
initializeDataContexts=function(){var n=new y,t=new p(n.diagnosticsData);this.viewModelFactories.Events(
).setDataContext(new a);this.viewModelFactories.Metrics().setDataContext(t);this.viewModelFactories.
Alerts().setDataContext(new l(t.metricsData,n.diagnosticsData));this.viewModelFactories.Applications(
).setDataContext(new v);this.viewModelFactories.Diagnostics().setDataContext(n);this.viewModelFactories.
Usages().setDataContext(new w);this.viewModelFactories.Scales().setDataContext(new b(t.metricsData))}
,t.prototype.getDefinition=function(){return h.getDefinition()},t}(MsPortalFx.Extension.EntryPointBase)}
);__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("InsightsExtension/Client/_generated/ViewModelFactories",
["require","exports"],function(n){var t;return function(t){var h=function(t){function i(){t.apply(this,
arguments)}return __extends(i,t),i.prototype.AzureDiagnosticsPart=function(t,i){var r=this;return this.
loadViewModelAsync("../Events/Parts/AzureDiagnosticsPart",function(n){return new n.AzureDiagnosticsPart(
t,i,r.dataContext)},n)},i.prototype.EventListPart=function(t,i){var r=this;return this.loadViewModelAsync(
"../Events/Parts/EventListPart",function(n){return new n.EventListPart(t,i,r.dataContext)},n)},i.prototype.
EventChartPart=function(t,i){var r=this;return this.loadViewModelAsync("../Events/Parts/EventChartPart",
function(n){return new n.EventChartPart(t,i,r.dataContext)},n)},i.prototype.ActionListPart=function(
t,i){var r=this;return this.loadViewModelAsync("../Events/Parts/ActionListPart",function(n){return new
n.ActionListPart(t,i,r.dataContext)},n)},i.prototype.ActionPropertiesPart=function(t,i){var r=this;return this.
loadViewModelAsync("../Events/Parts/ActionPropertiesPart",function(n){return new n.ActionPropertiesPart(
t,i,r.dataContext)},n)},i.prototype.EventsSummaryPart=function(t,i){var r=this;return this.loadViewModelAsync(
"../Events/Parts/EventsSummaryPart",function(n){return new n.EventsSummaryPart(t,i,r.dataContext)},n)}
,i.prototype.EventsListPart=function(t,i){var r=this;return this.loadViewModelAsync("../Events/Parts/EventsListPart",
function(n){return new n.EventsListPart(t,i,r.dataContext)},n)},i.prototype.EventPropertiesPart=function(
t,i){var r=this;return this.loadViewModelAsync("../Events/Parts/EventPropertiesPart",function(n){return new
n.EventPropertiesPart(t,i,r.dataContext)},n)},i.prototype.ActionDetailsBlade=function(t,i){var r=this;
return this.loadViewModelAsync("../Events/Blades/ActionDetailsBlade",function(n){return new n.ActionDetailsBlade(
t,i,r.dataContext)},n)},i.prototype.EventFilterBlade=function(t,i){var r=this;return this.loadViewModelAsync(
"../Events/Blades/EventFilterBlade",function(n){return new n.EventFilterBlade(t,i,r.dataContext)},n)}
,i.prototype.EventFilterActionBar=function(t,i){var r=this;return this.loadViewModelAsync("../Events/ActionBars/EventFilterActionBar",
function(n){return new n.EventFilterActionBar(t,i,r.dataContext)},n)},i.prototype.EventFilterPart=function(
t,i){var r=this;return this.loadViewModelAsync("../Events/Parts/EventFilterPart",function(n){return new
n.EventFilterPart(t,i,r.dataContext)},n)},i.prototype.EventsListBlade=function(t,i){var r=this;return this.
loadViewModelAsync("../Events/Blades/EventsListBlade",function(n){return new n.EventsListBlade(t,i,r.
dataContext)},n)},i.prototype.EventDetailBlade=function(t,i){var r=this;return this.loadViewModelAsync(
"../Events/Blades/EventDetailBlade",function(n){return new n.EventDetailBlade(t,i,r.dataContext)},n)}
,i.prototype.EventDetailPart=function(t,i){var r=this;return this.loadViewModelAsync("../Events/Parts/EventDetailPart",
function(n){return new n.EventDetailPart(t,i,r.dataContext)},n)},i.prototype.EventPropertiesBlade=function(
t,i){var r=this;return this.loadViewModelAsync("../Events/Blades/EventPropertiesBlade",function(n){return new
n.EventPropertiesBlade(t,i,r.dataContext)},n)},i.prototype.AzureDiagnosticsBladeWithParameter=function(
t,i){var r=this;return this.loadViewModelAsync("../Events/Blades/AzureDiagnosticsBladeWithParameter",
function(n){return new n.AzureDiagnosticsBladeWithParameter(t,i,r.dataContext)},n)},i.prototype.EventsSummaryBladeSettingsPart=
function(t,i){var r=this;return this.loadViewModelAsync("../Events/Parts/EventsSummaryBladeSettingsPart",
function(n){return new n.EventsSummaryBladeSettingsPart(t,i,r.dataContext)},n)},i.prototype.TemporaryPart=
function(t,i){var r=this;return this.loadViewModelAsync("../Events/Parts/TemporaryPart",function(n){
return new n.TemporaryPart(t,i,r.dataContext)},n)},i.prototype.EventsSummaryBlade=function(t,i){var r=
this;return this.loadViewModelAsync("../Events/Blades/EventsSummaryBlade",function(n){return new n.EventsSummaryBlade(
t,i,r.dataContext)},n)},i.prototype.EventFilterCommand=function(t,i){var r=this;return this.loadViewModelAsync(
"../Events/Commands/EventFilterCommand",function(n){return new n.EventFilterCommand(t,i,r.dataContext)}
,n)},i}(MsPortalFx.Internal.Extension.ViewModelAreaFactoriesBase),i,r,u,f,e,o,s,c;t.EventsViewModelFactoriesBase=
h;i=function(t){function i(){t.apply(this,arguments)}return __extends(i,t),i.prototype.AlertsSummaryPart=
function(t,i){var r=this;return this.loadViewModelAsync("../Alerts/Parts/AlertsSummaryPart",function(
n){return new n.AlertsSummaryPart(t,i,r.dataContext)},n)},i.prototype.AlertsListPart=function(t,i){var
r=this;return this.loadViewModelAsync("../Alerts/Parts/AlertsListPart",function(n){return new n.AlertsListPart(
t,i,r.dataContext)},n)},i.prototype.AlertsListBlade=function(t,i){var r=this;return this.loadViewModelAsync(
"../Alerts/Blades/AlertsListBlade",function(n){return new n.AlertsListBlade(t,i,r.dataContext)},n)},
i.prototype.AlertEditBlade=function(t,i){var r=this;return this.loadViewModelAsync("../Alerts/Blades/AlertEditBlade",
function(n){return new n.AlertEditBlade(t,i,r.dataContext)},n)},i.prototype.AlertEditPart=function(t,
i){var r=this;return this.loadViewModelAsync("../Alerts/Parts/AlertEditPart",function(n){return new n.
AlertEditPart(t,i,r.dataContext)},n)},i.prototype.SaveAlertCommand=function(t,i){var r=this;return this.
loadViewModelAsync("../Alerts/Commands/SaveAlertCommand",function(n){return new n.SaveAlertCommand(t,
i,r.dataContext)},n)},i.prototype.DiscardAlertCommand=function(t,i){var r=this;return this.loadViewModelAsync(
"../Alerts/Commands/DiscardAlertCommand",function(n){return new n.DiscardAlertCommand(t,i,r.dataContext)}
,n)},i.prototype.EnableAlertCommand=function(t,i){var r=this;return this.loadViewModelAsync("../Alerts/Commands/EnableAlertCommand",
function(n){return new n.EnableAlertCommand(t,i,r.dataContext)},n)},i.prototype.DisableAlertCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../Alerts/Commands/DisableAlertCommand",function(
n){return new n.DisableAlertCommand(t,i,r.dataContext)},n)},i.prototype.EditFormDeleteAlertCommand=function(
t,i){var r=this;return this.loadViewModelAsync("../Alerts/Commands/EditFormDeleteAlertCommand",function(
n){return new n.EditFormDeleteAlertCommand(t,i,r.dataContext)},n)},i.prototype.AlertAddBlade=function(
t,i){var r=this;return this.loadViewModelAsync("../Alerts/Blades/AlertAddBlade",function(n){return new
n.AlertAddBlade(t,i,r.dataContext)},n)},i.prototype.AlertAddPart=function(t,i){var r=this;return this.
loadViewModelAsync("../Alerts/Parts/AlertAddPart",function(n){return new n.AlertAddPart(t,i,r.dataContext)}
,n)},i.prototype.DeleteAlertCommand=function(t,i){var r=this;return this.loadViewModelAsync("../Alerts/Commands/DeleteAlertCommand",
function(n){return new n.DeleteAlertCommand(t,i,r.dataContext)},n)},i.prototype.AddAlertCommand=function(
t,i){var r=this;return this.loadViewModelAsync("../Alerts/Commands/AddAlertCommand",function(n){return new
n.AddAlertCommand(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.ViewModelAreaFactoriesBase);
t.AlertsViewModelFactoriesBase=i;r=function(t){function i(){t.apply(this,arguments)}return __extends(
i,t),i.prototype.MetricsSummaryPart=function(t,i){var r=this;return this.loadViewModelAsync("../Metrics/Parts/MetricsSummaryPart",
function(n){return new n.MetricsSummaryPart(t,i,r.dataContext)},n)},i.prototype.OpenMetricsChartConfigurationBladeCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../Metrics/Commands/OpenMetricsChartConfigurationBladeCommand",
function(n){return new n.OpenMetricsChartConfigurationBladeCommand(t,i,r.dataContext)},n)},i.prototype.
MetricChartPart=function(t,i){var r=this;return this.loadViewModelAsync("../Metrics/Parts/MetricChartPart",
function(n){return new n.MetricChartPart(t,i,r.dataContext)},n)},i.prototype.MetricsDetailsBlade=function(
t,i){var r=this;return this.loadViewModelAsync("../Metrics/Blades/MetricsDetailsBlade",function(n){return new
n.MetricsDetailsBlade(t,i,r.dataContext)},n)},i.prototype.MetricsDetailsPart=function(t,i){var r=this;
return this.loadViewModelAsync("../Metrics/Parts/MetricsDetailsPart",function(n){return new n.MetricsDetailsPart(
t,i,r.dataContext)},n)},i.prototype.OpenAddAlertBladeCommand=function(t,i){var r=this;return this.loadViewModelAsync(
"../Metrics/Commands/OpenAddAlertBladeCommand",function(n){return new n.OpenAddAlertBladeCommand(t,i,
r.dataContext)},n)},i.prototype.OpenDiagnosticsSettingsBladeCommand=function(t,i){var r=this;return this.
loadViewModelAsync("../Metrics/Commands/OpenDiagnosticsSettingsBladeCommand",function(n){return new n.
OpenDiagnosticsSettingsBladeCommand(t,i,r.dataContext)},n)},i.prototype.MetricsChartConfigurationBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../Metrics/Blades/MetricsChartConfigurationBlade",
function(n){return new n.MetricsChartConfigurationBlade(t,i,r.dataContext)},n)},i.prototype.MetricsChartConfigurationPart=
function(t,i){var r=this;return this.loadViewModelAsync("../Metrics/Parts/MetricsChartConfigurationPart",
function(n){return new n.MetricsChartConfigurationPart(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.MetricsViewModelFactoriesBase=r;u=function(t){function i(){t.
apply(this,arguments)}return __extends(i,t),i.prototype.UsageGaugePart=function(t,i){var r=this;return this.
loadViewModelAsync("../Usages/Parts/UsageGaugePart",function(n){return new n.UsageGaugePart(t,i,r.dataContext)}
,n)},i.prototype.UsageGaugeBlade=function(t,i){var r=this;return this.loadViewModelAsync("../Usages/Blades/UsageGaugeBlade",
function(n){return new n.UsageGaugeBlade(t,i,r.dataContext)},n)},i.prototype.UsageGaugeDetailPart=function(
t,i){var r=this;return this.loadViewModelAsync("../Usages/Parts/UsageGaugeDetailPart",function(n){return new
n.UsageGaugeDetailPart(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.ViewModelAreaFactoriesBase);
t.UsagesViewModelFactoriesBase=u;f=function(t){function i(){t.apply(this,arguments)}return __extends(
i,t),i.prototype.ApplicationsSummaryPart=function(t,i){var r=this;return this.loadViewModelAsync("../Applications/Parts/ApplicationsSummaryPart",
function(n){return new n.ApplicationsSummaryPart(t,i,r.dataContext)},n)},i.prototype.ApplicationsListPart=
function(t,i){var r=this;return this.loadViewModelAsync("../Applications/Parts/ApplicationsListPart",
function(n){return new n.ApplicationsListPart(t,i,r.dataContext)},n)},i.prototype.ApplicationsListBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../Applications/Blades/ApplicationsListBlade",
function(n){return new n.ApplicationsListBlade(t,i,r.dataContext)},n)},i.prototype.ApplicationProviderConfigurationBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../Applications/Blades/ApplicationProviderConfigurationBlade",
function(n){return new n.ApplicationProviderConfigurationBlade(t,i,r.dataContext)},n)},i.prototype.ApplicationProviderConfigurationPart=
function(t,i){var r=this;return this.loadViewModelAsync("../Applications/Parts/ApplicationProviderConfigurationPart",
function(n){return new n.ApplicationProviderConfigurationPart(t,i,r.dataContext)},n)},i}(MsPortalFx.
Internal.Extension.ViewModelAreaFactoriesBase);t.ApplicationsViewModelFactoriesBase=f;e=function(t){
function i(){t.apply(this,arguments)}return __extends(i,t),i.prototype.ScaleSummaryPart=function(t,i)
{var r=this;return this.loadViewModelAsync("../Scales/Parts/ScaleSummaryPart",function(n){return new
n.ScaleSummaryPart(t,i,r.dataContext)},n)},i.prototype.ScaleSettingPart=function(t,i){var r=this;return this.
loadViewModelAsync("../Scales/Parts/ScaleSettingPart",function(n){return new n.ScaleSettingPart(t,i,
r.dataContext)},n)},i.prototype.ScaleHistoryPart=function(t,i){var r=this;return this.loadViewModelAsync(
"../Scales/Parts/ScaleHistoryPart",function(n){return new n.ScaleHistoryPart(t,i,r.dataContext)},n)}
,i.prototype.ScaleSettingBlade=function(t,i){var r=this;return this.loadViewModelAsync("../Scales/Blades/ScaleSettingBlade",
function(n){return new n.ScaleSettingBlade(t,i,r.dataContext)},n)},i.prototype.SaveScaleSettingCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../Scales/Commands/SaveScaleSettingCommand",
function(n){return new n.SaveScaleSettingCommand(t,i,r.dataContext)},n)},i.prototype.DiscardScaleSettingCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../Scales/Commands/DiscardScaleSettingCommand",
function(n){return new n.DiscardScaleSettingCommand(t,i,r.dataContext)},n)},i.prototype.ScaleProfileBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../Scales/Blades/ScaleProfileBlade",function(
n){return new n.ScaleProfileBlade(t,i,r.dataContext)},n)},i.prototype.ScaleProfilePart=function(t,i)
{var r=this;return this.loadViewModelAsync("../Scales/Parts/ScaleProfilePart",function(n){return new
n.ScaleProfilePart(t,i,r.dataContext)},n)},i.prototype.ScaleRuleBlade=function(t,i){var r=this;return this.
loadViewModelAsync("../Scales/Blades/ScaleRuleBlade",function(n){return new n.ScaleRuleBlade(t,i,r.dataContext)}
,n)},i.prototype.ScaleRulePart=function(t,i){var r=this;return this.loadViewModelAsync("../Scales/Parts/ScaleRulePart",
function(n){return new n.ScaleRulePart(t,i,r.dataContext)},n)},i.prototype.DeleteScaleSettingNodeCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../Scales/Commands/DeleteScaleSettingNodeCommand",
function(n){return new n.DeleteScaleSettingNodeCommand(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.ScalesViewModelFactoriesBase=e;o=function(t){function i(){t.
apply(this,arguments)}return __extends(i,t),i.prototype.BlankPart=function(t,i){var r=this;return this.
loadViewModelAsync("../Tests/Parts/BlankPart",function(n){return new n.BlankPart(t,i,r.dataContext)}
,n)},i.prototype.EventsSummaryLauncherPart=function(t,i){var r=this;return this.loadViewModelAsync("../Tests/Parts/EventsSummaryLauncherPart",
function(n){return new n.EventsSummaryLauncherPart(t,i,r.dataContext)},n)},i.prototype.AzureDiagnosticsLauncherPart=
function(t,i){var r=this;return this.loadViewModelAsync("../Tests/Parts/AzureDiagnosticsLauncherPart",
function(n){return new n.AzureDiagnosticsLauncherPart(t,i,r.dataContext)},n)},i.prototype.MainBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../Tests/Blades/MainBlade",function(n){return new
n.MainBlade(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.ViewModelAreaFactoriesBase);t.TestsViewModelFactoriesBase=
o;s=function(t){function i(){t.apply(this,arguments)}return __extends(i,t),i.prototype.DiagnosticsConfigurationBlade=
function(t,i){var r=this;return this.loadViewModelAsync("../Diagnostics/Blades/DiagnosticsConfigurationBlade",
function(n){return new n.DiagnosticsConfigurationBlade(t,i,r.dataContext)},n)},i.prototype.DiagnosticsConfigurationPart=
function(t,i){var r=this;return this.loadViewModelAsync("../Diagnostics/Parts/DiagnosticsConfigurationPart",
function(n){return new n.DiagnosticsConfigurationPart(t,i,r.dataContext)},n)},i.prototype.DiagnosticsConfigurationUpdatePart=
function(t,i){var r=this;return this.loadViewModelAsync("../Diagnostics/Parts/DiagnosticsConfigurationUpdatePart",
function(n){return new n.DiagnosticsConfigurationUpdatePart(t,i,r.dataContext)},n)},i.prototype.SaveDiagnosticsConfigurationCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../Diagnostics/Commands/SaveDiagnosticsConfigurationCommand",
function(n){return new n.SaveDiagnosticsConfigurationCommand(t,i,r.dataContext)},n)},i.prototype.DiscardDiagnosticsConfigurationCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../Diagnostics/Commands/DiscardDiagnosticsConfigurationCommand",
function(n){return new n.DiscardDiagnosticsConfigurationCommand(t,i,r.dataContext)},n)},i}(MsPortalFx.
Internal.Extension.ViewModelAreaFactoriesBase);t.DiagnosticsViewModelFactoriesBase=s;c=function(){function n(
){}return n.prototype.SetEventsViewModelFactories=function(n){this._EventsViewModelFactories=n},n.prototype.
Events=function(){return this._EventsViewModelFactories=this._EventsViewModelFactories||new h,this._EventsViewModelFactories}
,n.prototype.Events$AzureDiagnosticsPart=function(n,t){return this.Events().AzureDiagnosticsPart(n,t)}
,n.prototype.Events$EventListPart=function(n,t){return this.Events().EventListPart(n,t)},n.prototype.
Events$EventChartPart=function(n,t){return this.Events().EventChartPart(n,t)},n.prototype.Events$ActionListPart=
function(n,t){return this.Events().ActionListPart(n,t)},n.prototype.Events$ActionPropertiesPart=function(
n,t){return this.Events().ActionPropertiesPart(n,t)},n.prototype.Events$EventsSummaryPart=function(n,
t){return this.Events().EventsSummaryPart(n,t)},n.prototype.Events$EventsListPart=function(n,t){return this.
Events().EventsListPart(n,t)},n.prototype.Events$EventPropertiesPart=function(n,t){return this.Events(
).EventPropertiesPart(n,t)},n.prototype.SetAlertsViewModelFactories=function(n){this._AlertsViewModelFactories=
n},n.prototype.Alerts=function(){return this._AlertsViewModelFactories=this._AlertsViewModelFactories||
new i,this._AlertsViewModelFactories},n.prototype.Alerts$AlertsSummaryPart=function(n,t){return this.
Alerts().AlertsSummaryPart(n,t)},n.prototype.Alerts$AlertsListPart=function(n,t){return this.Alerts(
).AlertsListPart(n,t)},n.prototype.SetMetricsViewModelFactories=function(n){this._MetricsViewModelFactories=
n},n.prototype.Metrics=function(){return this._MetricsViewModelFactories=this._MetricsViewModelFactories||
new r,this._MetricsViewModelFactories},n.prototype.Metrics$MetricsSummaryPart=function(n,t){return this.
Metrics().MetricsSummaryPart(n,t)},n.prototype.Metrics$OpenMetricsChartConfigurationBladeCommand=function(
n,t){return this.Metrics().OpenMetricsChartConfigurationBladeCommand(n,t)},n.prototype.Metrics$MetricChartPart=
function(n,t){return this.Metrics().MetricChartPart(n,t)},n.prototype.SetUsagesViewModelFactories=function(
n){this._UsagesViewModelFactories=n},n.prototype.Usages=function(){return this._UsagesViewModelFactories=
this._UsagesViewModelFactories||new u,this._UsagesViewModelFactories},n.prototype.Usages$UsageGaugePart=
function(n,t){return this.Usages().UsageGaugePart(n,t)},n.prototype.SetApplicationsViewModelFactories=
function(n){this._ApplicationsViewModelFactories=n},n.prototype.Applications=function(){return this.
_ApplicationsViewModelFactories=this._ApplicationsViewModelFactories||new f,this._ApplicationsViewModelFactories}
,n.prototype.Applications$ApplicationsSummaryPart=function(n,t){return this.Applications().ApplicationsSummaryPart(
n,t)},n.prototype.Applications$ApplicationsListPart=function(n,t){return this.Applications().ApplicationsListPart(
n,t)},n.prototype.SetScalesViewModelFactories=function(n){this._ScalesViewModelFactories=n},n.prototype.
Scales=function(){return this._ScalesViewModelFactories=this._ScalesViewModelFactories||new e,this._ScalesViewModelFactories}
,n.prototype.Scales$ScaleSummaryPart=function(n,t){return this.Scales().ScaleSummaryPart(n,t)},n.prototype.
Scales$ScaleSettingPart=function(n,t){return this.Scales().ScaleSettingPart(n,t)},n.prototype.Scales$ScaleHistoryPart=
function(n,t){return this.Scales().ScaleHistoryPart(n,t)},n.prototype.SetTestsViewModelFactories=function(
n){this._TestsViewModelFactories=n},n.prototype.Tests=function(){return this._TestsViewModelFactories=
this._TestsViewModelFactories||new o,this._TestsViewModelFactories},n.prototype.Tests$BlankPart=function(
n,t){return this.Tests().BlankPart(n,t)},n.prototype.Tests$EventsSummaryLauncherPart=function(n,t){return this.
Tests().EventsSummaryLauncherPart(n,t)},n.prototype.Tests$AzureDiagnosticsLauncherPart=function(n,t)
{return this.Tests().AzureDiagnosticsLauncherPart(n,t)},n.prototype.Events$ActionDetailsBlade=function(
n,t){return this.Events().ActionDetailsBlade(n,t)},n.prototype.Events$EventFilterBlade=function(n,t)
{return this.Events().EventFilterBlade(n,t)},n.prototype.Events$EventFilterActionBar=function(n,t){return this.
Events().EventFilterActionBar(n,t)},n.prototype.Events$EventFilterPart=function(n,t){return this.Events(
).EventFilterPart(n,t)},n.prototype.Events$EventsListBlade=function(n,t){return this.Events().EventsListBlade(
n,t)},n.prototype.Events$EventDetailBlade=function(n,t){return this.Events().EventDetailBlade(n,t)},
n.prototype.Events$EventDetailPart=function(n,t){return this.Events().EventDetailPart(n,t)},n.prototype.
Events$EventPropertiesBlade=function(n,t){return this.Events().EventPropertiesBlade(n,t)},n.prototype.
Events$AzureDiagnosticsBladeWithParameter=function(n,t){return this.Events().AzureDiagnosticsBladeWithParameter(
n,t)},n.prototype.Events$EventsSummaryBladeSettingsPart=function(n,t){return this.Events().EventsSummaryBladeSettingsPart(
n,t)},n.prototype.Events$TemporaryPart=function(n,t){return this.Events().TemporaryPart(n,t)},n.prototype.
Events$EventsSummaryBlade=function(n,t){return this.Events().EventsSummaryBlade(n,t)},n.prototype.Alerts$AlertsListBlade=
function(n,t){return this.Alerts().AlertsListBlade(n,t)},n.prototype.Alerts$AlertEditBlade=function(
n,t){return this.Alerts().AlertEditBlade(n,t)},n.prototype.Alerts$AlertEditPart=function(n,t){return this.
Alerts().AlertEditPart(n,t)},n.prototype.Alerts$SaveAlertCommand=function(n,t){return this.Alerts().
SaveAlertCommand(n,t)},n.prototype.Alerts$DiscardAlertCommand=function(n,t){return this.Alerts().DiscardAlertCommand(
n,t)},n.prototype.Alerts$EnableAlertCommand=function(n,t){return this.Alerts().EnableAlertCommand(n,
t)},n.prototype.Alerts$DisableAlertCommand=function(n,t){return this.Alerts().DisableAlertCommand(n,
t)},n.prototype.Alerts$EditFormDeleteAlertCommand=function(n,t){return this.Alerts().EditFormDeleteAlertCommand(
n,t)},n.prototype.Alerts$AlertAddBlade=function(n,t){return this.Alerts().AlertAddBlade(n,t)},n.prototype.
Alerts$AlertAddPart=function(n,t){return this.Alerts().AlertAddPart(n,t)},n.prototype.Metrics$MetricsDetailsBlade=
function(n,t){return this.Metrics().MetricsDetailsBlade(n,t)},n.prototype.Metrics$MetricsDetailsPart=
function(n,t){return this.Metrics().MetricsDetailsPart(n,t)},n.prototype.Metrics$OpenAddAlertBladeCommand=
function(n,t){return this.Metrics().OpenAddAlertBladeCommand(n,t)},n.prototype.Metrics$OpenDiagnosticsSettingsBladeCommand=
function(n,t){return this.Metrics().OpenDiagnosticsSettingsBladeCommand(n,t)},n.prototype.Metrics$MetricsChartConfigurationBlade=
function(n,t){return this.Metrics().MetricsChartConfigurationBlade(n,t)},n.prototype.Metrics$MetricsChartConfigurationPart=
function(n,t){return this.Metrics().MetricsChartConfigurationPart(n,t)},n.prototype.SetDiagnosticsViewModelFactories=
function(n){this._DiagnosticsViewModelFactories=n},n.prototype.Diagnostics=function(){return this._DiagnosticsViewModelFactories=
this._DiagnosticsViewModelFactories||new s,this._DiagnosticsViewModelFactories},n.prototype.Diagnostics$DiagnosticsConfigurationBlade=
function(n,t){return this.Diagnostics().DiagnosticsConfigurationBlade(n,t)},n.prototype.Diagnostics$DiagnosticsConfigurationPart=
function(n,t){return this.Diagnostics().DiagnosticsConfigurationPart(n,t)},n.prototype.Diagnostics$DiagnosticsConfigurationUpdatePart=
function(n,t){return this.Diagnostics().DiagnosticsConfigurationUpdatePart(n,t)},n.prototype.Diagnostics$SaveDiagnosticsConfigurationCommand=
function(n,t){return this.Diagnostics().SaveDiagnosticsConfigurationCommand(n,t)},n.prototype.Diagnostics$DiscardDiagnosticsConfigurationCommand=
function(n,t){return this.Diagnostics().DiscardDiagnosticsConfigurationCommand(n,t)},n.prototype.Usages$UsageGaugeBlade=
function(n,t){return this.Usages().UsageGaugeBlade(n,t)},n.prototype.Usages$UsageGaugeDetailPart=function(
n,t){return this.Usages().UsageGaugeDetailPart(n,t)},n.prototype.Applications$ApplicationsListBlade=
function(n,t){return this.Applications().ApplicationsListBlade(n,t)},n.prototype.Applications$ApplicationProviderConfigurationBlade=
function(n,t){return this.Applications().ApplicationProviderConfigurationBlade(n,t)},n.prototype.Applications$ApplicationProviderConfigurationPart=
function(n,t){return this.Applications().ApplicationProviderConfigurationPart(n,t)},n.prototype.Scales$ScaleSettingBlade=
function(n,t){return this.Scales().ScaleSettingBlade(n,t)},n.prototype.Scales$SaveScaleSettingCommand=
function(n,t){return this.Scales().SaveScaleSettingCommand(n,t)},n.prototype.Scales$DiscardScaleSettingCommand=
function(n,t){return this.Scales().DiscardScaleSettingCommand(n,t)},n.prototype.Scales$ScaleProfileBlade=
function(n,t){return this.Scales().ScaleProfileBlade(n,t)},n.prototype.Scales$ScaleProfilePart=function(
n,t){return this.Scales().ScaleProfilePart(n,t)},n.prototype.Scales$ScaleRuleBlade=function(n,t){return this.
Scales().ScaleRuleBlade(n,t)},n.prototype.Scales$ScaleRulePart=function(n,t){return this.Scales().ScaleRulePart(
n,t)},n.prototype.Tests$MainBlade=function(n,t){return this.Tests().MainBlade(n,t)},n.prototype.Events$EventFilterCommand=
function(n,t){return this.Events().EventFilterCommand(n,t)},n.prototype.Alerts$DeleteAlertCommand=function(
n,t){return this.Alerts().DeleteAlertCommand(n,t)},n.prototype.Alerts$AddAlertCommand=function(n,t){
return this.Alerts().AddAlertCommand(n,t)},n.prototype.Scales$DeleteScaleSettingNodeCommand=function(
n,t){return this.Scales().DeleteScaleSettingNodeCommand(n,t)},n}();t.ViewModelFactoriesBase=c}(t||(t=
{})),t})