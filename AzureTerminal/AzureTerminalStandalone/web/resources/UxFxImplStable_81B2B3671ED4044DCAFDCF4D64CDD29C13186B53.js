/*! jQuery UI - v1.10.3 - 2013-11-11
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.sortable.js, jquery.ui.effect.js (easing only)
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(n,t){function i(t,i){var u,f,e,o=t.nodeName.toLowerCase();return"area"===o?(u=t.parentNode,
f=u.name,!t.href||!f||u.nodeName.toLowerCase()!=="map")?!1:(e=n("img[usemap=#"+f+"]")[0],!!e&&r(e)):
(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&r(t)}function r(t){
return n.expr.filters.visible(t)&&!n(t).parents().addBack().filter(function(){return n.css(this,"visibility")===
"hidden"}).length}var u=0,f=/^ui-id-\d+$/;n.ui=n.ui||{};n.extend(n.ui,{version:"1.10.3",keyCode:{BACKSPACE:
8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:
110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:
33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});n.fn.extend({focus:function(t){return function(i,r){return typeof
i=="number"?this.each(function(){var t=this;setTimeout(function(){n(t).focus();r&&r.call(t)},i)}):t.
apply(this,arguments)}}(n.fn.focus),scrollParent:function(){var t;return t=n.ui.ie&&/(static|relative)/.
test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.
test(n.css(this,"position"))&&/(auto|scroll)/.test(n.css(this,"overflow")+n.css(this,"overflow-y")+n.
css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(n.css(this,
"overflow")+n.css(this,"overflow-y")+n.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||
!t.length?n(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(
var r=n(this[0]),u,f;r.length&&r[0]!==document;){if(u=r.css("position"),(u==="absolute"||u==="relative"||
u==="fixed")&&(f=parseInt(r.css("zIndex"),10),!isNaN(f)&&f!==0))return f;r=r.parent()}return 0},uniqueId:
function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++u)})},removeUniqueId:function()
{return this.each(function(){f.test(this.id)&&n(this).removeAttr("id")})}});n.extend(n.expr[":"],{data:
n.expr.createPseudo?n.expr.createPseudo(function(t){return function(i){return!!n.data(i,t)}}):function(
t,i,r){return!!n.data(t,r[3])},focusable:function(t){return i(t,!isNaN(n.attr(t,"tabindex")))},tabbable:
function(t){var r=n.attr(t,"tabindex"),u=isNaN(r);return(u||r>=0)&&i(t,!u)}});n("<a>").outerWidth(1).
jquery||n.each(["Width","Height"],function(i,r){function e(t,i,r,u){return n.each(o,function(){i-=parseFloat(
n.css(t,"padding"+this))||0;r&&(i-=parseFloat(n.css(t,"border"+this+"Width"))||0);u&&(i-=parseFloat(
n.css(t,"margin"+this))||0)}),i}var o=r==="Width"?["Left","Right"]:["Top","Bottom"],u=r.toLowerCase(
),f={innerWidth:n.fn.innerWidth,innerHeight:n.fn.innerHeight,outerWidth:n.fn.outerWidth,outerHeight:
n.fn.outerHeight};n.fn["inner"+r]=function(i){return i===t?f["inner"+r].call(this):this.each(function(
){n(this).css(u,e(this,i)+"px")})};n.fn["outer"+r]=function(t,i){return typeof t!="number"?f["outer"+
r].call(this,t):this.each(function(){n(this).css(u,e(this,t,!0,i)+"px")})}});n.fn.addBack||(n.fn.addBack=
function(n){return this.add(n==null?this.prevObject:this.prevObject.filter(n))});n("<a>").data("a-b",
"a").removeData("a-b").data("a-b")&&(n.fn.removeData=function(t){return function(i){return arguments.
length?t.call(this,n.camelCase(i)):t.call(this)}}(n.fn.removeData));n.ui.ie=!!/msie [\w.]+/.exec(navigator.
userAgent.toLowerCase());n.support.selectstart="onselectstart"in document.createElement("div");n.fn.
extend({disableSelection:function(){return this.bind((n.support.selectstart?"selectstart":"mousedown")
+".ui-disableSelection",function(n){n.preventDefault()})},enableSelection:function(){return this.unbind(
".ui-disableSelection")}});n.extend(n.ui,{plugin:{add:function(t,i,r){var u,f=n.ui[t].prototype;for(
u in r)f.plugins[u]=f.plugins[u]||[],f.plugins[u].push([i,r[u]])},call:function(n,t,i){var r,u=n.plugins[
t];if(u&&n.element[0].parentNode&&n.element[0].parentNode.nodeType!==11)for(r=0;r<u.length;r++)n.options[
u[r][0]]&&u[r][1].apply(n.element,i)}},hasScroll:function(t,i){if(n(t).css("overflow")==="hidden")return!1;
var r=i&&i==="left"?"scrollLeft":"scrollTop",u=!1;return t[r]>0?!0:(t[r]=1,u=t[r]>0,t[r]=0,u)}})})(jQuery),
function(n,t){var r=0,i=Array.prototype.slice,u=n.cleanData;n.cleanData=function(t){for(var i=0,r;(r=
t[i])!=null;i++)try{n(r).triggerHandler("remove")}catch(f){}u(t)};n.widget=function(t,i,r){var s,f,u,
o,h={},e=t.split(".")[0];t=t.split(".")[1];s=e+"-"+t;r||(r=i,i=n.Widget);n.expr[":"][s.toLowerCase()]=
function(t){return!!n.data(t,s)};n[e]=n[e]||{};f=n[e][t];u=n[e][t]=function(n,t){if(!this._createWidget)
return new u(n,t);arguments.length&&this._createWidget(n,t)};n.extend(u,f,{version:r.version,_proto:
n.extend({},r),_childConstructors:[]});o=new i;o.options=n.widget.extend({},o.options);n.each(r,function(
t,r){if(!n.isFunction(r)){h[t]=r;return}h[t]=function(){var n=function(){return i.prototype[t].apply(
this,arguments)},u=function(n){return i.prototype[t].apply(this,n)};return function(){var i=this._super,
f=this._superApply,t;return this._super=n,this._superApply=u,t=r.apply(this,arguments),this._super=i,
this._superApply=f,t}}()});u.prototype=n.widget.extend(o,{widgetEventPrefix:f?o.widgetEventPrefix:t},
h,{constructor:u,namespace:e,widgetName:t,widgetFullName:s});f?(n.each(f._childConstructors,function(
t,i){var r=i.prototype;n.widget(r.namespace+"."+r.widgetName,u,i._proto)}),delete f._childConstructors):
i._childConstructors.push(u);n.widget.bridge(t,u)};n.widget.extend=function(r){for(var o=i.call(arguments,
1),e=0,s=o.length,u,f;e<s;e++)for(u in o[e])f=o[e][u],o[e].hasOwnProperty(u)&&f!==t&&(r[u]=n.isPlainObject(
f)?n.isPlainObject(r[u])?n.widget.extend({},r[u],f):n.widget.extend({},f):f);return r};n.widget.bridge=
function(r,u){var f=u.prototype.widgetFullName||r;n.fn[r]=function(e){var h=typeof e=="string",o=i.call(
arguments,1),s=this;return e=!h&&o.length?n.widget.extend.apply(null,[e].concat(o)):e,h?this.each(function(
){var i,u=n.data(this,f);return u?!n.isFunction(u[e])||e.charAt(0)==="_"?n.error("no such method '"+
e+"' for "+r+" widget instance"):(i=u[e].apply(u,o),i!==u&&i!==t?(s=i&&i.jquery?s.pushStack(i.get()):
i,!1):void 0):n.error("cannot call methods on "+r+" prior to initialization; attempted to call method '"+
e+"'")}):this.each(function(){var t=n.data(this,f);t?t.option(e||{})._init():n.data(this,f,new u(e,this))}
),s}};n.Widget=function(){};n.Widget._childConstructors=[];n.Widget.prototype={widgetName:"widget",widgetEventPrefix:
"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=n(i||this.
defaultElement||this)[0];this.element=n(i);this.uuid=r++;this.eventNamespace="."+this.widgetName+this.
uuid;this.options=n.widget.extend({},this.options,this._getCreateOptions(),t);this.bindings=n();this.
hoverable=n();this.focusable=n();i!==this&&(n.data(i,this.widgetFullName,this),this._on(!0,this.element,
{remove:function(n){n.target===i&&this.destroy()}}),this.document=n(i.style?i.ownerDocument:i.document||
i),this.window=n(this.document[0].defaultView||this.document[0].parentWindow));this._create();this._trigger(
"create",null,this._getCreateEventData());this._init()},_getCreateOptions:n.noop,_getCreateEventData:
n.noop,_create:n.noop,_init:n.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).
removeData(this.widgetName).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+
"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass(
"ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:n.noop,widget:function(){return this.
element},option:function(i,r){var o=i,u,f,e;if(arguments.length===0)return n.widget.extend({},this.options);
if(typeof i=="string")if(o={},u=i.split("."),i=u.shift(),u.length){for(f=o[i]=n.widget.extend({},this.
options[i]),e=0;e<u.length-1;e++)f[u[e]]=f[u[e]]||{},f=f[u[e]];if(i=u.pop(),r===t)return f[i]===t?null:
f[i];f[i]=r}else{if(r===t)return this.options[i]===t?null:this.options[i];o[i]=r}return this._setOptions(
o),this},_setOptions:function(n){for(var t in n)this._setOption(t,n[t]);return this},_setOption:function(
n,t){return this.options[n]=t,n==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",
!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass(
"ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function()
{return this._setOption("disabled",!0)},_on:function(t,i,r){var f,u=this;typeof t!="boolean"&&(r=i,i=
t,t=!1);r?(i=f=n(i),this.bindings=this.bindings.add(i)):(r=i,i=this.element,f=this.widget());n.each(
r,function(r,e){function o(){if(t||u.options.disabled!==!0&&!n(this).hasClass("ui-state-disabled"))return(typeof
e=="string"?u[e]:e).apply(u,arguments)}typeof e!="string"&&(o.guid=e.guid=e.guid||o.guid||n.guid++);
var s=r.match(/^(\w+)\s*(.*)$/),h=s[1]+u.eventNamespace,c=s[2];c?f.delegate(c,h,o):i.bind(h,o)})},_off:
function(n,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;n.unbind(t).undelegate(
t)},_delay:function(n,t){function r(){return(typeof n=="string"?i[n]:n).apply(i,arguments)}var i=this;
return setTimeout(r,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t);this._on(t,{mouseenter:
function(t){n(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){n(t.currentTarget).
removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t);this._on(
t,{focusin:function(t){n(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){n(t.currentTarget).
removeClass("ui-state-focus")}})},_trigger:function(t,i,r){var u,f,e=this.options[t];if(r=r||{},i=n.
Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.
element[0],f=i.originalEvent,f)for(u in f)u in i||(i[u]=f[u]);return this.element.trigger(i,r),!(n.isFunction(
e)&&e.apply(this.element[0],[i].concat(r))===!1||i.isDefaultPrevented())}};n.each({show:"fadeIn",hide:
"fadeOut"},function(t,i){n.Widget.prototype["_"+t]=function(r,u,f){typeof u=="string"&&(u={effect:u});
var o,e=u?u===!0||typeof u=="number"?i:u.effect||i:t;u=u||{};typeof u=="number"&&(u={duration:u});o=
!n.isEmptyObject(u);u.complete=f;u.delay&&r.delay(u.delay);o&&n.effects&&n.effects.effect[e]?r[t](u):
e!==t&&r[e]?r[e](u.duration,u.easing,f):r.queue(function(i){n(this)[t]();f&&f.call(r[0]);i()})}})}(jQuery),
function(n){var t=!1;n(document).mouseup(function(){t=!1});n.widget("ui.mouse",{version:"1.10.3",options:
{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.
element.bind("mousedown."+this.widgetName,function(n){return t._mouseDown(n)}).bind("click."+this.widgetName,
function(i){if(!0===n.data(i.target,t.widgetName+".preventClickEvent"))return n.removeData(i.target,
t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1});this.started=!1},_mouseDestroy:
function(){this.element.unbind("."+this.widgetName);this._mouseMoveDelegate&&n(document).unbind("mousemove."+
this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:
function(i){if(!t){this._mouseStarted&&this._mouseUp(i);this._mouseDownEvent=i;var r=this,u=i.which===
1,f=typeof this.options.cancel=="string"&&i.target.nodeName?n(i.target).closest(this.options.cancel).
length:!1;return!u||f||!this._mouseCapture(i)?!0:(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||
(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(
i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted))?(i.preventDefault(
),!0):(!0===n.data(i.target,this.widgetName+".preventClickEvent")&&n.removeData(i.target,this.widgetName+
".preventClickEvent"),this._mouseMoveDelegate=function(n){return r._mouseMove(n)},this._mouseUpDelegate=
function(n){return r._mouseUp(n)},n(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).
bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)}},_mouseMove:function(
t){return n.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this.
_mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(
t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(
t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return n(document).unbind("mousemove."+
this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this.
_mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&n.data(t.target,this.widgetName+
".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(n){return Math.max(Math.
abs(this._mouseDownEvent.pageX-n.pageX),Math.abs(this._mouseDownEvent.pageY-n.pageY))>=this.options.
distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(
){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(n){n.widget("ui.draggable",
n.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:
!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",
iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:
20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:
null},_create:function(){this.options.helper!=="original"||/^(?:r|a|f)/.test(this.element.css("position"))||
(this.element[0].style.position="relative");this.options.addClasses&&this.element.addClass("ui-draggable");
this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},_destroy:function(
){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy(
)},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||n(t.target).closest(
".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),!this.handle)?!1:(n(i.iframeFix===
!0?"iframe":i.iframeFix).each(function(){n("<div class='ui-draggable-iframeFix' style='background: #fff;'><\/div>").
css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:
1e3}).css(n(this).offset()).appendTo("body")}),!0)},_mouseStart:function(t){var i=this.options;return(
this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(
),n.ui.ddmanager&&(n.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css(
"position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(
),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.
offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},
this.offset.scroll=!1,n.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.
top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.
position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&
this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1)?(this.
_clear(),!1):(this._cacheHelperProportions(),n.ui.ddmanager&&!i.dropBehaviour&&n.ui.ddmanager.prepareOffsets(
this,t),this._mouseDrag(t,!0),n.ui.ddmanager&&n.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(
t,i){if(this.offsetParentCssPosition==="fixed"&&(this.offset.parent=this._getParentOffset()),this.position=
this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var r=this._uiHash(
);if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}return this.
options.axis&&this.options.axis==="y"||(this.helper[0].style.left=this.position.left+"px"),this.options.
axis&&this.options.axis==="x"||(this.helper[0].style.top=this.position.top+"px"),n.ui.ddmanager&&n.ui.
ddmanager.drag(this,t),!1},_mouseStop:function(t){var r=this,i=!1;return(n.ui.ddmanager&&!this.options.
dropBehaviour&&(i=n.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1),this.options.
helper==="original"&&!n.contains(this.element[0].ownerDocument,this.element[0]))?!1:(this.options.revert===
"invalid"&&!i||this.options.revert==="valid"&&i||this.options.revert===!0||n.isFunction(this.options.
revert)&&this.options.revert.call(this.element,i)?n(this.helper).animate(this.originalPosition,parseInt(
this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()}):this._trigger("stop",
t)!==!1&&this._clear(),!1)},_mouseUp:function(t){return n("div.ui-draggable-iframeFix").each(function(
){this.parentNode.removeChild(this)}),n.ui.ddmanager&&n.ui.ddmanager.dragStop(this,t),n.ui.mouse.prototype.
_mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(
{}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!n(t.target).closest(this.
element.find(this.options.handle)).length:!0},_createHelper:function(t){var r=this.options,i=n.isFunction(
r.helper)?n(r.helper.apply(this.element[0],[t])):r.helper==="clone"?this.element.clone().removeAttr(
"id"):this.element;return i.parents("body").length||i.appendTo(r.appendTo==="parent"?this.element[0].
parentNode:r.appendTo),i[0]===this.element[0]||/(fixed|absolute)/.test(i.css("position"))||i.css("position",
"absolute"),i},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" "));n.isArray(t)&&
(t={left:+t[0],top:+t[1]||0});"left"in t&&(this.offset.click.left=t.left+this.margins.left);"right"in
t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left);"top"in t&&(this.
offset.click.top=t.top+this.margins.top);"bottom"in t&&(this.offset.click.top=this.helperProportions.
height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return this.
cssPosition==="absolute"&&this.scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[
0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[
0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&
n.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:
t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(
this.cssPosition==="relative"){var n=this.element.position();return{top:n.top-(parseInt(this.helper.
css("top"),10)||0)+this.scrollParent.scrollTop(),left:n.left-(parseInt(this.helper.css("left"),10)||
0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:
parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:
parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||
0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:
this.helper.outerHeight()}},_setContainment:function(){var u,t,i,r=this.options;if(!r.containment){this.
containment=null;return}if(r.containment==="window"){this.containment=[n(window).scrollLeft()-this.offset.
relative.left-this.offset.parent.left,n(window).scrollTop()-this.offset.relative.top-this.offset.parent.
top,n(window).scrollLeft()+n(window).width()-this.helperProportions.width-this.margins.left,n(window).
scrollTop()+(n(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-
this.margins.top];return}if(r.containment==="document"){this.containment=[0,0,n(document).width()-this.
helperProportions.width-this.margins.left,(n(document).height()||document.body.parentNode.scrollHeight)
-this.helperProportions.height-this.margins.top];return}if(r.containment.constructor===Array){this.containment=
r.containment;return}(r.containment==="parent"&&(r.containment=this.helper[0].parentNode),t=n(r.containment),
i=t[0],i)&&(u=t.css("overflow")!=="hidden",this.containment=[(parseInt(t.css("borderLeftWidth"),10)||
0)+(parseInt(t.css("paddingLeft"),10)||0),(parseInt(t.css("borderTopWidth"),10)||0)+(parseInt(t.css(
"paddingTop"),10)||0),(u?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(t.css("borderRightWidth"),
10)||0)-(parseInt(t.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.
margins.right,(u?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(t.css("borderBottomWidth"),
10)||0)-(parseInt(t.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.
margins.bottom],this.relative_container=t)},_convertPositionTo:function(t,i){i||(i=this.position);var
r=t==="absolute"?1:-1,u=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&n.contains(
this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;return this.offset.scroll||
(this.offset.scroll={top:u.scrollTop(),left:u.scrollLeft()}),{top:i.top+this.offset.relative.top*r+this.
offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)
*r,left:i.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.
scrollParent.scrollLeft():this.offset.scroll.left)*r}},_generatePosition:function(t){var i,e,u,f,r=this.
options,h=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&n.contains(this.scrollParent[
0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,o=t.pageX,s=t.pageY;return this.offset.
scroll||(this.offset.scroll={top:h.scrollTop(),left:h.scrollLeft()}),this.originalPosition&&(this.containment&&
(this.relative_container?(e=this.relative_container.offset(),i=[this.containment[0]+e.left,this.containment[
1]+e.top,this.containment[2]+e.left,this.containment[3]+e.top]):i=this.containment,t.pageX-this.offset.
click.left<i[0]&&(o=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(s=i[1]+this.offset.
click.top),t.pageX-this.offset.click.left>i[2]&&(o=i[2]+this.offset.click.left),t.pageY-this.offset.
click.top>i[3]&&(s=i[3]+this.offset.click.top)),r.grid&&(u=r.grid[1]?this.originalPageY+Math.round((s-
this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,s=i?u-this.offset.click.top>=i[1]||u-this.
offset.click.top>i[3]?u:u-this.offset.click.top>=i[1]?u-r.grid[1]:u+r.grid[1]:u,f=r.grid[0]?this.originalPageX+
Math.round((o-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,o=i?f-this.offset.click.left>=
i[0]||f-this.offset.click.left>i[2]?f:f-this.offset.click.left>=i[0]?f-r.grid[0]:f+r.grid[0]:f)),{top:
s-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?
-this.scrollParent.scrollTop():this.offset.scroll.top),left:o-this.offset.click.left-this.offset.relative.
left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.
scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]===this.
element[0]||this.cancelHelperRemoval||this.helper.remove();this.helper=null;this.cancelHelperRemoval=
!1},_trigger:function(t,i,r){return r=r||this._uiHash(),n.ui.plugin.call(this,t,[i,r]),t==="drag"&&(
this.positionAbs=this._convertPositionTo("absolute")),n.Widget.prototype._trigger.call(this,t,i,r)},
plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.
originalPosition,offset:this.positionAbs}}});n.ui.plugin.add("draggable","connectToSortable",{start:
function(t,i){var r=n(this).data("ui-draggable"),u=r.options,f=n.extend({},i,{item:r.element});r.sortables=
[];n(u.connectToSortable).each(function(){var i=n.data(this,"ui-sortable");i&&!i.options.disabled&&(
r.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",
t,f))})},stop:function(t,i){var r=n(this).data("ui-draggable"),u=n.extend({},i,{item:r.element});n.each(
r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.
cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance.
_mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper==="original"&&
this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.
instance._trigger("deactivate",t,u))})},drag:function(t,i){var r=n(this).data("ui-draggable"),u=this;
n.each(r.sortables,function(){var f=!1,e=this;this.instance.positionAbs=r.positionAbs;this.instance.
helperProportions=r.helperProportions;this.instance.offset.click=r.offset.click;this.instance._intersectsWith(
this.instance.containerCache)&&(f=!0,n.each(r.sortables,function(){return this.instance.positionAbs=
r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.
click,this!==e&&this.instance._intersectsWith(this.instance.containerCache)&&n.contains(e.instance.element[
0],this.instance.element[0])&&(f=!1),f}));f?(this.instance.isOver||(this.instance.isOver=1,this.instance.
currentItem=n(u).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),
this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.
helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(
t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.
click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.
instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",
t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.
currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.
cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance.
_uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options.
_helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(
),r._trigger("fromSortable",t),r.dropped=!1)})}});n.ui.plugin.add("draggable","cursor",{start:function(
){var t=n("body"),i=n(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor"));
t.css("cursor",i.cursor)},stop:function(){var t=n(this).data("ui-draggable").options;t._cursor&&n("body").
css("cursor",t._cursor)}});n.ui.plugin.add("draggable","opacity",{start:function(t,i){var r=n(i.helper),
u=n(this).data("ui-draggable").options;r.css("opacity")&&(u._opacity=r.css("opacity"));r.css("opacity",
u.opacity)},stop:function(t,i){var r=n(this).data("ui-draggable").options;r._opacity&&n(i.helper).css(
"opacity",r._opacity)}});n.ui.plugin.add("draggable","scroll",{start:function(){var t=n(this).data("ui-draggable");
t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"&&(t.overflowOffset=t.scrollParent.offset(
))},drag:function(t){var r=n(this).data("ui-draggable"),i=r.options,u=!1;r.scrollParent[0]!==document&&
r.scrollParent[0].tagName!=="HTML"?(i.axis&&i.axis==="x"||(r.overflowOffset.top+r.scrollParent[0].offsetHeight-
t.pageY<i.scrollSensitivity?r.scrollParent[0].scrollTop=u=r.scrollParent[0].scrollTop+i.scrollSpeed:
t.pageY-r.overflowOffset.top<i.scrollSensitivity&&(r.scrollParent[0].scrollTop=u=r.scrollParent[0].scrollTop-
i.scrollSpeed)),i.axis&&i.axis==="y"||(r.overflowOffset.left+r.scrollParent[0].offsetWidth-t.pageX<i.
scrollSensitivity?r.scrollParent[0].scrollLeft=u=r.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-
r.overflowOffset.left<i.scrollSensitivity&&(r.scrollParent[0].scrollLeft=u=r.scrollParent[0].scrollLeft-
i.scrollSpeed))):(i.axis&&i.axis==="x"||(t.pageY-n(document).scrollTop()<i.scrollSensitivity?u=n(document).
scrollTop(n(document).scrollTop()-i.scrollSpeed):n(window).height()-(t.pageY-n(document).scrollTop())<
i.scrollSensitivity&&(u=n(document).scrollTop(n(document).scrollTop()+i.scrollSpeed))),i.axis&&i.axis===
"y"||(t.pageX-n(document).scrollLeft()<i.scrollSensitivity?u=n(document).scrollLeft(n(document).scrollLeft(
)-i.scrollSpeed):n(window).width()-(t.pageX-n(document).scrollLeft())<i.scrollSensitivity&&(u=n(document).
scrollLeft(n(document).scrollLeft()+i.scrollSpeed))));u!==!1&&n.ui.ddmanager&&!i.dropBehaviour&&n.ui.
ddmanager.prepareOffsets(r,t)}});n.ui.plugin.add("draggable","snap",{start:function(){var t=n(this).
data("ui-draggable"),i=t.options;t.snapElements=[];n(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":
i.snap).each(function(){var i=n(this),r=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,
width:i.outerWidth(),height:i.outerHeight(),top:r.top,left:r.left})})},drag:function(t,i){for(var e,
o,s,h,c,a,l,v,w,r=n(this).data("ui-draggable"),b=r.options,f=b.snapTolerance,y=i.offset.left,k=y+r.helperProportions.
width,p=i.offset.top,d=p+r.helperProportions.height,u=r.snapElements.length-1;u>=0;u--){if(c=r.snapElements[
u].left,a=c+r.snapElements[u].width,l=r.snapElements[u].top,v=l+r.snapElements[u].height,k<c-f||y>a+
f||d<l-f||p>v+f||!n.contains(r.snapElements[u].item.ownerDocument,r.snapElements[u].item)){r.snapElements[
u].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,n.extend(r._uiHash(),{snapItem:
r.snapElements[u].item}));r.snapElements[u].snapping=!1;continue}b.snapMode!=="inner"&&(e=Math.abs(l-
d)<=f,o=Math.abs(v-p)<=f,s=Math.abs(c-k)<=f,h=Math.abs(a-y)<=f,e&&(i.position.top=r._convertPositionTo(
"relative",{top:l-r.helperProportions.height,left:0}).top-r.margins.top),o&&(i.position.top=r._convertPositionTo(
"relative",{top:v,left:0}).top-r.margins.top),s&&(i.position.left=r._convertPositionTo("relative",{top:
0,left:c-r.helperProportions.width}).left-r.margins.left),h&&(i.position.left=r._convertPositionTo("relative",
{top:0,left:a}).left-r.margins.left));w=e||o||s||h;b.snapMode!=="outer"&&(e=Math.abs(l-p)<=f,o=Math.
abs(v-d)<=f,s=Math.abs(c-y)<=f,h=Math.abs(a-k)<=f,e&&(i.position.top=r._convertPositionTo("relative",
{top:l,left:0}).top-r.margins.top),o&&(i.position.top=r._convertPositionTo("relative",{top:v-r.helperProportions.
height,left:0}).top-r.margins.top),s&&(i.position.left=r._convertPositionTo("relative",{top:0,left:c}).
left-r.margins.left),h&&(i.position.left=r._convertPositionTo("relative",{top:0,left:a-r.helperProportions.
width}).left-r.margins.left));!r.snapElements[u].snapping&&(e||o||s||h||w)&&r.options.snap.snap&&r.options.
snap.snap.call(r.element,t,n.extend(r._uiHash(),{snapItem:r.snapElements[u].item}));r.snapElements[u].
snapping=e||o||s||h||w}}});n.ui.plugin.add("draggable","stack",{start:function(){var i,r=this.data("ui-draggable").
options,t=n.makeArray(n(r.stack)).sort(function(t,i){return(parseInt(n(t).css("zIndex"),10)||0)-(parseInt(
n(i).css("zIndex"),10)||0)});t.length&&(i=parseInt(n(t[0]).css("zIndex"),10)||0,n(t).each(function(t)
{n(this).css("zIndex",i+t)}),this.css("zIndex",i+t.length))}});n.ui.plugin.add("draggable","zIndex",
{start:function(t,i){var r=n(i.helper),u=n(this).data("ui-draggable").options;r.css("zIndex")&&(u._zIndex=
r.css("zIndex"));r.css("zIndex",u.zIndex)},stop:function(t,i){var r=n(this).data("ui-draggable").options;
r._zIndex&&n(i.helper).css("zIndex",r._zIndex)}})}(jQuery),function(n){function t(n,t,i){return n>t&&
n<t+i}n.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:
!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:
null,drop:null,out:null,over:null},_create:function(){var t=this.options,i=t.accept;this.isover=!1;this.
isout=!0;this.accept=n.isFunction(i)?i:function(n){return n.is(i)};this.proportions={width:this.element[
0].offsetWidth,height:this.element[0].offsetHeight};n.ui.ddmanager.droppables[t.scope]=n.ui.ddmanager.
droppables[t.scope]||[];n.ui.ddmanager.droppables[t.scope].push(this);t.addClasses&&this.element.addClass(
"ui-droppable")},_destroy:function(){for(var t=0,i=n.ui.ddmanager.droppables[this.options.scope];t<i.
length;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")}
,_setOption:function(t,i){t==="accept"&&(this.accept=n.isFunction(i)?i:function(n){return n.is(i)});
n.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=n.ui.ddmanager.current;
this.options.activeClass&&this.element.addClass(this.options.activeClass);i&&this._trigger("activate",
t,this.ui(i))},_deactivate:function(t){var i=n.ui.ddmanager.current;this.options.activeClass&&this.element.
removeClass(this.options.activeClass);i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t)
{var i=n.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.
element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),
this._trigger("over",t,this.ui(i)))},_out:function(t){var i=n.ui.ddmanager.current;i&&(i.currentItem||
i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.
hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:
function(t,i){var r=i||n.ui.ddmanager.current,u=!1;return!r||(r.currentItem||r.element)[0]===this.element[
0]?!1:(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=
n.data(this,"ui-droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope===r.options.scope&&
t.accept.call(t.element[0],r.currentItem||r.element)&&n.ui.intersect(r,n.extend(t,{offset:t.element.
offset()}),t.options.tolerance))return u=!0,!1}),u)?!1:this.accept.call(this.element[0],r.currentItem||
r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.
hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.
element):!1},ui:function(n){return{draggable:n.currentItem||n.element,helper:n.helper,position:n.position,
offset:n.positionAbs}}});n.ui.intersect=function(n,i,r){if(!i.offset)return!1;var a,v,e=(n.positionAbs||
n.position.absolute).left,s=e+n.helperProportions.width,o=(n.positionAbs||n.position.absolute).top,h=
o+n.helperProportions.height,u=i.offset.left,c=u+i.proportions.width,f=i.offset.top,l=f+i.proportions.
height;switch(r){case"fit":return u<=e&&s<=c&&f<=o&&h<=l;case"intersect":return u<e+n.helperProportions.
width/2&&s-n.helperProportions.width/2<c&&f<o+n.helperProportions.height/2&&h-n.helperProportions.height/
2<l;case"pointer":return a=(n.positionAbs||n.position.absolute).left+(n.clickOffset||n.offset.click)
.left,v=(n.positionAbs||n.position.absolute).top+(n.clickOffset||n.offset.click).top,t(v,f,i.proportions.
height)&&t(a,u,i.proportions.width);case"touch":return(o>=f&&o<=l||h>=f&&h<=l||o<f&&h>l)&&(e>=u&&e<=
c||s>=u&&s<=c||e<u&&s>c);default:return!1}};n.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:
function(t,i){var r,f,u=n.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,e=(t.currentItem||
t.element).find(":data(ui-droppable)").addBack();n:for(r=0;r<u.length;r++)if(!u[r].options.disabled&&
(!t||u[r].accept.call(u[r].element[0],t.currentItem||t.element))){for(f=0;f<e.length;f++)if(e[f]===u[
r].element[0]){u[r].proportions.height=0;continue n}(u[r].visible=u[r].element.css("display")!=="none",
u[r].visible)&&(o==="mousedown"&&u[r]._activate.call(u[r],i),u[r].offset=u[r].element.offset(),u[r].
proportions={width:u[r].element[0].offsetWidth,height:u[r].element[0].offsetHeight})}},drop:function(
t,i){var r=!1;return n.each((n.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.
options&&(!this.options.disabled&&this.visible&&n.ui.intersect(t,this,this.options.tolerance)&&(r=this.
_drop.call(this,i)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||
t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),r},dragStart:function(t,
i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||n.ui.
ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&n.ui.ddmanager.prepareOffsets(
t,i);n.each(n.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.
greedyChild&&this.visible){var r,e,f,o=n.ui.intersect(t,this,this.options.tolerance),u=!o&&this.isover?
"isout":o&&!this.isover?"isover":null;u&&(this.options.greedy&&(e=this.options.scope,f=this.element.
parents(":data(ui-droppable)").filter(function(){return n.data(this,"ui-droppable").options.scope===
e}),f.length&&(r=n.data(f[0],"ui-droppable"),r.greedyChild=u==="isover")),r&&u==="isover"&&(r.isover=
!1,r.isout=!0,r._out.call(r,i)),this[u]=!0,this[u==="isout"?"isover":"isout"]=!1,this[u==="isover"?"_over":
"_out"].call(this,i),r&&u==="isout"&&(r.isout=!1,r.isover=!0,r._over.call(r,i)))}})},dragStop:function(
t,i){t.element.parentsUntil("body").unbind("scroll.droppable");t.options.refreshPositions||n.ui.ddmanager.
prepareOffsets(t,i)}}}(jQuery),function(n){function t(n,t,i){return n>t&&n<t+i}function i(n){return/left|right/.
test(n.css("float"))||/inline|table-cell/.test(n.css("display"))}n.widget("ui.sortable",n.ui.mouse,{
version:"1.10.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,
containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:
!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:
20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:
null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:
null},_create:function(){var n=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?n.axis==="x"||i(this.items[0].item):!1;this.offset=this.
element.offset();this._mouseInit();this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();for(var n=this.items.length-1;n>=0;n--)this.items[n].item.removeData(this.widgetName+
"-item");return this},_setOption:function(t,i){t==="disabled"?(this.options[t]=i,this.widget().toggleClass(
"ui-sortable-disabled",!!i)):n.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(
t,i){var r=null,f=!1,u=this;return this.reverting?!1:this.options.disabled||this.options.type==="static"?
!1:(this._refreshItems(t),n(t.target).parents().each(function(){if(n.data(this,u.widgetName+"-item")===
u)return r=n(this),!1}),n.data(t.target,u.widgetName+"-item")===u&&(r=n(t.target)),!r)?!1:this.options.
handle&&!i&&(n(this.options.handle,r).find("*").addBack().each(function(){this===t.target&&(f=!0)}),
!f)?!1:(this.currentItem=r,this._removeCurrentsFromItems(),!0)},_mouseStart:function(t,i,r){var f,e,
u=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(
t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),
this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.
left-this.margins.left},n.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.
offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position",
"absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(
t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,u.cursorAt&&this._adjustOffsetFromHelper(u.
cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.
helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),u.containment&&this.
_setContainment(),u.cursor&&u.cursor!=="auto"&&(e=this.document.find("body"),this.storedCursor=e.css(
"cursor"),e.css("cursor",u.cursor),this.storedStylesheet=n("<style>*{ cursor: "+u.cursor+" !important; }<\/style>").
appendTo(e)),u.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),
this.helper.css("opacity",u.opacity)),u.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.
helper.css("zIndex")),this.helper.css("zIndex",u.zIndex)),this.scrollParent[0]!==document&&this.scrollParent[
0].tagName!=="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash(
)),this._preserveHelperProportions||this._cacheHelperProportions(),!r)for(f=this.containers.length-1;
f>=0;f--)this.containers[f]._trigger("activate",t,this._uiHash(this));return n.ui.ddmanager&&(n.ui.ddmanager.
current=this),n.ui.ddmanager&&!u.dropBehaviour&&n.ui.ddmanager.prepareOffsets(this,t),this.dragging=
!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var e,u,
f,o,i=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo(
"absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.
scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"?(this.overflowOffset.top+this.scrollParent[
0].offsetHeight-t.pageY<i.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+
i.scrollSpeed:t.pageY-this.overflowOffset.top<i.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=
this.scrollParent[0].scrollTop-i.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-
t.pageX<i.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+i.scrollSpeed:
t.pageX-this.overflowOffset.left<i.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[
0].scrollLeft-i.scrollSpeed)):(t.pageY-n(document).scrollTop()<i.scrollSensitivity?r=n(document).scrollTop(
n(document).scrollTop()-i.scrollSpeed):n(window).height()-(t.pageY-n(document).scrollTop())<i.scrollSensitivity&&
(r=n(document).scrollTop(n(document).scrollTop()+i.scrollSpeed)),t.pageX-n(document).scrollLeft()<i.
scrollSensitivity?r=n(document).scrollLeft(n(document).scrollLeft()-i.scrollSpeed):n(window).width()-
(t.pageX-n(document).scrollLeft())<i.scrollSensitivity&&(r=n(document).scrollLeft(n(document).scrollLeft(
)+i.scrollSpeed))),r!==!1&&n.ui.ddmanager&&!i.dropBehaviour&&n.ui.ddmanager.prepareOffsets(this,t)),
this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&this.options.axis==="y"||(this.
helper[0].style.left=this.position.left+"px"),this.options.axis&&this.options.axis==="x"||(this.helper[
0].style.top=this.position.top+"px"),e=this.items.length-1;e>=0;e--)if((u=this.items[e],f=u.item[0],
o=this._intersectsWithPointer(u),o)&&u.instance===this.currentContainer&&f!==this.currentItem[0]&&this.
placeholder[o===1?"next":"prev"]()[0]!==f&&!n.contains(this.placeholder[0],f)&&(this.options.type===
"semi-dynamic"?!n.contains(this.element[0],f):!0)){if(this.direction=o===1?"down":"up",this.options.
tolerance==="pointer"||this._intersectsWithSides(u))this._rearrange(t,u);else break;this._trigger("change",
t,this._uiHash());break}return this._contactContainers(t),n.ui.ddmanager&&n.ui.ddmanager.drag(this,t),
this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(
t,i){if(t){if(n.ui.ddmanager&&!this.options.dropBehaviour&&n.ui.ddmanager.drop(this,t),this.options.
revert){var e=this,f=this.placeholder.offset(),r=this.options.axis,u={};r&&r!=="x"||(u.left=f.left-this.
offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)
);r&&r!=="y"||(u.top=f.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.
body?0:this.offsetParent[0].scrollTop));this.reverting=!0;n(this.helper).animate(u,parseInt(this.options.
revert,10)||500,function(){e._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.
dragging){this._mouseUp({target:null});this.options.helper==="original"?this.currentItem.css(this._storedCSS).
removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)
this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.
over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.
over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(
this.placeholder[0]),this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode&&this.
helper.remove(),n.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.
prev?n(this.domPosition.prev).after(this.currentItem):n(this.domPosition.parent).prepend(this.currentItem)),
this},serialize:function(t){var r=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},n(r).each(
function(){var r=(n(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);
r&&i.push((t.key||r[1]+"[]")+"="+(t.key&&t.expression?r[1]:r[2]))}),!i.length&&t.key&&i.push(t.key+"="),
i.join("&")},toArray:function(t){var r=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},r.
each(function(){i.push(n(t.item||this).attr(t.attribute||"id")||"")}),i},_intersectsWith:function(n)
{var t=this.positionAbs.left,h=t+this.helperProportions.width,i=this.positionAbs.top,c=i+this.helperProportions.
height,r=n.left,f=r+n.width,u=n.top,e=u+n.height,o=this.offset.click.top,s=this.offset.click.left,l=
this.options.axis==="x"||i+o>u&&i+o<e,a=this.options.axis==="y"||t+s>r&&t+s<f,v=l&&a;return this.options.
tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.
helperProportions[this.floating?"width":"height"]>n[this.floating?"width":"height"]?v:r<t+this.helperProportions.
width/2&&h-this.helperProportions.width/2<f&&u<i+this.helperProportions.height/2&&c-this.helperProportions.
height/2<e},_intersectsWithPointer:function(n){var u=this.options.axis==="x"||t(this.positionAbs.top+
this.offset.click.top,n.top,n.height),f=this.options.axis==="y"||t(this.positionAbs.left+this.offset.
click.left,n.left,n.width),e=u&&f,i=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection(
);return e?this.floating?r&&r==="right"||i==="down"?2:1:i&&(i==="down"?2:1):!1},_intersectsWithSides:
function(n){var u=t(this.positionAbs.top+this.offset.click.top,n.top+n.height/2,n.height),f=t(this.positionAbs.
left+this.offset.click.left,n.left+n.width/2,n.width),i=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection(
);return this.floating&&r?r==="right"&&f||r==="left"&&!f:i&&(i==="down"&&u||i==="up"&&!u)},_getDragVerticalDirection:
function(){var n=this.positionAbs.top-this.lastPositionAbs.top;return n!==0&&(n>0?"down":"up")},_getDragHorizontalDirection:
function(){var n=this.positionAbs.left-this.lastPositionAbs.left;return n!==0&&(n>0?"right":"left")}
,refresh:function(n){return this._refreshItems(n),this.refreshPositions(),this},_connectWith:function(
){var n=this.options;return n.connectWith.constructor===String?[n.connectWith]:n.connectWith},_getItemsAsjQuery:
function(t){var r,u,e,i,s=[],f=[],o=this._connectWith();if(o&&t)for(r=o.length-1;r>=0;r--)for(e=n(o[
r]),u=e.length-1;u>=0;u--)i=n.data(e[u],this.widgetFullName),i&&i!==this&&!i.options.disabled&&f.push(
[n.isFunction(i.options.items)?i.options.items.call(i.element):n(i.options.items,i.element).not(".ui-sortable-helper").
not(".ui-sortable-placeholder"),i]);for(f.push([n.isFunction(this.options.items)?this.options.items.
call(this.element,null,{options:this.options,item:this.currentItem}):n(this.options.items,this.element).
not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),r=f.length-1;r>=0;r--)f[r][0].each(
function(){s.push(this)});return n(s)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(
":data("+this.widgetName+"-item)");this.items=n.grep(this.items,function(n){for(var i=0;i<t.length;i++)
if(t[i]===n.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[];this.containers=[this];
var r,u,e,i,o,s,h,l,a=this.items,f=[[n.isFunction(this.options.items)?this.options.items.call(this.element[
0],t,{item:this.currentItem}):n(this.options.items,this.element),this]],c=this._connectWith();if(c&&
this.ready)for(r=c.length-1;r>=0;r--)for(e=n(c[r]),u=e.length-1;u>=0;u--)i=n.data(e[u],this.widgetFullName),
i&&i!==this&&!i.options.disabled&&(f.push([n.isFunction(i.options.items)?i.options.items.call(i.element[
0],t,{item:this.currentItem}):n(i.options.items,i.element),i]),this.containers.push(i));for(r=f.length-
1;r>=0;r--)for(o=f[r][1],s=f[r][0],u=0,l=s.length;u<l;u++)h=n(s[u]),h.data(this.widgetName+"-item",o),
a.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&
this.helper&&(this.offset.parent=this._getParentOffset());for(var r,f,u,i=this.items.length-1;i>=0;i--)
(r=this.items[i],r.instance!==this.currentContainer&&this.currentContainer&&r.item[0]!==this.currentItem[
0])||(f=this.options.toleranceElement?n(this.options.toleranceElement,r.item):r.item,t||(r.width=f.outerWidth(
),r.height=f.outerHeight()),u=f.offset(),r.left=u.left,r.top=u.top);if(this.options.custom&&this.options.
custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.
length-1;i>=0;i--)u=this.containers[i].element.offset(),this.containers[i].containerCache.left=u.left,
this.containers[i].containerCache.top=u.top,this.containers[i].containerCache.width=this.containers[
i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight(
);return this},_createPlaceholder:function(t){t=t||this;var r,i=t.options;i.placeholder&&i.placeholder.
constructor!==String||(r=i.placeholder,i.placeholder={element:function(){var u=t.currentItem[0].nodeName.
toLowerCase(),i=n("<"+u+">",t.document[0]).addClass(r||t.currentItem[0].className+" ui-sortable-placeholder").
removeClass("ui-sortable-helper");return u==="tr"?t.currentItem.children().each(function(){n("<td>&#160;<\/td>",
t.document[0]).attr("colspan",n(this).attr("colspan")||1).appendTo(i)}):u==="img"&&i.attr("src",t.currentItem.
attr("src")),r||i.css("visibility","hidden"),i},update:function(n,u){(!r||i.forcePlaceholderSize)&&(
u.height()||u.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(
t.currentItem.css("paddingBottom")||0,10)),u.width()||u.width(t.currentItem.innerWidth()-parseInt(t.
currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}});t.placeholder=
n(i.placeholder.element.call(t.element,t.currentItem));t.currentItem.after(t.placeholder);i.placeholder.
update(t,t.placeholder)},_contactContainers:function(r){for(var f,v,s,l,y,h,o,p,a,c=null,e=null,u=this.
containers.length-1;u>=0;u--)if(!n.contains(this.currentItem[0],this.containers[u].element[0]))if(this.
_intersectsWith(this.containers[u].containerCache)){if(c&&n.contains(this.containers[u].element[0],c.
element[0]))continue;c=this.containers[u];e=u}else this.containers[u].containerCache.over&&(this.containers[
u]._trigger("out",r,this._uiHash(this)),this.containers[u].containerCache.over=0);if(c)if(this.containers.
length===1)this.containers[e].containerCache.over||(this.containers[e]._trigger("over",r,this._uiHash(
this)),this.containers[e].containerCache.over=1);else{for(v=1e4,s=null,a=c.floating||i(this.currentItem),
l=a?"left":"top",y=a?"width":"height",h=this.positionAbs[l]+this.offset.click[l],f=this.items.length-
1;f>=0;f--)n.contains(this.containers[e].element[0],this.items[f].item[0])&&this.items[f].item[0]!==
this.currentItem[0]&&(!a||t(this.positionAbs.top+this.offset.click.top,this.items[f].top,this.items[
f].height))&&(o=this.items[f].item.offset()[l],p=!1,Math.abs(o-h)>Math.abs(o+this.items[f][y]-h)&&(p=
!0,o+=this.items[f][y]),Math.abs(o-h)<v&&(v=Math.abs(o-h),s=this.items[f],this.direction=p?"up":"down"));
if(!s&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[e])return;s?this.
_rearrange(r,s,null,!0):this._rearrange(r,null,this.containers[e].element,!0);this._trigger("change",
r,this._uiHash());this.containers[e]._trigger("change",r,this._uiHash(this));this.currentContainer=this.
containers[e];this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[
e]._trigger("over",r,this._uiHash(this));this.containers[e].containerCache.over=1}},_createHelper:function(
t){var r=this.options,i=n.isFunction(r.helper)?n(r.helper.apply(this.element[0],[t,this.currentItem])):
r.helper==="clone"?this.currentItem.clone():this.currentItem;return i.parents("body").length||n(r.appendTo!==
"parent"?r.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0]),i[0]===this.currentItem[0]&&
(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:
this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),
(!i[0].style.width||r.forceHelperSize)&&i.width(this.currentItem.width()),(!i[0].style.height||r.forceHelperSize)&&
i.height(this.currentItem.height()),i},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.
split(" "));n.isArray(t)&&(t={left:+t[0],top:+t[1]||0});"left"in t&&(this.offset.click.left=t.left+this.
margins.left);"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.
left);"top"in t&&(this.offset.click.top=t.top+this.margins.top);"bottom"in t&&(this.offset.click.top=
this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var t=this.offsetParent.offset();return this.cssPosition==="absolute"&&this.
scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.
scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[
0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&n.ui.ie)&&(t={top:0,left:0}),{top:t.
top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.
css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var
n=this.currentItem.position();return{top:n.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.
scrollTop(),left:n.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{
top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.
helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:
function(){var t,r,u,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);
(i.containment==="document"||i.containment==="window")&&(this.containment=[0-this.offset.relative.left-
this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,n(i.containment==="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(n(i.containment==="document"?
document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.
margins.top]);/^(document|window|parent)$/.test(i.containment)||(t=n(i.containment)[0],r=n(i.containment).
offset(),u=n(t).css("overflow")!=="hidden",this.containment=[r.left+(parseInt(n(t).css("borderLeftWidth"),
10)||0)+(parseInt(n(t).css("paddingLeft"),10)||0)-this.margins.left,r.top+(parseInt(n(t).css("borderTopWidth"),
10)||0)+(parseInt(n(t).css("paddingTop"),10)||0)-this.margins.top,r.left+(u?Math.max(t.scrollWidth,t.
offsetWidth):t.offsetWidth)-(parseInt(n(t).css("borderLeftWidth"),10)||0)-(parseInt(n(t).css("paddingRight"),
10)||0)-this.helperProportions.width-this.margins.left,r.top+(u?Math.max(t.scrollHeight,t.offsetHeight):
t.offsetHeight)-(parseInt(n(t).css("borderTopWidth"),10)||0)-(parseInt(n(t).css("paddingBottom"),10)||
0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);
var r=t==="absolute"?1:-1,u=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&n.contains(
this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(
u[0].tagName);return{top:i.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition===
"fixed"?-this.scrollParent.scrollTop():f?0:u.scrollTop())*r,left:i.left+this.offset.relative.left*r+
this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():f?0:u.scrollLeft(
))*r}},_generatePosition:function(t){var r,u,i=this.options,f=t.pageX,e=t.pageY,o=this.cssPosition===
"absolute"&&!(this.scrollParent[0]!==document&&n.contains(this.scrollParent[0],this.offsetParent[0]))
?this.offsetParent:this.scrollParent,s=/(html|body)/i.test(o[0].tagName);return this.cssPosition!=="relative"||
this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=
this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<
this.containment[0]&&(f=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.
containment[1]&&(e=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[
2]&&(f=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&
(e=this.containment[3]+this.offset.click.top)),i.grid&&(r=this.originalPageY+Math.round((e-this.originalPageY)
/i.grid[1])*i.grid[1],e=this.containment?r-this.offset.click.top>=this.containment[1]&&r-this.offset.
click.top<=this.containment[3]?r:r-this.offset.click.top>=this.containment[1]?r-i.grid[1]:r+i.grid[1]:
r,u=this.originalPageX+Math.round((f-this.originalPageX)/i.grid[0])*i.grid[0],f=this.containment?u-this.
offset.click.left>=this.containment[0]&&u-this.offset.click.left<=this.containment[2]?u:u-this.offset.
click.left>=this.containment[0]?u-i.grid[0]:u+i.grid[0]:u)),{top:e-this.offset.click.top-this.offset.
relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:o.
scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition===
"fixed"?-this.scrollParent.scrollLeft():s?0:o.scrollLeft())}},_rearrange:function(n,t,i,r){i?i[0].appendChild(
this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?t.
item[0]:t.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var u=this.counter;this._delay(
function(){u===this.counter&&this.refreshPositions(!r)})},_clear:function(n,t){this.reverting=!1;var
i,r=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),
this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(i in this._storedCSS)(this._storedCSS[
i]==="auto"||this._storedCSS[i]==="static")&&(this._storedCSS[i]="");this.currentItem.css(this._storedCSS).
removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&r.push(function(
n){this._trigger("receive",n,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!==
this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent(
)[0])&&!t&&r.push(function(n){this._trigger("update",n,this._uiHash())}),this!==this.currentContainer&&
(t||(r.push(function(n){this._trigger("remove",n,this._uiHash())}),r.push(function(n){return function(
t){n._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),r.push(function(n)
{return function(t){n._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),
i=this.containers.length-1;i>=0;i--)t||r.push(function(n){return function(t){n._trigger("deactivate",
t,this._uiHash(this))}}.call(this,this.containers[i])),this.containers[i].containerCache.over&&(r.push(
function(n){return function(t){n._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[i])),
this.containers[i].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",
this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this.
_storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex),
this.dragging=!1,this.cancelHelperRemoval){if(!t){for(this._trigger("beforeStop",n,this._uiHash()),i=
0;i<r.length;i++)r[i].call(this,n);this._trigger("stop",n,this._uiHash())}return this.fromOutside=!1,
!1}if(t||this._trigger("beforeStop",n,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.
placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!t){for(
i=0;i<r.length;i++)r[i].call(this,n);this._trigger("stop",n,this._uiHash())}return this.fromOutside=
!1,!0},_trigger:function(){n.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:
function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||n([]),position:i.position,
originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}
})}(jQuery),function(n){(function(){var t={};n.each(["Quad","Cubic","Quart","Quint","Expo"],function(
n,i){t[i]=function(t){return Math.pow(t,n+2)}});n.extend(t,{Sine:function(n){return 1-Math.cos(n*Math.
PI/2)},Circ:function(n){return 1-Math.sqrt(1-n*n)},Elastic:function(n){return n===0||n===1?n:-Math.pow(
2,8*(n-1))*Math.sin(((n-1)*80-7.5)*Math.PI/15)},Back:function(n){return n*n*(3*n-2)},Bounce:function(
n){for(var t,i=4;n<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((t*3-2)/22-
n,2)}});n.each(t,function(t,i){n.easing["easeIn"+t]=i;n.easing["easeOut"+t]=function(n){return 1-i(1-
n)};n.easing["easeInOut"+t]=function(n){return n<.5?i(n*2)/2:1-i(n*-2+2)/2}})})()}(jQuery);d3=function(
){function uo(n){return n!=null&&!isNaN(n)}function pk(n){return n.length}function wk(n){for(var t=1;
n*t%1;)t*=10;return t}function kl(n,t){try{for(var i in t)Object.defineProperty(n.prototype,i,{value:
t[i],enumerable:!1})}catch(r){n.prototype=t}}function ut(){}function oo(){}function bk(n,t,i){return function(
){var r=i.apply(t,arguments);return r===t?n:r}}function so(n,t){var i,u,r;if(t in n)return t;for(t=t.
charAt(0).toUpperCase()+t.substring(1),i=0,u=ho.length;i<u;++i)if(r=ho[i]+t,r in n)return r}function c(
){}function co(){}function dl(n){function r(){for(var i=t,r=-1,f=i.length,u;++r<f;)(u=i[r].on)&&u.apply(
this,arguments);return n}var t=[],i=new ut;return r.on=function(r,u){var f=i.get(r),e;return arguments.
length<2?f&&f.on:(f&&(f.on=null,t=t.slice(0,e=t.indexOf(f)).concat(t.slice(e+1)),i.remove(r)),u&&t.push(
i.set(r,{on:u})),n)},r}function dt(){n.event.preventDefault()}function gl(){for(var t=n.event,i;i=t.
sourceEvent;)t=i;return t}function lo(t){for(var i=new co,r=0,u=arguments.length;++r<u;)i[arguments[
r]]=dl(i);return i.of=function(r,u){return function(f){try{var e=f.sourceEvent=n.event;f.target=t;n.
event=f;i[f.type].apply(r,u)}finally{n.event=e}}},i}function gt(n){return pr(n,e),n}function yo(n){return typeof
n=="function"?n:function(){return ao(n,this)}}function ia(n){return typeof n=="function"?n:function(
){return vo(n,this)}}function ra(t,i){function r(){this.removeAttribute(t)}function u(){this.removeAttributeNS(
t.space,t.local)}function f(){this.setAttribute(t,i)}function e(){this.setAttributeNS(t.space,t.local,
i)}function o(){var n=i.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}
function s(){var n=i.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(
t.space,t.local,n)}return t=n.ns.qualify(t),i==null?t.local?u:r:typeof i=="function"?t.local?s:o:t.local?
e:f}function ua(n){return n.trim().replace(/\s+/g," ")}function fa(t){return new RegExp("(?:^|\\s+)"+
n.requote(t)+"(?:\\s+|$)","g")}function ea(n,t){function r(){for(var r=-1;++r<i;)n[r](this,t)}function u(
){for(var r=-1,u=t.apply(this,arguments);++r<i;)n[r](this,u)}n=n.trim().split(/\s+/).map(dk);var i=n.
length;return typeof t=="function"?u:r}function dk(n){var t=fa(n);return function(i,r){if(u=i.classList)
return r?u.add(n):u.remove(n);var u=i.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||i.setAttribute(
"class",ua(u+" "+n))):i.setAttribute("class",ua(u.replace(t," ")))}}function oa(n,t,i){function r(){
this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,i)}function f(){var r=t.apply(this,
arguments);r==null?this.style.removeProperty(n):this.style.setProperty(n,r,i)}return t==null?r:typeof
t=="function"?f:u}function sa(n,t){function i(){delete this[n]}function r(){this[n]=t}function u(){var
i=t.apply(this,arguments);i==null?delete this[n]:this[n]=i}return t==null?i:typeof t=="function"?u:r}
function ha(t){return typeof t=="function"?t:(t=n.ns.qualify(t)).local?function(){return this.ownerDocument.
createElementNS(t.space,t.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,
t)}}function po(n){return{__data__:n}}function ca(n){return function(){return ta(this,n)}}function gk(
t){return arguments.length||(t=n.ascending),function(n,i){return n&&i?t(n.__data__,i.__data__):!n-!i}
}function ni(n,t){for(var i=0,u=n.length;i<u;i++)for(var f=n[i],r=0,o=f.length,e;r<o;r++)(e=f[r])&&t(
e,r,i);return n}function la(n){return pr(n,ft),n}function nd(n){var t,i;return function(r,u,f){var e=
n[f].update,s=e.length,o;for(f!=i&&(i=f,t=0),u>=t&&(t=u+1);!(o=e[t])&&++t<s;);return o}}function bu(
){var n=this.__transition__;n&&++n.active}function aa(t,i,r){function s(){var n=this[u];n&&(this.removeEventListener(
t,n,n.$),delete this[u])}function h(){var n=o(i,bt(arguments));s.call(this);this.addEventListener(t,
this[u]=n,n.$=r);n._=i}function l(){var f=new RegExp("^__on([^.]+)"+n.requote(t)+"$"),u,i,r;for(i in
this)(u=i.match(f))&&(r=this[i],this.removeEventListener(u[1],r,r.$),delete this[i])}var u="__on"+t,
f=t.indexOf("."),o=va,e;return f>0&&(t=t.substring(0,f)),e=ku.get(t),e&&(t=e,o=td),f?i?h:s:i?c:l}function va(
t,i){return function(r){var u=n.event;n.event=r;i[0]=this.__data__;try{t.apply(this,i)}finally{n.event=
u}}}function td(n,t){var i=va(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||r.compareDocumentPosition(
t)&8)||i.call(t,n)}}function du(){var t=".dragsuppress-"+ ++ya,u="click"+t,r=n.select(a).on("touchmove"+
t,dt).on("dragstart"+t,dt).on("selectstart"+t,dt),i,f;return gi&&(i=kt.style,f=i[gi],i[gi]="none"),function(
n){r.on(t,null);if(gi&&(i[gi]=f),n){function e(){r.on(u,null)}r.on(u,function(){dt();e()},!0);setTimeout(
e,0)}}}function pa(t,i){var u,r,f,e;return(i.changedTouches&&(i=i.changedTouches[0]),u=t.ownerSVGElement||
t,u.createSVGPoint)?(r=u.createSVGPoint(),gu<0&&(a.scrollX||a.scrollY)&&(u=n.select("body").append("svg").
style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important"),f=u[0][0].getScreenCTM(
),gu=!(f.f||f.e),u.remove()),gu?(r.x=i.pageX,r.y=i.pageY):(r.x=i.clientX,r.y=i.clientY),r=r.matrixTransform(
t.getScreenCTM().inverse()),[r.x,r.y]):(e=t.getBoundingClientRect(),[i.clientX-e.left-t.clientLeft,i.
clientY-e.top-t.clientTop])}function wa(n){return n>0?1:n<0?-1:0}function ba(n){return n>1?0:n<-1?f:
Math.acos(n)}function si(n){return n>1?k:n<-1?-k:Math.asin(n)}function ka(n){return((n=Math.exp(n))-
1/n)/2}function ko(n){return((n=Math.exp(n))+1/n)/2}function id(n){return((n=Math.exp(2*n))-1)/(n+1)
}function da(n){return(n=Math.sin(n/2))*n}function nr(){}function tr(n,t,i){return new ts(n,t,i)}function ts(
n,t,i){this.h=n;this.s=t;this.l=i}function is(n,t,i){function e(n){return(n>360?n-=360:n<0&&(n+=360),
n<60)?r+(u-r)*n/60:n<180?u:n<240?r+(u-r)*(240-n)/60:r}function f(n){return Math.round(e(n)*255)}var r,
u;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:t<0?0:t>1?1:t,i=i<0?0:i>1?1:i,u=i<=.5?i*(1+t):
i+t-i*t,r=2*i-u,ht(f(n+120),f(n),f(n-120))}function ir(n,t,i){return new uf(n,t,i)}function uf(n,t,i)
{this.h=n;this.c=t;this.l=i}function rs(n,t,i){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),rr(i,Math.cos(
n*=r)*t,Math.sin(n)*t)}function rr(n,t,i){return new ef(n,t,i)}function ef(n,t,i){this.l=n;this.a=t;
this.b=i}function uv(n,t,i){var r=(n+16)/116,u=r+t/500,f=r-i/200;return u=fs(u)*tv,r=fs(r)*iv,f=fs(f)*
rv,ht(os(3.2404542*u-1.5371385*r-.4985314*f),os(-.969266*u+1.8760108*r+.041556*f),os(.0556434*u-.2040259*
r+1.0572252*f))}function fv(n,t,i){return n>0?ir(Math.atan2(i,t)*s,Math.sqrt(t*t+i*i),n):ir(NaN,NaN,
n)}function fs(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function es(n){return n>.008856?Math.pow(
n,1/3):7.787037*n+4/29}function os(n){return Math.round(255*(n<=.00304?12.92*n:1.055*Math.pow(n,1/2.4)-
.055))}function ev(n){return ht(n>>16,n>>8&255,n&255)}function sf(n){return ev(n)+""}function ht(n,t,
i){return new ss(n,t,i)}function ss(n,t,i){this.r=n;this.g=t;this.b=i}function ur(n){return n<16?"0"+
Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function ov(n,t,i){var r=0,u=0,e=0,o,f,s;if(
o=/([a-z]+)\((.*)\)/i.exec(n),o){f=o[2].split(",");switch(o[1]){case"hsl":return i(parseFloat(f[0]),
parseFloat(f[1])/100,parseFloat(f[2])/100);case"rgb":return t(cs(f[0]),cs(f[1]),cs(f[2]))}}return(s=
br.get(n))?t(s.r,s.g,s.b):(n!=null&&n.charAt(0)==="#"&&(n.length===4?(r=n.charAt(1),r+=r,u=n.charAt(
2),u+=u,e=n.charAt(3)+e):n.length===7&&(r=n.substring(1,3),u=n.substring(3,5),e=n.substring(5,7)),r=
parseInt(r,16),u=parseInt(u,16),e=parseInt(e,16)),t(r,u,e))}function sv(n,t,i){var f=Math.min(n/=255,
t/=255,i/=255),r=Math.max(n,t,i),u=r-f,e,s,o=(r+f)/2;return u?(s=o<.5?u/(r+f):u/(2-r-f),e=(n==r?(t-i)
/u+(t<i?6:0):t==r?(i-n)/u+2:(n-t)/u+4)*60):(e=NaN,s=o>0&&o<1?0:e),tr(e,s,o)}function hv(n,t,i){n=hs(
n);t=hs(t);i=hs(i);var u=es((.4124564*n+.3575761*t+.1804375*i)/tv),r=es((.2126729*n+.7151522*t+.072175*
i)/iv),f=es((.0193339*n+.119192*t+.9503041*i)/rv);return rr(116*r-16,500*(u-r),200*(r-f))}function hs(
n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function cs(n){var t=parseFloat(n);return n.
charAt(n.length-1)==="%"?Math.round(t*2.55):t}function o(n){return typeof n=="function"?n:function()
{return n}}function v(n){return n}function ls(n){return function(t,i,r){return arguments.length===2&&
typeof i=="function"&&(r=i,i=null),as(t,i,n,r)}}function as(t,i,r,u){function c(){var n=e.status,t;if(
!n&&e.responseText||n>=200&&n<300||n===304){try{t=r.call(f,e)}catch(i){s.error.call(f,i);return}s.load.
call(f,t)}else s.error.call(f,e)}var f={},s=n.dispatch("beforesend","progress","load","error"),o={},
e=new XMLHttpRequest,h=null;return!a.XDomainRequest||"withCredentials"in e||!/^(http(s)?:)?\/\//.test(
t)||(e=new XDomainRequest),"onload"in e?e.onload=e.onerror=c:e.onreadystatechange=function(){e.readyState>
3&&c()},e.onprogress=function(t){var i=n.event;n.event=t;try{s.progress.call(f,e)}finally{n.event=i}
},f.header=function(n,t){return(n=(n+"").toLowerCase(),arguments.length<2)?o[n]:(t==null?delete o[n]:
o[n]=t+"",f)},f.mimeType=function(n){return arguments.length?(i=n==null?null:n+"",f):i},f.responseType=
function(n){return arguments.length?(h=n,f):h},f.response=function(n){return r=n,f},["get","post"].forEach(
function(n){f[n]=function(){return f.send.apply(f,[n].concat(bt(arguments)))}}),f.send=function(n,r,
u){if(arguments.length===2&&typeof r=="function"&&(u=r,r=null),e.open(n,t,!0),i==null||"accept"in o||
(o.accept=i+",*/*"),e.setRequestHeader)for(var c in o)e.setRequestHeader(c,o[c]);if(i!=null&&e.overrideMimeType&&
e.overrideMimeType(i),h!=null&&(e.responseType=h),u!=null)f.on("error",u).on("load",function(n){u(null,
n)});return s.beforesend.call(f,e),e.send(r==null?null:r),f},f.abort=function(){return e.abort(),f},
n.rebind(f,s,"on"),u==null?f:f.get(rd(u))}function rd(n){return n.length===1?function(t,i){n(t==null?
i:null)}:n}function ys(){var t=cv(),n=lv()-t;n>24?(isFinite(n)&&(clearTimeout(af),af=setTimeout(ys,n)),
lf=0):(lf=1,vs(ys))}function cv(){var n=Date.now();for(ct=hf;ct;)n>=ct.t&&(ct.f=ct.c(n-ct.t)),ct=ct.
n;return n}function lv(){for(var t,n=hf,i=Infinity;n;)n.f?n=t?t.n=n.n:hf=n.n:(n.t<i&&(i=n.t),n=(t=n)
.n);return cf=t,i}function sd(n,t){var i=Math.pow(10,u(8-t)*3);return{scale:t>8?function(n){return n/
i}:function(n){return n*i},symbol:n}}function ws(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)
}function hd(n){return n+""}function bs(){}function yv(n,t,i){var r=i.s=n+t,u=r-n,f=r-u;i.t=n-f+(t-u)}
function pf(n,t){n&&ds.hasOwnProperty(n.type)&&ds[n.type](n,t)}function gs(n,t,i){var u=-1,f=n.length-
i,r;for(t.lineStart();++u<f;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function pv(n,t){var i=-1,r=
n.length;for(t.polygonStart();++i<r;)gs(n[i],t,1);t.polygonEnd()}function cd(){function o(u,e){u*=r;
e=e*r/2+f/4;var o=u-n,s=Math.cos(e),h=Math.sin(e),c=i*h,l=t*s+c*Math.cos(o),a=c*Math.sin(o);ti.add(Math.
atan2(a,l));n=u;t=s;i=h}var u,e,n,t,i;d.point=function(s,h){d.point=o;n=(u=s)*r;t=Math.cos(h=(e=h)*r/
2+f/4);i=Math.sin(h)};d.lineEnd=function(){o(u,e)}}function hi(n){var t=n[0],i=n[1],r=Math.cos(i);return[
r*Math.cos(t),r*Math.sin(t),Math.sin(i)]}function bf(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function fr(
n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function nh(n,t){n[0]+=t[0];
n[1]+=t[1];n[2]+=t[2]}function kf(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function df(n){var t=Math.sqrt(n[
0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t;n[1]/=t;n[2]/=t}function gf(n){return[Math.atan2(n[1],n[0]),si(
n[2])]}function ne(n,i){return u(n[0]-i[0])<t&&u(n[1]-i[1])<t}function th(n,t){n*=r;var i=Math.cos(t*=
r);gr(i*Math.cos(n),i*Math.sin(n),Math.sin(t))}function gr(n,t,i){++dr;ci+=(n-ci)/dr;li+=(t-li)/dr;lt+=
(i-lt)/dr}function wv(){function u(u,f){u*=r;var c=Math.cos(f*=r),o=c*Math.cos(u),s=c*Math.sin(u),h=
Math.sin(f),e=Math.atan2(Math.sqrt((e=t*h-i*s)*e+(e=i*o-n*h)*e+(e=n*s-t*o)*e),n*o+t*s+i*h);te+=e;ii+=
e*(n+(n=o));ri+=e*(t+(t=s));et+=e*(i+(i=h));gr(n,t,i)}var n,t,i;nt.point=function(f,e){f*=r;var o=Math.
cos(e*=r);n=o*Math.cos(f);t=o*Math.sin(f);i=Math.sin(e);nt.point=u;gr(n,t,i)}}function bv(){nt.point=
th}function ld(){function e(u,f){u*=r;var p=Math.cos(f*=r),e=p*Math.cos(u),o=p*Math.sin(u),s=Math.sin(
f),c=t*s-i*o,l=i*e-n*s,a=n*o-t*e,v=Math.sqrt(c*c+l*l+a*a),w=n*e+t*o+i*s,y=v&&-ba(w)/v,h=Math.atan2(v,
w);er+=y*c;or+=y*l;ui+=y*a;te+=h;ii+=h*(n+(n=e));ri+=h*(t+(t=o));et+=h*(i+(i=s));gr(n,t,i)}var u,f,n,
t,i;nt.point=function(o,s){u=o;f=s;nt.point=e;o*=r;var h=Math.cos(s*=r);n=h*Math.cos(o);t=h*Math.sin(
o);i=Math.sin(s);gr(n,t,i)};nt.lineEnd=function(){e(u,f);nt.lineEnd=bv;nt.point=th}}function sr(){return!0}
function kv(n,t,i,r,u){var h=[],s=[],v,o,l,f,c,a,e;if(n.forEach(function(n){var o,i,f,e,t,r;if(!((o=
n.length-1)<=0)){if(i=n[0],f=n[o],ne(i,f)){for(u.lineStart(),e=0;e<o;++e)u.point((i=n[e])[0],i[1]);u.
lineEnd();return}t=new ie(i,n,null,!0);r=new ie(i,null,t,!1);t.o=r;h.push(t);s.push(r);t=new ie(f,n,
null,!1);r=new ie(f,null,t,!0);t.o=r;h.push(t);s.push(r)}}),s.sort(t),dv(h),dv(s),h.length){for(var e=
0,y=i,a=s.length;e<a;++e)s[e].e=y=!y;for(v=h[0];;){for(f=v,c=!0;f.v;)if((f=f.n)===v)return;o=f.z;u.lineStart(
);do{if(f.v=f.o.v=!0,f.e){if(c)for(e=0,a=o.length;e<a;++e)u.point((l=o[e])[0],l[1]);else r(f.x,f.n.x,
1,u);f=f.n}else{if(c)for(o=f.p.z,e=o.length-1;e>=0;--e)u.point((l=o[e])[0],l[1]);else r(f.x,f.p.x,-1,
u);f=f.p}f=f.o;o=f.z;c=!c}while(!f.v);u.lineEnd()}}}function dv(n){if(r=n.length){for(var r,u=0,t=n[
0],i;++u<r;)t.n=i=n[u],i.p=t,t=i;t.n=i=n[0];i.p=t}}function ie(n,t,i,r){this.x=n;this.z=t;this.o=i;this.
e=r;this.v=!1;this.n=this.p=null}function gv(t,i,r,u){return function(f,e){function v(n,i){var r=f(n,
i);t(n=r[0],i=r[1])&&e.point(n,i)}function d(n,t){var i=f(n,t);a.point(i[0],i[1])}function y(){o.point=
d;a.lineStart()}function p(){o.point=v;a.lineEnd()}function b(n,t){h.push([n,t]);var i=f(n,t);c.point(
i[0],i[1])}function g(){c.lineStart();h=[]}function nt(){var t,r,f;b(h[0][0],h[0][1]);c.lineEnd();var
u=c.clean(),n=w.buffer(),i,t=n.length;if(h.pop(),l.push(h),h=null,t){if(u&1){for(i=n[0],t=i.length-1,
r=-1,e.lineStart();++r<t;)e.point((f=i[r])[0],f[1]);e.lineEnd();return}t>1&&u&2&&n.push(n.pop().concat(
n.shift()));s.push(n.filter(ad))}}var a=i(e),k=f.invert(u[0],u[1]),o={point:v,lineStart:y,lineEnd:p,
polygonStart:function(){o.point=b;o.lineStart=g;o.lineEnd=nt;s=[];l=[];e.polygonStart()},polygonEnd:
function(){o.point=v;o.lineStart=y;o.lineEnd=p;s=n.merge(s);var t=yd(k,l);s.length?kv(s,vd,t,r,e):t&&
(e.lineStart(),r(null,null,1,e),e.lineEnd());e.polygonEnd();s=l=null},sphere:function(){e.polygonStart(
);e.lineStart();r(null,null,1,e);e.lineEnd();e.polygonEnd()}},s,w=ny(),c=i(w),l,h;return o}}function ad(
n){return n.length>1}function ny(){var n=[],t;return{lineStart:function(){n.push(t=[])},point:function(
n,i){t.push([n,i])},lineEnd:c,buffer:function(){var i=n;return n=[],t=null,i},rejoin:function(){n.length>
1&&n.push(n.pop().concat(n.shift()))}}}function vd(n,i){return((n=n.x)[0]<0?n[1]-k-t:k-n[1])-((i=i.x)
[0]<0?i[1]-k-t:k-i[1])}function yd(n,i){var o=n[0],g=n[1],ht=[Math.sin(o),-Math.cos(o),0],v=0,nt=0,s,
tt,h,y,e,k,d;for(ti.reset(),s=0,tt=i.length;s<tt;++s)if(h=i[s],y=h.length,y)for(var c=h[0],p=c[0],it=
c[1]/2+f/4,rt=Math.sin(it),ut=Math.cos(it),l=1;;){l===y&&(l=0);n=h[l];var w=n[0],ft=n[1]/2+f/4,et=Math.
sin(ft),ot=Math.cos(ft),r=w-p,a=u(r)>f,st=rt*et;if(ti.add(Math.atan2(st*Math.sin(r),ut*ot+st*Math.cos(
r))),v+=a?r+(r>=0?b:-b):r,a^p>=o^w>=o&&(e=fr(hi(c),hi(n)),df(e),k=fr(ht,e),df(k),d=(a^r>=0?-1:1)*si(
k[2]),(g>d||g===d&&(e[0]||e[1]))&&(nt+=a^r>=0?1:-1)),!l++)break;p=w;rt=et;ut=ot;c=n}return(v<-t||v<t&&
ti<0)^nt&1}function pd(n){var r=NaN,i=NaN,e=NaN,o;return{lineStart:function(){n.lineStart();o=1},point:
function(s,h){var c=s>0?f:-f,l=u(s-r);u(l-f)<t?(n.point(r,i=(i+h)/2>0?k:-k),n.point(e,i),n.lineEnd(),
n.lineStart(),n.point(c,i),n.point(s,i),o=0):e!==c&&l>=f&&(u(r-e)<t&&(r-=e*t),u(s-c)<t&&(s-=c*t),i=wd(
r,i,s,h),n.point(e,i),n.lineEnd(),n.lineStart(),n.point(c,i),o=0);n.point(r=s,i=h);e=c},lineEnd:function(
){n.lineEnd();r=i=NaN},clean:function(){return 2-o}}}function wd(n,i,r,f){var e,o,s=Math.sin(n-r);return u(
s)>t?Math.atan((Math.sin(i)*(o=Math.cos(f))*Math.sin(r)-Math.sin(f)*(e=Math.cos(i))*Math.sin(n))/(e*
o*s)):(i+f)/2}function bd(n,i,r,e){var o,s;n==null?(o=r*k,e.point(-f,o),e.point(0,o),e.point(f,o),e.
point(f,0),e.point(f,-o),e.point(0,-o),e.point(-f,-o),e.point(-f,0),e.point(-f,o)):u(n[0]-i[0])>t?(s=
n[0]<i[0]?f:-f,o=r*s/2,e.point(-s,o),e.point(0,o),e.point(s,o)):e.point(i[0],i[1])}function kd(n){function s(
n,t){return Math.cos(n)*Math.cos(t)>i}function a(n){var i,a,r,l,u;return{lineStart:function(){l=r=!1;
u=1},point:function(v,y){var p=[v,y],w,b=s(v,y),d=e?b?0:h(v,y):b?h(v+(v<0?f:-f),y):0,k;!i&&(l=r=b)&&
n.lineStart();b!==r&&(w=o(i,p),(ne(i,w)||ne(p,w))&&(p[0]+=t,p[1]+=t,b=s(p[0],p[1])));b!==r?(u=0,b?(n.
lineStart(),w=o(p,i),n.point(w[0],w[1])):(w=o(i,p),n.point(w[0],w[1]),n.lineEnd()),i=w):c&&i&&e^b&&(
d&a||!(k=o(p,i,!0))||(u=0,e?(n.lineStart(),n.point(k[0][0],k[0][1]),n.point(k[1][0],k[1][1]),n.lineEnd(
)):(n.point(k[1][0],k[1][1]),n.lineEnd(),n.lineStart(),n.point(k[0][0],k[0][1]))));!b||i&&ne(i,p)||n.
point(p[0],p[1]);i=p;r=b;a=d},lineEnd:function(){r&&n.lineEnd();i=null},clean:function(){return u|(l&&
r)<<1}}}function o(n,r,e){var et=hi(n),ot=hi(r),rt=[1,0,0],a=fr(et,ot),ut=bf(a,a),b=a[0],k=ut-b*b,g,
o,it;if(!k)return!e&&n;var st=i*ut/k,ht=-i*b/k,ct=fr(rt,a),s=kf(rt,st),lt=kf(a,ht);nh(s,lt);var v=ct,
p=bf(s,v),d=bf(v,v),ft=p*p-d*(bf(s,s)-1);if(!(ft<0)){if(g=Math.sqrt(ft),o=kf(v,(-p-g)/d),nh(o,s),o=gf(
o),!e)return o;var h=n[0],y=r[0],c=n[1],l=r[1],w;y<h&&(w=h,h=y,y=w);var nt=y-h,tt=u(nt-f)<t,at=tt||nt<
t;return!tt&&l<c&&(w=c,c=l,l=w),(at?tt?c+l>0^o[1]<(u(o[0]-h)<t?c:l):c<=o[1]&&o[1]<=l:nt>f^(h<=o[0]&&
o[0]<=y))?(it=kf(v,(-p+g)/d),nh(it,s),[o,gf(it)]):void 0}}function h(t,i){var u=e?n:f-n,r=0;return t<
-u?r|=1:t>u&&(r|=2),i<-u?r|=4:i>u&&(r|=8),r}var i=Math.cos(n),e=i>0,c=u(i)>t,l=sh(n,6*r);return gv(s,
a,l,e?[0,-n]:[-f,n-f])}function ty(n,t,i,r){return function(u){var a=u.a,v=u.b,c=a.x,l=a.y,y=v.x,p=v.
y,e=0,o=1,s=y-c,h=p-l,f;if(f=n-c,s||!(f>0)){if(f/=s,s<0){if(f<e)return;f<o&&(o=f)}else if(s>0){if(f>
o)return;f>e&&(e=f)}if(f=i-c,s||!(f<0)){if(f/=s,s<0){if(f>o)return;f>e&&(e=f)}else if(s>0){if(f<e)return;
f<o&&(o=f)}if(f=t-l,h||!(f>0)){if(f/=h,h<0){if(f<e)return;f<o&&(o=f)}else if(h>0){if(f>o)return;f>e&&
(e=f)}if(f=r-l,h||!(f<0)){if(f/=h,h<0){if(f>o)return;f>e&&(e=f)}else if(h>0){if(f<e)return;f<o&&(o=f)}
return e>0&&(u.a={x:c+e*s,y:l+e*h}),o<1&&(u.b={x:c+o*s,y:l+o*h}),u}}}}}}function iy(i,r,f,e){function o(
n,e){return u(n[0]-i)<t?e>0?0:3:u(n[0]-f)<t?e>0?2:1:u(n[1]-r)<t?e>0?1:0:e>0?3:2}function h(n,t){return s(
n.x,t.x)}function s(n,t){var i=o(n,1),r=o(t,1);return i!==r?i-r:i===0?t[1]-n[1]:i===1?n[0]-t[0]:i===
2?n[1]-t[1]:t[0]-n[0]}return function(t){function st(n){for(var r=0,s=c.length,u=n[1],f=0;f<s;++f)for(
var e=1,o=c[f],h=o.length,i=o[0],t;e<h;++e)t=o[e],i[1]<=u?t[1]>u&&d(i,t,n)>0&&++r:t[1]<=u&&d(i,t,n)<
0&&--r,i=t;return r!==0}function d(n,t,i){return(t[0]-n[0])*(i[1]-n[1])-(i[0]-n[0])*(t[1]-n[1])}function g(
n,t,u,h){var c=0,l=0;if(n==null||(c=o(n,u))!==(l=o(t,u))||s(n,t)<0^u>0){do h.point(c===0||c===3?i:f,
c>1?e:r);while((c=(c+u+4)%4)!==l)}else h.point(t[0],t[1])}function nt(n,t){return i<=n&&n<=f&&r<=t&&
t<=e}function tt(n,i){nt(n,i)&&t.point(n,i)}function ht(){p.point=ft;c&&c.push(y=[]);k=!0;l=!1;w=b=NaN}
function ct(){u&&(ft(it,rt),ut&&l&&v.rejoin(),u.push(v.buffer()));p.point=tt;l&&t.lineEnd()}function ft(
n,i){var r,u;n=Math.max(-nu,Math.min(nu,n));i=Math.max(-nu,Math.min(nu,i));r=nt(n,i);c&&y.push([n,i]);
k?(it=n,rt=i,ut=r,k=!1,r&&(t.lineStart(),t.point(n,i))):r&&l?t.point(n,i):(u={a:{x:w,y:b},b:{x:n,y:i}},
ot(u)?(l||(t.lineStart(),t.point(u.a.x,u.a.y)),t.point(u.b.x,u.b.y),r||t.lineEnd(),a=!1):r&&(t.lineStart(
),t.point(n,i),a=!1));w=n;b=i;l=r}var et=t,v=ny(),ot=ty(i,r,f,e),u,c,y,p={point:tt,lineStart:ht,lineEnd:
ct,polygonStart:function(){t=v;u=[];c=[];a=!0},polygonEnd:function(){t=et;u=n.merge(u);var r=st([i,e]),
f=a&&r,o=u.length;(f||o)&&(t.polygonStart(),f&&(t.lineStart(),g(null,null,1,t),t.lineEnd()),o&&kv(u,
h,r,g,t),t.polygonEnd());u=c=y=null}},it,rt,ut,w,b,l,k,a;return p}}function ry(n,t){function i(i,r){
return i=n(i,r),t(i[0],i[1])}return n.invert&&t.invert&&(i.invert=function(i,r){return i=t.invert(i,
r),i&&n.invert(i[0],i[1])}),i}function rh(n){var t=0,i=f/3,r=eh(n),u=r(t,i);return u.parallels=function(
n){return arguments.length?r(t=n[0]*f/180,i=n[1]*f/180):[t/f*180,i/f*180]},u}function uy(n,t){function e(
n,t){var r=Math.sqrt(u-2*i*Math.sin(t))/i;return[r*Math.sin(n*=i),f-r*Math.cos(n)]}var r=Math.sin(n),
i=(r+Math.sin(t))/2,u=1+r*(2*i-r),f=Math.sqrt(u)/i;return e.invert=function(n,t){var r=f-t;return[Math.
atan2(n,r)/i,si((u-(n*n+r*r)*i*i)/(2*i))]},e}function dd(){function u(i,r){fh+=t*i-n*r;n=i;t=r}var i,
r,n,t;at.point=function(f,e){at.point=u;i=n=f;r=t=e};at.lineEnd=function(){u(i,r)}}function gd(n,t){
n<re&&(re=n);n>fe&&(fe=n);t<ue&&(ue=t);t>ee&&(ee=t)}function ng(){function i(n,i){t.push("M",n,",",i,
r)}function f(i,r){t.push("M",i,",",r);n.point=e}function e(n,i){t.push("L",n,",",i)}function u(){n.
point=i}function o(){t.push("Z")}var r=ey(4.5),t=[],n={point:i,lineStart:function(){n.point=f},lineEnd:
u,polygonStart:function(){n.lineEnd=o},polygonEnd:function(){n.lineEnd=u;n.point=i},pointRadius:function(
t){return r=ey(t),n},result:function(){if(t.length){var n=t.join("");return t=[],n}}};return n}function ey(
n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function ai(n,t){ci+=n;
li+=t;++lt}function oy(){function i(i,r){var f=i-n,e=r-t,u=Math.sqrt(f*f+e*e);ii+=u*(n+i)/2;ri+=u*(t+
r)/2;et+=u;ai(n=i,t=r)}var n,t;tt.point=function(r,u){tt.point=i;ai(n=r,t=u)}}function sy(){tt.point=
ai}function tg(){function u(i,r){var f=i-n,e=r-t,u=Math.sqrt(f*f+e*e);ii+=u*(n+i)/2;ri+=u*(t+r)/2;et+=
u;u=t*i-n*r;er+=u*(n+i);or+=u*(t+r);ui+=u*3;ai(n=i,t=r)}var i,r,n,t;tt.point=function(f,e){tt.point=
u;ai(i=n=f,r=t=e)};tt.lineEnd=function(){u(i,r)}}function ig(n){function i(t,i){n.moveTo(t,i);n.arc(
t,i,r,0,b)}function f(i,r){n.moveTo(i,r);t.point=e}function e(t,i){n.lineTo(t,i)}function u(){t.point=
i}function o(){n.closePath()}var r=4.5,t={point:i,lineStart:function(){t.point=f},lineEnd:u,polygonStart:
function(){t.lineEnd=o},polygonEnd:function(){t.lineEnd=u;t.point=i},pointRadius:function(n){return r=
n,t},result:c};return t}function hy(n){function o(n){return(f?c:h)(n)}function h(t){return ly(t,function(
i,r){i=n(i,r);t.point(i[0],i[1])})}function c(t){function g(i,r){i=n(i,r);t.point(i[0],i[1])}function l(
){r=NaN;i.point=a;t.lineStart()}function a(i,l){var a=hi([i,l]),v=n(i,l);e(r,u,c,o,s,h,r=v[0],u=v[1],
c=i,o=a[0],s=a[1],h=a[2],f,t);t.point(r,u)}function v(){i.point=g;t.lineEnd()}function tt(){l();i.point=
it;i.lineEnd=rt}function it(n,t){a(y=n,nt=t);p=r;w=u;b=o;k=s;d=h;i.point=a}function rt(){e(r,u,c,o,s,
h,p,w,y,b,k,d,f,t);i.lineEnd=v;v()}var y,nt,p,w,b,k,d,c,r,u,o,s,h,i={point:g,lineStart:l,lineEnd:v,polygonStart:
function(){t.polygonStart();i.lineStart=tt},polygonEnd:function(){t.polygonEnd();i.lineStart=l}};return i}
function e(r,f,o,h,c,l,a,v,y,p,w,b,k,d){var it=a-r,rt=v-f,et=it*it+rt*rt;if(et>4*i&&k--){var nt=h+p,
tt=c+w,g=l+b,ot=Math.sqrt(nt*nt+tt*tt+g*g),vt=Math.asin(g/=ot),st=u(u(g)-1)<t||u(o-y)<t?(o+y)/2:Math.
atan2(tt,nt),ht=n(st,vt),ut=ht[0],ft=ht[1],ct=ut-r,lt=ft-f,at=rt*ct-it*lt;(at*at/et>i||u((it*ct+rt*lt)
/et-.5)>.3||h*p+c*w+l*b<s)&&(e(r,f,o,h,c,l,ut,ft,st,nt/=ot,tt/=ot,g,k,d),d.point(ut,ft),e(ut,ft,st,nt,
tt,g,a,v,y,p,w,b,k,d))}}var i=.5,s=Math.cos(30*r),f=16;return o.precision=function(n){return arguments.
length?(f=(i=n*n)>0&&16,o):Math.sqrt(i)},o}function rg(n){var t=hy(function(t,i){return n([t*s,i*s])}
);return function(n){return ay(t(n))}}function cy(n){this.stream=n}function ly(n,t){return{point:t,sphere:
function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:
function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function fi(n){return eh(function(
){return n})()}function eh(t){function u(n){return n=l(n[0]*r,n[1]*r),[n[0]*i+h,c-n[1]*i]}function et(
n){return n=l.invert((n[0]-h)/i,(c-n[1])/i),n&&[n[0]*s,n[1]*s]}function o(){l=ry(tt=oh(b,k,d),e);var
n=e(p,w);return h=a-n[0]*i,c=y+n[1]*i,nt()}function nt(){return f&&(f.valid=!1,f=null),u}var e,tt,l,
it=hy(function(n,t){return n=e(n,t),[n[0]*i+h,c-n[1]*i]}),i=150,a=480,y=250,p=0,w=0,b=0,k=0,d=0,h,c,
rt=ih,ut=v,g=null,ft=null,f;return u.stream=function(n){return f&&(f.valid=!1),f=ay(rt(tt,it(ut(n)))),
f.valid=!0,f},u.clipAngle=function(n){return arguments.length?(rt=n==null?(g=n,ih):kd((g=+n)*r),nt()):
g},u.clipExtent=function(n){return arguments.length?(ft=n,ut=n?iy(n[0][0],n[0][1],n[1][0],n[1][1]):v,
nt()):ft},u.scale=function(n){return arguments.length?(i=+n,o()):i},u.translate=function(n){return arguments.
length?(a=+n[0],y=+n[1],o()):[a,y]},u.center=function(n){return arguments.length?(p=n[0]%360*r,w=n[1]%
360*r,o()):[p*s,w*s]},u.rotate=function(n){return arguments.length?(b=n[0]%360*r,k=n[1]%360*r,d=n.length>
2?n[2]%360*r:0,o()):[b*s,k*s,d*s]},n.rebind(u,it,"precision"),function(){return e=t.apply(this,arguments),
u.invert=e.invert&&et,o()}}function ay(n){return ly(n,function(t,i){n.point(t*r,i*r)})}function tu(n,
t){return[n,t]}function vy(n,t){return[n>f?n-b:n<-f?n+b:n,t]}function oh(n,t,i){return n?t||i?ry(py(
n),wy(t,i)):py(n):t||i?wy(t,i):vy}function yy(n){return function(t,i){return t+=n,[t>f?t-b:t<-f?t+b:
t,i]}}function py(n){var t=yy(n);return t.invert=yy(-n),t}function wy(n,t){function e(n,t){var e=Math.
cos(t),o=Math.cos(n)*e,s=Math.sin(n)*e,h=Math.sin(t),c=h*i+o*r;return[Math.atan2(s*u-c*f,o*i-h*r),si(
c*u+s*f)]}var i=Math.cos(n),r=Math.sin(n),u=Math.cos(t),f=Math.sin(t);return e.invert=function(n,t){
var e=Math.cos(t),o=Math.cos(n)*e,s=Math.sin(n)*e,h=Math.sin(t),c=h*u-s*f;return[Math.atan2(s*u+h*f,
o*i+c*r),si(c*i-o*r)]},e}function sh(n,t){var i=Math.cos(n),r=Math.sin(n);return function(u,f,e,o){var
h=e*t,c,s;for(u!=null?(u=by(i,u),f=by(i,f),(e>0?u<f:u>f)&&(u+=e*b)):(u=n+e*b,f=n-.5*h),s=u;e>0?s>f:s<
f;s-=h)o.point((c=gf([i,-r*Math.cos(s),-r*Math.sin(s)]))[0],c[1])}}function by(n,i){var r=hi(i),u;return r[
0]-=n,df(r),u=ba(-r[1]),((-r[2]<0?-u:u)+2*Math.PI-t)%(2*Math.PI)}function ky(i,r,u){var f=n.range(i,
r-t,u).concat(r);return function(n){return f.map(function(t){return[n,t]})}}function dy(i,r,u){var f=
n.range(i,r-t,u).concat(r);return function(n){return f.map(function(t){return[t,n]})}}function hh(n)
{return n.source}function ch(n){return n.target}function ug(n,t,i,r){var f=Math.cos(t),c=Math.sin(t),
e=Math.cos(r),l=Math.sin(r),a=f*Math.cos(n),v=f*Math.sin(n),y=e*Math.cos(i),p=e*Math.sin(i),u=2*Math.
asin(Math.sqrt(da(r-t)+f*e*da(i-n))),o=1/Math.sin(u),h=u?function(n){var t=Math.sin(n*=u)*o,i=Math.sin(
u-n)*o,r=i*a+t*y,f=i*v+t*p,e=i*c+t*l;return[Math.atan2(f,r)*s,Math.atan2(e,Math.sqrt(r*r+f*f))*s]}:function(
){return[n*s,t*s]};return h.distance=u,h}function fg(){function f(f,e){var h=Math.sin(e*=r),s=Math.cos(
e),o=u((f*=r)-i),c=Math.cos(o);lh+=Math.atan2(Math.sqrt((o=s*Math.sin(o))*o+(o=t*h-n*s*c)*o),n*h+t*s*
c);i=f;n=h;t=s}var i,n,t;vi.point=function(u,e){i=u*r;n=Math.sin(e*=r);t=Math.cos(e);vi.point=f};vi.
lineEnd=function(){vi.point=vi.lineEnd=c}}function iu(n,t){function i(t,i){var f=Math.cos(t),r=Math.
cos(i),u=n(f*r);return[u*r*Math.sin(t),u*Math.sin(i)]}return i.invert=function(n,i){var r=Math.sqrt(
n*n+i*i),u=t(r),f=Math.sin(u),e=Math.cos(u);return[Math.atan2(n*f,r*e),Math.asin(r&&i*f/r)]},i}function gy(
n,i){function h(n,i){var f=u(u(i)-k)<t?0:o/Math.pow(e(i),r);return[f*Math.sin(r*n),o-f*Math.cos(r*n)]}
var s=Math.cos(n),e=function(n){return Math.tan(f/4+n/2)},r=n===i?Math.sin(n):Math.log(s/Math.cos(i))/
Math.log(e(i)/e(n)),o=s*Math.pow(e(n),r)/r;return r?(h.invert=function(n,t){var i=o-t,u=wa(r)*Math.sqrt(
n*n+i*i);return[Math.atan2(n,i)/r,2*Math.atan(Math.pow(o/u,1/r))-k]},h):oe}function np(n,i){function o(
n,t){var i=f-t;return[i*Math.sin(r*n),f-i*Math.cos(r*n)]}var e=Math.cos(n),r=n===i?Math.sin(n):(e-Math.
cos(i))/(i-n),f=e/r+n;return u(r)<t?tu:(o.invert=function(n,t){var i=f-t;return[Math.atan2(n,i)/r,f-
wa(r)*Math.sqrt(n*n+i*i)]},o)}function oe(n,t){return[n,Math.log(Math.tan(f/4+t/2))]}function tp(n){
var t=fi(n),r=t.scale,u=t.translate,e=t.clipExtent,i;return t.scale=function(){var n=r.apply(t,arguments);
return n===t?i?t.clipExtent(null):t:n},t.translate=function(){var n=u.apply(t,arguments);return n===
t?i?t.clipExtent(null):t:n},t.clipExtent=function(n){var h=e.apply(t,arguments),o,s;return h===t?(i=
n==null)&&(o=f*r(),s=u(),e([[s[0]-o,s[1]-o],[s[0]+o,s[1]+o]])):i&&(h=null),h},t.clipExtent(null)}function bh(
n,t){var i=Math.cos(t)*Math.sin(n);return[Math.log((1+i)/(1-i))/2,Math.atan2(Math.tan(t),Math.cos(n))]}
function yi(n){return n[0]}function hr(n){return n[1]}function eg(n,t,i,r){var u,f,e,o,s,h,c;return u=
r[n],f=u[0],e=u[1],u=r[t],o=u[0],s=u[1],u=r[i],h=u[0],c=u[1],(c-e)*(o-f)-(s-e)*(h-f)>0}function kh(n,
t,i){return(i[0]-t[0])*(n[1]-t[1])<(i[1]-t[1])*(n[0]-t[0])}function ip(n,t,i,r){var u=n[0],e=i[0],o=
t[0]-u,s=r[0]-e,f=n[1],h=i[1],c=t[1]-f,l=r[1]-h,a=(s*(f-h)-l*(u-e))/(l*o-s*c);return[u+a*o,f+a*c]}function rp(
n){var t=n[0],i=n[n.length-1];return!(t[0]-i[0]||t[1]-i[1])}function og(){ce(this);this.edge=this.site=
this.circle=null}function up(n){var t=dh.pop()||new og;return t.site=n,t}function tc(n){vr(n);lr.remove(
n);dh.push(n);ce(n)}function sg(n){var a=n.circle,o=a.x,s=a.cy,v={x:o,y:s},h=n.P,c=n.N,f=[n],r,i,l,e;
for(tc(n),r=h;r.circle&&u(o-r.circle.x)<t&&u(s-r.circle.cy)<t;)h=r.P,f.unshift(r),tc(r),r=h;for(f.unshift(
r),vr(r),i=c;i.circle&&u(o-i.circle.x)<t&&u(s-i.circle.cy)<t;)c=i.N,f.push(i),tc(i),i=c;for(f.push(i),
vr(i),l=f.length,e=1;e<l;++e)i=f[e],r=f[e-1],se(i.edge,r.site,i.site,v);r=f[0];i=f[l-1];i.edge=fu(r.
site,i.site,null,v);ar(r);ar(i)}function hg(n){for(var b=n.x,k=n.y,i,r,a,v,u=lr._,f;u;)if(a=fp(u,k)-
b,a>t)u=u.L;else if(v=b-cg(u,k),v>t){if(!u.R){i=u;break}u=u.R}else{a>-t?(i=u.P,r=u):v>-t?(i=u,r=u.N):
i=r=u;break}if(f=up(n),lr.insert(i,f),i||r){if(i===r){vr(i);r=up(i.site);lr.insert(f,r);f.edge=r.edge=
fu(i.site,f.site);ar(i);ar(r);return}if(!r){f.edge=fu(i.site,f.site);return}vr(i);vr(r);var e=i.site,
y=e.x,p=e.y,o=n.x-y,s=n.y-p,h=r.site,c=h.x-y,l=h.y-p,d=2*(o*l-s*c),g=o*o+s*s,nt=c*c+l*l,w={x:(l*g-s*
nt)/d+y,y:(o*nt-c*g)/d+p};se(r.edge,e,h,w);f.edge=fu(e,n,null,w);r.edge=fu(n,h,null,w);ar(i);ar(r)}}
function fp(n,t){var i=n.site,u=i.x,l=i.y,f=l-t,e;if(!f)return u;if(e=n.P,!e)return-Infinity;i=e.site;
var o=i.x,a=i.y,r=a-t;if(!r)return o;var s=o-u,h=1/f-1/r,c=s/r;return h?(-c+Math.sqrt(c*c-2*h*(s*s/(
-2*r)-a+r/2+l-f/2)))/h+u:(u+o)/2}function cg(n,t){var r=n.N,i;return r?fp(r,t):(i=n.site,i.y===t?i.x:
Infinity)}function ep(n){this.site=n;this.edges=[]}function lg(n){for(var s=n[0][0],h=n[1][0],c=n[0][
1],l=n[1][1],i,r,f,e,b=pi,k=b.length,o,a,v,y,w,p;k--;)if(o=b[k],o&&o.prepare())for(v=o.edges,y=v.length,
a=0;a<y;)p=v[a].end(),f=p.x,e=p.y,w=v[++a%y].start(),i=w.x,r=w.y,(u(f-i)>t||u(e-r)>t)&&(v.splice(a,0,
new he(pg(o.site,p,u(f-s)<t&&l-e>t?{x:s,y:u(i-s)<t?r:l}:u(e-l)<t&&h-f>t?{x:u(r-l)<t?i:h,y:l}:u(f-h)<
t&&e-c>t?{x:h,y:u(i-h)<t?r:c}:u(e-c)<t&&f-s>t?{x:u(r-c)<t?i:s,y:c}:null),o.site,null)),++y)}function op(
n,t){return t.angle-n.angle}function ag(){ce(this);this.x=this.y=this.arc=this.site=this.cy=null}function ar(
n){var w=n.P,b=n.N,u,t;if(w&&b){var s=w.site,h=n.site,c=b.site;if(s!==c){var l=h.x,a=h.y,f=s.x-l,e=s.
y-a,o=c.x-l,r=c.y-a,v=2*(f*r-e*o);if(!(v>=-bo)){var k=f*f+e*e,d=o*o+r*r,y=(r*k-e*d)/v,p=(f*d-o*k)/v,
r=p+a,i=nc.pop()||new ag;for(i.arc=n,i.site=h,i.x=y+l,i.y=r+Math.sqrt(y*y+p*p),i.cy=r,n.circle=i,u=null,
t=uu._;t;)if(i.y<t.y||i.y===t.y&&i.x<=t.x)if(t.L)t=t.L;else{u=t.P;break}else if(t.R)t=t.R;else{u=t;break}
uu.insert(u,i);u||(gh=i)}}}}function vr(n){var t=n.circle;t&&(t.P||(gh=t.N),uu.remove(t),nc.push(t),
ce(t),n.circle=null)}function vg(n){for(var r=cr,e=ty(n[0][0],n[0][1],n[1][0],n[1][1]),f=r.length,i;
f--;)i=r[f],(!yg(i,n)||!e(i)||u(i.a.x-i.b.x)<t&&u(i.a.y-i.b.y)<t)&&(i.a=i.b=null,r.splice(f,1))}function yg(
n,t){var f=n.b;if(f)return!0;var i=n.a,h=t[0][0],c=t[1][0],e=t[0][1],o=t[1][1],p=n.l,w=n.r,l=p.x,a=p.
y,v=w.x,y=w.y,s=(l+v)/2,b=(a+y)/2,r,u;if(y===a){if(s<h||s>=c)return;if(l>v){if(i){if(i.y>=o)return}else
i={x:s,y:e};f={x:s,y:o}}else{if(i){if(i.y<e)return}else i={x:s,y:o};f={x:s,y:e}}}else if(r=(l-v)/(y-
a),u=b-r*s,r<-1||r>1)if(l>v){if(i){if(i.y>=o)return}else i={x:(e-u)/r,y:e};f={x:(o-u)/r,y:o}}else{if(
i){if(i.y<e)return}else i={x:(o-u)/r,y:o};f={x:(e-u)/r,y:e}}else if(a<y){if(i){if(i.x>=c)return}else
i={x:h,y:r*h+u};f={x:c,y:r*c+u}}else{if(i){if(i.x<h)return}else i={x:c,y:r*c+u};f={x:h,y:r*h+u}}return n.
a=i,n.b=f,!0}function sp(n,t){this.l=n;this.r=t;this.a=this.b=null}function fu(n,t,i,r){var u=new sp(
n,t);return cr.push(u),i&&se(u,n,t,i),r&&se(u,t,n,r),pi[n.i].edges.push(new he(u,n,t)),pi[t.i].edges.
push(new he(u,t,n)),u}function pg(n,t,i){var r=new sp(n,null);return r.a=t,r.b=i,cr.push(r),r}function se(
n,t,i,r){n.a||n.b?n.l===i?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=i)}function he(n,t,i){var r=n.a,u=n.b;this.edge=
n;this.site=t;this.angle=i?Math.atan2(i.y-t.y,i.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(
r.x-u.x,u.y-r.y)}function ic(){this._=null}function ce(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,
t){var i=t,r=t.R,u=i.U;u?u.L===i?u.L=r:u.R=r:n._=r;r.U=u;i.U=r;i.R=r.L;i.R&&(i.R.U=i);r.L=i}function ou(
n,t){var i=t,r=t.L,u=i.U;u?u.L===i?u.L=r:u.R=r:n._=r;r.U=u;i.U=r;i.L=r.R;i.L&&(i.L.U=i);r.R=i}function hp(
n){while(n.L)n=n.L;return n}function rc(n,t){var i=n.sort(wg).pop(),u,f,r,e;for(cr=[],pi=new Array(n.
length),lr=new ic,uu=new ic;;)if(r=gh,i&&(!r||i.y<r.y||i.y===r.y&&i.x<r.x))(i.x!==u||i.y!==f)&&(pi[i.
i]=new ep(i),hg(i),u=i.x,f=i.y),i=n.pop();else if(r)sg(r.arc);else break;return t&&(vg(t),lg(t)),e={
cells:pi,edges:cr},lr=uu=cr=pi=null,e}function wg(n,t){return t.y-n.y||t.x-n.x}function bg(n,t,i){return(n.
x-i.x)*(t.y-n.y)-(n.x-t.x)*(i.y-n.y)}function kg(n){return n.x}function dg(n){return n.y}function cp(
){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function hu(n,t,i,r,u,f){if(!n(t,i,r,u,f)){var o=
(i+u)*.5,s=(r+f)*.5,e=t.nodes;e[0]&&hu(n,e[0],i,r,o,s);e[1]&&hu(n,e[1],o,r,u,s);e[2]&&hu(n,e[2],i,s,
o,f);e[3]&&hu(n,e[3],o,s,u,f)}}function uc(t,i){t=n.rgb(t);i=n.rgb(i);var r=t.r,u=t.g,f=t.b,e=i.r-r,
o=i.g-u,s=i.b-f;return function(n){return"#"+ur(Math.round(r+e*n))+ur(Math.round(u+o*n))+ur(Math.round(
f+s*n))}}function lp(n,t){var u={},r={};for(var i in n)i in t?u[i]=wi(n[i],t[i]):r[i]=n[i];for(i in t)
i in n||(r[i]=t[i]);return function(n){for(i in u)r[i]=u[i](n);return r}}function vt(n,t){return t-=
n=+n,function(i){return n+t*i}}function ap(n,t){var s,u,f,h=0,c=0,r=[],e=[],o,i;for(n=n+"",t=t+"",cu.
lastIndex=0,u=0;s=cu.exec(t);++u)s.index&&r.push(t.substring(h,c=s.index)),e.push({i:r.length,x:s[0]}),
r.push(null),h=cu.lastIndex;for(h<t.length&&r.push(t.substring(h)),u=0,o=e.length;(s=cu.exec(n))&&u<
o;++u)if(i=e[u],i.x==s[0]){if(i.i)if(r[i.i+1]==null)for(r[i.i-1]+=i.x,r.splice(i.i,1),f=u+1;f<o;++f)
e[f].i--;else for(r[i.i-1]+=i.x+r[i.i+1],r.splice(i.i,2),f=u+1;f<o;++f)e[f].i-=2;else if(r[i.i+1]==null)
r[i.i]=i.x;else for(r[i.i]=i.x+r[i.i+1],r.splice(i.i+1,1),f=u+1;f<o;++f)e[f].i--;e.splice(u,1);o--;u--}
else i.x=vt(parseFloat(s[0]),parseFloat(i.x));while(u<o)i=e.pop(),r[i.i+1]==null?r[i.i]=i.x:(r[i.i]=
i.x+r[i.i+1],r.splice(i.i+1,1)),o--;return r.length===1?r[0]==null?(i=e[0].x,function(n){return i(n)+
""}):function(){return t}:function(n){for(u=0;u<o;++u)r[(i=e[u]).i]=i.x(n);return r.join("")}}function wi(
t,i){for(var r=n.interpolators.length,u;--r>=0&&!(u=n.interpolators[r](t,i)););return u}function le(
n,t){for(var u=[],r=[],e=n.length,o=t.length,f=Math.min(n.length,t.length),i=0;i<f;++i)u.push(wi(n[i],
t[i]));for(;i<e;++i)r[i]=n[i];for(;i<o;++i)r[i]=t[i];return function(n){for(i=0;i<f;++i)r[i]=u[i](n);
return r}}function tn(n){return function(t){return t<=0?0:t>=1?1:n(t)}}function yp(n){return function(
t){return 1-n(1-t)}}function pp(n){return function(t){return.5*(t<.5?n(2*t):2-n(2-2*t))}}function rn(
n){return n*n}function un(n){return n*n*n}function fn(n){if(n<=0)return 0;if(n>=1)return 1;var t=n*n,
i=t*n;return 4*(n<.5?i:3*(n-t)+i-.75)}function en(n){return function(t){return Math.pow(t,n)}}function on(
n){return 1-Math.cos(n*k)}function sn(n){return Math.pow(2,10*(n-1))}function hn(n){return 1-Math.sqrt(
1-n*n)}function cn(n,t){var i;return arguments.length<2&&(t=.45),arguments.length?i=t/b*Math.asin(1/
n):(n=1,i=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-i)*b/t)}}function ln(n){return n||
(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function an(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*
(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function vn(
t,i){t=n.hcl(t);i=n.hcl(i);var u=t.h,f=t.c,o=t.l,r=i.h-u,e=i.c-f,s=i.l-o;return isNaN(e)&&(e=0,f=isNaN(
f)?i.c:f),isNaN(r)?(r=0,u=isNaN(u)?i.h:u):r>180?r-=360:r<-180&&(r+=360),function(n){return rs(u+r*n,
f+e*n,o+s*n)+""}}function yn(t,i){t=n.hsl(t);i=n.hsl(i);var u=t.h,f=t.s,o=t.l,r=i.h-u,e=i.s-f,s=i.l-
o;return isNaN(e)&&(e=0,f=isNaN(f)?i.s:f),isNaN(r)?(r=0,u=isNaN(u)?i.h:u):r>180?r-=360:r<-180&&(r+=360),
function(n){return is(u+r*n,f+e*n,o+s*n)+""}}function pn(t,i){t=n.lab(t);i=n.lab(i);var r=t.l,u=t.a,
f=t.b,e=i.l-r,o=i.a-u,s=i.b-f;return function(n){return uv(r+e*n,u+o*n,f+s*n)+""}}function wp(n,t){return t-=
n,function(i){return Math.round(n+t*i)}}function bp(n){var t=[n.a,n.b],i=[n.c,n.d],r=dp(t),u=kp(t,i),
f=dp(wn(i,t,-u))||0;t[0]*i[1]<i[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1);this.rotate=(r?Math.atan2(t[
1],t[0]):Math.atan2(-i[0],i[1]))*s;this.translate=[n.e,n.f];this.scale=[r,f];this.skew=f?Math.atan2(
u,f)*s:0}function kp(n,t){return n[0]*t[0]+n[1]*t[1]}function dp(n){var t=Math.sqrt(kp(n,n));return t&&
(n[0]/=t,n[1]/=t),t}function wn(n,t,i){return n[0]+=i*t[0],n[1]+=i*t[1],n}function nw(t,i){var r=[],
o=[],s,c=n.transform(t),l=n.transform(i),a=c.translate,u=l.translate,h=c.rotate,f=l.rotate,p=c.skew,
v=l.skew,y=c.scale,e=l.scale;return a[0]!=u[0]||a[1]!=u[1]?(r.push("translate(",null,",",null,")"),o.
push({i:1,x:vt(a[0],u[0])},{i:3,x:vt(a[1],u[1])})):u[0]||u[1]?r.push("translate("+u+")"):r.push(""),
h!=f?(h-f>180?f+=360:f-h>180&&(h+=360),o.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:vt(h,f)})):f&&
r.push(r.pop()+"rotate("+f+")"),p!=v?o.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:vt(p,v)}):v&&r.
push(r.pop()+"skewX("+v+")"),y[0]!=e[0]||y[1]!=e[1]?(s=r.push(r.pop()+"scale(",null,",",null,")"),o.
push({i:s-4,x:vt(y[0],e[0])},{i:s-2,x:vt(y[1],e[1])})):(e[0]!=1||e[1]!=1)&&r.push(r.pop()+"scale("+e+
")"),s=o.length,function(n){for(var t=-1,i;++t<s;)r[(i=o[t]).i]=i.x(n);return r.join("")}}function bn(
n,t){return t=t-(n=+n)?1/(t-n):0,function(i){return(i-n)*t}}function kn(n,t){return t=t-(n=+n)?1/(t-
n):0,function(i){return Math.max(0,Math.min(1,(i-n)*t))}}function dn(n){for(var t=n.source,i=n.target,
u=gn(t,i),r=[t],f;t!==u;)t=t.parent,r.push(t);for(f=r.length;i!==u;)r.splice(f,0,i),i=i.parent;return r}
function tw(n){for(var i=[],t=n.parent;t!=null;)i.push(n),n=t,t=t.parent;return i.push(n),i}function gn(
n,t){if(n===t)return n;for(var r=tw(n),u=tw(t),i=r.pop(),f=u.pop(),e=null;i===f;)e=i,i=r.pop(),f=u.pop(
);return e}function ntt(n){n.fixed|=2}function ttt(n){n.fixed&=-7}function itt(n){n.fixed|=4;n.px=n.
x;n.py=n.y}function rtt(n){n.fixed&=-5}function iw(n,t,i){var f=0,e=0,u;if(n.charge=0,!n.leaf)for(var
o=n.nodes,h=o.length,s=-1,r;++s<h;)(r=o[s],r!=null)&&(iw(r,t,i),n.charge+=r.charge,f+=r.charge*r.cx,
e+=r.charge*r.cy);n.point&&(n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5),u=t*i[
n.point.index],n.charge+=n.pointCharge=u,f+=u*n.point.x,e+=u*n.point.y);n.cx=f/n.charge;n.cy=e/n.charge}
function lu(t,i){return n.rebind(t,i,"sort","children","value"),t.nodes=t,t.links=ott,t}function utt(
n){return n.children}function ftt(n){return n.value}function ett(n,t){return t.value-n.value}function ott(
t){return n.merge(t.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}}
)}))}function stt(n){return n.x}function htt(n){return n.y}function ctt(n,t,i){n.y0=t;n.y=i}function ec(
t){return n.range(t.length)}function oc(n){for(var t=-1,r=n[0].length,i=[];++t<r;)i[t]=0;return i}function ltt(
n){for(var t=1,i=0,r=n[0][1],u,f=n.length;t<f;++t)(u=n[t][1])>r&&(i=t,r=u);return i}function att(n){
return n.reduce(vtt,0)}function vtt(n,t){return n+t[1]}function ytt(n,t){return ow(n,Math.ceil(Math.
log(t.length)/Math.LN2+1))}function ow(n,t){for(var i=-1,r=+n[0],f=(n[1]-r)/t,u=[];++i<=t;)u[i]=f*i+
r;return u}function ptt(t){return[n.min(t),n.max(t)]}function sw(n,t){return n.parent==t.parent?1:2}
function sc(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function hc(n){var t=n.children,
i;return t&&(i=t.length)?t[i-1]:n._tree.thread}function ae(n,t){var i=n.children,u,f,r;if(i&&(f=i.length)
)for(r=-1;++r<f;)t(u=ae(i[r],t),n)>0&&(n=u);return n}function wtt(n,t){return n.x-t.x}function btt(n,
t){return t.x-n.x}function ktt(n,t){return n.depth-t.depth}function yt(n,t){function i(n,r){var u=n.
children,f,e,o,s;if(u&&(s=u.length))for(e=null,o=-1;++o<s;)f=u[o],i(f,e),e=f;t(n,r)}i(n,null)}function dtt(
n){for(var i=0,f=0,r=n.children,u=r.length,t;--u>=0;)t=r[u]._tree,t.prelim+=i,t.mod+=i,i+=t.shift+(f+=
t.change)}function gtt(n,t,i){n=n._tree;t=t._tree;var r=i/(t.number-n.number);n.change+=r;t.change-=
r;t.shift+=i;t.prelim+=i;t.mod+=i}function nit(n,t,i){return n._tree.ancestor.parent==t.parent?n._tree.
ancestor:i}function tit(n,t){return n.value-t.value}function cc(n,t){var i=n._pack_next;n._pack_next=
t;t._pack_prev=n;t._pack_next=i;i._pack_prev=t}function hw(n,t){n._pack_next=t;t._pack_prev=n}function cw(
n,t){var i=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>i*i+r*r}function lw(n){function h(n){c=Math.min(
n.x-n.r,c);l=Math.max(n.x+n.r,l);a=Math.min(n.y-n.r,a);v=Math.max(n.y+n.r,v)}if((u=n.children)&&(s=u.
length)){var u,c=Infinity,l=-Infinity,a=Infinity,v=-Infinity,i,r,t,f,e,o,s;if(u.forEach(iit),i=u[0],
i.x=-i.r,i.y=0,h(i),s>1&&(r=u[1],r.x=r.r,r.y=0,h(r),s>2))for(t=u[2],vw(i,r,t),h(t),cc(i,t),i._pack_prev=
t,cc(t,r),r=i._pack_next,f=3;f<s;f++){vw(i,r,t=u[f]);var y=0,p=1,w=1;for(e=r._pack_next;e!==r;e=e._pack_next,
p++)if(cw(e,t)){y=1;break}if(y==1)for(o=i._pack_prev;o!==e._pack_prev;o=o._pack_prev,w++)if(cw(o,t))
break;y?(p<w||p==w&&r.r<i.r?hw(i,r=e):hw(i=o,r),f--):(cc(i,t),r=t,h(t))}var k=(c+l)/2,d=(a+v)/2,b=0;
for(f=0;f<s;f++)t=u[f],t.x-=k,t.y-=d,b=Math.max(b,t.r+Math.sqrt(t.x*t.x+t.y*t.y));n.r=b;u.forEach(rit)}
}function iit(n){n._pack_next=n._pack_prev=n}function rit(n){delete n._pack_next;delete n._pack_prev}
function aw(n,t,i,r){var u=n.children,f,e;if(n.x=t+=r*n.x,n.y=i+=r*n.y,n.r*=r,u)for(f=-1,e=u.length;
++f<e;)aw(u[f],t,i,r)}function vw(n,t,i){var r=n.r+i.r,f=t.x-n.x,e=t.y-n.y,u,o,s,h;r&&(f||e)?(u=t.r+
i.r,o=f*f+e*e,u*=u,r*=r,s=.5+(r-u)/(2*o),h=Math.sqrt(Math.max(0,2*u*(r+o)-(r-=o)*r-u*u))/(2*o),i.x=n.
x+s*f+h*e,i.y=n.y+s*e-h*f):(i.x=n.x+r,i.y=n.y)}function uit(t){return 1+n.max(t,function(n){return n.
y})}function fit(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function yw(n){var t=n.children;
return t&&t.length?yw(t[0]):n}function pw(n){var t=n.children,i;return t&&(i=t.length)?pw(t[i-1]):n}
function lc(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function ww(n,t){var u=n.x+t[3],f=n.y+t[0],i=n.dx-
t[1]-t[3],r=n.dy-t[0]-t[2];return i<0&&(u+=i/2,i=0),r<0&&(f+=r/2,r=0),{x:u,y:f,dx:i,dy:r}}function yr(
n){var t=n[0],i=n[n.length-1];return t<i?[t,i]:[i,t]}function ve(n){return n.rangeExtent?n.rangeExtent(
):yr(n.range())}function eit(n,t,i,r){var u=i(n[0],n[1]),f=r(t[0],t[1]);return function(n){return f(
u(n))}}function ac(n,t){var i=0,r=n.length-1,u=n[i],f=n[r],e;return f<u&&(e=i,i=r,r=e,e=u,u=f,f=e),n[
i]=t.floor(u),n[r]=t.ceil(f),n}function oit(n){return n?{floor:function(t){return Math.floor(t/n)*n}
,ceil:function(t){return Math.ceil(t/n)*n}}:bw}function sit(t,i,r,u){var o=[],s=[],f=0,e=Math.min(t.
length,i.length)-1;for(t[e]<t[0]&&(t=t.slice().reverse(),i=i.slice().reverse());++f<=e;)o.push(r(t[f-
1],t[f])),s.push(u(i[f-1],i[f]));return function(i){var r=n.bisect(t,i,1,e)-1;return s[r](o[r](i))}}
function kw(n,t,i,r){function f(){var f=Math.min(n.length,t.length)>2?sit:eit,s=r?kn:bn;return e=f(n,
t,s,i),o=f(t,n,s,wi),u}function u(n){return e(n)}var e,o;return u.invert=function(n){return o(n)},u.
domain=function(t){return arguments.length?(n=t.map(Number),f()):n},u.range=function(n){return arguments.
length?(t=n,f()):t},u.rangeRound=function(n){return u.range(n).interpolate(wp)},u.clamp=function(n){
return arguments.length?(r=n,f()):r},u.interpolate=function(n){return arguments.length?(i=n,f()):i},
u.ticks=function(t){return yc(n,t)},u.tickFormat=function(t,i){return pc(n,t,i)},u.nice=function(t){
return dw(n,t),f()},u.copy=function(){return kw(n,t,i,r)},f()}function vc(t,i){return n.rebind(t,i,"range",
"rangeRound","interpolate","clamp")}function dw(n,t){return ac(n,oit(au(n,t)[2]))}function au(n,t){t==
null&&(t=10);var r=yr(n),f=r[1]-r[0],i=Math.pow(10,Math.floor(Math.log(f/t)/Math.LN10)),u=t/f*i;return u<=
.15?i*=10:u<=.35?i*=5:u<=.75&&(i*=2),r[0]=Math.ceil(r[0]/i)*i,r[1]=Math.floor(r[1]/i)*i+i*.5,r[2]=i,
r}function yc(t,i){return n.range.apply(n,au(t,i))}function pc(t,i,r){var u=au(t,i);return n.format(
r?r.replace(ps,function(n,t,i,r,f,e,o,s,h,c){return[t,i,r,f,e,o,s,h||"."+hit(c,u),c].join("")}):",."+
wc(u[2])+"f")}function wc(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function hit(n,t){var i=wc(
t[2]);return n in gw?Math.abs(i-wc(Math.max(Math.abs(t[0]),Math.abs(t[1]))))+ +(n!=="e"):i-(n==="%")
*2}function nb(t,i,r,u){function e(n){return(r?Math.log(n<0?0:n):-Math.log(n>0?0:-n))/Math.log(i)}function o(
n){return r?Math.pow(i,n):-Math.pow(i,-n)}function f(n){return t(e(n))}return f.invert=function(n){return o(
t.invert(n))},f.domain=function(n){return arguments.length?(r=n[0]>=0,t.domain((u=n.map(Number)).map(
e)),f):u},f.base=function(n){return arguments.length?(i=+n,t.domain(u.map(e)),f):i},f.nice=function(
){var n=ac(u.map(e),r?Math:tb);return t.domain(n),u=n.map(o),f},f.ticks=function(){var h=yr(u),t=[],
c=h[0],l=h[1],n=Math.floor(e(c)),s=Math.ceil(e(l)),a=i%1?2:i,f;if(isFinite(s-n)){if(r){for(;n<s;n++)
for(f=1;f<a;f++)t.push(o(n)*f);t.push(o(n))}else for(t.push(o(n));n++<s;)for(f=a-1;f>0;f--)t.push(o(
n)*f);for(n=0;t[n]<c;n++);for(s=t.length;t[s-1]>l;s--);t=t.slice(n,s)}return t},f.tickFormat=function(
t,i){if(!arguments.length)return bc;arguments.length<2?i=bc:typeof i!="function"&&(i=n.format(i));var
s=Math.max(.1,t/f.ticks().length),h=r?(u=1e-12,Math.ceil):(u=-1e-12,Math.floor),u;return function(n)
{return n/o(h(e(n)+u))<=s?i(n):""}},f.copy=function(){return nb(t.copy(),i,r,u)},vc(f,t)}function ib(
n,t,i){function r(t){return n(u(t))}var u=ye(t),f=ye(1/t);return r.invert=function(t){return f(n.invert(
t))},r.domain=function(t){return arguments.length?(n.domain((i=t.map(Number)).map(u)),r):i},r.ticks=
function(n){return yc(i,n)},r.tickFormat=function(n,t){return pc(i,n,t)},r.nice=function(n){return r.
domain(dw(i,n))},r.exponent=function(e){return arguments.length?(u=ye(t=e),f=ye(1/t),n.domain(i.map(
u)),r):t},r.copy=function(){return ib(n.copy(),t,i)},vc(r,n)}function ye(n){return function(t){return t<
0?-Math.pow(-t,n):Math.pow(t,n)}}function rb(t,i){function r(n){return u[((f.get(n)||i.t==="range"&&
f.set(n,t.push(n)))-1)%u.length]}function o(i,r){return n.range(t.length).map(function(n){return i+r*
n})}var f,u,e;return r.domain=function(n){if(!arguments.length)return t;t=[];f=new ut;for(var e=-1,o=
n.length,u;++e<o;)f.has(u=n[e])||f.set(u,t.push(u));return r[i.t].apply(r,i.a)},r.range=function(n){
return arguments.length?(u=n,e=0,i={t:"range",a:arguments},r):u},r.rangePoints=function(n,f){arguments.
length<2&&(f=0);var s=n[0],h=n[1],c=(h-s)/(Math.max(1,t.length-1)+f);return u=o(t.length<2?(s+h)/2:s+
c*f/2,c),e=0,i={t:"rangePoints",a:arguments},r},r.rangeBands=function(n,f,s){arguments.length<2&&(f=
0);arguments.length<3&&(s=f);var h=n[1]<n[0],l=n[+h],a=n[1-h],c=(a-l)/(t.length-f+2*s);return u=o(l+
c*s,c),h&&u.reverse(),e=c*(1-f),i={t:"rangeBands",a:arguments},r},r.rangeRoundBands=function(n,f,s){
arguments.length<2&&(f=0);arguments.length<3&&(s=f);var h=n[1]<n[0],c=n[+h],a=n[1-h],l=Math.floor((a-
c)/(t.length-f+2*s)),v=a-c-(t.length-f)*l;return u=o(c+Math.round(v/2),l),h&&u.reverse(),e=Math.round(
l*(1-f)),i={t:"rangeRoundBands",a:arguments},r},r.rangeBand=function(){return e},r.rangeExtent=function(
){return yr(i.a[0])},r.copy=function(){return rb(t,i)},r.domain(t)}function ub(t,i){function f(){var
f=0,e=i.length;for(r=[];++f<e;)r[f-1]=n.quantile(t,f/e);return u}function u(t){if(!isNaN(t=+t))return i[
n.bisect(r,t)]}var r;return u.domain=function(i){return arguments.length?(t=i.filter(function(n){return!isNaN(
n)}).sort(n.ascending),f()):t},u.range=function(n){return arguments.length?(i=n,f()):i},u.quantiles=
function(){return r},u.invertExtent=function(n){return n=i.indexOf(n),n<0?[NaN,NaN]:[n>0?r[n-1]:t[0],
n<r.length?r[n]:t[t.length-1]]},u.copy=function(){return ub(t,i)},f()}function fb(n,t,i){function r(
t){return i[Math.max(0,Math.min(e,Math.floor(u*(t-n))))]}function f(){return u=i.length/(t-n),e=i.length-
1,r}var u,e;return r.domain=function(i){return arguments.length?(n=+i[0],t=+i[i.length-1],f()):[n,t]}
,r.range=function(n){return arguments.length?(i=n,f()):i},r.invertExtent=function(t){return t=i.indexOf(
t),t=t<0?NaN:t/u+n,[t,t+1/u]},r.copy=function(){return fb(n,t,i)},f()}function eb(t,i){function r(r)
{if(r<=r)return i[n.bisect(t,r)]}return r.domain=function(n){return arguments.length?(t=n,r):t},r.range=
function(n){return arguments.length?(i=n,r):i},r.invertExtent=function(n){return n=i.indexOf(n),[t[n-
1],t[n]]},r.copy=function(){return eb(t,i)},r}function ob(n){function t(n){return+n}return t.invert=
t,t.domain=t.range=function(i){return arguments.length?(n=i.map(t),t):n},t.ticks=function(t){return yc(
n,t)},t.tickFormat=function(t,i){return pc(n,t,i)},t.copy=function(){return ob(n)},t}function yit(n)
{return n.innerRadius}function pit(n){return n.outerRadius}function hb(n){return n.startAngle}function cb(
n){return n.endAngle}function lb(n){function t(t){function a(){c.push("M",i(n(e),s))}for(var c=[],e=
[],h=-1,v=t.length,l,y=o(r),p=o(u);++h<v;)f.call(this,l=t[h],h)?e.push([+y.call(this,l,h),+p.call(this,
l,h)]):e.length&&(a(),e=[]);return e.length&&a(),c.length?c.join(""):null}var r=yi,u=hr,f=sr,i=g,e=i.
key,s=.7;return t.x=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.
length?(u=n,t):u},t.defined=function(n){return arguments.length?(f=n,t):f},t.interpolate=function(n)
{return arguments.length?(e=typeof n=="function"?i=n:(i=pe.get(n)||g).key,t):e},t.tension=function(n)
{return arguments.length?(s=n,t):s},t}function g(n){return n.join("L")}function wit(n){return g(n)+"Z"}
function bit(n){for(var r=0,u=n.length,t=n[0],i=[t[0],",",t[1]];++r<u;)i.push("H",(t[0]+(t=n[r])[0])
/2,"V",t[1]);return u>1&&i.push("H",t[0]),i.join("")}function kc(n){for(var i=0,u=n.length,t=n[0],r=
[t[0],",",t[1]];++i<u;)r.push("V",(t=n[i])[1],"H",t[0]);return r.join("")}function dc(n){for(var i=0,
u=n.length,t=n[0],r=[t[0],",",t[1]];++i<u;)r.push("H",(t=n[i])[0],"V",t[1]);return r.join("")}function kit(
n,t){return n.length<4?g(n):n[1]+we(n.slice(1,n.length-1),gc(n,t))}function dit(n,t){return n.length<
3?g(n):n[0]+we((n.push(n[0]),n),gc([n[n.length-2]].concat(n,[n[1]]),t))}function git(n,t){return n.length<
3?g(n):n[0]+we(n,gc(n,t))}function we(n,t){var o,h;if(t.length<1||n.length!=t.length&&n.length!=t.length+
2)return g(n);var c=n.length!=t.length,f="",s=n[0],i=n[1],e=t[0],r=e,u=1;if(c&&(f+="Q"+(i[0]-e[0]*2/
3)+","+(i[1]-e[1]*2/3)+","+i[0]+","+i[1],s=n[1],u=2),t.length>1)for(r=t[1],i=n[u],u++,f+="C"+(s[0]+e[
0])+","+(s[1]+e[1])+","+(i[0]-r[0])+","+(i[1]-r[1])+","+i[0]+","+i[1],o=2;o<t.length;o++,u++)i=n[u],
r=t[o],f+="S"+(i[0]-r[0])+","+(i[1]-r[1])+","+i[0]+","+i[1];return c&&(h=n[u],f+="Q"+(i[0]+r[0]*2/3)+
","+(i[1]+r[1]*2/3)+","+h[0]+","+h[1]),f}function gc(n,t){for(var u=[],f=(1-t)/2,r,e=n[0],i=n[1],o=1,
s=n.length;++o<s;)r=e,e=i,i=n[o],u.push([f*(i[0]-r[0]),f*(i[1]-r[1])]);return u}function ab(n){if(n.
length<3)return g(n);var o=1,s=n.length,t=n[0],i=t[0],r=t[1],u=[i,i,i,(t=n[1])[0]],f=[r,r,r,t[1]],e=
[i,",",r,"L",it(oi,u),",",it(oi,f)];for(n.push(n[s-1]);++o<=s;)t=n[o],u.shift(),u.push(t[0]),f.shift(
),f.push(t[1]),nl(e,u,f);return n.pop(),e.push("L",t),e.join("")}function nrt(n){if(n.length<4)return g(
n);for(var f=[],i=-1,e=n.length,t,r=[0],u=[0];++i<3;)t=n[i],r.push(t[0]),u.push(t[1]);for(f.push(it(
oi,r)+","+it(oi,u)),--i;++i<e;)t=n[i],r.shift(),r.push(t[0]),u.shift(),u.push(t[1]),nl(f,r,u);return f.
join("")}function trt(n){for(var f,i=-1,e=n.length,o=e+4,t,r=[],u=[];++i<4;)t=n[i%e],r.push(t[0]),u.
push(t[1]);for(f=[it(oi,r),",",it(oi,u)],--i;++i<o;)t=n[i%e],r.shift(),r.push(t[0]),u.shift(),u.push(
t[1]),nl(f,r,u);return f.join("")}function irt(n,t){var i=n.length-1;if(i)for(var e=n[0][0],o=n[0][1],
s=n[i][0]-e,h=n[i][1]-o,u=-1,r,f;++u<=i;)r=n[u],f=u/i,r[0]=t*r[0]+(1-t)*(e+f*s),r[1]=t*r[1]+(1-t)*(o+
f*h);return ab(n)}function it(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function nl(n,t,i)
{n.push("C",it(vb,t),",",it(vb,i),",",it(yb,t),",",it(yb,i),",",it(oi,t),",",it(oi,i))}function tl(n,
t){return(t[1]-n[1])/(t[0]-n[0])}function rrt(n){for(var t=0,e=n.length-1,i=[],f=n[0],r=n[1],u=i[0]=
tl(f,r);++t<e;)i[t]=(u+(u=tl(f=r,r=n[t+1])))/2;return i[t]=u,i}function urt(n){for(var c=[],e,o,s,r,
f=rrt(n),i=-1,h=n.length-1;++i<h;)e=tl(n[i],n[i+1]),u(e)<t?f[i]=f[i+1]=0:(o=f[i]/e,s=f[i+1]/e,r=o*o+
s*s,r>9&&(r=e*3/Math.sqrt(r),f[i]=r*o,f[i+1]=r*s));for(i=-1;++i<=h;)r=(n[Math.min(h,i+1)][0]-n[Math.
max(0,i-1)][0])/(6*(1+f[i]*f[i])),c.push([r||0,f[i]*r||0]);return c}function frt(n){return n.length<
3?g(n):n[0]+we(n,urt(n))}function pb(n){for(var t,u=-1,f=n.length,i,r;++u<f;)t=n[u],i=t[0],r=t[1]+ei,
t[0]=i*Math.cos(r),t[1]=i*Math.sin(r);return n}function wb(n){function t(t){function d(){p.push("M",
i(n(w),s),a,l(n(v.reverse()),s),"Z")}for(var p=[],v=[],w=[],c=-1,g=t.length,y,nt=o(f),tt=o(e),it=f===
r?function(){return b}:o(r),rt=e===u?function(){return k}:o(u),b,k;++c<g;)h.call(this,y=t[c],c)?(v.push(
[b=+nt.call(this,y,c),k=+tt.call(this,y,c)]),w.push([+it.call(this,y,c),+rt.call(this,y,c)])):v.length&&
(d(),v=[],w=[]);return v.length&&d(),p.length?p.join(""):null}var f=yi,r=yi,e=0,u=hr,h=sr,i=g,c=i.key,
l=i,a="L",s=.7;return t.x=function(n){return arguments.length?(f=r=n,t):r},t.x0=function(n){return arguments.
length?(f=n,t):f},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.
length?(e=u=n,t):u},t.y0=function(n){return arguments.length?(e=n,t):e},t.y1=function(n){return arguments.
length?(u=n,t):u},t.defined=function(n){return arguments.length?(h=n,t):h},t.interpolate=function(n)
{return arguments.length?(c=typeof n=="function"?i=n:(i=pe.get(n)||g).key,l=i.reverse||i,a=i.closed?
"M":"L",t):c},t.tension=function(n){return arguments.length?(s=n,t):s},t}function ert(n){return n.radius}
function bb(n){return[n.x,n.y]}function ort(n){return function(){var t=n.apply(this,arguments),i=t[0],
r=t[1]+ei;return[i*Math.cos(r),i*Math.sin(r)]}}function srt(){return 64}function hrt(){return"circle"}
function kb(n){var t=Math.sqrt(n/f);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+
t+"Z"}function yu(n,t){return pr(n,l),n.id=t,n}function fl(n,t,i,r){var u=n.id;return ni(n,typeof i==
"function"?function(n,f,e){n.__transition__[u].tween.set(t,r(i.call(n,n.__data__,f,e)))}:(i=r(i),function(
n){n.__transition__[u].tween.set(t,i)}))}function crt(n){return n==null&&(n=""),function(){this.textContent=
n}}function ke(t,i,r,u){var e=t.__transition__||(t.__transition__={active:0,count:0}),f=e[r],o;f||(o=
u.time,f=e[r]={tween:new ut,time:o,ease:u.ease,delay:u.delay,duration:u.duration},++e.count,n.timer(
function(u){function v(u){if(e.active>r)return a();e.active=r;f.event&&f.event.start.call(t,s,i);f.tween.
forEach(function(n,r){(r=r.call(t,s,i))&&l.push(r)});n.timer(function(){return c.c=y(u||1)?sr:y,1},0,
o)}function y(n){if(e.active!==r)return a();for(var u=n/w,h=p(u),o=l.length;o>0;)l[--o].call(t,h);if(
u>=1)return f.event&&f.event.end.call(t,s,i),a()}function a(){return--e.count?delete e[r]:delete t.__transition__,
1}var s=t.__data__,p=f.ease,h=f.delay,w=f.duration,c=ct,l=[];if(c.t=h+o,h<=u)return v(u-h);c.c=v},0,
o))}function gb(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function nk(n,t)
{n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function pt(){this._=new Date(arguments.
length>1?Date.UTC.apply(this,arguments):arguments[0])}function ki(n,t,i){function e(t){var i=n(t),r=
f(i,1);return t-i<r-t?i:r}function u(i){return t(i=n(new y(i-1)),1),i}function f(n,i){return t(n=new
y(+n),i),n}function o(n,r,f){var e=u(n),o=[];if(f>1)while(e<r)i(e)%f||o.push(new Date(+e)),t(e,1);else
while(e<r)o.push(new Date(+e)),t(e,1);return o}function s(n,t,i){try{y=pt;var r=new pt;return r._=n,
o(r,t,i)}finally{y=Date}}n.floor=n;n.round=e;n.ceil=u;n.offset=f;n.range=o;var r=n.utc=de(n);return r.
floor=r,r.round=de(e),r.ceil=de(u),r.offset=de(f),r.range=s,n}function de(n){return function(t,i){try{
y=pt;var r=new pt;return r._=t,n(r,i)._}finally{y=Date}}}function p(n){function t(t){for(var f=[],r=
-1,e=0,u,o,s;++r<i;)n.charCodeAt(r)===37&&(f.push(n.substring(e,r)),(o=ek[u=n.charAt(++r)])!=null&&(
u=n.charAt(++r)),(s=io[u])&&(u=s(t,o==null?u==="e"?" ":"0":o)),f.push(u),e=r+1);return f.push(n.substring(
e,r)),f.join("")}var i=n.length;return t.parse=function(t){var i={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},
f=ge(i,n,t,0),u,r;return f!=t.length?null:("p"in i&&(i.H=i.H%12+i.p*12),u=i.Z!=null&&y!==pt,r=new(u?
pt:y),"j"in i?r.setFullYear(i.y,0,i.j):"w"in i&&("W"in i||"U"in i)?(r.setFullYear(i.y,0,1),r.setFullYear(
i.y,0,"W"in i?(i.w+6)%7+i.W*7-(r.getDay()+5)%7:i.w+i.U*7-(r.getDay()+6)%7)):r.setFullYear(i.y,i.m,i.
d),r.setHours(i.H+Math.floor(i.Z/100),i.M+i.Z%100,i.S,i.L),u?r._:r)},t.toString=function(){return n}
,t}function ge(n,t,i,r){for(var f,e,o,u=0,s=t.length,h=i.length;u<s;){if(r>=h)return-1;if(f=t.charCodeAt(
u++),f===37){if(o=t.charAt(u++),e=wrt[o in ek?t.charAt(u++):o],!e||(r=e(n,i,r))<0)return-1}else if(f!=
i.charCodeAt(r++))return-1}return r}function no(t){return new RegExp("^(?:"+t.map(n.requote).join("|")+
")","i")}function to(n){for(var i=new ut,t=-1,r=n.length;++t<r;)i.set(n[t].toLowerCase(),t);return i}
function w(n,t,i){var u=n<0?"-":"",r=(u?-n:n)+"",f=r.length;return u+(f<i?new Array(i-f+1).join(t)+r:
r)}function brt(n,t,i){ik.lastIndex=0;var r=ik.exec(t.substring(i));return r?(n.w=vrt.get(r[0].toLowerCase(
)),i+r[0].length):-1}function krt(n,t,i){tk.lastIndex=0;var r=tk.exec(t.substring(i));return r?(n.w=
art.get(r[0].toLowerCase()),i+r[0].length):-1}function drt(n,t,i){h.lastIndex=0;var r=h.exec(t.substring(
i,i+1));return r?(n.w=+r[0],i+r[0].length):-1}function grt(n,t,i){h.lastIndex=0;var r=h.exec(t.substring(
i));return r?(n.U=+r[0],i+r[0].length):-1}function nut(n,t,i){h.lastIndex=0;var r=h.exec(t.substring(
i));return r?(n.W=+r[0],i+r[0].length):-1}function tut(n,t,i){uk.lastIndex=0;var r=uk.exec(t.substring(
i));return r?(n.m=prt.get(r[0].toLowerCase()),i+r[0].length):-1}function iut(n,t,i){rk.lastIndex=0;var
r=rk.exec(t.substring(i));return r?(n.m=yrt.get(r[0].toLowerCase()),i+r[0].length):-1}function rut(n,
t,i){return ge(n,io.c.toString(),t,i)}function uut(n,t,i){return ge(n,io.x.toString(),t,i)}function fut(
n,t,i){return ge(n,io.X.toString(),t,i)}function eut(n,t,i){h.lastIndex=0;var r=h.exec(t.substring(i,
i+4));return r?(n.y=+r[0],i+r[0].length):-1}function out(n,t,i){h.lastIndex=0;var r=h.exec(t.substring(
i,i+2));return r?(n.y=hut(+r[0]),i+r[0].length):-1}function sut(n,t,i){return/^[+-]\d{4}$/.test(t=t.
substring(i,i+5))?(n.Z=+t,i+5):-1}function hut(n){return n+(n>68?1900:2e3)}function cut(n,t,i){h.lastIndex=
0;var r=h.exec(t.substring(i,i+2));return r?(n.m=r[0]-1,i+r[0].length):-1}function ok(n,t,i){h.lastIndex=
0;var r=h.exec(t.substring(i,i+2));return r?(n.d=+r[0],i+r[0].length):-1}function lut(n,t,i){h.lastIndex=
0;var r=h.exec(t.substring(i,i+3));return r?(n.j=+r[0],i+r[0].length):-1}function sk(n,t,i){h.lastIndex=
0;var r=h.exec(t.substring(i,i+2));return r?(n.H=+r[0],i+r[0].length):-1}function aut(n,t,i){h.lastIndex=
0;var r=h.exec(t.substring(i,i+2));return r?(n.M=+r[0],i+r[0].length):-1}function vut(n,t,i){h.lastIndex=
0;var r=h.exec(t.substring(i,i+2));return r?(n.S=+r[0],i+r[0].length):-1}function yut(n,t,i){h.lastIndex=
0;var r=h.exec(t.substring(i,i+3));return r?(n.L=+r[0],i+r[0].length):-1}function put(n,t,i){var r=hk.
get(t.substring(i,i+=2).toLowerCase());return r==null?-1:(n.p=r,i)}function wut(n){var t=n.getTimezoneOffset(
),i=t>0?"-":"+",r=~~(u(t)/60),f=u(t)%60;return i+w(r,"0",2)+w(f,"0",2)}function but(n,t,i){fk.lastIndex=
0;var r=fk.exec(t.substring(i,i+1));return r?i+r[0].length:-1}function ot(n){function i(n){try{y=pt;
var i=new y;return i._=n,t(i)}finally{y=Date}}var t=p(n);return i.parse=function(n){try{y=pt;var i=t.
parse(n);return i&&i._}finally{y=Date}},i.toString=t.toString,i}function vl(n){return n.toISOString(
)}function yl(t,i,r){function u(n){return t(n)}function f(t,r){var e=t[1]-t[0],f=e/r,u=n.bisect(ro,f);
return u==ro.length?[i.year,au(t.map(function(n){return n/31536e6}),r)[2]]:u?i[f/ro[u-1]<ro[u]/f?u-1:
u]:[gut,au(t,r)[2]]}return u.invert=function(n){return di(t.invert(n))},u.domain=function(n){return arguments.
length?(t.domain(n),u):t.domain().map(di)},u.nice=function(n,t){function o(i){return!isNaN(i)&&!n.range(
i,di(+i+1),t).length}var r=u.domain(),e=yr(r),i=n==null?f(e,10):typeof n=="number"&&f(e,n);return i&&
(n=i[0],t=i[1]),u.domain(ac(r,t>1?{floor:function(t){while(o(t=n.floor(t)))t=di(t-1);return t},ceil:
function(t){while(o(t=n.ceil(t)))t=di(+t+1);return t}}:n))},u.ticks=function(n,t){var i=yr(u.domain(
)),r=n==null?f(i,10):typeof n=="number"?f(i,n):!n.range&&[{range:n},t];return r&&(n=r[0],t=r[1]),n.range(
i[0],di(+i[1]+1),t<1?1:t)},u.tickFormat=function(){return r},u.copy=function(){return yl(t.copy(),i,
r)},vc(u,t)}function di(n){return new Date(n)}function ck(n){return function(t){for(var r=n.length-1,
i=n[r];!i[1](t);)i=n[--r];return i[0](t)}}function ift(n){return JSON.parse(n.responseText)}function rft(
n){var t=rt.createRange();return t.selectNode(rt.body),t.createContextualFragment(n.responseText)}var
n={version:"3.3.10"},fo,u,st,eo,ho,na,pr,e,wu,ft,wo,ku,gi,ya,gu,ns,tf,nv,rf,ff,wr,br,hf,cf,lf,af,ct,
vs,ps,av,yf,vv,kr,ks,ds,wf,ti,d,dr,te,ci,li,lt,ii,ri,et,er,or,ui,nt,ih,nu,uh,fh,at,re,ue,fe,ee,fy,tt,
lh,vi,ah,vh,yh,ph,wh,ru,cr,pi,lr,dh,gh,uu,nc,su,cu,gp,rw,uw,fc,fw,ew,bw,gw,bc,tb,ei,sb,pe,il,vu,rl,l,
ul,bi,be,el,db,h,hk,al;Date.now||(Date.now=function(){return+new Date});var wl=[].slice,bt=function(
n){return wl.call(n)},rt=document,kt=rt.documentElement,a=window;try{bt(kt.childNodes)[0].nodeType}catch(uft)
{bt=function(n){for(var t=n.length,i=new Array(t);t--;)i[t]=n[t];return i}}try{rt.createElement("div").
style.setProperty("opacity",0,"")}catch(fft){var pu=a.Element.prototype,ak=pu.setAttribute,vk=pu.setAttributeNS,
bl=a.CSSStyleDeclaration.prototype,yk=bl.setProperty;pu.setAttribute=function(n,t){ak.call(this,n,t+
"")};pu.setAttributeNS=function(n,t,i){vk.call(this,n,t,i+"")};bl.setProperty=function(n,t,i){yk.call(
this,n,t+"",i)}}n.ascending=function(n,t){return n<t?-1:n>t?1:n>=t?0:NaN};n.descending=function(n,t)
{return t<n?-1:t>n?1:t>=n?0:NaN};n.min=function(n,t){var r=-1,f=n.length,i,u;if(arguments.length===1)
{while(++r<f&&!((i=n[r])!=null&&i<=i))i=undefined;while(++r<f)(u=n[r])!=null&&i>u&&(i=u)}else{while(
++r<f&&!((i=t.call(n,n[r],r))!=null&&i<=i))i=undefined;while(++r<f)(u=t.call(n,n[r],r))!=null&&i>u&&
(i=u)}return i};n.max=function(n,t){var r=-1,f=n.length,i,u;if(arguments.length===1){while(++r<f&&!((i=
n[r])!=null&&i<=i))i=undefined;while(++r<f)(u=n[r])!=null&&u>i&&(i=u)}else{while(++r<f&&!((i=t.call(
n,n[r],r))!=null&&i<=i))i=undefined;while(++r<f)(u=t.call(n,n[r],r))!=null&&u>i&&(i=u)}return i};n.extent=
function(n,t){var r=-1,e=n.length,i,u,f;if(arguments.length===1){while(++r<e&&!((i=f=n[r])!=null&&i<=
i))i=f=undefined;while(++r<e)(u=n[r])!=null&&(i>u&&(i=u),f<u&&(f=u))}else{while(++r<e&&!((i=f=t.call(
n,n[r],r))!=null&&i<=i))i=undefined;while(++r<e)(u=t.call(n,n[r],r))!=null&&(i>u&&(i=u),f<u&&(f=u))}
return[i,f]};n.sum=function(n,t){var u=0,f=n.length,r,i=-1;if(arguments.length===1)while(++i<f)isNaN(
r=+n[i])||(u+=r);else while(++i<f)isNaN(r=+t.call(n,n[i],i))||(u+=r);return u};n.mean=function(n,t){
var e=n.length,u,i=0,r=-1,f=0;if(arguments.length===1)while(++r<e)uo(u=n[r])&&(i+=(u-i)/++f);else while(
++r<e)uo(u=t.call(n,n[r],r))&&(i+=(u-i)/++f);return f?i:undefined};n.quantile=function(n,t){var u=(n.
length-1)*t+1,i=Math.floor(u),r=+n[i-1],f=u-i;return f?r+f*(n[i]-r):r};n.median=function(t,i){return arguments.
length>1&&(t=t.map(i)),t=t.filter(uo),t.length?n.quantile(t.sort(n.ascending),.5):undefined};n.bisector=
function(n){return{left:function(t,i,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);
r<u;){var f=r+u>>>1;n.call(t,t[f],f)<i?r=f+1:u=f}return r},right:function(t,i,r,u){for(arguments.length<
3&&(r=0),arguments.length<4&&(u=t.length);r<u;){var f=r+u>>>1;i<n.call(t,t[f],f)?u=f:r=f+1}return r}
}};fo=n.bisector(function(n){return n});n.bisectLeft=fo.left;n.bisect=n.bisectRight=fo.right;n.shuffle=
function(n){for(var t=n.length,r,i;t;)i=Math.random()*t--|0,r=n[t],n[t]=n[i],n[i]=r;return n};n.permute=
function(n,t){for(var i=t.length,r=new Array(i);i--;)r[i]=n[t[i]];return r};n.pairs=function(n){for(
var t=0,i=n.length-1,f,r=n[0],u=new Array(i<0?0:i);t<i;)u[t]=[f=r,r=n[++t]];return u};n.zip=function(
){var t,r,e;if(!(r=arguments.length))return[];for(var i=-1,u=n.min(arguments,pk),f=new Array(u);++i<
u;)for(t=-1,e=f[i]=new Array(r);++t<r;)e[t]=arguments[t][i];return f};n.transpose=function(t){return n.
zip.apply(n,t)};n.keys=function(n){var t=[];for(var i in n)t.push(i);return t};n.values=function(n){
var t=[];for(var i in n)t.push(n[i]);return t};n.entries=function(n){var t=[];for(var i in n)t.push(
{key:i,value:n[i]});return t};n.merge=function(n){for(var t=n.length,i,e=-1,r=0,u,f;++e<t;)r+=n[e].length;
for(u=new Array(r);--t>=0;)for(f=n[t],i=f.length;--i>=0;)u[--r]=f[i];return u};u=Math.abs;n.range=function(
n,t,i){if(arguments.length<3&&(i=1,arguments.length<2&&(t=n,n=0)),(t-n)/i==Infinity)throw new Error(
"infinite range");var e=[],r=wk(u(i)),o=-1,f;if(n*=r,t*=r,i*=r,i<0)while((f=n+i*++o)>t)e.push(f/r);else
while((f=n+i*++o)<t)e.push(f/r);return e};n.map=function(n){var t=new ut,i;if(n instanceof ut)n.forEach(
function(n,i){t.set(n,i)});else for(i in n)t.set(i,n[i]);return t};kl(ut,{has:function(n){return st+
n in this},get:function(n){return this[st+n]},set:function(n,t){return this[st+n]=t},remove:function(
n){return n=st+n,n in this&&delete this[n]},keys:function(){var n=[];return this.forEach(function(t)
{n.push(t)}),n},values:function(){var n=[];return this.forEach(function(t,i){n.push(i)}),n},entries:
function(){var n=[];return this.forEach(function(t,i){n.push({key:t,value:i})}),n},forEach:function(
n){for(var t in this)t.charCodeAt(0)===eo&&n.call(this,t.substring(1),this[t])}});st="\x00";eo=st.charCodeAt(
0);n.nest=function(){function r(n,e,o){if(o>=i.length)return f?f.call(t,e):u?e.sort(u):e;for(var l=-1,
y=e.length,p=i[o++],a,s,h,c=new ut,v;++l<y;)(v=c.get(a=p(s=e[l])))?v.push(s):c.set(a,[s]);return n?(
s=n(),h=function(t,i){s.set(t,r(n,i,o))}):(s={},h=function(t,i){s[t]=r(n,i,o)}),c.forEach(h),s}function o(
n,t){if(t>=i.length)return n;var r=[],u=e[t++];return n.forEach(function(n,i){r.push({key:n,values:o(
i,t)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var t={},i=[],e=[],u,f;return t.map=function(
n,t){return r(t,n,0)},t.entries=function(t){return o(r(n.map,t,0),0)},t.key=function(n){return i.push(
n),t},t.sortKeys=function(n){return e[i.length-1]=n,t},t.sortValues=function(n){return u=n,t},t.rollup=
function(n){return f=n,t},t};n.set=function(n){var i=new oo,t,r;if(n)for(t=0,r=n.length;t<r;++t)i.add(
n[t]);return i};kl(oo,{has:function(n){return st+n in this},add:function(n){return this[st+n]=!0,n},
remove:function(n){return n=st+n,n in this&&delete this[n]},values:function(){var n=[];return this.forEach(
function(t){n.push(t)}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===eo&&n.call(this,t.
substring(1))}});n.behavior={};n.rebind=function(n,t){for(var i=1,u=arguments.length,r;++i<u;)n[r=arguments[
i]]=bk(n,t,t[r]);return n};ho=["webkit","ms","moz","Moz","o","O"];n.dispatch=function(){for(var n=new
co,t=-1,i=arguments.length;++t<i;)n[arguments[t]]=dl(n);return n};co.prototype.on=function(n,t){var r=
n.indexOf("."),i="";if(r>=0&&(i=n.substring(r+1),n=n.substring(0,r)),n)return arguments.length<2?this[
n].on(i):this[n].on(i,t);if(arguments.length===2){if(t==null)for(n in this)if(this.hasOwnProperty(n))
this[n].on(i,null);return this}};n.event=null;n.requote=function(n){return n.replace(na,"\\$&")};na=
/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;pr={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var
i in t)n[i]=t[i]};var ao=function(n,t){return t.querySelector(n)},vo=function(n,t){return t.querySelectorAll(
n)},kk=kt[so(kt,"matchesSelector")],ta=function(n,t){return kk.call(n,t)};typeof Sizzle=="function"&&
(ao=function(n,t){return Sizzle(n,t)[0]||null},vo=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))}
,ta=Sizzle.matchesSelector);n.selection=function(){return wo};e=n.selection.prototype=[];e.select=function(
n){var o=[],i,f,e,t,r,s,u,h;for(n=yo(n),r=-1,s=this.length;++r<s;)for(o.push(i=[]),i.parentNode=(e=this[
r]).parentNode,u=-1,h=e.length;++u<h;)(t=e[u])?(i.push(f=n.call(t,t.__data__,u,r)),f&&"__data__"in t&&
(f.__data__=t.__data__)):i.push(null);return gt(o)};e.selectAll=function(n){var u=[],f,t,i,e;for(n=ia(
n),i=-1,e=this.length;++i<e;)for(var o=this[i],r=-1,s=o.length;++r<s;)(t=o[r])&&(u.push(f=bt(n.call(
t,t.__data__,r,i))),f.parentNode=t);return gt(u)};wu={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",
xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};
n.ns={prefix:wu,qualify:function(n){var t=n.indexOf(":"),i=n;return t>=0&&(i=n.substring(0,t),n=n.substring(
t+1)),wu.hasOwnProperty(i)?{space:wu[i],local:n}:n}};e.attr=function(t,i){if(arguments.length<2){if(
typeof t=="string"){var r=this.node();return t=n.ns.qualify(t),t.local?r.getAttributeNS(t.space,t.local):
r.getAttribute(t)}for(i in t)this.each(ra(i,t[i]));return this}return this.each(ra(t,i))};e.classed=
function(n,t){if(arguments.length<2){if(typeof n=="string"){var r=this.node(),u=(n=n.trim().split(/^|\s+/g))
.length,i=-1;if(t=r.classList){while(++i<u)if(!t.contains(n[i]))return!1}else for(t=r.getAttribute("class");
++i<u;)if(!fa(n[i]).test(t))return!1;return!0}for(t in n)this.each(ea(t,n[t]));return this}return this.
each(ea(n,t))};e.style=function(n,t,i){var r=arguments.length;if(r<3){if(typeof n!="string"){r<2&&(t=
"");for(i in n)this.each(oa(i,n[i],t));return this}if(r<2)return a.getComputedStyle(this.node(),null).
getPropertyValue(n);i=""}return this.each(oa(n,t,i))};e.property=function(n,t){if(arguments.length<2)
{if(typeof n=="string")return this.node()[n];for(t in n)this.each(sa(t,n[t]));return this}return this.
each(sa(n,t))};e.text=function(n){return arguments.length?this.each(typeof n=="function"?function(){
var t=n.apply(this,arguments);this.textContent=t==null?"":t}:n==null?function(){this.textContent=""}
:function(){this.textContent=n}):this.node().textContent};e.html=function(n){return arguments.length?
this.each(typeof n=="function"?function(){var t=n.apply(this,arguments);this.innerHTML=t==null?"":t}
:n==null?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML};e.append=
function(n){return n=ha(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})}
;e.insert=function(n,t){return n=ha(n),t=yo(t),this.select(function(){return this.insertBefore(n.apply(
this,arguments),t.apply(this,arguments)||null)})};e.remove=function(){return this.each(function(){var
n=this.parentNode;n&&n.removeChild(this)})};e.data=function(n,t){function o(n,i){var r,l=n.length,a=
i.length,k=Math.min(l,a),v=new Array(a),c=new Array(a),y=new Array(l),u,o;if(t){var p=new ut,w=new ut,
b=[],e;for(r=-1;++r<l;)e=t.call(u=n[r],u.__data__,r),p.has(e)?y[r]=u:p.set(e,u),b.push(e);for(r=-1;++r<
a;)e=t.call(i,o=i[r],r),(u=p.get(e))?(v[r]=u,u.__data__=o):w.has(e)||(c[r]=po(o)),w.set(e,o),p.remove(
e);for(r=-1;++r<l;)p.has(b[r])&&(y[r]=n[r])}else{for(r=-1;++r<k;)u=n[r],o=i[r],u?(u.__data__=o,v[r]=
u):c[r]=po(o);for(;r<a;++r)c[r]=po(i[r]);for(;r<l;++r)y[r]=n[r]}c.update=v;c.parentNode=v.parentNode=
y.parentNode=n.parentNode;s.push(c);f.push(v);h.push(y)}var i=-1,u=this.length,r,e;if(!arguments.length)
{for(n=new Array(u=(r=this[0]).length);++i<u;)(e=r[i])&&(n[i]=e.__data__);return n}var s=la([]),f=gt(
[]),h=gt([]);if(typeof n=="function")while(++i<u)o(r=this[i],n.call(r,r.parentNode.__data__,i));else
while(++i<u)o(r=this[i],n);return f.enter=function(){return s},f.exit=function(){return h},f};e.datum=
function(n){return arguments.length?this.property("__data__",n):this.property("__data__")};e.filter=
function(n){var e=[],u,f,r,t,o,i,s;for(typeof n!="function"&&(n=ca(n)),t=0,o=this.length;t<o;t++)for(
e.push(u=[]),u.parentNode=(f=this[t]).parentNode,i=0,s=f.length;i<s;i++)(r=f[i])&&n.call(r,r.__data__,
i,t)&&u.push(r);return gt(e)};e.order=function(){for(var i=-1,f=this.length;++i<f;)for(var r=this[i],
u=r.length-1,n=r[u],t;--u>=0;)(t=r[u])&&(n&&n!==t.nextSibling&&n.parentNode.insertBefore(t,n),n=t);return this}
;e.sort=function(n){n=gk.apply(this,arguments);for(var t=-1,i=this.length;++t<i;)this[t].sort(n);return this.
order()};e.each=function(n){return ni(this,function(t,i,r){n.call(t,t.__data__,i,r)})};e.call=function(
n){var t=bt(arguments);return n.apply(t[0]=this,t),this};e.empty=function(){return!this.node()};e.node=
function(){for(var i,n=0,r=this.length;n<r;n++)for(var u=this[n],t=0,f=u.length;t<f;t++)if(i=u[t],i)
return i;return null};e.size=function(){var n=0;return this.each(function(){++n}),n};ft=[];n.selection.
enter=la;n.selection.enter.prototype=ft;ft.append=e.append;ft.empty=e.empty;ft.node=e.node;ft.call=e.
call;ft.size=e.size;ft.select=function(n){for(var i,h,e=[],r,o,s,t,u,f=-1,c=this.length;++f<c;)for(s=
(t=this[f]).update,e.push(r=[]),r.parentNode=t.parentNode,i=-1,h=t.length;++i<h;)(u=t[i])?(r.push(s[
i]=o=n.call(t.parentNode,u.__data__,i,f)),o.__data__=u.__data__):r.push(null);return gt(e)};ft.insert=
function(n,t){return arguments.length<2&&(t=nd(this)),e.insert.call(this,n,t)};e.transition=function(
){for(var i=bi||++ul,r=[],u,n,o=be||{time:Date.now(),ease:fn,delay:0,duration:250},f=-1,s=this.length;
++f<s;){r.push(u=[]);for(var e=this[f],t=-1,h=e.length;++t<h;)(n=e[t])&&ke(n,t,i,o),u.push(n)}return yu(
r,i)};e.interrupt=function(){return this.each(bu)};n.select=function(n){var t=[typeof n=="string"?ao(
n,rt):n];return t.parentNode=kt,gt([t])};n.selectAll=function(n){var t=bt(typeof n=="string"?vo(n,rt):
n);return t.parentNode=kt,gt([t])};wo=n.select(kt);e.on=function(n,t,i){var r=arguments.length;if(r<
3){if(typeof n!="string"){r<2&&(t=!1);for(i in n)this.each(aa(i,n[i],t));return this}if(r<2)return(r=
this.node()["__on"+n])&&r._;i=!1}return this.each(aa(n,t,i))};ku=n.map({mouseenter:"mouseover",mouseleave:
"mouseout"});ku.forEach(function(n){"on"+n in rt&&ku.remove(n)});gi="onselectstart"in rt?null:so(kt.
style,"userSelect");ya=0;n.mouse=function(n){return pa(n,gl())};gu=/WebKit/.test(a.navigator.userAgent)?
-1:0;n.touches=function(n,t){return arguments.length<2&&(t=gl().touches),t?bt(t).map(function(t){var
i=pa(n,t);return i.identifier=t.identifier,i}):[]};n.behavior.drag=function(){function i(){this.on("mousedown.drag",
f).on("touchstart.drag",e)}function o(){return n.event.changedTouches[0].identifier}function s(t,i){
return n.touches(t).filter(function(n){return n.identifier===i})[0]}function u(i,u,f,e){return function(
){function d(){var n=u(y,h),t=n[0]-s[0],i=n[1]-s[1];p|=t|i;s=n;v({type:"drag",x:n[0]+o[0],y:n[1]+o[1],
dx:t,dy:i})}function g(){b.on(f+"."+c,null).on(e+"."+c,null);k(p&&n.event.target===w);v({type:"dragend"})}
var l=this,y=l.parentNode,v=r.of(l,arguments),w=n.event.target,h=i(),c=h==null?"drag":"drag-"+h,s=u(
y,h),p=0,o,b=n.select(a).on(f+"."+c,d).on(e+"."+c,g),k=du();t?(o=t.apply(l,arguments),o=[o.x-s[0],o.
y-s[1]]):o=[0,0];v({type:"dragstart"})}}var r=lo(i,"drag","dragstart","dragend"),t=null,f=u(c,n.mouse,
"mousemove","mouseup"),e=u(o,s,"touchmove","touchend");return i.origin=function(n){return arguments.
length?(t=n,i):t},n.rebind(i,r,"on")};var f=Math.PI,b=2*f,k=f/2,t=1e-6,bo=t*t,r=f/180,s=180/f;var nf=
Math.SQRT2,go=2,ga=4;n.interpolateZoom=function(n,t){function p(n){var t=n*y,r,h;return v?(r=ko(u),h=
i/(go*c)*(r*id(nf*t+u)-ka(u)),[o+h*f,s+h*e,i*r/ko(nf*t+u)]):[o+n*f,s+n*e,i*Math.exp(nf*t)]}var o=n[0],
s=n[1],i=n[2],w=t[0],b=t[1],r=t[2],f=w-o,e=b-s,h=f*f+e*e,c=Math.sqrt(h),l=(r*r-i*i+ga*h)/(2*i*go*c),
a=(r*r-i*i-ga*h)/(2*r*go*c),u=Math.log(Math.sqrt(l*l+1)-l),k=Math.log(Math.sqrt(a*a+1)-a),v=k-u,y=(v||
Math.log(r/i))/nf;return p.duration=y*1e3,p};n.behavior.zoom=function(){function i(n){n.on(k,ft).on(
nv+".zoom",ht).on(d,ot).on("dblclick.zoom",ct).on(g,et)}function p(n){return[(n[0]-t.x)/t.k,(n[1]-t.
y)/t.k]}function st(n){return[n[0]*t.k+t.x,n[1]*t.k+t.y]}function w(n){t.k=Math.max(c[0],Math.min(c[
1],n))}function o(n,i){i=st(i);t.x+=n[0]-i[0];t.y+=n[1]-i[1]}function rt(){v&&v.domain(tt.range().map(
function(n){return(n-t.x)/t.k}).map(tt.invert));y&&y.domain(it.range().map(function(n){return(n-t.y)
/t.k}).map(it.invert))}function f(n){n({type:"zoomstart"})}function r(n){rt();n({type:"zoom",scale:t.
k,translate:[t.x,t.y]})}function e(n){n({type:"zoomend"})}function ft(){function y(){s=1;o(n.mouse(t),
l);r(i)}function w(){c.on(d,a===t?ot:null).on(ut,null);v(s&&n.event.target===h);e(i)}var t=this,i=u.
of(t,arguments),h=n.event.target,s=0,c=n.select(a).on(d,y).on(ut,w),l=p(n.mouse(t)),v=du();bu.call(t);
f(i)}function et(){function d(){var r=n.touches(s);return l=t.k,r.forEach(function(n){n.identifier in
i&&(i[n.identifier]=p(n))}),r}function tt(){for(var u,s,f,a,l=n.event.changedTouches,e=0,b=l.length;
e<b;++e)i[l[e].identifier]=null;if(u=d(),s=Date.now(),u.length===1)s-nt<500&&(f=u[0],a=i[f.identifier],
w(t.k*2),o(f,a),dt(),r(h)),nt=s;else if(u.length>1){var f=u[0],v=u[1],y=f[0]-v[0],p=f[1]-v[1];c=y*y+
p*p}}function ot(){for(var a,p,y=n.touches(s),t,f,u,e,v=0,b=y.length;v<b;++v,e=null)if(u=y[v],e=i[u.
identifier]){if(f)break;t=u;f=e}e&&(a=(a=u[0]-t[0])*a+(a=u[1]-t[1])*a,p=c&&Math.sqrt(a/c),t=[(t[0]+u[
0])/2,(t[1]+u[1])/2],f=[(f[0]+e[0])/2,(f[1]+e[1])/2],w(p*l));nt=null;o(t,f);r(h)}function st(){var r,
t,u,f;if(n.event.touches.length){for(r=n.event.changedTouches,t=0,u=r.length;t<u;++t)delete i[r[t].identifier];
for(f in i)return void d()}it.on(y,null).on(b,null);rt.on(k,ft).on(g,et);ut();e(h)}var s=this,h=u.of(
s,arguments),i={},c=0,l,v=n.event.changedTouches[0].identifier,y="touchmove.zoom-"+v,b="touchend.zoom-"+
v,it=n.select(a).on(y,ot).on(b,st),rt=n.select(s).on(k,null).on(g,tt),ut=du();bu.call(s);tt();f(h)}function ht(
){var i=u.of(this,arguments),h;l?clearTimeout(l):(bu.call(this),f(i));l=setTimeout(function(){l=null;
e(i)},50);dt();h=b||n.mouse(this);s||(s=p(h));w(Math.pow(2,tf()*.002)*t.k);o(h,s);r(i)}function ot()
{s=null}function ct(){var i=u.of(this,arguments),s=n.mouse(this),c=p(s),h=Math.log(t.k)/Math.LN2;f(i);
w(Math.pow(2,n.event.shiftKey?Math.ceil(h)-1:Math.floor(h)+1));o(s,c);r(i);e(i)}var t={x:0,y:0,k:1},
s,b,h=[960,500],c=ns,k="mousedown.zoom",d="mousemove.zoom",ut="mouseup.zoom",l,g="touchstart.zoom",nt,
u=lo(i,"zoomstart","zoom","zoomend"),tt,v,it,y;return i.event=function(i){i.each(function(){var i=u.
of(this,arguments),o=t;bi?n.select(this).transition().each("start.zoom",function(){t=this.__chart__||
{x:0,y:0,k:1};f(i)}).tween("zoom:zoom",function(){var u=h[0],s=h[1],f=u/2,e=s/2,c=n.interpolateZoom(
[(f-t.x)/t.k,(e-t.y)/t.k,u/t.k],[(f-o.x)/o.k,(e-o.y)/o.k,u/o.k]);return function(n){var o=c(n),s=u/o[
2];this.__chart__=t={x:f-o[0]*s,y:e-o[1]*s,k:s};r(i)}}).each("end.zoom",function(){e(i)}):(this.__chart__=
t,f(i),r(i),e(i))})},i.translate=function(n){return arguments.length?(t={x:+n[0],y:+n[1],k:t.k},rt(),
i):[t.x,t.y]},i.scale=function(n){return arguments.length?(t={x:t.x,y:t.y,k:+n},rt(),i):t.k},i.scaleExtent=
function(n){return arguments.length?(c=n==null?ns:[+n[0],+n[1]],i):c},i.center=function(n){return arguments.
length?(b=n&&[+n[0],+n[1]],i):b},i.size=function(n){return arguments.length?(h=n&&[+n[0],+n[1]],i):h}
,i.x=function(n){return arguments.length?(v=n,tt=n.copy(),t={x:0,y:0,k:1},i):v},i.y=function(n){return arguments.
length?(y=n,it=n.copy(),t={x:0,y:0,k:1},i):y},n.rebind(i,u,"on")};ns=[0,Infinity];nv="onwheel"in rt?
(tf=function(){return-n.event.deltaY*(n.event.deltaMode?120:1)},"wheel"):"onmousewheel"in rt?(tf=function(
){return n.event.wheelDelta},"mousewheel"):(tf=function(){return-n.event.detail},"MozMousePixelScroll")
;nr.prototype.toString=function(){return this.rgb()+""};n.hsl=function(n,t,i){return arguments.length===
1?n instanceof ts?tr(n.h,n.s,n.l):ov(""+n,sv,tr):tr(+n,+t,+i)};rf=ts.prototype=new nr;rf.brighter=function(
n){return n=Math.pow(.7,arguments.length?n:1),tr(this.h,this.s,this.l/n)};rf.darker=function(n){return n=
Math.pow(.7,arguments.length?n:1),tr(this.h,this.s,n*this.l)};rf.rgb=function(){return is(this.h,this.
s,this.l)};n.hcl=function(t,i,r){return arguments.length===1?t instanceof uf?ir(t.h,t.c,t.l):t instanceof
ef?fv(t.l,t.a,t.b):fv((t=hv((t=n.rgb(t)).r,t.g,t.b)).l,t.a,t.b):ir(+t,+i,+r)};ff=uf.prototype=new nr;
ff.brighter=function(n){return ir(this.h,this.c,Math.min(100,this.l+of*(arguments.length?n:1)))};ff.
darker=function(n){return ir(this.h,this.c,Math.max(0,this.l-of*(arguments.length?n:1)))};ff.rgb=function(
){return rs(this.h,this.c,this.l).rgb()};n.lab=function(t,i,r){return arguments.length===1?t instanceof
ef?rr(t.l,t.a,t.b):t instanceof uf?rs(t.l,t.c,t.h):hv((t=n.rgb(t)).r,t.g,t.b):rr(+t,+i,+r)};var of=18,
tv=.95047,iv=1,rv=1.08883,us=ef.prototype=new nr;us.brighter=function(n){return rr(Math.min(100,this.
l+of*(arguments.length?n:1)),this.a,this.b)};us.darker=function(n){return rr(Math.max(0,this.l-of*(arguments.
length?n:1)),this.a,this.b)};us.rgb=function(){return uv(this.l,this.a,this.b)};n.rgb=function(n,t,i)
{return arguments.length===1?n instanceof ss?ht(n.r,n.g,n.b):ov(""+n,ht,is):ht(~~n,~~t,~~i)};wr=ss.prototype=
new nr;wr.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var i=this.r,r=this.g,u=this.b,t=
30;return!i&&!r&&!u?ht(t,t,t):(i&&i<t&&(i=t),r&&r<t&&(r=t),u&&u<t&&(u=t),ht(Math.min(255,~~(i/n)),Math.
min(255,~~(r/n)),Math.min(255,~~(u/n))))};wr.darker=function(n){return n=Math.pow(.7,arguments.length?
n:1),ht(~~(n*this.r),~~(n*this.g),~~(n*this.b))};wr.hsl=function(){return sv(this.r,this.g,this.b)};
wr.toString=function(){return"#"+ur(this.r)+ur(this.g)+ur(this.b)};br=n.map({aliceblue:15792383,antiquewhite:
16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:
16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:
8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,
cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:
11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:
10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:
3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,
dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:
2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:
8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,
indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,
lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:
16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,
lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:
11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,
mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,
mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:
1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:
16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:
15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:
16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:
12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,
seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,
slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:
14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:
16119285,yellow:16776960,yellowgreen:10145074});br.forEach(function(n,t){br.set(n,ev(t))});n.functor=
o;n.xhr=ls(v);n.dsv=function(t,i){function r(t,r,u){arguments.length<3&&(u=r,r=null);var f=n.xhr(t,i,
u);return f.row=function(n){return arguments.length?f.response((r=n)==null?o:s(n)):r},f.row(r)}function o(
n){return r.parse(n.responseText)}function s(n){return function(t){return r.parse(t.responseText,n)}
}function h(n){return n.map(u).join(t)}function u(n){return f.test(n)?'"'+n.replace(/\"/g,'""')+'"':
n}var f=new RegExp('["'+t+"\n]"),e=t.charCodeAt(0);return r.parse=function(n,t){var i;return r.parseRows(
n,function(n,r){if(i)return i(n,r-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.
stringify(n)+": d["+t+"]"}).join(",")+"}");i=t?function(n,i){return t(u(n),i)}:u})},r.parseRows=function(
n,t){function l(){var f,t,u,c;if(i>=s)return o;if(r)return r=!1,h;if(f=i,n.charCodeAt(f)===34){for(t=
f;t++<s;)if(n.charCodeAt(t)===34){if(n.charCodeAt(t+1)!==34)break;++t}return i=t+2,u=n.charCodeAt(t+
1),u===13?(r=!0,n.charCodeAt(t+2)===10&&++i):u===10&&(r=!0),n.substring(f+1,t).replace(/""/g,'"')}while(
i<s){if(u=n.charCodeAt(i++),c=1,u===10)r=!0;else if(u===13)r=!0,n.charCodeAt(i)===10&&(++i,++c);else
if(u!==e)continue;return n.substring(f,i-c)}return n.substring(f)}for(var h={},o={},c=[],s=n.length,
i=0,a=0,u,r,f;(u=l())!==o;){for(f=[];u!==h&&u!==o;)f.push(u),u=l();(!t||(f=t(f,a++)))&&c.push(f)}return c}
,r.format=function(n){if(Array.isArray(n[0]))return r.formatRows(n);var f=new oo,i=[];return n.forEach(
function(n){for(var t in n)f.has(t)||i.push(f.add(t))}),[i.map(u).join(t)].concat(n.map(function(n){
return i.map(function(t){return u(n[t])}).join(t)})).join("\n")},r.formatRows=function(n){return n.map(
h).join("\n")},r};n.csv=n.dsv(",","text/csv");n.tsv=n.dsv("\t","text/tab-separated-values");vs=a[so(
a,"requestAnimationFrame")]||function(n){setTimeout(n,17)};n.timer=function(n,t,i){var u=arguments.length,
f,r;u<2&&(t=0);u<3&&(i=Date.now());f=i+t;r={c:n,t:f,f:!1,n:null};cf?cf.n=r:hf=r;cf=r;lf||(af=clearTimeout(
af),lf=1,vs(ys))};n.timer.flush=function(){cv();lv()};var ud=".",fd=",",vf=[3,3],ed="$",od=["y","z",
"a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(sd);n.formatPrefix=function(t,i){var
r=0;return t&&(t<0&&(t*=-1),i&&(t=n.round(t,ws(t,i))),r=1+Math.floor(1e-12+Math.log(t)/Math.LN10),r=
Math.max(-24,Math.min(24,Math.floor((r<=0?r+1:r-1)/3)*3))),od[8+r/3]};n.round=function(n,t){return t?
Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};n.format=function(t){var u=ps.exec(t),v=u[1]||" ",
e=u[2]||">",p=u[3]||"",f=u[4]||"",s=u[5],h=+u[6],c=u[7],r=u[8],i=u[9],o=1,l="",y=!1,a;r&&(r=+r.substring(
1));(s||v==="0"&&e==="=")&&(s=v="0",e="=",c&&(h-=Math.floor((h-1)/4)));switch(i){case"n":c=!0;i="g";
break;case"%":o=100;l="%";i="f";break;case"p":o=100;l="%";i="r";break;case"b":case"o":case"x":case"X":
f==="#"&&(f="0"+i.toLowerCase());case"c":case"d":y=!0;r=0;break;case"s":o=-1;i="r"}return f==="#"?f=
"":f==="$"&&(f=ed),i!="r"||r||(i="g"),r!=null&&(i=="g"?r=Math.max(1,Math.min(21,r)):(i=="e"||i=="f")&&
(r=Math.max(0,Math.min(20,r)))),i=av.get(i)||hd,a=s&&c,function(t){var u,g,k,w;if(y&&t%1)return"";u=
t<0||t===0&&1/t<0?(t=-t,"-"):p;o<0?(g=n.formatPrefix(t,r),t=g.scale(t),l=g.symbol):t*=o;t=i(t,r);var
d=t.lastIndexOf("."),b=d<0?t:t.substring(0,d),nt=d<0?"":ud+t.substring(d+1);return!s&&c&&(b=yf(b)),k=
f.length+b.length+nt.length+(a?0:u.length),w=k<h?new Array(k=h-k+1).join(v):"",a&&(b=yf(w+b)),u+=f,t=
b+nt,(e==="<"?u+t+w:e===">"?w+u+t:e==="^"?w.substring(0,k>>=1)+u+t+w.substring(k):u+(a?t:w+t))+l}};ps=
/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;av=n.map({b:function(n){return n.
toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(
n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.
toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(
t,i){return(t=n.round(t,ws(t,i))).toFixed(Math.max(0,Math.min(20,ws(t*(1+1e-15),i))))}});yf=v;vf&&(vv=
vf.length,yf=function(n){for(var i=n.length,r=[],u=0,t=vf[0];i>0&&t>0;)r.push(n.substring(i-=t,i+t)),
t=vf[u=(u+1)%vv];return r.reverse().join(fd)});n.geo={};bs.prototype={s:0,t:0,add:function(n){yv(n,this.
t,kr);yv(kr.s,this.s,this);this.s?this.t+=kr.t:this.s=kr.t},reset:function(){this.s=this.t=0},valueOf:
function(){return this.s}};kr=new bs;n.geo.stream=function(n,t){n&&ks.hasOwnProperty(n.type)?ks[n.type](
n,t):pf(n,t)};ks={Feature:function(n,t){pf(n.geometry,t)},FeatureCollection:function(n,t){for(var i=
n.features,r=-1,u=i.length;++r<u;)pf(i[r].geometry,t)}};ds={Sphere:function(n,t){t.sphere()},Point:function(
n,t){n=n.coordinates;t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var i=n.coordinates,r=-1,
u=i.length;++r<u;)n=i[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){gs(n.coordinates,t,0)},MultiLineString:
function(n,t){for(var i=n.coordinates,r=-1,u=i.length;++r<u;)gs(i[r],t,0)},Polygon:function(n,t){pv(
n.coordinates,t)},MultiPolygon:function(n,t){for(var i=n.coordinates,r=-1,u=i.length;++r<u;)pv(i[r],
t)},GeometryCollection:function(n,t){for(var i=n.geometries,r=-1,u=i.length;++r<u;)pf(i[r],t)}};n.geo.
area=function(t){return wf=0,n.geo.stream(t,d),wf};ti=new bs;d={sphere:function(){wf+=4*f},point:c,lineStart:
c,lineEnd:c,polygonStart:function(){ti.reset();d.lineStart=cd},polygonEnd:function(){var n=2*ti;wf+=
n<0?4*f+n:n;d.lineStart=d.lineEnd=d.point=c}};n.geo.bounds=function(){function w(n,t){v.push(l=[i=n,
f=n]);t<o&&(o=t);t>h&&(h=t)}function g(n,t){var d=hi([n*r,t*r]),v;if(y){var b=fr(y,d),nt=[b[1],-b[0],
0],c=fr(nt,b);df(c);c=gf(c);var g=n-a,p=g>0?1:-1,l=c[0]*s*p,k=u(g)>180;k^(p*a<l&&l<p*n)?(v=c[1]*s,v>
h&&(h=v)):(l=(l+360)%360-180,k^(p*a<l&&l<p*n))?(v=-c[1]*s,v<o&&(o=v)):(t<o&&(o=t),t>h&&(h=t));k?n<a?
e(i,n)>e(i,f)&&(f=n):e(n,f)>e(i,f)&&(i=n):f>=i?(n<i&&(i=n),n>f&&(f=n)):n>a?e(i,n)>e(i,f)&&(f=n):e(n,
f)>e(i,f)&&(i=n)}else w(n,t);y=d;a=n}function nt(){c.point=g}function tt(){l[0]=i;l[1]=f;c.point=w;y=
null}function it(n,t){if(y){var i=n-a;p+=u(i)>180?i+(i>0?360:-360):i}else b=n,k=t;d.point(n,t);g(n,t)}
function ut(){d.lineStart()}function ft(){it(b,k);d.lineEnd();u(p)>t&&(i=-(f=180));l[0]=i;l[1]=f;y=null}
function e(n,t){return(t-=n)<0?t+360:t}function et(n,t){return n[0]-t[0]}function rt(n,t){return t[0]<=
t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var i,o,f,h,a,b,k,y,p,v,l,c={point:w,lineStart:nt,lineEnd:tt,polygonStart:
function(){c.point=it;c.lineStart=ut;c.lineEnd=ft;p=0;d.polygonStart()},polygonEnd:function(){d.polygonEnd(
);c.point=w;c.lineStart=nt;c.lineEnd=tt;ti<0?(i=-(f=180),o=-(h=90)):p>t?h=90:p<-t&&(o=-90);l[0]=i;l[
1]=f}};return function(t){var a,p,w;if(h=f=-(i=o=Infinity),v=[],n.geo.stream(t,c),a=v.length,a){v.sort(
et);for(var s=1,r=v[0],u,y=[r];s<a;++s)u=v[s],rt(u[0],r)||rt(u[1],r)?(e(r[0],u[1])>e(r[0],r[1])&&(r[
1]=u[1]),e(u[0],r[1])>e(r[0],r[1])&&(r[0]=u[0])):y.push(r=u);p=-Infinity;for(var a=y.length-1,s=0,r=
y[a],u;s<=a;r=u,++s)u=y[s],(w=e(r[1],u[0]))>p&&(p=w,i=u[0],f=r[1])}return v=l=null,i===Infinity||o===
Infinity?[[NaN,NaN],[NaN,NaN]]:[[i,o],[f,h]]}}();n.geo.centroid=function(i){dr=te=ci=li=lt=ii=ri=et=
er=or=ui=0;n.geo.stream(i,nt);var r=er,u=or,f=ui,e=r*r+u*u+f*f;return e<bo&&(r=ii,u=ri,f=et,te<t&&(r=
ci,u=li,f=lt),e=r*r+u*u+f*f,e<bo)?[NaN,NaN]:[Math.atan2(u,r)*s,si(f/Math.sqrt(e))*s]};nt={sphere:c,point:
th,lineStart:wv,lineEnd:bv,polygonStart:function(){nt.lineStart=ld},polygonEnd:function(){nt.lineStart=
wv}};ih=gv(sr,pd,bd,[-f,-f/2]);nu=1e9;n.geo.clipExtent=function(){var t,i,r,u,n,f,e={stream:function(
t){return n&&(n.valid=!1),n=f(t),n.valid=!0,n},extent:function(o){return arguments.length?(f=iy(t=+o[
0][0],i=+o[0][1],r=+o[1][0],u=+o[1][1]),n&&(n.valid=!1,n=null),e):[[t,i],[r,u]]}};return e.extent([[
0,0],[960,500]])};(n.geo.conicEqualArea=function(){return rh(uy)}).raw=uy;n.geo.albers=function(){return n.
geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)};n.geo.albersUsa=
function(){function r(n){var t=n[0],i=n[1];return e=null,(s(t,i),e)||(h(t,i),e)||c(t,i),e}var i=n.geo.
albers(),u=n.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),f=n.geo.conicEqualArea(
).rotate([157,0]).center([-3,19.9]).parallels([8,18]),e,o={point:function(n,t){e=[n,t]}},s,h,c;return r.
invert=function(n){var e=i.scale(),o=i.translate(),t=(n[0]-o[0])/e,r=(n[1]-o[1])/e;return(r>=.12&&r<
.234&&t>=-.425&&t<-.214?u:r>=.166&&r<.234&&t>=-.214&&t<-.115?f:i).invert(n)},r.stream=function(n){var
t=i.stream(n),r=u.stream(n),e=f.stream(n);return{point:function(n,i){t.point(n,i);r.point(n,i);e.point(
n,i)},sphere:function(){t.sphere();r.sphere();e.sphere()},lineStart:function(){t.lineStart();r.lineStart(
);e.lineStart()},lineEnd:function(){t.lineEnd();r.lineEnd();e.lineEnd()},polygonStart:function(){t.polygonStart(
);r.polygonStart();e.polygonStart()},polygonEnd:function(){t.polygonEnd();r.polygonEnd();e.polygonEnd(
)}}},r.precision=function(n){return arguments.length?(i.precision(n),u.precision(n),f.precision(n),r):
i.precision()},r.scale=function(n){return arguments.length?(i.scale(n),u.scale(n*.35),f.scale(n),r.translate(
i.translate())):i.scale()},r.translate=function(n){if(!arguments.length)return i.translate();var e=i.
scale(),l=+n[0],a=+n[1];return s=i.translate(n).clipExtent([[l-.455*e,a-.238*e],[l+.455*e,a+.238*e]]).
stream(o).point,h=u.translate([l-.307*e,a+.201*e]).clipExtent([[l-.425*e+t,a+.12*e+t],[l-.214*e-t,a+
.234*e-t]]).stream(o).point,c=f.translate([l-.205*e,a+.212*e]).clipExtent([[l-.214*e+t,a+.166*e+t],[
l-.115*e-t,a+.234*e-t]]).stream(o).point,r},r.scale(1070)};at={point:c,lineStart:c,lineEnd:c,polygonStart:
function(){fh=0;at.lineStart=dd},polygonEnd:function(){at.lineStart=at.lineEnd=at.point=c;uh+=u(fh/2)}
};fy={point:gd,lineStart:c,lineEnd:c,polygonStart:c,polygonEnd:c};tt={point:ai,lineStart:oy,lineEnd:
sy,polygonStart:function(){tt.lineStart=tg},polygonEnd:function(){tt.point=ai;tt.lineStart=oy;tt.lineEnd=
sy}};n.geo.path=function(){function t(t){return t&&(typeof i=="function"&&r.pointRadius(+i.apply(this,
arguments)),f&&f.valid||(f=u(r)),n.geo.stream(t,f)),r.result()}function s(){return f=null,t}var i=4.5,
e,o,u,r,f;return t.area=function(t){return uh=0,n.geo.stream(t,u(at)),uh},t.centroid=function(t){return ci=
li=lt=ii=ri=et=er=or=ui=0,n.geo.stream(t,u(tt)),ui?[er/ui,or/ui]:et?[ii/et,ri/et]:lt?[ci/lt,li/lt]:[
NaN,NaN]},t.bounds=function(t){return fe=ee=-(re=ue=Infinity),n.geo.stream(t,u(fy)),[[re,ue],[fe,ee]]}
,t.projection=function(n){return arguments.length?(u=(e=n)?n.stream||rg(n):v,s()):e},t.context=function(
n){return arguments.length?(r=(o=n)==null?new ng:new ig(n),typeof i!="function"&&r.pointRadius(i),s(
)):o},t.pointRadius=function(n){return arguments.length?(i=typeof n=="function"?n:(r.pointRadius(+n),
+n),t):i},t.projection(n.geo.albersUsa()).context(null)};n.geo.transform=function(n){return{stream:function(
t){var i=new cy(t);for(var r in n)i[r]=n[r];return i}}};cy.prototype={point:function(n,t){this.stream.
point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:
function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(
){this.stream.polygonEnd()}};n.geo.projection=fi;n.geo.projectionMutator=eh;(n.geo.equirectangular=function(
){return fi(tu)}).raw=tu.invert=tu;n.geo.rotation=function(n){function t(t){return t=n(t[0]*r,t[1]*r),
t[0]*=s,t[1]*=s,t}return n=oh(n[0]%360*r,n[1]*r,n.length>2?n[2]*r:0),t.invert=function(t){return t=n.
invert(t[0]*r,t[1]*r),t[0]*=s,t[1]*=s,t},t};vy.invert=tu;n.geo.circle=function(){function n(){var n=
typeof t=="function"?t.apply(this,arguments):t,u=oh(-n[0]*r,-n[1]*r,0).invert,i=[];return f(null,null,
1,{point:function(n,t){i.push(n=u(n,t));n[0]*=s;n[1]*=s}}),{type:"Polygon",coordinates:[i]}}var t=[0,
0],i,u=6,f;return n.origin=function(i){return arguments.length?(t=i,n):t},n.angle=function(t){return arguments.
length?(f=sh((i=+t)*r,u*r),n):i},n.precision=function(t){return arguments.length?(f=sh(i*r,(u=+t)*r),
n):u},n.angle(90)};n.geo.distance=function(n,t){var f=(t[0]-n[0])*r,e=n[1]*r,o=t[1]*r,a=Math.sin(f),
s=Math.cos(f),h=Math.sin(e),c=Math.cos(e),l=Math.sin(o),u=Math.cos(o),i;return Math.atan2(Math.sqrt(
(i=u*a)*i+(i=c*l-h*u*s)*i),h*l+c*u*s)};n.geo.graticule=function(){function i(){return{type:"MultiLineString",
coordinates:nt()}}function nt(){return n.range(Math.ceil(f/v)*v,r,v).map(b).concat(n.range(Math.ceil(
o/y)*y,e,y).map(k)).concat(n.range(Math.ceil(h/a)*a,s,a).filter(function(n){return u(n%v)>t}).map(d)).
concat(n.range(Math.ceil(l/w)*w,c,w).filter(function(n){return u(n%y)>t}).map(g))}var s,h,r,f,c,l,e,
o,a=10,w=a,v=90,y=360,d,g,b,k,p=2.5;return i.lines=function(){return nt().map(function(n){return{type:
"LineString",coordinates:n}})},i.outline=function(){return{type:"Polygon",coordinates:[b(f).concat(k(
e).slice(1),b(r).reverse().slice(1),k(o).reverse().slice(1))]}},i.extent=function(n){return arguments.
length?i.majorExtent(n).minorExtent(n):i.minorExtent()},i.majorExtent=function(n){return arguments.length?
(f=+n[0][0],r=+n[1][0],o=+n[0][1],e=+n[1][1],f>r&&(n=f,f=r,r=n),o>e&&(n=o,o=e,e=n),i.precision(p)):[
[f,o],[r,e]]},i.minorExtent=function(n){return arguments.length?(h=+n[0][0],s=+n[1][0],l=+n[0][1],c=
+n[1][1],h>s&&(n=h,h=s,s=n),l>c&&(n=l,l=c,c=n),i.precision(p)):[[h,l],[s,c]]},i.step=function(n){return arguments.
length?i.majorStep(n).minorStep(n):i.minorStep()},i.majorStep=function(n){return arguments.length?(v=
+n[0],y=+n[1],i):[v,y]},i.minorStep=function(n){return arguments.length?(a=+n[0],w=+n[1],i):[a,w]},i.
precision=function(n){return arguments.length?(p=+n,d=ky(l,c,90),g=dy(h,s,p),b=ky(o,e,90),k=dy(f,r,p),
i):p},i.majorExtent([[-180,-90+t],[180,90-t]]).minorExtent([[-180,-80-t],[180,80+t]])};n.geo.greatArc=
function(){function t(){return{type:"LineString",coordinates:[u||i.apply(this,arguments),f||r.apply(
this,arguments)]}}var i=hh,u,r=ch,f;return t.distance=function(){return n.geo.distance(u||i.apply(this,
arguments),f||r.apply(this,arguments))},t.source=function(n){return arguments.length?(i=n,u=typeof n==
"function"?null:n,t):i},t.target=function(n){return arguments.length?(r=n,f=typeof n=="function"?null:
n,t):r},t.precision=function(){return arguments.length?t:0},t};n.geo.interpolate=function(n,t){return ug(
n[0]*r,n[1]*r,t[0]*r,t[1]*r)};n.geo.length=function(t){return lh=0,n.geo.stream(t,vi),lh};vi={sphere:
c,point:c,lineStart:fg,lineEnd:c,polygonStart:c,polygonEnd:c};ah=iu(function(n){return Math.sqrt(2/(1+
n))},function(n){return 2*Math.asin(n/2)});(n.geo.azimuthalEqualArea=function(){return fi(ah)}).raw=
ah;vh=iu(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},v);(n.geo.azimuthalEquidistant=function(
){return fi(vh)}).raw=vh;(n.geo.conicConformal=function(){return rh(gy)}).raw=gy;(n.geo.conicEquidistant=
function(){return rh(np)}).raw=np;yh=iu(function(n){return 1/n},Math.atan);(n.geo.gnomonic=function(
){return fi(yh)}).raw=yh;oe.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-k]};(n.geo.mercator=
function(){return tp(oe)}).raw=oe;ph=iu(function(){return 1},Math.asin);(n.geo.orthographic=function(
){return fi(ph)}).raw=ph;wh=iu(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(n.geo.
stereographic=function(){return fi(wh)}).raw=wh;bh.invert=function(n,t){return[Math.atan2(ka(n),Math.
cos(t)),si(Math.sin(t)/ko(n))]};(n.geo.transverseMercator=function(){return tp(bh)}).raw=bh;n.geom={
};n.geom.hull=function(n){function t(n){var d;if(n.length<3)return[];var g=o(r),it=o(i),v=n.length,u,
nt=v-1,f=[],h=[],tt,t,e,s=0,l,a,p,w,b,y,k,c;if(g===yi&&i===hr)u=n;else for(t=0,u=[];t<v;++t)u.push([
+g.call(this,tt=n[t],t),+it.call(this,tt,t)]);for(t=1;t<v;++t)(u[t][1]<u[s][1]||u[t][1]==u[s][1]&&u[
t][0]<u[s][0])&&(s=t);for(t=0;t<v;++t)t!==s&&(a=u[t][1]-u[s][1],l=u[t][0]-u[s][0],f.push({angle:Math.
atan2(a,l),index:t}));for(f.sort(function(n,t){return n.angle-t.angle}),k=f[0].angle,y=f[0].index,b=
0,t=1;t<nt;++t){if(e=f[t].index,k==f[t].angle)if(l=u[y][0]-u[s][0],a=u[y][1]-u[s][1],p=u[e][0]-u[s][
0],w=u[e][1]-u[s][1],l*l+a*a>=p*p+w*w){f[t].index=-1;continue}else f[b].index=-1;k=f[t].angle;b=t;y=
e}for(h.push(s),t=0,e=0;t<2;++e)f[e].index>-1&&(h.push(f[e].index),t++);for(c=h.length;e<nt;++e)if(!(
f[e].index<0)){while(!eg(h[c-2],h[c-1],f[e].index,u))--c;h[c++]=f[e].index}for(d=[],t=c-1;t>=0;--t)d.
push(n[h[t]]);return d}var r=yi,i=hr;return arguments.length?t(n):(t.x=function(n){return arguments.
length?(r=n,t):r},t.y=function(n){return arguments.length?(i=n,t):i},t)};n.geom.polygon=function(n){
return pr(n,ru),n};ru=n.geom.polygon.prototype=[];ru.area=function(){for(var i=-1,r=this.length,t,n=
this[r-1],u=0;++i<r;)t=n,n=this[i],u+=t[1]*n[0]-t[0]*n[1];return u*.5};ru.centroid=function(n){var u=
-1,f=this.length,e=0,o=0,i,t=this[f-1],r;for(arguments.length||(n=-1/(6*this.area()));++u<f;)i=t,t=this[
u],r=i[0]*t[1]-t[0]*i[1],e+=(i[0]+t[0])*r,o+=(i[1]+t[1])*r;return[e*n,o*n]};ru.clip=function(n){for(
var f,o=rp(n),s=-1,h=this.length-rp(this),e,c,i=this[h-1],t,r,u;++s<h;){for(f=n.slice(),n.length=0,t=
this[s],r=f[(c=f.length-o)-1],e=-1;++e<c;)u=f[e],kh(u,i,t)?(kh(r,i,t)||n.push(ip(r,u,i,t)),n.push(u)):
kh(r,i,t)&&n.push(ip(r,u,i,t)),r=u;o&&n.push(n[0]);i=t}return n};dh=[];nc=[];ep.prototype.prepare=function(
){for(var n=this.edges,t=n.length,i;t--;)i=n[t].edge,i.b&&i.a||n.splice(t,1);return n.sort(op),n.length}
;he.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(
){return this.edge.l===this.site?this.edge.b:this.edge.a}};ic.prototype={insert:function(n,t){var i,
r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;i=n}else this.
_?(n=hp(this._),t.P=null,t.N=n,n.P=n.L=t,i=n):(t.P=t.N=null,this._=t,i=null);for(t.L=t.R=null,t.U=i,
t.C=!0,n=t;i&&i.C;)r=i.U,i===r.L?(u=r.R,u&&u.C?(i.C=u.C=!1,r.C=!0,n=r):(n===i.R&&(eu(this,i),n=i,i=n.
U),i.C=!1,r.C=!0,ou(this,r))):(u=r.L,u&&u.C?(i.C=u.C=!1,r.C=!0,n=r):(n===i.L&&(ou(this,i),n=i,i=n.U),
i.C=!1,r.C=!0,eu(this,r))),i=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P);n.P&&(n.P.N=n.N);n.
N=n.P=null;var i=n.U,t,f=n.L,u=n.R,r,e;if(r=f?u?hp(u):f:u,i?i.L===n?i.L=r:i.R=r:this._=r,f&&u?(e=r.C,
r.C=n.C,r.L=f,f.U=r,r!==u?(i=r.U,r.U=n.U,n=r.R,i.L=n,r.R=u,u.U=r):(r.U=i,i=r,n=r.R)):(e=n.C,n=r),n&&
(n.U=i),!e){if(n&&n.C){n.C=!1;return}do{if(n===this._)break;if(n===i.L){if(t=i.R,t.C&&(t.C=!1,i.C=!0,
eu(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ou(this,t),t=i.R);t.C=i.C;i.C=
t.R.C=!1;eu(this,i);n=this._;break}}else if(t=i.L,t.C&&(t.C=!1,i.C=!0,ou(this,i),t=i.L),t.L&&t.L.C||
t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=i.L);t.C=i.C;i.C=t.L.C=!1;ou(this,i);n=this._;
break}t.C=!0;n=i;i=i.U}while(!n.C);n&&(n.C=!1)}}};n.geom.voronoi=function(n){function i(n){var o=new
Array(n.length),t=r[0][0],i=r[0][1],u=r[1][0],f=r[1][1];return rc(e(n),r).cells.forEach(function(r,e)
{var h=r.edges,s=r.site,c=o[e]=h.length?h.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=t&&
s.x<=u&&s.y>=i&&s.y<=f?[[t,f],[u,f],[u,i],[t,i]]:[];c.point=n[e]}),o}function e(n){return n.map(function(
n,i){return{x:Math.round(s(n,i)/t)*t,y:Math.round(h(n,i)/t)*t,i:i}})}var u=yi,f=hr,s=u,h=f,r=su;return n?
i(n):(i.links=function(n){return rc(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t)
{return{source:n[t.l.i],target:n[t.r.i]}})},i.triangles=function(n){var t=[];return rc(e(n)).cells.forEach(
function(i,r){for(var o=i.site,s=i.edges.sort(op),h=-1,c=s.length,l,e,u=s[c-1].edge,f=u.l===o?u.r:u.
l;++h<c;)l=u,e=f,u=s[h].edge,f=u.l===o?u.r:u.l,r<e.i&&r<f.i&&bg(o,e,f)<0&&t.push([n[r],n[e.i],n[f.i]])}
),t},i.x=function(n){return arguments.length?(s=o(u=n),i):u},i.y=function(n){return arguments.length?
(h=o(f=n),i):f},i.clipExtent=function(n){return arguments.length?(r=n==null?su:n,i):r===su?null:r},i.
size=function(n){return arguments.length?i.clipExtent(n&&[[0,0],n]):r===su?null:r&&r[1]},i)};su=[[-1e6,
-1e6],[1e6,1e6]];n.geom.delaunay=function(t){return n.geom.voronoi().triangles(t)};n.geom.quadtree=function(
n,t,i,r,f){function e(n){function ut(n,t,i,r,f,e,o,s){var h,c,l;isNaN(i)||isNaN(r)||(n.leaf?(h=n.x,c=
n.y,h!=null?u(h-i)+u(c-r)<.01?tt(n,t,i,r,f,e,o,s):(l=n.point,n.x=n.y=n.point=null,tt(n,l,h,c,f,e,o,s),
tt(n,t,i,r,f,e,o,s)):(n.x=i,n.y=r,n.point=t)):tt(n,t,i,r,f,e,o,s))}function tt(n,t,i,r,u,f,e,o){var s=
(u+e)*.5,h=(f+o)*.5,c=i>=s,l=r>=h,a=(l<<1)+c;n.leaf=!1;n=n.nodes[a]||(n.nodes[a]=cp());c?u=s:e=s;l?f=
h:o=h;ut(n,t,i,r,u,f,e,o)}var l,ft=o(s),et=o(h),d,g,e,nt,a,v,y,p,b,k,it,rt,w;if(t!=null)a=t,v=i,y=r,
p=f;else if(y=p=-(a=v=Infinity),d=[],g=[],nt=n.length,c)for(e=0;e<nt;++e)l=n[e],l.x<a&&(a=l.x),l.y<v&&
(v=l.y),l.x>y&&(y=l.x),l.y>p&&(p=l.y),d.push(l.x),g.push(l.y);else for(e=0;e<nt;++e)b=+ft(l=n[e],e),
k=+et(l,e),b<a&&(a=b),k<v&&(v=k),b>y&&(y=b),k>p&&(p=k),d.push(b),g.push(k);if(it=y-a,rt=p-v,it>rt?p=
v+it:y=a+rt,w=cp(),w.add=function(n){ut(w,n,+ft(n,++e),+et(n,e),a,v,y,p)},w.visit=function(n){hu(n,w,
a,v,y,p)},e=-1,t==null){while(++e<nt)ut(w,n[e],d[e],g[e],a,v,y,p);--e}else n.forEach(w.add);return d=
g=n=l=null,w}var s=yi,h=hr,c;return(c=arguments.length)?(s=kg,h=dg,c===3&&(f=i,r=t,i=t=0),e(n)):(e.x=
function(n){return arguments.length?(s=n,e):s},e.y=function(n){return arguments.length?(h=n,e):h},e.
extent=function(n){return arguments.length?(n==null?t=i=r=f=null:(t=+n[0][0],i=+n[0][1],r=+n[1][0],f=
+n[1][1]),e):t==null?null:[[t,i],[r,f]]},e.size=function(n){return arguments.length?(n==null?t=i=r=f=
null:(t=i=0,r=+n[0],f=+n[1]),e):t==null?null:[r-t,f-i]},e)};n.interpolateRgb=uc;n.interpolateObject=
lp;n.interpolateNumber=vt;n.interpolateString=ap;cu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;n.
interpolate=wi;n.interpolators=[function(n,t){var i=typeof t;return(i==="string"?br.has(t)||/^(#|rgb\(|hsl\()/.
test(t)?uc:ap:t instanceof nr?uc:i==="object"?Array.isArray(t)?le:lp:vt)(n,t)}];n.interpolateArray=le;
var vp=function(){return v},gg=n.map({linear:vp,poly:en,quad:function(){return rn},cubic:function(){
return un},sin:function(){return on},exp:function(){return sn},circle:function(){return hn},elastic:
cn,back:ln,bounce:function(){return an}}),nn=n.map({"in":v,out:yp,"in-out":pp,"out-in":function(n){return pp(
yp(n))}});n.ease=function(n){var t=n.indexOf("-"),i=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):
"in";return i=gg.get(i)||vp,r=nn.get(r)||v,tn(r(i.apply(null,wl.call(arguments,1))))};n.interpolateHcl=
vn;n.interpolateHsl=yn;n.interpolateLab=pn;n.interpolateRound=wp;n.transform=function(t){var i=rt.createElementNS(
n.ns.prefix.svg,"g");return(n.transform=function(n){if(n!=null){i.setAttribute("transform",n);var t=
i.transform.baseVal.consolidate()}return new bp(t?t.matrix:gp)})(t)};bp.prototype.toString=function(
){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+
")"};gp={a:1,b:0,c:0,d:1,e:0,f:0};n.interpolateTransform=nw;n.layout={};n.layout.bundle=function(){return function(
n){for(var t=[],i=-1,r=n.length;++i<r;)t.push(dn(n[i]));return t}};n.layout.chord=function(){function c(
){var k={},d=[],it=n.range(r),g=[],v,t,nt,c,a,p,w;for(i=[],u=[],v=0,c=-1;++c<r;){for(t=0,a=-1;++a<r;
)t+=f[c][a];d.push(t);g.push(n.range(r));v+=t}for(o&&it.sort(function(n,t){return o(d[n],d[t])}),s&&
g.forEach(function(n,t){n.sort(function(n,i){return s(f[t][n],f[t][i])})}),v=(b-e*r)/v,t=0,c=-1;++c<
r;){for(nt=t,a=-1;++a<r;){var y=it[c],tt=g[y][a],rt=f[y][tt],ut=t,ft=t+=rt*v;k[y+"-"+tt]={index:y,subindex:
tt,startAngle:ut,endAngle:ft,value:rt}}u[y]={index:y,startAngle:nt,endAngle:t,value:(t-nt)/v};t+=e}for(
c=-1;++c<r;)for(a=c-1;++a<r;)p=k[c+"-"+a],w=k[a+"-"+c],(p.value||w.value)&&i.push(p.value<w.value?{source:
w,target:p}:{source:p,target:w});h&&l()}function l(){i.sort(function(n,t){return h((n.source.value+n.
target.value)/2,(t.source.value+t.target.value)/2)})}var t={},i,u,f,r,e=0,o,s,h;return t.matrix=function(
n){return arguments.length?(r=(f=n)&&f.length,i=u=null,t):f},t.padding=function(n){return arguments.
length?(e=n,i=u=null,t):e},t.sortGroups=function(n){return arguments.length?(o=n,i=u=null,t):o},t.sortSubgroups=
function(n){return arguments.length?(s=n,i=null,t):s},t.sortChords=function(n){return arguments.length?
(h=n,i&&l(),t):h},t.chords=function(){return i||c(),i},t.groups=function(){return u||c(),u},t};n.layout.
force=function(){function k(n){return function(t,i,r,u){var e;if(t.point!==n){var o=t.cx-n.x,s=t.cy-
n.y,f=1/Math.sqrt(o*o+s*s);if((u-i)*f<b)return e=t.charge*f*f,n.px-=o*e,n.py-=s*e,!0;t.point&&isFinite(
f)&&(e=t.pointCharge*f*f,n.px-=o*e,n.py-=s*e)}return!t.charge}}function d(i){i.px=n.event.x;i.py=n.event.
y;t.resume()}var t={},h=n.dispatch("start","tick","end"),f=[1,1],c,r,l=.9,o=rw,s=uw,e=-30,w=.1,b=.8,
i=[],u=[],a,y,p;return t.tick=function(){if((r*=.99)<.005)return h.end({type:"end",alpha:r=0}),!0;for(
var nt=i.length,it=u.length,tt,t,b,g,d,s,c,v,o=0;o<it;++o)t=u[o],b=t.source,g=t.target,c=g.x-b.x,v=g.
y-b.y,(d=c*c+v*v)&&(d=r*y[o]*((d=Math.sqrt(d))-a[o])/d,c*=d,v*=d,g.x-=c*(s=b.weight/(g.weight+b.weight)
),g.y-=v*s,b.x+=c*(s=1-s),b.y+=v*s);if((s=r*w)&&(c=f[0]/2,v=f[1]/2,o=-1,s))while(++o<nt)t=i[o],t.x+=
(c-t.x)*s,t.y+=(v-t.y)*s;if(e)for(iw(tt=n.geom.quadtree(i),r,p),o=-1;++o<nt;)(t=i[o]).fixed||tt.visit(
k(t));for(o=-1;++o<nt;)t=i[o],t.fixed?(t.x=t.px,t.y=t.py):(t.x-=(t.px-(t.px=t.x))*l,t.y-=(t.py-(t.py=
t.y))*l);h.tick({type:"tick",alpha:r})},t.nodes=function(n){return arguments.length?(i=n,t):i},t.links=
function(n){return arguments.length?(u=n,t):u},t.size=function(n){return arguments.length?(f=n,t):f}
,t.linkDistance=function(n){return arguments.length?(o=typeof n=="function"?n:+n,t):o},t.distance=t.
linkDistance,t.linkStrength=function(n){return arguments.length?(s=typeof n=="function"?n:+n,t):s},t.
friction=function(n){return arguments.length?(l=+n,t):l},t.charge=function(n){return arguments.length?
(e=typeof n=="function"?n:+n,t):e},t.gravity=function(n){return arguments.length?(w=+n,t):w},t.theta=
function(n){return arguments.length?(b=+n,t):b},t.alpha=function(i){return arguments.length?(i=+i,r?
r=i>0?i:0:i>0&&(h.start({type:"start",alpha:r=i}),n.timer(t.tick)),t):r},t.start=function(){function v(
t,i){var f;if(!c){for(c=new Array(h),r=0;r<h;++r)c[r]=[];for(r=0;r<o;++r)f=u[r],c[f.source.index].push(
f.target),c[f.target.index].push(f.source)}for(var e=c[n],r=-1,o=e.length,s;++r<o;)if(!isNaN(s=e[r][
t]))return s;return Math.random()*i}for(var h=i.length,l=u.length,w=f[0],b=f[1],c,r,n=0;n<h;++n)(r=i[
n]).index=n,r.weight=0;for(n=0;n<l;++n)r=u[n],typeof r.source=="number"&&(r.source=i[r.source]),typeof
r.target=="number"&&(r.target=i[r.target]),++r.source.weight,++r.target.weight;for(n=0;n<h;++n)r=i[n],
isNaN(r.x)&&(r.x=v("x",w)),isNaN(r.y)&&(r.y=v("y",b)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);
if(a=[],typeof o=="function")for(n=0;n<l;++n)a[n]=+o.call(this,u[n],n);else for(n=0;n<l;++n)a[n]=o;if(
y=[],typeof s=="function")for(n=0;n<l;++n)y[n]=+s.call(this,u[n],n);else for(n=0;n<l;++n)y[n]=s;if(p=
[],typeof e=="function")for(n=0;n<h;++n)p[n]=+e.call(this,i[n],n);else for(n=0;n<h;++n)p[n]=e;return t.
resume()},t.resume=function(){return t.alpha(.1)},t.stop=function(){return t.alpha(0)},t.drag=function(
){if(c||(c=n.behavior.drag().origin(v).on("dragstart.force",ntt).on("drag.force",d).on("dragend.force",
ttt)),!arguments.length)return c;this.on("mouseover.force",itt).on("mouseout.force",rtt).call(c)},n.
rebind(t,h,"on")};rw=20;uw=1;n.layout.hierarchy=function(){function u(f,e,o){var s=r.call(n,f,e);if(
f.depth=e,o.push(f),s&&(c=s.length)){for(var h=-1,c,a=f.children=new Array(c),v=0,y=e+1,l;++h<c;)l=a[
h]=u(s[h],y,o),l.parent=f,v+=l.value;i&&a.sort(i);t&&(f.value=v)}else delete f.children,t&&(f.value=
+t.call(n,f,e)||0);return f}function f(i,r){var e=i.children,u=0,o,s,h;if(e&&(s=e.length))for(o=-1,h=
r+1;++o<s;)u+=f(e[o],h);else t&&(u=+t.call(n,i,r)||0);return t&&(i.value=u),u}function n(n){var t=[];
return u(n,0,t),t}var i=ett,r=utt,t=ftt;return n.sort=function(t){return arguments.length?(i=t,n):i}
,n.children=function(t){return arguments.length?(r=t,n):r},n.value=function(i){return arguments.length?
(t=i,n):t},n.revalue=function(n){return f(n,0),n},n};n.layout.partition=function(){function u(n,t,i,
r){var f=n.children,e,o,s,h;if(n.x=t,n.y=n.depth*r,n.dx=i,n.dy=r,f&&(o=f.length))for(e=-1,i=n.value?
i/n.value:0;++e<o;)u(s=f[e],t,h=s.value*i,r),t+=h}function f(n){var t=n.children,i=0,r,u;if(t&&(u=t.
length))for(r=-1;++r<u;)i=Math.max(i,f(t[r]));return 1+i}function i(n,i){var e=r.call(this,n,i);return u(
e[0],0,t[0],t[1]/f(e[0])),e}var r=n.layout.hierarchy(),t=[1,1];return i.size=function(n){return arguments.
length?(t=n,i):t},lu(i,r)};n.layout.pie=function(){function t(e){var o=e.map(function(n,i){return+f.
call(t,n,i)}),s=+(typeof r=="function"?r.apply(this,arguments):r),l=((typeof u=="function"?u.apply(this,
arguments):u)-s)/n.sum(o),c=n.range(e.length),h;return i!=null&&c.sort(i===fc?function(n,t){return o[
t]-o[n]}:function(n,t){return i(e[n],e[t])}),h=[],c.forEach(function(n){var t;h[n]={data:e[n],value:
t=o[n],startAngle:s,endAngle:s+=t*l}}),h}var f=Number,i=fc,r=0,u=b;return t.value=function(n){return arguments.
length?(f=n,t):f},t.sort=function(n){return arguments.length?(i=n,t):i},t.startAngle=function(n){return arguments.
length?(r=n,t):r},t.endAngle=function(n){return arguments.length?(u=n,t):u},t};fc={};n.layout.stack=
function(){function t(s,h){var l=s.map(function(n,i){return r.call(t,n,i)}),a=l.map(function(n){return n.
map(function(n,i){return[e.call(t,n,i),o.call(t,n,i)]})}),y=u.call(t,a,h);l=n.permute(l,y);a=n.permute(
a,y);for(var w=f.call(t,a,h),b=l.length,k=l[0].length,v,p,c=0;c<k;++c)for(i.call(t,l[0][c],p=w[c],a[
0][c][1]),v=1;v<b;++v)i.call(t,l[v][c],p+=a[v-1][c][1],a[v][c][1]);return s}var r=v,u=ec,f=oc,i=ctt,
e=stt,o=htt;return t.values=function(n){return arguments.length?(r=n,t):r},t.order=function(n){return arguments.
length?(u=typeof n=="function"?n:fw.get(n)||ec,t):u},t.offset=function(n){return arguments.length?(f=
typeof n=="function"?n:ew.get(n)||oc,t):f},t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(
n){return arguments.length?(o=n,t):o},t.out=function(n){return arguments.length?(i=n,t):i},t};fw=n.map(
{"inside-out":function(t){for(var u=t.length,i,f=t.map(ltt),e=t.map(att),l=n.range(u).sort(function(
n,t){return f[n]-f[t]}),o=0,s=0,h=[],c=[],r=0;r<u;++r)i=l[r],o<s?(o+=e[i],h.push(i)):(s+=e[i],c.push(
i));return c.reverse().concat(h)},reverse:function(t){return n.range(t.length).reverse()},"default":
ec});ew=n.map({silhouette:function(n){for(var s=n.length,f=n[0].length,e=[],u=0,r,i,o=[],t=0;t<f;++t)
{for(r=0,i=0;r<s;r++)i+=n[r][t][1];i>u&&(u=i);e.push(i)}for(t=0;t<f;++t)o[t]=(u-e[t])/2;return o},wiggle:
function(n){var a=n.length,h=n[0],v=h.length,i,t,r,u,c,l,f,e,o,s=[];for(s[0]=e=o=0,t=1;t<v;++t){for(
i=0,u=0;i<a;++i)u+=n[i][t][1];for(i=0,c=0,f=h[t][0]-h[t-1][0];i<a;++i){for(r=0,l=(n[i][t][1]-n[i][t-
1][1])/(2*f);r<i;++r)l+=(n[r][t][1]-n[r][t-1][1])/f;c+=l*n[i][t][1]}s[t]=e-=u?c/u*f:0;e<o&&(o=e)}for(
t=0;t<v;++t)s[t]-=o;return s},expand:function(n){for(var r=n.length,f=n[0].length,o=1/r,t,u,e=[],i=0;
i<f;++i){for(t=0,u=0;t<r;t++)u+=n[t][i][1];if(u)for(t=0;t<r;t++)n[t][i][1]/=u;else for(t=0;t<r;t++)n[
t][i][1]=o}for(i=0;i<f;++i)e[i]=0;return e},zero:oc});n.layout.histogram=function(){function t(t,e){
for(var l=[],s=t.map(r,this),a=u.call(this,s,e),h=f.call(this,a,s,e),o,e=-1,y=s.length,v=h.length-1,
p=i?1:1/y,c;++e<v;)o=l[e]=[],o.dx=h[e+1]-(o.x=h[e]),o.y=0;if(v>0)for(e=-1;++e<y;)c=s[e],c>=a[0]&&c<=
a[1]&&(o=l[n.bisect(h,c,1,v)-1],o.y+=p,o.push(t[e]));return l}var i=!0,r=Number,u=ptt,f=ytt;return t.
value=function(n){return arguments.length?(r=n,t):r},t.range=function(n){return arguments.length?(u=
o(n),t):u},t.bins=function(n){return arguments.length?(f=typeof n=="number"?function(t){return ow(t,
n)}:o(n),t):f},t.frequency=function(n){return arguments.length?(i=!!n,t):i},t};n.layout.tree=function(
){function r(n,r){function c(n,t){var f=n.children,r=n._tree,o;if(f&&(s=f.length)){for(var s,h=f[0],
e,l=h,u,a=-1;++a<s;)u=f[a],c(u,e),l=v(u,e,l),e=u;dtt(n);o=.5*(h._tree.prelim+u._tree.prelim);t?(r.prelim=
t._tree.prelim+i(n,t),r.mod=r.prelim-o):r.prelim=o}else t&&(r.prelim=t._tree.prelim+i(n,t))}function l(
n,t){var i,r,u;if(n.x=n._tree.prelim+t,i=n.children,i&&(u=i.length))for(r=-1,t+=n._tree.mod;++r<u;)l(
i[r],t)}function v(n,t,r){if(t){for(var f=n,e=n,u=t,o=n.parent.children[0],h=f._tree.mod,c=e._tree.mod,
l=u._tree.mod,a=o._tree.mod,s;u=hc(u),f=sc(f),u&&f;)o=sc(o),e=hc(e),e._tree.ancestor=n,s=u._tree.prelim+
l-f._tree.prelim-h+i(u,f),s>0&&(gtt(nit(u,n,r),n,s),h+=s,c+=s),l+=u._tree.mod,h+=f._tree.mod,a+=o._tree.
mod,c+=e._tree.mod;u&&!hc(e)&&(e._tree.thread=u,e._tree.mod+=l-c);f&&!sc(o)&&(o._tree.thread=f,o._tree.
mod+=h-a,r=n)}return r}var h=f.call(this,n,r),e=h[0];yt(e,function(n,t){n._tree={ancestor:n,prelim:0,
mod:0,change:0,shift:0,number:t?t._tree.number+1:0}});c(e);l(e,-e._tree.prelim);var o=ae(e,btt),s=ae(
e,wtt),y=ae(e,ktt),a=o.x-i(o,s)/2,p=s.x+i(s,o)/2,w=y.depth||1;return yt(e,u?function(n){n.x*=t[0];n.
y=n.depth*t[1];delete n._tree}:function(n){n.x=(n.x-a)/(p-a)*t[0];n.y=n.depth/w*t[1];delete n._tree}
),h}var f=n.layout.hierarchy().sort(null).value(null),i=sw,t=[1,1],u=!1;return r.separation=function(
n){return arguments.length?(i=n,r):i},r.size=function(n){return arguments.length?(u=(t=n)==null,r):u?
null:t},r.nodeSize=function(n){return arguments.length?(u=(t=n)!=null,r):u?t:null},lu(r,f)};n.layout.
pack=function(){function i(n,i){var c=f.call(this,n,i),e=c[0],o=u[0],s=u[1],l=t==null?Math.sqrt:typeof
t=="function"?t:function(){return t},h;return e.x=e.y=0,yt(e,function(n){n.r=+l(n.value)}),yt(e,lw),
r&&(h=r*(t?1:Math.max(2*e.r/o,2*e.r/s))/2,yt(e,function(n){n.r+=h}),yt(e,lw),yt(e,function(n){n.r-=h}
)),aw(e,o/2,s/2,t?1:1/Math.max(2*e.r/o,2*e.r/s)),c}var f=n.layout.hierarchy().sort(tit),r=0,u=[1,1],
t;return i.size=function(n){return arguments.length?(u=n,i):u},i.radius=function(n){return arguments.
length?(t=n==null||typeof n=="function"?n:+n,i):t},i.padding=function(n){return arguments.length?(r=
+n,i):r},lu(i,f)};n.layout.cluster=function(){function i(n,i){var c=f.call(this,n,i),e=c[0],o,a=0;yt(
e,function(n){var t=n.children;t&&t.length?(n.x=fit(t),n.y=uit(t)):(n.x=o?a+=r(n,o):0,n.y=0,o=n)});var
s=yw(e),h=pw(e),l=s.x-r(s,h)/2,v=h.x+r(h,s)/2;return yt(e,u?function(n){n.x=(n.x-e.x)*t[0];n.y=(e.y-
n.y)*t[1]}:function(n){n.x=(n.x-l)/(v-l)*t[0];n.y=(1-(e.y?n.y/e.y:1))*t[1]}),c}var f=n.layout.hierarchy(
).sort(null).value(null),r=sw,t=[1,1],u=!1;return i.separation=function(n){return arguments.length?(
r=n,i):r},i.size=function(n){return arguments.length?(u=(t=n)==null,i):u?null:t},i.nodeSize=function(
n){return arguments.length?(u=(t=n)!=null,i):u?t:null},lu(i,f)};n.layout.treemap=function(){function c(
n,t){for(var r=-1,f=n.length,u,i;++r<f;)i=(u=n[r]).value*(t<0?0:t),u.area=isNaN(i)||i<=0?0:i}function v(
n){var u=n.children;if(u&&u.length){var r=s(n),t=[],f=u.slice(),h,o=Infinity,a,e=i==="slice"?r.dx:i===
"dice"?r.dy:i==="slice-dice"?n.depth&1?r.dy:r.dx:Math.min(r.dx,r.dy),y;for(c(f,r.dx*r.dy/n.value),t.
area=0;(y=f.length)>0;)t.push(h=f[y-1]),t.area+=h.area,i!=="squarify"||(a=p(t,e))<=o?(f.pop(),o=a):(
t.area-=t.pop().area,l(t,e,r,!1),e=Math.min(r.dx,r.dy),t.length=t.area=0,o=Infinity);t.length&&(l(t,
e,r,!0),t.length=t.area=0);u.forEach(v)}}function y(n){var u=n.children;if(u&&u.length){var i=s(n),f=
u.slice(),r,t=[];for(c(f,i.dx*i.dy/n.value),t.area=0;r=f.pop();)t.push(r),t.area+=r.area,r.z!=null&&
(l(t,r.z?i.dx:i.dy,i,!f.length),t.length=t.area=0);u.forEach(y)}}function p(n,t){for(var i=n.area,r,
u=0,f=Infinity,o=-1,s=n.length;++o<s;)(r=n[o].area)&&(r<f&&(f=r),r>u&&(u=r));return i*=i,t*=t,i?Math.
max(t*u*e/i,i/(t*f*e)):Infinity}function l(n,t,i,u){var h=-1,c=n.length,o=i.x,s=i.y,e=t?r(n.area/t):
0,f;if(t==i.dx){for((u||e>i.dy)&&(e=i.dy);++h<c;)f=n[h],f.x=o,f.y=s,f.dy=e,o+=f.dx=Math.min(i.x+i.dx-
o,e?r(f.area/e):0);f.z=!0;f.dx+=i.x+i.dx-o;i.y+=e;i.dy-=e}else{for((u||e>i.dx)&&(e=i.dx);++h<c;)f=n[
h],f.x=o,f.y=s,f.dx=e,s+=f.dy=Math.min(i.y+i.dy-s,e?r(f.area/e):0);f.z=!1;f.dy+=i.y+i.dy-s;i.x+=e;i.
dx-=e}}function t(n){var i=u||o(n),t=i[0];return t.x=0,t.y=0,t.dx=f[0],t.dy=f[1],u&&o.revalue(t),c([
t],t.dx*t.dy/t.value),(u?y:v)(t),h&&(u=i),i}var o=n.layout.hierarchy(),r=Math.round,f=[1,1],a=null,s=
lc,h=!1,u,i="squarify",e=.5*(1+Math.sqrt(5));return t.size=function(n){return arguments.length?(f=n,
t):f},t.padding=function(n){function u(i){var r=n.call(t,i,i.depth);return r==null?lc(i):ww(i,typeof
r=="number"?[r,r,r,r]:r)}function i(t){return ww(t,n)}if(!arguments.length)return a;var r;return s=(a=
n)==null?lc:(r=typeof n)=="function"?u:r==="number"?(n=[n,n,n,n],i):i,t},t.round=function(n){return arguments.
length?(r=n?Math.round:Number,t):r!=Number},t.sticky=function(n){return arguments.length?(h=n,u=null,
t):h},t.ratio=function(n){return arguments.length?(e=n,t):e},t.mode=function(n){return arguments.length?
(i=n+"",t):i},lu(t,o)};n.random={normal:function(n,t){var i=arguments.length;return i<2&&(t=1),i<1&&
(n=0),function(){var r,u,i;do r=Math.random()*2-1,u=Math.random()*2-1,i=r*r+u*u;while(!i||i>1);return n+
t*r*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var t=n.random.normal.apply(n,arguments);return function(
){return Math.exp(t())}},irwinHall:function(n){return function(){for(var t=0,i=0;i<n;i++)t+=Math.random(
);return t/n}}};n.scale={};bw={floor:v,ceil:v};n.scale.linear=function(){return kw([0,1],[0,1],wi,!1)}
;gw={s:1,g:1,p:1,r:1,e:1};n.scale.log=function(){return nb(n.scale.linear().domain([0,1]),10,!0,[1,10])}
;bc=n.format(".0e");tb={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}
};n.scale.pow=function(){return ib(n.scale.linear(),1,[0,1])};n.scale.sqrt=function(){return n.scale.
pow().exponent(.5)};n.scale.ordinal=function(){return rb([],{t:"range",a:[[]]})};n.scale.category10=
function(){return n.scale.ordinal().range(cit)};n.scale.category20=function(){return n.scale.ordinal(
).range(lit)};n.scale.category20b=function(){return n.scale.ordinal().range(ait)};n.scale.category20c=
function(){return n.scale.ordinal().range(vit)};var cit=[2062260,16744206,2924588,14034728,9725885,9197131,
14907330,8355711,12369186,1556175].map(sf),lit=[2062260,11454440,16744206,16759672,2924588,10018698,
14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,
1556175,10410725].map(sf),ait=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,
12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(
sf),vit=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,
13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(sf);n.scale.quantile=
function(){return ub([],[])};n.scale.quantize=function(){return fb(0,1,[0,1])};n.scale.threshold=function(
){return eb([.5],[0,1])};n.scale.identity=function(){return ob([0,1])};n.svg={};n.svg.arc=function()
{function n(){var e=t.apply(this,arguments),n=i.apply(this,arguments),o=r.apply(this,arguments)+ei,s=
u.apply(this,arguments)+ei,h=(s<o&&(h=o,o=s,s=h),s-o),c=h<f?"0":"1",l=Math.cos(o),a=Math.sin(o),v=Math.
cos(s),y=Math.sin(s);return h>=sb?e?"M0,"+n+"A"+n+","+n+" 0 1,1 0,"+-n+"A"+n+","+n+" 0 1,1 0,"+n+"M0,"+
e+"A"+e+","+e+" 0 1,0 0,"+-e+"A"+e+","+e+" 0 1,0 0,"+e+"Z":"M0,"+n+"A"+n+","+n+" 0 1,1 0,"+-n+"A"+n+
","+n+" 0 1,1 0,"+n+"Z":e?"M"+n*l+","+n*a+"A"+n+","+n+" 0 "+c+",1 "+n*v+","+n*y+"L"+e*v+","+e*y+"A"+
e+","+e+" 0 "+c+",0 "+e*l+","+e*a+"Z":"M"+n*l+","+n*a+"A"+n+","+n+" 0 "+c+",1 "+n*v+","+n*y+"L0,0Z"}
var t=yit,i=pit,r=hb,u=cb;return n.innerRadius=function(i){return arguments.length?(t=o(i),n):t},n.outerRadius=
function(t){return arguments.length?(i=o(t),n):i},n.startAngle=function(t){return arguments.length?(
r=o(t),n):r},n.endAngle=function(t){return arguments.length?(u=o(t),n):u},n.centroid=function(){var n=
(t.apply(this,arguments)+i.apply(this,arguments))/2,f=(r.apply(this,arguments)+u.apply(this,arguments))
/2+ei;return[Math.cos(f)*n,Math.sin(f)*n]},n};ei=-k;sb=b-t;n.svg.line=function(){return lb(v)};pe=n.
map({linear:g,"linear-closed":wit,step:bit,"step-before":kc,"step-after":dc,basis:ab,"basis-open":nrt,
"basis-closed":trt,bundle:irt,cardinal:git,"cardinal-open":kit,"cardinal-closed":dit,monotone:frt});
pe.forEach(function(n,t){t.key=n;t.closed=/-closed$/.test(n)});var vb=[0,2/3,1/3,0],yb=[0,1/3,2/3,0],
oi=[0,1/6,2/3,1/6];n.svg.line.radial=function(){var n=lb(pb);return n.radius=n.x,delete n.x,n.angle=
n.y,delete n.y,n};kc.reverse=dc;dc.reverse=kc;n.svg.area=function(){return wb(v)};n.svg.area.radial=
function(){var n=wb(pb);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=
n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n}
;n.svg.chord=function(){function n(n,r){var u=h(this,t,n,r),f=h(this,i,n,r);return"M"+u.p0+c(u.r,u.p1,
u.a1-u.a0)+(l(u,f)?s(u.r,u.p1,u.r,u.p0):s(u.r,u.p1,f.r,f.p0)+c(f.r,f.p1,f.a1-f.a0)+s(f.r,f.p1,u.r,u.
p0))+"Z"}function h(n,t,i,f){var s=t.call(n,i,f),o=r.call(n,s,f),h=u.call(n,s,f)+ei,c=e.call(n,s,f)+
ei;return{r:o,a0:h,a1:c,p0:[o*Math.cos(h),o*Math.sin(h)],p1:[o*Math.cos(c),o*Math.sin(c)]}}function l(
n,t){return n.a0==t.a0&&n.a1==t.a1}function c(n,t,i){return"A"+n+","+n+" 0 "+ +(i>f)+",1 "+t}function s(
n,t,i,r){return"Q 0,0 "+r}var t=hh,i=ch,r=ert,u=hb,e=cb;return n.radius=function(t){return arguments.
length?(r=o(t),n):r},n.source=function(i){return arguments.length?(t=o(i),n):t},n.target=function(t)
{return arguments.length?(i=o(t),n):i},n.startAngle=function(t){return arguments.length?(u=o(t),n):u}
,n.endAngle=function(t){return arguments.length?(e=o(t),n):e},n};n.svg.diagonal=function(){function n(
n,u){var e=t.call(this,n,u),o=i.call(this,n,u),s=(e.y+o.y)/2,f=[e,{x:e.x,y:s},{x:o.x,y:s},o];return f=
f.map(r),"M"+f[0]+"C"+f[1]+" "+f[2]+" "+f[3]}var t=hh,i=ch,r=bb;return n.source=function(i){return arguments.
length?(t=o(i),n):t},n.target=function(t){return arguments.length?(i=o(t),n):i},n.projection=function(
t){return arguments.length?(r=t,n):r},n};n.svg.diagonal.radial=function(){var t=n.svg.diagonal(),i=bb,
r=t.projection;return t.projection=function(n){return arguments.length?r(ort(i=n)):i},t};n.svg.symbol=
function(){function n(n,r){return(il.get(t.call(this,n,r))||kb)(i.call(this,n,r))}var t=hrt,i=srt;return n.
type=function(i){return arguments.length?(t=o(i),n):t},n.size=function(t){return arguments.length?(i=
o(t),n):i},n};il=n.map({circle:kb,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+
-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){
var t=Math.sqrt(n/(2*rl)),i=t*rl;return"M0,"+-t+"L"+i+",0 0,"+t+" "+-i+",0Z"},square:function(n){var
t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(
n){var t=Math.sqrt(n/vu),i=t*vu/2;return"M0,"+i+"L"+t+","+-i+" "+-t+","+-i+"Z"},"triangle-up":function(
n){var t=Math.sqrt(n/vu),i=t*vu/2;return"M0,"+-i+"L"+t+","+i+" "+-t+","+i+"Z"}});n.svg.symbolTypes=il.
keys();vu=Math.sqrt(3);rl=Math.tan(30*r);l=[];ul=0;l.call=e.call;l.empty=e.empty;l.node=e.node;l.size=
e.size;n.transition=function(n){return arguments.length?bi?n.transition():n:wo.transition()};n.transition.
prototype=l;l.select=function(n){var f=this.id,o=[],e,i,t,r,s;for(n=yo(n),r=-1,s=this.length;++r<s;)
{o.push(e=[]);for(var h=this[r],u=-1,c=h.length;++u<c;)(t=h[u])&&(i=n.call(t,t.__data__,u,r))?("__data__"in
t&&(i.__data__=t.__data__),ke(i,u,f,t.__transition__[f]),e.push(i)):e.push(null)}return yu(o,f)};l.selectAll=
function(n){var u=this.id,s=[],h,f,t,e,c,i,l,r,v;for(n=ia(n),i=-1,l=this.length;++i<l;)for(var a=this[
i],o=-1,y=a.length;++o<y;)if(t=a[o])for(c=t.__transition__[u],f=n.call(t,t.__data__,o,i),s.push(h=[]),
r=-1,v=f.length;++r<v;)(e=f[r])&&ke(e,r,u,c),h.push(e);return yu(s,u)};l.filter=function(n){var u=[],
f,e,i,t,o;for(typeof n!="function"&&(n=ca(n)),t=0,o=this.length;t<o;t++){u.push(f=[]);for(var e=this[
t],r=0,s=e.length;r<s;r++)(i=e[r])&&n.call(i,i.__data__,r,t)&&f.push(i)}return yu(u,this.id)};l.tween=
function(n,t){var i=this.id;return arguments.length<2?this.node().__transition__[i].tween.get(n):ni(
this,t==null?function(t){t.__transition__[i].tween.remove(n)}:function(r){r.__transition__[i].tween.
set(n,t)})};l.attr=function(t,i){function f(){this.removeAttribute(r)}function e(){this.removeAttributeNS(
r.space,r.local)}function o(n){return n==null?f:(n+="",function(){var t=this.getAttribute(r),i;return t!==
n&&(i=u(t,n),function(n){this.setAttribute(r,i(n))})})}function s(n){return n==null?e:(n+="",function(
){var t=this.getAttributeNS(r.space,r.local),i;return t!==n&&(i=u(t,n),function(n){this.setAttributeNS(
r.space,r.local,i(n))})})}if(arguments.length<2){for(i in t)this.attr(i,t[i]);return this}var u=t=="transform"?
nw:wi,r=n.ns.qualify(t);return fl(this,"attr."+t,i,r.local?s:o)};l.attrTween=function(t,i){function u(
n,t){var u=i.call(this,n,t,this.getAttribute(r));return u&&function(n){this.setAttribute(r,u(n))}}function f(
n,t){var u=i.call(this,n,t,this.getAttributeNS(r.space,r.local));return u&&function(n){this.setAttributeNS(
r.space,r.local,u(n))}}var r=n.ns.qualify(t);return this.tween("attr."+t,r.local?f:u)};l.style=function(
n,t,i){function u(){this.style.removeProperty(n)}function f(t){return t==null?u:(t+="",function(){var
r=a.getComputedStyle(this,null).getPropertyValue(n),u;return r!==t&&(u=wi(r,t),function(t){this.style.
setProperty(n,u(t),i)})})}var r=arguments.length;if(r<3){if(typeof n!="string"){r<2&&(t="");for(i in
n)this.style(i,n[i],t);return this}i=""}return fl(this,"style."+n,t,f)};l.styleTween=function(n,t,i)
{function r(r,u){var f=t.call(this,r,u,a.getComputedStyle(this,null).getPropertyValue(n));return f&&
function(t){this.style.setProperty(n,f(t),i)}}return arguments.length<3&&(i=""),this.tween("style."+
n,r)};l.text=function(n){return fl(this,"text",n,crt)};l.remove=function(){return this.each("end.transition",
function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})};l.ease=function(
t){var i=this.id;return arguments.length<1?this.node().__transition__[i].ease:(typeof t!="function"&&
(t=n.ease.apply(n,arguments)),ni(this,function(n){n.__transition__[i].ease=t}))};l.delay=function(n)
{var t=this.id;return ni(this,typeof n=="function"?function(i,r,u){i.__transition__[t].delay=+n.call(
i,i.__data__,r,u)}:(n=+n,function(i){i.__transition__[t].delay=n}))};l.duration=function(n){var t=this.
id;return ni(this,typeof n=="function"?function(i,r,u){i.__transition__[t].duration=Math.max(1,n.call(
i,i.__data__,r,u))}:(n=Math.max(1,n),function(i){i.__transition__[t].duration=n}))};l.each=function(
t,i){var r=this.id,u,f;return arguments.length<2?(u=be,f=bi,bi=r,ni(this,function(n,i,u){be=n.__transition__[
r];t.call(n,n.__data__,i,u)}),be=u,bi=f):ni(this,function(u){var f=u.__transition__[r];(f.event||(f.
event=n.dispatch("start","end"))).on(t,i)}),this};l.transition=function(){for(var s=this.id,u=++ul,f=
[],e,o,n,t,r=0,h=this.length;r<h;r++){f.push(e=[]);for(var o=this[r],i=0,c=o.length;i<c;i++)(n=o[i])&&
(t=Object.create(n.__transition__[s]),t.delay+=t.duration,ke(n,i,u,t)),e.push(n)}return yu(f,u)};n.svg.
axis=function(){function i(i){i.each(function(){var ut=n.select(this),p=this.__chart__||e,i=this.__chart__=
e.copy(),ot=s==null?i.ticks?i.ticks.apply(i,o):i.domain():s,st=h==null?i.tickFormat?i.tickFormat.apply(
i,o):v:h,w=ut.selectAll(".tick").data(ot,i),y=w.enter().insert("g",".domain").attr("class","tick").style(
"opacity",t),ht=n.transition(w.exit()).style("opacity",t).remove(),it=n.transition(w).style("opacity",
1),a,l=ve(i),ft=ut.selectAll(".domain").data([0]),b=(ft.enter().append("path").attr("class","domain"),
n.transition(ft)),rt,et;y.append("line");y.append("text");var k=y.select("line"),d=it.select("line"),
g=w.select("text").text(st),nt=y.select("text"),tt=it.select("text");switch(c){case"bottom":a=gb;k.attr(
"y2",r);nt.attr("y",Math.max(r,0)+f);d.attr("x2",0).attr("y2",r);tt.attr("x",0).attr("y",Math.max(r,
0)+f);g.attr("dy",".71em").style("text-anchor","middle");b.attr("d","M"+l[0]+","+u+"V0H"+l[1]+"V"+u);
break;case"top":a=gb;k.attr("y2",-r);nt.attr("y",-(Math.max(r,0)+f));d.attr("x2",0).attr("y2",-r);tt.
attr("x",0).attr("y",-(Math.max(r,0)+f));g.attr("dy","0em").style("text-anchor","middle");b.attr("d",
"M"+l[0]+","+-u+"V0H"+l[1]+"V"+-u);break;case"left":a=nk;k.attr("x2",-r);nt.attr("x",-(Math.max(r,0)+
f));d.attr("x2",-r).attr("y2",0);tt.attr("x",-(Math.max(r,0)+f)).attr("y",0);g.attr("dy",".32em").style(
"text-anchor","end");b.attr("d","M"+-u+","+l[0]+"H0V"+l[1]+"H"+-u);break;case"right":a=nk;k.attr("x2",
r);nt.attr("x",Math.max(r,0)+f);d.attr("x2",r).attr("y2",0);tt.attr("x",Math.max(r,0)+f).attr("y",0);
g.attr("dy",".32em").style("text-anchor","start");b.attr("d","M"+u+","+l[0]+"H0V"+l[1]+"H"+u)}i.rangeBand?
(rt=i,et=rt.rangeBand()/2,p=i=function(n){return rt(n)+et}):p.rangeBand?p=i:ht.call(a,i);y.call(a,p);
it.call(a,i)})}var e=n.scale.linear(),c=el,r=6,u=6,f=3,o=[10],s=null,h;return i.scale=function(n){return arguments.
length?(e=n,i):e},i.orient=function(n){return arguments.length?(c=n in db?n+"":el,i):c},i.ticks=function(
){return arguments.length?(o=arguments,i):o},i.tickValues=function(n){return arguments.length?(s=n,i):
s},i.tickFormat=function(n){return arguments.length?(h=n,i):h},i.tickSize=function(n){var t=arguments.
length;return t?(r=+n,u=+arguments[t-1],i):r},i.innerTickSize=function(n){return arguments.length?(r=
+n,i):r},i.outerTickSize=function(n){return arguments.length?(u=+n,i):u},i.tickPadding=function(n){return arguments.
length?(f=+n,i):f},i.tickSubdivide=function(){return arguments.length&&i},i};el="bottom";db={top:1,right:
1,bottom:1,left:1};n.svg.brush=function(){function f(t){t.each(function(){var i=n.select(this).style(
"pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",b).
on("touchstart.brush",b),h=i.selectAll(".background").data([0]),e,o,s,t;h.enter().append("rect").attr(
"class","background").style("visibility","hidden").style("cursor","crosshair");i.selectAll(".extent").
data([0]).enter().append("rect").attr("class","extent").style("cursor","move");e=i.selectAll(".resize").
data(l,v);e.exit().remove();e.enter().append("g").attr("class",function(n){return"resize "+n}).style(
"cursor",function(n){return lrt[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}
).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility",
"hidden");e.style("display",f.empty()?"none":null);o=n.transition(i);s=n.transition(h);r&&(t=ve(r),s.
attr("x",t[0]).attr("width",t[1]-t[0]),p(o));u&&(t=ve(u),s.attr("y",t[0]).attr("height",t[1]-t[0]),w(
o));y(o)})}function y(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+t[+/e$/.
test(n)]+","+i[+/^s/.test(n)]+")"})}function p(n){n.select(".extent").attr("x",t[0]);n.selectAll(".extent,.n>rect,.s>rect").
attr("width",t[1]-t[0])}function w(n){n.select(".extent").attr("y",i[0]);n.selectAll(".extent,.e>rect,.w>rect").
attr("height",i[1]-i[0])}function b(){function at(){n.event.keyCode==32&&(v||(b=null,l[0]-=t[1],l[1]-=
i[1],v=2),dt())}function vt(){n.event.keyCode==32&&v==2&&(l[0]+=t[1],l[1]+=i[1],v=0,dt())}function tt(
){var f=n.mouse(g),e=!1;nt&&(f[0]+=nt[0],f[1]+=nt[1]);v||(n.event.altKey?(b||(b=[(t[0]+t[1])/2,(i[0]+
i[1])/2]),l[0]=t[+(f[0]<b[0])],l[1]=i[+(f[1]<b[1])]):b=null);ht&&ot(f,r,0)&&(p(k),e=!0);ct&&ot(f,u,1)&&
(w(k),e=!0);e&&(y(k),rt({type:"brush",mode:v?"move":"resize"}))}function ot(n,r,u){var k=ve(r),p=k[0],
w=k[1],c=l[u],a=u?i:t,d=a[1]-a[0],f,y;return v&&(p-=c,w-=d+c),f=(u?h:s)?Math.max(p,Math.min(w,n[u])):
n[u],v?y=(f+=c)+d:(b&&(c=Math.max(p,Math.min(w,2*b[u]-f))),c<f?(y=f,f=c):y=c),a[0]!=f||a[1]!=y?(u?o=
null:e=null,a[0]=f,a[1]=y,!0):void 0}function st(){tt();k.style("pointer-events","all").selectAll(".resize").
style("display",f.empty()?"none":null);n.select("body").style("cursor",null);ut.on("mousemove.brush",
null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",
null).on("keyup.brush",null);lt();rt({type:"brushend"})}var g=this,it=n.select(n.event.target),rt=c.
of(g,arguments),k=n.select(g),d=it.datum(),ht=!/^(n|s)$/.test(d)&&r,ct=!/^(e|w)$/.test(d)&&u,v=it.classed(
"extent"),lt=du(),b,l=n.mouse(g),nt,ut=n.select(a).on("keydown.brush",at).on("keyup.brush",vt),ft,et;
if(n.event.changedTouches)ut.on("touchmove.brush",tt).on("touchend.brush",st);else ut.on("mousemove.brush",
tt).on("mouseup.brush",st);k.interrupt().selectAll("*").interrupt();v?(l[0]=t[0]-l[0],l[1]=i[0]-l[1]):
d?(ft=+/w$/.test(d),et=+/^n/.test(d),nt=[t[1-ft]-l[0],i[1-et]-l[1]],l[0]=t[ft],l[1]=i[et]):n.event.altKey&&
(b=l.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null);n.select("body").
style("cursor",it.style("cursor"));rt({type:"brushstart"});tt()}var c=lo(f,"brushstart","brush","brushend"),
r=null,u=null,t=[0,0],i=[0,0],e,o,s=!0,h=!0,l=ol[0];return f.event=function(r){r.each(function(){var
u=c.of(this,arguments),r={x:t,y:i,i:e,j:o},f=this.__chart__||r;this.__chart__=r;bi?n.select(this).transition(
).each("start.brush",function(){e=f.i;o=f.j;t=f.x;i=f.y;u({type:"brushstart"})}).tween("brush:brush",
function(){var n=le(t,r.x),f=le(i,r.y);return e=o=null,function(e){t=r.x=n(e);i=r.y=f(e);u({type:"brush",
mode:"resize"})}}).each("end.brush",function(){e=r.i;o=r.j;u({type:"brush",mode:"resize"});u({type:"brushend"})}
):(u({type:"brushstart"}),u({type:"brush",mode:"resize"}),u({type:"brushend"}))})},f.x=function(n){return arguments.
length?(r=n,l=ol[!r<<1|!u],f):r},f.y=function(n){return arguments.length?(u=n,l=ol[!r<<1|!u],f):u},f.
clamp=function(n){return arguments.length?(r&&u?(s=!!n[0],h=!!n[1]):r?s=!!n:u&&(h=!!n),f):r&&u?[s,h]:
r?s:u?h:null},f.extent=function(n){var s,h,c,l,a;return arguments.length?(r&&(s=n[0],h=n[1],u&&(s=s[
0],h=h[0]),e=[s,h],r.invert&&(s=r(s),h=r(h)),h<s&&(a=s,s=h,h=a),(s!=t[0]||h!=t[1])&&(t=[s,h])),u&&(c=
n[0],l=n[1],r&&(c=c[1],l=l[1]),o=[c,l],u.invert&&(c=u(c),l=u(l)),l<c&&(a=c,c=l,l=a),(c!=i[0]||l!=i[1])&&
(i=[c,l])),f):(r&&(e?(s=e[0],h=e[1]):(s=t[0],h=t[1],r.invert&&(s=r.invert(s),h=r.invert(h)),h<s&&(a=
s,s=h,h=a))),u&&(o?(c=o[0],l=o[1]):(c=i[0],l=i[1],u.invert&&(c=u.invert(c),l=u.invert(l)),l<c&&(a=c,
c=l,l=a))),r&&u?[[s,c],[h,l]]:r?[s,h]:u&&[c,l])},f.clear=function(){return f.empty()||(t=[0,0],i=[0,
0],e=o=null),f},f.empty=function(){return!!r&&t[0]==t[1]||!!u&&i[0]==i[1]},n.rebind(f,c,"on")};var lrt=
{n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",
sw:"nesw-resize"},ol=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],i=n.time={},y=Date;
pt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay(
)},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours(
)},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this.
_.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this.
_.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0}
,valueOf:function(){return this._.valueOf()},setDate:function(){wt.setUTCDate.apply(this._,arguments)}
,setDay:function(){wt.setUTCDay.apply(this._,arguments)},setFullYear:function(){wt.setUTCFullYear.apply(
this._,arguments)},setHours:function(){wt.setUTCHours.apply(this._,arguments)},setMilliseconds:function(
){wt.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){wt.setUTCMinutes.apply(this._,
arguments)},setMonth:function(){wt.setUTCMonth.apply(this._,arguments)},setSeconds:function(){wt.setUTCSeconds.
apply(this._,arguments)},setTime:function(){wt.setTime.apply(this._,arguments)}};var wt=Date.prototype,
sl=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],hl=["Sun","Mon","Tue","Wed",
"Thu","Fri","Sat"],cl=["January","February","March","April","May","June","July","August","September",
"October","November","December"],ll=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov",
"Dec"];i.year=ki(function(n){return n=i.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear(
)+t)},function(n){return n.getFullYear()});i.years=i.year.range;i.years.utc=i.year.utc.range;i.day=ki(
function(n){var t=new y(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(
n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1});i.days=i.day.range;i.days.utc=i.day.
utc.range;i.dayOfYear=function(n){var t=i.year(n);return Math.floor((n-t-(n.getTimezoneOffset()-t.getTimezoneOffset(
))*6e4)/864e5)};["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].forEach(function(
n,t){n=n.toLowerCase();t=7-t;var r=i[n]=ki(function(n){return(n=i.day(n)).setDate(n.getDate()-(n.getDay(
)+t)%7),n},function(n,t){n.setDate(n.getDate()+Math.floor(t)*7)},function(n){var r=i.year(n).getDay(
);return Math.floor((i.dayOfYear(n)+(r+t)%7)/7)-(r!==t)});i[n+"s"]=r.range;i[n+"s"].utc=r.utc.range;
i[n+"OfYear"]=function(n){var r=i.year(n).getDay();return Math.floor((i.dayOfYear(n)+(r+t)%7)/7)}});
i.week=i.sunday;i.weeks=i.sunday.range;i.weeks.utc=i.sunday.utc.range;i.weekOfYear=i.sundayOfYear;i.
format=p;var tk=no(sl),art=to(sl),ik=no(hl),vrt=to(hl),rk=no(cl),yrt=to(cl),uk=no(ll),prt=to(ll),fk=
/^%/,ek={"-":"",_:" ","0":"0"},io={a:function(n){return hl[n.getDay()]},A:function(n){return sl[n.getDay(
)]},b:function(n){return ll[n.getMonth()]},B:function(n){return cl[n.getMonth()]},c:p("%a %b %e %X %Y"),
d:function(n,t){return w(n.getDate(),t,2)},e:function(n,t){return w(n.getDate(),t,2)},H:function(n,t)
{return w(n.getHours(),t,2)},I:function(n,t){return w(n.getHours()%12||12,t,2)},j:function(n,t){return w(
1+i.dayOfYear(n),t,3)},L:function(n,t){return w(n.getMilliseconds(),t,3)},m:function(n,t){return w(n.
getMonth()+1,t,2)},M:function(n,t){return w(n.getMinutes(),t,2)},p:function(n){return n.getHours()>=
12?"PM":"AM"},S:function(n,t){return w(n.getSeconds(),t,2)},U:function(n,t){return w(i.sundayOfYear(
n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return w(i.mondayOfYear(n),t,2)},x:p("%m/%d/%Y"),
X:p("%H:%M:%S"),y:function(n,t){return w(n.getFullYear()%100,t,2)},Y:function(n,t){return w(n.getFullYear(
)%1e4,t,4)},Z:wut,"%":function(){return"%"}},wrt={a:brt,A:krt,b:tut,B:iut,c:rut,d:ok,e:ok,H:sk,I:sk,
j:lut,L:yut,m:cut,M:aut,p:put,S:vut,U:grt,w:drt,W:nut,x:uut,X:fut,y:out,Y:eut,Z:sut,"%":but};h=/^\s*\d+/;
hk=n.map({am:0,pm:1});p.utc=ot;al=ot("%Y-%m-%dT%H:%M:%S.%LZ");p.iso=Date.prototype.toISOString&&+new
Date("2000-01-01T00:00:00.000Z")?vl:al;vl.parse=function(n){var t=new Date(n);return isNaN(t)?null:t}
;vl.toString=al.toString;i.second=ki(function(n){return new y(Math.floor(n/1e3)*1e3)},function(n,t){
n.setTime(n.getTime()+Math.floor(t)*1e3)},function(n){return n.getSeconds()});i.seconds=i.second.range;
i.seconds.utc=i.second.utc.range;i.minute=ki(function(n){return new y(Math.floor(n/6e4)*6e4)},function(
n,t){n.setTime(n.getTime()+Math.floor(t)*6e4)},function(n){return n.getMinutes()});i.minutes=i.minute.
range;i.minutes.utc=i.minute.utc.range;i.hour=ki(function(n){var t=n.getTimezoneOffset()/60;return new
y((Math.floor(n/36e5-t)+t)*36e5)},function(n,t){n.setTime(n.getTime()+Math.floor(t)*36e5)},function(
n){return n.getHours()});i.hours=i.hour.range;i.hours.utc=i.hour.utc.range;i.month=ki(function(n){return n=
i.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()});
i.months=i.month.range;i.months.utc=i.month.utc.range;var ro=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,
108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],pl=[[i.second,1],[i.second,5],[i.second,
15],[i.second,30],[i.minute,1],[i.minute,5],[i.minute,15],[i.minute,30],[i.hour,1],[i.hour,3],[i.hour,
6],[i.hour,12],[i.day,1],[i.day,2],[i.week,1],[i.month,1],[i.month,3],[i.year,1]],kut=[[p("%Y"),sr],
[p("%B"),function(n){return n.getMonth()}],[p("%b %d"),function(n){return n.getDate()!=1}],[p("%a %d"),
function(n){return n.getDay()&&n.getDate()!=1}],[p("%I %p"),function(n){return n.getHours()}],[p("%I:%M"),
function(n){return n.getMinutes()}],[p(":%S"),function(n){return n.getSeconds()}],[p(".%L"),function(
n){return n.getMilliseconds()}]],dut=ck(kut);pl.year=i.year;i.scale=function(){return yl(n.scale.linear(
),pl,dut)};var gut={range:function(t,i,r){return n.range(+t,+i,r).map(di)}},lk=pl.map(function(n){return[
n[0].utc,n[1]]}),nft=[[ot("%Y"),sr],[ot("%B"),function(n){return n.getUTCMonth()}],[ot("%b %d"),function(
n){return n.getUTCDate()!=1}],[ot("%a %d"),function(n){return n.getUTCDay()&&n.getUTCDate()!=1}],[ot(
"%I %p"),function(n){return n.getUTCHours()}],[ot("%I:%M"),function(n){return n.getUTCMinutes()}],[ot(
":%S"),function(n){return n.getUTCSeconds()}],[ot(".%L"),function(n){return n.getUTCMilliseconds()}]],
tft=ck(nft);return lk.year=i.year.utc,i.scale.utc=function(){return yl(n.scale.linear(),lk,tft)},n.text=
ls(function(n){return n.responseText}),n.json=function(n,t){return as(n,"application/json",ift,t)},n.
html=function(n,t){return as(n,"text/html",rft,t)},n.xml=ls(function(n){return n.responseXML}),n}();
/*! Hammer.JS - v1.1.3 - 2014-05-20
 * http://eightmedia.github.io/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
(function(n,t){"use strict";function g(){if(!i.READY){h.determineEventTypes();r.each(i.gestures,function(
n){u.register(n)});h.onTouch(i.DOCUMENT,o,u.detect);h.onTouch(i.DOCUMENT,f,u.detect);i.READY=!0}}var
i=function i(n,t){return new i.Instance(n,t||{})};i.VERSION="1.1.3";i.defaults={behavior:{userSelect:
"none",touchAction:"pan-y",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:
"rgba(0,0,0,0)"}};i.DOCUMENT=document;i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled;
i.HAS_TOUCHEVENTS="ontouchstart"in n;i.IS_MOBILE=/mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.
userAgent);i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&i.IS_MOBILE||i.HAS_POINTEREVENTS;i.CALCULATE_INTERVAL=
25;var l={},w=i.DIRECTION_DOWN="down",k=i.DIRECTION_LEFT="left",b=i.DIRECTION_UP="up",d=i.DIRECTION_RIGHT=
"right",a=i.POINTER_MOUSE="mouse",y=i.POINTER_TOUCH="touch",p=i.POINTER_PEN="pen",e=i.EVENT_START="start",
o=i.EVENT_MOVE="move",f=i.EVENT_END="end",s=i.EVENT_RELEASE="release",v=i.EVENT_TOUCH="touch";i.READY=
!1;i.plugins=i.plugins||{};i.gestures=i.gestures||{};var r=i.utils={extend:function(n,i,r){for(var u
in i)i.hasOwnProperty(u)&&(n[u]===t||!r)&&(n[u]=i[u]);return n},on:function(n,t,i){n.addEventListener(
t,i,!1)},off:function(n,t,i){n.removeEventListener(t,i,!1)},each:function(n,i,r){var u,f;if("forEach"in
n)n.forEach(i,r);else if(n.length!==t){for(u=0,f=n.length;u<f;u++)if(i.call(r,n[u],u,n)===!1)return}
else for(u in n)if(n.hasOwnProperty(u)&&i.call(r,n[u],u,n)===!1)return},inStr:function(n,t){return n.
indexOf(t)>-1},inArray:function(n,t){var r,i,u;if(n.indexOf)return r=n.indexOf(t),r===-1?!1:r;for(i=
0,u=n.length;i<u;i++)if(n[i]===t)return i;return!1},toArray:function(n){return Array.prototype.slice.
call(n,0)},hasParent:function(n,t){while(n){if(n==t)return!0;n=n.parentNode}return!1},getCenter:function(
n){var u=[],f=[],e=[],o=[],t=Math.min,i=Math.max;return n.length===1?{pageX:n[0].pageX,pageY:n[0].pageY,
clientX:n[0].clientX,clientY:n[0].clientY}:(r.each(n,function(n){u.push(n.pageX);f.push(n.pageY);e.push(
n.clientX);o.push(n.clientY)}),{pageX:(t.apply(Math,u)+i.apply(Math,u))/2,pageY:(t.apply(Math,f)+i.apply(
Math,f))/2,clientX:(t.apply(Math,e)+i.apply(Math,e))/2,clientY:(t.apply(Math,o)+i.apply(Math,o))/2})}
,getVelocity:function(n,t,i){return{x:Math.abs(t/n)||0,y:Math.abs(i/n)||0}},getAngle:function(n,t){var
i=t.clientX-n.clientX,r=t.clientY-n.clientY;return Math.atan2(r,i)*180/Math.PI},getDirection:function(
n,t){var i=Math.abs(n.clientX-t.clientX),r=Math.abs(n.clientY-t.clientY);return i>=r?n.clientX-t.clientX>
0?k:d:n.clientY-t.clientY>0?b:w},getDistance:function(n,t){var i=t.clientX-n.clientX,r=t.clientY-n.clientY;
return Math.sqrt(i*i+r*r)},getScale:function(n,t){return n.length>=2&&t.length>=2?this.getDistance(t[
0],t[1])/this.getDistance(n[0],n[1]):1},getRotation:function(n,t){return n.length>=2&&t.length>=2?this.
getAngle(t[1],t[0])-this.getAngle(n[1],n[0]):0},isVertical:function(n){return n==b||n==w},setPrefixedCss:
function(n,t,i,u){var o=["","Webkit","Moz","O","ms"],e,f;for(t=r.toCamelCase(t),e=0;e<o.length;e++)if(
f=t,o[e]&&(f=o[e]+f.slice(0,1).toUpperCase()+f.slice(1)),f in n.style){n.style[f]=(u==null||u)&&i||"";
break}},toggleBehavior:function(n,t,i){if(t&&n&&n.style){r.each(t,function(t,u){r.setPrefixedCss(n,u,
t,i)});var u=i&&function(){return!1};t.userSelect=="none"&&(n.onselectstart=u);t.userDrag=="none"&&(
n.ondragstart=u)}},toCamelCase:function(n){return n.replace(/[_-]([a-z])/g,function(n){return n[1].toUpperCase(
)})}},h=i.event={preventMouseEvents:!1,started:!1,shouldDetect:!1,on:function(n,t,i,u){var f=t.split(
" ");r.each(f,function(t){r.on(n,t,i);u&&u(t)})},off:function(n,t,i,u){var f=t.split(" ");r.each(f,function(
t){r.off(n,t,i);u&&u(t)})},onTouch:function(n,t,u){var o=this,s=function(s){var v=s.type.toLowerCase(
),h=i.HAS_POINTEREVENTS,l=r.inStr(v,"mouse"),a;l&&o.preventMouseEvents||(l&&t==e&&s.button===0?(o.preventMouseEvents=
!1,o.shouldDetect=!0):h&&t==e?o.shouldDetect=s.buttons===1||c.matchType(y,s):l||t!=e||(o.preventMouseEvents=
!0,o.shouldDetect=!0),h&&t!=f&&c.updatePointer(t,s),o.shouldDetect&&(a=o.doDetect.call(o,s,t,n,u)),a==
f&&(o.preventMouseEvents=!1,o.shouldDetect=!1,c.reset()),h&&t==f&&c.updatePointer(t,s))};this.on(n,l[
t],s);return s},doDetect:function(n,t,i,r){var l=this.getTouchList(n,t),p=l.length,c=t,a=l.trigger,y=
p,h;return t==e?a=v:t==f&&(a=s,y=l.length-(n.changedTouches?n.changedTouches.length:1)),y>0&&this.started&&
(c=o),this.started=!0,h=this.collectEventData(i,c,l,n),t!=f&&r.call(u,h),a&&(h.changedLength=y,h.eventType=
a,r.call(u,h),h.eventType=c,delete h.changedLength),c==f&&(r.call(u,h),this.started=!1),c},determineEventTypes:
function(){var t;return t=i.HAS_POINTEREVENTS?n.PointerEvent?["pointerdown","pointermove","pointerup pointercancel lostpointercapture"]:
["MSPointerDown","MSPointerMove","MSPointerUp MSPointerCancel MSLostPointerCapture"]:i.NO_MOUSEEVENTS?
["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],
l[e]=t[0],l[o]=t[1],l[f]=t[2],l},getTouchList:function(n,t){if(i.HAS_POINTEREVENTS)return c.getTouchList(
);if(n.touches){if(t==o)return n.touches;var u=[],e=[].concat(r.toArray(n.touches),r.toArray(n.changedTouches)),
f=[];return r.each(e,function(n){r.inArray(u,n.identifier)===!1&&f.push(n);u.push(n.identifier)}),f}
return n.identifier=1,[n]},collectEventData:function(n,t,i,f){var e=y;return r.inStr(f.type,"mouse")||
c.matchType(a,f)?e=a:c.matchType(p,f)&&(e=p),{center:r.getCenter(i),timeStamp:Date.now(),target:f.target,
touches:i,eventType:t,pointerType:e,srcEvent:f,preventDefault:function(){var n=this.srcEvent;n.preventManipulation&&
n.preventManipulation();n.preventDefault&&n.preventDefault()},stopPropagation:function(){this.srcEvent.
stopPropagation()},stopDetect:function(){return u.stopDetect()}}}},c=i.PointerEvent={pointers:{},getTouchList:
function(){var n=[];return r.each(this.pointers,function(t){n.push(t)}),n},updatePointer:function(n,
t){n==f||n!=f&&t.buttons!==1?delete this.pointers[t.pointerId]:(t.identifier=t.pointerId,this.pointers[
t.pointerId]=t)},matchType:function(n,t){if(!t.pointerType)return!1;var r=t.pointerType,i={};return i[
a]=r===(t.MSPOINTER_TYPE_MOUSE||a),i[y]=r===(t.MSPOINTER_TYPE_TOUCH||y),i[p]=r===(t.MSPOINTER_TYPE_PEN||
p),i[n]},reset:function(){this.pointers={}}},u=i.detection={gestures:[],current:null,previous:null,stopped:
!1,startDetect:function(n,t){this.current||(this.stopped=!1,this.current={inst:n,startEvent:r.extend(
{},t),lastEvent:!1,lastCalcEvent:!1,futureCalcEvent:!1,lastCalcData:{},name:""},this.detect(t))},detect:
function(n){if(this.current&&!this.stopped){n=this.extendEventData(n);var t=this.current.inst,i=t.options;
return r.each(this.gestures,function(r){!this.stopped&&t.enabled&&i[r.name]&&r.handler.call(r,n,t)},
this),this.current&&(this.current.lastEvent=n),n.eventType==f&&this.stopDetect(),n}},stopDetect:function(
){this.previous=r.extend({},this.current);this.current=null;this.stopped=!0},getCalculatedData:function(
n,t,u,f,e){var o=this.current,l=!1,c=o.lastCalcEvent,h=o.lastCalcData;c&&n.timeStamp-c.timeStamp>i.CALCULATE_INTERVAL&&
(t=c.center,u=n.timeStamp-c.timeStamp,f=n.center.clientX-c.center.clientX,e=n.center.clientY-c.center.
clientY,l=!0);(n.eventType==v||n.eventType==s)&&(o.futureCalcEvent=n);(!o.lastCalcEvent||l)&&(h.velocity=
r.getVelocity(u,f,e),h.angle=r.getAngle(t,n.center),h.direction=r.getDirection(t,n.center),o.lastCalcEvent=
o.futureCalcEvent||n,o.futureCalcEvent=n);n.velocityX=h.velocity.x;n.velocityY=h.velocity.y;n.interimAngle=
h.angle;n.interimDirection=h.direction},extendEventData:function(n){var i=this.current,t=i.startEvent,
o=i.lastEvent||t;(n.eventType==v||n.eventType==s)&&(t.touches=[],r.each(n.touches,function(n){t.touches.
push({clientX:n.clientX,clientY:n.clientY})}));var u=n.timeStamp-t.timeStamp,f=n.center.clientX-t.center.
clientX,e=n.center.clientY-t.center.clientY;return this.getCalculatedData(n,o.center,u,f,e),r.extend(
n,{startEvent:t,deltaTime:u,deltaX:f,deltaY:e,distance:r.getDistance(t.center,n.center),angle:r.getAngle(
t.center,n.center),direction:r.getDirection(t.center,n.center),scale:r.getScale(t.touches,n.touches),
rotation:r.getRotation(t.touches,n.touches)}),n},register:function(n){var u=n.defaults||{};return u[
n.name]===t&&(u[n.name]=!0),r.extend(i.defaults,u,!0),n.index=n.index||1e3,this.gestures.push(n),this.
gestures.sort(function(n,t){return n.index<t.index?-1:n.index>t.index?1:0}),this.gestures}};i.Instance=
function(n,t){var f=this;g();this.element=n;this.enabled=!0;r.each(t,function(n,i){delete t[i];t[r.toCamelCase(
i)]=n});this.options=r.extend(r.extend({},i.defaults),t||{});this.options.behavior&&r.toggleBehavior(
this.element,this.options.behavior,!0);this.eventStartHandler=h.onTouch(n,e,function(n){f.enabled&&n.
eventType==e?u.startDetect(f,n):n.eventType==v&&u.detect(n)});this.eventHandlers=[]};i.Instance.prototype=
{on:function(n,t){var i=this;h.on(i.element,n,t,function(n){i.eventHandlers.push({gesture:n,handler:
t})});return i},off:function(n,t){var i=this;return h.off(i.element,n,t,function(n){var u=r.inArray(
{gesture:n,handler:t});u!==!1&&i.eventHandlers.splice(u,1)}),i},trigger:function(n,t){var u,f;return t||
(t={}),u=i.DOCUMENT.createEvent("Event"),u.initEvent(n,!0,!0),u.gesture=t,f=this.element,r.hasParent(
t.target,f)&&(f=t.target),f.dispatchEvent(u),this},enable:function(n){return this.enabled=n,this},dispose:
function(){var t,n;for(r.toggleBehavior(this.element,this.options.behavior,!1),t=-1;n=this.eventHandlers[
++t];)r.off(this.element,n.gesture,n.handler);return this.eventHandlers=[],h.off(this.element,l[e],this.
eventStartHandler),null}},function(n){function h(i,h){var c=u.current,l,a,v,y;if(!(h.options.dragMaxTouches>
0)||!(i.touches.length>h.options.dragMaxTouches))switch(i.eventType){case e:t=!1;break;case o:if(i.distance<
h.options.dragMinDistance&&c.name!=n)return;l=c.startEvent.center;c.name!=n&&(c.name=n,h.options.dragDistanceCorrection&&
i.distance>0&&(a=Math.abs(h.options.dragMinDistance/i.distance),l.pageX+=i.deltaX*a,l.pageY+=i.deltaY*
a,l.clientX+=i.deltaX*a,l.clientY+=i.deltaY*a,i=u.extendEventData(i)));(c.lastEvent.dragLockToAxis||
h.options.dragLockToAxis&&h.options.dragLockMinDistance<=i.distance)&&(i.dragLockToAxis=!0);v=c.lastEvent.
direction;i.dragLockToAxis&&v!==i.direction&&(i.direction=r.isVertical(v)?i.deltaY<0?b:w:i.deltaX<0?
k:d);t||(h.trigger(n+"start",i),t=!0);h.trigger(n,i);h.trigger(n+i.direction,i);y=r.isVertical(i.direction);
(h.options.dragBlockVertical&&y||h.options.dragBlockHorizontal&&!y)&&i.preventDefault();break;case s:
t&&i.changedLength<=h.options.dragMaxTouches&&(h.trigger(n+"end",i),t=!1);break;case f:t=!1}}var t=!1;
i.gestures.Drag={name:n,index:50,handler:h,defaults:{dragMinDistance:10,dragDistanceCorrection:!0,dragMaxTouches:
1,dragBlockHorizontal:!1,dragBlockVertical:!1,dragLockToAxis:!1,dragLockMinDistance:25}}}("drag");i.
gestures.Gesture={name:"gesture",index:1337,handler:function(n,t){t.trigger(this.name,n)}},function(
n){function r(i,r){var h=r.options,f=u.current;switch(i.eventType){case e:clearTimeout(t);f.name=n;t=
setTimeout(function(){f&&f.name==n&&r.trigger(n,i)},h.holdTimeout);break;case o:i.distance>h.holdThreshold&&
clearTimeout(t);break;case s:clearTimeout(t)}}var t;i.gestures.Hold={name:n,index:10,defaults:{holdTimeout:
500,holdThreshold:2},handler:r}}("hold");i.gestures.Release={name:"release",index:Infinity,handler:function(
n,t){n.eventType==s&&t.trigger(this.name,n)}};i.gestures.Swipe={name:"swipe",index:40,defaults:{swipeMinTouches:
1,swipeMaxTouches:1,swipeVelocityX:.6,swipeVelocityY:.6},handler:function(n,t){if(n.eventType==s){var
r=n.touches.length,i=t.options;if(r<i.swipeMinTouches||r>i.swipeMaxTouches)return;(n.velocityX>i.swipeVelocityX||
n.velocityY>i.swipeVelocityY)&&(t.trigger(this.name,n),t.trigger(this.name+n.direction,n))}}},function(
n){function s(i,s){var h=s.options,v=u.current,c=u.previous,l,a;switch(i.eventType){case e:t=!1;break
case o:t=t||i.distance>h.tapMaxDistance;break;case f:!r.inStr(i.srcEvent.type,"cancel")&&i.deltaTime<
h.tapMaxTime&&!t&&(l=c&&c.lastEvent&&i.timeStamp-c.lastEvent.timeStamp,a=!1,c&&c.name==n&&l&&l<h.doubleTapInterval&&
i.distance<h.doubleTapDistance&&(s.trigger("doubletap",i),a=!0),(!a||h.tapAlways)&&(v.name=n,s.trigger(
v.name,i)))}}var t=!1;i.gestures.Tap={name:n,index:100,handler:s,defaults:{tapMaxTime:250,tapMaxDistance:
10,tapAlways:!0,doubleTapDistance:20,doubleTapInterval:300}}}("tap");i.gestures.Touch={name:"touch",
index:-Infinity,defaults:{preventDefault:!1,preventMouse:!1},handler:function(n,t){if(t.options.preventMouse&&
n.pointerType==a){n.stopDetect();return}t.options.preventDefault&&n.preventDefault();n.eventType==v&&
t.trigger("touch",n)}},function(n){function r(i,r){switch(i.eventType){case e:t=!1;break;case o:if(i.
touches.length<2)return;var f=Math.abs(1-i.scale),h=Math.abs(i.rotation);if(f<r.options.transformMinScale&&
h<r.options.transformMinRotation)return;u.current.name=n;t||(r.trigger(n+"start",i),t=!0);r.trigger(
n,i);h>r.options.transformMinRotation&&r.trigger("rotate",i);f>r.options.transformMinScale&&(r.trigger(
"pinch",i),r.trigger("pinch"+(i.scale<1?"in":"out"),i));break;case s:t&&i.changedLength<2&&(r.trigger(
n+"end",i),t=!1)}}var t=!1;i.gestures.Transform={name:n,index:45,defaults:{transformMinScale:.01,transformMinRotation:
1},handler:r}}("transform");n.Hammer=i})(window),function(){var n=!1;window.JQClass=function(){};JQClass.
classes={};JQClass.extend=function t(i){function u(){!n&&this._init&&this._init.apply(this,arguments)}
var e=this.prototype,f,r;n=!0;f=new this;n=!1;for(r in i)f[r]=typeof i[r]=="function"&&typeof e[r]==
"function"?function(n,t){return function(){var r=this._super,i;return this._super=function(t){return e[
n].apply(this,t||[])},i=t.apply(this,arguments),this._super=r,i}}(r,i[r]):i[r];return u.prototype=f,
u.prototype.constructor=u,u.extend=t,u}}(),function(n){function t(n){return n.replace(/-([a-z])/g,function(
n,t){return t.toUpperCase()})}JQClass.classes.JQPlugin=JQClass.extend({name:"plugin",defaultOptions:
{},regionalOptions:{},_getters:[],_getMarker:function(){return"is-"+this.name},_init:function(){n.extend(
this.defaultOptions,this.regionalOptions&&this.regionalOptions[""]||{});var i=t(this.name);n[i]=this;
n.fn[i]=function(t){var r=Array.prototype.slice.call(arguments,1);return n[i]._isNotChained(t,r)?n[i][
t].apply(n[i],[this[0]].concat(r)):this.each(function(){if(typeof t=="string"){if(t[0]==="_"||!n[i][
t])throw"Unknown method: "+t;n[i][t].apply(n[i],[this].concat(r))}else n[i]._attach(this,t)})}},setDefaults:
function(t){n.extend(this.defaultOptions,t||{})},_isNotChained:function(t,i){return t==="option"&&(i.
length===0||i.length===1&&typeof i[0]=="string")?!0:n.inArray(t,this._getters)>-1},_attach:function(
t,i){if(t=n(t),!t.hasClass(this._getMarker())){t.addClass(this._getMarker());i=n.extend({},this.defaultOptions,
this._getMetadata(t),i||{});var r=n.extend({name:this.name,elem:t,options:i},this._instSettings(t,i));
t.data(this.name,r);this._postAttach(t,r);this.option(t,i)}},_instSettings:function(){return{}},_postAttach:
function(){},_getMetadata:function(t){var i,u,r;try{i=t.data(this.name.toLowerCase())||"";i=i.replace(
/'/g,'"');i=i.replace(/([a-zA-Z0-9]+):/g,function(n,t,r){var u=i.substring(0,r).match(/"/g);return!u||
u.length%2==0?'"'+t+'":':t+":"});i=n.parseJSON("{"+i+"}");for(u in i)r=i[u],typeof r=="string"&&r.match(
/^new Date\((.*)\)$/)&&(i[u]=eval(r));return i}catch(f){return{}}},_getInst:function(t){return n(t).
data(this.name)||{}},option:function(t,i,r){var f,u;if(t=n(t),f=t.data(this.name),!i||typeof i=="string"&&
r==null)return u=(f||{}).options,u&&i?u[i]:u;t.hasClass(this._getMarker())&&(u=i||{},typeof i=="string"&&
(u={},u[i]=r),this._optionsChanged(t,f,u),n.extend(f.options,u))},_optionsChanged:function(){},destroy:
function(t){(t=n(t),t.hasClass(this._getMarker()))&&(this._preDestroy(t,this._getInst(t)),t.removeData(
this.name).removeClass(this._getMarker()))},_preDestroy:function(){}});n.JQPlugin={createPlugin:function(
n,i){typeof n=="object"&&(i=n,n="JQPlugin");n=t(n);var r=t(i.name);JQClass.classes[r]=JQClass.classes[
n].extend(i);new JQClass.classes[r]}}}(jQuery);
/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
(function(n){typeof define=="function"&&define.amd?define(["jquery"],n):typeof exports=="object"?module.
exports=n:n(jQuery)})(function(n){function e(r){var f=r||window.event,w=h.call(arguments,1),l=0,o=0,
e=0,a=0,b=0,k=0,v,y,p;if(r=n.event.fix(f),r.type="mousewheel","detail"in f&&(e=f.detail*-1),"wheelDelta"in
f&&(e=f.wheelDelta),"wheelDeltaY"in f&&(e=f.wheelDeltaY),"wheelDeltaX"in f&&(o=f.wheelDeltaX*-1),"axis"in
f&&f.axis===f.HORIZONTAL_AXIS&&(o=e*-1,e=0),l=e===0?o:e,"deltaY"in f&&(e=f.deltaY*-1,l=e),"deltaX"in
f&&(o=f.deltaX,e===0&&(l=o*-1)),e!==0||o!==0)return f.deltaMode===1?(v=n.data(this,"mousewheel-line-height"),
l*=v,e*=v,o*=v):f.deltaMode===2&&(y=n.data(this,"mousewheel-page-height"),l*=y,e*=y,o*=y),a=Math.max(
Math.abs(e),Math.abs(o)),(!t||a<t)&&(t=a,s(f,a)&&(t/=40)),s(f,a)&&(l/=40,o/=40,e/=40),l=Math[l>=1?"floor":
"ceil"](l/t),o=Math[o>=1?"floor":"ceil"](o/t),e=Math[e>=1?"floor":"ceil"](e/t),i.settings.normalizeOffset&&
this.getBoundingClientRect&&(p=this.getBoundingClientRect(),b=r.clientX-p.left,k=r.clientY-p.top),r.
deltaX=o,r.deltaY=e,r.deltaFactor=t,r.offsetX=b,r.offsetY=k,r.deltaMode=0,w.unshift(r,l,o,e),u&&clearTimeout(
u),u=setTimeout(c,200),(n.event.dispatch||n.event.handle).apply(this,w)}function c(){t=null}function s(
n,t){return i.settings.adjustOldDeltas&&n.type==="mousewheel"&&t%120==0}var o=["wheel","mousewheel",
"DOMMouseScroll","MozMousePixelScroll"],r="onwheel"in document||document.documentMode>=9?["wheel"]:[
"mousewheel","DomMouseScroll","MozMousePixelScroll"],h=Array.prototype.slice,u,t,f,i;if(n.event.fixHooks)
for(f=o.length;f;)n.event.fixHooks[o[--f]]=n.event.mouseHooks;i=n.event.special.mousewheel={version:
"3.1.12",setup:function(){if(this.addEventListener)for(var t=r.length;t;)this.addEventListener(r[--t],
e,!1);else this.onmousewheel=e;n.data(this,"mousewheel-line-height",i.getLineHeight(this));n.data(this,
"mousewheel-page-height",i.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(
var t=r.length;t;)this.removeEventListener(r[--t],e,!1);else this.onmousewheel=null;n.removeData(this,
"mousewheel-line-height");n.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var
r=n(t),i=r["offsetParent"in n.fn?"offsetParent":"parent"]();return i.length||(i=n("body")),parseInt(
i.css("fontSize"),10)||parseInt(r.css("fontSize"),10)||16},getPageHeight:function(t){return n(t).height(
)},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};n.fn.extend({mousewheel:function(n){return n?this.
bind("mousewheel",n):this.trigger("mousewheel")},unmousewheel:function(n){return this.unbind("mousewheel",
n)}})}),function(n){var i="dateEntry",t;n.JQPlugin.createPlugin({name:i,defaultOptions:{appendText:"",
initialField:null,tabToExit:!1,useMouseWheel:!0,defaultDate:null,minDate:null,maxDate:null,spinnerImage:
"spinnerDefault.png",spinnerSize:[20,20,8],spinnerBigImage:"",spinnerBigSize:[40,40,16],spinnerIncDecOnly:
!1,spinnerRepeat:[500,250],beforeShow:null,altField:null,altFormat:null},regionalOptions:{"":{dateFormat:
"mdy/",monthNames:["January","February","March","April","May","June","July","August","September","October",
"November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct",
"Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:
["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],spinnerTexts:["Today","Previous field","Next field","Increment",
"Decrement"]}},_getters:["getDate","isDisabled"],_appendClass:i+"-append",_controlClass:i+"-control",
_expandClass:i+"-expand",_disabledInputs:[],_instSettings:function(){return{_field:0,_selectedYear:0,
_selectedMonth:0,_selectedDay:0}},_postAttach:function(n,i){n.on("focus."+i.name,this._doFocus).on("blur."+
i.name,this._doBlur).on("click."+i.name,this._doClick).on("keydown."+i.name,this._doKeyDown).on("keypress."+
i.name,this._doKeyPress).on("paste."+i.name,function(){setTimeout(function(){t._parseDate(i)},1)})},
_optionsChanged:function(t,i,r){var f=this._extractDate(t.val(),i),u;n.extend(i.options,r);i._field=
0;i._lastField=i.options.dateFormat[2]===" "?1:2;f&&this._setDate(i,f);t.next("span."+this._appendClass).
remove();t.parent().find("span."+this._controlClass).remove();n.fn.mousewheel&&t.unmousewheel();u=i.
options.spinnerImage?n('<span class="'+this._controlClass+'" style="display: inline-block; background: url(\''+
i.options.spinnerImage+"') 0 0 no-repeat; width: "+i.options.spinnerSize[0]+"px; height: "+i.options.
spinnerSize[1]+'px;"><\/span>'):null;t.after(i.options.appendText?'<span class="'+this._appendClass+
'">'+i.options.appendText+"<\/span>":"").after(u||"");i.options.useMouseWheel&&n.fn.mousewheel&&t.mousewheel(
this._doMouseWheel);u&&u.mousedown(this._handleSpinner).mouseup(this._endSpinner).mouseover(this._expandSpinner).
mouseout(this._endSpinner).mousemove(this._describeSpinner)},enable:function(n){this._enableDisable(
n,!1)},disable:function(n){this._enableDisable(n,!0)},_enableDisable:function(t,i){var r=this._getInst(
t);r&&(t.disabled=i,t.nextSibling&&t.nextSibling.nodeName.toLowerCase()==="span"&&this._changeSpinner(
r,t.nextSibling,i?5:-1),this._disabledInputs=n.map(this._disabledInputs,function(n){return n===t?null:
n}),i&&this._disabledInputs.push(t))},isDisabled:function(t){return n.inArray(t,this._disabledInputs)>
-1},_preDestroy:function(t){t=n(t).off("."+i);n.fn.mousewheel&&t.unmousewheel();this._disabledInputs=
n.map(this._disabledInputs,function(n){return n===t[0]?null:n});t.siblings("."+this._appendClass+",."+
this._controlClass).remove()},setDate:function(t,i){var r=this._getInst(t);r&&(i===null||i===""?n(t).
val(""):this._setDate(r,i?typeof i=="object"?new Date(i.getTime()):i:null))},getDate:function(n){var
t=this._getInst(n);return t?this._extractDate(t.elem.val(),t):null},_doFocus:function(i){var u=i.nodeName&&
i.nodeName.toLowerCase()==="input"?i:this,r;t._lastInput===u||t.isDisabled(u)||(r=t._getInst(u),r._field=
0,t._lastInput=u,t._blurredInput=null,n.extend(r.options,n.isFunction(r.options.beforeShow)?r.options.
beforeShow.apply(u,[u]):{}),t._parseDate(r,i.nodeName?null:i),setTimeout(function(){t._showField(r)}
,10))},_doBlur:function(){t._blurredInput=t._lastInput;t._lastInput=null},_doClick:function(n){var r=
n.target,i=t._getInst(r),u=i._field;i._field=t._getSelection(i,r,n);u!==i._field&&(i._lastChr="");t.
_showField(i)},_getSelection:function(i,r,u){var s=0,e,f;if(typeof r.selectionStart!="undefined"){for(
e=0,f=0;f<=i._lastField;f++)if(e+=t._fieldLength(i,f,i.options.dateFormat)+1,s=f,r.selectionStart<e)
break}else if(r.createTextRange&&u!=null&&n(r).val()){var h=n(u.target||u.srcElement),o=r.createTextRange(
),c=function(n){return{thin:2,medium:4,thick:6}[n]||n},l=(u.clientX||0)+document.documentElement.scrollLeft-
(h.offset().left+parseInt(c(h.css("border-left-width")),10))-o.offsetLeft,e=0;for(f=0;f<=i._lastField;
f++)if(e+=t._fieldLength(i,f,i.options.dateFormat)+1,o.collapse(),o.moveEnd("character",e),s=f,l<o.boundingWidth)
break}return s},_doKeyDown:function(n){if(n.keyCode>=48)return!0;var i=t._getInst(n.target);switch(n.
keyCode){case 9:return i.options.tabToExit?!0:n.shiftKey?t._changeField(i,-1,!0):t._changeField(i,1,
!0);case 35:n.ctrlKey?t._setValue(i,""):(i._field=i._lastField,t._adjustField(i,0));break;case 36:n.
ctrlKey?t._setDate(i):(i._field=0,t._adjustField(i,0));break;case 37:t._changeField(i,-1,!1);break;case
38:t._adjustField(i,1);break;case 39:t._changeField(i,1,!1);break;case 40:t._adjustField(i,-1);break
case 46:t._setValue(i,"");break;default:return!0}return!1},_doKeyPress:function(n){var i=String.fromCharCode(
n.charCode===undefined?n.keyCode:n.charCode),r;return i<" "?!0:(r=t._getInst(n.target),t._handleKeyPress(
r,i),!1)},_handleKeyPress:function(n,t){var i,f,o;if(n.options.dateFormat.substring(3).indexOf(t)>-1)
this._changeField(n,1,!1);else if(t>="0"&&t<="9"){var i=n.options.dateFormat.charAt(n._field),e=parseInt(
t,10),r=parseInt((n._lastChr||"")+t,10),f=i.match(/y/i)?r:n._selectedYear,u=i.match(/m|n/i)?r>=1&&r<=
12?r:e>0?e:n._selectedMonth+1:n._selectedMonth+1,o=i.match(/d|w/i)?r>=1&&r<=this._getDaysInMonth(f,u-
1)?r:e>0?e:n._selectedDay:n._selectedDay;this._setDate(n,new Date(f,u-1,o,12));n._lastChr=(i!=="y"?"":
n._lastChr.substr(Math.max(0,n._lastChr.length-2)))+t}else if(i=n.options.dateFormat.charAt(n._field),
i.match(/n/i)){n._lastChr+=t.toLowerCase();var s=n.options[i==="n"?"monthNamesShort":"monthNames"],h=
function(){for(var t=0;t<s.length;t++)if(s[t].toLowerCase().substring(0,n._lastChr.length)===n._lastChr)
return t;return-1},u=h();u===-1&&(n._lastChr=t.toLowerCase(),u=h());u===-1?n._lastChr="":(f=n._selectedYear,
o=Math.min(n._selectedDay,this._getDaysInMonth(f,u)),this._setDate(n,new Date(f,u,o,12)))}},_doMouseWheel:
function(n,i){if(!t.isDisabled(n.target)){var r=t._getInst(n.target);r.elem.focus();r.elem.val()||t.
_parseDate(r);t._adjustField(r,i);n.preventDefault()}},_expandSpinner:function(i){var f=t._getSpinnerTarget(
i),r=t._getInst(t._getInput(f)),e,u;t.isDisabled(r.elem[0])||r.options.spinnerBigImage&&(r._expanded=
!0,e=n(f).offset(),u=null,n(f).parents().each(function(){var t=n(this);return(t.css("position")==="relative"||
t.css("position")==="absolute")&&(u=t.offset()),!u}),n('<div class="'+t._expandClass+'" style="position: absolute; left: '+
(e.left-(r.options.spinnerBigSize[0]-r.options.spinnerSize[0])/2-(u?u.left:0))+"px; top: "+(e.top-(r.
options.spinnerBigSize[1]-r.options.spinnerSize[1])/2-(u?u.top:0))+"px; width: "+r.options.spinnerBigSize[
0]+"px; height: "+r.options.spinnerBigSize[1]+"px; background: transparent url("+r.options.spinnerBigImage+
') no-repeat 0px 0px; z-index: 10;"><\/div>').mousedown(t._handleSpinner).mouseup(t._endSpinner).mouseout(
t._endExpand).mousemove(t._describeSpinner).insertAfter(f))},_getInput:function(t){return n(t).siblings(
"."+this._getMarker())[0]},_describeSpinner:function(n){var i=t._getSpinnerTarget(n),r=t._getInst(t.
_getInput(i));i.title=r.options.spinnerTexts[t._getSpinnerRegion(r,n)]},_handleSpinner:function(i){var
e=t._getSpinnerTarget(i),u=t._getInput(e),r,f;if(!t.isDisabled(u)&&(u===t._blurredInput&&(t._lastInput=
u,t._blurredInput=null),r=t._getInst(u),t._doFocus(u),f=t._getSpinnerRegion(r,i),t._changeSpinner(r,
e,f),t._actionSpinner(r,f),t._timer=null,t._handlingSpinner=!0,f>=3&&r.options.spinnerRepeat[0])){t.
_timer=setTimeout(function(){t._repeatSpinner(r,f)},r.options.spinnerRepeat[0]);n(e).one("mouseout",
t._releaseSpinner).one("mouseup",t._releaseSpinner)}},_actionSpinner:function(n,i){n.elem.val()||t._parseDate(
n);switch(i){case 0:this._setDate(n);break;case 1:this._changeField(n,-1,!1);break;case 2:this._changeField(
n,1,!1);break;case 3:this._adjustField(n,1);break;case 4:this._adjustField(n,-1)}},_repeatSpinner:function(
n,i){t._timer&&(t._lastInput=t._blurredInput,this._actionSpinner(n,i),this._timer=setTimeout(function(
){t._repeatSpinner(n,i)},n.options.spinnerRepeat[1]))},_releaseSpinner:function(){clearTimeout(t._timer);
t._timer=null},_endExpand:function(i){t._timer=null;var r=t._getSpinnerTarget(i),u=t._getInput(r),f=
t._getInst(u);n(r).remove();f._expanded=!1},_endSpinner:function(n){t._timer=null;var i=t._getSpinnerTarget(
n),r=t._getInput(i),u=t._getInst(r);t.isDisabled(r)||t._changeSpinner(u,i,-1);t._handlingSpinner&&(t.
_lastInput=t._blurredInput);t._lastInput&&t._handlingSpinner&&t._showField(u);t._handlingSpinner=!1}
,_getSpinnerTarget:function(n){return n.target||n.srcElement},_getSpinnerRegion:function(t,i){var l=
this._getSpinnerTarget(i),s=n(l).offset(),h=[document.documentElement.scrollLeft||document.body.scrollLeft,
document.documentElement.scrollTop||document.body.scrollTop],u=t.options.spinnerIncDecOnly?99:i.clientX+
h[0]-s.left,f=i.clientY+h[1]-s.top,r=t.options[t._expanded?"spinnerBigSize":"spinnerSize"],o=t.options.
spinnerIncDecOnly?99:r[0]-1-u,c=r[1]-1-f,e;return r[2]>0&&Math.abs(u-o)<=r[2]&&Math.abs(f-c)<=r[2]?0:
(e=Math.min(u,f,o,c),e===u?1:e===o?2:e===f?3:4)},_changeSpinner:function(t,i,r){n(i).css("background-position",
"-"+(r+1)*t.options[t._expanded?"spinnerBigSize":"spinnerSize"][0]+"px 0px")},_parseDate:function(n,
i){var r=this._extractDate(n.elem.val(),n)||this._normaliseDate(this._determineDate(n.options.defaultDate,
n)||new Date),u;n._selectedYear=r.getFullYear();n._selectedMonth=r.getMonth();n._selectedDay=r.getDate(
);n._lastChr="";u=function(){n.elem.val()!==""&&t._showDate(n)};typeof n.options.initialField=="number"?
(n._field=Math.max(0,Math.min(n._lastField,n.options.initialField)),u()):setTimeout(function(){n._field=
t._getSelection(n,n.elem[0],i);u()},0)},_extractDate:function(t,i){var u,r,c;if(!t)return null;var s=
t.split(new RegExp("[\\"+i.options.dateFormat.substring(3).split("").join("\\")+"]")),e=0,o=0,h=0,f=
[!1,!1,!1];for(u=0;u<=i._lastField;u++){r=parseInt(s[u],10);r=isNaN(r)?0:r;c=i.options.dateFormat.charAt(
u);switch(c){case"y":e=r;f[0]=!0;break;case"Y":e=r%100+((new Date).getFullYear()-(new Date).getFullYear(
)%100);f[0]=!0;break;case"m":case"M":o=r;f[1]=!0;break;case"n":case"N":o=n.inArray(s[u],i.options[c===
"N"?"monthNames":"monthNamesShort"])+1;f[1]=!0;break;case"w":case"W":i.options.dateFormat.charAt(3)===
" "?(s.splice(u,1),r=parseInt(s[u],10)):r=parseInt(s[u].replace(/^.* /,""),10);r=isNaN(r)?0:r;case"d":
case"D":h=r;f[2]=!0}}return e=f[0]?e:2e3,o=f[1]?o:1,h=f[2]?h:1,e&&o&&h?new Date(e,o-1,h,12):null},_showDate:
function(n){this._setValue(n,this._formatDate(n,n.options.dateFormat));this._showField(n)},_formatDate:
function(n,t){for(var u,i="",r=0;r<=n._lastField;r++){i+=r===0?"":t.charAt(3);u=t.charAt(r);switch(u)
{case"y":i+=this._formatNumber(n._selectedYear);break;case"Y":i+=this._formatNumber(n._selectedYear%
100);break;case"m":i+=this._formatNumber(n._selectedMonth+1);break;case"M":i+=n._selectedMonth+1;break
case"n":case"N":i+=n.options[u==="N"?"monthNames":"monthNamesShort"][n._selectedMonth];break;case"d":
i+=this._formatNumber(n._selectedDay);break;case"D":i+=n._selectedDay;break;case"w":case"W":i+=n.options[
u==="W"?"dayNames":"dayNamesShort"][new Date(n._selectedYear,n._selectedMonth,n._selectedDay,12).getDay(
)]+" "+this._formatNumber(n._selectedDay)}}return i},_showField:function(n){var i=n.elem[0],r,u,e,f;
if(!n.elem.is(":hidden")&&t._lastInput===i){for(r=0,u=0;u<n._field;u++)r+=this._fieldLength(n,u,n.options.
dateFormat)+1;e=r+this._fieldLength(n,u,n.options.dateFormat);i.setSelectionRange?i.setSelectionRange(
r,e):i.createTextRange&&(f=i.createTextRange(),f.moveStart("character",r),f.moveEnd("character",e-n.
elem.val().length),f.select());i.disabled||i.focus()}},_fieldLength:function(n,t,i){t=i.charAt(t);switch(
t){case"y":return 4;case"M":return n._selectedMonth<9?1:2;case"n":case"N":return n.options[t==="N"?"monthNames":
"monthNamesShort"][n._selectedMonth].length;case"w":case"W":return n.options[t==="W"?"dayNames":"dayNamesShort"][
new Date(n._selectedYear,n._selectedMonth,n._selectedDay,12).getDay()].length+3;case"D":return n._selectedDay<
10?1:2;default:return 2}},_formatNumber:function(n){return(n<10?"0":"")+n},_setValue:function(t,i){i!==
t.elem.val()&&(t.options.altField&&n(t.options.altField).val(i?this._formatDate(t,t.options.altFormat||
t.options.dateFormat):""),t.elem.val(i).trigger("change"))},_changeField:function(n,t,i){var r=n.elem.
val()===""||n._field===(t===-1?0:n._lastField);return r||(n._field+=t),this._showField(n),n._lastChr=
"",r&&i},_adjustField:function(n,i){n.elem.val()===""&&(i=0);t._parseDate(n);var r=n.options.dateFormat.
charAt(n._field),u=n._selectedYear+(r.match(/y/i)?i:0),f=n._selectedMonth+(r.match(/m|n/i)?i:0),e=r.
match(/d|w/i)?n._selectedDay+i:Math.min(n._selectedDay,this._getDaysInMonth(u,f));this._setDate(n,new
Date(u,f,e,12))},_getDaysInMonth:function(n,t){return new Date(n,t+1,0,12).getDate()},_setDate:function(
n,t){t=this._normaliseDate(this._determineDate(t||n.options.defaultDate,n)||new Date);var i=this._normaliseDate(
this._determineDate(n.options.minDate,n)),r=this._normaliseDate(this._determineDate(n.options.maxDate,
n));t=i&&t<i?i:r&&t>r?r:t;n._selectedYear=t.getFullYear();n._selectedMonth=t.getMonth();n._selectedDay=
t.getDate();this._showDate(n)},_determineDate:function(n,i){var r=function(n){var i=t._normaliseDate(
new Date);return i.setDate(i.getDate()+n),i},u=function(n){var u=t._extractDate(n,i);if(u)return u;n=
n.toLowerCase();u=t._normaliseDate(new Date);for(var e=u.getFullYear(),o=u.getMonth(),f=u.getDate(),
s=/([+-]?[0-9]+)\s*(d|w|m|y)?/g,r=s.exec(n);r;){switch(r[2]||"d"){case"d":f+=parseInt(r[1],10);break
case"w":f+=parseInt(r[1],10)*7;break;case"m":o+=parseInt(r[1],10);break;case"y":e+=parseInt(r[1],10)}
r=s.exec(n)}return new Date(e,o,f,12)};return n?typeof n=="string"?u(n):typeof n=="number"?r(n):n:null}
,_normaliseDate:function(n){return n&&n.setHours(12,0,0,0),n}});t=n.dateEntry}(jQuery),function(n){var
i="timeEntry",t;n.JQPlugin.createPlugin({name:i,defaultOptions:{appendText:"",showSeconds:!1,unlimitedHours:
!1,timeSteps:[1,1,1],initialField:null,noSeparatorEntry:!1,tabToExit:!1,useMouseWheel:!0,defaultTime:
null,minTime:null,maxTime:null,spinnerImage:"spinnerDefault.png",spinnerSize:[20,20,8],spinnerBigImage:
"",spinnerBigSize:[40,40,16],spinnerIncDecOnly:!1,spinnerRepeat:[500,250],beforeShow:null,beforeSetTime:
null},regionalOptions:{"":{show24Hours:!1,separator:":",ampmPrefix:" ",ampmNames:["AM","PM"],spinnerTexts:
["Now","Previous field","Next field","Increment","Decrement"]}},_getters:["getOffset","getTime","isDisabled"],
_appendClass:i+"-append",_controlClass:i+"-control",_expandClass:i+"-expand",_disabledInputs:[],_instSettings:
function(){return{_field:0,_selectedHour:0,_selectedMinute:0,_selectedSecond:0}},_postAttach:function(
n,i){n.on("focus."+i.name,this._doFocus).on("blur."+i.name,this._doBlur).on("click."+i.name,this._doClick).
on("keydown."+i.name,this._doKeyDown).on("keypress."+i.name,this._doKeyPress).on("paste."+i.name,function(
){setTimeout(function(){t._parseTime(i)},1)})},_optionsChanged:function(t,i,r){var u=this._extractTime(
i),f;n.extend(i.options,r);i.options.show24Hours=i.options.show24Hours||i.options.unlimitedHours;i._field=
0;u&&this._setTime(i,new Date(0,0,0,u[0],u[1],u[2]));t.next("span."+this._appendClass).remove();t.parent(
).find("span."+this._controlClass).remove();n.fn.mousewheel&&t.unmousewheel();f=i.options.spinnerImage?
n('<span class="'+this._controlClass+'" style="display: inline-block; background: url(\''+i.options.
spinnerImage+"') 0 0 no-repeat; width: "+i.options.spinnerSize[0]+"px; height: "+i.options.spinnerSize[
1]+'px;"><\/span>'):null;t.after(i.options.appendText?'<span class="'+this._appendClass+'">'+i.options.
appendText+"<\/span>":"").after(f||"");i.options.useMouseWheel&&n.fn.mousewheel&&t.mousewheel(this._doMouseWheel);
f&&f.mousedown(this._handleSpinner).mouseup(this._endSpinner).mouseover(this._expandSpinner).mouseout(
this._endSpinner).mousemove(this._describeSpinner)},enable:function(n){this._enableDisable(n,!1)},disable:
function(n){this._enableDisable(n,!0)},_enableDisable:function(t,i){var r=this._getInst(t);r&&(t.disabled=
i,t.nextSibling&&t.nextSibling.nodeName.toLowerCase()==="span"&&this._changeSpinner(r,t.nextSibling,
i?5:-1),this._disabledInputs=n.map(this._disabledInputs,function(n){return n===t?null:n}),i&&this._disabledInputs.
push(t))},isDisabled:function(t){return n.inArray(t,this._disabledInputs)>-1},_preDestroy:function(t)
{t=n(t).off("."+i);n.fn.mousewheel&&t.unmousewheel();this._disabledInputs=n.map(this._disabledInputs,
function(n){return n===t[0]?null:n});t.siblings("."+this._appendClass+",."+this._controlClass).remove(
)},setTime:function(t,i){var r=this._getInst(t);r&&(i===null||i===""?n(t).val(""):this._setTime(r,i?
n.isArray(i)?i:typeof i=="object"?new Date(i.getTime()):i:null))},getTime:function(n){var i=this._getInst(
n),t=i?this._extractTime(i):null;return t?new Date(0,0,0,t[0],t[1],t[2]):null},getOffset:function(n)
{var i=this._getInst(n),t=i?this._extractTime(i):null;return t?(t[0]*3600+t[1]*60+t[2])*1e3:0},_doFocus:
function(i){var r=i.nodeName&&i.nodeName.toLowerCase()==="input"?i:this,u;if(t._lastInput===r||t.isDisabled(
r)){t._focussed=!1;return}u=t._getInst(r);t._focussed=!0;t._lastInput=r;t._blurredInput=null;n.extend(
u.options,n.isFunction(u.options.beforeShow)?u.options.beforeShow.apply(r,[r]):{});t._parseTime(u,i.
nodeName?null:i);setTimeout(function(){t._showField(u)},10)},_doBlur:function(){t._blurredInput=t._lastInput;
t._lastInput=null},_doClick:function(n){var r=n.target,i=t._getInst(r),u=i._field;t._focussed||(i._field=
t._getSelection(i,r,n));u!==i._field&&(i._lastChr="");t._showField(i);t._focussed=!1},_getSelection:
function(t,i,r){var o=0,h=[t.elem.val().split(t.options.separator)[0].length,2,2],u,f;if(i.selectionStart!==
null){for(f=0,u=0;u<=Math.max(1,t._secondField,t._ampmField);u++)if(f+=u!==t._ampmField?h[u]+t.options.
separator.length:t.options.ampmPrefix.length+t.options.ampmNames[0].length,o=u,i.selectionStart<f)break}
else if(i.createTextRange&&r!=null){var s=n(r.srcElement),e=i.createTextRange(),c=function(n){return{
thin:2,medium:4,thick:6}[n]||n},l=r.clientX+document.documentElement.scrollLeft-(s.offset().left+parseInt(
c(s.css("border-left-width")),10))-e.offsetLeft;for(u=0;u<=Math.max(1,t._secondField,t._ampmField);u++)
if(f=u!==t._ampmField?u*fieldSize+2:t._ampmField*fieldSize+t.options.ampmPrefix.length+t.options.ampmNames[
0].length,e.collapse(),e.moveEnd("character",f),o=u,l<e.boundingWidth)break}return o},_doKeyDown:function(
n){if(n.keyCode>=48)return!0;var i=t._getInst(n.target);switch(n.keyCode){case 9:return i.options.tabToExit?
!0:n.shiftKey?t._changeField(i,-1,!0):t._changeField(i,1,!0);case 35:n.ctrlKey?t._setValue(i,""):(i.
_field=Math.max(1,i._secondField,i._ampmField),t._adjustField(i,0));break;case 36:n.ctrlKey?t._setTime(
i):(i._field=0,t._adjustField(i,0));break;case 37:t._changeField(i,-1,!1);break;case 38:t._adjustField(
i,1);break;case 39:t._changeField(i,1,!1);break;case 40:t._adjustField(i,-1);break;case 46:t._setValue(
i,"");break;case 8:i._lastChr="";default:return!0}return!1},_doKeyPress:function(n){var i=String.fromCharCode(
n.charCode===undefined?n.keyCode:n.charCode),r;return i<" "?!0:(r=t._getInst(n.target),t._handleKeyPress(
r,i),!1)},_handleKeyPress:function(n,t){var f;if(t===n.options.separator)this._changeField(n,1,!1);else
if(t>="0"&&t<="9"){var r=parseInt(t,10),i=parseInt(n._lastChr+t,10),e=n._field!==0?n._selectedHour:n.
options.unlimitedHours?i:n.options.show24Hours?i<24?i:r:(i>=1&&i<=12?i:r>0?r:n._selectedHour)%12+(n.
_selectedHour>=12?12:0),o=n._field!==1?n._selectedMinute:i<60?i:r,s=n._field!==n._secondField?n._selectedSecond:
i<60?i:r,u=this._constrainTime(n,[e,o,s]);this._setTime(n,n.options.unlimitedHours?u:new Date(0,0,0,
u[0],u[1],u[2]));n.options.noSeparatorEntry&&n._lastChr?this._changeField(n,1,!1):n._lastChr=n.options.
unlimitedHours&&n._field===0?n._lastChr+t:t}else n.options.show24Hours||(t=t.toLowerCase(),(t===n.options.
ampmNames[0].substring(0,1).toLowerCase()&&n._selectedHour>=12||t===n.options.ampmNames[1].substring(
0,1).toLowerCase()&&n._selectedHour<12)&&(f=n._field,n._field=n._ampmField,this._adjustField(n,1),n.
_field=f,this._showField(n)))},_doMouseWheel:function(n,i){if(!t.isDisabled(n.target)){var r=t._getInst(
n.target);r.elem.focus();r.elem.val()||t._parseTime(r);t._adjustField(r,i);n.preventDefault()}},_expandSpinner:
function(i){var f=t._getSpinnerTarget(i),r=t._getInst(t._getInput(f)),e,u;t.isDisabled(r.elem[0])||r.
options.spinnerBigImage&&(r._expanded=!0,e=n(f).offset(),u=null,n(f).parents().each(function(){var t=
n(this);return(t.css("position")==="relative"||t.css("position")==="absolute")&&(u=t.offset()),!u}),
n('<div class="'+t._expandClass+'" style="position: absolute; left: '+(e.left-(r.options.spinnerBigSize[
0]-r.options.spinnerSize[0])/2-(u?u.left:0))+"px; top: "+(e.top-(r.options.spinnerBigSize[1]-r.options.
spinnerSize[1])/2-(u?u.top:0))+"px; width: "+r.options.spinnerBigSize[0]+"px; height: "+r.options.spinnerBigSize[
1]+"px; background: transparent url("+r.options.spinnerBigImage+') no-repeat 0px 0px; z-index: 10;"><\/div>').
mousedown(t._handleSpinner).mouseup(t._endSpinner).mouseout(t._endExpand).mousemove(t._describeSpinner).
insertAfter(f))},_getInput:function(t){return n(t).siblings("."+this._getMarker())[0]},_describeSpinner:
function(n){var i=t._getSpinnerTarget(n),r=t._getInst(t._getInput(i));i.title=r.options.spinnerTexts[
t._getSpinnerRegion(r,n)]},_handleSpinner:function(i){var e=t._getSpinnerTarget(i),u=t._getInput(e),
r,f;if(!t.isDisabled(u)&&(u===t._blurredInput&&(t._lastInput=u,t._blurredInput=null),r=t._getInst(u),
t._doFocus(u),f=t._getSpinnerRegion(r,i),t._changeSpinner(r,e,f),t._actionSpinner(r,f),t._timer=null,
t._handlingSpinner=!0,f>=3&&r.options.spinnerRepeat[0])){t._timer=setTimeout(function(){t._repeatSpinner(
r,f)},r.options.spinnerRepeat[0]);n(e).one("mouseout",t._releaseSpinner).one("mouseup",t._releaseSpinner)}
},_actionSpinner:function(n,i){n.elem.val()||t._parseTime(n);switch(i){case 0:this._setTime(n);break
case 1:this._changeField(n,-1,!1);break;case 2:this._changeField(n,1,!1);break;case 3:this._adjustField(
n,1);break;case 4:this._adjustField(n,-1)}},_repeatSpinner:function(n,i){t._timer&&(t._lastInput=t._blurredInput,
this._actionSpinner(n,i),this._timer=setTimeout(function(){t._repeatSpinner(n,i)},n.options.spinnerRepeat[
1]))},_releaseSpinner:function(){clearTimeout(t._timer);t._timer=null},_endExpand:function(i){t._timer=
null;var r=t._getSpinnerTarget(i),u=t._getInput(r),f=t._getInst(u);n(r).remove();f._expanded=!1},_endSpinner:
function(n){t._timer=null;var i=t._getSpinnerTarget(n),r=t._getInput(i),u=t._getInst(r);t.isDisabled(
r)||t._changeSpinner(u,i,-1);t._handlingSpinner&&(t._lastInput=t._blurredInput);t._lastInput&&t._handlingSpinner&&
t._showField(u);t._handlingSpinner=!1},_getSpinnerTarget:function(n){return n.target||n.srcElement},
_getSpinnerRegion:function(t,i){var l=this._getSpinnerTarget(i),s=n(l).offset(),h=[document.documentElement.
scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop],u=
t.options.spinnerIncDecOnly?99:i.clientX+h[0]-s.left,f=i.clientY+h[1]-s.top,r=t.options[t._expanded?
"spinnerBigSize":"spinnerSize"],o=t.options.spinnerIncDecOnly?99:r[0]-1-u,c=r[1]-1-f,e;return r[2]>0&&
Math.abs(u-o)<=r[2]&&Math.abs(f-c)<=r[2]?0:(e=Math.min(u,f,o,c),e===u?1:e===o?2:e===f?3:4)},_changeSpinner:
function(t,i,r){n(i).css("background-position","-"+(r+1)*t.options[t._expanded?"spinnerBigSize":"spinnerSize"][
0]+"px 0px")},_parseTime:function(n,i){var r=this._extractTime(n),u,f;r?(n._selectedHour=r[0],n._selectedMinute=
r[1],n._selectedSecond=r[2]):(u=this._constrainTime(n),n._selectedHour=u[0],n._selectedMinute=u[1],n.
_selectedSecond=n.options.showSeconds?u[2]:0);n._secondField=n.options.showSeconds?2:-1;n._ampmField=
n.options.show24Hours?-1:n.options.showSeconds?3:2;n._lastChr="";f=function(){n.elem.val()!==""&&t._showTime(
n)};typeof n.options.initialField=="number"?(n._field=Math.max(0,Math.min(Math.max(1,n._secondField,
n._ampmField),n.options.initialField)),f()):setTimeout(function(){n._field=t._getSelection(n,n.elem[
0],i);f()},0)},_extractTime:function(n,t){var i,u,f;if(t=t||n.elem.val(),i=t.split(n.options.separator),
n.options.separator===""&&t!==""&&(i[0]=t.substring(0,2),i[1]=t.substring(2,4),i[2]=t.substring(4,6)),
i.length>=2){var o=!n.options.show24Hours&&t.indexOf(n.options.ampmNames[0])>-1,e=!n.options.show24Hours&&
t.indexOf(n.options.ampmNames[1])>-1,r=parseInt(i[0],10);return r=isNaN(r)?0:r,r=((o||e)&&r===12?0:r)
+(e?12:0),u=parseInt(i[1],10),u=isNaN(u)?0:u,f=i.length>=3?parseInt(i[2],10):0,f=isNaN(f)||!n.options.
showSeconds?0:f,this._constrainTime(n,[r,u,f])}return null},_constrainTime:function(n,t){var f=t!==null&&
t!==undefined,r,u,i;for(f||(r=this._determineTime(n.options.defaultTime,n)||new Date,t=[r.getHours(),
r.getMinutes(),r.getSeconds()]),u=!1,i=0;i<n.options.timeSteps.length;i++)u?t[i]=0:n.options.timeSteps[
i]>1&&(t[i]=Math.round(t[i]/n.options.timeSteps[i])*n.options.timeSteps[i],u=!0);return t},_showTime:
function(n){var t=(n.options.unlimitedHours?n._selectedHour:this._formatNumber(n.options.show24Hours?
n._selectedHour:(n._selectedHour+11)%12+1))+n.options.separator+this._formatNumber(n._selectedMinute)+
(n.options.showSeconds?n.options.separator+this._formatNumber(n._selectedSecond):"")+(n.options.show24Hours?
"":n.options.ampmPrefix+n.options.ampmNames[n._selectedHour<12?0:1]);this._setValue(n,t);this._showField(
n)},_showField:function(n){var i=n.elem[0],e,f;if(!n.elem.is(":hidden")&&t._lastInput===i){for(var o=
[n.elem.val().split(n.options.separator)[0].length,2,2],u=0,r=0;r<n._field;)u+=o[r]+(r===Math.max(1,
n._secondField)?0:n.options.separator.length),r++;e=u+(n._field!==n._ampmField?o[r]:n.options.ampmPrefix.
length+n.options.ampmNames[0].length);i.setSelectionRange?i.setSelectionRange(u,e):i.createTextRange&&
(f=i.createTextRange(),f.moveStart("character",u),f.moveEnd("character",e-n.elem.val().length),f.select(
));i.disabled||i.focus()}},_formatNumber:function(n){return(n<10?"0":"")+n},_setValue:function(n,t){
t!==n.elem.val()&&n.elem.val(t).trigger("change")},_changeField:function(n,t,i){var r=n.elem.val()===
""||n._field===(t===-1?0:Math.max(1,n._secondField,n._ampmField));return r||(n._field+=t),this._showField(
n),n._lastChr="",r&&i},_adjustField:function(n,t){n.elem.val()===""&&(t=0);n.options.unlimitedHours?
this._setTime(n,[n._selectedHour+(n._field===0?t*n.options.timeSteps[0]:0),n._selectedMinute+(n._field===
1?t*n.options.timeSteps[1]:0),n._selectedSecond+(n._field===n._secondField?t*n.options.timeSteps[2]:
0)]):this._setTime(n,new Date(0,0,0,n._selectedHour+(n._field===0?t*n.options.timeSteps[0]:0)+(n._field===
n._ampmField?t*12:0),n._selectedMinute+(n._field===1?t*n.options.timeSteps[1]:0),n._selectedSecond+(n.
_field===n._secondField?t*n.options.timeSteps[2]:0)))},_setTime:function(t,i){var r;t.options.unlimitedHours&&
n.isArray(i)?r=i:(i=this._determineTime(i,t),r=i?[i.getHours(),i.getMinutes(),i.getSeconds()]:null);
r=this._constrainTime(t,r);i=new Date(0,0,0,r[0],r[1],r[2]);var i=this._normaliseTime(i),u=this._normaliseTime(
this._determineTime(t.options.minTime,t)),f=this._normaliseTime(this._determineTime(t.options.maxTime,
t));if(t.options.unlimitedHours){while(r[2]<0)r[2]+=60,r[1]--;while(r[2]>59)r[2]-=60,r[1]++;while(r[
1]<0)r[1]+=60,r[0]--;while(r[1]>59)r[1]-=60,r[0]++;u=t.options.minTime!=null&&n.isArray(t.options.minTime)?
t.options.minTime:[0,0,0];r[0]<u[0]?r=u.slice(0,3):r[0]===u[0]&&(r[1]<u[1]?(r[1]=u[1],r[2]=u[2]):r[1]===
u[1]&&r[2]<u[2]&&(r[2]=u[2]));t.options.maxTime!=null&&n.isArray(t.options.maxTime)&&(r[0]>t.options.
maxTime[0]?r=t.options.maxTime.slice(0,3):r[0]===t.options.maxTime[0]&&(r[1]>t.options.maxTime[1]?(r[
1]=t.options.maxTime[1],r[2]=t.options.maxTime[2]):r[1]===t.options.maxTime[1]&&r[2]>t.options.maxTime[
2]&&(r[2]=t.options.maxTime[2])))}else u&&f&&u>f?i<u&&i>f&&(i=Math.abs(i-u)<Math.abs(i-f)?u:f):i=u&&
i<u?u:f&&i>f?f:i,r[0]=i.getHours(),r[1]=i.getMinutes(),r[2]=i.getSeconds();n.isFunction(t.options.beforeSetTime)&&
(i=t.options.beforeSetTime.apply(t.elem[0],[this.getTime(t.elem[0]),i,u,f]),r[0]=i.getHours(),r[1]=i.
getMinutes(),r[2]=i.getSeconds());t._selectedHour=r[0];t._selectedMinute=r[1];t._selectedSecond=r[2];
this._showTime(t)},_determineTime:function(i,r){var u=function(n){var t=new Date;return t.setTime(t.
getTime()+n*1e3),t},f=function(n){var u=t._extractTime(r,n),i=new Date,o=u?u[0]:i.getHours(),s=u?u[1]:
i.getMinutes(),h=u?u[2]:i.getSeconds(),e,f;if(!u)for(e=/([+-]?[0-9]+)\s*(s|S|m|M|h|H)?/g,f=e.exec(n);
f;){switch(f[2]||"s"){case"s":case"S":h+=parseInt(f[1],10);break;case"m":case"M":s+=parseInt(f[1],10);
break;case"h":case"H":o+=parseInt(f[1],10)}f=e.exec(n)}return i=new Date(0,0,10,o,s,h,0),/^!/.test(n)&&
(i.getDate()>10?i=new Date(0,0,10,23,59,59):i.getDate()<10&&(i=new Date(0,0,10,0,0,0))),i},e=function(
n){return new Date(0,0,0,n[0],n[1]||0,n[2]||0,0)};return i?typeof i=="string"?f(i):typeof i=="number"?
u(i):n.isArray(i)?e(i):i:null},_normaliseTime:function(n){return n?(n.setFullYear(1900),n.setMonth(0),
n.setDate(0),n):null}});t=n.timeEntry}(jQuery)