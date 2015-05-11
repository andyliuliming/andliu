var __extends,StringComparison,ObjectEx,ErrorBase,ExpMocks,ko,Forms,FxBase,ExtensionCore;(function(n)
{n(ko,ko.mapping={})})(function(n,t){function rt(){for(var r=arguments,u=r.length,f={},e=[],t,n,i;u--;
)for(i=r[u],t=i.length;t--;)n=i[t],f[n]||(f[n]=1,e.push(n));return e}function y(n,i){var u,r,f;for(r
in i)i.hasOwnProperty(r)&&i[r]&&(u=t.getType(n[r]),r&&n[r]&&u!=="array"&&u!=="string"?y(n[r],i[r]):(
f=t.getType(n[r])==="array"&&t.getType(i[r])==="array",n[r]=f?rt(n[r],i[r]):i[r]))}function c(n,t){var
i={};return y(i,n),y(i,t),i}function p(n,t){for(var f,i=c({},n),e=w.length-1;e>=0;e--)(f=w[e],i[f])&&
(i[""]instanceof Object||(i[""]={}),i[""][f]=i[f],delete i[f]);return t&&(i.ignore=u(t.ignore,i.ignore),
i.include=u(t.include,i.include),i.copy=u(t.copy,i.copy),i.observe=u(t.observe,i.observe)),i.ignore=
u(i.ignore,r.ignore),i.include=u(i.include,r.include),i.copy=u(i.copy,r.copy),i.observe=u(i.observe,
r.observe),i.mappedProperties=i.mappedProperties||{},i.copiedProperties=i.copiedProperties||{},i}function u(
i,r){return t.getType(i)!=="array"&&(i=t.getType(i)==="undefined"?[]:[i]),t.getType(r)!=="array"&&(r=
t.getType(r)==="undefined"?[]:[r]),n.utils.arrayGetDistinctValues(i.concat(r))}function ut(t,i){var u=
n.dependentObservable,r;return n.dependentObservable=function(i,r,u){var f;u=u||{};i&&typeof i=="object"&&
(u=i);var s=u.deferEvaluation,e=!1,h=function(i){var f=n.dependentObservable,u,r;return n.dependentObservable=
o,u=n.isWriteableObservable(i),n.dependentObservable=f,r=o({read:function(){return e||(n.utils.arrayRemoveItem(
t,i),e=!0),i.apply(i,arguments)},write:u&&function(n){return i(n)},deferEvaluation:!0}),it&&(r._wrapper=
!0),r.__DO=i,r};return u.deferEvaluation=!0,f=new o(i,r,u),s||(f=h(f),t.push(f)),f},n.dependentObservable.
fn=o.fn,n.computed=n.dependentObservable,r=i(),n.dependentObservable=u,n.computed=n.dependentObservable,
r}function l(r,u,f,o,v,y,p){var si=t.getType(n.utils.unwrapObservable(u))==="array",ti,ot,ri,lt,ei,wt,
yt,gt,d,it,ni,st,ht;y=y||"";t.isMapped(r)&&(ti=n.utils.unwrapObservable(r)[i],f=c(ti,f));var et={data:
u,parent:p||v},ct=function(){return f[o]&&f[o].create instanceof Function},pt=function(t){return ut(
s,function(){return n.utils.unwrapObservable(v)instanceof Array?f[o].create({data:t||et.data,parent:
et.parent,skip:b}):f[o].create({data:t||et.data,parent:et.parent})})},rt=function(){return f[o]&&f[o].
update instanceof Function},ft=function(t,i){var r={data:i||et.data,parent:et.parent,target:n.utils.
unwrapObservable(t)};return n.isWriteableObservable(t)&&(r.observable=t),f[o].update(r)},ii=h.get(u);
if(ii)return ii;if(o=o||"",si){var ui=[],fi=!1,w=function(n){return n};f[o]&&f[o].key&&(w=f[o].key,fi=
!0);n.isObservable(r)||(r=n.observableArray([]),r.mappedRemove=function(n){var t=typeof n=="function"?
n:function(t){return t===w(n)};return r.remove(function(n){return t(w(n))})},r.mappedRemoveAll=function(
t){var i=e(t,w);return r.remove(function(t){return n.utils.arrayIndexOf(i,w(t))!=-1})},r.mappedDestroy=
function(n){var t=typeof n=="function"?n:function(t){return t===w(n)};return r.destroy(function(n){return t(
w(n))})},r.mappedDestroyAll=function(t){var i=e(t,w);return r.destroy(function(t){return n.utils.arrayIndexOf(
i,w(t))!=-1})},r.mappedIndexOf=function(t){var i=e(r(),w),u=w(t);return n.utils.arrayIndexOf(i,u)},r.
mappedGet=function(n){return r()[r.mappedIndexOf(n)]},r.mappedCreate=function(t){var i,u;if(r.mappedIndexOf(
t)!==-1)throw new Error("There already is an object with the key that you specified.");return i=ct()?
pt(t):t,rt()&&(u=ft(i,t),n.isWriteableObservable(i)?i(u):i=u),r.push(i),i});ei=e(n.utils.unwrapObservable(
r),w).sort();wt=e(u,w);fi&&wt.sort();for(var oi=n.utils.compareArrays(ei,wt),at={},bt=n.utils.unwrapObservable(
u),kt={},dt=!0,tt=0,vt=bt.length;tt<vt;tt++){if(d=w(bt[tt]),d===undefined||d instanceof Object){dt=!1;
break}kt[d]=bt[tt]}for(yt=[],gt=0,tt=0,vt=oi.length;tt<vt;tt++){d=oi[tt];ni=y+"["+tt+"]";switch(d.status)
{case"added":st=dt?kt[d.value]:a(n.utils.unwrapObservable(u),d.value,w);it=l(undefined,st,f,o,r,ni,v);
ct()||(it=n.utils.unwrapObservable(it));ht=k(n.utils.unwrapObservable(u),st,at);it===b?gt++:yt[ht-gt]=
it;at[ht]=!0;break;case"retained":st=dt?kt[d.value]:a(n.utils.unwrapObservable(u),d.value,w);it=a(r,
d.value,w);l(it,st,f,o,r,ni,v);ht=k(n.utils.unwrapObservable(u),st,at);yt[ht]=it;at[ht]=!0;break;case"deleted":
it=a(r,d.value,w)}ui.push({event:d.status,item:it})}r(yt);f[o]&&f[o].arrayChanged&&n.utils.arrayForEach(
ui,function(n){f[o].arrayChanged(n.event,n.item)})}else if(nt(u)){if(r=n.utils.unwrapObservable(r),!r)
{if(ct())return lt=pt(),rt()&&(lt=ft(lt)),lt;if(rt())return ft(lt);r={}}if(rt()&&(r=ft(r)),h.save(u,
r),rt())return r;g(u,function(t){var e=y.length?y+"."+t:t;if(n.utils.arrayIndexOf(f.ignore,e)==-1){if(
n.utils.arrayIndexOf(f.copy,e)!=-1){r[t]=u[t];return}if(typeof u[t]!="object"&&typeof u[t]!="array"&&
f.observe.length>0&&n.utils.arrayIndexOf(f.observe,e)==-1){r[t]=u[t];f.copiedProperties[e]=!0;return}
var o=h.get(u[t]),s=l(r[t],u[t],f,t,r,e,r),i=o||s;if(f.observe.length>0&&n.utils.arrayIndexOf(f.observe,
e)==-1){r[t]=n.utils.unwrapObservable(i);f.copiedProperties[e]=!0;return}n.isWriteableObservable(r[t])?
(i=n.utils.unwrapObservable(i),r[t]()!==i&&r[t](i)):(i=r[t]===undefined?i:n.utils.unwrapObservable(i),
r[t]=i);f.mappedProperties[e]=!0}})}else switch(t.getType(u)){case"function":rt()?n.isWriteableObservable(
u)?(u(ft(u)),r=u):r=ft(u):r=u;break;default:if(n.isWriteableObservable(r))return rt()?(ot=ft(r),r(ot),
ot):(ot=n.utils.unwrapObservable(u),r(ot),ot);if(ri=ct()||rt(),r=ct()?pt():n.observable(n.utils.unwrapObservable(
u)),rt()&&r(ft(r)),ri)return r}return r}function k(n,t,i){for(var r=0,u=n.length;r<u;r++)if(i[r]!==!0&&
n[r]===t)return r;return null}function d(i,r){var u;return r&&(u=r(i)),t.getType(u)==="undefined"&&(
u=i),n.utils.unwrapObservable(u)}function a(t,i,r){var u,e,f;for(t=n.utils.unwrapObservable(t),u=0,e=
t.length;u<e;u++)if(f=t[u],d(f,r)===i)return f;throw new Error("When calling ko.update*, the key '"+
i+"' was not found!");}function e(t,i){return n.utils.arrayMap(n.utils.unwrapObservable(t),function(
n){return i?d(n,i):n})}function g(n,i){var r,u;if(t.getType(n)==="array")for(r=0;r<n.length;r++)i(r)
else for(u in n)i(u)}function nt(n){var i=t.getType(n);return(i==="object"||i==="array")&&n!==null}function ft(
n,i,r){var u=n||"";return t.getType(i)==="array"?n&&(u+="["+r+"]"):(n&&(u+="."),u+=r),u}function et(
){var t=[],i=[];this.save=function(r,u){var f=n.utils.arrayIndexOf(t,r);f>=0?i[f]=u:(t.push(r),i.push(
u))};this.get=function(r){var u=n.utils.arrayIndexOf(t,r);return u>=0?i[u]:undefined}}function tt(){
var n={},t=function(t){var r,i;try{r=t}catch(u){r="$$$"}return i=n[r],i===undefined&&(i=new et,n[r]=
i),i};this.save=function(n,i){t(n).save(n,i)};this.get=function(n){return t(n).get(n)}}var it=!0,i="__ko_mapping__",
o=n.dependentObservable,v=0,s,h,w=["create","update","key","arrayChanged"],b={},f={include:["_destroy"],
ignore:[],copy:[],observe:[]},r=f;t.isMapped=function(t){var r=n.utils.unwrapObservable(t);return r&&
r[i]};t.fromJS=function(n){var t,r,u,f;if(arguments.length==0)throw new Error("When calling ko.fromJS, pass the object you want to convert.");
try{if(v++||(s=[],h=new tt),arguments.length==2&&(arguments[1][i]?r=arguments[1]:t=arguments[1]),arguments.
length==3&&(t=arguments[1],r=arguments[2]),r&&(t=c(t,r[i])),t=p(t),u=l(r,n,t),r&&(u=r),!--v)while(s.
length)f=s.pop(),f&&(f(),f.__DO.throttleEvaluation=f.throttleEvaluation);return u[i]=c(u[i],t),u}catch(e)
{v=0;throw e;}};t.fromJSON=function(i){var r=n.utils.parseJson(i);return arguments[0]=r,t.fromJS.apply(
this,arguments)};t.updateFromJS=function(){throw new Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");
};t.updateFromJSON=function(){throw new Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
};t.toJS=function(u,f){if(r||t.resetDefaultOptions(),arguments.length==0)throw new Error("When calling ko.mapping.toJS, pass the object you want to convert.");
if(t.getType(r.ignore)!=="array")throw new Error("ko.mapping.defaultOptions().ignore should be an array.");
if(t.getType(r.include)!=="array")throw new Error("ko.mapping.defaultOptions().include should be an array.");
if(t.getType(r.copy)!=="array")throw new Error("ko.mapping.defaultOptions().copy should be an array.");
return f=p(f,u[i]),t.visitModel(u,function(t){return n.utils.unwrapObservable(t)},f)};t.toJSON=function(
i,r){var u=t.toJS(i,r);return n.utils.stringifyJson(u)};t.defaultOptions=function(){if(arguments.length>
0)r=arguments[0];else return r};t.resetDefaultOptions=function(){r={include:f.include.slice(0),ignore:
f.ignore.slice(0),copy:f.copy.slice(0),observe:f.observe.slice(0)}};t.getType=function(n){if(n&&typeof
n=="object"){if(n.constructor===Date)return"date";if(n.constructor===Array)return"array"}return typeof
n};t.visitModel=function(r,u,f){var o,e,s;if(f=f||{},f.visitedObjects=f.visitedObjects||new tt,e=n.utils.
unwrapObservable(r),nt(e))f=p(f,e[i]),u(r,f.parentName),o=t.getType(e)==="array"?[]:{};else return u(
r,f.parentName);return f.visitedObjects.save(r,o),s=f.parentName,g(e,function(r){var h,c;if((!f.ignore||
n.utils.arrayIndexOf(f.ignore,r)==-1)&&(h=e[r],f.parentName=ft(s,e,r),n.utils.arrayIndexOf(f.copy,r)!==
-1||n.utils.arrayIndexOf(f.include,r)!==-1||!e[i]||!e[i].mappedProperties||e[i].mappedProperties[r]||
!e[i].copiedProperties||e[i].copiedProperties[r]||t.getType(e)==="array"))switch(t.getType(n.utils.unwrapObservable(
h))){case"object":case"array":case"undefined":c=f.visitedObjects.get(h);o[r]=t.getType(c)!=="undefined"?
c:t.visitModel(h,u,f);break;default:o[r]=u(h,f.parentName)}}),o}}),function(n){var t;(function(n){var
t;(function(n){var t;(function(){"use strict"})(t=n.ClassicComputeExtension||(n.ClassicComputeExtension=
{}))})(t=n.SharedModels||(n.SharedModels={}))})(t=n.Azure||(n.Azure={}))}(ExtensionCore||(ExtensionCore=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
n){var t;(function(n){"use strict";var o,s,t,i,r,u,f,e;n.definitionName="MicrosoftAzureClassicStorageExtension";
o=function(){function n(){this.storageServicePicker="StorageServicePicker";this.storageAccountPicker=
"StorageAccountPickerBlade";this.containerPicker="StorageContainerPickerBlade";this.blobPicker="StorageBlobPickerBlade"}
return n}();n.BladeNames=o;s=function(){function n(){this.StorageAccount=new e;this.Subscription=new
f;this.ResourceGroup=new u;this.Container=new r;this.Blob=new i}return n}();n.StorageServicePickerModel=
s;t=function(){function n(){this.accessPolicyPermissions=ko.observable();this.accessPolicyStart=ko.observable(
);this.accessPolicyExpiry=ko.observable();this.sharedAccessSignature=ko.observable()}return n}();n.SASParameters=
t;i=function(n){function t(){n.apply(this,arguments);this.name=ko.observable();this.url=ko.observable(
);this.blobType=ko.observable()}return __extends(t,n),t}(t);n.StorageBlobParameters=i;r=function(n){
function t(){n.apply(this,arguments);this.name=ko.observable();this.url=ko.observable();this.isNew=ko.
observable();this.newContainerName=ko.observable();this.newContainerAccessType=ko.observable()}return __extends(
t,n),t}(t);n.StorageContainerParameters=r;u=function(){function n(){this.name=ko.observable()}return n}
();n.ResourceGroupParameters=u;f=function(){function n(){this.subscriptionId=ko.observable()}return n}
();n.SubscriptionParameters=f;e=function(){function n(){this.id=ko.observable();this.name=ko.observable(
);this.location=ko.observable();this.accountType=ko.observable();this.isProvisioned=ko.observable();
this.isNew=ko.observable();this.newResourceGroup=ko.observable();this.newSubscriptionId=ko.observable(
);this.blobEndpoint=ko.observable();this.queueEndpoint=ko.observable();this.tableEndpoint=ko.observable(
);this.fileEndpoint=ko.observable()}return n}();n.StorageAccountParameters=e})(t=n.ClassicStorageExtension||
(n.ClassicStorageExtension={}))})(t=n.SharedModels||(n.SharedModels={}))})(t=n.Azure||(n.Azure={}))}
(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";function t(n,t){var r=
i(n,t);return MsPortalFx.Base.Net.ajax(r)}function r(n,t){var r=i(n,t);return MsPortalFx.Base.Net.cachedAjax(
r)}function u(n,i){return t(n,{data:i,type:"POST"})}function f(n,i){return t(n,{data:i,type:"PUT"})}
function e(n,i){return t(n,{data:i,type:"PATCH"})}function o(n){return t(n,{type:"DELETE"})}function s(
n,i){return t(n,{data:i,type:"GET"})}function i(n,t){n&&(n=MsPortalFx.Base.Resources.getAppRelativeUri(
n));t=h(t);t.url=n;var i=t;return i.uri=i.url,i}function h(t){return t?(t=$.extend({},n.defaultAjaxSettings,
t),t.traditional&&t.data&&(t.data=typeof t.data=="string"?t.data:ko.toJSON(t.data||{})),t):t}n.defaultAjaxSettings=
{cache:!1,contentType:"application/json",traditional:!0,setAuthorizationHeader:!0};n.ajax=t;n.cachedAjax=
r;n.post=u;n.put=f;n.patch=e;n.ajaxDelete=o;n.get=s})(t=n.Net||(n.Net={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){n[n.IgnoreCase=0]="IgnoreCase"}(StringComparison||(StringComparison={}));var StringEqualityComparer=
function(){function n(){}return n.IgnoreCase=function(n,t){return StringEx.equals(n,t,0)},n}(),StringComparer=
function(){function n(){}return n.IgnoreCase=function(n,t){return n=typeof n=="string"?n.toUpperCase(
):"",t=typeof t=="string"?t.toUpperCase():"",n.localeCompare(t)},n}(),StringEx=function(){function n(
){}return n.equals=function(n,t,i){return typeof n!="string"||typeof t!="string"?!1:(i===0&&(n=n.toUpperCase(
),t=t.toUpperCase()),n===t)},n.isStringInArray=function(t,i,r){return typeof t!="string"||!Array.isArray(
i)?!1:!!i.first(function(i){return n.equals(t,i,r)})},n.startsWith=function(n,t,i){return typeof n!=
"string"||typeof t!="string"?!1:(i===0&&(n=n.toUpperCase(),t=t.toUpperCase()),n.length>=t.length&&n.
indexOf(t)===0)},n.endsWith=function(n,t,i){return typeof n!="string"||typeof t!="string"?!1:(i===0&&
(n=n.toUpperCase(),t=t.toUpperCase()),n.length>=t.length&&n.indexOf(t,n.length-t.length)!==-1)},n.convertToStringMap=
function(n){var t={};return n.split(",").forEach(function(n){var i=n.split(":");i.length===2&&(t[i[0]]=
i[1])}),t},n}(),ExtensionCore;(function(n){var t;(function(t){"use strict";function u(n,t){var r=n.split(
""),f="",i,u;if(r.length)for(i=0;i<r.length;i++)u=r[i],u.match(t)&&(f+=u);return f}function r(n,t){for(
var i="",r=0;r<n;r++)i=i+String.fromCharCode(Math.floor(26*Math.random()+65));return t?i.toLowerCase(
):i}function f(n,t){for(var i="",u=0;u<n;u++)i=Math.random()<.5?i+r(1,t):i+Math.floor(Math.random()*
9).toString();return t?i.toLowerCase():i}function e(n,t){return n+Math.floor(Math.random()*(t-n+1))}
function o(){try{return"localStorage"in window&&window.localStorage!==null}catch(n){return!1}}function s(
n,t){MsPortalFx.Data.DataSet.mergeWithoutAtomization({value:n},{value:t})}function h(n){var t=i(ko.toJS(
n));return ko.isObservable(n)&&!ko.isObservable(t)&&(t=ko.observable(t)),t}function c(n,t){var r=$.Deferred(
),i=0,u=function(){i>=t.length&&r.resolve()};return t.forEach(function(t){var r=!1;t()!==undefined?(
i++,setTimeout(function(){u()})):t.subscribe(n,function(){r||(r=!0,i++,u())})}),r.promise()}function l(
n){return n&&n.value&&Array.isArray(n.value)?n.value:n}function a(n){if(!n)return"";if(n.responseJSON&&
n.responseJSON.Message)return n.responseJSON&&n.responseJSON.Message;if(n.responseJSON&&n.responseJSON.
message)return n.responseJSON&&n.responseJSON.message;var t;try{if(t=n.responseText&&JSON.parse(n.responseText).
Message,t)return t}catch(i){}try{if(t=n.responseText&&JSON.parse(n.responseText).message,t)return t}
catch(i){}return""}function v(n){var t=$.Deferred(),i=0;return n.length?n.forEach(function(r){r.always(
function(){i+=1;i>=n.length&&t.resolve()})}):t.resolve(),t.promise()}function y(n){var t=$.Deferred(
);return n.then(function(){t.resolve.apply(t,arguments)},function(){t.reject.apply(t,arguments)}),t.
promise()}function p(n){return $.Deferred().resolve(n).promise()}function w(n){var i=this,t=$.Deferred(
);return n.then(function(){var n=arguments;setTimeout(function(){t.resolve.apply(i,n)})},function(){
var n=arguments;setTimeout(function(){t.reject.apply(i,n)})}),t.promise()}function b(n,t,i){var r=$.
Deferred(),f=r.promise(),u;return n.done(function(){r.resolve.apply(this,arguments)}).fail(function(
){r.reject.apply(this,arguments)}),u=setTimeout(function(){r.reject.apply(r,i||[])},t*1e3),n.always(
function(){clearTimeout(u)}),f.timeoutId=u,f}function k(n){var t=n&&n.timeoutId;typeof t=="number"&&
clearTimeout(t)}function d(n,t){var i=$.Deferred(),r=0,u=function(){n().always(function(){r+=1}).done(
function(){i.resolve.apply(this,arguments)}).fail(function(){r>=t&&i.reject.apply(this,arguments);u(
)})};return u(),i.promise()}function g(n){n=n||"";var t=n.split("//"),r=t.length?t.last():"",i=r.split(
"/");return i.splice(0,1),i.join("/")}function nt(n,t,i){if(typeof n!="string")throw new TypeError("'str' must be of type 'string'");
return!!t.first(function(t){return StringEx.equals(n,t,i)})}function tt(n,t){var i=t*864e5,r=n.getTime(
)+i;return new Date(r)}function it(n,t){var i=t*864e5,r=n.getTime()-i;return new Date(r)}function rt(
t){var r=t.replace(/\s/g,"").toLowerCase(),u=n.Resources.Region,i=u[r];return i?i:t}function ut(n,t)
{var i=function(n,t){var r,u;for(r in n)if(!t.hasOwnProperty(r)||!!t[r]&&typeof t[r]=="object"&&!Array.
isArray(t[r])&&(u=i(ko.isObservable(n[r])?n[r]():n[r],t[r]),!u))return!1;return!0};return i(n,t)}function i(
n){var t,r,u;if(Array.isArray(ko.utils.unwrapObservable(n)))t=ko.observableArray(ko.utils.unwrapObservable(
n).map(function(n){return i(n)}));else if(MsPortalFx.Internal.Data.Shared.isObject(n)){t={};for(r in
n)n.hasOwnProperty(r)&&(u=i(n[r]),t[r]=ko.isObservable(u)?u:ko.observable(u))}else t=n;return t}t.FilterStringByRegex=
u;t.GenerateRandomString=r;t.GenerateRandomAlphaNumericString=f;t.getRandomInteger=e;t.supportsLocalStorage=
o;t.merge=s;t.cloneObservable=h;t.waitForObservables=c;t.parseValueArray=l;t.getXhrError=a;t.waitForPromises=
v;t.toJQueryPromise=y;t.convertToPromise=p;t.getNonBlockingPromise=w;t.getTimeoutPromise=b;t.clearTimeoutPromise=
k;t.callWithRetries=d;t.getUrlPath=g;t.isStringInArray=nt;t.dateAddDays=tt;t.dateSubtractDays=it;t.getRegionDisplayName=
rt;t.doInputsMatchModel=ut;t.mapItemIntoObservableProperties=i})(t=n.Utilities||(n.Utilities={}))})(
ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";var t=function(){function n(
n){if(this._isValueCreated=!1,!n)throw new Error("valueFactory cannot be null or undefined");this._valueFactory=
n}return Object.defineProperty(n.prototype,"value",{get:function(){return this._value||(this._value=
this._valueFactory(),this._isValueCreated=!0),this._value},enumerable:!0,configurable:!0}),Object.defineProperty(
n.prototype,"isValueCreated",{get:function(){return this._isValueCreated},enumerable:!0,configurable:
!0}),n}();n.Lazy=t})(t=n.Utilities||(n.Utilities={}))}(ExtensionCore||(ExtensionCore={})),function(n)
{var t;(function(t){"use strict";function i(n,t,i,u){var f=new r(n,t,i,u),e;return e=ko.computed(n,{
read:function(){return f.isLoaded()?f.observable():undefined},write:function(n){if(!f.isLoaded())throw new
Error("Cannot write a value to a shared observable until it has been fetched. Use the fetchPromise() function to wait until it has been fetched before writing a new value.");
f.observable(n)}}),$.extend(e,{waitForLoadToComplete:f.waitForLoadToComplete.bind(f),waitForValueToBeSet:
f.waitForValueToBeSet.bind(f),isLoaded:f.isLoaded}),f.load(),e}t.getSharedObservable=i;var r=function(
){function t(n,t,i,r){var u=this;this._isLoaded=ko.observable(!1);this._observableContainer=ko.observable(
undefined);this._isDisposed=!1;this._extensionName=t;this._observableName=i;this._args=r||[];this._lifetimeManager=
n;this.isLoaded=ko.pureComputed(function(){return u._isLoaded()})}return Object.defineProperty(t.prototype,
"observable",{get:function(){return this._observableContainer()},enumerable:!0,configurable:!0}),t.prototype.
dispose=function(){var n=this;this.isLoaded.dispose();this._loadPromise&&this._loadPromise.finally(function(
){n._serviceClient&&(n._serviceClient.dispose(),n._serviceClient=null)});this._isDisposed=!0},t.prototype.
load=function(){var t=this;if(this._isDisposed)throw new InvalidOperationError("object disposed: cannot call load method on disposed object");
return this._loadPromise||(this._loadPromise=this._getService().then(function(){return t._getObservable(
).then(function(){t._isLoaded(!0)})})),n.Utilities.getNonBlockingPromise(this._loadPromise)},t.prototype.
waitForLoadToComplete=function(t){var r=this,u=$.Deferred(),i=u.promise();return ko.reactor(this._lifetimeManager,
function(){r._isLoaded()&&u.resolve()}),typeof t=="number"&&t>0&&(i=n.Utilities.getTimeoutPromise(i,
t).fail(function(){r._logError("observable value not loaded after {0} seconds.".format(t))})),n.Utilities.
getNonBlockingPromise(i)},t.prototype.waitForValueToBeSet=function(t){var i=this,u=$.Deferred(),r=u.
promise();return ko.reactor(this._lifetimeManager,function(){if(i._isLoaded()){var n=i._observableContainer(
)();if(n===undefined||n&&n.isLoadedDeprecated===!1)return;u.resolve()}}),typeof t=="number"&&t>0&&(r=
n.Utilities.getTimeoutPromise(r,t).fail(function(){i._logError("observable value not set after {0} seconds.".
format(t))})),n.Utilities.getNonBlockingPromise(r)},t.prototype._getService=function(){var n=this;return MsPortalFx.
Extension.getService(this._extensionName,0,this._observableName).then(function(t){n._serviceClient=t}
,function(t){n._logError("MsPortalFx.Extension.getService failed with error: {0}".format(t&&t.message))}
)},t.prototype._getObservable=function(){var n=this;return this._serviceClient.getObservable.apply(this.
_serviceClient,this._args).then(function(t){n._observableContainer(t)},function(){n._logError("serviceClient.getObservable failed")}
)},t.prototype._logError=function(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"ExtensionCore.Communication",
"ExtensionCore.Communication: Error fetching '{0}' from '{1}': {2}".format(this._observableName,this.
_extensionName,n))},t}()})(t=n.Communication||(n.Communication={}))}(ExtensionCore||(ExtensionCore={
}));ObjectEx=function(){function n(){}return n.isObject=function(n){return n&&typeof n=="object"&&!(n
instanceof Date)&&!Array.isArray(n)},n}(),function(n){var t;(function(){"use strict";function n(n){return ObjectEx.
isObject(n)?t(n):Array.isArray(n)?i(n):JSON.stringify(n)}function t(t){var r=[],i,u;for(i in t)t.hasOwnProperty(
i)&&r.push({key:i,value:t[i]});return r.sort(function(n,t){return n.key<t.key?-1:1}),u=r.map(function(
t){return'"'+t.key+'":'+n(t.value)}),"{"+u.join(",")+"}"}function i(t){var i=t.map(function(t){return n(
t)});return"["+i.join(",")+"]"}JSON.stringifyOrdered||(JSON.stringifyOrdered=n)})(t=n.Polyfills||(n.
Polyfills={}))}(ExtensionCore||(ExtensionCore={}));ErrorBase=function(){function n(n){Error.apply(this,
arguments);this.name=this.constructor.prototype.name;this.message=n}return n}();ErrorBase.prototype=
Error.prototype;var InvalidOperationError=function(n){function t(){n.apply(this,arguments)}return __extends(
t,n),t}(ErrorBase),ArgumentError=function(n){function t(t,i){var r=i?ExtensionCore.Resources.reasonMessage.
format(i):"",u="'{0}'. {1}".format(t,r);n.call(this,ExtensionCore.Resources.Validation.invalidArgument.
format(u))}return __extends(t,n),t}(ErrorBase),AbstractMethodError=function(n){function t(t,i){n.call(
this,"cannot call abstract method {1} of class {0}. Make sure it is implemented in a derived class.".
format(t,i))}return __extends(t,n),t}(ErrorBase),ExtensionCore;(function(n){var t;(function(n){"use strict";
var t=432e5,i=function(){function n(n,t,i){this.pollingInterval=n;this.fastPollingInterval=typeof t==
"number"?t:n;this.slowPollingInterval=typeof i=="number"?i:n}return n.NoPolling=new n(t),n}();n.PollingIntervals=
i})(t=n.Data||(n.Data={}))})(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";
function r(){return t.pollingInterval}function u(){return t.fastPollingInterval}function f(){return t.
slowPollingInterval}function e(){t={pollingInterval:window.fx.environment.pollingInterval,fastPollingInterval:
window.fx.environment.fastPollingInterval,slowPollingInterval:window.fx.environment.slowPollingInterval};
MsPortalFx.Data.Loader.setPollingIntervals(null,t)}var i=432e5,t;n.NoPolling={pollingInterval:i,fastPollingInterval:
i,slowPollingInterval:i};n.getPollingInterval=r;n.getFastPollingInterval=u;n.getSlowPollingInterval=
f;e()})(t=n.Data||(n.Data={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";
function o(t,i,r,u){return n.Net.ajax(i,{type:t,headers:r,data:u})}function i(t,i,r,u){return n.Net.
cachedAjax(i,{type:t,headers:r,data:u})}function s(n,t,r,u,f){return i(f,t,u,r)}function h(t){var i=
n.Utilities.parseValueArray(t);return{data:i}}function c(n,t){var i=n._loadedCacheEntry();!n.loading(
)&&i&&i.data&&i.data.push(t)}function l(n,t){var i=n._loadedCacheEntry();!n.loading()&&i&&i.data&&i.
data.remove(t)}function r(t){typeof t.poll!="boolean"&&(t.poll=!0);t.pollInterval||(t.pollInterval=n.
Data.getSlowPollingInterval());typeof t.evictionDelay=="undefined"&&(t.evictionDelay=window.fx.environment.
cacheEvictionDelay);t.supplyData||(t.supplyData=i)}var e=function(n){function t(t){r(t);n.call(this,
t)}return __extends(t,n),t}(MsPortalFx.Data.EntityCache),u,f;MsPortalFx.Data.EntityCache=e;u=function(
n){function t(t){r(t);n.call(this,t)}return __extends(t,n),t}(MsPortalFx.Data.QueryCache);MsPortalFx.
Data.QueryCache=u;f=function(n){function t(t){this.config=t;r(this.config);this._isHttpPutOrPost()&&
this._setHttpPutOrPostConfigOptions(this.config);n.call(this,t)}return __extends(t,n),t.prototype.serializeParams=
function(t){if(this.config.serializeParams)return this.config.serializeParams(t);var i=n.prototype.serializeParams.
call(this,t)||"";return this._isHttpPutOrPost()&&t&&(i="{0} - {1}".format(i,JSON.stringifyOrdered(ko.
toJS(t)))),i.toUpperCase()},t.prototype._setHttpPutOrPostConfigOptions=function(){var t=this,n;this.
config.requestBody||(this.config.requestBody=function(n){return n});this.config.supplyData||(this.config.
supplyData=i);n=this.config.supplyData;this.config.supplyData=function(i,r,u,f,e){var o=t.config.requestBody(
e);return ObjectEx.isObject(o)&&(f=f||{},$.extend(f,o)),n(i,r,u,f,e)}},t.prototype._isHttpPutOrPost=
function(){var n=this.config.httpMethod||"GET";return!StringEx.equals(n,"GET",0)},t}(MsPortalFx.Data.
DataCacheLoader);t.DataCacheLoader=f;t.defaultSupplyDataNoCaching=o;t.defaultSupplyData=i;t.defaultFetchData=
s;t.processValueArrayServerResponse=h;t.addItemToQueryView=c;t.removeItemFromQueryView=l})(t=n.Data||
(n.Data={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";function u(
){var n=r.value;return n.waitForValueToBeSet(120).then(function(){return(n()&&n().subscriptions||[])
.slice()})}function f(){return t.getSubscriptionsAsync().then(function(n){return n.map(function(n){return n.
subscriptionID})})}function e(n){var i=$.Deferred();return t.getSubscriptionsAsync().done(function(t)
{var r=t.first(function(t){return t.subscriptionID===n});r||i.reject();i.resolve(r)}).fail(function(
){i.reject()}),i.promise()}function o(i,r,u,f){return t.getSubscriptionIdsAsync().then(function(t){return n.
Data.defaultSupplyData(i,r,u,$.extend({},f,{SubscriptionIds:t}))})}function s(t,r,u,f){return i(t,r,
u,f,function(t,i){var r=[];return i.forEach(function(t){var i=n.Utilities.parseValueArray(t);Array.prototype.
push.apply(r,i||[])}),r})}function h(t,r,u,f){return i(t,r,u,f,function(t,i){var r={};return i.forEach(
function(i,u){var f=t[u];r[f]=n.Utilities.parseValueArray(i)}),r})}function i(i,r,u,f,e){return t.getSubscriptionIdsAsync(
).then(function(t){var o=t.map(function(n){return r.format({subscriptionId:n})}),s=o.map(function(t)
{return n.Data.defaultSupplyDataNoCaching(i,t,u,f)}),h=Q.allSettled(s).then(function(n){return n.filter(
function(n){return n.state=="fulfilled"}).map(function(n){return n.value})}).then(function(n){return e(
t,n)});return n.Utilities.toJQueryPromise(h)})}var r=new n.Utilities.Lazy(function(){return n.Communication.
getSharedObservable(new MsPortalFx.Internal.Base.TriggerableLifetimeManager,"HubsExtension","Subscriptions")}
);t.getSubscriptionsAsync=u;t.getSubscriptionIdsAsync=f;t.getSubscriptionAsync=e;t.supplyDataWithSubscriptionIds=
o;t.supplyDataWithSubscriptionIdsParallel=s;t.supplyDataWithSubscriptionIdsParallelMap=h})(t=n.Csm||
(n.Csm={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";function t(
n,t,i){var r,u,f;if(t.indexOf("/")!==0&&(t="/"+t),r=n+t.replace("//","/"),i){u=[];for(f in i)u.push(
encodeURIComponent(f)+"="+encodeURIComponent(i[f]));r+="?"+u.join("&")}return r}function i(n){var r=
n.queryStringParameters||{},i;if(n.apiVersion||(n.apiVersion=window.fx.environment.csmApiVersion),r[
"api-version"]=n.apiVersion,i="",n.subscriptionId&&(i+="/subscriptions/{subscriptionId}"),n.resourceGroup)
{if(!n.subscriptionId)throw new ArgumentError("resourceGroup","A subscription id is required when setting resourceGroup");
i+="/resourcegroups/{resourceGroup}"}if(n.provider){if(!n.subscriptionId)throw new ArgumentError("provider",
"A subscription id is required when setting provider");i+="/providers/{provider}"}if(!n.resourceUriSegment)
throw new ArgumentError("resourceUriSegment","A resource uri segment must be defined");return i+="/{resourceUri}",
i=i.format({subscriptionId:n.subscriptionId,resourceGroup:n.resourceGroup,provider:n.provider,resourceUri:
n.resourceUriSegment}),t(window.fx.environment.csmManagementServiceUri,i,r)}n.getCorsUri=t;n.getCsmCorsUri=
i})(t=n.Cors||(n.Cors={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";
var i=function(){function i(n){this.options=n}return i.prototype.getResourceUri=function(n,i){var r=
$.extend({},this.options.baseQueryParameters||{},i||{});return t.getCorsUri(this.options.baseUri,n,r)}
,i.prototype.get=function(t,i){return n.Net.get(this.getResourceUri(t,i))},i.prototype.put=function(
t,i,r){return n.Net.put(this.getResourceUri(t,r),i)},i.prototype.delete=function(t,i){return n.Net.ajaxDelete(
this.getResourceUri(t,i))},i.prototype.patch=function(t,i,r){return n.Net.patch(this.getResourceUri(
t,r),i)},i.prototype.post=function(t,i,r){return n.Net.post(this.getResourceUri(t,r),i)},i}();t.RestClient=
i})(t=n.Cors||(n.Cors={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";
var i="2014-09-01",r=function(t){function r(){t.call(this,{baseUri:window.fx.environment.galleryServiceUri+
"/Microsoft.Gallery/galleryitems/",baseQueryParameters:{"api-version":i,includePreview:"true"}})}return __extends(
r,t),r.prototype.listAllGalleryItems=function(){return n.Net.get(this.getResourceUri(""))},r}(t.RestClient);
t.GalleryClient=r})(t=n.Cors||(n.Cors={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(
t){"use strict";var i=function(t){function i(n){var i=n;typeof i=="string"&&(i={baseUri:window.fx.environment.
csmManagementServiceUri,provider:arguments[0],type:arguments[1],apiVersion:arguments[2]});i.baseQueryParameters=
$.extend(i.baseQueryParameters||{},{"api-version":i.apiVersion});t.call(this,i)}return __extends(i,t),
i.prototype.getListUri=function(n,t){return this.getResourceUri("{0}/{1}".format(n,this.options.type),
t)},i.prototype.getListInSubscriptionUri=function(n,t){return this.getListUri("/subscriptions/{0}/providers/{1}".
format(n,this.options.provider),t)},i.prototype.getListInResourceGroupUri=function(n,t,i){return this.
getListUri("/subscriptions/{0}/resourceGroups/{1}/providers/{2}".format(n,t,this.options.provider),i)}
,i.prototype.getTemplatedListInSubscriptionUri=function(){return this.getListInSubscriptionUri("{subscriptionId}")}
,i.prototype.getTemplatedListInResourceGroupUri=function(){return this.getListInResourceGroupUri("{subscriptionId}",
"{resourceGroup}")},i.prototype.list=function(t,i){return n.Net.get(this.getListUri(t,i)).then(function(
t){return n.Utilities.parseValueArray(t)})},i.prototype.listInSubscription=function(t,i){return n.Net.
get(this.getListInSubscriptionUri(t,i)).then(function(t){return n.Utilities.parseValueArray(t)})},i.
prototype.listInResourceGroup=function(t,i,r){return n.Net.get(this.getListInResourceGroupUri(t,i,r)).
then(function(t){return n.Utilities.parseValueArray(t)})},i.prototype.action=function(t,i,r,u){return t[
t.length-1]!=="/"&&(t+="/"),t+=i,n.Net.post(this.getResourceUri(t,u),r)},i}(t.RestClient);t.CsmResourceClient=
i})(t=n.Cors||(n.Cors={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";
var i=function(){function i(t,i,r){this._hubsExtensionName="HubsExtension";this.subscriptionStepId="SubscriptionStep";
this._subscriptionPickerBlade="SubscriptionPickerBlade";this._originalSubscriptionValue=ko.observable(
"");this._editedSubscriptionValue=ko.observable("");this.subscriptionList=ko.observableArray([]);this.
resourceGroupStepId="ResourceGroupStep";this._resourceGroupPickerBlade="ResourceGroupPickerBlade";this.
_newResourceGroupBlade="CreateResourceGroupBlade";this._originalResourceGroupValue=ko.observable("");
this._editedResourceGroupValue=ko.observable("");this.resourceGroupList=ko.observableArray([]);this.
_createResourceGroup=!1;this.locationStepId="LocationStep";this._regionPickerBlade="RegionPickerBlade";
this._originalLocationValue=ko.observable("");this._editedLocationValue=ko.observable("");this._selectedLocation=
ko.observable();this._regions=ko.observableArray([]);this._subscriptionMappedRegions=ko.observable();
this.locationFilterReason=ko.observable(n.Resources.Create.Location.filtered);this.dataModel=ko.observable(
);this._valueConstrained={};this._stepState={};this.resourceGroupLocationFilter=ko.observable("");this.
resourceGroupFilterReason=ko.observable(n.Resources.Create.ResourceGroup.filteredSubscription);this.
_lifetimeManager=t;this._parentForm=i;var u={defaultToNewResourceGroup:!1,generateResourceGroupName:
!0,resourceGroupPrefix:"",newResourceGroupOnly:!1,regionsAllowed:[]};this._options=r?$.extend({},u,r):
u;this._initSelectors()}return i.prototype._initSelectors=function(){this.subscriptionStepSelector=new
MsPortalFx.ViewModels.Forms.Selector.ViewModel(this._lifetimeManager,{label:ko.observable(n.Resources.
Create.Subscription.title),selectedValue:{detailBlade:this._subscriptionPickerBlade,extension:this._hubsExtensionName,
detailBladeInputs:{}}});this.subscriptionStepSelector.defaultValue(undefined);this._valueConstrained[
this.subscriptionStepId]=!1;this._stepState[this.subscriptionStepId]=t.ChevronState.defaultValue;this.
resourceGroupStepSelector=new MsPortalFx.ViewModels.Forms.Selector.ViewModel(this._lifetimeManager,{
label:ko.observable(n.Resources.Create.ResourceGroup.title),selectedValue:{detailBlade:this._resourceGroupPickerBlade,
extension:this._hubsExtensionName,detailBladeInputs:{}}});this.resourceGroupStepSelector.defaultValue(
undefined);this._valueConstrained[this.resourceGroupStepId]=!1;this._stepState[this.resourceGroupStepId]=
t.ChevronState.defaultValue;this.locationStepSelector=new MsPortalFx.ViewModels.Forms.Selector.ViewModel(
this._lifetimeManager,{label:ko.observable(n.Resources.Create.Location.title),selectedValue:{detailBlade:
this._regionPickerBlade,extension:this._hubsExtensionName,detailBladeInputs:{}}});this.locationStepSelector.
defaultValue(undefined);this._valueConstrained[this.locationStepId]=!1;this._stepState[this.locationStepId]=
t.ChevronState.defaultValue;this._setupDisplayTextComputeds()},i.prototype.onInputsReceived=function(
t){var i=this;return this.dataModel(t),$.when(n.Csm.getSubscriptionsAsync(),n.Csm.getResourceGroupsAsync(
)).then(function(){for(var n=[],t=0;t<arguments.length;t++)n[+t]=arguments[t];if(n.length<2)throw new
Error("Results not of propper length");i.subscriptionList(n[0].slice());i.resourceGroupList(n[1]);(!i.
resourceGroupList().length||i._options.newResourceGroupOnly)&&(i._createResourceGroup=!0,i.resourceGroupStepSelector.
selectable.selectedValue({detailBlade:i._newResourceGroupBlade,extension:i._hubsExtensionName,detailBladeInputs:
{}}))})},i.prototype.setDefaultValues=function(t,i,r){var s=this,u,o,h,e,f,c;return this.subscriptionList(
)&&this.resourceGroupList()&&(o=this.resourceGroupList().first(function(i){var r=n.Csm.ResourceUri.parseResourceGroupId(
i.id);return!t.galleryParameters.resourceGroupName()||!t.galleryParameters.subscriptionId()?!0:r.subscriptionId===
t.galleryParameters.subscriptionId()&&r.name===t.galleryParameters.resourceGroupName()}),this._options.
defaultToNewResourceGroup||this._options.newResourceGroupOnly||!o?(e=null,t.galleryParameters.subscriptionId(
)&&(e=this.subscriptionList().first(function(i){return!StringEx.equals(i.status,n.Constants.SubscriptionStatus.
Disabled,0)&&StringEx.equals(i.subscriptionID,t.galleryParameters.subscriptionId(),0)})),e||(e=this.
subscriptionList().first(function(t){return t.status.toLowerCase()!==n.Constants.SubscriptionStatus.
Disabled.toLowerCase()})),f=e?e:this.subscriptionList().first(),t.galleryParameters.resourceGroupLocation(
)&&r&&(u=r[f.subscriptionID].first(function(n){return n.id===t.galleryParameters.resourceGroupLocation(
)})),u||(i?(u=i.first(function(n){return s._isRegionAllowed(n.id)}),u||(u=i.first())):r&&r[f.subscriptionID]&&
(u=r[f.subscriptionID].first(function(n){return s._isRegionAllowed(n.id)}),u||(u=r[f.subscriptionID].
first()))),t.galleryParameters.subscriptionId(f.subscriptionID),this._options.generateResourceGroupName&&
t.galleryParameters.resourceGroupName(this.getDefaultResourceGroupName(f.subscriptionID,this._options.
resourceGroupPrefix))):(h=n.Csm.ResourceUri.parseResourceGroupId(o.id),t.galleryParameters.resourceGroupName(
h.name),t.galleryParameters.subscriptionId(h.subscriptionId),i?(u=i.first(function(n){return StringEx.
equals(n.id,o.location,0)&&s._isRegionAllowed(n.id)}),u||(u=i.first())):r&&r[t.galleryParameters.subscriptionId(
)]&&(u=r[t.galleryParameters.subscriptionId()].first(function(n){return StringEx.equals(n.id,o.location,
0)&&s._isRegionAllowed(n.id)}),u||(u=r[t.galleryParameters.subscriptionId()].first()))),u&&(this._selectedLocation(
u),this.locationStepSelector.value(u.displayName),this._originalLocationValue(u.displayName),i&&!r?(
c={},this.subscriptionList().forEach(function(n){c[n.subscriptionID]=i}),this._subscriptionMappedRegions(
c)):this._subscriptionMappedRegions(r))),u},i.prototype.setDefaultValuesWithLocation=function(t,i,r)
{var f={},u,e;for(u in r)f[u]=[],e=r[u],Array.isArray(e)&&e.forEach(function(t){f[u].push({id:t,displayName:
n.Resources.Region[t.toLowerCase()]})});return this.setDefaultValues(t,i,f)},i.prototype._setupDisplayTextComputeds=
function(){var t=this;this.subscriptionStepSelector.displayText=ko.pureComputed(function(){return t.
dataModel&&t.dataModel()&&t.dataModel().galleryParameters.subscriptionId()?t._getSubscriptionName():
n.Resources.loading});this.resourceGroupStepSelector.displayText=ko.pureComputed(function(){return t.
dataModel&&t.dataModel()&&t.dataModel().galleryParameters.resourceGroupName()?t.dataModel().galleryParameters.
resourceGroupName():n.Resources.loading});this.locationStepSelector.displayText=ko.pureComputed(function(
){return t.locationStepSelector.value()?n.Utilities.getRegionDisplayName(t.locationStepSelector.value(
)):n.Resources.loading})},i.prototype.getSubscriptionStepInputsV=function(){var t=new HubsExtension.
Azure.SubscriptionPickerDataModel,n={};return t.subscriptionPicker.subscriptionId(this.dataModel().galleryParameters.
subscriptionId()),t.subscriptionPicker.subscriptionName(this._getSubscriptionName()),n.inputParameters=
MsPortalFx.ViewModels.ParameterCollectionV2.Utilities.modelToParameters(t),n.inputMetadata={},n.options=
{},n},i.prototype.getSubscriptionStepInputs=function(){var n=new HubsExtension.Azure.SubscriptionPickerDataModel,
t=new MsPortalFx.ViewModels.ParameterCollection.ParameterCollectionInput;return n.subscriptionPicker.
subscriptionId(this.dataModel().galleryParameters.subscriptionId()),n.subscriptionPicker.subscriptionName(
this._getSubscriptionName()),t.inputParameters=MsPortalFx.ViewModels.ParameterCollection.Models.modelToParameters(
n),t},i.prototype._getSubscriptionName=function(){var t=this,n;return this.dataModel&&this.dataModel(
)&&this.dataModel().galleryParameters.subscriptionId()&&(n=this.subscriptionList().first(function(n)
{return n.subscriptionID===t.dataModel().galleryParameters.subscriptionId()}),n)?n.subscriptionName:
null},i.prototype.setSubscriptionStepOutputs=function(i){var f=this,e=i.outputParameters||i,r=e.subscriptionPicker.
subscriptionId,o=this.subscriptionList().first(function(n){return n.subscriptionID===r}),u;this.dataModel(
).galleryParameters.subscriptionId(r);this.subscriptionStepSelector.value(r);this._ensureCorrectRegionIsSet(
r);this._stepState[this.subscriptionStepId]=t.ChevronState.existingValue;this._valueConstrained[this.
resourceGroupStepId]=!0;this._stepState[this.resourceGroupStepId]!==t.ChevronState.defaultValue||this.
_options.newResourceGroupOnly||(u=this.resourceGroupList().first(function(t){var i=n.Csm.ResourceUri.
parseResourceGroupId(t.id);return i.subscriptionId===r&&i.name===f.dataModel().galleryParameters.resourceGroupName(
)}),u||(u=this.resourceGroupList().first(function(t){var i=n.Csm.ResourceUri.parseResourceGroupId(t.
id);return i.subscriptionId===r})),u?this.dataModel().galleryParameters.resourceGroupName(u.name):this.
_options.generateResourceGroupName&&this.dataModel().galleryParameters.resourceGroupName(this.getDefaultResourceGroupName(
r,this._options.resourceGroupPrefix)))},i.prototype.getResourceGroupStepInputsV=function(){var n={},
t=new HubsExtension.Azure.ResourceGroupPickerDataModel,i=new HubsExtension.Azure.ResourceGroupDataModel,
r=this.resourceGroupList().length===0,u=r?"resourceGroup":"resourceGroupPicker";return r?(i.resourceGroup.
resourceGroupName(this.dataModel().galleryParameters.resourceGroupName()),i.resourceGroup.subscriptionId(
this.dataModel().galleryParameters.subscriptionId()),n.inputParameters=MsPortalFx.ViewModels.ParameterCollection.
Models.modelToParameters(i)):(t.resourceGroupPicker.isNewResourceGroup(this._createResourceGroup?"true":
"false"),t.resourceGroupPicker.resourceGroupName(this.dataModel().galleryParameters.resourceGroupName(
)),t.resourceGroupPicker.subscriptionId(this.dataModel().galleryParameters.subscriptionId()),n.inputParameters=
MsPortalFx.ViewModels.ParameterCollectionV2.Utilities.modelToParameters(t),n.inputMetadata={},n.options=
{},n.options[u]={},n.options[u].filterPickerItems=this._getResourceGroupFilters()),n},i.prototype.getResourceGroupStepInputs=
function(){var n=new MsPortalFx.ViewModels.ParameterCollection.ParameterCollectionInput,t=new HubsExtension.
Azure.ResourceGroupPickerDataModel,i=new HubsExtension.Azure.ResourceGroupDataModel,r=this.resourceGroupList(
).length===0,u=r?"resourceGroup":"resourceGroupPicker";return r?(i.resourceGroup.resourceGroupName(this.
dataModel().galleryParameters.resourceGroupName()),i.resourceGroup.subscriptionId(this.dataModel().galleryParameters.
subscriptionId()),n.inputParameters=MsPortalFx.ViewModels.ParameterCollection.Models.modelToParameters(
i)):(t.resourceGroupPicker.isNewResourceGroup(this._createResourceGroup?"true":"false"),t.resourceGroupPicker.
resourceGroupName(this.dataModel().galleryParameters.resourceGroupName()),t.resourceGroupPicker.subscriptionId(
this.dataModel().galleryParameters.subscriptionId()),n.inputParameters=MsPortalFx.ViewModels.ParameterCollection.
Models.modelToParameters(t),n.options[u]={},n.options[u].filterPickerItems=this._getResourceGroupFilters(
)),n},i.prototype.setResourceGroupStepOutputs=function(i){var r=i.outputParameters||i,u=this.resourceGroupList(
).length===0,f=u?"resourceGroup":"resourceGroupPicker",e=r[f].resourceGroupName,o=r[f].subscriptionId,
s=r[f].isNewResourceGroup,h;return this.dataModel().galleryParameters.resourceGroupName(e),this.resourceGroupStepSelector.
value(e),u||s.toLowerCase()==="true"?(this._createResourceGroup=!0,this._stepState[this.resourceGroupStepId]=
t.ChevronState.newValue):(this._createResourceGroup=!1,h=this.resourceGroupList().first(function(t){
var i=n.Csm.ResourceUri.parseResourceGroupId(t.id);return t.name===e&&i.subscriptionId===o}),this._valueConstrained[
this.resourceGroupStepId]||(this.dataModel().galleryParameters.subscriptionId(o),this.subscriptionStepSelector.
locked(!0),this.subscriptionStepSelector.lockedBalloonText(n.Resources.Create.Subscription.lockedResourceGroup),
this._valueConstrained[this.subscriptionStepId]=!0,this._ensureCorrectRegionIsSet(o)),this._stepState[
this.resourceGroupStepId]=t.ChevronState.existingValue),u||s.toLowerCase()==="true"},i.prototype.lockResourceGroupStep=
function(n,t){this.resourceGroupStepSelector.locked(!0);t&&this.resourceGroupStepSelector.lockedBalloonText(
t);this.resourceGroupStepSelector.value(n);this.dataModel().galleryParameters.resourceGroupName(n)},
i.prototype.lockSubscriptionStep=function(n,t){this.subscriptionStepSelector.locked(!0);t&&this.subscriptionStepSelector.
lockedBalloonText(t);this.subscriptionStepSelector.value(n);this.dataModel().galleryParameters.subscriptionId(
n);this._ensureCorrectRegionIsSet(n)},i.prototype.lockLocationStep=function(n,t,i){if(this.locationStepSelector.
locked(!0),i&&this.locationStepSelector.lockedBalloonText(i),this._subscriptionMappedRegions&&this._subscriptionMappedRegions(
)){var r=this._subscriptionMappedRegions()[this.dataModel().galleryParameters.subscriptionId()].first(
function(n){return StringEx.equals(n.id,t.toLowerCase().replace(/\s/g,""))});r&&(n(r.id),this.locationStepSelector.
value(r.displayName))}},i.prototype.getDefaultResourceGroupName=function(t,i){var f,e;if(this.dataModel(
)&&this.dataModel().galleryParameters.resourceGroupName())return this.dataModel().galleryParameters.
resourceGroupName();if(!t)throw Error("To get a default resource group name, a subscription id must be set");
i=i?i+"-":"";for(var o=this.resourceGroupList().filter(function(i){var r=n.Csm.ResourceUri.parseResourceGroupId(
i.id);return r.subscriptionId===t}),r=0,u="";!u;)f=r===0?i+"Group":"{0}Group-{1}".format(i,r),e=o.first(
function(n){return n.name===f}),e||(u=f),r++;return u},i.prototype.getResourceGroupLocation=function(
t){var i=this,r=this.resourceGroupList().first(function(t){var r=n.Csm.ResourceUri.parseResourceGroupId(
t.id);return r.name===i.dataModel().galleryParameters.resourceGroupName()&&r.subscriptionId===i.dataModel(
).galleryParameters.subscriptionId()});return r?r.location:t?n.Csm.getResourceGroupLocation(t):n.Csm.
getResourceGroupLocation(this._selectedLocation().id)},i.prototype._getResourceGroupFilters=function(
){var i=this,r=this._stepState[this.subscriptionStepId]!==t.ChevronState.defaultValue?this.dataModel(
).galleryParameters.subscriptionId():null;return this.resourceGroupList().filter(function(t){var u=n.
Csm.ResourceUri.parseResourceGroupId(t.id);return i.resourceGroupLocationFilter()?r?r!==u.subscriptionId&&
t.location!==i.resourceGroupLocationFilter():t.location!==i.resourceGroupLocationFilter():r&&r!==u.subscriptionId}
).map(function(t){return{id:{resourceGroupName:t.name,subscriptionId:n.Csm.ResourceUri.parseResourceGroupId(
t.id).subscriptionId},reason:i.resourceGroupFilterReason()}})},i.prototype.setAllowedLocations=function(
n){this._options.regionsAllowed=n},i.prototype._isRegionAllowed=function(n){return this._options.regionsAllowed?
this._options.regionsAllowed.indexOf(n)>=0:!0},i.prototype._getLocationFilters=function(){var t=this,
n,i,r;if(!this._options.regionsAllowed||this._options.regionsAllowed.length===0)return[];n=[];for(i in
this._subscriptionMappedRegions())r=this._subscriptionMappedRegions()[i],r.forEach(function(i){t._isRegionAllowed(
i.id)||n.push({id:i.id,reason:t.locationFilterReason()})});return n},i.prototype._ensureCorrectRegionIsSet=
function(n){var t=this,i=this._subscriptionMappedRegions()[n],r=i.first(function(n){return t._selectedLocation(
)&&StringEx.equals(n.id,t._selectedLocation().id)});this._selectedLocation()&&r||this._selectedLocation(
i.first());this.locationStepSelector.value(this._selectedLocation().displayName)},i.prototype.getLocationStepInputsV=
function(){var n={},t={};return n.regionPicker={},n.regionPicker.pickerItems=this._subscriptionMappedRegions(
)[this.dataModel().galleryParameters.subscriptionId()],n.regionPicker.filterPickerItems=this._getLocationFilters(
),t.inputMetadata={},t.options=n,t.inputParameters={regionPicker:{regionId:this._selectedLocation().
id}},t},i.prototype.getLocationStepInputs=function(){var n={},t=new MsPortalFx.ViewModels.ParameterCollection.
ParameterCollectionInput;return n.regionPicker={},n.regionPicker.pickerItems=this._subscriptionMappedRegions(
)[this.dataModel().galleryParameters.subscriptionId()],n.regionPicker.filterPickerItems=this._getLocationFilters(
),t.options=n,t.inputParameters={regionPicker:{regionId:this._selectedLocation().id}},t},i.prototype.
setLocationCommits=function(n){var i=n.outputParameters||n,r=i.regionPicker.regionId;return this._selectedLocation(
this._subscriptionMappedRegions()[this.dataModel().galleryParameters.subscriptionId()].first(function(
n){return n.id===r})),this.locationStepSelector.value(this._selectedLocation().displayName),this._stepState[
this.locationStepId]=t.ChevronState.existingValue,this._selectedLocation()},i}();t.GenericCreateSteps=
i})(t=n.Create||(n.Create={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";
var u=function(){function n(){this.createOptions=new t}return n}(),t,i,r;n.BaseWizardModel=u;t=function(
){function n(){this.selectedTemplateId=ko.observable("");this.subscriptionId=ko.observable("");this.
resourceGroupName=ko.observable("");this.resourceGroupLocation=ko.observable("");this.resourceProviders=
ko.observable("");this.primaryResourceId=ko.observable("")}return n}();n.CreateOptions=t;i=function(
){function n(){}return n.defaultValue="Default",n.newValue="New",n.existingValue="Existing",n}();n.ChevronState=
i;r=function(){function n(n,t){this.id=n;this.displayName=t}return n}();n.RegionPickerObject=r})(t=n.
Create||(n.Create={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";
function u(u,e){e===void 0&&(e=1e4);var o=Q.defer(),s=i(u.resourceProviders,u.subscriptionId),h=r(u.
subscriptionId,u.resourceGroupName,u.resourceGroupLocation);return Q.all([s,h]).then(function(){var i=
t.deployUrlTemplate.format(window.fx.environment.csmManagementServiceUri,u.subscriptionId,u.resourceGroupName,
u.deploymentName,window.fx.environment.csmApiVersion);n.Net.put(i,{properties:{mode:"incremental",parameters:
f(u.parameters),template:JSON.parse(u.templateJson)}}).then(function(t){o.notify(t.properties);n.Utilities.
setPollingQ(function(){return n.Net.get(i)},function(n){return StringEx.equals(n.properties.provisioningState,
"Succeeded",0)?{response:n,status:0}:StringEx.equals(n.properties.provisioningState,"Failed",0)||StringEx.
equals(n.properties.provisioningState,"Canceled",0)?{response:n,error:n,status:1}:{status:2}},e).then(
function(n){o.resolve(n.properties)}).catch(function(n){o.reject(n.properties)})}).catch(function(n)
{o.reject(n)})}).catch(function(n){o.reject(n)}),o.promise}function i(i,r){var u=Q.defer(),f=[];return i&&
i.length?(i.forEach(function(i){f.push(n.Net.post(t.registerUrlTemplate.format(window.fx.environment.
csmManagementServiceUri,r,i,window.fx.environment.csmApiVersion)))}),Q.all(f).finally(function(){u.resolve(
)})):u.resolve(),u.promise}function r(i,r,u){var f=Q.defer(),e=t.resourceGroupUrlTemplate.format(window.
fx.environment.csmManagementServiceUri,i,r,window.fx.environment.csmApiVersion);return n.Net.get(e).
then(function(n){f.resolve(n)}).catch(function(){n.Net.put(e,{location:u}).then(function(n){f.resolve(
n)}).catch(function(n){f.reject(n)})}),f.promise}function f(n){var t={};return Object.keys(n).forEach(
function(i){var r=n[i];t[i]=r.hasOwnProperty("value")?r:{value:r}}),t}t.registerUrlTemplate="{0}/subscriptions/{1}/providers/{2}/register?api-version={3}";
t.resourceGroupUrlTemplate="{0}/subscriptions/{1}/resourcegroups/{2}?api-version={3}";t.deployUrlTemplate=
"{0}/subscriptions/{1}/resourcegroups/{2}/deployments/{3}?api-version={4}";t.deployTemplate=u;t.registerProviders=
i;t.createResourceGroup=r})(t=n.Csm||(n.Csm={}))}(ExtensionCore||(ExtensionCore={})),function(n){var
t;(function(){"use strict"})(t=n.Csm||(n.Csm={}))}(ExtensionCore||(ExtensionCore={})),function(n){var
t;(function(t){"use strict";function u(n){var i={},t=$.Deferred(),r=[];for(var u in n)r.push(f(n,u,i));
return Q.all(r).then(function(){t.resolve(i)},function(){t.reject()}),t.promise()}function f(t,i,r){
return n.Net.ajax(t[i],{setAuthorizationHeader:!1}).then(function(n){var f=n.content||n,t=i.split("."),
u=i;t&&t.length>1&&(u=t[0]+"_"+t[1]);r[u]=JSON.stringify(f)})}var r=function(){function n(){}return n.
replace="replace",n.arrayPush="arraypush",n}(),i;t.FragmentParameterAction=r;i=function(){function n(
){}return n.powershell="powershell",n}();t.FragmentParameterEscape=i;t.getFragmentStrings=u})(t=n.Csm||
(n.Csm={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";function i(
n,t,i,u){for(var e=[],f=0;f<n.length;f++)e.push(r(n[f],t,i,u));return Q.allSettled(e).then(function(
n){for(var i,t=0;t<n.length;t++)if(n[t].state==="fulfilled"){if(n[t].value.isOver)return{isOver:n[t].
value.isOver,message:n[t].value.overQuotaMessage}}else i=n[t].reason,MsPortalFx.Base.Diagnostics.Log.
writeEntry(2,"ExtensionCore.validateQuotas","failed to check resource quotas: "+i);return{isOver:!1}}
)}function r(n,t,i,r){return n(r,i).then(function(i){var u,r,f;if(i&&Object.keys(i).length>0){if(u=Object.
keys(i)[0],r=t.first(function(n){return n.name()===u}),r){if(r.maxCount()==="-1")return{isOver:!1};if(
+r.currentCount()+ +i[u]>+r.maxCount())return f=+r.maxCount()-+r.currentCount(),f<0&&(f=0),{isOver:!0,
overQuotaMessage:i.overQuotaMessage.format(i[u],f,r.maxCount())}}return{isOver:!1}}return MsPortalFx.
Base.Diagnostics.Log.writeEntry(2,"ExtensionCore.isOverQuota","unable to get number of required resources: requiredResources:"+
i+" - quotas:"+t.join()+" - func:"+n),{isOver:!1}},function(){return MsPortalFx.Base.Diagnostics.Log.
writeEntry(2,"ExtensionCore.isOverQuota","unable to get number of required resources: quotas:"+t.join(
)+" - func:"+n),{isOver:!1}})}var t={name:"quotaMetadata",properties:{name:null,currentCount:null,maxCount:
null},entityType:!0,idProperties:["name"]};MsPortalFx.Data.Metadata.setTypeMetadata(t.name,t);n.validateQuotas=
i})(t=n.Csm||(n.Csm={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(){"use strict"}
)(t=n.Csm||(n.Csm={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";
var t=function(){function t(n){var t=this,i,r;this.dependsOnIgnore={};this._parametersAdded={};this.
_computedCalculated={};this._conditionsAdded={};this._fragment=JSON.parse(n);this._fragment.computeds&&
this._fragment.computeds.forEach(function(n){t._computedCalculated[n.paths[0]]=undefined});i=[];for(
r in this._fragment.parameters)i.push(r);this.parameters={};i.forEach(function(n){Object.defineProperty(
t.parameters,n,{get:function(){return t._getParameterValue(n)},set:function(i){t._addParameter(n,i)}
})})}return t.prototype.getResource=function(){var t=this;for(var n in this._fragment.parameters)if(
this._fragment.parameters[n].required&&this._parametersAdded[n]===undefined)throw new Error("Required parameter {0} was missing".
format(n));return this._fragment.resource.resources&&this._fragment.resource.resources.length&&this.
_fragment.resource.resources.forEach(function(n){n.dependsOn||(n.dependsOn=[]);var i=t.getDependsOnId(
);n.dependsOn.indexOf(i)===-1&&n.dependsOn.push(i)}),this._fragment.computeds&&this._fragment.computeds.
forEach(function(n){if(n.required&&t._computedCalculated[n.paths[0]]===undefined)throw new Error("A required computed was not calculated");
}),this._fragment.resource},t.prototype._getParameterValue=function(n){return this._parametersAdded[
n]},t.prototype._addParameter=function(t,i){var r=this;if(this._parametersAdded[t]=i,!this._fragment.
parameters[t])throw new Error("The parameter named {0} does not exist".format(t));if(this._fragment.
parameters[t].condition&&this._conditionsAdded[this._fragment.parameters[t].condition.name]!==this._fragment.
parameters[t].condition.value)throw new Error("Can't add parameter named {0} until the conditional named {1} is set to {2}".
format(t,this._fragment.parameters[t].condition.name,this._fragment.parameters[t].condition.value));
this._fragment.parameters[t].paths.forEach(function(u){var f=r._fragment.parameters[t].action?r._fragment.
parameters[t].action:n.FragmentParameterAction.replace,e=r._fragment.parameters[t].escape;r._setValueOnPath(
u.split("."),r._fragment.resource,i,f,e)});this._calculateComputeds()},t.prototype.setConditional=function(
t,i){if(!this._fragment.conditionals)throw new Error("No conditionals for this fragment");if(!this._fragment.
conditionals[t])throw new Error("No conditional named {0} for this fragment".format(t));if(!this._fragment.
conditionals[t][i])throw new Error("No conditionals value of {0} for condition {1}".format(i,t));var
r=this._fragment.conditionals[t][i];this._setValueOnPath(r.path.split("."),this._fragment.resource,r.
resource,n.FragmentParameterAction.replace);this._conditionsAdded[t]=i},t.prototype.getDependsOnId=function(
){var n=this._fragment.resource.type.split("/"),r=this._fragment.resource.name.split("/"),i,t;if(n.length!==
r.length+1)throw new Error("Fragment type and name are malformed: Type: '{0}', Name: '{1}'".format(this.
_fragment.resource.type,this._fragment.resource.name));if(n.length<2)throw new Error("Fragment type is malformed. '{0}'".
format(this._fragment.resource.type));for(i="{0}/{1}/{2}".format(n[0],n[1],r[0]),t=2;t<n.length;t++)
i=i+"/{0}/{1}".format(n[t],r[t-1]);return i},t.prototype.getResourceId=function(n,t){var i=this.getDependsOnId(
);return n&&t?"/subscriptions/{0}/resourcegroups/{1}/providers/{2}".format(n,t,i):"[concat(resourceGroup().id, '/providers/{0}')]".
format(i)},t.prototype.dependsOn=function(n){this.addDependsOn(n.getDependsOnId())},t.prototype.addRelatedTag=
function(n){this.addTag("hidden-related:{0}".format(n),"Resource")},t.prototype.addLinkTag=function(
n){this.addTag("hidden-link:{0}".format(n),"Resource")},t.prototype.addTag=function(n,t){this._fragment.
resource.tags||(this._fragment.resource.tags={});this._fragment.resource.tags[n]=t},t.prototype.getReferenceTag=
function(n,t){var r=this.getDependsOnId(),i="reference('{0}')";return t&&(i=i+"."+t),n&&(i="["+i+"]"),
i.format(r)},t.prototype._calculateComputeds=function(){var t=this;this._fragment.computeds&&this._fragment.
computeds.forEach(function(i){var r;if(i.required&&i.condition&&t._conditionsAdded[i.condition.name]!==
i.condition.value)throw new Error("A computed value is required, and requires that condition {0} be set to value {1}".
format(i.condition.name,i.condition.value));if(!i.condition||t._conditionsAdded[i.condition.name]===
i.condition.value){var e=i.template.match(/{[^{|^}]+}/g).map(function(n){return n.substring(1,n.length-
1)}),u=!0,f={};e.forEach(function(n){var i,r;if(t._parametersAdded[n]){if(i=t.parameters[n],typeof i!=
"string")throw new Error("A computed required parameter {0}, which was not a string".format(n));r=t.
_fragment.parameters[n].escape;i=t._escapeIfNecessary(i,r);f[n]=i}else u=!1});u&&(r=i.template.format(
f),i.paths.forEach(function(i){t._setValueOnPath(i.split("."),t._fragment.resource,r,n.FragmentParameterAction.
replace)}),t._computedCalculated[i.paths[0]]=r)}})},t.prototype.addDependsOn=function(n,t){this._fragment.
resource.dependsOn||(this._fragment.resource.dependsOn=[]);this._fragment.resource.dependsOn.indexOf(
n)===-1&&(t&&(this.dependsOnIgnore[n]=!0),this._fragment.resource.dependsOn.push(n))},t.prototype._setValueOnPath=
function(t,i,r,u,f){for(var o,h,e,l,s,c=0;c<t.length-1;c++)o=t[c],o.match(/[0-9]+(?=\])/g)?(h=o.match(
/[0-9]+(?=\])/g),l=".*(?=",h.forEach(function(){l+="\\[[0-9]\\]"}),l+=")",e=o.match(l)[0],i=i[e],h.forEach(
function(n){if(Array.isArray(i)){var t=parseInt(n,10);if(t>=i.length)throw new Error("Out of range. Tried to access index {0} on an array of length {1}".
format(t,i.length));i=i[parseInt(n,10)]}else throw new Error("Tried to index an array that is not an array.");
})):(i[o]||(i[o]={}),i=i[o]);if(r=this._escapeIfNecessary(r,f),t[t.length-1].match(/[0-9]+(?=\])/g))
{if(h=t[t.length-1].match(/[0-9]+(?=\])/g),e=t[t.length-1].match(/.*(?=\[)/)[0],h.length>1)throw new
Error("The final path can only contain 1 array index");if(s=parseInt(h[0],10),!Array.isArray(i[e]))throw new
Error("Tried to index an array that is not an array");if(s>=i[e].length)throw new Error("Out of range. Tried to access index {0} on an array of length {1}".
format(s,i[e].length));StringEx.equals(u,n.FragmentParameterAction.replace,0)?i[e][s]=r:StringEx.equals(
u,n.FragmentParameterAction.arrayPush,0)&&(Array.isArray(i[e][s])||(i[e][s]=[]),i[e][s].push(r))}else
StringEx.equals(u,n.FragmentParameterAction.replace,0)?i[t[t.length-1]]=r:StringEx.equals(u,n.FragmentParameterAction.
arrayPush,0)&&(Array.isArray(i[t[t.length-1]])||(i[t[t.length-1]]=[]),i[t[t.length-1]].push(r))},t.prototype.
_escapeIfNecessary=function(t,i){return typeof t=="string"&&StringEx.equals(i,n.FragmentParameterEscape.
powershell,0)&&(t=t.replace(/`/g,"``"),t=t.replace(/"/g,'`"'),t=t.replace(/'/g,"`'")),t},t}();n.Fragment=
t})(t=n.Csm||(n.Csm={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";
var t=function(){function n(){}return n.isCapability=function(n){if(n){var t=n.split("/");if(t&&t.length===
7)return t[0]===""&&t[1].toUpperCase()==="subscriptions".toUpperCase()&&t[2]!==""&&t[3].toUpperCase(
)==="providers".toUpperCase()&&t[4]!==""&&t[5].toUpperCase()==="capabilities".toUpperCase()&&t[6]!==
""}return!1},n.parseCapabilityId=function(t){if(t&&n.isCapability(t)){var i=t.split("/");return{subscription:
i[2],provider:i[4],location:i[6]}}},n}();n.CapabilityUri=t})(t=n.Csm||(n.Csm={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(n){"use strict";var t=function(){function n(){this._resources=[];this.
_template={$schema:"http://schema.management.azure.com/schemas/2014-04-01-preview/deploymentTemplate.json#",
contentVersion:"1.0.0.0",parameters:{},resources:[]}}return n.prototype.addFragment=function(n){this.
_resources.push(n)},n.prototype.addResource=function(n){this._template.resources.push(n)},n.prototype.
addParameter=function(n,t){if(this._template.parameters[n])throw new Error("Parameter {0} is already added".
format(n));this._template.parameters[n]=t},n.prototype.addOutput=function(n,t,i){this._template.outputs||
(this._template.outputs={});this._template.outputs[n]={type:t,value:i}},n.prototype.generateTemplate=
function(){var t=this,n={};return this._resources.forEach(function(i){n[i.getDependsOnId()]=!0;t._template.
resources.push(i.getResource());for(var r in i.dependsOnIgnore)n[r]=!0}),this._template.resources.forEach(
function(t){t.dependsOn&&t.dependsOn.forEach(function(i){if(!n[i])throw new Error("{0}/{1} depends on {2}, but it was not present in the template".
format(t.type,t.name,i));})}),JSON.stringify(this._template)},n}();n.TemplateFactory=t})(t=n.Csm||(n.
Csm={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";var i=function(
i){function r(t){if(i.call(this,t),this._atomizedDataSetCache=new n.Internal.RefCountCache,!t.entityTypeName)
throw new Error("AtomizedDataCacheLoader: atomized data caches must specify an entityTypeName. Make sure that config.entityTypeName is a valid TypeMetadata name, or the cache will have undefined behavior when merging data.");
this._dataSetParams={}}return __extends(r,i),r.prototype.loadDataSetForParams=function(n,r,u){var e=
this,h,o,f,s;return this._dataSetParams[n]=r,h=this.config.entityTypeName!==undefined?MsPortalFx.Data.
Loader.getDataSet(n,this.config.entityTypeName):MsPortalFx.Data.Loader.getDataSet(n,!0),o=this._atomizedDataSetCache.
getOrAddItem(n,function(){var i=e._getOrAddAtomizationCache(r);return new t.AtomizedDataSet(n,h,e.config.
entityTypeName,e._getAtomizedDataSetOptions(i,r))}),f=Q.defer(),i.prototype.loadDataSetForParams.call(
this,n,r,u).then(function(){o.data()?f.resolve(o):f.reject()},function(){f.reject()}),s=f.promise,s.
dataSetName=n,s},r.prototype.loadDataSet=function(n,r){var o=this,f=MsPortalFx.Data.Loader.getDataSet(
n),u=this._atomizedDataSetCache.peekAtItem(n),e;return r.loaderOptions=r.loaderOptions||{},e=r.loaderOptions.
fetchData||t.defaultFetchData,r.loaderOptions.fetchData=function(n,t,i,r,s){if(f&&u&&!f.data&&u.hasCachedData(
)){var h=o._convertObservableDataToRawJavaScriptObject(u.data()),c={cachedAjax:!0,data:h,modified:!1};
return Q(c)}return e(n,t,i,r,s)},i.prototype.loadDataSet.call(this,n,r)},r.prototype.disposeDataSet=
function(n){this._atomizedDataSetCache.releaseItem(n.dataSetName,function(n){n.dispose()});this._releaseAtomizationCache(
this._dataSetParams[n.dataSetName]);delete this._dataSetParams[n.dataSetName];i.prototype.disposeDataSet.
call(this,n)},r.prototype._convertObservableDataToRawJavaScriptObject=function(n){var t,i,r;n=ko.utils.
unwrapObservable(n);t=ko.mapping.toJS(n);for(i in n)ko.isComputed(n[i])&&delete t[i];return this.config.
atomization.mergeOptions&&this.config.atomization.mergeOptions.sourcePath&&(r={},r[this.config.atomization.
mergeOptions.sourcePath]=t,t=r),t},r.prototype._getOrAddAtomizationCache=function(n){var t=this.config.
atomization.partitionKey&&this.config.atomization.partitionKey(n),i=this.config.atomization.mergeOptions&&
this.config.atomization.mergeOptions.initialData;return this.config.atomization.context._getOrAddAtomizationCache(
t,i)},r.prototype._releaseAtomizationCache=function(n){var t=this.config.atomization.partitionKey&&this.
config.atomization.partitionKey(n);return this.config.atomization.context._releaseAtomizationCache(t)}
,r.prototype._getAtomizedDataSetOptions=function(n,t){var r=this,i;return this.config.atomization.itemMatchesAtomization&&
(i=function(n){return r.config.atomization.itemMatchesAtomization(n,t)}),{cache:n,scope:this.config.
atomization.scope,itemMatchesAtomization:i,sourcePath:this.config.atomization.mergeOptions&&this.config.
atomization.mergeOptions.sourcePath,targetPath:this.config.atomization.mergeOptions&&this.config.atomization.
mergeOptions.targetPath}},r}(t.DataCacheLoader);t.AtomizedDataCacheLoader=i})(t=n.Data||(n.Data={}))}
(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";var t=function(){function n(
){this._entries={}}return n.prototype.addItem=function(n,t){if(this._entries[n])throw new Error("InvalidOperationException: item with key '{0}' already exists in the cache".
format(n));return this._entries[n]={item:t,refcount:1},t},n.prototype.getItem=function(n){var t=this.
_entries[n];return t?(t.refcount+=1,t.item):null},n.prototype.getOrAddItem=function(n,t){return this.
getItem(n)||this.addItem(n,t())},n.prototype.releaseItem=function(n,t){var i=this._entries[n];if(!i)
{MsPortalFx.Base.Diagnostics.Log.writeEntry(1,"ExtensionCore.Internal.RefCountCache","RefCountCache.release: item with key '{0}' does not exist in cache".
format(n));return}i.refcount-=1;i.refcount<=0&&this.removeItem(n,t)},n.prototype.removeItem=function(
n,t){this._entries[n]&&(t&&t(this._entries[n].item),delete this._entries[n])},n.prototype.peekAtItem=
function(n){var t=this._entries[n];return t?t.item:null},n}();n.RefCountCache=t})(t=n.Internal||(n.Internal=
{}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";var f,u,i,r;(function(
n){n[n.SingleItem=0]="SingleItem";n[n.PartialList=1]="PartialList";n[n.List=2]="List";n[n.Root=3]="Root"}
)(t.AtomizationScope||(t.AtomizationScope={}));f=t.AtomizationScope;u=function(){function t(){this._atomizationCaches=
new n.Internal.RefCountCache;this._globalPartitionKey="##GLOBAL##"}return t.prototype.getItems=function(
n){var t=this._atomizationCaches.peekAtItem(n||this._globalPartitionKey);return t&&t.data},t.prototype.
_getOrAddAtomizationCache=function(n,t){return this._atomizationCaches.getOrAddItem(n||this._globalPartitionKey,
function(){return new i(t)})},t.prototype._releaseAtomizationCache=function(n){this._atomizationCaches.
releaseItem(n||this._globalPartitionKey)},t}();t.AtomizationContext=u;i=function(){function t(t){this.
_entries=new n.Internal.RefCountCache;t=t||[];this.data=Array.isArray(t)?ko.observableArray():ko.observable(
);n.Utilities.merge(t,this.data)}return t.prototype.getEntry=function(n,t,i,u,f){var e=this;return this.
_entries.getOrAddItem(n,function(){return new r({cache:e,key:n,scope:t,sourcePath:i,targetPath:u,itemMatchesAtomization:
f})})},t.prototype.releaseEntry=function(n){this._entries.releaseItem(n,function(n){n.dispose()})},t.
prototype.setLatestFullFetchStart=function(n){this._latestFullFetchStart=n},t.prototype.canMerge=function(
n){return!n||!this._latestFullFetchStart||n>=this._latestFullFetchStart},t}();t.AtomizationCache=i;r=
function(){function t(n){if(this._hasBeenMergedOnce=!1,this._lifetime=new MsPortalFx.Internal.Base.TriggerableLifetimeManager,
this._key=n.key,this._cache=n.cache,this._scope=n.scope,this._sourcePath=n.sourcePath,this._targetPath=
n.targetPath,this._itemMatchesAtomization=n.itemMatchesAtomization,!this._itemMatchesAtomization&&(this.
_scope===0||this._scope===1))throw new Error("Need to supply an itemMatchesAtomization callback for AtomizationScope.SingleItem or AtomizationScope.PartialList");
this.data=this._createDataObservable()}return Object.defineProperty(t.prototype,"_allItems",{get:function(
){return this._targetPath?this._cache.data()[this._targetPath]:this._cache.data},enumerable:!0,configurable:
!0}),t.prototype.dispose=function(){this._lifetime.dispose()},t.prototype.merge=function(n,t){if(this.
_cache.canMerge(t.fetchStart)){n=ko.toJS(n);n=this._sourcePath?n[this._sourcePath]:n;switch(this._scope)
{case 0:this._mergeSingleItem(n,t);break;case 1:this._mergePartialList(n,t);break;case 2:this._mergeList(
n,t);break;case 3:this._mergeRoot(n,t)}this._hasBeenMergedOnce=!0}},t.prototype.hasCachedData=function(
){switch(this._scope){case 0:return!!this.data();default:return this._hasBeenMergedOnce}},t.prototype.
_mergeSingleItem=function(t,i){var r=this._allItems().first(this._itemMatchesAtomization);r?MsPortalFx.
Data.DataSet.mergeWithoutAtomization(t,r,i):this._allItems.push(n.Utilities.mapItemIntoObservableProperties(
t))},t.prototype._mergePartialList=function(n,t){var i=this,r=this._allItems().filter(this._itemMatchesAtomization),
u;MsPortalFx.Data.DataSet.mergeWithoutAtomization(n,r,t);u=r.filter(function(n){return i._itemMatchesAtomization(
n)&&i._allItems.indexOf(n)<=-1});this._allItems.push.apply(this._allItems,u)},t.prototype._mergeList=
function(n,t){MsPortalFx.Data.DataSet.mergeWithoutAtomization(n,this._allItems,t);this._cache.setLatestFullFetchStart(
t.fetchStart)},t.prototype._mergeRoot=function(n,t){MsPortalFx.Data.DataSet.mergeWithoutAtomization(
n,this._cache.data,t);this._cache.setLatestFullFetchStart(t.fetchStart)},t.prototype._createDataObservable=
function(){var t=this,n;switch(this._scope){case 0:return n=ko.observable(),ko.reactor(this._lifetime,
function(){var i=t._allItems().first(t._itemMatchesAtomization);i&&n(i)}),n;case 1:return this._allItems.
filter(this._lifetime,this._itemMatchesAtomization);case 2:return this._allItems;case 3:default:return this.
_cache.data}},t.prototype._getTargetItems=function(){return this._targetPath?this._cache.data()[this.
_targetPath]:this._cache.data},t}();t.AtomizationCacheEntry=r})(t=n.Data||(n.Data={}))}(ExtensionCore||
(ExtensionCore={})),function(n){var t;(function(n){"use strict";var t=function(n){function t(t,i,r,u)
{n.call(this,r);this._dataSetName=t;this._dataSet=i;this._entityType=r;this._cache=u.cache;this._cacheEntry=
this._cache.getEntry(t,u.scope,u.sourcePath,u.targetPath,u.itemMatchesAtomization);$(this._dataSet).
on("fetchStart",this._fetchStartHandler=this._onFetchStart.bind(this)).on("mergeComplete",this._mergeCompleteHandler=
this._onMergeComplete.bind(this))}return __extends(t,n),Object.defineProperty(t.prototype,"data",{get:
function(){return this._cacheEntry.data},enumerable:!0,configurable:!0}),t.prototype.dispose=function(
){$(this._dataSet).off("fetchStart",this._fetchStartHandler).off("mergeComplete",this._mergeCompleteHandler);
this._cache.releaseEntry(this._dataSetName)},t.prototype.merge=function(n,t){this._cacheEntry.merge(
n,t)},t.prototype.hasCachedData=function(){return this._cacheEntry.hasCachedData()},t.prototype._onFetchStart=
function(){this._latestFetchStart=+new Date},t.prototype._onMergeComplete=function(){this.merge(this.
_dataSet.data,{type:this._entityType,fetchStart:this._latestFetchStart})},t}(MsPortalFx.Data.DataSet);
n.AtomizedDataSet=t})(t=n.Data||(n.Data={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(
function(t){"use strict";function r(t,r,u,f){var s=i.getOrAddItem(r,function(){return MsPortalFx.Data.
EditScopeCache.create({entityTypeName:f,supplyExistingData:u})}),e,o;return t.registerForDispose({dispose:
function(){i.releaseItem(r)}}),e=s.createView(t),o=e.fetchForExistingData(r).then(function(){return e.
editScope()}),n.Utilities.toJQueryPromise(o)}function u(t,r,u,f){var s=i.getOrAddItem(r,function(){return MsPortalFx.
Data.EditScopeCache.create({entityTypeName:f,supplyNewData:u})}),e,o;return t.registerForDispose({dispose:
function(){i.releaseItem(r)}}),e=s.createView(t),o=e.fetchForNewData(r).then(function(){return e.editScope(
)}),n.Utilities.toJQueryPromise(o)}var i=new t.RefCountCache;t.acquireEditScopeOverExistingData=r;t.
acquireEditScopeOverNewData=u})(t=n.Internal||(n.Internal={}))}(ExtensionCore||(ExtensionCore={})),function(
n){var t;(function(t){"use strict";var i=function(){function t(t,i,r){this._dataSetName=t;this._uri=
i;r||(r=function(t,i,r){return n.Net.post(i,r)});this._fetchData=r}return t.prototype.dispose=function(
){MsPortalFx.Data.Loader.disposeDataSet(this._dataSetName)},t.prototype.refresh=function(n){var t={dataSetName:
this._dataSetName,uri:this._uri,ajaxData:{},loaderOptions:{fetchData:this._fetchData}};return n&&n.forceRefresh&&
(t.forceCacheRefresh=!0),MsPortalFx.Data.Loader.getData(t)},t}();t.RemoteDataSource=i})(t=n.Data||(n.
Data={}))}(ExtensionCore||(ExtensionCore={})),function(n){"use strict";var t=function(){function n()
{this._db={}}return n.prototype.FindEntity=function(n,t,i){if(i||(i="id"),Array.isArray(this._db[t]))
{var r=this._db[t].first(function(t){return ko.isObservable(t[i])?t[i]()===n:t[i]===n});if(r)return r}
return null},n.prototype.FindEntities=function(n){return Array.isArray(this._db[n])?this._db[n]:[]},
n.prototype.AddEntity=function(n,t,i){if(i||(i="id"),Array.isArray(this._db[t])){if(this.FindEntity(
n[i],t,i))throw new Error("Entity with id '{0}' already existed.".format(n[i]));}else this._db[t]=[];
return this._db[t].push(n),n},n.prototype.RemoveEntity=function(n,t,i){if(i||(i="id"),Array.isArray(
this._db[t])){var r=this._db[t].firstIndex(function(t){return ko.isObservable(t[i])?t[i]()===n:t[i]===
n});r>-1&&this._db[t].splice(r,1)}},n.prototype.RemoveAllEntities=function(n){Array.isArray(this._db[
n])&&(this._db[n]=[])},n.prototype.FindIndependentEntity=function(n){return typeof this._db[n]!="undefined"?
this._db[n]:null},n.prototype.AddIndependentEntity=function(n,t){if(this._db[t])throw new Error("Independent Entity with key '{0}' already existed.".
format(t));this._db[t]=n},n.prototype.RemoveIndependentEntity=function(n){delete this._db[n]},n.prototype.
ClearAll=function(){this._db={}},n}();n.MockDb=t}(ExpMocks||(ExpMocks={})),function(n){var t;(function(
){"use strict"})(t=n.Models||(n.Models={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(
t){"use strict";var i=function(){function t(t){if(!t)throw new ArgumentError(n.Resources.Network.Validation.
nonNullAddress);this.address=t.split(".").map(function(i){if(i&&i.length>1&&i[0]==="0"||!i.match(/^\d+$/))
throw new ArgumentError(n.Resources.Network.Validation.malformedAddress.format(t));return parseInt(i,
10)});this._validateIpValue();this._calculateByteValues()}return t.prototype.toString=function(){return this.
bytesToAddressString(this.subnetBytes)},t.prototype.equals=function(n){return this.subnetBytes===n.subnetBytes}
,t.prototype.isIpInRange=function(n,t){return n.subnetBytes<=this.subnetBytes&&this.subnetBytes<t.subnetBytes}
,t.prototype.bytesToAddressString=function(n){return"{0}.{1}.{2}.{3}".format((n&4278190080)>>>24,(n&
16711680)>>>16,(n&65280)>>>8,(n&255)>>>0)},t.prototype._validateIpValue=function(){if(this.address.length!==
4)throw new ArgumentError(n.Resources.Network.Validation.malformedAddress.format(this.address.join(".")));
this._validateOctet(0);this._validateOctet(1);this._validateOctet(2);this._validateOctet(3)},t.prototype.
_validateOctet=function(t){if(isNaN(this.address[t])||this.address[t]<(t===0?1:0)||this.address[t]>255)
throw new ArgumentError(n.Resources.Network.Validation.octet.format(t+1,this.address[t],t===0?1:0,255));
},t.prototype._calculateByteValues=function(){this.subnetBytes=(this.address[0]<<24>>>0|this.address[
1]<<16>>>0|this.address[2]<<8>>>0|this.address[3]<<0>>>0)>>>0},t}();t.IPv4Address=i})(t=n.Network||(n.
Network={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){function i(){var i="ExtensionCore.Resources",
n=window,t;if(n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error(
"Unable to find the resources for '"+i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o,s,h;
(function(n){var i;(function(n){n.betweenPrefix=t("Network_Validation_betweenPrefix");n.missingAddressSpace=
t("Network_Validation_missingAddressSpace");n.subnetOverlaps=t("Network_Validation_subnetOverlaps");
n.subnetNotContained=t("Network_Validation_subnetNotContained");n.reserved=t("Network_Validation_reserved");
n.notInSubnet=t("Network_Validation_notInSubnet");n.notInRange=t("Network_Validation_notInRange");n.
privateSpace=t("Network_Validation_privateSpace");n.prefix=t("Network_Validation_prefix");n.octet=t(
"Network_Validation_octet");n.nonNullSubnet=t("Network_Validation_nonNullSubnet");n.nonNullAddress=t(
"Network_Validation_nonNullAddress");n.maxPrefix=t("Network_Validation_maxPrefix");n.malformedSubnet=
t("Network_Validation_malformedSubnet");n.malformedAddress=t("Network_Validation_malformedAddress")}
)(i=n.Validation||(n.Validation={}));n.validation=t("Network_Validation")})(r=n.Network||(n.Network=
{})),function(n){n.unitedstates=t("region_unitedstates");n.northwestus=t("region_northwestus");n.eastus2=
t("region_eastus2");n.australiasoutheast=t("region_australiasoutheast");n.australiaeast=t("region_australiaeast");
n.centralus=t("region_centralus");n.westus=t("region_westus");n.westjapan=t("region_westjapan");n.westeurope=
t("region_westeurope");n.washingtondc=t("region_washingtondc");n.southeastasia=t("region_southeastasia");
n.southcentralus=t("region_southcentralus");n.siliconvalley=t("region_siliconvalley");n.saopaulo=t("region_saopaulo");
n.northeurope=t("region_northeurope");n.northcentralus=t("region_northcentralus");n.eastus=t("region_eastus");
n.eastjapan=t("region_eastjapan");n.eastasia=t("region_eastasia")}(u=n.Region||(n.Region={}));n.durationSeconds=
t("durationSeconds");n.durationSecond=t("durationSecond");n.durationMinutes=t("durationMinutes");n.durationMinute=
t("durationMinute");n.durationMilliseconds=t("durationMilliseconds");n.durationMillisecond=t("durationMillisecond");
n.durationHours=t("durationHours");n.durationHour=t("durationHour");n.durationDays=t("durationDays");
n.durationDay=t("durationDay"),function(n){n.reconnectingMessage=t("LogStream_reconnectingMessage");
n.connectionLostMessage=t("LogStream_connectionLostMessage");n.connectingMessage=t("LogStream_connectingMessage")}
(f=n.LogStream||(n.LogStream={}));n.reasonMessage=t("reasonMessage"),function(n){n.invalidArgument=t(
"Validation_invalidArgument");var i;(function(n){n.regexNoSpecialCharacters=t("Validation_ResourceGroup_regexNoSpecialCharacters");
n.unique=t("Validation_ResourceGroup_unique");n.regex=t("Validation_ResourceGroup_regex");n.maxLength=
t("Validation_ResourceGroup_maxLength")})(i=n.ResourceGroup||(n.ResourceGroup={}));n.required=t("Validation_required");
n.confirmPassword=t("Validation_confirmPassword")}(e=n.Validation||(n.Validation={})),function(n){var
i;(function(n){n.title=t("Field_ConfirmPassword_title")})(i=n.ConfirmPassword||(n.ConfirmPassword={})
)}(o=n.Field||(n.Field={}));n.loading=t("loading"),function(n){var i,r,u;(function(n){n.title=t("Create_Location_title");
n.filtered=t("Create_Location_filtered")})(i=n.Location||(n.Location={})),function(n){n.title=t("Create_Subscription_title");
n.lockedResourceGroup=t("Create_Subscription_lockedResourceGroup")}(r=n.Subscription||(n.Subscription=
{})),function(n){n.title=t("Create_ResourceGroup_title");n.filteredSubscription=t("Create_ResourceGroup_filteredSubscription")}
(u=n.ResourceGroup||(n.ResourceGroup={}))}(s=n.Create||(n.Create={}));n.certificateValidation=t("certificateValidation");
n.zettaBytesLong=t("zettaBytesLong");n.zettaBytes=t("zettaBytes");n.yottaBytesLong=t("yottaBytesLong");
n.yottaBytes=t("yottaBytes");n.teraBytesLong=t("teraBytesLong");n.teraBytes=t("teraBytes");n.petaBytesLong=
t("petaBytesLong");n.petaBytes=t("petaBytes");n.megaBytesLong=t("megaBytesLong");n.megaBytes=t("megaBytes");
n.kiloBytesLong=t("kiloBytesLong");n.kiloBytes=t("kiloBytes");n.gigaBytesLong=t("gigaBytesLong");n.gigaBytes=
t("gigaBytes");n.genericErrorMessage=t("genericErrorMessage");n.exaBytesLong=t("exaBytesLong");n.exaBytes=
t("exaBytes"),function(n){var i,r;(function(n){n.fieldMustBeUnique=t("EditableGrid_Validation_fieldMustBeUnique")}
)(i=n.Validation||(n.Validation={})),function(n){n.maxDisplayFormat=t("EditableGrid_MultiselectDropdown_maxDisplayFormat");
n.displayFormat=t("EditableGrid_MultiselectDropdown_displayFormat")}(r=n.MultiselectDropdown||(n.MultiselectDropdown=
{}));n.hiddenForSecurity=t("EditableGrid_hiddenForSecurity")}(h=n.EditableGrid||(n.EditableGrid={}));
n.bytesLong=t("bytesLong");n.bytes=t("bytes")})(t=n.Resources||(n.Resources={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(t){"use strict";var i=function(t){function i(i){var u,r;if(!i)throw new
ArgumentError(n.Resources.Network.Validation.nonNullSubnet);if(u=i.split("/"),u.length===1)this.prefix=
32;else if(u.length>2)throw new ArgumentError(n.Resources.Network.Validation.malformedSubnet.format(
i));else{if(r=u[1],r&&r.length>1&&r[0]==="0"||!r.match(/^\d+$/))throw new ArgumentError(n.Resources.
Network.Validation.malformedSubnet.format(i));this.prefix=parseInt(r,10)}t.call(this,u[0]);this._validatePrefix(
);this._calculateSubnetByteValues()}return __extends(i,t),i.prototype.toString=function(){return"{0}/{1}".
format(t.prototype.toString.call(this),this.prefix)},i.prototype.toAddressString=function(){return t.
prototype.toString.call(this)},i.prototype.isOtherSubnetContained=function(n){return this.prefix<=n.
prefix&&(this.subnetNetMaskBytes&n.subnetBroadcastAddressBytes)>>>0===this.subnetMaskBytes},i.prototype.
doesSubnetOverlap=function(n){return this.isOtherSubnetContained(n)||n.isOtherSubnetContained(this)}
,i.prototype.getFirstAddressInRange=function(n){return this.bytesToAddressString(((this.subnetBytes&
this.subnetNetMaskBytes)>>>0)+(n?n:0))},i.prototype.getLastAddressInRange=function(n){return this.bytesToAddressString(
this.subnetBroadcastAddressBytes-(n?n:0))},i.prototype.doesContainIp=function(n){var t=new i(n.toString(
));return this.isOtherSubnetContained(t)},i.prototype.getSubnetRange=function(n,t){return"{0} - {1}".
format(this.getFirstAddressInRange(n),this.getLastAddressInRange(t))},i.prototype.getUsableIpAddressCount=
function(n,t){return n=n?n:0,t=t?t:0,this.subnetBroadcastAddressBytes-((this.subnetBytes&this.subnetNetMaskBytes)
>>>0)-n-t+1},i.prototype.getChildSubnet=function(n,t){var s=this._getUsablePrefix(n,!0),e,r,u,f,o;if(
t&&t.length){if(e=0,t.forEach(function(n){e+=n.getUsableIpAddressCount()}),this.getUsableIpAddressCount(
)-e<Math.pow(2,32-n))return null;for(t.sort(function(n,t){return n.subnetBytes<t.subnetBytes?-1:1}),
r=new i(this.getFirstAddressInRange()+"/"+s),u=!0;u;)for(u=!1,f=0;f<t.length;f++)if(o=t[f],r.doesSubnetOverlap(
o)){r=o.getNextSubnet(n);u=!0;break}return this.isOtherSubnetContained(r)?r:null}return new i(this.getFirstAddressInRange(
)+"/"+s)},i.prototype.getIpAddress=function(n){var t=n?n:0;if(this.getUsableIpAddressCount()<t)throw new
ArgumentError("offset","The requested IP Address is not in this subnet");return this.bytesToAddressString(
this.subnetBytes+t)},i.prototype.getNextSubnet=function(n){var t=this._getUsablePrefix(n,!1),r,u;return t<
this.prefix?(u=new i(this.toAddressString()+"/"+t),r=u.bytesToAddressString(u.subnetBroadcastAddressBytes+
1)):r=this.bytesToAddressString(this.subnetBroadcastAddressBytes+1),new i(r+"/"+t)},i.prototype.findContainingAddressSpace=
function(n){var r,t,u;if(!n||n.length===undefined)throw new ArgumentError("addressSpaces","The list of address spaces must be an array");
for(typeof n[0]=="string"&&(n=n.map(function(n){return new i(n)})),r=n,t=0;t<r.length;t++)if(u=r[t],
u.isOtherSubnetContained(this))return u;return null},i.prototype._getUsablePrefix=function(n,t){var i=
this.prefix;if(n){if(typeof n=="string"&&(n=parseInt(n,10)),t&&n<this.prefix)throw new ArgumentError(
"prefix","The supplied prefix was smaller than the parent. It must be greater than or equal to the parent");
i=n}return i},i.findSubnetGap=function(t,r,u){var s,c,f,w,h,o,v,l,a;if(!t)throw new ArgumentError("existingSubnets",
"existingSubnets must not be null");if(r<1||r>32)throw new ArgumentError("desiredPrefix",n.Resources.
Network.Validation.prefix);if(t.length===0)return new i("10.0.0.0/"+r.toString());for(s=typeof t[0]==
"string"?t.map(function(n){return new i(n)}):t,s.sort(function(n,t){return n.subnetBroadcastAddressBytes<
t.subnetBroadcastAddressBytes?-1:1}),c=[],f=0;f<s.length;f++)if(w=c.first(function(n){return n===f}),
!w)for(h=0;h<s.length;h++)f!==h&&s[f].isOtherSubnetContained(s[h])&&c.push(h);if(o=s.filter(function(
n,t){var i=c.first(function(n){return n===t});return i===null}),v=new i("10.0.0.0/"+r),v.subnetBroadcastAddressBytes<
o[0].subnetBytes)return v;var e,y=new i("10.0.0.0/8"),p=new i("172.16.0.0/12"),b=new i("192.168.0.0/16");
for(f=0;f<o.length;f++)if(l=o[f].prefix>r?new i(o[f].toAddressString()+"/"+r.toString()):o[f],a=f+1<
o.length?o[f+1]:null,a===null||a.subnetBytes-l.subnetBroadcastAddressBytes>=Math.pow(2,32-r))if(e=new
i(l.bytesToAddressString(l.subnetBroadcastAddressBytes+1)+"/"+r),u){if(y.isOtherSubnetContained(e)||
p.isOtherSubnetContained(e)||b.isOtherSubnetContained(e))return e;if(a===null){if(e.subnetBroadcastAddressBytes<
y.subnetBytes)return r>=8?new i("10.0.0.0/"+r):null;if(e.subnetBytes>y.subnetBroadcastAddressBytes&&
e.subnetBroadcastAddressBytes<p.subnetBytes)return r>=12?new i("172.16.0.0/"+r):null;if(e.subnetBytes>
p.subnetBroadcastAddressBytes&&e.subnetBroadcastAddressBytes<b.subnetBytes)return r>=16?new i("192.168.0.0/"+
r):null}}else return e},i.prototype._validatePrefix=function(){if(this.prefix<1||this.prefix>32)throw new
ArgumentError("Prefix",n.Resources.Network.Validation.prefix);},i.prototype._calculateSubnetByteValues=
function(){this.subnetNetMaskBytes=4294967295<<32-this.prefix>>>0;this.subnetMaskBytes=(this.subnetNetMaskBytes&
this.subnetBytes)>>>0;this.subnetBroadcastAddressBytes=((this.subnetNetMaskBytes^4294967295)>>>0|this.
subnetBytes)>>>0},i}(t.IPv4Address);t.IPv4Subnet=i})(t=n.Network||(n.Network={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(t){"use strict";function i(t,i){var r={};return t.forEach(function(
t){var u=new n.Network.IPv4Subnet(t),f=i.map(function(t){return new n.Network.IPv4Subnet(t)}).filter(
function(n){return u.isOtherSubnetContained(n)});r[t]=f}),r}t.getSubnetsInAddressSpaces=i})(t=n.Network||
(n.Network={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";function i(
){return new MsPortalFx.ViewModels.CustomValidation("",function(i){var r={valid:!0,message:undefined};
if(i!=="")try{new t.IPv4Address(i)}catch(u){r.valid=!1;r.message=u.message}return n.Utilities.convertToPromise(
r)})}function r(i,r){return new MsPortalFx.ViewModels.CustomValidation("",function(u){var e=new t.IPv4Address(
u),f={valid:!0,message:undefined};return e.isIpInRange(i,r)||(f.valid=!1,f.message=n.Resources.Network.
Validation.notInRange.format(i.toString(),r.bytesToAddressString(r.subnetBytes-1))),n.Utilities.convertToPromise(
f)})}function u(i){return new MsPortalFx.ViewModels.CustomValidation("",function(r){var f=new t.IPv4Address(
r),u={valid:!0,message:undefined};return i.doesContainIp(f)||(u.valid=!1,u.message=n.Resources.Network.
Validation.notInSubnet.format(i.toString())),n.Utilities.convertToPromise(u)})}function f(i){return new
MsPortalFx.ViewModels.CustomValidation("",function(r){for(var e=new t.IPv4Address(r),u={valid:!0,message:
undefined},f=0;f<i.length;++f)if(e.equals(i[f])){u.valid=!1;u.message=n.Resources.Network.Validation.
reserved;break}return n.Utilities.convertToPromise(u)})}function e(i,r){return new MsPortalFx.ViewModels.
CustomValidation("",function(u){var f={valid:!0,message:undefined},e;try{e=new t.IPv4Subnet(u);i&&r&&
(e.prefix>i||e.prefix<r)?(f.valid=!1,f.message=n.Resources.Network.Validation.betweenPrefix.format(r,
i)):i&&e.prefix>i&&(f.valid=!1,f.message=n.Resources.Network.Validation.maxPrefix.format(i))}catch(o)
{f.valid=!1;f.message=o.message}return n.Utilities.convertToPromise(f)})}function o(i){return new MsPortalFx.
ViewModels.CustomValidation("",function(r){var u={valid:!0,message:undefined},f,e;if(i())try{f=new t.
IPv4Subnet(r);e=new t.IPv4Subnet(i());e.isOtherSubnetContained(f)||(u.valid=!1,u.message=n.Resources.
Network.Validation.subnetNotContained.format(i()))}catch(o){u.valid=!1;u.message=o.message}else u.valid=
!1,u.message=n.Resources.Network.Validation.missingAddressSpace;return Q(u)})}function s(i){return new
MsPortalFx.ViewModels.CustomValidation("",function(r){var u={valid:!0,message:undefined},f;try{f=new
t.IPv4Subnet(r);i()&&i().forEach(function(i){var r=new t.IPv4Subnet(i);f.isOtherSubnetContained(r)||
(u.valid=!1,u.message=n.Resources.Network.Validation.subnetNotContained.format(i))})}catch(e){u.valid=
!1;u.message=e.message}return Q(u)})}function h(i){return new MsPortalFx.ViewModels.CustomValidation(
"",function(r){var u={valid:!0,message:undefined},f;try{f=new t.IPv4Subnet(r);i().forEach(function(i)
{var r=new t.IPv4Subnet(i);f.doesSubnetOverlap(r)&&(u.valid=!1,u.message=n.Resources.Network.Validation.
subnetOverlaps.format(i))})}catch(e){u.valid=!1;u.message=e.message}return Q(u)})}function c(){return new
MsPortalFx.ViewModels.CustomValidation("",function(i){var r={valid:!1,message:n.Resources.Network.Validation.
privateSpace},f=[new t.IPv4Subnet("172.16.0.0/12"),new t.IPv4Subnet("192.168.0.0/16"),new t.IPv4Subnet(
"10.0.0.0/8")],u;try{u=new t.IPv4Subnet(i);f.forEach(function(n){n.isOtherSubnetContained(u)&&(r.valid=
!0,r.message=undefined)})}catch(e){r.valid=!1;r.message=e.message}return n.Utilities.convertToPromise(
r)})}t.getIpAddressValidator=i;t.getIpAddressInRangeValidator=r;t.getIpAddressInSubnetValidator=u;t.
getIpAddressNotReservedValidator=f;t.getCidrSubnetValidator=e;t.getSubnetIsContainedInAddressSpaceValidator=
o;t.getAddressSpaceContainsAllSubnets=s;t.getSubnetDoesntOverlapWithOtherSubnets=h;t.getPrivateSubnetValidator=
c})(t=n.Network||(n.Network={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(){"use strict";
function t(){for(var u,r=[],t=0;t<arguments.length;t++)r[+t]=arguments[t];return u=r.map(function(n)
{if(n&&$.isFunction(n.then)&&!i(n)){var t=$.Deferred();return n.then(function(){t.resolve.apply(t,arguments)}
,function(){t.reject.apply(t,arguments)}),t.promise()}return n}),n.apply(this,u)}function i(n){return n&&
n.promise&&n.state&&n.always&&n.done&&n.fail&&n.progress&&n.then}var n=$.when;$.when=t})(t=n.Polyfills||
(n.Polyfills={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(){"use strict";function n(
n){var t={};return this.forEach(function(i){var r=n(i);r&&(t[r]=i)}),t}function t(n,t){var i=[];return n?
(t||(t=function(n,t){return n===t}),this.forEach(function(r){for(var f,u=0;u<n.length;u++)if(f=n[u],
t(r,f)){i.push(r);break}}),i):i}function i(n){var t=[];return this.forEach(function(i){var r=t.firstIndex(
function(t){return n?n(i,t):i===t});r<0&&t.push(i)}),t}function r(n,t){var i=t;return i||(i=function(
n,t){return n<t?-1:n>t?1:0}),this.sort(function(t,r){var u=n(t),f=n(r);return i(u,f)})}function u(n,
t){return this.sortBy(n,t),this.reverse(),this}Array.prototype.toStringMap||(Array.prototype.toStringMap=
n);Array.prototype.intersect||(Array.prototype.intersect=t);Array.prototype.distinct||(Array.prototype.
distinct=i);Array.prototype.sortBy||(Array.prototype.sortBy=r);Array.prototype.sortByDescending||(Array.
prototype.sortByDescending=u)})(t=n.Polyfills||(n.Polyfills={}))}(ExtensionCore||(ExtensionCore={})),
function(n){"use strict";function u(t){return!!(n.isObservable(t)&&t.indexOf)}function f(t,i){var r=
n.observableArray();return n.reactor(t,function(){var n=i();r.replaceAll(n)}),r.filter(t,function(){
return!0})}function r(t){var i=t;return n.utils.extend(i,n.observableArray.fn),i.valueWillMutate=function(
){throw new Error("Cannot write a value to a ko.pureComputed array. If you wish to read the current value, don't pass any parameters.");
},i.valueHasMutated=function(){i.notifySubscribers(i.peek())},i}var t,i;n.isObservableArray=u;n.computedArray=
f;n.observableArray.fn.replaceAll=function(n){var t=[0,this().length];return Array.prototype.push.apply(
t,n),this.splice.apply(this,t)};t=n.observableArray.fn.map;n.observableArray.fn.map=function(){var n=
t.apply(this,arguments);return r(n)};i=n.observableArray.fn.filter;n.observableArray.fn.filter=function(
){var n=i.apply(this,arguments);return r(n)}}(ko||(ko={})),function(n){var t;(function(n){"use strict";
var r=function(){function n(){}return n.InProgress="InProgress",n.Success="Success",n.Warning="Warning",
n.Failure="Failure",n}(),t,i;n.NotificationEventType=r;t=function(){function n(){}return n.DefaultPrecision=
2,n}();n.Formatter=t;i=function(){function n(){}return n.Disabled="Disabled",n}();n.SubscriptionStatus=
i})(t=n.Constants||(n.Constants={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(
t){var i;(function(t){"use strict";function r(n){var t=MsPortalFx.UI.NotificationManager.create(n.notificationDefinition.
name);i(t,n)}function i(t,i){t.raise(i.notificationDefinition.inProgress,i.assetId,i.properties);i.promise.
then(function(){t.raise(i.notificationDefinition.success,i.assetId,i.properties)},function(r){var u=
typeof r=="string"?r:n.Utilities.getXhrError(r),f;u||(u=n.Resources.genericErrorMessage);f=$.extend(
{},{errorMessage:u},i.properties);t.raise(i.notificationDefinition.error,i.assetId,f)})}t.createNotificationFromPromise=
r;t.attachPromiseToNotification=i})(i=t.Notifications||(t.Notifications={}))})(t=n.UI||(n.UI={}))}(ExtensionCore||
(ExtensionCore={})),function(n){var t;(function(n){"use strict";function t(n,t){ko.reactor(n,function(
){n.selectable.selectedValue(t())})}n.bindContainerSelectedValue=t})(t=n.Utilities||(n.Utilities={})
)}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";function t(n,t,i,r)
{r||(r=3);var f=0,u=$.Deferred(),e=function(){n().done(function(n){var r=t(n);r.status===0?u.resolve(
r.response):r.status===1?u.reject(r.error):r.status===2&&setTimeout(e,i)}).fail(function(n){f++;f>r?
u.reject(n):setTimeout(e,i*f)})};return setTimeout(e,i),u.promise()}function i(n,t,i,r){r===void 0&&
(r=3);var f=0,u=Q.defer(),e=function(){n().then(function(n){var r=t(n);r.status===0?u.resolve(r.response):
r.status===1?u.reject(r.error):r.status===2&&setTimeout(e,i)}).catch(function(n){f++;f>r?u.reject(n):
setTimeout(e,i*f)})};return setTimeout(e,i),u.promise}n.setPolling=t;n.setPollingQ=i,function(n){n[n.
CompleteSuccess=0]="CompleteSuccess";n[n.CompleteFailure=1]="CompleteFailure";n[n.NotComplete=2]="NotComplete"}
(n.PollStatus||(n.PollStatus={}));var r=n.PollStatus})(t=n.Utilities||(n.Utilities={}))}(ExtensionCore||
(ExtensionCore={})),function(n){var t;(function(t){"use strict";var i=[{name:"B",localizedName:n.Resources.
bytes,localizedLongName:n.Resources.bytesLong,conversionFactor:""},{name:"KB",localizedName:n.Resources.
kiloBytes,localizedLongName:n.Resources.kiloBytesLong,conversionFactor:"k"},{name:"MB",localizedName:
n.Resources.megaBytes,localizedLongName:n.Resources.megaBytesLong,conversionFactor:"M"},{name:"GB",localizedName:
n.Resources.gigaBytes,localizedLongName:n.Resources.gigaBytesLong,conversionFactor:"g"},{name:"TB",localizedName:
n.Resources.teraBytes,localizedLongName:n.Resources.teraBytesLong,conversionFactor:"T"},{name:"PT",localizedName:
n.Resources.petaBytes,localizedLongName:n.Resources.petaBytesLong,conversionFactor:"P"},{name:"EB",localizedName:
n.Resources.exaBytes,localizedLongName:n.Resources.exaBytesLong,conversionFactor:"E"},{name:"ZB",localizedName:
n.Resources.zettaBytes,localizedLongName:n.Resources.zettaBytesLong,conversionFactor:"Z"},{name:"YB",
localizedName:n.Resources.yottaBytes,localizedLongName:n.Resources.yottaBytesLong,conversionFactor:"Y"}],
r=function(){function t(){}return t.addCommas=function(n){for(var i=n.split("."),t=i[0],u=i.length>1?
"."+i[1]:"",r=/(\d+)(\d{3})/;r.test(t);)t=t.replace(r,"$1,$2");return t+u},t.roundNumber=function(n,
t){return n%1!=0?parseFloat(n.toFixed(t)):n},t.getFileSizeFormat=function(r,u,f){var o=u&&$.map(i,function(
n){return n.name}).indexOf(u)||0,e=o,s=r||0;return f=isNaN(f)?n.Constants.Formatter.DefaultPrecision:
f,r&&r>=1024&&(e=Math.floor(Math.log(r)/Math.log(1024)),s=r/Math.pow(1024,e),e=o+e,e=e<i.length?e:i.
length-1),{value:t.roundNumber(s,f),unitName:i[e].name,unitDisplayName:i[e].localizedName,unitLongDisplayName:
i[e].localizedLongName,conversionFactor:i[e].conversionFactor,conversionValue:Math.pow(1024,o-e)}},t.
convertDateSizeFormat=function(n,t,r){var f=t&&$.map(i,function(n){return n.name}).indexOf(t)||0,u=r&&
$.map(i,function(n){return n.name}).indexOf(r)||0,e=parseFloat((n/Math.pow(1024,u-f)).toFixed(2));return{
value:e,unitName:i[u].name,unitDisplayName:i[u].localizedName,unitLongDisplayName:i[u].localizedLongName}}
,t.getRegionLookupArray=function(){var t={};for(var i in n.Resources.Region)n.Resources.Region.hasOwnProperty(
i)&&(t[i]=n.Resources.Region[i]);return t["##DEFAULT##"]="",t},t}();t.Formatters=r})(t=n.Utilities||
(n.Utilities={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";function r(
){var n=u.value;return n.waitForValueToBeSet(120).then(function(){return(n()&&n().resourceGroups||[])
.slice()})}function f(){return t.listResources().then(i)}function e(n){return t.listResourcesInSubscription(
n).then(i)}function o(n){return t.listResources(n).then(i)}function s(n,r){return t.listResourcesInSubscription(
n,r).then(i)}function h(n){var t=n.replace(/\s/g,"").toLowerCase(),i=StringEx.convertToStringMap(window.
fx.environment.restrictedCsmRegions);for(var r in i)if(StringEx.equals(r,t,0))return i[r];return t}function c(
t,i,u,f){return r().then(function(r){var e=r.map(function(n){return n.id});return n.Data.defaultSupplyData(
t,i,u,$.extend({},f,{ResourceGroups:e}))})}function i(n){var t=n.map(function(n){return n.id.split("/providers")[
0]});return t.distinct()}var u=new n.Utilities.Lazy(function(){return n.Communication.getSharedObservable(
new MsPortalFx.Internal.Base.TriggerableLifetimeManager,"HubsExtension","ResourceGroups")});t.getResourceGroupsAsync=
r;t.getResourceGroupIdsAsync=f;t.getResourceGroupsIdsInSubscriptionAsync=e;t.getResourceGroupIdsThatContainTypeAsync=
o;t.getResourceGroupIdsInSubscriptionThatContainTypeAsync=s;t.getResourceGroupLocation=h;t.supplyDataWithResourceGroups=
c})(t=n.Csm||(n.Csm={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";
var t=function(){function n(){}return n.isResourceGroup=function(n){if(n){var t=n.split("/");if(t&&t.
length===5)return t[0]===""&&t[1].toUpperCase()==="subscriptions".toUpperCase()&&t[2]!==""&&t[3].toUpperCase(
)==="resourceGroups".toUpperCase()&&t[4]!==""}return!1},n.parseResourceGroupId=function(t){if(t&&n.isResourceGroup(
t)){var i=t.split("/");return{subscriptionId:i[2],name:i[4]}}},n.getResourceGroupId=function(n,t){return"/subscriptions/{0}/resourcegroups/{1}".
format(n,t)},n}();n.ResourceUri=t})(t=n.Csm||(n.Csm={}))}(ExtensionCore||(ExtensionCore={})),function(
n){var t;(function(n){"use strict";function t(n){var t=this,i=$.Deferred(),f=i.promise(),r=!1,u=!1,e=
$.Callbacks("once memory");return $.extend(f,{cancel:function(){return r?t:(u=!0,e.fire(),t)},canceled:
function(){for(var i=[],n=0;n<arguments.length;n++)i[+n]=arguments[n];return i.forEach(function(n){e.
add(n)}),t}}),n.then(function(){(r=!0,u)||i.resolve.apply(t,arguments)},function(){(r=!0,u)||i.reject.
apply(t,arguments)}),f}n.createCancelablePromise=t})(t=n.Internal||(n.Internal={}))}(ExtensionCore||
(ExtensionCore={})),function(n){var t;(function(){"use strict"})(t=n.Data||(n.Data={}))}(ExtensionCore||
(ExtensionCore={})),function(n){var t;(function(t){var i;(function(t){"use strict";function u(n,t,u)
{var e,f;return i("getting dataset {0}".format(n)),r.getOrAddItem(n,function(){return i("creating dataset {0}".
format(n)),e=t(n),f=u(n),{dataSetName:n,dataSet:e,dataSource:f,initialLoadPromise:f.refresh()}})}function f(
n){i("releasing dataset {0}".format(n));r.releaseItem(n,function(t){i("disposing dataset {0}".format(
n));MsPortalFx.Data.Loader.disposeDataSet(n);t.dataSource.dispose()})}function e(n){return r.peekAtItem(
n)}function i(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(0,"ExtensionCore.Data.DataSetCache","ExtensionCore.Data.DataSetCache: {0}".
format(n))}var r=new n.Internal.RefCountCache;t.getOrCreate=u;t.release=f;t.peek=e})(i=t.DataSetCache||
(t.DataSetCache={}))})(t=n.Data||(n.Data={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;
(function(n){"use strict";function t(n,t){var i;return i=t.type!==undefined?MsPortalFx.Data.Loader.getDataSet(
n,t.type):MsPortalFx.Data.Loader.getDataSet(n,!0),t.initialData!==undefined&&i.merge(t.initialData),
t.pollingIntervals!==undefined&&MsPortalFx.Data.Loader.setPollingIntervals(n,t.pollingIntervals),t.setFastPolling&&
MsPortalFx.Data.Loader.setFastPolling(n,!0),i}function i(t,i){var r=typeof i.uri=="string"?MsPortalFx.
Base.Resources.getAppRelativeUri(i.uri):"";return new n.RemoteDataSource(t,r,i.fetchData)}function r(
n){var t=$.Deferred();return n().done(function(){var n=arguments[0],i=$.isArray(n)?ko.observableArray(
):{};n?MsPortalFx.Data.DataSet.mergeWithoutAtomization(n,i):i=n;t.resolve(i)}).fail(function(){t.reject(
)}),t.promise()}n.createDataSet=t;n.createRemoteDataSource=i;n.getObservableDataAsync=r})(t=n.Data||
(n.Data={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";function i(
n,i){return t.DataSetCache.getOrCreate(n,function(){return t.createDataSet(n,i)},function(){return f(
n,i.fetchData)})}function r(n){t.DataSetCache.release(n)}function u(n){return t.DataSetCache.peek(n)}
function f(i,r){return t.createRemoteDataSource(i,{uri:undefined,fetchData:function(){var t=r();return n.
Utilities.toJQueryPromise(t)}})}t.getRefCountedDataSet=i;t.releaseRefCountedDataSet=r;t.peekAtRefCountedDataSet=
u})(t=n.Data||(n.Data={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";
function i(i,r){r=e(r);var f=n.getRefCountedDataSet(i,r),u=$.Deferred();return f.initialLoadPromise.
done(function(){setTimeout(function(){u.resolve(t(f.dataSet.data))})}).fail(function(){setTimeout(function(
){u.reject()})}),u.promise()}function r(t){n.releaseRefCountedDataSet(t)}function u(i){var r=n.peekAtRefCountedDataSet(
i);return r&&r.dataSet&&r.dataSet.data?t(r.dataSet.data):null}function f(t){var i=n.peekAtRefCountedDataSet(
t);return i&&i.dataSource?i.dataSource.refresh({forceRefresh:!0}):$.Deferred().resolve({}).promise()}
function e(t){var i,r;return i=$.isFunction(t)?{fetchData:t}:t,r={pollingIntervals:n.PollingIntervals.
NoPolling},$.extend({},r,i)}function t(n){return ko.isObservableArray(n)?n:ko.isObservable(n)?n():n}
n.getRefCountedDataAsync=i;n.releaseRefCountedData=r;n.peekAtRefCountedData=u;n.refreshRefCountedData=
f})(t=n.Data||(n.Data={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";
function i(n){n.mergeFromOriginal();n.revertAll()}function f(n){var t=ko.isObservable(n.root)?n.root(
):n.root;$.isArray(t)?r(n,n.root,n._getArrayState(n.root).original,n.getCreated(n.root)):$.each(t,function(
t,i){ko.isObservableArray(i)?o(n,i)?s(n,t):u(n,t):ko.isObservable(i)&&u(n,t)});i(n)}function e(n,t){
var i=[],r=n.getCreated(t);return t().forEach(function(t){n.getEditState(t)()!==2&&i.push(t)}),r().forEach(
function(n){i.push(n)}),ko.observableArray(i)}function o(n,t){var r=n._arrayStateKey,i=MsPortalFx.Base.
ProxiedObservables.data(t,r);return i&&i.typeMetadata&&i.typeMetadata.entityType?!0:!1}function s(n,
t){var f=n.root,o=n.getOriginal(f),i=n.root[t],u=n.getOriginal(n.root)[t],e=n.getCreated(i);if(!i||!ko.
isObservableArray(i))throw new Error("Edit scope value with key '{0}' does not exist on edited data or is not an observable array".
format(t));if(!u||!ko.isObservableArray(u))throw new Error("Edit scope value with key '{0}' does not exist on original data or is not an observable array".
format(t));r(n,i,u,e)}function r(n,t,i,r){for(var f,u=t().length-1;u>=0;u--)f=t()[u],n.getEditState(
f)()===2?(t.splice(u,1),i.splice(u,1)):MsPortalFx.Data.DataSet.mergeWithoutAtomization(f,n.getOriginal(
f));ko.utils.arrayPushAll(i,r())}function u(t,i){var r=t.root,e=t.getOriginal(r),u=r[i],f=e[i];if(!u)
throw new Error("Edit scope value with key '{0}' does not exist on edited data".format(i));if(!f)throw new
Error("Edit scope value with key '{0}' does not exist on original data".format(i));n.Utilities.merge(
u,f)}t.revertEditScope=i;t.saveEditScope=f;t.getEditScopeItemsWithEdits=e})(t=n.Data||(n.Data={}))}(
ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";var i=function(){function t(
){var n=this;this._hasAtLeastOneReloadBeenIssuedForCurrentQuery=!1;this._data=ko.observable(null);this.
_currentLoadPromise=ko.observable(null);this._currentIsLoadingPromise=ko.observable(null);this._currentRefreshPromise=
ko.observable(null);this._currentIsRefreshingPromise=ko.observable(null);this._onLoadedCallbacks=$.Callbacks(
);this._isDisposed=!1;this._isLoading=ko.pureComputed(function(){return!!(n._currentLoadPromise&&n._currentIsLoadingPromise(
))});this._isLoadingPromise=ko.pureComputed(function(){return n._currentIsLoadingPromise()});this._loadPromise=
ko.pureComputed(function(){return n._currentLoadPromise()});this._isRefreshing=ko.pureComputed(function(
){return!!(n._currentRefreshPromise&&n._currentRefreshPromise())});this._isRefreshingPromise=ko.pureComputed(
function(){return n._currentIsRefreshingPromise()});this._refreshPromise=ko.pureComputed(function(){
return n._currentRefreshPromise()});this._lifetimeManager=new MsPortalFx.Internal.Base.TriggerableLifetimeManager}
return Object.defineProperty(t.prototype,"query",{get:function(){return this._query},enumerable:!0,configurable:
!0}),Object.defineProperty(t.prototype,"data",{get:function(){return this._data},enumerable:!0,configurable:
!0}),Object.defineProperty(t.prototype,"isLoading",{get:function(){return this._isLoading},enumerable:
!0,configurable:!0}),Object.defineProperty(t.prototype,"isRefreshing",{get:function(){return this._isRefreshing}
,enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this._isDisposed||(this._cancelCurrentLoad(
),this._cancelCurrentRefresh(),this._hasAtLeastOneReloadBeenIssuedForCurrentQuery&&this._release(),this.
_isLoading.dispose(),this._isLoadingPromise.dispose(),this._loadPromise.dispose(),this._isRefreshing.
dispose(),this._isRefreshingPromise.dispose(),this._refreshPromise.dispose(),this._isDisposed=!0,this.
_lifetimeManager.dispose())},t.prototype.setQuery=function(n,t){var r=!this._isQueryEqual(this._query,
n),i=this._latestLoadPromise;return(r||t)&&(this._query!==undefined&&this._release(),this._query=n,this.
_hasAtLeastOneReloadBeenIssuedForCurrentQuery=!1,i=this.reload()),i},t.prototype.reload=function(){var
t=this;if(this._cancelCurrentLoad(),this._cancelCurrentRefresh(),this._query===undefined)throw new InvalidOperationError(
"attempt to reload before query has been set. Make sure to call 'setQuery' before calling 'reload'.");
this._hasAtLeastOneReloadBeenIssuedForCurrentQuery&&this._release();var u=this._load(this._query),r=
n.Internal.createCancelablePromise(u),i=$.Deferred();return r.done(function(){var n=arguments[0];t._data(
n);t._onLoadedCallbacks.fire(n);i.resolve()}).fail(function(){i.reject()}).always(function(){t._currentLoadPromise(
null);t._currentIsLoadingPromise(null)}).canceled(function(){i.resolve();t._currentLoadPromise(null);
t._currentIsLoadingPromise(null)}),this._currentLoadPromise(r),this._currentIsLoadingPromise(i.promise(
)),this._latestLoadPromise=r.promise(),this._hasAtLeastOneReloadBeenIssuedForCurrentQuery=!0,this._latestLoadPromise}
,t.prototype.refresh=function(t){var i=this;if(this._query===undefined)throw new InvalidOperationError(
"attempt to refresh before query has been set. Make sure to call 'setQuery' before calling 'refresh'.");
if(t&&this._cancelCurrentRefresh(),this._isLoading())return this._currentLoadPromise();if(this._isRefreshing(
))return this._currentRefreshPromise();var f=this._refresh(),u=n.Internal.createCancelablePromise(f),
r=$.Deferred();return u.done(function(){r.resolve()}).fail(function(){r.reject()}).always(function()
{i._currentRefreshPromise(null);i._currentIsRefreshingPromise(null)}).canceled(function(){r.resolve(
);i._currentRefreshPromise(null);i._currentIsRefreshingPromise(null)}),this._currentRefreshPromise(u),
this._currentIsRefreshingPromise(r.promise()),u.promise()},t.prototype.onLoaded=function(){for(var t=
[],n=0;n<arguments.length;n++)t[+n]=arguments[n];return this._onLoadedCallbacks.add(t),this},t.prototype.
_load=function(){throw new AbstractMethodError("DataViewBase","_load");},t.prototype._refresh=function(
){return $.Deferred().promise()},t.prototype._release=function(){},t.prototype._isQueryEqual=function(
n,t){return MsPortalFx.Base.Utilities.deepEquals(ko.toJS(n),ko.toJS(t))},t.prototype._cancelCurrentLoad=
function(){this._currentLoadPromise()&&this._currentLoadPromise().cancel();this._currentLoadPromise(
null);this._currentIsLoadingPromise(null)},t.prototype._cancelCurrentRefresh=function(){this._currentRefreshPromise(
)&&this._currentRefreshPromise().cancel();this._currentRefreshPromise(null);this._currentIsRefreshingPromise(
null)},t}();t.DataViewBase=i})(t=n.Data||(n.Data={}))}(ExtensionCore||(ExtensionCore={}));Forms=MsPortalFx.
ViewModels.Controls.Forms;FxBase=MsPortalFx.Base,function(n){var t;(function(n){"use strict";var t=function(
){function n(n){this.showCopyField=ko.observable(!1);this.showLink=ko.observable(!1);this.showText=ko.
observable(!1);this.showCallbackLink=ko.observable(!1);this.label=n}return n.prototype.dispose=function(
){},n}(),i,r;n.PropertySheetObject=t;i=function(n){function t(t,i){n.call(this,t);this.value=ko.isObservable(
i)?i:ko.observable(i);this.showText(!0)}return __extends(t,n),t}(t);n.TextPropertySheetObject=i;r=function(
n){function t(t,i,r){n.call(this,i);var u=new Forms.CopyableLabel.ViewModel(t);u.value(ko.isObservable(
r)?r():r);u.disabled(!0);this.value=ko.observable(u);this.showCopyField(!0);ko.isObservable(r)&&(this.
_valueSubscription=r.subscribe(function(n){u.value(n)}))}return __extends(t,n),t.prototype.dispose=function(
){n.prototype.dispose.call(this);this.value().dispose();this._valueSubscription&&this._valueSubscription.
dispose()},t}(t);n.CopyFieldPropertySheetObject=r})(t=n.Models||(n.Models={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(){"use strict"})(t=n.Models||(n.Models={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(n){"use strict";var t=function(){function n(n,t){var i=this;this.url=
ko.observable("");this.text=ko.observable("");this.hotSpot=ko.observable(!1);this.url=ko.observable(
n);this.text=ko.observable(t);this.notHotSpot=ko.pureComputed(function(){return!i.hotSpot()})}return n}
(),i,r,u;n.QuickStartLinkBase=t;i=function(n){function t(t,i){n.call(this,t,i)}return __extends(t,n),
t}(t);n.QuickStartHyperLink=i;r=function(n){function t(t,i,r){n.call(this,"javascript:void(0)",i);this.
hotSpot(!0);this._openHotspotBlade=t;this._bladeDetails=r;this.linkClick=$.proxy(this._linkClick,this)}
return __extends(t,n),t.prototype._linkClick=function(){return this._openHotspotBlade()?this._openHotspotBlade(
undefined):this._openHotspotBlade(this._bladeDetails),!1},t}(t);n.QuickStartHotspotLink=r;u=function(
){function n(n,t,i,r){this.title=ko.observable(n);this.description=ko.observable(t);this.links=ko.observableArray(
r||[]);this.iconUri=ko.observable(i)}return n}();n.QuickStartSection=u})(t=n.Models||(n.Models={}))}
(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){var i;(function(t){"use strict";function i(
t){var i;return i=typeof t=="string"?t:n.Utilities.getXhrError(t),i||(i=n.Resources.genericErrorMessage),
i}function r(n,t,r,u,f,e){var s=MsPortalFx.Util.newGuid(),o,h=u,c="{0}InProgress".format(u),l="{0}Failure".
format(u),a="{0}Warning".format(u);return o=new MsPortalFx.UI.NotificationManager.Notification(r,c,3,
f||[],n,s),MsPortalFx.UI.NotificationManager.addNotifications([o]),t.done(function(t){var i=h,u=4;t&&
t.WarningMessage&&(i=a,u=1,f=f||[],f.push(t.WarningMessage));o=new MsPortalFx.UI.NotificationManager.
Notification(r,i,u,f||[],n,s,100,e?e.assetId:null);MsPortalFx.UI.NotificationManager.addNotifications(
[o])}).fail(function(t){var e=i(t),u=f||[];u.push(e);o=new MsPortalFx.UI.NotificationManager.Notification(
r,l,2,u,n,s);MsPortalFx.UI.NotificationManager.addNotifications([o])})}function u(t,u,f,e,o,s){var h=
$.Deferred(),a=[],c=0,l=[],v;return $.each(u,function(n,t){l.push(t.promise);t.promise.fail(function(
n){c++;a.push("\n\n{0} {1}".format(t.failureMessage,i(n)))})}),n.Utilities.waitForPromises(l).done(function(
){var n=a.join(" ");c>=l.length?h.reject(n):c>=1?h.resolve({WarningMessage:n}):h.resolve({})}),v=r(t,
h.promise(),f,e,o,s),{promise:v,operations:u}}function f(n,t,i,r,u){var e=MsPortalFx.Util.newGuid(),
f;f=new MsPortalFx.UI.NotificationManager.Notification(n,t,2,i,r,r?e:null,100,u?u.assetId:null);MsPortalFx.
UI.NotificationManager.addNotifications([f])}function e(n,t,i,r,u){var e=MsPortalFx.Util.newGuid(),f;
f=new MsPortalFx.UI.NotificationManager.Notification(n,t,1,i,r,r?e:null,100,u?u.assetId:null);MsPortalFx.
UI.NotificationManager.addNotifications([f])}t.getOperationErrorMessage=i;t.createOperationNotification=
r;t.createBatchOperationNotification=u;t.createFailureNotification=f;t.createWarningNotification=e})
(i=t.Notifications||(t.Notifications={}))})(t=n.UI||(n.UI={}))}(ExtensionCore||(ExtensionCore={})),function(
n){var t;(function(n){"use strict";var t=function(n){function t(t,i,r,u){var f=this;n.call(this,t,function(
n){return f._validateUsableIpAddressesIsGreaterThan256(n)});this._getItems=i;this._getItemValue=r;this.
_getUsableIpAddressCount=u}return __extends(t,n),t.prototype._validateUsableIpAddressesIsGreaterThan256=
function(n){var i=this,t=$.Deferred();return setTimeout(function(){i._isGreaterThan256(n)||t.resolve(
{valid:!1,message:i.message});t.resolve({valid:!0,message:undefined})},0),t.promise()},t.prototype._isGreaterThan256=
function(n){for(var i=this._getItems(),r=0,t=0;t<i.length;t++)n!=this._getItemValue(i[t])&&(r+=this.
_getUsableIpAddressCount(this._getItemValue(i[t])));return r+this._getUsableIpAddressCount(n)>256?!1:
!0},t}(MsPortalFx.ViewModels.CustomValidation);n.IsUsableIpAddressesMoreThan256=t})(t=n.Validation||
(n.Validation={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";var
t=function(n){function t(t,i,r,u){var f=this;n.call(this,t,function(n){return f._validateIsUnique(n)}
);this._getItems=i;this._getItemValue=r;this._isItemValueEqual=u||this._defaultIsItemValueEqual}return __extends(
t,n),t.prototype._defaultIsItemValueEqual=function(n,t){return MsPortalFx.Base.Utilities.deepEquals(
n,t)},t.prototype._validateIsUnique=function(n){var i=this,t=$.Deferred();return setTimeout(function(
){i._isUnique(n)||t.resolve({valid:!1,message:i.message});t.resolve({valid:!0,message:undefined})},0),
t.promise()},t.prototype._isUnique=function(n){for(var i=this._getItems(),r=0,t=0;t<i.length;t++)if(
this._isItemValueEqual(ko.toJS(n),ko.toJS(this._getItemValue(i[t])))&&(r+=1,r>=2))return!1;return!0}
,t}(MsPortalFx.ViewModels.CustomValidation);n.UniqueValidation=t})(t=n.Validation||(n.Validation={})
)}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";var t=function(){function n(
n,t){this.paramName=n;this.param=t}return n.Argument=function(t,i){return new n(t,i)},n.prototype.notNull=
function(){if(this.param===undefined||this.param===null)throw"{0} cannot be null or undefined.".format(
this.paramName);return this},n.prototype.notNullOrEmpty=function(){if(this.notNull(),$.isArray(this.
param)){if(!this.param.length)throw"{0} cannot be an empty array".format(this.paramName);}else if(typeof
this.param=="string"&&this.param==="")throw"{0} cannot be an empty string".format(this.paramName);return this}
,n}();n.Requires=t})(t=n.Validation||(n.Validation={}))}(ExtensionCore||(ExtensionCore={})),function(
n){var t;(function(t){var i;(function(t){"use strict";var i=function(t){function i(i){var r=this;t.call(
this,i);this.uri=ko.observable("");this.paused=ko.observable(!1);this.disabled=ko.observable(!1);this.
_xhr=new XMLHttpRequest;this._started=ko.observable(!1);this._responseIndex=0;ko.reactor(i,function(
){r._started()&&r.uri()?(r._closeStream(),r.clearLog().then(function(){r.writeInformation(n.Resources.
LogStream.connectingMessage);r._openStream()})):(r._closeStream(),r.clearLog())});i.registerForDispose(
{dispose:function(){r._xhr.abort()}})}return __extends(i,t),i.prototype.start=function(){this._started(
!0)},i.prototype.stop=function(){this._started(!1)},i.prototype.clearLog=function(){return this.clear.
execute()},i.prototype.writeInformation=function(n){this.logItem({text:n,type:1})},i.prototype.writeWarning=
function(n){this.logItem({text:n,type:3})},i.prototype.writeError=function(n){this.logItem({text:n,type:
4})},i.prototype._openStream=function(){var t=this;(this._closeStream(),this.uri()&&!this.disabled())&&
(this._xhr.onprogress=function(){var n=t._xhr.responseText,i=n.substr(t._responseIndex,n.length-t._responseIndex);
t.paused()||(t._responseIndex=t._xhr.responseText.length,i&&t.write(i))},this._xhr.onerror=function(
){t.writeWarning(n.Resources.LogStream.connectionLostMessage);t.writeInformation(n.Resources.LogStream.
reconnectingMessage);t._openStream()},MsPortalFx.Portal.Security.getAuthorizationToken().then(function(
n){t._xhr.open("get",t.uri());t._xhr.setRequestHeader("Authorization",n.header);t._xhr.setRequestHeader(
"x-ms-client-session-id",window.fx.environment.sessionId);t._xhr.setRequestHeader("x-ms-client-request-id",
MsPortalFx.Util.newGuid());t._xhr.send()}).catch(function(){t.writeError("Failed to connect.")}))},i.
prototype._closeStream=function(){this._xhr.abort();this._responseIndex=0},i}(MsPortalFx.ViewModels.
Controls.LogStream.ViewModel);t.ViewModel=i})(i=t.LogStream||(t.LogStream={}))})(t=n.Controls||(n.Controls=
{}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){var i;(function(t){"use strict";
var i=function(t){function i(i,r){var u=this;t.call(this,i,null,MsPortalFx.ViewModels.Controls.Lists.
Grid.Extensions.EditableRow|MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.RightClickableRow|MsPortalFx.
ViewModels.Controls.Lists.Grid.Extensions.SelectableRow,{selectableRow:{selectionMode:1,itemMatchesSelection:
function(n,t){return n===t},createSelection:function(n){return n}},editableRow:$.extend({getItems:function(
){return r.items},placement:0,maxBufferedRows:Number.MAX_VALUE,allowEditExistingItems:!0,allowEditCreatedItems:
!0},r.editableRow)});this._localEditScope=r.editableRow.editScope;this._localLifetimeManager=i;this.
showHeader=!1;this.createdItems=ko.observableArray();ko.reactor(this._localLifetimeManager,function(
){var n=u._localEditScope()?u._localEditScope().getCreated(r.items)():[];u.createdItems(n.slice())});
this.rowAdd=function(){};this.columns.subscribe(this._localLifetimeManager,function(t){t.forEach(function(
t){if(t.editableFormat){t.editableFormatOptions=t.editableFormatOptions||{};t.editableFormatOptions.
htmlBindingsData=t.editableFormatOptions.htmlBindingsData||{};t.editableFormatOptions.htmlBindingsData.
validations=t.editableFormatOptions.htmlBindingsData.validations||[];var i=null;t.validateValueIsUniqueIgnoreCase&&
(i=function(n,t){return StringEx.equals(n,t,0)});t.validateValueIsUnique&&t.editableFormatOptions.htmlBindingsData.
validations.push(new n.Validation.UniqueValidation(t.validateValueIsUniqueMessage||n.Resources.EditableGrid.
Validation.fieldMustBeUnique,function(){return[].concat(u.items(),u.createdItems())},function(n){return n[
t.itemKey]},i))}})});this.dirty=ko.pureComputed(function(){return u._isDirty()});this.columns(r.columns||
[])}return __extends(i,t),i.prototype.dispose=function(){this.dirty.dispose();this.columns().forEach(
function(n){var t=n;t.dispose&&t.dispose()})},i.prototype._isDirty=function(){for(var t,n=0;n<this.items(
).length;n++)if(t=this._localEditScope().getEditState(this.items()[n]),t()!==0)return!0;return this.
createdItems().length?!0:!1},i}(MsPortalFx.ViewModels.Controls.Lists.Grid.ViewModel);t.ViewModel=i})
(i=t.EditableGrid||(t.EditableGrid={}))})(t=n.Controls||(n.Controls={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(t){var i;(function(t){"use strict";var i=function(){function t(t,i,
r){this.name=ko.observable("");this.itemKey="";this.validateValueIsUnique=!1;this.validateValueIsUniqueIgnoreCase=
!1;this.validateValueIsUniqueMessage=n.Resources.EditableGrid.Validation.fieldMustBeUnique;this.editableFormat=
1e3;this.editableFormatOptions={htmlBindingsType:0,htmlBindingsTemplate:"",htmlBindingsData:{}};r=r||
{};this.name(t);this.itemKey=i;r.validations&&(this.editableFormatOptions.htmlBindingsData.validations=
r.validations);r.validateValueIsUniqueIgnoreCase!==undefined&&(this.validateValueIsUniqueIgnoreCase=
r.validateValueIsUniqueIgnoreCase);r.validateValueIsUnique!==undefined&&(this.validateValueIsUnique=
r.validateValueIsUnique);r.validateValueIsUniqueMessage!==undefined&&(this.validateValueIsUniqueMessage=
r.validateValueIsUniqueMessage)}return t}();t.EditableColumn=i})(i=t.EditableGrid||(t.EditableGrid={
}))})(t=n.Controls||(n.Controls={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(
t){var i;(function(t){"use strict";var i=function(t){function i(i,r,u){t.call(this,i,r,u);this.format=
1e3;this.formatOptions={htmlBindingsType:0,htmlBindingsTemplate:"<!-- ko if: settings.column.hideValue --><!-- ko if: settings.rowMetadata.editState --><span data-bind='text: value'><\/span><!-- /ko --><!-- ko ifnot: settings.rowMetadata.editState --><span data-bind='text: settings.column.hiddenValueText'><\/span><!-- /ko --><!-- /ko --><!-- ko ifnot: settings.column.hideValue --><span data-bind='text: value'><\/span><!-- /ko -->"};
u=u||{};this.editableFormatOptions.htmlBindingsType=2;var f=this.editableFormatOptions.htmlBindingsData;
u.emptyValueText=this.name();u.emptyValueText&&(f.emptyValueText=u.emptyValueText);this.hideValue=u.
hideValue||ko.observable(!1);this.hiddenValueText=u.hiddenValueText||n.Resources.EditableGrid.hiddenForSecurity}
return __extends(i,t),i}(t.EditableColumn);t.TextBoxColumn=i})(i=t.EditableGrid||(t.EditableGrid={})
)})(t=n.Controls||(n.Controls={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n)
{var t;(function(n){"use strict";var t=function(n){function t(t,i,r,u){var e=this,f;n.call(this,i,r,
u);this.format=1e3;this.formatOptions={textLookup:ko.observable({}),defaultValueKey:"##DEFAULT##",htmlBindingsType:
0,htmlBindingsTemplate:"<!-- ko if: settings.column.formatOptions.textLookup()[value()] --><span data-bind='text: settings.column.formatOptions.textLookup()[value()]'><\/span><!-- /ko --><!-- ko ifnot: settings.column.formatOptions.textLookup()[value()] --><span data-bind='text: settings.column.formatOptions.textLookup()[settings.column.formatOptions.defaultValueKey]'><\/span><!-- /ko -->"};
this.editableFormatOptions.htmlBindingsType=5;f=this.editableFormatOptions.htmlBindingsData;f.options=
u.options||ko.observableArray([]);ko.reactor(t,function(){e._setTextLookupOptions()})}return __extends(
t,n),t.prototype._setTextLookupOptions=function(){var t=this.editableFormatOptions.htmlBindingsData,
n={};t.options().forEach(function(t){n[t.value.toString()]=t.text});this.formatOptions.textLookup(n)}
,t}(n.EditableColumn);n.DropDownColumn=t})(t=n.EditableGrid||(n.EditableGrid={}))})(t=n.Controls||(n.
Controls={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){var i;(function(t){
"use strict";var i=function(t){function i(n,i,r){t.call(this,n,i,r);this.format=110;this.formatOptions=
{textLookup:{}};r=r||{options:[]};this.editableFormatOptions.htmlBindingsType=3;var u=this.editableFormatOptions.
htmlBindingsData;u.multiselect=ko.observable(!0);u.groups=ko.observableArray([{key:"",text:ko.observable(
""),disabled:ko.observable(!1),selected:ko.observable(!1),options:ko.observableArray(r.options||[])}]);
r.maxSelectAllowed&&(u.maxSelectAllowed=ko.observable(r.maxSelectAllowed));r.multiItemsDisplayFormat&&
(u.multiItemsDisplayFormat=ko.observable(r.multiItemsDisplayFormat));r.multiItemsMaxDisplayFormat&&(
u.multiItemsMaxDisplayFormat=ko.observable(r.multiItemsMaxDisplayFormat));r.valueSeparator&&(u.valueSeparator=
r.valueSeparator);r.displaySeparator&&(u.displaySeparator=r.displaySeparator);this.formatOptions.textLookup=
this._generateTextLookupDictionary()}return __extends(i,t),i.prototype._generateTextLookupDictionary=
function(){var i={},t=this.editableFormatOptions.htmlBindingsData,e=t.maxSelectAllowed?t.maxSelectAllowed(
):Number.MAX_VALUE,u=t.multiItemsDisplayFormat?t.multiItemsDisplayFormat():n.Resources.EditableGrid.
MultiselectDropdown.displayFormat,o=t.multiItemsMaxDisplayFormat?t.multiItemsMaxDisplayFormat():n.Resources.
EditableGrid.MultiselectDropdown.maxDisplayFormat,s=t.valueSeparator||String.fromCharCode(29),h=t.displaySeparator||
";",c=t.groups,r=[],f;return c().forEach(function(n){r.push.apply(r,n.options().map(function(n){return n.
value}))}),f=this._getAllCombinations(r),f.forEach(function(n){var t=n.length,r=n.join(s),f=n.join(h);
i[r]=t<e?u.format(t,r,f):o.format(t,r,f)}),i["##DEFAULT##"]=u.format(0,"",""),i},i.prototype._getAllCombinations=
function(n){for(var r=[],u=1<<n.length,t,i=0;i<u;i++)t=[],n.forEach(function(n,r){i&1<<r&&t.push(n)}
),t.length&&r.push(t);return r},i}(t.EditableColumn);t.MultiselectDropDownColumn=i})(i=t.EditableGrid||
(t.EditableGrid={}))})(t=n.Controls||(n.Controls={}))}(ExtensionCore||(ExtensionCore={})),function(n)
{var t;(function(n){"use strict";var t=function(n){function t(t){n.call(this);this.selectable=MsPortalFx.
ViewModels.Part.createSelectableViewModel(t)}return __extends(t,n),t}(MsPortalFx.ViewModels.Internal.
ContainerViewModel);n.CommandContainer=t})(t=n.ViewModels||(n.ViewModels={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(n){"use strict";var t=function(n){function t(t,i){n.call(this,t);var
r={stepStatuses:[]};i&&i.content&&i.content.currentState&&(r=i.content.currentState);this.savedState=
ko.observable(r);this.currentState=ko.observable(r);this.stepInput=this._getStepInput(r);this.stepOutput=
ko.observable();this.parameterCollectionErrors=ko.observable();this.privateFcTpBI=new MsPortalFx.ViewModels.
ParameterCollection.Internal.CollectorBindingInternals;this._baseContainer=t;this._baseProviderCommit=
null;this._initialLoadComplete=!1;this.enabled(!1)}return __extends(t,n),t.prototype.onInputsSet=function(
n){var t=this,i,r;return this._initialLoadComplete||(this.parameterCollectionErrors.subscribe(this._baseContainer,
function(n){t.privateFcTpBI.errors(n);t.privateFcTpBI.errors([])}),this.stepOutput.subscribe(this._baseContainer,
function(n){t._processStepOutput(n)}),this._baseContainer.selectable.isSelected.subscribe(this._baseContainer,
function(){t.savedState(t.currentState())}),this._initialLoadComplete=!0,this.setDynamicBladeSelection(
),this.enabled(!0)),n.fromProviderBindingInternals&&(i=n.fromProviderBindingInternals.commit,!i||i===
this._baseProviderCommit||(this._baseProviderCommit=i,r=this.onProviderCommit(null,n.fromProviderBindingInternals.
outputs),this.enabled(!1),r.then(function(n){t.enabled(!0);n?t._baseContainer.selectable.isSelected(
!1):t.parameterCollectionErrors([{errorMessage:"Parameter Collection failed!"}])},function(){t.enabled(
!0)}))),null},t.prototype.getProviderInputs=function(){throw new Error("The method 'getProviderInputs' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterCollector' interface.");
},t.prototype.onProviderCommit=function(){throw new Error("The method 'onProviderCommit' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterCollector' interface.");
},t.prototype._processStepOutput=function(n){n&&this.currentState({stepStatuses:[{stepId:n.stepId,status:
n.status}],selectedStepId:n.stepId})},t.prototype._getStepInput=function(n){var t=n&&n.stepStatuses&&
n.stepStatuses.length?n.stepStatuses[0].status:0;return ko.observable({stepId:"NoWizardStep",status:
t,isFirstStep:!0,isLastStep:!0,isOptional:!1,disabled:!1,allowToggleProvisioningLocation:!1})},t.prototype.
setDynamicBladeSelection=function(){this.privateFcTpBI.inputs(this.getProviderInputs(null));var t={"collectorBindingInternals-inputs":
this.privateFcTpBI.inputs,"collectorBindingInternals-errors":this.privateFcTpBI.errors,stepInput:this.
stepInput},i=t,n=this.getDynamicBladeTarget();n&&(n.detailBladeInputs=t,i=n);this._baseContainer.selectable.
selectedValue(i)},t.prototype.getDynamicBladeTarget=function(){return null},t}(MsPortalFx.ViewModels.
OpenBladeCommand);n.ParameterCollectorCommandBase=t})(t=n.ViewModels||(n.ViewModels={}))}(ExtensionCore||
(ExtensionCore={})),function(n){var t;(function(n){"use strict";var t=function(){function n(n,t,i){this.
_enabled=!0;this._lifetime=n;this._stepId=t;this._options=i;i.disabledByDefault&&this.disable();this.
_setupClicks()}return n.prototype._setupClicks=function(){var n=this;this._options.clickedSelectable.
isSelected.subscribe(this._lifetime,function(t){if(t){if(n._enabled){var i={"collectorBindingInternals-inputs":
n._options.getProviderInputs.call(n._options.context),"collectorBindingInternals-errors":{},stepInput:
{isLastStep:!1,stepId:n._stepId,status:1}},r=$.extend({},n._options.bladeSelection,{detailBladeInputs:
i});n._options.triggeredSelectable.selectedValue(r);n._options.triggeredSelectable.isSelected(!0)}}else
n._options.triggeredSelectable.isSelected(!1)})},n.prototype.onPartInputsSet=function(n){var i=this,
t,r;return n.fromProviderBindingInternals&&n.stepOutput&&n.stepOutput.stepId===this._stepId&&(t=n.fromProviderBindingInternals.
commit,!!t&&t!==this._baseProviderCommit)?(this._baseProviderCommit=t,r=this._options.onProviderCommit.
call(this._options.context,n.fromProviderBindingInternals.outputs),r.then(function(n){n&&(i._options.
triggeredSelectable.isSelected(!1),i._options.clickedSelectable.isSelected(!1))})):null},n.prototype.
enable=function(){this._enabled=!0},n.prototype.disable=function(){this._enabled=!1},n}();n.CustomParameterCollectionStep=
t})(t=n.ViewModels||(n.ViewModels={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(
t){"use strict";function r(n,t){return n.registerForDispose({dispose:function(){i.releaseItem(t)}}),
i.getOrAddItem(t,function(){return{isDirty:ko.observableArray(),operationPromise:ko.observable(null),
sections:{},form:ko.observable()}})}var i=new n.Internal.RefCountCache;t.getOrCreateEditScopeMetadata=
r})(t=n.Data||(n.Data={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";
var i=function(n){function t(t){var i=this,r;n.call(this);this.bindings={};this.iconUri=ko.observable(
"");this.container=t;this.status=ko.observable(0);this.enabled=ko.observable(!1);this.icon=ko.observable(
MsPortalFx.Base.Images.Blank());r=this.onInputsSet;this.onInputsSet=function(n){return n&&i._merge(n,
i.bindings),r.call(i,n)}}return __extends(t,n),t.prototype.initialize=function(){var n=this;this.iconUri.
subscribe(this.container,function(){n._setIconFromIconUri()});this._setIconFromIconUri()},t.prototype.
_setIconFromIconUri=function(){this.iconUri()&&this.icon(MsPortalFx.Base.Images.ImageUri(MsPortalFx.
Base.Resources.getContentUri(this.iconUri())))},t.prototype.onInputsSet=function(){return $.Deferred(
).resolve()},t.prototype._merge=function(n,t){var i=this;$.each(n,function(n,r){var u=t[n];u&&(ko.isObservable(
u)?u(r):i._merge(r,u))})},t}(MsPortalFx.ViewModels.Command),t;n.CommandBase=i;t=function(n){function t(
t){var i=this,r;n.call(this);this.bindings={};this.iconUri=ko.observable("");this.container=t;this.icon=
ko.observable(MsPortalFx.Base.Images.Blank());r=this.onInputsSet;this.onInputsSet=function(n){return n&&
i._merge(n,i.bindings),r(n)}}return __extends(t,n),t.prototype.initialize=function(){var n=this;this.
iconUri.subscribe(this.container,function(){n._setIconFromIconUri()});this._setIconFromIconUri()},t.
prototype._setIconFromIconUri=function(){this.iconUri()&&this.icon(MsPortalFx.Base.Images.ImageUri(MsPortalFx.
Base.Resources.getContentUri(this.iconUri())))},t.prototype.onInputsSet=function(){return $.Deferred(
).resolve()},t.prototype._merge=function(n,t){var i=this;$.each(n,function(n,r){var u=t[n];u&&(ko.isObservable(
u)?u(r):i._merge(r,u))})},t}(MsPortalFx.ViewModels.UriCommand);n.UriCommandBase=t})(t=n.ViewModels||
(n.ViewModels={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";var
i=function(t){function i(i){var r=this;t.call(this,i);this.editScopeId=ko.observable(null);this.shouldEnableHackToShowNag=
!1;this.status=ko.observable(0);this.enabled=ko.observable(!1);this.icon(MsPortalFx.Base.Images.Blank(
));this.bindings={editScopeId:ko.observable(),formDirty:ko.observable()};this.bindings.editScopeId.subscribe(
this.container,function(t){r.editScopeId(t);r.acquireEditScope(r.editScopeId()).done(function(n){r._editScope=
n});r.editScopeMetadata=n.Data.getOrCreateEditScopeMetadata(r.container,r.editScopeId());r.isDirty=ko.
pureComputed(function(){var n=!1;return r.editScopeMetadata.isDirty().forEach(function(t){t&&(n=n||t(
))}),n});r.isDirty.subscribe(r.container,function(n){r.enabled(r.bindings.editScopeId()&&n)});r.editScopeMetadata.
operationPromise.subscribe(r.container,function(n){n&&(r.enabled(!1),n.done(function(){r.enabled(!1)}
).fail(function(){r.enabled(!0)}))});r.shouldEnableHackToShowNag&&r._enableHackToShowNag()});this.execute=
function(n){r.status(1);var t=r._execute(n),i=t?t.always(function(){r.status(0)}):null;i&&r.editScopeMetadata.
operationPromise(i)};this.status(0);this.enabled(!1)}return __extends(i,t),i.prototype.acquireEditScope=
function(){throw new Error("acquireEditScope should be implemented in child command");},i.prototype.
getEditScope=function(){return this._editScope},i.prototype._execute=function(){throw new Error("_execute should be implemented in child command");
},i.prototype.isEditScopeSectionDirty=function(n){return this.editScopeMetadata&&this.editScopeMetadata.
sections&&this.editScopeMetadata.sections[n]&&this.editScopeMetadata.sections[n].dirty?this.editScopeMetadata.
sections[n].dirty():!1},i.prototype.updateItemsWithEdits=function(n,t,i){var i=i||function(n){return n}
,u=this.getItemsWithEdits(t),r=i(u());n()?n.replaceAll&&n.replaceAll(r):n(r)},i.prototype.getItemsWithEdits=
function(t){return n.Data.getEditScopeItemsWithEdits(this._editScope,t)},i.prototype._enableHackToShowNag=
function(){var r=this,t=ko.observable(undefined),i;i=n.Internal.acquireEditScopeOverExistingData(this.
container,this.editScopeId(),function(){return n.Utilities.convertToPromise({dirty:ko.observable(!1)})}
);i.then(function(n){t(n)});ko.reactor(this.container,function(){t()&&t().root.dirty(r.isDirty())})}
,i}(t.CommandBase);t.FormCommandBase=i})(t=n.ViewModels||(n.ViewModels={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(n){"use strict";function f(n,t,i,u){var f=r(n);f.registerFactory(t,
i,u)}function e(n,i,u,f,e){var c=r(n),h=c.getFactory(i,u),o;if(!h&&window[n]&&window[n].Shared&&window[
n].Shared[u]&&(h=function(t,i,r){return new window[n].Shared[u](t,i,r)}),!h)throw new Error("ViewModelFactoryException: view model factory with name '{0}' and type '{1}' not found".
format(u,t[i]));if(o=h.apply(h,f),!o)throw new Error("ViewModelFactoryException: view model factory with name '{0}' and type '{1}' returned a view model that was null or undefined".
format(u,t[i]));return e&&($.extend(o,e),o.content&&$.extend(o.content,e)),o.content&&s(o.content),$.
isFunction(o.initialize)&&o.initialize(),o}function r(n){var t=i[n];return t||(t=i[n]=new u,t.registerFactory(
1,"EmptyViewModel",function(n,t){return o(n,t)})),t}function o(n,t){return n.selectable=MsPortalFx.ViewModels.
Part.createSelectableViewModel(t),{}}function s(n){if(n)for(var t in n)typeof n[t]!="function"||ko.isObservable(
n[t])||(t||"").indexOf("_")===0||(n[t]=n[t].bind(n))}var i={},t,u;(function(n){n[n.General=0]="General";
n[n.Part=1]="Part"})(n.ViewModelType||(n.ViewModelType={}));t=n.ViewModelType;n.registerViewModelFactory=
f;n.getViewModel=e;u=function(){function n(){this._stores=n._createStores()}return n.prototype.registerFactory=
function(n,i,r){var u=this._getStore(n);if(this.getFactory(n,i))throw new Error("ViewModelFactoryException: a view model factory with name '{0}' and type '{1}' already exists".
format(i,t[n]));u[i]=r},n.prototype.getFactory=function(n,t){var i=this._getStore(n);return i[t]},n.
prototype._getStore=function(n){var i=t[n];if(!this._stores[i])throw new Error("ViewModelFactoryException: invalid view model store '{0}'".
format(i));return this._stores[i]},n._createStores=function(){var n={},i=[];for(var r in t)typeof t[
r]=="number"&&i.push(r);return i.forEach(function(t){n[t]={}}),n},n}()})(t=n.ViewModels||(n.ViewModels=
{}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(){"use strict"})(t=n.ViewModels||
(n.ViewModels={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(){"use strict"})(
t=n.ViewModels||(n.ViewModels={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n)
{var t;(function(n){"use strict";function i(n,i,r,u){var e=$.Deferred(),f,o;return t[n]||(o={},typeof
r=="string"?o.typeName=r:o.typeMetadata=r,t[n]=MsPortalFx.Internal.Data.createEditScope(i(),o)),f=t[
n],u?u.done(function(){e.resolve(f)}).fail(function(){e.reject(0)}):e.resolve(f),{editScope:f,loadedPromise:
e.promise(),loaded:ko.observable(!1),getLoadedEditScope:function(){return f}}}var t={};n.acquireEditScope=
i})(t=n.EditScopeManager||(n.EditScopeManager={}))})(t=n.Data||(n.Data={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(n){var t;(function(n){"use strict";var t=function(n){function t(t,i,
r){n.call(this,t,i,r);this.format=1e3;this.formatOptions={htmlBindingsType:1,htmlBindingsData:{label:
""}};this.formatOptions.htmlBindingsData.label=t;this.editableFormatOptions.htmlBindingsType=1;var u=
this.editableFormatOptions.htmlBindingsData;u.label=t}return __extends(t,n),t}(n.EditableColumn);n.CheckBoxColumn=
t})(t=n.EditableGrid||(n.EditableGrid={}))})(t=n.Controls||(n.Controls={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";function t(n,
t){return MsPortalFx.Services.Rpc.invokeCallback("AppInsightsExtension","LinkToAIComponent",n,t)}n.tagAccount=
t})(t=n.ApplicationInsightsExtension||(n.ApplicationInsightsExtension={}))})(t=n.Rpc||(n.Rpc={}))})(
t=n.Azure||(n.Azure={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){var i;(function(
t){var i;(function(t){"use strict";function u(t){var i=o(t);return n.Net.post(i).then(function(n){var
i=n&&n.properties&&n.properties.license_key;if(!i)throw new Error("Could not parse license key from response for account '{0}'".
format(t));return i})}function f(t,i){var r=e(t);return n.Csm.getResource(t).then(function(t){var u=
t.tags||{},e="hidden-link:{0}".format(i),f;return u[e]?f=Q.resolve(null):(u[e]="Resource",f=n.Net.ajax(
r,{type:"PATCH",data:{tags:u}})),f})}function e(n){var t=MsPortalFx.ViewModels.Services.ResourceTypes.
parseResourceDescriptor(n);return"{csmUri}/subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/NewRelic.APM/accounts/{accountName}?api-version={apiVersion}".
format({csmUri:window.fx.environment.csmManagementServiceUri,apiVersion:"2014-10-01",subscriptionId:
t.subscription,resourceGroup:t.resourceGroup,accountName:t.resource})}function o(n){var t=MsPortalFx.
ViewModels.Services.ResourceTypes.parseResourceDescriptor(n);return"{csmUri}/subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/NewRelic.APM/accounts/{accountName}/listKeys?api-version={apiVersion}".
format({csmUri:window.fx.environment.csmManagementServiceUri,apiVersion:"2014-10-01",subscriptionId:
t.subscription,resourceGroup:t.resourceGroup,accountName:t.resource})}var i={entityType:!0,idProperties:
["id"],name:"NewRelicExtension.Account",properties:{id:null,name:null,type:null,location:null,tags:null}},
r;MsPortalFx.Data.Metadata.setTypeMetadata(i.name,i);r=new n.Data.AtomizationContext;t.accountsCache=
new MsPortalFx.Data.QueryCache({loader:new n.Data.AtomizedDataCacheLoader({entityTypeName:i.name,sourceUri:
function(){return"/rpc/ListNewRelicAccounts"},supplyData:function(){return n.Csm.listResources("NewRelic.APM/accounts")}
,atomization:{context:r,scope:2}})});t.accountsInSubscriptionCache=new MsPortalFx.Data.QueryCache({loader:
new n.Data.AtomizedDataCacheLoader({entityTypeName:i.name,sourceUri:function(){return"/rpc/ListNewRelicAccountsInSubscription"}
,supplyData:function(t,i,r,u,f){return n.Csm.listResourcesInSubscription(f,"NewRelic.APM/accounts")}
,atomization:{context:r,scope:1,itemMatchesAtomization:function(n,t){var i=MsPortalFx.ViewModels.Services.
ResourceTypes.parseResourceDescriptor(n.id());return StringEx.equals(i.subscription,t,0)}}})});t.getAccountLicenseKey=
u;t.tagAccount=f})(i=t.NewRelicExtension||(t.NewRelicExtension={}))})(i=t.Rpc||(t.Rpc={}))})(t=n.Azure||
(n.Azure={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){var t;(function(n){
var t;(function(n){"use strict";var t=function(){function n(){}return n}();n.CreateAccountWizardModel=
t})(t=n.NewRelicExtension||(n.NewRelicExtension={}))})(t=n.SharedModels||(n.SharedModels={}))})(t=n.
Azure||(n.Azure={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){var t;(function(
n){var t;(function(n){"use strict";var i=function(){function n(){this.ReservedIpAddress=new t}return n}
(),t;n.ReservedIpAddressPickerModel=i;t=function(){function n(){this.subscriptionId=ko.observable();
this.location=ko.observable();this.resourceGroup=ko.observable();this.ipAddress=ko.observable();this.
selectedResourceId=ko.observable();this.newIpAddressName=ko.observable()}return n}();n.ReservedIpAddressParameters=
t})(t=n.ClassicNetworkExtension||(n.ClassicNetworkExtension={}))})(t=n.SharedModels||(n.SharedModels=
{}))})(t=n.Azure||(n.Azure={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(t){"use strict";
function u(t){return Q(n.Csm.getSubscriptionIdsAsync()).then(function(n){var u=n.map(function(n){return i(
n,t)});return Q.all(u).spread(function(){var n=Array.prototype.slice.call(arguments),t=Array.prototype.
concat.apply([],n);return r(t)})})}function i(t,i){var u="{csmUri}/subscriptions/{subscriptionId}/resources?api-version={apiVersion}",
f;return i&&(u+="&$filter=resourceType eq '{resourceType}'"),f=u.format({csmUri:window.fx.environment.
csmManagementServiceUri,apiVersion:window.fx.environment.csmApiVersion,subscriptionId:t,resourceType:
i}),n.Net.get(f).then(function(n){var t=n.value?n.value:n;return t=t||[],r(t)})}function f(n){var t=
MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceDescriptor(n),r=t.subscription,u="{0}/{1}".
format(t.provider,t.type);return i(r,u).then(function(t){var i=t.first(function(t){return StringEx.equals(
n,t.id,0)});if(!i)throw new Error("Resource '{0}' not found".format(n));return i})}function r(n){return n.
distinct(function(n,t){return StringEx.equals(n.id,t.id,0)})}t.listResources=u;t.listResourcesInSubscription=
i;t.getResource=f})(t=n.Csm||(n.Csm={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(
n){"use strict";function t(n,t,r){var b=["galleryParameters","parameterList","constructor"],f,s,y,u,
c,h,p,k,o,l,d,a,w,e,v;for(f in n.parameterList){s=t.parameterList[f];y={};s.constraints&&s.constraints.
custom&&s.constraints.custom.length>0&&s.constraints.custom.forEach(function(n){y[n.key]=n.value});for(
u in n)b.indexOf(u)===-1&&(c=y[u]||f,n[u][c]!==undefined&&ko.isObservable(n[u][c])&&n[u][c](n.parameterList[
f]()))}h=[];for(u in n)if(p=!1,b.indexOf(u)===-1){for(f in n[u])if(!n[u][f]()){p=!0;break}p||h.push(
u)}if(h.length===1)return h.first();if(r){k=i();o=[];for(f in r){l=r[f];d=n.parameterList[f]();for(a
in l)w=k[a],w&&w(d,l[a].condition)&&o.push(l[a].templates)}if(o.length){for(e=o[0],v=1;v<o.length;v++)
e=e.intersect(o[v]);if(e=e.intersect(h),e.length===1)return e.first()}}}function i(){return{StringEmpty:
function(n){return!n},StringNotEmpty:function(n){return!!n},StringEquals:function(n,t){return StringEx.
equals(n,t)},GreaterThan:function(n,t){return n>t},LessThan:function(n,t){return n<t},GreaterThanOrEqual:
function(n,t){return n>=t},LessThanOrEqual:function(n,t){return n<=t},Equal:function(n,t){return n===
t},Null:function(n){return!n},NotNull:function(n){return!!n},False:function(n){return!n},True:function(
n){return n}}}n.populateNestedParameters=t})(t=n.Csm||(n.Csm={}))}(ExtensionCore||(ExtensionCore={})
),function(n){var t;(function(n){"use strict";var t=function(){function n(){}return n.prototype.on=function(
n,t){var i=this,r=function(){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];t.apply(i,r)}
,u;$(this).on(n,r);return u=function(){$(i).off(n,r)},{dispose:u}},n.prototype.trigger=function(n,t)
{$(this).trigger(n,t)},n}();n.EventSource=t})(t=n.Utilities||(n.Utilities={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(n){"use strict";function t(n){n._editScopeCache._loadEdits=function(
){return Q(null)};n._editScopeCache._saveEdits=function(){return Q(null)}}n.MockCreateV1ViewModel=t}
)(t=n.Utilities||(n.Utilities={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n)
{"use strict";var t=function(){function n(n){this._resourcePartExtenders=[];this._extensionName=n}return n.
prototype.registerResourceExtenderViewModel=function(n,t){var i=this;this._resourcePartExtenders.push(
t);n.registerForDispose({dispose:function(){i._resourcePartExtenders.remove(t)}})},n.prototype.signalAssetRefresh=
function(n,t){var i=this;this._resourcePartExtenders.forEach(function(r){r.signalAssetRefresh(i._extensionName,
n,t)})},n}();n.ResourceExtender=t})(t=n.ViewModels||(n.ViewModels={}))}(ExtensionCore||(ExtensionCore=
{})),function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";var f=function(
n){function i(){n.apply(this,arguments);this.Network=new t}return __extends(i,n),i}(MsPortalFx.Services.
Gallery.GalleryDataModel),t,u,i,r;n.VirtualNetworkQuickCreateModel=f;t=function(){function n(){this.
vnetName=ko.observable("");this.vnetAddressSpace=ko.observable("");this.vnetPrimaryDns=ko.observable(
"");this.vnetSecondaryDns=ko.observable("");this.vnetSubnetName=ko.observable("");this.vnetSubnetAddress=
ko.observable("")}return n}();n.NetworkQuickCreateParameters=t;u=function(){function n(){this.Validation=
new i;this.Fields=new r}return n}();n.VirtualNetworkQuickCreateOptions=u;i=function(){function n(){this.
maxCidr=ko.observable()}return n}();n.NetworkQuickCreateValidationOptions=i;r=function(){function n(
){this.hideDns=ko.observable()}return n}();n.NetworkQuickCreateFieldOptions=r})(t=n.ClassicNetworkExtension||
(n.ClassicNetworkExtension={}))})(t=n.SharedModels||(n.SharedModels={}))})(t=n.Azure||(n.Azure={}))}
(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){var t;(function(n){var t;(function(
n){"use strict";var i=function(n){function i(){n.apply(this,arguments);this.Network=new t}return __extends(
i,n),i}(MsPortalFx.Services.Gallery.GalleryDataModel),t;n.VirtualNetworkPickerModel=i;t=function(){function n(
){this.vnetResourceId=ko.observable("");this.vnetName=ko.observable("");this.vnetAddressSpace=ko.observable(
"");this.vnetPrimaryDns=ko.observable("");this.vnetSecondaryDns=ko.observable("");this.vnetSubnetName=
ko.observable("");this.vnetSubnetAddress=ko.observable("")}return n}();n.NetworkParameters=t})(t=n.ClassicNetworkExtension||
(n.ClassicNetworkExtension={}))})(t=n.SharedModels||(n.SharedModels={}))})(t=n.Azure||(n.Azure={}))}
(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){var t;(function(n){var t;(function(
n){"use strict";var i=function(n){function i(){n.apply(this,arguments);this.Subnet=new t}return __extends(
i,n),i}(MsPortalFx.Services.Gallery.GalleryDataModel),t;n.SubnetPickerModel=i;t=function(){function n(
){this.subnetName=ko.observable("");this.subnetAddress=ko.observable("")}return n}();n.SubnetParameters=
t})(t=n.ClassicNetworkExtension||(n.ClassicNetworkExtension={}))})(t=n.SharedModels||(n.SharedModels=
{}))})(t=n.Azure||(n.Azure={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(n){"use strict";
function t(n){var t=ko.observable(n),i=ko.observable(n);return{getEditableObservable:function(){return t}
,getOriginalObservable:function(){return i}}}function i(n){var t=n.validate.peek();n.validate(isNaN(
t)?0:t+1)}function r(t,i,r){i.value.subscribe(t,function(){n.triggerFormFieldValidation(r)})}n.createDefaultFieldValueAccessors=
t;n.triggerFormFieldValidation=i;n.linkFormFieldValidation=r})(t=n.Utilities||(n.Utilities={}))}(ExtensionCore||
(ExtensionCore={})),function(n){var t;(function(t){"use strict";var i=function(t){function i(i,r,u,f)
{var s=this,e,o;u=u||n.Resources.Field.ConfirmPassword.title;e=new MsPortalFx.ViewModels.CustomValidation(
n.Resources.Validation.confirmPassword,function(n){return s._validatePasswordsMatch(n)});o=[e];t.call(
this,i,n.Utilities.createDefaultFieldValueAccessors(""),u,o,f);this._passwordField=r;n.Utilities.linkFormFieldValidation(
i,r,this)}return __extends(i,t),i.prototype._validatePasswordsMatch=function(t){var i={valid:!0,message:
""},r=this._passwordField.value();return r&&!StringEx.equals(r,t)&&(i.valid=!1,i.message=n.Resources.
Validation.confirmPassword),n.Utilities.convertToPromise(i)},i}(MsPortalFx.ViewModels.Obsolete.PasswordField);
t.ConfirmPasswordField=i})(t=n.ViewModels||(n.ViewModels={}))}(ExtensionCore||(ExtensionCore={})),function(
n){var t;(function(t){"use strict";function e(n,t){return[new i,new r,new u(t),new f(n)]}var i,r,u,f;
t.getResourceGroupNameValidations=e;i=function(t){function i(){t.call(this,n.Resources.Validation.required)}
return __extends(i,t),i}(MsPortalFx.ViewModels.RequiredValidation);t.ResourceGroupNameRequiredValidation=
i;r=function(t){function i(){t.call(this,3,64,n.Resources.Validation.ResourceGroup.maxLength)}return __extends(
i,t),i}(MsPortalFx.ViewModels.LengthRangeValidation);t.ResourceGroupNameMaxLengthValidation=r;u=function(
t){function i(i){var r="^[a-zA-Z][0-9a-zA-Z\\._-]*[a-zA-Z0-9]$",u=n.Resources.Validation.ResourceGroup.
regex;i&&(r="^[a-zA-Z][0-9a-zA-Z-]*[a-zA-Z0-9]$",u=n.Resources.Validation.ResourceGroup.regexNoSpecialCharacters);
t.call(this,r,u)}return __extends(i,t),i}(MsPortalFx.ViewModels.RegExMatchValidation);t.ResourceGroupNameRegexValidation=
u;f=function(t){function i(i){var r=this;t.call(this,n.Resources.Validation.ResourceGroup.unique,function(
n){return r._validateNameIsUnique(n)});this._getSubscriptionId=i}return __extends(i,t),i.prototype._validateNameIsUnique=
function(t){var f=this,r=$.Deferred(),i={valid:!0,message:""},u=this._getSubscriptionId();return t&&
u&&n.Csm.getResourceGroupsAsync().then(function(e){var o=e.first(function(n){return StringEx.equals(
t,n.name,0)&&StringEx.equals(u,f._getResourceGroupSubscriptionId(n),0)});o&&(i.valid=!1,i.message=n.
Resources.Validation.ResourceGroup.unique);r.resolve(i)}),r.promise()},i.prototype._getResourceGroupSubscriptionId=
function(n){if(!n.id)return"";var t=MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceGroupDescriptor(
n.id);return t.subscription},i}(MsPortalFx.ViewModels.CustomValidation);t.ResourceGroupNameUniqueValidation=
f})(t=n.Validation||(n.Validation={}))}(ExtensionCore||(ExtensionCore={})),function(n){var t;(function(
n){"use strict";var t=function(){function n(){}return n.Succeeded="Succeeded",n.Failed="Failed",n}();
n.ShareObservableResponseStatus=t})(t=n.Models||(n.Models={}))}(ExtensionCore||(ExtensionCore={})),function(
n){var t;(function(t){"use strict";(function(n){n[n.Milliseconds=0]="Milliseconds";n[n.Seconds=1]="Seconds";
n[n.Minutes=2]="Minutes";n[n.Hours=3]="Hours";n[n.Days=4]="Days"})(t.TimeUnit||(t.TimeUnit={}));var r=
t.TimeUnit,i=function(){function t(){}return t.toFriendlyDurationString=function(i,r){var u=function(
n,t){var i=Math.pow(10,t);return Math.round(n*i)/i},h=t.getDuration(i,r,0),f=t.getDuration(i,r,1),e=
t.getDuration(i,r,2),o=t.getDuration(i,r,3),s=t.getDuration(i,r,4);return s>=1?(s===1?n.Resources.durationDay:
n.Resources.durationDays).format(u(s,2)):o>=1?(o===1?n.Resources.durationHour:n.Resources.durationHours)
.format(u(o,2)):e>=1?(e===1?n.Resources.durationMinute:n.Resources.durationMinutes).format(u(e,2)):f>=
1?(f===1?n.Resources.durationSecond:n.Resources.durationSeconds).format(u(f,2)):(h===1?n.Resources.durationMillisecond:
n.Resources.durationMilliseconds).format(u(h,2))},t.getDuration=function(n,t,i){var r=t-n;if(r<0)throw new
ArgumentError("Start time must be before end time");switch(i){case 0:return r;case 1:return r/1e3;case
2:return r/6e4;case 3:return r/36e5;case 4:return r/864e5}},t.getMinutesFromXmlTimeDuration=function(
n){var t,i=null;return(t=n.match(/PT([0-6]{0,1}[0-9])M/))!==null?i=parseInt(t[1],10):(t=n.match(/PT([0-2]{0,1}[0-9])H/))
!==null?i=parseInt(t[1],10)*60:(t=n.match(/PT([0-2]{0,1}[0-9])H([0-6]{0,1}[0-9])M/))!==null?(i=parseInt(
t[1],10)*60,i=i+parseInt(t[2],10)):(t=n.match(/P(\d+)D/))!==null?i=parseInt(t[1],10)*1440:(t=n.match(
/P(\d+)DT([0-2]{0,1}[0-9])H/))!==null?(i=parseInt(t[1],10)*1440,i=i+parseInt(t[2],10)*60):(t=n.match(
/P(\d+)DT([0-2]{0,1}[0-9])H([0-6]{0,1}[0-9])M/))!==null&&(i=parseInt(t[1],10)*1440,i=i+parseInt(t[2],
10)*60,i=i+parseInt(t[3],10)),i},t.getXmlTimespanFromMinutes=function(n){var f,i,r,t,u;return n?(i=parseInt(
n.toString(),10),t=parseInt((i/60).toString(),10),u=i%60,i>=1440?(r=parseInt((t/24).toString(),10),t=
t-r*24,f=t?u?"P{0}DT{1}H{2}M".format(r,t,u):"P{0}D{1}H".format(r,t):"P{0}D".format(r)):f=i>=60?u?"PT{0}H{1}M".
format(t,u):"PT{0}H".format(t):"PT{0}M".format(i),f):""},t.roundToLowerHalfHour=function(n){var t=new
Date(n.toString());return t.setMinutes((t.getMinutes()/30>>0)*30,0,0),t},t.roundToHigherHalfHour=function(
n){var i=t.roundToLowerHalfHour(n);return i.setMinutes(i.getMinutes()+30,0,0),i},t}();t.DateTimeUtility=
i})(t=n.Utilities||(n.Utilities={}))}(ExtensionCore||(ExtensionCore={}))