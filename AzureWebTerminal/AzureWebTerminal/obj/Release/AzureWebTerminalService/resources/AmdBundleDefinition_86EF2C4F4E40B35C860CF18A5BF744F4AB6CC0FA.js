var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Visualization/Metrics",
["require","exports","../Base/Loadable","Viva.Controls/Controls/Visualization/Metrics"],function(n,t,
i,r){var u;return function(n){"use strict";var u=window,f=jQuery,t=function(n){function t(t,i,r){n.call(
this,t,i,r);this._initializeWidgets()}return __extends(t,n),Object.defineProperty(t.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),t.prototype._initializeWidgets=
function(){this._nestedViewModel=new r.ViewModel;this._nestedViewModel.populateFromObject(this.options);
this._widgets.push(new r.Widget(this.element,this._nestedViewModel))},t}(i.Widget);n.Widget=t}(u||(u=
{})),u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Visualization/Metrics",
["require","exports","../../Util/Hatching","../SingleSetting","../../Util/Positioning","../Base/Base"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";var y=window,e=jQuery,o="azc-metrics",h=
"azc-metrics-horizontal",c="azc-metrics-vertical",l="<!-- ko if: data.visible --><ul data-bind='foreach: data.items, css: $root.func._assignClasses($root.data.orientation())'><li data-bind='css:{\"azc-metrics-nonvisible\": hide}' ><!-- ko if: showBarColor --><div data-bind='attr: { class: barCssClass() + \" azc-metrics-barColor\" }'><svg xmlns='http://www.w3.org/2000/svg'><rect class='azc-metrics-bar-rectangle' width='5' data-bind='attr: { height: $root.func._metricSize }'><\/rect><\/svg><\/div><!-- /ko --><div class='azc-metrics-singleSetting' data-bind='azcSingleSetting: $data'><\/div><\/li><\/ul><svg xmlns='http://www.w3.org/2000/svg' class='azc-metrics-patterns' width='0' height='0'><\/svg><!-- /ko -->",
a=function(n){function t(){n.call(this);this.barCssClass=ko.observable("");this.hatchingPattern=ko.observable(
0);this.showBarColor=ko.observable(!0);this.hide=ko.observable(!1);this.captionAlignment(1)}return __extends(
t,n),t}(r.ViewModel),t,v,u,s;n.SingleMetric=a,function(n){n[n.Small=0]="Small";n[n.Medium=1]="Medium";
n[n.Large=2]="Large";n[n.XLarge=3]="XLarge"}(n.Size||(n.Size={}));t=n.Size,function(n){n[n.Horizontal=
0]="Horizontal";n[n.Vertical=1]="Vertical"}(n.Orientation||(n.Orientation={}));v=n.Orientation;u=function(
n){function t(){n.apply(this,arguments);this.items=ko.observableArray();this.orientation=ko.observable(
0);this.size=ko.observable(2);this.visible=ko.observable(!0)}return __extends(t,n),t}(f.ViewModel);n.
ViewModel=u;s=function(n){function r(t,i,r){var f=this;n.call(this,t,i,e.extend({viewModelType:u},r));
this._hatchingPatternIds=[];this.element.addClass(o).html(l);this._initializeComputeds();this._bindDescendants(
);this._addDisposablesToCleanUp(ko.computed(function(){f._render()}));this._addDisposablesToCleanUp(
ko.computed(function(){f.element.toggleClass("azc-metrics-nonvisible",!f.options.visible())}))}return __extends(
r,n),r.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(n.prototype.
dispose.call(this),this._removeSizeClasses(),this._cleanElement(o))},Object.defineProperty(r.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),r.prototype._initializeComputeds=
function(){var n=this;this._addDisposablesToCleanUp(ko.computed(function(){n._removeSizeClasses();n.
element.addClass("azc-metrics-size"+t[n.options.size()])}));this._addDisposablesToCleanUp(this._metricSize=
ko.computed(function(){switch(n.options.size()){case 0:return 32;case 1:return 35;case 2:return 45;case
3:return 45;default:return 45}}))},r.prototype._cleanHatchingPatterns=function(){var n=this,t=this.element.
find(".azc-metrics-patterns")[0];this._hatchingPatternIds.forEach(function(i,r){d3.select(t).select(
"#"+n._hatchingPatternIds[r]).remove()});this._hatchingPatternIds=[]},r.prototype._removeSizeClasses=
function(){var n=this;Object.keys(t).forEach(function(t){n.element.removeClass("azc-metrics-size"+t)}
)},r.prototype._assignClasses=function(n){var t;switch(n){case 1:t=c;break;case 0:default:t=h}return t}
,r.prototype._render=function(){var n=this;this._cleanHatchingPatterns();this.options.items().forEach(
function(t,r){var u=t.hatchingPattern?t.hatchingPattern():null,s=n.element.find(".azc-metrics-patterns")[
0],f=n.element.find("li").eq(r).find(".azc-metrics-bar-rectangle")[0],o;u&&t.showBarColor.peek()?(o=
i.renderHatching(u,t.barCssClass(),"",d3.select(f),d3.select(s)),n._hatchingPatternIds.push(o)):e(f).
removeAttr("style")})},r}(f.Widget);n.Widget=s}(e||(e={})),e})