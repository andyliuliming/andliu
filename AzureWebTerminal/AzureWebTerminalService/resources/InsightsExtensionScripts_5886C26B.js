function loadAISdk(){var t={instrumentationKey:window.fx.environment.iKeyIbiza},n=window.fx.environment.
endpointAddressIbiza,i;typeof n=="string"&&n.length>0&&(t.endpointUrl=n);i=window.appInsights||function(
n){function f(n){t[n]=function(){var i=arguments;t.queue.push(function(){t[n].apply(t,i)})}}var t={config:
n},r=document,e=window,o="script",s=r.createElement(o),i,u;for(s.src=n.url||"//az416426.vo.msecnd.net/scripts/a/ai.0.js",
r.getElementsByTagName(o)[0].parentNode.appendChild(s),t.cookie=r.cookie,t.queue=[],i=["Event","Exception",
"Metric","PageView","Trace"];i.length;)f("track"+i.pop());return n.disableExceptionTracking||(i="onerror",
f("_"+i),u=e[i],e[i]=function(n,r,f,e,o){var s=u&&u(n,r,f,e,o);return s!==!0&&t["_"+i](n,r,f,e,o),s}
),t}(t);window.appInsights=i}var MsPortal;(function(n){(function(n){function t(n){var t=n.split("/");
return{subscriptionId:t[2],resourceGroup:t[4],provider:t[6],type:t[7],name:t[8]}}n.parseId=t})(n.Azure||
(n.Azure={}));var t=n.Azure})(MsPortal||(MsPortal={})),function(n){(function(n){"use strict";var t=function(
){function n(){}return n.getCsmEndpoint=function(){var n=window.fx.environment.csmEndpoint;if(n==undefined)
throw"error: window.fx.environment.csmEndpoint is undefined in your iframe. Perhaps you should set it in _Layout.cshtml...";
return n},n.corsAjax=function(n){var t=$.Deferred();return MsPortalFx.Extension.getAuthorizationToken(
).then(function(n){t.resolve(n.header)}),t.then(function(t){var i={};return i.Authorization=t,i["x-ms-client-request-id"]=
MsPortalFx.Util.newGuid(),i["x-ms-client-session-id"]=window.fx.environment.sessionId,i["x-ms-version"]=
"1.0.0.0",n.headers=$.extend(n.headers,i),$.ajax(n.uri,n)})},n.Get=function(t,i){return n.corsAjax({
accepts:"application/json",uri:n.getCsmEndpoint()+t+"?api-version="+i,type:"GET"})},n.getProvider=function(
t,i){var r="/subscriptions/"+t+"/providers/"+i;return n.Get(r,"2014-04-01")},n.getResourceGroup=function(
t,i){var r="/subscriptions/"+t+"/resourceGroups/"+i;return n.Get(r,"2014-04-01")},n.getResourceGroups=
function(t){var i="/subscriptions/"+t+"/resourceGroups";return n.Get(i,"2014-04-01")},n.getSubscription=
function(t){var i="/subscriptions/"+t;return n.Get(i,"2014-04-01")},n.getSubscriptions=function(){return n.
Get("/subscriptions","2014-04-01")},n.getFirstResourceGroup=function(t){var i=$.Deferred();return n.
getResourceGroups(t).then(function(n){i.resolve(n.value[0])},function(){i.resolve(undefined)}),i.promise(
)},n.getFirstSubscription=function(){var t=$.Deferred();return n.getSubscriptions().then(function(n)
{t.resolve(n.value[0])},function(){t.resolve(undefined)}),t.promise()},n}();n.Csm=t})(n.Azure||(n.Azure=
{}));var t=n.Azure}(MsPortal||(MsPortal={})),function(n){(function(n){"use strict";var t=function(){
function n(){var n=this,i,t;this.resourceGroups=ko.observableArray([]);i=$.Deferred();this.loadPromise=
i.promise();t=function(){i.resolve();t=function(){}};setTimeout(t,6e4);MsPortalFx.Extension.getService(
"HubsExtension",0,"ResourceGroups").then(function(r){n._serviceClient=r;r.getObservable().then(function(
i){n._hubsObservable=i;n._observe(i(),t);n._observer=n._hubsObservable.subscribe(function(i){n._observe(
i,t)})},function(){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"ResourceGroupsData","RG failed to get observable!");
i.fail()})},function(){})}return n.prototype._observe=function(n,t){n&&n.resourceGroups&&(this.resourceGroups(
n.resourceGroups),this.resourceGroups().first()&&t())},n.prototype.dispose=function(){this._serviceClient&&
this._serviceClient.dispose();this._observer&&this._observer.dispose()},n.prototype.getDefaultResourceGroup=
function(){var n=this.resourceGroups().first();return n||MsPortalFx.Base.Diagnostics.Log.writeEntry(
1,"ResourceGroupsData","Failed getDefaultResourceGroup()"),n},n.prototype.getResourceGroup=function(
n,t){var i=this;return this.resourceGroups().first(function(r){return r.name===n&&i.inSubscription(r.
id,t)})},n.prototype.inSubscription=function(n,t){return n.indexOf("/subscriptions/"+t)===0},n}();n.
ResourceGroupsData=t})(n.Azure||(n.Azure={}));var t=n.Azure}(MsPortal||(MsPortal={})),function(n){(function(
n){"use strict";var t=function(){function n(){var n=this,t,r,i;this.subscriptions=ko.observableArray(
[]);t=$.Deferred();this.loadPromise=t.promise();r=function(){n._hubsObservable?n.subscriptions().first(
)||MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"SubscriptionsData","Subscriptions observable is loaded, but no subscriptions are available after 15 seconds"+
n.subscriptions().length):MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"SubscriptionsData","Failed to get hubs observable, after 15 seconds")}
;i=function(){t.resolve();r=function(){};i=function(){}};MsPortalFx.Extension.getService("HubsExtension",
0,"Subscriptions").then(function(u){n._serviceClient=u;u.getObservable().then(function(t){n._hubsObservable=
t;window.setTimeout(function(){r()},15e3);n._observe(t(),i);n._observer=n._hubsObservable.subscribe(
function(t){n._observe(t,i)})},function(){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"SubscriptionsData",
"SUB failed to get observable!");t.fail()})},function(){})}return n.prototype._observe=function(n,t)
{n&&n.subscriptions&&(this.subscriptions(n.subscriptions),this.subscriptions().first()&&t())},n.prototype.
dispose=function(){this._serviceClient&&this._serviceClient.dispose();this._observer&&this._observer.
dispose()},n.prototype.getSubscription=function(n){var t=this.subscriptions().first(function(t){return t.
subscriptionID===n});return n&&!t&&MsPortalFx.Base.Diagnostics.Log.writeEntry(1,"SubscriptionsData",
'Failed getSubscription("'+n+'")'),t},n}();n.SubscriptionsData=t})(n.Azure||(n.Azure={}));var t=n.Azure}
(MsPortal||(MsPortal={}));window.appInsightsUtilities={loadAISdk:loadAISdk};window.appInsightsUtilities.
loadAISdk()