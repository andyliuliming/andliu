var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Browse/ViewModels/BrowseAllBladeViewModel",
["require","exports","HubsExtension/Browse/BrowseClientStrings"],function(n,t,i){var r;return function(
n){"use strict";var t=function(n){function t(){n.call(this);this.type=ko.observable();this.title(i.browseTitle);
this.icon(MsPortalFx.Base.Images.Polychromatic.SearchGrid())}return __extends(t,n),t.prototype.onInputsSet=
function(n){return this.type(n.type),null},t}(MsPortalFx.ViewModels.Blade);n.BrowseAllBladeViewModel=
t}(r||(r={})),r})