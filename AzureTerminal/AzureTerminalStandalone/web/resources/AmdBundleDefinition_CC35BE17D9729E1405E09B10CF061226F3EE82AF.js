var __extends;define("HubsExtension/BrowseResource/BrowseResourceArea",["require","exports","./ResourceData",
"./ResourceGroupData","../Common/UserSettingsHelper"],function(n,t,i,r,u){var f;return function(n){"use strict";
var f=MsPortalFx.Internal.Hubs.Settings.Schema.Keys,t=f.browseColumnsSettings,e=function(){function n(
){var n=this;this.resourceData=new i.ResourceData;this.resourceGroupData=new r.ResourceGroupData;this.
_resourceColumns={};this._settingsOperations={};u.UserSettingsHelper.readSettings([t]).then(function(
i){i[t]&&Object.keys(i[t]).forEach(function(r){n._resourceColumns[r]=ko.observable(i[t][r])})})}return n.
prototype.getBrowseColumns=function(n){return this._resourceColumns[n]||(this._resourceColumns[n]=ko.
observable()),this._resourceColumns[n]},n.prototype.setBrowseColumns=function(n,i){var e=this,r,f;this.
_resourceColumns[n]||(this._resourceColumns[n]=ko.observable());this._resourceColumns[n](i);r={};Object.
keys(this._resourceColumns).forEach(function(n){r[n]=ko.utils.unwrapObservable(e._resourceColumns[n])}
);f={};f[t]=r;u.UserSettingsHelper.writeSettings(f)},n.prototype.createSettingsOperation=function(){
var n=MsPortalFx.Util.newGuid();return this._settingsOperations[n]={canApplySettings:ko.observable(!1),
applySettings:null},n},n.prototype.getSettingsOperation=function(n){return this._settingsOperations[
n]},n.prototype.disposeSettingsOperation=function(n){this._settingsOperations[n]&&delete this._settingsOperations[
n]},n}();n.DataContext=e}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"HubsExtension/BrowseResource/ResourceData",["require","exports","./BrowseData","../ResourceMap/ResourceMapCommon"],
function(n,t,i,r){var u;return function(n){"use strict";var t="api/resources",u="HubsExtension.Resources",
f=function(n){function i(){var t=this;n.call(this,{entityTypeName:u,queryStringFormat:i.QueryString,
buildFetchOptions:function(n){return{resourceType:encodeURIComponent(n.resourceType)}},serializeParams:
function(n){return JSON.stringify([n.resourceType,n.token,n.supportedResourceTypes,n.filter].concat(
n.subscriptions))},mapSourceDataToData:function(n){return r.ResourceControllerClient.mapResourceToResourceWithStrings(
n,t.locationDisplayNameMap,!0)}})}return __extends(i,n),i.QueryString=MsPortalFx.Base.Resources.getAppRelativeUri(
t+"/continuousByType?resourceType={resourceType}&filter={filter}"),i}(i.BrowseData);n.ResourceData=f}
(u||(u={})),u});define("HubsExtension/BrowseResource/BrowseData",["require","exports","../Common/HubsObservables"],
function(n,t,i){var r;return function(n){"use strict";function u(n,t,i){return MsPortalFx.Base.Net.ajax(
{uri:n,type:t,data:JSON.stringify(i),dataType:"json",contentType:"application/json"})}var t=window,r=
t.HubsExtensionBrowseMockAjax||u,f=function(){function n(n){var t=this;this._locationDisplayNameMapPromise=
i.getLocations().then(function(n){t.locationDisplayNameMap=n});this.dataCache=new MsPortalFx.Data.QueryCache(
{entityTypeName:n.entityTypeName,sourceUri:MsPortalFx.Data.uriFormatter(n.queryStringFormat),httpMethod:
"POST",navigation:{loadByContinuationToken:function(t,i,r,u){var o=r?null:t.metadata()?t.metadata().
continuationToken:null,f=i.subscriptions||[],e=$.extend({filter:encodeURIComponent(u),token:r?null:t.
metadata()?t.metadata().continuationToken:null,supportedResourceTypes:i.supportedResourceTypes,subscriptions:
f},n.buildFetchOptions(i));return t.fetch(e)}},serializeParams:n.serializeParams,supplyData:function(
n,i,u,f,e){var o=e.subscriptions||[],s;return o.length===0?Q.resolve(!0):(s={subscriptionIds:o.join(
";"),token:e.token,resourceTypes:e.supportedResourceTypes},t._locationDisplayNameMapPromise.then(function(
){return r(i,n,s)}))},processServerResponse:function(t){if(!t||!t.value)return{data:[]};var i=t.value.
map(function(t){return n.mapSourceDataToData(t)});return{data:i,navigationMetadata:{continuationToken:
t.token}}}})}return n}();n.BrowseData=f}(r||(r={})),r});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("HubsExtension/BrowseResource/ResourceGroupData",["require","exports","./BrowseData","../ResourceMap/ResourceMapCommon"],
function(n,t,i,r){var u;return function(n){"use strict";var t="api/resourcegroups",u="HubsExtension.ResourceGroups",
f=function(n){function i(){var t=this;n.call(this,{entityTypeName:u,queryStringFormat:i.QueryString,
buildFetchOptions:function(){return{}},serializeParams:function(n){return JSON.stringify([n.token].concat(
n.subscriptions))},mapSourceDataToData:function(n){return r.ResourceGroupControllerClient.mapResourceGroupToResourceGroupWithStrings(
n,t.locationDisplayNameMap,!0)}})}return __extends(i,n),i.QueryString=MsPortalFx.Base.Resources.getAppRelativeUri(
t+"/continuous?filter={filter}"),i}(i.BrowseData);n.ResourceGroupData=f}(u||(u={})),u})