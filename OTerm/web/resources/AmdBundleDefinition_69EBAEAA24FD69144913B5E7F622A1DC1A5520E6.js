var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Controls/Controls.InfoBox",
["require","exports","MsPortalImpl.Controls/Controls/Base/Loadable","MsPortalImpl/Controls/Controls.HotSpot"],
function(n,t,i,r){var u;return function(n){"use strict";var e=window,t="fxcontrol-infoBox",u="<div class='fxcontrol-infoBox-container fxs-bg-muted-10'><div class='fxcontrol-infoBox-image-container'><div class='fxcontrol-infoBox-image' data-bind='image: data.image()'><\/div><\/div><div class='fxcontrol-infoBox-text' data-bind='text: data.text()'><\/div><!-- ko if: data.clickableLink --><div class='fxcontrol-infoBox-link' data-bind='image: MsPortalFx.Base.Images.Hyperlink()'><\/div><!-- /ko --><\/div>",
f=function(n){function i(t,i,r){n.call(this,t,i,r);this._initializeWidgets(i)}return __extends(i,n),
i.prototype.dispose=function(){this._cleanElement(t);n.prototype.dispose.call(this)},Object.defineProperty(
i.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype.
_initializeWidgets=function(n){this.element.addClass(t).html(u);n.controlType===78?new r.Widget(this.
element.find(".fxcontrol-infoBox-container"),n.selectable):n.controlType===87&&new r.Widget(this.element.
find(".fxcontrol-infoBox-container"),n.clickableLink());this._bindDescendants()},i}(i.Widget);n.Widget=
f}(u||(u={})),u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Controls/Controls.HotSpot",
["require","exports","../Widgets/Widgets.WidgetBase"],function(n,t,i){var r=MsPortalFx.Base.EventTypes,
f=MsPortalFx.Util.KeyCode,u;return function(n){"use strict";var o=window,u="fxcontrol-hotspot",f="fxcontrol-hotspot-selected",
t="fxcontrol-hotspot-clickable",e=function(n){function e(t,r){var f,e,o;n.call(this,t,r,i.ViewModel);
f=r.selectable||r;e=r.uri;this.element.addClass(u).attr("tabindex",0);e?(o=r,this._initializeClickableLinkEvents(
o)):f&&this._initialiazeSelectableEvents(f)}return __extends(e,n),e.prototype.dispose=function(){this.
_hotSpotClick&&(this.element.off(r.click,this._hotSpotClick),this._hotSpotClick=null);this._hotSpotKeyPress&&
(this.element.off(r.keypress,this._hotSpotKeyPress),this._hotSpotKeyPress=null);this.element.removeAttr(
"tabindex").removeClass(u).removeClass(f).removeClass(t);n.prototype.dispose.call(this)},e.prototype.
_initializeClickableLinkEvents=function(n){this.element.addClass(t);this.element.on(r.click,this._hotSpotClick=
function(t){window.open(n.uri(),n.target());t.stopPropagation()}).on(r.keypress,this._hotSpotKeyPress=
function(t){(t.keyCode===13||t.keyCode===32)&&window.open(n.uri(),n.target());t.stopPropagation()})}
,e.prototype._initialiazeSelectableEvents=function(n){var i=this;this.element.on(r.click,this._hotSpotClick=
function(t){t.ctrlKey||t.shiftKey?$(t.target).trigger(r.fxopeninnewtab,{selectable:n}):n.onClick();t.
stopPropagation()}).on(r.keypress,this._hotSpotKeyPress=function(t){(t.keyCode===13||t.keyCode===32)&&
n.onClick();t.stopPropagation()});ko.computed(this.lifetimeManager,function(){i.element.toggleClass(
t,n.isClickable())});ko.computed(this.lifetimeManager,function(){i.element.toggleClass(f,n.isSelected(
))})},e}(i.Widget);n.Widget=e}(u||(u={})),u})