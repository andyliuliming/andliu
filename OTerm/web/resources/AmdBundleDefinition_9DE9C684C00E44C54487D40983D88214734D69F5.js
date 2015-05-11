var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Gallery/ViewModels/Parts/GalleryTileViewModel",
["require","exports","HubsExtension/Gallery/GalleryClientStrings","../../../Generated/SvgDefinitions"],
function(n,t,i,r){var u;return function(n){"use strict";var t=i.Gallery.Tile,u=function(){function n(
n,t){this.selectedMenuItemId=ko.observable("");this.title=ko.observable();this.galleryIcon=ko.observable(
);this.size=ko.observable();this.partSizeClass=ko.observable("");this.titleClass=ko.observable("");n.
selectable=MsPortalFx.ViewModels.Part.createSelectableViewModel(t);this._handleSizeChange(n)}return n.
prototype.onInputsSet=function(n){return this.selectedMenuItemId(n.selectedMenuItemId||""),null},n.prototype.
_handleSizeChange=function(n){var i=this;ko.reactor(n,function(){var o=i.size(),n="",u="",f="",e=null;
switch(o){case 0:n=t.title;u="ext-gallery-startboard-tile-mini";f="msportalfx-text-subheader msportalfx-text-ellipsis";
e=MsPortalFx.Base.Images.Polychromatic.Store();break;case 1:n=t.fullTitle;u="ext-gallery-startboard-tile-small";
f="msportalfx-text-regular msportalfx-text-ellipsis";e=MsPortalFx.Base.Images.Polychromatic.Store();
break;case 2:n=t.fullTitle;u="ext-gallery-startboard-tile-normal";f="msportalfx-text-header msportalfx-text-ellipsis";
e=r.Content.Images.HubsExtension.gallery_Startboard_Icon;break;case 3:n=t.fullTitle;u="ext-gallery-startboard-tile-wide";
f="msportalfx-text-header";e=r.Content.Images.HubsExtension.gallery_Startboard_Icon}i.title(n);i.partSizeClass(
u);i.titleClass(f);i.galleryIcon(e)})},n}(),f,e;n.GalleryTileViewModel=u;f=function(n){function t(t,
i,r){n.call(this,t,i,r)}return __extends(t,n),t}(u);n.StoreGalleryTileViewModel=f;e=function(n){function i(
i,r){n.call(this);this._hasInitialState=!1;this._hasInitialState=r&&Object.keys(r).length>0;this._container=
i;i.selectable=MsPortalFx.ViewModels.Part.createSelectableViewModel(r);this.title(t.title);this.shortTitle(
t.shortTitle);this.description(t.description);this.icon(MsPortalFx.Base.Images.Gear())}return __extends(
i,n),i.prototype.onInputsSet=function(n){if(n.dynamicBladeSelection){var t=n.dynamicBladeSelection;this.
_container.selectable.selectedValue(n.dynamicBladeSelection);this._hasInitialState||this._container.
selectable.isSelected(!0);n.dynamicBladeSelection.detailBladeInputs&&n.dynamicBladeSelection.detailBladeInputs.
galleryItem&&n.dynamicBladeSelection.detailBladeInputs.galleryItem.itemDisplayName&&this.title(n.dynamicBladeSelection.
detailBladeInputs.galleryItem.itemDisplayName)}return null},i}(MsPortalFx.ViewModels.ButtonPart);n.GalleryTemporaryTileViewModel=
e}(u||(u={})),u})