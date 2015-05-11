define("BillingExtension/Billing/ViewModels/CurrentSpendViewModel",["require","exports","../BillingHelper",
"../Billing.Diagnostics","./ResourceCostData","BillingExtension/Billing/BillingClientStrings"],function(
n,t,i,r,u,f){var e;return function(n){"use strict";var t=f,e=function(){function n(n,i,r){this.title=
ko.observable(t.currentSpend);this.subscriptionId=ko.observable("");this.resourceName=ko.observable(
"");this.resourceType=ko.observable("");this.currentSpendAmount=ko.observable("");this.displayText=ko.
observable("");this.currentSpendBreakdowns=ko.observableArray([]);this.size=ko.observable(2);var u=r.
getBillingDataContext();this._container=n;n.partTitle(this.title());n.selectable=MsPortalFx.ViewModels.
Part.createSelectableViewModel(i);this._billingDataContext=u;this.dispose=this.dispose.bind(this)}return n.
prototype.dispose=function(){},n.prototype.onInputsSet=function(n){var f=this,h,o,s=$.Deferred(),e;return this.
subscriptionId(n.subscriptionId),this.resourceName(n.resourceName),n.resourceUsageUri&&n.resourceName||
(r.Log.error("resourceUsageUri or resourceName not specified"),this._container.fail(t.diagnosticsLogErrorResourceUsageUriNotSpecified)),
this.currentSpendAmount(""),this._container.noDataMessage(""),this._container.assetName(n.resourceName),
e=function(n){n===void 0&&(n=!1);f._container.noDataMessage(t.noBillingDataAvailable);n?s.reject():s.
resolve()},this._billingDataContext.getSubscriptionLoadPromiseFromId(n.subscriptionId).then(function(
){o=f._billingDataContext.getSubscriptionDetailsFromId(n.subscriptionId);o&&i.isAllowedSubType(o)?(h=
{name:n.resourceName,resourceSelfLink:n.resourceUsageUri},i.isValidUri(n.resourceUsageUri)?u.hasResourceReadAccess(
h.resourceSelfLink).then(function(t){t?u.ResourceCostData.GetCurrentSpendByResource(n.subscriptionId,
o.currentBillingPeriodStartDate(),h).then(function(t){t&&!!t.currentSpend?(f.displayText(n.displayText),
f.currentSpendAmount(t.currentSpend),f.currentSpendBreakdowns(t.currentSpendBreakdowns),f.resourceType(
t.type),s.resolve()):e()},function(){e(!0)}):f._container.unauthorized()}):f._container.fail(t.diagnosticsLogErrorResourceUsageUriNotSpecified)):
e()},function(){e(!0)}),s.promise()},n}();n.CurrentSpendViewModel=e}(e||(e={})),e})