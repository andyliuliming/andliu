var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Browse/ViewModels/BrowseAllTileViewModel",
["require","exports","HubsExtension/Browse/BrowseClientStrings"],function(n,t,i){var r;return function(
n){"use strict";var t=function(n){function t(){n.call(this);this.type=ko.observable();this.title(i.BrowseTile.
title);this.shortTitle(i.BrowseTile.shortTitle);this.description(i.BrowseTile.description);this.icon(
MsPortalFx.Base.Images.Polychromatic.SearchGrid());this.size(2)}return __extends(t,n),t.prototype.onInputsSet=
function(n){return this.type(n.type),null},t}(MsPortalFx.ViewModels.ButtonPart);n.BrowseAllTileViewModel=
t}(r||(r={})),r})