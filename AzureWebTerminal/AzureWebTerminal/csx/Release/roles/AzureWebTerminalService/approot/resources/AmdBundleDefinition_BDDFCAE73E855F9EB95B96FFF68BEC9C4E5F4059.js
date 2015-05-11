var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Help/ViewModels/FeedbackTileViewModel",
["require","exports","HubsExtension/Help/HelpClientStrings"],function(n,t,i){var r;return function(n)
{"use strict";var t=i.Feedback.Tile,r=function(n){function i(i){n.call(this);this.title(t.title);this.
icon(MsPortalFx.Base.Images.Polychromatic.Heart());i.clickableLink=MsPortalFx.ViewModels.Part.createClickableLinkViewModel(
ko.observable("https://go.microsoft.com/fwlink/?LinkID=522329"))}return __extends(i,n),i}(MsPortalFx.
ViewModels.ButtonPart);n.FeedbackTileViewModel=r}(r||(r={})),r})