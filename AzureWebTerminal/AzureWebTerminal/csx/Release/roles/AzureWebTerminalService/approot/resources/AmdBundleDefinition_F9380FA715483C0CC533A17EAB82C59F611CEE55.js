var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Help/ViewModels/NewSupportRequestCommandViewModel",
["require","exports","HubsExtension/Help/HelpClientStrings","HubsExtension/Help/ViewModels/HasSubscriptionViewModel"],
function(n,t,i,r){var u;return function(n){"use strict";var u=window,t=u.fx,e=i.HelpAndSupport.Support,
f=function(n){function i(t,i,u,f){var e,o;n.call(this,t,i);this.icon(MsPortalFx.Base.Images.Add());e=
function(){f.hasSubscription()||t.unauthorized()};f||(f=new r.HasSubscriptionViewModel(t,null,null));
f.subscriptionsLoaded()?e():o=f.subscriptionsLoaded.subscribe(function(n){n&&(e(),o.dispose())})}return __extends(
i,n),i.prototype.onInputsSet=function(t){return n.prototype.onInputsSet.call(this,t),null},i.prototype.
getProviderInputs=function(){var n=new MsPortalFx.ViewModels.ParameterCollection.ParameterCollectionInput;
return n.inputParameters={requestTypeDetails:{requestTypeId:"",requestTypeName:"",requestTypePesId:""},
subscriptionDetails:{subscriptionId:""},resourceTypeDetails:{resourceId:"",resourceTypeId:"",resourceTypeName:
"",resourceTypePesId:"",resourceInstanceId:"",resourceInstanceName:"",resourceInstanceLocation:"",resourceIdentifierName:
"",resourceIdentifierValue:""},supportPlanDetails:{supportOffering:"",supportOfferingId:""},problemTypeDetails:
{problemTypeId:"",problemTypeTitle:"",problemTypeCategoryTitle:""},otherDetails:{description:"",siteLanguage:
""}},n.options={enableProvisioning:!0,galleryOptions:{uiDefinition:{markup:{reference:{partName:"SupportRequestPart",
partExtension:"Microsoft_Azure_Support",provisioningPartName:"SupportRequestProvisioingPart",provisioningPartExtension:
"Microsoft_Azure_Support"}}}},supportExtensionPropertyBag:{sessionId:t.environment.sessionId,portalVersion:
t.environment.shellVersion,portalServer:t.environment.serverId}},n},i}(MsPortalFx.ViewModels.ParameterCollection.
BaseCommandViewModel);n.NewSupportRequestCommandViewModel=f}(u||(u={})),u});define("HubsExtension/Help/ViewModels/HasSubscriptionViewModel",
["require","exports","../../Common/HubsObservables"],function(n,t,i){var r;return function(t){"use strict";
var r=["msdn_2014-09-01","msdndevtest_2014-09-01"],u=["dreamspark_2015-02-01"],f=function(){function t(
t){var o=this;this.hasMsdnOfferSubscription=ko.observable();this.zeroDollarSubscriptionIds=ko.observable(
);this.onlyHasZeroDollarSubscriptions=ko.observable();try{var h=MsPortalFx.Base.Diagnostics.createLog(
n),r=i.getSubscriptionsObservable(),u=Q.defer(),f=Q.defer(),e=Q.defer();i.getSubscriptionsPromise().
then(function(){var s=r().subscriptions,n=!1,t=[],i=!1;s.forEach(function(r){n=n||o._isMsdnSubscription(
r);o._isZeroDollarSubscription(r)?t.push(r.subscriptionID):i=!0});u.resolve(n);f.resolve(t);e.resolve(
t.length>0&&!i)},function(n){h.error("Failed to get subscriptions from the Billing extension. Error: {0}".
format(n));u.reject(n);f.reject(n);e.reject(n)});this.hasMsdnOfferSubscription(u.promise);this.zeroDollarSubscriptionIds(
f.promise);this.onlyHasZeroDollarSubscriptions(e.promise);this.hasSubscription=ko.pureComputed(function(
){var n=r();return!!n&&!!n.subscriptions&&n.subscriptions.length>0});this.subscriptionsLoaded=ko.pureComputed(
function(){var n=r();return!!n&&!!n.subscriptions});t.registerForDispose(this.hasSubscription);t.registerForDispose(
this.subscriptionsLoaded)}catch(s){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"Hubs","Error initializing HasSubscriptionViewModel. Error: {0}",
s);throw s;}}return t.prototype._isMsdnSubscription=function(n){return r.indexOf(this._getQuotaId(n))>
-1},t.prototype._isZeroDollarSubscription=function(n){return u.indexOf(this._getQuotaId(n))>-1},t.prototype.
_getQuotaId=function(n){return n.subscriptionPolicies&&!!n.subscriptionPolicies.quotaId&&n.subscriptionPolicies.
quotaId.toLowerCase()},t}();t.HasSubscriptionViewModel=f}(r||(r={})),r})