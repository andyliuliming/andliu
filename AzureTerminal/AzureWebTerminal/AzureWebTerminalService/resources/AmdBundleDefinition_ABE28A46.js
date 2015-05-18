"use strict";var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("InsightsExtension/Client/Applications/Parts/ApplicationsSummaryPart",
["require","exports","../ApplicationsArea","../Constants","../../_generated/ExtensionDefinition","../Utilities/ApplicationsGridUtility",
"Applications/ApplicationsResources","./ApplicationProviderSetupPartExtender"],function(n,t,i,r,u,f,
e){var o=f.ApplicationsGridUtility,s=function(n){function t(i,u,f){var o=this,s;n.call(this,i,t._createOptions(
u));this.extenderViewModel=ko.observable();this._resourceId=ko.observable();this._providerInfo=ko.observable(
);this._dataContext=f;this._container=i;this._container.selectable.selectedValue(!1);this._container.
isSelectable(!1);this._container.noDataMessage(e.loading);this._container.partTitle(e.summaryPartTitle);
this._applicationsView=f.applicationsData.applicationsCache.createView(i);this._initialSetup(i,u,f);
this.applicationConfigCollector=new MsPortalFx.ViewModels.ParameterCollector(i,{supplyInitialData:function(
){return{targetResourceId:o._resourceId()}},receiveResult:function(n){s(n)}});s=function(n){return StringEx.
equals(n.providerId,r.ProviderInformation.NewRelicProvider,0)?o._installNewRelic(n):StringEx.equals(
n.providerId,r.ProviderInformation.AppInsightsProvider,0)?o._installAppInsights(n):void 0}}return __extends(
t,n),t.prototype._installAppInsights=function(n){var t=this,u=Q.defer(),f,o,i;return n&&n.providerResourceId&&
(n.providerId===r.ProviderInformation.AppInsightsProvider&&Array.isArray(n.providerParameters)&&n.providerParameters.
length>0&&n.providerParameters.forEach(function(n){n.name==="licenseKey"&&(f=n.name,o=n.value)}),i={
targetResourceId:n.targetResourceId,providerResourceId:n.providerResourceId,providerId:n.providerId,
providerParameters:[{name:f,value:o}]},this._container.noDataMessage(e.inProgress),this._container.isSelectable(
!1),this.extenderViewModel().installProvider(i).then(function(){ExtensionCore.Azure.Rpc.ApplicationInsightsExtension.
tagAccount(i.targetResourceId,i.providerResourceId).then(function(){var n=MsPortalFx.ViewModels.Services.
ResourceTypes.parseResourceDescriptor(i.targetResourceId),f;n.provider===r.MicrosoftResourceProviderInfo.
MicrosoftAzureWebsite?t.extenderViewModel().listProviders(i.targetResourceId).then(function(n){n&&n.
length>0&&(t._providerInfo({id:n[0].id,isInstalled:n[0].isInstalled}),t._container.noDataMessage(""),
t._container.isSelectable(!0),u.resolve())},function(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,
"InsightsExtension.ApplicationsSummaryPart._installApplicationInsight","ListProviders failed: resourceId '{0}' error '{1}'".
format(i.targetResourceId,n));t._container.noDataMessage("");t._container.isSelectable(!0);u.reject(
)}):n.provider===r.MicrosoftResourceProviderInfo.MicrosoftCompute&&(f=t._dataContext.applicationsData.
getVmApplicationProviders(t._resourceId()),f.then(function(n){t._providerInfo({id:n[0].id,isInstalled:
n[0].isInstalled});t._container.noDataMessage("");t._container.isSelectable(!0);u.resolve()},function(
){t._container.noDataMessage("");t._container.isSelectable(!0);u.reject()}))},function(n){MsPortalFx.
Base.Diagnostics.Log.writeEntry(2,"InsightsExtension.ApplicationsSummaryPart._installAppInsights","TagAccount failed: accountId '{0}' resourceId '{1}' error '{2}'".
format(i.providerResourceId,i.targetResourceId,n));t._container.noDataMessage("");t._container.isSelectable(
!0);u.reject()})},function(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"InsightsExtension.ApplicationsSummaryPart._installApplicationInsight",
"installProviders failed: resourceId '{0}' error '{1}'".format(i.targetResourceId,n));t._container.noDataMessage(
"");t._container.isSelectable(!0);u.reject()})),u.promise},t.prototype._installNewRelic=function(n){
var t=this,u=Q.defer(),f,o,i;if(n&&n.providerResourceId)return n.providerId===r.ProviderInformation.
NewRelicProvider&&Array.isArray(n.providerParameters)&&n.providerParameters.length>0&&n.providerParameters.
forEach(function(n){n.name==="licenseKey"&&(f=n.name,o=n.value)}),i={targetResourceId:n.targetResourceId,
providerResourceId:n.providerResourceId,providerId:n.providerId,providerParameters:[{name:f,value:o}]},
this._container.noDataMessage(e.inProgress),this._container.isSelectable(!1),this.extenderViewModel(
).installProvider(i).then(function(){ExtensionCore.Azure.Rpc.NewRelicExtension.tagAccount(i.providerResourceId,
i.targetResourceId).then(function(){return Q.delay(15e3).then(function(){var n=MsPortalFx.ViewModels.
Services.ResourceTypes.parseResourceDescriptor(i.targetResourceId),f;n.provider===r.MicrosoftResourceProviderInfo.
MicrosoftAzureWebsite?t.extenderViewModel().listProviders(i.targetResourceId).then(function(n){n&&n.
length>0&&(t._providerInfo({id:n[0].id,isInstalled:n[0].isInstalled}),t._container.noDataMessage(""),
t._container.isSelectable(!0),u.resolve())},function(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,
"InsightsExtension.ApplicationsSummaryPart._installNewRelic","ListProviders failed: resourceId '{0}' error '{1}'".
format(i.targetResourceId,n));t._container.noDataMessage("");t._container.isSelectable(!0);u.reject(
)}):n.provider===r.MicrosoftResourceProviderInfo.MicrosoftCompute&&(f=t._dataContext.applicationsData.
getVmApplicationProviders(t._resourceId()),f.then(function(n){t._providerInfo({id:n[0].id,isInstalled:
n[0].isInstalled});t._container.noDataMessage("");t._container.isSelectable(!0);u.resolve()},function(
){t._container.noDataMessage("");t._container.isSelectable(!0);u.reject()}))})},function(n){MsPortalFx.
Base.Diagnostics.Log.writeEntry(2,"InsightsExtension.ApplicationsSummaryPart._installNewRelic","TagAccount failed: accountId '{0}' resourceId '{1}' error '{2}'".
format(i.providerResourceId,i.targetResourceId,n));t._container.noDataMessage("");t._container.isSelectable(
!0);u.reject()})},function(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"InsightsExtension.ApplicationsSummaryPart._installNewRelic",
"Install provider/extension failed: accountId '{0}' resourceId '{1}' error '{2}'".format(i.providerResourceId,
i.targetResourceId,n));t._container.noDataMessage("");t._container.isSelectable(!0);u.reject()}),u.promise}
,t.prototype._initialSetup=function(){var n=this;ko.reactor(this._container,function(){var t,i;n._providerInfo(
)&&(n._providerInfo().isInstalled?(n._container.noDataMessage(""),n._container.isSelectable(!0),n._container.
selectable.selectedValue({detailBlade:r.Blades.ApplicationsListBlade,detailBladeInputs:{resourceId:n.
_resourceId(),options:{hostName:n._hostName}}})):n._container.noDataMessage()!==e.inProgress&&(n._container.
selectable.selectedValue({detailBlade:r.Blades.ApplicationProviderConfigurationBlade,detailBladeInputs:
{resourceId:n._resourceId(),options:{hostName:n._hostName}}}),t={},t.partName=r.Parts.ApplicationSummaryPart,
t.extensionName=u.definitionName,n._container.noDataMessage(e.noApplicationsInstalled),i=n.extenderViewModel(
).canInstallProvider(n._resourceId()).then(function(){n._container.isSelectable(!0)},function(t){t&&
n._container.isSelectable(!1)})))});ko.reactor(this._container,function(){switch(n.size()){case 3:case
10:case 5:n._options.data.columns([o.columnStatus,o.columnName,o.columnResponseTime,o.columnErrorRate]);
break;default:n._options.data.columns([o.columnName,o.columnResponseTime])}});var t=this._applicationsView.
items.filter(this._container,function(){return!0}),i=t.map(this._container,o.mapToApplicationViewModel.
mapping),f=ko.computed(this._container,function(){n._options.data.items(i().slice(0))});f.extend({throttle:
3})},t.prototype.onInputsSet=function(n){var t=this,i,u;return this._resourceId(n.resourceId),i=MsPortalFx.
ViewModels.Services.ResourceTypes.parseResourceDescriptor(this._resourceId()),this._container.assetName(
i.resources.join("/")),this._container.selectable.selectedValue(null),this._hostName=n.options.hostName,
i.provider===r.MicrosoftResourceProviderInfo.MicrosoftAzureWebsite?this.extenderViewModel().listProviders(
this._resourceId()).then(function(n){t._setProviderInfo(n)},function(){t._providerInfo({})}):i.provider===
r.MicrosoftResourceProviderInfo.MicrosoftCompute&&(u=this._dataContext.applicationsData.getVmApplicationProviders(
this._resourceId()),u.then(function(n){t._setProviderInfo(n)},function(){t._providerInfo({})})),Q.all(
[this._providerInfo(),this._applicationsView.fetch({resourceId:this._resourceId(),hostName:n.options.
hostName})])},t.prototype._setProviderInfo=function(n){n&&n.length>0?this._providerInfo({id:n[0].id,
isInstalled:n[0].isInstalled}):this._providerInfo({})},t._createOptions=function(){return{data:{items:
ko.observableArray([]),columns:ko.observableArray([o.columnStatus,o.columnName,o.columnResponseTime,
o.columnErrorRate])},showHeader:!0,selectableRowExtensionOptions:o.selectableRowExtensionOptions}},t}
(MsPortalFx.ViewModels.Parts.Collection.ViewModel);t.ApplicationsSummaryPart=s})