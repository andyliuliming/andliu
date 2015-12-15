var __extends;define("HubsExtension/ArmHelpers/Models/ArmEventData",["require","exports"],function()
{var n;return function(){"use strict"}(n||(n={})),n});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("HubsExtension/BrowseResource/ViewModels/Resource/BrowseResourceChooseColumnsCommandViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
t,i,r){n.call(this,t);this.actionBarInput=ko.observable();this._dataContext=r;this.resourceType=ko.observable(
);this.icon(MsPortalFx.Base.Images.Columns())}return __extends(t,n),t.prototype.onInputsSet=function(
n){return this.resourceType(n.resourceType),this.actionBarInput({status:1}),null},t}(MsPortalFx.ViewModels.
OpenBladeCommand);n.BrowseResourceChooseColumnsCommandViewModel=t}(n||(n={})),n});define("HubsExtension/Telemetry",
["require","exports"],function(){var n;return function(n){"use strict";var t,i,r;(function(n){n.BrowseBlade=
"BrowseBlade";n.CreateHub="CreateHub";n.Gallery="Gallery";n.ResourceMap="ResourceMap"})(t=n.Source||
(n.Source={})),function(n){n.BrowseItemActivated="BrowseItemActivated";n.BrowseItemDeactivated="BrowseItemDeactivated";
n.BrowseTypeActivated="BrowseTypeActivated";n.BrowseTypeDeactivated="BrowseTypeDeactivated";n.CheckPermissions=
"CheckPermissions";n.CreateDeploymentEnd="CreateDeploymentEnd";n.CreateFlowLaunched="CreateFlowLaunched";
n.GalleryItemActivated="GalleryItemActivated";n.GalleryMenuItemSelected="GalleryMenuItemSelected";n.
ResourceListItemActivated="ResourceListItemActivated";n.ResourceListItemDeactivated="ResourceListItemDeactivated";
n.ResourceMapItemActivated="ResourceMapItemActivated";n.ResourceMapItemDeactivated="ResourceMapItemDeactivated"}
(i=n.Action||(n.Action={})),function(n){n.Search="Search"}(r=n.ActionModifier||(n.ActionModifier={})
)}(n||(n={})),n});define("HubsExtension/Common/AssetTypeCache",["require","exports","../Telemetry","../Common/UserSettingsHelper"],
function(n,t,i,r){var u;return function(n){"use strict";function o(){var n=Q.defer();return Rpc.client.
acquireObject(RpcMethods.getRegisteredAssetTypesInformation,MsPortalFx.Base.Constants.Shell,undefined).
then(function(t){var i=ko.utils.unwrapObservable(t&&t.getValue());if(i)i.progress(function(t){n.notify(
t)}).then(function(t){n.resolve(t)},function(t){n.reject(t)}).finally(function(){t.dispose()});else throw new
Error("getRegisteredAssetTypesInformation did not return a valid response.");}),n.promise}function h(
n){var r=n.toLowerCase(),i;return t&&(i=t.assetTypesInformation.first(function(n){return n.resourceType.
toLowerCase()===r}),i)?Q.resolve(i):MsPortalFx.Assets.getResourceTypeAssetTypeInformation([n]).then(
function(n){return n&&n.length&&n[0].assetType?(t&&t.assetTypesInformation.push(n[0]),Q.resolve(n[0])):
Q.reject()})}function c(){return t&&!t.isPartialSet?Q.resolve(t):Q.when(t||e||l())}function f(i){var
f=!1,e;if(t&&t.assetTypesInformation&&(i.assetTypesInformation.every(function(i){var r=t.assetTypesInformation.
first(function(n){return MsPortalFx.Base.Utilities.deepEquals(n,i)});if(!r){f=!0;n.onlyPartialResultsAvailable(
!0);return!1}return!0}),!f))n.onlyPartialResultsAvailable(i.isPartialSet);t={assetTypesInformation:i.
assetTypesInformation,isPartialSet:i.isPartialSet};f&&(e={},e[u]=t,r.UserSettingsHelper.writeSettings(
e))}function l(){var i=Q.defer(),s=!1;return e=i.promise,r.UserSettingsHelper.readSettings([u]).then(
function(r){if(r[u]&&(s=!0,t=r[u],i.promise.isPending)){n.onlyPartialResultsAvailable(t.isPartialSet);
i.resolve(t)}}),o().progress(function(n){f(n);s||i.notify(t)}).then(function(n){f(n);s||i.resolve(t)}
,function(n){i.reject(n)}),i.promise}var s=MsPortalFx.Internal.Hubs.Settings.Schema.Keys,a=window.fx.
environment.isDevelopmentMode,v=MsPortalFx.Base.Diagnostics,y=MsPortalFx.Base.Diagnostics.Telemetry,
p=i.Action,u=s.registeredAssetTypesKey,e,t;n.onlyPartialResultsAvailable=ko.observable();n.getRegisteredAssetTypesInformation=
o;n.getResourceTypeAssetTypeInformation=h;n.getRegisteredAssetTypes=c;n.updateCacheAndUserSettings=f}
(u||(u={})),u});define("HubsExtension/Common/UserSettingsHelper",["require","exports"],function(n,t)
{var i=MsPortalFx.Internal.Hubs.Settings.Schema,r=MsPortalFx.Base.Rpc.Internal,u=function(){function n(
){}return n.initialize=function(t){if(n._rpcClient)throw new Error("rpcClient was already initialized.");
n._rpcClient=t||r.client},n.readSettings=function(t){return i.readHubsUserSettings.invoke(n._rpcClient,
MsPortalFx.Base.Constants.Shell,t)},n.writeSettings=function(t){return i.writeHubsUserSettings.invoke(
n._rpcClient,MsPortalFx.Base.Constants.Shell,t)},n}();t.UserSettingsHelper=u});define("HubsExtension/BrowseResource/BrowseResource.Diagnostics",
["require","exports"],function(){var n;return function(n){"use strict";var t="HubsExtension-BrowseResource",
r=MsPortalFx.Base.Diagnostics,f=r.LogEntryLevel,i=r.Log.writeEntry,u=function(){function n(){}return n.
verbose=function(n){for(var f,u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];f=[0,t,n].concat(u);
i.apply(null,f)},n.warning=function(n){for(var f,u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];
f=[1,t,n].concat(u);i.apply(null,f)},n.error=function(n){for(var f,u=[],r=1;r<arguments.length;r++)u[
r-1]=arguments[r];f=[2,t,n].concat(u);i.apply(null,f)},n}();n.Log=u}(n||(n={})),n});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("HubsExtension/BrowseResource/ViewModels/Resource/BrowseResourceSettingsActionBarViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
t,i,r){var u=this;n.call(this,t);this.valid=ko.observable(!1);this._dataContext=r;this._operation=ko.
observable();ko.reactor(t,function(){u._operation()?u.valid(u._operation().canApplySettings()):u.valid(
!1)})}return __extends(t,n),t.prototype.onInputsSet=function(t){var i=this;return n.prototype.onInputsSet.
call(this,t).then(function(){return i._operation(i._dataContext.getSettingsOperation(t.operation)),null}
)},t.prototype.updateButtonClick=function(){this._operation()&&this._operation().applySettings&&this.
_operation().applySettings()},t.prototype.resetButtonClick=function(){this._operation()&&this._operation(
).revertSettings&&this._operation().revertSettings()},t}(MsPortalFx.ViewModels.ActionBars.FilterActionBar.
ViewModel);n.BrowseResourceSettingsActionBarViewModel=t}(n||(n={})),n});__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("HubsExtension/Browse/ViewModels/BrowseDynamicAssetPartViewModel",["require",
"exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(t,i){n.call(
this);this._container=t;this._initialState=i;this._initialStateSelectable=this._initialState&&this._initialState.
container&&this._initialState.container.selectable;this._container.selectable=new MsPortalFx.ViewModels.
Internal.Selectable({selectedValue:this._initialStateSelectable&&this._initialStateSelectable.selectedValue,
isSelected:!!(this._initialStateSelectable&&this._initialStateSelectable.isSelected)})}return __extends(
t,n),t.prototype.onInputsSet=function(n){var i=this,t;return this._initialStateSelectable&&this._initialStateSelectable.
selectedValue?null:(t=MsPortalFx.Assets.mapAssetIdToDynamicSelection({assetId:n.assetId,extensionName:
n.extensionName,assetType:n.assetType}).then(function(n){return i._container.selectable.selectedValue(
n),n}),this._container.selectable.delayedBladeSelection({bladeWidth:1,selectedValuePromise:t}),t)},t}
(MsPortalFx.ViewModels.ButtonPart);n.BrowseDynamicAssetPartViewModel=t}(n||(n={})),n});__extends=this.
__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[
i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Browse/ViewModels/BrowseDynamicAssetBladeViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
){n.call(this)}return __extends(t,n),t}(MsPortalFx.ViewModels.Blade);n.BrowseDynamicAssetBladeViewModel=
t}(n||(n={})),n});define("HubsExtension/Common/HubsObservables",["require","exports","./AssetTypeCache",
"../HubsCommon","./UserSettingsHelper","../ArmHelpers/ArmApis","../_generated/ExtensionDefinition"],
function(n,t,i,r,u,f,e){var o;return function(t){"use strict";function vt(){hi().then(function(n){y.
updateTenantInfoEndPoint.invoke(v.client,"fx",{tenantList:n})},function(){s.error("Failed to get tenant information.",
0)});o.Subscriptions.loadingDataPromise=ai();r.isSubscriptionFilteringEnabled()?o.SelectedSubscriptions.
loadingDataPromise=it():(o.SelectedSubscriptions.loadingDataPromise=o.Subscriptions.loadingDataPromise,
o.Subscriptions.data.subscribe(function(n){o.SelectedSubscriptions.data((n.subscriptions||[]).map(function(
n){return{subscriptionId:n.subscriptionID,displayName:n.subscriptionName,state:n.status,tenantId:n.tenantID,
subscriptionPolicies:n.subscriptionPolicies}}))}));ko.computed(function(){var n=o.Subscriptions.data(
);n&&w()});fi(a);a.subscribe(function(n){y.getRegisteredResourceProviderInfoEndPoint.invoke(v.client,
"fx",n)});tt("Microsoft.VisualStudio")}function yt(n){for(var r,t,u=[],i=1;i<arguments.length;i++)u[
i-1]=arguments[i];if(r=o,t=r[n],t)return t.loader&&t.loader(),t.data;throw new Error("Unknown observable '{0}'.".
format(n));}function pt(){return o.SelectedSubscriptions.data}function wt(n){if(!r.isSubscriptionFilteringEnabled(
))return Q.reject();var i=n||[],t={};return t[p.subscriptionsSelectedKey]=i.join(";"),o.SelectedSubscriptions.
data(rt(n)),u.UserSettingsHelper.writeSettings(t)}function bt(){return o.SelectedSubscriptions.loadingDataPromise}
function kt(){return o.Subscriptions.data}function nt(){return o.Subscriptions.loadingDataPromise}function dt(
n){return n?(n=n.toUpperCase(),o.Subscriptions.loadingDataPromise.then(function(){var t;return o.Subscriptions.
data&&o.Subscriptions.data()&&o.Subscriptions.data().subscriptions.length>0&&(t=o.Subscriptions.data(
).subscriptions.first(function(t){return t.subscriptionID.toUpperCase()===n})),t?Q.resolve({subscriptionId:
t.subscriptionID,displayName:t.subscriptionName,tenantId:t.tenantID,state:t.status,subscriptionPolicies:
t.subscriptionPolicies}):Q.reject()})):Q.reject()}function gt(){return g}function ni(){return o.ResourceGroups.
loader(),o.ResourceGroups.data}function ti(){return l?l:nt().then(function(){return l=ui()})}function ii(
){return o.ResourceGroups.loader()}function w(){o.ResourceGroups.loadData=!0;o.ResourceGroups.loader(
)}function tt(n){a.indexOf(n)<0&&a.push(n)}function ri(){i.getRegisteredAssetTypesInformation().progress(
function(n){i.updateCacheAndUserSettings(n)}).then(function(n){i.updateCacheAndUserSettings(n)})}function ui(
){if(o.Subscriptions.data&&o.Subscriptions.data()&&o.Subscriptions.data().subscriptions.length>0){var
n=new MsPortalFx.Base.UriBuilder(ct);return n.query.setParameter("subscriptionId",o.Subscriptions.data(
).subscriptions[0].subscriptionID),MsPortalFx.Base.Net.ajax({uri:n.toString(),type:"GET",dataType:"json",
contentType:"application/json"})}return Q.resolve({})}function fi(n){var t=[],i=[];o.Subscriptions.loadingDataPromise.
then(function(){o.Subscriptions.data&&o.Subscriptions.data()&&o.Subscriptions.data().subscriptions.length>
0&&o.Subscriptions.data().subscriptions.forEach(function(n){i.push(MsPortalFx.Base.Net.ajax({uri:f.ResourceProviders.
listResourceProvidersApi(n.subscriptionID),type:"GET",cache:!1,setAuthorizationHeader:!0}).then(function(
n){if(n&&n.value&&$.isArray(n.value)&&n.value.length>0){var i=n.value;i.forEach(function(n){if(n&&n.
registrationState&&(n.registrationState.toLowerCase()==="registered"||n.registrationState.toLowerCase(
)==="registering")){var i=n.namespace&&n.namespace.toLowerCase();t.indexOf(i)<0&&t.push(i)}})}},function(
){s.warning("Failed to get resource providers for subscription '{0}'".format(n.subscriptionID),3);t.
push("*")}))});Q.allSettled(i).then(function(){ko.utils.arrayPushAll(n,t)})})}function ei(){if(t.loadDataFromServer)
{if(o.ResourceGroups.loadingDataPromise)return o.ResourceGroups.loadingDataPromise;if(o.ResourceGroups.
loadData){var n=o.Subscriptions.loadingDataPromise.then(function(){return li()}).then(function(n){n.
modified&&o.ResourceGroups.data({resourceGroups:n.data.value});o.ResourceGroups.loadData=!1}).then(function(
){oi()}).finally(function(){o.ResourceGroups.loadingDataPromise=null});return o.ResourceGroups.loadingDataPromise=
n,n}}return Q.resolve(null)}function oi(){si();c=setTimeout(function(){w()},at)}function si(){c&&(clearTimeout(
c),c=null)}function hi(){var n=function(){return MsPortalFx.Base.Net.ajax({uri:ot,type:"POST",dataType:
"json",contentType:"application/json"})};return b("Getting tenants",n)}function ci(){var n=function(
){return MsPortalFx.Base.Net.ajax({uri:st,type:"GET",dataType:"json",contentType:"application/json"})}
;return b("Getting subscriptions",n)}function li(){var n=function(){return MsPortalFx.Base.Net.cachedAjax(
{uri:ht,type:"POST",data:o.Subscriptions.data().subscriptions.map(function(n){return n.subscriptionID}
).join(";"),contentType:"application/json"})};return b("Getting resource groups",n)}function it(){return o.
Subscriptions.loadingDataPromise.then(function(){return u.UserSettingsHelper.readSettings([p.subscriptionsSelectedKey]).
then(function(n){var t=(n[p.subscriptionsSelectedKey]||"").match(/[^;]+/g);o.SelectedSubscriptions.data(
rt(t))})})}function rt(n){var i=o.Subscriptions.data(),r=(i&&i.subscriptions||[]).sort(function(n,t)
{var i=n.subscriptionName.localeCompareIgnoreCase(t.subscriptionName);return i===0?n.subscriptionID.
localeCompareIgnoreCase(t.subscriptionID):i}).map(function(n){return{subscriptionId:n.subscriptionID,
displayName:n.subscriptionName,state:n.status,tenantId:n.tenantID,subscriptionPolicies:n.subscriptionPolicies}}
),t;return n&&n.length>0&&(t=r.filter(function(t){return n.indexOf(t.subscriptionId)!==-1}),t.length>
0)?t:r}function ai(){var n,t=function(){return n&&(k.clearTimeout(n),n=null),ci().then(function(n){var
t={},i=!1,r,u,f;n.subscriptions.forEach(function(n){if(n.subscriptionPolicies){if(n.subscriptionPolicies.
quotaId||(t[n.subscriptionID]=["subscriptionPolicies.quotaId"],i=!0),!n.subscriptionPolicies.locationPlacementId)
{var r=t[n.subscriptionID]||[];r.push("subscriptionPolicies.locationPlacementId");t[n.subscriptionID]=
r;i=!0}}else t[n.subscriptionID]=["subscriptionPolicies"],i=!0});i&&s.warning("Expected properties not found on the following subscriptions, you may experience issues in the portal. '{0}' ".
format(JSON.stringify(t)),5);r=o.Subscriptions.data&&o.Subscriptions.data();u=r&&ft(o.Subscriptions.
data())!==ft(n);(!r||u)&&(y.updateSubscriptionInfoEndPoint.invoke(v.client,"fx",n),g(n),o.Subscriptions.
data(n));u&&(f=MsPortalFx.UI.NotificationManager.create(e.NotificationDefinitions.SubscriptionsUpdatedNotification.
name),f.raise(e.NotificationDefinitions.SubscriptionsUpdatedNotification.updated))}).finally(function(
){n=setTimeout(t,lt)})};return t()}function b(n,t,i,r,u){i===void 0&&(i=3);r===void 0&&(r=150);u===void
0&&(u=1);var f;if(u<0)throw new Error("Argument backoffFactor must not be negative.");return f=et.Deferred(
),ut(n,t,f,i,1,u,r),Q(f.promise())}function ut(n,t,i,r,u,f,e){u>r?i.reject("{0} failed. No more retry attempts.".
format(n)):Q(t()).then(i.resolve,function(o){return s.warning(o,4),i.progress(),setTimeout(function(
){ut(n,t,i,r,u+1,f,e*(1+f))},e),Q.resolve(null)})}function ft(n){return n?(n.subscriptions||[]).map(
function(n){return n.subscriptionID.toLowerCase()}).sort().join(","):null}var v=MsPortalFx.Base.Rpc.
Internal,y=HubsExtension.Internal.Azure,et=MsPortalFx.Helpers,p=MsPortalFx.Internal.Hubs.Settings.Schema.
Keys,h=MsPortalFx.Base.Resources,k,s,d,vi;t.loadDataFromServer=!0;k=window;s=MsPortalFx.Base.Diagnostics.
createLog(n),function(n){n[n.GetTenantFailed=0]="GetTenantFailed";n[n.GetSubscriptionsFailed=1]="GetSubscriptionsFailed";
n[n.GetResourceGroupsFailed=2]="GetResourceGroupsFailed";n[n.GetResourceProvidersFailed=3]="GetResourceProvidersFailed";
n[n.RetryingFailedPromise=4]="RetryingFailedPromise";n[n.BadSubscription=5]="BadSubscription"}(d||(d=
{}));var ot=h.getAppRelativeUri("/api/tenants"),st=h.getAppRelativeUri("/api/subscriptions"),ht=h.getAppRelativeUri(
"/api/resourceGroups"),ct=h.getAppRelativeUri("/api/locations"),g=ko.observable(),o={Subscriptions:{
loadingDataPromise:null,data:ko.observable()},SelectedSubscriptions:{loadingDataPromise:null,data:ko.
observable()},ResourceGroups:{loader:ei,loadData:!0,loadingDataPromise:null,data:ko.observable()},SpecDataSet:
{data:ko.observable({})}},c=0,l,a=ko.observableArray([]),lt=3e5,at=6e4;t.initializeObservables=vt;t.
getObservable=yt;t.getSelectedSubscriptionsObservable=pt;t.setSelectedSubscriptions=wt;t.getSelectedSubscriptionsPromise=
bt;t.getSubscriptionsObservable=kt;t.getSubscriptionsPromise=nt;t.getSubscriptionInfo=dt;t.getBillingSubscriptionsObservable=
gt;t.getResourceGroupsObservable=ni;t.getLocations=ti;t.getResourceGroupsPromise=ii;t.invalidateResourceGroups=
w;t.addRegisteredResourceProvider=tt;t.createRegisteredAssetTypeCache=ri,function(n){function t(n){o.
Subscriptions.data=ko.observable(n);o.Subscriptions.loadingDataPromise=Q.resolve(null);o.SelectedSubscriptions.
data=ko.observable();o.SelectedSubscriptions.loadingDataPromise=it()}n.initializeSubscriptions=t}(vi=
t.Internal||(t.Internal={}))}(o||(o={})),o});define("HubsExtension/HubsCommon",["require","exports"],
function(){var n;return function(n){"use strict";function r(t){var i=t&&t.status&&t.status.toLowerCase(
);return i===n.subscriptionEnabledStatus||i===n.subscriptionActiveStatus||i===n.subscriptionWarnedStatus}
function u(n,t){var i="";return i=MsPortalFx.ViewModels.Services.ResourceTypes.isResourceGroupId(n)?
MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceGroupDescriptor(n).subscription:MsPortalFx.
ViewModels.Services.ResourceTypes.parseResourceDescriptor(n).subscription,t().subscriptions.first(function(
n){return n.subscriptionID.toLowerCase()===i.toLowerCase()})}function f(t,i,r){if(!$.isNumeric(t))throw new
Error("A numeric price wasn't supplied.");if(t<0)throw new Error("Price cannot be negative.");if(i!==
0)if(i){if(!$.isNumeric(i))throw new Error("A numeric number of decimal places wasn't supplied.");if(
i<0||i>20)throw new Error("Number of decimal places must be between 0 and 20.");}else i=2;return n.toLocaleStringSupported?
(r||(r=window&&window.navigator?window.navigator.userLanguage||window.navigator.language:"en-us"),t.
toLocaleString(r,{minimumFractionDigits:i,maximumFractionDigits:i})):t.toFixed(i)}function i(){return 1234.5678.
toLocaleString("en-us",{minimumFractionDigits:2,maximumFractionDigits:2})==="1,234.57"}function e(){
return window&&window.fx&&window.fx.environment&&(window.fx.environment.extensionFlags["hubsextension_subfilter"]?
!0:!1)}function o(n,t,i,r,u){var f=[];t.subscribe(n,function(n){var t=n.filter(i);ko.utils.fixupArrayEdits(
ko.utils.compareArrays(f,t)).forEach(function(n){switch(n.status){case"added":r(n.value,n.index);break
case"deleted":u(n.value,n.index)}});f=t.slice(0)})}var t=MsPortalFx.Base.Constants.ExtensionNames;n.
toLocaleStringSupported=i();n.extensionName=t.Hubs;n.billingExtensionName=t.Billing;n.resourceGroupPartName=
"ResourceGroupMapPinnedPart";n.resourceGroupEventsBlade="ResourceGroupEventsBlade";n.deploymentDetailsBlade=
"DeploymentDetailsBlade";n.subscriptionEnabledStatus="enabled";n.subscriptionActiveStatus="active";n.
subscriptionWarnedStatus="warned";n.hasValidStatus=r;n.getSubscriptionFromResourceId=u;n.formatPrice=
f;n.isToLocaleStringSupported=i;n.isSubscriptionFilteringEnabled=e;n.subscribeToArrayEdits=o}(n||(n=
{})),n});define("HubsExtension/ArmHelpers/ArmApis",["require","exports"],function(){var n;return function(
n){"use strict";function p(n){return a(n,[])}function a(n,t){return Q(MsPortalFx.Base.Net.ajax({uri:
n,type:"GET",contentType:"application/json",headers:{accept:"application/json"},setAuthorizationHeader:
!0})).then(function(n){if(!n)return Q.reject("Expected response not found.");if(n.value)t=(t||[]).concat(
n.value);else return Q.reject({message:"Expected response.value not found",response:n});return n.nextLink?
a(n.nextLink,t):Q.resolve(t)})}var f=window,e=f&&f.fx&&f.fx.environment,v=MsPortalFx.Base.Diagnostics,
o=MsPortalFx.ViewModels.Services.ResourceTypes,t=e&&e.armEndpoint&&e.armEndpoint.replace(/\/$/,""),s=
"$filter",u="api-version",h="2014-04-01-preview",c="2014-04-01",y=h,r=c,l=c,i="?"+u+"="+y,w,b,k,d,g;
n.callWithContinuation=p,function(n){function r(n){return t+"/subscriptions/{0}/locations".format(n)+
i}n.listLocationsApi=r}(w=n.Subscriptions||(n.Subscriptions={})),function(n){function r(n){return n?
t+"/subscriptions/{0}/providers".format(n)+i:t+"/providers"+i}function u(n,r){return t+"/subscriptions/{0}/providers/{1}/register".
format(n,r)+i}n.listResourceProvidersApi=r;n.registerResourceProvidersApi=u}(b=n.ResourceProviders||
(n.ResourceProviders={})),function(n){function r(n){return t+"/"+n.replace(/^\/|\/$/,"")+"/deployments"+
i}function u(n){return t+"/"+n.replace(/^\/|\/$/,"")+i}function f(n){return t+"/"+n.replace(/^\/|\/$/,
"")+"/operations"+i}function e(n){return t+"/"+n.replace(/^\/|\/$/,"")+i}n.listDeploymentsApi=r;n.singleDeploymentApi=
u;n.deploymentOperationsApi=f;n.singleDeploymentOperationApi=e}(k=n.Deployments||(n.Deployments={})),
function(n){function e(n){return t+"/"+n.replace(/^\/|\/$/,"")+i}function s(n){var i=new MsPortalFx.
Base.UriBuilder(t+"/"+n.replace(/^\/|\/$/,"")),r=Q.defer();return i.query.getParameter(u)?r.resolve(
i.toString()):f(n).then(function(n){i.query.setParameter(u,n);r.resolve(i.toString())}),r.promise}function f(
u){var f=Q.defer();if(o.isResourceGroupId(u))f.resolve(h);else if(o.isResourceId(u)){var s=o.parseResourceDescriptor(
u),e=s.types.join("/"),c=t+"/subscriptions/{0}/providers/{1}".format(s.subscription,s.provider)+i;n.
resourceTypeApiVersionDictionary[e]?f.resolve(n.resourceTypeApiVersionDictionary[e]):MsPortalFx.Base.
Net.ajax({uri:c,type:"GET",headers:{accept:"application/json"},setAuthorizationHeader:!0}).then(function(
t){if(t&&t.resourceTypes&&$.isArray(t.resourceTypes)&&t.resourceTypes.length>0){var u=t.resourceTypes,
i=u.first(function(n){return n.resourceType.toLowerCase()===e.toLowerCase()});i&&i.apiVersions&&$.isArray(
i.apiVersions)&&i.apiVersions.length>0&&(r=i.apiVersions[0])}n.resourceTypeApiVersionDictionary[e]=r;
f.resolve(r)},function(n){v.Log.writeEntry(1,"TagsArea","Error getting api version for resource id {0}. Defaulting to version: {1}. Error: {2}".
format(u,r,n.responseText));f.resolve(r)})}else f.resolve(r);return f.promise}n.resourceTypeApiVersionDictionary=
{};n.resourceGroupApi=e;n.resourceApi=s;n.getLatestApiVersion=f}(d=n.Resources||(n.Resources={})),function(
n){function i(n,i,r,f){if(f===void 0&&(f=null),i>=r)throw new Error("start must be less than end");var
e=new MsPortalFx.Base.UriBuilder(t+"/subscriptions/{0}/providers/microsoft.insights/eventtypes/management/values".
format(n)),o="eventTimestamp ge '{0}' and eventTimestamp le '{1}'".format(i.toISOString(),r.toISOString(
));return f&&f.length>0&&(o=f+" and "+o),e.query.setParameter(u,l),e.query.setParameter(s,o),e.toString(
)}function r(n,i,r,f){if(f===void 0&&(f=null),i>=r)throw new Error("start must be less than end");var
e=new MsPortalFx.Base.UriBuilder(t+"/subscriptions/{0}/providers/microsoft.insights/eventtypes/management/digestEvents".
format(n)),o="eventTimestamp ge '{0}' and eventTimestamp le '{1}'".format(i.toISOString(),r.toISOString(
));return f&&f.length>0&&(o=f+" and "+o),e.query.setParameter(u,l),e.query.setParameter(s,o),e.toString(
)}n.getEventValuesApi=i;n.getEventDigestsApi=r}(g=n.Events||(n.Events={}))}(n||(n={})),n});define("HubsExtension/_generated/ExtensionDefinition",
["require","exports","HubsExtension/ClassicAdmins/ManagementTeamClientStrings","HubsExtension/Browse/BrowseClientStrings",
"HubsExtension/Help/HelpClientStrings","HubsExtension/ServicesHealth/ServicesHealthClientStrings","HubsExtension/ResourceMap/ResourceMapClientStrings",
"HubsExtension/Tags/TagsClientStrings"],function(n,t,i,r,u,f,e,o){var s;return function(n){function h(
){if(s.definition){var n=s.definition;return s.definition=null,n}throw new Error("Extension definition is no longer available.");
}var s,c,t,l,a,v,y,p;(function(n){var t={commandsCatalog:[],name:"HubsExtension",version:"1.0",hash:
"2fdT3fuwBE0UHlyVOZxHXDJDHWFfTSFdhzMXCgllJHI=",schemaVersion:"1.0.0.1",sdkVersion:"5.0.1.1547 (release#00de3c8.150414-1000)",
partsCatalog:[{name:"AzureResourceManagerProvisioningPart",viewModel:"Store$ProvisioningPart",partKind:
17,inputs:["initialData"],bindings:[{property:"initialData",valuesFrom:[{referenceType:1,property:"initialData"}]}],
details:[],initialSize:2,viewStateProperties:["content.initialData","content.pollingOptions"]},{name:
"SubscriptionTagsPart",viewModel:"Tags$ResourceTagsCollectionPartViewModel",partKind:25,inputs:[],bindings:
[],details:[{selectablePath:"container.selectable",blade:"SubscriptionTagsListBlade"},{selectablePath:
"content.selectableData",blade:"ResourcesWithTagBlade",selectableBindings:[{property:"tagKey",valuesFrom:
[{referenceType:6,property:"key"}]},{property:"tagValue",valuesFrom:[{referenceType:6,property:"value"}]}]}],
initialSize:1,viewStateProperties:null},{name:"ResourceTagsPart",viewModel:"Tags$ResourceTagsCollectionPartViewModel",
partKind:25,inputs:["resourceId"],bindings:[{property:"resourceId",valuesFrom:[{referenceType:1,property:
"resourceId"}]}],details:[{selectablePath:"container.selectable",blade:"ResourceTagsListBlade",selectableBindings:
[{property:"resourceId",valuesFrom:[{referenceType:0,property:"content.resourceId"}]}]},{selectablePath:
"content.selectableData",blade:"ResourcesWithTagBlade",selectableBindings:[{property:"tagKey",valuesFrom:
[{referenceType:6,property:"key"}]},{property:"tagValue",valuesFrom:[{referenceType:6,property:"value"}]}]}],
initialSize:1,viewStateProperties:null},{name:"ResourceFilterPart",viewModel:"SubscriptionsFilter$ResourceFilterPartViewModel",
partKind:0,inputs:["textFilterPlaceholder","textFilterEnabled","selectedSubscriptionId"],bindings:[{
property:"textFilterPlaceholder",valuesFrom:[{referenceType:1,property:"textFilterPlaceholder"}],optional:
!0},{property:"textFilterEnabled",valuesFrom:[{referenceType:1,property:"textFilterEnabled"}],optional:
!0},{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"selectedSubscriptionId"}],
optional:!0}],htmlTemplate:"pdc5b9b0414678845e1923bffe2b35f5a16",details:[],initialSize:8,supportedSizes:
[8],viewStateProperties:["content.filter"]},{name:"PricingTierLauncherV3",viewModel:"SpecPickerV3$PricingTierLauncherPartViewModel",
partKind:0,inputs:["entityId"],bindings:[{property:"entityId",valuesFrom:[{referenceType:1,property:
"entityId"}]}],htmlTemplate:"pdc9ca85a0d0b23424ea49738bc313a1f55",details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"container.selectable"}]}],parameterCollector:"content.parameterCollector"}],
initialSize:3,supportedSizes:[0,1,2,3],viewStateProperties:null},{parameterProvider:!0,name:"SpecPickerListViewPartV3",
viewModel:"SpecPickerV3$SpecPickerBrowseAllPart",partKind:0,inputs:[],bindings:[],htmlTemplate:"pdca14d293483dd450ba9a8ac4656f05352",
details:[],initialSize:9,supportedSizes:[9],viewStateProperties:["content.recommendedPlansHotSpot.isSelected",
"content.allPlansHotSpot.isSelected","content.selectedSpecId"]},{name:"SettingsBladePart",viewModel:
"Settings$SettingsBladePartViewModel",partKind:20,inputs:[],bindings:[],details:[{blade:"SettingsBlade"}],
initialSize:2,viewStateProperties:null},{permissions:[{permissionType:0,assetType:"ResourceGroups",assetId:
{sourceType:2,property:"resourceGroup",providerKey:"resourceMapPart"},action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],
name:"ResourceMapPart",viewModel:"ResourceMap$ResourceMapPartViewModel",partKind:0,inputs:["assetOwner",
"assetType","assetId"],bindings:[{property:"assetOwner",valuesFrom:[{referenceType:1,property:"assetOwner"}]},
{property:"assetType",valuesFrom:[{referenceType:1,property:"assetType"}]},{property:"assetId",valuesFrom:
[{referenceType:1,property:"assetId"}]}],htmlTemplate:"pdc4d402ee8e3aa4fa4bf9db0c065ffea7e",details:
[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.topologyViewModel.selection"}]}]}],
initialSize:3,supportedSizes:[3,5],commandGroup:"ResourceMapPartCommands",viewStateProperties:null},
{permissions:[{permissionType:0,assetType:"ResourceGroups",assetId:{sourceType:2,property:"resourceGroup",
providerKey:"resourceMapPinnedPart"},action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],
name:"ResourceMapPinnedPart",viewModel:"ResourceMap$ResourceMapPinnedPartViewModel",partKind:20,inputs:
["assetOwner","assetType","assetId"],bindings:[{property:"assetOwner",valuesFrom:[{referenceType:1,property:
"assetOwner"}]},{property:"assetType",valuesFrom:[{referenceType:1,property:"assetType"}]},{property:
"assetId",valuesFrom:[{referenceType:1,property:"assetId"}]}],details:[{blade:"ResourceMapBlade",additionalInputArguments:
[{property:"assetOwner",valuesFrom:[{referenceType:0,property:"content.assetOwner"}]},{property:"assetType",
valuesFrom:[{referenceType:0,property:"content.assetType"}]},{property:"assetId",valuesFrom:[{referenceType:
0,property:"content.assetId"}]}]}],initialSize:2,commandGroup:"ResourceMapPinnedPartCommands",viewStateProperties:
null},{assetType:"ResourceGroups",assetIdInputProperty:"resourceGroup",permissions:[{permissionType:
0,assetType:"ResourceGroups",assetId:{sourceType:2,property:"resourceGroup",providerKey:"resourceListPinnedPart"},
action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],name:"ResourceListPinnedPart",viewModel:
"ResourceMap$ResourceListPinnedPartViewModel",partKind:20,inputs:["resource","filter","band","resourceGroup"],
bindings:[{property:"resource",valuesFrom:[{referenceType:1,property:"resource"}]},{property:"filter",
valuesFrom:[{referenceType:1,property:"filter"}]},{property:"band",valuesFrom:[{referenceType:1,property:
"band"}]}],details:[{blade:"ResourceListBlade",additionalInputArguments:[{property:"resource",valuesFrom:
[{referenceType:0,property:"content.resource"}]},{property:"filter",valuesFrom:[{referenceType:0,property:
"content.filter"}]},{property:"band",valuesFrom:[{referenceType:0,property:"content.band"}]}]}],initialSize:
2,commandGroup:"ResourceListPinnedPartCommands",viewStateProperties:null},{name:"DeploymentsPart",viewModel:
"ResourceMap$DeploymentsPartViewModel",partKind:20,inputs:["id"],bindings:[{property:"id",valuesFrom:
[{referenceType:1,property:"id"}]}],details:[{blade:"DeploymentDetailsBlade",selectableBindings:[{property:
"deploymentId",valuesFrom:[{referenceType:0,property:"content.id"}]}]}],initialSize:1,viewStateProperties:
null},{assetType:"ResourceGroups",assetIdInputProperty:"resourceGroup",permissions:[{permissionType:
0,assetType:"ResourceGroups",assetId:{sourceType:0,property:"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],
name:"ResourceGroupMapPart",viewModel:"ResourceMap$ResourceGroupMapPartViewModel",partKind:0,inputs:
["resourceGroup"],bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}],
htmlTemplate:"pdc4d402ee8e3aa4fa4bf9db0c065ffea7e",details:[{invocationInputArguments:[{valuesFrom:[
{referenceType:0,property:"content.topologyViewModel.selection"}]}]}],initialSize:3,supportedSizes:[
3,5],commandGroup:"ResourceGroupMapPartCommands",viewStateProperties:null},{assetType:"ResourceGroups",
assetIdInputProperty:"resourceGroup",permissions:[{permissionType:0,assetType:"ResourceGroups",assetId:
{sourceType:0,property:"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],
name:"ResourceGroupMapPinnedPart",viewModel:"ResourceMap$ResourceGroupMapPinnedPartViewModel",partKind:
20,inputs:["id"],bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"id"}]}],
details:[{blade:"ResourceGroupMapBlade",selectableBindings:[{property:"id",valuesFrom:[{referenceType:
0,property:"content.resourceGroup"}]}]}],initialSize:2,commandGroup:"ResourceGroupMapPinnedPartCommands",
viewStateProperties:null},{assetType:"ResourceGroups",assetIdInputProperty:"resourceGroup",permissions:
[{permissionType:0,assetType:"ResourceGroups",assetId:{sourceType:0,property:"resourceGroup"},action:
"Microsoft.Resources/subscriptions/resourceGroups/read"}],name:"ResourceGroupListPinnedPart",viewModel:
"ResourceMap$ResourceGroupListPinnedPartViewModel",partKind:20,inputs:["resourceGroup","filter","band"],
bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]},{property:
"filter",valuesFrom:[{referenceType:1,property:"filter"}]},{property:"band",valuesFrom:[{referenceType:
1,property:"band"}]}],details:[{blade:"ResourceGroupListBlade",additionalInputArguments:[{property:"resourceGroup",
valuesFrom:[{referenceType:0,property:"content.resourceGroup"}]},{property:"filter",valuesFrom:[{referenceType:
0,property:"content.filter"}]},{property:"band",valuesFrom:[{referenceType:0,property:"content.band"}]}]}],
initialSize:2,commandGroup:"ResourceGroupListPinnedPartCommands",viewStateProperties:null},{assetType:
"ResourceGroups",assetIdInputProperty:"resourceGroup",permissions:[{permissionType:0,assetType:"ResourceGroups",
assetId:{sourceType:0,property:"resourceGroup"},action:"Microsoft.Insights/events/read"}],name:"ResourceGroupEventsPinnedPart",
viewModel:"ResourceMap$ResourceGroupEventsPinnedPartViewModel",partKind:20,inputs:["id"],bindings:[{
property:"resourceGroup",valuesFrom:[{referenceType:1,property:"id"}]}],details:[{blade:"ResourceGroupEventsBlade",
selectableBindings:[{property:"id",valuesFrom:[{referenceType:0,property:"content.resourceGroup"}]}]}],
initialSize:2,viewStateProperties:null},{name:"ManagementTeamSummary",viewModel:"ClassicAdmins$ManagementTeamSummaryViewModel",
partKind:1,inputs:[],bindings:[],details:[{blade:"ManagementTeamBlade",selectableBindings:[{property:
"subscriptionId",valuesFrom:[{referenceType:0,property:"content.subscriptionId"}]}]}],viewStateProperties:
null},{name:"PricingTierLauncher",viewModel:"SpecPicker$PricingTierLauncherPartViewModel",partKind:0,
inputs:["entityId"],bindings:[{property:"entityId",valuesFrom:[{referenceType:1,property:"entityId"}]}],
htmlTemplate:"pdc9ca85a0d0b23424ea49738bc313a1f55",details:[{invocationInputArguments:[{valuesFrom:[
{referenceType:0,property:"container.selectable"}]}],outputArguments:[{property:"fromProviderBindingInternals.outputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},{property:"fromProviderBindingInternals.commit",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:
[{referenceType:1,property:"stepOutput"}]}]}],initialSize:3,supportedSizes:[0,1,2,3],viewStateProperties:
null},{commandGroupReference:{name:"ServiceHealthPartCommands",commands:[]},name:"PersonalizedServicesHealthPart",
viewModel:"ServicesHealth$ServicesHealthPartViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:
"pdc9880768eddbd4d9fb62cba5a80bbf162",details:[{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"content.dynamicBladeSelection"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"container.selectable"}]}]}],initialSize:5,supportedSizes:[0,1,2,3,4,10,5],viewStateProperties:
null},{name:"ServicesHealthPart",viewModel:"ServicesHealth$ServicesPartViewModel",partKind:0,inputs:
[],bindings:[],htmlTemplate:"pdc822b46adae5f4901a680856b55dfac1f",details:[{blade:"ServicesHealthBlade"}],
initialSize:5,supportedSizes:[0,1,2,3,10,5],viewStateProperties:null},{name:"ServicePart",viewModel:
"ServicesHealth$ServicePartViewModel",partKind:0,inputs:["serviceId"],bindings:[{property:"serviceId",
valuesFrom:[{referenceType:1,property:"serviceId"}]}],htmlTemplate:"pdc822b46adae5f4901a680856b55dfac1f",
details:[{blade:"ServiceBlade",selectableBindings:[{property:"serviceId",valuesFrom:[{referenceType:
0,property:"content.serviceId"}]}]}],supportedSizes:[0,1,2,3,10,5],viewStateProperties:null},{name:"ServiceRegionPart",
viewModel:"ServicesHealth$ServiceRegionPartViewModel",partKind:0,inputs:["serviceRegionId"],bindings:
[{property:"serviceRegionId",valuesFrom:[{referenceType:1,property:"serviceRegionId"}]}],htmlTemplate:
"pdc822b46adae5f4901a680856b55dfac1f",details:[{blade:"ServiceRegionBlade",selectableBindings:[{property:
"serviceRegionId",valuesFrom:[{referenceType:0,property:"content.serviceRegionId"}]}]}],supportedSizes:
[0,1,2],viewStateProperties:null},{name:"SpecPickerListViewPart",viewModel:"SpecPicker$SpecPickerBrowseAllPart",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc0fd02d9e865d45b18c5d8ef4af6c6727",details:[],initialSize:
9,supportedSizes:[9],viewStateProperties:["content.recommendedPlansHotSpot.isSelected","content.allPlansHotSpot.isSelected"]},
{name:"FeedbackTile",viewModel:"Help$FeedbackTileViewModel",partKind:20,inputs:[],bindings:[],details:
[],initialSize:0,viewStateProperties:null},{name:"AzurePortalTile",viewModel:"Help$AzurePortalTileViewModel",
partKind:20,inputs:[],bindings:[],details:[],initialSize:0,viewStateProperties:null},{name:"WhatsNewTile",
viewModel:"Help$WhatsNewTileViewModel",partKind:20,inputs:[],bindings:[],details:[{blade:"WhatsNewBlade"}],
initialSize:2,viewStateProperties:null},{name:"HelpAndSupportPart",viewModel:"Help$HelpAndSupportPartViewModel",
partKind:20,inputs:[],bindings:[],details:[{blade:"HelpAndSupportBlade"}],initialSize:2,viewStateProperties:
null},{name:"NoSubscriptionsStartPart",viewModel:"Help$NoSubscriptionsStartPartViewModel",partKind:20,
inputs:[],bindings:[],details:[{blade:"NoSubscriptionsBlade"}],initialSize:0,viewStateProperties:null},
{name:"NoSubscriptionsStartPartForCreate",viewModel:"Help$NoSubscriptionsStartPartViewModel",partKind:
20,inputs:["provisioningOptions"],bindings:[{property:"provisioningOptions",valuesFrom:[{referenceType:
1,property:"provisioningOptions"}]}],details:[{blade:"NoSubscriptionsBlade"}],initialSize:0,viewStateProperties:
null},{name:"NoMsdnOfferOnSubscriptionsStartPartForCreate",viewModel:"Help$NoMsdnOfferOnSubscriptionsStartPartViewModel",
partKind:20,inputs:["provisioningOptions"],bindings:[{property:"provisioningOptions",valuesFrom:[{referenceType:
1,property:"provisioningOptions"}]}],details:[{blade:"NoMsdnOfferOnSubscriptionsBlade"}],initialSize:
0,viewStateProperties:null},{name:"TourTile",viewModel:"Help$TourTileViewModel",partKind:0,inputs:[],
bindings:[],htmlTemplate:"pdc5fb566e44ba04eb9902a4d5dacc2ab78",details:[{blade:"TourBlade"}],initialSize:
2,supportedSizes:[0,1,2,3],viewStateProperties:null},{name:"HelpTile",viewModel:"Help$HelpTileViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdcb86961ec563d43239a057b6a0e1510a2",details:[{blade:
"HelpBlade"}],initialSize:1,supportedSizes:[0,1,2],viewStateProperties:null},{name:"GalleryTile",viewModel:
"Gallery$GalleryTileViewModel",partKind:0,inputs:["selectedMenuItemId"],bindings:[{property:"selectedMenuItemId",
valuesFrom:[{referenceType:1,property:"selectedMenuItemId"}],optional:!0}],htmlTemplate:"pdc1355afdc3ae84bcd813d63ab668d10e1",
details:[{blade:"GalleryMenuBlade",selectableBindings:[{property:"selectedMenuItemId",valuesFrom:[{referenceType:
0,property:"content.selectedMenuItemId"}]}]}],initialSize:2,supportedSizes:[0,1,2,3],viewStateProperties:
null},{name:"StoreGalleryTileWithoutSelection",viewModel:"Gallery$StoreGalleryTileViewModel",partKind:
0,inputs:["selectedMenuItemId"],bindings:[{property:"selectedMenuItemId",valuesFrom:[{referenceType:
5,property:"constant_",constantValue:""}]}],htmlTemplate:"pdc1355afdc3ae84bcd813d63ab668d10e1",details:
[{blade:"GalleryCreateBlade",additionalInputArguments:[{property:"selectedMenuItemId",valuesFrom:[{referenceType:
0,property:"content.selectedMenuItemId"}]}]}],initialSize:2,supportedSizes:[0,1,2,3],viewStateProperties:
null},{name:"GalleryTileWithoutSelection",viewModel:"Gallery$GalleryTileViewModel",partKind:0,inputs:
["selectedMenuItemId"],bindings:[{property:"selectedMenuItemId",valuesFrom:[{referenceType:5,property:
"constant_",constantValue:""}]}],htmlTemplate:"pdc1355afdc3ae84bcd813d63ab668d10e1",details:[{blade:
"GalleryMenuBlade",selectableBindings:[{property:"selectedMenuItemId",valuesFrom:[{referenceType:0,property:
"content.selectedMenuItemId"}]}]}],initialSize:2,supportedSizes:[0,1,2,3],viewStateProperties:null},
{name:"GalleryTemporaryTile",viewModel:"Gallery$GalleryTemporaryTileViewModel",partKind:20,inputs:["dynamicBladeSelection"],
bindings:[{property:"dynamicBladeSelection",valuesFrom:[{referenceType:1,property:"dynamicBladeSelection"}]}],
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"container.selectable"}]}]}],
initialSize:2,viewStateProperties:null},{editScopeType:"PDLEditScope",name:"ProvisionerPart",viewModel:
"Gallery$ProvisionerPartViewModel",partKind:17,inputs:["provisioningOptions"],bindings:[{property:"provisioningOptions",
valuesFrom:[{referenceType:1,property:"provisioningOptions"}]}],details:[{invocationInputArguments:[
{valuesFrom:[{referenceType:0,property:"container.selectable"}]}],outputArguments:[{property:"stepOutput",
valuesFrom:[{referenceType:1,property:"stepOutput"}]},{property:"fromProviderBindingInternals.outputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},{property:"fromProviderBindingInternals.commit",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]}]}],initialSize:2,viewStateProperties:
["content.provisioningStarted","content.galleryParameters","content.deploymentResponse","content.errorMessage",
"content.subscriptionId","content.resourceGroupName"]},{name:"GalleryLaunchCreateFailedStartPart",viewModel:
"Gallery$GalleryLaunchCreateFailedStartPartViewModel",partKind:20,inputs:["provisioningOptions"],bindings:
[{property:"provisioningOptions",valuesFrom:[{referenceType:1,property:"provisioningOptions"}]}],details:
[{blade:"GalleryLaunchCreateFailedBlade",additionalInputArguments:[{property:"galleryItem",valuesFrom:
[{referenceType:0,property:"content.galleryItem"}]}]}],initialSize:0,viewStateProperties:null},{editScopeType:
"PDLEditScope",name:"GalleryLauncherPart",viewModel:"Gallery$GalleryLauncherPartViewModel",partKind:
17,inputs:["galleryItemId","provisioningOptions"],bindings:[{property:"galleryItemId",valuesFrom:[{referenceType:
1,property:"galleryItemId"}]},{property:"provisioningOptions",valuesFrom:[{referenceType:1,property:
"provisioningOptions"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:
"container.selectable"}]}],outputArguments:[{property:"stepOutput",valuesFrom:[{referenceType:1,property:
"stepOutput"}]},{property:"fromProviderBindingInternals.outputs",valuesFrom:[{referenceType:1,property:
"collectorBindingInternals-outputs"}]},{property:"fromProviderBindingInternals.commit",valuesFrom:[{
referenceType:1,property:"collectorBindingInternals-commit"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.selectable"}]}],outputArguments:[{property:"internal_bladeCallerResult",
valuesFrom:[{referenceType:1,property:"internal_bladeCallerResult"}]}]}],initialSize:2,viewStateProperties:
["content.provisioningStarted","content.galleryParameters","content.deploymentResponse","content.errorMessage",
"content.subscriptionId","content.resourceGroupName"]},{commandGroupReference:{name:"browseResourceCommandGroup",
commands:[]},name:"BrowseResourcePinnedPart",viewModel:"BrowseResource$BrowsePinnedPartViewModel",partKind:
25,inputs:["resourceType"],bindings:[{property:"resourceType",valuesFrom:[{referenceType:1,property:
"resourceType"}]}],details:[{blade:"BrowseResourceBlade",additionalInputArguments:[{property:"resourceType",
valuesFrom:[{referenceType:0,property:"content.resourceType"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.selectableData"}]}]}],initialSize:2,viewStateProperties:null},{commandGroupReference:
{name:"browseResourceCommandGroup",commands:[]},name:"BrowseAllResourcesPinnedPart",viewModel:"BrowseResource$BrowsePinnedPartViewModel",
partKind:25,inputs:["resourceType"],bindings:[{property:"resourceType",valuesFrom:[{referenceType:5,
property:"constant_Microsoft_Resources/resources",constantValue:"Microsoft.Resources/resources"}]}],
details:[{blade:"BrowseAllResourcesBlade"},{invocationInputArguments:[{valuesFrom:[{referenceType:0,
property:"content.selectableData"}]}]}],initialSize:2,viewStateProperties:null},{name:"BrowseResourceListPart",
viewModel:"BrowseResource$BrowseResourceListPartViewModel",partKind:0,inputs:["resourceType","selectedSubscriptions"],
bindings:[{property:"resourceType",valuesFrom:[{referenceType:1,property:"resourceType"}]},{property:
"selectedSubscriptions",valuesFrom:[{referenceType:1,property:"selectedSubscriptions"}]}],htmlTemplate:
"pdca0c26526415e4e0298ac4ccc96c20169",details:[{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"content.resourceGridViewModel.selectableData"}]}]}],initialSize:8,supportedSizes:[8],viewStateProperties:
null},{name:"BrowseResourceListPartWithCookie",viewModel:"BrowseResource$BrowseResourceListPartViewModel",
partKind:0,inputs:["resourceType","cookie","selectedSubscriptions"],bindings:[{property:"resourceType",
valuesFrom:[{referenceType:1,property:"resourceType"}]},{property:"cookie",valuesFrom:[{referenceType:
1,property:"cookie"}]},{property:"selectedSubscriptions",valuesFrom:[{referenceType:1,property:"selectedSubscriptions"}]}],
htmlTemplate:"pdca0c26526415e4e0298ac4ccc96c20169",details:[{invocationInputArguments:[{valuesFrom:[
{referenceType:0,property:"content.resourceGridViewModel.selectableData"}]}]}],initialSize:8,supportedSizes:
[8],viewStateProperties:null},{commandGroupReference:{name:"browseResourceGroupCommandGroup",commands:
[]},name:"BrowseResourceGroupPinnedPart",viewModel:"BrowseResource$BrowsePinnedPartViewModel",partKind:
25,inputs:["resourceType"],bindings:[{property:"resourceType",valuesFrom:[{referenceType:1,property:
"resourceType"}]}],details:[{blade:"BrowseResourceGroupBlade",additionalInputArguments:[{property:"resourceType",
valuesFrom:[{referenceType:0,property:"content.resourceType"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.selectableData"}]}]}],initialSize:2,viewStateProperties:null},{name:
"BrowseResourceGroupListPart",viewModel:"BrowseResource$BrowseResourceGroupListPartViewModel",partKind:
0,inputs:["resourceType","selectedSubscriptions"],bindings:[{property:"resourceType",valuesFrom:[{referenceType:
1,property:"resourceType"}]},{property:"selectedSubscriptions",valuesFrom:[{referenceType:1,property:
"selectedSubscriptions"}]}],htmlTemplate:"pdc1ea98d582ee74438992b2bfb8a43d7e6",details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.resourceGroupGridViewModel.selectableData"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:null},{name:"BrowseResourceGroupListPartWithCookie",viewModel:
"BrowseResource$BrowseResourceGroupListPartViewModel",partKind:0,inputs:["resourceType","cookie"],bindings:
[{property:"resourceType",valuesFrom:[{referenceType:1,property:"resourceType"}]},{property:"cookie",
valuesFrom:[{referenceType:1,property:"cookie"}]}],htmlTemplate:"pdc1ea98d582ee74438992b2bfb8a43d7e6",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.resourceGroupGridViewModel.selectableData"}]}]}],
initialSize:8,supportedSizes:[8],viewStateProperties:null},{name:"NotificationsTile",viewModel:"Notifications$NotificationsTileViewModel",
partKind:1,inputs:[],bindings:[],details:[{blade:"NotificationsBlade"}],initialSize:3,viewStateProperties:
null},{name:"BrowseAllPart",viewModel:"Browse$BrowseAllTileViewModel",partKind:20,inputs:[],bindings:
[],details:[{blade:"BrowseAllBlade"}],initialSize:2,viewStateProperties:null},{name:"BrowseAllListPart",
viewModel:"Browse$BrowseAllBlade$ServicesListPartViewModel",partKind:14,inputs:[],bindings:[],details:
[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]}],initialSize:
8,viewStateProperties:null},{name:"BrowseAllPartWithType",viewModel:"Browse$BrowseAllTileViewModel",
partKind:20,inputs:["type"],bindings:[{property:"type",valuesFrom:[{referenceType:1,property:"type"}]}],
details:[{blade:"BrowseAllBladeWithType",additionalInputArguments:[{property:"type",valuesFrom:[{referenceType:
0,property:"content.type"}]}]}],initialSize:2,viewStateProperties:null},{name:"BrowseAllListPartWithType",
viewModel:"Browse$BrowseAllBlade$ServicesListPartViewModel",partKind:14,inputs:["type"],bindings:[{property:
"type",valuesFrom:[{referenceType:1,property:"type"}]}],details:[{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.selectableData"}]}]}],initialSize:8,viewStateProperties:null},{commandGroupReference:
{name:"serviceCommandGroup",commands:[]},name:"BrowseServicePart",viewModel:"Browse$BrowseServiceTileViewModel",
partKind:20,inputs:["assetTypeId"],bindings:[{property:"assetTypeId",valuesFrom:[{referenceType:1,property:
"assetTypeId"}]}],details:[{blade:"BrowseServiceBlade",additionalInputArguments:[{property:"assetTypeId",
valuesFrom:[{referenceType:0,property:"content.assetTypeId"}]}]}],initialSize:2,viewStateProperties:
null},{name:"BrowseServiceListPart",viewModel:"Browse$BrowseServiceBlade$ServiceItemsListPartViewModel",
partKind:14,inputs:["assetTypeId"],bindings:[{property:"assetTypeId",valuesFrom:[{referenceType:1,property:
"assetTypeId"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]}],
initialSize:8,viewStateProperties:null},{name:"BrowseServiceListPartWithCookie",viewModel:"Browse$BrowseServiceBlade$ServiceItemsListPartViewModel",
partKind:14,inputs:["assetTypeId","cookie"],bindings:[{property:"assetTypeId",valuesFrom:[{referenceType:
1,property:"assetTypeId"}]},{property:"cookie",valuesFrom:[{referenceType:1,property:"cookie"}]}],details:
[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]}],initialSize:
8,viewStateProperties:null},{name:"BrowseWebsitesServicePartForStartBoard",viewModel:"Browse$BrowseServiceTileViewModel$Websites",
partKind:20,inputs:[],bindings:[],details:[{blade:"BrowseServiceBlade",additionalInputArguments:[{property:
"assetTypeId",valuesFrom:[{referenceType:0,property:"content.assetTypeId"}]}]}],initialSize:2,viewStateProperties:
null},{name:"BrowseSubscriptionsServicePartForStartBoard",viewModel:"Browse$BrowseServiceTileViewModel$Subscriptions",
partKind:20,inputs:[],bindings:[],details:[{blade:"BrowseServiceBlade",additionalInputArguments:[{property:
"assetTypeId",valuesFrom:[{referenceType:0,property:"content.assetTypeId"}]}]}],initialSize:1,viewStateProperties:
null},{name:"BrowseDynamicAssetPart",viewModel:"Browse$BrowseDynamicAssetPartViewModel",partKind:20,
inputs:["extensionName","assetType","assetId"],bindings:[{property:"extensionName",valuesFrom:[{referenceType:
1,property:"extensionName"}]},{property:"assetType",valuesFrom:[{referenceType:1,property:"assetType"}]},
{property:"assetId",valuesFrom:[{referenceType:1,property:"assetId"}]}],details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"container.selectable"}]}]}],initialSize:2,viewStateProperties:
null}],blades:[{width:0,locked:!0,pinnable:!1,style:3,actionBar:{name:"",actionBarKind:1,source:{valuesFrom:
[{referenceType:0,property:"content.actionBar",part:"DeployFromTemplatePart"}]},bindings:[]},name:"DeployFromTemplateBlade",
lenses:[{title:null,name:"DeployFromTemplate",partInstances:[{name:"DeployFromTemplatePart",inline:{
name:null,viewModel:"Deployments$DeployFromTemplatePartViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:
"pdc0d9298c572ac484a92da2926fe48f181",details:[{selectablePath:"content.templateEditorSelector.selectable",
blade:"TemplateEditorBlade",parameterCollector:"content.templateEditorCollector"},{selectablePath:"content.parametersEditorSelector.selectable",
blade:"ParametersEditorBlade",parameterCollector:"content.parametersEditorCollector"},{selectablePath:
"content.subscriptionSelector.selectable",blade:"SubscriptionPickerV3Blade",parameterCollector:"content.subscriptionCollector"},
{selectablePath:"content.resourceGroupSelector.selectable",blade:"ResourceGroupPickerV3Blade",parameterCollector:
"content.resourceGroupCollector"},{selectablePath:"content.locationSelector.selectable",blade:"LocationPickerV3Blade",
parameterCollector:"content.locationCollector"}],initialSize:8,supportedSizes:[8],viewStateProperties:
null},parameterProvider:!0}]}],viewModelName:"Deployments$DeployFromTemplateBladeViewModel"},{width:
2,locked:!0,pinnable:!1,style:2,actionBar:{name:"",actionBarKind:3,source:{valuesFrom:[{referenceType:
0,property:"content.actionBar",part:"TemplateEditorPart"}]},bindings:[]},name:"TemplateEditorBlade",
lenses:[{title:null,name:"TemplateEditorLens",partInstances:[{name:"TemplateEditorPart",inline:{name:
null,viewModel:"Deployments$TemplateEditorPartViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:
"pdc453cf91dd7354e1c869ece5e26bbbd7f",details:[],initialSize:9,supportedSizes:[9],viewStateProperties:
null},parameterProvider:!0}]}],viewModelName:"Deployments$TemplateEditorBladeViewModel"},{width:0,locked:
!0,pinnable:!1,style:3,actionBar:{name:"",actionBarKind:6,source:{valuesFrom:[{referenceType:0,property:
"content.actionBar",part:"ParametersEditorPart"}]},bindings:[]},name:"ParametersEditorBlade",lenses:
[{title:null,name:"ParametersEditorLens",partInstances:[{name:"ParametersEditorPart",inline:{name:null,
viewModel:"Deployments$ParametersEditorPartViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:
"pdc716b1fd15bce4e3dab78fb16eed67e97",details:[],initialSize:9,supportedSizes:[9],viewStateProperties:
null},parameterProvider:!0}]}],viewModelName:"Deployments$ParametersEditorBladeViewModel"},{width:0,
locked:!0,pinnable:!1,style:2,actionBar:{name:"",actionBarKind:2,bindings:[{property:"showSelectButton",
valuesFrom:[{referenceType:0,property:"content.showSelectButton",part:"PickerPart"}]},{property:"triggerSelectAction",
valuesFrom:[{referenceType:0,property:"content.triggerSelectAction",part:"PickerPart"}]}]},name:"ResourceGroupPickerV3Blade",
lenses:[{title:null,name:"ResourceGroupPickerV3Blade_lens1",partInstances:[{name:"PickerPart",inline:
{name:null,viewModel:"BrowseResource$ResourceGroupPickerV3PartViewModel",partKind:0,inputs:[],bindings:
[],htmlTemplate:"pdc5e0c74295a5d481e94543718c799f717",details:[{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.addNewGrid.selectableData"}]}],parameterCollector:"content.addNewItemCollector"}],
initialSize:8,supportedSizes:[8],viewStateProperties:null},parameterProvider:!0}]}],viewModelName:"BrowseResource$ResourceGroupPickerV3BladeViewModel"},
{inputs:["tagKey","tagValue"],templateKeyInputs:["tagKey","tagValue"],width:1,locked:!0,pinnable:!0,
name:"ResourcesWithTagBlade",lenses:[{title:null,name:"ResourcesWithTagListLens",partInstances:[{name:
"ResourceFilterPart",reference:{partTypeName:"ResourceFilterPart",bindings:[{property:"textFilterEnabled",
valuesFrom:[{referenceType:5,property:"constant_true",constantValue:"true"}]}],initialSize:8}},{name:
"ResourcesWithTagListPart",inline:{name:null,viewModel:"Tags$ResourcesWithTagListPartViewModel",partKind:
14,inputs:["subscriptions","filter","tagKey","tagValue"],bindings:[{property:"tagKey",valuesFrom:[{referenceType:
1,property:"tagKey"}]},{property:"tagValue",valuesFrom:[{referenceType:1,property:"tagValue"}]},{property:
"selectedSubscriptions",valuesFrom:[{referenceType:0,property:"content.subscriptions",part:"ResourceFilterPart"}]},
{property:"textFilter",valuesFrom:[{referenceType:0,property:"content.filter",part:"ResourceFilterPart"}]}],
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]}],
initialSize:8,viewStateProperties:null}}]}],viewModelName:"Tags$ResourcesWithTagBladeViewModel",viewModelInputs:
[{property:"tagKey",valuesFrom:[{referenceType:1,property:"tagKey"}]},{property:"tagValue",valuesFrom:
[{referenceType:1,property:"tagValue"}]}]},{inputs:["resourceId"],templateKeyInputs:["resourceId"],commandGroupReference:
{name:"AddTagCommandGroup",commands:[{name:"AddTagCommand",bindings:[{property:"allowAdding",valuesFrom:
[{referenceType:0,property:"content.allowAdding",part:"ResourceTagsListPart"}]},{property:"saveTagEnabled",
valuesFrom:[{referenceType:0,property:"content.saveTagEnabled",part:"ResourceTagsListPart"}]}]}]},bindings:
[],width:0,locked:!0,pinnedPart:"ResourceTagsPart",pinnable:!0,name:"ResourceTagsListBlade",lenses:[
{title:null,name:"ResourceTagsListLens",partInstances:[{name:"ResourceTagsListPart",inline:{editScopeType:
"PDLEditScope",name:null,viewModel:"Tags$ResourceTagsListPartViewModel",partKind:0,inputs:["resourceId",
"saveTagSignal"],bindings:[{property:"resourceId",valuesFrom:[{referenceType:1,property:"resourceId"}]},
{property:"saveTagSignal",valuesFrom:[{referenceType:4,property:"content.saveTagSignal",bladeCommand:
"AddTagCommand"}],optional:!0}],htmlTemplate:"pdca6b57a20cf594e7ab0826dd6597aea3b",details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.tagsGridViewModel.selectableData"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"Tags$ResourceTagsListBladeViewModel",
viewModelInputs:[{property:"resourceId",valuesFrom:[{referenceType:1,property:"resourceId"}]}]},{bindings:
[],width:0,locked:!0,pinnedPart:"SubscriptionTagsPart",pinnable:!0,name:"SubscriptionTagsListBlade",
lenses:[{title:null,name:"ResourceTagsListLens",partInstances:[{name:"ResourceFilterPart",reference:
{partTypeName:"ResourceFilterPart",bindings:[],initialSize:8}},{name:"ResourceTagsListPart",inline:{
editScopeType:"PDLEditScope",name:null,viewModel:"Tags$ResourceTagsListPartViewModel",partKind:0,inputs:
["subscriptions","resourceId"],bindings:[{property:"resourceId",valuesFrom:[{referenceType:3,property:
"content.resourceId"}]},{property:"selectedSubscriptions",valuesFrom:[{referenceType:0,property:"content.subscriptions",
part:"ResourceFilterPart"}]}],htmlTemplate:"pdca6b57a20cf594e7ab0826dd6597aea3b",details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.tagsGridViewModel.selectableData"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"Tags$ResourceTagsListBladeViewModel"},
{width:0,locked:!0,pinnable:!1,style:2,actionBar:{name:"",actionBarKind:2,bindings:[{property:"showSelectButton",
valuesFrom:[{referenceType:0,property:"content.showSelectButton",part:"PickerPart"}]},{property:"triggerSelectAction",
valuesFrom:[{referenceType:0,property:"content.triggerSelectAction",part:"PickerPart"}]}]},name:"SubscriptionPickerV3Blade",
lenses:[{title:null,name:"SubscriptionPickerV3Blade_lens1",partInstances:[{name:"PickerPart",inline:
{name:null,viewModel:"SubscriptionsFilter$SubscriptionPickerV3PartViewModel",partKind:0,inputs:[],bindings:
[],htmlTemplate:"pdc5e0c74295a5d481e94543718c799f717",details:[{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.addNewGrid.selectableData"}]}],parameterCollector:"content.addNewItemCollector"}],
initialSize:8,supportedSizes:[8],viewStateProperties:null},parameterProvider:!0}]}],viewModelName:"SubscriptionsFilter$SubscriptionPickerV3BladeViewModel"},
{width:0,locked:!0,pinnable:!1,style:2,actionBar:{name:"",actionBarKind:2,bindings:[{property:"showSelectButton",
valuesFrom:[{referenceType:0,property:"content.showSelectButton",part:"PickerPart"}]},{property:"triggerSelectAction",
valuesFrom:[{referenceType:0,property:"content.triggerSelectAction",part:"PickerPart"}]}]},name:"LocationPickerV3Blade",
lenses:[{title:null,name:"LocationPickerV3Blade_lens1",partInstances:[{name:"PickerPart",inline:{name:
null,viewModel:"Locations$LocationPickerV3PartViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:
"pdc5e0c74295a5d481e94543718c799f717",details:[{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"content.addNewGrid.selectableData"}]}],parameterCollector:"content.addNewItemCollector"}],
initialSize:8,supportedSizes:[8],viewStateProperties:null},parameterProvider:!0}]}],viewModelName:"Locations$LocationPickerV3BladeViewModel"},
{width:0,locked:!0,pinnable:!0,name:"SettingsBlade",lenses:[{title:null,name:"SettingsLens",partInstances:
[{name:"SettingsPart",inline:{name:null,viewModel:"Settings$SettingsBlade$SettingsPartViewModel",partKind:
0,inputs:[],bindings:[],htmlTemplate:"pdc56c37daad7804bceb458da80e723276b",details:[{selectablePath:
"content.languageSelectorViewModel.selectable",blade:"LanguageSelectionBlade",additionalInputArguments:
[{property:"actionBarInputLanguage",valuesFrom:[{referenceType:0,property:"content.actionBarInputLanguage"}]}],
outputArguments:[{property:"actionBarOutputLanguage",valuesFrom:[{referenceType:1,property:"actionBarOutputLanguage"}]},
{property:"value",valuesFrom:[{referenceType:1,property:"value"}]}]},{selectablePath:"content.localeSelectorViewModel.selectable",
blade:"LocaleSelectionBlade",additionalInputArguments:[{property:"actionBarInputLocale",valuesFrom:[
{referenceType:0,property:"content.actionBarInputLocale"}]}],outputArguments:[{property:"actionBarOutputLocale",
valuesFrom:[{referenceType:1,property:"actionBarOutputLocale"}]},{property:"value",valuesFrom:[{referenceType:
1,property:"value"}]}]}],initialSize:8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:
"Settings$SettingsBladeViewModel"},{inputs:["actionBarInputLanguage"],outputs:["actionBarOutputLanguage",
"value"],bindings:[{property:"value",valuesFrom:[{referenceType:0,property:"content.value",part:"LanguageSelectionPart"}]},
{property:"actionBarOutputLanguage",valuesFrom:[{referenceType:2,property:"content.output"}]}],width:
0,locked:!0,pinnable:!1,style:6,actionBar:{name:"",actionBarKind:2,bindings:[{property:"valid",valuesFrom:
[{referenceType:0,property:"content.valid",part:"LanguageSelectionPart"}]},{property:"input",valuesFrom:
[{referenceType:1,property:"actionBarInputLanguage"}]}]},name:"LanguageSelectionBlade",lenses:[{title:
null,name:"LanguageSelectionBladeLens",partInstances:[{name:"LanguageSelectionPart",inline:{name:null,
viewModel:"Settings$LanguageSelectionBlade$LanguageGridViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:
"pdcd8794b921dbb4b37a288750baf1c688f",details:[],initialSize:8,supportedSizes:[8],viewStateProperties:
null}}]}],viewModelName:"Settings$LanguageSelectionBladeViewModel"},{inputs:["actionBarInputLocale"],
outputs:["actionBarOutputLocale","value"],bindings:[{property:"value",valuesFrom:[{referenceType:0,property:
"content.value",part:"LocaleSelectionPart"}]},{property:"actionBarOutputLocale",valuesFrom:[{referenceType:
2,property:"content.output"}]}],width:0,locked:!0,pinnable:!1,style:6,actionBar:{name:"",actionBarKind:
2,bindings:[{property:"valid",valuesFrom:[{referenceType:0,property:"content.valid",part:"LocaleSelectionPart"}]},
{property:"input",valuesFrom:[{referenceType:1,property:"actionBarInputLocale"}]}]},name:"LocaleSelectionBlade",
lenses:[{title:null,name:"LocaleSelectionBladeLens",partInstances:[{name:"LocaleSelectionPart",inline:
{name:null,viewModel:"Settings$LocaleSelectionBlade$LocaleGridViewModel",partKind:0,inputs:[],bindings:
[],htmlTemplate:"pdcd8794b921dbb4b37a288750baf1c688f",details:[],initialSize:8,supportedSizes:[8],viewStateProperties:
null}}]}],viewModelName:"Settings$LocaleSelectionBladeViewModel"},{inputs:["assetOwner","assetType",
"assetId"],bindings:[],width:1,pinnedPart:"ResourceMapPinnedPart",pinnable:!0,permissions:[{permissionType:
0,assetType:"ResourceGroups",assetId:{sourceType:2,property:"resourceGroup",providerKey:"resourceMapBlade"},
action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],name:"ResourceMapBlade",lenses:[{title:
null,name:"ResourceMapBlade_lens1",partInstances:[{name:"b_ResourceMapBlade_part1",reference:{partTypeName:
"ResourceMapPart",bindings:[{property:"assetOwner",valuesFrom:[{referenceType:1,property:"assetOwner"}]},
{property:"assetType",valuesFrom:[{referenceType:1,property:"assetType"}]},{property:"assetId",valuesFrom:
[{referenceType:1,property:"assetId"}]}],initialSize:5}}]}],viewModelName:"ResourceMap$ResourceMapBladeViewModel",
viewModelInputs:[{property:"assetOwner",valuesFrom:[{referenceType:1,property:"assetOwner"}]},{property:
"assetType",valuesFrom:[{referenceType:1,property:"assetType"}]},{property:"assetId",valuesFrom:[{referenceType:
1,property:"assetId"}]}]},{inputs:["resource","filter","band"],commandGroupReference:{name:"ResourceMapCommands",
commands:[{name:"OpenAddResourceBlade",bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:
3,property:"content.resourceGroup"}]}]}]},bindings:[],width:1,locked:!0,pinnedPart:"ResourceListPinnedPart",
pinnable:!0,permissions:[{permissionType:0,assetType:"ResourceGroups",assetId:{sourceType:2,property:
"resourceGroup",providerKey:"resourceListBlade"},action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],
name:"ResourceListBlade",lenses:[{title:null,name:"ResourceListBlade_lens1",partInstances:[{name:"ResourceListPart",
inline:{permissions:[{permissionType:0,assetType:"ResourceGroups",assetId:{sourceType:2,property:"resourceGroup",
providerKey:"resourceListPart"},action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],name:
null,viewModel:"ResourceMap$ResourceListPartViewModel",partKind:14,inputs:["resource","filter","band"],
bindings:[{property:"resource",valuesFrom:[{referenceType:1,property:"resource"}]},{property:"filter",
valuesFrom:[{referenceType:1,property:"filter"}]},{property:"band",valuesFrom:[{referenceType:1,property:
"band"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]}],
initialSize:8,commandGroup:"ResourceListBladeResourceListPartCommands",viewStateProperties:null}}]}],
viewModelName:"ResourceMap$ResourceListBladeViewModel",viewModelInputs:[{property:"resource",valuesFrom:
[{referenceType:1,property:"resource"}]},{property:"filter",valuesFrom:[{referenceType:1,property:"filter"}]},
{property:"band",valuesFrom:[{referenceType:1,property:"band"}]}]},{inputs:["resourceGroup"],templateKeyInputs:
["resourceGroup"],width:0,locked:!0,assetType:"ResourceGroups",assetIdInputProperty:"resourceGroup",
pinnable:!0,style:6,name:"DeploymentsListBlade",lenses:[{title:null,name:"DeploymentsListLens",partInstances:
[{name:"DeploymentsListPart",inline:{name:null,viewModel:"ResourceMap$DeploymentsListPartViewModel",
partKind:14,inputs:["resourceGroup"],bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:
1,property:"resourceGroup"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:
"content.selectableData"}]}]}],initialSize:8,viewStateProperties:null}}]}],viewModelName:"ResourceMap$DeploymentsListBladeViewModel",
viewModelInputs:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}]},
{inputs:["deploymentId"],templateKeyInputs:["deploymentId"],commandGroup:"DeploymentDetailsBladeCommands",
locked:!0,style:1,name:"DeploymentDetailsBlade",lenses:[{title:e.deploymentSummaryLensTitle,name:"DeploymentSummaryDetailsLens",
partInstances:[{name:"DeploymentSummaryDetailsPart",inline:{name:null,viewModel:"ResourceMap$DeploymentSummaryDetailsPartViewModel",
partKind:24,inputs:["deploymentId"],bindings:[{property:"deploymentId",valuesFrom:[{referenceType:1,
property:"deploymentId"}]}],details:[],initialSize:8,viewStateProperties:null}}]},{title:e.deploymentOutputsLensTitle,
name:"DeploymentOutputsDetailsLens",partInstances:[{name:"DeploymentOutputsDetailsPart",inline:{name:
null,viewModel:"ResourceMap$DeploymentOutputsDetailsPartViewModel",partKind:24,inputs:["deploymentId"],
bindings:[{property:"deploymentId",valuesFrom:[{referenceType:1,property:"deploymentId"}]}],details:
[],initialSize:8,viewStateProperties:null}}]},{title:e.deploymentInputsLensTitle,name:"DeploymentInputsDetailsLens",
partInstances:[{name:"DeploymentInputsDetailsPart",inline:{name:null,viewModel:"ResourceMap$DeploymentInputsDetailsPartViewModel",
partKind:24,inputs:["deploymentId"],bindings:[{property:"deploymentId",valuesFrom:[{referenceType:1,
property:"deploymentId"}]}],details:[],initialSize:8,viewStateProperties:null}}]},{title:e.deploymentOperationDetailsLensTitle,
name:"DeploymentOperationDetailsLens",partInstances:[{name:"DeploymentOperationsPart",inline:{name:null,
viewModel:"ResourceMap$DeploymentOperationsPartViewModel",partKind:0,inputs:["deploymentId"],bindings:
[{property:"deploymentId",valuesFrom:[{referenceType:1,property:"deploymentId"}]}],htmlTemplate:"pdcb265077f7c0d41658f03ef5e4c71c61a",
details:[{selectablePath:"content.deploymentOperationsGridViewModel.selectableData",blade:"DeploymentOperationPropertiesBlade",
selectableBindings:[{property:"operationId",valuesFrom:[{referenceType:6,property:"id"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"ResourceMap$DeploymentDetailsBladeViewModel",
viewModelInputs:[{property:"deploymentId",valuesFrom:[{referenceType:1,property:"deploymentId"}]}]},
{inputs:["operationId"],width:0,locked:!0,style:6,name:"DeploymentOperationPropertiesBlade",lenses:[
{title:null,name:"DeploymentOperationPropertiesBlade_lens1",partInstances:[{name:"PropertiesPart",inline:
{name:null,viewModel:"ResourceMap$DeploymentOperationPropertiesPartViewModel",partKind:24,inputs:["operationId"],
bindings:[{property:"operationId",valuesFrom:[{referenceType:1,property:"operationId"}]}],details:[{
invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selection"}]}]}],initialSize:
8,viewStateProperties:null}}]}],viewModelName:"ResourceMap$DeploymentOperationPropertiesBladeViewModel",
viewModelInputs:[{property:"operationId",valuesFrom:[{referenceType:1,property:"operationId"}]}]},{inputs:
["id"],templateKeyInputs:["id"],commandGroupReference:{name:"ResourceGroupMapBladeCommands",commands:
[{name:"OpenResourceGroupSettingListBlade",bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:
1,property:"id"}]}]},{name:"OpenAddResourceBlade",bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:
1,property:"id"}]}]},{name:"OpenResourceGroupDeleteBlade",bindings:[{property:"resourceGroup",valuesFrom:
[{referenceType:1,property:"id"}]}]}]},bindings:[],width:1,assetType:"ResourceGroups",assetIdInputProperty:
"resourceGroup",pinnedPart:"ResourceGroupMapPinnedPart",pinnable:!0,permissions:[{permissionType:0,assetType:
"ResourceGroups",assetId:{sourceType:0,property:"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],
name:"ResourceGroupMapBlade",lenses:[{title:e.resourceGroupOverviewLensTitle,name:"Overview",partInstances:
[{name:"b_ResourceGroupMapBlade_part1",reference:{partTypeName:"ResourceGroupMapPart",bindings:[{property:
"resourceGroup",valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:5}}]},{title:e.resourceGroupMonitoringLensTitle,
name:"MonitoringSummary",partInstances:[{name:"b_ResourceGroupMapBlade_part3",reference:{partTypeName:
"EventsSummaryPart",extension:"Microsoft_Azure_Insights",bindings:[{property:"resourceId",valuesFrom:
[{referenceType:3,property:"content.id"}]},{property:"options",valuesFrom:[{referenceType:3,property:
"content.eventsOptions"}]}],initialSize:3}},{name:"b_ResourceGroupMapBlade_part4",reference:{partTypeName:
"AlertsSummaryPart",extension:"Microsoft_Azure_Insights",bindings:[{property:"targetResourceIds",valuesFrom:
[{referenceType:3,property:"content.ids"}]},{property:"options",valuesFrom:[{referenceType:3,property:
"content.alertsOptions"}]}],initialSize:2}}]},{title:e.resourceGroupBillingLensTitle,name:"BillingSummary",
partInstances:[{name:"b_ResourceGroupMapBlade_part2",reference:{partTypeName:"ResourceGroupCurrentSpend",
extension:"Microsoft_Azure_Billing",bindings:[{property:"subscriptionId",valuesFrom:[{referenceType:
3,property:"content.subscriptionId"}]},{property:"resourceGroupId",valuesFrom:[{referenceType:1,property:
"id"}]}],initialSize:7}}]},{title:null,isSummary:!0,name:"ResourceGroupSummary",partInstances:[{name:
"ResourceSummaryPart",inline:{partState:{inputIdentityProperties:["content.collapsed"]},name:null,viewModel:
"ResourceMap$ResourceGroupSummaryViewModel",partKind:30,inputs:["resourceId"],bindings:[{property:"resourceId",
valuesFrom:[{referenceType:1,property:"id"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"content.selection"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:
"content.resourceGroupSelectable"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:
"content.tagsSelectable"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.accessSelectable"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.settingsSelectable"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.quickStartSelectable"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.keysSelectable"}]}]}],initialSize:
8,viewStateProperties:null}}]}],viewModelName:"ResourceMap$ResourceGroupMapBladeViewModel",viewModelInputs:
[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["resourceGroup"],
width:1,locked:!0,style:5,name:"ResourceGroupQuickStartBlade",lenses:[{title:null,name:"ResourceGroupQuickStartBlade_lens1",
partInstances:[{name:"QuickStartPart",inline:{name:null,viewModel:"ResourceMap$ResourceGroupQuickStartPartViewModel",
partKind:23,inputs:["resourceGroup"],bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:
1,property:"resourceGroup"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:
"content.selection"}]}]}],initialSize:8,viewStateProperties:null}}]}],viewModelName:"ResourceMap$ResourceGroupQuickStartBladeViewModel",
viewModelInputs:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}]},
{inputs:["resourceGroup"],width:0,locked:!0,style:6,name:"ResourceGroupPropertiesBlade",lenses:[{title:
null,name:"ResourceGroupPropertiesBlade_lens1",partInstances:[{name:"PropertiesPart",inline:{name:null,
viewModel:"ResourceMap$ResourceGroupPropertiesPartViewModel",partKind:24,inputs:["resourceGroup"],bindings:
[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}],details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.selection"}]}]}],initialSize:8,viewStateProperties:
null}}]}],viewModelName:"ResourceMap$ResourceGroupPropertiesBladeViewModel",viewModelInputs:[{property:
"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}]},{inputs:["resourceGroup",
"filter","band"],commandGroupReference:{name:"ResourceMapCommands",commands:[{name:"OpenAddResourceBlade",
bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}]}]},bindings:
[],width:1,locked:!0,assetType:"ResourceGroups",assetIdInputProperty:"resourceGroup",pinnedPart:"ResourceGroupListPinnedPart",
pinnable:!0,permissions:[{permissionType:0,assetType:"ResourceGroups",assetId:{sourceType:0,property:
"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],name:"ResourceGroupListBlade",
lenses:[{title:null,name:"ResourceGroupListBlade_lens1",partInstances:[{name:"ResourceGroupListPart",
inline:{assetType:"ResourceGroups",assetIdInputProperty:"resourceGroup",permissions:[{permissionType:
0,assetType:"ResourceGroups",assetId:{sourceType:0,property:"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],
name:null,viewModel:"ResourceMap$ResourceGroupListPartViewModel",partKind:14,inputs:["resourceGroup",
"filter","band"],bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]},
{property:"filter",valuesFrom:[{referenceType:1,property:"filter"}]},{property:"band",valuesFrom:[{referenceType:
1,property:"band"}]}],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]}],
initialSize:8,commandGroup:"ResourceGroupListBladeResourceGroupListPartCommands",viewStateProperties:
null}}]}],viewModelName:"ResourceMap$ResourceGroupListBladeViewModel",viewModelInputs:[{property:"resourceGroup",
valuesFrom:[{referenceType:1,property:"resourceGroup"}]},{property:"filter",valuesFrom:[{referenceType:
1,property:"filter"}]},{property:"band",valuesFrom:[{referenceType:1,property:"band"}]}]},{inputs:["id"],
templateKeyInputs:["id"],locked:!0,assetType:"ResourceGroups",assetIdInputProperty:"resourceGroup",style:
1,permissions:[{permissionType:0,assetType:"ResourceGroups",assetId:{sourceType:0,property:"resourceGroup"},
action:"Microsoft.Insights/events/read"}],name:"ResourceGroupEventsBlade",lenses:[{title:null,name:"ResourceGroupEventsBlade_lens1",
partInstances:[{name:"b_ResourceGroupEventsBlade_part1",reference:{partTypeName:"EventsListPart",extension:
"Microsoft_Azure_Insights",bindings:[{property:"resourceId",valuesFrom:[{referenceType:3,property:"content.id"}]},
{property:"options",valuesFrom:[{referenceType:3,property:"content.options"}]}],initialSize:8}}]}],viewModelName:
"ResourceMap$ResourceGroupEventsBladeViewModel",viewModelInputs:[{property:"resourceGroup",valuesFrom:
[{referenceType:1,property:"id"}]}]},{inputs:["resourceGroup"],outputs:["actionBarOutput"],bindings:
[{property:"actionBarOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],width:1,locked:
!0,assetType:"ResourceGroups",assetIdInputProperty:"resourceGroup",pinnable:!1,actionBar:{name:"ResourceGroupDeleteActionBar",
actionBarKind:5,viewModel:"ResourceMap$ResourceGroupDeleteActionBarViewModel",bindings:[{property:"resourceGroup",
valuesFrom:[{referenceType:1,property:"resourceGroup"}]},{property:"valid",valuesFrom:[{referenceType:
0,property:"content.valid",part:"ResourceGroupDeleteWarningPart"}]}]},permissions:[{permissionType:0,
assetType:"ResourceGroups",assetId:{sourceType:0,property:"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/delete"}],
name:"ResourceGroupDeleteBlade",lenses:[{title:null,name:"Overview",partInstances:[{name:"ResourceGroupDeleteWarningPart",
inline:{name:null,viewModel:"ResourceMap$ResourceGroupDeleteWarningPartViewModel",partKind:0,inputs:
["resourceGroup"],bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}],
htmlTemplate:"pdc7d9adf239d104ceaa0e00637cd2ac849",details:[],initialSize:8,supportedSizes:[8],viewStateProperties:
null}}]},{title:e.deleteListLensTitle,name:"List",partInstances:[{name:"ResourceGroupDeleteListPart",
inline:{assetType:"ResourceGroups",assetIdInputProperty:"resourceGroup",permissions:[{permissionType:
0,assetType:"ResourceGroups",assetId:{sourceType:0,property:"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/read"}],
name:null,viewModel:"ResourceMap$ResourceGroupDeleteListPartViewModel",partKind:14,inputs:["resourceGroup"],
bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}],details:
[],initialSize:8,viewStateProperties:null}}]}],viewModelName:"ResourceMap$ResourceGroupDeleteBladeViewModel",
viewModelInputs:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}]},
{inputs:["id"],width:0,locked:!0,style:2,name:"ResourceGroupSettingListBlade",lenses:[{title:null,name:
"SettingListLens",partInstances:[{name:"SettingListPart",inline:{name:null,viewModel:"ResourceMap$ResourceGroupSettingListPartViewModel",
partKind:0,inputs:["id"],bindings:[{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}],htmlTemplate:
"pdcfabedab6ed3f458c8b483aae23345c60",details:[{invocationInputArguments:[{valuesFrom:[{referenceType:
0,property:"content.settingList.selectableData"}]}]}],initialSize:8,supportedSizes:[8],viewStateProperties:
["content.settingList.selectableData.activatedItems","content.settingList.selectableData.selectedItems"]}}]}],
viewModelName:"ResourceMap$ResourceGroupSettingListBladeViewModel",viewModelInputs:[{property:"id",valuesFrom:
[{referenceType:1,property:"id"}]}]},{inputs:["subscriptionId"],templateKeyInputs:["subscriptionId"],
commandGroupReference:{name:"ManagementTeamCommandGroup",commands:[{name:"ManageUsersCommand",bindings:
[{property:"subscriptionId",valuesFrom:[{referenceType:1,property:"subscriptionId"}]}]}]},locked:!0,
editScopeType:"PDLEditScope",pinnable:!1,name:"ManagementTeamBlade",lenses:[{title:null,name:"ManagementTeamBlade_lens1",
partInstances:[{name:"ManagementTeamMembers",inline:{name:null,viewModel:"ClassicAdmins$ManagementTeamMembersPartViewModel",
partKind:0,inputs:["subscriptionId","editScopeId"],bindings:[{property:"subscriptionId",valuesFrom:[
{referenceType:1,property:"subscriptionId"}]},{property:"editScopeId",valuesFrom:[{referenceType:1,property:
"editScopeId"}]}],htmlTemplate:"pdc509354bbecb24a66b8406a8bfb298eb4",details:[],initialSize:8,supportedSizes:
[8],viewStateProperties:null}}]}],viewModelName:"ClassicAdmins$ManagementTeamBladeViewModel",viewModelInputs:
[{property:"subscriptionId",valuesFrom:[{referenceType:1,property:"subscriptionId"}]},{property:"editScopeId",
valuesFrom:[{referenceType:1,property:"editScopeId"}]}]},{name:"HiddenServiceHealthBlade",lenses:[{title:
null,name:"main",partInstances:[{name:"ServiceHealth",reference:{partTypeName:"PersonalizedServicesHealthPart",
bindings:[],initialSize:10}}]}],viewModelName:"ServicesHealth$ServicesBladeViewModel"},{bindings:[],
width:0,locked:!0,pinnedPart:"ServicesHealthPart",pinnable:!0,style:2,name:"ServicesHealthBlade",lenses:
[{title:null,name:"ServicesHealthBlade_lens1",partInstances:[{name:"ServicesBladePart",inline:{name:
null,viewModel:"ServicesHealth$ServicesBladePartViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:
"pdce7452ecfe43d41dc8adc65154d7202b9",details:[{selectablePath:"content.grid.selectableData",blade:"ServiceBlade",
selectableBindings:[{property:"serviceId",valuesFrom:[{referenceType:6,property:"id"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"ServicesHealth$ServicesBladeViewModel"},
{inputs:["serviceId"],templateKeyInputs:["serviceId"],bindings:[],width:0,locked:!0,pinnedPart:"ServicePart",
pinnable:!0,style:2,name:"ServiceBlade",lenses:[{title:null,name:"ServiceBlade_lens1",partInstances:
[{name:"ServiceBladePart",inline:{name:null,viewModel:"ServicesHealth$ServiceBladePartViewModel",partKind:
0,inputs:["serviceId"],bindings:[{property:"serviceId",valuesFrom:[{referenceType:1,property:"serviceId"}]}],
htmlTemplate:"pdce7452ecfe43d41dc8adc65154d7202b9",details:[{selectablePath:"content.grid.selectableData",
blade:"ServiceRegionBlade",selectableBindings:[{property:"serviceRegionId",valuesFrom:[{referenceType:
6,property:"id"}]}]}],initialSize:8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"ServicesHealth$ServiceBladeViewModel",
viewModelInputs:[{property:"serviceId",valuesFrom:[{referenceType:1,property:"serviceId"}]}]},{inputs:
["serviceRegionId"],templateKeyInputs:["serviceRegionId"],bindings:[],width:0,locked:!0,pinnedPart:"ServiceRegionPart",
pinnable:!0,style:2,name:"ServiceRegionBlade",lenses:[{title:null,name:"ServiceRegionBlade_lens1",partInstances:
[{name:"ServiceRegionBladePart",inline:{name:null,viewModel:"ServicesHealth$ServiceRegionBladePartViewModel",
partKind:0,inputs:["serviceRegionId"],bindings:[{property:"serviceRegionId",valuesFrom:[{referenceType:
1,property:"serviceRegionId"}]}],htmlTemplate:"pdc1113cbaf9bf24d5280e1a134f6b71518",details:[],initialSize:
8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"ServicesHealth$ServiceRegionBladeViewModel",
viewModelInputs:[{property:"serviceRegionId",valuesFrom:[{referenceType:1,property:"serviceRegionId"}]}]},
{inputs:["subscriptionIds"],width:0,locked:!0,name:"ServiceHealthListBlade",lenses:[{title:null,name:
"ServiceHealthListLens",partInstances:[{name:"ServiceHealthListPart",inline:{name:null,viewModel:"ServicesHealth$ServiceHealthListPartViewModel",
partKind:0,inputs:["subscriptionIds"],bindings:[{property:"subscriptionIds",valuesFrom:[{referenceType:
1,property:"subscriptionIds"}]}],htmlTemplate:"pdc7345d466f6824b65980f06db41aa48ab",details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.dynamicBladeSelection"}]}]}],initialSize:8,supportedSizes:
[8],viewStateProperties:null}}]}],viewModelName:"ServicesHealth$ServiceHealthListBladeViewModel"},{inputs:
["collectorBindingInternals-inputs","collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs",
"collectorBindingInternals-commit","stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.outputs",part:"RegionPickerBlade_RegionListPart"}]},
{property:"collectorBindingInternals-commit",valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",
part:"RegionPickerBlade_RegionListPart"}]},{property:"stepOutput",valuesFrom:[{referenceType:2,property:
"content.output"}]}],width:0,locked:!0,editScopeType:"PDLEditScope",pinnable:!1,style:3,actionBar:{name:
"",actionBarKind:2,bindings:[{property:"showSelectButton",valuesFrom:[{referenceType:0,property:"content.multiselectEnabled",
part:"RegionPickerBlade_RegionListPart"}]},{property:"triggerSelectAction",valuesFrom:[{referenceType:
0,property:"content.triggerSelectAction",part:"RegionPickerBlade_RegionListPart"}]},{property:"valid",
valuesFrom:[{referenceType:0,property:"content.valid",part:"RegionPickerBlade_RegionListPart"}]},{property:
"input",valuesFrom:[{referenceType:1,property:"stepInput"}]}]},discardEditsOnSelectionChange:!0,name:
"RegionPickerBlade",lenses:[{title:null,name:"RegionLens",partInstances:[{name:"RegionPickerBlade_RegionListPart",
inline:{name:null,viewModel:"Pickers$RegionPickerBlade$RegionPickerListViewModel",partKind:0,inputs:
["editScopeId","privateFcTpBI.inputs","privateFcTpBI.errors","stepInput","output"],bindings:[{property:
"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]},{property:"privateFcTpBI.inputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},{property:"privateFcTpBI.errors",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},{property:"stepInput",valuesFrom:
[{referenceType:1,property:"stepInput"}]},{property:"output",valuesFrom:[{referenceType:2,property:"content.output"}]}],
htmlTemplate:"pdc0d28be96ec3c4c1eb6b24af48c63c456",details:[],initialSize:8,supportedSizes:[8],viewStateProperties:
null}}]}],viewModelName:"Pickers$RegionPickerBladeViewModel",viewModelInputs:[{property:"pickerErrors",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]}]},{inputs:["collectorBindingInternals-inputs",
"collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs","collectorBindingInternals-commit",
"stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",valuesFrom:[{referenceType:0,property:
"content.privateFpTcBI.outputs",part:"ResourceListPart"}]},{property:"collectorBindingInternals-commit",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",part:"ResourceListPart"}]},{property:
"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],width:0,locked:!0,editScopeType:
"PDLEditScope",pinnable:!1,style:3,actionBar:{name:"",actionBarKind:2,bindings:[{property:"valid",valuesFrom:
[{referenceType:0,property:"content.valid",part:"ResourceListPart"}]},{property:"showSelectButton",valuesFrom:
[{referenceType:0,property:"content.multiselectEnabled",part:"ResourceListPart"}]},{property:"triggerSelectAction",
valuesFrom:[{referenceType:0,property:"content.triggerSelectAction",part:"ResourceListPart"}]},{property:
"input",valuesFrom:[{referenceType:1,property:"stepInput"}]},{property:"eula",valuesFrom:[{referenceType:
0,property:"content.eula",part:"ResourceListPart"}]}]},discardEditsOnSelectionChange:!0,name:"ResourceGroupPickerBlade",
lenses:[{title:null,name:"ResourceGroupPickerBlade_lens1",partInstances:[{name:"ResourceListPart",inline:
{name:null,viewModel:"Pickers$ResourceGroupPickerBlade$ResourceGroupPickerListViewModel",partKind:0,
inputs:["editScopeId","privateFcTpBI.inputs","privateFcTpBI.errors","stepInput","output"],bindings:[
{property:"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]},{property:"privateFcTpBI.inputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},{property:"privateFcTpBI.errors",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},{property:"stepInput",valuesFrom:
[{referenceType:1,property:"stepInput"}]},{property:"output",valuesFrom:[{referenceType:2,property:"content.output"}]}],
htmlTemplate:"pdc7e3209b48f7348378b55dc293782ec3d",details:[{invocationInputArguments:[{valuesFrom:[
{referenceType:0,property:"content.pickerActivationBladeOpener"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.createActionBladeOpener"}]}],additionalInputArguments:[{property:
"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.inputs"}]},
{property:"collectorBindingInternals-errors",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.errors"}]},
{property:"stepInput",valuesFrom:[{referenceType:0,property:"content.stepInput"}]}],outputArguments:
[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},
{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},
{property:"stepOutput",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:8,supportedSizes:
[8],viewStateProperties:null}}]}],viewModelName:"Pickers$ResourceGroupPickerBladeViewModel",viewModelInputs:
[{property:"pickerErrors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]}]},
{inputs:["collectorBindingInternals-inputs","collectorBindingInternals-errors","stepInput"],outputs:
["collectorBindingInternals-outputs","collectorBindingInternals-commit","stepOutput"],bindings:[{property:
"collectorBindingInternals-outputs",valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.outputs",
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
!0,name:"CreateResourceGroupBlade",lenses:[{title:null,name:"CreateResourceGroupBlade_lens1",partInstances:
[{name:"CreateWizardStepPart",inline:{name:null,viewModel:"Pickers$CreateResourceGroupBlade$CreateResourceGroupFormPartViewModel",
partKind:0,inputs:["editScopeId","privateFcTpBI.inputs","privateFcTpBI.errors","output","provisionOnStartboardPart",
"masterIsProvisioningPart"],bindings:[{property:"editScopeId",valuesFrom:[{referenceType:1,property:
"editScopeId"}]},{property:"privateFcTpBI.inputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"privateFcTpBI.errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},
{property:"output",valuesFrom:[{referenceType:2,property:"content.output"}]},{property:"provisionOnStartboardPart",
valuesFrom:[{referenceType:2,property:"content.provisionOnStartboardPart"}]},{property:"masterIsProvisioningPart",
valuesFrom:[{referenceType:2,property:"content.masterIsProvisioningPart"}]}],htmlTemplate:"pdc1532f14277094fb3b0b3fc218a30d62c",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectable"}]}],
additionalInputArguments:[{property:"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,
property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",valuesFrom:[
{referenceType:0,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:[{referenceType:
0,property:"content.stepInput"}]}],outputArguments:[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-outputs"}]},{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:
1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:[{referenceType:1,
property:"stepOutput"}]}]},{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.hotSpot"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.secondaryLinkSelectable"}]}],
outputArguments:[{property:"output",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:
8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"Pickers$CreateResourceGroupBlade$CreateResourceGroupBladeViewModel",
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
!0,name:"SubscriptionPickerBlade",lenses:[{title:null,name:"SubscriptionPickerBlade_lens1",partInstances:
[{name:"ResourceListPart",inline:{name:null,viewModel:"Pickers$SubscriptionPickerBlade$SubscriptionPickerListViewModel",
partKind:0,inputs:["editScopeId","privateFcTpBI.inputs","privateFcTpBI.errors","stepInput","output"],
bindings:[{property:"editScopeId",valuesFrom:[{referenceType:1,property:"editScopeId"}]},{property:"privateFcTpBI.inputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},{property:"privateFcTpBI.errors",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},{property:"stepInput",valuesFrom:
[{referenceType:1,property:"stepInput"}]},{property:"output",valuesFrom:[{referenceType:2,property:"content.output"}]}],
htmlTemplate:"pdc7e3209b48f7348378b55dc293782ec3d",details:[{invocationInputArguments:[{valuesFrom:[
{referenceType:0,property:"content.pickerActivationBladeOpener"}]}]},{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.createActionBladeOpener"}]}],additionalInputArguments:[{property:
"collectorBindingInternals-inputs",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.inputs"}]},
{property:"collectorBindingInternals-errors",valuesFrom:[{referenceType:0,property:"content.privateFcTpBI.errors"}]},
{property:"stepInput",valuesFrom:[{referenceType:0,property:"content.stepInput"}]}],outputArguments:
[{property:"privateFpTcBI.outputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},
{property:"privateFpTcBI.commit",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},
{property:"stepOutput",valuesFrom:[{referenceType:1,property:"stepOutput"}]}]}],initialSize:8,supportedSizes:
[8],viewStateProperties:null}}]}],viewModelName:"Pickers$SubscriptionPickerBladeViewModel",viewModelInputs:
[{property:"pickerErrors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]}]},
{bindings:[],locked:!0,pinnedPart:"WhatsNewTile",pinnable:!0,style:5,name:"WhatsNewBlade",lenses:[{title:
null,name:"WhatsNewLens",partInstances:[{name:"WhatsNewDetailsTile",inline:{name:null,viewModel:"Help$WhatsNewDetailsViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc71afb3f69f7644c4a8dff8000a4a9dcd",details:[],initialSize:
7,supportedSizes:[7],viewStateProperties:null}}]}],viewModelName:"Help$WhatsNewBladeViewModel"},{commandGroup:
"HelpAndSupportBladeCommands",bindings:[],pinnedPart:"HelpAndSupportPart",name:"HelpAndSupportBlade",
lenses:[{title:u.HelpAndSupport.Support.title,name:"Support",partInstances:[{name:"ServiceHealth",reference:
{partTypeName:"ServicesHealthPart",bindings:[],initialSize:3}},{name:"Tour",reference:{partTypeName:
"TourTile",bindings:[],initialSize:2}},{name:"GetSupport",reference:{partTypeName:"BrowseServicePart",
bindings:[{property:"name",valuesFrom:[{referenceType:3,property:"content.supportPartText"}]},{property:
"assetTypeId",valuesFrom:[{referenceType:5,property:"constant_Microsoft_Azure_Support_SupportRequest",
constantValue:"Microsoft_Azure_Support_SupportRequest"}]}],initialSize:2}},{name:"WhatsNew",reference:
{partTypeName:"WhatsNewTile",bindings:[],initialSize:1}},{name:"QuickStart",reference:{partTypeName:
"HelpTile",bindings:[],initialSize:1}},{name:"Diagnostics",inline:{name:null,viewModel:"Help$HelpAndSupportBlade$DiagnosticsPartViewModel",
partKind:20,inputs:[],bindings:[],details:[],initialSize:1,viewStateProperties:null}},{name:"Feedback",
reference:{partTypeName:"FeedbackTile",bindings:[],initialSize:1}}]},{title:u.HelpAndSupport.Help.title,
name:"Help",partInstances:[{name:"Docs",inline:{name:null,viewModel:"Help$DocsPartViewModel",partKind:
20,inputs:[],bindings:[],details:[],initialSize:2,viewStateProperties:null}},{name:"Msdn",inline:{name:
null,viewModel:"Help$MsdnPartViewModel",partKind:20,inputs:[],bindings:[],details:[],initialSize:2,viewStateProperties:
null}},{name:"StackOverflow",inline:{name:null,viewModel:"Help$StackOverflowPartViewModel",partKind:
20,inputs:[],bindings:[],details:[],initialSize:1,viewStateProperties:null}},{name:"Channel9",inline:
{name:null,viewModel:"Help$Channel9PartViewModel",partKind:20,inputs:[],bindings:[],details:[],initialSize:
1,viewStateProperties:null}}]}],viewModelName:"Help$HelpAndSupportBladeViewModel"},{width:1,locked:!0,
style:4,name:"NoSubscriptionsBlade",lenses:[{title:null,name:"NoSubscriptionsBlade_lens1",partInstances:
[{name:"NoticePart",inline:{name:null,viewModel:"Help$NoSubscriptionsContentPartViewModel",partKind:
0,inputs:[],bindings:[],htmlTemplate:"pdc674408dd16534e288e05b16e38cd8872",details:[],initialSize:9,
supportedSizes:[9],viewStateProperties:null}}]}],viewModelName:"Help$NoSubscriptionsBladeViewModel"},
{width:1,locked:!0,style:4,name:"NoMsdnOfferOnSubscriptionsBlade",lenses:[{title:null,name:"NoMsdnOfferOnSubscriptionsBlade_lens1",
partInstances:[{name:"NoticePart",inline:{name:null,viewModel:"Help$NoMsdnOfferOnSubscriptionsContentPartViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc674408dd16534e288e05b16e38cd8872",details:[],initialSize:
9,supportedSizes:[9],viewStateProperties:null}}]}],viewModelName:"Help$NoMsdnOfferOnSubscriptionsBladeViewModel"},
{bindings:[],locked:!0,pinnedPart:"TourTile",pinnable:!0,style:5,name:"TourBlade",lenses:[{title:null,
name:"TourLens",partInstances:[{name:"TourDetailsTile",inline:{name:null,viewModel:"Help$TourDetailsViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc14302fe28f8042109a7246e42fffef11",details:[{selectablePath:
"content.moreAboutBladesSelectable",blade:"TourBladesBlade"}],initialSize:7,supportedSizes:[7],viewStateProperties:
null}}]}],viewModelName:"Help$TourBladeViewModel"},{locked:!0,pinnable:!1,style:5,name:"TourBladesBlade",
lenses:[{title:null,name:"TourBladesLens",partInstances:[{name:"TourBladesDetailsTile",inline:{name:
null,viewModel:"Help$TourBladesDetailsViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc2388625e7afc48c7be6feb7d5a1a7075",
details:[{selectablePath:"content.customizingSelectable",blade:"TourCustomizingBlade"}],initialSize:
7,supportedSizes:[7],viewStateProperties:null}}]}],viewModelName:"Help$TourBladesBladeViewModel"},{locked:
!0,pinnable:!1,style:5,name:"TourCustomizingBlade",lenses:[{title:null,name:"TourCustomizingLens",partInstances:
[{name:"TourCustomizingDetailsTile",inline:{name:null,viewModel:"Help$TourCustomizingDetailsViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc2dfebbc839ec49c39f89aae9df2bc8d2",details:[],initialSize:
7,supportedSizes:[7],viewStateProperties:null}}]}],viewModelName:"Help$TourCustomizingBladeViewModel"},
{bindings:[],locked:!0,pinnedPart:"HelpTile",pinnable:!0,style:5,name:"HelpBlade",lenses:[{title:null,
name:"HelpLens",partInstances:[{name:"HelpDetailsTile",inline:{name:null,viewModel:"Help$HelpDetailsViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc60ed25e769cd46d88372658e686fb48d",details:[{selectablePath:
"content.serviceHealthSelectable",blade:"ServicesHealthBlade"}],initialSize:7,supportedSizes:[7],viewStateProperties:
null}}]}],viewModelName:"Help$HelpBladeViewModel"},{inputs:["selectedMenuItemId"],templateKeyInputs:
["selectedMenuItemId"],bindings:[],width:0,locked:!0,pinnedPart:"GalleryTile",pinnable:!0,style:6,name:
"GalleryMenuBlade",lenses:[{title:null,name:"GalleryMenuLens",partInstances:[{name:"GalleryMenuPart",
inline:{name:null,viewModel:"Gallery$GalleryMenuPartViewModel",partKind:14,inputs:["selectedMenuItemId"],
bindings:[{property:"selectedMenuItemId",valuesFrom:[{referenceType:1,property:"selectedMenuItemId"}]}],
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]}],
initialSize:8,viewStateProperties:["content.menuItemId"]}}]}],viewModelName:"Gallery$GalleryMenuBladeViewModel"},
{inputs:["selectedMenuItemId"],templateKeyInputs:["selectedMenuItemId"],width:2,locked:!0,pinnable:!0,
style:6,name:"GalleryFeaturedMenuItemBlade",lenses:[{title:null,name:"GalleryFeaturedMenuItemLens",partInstances:
[{name:"GalleryFeaturedMenuItemPart",inline:{name:null,viewModel:"Gallery$GalleryFeaturedMenuItemPartViewModel",
partKind:0,inputs:["selectedMenuItemId"],bindings:[{property:"selectedMenuItemId",valuesFrom:[{referenceType:
1,property:"selectedMenuItemId"}]}],htmlTemplate:"pdc82d30d2a1275435b92593775b2d232a9",details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.selectable"}]}]}],initialSize:8,supportedSizes:[8],
viewStateProperties:["content.selectable.isSelected","content.selectable.selectedValue","content.galleryControlViewModel.extensionOptions.selectable.selectedItem"]}}]}],
viewModelName:"Gallery$GalleryFeaturedMenuItemBladeViewModel",viewModelInputs:[{property:"selectedMenuItemId",
valuesFrom:[{referenceType:1,property:"selectedMenuItemId"}]}]},{inputs:["galleryItem","resourceGroupId",
"resourceGroupLocation","actionBarInput"],outputs:["stepOutput","inlineGalleryCreateOutputs"],bindings:
[{property:"inlineGalleryCreateOutputs",valuesFrom:[{referenceType:0,property:"content.inlineGalleryCreateOutputs",
part:"GalleryItemDetailsPart"}]},{property:"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],
locked:!0,pinnable:!0,style:2,actionBar:{name:"DefaultActionBar",actionBarKind:1,bindings:[{property:
"input",valuesFrom:[{referenceType:1,property:"actionBarInput"}]},{property:"isProvisioningBlade",valuesFrom:
[{referenceType:0,property:"content.enableProvisioning",part:"GalleryItemDetailsPart"}]},{property:"valid",
valuesFrom:[{referenceType:0,property:"content.valid",part:"GalleryItemDetailsPart"}]},{property:"eula",
valuesFrom:[{referenceType:0,property:"content.eula",part:"GalleryItemDetailsPart"}]}]},name:"GalleryItemDetailsBlade",
lenses:[{title:null,name:"GalleryItemDetailsLens",partInstances:[{name:"GalleryItemDetailsPart",inline:
{name:null,viewModel:"Gallery$GalleryItemDetailsPartViewModel",partKind:0,inputs:["galleryItem","resourceGroupId",
"resourceGroupLocation","output"],bindings:[{property:"galleryItem",valuesFrom:[{referenceType:1,property:
"galleryItem"}]},{property:"resourceGroupId",valuesFrom:[{referenceType:1,property:"resourceGroupId"}]},
{property:"resourceGroupLocation",valuesFrom:[{referenceType:1,property:"resourceGroupLocation"}]},{
property:"output",valuesFrom:[{referenceType:2,property:"content.output"}]}],htmlTemplate:"pdc9f2f0a3144dd4f7a89cc335e2627a54a",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectable"}]}],
outputArguments:[{property:"internal_bladeCallerResult",valuesFrom:[{referenceType:1,property:"internal_bladeCallerResult"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableForOldCreate"}]}],
additionalInputArguments:[{property:"collectorBindingInternals-errors",valuesFrom:[{referenceType:0,
property:"content.privateFcTpBI.errors"}]}],outputArguments:[{property:"privateFpTcBI.outputs",valuesFrom:
[{referenceType:1,property:"collectorBindingInternals-outputs"}]},{property:"privateFpTcBI.commit",valuesFrom:
[{referenceType:1,property:"collectorBindingInternals-commit"}]}]}],initialSize:8,supportedSizes:[8],
viewStateProperties:["content.selectable.isSelected","content.selectable.selectedValue"]}},{name:"GalleryItemPropertiesPart",
inline:{name:null,viewModel:"Gallery$GalleryItemPropertiesPartViewModel",partKind:24,inputs:["galleryItem"],
bindings:[{property:"galleryItem",valuesFrom:[{referenceType:1,property:"galleryItem"}]}],details:[],
initialSize:8,viewStateProperties:null}}]}],viewModelName:"Gallery$GalleryItemDetailsBladeViewModel",
viewModelInputs:[{property:"galleryItem",valuesFrom:[{referenceType:1,property:"galleryItem"}]}]},{inputs:
["selectedSubMenuItemId"],templateKeyInputs:["selectedSubMenuItemId"],width:0,locked:!0,pinnable:!0,
style:6,name:"GalleryResultsListBlade",lenses:[{title:null,name:"GalleryResultsLens",partInstances:[
{name:"GalleryResultsListPart",inline:{name:null,viewModel:"Gallery$GalleryResultsListPartViewModel",
partKind:14,inputs:["selectedSubMenuItemId"],bindings:[{property:"selectedSubMenuItemId",valuesFrom:
[{referenceType:1,property:"selectedSubMenuItemId"}]}],details:[{invocationInputArguments:[{valuesFrom:
[{referenceType:0,property:"content.selectableData"}]}]}],initialSize:9,viewStateProperties:null}}]}],
viewModelName:"Gallery$GalleryResultsListBladeViewModel",viewModelInputs:[{property:"selectedSubMenuItemId",
valuesFrom:[{referenceType:1,property:"selectedSubMenuItemId"}]}]},{inputs:["collectorBindingInternals-inputs",
"collectorBindingInternals-errors","stepInput"],outputs:["collectorBindingInternals-outputs","collectorBindingInternals-commit",
"stepOutput"],bindings:[{property:"collectorBindingInternals-outputs",valuesFrom:[{referenceType:0,property:
"content.privateFpTcBI.outputs",part:"PCGalleryResultsListPart"}]},{property:"collectorBindingInternals-commit",
valuesFrom:[{referenceType:0,property:"content.privateFpTcBI.commit",part:"PCGalleryResultsListPart"}]},
{property:"stepOutput",valuesFrom:[{referenceType:0,property:"content.stepOutput",part:"PCGalleryResultsListPart"}]}],
width:0,locked:!0,pinnable:!0,style:6,name:"PCGalleryResultsListBlade",lenses:[{title:null,name:"GalleryResultsLens",
partInstances:[{name:"PCGalleryResultsListPart",inline:{editScopeType:"PDLEditScope",name:null,viewModel:
"Gallery$PCGalleryResultsListPartViewModel",partKind:0,inputs:["privateFcTpBI.inputs","privateFcTpBI.errors",
"stepInput"],bindings:[{property:"privateFcTpBI.inputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]},
{property:"privateFcTpBI.errors",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-errors"}]},
{property:"stepInput",valuesFrom:[{referenceType:1,property:"stepInput"}]}],htmlTemplate:"pdc8cf2c9f81dda4304a2e02ad544fbf091",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.gridViewModel.selectableData"}]}],
outputArguments:[{property:"inlineGalleryCreateOutputs",valuesFrom:[{referenceType:1,property:"inlineGalleryCreateOutputs"}]}]}],
initialSize:9,supportedSizes:[9],viewStateProperties:null}}]}],viewModelName:"Gallery$PCGalleryResultsListBladeViewModel",
viewModelInputs:[{property:"createInputs",valuesFrom:[{referenceType:1,property:"collectorBindingInternals-inputs"}]}]},
{inputs:["galleryItem"],width:1,locked:!0,style:4,name:"GalleryLaunchCreateFailedBlade",lenses:[{title:
null,name:"GalleryLaunchCreateFailedBlade_lens1",partInstances:[{name:"NoticePart",inline:{name:null,
viewModel:"Gallery$GalleryLaunchCreateFailedPartViewModel",partKind:0,inputs:["galleryItem"],bindings:
[{property:"galleryItem",valuesFrom:[{referenceType:1,property:"galleryItem"}]}],htmlTemplate:"pdc674408dd16534e288e05b16e38cd8872",
details:[],initialSize:9,supportedSizes:[9],viewStateProperties:null}}]}],viewModelName:"Gallery$GalleryLaunchCreateFailedBladeViewModel",
viewModelInputs:[{property:"galleryItem",valuesFrom:[{referenceType:1,property:"galleryItem"}]}]},{inputs:
["galleryPricingInfo","galleryItem"],outputs:["stepOutput"],bindings:[{property:"stepOutput",valuesFrom:
[{referenceType:2,property:"content.output"}]}],width:0,locked:!0,pinnable:!1,actionBar:{name:"GenericActionBar",
actionBarKind:6,bindings:[{property:"valid",valuesFrom:[{referenceType:0,property:"content.actionBarValid",
part:"PricingSummaryPart"}]},{property:"actionButtonLabel",valuesFrom:[{referenceType:0,property:"content.actionButtonLabel",
part:"PricingSummaryPart"}]},{property:"actionSummaryHtml",valuesFrom:[{referenceType:0,property:"content.actionSummaryHtml",
part:"PricingSummaryPart"}]}]},name:"PricingSummaryBlade",lenses:[{title:null,name:"PricingSummaryLens",
partInstances:[{name:"PricingSummaryPart",inline:{name:null,viewModel:"Gallery$PricingSummaryPartViewModel",
partKind:0,inputs:["galleryPricingInfo","galleryItem"],bindings:[{property:"galleryPricingInfo",valuesFrom:
[{referenceType:1,property:"galleryPricingInfo"}]},{property:"galleryItem",valuesFrom:[{referenceType:
1,property:"galleryItem"}]}],htmlTemplate:"pdcaf74bd04908546d9b4dbe0bc2150180d",details:[],initialSize:
8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"Gallery$PricingSummaryBladeViewModel"},
{inputs:["galleryPricingInfo","galleryItem"],outputs:["stepOutput"],bindings:[{property:"stepOutput",
valuesFrom:[{referenceType:2,property:"content.output"}]}],locked:!0,pinnable:!1,actionBar:{name:"GenericActionBar",
actionBarKind:6,bindings:[{property:"valid",valuesFrom:[{referenceType:0,property:"content.actionBarValid",
part:"LegalTermsPart"}]},{property:"actionButtonLabel",valuesFrom:[{referenceType:0,property:"content.actionButtonLabel",
part:"LegalTermsPart"}]},{property:"actionSummaryHtml",valuesFrom:[{referenceType:0,property:"content.actionSummaryHtml",
part:"LegalTermsPart"}]}]},name:"LegalTermsBlade",lenses:[{title:null,name:"LegalTermsLens",partInstances:
[{name:"LegalTermsPart",inline:{name:null,viewModel:"Gallery$LegalTermsPartViewModel",partKind:0,inputs:
["galleryPricingInfo","galleryItem","bladeTitleKey"],bindings:[{property:"galleryPricingInfo",valuesFrom:
[{referenceType:1,property:"galleryPricingInfo"}]},{property:"galleryItem",valuesFrom:[{referenceType:
1,property:"galleryItem"}]},{property:"bladeTitleKey",valuesFrom:[{referenceType:3,property:"content.bladeTitleKey"}]}],
htmlTemplate:"pdcb63cf44f09aa46f7846655711f36ec2a",details:[{invocationInputArguments:[{valuesFrom:[
{referenceType:0,property:"content.selectable"}]}],outputArguments:[{property:"stepOutput",valuesFrom:
[{referenceType:1,property:"stepOutput"}]},{property:"hasErrors",valuesFrom:[{referenceType:1,property:
"hasErrors"}]}]}],initialSize:8,supportedSizes:[8],viewStateProperties:["content.selectable.isSelected",
"content.selectable.isActivated","content.selectable.selectedValue"]}}]}],viewModelName:"Gallery$LegalTermsBladeViewModel"},
{inputs:["id","title","displayName","htmlContent"],templateKeyInputs:["id"],outputs:["stepOutput","hasErrors"],
bindings:[{property:"hasErrors",valuesFrom:[{referenceType:0,property:"content.hasErrors",part:"LegalTermsPart"}]},
{property:"stepOutput",valuesFrom:[{referenceType:2,property:"content.output"}]}],locked:!0,pinnable:
!1,actionBar:{name:"GenericActionBar",actionBarKind:6,bindings:[{property:"valid",valuesFrom:[{referenceType:
0,property:"content.actionBarValid",part:"LegalTermsPart"}]},{property:"actionButtonLabel",valuesFrom:
[{referenceType:0,property:"content.actionButtonLabel",part:"LegalTermsPart"}]},{property:"actionSummaryHtml",
valuesFrom:[{referenceType:0,property:"content.actionSummaryHtml",part:"LegalTermsPart"}]}]},name:"LegalTermsDetailsBlade",
lenses:[{title:null,name:"LegalTermsLens",partInstances:[{name:"LegalTermsPart",inline:{name:null,viewModel:
"Gallery$LegalTermsDetailsPartViewModel",partKind:0,inputs:["htmlContent"],bindings:[{property:"htmlContent",
valuesFrom:[{referenceType:1,property:"htmlContent"}]}],htmlTemplate:"pdcc2413f6283eb4635b03772cd737d22d0",
details:[],initialSize:8,supportedSizes:[8],viewStateProperties:null}}]}],viewModelName:"Gallery$LegalTermsDetailsBladeViewModel",
viewModelInputs:[{property:"title",valuesFrom:[{referenceType:1,property:"title"}]},{property:"displayName",
valuesFrom:[{referenceType:1,property:"displayName"}]}]},{inputs:["selectedMenuItemId"],width:0,locked:
!0,pinnable:!1,style:9,name:"GalleryCreateBlade",lenses:[{title:null,name:"GalleryCreateMenuLens",partInstances:
[{name:"GalleryCreateMenuPart",inline:{name:null,viewModel:"Gallery$GalleryCreateMenuPartViewModel",
partKind:0,inputs:["selectedMenuItemId"],bindings:[{property:"selectedMenuItemId",valuesFrom:[{referenceType:
1,property:"selectedMenuItemId"}]}],htmlTemplate:"pdc14916fbbf91147989df67522873c31ad",details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.curationMenuGrid.selectableData"}]}]},{asSubJourney:
!0,invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.recentlyUsedGrid.selectable"}]}]},
{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.recentlyUsedGrid.selectableData"}]}]}],
initialSize:8,supportedSizes:[8],viewStateProperties:["content.menuItemId"]}}]}],viewModelName:"Gallery$GalleryCreateBladeViewModel"},
{inputs:["selectedMenuItemId"],templateKeyInputs:["selectedMenuItemId"],width:0,locked:!0,pinnable:!1,
style:9,name:"GalleryCreateMenuResultsListBlade",lenses:[{title:null,name:"GalleryCreateMenuResultsLens",
partInstances:[{name:"GalleryCreateMenuResultsListPart",inline:{name:null,viewModel:"Gallery$GalleryCreateMenuResultsListPartViewModel",
partKind:0,inputs:["selectedMenuItemId"],bindings:[{property:"selectedMenuItemId",valuesFrom:[{referenceType:
1,property:"selectedMenuItemId"}]}],htmlTemplate:"pdcf0af62da66f648c7a82518f06531e415",details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.resultsListGrid.selectableData"}]}]},{asSubJourney:
!0,invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.resultsListGrid.selectable"}]}]},
{selectablePath:"content.marketplaceHotspot",asSubJourney:!0,blade:"GalleryMenuBlade",selectableBindings:
[{property:"selectedMenuItemId",valuesFrom:[{referenceType:0,property:"content.selectedMenuItemId"}]}]}],
initialSize:9,supportedSizes:[9],viewStateProperties:null}}]}],viewModelName:"Gallery$GalleryCreateMenuResultsListBladeViewModel",
viewModelInputs:[{property:"selectedMenuItemId",valuesFrom:[{referenceType:1,property:"selectedMenuItemId"}]}]},
{inputs:["galleryItem"],templateKeyInputs:["galleryItem"],width:0,locked:!0,pinnable:!1,style:10,name:
"GalleryCreateComingSoonBlade",lenses:[{title:null,name:"GalleryCreateComingSoonLens",partInstances:
[{name:"GalleryCreateComingSoonPart",inline:{name:null,viewModel:"Gallery$GalleryCreateComingSoonPartViewModel",
partKind:0,inputs:["galleryItem"],bindings:[{property:"galleryItem",valuesFrom:[{referenceType:1,property:
"galleryItem"}]}],htmlTemplate:"pdc3bfda9d7fa5040bf8a80d786e3cb7f70",details:[],initialSize:9,supportedSizes:
[9],viewStateProperties:null}}]}],viewModelName:"Gallery$GalleryCreateComingSoonBladeViewModel",viewModelInputs:
[{property:"galleryItem",valuesFrom:[{referenceType:1,property:"galleryItem"}]}]},{inputs:["galleryItem"],
templateKeyInputs:["galleryItem"],width:0,locked:!0,pinnable:!1,style:10,name:"GalleryCreateSubscriptionBlade",
lenses:[{title:null,name:"GalleryCreateSubscriptionLens",partInstances:[{name:"GalleryCreateSubscriptionPart",
inline:{name:null,viewModel:"Gallery$GalleryCreateSubscriptionPartViewModel",partKind:0,inputs:["galleryItem"],
bindings:[{property:"galleryItem",valuesFrom:[{referenceType:1,property:"galleryItem"}]}],htmlTemplate:
"pdcfc95c9c738634030b3b1ba335ff97baf",details:[],initialSize:9,supportedSizes:[9],viewStateProperties:
null}}]}],viewModelName:"Gallery$GalleryCreateSubscriptionBladeViewModel",viewModelInputs:[{property:
"galleryItem",valuesFrom:[{referenceType:1,property:"galleryItem"}]}]},{inputs:["resourceType"],commandGroupReference:
{name:"BrowseResourceBladeCommands",commands:[{name:"ChooseColumnsCommand",bindings:[{property:"resourceType",
valuesFrom:[{referenceType:3,property:"content.resourceType"}]}]}]},bindings:[],width:2,locked:!0,pinnedPart:
"BrowseResourcePinnedPart",pinnable:!0,name:"BrowseResourceBlade",lenses:[{title:null,name:"BrowseResourceListLens",
partInstances:[{name:"ResourceFilterPart",reference:{partTypeName:"ResourceFilterPart",bindings:[],initialSize:
8}},{name:"BrowseResourceListPart",reference:{partTypeName:"BrowseResourceListPart",bindings:[{property:
"resourceType",valuesFrom:[{referenceType:1,property:"resourceType"}]},{property:"selectedSubscriptions",
valuesFrom:[{referenceType:0,property:"content.subscriptions",part:"ResourceFilterPart"}]}],initialSize:
8}}]}],viewModelName:"BrowseResource$BrowseResourceBladeViewModel",viewModelInputs:[{property:"resourceType",
valuesFrom:[{referenceType:1,property:"resourceType"}]}]},{bindings:[],width:2,locked:!0,pinnedPart:
"BrowseAllResourcesPinnedPart",pinnable:!0,name:"BrowseAllResourcesBlade",lenses:[{title:null,name:"BrowseResourceListLens",
partInstances:[{name:"ResourceFilterPart",reference:{partTypeName:"ResourceFilterPart",bindings:[],initialSize:
8}},{name:"BrowseResourceListPart",reference:{partTypeName:"BrowseResourceListPart",bindings:[{property:
"resourceType",valuesFrom:[{referenceType:3,property:"content.resourceType"}]},{property:"selectedSubscriptions",
valuesFrom:[{referenceType:0,property:"content.subscriptions",part:"ResourceFilterPart"}]}],initialSize:
8}}]}],viewModelName:"BrowseResource$BrowseResourceBladeViewModel",viewModelInputs:[{property:"resourceType",
valuesFrom:[{referenceType:5,property:"constant_Microsoft_Resources/resources",constantValue:"Microsoft.Resources/resources"}]}]},
{inputs:["resourceType"],bindings:[],width:2,locked:!0,pinnedPart:"BrowseResourceGroupPinnedPart",pinnable:
!0,name:"BrowseResourceGroupBlade",lenses:[{title:null,name:"BrowseResourceGroupListLens",partInstances:
[{name:"ResourceFilterPart",reference:{partTypeName:"ResourceFilterPart",bindings:[],initialSize:8}},
{name:"BrowseResourceGroupListPart",reference:{partTypeName:"BrowseResourceGroupListPart",bindings:[
{property:"resourceType",valuesFrom:[{referenceType:1,property:"resourceType"}]},{property:"selectedSubscriptions",
valuesFrom:[{referenceType:0,property:"content.subscriptions",part:"ResourceFilterPart"}]}],initialSize:
8}}]}],viewModelName:"BrowseResource$BrowseResourceGroupBladeViewModel",viewModelInputs:[{property:"resourceType",
valuesFrom:[{referenceType:1,property:"resourceType"}]}]},{bindings:[],locked:!0,pinnedPart:"NotificationsTile",
pinnable:!0,name:"NotificationsBlade",lenses:[{title:null,name:"NotificationsListLens",partInstances:
[{name:"NotificationsBlade_NotificationsListPart",inline:{name:null,viewModel:"Notifications$NotificationsBlade$NotificationsListViewModel",
partKind:14,inputs:[],bindings:[],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,
property:"content.selectableData"}]}]}],initialSize:8,viewStateProperties:null}}]}],viewModelName:"Notifications$NotificationsBladeViewModel"},
{bindings:[],width:0,locked:!0,pinnedPart:"BrowseAllPart",pinnable:!0,name:"BrowseAllBlade",lenses:[
{title:null,name:"BrowseAllListLens",partInstances:[{name:"BrowseAllListPart",reference:{partTypeName:
"BrowseAllListPart",bindings:[],initialSize:8}}]}],viewModelName:"Browse$BrowseAllBladeViewModel"},{
inputs:["type"],bindings:[],width:0,locked:!0,pinnedPart:"BrowseAllPart",pinnable:!0,name:"BrowseAllBladeWithType",
lenses:[{title:null,name:"BrowseAllListLensWithType",partInstances:[{name:"BrowseAllListPartWithType",
reference:{partTypeName:"BrowseAllListPartWithType",bindings:[{property:"type",valuesFrom:[{referenceType:
1,property:"type"}]}],initialSize:8}}]}],viewModelName:"Browse$BrowseAllBladeViewModel",viewModelInputs:
[{property:"type",valuesFrom:[{referenceType:1,property:"type"}]}]},{inputs:["assetTypeId"],bindings:
[],width:2,locked:!0,pinnedPart:"BrowseServicePart",pinnable:!0,name:"BrowseServiceBlade",lenses:[{title:
null,name:"BrowseServiceListLens",partInstances:[{name:"BrowseServiceListPart",reference:{partTypeName:
"BrowseServiceListPart",bindings:[{property:"assetTypeId",valuesFrom:[{referenceType:1,property:"assetTypeId"}]}],
initialSize:8}}]}],viewModelName:"Browse$BrowseServiceBladeViewModel",viewModelInputs:[{property:"assetTypeId",
valuesFrom:[{referenceType:1,property:"assetTypeId"}]}]},{width:1,locked:!0,pinnable:!1,name:"BrowseDynamicAssetBlade",
lenses:[],viewModelName:"Browse$BrowseDynamicAssetBladeViewModel"},{inputs:["resourceType","actionBarInput"],
outputs:["actionBarOutput"],bindings:[{property:"actionBarOutput",valuesFrom:[{referenceType:2,property:
"content.output"}]}],locked:!0,pinnable:!1,style:7,actionBar:{name:"SettingsActionBar",actionBarKind:
4,viewModel:"BrowseResource$BrowseResourceSettingsActionBarViewModel",bindings:[{property:"resourceType",
valuesFrom:[{referenceType:1,property:"resourceType"}]},{property:"operation",valuesFrom:[{referenceType:
3,property:"content.operation"}]},{property:"input",valuesFrom:[{referenceType:1,property:"actionBarInput"}]}]},
name:"BrowseResourceSettingsBlade",lenses:[{title:null,name:"BrowseResourceSettingsColumnsListLens",
partInstances:[{name:"BrowseResourceColumnsListPart",inline:{name:null,viewModel:"BrowseResource$BrowseResourceColumnsListPartViewModel",
partKind:0,inputs:["resourceType","operation"],bindings:[{property:"resourceType",valuesFrom:[{referenceType:
3,property:"content.resourceType"}]},{property:"operation",valuesFrom:[{referenceType:3,property:"content.operation"}]}],
htmlTemplate:"pdc0371630505fd44699f1459ab65dcc0d4",details:[],initialSize:8,supportedSizes:[8],viewStateProperties:
null}}]}],viewModelName:"BrowseResource$BrowseResourceSettingsBladeViewModel",viewModelInputs:[{property:
"resourceType",valuesFrom:[{referenceType:1,property:"resourceType"}]}]}],startBoardParts:[{name:"Browse",
reference:{partTypeName:"BrowseAllPart",bindings:[],initialSize:3}},{name:"GalleryTileStart",reference:
{partTypeName:"GalleryTile",bindings:[{property:"selectedMenuItemId",valuesFrom:[{referenceType:5,property:
"constant_",constantValue:""}]}],initialSize:2}},{name:"TourTileStart",reference:{partTypeName:"TourTile",
bindings:[],initialSize:2}},{name:"BillingTileStart",reference:{partTypeName:"BillingStartBoardTile",
extension:"Microsoft_Azure_Billing",bindings:[],initialSize:3}},{name:"WhatsNewTileStart",reference:
{partTypeName:"WhatsNewTile",bindings:[],initialSize:2}},{name:"PersonalizedServicesHealthPartStart",
reference:{partTypeName:"PersonalizedServicesHealthPart",bindings:[],initialSize:5}},{name:"ServicesHealthPartStart",
reference:{partTypeName:"ServicesHealthPart",bindings:[],initialSize:3}},{name:"Settings",reference:
{partTypeName:"SettingsBladePart",bindings:[],initialSize:2}},{name:"HelpAndSupport",reference:{partTypeName:
"HelpAndSupportPart",bindings:[],initialSize:2}},{name:"FeedbackTileStart",reference:{partTypeName:"FeedbackTile",
bindings:[],initialSize:1}},{name:"AzurePortalTileStart",reference:{partTypeName:"AzurePortalTile",bindings:
[],initialSize:1}}],commandGroups:[{name:"AddTagCommandGroup",commands:[{name:"AddTagCommand",text:o.
addCommandText,viewModel:"Tags$SaveTagCommandViewModel",commandKind:0,bindings:[]}]},{name:"TagItemCommandGroup",
commands:[{name:"DeleteTagCommand",text:o.deleteCommandText,viewModel:"Tags$DeleteTagCommandViewModel",
commandKind:0,bindings:[{property:"key",valuesFrom:[{referenceType:1,property:"key"}]},{property:"value",
valuesFrom:[{referenceType:1,property:"value"}]},{property:"resourceId",valuesFrom:[{referenceType:1,
property:"resourceId"}]},{property:"allowEdits",valuesFrom:[{referenceType:1,property:"allowEdits"}]}]}]},
{name:"ResourceMapCommands",commands:[{name:"OpenAddResourceBlade",text:e.addResourceCommandTitle,viewModel:
"ResourceMap$AddResourceCommandViewModel",details:{blade:"GalleryResultsListBlade",selectableBindings:
[{property:"selectedSubMenuItemId",valuesFrom:[{referenceType:4,property:"content.selectedSubMenuItemId"}]}]},
assetType:"ResourceGroups",assetIdInputProperty:"resourceGroup",permissions:[{permissionType:0,assetType:
"ResourceGroups",assetId:{sourceType:0,property:"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/write"}],
commandKind:2,bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}]}]},
{name:"ResourceGroupMapBladeCommands",commands:[{name:"OpenResourceGroupSettingListBlade",text:e.resourceGroupSettingListCommandTitle,
viewModel:"ResourceMap$ResourceGroupSettingListCommandViewModel",details:{blade:"ResourceGroupSettingListBlade",
additionalInputArguments:[{property:"id",valuesFrom:[{referenceType:4,property:"content.resourceGroup"}]}]},
assetType:"ResourceGroups",assetIdInputProperty:"resourceGroup",permissions:[{permissionType:0,assetType:
"ResourceGroups",assetId:{sourceType:0,property:"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/write"}],
commandKind:2,bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}]},
{name:"OpenAddResourceBlade",text:e.addResourceCommandTitle,viewModel:"ResourceMap$AddResourceCommandViewModel",
details:{blade:"GalleryResultsListBlade",selectableBindings:[{property:"selectedSubMenuItemId",valuesFrom:
[{referenceType:4,property:"content.selectedSubMenuItemId"}]}]},assetType:"ResourceGroups",assetIdInputProperty:
"resourceGroup",permissions:[{permissionType:0,assetType:"ResourceGroups",assetId:{sourceType:0,property:
"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/deployments/write"}],commandKind:
2,bindings:[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}]},{name:
"OpenResourceGroupDeleteBlade",text:e.deleteResourceGroupCommandTitle,viewModel:"ResourceMap$ResourceGroupDeleteCommandViewModel",
details:{blade:"ResourceGroupDeleteBlade",additionalInputArguments:[{property:"resourceGroup",valuesFrom:
[{referenceType:4,property:"content.resourceGroup"}]}],outputArguments:[{property:"actionBarOutput",
valuesFrom:[{referenceType:1,property:"actionBarOutput"}]}]},assetType:"ResourceGroups",assetIdInputProperty:
"resourceGroup",permissions:[{permissionType:0,assetType:"ResourceGroups",assetId:{sourceType:0,property:
"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/delete"}],commandKind:2,bindings:
[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"resourceGroup"}]}]}]},{name:"ResourceGroupBrowseCommands",
commands:[{name:"OpenResourceGroupDeleteBlade",text:e.deleteResourceGroupCommandTitle,viewModel:"ResourceMap$ResourceGroupDeleteCommandViewModel",
details:{blade:"ResourceGroupDeleteBlade",additionalInputArguments:[{property:"resourceGroup",valuesFrom:
[{referenceType:4,property:"content.resourceGroup"}]}],outputArguments:[{property:"actionBarOutput",
valuesFrom:[{referenceType:1,property:"actionBarOutput"}]}]},assetType:"ResourceGroups",assetIdInputProperty:
"resourceGroup",permissions:[{permissionType:0,assetType:"ResourceGroups",assetId:{sourceType:0,property:
"resourceGroup"},action:"Microsoft.Resources/subscriptions/resourceGroups/delete"}],commandKind:2,bindings:
[{property:"resourceGroup",valuesFrom:[{referenceType:1,property:"id"}]}]}]},{name:"ManagementTeamCommandGroup",
commands:[{name:"ManageUsersCommand",text:i.manageUsersCommandText,viewModel:"ClassicAdmins$ManageUsersCommand",
commandKind:1,bindings:[]}]},{name:"ServiceHealthPartCommands",commands:[{text:f.PersonalizedServicesHealth.
uriCommandTitle,viewModel:"ServicesHealth$PublicShdUriCommandViewModel",commandKind:1,bindings:[]}]},
{name:"browseResourceCommandGroup",commands:[]},{name:"BrowseResourceBladeCommands",commands:[{name:
"ChooseColumnsCommand",text:r.chooseColumnsCommand,viewModel:"BrowseResource$BrowseResourceChooseColumnsCommandViewModel",
details:{blade:"BrowseResourceSettingsBlade",additionalInputArguments:[{property:"resourceType",valuesFrom:
[{referenceType:4,property:"content.resourceType"}]},{property:"actionBarInput",valuesFrom:[{referenceType:
4,property:"content.actionBarInput"}]}],outputArguments:[{property:"actionBarOutput",valuesFrom:[{referenceType:
1,property:"actionBarOutput"}]}],openInContextPane:!0},commandKind:2,bindings:[{property:"resourceType",
valuesFrom:[{referenceType:1,property:"resourceType"}]}]}]},{name:"browseResourceGroupCommandGroup",
commands:[]},{name:"serviceCommandGroup",commands:[]},{name:"ResourceListBladeResourceListPartCommands",
commands:[{name:"ResourceMapRefreshCommand",text:e.refreshCommandText,viewModel:"ResourceMap$ResourceMapRefreshCommandViewModel",
commandKind:0,bindings:[{property:"partRefreshId",valuesFrom:[{referenceType:0,property:"content.partRefreshId"}]}]}]},
{name:"DeploymentDetailsBladeCommands",commands:[{text:e.deploymentDeleteCommandText,viewModel:"ResourceMap$DeploymentDeleteCommandViewModel",
commandKind:0,bindings:[{property:"deploymentId",valuesFrom:[{referenceType:1,property:"deploymentId"}]}]}]},
{name:"ResourceGroupListBladeResourceGroupListPartCommands",commands:[{name:"ResourceMapRefreshCommand",
text:e.refreshCommandText,viewModel:"ResourceMap$ResourceMapRefreshCommandViewModel",commandKind:0,bindings:
[{property:"partRefreshId",valuesFrom:[{referenceType:0,property:"content.partRefreshId"}]}]}]},{name:
"HelpAndSupportBladeCommands",commands:[{name:"NewSupportRequestCommand",text:u.HelpAndSupport.Support.
newSupportRequest,viewModel:"Help$NewSupportRequestCommandViewModel",details:{blade:"HelpRequestBlade",
bladeExtension:"Microsoft_Azure_Support",additionalInputArguments:[{property:"collectorBindingInternals-inputs",
valuesFrom:[{referenceType:4,property:"content.privateFcTpBI.inputs"}]},{property:"collectorBindingInternals-errors",
valuesFrom:[{referenceType:4,property:"content.privateFcTpBI.errors"}]},{property:"stepInput",valuesFrom:
[{referenceType:4,property:"content.stepInput"}]}],outputArguments:[{property:"fromProviderBindingInternals.outputs",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-outputs"}]},{property:"fromProviderBindingInternals.commit",
valuesFrom:[{referenceType:1,property:"collectorBindingInternals-commit"}]},{property:"stepOutput",valuesFrom:
[{referenceType:1,property:"stepOutput"}]}]},commandKind:2,bindings:[]}]},{name:"ResourceMapPartCommands",
commands:[{name:"ResourceMapRefreshCommand",text:e.refreshCommandText,viewModel:"ResourceMap$ResourceMapRefreshCommandViewModel",
commandKind:0,bindings:[{property:"partRefreshId",valuesFrom:[{referenceType:0,property:"content.partRefreshId"}]}]}]},
{name:"ResourceMapPinnedPartCommands",commands:[{name:"ResourceMapRefreshCommand",text:e.refreshCommandText,
viewModel:"ResourceMap$ResourceMapRefreshCommandViewModel",commandKind:0,bindings:[{property:"partRefreshId",
valuesFrom:[{referenceType:0,property:"content.partRefreshId"}]}]}]},{name:"ResourceListPinnedPartCommands",
commands:[{name:"ResourceMapRefreshCommand",text:e.refreshCommandText,viewModel:"ResourceMap$ResourceMapRefreshCommandViewModel",
commandKind:0,bindings:[{property:"partRefreshId",valuesFrom:[{referenceType:0,property:"content.partRefreshId"}]}]}]},
{name:"ResourceGroupMapPartCommands",commands:[{name:"ResourceMapRefreshCommand",text:e.refreshCommandText,
viewModel:"ResourceMap$ResourceMapRefreshCommandViewModel",commandKind:0,bindings:[{property:"partRefreshId",
valuesFrom:[{referenceType:0,property:"content.partRefreshId"}]}]}]},{name:"ResourceGroupMapPinnedPartCommands",
commands:[{name:"ResourceMapRefreshCommand",text:e.refreshCommandText,viewModel:"ResourceMap$ResourceMapRefreshCommandViewModel",
commandKind:0,bindings:[{property:"partRefreshId",valuesFrom:[{referenceType:0,property:"content.partRefreshId"}]}]}]},
{name:"ResourceGroupListPinnedPartCommands",commands:[{name:"ResourceMapRefreshCommand",text:e.refreshCommandText,
viewModel:"ResourceMap$ResourceMapRefreshCommandViewModel",commandKind:0,bindings:[{property:"partRefreshId",
valuesFrom:[{referenceType:0,property:"content.partRefreshId"}]}]}]}],htmlTemplates:{pdc0d9298c572ac484a92da2926fe48f181:
{file:"HubsExtension/Deployments/Templates/DeployFromTemplatePart.html",content:'<div class="msportalfx-form msportalfx-form-create msportalfx-form-vertical-compact" data-bind="formElement: generalSection"><\/div>'},
pdc453cf91dd7354e1c869ece5e26bbbd7f:{file:"HubsExtension/Deployments/Templates/TemplateEditorPartTemplate.html",
content:'<div data-bind="pcEditor: editorViewModel"><\/div>'},pdc716b1fd15bce4e3dab78fb16eed67e97:{file:
"HubsExtension/Deployments/Templates/ParametersEditorPartTemplate.html",content:'﻿<div class="msportalfx-form" data-bind="formElement: generalSection"><\/div>'},
pdc5e0c74295a5d481e94543718c799f717:{file:"HubsExtension/BrowseResource/PickerResourceGroup.pdl",content:
'<div data-bind="pcPickerV3: $root"><\/div>'},pdca6b57a20cf594e7ab0826dd6597aea3b:{file:"HubsExtension/Tags/Templates/ResourceTagsListPartTemplate.html",
content:"<div class='msportalfx-form ext-hubs-tags'> <div class='msportalfx-clearfix' data-bind='visible: allowAdding'> <div data-bind=\"pcControl: section\"><\/div> <span class=\"ext-hubs-tags-add-colon\">:<\/span> <div data-bind='text: tagsWarningMessage' class=\"msportalfx-text-subheader msportalfx-text-muted-50 ext-hubs-tags-add-maxtagsmessage\"><\/div> <\/div> <div data-bind='pcControl: tagsGridViewModel' class='ext-hubs-tags-grid'><\/div> <\/div> "},
pdc56c37daad7804bceb458da80e723276b:{file:"HubsExtension/Settings/Templates/SettingsPartTemplate.html",
content:'<div class="ext-hubs-settings-theme-picker-label msportalfx-text-muted-50" data-bind="text: themePickerLabel"><\/div> <div class=\'ext-hubs-settings-theme-picker\' data-bind=\'if: $data.themes().length\'> <ul data-bind=\'foreach: $data.themes\'> <li class="msportalfx-brdr-color" data-bind="click: onClick, css: {\'msportalfx-brdr-selected\': $root.selectedTheme().name === theme.name}"> <img data-bind=\'attr: { src: theme.imageUri, title: theme.title }\'> <\/li> <\/ul> <\/div> <div class="msportalfx-form msportalfx-form-full"> <div style="margin: 0" class="msportalfx-form-section"> <div data-bind="formElement: jumpBarLabelsVisibility"><\/div> <div data-bind="formElement: commandLabelsVisibility"><\/div> <div data-bind="formElement: animationToggle"><\/div> <div class="msportalfx-form-section-label-donotuse msportalfx-text-muted-50" data-bind="text: portalLayoutLabel"><\/div> <div class="msportalfx-form-section-button-donotuse" data-bind="text: restoreDefaultButtonText, pcControl: restoreDefaultButton"><\/div> <div style="margin: 0" data-bind=\'formElement: languageSelectorViewModel\'><\/div> <div data-bind=\'formElement: localeSelectorViewModel\'><\/div> <\/div> <\/div> '},
pdcd8794b921dbb4b37a288750baf1c688f:{file:"HubsExtension/Settings/Templates/LanguageGridTemplate.html",
content:'<div data-bind="pcControl: itemsGridViewModel"><\/div>'},pdcb265077f7c0d41658f03ef5e4c71c61a:
{file:"HubsExtension/ResourceMap/Templates/DeploymentOperationsPartTemplate.html",content:"<div data-bind='pcControl: deploymentOperationsGridViewModel'><\/div>"},
pdc7d9adf239d104ceaa0e00637cd2ac849:{file:"HubsExtension/ResourceMap/Templates/ResourceGroupDeleteWarningPartTemplate.html",
content:'<div class="msportalfx-form msportalfx-form-compact msportalfx-clearfix"> <div style="width: 50px; height: 50px; margin-right: 15px; float: left; vertical-align: middle;" data-bind="image: icon"><\/div> <div class="msportalfx-text-regular" style="vertical-align: middle;" data-bind="text: warning"><\/div> <\/div> <div class="msportalfx-partdivider" style="margin-top: 25px; margin-bottom: 28px;"><\/div> <div class="msportalfx-form msportalfx-form-compact msportalfx-clearfix"> <div class="msportalfx-text-label" style="margin-bottom: 4px;" data-bind="text: confirmationLabel"><\/div> <div style="width: 100%;" data-bind="pcControl: confirmationEditor"><\/div> <\/div> <div class="msportalfx-partdivider" style="margin-top: 30px; margin-bottom: 0; padding-bottom: 0;"><\/div> '},
pdcfabedab6ed3f458c8b483aae23345c60:{file:"HubsExtension/ResourceMap/ResourceGroups.pdl",content:'<div data-bind="pcGrid: settingList"><\/div>'},
pdc509354bbecb24a66b8406a8bfb298eb4:{file:"HubsExtension/ClassicAdmins/Templates/ManagementTeamMembersHtmlTemplate.html",
content:"<div data-bind='pcControl: editableGridViewModel'><\/div> "},pdce7452ecfe43d41dc8adc65154d7202b9:
{file:"HubsExtension/ServicesHealth/Templates/MapGridBladePart.html",content:'<div data-bind="with: map" class="ext-map ext-blademap"> <img data-bind="attr: { src: uri }" alt=""/> <div data-bind="foreach: points"> <div data-bind="style: { left: cssX, top: cssY }, image: icon"><\/div> <\/div> <\/div> <div data-bind="pcControl: grid"><\/div> '},
pdc1113cbaf9bf24d5280e1a134f6b71518:{file:"HubsExtension/ServicesHealth/Templates/ServiceRegionBladePart.html",
content:'<!-- ko if: serviceRegion --> <div class="ext-incidentspart"> <!-- ko if: serviceRegion().incidents().length === 0 --> <div class="ext-noIncidents msportalfx-text-header-regular"> <div data-bind="image: MsPortalFx.Base.Images.Polychromatic.GlobeSuccess()"><\/div> <div data-bind="text: noIncidentsMessage"><\/div> <\/div> <!-- /ko --> <!-- ko foreach: serviceRegion().incidents --> <div class="msportalfx-text-header-regular" data-bind="text: title"><\/div> <!-- ko foreach: messages --> <div> <div class="ext-incidenttime msportalfx-text-subheader" data-bind="text: time"><\/div> <div class="msportalfx-text-regular" data-bind="text: details"><\/div> <\/div> <!-- /ko --> <!-- /ko --> <\/div> <!-- /ko --> '},
pdc7345d466f6824b65980f06db41aa48ab:{file:"HubsExtension/ServicesHealth/Templates/ServiceHealthListPart.html",
content:'<div data-bind="pcGrid: serviceHealthGrid"><\/div>'},pdc0d28be96ec3c4c1eb6b24af48c63c456:{file:
"HubsExtension/Pickers/RegionPicker.pdl",content:'<div data-bind="pcControl: $root" style="margin-top: -20px"><\/div>'},
pdc7e3209b48f7348378b55dc293782ec3d:{file:"HubsExtension/Pickers/ResourceGroupPicker.pdl",content:'<div data-bind="pcPicker: $root"><\/div>'},
pdc1532f14277094fb3b0b3fc218a30d62c:{file:"HubsExtension/Pickers/Templates/CreateResourceGroupFormHtmlTemplate.html",
content:'<div data-bind="fxParameterCollector: $root"><\/div> <div class="msportalfx-form"> <div data-bind="formElement: generalSection"> <div data-bind="formElement: resourceGroupName"><\/div> <\/div> <\/div> '},
pdc71afb3f69f7644c4a8dff8000a4a9dcd:{file:"HubsExtension/Help/Templates/WhatsNewDetailsTemplate.html",
content:'<div class="ext-whatsNew"> <div class="ext-video-section"> <a data-bind="text: whatsNewVideoTitle"><\/a> <p data-bind="text: whatsNewVideoDescription"><\/p> <video controls data-bind="attr: { poster: whatsNewVideoPoster }"> <source src="https://go.microsoft.com/fwlink/?LinkID=522341" type="video/mp4"> <\/video> <\/div> <!-- ko if: feedLoaded --> <!-- ko foreach: templateSections --> <div class="ext-whatsNew-section"> <a data-bind="attr: { href: uri }, text: title" target="_blank"><\/a> <div class="ext-whatsNew-content" data-bind="html: content"><\/div> <div class="msportalfx-text-small ext-whatsNew-published" data-bind="text: published"><\/div> <\/div> <div class="msportalfx-partdivider ext-whatsNew-divider"><\/div> <!-- /ko --> <!-- /ko --> <!-- ko ifnot: feedLoaded --> <div class="ext-whatsNew-feedLoadFailed msportalfx-clearfix"> <div class="ext-whatsNew-failed-image" data-bind="image: MsPortalFx.Base.Images.Polychromatic.ErrorIcon()"><\/div> <div class="ext-whatsNew-failed-text msportalfx-clearfix"> <h1 data-bind="text: feedLoadFailedTitleText"><\/h1> <div class="ext-whatsNew-feedLoadFailed-text" data-bind="text: feedLoadFailedText"><\/div> <\/div> <\/div> <!-- /ko --> <\/div>'},
pdc674408dd16534e288e05b16e38cd8872:{file:"HubsExtension/Help/Subscriptions.pdl",content:'<div data-bind="pcNotice: $root"><\/div>'},
pdc14302fe28f8042109a7246e42fffef11:{file:"HubsExtension/Help/Templates/TourDetailsTemplate.html",content:
'<div class="ext-tour-blade msportalfx-pannable-all-children"> <!-- What\'s new--> <div class="ext-tour-section ext-tour-section-whatsnew"> <h1 data-bind="text: whatsNewVideoTitle"><\/h1> <h3 data-bind="text: whatsNewVideoDescription"><\/h3> <video controls data-bind="attr: { poster: whatsNewVideoPoster }"> <source src="https://go.microsoft.com/fwlink/?LinkID=522341" type="video/mp4"> <\/video> <\/div> <!-- Welcome --> <div class="ext-tour-section ext-tour-section-welcome"> <h1 data-bind="text: welcomeSectionTitle"><\/h1> <h3 data-bind="text: welcomeSectionDescription"><\/h3> <\/div> <div class="ext-tour-divider msportalfx-partdivider"><\/div> <!-- Startboard --> <div class="ext-tour-section msportalfx-clearfix"> <div class="ext-tour-leftColumn ext-tour-startboardRightClick"> <div class="ext-tour-subsection"> <h2 data-bind="text: startboardSectionTitle"><\/h2> <div data-bind="text: startboardSectionDescription"><\/div> <\/div> <div class="ext-tour-subsection"> <h2 data-bind="text: rightClickSectionTitle"><\/h2> <div data-bind="text: rightClickSectionDescription"><\/div> <\/div> <\/div> <div class="ext-tour-rightColumn ext-tour-startboardImage" data-bind="image: startboardRightClickSectionIcon"><\/div> <\/div> <div class="ext-tour-divider msportalfx-partdivider"><\/div> <!-- Hubs --> <div class="ext-tour-section ext-tour-hubs msportalfx-clearfix"> <div class="ext-tour-leftColumn"> <h2 data-bind="text: hubsSectionTitle"><\/h2> <!-- ko foreach: hubsSections --> <div class="ext-tour-subsection msportalfx-clearfix"> <div class="ext-tour-section-icon" data-bind="image: icon"><\/div> <h4 data-bind="text: title"><\/h4> <div><span data-bind="text: description"><\/span><\/div> <\/div> <!-- /ko --> <\/div> <div class="ext-tour-rightColumn ext-tour-hubsImage" data-bind="image: hubsSectionIcon"><\/div> <\/div> <div class=\'ext-tour-divider msportalfx-partdivider\'><\/div> <!-- Blades --> <div class="ext-tour-section msportalfx-clearfix"> <div class="ext-tour-leftColumn ext-tour-bladeImage" data-bind="image: bladeSectionIcon"><\/div> <div class="ext-tour-rightColumn ext-tour-blade"> <div class="ext-tour-subsection"> <h2 data-bind="text: bladeSectionTitle"><\/h2> <h3 data-bind="text: bladeSectionSubTitle"><\/h3> <div data-bind="text: bladeSectionDescription"><\/div> <\/div> <div class="ext-tour-subsection"> <button class="ext-tour-blades-button" data-bind="pcControl: bladeSectionButton, pcHotSpot: moreAboutBladesSelectable, text: bladeSectionButtonText"><\/button> <\/div> <\/div> <\/div> <div class="ext-tour-divider msportalfx-partdivider"><\/div> <\/div>'},
pdc2388625e7afc48c7be6feb7d5a1a7075:{file:"HubsExtension/Help/Templates/TourBladesDetailsTemplate.html",
content:'<div class="ext-tour-blade msportalfx-pannable-all-children"> <div class="ext-tour-section msportalfx-clearfix"> <div class="ext-tour-leftColumn ext-tour-blades"> <div class="ext-tour-subsection ext-tour-blades-commands"> <h2 data-bind="text: commandsSectionTitle"><\/h2> <div data-bind="text: commandsSectionDescription"><\/div> <\/div> <div class="ext-tour-subsection ext-tour-blades-lenses"> <h2 data-bind="text: lensesSectionTitle"><\/h2> <div data-bind="text: lensesSectionDescription1"><\/div> <div data-bind="text: lensesSectionDescription2"><\/div> <\/div> <div class="ext-tour-subsection ext-tour-blades-parts"> <h2 data-bind="text: partsSectionTitle"><\/h2> <div data-bind="text: partsSectionDescription1"><\/div> <div data-bind="text: partsSectionDescription2"><\/div> <\/div> <div class="ext-tour-subsection"> <button class="ext-tour-customizing-button" data-bind="pcControl: customizingSectionButton, pcHotSpot: customizingSelectable, text: customizingSectionButtonText"><\/button> <\/div> <\/div> <div class="ext-tour-rightColumn ext-tour-bladesImage" data-bind="image: bladesSectionIcon"><\/div> <\/div> <div class="ext-tour-divider msportalfx-partdivider"><\/div> <\/div>'},
pdc2dfebbc839ec49c39f89aae9df2bc8d2:{file:"HubsExtension/Help/Templates/TourCustomizingDetailsTemplate.html",
content:'<div class="ext-tour-blade msportalfx-pannable-all-children"> <!-- Pin to Startboard --> <div class="ext-tour-section ext-tour-section-pinning"> <h2 data-bind="text: pinToStartboardSectionTitle"><\/h2> <div class="ext-tour-customizeImageWrapper msportalfx-clearfix"> <div class="ext-tour-pinToStartboardImage" data-bind="image: pinningSectionPinIcon"><\/div> <\/div> <div data-bind="text: pinToStartboardSectionDescription"><\/div> <\/div> <div class="ext-tour-divider msportalfx-partdivider"><\/div> <!-- Organize Mode --> <div class="ext-tour-section"> <h2 data-bind="text: organizeModeSectionTitle"><\/h2> <div class="ext-tour-organizeModeImage" data-bind="image: organizeModeSectionIcon"><\/div> <div data-bind="text: organizeModeSectionDescription"><\/div> <\/div> <div class="ext-tour-divider msportalfx-partdivider"><\/div> <!-- Resize --> <div class="ext-tour-section"> <h2 data-bind="text: resizeSectionTitle"><\/h2> <div class="ext-tour-resizeImage" data-bind="image: resizeSectionIcon"><\/div> <div class="ext-tour-resizeText" data-bind="text: resizeSectionDescription"><\/div> <\/div> <div class="ext-tour-divider msportalfx-partdivider"><\/div> <!-- End of Tour text --> <div class="ext-tour-section ext-tour-section-endOfTour"> <h2 data-bind="text: endOfTourSectionTitle"><\/h2> <\/div> <\/div>'},
pdc60ed25e769cd46d88372658e686fb48d:{file:"HubsExtension/Help/Templates/HelpDetailsTemplate.html",content:
'<div class="msportalfx-fill" data-bind="foreach: templateSections"> <div class="ext-help-listitem msportalfx-clearfix msportalfx-pannable-all-children"> <div class="ext-help-listitem-image" data-bind="image: image"><\/div> <div class="ext-help-listitem-text"> <h2 class="ext-help-listitem-text-header msportalfx-text-header-regular" data-bind="text: title"><\/h2> <div class="ext-help-listitem-text-regular msportalfx-text-regular" data-bind="text: description"><\/div> <ul class="msportalfx-text-regular msportalfx-removeDefaultListStyle" data-bind="foreach: links"> <!-- ko if: $data.click !== undefined --> <li> <span class="ext-help-serviceDashboardHotSpot" data-bind="pcHotSpot: click, text: title"><\/span> <div class="ext-help-linkImage ext-help-linkImageInternal" data-bind="image: $root.internalLinkIcon"><\/div> <\/li> <!-- /ko --> <!-- ko if: $data.click === undefined --> <li> <span><a target="_blank" data-bind="text: title, attr: { href: href }"><\/a><\/span> <div class="ext-help-linkImage" data-bind="image: $root.externalLinkIcon"><\/div> <\/li> <!-- /ko --> <\/ul> <\/div> <\/div> <\/div> '},
pdc82d30d2a1275435b92593775b2d232a9:{file:"HubsExtension/Gallery/Templates/GalleryFeaturedMenuItemTemplate.html",
content:"<div class='msportalfx-form msportalfx-form-full'> <div class='ext-gallery-search-textbox' data-bind='formElement: searchTextBoxField' style=\"margin-bottom: -25px\"><\/div> <!--The style doesn't get applied in IE if put in css--> <div class='ext-gallery-featured-hero' data-bind='pcControl: galleryHeroControlViewModel, visible: !galleryIsSearching() && galleryHeroControlVisible()'><\/div> <div data-bind='pcControl: galleryControlViewModel, visible: !galleryIsSearching()' class='ext-gallery-featured-gallery-control'><\/div> <div data-bind='text: galleryNoResultsMessage, visible: galleryIsSearching()' class='msportalfx-text-header ext-gallery-search-title'><\/div> <div data-bind='pcControl: gallerySearchControlViewModel, visible: galleryIsSearching()' class='ext-gallery-featured-gallery-control'><\/div> <\/div> "},
pdc9f2f0a3144dd4f7a89cc335e2627a54a:{file:"HubsExtension/Gallery/Templates/GalleryItemDetailsTemplate.html",
content:'<div class=\'msportalfx-fill ext-gallery-details-container\'> <div class=\'msportalfx-text-regular ext-gallery-details-description\'> <p data-bind=\'sanitizedHtml: galleryItemDescription\'><\/p> <\/div> <div class=\'ext-gallery-details-social\'> <div class=\'ext-gallery-details-social-icon\'> <a data-bind="attr: {href: twitterShareUri}" target="_blank" href=""> <div data-bind="image: twitterIcon"><\/div> <\/a> <\/div> <div class=\'ext-gallery-details-social-icon\'> <a data-bind="attr: {href: facebookShareUri}" target="_blank" href=""> <div data-bind="image: facebookIcon"><\/div> <\/a> <\/div> <div class=\'ext-gallery-details-social-icon\'> <a data-bind="attr: {href: linkedInShareUri}" target="_blank" href=""> <div data-bind="image: linkedInIcon"><\/div> <\/a> <\/div> <div class=\'ext-gallery-details-social-icon\'> <a data-bind="attr: {href: yammerShareUri}" target="_blank" href=""> <div data-bind="image: yammerIcon"><\/div> <\/a> <\/div> <div class=\'ext-gallery-details-social-icon\'> <a data-bind="attr: {href: googlePlusShareUri}" target="_blank" href=""> <div data-bind="image: googlePlusIcon"><\/div> <\/a> <\/div> <div class=\'ext-gallery-details-social-icon\'> <a data-bind="attr: {href: emailShareUri}" target="_blank" href=""> <div data-bind="image: emailIcon"><\/div> <\/a> <\/div> <\/div> <div class=\'msportalfx-partdivider\'><\/div> <div> <img data-bind=\'visible: screenshotUri, attr: { src: screenshotUri }\' class=\'ext-gallery-details-screenshot\' alt=\'\'/> <\/div> <div class=\'msportalfx-partdivider\' data-bind=\'visible: screenshotUri\'><\/div> <\/div> '},
pdc8cf2c9f81dda4304a2e02ad544fbf091:{file:"HubsExtension/Gallery/Templates/PCGalleryResultsListPartTemplate.html",
content:"<div data-bind='pcControl: gridViewModel'><\/div>"},pdcaf74bd04908546d9b4dbe0bc2150180d:{file:
"HubsExtension/Gallery/Templates/PricingSummaryPartTemplate.html",content:"<div class='msportalfx-fill'> <div data-bind=\"visible: showRegularResourcesPricingGrid\"> <div data-bind='text: regularResourcesGridHeaderText' class='msportalfx-text-header-regular ext-gallery-pricing-grid-header msportalfx-number-small'><\/div> <div data-bind='pcControl: regularResourcesPricingGrid' class='ext-gallery-pricing-margin'><\/div> <div data-bind='visible: trialTotalAmount' class='msportalfx-clearfix msportalfx-number-small ext-gallery-pricing-grid-total'> <span data-bind='text: trialTotalAmount'><\/span> <span data-bind='text: trialTotalUnit'><\/span> <\/div> <div class='msportalfx-clearfix msportalfx-number-small ext-gallery-pricing-grid-total'> <span data-bind='text: regularResourcesTotalAmount'><\/span> <span data-bind='text: regularResourcesTotalUnit'><\/span> <\/div> <div data-bind='visible: freeTrialLegalNotice, text: freeTrialLegalNotice' class='ext-gallery-pricing-grid-total'><\/div> <\/div> <div data-bind='visible: failureMessage, text: failureMessage' class='msportalfx-text-header-regular ext-gallery-pricing-legal-details-content'><\/div> <div data-bind='visible: showUsageResourcesPricingGrid'> <div data-bind='text: usageResourcesGridHeaderText' class='msportalfx-text-header-regular ext-gallery-pricing-inline-title msportalfx-number-small'><\/div> <div data-bind='pcControl: usageResourcesPricingGrid' class='ext-gallery-pricing-margin'><\/div> <div data-bind='text: usageResourcesGridNotice' class='ext-gallery-pricing-grid-total'><\/div> <\/div> <div data-bind='visible: loadingMessage, text: loadingMessage' class='msportalfx-text-header-regular ext-gallery-pricing-legal-details-content'><\/div> <\/div> "},
pdcb63cf44f09aa46f7846655711f36ec2a:{file:"HubsExtension/Gallery/Templates/LegalTermsPartTemplate.html",
content:"<div class='msportalfx-fill'> <div data-bind='visible: showThirdPartyExtensionsGrid'> <div data-bind='text: gridHeaderText' class='msportalfx-text-header-regular ext-gallery-pricing-grid-header msportalfx-number-small'><\/div> <div data-bind='pcControl: thirdPartyExtensionsGrid'><\/div> <div data-bind='sanitizedHtml: gridFooterHtml' class='ext-gallery-pricing-grid-total'><\/div> <div data-bind='visible: freeTrialLegalNotice, text: freeTrialLegalNotice' class='ext-gallery-pricing-grid-total'><\/div> <div data-bind='text: legalTermsTitle' class='msportalfx-text-header-regular ext-gallery-pricing-inline-title msportalfx-number-small'><\/div> <div data-bind='sanitizedHtml: legalTermsHtml' class='ext-gallery-pricing-grid-total'><\/div> <\/div> <div data-bind='visible: failureMessage, text: failureMessage' class='msportalfx-text-header-regular ext-gallery-pricing-legal-details-content'><\/div> <div data-bind='visible: loadingMessage, text: loadingMessage' class='msportalfx-text-header-regular ext-gallery-pricing-legal-details-content'><\/div> <\/div> "},
pdcc2413f6283eb4635b03772cd737d22d0:{file:"HubsExtension/Gallery/Templates/LegalTermsDetailsPartTemplate.html",
content:"<div data-bind='sanitizedHtml: htmlContent' class='msportalfx-fill msportalfx-text-regular ext-gallery-pricing-legal-details-content'><\/div>"},
pdc14916fbbf91147989df67522873c31ad:{file:"HubsExtension/Gallery/Templates/GalleryCreateMenuPartTemplate.html",
content:"<div class='ext-gallery-create-menu-content'> <div data-bind='text: browseTitle' class=\"ext-gallery-create-menu-title msportalfx-text-header-regular\"><\/div> <div class=\"ext-gallery-create-menu-line msportalfx-bgcolor-k0t1\"><\/div> <div data-bind='pcControl: curationMenuGrid' class='ext-gallery-create-menu-column-div ext-gallery-create-menu-grid'><\/div> <div data-bind='text: recentTitle' class=\"ext-gallery-create-menu-title msportalfx-text-header-regular\"><\/div> <div class=\"ext-gallery-create-menu-line msportalfx-bgcolor-k0t1\"><\/div> <div class=\"ext-gallery-create-menu-message msportalfx-text-header-regular msportalfx-bg-dark\" data-bind='visible: isRecentMessageVisible, text: recentMessage'><\/div> <div data-bind='pcControl: recentlyUsedGrid, visible: !isRecentMessageVisible()' class='ext-gallery-create-menu-recentgrid ext-gallery-create-menu-column-div'><\/div> <\/div>"},
pdcf0af62da66f648c7a82518f06531e415:{file:"HubsExtension/Gallery/Templates/GalleryCreateMenuResultsListPartTemplate.html",
content:"<div data-bind='pcControl: resultsListGrid' class='ext-gallery-list-menu-grid msportalfx-overflowY'><\/div> <div data-bind='pcHotSpot: $data.marketplaceHotspot' class='ext-gallery-list-menu-hotspot'> <div class='ext-gallery-create-menu-content'> <div class='ext-gallery-float-left ext-gallery-list-menu-marketplace'> <div class='msportalfx-text-header-regular' data-bind='text: marketplaceName'><\/div> <div class='msportalfx-text-regular ext-gallery-list-menu-find msportalfx-text-ellipsis' data-bind='text: marketplaceMessage'><\/div> <\/div> <div data-bind='image: chevronImage' class='ext-gallery-list-menu-chevron'><\/div> <\/div> <\/div> <div class=\"ext-gallery-list-menu-line msportalfx-bgcolor-k0t1\"><\/div>"},
pdc3bfda9d7fa5040bf8a80d786e3cb7f70:{file:"HubsExtension/Gallery/Templates/GalleryCreateComingSoonPartTemplate.html",
content:'<div class="ext-gallery-createnotice-content"> <div class="ext-gallery-createnotice-background" data-bind="style: {\'background-image\': backgroundImage()}"><\/div> <div class="ext-gallery-createnotice-foreground"> <div class="ext-gallery-comingsoon-top"> <div class="ext-gallery-createnotice-title ext-gallery-createnotice-inline"> <div class="msportalfx-text-header" data-bind="text: tagline"><\/div> <div class="msportalfx-text-createsectionheader" data-bind="text: displayName"><\/div> <\/div> <div class="ext-gallery-comingsoon-icon ext-gallery-createnotice-inline" data-bind="style: {\'background-image\': portalIcon()}"><\/div> <\/div> <div class="ext-gallery-createnotice-description" data-bind="text: description"> <\/div> <div class="ext-gallery-createnotice-action ext-gallery-createnotice-inline"> <a data-bind="attr: {href: linkUri}" target="_blank" href=""> <div class="ext-gallery-createnotice-inline"> <span class="ext-gallery-createnotice-actiontext ext-gallery-createnotice-inline msportalfx-text-createsectionheader" data-bind="text: linkText"><\/span> <span class="ext-gallery-createnotice-arrow ext-gallery-createnotice-inline" data-bind="image: linkArrow"><\/span> <\/div> <\/a> <\/div> <\/div> <\/div>'},
pdcfc95c9c738634030b3b1ba335ff97baf:{file:"HubsExtension/Gallery/Templates/GalleryCreateSubscriptionPartTemplate.html",
content:'<div class="ext-gallery-createnotice-content"> <div class="ext-gallery-createnotice-background" data-bind="style: {\'background-image\': backgroundImage()}"><\/div> <div class="ext-gallery-createnotice-foreground"> <div class="ext-gallery-subscription-top"> <div class="ext-gallery-createnotice-title ext-gallery-createnotice-inline"> <div class="msportalfx-text-header" data-bind="text: tagline"><\/div> <div class="msportalfx-text-createsectionheader" data-bind="text: displayName"><\/div> <\/div> <div class="ext-gallery-subscription-icon ext-gallery-createnotice-inline" data-bind="style: {\'background-image\': portalIcon()}"><\/div> <\/div> <div class="ext-gallery-createnotice-description" data-bind="text: description"> <\/div> <div class="ext-gallery-createnotice-action ext-gallery-createnotice-inline"> <a data-bind="attr: {href: linkUri}" target="_blank" href=""> <div class="ext-gallery-createnotice-inline"> <span class="ext-gallery-createnotice-actiontext ext-gallery-createnotice-inline msportalfx-text-createsectionheader" data-bind="text: linkText"><\/span> <span class="ext-gallery-createnotice-arrow ext-gallery-createnotice-inline" data-bind="image: linkArrow"><\/span> <\/div> <\/a> <\/div> <\/div> <\/div>'},
pdc0371630505fd44699f1459ab65dcc0d4:{file:"HubsExtension/BrowseResource/Templates/BrowseResourceColumnsListPart.html",
content:"<div data-bind='pcGrid: columnsGridViewModel'><\/div> "},pdc5b9b0414678845e1923bffe2b35f5a16:
{file:"HubsExtension/SubscriptionsFilter/Templates/ResourceFilterPart.html",content:"<div class=\"msportalfx-clearfix msportalfx-form ext-hubs-resourcefilter\"> <div class=\"ext-hubs-resourcefilter-filter\" data-bind=\"formElement: filterVM, css: {'ext-hubs-resourcefilter-hidden': !showFilter(), 'ext-hubs-resourcefilter-full': showFilter() && !showSubscriptions(), 'ext-hubs-resourcefilter-left': showFilter() && showSubscriptions()}\"><\/div> <div class=\"ext-hubs-resourcefilter-subscriptions\" data-bind=\"formElement: subscriptionsVM ,css {'ext-hubs-resourcefilter-hidden': !showSubscriptions(), 'ext-hubs-resourcefilter-full': !showFilter() && showSubscriptions(), 'ext-hubs-resourcefilter-right': showFilter() && showSubscriptions()}\"><\/div> <\/div>"},
pdc9ca85a0d0b23424ea49738bc313a1f55:{file:"HubsExtension/SpecPickerV3/Templates/PricingTierLauncher.html",
content:'<div class="msportalfx-pricingTier"> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Mini --> <div class="msportalfx-number-medium msportalfx-pricingTier-specCode" data-bind="text: displayBinding.specCode, style: { color: displayBinding.specCodeColor }"><\/div> <div class="msportalfx-pricingTier-specTitle" data-bind="text: displayBinding.partTitle"><\/div> <!-- /ko --> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Small --> <div class="msportalfx-pricingTier-textContainer"> <!-- ko if: displayBinding.specCode--> <div class="msportalfx-number-medium msportalfx-pricingTier-specCode msportalfx-tooltip-overflow" data-bind="text: displayBinding.specCode, style: { color: displayBinding.specCodeColor }"><\/div> <!-- /ko --> <div class="msportalfx-pricingTier-promotedFeatures"> <div class="msportalfx-tooltip-overflow"> <span data-bind="text: displayBinding.firstNumber"><\/span> <span data-bind="text: displayBinding.firstText" class="msportalfx-pricingTier-firstText"><\/span> <\/div> <div class="msportalfx-tooltip-overflow"> <span data-bind="text: displayBinding.secondNumber"><\/span> <span data-bind="text: displayBinding.secondText" class="msportalfx-pricingTier-secondText"><\/span> <\/div> <\/div> <\/div> <!-- /ko --> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Normal --> <div class="msportalfx-pricingTier-normal-iconContainer"> <div class="msportalfx-layoutChildren-horizontal-inlineblock" data-bind="foreach: displayBinding.featureIcons"> <div class="msportalfx-layoutChildren-child"> <div class="msportalfx-pricingTier-icon" data-bind="image: iconImage, css: { \'msportalfx-svg-disabled\': isDisabled }, attr: {title: title}"><\/div> <\/div> <\/div> <\/div> <div class="msportalfx-pricingTier-textContainer"> <!-- ko if: displayBinding.specCode--> <div class="msportalfx-number-medium msportalfx-pricingTier-specCode msportalfx-tooltip-overflow" data-bind="text: displayBinding.specCode, style: { color: displayBinding.specCodeColor }"><\/div> <!-- /ko --> <div class="msportalfx-pricingTier-promotedFeatures"> <div class="msportalfx-tooltip-overflow"> <span data-bind="text: displayBinding.firstNumber"><\/span> <span data-bind="text: displayBinding.firstText" class="msportalfx-pricingTier-firstText"><\/span> <\/div> <div class="msportalfx-tooltip-overflow"> <span data-bind="text: displayBinding.secondNumber"><\/span> <span data-bind="text: displayBinding.secondText" class="msportalfx-pricingTier-secondText"><\/span> <\/div> <\/div> <\/div> <!-- /ko --> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Wide --> <div class="msportalfx-pricingTier-wide-iconContainer"> <div class="msportalfx-layoutChildren-horizontal-inlineblock" data-bind="foreach: displayBinding.featureIcons"> <div class="msportalfx-layoutChildren-child"> <div class="msportalfx-pricingTier-icon" data-bind="image: iconImage, css: { \'msportalfx-svg-disabled\': isDisabled }, attr: {title: title}"><\/div> <\/div> <\/div> <\/div> <div class="msportalfx-pricingTier-textContainer"> <!-- ko if: displayBinding.specCode--> <div class="msportalfx-number-medium msportalfx-pricingTier-specCode msportalfx-tooltip-overflow" data-bind="text: displayBinding.specCode, style: { color: displayBinding.specCodeColor }"><\/div> <!-- /ko --> <div class="msportalfx-pricingTier-promotedFeatures"> <div class="msportalfx-tooltip-overflow"> <span data-bind="text: displayBinding.firstNumber"><\/span> <span data-bind="text: displayBinding.firstText" class="msportalfx-pricingTier-firstText"><\/span> <\/div> <div class="msportalfx-tooltip-overflow"> <span data-bind="text: displayBinding.secondNumber"><\/span> <span data-bind="text: displayBinding.secondText" class="msportalfx-pricingTier-secondText"><\/span> <\/div> <\/div> <\/div> <!-- /ko --> <\/div> '},
pdca14d293483dd450ba9a8ac4656f05352:{file:"HubsExtension/SpecPickerV3/Templates/SpecPickerBrowseAll.html",
content:'<div class="ext-hubs-specPicker-container msportalfx-bg-muted"> <div class="ext-hubs-specPicker-message" data-bind="visible: message, text: message"><\/div> <!-- ko if: viewOptionsVisible --> <div class="msportalfx-specpicker-viewOptionsContainer"> <div class="msportalfx-specpicker-viewOptions"> <span data-bind="pcHotSpot: recommendedPlansHotSpot"> <span class="msportalfx-specpicker-recommendationsIcon" data-bind="image: starIcon"><\/span> <span data-bind="text: clientStrings.specPickerViewRecommendedPlans"><\/span> <\/span> | <span data-bind="pcHotSpot: allPlansHotSpot"> <span data-bind="text: clientStrings.specPickerViewAllPlans"><\/span> <\/span> <\/div> <\/div> <!-- /ko --> <div class="ext-hubs-specPicker-listView" data-bind="pcControl: specsListViewViewModel"><\/div> <\/div>'},
pdc4d402ee8e3aa4fa4bf9db0c065ffea7e:{file:"HubsExtension/ResourceMap/Templates/ResourceMapPartTemplate.html",
content:"<div class='msportalfx-fill' data-bind='pcControl: topologyViewModel'><\/div>"},pdc9880768eddbd4d9fb62cba5a80bbf162:
{file:"HubsExtension/ServicesHealth/Templates/ServicesHealthPart.html",content:'<div class="ext-servicespart"> <div class="ext-servicespart-icon" data-bind="image: icon, visible: isMainIconVisible(), css: {\r\n    \'ext-tilesize-mini\': size() === MsPortalFx.Parts.PartSize.Mini,\r\n    \'ext-tilesize-small\': size() === MsPortalFx.Parts.PartSize.Small }"><\/div> <div class="msportalfx-text-header-mini ext-title" data-bind="text: shortTitle(), visible: isShortTitleVisible()"><\/div> <div class="ext-servicespart-grid" data-bind="pcControl: grid, visible: isGridVisible()"><\/div> <div class="ext-servicespart-grid-more-data" data-bind="visible: hasMoreGridRows() && isGridVisible()">...<\/div> <div class="ext-servicespart-map" data-bind="pcControl: map, visible: isMapVisible(), css: {\r\n        \'ext-tilesize-large\': size() === MsPortalFx.Parts.PartSize.Large,\r\n        \'ext-tilesize-herowide\': size() === MsPortalFx.Parts.PartSize.HeroWide,\r\n        \'ext-tilesize-wide\': size() === MsPortalFx.Parts.PartSize.Wide\r\n    }"><\/div> <div data-bind="visible: isServiceOutageMessageVisible()"> <div class="ext-servicespart-messageIcon" data-bind="image: icon"><\/div> <div class="ext-servicespart-message msportalfx-tooltip-overflow msportalfx-text-ellipsis" data-bind="text: serviceOutageMessage(), css: {\r\n        \'ext-tilesize-large\': size() === MsPortalFx.Parts.PartSize.Large,\r\n        \'ext-tilesize-herowide\': size() === MsPortalFx.Parts.PartSize.HeroWide,\r\n        \'ext-tilesize-wide\': size() === MsPortalFx.Parts.PartSize.Wide\r\n        }"><\/div> <\/div> <\/div>'},
pdc822b46adae5f4901a680856b55dfac1f:{file:"HubsExtension/ServicesHealth/Templates/ServicesPart.html",
content:'<div class="ext-servicespart" data-bind="css: {\r\n        \'ext-tilesize-mini\': size() === MsPortalFx.Parts.PartSize.Mini,\r\n        \'ext-tilesize-small\': size() === MsPortalFx.Parts.PartSize.Small,\r\n        \'ext-tilesize-normal\': size() === MsPortalFx.Parts.PartSize.Normal,\r\n        \'ext-tilesize-large\': size() === MsPortalFx.Parts.PartSize.Large,\r\n        \'ext-tilesize-herowide\': size() === MsPortalFx.Parts.PartSize.HeroWide\r\n    }"> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Mini --> <div class="ext-content-overlay"> <div data-bind="text: title" class="msportalfx-text-header-mini ext-title"><\/div> <div data-bind="image: icon" class="ext-icon"><\/div> <\/div> <!-- /ko --> <!-- ko if: size() > MsPortalFx.Parts.PartSize.Mini --> <!-- ko if: $data.map && map() --> <div data-bind="with: map" class="ext-map"> <img data-bind="attr: { src: uri }" alt=""/> <div data-bind="foreach: points"> <div data-bind="style: { left: cssX, top: cssY }, image: icon"><\/div> <\/div> <\/div> <!-- /ko --> <div class="ext-content-overlay"> <div data-bind="text: title" class="ext-title msportalfx-text-header-regular msportalfx-text-ellipsis"><\/div> <div data-bind="text: subtitle" class="ext-subtitle msportalfx-text-subheader msportalfx-text-ellipsis"><\/div> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Small --> <div data-bind="image: icon" class="ext-icon"><\/div> <!-- /ko --> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Normal --> <div data-bind="image: icon" class="ext-icon"><\/div> <!-- ko if: $data.resourceCount --> <div data-bind="visible: size() <= MsPortalFx.Parts.PartSize.Normal" class="ext-summary"> <div data-bind="text: resourceCount" class="msportalfx-number-medium"><\/div> <div data-bind="text: resourceCountLabel" class="msportalfx-number-medium-adorn"><\/div> <\/div> <!-- /ko --> <!-- /ko --> <\/div> <!-- /ko --> <\/div>'},
pdc0fd02d9e865d45b18c5d8ef4af6c6727:{file:"HubsExtension/SpecPicker/Templates/SpecPickerBrowseAll.html",
content:'<div class="ext-hubs-specPicker-container msportalfx-bg-muted"> <div class="ext-hubs-specPicker-message" data-bind="visible: data.message, text: data.message"><\/div> <!-- ko if: viewOptionsVisible --> <div class="msportalfx-specpicker-viewOptionsContainer"> <div class="msportalfx-specpicker-viewOptions"> <span data-bind="pcHotSpot: recommendedPlansHotSpot"> <span class="msportalfx-specpicker-recommendationsIcon" data-bind="image: starIcon"><\/span> <span data-bind="text: clientStrings.specPickerViewRecommendedPlans"><\/span> <\/span> | <span data-bind="pcHotSpot: allPlansHotSpot"> <span data-bind="text: clientStrings.specPickerViewAllPlans"><\/span> <\/span> <\/div> <\/div> <!-- /ko --> <div class="ext-hubs-specPicker-listView" data-bind="pcControl: specsListViewViewModel"><\/div> <\/div>'},
pdc5fb566e44ba04eb9902a4d5dacc2ab78:{file:"HubsExtension/Help/Templates/TourTileHtmlTemplate.html",content:
'<div class=\'ext-tour-tile msportalfx-bg-secondary msportalfx-removepartpadding\' data-bind="css: { \'ext-tour-tile-mini\': size() === MsPortalFx.Parts.PartSize.Mini, \r\n                      \'ext-tour-tile-small\': size() === MsPortalFx.Parts.PartSize.Small,\r\n                      \'ext-tour-tile-normal\': size() === MsPortalFx.Parts.PartSize.Normal,\r\n                      \'ext-tour-tile-normal\': size() === MsPortalFx.Parts.PartSize.Wide }"> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Mini --> <div class="ext-tourTile-image" data-bind="image: miniTileImage"><\/div> <!-- /ko --> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Small --> <div class="ext-tourTile-image" data-bind="image: smallTileImage"><\/div> <!-- /ko --> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Normal --> <div class="ext-tourTile-image" data-bind="image: normalTileImage"><\/div> <!-- /ko --> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Wide --> <div class="ext-tourTile-image" data-bind="image: wideTileImage"><\/div> <!-- /ko --> <div class="ext-tourTile-title msportalfx-gettingstarted-part" data-bind="text: $data.title, \r\n                    css: { \'msportalfx-text-header-small\': size() === MsPortalFx.Parts.PartSize.Mini, \r\n                           \'msportalfx-text-header-small\': size() === MsPortalFx.Parts.PartSize.Small, \r\n                           \'msportalfx-text-header-regular\': size() === MsPortalFx.Parts.PartSize.Normal,\r\n                           \'msportalfx-text-header-regular\': size() === MsPortalFx.Parts.PartSize.Wide }"><\/div> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Normal --> <div class="ext-tourTile-subtitle msportalfx-text-header-regular msportalfx-gettingstarted-part" data-bind="text: $data.shortTitle"><\/div> <!-- /ko --> <!-- ko if: size() === MsPortalFx.Parts.PartSize.Wide --> <div class="ext-tourTile-subtitle msportalfx-text-header-regular msportalfx-gettingstarted-part" data-bind="text: $data.shortTitle"><\/div> <!-- /ko --> <\/div> '},
pdcb86961ec563d43239a057b6a0e1510a2:{file:"HubsExtension/Help/Templates/HelpTileHtmlTemplate.html",content:
"<div class='ext-help-tile msportalfx-bg-secondary msportalfx-removepartpadding msportalfx-clearfix' data-bind=\"css: {'ext-tile-mini': size() === MsPortalFx.Parts.PartSize.Mini,\r\n                    'ext-tile-small': size() === MsPortalFx.Parts.PartSize.Small,\r\n                    'ext-tile-normal': size() === MsPortalFx.Parts.PartSize.Normal }\"> <div class=\"ext-tile-image msportalfx-fill-white\" data-bind=\"image: $data.icon\"><\/div> <div class=\"ext-tile-title msportalfx-gettingstarted-part\" data-bind=\"text: $data.title, css: { 'msportalfx-text-header-small': size() === MsPortalFx.Parts.PartSize.Mini }\"><\/div> <\/div> "},
pdc1355afdc3ae84bcd813d63ab668d10e1:{file:"HubsExtension/Gallery/Templates/GalleryTileTemplate.html",
content:"<div class='msportalfx-fill ext-gallery-startboard-tile' data-bind=\"css: partSizeClass\"> <div class='ext-gallery-startboard-tile-icon' data-bind='image: galleryIcon'><\/div> <div class='ext-gallery-startboard-tile-title' data-bind='text: title, css: titleClass, attr: { title: title }'><\/div> <\/div> "},
pdca0c26526415e4e0298ac4ccc96c20169:{file:"HubsExtension/BrowseResource/Templates/BrowseResourceListPart.html",
content:"<!-- ko if: isInfoBoxPresent() --> <div data-bind=\"pcInfoBox: infoBoxViewModel()\"><\/div> <!-- /ko --> <div data-bind='pcGrid: resourceGridViewModel'><\/div>"},
pdc1ea98d582ee74438992b2bfb8a43d7e6:{file:"HubsExtension/BrowseResource/Templates/BrowseResourceGroupListPart.html",
content:"<div data-bind='pcControl: resourceGroupGridViewModel'><\/div>"}},styleSheets:[".ext-hubs-tags-grid{}.ext-hubs-tags{}.ext-hubs-tags-add-colon{text-align:center;display:block;margin-top:-25px;margin-left:-5px}.ext-hubs-tags-add-maxtagsmessage{margin-top:10px;margin-bottom:-10px}",
".ext-hubs-resourcefilter{}.ext-hubs-resourcefilter-hidden{display:none}.ext-hubs-resourcefilter-left{float:left;width:calc(55% - 10px)}.ext-hubs-resourcefilter-right{float:right;width:45%}.ext-hubs-resourcefilter-full{width:100%;display:block}",
".ext-hubs-settings-theme-picker-label{padding-top:8px}.ext-hubs-settings-theme-picker{position:relative;width:100%}.ext-hubs-settings-theme-picker ul{padding:0;border-color:inherit;width:100%;margin:8px -2px 14px}.ext-hubs-settings-theme-picker ul li{display:inline-block;border-width:2px;border-style:solid;border-color:transparent;max-height:75px}.ext-hubs-settings-theme-picker ul li:hover{border-width:2px;border-style:solid}.ext-hubs-settings-theme-picker ul li>img{display:block;width:124px}",
".ext-hubs-deployments-part-message{float:left;max-width:80%;white-space:nowrap;overflow:hidden}.ext-hubs-deployments-part-icon{float:right;width:16px;height:16px}",
".ext-help-tile,.ext-info-tile{position:relative}.ext-tile-mini .ext-tile-image,.ext-tile-small .ext-tile-image{width:30px;height:30px}.ext-tile-normal .ext-tile-image{width:50px;height:50px}.ext-help-tile .ext-tile-image,.ext-info-tile .ext-tile-image{position:absolute;top:18px;left:20px;width:50px;height:50px}.ext-help-tile .ext-tile-title,.ext-info-tile .ext-tile-title{position:absolute;top:35px;left:87px;width:auto}.ext-help-tile .ext-tile-title{top:36px}a.ext-info-tile{display:block}.ext-help-tile.ext-tile-mini .ext-tile-image{top:19px;left:39px;width:30px;height:30px}.ext-help-tile.ext-tile-mini .ext-tile-title{width:80%;text-align:center;left:10px;top:52px}.ext-help-tile.ext-tile-normal .ext-tile-image{top:48px;left:63px}.ext-help-tile.ext-tile-normal .ext-tile-title{top:112px;left:0;width:100%;text-align:center}.ext-info-tile.ext-tile-mini .ext-tile-image{top:19px;left:39px;width:30px;height:30px}.ext-info-tile.ext-tile-mini .ext-tile-title{width:100%;text-align:center;left:0;top:60px}.ext-info-tile.ext-tile-normal .ext-tile-image{top:48px;left:61px}.ext-info-tile.ext-tile-normal .ext-tile-title{top:112px;left:0;width:100%;text-align:center}.ext-whatsNew-content{margin:3px 0}.ext-whatsNew-published{margin:2px 0}.ext-whatsNew-divider{margin:15px 0}.ext-whatsNew-feedLoadFailed{margin-top:75px}.ext-whatsNew-feedLoadFailed .ext-whatsNew-failed-image,.ext-whatsNew-feedLoadFailed .ext-whatsNew-failed-text{float:left}.ext-whatsNew-feedLoadFailed .ext-whatsNew-failed-image{width:256px;height:256px}.ext-whatsNew-feedLoadFailed .ext-whatsNew-failed-text{width:215px;margin-left:30px}.ext-whatsNew .ext-video-section>video{width:535px;height:301px;margin-bottom:10px}",
".ext-tour-tile{position:relative}.ext-tour-tile .ext-tourTile-title,.ext-tour-tile .ext-tourTile-subtitle{left:15px;margin-right:15px;position:absolute}.ext-tour-tile .ext-tourTile-title{top:10px}.ext-tour-tile .ext-tourTile-subtitle{bottom:20px}.ext-tour-tile .ext-tourTile-image{width:100%;height:100%;position:absolute;top:0;left:0}.ext-tour-tile.ext-tour-tile-mini .ext-tourTile-title{top:64px;left:39px}.ext-tour-tile.ext-tour-tile-mini .ext-tourTile-image{left:12px;width:85px;height:85px}.ext-tour-tile.ext-tour-tile-small .ext-tourTile-title{top:40px;left:95px}.ext-tour-tile.ext-tour-tile-small .ext-tourTile-image{width:175px;height:85px}.ext-tour-blade .ext-tour-divider{margin:30px 0;display:block}.ext-tour-blade .ext-tour-section{width:auto;padding-left:0;display:block}.ext-tour-blade .ext-tour-section .ext-tour-subsection{margin-bottom:30px}.ext-tour-blade .ext-tour-section.ext-tour-hubs{margin:38px 0 -33px 0}.ext-tour-blade .ext-tour-section.ext-tour-hubs .ext-tour-subsection{margin-bottom:20px}.ext-tour-blade .ext-tour-section .ext-tour-subsection .ext-tour-section-title{margin-bottom:10px}.ext-tour-blade .ext-tour-section.ext-tour-hubs .ext-tour-leftColumn h2{margin-bottom:25px}.ext-tour-subsection.ext-tour-blades-commands{margin-top:101px}.ext-tour-subsection.ext-tour-blades-lenses{margin-top:127px}.ext-tour-subsection.ext-tour-blades-lenses div,.ext-tour-subsection.ext-tour-blades-parts div{margin-bottom:5px}.ext-tour-subsection.ext-tour-blades-parts{margin-top:184px}.ext-tour-leftColumn{float:left}.ext-tour-rightColumn{float:right}.ext-tour-leftColumn.ext-tour-startboardRightClick{width:200px;margin-bottom:-33px}.ext-tour-hubs .ext-tour-leftColumn{width:334px}.ext-tour-leftColumn.ext-tour-bladeImage{width:269px;margin:0 0 -33px -10px}.ext-tour-leftColumn.ext-tour-blades{width:150px}.ext-tour-rightColumn.ext-tour-hubsImage{width:186px}.ext-tour-rightColumn.ext-tour-blade{width:255px;margin-top:7px}.ext-tour-rightColumn.ext-tour-bladesImage{width:366px;margin-bottom:-33px}.ext-tour-section-icon,.ext-tour-section-icon img,.ext-tour-section-icon svg{width:30px;height:30px}.ext-tour-section-icon{float:left;margin:2px 15px 0 0}.ext-tour-blade .ext-tour-section .ext-tour-section-title{margin-bottom:15px}.ext-tour-section.ext-tour-section-endOfTour{text-align:center;margin-top:47px}.ext-tour-rightClickImage{margin:-10px 0 -5px 0}.ext-tour-customizeImageWrapper{margin-bottom:15px}.ext-tour-pinToStartboardImage{margin-top:-28px}.ext-tour-organizeModeImage,.ext-tour-resizeImage{margin:10px 0 25px 0}.ext-tour-resizeText{margin-left:137px;margin-top:-57px}.ext-tour-organizeModeImage{margin-top:25px}.ext-tour-section.ext-tour-section-welcome h1{margin-bottom:15px}.ext-tour-section.ext-tour-section-pinning{margin-top:10px}.ext-tour-section.ext-tour-section-whatsnew>video{width:535px;height:301px;margin:10px 0}",
".ext-help-divider{margin-bottom:45px}.ext-help-listitem{margin-bottom:30px}.ext-help-listitem .ext-help-listitem-image{float:left;padding:7px 15px 0 0}.ext-help-listitem .ext-help-listitem-image svg{width:48px;height:48px}.ext-help-listitem:first-of-type .ext-help-listitem-image{margin-top:-5px}.ext-help-listitem .ext-help-listitem-link{color:#fff}.ext-help-listitem .ext-help-listitem-text{float:right;width:450px;margin-right:15px}.ext-help-listitem .ext-help-listitem-text h2.ext-help-listitem-text-header{margin:6px 0 10px}.ext-help-listitem .ext-help-listitem-text .ext-help-listitem-text-regular{margin-bottom:10px}.ext-help-linkImage{display:inline-block;width:10px;height:10px;vertical-align:text-top;padding-left:2px}.ext-help-linkImage.ext-help-linkImageInternal{width:12px;height:12px}.ext-help-serviceDashboardHotSpot{display:inline-block;padding:0}",
".ext-hubs-picker-grid-details-parent{vertical-align:middle}.ext-hubs-picker-grid-details{margin-top:6px}.ext-hubs-picker-grid-text-subheader{margin-top:2px}.ext-hubs-specPicker-container{width:100%}.ext-hubs-specPicker-container .ext-hubs-specPicker-enterpriseAgreementMessage{margin:10px;margin-top:0;border-left:6px solid #ffb900;padding-left:10px}",
".ext-map>div{position:absolute;left:0;top:0}.ext-map>div>div{position:absolute;width:9px;height:9px}.ext-blademap{padding-bottom:20px}.ext-servicespart>.ext-map{position:absolute;left:0;top:0;right:0;bottom:0}.ext-servicespart.ext-tilesize-large>.ext-map>div>div{width:11px;height:11px}.ext-servicespart.ext-tilesize-herowide>.ext-map>div>div{width:14px;height:14px}.ext-servicespart.ext-tilesize-wide>.ext-map>div>div{width:11px;height:11px}.ext-servicespart:not(.ext-tilesize-mini)>.ext-content-overlay{position:absolute;left:0;top:0;right:0;bottom:0}.ext-servicespart>.ext-content-overlay>.ext-icon{width:30px;height:30px}.ext-servicespart.ext-tilesize-normal>.ext-content-overlay>.ext-icon{position:absolute;top:48px;left:47px;width:50px;height:50px}.ext-servicespart.ext-tilesize-small>.ext-content-overlay>.ext-icon{position:absolute;bottom:0;right:0}.ext-servicespart.ext-tilesize-small>.ext-content-overlay>.ext-subtitle{margin-right:30px}.ext-servicespart>.ext-content-overlay>.ext-summary{position:absolute;bottom:-4px;text-align:left;width:100%}.ext-servicespart>.ext-content-overlay>.ext-summary>div{display:inline-block}.ext-servicespart.ext-tilesize-mini>.ext-content-overlay>.ext-title{position:absolute;top:41px;left:2px;right:2px;text-align:center;height:20px;overflow:hidden}.ext-servicespart.ext-tilesize-mini>.ext-content-overlay>.ext-icon{position:absolute;left:25px;top:4px}.ext-incidentspart .ext-incidenttime{margin:18px 0 4px}.ext-noIncidents div:first-child{height:50px;width:50px}.ext-noIncidents div:last-child{position:absolute;left:70px;top:0;right:20px}td.ext-servicespart-statuscolumn{text-align:center}td.ext-servicespart-statuscolumn svg{margin-top:7px;width:12px;height:12px}.ext-servicespart-icon.ext-tilesize-mini{width:30px;margin-left:24px}.ext-servicespart-icon.ext-tilesize-small{width:30px;margin-left:100px;margin-top:-15px}.ext-servicespart-shorttitle{text-transform:uppercase;margin:3px 5px;max-height:22px;overflow:hidden;text-align:center}.ext-servicespart-grid table tbody tr td{height:27px}.ext-servicespart-grid-more-data{text-align:right}.ext-servicespart-map.ext-tilesize-large{margin-left:-32px;margin-bottom:10px}.ext-servicespart-map.ext-tilesize-herowide{margin-top:-19px;margin-bottom:-30px}.ext-servicespart-map.ext-tilesize-wide{margin-top:-19px;margin-left:110px}.ext-servicespart-messageIcon{width:15px;display:inline-block}.ext-servicespart-message.ext-tilesize-large{vertical-align:top;display:inline-block;width:300px}.ext-servicespart-message.ext-tilesize-herowide{vertical-align:top;display:inline-block;width:460px}.ext-servicespart-message.ext-tilesize-wide{vertical-align:top;display:inline-block;width:250px}",
".ext-gallery-details-social-icon{opacity:1}.ext-gallery-details-social-icon:hover{opacity:.85}.ext-gallery-results-list-item-title{min-height:20px;max-height:32px;overflow:hidden;padding-bottom:1px}.ext-gallery-results-list-item{margin:8px 0 8px;display:inline-block;max-width:calc(100% - 27px);overflow:hidden}.ext-gallery-item-text-transform-reset{text-transform:none}.ext-gallery-float-left{float:left}.ext-gallery-float-right-no-clear{float:right}.ext-gallery-float-right{float:right;clear:both}.ext-gallery-align-right{text-align:right}.ext-gallery-text-light{color:#758393}.ext-gallery-normal-white-space{white-space:normal}.ext-gallery-item-title{margin-top:-4px;margin-bottom:5px;max-height:36px;overflow:hidden}.ext-gallery-featured-gallery-control-item .ext-gallery-item-title{margin-top:4px;margin-bottom:3px}.ext-gallery-menu-item{padding:10px 17px}.ext-gallery-featured-header{padding:0 9px 0;margin-top:0;width:800px}.ext-gallery-featured-medium-width{width:115px;height:115px}.ext-gallery-featured-wide-width{width:252px;height:114px}.ext-gallery-featured-hero{margin:25px 25px 25px 25px;width:800px}.ext-gallery-featured-gallery-control{padding:0 16px;width:100%}.ext-gallery-featured-gallery-control-item{padding:9.5px;margin:0 -1px;height:175px}.ext-gallery-search-textbox{max-width:800px;padding-top:25px;padding-left:25px}.ext-gallery-search-title{margin:25px 25px 25px 25px}.ext-gallery-list-image{margin:12px 18px;height:40px;width:40px}.ext-gallery-list-item{padding-right:25px}.ext-gallery-details-container{margin:-15px 0}.ext-gallery-details-description{margin-bottom:20px}.ext-gallery-details-screenshot{border:1px solid #aab0b7;margin:25px 0 22px;height:324px;width:533px}.ext-gallery-details-social{padding-bottom:12px}.ext-gallery-details-social-icon{display:inline-block;margin-right:7px}.ext-gallery-details-social-icon,.ext-gallery-details-social-icon svg{height:23px;width:23px}.ext-gallery-startboard-tile-icon{display:inline-block;height:30px;width:30px}.ext-gallery-startboard-tile-small .ext-gallery-startboard-tile-icon{margin:13px 0 0 6px;vertical-align:top;float:left}.ext-gallery-startboard-tile-small .ext-gallery-startboard-tile-title{display:inline-block;margin:20px 10px;position:absolute;width:100px}.ext-gallery-startboard-tile-mini{text-align:center}.ext-gallery-startboard-tile-mini .ext-gallery-startboard-tile-icon{margin:5px 0 7px}.ext-gallery-startboard-tile-normal{padding:1px 0 0 1px}.ext-gallery-startboard-tile-normal>img{float:left}.ext-gallery-startboard-tile-normal .ext-gallery-startboard-tile-icon,.ext-gallery-startboard-tile-normal .ext-gallery-startboard-tile-icon>svg{width:145px;height:105px}.ext-gallery-startboard-tile-wide .ext-gallery-startboard-tile-icon,.ext-gallery-startboard-tile-wide .ext-gallery-startboard-tile-icon>svg{width:210px;height:150px}.ext-gallery-startboard-tile-wide .ext-gallery-startboard-tile-icon{float:left}.ext-gallery-startboard-tile-wide .ext-gallery-startboard-tile-title{position:absolute;top:65px;left:235px;width:90px}.ext-gallery-startboard-tile-normal .ext-gallery-startboard-tile-title{margin-top:14px}.ext-gallery-pricing-legal-grid-row{margin:5px 6px 5px 0}.ext-gallery-pricing-legal-grid-row .ext-gallery-pricing-publisher{margin-bottom:10px}.ext-gallery-pricing-legal-grid-row .ext-gallery-pricing-left{width:50%}.ext-gallery-pricing-legal-grid-row .ext-gallery-pricing-right{width:50%}.ext-gallery-pricing-inline-title{margin-top:45px;margin-bottom:10px}.ext-gallery-pricing-hotspot{padding:1px 3px;margin:0 -3px}.ext-gallery-pricing-grid-header{padding-top:15px;padding-bottom:10px}.ext-gallery-pricing-grid-total{margin-top:10px;margin-bottom:10px}.ext-gallery-pricing-legal-details-content{margin-top:10px}.ext-gallery-pricing-summary-grid-row{margin:8px 0 10px}.ext-gallery-pricing-offer{margin-bottom:5px}.ext-gallery-pricing-margin{margin:0 -6px}.ext-gallery-create-menu-subTitle{opacity:.6}.ext-gallery-list-menu-item{width:100%}.ext-gallery-create-item-title{margin-bottom:0;max-height:34px;overflow:hidden;white-space:normal}.ext-gallery-item-summary{opacity:.6;max-height:54px;overflow:hidden;white-space:normal}.ext-gallery-list-menu-item-details{padding-top:10px;max-width:calc(100% - 80px);display:inline-block;max-height:67px;overflow:hidden}.ext-gallery-create-list-image{margin-top:13px;margin-bottom:10px;margin-left:10px;margin-right:10px;height:60px;width:60px}.ext-gallery-list-menu-chevron{padding-right:0;padding-top:21px;height:17px;width:11px;float:right}.ext-gallery-list-menu-marketplace{padding-left:0;padding-right:5px;padding-top:11px;padding-bottom:18px;width:200px}.ext-gallery-list-menu-column{padding:0;height:61px}.ext-gallery-list-menu-column:first-of-type{padding:0}.ext-gallery-list-menu-find{padding-top:1px;opacity:.6}.ext-gallery-list-menu-grid{padding-top:40px;padding-left:25px;padding-right:25px;padding-bottom:30px;height:calc(100% - 137px)}.ext-gallery-list-menu-grid div table tbody:last-child tr:last-child td{border-bottom-style:hidden}.ext-gallery-list-menu-hotspot{padding:0;height:65px;width:100%;position:absolute;bottom:0}.ext-gallery-list-menu-line{height:1px;opacity:.4}.ext-gallery-item-notallowed{opacity:.4}.ext-gallery-create-menu-content{padding-left:25px;padding-right:25px}.ext-gallery-create-menu-chevron{padding-right:10px;height:17px;width:11px}.ext-gallery-create-menu-item-name{padding-left:7px}.ext-gallery-create-menu-grid{padding-bottom:15px}.ext-gallery-create-menu-column{border-style:hidden;padding-bottom:0;padding-top:0;padding-left:0;height:30px}.ext-gallery-create-menu-highlight{height:30px}.ext-gallery-create-menu-column:first-of-type{border-style:hidden;padding-left:0}.ext-gallery-create-menu-title{padding-left:10px;padding-bottom:7px;padding-top:16px;opacity:.6}.ext-gallery-create-menu-line{height:1px;margin-bottom:10px;opacity:.4}.ext-gallery-create-menu-message{padding:10px 16px;margin-top:10px}.ext-gallery-create-list-image-small{margin-top:10px;margin-bottom:7px;margin-left:3px;margin-right:10px;height:40px;width:40px}.ext-gallery-item-publisher{opacity:.6;max-height:16px;height:16px;overflow:hidden}.ext-gallery-create-item-title-small{margin-top:2px;margin-bottom:1px;max-height:17px;overflow:hidden}.ext-gallery-create-menu-column-small{border-style:hidden;padding:0;height:60px}.ext-gallery-create-menu-column-div div table tbody:last-child tr:first-child td{border-top-style:hidden}.ext-gallery-create-menu-column-div div table tbody:last-child tr:last-child td{border-bottom-style:hidden}.ext-gallery-list-menu-item-small-details{padding-top:10px;max-width:calc(100% - 53px);display:inline-block;max-height:40px;overflow:hidden}.ext-gallery-createnotice-content{width:100%;height:100%}.ext-gallery-createnotice-background{position:absolute;bottom:0;left:-270px;width:585px;height:456px}.ext-gallery-createnotice-foreground{position:absolute;top:0;width:315px}.ext-gallery-createnotice-arrow{width:32px;height:32px;padding-left:7px}.ext-gallery-comingsoon-top{padding-bottom:25px;padding-left:25px;padding-right:25px}.ext-gallery-subscription-top{padding-bottom:25px;padding-left:25px;padding-right:15px}.ext-gallery-createnotice-action{padding-top:25px;padding-left:40px;padding-right:25px}.ext-gallery-createnotice-inline{display:inline-block}.ext-gallery-createnotice-title{width:calc(100% - 100px);vertical-align:top;margin-top:25px}.ext-gallery-createnotice-description{padding-left:25px;padding-right:25px;padding-bottom:25px}.ext-gallery-createnotice-actiontext{height:32px;vertical-align:text-bottom}.ext-gallery-comingsoon-icon{width:96px;height:108px}.ext-gallery-subscription-icon{width:96px;height:96px}"]};
n.definition=t})(s||(s={}));n.definitionName="HubsExtension";n.getDefinition=h,function(n){var t,i,r,
u,f,e,o;(function(n){n.name="AzureTfsExtension"})(t=n.AzureTfsExtension||(n.AzureTfsExtension={})),function(
n){n.name="Microsoft_Azure_AD"}(i=n.Microsoft_Azure_AD||(n.Microsoft_Azure_AD={})),function(n){n.name=
"Microsoft_Azure_Billing";var t;(function(n){var t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b;(function(n){n.name=
"BillingBlade"})(t=n.BillingBlade||(n.BillingBlade={})),function(n){n.name="SubscriptionsBlade"}(i=n.
SubscriptionsBlade||(n.SubscriptionsBlade={})),function(n){n.name="BillingSummaryBlade"}(r=n.BillingSummaryBlade||
(n.BillingSummaryBlade={})),function(n){n.name="CreditSubscriptionDetailBlade";var t;(function(n){n.
id="id"})(t=n.Inputs||(n.Inputs={}))}(u=n.CreditSubscriptionDetailBlade||(n.CreditSubscriptionDetailBlade=
{})),function(n){n.name="OtherSubscriptionDetailBlade";var t;(function(n){n.id="id"})(t=n.Inputs||(n.
Inputs={}))}(f=n.OtherSubscriptionDetailBlade||(n.OtherSubscriptionDetailBlade={})),function(n){n.name=
"CommitmentSubscriptionDetailBlade";var t;(function(n){n.id="id"})(t=n.Inputs||(n.Inputs={}))}(e=n.CommitmentSubscriptionDetailBlade||
(n.CommitmentSubscriptionDetailBlade={})),function(n){n.name="ConsumptionSubscriptionDetailBlade";var
t;(function(n){n.id="id"})(t=n.Inputs||(n.Inputs={}))}(o=n.ConsumptionSubscriptionDetailBlade||(n.ConsumptionSubscriptionDetailBlade=
{})),function(n){n.name="SupportSubscriptionDetailBlade";var t;(function(n){n.id="id"})(t=n.Inputs||
(n.Inputs={}))}(s=n.SupportSubscriptionDetailBlade||(n.SupportSubscriptionDetailBlade={})),function(
n){n.name="CostByResourceDetailBlade";var t;(function(n){n.selectedSubscriptionId="selectedSubscriptionId"}
)(t=n.Inputs||(n.Inputs={}))}(h=n.CostByResourceDetailBlade||(n.CostByResourceDetailBlade={})),function(
n){n.name="EASubscriptionDetailBlade";var t;(function(n){n.id="id"})(t=n.Inputs||(n.Inputs={}))}(c=n.
EASubscriptionDetailBlade||(n.EASubscriptionDetailBlade={})),function(n){n.name="BillingNoSubscriptionsBlade"}
(l=n.BillingNoSubscriptionsBlade||(n.BillingNoSubscriptionsBlade={})),function(n){n.name="QuickStartSubscriptionBlade";
var t;(function(n){n.id="id"})(t=n.Inputs||(n.Inputs={}))}(a=n.QuickStartSubscriptionBlade||(n.QuickStartSubscriptionBlade=
{})),function(n){n.name="SubscriptionPropertiesBlade";var t;(function(n){n.id="id"})(t=n.Inputs||(n.
Inputs={}))}(v=n.SubscriptionPropertiesBlade||(n.SubscriptionPropertiesBlade={})),function(n){n.name=
"PreviousRunningCostsDetailBlade"}(y=n.PreviousRunningCostsDetailBlade||(n.PreviousRunningCostsDetailBlade=
{})),function(n){n.name="CurrentRunningCostsDetailBlade"}(p=n.CurrentRunningCostsDetailBlade||(n.CurrentRunningCostsDetailBlade=
{})),function(n){n.name="FutureRunningCostsDetailBlade"}(w=n.FutureRunningCostsDetailBlade||(n.FutureRunningCostsDetailBlade=
{})),function(n){n.name="BillingSubscriptionsBrowseBlade";var t;(function(n){n.id="id"})(t=n.Inputs||
(n.Inputs={}))}(b=n.BillingSubscriptionsBrowseBlade||(n.BillingSubscriptionsBrowseBlade={}))})(t=n.Blades||
(n.Blades={}))}(r=n.Microsoft_Azure_Billing||(n.Microsoft_Azure_Billing={})),function(n){n.name="Microsoft_Azure_Insights"}
(u=n.Microsoft_Azure_Insights||(n.Microsoft_Azure_Insights={})),function(n){n.name="Microsoft_Azure_Support";
var t;(function(n){var t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g,nt,tt,it,rt,ut,ft,et,ot;(function(n){
var t,i;n.name="HelpRequestBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))})(t=n.HelpRequestBlade||(n.HelpRequestBlade={})),function(n){var t,i;n.name="RequestTypePickerBlade",
function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(i=n.RequestTypePickerBlade||
(n.RequestTypePickerBlade={})),function(n){var t,i;n.name="ResourceTypeBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(r=n.ResourceTypeBlade||(n.ResourceTypeBlade=
{})),function(n){var t,i;n.name="ResourceTypeDetailBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(u=n.ResourceTypeDetailBlade||(n.ResourceTypeDetailBlade=
{})),function(n){var t,i;n.name="SubscriptionSelectorBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(f=n.SubscriptionSelectorBlade||(n.SubscriptionSelectorBlade=
{})),function(n){var t,i;n.name="ProblemTypeDetailBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(e=n.ProblemTypeDetailBlade||(n.ProblemTypeDetailBlade=
{})),function(n){var t,i;n.name="SupportOfferingBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(o=n.SupportOfferingBlade||(n.SupportOfferingBlade=
{})),function(n){var t,i;n.name="SupportOfferingDetailBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(s=n.SupportOfferingDetailBlade||(n.SupportOfferingDetailBlade=
{})),function(n){var t,i;n.name="SupportFinderBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(h=n.SupportFinderBlade||(n.SupportFinderBlade=
{})),function(n){var t,i;n.name="CreateSubscrIncidentBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(c=n.CreateSubscrIncidentBlade||(n.CreateSubscrIncidentBlade=
{})),function(n){var t,i;n.name="SupportAQGABlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(l=n.SupportAQGABlade||(n.SupportAQGABlade={})),function(n){var t,i;n.name="DescriptionBlade",
function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(a=n.DescriptionBlade||
(n.DescriptionBlade={})),function(n){var t,i;n.name="ContactAndImpactBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(v=n.ContactAndImpactBlade||(n.ContactAndImpactBlade=
{})),function(n){var t,i;n.name="ContactPreferencesBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(y=n.ContactPreferencesBlade||(n.ContactPreferencesBlade=
{})),function(n){var t,i;n.name="PrimaryContactBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(p=n.PrimaryContactBlade||(n.PrimaryContactBlade=
{})),function(n){var t,i;n.name="CountryBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(w=n.CountryBlade||(n.CountryBlade={})),function(n){var t,i;n.name="TimeZoneBlade",function(
n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(b=n.TimeZoneBlade||
(n.TimeZoneBlade={})),function(n){var t,i;n.name="LanguageBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(k=n.LanguageBlade||(n.LanguageBlade={})),function(
n){var t,i;n.name="BusinessImpactBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(d=n.BusinessImpactBlade||(n.BusinessImpactBlade={})),function(n){n.name="FindPremierAgreementNoticeBlade"}
(g=n.FindPremierAgreementNoticeBlade||(n.FindPremierAgreementNoticeBlade={})),function(n){n.name="ShopForSupportNoticeBlade"}
(nt=n.ShopForSupportNoticeBlade||(n.ShopForSupportNoticeBlade={})),function(n){n.name="SupportRequestDetailBlade";
var t;(function(n){n.id="id"})(t=n.Inputs||(n.Inputs={}))}(tt=n.SupportRequestDetailBlade||(n.SupportRequestDetailBlade=
{})),function(n){n.name="MessageDetailBlade";var t;(function(n){n.header="header";n.text="text"})(t=
n.Inputs||(n.Inputs={}))}(it=n.MessageDetailBlade||(n.MessageDetailBlade={})),function(n){n.name="QuickStartBlade"}
(rt=n.QuickStartBlade||(n.QuickStartBlade={})),function(n){var t,i;n.name="ProblemDetailsBlade",function(
n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(ut=n.ProblemDetailsBlade||
(n.ProblemDetailsBlade={})),function(n){n.name="ServiceHealthBlade"}(ft=n.ServiceHealthBlade||(n.ServiceHealthBlade=
{})),function(n){n.name="NewMessageBlade";var t;(function(n){n.isSubmitMessage="isSubmitMessage"})(t=
n.Outputs||(n.Outputs={}))}(et=n.NewMessageBlade||(n.NewMessageBlade={})),function(n){n.name="ShareDetailedLogsBlade"}
(ot=n.ShareDetailedLogsBlade||(n.ShareDetailedLogsBlade={}))})(t=n.Blades||(n.Blades={}))}(f=n.Microsoft_Azure_Support||
(n.Microsoft_Azure_Support={})),function(n){n.name="SqlAzureExtension"}(e=n.SqlAzureExtension||(n.SqlAzureExtension=
{})),function(n){n.name="WebsitesExtension";var t;(function(n){var t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,
k,d,g,nt,tt,it,rt,ut,ft,et,ot,st,ht,ct,lt,at,vt,yt,pt,wt,bt,kt,dt,gt,ni,ti,ii,ri,ui,fi,ei,oi,si,hi,ci,
li,ai,vi,yi,pi,wi;(function(n){var t,i;n.name="AutoscaleScaleMetricDetail",function(n){n.inputParentSetting=
"inputParentSetting"}(t=n.Inputs||(n.Inputs={})),function(n){n.saveCompleted="saveCompleted"}(i=n.Outputs||
(n.Outputs={}))})(t=n.AutoscaleScaleMetricDetail||(n.AutoscaleScaleMetricDetail={})),function(n){n.name=
"WebsiteUsageBlade";var t;(function(n){n.resourceUri="resourceUri";n.sku="sku"})(t=n.Inputs||(n.Inputs=
{}))}(i=n.WebsiteUsageBlade||(n.WebsiteUsageBlade={})),function(n){n.name="WebsiteBlade";var t;(function(
n){n.id="id"})(t=n.Inputs||(n.Inputs={}))}(r=n.WebsiteBlade||(n.WebsiteBlade={})),function(n){n.name=
"NoticeBlade";var t;(function(n){n.info="info"})(t=n.Inputs||(n.Inputs={}))}(u=n.NoticeBlade||(n.NoticeBlade=
{})),function(n){var t,i;n.name="FtpCredentials",function(n){n.WebsiteId="WebsiteId"}(t=n.Inputs||(n.
Inputs={})),function(n){n.CloseBlade="CloseBlade"}(i=n.Outputs||(n.Outputs={}))}(f=n.FtpCredentials||
(n.FtpCredentials={})),function(n){n.name="Autoscale";var t;(function(n){n.WebHostingPlanId="WebHostingPlanId";
n.scaleResourceUri="scaleResourceUri"})(t=n.Inputs||(n.Inputs={}))}(e=n.Autoscale||(n.Autoscale={})),
function(n){n.name="LogStreamBlade";var t;(function(n){n.WebsiteId="WebsiteId";n.logStreamInput="logStreamInput"}
)(t=n.Inputs||(n.Inputs={}))}(o=n.LogStreamBlade||(n.LogStreamBlade={})),function(n){n.name="ConsoleBlade";
var t;(function(n){n.WebsiteId="WebsiteId";n.consoleInput="consoleInput"})(t=n.Inputs||(n.Inputs={})
)}(s=n.ConsoleBlade||(n.ConsoleBlade={})),function(n){n.name="InstanceBrowserBlade";var t;(function(
n){n.WebsiteId="WebsiteId"})(t=n.Inputs||(n.Inputs={}))}(h=n.InstanceBrowserBlade||(n.InstanceBrowserBlade=
{})),function(n){n.name="ProcessExplorerBlade";var t;(function(n){n.WebsiteId="WebsiteId"})(t=n.Inputs||
(n.Inputs={}))}(c=n.ProcessExplorerBlade||(n.ProcessExplorerBlade={})),function(n){n.name="ProcessFileHandleBlade";
var t;(function(n){n.WebsiteId="WebsiteId"})(t=n.Inputs||(n.Inputs={}))}(l=n.ProcessFileHandleBlade||
(n.ProcessFileHandleBlade={})),function(n){n.name="ProcessDetailsBlade";var t;(function(n){n.WebsiteId=
"WebsiteId";n.id="id";n.instanceName="instanceName";n.name="name";n.instanceId="instanceId"})(t=n.Inputs||
(n.Inputs={}))}(a=n.ProcessDetailsBlade||(n.ProcessDetailsBlade={})),function(n){n.name="ModulesBlade";
var t;(function(n){n.WebsiteId="WebsiteId";n.id="id";n.name="name";n.instanceName="instanceName"})(t=
n.Inputs||(n.Inputs={}))}(v=n.ModulesBlade||(n.ModulesBlade={})),function(n){n.name="ThreadsBlade";var
t;(function(n){n.WebsiteId="WebsiteId";n.id="id";n.name="name";n.instanceName="instanceName"})(t=n.Inputs||
(n.Inputs={}))}(y=n.ThreadsBlade||(n.ThreadsBlade={})),function(n){n.name="WorkingSetDetailsBlade";var
t;(function(n){n.WebsiteId="WebsiteId";n.id="id";n.name="name";n.instanceName="instanceName"})(t=n.Inputs||
(n.Inputs={}))}(p=n.WorkingSetDetailsBlade||(n.WorkingSetDetailsBlade={})),function(n){n.name="VirtualMemoryDetailsBlade";
var t;(function(n){n.WebsiteId="WebsiteId";n.id="id";n.name="name";n.instanceName="instanceName"})(t=
n.Inputs||(n.Inputs={}))}(w=n.VirtualMemoryDetailsBlade||(n.VirtualMemoryDetailsBlade={})),function(
n){n.name="CPUUsageDetailsBlade";var t;(function(n){n.WebsiteId="WebsiteId";n.id="id";n.name="name";
n.instanceName="instanceName"})(t=n.Inputs||(n.Inputs={}))}(b=n.CPUUsageDetailsBlade||(n.CPUUsageDetailsBlade=
{})),function(n){n.name="HandlesDetailsBlade";var t;(function(n){n.WebsiteId="WebsiteId";n.id="id";n.
name="name";n.instanceName="instanceName"})(t=n.Inputs||(n.Inputs={}))}(k=n.HandlesDetailsBlade||(n.
HandlesDetailsBlade={})),function(n){n.name="ThreadDetailsBlade";var t;(function(n){n.ThreadInfo="ThreadInfo"}
)(t=n.Inputs||(n.Inputs={}))}(d=n.ThreadDetailsBlade||(n.ThreadDetailsBlade={})),function(n){n.name=
"ModuleDetailsBlade";var t;(function(n){n.ModuleInfo="ModuleInfo"})(t=n.Inputs||(n.Inputs={}))}(g=n.
ModuleDetailsBlade||(n.ModuleDetailsBlade={})),function(n){n.name="QuickStart";var t;(function(n){n.
WebsiteId="WebsiteId"})(t=n.Inputs||(n.Inputs={}))}(nt=n.QuickStart||(n.QuickStart={})),function(n){
n.name="WebsiteConfigSiteSettings";var t;(function(n){n.WebsiteId="WebsiteId"})(t=n.Inputs||(n.Inputs=
{}))}(tt=n.WebsiteConfigSiteSettings||(n.WebsiteConfigSiteSettings={})),function(n){n.name="WebsiteConfigSSLSettings";
var t;(function(n){n.WebsiteId="WebsiteId"})(t=n.Inputs||(n.Inputs={}))}(it=n.WebsiteConfigSSLSettings||
(n.WebsiteConfigSSLSettings={})),function(n){n.name="PropertySheetBlade";var t;(function(n){n.WebsiteId=
"WebsiteId"})(t=n.Inputs||(n.Inputs={}))}(rt=n.PropertySheetBlade||(n.PropertySheetBlade={})),function(
n){n.name="WebHostingPlanPropertySheetBlade";var t;(function(n){n.WebHostingPlanId="WebHostingPlanId"}
)(t=n.Inputs||(n.Inputs={}))}(ut=n.WebHostingPlanPropertySheetBlade||(n.WebHostingPlanPropertySheetBlade=
{})),function(n){var t,i;n.name="WebsiteSlotsListBlade",function(n){n.WebsiteId="WebsiteId"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(ft=n.WebsiteSlotsListBlade||(n.WebsiteSlotsListBlade={})),function(n){var t,i;n.name=
"WebsiteAddSlotBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(et=n.WebsiteAddSlotBlade||(n.WebsiteAddSlotBlade={})),function(n){n.name="WebHostingPlanBlade";
var t;(function(n){n.id="id"})(t=n.Inputs||(n.Inputs={}))}(ot=n.WebHostingPlanBlade||(n.WebHostingPlanBlade=
{})),function(n){var t,i;n.name="WebHostingPlanPickerBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(st=n.WebHostingPlanPickerBlade||(n.WebHostingPlanPickerBlade=
{})),function(n){var t,i;n.name="CreateWebHostingPlanBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(ht=n.CreateWebHostingPlanBlade||(n.CreateWebHostingPlanBlade=
{})),function(n){var t,i;n.name="WebHostingPlanPickerStepBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(ct=n.WebHostingPlanPickerStepBlade||(n.WebHostingPlanPickerStepBlade=
{})),function(n){var t,i;n.name="WebsiteSwapSlotsPickerBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(lt=n.WebsiteSwapSlotsPickerBlade||(n.WebsiteSwapSlotsPickerBlade=
{})),function(n){var t,i;n.name="WebsiteCreateAppSettingsStepBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(at=n.WebsiteCreateAppSettingsStepBlade||(n.
WebsiteCreateAppSettingsStepBlade={})),function(n){var t,i;n.name="WebsiteAndDatabaseCreateConnectionStringStepBlade",
function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(vt=n.WebsiteAndDatabaseCreateConnectionStringStepBlade||
(n.WebsiteAndDatabaseCreateConnectionStringStepBlade={})),function(n){var t,i;n.name="CreateWebsiteWizardBlade",
function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(yt=n.CreateWebsiteWizardBlade||
(n.CreateWebsiteWizardBlade={})),function(n){n.name="ComingSoonBlade";var t;(function(n){n.WebsiteId=
"WebsiteId";n.OldPortalRedirectionUrl="OldPortalRedirectionUrl";n.ComingSoonDescription="ComingSoonDescription"}
)(t=n.Inputs||(n.Inputs={}))}(pt=n.ComingSoonBlade||(n.ComingSoonBlade={})),function(n){var t,i;n.name=
"CreateWebsiteAndSqlWizardBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(wt=n.CreateWebsiteAndSqlWizardBlade||(n.CreateWebsiteAndSqlWizardBlade={})),function(
n){var t,i;n.name="CreateWebsiteAndMySqlWizardBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(bt=n.CreateWebsiteAndMySqlWizardBlade||(n.CreateWebsiteAndMySqlWizardBlade=
{})),function(n){n.name="WebsiteLogsBlade";var t;(function(n){n.WebsiteId="WebsiteId"})(t=n.Inputs||
(n.Inputs={}))}(kt=n.WebsiteLogsBlade||(n.WebsiteLogsBlade={})),function(n){var t,i;n.name="AddResourceBlade",
function(n){n.websiteId="websiteId"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput";n.outputs="outputs"}(i=n.Outputs||(n.Outputs={}))}(dt=n.AddResourceBlade||
(n.AddResourceBlade={})),function(n){n.name="WebHostingPlanQuickStart";var t;(function(n){n.WebHostingPlanId=
"WebHostingPlanId"})(t=n.Inputs||(n.Inputs={}))}(gt=n.WebHostingPlanQuickStart||(n.WebHostingPlanQuickStart=
{})),function(n){var t,i;n.name="WebsitePickerBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(ni=n.WebsitePickerBlade||(n.WebsitePickerBlade=
{})),function(n){var t,i;n.name="ExistingWebsitesPickerBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(ti=n.ExistingWebsitesPickerBlade||(n.ExistingWebsitesPickerBlade=
{})),function(n){var t,i;n.name="WebsiteSlotsPickerBlade",function(n){n.collectorBindingInternals_inputs=
"collectorBindingInternals-inputs";n.collectorBindingInternals_errors="collectorBindingInternals-errors";
n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs=
"collectorBindingInternals-outputs";n.collectorBindingInternals_commit="collectorBindingInternals-commit";
n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(ii=n.WebsiteSlotsPickerBlade||(n.WebsiteSlotsPickerBlade=
{})),function(n){n.name="WebHostingPlanDetailUsageBlade";var t;(function(n){n.resourceUri="resourceUri"}
)(t=n.Inputs||(n.Inputs={}))}(ri=n.WebHostingPlanDetailUsageBlade||(n.WebHostingPlanDetailUsageBlade=
{})),function(n){var t,i;n.name="WebsitePortBridgeListBlade",function(n){n.WebsiteId="WebsiteId"}(t=
n.Inputs||(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";
n.collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.
Outputs||(n.Outputs={}))}(ui=n.WebsitePortBridgeListBlade||(n.WebsitePortBridgeListBlade={})),function(
n){n.name="PortaBridgeItemDetailsBlade";var t;(function(n){n.selfLinkResourceUri="selfLinkResourceUri";
n.bizTalkResourceUri="bizTalkResourceUri"})(t=n.Inputs||(n.Inputs={}))}(fi=n.PortaBridgeItemDetailsBlade||
(n.PortaBridgeItemDetailsBlade={})),function(n){n.name="HybridConnectionPropertiesBlade";var t;(function(
n){n.selfLinkResourceUri="selfLinkResourceUri"})(t=n.Inputs||(n.Inputs={}))}(ei=n.HybridConnectionPropertiesBlade||
(n.HybridConnectionPropertiesBlade={})),function(n){n.name="BackupBlade";var t;(function(n){n.WebsiteId=
"WebsiteId"})(t=n.Inputs||(n.Inputs={}))}(oi=n.BackupBlade||(n.BackupBlade={})),function(n){n.name="BackupDetailBlade";
var t;(function(n){n.WebsiteId="WebsiteId";n.backupName="backupName";n.backupCreated="backupCreated"}
)(t=n.Inputs||(n.Inputs={}))}(si=n.BackupDetailBlade||(n.BackupDetailBlade={})),function(n){var t,i;
n.name="WebsiteLinkedDatabasesBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(hi=n.WebsiteLinkedDatabasesBlade||(n.WebsiteLinkedDatabasesBlade={})),function(n){var
t,i;n.name="RestoreSettingsBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(ci=n.RestoreSettingsBlade||(n.RestoreSettingsBlade={})),function(n){var t,i;n.name=
"RestoreCreateWebsiteBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(li=n.RestoreCreateWebsiteBlade||(n.RestoreCreateWebsiteBlade={})),function(n){var t,
i;n.name="RestoreDatabasesBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(ai=n.RestoreDatabasesBlade||(n.RestoreDatabasesBlade={})),function(n){var t,i;n.name=
"DatabaseRestoreOptionsBlade",function(n){n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";
n.collectorBindingInternals_errors="collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||
(n.Inputs={})),function(n){n.collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.
collectorBindingInternals_commit="collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||
(n.Outputs={}))}(vi=n.DatabaseRestoreOptionsBlade||(n.DatabaseRestoreOptionsBlade={})),function(n){n.
name="WebJobsListBlade";var t;(function(n){n.WebsiteId="WebsiteId"})(t=n.Inputs||(n.Inputs={}))}(yi=
n.WebJobsListBlade||(n.WebJobsListBlade={})),function(n){var t,i;n.name="WebJobsAddBlade",function(n)
{n.collectorBindingInternals_inputs="collectorBindingInternals-inputs";n.collectorBindingInternals_errors=
"collectorBindingInternals-errors";n.stepInput="stepInput"}(t=n.Inputs||(n.Inputs={})),function(n){n.
collectorBindingInternals_outputs="collectorBindingInternals-outputs";n.collectorBindingInternals_commit=
"collectorBindingInternals-commit";n.stepOutput="stepOutput"}(i=n.Outputs||(n.Outputs={}))}(pi=n.WebJobsAddBlade||
(n.WebJobsAddBlade={})),function(n){n.name="UploadCertificate";var t;(function(n){n.WebsiteId="WebsiteId"}
)(t=n.Inputs||(n.Inputs={}))}(wi=n.UploadCertificate||(n.UploadCertificate={}))})(t=n.Blades||(n.Blades=
{}))}(o=n.WebsitesExtension||(n.WebsitesExtension={}))}(c=n.External||(n.External={})),function(n){var
t,i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,k,d,g;(function(n){n.name="Tag"})(t=n.Tag||(n.Tag={})),function(n)
{n.name="Settings"}(i=n.Settings||(n.Settings={})),function(n){n.name="Resource"}(r=n.Resource||(n.Resource=
{})),function(n){n.name="ResourceList"}(u=n.ResourceList||(n.ResourceList={})),function(n){n.name="Deployments"}
(f=n.Deployments||(n.Deployments={})),function(n){n.name="ResourceGroups";var t;(function(n){n.read=
"Microsoft.Resources/subscriptions/resourceGroups/read";n.deleteObject="Microsoft.Resources/subscriptions/resourceGroups/delete";
n.write="Microsoft.Resources/subscriptions/resourceGroups/write";n.writeDeployments="Microsoft.Resources/subscriptions/resourceGroups/deployments/write";
n.readDeployments="Microsoft.Resources/subscriptions/resourceGroups/deployments/read";n.readEvents="Microsoft.Insights/events/read"}
)(t=n.Permissions||(n.Permissions={}))}(e=n.ResourceGroups||(n.ResourceGroups={})),function(n){n.name=
"ResourceGroupList"}(o=n.ResourceGroupList||(n.ResourceGroupList={})),function(n){n.name="ResourceGroupEvents"}
(s=n.ResourceGroupEvents||(n.ResourceGroupEvents={})),function(n){n.name="ServicesHealth"}(h=n.ServicesHealth||
(n.ServicesHealth={})),function(n){n.name="HelpAndSupport"}(c=n.HelpAndSupport||(n.HelpAndSupport={})
),function(n){n.name="Gallery"}(l=n.Gallery||(n.Gallery={})),function(n){n.name="StoreGallery"}(a=n.
StoreGallery||(n.StoreGallery={})),function(n){n.name="BrowseResource"}(v=n.BrowseResource||(n.BrowseResource=
{})),function(n){n.name="BrowseAllResources"}(y=n.BrowseAllResources||(n.BrowseAllResources={})),function(
n){n.name="BrowseResourceGroup"}(p=n.BrowseResourceGroup||(n.BrowseResourceGroup={})),function(n){n.
name="Notification"}(w=n.Notification||(n.Notification={})),function(n){n.name="BrowseAll"}(b=n.BrowseAll||
(n.BrowseAll={})),function(n){n.name="BrowseAllWithType"}(k=n.BrowseAllWithType||(n.BrowseAllWithType=
{})),function(n){n.name="BrowseService"}(d=n.BrowseService||(n.BrowseService={})),function(n){n.name=
"BrowseDynamicAsset"}(g=n.BrowseDynamicAsset||(n.BrowseDynamicAsset={}))}(t=n.AssetTypes||(n.AssetTypes=
{})),function(n){n.tag=t.Tag.name;n.settings=t.Settings.name;n.resource=t.Resource.name;n.resourceList=
t.ResourceList.name;n.deployments=t.Deployments.name;n.resourceGroups=t.ResourceGroups.name;n.resourceGroupList=
t.ResourceGroupList.name;n.resourceGroupEvents=t.ResourceGroupEvents.name;n.servicesHealth=t.ServicesHealth.
name;n.helpAndSupport=t.HelpAndSupport.name;n.gallery=t.Gallery.name;n.storeGallery=t.StoreGallery.name;
n.browseResource=t.BrowseResource.name;n.browseAllResources=t.BrowseAllResources.name;n.browseResourceGroup=
t.BrowseResourceGroup.name;n.notification=t.Notification.name;n.browseAll=t.BrowseAll.name;n.browseAllWithType=
t.BrowseAllWithType.name;n.browseService=t.BrowseService.name;n.browseDynamicAsset=t.BrowseDynamicAsset.
name}(l=n.AssetTypeNames||(n.AssetTypeNames={})),function(n){n.deployFromTemplateBlade="DeployFromTemplateBlade";
n.templateEditorBlade="TemplateEditorBlade";n.parametersEditorBlade="ParametersEditorBlade";n.resourceGroupPickerV3Blade=
"ResourceGroupPickerV3Blade";n.resourcesWithTagBlade="ResourcesWithTagBlade";n.resourceTagsListBlade=
"ResourceTagsListBlade";n.subscriptionTagsListBlade="SubscriptionTagsListBlade";n.subscriptionPickerV3Blade=
"SubscriptionPickerV3Blade";n.locationPickerV3Blade="LocationPickerV3Blade";n.settingsBlade="SettingsBlade";
n.languageSelectionBlade="LanguageSelectionBlade";n.localeSelectionBlade="LocaleSelectionBlade";n.resourceMapBlade=
"ResourceMapBlade";n.resourceListBlade="ResourceListBlade";n.deploymentsListBlade="DeploymentsListBlade";
n.deploymentDetailsBlade="DeploymentDetailsBlade";n.deploymentOperationPropertiesBlade="DeploymentOperationPropertiesBlade";
n.resourceGroupMapBlade="ResourceGroupMapBlade";n.resourceGroupQuickStartBlade="ResourceGroupQuickStartBlade";
n.resourceGroupPropertiesBlade="ResourceGroupPropertiesBlade";n.resourceGroupListBlade="ResourceGroupListBlade";
n.resourceGroupEventsBlade="ResourceGroupEventsBlade";n.resourceGroupDeleteBlade="ResourceGroupDeleteBlade";
n.resourceGroupSettingListBlade="ResourceGroupSettingListBlade";n.managementTeamBlade="ManagementTeamBlade";
n.hiddenServiceHealthBlade="HiddenServiceHealthBlade";n.servicesHealthBlade="ServicesHealthBlade";n.
serviceBlade="ServiceBlade";n.serviceRegionBlade="ServiceRegionBlade";n.serviceHealthListBlade="ServiceHealthListBlade";
n.regionPickerBlade="RegionPickerBlade";n.resourceGroupPickerBlade="ResourceGroupPickerBlade";n.createResourceGroupBlade=
"CreateResourceGroupBlade";n.subscriptionPickerBlade="SubscriptionPickerBlade";n.whatsNewBlade="WhatsNewBlade";
n.helpAndSupportBlade="HelpAndSupportBlade";n.noSubscriptionsBlade="NoSubscriptionsBlade";n.noMsdnOfferOnSubscriptionsBlade=
"NoMsdnOfferOnSubscriptionsBlade";n.tourBlade="TourBlade";n.tourBladesBlade="TourBladesBlade";n.tourCustomizingBlade=
"TourCustomizingBlade";n.helpBlade="HelpBlade";n.galleryMenuBlade="GalleryMenuBlade";n.galleryFeaturedMenuItemBlade=
"GalleryFeaturedMenuItemBlade";n.galleryItemDetailsBlade="GalleryItemDetailsBlade";n.galleryResultsListBlade=
"GalleryResultsListBlade";n.pCGalleryResultsListBlade="PCGalleryResultsListBlade";n.galleryLaunchCreateFailedBlade=
"GalleryLaunchCreateFailedBlade";n.pricingSummaryBlade="PricingSummaryBlade";n.legalTermsBlade="LegalTermsBlade";
n.legalTermsDetailsBlade="LegalTermsDetailsBlade";n.galleryCreateBlade="GalleryCreateBlade";n.galleryCreateMenuResultsListBlade=
"GalleryCreateMenuResultsListBlade";n.galleryCreateComingSoonBlade="GalleryCreateComingSoonBlade";n.
galleryCreateSubscriptionBlade="GalleryCreateSubscriptionBlade";n.browseResourceBlade="BrowseResourceBlade";
n.browseAllResourcesBlade="BrowseAllResourcesBlade";n.browseResourceGroupBlade="BrowseResourceGroupBlade";
n.notificationsBlade="NotificationsBlade";n.browseAllBlade="BrowseAllBlade";n.browseAllBladeWithType=
"BrowseAllBladeWithType";n.browseServiceBlade="BrowseServiceBlade";n.browseDynamicAssetBlade="BrowseDynamicAssetBlade";
n.browseResourceSettingsBlade="BrowseResourceSettingsBlade"}(a=n.BladeNames||(n.BladeNames={})),function(
n){n.addTagCommandGroup="AddTagCommandGroup";n.tagItemCommandGroup="TagItemCommandGroup";n.resourceMapCommands=
"ResourceMapCommands";n.resourceGroupMapBladeCommands="ResourceGroupMapBladeCommands";n.resourceGroupBrowseCommands=
"ResourceGroupBrowseCommands";n.managementTeamCommandGroup="ManagementTeamCommandGroup";n.serviceHealthPartCommands=
"ServiceHealthPartCommands";n.browseResourceCommandGroup="browseResourceCommandGroup";n.browseResourceBladeCommands=
"BrowseResourceBladeCommands";n.browseResourceGroupCommandGroup="browseResourceGroupCommandGroup";n.
serviceCommandGroup="serviceCommandGroup"}(v=n.CommandGroupNames||(n.CommandGroupNames={})),function(
n){n.resourceCreationSucceeded="ResourceCreationSucceeded"}(y=n.EventTypes||(n.EventTypes={})),function(
n){var t,i,r,u;(function(n){n.name="DeployTemplate";n.initializing={status:"initializing"};n.submitting=
{status:"submitting"};n.deploying={status:"deploying"};n.failed={status:"failed"}})(t=n.DeployTemplate||
(n.DeployTemplate={})),function(n){n.name="DeploymentNotification";n.succeeded={status:"Succeeded"};
n.failed={status:"Failed"}}(i=n.DeploymentNotification||(n.DeploymentNotification={})),function(n){n.
name="DeploymentDeletionNotification";n.inProgress={status:"InProgress"};n.succeeded={status:"Succeeded"};
n.failed={status:"Failed"};n.pollingFailed={status:"PollingFailed"}}(r=n.DeploymentDeletionNotification||
(n.DeploymentDeletionNotification={})),function(n){n.name="SubscriptionsUpdatedNotification";n.updated=
{status:"updated"}}(u=n.SubscriptionsUpdatedNotification||(n.SubscriptionsUpdatedNotification={}))}(
p=n.NotificationDefinitions||(n.NotificationDefinitions={}))}(s||(s={})),s});define("HubsExtension/Store/DeploymentManager",
["require","exports","../ArmHelpers/ArmApis","HubsExtension/Notifications/EventSubscriptionService",
"../Common/HubsObservables","HubsExtension/Store/StoreClientStrings"],function(n,t,i,r,u,f){var e=MsPortalFx.
Hubs.Notifications,h=MsPortalFx.Azure.ResourceManager,s=MsPortalFx.ViewModels.Services.ResourceTypes,
o;return function(n){"use strict";function h(n){return o.deployTemplate(n)}function c(n){return o.pollForDeployment(
n)}var t=window,o;n.deployTemplate=h;n.pollForDeployment=c,function(n){function g(n){var t=Q.defer(),
i;return rt(n)?(n.suppressDefaultNotifications||(i=new e.ClientNotification({status:3,title:o.InitializingDeployment.
label,description:o.InitializingDeployment.message})),h("Initializing template deployment..."),n.suppressDefaultNotifications||
ht(i,n.resourceGroupName),Q.all([nt(n.subscriptionId,n.resourceProviders),p(n.subscriptionId,n.resourceGroupName,
n.resourceGroupLocation)]).then(function(){h("Starting template deployment...");n.suppressDefaultNotifications||
ct(i,n.resourceGroupName);tt(n).then(function(r){if(it(r,n,i),n.deploymentMode&&n.deploymentMode!==1)
{t.notify(r);var u={subscriptionId:n.subscriptionId,deploymentName:n.deploymentName,resourceGroupName:
n.resourceGroupName,correlationId:r.correlationId,getAllOperations:n.deploymentMode===3};y(u).progress(
function(n){t.notify(n)}).then(function(n){at(i,n.resourceGroupName,n.correlationId);t.resolve(n)},function(
r){t.reject(a(r,n,i))})}else t.resolve(r)},function(r){t.reject(a(r,n,i))})},function(r){t.reject(a(
r,n,i))}),t.promise):(t.reject("Template deployment options validation failed."),t.promise)}function y(
i){var u=Q.defer();if(!ut(i))return u.reject("Polling for deployment options validation failed."),u.
promise;var g=v(i.subscriptionId,i.resourceGroupName),it=k(g,i.deploymentName),y=st(g,i.deploymentName),
f,e=0,o=null,s=n.pollingIntervals.fastPolling.interval,nt=d,tt=function(){o&&(t.clearTimeout(o),o=null)}
,p=function(){var i="Deployment is still running ({0}), will check again in {1} {2}.";i=e<=n.pollingIntervals.
fastPolling.count?i.format(e+1,s/1e3,"seconds"):i.format(e+1,s/6e3,"minutes");h(i);e++;s=et(e);o=t.setTimeout(
w,s)},a=function(n,t,r){var f=new Date(Date.parse(n.properties.timestamp)),e;f.getTime()<=t.getTime(
)&&(f=new Date(t.getTime()+1));e={subscriptionId:i.subscriptionId,deploymentName:i.deploymentName,resourceGroupName:
i.resourceGroupName,correlationId:n.properties.correlationId,provisioningState:n.properties.provisioningState,
timestamp:f,operations:r};u.resolve(e)},w=function(){tt();f=new Date;MsPortalFx.Base.Net.ajax({uri:it,
type:"GET",cache:!1,contentType:"application/json",dataType:"json",setAuthorizationHeader:!0}).then(
function(n){var t=b(n);if(!!t){u.reject(t);return}if(n.properties.correlationId!==i.correlationId){u.
reject("Deployment status is unavailable. The correlation id in the deployment polling response did not match.");
return}switch(n.properties.provisioningState.toLowerCase()){case"succeeded":i.getAllOperations?l(i,y).
then(function(t){a(n,f,t)},function(t){c(t);a(n,f)}):a(n,f);break;case"failed":l(i,y,"Failed").then(
function(n){ft(n,!0);u.reject("Deployment to resource group '{0}' failed.".format(i.resourceGroupName))}
,function(n){c(n);u.reject("Deployment to resource group '{0}' failed.".format(i.resourceGroupName))}
);break;default:i.getAllOperations?l(i,y).then(function(t){var r,e;t.length>0&&(r=new Date(Date.parse(
n.properties.timestamp)),r.getTime()<=f.getTime()&&(r=new Date(f.getTime()+1)),e={subscriptionId:i.subscriptionId,
deploymentName:i.deploymentName,resourceGroupName:i.resourceGroupName,correlationId:n.properties.correlationId,
provisioningState:n.properties.provisioningState,timestamp:r,operations:t},u.notify(e));p()},function(
n){c(n);p()}):p()}},function(n){n&&n.status&&(n.status===408||n.status>=500)&&nt>0?(nt--,o=t.setTimeout(
w,s)):u.reject("Polling failed.")})},rt=r.subscribeToArmEvent({source:"Microsoft.Resources",status:"Succeeded",
subStatus:"",operationNameRegex:"Microsoft.Resources/subscriptions/resourcegroups/deployments/write"},
function(n){n&&n.correlationId===i.correlationId&&(tt(),r.removeArmEventSubscription(rt),h("Deployment successful based on the event service. Correlation id: '{0}', at '{1}'".
format(n.correlationId,n.timestamp)),u.promise.inspect().state==="pending"&&a(n,f))});return w(),u.promise}
function p(n,t,i){var r=ot(n,t),u={name:t,location:i};return Q(MsPortalFx.Base.Net.ajax({uri:r,type:
"PUT",contentType:"application/json",data:JSON.stringify(u),setAuthorizationHeader:!0})).then(function(
){h("Resource group '{0}' was created successfully.".format(t))},function(n){return n&&n.status&&n.status===
401?(h("Unauthorized to create resource group '{0}'. Checking if it already exists.".format(t)),Q(MsPortalFx.
Base.Net.ajax({uri:r,type:"GET",cache:!1,contentType:"application/json",dataType:"json",setAuthorizationHeader:
!0})).then(function(n){return h("Resource group '{0}' already exists. Proceeding with the deployment.".
format(t)),Q.resolve(n)},function(n){return Q.reject(n)})):Q.reject(n)})}function nt(n,t){for(var e,
o,f=[],r=0;r<t.length;r++)e=i.ResourceProviders.registerResourceProvidersApi(n,t[r]),o=MsPortalFx.Base.
Net.ajax({uri:e,type:"POST",setAuthorizationHeader:!0}),u.addRegisteredResourceProvider(t[r]),f.push(
o);return Q.all(f).then(function(){h("Resource providers registered for subscription.")})}function tt(
n){var t=Q.defer(),e=v(n.subscriptionId,n.resourceGroupName),o=k(e,n.deploymentName),i,u={},r={properties:
{mode:"incremental",parameters:u}};for(var f in n.parameters)u[f]={value:n.parameters[f]};if(!n.templateJson)
!n.templateLinkUri||(r.properties.templateLink={uri:n.templateLinkUri});else try{r.properties.template=
$.isPlainObject(n.templateJson)?ko.toJS(n.templateJson):JSON.parse(n.templateJson)}catch(s){return t.
reject("Error parsing the template JSON."),t.promise}return i=new Date,h("Deploying template started at {0}.".
format(i)),MsPortalFx.Base.Net.ajax({uri:o,type:"PUT",contentType:"application/json",data:JSON.stringify(
r),setAuthorizationHeader:!0}).then(function(r){var f=b(r),u,e;if(!!f){t.reject(f);return}if(r.properties.
provisioningState.toLowerCase()!=="accepted"){t.reject("Deployment was not accepted.");return}u=new Date(
Date.parse(r.properties.timestamp));u.getTime()<=i.getTime()&&(u=new Date(i.getTime()+1));e={subscriptionId:
n.subscriptionId,deploymentName:n.deploymentName,resourceGroupName:n.resourceGroupName,correlationId:
r.properties.correlationId,provisioningState:r.properties.provisioningState,timestamp:u};t.resolve(e)}
,function(n){t.reject(n)}),t.promise}function l(n,t,i){var r=Q.defer();return!i||(t+="&$filter=provisioningState eq '{0}'".
format(i)),MsPortalFx.Base.Net.ajax({uri:t,type:"GET",cache:!1,contentType:"application/json",dataType:
"json",setAuthorizationHeader:!0}).then(function(n){if($.isEmptyObject(n)||!n.value){r.reject("Deployment operations response was null, undefined, empty, or missing the operations array.");
return}r.resolve(n.value)},function(n){c(n);r.reject("Getting the deployment operations failed.")}),
r.promise}function it(n,t,i){h("Deployment request has been accepted at {0}. Correlation id: {1}.".format(
n.timestamp,n.correlationId));t.suppressDefaultNotifications||lt(i,n.resourceGroupName,n.correlationId)}
function a(n,t,i){var r;return vt(i,t.resourceGroupName),r=n?n.responseJSON&&n.responseJSON.error&&(!!n.
responseJSON.error.message||!!n.responseJSON.error.code)?n.responseJSON.error.code+": "+n.responseJSON.
error.message:n.responseText?n.responseText:n:"Template deployment error occured.",h(r),r}function w(
n){return n?n.subscriptionId?n.deploymentName?n.resourceGroupName?null:"A resource group name was not specified.":
"A deployment name was not specified.":"A subscription id was not specified.":"The options object is null or undefined."}
function rt(n){var t="Cannot start template deployment. {0}",i=w(n);return!i?n.resourceGroupLocation?
!n.templateLinkUri==!n.templateJson?(c(t.format("Specify the template link uri or the template json, but not both.")),
!1):!0:(c(t.format("A resource group location was not specified.")),!1):(c(t.format(i)),!1)}function ut(
n){var t="Cannot start polling for deployment. {0}",i=w(n);return!i?n.correlationId?!0:(c(t.format("A correlation id was not specified.")),
!1):(c(t.format(i)),!1)}function b(n){return $.isEmptyObject(n)||!n.properties?"Deployment response was null, undefined, empty, or missing properties.":
n.properties.provisioningState?n.properties.correlationId?n.properties.timestamp?null:"Deployment response is missing the deployment timestamp.":
"Deployment response is missing the deployment correlation id.":"Deployment response is missing the provisioning state."}
function ft(n,t){var r=[],i,u;if($.isArray(n))for(i=0;i<n.length;i++)u=n[i]&&n[i].properties&&n[i].properties.
statusMessage,!u||(r.push(u),t&&h(u));return r.length===0&&r.push("Deployment failed. Could not get the failure messages from the deployment operations."),
r}function et(t){return t<=n.pollingIntervals.fastPolling.count?n.pollingIntervals.fastPolling.interval:
(t-=n.pollingIntervals.fastPolling.count,t<=n.pollingIntervals.normalPolling.count)?n.pollingIntervals.
normalPolling.interval:n.pollingIntervals.slowPolling.interval}function v(n,t){var i={subscription:n,
resourceGroup:t};return s.buildResourceGroupIdFromDescriptor(i)}function ot(n,t){var r=v(n,t);return i.
Resources.resourceGroupApi(r)}function k(n,t){return i.Deployments.singleDeploymentApi(n+"/deployments/"+
t)}function st(n,t){return i.Deployments.singleDeploymentApi(n+"/deployments/"+t+"/operations")}function ht(
n,t){n.status=3;n.title=o.InitializingDeployment.label;n.description=o.InitializingDeployment.message.
format(t);n.publish()}function ct(n,t){n.status=3;n.title=o.SubmittingDeployment.label;n.description=
o.SubmittingDeployment.message.format(t);n.publish()}function lt(n,t,i){n.status=3;n.title=o.DeploymentStarted.
label;n.description=o.DeploymentStarted.message.format(t);n.correlationIds.push(i);n.publish()}function at(
n,t,i){n?(n.status=4,n.title=o.DeploymentSucceeded.label,n.description=o.DeploymentSucceeded.message.
format(t),n.correlationIds.push(i)):n=new e.ClientNotification({status:4,title:o.DeploymentSucceeded.
label,description:o.DeploymentSucceeded.message.format(t),correlationIds:[i]});n.publish()}function vt(
n,t){n?(n.status=2,n.title=o.DeploymentFailed.label,n.description=o.DeploymentFailed.message.format(
t)):n=new e.ClientNotification({status:2,title:o.DeploymentFailed.label,description:o.DeploymentFailed.
message.format(t)});n.publish()}function h(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(0,"ResourceManager.DeploymentManager",
n)}function c(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"ResourceManager.DeploymentManager",n)}
var d=3,o=f.Notifications.DeployTemplate;n.pollingIntervals={fastPolling:{count:6,interval:1e4},normalPolling:
{count:5,interval:6e4},slowPolling:{count:0,interval:3e5}};n.deployTemplate=g;n.pollForDeployment=y;
n.createResourceGroup=p}(o=n.Internal||(n.Internal={}))}(o||(o={})),o});define("HubsExtension/Notifications/EventSubscriptionService",
["require","exports"],function(){var n;return function(n){"use strict";function i(n,i){if(!n.operationNameRegex&&
!n.source&&!n.status&&!n.subStatus)throw new Error("At least one criteria must be specified.");var r=
MsPortalFx.Util.newGuid();return t.push({cookie:r,criteria:n,callback:i}),r}function r(n){var i=t.filter(
function(t){return t.cookie===n});i.forEach(function(n){t.remove(n)})}function u(n){var i=n.stableSort(
function(n,t){return new Date(n.timestamp.toString()).getTime()-new Date(t.timestamp.toString()).getTime(
)});i.forEach(function(n){t.forEach(function(t){f(n,t.criteria)&&t.callback(n)})})}function f(n,t){if(
t.operationNameRegex){var i=new RegExp(t.operationNameRegex,"ig");if(!i.test(n.operationName))return!1}
return t.source&&n.source.toLowerCase()!==t.source.toLowerCase()?!1:t.status&&(!n.status||n.status.toLowerCase(
)!==t.status.toLowerCase())?!1:t.subStatus&&!n.subStatus&&n.subStatus.toLowerCase()!==t.subStatus.toLowerCase(
)?!1:!0}var t=[];n.subscribeToArmEvent=i;n.removeArmEventSubscription=r;n.matchEvents=u}(n||(n={})),
n});define("HubsExtension/Store/CreateLauncher",["require","exports","../_generated/ExtensionDefinition",
"HubsExtension/HubsCommon","HubsExtension/Common/HubsObservables","HubsExtension/Telemetry","HubsExtension/Common/UserSettingsHelper",
"HubsExtension/Store/StoreClientStrings"],function(n,t,i,r,u,f,e,o){var y=MsPortalFx.Azure.ResourceManager,
h=MsPortalFx.Base.Diagnostics,p=MsPortalFx.Internal.Extension,c=MsPortalFx.Services.Gallery,a=MsPortalFx.
Internal.Hubs.Settings.Schema.Keys,w=MsPortalFx.ViewModels.Services.ResourceTypes,v=MsPortalFx.Base.
Utilities.Internal.Serialization,b=e.UserSettingsHelper,s=MsPortalFx.Base.Utilities,l;return function(
n){"use strict";function d(n,t){var i=t.map(function(t){var i=l.validateSubscription(n,t);return i&&
(i.subscriptionId=t.subscriptionID),i}).filter(function(n){return!!n});return Q.resolve({invalidSubscriptions:
i})}var e=window,t=e&&e.fx&&e.fx.environment,k=function(){function n(){}return Object.defineProperty(
n,"currentInstance",{get:function(){return n._currentInstance},enumerable:!0,configurable:!0}),n.create=
function(){return n._currentInstance||(n._currentInstance=new l.CreateLauncherImpl),n._currentInstance}
,n}(),l;n.CreateLauncherFactory=k;n.validateSubscriptions=d,function(n){function ot(n,t){return nt(n)&&
!it(t)?{subscriptionId:null,displayText:o.CreateLauncher.msdnOfferRequired}:tt(n)&&rt(t)?{subscriptionId:
null,displayText:o.CreateLauncher.billableSubscriptionRequired}:null}function nt(t){var i=t&&$.isArray(
t.categoryIds);return i&&t.categoryIds.some(function(t){return t===n.msdnCategoryId})}function tt(t)
{var i=t,r;return i&&i.galleryItemAccess===1?!1:(r=t&&$.isArray(t.categoryIds),!(r&&t.categoryIds.some(
function(t){return t===n.freeCategoryId})))}function it(t){return n.msdnQuotaIds.indexOf(ut(t))>-1}function rt(
t){return n.zeroDollarQuotaIds.indexOf(ut(t))>-1}function ut(n){return n.subscriptionPolicies&&!!n.subscriptionPolicies.
quotaId&&n.subscriptionPolicies.quotaId.toLowerCase()}n.defaultCreateProvisioningPart=y.Provisioner.
azureResourceManagerProvisioningPart;n.defaultCreateStartboardPart={name:r.resourceGroupPartName,extension:
r.extensionName};n.defaultStartboardPartKeyId="id";n.quotaIdOverrideFlag="hubsExtension_quotaIdOverride";
n.highestAvailableQuotaIdOverride=t&&t.extensionFlags&&t.extensionFlags[n.quotaIdOverrideFlag]&&t.extensionFlags[
n.quotaIdOverrideFlag].toLowerCase();n.fallbackFailureBlade;n.fallbackFailurePart;n.noSubscriptionsFailureBlade;
n.noSubscriptionsFailurePart;n.noMsdnOfferOnSubscriptionsFailureBlade;n.noMsdnOfferOnSubscriptionsFailurePart;
n.zeroDollarSubscriptionsFailureBlade;n.zeroDollarSubscriptionsFailurePart;n.msdnQuotaIds=["msdn_2014-09-01",
"msdndevtest_2014-09-01"];n.zeroDollarQuotaIds=["dreamspark_2015-02-01"];n.msdnCategoryId="47970b32416a";
n.freeCategoryId="free";n.noSubCreateCategoryId=c.noSubCreateCategoryId.toLowerCase();n.uiDefinitionNewSchemaDate=
Date.parse("2015-02-12");var e=MsPortalFx.Base.Diagnostics.Telemetry.trace,l=f.Source.CreateHub,k=f.
Action.CreateFlowLaunched,ft="Blade: {0} | Context: {1}",g=c.Constants.GalleryParametersKey,d=c.Constants.
GalleryOptionsKey,et=function(){function t(){this.hasSubscriptions=ko.observable(!1);this.hasMsdnOfferSubscription=
!1;this.hasZeroDollarSubscriptionsOnly=!1;this.zeroDollarSubscriptionIds=[];this._initializeFailureBladeAndParts(
);this._processUserSubscriptions()}return t.prototype.getCreateFlow=function(n){var t=this;return this.
validateOptions(n).then(this.runAllChecks.bind(this)).then(this.fetchUiDefinition.bind(this)).then(this.
generateCreateFlow.bind(this)).catch(function(i){if(e({source:l,action:k,actionModifier:"FailedToGetBlade",
name:n.galleryItem&&n.galleryItem.itemDisplayName}),i){if(i.alternateBladeSelection)return t._logVerbose(
i.errorMessage+" (Launching the '{0}' blade instead.)".format(i.alternateBladeSelection.detailBlade)),
Q.resolve({bladeSelection:i.alternateBladeSelection});var r=i.errorMessage||i.message;if(!!r)return t.
_logError(r),Q.reject(r)}throw new Error("Create launcher method was not rejected with a message.");
})},t.prototype.validateOptions=function(n){if(!n)return Q.reject(this._getFallbackFailureBlade(n,"Create launcher options cannot be null or undefined."));
if(!n.galleryItem)return Q.reject(this._getFallbackFailureBlade(n,"Create launcher options must contain a gallery item."));
if(!n.galleryItem.definitionTemplates||!n.galleryItem.definitionTemplates.uiDefinitionFileUri)return Q.
reject(this._getFallbackFailureBlade(n,"Create launcher options must contain a gallery item with a valid URI to the UI definition file."));
if(!!n.resourceGroupId){if(!!n.subscriptionId)return Q.reject(this._getFallbackFailureBlade(n,"Create launcher options contain a resourceGroupId and a subscriptionId. Supply only one or the other, but not both."));
if(!!n.resourceGroupName)return Q.reject(this._getFallbackFailureBlade(n,"Create launcher options contain a resourceGroupId and a resourceGroupName. Supply only one or the other, but not both."))}
return n.launchingContext?Q.resolve(n):Q.reject(this._getFallbackFailureBlade(n,"Create launcher options must contain the launching context."))}
,t.prototype.runAllChecks=function(t){var r=this,u=t.galleryItem,f=u&&$.isArray(u.categoryIds),e=f&&
u.categoryIds.some(function(t){return t.toLowerCase()===n.noSubCreateCategoryId}),i;return e?Q.resolve(
t):(i=Q.defer(),this.subscriptionsLoadedPromise.then(function(){var n=[];n.push(r.checkIfUserHasSubscriptions(
t));n.push(r.checkIfUserHasMsdnSubscription(t));n.push(r.checkIfUserHasZeroDollarSubscription(t));Q.
all(n).then(function(){i.resolve(t)},function(n){i.reject(n)})}),i.promise)},t.prototype.checkIfUserHasSubscriptions=
function(n){return this.hasSubscriptions()?Q.resolve({}):this._rejectForUserHasSubscriptionsCheck(n)}
,t.prototype.checkIfUserHasMsdnSubscription=function(n){return nt(n.galleryItem)?this.hasMsdnOfferSubscription?
Q.resolve({}):this._rejectForUserHasMsdnSubscriptionCheck(n):Q.resolve({})},t.prototype.checkIfUserHasZeroDollarSubscription=
function(n){return tt(n.galleryItem)?this.hasZeroDollarSubscriptionsOnly?this._rejectForUserHasZeroDollarSubscriptionCheck(
n):Q.resolve({}):Q.resolve({})},t.prototype.fetchUiDefinition=function(n){var t=this;return MsPortalFx.
Base.Net.ajax({uri:n.galleryItem.definitionTemplates.uiDefinitionFileUri,settings:{dataType:"json",contentType:
"application/json"}}).then(function(i){var r=t.parseUiDefinitionResult(i);return r=t.validateUiDefinitionAndPopulateDefaults(
r),s.extend(n,{uiDefinition:r}),t.populateDefaultsFromUserSettings(n)},function(){return e({source:l,
action:k,actionModifier:"FailedInvalidUIDefinition",name:n.galleryItem.itemDisplayName}),t._getFallbackFailureBlade(
n,"Failed to fetch the UI definition for Gallery Item '{0}'.".format(n.galleryItem.identity))})},t.prototype.
parseUiDefinitionResult=function(n){var r,i,t;if(!n)throw new Error("UI definition result is null or undefined.");
return(r=typeof n=="string"?JSON.parse(n):n,this._isUiDefinitionNewSchema(r.$schema))?r:(i={},t=r.markup&&
r.markup.reference&&r.markup.reference,t&&(i.createDefinition={createBlade:{name:t.bladeName,extension:
t.bladeExtension}},!t.provisioningPartName||(i.createDefinition.provisioningPart={name:t.provisioningPartName,
extension:t.provisioningPartExtension}),!t.partName||(i.createDefinition.startboardPart={name:t.partName,
extension:t.partExtension}),!t.partKeyId||(i.createDefinition.startboardPartKeyId=t.partKeyId)),i.$schema=
undefined,i.initialData=r.parameters,i.declarativeUi=undefined,i.options=r.options,i)},t.prototype.validateUiDefinitionAndPopulateDefaults=
function(t){if(!t)throw new Error("UI definition is null or undefined.");if(t.declarativeUi)throw new
Error("Declarative UI is not supported at the moment.");else if(t.createDefinition&&!t.createDefinition.
createBlade)throw new Error("Both the create blade and declarative UI are undefined. One of them is required for create.");
if(t.createDefinition){var i=t.createDefinition.createBlade,r=t.createDefinition.provisioningPart,u=
t.createDefinition.startboardPart;if(i){if(!i.name||!i.extension)throw new Error("The create blade is not correctly defined in the UI definition.");
}else throw new Error("The create blade is not defined in the UI definition.");if(r){if(!r.name||!r.
extension)throw new Error("The provisioning part is not correctly defined in the UI definition.");}else
t.createDefinition.provisioningPart=t.$schema?n.defaultCreateProvisioningPart:{name:"ProvisionerPart",
extension:MsPortalFx.Base.Constants.ExtensionNames.Hubs};if(u){if(!u.name||!u.extension)throw new Error(
"The startboard part is not correctly defined in the UI definition.");}else t.createDefinition.startboardPart=
n.defaultCreateStartboardPart;t.createDefinition.startboardPartKeyId||(t.createDefinition.startboardPartKeyId=
n.defaultStartboardPartKeyId)}else throw new Error("The UI definition must contain a create definition section.");
return t},t.prototype.populateDefaultsFromUserSettings=function(n){var t,i,r;if(n.resourceGroupId?(r=
w.parseResourceGroupDescriptor(n.resourceGroupId),r&&(t=r.subscription,i=r.resourceGroup)):(t=n.subscriptionId,
i=n.resourceGroupName),!!n.subscriptionId&&!!n.resourceGroupLocation)return s.extend(n,{subscriptionId:
t,resourceGroupName:i,resourceGroupLocation:n.resourceGroupLocation,existingResourceGroup:!0}),Q.resolve(
n);var u=a.galleryCreateLauncherLastUsedSubscriptionIdKey,f=a.galleryCreateLauncherLastUsedResourceGroupLocationKey,
e=[u,f];return b.readSettings(e).then(function(r){return s.extend(n,{subscriptionId:t||r[u]||"",resourceGroupName:
i||"",resourceGroupLocation:n.resourceGroupLocation||r[f]||""})})},t.prototype.generateCreateFlow=function(
n){var t=this;return this.checkForCreateFlowOverride(n).then(function(i){var r,c="Default",o=t.generateBladeInputs(
n),f,h,u,a;return i?(r=s.clone(i,!0),s.extend(o,r.bladeSelection.detailBladeInputs),r.bladeSelection.
detailBladeInputs=o,c="OverriddenByExtension"):(f={},h=n.uiDefinition.createDefinition.createBlade,f.
extension=h.extension,f.detailBlade=h.name,f.detailBladeInputs=o,r={bladeSelection:f,isOldCreate:!n.
uiDefinition.$schema}),u=n&&n.launchingContext,a=u&&$.isArray(u.source)&&u.source.length>0?u.source[
u.source.length-1]:"Unknown",e({source:l,action:k,actionModifier:c,name:n.galleryItem&&n.galleryItem.
itemDisplayName,data:ft.format(r.bladeSelection.detailBlade,a)}),Q.resolve(r)},function(i){return e(
{source:l,action:k,actionModifier:"FailedPreCheck",name:n.galleryItem&&n.galleryItem.itemDisplayName}),
Q.reject(t._getFallbackFailureBlade(n,"The 'galleryCreatePreCheck' should never reject. Failure: "+i))}
)},t.prototype.checkForCreateFlowOverride=function(n,t){var u=this,r=n.uiDefinition.createDefinition.
createBlade.extension;return r===i.definitionName?Q.resolve(undefined):(t||(t=Rpc.client),p.getExtensionGalleryService.
acquireObject(t,r,undefined).then(function(t){var r=t&&t.getValue(),f,i;return r?(f=r.content,i=f.galleryCreatePreCheck(
n.galleryItem),i?i.then(function(t){if(!t)return Q.resolve(undefined);return{bladeSelection:t,isOldCreate:
!n.uiDefinition.$schema}},function(){return Q.reject(u._getFallbackFailureBlade(n,"The call to 'galleryCreatePreCheck' was rejected on the extension's gallery service view model. The 'galleryCreatePreCheck' should never reject."))}
).finally(function(){t.dispose()}):(t.dispose(),Q.resolve(undefined))):Q.resolve(undefined)},function(
n){return Q.reject("The 'galleryCreatePreCheck' operation failed: "+n)}))},t.prototype.generateBladeInputs=
function(n){var t=n.uiDefinition;return t.$schema?this.generateBladeInputsForNewCreate(n):this.generateBladeInputsForOldCreate(
n)},t.prototype.generateBladeInputsForNewCreate=function(n){var t=n.uiDefinition,i=n.galleryItem,f,e,
o,r,u;return f={galleryItem:this.generateGalleryItemExtract(n),launchingContext:n&&n.launchingContext,
subscriptionId:n.subscriptionId,resourceGroupName:n.resourceGroupName,resourceGroupLocation:n.resourceGroupLocation,
deploymentName:"{0}.{1}".format(i.publisher,i.itemName),deploymentTemplateFileUris:i.definitionTemplates.
deploymentTemplateFileUris,deploymentFragmentFileUris:i.definitionTemplates.deploymentFragmentFileUris},
o=typeof n.provisioningEnabled=="boolean"?n.provisioningEnabled:!n.inlineGalleryCreateInputs,e={provisioningEnabled:
o,startboardProvisioningInfo:{provisioningPart:t.createDefinition.provisioningPart,startboardPart:t.
createDefinition.startboardPart,startboardPartKeyId:t.createDefinition.startboardPartKeyId},galleryCreateOptions:
f},r=s.extend(t.options,{provisioningConfig:e}),s.extend(r,n.additionalConfig),n.inlineGalleryCreateInputs&&
(u=n.inlineGalleryCreateInputs,s.extend(t.initialData,u.initialData),s.extend(r,u.providerConfig)),{
internal_bladeCallId:MsPortalFx.Util.newGuid(),internal_bladeCallerParams:{initialData:v.toSerializableObject(
t.initialData),providerConfig:v.toSerializableObject(r)},internal_parameterProviderActionBarOutput:{
action:0,status:0}}},t.prototype.generateBladeInputsForOldCreate=function(n){var f=n.galleryItem,i=n.
uiDefinition,e={},r,h,o;for(r in i.initialData){r in e||(e[r]={});for(h in i.initialData[r])e[r][h]=
""}var c=this.generateGalleryItemExtract(n),u={subscriptionId:n.subscriptionId,resourceGroupLocation:
n.resourceGroupLocation,resourceGroupName:n.resourceGroupName,resourceProviders:"",selectedTemplateId:
"",templateJson:"",primaryResourceId:"",deploymentName:"{0}.{1}".format(f.publisher,f.itemName)},t={
inputMetadata:i.initialData||{},inputParameters:e,options:{galleryOptions:{galleryItem:c,deploymentName:
u.deploymentName,uiDefinition:{markup:{reference:{bladeName:i.createDefinition.createBlade.name,bladeExtension:
i.createDefinition.createBlade.extension,provisioningPartName:i.createDefinition.provisioningPart.name,
provisioningPartExtension:i.createDefinition.provisioningPart.extension,partName:i.createDefinition.
startboardPart.name,partExtension:i.createDefinition.startboardPart.extension,partKeyId:i.createDefinition.
startboardPartKeyId}}},deploymentTemplateFileUris:f.definitionTemplates.deploymentTemplateFileUris,deploymentFragmentFileUris:
f.definitionTemplates.deploymentFragmentFileUris}}};return s.extend(t.options,n.uiDefinition.options),
typeof n.provisioningEnabled=="boolean"?(t.options.enableProvisioning=n.provisioningEnabled,t.options.
parameterCollection={enableProvisioning:n.provisioningEnabled}):(t.options.enableProvisioning=!n.inlineGalleryCreateInputs,
t.options.parameterCollection={enableProvisioning:!n.inlineGalleryCreateInputs}),u.subscriptionId=n.
subscriptionId,u.resourceGroupName=n.resourceGroupName,u.resourceGroupLocation=n.resourceGroupLocation,
n.existingResourceGroup&&(!n.subscriptionId||(t.options[d].subscriptionId=n.subscriptionId),!n.resourceGroupName||
(t.options[d].resourceGroupName=n.resourceGroupName),!n.resourceGroupLocation||(t.options[d].resourceGroupLocation=
n.resourceGroupLocation)),n.inlineGalleryCreateInputs&&(o=n.inlineGalleryCreateInputs,s.extend(t.inputParameters,
o.inputParameters),s.extend(t.inputMetadata,o.inputMetadata),s.extend(t.options,o.options)),t.inputParameters[
g]=u,t.inputMetadata[g]={subscriptionId:{defaultValue:"",displayName:"Subscription Name",toolTip:"Enter subscription name...",
constraints:{required:!1}},resourceGroupLocation:{defaultValue:"",displayName:"Region Name",toolTip:
"Enter region name...",constraints:{required:!1}}},{"collectorBindingInternals-inputs":t,"collectorBindingInternals-errors":
{},"wizard-savedState":{stepStatuses:[]},stepInput:ko.observable({isLastStep:!0,status:0,allowToggleProvisioningLocation:
!n.inlineGalleryCreateInputs})}},t.prototype.generateGalleryItemExtract=function(n){if(!n||!n.galleryItem)
return undefined;var t=n.galleryItem,i=[],r=[];return t.products&&t.products.length>0&&t.products.forEach(
function(n){n.offerDetails?i.push(n):r.push(n)}),{id:t.identity,itemDisplayName:t.itemDisplayName,publisherDisplayName:
t.publisherDisplayName,version:t.version,categoryIds:t.categoryIds,products:i,productsWithNoPricing:
r,launchingContext:n&&n.launchingContext}},t.prototype._initializeFailureBladeAndParts=function(){n.
fallbackFailureBlade={name:"GalleryLaunchCreateFailedBlade",extension:r.extensionName};n.fallbackFailurePart=
{name:"GalleryLaunchCreateFailedStartPart",extension:r.extensionName};n.noSubscriptionsFailureBlade=
{name:"NoSubscriptionsBlade",extension:r.extensionName};n.noSubscriptionsFailurePart={name:"NoSubscriptionsStartPartForCreate",
extension:r.extensionName};n.noMsdnOfferOnSubscriptionsFailureBlade={name:"NoMsdnOfferOnSubscriptionsBlade",
extension:r.extensionName};n.noMsdnOfferOnSubscriptionsFailurePart={name:"NoMsdnOfferOnSubscriptionsStartPartForCreate",
extension:r.extensionName};n.zeroDollarSubscriptionsFailureBlade={name:"UpgradeSubscriptionBlade",extension:
r.billingExtensionName};n.zeroDollarSubscriptionsFailurePart={name:"UpgradeSubscriptionPart",extension:
r.billingExtensionName}},t.prototype._processUserSubscriptions=function(){var t=this,r=u.getSubscriptionsObservable(
),i=Q.defer();this.subscriptionsLoadedPromise=i.promise;n.highestAvailableQuotaIdOverride?(this.hasSubscriptions(
!0),this.hasMsdnOfferSubscription=n.msdnQuotaIds.indexOf(n.highestAvailableQuotaIdOverride)>-1,this.
zeroDollarSubscriptionIds=n.zeroDollarQuotaIds.indexOf(n.highestAvailableQuotaIdOverride)>-1?[n.highestAvailableQuotaIdOverride]:
[],this.hasZeroDollarSubscriptionsOnly=this.zeroDollarSubscriptionIds.length===1,i.resolve()):r.subscribe(
function(n){var f=!!n&&!!n.subscriptions,e=f&&n.subscriptions.length>0;if(t.hasSubscriptions(e),e){var
r=!1,o=!1,u=[];n.subscriptions.forEach(function(n){r=r||it(n);rt(n)?u.push(n.subscriptionID):o=!0});
t.hasMsdnOfferSubscription=r;t.zeroDollarSubscriptionIds=u;t.hasZeroDollarSubscriptionsOnly=u.length>
0&&!o}else t.hasMsdnOfferSubscription=!1,t.zeroDollarSubscriptionIds=[],t.hasZeroDollarSubscriptionsOnly=
!1;f&&i.resolve()})},t.prototype._isUiDefinitionNewSchema=function(t){if(!t)return!1;var i="schemas/",
r=t.indexOf(i)+i.length,u=t.substr(r,10),f=Date.parse(u);return f>=n.uiDefinitionNewSchemaDate},t.prototype.
_getFallbackFailureBlade=function(t,i){var r={extension:n.fallbackFailureBlade.extension,detailBlade:
n.fallbackFailureBlade.name,detailBladeInputs:{galleryItem:t&&t.galleryItem,"collectorBindingInternals-inputs":
{options:{galleryOptions:{uiDefinition:{markup:{reference:{provisioningPartName:n.fallbackFailurePart.
name,provisioningPartExtension:n.fallbackFailurePart.extension}}}}}},"collectorBindingInternals-commit":
""}};return this._logWarning(i),{errorMessage:i,alternateBladeSelection:r,isOldCreate:!0}},t.prototype.
_rejectForUserHasSubscriptionsCheck=function(t){var i="No subscriptions were detected by the create launcher.",
r=this._getFailureBladeSelection(n.noSubscriptionsFailureBlade.name,n.noSubscriptionsFailureBlade.extension,
n.noSubscriptionsFailurePart.name,n.noSubscriptionsFailurePart.extension,t&&t.galleryItem);return this.
_logWarning(i),Q.reject({errorMessage:i,alternateBladeSelection:r,isOldCreate:!0})},t.prototype._rejectForUserHasMsdnSubscriptionCheck=
function(t){var i="No subscriptions with MSDN offers were detected by the create launcher.",r=this._getFailureBladeSelection(
n.noMsdnOfferOnSubscriptionsFailureBlade.name,n.noMsdnOfferOnSubscriptionsFailureBlade.extension,n.noMsdnOfferOnSubscriptionsFailurePart.
name,n.noMsdnOfferOnSubscriptionsFailurePart.extension,t.galleryItem);return this._logWarning(i),Q.reject(
{errorMessage:i,alternateBladeSelection:r,isOldCreate:!0})},t.prototype._rejectForUserHasZeroDollarSubscriptionCheck=
function(t){var r=$.isArray(this.zeroDollarSubscriptionIds)&&this.zeroDollarSubscriptionIds.length>0&&
this.zeroDollarSubscriptionIds[0],i="No non-zero dollar subscriptions were detected by the create launcher.",
u=this._getFailureBladeSelection(n.zeroDollarSubscriptionsFailureBlade.name,n.zeroDollarSubscriptionsFailureBlade.
extension,n.zeroDollarSubscriptionsFailurePart.name,n.zeroDollarSubscriptionsFailurePart.extension,t.
galleryItem,{subscriptionId:r});return this._logWarning(i),Q.reject({errorMessage:i,alternateBladeSelection:
u,isOldCreate:!0})},t.prototype._getFailureBladeSelection=function(n,t,i,r,u,f){var o={"collectorBindingInternals-inputs":
{options:{galleryOptions:{uiDefinition:{markup:{reference:{provisioningPartName:i,provisioningPartExtension:
r}}}}}}},s={extension:t,detailBlade:n,detailBladeInputs:MsPortalFx.Base.Utilities.extend(o,f)};return e(
{source:l,action:k,actionModifier:n,name:u&&u.itemDisplayName}),s},t.prototype._logError=function(n)
{h.Log.writeEntry(2,"Hubs.CreateLauncher",n)},t.prototype._logVerbose=function(n){h.Log.writeEntry(0,
"Hubs.CreateLauncher",n)},t.prototype._logWarning=function(n){h.Log.writeEntry(1,"Hubs.CreateLauncher",
n)},t}();n.CreateLauncherImpl=et;n.validateSubscription=ot}(l=n.Internal||(n.Internal={}))}(l||(l={})
),l});define("HubsExtension/Generated/SvgDefinitions",["require","exports"],function(){var n;return function(
n){"use strict";var t;(function(n){var t,i;(function(n){var t;(function(n){n.copy={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect x="0" width="23" height="23" class="msportalfx-svg-c01"/> <rect opacity="0.6" fill="#32383F" enable-background="new " width="23" height="23"/> <g> <polygon points="6.9,5.5 6,5.5 6,6.4 6,15.6 6.9,15.6 8.7,15.6 8.7,14.7 6.9,14.7 6.9,6.4 12.4,6.4 12.4,6.4 13.3,6.4 13.3,6.4 13.3,5.5 " class="msportalfx-svg-c01"/> <path d="M16.1,10.1V9.2h-0.9v-1h-0.9V7.3h-3.7H9.7v0.9v8.3v0.9h0.9h5.5H17v-0.9V10h-0.9V10.1z M10.6,16.5V8.2h2.8 V11h0.9h0.9h0.9v5.5H10.6z" class="msportalfx-svg-c01"/> <\/g> <\/svg>'};
n.copyColor={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect y="0" width="23" height="23" class="msportalfx-svg-c15"/> <g> <polygon points="6.9,5.5 6,5.5 6,6.4 6,15.6 6.9,15.6 8.7,15.6 8.7,14.7 6.9,14.7 6.9,6.4 12.4,6.4 12.4,6.4 13.3,6.4 13.3,6.4 13.3,5.5 " class="msportalfx-svg-c01"/> <path d="M16.1,10.1V9.2h-0.9v-1h-0.9V7.3h-3.7H9.7v0.9v8.3v0.9h0.9h5.5H17v-0.9V10h-0.9V10.1z M10.6,16.5V8.2h2.8 V11h0.9h0.9h0.9v5.5H10.6z" class="msportalfx-svg-c01"/> <\/g> <\/svg>'};
n.email={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect x="0" width="23" height="23" class="msportalfx-svg-c01"/> <rect opacity="0.6" fill="#32383F" enable-background="new " width="23" height="23"/> <path d="M16.9,6.9H6.1c-0.4,0-0.6,0.3-0.6,0.6v7.9c0,0.3,0.3,0.6,0.6,0.6h10.8c0.4,0,0.6-0.3,0.6-0.6V7.6 C17.5,7.2,17.2,6.9,16.9,6.9z M16.2,7.9l-4.8,3.7L6.7,7.9H16.2z M6.4,15.2V9l4.6,3.6c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1 l4.8-3.7v6.3L6.4,15.2z" class="msportalfx-svg-c01"/> <\/svg>'};
n.emailColor={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect x="0.0000019" fill="#00BCF2" width="23" height="23"/> <path d="M16.9000034,6.9400001H6.1240115c-0.3600001,0-0.6240091,0.2639942-0.6240091,0.6239939V15.46 c0,0.3359909,0.264009,0.5999994,0.6240091,0.5999994h10.751997c0.3599987,0,0.6239929-0.2640085,0.6239929-0.5999994V7.5639939 C17.5000019,7.2039943,17.2360077,6.9400001,16.9000034,6.9400001z M16.1752129,7.9000001l-4.7712164,3.6960053L6.6685085,7.9000001 H16.1752129z M6.4360085,15.1841259L6.415647,9.0073051l4.6043553,3.620698 c0.1199999,0.0719967,0.2399998,0.1199999,0.3839941,0.1199999c0.1440086,0,0.2640095-0.0480032,0.3840094-0.1440086 l4.7553368-3.6916409l0.0206547,6.2596436L6.4360085,15.1841259z" class="msportalfx-svg-c01"/> <\/svg>'};
n.facebook={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect x="0" width="23" height="23" class="msportalfx-svg-c01"/> <rect opacity="0.6" fill="#32383F" enable-background="new " width="23" height="23"/> <path d="M14.3,7.6c-0.4,0-0.9,0-1.3,0c-0.3,0-0.6,0.2-0.6,0.5c0,0.5,0,0.9,0,1.4c0.6,0,1.3,0,1.9,0 c0,0.7-0.1,1.4-0.2,2c-0.6,0-1.1,0-1.7,0c0,2,0,4,0,6c-0.8,0-1.7,0-2.5,0c0-2,0-4,0-6c-0.4,0-0.8,0-1.2,0c0-0.7,0-1.3,0-2 c0.4,0,0.8,0,1.2,0c0-0.7,0-1.3,0-2c0-0.5,0.2-1,0.6-1.4c0.5-0.4,1.1-0.6,1.8-0.6s1.3,0,2,0C14.3,6.2,14.3,6.9,14.3,7.6z" class="msportalfx-svg-c01"/> <\/svg>'};
n.facebookColor={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g> <rect fill="#305CAF" width="23" height="23"/> <path d="M14.2983227,7.5658846c-0.4291992-0.0007324-0.8586426,0.0010376-1.2878418-0.0007324 c-0.2719727-0.0169678-0.5515137,0.18927-0.6010742,0.4590454c-0.0063477,0.46875-0.0021973,0.9377441-0.0019531,1.4064941 c0.6293945,0.0025635,1.2587891-0.0007935,1.8881836,0.0015869c-0.0461426,0.6781006-0.130127,1.3530884-0.2290039,2.0254517 c-0.5559082,0.005188-1.1120605-0.0005493-1.6679688,0.0028687c-0.0048828,1.999939,0.0024414,3.999939-0.0039062,5.9998789 c-0.8259277,0.0033569-1.6520996-0.0015869-2.4780273,0.0023193c-0.015625-2.0002451,0.0014648-4.0014658-0.0085449-6.001893 c-0.402832-0.0042114-0.8059082,0.0028687-1.2087402-0.003418c0.0014648-0.6723633,0.0004883-1.3447266,0.0007324-2.0168457 C9.102766,9.4356966,9.5055981,9.441678,9.908186,9.4377718c0.0124512-0.6536255-0.012207-1.3080444,0.0129395-1.9611816 c0.0402832-0.5172119,0.2373047-1.038269,0.6240234-1.3955688c0.4680176-0.4455566,1.1335449-0.5960693,1.7614746-0.6148071 c0.6640625-0.0059814,1.3278809-0.0023804,1.9919434-0.0020752C14.3010082,6.1646395,14.3014965,6.8653841,14.2983227,7.5658846z" class="msportalfx-svg-c01"/> <\/g> <\/svg>'};
n.google={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect x="0" y="-1" width="23" height="23" class="msportalfx-svg-c01"/> <rect opacity="0.6" fill="#32383F" enable-background="new " width="23" height="23"/> <g> <path d="M11.8,12.4L11.2,12c-0.2-0.1-0.4-0.3-0.4-0.7c0-0.3,0.2-0.6,0.4-0.8c0.7-0.5,1.3-1.1,1.3-2.2 c0-1.2-0.7-1.8-1.1-2.1h1l1-0.6h-3.1c-0.8,0-2.1,0.2-3,0.9c-0.7,0.6-1,1.4-1,2.1C6.4,9.8,7.4,11,9,11c0.2,0,0.3,0,0.5,0 c-0.1,0.2-0.2,0.3-0.2,0.6c0,0.5,0.2,0.8,0.5,1.1c-0.7,0-2,0.1-3,0.7c-0.9,0.5-1.2,1.3-1.2,1.9c0,1.2,1.1,2.2,3.4,2.2 c2.7,0,4.1-1.5,4.1-3C13.1,13.5,12.5,12.9,11.8,12.4z M9.8,10.6c-1.3,0-2-1.7-2-2.8c0-0.4,0.1-0.8,0.3-1.2c0.3-0.3,0.7-0.5,1.1-0.5 c1.3,0,2,1.8,2,2.9c0,0.3,0,0.8-0.4,1.1C10.6,10.4,10.2,10.6,9.8,10.6z M9.8,16.8C8.1,16.8,7,16,7,14.9s1-1.5,1.3-1.6 C9,13.1,9.8,13,9.9,13c0.2,0,0.2,0,0.4,0c1.2,0.8,1.7,1.3,1.7,2.1C12.1,16.1,11.3,16.8,9.8,16.8z" class="msportalfx-svg-c01"/> <polygon points="15.8,10.5 15.8,9 15,9 15,10.5 13.4,10.5 13.4,11.3 15,11.3 15,12.9 15.8,12.9 15.8,11.3 17.3,11.3 17.3,10.5 " class="msportalfx-svg-c01"/> <\/g> <\/svg>'};
n.googleColor={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect x="0.000001" fill="#DE3737" width="23" height="23"/> <g> <path d="M11.8196459,12.3507862l-0.5627165-0.4369774c-0.1713724-0.142127-0.405755-0.3297462-0.405755-0.6731968 c0-0.3448639,0.2343817-0.5641298,0.4378252-0.767148c0.6555367-0.5159531,1.3105087-1.0651064,1.3105087-2.2223272 c0-1.1899972-0.7487822-1.8160067-1.1076307-2.1129766h0.9676228l1.0156593-0.6381593h-3.0769272 c-0.844286,0-2.0609856,0.199769-2.9517522,0.9351292c-0.67136,0.579246-0.9988461,1.3778992-0.9988461,2.0968704 c0,1.2205143,0.9371066,2.4576988,2.5919137,2.4576988c0.1562557,0,0.3272038-0.0153999,0.4992819-0.0313644 c-0.07728,0.1880436-0.155407,0.3445816-0.155407,0.6103277c0,0.4847298,0.2490759,0.7819815,0.4686241,1.0635519 c-0.7031479,0.0483179-2.0157762,0.1261625-2.9833994,0.7209492c-0.921566,0.5480232-1.2020063,1.3456879-1.2020063,1.9086866 C5.6666412,16.4206238,6.7588735,17.5,9.0237246,17.5c2.6857243,0,4.1075611-1.4861183,4.1075611-2.957262 C13.1314268,13.4618082,12.5069714,12.9297495,11.8196459,12.3507862z M9.7740602,10.5511675 c-1.3435688,0-1.9522009-1.7368898-1.9522009-2.7849021c0-0.4080153,0.07728-0.8293104,0.3430271-1.1583509 C8.4153748,6.2945566,8.8516464,6.0912552,9.258955,6.0912552c1.2952509,0,1.9670343,1.7524314,1.9670343,2.8795595 c0,0.2819939-0.0310812,0.7817001-0.390214,1.142951C10.5845804,10.3643961,10.1642742,10.5511675,9.7740602,10.5511675z M9.7894592,16.8441811c-1.6707716,0-2.7481685-0.7992172-2.7481685-1.9105225c0-1.111022,0.9989867-1.4868259,1.3427205-1.6112928 c0.6555367-0.2205372,1.4991169-0.2513361,1.6398315-0.2513361c0.1561136,0,0.2342415,0,0.3585682,0.0156813 c1.1877365,0.8452759,1.7032652,1.266571,1.7032652,2.0667782C12.0856752,16.1225262,11.2890005,16.8441811,9.7894592,16.8441811z" class="msportalfx-svg-c01"/> <polygon points="15.7633228,10.5272913 15.7633228,8.9626207 14.9905233,8.9626207 14.9905233,10.5272913 13.4283953,10.5272913 13.4283953,11.3087091 14.9905233,11.3087091 14.9905233,12.8829861 15.7633228,12.8829861 15.7633228,11.3087091 17.3333607,11.3087091 17.3333607,10.5272913 " class="msportalfx-svg-c01"/> <\/g> <\/svg>'};
n.linkedIn={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect x="0" y="-1" width="23" height="23" class="msportalfx-svg-c01"/> <rect opacity="0.6" fill="#32383F" enable-background="new " width="23" height="23"/> <g> <rect x="5.7" y="9.3" width="2.6" height="7.7" class="msportalfx-svg-c01"/> <path d="M7,5.5c-0.9,0-1.5,0.6-1.5,1.3s0.6,1.3,1.4,1.3l0,0l0,0c0.9,0,1.5-0.6,1.5-1.3S7.8,5.5,7,5.5z" class="msportalfx-svg-c01"/> <path d="M14.5,9.1c-1.4,0-2,0.8-2.3,1.3V9.3H9.6c0,0.7,0,7.7,0,7.7h2.6v-4.3c0-0.2,0-0.5,0.1-0.6 c0.2-0.5,0.6-0.9,1.3-0.9c0.9,0,1.3,0.7,1.3,1.8v4h2.6v-4.4C17.5,10.2,16.2,9.1,14.5,9.1z" class="msportalfx-svg-c01"/> <\/g> <\/svg>'};
n.linkedInColor={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect fill="#0080B5" width="23" height="23"/> <g> <rect x="5.6520386" y="9.2667236" width="2.5723877" height="7.7391968" class="msportalfx-svg-c01"/> <path d="M6.9552612,5.5358887C6.0753174,5.5358887,5.5,6.1136475,5.5,6.8730469 c0,0.7426758,0.5582275,1.3369751,1.4215088,1.3369751h0.0166626h0.000061c0.8970337,0,1.4553833-0.5942993,1.4553833-1.3369751 C8.3768921,6.1136475,7.8352661,5.5358887,6.9552612,5.5358887z" class="msportalfx-svg-c01"/> <path d="M14.5385132,9.085083c-1.3665161,0-1.9766235,0.7510986-2.3182373,1.2785645V9.2667236H9.6478882 c0.0337524,0.7261963,0,7.7391968,0,7.7391968h2.5722656V12.684021c0-0.2313232,0.0167236-0.4624023,0.0846558-0.6277466 c0.1859741-0.4620972,0.6092529-0.9407349,1.3198853-0.9407349c0.9307861,0,1.3031616,0.7097168,1.3031616,1.750061v4.1403198H17.5 v-4.437561C17.5,10.1912231,16.230896,9.085083,14.5385132,9.085083z" class="msportalfx-svg-c01"/> <\/g> <\/svg>'};
n.twitter={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect x="0" y="-1" width="23" height="23" class="msportalfx-svg-c01"/> <rect opacity="0.6" fill="#32383F" enable-background="new " width="23" height="23"/> <path d="M17.5,7.8C17.3,7.9,17,8,16.8,8c-0.2,0.1-0.5,0.1-0.7,0.2c0.3-0.2,0.5-0.4,0.7-0.6s0.3-0.5,0.4-0.8 c-0.3,0.1-0.5,0.2-0.8,0.3c-0.3,0.1-0.5,0.2-0.8,0.2c-0.2-0.3-0.5-0.4-0.8-0.6c-0.3-0.1-0.6-0.2-1-0.2c-0.7,0-1.2,0.2-1.7,0.7 S11.4,8.3,11.4,9c0,0.1,0,0.3,0.1,0.6c-1,0-2-0.3-2.9-0.8C7.7,8.4,7,7.8,6.3,7.1C6.1,7.4,6,7.9,6,8.3c0,0.9,0.4,1.6,1.1,2 c-0.4,0-0.8-0.1-1.1-0.3l0,0c0,0.6,0.2,1.1,0.6,1.6C7,12,7.4,12.3,8,12.4c-0.1,0-0.2,0-0.3,0.1s-0.2,0-0.4,0c-0.1,0-0.2,0-0.4-0.1 c0.1,0.6,0.4,1,0.8,1.3s0.9,0.5,1.5,0.5c-0.9,0.7-1.9,1-3,1H5.5C6,15.5,6.6,15.8,7.3,16c0.6,0.2,1.3,0.3,2,0.3c1.1,0,2.1-0.2,3-0.6 c0.9-0.4,1.6-1,2.2-1.6c0.6-0.7,1-1.4,1.3-2.2s0.4-1.7,0.4-2.5V9.1c0.3-0.2,0.5-0.4,0.7-0.6C17.2,8.2,17.3,8,17.5,7.8z" class="msportalfx-svg-c01"/> <\/svg>'};
n.twitterColor={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect fill="#07B1EA" width="23" height="23"/> <path d="M17.5,7.7820973c-0.2306843,0.092804-0.4613686,0.1679311-0.6920528,0.2253814 c-0.2306843,0.0574493-0.4728584,0.1095972-0.7256393,0.1555567c0.2527809-0.1608601,0.4719753-0.3570743,0.6566982-0.5877585 c0.1847248-0.2306843,0.334095-0.4843483,0.4498787-0.760993c-0.2545471,0.1157842-0.5135155,0.2306843-0.7786694,0.3455844 c-0.2651539,0.1157842-0.547102,0.1962142-0.8467264,0.2421746c-0.2077045-0.2536645-0.4613686-0.4498787-0.760993-0.587759 c-0.2996244-0.1387639-0.6346025-0.2077041-1.0031672-0.2077041c-0.6690722,0-1.2444572,0.2421741-1.7288055,0.7265229 s-0.7265234,1.0721068-0.7265234,1.7632756c0,0.1387644,0.0229807,0.3234882,0.0698242,0.5532894 c-1.0376368-0.0459604-1.988657-0.2987404-2.8530598-0.7601089C7.695477,8.4281902,6.9521613,7.817451,6.3299322,7.0564585 c-0.2077041,0.3924284-0.3111143,0.806953-0.3111143,1.2444572c0,0.9227371,0.3570747,1.6033001,1.0721073,2.0408049 c-0.4154086,0-0.7839727-0.0919209-1.1065774-0.2766447v0.0344696c0,0.6001329,0.1838403,1.1242542,0.5532889,1.5732489 c0.3685641,0.4498787,0.8299327,0.7327099,1.3832216,0.8476105c-0.0928044,0.0229797-0.1909113,0.040657-0.2943215,0.0521469 S7.4020395,12.589345,7.2632756,12.589345c-0.0919204,0-0.2306843-0.0220966-0.4145246-0.0689402 c0.1378803,0.4843483,0.4145246,0.8873825,0.8299327,1.2099876c0.4145246,0.3234882,0.8988729,0.4967222,1.4521623,0.5188179 c-0.8758936,0.6920528-1.8905506,1.0376377-3.043088,1.0376377H5.4999995 c0.5303082,0.3455839,1.1180673,0.6169252,1.7632761,0.813139c0.6452088,0.1962147,1.314281,0.293438,2.0063338,0.293438 c1.1286736,0,2.1318407-0.213007,3.0086174-0.6399059c0.8758936-0.4260139,1.6077194-0.9731159,2.1954784-1.642189 c0.5877581-0.6681881,1.0314503-1.4176912,1.3319578-2.2476244c0.2987413-0.8308163,0.4489946-1.6607494,0.4489946-2.4906826 V9.0619087c0.253664-0.1838408,0.4843483-0.3853579,0.6920528-0.6054354C17.1544151,8.238163,17.3382549,8.0136652,17.5,7.7820973z" class="msportalfx-svg-c01"/> <\/svg>'};
n.yammer={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect opacity="0.6" fill="#32383F" enable-background="new " width="23" height="23"/> <g> <g> <path d="M15.4,5.6c0.2-0.1,0.5,0,0.7,0.2c0.1,0.2,0,0.5-0.2,0.7c-0.2,0.1-2.5,1.2-2.7,1 C13.1,7.2,15.2,5.7,15.4,5.6z" class="msportalfx-svg-c01"/> <path d="M12.7,8.5l-2.8,7c-0.5,1.2-0.9,2-2.4,2c-0.2,0-0.4,0-0.6,0c-0.3-0.1-0.5-0.3-0.4-0.6 c0-0.2,0.3-0.4,0.5-0.4c0,0,0.3,0,0.4,0c0.8,0,1.1-0.5,1.5-1.6L6.4,8.5c-0.1-0.3,0-0.7,0.4-0.8c0.3-0.1,0.7,0.1,0.8,0.4l2,5.3l0,0 l2-5.3c0.1-0.3,0.4-0.5,0.7-0.4C12.7,7.9,12.8,8.2,12.7,8.5z" class="msportalfx-svg-c01"/> <path d="M16.1,11.5c-0.1,0.2-0.4,0.3-0.7,0.2c-0.2-0.1-2.3-1.6-2.2-1.8s2.5,0.9,2.7,1S16.2,11.3,16.1,11.5z" class="msportalfx-svg-c01"/> <path d="M16.7,9.1c-0.2,0-2.8-0.2-2.8-0.5s2.6-0.5,2.8-0.5c0.3,0,0.5,0.2,0.5,0.5C17.2,8.9,17,9.1,16.7,9.1z" class="msportalfx-svg-c01"/> <\/g> <\/g> <\/svg>'};
n.yammerColor={type:1,data:'<svg viewBox="0 0 23 23" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect width="23" height="23" class="msportalfx-svg-c19"/> <g> <path d="M15.8988028,6.4169488c0.2047129-0.1229248,0.2867441-0.4098511,0.1639414-0.6556396 c-0.1230478-0.2458496-0.4096689-0.3277588-0.6555185-0.2047729c-0.2050781,0.1228638-2.3354492,1.5979004-2.2125244,1.843689 C13.3585196,7.6460137,15.6530752,6.5397515,15.8988028,6.4169488z" class="msportalfx-svg-c01"/> <path d="M12.3774405,7.7843194c-0.3278809-0.0819702-0.6556396,0.1173706-0.7375488,0.4041133l-2.0075684,5.274353 H9.5913076L7.5428462,8.1518726C7.3789053,7.8651299,7.0510244,7.6345391,6.7232656,7.757525 C6.3955069,7.8803887,6.2316885,8.2577686,6.3544912,8.5445728l2.6223145,6.3677368 c-0.3688965,1.024231-0.6965332,1.5504761-1.4752197,1.5504761c-0.081665,0-0.3275146,0-0.3685303,0 c-0.2458496,0-0.4918213,0.1293335-0.5324707,0.3751831c-0.0820312,0.2868652,0.081665,0.5390015,0.3684082,0.6210327 c0.2050781,0.0410156,0.4099121,0.0410156,0.614624,0.0410156c1.4342041,0,1.9256592-0.819458,2.3763428-2.048645 l2.7858887-6.9651489C12.8278799,8.1585865,12.6641836,7.8662286,12.3774405,7.7843194z" class="msportalfx-svg-c01"/> <path d="M15.8988028,10.8827076c-0.2457275-0.1229858-2.5810547-1.229126-2.7041016-0.9833374 c-0.1229248,0.2458496,1.9664307,1.7208252,2.2125244,1.843811c0.2458496,0.1228027,0.5324707,0.0408936,0.6555185-0.204895 C16.2263184,11.2924366,16.1445312,11.0056324,15.8988028,10.8827076z" class="msportalfx-svg-c01"/> <path d="M16.7183838,8.1786671c-0.2459717,0-2.8270273,0.2458496-2.8270273,0.4916382 s2.5810556,0.4506226,2.8270273,0.4506226c0.2867432,0,0.4915771-0.2458496,0.4915771-0.4916382 C17.2099609,8.38344,17.0048828,8.1376514,16.7183838,8.1786671z" class="msportalfx-svg-c01"/> <\/g> <\/svg>'}}
)(t=n.SocialChannels||(n.SocialChannels={}))})(t=n.SvgLibrary||(n.SvgLibrary={})),function(n){var t;
(function(n){n.gallery_Startboard_Icon={type:1,data:'<svg viewBox="0 0 245 175" class="msportalfx-svg-placeholder" role="img"><title><\/title> <rect x="173.4" y="66.4" style="fill:#C8CDD3;" width="17" height="17"/> <rect x="164.5" y="88.9" style="fill:#9EA7B2;" width="11.1" height="11.1"/> <rect x="192.8" y="87.2" style="fill:#E3E6E9;" width="13.4" height="13.4"/> <rect x="221.2" y="19.3" style="fill:#C8CDD3;" width="23.8" height="23.8"/> <rect x="178.4" y="25.6" style="fill:#C8CDD3;" width="17" height="17"/> <g> <rect x="53.9" y="108" style="fill:#00567B;" width="101.8" height="47.7"/> <rect y="53.9" style="fill:#E8E7E6;" width="47.7" height="47.7"/> <polygon style="fill:#8AC340;" points="155.9,53.9 155.9,101.8 108,101.8 101.8,101.8 53.9,101.8 53.9,53.9 53.9,47.7 53.9,0 101.8,0 108,0 155.9,0 155.9,47.7 "/> <polyline style="fill:#758292;" points="244.9,166.6 244.9,107.5 162.1,107.5 162.1,166.6 197.5,166.6 197.5,168.5 182.8,172.5 186.6,174.4 203.4,170.8 220.4,174.4 224.1,172.5 209.5,168.5 209.5,166.6 244.9,166.6 "/> <polyline style="fill:#2AA7DF;" points="166.1,111.6 240.7,111.6 240.7,162.8 166.1,162.8 166.1,111.6 "/> <path style="fill:#758292;" d="M202.7,165.3v-1.5h1.5v1.5H202.7 M166.1,155.9l-4,5.2v5.5h59.5l3-3.8h-58.5V155.9"/> <polyline style="fill:#758292;" points="244.9,107.5 203.6,107.5 200.6,111.6 240.9,111.6 240.9,142 244.9,136.6 244.9,107.5 "/> <polyline style="fill:#758292;" points="240.9,111.6 200.6,111.6 240.7,111.6 240.7,142.3 240.9,142 240.9,111.6 "/> <path style="fill:#32A3D7;" d="M215,128L215,128h4l0.9,23.5l-2.7,2.2l-2.2,1.7l-26.7-2.2l0.8-25.2H215 M240.7,111.6h-40.1 l-34.5,44.3v6.9h58.5l16.1-20.5L240.7,111.6"/> <path style="fill:#FFFFFF;" d="M124.5,39c-4.9-6.4-12.3-9.7-19.6-9.7c-5.2,0-10.6,1.7-14.9,5c-10.7,8.2-12.9,23.8-4.5,34.6 c4.9,6.4,12.3,9.7,19.6,9.7c5.2,0,10.6-1.7,14.9-5C130.7,65.4,132.9,49.9,124.5,39z M125.7,59.5c-0.8-0.7-2.2-1.7-3.7-2.9 c0.5-1.5,0.3-3.2-0.7-4.4c-1.5-1.8-4-2.4-5.9-1.2c-2.2-2-4.5-4.2-7.1-6.7c7.4-4,12.9-3.7,13.4-3.7c0.2,0.2,0.2,0.2,0.3,0.3 C126.2,46.4,127.3,53.3,125.7,59.5z M112.2,65.4c-0.2-0.7-0.3-1.2-0.8-1.7c-1.3-1.8-3.9-2.2-5.7-1c-1.8-1-3.9-2.2-5.9-3.9 c-0.3-0.3-0.8-0.7-1.2-1c1.2-1.8,1.3-4.4,0.3-6.5c0.2-0.2,0.5-0.5,0.8-0.7c2-1.8,3.9-3.4,5.5-4.5c2.7,2.5,5.5,4.9,8.2,6.9 c-0.7,1.5-0.7,3.4,0.5,4.7c1.5,2,4.5,2.4,6.5,0.8c0.2,0,0.2-0.2,0.3-0.3c2,1.3,3.5,2.4,4.4,3c-0.7,1.7-1.3,3.2-2.4,4.7 C121.3,66.4,117.4,66.9,112.2,65.4z M118.6,37.5c-3.4-0.5-8.4-0.5-14.3,2.7c-2-2-3.9-4.2-5.9-6.5c2.2-0.7,4.4-1,6.5-1 C109.9,32.6,114.7,34.3,118.6,37.5z M91.9,37c1.2-0.8,2.4-1.7,3.5-2.2c1.5,2.5,3.5,4.9,5.7,7.2c-2,1.3-3.9,3-5.9,5.2 c-0.3,0.3-0.5,0.5-0.7,0.8c-1.2-0.2-2.4-0.2-3.5,0.2c-1.8-4.2-1.8-7.4-1.5-9.2C90.2,38.3,91.1,37.7,91.9,37z M87.2,41.9 c-0.5,2-0.7,5,0.8,8.6c-1.7,2.4-1.8,5.5,0,7.9c0.2,0.2,0.3,0.3,0.5,0.5c-0.8,2.7-1.2,5.2-1.2,7.4C82.2,58.8,82.3,49.1,87.2,41.9z M117.9,71.1c-3.9,3-8.4,4.4-13.1,4.4c-4.9,0-9.7-1.7-13.6-4.9c-0.2-2.4,0-5.9,1.5-9.7c1,0,2,0,3-0.5c0.5,0.5,1.2,1,1.7,1.5 c2.2,1.7,4.2,3,6.2,4c-0.2,1,0.2,2.2,0.8,3c1.5,1.8,4.2,2.2,6,0.8c0.3-0.3,0.7-0.7,1-1c3.4,0.7,6.2,0.8,8.2,0.8 C119.3,70.1,118.6,70.6,117.9,71.1z"/> <polyline style="fill:#9FA8B3;" points="204.2,163.8 202.7,163.8 202.7,165.3 204.2,165.3 204.2,163.8 "/> <polyline style="fill:#FFFFFF;" points="219.9,151.5 219,128 217.2,128 215,128 189.1,128 188.3,153.2 215,155.4 217.2,153.7 219.9,151.5 "/> <polyline style="fill:#BFE4F5;" points="219,128 217.2,128 215,128 215,155.4 217.2,151.2 219.9,151.5 219,128 "/> <path style="fill:#2AA7DF;" d="M210.1,143.8c0-1.2-0.8-2-2-2c-0.2,0-0.2,0-0.2,0c0.2-0.5,0.2-1,0.2-1.5c0-3-2.4-5.4-5.4-5.4 c-2.4,0-4.4,1.5-5,3.7c-0.3-0.2-0.8-0.2-1.2-0.2c-2,0-3.7,1.7-3.7,3.7s1.7,3.7,3.7,3.7h11.9C209.3,145.8,210.1,145,210.1,143.8"/> <path style="fill:#FFFFFF;" d="M203.3,124c0-1.8,1.5-3.2,3.5-3.2c1.8,0,3.5,1.5,3.5,3.2v4h1.7v-4c0-2.7-2.4-4.9-5.2-4.9 s-5.2,2.2-5.2,4.9v4h1.7V124z"/> <path style="fill:#FFFFFF;" d="M198,124c0-1.8,1.5-3.2,3.5-3.2s3.5,1.5,3.5,3.2v4h1.7v-4c0-2.7-2.4-4.9-5.2-4.9 c-2.9,0-5.2,2.2-5.2,4.9v4h1.7V124L198,124z"/> <rect y="108" style="fill:#4A494A;" width="47.7" height="47.7"/> <rect y="0" style="fill:#CA6228;" width="47.7" height="47.7"/> <path style="fill:#FFFFFF;" d="M126.8,128.2c-0.7,0-1.2,0-1.8,0.2c-0.3,0-0.5,0.2-0.8,0.3l-0.2-0.2c-0.2-0.2-0.5-0.3-0.8-0.3h-1.4 v9.4h2.5v-4.9c0-1,0.2-1.3,0.5-1.7c0.3-0.3,0.8-0.5,1.5-0.5h1v-2.4L126.8,128.2"/> <path style="fill:#FFFFFF;" d="M81.7,125.5h-1.3v11.1c0,0.3,0.2,0.7,0.3,0.8c0.2,0.2,0.5,0.3,0.8,0.3h1.3v-11 c0-0.3-0.2-0.7-0.3-0.8C82.2,125.5,82,125.5,81.7,125.5"/> <path style="fill:#FFFFFF;" d="M88,135.7c1.5,0,2-1.5,2-2.9c0-1.3-0.5-2.9-2-2.9s-1.8,1.5-1.8,2.9S86.7,135.7,88,135.7 M88,128 c2.9,0,4.4,1.8,4.4,4.9s-1.5,4.9-4.4,4.9s-4.4-1.8-4.4-4.9C83.8,129.9,85.2,128,88,128z"/> <path style="fill:#FFFFFF;" d="M75.3,135.7c-1.5,0-1.8-1.5-1.8-2.9c0-1.3,0.5-2.9,1.8-2.9c0.8,0,1.2,0.5,1.5,1h2.5 c-0.5-2-2-3-4.2-3c-2.9,0-4.4,1.8-4.4,4.9s1.5,4.9,4.4,4.9c2.2,0,3.5-1.2,4.2-3h-1.7c0,0-0.5,0-0.7,0.3 C76.6,135.4,76.3,135.7,75.3,135.7"/> <path style="fill:#FFFFFF;" d="M101.3,128.5c-0.2-0.2-0.5-0.3-0.8-0.3h-1.2v5.9c0,0.5-0.2,1-0.5,1.2c-0.5,0.5-0.8,0.5-1.3,0.5 s-0.8-0.2-1.2-0.3c-0.3-0.3-0.5-0.7-0.5-1.2v-4.7c0-0.3-0.2-0.7-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3h-1.2v5.5c0,1.7,0.5,2.7,1.3,3.4 c0.8,0.5,1.7,0.8,2.9,0.8c1,0,2-0.2,2.9-0.8c0.8-0.5,1.3-1.7,1.3-3.4v-4.4C101.6,129.2,101.5,128.9,101.3,128.5"/> <path style="fill:#FFFFFF;" d="M111,125.8c-0.2-0.2-0.5-0.3-0.8-0.3h-1.3v3.5c-0.3-0.3-1.2-1-2.4-1c-2.5,0-4,1.8-4,4.9 s1.5,4.9,4.4,4.9s4.4-1.8,4.4-4.9v-6.4C111.4,126.3,111.2,126,111,125.8 M107,135.7c-1.5,0-2-1.5-2-2.9s0.5-2.9,2-2.9s2,1.5,2,2.9 C108.9,134.2,108.4,135.7,107,135.7z"/> <path style="fill:#FFFFFF;" d="M121,132.4c0,0.2,0,0.3-0.2,0.5c0,0.2-0.2,0.2-0.2,0.3c-0.2,0.2-0.5,0.3-0.8,0.3h-5 c0,1.2,0.7,2.2,1.8,2.2c0.8,0,1.3-0.3,1.7-0.8c0.3-0.2,0.7-0.3,0.7-0.3h1.7c-0.5,2-2,3-4.2,3c-2.9,0-4.4-1.8-4.4-4.9 c0-3,1.5-4.9,4.4-4.9c2.2,0,3.5,1.2,4.2,3C120.8,131.4,121,131.9,121,132.4 M116.6,130c-1,0-1.7,0.8-1.8,1.7h3.5 C118.4,130.9,117.6,130,116.6,130z"/> <path style="fill:#FFFFFF;" d="M135.7,130.7c0-0.8-0.3-1.5-1-2s-1.7-0.7-3-0.7c-1.2,0-2,0.3-2.7,0.8c-0.5,0.5-0.8,1.2-1,1.8h2.4 c0.2-0.3,0.3-0.5,0.5-0.5c0.3-0.2,0.5-0.2,0.8-0.2s0.7,0,1,0.2s0.5,0.3,0.5,0.7s-0.5,0.7-1.5,0.8c-1.2,0.2-2.2,0.3-3.2,1 c-0.5,0.5-1,1.2-1,2.2s0.3,1.8,1,2.2c0.5,0.3,1.5,0.8,3,0.8c1.3,0,2.4-0.3,3-0.7c0.7-0.5,1-1,1-2v-4.4 M133,135.2 c-0.3,0.3-0.8,0.5-1.5,0.5c-0.2,0-0.8,0-1.2-0.3c-0.2-0.2-0.3-0.3-0.3-0.7s0.2-0.5,0.2-0.7c0.3-0.3,0.7-0.5,1.5-0.7 c0.5-0.2,1.2-0.3,1.5-0.5v0.7C133.4,134.4,133.4,134.9,133,135.2z"/> <path style="fill:#FFFFFF;" d="M137.2,128c0.5,0,1,0.5,1,1s-0.3,1-1,1c-0.5,0-1-0.5-1-1S136.6,128,137.2,128 M137.2,129.9 c0.5,0,0.8-0.3,0.8-0.8s-0.3-0.8-0.8-0.8s-0.8,0.3-0.8,0.8C136.4,129.5,136.7,129.9,137.2,129.9z M137.2,129.2H137v0.5h-0.2v-1.2 h0.3c0.3,0,0.5,0.2,0.5,0.3s0,0.3-0.2,0.3l0.2,0.5h-0.3L137.2,129.2z M137.1,129h0.2c0.2,0,0.2,0,0.2-0.2s0-0.2-0.2-0.2h-0.2V129z"/> <path style="fill:#358899;" d="M38.2,128.9c-1.3-6.2-8.7-9.7-16.5-8.1c-7.7,1.7-12.9,8.1-11.6,14.3s8.7,9.7,16.5,8.1 S39.5,135.1,38.2,128.9z M24.2,137.6c-3.2,0-5.7-2.5-5.7-5.7s2.5-5.7,5.7-5.7s5.7,2.5,5.7,5.7C29.8,135.1,27.2,137.6,24.2,137.6z"/> <path style="fill:#9CD8DA;" d="M25.4,124c-4.5,0-8.2,3.7-8.2,8.2s3.7,8.2,8.2,8.2s8.2-3.7,8.2-8.2C33.6,127.7,29.9,124,25.4,124z M24.2,136.9c-2.7,0-5-2.2-5-5c0-2.7,2.2-5,5-5c2.7,0,5,2.2,5,5C29.1,134.7,26.9,136.9,24.2,136.9z"/> <g> <path style="fill:#FF8C00;" d="M23.5,84.2h-2c0.5,2.9-1.2,3.3-4,3.3V89h3.6h2.6h3.4v-1.5C24.3,87.6,23,87.1,23.5,84.2"/> <rect x="17.5" y="87.6" style="fill:#FCD116;" width="9.6" height="1.5"/> <path style="fill:#59B4D9;stroke:#59B4D9;stroke-width:0.116;" d="M23.4,79.5c0.5-0.5,1.2-0.5,1.6,0 l-1.8-1.8c-0.5-0.5-0.5-1.2,0-1.6c0.5-0.5,1.2-0.5,1.6,0l0.5,0.5l0.4,0.3l0.9,0.9c0.5,0.5,1.2,0.5,1.6,0c0.5-0.5,0.5-1.2,0-1.6 l-0.9-0.9l-0.6-0.6L24.1,72c-0.5-0.5-0.5-1.2,0-1.6c0.5-0.5,1.2-0.5,1.6,0l1.2,1.2c-0.5-0.5-0.5-1.2,0-1.6c0.5-0.5,1.2-0.5,1.6,0 l3.1,3.1c-0.1-2.2-1-4.5-2.7-6.2c-1.6-1.6-3.6-2.5-5.7-2.7l1.4,1.4c0.6,0.6,0.6,1.5,0,2.1s-1.5,0.6-2.1,0l-0.9-0.9 c-0.6-0.6-1.5-0.6-2.1,0s-0.6,1.5,0,2.1l1.9,1.9c0.6,0.6,0.6,1.5,0,2.1s-1.5,0.6-2.1,0l-2.1-2.1c0.2,0.5,0.1,1.2-0.3,1.6 c-0.6,0.6-1.5,0.6-2.1,0l1.5,1.5c0.6,0.6,0.6,1.5,0,2.1s-1.5,0.6-2.1,0L13,74.4c0.2,2.1,1.1,4.1,2.7,5.7c2.4,2.4,5.9,3.3,9,2.4 l-1.3-1.3C23,80.7,23,80,23.4,79.5z"/> <path style="fill:#B8D432;" d="M31.7,73l-3.1-3.1c-0.5-0.5-1.2-0.5-1.6,0c-0.5,0.5-0.5,1.2,0,1.6l-1.2-1.2c-0.5-0.5-1.2-0.5-1.6,0 s-0.5,1.2,0,1.6l2.7,2.7l0.6,0.6l0.9,0.9c0.5,0.5,0.5,1.2,0,1.6c-0.5,0.5-1.2,0.5-1.6,0l-0.9-0.9l-0.4-0.3L25,76 c-0.5-0.5-1.2-0.5-1.6,0c-0.5,0.5-0.5,1.2,0,1.6l1.8,1.8c-0.5-0.5-1.2-0.5-1.6,0c-0.5,0.5-0.5,1.2,0,1.6l1.3,1.3 c1.5-0.4,3-1.2,4.2-2.4C30.9,78.1,31.8,75.5,31.7,73z"/> <path style="fill:#B8D432;" d="M16.5,75.8c0.6-0.6,0.6-1.5,0-2.1L15,72.2c0.6,0.6,1.5,0.6,2.1,0c0.4-0.4,0.5-1.1,0.3-1.6l2.1,2.1 c0.6,0.6,1.5,0.6,2.1,0s0.6-1.5,0-2.1l-1.9-1.9c-0.6-0.6-0.6-1.5,0-2.1s1.5-0.6,2.1,0l0.9,0.9c0.6,0.6,1.5,0.6,2.1,0 s0.6-1.5,0-2.1L23.4,64c-2.7-0.3-5.5,0.6-7.6,2.7s-3,4.9-2.7,7.6l1.4,1.4C15,76.3,15.9,76.3,16.5,75.8z"/> <path style="fill:#FCD116;" d="M22.3,85.9c-3.3,0-6.5-1.3-8.8-3.7c-0.3-0.3-0.3-0.9,0-1.2c0.3-0.3,0.9-0.3,1.2,0 c2,2,4.7,3.1,7.6,3.1s5.6-1.1,7.6-3.1s3.1-4.7,3.1-7.6s-1.1-5.6-3.1-7.6c-0.3-0.3-0.3-0.9,0-1.2s0.9-0.3,1.2,0 c2.4,2.4,3.7,5.5,3.7,8.8s-1.3,6.5-3.7,8.8C28.8,84.6,25.6,85.9,22.3,85.9z"/> <\/g> <g> <path style="fill:none;" d="M32.5,30.3c0-2,1.6-3.6,3.6-3.6c0.3,0,0.6,0.1,0.9,0.1c0.2-1,0.4-2,0.4-3.1c0-1.1-0.2-2.2-0.4-3.2 c-0.3,0.1-0.6,0.1-0.9,0.1c-2,0-3.6-1.6-3.6-3.6c0-1,0.4-1.9,1.1-2.6c-1.7-1.7-3.8-3-6.2-3.6c-0.4,1.6-1.8,2.7-3.5,2.7 s-3.1-1.2-3.5-2.7c-2.4,0.6-4.6,1.9-6.3,3.7c0.6,0.6,1,1.5,1,2.5c0,2-1.6,3.6-3.6,3.6c-0.3,0-0.5,0-0.8-0.1 c-0.3,1-0.4,2.1-0.4,3.2c0,0.9,0.1,1.8,0.3,2.7c0.3-0.1,0.6-0.1,0.9-0.1c2,0,3.6,1.6,3.6,3.6c0,1.1-0.5,2.1-1.3,2.8 c1.7,1.9,4,3.3,6.6,4c0.5-1.5,1.8-2.5,3.4-2.5s3,1.1,3.4,2.5c2.4-0.6,4.6-1.9,6.3-3.7C32.9,32.3,32.5,31.3,32.5,30.3z"/> <path style="fill:#FFFFFF;" d="M37.8,27.1c0.3-1.1,0.4-2.2,0.4-3.4c0-1.2-0.2-2.4-0.5-3.5c1.2-0.6,2-1.8,2-3.2 c0-2-1.6-3.6-3.6-3.6c-0.7,0-1.3,0.2-1.9,0.5c-1.8-1.9-4.1-3.3-6.7-4c0,0,0,0,0-0.1c0-2-1.6-3.6-3.6-3.6s-3.6,1.6-3.6,3.6 c0,0,0,0,0,0.1c-2.6,0.7-5,2.1-6.8,4c-0.6-0.4-1.2-0.6-1.9-0.6C9.6,13.4,8,15,8,17c0,1.4,0.8,2.7,2,3.2c-0.3,1.1-0.4,2.3-0.4,3.5 c0,1,0.1,2,0.3,3C8.8,27.3,8,28.5,8,29.9c0,2,1.6,3.6,3.6,3.6c0.6,0,1.1-0.2,1.6-0.4c1.9,2.1,4.3,3.6,7.1,4.3c0,0.1,0,0.2,0,0.3 c0,2,1.6,3.6,3.6,3.6s3.6-1.6,3.6-3.6c0-0.1,0-0.2,0-0.3c2.7-0.7,5-2.1,6.8-4c0.5,0.3,1.1,0.5,1.8,0.5c2,0,3.6-1.6,3.6-3.6 C39.7,28.9,38.9,27.7,37.8,27.1z M36.1,33.1c-0.4,0-0.9-0.1-1.2-0.3c-0.2-0.1-0.5-0.3-0.7-0.5c-0.6-0.5-0.9-1.2-0.9-2 c0-1.5,1.3-2.8,2.8-2.8c0.2,0,0.5,0,0.7,0.1c0.3,0.1,0.5,0.2,0.7,0.3c0.8,0.5,1.4,1.4,1.4,2.4C38.9,31.8,37.6,33.1,36.1,33.1z M36.1,14.2c1.5,0,2.8,1.3,2.8,2.8c0,1-0.6,1.9-1.4,2.4c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2,0.1-0.4,0.1-0.7,0.1 c-1.5,0-2.8-1.3-2.8-2.8c0-0.8,0.3-1.5,0.9-2c0.2-0.2,0.4-0.3,0.7-0.5C35.2,14.3,35.6,14.2,36.1,14.2z M23.9,7.1 c1.5,0,2.7,1.2,2.8,2.7c0,0,0,0.1,0,0.1c0,0.2,0,0.5-0.1,0.7c-0.3,1.2-1.4,2.1-2.7,2.1s-2.4-0.9-2.7-2.1c-0.1-0.2-0.1-0.4-0.1-0.7 c0,0,0-0.1,0-0.1C21.2,8.3,22.4,7.1,23.9,7.1z M11.6,14.2c0.5,0,0.9,0.1,1.4,0.4c0.2,0.1,0.4,0.3,0.6,0.5c0.5,0.5,0.8,1.2,0.8,1.9 c0,1.5-1.3,2.8-2.8,2.8c-0.2,0-0.4,0-0.6-0.1c-0.3-0.1-0.5-0.2-0.7-0.3C9.4,18.9,8.8,18,8.8,17C8.8,15.5,10.1,14.2,11.6,14.2z M11.6,32.7c-1.5,0-2.8-1.3-2.8-2.8c0-1,0.6-1.9,1.3-2.4c0.2-0.1,0.5-0.3,0.7-0.3c0.2-0.1,0.5-0.1,0.7-0.1c1.5,0,2.8,1.3,2.8,2.8 c0,0.8-0.4,1.6-1,2.1c-0.2,0.2-0.4,0.3-0.7,0.4C12.3,32.6,12,32.7,11.6,32.7z M26.7,37.7c0,1.5-1.3,2.8-2.8,2.8s-2.8-1.3-2.8-2.8 c0,0,0,0,0-0.1c0-0.3,0.1-0.5,0.2-0.8c0.4-1.1,1.4-1.9,2.6-1.9s2.3,0.8,2.6,1.9C26.6,37.1,26.7,37.4,26.7,37.7 C26.7,37.7,26.7,37.7,26.7,37.7z M27.3,36.6c-0.5-1.5-1.8-2.5-3.4-2.5s-3,1.1-3.4,2.5c-2.6-0.7-4.8-2.1-6.6-4 c0.8-0.7,1.3-1.6,1.3-2.8c0-2-1.6-3.6-3.6-3.6c-0.3,0-0.6,0.1-0.9,0.1c-0.2-0.9-0.3-1.8-0.3-2.7c0-1.1,0.1-2.2,0.4-3.2 c0.3,0.1,0.5,0.1,0.8,0.1c2,0,3.6-1.6,3.6-3.6c0-1-0.4-1.9-1-2.5c1.7-1.8,3.8-3,6.3-3.7c0.4,1.6,1.8,2.7,3.5,2.7s3.1-1.2,3.5-2.7 c2.4,0.6,4.5,1.9,6.2,3.6c-0.7,0.7-1.1,1.6-1.1,2.6c0,2,1.6,3.6,3.6,3.6c0.3,0,0.6,0,0.9-0.1c0.3,1,0.4,2.1,0.4,3.2 c0,1.1-0.1,2.1-0.4,3.1c-0.3-0.1-0.6-0.1-0.9-0.1c-2,0-3.6,1.6-3.6,3.6c0,1,0.4,2,1.1,2.6C31.9,34.7,29.8,36,27.3,36.6z"/> <\/g> <\/g> <rect x="162.1" style="fill:#D2D7DB;" width="20" height="20"/> <rect x="201.9" y="17.3" style="fill:#E3E6E9;" width="13.4" height="13.4"/> <\/svg>'}}
)(t=n.HubsExtension||(n.HubsExtension={}))}(i=n.Images||(n.Images={}))})(t=n.Content||(n.Content={})
)}(n||(n={})),n});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Gallery/ViewModels/Blades/GalleryCreateSubscriptionBladeViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
){n.call(this)}return __extends(t,n),t.prototype.onInputsSet=function(){return null},t}(MsPortalFx.ViewModels.
Blade);n.GalleryCreateSubscriptionBladeViewModel=t}(n||(n={})),n});__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("HubsExtension/Gallery/ViewModels/Blades/GalleryCreateComingSoonBladeViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
){n.call(this)}return __extends(t,n),t.prototype.onInputsSet=function(){return null},t}(MsPortalFx.ViewModels.
Blade);n.GalleryCreateComingSoonBladeViewModel=t}(n||(n={})),n});define("HubsExtension/Gallery/GalleryArea",
["require","exports"],function(){var n;return function(n){"use strict";n.galleryAreaName="Gallery"}(
n||(n={})),n});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)
t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Gallery/ViewModels/Parts/GalleryCreateListGridViewModel",
["require","exports","../../GalleryArea","HubsExtension/Gallery/GalleryClientStrings","../../../_generated/ExtensionDefinition",
"../../../Store/CreateLauncher"],function(n,t,i,r,u,f){var e;return function(n){"use strict";var t=r.
Gallery.ResultsListBlade,e="create/{0}",o="-placeholder",s="{0}.",h=function(n){function r(i,r,u,f,e,
o,s){var h=this;this._dataContext=u;var c,l=MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.SelectableRow,
a={selectableRow:{selectionMode:1,itemMatchesSelection:function(n,t){return n.identity===t.id},createSelection:
function(n){var t=h._getAvailableItemSelection(n);return t||n===c?c=null:(h._resolveDelayedCreateSelectable(
n),c=n),t},activateOnSelected:ko.observable(!0),initialSelection:this._getInitialSelection(r)}},v=[{
itemKey:"displayName",name:ko.observable(),format:1e3,formatOptions:{htmlBindingsTemplate:f},cssClass:
o}];n.call(this,i,ko.observableArray([]),l,a);this.selectable=new MsPortalFx.ViewModels.Internal.Selectable(
{selectedValue:r&&r.selectable&&r.selectable.selectedValue,isSelected:!!r&&!!r.selectable&&r.selectable.
isSelected});this.selectable.isSelected.subscribe(i,function(n){if(!n){var t=h.selectableData.selectableItems(
).first(function(n){return!!h.selectable.selectedValue()&&h.selectable.selectedValue().id===n.data.identity}
);t&&t.isSelected(!1)}});this.columns=ko.observableArray(v);this.showHeader=!1;this.summary=ko.observable(
t.Grid.summary);this.noRowsMessage=ko.observable(t.Grid.loading);this.selectedMenuItemId=ko.observable(
);this._launchingContextId=!e?"CreateHub":e;s&&s>0&&(this._maxItemsCount=s)}return __extends(r,n),r.
prototype.onInputsSet=function(n,r){var u=this,f;return r===void 0&&(r=null),n?(this.selectedMenuItemId(
n),f=[],this._dataContext.getGalleryItemsByMenuPromise(e.format(this.selectedMenuItemId()),!0).then(
function(n){var r=0,i=[],t;n.forEach(function(n){n&&n.galleryItems&&n.galleryItems.length>0&&(r++,f=
n.galleryItems.concatUnique(f,function(n,t){return n.identity===t.identity}))});r>1&&(t=u._dataContext.
createItems.first(function(n){return n.id===u.selectedMenuItemId()}),t&&t.items&&t.items.length&&t.items.
forEach(function(n){var t=f.first(function(t){return t.identity===n.id||t.identity.startsWith(s.format(
n.id))});t&&i.push(t)}));i.length>0?u._setGalleryItems(i):u._setGalleryItems(f)},function(){MsPortalFx.
Base.Diagnostics.Log.writeEntry(2,i.galleryAreaName,"There was an error getting gallery items for menu: "+
u.selectedMenuItemId())}).finally(function(){u.items()&&u.items().length!==0||u.noRowsMessage(t.Grid.
noRowsMessage)})):(r&&r.length>0&&(f=r.unique(function(n,t){return n.identity===t.identity}),this._setGalleryItems(
f)),Q({}))},r.prototype.dispose=function(){},r.prototype._setGalleryItems=function(n){this._maxItemsCount?
this.items(n.slice(0,this._maxItemsCount)):this.items(n)},r.prototype._isPlaceHolderItem=function(n)
{return n.version.toLowerCase().endsWith(o)},r.prototype._getAvailableItemSelection=function(n){var t,
i;return this._isPlaceHolderItem(n)&&(t=u.BladeNames.galleryCreateComingSoonBlade),t&&(i={id:n.identity,
extension:MsPortalFx.Base.Constants.ExtensionNames.Hubs,detailBlade:t,detailBladeInputs:{galleryItem:
n}}),i},r.prototype._resolveDelayedCreateSelectable=function(n){var r=this,t=f.CreateLauncherFactory.
currentInstance,i=Q.defer();t&&(this.selectable.delayedBladeSelection({bladeWidth:0,selectedValuePromise:
i.promise}),t.getCreateFlow({galleryItem:n,launchingContext:{source:[this._launchingContextId],menuItemId:
this.selectedMenuItemId&&this.selectedMenuItemId()}}).then(function(t){t.bladeSelection.id=n.identity;
r.selectable.selectedValue(t.bladeSelection);i.resolve(t.bladeSelection)}))},r.prototype._getInitialSelection=
function(n){var t;return n&&n.selectable&&n.selectable.selectedValue&&n.selectable.isSelected&&n&&n.
selectableData?(t=n.selectableData,t.selectedItems=[{id:n.selectable.selectedValue.id}],t.activatedItems=
[{id:n.selectable.selectedValue.id}]):n&&n.selectableData&&(t=n.selectableData),t},r}(MsPortalFx.ViewModels.
Controls.Lists.Grid.ViewModel);n.GalleryCreateListGridViewModel=h}(e||(e={})),e});define("HubsExtension/ResourceMap/ResourceMapCommon",
["require","exports","../HubsCommon","../Common/HubsObservables","HubsExtension/ResourceMap/ResourceMapClientStrings"],
function(n,t,i,r,u){var f;return function(n){"use strict";function p(u){var e=a.parseResourceGroupDescriptor(
u.id),o=r.getSubscriptionsObservable(),f=o().subscriptions.first(function(n){return n.subscriptionID===
e.subscription});return{assetOwner:i.extensionName,assetType:n.resourceGroupAssetType,assetId:u.id,title:
ko.observable(u.name),description:ko.observable(f?f.subscriptionName:t.unknownSubscription),icon:ko.
observable(n.resourceGroupIconImage)}}function f(n){return w(MsPortalFx.Base.Net.ajax(n))}function w(
n){var n=Q(n);return n.catch(function(n){throw b(n);})}function b(n){var t=function(t){var i=new Error(
t);return i.readyState=n.readyState,i.status=n.status,i.statusText=n.statusText,i};return n.responseJSON&&
n.responseJSON.message?t(n.responseJSON.message):n.responseText?t(n.responseText):n.message?t(n.message):
t("Unknown network error occurred.")}var a=MsPortalFx.ViewModels.Services.ResourceTypes,o=MsPortalFx.
Base.Constants,y,h,c,l;n.resourceGroupAssetType=o.AssetNames.ResourceGroups;n.resourceGroupResourceType=
o.ResourceTypes.ResourceGroups;n.resourceGroupResourceTypeLowerCase=n.resourceGroupResourceType.toLowerCase(
);n.resourceGroupAssetSchemaName=i.extensionName+"_"+n.resourceGroupAssetType;n.resourceGroupIconImage=
MsPortalFx.Base.Images.Polychromatic.ResourceGroup();var s=MsPortalFx.Base.Resources.getAppRelativeUri(
"api/resourceGroups"),e=MsPortalFx.Base.Resources.getAppRelativeUri("api/resources"),v=MsPortalFx.Base.
Resources.getAppRelativeUri("api/resourceManagerOperations"),t=u;n.deploymentStatusIconLookup={running:
MsPortalFx.Base.Images.StatusBadge.Pending(),accepted:MsPortalFx.Base.Images.StatusBadge.Pending(),waiting:
MsPortalFx.Base.Images.StatusBadge.Pending(),canceled:MsPortalFx.Base.Images.StatusBadge.Canceled(),
failed:MsPortalFx.Base.Images.StatusBadge.Error(),deleting:MsPortalFx.Base.Images.StatusBadge.Disabled(
),succeeded:MsPortalFx.Base.Images.StatusBadge.Success()};n.deploymentStatusDisplayTextLookup={running:
t.deploymentRunningState,accepted:t.deploymentAcceptedState,canceled:t.deploymentCanceledState,failed:
t.deploymentFailedState,deleting:t.deploymentDeletingState,succeeded:t.deploymentSucceededState},function(
n){n.ResourceMap="ResourceMap";var t;(function(n){n.OpenedBlade="OpenedBlade";n.ResultOpened="ResultOpened"}
)(t=n.Action||(n.Action={}))}(y=n.Telemetry||(n.Telemetry={}));n.mapResourceGroupToAssetDetails=p;h=
function(){function t(){}return t.getResourceGroup=function(i){var r={resourceGroupId:i},u=Q(t._callResourceGroupsController(
"GET",r)).then(function(n){return n});return u.catch(function(t){t.status&&t.status===404&&MsPortalFx.
UI.AssetManager.notifyAssetDeleted(n.resourceGroupAssetType,i);throw t;})},t.getResourceGroupWithStrings=
function(n){return t.getResourceGroup(n).then(function(n){return r.getLocations().then(function(i){return t.
mapResourceGroupToResourceGroupWithStrings(n,i)})})},t.deleteResourceGroup=function(n){var i={resourceGroupId:
n};return t._callResourceGroupsController("DELETE",i,!0)},t.getResourceGroupActions=function(n){var i=
{entityId:n};return t._callResourceGroupsControllerWithAction("GET","actions",i)},t.getSubscriptionActions=
function(n){var i={entityId:n};return t._callResourceGroupsControllerWithAction("GET","actions",i)},
t.mapResourceGroupToResourceGroupWithStrings=function(n,t,i){i===void 0&&(i=!1);var r=t[n.location.toLowerCase(
)]||n.location;return i?$.extend({locationString:ko.observable(r)},n):$.extend({locationString:r},n)}
,t._callResourceGroupsController=function(n,t,i){i===void 0&&(i=!1);var r=new MsPortalFx.Base.UriBuilder(
s);return r.query.setParameters(t),f({detailedError:i,uri:r.toString(),type:n,dataType:"json",contentType:
"application/json"})},t._callResourceGroupsControllerWithAction=function(n,t,i,r){r===void 0&&(r=!1);
var u=new MsPortalFx.Base.UriBuilder(s+"/"+t);return u.query.setParameters(i),f({detailedError:r,uri:
u.toString(),type:n,dataType:"json",contentType:"application/json"})},t}();n.ResourceGroupControllerClient=
h;c=function(){function n(){}return n.getOperationResponse=function(t){var i={operationId:t};return n.
_callResourceManagerOperationsController("GET",i,!0)},n._callResourceManagerOperationsController=function(
n,t,i){i===void 0&&(i=!1);var r=new MsPortalFx.Base.UriBuilder(v);return r.query.setParameters(t),f(
{detailedError:i,uri:r.toString(),type:n,dataType:"json",contentType:"application/json"})},n}();n.ResourceManagerOperationsControllerClient=
c;l=function(){function n(){}return n.getResource=function(t){var i={resourceId:t};return n._callResourcesController(
"GET",i)},n.getResourceWithStrings=function(t){var i={resourceId:t};return n._callResourcesController(
"GET",i).then(function(t){return r.getLocations().then(function(i){return n.mapResourceToResourceWithStrings(
t,i)})})},n.getResourceActions=function(t){var i={entityId:t};return n._callResourcesControllerWithAction(
"GET","actions",i)},n.getResourcesInResourceGroup=function(t){var i={resourceGroupId:t};return n._callResourcesController(
"GET",i).then(function(n){return n.value})},n.getResourcesLinkedToResourceGroup=function(t,i){var r=
{subscriptionId:t,linkId:i+"/",linkOperator:"startswith"};return n._callResourcesController("GET",r).
then(function(n){return n.value})},n.getResourcesLinkedToResource=function(t,i){var r={subscriptionId:
t,linkId:i,linkOperator:"eq"};return n._callResourcesController("GET",r).then(function(n){return n.value}
)},n.getResourceTypeCache=function(){return n._callResourcesControllerWithAction("GET","getResourceTypeCache",
{}).then(function(n){return n.value})},n.mapResourceToResourceWithStrings=function(n,t,i){i===void 0&&
(i=!1);var r=t[n.location.toLowerCase()]||n.location;return i?$.extend({locationString:ko.observable(
r),trimmedName:ko.observable(n.name.split("/").last())},n):$.extend({locationString:r,trimmedName:n.
name.split("/").last()},n)},n._callResourcesController=function(n,t,i){i===void 0&&(i=!1);var r=new MsPortalFx.
Base.UriBuilder(e);return r.query.setParameters(t),f({detailedError:i,uri:r.toString(),type:n,dataType:
"json",contentType:"application/json"})},n._callResourcesControllerWithData=function(n,t,i,r){r===void
0&&(r=!1);var u=new MsPortalFx.Base.UriBuilder(e);return u.query.setParameters(t),f({detailedError:r,
uri:u.toString(),type:n,data:i,dataType:"json",contentType:"application/json"})},n._callResourcesControllerWithAction=
function(n,t,i,r){r===void 0&&(r=!1);var u=new MsPortalFx.Base.UriBuilder(e+"/"+t);return u.query.setParameters(
i),f({detailedError:r,uri:u.toString(),type:n,dataType:"json",contentType:"application/json"})},n._callResourcesControllerWithActionAndData=
function(n,t,i,r,u){u===void 0&&(u=!1);var o=new MsPortalFx.Base.UriBuilder(e+"/"+t);return o.query.
setParameters(i),f({detailedError:u,uri:o.toString(),type:n,data:r,dataType:"json",contentType:"application/json"})}
,n}();n.ResourceControllerClient=l}(f||(f={})),f});define("HubsExtension/BrowseResource/BrowseResourceCommon",
["require","exports"],function(){var n;return function(){"use strict"}(n||(n={})),n});__extends=this.
__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[
i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Locations/ViewModels/LocationPickerV3PartViewModel",
["require","exports"],function(n,t){var r=MsPortalFx.ViewModels.ParameterCollectionV3.Pickers,i;i=function(
n){function t(t,i,r){var e=this,u=ko.observableArray(),f;this._queryView=r.locationsDataCache.createView(
t);f=this._queryView.items.map(t,function(n,t){return{icon:ko.observable(MsPortalFx.Base.Images.Polychromatic.
Location()),title:t.displayName,item:t}});f.subscribe(t,function(n){return u(n)});n.call(this,t,i,{items:
u,mapIncomingDataToDataModel:function(n){return n},loadPickerItems:function(n){if(!n.subscriptionId)
{t.unauthorized();throw new Error("'subscriptionId' is undefined. This is required as config for the locations picker.");
}else e._queryView.fetch({subscriptionId:n.subscriptionId,resourceTypes:n.resourceTypes})},mapItemsToDataModel:
function(n){return{displayName:n[0].item.displayName,name:n[0].item.name,latitude:n[0].item.latitude,
longitude:n[0].item.longitude}},isItemInDataModel:function(n,t){return t&&t.name&&t.name()&&n&&n.item&&
n.item.name&&n.item.name()&&n.item.name()===t.name()?!0:!1}})}return __extends(t,n),t}(r.PickerBase);
t.LocationPickerV3PartViewModel=i});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"HubsExtension/ResourceMap/ViewModels/ResourceGroupSettingListCommandViewModel",["require","exports"],
function(){var n;return function(n){"use strict";var t=function(n){function t(t){n.call(this,t);this.
resourceGroup=ko.observable();this.icon(MsPortalFx.Base.Images.GearAlternate())}return __extends(t,n),
t.prototype.onInputsSet=function(n){return this.resourceGroup(n.resourceGroup),null},t}(MsPortalFx.ViewModels.
OpenBladeCommand);n.ResourceGroupSettingListCommandViewModel=t}(n||(n={})),n});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("HubsExtension/ResourceMap/ViewModels/OpenResourceGroupCommandViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
t){n.call(this,t);this.id=ko.observable();this.icon(MsPortalFx.Base.Images.Polychromatic.ResourceGroup(
))}return __extends(t,n),t.prototype.onInputsSet=function(n){return this.id(n.resourceGroup),null},t}
(MsPortalFx.ViewModels.OpenBladeCommand);n.OpenResourceGroupCommandViewModel=t}(n||(n={})),n});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Deployments/ViewModels/TemplateEditorPartViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=window,i=function(n){function t(
t,i){var r=null;i&&(r={json:{schemas:[i]}});n.call(this,t,16,"",{lineNumbers:!0,tabSize:4,wrappingColumn:
0},undefined,undefined,undefined,r)}return __extends(t,n),t}(MsPortalFx.ViewModels.Controls.Documents.
Editor.ViewModel),r;n.EditorViewModel=i;r=function(){function n(n){var r=this;this.saveIntervalInMilliseconds=
5e3;this._defaultContent='{\n\t"$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",\n\t"contentVersion": "1.0.0.0",\n\t"parameters": {\n\t},\n\t"resources": [\n\t]\n}';
this._tslintSchema={fileMatch:["*"],url:"https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
schema:undefined};this._saveTimeout=null;this.actionBar=new MsPortalFx.ViewModels.ActionBars.FormActionBar.
ViewModel(n);this.actionBar.saveButtonClick=function(){r._saveTimeout&&(t.clearTimeout(r._saveTimeout),
r._saveTimeout=null);r.editorViewModel.save.execute().then(function(){r.parameterProvider.editScope(
).root.template(r.editorViewModel.content());r.actionBar.output({action:4,status:3})})};this.actionBar.
discardButtonClick=function(){r._saveTimeout&&(t.clearTimeout(r._saveTimeout),r._saveTimeout=null);r.
parameterProvider.editScope().revertAll();r.actionBar.output({action:4,status:3})};this.editorViewModel=
new i(n,this._tslintSchema);this.editorViewModel.dirty.subscribe(n,function(n){n&&!r._saveTimeout&&(
r._saveTimeout=t.setTimeout(function(){r.editorViewModel.save.execute().then(function(){r.parameterProvider.
editScope().root.template(r.editorViewModel.content())}).finally(function(){r._saveTimeout=null})},r.
saveIntervalInMilliseconds))});this.parameterProvider=new MsPortalFx.ViewModels.ParameterProvider(n,
{mapIncomingDataForEditScope:function(n){return r.editorViewModel.content(n&&n.template||r._defaultContent),
{template:ko.observable(r.editorViewModel.content())}},mapOutgoingDataForCollector:function(n){return n.
template()}})}return n}();n.TemplateEditorPartViewModel=r}(n||(n={})),n});define("HubsExtension/SpecPickerV3/SpecPickerCommon",
["require","exports","./Models/SpecPickerData","HubsExtension/SpecPickerV3/SpecPickerClientStrings"],
function(n,t,i,r){var f=HubsExtension.Azure.Pricing,u;return function(n){"use strict";function t(n,t)
{if(n===undefined||n===null){var i="'{0}' cannot be null or undefined.".format(t);MsPortalFx.Base.Diagnostics.
Log.writeEntry(2,"Spec picker",i);throw new Error(i);}}function e(n,t){var i={};return n.forEach(function(
n){var r=t(n);r&&(i[r]=n)}),i}function u(n){return t(n,"feature"),n.iconImage?n.iconImage:n.iconSvgData?
{type:1,data:n.iconSvgData}:n.iconName?o(n.iconName):null}function o(n){t(n,"imageName");var r=[MsPortalFx.
Base.Images.Polychromatic,MsPortalFx.Base.Images.Logos,MsPortalFx.Base.Images],i=r.first(function(t)
{return t[n]instanceof Function});return i?i[n]():MsPortalFx.Base.Images.Blank()}function c(n,i,r){n&&
n.createChildLifetime||(n=undefined,i=arguments[0],r=arguments[1]);t(i,"specs");t(r,"features");var f=
r.map(function(n){var t=$.extend({},n);return t.iconImage=u(n),t}),o=e(f,function(n){return n.id});return i.
map(function(t){var i=v(n,t);return i.features.forEach(function(n){var t=n.id?o[n.id]:null;n.iconImage=
u(n);t&&(n.iconImage||(n.iconImage=t.iconImage),(n.displayName===null||n.displayName===undefined)&&(
n.displayName=t.displayName),(n.displayValue===null||n.displayValue===undefined)&&(n.displayValue=t.
displayValue));n.iconImage||(n.iconImage=MsPortalFx.Base.Images.Blank());!n.displayValue&&n.displayName&&
(n.displayValue=n.displayName,n.displayName="");n.displayName||(n.displayName="");n.displayValue||(n.
displayValue="")}),i})}function l(n,t){return!n||!t?null:t.first(function(t){return t.specId===n})}function a(
n,t){return!n||!t?null:t.first(function(t){return t.id===n})}function v(n,r){t(r,"spec");var u={id:r.
id,specCode:r.specCode,colorScheme:r.colorScheme,title:r.title,cost:r.cost,costObservable:ko.observable(
new i.ObservableCost(r.cost)),disabledMessage:ko.observable(),disabledDescBalloonVisible:ko.observable(
!1),metadata:{disabled:ko.observable(!1)}};for(u.shortTitle=r.shortTitle||null,u.disabledDescBalloon=
new MsPortalFx.ViewModels.Controls.DockedBalloon.ViewModel(n),u.disabledDescBalloon.type=0,u.promotedFeatures=
[],r.promotedFeatures&&r.promotedFeatures.forEach(function(n){u.promotedFeatures.push({unitDescription:
n.unitDescription,value:n.value})});u.promotedFeatures.length<h;)u.promotedFeatures.push(s);return u.
features=[],r.features&&r.features.forEach(function(n){u.features.push({id:n.id,displayName:n.displayName,
displayValue:n.displayValue,iconName:n.iconName,iconSvgData:n.iconSvgData,iconImage:n.iconImage})}),
u}function y(n,t,i,r){n.metadata.disabled(!0);n.disabledMessage(t);n.disabledDescBalloon.content(i);
n.disabledDescBalloon.link(r);n.disabledDescBalloon.content()||n.disabledDescBalloon.link()?n.disabledDescBalloonVisible(
!0):n.disabledDescBalloonVisible(!1)}function p(n,t,i,u,e){var l=n.some(function(n){return typeof n.
cost.amount!="number"}),o,s,c,h;if(!l)return null;if(o=function(){n.forEach(function(n){n.costObservable(
).visible(!1);n.costObservable().isLoading(!1)})},s=t.resourceMap,!s){o();throw new Error("Could not query spec costs because resourceMap is not provided.");
}return c={subscriptionId:i,specResourceSets:s[u]||s["default"],specsToAllowZeroCost:t.specsToAllowZeroCost,
specType:t.specType},h=e.getSpecsCosts(c),h.then(function(t){t.statusCode===0?n.forEach(function(n){
var i=n.costObservable();t.costs.forEach(function(t){n.id===t.id&&(i.amount(t.amount),i.currencyCode(
t.currencyCode),i.caption(n.cost.caption.format(t.currencyCode)),i.isLoading(!1))});i.isLoading()&&(
n.costObservable().visible(!1),n.costObservable().isLoading(!1))}):t.statusCode===9?(o(),n.forEach(function(
n){y(n,r.specCardDefaultDisabledMessage,r.specCardNotOfferedInBillingRegion,null)})):t.statusCode===
10?(o(),n.forEach(function(n){var i=n.costObservable(),u=f.Constants.ChannelType;switch(t.channel){case
u.indirectEA:i.showMessage(!0);i.message(r.specListViewIndirectEAMessage);break;default:i.showMessage(
!1)}})):o()},function(){o()}),h}var s,h,w;n.notNull=t;n.toObject=e;n.getImageFromFeature=u;n.getFrameworkImage=
o;n.getSpecCards=c;n.findDisabledSpec=l;n.findSpec=a;s={value:null,unitDescription:null};h=2;n.renderSpecsCosts=
p,function(n){function t(n){var t,i;return n&&n.costObservable&&(t=n.costObservable(),t&&t.amount)?(
i=t.amount(),i===undefined?null:i):null}function u(n,i,r,u){try{var o,s,e=t(n),f=t(i);n&&e!==null&&i&&
f!==null?(s=f>e?this.Action.SpecPickerUpgrade:f<e?this.Action.SpecPickerDowngrade:this.Action.SpecPickerChanged,
o=JSON.stringify({fromSpec:n.id,toSpec:i.id,fromCost:e,toCost:f})):(s=this.Action.SpecPickerChanged,
o=JSON.stringify({toSpec:i.id,toCost:f}));MsPortalFx.Base.Diagnostics.Telemetry.trace({extension:MsPortalFx.
Base.Constants.ExtensionNames.Hubs,source:r,action:s,data:o,assetType:u})}catch(h){MsPortalFx.Base.Diagnostics.
Log.writeEntry(2,"SpecPicker","Failed to log the telemetry."+h)}}var i,r;(function(n){n.SpecPicker="SpecPicker"}
)(i=n.Source||(n.Source={})),function(n){n.SpecPickerUpgrade="SpecPickerUpgrade";n.SpecPickerDowngrade=
"SpecPickerDowngrade";n.SpecPickerChanged="SpecPickerChanged"}(r=n.Action||(n.Action={}));n.LogTelemetry=
u}(w=n.Telemetry||(n.Telemetry={}))}(u||(u={})),u});define("HubsExtension/SpecPickerV3/Models/SpecPickerData",
["require","exports","../../HubsCommon"],function(n,t,i){"use strict";var f=MsPortalFx.Base.Images,u=
function(){function n(n){var t=this;this.amount=ko.observable(n.amount);this.caption=ko.observable(n.
caption.format(n.currencyCode||""));this.currencyCode=ko.observable(n.currencyCode);this.visible=ko.
observable(!0);this.isLoading=ko.observable(typeof n.amount!="number");this.showMessage=ko.observable(
!1);this.message=ko.observable("");this.amountDisplay=ko.pureComputed(function(){if(typeof t.amount(
)=="number")return i.formatPrice(t.amount(),2)},this)}return n}(),r;t.ObservableCost=u;r=function(){
function n(){this.specPicker={selectedSpecId:ko.observable(),selectedRecommendedView:ko.observable()}}
return n}();t.SpecPickerDataModel=r});define("HubsExtension/Common/BillingRpc",["require","exports",
"../HubsCommon"],function(n,t,i){var r;return function(n){"use strict";function f(){return r?Q([]):MsPortalFx.
Services.Rpc.invokeCallback(i.billingExtensionName,"getBillingSubscriptionIds")}function e(n){return r?
Q.reject("Billing service is unavailable."):MsPortalFx.Services.Rpc.invokeCallback(i.billingExtensionName,
"getBillingSubscriptionFromId",n)}function o(n){return r?Q.reject("Billing service is unavailable."):
MsPortalFx.Services.Rpc.invokeCallback(i.billingExtensionName,"getSpecsCosts",n)}var t=window,u=t&&t.
fx&&t.fx.environment,r=u&&u.billingUnavailable;n.getBillingSubscriptionIds=f;n.getBillingSubscriptionFromId=
e;n.getSpecsCosts=o}(r||(r={})),r});define("HubsExtension/SubscriptionsFilter/SubscriptionsFilterCommon",
["require","exports"],function(){var n;return function(){"use strict"}(n||(n={})),n});define("HubsExtension/Tags/TagsArea",
["require","exports","../ArmHelpers/ArmApis","../_generated/ExtensionDefinition","HubsExtension/Tags/TagsClientStrings"],
function(n,t,i,r,u){var f;return function(n){"use strict";function h(n){return n.indexOf("?")>0?n.substring(
0,n.indexOf("?")):n}var e;n.compoundFormat="{0} : {1}";n.compoundPendingAddingFormat="{0} {1}".format(
n.compoundFormat,u.compoundPendingAddingFormat);n.compoundPendingDeletingFormat="{0} {1}".format(n.compoundFormat,
u.compoundPendingDeletingFormat);n.tagsAreaName="Tags";var t=window,c=t&&t.fx&&t.fx.environment,f=MsPortalFx.
Base.Diagnostics,o=MsPortalFx.Base.Resources.getAppRelativeUri("api/tags"),s=MsPortalFx.Base.Resources.
getAppRelativeUri("api/resources");n.GetResourceIdWithoutApiVersion=h;e=function(){function t(){var n=
"HubsExtension.TypeMetadata.Tags.TagItem",r="HubsExtension.TypeMetadata.Tags.ResourceTags",i="HubsExtension.TypeMetadata.Tags.ResourceItem";
MsPortalFx.Data.Metadata.getTypeMetadata(n)||MsPortalFx.Data.Metadata.setTypeMetadata(n,{properties:
{key:null,value:null,compound:null,commandGroup:null,allowEdits:null,resourceId:null},entityType:!0});
MsPortalFx.Data.Metadata.getTypeMetadata(r)||MsPortalFx.Data.Metadata.setTypeMetadata(r,{properties:
{tags:{itemType:n,isArray:!0}},entityType:!0});MsPortalFx.Data.Metadata.getTypeMetadata(i)||MsPortalFx.
Data.Metadata.setTypeMetadata(i,{name:i});this.subscriptionTagsCache=new MsPortalFx.Data.QueryCache(
{httpMethod:"POST",serializeParams:function(n){return JSON.stringify(n)},sourceUri:function(){return o}
,supplyData:t._supplyDataForSubscriptionTags,entityTypeName:n});this.resourceTagsCache=new MsPortalFx.
Data.EntityCache({httpMethod:"GET",sourceUri:function(n){return n.resourceId},supplyData:t._supplyDataForResourceTags,
entityTypeName:r});this.resourcesWithTagQueryCache=new MsPortalFx.Data.QueryCache({httpMethod:"GET",
sourceUri:function(n){return s+"?tagName={0}&tagValue={1}".format(n.tagName,n.tagValue)},serializeParams:
function(n){return"{0}{1}{2}".format(n.tagName,n.tagValue,n.subscriptions.join(","))},supplyData:t._supplyDataForResourcesWithTag,
entityTypeName:i})}return t.prototype.addNewTag=function(t,i,u){var e=this,f;return(t||this._logError(
"Can't save tag. Missing tag key."),i||this._logError("Can't save tag. Missing tag value."),u||this.
_logError("Can't save tag. Missing resource id."),!t||!i||!u)?(f=Q.defer(),f.reject(),f.promise):this.
_getLatestSetAndPatchTags(u,function(){var f;return e.resourceTagsCache.applyChanges(function(e,o){var
s={key:ko.observable(t),value:ko.observable(i),compound:ko.observable(n.compoundPendingAddingFormat.
format(t,i)),commandGroup:ko.observable(r.CommandGroupNames.tagItemCommandGroup),allowEdits:ko.observable(
!1),resourceId:ko.observable(u)};f=o.data().tags().slice(0);o.addItems(0,[s],null,!1,o.data().tags)}
,function(n){return n.resourceId===u}),f},function(n){var r={};for(var u in n)t.toLowerCase()!==u.toLowerCase(
)&&(r[u]=n[u]);return r[t]=i,r},{key:ko.observable(t),value:ko.observable(i),compound:ko.observable(
n.compoundFormat.format(t,i)),allowEdits:ko.observable(!1),resourceId:ko.observable(null)})},t.prototype.
deleteTag=function(t,i,r){var f=this,u;return(t||this._logError("Can't delete tag. Missing tag key."),
i||this._logError("Can't delete tag. Missing tag value."),r||this._logError("Can't delete tag. Missing resource id."),
!t||!i||!r)?(u=Q.defer(),u.reject(),u.promise):this._getLatestSetAndPatchTags(r,function(){var u;return f.
resourceTagsCache.applyChanges(function(r,f){var e=f.data().tags().first(function(n){return n.key()===
t&&n.value()===i});u=f.data().tags().slice(0);e&&(e.compound(n.compoundPendingDeletingFormat.format(
t,i)),e.allowEdits(!1))},function(n){return n.resourceId===r}),u},function(n){var f={},r,u;for(r in n)
u=n[r],r===t&&u===i||(f[r]=u);return f})},t.prototype._getLatestSetAndPatchTags=function(n,r,u,f){var
e=this;return i.Resources.resourceApi(n).then(function(i){var o=r();return MsPortalFx.Base.Net.ajax(
{uri:i,type:"GET",cache:!1,setAuthorizationHeader:!0,headers:{accept:"application/json"}}).then(function(
r){var s=u(r.tags);return MsPortalFx.Base.Net.ajax({uri:i,type:"PATCH",data:ko.toJSON({tags:s}),cache:
!1,contentType:"application/json",setAuthorizationHeader:!0,headers:{accept:"application/json"}}).then(
function(i){var r=t._constructSortedTagsList(i.tags,n);e.resourceTagsCache.applyChanges(function(n,t)
{t.data().tags(r)},function(t){return t.resourceId===n});f&&e.subscriptionTagsCache.applyChanges(function(
n,t){if(t.data&&t.data()){var i=t.data().first(function(n){return n.key().toLowerCase()===f.key().toLowerCase(
)&&n.value()===f.value().toLowerCase()});i||t.addItems(0,[f],null,!1,t.data)}})},function(t){e._logError(
"Error patching tags: "+t.responseText);e.resourceTagsCache.applyChanges(function(n,t){t.data().tags(
o)},function(t){return t.resourceId===n})})},function(t){e._logError("Error fetching tags for resource id {0}. Error: {1}".
format(n,t.responseText));e.resourceTagsCache.applyChanges(function(n,t){t.data().tags(o)},function(
t){return t.resourceId===n})})},function(){e._logError("Error fetching URI for resource id '{0}'.".format(
n))})},t._supplyDataForSubscriptionTags=function(i,r,u,e,o){var s=[],h=t._queryForAllTags(o.subscriptions);
return h.length<1?$.Deferred().resolve([]).promise():MsPortalFx.Base.Net.ajax({uri:r,type:i,data:h,cache:
!1,contentType:"application/json",setAuthorizationHeader:!0,headers:{accept:"application/json"}}).then(
function(i){return $.isArray(i)&&i.length>0&&i.forEach(function(i){i.values&&i.values.forEach(function(
r){t._checkTagFormat(i.tagName,r.tagValue)&&s.push({key:ko.observable(i.tagName),value:ko.observable(
r.tagValue),compound:ko.observable(n.compoundFormat.format(i.tagName,r.tagValue)),allowEdits:ko.observable(
!1),resourceId:ko.observable(null)})})}),s=s.sort(t._sortTags)},function(n){return f.Log.writeEntry(
1,"HubsExtension.Tags","Error getting tags for subscriptions. Error: {0}".format(n.responseText)),s}
)},t._supplyDataForResourceTags=function(n,r,u,e,o){var s=Q.defer();return r||s.resolve(),i.Resources.
resourceApi(r).then(function(i){MsPortalFx.Base.Net.ajax({uri:i,type:n,cache:!1,setAuthorizationHeader:
!0,headers:{accept:"application/json"}}).then(function(n){var i=t._constructSortedTagsList(n.tags,o.
resourceId);s.resolve({tags:ko.observableArray(i)})},function(n){f.Log.writeEntry(1,"HubsExtension.Tags",
"Error getting tags for resource id {0}. Error: {1}".format(o.resourceId,n.responseText));s.reject()}
)}),s.promise},t._supplyDataForResourcesWithTag=function(n,t,i,r,u){var f=[],e=u.subscriptions,o=[],
s=Q.defer();return e&&e.forEach(function(i){var r=new MsPortalFx.Base.UriBuilder(t);r.query.setParameters(
{subscriptionId:i});o.push(MsPortalFx.Base.Net.ajax({uri:r.toString(),type:n,cache:!1,setAuthorizationHeader:
!0}).then(function(n){n&&n.value&&$.isArray(n.value)&&n.value.length>0&&n.value.forEach(function(n){
f.push(n.id)})}))}),Q.allSettled(o).then(function(){return s.resolve(f)}),s.promise},t._constructSortedTagsList=
function(i,u){var o=[],f,e;for(f in i)e=i[f],t._checkTagFormat(f,e)&&o.push({key:ko.observable(f),value:
ko.observable(e),compound:ko.observable(n.compoundFormat.format(f,e)),commandGroup:ko.observable(r.CommandGroupNames.
tagItemCommandGroup),allowEdits:ko.observable(undefined),resourceId:ko.observable(u)});return o.sort(
t._sortTags)},t._checkTagFormat=function(n,t){var i=n.substring(0,7).toLocaleLowerCase()==="hidden-",
r=n.substring(0,5).toLocaleLowerCase()==="link:";return!(i||r)&&!!t},t._sortTags=function(n,t){var i=
n.key().localeCompare(t.key());return i?i:n.value().localeCompare(t.value())},t._queryForAllTags=function(
n){return(n||[]).join(";")},t.prototype._logError=function(n){f.Log.writeEntry(2,"HubsExtension.Tags",
n)},t}();n.TagsData=e}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"HubsExtension/Tags/ViewModels/Commands/DeleteTagCommandViewModel",["require","exports"],function(){
var n;return function(n){"use strict";var t=function(n){function t(t,i,r){n.call(this);this._container=
t;this._dataContext=r;this.icon(MsPortalFx.Base.Images.Delete())}return __extends(t,n),t.prototype.onInputsSet=
function(n){return!n.key||!n.value||!n.resourceId?(this.enabled(!1),null):(this._key=n.key,this._value=
n.value,this._resourceId=n.resourceId,n.allowEdits===!1&&this._container.unauthorized(),null)},t.prototype.
execute=function(){var n=this;this.enabled(!1);this._dataContext.tagsData.deleteTag(this._key,this._value,
this._resourceId).finally(function(){n.enabled(!0)})},t}(MsPortalFx.ViewModels.Command);n.DeleteTagCommandViewModel=
t}(n||(n={})),n});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/BrowseResource/ViewModels/ResourceGroup/ResourceGroupPickerV3PartViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=MsPortalFx.ViewModels.ParameterCollectionV3.
Pickers,i=MsPortalFx.ViewModels.Services.ResourceTypes,r=function(n){function t(t,r,u){var f=this,e=
{createMapping:function(n,t){var i=ko.observableArray();return t.subscribeArrayChanges(n,function(n)
{var t={icon:ko.observable(MsPortalFx.Base.Images.Polychromatic.ResourceGroup()),title:n.name,item:n,
subtitle:n.location},r=i().first(function(t){return t.item.id()===n.id()});r?i.replace(r,t):i.push(t)}
,function(n){i.remove(function(t){return t.item.id()===n.id()})}),i}};this._dataNavigator=u.resourceGroupData.
dataCache.createNavigatorWithOptions(t,e);n.call(this,t,r,{dataNavigator:this._dataNavigator,mapIncomingDataToDataModel:
function(n){return n},loadPickerItems:function(n){f._subscriptionId=n.subscriptionId||"";f._dataNavigator.
setQuery({subscriptions:[f._subscriptionId]})},mapItemsToDataModel:function(n){var t=n[0].item;return{
id:t.id,name:t.name,location:t.location}},isItemInDataModel:function(n,t){return!t||!t.name||!t.name(
)||!f._subscriptionId?!1:n.item.name().toLowerCase()===t.name().toLowerCase()&&i.parseResourceGroupDescriptor(
n.item.id()).subscription.toLowerCase()===f._subscriptionId.toLowerCase()}});this._subscriptionId=""}
return __extends(t,n),t}(t.PickerBase);n.ResourceGroupPickerV3PartViewModel=r}(n||(n={})),n});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Gallery/ViewModels/Blades/LegalTermsDetailsBladeViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
){n.call(this);this.icon(MsPortalFx.Base.Images.Polychromatic.BillingHub())}return __extends(t,n),t.
prototype.onInputsSet=function(n){return this.title(n.title),this.subtitle(n.displayName),null},t}(MsPortalFx.
ViewModels.Blade);n.LegalTermsDetailsBladeViewModel=t}(n||(n={})),n});define("HubsExtension/SpecPicker/SpecsCostsClient",
["require","exports","./SpecPickerCommon","../Common/BillingRpc"],function(n,t,i,r){var f=HubsExtension.
Azure.Pricing,u;return function(n){"use strict";function u(n,i){t.length>=h&&t.shift();t.push({input:
n,result:i})}function c(n){for(var r,i=t.length-1;i>=0;i--)if(r=t[i],MsPortalFx.Base.Utilities.deepEquals(
r.input,n))return r.result;return null}function l(n,i,r,u){for(var f,s,o,h,e=t.length-1;e>=0;e--)if(
f=t[e],f.input.specResourceSets&&f.input.specResourceSets.length&&f.input.subscriptionId===n&&f.input.
specType===r&&MsPortalFx.Base.Utilities.deepEquals(f.input.specsToAllowZeroCost,i))for(s=f.input.specResourceSets,
o=0;o<s.length;o++)if(MsPortalFx.Base.Utilities.deepEquals(s[o],u)&&(h=f.result.costs?f.result.costs.
first(function(n){return n.id===u.id}):null,h))return{isSuccess:f.result.isSuccess,isEASubscription:
f.result.isEASubscription,channel:f.result.channel,costs:[h],version:f.result.version};return null}function e(
n){for(var r=[],t,u,i=0;i<n.length;i++){if(t=n[i],t.quotas&&(t.firstParty||t.thirdParty))throw new Error(
"quotas is obsolete and cannot be combined with firstParty or thirdParty.");u={id:t.id,firstParty:t.
firstParty||t.quotas||[],thirdParty:t.thirdParty||[]};r.push(u)}return r}function o(n){var t=Q.defer(
);return t.resolve(n),t.promise}function s(n){return n.statusCode===0||n.channel===f.Constants.ChannelType.
indirectEA&&n.statusCode===10}function a(n){var h,t,f;return(i.notNull(n,"specCostQueryInput"),i.notNull(
n.subscriptionId,"subscriptionId"),i.notNull(n.specResourceSets,"specResourceSets"),i.notNull(n.specsToAllowZeroCost,
"specsToAllowZeroCost"),h={subscriptionId:n.subscriptionId,specResourceSets:e(n.specResourceSets),specsToAllowZeroCost:
n.specsToAllowZeroCost,specType:n.specType},t=c(n),t)?o(t):(f=r.getSpecsCosts(h),f.then(function(t){
s(t)&&u(n,t)}),f)}function v(n,t,f,h){var c,a,v;return(i.notNull(n,"subscriptionId"),i.notNull(t,"SpecResourceSet"),
i.notNull(f,"specsToAllowZeroCost"),c={subscriptionId:n,specResourceSets:e([t]),specsToAllowZeroCost:
f,specType:h},a=l(n,f,h,t),a)?o(a):(v=r.getSpecsCosts(c),v.then(function(n){s(n)&&u(c,n)}),v)}function y(
){t=[]}var h=20,t=[];n.getSpecsCosts=a;n.getSingleSpecCosts=v;n.clearCache=y}(u||(u={})),u});define(
"HubsExtension/SpecPicker/SpecPickerCommon",["require","exports","./Models/SpecPickerData","HubsExtension/SpecPickerV3/SpecPickerClientStrings"],
function(n,t,i,r){var f=HubsExtension.Azure.Pricing,u;return function(n){"use strict";function t(n,t)
{if(n===undefined||n===null){var i="'{0}' cannot be null or undefined.".format(t);MsPortalFx.Base.Diagnostics.
Log.writeEntry(2,"Spec picker",i);throw new Error(i);}}function e(n,t){var i={};return n.forEach(function(
n){var r=t(n);r&&(i[r]=n)}),i}function u(n){return t(n,"feature"),n.iconImage?n.iconImage:n.iconSvgData?
{type:1,data:n.iconSvgData}:n.iconName?o(n.iconName):null}function o(n){t(n,"imageName");var r=[MsPortalFx.
Base.Images.Polychromatic,MsPortalFx.Base.Images.Logos,MsPortalFx.Base.Images],i=r.first(function(t)
{return t[n]instanceof Function});return i?i[n]():MsPortalFx.Base.Images.Blank()}function c(n,i,r){n&&
n.createChildLifetime||(n=undefined,i=arguments[0],r=arguments[1]);t(i,"specs");t(r,"features");var f=
r.map(function(n){var t=$.extend({},n);return t.iconImage=u(n),t}),o=e(f,function(n){return n.id});return i.
map(function(t){var i=l(n,t);return i.features.forEach(function(n){var t=n.id?o[n.id]:null;n.iconImage=
u(n);t&&(n.iconImage||(n.iconImage=t.iconImage),(n.displayName===null||n.displayName===undefined)&&(
n.displayName=t.displayName),(n.displayValue===null||n.displayValue===undefined)&&(n.displayValue=t.
displayValue));n.iconImage||(n.iconImage=MsPortalFx.Base.Images.Blank());!n.displayValue&&n.displayName&&
(n.displayValue=n.displayName,n.displayName="");n.displayName||(n.displayName="");n.displayValue||(n.
displayValue="")}),i})}function l(n,r){t(r,"spec");var u={id:r.id,specCode:r.specCode,colorScheme:r.
colorScheme,title:r.title,cost:r.cost,costObservable:ko.observable(new i.ObservableCost(r.cost)),disabledMessage:
ko.observable(),disabledDescBalloonVisible:ko.observable(!1),metadata:{disabled:ko.observable(!1)}};
for(u.shortTitle=r.shortTitle||null,u.disabledDescBalloon=new MsPortalFx.ViewModels.Controls.DockedBalloon.
ViewModel(n),u.disabledDescBalloon.type=0,u.promotedFeatures=[],r.promotedFeatures&&r.promotedFeatures.
forEach(function(n){u.promotedFeatures.push({unitDescription:n.unitDescription,value:n.value})});u.promotedFeatures.
length<h;)u.promotedFeatures.push(s);return u.features=[],r.features&&r.features.forEach(function(n)
{u.features.push({id:n.id,displayName:n.displayName,displayValue:n.displayValue,iconName:n.iconName,
iconSvgData:n.iconSvgData,iconImage:n.iconImage})}),u}function a(n,t,i,r){n.metadata.disabled(!0);n.
disabledMessage(t);n.disabledDescBalloon.content(i);n.disabledDescBalloon.link(r);n.disabledDescBalloon.
content()||n.disabledDescBalloon.link()?n.disabledDescBalloonVisible(!0):n.disabledDescBalloonVisible(
!1)}function v(n,t,i,u,e){var l=n.some(function(n){return typeof n.cost.amount!="number"}),o,s,c,h;if(
!l)return null;if(o=function(){n.forEach(function(n){n.costObservable().visible(!1);n.costObservable(
).isLoading(!1)})},s=t.resourceMap,!s){o();throw new Error("Could not query spec costs because resourceMap is not provided.");
}return c={subscriptionId:i,specResourceSets:s[u]||s["default"],specsToAllowZeroCost:t.specsToAllowZeroCost,
specType:t.specType},h=e.getSpecsCosts(c),h.then(function(t){t.statusCode===0?n.forEach(function(n){
var i=n.costObservable();t.costs.forEach(function(t){n.id===t.id&&(i.amount(t.amount),i.currencyCode(
t.currencyCode),i.caption(n.cost.caption.format(t.currencyCode)),i.isLoading(!1))});i.isLoading()&&(
n.costObservable().visible(!1),n.costObservable().isLoading(!1))}):t.statusCode===9?(o(),n.forEach(function(
n){a(n,r.specCardDefaultDisabledMessage,r.specCardNotOfferedInBillingRegion,null)})):t.statusCode===
10?(o(),n.forEach(function(n){var i=n.costObservable(),u=f.Constants.ChannelType;switch(t.channel){case
u.indirectEA:i.showMessage(!0);i.message(r.specListViewIndirectEAMessage);break;default:i.showMessage(
!1)}})):o()},function(){o()}),h}var s,h,y;n.notNull=t;n.toObject=e;n.getImageFromFeature=u;n.getFrameworkImage=
o;n.getSpecCards=c;s={value:null,unitDescription:null};h=2;n.renderSpecsCosts=v,function(n){function t(
n){var t,i;return n&&n.costObservable&&(t=n.costObservable(),t&&t.amount)?(i=t.amount(),i===undefined?
null:i):null}function u(n,i,r,u){try{var o,s,e=t(n),f=t(i);n&&e!==null&&i&&f!==null?(s=f>e?this.Action.
SpecPickerUpgrade:f<e?this.Action.SpecPickerDowngrade:this.Action.SpecPickerChanged,o=JSON.stringify(
{fromSpec:n.id,toSpec:i.id,fromCost:e,toCost:f})):(s=this.Action.SpecPickerChanged,o=JSON.stringify(
{toSpec:i.id,toCost:f}));MsPortalFx.Base.Diagnostics.Telemetry.trace({extension:MsPortalFx.Base.Constants.
ExtensionNames.Hubs,source:r,action:s,data:o,assetType:u})}catch(h){MsPortalFx.Base.Diagnostics.Log.
writeEntry(2,"SpecPicker","Failed to log the telemetry."+h)}}var i,r;(function(n){n.SpecPicker="SpecPicker"}
)(i=n.Source||(n.Source={})),function(n){n.SpecPickerUpgrade="SpecPickerUpgrade";n.SpecPickerDowngrade=
"SpecPickerDowngrade";n.SpecPickerChanged="SpecPickerChanged"}(r=n.Action||(n.Action={}));n.LogTelemetry=
u}(y=n.Telemetry||(n.Telemetry={}))}(u||(u={})),u});define("HubsExtension/SpecPicker/Models/SpecPickerData",
["require","exports","../../HubsCommon"],function(n,t,i){var r;return function(n){"use strict";var u=
MsPortalFx.Base.Images,r=function(){function n(n){var t=this;this.amount=ko.observable(n.amount);this.
caption=ko.observable(n.caption.format(n.currencyCode||""));this.currencyCode=ko.observable(n.currencyCode);
this.visible=ko.observable(!0);this.isLoading=ko.observable(typeof n.amount!="number");this.showMessage=
ko.observable(!1);this.message=ko.observable("");this.amountDisplay=ko.pureComputed(function(){if(typeof
t.amount()=="number")return i.formatPrice(t.amount(),2)},this)}return n}(),t;n.ObservableCost=r;t=function(
){function n(){this.specPicker={selectedSpecId:ko.observable(),selectedRecommendedView:ko.observable(
)}}return n}();n.SpecPickerDataModel=t}(r||(r={})),r});define("HubsExtension/Store/StoreArea",["require",
"exports"],function(){var n;return function(n){"use strict";n.storeAreaName="Store"}(n||(n={})),n});
define("HubsExtension/Gallery/Models/GalleryModels",["require","exports"],function(){var n;return function(
n){"use strict";var r=function(){function n(){}return n.Hero="Hero",n.Rx6="Rx6",n.Rx3="Rx3",n.OnePlusEight=
"1+8",n}(),u,t,i;n.SubMenuItemTemplates=r,function(n){n[n.includeAll=0]="includeAll";n[n.excludeAll=
1]="excludeAll"}(n.AccessBehavior||(n.AccessBehavior={}));u=n.AccessBehavior;t=function(){function n(
){var n=this;this.dataLoaded=ko.observable(!1);this._galleryItems=[];this.items=ko.computed({read:function(
){return n.dataLoaded()?n._galleryItems:[]},write:function(t){n._galleryItems=t;n.dataLoaded(!0)}})}
return n.prototype.dispose=function(){this.items&&(this.items.dispose(),this.items=null)},n}();n.CreateActivityPaneItems=
t;i=function(){function n(n){this._dataContext=n}return n.prototype.getGalleryItemByIdPromise=function(
n){return this._dataContext?this._dataContext.getGalleryItemByIdPromise(n):$.Deferred().resolve(null).
promise()},n}();n.GalleryItemLoader=i}(n||(n={})),n});define("HubsExtension/Gallery/GalleryTelemetry",
["require","exports"],function(){var n;return function(n){"use strict";var t=MsPortalFx.Base.Diagnostics.
Telemetry.trace,i=function(){function n(){}return n.trace=function(n,i,r,u,f){t({source:n,action:i,actionModifier:
f,name:r,data:u})},n}();n.GalleryTelemetry=i}(n||(n={})),n});define("HubsExtension/ArmHelpers/Models/ArmDeployment",
["require","exports"],function(){var n;return function(){"use strict"}(n||(n={})),n});__extends=this.
__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[
i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Gallery/ViewModels/Blades/GalleryLaunchCreateFailedBladeViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
){n.call(this)}return __extends(t,n),t}(MsPortalFx.ViewModels.Blade);n.GalleryLaunchCreateFailedBladeViewModel=
t}(n||(n={})),n});define("HubsExtension/Browse/BrowseArea",["require","exports"],function(){var n;return function(
n){"use strict";var t=function(){function n(){}return n}();n.DataContext=t}(n||(n={})),n});define("HubsExtension/Settings/SettingsArea",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(){function n()
{}return n}();n.DataContext=t}(n||(n={})),n});define("HubsExtension/Browse/Browse.Diagnostics",["require",
"exports"],function(){var n;return function(n){"use strict";var t="HubsExtension-Browse",r=MsPortalFx.
Base.Diagnostics,f=r.LogEntryLevel,i=r.Log.writeEntry,u=function(){function n(){}return n.verbose=function(
n){for(var f,u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];f=[0,t,n].concat(u);i.apply(null,f)}
,n.warning=function(n){for(var f,u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];f=[1,t,n].concat(
u);i.apply(null,f)},n.error=function(n){for(var f,u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];
f=[2,t,n].concat(u);i.apply(null,f)},n}();n.Log=u}(n||(n={})),n});define("HubsExtension/Browse/BrowseCommon",
["require","exports"],function(){var n;return function(){"use strict"}(n||(n={})),n});define("HubsExtension/Settings/SettingsCommon",
["require","exports"],function(){var n;return function(){"use strict"}(n||(n={})),n});define("HubsExtension/Help/HelpArea",
["require","exports"],function(){var n;return function(n){"use strict";var i=window,t=function(){function n(
){}return n.prototype.dispose=function(){this._disposable&&(this._disposable.dispose(),this._disposable=
undefined)},n}();n.DataContext=t}(n||(n={})),n});define("HubsExtension/Pickers/Models/PickerData",["require",
"exports"],function(){var n;return function(n){"use strict";var f=MsPortalFx.ViewModels.Services.ResourceTypes,
e=function(){function n(n,t){this.subscriptionId=ko.observable();this.subscriptionName=ko.observable(
);this.creditStatus=ko.observable(0);this.amountDueOrCreditInfo=ko.observable("");this.subscriptionIcon=
ko.observable();this.subscriptionTypeInfo=ko.observable();this.formattedAmountDueOrCredit=ko.observable(
"");this.subscriptionDetailBladeTypeName=ko.observable();this.isDisabled=ko.observable(!1);n&&n.createChildLifetime||
(n=undefined,t=arguments[0]);this.infoBalloon=new MsPortalFx.ViewModels.Controls.DockedBalloon.ViewModel(
n);t&&(this.subscriptionId=ko.observable(t.id),this.subscriptionName=ko.observable(t.subscriptionName),
this.subscriptionTypeInfo=ko.observable(t.subscriptionTypeInfo),this.formattedAmountDueOrCredit=ko.observable(
t.formattedAmountDueOrCredit),this.amountDueOrCreditInfo=ko.observable(t.amountDueOrCreditInfo),this.
subscriptionIcon=ko.observable(t.subscriptionIcon),this.creditStatus=ko.observable(t.creditStatus),this.
subscriptionDetailBladeTypeName=ko.observable(t.subscriptionDetailBladeTypeName))}return n}(),t,i,r,
u;n.SubscriptionPickerGridViewModel=e;t=function(){function n(n,t){if(this.resourceGroupId=ko.observable(
),this.subscriptionName=ko.observable(),this.resourceGroupName=ko.observable(),this.subscriptionId=ko.
observable(),this.location=ko.observable(),n&&n.createChildLifetime||(n=undefined,t=arguments[0]),this.
infoBalloon=new MsPortalFx.ViewModels.Controls.DockedBalloon.ViewModel(n),t){this.resourceGroupId(t.
id);this.location(t.location);this.resourceGroupName(t.name);var i=f.parseResourceGroupDescriptor(t.
id);i&&this.subscriptionId(i.subscription)}}return n}();n.ResourceGroupPickerGridViewModel=t;i=function(
){function n(n,t){this.regionName=ko.observable();this.regionId=ko.observable();n&&n.createChildLifetime||
(n=undefined,t=arguments[0]);this.infoBalloon=new MsPortalFx.ViewModels.Controls.DockedBalloon.ViewModel(
n);t&&(this.regionName(t.displayName),this.regionId(t.id))}return n}();n.RegionPickerGridViewModel=i;
r=function(){function n(n,t){this.id=n;this.displayName=t}return n}();n.GeoRegion=r;u=function(){function n(
){}return n.eastasia="eastasia",n.southeastasia="southeastasia",n.eastus="eastus",n.westus="westus",
n.northcentralus="northcentralus",n.southcentralus="southcentralus",n.northeurope="northeurope",n.westeurope=
"westeurope",n.eastjapan="japaneast",n.westjapan="japanwest",n.southbrazil="brazilsouth",n.useast2="eastus2",
n.uscentral="centralus",n}();n.Region=u}(n||(n={})),n});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("HubsExtension/Pickers/ViewModels/PickerBladeBaseViewModel",["require","exports","HubsExtension/Pickers/PickersClientStrings"],
function(n,t,i){var r;return function(n){"use strict";var t=i,r=function(n){function i(){n.call(this);
this.title(t.PickerBlade.title)}return __extends(i,n),i.prototype.onInputsSet=function(n){var t=[];return n&&
n.pickerErrors&&n.pickerErrors.length>0&&(t=n.pickerErrors),t.length>0?(this.contentStateDisplayText(
t[0].parameterName+": "+t[0].errorMessage),this.contentState(3)):(this.contentStateDisplayText(""),this.
contentState(0)),null},i}(MsPortalFx.ViewModels.Blade);n.PickerBladeBaseViewModel=r}(r||(r={})),r});
define("HubsExtension/Pickers/ViewModels/WorldMapViewModel",["require","exports"],function(){var n;return function(
n){"use strict";var t=function(){function n(){this.selectedRegionId=ko.observable("")}return n.prototype.
onInputsSet=function(){return null},n}();n.WorldMapViewModel=t}(n||(n={})),n});define("HubsExtension/ServicesHealth/ServicesHealthCommon",
["require","exports"],function(){var n;return function(n){"use strict";n.areaIcon=MsPortalFx.Base.Images.
Polychromatic.Globe()}(n||(n={})),n});define("HubsExtension/ServicesHealth/ServicesHealth.Status",["require",
"exports","./Models/ServicesHealthModels","HubsExtension/ServicesHealth/ServicesHealthClientStrings"],
function(n,t,i,r){var u;return function(n){"use strict";var i=r.ServicesHealth,u=function(){function n(
n,t){var i=this;this.WorstStatusCount=0;this.WorstStatusByRegion={};t.forEach(function(t){t.regions(
).forEach(function(t){var r=t.status();t.regionId()===5?i._updateMultiRegionStatuses(n,r):i._updateRegionStatus(
t.regionId(),r)})});this.WorstStatus===undefined&&(this.WorstStatus=0);n.forEach(function(n){i.WorstStatusByRegion[
n.id()]===undefined&&(i.WorstStatusByRegion[n.id()]=0)})}return n.prototype._updateMultiRegionStatuses=
function(n,t){var i=this;n.forEach(function(n){n.isServiceMultiRegion()===!0&&i._updateRegionStatus(
n.id(),t)})},n.prototype._updateRegionStatus=function(n,i){(this.WorstStatusByRegion[n]===undefined||
t.statusComparer(this.WorstStatusByRegion[n],i)>0)&&(this.WorstStatusByRegion[n]=i,this._updateWorstStatus(
i))},n.prototype._updateWorstStatus=function(n){var i=t.statusComparer(this.WorstStatus,n);this.WorstStatus===
undefined||i>0?(this.WorstStatus=n,this.WorstStatusCount=1):i===0&&this.WorstStatusCount++},n._bestStatus=
4,n}(),t;n.RegionStatusAggregator=u;t=function(){function n(){}return n.getStatusIcon=function(n){switch(
n){case 1:return MsPortalFx.Base.Images.StatusBadge.Outline.Error();case 2:return MsPortalFx.Base.Images.
StatusBadge.Outline.Warning();case 3:return MsPortalFx.Base.Images.StatusBadge.Outline.Info();case 4:
return MsPortalFx.Base.Images.StatusBadge.Outline.Success();default:return MsPortalFx.Base.Images.StatusBadge.
Outline.Unknown()}},n.getStatusIconLookup=function(){var t={};return t[0]=n.getStatusIcon(0),t[1]=n.
getStatusIcon(1),t[2]=n.getStatusIcon(2),t[3]=n.getStatusIcon(3),t[4]=n.getStatusIcon(4),t},n.serviceStatusToNormalizedStatus=
function(n){if(!n)return 0;switch(n.toUpperCase()){case"RED":return 1;case"ORANGE":case"YELLOW":return 2
case"GREEN":return 4;case"BLUE":return 3;default:return 0}},n.statusToCollectionDisplayName=function(
n){switch(n){case 1:return i.servicesCollectionCriticalIssuesLabel;case 2:return i.servicesCollectionIssuesLabel
default:return i.servicesCollectionLabel}},n.statusComparer=function(n,t){return n-t},n}();n.Utilities=
t}(u||(u={})),u});define("HubsExtension/ServicesHealth/Models/ServicesHealthModels",["require","exports",
"HubsExtension/ServicesHealth/ServicesHealthClientStrings"],function(n,t,i){var r;return function(n)
{"use strict";var e=i.PersonalizedServicesHealth,u,f,t,r;(function(n){n[n.Unknown=0]="Unknown";n[n.Critical=
1]="Critical";n[n.Warning=2]="Warning";n[n.Info=3]="Info";n[n.Normal=4]="Normal"})(n.NormalizedStatus||
(n.NormalizedStatus={}));u=n.NormalizedStatus,function(n){n[n.NorthCentralUS=1]="NorthCentralUS";n[n.
SouthCentralUS=2]="SouthCentralUS";n[n.NorthEurope=3]="NorthEurope";n[n.SoutheastAsia=4]="SoutheastAsia";
n[n.MultiRegion=5]="MultiRegion";n[n.WestEurope=6]="WestEurope";n[n.EastAsia=7]="EastAsia";n[n.EastUS=
8]="EastUS";n[n.WestUS=9]="WestUS";n[n.SiliconValley=11]="SiliconValley";n[n.WashingtonDC=12]="WashingtonDC";
n[n.EastJapan=13]="EastJapan";n[n.WestJapan=14]="WestJapan";n[n.SauPaulo=15]="SauPaulo";n[n.EastUS2=
17]="EastUS2";n[n.CentralUS=18]="CentralUS";n[n.AustraliaEast=19]="AustraliaEast";n[n.AustraliaSoutheast=
20]="AustraliaSoutheast"}(n.AzureRegionId||(n.AzureRegionId={}));f=n.AzureRegionId;n.azureRegionIdToARMRegion=
[,"northcentralus","southcentralus","northeurope","southeastasia",,"westeurope","eastasia","eastus",
"westus",,,,"japaneast","japanwest","brazilsouth",,"eastus2","centralus","australiaeast","australiasoutheast",
];n.AzureRegionType="Microsoft.Portal.HubsExtension.ServicesHealth.Models.AzureRegion";n.AzureServiceType=
"Microsoft.Portal.HubsExtension.ServicesHealth.Models.AzureService";n.AzureServiceRegionType="Microsoft.Portal.HubsExtension.ServicesHealth.Models.AzureServiceRegion";
n.AzureServiceRegionIncidentType="Microsoft.Portal.HubsExtension.ServicesHealth.Models.AzureServiceRegionIncident";
n.AzureServiceRegionIncidentMessageType="Microsoft.Portal.HubsExtension.ServicesHealth.Models.AzureServiceRegionIncidentMessage";
n.locationMetadata={name:"HubsExtension.Location",properties:{name:null,displayName:null,id:null,latitude:
null,longitude:null},entityType:!0,idProperties:["name"]};MsPortalFx.Data.Metadata.setTypeMetadata(n.
locationMetadata.name,n.locationMetadata);t=function(){function n(){}return n.metadata={name:"HubsExtension.Event",
properties:{correlationId:null,description:null,incidentType:null,eventName:null,eventSource:null,resourceProviderName:
null,status:null,level:null,regions:{itemType:"System.String",isArray:!0}},entityType:!0,idProperties:
["correlationId"]},n.incidentTypes={outage:"outage",action:"action",maintenance:"maintenance",advisory:
"advisory"},n.eventLevels={critical:"critical",error:"error",warning:"warning",informational:"informational"},
n}();n.Event=t;MsPortalFx.Data.Metadata.setTypeMetadata(t.metadata.name,t.metadata);r=function(){function n(
){}return n}();n.ServiceHealthItem=r}(r||(r={})),r});define("HubsExtension/ServicesHealth/ServicesHealth.Mapping",
["require","exports","./Models/ServicesHealthModels","./ServicesHealth.Status","HubsExtension/ServicesHealth/ServicesHealthClientStrings"],
function(n,t,i,r,u){var f;return function(n){"use strict";var o=u.ServicesHealth,f=MsPortalFx.Base.Resources.
getImages(HubsExtension.Resources.Images.ServicesHealth),e=function(){function n(){}return n.getRegionStatusMap=
function(r,u,e){var o=n._regionMapOptionsTable.first(function(n){return n.id===r});if(!o)return null;
var c=o.offsetX||0,l=o.offsetY||0,h=o.scale||1,s=new t;return s.uri=f["map"+r],s.summary=e,s.points=
n._regionMapReferencePoints.filter(function(n){return!!u[n.id]}).map(function(n){var t=u[n.id];return new
i(n.id,h*n.x+c,h*n.y+l,t)}),s},n._regionMapReferencePoints=[{id:9,x:63,y:117},{id:8,x:117,y:127},{id:
1,x:105,y:112},{id:2,x:87,y:134},{id:15,x:158,y:230},{id:3,x:217,y:87},{id:6,x:237,y:87},{id:14,x:411,
y:122},{id:13,x:419,y:110},{id:7,x:379,y:144},{id:4,x:366,y:178},{id:11,x:72,y:129},{id:12,x:119,y:114},
{id:19,x:434,y:240},{id:20,x:425,y:251},],n._regionMapOptionsTable=[{id:"blade",scale:.52,offsetX:1,
offsetY:7},{id:3,scale:.445,offsetX:86,offsetY:9},{id:10,scale:.64,offsetY:83},{id:5,offsetY:20}],n}
(),t,i;n.Utilities=e;t=function(){function n(){this.points=[]}return n.prototype.dispose=function(){
this.points&&this.points.forEach(function(n){var t=n;t.dispose&&t.dispose()})},n}();n.Map=t;i=function(
){function n(n,t,i,u){this.id=n;this.x=t;this.y=i;this.status=u;this.cssX=this.x+"px";this.cssY=this.
y+"px";this.icon=ko.pureComputed(function(){return r.Utilities.getStatusIcon(u())})}return n.prototype.
dispose=function(){this.icon.dispose()},n}();n.MapStatusPoint=i}(f||(f={})),f});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("HubsExtension/ServicesHealth/ViewModels/Commands/PublicShdUriCommandViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
){n.call(this);this._uri="http://azure.microsoft.com/status";this.navigateUri(this._uri);this.icon(MsPortalFx.
Base.Images.Link())}return __extends(t,n),t}(MsPortalFx.ViewModels.UriCommand);n.PublicShdUriCommandViewModel=
t}(n||(n={})),n});define("HubsExtension/SpecPicker/Models/SpecPickerConstants",["require","exports"],
function(){var n;return function(n){"use strict";var t;(function(n){n.all="all";n.inputParameterGroupName=
"specPicker";n.inputParameterName={subscriptionId:"subscriptionId",regionId:"regionId",selectedSpecId:
"selectedSpecId",selectRecommendedView:"selectRecommendedView",entityId:"entityId",recommendedSpecIds:
"recommendedSpecIds",disabledSpecs:"disabledSpecs"}})(t=n.SpecPickerConstants||(n.SpecPickerConstants=
{}))}(n||(n={})),n})