var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/BrowseResource/ViewModels/Resource/BrowseResourceBladeViewModel",
["require","exports","HubsExtension/Browse/BrowseClientStrings","../../../Common/AssetTypeCache","../../../ResourceMap/ResourceMapCommon",
"../../BrowseResource.Diagnostics"],function(n,t,i,r,u,f){var e;return function(n){"use strict";var t=
function(n){function t(t){var u=this;n.call(this);this.resourceType=ko.observable();r.onlyPartialResultsAvailable.
subscribe(t,function(n){n&&(u.contentState(2),u.contentStateDisplayText(i.partialResultsWarningForBrowseAllResources))}
)}return __extends(t,n),t.prototype.onInputsSet=function(n){return(this.resourceType(n.resourceType),
this.resourceType())?this.resourceType().toLowerCase()===u.resourceGroupResourceTypeLowerCase?this._handleResourceGroupType(
):this.resourceType().toLowerCase()===MsPortalFx.Base.Constants.ResourceTypes.AllResources.toLowerCase(
)?this._handleAllResourceTypes():this._handleResourceType():null},t.prototype._handleResourceGroupType=
function(){return f.Log.error("Cannot use the browse resource blade for resource group type."),Q.reject(
)},t.prototype._handleResourceType=function(){var n=this;return r.getResourceTypeAssetTypeInformation(
this.resourceType()).then(function(t){n.title(t.compositeDisplayName.plural);n.icon(t.icon)},function(
){n.title(n.resourceType());n.icon(MsPortalFx.Base.Images.Polychromatic.SearchGrid());f.Log.error("Could not find the asset type information for the {0} resource type.".
format(n.resourceType()))})},t.prototype._handleAllResourceTypes=function(){return this.title(i.allResources),
this.icon(MsPortalFx.Base.Images.Polychromatic.Grid()),null},t}(MsPortalFx.ViewModels.Blade);n.BrowseResourceBladeViewModel=
t}(e||(e={})),e})