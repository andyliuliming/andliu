define("WebsitesExtension/TypeScript/ViewModels/Parts/WebHostingPlanResourceMappingViewModel",["require",
"exports","../../ExtensionAssets/Constants","../../Models/WebHostingPlanResourceId"],function(n,t,i,
r){var u;return function(n){"use strict";var t=function(){function n(n,t,i){this._dataContext=i;this.
_dataView=i.websitesData.webHostingPlanCache.createView(n)}return n.prototype.mapResourceIdToAssetId=
function(n){return this._getWebHostingPlanByResourceId(n).then(function(n){return new r.WebHostingPlanAssetDetails(
n).assetId})},n.prototype.mapAssetIdToResourceId=function(n){return this._getWebHostingPlanByAssetId(
n).then(function(n){return i.Asset.ServerFarmResourceUriTemplate.format(n.SubscriptionId(),n.ResourceGroup(
),n.Name())})},n.prototype._getWebHostingPlanByResourceId=function(n){var t=MsPortalFx.ViewModels.Services.
ResourceTypes.parseResourceDescriptor(n),i=new r.WebHostingPlanResourceId({Name:t.resource,ResourceGroup:
t.resourceGroup,SubscriptionId:t.subscription});return this._getWebHostingPlan(i)},n.prototype._getWebHostingPlanByAssetId=
function(n){var t=new r.WebHostingPlanResourceId(n);return this._getWebHostingPlan(t)},n.prototype._getWebHostingPlan=
function(n){var i=this,t=Q.defer();return this._dataView.fetch(n).then(function(){t.resolve(i._dataView.
item())},function(){t.reject()}),t.promise},n}();n.WebHostingPlanResourceMappingViewModel=t}(u||(u={
})),u})