var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/BrowseResource/ViewModels/Resource/BrowseResourceSettingsBladeViewModel",
["require","exports","HubsExtension/Browse/BrowseClientStrings","../../../Common/AssetTypeCache","../../BrowseResource.Diagnostics"],
function(n,t,i,r,u){var f;return function(n){"use strict";var t=function(n){function t(t,r,u){n.call(
this);this.resourceType=ko.observable();this.operation=ko.observable();this.title(i.browseSettings);
this.operation(u.createSettingsOperation())}return __extends(t,n),t.prototype.onInputsSet=function(n)
{var t=this;return this.resourceType(n.resourceType),r.getResourceTypeAssetTypeInformation(this.resourceType(
)).then(function(n){t.subtitle(n.compositeDisplayName.plural)},function(){t.subtitle(null);u.Log.error(
"Could not find the asset type information for the {0} resource type.".format(t.resourceType()))})},
t}(MsPortalFx.ViewModels.Blade);n.BrowseResourceSettingsBladeViewModel=t}(f||(f={})),f})