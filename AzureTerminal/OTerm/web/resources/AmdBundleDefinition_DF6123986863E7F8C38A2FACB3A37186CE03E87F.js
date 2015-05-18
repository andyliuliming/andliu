define("HubsExtension/ResourceMap/ResourceMapArea",["require","exports","../ArmHelpers/ArmApis"],function(
n,t,i){var r;return function(n){"use strict";var t=function(){function n(n){var t=this;MsPortalFx.Data.
Metadata.setTypeMetadata("ArmDeployments",{name:"ArmDeployments",idProperties:["id"],hasGloballyUniqueId:
!0});MsPortalFx.Data.Metadata.setTypeMetadata("ArmDeploymentOperations",{name:"ArmDeploymentOperations",
idProperties:["id"],hasGloballyUniqueId:!0});this._notifications=n;this.deploymentsQueryCache=new MsPortalFx.
Data.QueryCache({entityTypeName:"ArmDeployments",atomizationOptions:{atomizationContextId:"HubsExtension.ArmDeployments"},
sourceUri:function(n){return i.Deployments.listDeploymentsApi(n)},poll:!0,httpMethod:"GET",supplyData:
function(n,i,r,u,f){return t._supplyData(n,i,r,u,f)},processServerResponse:function(n){return n&&n.value&&
n.value.length>0&&n.value.forEach(function(n){t._removeUnusedProperties(n)}),{data:n&&n.value}}});this.
deploymentEntityCache=new MsPortalFx.Data.EntityCache({entityTypeName:"ArmDeployments",atomizationOptions:
{atomizationContextId:"HubsExtension.ArmDeployments"},sourceUri:function(n){return i.Deployments.singleDeploymentApi(
n)},pollFrequency:1,httpMethod:"GET",supplyData:function(n,i,r,u,f){return t._supplyData(n,i,r,u,f)}
,processServerResponse:function(n){return t._removeUnusedProperties(n),{data:n}}});this.deploymentOperationsQueryCache=
new MsPortalFx.Data.QueryCache({entityTypeName:"ArmDeploymentOperations",atomizationOptions:{atomizationContextId:
"HubsExtension.ArmDeploymentOperations"},sourceUri:function(n){return i.Deployments.deploymentOperationsApi(
n)},poll:!0,httpMethod:"GET",navigation:{loadByContinuationToken:function(n,t){return n.fetch(t.deploymentId)}
},supplyData:function(n,i,r,u,f){return t._supplyData(n,i,r,u,f)},processServerResponse:function(n){
return{data:n&&n.value}}});this.deploymentOperationEntityCache=new MsPortalFx.Data.EntityCache({entityTypeName:
"ArmDeploymentOperations",atomizationOptions:{atomizationContextId:"HubsExtension.ArmDeploymentOperations"},
sourceUri:function(n){return i.Deployments.singleDeploymentOperationApi(n)},httpMethod:"GET",supplyData:
function(n,i,r,u,f){return t._supplyData(n,i,r,u,f)},processServerResponse:function(n){return{data:n}}
})}return n.prototype.forceNotificationsRefresh=function(){this._notifications&&this._notifications.
forceEventRefresh()},n.prototype._removeUnusedProperties=function(n){n&&n.properties&&(delete n.properties.
dependencies,delete n.properties.providers)},n.prototype._supplyData=function(n,t,i,r){return MsPortalFx.
Base.Net.ajax({uri:t,type:n,dataType:"json",contentType:"application/json",setAuthorizationHeader:!0,
headers:i,cache:!1,traditional:!0,data:typeof r=="string"?r:JSON.stringify(r)})},n}();n.DataContext=
t}(r||(r={})),r})