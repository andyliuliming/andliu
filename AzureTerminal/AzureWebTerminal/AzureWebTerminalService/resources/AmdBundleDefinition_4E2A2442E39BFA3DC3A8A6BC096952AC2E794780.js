define("HubsExtension/ResourceMap/ViewModels/ResourceMapProviderViewModel",["require","exports","../../Common/HubsObservables",
"../ResourceMapCommon","HubsExtension/ResourceMap/ResourceMapClientStrings"],function(n,t,i,r,u){var
f;return function(n){"use strict";var t=MsPortalFx.ViewModels.Services.ResourceTypes,e=u,f=function(
){function n(n,t,i){this._context=i}return n.prototype.getResourceGroupMapResults=function(i){return n.
_wrapResults(function(){var s=t.parseResourceGroupDescriptor(i),u={resourceGroup:null,childResources:
[],linkedResources:[]},f,e,o;return r.ResourceGroupControllerClient.getResourceGroup(i).then(function(
t){return u.resourceGroup=n._mapResourceGroupToResourceGroupReference(t),t.id}).then(function(i){return r.
ResourceControllerClient.getResourcesInResourceGroup(i).then(function(h){var c=[];return h.forEach(function(
s){u.childResources.push(n._mapResourceToResourceReference(s));for(f in s.tags)s.tags.hasOwnProperty(
f)&&f.toLowerCase().indexOf(t.linkTagPrefix+":")===0&&(e=f.indexOf("/subscriptions/"),e!==-1&&(o=f.substr(
e),o.toLowerCase().indexOf(i.toLowerCase()+"/")!==0&&c.push(r.ResourceControllerClient.getResource(o).
then(function(t){u.linkedResources.push(n._mapResourceToResourceReference(t))}))))}),Q.allSettled(c).
then(function(){return r.ResourceControllerClient.getResourcesLinkedToResourceGroup(s.subscription,i).
then(function(t){return t.forEach(function(t){u.linkedResources.push(n._mapResourceToResourceReference(
t))}),u})})})})})},n.prototype.getResourceMapResults=function(i){return n._wrapResults(function(){var
o=t.parseResourceDescriptor(i),u={resourceGroup:null,resource:null,parentResource:null,relatedResourcesFromResource:
[],resourcesInResourceGroup:[],linkResourcesFromResource:[],linkResourcesToResource:[]},e,f,s=t.buildResourceGroupIdFromResourceDescriptor(
o);return r.ResourceGroupControllerClient.getResourceGroup(s).then(function(t){return u.resourceGroup=
n._mapResourceGroupToResourceGroupReference(t),t.id}).then(function(){return r.ResourceControllerClient.
getResourcesInResourceGroup(t.buildResourceGroupIdFromResourceDescriptor(o)).then(function(s){var h=
[],c;if(s.forEach(function(s){if(t.compareResourceId(s.id,i)){if(u.resource=n._mapResourceToResourceReference(
s),o.types.length>1){var c=t.buildParentResourceIdFromDescriptor(o);h.push(r.ResourceControllerClient.
getResource(c).then(function(n){u.parentResource=n}))}for(f in s.tags)s.tags.hasOwnProperty(f)&&(f.toLowerCase(
).indexOf(t.linkTagPrefix+":")===0?(e=f.toLowerCase().indexOf("/subscriptions/"),e!==-1&&h.push(r.ResourceControllerClient.
getResource(f.substr(e)).then(function(t){u.linkResourcesFromResource.push(n._mapResourceToResourceReference(
t))}))):f.toLowerCase().indexOf(t.relatedTagPrefix+":")===0&&(e=f.toLowerCase().indexOf("/subscriptions/"),
e!==-1&&h.push(r.ResourceControllerClient.getResource(f.substr(e)).then(function(t){u.relatedResourcesFromResource.
push(n._mapResourceToResourceReference(t))}))))}u.resourcesInResourceGroup.push(n._mapResourceToResourceReference(
s))}),u.resource===null){c=new Error("Failed to retrieve the resource.");c.status=404;throw c;}return Q.
allSettled(h).then(function(){return r.ResourceControllerClient.getResourcesLinkedToResource(o.subscription,
i).then(function(t){return t.forEach(function(t){u.linkResourcesToResource.push(n._mapResourceToResourceReference(
t))}),u})})})})})},n.prototype.getResourceGroup=function(t){return n._wrapResults(function(){return r.
ResourceGroupControllerClient.getResourceGroupWithStrings(t)})},n.prototype.getResource=function(t){
return n._wrapResults(function(){return r.ResourceControllerClient.getResourceWithStrings(t)})},n.prototype.
processResourceGroupChange=function(){i.invalidateResourceGroups();this._context.forceNotificationsRefresh(
)},n.prototype.deleteResourceGroup=function(n){return r.ResourceGroupControllerClient.deleteResourceGroup(
n)},n.prototype.getOperationResponse=function(n){return r.ResourceManagerOperationsControllerClient.
getOperationResponse(n)},n.prototype.getResourceTypeCache=function(){return r.ResourceControllerClient.
getResourceTypeCache()},n._mapResourceGroupToResourceGroupReference=function(n){return{id:n.id,name:
n.name,location:n.location}},n._mapResourceToResourceReference=function(n){return{id:n.id,name:n.name,
location:n.location,type:n.type,kind:n.kind}},n._wrapResults=function(t){return t().then(function(n)
{return{result:n}}).catch(function(t){return n._tryHandleAcceptableError(t)})},n._tryHandleAcceptableError=
function(n){var t=n;if(n&&(t.status===404||t.status===403))return{error:t};throw n;},n}();n.ResourceMapProviderViewModel=
f}(f||(f={})),f})