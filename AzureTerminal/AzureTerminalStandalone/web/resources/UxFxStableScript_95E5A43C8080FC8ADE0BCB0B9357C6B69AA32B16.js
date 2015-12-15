/*!
 * jQuery JavaScript Library v2.1.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:10Z
 */
(function(n,t){typeof module=="object"&&typeof module.exports=="object"?module.exports=n.document?t(
n,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(
n)}:t(n)})(typeof window!="undefined"?window:this,function(n,t){function ui(n){var t=n.length,r=i.type(
n);return r==="function"||i.isWindow(n)?!1:n.nodeType===1&&t?!0:r==="array"||t===0||typeof t=="number"&&
t>0&&t-1 in n}function fi(n,t,r){if(i.isFunction(t))return i.grep(n,function(n,i){return!!t.call(n,i,
n)!==r});if(t.nodeType)return i.grep(n,function(n){return n===t!==r});if(typeof t=="string"){if(ef.test(
t))return i.filter(t,n,r);t=i.filter(t,n)}return i.grep(n,function(n){return et.call(t,n)>=0!==r})}function rr(
n,t){while((n=n[t])&&n.nodeType!==1);return n}function of(n){var t=ei[n]={};return i.each(n.match(c)||
[],function(n,i){t[i]=!0}),t}function ct(){u.removeEventListener("DOMContentLoaded",ct,!1);n.removeEventListener(
"load",ct,!1);i.ready()}function p(){Object.defineProperty(this.cache={},0,{get:function(){return{}}
});this.expando=i.expando+Math.random()}function ur(n,t,r){var u;if(r===undefined&&n.nodeType===1)if(
u="data-"+t.replace(hf,"-$1").toLowerCase(),r=n.getAttribute(u),typeof r=="string"){try{r=r==="true"?
!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:sf.test(r)?i.parseJSON(r):r}catch(f){}e.set(n,t,r)}else
r=undefined;return r}function at(){return!0}function g(){return!1}function sr(){try{return u.activeElement}
catch(n){}}function ar(n,t){return i.nodeName(n,"table")&&i.nodeName(t.nodeType!==11?t:t.firstChild,
"tr")?n.getElementsByTagName("tbody")[0]||n.appendChild(n.ownerDocument.createElement("tbody")):n}function bf(
n){return n.type=(n.getAttribute("type")!==null)+"/"+n.type,n}function kf(n){var t=pf.exec(n.type);return t?
n.type=t[1]:n.removeAttribute("type"),n}function oi(n,t){for(var i=0,u=n.length;i<u;i++)r.set(n[i],"globalEval",
!t||r.get(t[i],"globalEval"))}function vr(n,t){var f,c,o,s,h,l,a,u;if(t.nodeType===1){if(r.hasData(n)&&
(s=r.access(n),h=r.set(t,s),u=s.events,u)){delete h.handle;h.events={};for(o in u)for(f=0,c=u[o].length;
f<c;f++)i.event.add(t,o,u[o][f])}e.hasData(n)&&(l=e.access(n),a=i.extend({},l),e.set(t,a))}}function o(
n,t){var r=n.getElementsByTagName?n.getElementsByTagName(t||"*"):n.querySelectorAll?n.querySelectorAll(
t||"*"):[];return t===undefined||t&&i.nodeName(n,t)?i.merge([n],r):r}function df(n,t){var i=t.nodeName.
toLowerCase();i==="input"&&fr.test(n.type)?t.checked=n.checked:(i==="input"||i==="textarea")&&(t.defaultValue=
n.defaultValue)}function yr(t,r){var u=i(r.createElement(t)).appendTo(r.body),f=n.getDefaultComputedStyle?
n.getDefaultComputedStyle(u[0]).display:i.css(u[0],"display");return u.detach(),f}function pr(n){var
r=u,t=si[n];return t||(t=yr(n,r),t!=="none"&&t||(vt=(vt||i("<iframe frameborder='0' width='0' height='0'/>"))
.appendTo(r.documentElement),r=vt[0].contentDocument,r.write(),r.close(),t=yr(n,r),vt.detach()),si[n]=
t),t}function rt(n,t,r){var e,o,s,u,f=n.style;return r=r||yt(n),r&&(u=r.getPropertyValue(t)||r[t]),r&&
(u!==""||i.contains(n.ownerDocument,n)||(u=i.style(n,t)),hi.test(u)&&wr.test(t)&&(e=f.width,o=f.minWidth,
s=f.maxWidth,f.minWidth=f.maxWidth=f.width=u,u=r.width,f.width=e,f.minWidth=o,f.maxWidth=s)),u!==undefined?
u+"":u}function br(n,t){return{get:function(){if(n()){delete this.get;return}return(this.get=t).apply(
this,arguments)}}}function gr(n,t){if(t in n)return t;for(var r=t[0].toUpperCase()+t.slice(1),u=t,i=
dr.length;i--;)if(t=dr[i]+r,t in n)return t;return u}function nu(n,t,i){var r=ne.exec(t);return r?Math.
max(0,r[1]-(i||0))+(r[2]||"px"):t}function tu(n,t,r,u,f){for(var e=r===(u?"border":"content")?4:t===
"width"?1:0,o=0;e<4;e+=2)r==="margin"&&(o+=i.css(n,r+w[e],!0,f)),u?(r==="content"&&(o-=i.css(n,"padding"+
w[e],!0,f)),r!=="margin"&&(o-=i.css(n,"border"+w[e]+"Width",!0,f))):(o+=i.css(n,"padding"+w[e],!0,f),
r!=="padding"&&(o+=i.css(n,"border"+w[e]+"Width",!0,f)));return o}function iu(n,t,r){var o=!0,u=t===
"width"?n.offsetWidth:n.offsetHeight,e=yt(n),s=i.css(n,"boxSizing",!1,e)==="border-box";if(u<=0||u==
null){if(u=rt(n,t,e),(u<0||u==null)&&(u=n.style[t]),hi.test(u))return u;o=s&&(f.boxSizingReliable()||
u===n.style[t]);u=parseFloat(u)||0}return u+tu(n,t,r||(s?"border":"content"),o,e)+"px"}function ru(n,
t){for(var e,u,s,o=[],f=0,h=n.length;f<h;f++)(u=n[f],u.style)&&(o[f]=r.get(u,"olddisplay"),e=u.style.
display,t?(o[f]||e!=="none"||(u.style.display=""),u.style.display===""&&it(u)&&(o[f]=r.access(u,"olddisplay",
pr(u.nodeName)))):o[f]||(s=it(u),(e&&e!=="none"||!s)&&r.set(u,"olddisplay",s?e:i.css(u,"display"))));
for(f=0;f<h;f++)(u=n[f],u.style)&&(t&&u.style.display!=="none"&&u.style.display!==""||(u.style.display=
t?o[f]||"":"none"));return n}function s(n,t,i,r,u){return new s.prototype.init(n,t,i,r,u)}function fu(
){return setTimeout(function(){nt=undefined}),nt=i.now()}function bt(n,t){var r,u=0,i={height:n};for(
t=t?1:0;u<4;u+=2-t)r=w[u],i["margin"+r]=i["padding"+r]=n;return t&&(i.opacity=i.width=n),i}function eu(
n,t,i){for(var u,f=(ut[t]||[]).concat(ut["*"]),r=0,e=f.length;r<e;r++)if(u=f[r].call(i,t,n))return u}
function fe(n,t,u){var f,l,p,a,o,w,y,c=this,v={},s=n.style,h=n.nodeType&&it(n),e=r.get(n,"fxshow");u.
queue||(o=i._queueHooks(n,"fx"),o.unqueued==null&&(o.unqueued=0,w=o.empty.fire,o.empty.fire=function(
){o.unqueued||w()}),o.unqueued++,c.always(function(){c.always(function(){o.unqueued--;i.queue(n,"fx").
length||o.empty.fire()})}));n.nodeType===1&&("height"in t||"width"in t)&&(u.overflow=[s.overflow,s.overflowX,
s.overflowY],y=i.css(n,"display"),y==="none"&&(y=pr(n.nodeName)),y==="inline"&&i.css(n,"float")==="none"&&
(s.display="inline-block"));u.overflow&&(s.overflow="hidden",c.always(function(){s.overflow=u.overflow[
0];s.overflowX=u.overflow[1];s.overflowY=u.overflow[2]}));for(f in t)if(l=t[f],re.exec(l)){if(delete
t[f],p=p||l==="toggle",l===(h?"hide":"show"))if(l==="show"&&e&&e[f]!==undefined)h=!0;else continue;v[
f]=e&&e[f]||i.style(n,f)}if(!i.isEmptyObject(v)){e?"hidden"in e&&(h=e.hidden):e=r.access(n,"fxshow",
{});p&&(e.hidden=!h);h?i(n).show():c.done(function(){i(n).hide()});c.done(function(){var t;r.remove(
n,"fxshow");for(t in v)i.style(n,t,v[t])});for(f in v)a=eu(h?e[f]:0,f,c),f in e||(e[f]=a.start,h&&(a.
end=a.start,a.start=f==="width"||f==="height"?1:0))}}function ee(n,t){var r,f,e,u,o;for(r in n)if(f=
i.camelCase(r),e=t[f],u=n[r],i.isArray(u)&&(e=u[1],u=n[r]=u[0]),r!==f&&(n[f]=u,delete n[r]),o=i.cssHooks[
f],o&&"expand"in o){u=o.expand(u);delete n[f];for(r in u)r in n||(n[r]=u[r],t[r]=e)}else t[f]=e}function ou(
n,t,r){var e,o,s=0,l=wt.length,f=i.Deferred().always(function(){delete c.elem}),c=function(){if(o)return!1;
for(var s=nt||fu(),t=Math.max(0,u.startTime+u.duration-s),h=t/u.duration||0,i=1-h,r=0,e=u.tweens.length;
r<e;r++)u.tweens[r].run(i);return f.notifyWith(n,[u,i,t]),i<1&&e?t:(f.resolveWith(n,[u]),!1)},u=f.promise(
{elem:n,props:i.extend({},t),opts:i.extend(!0,{specialEasing:{}},r),originalProperties:t,originalOptions:
r,startTime:nt||fu(),duration:r.duration,tweens:[],createTween:function(t,r){var f=i.Tween(n,u.opts,
t,r,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(f),f},stop:function(t){var i=0,r=t?
u.tweens.length:0;if(o)return this;for(o=!0;i<r;i++)u.tweens[i].run(1);return t?f.resolveWith(n,[u,t]):
f.rejectWith(n,[u,t]),this}}),h=u.props;for(ee(h,u.opts.specialEasing);s<l;s++)if(e=wt[s].call(u,n,h,
u.opts),e)return e;return i.map(h,eu,u),i.isFunction(u.opts.start)&&u.opts.start.call(n,u),i.fx.timer(
i.extend(c,{elem:n,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.
complete).fail(u.opts.fail).always(u.opts.always)}function pu(n){return function(t,r){typeof t!="string"&&
(r=t,t="*");var u,f=0,e=t.toLowerCase().match(c)||[];if(i.isFunction(r))while(u=e[f++])u[0]==="+"?(u=
u.slice(1)||"*",(n[u]=n[u]||[]).unshift(r)):(n[u]=n[u]||[]).push(r)}}function wu(n,t,r,u){function e(
s){var h;return f[s]=!0,i.each(n[s]||[],function(n,i){var s=i(t,r,u);if(typeof s!="string"||o||f[s])
{if(o)return!(h=s)}else return t.dataTypes.unshift(s),e(s),!1}),h}var f={},o=n===ci;return e(t.dataTypes[
0])||!f["*"]&&e("*")}function li(n,t){var r,u,f=i.ajaxSettings.flatOptions||{};for(r in t)t[r]!==undefined&&
((f[r]?n:u||(u={}))[r]=t[r]);return u&&i.extend(!0,n,u),n}function ae(n,t,i){for(var e,u,f,o,s=n.contents,
r=n.dataTypes;r[0]==="*";)r.shift(),e===undefined&&(e=n.mimeType||t.getResponseHeader("Content-Type"));
if(e)for(u in s)if(s[u]&&s[u].test(e)){r.unshift(u);break}if(r[0]in i)f=r[0];else{for(u in i){if(!r[
0]||n.converters[u+" "+r[0]]){f=u;break}o||(o=u)}f=f||o}if(f)return f!==r[0]&&r.unshift(f),i[f]}function ve(
n,t,i,r){var h,u,f,s,e,o={},c=n.dataTypes.slice();if(c[1])for(f in n.converters)o[f.toLowerCase()]=n.
converters[f];for(u=c.shift();u;)if(n.responseFields[u]&&(i[n.responseFields[u]]=t),!e&&r&&n.dataFilter&&
(t=n.dataFilter(t,n.dataType)),e=u,u=c.shift(),u)if(u==="*")u=e;else if(e!=="*"&&e!==u){if(f=o[e+" "+
u]||o["* "+u],!f)for(h in o)if(s=h.split(" "),s[1]===u&&(f=o[e+" "+s[0]]||o["* "+s[0]],f)){f===!0?f=
o[h]:o[h]!==!0&&(u=s[0],c.unshift(s[1]));break}if(f!==!0)if(f&&n.throws)t=f(t);else try{t=f(t)}catch(l)
{return{state:"parsererror",error:f?l:"No conversion from "+e+" to "+u}}}return{state:"success",data:
t}}function ai(n,t,r,u){var f;if(i.isArray(t))i.each(t,function(t,i){r||pe.test(n)?u(n,i):ai(n+"["+(typeof
i=="object"?t:"")+"]",i,r,u)});else if(r||i.type(t)!=="object")u(n,t);else for(f in t)ai(n+"["+f+"]",
t[f],r,u)}function ku(n){return i.isWindow(n)?n:n.nodeType===9&&n.defaultView}var k=[],a=k.slice,wi=
k.concat,ii=k.push,et=k.indexOf,ot={},nf=ot.toString,ri=ot.hasOwnProperty,tf="".trim,f={},u=n.document,
bi="2.1.0",i=function(n,t){return new i.fn.init(n,t)},rf=/^-ms-/,uf=/-([\da-z])/gi,ff=function(n,t){
return t.toUpperCase()},y,st,gi,nr,tr,ir,c,ei,ht,l,d,vt,si,oe,su,tt,hu,kt,cu,dt,gt,vi,ti,yi,pi,du,gu;
i.fn=i.prototype={jquery:bi,constructor:i,selector:"",length:0,toArray:function(){return a.call(this)}
,get:function(n){return n!=null?n<0?this[n+this.length]:this[n]:a.call(this)},pushStack:function(n){
var t=i.merge(this.constructor(),n);return t.prevObject=this,t.context=this.context,t},each:function(
n,t){return i.each(this,n,t)},map:function(n){return this.pushStack(i.map(this,function(t,i){return n.
call(t,i,t)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.
eq(0)},last:function(){return this.eq(-1)},eq:function(n){var i=this.length,t=+n+(n<0?i:0);return this.
pushStack(t>=0&&t<i?[this[t]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:
ii,sort:k.sort,splice:k.splice};i.extend=i.fn.extend=function(){var e,f,r,t,o,s,n=arguments[0]||{},u=
1,c=arguments.length,h=!1;for(typeof n=="boolean"&&(h=n,n=arguments[u]||{},u++),typeof n=="object"||
i.isFunction(n)||(n={}),u===c&&(n=this,u--);u<c;u++)if((e=arguments[u])!=null)for(f in e)(r=n[f],t=e[
f],n!==t)&&(h&&t&&(i.isPlainObject(t)||(o=i.isArray(t)))?(o?(o=!1,s=r&&i.isArray(r)?r:[]):s=r&&i.isPlainObject(
r)?r:{},n[f]=i.extend(h,s,t)):t!==undefined&&(n[f]=t));return n};i.extend({expando:"jQuery"+(bi+Math.
random()).replace(/\D/g,""),isReady:!0,error:function(n){throw new Error(n);},noop:function(){},isFunction:
function(n){return i.type(n)==="function"},isArray:Array.isArray,isWindow:function(n){return n!=null&&
n===n.window},isNumeric:function(n){return n-parseFloat(n)>=0},isPlainObject:function(n){if(i.type(n)!==
"object"||n.nodeType||i.isWindow(n))return!1;try{if(n.constructor&&!ri.call(n.constructor.prototype,
"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(n){for(var t in n)return!1;
return!0},type:function(n){return n==null?n+"":typeof n=="object"||typeof n=="function"?ot[nf.call(n)]||
"object":typeof n},globalEval:function(n){var t,r=eval;n=i.trim(n);n&&(n.indexOf("use strict")===1?(
t=u.createElement("script"),t.text=n,u.head.appendChild(t).parentNode.removeChild(t)):r(n))},camelCase:
function(n){return n.replace(rf,"ms-").replace(uf,ff)},nodeName:function(n,t){return n.nodeName&&n.nodeName.
toLowerCase()===t.toLowerCase()},each:function(n,t,i){var u,r=0,f=n.length,e=ui(n);if(i){if(e){for(;
r<f;r++)if(u=t.apply(n[r],i),u===!1)break}else for(r in n)if(u=t.apply(n[r],i),u===!1)break}else if(
e){for(;r<f;r++)if(u=t.call(n[r],r,n[r]),u===!1)break}else for(r in n)if(u=t.call(n[r],r,n[r]),u===!1)
break;return n},trim:function(n){return n==null?"":tf.call(n)},makeArray:function(n,t){var r=t||[];return n!=
null&&(ui(Object(n))?i.merge(r,typeof n=="string"?[n]:n):ii.call(r,n)),r},inArray:function(n,t,i){return t==
null?-1:et.call(t,n,i)},merge:function(n,t){for(var u=+t.length,i=0,r=n.length;i<u;i++)n[r++]=t[i];return n.
length=r,n},grep:function(n,t,i){for(var u,f=[],r=0,e=n.length,o=!i;r<e;r++)u=!t(n[r],r),u!==o&&f.push(
n[r]);return f},map:function(n,t,i){var u,r=0,e=n.length,o=ui(n),f=[];if(o)for(;r<e;r++)u=t(n[r],r,i),
u!=null&&f.push(u);else for(r in n)u=t(n[r],r,i),u!=null&&f.push(u);return wi.apply([],f)},guid:1,proxy:
function(n,t){var u,f,r;return(typeof t=="string"&&(u=n[t],t=n,n=u),!i.isFunction(n))?undefined:(f=a.
call(arguments,2),r=function(){return n.apply(t||this,f.concat(a.call(arguments)))},r.guid=n.guid=n.
guid||i.guid++,r)},now:Date.now,support:f});i.each("Boolean Number String Function Array Date RegExp Object Error".
split(" "),function(n,t){ot["[object "+t+"]"]=t.toLowerCase()});y=function(n){function u(n,t,i,u){var
w,h,c,v,k,y,d,a,nt,g;if((t?t.ownerDocument||t:s)!==e&&p(t),t=t||e,i=i||[],!n||typeof n!="string")return i;
if((v=t.nodeType)!==1&&v!==9)return[];if(l&&!u){if(w=or.exec(n))if(c=w[1]){if(v===9)if(h=t.getElementById(
c),h&&h.parentNode){if(h.id===c)return i.push(h),i}else return i;else if(t.ownerDocument&&(h=t.ownerDocument.
getElementById(c))&&et(t,h)&&h.id===c)return i.push(h),i}else{if(w[2])return b.apply(i,t.getElementsByTagName(
n)),i;if((c=w[3])&&r.getElementsByClassName&&t.getElementsByClassName)return b.apply(i,t.getElementsByClassName(
c)),i}if(r.qsa&&(!o||!o.test(n))){if(a=d=f,nt=t,g=v===9&&n,v===1&&t.nodeName.toLowerCase()!=="object")
{for(y=vt(n),(d=t.getAttribute("id"))?a=d.replace(sr,"\\$&"):t.setAttribute("id",a),a="[id='"+a+"'] ",
k=y.length;k--;)y[k]=a+yt(y[k]);nt=gt.test(n)&&ii(t.parentNode)||t;g=y.join(",")}if(g)try{return b.apply(
i,nt.querySelectorAll(g)),i}catch(tt){}finally{d||t.removeAttribute("id")}}}return vr(n.replace(lt,"$1"),
t,i,u)}function ni(){function n(r,u){return i.push(r+" ")>t.cacheLength&&delete n[i.shift()],n[r+" "]=
u}var i=[];return n}function h(n){return n[f]=!0,n}function c(n){var t=e.createElement("div");try{return!!n(
t)}catch(i){return!1}finally{t.parentNode&&t.parentNode.removeChild(t);t=null}}function ti(n,i){for(
var u=n.split("|"),r=n.length;r--;)t.attrHandle[u[r]]=i}function pi(n,t){var i=t&&n,r=i&&n.nodeType===
1&&t.nodeType===1&&(~t.sourceIndex||li)-(~n.sourceIndex||li);if(r)return r;if(i)while(i=i.nextSibling)
if(i===t)return-1;return n?1:-1}function hr(n){return function(t){var i=t.nodeName.toLowerCase();return i===
"input"&&t.type===n}}function cr(n){return function(t){var i=t.nodeName.toLowerCase();return(i==="input"||
i==="button")&&t.type===n}}function tt(n){return h(function(t){return t=+t,h(function(i,r){for(var u,
f=n([],i.length,t),e=f.length;e--;)i[u=f[e]]&&(i[u]=!(r[u]=i[u]))})})}function ii(n){return n&&typeof
n.getElementsByTagName!==ut&&n}function wi(){}function vt(n,i){var e,f,s,o,r,h,c,l=hi[n+" "];if(l)return i?
0:l.slice(0);for(r=n,h=[],c=t.preFilter;r;){(!e||(f=nr.exec(r)))&&(f&&(r=r.slice(f[0].length)||r),h.
push(s=[]));e=!1;(f=tr.exec(r))&&(e=f.shift(),s.push({value:e,type:f[0].replace(lt," ")}),r=r.slice(
e.length));for(o in t.filter)(f=at[o].exec(r))&&(!c[o]||(f=c[o](f)))&&(e=f.shift(),s.push({value:e,type:
o,matches:f}),r=r.slice(e.length));if(!e)break}return i?r.length:r?u.error(n):hi(n,h).slice(0)}function yt(
n){for(var t=0,r=n.length,i="";t<r;t++)i+=n[t].value;return i}function ri(n,t,i){var r=t.dir,u=i&&r===
"parentNode",e=bi++;return t.first?function(t,i,f){while(t=t[r])if(t.nodeType===1||u)return n(t,i,f)}
:function(t,i,o){var s,h,c=[a,e];if(o){while(t=t[r])if((t.nodeType===1||u)&&n(t,i,o))return!0}else while(
t=t[r])if(t.nodeType===1||u){if(h=t[f]||(t[f]={}),(s=h[r])&&s[0]===a&&s[1]===e)return c[2]=s[2];if(h[
r]=c,c[2]=n(t,i,o))return!0}}}function ui(n){return n.length>1?function(t,i,r){for(var u=n.length;u--;
)if(!n[u](t,i,r))return!1;return!0}:n[0]}function pt(n,t,i,r,u){for(var e,o=[],f=0,s=n.length,h=t!=null;
f<s;f++)(e=n[f])&&(!i||i(e,r,u))&&(o.push(e),h&&t.push(f));return o}function fi(n,t,i,r,u,e){return r&&
!r[f]&&(r=fi(r)),u&&!u[f]&&(u=fi(u,e)),h(function(f,e,o,s){var l,c,a,p=[],y=[],w=e.length,k=f||ar(t||
"*",o.nodeType?[o]:o,[]),v=n&&(f||!t)?pt(k,p,n,o,s):k,h=i?u||(f?n:w||r)?[]:e:v;if(i&&i(v,h,o,s),r)for(
l=pt(h,y),r(l,[],o,s),c=l.length;c--;)(a=l[c])&&(h[y[c]]=!(v[y[c]]=a));if(f){if(u||n){if(u){for(l=[],
c=h.length;c--;)(a=h[c])&&l.push(v[c]=a);u(null,h=[],l,s)}for(c=h.length;c--;)(a=h[c])&&(l=u?nt.call(
f,a):p[c])>-1&&(f[l]=!(e[l]=a))}}else h=pt(h===e?h.splice(w,h.length):h),u?u(null,e,h,s):b.apply(e,h)}
)}function ei(n){for(var s,u,r,o=n.length,h=t.relative[n[0].type],c=h||t.relative[" "],i=h?1:0,l=ri(
function(n){return n===s},c,!0),a=ri(function(n){return nt.call(s,n)>-1},c,!0),e=[function(n,t,i){return!h&&
(i||t!==ht)||((s=t).nodeType?l(n,t,i):a(n,t,i))}];i<o;i++)if(u=t.relative[n[i].type])e=[ri(ui(e),u)]
else{if(u=t.filter[n[i].type].apply(null,n[i].matches),u[f]){for(r=++i;r<o;r++)if(t.relative[n[r].type])
break;return fi(i>1&&ui(e),i>1&&yt(n.slice(0,i-1).concat({value:n[i-2].type===" "?"*":""})).replace(
lt,"$1"),u,i<r&&ei(n.slice(i,r)),r<o&&ei(n=n.slice(r)),r<o&&yt(n))}e.push(u)}return ui(e)}function lr(
n,i){var r=i.length>0,f=n.length>0,o=function(o,s,h,c,l){var y,d,w,k=0,v="0",g=o&&[],p=[],nt=ht,tt=o||
f&&t.find.TAG("*",l),it=a+=nt==null?1:Math.random()||.1,rt=tt.length;for(l&&(ht=s!==e&&s);v!==rt&&(y=
tt[v])!=null;v++){if(f&&y){for(d=0;w=n[d++];)if(w(y,s,h)){c.push(y);break}l&&(a=it)}r&&((y=!w&&y)&&k--,
o&&g.push(y))}if(k+=v,r&&v!==k){for(d=0;w=i[d++];)w(g,p,s,h);if(o){if(k>0)while(v--)g[v]||p[v]||(p[v]=
di.call(c));p=pt(p)}b.apply(c,p);l&&!o&&p.length>0&&k+i.length>1&&u.uniqueSort(c)}return l&&(a=it,ht=
nt),g};return r?h(o):o}function ar(n,t,i){for(var r=0,f=t.length;r<f;r++)u(n,t[r],i);return i}function vr(
n,i,u,f){var s,e,o,c,a,h=vt(n);if(!f&&h.length===1){if(e=h[0]=h[0].slice(0),e.length>2&&(o=e[0]).type===
"ID"&&r.getById&&i.nodeType===9&&l&&t.relative[e[1].type]){if(i=(t.find.ID(o.matches[0].replace(k,d),
i)||[])[0],!i)return u;n=n.slice(e.shift().value.length)}for(s=at.needsContext.test(n)?0:e.length;s--;
){if(o=e[s],t.relative[c=o.type])break;if((a=t.find[c])&&(f=a(o.matches[0].replace(k,d),gt.test(e[0].
type)&&ii(i.parentNode)||i))){if(e.splice(s,1),n=f.length&&yt(e),!n)return b.apply(u,f),u;break}}}return wt(
n,h)(f,i,!l,u,gt.test(n)&&ii(i.parentNode)||i),u}var it,r,t,st,oi,wt,ht,y,rt,p,e,v,l,o,g,ct,et,f="sizzle"+
-new Date,s=n.document,a=0,bi=0,si=ni(),hi=ni(),ci=ni(),bt=function(n,t){return n===t&&(rt=!0),0},ut=
typeof undefined,li=-2147483648,ki={}.hasOwnProperty,w=[],di=w.pop,gi=w.push,b=w.push,ai=w.slice,nt=
w.indexOf||function(n){for(var t=0,i=this.length;t<i;t++)if(this[t]===n)return t;return-1},kt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
i="[\\x20\\t\\r\\n\\f]",ft="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",vi=ft.replace("w","w#"),yi="\\["+i+"*("+
ft+")"+i+"*(?:([*^$|!~]?=)"+i+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+vi+")|)|)"+i+"*\\]",dt=":("+ft+
")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+yi.replace(3,8)+")*)|.*)\\)|)",lt=
new RegExp("^"+i+"+|((?:^|[^\\\\])(?:\\\\.)*)"+i+"+$","g"),nr=new RegExp("^"+i+"*,"+i+"*"),tr=new RegExp(
"^"+i+"*([>+~]|"+i+")"+i+"*"),ir=new RegExp("="+i+"*([^\\]'\"]*?)"+i+"*\\]","g"),rr=new RegExp(dt),ur=
new RegExp("^"+vi+"$"),at={ID:new RegExp("^#("+ft+")"),CLASS:new RegExp("^\\.("+ft+")"),TAG:new RegExp(
"^("+ft.replace("w","w*")+")"),ATTR:new RegExp("^"+yi),PSEUDO:new RegExp("^"+dt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+
i+"*(even|odd|(([+-]|)(\\d*)n|)"+i+"*(?:([+-]|)"+i+"*(\\d+)|))"+i+"*\\)|)","i"),bool:new RegExp("^(?:"+
kt+")$","i"),needsContext:new RegExp("^"+i+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+i+"*((?:-\\d)?\\d*)"+
i+"*\\)|)(?=[^-]|$)","i")},fr=/^(?:input|select|textarea|button)$/i,er=/^h\d$/i,ot=/^[^{]+\{\s*\[native \w/,
or=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,gt=/[+~]/,sr=/'|\\/g,k=new RegExp("\\\\([\\da-f]{1,6}"+i+"?|("+
i+")|.)","ig"),d=function(n,t,i){var r="0x"+t-65536;return r!==r||i?t:r<0?String.fromCharCode(r+65536):
String.fromCharCode(r>>10|55296,r&1023|56320)};try{b.apply(w=ai.call(s.childNodes),s.childNodes);w[s.
childNodes.length].nodeType}catch(yr){b={apply:w.length?function(n,t){gi.apply(n,ai.call(t))}:function(
n,t){for(var i=n.length,r=0;n[i++]=t[r++];);n.length=i-1}}}r=u.support={};oi=u.isXML=function(n){var
t=n&&(n.ownerDocument||n).documentElement;return t?t.nodeName!=="HTML":!1};p=u.setDocument=function(
n){var a,u=n?n.ownerDocument||n:s,h=u.defaultView;return u===e||u.nodeType!==9||!u.documentElement?e:
(e=u,v=u.documentElement,l=!oi(u),h&&h!==h.top&&(h.addEventListener?h.addEventListener("unload",function(
){p()},!1):h.attachEvent&&h.attachEvent("onunload",function(){p()})),r.attributes=c(function(n){return n.
className="i",!n.getAttribute("className")}),r.getElementsByTagName=c(function(n){return n.appendChild(
u.createComment("")),!n.getElementsByTagName("*").length}),r.getElementsByClassName=ot.test(u.getElementsByClassName)&&
c(function(n){return n.innerHTML="<div class='a'><\/div><div class='a i'><\/div>",n.firstChild.className=
"i",n.getElementsByClassName("i").length===2}),r.getById=c(function(n){return v.appendChild(n).id=f,
!u.getElementsByName||!u.getElementsByName(f).length}),r.getById?(t.find.ID=function(n,t){if(typeof t.
getElementById!==ut&&l){var i=t.getElementById(n);return i&&i.parentNode?[i]:[]}},t.filter.ID=function(
n){var t=n.replace(k,d);return function(n){return n.getAttribute("id")===t}}):(delete t.find.ID,t.filter.
ID=function(n){var t=n.replace(k,d);return function(n){var i=typeof n.getAttributeNode!==ut&&n.getAttributeNode(
"id");return i&&i.value===t}}),t.find.TAG=r.getElementsByTagName?function(n,t){if(typeof t.getElementsByTagName!==
ut)return t.getElementsByTagName(n)}:function(n,t){var i,r=[],f=0,u=t.getElementsByTagName(n);if(n===
"*"){while(i=u[f++])i.nodeType===1&&r.push(i);return r}return u},t.find.CLASS=r.getElementsByClassName&&
function(n,t){if(typeof t.getElementsByClassName!==ut&&l)return t.getElementsByClassName(n)},g=[],o=
[],(r.qsa=ot.test(u.querySelectorAll))&&(c(function(n){n.innerHTML="<select t=''><option selected=''><\/option><\/select>";
n.querySelectorAll("[t^='']").length&&o.push("[*^$]="+i+"*(?:''|\"\")");n.querySelectorAll("[selected]").
length||o.push("\\["+i+"*(?:value|"+kt+")");n.querySelectorAll(":checked").length||o.push(":checked")}
),c(function(n){var t=u.createElement("input");t.setAttribute("type","hidden");n.appendChild(t).setAttribute(
"name","D");n.querySelectorAll("[name=d]").length&&o.push("name"+i+"*[*^$|!~]?=");n.querySelectorAll(
":enabled").length||o.push(":enabled",":disabled");n.querySelectorAll("*,:x");o.push(",.*:")})),(r.matchesSelector=
ot.test(ct=v.webkitMatchesSelector||v.mozMatchesSelector||v.oMatchesSelector||v.msMatchesSelector))&&
c(function(n){r.disconnectedMatch=ct.call(n,"div");ct.call(n,"[s!='']:x");g.push("!=",dt)}),o=o.length&&
new RegExp(o.join("|")),g=g.length&&new RegExp(g.join("|")),a=ot.test(v.compareDocumentPosition),et=
a||ot.test(v.contains)?function(n,t){var r=n.nodeType===9?n.documentElement:n,i=t&&t.parentNode;return n===
i||!!(i&&i.nodeType===1&&(r.contains?r.contains(i):n.compareDocumentPosition&&n.compareDocumentPosition(
i)&16))}:function(n,t){if(t)while(t=t.parentNode)if(t===n)return!0;return!1},bt=a?function(n,t){if(n===
t)return rt=!0,0;var i=!n.compareDocumentPosition-!t.compareDocumentPosition;return i?i:(i=(n.ownerDocument||
n)===(t.ownerDocument||t)?n.compareDocumentPosition(t):1,i&1||!r.sortDetached&&t.compareDocumentPosition(
n)===i)?n===u||n.ownerDocument===s&&et(s,n)?-1:t===u||t.ownerDocument===s&&et(s,t)?1:y?nt.call(y,n)-
nt.call(y,t):0:i&4?-1:1}:function(n,t){if(n===t)return rt=!0,0;var i,r=0,o=n.parentNode,h=t.parentNode,
f=[n],e=[t];if(o&&h){if(o===h)return pi(n,t)}else return n===u?-1:t===u?1:o?-1:h?1:y?nt.call(y,n)-nt.
call(y,t):0;for(i=n;i=i.parentNode;)f.unshift(i);for(i=t;i=i.parentNode;)e.unshift(i);while(f[r]===e[
r])r++;return r?pi(f[r],e[r]):f[r]===s?-1:e[r]===s?1:0},u)};u.matches=function(n,t){return u(n,null,
null,t)};u.matchesSelector=function(n,t){if((n.ownerDocument||n)!==e&&p(n),t=t.replace(ir,"='$1']"),
r.matchesSelector&&l&&(!g||!g.test(t))&&(!o||!o.test(t)))try{var i=ct.call(n,t);if(i||r.disconnectedMatch||
n.document&&n.document.nodeType!==11)return i}catch(f){}return u(t,e,null,[n]).length>0};u.contains=
function(n,t){return(n.ownerDocument||n)!==e&&p(n),et(n,t)};u.attr=function(n,i){(n.ownerDocument||n)
!==e&&p(n);var f=t.attrHandle[i.toLowerCase()],u=f&&ki.call(t.attrHandle,i.toLowerCase())?f(n,i,!l):
undefined;return u!==undefined?u:r.attributes||!l?n.getAttribute(i):(u=n.getAttributeNode(i))&&u.specified?
u.value:null};u.error=function(n){throw new Error("Syntax error, unrecognized expression: "+n);};u.uniqueSort=
function(n){var u,f=[],t=0,i=0;if(rt=!r.detectDuplicates,y=!r.sortStable&&n.slice(0),n.sort(bt),rt){
while(u=n[i++])u===n[i]&&(t=f.push(i));while(t--)n.splice(f[t],1)}return y=null,n};st=u.getText=function(
n){var r,i="",u=0,t=n.nodeType;if(t){if(t===1||t===9||t===11){if(typeof n.textContent=="string")return n.
textContent;for(n=n.firstChild;n;n=n.nextSibling)i+=st(n)}else if(t===3||t===4)return n.nodeValue}else
while(r=n[u++])i+=st(r);return i};t=u.selectors={cacheLength:50,createPseudo:h,match:at,attrHandle:{
},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",
first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(n){return n[1]=n[1].replace(k,d),n[3]=
(n[4]||n[5]||"").replace(k,d),n[2]==="~="&&(n[3]=" "+n[3]+" "),n.slice(0,4)},CHILD:function(n){return n[
1]=n[1].toLowerCase(),n[1].slice(0,3)==="nth"?(n[3]||u.error(n[0]),n[4]=+(n[4]?n[5]+(n[6]||1):2*(n[3]===
"even"||n[3]==="odd")),n[5]=+(n[7]+n[8]||n[3]==="odd")):n[3]&&u.error(n[0]),n},PSEUDO:function(n){var
i,t=!n[5]&&n[2];return at.CHILD.test(n[0])?null:(n[3]&&n[4]!==undefined?n[2]=n[4]:t&&rr.test(t)&&(i=
vt(t,!0))&&(i=t.indexOf(")",t.length-i)-t.length)&&(n[0]=n[0].slice(0,i),n[2]=t.slice(0,i)),n.slice(
0,3))}},filter:{TAG:function(n){var t=n.replace(k,d).toLowerCase();return n==="*"?function(){return!0}
:function(n){return n.nodeName&&n.nodeName.toLowerCase()===t}},CLASS:function(n){var t=si[n+" "];return t||
(t=new RegExp("(^|"+i+")"+n+"("+i+"|$)"))&&si(n,function(n){return t.test(typeof n.className=="string"&&
n.className||typeof n.getAttribute!==ut&&n.getAttribute("class")||"")})},ATTR:function(n,t,i){return function(
r){var f=u.attr(r,n);return f==null?t==="!=":t?(f+="",t==="="?f===i:t==="!="?f!==i:t==="^="?i&&f.indexOf(
i)===0:t==="*="?i&&f.indexOf(i)>-1:t==="$="?i&&f.slice(-i.length)===i:t==="~="?(" "+f+" ").indexOf(i)>
-1:t==="|="?f===i||f.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(n,t,i,r,u){var s=n.slice(0,
3)!=="nth",o=n.slice(-4)!=="last",e=t==="of-type";return r===1&&u===0?function(n){return!!n.parentNode}
:function(t,i,h){var v,k,c,l,y,w,b=s!==o?"nextSibling":"previousSibling",p=t.parentNode,g=e&&t.nodeName.
toLowerCase(),d=!h&&!e;if(p){if(s){while(b){for(c=t;c=c[b];)if(e?c.nodeName.toLowerCase()===g:c.nodeType===
1)return!1;w=b=n==="only"&&!w&&"nextSibling"}return!0}if(w=[o?p.firstChild:p.lastChild],o&&d){for(k=
p[f]||(p[f]={}),v=k[n]||[],y=v[0]===a&&v[1],l=v[0]===a&&v[2],c=y&&p.childNodes[y];c=++y&&c&&c[b]||(l=
y=0)||w.pop();)if(c.nodeType===1&&++l&&c===t){k[n]=[a,y,l];break}}else if(d&&(v=(t[f]||(t[f]={}))[n])
&&v[0]===a)l=v[1];else while(c=++y&&c&&c[b]||(l=y=0)||w.pop())if((e?c.nodeName.toLowerCase()===g:c.nodeType===
1)&&++l&&(d&&((c[f]||(c[f]={}))[n]=[a,l]),c===t))break;return l-=u,l===r||l%r==0&&l/r>=0}}},PSEUDO:function(
n,i){var e,r=t.pseudos[n]||t.setFilters[n.toLowerCase()]||u.error("unsupported pseudo: "+n);return r[
f]?r(i):r.length>1?(e=[n,n,"",i],t.setFilters.hasOwnProperty(n.toLowerCase())?h(function(n,t){for(var
u,f=r(n,i),e=f.length;e--;)u=nt.call(n,f[e]),n[u]=!(t[u]=f[e])}):function(n){return r(n,0,e)}):r}},pseudos:
{not:h(function(n){var i=[],r=[],t=wt(n.replace(lt,"$1"));return t[f]?h(function(n,i,r,u){for(var e,
o=t(n,null,u,[]),f=n.length;f--;)(e=o[f])&&(n[f]=!(i[f]=e))}):function(n,u,f){return i[0]=n,t(i,null,
f,r),!r.pop()}}),has:h(function(n){return function(t){return u(n,t).length>0}}),contains:h(function(
n){return function(t){return(t.textContent||t.innerText||st(t)).indexOf(n)>-1}}),lang:h(function(n){
return ur.test(n||"")||u.error("unsupported lang: "+n),n=n.replace(k,d).toLowerCase(),function(t){var
i;do if(i=l?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return i=i.toLowerCase(),i===n||
i.indexOf(n+"-")===0;while((t=t.parentNode)&&t.nodeType===1);return!1}}),target:function(t){var i=n.
location&&n.location.hash;return i&&i.slice(1)===t.id},root:function(n){return n===v},focus:function(
n){return n===e.activeElement&&(!e.hasFocus||e.hasFocus())&&!!(n.type||n.href||~n.tabIndex)},enabled:
function(n){return n.disabled===!1},disabled:function(n){return n.disabled===!0},checked:function(n)
{var t=n.nodeName.toLowerCase();return t==="input"&&!!n.checked||t==="option"&&!!n.selected},selected:
function(n){return n.parentNode&&n.parentNode.selectedIndex,n.selected===!0},empty:function(n){for(n=
n.firstChild;n;n=n.nextSibling)if(n.nodeType<6)return!1;return!0},parent:function(n){return!t.pseudos.
empty(n)},header:function(n){return er.test(n.nodeName)},input:function(n){return fr.test(n.nodeName)}
,button:function(n){var t=n.nodeName.toLowerCase();return t==="input"&&n.type==="button"||t==="button"}
,text:function(n){var t;return n.nodeName.toLowerCase()==="input"&&n.type==="text"&&((t=n.getAttribute(
"type"))==null||t.toLowerCase()==="text")},first:tt(function(){return[0]}),last:tt(function(n,t){return[
t-1]}),eq:tt(function(n,t,i){return[i<0?i+t:i]}),even:tt(function(n,t){for(var i=0;i<t;i+=2)n.push(i);
return n}),odd:tt(function(n,t){for(var i=1;i<t;i+=2)n.push(i);return n}),lt:tt(function(n,t,i){for(
var r=i<0?i+t:i;--r>=0;)n.push(r);return n}),gt:tt(function(n,t,i){for(var r=i<0?i+t:i;++r<t;)n.push(
r);return n})}};t.pseudos.nth=t.pseudos.eq;for(it in{radio:!0,checkbox:!0,file:!0,password:!0,image:
!0})t.pseudos[it]=hr(it);for(it in{submit:!0,reset:!0})t.pseudos[it]=cr(it);return wi.prototype=t.filters=
t.pseudos,t.setFilters=new wi,wt=u.compile=function(n,t){var r,u=[],e=[],i=ci[n+" "];if(!i){for(t||(
t=vt(n)),r=t.length;r--;)i=ei(t[r]),i[f]?u.push(i):e.push(i);i=ci(n,lr(e,u))}return i},r.sortStable=
f.split("").sort(bt).join("")===f,r.detectDuplicates=!!rt,p(),r.sortDetached=c(function(n){return n.
compareDocumentPosition(e.createElement("div"))&1}),c(function(n){return n.innerHTML="<a href='#'><\/a>",
n.firstChild.getAttribute("href")==="#"})||ti("type|href|height|width",function(n,t,i){if(!i)return n.
getAttribute(t,t.toLowerCase()==="type"?1:2)}),r.attributes&&c(function(n){return n.innerHTML="<input/>",
n.firstChild.setAttribute("value",""),n.firstChild.getAttribute("value")===""})||ti("value",function(
n,t,i){if(!i&&n.nodeName.toLowerCase()==="input")return n.defaultValue}),c(function(n){return n.getAttribute(
"disabled")==null})||ti(kt,function(n,t,i){var r;if(!i)return n[t]===!0?t.toLowerCase():(r=n.getAttributeNode(
t))&&r.specified?r.value:null}),u}(n);i.find=y;i.expr=y.selectors;i.expr[":"]=i.expr.pseudos;i.unique=
y.uniqueSort;i.text=y.getText;i.isXMLDoc=y.isXML;i.contains=y.contains;var ki=i.expr.match.needsContext,
di=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ef=/^.[^:#\[\.,]*$/;i.filter=function(n,t,r){var u=t[0];return r&&(n=
":not("+n+")"),t.length===1&&u.nodeType===1?i.find.matchesSelector(u,n)?[u]:[]:i.find.matches(n,i.grep(
t,function(n){return n.nodeType===1}))};i.fn.extend({find:function(n){var t,u=this.length,r=[],f=this;
if(typeof n!="string")return this.pushStack(i(n).filter(function(){for(t=0;t<u;t++)if(i.contains(f[t],
this))return!0}));for(t=0;t<u;t++)i.find(n,f[t],r);return r=this.pushStack(u>1?i.unique(r):r),r.selector=
this.selector?this.selector+" "+n:n,r},filter:function(n){return this.pushStack(fi(this,n||[],!1))},
not:function(n){return this.pushStack(fi(this,n||[],!0))},is:function(n){return!!fi(this,typeof n=="string"&&
ki.test(n)?i(n):n||[],!1).length}});gi=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;nr=i.fn.init=function(n,
t){var r,f;if(!n)return this;if(typeof n=="string"){if(r=n[0]==="<"&&n[n.length-1]===">"&&n.length>=
3?[null,n,null]:gi.exec(n),r&&(r[1]||!t)){if(r[1]){if(t=t instanceof i?t[0]:t,i.merge(this,i.parseHTML(
r[1],t&&t.nodeType?t.ownerDocument||t:u,!0)),di.test(r[1])&&i.isPlainObject(t))for(r in t)i.isFunction(
this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return f=u.getElementById(r[2]),f&&f.parentNode&&
(this.length=1,this[0]=f),this.context=u,this.selector=n,this}return!t||t.jquery?(t||st).find(n):this.
constructor(t).find(n)}return n.nodeType?(this.context=this[0]=n,this.length=1,this):i.isFunction(n)?
typeof st.ready!="undefined"?st.ready(n):n(i):(n.selector!==undefined&&(this.selector=n.selector,this.
context=n.context),i.makeArray(n,this))};nr.prototype=i.fn;st=i(u);tr=/^(?:parents|prev(?:Until|All))/;
ir={children:!0,contents:!0,next:!0,prev:!0};i.extend({dir:function(n,t,r){for(var u=[],f=r!==undefined;
(n=n[t])&&n.nodeType!==9;)if(n.nodeType===1){if(f&&i(n).is(r))break;u.push(n)}return u},sibling:function(
n,t){for(var i=[];n;n=n.nextSibling)n.nodeType===1&&n!==t&&i.push(n);return i}});i.fn.extend({has:function(
n){var t=i(n,this),r=t.length;return this.filter(function(){for(var n=0;n<r;n++)if(i.contains(this,t[
n]))return!0})},closest:function(n,t){for(var r,f=0,o=this.length,u=[],e=ki.test(n)||typeof n!="string"?
i(n,t||this.context):0;f<o;f++)for(r=this[f];r&&r!==t;r=r.parentNode)if(r.nodeType<11&&(e?e.index(r)>
-1:r.nodeType===1&&i.find.matchesSelector(r,n))){u.push(r);break}return this.pushStack(u.length>1?i.
unique(u):u)},index:function(n){return n?typeof n=="string"?et.call(i(n),this[0]):et.call(this,n.jquery?
n[0]:n):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(n,t){return this.
pushStack(i.unique(i.merge(this.get(),i(n,t))))},addBack:function(n){return this.add(n==null?this.prevObject:
this.prevObject.filter(n))}});i.each({parent:function(n){var t=n.parentNode;return t&&t.nodeType!==11?
t:null},parents:function(n){return i.dir(n,"parentNode")},parentsUntil:function(n,t,r){return i.dir(
n,"parentNode",r)},next:function(n){return rr(n,"nextSibling")},prev:function(n){return rr(n,"previousSibling")}
,nextAll:function(n){return i.dir(n,"nextSibling")},prevAll:function(n){return i.dir(n,"previousSibling")}
,nextUntil:function(n,t,r){return i.dir(n,"nextSibling",r)},prevUntil:function(n,t,r){return i.dir(n,
"previousSibling",r)},siblings:function(n){return i.sibling((n.parentNode||{}).firstChild,n)},children:
function(n){return i.sibling(n.firstChild)},contents:function(n){return n.contentDocument||i.merge([
],n.childNodes)}},function(n,t){i.fn[n]=function(r,u){var f=i.map(this,t,r);return n.slice(-5)!=="Until"&&
(u=r),u&&typeof u=="string"&&(f=i.filter(u,f)),this.length>1&&(ir[n]||i.unique(f),tr.test(n)&&f.reverse(
)),this.pushStack(f)}});c=/\S+/g;ei={};i.Callbacks=function(n){n=typeof n=="string"?ei[n]||of(n):i.extend(
{},n);var u,h,o,c,f,e,t=[],r=!n.once&&[],l=function(i){for(u=n.memory&&i,h=!0,e=c||0,c=0,f=t.length,
o=!0;t&&e<f;e++)if(t[e].apply(i[0],i[1])===!1&&n.stopOnFalse){u=!1;break}o=!1;t&&(r?r.length&&l(r.shift(
)):u?t=[]:s.disable())},s={add:function(){if(t){var r=t.length;(function e(r){i.each(r,function(r,u)
{var f=i.type(u);f==="function"?n.unique&&s.has(u)||t.push(u):u&&u.length&&f!=="string"&&e(u)})})(arguments);
o?f=t.length:u&&(c=r,l(u))}return this},remove:function(){return t&&i.each(arguments,function(n,r){for(
var u;(u=i.inArray(r,t,u))>-1;)t.splice(u,1),o&&(u<=f&&f--,u<=e&&e--)}),this},has:function(n){return n?
i.inArray(n,t)>-1:!!(t&&t.length)},empty:function(){return t=[],f=0,this},disable:function(){return t=
r=u=undefined,this},disabled:function(){return!t},lock:function(){return r=undefined,u||s.disable(),
this},locked:function(){return!r},fireWith:function(n,i){return t&&(!h||r)&&(i=i||[],i=[n,i.slice?i.
slice():i],o?r.push(i):l(i)),this},fire:function(){return s.fireWith(this,arguments),this},fired:function(
){return!!h}};return s};i.extend({Deferred:function(n){var u=[["resolve","done",i.Callbacks("once memory"),
"resolved"],["reject","fail",i.Callbacks("once memory"),"rejected"],["notify","progress",i.Callbacks(
"memory")]],f="pending",r={state:function(){return f},always:function(){return t.done(arguments).fail(
arguments),this},then:function(){var n=arguments;return i.Deferred(function(f){i.each(u,function(u,e)
{var o=i.isFunction(n[u])&&n[u];t[e[1]](function(){var n=o&&o.apply(this,arguments);n&&i.isFunction(
n.promise)?n.promise().done(f.resolve).fail(f.reject).progress(f.notify):f[e[0]+"With"](this===r?f.promise(
):this,o?[n]:arguments)})});n=null}).promise()},promise:function(n){return n!=null?i.extend(n,r):r}},
t={};return r.pipe=r.then,i.each(u,function(n,i){var e=i[2],o=i[3];r[i[1]]=e.add;o&&e.add(function()
{f=o},u[n^1][2].disable,u[2][2].lock);t[i[0]]=function(){return t[i[0]+"With"](this===t?r:this,arguments),
this};t[i[0]+"With"]=e.fireWith}),r.promise(t),n&&n.call(t,t),t},when:function(n){var t=0,u=a.call(arguments),
r=u.length,e=r!==1||n&&i.isFunction(n.promise)?r:0,f=e===1?n:i.Deferred(),h=function(n,t,i){return function(
r){t[n]=this;i[n]=arguments.length>1?a.call(arguments):r;i===o?f.notifyWith(t,i):--e||f.resolveWith(
t,i)}},o,c,s;if(r>1)for(o=new Array(r),c=new Array(r),s=new Array(r);t<r;t++)u[t]&&i.isFunction(u[t].
promise)?u[t].promise().done(h(t,s,u)).fail(f.reject).progress(h(t,c,o)):--e;return e||f.resolveWith(
s,u),f.promise()}});i.fn.ready=function(n){return i.ready.promise().done(n),this};i.extend({isReady:
!1,readyWait:1,holdReady:function(n){n?i.readyWait++:i.ready(!0)},ready:function(n){(n===!0?--i.readyWait:
i.isReady)||(i.isReady=!0,n!==!0&&--i.readyWait>0)||(ht.resolveWith(u,[i]),i.fn.trigger&&i(u).trigger(
"ready").off("ready"))}});i.ready.promise=function(t){return ht||(ht=i.Deferred(),u.readyState==="complete"?
setTimeout(i.ready):(u.addEventListener("DOMContentLoaded",ct,!1),n.addEventListener("load",ct,!1))),
ht.promise(t)};i.ready.promise();l=i.access=function(n,t,r,u,f,e,o){var s=0,c=n.length,h=r==null;if(
i.type(r)==="object"){f=!0;for(s in r)i.access(n,t,s,r[s],!0,e,o)}else if(u!==undefined&&(f=!0,i.isFunction(
u)||(o=!0),h&&(o?(t.call(n,u),t=null):(h=t,t=function(n,t,r){return h.call(i(n),r)})),t))for(;s<c;s++)
t(n[s],r,o?u:u.call(n[s],s,t(n[s],r)));return f?n:h?t.call(n):c?t(n[0],r):e};i.acceptData=function(n)
{return n.nodeType===1||n.nodeType===9||!+n.nodeType};p.uid=1;p.accepts=i.acceptData;p.prototype={key:
function(n){if(!p.accepts(n))return 0;var r={},t=n[this.expando];if(!t){t=p.uid++;try{r[this.expando]=
{value:t};Object.defineProperties(n,r)}catch(u){r[this.expando]=t;i.extend(n,r)}}return this.cache[t]||
(this.cache[t]={}),t},set:function(n,t,r){var f,e=this.key(n),u=this.cache[e];if(typeof t=="string")
u[t]=r;else if(i.isEmptyObject(u))i.extend(this.cache[e],t);else for(f in t)u[f]=t[f];return u},get:
function(n,t){var i=this.cache[this.key(n)];return t===undefined?i:i[t]},access:function(n,t,r){var u;
return t===undefined||t&&typeof t=="string"&&r===undefined?(u=this.get(n,t),u!==undefined?u:this.get(
n,i.camelCase(t))):(this.set(n,t,r),r!==undefined?r:t)},remove:function(n,t){var u,r,f,o=this.key(n),
e=this.cache[o];if(t===undefined)this.cache[o]={};else for(i.isArray(t)?r=t.concat(t.map(i.camelCase)):
(f=i.camelCase(t),t in e?r=[t,f]:(r=f,r=r in e?[r]:r.match(c)||[])),u=r.length;u--;)delete e[r[u]]},
hasData:function(n){return!i.isEmptyObject(this.cache[n[this.expando]]||{})},discard:function(n){n[this.
expando]&&delete this.cache[n[this.expando]]}};var r=new p,e=new p,sf=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
hf=/([A-Z])/g;i.extend({hasData:function(n){return e.hasData(n)||r.hasData(n)},data:function(n,t,i){
return e.access(n,t,i)},removeData:function(n,t){e.remove(n,t)},_data:function(n,t,i){return r.access(
n,t,i)},_removeData:function(n,t){r.remove(n,t)}});i.fn.extend({data:function(n,t){var o,f,s,u=this[
0],h=u&&u.attributes;if(n===undefined){if(this.length&&(s=e.get(u),u.nodeType===1&&!r.get(u,"hasDataAttrs")))
{for(o=h.length;o--;)f=h[o].name,f.indexOf("data-")===0&&(f=i.camelCase(f.slice(5)),ur(u,f,s[f]));r.
set(u,"hasDataAttrs",!0)}return s}return typeof n=="object"?this.each(function(){e.set(this,n)}):l(this,
function(t){var r,f=i.camelCase(n);if(u&&t===undefined)return(r=e.get(u,n),r!==undefined)?r:(r=e.get(
u,f),r!==undefined)?r:(r=ur(u,f,undefined),r!==undefined)?r:void 0;this.each(function(){var i=e.get(
this,f);e.set(this,f,t);n.indexOf("-")!==-1&&i!==undefined&&e.set(this,n,t)})},null,t,arguments.length>
1,null,!0)},removeData:function(n){return this.each(function(){e.remove(this,n)})}});i.extend({queue:
function(n,t,u){var f;if(n)return t=(t||"fx")+"queue",f=r.get(n,t),u&&(!f||i.isArray(u)?f=r.access(n,
t,i.makeArray(u)):f.push(u)),f||[]},dequeue:function(n,t){t=t||"fx";var r=i.queue(n,t),e=r.length,u=
r.shift(),f=i._queueHooks(n,t),o=function(){i.dequeue(n,t)};u==="inprogress"&&(u=r.shift(),e--);u&&(
t==="fx"&&r.unshift("inprogress"),delete f.stop,u.call(n,o,f));!e&&f&&f.empty.fire()},_queueHooks:function(
n,t){var u=t+"queueHooks";return r.get(n,u)||r.access(n,u,{empty:i.Callbacks("once memory").add(function(
){r.remove(n,[t+"queue",u])})})}});i.fn.extend({queue:function(n,t){var r=2;return(typeof n!="string"&&
(t=n,n="fx",r--),arguments.length<r)?i.queue(this[0],n):t===undefined?this:this.each(function(){var r=
i.queue(this,n,t);i._queueHooks(this,n);n==="fx"&&r[0]!=="inprogress"&&i.dequeue(this,n)})},dequeue:
function(n){return this.each(function(){i.dequeue(this,n)})},clearQueue:function(n){return this.queue(
n||"fx",[])},promise:function(n,t){var u,e=1,o=i.Deferred(),f=this,s=this.length,h=function(){--e||o.
resolveWith(f,[f])};for(typeof n!="string"&&(t=n,n=undefined),n=n||"fx";s--;)u=r.get(f[s],n+"queueHooks"),
u&&u.empty&&(e++,u.empty.add(h));return h(),o.promise(t)}});var lt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.
source,w=["Top","Right","Bottom","Left"],it=function(n,t){return n=t||n,i.css(n,"display")==="none"||
!i.contains(n.ownerDocument,n)},fr=/^(?:checkbox|radio)$/i;(function(){var t=u.createDocumentFragment(
),n=t.appendChild(u.createElement("div"));n.innerHTML="<input type='radio' checked='checked' name='t'/>";
f.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked;n.innerHTML="<textarea>x<\/textarea>";f.
noCloneChecked=!!n.cloneNode(!0).lastChild.defaultValue})();d=typeof undefined;f.focusinBubbles="onfocusin"in
n;var cf=/^key/,lf=/^(?:mouse|contextmenu)|click/,er=/^(?:focusinfocus|focusoutblur)$/,or=/^([^.]*)(?:\.(.+)|)$/;
i.event={global:{},add:function(n,t,u,f,e){var v,y,w,p,b,h,s,l,o,k,g,a=r.get(n);if(a)for(u.handler&&
(v=u,u=v.handler,e=v.selector),u.guid||(u.guid=i.guid++),(p=a.events)||(p=a.events={}),(y=a.handle)||
(y=a.handle=function(t){return typeof i!==d&&i.event.triggered!==t.type?i.event.dispatch.apply(n,arguments):
undefined}),t=(t||"").match(c)||[""],b=t.length;b--;)(w=or.exec(t[b])||[],o=g=w[1],k=(w[2]||"").split(
".").sort(),o)&&(s=i.event.special[o]||{},o=(e?s.delegateType:s.bindType)||o,s=i.event.special[o]||{
},h=i.extend({type:o,origType:g,data:f,handler:u,guid:u.guid,selector:e,needsContext:e&&i.expr.match.
needsContext.test(e),namespace:k.join(".")},v),(l=p[o])||(l=p[o]=[],l.delegateCount=0,s.setup&&s.setup.
call(n,f,k,y)!==!1||n.addEventListener&&n.addEventListener(o,y,!1)),s.add&&(s.add.call(n,h),h.handler.
guid||(h.handler.guid=u.guid)),e?l.splice(l.delegateCount++,0,h):l.push(h),i.event.global[o]=!0)},remove:
function(n,t,u,f,e){var p,k,h,v,w,s,l,a,o,b,d,y=r.hasData(n)&&r.get(n);if(y&&(v=y.events)){for(t=(t||
"").match(c)||[""],w=t.length;w--;){if(h=or.exec(t[w])||[],o=d=h[1],b=(h[2]||"").split(".").sort(),!o)
{for(o in v)i.event.remove(n,o+t[w],u,f,!0);continue}for(l=i.event.special[o]||{},o=(f?l.delegateType:
l.bindType)||o,a=v[o]||[],h=h[2]&&new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"),k=p=a.length;
p--;)s=a[p],(e||d===s.origType)&&(!u||u.guid===s.guid)&&(!h||h.test(s.namespace))&&(!f||f===s.selector||
f==="**"&&s.selector)&&(a.splice(p,1),s.selector&&a.delegateCount--,l.remove&&l.remove.call(n,s));k&&
!a.length&&(l.teardown&&l.teardown.call(n,b,y.handle)!==!1||i.removeEvent(n,o,y.handle),delete v[o])}
i.isEmptyObject(v)&&(delete y.handle,r.remove(n,"events"))}},trigger:function(t,f,e,o){var w,s,c,b,a,
v,l,p=[e||u],h=ri.call(t,"type")?t.type:t,y=ri.call(t,"namespace")?t.namespace.split("."):[];if((s=c=
e=e||u,e.nodeType!==3&&e.nodeType!==8)&&!er.test(h+i.event.triggered)&&(h.indexOf(".")>=0&&(y=h.split(
"."),h=y.shift(),y.sort()),a=h.indexOf(":")<0&&"on"+h,t=t[i.expando]?t:new i.Event(h,typeof t=="object"&&
t),t.isTrigger=o?2:3,t.namespace=y.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+y.join(
"\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=e),f=f==null?[t]:i.makeArray(
f,[t]),l=i.event.special[h]||{},o||!l.trigger||l.trigger.apply(e,f)!==!1)){if(!o&&!l.noBubble&&!i.isWindow(
e)){for(b=l.delegateType||h,er.test(b+h)||(s=s.parentNode);s;s=s.parentNode)p.push(s),c=s;c===(e.ownerDocument||
u)&&p.push(c.defaultView||c.parentWindow||n)}for(w=0;(s=p[w++])&&!t.isPropagationStopped();)t.type=w>
1?b:l.bindType||h,v=(r.get(s,"events")||{})[t.type]&&r.get(s,"handle"),v&&v.apply(s,f),v=a&&s[a],v&&
v.apply&&i.acceptData(s)&&(t.result=v.apply(s,f),t.result===!1&&t.preventDefault());return t.type=h,
o||t.isDefaultPrevented()||(!l._default||l._default.apply(p.pop(),f)===!1)&&i.acceptData(e)&&a&&i.isFunction(
e[h])&&!i.isWindow(e)&&(c=e[a],c&&(e[a]=null),i.event.triggered=h,e[h](),i.event.triggered=undefined,
c&&(e[a]=c)),t.result}},dispatch:function(n){n=i.event.fix(n);var o,s,e,u,t,h=[],c=a.call(arguments),
l=(r.get(this,"events")||{})[n.type]||[],f=i.event.special[n.type]||{};if(c[0]=n,n.delegateTarget=this,
!f.preDispatch||f.preDispatch.call(this,n)!==!1){for(h=i.event.handlers.call(this,n,l),o=0;(u=h[o++])
&&!n.isPropagationStopped();)for(n.currentTarget=u.elem,s=0;(t=u.handlers[s++])&&!n.isImmediatePropagationStopped(
);)(!n.namespace_re||n.namespace_re.test(t.namespace))&&(n.handleObj=t,n.data=t.data,e=((i.event.special[
t.origType]||{}).handle||t.handler).apply(u.elem,c),e!==undefined&&(n.result=e)===!1&&(n.preventDefault(
),n.stopPropagation()));return f.postDispatch&&f.postDispatch.call(this,n),n.result}},handlers:function(
n,t){var e,u,f,o,h=[],s=t.delegateCount,r=n.target;if(s&&r.nodeType&&(!n.button||n.type!=="click"))for(
;r!==this;r=r.parentNode||this)if(r.disabled!==!0||n.type!=="click"){for(u=[],e=0;e<s;e++)o=t[e],f=o.
selector+" ",u[f]===undefined&&(u[f]=o.needsContext?i(f,this).index(r)>=0:i.find(f,this,null,[r]).length),
u[f]&&u.push(o);u.length&&h.push({elem:r,handlers:u})}return s<t.length&&h.push({elem:this,handlers:
t.slice(s)}),h},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".
split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(n,t){return n.
which==null&&(n.which=t.charCode!=null?t.charCode:t.keyCode),n}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".
split(" "),filter:function(n,t){var e,i,r,f=t.button;return n.pageX==null&&t.clientX!=null&&(e=n.target.
ownerDocument||u,i=e.documentElement,r=e.body,n.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)
-(i&&i.clientLeft||r&&r.clientLeft||0),n.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||
r&&r.clientTop||0)),n.which||f===undefined||(n.which=f&1?1:f&2?3:f&4?2:0),n}},fix:function(n){if(n[i.
expando])return n;var f,e,o,r=n.type,s=n,t=this.fixHooks[r];for(t||(this.fixHooks[r]=t=lf.test(r)?this.
mouseHooks:cf.test(r)?this.keyHooks:{}),o=t.props?this.props.concat(t.props):this.props,n=new i.Event(
s),f=o.length;f--;)e=o[f],n[e]=s[e];return n.target||(n.target=u),n.target.nodeType===3&&(n.target=n.
target.parentNode),t.filter?t.filter(n,s):n},special:{load:{noBubble:!0},focus:{trigger:function(){if(
this!==sr()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(
this===sr()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(
this.type==="checkbox"&&this.click&&i.nodeName(this,"input"))return this.click(),!1},_default:function(
n){return i.nodeName(n.target,"a")}},beforeunload:{postDispatch:function(n){n.result!==undefined&&(n.
originalEvent.returnValue=n.result)}}},simulate:function(n,t,r,u){var f=i.extend(new i.Event,r,{type:
n,isSimulated:!0,originalEvent:{}});u?i.event.trigger(f,null,t):i.event.dispatch.call(t,f);f.isDefaultPrevented(
)&&r.preventDefault()}};i.removeEvent=function(n,t,i){n.removeEventListener&&n.removeEventListener(t,
i,!1)};i.Event=function(n,t){if(!(this instanceof i.Event))return new i.Event(n,t);n&&n.type?(this.originalEvent=
n,this.type=n.type,this.isDefaultPrevented=n.defaultPrevented||n.defaultPrevented===undefined&&n.getPreventDefault&&
n.getPreventDefault()?at:g):this.type=n;t&&i.extend(this,t);this.timeStamp=n&&n.timeStamp||i.now();this[
i.expando]=!0};i.Event.prototype={isDefaultPrevented:g,isPropagationStopped:g,isImmediatePropagationStopped:
g,preventDefault:function(){var n=this.originalEvent;this.isDefaultPrevented=at;n&&n.preventDefault&&
n.preventDefault()},stopPropagation:function(){var n=this.originalEvent;this.isPropagationStopped=at;
n&&n.stopPropagation&&n.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=
at;this.stopPropagation()}};i.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(n,t){i.event.
special[n]={delegateType:t,bindType:t,handle:function(n){var u,f=this,r=n.relatedTarget,e=n.handleObj;
return r&&(r===f||i.contains(f,r))||(n.type=e.origType,u=e.handler.apply(this,arguments),n.type=t),u}
}});f.focusinBubbles||i.each({focus:"focusin",blur:"focusout"},function(n,t){var u=function(n){i.event.
simulate(t,n.target,i.event.fix(n),!0)};i.event.special[t]={setup:function(){var i=this.ownerDocument||
this,f=r.access(i,t);f||i.addEventListener(n,u,!0);r.access(i,t,(f||0)+1)},teardown:function(){var i=
this.ownerDocument||this,f=r.access(i,t)-1;f?r.access(i,t,f):(i.removeEventListener(n,u,!0),r.remove(
i,t))}}});i.fn.extend({on:function(n,t,r,u,f){var e,o;if(typeof n=="object"){typeof t!="string"&&(r=
r||t,t=undefined);for(o in n)this.on(o,t,r,n[o],f);return this}if(r==null&&u==null?(u=t,r=t=undefined):
u==null&&(typeof t=="string"?(u=r,r=undefined):(u=r,r=t,t=undefined)),u===!1)u=g;else if(!u)return this;
return f===1&&(e=u,u=function(n){return i().off(n),e.apply(this,arguments)},u.guid=e.guid||(e.guid=i.
guid++)),this.each(function(){i.event.add(this,n,u,r,t)})},one:function(n,t,i,r){return this.on(n,t,
i,r,1)},off:function(n,t,r){var u,f;if(n&&n.preventDefault&&n.handleObj)return u=n.handleObj,i(n.delegateTarget).
off(u.namespace?u.origType+"."+u.namespace:u.origType,u.selector,u.handler),this;if(typeof n=="object")
{for(f in n)this.off(f,t,n[f]);return this}return(t===!1||typeof t=="function")&&(r=t,t=undefined),r===
!1&&(r=g),this.each(function(){i.event.remove(this,n,r,t)})},trigger:function(n,t){return this.each(
function(){i.event.trigger(n,t,this)})},triggerHandler:function(n,t){var r=this[0];if(r)return i.event.
trigger(n,t,r,!0)}});var hr=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
cr=/<([\w:]+)/,af=/<|&#?\w+;/,vf=/<(?:script|style|link)/i,yf=/checked\s*(?:[^=]|=\s*.checked.)/i,lr=
/^$|\/(?:java|ecma)script/i,pf=/^true\/(.*)/,wf=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,h={option:
[1,"<select multiple='multiple'>","<\/select>"],thead:[1,"<table>","<\/table>"],col:[2,"<table><colgroup>",
"<\/colgroup><\/table>"],tr:[2,"<table><tbody>","<\/tbody><\/table>"],td:[3,"<table><tbody><tr>","<\/tr><\/tbody><\/table>"],
_default:[0,"",""]};h.optgroup=h.option;h.tbody=h.tfoot=h.colgroup=h.caption=h.thead;h.th=h.td;i.extend(
{clone:function(n,t,r){var u,c,s,e,h=n.cloneNode(!0),l=i.contains(n.ownerDocument,n);if(!f.noCloneChecked&&
(n.nodeType===1||n.nodeType===11)&&!i.isXMLDoc(n))for(e=o(h),s=o(n),u=0,c=s.length;u<c;u++)df(s[u],e[
u]);if(t)if(r)for(s=s||o(n),e=e||o(h),u=0,c=s.length;u<c;u++)vr(s[u],e[u]);else vr(n,h);return e=o(h,
"script"),e.length>0&&oi(e,!l&&o(n,"script")),h},buildFragment:function(n,t,r,u){for(var f,e,y,l,p,a,
s=t.createDocumentFragment(),v=[],c=0,w=n.length;c<w;c++)if(f=n[c],f||f===0)if(i.type(f)==="object")
i.merge(v,f.nodeType?[f]:f);else if(af.test(f)){for(e=e||s.appendChild(t.createElement("div")),y=(cr.
exec(f)||["",""])[1].toLowerCase(),l=h[y]||h._default,e.innerHTML=l[1]+f.replace(hr,"<$1><\/$2>")+l[
2],a=l[0];a--;)e=e.lastChild;i.merge(v,e.childNodes);e=s.firstChild;e.textContent=""}else v.push(t.createTextNode(
f));for(s.textContent="",c=0;f=v[c++];)if((!u||i.inArray(f,u)===-1)&&(p=i.contains(f.ownerDocument,f),
e=o(s.appendChild(f),"script"),p&&oi(e),r))for(a=0;f=e[a++];)lr.test(f.type||"")&&r.push(f);return s}
,cleanData:function(n){for(var o,t,s,f,u,h,l=i.event.special,c=0;(t=n[c])!==undefined;c++){if(i.acceptData(
t)&&(u=t[r.expando],u&&(o=r.cache[u]))){if(s=Object.keys(o.events||{}),s.length)for(h=0;(f=s[h])!==undefined;
h++)l[f]?i.event.remove(t,f):i.removeEvent(t,f,o.handle);r.cache[u]&&delete r.cache[u]}delete e.cache[
t[e.expando]]}}});i.fn.extend({text:function(n){return l(this,function(n){return n===undefined?i.text(
this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.
textContent=n)})},null,n,arguments.length)},append:function(){return this.domManip(arguments,function(
n){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=ar(this,n);t.appendChild(n)}})}
,prepend:function(){return this.domManip(arguments,function(n){if(this.nodeType===1||this.nodeType===
11||this.nodeType===9){var t=ar(this,n);t.insertBefore(n,t.firstChild)}})},before:function(){return this.
domManip(arguments,function(n){this.parentNode&&this.parentNode.insertBefore(n,this)})},after:function(
){return this.domManip(arguments,function(n){this.parentNode&&this.parentNode.insertBefore(n,this.nextSibling)}
)},remove:function(n,t){for(var r,f=n?i.filter(n,this):this,u=0;(r=f[u])!=null;u++)t||r.nodeType!==1||
i.cleanData(o(r)),r.parentNode&&(t&&i.contains(r.ownerDocument,r)&&oi(o(r,"script")),r.parentNode.removeChild(
r));return this},empty:function(){for(var n,t=0;(n=this[t])!=null;t++)n.nodeType===1&&(i.cleanData(o(
n,!1)),n.textContent="");return this},clone:function(n,t){return n=n==null?!1:n,t=t==null?n:t,this.map(
function(){return i.clone(this,n,t)})},html:function(n){return l(this,function(n){var t=this[0]||{},
r=0,u=this.length;if(n===undefined&&t.nodeType===1)return t.innerHTML;if(typeof n=="string"&&!vf.test(
n)&&!h[(cr.exec(n)||["",""])[1].toLowerCase()]){n=n.replace(hr,"<$1><\/$2>");try{for(;r<u;r++)t=this[
r]||{},t.nodeType===1&&(i.cleanData(o(t,!1)),t.innerHTML=n);t=0}catch(f){}}t&&this.empty().append(n)}
,null,n,arguments.length)},replaceWith:function(){var n=arguments[0];return this.domManip(arguments,
function(t){n=this.parentNode;i.cleanData(o(this));n&&n.replaceChild(t,this)}),n&&(n.length||n.nodeType)
?this:this.remove()},detach:function(n){return this.remove(n,!0)},domManip:function(n,t){n=wi.apply(
[],n);var h,v,s,c,u,y,e=0,l=this.length,w=this,b=l-1,a=n[0],p=i.isFunction(a);if(p||l>1&&typeof a=="string"&&
!f.checkClone&&yf.test(a))return this.each(function(i){var r=w.eq(i);p&&(n[0]=a.call(this,i,r.html()));
r.domManip(n,t)});if(l&&(h=i.buildFragment(n,this[0].ownerDocument,!1,this),v=h.firstChild,h.childNodes.
length===1&&(h=v),v)){for(s=i.map(o(h,"script"),bf),c=s.length;e<l;e++)u=h,e!==b&&(u=i.clone(u,!0,!0),
c&&i.merge(s,o(u,"script"))),t.call(this[e],u,e);if(c)for(y=s[s.length-1].ownerDocument,i.map(s,kf),
e=0;e<c;e++)u=s[e],lr.test(u.type||"")&&!r.access(u,"globalEval")&&i.contains(y,u)&&(u.src?i._evalUrl&&
i._evalUrl(u.src):i.globalEval(u.textContent.replace(wf,"")))}return this}});i.each({appendTo:"append",
prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(n,t)
{i.fn[n]=function(n){for(var u,f=[],e=i(n),o=e.length-1,r=0;r<=o;r++)u=r===o?this:this.clone(!0),i(e[
r])[t](u),ii.apply(f,u.get());return this.pushStack(f)}});si={};var wr=/^margin/,hi=new RegExp("^("+
lt+")(?!px)[a-z%]+$","i"),yt=function(n){return n.ownerDocument.defaultView.getComputedStyle(n,null)}
;(function(){function h(){t.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";
e.appendChild(r);var i=n.getComputedStyle(t,null);s=i.top!=="1%";o=i.width==="4px";e.removeChild(r)}
var s,o,c="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
e=u.documentElement,r=u.createElement("div"),t=u.createElement("div");t.style.backgroundClip="content-box";
t.cloneNode(!0).style.backgroundClip="";f.clearCloneStyle=t.style.backgroundClip==="content-box";r.style.
cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";r.appendChild(
t);n.getComputedStyle&&i.extend(f,{pixelPosition:function(){return h(),s},boxSizingReliable:function(
){return o==null&&h(),o},reliableMarginRight:function(){var f,i=t.appendChild(u.createElement("div"));
return i.style.cssText=t.style.cssText=c,i.style.marginRight=i.style.width="0",t.style.width="1px",e.
appendChild(r),f=!parseFloat(n.getComputedStyle(i,null).marginRight),e.removeChild(r),t.innerHTML="",
f}})})();i.swap=function(n,t,i,r){var f,u,e={};for(u in t)e[u]=n.style[u],n.style[u]=t[u];f=i.apply(
n,r||[]);for(u in t)n.style[u]=e[u];return f};var gf=/^(none|table(?!-c[ea]).+)/,ne=new RegExp("^("+
lt+")(.*)$","i"),te=new RegExp("^([+-])=("+lt+")","i"),ie={position:"absolute",visibility:"hidden",display:
"block"},kr={letterSpacing:0,fontWeight:400},dr=["Webkit","O","Moz","ms"];i.extend({cssHooks:{opacity:
{get:function(n,t){if(t){var i=rt(n,"opacity");return i===""?"1":i}}}},cssNumber:{columnCount:!0,fillOpacity:
!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:
{float:"cssFloat"},style:function(n,t,r,u){if(n&&n.nodeType!==3&&n.nodeType!==8&&n.style){var o,c,e,
s=i.camelCase(t),h=n.style;if(t=i.cssProps[s]||(i.cssProps[s]=gr(h,s)),e=i.cssHooks[t]||i.cssHooks[s],
r!==undefined){if(c=typeof r,c==="string"&&(o=te.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(i.css(n,t)),c=
"number"),r==null||r!==r)return;c!=="number"||i.cssNumber[s]||(r+="px");f.clearCloneStyle||r!==""||t.
indexOf("background")!==0||(h[t]="inherit");e&&"set"in e&&(r=e.set(n,r,u))===undefined||(h[t]="",h[t]=
r)}else return e&&"get"in e&&(o=e.get(n,!1,u))!==undefined?o:h[t]}},css:function(n,t,r,u){var f,s,e,
o=i.camelCase(t);return(t=i.cssProps[o]||(i.cssProps[o]=gr(n.style,o)),e=i.cssHooks[t]||i.cssHooks[o],
e&&"get"in e&&(f=e.get(n,!0,r)),f===undefined&&(f=rt(n,t,u)),f==="normal"&&t in kr&&(f=kr[t]),r===""||
r)?(s=parseFloat(f),r===!0||i.isNumeric(s)?s||0:f):f}});i.each(["height","width"],function(n,t){i.cssHooks[
t]={get:function(n,r,u){if(r)return n.offsetWidth===0&&gf.test(i.css(n,"display"))?i.swap(n,ie,function(
){return iu(n,t,u)}):iu(n,t,u)},set:function(n,r,u){var f=u&&yt(n);return nu(n,r,u?tu(n,t,u,i.css(n,
"boxSizing",!1,f)==="border-box",f):0)}}});i.cssHooks.marginRight=br(f.reliableMarginRight,function(
n,t){if(t)return i.swap(n,{display:"inline-block"},rt,[n,"marginRight"])});i.each({margin:"",padding:
"",border:"Width"},function(n,t){i.cssHooks[n+t]={expand:function(i){for(var r=0,f={},u=typeof i=="string"?
i.split(" "):[i];r<4;r++)f[n+w[r]+t]=u[r]||u[r-2]||u[0];return f}};wr.test(n)||(i.cssHooks[n+t].set=
nu)});i.fn.extend({css:function(n,t){return l(this,function(n,t,r){var f,e,o={},u=0;if(i.isArray(t))
{for(f=yt(n),e=t.length;u<e;u++)o[t[u]]=i.css(n,t[u],!1,f);return o}return r!==undefined?i.style(n,t,
r):i.css(n,t)},n,t,arguments.length>1)},show:function(){return ru(this,!0)},hide:function(){return ru(
this)},toggle:function(n){return typeof n=="boolean"?n?this.show():this.hide():this.each(function(){
it(this)?i(this).show():i(this).hide()})}});i.Tween=s;s.prototype={constructor:s,init:function(n,t,r,
u,f,e){this.elem=n;this.prop=r;this.easing=f||"swing";this.options=t;this.start=this.now=this.cur();
this.end=u;this.unit=e||(i.cssNumber[r]?"":"px")},cur:function(){var n=s.propHooks[this.prop];return n&&
n.get?n.get(this):s.propHooks._default.get(this)},run:function(n){var t,r=s.propHooks[this.prop];return this.
pos=this.options.duration?t=i.easing[this.easing](n,this.options.duration*n,0,1,this.options.duration):
t=n,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,
this.now,this),r&&r.set?r.set(this):s.propHooks._default.set(this),this}};s.prototype.init.prototype=
s.prototype;s.propHooks={_default:{get:function(n){var t;return n.elem[n.prop]!=null&&(!n.elem.style||
n.elem.style[n.prop]==null)?n.elem[n.prop]:(t=i.css(n.elem,n.prop,""),!t||t==="auto"?0:t)},set:function(
n){i.fx.step[n.prop]?i.fx.step[n.prop](n):n.elem.style&&(n.elem.style[i.cssProps[n.prop]]!=null||i.cssHooks[
n.prop])?i.style(n.elem,n.prop,n.now+n.unit):n.elem[n.prop]=n.now}}};s.propHooks.scrollTop=s.propHooks.
scrollLeft={set:function(n){n.elem.nodeType&&n.elem.parentNode&&(n.elem[n.prop]=n.now)}};i.easing={linear:
function(n){return n},swing:function(n){return.5-Math.cos(n*Math.PI)/2}};i.fx=s.prototype.init;i.fx.
step={};var nt,pt,re=/^(?:toggle|show|hide)$/,uu=new RegExp("^(?:([+-])=|)("+lt+")([a-z%]*)$","i"),ue=
/queueHooks$/,wt=[fe],ut={"*":[function(n,t){var f=this.createTween(n,t),s=f.cur(),u=uu.exec(t),e=u&&
u[3]||(i.cssNumber[n]?"":"px"),r=(i.cssNumber[n]||e!=="px"&&+s)&&uu.exec(i.css(f.elem,n)),o=1,h=20;if(
r&&r[3]!==e){e=e||r[3];u=u||[];r=+s||1;do o=o||".5",r=r/o,i.style(f.elem,n,r+e);while(o!==(o=f.cur()/
s)&&o!==1&&--h)}return u&&(r=f.start=+r||+s||0,f.unit=e,f.end=u[1]?r+(u[1]+1)*u[2]:+u[2]),f}]};i.Animation=
i.extend(ou,{tweener:function(n,t){i.isFunction(n)?(t=n,n=["*"]):n=n.split(" ");for(var r,u=0,f=n.length;
u<f;u++)r=n[u],ut[r]=ut[r]||[],ut[r].unshift(t)},prefilter:function(n,t){t?wt.unshift(n):wt.push(n)}
});i.speed=function(n,t,r){var u=n&&typeof n=="object"?i.extend({},n):{complete:r||!r&&t||i.isFunction(
n)&&n,duration:n,easing:r&&t||t&&!i.isFunction(t)&&t};return u.duration=i.fx.off?0:typeof u.duration==
"number"?u.duration:u.duration in i.fx.speeds?i.fx.speeds[u.duration]:i.fx.speeds._default,(u.queue==
null||u.queue===!0)&&(u.queue="fx"),u.old=u.complete,u.complete=function(){i.isFunction(u.old)&&u.old.
call(this);u.queue&&i.dequeue(this,u.queue)},u};i.fn.extend({fadeTo:function(n,t,i,r){return this.filter(
it).css("opacity",0).show().end().animate({opacity:t},n,i,r)},animate:function(n,t,u,f){var s=i.isEmptyObject(
n),o=i.speed(t,u,f),e=function(){var t=ou(this,i.extend({},n),o);(s||r.get(this,"finish"))&&t.stop(!0)}
;return e.finish=e,s||o.queue===!1?this.each(e):this.queue(o.queue,e)},stop:function(n,t,u){var f=function(
n){var t=n.stop;delete n.stop;t(u)};return typeof n!="string"&&(u=t,t=n,n=undefined),t&&n!==!1&&this.
queue(n||"fx",[]),this.each(function(){var s=!0,t=n!=null&&n+"queueHooks",o=i.timers,e=r.get(this);if(
t)e[t]&&e[t].stop&&f(e[t]);else for(t in e)e[t]&&e[t].stop&&ue.test(t)&&f(e[t]);for(t=o.length;t--;)
o[t].elem===this&&(n==null||o[t].queue===n)&&(o[t].anim.stop(u),s=!1,o.splice(t,1));(s||!u)&&i.dequeue(
this,n)})},finish:function(n){return n!==!1&&(n=n||"fx"),this.each(function(){var t,e=r.get(this),u=
e[n+"queue"],o=e[n+"queueHooks"],f=i.timers,s=u?u.length:0;for(e.finish=!0,i.queue(this,n,[]),o&&o.stop&&
o.stop.call(this,!0),t=f.length;t--;)f[t].elem===this&&f[t].queue===n&&(f[t].anim.stop(!0),f.splice(
t,1));for(t=0;t<s;t++)u[t]&&u[t].finish&&u[t].finish.call(this);delete e.finish})}});i.each(["toggle",
"show","hide"],function(n,t){var r=i.fn[t];i.fn[t]=function(n,i,u){return n==null||typeof n=="boolean"?
r.apply(this,arguments):this.animate(bt(t,!0),n,i,u)}});i.each({slideDown:bt("show"),slideUp:bt("hide"),
slideToggle:bt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},
function(n,t){i.fn[n]=function(n,i,r){return this.animate(t,n,i,r)}});i.timers=[];i.fx.tick=function(
){var r,n=0,t=i.timers;for(nt=i.now();n<t.length;n++)r=t[n],r()||t[n]!==r||t.splice(n--,1);t.length||
i.fx.stop();nt=undefined};i.fx.timer=function(n){i.timers.push(n);n()?i.fx.start():i.timers.pop()};i.
fx.interval=13;i.fx.start=function(){pt||(pt=setInterval(i.fx.tick,i.fx.interval))};i.fx.stop=function(
){clearInterval(pt);pt=null};i.fx.speeds={slow:600,fast:200,_default:400};i.fn.delay=function(n,t){return n=
i.fx?i.fx.speeds[n]||n:n,t=t||"fx",this.queue(t,function(t,i){var r=setTimeout(t,n);i.stop=function(
){clearTimeout(r)}})},function(){var n=u.createElement("input"),t=u.createElement("select"),i=t.appendChild(
u.createElement("option"));n.type="checkbox";f.checkOn=n.value!=="";f.optSelected=i.selected;t.disabled=
!0;f.optDisabled=!i.disabled;n=u.createElement("input");n.value="t";n.type="radio";f.radioValue=n.value===
"t"}();tt=i.expr.attrHandle;i.fn.extend({attr:function(n,t){return l(this,i.attr,n,t,arguments.length>
1)},removeAttr:function(n){return this.each(function(){i.removeAttr(this,n)})}});i.extend({attr:function(
n,t,r){var u,f,e=n.nodeType;if(n&&e!==3&&e!==8&&e!==2){if(typeof n.getAttribute===d)return i.prop(n,
t,r);if(e===1&&i.isXMLDoc(n)||(t=t.toLowerCase(),u=i.attrHooks[t]||(i.expr.match.bool.test(t)?su:oe)
),r!==undefined)if(r===null)i.removeAttr(n,t);else return u&&"set"in u&&(f=u.set(n,r,t))!==undefined?
f:(n.setAttribute(t,r+""),r);else return u&&"get"in u&&(f=u.get(n,t))!==null?f:(f=i.find.attr(n,t),f==
null?undefined:f)}},removeAttr:function(n,t){var r,u,e=0,f=t&&t.match(c);if(f&&n.nodeType===1)while(
r=f[e++])u=i.propFix[r]||r,i.expr.match.bool.test(r)&&(n[u]=!1),n.removeAttribute(r)},attrHooks:{type:
{set:function(n,t){if(!f.radioValue&&t==="radio"&&i.nodeName(n,"input")){var r=n.value;return n.setAttribute(
"type",t),r&&(n.value=r),t}}}}});su={set:function(n,t,r){return t===!1?i.removeAttr(n,r):n.setAttribute(
r,r),r}};i.each(i.expr.match.bool.source.match(/\w+/g),function(n,t){var r=tt[t]||i.find.attr;tt[t]=
function(n,t,i){var u,f;return i||(f=tt[t],tt[t]=u,u=r(n,t,i)!=null?t.toLowerCase():null,tt[t]=f),u}
});hu=/^(?:input|select|textarea|button)$/i;i.fn.extend({prop:function(n,t){return l(this,i.prop,n,t,
arguments.length>1)},removeProp:function(n){return this.each(function(){delete this[i.propFix[n]||n]}
)}});i.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(n,t,r){var f,u,o,e=n.nodeType;
if(n&&e!==3&&e!==8&&e!==2)return o=e!==1||!i.isXMLDoc(n),o&&(t=i.propFix[t]||t,u=i.propHooks[t]),r!==
undefined?u&&"set"in u&&(f=u.set(n,r,t))!==undefined?f:n[t]=r:u&&"get"in u&&(f=u.get(n,t))!==null?f:
n[t]},propHooks:{tabIndex:{get:function(n){return n.hasAttribute("tabindex")||hu.test(n.nodeName)||n.
href?n.tabIndex:-1}}}});f.optSelected||(i.propHooks.selected={get:function(n){var t=n.parentNode;return t&&
t.parentNode&&t.parentNode.selectedIndex,null}});i.each(["tabIndex","readOnly","maxLength","cellSpacing",
"cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){i.propFix[this.
toLowerCase()]=this});kt=/[\t\r\n\f]/g;i.fn.extend({addClass:function(n){var o,t,r,u,s,f,h=typeof n==
"string"&&n,e=0,l=this.length;if(i.isFunction(n))return this.each(function(t){i(this).addClass(n.call(
this,t,this.className))});if(h)for(o=(n||"").match(c)||[];e<l;e++)if(t=this[e],r=t.nodeType===1&&(t.
className?(" "+t.className+" ").replace(kt," "):" "),r){for(s=0;u=o[s++];)r.indexOf(" "+u+" ")<0&&(r+=
u+" ");f=i.trim(r);t.className!==f&&(t.className=f)}return this},removeClass:function(n){var o,t,r,u,
s,f,h=arguments.length===0||typeof n=="string"&&n,e=0,l=this.length;if(i.isFunction(n))return this.each(
function(t){i(this).removeClass(n.call(this,t,this.className))});if(h)for(o=(n||"").match(c)||[];e<l;
e++)if(t=this[e],r=t.nodeType===1&&(t.className?(" "+t.className+" ").replace(kt," "):""),r){for(s=0;
u=o[s++];)while(r.indexOf(" "+u+" ")>=0)r=r.replace(" "+u+" "," ");f=n?i.trim(r):"";t.className!==f&&
(t.className=f)}return this},toggleClass:function(n,t){var u=typeof n;return typeof t=="boolean"&&u===
"string"?t?this.addClass(n):this.removeClass(n):i.isFunction(n)?this.each(function(r){i(this).toggleClass(
n.call(this,r,this.className,t),t)}):this.each(function(){if(u==="string")for(var t,e=0,f=i(this),o=
n.match(c)||[];t=o[e++];)f.hasClass(t)?f.removeClass(t):f.addClass(t);else(u===d||u==="boolean")&&(this.
className&&r.set(this,"__className__",this.className),this.className=this.className||n===!1?"":r.get(
this,"__className__")||"")})},hasClass:function(n){for(var i=" "+n+" ",t=0,r=this.length;t<r;t++)if(
this[t].nodeType===1&&(" "+this[t].className+" ").replace(kt," ").indexOf(i)>=0)return!0;return!1}});
cu=/\r/g;i.fn.extend({val:function(n){var t,r,f,u=this[0];return arguments.length?(f=i.isFunction(n),
this.each(function(r){var u;this.nodeType===1&&(u=f?n.call(this,r,i(this).val()):n,u==null?u="":typeof
u=="number"?u+="":i.isArray(u)&&(u=i.map(u,function(n){return n==null?"":n+""})),t=i.valHooks[this.type]||
i.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,u,"value")!==undefined||(this.value=
u))})):u?(t=i.valHooks[u.type]||i.valHooks[u.nodeName.toLowerCase()],t&&"get"in t&&(r=t.get(u,"value"))
!==undefined)?r:(r=u.value,typeof r=="string"?r.replace(cu,""):r==null?"":r):void 0}});i.extend({valHooks:
{select:{get:function(n){for(var o,t,s=n.options,r=n.selectedIndex,u=n.type==="select-one"||r<0,h=u?
null:[],c=u?r+1:s.length,e=r<0?c:u?r:0;e<c;e++)if(t=s[e],(t.selected||e===r)&&(f.optDisabled?!t.disabled:
t.getAttribute("disabled")===null)&&(!t.parentNode.disabled||!i.nodeName(t.parentNode,"optgroup"))){
if(o=i(t).val(),u)return o;h.push(o)}return h},set:function(n,t){for(var u,r,f=n.options,e=i.makeArray(
t),o=f.length;o--;)r=f[o],(r.selected=i.inArray(i(r).val(),e)>=0)&&(u=!0);return u||(n.selectedIndex=
-1),e}}}});i.each(["radio","checkbox"],function(){i.valHooks[this]={set:function(n,t){if(i.isArray(t))
return n.checked=i.inArray(i(n).val(),t)>=0}};f.checkOn||(i.valHooks[this].get=function(n){return n.
getAttribute("value")===null?"on":n.value})});i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".
split(" "),function(n,t){i.fn[t]=function(n,i){return arguments.length>0?this.on(t,null,n,i):this.trigger(
t)}});i.fn.extend({hover:function(n,t){return this.mouseenter(n).mouseleave(t||n)},bind:function(n,t,
i){return this.on(n,null,t,i)},unbind:function(n,t){return this.off(n,null,t)},delegate:function(n,t,
i,r){return this.on(t,n,i,r)},undelegate:function(n,t,i){return arguments.length===1?this.off(n,"**"):
this.off(t,n||"**",i)}});dt=i.now();gt=/\?/;i.parseJSON=function(n){return JSON.parse(n+"")};i.parseXML=
function(n){var t,r;if(!n||typeof n!="string")return null;try{r=new DOMParser;t=r.parseFromString(n,
"text/xml")}catch(u){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&i.error("Invalid XML: "+
n),t};var b,v,se=/#.*$/,lu=/([?&])_=[^&]*/,he=/^(.*?):[ \t]*([^\r\n]*)$/mg,ce=/^(?:GET|HEAD)$/,le=/^\/\//,
au=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,vu={},ci={},yu="*/".concat("*");try{v=
location.href}catch(ge){v=u.createElement("a");v.href="";v=v.href}b=au.exec(v.toLowerCase())||[];i.extend(
{active:0,lastModified:{},etag:{},ajaxSettings:{url:v,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.
test(b[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{"*":yu,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},
contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:
"responseJSON"},converters:{"* text":String,"text html":!0,"text json":i.parseJSON,"text xml":i.parseXML},
flatOptions:{url:!0,context:!0}},ajaxSetup:function(n,t){return t?li(li(n,i.ajaxSettings),t):li(i.ajaxSettings,
n)},ajaxPrefilter:pu(vu),ajaxTransport:pu(ci),ajax:function(n,t){function w(n,t,h,c){var v,it,b,y,w,
l=t;e!==2&&(e=2,d&&clearTimeout(d),s=undefined,k=c||"",u.readyState=n>0?4:0,v=n>=200&&n<300||n===304,
h&&(y=ae(r,u,h)),y=ve(r,y,u,v),v?(r.ifModified&&(w=u.getResponseHeader("Last-Modified"),w&&(i.lastModified[
f]=w),w=u.getResponseHeader("etag"),w&&(i.etag[f]=w)),n===204||r.type==="HEAD"?l="nocontent":n===304?
l="notmodified":(l=y.state,it=y.data,b=y.error,v=!b)):(b=l,(n||!l)&&(l="error",n<0&&(n=0))),u.status=
n,u.statusText=(t||l)+"",v?nt.resolveWith(o,[it,l,u]):nt.rejectWith(o,[u,l,b]),u.statusCode(p),p=undefined,
a&&g.trigger(v?"ajaxSuccess":"ajaxError",[u,r,v?it:b]),tt.fireWith(o,[u,l]),a&&(g.trigger("ajaxComplete",
[u,r]),--i.active||i.event.trigger("ajaxStop")))}typeof n=="object"&&(t=n,n=undefined);t=t||{};var s,
f,k,y,d,h,a,l,r=i.ajaxSetup({},t),o=r.context||r,g=r.context&&(o.nodeType||o.jquery)?i(o):i.event,nt=
i.Deferred(),tt=i.Callbacks("once memory"),p=r.statusCode||{},it={},rt={},e=0,ut="canceled",u={readyState:
0,getResponseHeader:function(n){var t;if(e===2){if(!y)for(y={};t=he.exec(k);)y[t[1].toLowerCase()]=t[
2];t=y[n.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return e===2?k:null}
,setRequestHeader:function(n,t){var i=n.toLowerCase();return e||(n=rt[i]=rt[i]||n,it[n]=t),this},overrideMimeType:
function(n){return e||(r.mimeType=n),this},statusCode:function(n){var t;if(n)if(e<2)for(t in n)p[t]=
[p[t],n[t]];else u.always(n[u.status]);return this},abort:function(n){var t=n||ut;return s&&s.abort(
t),w(0,t),this}};if(nt.promise(u).complete=tt.add,u.success=u.done,u.error=u.fail,r.url=((n||r.url||
v)+"").replace(se,"").replace(le,b[1]+"//"),r.type=t.method||t.type||r.method||r.type,r.dataTypes=i.
trim(r.dataType||"*").toLowerCase().match(c)||[""],r.crossDomain==null&&(h=au.exec(r.url.toLowerCase(
)),r.crossDomain=!!(h&&(h[1]!==b[1]||h[2]!==b[2]||(h[3]||(h[1]==="http:"?"80":"443"))!==(b[3]||(b[1]===
"http:"?"80":"443"))))),r.data&&r.processData&&typeof r.data!="string"&&(r.data=i.param(r.data,r.traditional)),
wu(vu,r,t,u),e===2)return u;a=r.global;a&&i.active++==0&&i.event.trigger("ajaxStart");r.type=r.type.
toUpperCase();r.hasContent=!ce.test(r.type);f=r.url;r.hasContent||(r.data&&(f=r.url+=(gt.test(f)?"&":
"?")+r.data,delete r.data),r.cache===!1&&(r.url=lu.test(f)?f.replace(lu,"$1_="+dt++):f+(gt.test(f)?"&":
"?")+"_="+dt++));r.ifModified&&(i.lastModified[f]&&u.setRequestHeader("If-Modified-Since",i.lastModified[
f]),i.etag[f]&&u.setRequestHeader("If-None-Match",i.etag[f]));(r.data&&r.hasContent&&r.contentType!==
!1||t.contentType)&&u.setRequestHeader("Content-Type",r.contentType);u.setRequestHeader("Accept",r.dataTypes[
0]&&r.accepts[r.dataTypes[0]]?r.accepts[r.dataTypes[0]]+(r.dataTypes[0]!=="*"?", "+yu+"; q=0.01":"")
:r.accepts["*"]);for(l in r.headers)u.setRequestHeader(l,r.headers[l]);if(r.beforeSend&&(r.beforeSend.
call(o,u,r)===!1||e===2))return u.abort();ut="abort";for(l in{success:1,error:1,complete:1})u[l](r[l]);
if(s=wu(ci,r,t,u),s){u.readyState=1;a&&g.trigger("ajaxSend",[u,r]);r.async&&r.timeout>0&&(d=setTimeout(
function(){u.abort("timeout")},r.timeout));try{e=1;s.send(it,w)}catch(ft){if(e<2)w(-1,ft);else throw ft;
}}else w(-1,"No Transport");return u},getJSON:function(n,t,r){return i.get(n,t,r,"json")},getScript:
function(n,t){return i.get(n,undefined,t,"script")}});i.each(["get","post"],function(n,t){i[t]=function(
n,r,u,f){return i.isFunction(r)&&(f=f||u,u=r,r=undefined),i.ajax({url:n,type:t,dataType:f,data:r,success:
u})}});i.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(
n,t){i.fn[t]=function(n){return this.on(t,n)}});i._evalUrl=function(n){return i.ajax({url:n,type:"GET",
dataType:"script",async:!1,global:!1,throws:!0})};i.fn.extend({wrapAll:function(n){var t;return i.isFunction(
n)?this.each(function(t){i(this).wrapAll(n.call(this,t))}):(this[0]&&(t=i(n,this[0].ownerDocument).eq(
0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var n=this;n.firstElementChild;
)n=n.firstElementChild;return n}).append(this)),this)},wrapInner:function(n){return i.isFunction(n)?
this.each(function(t){i(this).wrapInner(n.call(this,t))}):this.each(function(){var t=i(this),r=t.contents(
);r.length?r.wrapAll(n):t.append(n)})},wrap:function(n){var t=i.isFunction(n);return this.each(function(
r){i(this).wrapAll(t?n.call(this,r):n)})},unwrap:function(){return this.parent().each(function(){i.nodeName(
this,"body")||i(this).replaceWith(this.childNodes)}).end()}});i.expr.filters.hidden=function(n){return n.
offsetWidth<=0&&n.offsetHeight<=0};i.expr.filters.visible=function(n){return!i.expr.filters.hidden(n)}
;var ye=/%20/g,pe=/\[\]$/,bu=/\r?\n/g,we=/^(?:submit|button|image|reset|file)$/i,be=/^(?:input|select|textarea|keygen)/i;
i.param=function(n,t){var r,u=[],f=function(n,t){t=i.isFunction(t)?t():t==null?"":t;u[u.length]=encodeURIComponent(
n)+"="+encodeURIComponent(t)};if(t===undefined&&(t=i.ajaxSettings&&i.ajaxSettings.traditional),i.isArray(
n)||n.jquery&&!i.isPlainObject(n))i.each(n,function(){f(this.name,this.value)});else for(r in n)ai(r,
n[r],t,f);return u.join("&").replace(ye,"+")};i.fn.extend({serialize:function(){return i.param(this.
serializeArray())},serializeArray:function(){return this.map(function(){var n=i.prop(this,"elements");
return n?i.makeArray(n):this}).filter(function(){var n=this.type;return this.name&&!i(this).is(":disabled")&&
be.test(this.nodeName)&&!we.test(n)&&(this.checked||!fr.test(n))}).map(function(n,t){var r=i(this).val(
);return r==null?null:i.isArray(r)?i.map(r,function(n){return{name:t.name,value:n.replace(bu,"\r\n")}}
):{name:t.name,value:r.replace(bu,"\r\n")}}).get()}});i.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}
catch(n){}};var ke=0,ni={},de={0:200,1223:204},ft=i.ajaxSettings.xhr();if(n.ActiveXObject)i(n).on("unload",
function(){for(var n in ni)ni[n]()});return f.cors=!!ft&&"withCredentials"in ft,f.ajax=ft=!!ft,i.ajaxTransport(
function(n){var t;if(f.cors||ft&&!n.crossDomain)return{send:function(i,r){var f,u=n.xhr(),e=++ke;if(
u.open(n.type,n.url,n.async,n.username,n.password),n.xhrFields)for(f in n.xhrFields)u[f]=n.xhrFields[
f];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType);n.crossDomain||i["X-Requested-With"]||
(i["X-Requested-With"]="XMLHttpRequest");for(f in i)u.setRequestHeader(f,i[f]);t=function(n){return function(
){t&&(delete ni[e],t=u.onload=u.onerror=null,n==="abort"?u.abort():n==="error"?r(u.status,u.statusText):
r(de[u.status]||u.status,u.statusText,typeof u.responseText=="string"?{text:u.responseText}:undefined,
u.getAllResponseHeaders()))}};u.onload=t();u.onerror=t("error");t=ni[e]=t("abort");u.send(n.hasContent&&
n.data||null)},abort:function(){t&&t()}}}),i.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
contents:{script:/(?:java|ecma)script/},converters:{"text script":function(n){return i.globalEval(n),
n}}}),i.ajaxPrefilter("script",function(n){n.cache===undefined&&(n.cache=!1);n.crossDomain&&(n.type=
"GET")}),i.ajaxTransport("script",function(n){if(n.crossDomain){var r,t;return{send:function(f,e){r=
i("<script>").prop({async:!0,charset:n.scriptCharset,src:n.url}).on("load error",t=function(n){r.remove(
);t=null;n&&e(n.type==="error"?404:200,n.type)});u.head.appendChild(r[0])},abort:function(){t&&t()}}}
}),vi=[],ti=/(=)\?(?=&|$)|\?\?/,i.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var n=vi.pop(
)||i.expando+"_"+dt++;return this[n]=!0,n}}),i.ajaxPrefilter("json jsonp",function(t,r,u){var f,o,e,
s=t.jsonp!==!1&&(ti.test(t.url)?"url":typeof t.data=="string"&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&
ti.test(t.data)&&"data");if(s||t.dataTypes[0]==="jsonp")return f=t.jsonpCallback=i.isFunction(t.jsonpCallback)?
t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(ti,"$1"+f):t.jsonp!==!1&&(t.url+=(gt.test(t.url)?
"&":"?")+t.jsonp+"="+f),t.converters["script json"]=function(){return e||i.error(f+" was not called"),
e[0]},t.dataTypes[0]="json",o=n[f],n[f]=function(){e=arguments},u.always(function(){n[f]=o;t[f]&&(t.
jsonpCallback=r.jsonpCallback,vi.push(f));e&&i.isFunction(o)&&o(e[0]);e=o=undefined}),"script"}),i.parseHTML=
function(n,t,r){if(!n||typeof n!="string")return null;typeof t=="boolean"&&(r=t,t=!1);t=t||u;var f=di.
exec(n),e=!r&&[];return f?[t.createElement(f[1])]:(f=i.buildFragment([n],t,e),e&&e.length&&i(e).remove(
),i.merge([],f.childNodes))},yi=i.fn.load,i.fn.load=function(n,t,r){if(typeof n!="string"&&yi)return yi.
apply(this,arguments);var u,o,s,f=this,e=n.indexOf(" ");return e>=0&&(u=n.slice(e),n=n.slice(0,e)),i.
isFunction(t)?(r=t,t=undefined):t&&typeof t=="object"&&(o="POST"),f.length>0&&i.ajax({url:n,type:o,dataType:
"html",data:t}).done(function(n){s=arguments;f.html(u?i("<div>").append(i.parseHTML(n)).find(u):n)}).
complete(r&&function(n,t){f.each(r,s||[n.responseText,t,n])}),this},i.expr.filters.animated=function(
n){return i.grep(i.timers,function(t){return n===t.elem}).length},pi=n.document.documentElement,i.offset=
{setOffset:function(n,t,r){var e,o,s,h,u,c,v,l=i.css(n,"position"),a=i(n),f={};l==="static"&&(n.style.
position="relative");u=a.offset();s=i.css(n,"top");c=i.css(n,"left");v=(l==="absolute"||l==="fixed")
&&(s+c).indexOf("auto")>-1;v?(e=a.position(),h=e.top,o=e.left):(h=parseFloat(s)||0,o=parseFloat(c)||
0);i.isFunction(t)&&(t=t.call(n,r,u));t.top!=null&&(f.top=t.top-u.top+h);t.left!=null&&(f.left=t.left-
u.left+o);"using"in t?t.using.call(n,f):a.css(f)}},i.fn.extend({offset:function(n){if(arguments.length)
return n===undefined?this:this.each(function(t){i.offset.setOffset(this,n,t)});var r,f,t=this[0],u={
top:0,left:0},e=t&&t.ownerDocument;if(e)return(r=e.documentElement,!i.contains(r,t))?u:(typeof t.getBoundingClientRect!==
d&&(u=t.getBoundingClientRect()),f=ku(e),{top:u.top+f.pageYOffset-r.clientTop,left:u.left+f.pageXOffset-
r.clientLeft})},position:function(){if(this[0]){var n,r,u=this[0],t={top:0,left:0};return i.css(u,"position")===
"fixed"?r=u.getBoundingClientRect():(n=this.offsetParent(),r=this.offset(),i.nodeName(n[0],"html")||
(t=n.offset()),t.top+=i.css(n[0],"borderTopWidth",!0),t.left+=i.css(n[0],"borderLeftWidth",!0)),{top:
r.top-t.top-i.css(u,"marginTop",!0),left:r.left-t.left-i.css(u,"marginLeft",!0)}}},offsetParent:function(
){return this.map(function(){for(var n=this.offsetParent||pi;n&&!i.nodeName(n,"html")&&i.css(n,"position")===
"static";)n=n.offsetParent;return n||pi})}}),i.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},
function(t,r){var u="pageYOffset"===r;i.fn[t]=function(i){return l(this,function(t,i,f){var e=ku(t);
if(f===undefined)return e?e[r]:t[i];e?e.scrollTo(u?n.pageXOffset:f,u?f:n.pageYOffset):t[i]=f},t,i,arguments.
length,null)}}),i.each(["top","left"],function(n,t){i.cssHooks[t]=br(f.pixelPosition,function(n,r){if(
r)return r=rt(n,t),hi.test(r)?i(n).position()[t]+"px":r})}),i.each({Height:"height",Width:"width"},function(
n,t){i.each({padding:"inner"+n,content:t,"":"outer"+n},function(r,u){i.fn[u]=function(u,f){var e=arguments.
length&&(r||typeof u!="boolean"),o=r||(u===!0||f===!0?"margin":"border");return l(this,function(t,r,
u){var f;return i.isWindow(t)?t.document.documentElement["client"+n]:t.nodeType===9?(f=t.documentElement,
Math.max(t.body["scroll"+n],f["scroll"+n],t.body["offset"+n],f["offset"+n],f["client"+n])):u===undefined?
i.css(t,r,o):i.style(t,r,u,o)},t,e?u:undefined,e,null)}})}),i.fn.size=function(){return this.length}
,i.fn.andSelf=i.fn.addBack,typeof define=="function"&&define.amd&&define("jquery",[],function(){return i}
),du=n.jQuery,gu=n.$,i.noConflict=function(t){return n.$===i&&(n.$=gu),t&&n.jQuery===i&&(n.jQuery=du),
i},typeof t===d&&(n.jQuery=n.$=i),i});
/*!
 * Knockout JavaScript library v3.2.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function(){var n=!0;(function(t){var r=this||eval("this"),u=r.document,e=r.navigator,i=r.jQuery,f=r.
JSON;(function(n){if(typeof require=="function"&&typeof exports=="object"&&typeof module=="object"){
var t=module.exports||exports;n(t,require)}else typeof define=="function"&&define.amd?define(["exports",
"require"],n):n(r.ko={})})(function(o,s){function w(n,t){var i=n===null||typeof n in tt;return i?n===
t:!1}function it(n,i){var r;return function(){r||(r=setTimeout(function(){r=t;n()},i))}}function rt(
n,t){var i;return function(){clearTimeout(i);i=setTimeout(n,t)}}function ut(n){var t=this;return n&&
h.utils.objectForEach(n,function(n,i){var r=h.extenders[n];typeof r=="function"&&(t=r(t,i)||t)}),t}function ft(
n){h.bindingHandlers[n]={init:function(t,i,r,u,f){var e=function(){var t={};return t[n]=i(),t};return h.
bindingHandlers.event.init.call(this,t,e,r,u,f)}}}function nt(n,t,i,r){h.bindingHandlers[n]={init:function(
n,u,f,e,o){var c,s;return h.computed(function(){var l=h.utils.unwrapObservable(u()),f=!i!=!l,e=!s,a=
e||t||f!==c;a&&(e&&h.computedContext.getDependenciesCount()&&(s=h.utils.cloneNodes(h.virtualElements.
childNodes(n),!0)),f?(e||h.virtualElements.setDomNodeChildren(n,h.utils.cloneNodes(s)),h.applyBindingsToDescendants(
r?r(o,l):o,n)):h.virtualElements.emptyNode(n),c=f)},null,{disposeWhenNodeIsRemoved:n}),{controlsDescendantBindings:
!0}}};h.expressionRewriting.bindingRewriteValidators[n]=!1;h.virtualElements.allowedBindings[n]=!0}var
h=typeof o!="undefined"?o:{},tt,a,c,l,v,b,k,d,y,g,p;h.exportSymbol=function(n,t){for(var i=n.split("."),
r=h,u=0;u<i.length-1;u++)r=r[i[u]];r[i[i.length-1]]=t};h.exportProperty=function(n,t,i){n[t]=i};h.version=
"3.2.0";h.exportSymbol("version",h.version);h.utils=function(){function o(n,t){for(var i in n)n.hasOwnProperty(
i)&&t(i,n[i])}function c(n,t){if(t)for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);return n}function l(
n,t){return n.__proto__=t,n}function k(n,t){if(h.utils.tagNameLower(n)!=="input"||!n.type||t.toLowerCase(
)!="click")return!1;var i=n.type;return i=="checkbox"||i=="radio"}var a={__proto__:[]}instanceof Array,
s={},v={},y=e&&/Firefox\/2/i.test(e.userAgent)?"KeyboardEvent":"UIEvents";s[y]=["keyup","keydown","keypress"];
s.MouseEvents=["click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter",
"mouseleave"];o(s,function(n,t){if(t.length)for(var i=0,r=t.length;i<r;i++)v[t[i]]=n});var p={propertychange:
!0},n=u&&function(){for(var n=3,i=u.createElement("div"),r=i.getElementsByTagName("i");i.innerHTML="<!--[if gt IE "+
++n+"]><i><\/i><![endif]-->",r[0];);return n>4?n:t}(),w=n===6,b=n===7;return{fieldsIncludedWithJsonPost:
["authenticity_token",/^__RequestVerificationToken(_.*)?$/],arrayForEach:function(n,t){for(var i=0,r=
n.length;i<r;i++)t(n[i],i)},arrayIndexOf:function(n,t){if(typeof Array.prototype.indexOf=="function")
return Array.prototype.indexOf.call(n,t);for(var i=0,r=n.length;i<r;i++)if(n[i]===t)return i;return-1}
,arrayFirst:function(n,t,i){for(var r=0,u=n.length;r<u;r++)if(t.call(i,n[r],r))return n[r];return null}
,arrayRemoveItem:function(n,t){var i=h.utils.arrayIndexOf(n,t);i>0?n.splice(i,1):i===0&&n.shift()},arrayGetDistinctValues:
function(n){var i,t,r;for(n=n||[],i=[],t=0,r=n.length;t<r;t++)h.utils.arrayIndexOf(i,n[t])<0&&i.push(
n[t]);return i},arrayMap:function(n,t){var r,i,u;for(n=n||[],r=[],i=0,u=n.length;i<u;i++)r.push(t(n[
i],i));return r},arrayFilter:function(n,t){var r,i,u;for(n=n||[],r=[],i=0,u=n.length;i<u;i++)t(n[i],
i)&&r.push(n[i]);return r},arrayPushAll:function(n,t){if(t instanceof Array)n.push.apply(n,t);else for(
var i=0,r=t.length;i<r;i++)n.push(t[i]);return n},addOrRemoveItem:function(n,t,i){var r=h.utils.arrayIndexOf(
h.utils.peekObservable(n),t);r<0?i&&n.push(t):i||n.splice(r,1)},canSetPrototype:a,extend:c,setPrototypeOf:
l,setPrototypeOfOrExtend:a?l:c,objectForEach:o,objectMap:function(n,t){var r,i;if(!n)return n;r={};for(
i in n)n.hasOwnProperty(i)&&(r[i]=t(n[i],i,n));return r},emptyDomNode:function(n){while(n.firstChild)
h.removeNode(n.firstChild)},moveCleanedNodesToContainerElement:function(n){for(var i=h.utils.makeArray(
n),r=u.createElement("div"),t=0,f=i.length;t<f;t++)r.appendChild(h.cleanNode(i[t]));return r},cloneNodes:
function(n,t){for(var r,i=0,f=n.length,u=[];i<f;i++)r=n[i].cloneNode(!0),u.push(t?h.cleanNode(r):r);
return u},setDomNodeChildren:function(n,t){if(h.utils.emptyDomNode(n),t)for(var i=0,r=t.length;i<r;i++)
n.appendChild(t[i])},replaceDomNodes:function(n,t){var r=n.nodeType?[n]:n,f,e,i,u;if(r.length>0){for(
f=r[0],e=f.parentNode,i=0,u=t.length;i<u;i++)e.insertBefore(t[i],f);for(i=0,u=r.length;i<u;i++)h.removeNode(
r[i])}},fixUpContinuousNodeArray:function(n,t){if(n.length){for(t=t.nodeType===8&&t.parentNode||t;n.
length&&n[0].parentNode!==t;)n.shift();if(n.length>1){var i=n[0],r=n[n.length-1];for(n.length=0;i!==
r;)if(n.push(i),i=i.nextSibling,!i)return;n.push(r)}}return n},setOptionNodeSelectionState:function(
t,i){n<7?t.setAttribute("selected",i):t.selected=i},stringTrim:function(n){return n===null||n===t?"":
n.trim?n.trim():n.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},stringStartsWith:function(n,t){return(
n=n||"",t.length>n.length)?!1:n.substring(0,t.length)===t},domNodeIsContainedBy:function(n,t){if(n===
t)return!0;if(n.nodeType===11)return!1;if(t.contains)return t.contains(n.nodeType===3?n.parentNode:n);
if(t.compareDocumentPosition)return(t.compareDocumentPosition(n)&16)==16;while(n&&n!=t)n=n.parentNode;
return!!n},domNodeIsAttachedToDocument:function(n){return h.utils.domNodeIsContainedBy(n,n.ownerDocument.
documentElement)},anyDomNodeIsAttachedToDocument:function(n){return!!h.utils.arrayFirst(n,h.utils.domNodeIsAttachedToDocument)}
,tagNameLower:function(n){return n&&n.tagName&&n.tagName.toLowerCase()},registerEventHandler:function(
t,r,u){var o=n&&p[r],f,e;if(!o&&i)i(t).bind(r,u);else if(o||typeof t.addEventListener!="function")if(
typeof t.attachEvent!="undefined")f=function(n){u.call(t,n)},e="on"+r,t.attachEvent(e,f),h.utils.domNodeDisposal.
addDisposeCallback(t,function(){t.detachEvent(e,f)});else throw new Error("Browser doesn't support addEventListener or attachEvent");
else t.addEventListener(r,u,!1)},triggerEvent:function(n,t){var f,o,e;if(!(n&&n.nodeType))throw new Error(
"element must be a DOM node when calling triggerEvent");if(f=k(n,t),i&&!f)i(n).trigger(t);else if(typeof
u.createEvent=="function")if(typeof n.dispatchEvent=="function")o=v[t]||"HTMLEvents",e=u.createEvent(
o),e.initEvent(t,!0,!0,r,0,0,0,0,0,!1,!1,!1,!1,0,n),n.dispatchEvent(e);else throw new Error("The supplied element doesn't support dispatchEvent");
else if(f&&n.click)n.click();else if(typeof n.fireEvent!="undefined")n.fireEvent("on"+t);else throw new
Error("Browser doesn't support triggering events");},unwrapObservable:function(n){return h.isObservable(
n)?n():n},peekObservable:function(n){return h.isObservable(n)?n.peek():n},toggleDomNodeCssClass:function(
n,t,i){if(t){var r=/\S+/g,u=n.className.match(r)||[];h.utils.arrayForEach(t.match(r),function(n){h.utils.
addOrRemoveItem(u,n,i)});n.className=u.join(" ")}},setTextContent:function(n,i){var r=h.utils.unwrapObservable(
i),u;(r===null||r===t)&&(r="");u=h.virtualElements.firstChild(n);!u||u.nodeType!=3||h.virtualElements.
nextSibling(u)?h.virtualElements.setDomNodeChildren(n,[n.ownerDocument.createTextNode(r)]):u.data=r;
h.utils.forceRefresh(n)},setElementName:function(t,i){if(t.name=i,n<=7)try{t.mergeAttributes(u.createElement(
"<input name='"+t.name+"'/>"),!1)}catch(r){}},forceRefresh:function(t){if(n>=9){var i=t.nodeType==1?
t:t.parentNode;i.style&&(i.style.zoom=i.style.zoom)}},ensureSelectElementIsRenderedCorrectly:function(
t){if(n){var i=t.style.width;t.style.width=0;t.style.width=i}},range:function(n,t){var r,i;for(n=h.utils.
unwrapObservable(n),t=h.utils.unwrapObservable(t),r=[],i=n;i<=t;i++)r.push(i);return r},makeArray:function(
n){for(var i=[],t=0,r=n.length;t<r;t++)i.push(n[t]);return i},isIe6:w,isIe7:b,ieVersion:n,getFormFields:
function(n,t){for(var r=h.utils.makeArray(n.getElementsByTagName("input")).concat(h.utils.makeArray(
n.getElementsByTagName("textarea"))),f=typeof t=="string"?function(n){return n.name===t}:function(n)
{return t.test(n.name)},u=[],i=r.length-1;i>=0;i--)f(r[i])&&u.push(r[i]);return u},parseJson:function(
n){return typeof n=="string"&&(n=h.utils.stringTrim(n),n)?f&&f.parse?f.parse(n):new Function("return "+
n)():null},stringifyJson:function(n,t,i){if(!f||!f.stringify)throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return f.stringify(h.utils.unwrapObservable(n),t,i)},postJson:function(n,t,i){var l,s,c,f,r,a,e;i=i||
{};var v=i.params||{},y=i.includeFields||this.fieldsIncludedWithJsonPost,p=n;if(typeof n=="object"&&
h.utils.tagNameLower(n)==="form")for(l=n,p=l.action,s=y.length-1;s>=0;s--)for(c=h.utils.getFormFields(
l,y[s]),f=c.length-1;f>=0;f--)v[c[f].name]=c[f].value;t=h.utils.unwrapObservable(t);r=u.createElement(
"form");r.style.display="none";r.action=p;r.method="post";for(a in t)e=u.createElement("input"),e.type=
"hidden",e.name=a,e.value=h.utils.stringifyJson(h.utils.unwrapObservable(t[a])),r.appendChild(e);o(v,
function(n,t){var i=u.createElement("input");i.type="hidden";i.name=n;i.value=t;r.appendChild(i)});u.
body.appendChild(r);i.submitter?i.submitter(r):r.submit();setTimeout(function(){r.parentNode.removeChild(
r)},0)}}}();h.exportSymbol("utils",h.utils);h.exportSymbol("utils.arrayForEach",h.utils.arrayForEach);
h.exportSymbol("utils.arrayFirst",h.utils.arrayFirst);h.exportSymbol("utils.arrayFilter",h.utils.arrayFilter);
h.exportSymbol("utils.arrayGetDistinctValues",h.utils.arrayGetDistinctValues);h.exportSymbol("utils.arrayIndexOf",
h.utils.arrayIndexOf);h.exportSymbol("utils.arrayMap",h.utils.arrayMap);h.exportSymbol("utils.arrayPushAll",
h.utils.arrayPushAll);h.exportSymbol("utils.arrayRemoveItem",h.utils.arrayRemoveItem);h.exportSymbol(
"utils.extend",h.utils.extend);h.exportSymbol("utils.fieldsIncludedWithJsonPost",h.utils.fieldsIncludedWithJsonPost);
h.exportSymbol("utils.getFormFields",h.utils.getFormFields);h.exportSymbol("utils.peekObservable",h.
utils.peekObservable);h.exportSymbol("utils.postJson",h.utils.postJson);h.exportSymbol("utils.parseJson",
h.utils.parseJson);h.exportSymbol("utils.registerEventHandler",h.utils.registerEventHandler);h.exportSymbol(
"utils.stringifyJson",h.utils.stringifyJson);h.exportSymbol("utils.range",h.utils.range);h.exportSymbol(
"utils.toggleDomNodeCssClass",h.utils.toggleDomNodeCssClass);h.exportSymbol("utils.triggerEvent",h.utils.
triggerEvent);h.exportSymbol("utils.unwrapObservable",h.utils.unwrapObservable);h.exportSymbol("utils.objectForEach",
h.utils.objectForEach);h.exportSymbol("utils.addOrRemoveItem",h.utils.addOrRemoveItem);h.exportSymbol(
"unwrap",h.utils.unwrapObservable);Function.prototype.bind||(Function.prototype.bind=function(n){var
i=this,t=Array.prototype.slice.call(arguments),n=t.shift();return function(){return i.apply(n,t.concat(
Array.prototype.slice.call(arguments)))}});h.utils.domData=new function(){function r(r,f){var e=r[n],
o=e&&e!=="null"&&i[e];if(!o){if(!f)return t;e=r[n]="ko"+u++;i[e]={}}return i[e]}var u=0,n="__ko__"+(
new Date).getTime(),i={};return{get:function(n,i){var u=r(n,!1);return u===t?t:u[i]},set:function(n,
i,u){if(u!==t||r(n,!1)!==t){var f=r(n,!0);f[i]=u}},clear:function(t){var r=t[n];return r?(delete i[r],
t[n]=null,!0):!1},nextKey:function(){return u+++n}}};h.exportSymbol("utils.domData",h.utils.domData);
h.exportSymbol("utils.domData.clear",h.utils.domData.clear);h.utils.domNodeDisposal=new function(){function r(
i,r){var u=h.utils.domData.get(i,n);return u===t&&r&&(u=[],h.utils.domData.set(i,n,u)),u}function o(
i){h.utils.domData.set(i,n,t)}function u(n){var t=r(n,!1),i;if(t)for(t=t.slice(0),i=0;i<t.length;i++)
t[i](n);h.utils.domData.clear(n);h.utils.domNodeDisposal.cleanExternalData(n);f[n.nodeType]&&s(n)}function s(
n){for(var t,i=n.firstChild;t=i;)i=t.nextSibling,t.nodeType===8&&u(t)}var n=h.utils.domData.nextKey(
),e={1:!0,8:!0,9:!0},f={1:!0,9:!0};return{addDisposeCallback:function(n,t){if(typeof t!="function")throw new
Error("Callback must be a function");r(n,!0).push(t)},removeDisposeCallback:function(n,t){var i=r(n,
!1);i&&(h.utils.arrayRemoveItem(i,t),i.length==0&&o(n))},cleanNode:function(n){var t,i,r;if(e[n.nodeType]&&
(u(n),f[n.nodeType]))for(t=[],h.utils.arrayPushAll(t,n.getElementsByTagName("*")),i=0,r=t.length;i<r;
i++)u(t[i]);return n},removeNode:function(n){h.cleanNode(n);n.parentNode&&n.parentNode.removeChild(n)}
,cleanExternalData:function(n){i&&typeof i.cleanData=="function"&&i.cleanData([n])}}};h.cleanNode=h.
utils.domNodeDisposal.cleanNode;h.removeNode=h.utils.domNodeDisposal.removeNode;h.exportSymbol("cleanNode",
h.cleanNode);h.exportSymbol("removeNode",h.removeNode);h.exportSymbol("utils.domNodeDisposal",h.utils.
domNodeDisposal);h.exportSymbol("utils.domNodeDisposal.addDisposeCallback",h.utils.domNodeDisposal.addDisposeCallback);
h.exportSymbol("utils.domNodeDisposal.removeDisposeCallback",h.utils.domNodeDisposal.removeDisposeCallback),
function(){function n(n){var i=h.utils.stringTrim(n).toLowerCase(),t=u.createElement("div"),f=i.match(
/^<(thead|tbody|tfoot)/)&&[1,"<table>","<\/table>"]||!i.indexOf("<tr")&&[2,"<table><tbody>","<\/tbody><\/table>"]||
(!i.indexOf("<td")||!i.indexOf("<th"))&&[3,"<table><tbody><tr>","<\/tr><\/tbody><\/table>"]||[0,"",""],
e="ignored<div>"+f[1]+n+f[2]+"<\/div>";for(typeof r.innerShiv=="function"?t.appendChild(r.innerShiv(
e)):t.innerHTML=e;f[0]--;)t=t.lastChild;return h.utils.makeArray(t.lastChild.childNodes)}function f(
n){var r,t;if(i.parseHTML)return i.parseHTML(n)||[];if(r=i.clean([n]),r&&r[0]){for(t=r[0];t.parentNode&&
t.parentNode.nodeType!==11;)t=t.parentNode;t.parentNode&&t.parentNode.removeChild(t)}return r}h.utils.
parseHtmlFragment=function(t){return i?f(t):n(t)};h.utils.setHtml=function(n,r){var f,u;if(h.utils.emptyDomNode(
n),r=h.utils.unwrapObservable(r),r!==null&&r!==t)if(typeof r!="string"&&(r=r.toString()),i)i(n).html(
r);else for(f=h.utils.parseHtmlFragment(r),u=0;u<f.length;u++)n.appendChild(f[u])}}();h.exportSymbol(
"utils.parseHtmlFragment",h.utils.parseHtmlFragment);h.exportSymbol("utils.setHtml",h.utils.setHtml);
h.memoization=function(){function i(){return((1+Math.random())*4294967296|0).toString(16).substring(
1)}function u(){return i()+i()}function r(n,t){var i;if(n)if(n.nodeType==8)i=h.memoization.parseMemoText(
n.nodeValue),i!=null&&t.push({domNode:n,memoId:i});else if(n.nodeType==1)for(var u=0,f=n.childNodes,
e=f.length;u<e;u++)r(f[u],t)}var n={};return{memoize:function(t){if(typeof t!="function")throw new Error(
"You can only pass a function to ko.memoization.memoize()");var i=u();return n[i]=t,"<!--[ko_memo:"+
i+"]-->"},unmemoize:function(i,r){var u=n[i];if(u===t)throw new Error("Couldn't find any memo with ID "+
i+". Perhaps it's already been unmemoized.");try{return u.apply(null,r||[]),!0}finally{delete n[i]}}
,unmemoizeDomNodeAndDescendants:function(n,t){var f=[],u,o,i,e;for(r(n,f),u=0,o=f.length;u<o;u++)i=f[
u].domNode,e=[i],t&&h.utils.arrayPushAll(e,t),h.memoization.unmemoize(f[u].memoId,e),i.nodeValue="",
i.parentNode&&i.parentNode.removeChild(i)},parseMemoText:function(n){var t=n.match(/^\[ko_memo\:(.*?)\]$/);
return t?t[1]:null}}}();h.exportSymbol("memoization",h.memoization);h.exportSymbol("memoization.memoize",
h.memoization.memoize);h.exportSymbol("memoization.unmemoize",h.memoization.unmemoize);h.exportSymbol(
"memoization.parseMemoText",h.memoization.parseMemoText);h.exportSymbol("memoization.unmemoizeDomNodeAndDescendants",
h.memoization.unmemoizeDomNodeAndDescendants);h.extenders={throttle:function(n,t){n.throttleEvaluation=
t;var i=null;return h.dependentObservable({read:n,write:function(r){clearTimeout(i);i=setTimeout(function(
){n(r)},t)}})},rateLimit:function(n,t){var i,r,u;typeof t=="number"?i=t:(i=t.timeout,r=t.method);u=r==
"notifyWhenChangesStop"?rt:it;n.limit(function(n){return u(n,i)})},notify:function(n,t){n.equalityComparer=
t=="always"?null:w}};tt={undefined:1,boolean:1,number:1,string:1};h.exportSymbol("extenders",h.extenders);
h.subscription=function(n,t,i){this.target=n;this.callback=t;this.disposeCallback=i;this.isDisposed=
!1;h.exportProperty(this,"dispose",this.dispose)};h.subscription.prototype.dispose=function(){this.isDisposed=
!0;this.disposeCallback()};h.subscribable=function(){h.utils.setPrototypeOfOrExtend(this,h.subscribable.
fn);this._subscriptions={}};a="change";c={subscribe:function(n,t,i){var r=this,f,u;return i=i||a,f=t?
n.bind(t):n,u=new h.subscription(r,f,function(){h.utils.arrayRemoveItem(r._subscriptions[i],u);r.afterSubscriptionRemove&&
r.afterSubscriptionRemove(i)}),r.beforeSubscriptionAdd&&r.beforeSubscriptionAdd(i),r._subscriptions[
i]||(r._subscriptions[i]=[]),r._subscriptions[i].push(u),u},notifySubscribers:function(n,t){if(t=t||
a,this.hasSubscriptionsForEvent(t))try{h.dependencyDetection.begin();for(var u=this._subscriptions[t].
slice(0),r=0,i;i=u[r];++r)i.isDisposed||i.callback(n)}finally{h.dependencyDetection.end()}},limit:function(
n){var t=this,o=h.isObservable(t),r,u,i,f="beforeChange",e;t._origNotifySubscribers||(t._origNotifySubscribers=
t.notifySubscribers,t.notifySubscribers=function(n,i){i&&i!==a?i===f?t._rateLimitedBeforeChange(n):t.
_origNotifySubscribers(n,i):t._rateLimitedChange(n)});e=n(function(){o&&i===t&&(i=t());r=!1;t.isDifferent(
u,i)&&t._origNotifySubscribers(u=i)});t._rateLimitedChange=function(n){r=!0;i=n;e()};t._rateLimitedBeforeChange=
function(n){r||(u=n,t._origNotifySubscribers(n,f))}},hasSubscriptionsForEvent:function(n){return this.
_subscriptions[n]&&this._subscriptions[n].length},getSubscriptionsCount:function(){var n=0;return h.
utils.objectForEach(this._subscriptions,function(t,i){n+=i.length}),n},isDifferent:function(n,t){return!this.
equalityComparer||!this.equalityComparer(n,t)},extend:ut};h.exportProperty(c,"subscribe",c.subscribe);
h.exportProperty(c,"extend",c.extend);h.exportProperty(c,"getSubscriptionsCount",c.getSubscriptionsCount);
h.utils.canSetPrototype&&h.utils.setPrototypeOf(c,Function.prototype);h.subscribable.fn=c;h.isSubscribable=
function(n){return n!=null&&typeof n.subscribe=="function"&&typeof n.notifySubscribers=="function"};
h.exportSymbol("subscribable",h.subscribable);h.exportSymbol("isSubscribable",h.isSubscribable);h.computedContext=
h.dependencyDetection=function(){function f(){return++u}function i(i){t.push(n);n=i}function r(){n=t.
pop()}var t=[],n,u=0;return{begin:i,end:r,registerDependency:function(t){if(n){if(!h.isSubscribable(
t))throw new Error("Only subscribable things can act as dependencies");n.callback(t,t._id||(t._id=f(
)))}},ignore:function(n,t,u){try{return i(),n.apply(t,u||[])}finally{r()}},getDependenciesCount:function(
){if(n)return n.computed.getDependenciesCount()},isInitial:function(){if(n)return n.isInitial}}}();h.
exportSymbol("computedContext",h.computedContext);h.exportSymbol("computedContext.getDependenciesCount",
h.computedContext.getDependenciesCount);h.exportSymbol("computedContext.isInitial",h.computedContext.
isInitial);h.exportSymbol("computedContext.isSleeping",h.computedContext.isSleeping);h.observable=function(
t){function i(){return arguments.length>0?(i.isDifferent(r,arguments[0])&&(i.valueWillMutate(),r=arguments[
0],n&&(i._latestValue=r),i.valueHasMutated()),this):(h.dependencyDetection.registerDependency(i),r)}
var r=t;return h.subscribable.call(i),h.utils.setPrototypeOfOrExtend(i,h.observable.fn),n&&(i._latestValue=
r),i.peek=function(){return r},i.valueHasMutated=function(){i.notifySubscribers(r)},i.valueWillMutate=
function(){i.notifySubscribers(r,"beforeChange")},h.exportProperty(i,"peek",i.peek),h.exportProperty(
i,"valueHasMutated",i.valueHasMutated),h.exportProperty(i,"valueWillMutate",i.valueWillMutate),i};h.
observable.fn={equalityComparer:w};l=h.observable.protoProperty="__ko_proto__";h.observable.fn[l]=h.
observable;h.utils.canSetPrototype&&h.utils.setPrototypeOf(h.observable.fn,h.subscribable.fn);h.hasPrototype=
function(n,i){return n===null||n===t||n[l]===t?!1:n[l]===i?!0:h.hasPrototype(n[l],i)};h.isObservable=
function(n){return h.hasPrototype(n,h.observable)};h.isWriteableObservable=function(n){return typeof
n=="function"&&n[l]===h.observable?!0:typeof n=="function"&&n[l]===h.dependentObservable&&n.hasWriteFunction?
!0:!1};h.exportSymbol("observable",h.observable);h.exportSymbol("isObservable",h.isObservable);h.exportSymbol(
"isWriteableObservable",h.isWriteableObservable);h.exportSymbol("isWritableObservable",h.isWriteableObservable);
h.observableArray=function(n){if(n=n||[],typeof n!="object"||!("length"in n))throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
var t=h.observable(n);return h.utils.setPrototypeOfOrExtend(t,h.observableArray.fn),t.extend({trackArrayChanges:
!0})};h.observableArray.fn={remove:function(n){for(var u,r=this.peek(),i=[],f=typeof n=="function"&&
!h.isObservable(n)?n:function(t){return t===n},t=0;t<r.length;t++)u=r[t],f(u)&&(i.length===0&&this.valueWillMutate(
),i.push(u),r.splice(t,1),t--);return i.length&&this.valueHasMutated(),i},removeAll:function(n){if(n===
t){var i=this.peek(),r=i.slice(0);return this.valueWillMutate(),i.splice(0,i.length),this.valueHasMutated(
),r}return n?this.remove(function(t){return h.utils.arrayIndexOf(n,t)>=0}):[]},destroy:function(n){var
i=this.peek(),u=typeof n=="function"&&!h.isObservable(n)?n:function(t){return t===n},t,r;for(this.valueWillMutate(
),t=i.length-1;t>=0;t--)r=i[t],u(r)&&(i[t]._destroy=!0);this.valueHasMutated()},destroyAll:function(
n){return n===t?this.destroy(function(){return!0}):n?this.destroy(function(t){return h.utils.arrayIndexOf(
n,t)>=0}):[]},indexOf:function(n){var t=this();return h.utils.arrayIndexOf(t,n)},replace:function(n,
t){var i=this.indexOf(n);i>=0&&(this.valueWillMutate(),this.peek()[i]=t,this.valueHasMutated())}};h.
utils.arrayForEach(["pop","push","reverse","shift","sort","splice","unshift"],function(n){h.observableArray.
fn[n]=function(){var t=this.peek(),i;return this.valueWillMutate(),this.cacheDiffForKnownOperation(t,
n,arguments),i=t[n].apply(t,arguments),this.valueHasMutated(),i}});h.utils.arrayForEach(["slice"],function(
n){h.observableArray.fn[n]=function(){var t=this();return t[n].apply(t,arguments)}});h.utils.canSetPrototype&&
h.utils.setPrototypeOf(h.observableArray.fn,h.observable.fn);h.exportSymbol("observableArray",h.observableArray);
v="arrayChange";h.extenders.trackArrayChanges=function(n){function f(){var f,u;r||(r=!0,f=n.notifySubscribers,
n.notifySubscribers=function(n,t){return t&&t!==a||++i,f.apply(this,arguments)},u=[].concat(n.peek()||
[]),t=null,n.subscribe(function(r){if(r=[].concat(r||[]),n.hasSubscriptionsForEvent(v)){var f=e(u,r);
f.length&&n.notifySubscribers(f,v)}u=r;t=null;i=0}))}function e(n,r){return(!t||i>1)&&(t=h.utils.compareArrays(
n,r,{sparse:!0})),t}if(!n.cacheDiffForKnownOperation){var r=!1,t=null,i=0,u=n.subscribe;n.subscribe=
n.subscribe=function(n,t,i){return i===v&&f(),u.apply(this,arguments)};n.cacheDiffForKnownOperation=
function(n,u,f){function c(n,t,i){return l[l.length]={status:n,value:t,index:i}}var e,y;if(r&&!i){var
l=[],o=n.length,a=f.length,s=0;switch(u){case"push":s=o;case"unshift":for(e=0;e<a;e++)c("added",f[e],
s+e);break;case"pop":s=o-1;case"shift":o&&c("deleted",n[s],s);break;case"splice":var v=Math.min(Math.
max(0,f[0]<0?o+f[0]:f[0]),o),p=a===1?o:Math.min(v+(f[1]||0),o),w=v+a-2,d=Math.max(p,w),b=[],k=[];for(
e=v,y=2;e<d;++e,++y)e<p&&k.push(c("deleted",n[e],e)),e<w&&b.push(c("added",f[y],e));h.utils.findMovesInArrayComparison(
k,b);break;default:return}t=l}}}};h.computed=h.dependentObservable=function(i,r,u){function st(n,t){
a[t]||(a[t]=n.subscribe(ht),++e)}function tt(){h.utils.objectForEach(a,function(n,t){t.dispose()});a=
{}}function it(){tt();e=0;k=!0;c=!1}function ht(){var n=f.throttleEvaluation;n&&n>=0?(clearTimeout(et),
et=setTimeout(y,n)):f._evalRateLimited?f._evalRateLimited():y()}function y(i){var y,u,l,g;if(w){if(d)
throw Error("A 'pure' computed must not be called recursively");return}if(!k){if(nt&&nt()){if(!b){p(
);return}}else b=!1;if(w=!0,v)try{y={};h.dependencyDetection.begin({callback:function(n,t){y[t]||(y[
t]=1,++e)},computed:f,isInitial:t});e=0;s=o.call(r)}finally{h.dependencyDetection.end();w=!1}else try{
u=a;l=e;h.dependencyDetection.begin({callback:function(n,t){k||(l&&u[t]?(a[t]=u[t],++e,delete u[t],--l):
st(n,t))},computed:f,isInitial:d?t:!e});a={};e=0;try{g=r?o.call(r):o()}finally{h.dependencyDetection.
end();l&&h.utils.objectForEach(u,function(n,t){t.dispose()});c=!1}f.isDifferent(s,g)&&(f.notifySubscribers(
s,"beforeChange"),s=g,n&&(f._latestValue=s),i!==!0&&f.notifySubscribers(s))}finally{w=!1}e||p()}}function f(
){if(arguments.length>0){if(typeof ft=="function")ft.apply(r,arguments);else throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}return h.dependencyDetection.registerDependency(f),c&&y(!0),s}function rt(){return c&&!e&&
y(!0),s}function ut(){return c||e>0}var s,c=!0,w=!1,b=!1,k=!1,o=i,d=!1,v=!1,ot;if(o&&typeof o=="object"?
(u=o,o=u.read):(u=u||{},o||(o=u.read)),typeof o!="function")throw new Error("Pass a function that returns the value of the ko.computed");
var ft=u.write,l=u.disposeWhenNodeIsRemoved||u.disposeWhenNodeIsRemoved||null,g=u.disposeWhen||u.disposeWhen,
nt=g,p=it,a={},e=0,et=null;return r||(r=u.owner),h.subscribable.call(f),h.utils.setPrototypeOfOrExtend(
f,h.dependentObservable.fn),f.peek=rt,f.getDependenciesCount=function(){return e},f.hasWriteFunction=
typeof u.write=="function",f.dispose=function(){p()},f.isActive=ut,ot=f.limit,f.limit=function(n){ot.
call(f,n);f._evalRateLimited=function(){f._rateLimitedBeforeChange(s);c=!0;f._rateLimitedChange(f)}}
,u.pure?(d=!0,v=!0,f.beforeSubscriptionAdd=function(){v&&(v=!1,y(!0))},f.afterSubscriptionRemove=function(
){f.getSubscriptionsCount()||(tt(),v=c=!0)}):u.deferEvaluation&&(f.beforeSubscriptionAdd=function(){
rt();delete f.beforeSubscriptionAdd}),h.exportProperty(f,"peek",f.peek),h.exportProperty(f,"dispose",
f.dispose),h.exportProperty(f,"isActive",f.isActive),h.exportProperty(f,"getDependenciesCount",f.getDependenciesCount),
l&&(b=!0,l.nodeType&&(nt=function(){return!h.utils.domNodeIsAttachedToDocument(l)||g&&g()})),v||u.deferEvaluation||
y(),l&&ut()&&l.nodeType&&(p=function(){h.utils.domNodeDisposal.removeDisposeCallback(l,p);it()},h.utils.
domNodeDisposal.addDisposeCallback(l,p)),f};h.isComputed=function(n){return h.hasPrototype(n,h.dependentObservable)}
;b=h.observable.protoProperty;h.dependentObservable[b]=h.observable;h.dependentObservable.fn={equalityComparer:
w};h.dependentObservable.fn[b]=h.dependentObservable;h.utils.canSetPrototype&&h.utils.setPrototypeOf(
h.dependentObservable.fn,h.subscribable.fn);h.exportSymbol("dependentObservable",h.dependentObservable);
h.exportSymbol("computed",h.dependentObservable);h.exportSymbol("isComputed",h.isComputed);h.pureComputed=
function(n,t){return typeof n=="function"?h.computed(n,t,{pure:!0}):(n=h.utils.extend({},n),n.pure=!0,
h.computed(n,t))};h.exportSymbol("pureComputed",h.pureComputed),function(){function i(r,f,e){var s,o;
return(e=e||new n,r=f(r),s=typeof r=="object"&&r!==null&&r!==t&&!(r instanceof Date)&&!(r instanceof
String)&&!(r instanceof Number)&&!(r instanceof Boolean),!s)?r:(o=r instanceof Array?[]:{},e.save(r,
o),u(r,function(n){var u=f(r[n]),s;switch(typeof u){case"boolean":case"number":case"string":case"function":
o[n]=u;break;case"object":case"undefined":s=e.get(u);o[n]=s!==t?s:i(u,f,e)}}),o)}function u(n,t){var
i,r;if(n instanceof Array){for(i=0;i<n.length;i++)t(i);typeof n.toJSON=="function"&&t("toJSON")}else
for(r in n)t(r)}function n(){this.keys=[];this.values=[]}var r=10;h.toJS=function(n){if(arguments.length==
0)throw new Error("When calling ko.toJS, pass the object you want to convert.");return i(n,function(
n){for(var t=0;h.isObservable(n)&&t<r;t++)n=n();return n})};h.toJSON=function(n,t,i){var r=h.toJS(n);
return h.utils.stringifyJson(r,t,i)};n.prototype={constructor:n,save:function(n,t){var i=h.utils.arrayIndexOf(
this.keys,n);i>=0?this.values[i]=t:(this.keys.push(n),this.values.push(t))},get:function(n){var i=h.
utils.arrayIndexOf(this.keys,n);return i>=0?this.values[i]:t}}}();h.exportSymbol("toJS",h.toJS);h.exportSymbol(
"toJSON",h.toJSON),function(){var n="__ko__hasDomDataOptionValue__";h.selectExtensions={readValue:function(
i){switch(h.utils.tagNameLower(i)){case"option":return i[n]===!0?h.utils.domData.get(i,h.bindingHandlers.
options.optionValueDomDataKey):h.utils.ieVersion<=7?i.getAttributeNode("value")&&i.getAttributeNode(
"value").specified?i.value:i.text:i.value;case"select":return i.selectedIndex>=0?h.selectExtensions.
readValue(i.options[i.selectedIndex]):t;default:return i.value}},writeValue:function(i,r,u){var e,f,
s,o;switch(h.utils.tagNameLower(i)){case"option":switch(typeof r){case"string":h.utils.domData.set(i,
h.bindingHandlers.options.optionValueDomDataKey,t);n in i&&delete i[n];i.value=r;break;default:h.utils.
domData.set(i,h.bindingHandlers.options.optionValueDomDataKey,r);i[n]=!0;i.value=typeof r=="number"?
r:""}break;case"select":for((r===""||r===null)&&(r=t),e=-1,f=0,s=i.options.length;f<s;++f)if(o=h.selectExtensions.
readValue(i.options[f]),o==r||o==""&&r===t){e=f;break}(u||e>=0||r===t&&i.size>1)&&(i.selectedIndex=e);
break;default:(r===null||r===t)&&(r="");i.value=r}}}}();h.exportSymbol("selectExtensions",h.selectExtensions);
h.exportSymbol("selectExtensions.readValue",h.selectExtensions.readValue);h.exportSymbol("selectExtensions.writeValue",
h.selectExtensions.writeValue);h.expressionRewriting=function(){function e(n){if(h.utils.arrayIndexOf(
u,n)>=0)return!1;var t=n.match(f);return t===null?!1:t[1]?"Object("+t[1]+")"+t[2]:n}function i(n){var
u=h.utils.stringTrim(n),l,r,i,v;u.charCodeAt(0)===123&&(u=u.slice(1,-1));var y=[],e=u.match(t),o,f,a=
0;if(e)for(e.push(","),l=0;r=e[l];++l){if(i=r.charCodeAt(0),i===44){if(a<=0){o&&y.push(f?{key:o,value:
f.join("")}:{unknown:o});o=f=a=0;continue}}else if(i===58){if(!f)continue}else if(i===47&&l&&r.length>
1)v=e[l-1].match(s),v&&!c[v[0]]&&(u=u.substr(u.indexOf(r)+1),e=u.match(t),e.push(","),l=-1,r="/");else
if(i===40||i===123||i===91)++a;else if(i===41||i===125||i===93)--a;else if(!o&&!f){o=i===34||i===39?
r.slice(1,-1):r;continue}f?f.push(r):f=[r]}return y}function l(n,t){function u(n,t){function l(i){return i&&
i.preprocess?t=i.preprocess(t,n,u):!0}var i;if(!c){if(!l(h.getBindingHandler(n)))return;r[n]&&(i=e(t))
&&f.push("'"+n+"':function(_z){"+i+"=_z}")}s&&(t="function(){return "+t+" }");o.push("'"+n+"':"+t)}t=
t||{};var o=[],f=[],s=t.valueAccessors,c=t.bindingParams,l=typeof n=="string"?i(n):n;return h.utils.
arrayForEach(l,function(n){u(n.key||n.unknown,n.value)}),f.length&&u("_ko_property_writers","{"+f.join(
",")+" }"),o.join(",")}var u=["true","false","null","undefined"],f=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
n=",\"'{}()/:[\\]",o="[^\\s:,/][^"+n+"]*[^\\s"+n+"]",t=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|"+
o+"|[^\\s]","g"),s=/[\])"'A-Za-z0-9_$]+$/,c={"in":1,"return":1,"typeof":1},r={};return{bindingRewriteValidators:
[],twoWayBindings:r,parseObjectLiteral:i,preProcessBindings:l,keyValueArrayContainsKey:function(n,t)
{for(var i=0;i<n.length;i++)if(n[i].key==t)return!0;return!1},writeValueToProperty:function(n,t,i,r,
u){if(n&&h.isObservable(n))h.isWriteableObservable(n)&&(!u||n.peek()!==r)&&n(r);else{var f=t.get("_ko_property_writers");
f&&f[i]&&f[i](r)}}}}();h.exportSymbol("expressionRewriting",h.expressionRewriting);h.exportSymbol("expressionRewriting.bindingRewriteValidators",
h.expressionRewriting.bindingRewriteValidators);h.exportSymbol("expressionRewriting.parseObjectLiteral",
h.expressionRewriting.parseObjectLiteral);h.exportSymbol("expressionRewriting.preProcessBindings",h.
expressionRewriting.preProcessBindings);h.exportSymbol("expressionRewriting._twoWayBindings",h.expressionRewriting.
twoWayBindings);h.exportSymbol("jsonExpressionRewriting",h.expressionRewriting);h.exportSymbol("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",
h.expressionRewriting.preProcessBindings),function(){function n(n){return n.nodeType==8&&r.test(t?n.
text:n.nodeValue)}function i(n){return n.nodeType==8&&o.test(t?n.text:n.nodeValue)}function f(t,r){for(
var u=t,f=1,e=[];u=u.nextSibling;){if(i(u)&&(f--,f===0))return e;e.push(u);n(u)&&f++}if(!r)throw new
Error("Cannot find closing comment tag to match: "+t.nodeValue);return null}function e(n,t){var i=f(
n,t);return i?i.length>0?i[i.length-1].nextSibling:n.nextSibling:null}function c(t){var r=t.firstChild,
u=null,f;if(r)do u?u.push(r):n(r)?(f=e(r,!0),f?r=f:u=[r]):i(r)&&(u=[r]);while(r=r.nextSibling);return u}
var t=u&&u.createComment("test").text==="<!--test-->",r=t?/^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,
o=t?/^<!--\s*\/ko\s*-->$/:/^\s*\/ko\s*$/,s={ul:!0,ol:!0};h.virtualElements={allowedBindings:{},childNodes:
function(t){return n(t)?f(t):t.childNodes},emptyNode:function(t){var r,i,u;if(n(t))for(r=h.virtualElements.
childNodes(t),i=0,u=r.length;i<u;i++)h.removeNode(r[i]);else h.utils.emptyDomNode(t)},setDomNodeChildren:
function(t,i){var u,r,f;if(n(t))for(h.virtualElements.emptyNode(t),u=t.nextSibling,r=0,f=i.length;r<
f;r++)u.parentNode.insertBefore(i[r],u);else h.utils.setDomNodeChildren(t,i)},prepend:function(t,i){
n(t)?t.parentNode.insertBefore(i,t.nextSibling):t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(
i)},insertAfter:function(t,i,r){r?n(t)?t.parentNode.insertBefore(i,r.nextSibling):r.nextSibling?t.insertBefore(
i,r.nextSibling):t.appendChild(i):h.virtualElements.prepend(t,i)},firstChild:function(t){return n(t)?
!t.nextSibling||i(t.nextSibling)?null:t.nextSibling:t.firstChild},nextSibling:function(t){return(n(t)&&
(t=e(t)),t.nextSibling&&i(t.nextSibling))?null:t.nextSibling},hasBindingValue:n,virtualNodeBindingValue:
function(n){var i=(t?n.text:n.nodeValue).match(r);return i?i[1]:null},normaliseVirtualElementDomStructure:
function(n){var t,i,u,r;if(s[h.utils.tagNameLower(n)]&&(t=n.firstChild,t))do if(t.nodeType===1&&(i=c(
t),i))for(u=t.nextSibling,r=0;r<i.length;r++)u?n.insertBefore(i[r],u):n.appendChild(i[r]);while(t=t.
nextSibling)}}}();h.exportSymbol("virtualElements",h.virtualElements);h.exportSymbol("virtualElements.allowedBindings",
h.virtualElements.allowedBindings);h.exportSymbol("virtualElements.emptyNode",h.virtualElements.emptyNode);
h.exportSymbol("virtualElements.insertAfter",h.virtualElements.insertAfter);h.exportSymbol("virtualElements.prepend",
h.virtualElements.prepend);h.exportSymbol("virtualElements.setDomNodeChildren",h.virtualElements.setDomNodeChildren),
function(){function t(n,t,r){var u=n+(r&&r.valueAccessors||"");return t[u]||(t[u]=i(n,r))}function i(
n,t){var i=h.expressionRewriting.preProcessBindings(n,t),r="with($context){with($data||{}){return{"+
i+"}}}";return new Function("$context","$element",r)}var n="data-bind";h.bindingProvider=function(){
this.bindingCache={}};h.utils.extend(h.bindingProvider.prototype,{nodeHasBindings:function(t){switch(
t.nodeType){case 1:return t.getAttribute(n)!=null||h.components.getComponentNameForNode(t);case 8:return h.
virtualElements.hasBindingValue(t);default:return!1}},getBindings:function(n,t){var i=this.getBindingsString(
n,t),r=i?this.parseBindingsString(i,t,n):null;return h.components.addBindingsForCustomElement(r,n,t,
!1)},getBindingAccessors:function(n,t){var i=this.getBindingsString(n,t),r=i?this.parseBindingsString(
i,t,n,{valueAccessors:!0}):null;return h.components.addBindingsForCustomElement(r,n,t,!0)},getBindingsString:
function(t){switch(t.nodeType){case 1:return t.getAttribute(n);case 8:return h.virtualElements.virtualNodeBindingValue(
t);default:return null}},parseBindingsString:function(n,i,r,u){try{var e=t(n,this.bindingCache,u);return e(
i,r)}catch(f){f.message="Unable to parse bindings.\nBindings value: "+n+"\nMessage: "+f.message;throw f;
}}});h.bindingProvider.instance=new h.bindingProvider}();h.exportSymbol("bindingProvider",h.bindingProvider),
function(){function v(n){return function(){return n}}function u(n){return n()}function s(n){return h.
utils.objectMap(h.dependencyDetection.ignore(n),function(t,i){return function(){return n()[i]}})}function y(
n,t,i){return typeof n=="function"?s(n.bind(null,t,i)):h.utils.objectMap(n,v)}function p(n,t){return s(
this.getBindings.bind(this,n,t))}function w(n){var t=h.virtualElements.allowedBindings[n];if(!t)throw new
Error("The binding '"+n+"' cannot be used with virtual elements");}function c(n,t,i){var r,u=h.virtualElements.
firstChild(t),f=h.bindingProvider.instance,e=f.preprocessNode;if(e){while(r=u)u=h.virtualElements.nextSibling(
r),e.call(f,r);u=h.virtualElements.firstChild(t)}while(r=u)u=h.virtualElements.nextSibling(r),l(n,r,
i)}function l(n,t,i){var u=!0,r=t.nodeType===1,f;r&&h.virtualElements.normaliseVirtualElementDomStructure(
t);f=r&&i||h.bindingProvider.instance.nodeHasBindings(t);f&&(u=a(t,null,n,i).shouldBindDescendants);
u&&!o[h.utils.tagNameLower(t)]&&c(n,t,!r)}function b(n){var i=[],r={},t=[];return h.utils.objectForEach(
n,function u(f){if(!r[f]){var e=h.getBindingHandler(f);e&&(e.after&&(t.push(f),h.utils.arrayForEach(
e.after,function(i){if(n[i])if(h.utils.arrayIndexOf(t,i)!==-1)throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+
t.join(", "));else u(i)}),t.length--),i.push({key:f,handler:e}));r[f]=!0}}),i}function a(n,i,r,e){var
v=h.utils.domData.get(n,f),o,c,l,k;if(!i){if(v)throw Error("You cannot apply bindings multiple times to the same element.");
h.utils.domData.set(n,f,!0)}if(!v&&e&&h.storedBindingContextForNode(n,r),i&&typeof i!="function")o=i
else{var y=h.bindingProvider.instance,d=y.getBindingAccessors||p,s=h.dependentObservable(function(){
return o=i?i(r,n):d.call(y,n,r),o&&r._subscribable&&r._subscribable(),o},null,{disposeWhenNodeIsRemoved:
n});o&&s.isActive()||(s=null)}if(o){l=s?function(n){return function(){return u(s()[n])}}:function(n)
{return o[n]};function a(){return h.utils.objectMap(s?s():o,u)}a.get=function(n){return o[n]&&u(l(n))}
;a.has=function(n){return n in o};k=b(o);h.utils.arrayForEach(k,function(i){var e=i.handler.init,s=i.
handler.update,u=i.key;n.nodeType===8&&w(u);try{typeof e=="function"&&h.dependencyDetection.ignore(function(
){var i=e(n,l(u),a,r.$data,r);if(i&&i.controlsDescendantBindings){if(c!==t)throw new Error("Multiple bindings ("+
c+" and "+u+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
c=u}});typeof s=="function"&&h.dependentObservable(function(){s(n,l(u),a,r.$data,r)},null,{disposeWhenNodeIsRemoved:
n})}catch(f){f.message='Unable to process binding "'+u+": "+o[u]+'"\nMessage: '+f.message;throw f;}}
)}return{shouldBindDescendants:c===t}}function n(n){return n&&n instanceof h.bindingContext?n:new h.
bindingContext(n)}var o,f,e;h.bindingHandlers={};o={script:!0};h.getBindingHandler=function(n){return h.
bindingHandlers[n]};h.bindingContext=function(n,i,r,u){function s(){var o=l?n():n,t=h.utils.unwrapObservable(
o);return i?(i._subscribable&&i._subscribable(),h.utils.extend(f,i),e&&(f._subscribable=e)):(f.$parents=
[],f.$root=t,f.ko=h),f.$rawData=o,f.$data=t,r&&(f[r]=t),u&&u(f,i,t),f.$data}function c(){return o&&!h.
utils.anyDomNodeIsAttachedToDocument(o)}var f=this,l=typeof n=="function"&&!h.isObservable(n),o,e=h.
dependentObservable(s,null,{disposeWhen:c,disposeWhenNodeIsRemoved:!0});e.isActive()&&(f._subscribable=
e,e.equalityComparer=null,o=[],e._addNode=function(n){o.push(n);h.utils.domNodeDisposal.addDisposeCallback(
n,function(n){h.utils.arrayRemoveItem(o,n);o.length||(e.dispose(),f._subscribable=e=t)})})};h.bindingContext.
prototype.createChildContext=function(n,t,i){return new h.bindingContext(n,this,t,function(n,t){n.$parentContext=
t;n.$parent=t.$data;n.$parents=(t.$parents||[]).slice(0);n.$parents.unshift(n.$parent);i&&i(n)})};h.
bindingContext.prototype.extend=function(n){return new h.bindingContext(this._subscribable||this.$data,
this,null,function(t,i){t.$rawData=i.$rawData;h.utils.extend(t,typeof n=="function"?n():n)})};f=h.utils.
domData.nextKey();e=h.utils.domData.nextKey();h.storedBindingContextForNode=function(n,t){if(arguments.
length==2)h.utils.domData.set(n,e,t),t._subscribable&&t._subscribable._addNode(n);else return h.utils.
domData.get(n,e)};h.applyBindingAccessorsToNode=function(t,i,r){return t.nodeType===1&&h.virtualElements.
normaliseVirtualElementDomStructure(t),a(t,i,n(r),!0)};h.applyBindingsToNode=function(t,i,r){var u=n(
r);return h.applyBindingAccessorsToNode(t,y(i,u,t),u)};h.applyBindingsToDescendants=function(t,i){(i.
nodeType===1||i.nodeType===8)&&c(n(t),i,!0)};h.applyBindings=function(t,u){if(!i&&r.jQuery&&(i=r.jQuery),
u&&u.nodeType!==1&&u.nodeType!==8)throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
u=u||r.document.body;l(n(t),u,!0)};h.contextFor=function(n){switch(n.nodeType){case 1:case 8:var i=h.
storedBindingContextForNode(n);if(i)return i;if(n.parentNode)return h.contextFor(n.parentNode)}return t}
;h.dataFor=function(n){var i=h.contextFor(n);return i?i.$data:t};h.exportSymbol("bindingHandlers",h.
bindingHandlers);h.exportSymbol("applyBindings",h.applyBindings);h.exportSymbol("applyBindingsToDescendants",
h.applyBindingsToDescendants);h.exportSymbol("applyBindingAccessorsToNode",h.applyBindingAccessorsToNode);
h.exportSymbol("applyBindingsToNode",h.applyBindingsToNode);h.exportSymbol("contextFor",h.contextFor);
h.exportSymbol("dataFor",h.dataFor)}(),function(n){function u(t,i){return t.hasOwnProperty(i)?t[i]:n}
function f(n,t){var f=u(i,n),o;f||(f=i[n]=new h.subscribable,e(n,function(t){r[n]=t;delete i[n];o?f.
notifySubscribers(t):setTimeout(function(){f.notifySubscribers(t)},0)}),o=!0);f.subscribe(t)}function e(
n,i){t("getConfig",[n],function(r){r?t("loadComponent",[n,r],function(n){i(n)}):i(null)})}function t(
i,r,u,f){var e,o,s,c;if(f||(f=h.components.loaders.slice(0)),e=f.shift(),e)if(o=e[i],o){if(s=!1,c=o.
apply(e,r.concat(function(n){s?u(null):n!==null?u(n):t(i,r,u,f)})),c!==n&&(s=!0,!e.suppressLoaderExceptions))
throw new Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
}else t(i,r,u,f);else u(null)}var i={},r={};h.components={get:function(n,t){var i=u(r,n);i?setTimeout(
function(){t(i)},0):f(n,t)},clearCachedDefinition:function(n){delete r[n]},_getFirstResultFromLoaders:
t};h.components.loaders=[];h.exportSymbol("components",h.components);h.exportSymbol("components.get",
h.components.get);h.exportSymbol("components.clearCachedDefinition",h.components.clearCachedDefinition)}
(),function(){function l(n,r,u,f){var o={},l=2,e=function(){--l==0&&f(o)},s=u.template,c=u.viewModel;
s?i(r,s,function(t){h.components._getFirstResultFromLoaders("loadTemplate",[n,t],function(n){o.template=
n;e()})}):e();c?i(r,c,function(i){h.components._getFirstResultFromLoaders("loadViewModel",[n,i],function(
n){o[t]=n;e()})}):e()}function a(n,t,i){var r,f;typeof t=="string"?i(h.utils.parseHtmlFragment(t)):t
instanceof Array?i(t):c(t)?i(h.utils.makeArray(t.childNodes)):t.element?(r=t.element,v(r)?i(o(r)):typeof
r=="string"?(f=u.getElementById(r),f?i(o(f)):n("Cannot find element with ID "+r)):n("Unknown element type: "+
r)):n("Unknown template value: "+t)}function e(n,i,r){if(typeof i=="function")r(function(n){return new
i(n)});else if(typeof i[t]=="function")r(i[t]);else if("instance"in i){var u=i.instance;r(function()
{return u})}else"viewModel"in i?e(n,i.viewModel,r):n("Unknown viewModel value: "+i)}function o(n){switch(
h.utils.tagNameLower(n)){case"script":return h.utils.parseHtmlFragment(n.text);case"textarea":return h.
utils.parseHtmlFragment(n.value);case"template":if(c(n.content))return h.utils.cloneNodes(n.content.
childNodes)}return h.utils.cloneNodes(n.childNodes)}function v(n){return r.HTMLElement?n instanceof HTMLElement:
n&&n.tagName&&n.nodeType===1}function c(n){return r.DocumentFragment?n instanceof DocumentFragment:n&&
n.nodeType===11}function i(n,t,i){typeof t.require=="string"?s||r.require?(s||r.require)([t.require],
i):n("Uses require, but no AMD loader is present"):i(t)}function f(n){return function(t){throw new Error(
"Component '"+n+"': "+t);}}var n={},t;h.components.register=function(t,i){if(!i)throw new Error("Invalid configuration for "+
t);if(h.components.isRegistered(t))throw new Error("Component "+t+" is already registered");n[t]=i};
h.components.isRegistered=function(t){return t in n};h.components.unregister=function(t){delete n[t];
h.components.clearCachedDefinition(t)};h.components.defaultLoader={getConfig:function(t,i){var r=n.hasOwnProperty(
t)?n[t]:null;i(r)},loadComponent:function(n,t,r){var u=f(n);i(u,t,function(t){l(n,u,t,r)})},loadTemplate:
function(n,t,i){a(f(n),t,i)},loadViewModel:function(n,t,i){e(f(n),t,i)}};t="createViewModel";h.exportSymbol(
"components.register",h.components.register);h.exportSymbol("components.isRegistered",h.components.isRegistered);
h.exportSymbol("components.unregister",h.components.unregister);h.exportSymbol("components.defaultLoader",
h.components.defaultLoader);h.components.loaders.push(h.components.defaultLoader);h.components._allRegisteredComponents=
n}(),function(){function t(t,i){var u=t.getAttribute("params");if(u){var e=n.parseBindingsString(u,i,
t,{valueAccessors:!0,bindingParams:!0}),f=h.utils.objectMap(e,function(n){return h.computed(n,null,{
disposeWhenNodeIsRemoved:t})}),r=h.utils.objectMap(f,function(n){return n.isActive()?h.computed(function(
){return h.utils.unwrapObservable(n())},null,{disposeWhenNodeIsRemoved:t}):n.peek()});return r.hasOwnProperty(
"$raw")||(r.$raw=f),r}return{$raw:{}}}h.components.getComponentNameForNode=function(n){var t=h.utils.
tagNameLower(n);return h.components.isRegistered(t)&&t};h.components.addBindingsForCustomElement=function(
n,i,r,u){var f,e;if(i.nodeType===1&&(f=h.components.getComponentNameForNode(i),f)){if(n=n||{},n.component)
throw new Error('Cannot use the "component" binding on a custom element matching a component');e={name:
f,params:t(i,r)};n.component=u?function(){return e}:e}return n};var n=new h.bindingProvider;h.utils.
ieVersion<9&&(h.components.register=function(n){return function(t){return u.createElement(t),n.apply(
this,arguments)}}(h.components.register),u.createDocumentFragment=function(n){return function(){var t=
n(),i=h.components._allRegisteredComponents;for(var r in i)i.hasOwnProperty(r)&&t.createElement(r);return t}
}(u.createDocumentFragment))}(),function(){function t(n,t,i){var r=t.template,u;if(!r)throw new Error(
"Component '"+n+"' has no template");u=h.utils.cloneNodes(r);h.virtualElements.setDomNodeChildren(i,
u)}function i(n,t,i){var r=n.createViewModel;return r?r.call(n,i,{element:t}):i}var n=0;h.bindingHandlers.
component={init:function(r,u,f,e,o){var s,c,l=function(){var n=s&&s.dispose;typeof n=="function"&&n.
call(s);c=null};return h.utils.domNodeDisposal.addDisposeCallback(r,l),h.computed(function(){var e=h.
utils.unwrapObservable(u()),f,a,v;if(typeof e=="string"?f=e:(f=h.utils.unwrapObservable(e.name),a=h.
utils.unwrapObservable(e.params)),!f)throw new Error("No component name specified");v=c=++n;h.components.
get(f,function(n){if(c===v){if(l(),!n)throw new Error("Unknown component '"+f+"'");t(f,n,r);var u=i(
n,r,a),e=o.createChildContext(u);s=u;h.applyBindingsToDescendants(e,r)}})},null,{disposeWhenNodeIsRemoved:
r}),{controlsDescendantBindings:!0}}};h.virtualElements.allowedBindings.component=!0}();k={"class":"className",
"for":"htmlFor"};h.bindingHandlers.attr={update:function(n,i){var r=h.utils.unwrapObservable(i())||{
};h.utils.objectForEach(r,function(i,r){r=h.utils.unwrapObservable(r);var u=r===!1||r===null||r===t;
u&&n.removeAttribute(i);h.utils.ieVersion<=8&&i in k?(i=k[i],u?n.removeAttribute(i):n[i]=r):u||n.setAttribute(
i,r.toString());i==="name"&&h.utils.setElementName(n,u?"":r.toString())})}},function(){h.bindingHandlers.
checked={after:["value","attr"],init:function(n,i,r){function c(){var c=n.checked,t=a?u():c,o;h.computedContext.
isInitial()||(!f||c)&&(o=h.dependencyDetection.ignore(i),e?s!==t?(c&&(h.utils.addOrRemoveItem(o,t,!0),
h.utils.addOrRemoveItem(o,s,!1)),s=t):h.utils.addOrRemoveItem(o,t,c):h.expressionRewriting.writeValueToProperty(
o,r,"checked",t,!0))}function l(){var t=h.utils.unwrapObservable(i());n.checked=e?h.utils.arrayIndexOf(
t,u())>=0:o?t:u()===t}var u=h.pureComputed(function(){return r.has("checkedValue")?h.utils.unwrapObservable(
r.get("checkedValue")):r.has("value")?h.utils.unwrapObservable(r.get("value")):n.value}),o=n.type=="checkbox",
f=n.type=="radio";if(o||f){var e=o&&h.utils.unwrapObservable(i())instanceof Array,s=e?u():t,a=f||e;f&&
!n.name&&h.bindingHandlers.uniqueName.init(n,function(){return!0});h.computed(c,null,{disposeWhenNodeIsRemoved:
n});h.utils.registerEventHandler(n,"click",c);h.computed(l,null,{disposeWhenNodeIsRemoved:n})}}};h.expressionRewriting.
twoWayBindings.checked=!0;h.bindingHandlers.checkedValue={update:function(n,t){n.value=h.utils.unwrapObservable(
t())}}}();d="__ko__cssValue";h.bindingHandlers.css={update:function(n,t){var i=h.utils.unwrapObservable(
t());typeof i=="object"?h.utils.objectForEach(i,function(t,i){i=h.utils.unwrapObservable(i);h.utils.
toggleDomNodeCssClass(n,t,i)}):(i=String(i||""),h.utils.toggleDomNodeCssClass(n,n[d],!1),n[d]=i,h.utils.
toggleDomNodeCssClass(n,i,!0))}};h.bindingHandlers.enable={update:function(n,t){var i=h.utils.unwrapObservable(
t());i&&n.disabled?n.removeAttribute("disabled"):i||n.disabled||(n.disabled=!0)}};h.bindingHandlers.
disable={update:function(n,t){h.bindingHandlers.enable.update(n,function(){return!h.utils.unwrapObservable(
t())})}};h.bindingHandlers.event={init:function(n,t,i,r,u){var f=t()||{};h.utils.objectForEach(f,function(
f){typeof f=="string"&&h.utils.registerEventHandler(n,f,function(n){var o,s=t()[f],e,c;if(s){try{e=h.
utils.makeArray(arguments);r=u.$data;e.unshift(r);o=s.apply(r,e)}finally{o!==!0&&(n.preventDefault?n.
preventDefault():n.returnValue=!1)}c=i.get(f+"Bubble")!==!1;c||(n.cancelBubble=!0,n.stopPropagation&&
n.stopPropagation())}})})}};h.bindingHandlers.foreach={makeTemplateValueAccessor:function(n){return function(
){var i=n(),t=h.utils.peekObservable(i);return!t||typeof t.length=="number"?{foreach:i,templateEngine:
h.nativeTemplateEngine.instance}:(h.utils.unwrapObservable(i),{foreach:t.data,as:t.as,includeDestroyed:
t.includeDestroyed,afterAdd:t.afterAdd,beforeRemove:t.beforeRemove,afterRender:t.afterRender,beforeMove:
t.beforeMove,afterMove:t.afterMove,templateEngine:h.nativeTemplateEngine.instance})}},init:function(
n,t){return h.bindingHandlers.template.init(n,h.bindingHandlers.foreach.makeTemplateValueAccessor(t))}
,update:function(n,t,i,r,u){return h.bindingHandlers.template.update(n,h.bindingHandlers.foreach.makeTemplateValueAccessor(
t),i,r,u)}};h.expressionRewriting.bindingRewriteValidators.foreach=!1;h.virtualElements.allowedBindings.
foreach=!0;y="__ko_hasfocusUpdating";g="__ko_hasfocusLastValue";h.bindingHandlers.hasfocus={init:function(
n,t,i){var r=function(r){var u,f,e;if(n[y]=!0,u=n.ownerDocument,"activeElement"in u){try{f=u.activeElement}
catch(o){f=u.body}r=f===n}e=t();h.expressionRewriting.writeValueToProperty(e,i,"hasfocus",r,!0);n[g]=
r;n[y]=!1},u=r.bind(null,!0),f=r.bind(null,!1);h.utils.registerEventHandler(n,"focus",u);h.utils.registerEventHandler(
n,"focusin",u);h.utils.registerEventHandler(n,"blur",f);h.utils.registerEventHandler(n,"focusout",f)}
,update:function(n,t){var i=!!h.utils.unwrapObservable(t());n[y]||n[g]===i||(i?n.focus():n.blur(),h.
dependencyDetection.ignore(h.utils.triggerEvent,null,[n,i?"focusin":"focusout"]))}};h.expressionRewriting.
twoWayBindings.hasfocus=!0;h.bindingHandlers.hasFocus=h.bindingHandlers.hasfocus;h.expressionRewriting.
twoWayBindings.hasFocus=!0;h.bindingHandlers.html={init:function(){return{controlsDescendantBindings:
!0}},update:function(n,t){h.utils.setHtml(n,t())}};nt("if");nt("ifnot",!1,!0);nt("with",!0,!1,function(
n,t){return n.createChildContext(t)});p={};h.bindingHandlers.options={init:function(n){if(h.utils.tagNameLower(
n)!=="select")throw new Error("options binding applies only to SELECT elements");while(n.length>0)n.
remove(0);return{controlsDescendantBindings:!0}},update:function(n,i,r){function a(){return h.utils.
arrayFilter(n.options,function(n){return n.selected})}function y(n,t,i){var r=typeof t;return r=="function"?
t(n):r=="string"?n[t]:i}function d(i,f,e){var o,s,l;return e.length&&(u=e[0].selected?[h.selectExtensions.
readValue(e[0])]:[],c=!0),o=n.ownerDocument.createElement("option"),i===p?(h.utils.setTextContent(o,
r.get("optionsCaption")),h.selectExtensions.writeValue(o,t)):(s=y(i,r.get("optionsValue"),i),h.selectExtensions.
writeValue(o,h.utils.unwrapObservable(s)),l=y(i,r.get("optionsText"),s),h.utils.setTextContent(o,l)),
[o]}function w(t,i){if(u.length){var r=h.utils.arrayIndexOf(u,h.selectExtensions.readValue(i[0]))>=0;
h.utils.setOptionNodeSelectionState(i[0],r);c&&!r&&h.dependencyDetection.ignore(h.utils.triggerEvent,
null,[n,"change"])}}var b=n.length==0,e=!b&&n.multiple?n.scrollTop:null,f=h.utils.unwrapObservable(i(
)),k=r.get("optionsIncludeDestroyed"),v={},o,s,u,c,l;u=n.multiple?h.utils.arrayMap(a(),h.selectExtensions.
readValue):n.selectedIndex>=0?[h.selectExtensions.readValue(n.options[n.selectedIndex])]:[];f&&(typeof
f.length=="undefined"&&(f=[f]),s=h.utils.arrayFilter(f,function(n){return k||n===t||n===null||!h.utils.
unwrapObservable(n._destroy)}),r.has("optionsCaption")&&(o=h.utils.unwrapObservable(r.get("optionsCaption")),
o!==null&&o!==t&&s.unshift(p)));c=!1;v.beforeRemove=function(t){n.removeChild(t)};l=w;r.has("optionsAfterRender")&&
(l=function(n,i){w(n,i);h.dependencyDetection.ignore(r.get("optionsAfterRender"),null,[i[0],n!==p?n:
t])});h.utils.setDomNodeChildrenFromArrayMapping(n,s,d,v,l);h.dependencyDetection.ignore(function(){
if(r.get("valueAllowUnset")&&r.has("value"))h.selectExtensions.writeValue(n,h.utils.unwrapObservable(
r.get("value")),!0);else{var t;t=n.multiple?u.length&&a().length<u.length:u.length&&n.selectedIndex>=
0?h.selectExtensions.readValue(n.options[n.selectedIndex])!==u[0]:u.length||n.selectedIndex>=0;t&&h.
utils.triggerEvent(n,"change")}});h.utils.ensureSelectElementIsRenderedCorrectly(n);e&&Math.abs(e-n.
scrollTop)>20&&(n.scrollTop=e)}};h.bindingHandlers.options.optionValueDomDataKey=h.utils.domData.nextKey(
);h.bindingHandlers.selectedOptions={after:["options","foreach"],init:function(n,t,i){h.utils.registerEventHandler(
n,"change",function(){var u=t(),r=[];h.utils.arrayForEach(n.getElementsByTagName("option"),function(
n){n.selected&&r.push(h.selectExtensions.readValue(n))});h.expressionRewriting.writeValueToProperty(
u,i,"selectedOptions",r)})},update:function(n,t){if(h.utils.tagNameLower(n)!="select")throw new Error(
"values binding applies only to SELECT elements");var i=h.utils.unwrapObservable(t());i&&typeof i.length==
"number"&&h.utils.arrayForEach(n.getElementsByTagName("option"),function(n){var t=h.utils.arrayIndexOf(
i,h.selectExtensions.readValue(n))>=0;h.utils.setOptionNodeSelectionState(n,t)})}};h.expressionRewriting.
twoWayBindings.selectedOptions=!0;h.bindingHandlers.style={update:function(n,i){var r=h.utils.unwrapObservable(
i()||{});h.utils.objectForEach(r,function(i,r){r=h.utils.unwrapObservable(r);(r===null||r===t||r===!1)&&
(r="");n.style[i]=r})}};h.bindingHandlers.submit={init:function(n,t,i,r,u){if(typeof t()!="function")
throw new Error("The value for a submit binding must be a function");h.utils.registerEventHandler(n,
"submit",function(i){var r,f=t();try{r=f.call(u.$data,n)}finally{r!==!0&&(i.preventDefault?i.preventDefault(
):i.returnValue=!1)}})}};h.bindingHandlers.text={init:function(){return{controlsDescendantBindings:!0}}
,update:function(n,t){h.utils.setTextContent(n,t())}};h.virtualElements.allowedBindings.text=!0,function(
){if(r&&r.navigator)var i=function(n){if(n)return parseFloat(n[1])},o=r.opera&&r.opera.version&&parseInt(
r.opera.version()),u=r.navigator.userAgent,s=i(u.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
c=i(u.match(/Firefox\/([^ ]*)/));if(h.utils.ieVersion<10)var f=h.utils.domData.nextKey(),e=h.utils.domData.
nextKey(),l=function(n){var t=this.activeElement,i=t&&h.utils.domData.get(t,e);i&&i(n)},a=function(n,
t){var i=n.ownerDocument;h.utils.domData.get(i,f)||(h.utils.domData.set(i,f,!0),h.utils.registerEventHandler(
i,"selectionchange",l));h.utils.domData.set(n,e,t)};h.bindingHandlers.textInput={init:function(i,r,u)
{var p=i.value,v,y,e=function(f){clearTimeout(v);y=v=t;var e=i.value;p!==e&&(n&&f&&(i._ko_textInputProcessedEvent=
f.type),p=e,h.expressionRewriting.writeValueToProperty(r(),u,"textInput",e))},l=function(t){if(!v){y=
i.value;var r=n?e.bind(i,{type:t.type}):e;v=setTimeout(r,4)}},w=function(){var n=h.utils.unwrapObservable(
r());if((n===null||n===t)&&(n=""),y!==t&&n===y){setTimeout(w,4);return}i.value!==n&&(p=n,i.value=n)}
,f=function(n,t){h.utils.registerEventHandler(i,n,t)};n&&h.bindingHandlers.textInput._forceUpdateOn?
h.utils.arrayForEach(h.bindingHandlers.textInput._forceUpdateOn,function(n){n.slice(0,5)=="after"?f(
n.slice(5),l):f(n,e)}):h.utils.ieVersion<10?(f("propertychange",function(n){n.propertyName==="value"&&
e(n)}),h.utils.ieVersion==8&&(f("keyup",e),f("keydown",e)),h.utils.ieVersion>=8&&(a(i,e),f("dragend",
l))):(f("input",e),s<5&&h.utils.tagNameLower(i)==="textarea"?(f("keydown",l),f("paste",l),f("cut",l)):
o<11?f("keydown",l):c<4&&(f("DOMAutoComplete",e),f("dragdrop",e),f("drop",e)));f("change",e);h.computed(
w,null,{disposeWhenNodeIsRemoved:i})}};h.expressionRewriting.twoWayBindings.textInput=!0;h.bindingHandlers.
textinput={preprocess:function(n,t,i){i("textInput",n)}}}();h.bindingHandlers.uniqueName={init:function(
n,t){if(t()){var i="ko_unique_"+ ++h.bindingHandlers.uniqueName.currentIndex;h.utils.setElementName(
n,i)}}};h.bindingHandlers.uniqueName.currentIndex=0;h.bindingHandlers.value={after:["options","foreach"],
init:function(n,t,i){var o,c,s;if(n.tagName.toLowerCase()=="input"&&(n.type=="checkbox"||n.type=="radio")
){h.applyBindingAccessorsToNode(n,{checkedValue:t});return}var r=["change"],u=i.get("valueUpdate"),f=
!1,e=null;u&&(typeof u=="string"&&(u=[u]),h.utils.arrayPushAll(r,u),r=h.utils.arrayGetDistinctValues(
r));o=function(){e=null;f=!1;var r=t(),u=h.selectExtensions.readValue(n);h.expressionRewriting.writeValueToProperty(
r,i,"value",u)};c=h.utils.ieVersion&&n.tagName.toLowerCase()=="input"&&n.type=="text"&&n.autocomplete!=
"off"&&(!n.form||n.form.autocomplete!="off");c&&h.utils.arrayIndexOf(r,"propertychange")==-1&&(h.utils.
registerEventHandler(n,"propertychange",function(){f=!0}),h.utils.registerEventHandler(n,"focus",function(
){f=!1}),h.utils.registerEventHandler(n,"blur",function(){f&&o()}));h.utils.arrayForEach(r,function(
t){var i=o;h.utils.stringStartsWith(t,"after")&&(i=function(){e=h.selectExtensions.readValue(n);setTimeout(
o,0)},t=t.substring(5));h.utils.registerEventHandler(n,t,i)});s=function(){var r=h.utils.unwrapObservable(
t()),c=h.selectExtensions.readValue(n),o,u,f;if(e!==null&&r===e){setTimeout(s,0);return}o=r!==c;o&&(
h.utils.tagNameLower(n)==="select"?(u=i.get("valueAllowUnset"),f=function(){h.selectExtensions.writeValue(
n,r,u)},f(),u||r===h.selectExtensions.readValue(n)?setTimeout(f,0):h.dependencyDetection.ignore(h.utils.
triggerEvent,null,[n,"change"])):h.selectExtensions.writeValue(n,r))};h.computed(s,null,{disposeWhenNodeIsRemoved:
n})},update:function(){}};h.expressionRewriting.twoWayBindings.value=!0;h.bindingHandlers.visible={update:
function(n,t){var i=h.utils.unwrapObservable(t()),r=!(n.style.display=="none");i&&!r?n.style.display=
"":!i&&r&&(n.style.display="none")}};ft("click");h.templateEngine=function(){};h.templateEngine.prototype.
renderTemplateSource=function(){throw new Error("Override renderTemplateSource");};h.templateEngine.
prototype.createJavaScriptEvaluatorBlock=function(){throw new Error("Override createJavaScriptEvaluatorBlock");
};h.templateEngine.prototype.makeTemplateSource=function(n,t){if(typeof n=="string"){t=t||u;var i=t.
getElementById(n);if(!i)throw new Error("Cannot find template with ID "+n);return new h.templateSources.
domElement(i)}if(n.nodeType==1||n.nodeType==8)return new h.templateSources.anonymousTemplate(n);throw new
Error("Unknown template type: "+n);};h.templateEngine.prototype.renderTemplate=function(n,t,i,r){var
u=this.makeTemplateSource(n,r);return this.renderTemplateSource(u,t,i)};h.templateEngine.prototype.isTemplateRewritten=
function(n,t){return this.allowTemplateRewriting===!1?!0:this.makeTemplateSource(n,t).data("isRewritten")}
;h.templateEngine.prototype.rewriteTemplate=function(n,t,i){var r=this.makeTemplateSource(n,i),u=t(r.
text());r.text(u);r.data("isRewritten",!0)};h.exportSymbol("templateEngine",h.templateEngine);h.templateRewriting=
function(){function r(n){for(var i,r,u,f=h.expressionRewriting.bindingRewriteValidators,t=0;t<n.length;
t++)if(i=n[t].key,f.hasOwnProperty(i))if(r=f[i],typeof r=="function"){if(u=r(n[t].value),u)throw new
Error(u);}else if(!r)throw new Error("This template engine does not support the '"+i+"' binding within its templates");
}function n(n,t,i,u){var f=h.expressionRewriting.parseObjectLiteral(n),e,o;return r(f),e=h.expressionRewriting.
preProcessBindings(f,{valueAccessors:!0}),o="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+
e+" } })()},'"+i.toLowerCase()+"')",u.createJavaScriptEvaluatorBlock(o)+t}var t=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
i=/<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;return{ensureTemplateIsRewritten:function(n,t,i){t.isTemplateRewritten(
n,i)||t.rewriteTemplate(n,function(n){return h.templateRewriting.memoizeBindingAttributeSyntax(n,t)}
,i)},memoizeBindingAttributeSyntax:function(r,u){return r.replace(t,function(){return n(arguments[4],
arguments[1],arguments[2],u)}).replace(i,function(){return n(arguments[1],"<!-- ko -->","#comment",u)}
)},applyMemoizedBindingsToNextSibling:function(n,t){return h.memoization.memoize(function(i,r){var u=
i.nextSibling;u&&u.nodeName.toLowerCase()===t&&h.applyBindingAccessorsToNode(u,n,r)})}}}();h.exportSymbol(
"__tr_ambtns",h.templateRewriting.applyMemoizedBindingsToNextSibling),function(){var i,n;h.templateSources=
{};h.templateSources.domElement=function(n){this.domElement=n};h.templateSources.domElement.prototype.
text=function(){var i=h.utils.tagNameLower(this.domElement),n=i==="script"?"text":i==="textarea"?"value":
"innerHTML",t;if(arguments.length==0)return this.domElement[n];t=arguments[0];n==="innerHTML"?h.utils.
setHtml(this.domElement,t):this.domElement[n]=t};i=h.utils.domData.nextKey()+"_";h.templateSources.domElement.
prototype.data=function(n){if(arguments.length===1)return h.utils.domData.get(this.domElement,i+n);h.
utils.domData.set(this.domElement,i+n,arguments[1])};n=h.utils.domData.nextKey();h.templateSources.anonymousTemplate=
function(n){this.domElement=n};h.templateSources.anonymousTemplate.prototype=new h.templateSources.domElement;
h.templateSources.anonymousTemplate.prototype.constructor=h.templateSources.anonymousTemplate;h.templateSources.
anonymousTemplate.prototype.text=function(){var i,r;if(arguments.length==0)return i=h.utils.domData.
get(this.domElement,n)||{},i.textData===t&&i.containerData&&(i.textData=i.containerData.innerHTML),i.
textData;r=arguments[0];h.utils.domData.set(this.domElement,n,{textData:r})};h.templateSources.domElement.
prototype.nodes=function(){var t,i;if(arguments.length==0)return t=h.utils.domData.get(this.domElement,
n)||{},t.containerData;i=arguments[0];h.utils.domData.set(this.domElement,n,{containerData:i})};h.exportSymbol(
"templateSources",h.templateSources);h.exportSymbol("templateSources.domElement",h.templateSources.domElement);
h.exportSymbol("templateSources.anonymousTemplate",h.templateSources.anonymousTemplate)}(),function(
){function i(n,t,i){for(var u,r=n,f=h.virtualElements.nextSibling(t);r&&(u=r)!==f;)r=h.virtualElements.
nextSibling(u),i(u,r)}function f(n,t){if(n.length){var r=n[0],u=n[n.length-1],f=r.parentNode,e=h.bindingProvider.
instance,o=e.preprocessNode;if(o){if(i(r,u,function(n,t){var f=n.previousSibling,i=o.call(e,n);i&&(n===
r&&(r=i[0]||t),n===u&&(u=i[i.length-1]||f))}),n.length=0,!r)return;r===u?n.push(r):(n.push(r,u),h.utils.
fixUpContinuousNodeArray(n,f))}i(r,u,function(n){(n.nodeType===1||n.nodeType===8)&&h.applyBindings(t,
n)});i(r,u,function(n){(n.nodeType===1||n.nodeType===8)&&h.memoization.unmemoizeDomNodeAndDescendants(
n,[t])});h.utils.fixUpContinuousNodeArray(n,f)}}function r(n){return n.nodeType?n:n.length>0?n[0]:null}
function e(t,i,u,e,o){var s,c;o=o||{};var l=t&&r(t),a=l&&l.ownerDocument,v=o.templateEngine||n;if(h.
templateRewriting.ensureTemplateIsRewritten(u,v,a),s=v.renderTemplate(u,e,o,a),typeof s.length!="number"||
s.length>0&&typeof s[0].nodeType!="number")throw new Error("Template engine must return an array of DOM nodes");
c=!1;switch(i){case"replaceChildren":h.virtualElements.setDomNodeChildren(t,s);c=!0;break;case"replaceNode":
h.utils.replaceDomNodes(t,s);c=!0;break;case"ignoreTargetNode":break;default:throw new Error("Unknown renderMode: "+
i);}return c&&(f(s,e),o.afterRender&&h.dependencyDetection.ignore(o.afterRender,null,[s,e.$data])),s}
function o(n,t,i){return h.isObservable(n)?n():typeof n=="function"?n(t,i):n}function s(n,i){var r=h.
utils.domData.get(n,u);r&&typeof r.dispose=="function"&&r.dispose();h.utils.domData.set(n,u,i&&i.isActive(
)?i:t)}var n,u;h.setTemplateEngine=function(i){if(i!=t&&!(i instanceof h.templateEngine))throw new Error(
"templateEngine must inherit from ko.templateEngine");n=i};h.renderTemplate=function(i,u,f,s,c){if(f=
f||{},(f.templateEngine||n)==t)throw new Error("Set a template engine before calling renderTemplate");
if(c=c||"replaceChildren",s){var l=r(s),a=function(){return!l||!h.utils.domNodeIsAttachedToDocument(
l)},v=l&&c=="replaceNode"?l.parentNode:l;return h.dependentObservable(function(){var n=u&&u instanceof
h.bindingContext?u:new h.bindingContext(h.utils.unwrapObservable(u)),t=o(i,n.$data,n),a=e(s,c,t,n,f);
c=="replaceNode"&&(s=a,l=r(s))},null,{disposeWhen:a,disposeWhenNodeIsRemoved:v})}return h.memoization.
memoize(function(n){h.renderTemplate(i,u,f,n,"replaceNode")})};h.renderTemplateForEach=function(n,i,
r,u,s){var c,l=function(t,i){c=s.createChildContext(t,r.as,function(n){n.$index=i});var u=o(n,t,c);return e(
null,"ignoreTargetNode",u,c,r)},a=function(n,t){f(t,c);r.afterRender&&r.afterRender(t,n)};return h.dependentObservable(
function(){var n=h.utils.unwrapObservable(i)||[],f;typeof n.length=="undefined"&&(n=[n]);f=h.utils.arrayFilter(
n,function(n){return r.includeDestroyed||n===t||n===null||!h.utils.unwrapObservable(n._destroy)});h.
dependencyDetection.ignore(h.utils.setDomNodeChildrenFromArrayMapping,null,[u,f,l,r,a])},null,{disposeWhenNodeIsRemoved:
u})};u=h.utils.domData.nextKey();h.bindingHandlers.template={init:function(n,t){var i=h.utils.unwrapObservable(
t()),r,u;return typeof i=="string"||i.name?h.virtualElements.emptyNode(n):(r=h.virtualElements.childNodes(
n),u=h.utils.moveCleanedNodesToContainerElement(r),new h.templateSources.anonymousTemplate(n).nodes(
u)),{controlsDescendantBindings:!0}},update:function(n,t,i,r,u){var l=t(),a,f=h.utils.unwrapObservable(
l),e=!0,c=null,o,v,y;typeof f=="string"?(o=l,f={}):(o=f.name,"if"in f&&(e=h.utils.unwrapObservable(f[
"if"])),e&&"ifnot"in f&&(e=!h.utils.unwrapObservable(f.ifnot)),a=h.utils.unwrapObservable(f.data));"foreach"in
f?(v=e&&f.foreach||[],c=h.renderTemplateForEach(o||n,v,f,n,u)):e?(y="data"in f?u.createChildContext(
a,f.as):u,c=h.renderTemplate(o||n,y,f,n)):h.virtualElements.emptyNode(n);s(n,c)}};h.expressionRewriting.
bindingRewriteValidators.template=function(n){var t=h.expressionRewriting.parseObjectLiteral(n);return t.
length==1&&t[0].unknown?null:h.expressionRewriting.keyValueArrayContainsKey(t,"name")?null:"This template engine does not support anonymous templates nested within its templates"}
;h.virtualElements.allowedBindings.template=!0}();h.exportSymbol("setTemplateEngine",h.setTemplateEngine);
h.exportSymbol("renderTemplate",h.renderTemplate);h.utils.findMovesInArrayComparison=function(n,t,i)
{if(n.length&&t.length)for(var o,r,f,e,u=o=0;(!i||u<i)&&(f=n[o]);++o){for(r=0;e=t[r];++r)if(f.value===
e.value){f.moved=e.index;e.moved=f.index;t.splice(r,1);u=r=0;break}u+=r}};h.utils.compareArrays=function(
){function r(r,u,f){return f=typeof f=="boolean"?{dontLimitMoves:f}:f||{},r=r||[],u=u||[],r.length<=
u.length?i(r,u,n,t,f):i(u,r,t,n,f)}function i(n,t,i,r,u){for(var p=Math.min,it=Math.max,l=[],c=n.length,
f,a=t.length,rt=a-c||1,w=c+a+1,o,v,b,k,d,g,e=0;e<=c;e++)for(v=o,l.push(o=[]),b=p(a,e+rt),k=it(0,e-1),
f=k;f<=b;f++)f?e?n[e-1]===t[f-1]?o[f]=v[f-1]:(d=v[f]||w,g=o[f-1]||w,o[f]=p(d,g)+1):o[f]=f+1:o[f]=e+1;
var s=[],y,nt=[],tt=[];for(e=c,f=a;e||f;)y=l[e][f]-1,f&&y===l[e][f-1]?nt.push(s[s.length]={status:i,
value:t[--f],index:f}):e&&y===l[e-1][f]?tt.push(s[s.length]={status:r,value:n[--e],index:e}):(--f,--e,
u.sparse||s.push({status:"retained",value:t[f]}));return h.utils.findMovesInArrayComparison(nt,tt,c*
10),s.reverse()}var n="added",t="deleted";return r}();h.exportSymbol("utils.compareArrays",h.utils.compareArrays),
function(){function i(n,i,r,u,f){var e=[],o=h.dependentObservable(function(){var t=i(r,f,h.utils.fixUpContinuousNodeArray(
e,n))||[];e.length>0&&(h.utils.replaceDomNodes(e,t),u&&h.dependencyDetection.ignore(u,null,[r,t,f]));
e.length=0;h.utils.arrayPushAll(e,t)},null,{disposeWhenNodeIsRemoved:n,disposeWhen:function(){return!h.
utils.anyDomNodeIsAttachedToDocument(e)}});return{mappedNodes:e,dependentObservable:o.isActive()?o:t}}
var n=h.utils.domData.nextKey();h.utils.setDomNodeChildrenFromArrayMapping=function(r,u,f,e,o){function ft(
n,t){s=w[t];d!==t&&(nt[n]=s);s.indexObservable(d++);h.utils.fixUpContinuousNodeArray(s.mappedNodes,r);
b.push(s);a.push(s)}function v(n,t){if(n)for(var i=0,r=t.length;i<r;i++)t[i]&&h.utils.arrayForEach(t[
i].mappedNodes,function(r){n(r,i,t[i].arrayEntry)})}var y,p,c,tt,et,l,it;u=u||[];e=e||{};var ot=h.utils.
domData.get(r,n)===t,w=h.utils.domData.get(r,n)||[],st=h.utils.arrayMap(w,function(n){return n.arrayEntry}
),ht=h.utils.compareArrays(st,u,e.dontLimitMoves),b=[],k=0,d=0,g=[],a=[],rt=[],nt=[],ut=[],s;for(c=0;
y=ht[c];c++){p=y.moved;switch(y.status){case"deleted":p===t&&(s=w[k],s.dependentObservable&&s.dependentObservable.
dispose(),g.push.apply(g,h.utils.fixUpContinuousNodeArray(s.mappedNodes,r)),e.beforeRemove&&(rt[c]=s,
a.push(s)));k++;break;case"retained":ft(c,k++);break;case"added":p!==t?ft(c,p):(s={arrayEntry:y.value,
indexObservable:h.observable(d++)},b.push(s),a.push(s),ot||(ut[c]=s))}}for(v(e.beforeMove,nt),h.utils.
arrayForEach(g,e.beforeRemove?h.cleanNode:h.removeNode),c=0,tt=h.virtualElements.firstChild(r);s=a[c];
c++){for(s.mappedNodes||h.utils.extend(s,i(r,f,s.arrayEntry,o,s.indexObservable)),it=0;l=s.mappedNodes[
it];tt=l.nextSibling,et=l,it++)l!==tt&&h.virtualElements.insertAfter(r,l,et);!s.initialized&&o&&(o(s.
arrayEntry,s.mappedNodes,s.indexObservable),s.initialized=!0)}v(e.beforeRemove,rt);v(e.afterMove,nt);
v(e.afterAdd,ut);h.utils.domData.set(r,n,b)}}();h.exportSymbol("utils.setDomNodeChildrenFromArrayMapping",
h.utils.setDomNodeChildrenFromArrayMapping);h.nativeTemplateEngine=function(){this.allowTemplateRewriting=
!1};h.nativeTemplateEngine.prototype=new h.templateEngine;h.nativeTemplateEngine.prototype.constructor=
h.nativeTemplateEngine;h.nativeTemplateEngine.prototype.renderTemplateSource=function(n){var r=!(h.utils.
ieVersion<9),u=r?n.nodes:null,t=u?n.nodes():null,i;return t?h.utils.makeArray(t.cloneNode(!0).childNodes):
(i=n.text(),h.utils.parseHtmlFragment(i))};h.nativeTemplateEngine.instance=new h.nativeTemplateEngine;
h.setTemplateEngine(h.nativeTemplateEngine.instance);h.exportSymbol("nativeTemplateEngine",h.nativeTemplateEngine),
function(){h.jqueryTmplTemplateEngine=function(){function t(){if(n<2)throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
}function r(n,t,r){return i.tmpl(n,t,r)}var n=this.jQueryTmplVersion=function(){if(!i||!i.tmpl)return 0;
try{if(i.tmpl.tag.tmpl.open.toString().indexOf("__")>=0)return 2}catch(n){}return 1}();this.renderTemplateSource=
function(n,f,e){var o,s;e=e||{};t();o=n.data("precompiled");o||(s=n.text()||"",s="{{ko_with $item.koBindingContext}}"+
s+"{{/ko_with}}",o=i.template(null,s),n.data("precompiled",o));var c=[f.$data],l=i.extend({koBindingContext:
f},e.templateOptions),h=r(o,c,l);return h.appendTo(u.createElement("div")),i.fragments={},h};this.createJavaScriptEvaluatorBlock=
function(n){return"{{ko_code ((function() { return "+n+" })()) }}"};this.addTemplate=function(n,t){u.
write("<script type='text/html' id='"+n+"'>"+t+"<\/script>")};n>0&&(i.tmpl.tag.ko_code={open:"__.push($1 || '');"},
i.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};h.jqueryTmplTemplateEngine.prototype=new h.templateEngine;
h.jqueryTmplTemplateEngine.prototype.constructor=h.jqueryTmplTemplateEngine;var n=new h.jqueryTmplTemplateEngine;
n.jQueryTmplVersion>0&&h.setTemplateEngine(n);h.exportSymbol("jqueryTmplTemplateEngine",h.jqueryTmplTemplateEngine)}
()})})()})();
/*! Knockout projections plugin - version 1.1.0
------------------------------------------------------------------------------
Copyright (c) Microsoft Corporation
All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 
THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions and limitations under the License.
------------------------------------------------------------------------------
*/
(function(n){"use strict";function t(n,t,i,r,u,f,e){this.inputItem=t;this.stateArrayIndex=i;this.mappingOptions=
u;this.arrayOfState=f;this.outputObservableArray=e;this.outputArray=this.outputObservableArray.peek(
);this.isIncluded=null;this.suppressNotification=!1;this.outputArrayIndex=n.observable(r);this.disposeFuncFromMostRecentMapping=
null;this.mappedValueComputed=n.computed(this.mappingEvaluator,this);this.mappedValueComputed.subscribe(
this.onMappingResultChanged,this);this.previousMappedValue=this.mappedValueComputed.peek()}function o(
n,t){if(!n)return null;switch(n.status){case"added":return n.index;case"deleted":return n.index+t;default:
throw new Error("Unknown diff status: "+n.status);}}function s(n,i,r,u,f,e,o,s,h){var l=typeof i.moved==
"number",c=l?r[i.moved]:new t(n,i.value,u,f,e,o,s);return o.splice(u,0,c),c.isIncluded&&h.splice(f,0,
c.mappedValueComputed.peek()),l&&(c.stateArrayIndex=u,c.setOutputArrayIndexSilently(f)),c}function h(
n,t,i,r,u){var f=t.splice(i,1)[0];f.isIncluded&&u.splice(r,1);typeof n.moved!="number"&&f.dispose()}
function c(n,t,i){return n.stateArrayIndex=t,n.setOutputArrayIndexSilently(i),i+(n.isIncluded?1:0)}function l(
n,t){for(var i,u={},r=0;r<n.length;r++)i=n[r],i.status==="added"&&typeof i.moved=="number"&&(u[i.moved]=
t[i.moved]);return u}function a(n,t,i){return i.length&&t[n.index]?t[n.index].outputArrayIndex.peek(
):i.length}function v(n,t,i,r,u,f){return t.subscribe(function(t){var v,b;if(t.length){var k=l(t,i),
w=0,e=t[0],p=0,y=e&&a(e,i,r);for(v=e.index;e||v<i.length;v++)if(o(e,p)===v){switch(e.status){case"added":
b=s(n,e,k,v,y,f,i,u,r);b.isIncluded&&y++;p++;break;case"deleted":h(e,i,v,y,r);p--;v--;break;default:
throw new Error("Unknown diff status: "+e.status);}w++;e=t[w]}else v<i.length&&(y=c(i[v],v,y));u.valueHasMutated(
)}},null,"arrayChange")}function f(n,i){var c=this,u=[],f=[],s=n.observableArray(f),l=c.peek(),r;if(
typeof i=="function"&&(i={mapping:i}),i.mappingWithDisposeCallback){if(i.mapping||i.disposeItem)throw new
Error("'mappingWithDisposeCallback' cannot be used in conjunction with 'mapping' or 'disposeItem'.");
}else if(!i.mapping)throw new Error("Specify either 'mapping' or 'mappingWithDisposeCallback'.");for(
r=0;r<l.length;r++){var a=l[r],h=new t(n,a,r,f.length,i,u,s),y=h.mappedValueComputed.peek();u.push(h);
h.isIncluded&&f.push(y)}var p=v(n,c,u,f,s,i),o=n.computed(s).extend({trackArrayChanges:!0}),w=o.dispose;
return o.dispose=function(){p.dispose();n.utils.arrayForEach(u,function(n){n.dispose()});w.call(this,
arguments)},e(n,o),o}function y(n,t){return f.call(this,n,function(n){return t(n)?n:i})}function p(n)
{function t(n,t){return function(){return t.apply(this,[n].concat(Array.prototype.slice.call(arguments,
0)))}}n[r]={map:t(n,f),filter:t(n,y)}}function e(n,t){return n.utils.extend(t,n[r]),t}function u(n){
n.projections={_exclusionMarker:i};p(n);e(n,n.observableArray.fn)}function w(){if(typeof module!="undefined"&&
typeof module.exports!="undefined"){var t=require("knockout");u(t);module.exports=t}else typeof define==
"function"&&define.amd?define(["knockout"],u):"ko"in n&&u(n.ko)}var i={},r;t.prototype.dispose=function(
){this.mappedValueComputed.dispose();this.disposeResultFromMostRecentEvaluation()};t.prototype.disposeResultFromMostRecentEvaluation=
function(){if(this.disposeFuncFromMostRecentMapping&&(this.disposeFuncFromMostRecentMapping(),this.disposeFuncFromMostRecentMapping=
null),this.mappingOptions.disposeItem){var n=this.mappedValueComputed();this.mappingOptions.disposeItem(
n)}};t.prototype.mappingEvaluator=function(){var n,t,r;if(this.isIncluded!==null&&this.disposeResultFromMostRecentEvaluation(
),this.mappingOptions.mapping)n=this.mappingOptions.mapping(this.inputItem,this.outputArrayIndex);else
if(this.mappingOptions.mappingWithDisposeCallback){if(t=this.mappingOptions.mappingWithDisposeCallback(
this.inputItem,this.outputArrayIndex),!("mappedValue"in t))throw new Error("Return value from mappingWithDisposeCallback should have a 'mappedItem' property.");
n=t.mappedValue;this.disposeFuncFromMostRecentMapping=t.dispose}else throw new Error("No mapping callback given.");
return r=n!==i,this.isIncluded!==r&&(this.isIncluded!==null&&this.moveSubsequentItemsBecauseInclusionStateChanged(
r),this.isIncluded=r),n};t.prototype.onMappingResultChanged=function(n){n!==this.previousMappedValue&&
(this.isIncluded&&this.outputArray.splice(this.outputArrayIndex.peek(),1,n),this.suppressNotification||
this.outputObservableArray.valueHasMutated(),this.previousMappedValue=n)};t.prototype.moveSubsequentItemsBecauseInclusionStateChanged=
function(n){var r=this.outputArrayIndex.peek(),t,i;if(n)for(this.outputArray.splice(r,0,null),t=this.
stateArrayIndex+1;t<this.arrayOfState.length;t++)i=this.arrayOfState[t],i.setOutputArrayIndexSilently(
i.outputArrayIndex.peek()+1);else for(this.outputArray.splice(r,1),t=this.stateArrayIndex+1;t<this.arrayOfState.
length;t++)i=this.arrayOfState[t],i.setOutputArrayIndexSilently(i.outputArrayIndex.peek()-1)};t.prototype.
setOutputArrayIndexSilently=function(n){this.suppressNotification=!0;this.outputArrayIndex(n);this.suppressNotification=
!1};r="_ko.projections.cache";w()})(this);
/*!
 *
 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function(n){if(typeof bootstrap=="function")bootstrap("promise",n);else if(typeof exports=="object")
module.exports=n();else if(typeof define=="function"&&define.amd)define(n);else if(typeof ses!="undefined")
if(ses.ok())ses.makeQ=n;else return;else Q=n()})(function(){"use strict";function s(n){return function(
){return wt.apply(n,arguments)}}function ut(n){return n===Object(n)}function ni(n){return gt(n)==="[object StopIteration]"||
n instanceof b}function d(n,t){var r,i,u;if(c&&t.stack&&typeof n=="object"&&n!==null&&n.stack&&n.stack.
indexOf(k)===-1){for(r=[],i=t;!!i;i=i.source)i.stack&&r.unshift(i.stack);r.unshift(n.stack);u=r.join(
"\n"+k+"\n");n.stack=ti(u)}}function ti(n){for(var t,r=n.split("\n"),u=[],i=0;i<r.length;++i)t=r[i],
ri(t)||ii(t)||!t||u.push(t);return u.join("\n")}function ii(n){return n.indexOf("(module.js:")!==-1||
n.indexOf("(node.js:")!==-1}function ft(n){var r=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(n),t,i;return r?
[r[1],Number(r[2])]:(t=/at ([^ ]+):(\d+):(?:\d+)$/.exec(n),t)?[t[1],Number(t[2])]:(i=/.*@(.+):(\d+)$/.
exec(n),i?[i[1],Number(i[2])]:void 0)}function ri(n){var t=ft(n),r,i;return t?(r=t[0],i=t[1],r===it&&
i>=pt&&i<=vt):!1}function et(){var n;if(c){if(n=new Error,!n.stack)try{throw new Error;}catch(r){n=r}
var t=n.stack.split("\n"),u=t[0].indexOf("@")>0?t[1]:t[2],i=ft(u);if(i)return it=i[0],i[1]}}function ui(
n,t,i){return function(){return typeof console!="undefined"&&typeof console.warn=="function"&&console.
warn(t+" is deprecated, use "+i+" instead.",new Error("").stack),n.apply(n,arguments)}}function n(n)
{return e(n)?n:ht(n)?ci(n):tt(n)}function g(){function y(n){f=n;o.source=n;v(h,function(t,i){r(function(
){n.promiseDispatch.apply(n,i)})},void 0);h=void 0;a=void 0}var h=[],a=[],f,s=w(g.prototype),o=w(t.prototype),
l;if(o.promiseDispatch=function(n,t,u){var e=i(arguments);h?(h.push(e),t==="when"&&u[1]&&a.push(u[1])):
r(function(){f.promiseDispatch.apply(f,e)})},o.valueOf=function(){if(h)return o;var n=st(f);return e(
n)&&(f=n),n},o.inspect=function(){return f?f.inspect():{state:"pending"}},n.longStackSupport&&c){if(
l=new Error,!l.stack)try{throw new Error;}catch(p){l=p}o.stack=l.stack.substring(l.stack.indexOf("\n")+
1)}return s.promise=o,s.resolve=function(t){f||y(n(t))},s.fulfill=function(n){f||y(tt(n))},s.reject=
function(n){f||y(u(n))},s.notify=function(n){f||v(a,function(t,i){r(function(){i(n)})},void 0)},s}function o(
t){if(typeof t!="function")throw new TypeError("resolver must be a function.");var i=n.defer();try{t(
i.resolve,i.reject,i.notify)}catch(r){i.reject(r)}return i.promise}function ot(t){return o(function(
i,r){for(var u=0,f=t.length;u<f;u++)n(t[u]).then(i,r)})}function t(n,i,r){var f,e;return i===void 0&&
(i=function(n){return u(new Error("Promise does not support operation: "+n))}),r===void 0&&(r=function(
){return{state:"unknown"}}),f=w(t.prototype),f.promiseDispatch=function(t,r,e){var o;try{o=n[r]?n[r].
apply(f,e):i.call(f,r,e)}catch(s){o=u(s)}t&&t(o)},f.inspect=r,r&&(e=r(),e.state==="rejected"&&(f.exception=
e.reason),f.valueOf=function(){var n=r();return n.state==="pending"||n.state==="rejected"?f:n.value}
),f}function f(t,i,r,u){return n(t).then(i,r,u)}function st(n){if(e(n)){var t=n.inspect();if(t.state===
"fulfilled")return t.value}return n}function e(n){return ut(n)&&typeof n.promiseDispatch=="function"&&
typeof n.inspect=="function"}function ht(n){return ut(n)&&typeof n.then=="function"}function fi(n){return e(
n)&&n.inspect().state==="pending"}function ei(n){return!e(n)||n.inspect().state==="fulfilled"}function oi(
n){return e(n)&&n.inspect().state==="rejected"}function nt(){l.length=0;y.length=0;a||(a=!0)}function si(
n,t){a&&(y.push(n),t&&typeof t.stack!="undefined"?l.push(t.stack):l.push("(no stack) "+t))}function hi(
n){if(a){var t=bt(y,n);t!==-1&&(y.splice(t,1),l.splice(t,1))}}function u(n){var i=t({when:function(t)
{return t&&hi(this),t?t(n):this}},function(){return this},function(){return{state:"rejected",reason:
n}});return si(i,n),i}function tt(n){return t({when:function(){return n},get:function(t){return n[t]}
,set:function(t,i){n[t]=i},"delete":function(t){delete n[t]},post:function(t,i){return t===null||t===
void 0?n.apply(void 0,i):n[t].apply(n,i)},apply:function(t,i){return n.apply(t,i)},keys:function(){return dt(
n)}},void 0,function(){return{state:"fulfilled",value:n}})}function ci(t){var i=n.defer();return r(function(
){try{t.then(i.resolve,i.reject,i.notify)}catch(n){i.reject(n)}}),i.promise}function li(i){return t(
{isDef:function(){}},function(n,t){return lt(i,n,t)},function(){return n(i).inspect()})}function ct(
t,i,r){return n(t).spread(i,r)}function ai(t){return function(){function i(t,i){var s;if(typeof StopIteration==
"undefined"){try{s=e[t](i)}catch(h){return u(h)}return s.done?n(s.value):f(s.value,r,o)}try{s=e[t](i)}
catch(h){return ni(h)?n(h.value):u(h)}return f(s,r,o)}var e=t.apply(this,arguments),r=i.bind(i,"next"),
o=i.bind(i,"throw");return r()}}function vi(t){n.done(n.async(t)())}function yi(n){throw new b(n);}function pi(
n){return function(){return ct([this,h(arguments)],function(t,i){return n.apply(t,i)})}}function lt(
t,i,r){return n(t).dispatch(i,r)}function h(t){return f(t,function(t){var r=0,i=n.defer();return v(t,
function(n,u,o){var s;e(u)&&(s=u.inspect()).state==="fulfilled"?t[o]=s.value:(++r,f(u,function(n){t[
o]=n;--r==0&&i.resolve(t)},i.reject,function(n){i.notify({index:o,value:n})}))},void 0),r===0&&i.resolve(
t),i.promise})}function at(t){return f(t,function(t){return t=p(t,n),f(h(p(t,function(n){return f(n,
rt,rt)})),function(){return t})})}function wi(t){return n(t).allSettled()}function bi(t,i){return n(
t).then(void 0,void 0,i)}function ki(t,i){return n(t).nodeify(i)}var c=!1,b,k,vt;if((new Error).stack)
c=!0;else try{throw new Error;}catch(yt){c=!!yt.stack}var pt=et(),it,rt=function(){},r=function(){function t(
){for(var r,i;n.next;){n=n.next;r=n.task;n.task=void 0;i=n.domain;i&&(n.domain=void 0,i.enter());try{
r()}catch(u){if(e){i&&i.exit();setTimeout(t,0);i&&i.enter();throw u;}else setTimeout(function(){throw u;
},0)}i&&i.exit()}f=!1}var n={task:void 0,next:null},s=n,f=!1,i=void 0,e=!1,u,o;return r=function(n){
s=s.next={task:n,domain:e&&process.domain,next:null};f||(f=!0,i())},typeof process!="undefined"&&process.
nextTick?(e=!0,i=function(){process.nextTick(t)}):typeof setImmediate=="function"?i=typeof window!="undefined"?
setImmediate.bind(window,t):function(){setImmediate(t)}:typeof MessageChannel!="undefined"?(u=new MessageChannel,
u.port1.onmessage=function(){i=o;u.port1.onmessage=t;t()},o=function(){u.port2.postMessage(0)},i=function(
){setTimeout(t,0);o()}):i=function(){setTimeout(t,0)},r}(),wt=Function.call;var i=s(Array.prototype.
slice),v=s(Array.prototype.reduce||function(n,t){var i=0,r=this.length;if(arguments.length===1)do{if(
i in this){t=this[i++];break}if(++i>=r)throw new TypeError;}while(1);for(;i<r;i++)i in this&&(t=n(t,
this[i],i));return t}),bt=s(Array.prototype.indexOf||function(n){for(var t=0;t<this.length;t++)if(this[
t]===n)return t;return-1}),p=s(Array.prototype.map||function(n,t){var i=this,r=[];return v(i,function(
u,f,e){r.push(n.call(t,f,e,i))},void 0),r}),w=Object.create||function(n){function t(){}return t.prototype=
n,new t},kt=s(Object.prototype.hasOwnProperty),dt=Object.keys||function(n){var t=[];for(var i in n)kt(
n,i)&&t.push(i);return t},gt=s(Object.prototype.toString);b=typeof ReturnValue!="undefined"?ReturnValue:
function(n){this.value=n};k="From previous event:";n.resolve=n;n.nextTick=r;n.longStackSupport=!1;n.
defer=g;g.prototype.makeNodeResolver=function(){var n=this;return function(t,r){t?n.reject(t):arguments.
length>2?n.resolve(i(arguments,1)):n.resolve(r)}};n.Promise=o;n.promise=o;o.race=ot;o.all=h;o.reject=
u;o.resolve=n;n.passByCopy=function(n){return n};t.prototype.passByCopy=function(){return this};n.join=
function(t,i){return n(t).join(i)};t.prototype.join=function(t){return n([this,t]).spread(function(n,
t){if(n===t)return n;throw new Error("Can't join: not the same: "+n+" "+t);})};n.race=ot;t.prototype.
race=function(){return this.then(n.race)};n.makePromise=t;t.prototype.toString=function(){return"[object Promise]"}
;t.prototype.then=function(t,i,f){function h(n){try{return typeof t=="function"?t(n):n}catch(i){return d(
i,e),u(i)}}function c(n){if(typeof i=="function"){d(n,e);try{return i(n)}catch(t){return u(t)}}return u(
n)}function l(n){return typeof f=="function"?f(n):n}var e=this,o=n.defer(),s=!1;return r(function(){
e.promiseDispatch(function(n){s||(s=!0,o.resolve(h(n)))},"when",[function(n){s||(s=!0,o.resolve(c(n)))}
])}),e.promiseDispatch(void 0,"when",[void 0,function(t){var i,r=!1;try{i=l(t)}catch(u){if(r=!0,n.onerror)
n.onerror(u);else throw u;}r||o.notify(i)}]),o.promise};n.when=f;t.prototype.thenResolve=function(n)
{return this.then(function(){return n})};n.thenResolve=function(t,i){return n(t).thenResolve(i)};t.prototype.
thenReject=function(n){return this.then(function(){throw n;})};n.thenReject=function(t,i){return n(t).
thenReject(i)};n.nearer=st;n.isPromise=e;n.isPromiseAlike=ht;n.isPending=fi;t.prototype.isPending=function(
){return this.inspect().state==="pending"};n.isFulfilled=ei;t.prototype.isFulfilled=function(){return this.
inspect().state==="fulfilled"};n.isRejected=oi;t.prototype.isRejected=function(){return this.inspect(
).state==="rejected"};var l=[],y=[],a=!0;return n.resetUnhandledRejections=nt,n.getUnhandledReasons=
function(){return l.slice()},n.stopUnhandledRejectionTracking=function(){nt();a=!1},nt(),n.reject=u,
n.fulfill=tt,n.master=li,n.spread=ct,t.prototype.spread=function(n,t){return this.all().then(function(
t){return n.apply(void 0,t)},t)},n.async=ai,n.spawn=vi,n["return"]=yi,n.promised=pi,n.dispatch=lt,t.
prototype.dispatch=function(t,i){var f=this,u=n.defer();return r(function(){f.promiseDispatch(u.resolve,
t,i)}),u.promise},n.get=function(t,i){return n(t).dispatch("get",[i])},t.prototype.get=function(n){return this.
dispatch("get",[n])},n.set=function(t,i,r){return n(t).dispatch("set",[i,r])},t.prototype.set=function(
n,t){return this.dispatch("set",[n,t])},n.del=n["delete"]=function(t,i){return n(t).dispatch("delete",
[i])},t.prototype.del=t.prototype["delete"]=function(n){return this.dispatch("delete",[n])},n.mapply=
n.post=function(t,i,r){return n(t).dispatch("post",[i,r])},t.prototype.mapply=t.prototype.post=function(
n,t){return this.dispatch("post",[n,t])},n.send=n.mcall=n.invoke=function(t,r){return n(t).dispatch(
"post",[r,i(arguments,2)])},t.prototype.send=t.prototype.mcall=t.prototype.invoke=function(n){return this.
dispatch("post",[n,i(arguments,1)])},n.fapply=function(t,i){return n(t).dispatch("apply",[void 0,i])}
,t.prototype.fapply=function(n){return this.dispatch("apply",[void 0,n])},n["try"]=n.fcall=function(
t){return n(t).dispatch("apply",[void 0,i(arguments,1)])},t.prototype.fcall=function(){return this.dispatch(
"apply",[void 0,i(arguments)])},n.fbind=function(t){var r=n(t),u=i(arguments,1);return function(){return r.
dispatch("apply",[this,u.concat(i(arguments))])}},t.prototype.fbind=function(){var n=this,t=i(arguments);
return function(){return n.dispatch("apply",[this,t.concat(i(arguments))])}},n.keys=function(t){return n(
t).dispatch("keys",[])},t.prototype.keys=function(){return this.dispatch("keys",[])},n.all=h,t.prototype.
all=function(){return h(this)},n.allResolved=ui(at,"allResolved","allSettled"),t.prototype.allResolved=
function(){return at(this)},n.allSettled=wi,t.prototype.allSettled=function(){return this.then(function(
t){return h(p(t,function(t){function i(){return t.inspect()}return t=n(t),t.then(i,i)}))})},n.fail=n[
"catch"]=function(t,i){return n(t).then(void 0,i)},t.prototype.fail=t.prototype["catch"]=function(n)
{return this.then(void 0,n)},n.progress=bi,t.prototype.progress=function(n){return this.then(void 0,
void 0,n)},n.fin=n["finally"]=function(t,i){return n(t)["finally"](i)},t.prototype.fin=t.prototype["finally"]=
function(t){return t=n(t),this.then(function(n){return t.fcall().then(function(){return n})},function(
n){return t.fcall().then(function(){throw n;})})},n.done=function(t,i,r,u){return n(t).done(i,r,u)},
t.prototype.done=function(t,i,u){var f=function(t){r(function(){if(d(t,e),n.onerror)n.onerror(t);else
throw t;})},e=t||i||u?this.then(t,i,u):this;typeof process=="object"&&process&&process.domain&&(f=process.
domain.bind(f));e.then(void 0,f)},n.timeout=function(t,i,r){return n(t).timeout(i,r)},t.prototype.timeout=
function(t,i){var r=n.defer(),u=setTimeout(function(){i&&"string"!=typeof i||(i=new Error(i||"Timed out after "+
t+" ms"),i.code="ETIMEDOUT");r.reject(i)},t);return this.then(function(n){clearTimeout(u);r.resolve(
n)},function(n){clearTimeout(u);r.reject(n)},r.notify),r.promise},n.delay=function(t,i){return i===void
0&&(i=t,t=void 0),n(t).delay(i)},t.prototype.delay=function(t){return this.then(function(i){var r=n.
defer();return setTimeout(function(){r.resolve(i)},t),r.promise})},n.nfapply=function(t,i){return n(
t).nfapply(i)},t.prototype.nfapply=function(t){var r=n.defer(),u=i(t);return u.push(r.makeNodeResolver(
)),this.fapply(u).fail(r.reject),r.promise},n.nfcall=function(t){var r=i(arguments,1);return n(t).nfapply(
r)},t.prototype.nfcall=function(){var r=i(arguments),t=n.defer();return r.push(t.makeNodeResolver()),
this.fapply(r).fail(t.reject),t.promise},n.nfbind=n.denodeify=function(t){var r=i(arguments,1);return function(
){var f=r.concat(i(arguments)),u=n.defer();return f.push(u.makeNodeResolver()),n(t).fapply(f).fail(u.
reject),u.promise}},t.prototype.nfbind=t.prototype.denodeify=function(){var t=i(arguments);return t.
unshift(this),n.denodeify.apply(void 0,t)},n.nbind=function(t,r){var u=i(arguments,2);return function(
){function o(){return t.apply(r,arguments)}var e=u.concat(i(arguments)),f=n.defer();return e.push(f.
makeNodeResolver()),n(o).fapply(e).fail(f.reject),f.promise}},t.prototype.nbind=function(){var t=i(arguments,
0);return t.unshift(this),n.nbind.apply(void 0,t)},n.nmapply=n.npost=function(t,i,r){return n(t).npost(
i,r)},t.prototype.nmapply=t.prototype.npost=function(t,r){var f=i(r||[]),u=n.defer();return f.push(u.
makeNodeResolver()),this.dispatch("post",[t,f]).fail(u.reject),u.promise},n.nsend=n.nmcall=n.ninvoke=
function(t,r){var f=i(arguments,2),u=n.defer();return f.push(u.makeNodeResolver()),n(t).dispatch("post",
[r,f]).fail(u.reject),u.promise},t.prototype.nsend=t.prototype.nmcall=t.prototype.ninvoke=function(t)
{var u=i(arguments,1),r=n.defer();return u.push(r.makeNodeResolver()),this.dispatch("post",[t,u]).fail(
r.reject),r.promise},n.nodeify=ki,t.prototype.nodeify=function(n){if(n)this.then(function(t){r(function(
){n(null,t)})},function(t){r(function(){n(t)})});else return this},vt=et(),n});
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.16 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
var requirejs,require,define;(function(n){function c(n){return st.call(n)==="[object Function]"}function l(
n){return st.call(n)==="[object Array]"}function f(n,t){if(n)for(var i=0;i<n.length;i+=1)if(n[i]&&t(
n[i],i,n))break}function rt(n,t){if(n)for(var i=n.length-1;i>-1;i-=1)if(n[i]&&t(n[i],i,n))break}function r(
n,t){return bt.call(n,t)}function i(n,t){return r(n,t)&&n[t]}function h(n,t){for(var i in n)if(r(n,i)&&
t(n[i],i))break}function ut(n,t,i,u){return t&&h(t,function(t,f){(i||!r(n,f))&&(!u||typeof t!="object"||
!t||l(t)||c(t)||t instanceof RegExp?n[f]=t:(n[f]||(n[f]={}),ut(n[f],t,i,u)))}),n}function u(n,t){return function(
){return t.apply(n,arguments)}}function ft(){return document.getElementsByTagName("script")}function at(
n){throw n;}function vt(t){if(!t)return t;var i=n;return f(t.split("."),function(n){i=i[n]}),i}function a(
n,t,i,r){var u=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+n);return u.requireType=n,u.requireModules=
r,i&&(u.originalError=i),u}function ni(e){function pi(n){for(var i,t=0;t<n.length;t++)if(i=n[t],i===
".")n.splice(t,1),t-=1;else if(i==="..")if(t===0||t===1&&n[2]===".."||n[t-1]==="..")continue;else t>
0&&(n.splice(t-1,2),t-=2)}function it(n,t,r){var w,f,o,e,h,c,l,s,b,a,k,d,u=t&&t.split("/"),y=v.map,p=
y&&y["*"];if(n&&(n=n.split("/"),l=n.length-1,v.nodeIdCompat&&g.test(n[l])&&(n[l]=n[l].replace(g,"")),
n[0].charAt(0)==="."&&u&&(d=u.slice(0,u.length-1),n=d.concat(n)),pi(n),n=n.join("/")),r&&y&&(u||p)){
o=n.split("/");n:for(e=o.length;e>0;e-=1){if(c=o.slice(0,e).join("/"),u)for(h=u.length;h>0;h-=1)if(f=
i(y,u.slice(0,h).join("/")),f&&(f=i(f,c),f)){s=f;b=e;break n}!a&&p&&i(p,c)&&(a=i(p,c),k=e)}!s&&a&&(s=
a,b=k);s&&(o.splice(0,b,s),n=o.join("/"))}return w=i(v.pkgs,n),w?w:n}function oi(n){o&&f(ft(),function(
t){if(t.getAttribute("data-requiremodule")===n&&t.getAttribute("data-requirecontext")===s.contextName)
return t.parentNode.removeChild(t),!0})}function ii(n){var t=i(v.paths,n),r;return t||(r=i(yt,n),t=r&&
i(v.paths,r)),t&&l(t)&&t.length>1?(t.shift(),s.require.undef(n),s.makeRequire(null,{skipMap:!0})([n]),
!0):void 0}function si(n){var i,t=n?n.indexOf("!"):-1;return t>-1&&(i=n.substring(0,t),n=n.substring(
t+1,n.length)),[i,n]}function k(n,t,r,u){var a,h,l,o,f=null,c=t?t.name:null,y=n,v=!0,e="";return n||
(v=!1,n="_@r"+(vi+=1)),o=si(n),f=o[0],n=o[1],f&&(f=it(f,c,u),h=i(w,f)),n&&(f?e=h&&h.normalize?h.normalize(
n,function(n){return it(n,c,u)}):n.indexOf("!")===-1?it(n,c,u):n:(e=it(n,c,u),o=si(e),f=o[0],e=o[1],
r=!0,a=s.nameToUrl(e))),l=f&&!h&&!r?"_unnormalized"+(yi+=1):"",{prefix:f,name:e,parentMap:t,unnormalized:
!!l,url:a,originalName:y,isDefine:v,id:(f?f+"!"+e:e)+l}}function ot(n){var r=n.id,t=i(p,r);return t||
(t=p[r]=new s.Module(n)),t}function st(n,t,u){var e=n.id,f=i(p,e);if(r(w,e)&&(!f||f.defineEmitComplete)
)t==="defined"&&u(w[e]);else if(f=ot(n),f.error&&t==="error")u(f.error);else f.on(t,u)}function tt(n,
r){var e=n.requireModules,u=!1;if(r)r(n);else if(f(e,function(t){var r=i(p,t);r&&(r.error=n,r.events.
error&&(u=!0,r.emit("error",n)))}),!u)t.onError(n)}function ri(){nt.length&&(dt.apply(d,[d.length,0].
concat(nt)),nt=[])}function ui(n){delete p[n];delete ni[n]}function hi(n,t,r){var u=n.map.id;n.error?
n.emit("error",n.error):(t[u]=!0,f(n.depMaps,function(u,f){var e=u.id,o=i(p,e);!o||n.depMatched[f]||
r[e]||(i(t,e)?(n.defineDep(f,w[e]),n.check()):hi(o,t,r))}),r[u]=!0)}function fi(){var t,u,e=v.waitSeconds*
1e3,i=e&&s.startTime+e<(new Date).getTime(),n=[],c=[],r=!1,l=!0;if(!pt){if(pt=!0,h(ni,function(t){var
f=t.map,e=f.id;if(t.enabled&&(f.isDefine||c.push(t),!t.error))if(!t.inited&&i)ii(e)?(u=!0,r=!0):(n.push(
e),oi(e));else if(!t.inited&&t.fetched&&f.isDefine&&(r=!0,!f.prefix))return l=!1}),i&&n.length)return t=
a("timeout","Load timeout for modules: "+n,null,n),t.contextName=s.contextName,tt(t);l&&f(c,function(
n){hi(n,{},{})});(!i||u)&&r&&(o||ht)&&!kt&&(kt=setTimeout(function(){kt=0;fi()},50));pt=!1}}function ei(
n){r(w,n[0])||ot(k(n[0],null,!0)).init(n[1],n[2])}function ci(n,t,i,r){n.detachEvent&&!lt?r&&n.detachEvent(
r,t):n.removeEventListener(i,t,!1)}function li(n){var t=n.currentTarget||n.srcElement;return ci(t,s.
onScriptLoad,"load","onreadystatechange"),ci(t,s.onScriptError,"error"),{node:t,id:t&&t.getAttribute(
"data-requiremodule")}}function ai(){var n;for(ri();d.length;)n=d.shift(),n[0]===null||ei(n)}var pt,
bt,s,et,kt,v={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},p={},ni={},ti=
{},d=[],w={},ct={},yt={},vi=1,yi=1;return et={require:function(n){return n.require?n.require:n.require=
s.makeRequire(n.map)},exports:function(n){return n.usingExports=!0,n.map.isDefine?n.exports?w[n.map.
id]=n.exports:n.exports=w[n.map.id]={}:void 0},module:function(n){return n.module?n.module:n.module=
{id:n.map.id,uri:n.map.url,config:function(){return i(v.config,n.map.id)||{}},exports:n.exports||(n.
exports={})}}},bt=function(n){this.events=i(ti,n.id)||{};this.map=n;this.shim=i(v.shim,n.id);this.depExports=
[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0},bt.prototype={init:function(
n,t,i,r){if(r=r||{},!this.inited){if(this.factory=t,i)this.on("error",i);else this.events.error&&(i=
u(this,function(n){this.emit("error",n)}));this.depMaps=n&&n.slice(0);this.errback=i;this.inited=!0;
this.ignore=r.ignore;r.enabled||this.enabled?this.enable():this.check()}},defineDep:function(n,t){this.
depMatched[n]||(this.depMatched[n]=!0,this.depCount-=1,this.depExports[n]=t)},fetch:function(){if(!this.
fetched){this.fetched=!0;s.startTime=(new Date).getTime();var n=this.map;if(this.shim)s.makeRequire(
this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return n.prefix?this.callPlugin(
):this.load()}));else return n.prefix?this.callPlugin():this.load()}},load:function(){var n=this.map.
url;ct[n]||(ct[n]=!0,s.load(this.map.id,n))},check:function(){if(this.enabled&&!this.enabling){var i,
f,r=this.map.id,e=this.depExports,n=this.exports,u=this.factory;if(this.inited){if(this.error)this.emit(
"error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(c(
u)){if(this.events.error&&this.map.isDefine||t.onError!==at)try{n=s.execCb(r,u,e,n)}catch(o){i=o}else
n=s.execCb(r,u,e,n);if(this.map.isDefine&&n===undefined&&(f=this.module,f?n=f.exports:this.usingExports&&
(n=this.exports)),i)return i.requireMap=this.map,i.requireModules=this.map.isDefine?[this.map.id]:null,
i.requireType=this.map.isDefine?"define":"require",tt(this.error=i)}else n=u;if(this.exports=n,this.
map.isDefine&&!this.ignore&&(w[r]=n,t.onResourceLoad))t.onResourceLoad(s,this.map,this.depMaps);ui(r);
this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit(
"defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var n=
this.map,f=n.id,e=k(n.prefix);this.depMaps.push(e);st(e,"defined",u(this,function(e){var o,c,l,w=i(yt,
this.map.id),y=this.map.name,g=this.map.parentMap?this.map.parentMap.name:null,d=s.makeRequire(n.parentMap,
{enableBuildCallback:!0});if(this.map.unnormalized){if(e.normalize&&(y=e.normalize(y,function(n){return it(
n,g,!0)})||""),c=k(n.prefix+"!"+y,this.map.parentMap),st(c,"defined",u(this,function(n){this.init([],
function(){return n},null,{enabled:!0,ignore:!0})})),l=i(p,c.id),l){if(this.depMaps.push(c),this.events.
error)l.on("error",u(this,function(n){this.emit("error",n)}));l.enable()}return}if(w){this.map.url=s.
nameToUrl(w);this.load();return}o=u(this,function(n){this.init([],function(){return n},null,{enabled:
!0})});o.error=u(this,function(n){this.inited=!0;this.error=n;n.requireModules=[f];h(p,function(n){n.
map.id.indexOf(f+"_unnormalized")===0&&ui(n.map.id)});tt(n)});o.fromText=u(this,function(i,u){var e=
n.name,h=k(e),c=b;u&&(i=u);c&&(b=!1);ot(h);r(v.config,f)&&(v.config[e]=v.config[f]);try{t.exec(i)}catch(l)
{return tt(a("fromtexteval","fromText eval for "+f+" failed: "+l,l,[f]))}c&&(b=!0);this.depMaps.push(
h);s.completeLoad(e);d([e],o)});e.load(n.name,d,o,v)}));s.enable(e,this);this.pluginMaps[e.id]=e},enable:
function(){ni[this.map.id]=this;this.enabled=!0;this.enabling=!0;f(this.depMaps,u(this,function(n,t)
{var f,e,o;if(typeof n=="string"){if(n=k(n,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),
this.depMaps[t]=n,o=i(et,n.id),o){this.depExports[t]=o(this);return}this.depCount+=1;st(n,"defined",
u(this,function(n){this.defineDep(t,n);this.check()}));this.errback?st(n,"error",u(this,this.errback)):
this.events.error&&st(n,"error",u(this,function(n){this.emit("error",n)}))}f=n.id;e=p[f];r(et,f)||!e||
e.enabled||s.enable(n,this)}));h(this.pluginMaps,u(this,function(n){var t=i(p,n.id);t&&!t.enabled&&s.
enable(n,this)}));this.enabling=!1;this.check()},on:function(n,t){var i=this.events[n];i||(i=this.events[
n]=[]);i.push(t)},emit:function(n,t){f(this.events[n],function(n){n(t)});n==="error"&&delete this.events[
n]}},s={config:v,contextName:e,registry:p,defined:w,urlFetched:ct,defQueue:d,Module:bt,makeModuleMap:
k,nextTick:t.nextTick,onError:tt,configure:function(n){n.baseUrl&&n.baseUrl.charAt(n.baseUrl.length-
1)!=="/"&&(n.baseUrl+="/");var t=v.shim,i={paths:!0,bundles:!0,config:!0,map:!0};h(n,function(n,t){i[
t]?(v[t]||(v[t]={}),ut(v[t],n,!0,!0)):v[t]=n});n.bundles&&h(n.bundles,function(n,t){f(n,function(n){
n!==t&&(yt[n]=t)})});n.shim&&(h(n.shim,function(n,i){l(n)&&(n={deps:n});(n.exports||n.init)&&!n.exportsFn&&
(n.exportsFn=s.makeShimExports(n));t[i]=n}),v.shim=t);n.packages&&f(n.packages,function(n){var i,t;n=
typeof n=="string"?{name:n}:n;t=n.name;i=n.location;i&&(v.paths[t]=n.location);v.pkgs[t]=n.name+"/"+
(n.main||"main").replace(wt,"").replace(g,"")});h(p,function(n,t){n.inited||n.map.unnormalized||(n.map=
k(t))});(n.deps||n.callback)&&s.require(n.deps||[],n.callback)},makeShimExports:function(t){function i(
){var i;return t.init&&(i=t.init.apply(n,arguments)),i||t.exports&&vt(t.exports)}return i},makeRequire:
function(n,u){function f(i,o,h){var l,y,v;return(u.enableBuildCallback&&o&&c(o)&&(o.__requireJsBuild=
!0),typeof i=="string")?c(o)?tt(a("requireargs","Invalid require call"),h):n&&r(et,i)?et[i](p[n.id]):
t.get?t.get(s,i,n,f):(y=k(i,n,!1,!0),l=y.id,!r(w,l))?tt(a("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+
e+(n?"":". Use require([])"))):w[l]:(ai(),s.nextTick(function(){ai();v=ot(k(null,n));v.skipMap=u.skipMap;
v.init(i,o,h,{enabled:!0});fi()}),f)}return u=u||{},ut(f,{isBrowser:o,toUrl:function(t){var r,i=t.lastIndexOf(
"."),u=t.split("/")[0],f=u==="."||u==="..";return i!==-1&&(!f||i>1)&&(r=t.substring(i,t.length),t=t.
substring(0,i)),s.nameToUrl(it(t,n&&n.id,!0),r,!0)},normalize:function(t){return typeof t=="undefined"?
n.name:it(t,n.name)},defined:function(t){return r(w,k(t,n,!1,!0).id)},specified:function(t){return t=
k(t,n,!1,!0).id,r(w,t)||r(p,t)}}),n||(f.undef=function(t){ri();var u=k(t,n,!0),r=i(p,t);oi(t);delete
w[t];delete ct[u.url];delete ti[t];rt(d,function(n,i){n[0]===t&&d.splice(i,1)});r&&(r.events.defined&&
(ti[t]=r.events),ui(t))}),f},enable:function(n){var t=i(p,n.id);t&&ot(n).enable()},completeLoad:function(
n){var u,t,f,e=i(v.shim,n)||{},o=e.exports;for(ri();d.length;){if(t=d.shift(),t[0]===null){if(t[0]=n,
u)break;u=!0}else t[0]===n&&(u=!0);ei(t)}if(f=i(p,n),!u&&!r(w,n)&&f&&!f.inited)if(!v.enforceDefine||
o&&vt(o))ei([n,e.deps||[],e.exportsFn]);else return ii(n)?void 0:tt(a("nodefine","No define call for "+
n,null,[n]));fi()},nameToUrl:function(n,r,u){var a,o,h,y,f,e,c,p=i(v.pkgs,n);if(p&&(n=p),c=i(yt,n),c)
return s.nameToUrl(c,r,u);if(t.jsExtRegExp.test(n))f=n+(r||"");else{for(a=v.paths,o=n.split("/"),h=o.
length;h>0;h-=1)if(y=o.slice(0,h).join("/"),e=i(a,y),e){l(e)&&(e=e[0]);o.splice(0,h,e);break}f=o.join(
"/");f+=r||(/^data\:|\?/.test(f)||u?"":".js");f=(f.charAt(0)==="/"||f.match(/^[\w\+\.\-]+:/)?"":v.baseUrl)
+f}return v.urlArgs?f+((f.indexOf("?")===-1?"?":"&")+v.urlArgs):f},load:function(n,i){t.load(s,n,i)}
,execCb:function(n,t,i,r){return t.apply(r,i)},onScriptLoad:function(n){if(n.type==="load"||gt.test(
(n.currentTarget||n.srcElement).readyState)){y=null;var t=li(n);s.completeLoad(t.id)}},onScriptError:
function(n){var t=li(n);if(!ii(t.id))return tt(a("scripterror","Script error for: "+t.id,n,[t.id]))}
},s.require=s.makeRequire(),s}function ti(){return y&&y.readyState==="interactive"?y:(rt(ft(),function(
n){if(n.readyState==="interactive")return y=n}),y)}var t,tt,v,p,k,d,y,it,e,et,yt=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
pt=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,g=/\.js$/,wt=/^\.\//,ot=Object.prototype,st=ot.toString,
bt=ot.hasOwnProperty,kt=Array.prototype,dt=kt.splice,o=!!(typeof window!="undefined"&&typeof navigator!=
"undefined"&&window.document),ht=!o&&typeof importScripts!="undefined",gt=o&&navigator.platform==="PLAYSTATION 3"?
/^complete$/:/^(complete|loaded)$/,ct="_",lt=typeof opera!="undefined"&&opera.toString()==="[object Opera]",
w={},s={},nt=[],b=!1;if(typeof define=="undefined"){if(typeof requirejs!="undefined"){if(c(requirejs))
return;s=requirejs;requirejs=undefined}typeof require=="undefined"||c(require)||(s=require,require=undefined);
t=requirejs=function(n,r,u,f){var o,e,s=ct;return l(n)||typeof n=="string"||(e=n,l(r)?(n=r,r=u,u=f):
n=[]),e&&e.context&&(s=e.context),o=i(w,s),o||(o=w[s]=t.s.newContext(s)),e&&o.configure(e),o.require(
n,r,u)};t.config=function(n){return t(n)};t.nextTick=typeof setTimeout!="undefined"?function(n){setTimeout(
n,4)}:function(n){n()};require||(require=t);t.version="2.1.16";t.jsExtRegExp=/^\/|:|\?|\.js$/;t.isBrowser=
o;tt=t.s={contexts:w,newContext:ni};t({});f(["toUrl","undef","defined","specified"],function(n){t[n]=
function(){var t=w[ct];return t.require[n].apply(t,arguments)}});o&&(v=tt.head=document.getElementsByTagName(
"head")[0],p=document.getElementsByTagName("base")[0],p&&(v=tt.head=p.parentNode));t.onError=at;t.createNode=
function(n){var t=n.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.
createElement("script");return t.type=n.scriptType||"text/javascript",t.charset="utf-8",t.async=!0,t}
;t.load=function(n,i,r){var f=n&&n.config||{},u;if(o)return u=t.createNode(f,i,r),u.setAttribute("data-requirecontext",
n.contextName),u.setAttribute("data-requiremodule",i),!u.attachEvent||u.attachEvent.toString&&u.attachEvent.
toString().indexOf("[native code")<0||lt?(u.addEventListener("load",n.onScriptLoad,!1),u.addEventListener(
"error",n.onScriptError,!1)):(b=!0,u.attachEvent("onreadystatechange",n.onScriptLoad)),u.src=r,it=u,
p?v.insertBefore(u,p):v.appendChild(u),it=null,u;if(ht)try{importScripts(r);n.completeLoad(i)}catch(e)
{n.onError(a("importscripts","importScripts failed for "+i+" at "+r,e,[i]))}};o&&!s.skipDataMain&&rt(
ft(),function(n){return v||(v=n.parentNode),k=n.getAttribute("data-main"),k?(e=k,s.baseUrl||(d=e.split(
"/"),e=d.pop(),et=d.length?d.join("/")+"/":"./",s.baseUrl=et),e=e.replace(g,""),t.jsExtRegExp.test(e)&&
(e=k),s.deps=s.deps?s.deps.concat(e):[e],!0):void 0});define=function(n,t,i){var r,u;typeof n!="string"&&
(i=t,t=n,n=null);l(t)||(i=t,t=null);!t&&c(i)&&(t=[],i.length&&(i.toString().replace(yt,"").replace(pt,
function(n,i){t.push(i)}),t=(i.length===1?["require"]:["require","exports","module"]).concat(t)));b&&
(r=it||ti(),r&&(n||(n=r.getAttribute("data-requiremodule")),u=w[r.getAttribute("data-requirecontext")]));
(u?u.defQueue:nt).push([n,t,i])};define.amd={jQuery:!0};t.exec=function(n){return eval(n)};t(s)}})(this)