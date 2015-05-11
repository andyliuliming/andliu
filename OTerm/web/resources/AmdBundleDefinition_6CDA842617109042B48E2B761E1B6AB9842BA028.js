var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Help/ViewModels/TourTileViewModel",
["require","exports","HubsExtension/Help/HelpClientStrings"],function(n,t,i){var r;return function(n)
{"use strict";var t=i.Tour.Tile,r=function(n){function i(){n.call(this);this.miniTileImage=MsPortalFx.
Base.Images.ImageUri(MsPortalFx.Base.Resources.getContentUri("Content/Images/HubsExtension/Tour_Tile_Background_Mini.png"));
this.smallTileImage=MsPortalFx.Base.Images.ImageUri(MsPortalFx.Base.Resources.getContentUri("Content/Images/HubsExtension/Tour_Tile_Background_Small.png"));
this.normalTileImage=MsPortalFx.Base.Images.ImageUri(MsPortalFx.Base.Resources.getContentUri("Content/Images/HubsExtension/Tour_Tile_Background_Normal.png"));
this.wideTileImage=MsPortalFx.Base.Images.ImageUri(MsPortalFx.Base.Resources.getContentUri("Content/Images/HubsExtension/Tour_Tile_Background_Wide.png"));
this.title(t.title);this.icon(MsPortalFx.Base.Images.Tour());this.shortTitle(t.shortTitle);this.description(
t.description)}return __extends(i,n),i}(MsPortalFx.ViewModels.ButtonPart);n.TourTileViewModel=r}(r||
(r={})),r})