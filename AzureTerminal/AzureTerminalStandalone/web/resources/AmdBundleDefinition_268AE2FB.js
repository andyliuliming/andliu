"use strict";var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("InsightsExtension/Client/Alerts/Parts/AlertsSummaryPart",
["require","exports","../AlertsArea","../Utilities/AuthorizationUtility","Alerts/AlertsResources","../../_generated/ExtensionDefinition"],
function(n,t,i,r,u,f){var e=function(n){function t(t,i,r){n.call(this,t,this._createOptions());this.
_initializedPart();this._initializeCollection();this._initializeDataView(r);this._initializeReactor(
)}return __extends(t,n),t.prototype.onInputsSet=function(n){var s,i,e,t,o,h;return n.options&&!!n.options.
isDisabled?(s=u.disabledMessage,n.options.disabledMessage&&(s=n.options.disabledMessage),this._container.
isSelectable(!1),this._container.noDataMessage(s),this._options.data.items.removeAll(),null):(i=n.targetResourceIds[
0],MsPortalFx.ViewModels.Services.ResourceTypes.isResourceId(i)?(o=MsPortalFx.ViewModels.Services.ResourceTypes.
parseResourceDescriptor(i),e=o.subscription,t=o.resourceGroup,this._container.assetName(o.resources.
join("/"))):(h=MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceGroupDescriptor(i),e=h.subscription,
t=h.resourceGroup,this._container.assetName(t)),r.VerifyResourceGroupReadPermissions(e,t,this._container),
this._container.selectable.selectedValue({detailBlade:f.BladeNames.alertsListBlade,detailBladeInputs:
{targetResourceIds:n.targetResourceIds,options:{enableEvents:!!n.options&&!!n.options.enableEvents}}}),
this._container.isSelectable(!0),this._container.noDataMessage(""),this._options.data.items(this._rows),
this._summaryDataView.fetch({subscriptionId:e,resourceGroup:t,targetResourceIds:n.targetResourceIds}))}
,t.prototype._createOptions=function(){var n={items:ko.observableArray(),columns:ko.observableArray(
[{itemKey:"key"},{itemKey:"value"}])};return{data:n,showHeader:!1}},t.prototype._initializedPart=function(
){this._activeAlertCount=ko.observable(0);this._ruleCount=ko.observable(0);this._container.partTitle(
u.alertsSummaryPartTitle)},t.prototype._initializeCollection=function(){var n={key:u.alertActiveNowLabel,
value:this._activeAlertCount},t={key:u.alertEnabledLabel,value:this._ruleCount};this.alwaysShowRollupCount(
!0);this._rows=[n,t]},t.prototype._initializeDataView=function(n){this._summaryDataView=n.alertsData.
alertsSummaryCache.createView(this._container)},t.prototype._initializeReactor=function(){var n=this;
ko.reactor(this._container,function(){n._updateSummaryData()})},t.prototype._updateSummaryData=function(
){if(!this._summaryDataView.loading()&&this._summaryDataView.item()){var t=this._summaryDataView.item(
).enabledAlertCount(),n=this._summaryDataView.item().activeAlertCount();this._ruleCount(t);this._activeAlertCount(
n);n>0?(this.rollupCount(n),this.rollupCountIcon(MsPortalFx.Base.Images.StatusBadge.Warning())):(this.
rollupCount(t),this.rollupCountIcon(MsPortalFx.Base.Images.StatusBadge.Success()))}},t}(MsPortalFx.ViewModels.
Parts.Collection.ViewModel);t.AlertsSummaryPart=e})