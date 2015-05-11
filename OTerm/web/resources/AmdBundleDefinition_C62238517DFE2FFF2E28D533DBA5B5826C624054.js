var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Parts/Parts.ResourceSummary",
["require","exports","MsPortalImpl/Resources/ImplScriptResources","./Parts.Properties","../Base/Telemetry",
"../Generated/SvgDefinitions"],function(n,t,i,r,u,f){var o=MsPortalFx.Base.Diagnostics.Telemetry.trace,
e;return function(n){"use strict";function p(){return"<!-- ko if: !noResourceGroup() --><li class='msportalfx-property'><div class='msportalfx-property-name'>"+
e.resourceGroupLabel+"<\/div><div class='msportalfx-property-value'><span class='fxs-text-primary "+
y+"' data-bind='pcHotSpot: resourceGroupSelectable, text: resourceGroupName'><\/span><\/div><\/li><!-- /ko -->"}
var e=i.ResourceSummary,t="fxs-part-resourcesummary",w=t+"-collapsed",h=t+"-toggle",b=t+"-shortcuts",
s=t+"-shortcut",k=t+"-top",d=t+"-bottom",g=t+"-toggle-icon",nt=t+"-title",c=t+"-settings-icon",l=t+"-quick-start",
a=t+"-access",v=t+"-tags",tt=t+"-keys",y=t+"-resource-group",it="<div class='"+t+"' data-bind='css: { \""+
w+"\": collapsed }'><div class='"+k+"'><span tabindex='0' class='"+h+"'><span class='"+nt+"'>"+e.title+
"<\/span><span class='azc-fill-text "+g+"' data-bind='image: collapsed() ? MsPortalFx.Base.Images.CaretDown() : MsPortalFx.Base.Images.CaretUp()'><\/span><\/span><span class='"+
b+"'><!-- ko if: hasKeys --><span title='"+e.keys+"' class='"+s+" "+tt+"' data-bind='pcHotSpot: keysSelectable, image: keysIcon'><\/span><!-- /ko --><!-- ko if: hasQuickStart --><span title='"+
e.quickStart+"' class='"+s+" "+l+"' data-bind='pcHotSpot: quickStartSelectable, image: quickStartIcon'><\/span><!-- /ko --><!-- ko if: !noRbac() --><span title='"+
e.access+"' class='"+s+" "+a+"' data-bind='pcHotSpot: accessSelectable, image: accessIcon'><\/span><!-- /ko --><!-- ko if: !noTags() --><span title='"+
e.tags+"' class='"+s+" "+v+"' data-bind='pcHotSpot: tagsSelectable, image: tagsIcon, visible: tagsVisible'><\/span><!-- /ko --><\/span><\/div>"+
r.buildTemplate(p())+"<div class='"+d+"'><span class='fxs-text-primary' data-bind='pcHotSpot: settingsSelectable'><span>"+
e.allSettings+"<\/span><span class='azc-fill-primary "+c+"' data-bind='image: MsPortalFx.Base.Images.ArrowRight()'><\/span><\/span><\/div><\/div>",
rt=[h,l,a,v,y,c],ut=function(n){function t(t,i,r){n.call(this,t,i,r,it);var u=i.content,f=$(t);f.findByClassName(
h).click(function(){u.collapsed(!u.collapsed())});this._initializeTelemetry(f)}return __extends(t,n),
t.prototype._getContentForBinding=function(t,i){return $.extend({},n.prototype._getContentForBinding.
call(this,t,i),{tagsIcon:f.Content.SvgLibrary.Shell.tag,accessIcon:f.Content.SvgLibrary.Shell.access,
quickStartIcon:f.Content.SvgLibrary.Shell.quickStart,keysIcon:f.Content.SvgLibrary.Shell.key})},t.prototype.
_initializeTelemetry=function(n){rt.forEach(function(t){n.findByClassName(t).each(function(n,i){i.addEventListener(
EventTypes.click,function(){o({source:u.Source.ResourceSummary,action:u.Action.ResourceSummaryAction,
name:t})},!0)})});var t=function(n){var t=ko.dataFor(n.target),i;t&&typeof t.type=="number"&&(i=MsPortalFx.
ViewModels.Parts.Properties.PropertyType[t.type],typeof i=="string"&&o({source:u.Source.ResourceSummary,
action:u.Action.ResourceSummaryAction,name:i,data:{label:t.label}}))};n[0].addEventListener(EventTypes.
click,t,!0);this._disposeContainerListener=function(){n[0].removeEventListener(EventTypes.click,t,!0)}
},t.prototype.dispose=function(){this._disposeContainerListener();n.prototype.dispose.call(this)},t}
(r.PropertiesPart);n.ResourceSummaryPart=ut}(e||(e={})),e});__extends=this.__extends||function(n,t){
function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("MsPortalImpl/Parts/Parts.Properties",["require","exports","./Parts"],function(
n,t,i){var r;return function(n){"use strict";function t(n,t){var u=MsPortalFx.ViewModels.Parts.Properties.
PropertyType[n],i="";return MsPortalFx.Base.Utilities.isNullOrUndefined(u)||(i="{0}-{1}".format(r,u.
toLowerCase())),"<!-- ko if: type === "+n+" --><div class='msportalfx-property-name msportalfx-tooltip-overflow "+
i+"' data-bind='text: label'><\/div><div class='msportalfx-property-value "+i+"'>"+t+"<\/div><!-- /ko -->"}
function o(){return t(2,'<div data-bind="pcCopyableLabel: value"><\/div>')}function s(){return t(1,'<a data-bind="text: displayValue, attr: { href: value }" target="_blank"><\/a>')}
function h(){return t(0,"<div class='msportalfx-tooltip-overflow' data-bind=\"text: value\"><\/div>")}
function c(){return t(3,'<!-- ko if: icon --><div style="float: left;" data-bind=\'image: icon\'><\/div><!-- /ko --><a href="#" data-bind="text: displayValue, click: callbackWrapper"><\/a>')}
function l(){return t(4,'<!-- ko if: $root.findProperty($data) --><a href="#" data-bind=\'text: displayValue, click: $root.onPropertyClick($data), css: { "msportalfx-property-highlight": $root.findProperty($data).isActivated }\'><\/a><!-- /ko -->')}
function a(){return t(5,'<ul data-bind=\'foreach: links\'><li><a data-bind="text: text, attr: { href: uri }" target="_blank"><\/a><\/li><\/ul>')}
function v(){return t(6,"<div data-bind='image: icon'><\/div>")}function u(n){return"<ul class='"+r+
"'>"+n+"<!-- ko foreach: properties --><li class='msportalfx-property' data-bind='visible: visible, css: { \"fxs-part-properties-property-wrapped\": wrappable }'>"+
o()+c()+s()+h()+l()+a()+v()+"<\/li><!-- /ko --><\/ul>"}var y=MsPortalFx.ViewModels.Parts.Properties.
PropertyType,r="fxs-part-properties",f,e;n.buildTemplate=u;f=u("");e=function(n){function t(t,i,r,u)
{n.call(this,t,i,r,u||f)}return __extends(t,n),t.prototype._getContentForBinding=function(n,t){var i=
t.content.selection,r=function(n){return i.selectableItems().first(function(t){return t.data===n})},
u=function(n){return function(t,u){if(u.ctrlKey||u.shiftKey)$(u.target).trigger(EventTypes.fxopeninnewtab,
{selectableSet:i,item:t});else{var f;f=r(n);f?i.activatedItems.splice(0,i.activatedItems().length,n.
bladeSelection()):i.activatedItems.removeAll()}}};return $.extend({},t.content,{findProperty:r,onPropertyClick:
u})},t}(i.Part);n.PropertiesPart=e}(r||(r={})),r})