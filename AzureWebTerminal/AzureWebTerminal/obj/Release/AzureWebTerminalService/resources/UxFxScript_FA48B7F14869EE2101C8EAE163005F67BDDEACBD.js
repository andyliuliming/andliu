var BladeStyle,HubsExtension,EventTypes,Grid,Texts,Rpc,RpcMethods,__extends,MsPortalFx;(function(n){
var t;(function(n){"use strict";(function(n){n[n.NotFound=0]="NotFound"})(n.AssetInfoRejection||(n.AssetInfoRejection=
{}));var t=n.AssetInfoRejection})(t=n.Assets||(n.Assets={}))})(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){"use strict";var t;(function(n){n.name="name";n.nameColumnId=n.name;n.kind="kind";
n.resourceGroup="resourceGroup";n.resourceGroupColumnId=n.resourceGroup;n.location="location";n.locationColumnId=
n.location;n.locationId="locationId";n.resourceId="resourceId";n.resourceType="resourceType";n.subscriptionName=
"subscriptionName";n.subscriptionColumnId=n.subscriptionName;n.subscriptionId="subscriptionId";n.assetType=
"assetType"})(t=n.ResourceColumns||(n.ResourceColumns={}))})(t=n.Assets||(n.Assets={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){"use strict";var i,t;(function(n){function t(n,t,i,r,
u){var f=function(n){r(n)&&i.push.apply(i,[u(n)])};t.items().forEach(function(n){f(n)});t.items.subscribeArrayAdds(
n,function(n){f(n)})}n.ConnectView=t})(i=n.SupplementalDataStreamHelper||(n.SupplementalDataStreamHelper=
{}));t=function(){function n(){this.supplementalDataStream=ko.observableArray([])}return n.prototype.
publishSupplementalData=function(n){this.publishSupplementalDataArray([n])},n.prototype.publishSupplementalDataArray=
function(n){this.supplementalDataStream.push.apply(this.supplementalDataStream,n)},n}();n.SupplementalDataStream=
t})(t=n.Assets||(n.Assets={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){"use strict";
function i(n,t){return(n&t)===t}function r(t){return n.Internal.Extension.getRuntime().mapAssetIdToResourceId(
t)}function u(t){return n.Internal.Extension.getRuntime().mapResourceIdToAssetId(t)}function f(t,i){
return i===void 0&&(i=!1),n.Internal.Extension.getRuntime().mapAssetIdToDynamicSelectionAndIcon(t,i).
then(function(n){return n.selection})}function e(t,i){return i===void 0&&(i=!1),n.Internal.Extension.
getRuntime().mapAssetIdToDynamicSelectionAndIcon(t,i)}function o(t,i){return i===void 0&&(i=!1),n.Internal.
Extension.getRuntime().mapResourceIdToDynamicSelectionAndIcon(t,i).then(function(n){return n.selection}
)}function s(t,i){return i===void 0&&(i=!1),n.Internal.Extension.getRuntime().mapResourceIdToDynamicSelectionAndIcon(
t,i)}function h(t,i){return n.Internal.Extension.getRuntime().getAssetTypeInformation(t,i)}function c(
t){return n.Internal.Extension.getRuntime().getResourceTypeAssetTypeInformation(t)}function l(t){return n.
Internal.Extension.getRuntime().getResourceAssetInformation(t)}(function(n){n[n.None=0]="None";n[n.AssetInfo=
1]="AssetInfo";n[n.BrowseConfig=2]="BrowseConfig";n[n.SupplementalData=4]="SupplementalData"})(t.AssetContracts||
(t.AssetContracts={}));var a=t.AssetContracts;t.supportsContract=i;t.mapAssetIdToResourceId=r;t.mapResourceIdToAssetId=
u;t.mapAssetIdToDynamicSelection=f;t.mapAssetIdToDynamicSelectionAndIcon=e;t.mapResourceIdToDynamicSelection=
o;t.mapResourceIdToDynamicSelectionAndIcon=s;t.getAssetTypeInformation=h;t.getResourceTypeAssetTypeInformation=
c;t.getResourceAssetInformation=l})(t=n.Assets||(n.Assets={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";function r(t){return i.warning(
"MsPortalFx.Internal.Portal.Assets.mapAssetIdToResourceId() is deprecated, please use MsPortalFx.Assets.mapAssetIdToResourceId()"),
n.Assets.mapAssetIdToResourceId(t)}function u(t){return i.warning("MsPortalFx.Internal.Portal.Assets.mapResourceIdToAssetId() is deprecated, please use MsPortalFx.Assets.mapResourceIdToAssetId()"),
n.Assets.mapResourceIdToAssetId(t)}function f(t){return i.warning("MsPortalFx.Internal.Portal.Assets.mapResourceIdToDynamicSelection() is deprecated, please use MsPortalFx.Assets.mapResourceIdToDynamicSelection()"),
n.Assets.mapResourceIdToDynamicSelection(t)}function e(t,r){return i.warning("MsPortalFx.Internal.Portal.Assets.getAssetTypeInformation() is deprecated, please use MsPortalFx.Assets.getAssetTypeInformation()"),
n.Assets.getAssetTypeInformation(t,r)}function o(t){return i.warning("MsPortalFx.Internal.Portal.Assets.getResourceTypeAssetTypeInformation() is deprecated, please use MsPortalFx.Assets.getResourceTypeAssetTypeInformation()"),
n.Assets.getResourceTypeAssetTypeInformation(t)}function s(t){return i.warning("MsPortalFx.Internal.Portal.Assets.getResourceAssetInformation() is deprecated, please use MsPortalFx.Assets.getResourceAssetInformation()"),
n.Assets.getResourceAssetInformation(t)}var i=new n.Base.Diagnostics.Log("MsPortalFx/Assets/Assets");
t.mapAssetIdToResourceId=r;t.mapResourceIdToAssetId=u;t.mapResourceIdToDynamicSelection=f;t.getAssetTypeInformation=
e;t.getResourceTypeAssetTypeInformation=o;t.getResourceAssetInformation=s})(i=t.Assets||(t.Assets={})
)})(i=t.Portal||(t.Portal={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){"use strict";var t=function(){function n(){this._init()}return n.prototype.add=
function(n,t){var i;return t?(i=this._names[t],i===undefined&&(i=this._entries.length,this._names[t]=
i)):i=this._entries.length,this._entries[i]=n,this},n.prototype.remove=function(n){var i=this,t;return typeof
n=="string"?(t=this._names[n],delete this._names[n],this._entries[t]=null):this._entries.forEach(function(
t,r){t===n&&(i._entries[r]=null)}),this},n.prototype.clear=function(){return this._init(),this},n.prototype.
fire=function(n){return this._entries.forEach(function(t){t&&t(n)}),this},n.prototype._init=function(
){this._entries=[];this._names={}},n}();n.Callbacks=t})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(n){var t;(function(n){"use strict";var t=window,i,r,u,f,e,o;n.Shell=
"fx",function(n){n.Hubs="HubsExtension";n.Billing="Microsoft_Azure_Billing"}(i=n.ExtensionNames||(n.
ExtensionNames={})),function(n){n.Notification="Notification";n.ResourceGroups="ResourceGroups";n.BrowseAllBlade=
"BrowseAll";n.BrowseAllResources="BrowseAllResources";n.BrowseAllBladeWithType="BrowseAllWithType";n.
BrowseServiceBlade="BrowseService";n.BrowseResourceGroupBlade="BrowseResourceGroup";n.BrowseResourceBlade=
"BrowseResource";n.Gallery="Gallery";n.StoreGallery="StoreGallery"}(r=n.AssetNames||(n.AssetNames={})
),function(n){n.ResourceGroups="Microsoft.Resources/subscriptions/resourcegroups";n.AllResources="Microsoft.Resources/resources"}
(u=n.ResourceTypes||(n.ResourceTypes={})),function(n){var t;(function(n){n.BrowseServicePinnedPart="BrowseServicePart";
n.BrowseResourcePinnedPart="BrowseResourcePinnedPart";n.BrowseResourceGroupPinnedPart="BrowseResourceGroupPinnedPart"}
)(t=n.Hubs||(n.Hubs={}))}(f=n.PartNames||(n.PartNames={})),function(n){n.Billing="billing";n.Browse=
"browse";n.Create="create";n.Debug="debug";n.Journeys="journeys";n.Notifications="notifications"}(e=
n.HubNames||(n.HubNames={})),function(n){n.ViewModel="viewModel";n.PartViewModel="partViewModel"}(o=
n.ViewModelTypes||(n.ViewModelTypes={}));t.fx.environment.trace||(t.fx.environment.trace={})})(t=n.Constants||
(n.Constants={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
n){var t;(function(n){"use strict";var u=Array.prototype.slice,t="##",i=t+t+"methods",r=[],f=function(
){function n(n){this._listeners=[];this._object=n}return n.instrument=function(t){var i=r.first(function(
n){return n.object===t});return i===null&&(i={object:t,objectLog:new n(t)},r.push(i)),i.objectLog},n.
prototype.startListening=function(n){this._instrument();this._listeners.indexOf(n)===-1&&this._listeners.
push(n)},n.prototype.stopListening=function(n){var t=this._listeners.indexOf(n);t>-1&&this._listeners.
splice(t,1);this._listeners.length===0&&this._uninstrument()},n.prototype._uninstrument=function(){for(
var r=this._object.prototype,u=r[i],n=0;n<u.length;n++)r[u[n]]=r[t+u[n]],delete r[t+u[n]];delete r[i];
this._instrumented=!1},n.prototype._instrument=function(){if(!this._instrumented){var n,r=this._object.
prototype,f=this,e=t.length;r[i]=[];for(n in r)typeof r[n]=="function"&&n.substr(0,e)!==t&&(r[t+n]=r[
n],r[i].push(n),r[n]=function(n){return function(){var i,e=u.call(arguments,0);return f._trigger("before_"+
n,this,undefined,e),i=r[t+n].apply(this,arguments),f._trigger("after_"+n,this,i,e),i}}(n));this._instrumented=
!0}},n.prototype._trigger=function(n,t,i,r){this._listeners.forEach(function(u){if(u[n])try{t["##return##"]=
i;u[n].apply(u,[t].concat(r));delete t["##return##"]}catch(f){}})},n}();n.ObjectLog=f})(t=n.Diagnostics||
(n.Diagnostics={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
n){"use strict";n.EventTypes={click:"click",collapsedStateUpdated:"collapsedStateUpdated",contextmenu:
"contextmenu",doubleclick:"dblclick",dragstart:"dragstart",dragend:"dragstop",focus:"focus",hashchange:
"hashchange",keydown:"keydown",keypress:"keypress",keyup:"keyup",mousedown:"mousedown",mousemove:"mousemove",
mouseout:"mouseout",mouseover:"mouseover",mouseup:"mouseup",mousewheel:"wheel",resize:"resize",scroll:
"scroll",selectstart:"selectstart",transitionend:"transitionend msTransitionEnd webkitTransitionEnd",
mouseenter:"mouseenter",mouseleave:"mouseleave",focusin:"focusin",focusout:"focusout",remove:"remove",
fxactionbarresize:"fxactionbarresize",fxactionbarvalidationtargetupdated:"fxactionbarvalidationtargetupdated",
fxactivatepairmaster:"fxactivatepairmaster",fxaddparts:"fxaddparts",fxavatarmenutoggling:"fxavatarmenutoggling",
fxbillingClick:"billingClick",fxbladestatusbarclicked:"fxbladestatusbarclicked",fxbrowseitemclick:"browseItemClick",
fxbrowserecentitemdiscardclick:"browseRecentItemDiscardClick",fxclosehub:"fxclosehub",fxcontextmenu:
"fxcontextmenu",fxcontextmenurequest:"fxcontextmenurequest",fxcontextpaneclosing:"fxcontextpaneclosing",
fxcreatepart:"fxcreatepart",fxensurebladevisible:"fxensurebladevisible",fxensureviewportvisible:"fxensureviewportvisible",
fxerrorpartclicked:"fxerrorpartclicked",fxexitorganizemode:"fxexitorganizemode",fxhubclicking:"fxhubclicking",
fxjourneyclick:"journeyClick",fxnotificationClick:"notificationClick",fxopenhub:"fxopenhub",fxopeninnewtab:
"fxopeninnewtab",fxpancomplete:"fxpancomplete",fxpanoramavisible:"fxpanoramavisible",fxpartcreated:"fxpartcreated",
fxpinblade:"pinblade",fxportalcontrolloadfailed:"fxportalcontrolloadfailed",fxreadyforfocus:"fxreadyforfocus",
fxrearrange:"fxrearrange",fxremovewidget:"fxremovewidget",fxrightclick:"rightclick",fxrotatetheme:"fxrotatetheme",
fxshowstartboard:"fxshowstartboard",fxunpin:"fxunpin",touchcancel:"touchcancel",touchend:"touchend",
touchmove:"touchmove",touchstart:"touchstart",lostpointercapture:"lostpointercapture",pointercancel:
"pointercancel",pointerdown:"pointerdown",pointermove:"pointermove",pointerup:"pointerup",mslostpointercapture:
"MSLostPointerCapture",mspointercancel:"MSPointerCancel",mspointerdown:"MSPointerDown",mspointermove:
"MSPointerMove",mspointerup:"MSPointerUp"}})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(){"use strict"})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n)
{var t;(function(n){"use strict";var t=function(){function n(){}return n.prototype.toJSON=function(n)
{return JSON.stringify(n)},n.prototype.fromJSON=function(n){return JSON.parse(n)},n}(),i=function(){
function n(n,i){this._observable=ko.observableArray([]);this._separator="##-##";this._serializer=n||
new t;i&&this._fromJSON(typeof i=="string"?JSON.parse(i):i)}return n.prototype.itemExists=function(n)
{return!!this.getItem(n)},n.prototype.addItem=function(n,t){if(n&&n.length){if(n.some(function(n){return!n}
))throw new Error("All paths segments must be non-empty strings.");else if(this.itemExists(n))throw new
Error("Cannot add two items with the same path '{0}'.".format(JSON.stringify(n)));}else throw new Error(
"Path must include at least one segment.");try{this._observable.valueWillMutate();this._observable.peek(
).push({path:n,value:t})}finally{this._observable.valueHasMutated()}},n.prototype.removeItem=function(
n){var t=this.getItem(n);t&&this._removeItemsAt(this._observable.peek().indexOf(t),1)},n.prototype.removeItemsInPath=
function(n){this._removeItemsWithPath(n,!0)},n.prototype.removeItemsUnderPath=function(n){this._removeItemsWithPath(
n,!1)},n.prototype.empty=function(){this._removeItemsAt(0,this._observable.peek().length)},n.prototype.
getItem=function(n){var t=this,i=n.join(this._separator);return this._observable.peek().first(function(
n){return n.path.join(t._separator)===i})||null},n.prototype.getItems=function(){return this._observable.
peek()},n.prototype.getItemsInPath=function(n){return this._getItemsWithPath(n,!0)},n.prototype.getItemsUnderPath=
function(n){return this._getItemsWithPath(n,!1)},n.prototype.getObservable=function(){return this._observable}
,n.prototype.toJSON=function(){var n=this;return{items:JSON.stringify(ko.isObservable(this._observable)?
this._observable.peek():this._observable,function(t,i){return t==="value"?n._serializer.toJSON(i):i}
)}},n.prototype._removeItemsAt=function(n,t){try{this._observable.valueWillMutate();this._observable.
peek().splice(n,t)}finally{this._observable.valueHasMutated()}},n.prototype._fromJSON=function(n){var
t=this;JSON.parse(n.items,function(n,i){return n===""&&i&&i.forEach(function(n){n.value=t._serializer.
fromJSON(n.value);t._observable.push(n)}),i})},n.prototype._removeItemsWithPath=function(n,t){var i=
this;this._getItemsWithPath(n,t).forEach(function(n){i._removeItemsAt(i._observable.peek().indexOf(n),
1)})},n.prototype._getItemsWithPath=function(n,t){var i=this,r=n.join(this._separator);return this._observable.
peek().filter(function(u){return u.path.join(i._separator).indexOf(r)===0&&(t||u.path.length>n.length)
})},n}();n.SerializableHierarchyMap=i})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(){"use strict"})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n)
{var t;(function(t){"use strict";var u=window,f=new n.Base.Diagnostics.Log("MsPortalFx/Base/Base.Scheduler"),
s=n.Helpers,r,i=[],e=function(){r=null;var n=i.shift();if(n){n.silent||f.verbose("Executing sheduled task '"+
n.name+"' that was scheduled for "+new Date(n.scheduledExecutionTime).toLocaleTimeString());try{n.scheduledTask.
apply(n,n.args||[])}catch(t){f.error("Error executing task '"+n.name+"': "+t.message)}finally{n.recurring&&
o.scheduleTask(n);!r&&i.length>0&&(r=u.setTimeout(e,Math.max(0,i[0].scheduledExecutionTime-+new Date)))}
}},o=function(){function t(){}return t.scheduleTask=function(t,o){if(t.recurring){if(t.absoluteTime)
throw new Error("Tasks scheduled for an absolute time cannot be recurring.");if(t.isAsync)throw new Error(
"Asynchronous tasks cannot be marked as auto recurring. Instead call sheduleTask again at the end on completition of the aynchronous event.");
}if(!o&&i.indexOf(t)>=0)throw new Error("Same task cannot be scheduled multiple times concurrently.");
t.name||(t.name="Anonymous "+n.Util.newGuid());var l=+new Date,c,h,a,s=t;if(s.absoluteTime)s.scheduledExecutionTime=
s.absoluteTime;else{if(isNaN(s.delayInMs)||s.delayInMs<=0)throw new Error("Tasks that are not scheduled for an absolute time require a positive integer value in task.delayInMs.");
s.scheduledExecutionTime=l+s.delayInMs}for(c=-1,h=0,a=i.length;h<a;h++)if(i[h].scheduledExecutionTime>
s.scheduledExecutionTime){i.splice(h,0,s);c=h;break}c===-1&&i.push(s);s.silent||f.verbose("Scheduled task '"+
s.name+"' to execute at "+new Date(s.scheduledExecutionTime).toLocaleTimeString());(i.length===1||c===
0)&&(r&&u.clearTimeout(r),r=u.setTimeout(e,Math.max(0,s.scheduledExecutionTime-l)))},t.deleteTask=function(
n){var t=i.indexOf(n);t>=0&&(i.splice(t,1),i.length===0&&r&&(u.clearTimeout(r),r=null))},t}();t.Scheduler=
o})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(
t){"use strict";function i(){return n.Internal.Extension.getRuntime().getAuthorizationToken()}function r(
t,i){return n.Internal.Extension.getRuntime().hasPermission(t,i)}t.getAuthorizationToken=i;t.hasPermission=
r})(i=t.Security||(t.Security={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n)
{var t;(function(t){var i;(function(t){"use strict";function r(){return i.warning("MsPortalFx.Portal.Security.getAuthorizationToken() is deprecated, please use MsPortalFx.Base.Security.getAuthorizationToken()"),
n.Base.Security.getAuthorizationToken()}function u(t,r){return i.warning("MsPortalFx.Portal.Security.hasPermission() is deprecated, please use MsPortalFx.Base.Security.hasPermission()"),
n.Base.Security.hasPermission(t,r)}var i=new n.Base.Diagnostics.Log("MsPortalFx/Base/Security");t.getAuthorizationToken=
r;t.hasPermission=u})(i=t.Security||(t.Security={}))})(t=n.Portal||(n.Portal={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(n){var t;(function(n){"use strict";function i(n){var i=n.selectionStart,
r=n.selectionEnd,f=n.selectionDirection||"forward",u,e;return f==="none"&&(f="forward"),(i===undefined||
r===undefined)&&(t.document.selection?(u=t.document.selection.createRange(),e=u.text.length,u.moveStart(
"character",-n.value.length),i=u.text.length-e,r=i+e):i=r=n.value.length),{start:i,end:r,direction:f}}
function r(n,i){try{if(n.selectionStart!==undefined)n.selectionStart=i.start,n.selectionEnd=i.end,n.
selectionDirection=i.direction;else if(t.document.selection){n.focus();var r=t.document.selection.createRange(
);r.moveStart("character",-n.value.length);r.moveEnd("character",-n.value.length-1);r.moveStart("character",
i.start);r.moveEnd("character",i.end-i.start);r.select()}}catch(u){}}function u(n,i){var r,u,e,f;return i=
i||t,r=i.getSelection(),r?(e=i.document,f=e.createRange(),r.removeAllRanges(),f.selectNode(n),r.addRange(
f),u=!0):u=!1,u}function f(n){n=n||t;var i,r=n.getSelection();return r&&(i=r.toString()),i}var t=window;
n.getCaretPosition=i;n.setCaretPosition=r;n.trySelectElementText=u;n.tryGetSelectedText=f})(t=n.Text||
(n.Text={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var
t;(function(n){"use strict";function o(n){t={handleMap:{},counter:1,handle:null};!n&&i.requestAnimationFrame&&
i.cancelAnimationFrame?(r=i.requestAnimationFrame,u=i.cancelAnimationFrame):(r=function(n){var t=(new
Date).getTime(),r=Math.max(0,16-(t-f)),u=i.setTimeout(function(){n(t+r)},r);return f=t+r,u},u=function(
n){i.clearTimeout(n)})}function s(n){return r(n)}function h(n){u(n)}function l(n){var i=t.counter++;
return t.handleMap[e+i]=n,c(!1),i}function a(n){delete t.handleMap[e+n]}function v(n){var r=t.handleMap,
u=Object.keys(r);u.forEach(function(t){r[t].call(i,n)});u.length?c(!0):y()}function c(n){(n||!t.handle)&&
(t.handle=s(v))}function y(){var n=t.handle;n&&(h(n),t.handle=null)}var f=0,i=window,r,u,t,e="";n.setupTimers=
o;n.requestAnimationFrame=s;n.cancelAnimationFrame=h;n.requestAnimationFrameInterval=l;n.cancelAnimationFrameInterval=
a;o(!1)})(t=n.Timers||(n.Timers={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){"use strict";var i="?",r="&",u="=",t="#",f=function(){function n(n,t){var o=this,
f,e;this._qs=[];this._qsMap={};this._leadingSeparator=t===undefined?i:t;n&&(f=n,f[0]===this._leadingSeparator&&
(f=f.substr(1)),e=f.split(r),e.forEach(function(n){if(n){var i=n.indexOf(u),f=i>=0,t=f?n.substr(0,i):
n,r=f?n.substr(i+1):"";t&&(t=decodeURIComponent(t),r=decodeURIComponent(r),o.setParameter(t,r))}}))}
return n.prototype.setParameters=function(n){for(var t in n)n.hasOwnProperty(t)&&this.setParameter(t,
n[t]);return this},n.prototype.setParameter=function(n,t){var r=n.toUpperCase(),i=this._qsMap[r];return i===
undefined?(this._qsMap[r]=this._qs.length,this._qs.push(n),this._qs.push(t)):(this._qs[i]=n,this._qs[
i+1]=t),this},n.prototype.getParameter=function(n){var r=n.toUpperCase(),t=this._qsMap[r],i;return t!==
undefined&&(i=this._qs[t+1]),i},n.prototype.getParameters=function(){for(var t={},n=0;n<this._qs.length-
1;n++)t[this._qs[n]]=this._qs[n+1];return t},n.prototype.removeParameters=function(n){var t=this;return n.
forEach(function(n){t.removeParameter(n)}),this},n.prototype.removeParameter=function(n){var i=n.toUpperCase(
),t=this._qsMap[i];return t!==undefined&&(this._qs[t]=undefined,this._qs[t+1]=undefined),this},n.prototype.
toString=function(n){n===void 0&&(n=!0);for(var t="",i=0,o=this._qs.length,f,e;i<o;)f=this._qs[i++],
e=this._qs[i++],f!==undefined&&(t=t+r+encodeURIComponent(f)+u+encodeURIComponent(e));return t&&(t=t.
substr(1),n&&(t=this._leadingSeparator+t)),t},n}(),e;n.QueryStringBuilder=f;e=function(){function n(
n){var r=n||"",e=r.indexOf(t),s=e>=0,u=s?r.substr(0,e):r,c=s?r.substr(e):"",o=u.indexOf(i),h=o>=0,l=
h?u.substr(0,o):u,a=h?u.substr(o):"";this.path=l;this.query=new f(a);this.fragment=c}return n.prototype.
toString=function(){var i=this.path||"",r=this.query&&this.query.toString()||"",n=this.fragment;return n?
n[0]!==t&&(n=t+n):n="",i+r+n},n}();n.UriBuilder=e})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){"use strict";function v(n,t){return t?c.parse(n):o.parse(n)}function y(){return o.
getLinkIdPrefix()}function p(n){return o.parseTextOnly(n)}var k=window,u,f,e,i,o,s,h,c;t.create=v;t.
getLinkIdPrefix=y;t.getText=p;var r=function(){function t(){this._children=[]}return t.prototype.getLinkIdPrefix=
function(){return t._linkIdPrefix},t.prototype.setChildren=function(n){this._children=n},t.prototype.
parse=function(n){return this._parseInternal(n,!1)},t.prototype.parseTextOnly=function(n){return this.
_parseInternal(n,!0)},t.prototype._parseInternal=function(t,i){for(var f=[],s="",e=t||"",u,h,r,o,c;;
){for(r=0;r<this._children.length;r++)f[r]===undefined&&(f[r]=this._children[r]._match(e)),f[r]&&(!u||
f[r].index<u.index)&&(u=f[r],h=this._children[r]);if(c=u?u.index:e.length,s+=i?e.substring(0,c):n.Base.
Utilities.htmlEncode(e.substring(0,c)),!u)break;for(s+=i?h._getTextOutput(u):h._getOutput(u),o=u.index+
u[0].length,e=e.substring(o),r=0;r<this._children.length;r++)f[r]&&(f[r].index<o?f[r]=undefined:f[r].
index-=o);u=undefined}return s},t.prototype._match=function(){return null},t.prototype._getOutput=function(
){return null},t.prototype._getTextOutput=function(){return null},t._linkIdPrefix="__fxshell-link-id-",
t}(),w=function(t){function i(){t.apply(this,arguments)}return __extends(i,t),i.prototype._match=function(
n){var t=new RegExp("\\[([^|\\[\\]]+?(?:\\|[^|\\[\\]]+?){1,3})\\]");return t.exec(n)},i.prototype._getOutput=
function(t){var i=t[1].split("|"),f,u='<a id="'+n.Base.Utilities.attributeEncode(r._linkIdPrefix+i[0]);
return f=i.length>=3?n.Base.Utilities.attributeEncode(encodeURI(i[2])):"#",u+='" href="'+f+'"',u+=i.
length>=4?' target="'+n.Base.Utilities.attributeEncode(i[3])+'">':">",u+=this.parse(i[1]),u+"<\/a>"}
,i.prototype._getTextOutput=function(n){var t=n[1].split("|");return this.parseTextOnly(t[1])},i}(r),
l=function(n){function t(){n.apply(this,arguments)}return __extends(t,n),t.prototype._match=function(
n){var t=new RegExp("__(([^_]+)|([^_]*_[^_]*)*?)__");return t.exec(n)},t.prototype._getOutput=function(
n){var t="<strong>";return t+=this.parse(n[1]),t+"<\/strong>"},t.prototype._getTextOutput=function(n)
{return this.parseTextOnly(n[1])},t}(r),a=function(n){function t(){n.apply(this,arguments)}return __extends(
t,n),t.prototype._match=function(n){var t=new RegExp("\\'\\'(([^\\']+)|([^\\']*\\'[^\\']*)*?)\\'\\'");
return t.exec(n)},t.prototype._getOutput=function(n){var t="<em>";return t+=this.parse(n[1]),t+"<\/em>"}
,t.prototype._getTextOutput=function(n){return this.parseTextOnly(n[1])},t}(r),b=function(n){function t(
){n.apply(this,arguments)}return __extends(t,n),t.prototype._match=function(n){return/%%%/.exec(n)},
t.prototype._getOutput=function(){return"<br />"},t.prototype._getTextOutput=function(){return"\n"},
t}(r);u=new l;f=new a;e=new w;i=new b;o=new r;e.setChildren([u,f]);u.setChildren([i,e,f]);f.setChildren(
[i,e,u]);o.setChildren([u,f,e,i]);s=new l;h=new a;c=new r;s.setChildren([i,h]);h.setChildren([i,s]);
c.setChildren([s,h,i])})(i=t.SafeMarkup||(t.SafeMarkup={}))})(i=t.Utilities||(t.Utilities={}))})(t=n.
Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){var
i;(function(t){var i;(function(t){"use strict";function o(n){var t=r(n);return t[f]=!0,t}function s(
n){return n&&n.hasOwnProperty(f)}function h(n){return u(n)}function r(n){var f=ko.isObservable(n),u=
ko.utils.unwrapObservable(n),t={};return Array.isArray(u)?(f&&(t.t=n.splice?2:1),t.v=u.map(r)):(f&&(
t.t=1),i.isObject(u)?(t.v={},Object.getOwnPropertyNames(u).forEach(function(n){i.isSerializableProperty(
n)&&(t.v[n]=r(u[n]))})):u instanceof Date?(t.d=!0,t.v=u.valueOf()):t.v=u),t}function u(n){var t;return Array.
isArray(n.v)?t=n.v.map(u):i.isObject(n.v)?(t={},Object.getOwnPropertyNames(n.v).forEach(function(r){
i.isSerializableProperty(r)&&(t[r]=u(n.v[r]))})):t=n.d?new Date(n.v):n.v,n.t===1?ko.observable(t):n.
t===2?ko.observableArray(t):t}var f="#fxSerialized#",i=n.Base.Utilities,e;t.toSerializableObject=o;t.
isSerializedObject=s;t.fromSerializableObject=h,function(n){n[n.Observable=1]="Observable";n[n.ObservableArray=
2]="ObservableArray"}(e||(e={}))})(i=t.Serialization||(t.Serialization={}))})(i=t.Internal||(t.Internal=
{}))})(i=t.Utilities||(t.Utilities={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(){function t(
n){this._normalizedSpaceCharacter="​";this._normalizedEscapedTokenStartCharacter="‌";this._normalizedEscapedTokenEndCharacter=
"‍";this._normalizedEscapedTokenStart="";this._normalizedEscapeTokenEnd="";this._normalizedTokenStartOffset=
0;this.ignoreUnrecognizedTokens=!1;this.tokenValues=[];this.tokenStart=n.tokenStart;this.tokenEnd=n.
tokenEnd;this.tokenValues=n.tokenValues;this.ignoreUnrecognizedTokens=!!n.ignoreUnrecognizedTokens}return Object.
defineProperty(t.prototype,"tokenStart",{get:function(){return this._tokenStart},set:function(n){var
t=(n||"").length;this._normalizedEscapedTokenStart=this._normalizedEscapedTokenStartCharacter.repeat(
t+1);this._tokenStart=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tokenEnd",
{get:function(){return this._tokenEnd},set:function(n){var t=(n||"").length;this._normalizedEscapeTokenEnd=
this._normalizedEscapedTokenEndCharacter.repeat(t+1);this._tokenEnd=n},enumerable:!0,configurable:!0}),
t.prototype.parse=function(t){var u,i,f,o,y;if(t=t||"",!t)return[];if(!this.tokenStart&&!this.tokenEnd)
return[{start:0,end:t.length-1,value:t,escapedValue:t,rawValue:t,isToken:!1}];var p=this._normalizeString(
t),w=this._getRecognizedTokenMap(),a=n.Util.regexEscape(this.tokenStart||""),v=n.Util.regexEscape(this.
tokenEnd||""),s=new RegExp(a+"(.*?)"+v,"g");for(this.tokenStart?this.tokenEnd||(s=new RegExp(a+"([^"+
this._normalizedSpaceCharacter+this.tokenStart+"]*)","g")):s=new RegExp("([^"+this._normalizedSpaceCharacter+
this.tokenEnd+"]*)"+v,"g"),u=[],i=0;f=s.exec(p);){var h=t.substr(i,f.index-i),b=this.unescapeTokenValue(
h),r={start:i,end:f.index-1,value:b,escapedValue:h,rawValue:h,isToken:!1},c=this._unnormalizeString(
f[1]),l=this.unescapeTokenValue(c),e=this._wrapEscapedTokenValue(c),k={start:f.index,end:f.index+f[0].
length-1,value:l,escapedValue:c,rawValue:e,isToken:!0};this.ignoreUnrecognizedTokens&&!w[l]?(r.value+=
l,r.escapedValue+=e,r.rawValue+=e,r.end+=e.length,r.value.length&&u.push(r)):(r.value.length&&u.push(
r),u.push(k));i=u.last().end+1}return i<t.length&&(o=t.substr(i,t.length),y=this.unescapeTokenValue(
o),u.push({start:i,end:t.length?t.length-1:0,value:y,escapedValue:o,rawValue:o,isToken:!1})),u},t.prototype.
unparse=function(n){var t=this;return n.map(function(n){return n.isToken?t.wrapTokenValue(n.value):n.
value}).join("")},t.prototype.wrapTokenValue=function(n){return n=this._normalizeString(n),n=this.escapeTokenValue(
n),n=this._unnormalizeString(n),this._wrapEscapedTokenValue(n)},t.prototype.escapeTokenValue=function(
t){var i=[],r;return this.tokenStart&&i.push(n.Util.regexEscape(this.tokenStart)),this.tokenEnd&&i.push(
n.Util.regexEscape(this.tokenEnd)),r=new RegExp(i.join("|"),"g"),t.replace(r,"\\$&")},t.prototype.unescapeTokenValue=
function(n){var t=this._normalizeString(n),i={};return i[this._normalizedEscapedTokenStart]=this.tokenStart,
i[this._normalizedEscapeTokenEnd]=this.tokenEnd,t=t.replaceMany(i),this._unnormalizeString(t)},t.prototype.
_wrapEscapedTokenValue=function(n){return this.tokenStart+n+this.tokenEnd},t.prototype._getRecognizedTokenMap=
function(){var n={};return this.tokenValues.forEach(function(t){n[t]=!0}),n},t.prototype._normalizeString=
function(n){var t={};return this.tokenStart&&(t["\\"+this.tokenStart]=this._normalizedEscapedTokenStart),
this.tokenEnd&&(t["\\"+this.tokenEnd]=this._normalizedEscapeTokenEnd),t[" "]=this._normalizedSpaceCharacter,
n.replaceMany(t)},t.prototype._unnormalizeString=function(n){var t={};return t[this._normalizedEscapedTokenStart]=
"\\"+this.tokenStart,t[this._normalizedEscapeTokenEnd]="\\"+this.tokenEnd,t[this._normalizedSpaceCharacter]=
" ",n.replaceMany(t)},t}();t.TokenParser=i})(i=t.TokenParsing||(t.TokenParsing={}))})(i=t.Utilities||
(t.Utilities={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
n){"use strict";function r(n){var i=new u,r=n&&n.split(".");if(!n)return i.major=0,i.minor=0,i.build=
0,i.revision=0,i;if(r.length<2)throw new Error("value is not a valid version string.");if(i.major=parseInt(
r[0]),i.minor=parseInt(r[1]),i.build=r.length>=3?parseInt(r[2]):null,i.revision=r.length>=4&&!!r[3]?
parseInt(r[3].match(/\d+/)):null,!t(i.major)||!t(i.minor)||!t(i.build)||!t(i.revision))throw new Error(
"value is not a valid version string.");return i}function t(n){return n!==null?!isNaN(n)&&n>=0:!0}function i(
n,t){return n===t?0:n!==null?t!==null?n>t?1:-1:1:-1}n.getVersionFromString=r;var u=function(){function n(
){}return n.prototype.toString=function(){var n=this.major+"."+this.minor;return this.build!==null&&
(n+="."+this.build,this.revision!==null&&(n+="."+this.revision)),n},n.prototype.compareTo=function(n)
{var t;return this.major!==n.major?this.major>n.major?1:-1:this.minor!==n.minor?this.minor>n.minor?1:
-1:(t=i(this.build,n.build),t===0)?i(this.revision,n.revision):t},n}()})(t=n.Base||(n.Base={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){"use strict";(function(n){n[n.None=0]="None";n[n.Master=
1]="Master";n[n.Details=2]="Details"})(n.BladePairing||(n.BladePairing={}));var t=n.BladePairing})(t=
n.Blades||(n.Blades={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){"use strict";(
function(n){n[n.None=0]="None";n[n.Fullscreen=1]="Fullscreen";n[n.Windowed=2]="Windowed"})(n.BladePairingMode||
(n.BladePairingMode={}));var t=n.BladePairingMode})(t=n.Blades||(n.Blades={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(n){"use strict";(function(n){n[n.Action=1]="Action";n[n.Info=2]="Info";
n[n.Create=3]="Create";n[n.Context=4]="Context";n[n.Help=5]="Help";n[n.Basic=6]="Basic";n[n.ContextAction=
7]="ContextAction";n[n.BasicWithCommands=8]="BasicWithCommands";n[n.Hub=9]="Hub";n[n.HubSubMenu=10]=
"HubSubMenu"})(n.BladeStyle||(n.BladeStyle={}));var t=n.BladeStyle})(t=n.Blades||(n.Blades={}))}(MsPortalFx||
(MsPortalFx={}));BladeStyle=MsPortalFx.Blades.BladeStyle,function(n){var t;(function(t){"use strict";
var i=n.Base.Utilities.isNullOrUndefined,r="fxs-theme-context-help",u="fxs-theme-context-context",f=
"fxs-theme-context-menu",e="fxs-theme-context-submenu",o="fxs-theme-context-create",s="fxs-theme-context-default",
h=function(){function n(){}return n.canHaveCommands=function(n){return i(n)||n===1||n===7||n===8},n.
canHaveDescription=function(n){var t=!1;switch(n){case 2:case 3:case 4:case 6:t=!0}return t},n.getThemeClass=
function(n){switch(n){case 4:case 7:return u;case 3:return o;case 5:return r;case 9:return f;case 10:
return e;default:return s}},n}();t.BladeStyleHelper=h})(t=n.Blades||(n.Blades={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(n){"use strict";(function(n){n[n.Small=0]="Small";n[n.Medium=1]="Medium";
n[n.Large=2]="Large";n[n.XLarge=3]="XLarge";n[n.Expandable=101]="Expandable"})(n.BladeWidth||(n.BladeWidth=
{}));var t=n.BladeWidth})(t=n.Blades||(n.Blades={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;
(function(n){"use strict";(function(n){n[n.Minimized=0]="Minimized";n[n.Normal=1]="Normal";n[n.Maximized=
2]="Maximized"})(n.DisplayState||(n.DisplayState={}));var t=n.DisplayState})(t=n.Blades||(n.Blades={
}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){"use strict";(function(n){n[n.Small=
0]="Small";n[n.Medium=1]="Medium"})(n.PairParentWidth||(n.PairParentWidth={}));var t=n.PairParentWidth}
)(t=n.Blades||(n.Blades={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(
t){"use strict";var i=$.Deferred().resolve().promise(),u=n.Base.Utilities,r=function(){function t(t,
i){var r=this;this._loadedCacheEntry=ko.observable(null);this._isDisposed=!1;this._requestInProgress=
ko.observable();this._isLoading=ko.computed(function(){return!!r._requestInProgress()});this._dataSource=
t;n.Base.ProxiedObservables.markNonSerializable(this);i.registerForDispose({dispose:function(){r._isDisposed=
!0;r._cancelInProgressRequest();r._releaseCurrentContents()}})}return Object.defineProperty(t.prototype,
"loading",{get:function(){return this._isLoading},enumerable:!0,configurable:!0}),t.prototype.fetch=
function(t){var u=this,e,o,f,r;return this._isDisposed?i:(e=this._currentCacheEntryDisposer,o=function(
){e&&e.dispose()},this._currentParams=t,this._cancelInProgressRequest(),this._currentParams===null||
this._currentParams===undefined)?(this._loadedCacheEntry(null),o(),i):(this._currentCacheEntryDisposer=
new n.Internal.Base.TriggerableLifetimeManager,f=new n.Base.Promises.CancelationToken,r={cancelationToken:
f,cancelablePromise:n.Base.Promises.wrapWithCancelablePromise(this._dataSource.fetch(t,this._currentCacheEntryDisposer),
f),externalPromise:null},f,o(),this._requestInProgress(r),r.cancelablePromise.then(function(n){u._loadedCacheEntry(
n);u._requestInProgress(null)},function(){u._requestInProgress(null);u._loadedCacheEntry(null)}),r.externalPromise=
r.cancelablePromise.then(function(){}),r.externalPromise)},t.prototype._cancelInProgressRequest=function(
){this._requestInProgress()&&(this._requestInProgress().cancelationToken.cancel(),this._requestInProgress(
null))},t.prototype._releaseCurrentContents=function(){this._currentCacheEntryDisposer&&(this._currentCacheEntryDisposer.
dispose(),this._currentCacheEntryDisposer=null)},t}();t.ObjectView=r})(i=t.Data||(t.Data={}))})(t=n.
Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(
t){"use strict";var u=window,i=function(){function t(){n.Base.ProxiedObservables.markNonSerializable(
this);this._atomizationCache=new n.Data.ObjectCache({serializeKey:function(n){return JSON.stringify(
[n.type,n.id])},supplyValue:function(){return null}})}return t.prototype.getEntity=function(n,t,i){var
r={type:n,id:t},u;return this._atomizationCache.hasEntry(r)&&(u=this._atomizationCache.getValue(r,i)),
u},t.prototype.addEntity=function(n,t,i,r){this._atomizationCache.insertValueIfNotPresent({type:n,id:
t},i,r)},t.prototype.releaseEntities=function(){},t}(),r;t.RefCountingAtomizationContext=i,function(
t){function r(r){r=r||i;var u=t.atomizationContextCollection[r];return u||(u=n.Internal.Data.AtomizationContext.
createInstance(),t.atomizationContextCollection[r]=u),u}function u(t){if(!t)return!1;var i=n.Data.Metadata.
getTypeMetadata(t);return!!(i&&i.hasGloballyUniqueId&&n.Data.Metadata.typeHasId(t))}function f(){return new
n.Internal.Data.RefCountingAtomizationContext}t.atomizationContextCollection={};var i="__default__";
t.get=r;t.canAtomizeType=u;t.createInstance=f}(r=t.AtomizationContext||(t.AtomizationContext={}))})(
i=t.Data||(t.Data={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n){var
t;(function(t){var i;(function(t){"use strict";var i=0,r=function(){function t(t){var r=this,u;if(this.
_dataSetUniqueIdWithinDataCache=0,n.Base.ProxiedObservables.markNonSerializable(this),this._dataCacheUniqueId=
++i,this._entityTypeName=t.entityTypeName,n.Base.ProxiedObservables.markNonSerializable(this),t.atomizationOptions&&
!this._entityTypeName)throw new Error("When 'atomizationOptions' is supplied, 'entityTypeName' has to be supplied as well.");
else!t.atomizationOptions&&this._entityTypeName&&(t.atomizationOptions={});if(t.loader){if(this._loader=
t.loader,t.sourceUri||t.httpMethod)throw new Error("If you supply 'loader', do not supply a 'sourceUri' or 'httpMethod'.");
}else if(t.sourceUri||t.supplyData&&t.serializeParams){if(this._loader=new n.Data.DataCacheLoader(t),
u=t.httpMethod&&t.httpMethod.toLowerCase()!=="get",u&&!t.serializeParams)throw new Error("When httpMethod is set to anything but 'GET', you must supply a 'serializeParams' callback.");
}else throw new Error("Provide either a 'sourceUri', or a 'loader', or both 'supplyData' and 'serializeParams' when constructing a DataCache.");
this._cacheByParams=new n.Data.ObjectCache({supplyValue:function(n,t){return r._loader.loadDataSetForParams(
r._createUniqueDataSetName(),n,t)},serializeKey:function(n){return r._loader.serializeParams(n)},evictionDelay:
t.evictionDelay,onEntryDisposed:function(n){var t=function(){r._loader.disposeDataSet(n)};n.then(t,t)}
});this._doesPoll=!!t.poll}return t.prototype.fetch=function(n,t){var r=this,i=this._cacheByParams.getValue(
n,t);return i.then(null,function(){r._cacheByParams.immediatelyEvictEntry(n)}),i},t.prototype.refresh=
function(n,t){var r=this._cacheByParams.hasEntry(n),i=this.fetch(n,t);return r?this._loader.refreshDataSet(
i):i},t.prototype.refreshAll=function(n){var t=this;this._cacheByParams.forEachEntry(function(i,r){var
u=!n||n(i);u&&t._loader.refreshDataSet(r)})},t.prototype.applyChanges=function(n,t){var i=this;this.
_cacheByParams.forEachEntry(function(r,u){if(!t||t(r)){var f=u.dataSetName,e=i._loader.getLoadedDataSet(
f);e&&n(r,e);i._loader.isLoadingDataSet(f)&&i._loader.refreshDataSet(u)}})},t.prototype.dispose=function(
){this._cacheByParams.dispose()},Object.defineProperty(t.prototype,"doesPoll",{get:function(){return this.
_doesPoll},enumerable:!0,configurable:!0}),t.prototype._createUniqueDataSetName=function(){return"DataCache:"+
this._dataCacheUniqueId+":"+ ++this._dataSetUniqueIdWithinDataCache},t}();t.DataCache=r})(i=t.Data||
(t.Data={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t){"use strict";var i=
$.Deferred().resolve().promise(),r=function(t){function r(){t.apply(this,arguments)}return __extends(
r,t),Object.defineProperty(r.prototype,"_refreshableDataSource",{get:function(){return this._dataSource}
,enumerable:!0,configurable:!0}),r.prototype.refresh=function(){var u=this,t,r;if(this._isDisposed||
!this._currentCacheEntryDisposer)return i;if(!this._requestInProgress()){if(!this._loadedCacheEntry(
))return this.fetch(this._currentParams);t=new n.Base.Promises.CancelationToken;this._requestInProgress(
{cancelationToken:t,cancelablePromise:n.Base.Promises.wrapWithCancelablePromise(this._refreshableDataSource.
refresh(this._currentParams,this._currentCacheEntryDisposer),t),externalPromise:null});r=function(){
u._requestInProgress(null)};this._requestInProgress().cancelablePromise.then(r,r);this._requestInProgress(
).externalPromise=this._requestInProgress().cancelablePromise.then(function(){})}return this._requestInProgress(
).externalPromise},r}(t.ObjectView);t.DataView=r})(i=t.Data||(t.Data={}))})(t=n.Internal||(n.Internal=
{}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){"use strict";var
i=n.Base.Rpc.Internal,e=n.Base.Utilities,u=new n.Base.Diagnostics.Log("MsPortalFx/Data/Internal/Internal.Data.EditScopeCache"),
o,r,f;t.saveSerializedEditScopeEndPoint=new i.ActionEndPointDefinition("MsPortalFx.Internal.Data.saveSerializedEditScope");
t.loadSerializedEditScopeEndPoint=new i.FuncEndPointDefinition("MsPortalFx.Internal.Data.loadSerializedEditScope");
t.onEditScopeDiscardedEndPoint=new i.ActionEndPointDefinition("MsPortalFx.Internal.Data.onEditScopeDiscarded"),
function(n){n[n.LoadOriginalDataFailed=0]="LoadOriginalDataFailed";n[n.LoadEditsFailed=1]="LoadEditsFailed";
n[n.ApplyEditsFailed=2]="ApplyEditsFailed"}(t.FetchEditScopeError||(t.FetchEditScopeError={}));o=t.FetchEditScopeError;
r=function(){function n(n){var r=this;n===void 0&&(n=i.client);this._caches=[];t.onEditScopeDiscardedEndPoint.
register(n,["fx"],function(n){r._caches.forEach(function(t){t.onEditScopeDiscarded(n)})})}return n.prototype.
register=function(n){this._caches.push(n)},n.prototype.deregister=function(n){this._caches.remove(n)}
,n}();t.EditScopeDiscardedReceiver=r;t.editScopeDiscardedReceiver=new r;f=function(){function r(i,u)
{var f=this;if(this._editScopeEditsChangedSubscriptions={},this._loadEdits=u&&u.loadEdits||r._remoteLoadEdits,
this._saveEdits=u&&u.saveEdits||r._remoteSaveEditScope,this._entityTypeName=i.entityTypeName,this._options=
e.clone(i),this._options.dataCache&&this._options.dataCache.doesPoll)throw new Error("Any DataCache supplied with the 'EditScopeCacheOptions.dataCache' option should not be one that polls for server data changes. Otherwise, server changes detected during polling will be reflected incorrectly as user edits. See 'MsPortalFx.Data.DataCacheConfig.poll'.");
n.Base.ProxiedObservables.markNonSerializable(this);this._cacheByParams=new n.Data.ObjectCache({supplyValue:
function(n,t){return f._getEditScopeForKey(n,t)},serializeKey:function(n){return f._serializeKey(n)}
,onEntryDisposed:function(n,t){var i=f._serializeKey(t),r=f._editScopeEditsChangedSubscriptions[i];r&&
(delete f._editScopeEditsChangedSubscriptions[i],r.dispose());n.then(function(n){n.dispose()})}});t.
editScopeDiscardedReceiver.register(this)}return r.prototype.createView=function(t){return new n.Data.
EditScopeView(this,t)},r.prototype.fetch=function(n,t){return this._cacheByParams.getValue(n,t)},r.prototype.
forEachEditScope=function(n){var t=[];return this._cacheByParams.forEachEntry(function(i,r){t.push(r.
then(function(t){n(i.editScopeId,t)}))}),Q.all(t)},r.prototype.dispose=function(){if(this._cacheByParams&&
(this._cacheByParams.dispose(),this._cacheByParams=null),this._editScopeEditsChangedSubscriptions){for(
var n in this._editScopeEditsChangedSubscriptions)this._editScopeEditsChangedSubscriptions[n].dispose(
);this._editScopeEditsChangedSubscriptions=null}t.editScopeDiscardedReceiver.deregister(this)},r.prototype.
disposeAndDiscardEdits=function(n,t){var i=t.editScope();if(!i)throw new Error("EditScopeView isn't loaded with an EditScope.");
i.dispose();r._remoteSaveEdits(n,{edits:[]})},r.prototype.onEditScopeDiscarded=function(n){return this.
_revertEditScope(n)},r._remoteSaveEditScope=function(n,t){r._remoteSaveEdits(n,t.getEdits())},r._remoteSaveEdits=
function(n,i){t.saveSerializedEditScopeEndPoint.invoke(r._rpcClient,"fx",{editScopeId:n,edits:i})},r.
_remoteLoadEdits=function(n){return t.loadSerializedEditScopeEndPoint.invoke(r._rpcClient,"fx",n).then(
null,function(n){u.error("Loading of EditScope edits from user settings service failed.");throw n;})}
,Object.defineProperty(r.prototype,"_isDisposed",{get:function(){return this._cacheByParams===null},
enumerable:!0,configurable:!0}),r.prototype._revertEditScope=function(n){return this.forEachEditScope(
function(t,i){t===n&&i.revertAll()})},r.prototype._serializeKey=function(n){var i=n.editScopeId,t;if(
n.params){if(this._options.serializeParams)t=this._options.serializeParams;else if(this._options.serializeKeyOrQuery)
t=this._options.serializeKeyOrQuery;else if(typeof n.params=="number"||typeof n.params=="string")t=JSON.
stringify;else throw new Error("If 'params' is not of number or string type, the 'serializeParams' option has to be provided to Data.EditScopeCache.");
i+=":"+t(n.params)}return i},r.prototype._getEditScopeForKey=function(t,i){var u=this,r;if(!t.editScopeId)
throw new Error("'editScopeId' has to be provided when 'fetchForNewData' or 'fetchForExistingData' is called.");
if(t.params!==undefined)if(this._options.supplyExistingData)r=function(){return u._options.supplyExistingData(
t.params,i)};else if(this._options.dataCache)r=function(){var n=u._options.dataCache.createView(i);return n.
fetch(t.params).then(function(){return n.data})};else throw new Error("'dataCache' or 'supplyExistingData' has to be provided if 'fetchForExistingData' is called.");
else if(this._options.supplyNewData)r=function(){return Q(u._options.supplyNewData())};else if(this.
_options.entityTypeName)r=function(){return Q(n.Data.Metadata.createEmptyObject(u._options.entityTypeName))}
;else throw new Error("'supplyNewData' or 'entityTypeName' has to be provided if 'fetchForNewData' is called.");
return this._acquireEditScope(t,r,i,this._options.entityTypeName)},r.prototype._acquireEditScope=function(
t,i,r,u){var f=this,e=Q.defer();return i().then(function(i){var s,o,h;if(!f._isDisposed){if(f._options.
refreshEditScope?s=function(i){var r=new n.Internal.Base.TriggerableLifetimeManager;return f._options.
refreshEditScope(t.params,r,i).finally(function(){r.dispose()})}:f._options.dataCache&&(s=function()
{var i=new n.Internal.Base.TriggerableLifetimeManager,r=f._options.dataCache.createView(i);return r.
fetch(t.params).then(function(){return r.data}).finally(function(){i.dispose()})}),o=n.Internal.Data.
createEditScope(i,{kind:f._options.kind,typeName:u,refresh:s,save:f._options.saveEditScopeChanges&&function(
i,r,u){var e=new n.Internal.Base.TriggerableLifetimeManager;return f._options.saveEditScopeChanges(t.
params,i,r,e,u).finally(function(){e.dispose()})}}),f._options.onEditScopeCreated)f._options.onEditScopeCreated(
r,o);h=t.editScopeId;f._loadAndApplyEdits(o,h).then(function(){if(!f._isDisposed){var n=f._serializeKey(
t);f._editScopeEditsChangedSubscriptions[n]=o.editsChanged.subscribe(function(){f._saveEdits(h,o)});
e.resolve(o)}},function(n){e.reject(n)})}},function(){e.reject(0)}),e.promise},r.prototype._loadAndApplyEdits=
function(n,t){var i=this;return this._loadEdits(t).then(function(t){if(!i._isDisposed){var r=Q.defer(
);return t?n.applyEdits(t)?r.resolve():(u.warning("Application of EditScope edits from user settings service failed."),
r.reject(2)):r.resolve(),r.promise}},function(){return 1})},r._rpcClient=i.client,r}();t.EditScopeCache=
f})(i=t.Data||(t.Data={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n)
{var t;(function(t){var i;(function(t){"use strict";var f=n.Base.Rpc.Internal,i=n.Helpers,e=n.Base.Utilities,
r=new n.Base.Diagnostics.Log("MsPortalFx/Data/Internal/Internal.Data.EditScopeCache"),u=n.Internal.Data.
editScopeDiscardedReceiver,o=function(){function o(t,i){var r=this;this._editScopeEditsChangedSubscriptions=
{};this._loadEdits=i&&i.loadEdits||o._remoteLoadEdits;this._saveEdits=i&&i.saveEdits||o._remoteSaveEditScope;
this._entityTypeName=t.entityTypeName;this._options=e.clone(t);n.Base.ProxiedObservables.markNonSerializable(
this);this._cacheByParams=new n.Data.ObjectCache({supplyValue:function(n,t){return r._getEditScopeForKey(
n,t)},serializeKey:function(n){return r._serializeKey(n)},onEntryDisposed:function(n,t){var i=r._serializeKey(
t),u=r._editScopeEditsChangedSubscriptions[i];u&&(delete r._editScopeEditsChangedSubscriptions[i],u.
dispose());n.then(function(n){n.dispose()})}});u.register(this)}return o.prototype.createView=function(
t){return new n.Data.EditScopeView(this,t)},o.prototype.fetch=function(n,t){return this._cacheByParams.
getValue(n,t)},o.prototype.forEachEditScope=function(n){var t=[];return this._cacheByParams.forEachEntry(
function(i,r){t.push(r.then(function(t){n(i.editScopeId,t)}))}),Q.all(t)},o.prototype.dispose=function(
){if(this._cacheByParams&&(this._cacheByParams.dispose(),this._cacheByParams=null),this._editScopeEditsChangedSubscriptions)
{for(var n in this._editScopeEditsChangedSubscriptions)this._editScopeEditsChangedSubscriptions[n].dispose(
);this._editScopeEditsChangedSubscriptions=null}u.deregister(this)},o.prototype.disposeAndDiscardEdits=
function(n,t){var i=t.editScope();if(!i)throw new Error("EditScopeView isn't loaded with an EditScope.");
i.dispose();o._remoteSaveEdits(n,{edits:[]})},o.prototype.onEditScopeDiscarded=function(n){return this.
_revertEditScope(n)},o._remoteSaveEditScope=function(n,t){o._remoteSaveEdits(n,t.getEdits())},o._remoteSaveEdits=
function(n,i){t.saveSerializedEditScopeEndPoint.invoke(o._rpcClient,"fx",{editScopeId:n,edits:i})},o.
_remoteLoadEdits=function(n){return t.loadSerializedEditScopeEndPoint.invoke(o._rpcClient,"fx",n).then(
null,function(n){r.error("Loading of EditScope edits from user settings service failed.");throw n;})}
,Object.defineProperty(o.prototype,"_isDisposed",{get:function(){return this._cacheByParams===null},
enumerable:!0,configurable:!0}),o.prototype._revertEditScope=function(n){return this.forEachEditScope(
function(t,i){t===n&&i.revertAll()})},o.prototype._serializeKey=function(n){var i=n.editScopeId,t;if(
n.params){if(this._options.serializeParams)t=this._options.serializeParams;else if(this._options.serializeKeyOrQuery)
t=this._options.serializeKeyOrQuery;else if(typeof n.params=="number"||typeof n.params=="string")t=JSON.
stringify;else throw new Error("If 'params' is not of number or string type, the 'serializeParams' option has to be provided to Data.EditScopeCache.");
i+=":"+t(n.params)}return i},o.prototype._getEditScopeForKey=function(t,i){var u=this,r;if(t.editScopeId&&
(t.params||t.params===null)){if(!this._options.supplyExistingData)throw new Error("'supplyExistingData' has to be provided if 'fetchForExistingData' is called.");
r=function(){return u._options.supplyExistingData(t.params,i)}}else if(t.editScopeId&&t.params===undefined&&
this._options.supplyNewData)r=function(){return $.Deferred().resolve(u._options.supplyNewData()).promise(
)};else if(t.editScopeId&&!t.params&&this._options.entityTypeName)r=function(){return $.Deferred().resolve(
n.Data.Metadata.createEmptyObject(u._options.entityTypeName)).promise()};else if(this._options.supplyNewData||
this._options.entityTypeName)throw new Error("'editScopeId' has to be provided if 'fetchForNewData' or 'fetchForExistingData' is called.");
else throw new Error("'supplyNewData' or 'entityTypeName' has to be provided if 'fetchForNewData' is called.");
return this._acquireEditScope(t,r,i,this._options.entityTypeName)},o.prototype._acquireEditScope=function(
t,r,u,f){var e=this,o=i.Deferred(),h=o.promise(),s=t.editScopeId;return r().then(function(i){if(!e._isDisposed)
{var r=n.Internal.Data.createEditScope(i,{kind:e._options.kind,typeName:f,refresh:e._options.refreshEditScope&&
function(i){var r=new n.Internal.Base.TriggerableLifetimeManager;return e._options.refreshEditScope(
t.params,r,i).finally(function(){r.dispose()})},save:e._options.saveEditScopeChanges&&function(i,r,u)
{var f=new n.Internal.Base.TriggerableLifetimeManager;return e._options.saveEditScopeChanges(t.params,
i,r,f,u).finally(function(){f.dispose()})}});if(e._options.onEditScopeCreated)e._options.onEditScopeCreated(
u,r);e._loadAndApplyEdits(r,s).then(function(){if(!e._isDisposed){var n=e._serializeKey(t);e._editScopeEditsChangedSubscriptions[
n]=r.editsChanged.subscribe(function(){e._saveEdits(s,r)});o.resolve(r)}},function(n){o.reject(n)})}
},function(){o.reject(0)}),h},o.prototype._loadAndApplyEdits=function(n,t){var u=this;return this._loadEdits(
t).then(function(t){if(!u._isDisposed){var f=i.Deferred();return t?n.applyEdits(t)?f.resolve():(r.warning(
"Application of EditScope edits from user settings service failed."),f.reject(2)):f.resolve(),f.promise(
)}},function(){return 1})},o._rpcClient=f.client,o}();t.EditScopeCacheOld=o})(i=t.Data||(t.Data={}))}
)(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;
(function(){"use strict"})(t=n.Data||(n.Data={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(t){var i;(function(t){"use strict";var i=6e4,u=function(){function t(
t){if(this._isDisposed=!1,this._evictionDelayMilliseconds=null,this._evictionTimeoutHandlesByKey={},
this._entriesByKey={},this._entriesByReferrerThenKey={},n.Base.ProxiedObservables.markNonSerializable(
this),t){if(t.evictionDelay>i)throw new Error("The maximum eviction delay is "+i+" milliseconds.");this.
_onDisposeEntryCallback=t.onEntryDisposed;this._evictionDelayMilliseconds=t.evictionDelay}}return t.
prototype.getEntry=function(n,t,i){if(!n)throw new Error("Value cannot be null: key (If you're working with an edit scope verify that you have NewEditScope='true' attribute in PDL.");
if(!i)throw new Error("Value cannot be null: createCallback.");if(this._isDisposed)throw new Error("Cannot getEntry from a RefCountCache that is already disposed.");
var u=this._entriesByKey[n];return u||(u=new r(n,i()),t&&(this._entriesByKey[n]=u)),t?(this._ensureReferenceExists(
u,t),this._cancelAnyDelayedEviction(u.key)):this._entryHasDelayedEvictionInProgress(u)||this._immediateEvictEntryIfNoReferences(
u),u.value},t.prototype.hasEntry=function(n){return n in this._entriesByKey},t.prototype.dissociateEntry=
function(n,t){var r=this._entriesByKey[n],i;r&&(r.dissociate(t),i=this._entriesByReferrerThenKey[t],
i&&(delete i[n],Object.getOwnPropertyNames(i).length===0&&delete this._entriesByReferrerThenKey[t]),
this._delayedEvictEntryIfNoReferences(r))},t.prototype.immediatelyEvictEntry=function(n){var r=this,
t=this._entriesByKey[n],i;t&&(i=t.dissociateFromAllReferrers(),i.forEach(function(t){var i=r._entriesByReferrerThenKey[
t];i&&delete i[n]}),this._immediateEvictEntryIfNoReferences(t))},t.prototype.disposeReferrer=function(
n){var i=this,t=this._entriesByReferrerThenKey[n];t&&Object.getOwnPropertyNames(t).forEach(function(
t){i.dissociateEntry(t,n)})},t.prototype.forEachEntry=function(n){var t=this,i=Object.getOwnPropertyNames(
this._entriesByKey);i.forEach(function(i){var r=t._entriesByKey[i];n(i,r.value)})},t.prototype.dispose=
function(){var n=this;this._isDisposed=!0;this._onDisposeEntryCallback&&Object.getOwnPropertyNames(this.
_entriesByKey).forEach(function(t){var i=n._entriesByKey[t];n._onDisposeEntryCallback(i.value,t)});this.
_entriesByKey={};this._entriesByReferrerThenKey={};Object.getOwnPropertyNames(this._evictionTimeoutHandlesByKey).
forEach(function(t){n._cancelAnyDelayedEviction(t)})},t.prototype._ensureReferenceExists=function(n,
t){var i=this._entriesByReferrerThenKey[t];i||(i={},this._entriesByReferrerThenKey[t]=i);n.key in i||
(i[n.key]=n,n.associate(t))},t.prototype._entryHasDelayedEvictionInProgress=function(n){return!!this.
_evictionTimeoutHandlesByKey[n.key]},t.prototype._cancelAnyDelayedEviction=function(n){var t=this._evictionTimeoutHandlesByKey[
n];t&&(delete this._evictionTimeoutHandlesByKey[n],window.clearTimeout(t))},t.prototype._delayedEvictEntryIfNoReferences=
function(n){var t=this;n.hasNoReferences()&&(this._cancelAnyDelayedEviction(n.key),this._evictionDelayMilliseconds===
null||this._evictionDelayMilliseconds===undefined?this._immediateEvictEntryIfNoReferences(n):this._evictionTimeoutHandlesByKey[
n.key]=window.setTimeout(function(){t._immediateEvictEntryIfNoReferences(n)},this._evictionDelayMilliseconds))}
,t.prototype._immediateEvictEntryIfNoReferences=function(n){n.hasNoReferences()&&(delete this._entriesByKey[
n.key],this._onDisposeEntryCallback&&this._onDisposeEntryCallback(n.value,n.key),this._cancelAnyDelayedEviction(
n.key))},t}(),r;t.RefCountCache=u;r=function(){function n(n,t){this._referrerIds=[];this._key=n;this.
_value=t}return Object.defineProperty(n.prototype,"key",{get:function(){return this._key},enumerable:
!0,configurable:!0}),Object.defineProperty(n.prototype,"value",{get:function(){return this._value},enumerable:
!0,configurable:!0}),n.prototype.hasNoReferences=function(){return this._referrerIds.length===0},n.prototype.
associate=function(n){this._referrerIds.indexOf(n)<0&&this._referrerIds.push(n)},n.prototype.dissociate=
function(n){var t=this._referrerIds.indexOf(n);t>=0&&this._referrerIds.splice(t,1)},n.prototype.dissociateFromAllReferrers=
function(){var n=this._referrerIds;return this._referrerIds=[],n},n}()})(i=t.Data||(t.Data={}))})(t=
n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(
t){var i;(function(t){"use strict";function o(n){return e.isObject(n)}function s(n){return n===null||
n===undefined}function r(n,t){return n instanceof Date&&t instanceof Date&&!(n>t||n<t)}function i(n)
{return ko.isObservable(n)&&Array.isArray(n())}function u(n){return Array.isArray(n)||i(n)}function h(
n,t){var i=n[t];return f(n,t)?i():i}function f(n,t){var r=n[t];return ko.isObservable(r)&&!i(r)}function c(
n){if(!u(n))throw new Error("Only an array or an observable array is expected here.");return ko.utils.
unwrapObservable(n)}function l(n,t){return n===t||r(n,t)}var e=n.Base.Utilities;t.isObject=o;t.isNullOrUndefined=
s;t.equalDates=r;t.isObservableArray=i;t.isArrayOrObservableArray=u;t.unwrapObjectPropertyValue=h;t.
isObservableObjectPropertyValue=f;t.unwrapArrayOrObservableArray=c;t.equalScalarValues=l})(i=t.Shared||
(t.Shared={}))})(i=t.Data||(t.Data={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})
),function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.Data||(n.Data={}))})(t=n.Internal||
(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){"use strict";
var i=n.Data.Metadata,r=function(){function n(n,t){this._callbacks={visitEntityArray:t.visitEntityArray||
this.visitEntityArray.bind(this),visitNonEntityArray:t.visitNonEntityArray||this.visitNonEntityArray.
bind(this),visitArray:t.visitArray||this.visitArray.bind(this),visitArrayItem:t.visitArrayItem||this.
visitArrayItem.bind(this),visitEntity:t.visitEntity||this.visitEntity.bind(this),visitNonEntityObject:
t.visitNonEntityObject||this.visitNonEntityObject.bind(this),visitObject:t.visitObject||this.visitObject.
bind(this),shouldVisitObjectProperty:t.shouldVisitObjectProperty||this.shouldVisitObjectProperty.bind(
this),visitEntityTypedObjectPropertyValue:t.visitEntityTypedObjectPropertyValue||this.visitEntityTypedObjectPropertyValue.
bind(this),visitNonEntityTypedObjectPropertyValue:t.visitNonEntityTypedObjectPropertyValue||this.visitNonEntityTypedObjectPropertyValue.
bind(this),visitObjectPropertyValue:t.visitObjectPropertyValue||this.visitObjectPropertyValue.bind(this),
visitDate:t.visitDate||this.visitDate.bind(this),visitScalar:t.visitScalar||this.visitScalar.bind(this),
visitFunction:t.visitFunction||this.visitFunction.bind(this)}}return n.prototype.visit=function(n,t,
i){return this._visit(n,t,i)},n.prototype.visitEntityArray=function(n,t,i){return this._callbacks.visitArray(
n,t,i)},n.prototype.visitNonEntityArray=function(n,t,i){return this._callbacks.visitArray(n,t,i)},n.
prototype.visitArray=function(n,i,r){var u=this;return t.Shared.unwrapArrayOrObservableArray(n).forEach(
function(n,t){u._callbacks.visitArrayItem(n,t,i,r)}),undefined},n.prototype.visitArrayItem=function(
n,t,i,r){if(ko.isObservable(n))throw new Error("Data can't include arrays whose items are observables.  Only scalar- and object-typed array items are supported.");
return this._visit(n,i,r)},n.prototype.visitEntity=function(n,t,i){return this._callbacks.visitObject(
n,t,i)},n.prototype.visitNonEntityObject=function(n,t,i){return this._callbacks.visitObject(n,t,i)},
n.prototype.visitObject=function(n,t,i){var r=this;return this.getObjectPropertiesToVisit(n,t).forEach(
function(u){r.visitObjectPropertyValueDispatch(u,n,t,i)}),undefined},n.prototype.shouldVisitObjectProperty=
function(n,t){return typeof ko.utils.unwrapObservable(t[n])!="function"},n.prototype.visitEntityTypedObjectPropertyValue=
function(n,i,r,u){var f=t.Shared.unwrapObjectPropertyValue(i,n);return t.Shared.isArrayOrObservableArray(
f)?this._callbacks.visitEntityArray(f,r,u):this._callbacks.visitEntity(f,r,u)},n.prototype.visitNonEntityTypedObjectPropertyValue=
function(n,t,i,r){return this._callbacks.visitObjectPropertyValue(n,t,i,r)},n.prototype.visitObjectPropertyValue=
function(n,i,r,u){return this._visit(t.Shared.unwrapObjectPropertyValue(i,n),r,u)},n.prototype.visitDate=
function(){return undefined},n.prototype.visitScalar=function(){return undefined},n.prototype.visitFunction=
function(){return undefined},n.prototype.getObjectPropertiesToVisit=function(n,t){var i=this;return Object.
keys(n).filter(function(r){return i._callbacks.shouldVisitObjectProperty(r,n,t)})},n.prototype.visitObjectPropertyValueDispatch=
function(n,t,r,u){var f=i.getPropertyTypeMetadata(r,n),e=i.typeIsEntityType(f);return e?this._callbacks.
visitEntityTypedObjectPropertyValue(n,t,f,u):this._callbacks.visitNonEntityTypedObjectPropertyValue(
n,t,f,u)},n.prototype._visit=function(n,i,r){return t.Shared.isArrayOrObservableArray(n)?this._visitArrayDispatch(
n,i,r):t.Shared.isObject(n)?this._visitObjectDispatch(n,i,r):n instanceof Date?this._callbacks.visitDate(
n,r):typeof n=="function"?this._callbacks.visitFunction(n,r):this._callbacks.visitScalar(n,r)},n.prototype.
_visitArrayDispatch=function(n,t,r){var u=i.typeIsEntityType(t);return u?this._callbacks.visitEntityArray(
n,t,r):this._callbacks.visitNonEntityArray(n,t,r)},n.prototype._visitObjectDispatch=function(n,t,r){
var u=i.typeIsEntityType(t);return u?this._callbacks.visitEntity(n,t,r):this._callbacks.visitNonEntityObject(
n,t,r)},n}();t.Visitor=r})(i=t.Data||(t.Data={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
n){"use strict";var t=function(t){function i(n,i){t.call(this,n,i)}return __extends(i,t),i.prototype.
clone=function(n,t){return this._visit(n,t)},i.prototype.visitArray=function(t,i){var u=this,r=n.Shared.
unwrapArrayOrObservableArray(t).map(function(n,t){return u._callbacks.visitArrayItem(n,t,i)});return n.
Shared.isObservableArray(t)&&(r=t.splice?ko.observableArray(r):ko.observable(r)),r},i.prototype.visitObject=
function(n,t){var r=this,i={};return this.getObjectPropertiesToVisit(n,t).forEach(function(u){i[u]=r.
visitObjectPropertyValueDispatch(u,n,t)}),i},i.prototype.visitEntityTypedObjectPropertyValue=function(
n,t,i){return this._callbacks.visitObjectPropertyValue(n,t,i)},i.prototype.visitObjectPropertyValue=
function(t,i,r){var u=i[t],f=n.Shared.isObservableObjectPropertyValue(i,t),e=this._visit(f?u():u,r);
return f?ko.observable(e):e},i.prototype.visitDate=function(n){return new Date(n.getTime())},i.prototype.
visitScalar=function(n){return n},i.prototype.visitFunction=function(){throw new Error("Cloning functions is not supported.");
},i}(n.Visitor);n.CloneVisitor=t})(t=n.Data||(n.Data={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(t){"use strict";var i=n.Data.Metadata,r=function(n){function r(t,i){this._clone=t.
clone;this._onDetach=t.onDetach;n.call(this,t,i)}return __extends(r,n),r.prototype.merge=function(t,
i,r){var u=n.prototype._visit.call(this,t,r,i);if(!u)throw new Error("Cannot merge changes because there are no observables to set to reflect merge changes.");
},r.prototype.visitObject=function(n,t,i){var r=this;return this.getObjectPropertiesToVisit(n,t).every(
function(u){return r.visitObjectPropertyValueDispatch(u,n,t,i)})},r.prototype.visitObjectPropertyValueDispatch=
function(t,i,r,u){var f=n.prototype.visitObjectPropertyValueDispatch.call(this,t,i,r,u);return f||(f=
this._cloneAndSetProperty(t,i,r,u)),f},r.prototype.visitEntityTypedObjectPropertyValue=function(n,t,
i,r){return this._callbacks.visitObjectPropertyValue(n,t,i,r)},r.prototype.visitNonEntityTypedObjectPropertyValue=
function(n,t,i,r){return this._callbacks.visitObjectPropertyValue(n,t,i,r)},r.prototype.visitObjectPropertyValue=
function(n,i,r,u){var f=t.Shared.unwrapObjectPropertyValue(i,n),e=t.Shared.unwrapObjectPropertyValue(
u,n),o=!1;return t.Shared.isArrayOrObservableArray(f)?t.Shared.isArrayOrObservableArray(e)&&(o=this.
_visitArrayDispatch(f,r,e)):t.Shared.isObject(f)?t.Shared.isObject(e)&&(o=this._visitObjectDispatch(
f,r,e)):typeof f=="function"?o=!0:t.Shared.equalScalarValues(f,e)&&(o=!0),o},r.prototype.visitArray=
function(n,t,r){var u=this;return i.typeHasId(t)?this._mergeArray(n,t,r,{getEdits:function(n,i,r){var
e=n.map(function(n){return u._getItemId(n,t)}),o=i.map(function(n){return u._getItemId(n,t)}),f=ko.utils.
compareArrays(o,e,r);return f.forEach(function(r){r.value=(r.status==="added"?n:i).first(function(n)
{return u._getItemId(n,t)===r.value})}),f},getSourceItem:function(n,i){var r=u._getItemId(n,t);return i.
first(function(n){return u._getItemId(n,t)===r})}}):this._mergeArray(n,t,r,{getEdits:function(n,t,i)
{return ko.utils.compareArrays(t,n,{sparse:i})}})},r.prototype._mergeArray=function(n,i,r,u){var f=this,
e=t.Shared.unwrapArrayOrObservableArray(n),h=t.Shared.unwrapArrayOrObservableArray(r),c,l,a,o,s;return ko.
isObservable(r)?(c=!0,o=!r.splice&&r,s=o?o().slice(0):r,ko.utils.fixupArrayEdits(u.getEdits(e,h,!1)).
forEach(function(n){switch(n.status){case"added":s.splice(n.index,0,f._clone(n.value,i));break;case"deleted":
f._onDetach(n.value,i);s.splice(n.index,1);break;case"retained":if(u.getSourceItem){var t=n.value,r=
u.getSourceItem(t,e),o=f._callbacks.visitObject(r,i,t);o||(f._onDetach(t,i),s.splice(n.index,1,f._clone(
r,i)))}}}),o&&o(s)):(e.length!==h.length?l=!0:(a=u.getEdits(e,h,!0),l=a.length>0?!0:h.some(function(
n,r){var o,s;return u.getSourceItem?(o=u.getSourceItem(n,e),s=f._visit(o,i,n),!s):(o=e[r],t.Shared.isObject(
o)&&t.Shared.isObject(n)?o!==n:!t.Shared.equalScalarValues(o,n))})),c=!l),c},r.prototype._cloneAndSetProperty=
function(n,r,u,f){var a=r[n],e=f[n],c=t.Shared.unwrapObjectPropertyValue(r,n),o=t.Shared.unwrapObjectPropertyValue(
f,n),s,h,l;if(ko.isObservable(e)&&t.Shared.isObservableArray(c)!==t.Shared.isObservableArray(o))throw new
Error("Data being merged is not type-compatible with previous data.");return ko.isObservable(e)?(s=!0,
o&&this._onDetach(o,h),h=i.getPropertyTypeMetadata(u,n),l=this._clone(c,h),e(l)):s=!1,s},r.prototype.
_getItemId=function(n,t){var r=i.getItemId(n,t);if(r===undefined)throw new Error("Data item is missing id property or properties.");
return r},r}(t.Visitor);t.MergeVisitor=r})(i=t.Data||(t.Data={}))})(t=n.Internal||(n.Internal={}))}(
MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}
for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){"use strict";var t=function(n){function t(t,i){var r=this;n.call(this);this._currentSkipTakeParams=
ko.observable(null);this._allItems=i;this._itemsComputed=ko.computed(function(){var n=r._currentSkipTakeParams(
);return n&&r._allItems()?r._allItems().slice(n.skip,n.take?n.skip+n.take:undefined):[]});this._metadataComputed=
ko.computed(function(){return{totalItemCount:r._allItems().length}});this.items=this._itemsComputed;
this.metadata=this._metadataComputed;t.registerForDispose(this._itemsComputed);t.registerForDispose(
this._metadataComputed)}return __extends(t,n),t.prototype.loadBySkipTake=function(n,t){return this._currentSkipTakeParams(
{skip:n||0,take:t}),Q(!0)},t}(n.DataNavigatorBase);n.LocalDataNavigator=t})(t=n.Data||(n.Data={}))}(
MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}
for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){"use strict";var i=function(t){function i(n,i,r,u){if(t.call(this),this._continuationTokenFilter=
null,this._continuationTokenSort=[],this._continuationTokenResetRequested=!0,this._queryParams=null,
!n)throw new Error("Argument cannot be null: lifetime");this.items=i;this.metadata=r;this._options=u;
this._options.loadBySkipTake||(this.loadBySkipTake=null);this._options.loadByContinuationToken||(this.
loadByContinuationToken=null)}return __extends(i,t),i.prototype.loadBySkipTake=function(n,t,i,r){if(
!this._options.loadBySkipTake)throw new Error("This data navigator does not support skip/take.");return this.
_options.loadBySkipTake(this.metadata(),this._getClonedQuery(),n,t,i,r)},i.prototype.loadByContinuationToken=
function(){if(!this._options.loadByContinuationToken)throw new Error("This data navigator does not support continuation tokens.");
var n=this._continuationTokenResetRequested;return this._continuationTokenResetRequested=!1,this._options.
loadByContinuationToken(this.metadata(),this._getClonedQuery(),n,this._continuationTokenFilter,this.
_continuationTokenSort)},i.prototype.resetLoadByContinuationToken=function(n,t){this._continuationTokenResetRequested=
!0;this._continuationTokenFilter=n;this._continuationTokenSort=t},i.prototype.setQuery=function(n){return this.
_queryParams=n,this.resetNavigation()},i.prototype._getClonedQuery=function(){return n.Base.Utilities.
clone(this._queryParams,!0)},i}(t.DataNavigatorBase);t.RemoteDataNavigator=i})(t=n.Data||(n.Data={})
)}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict"})(t=n.Data||(n.Data={}))}
(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict"})(t=n.Data||(n.Data={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(){"use strict"})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(t){"use strict";var r="GET",i=1e4,u=function(){function u(t){if(this.
_dataType=t.entityTypeName,this._uriForParams=t.sourceUri,this._httpMethod=t.httpMethod,this._shouldPoll=
!!t.poll,this._pollInterval=t.pollInterval||null,this._serializeParams=t.serializeParams,this._supplyData=
t.supplyData,this._atomizationOptions=t.atomizationOptions,this._processServerResponse=t.processServerResponse,
this._pollPreservesClientOrdering=!!t.pollPreservesClientOrdering,n.Base.ProxiedObservables.markNonSerializable(
this),this._shouldPoll&&this._pollInterval!==null&&this._pollInterval<i)throw new Error("The minimum poll interval is "+
i+" milliseconds.");}return u.prototype.serializeParams=function(n){return this._serializeParams?this.
_serializeParams(n):this._uriForParams(n)},u.prototype.loadDataSetForParams=function(n,i,u){var e=this,
f={uri:this._uriForParams?this._uriForParams(i):null,type:this._dataType,httpMethod:this._httpMethod||
r,pollFrequency:this._shouldPoll?2:1,atomizationOptions:this._atomizationOptions,dataSetLifetime:u,preserveNewItemsOrdering:
!this._pollPreservesClientOrdering,loaderOptions:{processResult:[t.DataProvider.DataContractJsonSerializer.
processResult]}},o;return this._shouldPoll&&this._pollInterval!==null&&t.Loader.setPollingIntervals(
n,{slowPollingInterval:this._pollInterval,pollingInterval:this._pollInterval,fastPollingInterval:this.
_pollInterval}),this._supplyData&&(f.loaderOptions.fetchData=function(n,t,r,u,f){return e._supplyData(
f,t,u,r,i)}),this._processServerResponse&&(o=function(n,t){var i=e._processServerResponse(t.data);return i&&
(t.data=i.data,t.navigationMetadata=i.navigationMetadata),!0},f.loaderOptions.processResult.unshift(
o)),this.loadDataSet(n,f)},u.prototype.loadDataSet=function(n,i){var u=t.Loader.getData(n,i),r=u.then(
function(n,t){return t});return r.dataSetName=n,r},u.prototype.refreshDataSet=function(n){return t.Loader.
forceRefresh(n.dataSetName)},u.prototype.disposeDataSet=function(n){t.Loader.disposeDataSet(n.dataSetName)}
,u.prototype.getLoadedDataSet=function(n){var i=t.Loader.getDataSet(n);return i&&i.data?i:null},u.prototype.
isLoadingDataSet=function(n){return t.Loader.hasRequestInFlight(n)},u}();t.DataCacheLoader=u})(t=n.Data||
(n.Data={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(){"use strict"}
)(t=n.DataProvider||(n.DataProvider={}))})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(t){var i;(function(i){"use strict";function r(n,i,f){Array.isArray(n)?n.forEach(function(
n){r(n,i,f)}):u.isObject(n)&&Object.getOwnPropertyNames(n).forEach(function(u){var e=t.Metadata.getPropertyMetadata(
i,u);f(n,u,e)&&e&&e.itemType&&r(n[u],e.itemType,f)})}function f(n){return n.substr(0,6)==="/Date("?new
Date(parseInt(n.substr(6),10)):new Date(n)}var u=n.Base.Utilities;i.DataContractJsonSerializer={processResult:
function(n,t,i,u,e){return e&&r(t.data,e,function(n,t,i){var u=!0,r;return i&&(i.isDate||i.itemType===
"System.DateTime")&&(r=n[t],typeof r=="string"&&(n[t]=f(r)),u=!1),u}),!0}}})(i=t.DataProvider||(t.DataProvider=
{}))})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(
n){"use strict";function t(n){var r=n.property,u=n.operator,t=n.value,i;typeof t=="string"?t="'"+t+"'":
t&&t instanceof Date&&(t="datetime'"+t.toISOString()+"'");switch(u){case"<":i=r+" lt "+t;break;case"<=":
i=r+" le "+t;break;case"==":i=r+" eq "+t;break;case"!=":i=r+" ne "+t;break;case">=":i=r+" ge "+t;break
case">":i=r+" gt "+t;break;case"StartsWith":i="startswith("+r+","+t+") eq true";break;case"EndsWith":
i="endswith("+r+","+t+") eq true";break;case"Contains":i="substringof("+t+","+r+") eq true";break;default:
throw new Error("The operator '"+u+"' is not supported.");}return i}function i(n){return!n.descending?
n.property:n.property+" desc"}n.OData={shapeQuery:function(n){var r={};return n.filter&&n.filter.length&&
(r.$filter=n.filter.map(t).join(" and ")),n.sort&&n.sort.length&&(r.$orderby=n.sort.map(i).join()),n.
paging&&n.paging.skip&&(r.$skip=n.paging.skip),n.paging&&n.paging.take&&(r.$top=n.paging.take),n.includeTotalCount&&
(r.$inlinecount="allpages"),r}}})(t=n.DataProvider||(n.DataProvider={}))})(t=n.Data||(n.Data={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){"use strict";function p(n,t){o.data(n,s,t)}function e(
n){return Array.isArray(n)||u.isObject(n)?o.data(n,s):null}function w(n){delete o.data(n,s)}function f(
n){var t=i(n);return Array.isArray(t)?n:t}function h(n,t){var r=i(n[t]);return Array.isArray(r)?n[t]:
r}function tt(){return Date.now()}function it(n,t){return n===t}function c(n,t,i){var r=e(n);return r?
i===1&&r.editKind===0?!1:!t||r.unlockedAt&&t>=r.unlockedAt:!0}function l(n,t){return t&&t.indexOf?t.
indexOf(n):-1}function rt(n,t){n.splice.apply(n,[0,n.length].concat(t))}function ut(n,t,i){for(var u,
h=n.length,o,f,s,e,r=i-1;r>=0;r--)if(u=l(n[r],t),u>=0){o=u+1;f=i-r;break}for(r=i+1;r<h;r++)if(u=l(n[
r],t),u>=0){s=u;e=r-i;break}return f===undefined&&e===undefined?t.length:(f||1e5)<(e||1e5)?o:s}function ft(
n,t){for(var e={},o=[],f,u,i=0,s=n.length;i<s;i++)if(f=n[i],u=r.getItemId(f,t),u===undefined)throw new
Error("Data item is missing id property.");else e[u]=f,o.push(u);return{index:e,ids:o}}function a(n,
t,r){var f=i(n),e,o,c,s;if(!v.isNullOrUndefined(f)){if(e=!1,r++,Array.isArray(f)){for(o=0,c=f.length;
o<c;o++)if(e=t(h(f,o)),e||a(h(f,o),t,r),e)break}else if(u.isObject(f)&&(r===1&&(e=t(f)),!e))for(s in
f)if(!s.match(/^jQuery\d+$/)&&(e=a(h(f,s),t,r),e))break;return e}}var v=n.Internal.Data.Shared,k=n.Internal.
Data.AtomizationContext,r=n.Data.Metadata,u=n.Base.Utilities,o=n.Base.ProxiedObservables,d=window,g=
new n.Base.Diagnostics.Log("MsPortalFx/Data/Data.DataSet"),i=ko.utils.unwrapObservable,nt=d.fx.environment.
isDevelopmentMode,s="aux-lockState",y,b;(function(n){n[n.Merge=0]="Merge";n[n.Deletion=1]="Deletion"}
)(y||(y={}));b=function(){function o(t,i,r){if(this._data=null,this._navigationMetadata=ko.observable(
null),n.Base.ProxiedObservables.markNonSerializable(this),this._type=t||null,r&&!i)throw new Error("If 'atomizationOptions' is provided, data set lifetime manager and an atomizable type have to be provided.");
this._lifetime=i;this._atomizationContext=r&&k.get(r.atomizationContextId)}return Object.defineProperty(
o.prototype,"data",{get:function(){return this._data},enumerable:!0,configurable:!0}),Object.defineProperty(
o.prototype,"lifetime",{get:function(){return this._lifetime},enumerable:!0,configurable:!0}),Object.
defineProperty(o.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),
Object.defineProperty(o.prototype,"navigationMetadata",{get:function(){return this._navigationMetadata}
,enumerable:!0,configurable:!0}),o.lockItem=function(n,i){if(!t.EditKind[i])throw new Error("Invalid edit kind.");
p(n,{editKind:i})},o.hasUnmergedClientChanges=function(n){return a(n,function(n){var t=e(n);return!!(t&&
!!t.unlockedAt)},0)},o.unlockItem=function(n,t){if(t=arguments.length===1?!0:t,t){var i=e(n);i&&(i.unlockedAt=
tt())}else w(n)},o.isLockedItem=function(n){var t=e(n);return!!(t&&!t.unlockedAt)},o.getIdPropertyNames=
function(t){var i;return t instanceof o&&(t=t.data),i=r.getArrayItemType(t),i&&n.Data.Metadata.getIdPropertyNames(
i&&r.getTypeMetadata(i))},o.getIdPropertyName=function(n){var t=this.getIdPropertyNames(n),i=null;if(
t){if(t.length>1)throw new Error("Type has multiple id properties.");i=t[0]||null}return i},o.mergeWithoutAtomization=
function(t,i,u){u=u||{};var f=u.type||r.getArrayItemType(i);if(!n.Data.DataSet._mergeArrayOrObject(t,
i,f,u))throw new Error("Merge target must be an array or object contained in this data set.");},o.prototype.
addItems=function(n,t,u,e,s){var l=this,h,c;if(u=u||{},s?h=u.type||r.getArrayItemType(s):(s=this.data,
h=this.type),!Array.isArray(i(s)))throw new Error("Cannot add items to non-array target.");e=e===undefined?
!0:e;c=t.map(function(n){var t=o._processForAdd(n,h,u,l);return e&&p(f(t),{editKind:0}),t});s.splice.
apply(s,[n,0].concat(c))},o.prototype.removeItems=function(n,t,u,f){if(f?u=u||r.getArrayItemType(f):
(f=this.data,u=this.type),!Array.isArray(i(f)))throw new Error("Cannot remove items from non-array target.");
var e=f.splice(n,t);this._atomizationContext&&this._atomizationContext.releaseEntities(u,e,this.lifetime)}
,o.prototype.removeItem=function(n,t,r){r||(r=this.data);var u=l(n,i(r));u>=0&&this.removeItems(u,1,
t,r)},o.prototype.setProperty=function(n,t,i,r){i=i||{};var u;r?u=i.type:(r=this.data,u=this.type);o.
_mergeArrayOrObject(t,r[n],u,i,this)||o._attachPropertyValue(r,n,t,u,i,this)},o.prototype.merge=function(
n,t){t=t||{};o._mergeArrayOrObject(n,this.data,this.type,t,this)||o._attachPropertyValue(this,"_data",
n,this.type,t,this)},o.prototype.hasUnmergedClientChanges=function(){return o.hasUnmergedClientChanges(
this.data)},o._mergeArrayOrObject=function(n,t,r,f,e){var s=!0,h=i(t);return Array.isArray(h)?o._mergeArray(
n,t,r,f,e):u.isObject(h)?o._mergeObject(n,t,r,f,e):s=!1,s},o._mergeArray=function(n,t,f,e,s){var l,h,
c,a;nt&&(l=i(n),h=l&&l[0],h&&u.isObject(h)&&(c=r.getArrayItemType(t)||f,a=c&&r.getTypeMetadata(c),a||
g.error((e.dataSetName?"Array in data set'"+e.dataSetName+"'":"Data")+" of type "+(c||"[No type specified]")
+" is being merged without identity because the type has no metadata. Please supply metadata for this type.  \nSource: "+
window.location.href+" \nOffending data item: "+JSON.stringify(h))));e.preserveNewItemsOrdering?o._mergeArrayPreserveSourceItemsOrdering(
n,t,f,e,s):o._mergeArrayPreserveTargetItemsOrdering(n,t,f,e,s)},o._mergeArrayPreserveSourceItemsOrdering=
function(t,u,e,s,h){for(var b=i(u),st=b.length,y,k,a=i(t),l,g=a.length,p,rt,w=n.Data.Metadata.getArrayItemType(
u)||e,ft=n.Data.Metadata.typeHasId(w),ht=ft&&a.map(function(n){var t=r.getItemId(i(n),w);if(t===undefined)
throw new Error("Data item is missing id property.");return t}),ct=s.preventItemRemoval,lt=s.fetchStart,
nt,et,tt=[],d,ot=a.slice(0),v=0;v<st;v++){if(y=b[v],k=undefined,nt=!1,ft&&g>0){if(k=r.getItemId(i(y),
w),k===undefined)throw new Error("Data item is missing id property.");for(l=0;l<g;l++)p=a[l],rt=ht[l],
it(k,rt)&&(o._mergeObject(p,y,w,s,h),a.splice(l,1,y),ot[l]=null,nt=!0)}nt||!ct&&c(f(y),lt,1)||tt.push(
v)}for(l=0;l<g;l++)p=ot[l],p&&(a[l]=o._processForAdd(p,w,s,h));for(et=tt.length,d=0;d<et;d++)v=tt[d],
y=b[v],l=ut(b,a,v),a.splice(l,0,y);u(a)},o._mergeArrayPreserveTargetItemsOrdering=function(t,u,e,s,h)
{for(var p=i(u),w=p.slice(0),b,k,d=i(t),v,l,y=n.Data.Metadata.getArrayItemType(u)||e,g=n.Data.Metadata.
typeHasId(y),it=g&&ft(d,y),ut,st=s.preventItemRemoval,ht=s.fetchStart,nt=[],et={},ot=0,tt=!1,a=p.length-
1;a>=0;a--){if(b=p[a],l=null,g){if(k=r.getItemId(i(b),y),k===undefined)throw new Error("Data item is missing id property.");
l=it.index[k]}l?(o._mergeObject(l,b,y,s,h),et[k]=!0,ot++):!st&&c(f(b),ht,1)&&(w.splice(a,1),tt=!0)}if(
ot!==d.length){for(v=0,ut=d.length;v<ut;v++)l=d[v],g&&et.hasOwnProperty(it.ids[v])||nt.push(o._processForAdd(
l,y,s,h));nt.length>0&&(w.push.apply(w,nt),tt=!0)}tt&&(ko.isObservable(u)&&u.valueWillMutate(),rt(p,
w),ko.isObservable(u)&&u.valueHasMutated())},o._mergeObject=function(t,r,e,s,h){if(c(f(r),s.fetchStart,
0)){w(f(r));var a,p=i(r),y,l,b;for(a in t)if(t.hasOwnProperty(a))if(y=i(p[a]),l=i(t[a]),b=n.Data.Metadata.
getPropertyType(e,a),l===null)y!==null&&p[a](null);else if(Array.isArray(l))Array.isArray(y)?o._mergeArray(
l,p[a],b||null,s,h):o._attachPropertyValue(p,a,l,b,s,h);else if(u.isObject(l))v.isNullOrUndefined(y)?
o._attachPropertyValue(p,a,l,b,s,h):y instanceof Date?(y>l||y<l)&&o._attachPropertyValue(p,a,l,b,s,h):
o._mergeObject(l,y,b||null,s,h);else if(typeof l=="function")continue;else o._attachPropertyValue(p,
a,l,b,s,h)}},o._attachPropertyValue=function(n,t,i,r,u,f){var e=o._processForAdd(i,r,u,f);n[t]&&ko.isObservable(
n[t])?n[t](ko.utils.unwrapObservable(e)):n[t]=ko.isObservable(e)?e:ko.observable(e)},o._processForAdd=
function(n,t,i,u){var f=o._atomizeOrMap(n,t,i,u);return r.decorateWithType(f,t),f},o._atomizeOrMap=function(
n,t,r,f){return Array.isArray(i(n))?ko.observableArray(i(n).map(function(n){return o._atomizeOrMap(n,
t,r,f)})):u.isObject(n)?o._atomizeOrMapObject(n,t,r,f):n},o._atomizeOrMapObject=function(t,i,u,f){var
e,a=f&&f.lifetime&&f._atomizationContext&&n.Internal.Data.AtomizationContext.canAtomizeType(i),l,h,s,
c;if(a&&(l=r.getItemId(t,i),h=f._atomizationContext.getEntity(i,l,f.lifetime),h&&(o._mergeObject(t,h,
i,u,f),e=h)),!e){e={};for(s in t)t.hasOwnProperty(s)&&(c=o._atomizeOrMap(t[s],n.Data.Metadata.getPropertyType(
i,s),u,f),e[s]=ko.isObservable(c)?c:ko.observable(c));a&&f._atomizationContext.addEntity(i,l,e,f.lifetime)}
return e},o}();t.DataSet=b})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={})),function(){"use strict"}
(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict"})(t=n.Data||(n.Data={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){"use strict";var t,i,r;(function(n){n[n.Copy=0]="Copy";n[n.InPlace=1]="InPlace"})(n.EditScopeKind||
(n.EditScopeKind={}));t=n.EditScopeKind,function(n){n[n.None=0]="None";n[n.Created=1]="Created";n[n.
Deleted=2]="Deleted";n[n.Updated=3]="Updated"}(n.EditState||(n.EditState={}));i=n.EditState,function(
n){n[n.AcceptClientChanges=0]="AcceptClientChanges";n[n.DiscardClientChanges=1]="DiscardClientChanges";
n[n.RefreshFromServerImplicitly=2]="RefreshFromServerImplicitly";n[n.ServerChangesAppliedManually=3]=
"ServerChangesAppliedManually";n[n.ServerDataReturned=4]="ServerDataReturned"}(n.AcceptEditScopeChangesAction||
(n.AcceptEditScopeChangesAction={}));r=n.AcceptEditScopeChangesAction})(t=n.Data||(n.Data={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){"use strict";function at(n,t){var
i=t&&t.kind;return i===1?new pt(n,t):new yt(n,t)}function vt(n){var t=st(n),i,r;t.length?(i=t.map(function(
n){var t={state:c[n.state]};return n.entityReference&&n.entityReference.type&&(t.entityType=n.entityReference.
type,t.entityId=n.entityReference.id),n.entityPath&&(t.pathFromRoot=n.entityPath),n.encodedCreatedEntities&&
(t.createdEntities=n.encodedCreatedEntities),n.entityUpdates&&(t.updates=n.entityUpdates),t}),r=JSON.
stringify(ko.toJS(i),function(n,t){return n&&t===undefined?"<undefined>":t},4),console.debug(r)):console.
debug("No edits")}function k(n){if(typeof n!="object")throw new Error("makeObservable only acccepts an object or array");
for(var t in n)n.hasOwnProperty(t)&&(n[t]instanceof Array?(k(n[t]),n[t]=ko.observableArray(n[t])):typeof
n[t]=="object"?k(n[t]):typeof n[t]!="function"&&(n[t]=ko.observable(n[t])))}function ut(n){var t=g.toSerializableObject(
n);return JSON.stringify(t)}function ft(n,t,i){if(i===0)return bt(n,t);var r=JSON.parse(n);return g.
fromSerializableObject(r)}function bt(n,t){var i=JSON.parse(n);return t||k(i),i}function d(n,t){var i=
a(n.type)&&a(t.type)&&a(n.id)&&a(t.id),r=n.type===t.type&&n.id===t.id;return i||r}function p(n){var t=
0,r,i;if(n.length===0)return t+"";for(i=0;i<n.length;i++)r=n.charCodeAt(i),t=(t<<5)-t+r|0;return t+""}
function et(n,t){return!(t&&t.properties&&t.properties[n]&&t.properties[n].trackEdits===!1)}function ot(
n,t){var i=t&&t.properties&&t.properties[n];return!i||i.persistEdits!==!1}function st(n,t){t===void 0&&
(t=!0);var i=n.version||0;return n.edits.map(function(n){var r={state:n.state,entityReference:n.entityReference};
switch(n.state){case 1:r.entityPath=n.entityPath;r.encodedCreatedEntities=n.createdEntities.map(function(
n){return ft(n,t,i)});break;case 3:r.entityUpdates=ft(n.entityUpdates,t,i)}return r})}var h=n.Data.Metadata,
c=n.Data.EditState,e=n.Internal.Data.Shared,i=n.Base.Utilities,g=n.Base.Utilities.Internal.Serialization,
kt=n.Data.AcceptEditScopeChangesAction,r=n.Internal.Data.Visitor,l=n.Internal.Data.CloneVisitor,nt=n.
Internal.Data.MergeVisitor,o=n.Base.ProxiedObservables,u=e.isArrayOrObservableArray,f=e.unwrapArrayOrObservableArray,
s=e.unwrapObjectPropertyValue,ht=e.isObservableObjectPropertyValue,tt=e.equalScalarValues,a=e.isNullOrUndefined,
w=h.typeIsEntityType,v=h.getPropertyTypeMetadata,y=new n.Base.Diagnostics.Log("MsPortalFx/Data/Data.EditScope"),
ct="aux-entityState",lt="aux-arrayState";t.createEditScope=at;t.logEditsToConsole=vt;t.nonPersistedPropertySentinel=
"EDITSCOPENOTPERSISTED";var it=function(){function e(t,r){var f=this,o,s,e;if(this._isDisposed=!1,this.
_initializing=ko.observable(!0),this._saving=ko.observable(!1),this._refreshing=ko.observable(!1),this.
_refreshInProgressCount=0,this._dirty=ko.observable(!1),this._edits=ko.observable([]),this.editsChanged=
ko.observable(),n.Base.ProxiedObservables.markNonSerializable(this),o=u(t)&&ko.utils.unwrapObservable(
t),s=o&&(o.length===0||i.isObject(o[0])),!(s||i.isObject(t)))throw new Error("EditScope input data must be an object or an array (observable or native) of entity objects.");
if(r=r||{},e=r.typeMetadata,e){if(r.typeName)throw new Error("For EditScopeOptions, supply one of 'typeName' and 'typeMetadata'.");
}else if(r.typeName&&(e=h.getTypeMetadata(r.typeName),!e))throw new Error("Can't locate type metadata for type '"+
r.typeName+"'.");e?e.entityType||(e=i.extend(i.clone(e),{entityType:!0})):e={entityType:!0};this._inconsistent=
ko.pureComputed(function(){return f._initializing()||f._refreshing()||f._saving()});this._getEditsVisitor=
this._createGetEditsVisitor(!1);this._getPersistableEditsVisitor=this._createGetEditsVisitor(!0);this.
_applyEditsVisitor=this._createApplyPersistedEditsVisitor();this._revertAllVisitor=this._createRevertAllVisitor(
);this._generateValueBasedEntityIdVisitor=this._createGenerateValueBasedEntityIdVisitor();this._mergeToEditableVisitor=
this._createMergeToEditableVisitor();this._getEditsReactor=ko.computed(function(){f._inconsistent()?
f._edits(null):(f._edits(f._getEdits(!1)),f.editsChanged.valueHasMutated())});this._entityStateKey=ct+
n.Util.newGuid();this._arrayStateKey=lt+n.Util.newGuid();this._hasMetadata=!!e;this._rootTypeMetadata=
e||{entityType:!0};this._root=this._createEditable(t,this._rootTypeMetadata);this._refreshCallback=r.
refresh||function(){throw new Error("This EditScope is not configured to support the 'refresh' method.");
};this._saveCallback=r.save||function(){throw new Error("This EditScope is not configured to support the 'save' method.");
};this._dirtyReactor=ko.computed(function(){f._inconsistent()||f._dirty(f._edits().length>0)});this.
_initializing(!1)}return e.prototype.dispose=function(){this._isDisposed||(this._isDisposed=!0,this.
_deregisterNestedEntities(this._root,this._rootTypeMetadata,!1),this._getEditsReactor.dispose(),this.
_dirtyReactor.dispose())},Object.defineProperty(e.prototype,"root",{get:function(){return this._assertNotDisposed(
),this._root},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dirty",{get:function(
){return this._dirty},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"refreshing",
{get:function(){return this._refreshing},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,
"saving",{get:function(){return this._saving},enumerable:!0,configurable:!0}),e.prototype.markForDelete=
function(n){this._assertNotDisposed();var i=this._getEntityState(n,!1),t=i.readOnlyEditState();t!==0&&
this._revertEntity(n,i,t);t!==1&&this._markAsDeletedOrUpdated(n,2)},e.prototype.create=function(n){this.
_assertNotDisposed();var t=this._getArrayEntityType(n,!1);return h.createEmptyObject(t)},e.prototype.
addCreated=function(n,t){var i,r;if(this._assertNotDisposed(),i=this._getEntityState(n,!1,!1),i)throw new
Error("Entity is already used in this EditScope.");r=this._getCreatedEntities(t,!1);this._addEntityStateToCreatedEntity(
n,t);r.push(n)},e.prototype.revert=function(n){this._assertNotDisposed();var t=this._getEntityState(
n,!1),i=t.readOnlyEditState();this._revertEntity(n,t,i);t.writableEditState(0)},e.prototype.revertAll=
function(){this._assertNotDisposed();this._revertAll()},e.prototype.getEditState=function(n){return this.
_assertNotDisposed(),this._getEditState(n,!1)},e.prototype.getOriginal=function(n){return this._assertNotDisposed(
),u(n)?this._getArrayState(n,!1).original:this._getEntityState(n,!1).original},e.prototype.getCreated=
function(n){return this._assertNotDisposed(),this._getCreatedEntities(n,!1)},e.prototype.mergeFromOriginal=
function(){this._assertNotDisposed();this._mergeFromOriginal()},e.prototype.refresh=function(){var n=
this;this._assertNotDisposed();this._refreshInProgressCount++;this._refreshing(!0);var r=this._refreshCallback(
this._getRefreshableData())||Q(undefined),t=Q.defer(),i=function(){--n._refreshInProgressCount<=0&&(
n._refreshInProgressCount=0,n._refreshing(!1))};return r.then(function(r){n._onRefreshComplete(r);n.
_isDisposed||(i(),t.resolve())}).catch(function(n){i();t.reject(n)}),t.promise},e.prototype.save=function(
){this.mergeFromOriginal();this.revertAll()},e.prototype.saveChanges=function(){var n=this,t;if(this.
_assertNotDisposed(),this._inconsistent())throw new Error("EditScope 'save' cannot be invoked while another 'saveChanges' or 'refresh' operation is in progress.");
if(t=this._edits(),t.length===0)return Q();this._saving(!0);var u=t.mapMany(function(n){switch(n.state)
{case 1:return n.createdEntities.map(function(t){return{editState:1,entityTypeName:n.typeMetadata.name,
entity:t}});case 3:case 2:return[{editState:n.state,entityTypeName:n.typeMetadata.name,entity:n.updatedOrDeletedEntity}]}
return[]}),f=this._saveCallback(this,u,this._getRefreshableData())||Q(undefined),i=Q.defer(),r=function(
){n._revertAll();n._isDisposed||(n._saving(!1),i.resolve())};return f.then(function(t){var i=t&&t.action||
0;switch(i){case 0:n._acceptChanges();break;case 2:return n.refresh().then(function(){r()});case 3:n.
_onRefreshComplete(null);break;case 4:if(!t.dataToMerge)throw new Error("'dataToMerge' should be non-null when 'AcceptEditScopeChangesAction.ServerDataReturned' is supplied");
n._onRefreshComplete(t.dataToMerge)}r()}).catch(function(t){n._isDisposed||(n._saving(!1),i.reject(t))}
),i.promise},e.prototype.getEdits=function(){if(this._inconsistent())throw new Error("EditScope edits are not available when 'refresh' or 'saveChanges' is in progress.");
var n=this._getEdits(!0).map(function(n){var t={state:n.state,entityReference:n.entityReference};switch(
t.state){case 1:t.entityPath=n.entityPath;t.createdEntities=n.encodedCreatedEntities.map(function(n)
{return ut(n)});break;case 3:t.entityUpdates=ut(n.entityUpdates)}return t});return{edits:n,version:1}}
,e.prototype.applyEdits=function(n){this._assertNotDisposed();var t=st(n,this._hasMetadata);return this.
_applyEdits(t,this._applyEditsVisitor,!1),!0},Object.defineProperty(e.prototype,"isDisposed",{get:function(
){return this._isDisposed},enumerable:!0,configurable:!0}),e.prototype._createEditable=function(){throw new
Error("Not implemented.");},e.prototype._mergeFromOriginal=function(){throw new Error("The 'mergeFromOriginal' method is not available on this style of EditScope.Use 'refresh' to update your EditScope's editable data (that is, editScope.root) with newly loaded data.");
},e.prototype._getRefreshableData=function(){throw new Error("Not implemented.");},e.prototype._onRefreshComplete=
function(){throw new Error("Not implemented.");},e.prototype._addEntityStateToEditableEntity=function(
n,t,i){var r=this._addEntityState(n);r.original=t;r.typeMetadata=i;r.entityUpdateReactor=this._createEntityUpdateReactor(
n,i)},e.prototype._addEntityStateToCreatedEntity=function(n,t){var i=this._addEntityState(n);i.containingArray=
t;i.writableEditState(1)},e.prototype._addEntityState=function(n){var t=ko.observable(0),i={writableEditState:
t,readOnlyEditState:ko.computed(function(){return t()})};return o.data(n,this._entityStateKey,i),i},
e.prototype._getEntityState=function(n,t,i){var r,u;if(i===void 0&&(i=!0),r=n&&o.data(n,this._entityStateKey),
!r&&i){u=t?"Encountered editable entity that is not known to this edit scope.  Such objects can be added via 'editScope.addCreated', 'editScope.refresh' and 'editScope.mergeFromOriginal'.":
"Value must be an object that is editable (reachable via editScope.root) and of some entity type.";throw new
Error(u);}return r},e.prototype._deregisterNestedEntities=function(n,t,i){var u=this,r;i===void 0&&(
i=!0);r=new b({getCreatedEntities:function(n){return u._getCreatedEntities(n,!0)}},this._createVisitorCallbacks(
function(){return r},{visitEntityArray:function(n,t,i){r.visitEntityArray(n,t,i);u._disposeArrayState(
n)},visitEntity:function(n,t,i){if(r.visitEntity(n,t,i),i){var f=u._getEditState(n,!0)();f!==0&&y.error(
"Edited entities are being disconnected from the EditScope, losing user-authored edits.")}u._disposeEntityState(
n)}}));r.visit(n,t,i)},e.prototype._addArrayState=function(n,t,i){var r={typeMetadata:i,original:t};
o.data(n,this._arrayStateKey,r)},e.prototype._createVisitorCallbacks=function(n,t,r){return t===void
0&&(t={}),r===void 0&&(r=!1),i.extend({shouldVisitObjectProperty:function(t,i,u){return et(t,u)&&n().
shouldVisitObjectProperty(t,i,u)&&(!r||!w(v(u,t)))}},t)},e.prototype._rootIsEntity=function(){return i.
isObject(this._root)},e.prototype._rootAsEntity=function(n){return n===void 0&&(n=!0),i.isObject(this.
_root)?n?this._root:this._getOriginalEntity(this._root):null},e.prototype._rootAsArray=function(n){return n===
void 0&&(n=!0),u?n?this._root:this._getOriginalArray(this._root):null},e.prototype._getOriginalEntity=
function(n){return this._getEntityState(n,!0).original},e.prototype._getOriginalArray=function(n){return this.
_getArrayState(n,!0).original},e.prototype._revertEntity=function(n,t,i){switch(i){case 3:this._mergeToEditableVisitor.
mergeEntity(t.original,n,t.typeMetadata);break;case 1:var r=this._getCreatedEntities(t.containingArray,
!0);r.splice(r().indexOf(n),1)}},e.prototype._getArrayState=function(n,t,i){var r,u;if(i===void 0&&(
i=!0),r=o.data(n,this._arrayStateKey),!r&&i){u=t?"Entity-typed array is not known to this EditScope.  Objects with such array-typed properties can be added via 'editScope.addCreated', 'editScope.refresh' and 'editScope.mergeFromOrignal'.":
"Array must be editable (reachable via editScope.root) and of some entity type.";throw new Error(u);
}return r},e.prototype._disposeArrayState=function(n){o.data(n,this._arrayStateKey,undefined)},e.prototype.
_disposeEntityState=function(n){var t=this._getEntityState(n,!0);t.entityUpdateReactor&&(t.entityUpdateReactor.
dispose(),t.entityUpdateReactor=null);o.data(n,this._entityStateKey,undefined)},e.prototype._markAsDeletedOrUpdated=
function(n,t){var r=this._getEntityState(n,!0),i=r.readOnlyEditState.peek();if(i!==0&&i!==t)throw new
Error("Entity is already in EditState '{0}'.".format(c[i]));r.writableEditState(t)},e.prototype._getArrayEntityType=
function(n,t){return this._getArrayState(n,t).typeMetadata},e.prototype._getCreatedEntities=function(
n,t){var r=this._getArrayState(n,t),i=r.createdEntities;return i||(i=r.createdEntities=ko.observableArray(
)),i},e.prototype._revertAll=function(){this._revertAllVisitor.visit(this._root,this._rootTypeMetadata)}
,e.prototype._createRevertAllVisitor=function(){var n=this,t=new b({getCreatedEntities:function(t){return n.
_getCreatedEntities(t,!0)}},this._createVisitorCallbacks(function(){return t},{visitEntityArray:function(
i,r){t.visitArray(i,r);for(var u=n._getCreatedEntities(i,!0);u().length>0;)n.revert(u()[0])},visitEntity:
function(i,r){t.visitEntity(i,r);n.revert(i)}}));return t},e.prototype._createEntityUpdateReactor=function(
n){var t=this;return ko.computed(function(){if(!t._inconsistent()){var r=t._getEntityState(n,!0),i=r.
readOnlyEditState.peek(),u=t._edits().some(function(t){return t.state===3&&t.updatedOrDeletedEntity===
n});if(u){if(i===0)t._markAsDeletedOrUpdated(n,3);else if(i!==3)throw new Error("Cannot move from '{0}' EditState to '{1}' EditState.".
format(c[i],c[3]));}else i===3&&r.writableEditState(0)}})},e.prototype._getEdits=function(n){var t=[
],i=this._rootIsEntity()?this._createEntityReference(this._rootAsEntity(),this._rootTypeMetadata,!1):
null,r=n?this._getPersistableEditsVisitor:this._getEditsVisitor;return r.visit(this._root,this._rootTypeMetadata,
{edits:t,entityReference:i,entityPath:""}),t},e.prototype._createGetEditsVisitor=function(n){var t=this,
u=new b({getCreatedEntities:function(n){return t._getCreatedEntities(n,!0)}},this._createVisitorCallbacks(
function(){return u},{visitEntityArray:function(n,i){t._getArrayState(n,!0);u.visitEntityArray(n,i)}
,visitEntity:function(n,i){t._getEntityState(n,!0);u.visitEntity(n,i)}})),e=this._createComputeEntityUpdatesVisitor(
n),f=function(n,t,i){return e.visit(n,t,i)},i=new r(null,this._createVisitorCallbacks(function(){return i}
,{shouldVisitObjectProperty:function(n,r,u){return et(n,u)&&i.shouldVisitObjectProperty(n,r,u)&&t._objectPropertyNestsEntities(
r,n,u)},visitArrayItem:function(n,t,r,u){i.visitArrayItem(n,t,r,{edits:u.edits,entityReference:u.entityReference,
entityPath:u.entityPath+"."+t})},visitEntityArray:function(n,r,e){var o;if(i.visitArray(n,r,e),o=t._getCreatedEntities(
n,!0),o().length){var s=e.edits,h=e.entityReference,c=e.entityPath;s.push({state:1,entityReference:h,
entityPath:c,encodedCreatedEntities:o().map(function(n){return f(n,r)}),typeMetadata:r,createdEntities:
o()});o().forEach(function(n){u.visit(n,r)})}},visitObject:function(n,r,u){var f=w(r),e=u.edits,o=u.
entityReference,s=u.entityPath;i.getObjectPropertiesToVisit(n,r).forEach(function(u){i.visitObjectPropertyValueDispatch(
u,n,r,{edits:e,entityReference:f?t._createEntityReference(n,r,!1):o,entityPath:f?u:s+"."+u})})},visitEntity:
function(n,r,u){var e=u.edits,s=t._getEditState(n,!0)(),o=f(n,r,t._getOriginalEntity(n));Object.keys(
o).length>0?e.push({state:3,entityReference:t._createEntityReference(n,r,!1),entityUpdates:o,typeMetadata:
r,updatedOrDeletedEntity:n}):s===2&&e.push({state:2,entityReference:t._createEntityReference(n,r,!1),
typeMetadata:r,updatedOrDeletedEntity:n});i.visitEntity(n,r,u)}}));return i},e.prototype._createApplyPersistedEditsVisitor=
function(){var n=this;return this._createApplyEditsVisitor(!1,{applyCreate:function(t,i,r){n._removeNonPersistedPropertySentinels(
i,r,!0);n.addCreated(i,t)},applyUpdate:function(t,i,r){n._removeNonPersistedPropertySentinels(i,r,!1);
n._applyEntityUpdates(t,i,r)},applyDelete:function(t,i){n._markAsDeletedOrUpdated(i,2)}})},e.prototype.
_createApplyEditsVisitor=function(n,t){var u=this,i=new r(null,this._createVisitorCallbacks(function(
){return i},{visitArrayItem:function(n,t,r,u){i.visitArrayItem(n,t,r,{edits:u.edits,entityReference:
u.entityReference,entityPath:u.entityPath+"."+t})},visitEntityArray:function(r,f,e){var o,h,s,y;for(
i.visitArray(r,f,e),o=e.edits,h=ko.utils.unwrapObservable(r),s=h.length-1;s>=0;s--){var l=h[s],p=u._createEntityReference(
l,f,n),a=o.firstIndex(function(n){return n.state===2&&d(p,n.entityReference)});a>=0&&(o.splice(a,1),
t.applyDelete(r,l))}var v=e.entityReference,w=e.entityPath,c=o.firstIndex(function(n){if(n.state===1)
if(v){if(n.entityReference&&d(v,n.entityReference)&&w===n.entityPath)return!0}else if(!n.entityReference)
return!0});c>=0&&(y=o[c],o.splice(c,1),y.encodedCreatedEntities.forEach(function(n){t.applyCreate(r,
n,f)}))},visitObject:function(r,f,e){var o=e.edits,h=e.entityReference,a=e.entityPath,c=w(f),s,l;c&&
(h=u._createEntityReference(r,f,n));i.getObjectPropertiesToVisit(r,f).forEach(function(n){i.visitObjectPropertyValueDispatch(
n,r,f,{edits:o,entityReference:h,entityPath:c?n:a+"."+n})});c&&(s=o.firstIndex(function(n){return n.
state===3&&d(h,n.entityReference)}),s>=0&&(l=o[s],o.splice(s,1),t.applyUpdate(r,l.entityUpdates,f)))}
}));return i},e.prototype._acceptChanges=function(){var n=this._getEdits(!1);this._applyEdits(n.slice(
0),this._createAcceptChangesVisitor(!0),!0);this._applyEdits(n,this._createAcceptChangesVisitor(!1),
!1)},e.prototype._createAcceptChangesVisitor=function(n){var t=this;return this._createApplyEditsVisitor(
n,{applyCreate:function(i,r,u){if(!n){var f=i,e=t._createEditable(r,u),o=function(n,t){if(n.push)n.push(
t);else{var i=n,r=i().slice(0);r.push(t);i(r)}};o(f,e);o(t._getOriginalArray(f),t._getOriginalEntity(
e))}},applyUpdate:function(i,r,u){n&&t._applyEntityUpdates(i,r,u)},applyDelete:function(n,t){var u=ko.
utils.unwrapObservable(n).indexOf(t),i,r;n.splice?n.splice(u,1):(i=n,r=i().slice(0),r.splice(u,1),i(
r))}})},e.prototype._applyEntityUpdates=function(n,t,i){this._mergeToEditableVisitor.mergeEntity(t,n,
i)},e.prototype._removeNonPersistedPropertySentinels=function(n,i,u){var e=new r(null,{visitObjectPropertyValue:
function(n,i,r){var f=s(i,n);f===t.nonPersistedPropertySentinel?ko.isObservable(i[n])?i[n](undefined):
u?i[n]=undefined:delete i[n]:e.visitObjectPropertyValue(n,i,r)},visitArray:function(n,i){var r=f(n);
r.length===1&&r[0]===t.nonPersistedPropertySentinel?r.splice(0,1):e.visitArray(n,i)}});e.visit(n,i)}
,e.prototype._generateValueBasedEntityId=function(n,t){return this._generateValueBasedEntityIdVisitor.
visit(n,t)},e.prototype._createGenerateValueBasedEntityIdVisitor=function(){var n=new r(null,this._createVisitorCallbacks(
function(){return n},{visitArray:function(t,i){var r="";return f(t).forEach(function(t,u){r+=n.visitArrayItem(
t,u,i)}),p(r)},visitObject:function(t,i){var u=n.getObjectPropertiesToVisit(t,i).sort(),r="";return u.
forEach(function(u){r+=n.visitObjectPropertyValueDispatch(u,t,i)}),p(r)},visitScalar:function(n){return p(
""+n)},visitDate:function(n){return p(""+n)}},!0));return n},e.prototype._createEntityReference=function(
t,i,r){var u,o,f,s,e;if(r===void 0&&(r=!1),o=this._rootAsEntity(!r)===t,o)u={type:undefined,id:undefined}
else{if(f=r?t:this._getOriginalEntity(t),!i||!i.name&&i!==this._rootTypeMetadata)throw new Error("Can only serialize/deserialize EditScope edits involving named types.");
if(s=n.Data.Metadata.typeHasId(i)?n.Data.Metadata.getItemId(f,i):this._generateValueBasedEntityId(f,
i),e=i.name||null,!e&&i!==this._rootTypeMetadata)throw new Error("Type metadata must have a name.  This is required to serialize EditScope edits.");
u={type:e,id:s}}return u},e.prototype._createComputeEntityUpdatesVisitor=function(n){var c=this,o=new
l(null,this._createVisitorCallbacks(function(){return o},{visitObject:function(i,r){var f={};return o.
getObjectPropertiesToVisit(i,r).forEach(function(e){var h=o.visit(s(i,e),v(r,e)),c,l,a;n&&(ot(e,r)||
(h=t.nonPersistedPropertySentinel));c=i[e];ht(i,e)?l=ko.observable(h):u(c)&&h===t.nonPersistedPropertySentinel?
(a=[t.nonPersistedPropertySentinel],l=ko.isObservable(c)?!c.splice?ko.observable(a):ko.observableArray(
a):a):l=h;f[e]=l}),f}},!0)),e={},h=new r(null,this._createVisitorCallbacks(function(){return h},{visitObject:
function(r,u,f){if(i.isObject(f)){var l;return c._enumeratePropertiesForUpdates(r,f,h,u,function(i){
var o=h.visit(s(r,i),v(u,i),s(f,i));o!==e&&(l||(l={}),n&&(ot(i,u)||(o=t.nonPersistedPropertySentinel)),
l[i]=o)}),l||e}return o.visit(r,u)},visitArray:function(n,t,i){var r=!1,s;return u(i)?f(n).length!==
f(i).length?r=!0:(s=f(i),r=f(n).some(function(n,i){return h.visitArrayItem(n,i,t,s[i])!==e})):r=!0,r?
o.visit(f(n),t):e},visitScalar:function(n,t){return tt(n,t)?e:n},visitDate:function(n,t){return tt(n,
t)?e:n}},!0));return h},e.prototype._enumeratePropertiesForUpdates=function(n,t,i,r,u){i.getObjectPropertiesToVisit(
n,r).forEach(function(n){t.hasOwnProperty(n)?u(n):y.warning("Encountered a property '"+n+"' on an editable object that is not present on the original object.  Updates to the property value are not being persisted along with other edits.")}
);i.getObjectPropertiesToVisit(t,r).forEach(function(t){n.hasOwnProperty(t)||y.warning("Encountered a property '"+
t+"' on an original object that is not present on the editable object.  Updates to the property value are not being persisted along with other edits.")}
)},e.prototype._assertNotDisposed=function(){if(this._isDisposed){y.error("EditScope has been disposed.");
throw new Error("EditScope has been disposed.");}},e.prototype._objectPropertyNestsEntities=function(
n,t,r){var u=n[t],f;return(ko.isObservable(u)&&(u=u.peek()),!(Array.isArray(u)||i.isObject(u)))?!1:(
f=v(r,t),!f)?!1:!0},e.prototype._getEditState=function(n,t){return this._getEntityState(n,t).readOnlyEditState}
,e.prototype._createMergeToEditableVisitor=function(){var n=function(){throw new Error("Nested entities are not expected here.");
},t=new r(null,this._createVisitorCallbacks(function(){return t},{visitEntityTypedObjectPropertyValue:
function(){n()}})),i=new l(null,this._createVisitorCallbacks(function(){return i},{visitEntity:function(
){n()},visitEntityArray:function(){n()}})),u=new wt({onDetach:function(n,i){t.visit(n,i)},clone:function(
n,t){return i.clone(n,t)}},this._createVisitorCallbacks(function(){return u}));return u},e.prototype.
_applyEdits=function(n,t,i){var r=this._rootIsEntity()?this._createEntityReference(this._rootAsEntity(
),this._rootTypeMetadata,i):null,u=i?this.getOriginal(this._root):this._root;t.visit(u,this._rootTypeMetadata,
{edits:n,entityReference:r,entityPath:""})},e}(),yt=function(t){function i(n,i){this._cloneInputToEditableVisitor=
this._createCloneVisitor();t.call(this,n,i)}return __extends(i,t),i.prototype._createEditable=function(
n,t){return this._cloneInputToEditableVisitor.clone(n,t)},i.prototype._mergeFromOriginal=function(n)
{n===void 0&&(n=!0);var t=this._rootTypeMetadata,i=this._createMergeEntitiesVisitor(n);this._rootIsEntity(
)?i.mergeEntity(this._rootAsEntity(!1),this._rootAsEntity(),t):i.mergeEntityArray(this._rootAsArray(
!1),this._rootAsArray(),t)},i.prototype._getRefreshableData=function(){return this.getOriginal(this.
_root)},i.prototype._onRefreshComplete=function(t){t&&n.Data.DataSet.mergeWithoutAtomization(t,this.
getOriginal(this._root),{type:this._rootTypeMetadata.name});this._mergeFromOriginal(!1)},i.prototype.
_createCloneVisitor=function(){var t=this,n=new l(null,this._createVisitorCallbacks(function(){return n}
,{visitEntityArray:function(i,r){var u=n.visitEntityArray(i,r);return t._addArrayState(u,i,r),u},visitEntity:
function(i,r){var u=n.visitEntity(i,r);return t._addEntityStateToEditableEntity(u,i,r),u}}));return n}
,i.prototype._createMergeEntitiesVisitor=function(n){var t=this,i=new rt({onDetach:function(i,r){t._deregisterNestedEntities(
i,r,n)},clone:function(n,i){return t._cloneInputToEditableVisitor.clone(n,i)},getSourceEntity:function(
n){return t._getOriginalEntity(n)},isSourceForTargetEntity:function(n,i){return t._getOriginalEntity(
i)===n}},this._createVisitorCallbacks(function(){return i}));return i},i}(it),pt=function(t){function i(
n,i){var r=this,u;this._cloneInputToOriginalVisitor=this._createCloneVisitor();u=this._mergeToOriginalVisitor=
new rt({onDetach:function(){},clone:function(n,t){return r._cloneInputToOriginalVisitor.clone(n,t)},
getSourceEntity:function(n,t){return t.first(function(t){var i=r._getEntityState(t,!0,!1);return i&&
i.original===n})},isSourceForTargetEntity:function(n,t){var i=r._getEntityState(n,!0,!1);return i&&i.
original===t}},this._createVisitorCallbacks(function(){return u}));t.call(this,n,i)}return __extends(
i,t),i.prototype._createEditable=function(n,t){return this._cloneInputToOriginalVisitor.clone(n,t),n}
,i.prototype._getRefreshableData=function(){return this._root},i.prototype._onRefreshComplete=function(
t){t&&n.Data.DataSet.mergeWithoutAtomization(t,this._root,{type:this._rootTypeMetadata.name});this._mergeToOriginal(
)},i.prototype._createCloneVisitor=function(){var t=this,n=new l(null,this._createVisitorCallbacks(function(
){return n},{visitEntityArray:function(i,r,u){var f=n.visitEntityArray(i,r,u);return t._addArrayState(
i,f,r),f},visitEntity:function(i,r,u){var f=n.visitEntity(i,r,u);return t._addEntityStateToEditableEntity(
i,f,r),f}}));return n},i.prototype._mergeToOriginal=function(){var n=this._rootTypeMetadata;this._rootIsEntity(
)?this._mergeToOriginalVisitor.mergeEntity(this._rootAsEntity(),this._rootAsEntity(!1),n):this._mergeToOriginalVisitor.
mergeEntityArray(this._rootAsArray(),this._rootAsArray(!1),n)},i}(it),b=function(n){function t(t,i){
this._getCreatedEntities=t&&t.getCreatedEntities;n.call(this,t,i)}return __extends(t,n),t.prototype.
visitEntityArray=function(t,i,r){var u=this,f=this._getCreatedEntities(t);return f().forEach(function(
n){u._callbacks.visitEntity(n,i,r)}),n.prototype.visitEntityArray.call(this,t,i,r)},t}(r),wt=function(
n){function t(t,i){n.call(this,t,i)}return __extends(t,n),t.prototype.mergeEntity=function(t,i,r){n.
prototype.merge.call(this,t,i,r)},t.prototype.visitEntityTypedObjectPropertyValue=function(){return!0}
,t}(nt),rt=function(n){function t(t,i){this._getSourceEntity=t.getSourceEntity;this._isSourceForTargetEntity=
t.isSourceForTargetEntity;n.call(this,t,i)}return __extends(t,n),t.prototype.mergeEntity=function(t,
i,r){n.prototype.merge.call(this,t,i,r)},t.prototype.mergeEntityArray=function(t,i,r){n.prototype.merge.
call(this,t,i,r)},t.prototype.visitEntityTypedObjectPropertyValue=function(n,t,r,f){var e=s(t,n),o=s(
f,n),h=!1;return u(e)?u(o)&&(h=this._callbacks.visitEntityArray(e,r,o)):i.isObject(e)&&i.isObject(o)&&
this._isSourceForTargetEntity(e,o)&&(h=this._callbacks.visitEntity(e,r,o)),h},t.prototype.visitEntityArray=
function(n,t,i){var r=this;return this._mergeArray(n,t,i,{getEdits:function(n,t,i){var u=function(t)
{return r._getSourceEntity(t,n)},e=t.map(function(n){return u(n)}),f=ko.utils.compareArrays(e,n,{sparse:
i});return f.forEach(function(n){if(n.status==="deleted"||n.status==="retained"){var i=n.value;n.value=
t.first(function(n){return u(n)===i})}}),f},getSourceItem:function(n,t){return r._getSourceEntity(n,
t)}})},t}(nt)})(i=t.Data||(t.Data={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})
),function(n){var t;(function(t){var i;(function(t){"use strict";function i(t){return new n.Internal.
Data.EditScopeCache(t)}function r(t){return new n.Internal.Data.EditScopeCacheOld(t)}t.createNew=i;t.
create=r})(i=t.EditScopeCache||(t.EditScopeCache={}))})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(){"use strict"})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={})
),function(n){var t;(function(){"use strict"})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={}));
__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){"use strict";
var i=n.Internal.Data.Shared,r=function(n){function t(){n.apply(this,arguments)}return __extends(t,n),
Object.defineProperty(t.prototype,"editScope",{get:function(){return this._loadedCacheEntry},enumerable:
!0,configurable:!0}),t.prototype.fetchForNewData=function(n){return this.fetch({editScopeId:n,params:
undefined})},t.prototype.fetchForExistingData=function(n,t){return this.fetch({editScopeId:n,params:
i.isNullOrUndefined(t)?null:t})},t}(n.Internal.Data.ObjectView);t.EditScopeView=r})(t=n.Data||(n.Data=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){"use strict";var i=n.Base.Utilities,r=function(n){function r(t){n.call(this,i.
clone(t))}return __extends(r,n),r.prototype.createView=function(n){return new t.EntityView(this,n)},
r}(n.Internal.Data.DataCache);t.EntityCache=r})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={}));
__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){"use strict";
var i=function(n){function t(t,i){var r=this,u;n.call(this,t,i);this._item=ko.observable(null);u=ko.
computed(function(){var t=r._loadedCacheEntry(),n,i;if(t)if(n=t.data,ko.isObservable(n))i=n(),r._item(
i);else throw new Error("DataSets used with QueryView must contain observable data.");else r._item(null)}
);i.registerForDispose(u)}return __extends(t,n),Object.defineProperty(t.prototype,"item",{get:function(
){return this._item},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(
){return this._item()},enumerable:!0,configurable:!0}),t}(n.Internal.Data.DataView);t.EntityView=i})
(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){"use strict";function w(
n,t){return i[n]=new b(n,t)}function l(){return+new Date}function e(n,t){var i=h[n];return i?i[t]:(i=
p,i?i[t]:c[t])}function g(n){var t=c.fastPollingInterval;return n=r.clone(n),(isNaN(n.pollingInterval)||
n.pollingInterval<t)&&(n.pollingInterval=t),(isNaN(n.fastPollingInterval)||n.fastPollingInterval<t)&&
(n.fastPollingInterval=t),(isNaN(n.slowPollingInterval)||n.slowPollingInterval<t)&&(n.slowPollingInterval=
t),n.fastPollingInterval>n.pollingInterval&&(n.pollingInterval=n.fastPollingInterval),n.pollingInterval>
n.slowPollingInterval&&(n.slowPollingInterval=n.pollingInterval),n}var r=n.Base.Utilities,o=n.Helpers,
v=window,y=new n.Base.Diagnostics.Log(""),i={},k={getFetchParameters:function(n,t,i){return i?{headers:
t&&t.ajaxHeaders,data:t&&t.ajaxData}:null},fetchData:function(t,i,r,u,f){var e=null;return r&&(e=typeof
r=="string"?r:JSON.stringify(r)),n.Base.Net.ajax({uri:i,type:f||"POST",dataType:"json",cache:!1,headers:
u,traditional:!0,contentType:"application/json",data:e})},processResult:[t.DataProvider.DataContractJsonSerializer.
processResult]},s,p,h={},c={fastPollingInterval:1e4,pollingInterval:6e4,slowPollingInterval:3e5},u={
slow:"slowPollingInterval",normal:"pollingInterval",fast:"fastPollingInterval"},f=0,d,b,a;(function(
n){n[n.Never=1]="Never";n[n.Normal=2]="Normal"})(t.PollFrequency||(t.PollFrequency={}));d=t.PollFrequency;
b=function(){function t(t,i){this._pollFrequency=2;this._fastPollingRefCount=0;this._pollCount=0;this.
_merged=!1;this._name=t;var r;i&&(this._snapshotFetchOptions(i),r=i.type);this.dataSet=new n.Data.DataSet(
r||null,i.dataSetLifetime,i.atomizationOptions)}return Object.defineProperty(t.prototype,"hasRequestInFlight",
{get:function(){return!!this._currentFetchDeferred},enumerable:!0,configurable:!0}),Object.defineProperty(
t.prototype,"lastFetchState",{get:function(){return this._lastFetchState},enumerable:!0,configurable:
!0}),t.prototype.getCachedOrInFlightData=function(t){var f=t.uri,e=t.ajaxData,s=t.ajaxHeaders,i,u,c=
n.Base.Diagnostics,h=t.httpMethod||null;return this._lastCompletedFetchStart&&f===this._uri&&h===this.
_httpMethod&&r.deepEquals(e,this._ajaxData)&&r.deepEquals(s,this._ajaxHeaders)?!this._expiry||this._expiry>
l()?(t.forceCacheRefresh&&this.debounceServerFetch(!0,!0),i=o.Deferred().resolve(this._name,this.dataSet)):
this._currentFetchDeferred&&!t.forceCacheRefresh?i=this._currentFetchDeferred:(y.verbose("Cached data expired: '"+
this._name+"'"),u=!0):(this._tryExecuteDebouncedServerFetch(),this._snapshotFetchOptions(t)),{promise:
i?i.promise():null,fetchingSameData:u}},t.prototype.forceRefresh=function(){if(!this._uri)throw new Error(
"Complete an initial MsPortalFx.Data.Loader.getData, supplying a URI, before using 'forceRefresh'.");
return n.Base.Net.invalidateCacheHeader(this._ajaxHeaders),this._tryExecuteDebouncedServerFetch(!0)?
this._currentFetchDeferred.promise():this.debounceServerFetch(!0,!0)},t.prototype.debounceServerFetch=
function(t,i){if(!this._debouncedFetchFunction){this._currentFetchDeferred=o.Deferred();this._pollingTask&&
n.Base.Scheduler.deleteTask(this._pollingTask);var r=this;this._debouncedFetchFunction=function(){var
n=r._debouncedFetchFunction.isForcedCacheRefresh,t=r._debouncedFetchFunction.fetchingSameData;r._debouncedFetchFunction=
null;r._fetchData(t,!0,n)};this._debouncedFetchFunction.timeoutId=v.setTimeout(this._debouncedFetchFunction,
0);this._debouncedFetchFunction.isForcedCacheRefresh=!1;this._debouncedFetchFunction.fetchingSameData=
!0}return this._debouncedFetchFunction.isForcedCacheRefresh|=i?1:0,this._debouncedFetchFunction.fetchingSameData&=
t?1:0,this._currentFetchDeferred.promise()},t.prototype.setFastPolling=function(n){n?this._fastPollingRefCount++:
this._fastPollingRefCount>0&&this._fastPollingRefCount--},t.prototype.dispose=function(){this._isDisposed=
!0;delete h[this._name];this._pollingTask&&n.Base.Scheduler.deleteTask(this._pollingTask)},t.prototype.
_tryExecuteDebouncedServerFetch=function(n){return this._debouncedFetchFunction?(this._debouncedFetchFunction.
isForcedCacheRefresh|=n?1:0,this._debouncedFetchFunction.fetchingSameData&=n?1:0,v.clearTimeout(this.
_debouncedFetchFunction.timeoutId),this._debouncedFetchFunction(),!0):!1},t.prototype._snapshotFetchOptions=
function(n){this._uri=n.uri;this._httpMethod=n.httpMethod||null;this._ajaxData=n.ajaxData;this._ajaxHeaders=
n.ajaxHeaders;this._loaderOptions=n.loaderOptions;this._preserveNewItemsOrdering=n.preserveNewItemsOrdering;
this._pollFrequency=n.pollFrequency||2;var t=n.fetchStartListener;this._fetchStartListener=t?function(
n){t.fire(n)}:r.noop},t.prototype._fetchData=function(t,i,u){var e=this,o=this._name,b=this._getLoaderOptionFunction(
"getFetchParameters"),k=this._getLoaderOptionFunction("fetchData"),s=this._getLoaderOptionFunction("processResult"),
c,v=l(),h=this._currentFetchDeferred,p=this._lastFetchState,nt=n.Base.Diagnostics,w=n.Base.Diagnostics.
Telemetry,d=w.startTrace({source:"Data",action:"Fetch",name:this._name,data:this._uri}),g=this.dataSet,
a;u&&(this._lastForcedFetchStart=v);this._fetchStartListener({dataSetName:o,promise:h.promise(),isClientInitiated:
i});c=b(o,p,t)||{};a=r.clone(this._ajaxData,!1,!0)||null;c.data&&(a=r.extend(a,c.data));k(o,this._uri,
a,r.extend(r.clone(this._ajaxHeaders),c.headers),this._httpMethod).then(function(r){var a=!0,u=r&&r.
cachedAjax?r:{cachedAjax:!1,modified:!0,data:r,cacheTagValue:null},b={data:u.data},c,k,nt;if(u.cacheTagValue&&
(e._ajaxHeaders=n.Base.Net.setCacheHeader(e._ajaxHeaders,u.cacheTagValue)),!e._isDisposed){if(Array.
isArray(s)||(s=[s]),u.modified)for(k=s.length,c=0;c<k;++c)if(!s[c](o,b,p,t,g.type)){a=!1;break}nt=!i&&
f>0;e._onFetchCompleted(i,!0,h);try{u.modified&&a&&!nt&&e._shouldAcceptFetchResult(v)&&e._acceptFetchResult(
b,v)}catch(l){y.error("Data merge failed for data set '"+o+"'. The error message was: "+(l.message||
l.Message||l))}finally{w.completeTrace(d);h.resolve(o,e.dataSet)}}},function(t){if(!e._isDisposed){e.
_onFetchCompleted(i,!1,h);var r;if(t)switch(t.status){case 401:case 403:r=new n.FxError.UnauthorizedDataError(
o,t);break;default:r=new n.FxError.FetchDataError(o,t)}else r=new n.FxError.FetchDataError(o);h.reject(
r)}})},t.prototype._onFetchCompleted=function(n,t,i){var r=this,f=this._pollFrequency!==1;n&&t&&f&&!this.
_pollingTask&&(this._pollingTask={name:"poll data set: "+this._name,scheduledTask:function(){r._pollData(
)},recurring:!1,isAsync:!0,delayInMs:e(this._name,u.fast),silent:!0});i===this._currentFetchDeferred&&
(this._currentFetchDeferred=null,this._reschedulePolling(!0))},t.prototype._reschedulePolling=function(
t){this._pollingTask&&(t&&(this._pollCount=0),n.Base.Scheduler.scheduleTask(this._pollingTask))},t.prototype.
_shouldAcceptFetchResult=function(n){if(this._lastCompletedFetchStart){var t=n>this._lastCompletedFetchStart,
i=this._lastForcedFetchStart&&n<this._lastForcedFetchStart;return t&&!i}return!0},t.prototype._acceptFetchResult=
function(n,t){this.dataSet.merge(n.data,{type:n.type,fetchStart:t,preserveNewItemsOrdering:this._preserveNewItemsOrdering});
this.dataSet.navigationMetadata(n.navigationMetadata||null);this._lastCompletedFetchStart=t;this._lastFetchState=
n.fetchState;this._merged=!0;this._expiry=l()+e(this._name,u.slow)*3;$(this.dataSet).trigger("mergeComplete")}
,t.prototype._determinePollingInterval=function(){return u.normal},t.prototype._pollData=function(){
var t,i,r,s,h,c=n.Base.Diagnostics;this._isDisposed||(this._currentFetchDeferred||f||(this._pollCount++,
this._isFastPollNeeded()?(t=!0,h="Client side locking or mutation flags detected",i=u.fast):(t=!0,h=
"Poll is needed",i=this._determinePollingInterval()),i&&(r=e(this._name,i)),t&&(s=Math.ceil(r/e(this.
_name,u.fast)),t=this._pollCount%s==0)),t?(this._currentFetchDeferred=o.Deferred(),this._fetchData(!0)):
this._reschedulePolling())},t.prototype._isFastPollNeeded=function(){return this._fastPollingRefCount>
0||this.dataSet.hasUnmergedClientChanges()},t.prototype._getLoaderOptionFunction=function(n){var t;return this.
_loaderOptions&&(t=this._loaderOptions[n]),!t&&s&&(t=s[n]),t||k[n]},t}();a=function(){function n(){}
return n.getData=function(n,t){var u,f,o,e;return r.isObject(n)&&(t=n,n=t.dataSetName||t.uri),u=i[n],
u?(e=u.getCachedOrInFlightData(t),f=e.promise,o=e.fetchingSameData):u=w(n,t),f||(f=u.debounceServerFetch(
o,t.forceCacheRefresh)),f},n.forceRefresh=function(n){var t=i[n];if(t)return t.forceRefresh();throw new
Error("Unknown data set name.");},n.getDataSet=function(n,t,r,u,f){var e=i[n],s=!1,h={initialData:r,
dataSetLifetime:u,atomizationOptions:f,uri:undefined},o;if(typeof t=="boolean")s=t;else if(typeof t==
"string")s=!0,h.type=t;else if(typeof t!="undefined")throw new Error("Erroneous getDataSet parameter.");
if(e&&u&&u!==e.dataSet.lifetime)throw new Error("Cannot modify data set lifetime once data set has been created.");
return!e&&s&&(e=w(n,h)),o=e?e.dataSet:null,o&&r&&o.merge(r),o},n.hasRequestInFlight=function(n){var t=
i[n];return t&&t.hasRequestInFlight},n.disposeDataSet=function(n){var t=i[n];t&&(t.dispose(),delete i[
n])},n.setFastPolling=function(n,t){var r=i[n];if(r)r.setFastPolling(t);else throw new Error("Data set has not yet been accessed.");
},n.pausePolling=function(){f++},n.resumePolling=function(){f>0&&f--},n.setDefaultLoaderOptions=function(
n){s=n},n.setPollingIntervals=function(n,t){r.isObject(n)&&(t=n,n=null);t=g(t);n?h[n]=t:p=t},n._internal=
{setDefaultPollingIntervals:function(n){c=n}},n}();t.Loader=a,function(n){var t;(function(n){function t(
){Object.getOwnPropertyNames(i).forEach(function(n){var t=i[n];t&&(t.dispose(),delete i[n])})}n.disposeAllCachedDataSetsForTests=
t})(t=n.Internal||(n.Internal={}))}(a=t.Loader||(t.Loader={}))})(t=n.Data||(n.Data={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){"use strict";(function(n){n[n.Add=0]="Add";n[n.Update=
1]="Update"})(n.EditKind||(n.EditKind={}));var t=n.EditKind})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(t){"use strict";var i=0,r=function(){function t(t){this._referrerUniqueId=
0;var r=t.onEntryDisposed;this._referrerPropertyName="_objectCache_"+ ++i;this._serializeKey=t.serializeKey;
this._supplyValue=t.supplyValue;this._entries=new n.Internal.Data.RefCountCache({evictionDelay:t.evictionDelay,
onEntryDisposed:r?function(n){n.lifetime&&n.lifetime.dispose();r(n.value,n.key)}:null})}return t.prototype.
getValue=function(t,i){var r=this,u=this._serializeKey(t),f=i?this._getOrCreateReferrerId(i):null;return this.
_entries.getEntry(u,f,function(){var i=new n.Internal.Base.TriggerableLifetimeManager;return{key:t,value:
r._supplyValue(t,i),lifetime:i}}).value},t.prototype.insertValueIfNotPresent=function(n,t,i){var r=this.
_serializeKey(n),u=this._getOrCreateReferrerId(i);this._entries.getEntry(r,u,function(){return{key:n,
value:t,lifetime:null}})},t.prototype.hasEntry=function(n){var t=this._serializeKey(n);return this._entries.
hasEntry(t)},t.prototype.dissociateEntry=function(n,t){var r=this._serializeKey(n),i=this._getOrCreateReferrerId(
t);i&&this._entries.dissociateEntry(r,i)},t.prototype.immediatelyEvictEntry=function(n){var t=this._serializeKey(
n);this._entries.immediatelyEvictEntry(t)},t.prototype.forEachEntry=function(n){this._entries.forEachEntry(
function(t,i){n(i.key,i.value)})},t.prototype.dispose=function(){this._entries.dispose()},t.prototype.
_getOrCreateReferrerId=function(n){var r=this,t=n,i=t[this._referrerPropertyName];return this._referrerPropertyName
in t||(t[this._referrerPropertyName]=i="referrer"+ ++this._referrerUniqueId,n.registerForDispose({dispose:
function(){delete t[r._referrerPropertyName];r._entries.disposeReferrer(i);i=null}})),i},t}();t.ObjectCache=
r})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict"}
)(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict"})(
t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(t){"use strict";var i=n.Base.Utilities,r=function(n){function r(t)
{n.call(this,t);this._navigationOptions=t.navigation?i.clone(t.navigation):null}return __extends(r,n),
r.prototype.createView=function(n){return new t.QueryView(this,n)},r.prototype.createNavigator=function(
n){return this.createNavigatorWithOptions(n,null)},r.prototype.createNavigatorWithOptions=function(n,
i){var f=this,u,r,e;if(this._navigationOptions)return u={},r=this.createView(n),e=i&&i.createMapping?
i.createMapping(n,r.items):r.items,this._navigationOptions.loadBySkipTake&&(u.loadBySkipTake=function(
n,t,i,u,e,o){return f._navigationOptions.loadBySkipTake(r,t,i,u,e,o)}),this._navigationOptions.loadByContinuationToken&&
(u.loadByContinuationToken=function(n,t,i,u,e){return f._navigationOptions.loadByContinuationToken(r,
t,i,u,e)}),new t.RemoteDataNavigator(n,e,r.metadata,u);throw new Error("Cannot create a DataNavigator, because the QueryCache has no navigation options configured.");
},Object.defineProperty(r.prototype,"navigationOptions",{get:function(){return this._navigationOptions}
,enumerable:!0,configurable:!0}),r}(n.Internal.Data.DataCache);t.QueryCache=r})(t=n.Data||(n.Data={})
)}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){"use strict";var i=function(n){function t(t,i){var r=this,u,f;n.call(this,t,i);
this._items=ko.observableArray();this._metadata=ko.observable(null);this._lifetime=i;u=ko.computed(function(
){var i=r._loadedCacheEntry(),n,t;if(i)if(n=i.data,ko.isObservable(n)){if(t=n(),!(t instanceof Array)
)throw new Error("DataSets used with QueryView must contain arrays.");r._items(t)}else throw new Error(
"DataSets used with QueryView must contain observable data.");else r._items([])});f=ko.computed(function(
){var n=r._loadedCacheEntry();n?r._metadata(n.navigationMetadata()||null):r._metadata(null)});i.registerForDispose(
u);i.registerForDispose(f);i.registerForDispose({dispose:function(){r._lifetime=null}})}return __extends(
t,n),Object.defineProperty(t.prototype,"items",{get:function(){return this._items},enumerable:!0,configurable:
!0}),Object.defineProperty(t.prototype,"metadata",{get:function(){return this._metadata},enumerable:
!0,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return this._items},enumerable:
!0,configurable:!0}),t}(n.Internal.Data.DataView);t.QueryView=i})(t=n.Data||(n.Data={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){"use strict";function t(n){return function(t){switch(
typeof t){case"string":case"number":return n.format({id:t});default:return n.format(t)}}}n.uriFormatter=
t})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){"use strict";var i=function(){function n(n){this._errorData=n}
return Object.defineProperty(n,"TypeName",{get:function(){return"GenericError"},enumerable:!0,configurable:
!0}),Object.defineProperty(n.prototype,"errorData",{get:function(){return this._errorData},enumerable:
!0,configurable:!0}),Object.defineProperty(n.prototype,"type",{get:function(){return this.constructor.
TypeName?this.constructor.TypeName:n.TypeName},enumerable:!0,configurable:!0}),n}(),t,r,u;n.GenericError=
i;t=function(n){function t(t,i){n.call(this,i);this._dataSetName=t}return __extends(t,n),Object.defineProperty(
t,"TypeName",{get:function(){return"GenericDataError"},enumerable:!0,configurable:!0}),Object.defineProperty(
t.prototype,"dataSetName",{get:function(){return this._dataSetName},enumerable:!0,configurable:!0}),
t}(i);n.GenericDataError=t;r=function(n){function t(t,i){n.call(this,t,i)}return __extends(t,n),Object.
defineProperty(t,"TypeName",{get:function(){return"FetchDataError"},enumerable:!0,configurable:!0}),
t}(t);n.FetchDataError=r;u=function(n){function t(t,i){n.call(this,t,i)}return __extends(t,n),Object.
defineProperty(t,"TypeName",{get:function(){return"UnauthorizedDataError"},enumerable:!0,configurable:
!0}),t}(t);n.UnauthorizedDataError=u})(t=n.FxError||(n.FxError={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){var t;(function(n){"use strict";var t=MsPortalFx.Base.Rpc.Internal,i=MsPortalFx.
Internal.Constants.RpcMethods;n.updateTenantInfoEndPoint=new t.ActionEndPointDefinition(i.updateTenantInfo);
n.updateSubscriptionInfoEndPoint=new t.ActionEndPointDefinition(i.updateSubscriptionInfo);n.getRegisteredResourceProviderInfoEndPoint=
new t.ActionEndPointDefinition(i.getRegisteredResourceProviderInfo)})(t=n.Azure||(n.Azure={}))})(t=n.
Internal||(n.Internal={}))}(HubsExtension||(HubsExtension={})),function(n){var t;(function(n){"use strict";
var h=function(){function n(){}return n}(),t,i,r,u,c,f,e,o,s,l;n.Subscription=h;t=function(){function n(
){}return n}();n.SubscriptionPolicies=t;i=function(){function n(){}return n}();n.SubscriptionList=i;
r=function(){function n(){}return n}();n.TenantInfo=r;u=function(){function n(){}return n}();n.Tenant=
u,function(n){n[n.Locked=0]="Locked";n[n.Unlocked=1]="Unlocked"}(n.ResourceLockState||(n.ResourceLockState=
{}));c=n.ResourceLockState;f=function(){function n(){this.regionPicker={regionId:ko.observable()}}return n}
();n.RegionPickerDataModel=f;e=function(){function n(){this.subscriptionPicker={subscriptionId:ko.observable(
),subscriptionName:ko.observable()}}return n}();n.SubscriptionPickerDataModel=e;o=function(){function n(
){this.resourceGroup={resourceGroupName:ko.observable(),subscriptionId:ko.observable()}}return n}();
n.ResourceGroupDataModel=o;s=function(){function n(){this.resourceGroupPicker={resourceGroupName:ko.
observable(),resourceGroupLocation:ko.observable(),subscriptionId:ko.observable(),isNewResourceGroup:
ko.observable()}}return n}();n.ResourceGroupPickerDataModel=s,function(n){var t,i;(function(n){n.PricingSummaryBlade=
{displayText:MsPortalFx.Resources.Strings.Services.Gallery.viewPricingSummaryLabel,bladeName:"PricingSummaryBlade",
bladeExtension:"HubsExtension"};n.LegalTermsBlade={bladeName:"LegalTermsBlade",bladeExtension:"HubsExtension"};
n.ChannelType={directEA:"DirectEA",indirectEA:"IndirectEA",reseller:"Reseller",direct:"Direct"}})(t=
n.Constants||(n.Constants={})),function(n){n[n.Success=0]="Success";n[n.CostDataNotAvailable=1]="CostDataNotAvailable";
n[n.Partial=2]="Partial";n[n.BatchFailed=3]="BatchFailed";n[n.AuthFailure=4]="AuthFailure";n[n.SubscriptionException=
5]="SubscriptionException";n[n.SubscriptionNotFound=6]="SubscriptionNotFound";n[n.SubscriptionNotActive=
7]="SubscriptionNotActive";n[n.SubscriptionIsInvalid=8]="SubscriptionIsInvalid";n[n.NotSupportedInBillingRegion=
9]="NotSupportedInBillingRegion";n[n.SubscriptionPricingUnavailable=10]="SubscriptionPricingUnavailable"}
(n.SpecCostQueryResultStatusCode||(n.SpecCostQueryResultStatusCode={}));i=n.SpecCostQueryResultStatusCode}
(l=n.Pricing||(n.Pricing={}))})(t=n.Azure||(n.Azure={}))}(HubsExtension||(HubsExtension={})),function(
n){var t;(function(n){"use strict";(function(n){n[n.Theme=0]="Theme";n[n.Blue=1]="Blue";n[n.Green=2]=
"Green";n[n.Orange=3]="Orange";n[n.Pink=4]="Pink";n[n.Purple=5]="Purple";n[n.Azure=6]="Azure";n[n.Dark=
7]="Dark"})(n.PartColor||(n.PartColor={}));var t=n.PartColor})(t=n.Parts||(n.Parts={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){"use strict";(function(n){n[n.Custom=0]="Custom";n[n.
CollectionSummary=1]="CollectionSummary";n[n.Error=3]="Error";n[n.ItemSummary=4]="ItemSummary";n[n.Settings=
7]="Settings";n[n.SingleSetting=8]="SingleSetting";n[n.LogStream=11]="LogStream";n[n.Grid=14]="Grid";
n[n.Editor=15]="Editor";n[n.DiffEditor=16]="DiffEditor";n[n.Provisioning=17]="Provisioning";n[n.Unavailable=
18]="Unavailable";n[n.Create=19]="Create";n[n.Button=20]="Button";n[n.QuickStart=21]="QuickStart";n[
n.Asset=22]="Asset";n[n.InfoList=23]="InfoList";n[n.Properties=24]="Properties";n[n.Collection=25]="Collection";
n[n.Chart=26]="Chart";n[n.SingleValueGauge=27]="SingleValueGauge";n[n.Donut=28]="Donut";n[n.QuotaGauge=
29]="QuotaGauge";n[n.ResourceSummary=30]="ResourceSummary"})(n.PartKind||(n.PartKind={}));var t=n.PartKind}
)(t=n.Parts||(n.Parts={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){"use strict";
(function(n){n[n.Mini=0]="Mini";n[n.Small=1]="Small";n[n.Normal=2]="Normal";n[n.Wide=3]="Wide";n[n.Tall=
4]="Tall";n[n.HeroWide=5]="HeroWide";n[n.HeroTall=6]="HeroTall";n[n.HeroWideFitHeight=7]="HeroWideFitHeight";
n[n.FullWidthFitHeight=8]="FullWidthFitHeight";n[n.FitToContainer=9]="FitToContainer";n[n.Large=10]=
"Large";n[n.Hero=11]="Hero"})(n.PartSize||(n.PartSize={}));var t=n.PartSize})(t=n.Parts||(n.Parts={})
)}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){"use strict";var i=function(){function t(
){}return Object.defineProperty(t,"AllSizes",{get:function(){return t._sizeMap||(t._sizeMap=[],t._sizeMap[
0]={name:0,css:"fxs-tilesize-mini",size:t._calculatePixelSize(1,1)},t._sizeMap[1]={name:1,css:"fxs-tilesize-small",
size:t._calculatePixelSize(2,1)},t._sizeMap[2]={name:2,css:"fxs-tilesize-normal",size:t._calculatePixelSize(
2,2)},t._sizeMap[3]={name:3,css:"fxs-tilesize-wide",size:t._calculatePixelSize(4,2)},t._sizeMap[4]={
name:4,css:"fxs-tilesize-tall",size:t._calculatePixelSize(2,4)},t._sizeMap[5]={name:5,css:"fxs-tilesize-herowide",
size:t._calculatePixelSize(6,4)},t._sizeMap[6]={name:6,css:"fxs-tilesize-herotall",size:t._calculatePixelSize(
4,6)},t._sizeMap[7]={name:7,css:"fxs-tilesize-herowidefitheight",size:t._calculatePixelSize(6,0)},t.
_sizeMap[8]={name:8,css:"fxs-tilesize-fullwidthfitheight",size:t._calculatePixelSize(-1,0)},t._sizeMap[
9]={name:9,css:"fxs-tilesize-fittocontainer",size:t._calculatePixelSize(-1,-1)},t._sizeMap[10]={name:
10,css:"fxs-tilesize-large",size:t._calculatePixelSize(4,4)},t._sizeMap[11]={name:11,css:"fxs-tilesize-hero",
size:t._calculatePixelSize(6,6)}),t._sizeMap},enumerable:!0,configurable:!0}),Object.defineProperty(
t,"AllCssClasses",{get:function(){return this._allCssClasses||(this._allCssClasses=t.AllSizes.map(function(
n){return n.css})),this._allCssClasses},enumerable:!0,configurable:!0}),t.getCorrespondingStandardSize=
function(n,i){return t.AllSizes.first(function(t){return t.size.width===n&&t.size.height===i})},t.getDefaultSize=
function(){return t.AllSizes.first(function(n){return n.name===2})},t.getSize=function(n){return t.AllSizes.
first(function(t){return t.name===n})},t.isFixedSize=function(n){return n===0||n===1||n===2||n===3||
n===4||n===10||n===5||n===6||n===11},t.isVariableSize=function(n){return n===7||n===8||n===9},t.isAdaptiveWidth=
function(n){return n===8||n===9},t._calculatePixelSize=function(t,i){var r=function(n,t,i){return n<
0?-1:n===0?0:Math.max(0,n*t+(n-1)*i)};return{width:r(t,n.Widgets.AzureGrid.CellWidth,n.Widgets.AzureGrid.
CellSpacingWidth),height:r(i,n.Widgets.AzureGrid.CellHeight,n.Widgets.AzureGrid.CellSpacingHeight)}}
,t}();t.PartSizeHelper=i})(t=n.Parts||(n.Parts={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;
(function(n){"use strict";(function(n){n[n.Ready=0]="Ready";n[n.Failed=1]="Failed"})(n.PartState||(n.
PartState={}));var t=n.PartState})(t=n.Parts||(n.Parts={}))}(MsPortalFx||(MsPortalFx={})),function(n)
{var t;(function(t){"use strict";function r(n,t,r){var f=u.clone(n);return i.addAssetExpansion(f,t(f,
r)),f}function f(n,t,i,u){var f=r(n,i,u);return t.push(f),f}var u=n.Base.Utilities,i,e;(function(n){
function r(t){return t.hasOwnProperty(n.assetDetailsPropertyName)&&t[n.assetDetailsPropertyName]!==undefined}
function u(t){return n.isAssetExpanded(t)?t[n.assetDetailsPropertyName]:null}function f(n,r){var u=r.
icon,f=[r,r.title,r.description,u,r.assetId,r.assetType||""];t.forEach(function(t,r){i(n,t,f[r])})}function e(
r){n.isAssetExpanded(r)&&t.forEach(function(n){i(r,n,undefined)})}n.assetDetailsPropertyPrefix="$$MSPORTALFX";
n.assetDetailsPropertyName=n.assetDetailsPropertyPrefix+"$assetDetails";n.titlePropertyName=n.assetDetailsPropertyName+
"$title";n.descriptionPropertyName=n.assetDetailsPropertyName+"$description";n.iconPropertyName=n.assetDetailsPropertyName+
"$icon";n.assetTypeStringPropertyName=n.assetDetailsPropertyName+"$assetTypeString";n.assetIdPropertyName=
n.assetDetailsPropertyName+"$assetId";var t=[n.assetDetailsPropertyName,n.titlePropertyName,n.descriptionPropertyName,
n.iconPropertyName,n.assetIdPropertyName,n.assetTypeStringPropertyName],i=function(n,t,i){Object.defineProperty(
n,t,{configurable:!0,enumerable:!0,writable:!1,value:i})};n.isAssetExpanded=r;n.getAssetExpansion=u;
n.addAssetExpansion=f;n.removeAssetExpansion=e})(i=t.AssetExpansion||(t.AssetExpansion={}));t.assetExpandItem=
r;t.assetExpandItemAndAddToResultSet=f,function(t){function i(t,i,r,u){var f=t.map(function(t){return n.
Services.assetExpandItem(t,r,u)});return i(f()),f.subscribe(i)}t.connectDataSet=i}(e=t.DataSetAssetExpansionMapper||
(t.DataSetAssetExpansionMapper={}))})(t=n.Services||(n.Services={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){"use strict";var t=function(){function n(){}return n.subscribeDataSet=function(
n,t,i,r){var u;return n().forEach(function(n,i){t(n,i,r)}),u=n().slice(0),n.subscribe(function(n){ko.
utils.fixupArrayEdits(ko.utils.compareArrays(u,n)).forEach(function(n){switch(n.status){case"added":
if(t)t(n.value,n.index,r);else throw new Error("Subscription does not handle insert.");break;case"deleted":
if(i)i(n.value,n.index,r);else throw new Error("Subscription does not handle remove.");}});u=n.slice(
0)})},n.insertItem=function(n,t,i){n.splice(i,0,t)},n.removeItem=function(n,t,i){n.splice(i,1)},n}();
n.DataSetSubscription=t})(t=n.Services||(n.Services={}))}(MsPortalFx||(MsPortalFx={})),function(n){var
t;(function(n){var t;(function(n){"use strict";var r,t,i;n.noSubCreateCategoryId="hidden_nosubcreate",
function(n){n.GalleryParametersKey="galleryParameters";n.GalleryOptionsKey="galleryOptions"}(r=n.Constants||
(n.Constants={}));t=function(){function n(){}return n.prototype.galleryCreatePreCheck=function(){return null}
,n}();n.BaseGalleryServiceViewModel=t;i=function(){function n(){this.galleryParameters={selectedTemplateId:
ko.observable(),templateJson:ko.observable(),subscriptionId:ko.observable(),resourceGroupName:ko.observable(
),resourceGroupLocation:ko.observable(),resourceProviders:ko.observable(),primaryResourceId:ko.observable(
),deploymentName:ko.observable()}}return n}();n.GalleryDataModel=i})(t=n.Gallery||(n.Gallery={}))})(
t=n.Services||(n.Services={}))}(MsPortalFx||(MsPortalFx={}));EventTypes=MsPortalFx.Base.EventTypes,function(
n){var t;(function(t){"use strict";function h(n){return n?new o(n):new e}function c(){return new s}var
i=window,u=n.Helpers,l=n.Base.Diagnostics,f=15e3,r=n.Base,e=function(){function n(){}return n.prototype.
trace=function(){},n.prototype.traceBrowserInfo=function(){},n.prototype.flush=function(){return u.Deferred(
).resolve().promise()},n}(),o=function(){function n(n){i.location.search&&n.indexOf("?")===-1&&(n+=i.
location.search);this._sequencer=new r.Debouncer(r.Debouncer.getMergeIntoArrayDataMerger(),r.Debouncer.
getPostArrayExecutor(n),f)}return n.prototype.trace=function(n){var t;n&&(t=[n],this._sequencer.execute(
t))},n.prototype.traceFunc=function(n,t){this.trace({source:"BrowserInfo",action:n,data:t})},n.prototype.
traceBrowserInfo=function(){var r=this,n=i.navigator||{},t=i.screen||{};this.traceFunc("AppName",n.appName);
this.traceFunc("AppVersion",n.appVersion);this.traceFunc("CpuClass",n.cpuClass);this.traceFunc("Language",
n.language);this.traceFunc("Location",i.location.href);this.traceFunc("Platform",n.platform);this.traceFunc(
"ScreenAvailableHeight",t.availHeight);this.traceFunc("ScreenAvailableResolution",t.availWidth+" x "+
t.availHeight);this.traceFunc("ScreenAvailableWidth",t.availWidth);this.traceFunc("ScreenColorDepth",
t.colorDepth);this._captureScreenWindowSizeTelemetry();$(i).on(EventTypes.resize,this._resizeTelemetryDebouncedEventHandler=
function(){i.clearTimeout(r._resizeTelemetryDebouncerTimeout);r._resizeTelemetryDebouncerTimeout=i.setTimeout(
function(){r._captureResizeTelemetry()},1e4)});this.traceFunc("SystemLanguage",n.systemLanguage);this.
traceFunc("UserAgent",n.userAgent);this.traceFunc("UserLanguage",n.userLanguage)},n.prototype.flush=
function(){return this._sequencer.flush()},n.prototype._captureResizeTelemetry=function(){this._captureScreenWindowSizeTelemetry(
)},n.prototype._captureScreenWindowSizeTelemetry=function(){var n=i.screen||{};this.traceFunc("ScreenHeight",
n.height);this.traceFunc("ScreenResolution",n.width+" x "+n.height);this.traceFunc("ScreenWidth",n.width);
this.traceFunc("WindowHeight",i.innerHeight);this.traceFunc("WindowResolution",i.innerWidth+" x "+i.
innerHeight);this.traceFunc("WindowWidth",i.innerWidth)},n}(),s=function(){function t(){}return t.prototype.
trace=function(t){t.actionModifier!==n.Base.Diagnostics.Telemetry.ActionModifier.Start&&console.log(
"[PERF] "+JSON.stringify(t))},t.prototype.traceBrowserInfo=function(){},t.prototype.flush=function()
{return n.Helpers.Deferred().resolve().promise()},t}();t.getTelemetryEventProcessor=h;t.getConsoleTelemetryEventProcessor=
c})(t=n.Services||(n.Services={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;
(function(){"use strict"})(t=n.ViewModels||(n.ViewModels={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){"use strict";var i=window.fx.environment.isDevelopmentMode,
r=function(){function n(n,t,i,r){var u=this,f;if(this.selectedItems=ko.observableArray(),this.activatedItems=
ko.observableArray(),this.itemsWithChildEdits=ko.observableArray(),t&&!i)throw new Error("Invalid Parameters.  If itemMatchesSelection function is defined then a createSelection item factory must be provided.");
if(i&&!t)throw new Error("Invalid Parameters.  If a createSelection factory function has been provided there must be a matching itemMatchesSelection function.");
t||i||(t=function(n,t){return n===t},i=function(n){return n});this.itemMatchesSelection=t;this.createSelection=
i;this._msPortalFxCursor=ko.observable(null);f=this._computedItems=ko.computed(function(){var i=f?f(
):[];return n().map(function(n){var r=i.first(function(t){return t.data===n}),o=function(i){return i.
some(function(i){return t(n,i)})},s=function(){return o(u.activatedItems.peek())},h=function(){return o(
u.selectedItems.peek())},c=function(){return u.itemsWithChildEdits().some(function(i){return t(n,i.item)}
)},f,e;return r?(f=s(),e=f||h(),r.isActivated.peek()!==f&&r.isActivated(f),r.isSelected.peek()!==e&&
r.isSelected(e)):r={data:n,isSelected:ko.observable(h()),isActivated:ko.observable(s()),hasChildEdits:
ko.computed({read:c,write:function(){throw new Error("'hasChildEdits' is a read only.");}})},r})});this.
selectableItems=ko.observableArray(f());f.subscribe(function(n){(u.selectableItems().length!==0||n.length!==
0)&&u.selectableItems.splice.apply(u.selectableItems,[0,u.selectableItems().length].concat(n))});var
e=this.selectableItems(),o=function(n){var f=u.selectedItems().first(function(i){return t(n.data,i)}
),e=u.activatedItems().first(function(i){return t(n.data,i)}),o=u.selectableItems().indexOf(n)<0,r;!o&&
n.isSelected()?f||(r=e||i(n.data),r!==null&&r!==undefined&&u.selectedItems.splice(0,0,r)):(f&&u.selectedItems.
remove(f),n.isActivated(!1))},s=function(n){var e=u.selectedItems().first(function(i){return t(n.data,
i)}),f=u.activatedItems().first(function(i){return t(n.data,i)}),o=u.selectableItems().indexOf(n)<0,
r;!o&&n.isActivated()?f||(r=e||i(n.data),r!==null&&r!==undefined&&u.activatedItems.splice(0,0,r)):(f&&
u.activatedItems.remove(f),n.isSelected(!1))},h=function(){(u._isSelectedSubscriptions||[]).forEach(
function(n){n.dispose()});u._isSelectedSubscriptions=e.map(function(n){return n.isSelected.subscribe(
function(){o(n)})}).concat(e.map(function(n){return n.isActivated.subscribe(function(){s(n)})}))};this.
_itemsSubscription=this.selectableItems.subscribe(function(){var n=u.selectableItems.slice(0),t=u.selectableItems.
subscribe(function(i){ko.utils.compareArrays(n,i).forEach(function(n){switch(n.status){case"added":case"deleted":
o(n.value);s(n.value)}});h();t.dispose()})},null,"beforeChange");h();this._selectionsSubscription=this.
selectedItems.subscribe(function(){var n=u.selectedItems.slice(0),i=u.selectedItems.subscribe(function(
r){i.dispose();ko.utils.compareArrays(n,r).forEach(function(n){switch(n.status){case"added":case"deleted":
e.some(function(i){return t(i.data,n.value)?(i.isSelected(n.status==="added"),!0):!1})}})})},null,"beforeChange");
this._activationsSubscription=this.activatedItems.subscribe(function(){var n=u.activatedItems.slice(
0),i=u.activatedItems.subscribe(function(r){i.dispose();ko.utils.compareArrays(n,r).forEach(function(
n){switch(n.status){case"added":case"deleted":e.some(function(i){return t(i.data,n.value)?(i.isActivated(
n.status==="added"),!0):!1})}})})},null,"beforeChange");r&&(r.selectedItems&&ko.utils.unwrapObservable(
r.selectedItems).forEach(function(n){u._mergeIntoObservableArray(u.selectedItems,n)}),r.activatedItems&&
ko.utils.unwrapObservable(r.activatedItems).forEach(function(n){u._mergeIntoObservableArray(u.activatedItems,
n)}),r.itemsWithChildEdits&&ko.utils.unwrapObservable(r.itemsWithChildEdits).forEach(function(n){u._mergeIntoObservableArray(
u.itemsWithChildEdits,n)}))}return n.prototype.activateAllSelectedItems=function(){this.activatedItems(
this.selectedItems.slice(0))},n.prototype.dispose=function(){this._itemsSubscription.dispose();this.
_selectionsSubscription.dispose();this._activationsSubscription.dispose();(this._isSelectedSubscriptions||
[]).forEach(function(n){n.dispose()});this._computedItems.dispose()},n.prototype._mergeIntoObservableArray=
function(n,t){n().indexOf(t)<0&&n.push(t)},n}(),t;n.SelectableSet=r;t=function(){function n(n){var t=
this;n===void 0&&(n={});var r=!1,u=ko.observable(n.selectedValue),f=this;f.lock=function(){r=!0};f.setInternalSelectedValue=
function(n){u(n)};f.isLocked=function(){return r};this.selectedValue=ko.computed({read:function(){return u(
)},write:function(n){if(i&&r)throw new Error("selectedValue is managed by the framework and cannot be modified.");
u(n)}});this.isSelected=ko.observable(!!n.isSelected);this.isCommandSelected=ko.observable(!!n.isCommandSelected);
this.hasChildEdits=ko.observable(!1);this.isActivated=ko.observable(!!n.isActivated);this.isClickable=
ko.computed(function(){return!t.isSelected()});this.value=ko.computed({read:function(){return t.isSelected(
)?t.selectedValue():undefined},write:function(n){if(n===undefined)t.isSelected(!1),t.isActivated(!1)
else throw new Error("You may only write the value 'undefined' to a Selectable's 'value' property.");
}})}return n.prototype.dispose=function(){this.value&&this.value.dispose();this.isClickable&&this.isClickable.
dispose()},n.prototype.setIsSelected=function(n,t){n&&n.container&&n.container.selectable?this.isSelected(
!!n.container.selectable.isSelected):this.isSelected(t)},n.prototype.onClick=function(){this.isSelected(
)||this.isSelected(!0)},n}();n.Selectable=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(){"use strict"})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(n){var t;(function(n){"use strict";var t=!1,i=function(){function n(
n,t){this._disposables=[];this._selectableSets=ko.observableArray([]);this._selectableSetMap={};this.
_subscriptions=[];this._syncing=[null];this.selectableItems=ko.observableArray([]);this.selectedItems=
ko.observableArray();this.activatedItems=ko.observableArray();this.itemsWithChildEdits=ko.observableArray(
);this._getSetName=n;this._initializeComputeds();this._initializeSubscriptions();t&&this._initializeState(
t)}return n.prototype.registerSelectableSet=function(n,t){if(this._debug("Registering selectable set: %s",
t),!n)throw new Error("Invalid Parameters. 'selectableSet' cannot be null or falsy .");if(!t)throw new
Error("Invalid Parameters. 'name' cannnot be falsy.");if(this._selectableSets.peek().some(function(t)
{return t===n}))throw new Error("The selectable set is already registered.");if(this._selectableSetMap[
t])throw new Error("A selectable set is already registered under the given name: "+t+".");this._selectableSetMap[
t]=n;this._selectableSets.push(n);this._attachSet(n,t)},n.prototype.unregisterSelectableSet=function(
n){this._debug("Unregistering selectable set");var i,t;if(!n)throw new Error("Invalid Parameters. Cannot be null or undefined.");
if(typeof n=="string"?t=n:i=n,t)if(this._selectableSetMap[t])i=this._selectableSetMap[t];else throw new
Error("No selectable set was registered with the name: "+t+".");this._detachSet(i,!0);this._selectableSets.
remove(i);delete this._selectableSetMap[t]},n.prototype.dispose=function(){this._debug("Disposing");
for(var n;n=this._disposables.pop();)n.dispose();for(this._disposables=null;this._subscriptions.length;
)this._detachSet(this._subscriptions[this._subscriptions.length-1].selectableSet,!1)},n.prototype._initializeComputeds=
function(){var n=this;this._disposables.push(ko.computed(function(){n._debug("Calculating selectedItems computed");
var t=n._selectableSets().map(function(n){return n.selectableItems()});n.selectableItems(Array.prototype.
concat.apply([],t))}))},n.prototype._initializeSubscriptions=function(){var n=this;this._disposables.
push(this.activatedItems.subscribe(function(t){n._debug("Syncing activated items to child sets");n._syncItemsToChildSets(
t,function(n,t){return n.activatedItems(t)})}));this._disposables.push(this.selectedItems.subscribe(
function(t){n._debug("Syncing selected items to child sets");n._syncItemsToChildSets(t,function(n,t)
{return n.selectedItems(t)})}))},n.prototype._initializeState=function(n){n.selectedItems&&this.selectedItems(
ko.utils.peekObservable(n.selectedItems));n.activatedItems&&this.activatedItems(ko.utils.peekObservable(
n.activatedItems))},n.prototype._attachSet=function(n,t){this._debug("Attaching handlers for selectable set");
var i=this._createSyncToParentArray(n.selectedItems,this.selectedItems,t,!0),r=this._createSyncToParentArray(
n.activatedItems,this.activatedItems,t,!0);this._syncItemsToChildSets(this.selectedItems(),function(
n,t){return n.selectedItems(t)},t);this._syncItemsToChildSets(this.activatedItems(),function(n,t){return n.
activatedItems(t)},t);this._subscriptions.push({selectableSet:n,subscriptions:[r,i]})},n.prototype._detachSet=
function(n,t){t===void 0&&(t=!0);this._debug("Detaching handlers for selectable set");var i=this._subscriptions.
first(function(t){return t.selectableSet===n});i&&this._subscriptions.splice(this._subscriptions.indexOf(
i),1);t&&(this._removeItems(n.selectedItems,this.selectedItems),this._removeItems(n.activatedItems,this.
activatedItems));i.subscriptions.forEach(function(n){return n.dispose()})},n.prototype._removeItems=
function(n,t){this._debug("Removing child items from parent array");t.removeAll(n())},n.prototype._syncItemsToChildSets=
function(n,t,i){var e=this,u={},r,f;if(n.forEach(function(n){var i=e._getSetName(n),t=u[i];t||(u[i]=
t=[]);t.push(n)}),i)r=this._selectableSetMap[i],r&&u[i]&&this._guardedSync(i,function(){return t(r,u[
i]||[])});else for(f in this._selectableSetMap)r=this._selectableSetMap[f],r&&this._guardedSync(f,function(
){return t(r,u[f]||[])})},n.prototype._createSyncToParentArray=function(n,t,i,r){var f=this,u;return r===
void 0&&(r=!1),this._debug("Creating sync between arrays"),u=n.peek(),u.length&&this._guardedSync(i,
function(){t.push.apply(t,u)}),n.subscribe(function(n){f._guardedSync(i,function(){var i=t.peek();t.
valueWillMutate();try{i.length=0;i.push.apply(i,n)}finally{t.valueHasMutated()}})})},n.prototype._debug=
function(n){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];t&&console.debug("MSS ("+window.
location.origin+"): "+(n||""),r)},n.prototype._guardedSync=function(n,t){if(this._syncing[0]!==n){this.
_syncing.unshift(n);try{t()}finally{var i=this._syncing.shift();if(i!==n)throw new Error("Unexpected sync guard encountered: "+
i+". Expected: "+n);}}},n}();n.MultiplexingSelectableSet=i})(t=n.Internal||(n.Internal={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(t){var i;(function(t){"use strict";var i=function(n){function t(t)
{t===void 0&&(t={});n.call(this,t);this.delayedBladeSelection=ko.observable()}return __extends(t,n),
t}(n.ViewModels.Selectable);t.Selectable=i})(i=t.Internal||(t.Internal={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(){"use strict"})(t=
n.Commands||(n.Commands={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(){function t(
t){this._createdLifetimeManager=!1;this.controlType=0;t?(this._lifetimeManager=t.createChildLifetime(
),this._lifetimeManager.registerForDispose(this)):(this._createdLifetimeManager=!0,this._lifetimeManager=
new n.Internal.Base.TriggerableLifetimeManager);this._disposed=!1}return t.prototype.dispose=function(
){this._createdLifetimeManager&&this._lifetimeManager.dispose();this._disposed=!0},Object.defineProperty(
t.prototype,"lifetimeManager",{get:function(){return this._lifetimeManager},enumerable:!0,configurable:
!0}),t.prototype.populateFromObject=function(n){var r=this,t=n;for(var i in t)t.hasOwnProperty(i)&&t[
i]!==undefined&&(r[i]=t[i])},t.prototype._addDisposablesToCleanUp=function(n){this.lifetimeManager.registerForDispose(
n)},t}();t.ViewModel=i})(i=t.Base||(t.Base={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.
ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(
n){function t(t,i){i===void 0&&(i=!1);t&&t.createChildLifetime||(t=undefined,i=arguments[0],i===void
0&&(i=!1));n.call(this,t);typeof arguments[0]=="boolean"&&(i=arguments[0]);this.disabled=ko.observable(
!1);this.loading=ko.observable(i)}return __extends(t,n),t}(n.ViewModels.Controls.Base.ViewModel);t.ViewModel=
i})(i=t.Loadable||(t.Loadable={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";var i=function(n){function t(
t){n.call(this,t);this.name=null;this.value=ko.observable();this.dirty=ko.observable()}return __extends(
t,n),t}(n.Loadable.ViewModel);t.ViewModel=i})(t=n.EditableControl||(n.EditableControl={}))})(t=n.Controls||
(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){
"use strict";t.DefaultDelayValidationTimeout=500;var i=function(n){function t(t){var i=this;n.call(this,
t);this.enableValidation=ko.observable(!0);this.delayValidationTimeout=ko.observable(0);this.validationState=
ko.observable(0);this.validators=ko.observableArray();this.valid=ko.computed(function(){return!i.enableValidation(
)||i.validators().length===0||i.enableValidation()&&i.validators().length>0&&(i.validationState()===
0||i.validationState()===2)})}return __extends(t,n),t}(n.EditableControl.ViewModel);t.ViewModel=i})(
t=n.ValidatableControl||(n.ValidatableControl={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";t.DefaultValidationDelay=
500;var i=function(n){function i(){n.apply(this,arguments);this.delayValidationTimeout=ko.observable(
t.DefaultValidationDelay);this.valueUpdateTrigger=0}return __extends(i,n),i}(n.ValidatableControl.ViewModel);
t.ViewModel=i})(t=n.TypableControl||(n.TypableControl={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";var r=function(
){function n(n,t,i,r){this.text=ko.observable(n);this.value=ko.observable(t);this.selected=ko.observable(
!1);this.disabled=ko.observable(!1);i&&this.selected(i);r&&this.disabled(r)}return n}(),i;t.ItemValue=
r;i=function(n){function t(){n.apply(this,arguments);this.label=null;this.values=ko.observableArray(
)}return __extends(t,n),t}(n.ValidatableControl.ViewModel);t.ViewModel=i})(t=n.ItemList||(n.ItemList=
{}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
n){var t;(function(t){"use strict";var f,r,u,i;(function(n){n[n.None=0]="None";n[n.Pending=1]="Pending";
n[n.Success=2]="Success";n[n.Failure=3]="Failure"})(t.Status||(t.Status={}));f=t.Status;r=function(n)
{function t(t,i,r,u){t&&t.createChildLifetime||(t=undefined,i=arguments[0],r=arguments[1],u=arguments[
2]);n.call(this,t);this._handler=null;this._invokeSubscription=null;this.text=ko.observable(i||"");this.
visible=ko.observable(!0);this.afterExecute=null;this.status=ko.observable(0);this.error=ko.observable(
null);this.invoke=ko.observable();this.handler=ko.observable(null);this.attach(r,u)}return __extends(
t,n),t.prototype.execute=function(){var n=Q.defer(),t=this.handler(),i={completed:function(t,i){try{
t===2?n.resolve():n.reject(i)}catch(r){}},id:Date.now()};return t?this.invoke(i):this._execute(t,i),
n.promise},t.prototype.attach=function(n,t){var r;n&&(r=new i(n,t));this.attachHandler(r)},t.prototype.
attachHandler=function(n){var t=this;this.detach();n&&(this._invokeSubscription=this.invoke.subscribe(
function(n){var i=t.handler();t._execute(i,n)}),this._handler=n,this.handler(this._handler))},t.prototype.
detach=function(){this._handler&&(this.handler()===this._handler&&this.handler(null),this._handler=null);
this._invokeSubscription&&(this._invokeSubscription.dispose(),this._invokeSubscription=null)},t.prototype.
_execute=function(n,t){try{if(this.error(null),this.status(1),!n)throw new Error("Command does not have handler.");
n.execute();this.status(2);t.completed(2)}catch(i){var r;i&&(r=i.message);this.error(i);this.status(
3);t.completed(3,r)}if(this.afterExecute)try{this.afterExecute()}catch(i){}},t}(n.Loadable.ViewModel);
t.ViewModel=r;u=function(){function n(n,t,i){this._viewModel=n;this.attach(t,i)}return n.prototype.attach=
function(n,t){var r=this;this.detach();n&&(this._invokeSubscription=this._viewModel.invoke.subscribe(
function(n){var t=r._viewModel.handler();r._execute(t,n)}),this._delegatingHandler=new i(n,t),this._viewModel.
handler(this._delegatingHandler))},n.prototype.detach=function(){this._delegatingHandler&&(this._viewModel.
handler()===this._delegatingHandler&&this._viewModel.handler(null),this._delegatingHandler=null);this.
_invokeSubscription&&(this._invokeSubscription.dispose(),this._invokeSubscription=null)},n.prototype.
_execute=function(n,t){try{if(this._viewModel.error(null),this._viewModel.status(1),!n)throw new Error(
"Command does not have handler.");n.execute();this._viewModel.status(2);t.completed(2)}catch(i){var r;
i&&(r=i.message);this._viewModel.error(i);this._viewModel.status(3);t.completed(3,r)}if(this._viewModel.
afterExecute)try{this._viewModel.afterExecute()}catch(i){}},n}();t.ViewModelHandler=u;i=function(){function n(
n,t){this.execute=n;this.canExecute=ko.computed(function(){return t?t():!0})}return n}();t.DelegatingHandler=
i})(t=n.Command||(n.Command={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={})
)}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){var i;(function(i){"use strict";var r=n.Resources.Strings,e=
n.Helpers,f=function(t){function i(n,i){t.call(this,n);this.selectedItems=ko.observableArray([]);this.
_gridItems=null;this._options=null;this._assetName=ko.observable();this._assetTypeDisplayName=ko.observable(
);this.affectedItemsLabel=ko.observable(r.DeleteAssetConfirmation.affectedItemsLabel);this.controlType=
76;this._options=i;this._populateAssetInfo();this._initConfirmationEditor();this._initGrid();this._initComputed(
)}return __extends(i,t),i.prototype._onUpdateWarningText=function(n){return r.DeleteAssetConfirmation.
warningText.format(n)},i.prototype._onUpdateConfirmationLabel=function(n){return r.DeleteAssetConfirmation.
confirmationLabel.format(n)},i.prototype._selectAll=function(){this.grid&&this.grid.selectableData&&
this.grid.selectableData.selectableItems().forEach(function(n){return n.isSelected(!0)})},i.prototype.
_populateAssetInfo=function(){this._assetTypeDisplayName(this._options.assetTypeDisplayName)},i.prototype.
_initConfirmationEditor=function(){this.confirmationEditor=new u(this.lifetimeManager,this._assetName);
this._addDisposablesToCleanUp(this.confirmationEditor)},i.prototype._initGrid=function(){if(this._options.
grid){var t=this._options.grid,i=t.selectableRowExtensionOptions,r=i?n.ViewModels.Controls.Lists.Grid.
Extensions.SelectableRow:null;this.grid=new n.ViewModels.Controls.Lists.Grid.ViewModel(this.lifetimeManager,
t.items,r,i);this.grid.columns=t.columns;this.grid.noRowsMessage=t.noRowsMessage;this.grid.showHeader=
n.Base.Utilities.isNullOrUndefined(t.showHeader)?!0:t.showHeader;this._addDisposablesToCleanUp(this.
grid);i&&(this.selectedItems=this.grid.selectableData.selectedItems);this._gridItems=this.grid.items}
},i.prototype._initComputed=function(){var t=this;this.warning=ko.computed(function(){return t._onUpdateWarningText(
t._assetName())});this._addDisposablesToCleanUp(this.warning);this.confirmationLabel=ko.computed(function(
){return t._onUpdateConfirmationLabel(t._assetTypeDisplayName())});this._addDisposablesToCleanUp(this.
confirmationLabel);this.valid=ko.computed(function(){var i=t._assetName(),r=t.confirmationEditor.textBox.
valid();return n.Base.Utilities.isNullOrWhiteSpace(i)?!1:r});this._addDisposablesToCleanUp(this.valid)}
,i}(t.Loadable.ViewModel),u;i.ViewModel=f;u=function(){function t(n,t){this._assetName=null;this._disposables=
[];this._assetName=t;this._init(n);this._handleAssetNameChange()}return t.prototype.dispose=function(
){this._disposables.forEach(function(n){n.dispose()})},t.prototype._init=function(t){this.textBox=new
n.ViewModels.Forms.TextBox.ViewModel(t);this.textBox.disabled(!0);this.textBox.valueUpdateTrigger=1;
this._disposables.push(this.textBox)},t.prototype._handleAssetNameChange=function(){var t=this;this.
_disposables.push(ko.computed(function(){var i=t._assetName();n.Base.Utilities.isNullOrWhiteSpace(i)?
(t.textBox.disabled(!0),t.textBox.validations([])):(t.textBox.disabled(!1),t.textBox.validations([new
n.ViewModels.EqualsValidation(i,r.DeleteAssetConfirmation.assetNameValidationFailureMessage.format(i))]),
t.textBox.value(""))}))},t}()})(i=t.DeleteAssetConfirmation||(t.DeleteAssetConfirmation={}))})(i=t.Controls||
(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){
"use strict";var i=function(n){function t(t){n.call(this,t);this.galleryItem=ko.observable();this.bladeSelection=
ko.observable();this.bannerClicked=ko.observable();this.createClicked=ko.observable();this.controlType=
77}return __extends(t,n),t}(n.Loadable.ViewModel);t.ViewModel=i})(t=n.HeroBanner||(n.HeroBanner={}))}
)(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));
__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){"use strict";var i=function(n){function t(t){n.call(this,t)}return __extends(t,
n),t}(n.ViewModels.Controls.Base.ViewModel);t.BaseViewModel=i})(i=t.HotSpot||(t.HotSpot={}))})(i=t.Controls||
(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(i){var r;(function(i){
"use strict";var r=function(n){function i(i){n.call(this,i);this.selectable=t.Part.createSelectableViewModel(
);this.controlType=84}return __extends(i,n),i}(n.ViewModels.Controls.HotSpot.BaseViewModel);i.ViewModel=
r})(r=i.HotSpot||(i.HotSpot={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={})
)}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(n){function t(
t,i){n.call(this,t);this.controlType=88;this.clickableLink=i?i.clickableLink:ko.observable()}return __extends(
t,n),t}(n.ViewModels.Controls.HotSpot.BaseViewModel);t.LinkViewModel=i})(i=t.HotSpot||(t.HotSpot={})
)})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})
);__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
n){var t;(function(t){"use strict";var i=function(n){function t(t,i){n.call(this,t,!1);this.image=i?
i.image:ko.observable();this.text=i?i.text:ko.observable()}return __extends(t,n),t}(n.Loadable.ViewModel);
t.BaseViewModel=i})(t=n.InfoBox||(n.InfoBox={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(
t){function i(i,r){t.call(this,i);this.controlType=78;this.selectable=new n.ViewModels.Selectable({isSelected:
r&&r.isSelected})}return __extends(i,t),i}(t.BaseViewModel);t.ViewModel=i})(i=t.InfoBox||(t.InfoBox=
{}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
n){var t;(function(n){"use strict";var t=function(n){function t(t,i){n.call(this,t,i);this.controlType=
87;this.clickableLink=i?i.clickableLink:ko.observable()}return __extends(t,n),t}(n.BaseViewModel);n.
LinkViewModel=t})(t=n.InfoBox||(n.InfoBox={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.
ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";(function(n){n[
n.Default=0]="Default";n[n.ComingSoon=1]="ComingSoon";n[n.NoSubscription=2]="NoSubscription";n[n.Unauthorized=
3]="Unauthorized"})(t.ImageType||(t.ImageType={}));var r=t.ImageType,i=function(n){function t(t){n.call(
this,t);this.header=ko.observable("");this.title=ko.observable("");this.description=ko.observable("");
this.callToActionText=ko.observable("");this.callToActionUri=ko.observable("");this.imageType=ko.observable(
0);this.controlType=79}return __extends(t,n),t}(n.Loadable.ViewModel);t.ViewModel=i})(t=n.Notice||(n.
Notice={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(i){"use strict";var o,s,r,u,f,e;(function(n){n[n.Sequential=0]="Sequential";n[n.NonSequential=
1]="NonSequential"})(i.WizardMode||(i.WizardMode={}));o=i.WizardMode,function(n){n[n.Form=0]="Form";
n[n.Selector=1]="Selector"}(i.StepType||(i.StepType={}));s=i.StepType;r=function(){function t(t,i,r,
u,f){this.description=ko.observable("");this.iconUri=ko.observable();this.status=ko.observable();this.
stepId=t;this.stepType=n.Base.Utilities.isNullOrUndefined(i)?0:i;this.title=ko.observable(r);this.formBlade=
u;this.extension=f}return t}();i.WizardStepBase=r;u=function(n){function t(t,i){t&&t.createChildLifetime||
(t=undefined,i=arguments[0]);n.call(this,t);this.mode=0;this.steps=ko.observableArray();this.selection=
ko.observable();this.savedState=ko.observable();this.currentState=ko.observable();this.stepOutput=ko.
observable();this.beginExecuteCommand=ko.observable();this._autoOpenFirstStep=!1;i&&i.currentState!==
undefined?this.savedState(i.currentState):this._autoOpenFirstStep=!0}return __extends(t,n),t.prototype.
initialize=function(){this._autoOpenFirstStep&&(this.savedState({stepStatuses:[]}),this._autoOpenFirstStep=
!1)},t}(t.Loadable.ViewModel);i.ViewModel=u;f=function(n){function t(t,i,r,u,f,e){n.call(this,t,0,i,
r,e);this.status(u);this.isOptional=!!f}return __extends(t,n),t}(r);i.WizardStep=f;e=function(n){function t(
t,i,r,u){n.call(this,t,1,i,r,u);this.value=ko.observable();this.defaultValue=ko.observable();this.displayText=
ko.observable("");this.locked=ko.observable(!1);this.infoBalloonText=ko.observable("");this.lockedBalloonText=
ko.observable("")}return __extends(t,n),t}(r);i.SelectorStep=e})(i=t.Wizard||(t.Wizard={}))})(i=t.Controls||
(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){
"use strict";var e,u,i,r,f;(function(n){n[n.Top=0]="Top";n[n.Right=1]="Right";n[n.Bottom=2]="Bottom";
n[n.Left=3]="Left"})(t.Position||(t.Position={}));e=t.Position;u=function(){function n(n,t){this.linkText=
n||"";this.linkUri=t||""}return n}();t.Link=u;i=function(){function n(n,t){this.preferred=n||0;this.
alternate=t||0}return n}();t.Offset=i;r=function(){function n(n,t,i,r){this.top=n||0;this.left=t||0;
this.width=i||0;this.height=r||0}return n}();t.Box=r;f=function(n){function t(t){n.call(this,t);this.
visible=ko.observable(!1);this.box=ko.observable(new r);this.content=ko.observable("");this.link=ko.
observable();this.position=ko.observable(0);this.horizontalOffset=new i;this.verticalOffset=new i;this.
appendTo="body";this.closeOtherBalloons=!1}return __extends(t,n),t}(n.Loadable.ViewModel);t.ViewModel=
f})(t=n.Balloon||(n.Balloon={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={})
)}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){var i;(function(i){"use strict";(function(n){n[n.Normal=0]=
"Normal";n[n.Emphasized=1]="Emphasized";n[n.Strong=2]="Strong"})(i.Emphasis||(i.Emphasis={}));var u=
i.Emphasis,r=function(t){function i(i){t.call(this,i);this.max=ko.observable(2e5);this.wrap=ko.observable(
!0);this.click=$.noop;this.clear=new n.ViewModels.Controls.Command.ViewModel(i,"");this.scrollbars=!0;
this.write=ko.observable();this.writeLine=ko.observable();this.writeText=ko.observable();this.writeTextLine=
ko.observable();this.writeTextArray=ko.observable();this.write.extend({notify:"always"});this.writeLine.
extend({notify:"always"});this.writeText.extend({notify:"always"});this.writeTextLine.extend({notify:
"always"});this.writeTextArray.extend({notify:"always"})}return __extends(i,t),i}(t.Loadable.ViewModel);
i.ViewModel=r})(i=t.TextStream||(t.TextStream={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";(function(n)
{n[n.Text=0]="Text";n[n.Information=1]="Information";n[n.Success=2]="Success";n[n.Warning=3]="Warning";
n[n.Error=4]="Error"})(t.LogItemType||(t.LogItemType={}));var r=t.LogItemType,i=function(n){function t(
t){n.call(this,t);this.controlType=58;this.paused=ko.observable(!1);this.filters=ko.observableArray(
);this.log=ko.observable();this.logItem=ko.observable();this.logItems=ko.observable();this.log.extend(
{notify:"always"});this.logItem.extend({notify:"always"});this.logItems.extend({notify:"always"})}return __extends(
t,n),t}(n.TextStream.ViewModel);t.ViewModel=i})(t=n.LogStream||(n.LogStream={}))})(t=n.Controls||(n.
Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(i){
"use strict";var r=function(t){function i(i){t.call(this,i);this.controlType=75;this.prompt=ko.observable(
"> ");this.clear=new n.ViewModels.Controls.Command.ViewModel(i);this.command=ko.observable("");this.
text=ko.observable("");this.info=ko.observable("");this.success=ko.observable("");this.warning=ko.observable(
"");this.error=ko.observable("");this.command.extend({notify:"always"});this.text.extend({notify:"always"});
this.info.extend({notify:"always"});this.success.extend({notify:"always"});this.warning.extend({notify:
"always"});this.error.extend({notify:"always"})}return __extends(i,t),i}(t.Loadable.ViewModel);i.ViewModel=
r})(i=t.Console||(t.Console={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={})
)}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){var i;(function(i){var r;(function(i){"use strict";var f,e,
r,u;(function(n){n[n.NotLoading=0]="NotLoading";n[n.Loading=1]="Loading";n[n.Failed=2]="Failed"})(i.
QueryLoadingStatus||(i.QueryLoadingStatus={}));f=i.QueryLoadingStatus,function(n){n[n.Operator=0]="Operator";
n[n.Operand=1]="Operand"}(i.CallbackMethodType||(i.CallbackMethodType={}));e=i.CallbackMethodType;r=
function(){function n(){}return Object.defineProperty(n,"Group",{get:function(){return"group"},enumerable:
!0,configurable:!0}),Object.defineProperty(n,"Predicate",{get:function(){return"predicate"},enumerable:
!0,configurable:!0}),n}();i.QueryExpressionType=r;u=function(t){function i(i,r){i&&i.createChildLifetime||
(i=undefined,r=arguments[0]);t.call(this,i);this.controlType=31;this.schema=ko.observable(r);this.title=
ko.observable("");this.query=ko.observable(null);this.queryViewModel=ko.observable();this.savedQuery=
ko.observable(null);this.callback=null;this.showHeader=ko.observable(!0);this.showFooter=ko.observable(
!0);this.add=new n.ViewModels.Controls.Command.ViewModel(i);this.insert=new n.ViewModels.Controls.Command.
ViewModel(i);this.remove=new n.ViewModels.Controls.Command.ViewModel(i);this.group=new n.ViewModels.
Controls.Command.ViewModel(i);this.ungroup=new n.ViewModels.Controls.Command.ViewModel(i);this.save=
new n.ViewModels.Controls.Command.ViewModel(i);this.queryLoading=ko.observable({status:0});this._msPortalFxOperandControls=
ko.observableArray([])}return __extends(i,t),i}(t.Loadable.ViewModel);i.ViewModel=u})(r=i.QueryBuilder||
(i.QueryBuilder={}))})(i=t.Data||(t.Data={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.
ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";(function(n){n[
n.Info=0]="Info";n[n.Validation=2]="Validation"})(t.Type||(t.Type={}));var r=t.Type,i=function(n){function t(
t){n.call(this,t);this.type=0;this.position=ko.observable(0);this.content=ko.observable("");this.link=
ko.observable();this.balloonVisible=ko.observable(!1);this.stopClickPropagation=ko.observable(!0);this.
controlType=32}return __extends(t,n),t}(n.Loadable.ViewModel);t.ViewModel=i})(t=n.DockedBalloon||(n.
DockedBalloon={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(
t){"use strict";function f(n){i.push(n)}function e(){return i}var o=n.ViewModels.Controls.Command.Status,
u,r,i;(function(n){n[n.None=0]="None"})(t.Extensions||(t.Extensions={}));u=t.Extensions;r=function()
{function t(n){this.handler=ko.observable(n);this.status=ko.observable(0);this.error=ko.observable(null);
this.errorMessage=ko.observable(null)}return t.prototype.execute=function(t){var i=this,r=n.Helpers.
Deferred(),f=this.handler(),u;return this.status(1),this.error(null),this.errorMessage(null),f?f(t).
then(function(n){i.status(2);r.resolve(n)},function(n){i.status(3);i.error(n);n&&(n.message?i.errorMessage(
n.message):n.toString&&i.errorMessage(n.toString()));r.reject(n)}):(u=new Error("Command is not available for execution."),
r.reject(u),this.error(u),this.errorMessage(u.message)),r.promise()},t}();t.ExtensionCommand=r;i=[];
t.registerExtensionSetup=f;t.getExtensionSetups=e})(i=t.Editor||(t.Editor={}))})(i=t.Documents||(t.Documents=
{}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(t){"use strict";
var r=function(){function t(t,i,r){this.id=ko.observable(t||-1);this.lastUpdatedDate=ko.observable(null);
this.publishedDate=ko.observable(null);this.parentId=ko.observable(-1);this.threadId=ko.observable(-1);
this.author=ko.observable(r);this.content=ko.observable(i||"");this.canDelete=ko.observable(!1);this.
isEditable=ko.observable(!1);this.save=new n.ViewModels.Controls.Documents.Editor.ExtensionCommand}return t}
(),i;t.DiscussionCommentViewModel=r;i=function(){function t(t,i){this.id=ko.observable(t||-1);this.lastUpdatedDate=
ko.observable(null);this.publishedDate=ko.observable(null);this.comments=ko.observableArray(i);this.
save=new n.ViewModels.Controls.Documents.Editor.ExtensionCommand;this.addComment=new n.ViewModels.Controls.
Documents.Editor.ExtensionCommand;this.deleteComment=new n.ViewModels.Controls.Documents.Editor.ExtensionCommand}
return t}();t.DiscussionThreadViewModel=i})(i=t.DiscussionThread||(t.DiscussionThread={}))})(i=t.Documents||
(t.Documents={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(t){var i;(function(t){var i;(function(i){"use strict";var f,r,u;(function(n){n[n.
Discussion=1]="Discussion"})(i.Extensions||(i.Extensions={}));f=i.Extensions;r=function(n){function t(
t,i,r){n.call(this,t,i);this.position=ko.observable(r)}return __extends(t,n),t}(n.ViewModels.Controls.
Documents.DiscussionThread.DiscussionThreadViewModel);i.EditorThreadViewModel=r;u=function(){function i(
t){var i=this;this._lifetimeManager=new n.Internal.Base.TriggerableLifetimeManager;this.options=t;this.
_attachAddThreadHandler();this.options.threads.subscribeArrayAdds(this._lifetimeManager,function(n){
i._addThreadHandlers(n)});this.options.threads().forEach(function(n){i._addThreadHandlers(n)})}return i.
prototype.dispose=function(){this.options=null;this._lifetimeManager.dispose()},i.prototype._attachAddThreadHandler=
function(){var i=this,u;this.options.addThread||(this.options.addThread=new n.ViewModels.Controls.Documents.
Editor.ExtensionCommand);u=function(n){var u,f;return u=new t.DiscussionThread.DiscussionCommentViewModel(
-1,"",i.options.author()),u.canDelete(!0),u.isEditable(!0),f=new r(-(new Date).getTime(),[u],n),i.options.
threads.push(f),$.Deferred().resolve().promise()};this.options.addThread.handler(u)},i.prototype._addThreadHandlers=
function(n){var t=this;this._attachSaveThreadHandler(n);this._attachAddCommentHandler(n);this._attachDeleteCommentHandler(
n);n.comments().forEach(function(n){t._attachSaveCommentHandler(n)})},i.prototype._attachSaveThreadHandler=
function(t){var i=this,r=function(r){var u;return i.options.saveThread&&(u=i.options.saveThread(r,t,
i.options.containerName),u)?u:n.Helpers.Deferred().reject("No save handler found.").promise()};t.save.
handler(r)},i.prototype._attachAddCommentHandler=function(n){var i=this,r=function(){var r;return r=
new t.DiscussionThread.DiscussionCommentViewModel(-1,"",i.options.author()),r.canDelete(!0),r.isEditable(
!0),r.threadId(n.id()),i._attachSaveCommentHandler(r),n.comments.push(r),$.Deferred().resolve().promise(
)};n.addComment.handler(r)},i.prototype._attachDeleteCommentHandler=function(t){var i=this,r=function(
r){var u,f=t.comments().first(function(n){return n.id()===r});return f&&i.options.deleteComment&&(u=
i.options.deleteComment(t.id(),r),u)?u.then(function(){t.comments.remove(f)}):n.Helpers.Deferred().reject(
"No save handler found.").promise()};t.deleteComment.handler(r)},i.prototype._attachSaveCommentHandler=
function(t){var i=this,r=function(r){var u;return i.options.saveComment&&(u=i.options.saveComment(r,
t),u)?u:n.Helpers.Deferred().reject("No save handler found.").promise()};t.save.handler(r)},i}();i.DiscussionCommandHandler=
u;i.registerExtensionSetup(function(n,t){var i;return(n&1)!=0&&!!t.discussion?(i=new u(t.discussion),
[i]):null})})(i=t.Editor||(t.Editor={}))})(i=t.Documents||(t.Documents={}))})(i=t.Controls||(t.Controls=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(
t){"use strict";var r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAH5SURBVDhPpVJNaxNRFD3vzbyZaRqbtIGEkBYXVpeK0m6sdCWIv0JEUBctBcGFf0Nw41bBbYu4Utx0U1ChihWFQgraNqTVmKT5mpnM8943MxHswq8zDO/j3nvuufddsfS0pvEfkMn6zzhGoElPGGn0gggdP/55Hww12Y6LFbfXatomGjYGQ6AfRjiZVzhXdlHK2hgj4347wPsDHx/rPpQl4FoUKERMcGt1TytLYhBqTE/YuDGXR4VWxrfuEJ4SyKhY6Fc6P3z1HdVGACchMRaf5M3kbdxZmBwFMx69bWF9p5ucgELGwsrFSZyaUhQT3xmCfqBxcy6HLGsjpLXapNKSsdQouWM11y/kjGL2M+nYpZRVvEWrP8T9jQYOSS437tOhj9UPbcxPe7h2Pm98itSbhDcm0EJjvxWiTPJPeBJ3LxXgUPoHRDRbcHDl9DiRRSaAUWuHSE+mBEXNeFntmAtBn0vBnMDIpI/3DjU6xZN3LTgkYdREz5F4sd3F6y8945Di8mwGZ4uu2XcGEd7s9rD8rIat+sC8DsM8o20KEri3OIVKTuH59hG61FiPZmBA0g86ET43fexSmRZl5VlIYQi40xOuxNUzWTzebKJH0lMfXqSU4FHggUsHKMVokPiReITZHCv6M/zsDL8pxf1NMEMm82Gk/Srv9wB+ALD6wSjYZ9JHAAAAAElFTkSuQmCC",
u,i;(function(n){n[n.None=0]="None";n[n.Add=1]="Add";n[n.Delete=2]="Delete";n[n.Edit=3]="Edit"})(t.DiffBlockChangeType||
(t.DiffBlockChangeType={}));u=t.DiffBlockChangeType;i=function(t){function i(r,u,f){r&&r.createChildLifetime||
(r=undefined,u=arguments[0],f=arguments[1]);t.call(this,r);this.controlType=35;this.blocks=ko.observableArray(
u);this.discussionOptions=f?f:i.getDefaultDiscussionOptions();this.lifetimeManager.registerForDispose(
new n.ViewModels.Controls.Documents.Editor.DiscussionCommandHandler(this.discussionOptions))}return __extends(
i,t),i.getDefaultDiscussionOptions=function(){var n=ko.observable({id:ko.observable("0"),displayName:
ko.observable("me"),image:ko.observable("")});return{enabled:ko.observable(!0),addIcon:ko.observable(
r),addIconOnLeft:ko.observable(!0),threads:ko.observableArray([]),author:n}},i}(n.ViewModels.Controls.
Loadable.ViewModel);t.ViewModel=i})(i=t.DiffView||(t.DiffView={}))})(i=t.Documents||(t.Documents={})
)})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})
);__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){var i;(function(t){"use strict";var i=n.ViewModels.Controls.Documents.DiffView,
r=n.ViewModels.Controls.Documents.Editor,f=15,e,u;(function(n){n[n.Name=0]="Name";n[n.Path=1]="Path";
n[n.Type=2]="Type"})(t.DiffListGroupBy||(t.DiffListGroupBy={}));e=t.DiffListGroupBy;u=function(t){function u(
n,r,u,e,o,s){n&&n.createChildLifetime||(n=undefined,r=arguments[0],u=arguments[1],e=arguments[2],o=arguments[
3],s=arguments[4]);t.call(this,n);this.controlType=34;this.items=ko.observableArray(r);this.fetchDiff=
u;this.groupBy=ko.observable(e||0);this.expandLimit=ko.observable(o||f);this.expandAll=ko.observable(
r.length<=this.expandLimit());this.filterPath=ko.observable("");this.diffViewModels=ko.observableArray(
);this.discussionOptions=s?s:i.ViewModel.getDefaultDiscussionOptions();this._ensureFetchCommand();this.
_ensureItemClickCommand()}return __extends(u,t),u.prototype._ensureFetchCommand=function(){var t=this,
u=function(i){var r;return t.fetchDiff&&(r=t.fetchDiff(i.name(),i.path()),r)?r.then(function(n){return n.
blocks?(t.diffViewModels.push(t._createDiffViewModel(t.lifetimeManager,i.path()+i.name(),n.blocks,n.
threads)),null):n}):n.Helpers.Deferred().reject("No fetch handler found.").promise()},i=function(n){
n.fetch||(n.fetch=new r.ExtensionCommand(u))};this.items().forEach(function(n){i(n)});this.items.subscribeArrayAdds(
this.lifetimeManager,function(n){i(n)})},u.prototype._ensureItemClickCommand=function(){var n=this,t=
function(t){return n.itemClick&&n.itemClick(t.name(),t.path()),$.Deferred().resolve().promise()};this.
click=new r.ExtensionCommand(t)},u.prototype._createDiffViewModel=function(n,t,r,u){var f={containerName:
t,author:this.discussionOptions.author,addIcon:this.discussionOptions.addIcon,enabled:this.discussionOptions.
enabled,addIconOnLeft:this.discussionOptions.addIconOnLeft,saveThread:this.discussionOptions.saveThread,
saveComment:this.discussionOptions.saveComment,deleteComment:this.discussionOptions.deleteComment,threads:
ko.observableArray(u||[])};return new i.ViewModel(n,r,f)},u}(n.ViewModels.Controls.Loadable.ViewModel);
t.ViewModel=u})(i=t.DiffList||(t.DiffList={}))})(i=t.Documents||(t.Documents={}))})(i=t.Controls||(t.
Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){
var i;(function(i){"use strict";var f=n.ViewModels.Controls.Documents,r=function(n){function t(t,i,r,
u,f,e){n.call(this,t,i,r);this.itemName=ko.observable(u||null);this.itemPath=ko.observable(f||null);
this.isSystemMessage=ko.observable(e===!0)}return __extends(t,n),t}(f.Editor.EditorThreadViewModel),
u;i.TimelineThreadViewModel=r;u=function(i){function u(t,r,u,f,e){t&&t.createChildLifetime||(t=undefined,
r=arguments[0],u=arguments[1],f=arguments[2],e=arguments[3]);i.call(this,t);this.controlType=36;this.
discussionOptions=r;this.sortChronologically=ko.observable(u!==!1);this.showSystemMessages=ko.observable(
f!==!1);this.groupFormat=ko.observable(e||"M");this.lifetimeManager.registerForDispose(new n.ViewModels.
Controls.Documents.Editor.DiscussionCommandHandler(this.discussionOptions));this._ensureItemClickCommand(
)}return __extends(u,i),u.prototype.addNewThread=function(){var u=this.discussionOptions.threads().first(
function(n){return n.id()<0}),n,i;u||(n=new t.DiscussionThread.DiscussionCommentViewModel(-1,"",this.
discussionOptions.author()),n.canDelete(!0),n.isEditable(!0),i=new r(-(new Date).getTime(),[n]),this.
discussionOptions.threads.push(i))},u.prototype._ensureItemClickCommand=function(){var n=this,i=function(
t){return n.itemClick&&n.itemClick(t.itemPath(),t.position()),$.Deferred().resolve().promise()};this.
click=new t.Editor.ExtensionCommand(i)},u}(n.ViewModels.Controls.Loadable.ViewModel);i.ViewModel=u})
(i=t.DiscussionTimeline||(t.DiscussionTimeline={}))})(i=t.Documents||(t.Documents={}))})(i=t.Controls||
(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){
var i;(function(t){"use strict";(function(n){n[n.Text=0]="Text";n[n.Custom=1]="Custom";n[n.Bat=2]="Bat";
n[n.CoffeeScript=3]="CoffeeScript";n[n.Cpp=4]="Cpp";n[n.CSharp=5]="CSharp";n[n.CSHtml=6]="CSHtml";n[
n.Css=7]="Css";n[n.FSharp=8]="FSharp";n[n.Handlebars=9]="Handlebars";n[n.Html=10]="Html";n[n.Ini=11]=
"Ini";n[n.Jade=12]="Jade";n[n.Java=13]="Java";n[n.JavaScript=14]="JavaScript";n[n.JSHtm=15]="JSHtm";
n[n.Json=16]="Json";n[n.Less=17]="Less";n[n.Lua=18]="Lua";n[n.MarkDown=19]="MarkDown";n[n.Php=20]="Php";
n[n.PowerShell=21]="PowerShell";n[n.Python=22]="Python";n[n.Ruby=23]="Ruby";n[n.TypeScript=24]="TypeScript";
n[n.VisualBasic=25]="VisualBasic";n[n.Xaml=26]="Xaml";n[n.Xml=27]="Xml"})(t.ContentType||(t.ContentType=
{}));var r=t.ContentType,i=function(i){function r(t,r,u,f,e,o,s,h){f===void 0&&(f={});e===void 0&&(e=
null);o===void 0&&(o=0);s===void 0&&(s=null);h===void 0&&(h=null);t&&t.createChildLifetime||(t=undefined,
r=arguments[0],u=arguments[1],f=arguments[2],e=arguments[3],o=arguments[4],s=arguments[5],h=arguments[
6]);i.call(this,t);this.controlType=37;this.contentType=ko.observable(r);this.customContentType=ko.observable(
e);this.content=ko.observable(u);this.contentUri=ko.observable();this.selectedContent=ko.observable(
"");this.selectedRange=ko.observable({startLineNumber:1,startColumn:1,endLineNumber:1,endColumn:1});
this.position=ko.observable({lineNumber:1,column:1});this.options=ko.observable(f);this.dirty=ko.observable(
!1);this.save=new n.ViewModels.Controls.Command.ViewModel(t,"");this.extensions=o;this.extensionOptions=
s;this.configuration=h;this.content.extend({notify:"always"});this._setupExtensions()}return __extends(
r,i),r.prototype._setupExtensions=function(){for(var i,f=t.getExtensionSetups(),r,n=0,u=f.length;n<u;
n++)i=f[n],i&&(r=i(this.extensions,this.extensionOptions),r&&this._addDisposablesToCleanUp(r))},r}(n.
ViewModels.Controls.Loadable.ViewModel);t.ViewModel=i})(i=t.Editor||(t.Editor={}))})(i=t.Documents||
(t.Documents={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(n){function t(
t,i,r,u,f,e,o){f===void 0&&(f={});e===void 0&&(e=0);o===void 0&&(o=null);t&&t.createChildLifetime?n.
call(this,t,i,u,f,null,e,o):(t=undefined,i=arguments[0],r=arguments[1],u=arguments[2],f=arguments[3],
e=arguments[4],o=arguments[5],f===void 0&&(f={}),e===void 0&&(e=0),o===void 0&&(o=null),n.call(this,
i,u,f,null,e,o));this.controlType=33;this.originalContent=ko.observable(r);this.originalContent.extend(
{notify:"always"})}return __extends(t,n),t}(n.ViewModels.Controls.Documents.Editor.ViewModel);t.ViewModel=
i})(i=t.DiffEditor||(t.DiffEditor={}))})(i=t.Documents||(t.Documents={}))})(i=t.Controls||(t.Controls=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){var i;(function(
t){"use strict";var i=function(n){function t(){n.apply(this,arguments);this.min=ko.observable(0);this.
max=ko.observable(10);this.slidableMin=ko.observable();this.slidableMax=ko.observable();this.step=ko.
observable(1);this.numStepsPerPage=5;this.showStepMarkers=ko.observable(!0)}return __extends(t,n),t}
(n.ValidatableControl.ViewModel);t.ViewModel=i})(i=t.SliderBase||(t.SliderBase={}))})(t=n.Forms||(n.
Forms={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
n){var t;(function(t){var i;(function(t){"use strict";var r,u,f,i;(function(n){n[n.LeftTop=3]="LeftTop";
n[n.RightTop=5]="RightTop";n[n.LeftBottom=10]="LeftBottom";n[n.RightBottom=12]="RightBottom"})(t.PositioningAlignment||
(t.PositioningAlignment={}));r=t.PositioningAlignment,function(n){n[n.BottomRight=0]="BottomRight";n[
n.TopRight=1]="TopRight";n[n.BottomLeft=2]="BottomLeft";n[n.TopLeft=3]="TopLeft"}(t.DropDownPositioning||
(t.DropDownPositioning={}));u=t.DropDownPositioning,function(n){n[n.Default=0]="Default";n[n.Full=1]=
"Full";n[n.MinWidgetMaxContent=2]="MinWidgetMaxContent"}(t.DropDownWidth||(t.DropDownWidth={}));f=t.
DropDownWidth;i=function(n){function t(t){n.call(this,t);this.popupAlignment=5;this.inputAlignment=12;
this.dropDownPositioning=ko.observable(0);this.dropDownWidth=ko.observable(0)}return __extends(t,n),
t}(n.ValidatableControl.ViewModel);t.ViewModel=i})(i=t.EditableCombo||(t.EditableCombo={}))})(t=n.Forms||
(n.Forms={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){var i;(function(t){"use strict";(function(n){n[n.Initial=0]="Initial";n[n.Hover=
1]="Hover";n[n.Active=2]="Active"})(t.MouseState||(t.MouseState={}));var r=t.MouseState,i=function(n)
{function t(t){n.call(this,t);this.submit=!1;this.selector=ko.observable();this.click=$.noop;this.uri=
ko.observable();this.text=ko.observable();this.visible=ko.observable(!0);this.isDefault=ko.observable(
!1);this.controlType=38}return __extends(t,n),t}(n.ViewModels.Controls.Loadable.ViewModel);t.ViewModel=
i})(i=t.Button||(t.Button={}))})(i=t.Forms||(t.Forms={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(t){var i;
(function(t){"use strict";(function(n){n[n.Unchecked=0]="Unchecked";n[n.Checked=1]="Checked";n[n.Indeterminate=
2]="Indeterminate"})(t.Value||(t.Value={}));var r=t.Value,i=function(n){function t(t){n.call(this,t);
this.isTriState=!1;this.inputId="";this.inputCheckedValue=ko.observable("checked");this.inputIndeterminateValue=
ko.observable("indeterminate");this.controlType=39;this.value(0)}return __extends(t,n),t}(n.ViewModels.
Controls.ValidatableControl.ViewModel);t.ViewModel=i})(i=t.CheckBox||(t.CheckBox={}))})(i=t.Forms||(t.
Forms={}))})(i=t.Controls||(t.Controls={}))})(i=t.Obsolete||(t.Obsolete={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){var t;(function(n){var t;(function(t){var i;(function(t){"use strict";var i=function(
n){function t(t){n.call(this,t);this.value=ko.observable();this.controlType=40}return __extends(t,n),
t}(n.Loadable.ViewModel);t.ViewModel=i})(i=t.CopyableLabel||(t.CopyableLabel={}))})(t=n.Forms||(n.Forms=
{}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(n){function t(
t){n.call(this,t);this.formatString=ko.observable("D");this.controlType=41;this.value(null)}return __extends(
t,n),t}(n.ViewModels.Controls.Forms.EditableCombo.ViewModel);t.ViewModel=i})(i=t.DateTimeCombo||(t.DateTimeCombo=
{}))})(i=t.Forms||(t.Forms={}))})(i=t.Controls||(t.Controls={}))})(i=t.Obsolete||(t.Obsolete={}))})(
t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(
t){var i;(function(t){"use strict";var i=function(n){function t(t){n.call(this,t);this.items=ko.observableArray(
);this.controlType=42}return __extends(t,n),t}(n.ViewModels.Controls.ValidatableControl.ViewModel);t.
ViewModel=i})(i=t.DropDown||(t.DropDown={}))})(i=t.Forms||(t.Forms={}))})(i=t.Controls||(t.Controls=
{}))})(i=t.Obsolete||(t.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
n){var t;(function(t){var i;(function(t){"use strict";(function(n){n[n.Invalid=0]="Invalid";n[n.Pending=
1]="Pending";n[n.Uploading=2]="Uploading";n[n.Paused=3]="Paused";n[n.Complete=4]="Complete"})(t.UploadStatus||
(t.UploadStatus={}));var r=t.UploadStatus,i=function(n){function t(t){n.call(this,t);this.accept="";
this.maxFiles=1;this.sizeLimit=209715200;this.showProgressBars=ko.observable(!0);this.files=ko.observable(
[]);this.controlType=28}return __extends(t,n),t}(n.ValidatableControl.ViewModel);t.ViewModel=i})(i=t.
FileUpload||(t.FileUpload={}))})(t=n.Forms||(n.Forms={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){var i;(function(t){"use strict";
var i=function(n){function t(t){n.call(this,t);this.groupInfos=[];this.itemsDataArray=[];this.areItemsInitialized=
ko.observable(!1);this.items=ko.observableArray();this.controlType=44}return __extends(t,n),t}(n.ValidatableControl.
ViewModel);t.ViewModel=i})(i=t.GroupDropDown||(t.GroupDropDown={}))})(t=n.Forms||(n.Forms={}))})(t=n.
Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t)
{var i;(function(t){var i;(function(t){var i;(function(t){"use strict";(function(n){n[n.Default=0]="Default";
n[n.AfterKeyDown=1]="AfterKeyDown";n[n.KeyPress=2]="KeyPress";n[n.Blur=3]="Blur";n[n.Input=4]="Input"}
)(t.ValueUpdateTrigger||(t.ValueUpdateTrigger={}));var r=t.ValueUpdateTrigger,i=function(n){function t(
t){n.call(this,t);this.rows=ko.observable(7);this.placeholder=ko.observable(null);this.maxLength=ko.
observable(null);this.controlType=45}return __extends(t,n),t}(n.ViewModels.Controls.TypableControl.ViewModel);
t.ViewModel=i})(i=t.MultiLineTextBox||(t.MultiLineTextBox={}))})(i=t.Forms||(t.Forms={}))})(i=t.Controls||
(t.Controls={}))})(i=t.Obsolete||(t.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(t){var i;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(
n){function t(t){n.call(this,t);this.groupInfos=ko.observableArray([]);this.itemsDataArray=ko.observableArray(
[]);this.itemSetting=ko.observable();this.areItemsInitialized=ko.observable(!1);this.multiselect=ko.
observable(!0);this.dropdownPopupName=ko.observable("multiselect dropdown popup");this.selectedRowsCount=
ko.observable(0);this.selectedDisplayString=ko.observable();this.maxSelectAllowed=ko.observable();this.
multiItemsDisplayFormat=ko.observable("");this.multiItemsMaxDisplayFormat=ko.observable("");this.trackMaxSelectDisabledItems=
!0;this.disableItemsWhenMaxReached=!0;this.valueSeparator=String.fromCharCode(29);this.displaySeparator=
";";this.valueInitialized=!1;this.controlType=46}return __extends(t,n),t}(n.ViewModels.Controls.ValidatableControl.
ViewModel);t.ViewModel=i})(i=t.MultiselectDropDown||(t.MultiselectDropDown={}))})(i=t.Forms||(t.Forms=
{}))})(i=t.Controls||(t.Controls={}))})(i=t.Obsolete||(t.Obsolete={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(t){var i;(function(t){"use strict";
var i=function(n){function t(t){n.call(this,t);this.min=ko.observable(null);this.max=ko.observable(null);
this.decimalPoint=ko.observable(2);this.placeholder=ko.observable(null);this.invalidText="Value must be a valid number.";
this.controlType=47}return __extends(t,n),t}(n.ViewModels.Controls.ValidatableControl.ViewModel);t.ViewModel=
i})(i=t.NumericTextBox||(t.NumericTextBox={}))})(i=t.Forms||(t.Forms={}))})(i=t.Controls||(t.Controls=
{}))})(i=t.Obsolete||(t.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(n){function t(
t){n.call(this,t);this.controlType=48}return __extends(t,n),t}(n.ViewModels.Controls.ItemList.ViewModel);
t.ViewModel=i})(i=t.OptionPicker||(t.OptionPicker={}))})(i=t.Forms||(t.Forms={}))})(i=t.Controls||(t.
Controls={}))})(i=t.Obsolete||(t.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(n){function t(
t){n.call(this,t);this.controlType=49}return __extends(t,n),t}(n.ViewModels.Controls.ValidatableControl.
ViewModel);t.ViewModel=i})(i=t.Password||(t.Password={}))})(i=t.Forms||(t.Forms={}))})(i=t.Controls||
(t.Controls={}))})(i=t.Obsolete||(t.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){var t;(function(n){var t;(function(
n){"use strict";(function(n){n[n.SpinnerSmall=0]="SpinnerSmall"})(n.Type||(n.Type={}));var t=n.Type}
)(t=n.ProgressOverlay||(n.ProgressOverlay={}))})(t=n.Forms||(n.Forms={}))})(t=n.Controls||(n.Controls=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(
t){var i;(function(t){"use strict";var i=function(n){function t(t){n.call(this,t);this.start=ko.observable(
);this.end=ko.observable();this.valueSeparator=";";this.showTextBoxes=!0;this.controlType=50}return __extends(
t,n),t}(n.ViewModels.Controls.Forms.SliderBase.ViewModel);t.ViewModel=i})(i=t.RangeSlider||(t.RangeSlider=
{}))})(i=t.Forms||(t.Forms={}))})(i=t.Controls||(t.Controls={}))})(i=t.Obsolete||(t.Obsolete={}))})(
t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(i){var r;(function(i){var r;(function(
i){var r;(function(i){"use strict";var r=function(i){function r(r,u,f){r&&r.createChildLifetime||(r=
undefined,u=arguments[0],f=arguments[1]);i.call(this,r);this.controlType=51;this.label=ko.observable(
"");this.defaultValue=ko.observable();this.showValue=ko.observable(!0);this.displayText=ko.observable(
"");this.icon=ko.observable();this.locked=ko.observable(!1);this.infoBalloonText=ko.observable("");this.
lockedBalloonText=ko.observable("");this.infoBalloonLink=ko.observable(new n.ViewModels.Controls.Balloon.
Link);this.selectable=new t.Selectable({allowUnselect:!1,selectedValue:f!==undefined?f:null,isSelected:
u&&u.selectable&&u.selectable.isSelected,isActivated:u&&u.selectable&&u.selectable.isActivated})}return __extends(
r,i),r.prototype.dispose=function(){this.selectable&&this.selectable.dispose();i.prototype.dispose.call(
this)},r}(n.ViewModels.Controls.ValidatableControl.ViewModel);i.ViewModel=r})(r=i.Selector||(i.Selector=
{}))})(r=i.Forms||(i.Forms={}))})(r=i.Controls||(i.Controls={}))})(i=t.Obsolete||(t.Obsolete={}))})(
t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(
t){var i;(function(t){"use strict";var i=function(n){function t(t){n.call(this,t);this.showValueTextBox=
!0;this.controlType=52}return __extends(t,n),t}(n.ViewModels.Controls.Forms.SliderBase.ViewModel);t.
ViewModel=i})(i=t.Slider||(t.Slider={}))})(i=t.Forms||(t.Forms={}))})(i=t.Controls||(t.Controls={}))}
)(i=t.Obsolete||(t.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));
__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
n){var t;(function(t){var i;(function(t){"use strict";var u,i,r;(function(n){n[n.Default=0]="Default";
n[n.AfterKeyDown=1]="AfterKeyDown";n[n.KeyPress=2]="KeyPress";n[n.Blur=3]="Blur";n[n.Input=4]="Input"}
)(t.ValueUpdateTrigger||(t.ValueUpdateTrigger={}));u=t.ValueUpdateTrigger;i=function(){function n(){
this.enterPressed=$.noop}return n}();t.Events=i;r=function(n){function t(t){n.call(this,t);this.placeholder=
ko.observable();this.events=new i;this.controlType=53}return __extends(t,n),t}(n.TypableControl.ViewModel);
t.ViewModel=r})(i=t.TextBox||(t.TextBox={}))})(t=n.Forms||(n.Forms={}))})(t=n.Controls||(n.Controls=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
n){var t;(function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.Grid||(n.Grid={}))})(t=
n.Lists||(n.Lists={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(t){var i;(function(t){var i;(function(t){"use strict";var i,r,f,e,o,s,h,c,l,a,u;(
function(n){n[n.SortableColumn=1]="SortableColumn";n[n.SelectableRow=2]="SelectableRow";n[n.RightClickableRow=
4]="RightClickableRow";n[n.Groupable=8]="Groupable";n[n.EditableRow=16]="EditableRow";n[n.Filterable=
32]="Filterable";n[n.ReorderRow=64]="ReorderRow";n[n.ContextMenuShortcut=128]="ContextMenuShortcut";
n[n.Pageable=256]="Pageable";n[n.Hierarchical=512]="Hierarchical";n[n.Scrollable=1024]="Scrollable";
n[n.Hoverable=2048]="Hoverable";n[n.ResizableColumn=4096]="ResizableColumn"})(t.Extensions||(t.Extensions=
{}));i=t.Extensions,function(n){n[n.Html=1]="Html";n[n.Text=2]="Text"}(t.Format||(t.Format={}));r=t.
Format,function(n){n[n.ShortTime=100]="ShortTime";n[n.LongTime=101]="LongTime";n[n.ShortDate=102]="ShortDate";
n[n.LongDate=103]="LongDate";n[n.MonthDay=104]="MonthDay";n[n.YearMonth=105]="YearMonth";n[n.CustomDate=
106]="CustomDate";n[n.Uri=107]="Uri";n[n.Icon=108]="Icon";n[n.IconLookup=109]="IconLookup";n[n.TextLookup=
110]="TextLookup";n[n.SvgIcon=111]="SvgIcon";n[n.SvgIconLookup=112]="SvgIconLookup";n[n.PercentageBar=
113]="PercentageBar"}(t.Format||(t.Format={}));r=t.Format,function(n){n[n.HtmlBindings=1e3]="HtmlBindings"}
(t.Format||(t.Format={}));r=t.Format,function(n){n[n.Default=0]="Default";n[n.CheckBox=1]="CheckBox";
n[n.TextBox=2]="TextBox";n[n.MultiselectDropDown=3]="MultiselectDropDown";n[n.CheckBoxRowSelection=4]=
"CheckBoxRowSelection";n[n.DropDown=5]="DropDown"}(t.HtmlBindingsType||(t.HtmlBindingsType={}));f=t.
HtmlBindingsType,function(n){n[n.None=0]="None";n[n.Above=1]="Above";n[n.Below=2]="Below";n[n.Overlay=
3]="Overlay"}(t.PercentageBarTextLocation||(t.PercentageBarTextLocation={}));e=t.PercentageBarTextLocation,
function(n){n[n.Off=0]="Off";n[n.Single=1]="Single";n[n.Multiple=2]="Multiple"}(t.RowSelectionMode||
(t.RowSelectionMode={}));o=t.RowSelectionMode,function(n){n[n.Default=0]="Default";n[n.Checked=1]="Checked"}
(t.SelectionStyle||(t.SelectionStyle={}));s=t.SelectionStyle,function(n){n[n.Unsorted=0]="Unsorted";
n[n.Ascending=1]="Ascending";n[n.Descending=2]="Descending"}(t.SortOrder||(t.SortOrder={}));h=t.SortOrder,
function(n){n[n.Default=0]="Default";n[n.DateTime=1]="DateTime"}(t.SortFunction||(t.SortFunction={})
);c=t.SortFunction,function(n){n[n.Bottom=0]="Bottom";n[n.Top=1]="Top"}(t.EditableRowPlacement||(t.EditableRowPlacement=
{}));l=t.EditableRowPlacement,function(n){n[n.Sequential=0]="Sequential";n[n.Pageable=1]="Pageable"}
(t.PageableType||(t.PageableType={}));a=t.PageableType;u=function(t){function r(i,r,u,f){var e=this,
w,l,b,v,k,d,g;i&&i.createChildLifetime||(i=undefined,r=arguments[0],u=arguments[1],f=arguments[2]);t.
call(this,i);this.controlType=54;this.summary=ko.observable();this.columns=ko.observableArray([]);this.
resetCallback=ko.observable();this.noRowsMessage=ko.observable();this.sortByList=ko.observableArray(
[]);this.showHeader=!0;this._resetHandler=null;this._createBlocked=!1;this._addCreatedLocked=!1;this.
_pendingResetCallbackPromise=null;this._pendingResetCallbackSubscription=null;this.extensions=u;this.
extensionsOptions=f;this.createdItems=ko.observableArray([]);this.items=r||ko.observableArray();this.
extensions=this.extensions|n.ViewModels.Controls.Lists.Grid.Extensions.ResizableColumn;var y=this.extensions&
n.ViewModels.Controls.Lists.Grid.Extensions.EditableRow,o=y&&this.extensionsOptions&&this.extensionsOptions.
editableRow,a=this.extensions&n.ViewModels.Controls.Lists.Grid.Extensions.Pageable,s=a&&this.extensionsOptions&&
this.extensionsOptions.pageable,nt=this.extensions&n.ViewModels.Controls.Lists.Grid.Extensions.ResizableColumn,
p=nt&&this.extensionsOptions&&this.extensionsOptions.resizableColumn,tt=this.extensions&1,it=tt&&this.
extensionsOptions&&this.extensionsOptions.sortableColumn,c=this.extensions&n.ViewModels.Controls.Lists.
Grid.Extensions.Scrollable,h=c&&this.extensionsOptions&&this.extensionsOptions.scrollable;if(this.addEmptyRow=
ko.observable(),o){if(o.editScope&&r)throw new Error("Do not supply 'items' if you are using the editable row grid extension.");
this._editScope=o.editScope;o.editScope=null;o.getItems||(o=$.extend({},{getItems:function(n){if(!(ko.
isObservable(n.root)&&Array.isArray(n.root())&&n.root.splice))throw new Error("EditScope root must be an observable array.");
return n.root}},o));this._projectItems(this.items,function(){var n=e._editScope();return n&&e._getEditScopeItems(
n,o.getItems)});this._projectItems(this.createdItems,function(){var n=e._editScope();return n&&n.getCreated(
e._getEditScopeItems(n,o.getItems))});w=ko.computed(function(){return!!e._editScope()});this._addDisposablesToCleanUp(
w);$.extend(this.extensionsOptions.editableRow,{create:function(){return e._create(e._getNonNullEditScope(
e._editScope),o.getItems)},addCreated:function(n){e._addCreated(e._getNonNullEditScope(e._editScope),
o.getItems,n)},markForDelete:function(n){e._markForDelete(e._getNonNullEditScope(e._editScope),n)},enableValidation:
w});o.enableRowAdd!==!1&&this._addInitialCreatedRow(this._editScope,o.getItems);this.extensions=this.
extensions|n.ViewModels.Controls.Lists.Grid.Extensions.SelectableRow|n.ViewModels.Controls.Lists.Grid.
Extensions.RightClickableRow;this._ensureSelectableRow()}if(a){if(y)throw new Error("Pageable extension and EditableRow extension cannot be used together.");
if(c)throw new Error("Pageable extension and Scrollable extension cannot be used together.");if(!s||
!s.dataNavigator)throw new Error("A valid data navigator should be supplied to fetch the grid items");
if(s&&s.dataNavigator&&r)throw new Error("Do not supply 'items' if you are using the pageable extension with data navigator.");
if(s.type=typeof s.type=="undefined"?0:s.type,s.type===0&&!s.dataNavigator.loadByContinuationToken)throw new
Error("DataNavigator should support sequential data access when its type is Sequential. You must provide 'loadByContinuationToken' implementation.");
if(s.type===1&&!s.dataNavigator.loadBySkipTake)throw new Error("DataNavigator should support skip/take data access when its type is Pageable. You must provide 'loadBySkipTake' implementation.");
this._resetHandler=function(){return e.reset()};s.dataNavigator.addResetNavigationListener(this._resetHandler)}
if(nt&&!p&&(p={},c&&(this.extensionsOptions.resizableColumn={resizeToPercent:ko.observable(!1)},p.resizeToPercent=
ko.observable(!1))),tt&&(a&&s&&s.dataNavigator?l=s.dataNavigator:c&&h&&h.dataNavigator&&(l=h.dataNavigator),
l&&(it?it.dataNavigator=l:this.extensionsOptions.sortableColumn={dataNavigator:l})),c){if(y)throw new
Error("Scrollable extension and EditableRow extension cannot be used together.");if(a)throw new Error(
"Scrollable extension and Pageable extension cannot be used together.");if(h&&h.dataNavigator){if(r)
throw new Error("Do not supply 'items' if you are using the scrollable extension with data navigator.");
this._resetHandler=function(){return e.reset()};h.dataNavigator.addResetNavigationListener(this._resetHandler)}
}this.extensions&n.ViewModels.Controls.Lists.Grid.Extensions.ContextMenuShortcut&&(this.extensions|=
n.ViewModels.Controls.Lists.Grid.Extensions.RightClickableRow,this.extensionsOptions=this.extensionsOptions||
{});this.extensions&n.ViewModels.Controls.Lists.Grid.Extensions.RightClickableRow&&(this.extensions|=
n.ViewModels.Controls.Lists.Grid.Extensions.SelectableRow,this.extensionsOptions=this.extensionsOptions||
{},this._ensureSelectableRow());this.extensions&n.ViewModels.Controls.Lists.Grid.Extensions.SelectableRow&&
this.extensionsOptions&&this.extensionsOptions.selectableRow&&(v=this.extensionsOptions.selectableRow,
this.extensions|=n.ViewModels.Controls.Lists.Grid.Extensions.RightClickableRow,b=this.items,this.createdItems&&
(k=ko.computed(function(){return e.items().concat(e.createdItems())}),b=k,this._addDisposablesToCleanUp(
k)),this.selectableData=new n.ViewModels.SelectableSet(b,v.itemMatchesSelection,v.createSelection,v.
initialSelection));d=this.items.map(function(n){return e._createMetadataForItem(n,o)});g=this.createdItems.
map(function(n){return e._createMetadataForItem(n,o)});this._addDisposablesToCleanUp([d,g]);this.rowMetadata=
ko.observableArray();this._addDisposablesToCleanUp(ko.computed(function(){e.rowMetadata(d().concat(g(
)))}))}return __extends(r,t),r.prototype.getRowMetadata=function(n){return this.rowMetadata().first(
function(t){return t.item===n})},r.prototype.reset=function(){var n=this,t;return this.resetCallback(
)?this.resetCallback()():(this._pendingResetCallbackPromise||(t=Q.defer(),this._pendingResetCallbackPromise=
t.promise,this._pendingResetCallbackSubscription=this.resetCallback.subscribe(function(i){i&&(n._pendingResetCallbackPromise?
i().then(function(){t.resolve()},function(){t.reject()}).finally(function(){n._pendingResetCallbackSubscription&&
(n._pendingResetCallbackSubscription.dispose(),n._pendingResetCallbackSubscription=null);n._pendingResetCallbackPromise=
null}):t.reject())})),this._pendingResetCallbackPromise)},r.prototype.dispose=function(){if(this.selectableData&&
this.selectableData.dispose(),this._resetHandler){var n=this.extensionsOptions&&this.extensionsOptions.
pageable;n&&n.dataNavigator&&n.dataNavigator.removeResetNavigationListener(this._resetHandler);this.
_resetHandler=null}this._pendingResetCallbackSubscription&&(this._pendingResetCallbackSubscription.dispose(
),this._pendingResetCallbackSubscription=null);this._pendingResetCallbackPromise&&(this._pendingResetCallbackPromise=
null);t.prototype.dispose.call(this)},r.prototype._createMetadataForItem=function(n,t){var r={item:n,
cssClass:ko.observable("")};return t&&(r.editState=this._getNonNullEditScope(this._editScope).getEditState(
n)),this.extensions&i.SelectableRow&&(r.selected=ko.observable(!1),r.disabled=ko.observable(!1),r.activated=
ko.observable(null),r.activatedInfo=ko.observable(null)),this.extensions&i.Groupable&&(r.groupId=ko.
observable("")),r},r.prototype._ensureSelectableRow=function(){this.extensionsOptions.selectableRow||
(this.extensionsOptions.selectableRow={selectionMode:1})},r.prototype._create=function(n,t){if(!this.
_createBlocked){this._createBlocked=!0;var i=n.create(this._getEditScopeItems(n,t));return this.extensionsOptions&&
this.extensionsOptions.editableRow&&this.extensionsOptions.editableRow.created&&this.extensionsOptions.
editableRow.created(i),this.addEmptyRow(i),$.Deferred().resolve(i).promise()}},r.prototype._addCreated=
function(n,t,i){if(!this._addCreatedLocked)try{this._addCreatedLocked=!0;var r=this.addEmptyRow(),u=
this.createdItems().some(function(n){return n&&i&&n===i});r&&i&&r===i&&!u&&(n.addCreated(r,this._getEditScopeItems(
n,t)),this._createBlocked=!1)}finally{this._addCreatedLocked=!1}},r.prototype._markForDelete=function(
t,i){var u=function(n){return n===i},r=this.items().first(u);if(r){t.markForDelete(r);return}if(r=this.
createdItems().first(u),r){t.revert(r);return}n.Base.Diagnostics.Log.writeEntry(2,"Shell","The item marked for deletion could not be found.")}
,r.prototype._addInitialCreatedRow=function(n,t){var f=this,i=function(n){f._create(n,t)},r=n(),u;r?
i(r):u=n.subscribe(function(n){n&&(i(n),u.dispose())})},r.prototype._projectItems=function(n,t){var i=
ko.computed(function(){var i=t(),r=i?i():[];n.splice.apply(n,[0,n().length].concat(r))});this._addDisposablesToCleanUp(
i)},r.prototype._getEditScopeItems=function(n,t){return t(n)},r.prototype._getNonNullEditScope=function(
n){var t=n();if(!t)throw new Error("An editable grid should block interaction until an EditScope has been loaded.");
return t},r}(n.ViewModels.Controls.Loadable.ViewModel);t.ViewModel=u})(i=t.Grid||(t.Grid={}))})(i=t.
Lists||(t.Lists={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(t){var i;(function(i){var r;(function(i){"use strict";var u,f,e,r;(function(n){n[
n.Selectable=1]="Selectable";n[n.Groupable=2]="Groupable"})(i.Extensions||(i.Extensions={}));u=i.Extensions,
function(n){n[n.Collection=0]="Collection";n[n.Ascending=1]="Ascending";n[n.Descending=2]="Descending"}
(i.GroupOrder||(i.GroupOrder={}));f=i.GroupOrder,function(n){n[n.Single=0]="Single";n[n.Multiple=1]=
"Multiple"}(i.SelectionMode||(i.SelectionMode={}));e=i.SelectionMode;r=function(t){function i(i,r,u)
{r===void 0&&(r=0);u===void 0&&(u={});i&&i.createChildLifetime||(i=undefined,r=arguments[0],u=arguments[
1],r===void 0&&(r=0),u===void 0&&(u={}));t.call(this,i);this.controlType=56;this.items=ko.observableArray(
[]);this.events=$.noop;this.noItemsMessage=ko.observable("");this.extensions=r;this.extensionOptions=
u;this.extensions&1&&(this.extensionOptions.selectable||(this.extensionOptions.selectable={}),(this.
extensionOptions.selectable.selectionMode===undefined||this.extensionOptions.selectable.selectionMode===
null)&&(this.extensionOptions.selectable.selectionMode=0),this.extensionOptions.selectable.selectedItem||
this.extensionOptions.selectable.selectionMode!==0||(this.extensionOptions.selectable.selectedItem=ko.
observable()),this.extensionOptions.selectable.selection||(this.extensionOptions.selectable.selection=
new n.ViewModels.SelectableSet(this.items)),(this.extensionOptions.selectable.activateOnSelected===undefined||
this.extensionOptions.selectable.activateOnSelected===null)&&(this.extensionOptions.selectable.activateOnSelected=
!0));this.extensions&2&&(this.extensionOptions.groupable||(this.extensionOptions.groupable={}),this.
extensionOptions.groupable.groupKey||(this.extensionOptions.groupable.groupKey=ko.observable("")),this.
extensionOptions.groupable.headerTemplate||(this.extensionOptions.groupable.headerTemplate=null),this.
extensionOptions.groupable.groups||(this.extensionOptions.groupable.groups=null),this.extensionOptions.
groupable.noGroupLabel||(this.extensionOptions.groupable.noGroupLabel=""),this.extensionOptions.groupable.
order||(this.extensionOptions.groupable.order=ko.observable(0)))}return __extends(i,t),i}(t.Loadable.
ViewModel);i.ViewModel=r})(r=i.ListView||(i.ListView={}))})(i=t.Lists||(t.Lists={}))})(i=t.Controls||
(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(n){
var t;(function(t){"use strict";var i=function(n){function t(t,i,r){t&&t.createChildLifetime?n.call(
this,t,i,r):(t=undefined,i=arguments[0],r=arguments[1],n.call(this,i,r));this.controlType=55}return __extends(
t,n),t}(n.ListView.ViewModel);t.ViewModel=i})(t=n.Gallery||(n.Gallery={}))})(t=n.Lists||(n.Lists={})
)})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})
);__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){var i;(function(t){"use strict";(function(n){n[n.Selectable=1]="Selectable";n[
n.OnDemandLoadable=2]="OnDemandLoadable";n[n.RightClickable=4]="RightClickable"})(t.Extensions||(t.Extensions=
{}));var r=t.Extensions,i=function(n){function t(t,i,r,u){t&&t.createChildLifetime||(t=undefined,i=arguments[
0],r=arguments[1],u=arguments[2]);n.call(this,t);this.controlType=57;this.padding=ko.observable(16);
this.alwaysExpanded=ko.observable(!1);this.htmlTemplates=[];this.toggleNodeCallback=ko.observable();
this.pathSeparator="/";this.items=i||ko.observableArray();this.extensions=r||0;this.extensionsOptions=
u;this._processItems(this.items);this._selectableExists&&this._setupSelectable();this._loadableExists&&
this._setupOnDemandLoadable()}return __extends(t,n),t.prototype.dispose=function(){n.prototype.dispose.
call(this)},t.prototype.expandNode=function(n){this.toggleNodeCallback()&&this.toggleNodeCallback()(
n,!0)},t.prototype.collapseNode=function(n){this.toggleNodeCallback()&&this.toggleNodeCallback()(n,!1)}
,t.prototype.toggleNode=function(n,t){t===undefined&&(t=!n.metadata.expanded());this.toggleNodeCallback(
)&&this.toggleNodeCallback()(n,t)},Object.defineProperty(t.prototype,"_selectableExists",{get:function(
){return(this.extensions&1)>0&&!!this.extensionsOptions.selectable},enumerable:!0,configurable:!0}),
Object.defineProperty(t.prototype,"_loadableExists",{get:function(){return(this.extensions&2)>0&&!!this.
extensionsOptions.onDemandLoadable},enumerable:!0,configurable:!0}),t.prototype._processItems=function(
n){var t=this;n().forEach(function(n){t._processItem(n)});n.subscribeArrayAdds(this.lifetimeManager,
function(n){t._processItem(n)});this.lifetimeManager.registerForDispose(n.subscribe(function(n){n.forEach(
function(n){t._processItem(n)})}))},t.prototype._processItem=function(n){n.metadata||(n.metadata={});
n.metadata.disabled||(n.metadata.disabled=ko.observable(!1));n.metadata.expanded||(n.metadata.expanded=
ko.observable(!1));this._selectableExists&&!n.metadata.selected&&(n.metadata.selected=ko.observable(
!1));this._selectableExists&&!n.metadata.selectable&&(n.metadata.selectable=ko.observable(!0));this.
_selectableExists&&!n.metadata.focused&&(n.metadata.focused=ko.observable(!1));this._loadableExists&&
!n.metadata.loadable&&(n.metadata.loadable=ko.observable());n.items||(n.items=ko.observableArray());
this._processItems(n.items)},t.prototype._setupSelectable=function(){var n=this;this.selectableData=
{selectedItem:ko.observable(),selectedPath:ko.observable()};this.lifetimeManager.registerForDispose(
this.selectableData.selectedPath.subscribe(function(t){var i=n._findItemByPath(n.items,t,n.pathSeparator);
i&&n.selectableData.selectedItem(n.extensionsOptions.selectable.createSelection(i,t))}))},t.prototype.
_setupOnDemandLoadable=function(){var n=this;this.onDemandLoadableData={loadingPath:ko.observable()};
this.lifetimeManager.registerForDispose(this.onDemandLoadableData.loadingPath.subscribe(function(t){
var i=n._findItemByPath(n.items,t,n.pathSeparator);i&&n.extensionsOptions.onDemandLoadable.loadItem(
i,t)}))},t.prototype._findItemByPath=function(n,t,i){var r,e,o,f,s=n,u=null;if(t)for(f=t.split(i),r=
0,e=f.length;r<e;r++)if(o=f[r].toLowerCase(),u=s().filter(function(n){return o===n.text().toLowerCase(
)})[0],u)s=u.items||ko.observableArray();else break;return u},t}(n.ViewModels.Controls.Loadable.ViewModel);
t.ViewModel=i})(i=t.TreeView||(t.TreeView={}))})(i=t.Lists||(t.Lists={}))})(i=t.Controls||(t.Controls=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";
var i=function(n){function t(t){n.call(this,t);this.show=ko.observable(!1);this.controlType=89}return __extends(
t,n),t}(n.Base.ViewModel);t.ViewModel=i})(t=n.PreviewTag||(n.PreviewTag={}))})(t=n.Controls||(n.Controls=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";
var i=function(n){function t(t){n.call(this,t);this.autoRefreshContent=!0;this.refreshContainerOnResize=
!0;this.scrollIntoViewVertical=!0;this.scrollIntoViewHorizontal=!0;this.fitContainer=!1;this.controlType=
59}return __extends(t,n),t}(n.Loadable.ViewModel);t.ViewModel=i})(t=n.Scrollbar||(n.Scrollbar={}))})
(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n)
{var t;(function(t){"use strict";(function(n){n[n.Small=2]="Small";n[n.Large=3]="Large"})(t.Size||(t.
Size={}));var r=t.Size,i=function(n){function t(t){n.call(this,t);this.items=ko.observableArray([]);
this.maxItems=ko.observable();this.size=ko.observable(2);this.controlType=60}return __extends(t,n),t}
(n.Loadable.ViewModel);t.ViewModel=i})(t=n.Settings||(n.Settings={}))})(t=n.Controls||(n.Controls={})
)})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";
var i=function(n){function t(t){n.call(this,t);this.value=ko.observable();this.unit=ko.observable();
this.caption=ko.observable();this.infoBalloon=ko.observable();this.hideInfoBalloon=ko.observable(!1);
this.controlType=61}return __extends(t,n),t}(n.Loadable.ViewModel);t.ViewModel=i})(t=n.SingleSetting||
(n.SingleSetting={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(t){var i;(function(t){"use strict";var l=window,i=[],f="azc-validatableControl-none",
e="azc-validatableControl-invalid",o="azc-validatableControl-pending",r="azc-validatableControl-valid-validated",
s="data-validatable-control-valid",c="data-validatable-control-validation-state",u,h;i[0]="none";i[1]=
"invalid";i[2]="valid";i[3]="pending";u=function(){function t(){this._destroyIds=[]}return t.prototype.
_checkExistsOrRegisterDestroyId=function(t){return n.Util.existsOrRegisterId(this._destroyIds,t)},t.
prototype.isDestroyed=function(){return this._destroyIds.length>0},t.prototype.dispose=function(){this.
_checkExistsOrRegisterDestroyId(null)||(this._errorMessage&&(this._errorMessage.dispose(),this._errorMessage=
null),this._disposeSubscriptions())},t.prototype.initialize=function(n,t){var i=this;this._element=n;
this._validatable={enableValidation:t.enableValidation,valid:t.valid,validationState:t.validationState,
validators:t.validators};this._errorMessage||(this._errorMessage=ko.computed(function(){var u="",r=i.
_validatable.validators(),n,t;if(r)for(n=0;n<r.length;n++)if(t=r[n],!t.valid()&&t.message()){u=t.message(
);break}return u}));this._subscriptions||this._initializeSubscriptions()},t.prototype.onErrorMessageChanged=
function(){},t.prototype.onValidationStateChanged=function(){},t.prototype._initializeSubscriptions=
function(){var n=this;this._subscriptions=this._subscriptions||[];this._disposeSubscriptions();this.
onValidationStateChanged(this._validatable.validationState());this._subscriptions.push(this._validatable.
validationState.subscribe(function(t){n.onValidationStateChanged(t)}));this.onErrorMessageChanged(this.
_errorMessage());this._subscriptions.push(this._errorMessage.subscribe(function(t){n.onErrorMessageChanged(
t)}))},t.prototype._disposeSubscriptions=function(){if(this._subscriptions)while(this._subscriptions.
length)this._subscriptions.splice(0,1)[0].dispose()},t}();t.ValidationPlacementBase=u;h=function(n){
function t(){n.apply(this,arguments);this._input=null;this._valid=ko.computed($.noop)}return __extends(
t,n),t.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(n.prototype.
dispose.call(this),this._element&&this._element.removeClass([f,e,o,r].join(" ")),this._input&&this._input.
removeAttr(s),this._valid&&(this._valid.dispose(),this._valid=null))},t.prototype.initialize=function(
t,i){var u=this;n.prototype.initialize.call(this,t,i);this._valid=ko.computed(function(){return u._validatable.
enableValidation()&&u._validatable.validators().length>0&&u._validatable.validationState()===2});this.
_subscriptions.push(this._valid.subscribe(function(n){u._element.toggleClass(r,n)}));this._input=this.
_element.find("input, select, textarea");this._validatable.validationState.notifySubscribers(this._validatable.
validationState());this._setValidationAttribute(this._validatable.validationState())},t.prototype.onValidationStateChanged=
function(n){this._element.toggleClass(f,n===0);this._element.toggleClass(e,n===1);this._element.toggleClass(
o,n===3);this._element.toggleClass(r,this._valid());this._setValidationAttribute(n)},t.prototype._setValidationAttribute=
function(n){this._input&&(this._input.attr(s,n===2||this._validatable.validators().length===0),this.
_input.attr(c,i[n]))},t}(u);t.Css=h})(i=t.ValidationPlacements||(t.ValidationPlacements={}))})(i=t.Controls||
(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){
"use strict";function f(n){return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var at=window,
r=jQuery,lt,i,u,o,a,v,c,y,p,w,b,k,d,e,g,nt,tt,s,l,it,rt,ut,ft,h,et,ot,st,ht,ct;(function(n){n[n.None=
0]="None";n[n.Invalid=1]="Invalid";n[n.Valid=2]="Valid";n[n.Pending=3]="Pending"})(t.ValidationState||
(t.ValidationState={}));lt=t.ValidationState;i=function(){function n(n){var t=this;this.message=ko.observable(
n);this.validationState=ko.observable(0);this.validate=ko.observable();this.isEmptyValid=ko.observable(
!1);this.valid=ko.computed(function(){return t.validationState()===2});this._subscription=this.validate.
subscribe(function(n){t.validationState(t._validate(n))})}return n.prototype.dispose=function(){this.
_subscription&&(this._subscription.dispose(),this._subscription=null)},n.prototype._validate=function(
){return 0},n}();t.Validator=i;t.escapeRegExpOperators=f;u=function(t){function i(n,i){this._expression=
n;t.call(this,i||"The value must match the expression '"+n+"'.")}return __extends(i,t),i.prototype._validate=
function(t){return(n.Util.isNullOrUndefined(t)||r.trim(t)==="")&&this.isEmptyValid()?2:this._expression.
test(t||"")?2:1},i}(i);t.Match=u;o=function(t){function i(n,i){this._expression=n;t.call(this,i||"The value must not match the expression '"+
n+"'.")}return __extends(i,t),i.prototype._validate=function(t){return(n.Util.isNullOrUndefined(t)||
r.trim(t)==="")&&this.isEmptyValid()?2:this._expression.test(t||"")?1:2},i}(i);t.NotMatch=o;a=function(
n){function t(t,i){n.call(this,new RegExp(f(t),"i"),i||"The value must contain at least one case insensitive match of '"+
t+"'.")}return __extends(t,n),t}(u);t.Contains=a;v=function(n){function t(t,i){n.call(this,new RegExp(
f(t),"i"),i||"The value must not contain a case insensitive match of '"+t+"'.")}return __extends(t,n),
t}(o);t.NotContains=v;c=function(n){function t(t,i){n.call(this,new RegExp("["+f(t)+"]",""),i||"The value must contain at least one character from '"+
t+"'.")}return __extends(t,n),t}(u);t.ContainsCharacters=c;y=function(n){function t(t,i){n.call(this,
new RegExp("["+f(t)+"]",""),i||"The value must not contain characters from '"+t+"'.")}return __extends(
t,n),t}(o);t.NotContainsCharacters=y;p=function(n){function t(t){n.call(this,/[0-9]/,t||"The value must have at least one digit from 0 to 9.")}
return __extends(t,n),t}(u);t.HasDigit=p;w=function(n){function t(t){n.call(this,/[A-Za-z]/,t||"The value must have at least one upper or lower case letter from A to Z or a to z.")}
return __extends(t,n),t}(u);t.HasLetter=w;b=function(n){function t(t){n.call(this,/[A-Z]/,t||"The value must have at least one upper case letter from A to Z.")}
return __extends(t,n),t}(u);t.HasUpperCaseLetter=b;k=function(n){function t(t){n.call(this,/[a-z]/,t||
"The value must have at least one lower case letter from a to z.")}return __extends(t,n),t}(u);t.HasLowerCaseLetter=
k;d=function(n){function t(t){n.call(this,"!@#$%^&*()_+-={}|[]\\:\";'<>,.?/~`",t||"The value must contain at least one punctuation character from '!@#$%^&*()_+-={}|[]\\:\";'<>,.?/~`'.")}
return __extends(t,n),t}(c);t.HasPunctuation=d;e=function(n){function t(t,i){this._compareTo=r.isFunction(
t)?t:function(){return t};n.call(this,i)}return __extends(t,n),t.prototype._validate=function(n){return this.
_compare(n,this._compareTo())?2:1},t.prototype._compare=function(){return!1},t}(i);t.Compare=e;g=function(
n){function t(t,i){n.call(this,t,i||"The value must equal the provided value.")}return __extends(t,n),
t.prototype._compare=function(n,t){return n===t},t}(e);t.Equals=g;nt=function(n){function t(t,i){n.call(
this,t,i||"The value must equal the provided value.")}return __extends(t,n),t.prototype._compare=function(
n,t){return n.toLowerCase()===t.toLowerCase()},t}(e);t.CaseInsensitiveCompare=nt;tt=function(n){function t(
t,i){n.call(this,t,i||"The value must equal the provided value.")}return __extends(t,n),t.prototype.
_compare=function(n,t){return n.toLocaleLowerCase()===t.toLocaleLowerCase()},t}(e);t.LocaleAwareCaseInsensitiveCompare=
tt;s=function(t){function i(n,i,r){this._min=n;this._max=i;t.call(this,r||"The value must have a length between "+
n+" and "+i+".")}return __extends(i,t),i.prototype._validate=function(t){var i,u;if(t=r.trim(t),(n.Util.
isNullOrUndefined(t)||r.trim(t)==="")&&this.isEmptyValid())return 2;if(i=0,t!==undefined&&t!==null&&
(i=t.length),u=0,this._min!==undefined&&this._min!==null&&(u=this._min),i>=u)if(this._max!==undefined&&
this._max!==null){if(i<=this._max)return 2}else return 2;return 1},i}(i);t.LengthRange=s;l=function(
n){function t(t,i){n.call(this,t,null,i||"The value must have a length of at least "+t+".")}return __extends(
t,n),t}(s);t.MinLength=l;it=function(n){function t(t,i){n.call(this,0,t,i||"The value must have a length of at most "+
t+".")}return __extends(t,n),t}(s);t.MaxLength=it;rt=function(n){function t(t){n.call(this,1,t||"The value should not be empty.")}
return __extends(t,n),t}(l);t.Required=rt;ut=function(n){function t(t){n.call(this,t||"The input value must be a non-null value.")}
return __extends(t,n),t.prototype._validate=function(n){return n!==undefined&&n!==null?2:1},t}(i);t.
NotNull=ut;ft=function(t){function i(n){t.call(this,n||"The input value must be a number.")}return __extends(
i,t),i.prototype._validate=function(t){return(n.Util.isNullOrUndefined(t)||r.trim(t)==="")&&this.isEmptyValid(
)?2:t!==undefined&&t!==null&&t!==""?isNaN(+t)?1:2:1},i}(i);t.Numeric=ft;h=function(t){function i(n,i,
u){this.min=r.isFunction(n)?n:function(){return n};this.max=r.isFunction(i)?i:function(){return i};t.
call(this,u||"The value must be between "+this.min()+" and "+this.max()+".")}return __extends(i,t),i.
prototype._validate=function(t){var i;return(n.Util.isNullOrUndefined(t)||r.trim(t)==="")&&this.isEmptyValid(
)?2:(n.Util.isNullOrUndefined(t)||t==="")&&(this.min()===undefined||this.min()===null)&&(this.max()===
undefined||this.max()===null)?2:t!==null&&t!==undefined&&(typeof t=="string"||typeof t=="number")&&t!==
""&&(i=+t,!isNaN(i))?this.min()!==undefined&&this.min()!==null&&i<this.min()?1:this.max()!==undefined&&
this.max()!==null&&i>this.max()?1:2:1},i}(i);t.ValueRange=h;et=function(n){function t(t,i){n.call(this,
t,null,i||"The value must be at least "+t+".")}return __extends(t,n),t}(h);t.MinValue=et;ot=function(
n){function t(t,i){n.call(this,null,t,i||"The value must be at most "+t+".")}return __extends(t,n),t}
(h);t.MaxValue=ot;st=function(){function n(n,t){this.promise=n;this.asyncRequestId=t}return n}();ht=
function(t){function i(n,i,r){this._validationHandler=i;this._context=r||null;this._pendingAsyncRequests=
[];this._latestValidationAsyncRequestId=null;t.call(this,n)}return __extends(i,t),i.prototype._validate=
function(t){var r=this,u=!1,i;return this._validationHandler?(this._latestValidationAsyncRequestId=n.
Util.newGuid(),i=this._validationHandler(t,this._context),this._pendingAsyncRequests.push(new st(i,this.
_latestValidationAsyncRequestId)),i.then(function(n){r._updateValidationResult(i,n,2)},function(n){r.
_updateValidationResult(i,n,1)}).finally(function(){u=!0}),u)?(this._removePendingAsyncRequest(i),this.
validationState()):3:2},i.prototype._updateResult=function(n,t){n&&this.message(n);this.validationState(
t)},i.prototype._updateValidationResult=function(n,t,i){var r;r=this._pendingAsyncRequests.length<=1?
this._pendingAsyncRequests.pop():this._removePendingAsyncRequest(n);r&&r.asyncRequestId===this._latestValidationAsyncRequestId&&
this._updateResult(t,i)},i.prototype._removePendingAsyncRequest=function(n){for(var t=0,i=-1,r=null,
t=0;t<this._pendingAsyncRequests.length;t++)if(this._pendingAsyncRequests[t].promise===n){i=t;break}
return i>=0?(r=this._pendingAsyncRequests[i],this._pendingAsyncRequests.splice(i,1),r):null},i}(i);t.
CustomAsyncValidator=ht;ct=function(n){function t(t){n.call(this,t||"The value is invalid.")}return __extends(
t,n),t.prototype._validate=function(){return 1},t}(i);t.Invalid=ct})(i=t.Validators||(t.Validators={
}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={
})),function(n){var t;(function(n){var t;(function(n){"use strict";(function(n){n[n.Default=0]="Default";
n[n.AfterKeyDown=1]="AfterKeyDown";n[n.KeyPress=2]="KeyPress";n[n.Blur=3]="Blur";n[n.Input=4]="Input"}
)(n.ValueUpdateTrigger||(n.ValueUpdateTrigger={}));var t=n.ValueUpdateTrigger})(t=n.Controls||(n.Controls=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(i){var r;(function(
i){"use strict";var nt=0,pt,wt,bt,kt,dt,gt,ni,ti,ii,ri,ui,fi,ei,oi,si,hi,ci,li,c,tt,s,it,rt,o,ut,ft,
et,ot,st,l,ht,a,u,v,ct,f,r,y,h,p,w,e,b,k,lt,d,g,at,vt,yt;(function(n){n[n.Line=0]="Line";n[n.Area=1]=
"Area";n[n.Scatter=2]="Scatter";n[n.StackedBar=3]="StackedBar";n[n.GroupedBar=4]="GroupedBar";n[n.SplitBar=
5]="SplitBar";n[n.StackedArea=6]="StackedArea"})(i.ChartType||(i.ChartType={}));pt=i.ChartType,function(
n){n[n.Linear=0]="Linear";n[n.Monotone=1]="Monotone";n[n.StepAfter=2]="StepAfter"}(i.Interpolation||
(i.Interpolation={}));wt=i.Interpolation,function(n){n[n.Solid=0]="Solid";n[n.Dotted=1]="Dotted";n[n.
Dashed=2]="Dashed";n[n.Trendline=3]="Trendline";n[n.UsageThreshold=4]="UsageThreshold";n[n.WarningThreshold=
5]="WarningThreshold"}(i.LineStyle||(i.LineStyle={}));bt=i.LineStyle,function(n){n[n.ShowLineWithPoints=
0]="ShowLineWithPoints";n[n.HideLine=1]="HideLine";n[n.ShowLineWithXHoverPoint=2]="ShowLineWithXHoverPoint"}
(i.LineState||(i.LineState={}));kt=i.LineState,function(n){n[n.Solid=0]="Solid";n[n.CrossHatching=1]=
"CrossHatching";n[n.DiagonalHatching=2]="DiagonalHatching";n[n.DottedHatching=3]="DottedHatching"}(i.
AreaHatchingPattern||(i.AreaHatchingPattern={}));dt=i.AreaHatchingPattern,function(n){n[n.Stacked=0]=
"Stacked";n[n.Grouped=1]="Grouped";n[n.Split=2]="Split"}(i.BarChartType||(i.BarChartType={}));gt=i.BarChartType,
function(n){n[n.None=0]="None";n[n.Top=1]="Top";n[n.Right=2]="Right";n[n.Bottom=3]="Bottom";n[n.Left=
4]="Left";n[n.CenterHorizontal=5]="CenterHorizontal";n[n.CenterVertical=6]="CenterVertical"}(i.AxisPosition||
(i.AxisPosition={}));ni=i.AxisPosition,function(n){n[n.All=0]="All";n[n.XSlider_Off=1]="XSlider_Off";
n[n.XSlider_noCallout=2]="XSlider_noCallout";n[n.ChartArea_Off=4]="ChartArea_Off";n[n.ChartArea_noClick=
8]="ChartArea_noClick";n[n.ChartArea_noHover=16]="ChartArea_noHover"}(i.InteractionBehavior||(i.InteractionBehavior=
{}));ti=i.InteractionBehavior,function(n){n[n.None=0]="None";n[n.Top=1]="Top";n[n.Right=2]="Right";n[
n.Bottom=3]="Bottom";n[n.Left=4]="Left"}(i.LegendPosition||(i.LegendPosition={}));ii=i.LegendPosition,
function(n){n[n.Max=0]="Max";n[n.Min=1]="Min";n[n.First=2]="First";n[n.Last=3]="Last";n[n.Every=4]="Every";
n[n.Custom=5]="Custom"}(i.DataLabelContext||(i.DataLabelContext={}));ri=i.DataLabelContext,function(
n){n[n.Callout=0]="Callout";n[n.Badge=1]="Badge"}(i.DataLabelStyle||(i.DataLabelStyle={}));ui=i.DataLabelStyle,
function(n){n[n.Ordinal=0]="Ordinal";n[n.Linear=1]="Linear";n[n.Time=2]="Time"}(i.Scale||(i.Scale={})
);fi=i.Scale,function(n){n[n.None=0]="None";n[n.Low=1]="Low";n[n.High=2]="High"}(i.AxisLabelPosition||
(i.AxisLabelPosition={}));ei=i.AxisLabelPosition,function(n){n[n.GreaterThan=0]="GreaterThan";n[n.LessThan=
1]="LessThan"}(i.ConditionOperator||(i.ConditionOperator={}));oi=i.ConditionOperator,function(n){n[n.
General=0]="General";n[n.HorizontalLine=1]="HorizontalLine";n[n.VerticalLine=2]="VerticalLine";n[n.Uniform=
3]="Uniform"}(i.SeriesType||(i.SeriesType={}));si=i.SeriesType,function(n){n[n.Default=0]="Default";
n[n.Point=2]="Point";n[n.MultiplePointsSingleSeries=3]="MultiplePointsSingleSeries";n[n.MultiplePointsMultipleSeries=
4]="MultiplePointsMultipleSeries"}(i.MetricRuleScope||(i.MetricRuleScope={}));hi=i.MetricRuleScope,function(
n){n[n.AllTogether=0]="AllTogether";n[n.AllSeparately=1]="AllSeparately";n[n.SingleSeries=2]="SingleSeries"}
(i.MetricRuleAggregationScope||(i.MetricRuleAggregationScope={}));ci=i.MetricRuleAggregationScope,function(
n){n[n.CurrentXValue=0]="CurrentXValue";n[n.CurrentYValue=1]="CurrentYValue";n[n.MinY=2]="MinY";n[n.
MaxY=3]="MaxY";n[n.AverageY=4]="AverageY";n[n.SumY=5]="SumY";n[n.Count=6]="Count";n[n.CustomValue=7]=
"CustomValue"}(i.MetricRuleAggregationType||(i.MetricRuleAggregationType={}));li=i.MetricRuleAggregationType;
c=function(){function n(){this.context=ko.observable(0);this.style=ko.observable(0);this.formatter=ko.
observable(null)}return n}();i.DataLabel=c;tt=function(n){function t(){n.apply(this,arguments);this.
chartItems=ko.observableArray([]);this.context=ko.observable(5)}return __extends(t,n),t}(c);i.CustomDataLabel=
tt;s=function(){function n(n,t){this.name=ko.observable("");this.scale=ko.observable(0);this.ticks=ko.
observable(0);this.position=ko.observable(3);this.positionIndex=ko.observable(0);this.showAxis=ko.observable(
!0);this.autoScaleUnit=ko.observable(!0);this.showName=ko.observable(!1);this.showLabel=ko.observable(
1);this.labelPadding=ko.observable(50);this.rotateLabel=ko.observable(0);this.showAxisLine=ko.observable(
!1);this.showTickMarks=ko.observable(!1);this.showGridLines=ko.observable(!1);this.inputFormat=ko.observable(
"");this.outputFormat=ko.observable("");this.displayNumberPrecision=ko.observable(1);this.xSliderOutputFormat=
ko.observable(null);this.displayLabelFormatter=ko.observable("");this.xSliderCalloutDisplayFormatter=
ko.observable("");this.min=ko.observable(null);this.max=ko.observable(null);this.unit=ko.observable(
0);this.defaultAxisPadding=ko.observable(null);this.customAxisPadding=ko.observable(null);n&&this.position(
n);t&&this.scale(t)}return n}();i.Axis=s;it=function(){function n(n,t,i,r,u,f,e){this.years=n;this.months=
t;this.days=i||0;this.hours=r||0;this.minutes=u||0;this.seconds=f||0;this.milliseconds=e||0}return n}
();i.DateSpan=it;rt=function(){function n(n){this.value=n}return n}();i.NumberSpan=rt;o=function(){function n(
){this.type=ko.observable(0);this.name=ko.observable(String(nt=nt+1&65535))}return n}();i.SeriesBase=
o;ut=function(n){function t(){n.apply(this,arguments);this.values=ko.observableArray([]);this.xAxisName=
ko.observable("");this.yAxisName=ko.observable("")}return __extends(t,n),t}(o);i.Series=ut;ft=function(
n){function t(){n.apply(this,arguments);this.type=ko.observable(3);this.startXValue=ko.observable(null);
this.span=ko.observable(null);this.yValues=ko.observableArray([]);this.xAxisName=ko.observable("");this.
yAxisName=ko.observable("")}return __extends(t,n),t}(o);i.UniformSeries=ft;et=function(n){function t(
){n.apply(this,arguments);this.type=ko.observable(1);this.value=ko.observable(null);this.axisName=ko.
observable("")}return __extends(t,n),t}(o);i.LineSeries=et;ot=function(){function n(){this.scope=ko.
observable(null);this.scopeSeriesName=ko.observable(null);this.metrics=ko.observableArray([])}return n}
();i.MetricRule=ot;st=function(){function n(){this.aggregationScope=ko.observable(2);this.aggregationType=
ko.observable(4);this.aggregationSeriesName=ko.observable(null);this.showBarColor=ko.observable(!0);
this.colorCode=ko.observable(null);this.hatchingPattern=ko.observable(null);this.outputFormat=ko.observable(
null);this.title=ko.observable(null);this.unit=ko.observable(null);this.customValue=ko.observable(null);
this.defaultInfoBalloon=ko.observable(null)}return n}();i.MetricRuleMetric=st;l=function(){function n(
){this.chartViewIndex=ko.observable(null);this.seriesViewIndex=ko.observable(null)}return n}();i.SeriesId=
l;ht=function(n){function t(){n.apply(this,arguments);this.chartItems=ko.observableArray([])}return __extends(
t,n),t}(l);i.SeriesSubset=ht;a=function(){function n(){}return n}();i.Events=a;u=function(){function n(
){}return n}();i.SeriesChartEvents=u;v=function(){function n(){}return n}();i.BarChartEvents=v;ct=function(
){function n(){this.seriesName=ko.observable("");this.conditionOperator=ko.observable(0);this.interpolation=
ko.observable(0)}return n}();i.RenderingCondition=ct;f=function(){function n(){this.seriesName=ko.observable(
"");this.displayName=ko.observable("");this.cssClass=ko.observable("");this.dataLabels=ko.observableArray(
[]);this.showTooltip=ko.observable(!1);this.tooltipFormatter=ko.observable("Series: '{0}' Point: {1} Value: {2}");
this.renderingConditions=ko.observableArray([]);this.selectable=ko.observable(!0);this.hoverable=ko.
observable(!0);this.hideFromLegend=ko.observable(!1);this.autoGenerated=!1}return n}();i.SeriesView=
f;r=Object.create(null);y=function(n){function t(){n.apply(this,arguments);this.interpolation=ko.observable(
0);this.lineStyle=ko.observable(0);this.showTooltip=ko.observable(!1);this.showDataPoints=ko.observable(
!0)}return __extends(t,n),t}(f);i.LineChartSeriesView=y;h=function(n){function t(){n.apply(this,arguments);
this.interpolation=ko.observable(0);this.areaHatchingPattern=ko.observable(0);this.showTooltip=ko.observable(
!1)}return __extends(t,n),t}(f);i.AreaChartSeriesView=h;p=function(n){function t(){n.apply(this,arguments)}
return __extends(t,n),t}(h);i.StackedAreaChartSeriesView=p;w=function(n){function t(){n.apply(this,arguments);
this.radius=ko.observable(2);this.showTooltip=ko.observable(!1)}return __extends(t,n),t}(f);i.ScatterChartSeriesView=
w;e=function(){function n(){this.chartType=ko.observable(undefined);this.seriesView=ko.observableArray(
)}return n.prototype.newSeriesView=function(){return null},n}();i.View=e;b=function(n){function t(){
n.apply(this,arguments);this.chartType=ko.observable(t.defaultChartType);this.seriesView=ko.observableArray(
);this.events=new u}return __extends(t,n),t.prototype.newSeriesView=function(n){return r[this.chartType(
)](n)},t.defaultChartType=0,t}(e);i.LineChartView=b;r[b.defaultChartType]=function(n){var t=new y;return n&&
t.seriesName(n.name()),t};k=function(n){function t(){n.apply(this,arguments);this.chartType=ko.observable(
t.defaultChartType);this.seriesView=ko.observableArray();this.events=new u}return __extends(t,n),t.prototype.
newSeriesView=function(n){return r[this.chartType()](n)},t.defaultChartType=1,t}(e);i.AreaChartView=
k;r[k.defaultChartType]=function(n){var t=new h;return n&&t.seriesName(n.name()),t};lt=function(){function n(
){this.enableSparseSeries=ko.observable(!0);this.chartType=ko.observable(undefined);this.seriesView=
ko.observableArray()}return n.prototype.newSeriesView=function(){return null},n}();i.StackedChartView=
lt;d=function(){function n(){this.chartType=ko.observable(n.defaultChartType);this.seriesView=ko.observableArray(
);this.events=new u;this.lineState=ko.observable(0);this.enableSparseSeries=ko.observable(!0)}return n.
prototype.newSeriesView=function(n){return r[this.chartType()](n)},n.defaultChartType=6,n}();i.StackedAreaChartView=
d;r[d.defaultChartType]=function(n){var t=new p;return n&&t.seriesName(n.name()),t};g=function(n){function t(
){n.apply(this,arguments);this.chartType=ko.observable(t.defaultChartType);this.seriesView=ko.observableArray(
);this.events=new u}return __extends(t,n),t.prototype.newSeriesView=function(n){return r[this.chartType(
)](n)},t.defaultChartType=2,t}(e);i.ScatterChartView=g;r[g.defaultChartType]=function(n){var t=new w;
return n&&t.seriesName(n.name()),t};at=function(n){function t(t){n.call(this);this.barPaddingRatio=ko.
observable(.3);this.enableSparseSeries=ko.observable(!0);this.barChartType=ko.observable(0);this.xAxisSpan=
ko.observable(null);this.events=new v;this.barChartType(t);switch(t){case 0:this.chartType(3);break;
case 1:this.chartType(4);break;case 2:this.chartType(5)}}return __extends(t,n),t.prototype.newSeriesView=
function(n){return r[this.chartType()](n)},t}(e);i.BarChartView=at;r[3]=r[4]=r[5]=function(n){var t=
new f;return n&&t.seriesName(n.name()),t};vt=function(){function n(n,t){this.xValue=n;this.yValue=t}
return n}();i.ChartItem=vt;yt=function(t){function i(r){var u=this;t.call(this,r);this.title=ko.observable(
"");this.showTitle=ko.observable(!1);this.width=ko.observable(0);this.height=ko.observable(0);this.noDataMessage=
"No data to display";this.series=ko.observableArray([]);this.xAxis=new s;this.yAxis=new s(4,1);this.
secondaryXAxes=ko.observableArray();this.secondaryYAxes=ko.observableArray();this.views=ko.observableArray(
);this.legendPosition=ko.observable(0);this.interactionBehavior=ko.observable(0);this.autogenerateSeriesViews=
ko.observable(!0);this.events=new a;this.seriesSelections=ko.observableArray([]);this.seriesHovers=ko.
observableArray([]);this.hoveredID=ko.observableArray();this.metricsRules=ko.observableArray([]);this.
enableTrackXSlider=ko.observable();this.xSliderCoordinate=ko.observable();this.xSliderFilterHoverThreshold=
ko.observable();this.metrics=new n.ViewModels.Controls.Visualization.Metrics.ViewModel(r);this.controlType=
63;this.xAxis.showTickMarks(!0);this.yAxis.labelPadding(i.defaultYAxisLabelPadding);ko.reactor(this.
lifetimeManager,function(){if(u.autogenerateSeriesViews()){var n=u.series(),t=u.views();t.forEach(function(
t){var r=t.seriesView.peek(),u=r.filter(function(n){return n.autoGenerated}),f=u.filter(function(t){
return n.some(function(n){return n.name.peek()===t.seriesName.peek()})}),e=u.filter(function(n){return f.
indexOf(n)<0}),o=n.filter(function(n){var t=n.name();return!f.some(function(n){return t===n.seriesName.
peek()})});e.forEach(function(n){return r.remove(n)});o.forEach(function(n){var u=i.getDefaultSeriesViewCreator(
t.chartType())(n,t);u.autoGenerated=!0;r.push(u)});t.seriesView(r)})}})}return __extends(i,t),i.getDefaultSeriesViewCreator=
function(n){return r[n]},i.defaultYAxisLabelPadding=38,i}(t.Loadable.ViewModel);i.ViewModel=yt})(r=i.
Chart||(i.Chart={}))})(i=t.Visualization||(t.Visualization={}))})(i=t.Controls||(t.Controls={}))})(t=
n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,
t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(
t){"use strict";var s,h,c,l,u,i,r,f,e,o;t.RelatedBandOverflowId="RelatedBandOverflowId";t.DependantBandOverflowId=
"DependantBandOverflowId";t.InternalBandOverflowId="InternalBandOverflowId";t.LinkedBandOverflowId="LinkedBandOverflowId";
t.SmallSizeOverflowId="SmallSizeOverflowId",function(n){n[n.Small=0]="Small";n[n.Large=1]="Large"}(t.
Size||(t.Size={}));s=t.Size,function(n){n[n.None=0]="None";n[n.Default=1]="Default";n[n.Info=2]="Info";
n[n.Overflow=3]="Overflow";n[n.Resource=4]="Resource";n[n.ResourceGroup=5]="ResourceGroup";n[n.Website=
6]="Website";n[n.ScaleGroup=7]="ScaleGroup";n[n.Sites=8]="Sites";n[n.DatabaseServer=9]="DatabaseServer";
n[n.Database=10]="Database";n[n.TFSProject=11]="TFSProject";n[n.TFSAccount=12]="TFSAccount";n[n.VirtualMachine=
13]="VirtualMachine";n[n.Disks=14]="Disks";n[n.Nics=15]="Nics";n[n.IPAddress=16]="IPAddress";n[n.AvailabilitySet=
17]="AvailabilitySet";n[n.ADAccount=18]="ADAccount"}(t.ResourceIconType||(t.ResourceIconType={}));h=
t.ResourceIconType,function(n){n[n.None=0]="None";n[n.ResourceGroup=1]="ResourceGroup";n[n.Related=2]=
"Related";n[n.Dependant=3]="Dependant";n[n.Internal=4]="Internal";n[n.Linked=5]="Linked"}(t.ResourceBand||
(t.ResourceBand={}));c=t.ResourceBand,function(n){n[n.None=0]="None";n[n.Success=1]="Success";n[n.Warning=
2]="Warning";n[n.Error=3]="Error";n[n.Information=4]="Information";n[n.Stopped=5]="Stopped";n[n.Canceled=
6]="Canceled";n[n.Critical=7]="Critical";n[n.Disabled=8]="Disabled";n[n.Failed=9]="Failed";n[n.Pending=
10]="Pending";n[n.Unknown=11]="Unknown"}(t.ResourceStatus||(t.ResourceStatus={}));l=t.ResourceStatus;
u=function(){function n(){this.name=ko.observable("");this.id=ko.observable("");this.description=ko.
observable("");this.descriptionUri=ko.observable("");this.type=ko.observable("");this.iconType=ko.observable(
4);this.count=ko.observable(1);this.resourceGroupName=ko.observable("");this.status=ko.observable(1);
this.statusMessage=ko.observable("");this.relatedResources=ko.observableArray([]);this.dependantResources=
ko.observableArray([]);this.internalResources=ko.observableArray([]);this.linkedResources=ko.observableArray(
[]);this.icon=ko.observable()}return n}();t.Resource=u;i=function(){function n(){this.name=ko.observable(
"");this.id=ko.observable("");this.iconType=ko.observable(5);this.icon=ko.observable();this.resources=
ko.observableArray([]);this.linkedResources=ko.observableArray([])}return n}();t.ResourceGroup=i;r=function(
){function n(){this.resourceClick=null;this.resourceMouseEnter=null;this.resourceMouseLeave=null;this.
resourceOverflowClick=null;this.plotAreaClick=null}return n}();t.Events=r;f=function(){function n(){
this.name="";this.id="";this.description="";this.type="";this.iconType=0;this.count=1;this.resourceGroupName=
"";this.status=0;this.statusMessage=""}return n}();t.EventData=f;e=function(){function n(){this.name=
"";this.id="";this.resourceGroupName="";this.type="";this.iconType=0;this.resourceBand=4}return n}();
t.ResourceOverflowEventData=e;o=function(t){function u(u,f){u&&u.createChildLifetime||(u=undefined,f=
arguments[0]);t.call(this,u);this.controlType=64;this.resourceGroup=ko.observable(new i);this.showResourceView=
ko.observable(!1);this.resourceInFocus=ko.observable("");this.items=ko.observableArray();this.contextMenuOption=
{commandGroup:null,commandGroupOwner:null};this.size=ko.observable(1);this.width=ko.observable(535);
this.height=ko.observable(355);this.events=new r;var e=function(n,t){return n.id()===t.id},o=function(
n){var t={};return t.id=n.id(),t},s=null;f&&(f.createSelection&&(o=f.createSelection),f.itemMatchesSelection&&
(e=f.itemMatchesSelection),f.initialSelection&&(s=f.initialSelection));this.selection=new n.ViewModels.
SelectableSet(this.items,e,o,s)}return __extends(u,t),u.prototype.dispose=function(){this.selection.
dispose();t.prototype.dispose.call(this)},u}(n.ViewModels.Controls.Loadable.ViewModel);t.ViewModel=o}
)(i=t.CsmTopology||(t.CsmTopology={}))})(i=t.Visualization||(t.Visualization={}))})(i=t.Controls||(t.
Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){
var i;(function(t){"use strict";(function(n){n[n.Auto=0]="Auto";n[n.CenterOnlySmall=1]="CenterOnlySmall";
n[n.CenterOnlyMedium=2]="CenterOnlyMedium";n[n.CenterOnlyLarge=3]="CenterOnlyLarge";n[n.Small=4]="Small";
n[n.Medium=5]="Medium";n[n.MediumLarge=6]="MediumLarge";n[n.Large=7]="Large"})(t.GaugeSize||(t.GaugeSize=
{}));var r=t.GaugeSize,i=function(n){function t(t){n.call(this,t);this.gaugeSize=ko.observable(0);this.
groupInfos=ko.observableArray([]);this.itemsDataArray=ko.observableArray([]);this.itemSetting=ko.observable(
);this.resetItems=ko.observable(!0);this.valueInitialized=!1;this.total=ko.observable(100);this.startOffset=
ko.observable(-90);this.totalFormat=ko.observable("{0}");this.unitFormat=ko.observable("");this.infoFormat=
ko.observable("");this.hoverInfoFormat=ko.observable("{0} {1}{2}");this.selectedInfoFormat=ko.observable(
"{0}/{1}{2}");this.hoveredUnit=ko.observable("%");this.disableSelectOnClick=ko.observable(!1);this.showCenter=
ko.observable(!0);this.controlType=65}return __extends(t,n),t}(n.Loadable.ViewModel);t.ViewModel=i})
(i=t.Donut||(t.Donut={}))})(t=n.Visualization||(n.Visualization={}))})(t=n.Controls||(n.Controls={})
)})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(
t){"use strict";var r=function(){function n(n){this.limit=ko.observable();this.cssClass=ko.observable(
);this.limit(n)}return n}(),i;t.Threshold=r;i=function(n){function t(t){n.call(this,t);this.value=ko.
observable();this.unit=ko.observable();this.caption=ko.observable();this.footerValue=ko.observable();
this.footerUnit=ko.observable();this.footerCaption=ko.observable();this.gaugeValue=ko.observable(0);
this.gaugeMaxValue=ko.observable(100);this.gaugePresentationArc=ko.observable(270);this.gaugeThresholds=
ko.observableArray();this.controlType=66}return __extends(t,n),t}(n.ViewModels.Controls.SingleSetting.
ViewModel);t.ViewModel=i})(i=t.Gauge||(t.Gauge={}))})(i=t.Visualization||(t.Visualization={}))})(i=t.
Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t)
{var i;(function(i){var r;(function(i){"use strict";var o=n.Util,s,h,c,l,a,v,y,r,u,f,e;(function(n){
n[n.Blade=0]="Blade";n[n.Document=1]="Document"})(i.GraphEditorSkinStyle||(i.GraphEditorSkinStyle={})
);s=i.GraphEditorSkinStyle,function(n){n[n.NodeCenter=0]="NodeCenter";n[n.NodePort=1]="NodePort"}(i.
EdgeConnectionStrategy||(i.EdgeConnectionStrategy={}));h=i.EdgeConnectionStrategy,function(n){n[n.None=
0]="None";n[n.MoveEntities=1]="MoveEntities";n[n.AddRemoveEntities=2]="AddRemoveEntities"}(i.GraphEditorCapabilities||
(i.GraphEditorCapabilities={}));c=i.GraphEditorCapabilities,function(n){n[n.Normal=1]="Normal";n[n.Strong=
2]="Strong"}(i.EdgeStrength||(i.EdgeStrength={}));l=i.EdgeStrength,function(n){n[n.Single=1]="Single";
n[n.Double=2]="Double"}(i.EdgeType||(i.EdgeType={}));a=i.EdgeType,function(n){n[n.Solid=1]="Solid";n[
n.Dotted=2]="Dotted";n[n.Dashed=3]="Dashed"}(i.EdgeStyle||(i.EdgeStyle={}));v=i.EdgeStyle,function(n)
{n[n.None=1]="None";n[n.Arrow=2]="Arrow";n[n.Circle=3]="Circle"}(i.EdgeMarker||(i.EdgeMarker={}));y=
i.EdgeMarker;r=function(){function n(n){n===void 0&&(n=o.newGuid());this.commandGroup=ko.observable(
"");this.selected=ko.observable(!1);this.selectable=ko.observable(!0);this.id=ko.observable(n);this.
dimmed=ko.observable(!1)}return n}();i.GraphEntity=r;u=function(n){function t(t,i){n.call(this);this.
strength=ko.observable(1);this.type=ko.observable(1);this.style=ko.observable(1);this.startMarker=ko.
observable(3);this.endMarker=ko.observable(2);this.selectable(!1);this.startNodeId=ko.observable(t.id(
));this.endNodeId=ko.observable(i.id())}return __extends(t,n),t}(r);i.GraphEdge=u;f=function(n){function t(
t){(n.call(this),this.extensionViewModel=null,this.extensionTemplate="",this.detailBlade=null,this.detailBladeInputs=
null,this.initialRect={x:0,y:0,height:85,width:85},t)&&(t.x!==undefined&&(this.initialRect.x=t.x),t.
y!==undefined&&(this.initialRect.y=t.y),t.height!==undefined&&(this.initialRect.height=t.height),t.width!==
undefined&&(this.initialRect.width=t.width))}return __extends(t,n),t}(r);i.GraphNode=f;e=function(t)
{function r(f,e){var o=this,s,h;e===void 0&&(e=0);t.call(this,f);this.edgeConnectionStrategy=ko.observable(
0);this.editorCapabilities=ko.observable(0);this.graphNodes=new n.Base.Internal.ObservableMap;this.edges=
new n.Base.Internal.ObservableMap;this.gridResolution=ko.observable(10);this.widgetAttached=ko.observable(
!1);this.layoutChanged=ko.observable(0);this.getLayoutNoOverlaps=ko.observable(null);this.setNodeRects=
ko.observable(function(){throw new Error("Function called before widget was initialized.");});this.getNodeRects=
ko.observable(function(n){n===void 0&&(n=[]);throw new Error("Function called before widget was initialized.");
});this.rectSelectionMode=ko.observable(!1);this.zoomToFit=ko.observable(function(){return $.Deferred(
).resolve().promise()});this.zoomIn=ko.observable(function(){return $.Deferred().resolve().promise()}
);this.zoomOut=ko.observable(function(){return $.Deferred().resolve().promise()});this.zoomTo100Percent=
ko.observable(function(){return $.Deferred().resolve().promise()});this.bringRectIntoView=ko.observable(
function(){return Q(!0)});this.disableMouseWheelZoom=ko.observable(!1);this.enableLineage=ko.observable(
!1);this.controlType=67;this.styleSkin=e;s=new n.Base.Internal.ObservableMapUnion(this.lifetimeManager,
this.graphNodes,this.edges);h=ko.observableArray([]);s.subscribe(this.lifetimeManager,function(){var
n=[];s.forEach(function(t){n.push(t)});h(n)});this.selection=new n.ViewModels.SelectableSet(h,r.itemMatchesSelection,
r.createSelection);this.addEdge=function(n){var i=jQuery.Deferred(),t,r,f;if(n)if(o.graphNodes.lookup(
n.startNodeId))if(o.graphNodes.lookup(n.endNodeId))r={id:ko.observable(n.startNodeId)},f={id:ko.observable(
n.endNodeId)},t=new u(r,f),o.edges.put(t.id(),t),i.resolve();else throw"The edge end node is not present in the list of the view model graph nodes.";
else throw"The edge start node is not present in the list of the view model graph nodes.";else throw"The edge is null or undefined.";
return i.promise()};this.deleteEntities=function(n,t){var r=jQuery.Deferred();return i.GraphEntitiesDeletion.
run(o,n,t),r.resolve(),r.promise()}}return __extends(r,t),r.itemMatchesSelection=function(n,t){return n.
id()===t.id()},r.createSelection=function(n){return n},r}(t.Loadable.ViewModel);i.ViewModel=e})(r=i.
Graph||(i.Graph={}))})(i=t.Visualization||(t.Visualization={}))})(i=t.Controls||(t.Controls={}))})(t=
n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;
(function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.Graph||(n.Graph={}))})(t=n.Visualization||
(n.Visualization={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(
t){"use strict";var i=function(){function t(){}return t.run=function(t,i,r){if(i.length>0||r.length>
0){var f=new n.Base.Internal.ObservableMap,u=new n.Base.Internal.ObservableMap;i.forEach(function(n)
{if(t.graphNodes.lookup(n.id))u.put(n.id,n);else throw"The node "+n.id+" is not present at the graphNodes map.";
});r.forEach(function(n){if(t.edges.lookup(n.id))f.put(n.id,n);else throw"The edge "+n.id+" is not present at the edges map.";
});(f.count>0||u.count>0)&&t.edges.modify(function(){t.edges.toArray().forEach(function(n){(u.lookup(
n.startNodeId())||u.lookup(n.endNodeId()))&&f.put(n.id(),{id:n.id()});f.lookup(n.id())&&t.edges.remove(
n.id())})});u.count>0&&t.graphNodes.modify(function(){u.forEach(function(n){t.graphNodes.remove(n.id)}
)});f.dispose();u.dispose()}},t}();t.GraphEntitiesDeletion=i})(i=t.Graph||(t.Graph={}))})(i=t.Visualization||
(t.Visualization={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){var t;(function(n){var t;(function(t){var i;(function(t){"use strict";var s=70,h=120,c=16,l=16,a,
r,v,f,y,i,e,u,o;(function(n){n[n.HexagonLayout=1]="HexagonLayout"})(t.Extensions||(t.Extensions={}));
a=t.Extensions;r=function(){function n(n,t){this.latitude=n;this.longitude=t}return n}();t.Location=
r,function(n){n[n.Solid=0]="Solid";n[n.AnimatedDashed=1]="AnimatedDashed"}(t.LinkType||(t.LinkType={
}));v=t.LinkType;f=function(){function n(){this.id="";this.location=new r(0,0);this.metadata=new i}return n}
();t.Item=f,function(n){n[n.Source=0]="Source";n[n.Target=1]="Target";n[n.IconOnly=2]="IconOnly"}(t.
ItemType||(t.ItemType={}));y=t.ItemType;i=function(){function n(){this.icon=ko.observable({type:0,data:
"",palette:0});this.iconWidth=ko.observable(l);this.iconHeight=ko.observable(c)}return n}();t.ItemMetadata=
i;e=function(n){function t(){n.apply(this,arguments);this.type=1;this.text=ko.observable("");this.hasFill=
ko.observable(!1);this.itemScale=ko.observable(1)}return __extends(t,n),t}(i);t.HexagonLayoutItemMetadata=
e;u=function(){function n(){}return n}();t.Events=u;o=function(n){function t(t,i,r,f){i===void 0&&(i=
ko.observable([]));r===void 0&&(r=0);f===void 0&&(f={});t&&t.createChildLifetime||(t=undefined,i=arguments[
0],r=arguments[1],f=arguments[2],i===void 0&&(i=ko.observable([])),r===void 0&&(r=0),f===void 0&&(f=
{}));n.call(this,t);this.controlType=68;this.events=new u;this.width=ko.observable(505);this.height=
ko.observable(319);this.items=i;this.extensions=r;this.extensionOptions=f;this.extensions&1&&(this.extensionOptions.
hexagonLayout=$.extend(this._getDefaultOptions(),this.extensionOptions.hexagonLayout))}return __extends(
t,n),t.prototype.dispose=function(){n.prototype.dispose.call(this)},t.prototype._getDefaultOptions=function(
){return{showLinks:ko.observable(!1),links:ko.observable(),rows:ko.observable(s),columns:ko.observable(
h)}},t}(n.Loadable.ViewModel);t.ViewModel=o})(i=t.Map||(t.Map={}))})(t=n.Visualization||(n.Visualization=
{}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(i){var r;(function(i){"use strict";var f,e,o,s,r,u;(function(n){n[n.Small=0]="Small";
n[n.Medium=1]="Medium";n[n.Large=2]="Large";n[n.XLarge=3]="XLarge"})(i.Size||(i.Size={}));f=i.Size,function(
n){n[n.Horizontal=0]="Horizontal";n[n.Vertical=1]="Vertical"}(i.Orientation||(i.Orientation={}));e=i.
Orientation,function(n){n[n.Top=1]="Top";n[n.Left=2]="Left";n[n.Right=4]="Right";n[n.Bottom=8]="Bottom"}
(i.Alignment||(i.Alignment={}));o=i.Alignment,function(n){n[n.Solid=0]="Solid";n[n.CrossHatching=1]=
"CrossHatching";n[n.DiagonalHatching=2]="DiagonalHatching";n[n.DottedHatching=3]="DottedHatching"}(i.
HatchingPattern||(i.HatchingPattern={}));s=i.HatchingPattern;r=function(n){function t(){n.apply(this,
arguments);this.barCssClass=ko.observable("");this.showBarColor=ko.observable(!0);this.hatchingPattern=
ko.observable(0);this.unitAlignment=ko.observable(4);this.captionAlignment=ko.observable(1);this.hide=
ko.observable(!1);this.prioritized=ko.observable(!1)}return __extends(t,n),t}(n.ViewModels.Controls.
SingleSetting.ViewModel);i.SingleMetric=r;u=function(n){function t(t){n.call(this,t);this.items=ko.observableArray(
);this.orientation=ko.observable(0);this.size=ko.observable(2);this.visible=ko.observable(!0);this.controlType=
69}return __extends(t,n),t}(t.Loadable.ViewModel);i.ViewModel=u})(r=i.Metrics||(i.Metrics={}))})(i=t.
Visualization||(t.Visualization={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){var i;(function(i){var r;(function(i){"use strict";var u=n.
ViewModels.Controls.Visualization.Chart,e=n.ViewModels.Controls.Visualization.Metrics,f=function(n){
function t(t,i){t&&t.createChildLifetime||(t=undefined,i=arguments[0]);this.id=i;this.chart=new u.ViewModel(
t);this.chartHeight=ko.observable(1);this.noDataMessage=ko.observable("");this.cssClass=ko.observable(
"");n.call(this,t);this.chart.disabled=this.disabled}return __extends(t,n),t.prototype.dispose=function(
){n.prototype.dispose.call(this);this.chart.dispose()},t}(t.Loadable.ViewModel),r;i.PairedTimelineChart=
f;r=function(t){function i(i,r,u,f){i&&i.createChildLifetime||(i=undefined,r=arguments[0],u=arguments[
1],f=arguments[2]);t.call(this,i);this.controlType=70;this.ptCharts=r;this.extensionOptions=u;this.enableMetricsRules=
ko.observable(!1);this.enableRangeSelection=ko.observable(!1);this.metricsOptions={orientation:ko.observable(
1),size:ko.observable(1),visible:ko.observable(!0),disabled:ko.observable(!1),loading:ko.observable(
!1)};this.rangeSelectionViewModel=new n.ViewModels.Controls.Visualization.RangeSelection.ViewModel(this.
lifetimeManager,f)}return __extends(i,t),i}(t.Loadable.ViewModel);i.ViewModel=r})(r=i.PairedTimeline||
(i.PairedTimeline={}))})(i=t.Visualization||(t.Visualization={}))})(i=t.Controls||(t.Controls={}))})
(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){var i;(function(
t){"use strict";(function(n){n[n.Inside=0]="Inside";n[n.Outside=1]="Outside"})(t.LabelPosition||(t.LabelPosition=
{}));var r=t.LabelPosition,i=function(n){function t(t,i){n.call(this,t);this.controlType=86;this.labelPosition=
i&&i.labelPosition||ko.observable(1);this.rangeSelection=i&&i.rangeSelection||ko.observable()}return __extends(
t,n),t}(n.Base.ViewModel);t.ViewModel=i})(i=t.RangeSelection||(t.RangeSelection={}))})(t=n.Visualization||
(n.Visualization={}))})(t=n.Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){var t;(function(n){var t;(function(t){var i;(function(t){"use strict";(function(n){n[n.InProgress=
0]="InProgress";n[n.Error=1]="Error";n[n.Warning=2]="Warning";n[n.Success=3]="Success";n[n.Indeterminate=
4]="Indeterminate";n[n.IndeterminateVertical=5]="IndeterminateVertical"})(t.StatusType||(t.StatusType=
{}));var r=t.StatusType,i=function(n){function t(t){n.call(this,t);this.valuePercentage=ko.observable(
0);this.status=ko.observable(0);this.controlType=71}return __extends(t,n),t}(n.Loadable.ViewModel);t.
ViewModel=i})(i=t.ProgressBar||(t.ProgressBar={}))})(t=n.Visualization||(n.Visualization={}))})(t=n.
Controls||(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n)
{var t;(function(t){var i;(function(t){"use strict";var r,u,i;(function(n){n[n.Triangle=0]="Triangle";
n[n.Circle=1]="Circle"})(t.ErrorWarningShape||(t.ErrorWarningShape={}));r=t.ErrorWarningShape,function(
n){n[n.Auto=0]="Auto";n[n.CenterOnlySmall=1]="CenterOnlySmall";n[n.CenterOnlyMedium=2]="CenterOnlyMedium";
n[n.CenterOnlyLarge=3]="CenterOnlyLarge";n[n.Small=4]="Small";n[n.Medium=5]="Medium";n[n.MediumLarge=
6]="MediumLarge";n[n.Large=7]="Large"}(t.GaugeSize||(t.GaugeSize={}));u=t.GaugeSize;i=function(n){function t(
t){n.call(this,t);this.errorWarningShape=ko.observable(0);this.gaugeSize=ko.observable(0);this.instance=
ko.observable(55);this.instanceQuota=ko.observable(65);this.total=ko.observable(75);this.totalQuota=
ko.observable(80);this.totalCaption=ko.observable("total is {2}");this.showCenter=ko.observable(!0);
this.omitTotal=ko.observable(!1);this.noQuota=ko.observable(!1);this.maximum=ko.observable(100);this.
startOffset=ko.observable(-90);this.unit=ko.observable("%");this.valueDisplayFormat=ko.observable("{0}");
this.hideTick=ko.observable(!1);this.controlType=72}return __extends(t,n),t}(n.Loadable.ViewModel);t.
ViewModel=i})(i=t.QuotaGauge||(t.QuotaGauge={}))})(t=n.Visualization||(n.Visualization={}))})(t=n.Controls||
(n.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){
var i;(function(t){"use strict";(function(n){n[n.Auto=0]="Auto";n[n.CenterOnlySmall=1]="CenterOnlySmall";
n[n.CenterOnlyMedium=2]="CenterOnlyMedium";n[n.CenterOnlyLarge=3]="CenterOnlyLarge";n[n.Icon=4]="Icon";
n[n.Tiny=5]="Tiny";n[n.Small=6]="Small";n[n.Medium=7]="Medium";n[n.MediumLarge=8]="MediumLarge";n[n.
Large=9]="Large"})(t.GaugeSize||(t.GaugeSize={}));var r=t.GaugeSize,i=function(n){function t(t){n.call(
this,t);this.gaugeSize=ko.observable(0);this.hideTick=ko.observable(!0);this.maximum=ko.observable(100);
this.startOffset=ko.observable(-90);this.unit=ko.observable("");this.current=ko.observable(55);this.
captionDisplayFormat=ko.observable("");this.valueDisplayFormat=ko.observable("{0}");this.controlType=
73}return __extends(t,n),t}(n.ViewModels.Controls.Loadable.ViewModel);t.ViewModel=i})(i=t.SingleValueGauge||
(t.SingleValueGauge={}))})(i=t.Visualization||(t.Visualization={}))})(i=t.Controls||(t.Controls={}))}
)(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(
t){"use strict";(function(n){n[n.Auto=0]="Auto";n[n.CenterOnlySmall=1]="CenterOnlySmall";n[n.CenterOnlyMedium=
2]="CenterOnlyMedium";n[n.CenterOnlyLarge=3]="CenterOnlyLarge";n[n.Small=4]="Small";n[n.Medium=5]="Medium";
n[n.MediumLarge=6]="MediumLarge";n[n.Large=7]="Large"})(t.GaugeSize||(t.GaugeSize={}));var r=t.GaugeSize,
i=function(n){function t(t){n.call(this,t);this.gaugeSize=ko.observable(0);this.step=ko.observable(1);
this.maximum=ko.observable(8);this.startOffset=ko.observable(-90);this.current=ko.observable(1);this.
centerDisplayFormat=ko.observable("{0}");this.captionDisplayFormat=ko.observable("");this.controlType=
74}return __extends(t,n),t}(n.ViewModels.Controls.Loadable.ViewModel);t.ViewModel=i})(i=t.StepGauge||
(t.StepGauge={}))})(i=t.Visualization||(t.Visualization={}))})(i=t.Controls||(t.Controls={}))})(t=n.
ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(
t){var i;(function(t){"use strict";var r=n.Resources.Strings,u=412,e,i,f;(function(n){n[n.Text=1]="Text";
n[n.Binary=2]="Binary"})(t.Type||(t.Type={}));e=t.Type;i=function(){function n(n,t,i){this.status=n;
this.statusCode=t;this.errorMessage=i}return n}();t.Status=i;f=function(){function t(t){var f=this;this.
downloadStatus=ko.observable();this.addDefaultAuthorizationToken=t.addDefaultAuthorizationToken||!1;
this.authorizationToken=t.authorizationToken||ko.observable("");this.downloadType=t.downloadType||ko.
observable(1);this.headers=t.headers||ko.observable({});this.httpMethod=t.httpMethod||ko.observable(
"GET");this.targetFileName=t.targetFileName||ko.observable("");this.targetUri=t.targetUri||ko.observable(
"");this.errorMessage=t.errorMessage||ko.observable("");this.showDownloadProgressDialog=t.showDownloadProgressDialog||
ko.observable(!1);this.downloadProgressDialogOptions=t.downloadProgressDialogOptions;this.addDefaultAuthorizationToken===
!0&&n.Base.Security.getAuthorizationToken().then(function(n){n&&n.header?f.authorizationToken(n.header):
f.downloadStatus(new i(r.FileDownloadCommand.fileDownloadErrorStatus,u,r.FileDownloadCommand.authTokenNotAvailable))}
,function(n){f.downloadStatus(new i(r.FileDownloadCommand.fileDownloadErrorStatus,u,n))})}return t}(
);t.Context=f})(i=t.FileDownload||(t.FileDownload={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(t){var i;(function(t){var i;(function(i){"use strict";var r=function(
t){function i(i,r){i&&i.createChildLifetime||(i=undefined,r=arguments[0]);t.call(this,i);this.controlType=
82;this.type=7;this.context=r.context;this.label=r.label||ko.observable("");this.disabled=r.disabled||
ko.observable(!1);this.unauthorizedMessage=r.unauthorizedMessage||ko.observable(n.Resources.Strings.
FileDownload.unauthorizedText)}return __extends(i,t),i.prototype.unauthorized=function(t){t||(t=n.Resources.
Strings.FileDownload.unauthorizedText);this.unauthorizedMessage(t);this.disabled(!0)},i}(t.Loadable.
ViewModel);i.ViewModel=r})(i=t.FileDownloadButton||(t.FileDownloadButton={}))})(i=t.Controls||(t.Controls=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
n){"use strict";var t=function(){function n(n,t){this.uri=n;this.target=t?t:ko.observable("_blank")}
return n}();n.ClickableLink=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){"use strict";var r=
window,u=jQuery,i=function(t){function i(i,r,u,f,e,o){var s=this;o===void 0&&(o=null);t.call(this,i);
this.enableValidation=ko.observable(!1);this.valid=ko.observable(!0);this.validate=ko.observable(0);
this.label=ko.observable();this.labelPosition=ko.observable();this.validations=ko.observableArray([]);
this.delayValidationTimeout=ko.observable(n.ViewModels.Controls.ValidatableControl.DefaultDelayValidationTimeout);
this.enabled=ko.observable(!0);this.infoBalloonContent=ko.observable(e);this.initialValue=ko.computed(
function(){var n=r.getOriginalObservable();return n?n():o});this.value=ko.computed({read:function(){
var n=r.getEditableObservable();return n?n():o},write:function(n){var t=r.getEditableObservable();if(
t)t(n);else throw new Error("Form should not allow edits until an EditScope is loaded.");}});this.label(
u);this.labelPosition(0);f&&ko.utils.arrayPushAll(this.validations,f);e&&(this.infoBalloonContent=ko.
observable(e));this.dirty=ko.computed(function(){return s.value()!==s.initialValue()});this._enableValidationReactor=
ko.computed(function(){s.enableValidation(!!(r.getOriginalObservable()&&r.getEditableObservable()))}
);this.performValidation=ko.observable(null);this.ensureValidation=ko.observable(0);this._msPortalFxClearValidation=
ko.observable()}return __extends(i,t),i.prototype.dispose=function(){this.initialValue&&this.initialValue.
dispose();this.value&&this.value.dispose();this.dirty&&this.dirty.dispose();this._enableValidationReactor&&
(this._enableValidationReactor.dispose(),this._enableValidationReactor=null);t.prototype.dispose.call(
this)},i.prototype.clearValidation=function(){if(this._msPortalFxClearValidation())return this._msPortalFxClearValidation(
)();var n=Q.defer();return n.resolve(),n.promise},i}(n.ViewModels.Controls.Loadable.ViewModel);t.Field=
i})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i,r,u,f){var e=this;n.call(this,t,i,r,u,f);this.empty=ko.computed(function(){return!e.value()})}return __extends(
t,n),t.prototype.dispose=function(){this.empty&&this.empty.dispose();n.prototype.dispose.call(this)}
,t}(n.Field);n.NullableField=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){"use strict";var i=
window,r=jQuery,t=function(n){function t(t,i,r,u,f){n.call(this,t,i,r,u,f);this.editing=ko.observable(
!1)}return __extends(t,n),t}(n.NullableField);n.EditableField=t})(t=n.ViewModels||(n.ViewModels={}))}
(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(t,i,r,u,f){n.call(
this,t,i,r,u,f);this.editing=ko.observable(!1);this.valueUpdateTrigger=0}return __extends(t,n),t}(n.
EditableField);n.TypableField=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){"use strict";var i=
window,r=jQuery,t=function(n){function t(t,i,r,u,f,e,o,s,h,c){i===void 0&&(i=null);r===void 0&&(r=null);
u===void 0&&(u=0);f===void 0&&(f=10);e===void 0&&(e=[]);o===void 0&&(o=!1);s===void 0&&(s=null);h===
void 0&&(h=null);c===void 0&&(c=1);n.call(this,t,i,r,e,s,h);this.showStepMarkers=ko.observable(o);this.
min=ko.observable(u);this.max=ko.observable(f);this.step=ko.observable(c)}return __extends(t,n),t}(n.
Field);n.SliderBaseField=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){"use strict";var i=
window,r=jQuery,t=function(n){function t(t,i,r,u,f,e){n.call(this,t,i,r,u,e);this.emptyValueText=ko.
observable(f);this.popupAlignment=3;this.inputAlignment=10;this.dropDownWidth=ko.observable(0)}return __extends(
t,n),t}(n.EditableField);n.EditableComboField=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
n){"use strict";var r=window,u=jQuery,t=function(){function n(n,t){this.text=ko.isObservable(n)?n:ko.
observable(n);this.value=ko.isObservable(t)?t():t}return n}(),i;n.Option=t;i=function(n){function t(
t,i,r){n.call(this,t,i);r!==undefined&&(this.disabled=ko.isObservable(r)?r:ko.observable(r))}return __extends(
t,n),t}(t);n.DisablableOption=i})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(){"use strict";var n=window,t=jQuery})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(
n){function t(t,i,r,u){n.call(this,t,i,r);u!==undefined&&(this.selected=ko.isObservable(u)?u:ko.observable(
u))}return __extends(t,n),t}(n.DisablableOption);n.SelectableOption=t})(t=n.Forms||(n.Forms={}))})(t=
n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict";
var n=window,t=jQuery})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n)
{var t;(function(n){var t;(function(){"use strict";var n=window,t=jQuery})(t=n.Forms||(n.Forms={}))}
)(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i,r,u,f,e){n.call(this,t,i,r,f,e,u.length===0||u[0].options().length===0?undefined:u[0].options()[
0].value);this.groups=ko.observableArray();ko.utils.arrayPushAll(this.groups,u)}return __extends(t,n),
t}(n.Field);n.GroupsField=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){"use strict";var i=
window,r=jQuery,t=function(n){function t(t,i,r,u,f,e){if(u.length===0)throw new Error("'values' array must contain one or more FormOption values.");
n.call(this,t,i,r,f,e,u[0].value);this.options=ko.observableArray();ko.utils.arrayPushAll(this.options,
u)}return __extends(t,n),t}(n.Field);n.OptionsField=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t;(function(n){n[
n.Invalid=0]="Invalid";n[n.Section=1]="Section";n[n.TextBox=2]="TextBox";n[n.DropDown=3]="DropDown";
n[n.OptionsGroup=4]="OptionsGroup";n[n.Password=5]="Password";n[n.Slider=6]="Slider";n[n.CheckBox=7]=
"CheckBox";n[n.MultiselectDropDown=8]="MultiselectDropDown";n[n.RangeSlider=9]="RangeSlider";n[n.NumericTextBox=
10]="NumericTextBox";n[n.Selector=11]="Selector";n[n.FilterCombo=12]="FilterCombo";n[n.MultiLineTextBox=
13]="MultiLineTextBox";n[n.DateTimeCombo=14]="DateTimeCombo";n[n.DynamicSection=15]="DynamicSection";
n[n.Attachment=16]="Attachment";n[n.StringList=17]="StringList";n[n.HtmlEditor=18]="HtmlEditor";n[n.
History=19]="History";n[n.ArtifactLinks=20]="ArtifactLinks";n[n.Splitter=21]="Splitter";n[n.TriStateCheckBox=
22]="TriStateCheckBox";n[n.CustomHtml=23]="CustomHtml";n[n.TimePicker=24]="TimePicker";n[n.DatePicker=
25]="DatePicker";n[n.DateTimePicker=26]="DateTimePicker";n[n.DateTimeRangePicker=27]="DateTimeRangePicker";
n[n.FileUpload=28]="FileUpload";n[n.OAuthButton=29]="OAuthButton";n[n.TokenComboBox=30]="TokenComboBox";
n[n.QueryBuilder=31]="QueryBuilder";n[n.DockedBalloon=32]="DockedBalloon";n[n.DiffEditor=33]="DiffEditor";
n[n.DiffList=34]="DiffList";n[n.DiffView=35]="DiffView";n[n.DiscussionTimeline=36]="DiscussionTimeline";
n[n.Editor=37]="Editor";n[n.Button=38]="Button";n[n.pcCheckBox=39]="pcCheckBox";n[n.CopyableLabel=40]=
"CopyableLabel";n[n.pcDateTimeCombo=41]="pcDateTimeCombo";n[n.pcDropDown=42]="pcDropDown";n[n.pcFilterCombo=
43]="pcFilterCombo";n[n.pcGroupDropDown=44]="pcGroupDropDown";n[n.pcMultiLineTextBox=45]="pcMultiLineTextBox";
n[n.pcMultiselectDropDown=46]="pcMultiselectDropDown";n[n.pcNumericTextBox=47]="pcNumericTextBox";n[
n.pcOptionPicker=48]="pcOptionPicker";n[n.pcPassword=49]="pcPassword";n[n.pcRangeSlider=50]="pcRangeSlider";
n[n.pcSelector=51]="pcSelector";n[n.pcSlider=52]="pcSlider";n[n.pcTextBox=53]="pcTextBox";n[n.pcGrid=
54]="pcGrid";n[n.Gallery=55]="Gallery";n[n.pcListView=56]="pcListView";n[n.pcTreeView=57]="pcTreeView";
n[n.LogStream=58]="LogStream";n[n.Scrollbar=59]="Scrollbar";n[n.Settings=60]="Settings";n[n.SingleSetting=
61]="SingleSetting";n[n.Toolbar=62]="Toolbar";n[n.Chart=63]="Chart";n[n.CsmTopology=64]="CsmTopology";
n[n.Donut=65]="Donut";n[n.Gauge=66]="Gauge";n[n.Graph=67]="Graph";n[n.Map=68]="Map";n[n.Metrics=69]=
"Metrics";n[n.PairedTimeline=70]="PairedTimeline";n[n.ProgressBar=71]="ProgressBar";n[n.QuotaGauge=72]=
"QuotaGauge";n[n.SingleValueGauge=73]="SingleValueGauge";n[n.StepGauge=74]="StepGauge";n[n.Console=75]=
"Console";n[n.DeleteAssetConfirmation=76]="DeleteAssetConfirmation";n[n.HeroBanner=77]="HeroBanner";
n[n.InfoBox=78]="InfoBox";n[n.Notice=79]="Notice";n[n.Picker=80]="Picker";n[n.FileUploadWidget=81]="FileUploadWidget";
n[n.FileDownloadButton=82]="FileDownloadButton";n[n.CreatorAndSelector=83]="CreatorAndSelector";n[n.
HotSpot=84]="HotSpot";n[n.CreatorAndSelectorV2=85]="CreatorAndSelectorV2";n[n.RangeSelection=86]="RangeSelection";
n[n.LinkInfoBox=87]="LinkInfoBox";n[n.LinkHotSpot=88]="LinkHotSpot";n[n.PreviewTag=89]="PreviewTag"}
)(n.ControlType||(n.ControlType={}));t=n.ControlType})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(){"use strict";var n=window,t=jQuery})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){"use strict";var i=window,
r=jQuery,t;(function(n){n[n.Invalid=0]="Invalid";n[n.Required=1]="Required";n[n.RegExMatch=2]="RegExMatch";
n[n.NotRegExMatch=3]="NotRegExMatch";n[n.Contains=4]="Contains";n[n.NotContains=5]="NotContains";n[n.
ContainsCharacters=6]="ContainsCharacters";n[n.NotContainsCharacters=7]="NotContainsCharacters";n[n.
HasDigit=8]="HasDigit";n[n.HasLetter=9]="HasLetter";n[n.HasUpperCaseLetter=10]="HasUpperCaseLetter";
n[n.HasLowerCaseLetter=11]="HasLowerCaseLetter";n[n.HasPunctuation=12]="HasPunctuation";n[n.Equals=13]=
"Equals";n[n.LengthRange=14]="LengthRange";n[n.MinLength=15]="MinLength";n[n.MaxLength=16]="MaxLength";
n[n.Numeric=17]="Numeric";n[n.Range=18]="Range";n[n.MinValue=19]="MinValue";n[n.MaxValue=20]="MaxValue";
n[n.Custom=21]="Custom";n[n.CaseInsensitiveComparison=22]="CaseInsensitiveComparison";n[n.LocaleAwareCaseInsensitiveComparison=
23]="LocaleAwareCaseInsensitiveComparison"})(n.FormValidationType||(n.FormValidationType={}));t=n.FormValidationType}
)(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){"use strict";
var i=window,r=jQuery,t=function(){function n(n){this.type=n}return n}();n.Validation=t})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict";var n=window,
t=jQuery})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(
n){function t(t,i){n.call(this,t);this.message=i;this.isEmptyValid=ko.observable(!1)}return __extends(
t,n),t}(n.Validation);n.StaticMessageValidation=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){"use strict";var i=window,r=jQuery,t=function(n){function t(t,i){n.call(this,22,i);this.compareTo=
t}return __extends(t,n),t}(n.StaticMessageValidation);n.CaseInsensitiveComparisonValidation=t})(t=n.
ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t)
{function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i){n.call(this,6,i);this.characters=t}return __extends(t,n),t}(n.StaticMessageValidation);n.ContainsCharactersValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i){n.call(this,4,i);this.searchString=t}return __extends(t,n),t}(n.StaticMessageValidation);n.ContainsValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i){n.call(this,21);this.message=t;this.validate=i}return __extends(t,n),t}(n.Validation);n.CustomValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i){n.call(this,13,i);this.compareTo=t}return __extends(t,n),t}(n.StaticMessageValidation);n.EqualsValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t){n.call(this,8,t)}return __extends(t,n),t}(n.StaticMessageValidation);n.HasDigitValidation=t})(t=n.
ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t)
{function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t){n.call(this,9,t)}return __extends(t,n),t}(n.StaticMessageValidation);n.HasLetterValidation=t})(t=
n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,
t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t){n.call(this,11,t)}return __extends(t,n),t}(n.StaticMessageValidation);n.HasLowerCaseLetterValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t){n.call(this,12,t)}return __extends(t,n),t}(n.StaticMessageValidation);n.HasPunctuationValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t){n.call(this,10,t)}return __extends(t,n),t}(n.StaticMessageValidation);n.HasUpperCaseLetterValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i,r){n.call(this,14,r);this.min=t;this.max=i}return __extends(t,n),t}(n.StaticMessageValidation);n.
LengthRangeValidation=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){"use strict";var i=
window,r=jQuery,t=function(n){function t(t,i){n.call(this,23,i);this.compareTo=t}return __extends(t,
n),t}(n.StaticMessageValidation);n.LocaleAwareCaseInsensitiveComparisonValidation=t})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(t,
i){n.call(this,16,i);this.max=t}return __extends(t,n),t}(n.StaticMessageValidation);n.MaxLengthValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i){n.call(this,20,i);this.max=t}return __extends(t,n),t}(n.StaticMessageValidation);n.MaxValueValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i){n.call(this,15,i);this.min=t}return __extends(t,n),t}(n.StaticMessageValidation);n.MinLengthValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i){n.call(this,19,i);this.min=t}return __extends(t,n),t}(n.StaticMessageValidation);n.MinValueValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i){n.call(this,7,i);this.characters=t}return __extends(t,n),t}(n.StaticMessageValidation);n.NotContainsCharactersValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i){n.call(this,5,i);this.searchString=t}return __extends(t,n),t}(n.StaticMessageValidation);n.NotContainsValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i){n.call(this,3,i);this.pattern=t}return __extends(t,n),t}(n.StaticMessageValidation);n.NotRegExMatchValidation=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t){n.call(this,17,t)}return __extends(t,n),t}(n.StaticMessageValidation);n.NumericValidation=t})(t=n.
ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t)
{function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,r=jQuery,t=function(n){function t(
t,i,r){n.call(this,18,r);this.min=t;this.max=i}return __extends(t,n),t}(n.StaticMessageValidation);n.
RangeValidation=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.
__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[
i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){"use strict";var i=window,
r=jQuery,t=function(n){function t(t,i){n.call(this,2,i);this.pattern=t}return __extends(t,n),t}(n.StaticMessageValidation);
n.RegExMatchValidation=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){"use strict";var i=
window,r=jQuery,t=function(n){function t(t){n.call(this,1,t)}return __extends(t,n),t}(n.StaticMessageValidation);
n.RequiredValidation=t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(t)
{"use strict";var r=window,u=jQuery,i=function(n){function t(t,i,r,u,f,e){n.call(this,t,i,r,u,f);this.
controlType=7;this.inlineLabel=e||!1}return __extends(t,n),t}(n.Field);t.CheckBoxField=i})(t=n.Obsolete||
(n.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(t){"use strict";var u=
window,f=jQuery,i=function(){function n(){this.startDateTime=ko.observable(null);this.endDateTime=ko.
observable(null)}return n}(),r;t.DateTimeRange=i;r=function(n){function t(t,r,u,f,e,o){n.call(this,t,
r,u,f,e,o);this.formatString=ko.observable("D");this.enabledDateTimeRange=ko.observable(new i);this.
controlType=14}return __extends(t,n),t}(n.EditableComboField);t.DateTimeComboField=r})(t=n.Obsolete||
(n.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(t){"use strict";var r=
window,u=jQuery,i=function(n){function t(t,i,r,u,f,e){n.call(this,t,i,r,u,f,e);this.controlType=3}return __extends(
t,n),t}(n.OptionsField);t.DropDownField=i})(t=n.Obsolete||(n.Obsolete={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(i){"use strict";var u=window,f=jQuery,r=function(t){function i(
i,r,u,f,e,o,s,h,c,l){var a=this;f===void 0&&(f=[]);e===void 0&&(e=null);o===void 0&&(o=null);t.call(
this,i,r,u,h,l);this.filteredItems=ko.observable([]);this.filterText=ko.observable("");this.noRowsMessage=
ko.observable("No results.");this.filterInProgress=ko.observable(!1);this._values=ko.observable();this.
_values=ko.observable(f);this.iconLookup=e;this.iconSize=ko.observable(o);this.filterOptions=s;this.
controlType=12;this.emptyValueText=ko.observable(c);this.populated=ko.computed(i,function(){return a.
_values().length!==0});(new n.ViewModels.Forms.FilterComboBox.FilterFactory).getSearchFilter(i,this,
s)}return __extends(i,t),Object.defineProperty(i.prototype,"items",{get:function(){return this._values}
,enumerable:!0,configurable:!0}),i}(t.EditableComboField);i.FilterComboField=r})(i=t.Obsolete||(t.Obsolete=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){"use strict";var r=window,u=jQuery,
i=function(n){function t(t,i){var r=this;n.call(this,t);this.controlType=1;this.validate=ko.observable(
0);this.fields=ko.observableArray();this._subscriptions=[];this._dirtyComputed=ko.computed(function(
){return r.fields().some(function(n){return n.dirty()})});this.dirty=this._dirtyComputed;this._validComputed=
ko.computed(function(){var n=r.fields().some(function(n){return!n.valid()});return!n});this.valid=this.
_validComputed;this._subscriptions.push(this.validate.subscribe(function(n){r.fields().forEach(function(
t){t.validate(n)})}));i&&ko.utils.arrayPushAll(this.fields,i)}return __extends(t,n),t.prototype.dispose=
function(){this._subscriptions.length>0&&(this._subscriptions.forEach(function(n){n.dispose()}),this.
_subscriptions=[]);this._dirtyComputed&&(this._dirtyComputed.dispose(),this._dirtyComputed=null);this.
_validComputed&&(this._validComputed.dispose(),this._validComputed=null);n.prototype.dispose.call(this)}
,t.prototype.clearValidation=function(){var n=[];return this.fields().forEach(function(t){var i=t.clearValidation(
);i&&n.push(i)}),Q.all(n)},t}(n.ViewModels.Controls.Loadable.ViewModel);t.FormSection=i})(i=t.Obsolete||
(t.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(t){"use strict";var r=
window,u=jQuery,i=function(n){function t(t,i,r,u,f,e,o){n.call(this,t,i,r,u,e);this.controlType=13;this.
emptyValueText=ko.observable(f);this.rows=ko.observable(o||7)}return __extends(t,n),t}(n.TypableField);
t.MultiLineTextField=i})(t=n.Obsolete||(n.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){var t;(function(t){"use strict";var r=window,u=jQuery,i=function(n){function t(t,i,r,u,f,e,o,s){n.
call(this,t,i,r,u,o,s);this.formatSetting=null;this.multiselect=null;this.maxSelectAllowed=null;this.
multiItemsDisplayFormat=null;this.multiItemsMaxDisplayFormat=null;this.valueSeparator=null;this.displaySeparator=
null;this.valueInitialized=!1;f&&(this.multiselect=f);e&&(this.formatSetting=e);this.controlType=8}return __extends(
t,n),t}(n.GroupsField);t.MultiselectDropDownField=i})(t=n.Obsolete||(n.Obsolete={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(t){"use strict";var r=window,u=jQuery,i=function(
n){function t(t,i,r,u,f){n.call(this,t,i,r,u,f);this.min=ko.observable(null);this.max=ko.observable(
null);this.decimalPoint=ko.observable(2);this.placeholder=ko.observable(null);this.invalidText="Value must be a valid number.";
this.controlType=10}return __extends(t,n),t}(n.EditableField);t.NumericTextBoxField=i})(t=n.Obsolete||
(n.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(t){"use strict";var r=
window,u=jQuery,i=function(n){function t(t,i,r,u,f,e){n.call(this,t,i,r,u,f,e);this.controlType=4}return __extends(
t,n),t}(n.OptionsField);t.OptionsGroupField=i})(t=n.Obsolete||(n.Obsolete={}))})(t=n.ViewModels||(n.
ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r},function(n){var t;(function(n){var t;(function(t){"use strict";var r=window,u=jQuery,i=function(n)
{function t(t,i,r,u,f){n.call(this,t,i,r,u,f);this.emptyValueText=ko.observable();this.controlType=5}
return __extends(t,n),t}(n.EditableField);t.PasswordField=i})(t=n.Obsolete||(n.Obsolete={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(t){"use strict";var u=window,f=jQuery,i=";",r=
function(n){function t(t,r,u,f,e,o,s,h,c){var l=this,a,v;r===void 0&&(r=null);u===void 0&&(u=null);f===
void 0&&(f=0);e===void 0&&(e=10);o===void 0&&(o=[]);s===void 0&&(s=!1);h===void 0&&(h=null);c===void
0&&(c=1);n.call(this,t,r,u,f,e,o,s,h,[f,e].join(i),c);this.controlType=9;a=ko.computed({read:function(
){var u=l.value()?l.value():"",t=u.split(i),r=l.min(),n=NaN;return t.length===2&&(n=parseFloat(t[0]),
isNaN(n)||(r=n)),Math.max(r,l.min())},write:function(n){l.value([n,l.end()].join(i))}});v=ko.computed(
{read:function(){var u=l.value()?l.value():"",t=u.split(i),r=l.max(),n=NaN;return t.length===2&&(n=parseFloat(
t[1]),isNaN(n)||(r=n)),Math.min(r,l.max())},write:function(n){l.value([l.start(),n].join(i))}});this.
start=a;this.end=v;this._addDisposablesToCleanUp([a,v])}return __extends(t,n),t}(n.SliderBaseField);
t.RangeSliderField=r})(t=n.Obsolete||(n.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){var t;(function(t){"use strict";var r=window,u=jQuery,i=function(t){function i(i,r,u,f,e,o,s,h){var
c=this;t.call(this,i,r,u,f,e);this.defaultValue=ko.observable();this.showValue=ko.observable(!0);this.
displayText=ko.observable("");this.icon=ko.observable();this.locked=ko.observable(!1);this.lockedBalloonText=
ko.observable("");this.infoBalloonText=ko.observable(e);this.infoBalloonLink=ko.observable(h);this.controlType=
11;this.isDefault=ko.computed(function(){return c.defaultValue()===c.value()});this.selectable=new n.
Selectable({allowUnselect:!1,selectedValue:arguments.length===7?s:null,isSelected:o&&o.selectable&&o.
selectable.isSelected,isActivated:o&&o.selectable&&o.selectable.isActivated})}return __extends(i,t),
i.prototype.dispose=function(){t.prototype.dispose.call(this);this.isDefault&&this.isDefault.dispose(
)},i}(n.EditableField);t.SelectorField=i})(t=n.Obsolete||(n.Obsolete={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){var t;(function(t){"use strict";var r=window,u=jQuery,i=function(n){function t(
t,i,r,u,f,e,o,s,h){i===void 0&&(i=null);r===void 0&&(r=null);u===void 0&&(u=0);f===void 0&&(f=10);e===
void 0&&(e=[]);o===void 0&&(o=!1);s===void 0&&(s=null);h===void 0&&(h=1);n.call(this,t,i,r,u,f,e,o,s,
undefined,h);this.controlType=6}return __extends(t,n),t}(n.SliderBaseField);t.SliderField=i})(t=n.Obsolete||
(n.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(t){"use strict";var r=
window,u=jQuery,i=function(n){function t(t,i,r,u,f,e){n.call(this,t,i,r,u,e);this.emptyValueText=ko.
observable();this.controlType=2;this.emptyValueText(f)}return __extends(t,n),t}(n.TypableField);t.TextField=
i})(t=n.Obsolete||(n.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})
),function(n){var t;(function(n){var t;(function(){"use strict";var n=window,t=jQuery})(t=n.Forms||(n.
Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t){"use strict";(function(
n){n[n.Top=0]="Top";n[n.Left=1]="Left"})(t.LabelPosition||(t.LabelPosition={}));var r=t.LabelPosition,
i;(function(t){var i;(function(t){var i=function(n){function t(t,i){n.call(this,t);t.registerForDispose(
this);this.label=i&&i.label||ko.observable(null);this.labelPosition=i&&i.labelPosition||ko.observable(
0);this.infoBalloonContent=i&&i.infoBalloonContent||ko.observable(null);this.infoBalloonLinkContent=
i&&i.infoBalloonLinkContent||ko.observable(null)}return __extends(t,n),t}(n.ViewModels.Controls.Loadable.
ViewModel);t.ViewModel=i})(i=t.LabelAndBalloon||(t.LabelAndBalloon={}))})(i=t.Base||(t.Base={}))})(i=
t.Forms||(t.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function()
{"use strict"})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(i){"use strict";
var r=function(t){function i(i,r,u,f){var e=null,o=null,s=null;n.Util.isNullOrUndefined(r)||r.valid&&
r.sections?!n.Util.isNullOrUndefined(r)&&r.valid&&r.sections&&(e=r):f=r;typeof u=="string"?o=u:u&&(s=
u);this._form=e;this._options=f||{};t.call(this,i,this._options);this.controlType=0;this.enableValidation=
ko.observable(!1);this.valid=ko.observable(!0);this.validate=ko.observable(0);this.delayValidationTimeout=
ko.observable(n.ViewModels.Controls.ValidatableControl.DefaultDelayValidationTimeout);this.enabled=ko.
observable(!0);this.performValidation=ko.observable(null);this.ensureValidation=ko.observable(0);this.
validations=this._options.validations||ko.observableArray([]);this.defaultValue=this._options.defaultValue||
ko.observable(null);this.initialValue=ko.observable(null);this._previousEditScope=null;this.telemetryKeys=
this._options.telemetryKeys;n.Util.isNullOrUndefined(e)?(this.value=ko.observable(this.defaultValue(
)),this.initialValue(this.defaultValue()),this.dirty=ko.computed(function(){return!1}),this.enableValidation(
!0)):o?this._setEditScopeAccessors(e._createEditScopeAccessorFromPath(o),e):s?this._setEditScopeAccessors(
s,e):this.value=ko.observable(this.defaultValue());this._msPortalFxClearValidation=ko.observable()}return __extends(
i,t),i.prototype.dispose=function(){this.initialValue&&this.initialValue.dispose&&this.initialValue.
dispose();this.value&&this.value.dispose&&this.value.dispose();this.dirty&&this.dirty.dispose&&this.
dirty.dispose();this._enableValidationReactor&&this._enableValidationReactor.dispose();t.prototype.dispose.
call(this)},i.prototype.setFieldValueAccessors=function(n){this._setEditScopeAccessors(n)},i.prototype.
_setEditScopeAccessors=function(t){if(n.Util.isNullOrUndefined(this._editScopeAccessors))if(t.createdByBaseFormClass)
this._editScopeAccessors=t,this._initializeFieldStateObservables();else{n.Base.Diagnostics.Log.writeEntry(
2,"MsPortalFx.ViewModels.Forms.Field.EditScopeAccessorsNotCreatedByFormFactory","Field._setEditScopeAccessors only accepts EditScopeAccessors created by the Form.createEditScopeAccessors factory method.");
throw new Error("Field._setEditScopeAccessors only accepts EditScopeAccessors created by the Form.createEditScopeAccessors factory method.");
}else{n.Base.Diagnostics.Log.writeEntry(2,"MsPortalFx.ViewModels.Forms.Field.SetEditScopeAccessorsCanOnlyBeCalledOnce",
"Field._setEditScopeAccessors can only be called once.");throw new Error("Field._setEditScopeAccessors can only be called once.");
}},i.prototype.clearValidation=function(){if(this._msPortalFxClearValidation())return this._msPortalFxClearValidation(
)();var n=Q.defer();return n.resolve(),n.promise},i.prototype.triggerValidation=function(){this.validate(
this.validate()+1)},i.prototype._initializeFieldStateObservables=function(){var t=this,i,r,u;this.initialValue=
ko.computed(function(){var n;return i&&i.dispose(),i=t.lifetimeManager.createChildLifetime(),n=t._editScopeAccessors.
getOriginalObservable(i),n?n():t.defaultValue()});this.value=ko.computed({read:function(){var i,f,u;
return r&&r.dispose(),r=t.lifetimeManager.createChildLifetime(),i=t._editScopeAccessors.getEditableObservable(
r),f=t.defaultValue.peek(),t._form&&(u=t._form.editScope(),t._previousEditScope!==u&&(t.enableValidation(
!1),t._previousEditScope=u)),n.Util.isNullOrUndefined(i)?f:i()},write:function(n){u&&u.dispose();u=t.
lifetimeManager.createChildLifetime();var i=t._editScopeAccessors.getEditableObservable(u);if(i)i(n)
else throw new Error("Form should not allow edits until an EditScope is loaded.");}});this.dirty=ko.
computed(function(){return t.value()!==t.initialValue()});this._enableValidationReactor=ko.computed(
function(){if(t._form)var n=t._form.editScope();t.enableValidation(!!(t._editScopeAccessors.getOriginalObservable(
i)&&t._editScopeAccessors.getEditableObservable(r)))})},i}(t.LabelAndBalloon.ViewModel);i.ViewModel=
r})(i=t.Input||(t.Input={}))})(i=t.Base||(t.Base={}))})(i=t.Forms||(t.Forms={}))})(t=n.ViewModels||(n.
ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r},function(n){var t;(function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";
var i=function(n){function t(t,i,r,u){var f=this;n.call(this,t,i,r,u);this.empty=ko.computed(function(
){return!f.value()})}return __extends(t,n),t.prototype.dispose=function(){this.empty&&this.empty.dispose(
);n.prototype.dispose.call(this)},t}(n.Input.ViewModel);t.ViewModel=i})(t=n.Nullable||(n.Nullable={})
)})(t=n.Base||(n.Base={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";var i=function(n){function t(
t,i,r,u){n.call(this,t,i,r,u);this.emptyValueText=this._options.emptyValueText||ko.observable("");this.
editing=ko.observable(!1)}return __extends(t,n),t}(n.Nullable.ViewModel);t.ViewModel=i})(t=n.Editable||
(n.Editable={}))})(t=n.Base||(n.Base={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";var i=function(
n){function t(t,i,r,u){n.call(this,t,i,r,u);this.valueUpdateTrigger=this._options.valueUpdateTrigger||
0;this.delayValidationTimeout=this._options.delayValidationTimeout||ko.observable(500)}return __extends(
t,n),t}(n.Editable.ViewModel);t.ViewModel=i})(t=n.Typable||(n.Typable={}))})(t=n.Base||(n.Base={}))}
)(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n)
{var t;(function(n){var t;(function(t){"use strict";var i=function(n){function t(t,i,r,u){n.call(this,
t,i,r,u);this.popupAlignment=3;this.inputAlignment=10;this.dropDownWidth=ko.observable(0)}return __extends(
t,n),t}(n.Editable.ViewModel);t.ViewModel=i})(t=n.EditableComboBox||(n.EditableComboBox={}))})(t=n.Base||
(n.Base={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=window,
r=i.fx&&i.fx.environment,f=r?r.isDevelopmentMode:!1,e,u;(function(n){n[n.Original=0]="Original";n[n.
Editable=1]="Editable"})(t.FieldValueAccessorType||(t.FieldValueAccessorType={}));e=t.FieldValueAccessorType;
u=function(){function t(n,t,i){var r=this;this.sections=ko.observableArray([]);t&&(this.editScope=t);
this._getNestedData=i;n.registerForDispose(this);this._lifetimeManager=n.createChildLifetime();this.
valid=ko.computed(function(){return!r.sections().some(function(n){return!n.valid()})});this._lifetimeManager.
registerForDispose(this.valid)}return Object.defineProperty(t.prototype,"editScope",{get:function(){
if(!this._editScope)throw new Error("The 'editScope' property needs to be set before the Form instance can be used.");
return this._editScope},set:function(n){if(this._editScope)throw new Error("The 'editScope' property should be only set once.");
this._editScope=n},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this._lifetimeManager&&
(this._lifetimeManager.dispose(),this._lifetimeManager=null)},t.prototype.createFieldValueAccessor=function(
n){var r=this,i,t;return typeof n=="string"?(i=n,t=function(n){return r._convertPathToVariable(n,i)}
):t=n,this.createCustomEditScopeAccessor(t)},t.prototype._createEditScopeAccessorFromPath=function(n)
{var t=this,i=function(i){return t._convertPathToVariable(i,n)};return this.createCustomEditScopeAccessor(
i)},t.prototype.createEditScopeAccessor=function(n){var t=this._sanitizeAccessor(n);return this.createCustomEditScopeAccessor(
t)},t.prototype.createCustomEditScopeAccessor=function(t){var i=this,r,u;return t.writeToEditScope?u=
t:r=t,r?{getOriginalObservable:function(t){var u=i.editScope(),f,e,o;if(u&&(e=u.getOriginal(u.root),
o=i._getNestedData?i._getNestedData(e):e,f=r(o,t,0),!f)){n.Base.Diagnostics.Log.writeEntry(2,"MsPortalFx.ViewModels.Form.MissingOriginalFieldObservable",
"EditScope data doesn't have an original observable for this form field.");throw new Error("EditScope data doesn't have an original observable for this form field.");
}return f},getEditableObservable:function(t){var e=i.editScope(),u,f,o;if(e&&(f=e.root,o=i._getNestedData?
i._getNestedData(f):f,u=r(o,t,1),!u)){n.Base.Diagnostics.Log.writeEntry(2,"MsPortalFx.ViewModels.Form.MissingEditableFieldObservable",
"EditScope data doesn't have an editable observable for this form field.");throw new Error("EditScope data doesn't have an editable observable for this form field.");
}return u},createdByBaseFormClass:!0}:{getOriginalObservable:function(n){if(!i.editScope())return null;
var t=ko.computed(function(){return u.readFromEditScope(i.editScope().getOriginal(i.editScope().root))}
);return n.registerForDispose(t),t},getEditableObservable:function(n){if(!i.editScope())return null;
var t=ko.computed({read:function(){return u.readFromEditScope(i.editScope().root)},write:function(n)
{u.writeToEditScope(i.editScope().root,n)}});return n.registerForDispose(t),t},createdByBaseFormClass:
!0}},t.prototype._sanitizeAccessor=function(n){var t,i;return n.readFromEditScope?t=n:i=n,i?this._sanitizeAccessorLambda(
i):{readFromEditScope:this._sanitizeAccessorLambda(t.readFromEditScope),writeToEditScope:this._sanitizeAccessorLambda(
t.writeToEditScope)}},t.prototype._sanitizeAccessorLambda=function(n){if(f){var t=n.toString().replace(
/\/\*[^*\\]*\*\//g,"").replace(/\/\/.*\n/g,""),i=t.replace(/^function\s*\(/g,"").split(")",1)[0],r=t.
replace(/^function\s*\(.*?\)/g,""),u="try {var ko = undefined;"+r+'}catch (e) {if (e instanceof ReferenceError) {MsPortalFx.ViewModels.Forms.Form.ViewModel._logEditScopeAccessorError("Do not reference any properties that are not on the edit scope you are accessing.");}if (e instanceof TypeError) {MsPortalFx.ViewModels.Forms.Form.ViewModel._logEditScopeAccessorError("Do not reference ko in edit scope accessor methods.");}throw e;} ';
return new Function(i,u)}return n},t._logEditScopeAccessorError=function(t){n.Base.Diagnostics.Log.writeEntry(
2,"EditScopeAccessor",t)},t.prototype._convertPathToVariable=function(t,i,r){r===void 0&&(r=".");var
f,e,u;try{for(i=i.replace(/\[/g,r).replace(/\]/g,""),i=i.charAt(0)===r?i.substr(1):i,f=i.split(r),u=
ko.utils.unwrapObservable(t)[f[0]],e=1;e<f.length;e++)u=ko.utils.unwrapObservable(u)[f[e]]}catch(o){
throw new Error("The 'path' parameter does not map to a value on the 'data' parameter.");}if(n.Util.
isNullOrUndefined(u)||!ko.isObservable(u)){n.Base.Diagnostics.Log.writeEntry(2,"MsPortalFx.ViewModels.Form.FieldValueAccessor.InvalidObservablePath",
"'observablePath' does not identify a non-null observable (observablePath: {0}).".format(i));throw new
Error("'observablePath' does not identify a non-null observable.");}return u},t}();t.ViewModel=u})(i=
t.Form||(t.Form={}))})(i=t.Forms||(t.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){var i;(function(i){"use strict";var r=function(t){function i(i,r,u,f){t.call(this,
i,r,u,f);this.groups=this._options.groups||ko.observableArray([]);this.groups().length===0||this.groups(
)[0].options().length===0||n.Util.isNullOrUndefined(this.defaultValue())&&this.defaultValue(this.groups(
)[0].options()[0].value)}return __extends(i,t),i}(t.Input.ViewModel);i.ViewModel=r})(i=t.Groups||(t.
Groups={}))})(i=t.Base||(t.Base={}))})(i=t.Forms||(t.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}
(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";var i=function(
n){function t(t,i,r,u){n.call(this,t,i,r,u);this.options=this._options.options||ko.observableArray([
])}return __extends(t,n),t}(n.Input.ViewModel);t.ViewModel=i})(t=n.Options||(n.Options={}))})(t=n.Base||
(n.Base={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.Base||(n.
Base={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={
}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){var i;(function(i){"use strict";var r=function(t){function i(i,r,u,f){var e=f||
{};n.Util.isNullOrUndefined(r)||typeof r.createEditScopeAccessor=="function"||(e=r);t.call(this,i,r,
u,f);this.min=e.min||ko.observable(0);this.max=e.max||ko.observable(10);this.step=e.step||ko.observable(
1);this.showStepMarkers=e.showStepMarkers||ko.observable(!0)}return __extends(i,t),i}(t.Input.ViewModel);
i.ViewModel=r})(i=t.Slider||(t.Slider={}))})(i=t.Base||(t.Base={}))})(i=t.Forms||(t.Forms={}))})(t=n.
ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t)
{function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(
t){"use strict";var i=n.ViewModels.Controls.Lists.Grid,r=function(n){function t(t,i,r,u){n.call(this,
t,i,r,u);this.controlType=20;var f=this._options;this.columns=f.columns||ko.observableArray([]);this.
name=ko.observable(f.name||null);this.summary=f.summary;this.removeItemText=f.removeItemText;this._msPortalFxGridViewModel=
this._createGridViewModel(f)}return __extends(t,n),Object.defineProperty(t.prototype,"selectableData",
{get:function(){return this._msPortalFxGridViewModel.selectableData},enumerable:!0,configurable:!0}),
t.prototype._createGridViewModel=function(n){var r=i.Extensions.SelectableRow|i.Extensions.Groupable|
i.Extensions.ContextMenuShortcut,u={selectableRow:{selectionMode:1,itemMatchesSelection:n.itemMatchesSelection,
createSelection:n.createSelection,activateOnSelected:ko.observable(!1)},groupable:{groupKey:ko.observable(
"group")},controlCommands:ko.observableArray()},t=new i.ViewModel(this.lifetimeManager,null,r,u);return t.
columns=this.columns,t.showHeader=!0,t.noRowsMessage=this.emptyValueText,this.summary&&(t.summary=this.
summary),t},t.prototype.setFieldValueAccessors=function(n){this._setEditScopeAccessors(n)},t.prototype.
_setEditScopeAccessors=function(t,i){var r=this;n.prototype._setEditScopeAccessors.call(this,t,i);ko.
isComputed(this.dirty)&&this.dirty.dispose();this.dirty=ko.computed(function(){var n=r.value(),t=r.initialValue(
);return!n&&!t?!1:!n||!t||n.length!==t.length?!0:t.reduce(function(t,i,r){return t||i&&n[r]&&i.uniqueId.
peek()!==n[r].uniqueId.peek()},!1)})},t}(n.ViewModels.Forms.Base.Editable.ViewModel);t.ViewModel=r})
(i=t.ArtifactLinks||(t.ArtifactLinks={}))})(i=t.Forms||(t.Forms={}))})(i=t.Vso||(t.Vso={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(t){"use strict";
var i=function(n){function t(t,i,r,u){n.call(this,t,i,r,u);this.controlType=16;this.value([]);this.maxFileSelection=
i&&i.maxFileSelection?i.maxFileSelection:u&&u.maxFileSelection?u.maxFileSelection:1}return __extends(
t,n),t.prototype.setFieldValueAccessors=function(n){this._setEditScopeAccessors(n)},t.prototype._setEditScopeAccessors=
function(t,i){var r=this;n.prototype._setEditScopeAccessors.call(this,t,i);ko.isComputed(this.dirty)&&
this.dirty.dispose();this.dirty=ko.computed(function(){return r.value()?(r.value().forEach(function(
n){if(n.uploadTrigger)return!0}),!1):!1})},t}(n.ViewModels.Forms.Base.Editable.ViewModel);t.ViewModel=
i})(i=t.Attachment||(t.Attachment={}))})(i=t.Forms||(t.Forms={}))})(i=t.Vso||(t.Vso={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";var r=window,
u=jQuery,i=function(n){function t(t,i,r,u){n.call(this,t,i,r,u);this.controlType=7;this.inlineLabel=
this._options.inlineLabel||!1}return __extends(t,n),t}(n.Base.Input.ViewModel);t.ViewModel=i})(t=n.CheckBox||
(n.CheckBox={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
n){var t;(function(t){"use strict";var i=function(n){function t(t,i){n.call(this,t,i);this.controlType=
23;this.htmlTemplate=i.htmlTemplate;this.innerViewModel=i.innerViewModel;this.validate=ko.observable(
0);this.valid=ko.observable(!0);this.dirty=ko.observable(!1);this.loading=ko.observable(!1);this._msPortalFxClearValidation=
ko.observable()}return __extends(t,n),t.prototype.clearValidation=function(){if(this._msPortalFxClearValidation(
))return this._msPortalFxClearValidation()();var n=Q.defer();return n.resolve(),n.promise},t}(n.Base.
LabelAndBalloon.ViewModel);t.ViewModel=i})(t=n.CustomHtml||(n.CustomHtml={}))})(t=n.Forms||(n.Forms=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(i){"use strict";
var r=function(t){function i(i,r,u,f){t.call(this,i,r,u,f);this.controlType=25;this.enabledDateTimeRange=
this._options.enabledDateTimeRange||ko.observable(new n.DateUtil.DateTimeRange)}return __extends(i,t),
i.prototype.setFieldValueAccessors=function(n){this._setEditScopeAccessors(n)},i.prototype._setEditScopeAccessors=
function(n){var i=this;t.prototype._setEditScopeAccessors.call(this,n);ko.isComputed(this.dirty)&&this.
dirty.dispose();this.dirty=ko.computed(function(){var n=i.value(),t=i.initialValue();return!n&&!t?!1:
!n||!t?!0:n.getFullYear()!==t.getFullYear()||n.getMonth()!==t.getMonth()||n.getDate()!==t.getDate()}
)},i}(t.Base.EditableComboBox.ViewModel);i.ViewModel=r})(i=t.DatePicker||(t.DatePicker={}))})(i=t.Forms||
(t.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){
var i;(function(t){"use strict";var i=function(t){function i(i,r,u,f){t.call(this,i,r,u,f);this.controlType=
14;this.formatString=this._options.formatString||ko.observable("D");this.enabledDateTimeRange=this._options.
enabledDateTimeRange||ko.observable(new n.DateUtil.DateTimeRange)}return __extends(i,t),i.prototype.
setFieldValueAccessors=function(n){this._setEditScopeAccessors(n)},i.prototype._setEditScopeAccessors=
function(n,i){var r=this;t.prototype._setEditScopeAccessors.call(this,n,i);ko.isComputed(this.dirty)&&
this.dirty.dispose();this.dirty=ko.computed(function(){var n=r.value(),t=r.initialValue();return!n&&
!t?!1:!n||!t?!0:n.getTime()!==t.getTime()})},i}(n.ViewModels.Forms.Base.EditableComboBox.ViewModel);
t.ViewModel=i})(i=t.DateTimeComboBox||(t.DateTimeComboBox={}))})(i=t.Forms||(t.Forms={}))})(i=t.Obsolete||
(t.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(i){
"use strict";var r=function(t){function i(i,r,u,f){t.call(this,i,r,u,f);this.controlType=26;this.enabledDateTimeRange=
this._options.enabledDateTimeRange||ko.observable(new n.DateUtil.DateTimeRange);this.showTimezoneDropdown=
this._options.showTimezoneDropdown||ko.observable(!1);this.timezoneOffset=this._options.timezoneOffset||
this.value()&&ko.observable(-this.value().getTimezoneOffset())||ko.observable(-(new Date).getTimezoneOffset(
))}return __extends(i,t),i.prototype.setFieldValueAccessors=function(n){this._setEditScopeAccessors(
n)},i.prototype._setEditScopeAccessors=function(n){var i=this;t.prototype._setEditScopeAccessors.call(
this,n);ko.isComputed(this.dirty)&&this.dirty.dispose();this.dirty=ko.computed(function(){var n=i.value(
),t=i.initialValue();return!n&&!t?!1:!n||!t?!0:Math.floor(n.getTime()/1e3)!==Math.floor(t.getTime()/
1e3)})},i}(t.Base.EditableComboBox.ViewModel);i.ViewModel=r})(i=t.DateTimePicker||(t.DateTimePicker=
{}))})(i=t.Forms||(t.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t)
{var i;(function(i){"use strict";var r=function(t){function i(i,r,u,f){t.call(this,i,r,u,f);this.controlType=
27;this.startDateTimeEnabledRange=this._options.startDateTimeEnabledRange||ko.observable(new n.DateUtil.
DateTimeRange);this.endDateTimeEnabledRange=this._options.endDateTimeEnabledRange||ko.observable(new
n.DateUtil.DateTimeRange);this.showTimezoneDropdown=this._options.showTimezoneDropdown||ko.observable(
!1);this.timezoneOffset=this._options.timezoneOffset||ko.observable(-(new Date).getTimezoneOffset());
this.displayFieldsInline=this._options.displayFieldsInline||ko.observable(!1)}return __extends(i,t),
i.prototype.setFieldValueAccessors=function(n){this._setEditScopeAccessors(n)},i.prototype._setEditScopeAccessors=
function(n){var i=this;t.prototype._setEditScopeAccessors.call(this,n);ko.isComputed(this.dirty)&&this.
dirty.dispose();this.dirty=ko.computed(function(){var n=i.value(),t=i.initialValue();return!n&&!t?!1:
!n||!t?!0:Math.floor(n.startDateTime().getTime()/1e3)!==Math.floor(t.startDateTime().getTime()/1e3)||
Math.floor(n.endDateTime().getTime()/1e3)!==Math.floor(t.endDateTime().getTime()/1e3)})},i}(t.Base.EditableComboBox.
ViewModel);i.ViewModel=r})(i=t.DateTimeRangePicker||(t.DateTimeRangePicker={}))})(i=t.Forms||(t.Forms=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";
var i=function(n){function t(t,i,r,u){n.call(this,t,i,r,u);this.controlType=3}return __extends(t,n),
t}(n.Base.Options.ViewModel);t.ViewModel=i})(t=n.DropDown||(n.DropDown={}))})(t=n.Forms||(n.Forms={})
)})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";
var r=2097152,o=r,s=209715200,h=1048576,c=53687091200,l=r,a,v,y,i,u,f,e;(function(n){n[n.Full=0]="Full";
n[n.Stream=1]="Stream";n[n.BlobStore=2]="BlobStore"})(t.FileUploadType||(t.FileUploadType={}));a=t.FileUploadType,
function(n){n[n.Default=0]="Default";n[n.Text=1]="Text";n[n.ArrayBuffer=2]="ArrayBuffer";n[n.DataUri=
3]="DataUri"}(t.ContentType||(t.ContentType={}));v=t.ContentType,function(n){n[n.Invalid=0]="Invalid";
n[n.Pending=1]="Pending";n[n.Uploading=2]="Uploading";n[n.Paused=3]="Paused";n[n.Complete=4]="Complete";
n[n.Canceled=5]="Canceled"}(t.UploadStatus||(t.UploadStatus={}));y=t.UploadStatus;i=function(){function n(
){this.type=0;this.contentType=0;this.encoding=null;this.maxFileSize=r;this.chunkSize=o}return n}();
t.FullFileUploadContext=i;u=function(n){function t(){n.call(this);this.type=1;this.maxFileSize=s;this.
chunkSize=h}return __extends(t,n),t}(i);t.StreamFileUploadContext=u;f=function(n){function t(){n.call(
this);this.context=ko.observable();this.sasUriCommand=ko.observable();this.type=2;this.maxFileSize=c;
this.chunkSize=l;this.skipSasUriUpdateWithSelectedFile=ko.observable(!1)}return __extends(t,n),t}(i);
t.BlobStoreFileUploadContext=f;e=function(n){function t(t,r,u,f){n.call(this,t,r,u,f);this.controlType=
81;var e=this._options;this.accept=e.accept||"";this.maxFiles=e.maxFiles||1;this.uploadContext=e.uploadContext||
ko.observable(new i);this.cancelAllUploads=e.cancelAllUploads||ko.observable(!1);this.showProgressBars=
e.showProgressBars||ko.observable(!0);this.files=ko.observable([])}return __extends(t,n),t}(n.Base.Editable.
ViewModel);t.ViewModel=e})(t=n.FileUpload||(n.FileUpload={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";var a,v,r,u,
c,f,o,e,s,h,i,l;(function(n){n[n.List=0]="List";n[n.Tree=1]="Tree"})(t.DatasetType||(t.DatasetType={
}));a=t.DatasetType,function(n){n[n.StringContainsFilterText=0]="StringContainsFilterText";n[n.WordStartsWithFilterText=
1]="WordStartsWithFilterText"}(t.AlgorithmType||(t.AlgorithmType={}));v=t.AlgorithmType;r=function(n)
{function t(t,i,r){n.call(this,t,i);this.children=r?r:[]}return __extends(t,n),t}(n.Option);t.HierarchicalFormOptionItem=
r;u=function(){function n(n){this.children=[];this.lineMatches=[];this._value=n&&n.toLocaleLowerCase(
)}return n.prototype.getChild=function(n){for(var i,t=0,r=this.children.length;t<r;t++)if(i=this.children[
t],i._value===n.toLocaleLowerCase())return i;return null},n.prototype.matchesValue=function(n){var t=
!1;return this._value&&(t=this._value===n.toLocaleLowerCase()),t},n}();t.Node=u,function(n){n[n.Direct=
0]="Direct";n[n.Parent=1]="Parent"}(c||(c={}));f=function(){function n(n,t,i){var r=this;this._filterInProgress=
!1;this._disposables=[];n.registerForDispose(this);this._viewModel=t;this._filterOptions=i;ko.reactor(
n,function(){r._filterInProgress=!0;var n=r.filterData(t.filterText());t.filterInProgress(r._viewModel.
items().length!==n.length);t.filteredItems(n);r._filterInProgress=!1})}return n.prototype.dispose=function(
){if(this._disposables)while(this._disposables.length)this._disposables.splice(0,1)[0].dispose()},n.
prototype.filterData=function(n){var t=this._viewModel.items();return t.filter(function(t){var i=t.text(
);return i?i.toLowerCase().indexOf(n.toLowerCase())>-1:!1})},n.prototype._setfilteredItems=function(
n){this._viewModel.filteredItems(n)},n}();t.SearchFilter=f;o=function(n){function t(t,i,r){var f=this,
u=r.delimiter||"\\";this._flattenTree(i,u);i.items.subscribe(function(){f._flattenTree(i,u)});n.call(
this,t,i,r)}return __extends(t,n),t.prototype._flattenTree=function(n,t){var e=n.items(),h,c,u,f,l;if(
e.length===1){for(var a=e[0],i=a,o=[],s=[];i;){if(h=new r(i.text(),i.value),o.push(h),i.children)for(
c=i.children.length,u=0;u<c;u++)f=i.children[u],l=i.text()+t+f.text(),f.text(l),s.push(f);i=s.shift(
)}n.items(o)}},t}(f);t.TreeSearchFilter=o;e=function(){function n(n,t,r){var u=this;this._filterInProgress=
!1;this._directMatchDictionary={};this._viewModel=t;this._filterOptions=r;this._prefixTree=new i;n.registerForDispose(
ko.computed(function(){u._filterInProgress||(u._directMatchDictionary={},u._prefixTree=new i,u._setFilteredItems(
u._viewModel.items()))}));n.registerForDispose(t.filterText.subscribe(function(n){u._filterInProgress=
!0;var i=u.filterData(n);t.filterInProgress(u._viewModel.items().length!==i.length);t.filteredItems(
i);u._filterInProgress=!1}))}return n.prototype.filterData=function(n){var r=this,t=[],i={},u=this._prefixTree.
getMatches(n);return u.forEach(function(n){i[n]||(t=t.concat(r._directMatchDictionary[n]),i[n]=!0)}),
this._sortItems(t)},n.prototype._setFilteredItems=function(n){var t=this;n.forEach(function(n){t._addToSearchOnInitialize(
n,n.text())});this._viewModel.filteredItems(n);this._viewModel.filterText("")},n.prototype._addToSearchOnInitialize=
function(n,t){this._pushItem(this._directMatchDictionary,n,t);this._addToPrefixTree(this._prefixTree,
t.split(" "),t)},n.prototype._addToPrefixTree=function(n,t,i,r){var o,u,f,e;for(r===void 0&&(r=" "),
o=t.length,u=0;u<o;u++)for(f=t[u],n.addWord(f,i),e=u+1;e<o;e++)f=f+r+t[e],n.addWord(f,i)},n.prototype.
_pushItem=function(n,t,i){var r=n[i];r?r.indexOf(t)===-1&&r.push(t):n[i]=[t]},n.prototype._sortItems=
function(n){var t=this;return n.sort(function(n,i){return t._compareItems(n,i)})},n.prototype._compareItems=
function(n,t){var i=(n.text()||"").toLocaleLowerCase(),r=(t.text()||"").toLocaleLowerCase();return i===
r?0:i>r?1:-1},n.prototype._setfilteredItems=function(n){this._viewModel.filteredItems(n)},n}();t.SearchFilterPrefixTree=
e;s=function(n){function t(t,r,u){n.call(this,t,r,u);this._childMatchDictionary={};this._childPrefixTree=
new i;n.call(this,t,r,u)}return __extends(t,n),t.prototype.filterData=function(n){var t=this._prefixTree.
getMatches(n),i=this._childPrefixTree.getMatches(n),r=this._processMatches(t,i);return this._ensureNoDuplicates(
r)},t.prototype._setFilteredItems=function(t){this._directMatchDictionary={};this._childMatchDictionary=
{};this._childPrefixTree=new i;t.length===1&&(this._filterOptions.delimiter||(this._filterOptions.delimiter=
"\\"),t=this._flattenTree(t[0]),this._viewModel.items(t));n.prototype._setFilteredItems.call(this,t)}
,t.prototype._addToSearchOnInitialize=function(){},t.prototype._ensureNoDuplicates=function(n){var i=
this,t=[];return n.forEach(function(n){i._itemArrayContains(t,n)||t.push(n)}),t},t.prototype._processMatch=
function(n,t){var u=this,i=[],r=[];return n.forEach(function(n){var f,e;t[n]||(f=u._directMatchDictionary[
n],f&&(i=i.concat(f)),e=u._childMatchDictionary[n],e&&(r=r.concat(e)),t[n]=!0)}),{filteredResults:i,
filteredChildResults:r,isResultProcessed:t}},t.prototype._processMatches=function(n,t){var r,u,i=this.
_processMatch(n,{}),f=this._processMatch(t,i.isResultProcessed);return r=i.filteredResults.concat(f.
filteredResults),u=i.filteredChildResults.concat(f.filteredChildResults),r.concat(u)},t.prototype._itemArrayContains=
function(n,t){var i=!1;return n.some(function(n){return i=t.text()===n.text()}),i},t.prototype._flattenTree=
function(n){for(var t=n,e=[],o=[],i,s,u;t;){if(i=new r("",""),t===n?(this._updateCurrentItem(i,i,t.text(
),t.text(),0),this._pushItem(this._directMatchDictionary,i,i.text())):(this._updateCurrentItem(i,i,t.
text(),t.text(),1),this._pushItem(this._childMatchDictionary,i,i.text())),e.push(i),t.children)for(s=
t.children.length,u=0;u<s;u++){var f=t.children[u],h=f.text(),c=t.text()+this._filterOptions.delimiter+
h;this._updateCurrentItem(f,t,h,c,0);this._pushItem(this._directMatchDictionary,i,t.text());o.push(f)}
t=o.shift()}return e},t.prototype._addTreeNodeToPrefixTree=function(n,t,i){this._addToPrefixTree(n,t.
split(" "),i);this._addToPrefixTree(n,t.split(this._filterOptions.delimiter),i,this._filterOptions.delimiter)}
,t.prototype._updateCurrentItem=function(n,t,i,r,u){switch(u){case 0:this._addTreeNodeToPrefixTree(this.
_prefixTree,i,r);break;case 1:this._addTreeNodeToPrefixTree(this._childPrefixTree,i,r)}n.value=r;n.text(
r)},t}(e);t.TreeSearchFilterPrefixTree=s;h=function(){function n(){}return n.prototype.getSearchFilter=
function(n,t,i){i||(i={datasetType:0},t.filterOptions=i);switch(i.datasetType){case 0:return this._buildListSearchFilter(
n,t,i);case 1:return this._buildTreeSearchFilter(n,t,i);default:return null}},n.prototype._buildListSearchFilter=
function(n,t,i){return i.algorithmType&&i.algorithmType===1?new e(n,t,i):new f(n,t,i)},n.prototype._buildTreeSearchFilter=
function(n,t,i){return i.algorithmType&&i.algorithmType===1?new s(n,t,i):new o(n,t,i)},n}();t.FilterFactory=
h;i=function(){function n(){this._root=new u}return n.prototype.addWord=function(n,t){for(var i=this.
_root,r=null,f=0,e=n.length;f<e;f++)r=i.getChild(n[f]),r||(r=new u(n[f]),i.children.push(r)),i=r;i.lineMatches.
indexOf(t)===-1&&i.lineMatches.push(t)},n.prototype.getMatches=function(n){for(var i=this._root,r,u=
[],t=0,f=n.length;t<f;t++){if(r=i.getChild(n[t]),!r)break;i=r}return t===n.length&&(u=this._findLineMatches(
i)),u},n.prototype._findLineMatches=function(n){var i=this,t=[];return n&&(t=t.concat(n.lineMatches),
n.children.forEach(function(n){t=t.concat(i._findLineMatches(n))})),t},n}();t.PrefixTree=i;l=function(
n){function t(t,i,r,u){var e=this,f;n.call(this,t,i,r,u);this.filteredItems=ko.observableArray([]);this.
filterText=ko.observable("");this.noRowsMessage=ko.observable("No results.");this.filterInProgress=ko.
observable(!1);this.controlType=12;f=this._options;f.options||(f.options=ko.observableArray());this.
value()&&this.filterText(this.value());this._values=f.options;this.populated=ko.computed(t,function(
){return e._values().length!==0});(new h).getSearchFilter(t,this,this._options.filterOptions)}return __extends(
t,n),Object.defineProperty(t.prototype,"items",{get:function(){return this._values},enumerable:!0,configurable:
!0}),t}(n.Base.EditableComboBox.ViewModel);t.ViewModel=l})(t=n.FilterComboBox||(n.FilterComboBox={})
)})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t)
{var i;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=n.ViewModels.Forms.FilterComboBox,
o=function(n){function t(t){n.call(this,t);this.rowsCount=ko.observable(7);this.columns=ko.observableArray(
[]);this.defaultColumnWidth=ko.observable("150px");this.valueKey=ko.observable("name");this.filteredItems=
ko.observableArray([]);this.filterText=ko.observable("");this.noRowsMessage=ko.observable("No results.");
this.filterInProgress=ko.observable(!1);this._items=ko.observableArray([]);this.controlType=43;this.
value(null);this.dropDownPositioning(2)}return __extends(t,n),Object.defineProperty(t.prototype,"items",
{get:function(){return this._items},enumerable:!0,configurable:!0}),t}(n.ViewModels.Controls.Forms.EditableCombo.
ViewModel),r,u,f,e;t.ViewModel=o;r=function(){function n(n,t){var r=this;this._filterInProgress=!1;this.
_directMatchDictionary={};this._viewModel=n;this._filterOptions=t;this._prefixTree=new i.PrefixTree;
ko.computed(function(){r._filterInProgress||(r._directMatchDictionary={},r._prefixTree=new i.PrefixTree,
r._setFilteredItems(r._viewModel.items()))});n.filterText.subscribe(function(t){r._filterInProgress=
!0;var i=r.filterData(t);n.filterInProgress(r._viewModel.items().length!==i.length);n.filteredItems(
i);r._filterInProgress=!1})}return n.prototype.filterData=function(n){var r=this,t=[],i={},u=this._prefixTree.
getMatches(n);return u.forEach(function(n){i[n]||(t=t.concat(r._directMatchDictionary[n]),i[n]=!0)}),
this._sortItems(t)},n.prototype._setFilteredItems=function(n){var t=this,i=this._viewModel.valueKey(
);n.forEach(function(n){var r=n[i];t._addToSearchOnInitialize(n,r)});this._viewModel.filteredItems(n);
this._viewModel.filterText("")},n.prototype._addToSearchOnInitialize=function(n,t){this._pushItem(this.
_directMatchDictionary,n,t);this._addToPrefixTree(this._prefixTree,t.split(" "),t)},n.prototype._addToPrefixTree=
function(n,t,i,r){var o,u,f,e;for(r===void 0&&(r=" "),o=t.length,u=0;u<o;u++)for(f=t[u],n.addWord(f,
i),e=u+1;e<o;e++)f=f+r+t[e],n.addWord(f,i)},n.prototype._pushItem=function(n,t,i){var r=n[i];r?r.indexOf(
t)===-1&&r.push(t):n[i]=[t]},n.prototype._sortItems=function(n){var t=this;return n.sort(function(n,
i){return t._compareItems(n,i)})},n.prototype._compareItems=function(n,t){var i=this._viewModel.valueKey(
),r=(n[i]||"").toLocaleLowerCase(),u=(t[i]||"").toLocaleLowerCase();return r===u?0:r>u?1:-1},n}();t.
SearchFilter=r;u=function(n){function t(t,r){n.call(this,t,r);this._defaultDelimiter="\\";this._childMatchDictionary=
{};this._childPrefixTree=new i.PrefixTree}return __extends(t,n),t.prototype.filterData=function(n){var
t=this._prefixTree.getMatches(n),i=this._childPrefixTree.getMatches(n),r=this._processMatches(t,i);return this.
_ensureNoDuplicates(r)},t.prototype._setFilteredItems=function(t){this._directMatchDictionary={};this.
_childMatchDictionary={};this._childPrefixTree=new i.PrefixTree;t.length===1&&(this._filterOptions.delimiter||
(this._filterOptions.delimiter=this._defaultDelimiter),t=this._flattenTree(t[0]),this._viewModel.items(
t));n.prototype._setFilteredItems.call(this,t)},t.prototype._addToSearchOnInitialize=function(){},t.
prototype._ensureNoDuplicates=function(n){var i=this,t=[];return n.forEach(function(n){i._itemArrayContains(
t,n,i._viewModel.valueKey())||t.push(n)}),t},t.prototype._processMatch=function(n,t){var u=this,i=[],
r=[];return n.forEach(function(n){var f,e;t[n]||(f=u._directMatchDictionary[n],f&&(i=i.concat(f)),e=
u._childMatchDictionary[n],e&&(r=r.concat(e)),t[n]=!0)}),{filteredResults:i,filteredChildResults:r,isResultProcessed:
t}},t.prototype._processMatches=function(n,t){var r,u,i=this._processMatch(n,{}),f=this._processMatch(
t,i.isResultProcessed);return r=i.filteredResults.concat(f.filteredResults),u=i.filteredChildResults.
concat(f.filteredChildResults),r.concat(u)},t.prototype._itemArrayContains=function(n,t,i){var r=!1;
return n.some(function(n){return r=t[i]===n[i]}),r},t.prototype._flattenTree=function(n){for(var t=n,
e=[],i=this._viewModel.valueKey(),o=[],r,s,u;t;){if(r={},t===n?(this._updateCurrentItem(r,r,t[i],t[i],
i,0),this._pushItem(this._directMatchDictionary,r,r[i])):(this._updateCurrentItem(r,r,t[i],t[i],i,1),
this._pushItem(this._childMatchDictionary,r,r[i])),e.push(r),t.children)for(s=t.children.length,u=0;
u<s;u++){var f=t.children[u],h=f[i],c=t[i]+this._filterOptions.delimiter+h;this._updateCurrentItem(f,
t,h,c,i,0);this._pushItem(this._directMatchDictionary,r,t[i]);o.push(f)}t=o.shift()}return e},t.prototype.
_addTreeNodeToPrefixTree=function(n,t,i){this._addToPrefixTree(n,t.split(" "),i);this._addToPrefixTree(
n,t.split(this._filterOptions.delimiter),i,this._filterOptions.delimiter)},t.prototype._updateCurrentItem=
function(n,t,i,r,u,f){switch(f){case 0:this._addTreeNodeToPrefixTree(this._prefixTree,i,r);break;case
1:this._addTreeNodeToPrefixTree(this._childPrefixTree,i,r)}n[u]=r},t}(r);t.TreeSearchFilter=u;f=function(
){function n(){}return n.prototype.getSearchFilter=function(n,t){t||(t={datasetType:0});switch(t.datasetType)
{case 0:return new r(n,t);case 1:return new u(n,t);default:return null}},n}();t.FilterFactory=f,function(
n){n[n.Direct=0]="Direct";n[n.Parent=1]="Parent"}(e||(e={}))})(i=t.FilterCombo||(t.FilterCombo={}))}
)(i=t.Forms||(t.Forms={}))})(i=t.Controls||(t.Controls={}))})(i=t.Obsolete||(t.Obsolete={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(t){"use strict";
var i=function(t){function i(i,r,u,f){t.call(this,i,r,u,f);this.links=ko.observableArray();this.controlType=
19;this.maxHeight=r&&r.maxHeight?r.maxHeight:f&&f.maxHeight?f.maxHeight:300;var e=r&&r.itemMatchesSelection?
r.itemMatchesSelection:f&&f.itemMatchesSelection?f.itemMatchesSelection:undefined,o=r&&r.createSelection?
r.createSelection:f&&f.createSelection?f.createSelection:undefined;this.selectableData=new n.ViewModels.
SelectableSet(this.links,e,o)}return __extends(i,t),i.prototype.setFieldValueAccessors=function(n){this.
_setEditScopeAccessors(n)},i.prototype._setEditScopeAccessors=function(n,i){t.prototype._setEditScopeAccessors.
call(this,n,i);ko.isComputed(this.dirty)&&this.dirty.dispose();this.dirty=ko.computed(function(){return!1}
)},i.prototype.dispose=function(){t.prototype.dispose.call(this);this.selectableData&&this.selectableData.
dispose()},i}(n.ViewModels.Forms.Base.Editable.ViewModel);t.ViewModel=i})(i=t.History||(t.History={})
)})(i=t.Forms||(t.Forms={}))})(i=t.Vso||(t.Vso={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){var t;(function(n){var t;(function(t){"use strict";var i=function(n){function t(t,i,r,u){n.call(this,
t,i,r,u);this.controlType=18}return __extends(t,n),t}(n.Base.Editable.ViewModel);t.ViewModel=i})(t=n.
HtmlEditor||(n.HtmlEditor={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){var t;(function(n){var t;(function(t){"use strict";var i=function(n){function t(t,i,r,u){n.call(this,
t,i,r,u);this.controlType=13;this.rows=this._options.rows||ko.observable(7)}return __extends(t,n),t}
(n.Base.Typable.ViewModel);t.ViewModel=i})(t=n.MultiLineTextBox||(n.MultiLineTextBox={}))})(t=n.Forms||
(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){
"use strict";var i=function(n){function t(t,i,r,u){n.call(this,t,i,r,u);this.controlType=8;var f=this.
_options;this.valueInitialized=!1;this.valueSeparator=";";this.popupShown=ko.observable(!1);this.multiselect=
f.multiselect||ko.observable(!0);this.showSelectAll=f.showSelectAll||ko.observable(!1);this.formatSetting=
f.formatSetting||null;this.maxSelectAllowed=f.maxSelectAllowed||ko.observable();this.multiItemsDisplayFormat=
f.multiItemsDisplayFormat||ko.observable("");this.multiItemsMaxDisplayFormat=f.multiItemsMaxDisplayFormat||
ko.observable("")}return __extends(t,n),t}(n.Base.Groups.ViewModel);t.ViewModel=i})(t=n.MultiSelectDropDown||
(n.MultiSelectDropDown={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){var t;(function(n){var t;(function(t){"use strict";var i=function(n){function t(t,i,r,u){n.call(this,
t,i,r,u);this.controlType=10;var f=this._options;this.min=f.min||ko.observable(null);this.max=f.max||
ko.observable(null);this.decimalPoint=f.decimalPoint||ko.observable(2);this.invalidText=f.invalidText||
"Value must be a valid number.";this.placeholder=f.placeholder||ko.observable(null)}return __extends(
t,n),t}(n.Base.Editable.ViewModel);t.ViewModel=i})(t=n.NumericTextBox||(n.NumericTextBox={}))})(t=n.
Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.
__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[
i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var
t;(function(t){"use strict";var r=window,u=jQuery,i=function(n){function t(t,i,r,u){n.call(this,t,i,
r,u);this.controlType=29;this.requestUrl=this._options.requestUrl||ko.observable(null);this.buttonText=
this._options.buttonText||ko.observable(null);this.popupWidth=this._options.popupWidth||ko.observable(
null);this.popupHeight=this._options.popupHeight||ko.observable(null)}return __extends(t,n),t}(n.Base.
Input.ViewModel);t.ViewModel=i})(t=n.OAuthButton||(n.OAuthButton={}))})(t=n.Forms||(n.Forms={}))})(t=
n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,
t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";
var i=function(n){function t(t,i,r,u){n.call(this,t,i,r,u);this.controlType=4}return __extends(t,n),
t}(n.Base.Options.ViewModel);t.ViewModel=i})(t=n.OptionsGroup||(n.OptionsGroup={}))})(t=n.Forms||(n.
Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){
"use strict";var i=function(n){function t(t,i,r,u){n.call(this,t,i,r,u);this.controlType=5;this.emptyValueText=
this._options.emptyValueText||ko.observable()}return __extends(t,n),t}(n.Base.Editable.ViewModel);t.
ViewModel=i})(t=n.PasswordBox||(n.PasswordBox={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";var i=function(n){function t(
t,i,r,u){var f=this,e,o;n.call(this,t,i,r,u);this.controlType=9;this.valueSeparator=";";e=ko.computed(
{read:function(){var u=f.value()?f.value():"",t=u.split(f.valueSeparator),i=f.min(),r=i,n=NaN;return t.
length===2&&(n=parseFloat(t[0]),isNaN(n)||(r=n)),Math.max(r,i)},write:function(n){f.value(n+f.valueSeparator+
f.end())}});o=ko.computed({read:function(){var u=f.value()?f.value():"",t=u.split(f.valueSeparator),
i=f.max(),r=i,n=NaN;return t.length===2&&(n=parseFloat(t[1]),isNaN(n)||(r=n)),Math.min(r,i)},write:function(
n){f.value(f.start()+f.valueSeparator+n)}});this.start=e;this.end=o;this._addDisposablesToCleanUp([e,
o])}return __extends(t,n),t}(n.Base.Slider.ViewModel);t.ViewModel=i})(t=n.RangeSlider||(n.RangeSlider=
{}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t)
{var i;(function(t){"use strict";(function(n){n[n.Wrapper=0]="Wrapper";n[n.Row=1]="Row";n[n.Column=2]=
"Column";n[n.Tabs=3]="Tabs"})(t.SectionStyle||(t.SectionStyle={}));var r=t.SectionStyle,i=function(t)
{function i(i,r){var u=this;t.call(this,i);this.active=ko.observable(!1);this.children=ko.observableArray(
[]);this.dirty=ko.observable(!1);this.name=ko.observable();this.width=ko.observable();this.submit=ko.
observable();this.populateSection=ko.observable();this.style=ko.observable(0);this.valid=ko.observable(
!0);this.validate=null;this.tabSection=ko.observable();this.tabHasBeenLoaded=ko.observable(!1);this.
controlType=15;n.Util.isNullOrUndefined(r)&&(r={});this.name=r.name||this.name;this.children=r.children||
this.children;this.submit=r.submit||this.submit;this.populateSection=r.populateSection||this.populateSection;
this.style=r.style||this.style;this.width=r.width||this.width;this._statuses=ko.computed(function(){
var r=u.children().some(function(n){var t=ko.utils.unwrapObservable(n);return t.dirty()}),n,t,i;u.tabSection&&
u.tabSection()&&(n=u.tabSection().children().some(function(n){var t=ko.utils.unwrapObservable(n);return t.
dirty()}));t=u.children().some(function(n){var t=ko.utils.unwrapObservable(n);return!t.valid()});i=u.
children().some(function(n){var t=ko.utils.unwrapObservable(n);return t.loading()});u.dirty(r||n);u.
valid(!t);u.loading(i)})}return __extends(i,t),i.prototype.dispose=function(){this._statuses&&(this.
_statuses.dispose(),this._statuses=null)},i.prototype.clearValidation=function(){var n=[];return this.
children().forEach(function(t){var i=t.clearValidation();i&&n.push(i)}),Q.all(n)},i}(n.ViewModels.Controls.
Loadable.ViewModel);t.ViewModel=i})(i=t.Section||(t.Section={}))})(i=t.Forms||(t.Forms={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(t){var i;(function(i){var r;(function(r){"use strict";var u=function(
i){function r(r,u,f,e){var o=this;i.call(this,r,u,f,e);this.defaultValue=ko.observable();this.showValue=
ko.observable(!0);this.displayText=ko.observable("");this.icon=ko.observable();this.locked=ko.observable(
!1);this.infoBalloonText=ko.observable("");this.lockedBalloonText=ko.observable("");this.controlType=
11;this.defaultValue=this._options.defaultValue||ko.observable();this.showValue=this._options.showValue||
ko.observable(!0);this.displayText=this._options.displayText||ko.observable("");this.icon=this._options.
icon||ko.observable();this.locked=this._options.locked||ko.observable(!1);this.infoBalloonText=this.
_options.infoBalloonText||ko.observable("");this.lockedBalloonText=this._options.lockedBalloonText||
ko.observable("");this.infoBalloonLink=this._options.infoBalloonLink||ko.observable(new n.ViewModels.
Controls.Balloon.Link);this.isDefault=ko.computed(function(){return o.defaultValue()===o.value()});this.
selectable=new t.Selectable({allowUnselect:!1,selectedValue:this._options.selectedValue||!0,isSelected:
this._options.initialState&&this._options.initialState.selectable&&this._options.initialState.selectable.
isSelected,isActivated:this._options.initialState&&this._options.initialState.selectable&&this._options.
initialState.selectable.isActivated})}return __extends(r,i),r.prototype.dispose=function(){i.prototype.
dispose.call(this);this.isDefault&&this.isDefault.dispose()},r}(i.Base.Editable.ViewModel);r.ViewModel=
u})(r=i.Selector||(i.Selector={}))})(i=t.Forms||(t.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(
MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}
for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";(function(n){n[n.CreateOnly=
0]="CreateOnly";n[n.SelectOnly=1]="SelectOnly";n[n.CreateOrSelect=2]="CreateOrSelect"})(t.Mode||(t.Mode=
{}));var r=t.Mode,i=function(n){function t(t,i,r,u){n.call(this,t,i,r,u);this.textBoxLabel=ko.observable(
"");this.selectExistingLinkDisplayText=ko.observable("");this.createNewLinkDisplayText=ko.observable(
"");this.controlType=83;this.createNew=this._options.createNew||ko.observable(!0);this.textBoxLabel=
this._options.textBoxLabel||ko.observable("");this.selectExistingLinkDisplayText=this._options.selectExistingLinkDisplayText||
ko.observable("Or Select Existing");this.createNewLinkDisplayText=this._options.createNewLinkDisplayText||
ko.observable("Or Create New");this.displayMode=this._options.displayMode||ko.observable(2)}return __extends(
t,n),t}(n.Selector.ViewModel);t.ViewModel=i})(t=n.CreatorAndSelector||(n.CreatorAndSelector={}))})(t=
n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n)
{var t;(function(t){"use strict";(function(n){n[n.CreateOnly=0]="CreateOnly";n[n.SelectOnly=1]="SelectOnly";
n[n.CreateOrSelect=2]="CreateOrSelect"})(t.Mode||(t.Mode={}));var r=t.Mode,i=function(n){function t(
t,i,r,u){var f=this;i||(u={defaultValue:ko.observable({value:"",createNew:!0})});!i||i.valid&&i.sections||
(i.defaultValue?i.defaultValue()||i.defaultValue({value:"",createNew:!0}):i.defaultValue=ko.observable(
{value:"",createNew:!0}));n.call(this,t,i,r,u);this.controlType=85;i.valid&&i.sections&&(this.dirty=
ko.pureComputed(function(){return f.initialValue().value!==f.value().value||f.initialValue().createNew!==
f.value().createNew}));this.textBoxLabel=this._options.textBoxLabel||ko.observable("");this.selectExistingLinkDisplayText=
this._options.selectExistingLinkDisplayText||ko.observable("Or Select Existing");this.createNewLinkDisplayText=
this._options.createNewLinkDisplayText||ko.observable("Or Create New");this.displayMode=this._options.
displayMode||ko.observable(2)}return __extends(t,n),t}(n.Selector.ViewModel);t.ViewModel=i})(t=n.CreatorAndSelectorV2||
(n.CreatorAndSelectorV2={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){var t;(function(n){var t;(function(t){"use strict";var i=function(n){function t(t,i,r,u){n.call(this,
t,i,r,u);this.controlType=6}return __extends(t,n),t}(n.Base.Slider.ViewModel);t.ViewModel=i})(t=n.Slider||
(n.Slider={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){"use strict";var i=function(n){function t(t,i){n.call(this,t);this.controlType=
21;var i=i||{};this.topPaneHeight=i.topPaneHeight||300;this.showTopPane=i.showTopPane||ko.observable(
!0)}return __extends(t,n),t}(n.ViewModels.Controls.Base.ViewModel);t.ViewModel=i})(i=t.Splitter||(t.
Splitter={}))})(i=t.Controls||(t.Controls={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
t){var i;(function(t){"use strict";var r=window,u=jQuery,i=function(n){function t(t,i){var r=this;n.
call(this,t);this.disabled=ko.observable(!1);this.loading=ko.observable(!1);this.controlType=1;this.
validate=ko.observable(0);this.fields=ko.observableArray();this._subscriptions=[];this.dirty=ko.computed(
function(){return r.fields().some(function(n){return n.dirty()})});this.valid=ko.computed(function()
{var n=r.fields().some(function(n){return!n.valid()});return!n});this._subscriptions.push(this.validate.
subscribe(function(n){r.fields().forEach(function(t){t.validate(n)})}));i&&ko.utils.arrayPushAll(this.
fields,i)}return __extends(t,n),t.prototype.dispose=function(){this._subscriptions.length>0&&(this._subscriptions.
forEach(function(n){n.dispose()}),this._subscriptions=[]);this.dirty&&this.dirty.dispose();this.valid&&
this.valid.dispose()},t.prototype.clearValidation=function(){var n=[];return this.fields().forEach(function(
t){var i=t.clearValidation();i&&n.push(i)}),Q.all(n)},t}(n.ViewModels.Controls.Base.ViewModel);t.ViewModel=
i})(i=t.StaticSection||(t.StaticSection={}))})(i=t.Forms||(t.Forms={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(
){function t(t,i){i===void 0&&(i={});this.separator=i.separator||ko.observable(";");this.viewModel=new
n.ViewModels.Forms.FilterComboBox.ViewModel(t,i.viewModel)}return t}(),r;t.StringListBoxNewValueOptions=
i;r=function(n){function t(t,r,u,f){n.call(this,t,r,u,f);this.controlType=17;var e=this._options;this.
values=e.values||ko.observable([]);this.selected=e.selected||ko.observable(null);this.newValueOptions=
new i(t,e.newValueOptions)}return __extends(t,n),t.prototype.setFieldValueAccessors=function(n){this.
_setEditScopeAccessors(n)},t.prototype._setEditScopeAccessors=function(t,i){var r=this;n.prototype._setEditScopeAccessors.
call(this,t,i);ko.isComputed(this.dirty)&&this.dirty.dispose();this.dirty=ko.pureComputed(function()
{return!r._compareValues(r.value(),r.initialValue())})},t.prototype._getUniqueValues=function(n){var
t=n.slice(0);return t.sort(function(n,t){return n.localeCompareIgnoreCase(t)}),t.reduce(function(n,t)
{return(n.length===0||t.localeCompareIgnoreCase(n[n.length-1])!==0)&&n.push(t),n},[])},t.prototype._compareValues=
function(n,t){var r,u,i;if(n&&!t||!n&&t)return!1;if(!n&&!t)return!0;if(r=this._getUniqueValues(n),u=
this._getUniqueValues(t),r.length!==u.length)return!1;for(i=0;i<r.length;i++)if(r[i].localeCompareIgnoreCase(
u[i])!==0)return!1;return!0},t}(n.ViewModels.Forms.Base.Editable.ViewModel);t.ViewModel=r})(i=t.StringListBox||
(t.StringListBox={}))})(i=t.Forms||(t.Forms={}))})(i=t.Vso||(t.Vso={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";var i=function(n){function t(
t,i,r,u){n.call(this,t,i,r,u);this.controlType=2}return __extends(t,n),t}(n.Base.Typable.ViewModel);
t.ViewModel=i})(t=n.TextBox||(n.TextBox={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){var i;(function(i){"use strict";var r=function(t){function i(
i,r,u,f){t.call(this,i,r,u,f);this.controlType=24;this.enabledDateTimeRange=this._options.enabledDateTimeRange||
ko.observable(new n.DateUtil.DateTimeRange)}return __extends(i,t),i.prototype.setFieldValueAccessors=
function(n){this._setEditScopeAccessors(n)},i.prototype._setEditScopeAccessors=function(n){var i=this;
t.prototype._setEditScopeAccessors.call(this,n);ko.isComputed(this.dirty)&&this.dirty.dispose();this.
dirty=ko.computed(function(){var n=i.value(),t=i.initialValue();return!n&&!t?!1:!n||!t?!0:Math.floor(
n.getTime()/1e3)!==Math.floor(t.getTime()/1e3)})},i}(t.Base.EditableComboBox.ViewModel);i.ViewModel=
r})(i=t.TimePicker||(t.TimePicker={}))})(i=t.Forms||(t.Forms={}))})(t=n.ViewModels||(n.ViewModels={})
)}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){var i;(function(i){"use strict";(function(n){n[n.Allow=0]="Allow";
n[n.Disallow=1]="Disallow";n[n.Ignore=2]="Ignore"})(i.UnrecognizedTokenBehavior||(i.UnrecognizedTokenBehavior=
{}));var u=i.UnrecognizedTokenBehavior,r=function(t){function i(n,i,r,u){var e=this,f;t.call(this,n,
i,r,u);this.tokenStartAndEndCharacters=ko.observable({tokenStart:"[",tokenEnd:"]"});this.items=ko.observableArray(
);this.unrecognizedTokenBehavior=ko.observable(1);this.removeTokenOnDelete=ko.observable(!1);this.valueKey=
ko.observable("name");this.columns=ko.observableArray();this.rowsCount=ko.observable(7);this.defaultColumnWidth=
ko.observable("150px");this.noRowsMessage=ko.observable("");this.controlType=30;f=this._options;this.
tokenStartAndEndCharacters=f.tokenStartAndEndCharacters||this.tokenStartAndEndCharacters;this.items=
f.items||this.items;this.removeTokenOnDelete=f.removeTokenOnDelete||this.removeTokenOnDelete;this.valueKey=
f.valueKey||this.valueKey;this.columns=f.columns||this.columns;this.rowsCount=f.rowsCount||this.rowsCount;
this.defaultColumnWidth=f.defaultColumnWidth||this.defaultColumnWidth;this.noRowsMessage=f.noRowsMessage||
this.noRowsMessage;this.tokenizedValue=ko.pureComputed({read:function(){var n=e._createParser();return n.
parse(e.value()).map(function(n){return{value:n.value,isToken:n.isToken}})},write:function(n){var t=
e._createParser();e.value(t.unparse(n))}})}return __extends(i,t),i.prototype._createParser=function(
){var t=this;return new n.Base.Utilities.TokenParsing.TokenParser({tokenStart:this.tokenStartAndEndCharacters(
).tokenStart,tokenEnd:this.tokenStartAndEndCharacters().tokenEnd,tokenValues:this.items().map(function(
n){return n[t.valueKey()]}),ignoreUnrecognizedTokens:this.unrecognizedTokenBehavior()===2})},i}(t.Base.
Editable.ViewModel);i.ViewModel=r})(i=t.TokenComboBox||(t.TokenComboBox={}))})(i=t.Forms||(t.Forms={
}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";
var u=window,f=jQuery,r,i;(function(n){n[n.Unchecked=0]="Unchecked";n[n.Checked=1]="Checked";n[n.Indeterminate=
2]="Indeterminate"})(t.Value||(t.Value={}));r=t.Value;i=function(n){function t(t,i,r,u){n.call(this,
t,i,r,u);this.controlType=22;this.inlineLabel=this._options.inlineLabel||!1;this.canUserSetIndeterminate=
this._options.canUserSetIndeterminate||ko.observable(!0)}return __extends(t,n),t}(n.Base.Input.ViewModel);
t.ViewModel=i})(t=n.TriStateCheckBox||(n.TriStateCheckBox={}))})(t=n.Forms||(n.Forms={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";
(function(n){n[n.None=0]="None";n[n.Group=1]="Group";n[n.OpenLinkButton=2]="OpenLinkButton";n[n.OpenBladeButton=
3]="OpenBladeButton";n[n.CommandButton=4]="CommandButton";n[n.DialogButton=5]="DialogButton";n[n.ToggleButton=
6]="ToggleButton";n[n.FileDownloadButton=7]="FileDownloadButton"})(n.ToolbarItemType||(n.ToolbarItemType=
{}));var t=n.ToolbarItemType})(t=n.Toolbars||(n.Toolbars={}))})(t=n.ViewModels||(n.ViewModels={}))}(
MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";var t=function(
){function t(t){if(this.type=0,this.disabled=ko.observable(!1),this.unauthorizedMessage=ko.observable(
),!n.ToolbarItemType[t])throw new Error("Invalid toolbar item type specified.");this.type=t}return t.
prototype.unauthorized=function(n){n||(n="No access");this.unauthorizedMessage(n)},t}();n.ToolbarItem=
t})(t=n.Toolbars||(n.Toolbars={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})
);__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
t){"use strict";var i=function(n){function t(t){n.call(this,t);this.showLabels=ko.observable(!1);this.
items=ko.observableArray();this.controlType=62}return __extends(t,n),t.prototype.setItems=function(n)
{this.items(n)},t}(n.Controls.Loadable.ViewModel);t.Toolbar=i})(t=n.Toolbars||(n.Toolbars={}))})(t=n.
ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t)
{function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){"use strict";var t=function(n){
function t(t){n.call(this,t);this.label=ko.observable();this.icon=ko.observable({type:1,data:""})}return __extends(
t,n),t}(n.ToolbarItem);n.ToolbarButton=t})(t=n.Toolbars||(n.Toolbars={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){var t;(function(n){"use strict";var t=function(n){function t(t){n.call(this,1);
this.items=t}return __extends(t,n),t}(n.ToolbarItem);n.ToolbarGroup=t})(t=n.Toolbars||(n.Toolbars={})
)})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){"use strict";var t=function(n){
function t(t){n.call(this,t)}return __extends(t,n),t}(n.ToolbarButton);n.ExecutableButtonBase=t})(t=
n.Toolbars||(n.Toolbars={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n)
{"use strict";var t=function(n){function t(){n.call(this,4);this.commandContext=ko.observable()}return __extends(
t,n),t}(n.ExecutableButtonBase);n.CommandButton=t})(t=n.Toolbars||(n.Toolbars={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(n){"use strict";var t=function(n){function t(t)
{n.call(this,6);this.checked=ko.observable(!1);this.commandContext=ko.observable();this.optionGroupName=
t}return __extends(t,n),t}(n.ExecutableButtonBase);n.ToggleButton=t})(t=n.Toolbars||(n.Toolbars={}))}
)(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(n){var t;(function(n){"use strict";var t=function(n){
function t(){n.call(this,5)}return __extends(t,n),t}(n.ExecutableButtonBase);n.DialogButton=t})(t=n.
Toolbars||(n.Toolbars={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t)
{"use strict";var i=function(t){function i(i){t.call(this,3);this.selectable=new n.ViewModels.Selectable(
i);i||this.selectable.selectedValue()!==undefined||this.selectable.selectedValue(null)}return __extends(
i,t),i}(t.ToolbarButton);t.OpenBladeButton=i})(i=t.Toolbars||(t.Toolbars={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(n){var t;(function(t){"use strict";var i=function(t){function i(i,r){r===void 0&&
(r="_blank");t.call(this,2);this.clickableLink=new n.ClickableLink(ko.observable(i),ko.observable(r))}
return __extends(i,t),i}(t.ToolbarButton);t.OpenLinkButton=i})(t=n.Toolbars||(n.Toolbars={}))})(t=n.
ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t)
{function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(i){var r;(function(i){"use strict";
function f(n){return!!n&&n.status===3&&(n.action===2||n.action===4)}var u=n.Helpers,e,o,r;i.isCompleted=
f,function(n){n[n.NotStarted=0]="NotStarted";n[n.InProgress=1]="InProgress";n[n.Error=2]="Error";n[n.
Completed=3]="Completed"}(i.Status||(i.Status={}));e=i.Status,function(n){n[n.None=0]="None";n[n.Previous=
1]="Previous";n[n.Next=2]="Next";n[n.Skip=3]="Skip";n[n.Complete=4]="Complete";n[n.Cancel=5]="Cancel"}
(i.Action||(i.Action={}));o=i.Action;r=function(n){function t(){n.apply(this,arguments);this.valid=ko.
observable();this.input=ko.observable();this.output=ko.observable({status:1,action:0})}return __extends(
t,n),t.prototype.onInputsSet=function(n){return this.input(n.input),this.valid(n.valid),u.Deferred().
resolve().promise()},t}(t.Controls.Loadable.ViewModel);i.ViewModel=r})(r=i.Base||(i.Base={}))})(i=t.
ActionBars||(t.ActionBars={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n)
{var t;(function(t){"use strict";var i=function(n){function t(){n.apply(this,arguments);this.actionInProgress=
ko.observable(!1);this.input=ko.observable();this.isProvisioningBlade=ko.observable();this.provisionOnStartboardPart=
ko.observable();this.masterIsProvisioningPart=ko.observable(!1);this.eula=ko.observable();this.secondaryLinkDisplayText=
ko.observable()}return __extends(t,n),t.prototype.onInputsSet=function(t){var i=this;return"actionInProgress"in
t&&this.actionInProgress(!!t.actionInProgress),n.prototype.onInputsSet.call(this,t).then(function(){
i.eula(t.eula);i.secondaryLinkDisplayText(t.secondaryLinkDisplayText);i.isProvisioningBlade(t.isProvisioningBlade);
i.masterIsProvisioningPart(!!t.input&&!!t.input.masterIsProvisioningPart)})},t}(n.Base.ViewModel);t.
ViewModel=i})(t=n.CreateActionBar||(n.CreateActionBar={}))})(t=n.ActionBars||(n.ActionBars={}))})(t=
n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,
t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(i){"use strict";
var r=function(t){function i(){t.apply(this,arguments)}return __extends(i,t),i.prototype.deleteButtonClick=
function(){this._onButtonClicked(!0)},i.prototype.cancelButtonClick=function(){this._onButtonClicked(
!1)},i.prototype._onButtonClicked=function(t){var i=t?3:0,r=t?4:5;this.output({status:i,action:r,userActionId:
n.Util.newGuid()})},i}(t.Base.ViewModel);i.ViewModel=r})(i=t.DeleteActionBar||(t.DeleteActionBar={})
)})(i=t.ActionBars||(t.ActionBars={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(
n){var t;(function(t){"use strict";var i=function(n){function t(){n.apply(this,arguments)}return __extends(
t,n),t.prototype.updateButtonClick=function(){},t.prototype.resetButtonClick=function(){},t}(n.Base.
ViewModel);t.ViewModel=i})(t=n.FilterActionBar||(n.FilterActionBar={}))})(t=n.ActionBars||(n.ActionBars=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(i){"use strict";
var u=n.Base.Utilities,r=function(n){function t(){n.apply(this,arguments)}return __extends(t,n),t.prototype.
saveButtonClick=function(){},t.prototype.discardButtonClick=function(){},t}(t.Base.ViewModel);i.ViewModel=
r})(i=t.FormActionBar||(t.FormActionBar={}))})(i=t.ActionBars||(t.ActionBars={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";var i=function(
n){function t(){n.apply(this,arguments);this.actionButtonLabel=ko.observable();this.actionSummaryHtml=
ko.observable()}return __extends(t,n),t.prototype.actionButtonClick=function(){},t.prototype.onInputsSet=
function(t){var i=this;return n.prototype.onInputsSet.call(this,t).then(function(){i.actionButtonLabel(
t.actionButtonLabel);i.actionSummaryHtml(t.actionSummaryHtml)})},t}(n.Base.ViewModel);t.ViewModel=i}
)(t=n.GenericActionBar||(n.GenericActionBar={}))})(t=n.ActionBars||(n.ActionBars={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){var t;(function(n){var t;(function(t){"use strict";var i=function(
n){function t(){n.apply(this,arguments);this.triggerSelectAction=ko.observable("");this.eula=ko.observable(
);this.showSelectButton=ko.observable();this.selectButtonText=ko.observable()}return __extends(t,n),
t.prototype.onInputsSet=function(t){return"triggerSelectAction"in t&&this.triggerSelectAction(t.triggerSelectAction),
this.eula(t.eula),"selectButtonText"in t&&this.selectButtonText(t.selectButtonText),"showSelectButton"in
t?this.showSelectButton(!!t.showSelectButton):this.showSelectButton()===undefined&&this.showSelectButton(
!0),n.prototype.onInputsSet.call(this,t)},t}(n.Base.ViewModel);t.ViewModel=i})(t=n.PickerActionBar||
(n.PickerActionBar={}))})(t=n.ActionBars||(n.ActionBars={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";var t=function(){function n(
n){this.type=0;this.title=n}return n}();n.Dialog=t})(t=n.Dialogs||(n.Dialogs={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";
(function(n){n[n.Abort=0]="Abort";n[n.Cancel=1]="Cancel";n[n.Ignore=2]="Ignore";n[n.No=3]="No";n[n.Ok=
4]="Ok";n[n.Retry=5]="Retry";n[n.Yes=6]="Yes"})(n.DialogResult||(n.DialogResult={}));var t=n.DialogResult}
)(t=n.Dialogs||(n.Dialogs={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){var t;(function(n){"use strict";(function(n){n[n.Invalid=0]="Invalid";n[n.MessageBox=
1]="MessageBox";n[n.ProgressBox=2]="ProgressBox";n[n.Form=3]="Form";n[n.List=4]="List"})(n.DialogType||
(n.DialogType={}));var t=n.DialogType})(t=n.Dialogs||(n.Dialogs={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){var t;(function(
n){"use strict";var i=function(){function n(){this.inputs=ko.observable();this.errors=ko.observable(
[])}return n}(),t;n.CollectorBindingInternals=i;t=function(){function n(){this.outputs=ko.observable(
);this.commit=ko.observable()}return n}();n.ProviderBindingInternals=t})(t=n.Internal||(n.Internal={
}))})(t=n.ParameterCollection||(n.ParameterCollection={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){var t;(function(){"use strict"})(
t=n.Internal||(n.Internal={}))})(t=n.ParameterCollection||(n.ParameterCollection={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){var
t;(function(){"use strict"})(t=n.Internal||(n.Internal={}))})(t=n.ParameterCollection||(n.ParameterCollection=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
t){var i;(function(t){var i;(function(t){"use strict";var f=n.Base.Constants.ExtensionNames.Hubs,i=n.
Helpers,u=new n.Base.Diagnostics.Log("MsPortalFx/ViewModels/ParameterCollection/Internal/Provisioner"),
e=n.Services.Gallery.Constants.GalleryParametersKey,r=n.Services.Gallery.Constants.GalleryOptionsKey,
o=function(){function t(n){if(this._provisioningEntity=null,this._data=null,this._options=null,this.
_executionDeferred=null,this._provisioningCommandSubscription=null,this._mappedOutputs=null,!n)throw new
Error("provisioningEntity is null or undefined.");this._provisioningEntity=n;this._executionDeferred=
i.Deferred()}return Object.defineProperty(t.prototype,"mappedOutputs",{get:function(){return this._mappedOutputs}
,enumerable:!0,configurable:!0}),t.prototype.executeProvisioning=function(t,f){var s,e,l,a;if(!this.
_provisioningEntity.enableProvisioning())throw new Error("The provisioningEntity isn't enabled for provisioning.");
var h=t,o=!!this._provisioningEntity.executeProvisioning,c=!!this._provisioningEntity.mapOutputsForProvisioning;
return o&&c?(u.error("You can only override 'executeProvisioning' or 'mapOutputsForProvisioning', but not both."),
i.Deferred().reject().promise()):!o&&(s=f&&f[r],e=s&&s.galleryItem,e&&e.categoryIds&&e.categoryIds.length>
0&&(l=e.categoryIds.some(function(t){return t.toLowerCase()===n.Services.Gallery.noSubCreateCategoryId.
toLowerCase()}),l))?(u.error("No custom provisioning is implemented. The gallery item '{0}' requires no subscriptions, which requires custom provisioning. You need to override 'executeProvisioning'".
format(e.itemDisplayName)),i.Deferred().reject().promise()):(c&&(t=this._provisioningEntity.mapOutputsForProvisioning(
h)),this._provisioningEntity.provisionOnStartboardPart&&this._provisioningEntity.provisionOnStartboardPart(
))?(this._provisioningEntity.privatePcPrBI.masterIsProvisioningPart()?this._mappedOutputs=t:(this._initializeProvisioningEntity(
f[r]),a={provisioningOptions:{originalData:h,data:ko.toJS(t),options:ko.toJS(f)}},this._provisioningEntity.
privatePcPrBI.triggerProvisioningInStartboardPart(a)),i.Deferred().resolve().promise()):o?this._provisioningEntity.
executeProvisioning(t):this._beginExecution(t,f)},t.prototype.dispose=function(){this._provisioningCommandSubscription&&
!this._provisioningCommandSubscription.isDisposed&&this._provisioningCommandSubscription.dispose()},
t.prototype._initializeProvisioningEntity=function(n){var t=n.uiDefinition.markup.reference,i=t.provisioningPartName,
r=t.provisioningPartExtension;if(i||r){if(!t.provisioningPartName||!t.provisioningPartExtension)throw new
Error("Insufficient information provided to locate provisioner part.");}else i="ProvisionerPart",r=f;
this._provisioningEntity.privatePcPrBI.provisioningPartName(i);this._provisioningEntity.privatePcPrBI.
provisioningPartExtensionName(r)},t.prototype._beginExecution=function(t,i){var r=this;return this._data=
t,this._options=i,this._provisioningCommandSubscription=this._provisioningEntity.privatePcPrBI.provisioningCommand.
subscribe(function(n){n.status(0);r._executeProvisioning(n);r._provisioningCommandSubscription&&!r._provisioningCommandSubscription.
isDisposed&&r._provisioningCommandSubscription.dispose()}),this._provisioningEntity.privatePcPrBI.triggerProvisioningCommand(
n.Util.newGuid()),this._executionDeferred.promise()},t.prototype._executeProvisioning=function(n){var
t=this,i;n.status(1);i=n.execute({options:this._options,data:this._data});i?i.then(function(i){t.deploymentResponse=
i;t._provisioningEntity.privatePcPrBI.provisioningStarted({galleryParameters:t._data.outputParameters[
e],configurationOptions:t._options[r],deploymentResponse:i});n.status(2);t._executionDeferred.resolve(
)},function(){n.status(3);t._executionDeferred.reject()}):this._executionDeferred.resolve()},t}();t.
Provisioner=o})(i=t.Internal||(t.Internal={}))})(i=t.ParameterCollection||(t.ParameterCollection={})
)})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){
var t;(function(n){var t;(function(n){"use strict";(function(n){n[n.Idle=0]="Idle";n[n.InProgress=1]=
"InProgress";n[n.Succeeded=2]="Succeeded";n[n.Failed=3]="Failed"})(n.ProvisioningCommandStatus||(n.ProvisioningCommandStatus=
{}));var t=n.ProvisioningCommandStatus})(t=n.Internal||(n.Internal={}))})(t=n.ParameterCollection||(n.
ParameterCollection={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";var t=function(){function n(
){this.triggerProvisioningCommand=ko.observable();this.provisioningPartExtensionName=ko.observable();
this.provisioningPartName=ko.observable();this.triggerProvisioningInStartboardPart=ko.observable();this.
masterIsProvisioningPart=ko.observable(!1);this.forceDiscardJourney=ko.observable(!0);this.provisioningCommand=
ko.observable();this.provisioningAttempted=ko.observable();this.provisioningStarted=ko.observable();
this.provisioningCompleted=ko.observable()}return n}();n.ProvisioningEntityBindingInternals=t})(t=n.
Internal||(n.Internal={}))})(t=n.ParameterCollection||(n.ParameterCollection={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){var
i;(function(i){"use strict";var u=n.Helpers,f=function(){function n(){}return n.createEditScope=function(
n,t,i,u){return new r(n,t,i,u)},n}(),r;i.EditScopeFactory=f;r=function(){function i(n,t,i,r){if(this.
_editScopeCache=null,this._editScopeView=null,this._editScopeFetchPromise=null,this._haveEditScopeIdPromise=
null,this._editScopeId=null,this._initializeMethod=null,this._lifetimeManager=null,this._providerRole=
null,this._stubDataModel=null,!t)throw new Error("Argument 'lifetimeManager' was not specified.");this.
_providerRole=n;this._lifetimeManager=t;r&&(this._editScopeView=r);this._initializeMethod=i}return Object.
defineProperty(i.prototype,"editScope",{get:function(){return this._getEditScopeView().editScope},enumerable:
!0,configurable:!0}),Object.defineProperty(i.prototype,"dataModel",{get:function(){return!!this._editScopeId&&
this._getEditScopeView().editScope()?this._getEditScopeView().editScope().root:this.collectorInputs&&
this.collectorInputs.inputParameters?(this._stubDataModel||(this._stubDataModel=t.Utilities.parametersToModel(
this.collectorInputs.inputParameters)),this._stubDataModel):null},enumerable:!0,configurable:!0}),i.
prototype.processInputs=function(n){return this._editScopeId=n.editScopeId,n.privateFcTpBI&&n.privateFcTpBI.
inputs&&(this.collectorInputs=JSON.parse(JSON.stringify(n.privateFcTpBI.inputs))),this._haveEditScopeIdPromise&&
this._editScopeId&&this._haveEditScopeIdPromise.resolve(),null},i.prototype.initializeEditScope=function(
){this._getEditScopeView()},i.prototype.fetchEditScope=function(){var n=this;return this._editScopeFetchPromise||
(this._editScopeFetchPromise=Q(!0).then(function(){return n._editScopeId||(n._haveEditScopeIdPromise=
Q.defer()),n._haveEditScopeIdPromise}).then(function(){return n._editScopeView.fetchForExistingData(
n._editScopeId,n.collectorInputs)}).then(function(){return n._initializeMethod&&typeof n._initializeMethod==
"function"&&n._initializeMethod()})),this._editScopeFetchPromise},i.prototype.initializeDataModel=function(
n,t){var e=this,i,r,f;if(!n)throw new Error("Argument 'inputs' was not specified.");if(!t)throw new Error(
"Argument 'overrideInputParameters' was not specified.");return i=u.Deferred(),r=function(t){var r=e.
_createEditScopeModelFromInputs(t,n.inputMetadata);i.resolve(r)},t?(f=t(n.inputParameters,n.inputMetadata,
n.options),f?f.then(function(n){e.collectorInputs=n;r(n.inputParameters)},function(){i.reject()}):r(
n.inputParameters)):r(n.inputParameters),i.promise()},i.prototype.discardEditScopeEdits=function(){var
n=this._editScopeCache;n&&n.disposeAndDiscardEdits(this._editScopeId,this._editScopeView)},i.prototype.
_getEditScopeCache=function(){var t=this;if(!this._editScopeCache){if(this._providerRole&&!!this._providerRole.
dataModelTypeName&&!n.Data.Metadata.getTypeMetadata(this._providerRole.dataModelTypeName))throw new Error(
"dataModelTypeName '{0}' was defined on the provider role, but the metadata type was not registered.".
format(this._providerRole.dataModelTypeName));this._editScopeCache=new n.Internal.Data.EditScopeCacheOld(
{entityTypeName:this._providerRole&&this._providerRole.dataModelTypeName,supplyExistingData:function(
n){return t.initializeDataModel(n,function(){return t._providerRole&&typeof t._providerRole.overrideInputParameters==
"function"?t._providerRole.overrideInputParameters(n.inputParameters,n.inputMetadata,n.options):$.Deferred(
).resolve(n).promise()})},serializeParams:function(){return"#"}});this._lifetimeManager.registerForDispose(
this._editScopeCache)}return this._editScopeCache},i.prototype._getEditScopeView=function(){return this.
_editScopeView||(this._editScopeView=this._getEditScopeCache().createView(this._lifetimeManager)),this.
_editScopeView},i.prototype._createEditScopeModelFromInputs=function(n,t){var u={},i,r,f;for(i in n)
{u[i]={};for(r in n[i])f=n&&n[i]&&n[i][r]||t&&t[i]&&t[i][r]&&t[i][r].defaultValue||"",u[i][r]=ko.observable(
f)}return u},i}()})(i=t.Internal||(t.Internal={}))})(i=t.ParameterCollectionV2||(t.ParameterCollectionV2=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
n){var t;(function(n){var t;(function(n){"use strict";var r=function(){function n(){this.inputs=ko.observable(
);this.errors=ko.observable([])}return n}(),t,i;n.CollectorBindingInternals=r;t=function(){function n(
){this.outputs=ko.observable();this.commit=ko.observable()}return n}();n.ProviderBindingInternals=t;
i=function(){function n(){this.triggerProvisioningCommand=ko.observable();this.provisioningPartExtensionName=
ko.observable();this.provisioningPartName=ko.observable();this.triggerProvisioningInStartboardPart=ko.
observable();this.masterIsProvisioningPart=ko.observable(!1);this.forceDiscardJourney=ko.observable(
!0);this.provisioningCommand=ko.observable();this.provisioningAttempted=ko.observable();this.provisioningStarted=
ko.observable();this.provisioningCompleted=ko.observable()}return n}();n.ProvisionerBindingInternals=
i})(t=n.Internal||(n.Internal={}))})(t=n.ParameterCollectionV2||(n.ParameterCollectionV2={}))})(t=n.
ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(
t){var i;(function(t){"use strict";var o=n.Helpers,u=new n.Base.Diagnostics.Log("MsPortalFx/ViewModels/ParameterCollectionV2/Internal/ParameterCollectorImpl"),
i="parameterCollection",f="previousOutputParameters",e=function(){function n(){}return n.createParameterCollector=
function(n,t,i,u,f){return new r(n,t,i,u,f)},n.confirmCommitSuffix="{0}_confirmCommit",n.tryCommitSuffix=
"_tryCommit",n}(),r;t.ParameterCollectorFactory=e;r=function(){function t(n,t,i,r,u){if(this._providerCallbacks=
{},this._collectorRole=null,this._editScopeImpl=null,this._lifetimeManager=null,this._options=null,this.
_privateFcTpBI=null,this._providerCommitSignal=null,this._commitSignalReceived=!1,this._providerOutputsCache=
null,!i)throw new Error("The provisioner binding internals were not provided.");if(!t)throw new Error(
"The edit scope implementation was not specified.");if(!r)throw new Error("Argument 'lifetimeManager' was not specified.");
this._collectorRole=n;this._privateFcTpBI=i;this._editScopeImpl=t;this._lifetimeManager=r;this._options=
u||{commitWhenSignaled:!1,commitAction:null};this._providerCommitSignal=ko.observable();this._providerOutputsCache=
{}}return t.prototype.processInputs=function(t){var i,r;return t.privateFpTcBI&&(i=t.privateFpTcBI.commit),
t.fromProviderBindingInternals&&(i=t.fromProviderBindingInternals.commit),!i||i===this._providerCommitSignal(
)||(r=n.ViewModels.ParameterCollectionV2.Internal.ParameterCollectorFactory.confirmCommitSuffix,i===
r.format(this._providerCommitSignal())?this._deferredProviderDismiss&&(this._deferredProviderDismiss.
resolve(),this._deferredProviderDismiss=undefined,this._commitSignalReceived=!1):(this.providerOutputs=
t.privateFpTcBI&&t.privateFpTcBI.outputs||t.fromProviderBindingInternals&&t.fromProviderBindingInternals.
outputs,this._commitSignalReceived=!0,this._providerCommitSignal(i),this._options.commitWhenSignaled&&
this.commitProviderOutputs(null).then(this._options.commitAction))),$.Deferred().resolve().promise()}
,t.prototype.addProvider=function(n,t){if(!t)throw new Error("CollectorCallbacks cannot be null or undefined.");
if(this._providerCallbacks[n])throw new Error("A provider with the id '{0}' has already been registered.".
format(n));this._providerCallbacks[n]=t},t.prototype.removeProvider=function(n){this._providerCallbacks[
n]&&delete this._providerCallbacks[n]},t.prototype.sendInputsToProvider=function(n){var r=this._editScopeImpl.
dataModel,u=this._editScopeImpl.collectorInputs&&this._editScopeImpl.collectorInputs.inputMetadata,e=
this._editScopeImpl.collectorInputs&&this._editScopeImpl.collectorInputs.options,t;if(this._providerCallbacks[
n]&&typeof this._providerCallbacks[n].createInputParameters=="function")t=this._providerCallbacks[n].
createInputParameters();else if(this._collectorRole)t=this._collectorRole.createInputParameters(n);else
throw new Error("No callbacks where defined when the provider '{0}' was registered, and the collector role is undefined.".
format(n));n in this._providerOutputsCache&&(i in t.options||(t.options[i]={}),t.options[i][f]=this.
_providerOutputsCache[n]);this._privateFcTpBI.inputs(t)},t.prototype.commitProviderOutputs=function(
t){var i=this,r=Q.defer(),u,e=n.ViewModels.ParameterCollectionV2.Internal.ParameterCollectorFactory.
tryCommitSuffix,f=function(){i._commitSignalReceived=!1;i._providerOutputsCache[t]=i.providerOutputs;
i._validateProviderOutputs(t).then(function(){i._saveProviderOutputs(t).then(function(){i._providerCommitSignal(
).indexOf(e)>-1?(i._deferredProviderDismiss=r,i._privateFcTpBI.errors([{errorMessage:null,parameterName:
i._providerCommitSignal()}]),i._privateFcTpBI.errors([])):r.resolve()},function(){r.reject()})},function(
){r.reject()});u&&u.dispose()};return this._commitSignalReceived?f():u=this._providerCommitSignal.subscribe(
this._lifetimeManager,function(){f()}),r.promise},t.prototype._validateProviderOutputs=function(n){var
r=this,t=Q.defer(),i;return this._providerCallbacks[n]&&typeof this._providerCallbacks[n].validateOutputParameters==
"function"?i=this._providerCallbacks[n].validateOutputParameters(this.providerOutputs.outputParameters):
this._collectorRole&&typeof this._collectorRole.validateOutputParameters=="function"&&(i=this._collectorRole.
validateOutputParameters(n,this.providerOutputs.outputParameters)),i?i.then(function(n){n&&n.length>
0?(r._privateFcTpBI.errors(n),r._privateFcTpBI.errors([]),t.reject()):t.resolve()},function(){u.error(
"A rejected promise was returned by the 'validateOutputParameters' method.Resolve with the validation errors instead.");
t.reject()}):t.resolve(),t.promise},t.prototype._saveProviderOutputs=function(n){var t=Q.defer(),i;if(
this._providerCallbacks[n]&&typeof this._providerCallbacks[n].saveOutputParameters=="function")i=this.
_providerCallbacks[n].saveOutputParameters(this.providerOutputs.outputParameters);else if(this._collectorRole)
i=this._collectorRole.saveOutputParameters(n,this.providerOutputs.outputParameters);else throw new Error(
"No callbacks where defined when the provider '{0}' was registered, and the collector role is undefined.".
format(n));return i?i.then(function(){t.resolve()},function(){t.reject()}):t.resolve(),t.promise},t}
()})(i=t.Internal||(t.Internal={}))})(i=t.ParameterCollectionV2||(t.ParameterCollectionV2={}))})(t=n.
ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(
t){var i;(function(i){"use strict";var u=new n.Base.Diagnostics.Log("MsPortalFx/ViewModels/ParameterCollectionV2/Internal/ParameterProviderImpl"),
f=function(){function n(){}return n.createParameterProvider=function(n,t){return new r(n,t)},n}(),r;
i.ParameterProviderFactory=f;r=function(){function i(n,t){if(this._editScopeImpl=null,this._providerRole=
null,this._lastCommitSignal="",!t)throw new Error("Argument 'lifetimeManager' was not specified.");this.
_providerRole=n;this._editScopeImpl=t}return i.prototype.processInputs=function(n){var u=this,i=null,
t,r;return n.privateFcTpBI&&(t=n.privateFcTpBI.errors,t&&t.length>0&&(r=t.first(function(n){return n.
parameterName===u._lastCommitSignal}),t.length===1&&r&&(this._lastDiscardEdits&&(this._lastDiscardEdits(
),this._lastDiscardEdits=undefined),this._privateFpTcBI.commit(this._lastCommitSignal+"_confirmCommit"))),
i=this._editScopeImpl.fetchEditScope()),i},i.prototype.getOutputsToCommit=function(){var i=t.Utilities.
modelToParameters(this._editScopeImpl.dataModel),n;return this._providerRole&&typeof this._providerRole.
overrideOutputParameters=="function"?(n=Q.defer(),this._providerRole.overrideOutputParameters(i).then(
function(t){n.resolve({outputParameters:t})},function(){throw new Error("The promise returned by 'overrideOutputParameters' should never be rejected.");
}),n.promise):$.Deferred().resolve({outputParameters:i}).promise()},i.prototype.commitOutputs=function(
t){var i=this,r,f;if(!t)throw new Error("Argument options must be specified.");if(!t.privateFpTcBI)throw new
Error("Argument options.privateFpTcBI must be specified.");if(t.provisioner&&t.provisioner.enableProvisioning(
)&&t.provisioner.provisionOnStartboardPart&&!t.provisioner.provisionOnStartboardPart()&&!t.privatePcPrBI)
throw new Error("Argument options.privatePcPrBI must be specified when enableProvisioning is true and provisionOnStartboardPart is false.");
r=function(){i._lastCommitSignal="{0}_tryCommit".format(n.Util.newGuid());i._lastDiscardEdits=t.discardEdits;
i._privateFpTcBI=t.privateFpTcBI;t.privateFpTcBI.commit(undefined);t.privateFpTcBI.outputs(t.provisioner&&
t.provisioner.mappedOutputs||t.provisionerData);t.privateFpTcBI.commit(i._lastCommitSignal);t.provisioner&&
t.provisioner.enableProvisioning()&&t.provisioner.provisionOnStartboardPart&&!t.provisioner.provisionOnStartboardPart(
)&&t.privatePcPrBI.provisioningAttempted({commitId:n.Util.newGuid()})};t.provisioner&&t.provisioner.
enableProvisioning()?(f=t.provisioner.executeProvisioning(t.provisionerData,this._editScopeImpl.collectorInputs.
options),t.progressAction&&t.progressAction(f),f?f.then(function(){r()},function(){u.error("Provisioning action has failed.")}
):r()):r()},i}()})(i=t.Internal||(t.Internal={}))})(i=t.ParameterCollectionV2||(t.ParameterCollectionV2=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
t){var i;(function(t){var i;(function(t){"use strict";var f="parameterCollection",i="enableProvisioning",
o="provisionOnStartboardPart",s="masterIsProvisioningPart",h="preserveJourney",l=n.Base.Constants.ExtensionNames.
Hubs,r=n.Helpers,u=new n.Base.Diagnostics.Log("MsPortalFx/ViewModels/ParameterCollectionV2/Internal/ProvisionerImpl"),
a=n.Services.Gallery.Constants.GalleryParametersKey,e=n.Services.Gallery.Constants.GalleryOptionsKey,
v=function(){function n(){}return n.createProvisioner=function(n,t){return new c(n,t)},n}(),c;t.ProvisionerFactory=
v;c=function(){function t(n,t){if(this.enableProvisioning=ko.observable(!1),this.provisionOnStartboardPart=
ko.observable(!0),this._data=null,this._executionDeferred=null,this._options=null,this._privatePcPrBI=
null,this._provisionerRole=null,this._provisioningCommandSubscription=null,!n)throw new Error("A provisioner implementation was not provided.");
if(!t)throw new Error("The provisioner binding internals were not provided.");this._provisionerRole=
n;this._privatePcPrBI=t;this._executionDeferred=r.Deferred()}return t.prototype.processInputs=function(
n){var r,t;return this.provisionOnStartboardPart(n.provisionOnStartboardPart),this._privatePcPrBI.masterIsProvisioningPart(
n.masterIsProvisioningPart),n.privateFcTpBI&&n.privateFcTpBI.inputs&&(r=n.privateFcTpBI.inputs,f in r.
options&&r.options[f]&&(t=r.options[f],i in t&&t[i]&&this.enableProvisioning(!0),o in t?this.provisionOnStartboardPart(
t[o]):this.provisionOnStartboardPart(n.provisionOnStartboardPart),s in t?this._privatePcPrBI.masterIsProvisioningPart(
t[s]):this._privatePcPrBI.masterIsProvisioningPart(n.masterIsProvisioningPart),h in t&&this._privatePcPrBI.
forceDiscardJourney(!t[h])),i in r.options&&r.options[i]&&this.enableProvisioning(!0)),null},t.prototype.
executeProvisioning=function(t,i){var s=this,h,o,y,c,f;if(!this.enableProvisioning())throw new Error(
"The provisioningEntity isn't enabled for provisioning.");var l=t,a=typeof this._provisionerRole.executeCustomProvisioning==
"function",v=typeof this._provisionerRole.mapOutputsForProvisioning=="function";return a&&v?(u.error(
"You can only override 'executeCustomProvisioning' or 'mapOutputsForProvisioning', but not both."),r.
Deferred().reject().promise()):a?this._provisionerRole.executeCustomProvisioning(t.outputParameters,
i):(h=i&&i[e],o=h&&h.galleryItem,o&&o.categoryIds&&o.categoryIds.length>0&&(y=o.categoryIds.some(function(
t){return t.toLowerCase()===n.Services.Gallery.noSubCreateCategoryId.toLowerCase()}),y))?(u.error("No custom provisioning is implemented. The gallery item '{0}' requires no subscriptions, which requires custom provisioning. You need to override 'executeCustomProvisioning'".
format(o.itemDisplayName)),r.Deferred().reject().promise()):v?(c=this._provisionerRole.mapOutputsForProvisioning(
l.outputParameters,i),f=r.Deferred(),c?c.then(function(n){if(t.outputParameters=n,s.provisionOnStartboardPart(
)){if(!s._privatePcPrBI.masterIsProvisioningPart()){s._initializeProvisioningEntity(i[e]);var r={provisioningOptions:
{originalData:l,data:ko.toJS(t),options:ko.toJS(i)}};s._privatePcPrBI.triggerProvisioningInStartboardPart(
r)}f.resolve()}else s._beginExecution(t,i).then(function(){f.resolve()},function(){f.reject()})},function(
){u.error("The promise returned by 'mapOutputsForProvisioning' should not be rejected.");f.reject()}
):(u.error("'mapOutputsForProvisioning' did not return a promise."),f.reject()),f.promise()):this._beginExecution(
t,i)},t.prototype._initializeProvisioningEntity=function(n){var t=n.uiDefinition.markup.reference,i=
t.provisioningPartName,r=t.provisioningPartExtension;if(i||r){if(!t.provisioningPartName||!t.provisioningPartExtension)
throw new Error("Insufficient information provided to locate provisioner part.");}else i="ProvisionerPart",
r=l;this._privatePcPrBI.provisioningPartName(i);this._privatePcPrBI.provisioningPartExtensionName(r)}
,t.prototype._beginExecution=function(t,i){var r=this;return this._data=t,this._options=i,this._provisioningCommandSubscription=
this._privatePcPrBI.provisioningCommand.subscribe(function(n){n.status(0);r._executeProvisioning(n);
r._provisioningCommandSubscription&&!r._provisioningCommandSubscription.isDisposed&&r._provisioningCommandSubscription.
dispose()}),this._privatePcPrBI.triggerProvisioningCommand(n.Util.newGuid()),this._executionDeferred.
promise()},t.prototype._executeProvisioning=function(n){var t=this,i;n.status(1);i=n.execute({options:
this._options,data:this._data});i?i.then(function(i){t.deploymentResponse=i;t._privatePcPrBI.provisioningStarted(
{galleryParameters:t._data.outputParameters[a],configurationOptions:t._options[e],deploymentResponse:
i});n.status(2);t._executionDeferred.resolve()},function(){n.status(3);t._executionDeferred.reject()}
):this._executionDeferred.resolve()},t}()})(i=t.Internal||(t.Internal={}))})(i=t.ParameterCollectionV2||
(t.ParameterCollectionV2={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";(function(n){n[n.Idle=0]="Idle";
n[n.InProgress=1]="InProgress";n[n.Succeeded=2]="Succeeded";n[n.Failed=3]="Failed"})(n.ProvisioningCommandStatus||
(n.ProvisioningCommandStatus={}));var t=n.ProvisioningCommandStatus})(t=n.Internal||(n.Internal={}))}
)(t=n.ParameterCollectionV2||(n.ParameterCollectionV2={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){"use strict";var a=n.Resources.Strings,u="error",f=412,v,y,i,e,o,s,h,r,c,l;(function(n){n[n.None=
0]="None";n[n.Executing=1]="Executing"})(t.CommandStatus||(t.CommandStatus={}));v=t.CommandStatus,function(
n){n[n.Text=1]="Text";n[n.Binary=2]="Binary"}(t.FileDownloadType||(t.FileDownloadType={}));y=t.FileDownloadType;
i=function(){function n(){this.enabled=ko.observable(!0);this.icon=ko.observable();this.text=ko.observable(
)}return n}();t.CommandBase=i;e=function(n){function t(){n.apply(this,arguments);this.status=ko.observable(
0);this.dialog=ko.observable()}return __extends(t,n),t.prototype.execute=function(){throw new Error(
"The execute method on MsPortalFx.ViewModels.Command has not been implemented.");},t.prototype.dialogClick=
function(){throw new Error("The dialogClick method on MsPortalFx.ViewModels.Command has not been implemented.");
},t}(i);t.Command=e;o=function(n){function t(){n.apply(this,arguments);this.navigateUri=ko.observable(
"");this.navigateTarget=ko.observable("_blank")}return __extends(t,n),t}(i);t.UriCommand=o;s=function(
n){function t(){n.apply(this,arguments);this.navigateUri=ko.observable("");this.navigateUriCallback=
ko.observable(null);this.navigateTarget=ko.observable("_blank");this.showUriCallbackConfirmationDialog=
ko.observable(!1)}return __extends(t,n),t}(i);t.UriCallbackCommand=s;h=function(n){function t(){n.apply(
this,arguments);this.listItems=ko.observableArray([]);this.selectedItem=ko.observable("")}return __extends(
t,n),t}(i);t.ListCommand=h;r=function(){function n(n,t,i){this.status=n;this.statusCode=t;this.errorMessage=
i}return n}();t.FileDownloadStatus=r;c=function(t){function i(i){var e=this;t.call(this);this.targetUri=
ko.observable("");this.targetUriCallback=ko.observable(null);this.httpMethod=ko.observable("GET");this.
headers=ko.observable({});this.authorizationToken=ko.observable(null);this.targetFileName=ko.observable(
"");this.errorMessage=ko.observable("");this.downloadType=ko.observable(1);this.downloadStatus=ko.observable(
);this.showUriCallbackConfirmationDialog=ko.observable(!1);this.uriCallbackConfirmationDialogOptions=
null;this.showDownloadProgressDialog=ko.observable(!1);this.downloadProgressDialogOptions=null;this.
icon(n.Base.Images.Download());i===!0&&n.Base.Security.getAuthorizationToken().then(function(n){n&&n.
header?e.authorizationToken(n.header):e.downloadStatus(new r(u,f,a.FileDownloadCommand.authTokenNotAvailable))}
,function(n){e.downloadStatus(new r(u,f,n))})}return __extends(i,t),i}(i);t.FileDownloadCommand=c;l=
function(n){function i(t){n.call(this);t.selectable&&t.selectable.selectedValue||(t.selectable=i.createSelectableViewModel(
))}return __extends(i,n),i.createSelectableViewModel=function(n){return new t.Selectable({selectedValue:
arguments.length===1?n:{}})},i}(i);t.OpenBladeCommand=l})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){"use strict";var i=new n.Base.Diagnostics.
Log("MsPortalFx/ViewModels/ViewModels.Forms"),r=function(){function t(t,i){var r=this;this.sections=
ko.observableArray([]);this._triggerableLifetimeManager=new n.Internal.Base.TriggerableLifetimeManager;
this._editScope=null;t&&(this.editScope=t);this._getNestedData=i;this.valid=ko.computed(function(){return!r.
sections().some(function(n){return!n.valid()})})}return Object.defineProperty(t.prototype,"editScope",
{get:function(){if(!this._editScope)throw new Error("The 'editScope' property needs to be set before the Form instance can be used.");
return this._editScope},set:function(n){if(this._editScope)throw new Error("The 'editScope' property should be only set once.");
this._editScope=n},enumerable:!0,configurable:!0}),t.prototype.registerForDispose=function(n){return this.
_triggerableLifetimeManager.registerForDispose(n),this._triggerableLifetimeManager},t.prototype.createChildLifetime=
function(){return this._triggerableLifetimeManager.createChildLifetime()},t.prototype.dispose=function(
){this._triggerableLifetimeManager.dispose()},t.prototype.createFieldValueAccessors=function(n){var t=
this;return{getOriginalObservable:function(){var r=t.editScope();if(r){var u=r.getOriginal(r.root),e=
t._getNestedData?t._getNestedData(u):u,f=n(e);if(f)return f;i.error("EditScope data doesn't have an original observable for this form field.");
throw new Error("EditScope data doesn't have an original observable for this form field.");}else return null}
,getEditableObservable:function(){var r=t._editScope();if(r){var u=r.root,e=t._getNestedData?t._getNestedData(
u):u,f=n(e);if(f)return f;i.error("EditScope data doesn't have an editable observable for this form field.");
throw new Error("EditScope data doesn't have an editable observable for this form field.");}else return null}
}},t}();t.Form=r})(i=t.Obsolete||(t.Obsolete={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){"use strict";var i=function(){function t(){this.title=
ko.observable();this.shortTitle=ko.observable();this.description=ko.observable();this.icon=ko.observable(
n.Base.Images.Shell.DefaultBlade());this.size=ko.observable(1)}return t}();t.ButtonPart=i})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";
var r=function(){function n(){this.inputParameters={};this.inputMetadata={};this.options={}}return n}
(),t,i;n.ParameterCollectionInput=r;t=function(){function n(){this.outputParameters={}}return n}();n.
ParameterCollectionOutput=t;i=function(){function n(){}return n.modelToParameters=function(n){var i=
{},t,r;for(t in n){t in i||(i[t]={});for(r in n[t])i[t][r]=n[t][r]()||""}return i},n.parametersToModel=
function(n){var r={},t,i;for(t in n)for(i in n[t]){if(t in r||(r[t]={}),ko.isObservable(n[t][i])||ko.
isComputed(n[t][i]))throw new Error("Parameters cannot be knockout observables.");r[t][i]?r[t][i](n[
t][i]):r[t][i]=ko.observable(n[t][i])}return r},n}();n.Models=i})(t=n.ParameterCollection||(n.ParameterCollection=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
n){var t;(function(){"use strict"})(t=n.ParameterCollection||(n.ParameterCollection={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){var
t;(function(n){"use strict";var t=function(){function n(n){this._provisioner=null;this._previousOutputs=
null;this._previousCommit="";this._previousDetailBladeOutput=null;this._provisioner=n}return n.prototype.
onProviderBindingInternalsReceived=function(n,t,i,r,u,f){var c=this,s;if(!r)throw new Error("Argument 'onProviderCommit' was not specified.");
if(!u)throw new Error("Argument 'onCommitSuccessAction' was not specified.");if(!f)throw new Error("Argument 'onCommitFailedAction' was not specified.");
if(n){var o=ko.utils.unwrapObservable(n.commit),e=ko.utils.unwrapObservable(n.outputs),h=function(){
u();c._provisioner.executeProvisioning(e,t)};!o||o===this._previousCommit||!e||e===this._previousOutputs||
!i||i===this._previousDetailBladeOutput||(this._previousOutputs=e,this._previousCommit=o,s=r(null,e),
s?s.then(function(n){n?h():f()},function(){f()}):h())}},n}();n.CollectorBase=t})(t=n.Internal||(n.Internal=
{}))})(t=n.ParameterCollection||(n.ParameterCollection={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.ParameterCollection||
(n.ParameterCollection={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";var r=new n.Base.Diagnostics.
Log("MsPortalFx/ViewModels/ParameterCollection/ParameterProvider"),i=n.Helpers,u=function(){function t(
n){if(this._editScopeView=null,this._editScopeFetchPromise=null,this._onInputsReceivedPromise=null,!n)
throw new Error("Argument 'editScopeView' was not specified.");this._editScopeView=n}return t.prototype.
fetchEditScope=function(n,t){var i=this;return this._editScopeFetchPromise||(this._editScopeFetchPromise=
this._editScopeView.fetchForExistingData(n,t).then(function(){i._editScopeFetchPromise=null},function(
){i._editScopeFetchPromise=null})),this._editScopeFetchPromise},t.prototype.initializeDataModel=function(
n,t){if(!n)throw new Error("Argument 'inputs' was not specified.");if(!t)throw new Error("Argument 'overrideInputParameters' was not specified.");
var r=i.Deferred();return t(n.inputParameters).then(function(t){var f={},i,u,e;for(i in t){f[i]={};for(
u in t[i])e=t&&t[i]&&t[i][u]||n.inputMetadata&&n.inputMetadata[i]&&n.inputMetadata[i][u]&&n.inputMetadata[
i][u].defaultValue||"",f[i][u]=ko.observable(e)}r.resolve(f)},function(){r.reject()}),r.promise()},t.
prototype.onCollectorBindingsReceived=function(t,r,u){var f=this;if(!t)throw new Error("Argument 'collectorInputs' was not specified.");
if(!r)throw new Error("Argument 'editScopeId' was not specified.");if(!u)throw new Error("Argument 'onInputsReceived' was not specified.");
var o="enableProvisioning",e=i.Deferred(),s={enableProvisioning:!1,promise:e.promise()};return o in t.
options&&t.options[o]&&(s.enableProvisioning=!0),this.fetchEditScope(r,t).then(function(){try{n.Base.
Utilities.deepEquals(f._previousCollectorInputs,t)?f._onInputsReceivedPromise?f._onInputsReceivedPromise.
then(function(){f._onInputsReceivedPromise=null;e.resolve()},function(){f._onInputsReceivedPromise=null;
e.reject()}):e.resolve():(f._previousCollectorInputs=t,f._onInputsReceivedPromise=u(t),f._onInputsReceivedPromise?
f._onInputsReceivedPromise.then(function(){f._onInputsReceivedPromise=null;e.resolve()},function(){f.
_onInputsReceivedPromise=null;e.reject()}):e.resolve())}catch(i){e.reject()}},function(){e.reject()}
),s},t.prototype.commitProvider=function(t){var i,u;if(!t)throw new Error("Argument options must be specified.");
if(!t.privateFpTcBI)throw new Error("Argument options.privateFpTcBI must be specified.");if(t.enableProvisioning&&
!t.provisioner)throw new Error("Argument options.provisioner must be specified when enableProvisioning is true.");
if(t.enableProvisioning&&!t.provisionOnStartboardPart&&!t.privatePcPrBI)throw new Error("Argument options.privatePcPrBI must be specified when enableProvisioning is true and provisionOnStartboardPart is false.");
i=function(){t.privateFpTcBI.outputs(t.provisioner&&t.provisioner.mappedOutputs||t.provisionerData);
t.privateFpTcBI.commit(n.Util.newGuid());t.enableProvisioning&&!t.provisionOnStartboardPart&&t.privatePcPrBI.
provisioningAttempted({commitId:n.Util.newGuid()});t.discardEdits&&t.discardEdits()};t.enableProvisioning?
(u=t.provisioner.executeProvisioning(t.provisionerData,t.provisionerOptions),t.progressAction&&t.progressAction(
u),u?u.then(function(){i()},function(){r.error("Provisioning action has failed.")}):i()):i()},t}();t.
ProviderBase=u})(i=t.Internal||(t.Internal={}))})(i=t.ParameterCollection||(t.ParameterCollection={})
)})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(i){"use strict";var r=function(t){
function r(r,u){var e=this,f;t.call(this,r);this.parameterCollectionErrors=ko.observable();this.privateFcTpBI=
new n.ViewModels.ParameterCollection.Internal.CollectorBindingInternals;this.savedState=ko.observable(
);this.currentState=ko.observable();this.stepInput=ko.observable();this._collectorBase=null;this._container=
null;f={stepStatuses:[]};u&&u.content&&u.content.savedState&&(f=u.content.savedState);this.currentState(
f);r.registerForDispose(r.selectable.isSelected.subscribe(function(){e.savedState(e.currentState())}
));this.stepInput(this._getStepInput(f,!1,!0));this._container=r;this._collectorBase=new i.Internal.
CollectorBase(new i.Internal.Provisioner(this));this.privatePcPrBI=new n.ViewModels.ParameterCollection.
Internal.ProvisioningEntityBindingInternals;this.enableProvisioning=ko.observable(!0)}return __extends(
r,t),r.prototype.onInputsSet=function(n){var t=this;this.privateFcTpBI.inputs(this.getProviderInputs(
null));this._collectorBase.onProviderBindingInternalsReceived(n.fromProviderBindingInternals,this.privateFcTpBI.
inputs()&&this.privateFcTpBI.inputs().options,n.stepOutput,function(n,i){return t.onProviderCommit(n,
i)},function(){t._container.selectable.isSelected(!1)},function(){})},r.prototype.getProviderInputs=
function(){throw new Error("The method 'getProviderInputs' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterCollector' interface.");
},r.prototype.onProviderCommit=function(){throw new Error("The method 'onProviderCommit' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterCollector' interface.");
},r.prototype._getStepInput=function(n,t,i){var r=n&&n.stepStatuses&&n.stepStatuses.length?n.stepStatuses[
0].status:0;return{stepId:"NoWizardStep",status:r,isFirstStep:!0,isLastStep:!0,isOptional:!1,disabled:
!1,allowToggleProvisioningLocation:t,masterIsProvisioningPart:i}},r}(t.OpenBladeCommand);i.BaseCommandViewModel=
r})(i=t.ParameterCollection||(t.ParameterCollection={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(i){"use strict";var u=n.Helpers,r=HubsExtension.Azure.Pricing,f=n.ViewModels.ParameterCollectionV2.
Internal.ParameterCollectorFactory.confirmCommitSuffix,e=n.ViewModels.ParameterCollectionV2.Internal.
ParameterCollectorFactory.tryCommitSuffix,o=function(i){function o(u,f,e){var o=this,s,h;i.call(this,
u);this.editScopeId=ko.observable();this.actionInProgress=ko.observable(!1);this.eula=ko.observable(
"");this.secondaryLinkDisplayText=ko.observable("");this.galleryPricingInfo=ko.observable();this._providerBase=
null;this._actionBarOutput=null;this._actionInProgressLock=!1;this._baseCollectorInputs=null;this._baseFormContainer=
null;this._baseFormSubscriptions=null;this._baseProviderCommit=null;this._baseProviderOutputs=null;this.
_deferredProviderDismiss=null;this._hotSpotItems=ko.observableArray();this._initialSelectedValue=null;
this._previousOutput=null;this._provisionerInstance=null;this._savedProviderOutputs=null;this._selectableMap=
{};this._galleryItem=ko.observable(null);this._editScopeCache=null;this._editScopeView=null;this._editScopeCache=
new n.Internal.Data.EditScopeCacheOld({entityTypeName:e,supplyExistingData:function(n){return o._providerBase.
initializeDataModel(n,function(n){return o.overrideInputParameters(n)})},serializeParams:function(){
return"#"}});u.registerForDispose(this._editScopeCache);this._editScopeView=this._editScopeCache.createView(
u);this._providerBase=new n.ViewModels.ParameterCollection.Internal.ProviderBase(this._editScopeView);
this.privateFcTpBI=new n.ViewModels.ParameterCollection.Internal.CollectorBindingInternals;this.privateFpTcBI=
new n.ViewModels.ParameterCollection.Internal.ProviderBindingInternals;this.privatePcPrBI=new n.ViewModels.
ParameterCollection.Internal.ProvisioningEntityBindingInternals;this.editScope=this._editScopeView.editScope;
this.enableProvisioning=ko.observable(!1);this.provisionOnStartboardPart=ko.observable(!0);this.parameterCollectionErrors=
ko.observable();this.stepInput=ko.observable();this.stepOutput=ko.observable();s=f&&f.content&&f.content.
selectable;h=f&&f.content&&f.content.secondaryLinkSelectable;this._initialSelectedValue=s&&s.selectedValue;
this.selectable=new n.ViewModels.Selectable({allowUnselect:!1,selectedValue:this._initialSelectedValue,
isSelected:s&&s.isSelected,isActivated:s&&s.isActivated});u.registerForDispose(this.selectable);this.
secondaryLinkSelectable=new n.ViewModels.Selectable({allowUnselect:!1,selectedValue:h&&h.selectedValue,
isSelected:h&&h.isSelected,isActivated:h&&h.isActivated});u.registerForDispose(this.secondaryLinkSelectable);
this.hotSpot=new n.ViewModels.SelectableSet(this._hotSpotItems,function(n,t){return n.selectedValue(
)===t},function(n){return n.selectedValue()},f&&f.content&&f.content.hotSpot);u.registerForDispose(this.
hotSpot);this._actionBarOutput=ko.observable();this._baseProviderCommit=ko.observable();this._baseFormSubscriptions=
[];this._baseFormContainer=u;this._provisionerInstance=new n.ViewModels.ParameterCollection.Internal.
Provisioner(this);this._savedProviderOutputs={};this._baseFormSubscriptions.push(this._actionBarOutput.
subscribe(function(n){var u,f,i;t.ActionBars.Base.isCompleted(n)&&(u=function(){o.actionInProgress(!0);
var n=o.getOutputsToCommit(),t=function(){var n=o._editScopeCache;n.disposeAndDiscardEdits(o.editScopeId(
),o._editScopeView)};o._providerBase.commitProvider({enableProvisioning:o.enableProvisioning(),provisioner:
o._provisionerInstance,provisionerData:n,provisionerOptions:o._baseCollectorInputs.options,progressAction:
function(n){o._baseFormContainer.operations.add(n,{blockUi:!0})},discardEdits:t,privateFpTcBI:o.privateFpTcBI,
privatePcPrBI:o.privatePcPrBI,provisionOnStartboardPart:o.provisionOnStartboardPart()})},n.actionButtonClicked&&
o.secondaryLinkSelectable.isSelected()?o.secondaryLinkSelectable.selectedValue().detailBlade===r.Constants.
LegalTermsBlade.bladeName?(o._actionInProgressLock=!0,o.secondaryLinkSelectable.isSelected(!1),u()):
o.secondaryLinkSelectable.isSelected(!1):(f=o.galleryPricingInfo(),i=o._galleryItem(),o.enableProvisioning(
)&&f&&i&&(i.products.length>0||i.productsWithNoPricing.length>0)?(o.secondaryLinkSelectable.selectedValue(
{extension:r.Constants.LegalTermsBlade.bladeExtension,detailBlade:r.Constants.LegalTermsBlade.bladeName,
detailBladeInputs:{galleryPricingInfo:f,galleryItem:i}}),o.actionInProgress(!0),o.secondaryLinkSelectable.
isSelected(!0)):u()))}));this._baseFormSubscriptions.push(this.selectable.isSelected.subscribe(function(
n){n||o._unselectFields()}));this._baseFormSubscriptions.push(this.secondaryLinkSelectable.isSelected.
subscribe(function(n){n||o._actionInProgressLock||o.actionInProgress(!1)}));this._baseFormSubscriptions.
push(this.selectable.value.subscribe(function(n){o._resetSelectionStateOfSelectors(n)}));this._baseFormSubscriptions.
push(this.parameterCollectionErrors.subscribe(function(n){n&&(o.privateFcTpBI.errors(n),o.privateFcTpBI.
errors([]))}));this._baseFormSubscriptions.push(this.stepOutput.subscribe(function(i){var r=o._previousOutput;
o._previousOutput=i;!n.Base.Utilities.deepEquals(r,i)&&t.ActionBars.Base.isCompleted(i)&&o._onSelectorComplete(
i.stepId).then(function(){o.selectable.isSelected(!1)})}));u.registerForDispose(ko.computed(function(
){o.galleryPricingInfo()&&o._galleryItem()?o.secondaryLinkDisplayText(r.Constants.PricingSummaryBlade.
displayText):o.secondaryLinkDisplayText(null)}))}return __extends(o,i),Object.defineProperty(o.prototype,
"dataModel",{get:function(){return this.editScope()&&this.editScope().root},enumerable:!0,configurable:
!0}),o.prototype.onInputsSet=function(t){var h=this,s=null,o,u,i,e;if(this.editScopeId(t.editScopeId),
this.provisionOnStartboardPart(t.provisionOnStartboardPart),this.privatePcPrBI.masterIsProvisioningPart(
t.masterIsProvisioningPart),t.privateFcTpBI&&t.privateFcTpBI.inputs&&(this._baseCollectorInputs=t.privateFcTpBI.
inputs,o=this._providerBase.onCollectorBindingsReceived(t.privateFcTpBI.inputs,this.editScopeId(),function(
n){return h.onInputsReceived(n)}),this.enableProvisioning(o.enableProvisioning),s=o.promise,this._galleryItem(
t.privateFcTpBI.inputs.options&&t.privateFcTpBI.inputs.options.galleryOptions&&t.privateFcTpBI.inputs.
options.galleryOptions.galleryItem||null)),t.privateFcTpBI&&(u=t.privateFcTpBI.errors,u&&u.length>0))
{this.onCommitError(u);this.onCommitError([])}return t.privateFpTcBI&&(i=t.privateFpTcBI.commit,!i||
i===this._baseProviderCommit()||(i===f.format(this._baseProviderCommit())?this._deferredProviderDismiss&&
(this._deferredProviderDismiss.resolve(),this._deferredProviderDismiss=undefined):(this._baseProviderOutputs=
t.privateFpTcBI.outputs,this._baseProviderCommit(i)))),t.stepOutput&&this.stepOutput(t.stepOutput),t.
output&&(e=t.output&&t.output.secondaryLinkClicked,!e||e!==this.secondaryLinkDisplayText()||this._previousSecondaryLinkCommitId===
t.output.commitId||(this._previousSecondaryLinkCommitId=t.output.commitId,this.actionInProgress(!1),
this.secondaryLinkSelectable.selectedValue({extension:r.Constants.PricingSummaryBlade.bladeExtension,
detailBlade:r.Constants.PricingSummaryBlade.bladeName,detailBladeInputs:{galleryPricingInfo:this.galleryPricingInfo(
),galleryItem:this._galleryItem()}}),this.secondaryLinkSelectable.isSelected(!0)),!t.output.status||
e||n.Base.Utilities.deepEquals(t.output,this._actionBarOutput())||this._actionBarOutput(t.output)),s}
,o.prototype.registerHotSpot=function(n){var t=n.selectable||n,i;this._hotSpotItems.push(t);i=this.hotSpot.
selectableItems().first(function(n){return n.data===t});this._baseFormSubscriptions.push.apply(this.
_baseFormSubscriptions,ko.utils.twoWayBinding(t.isSelected,i.isActivated))},o.prototype.registerSelector=
function(t,i){var u=this,r;if(this._selectableMap[t])throw new Error("You cannot register multiple selectors with the same id.");
r=i.selectable;this._selectableMap[t]=r;this._initialSelectedValue!==undefined&&n.Base.Utilities.deepEquals(
this._initialSelectedValue,r.selectedValue())&&r.isSelected(this.selectable.isSelected());this._baseFormSubscriptions.
push(r.isSelected.subscribe(function(n){n&&(u._unselectFields(r),u.selectable.selectedValue(r.selectedValue(
)),u.stepInput({stepId:t,status:0,isLastStep:!1}),u.selectable.isSelected(!0),u._onSelectorLoad(t))}
))},o.prototype.overrideInputParameters=function(n){return u.Deferred().resolve(n).promise()},o.prototype.
getProviderInputs=function(){throw new Error("The method 'getProviderInputs' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterCollector' interface.");
},o.prototype.onProviderCommit=function(){throw new Error("The method 'onProviderCommit' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterCollector' interface.");
},o.prototype.onInputsReceived=function(){throw new Error("The method 'onInputsReceived' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'ParameterProvider' interface.");
},o.prototype.getOutputsToCommit=function(){var t=n.ViewModels.ParameterCollection.Models.modelToParameters(
this.dataModel);return{outputParameters:t}},o.prototype.onCommitError=function(){throw new Error("The method 'onCommitError' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterProvider' interface.");
},o.prototype.dispose=function(){while(this._baseFormSubscriptions.length){var n=this._baseFormSubscriptions.
splice(0,1)[0];n&&!n.isDisposed&&n.dispose()}i.prototype.dispose.call(this)},o.prototype._unselectFields=
function(n){var t=this;Object.keys(this._selectableMap).forEach(function(i){var r=t._selectableMap[i];
n&&n===r||r.isSelected(!1)})},o.prototype._resetSelectionStateOfSelectors=function(t){var u=this,i,r;
(Object.keys(this._selectableMap).forEach(function(f){var e=u._selectableMap[f];e.isSelected()&&(r=e);
n.Base.Utilities.deepEquals(e.selectedValue(),t)&&(i=e)}),i!==r)&&(r&&r.isSelected(!1),i&&i.isSelected(
!0))},o.prototype._onSelectorLoad=function(n){var i=this,t=u.Deferred();return this._providerBase.fetchEditScope(
this.editScopeId(),this._baseCollectorInputs).then(function(){var r=i.getProviderInputs(n);i.privateFcTpBI.
inputs(r);t.resolve()},function(){t.reject()}),t.promise()},o.prototype._onSelectorComplete=function(
n){var t=this,i=u.Deferred(),r=this._baseProviderCommit.subscribe(function(){t._savedProviderOutputs[
n]=t._baseProviderOutputs;t.onProviderCommit(n,t._baseProviderOutputs).then(function(n){n?t._baseProviderCommit(
).indexOf(e)>-1?(t._deferredProviderDismiss=i,t.privateFcTpBI.errors([{errorMessage:null,parameterName:
t._baseProviderCommit()}]),t.privateFcTpBI.errors([])):i.resolve():i.reject()});r.dispose()});return this.
_baseFormSubscriptions.push(r),i.promise()},o}(n.ViewModels.Forms.Form.ViewModel);i.BaseFormViewModel=
o})(i=t.ParameterCollection||(t.ParameterCollection={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(t){"use strict";var i=function(t){function i(i,r,u,f){t.call(this);this.editScopeId=
ko.observable();this._commit=ko.observable();this._baseButtonContainer=null;this._basePartSubscriptions=
null;this._baseProviderCommit=null;this._initialLoadComplete=null;i.selectable=new n.ViewModels.Internal.
Selectable({selectedValue:!0,isSelected:!!(r&&r.container&&r.container.selectable.isSelected)});var e=
{stepStatuses:[]};r&&r.content&&r.content.currentState&&(e=r.content.currentState);this.beginExecuteCommand=
ko.observable(!1);this.savedState=ko.observable(e);this.currentState=ko.observable(e);this.stepInput=
this._getStepInput(e,u!==!1,f);this.stepOutput=ko.observable();this.parameterCollectionErrors=ko.observable(
);this.privateFcTpBI=new n.ViewModels.ParameterCollection.Internal.CollectorBindingInternals;this._baseButtonContainer=
i;this._basePartSubscriptions=[];this._baseProviderCommit=null;this._initialLoadComplete=!1}return __extends(
i,t),i.prototype.onInputsSet=function(n){var t=this,i,r;return this.privateFcTpBI.inputs(this.getProviderInputs(
null)),this._initialLoadComplete||(this._basePartSubscriptions.push(this.parameterCollectionErrors.subscribe(
function(n){t.privateFcTpBI.errors(n);t.privateFcTpBI.errors([])})),this._basePartSubscriptions.push(
this.stepOutput.subscribe(function(n){t._processStepOutput(n)})),this._basePartSubscriptions.push(this.
_baseButtonContainer.selectable.isSelected.subscribe(function(){t.savedState(t.currentState())})),this.
_initialLoadComplete=!0),n.fromProviderBindingInternals&&(i=n.fromProviderBindingInternals.commit,!i||
i===this._baseProviderCommit||(this._baseProviderCommit=i,r=this.onProviderCommit(null,n.fromProviderBindingInternals.
outputs),r.then(function(n){n?(t._baseButtonContainer.selectable.isSelected(!1),t._commit(i)):t.parameterCollectionErrors(
[{errorMessage:"Parameter Collection failed!"}])}))),n.stepOutput&&this.stepOutput(n.stepOutput),this.
savedState()||this.savedState(n.savedState),null},i.prototype.getProviderInputs=function(){throw new
Error("The method 'getProviderInputs' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterCollector' interface.");
},i.prototype.onProviderCommit=function(){throw new Error("The method 'onProviderCommit' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterCollector' interface.");
},i.prototype.dispose=function(){while(this._basePartSubscriptions.length){var n=this._basePartSubscriptions.
splice(0,1)[0];n&&!n.isDisposed&&n.dispose()}},i.prototype._processStepOutput=function(n){n&&(this.currentState(
{stepStatuses:[{stepId:n.stepId,status:n.status}],selectedStepId:n.stepId}),this.beginExecuteCommand(
n.status===3))},i.prototype._getStepInput=function(n,t,i){var r=n&&n.stepStatuses&&n.stepStatuses.length?
n.stepStatuses[0].status:0;return ko.observable({stepId:"NoWizardStep",status:r,isFirstStep:!0,isLastStep:
!0,isOptional:!1,disabled:!1,allowToggleProvisioningLocation:t,masterIsProvisioningPart:i})},i}(n.ViewModels.
ButtonPart);t.BaseGalleryButtonPartViewModel=i})(i=t.ParameterCollection||(t.ParameterCollection={})
)})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};Grid=MsPortalFx.ViewModels.Controls.Lists.Grid,function(n){var t;(function(t){var
i;(function(i){"use strict";var u=n.Helpers,r=window,f=function(i){function f(r,u,f,e){var o=this,s,
h;e===void 0&&(e=!1);i.call(this,r);this.editScopeId=ko.observable();this.triggerSelectAction=ko.observable(
"");this.multiselectEnabled=ko.observable(!1);this.valid=ko.observable(!1);this.showCreateAction=ko.
observable(!1);this.eula=ko.observable("");this.filterPickerItemsParameterName="filterPickerItems";this.
pickerItemsParameterName="pickerItems";this.listHeader=ko.observable();this.listSubHeader=ko.observable(
);this.isCreateActionResult=ko.observable(!1);this._createActionOutputs=null;this.pickerActivationBladeOpener=
ko.observable(undefined);this.createActionBladeOpener=ko.observable(undefined);this._basePartSubscriptions=
null;this.itemSelectedByDefault=ko.observable();this.filterItems=ko.observable();this._filteredItems=
[];this._editScopeCache=null;this._editScopeView=null;this._providerBase=null;this._pickerInputCollections=
null;this._createActionProviderCommited=null;this._actionBarOutput=null;this._createSelectorField=null;
this._selectorOriginalValue=ko.observable();this._selectorEditableValue=ko.observable();this._createSelectorBladeName=
null;this._createSelectorBladeExtension=null;this._throttleUnselectSelectorFieldHandle=null;this._partContainer=
null;this.filters=ko.observableArray([]);this.controlType=80;this.multiselectEnabled(e);this._editScopeCache=
new n.Internal.Data.EditScopeCacheOld({supplyExistingData:function(n){return o._providerBase.initializeDataModel(
n,function(n){return o.overrideInputParameters(n)})},serializeParams:function(){return"#"}});r.registerForDispose(
this._editScopeCache);this._editScopeView=this._editScopeCache.createView(r);this._providerBase=new n.
ViewModels.ParameterCollection.Internal.ProviderBase(this._editScopeView);this.privateFcTpBI=new n.ViewModels.
ParameterCollection.Internal.CollectorBindingInternals;this.privateFpTcBI=new n.ViewModels.ParameterCollection.
Internal.ProviderBindingInternals;this.parameterCollectionErrors=ko.observable();this.stepInput=ko.observable(
);this._partContainer=r;this.createActionSelectorField=ko.observable();this._createActionProviderCommited=
!1;this.isCreateActionResult(!1);this._basePartSubscriptions=[];this._actionBarOutput=ko.observable(
);s=n.ViewModels.Controls.Lists.Grid.Extensions.SelectableRow;h=this._getGridExtensionOptions();this.
itemsGridViewModel=new n.ViewModels.Controls.Lists.Grid.ViewModel(r,f,s,h);this.itemsGridViewModel.showHeader=
!0;this.itemsGridViewModel.columns=this.getColumns();r.registerForDispose(this.itemsGridViewModel);this.
_initializeCreateActionSelector();this._basePartSubscriptions.push(this._actionBarOutput.subscribe(function(
n){if(t.ActionBars.Base.isCompleted(n)){var i=o.getOutputsToCommit(),r=function(){var n=o._editScopeCache;
n.disposeAndDiscardEdits(o.editScopeId(),o._editScopeView)};setTimeout(function(){o._providerBase.commitProvider(
{enableProvisioning:!1,provisioner:null,provisionerData:i,provisionerOptions:o._pickerInputCollections.
options,progressAction:function(n){o._partContainer.operations.add(n,{blockUi:!0})},discardEdits:r,privateFpTcBI:
o.privateFpTcBI})},100)}}));this._basePartSubscriptions.push(this.itemSelectedByDefault.subscribe(function(
n){if(o.multiselectEnabled()&&Array.isArray(n))n.forEach(function(n){var t=o.getMatchingItemIndex(n);
o._selectGridItem(t)});else if(n){var t=o.getMatchingItemIndex(n);o._selectGridItem(t)}}));this._basePartSubscriptions.
push(this.filterItems.subscribe(function(n){o._filterGridItems(n)}));this._basePartSubscriptions.push(
this.itemsGridViewModel.items.subscribe(function(){o._filterGridItems(o.filterItems())}));this._basePartSubscriptions.
push(this.parameterCollectionErrors.subscribe(function(n){o.privateFcTpBI.errors(n)}));this._basePartSubscriptions.
push(this.itemsGridViewModel.selectableData.selectedItems.subscribe(function(n){o._onSelectedItemsChanged(
n)}));this._basePartSubscriptions.push(this.createActionBladeOpener.subscribe(function(n){n?(o._clearThrottleUnselectSelectorFieldHandle(
),o.itemsGridViewModel.selectableData.selectedItems([]),o.createActionSelectorField().selectable.isSelected(
!0)):o._closeBlade(o.itemsGridViewModel.selectableData.selectedItems())}))}return __extends(f,i),f.prototype.
initializeCreateSelector=function(n,t,i,r,u){this._selectorOriginalValue(n);this._selectorEditableValue(
n);this._createSelectorField.label(t);this._createSelectorBladeName=i;this._createSelectorBladeExtension=
r;u&&ko.utils.arrayPushAll(this._createSelectorField.validations,u)},f.prototype.onInputsSet=function(
t){var i=this,r=null,u;if(this.editScopeId(t.editScopeId),t&&t.privateFcTpBI&&t.privateFcTpBI.inputs&&
(this._pickerInputCollections=t.privateFcTpBI.inputs,this.stepInput(t.stepInput),u=this._providerBase.
onCollectorBindingsReceived(t.privateFcTpBI.inputs,this.editScopeId(),function(n){return i.onInputsReceived(
n)}),r=u.promise),t&&t.privateFcTpBI&&t.privateFcTpBI.errors&&t.privateFcTpBI.errors.length>0)this.onCommitError(
t.privateFcTpBI.errors);return t.privateFpTcBI&&t.privateFpTcBI.commit&&t.privateFpTcBI.commit!==this.
_createActionProviderCommited&&(this.onProviderCommit(null,t.privateFpTcBI.outputs).then(function(r)
{r&&(i.isCreateActionResult(!0),i.createActionSelectorField().selectable.isSelected(!1),i._createActionOutputs=
t.privateFpTcBI.outputs,i.itemsGridViewModel.selectableData.selectedItems([]),i.valid(!0),i.triggerSelectAction(
n.Util.newGuid()))}),this._createActionProviderCommited=t.privateFpTcBI.commit),t.output&&t.output.status&&
!n.Base.Utilities.deepEquals(t.output,this._actionBarOutput())&&this._actionBarOutput(t.output),r},f.
prototype.overrideInputParameters=function(n){return u.Deferred().resolve(n).promise()},f.prototype.
getParameter=function(n,t,i){return t in i&&n in i[t]?i[t][n]:null},f.prototype.dispose=function(){while(
this._basePartSubscriptions.length){var n=this._basePartSubscriptions.splice(0,1)[0];n&&!n.isDisposed&&
n.dispose()}this._clearThrottleUnselectSelectorFieldHandle();i.prototype.dispose.call(this)},Object.
defineProperty(f.prototype,"dataModel",{get:function(){return this._editScopeView.editScope()?this._editScopeView.
editScope().root:null},enumerable:!0,configurable:!0}),f.prototype.getMatchingItemIndex=function(){throw new
Error("The method 'getMatchingItemIndex' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the PickerList.");
},f.prototype.getColumns=function(){throw new Error("The method 'getColumns' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the PickerList.");
},f.prototype.itemMatchesSelection=function(){throw new Error("The method 'itemMatchesSelection' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the PickerList.");
},f.prototype.createSelection=function(){throw new Error("The method 'createSelection' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the PickerList.");
},f.prototype.getProviderInputs=function(){return this._pickerInputCollections},f.prototype.onProviderCommit=
function(){throw new Error("The method 'onProviderCommit' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterCollector' interface.");
},f.prototype.onInputsReceived=function(){throw new Error("The method 'onInputsReceived' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterProvider' interface.");
},f.prototype.getOutputsToCommit=function(){var t=n.ViewModels.ParameterCollection.Models.modelToParameters(
this.dataModel);return{outputParameters:t}},f.prototype.onCommitError=function(){throw new Error("The method 'onCommitError' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterProvider' interface.");
},f.prototype._onSelectedItemsChanged=function(n){var t=this,i=n&&n.length>0,r=!1;if(i)if(this.isCreateActionResult(
!1),this.filters&&this.filters()&&this.filters().length>0){if(this.filters().forEach(function(i){i.getDisabledItems(
n).then(function(n){n.forEach(function(n){var i=t.itemsGridViewModel.items().first(function(i){return t.
itemMatchesSelection(n.item,i)});i&&(t._disableGridItem(i,n.disabledReason),t.itemsGridViewModel.selectableData.
selectedItems.remove(i),r=!0,t._filteredItems.push(n))})})}),r){this.valid(!1);return}this._closeBlade(
n)}else this._closeBlade(n);this.valid(i)},f.prototype._closeBlade=function(t){var i=this,u;this._clearThrottleUnselectSelectorFieldHandle(
);this._throttleUnselectSelectorFieldHandle=r.setTimeout(function(){i.createActionSelectorField()&&i.
createActionSelectorField().selectable.isSelected(!1)},0);this.multiselectEnabled()||t.length!==1||(
u=this.itemSelectedByDefault()&&this.itemMatchesSelection(this.itemsGridViewModel.items()[this.getMatchingItemIndex(
this.itemSelectedByDefault())],t[0]),u||this.triggerSelectAction(n.Util.newGuid()))},f.prototype._clearThrottleUnselectSelectorFieldHandle=
function(){this._throttleUnselectSelectorFieldHandle&&(r.clearTimeout(this._throttleUnselectSelectorFieldHandle),
this._throttleUnselectSelectorFieldHandle=null)},f.prototype._getGridExtensionOptions=function(){return{
selectableRow:{selectionMode:this.multiselectEnabled()?2:1,selectionStyle:1,itemMatchesSelection:this.
itemMatchesSelection,createSelection:this.createSelection}}},f.prototype._selectGridItem=function(n)
{if(n!==-1){var t=this.itemsGridViewModel.getRowMetadata(this.itemsGridViewModel.items()[n]);t.selected(
!0)}},f.prototype._disableGridItem=function(t,i){if(t){var r=this.itemsGridViewModel.getRowMetadata(
t);r.disabled(!0);r.selected(!1);i&&t.hasOwnProperty("infoBalloon")&&(t.infoBalloon?t.infoBalloon.content(
i):(t.infoBalloon=new n.ViewModels.Controls.DockedBalloon.ViewModel(this.lifetimeManager),t.infoBalloon.
content(i)))}},f.prototype._initializeCreateActionSelector=function(){var t=this;this._createSelectorField=
new n.ViewModels.Forms.Selector.ViewModel(this._partContainer,{defaultValue:this._selectorOriginalValue});
this._createSelectorField.value=this._selectorEditableValue;this.createActionSelectorField(this._createSelectorField);
this._createSelectorField.selectable.isSelected.subscribe(function(n){n?t._launchCreateActionBlade():
t.createActionBladeOpener(undefined)})},f.prototype._launchCreateActionBlade=function(){var n=this.getProviderInputs(
null);this.privateFcTpBI.inputs(n);this.itemsGridViewModel.selectableData.selectedItems([]);this.createActionBladeOpener(
{detailBlade:this._createSelectorBladeName,extension:this._createSelectorBladeExtension,detailBladeInputs:
{}})},f.prototype._filterGridItems=function(n){var t=this;n&&n.forEach(function(n){var i=t.getMatchingItemIndex(
n.id);i!==-1&&t._disableGridItem(t.itemsGridViewModel.items()[i],n.reason)});this._filteredItems&&this.
_filteredItems.length>0&&this._filteredItems.forEach(function(n){var i=t.itemsGridViewModel.items().
first(function(i){return t.itemMatchesSelection(n.item,i)});i&&t._disableGridItem(i,n.disabledReason)}
)},f}(n.ViewModels.Controls.Loadable.ViewModel);i.BasePickerListViewModel=f})(i=t.ParameterCollection||
(t.ParameterCollection={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(i)
{"use strict";var r=n.Helpers,u=n.ViewModels.ParameterCollectionV2.Internal.ParameterCollectorFactory.
confirmCommitSuffix,f=n.ViewModels.ParameterCollectionV2.Internal.ParameterCollectorFactory.tryCommitSuffix,
e=function(i){function e(r,u,f){var e=this;i.call(this,u&&u.content);this.editScopeId=ko.observable(
);this.eula=ko.observable("");this._editScopeCache=null;this._editScopeView=null;this._actionBarOutput=
null;this._baseCollectorInputs=null;this._baseProviderCommit=null;this._baseProviderOutputs=null;this.
_baseWizardContainer=null;this._baseWizardSubscriptions=null;this._deferredProviderDismiss=null;this.
_providerBase=null;this._provisionerInstance=null;this._savedProviderOutputs=null;this.valid=ko.computed(
function(){return e.steps().every(function(n){return n.isOptional||n.status()===3})});r.registerForDispose(
this.valid);this._editScopeCache=new n.Internal.Data.EditScopeCacheOld({entityTypeName:f,supplyExistingData:
function(n){return e._providerBase.initializeDataModel(n,function(n){return e.overrideInputParameters(
n)})},serializeParams:function(){return"#"}});r.registerForDispose(this._editScopeCache);this._editScopeView=
this._editScopeCache.createView(r);this._providerBase=new n.ViewModels.ParameterCollection.Internal.
ProviderBase(this._editScopeView);this.enableProvisioning=ko.observable(!1);this.provisionOnStartboardPart=
ko.observable(!0);this.parameterCollectionErrors=ko.observable();this.privateFcTpBI=new n.ViewModels.
ParameterCollection.Internal.CollectorBindingInternals;this.privateFpTcBI=new n.ViewModels.ParameterCollection.
Internal.ProviderBindingInternals;this.privatePcPrBI=new n.ViewModels.ParameterCollection.Internal.ProvisioningEntityBindingInternals;
this._actionBarOutput=ko.observable();this._baseProviderCommit=ko.observable();this._baseWizardSubscriptions=
[];this._baseWizardContainer=r;this._provisionerInstance=new n.ViewModels.ParameterCollection.Internal.
Provisioner(this);this._savedProviderOutputs={};this.complete=this._onWizardComplete.bind(this);this.
_baseWizardSubscriptions.push(this._actionBarOutput.subscribe(function(n){if(t.ActionBars.Base.isCompleted(
n)){var i=e.getOutputsToCommit(),r=function(){var n=e._editScopeCache;n.disposeAndDiscardEdits(e.editScopeId(
),e._editScopeView)};e._providerBase.commitProvider({enableProvisioning:e.enableProvisioning(),provisioner:
e._provisionerInstance,provisionerData:i,provisionerOptions:e._baseCollectorInputs.options,progressAction:
function(n){e._baseWizardContainer.operations.add(n,{blockUi:!0})},discardEdits:r,privateFpTcBI:e.privateFpTcBI,
privatePcPrBI:e.privatePcPrBI,provisionOnStartboardPart:e.provisionOnStartboardPart()})}}));this._baseWizardSubscriptions.
push(this.parameterCollectionErrors.subscribe(function(n){e.privateFcTpBI.errors(n)}))}return __extends(
e,i),Object.defineProperty(e.prototype,"dataModel",{get:function(){return this._editScopeView.editScope(
)&&this._editScopeView.editScope().root},enumerable:!0,configurable:!0}),e.prototype.onInputsSet=function(
t){var o=this,e=null,f,r,i;if(this.editScopeId(t.editScopeId),this.provisionOnStartboardPart(t.provisionOnStartboardPart),
this.privatePcPrBI.masterIsProvisioningPart(t.masterIsProvisioningPart),t.privateFcTpBI&&t.privateFcTpBI.
inputs&&(this._baseCollectorInputs=t.privateFcTpBI.inputs,f=this._providerBase.onCollectorBindingsReceived(
t.privateFcTpBI.inputs,this.editScopeId(),function(n){return o.onInputsReceived(n)}),this.enableProvisioning(
f.enableProvisioning),e=f.promise),t.privateFcTpBI&&(r=t.privateFcTpBI.errors,r&&r.length>0)){this.onCommitError(
r);this.onCommitError([])}return t.privateFpTcBI&&(i=t.privateFpTcBI.commit,!i||i===this._baseProviderCommit(
)||(i===u.format(this._baseProviderCommit())?this._deferredProviderDismiss&&(this._deferredProviderDismiss.
resolve(),this._deferredProviderDismiss=undefined):(this._baseProviderOutputs=t.privateFpTcBI.outputs,
this._baseProviderCommit(i)))),this.initialize(),t.stepOutput&&this.stepOutput(t.stepOutput),this.savedState(
)||this.savedState(t.savedState),t.output&&t.output.status&&!n.Base.Utilities.deepEquals(t.output,this.
_actionBarOutput())&&this._actionBarOutput(t.output),e},e.prototype.overrideInputParameters=function(
n){return r.Deferred().resolve(n).promise()},e.prototype.getProviderInputs=function(){throw new Error(
"The method 'getProviderInputs' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterCollector' interface.");
},e.prototype.onProviderCommit=function(){throw new Error("The method 'onProviderCommit' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterCollector' interface.");
},e.prototype.onInputsReceived=function(){throw new Error("The method 'onInputsReceived' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterProvider' interface.");
},e.prototype.getOutputsToCommit=function(){var t=n.ViewModels.ParameterCollection.Models.modelToParameters(
this.dataModel);return{outputParameters:t}},e.prototype.onCommitError=function(){throw new Error("The method 'onCommitError' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.ViewModels.ParameterCollection.ParameterProvider' interface.");
},e.prototype.dispose=function(){while(this._baseWizardSubscriptions.length){var n=this._baseWizardSubscriptions.
splice(0,1)[0];n&&!n.isDisposed&&n.dispose()}i.prototype.dispose.call(this)},e.prototype.addWizardStep=
function(n,t,i,r,u,f,e){this.insertWizardStep(null,n,t,i,r,u,f,e)},e.prototype.insertWizardStep=function(
t,i,r,u,f,e,o,s){var h=new n.ViewModels.Controls.Wizard.WizardStep(i,r,u,o,e,s);h.description(f);h.stepLoad=
this._onStepLoad.bind(this);h.stepComplete=this._onStepComplete.bind(this);typeof t=="number"?this.steps.
splice(t,0,h):this.steps.push(h)},e.prototype.removeWizardStep=function(n){this.steps.remove(n)},e.prototype.
removeWizardStepAt=function(n){return this.steps.splice(n,1)[0]},e.prototype._onStepLoad=function(t)
{var i=this,u=r.Deferred();return this._providerBase.fetchEditScope(this.editScopeId(),this._baseCollectorInputs).
then(function(){var r=i.getProviderInputs(t.stepId);t.stepId in i._savedProviderOutputs&&n.Base.ProxiedObservables.
data(r.options,"lastOutputParameters",i._savedProviderOutputs[t.stepId]);i.privateFcTpBI.inputs(r);u.
resolve()}),u.promise()},e.prototype._onStepComplete=function(n){var t=this,i=r.Deferred(),u=this._baseProviderCommit.
subscribe(function(){t._savedProviderOutputs[n.stepId]=t._baseProviderOutputs;t.onProviderCommit(n.stepId,
t._baseProviderOutputs).then(function(n){n?t._baseProviderCommit().indexOf(f)>-1?(t._deferredProviderDismiss=
i,t.privateFcTpBI.errors([{errorMessage:null,parameterName:t._baseProviderCommit()}]),t.privateFcTpBI.
errors([])):i.resolve():i.reject()});u.dispose()});return this._baseWizardSubscriptions.push(u),i.promise(
)},e.prototype._onWizardComplete=function(){return null},e}(n.ViewModels.Controls.Wizard.ViewModel);
i.BaseWizardViewModel=e})(i=t.ParameterCollection||(t.ParameterCollection={}))})(t=n.ViewModels||(n.
ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";
var i=function(){function n(){this.inputParameters={};this.inputMetadata={};this.options={}}return n}
(),t;n.ParameterCollectionInput=i;t=function(){function n(){this.outputParameters={}}return n}();n.ParameterCollectionOutput=
t})(t=n.ParameterCollectionV2||(n.ParameterCollectionV2={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";var t="parameterCollection",
i="previousOutputParameters",r;(function(n){function r(n){var i={},t,r;for(t in n){t in i||(i[t]={});
for(r in n[t])i[t][r]=n[t][r]()||""}return i}function u(n){var r={},t,i;for(t in n)for(i in n[t]){if(
t in r||(r[t]={}),ko.isObservable(n[t][i])||ko.isComputed(n[t][i]))throw new Error("Parameters cannot be knockout observables.");
r[t][i]?r[t][i](n[t][i]):r[t][i]=ko.observable(n[t][i])}return r}function f(n){return n&&t in n&&i in
n[t]&&!!n[t][i]?n[t][i]:null}n.modelToParameters=r;n.parametersToModel=u;n.getPreviousOutputsFromOptions=
f})(r=n.Utilities||(n.Utilities={}))})(t=n.ParameterCollectionV2||(n.ParameterCollectionV2={}))})(t=
n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,
t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(i){"use strict";var u=n.Helpers,r=
function(n){function t(t,r){var u=this;n.call(this,t);this.stepInput=ko.observable();this._collectorImpl=
null;this._provisionerImpl=null;this._parameterCollectionRolesSet=!1;this._baseCommandContainer=null;
this._baseCommandInitialState=null;this.privateFcTpBI=new i.Internal.CollectorBindingInternals;this.
privatePcPrBI=new i.Internal.ProvisionerBindingInternals;this._baseCommandContainer=t;this._baseCommandInitialState=
r;this.enableProvisioning=ko.observable(!0);this.stepInput(this._getStepInput(!1,!0));t.registerForDispose(
t.selectable.isSelected.subscribe(function(n){n&&u._collectorImpl.sendInputsToProvider(null)}))}return __extends(
t,n),t.prototype.onInputsSet=function(n){var t=this,i=[];if(!this._parameterCollectionRolesSet)throw new
Error("Parameter collection roles have not been set. Call 'this.initializeParameterCollectionRoles()' in your constructor.");
return this._collectorImpl&&i.push(this._collectorImpl.processInputs(n)),this._provisionerImpl&&i.push(
this._provisionerImpl.processInputs(n)),Q.all(i).then(function(){t._provisionerImpl&&t.enableProvisioning(
t._provisionerImpl.enableProvisioning())})},t.prototype.initializeParameterCollectionRoles=function(
n){if(this._parameterCollectionRolesSet)throw new Error("The 'parameterCollectionRoles' property should be only set once.");
this._extractCommandRoles(n,this._baseCommandContainer);this._parameterCollectionRolesSet=!0},t.prototype.
_extractCommandRoles=function(n,t){var r=this,u=!!n&&n.parameterCollector,f=!!n&&n.provisioner,e;if(
!u)throw new Error("Collector role missing. A parameter collection commands needs to have a collector role.");
e={commitWhenSignaled:!0,commitAction:function(){if(r._provisionerImpl){var n=function(){r._provisionerImpl.
executeProvisioning(r._collectorImpl.providerOutputs,r.privateFcTpBI.inputs()&&r.privateFcTpBI.inputs(
).options)},i={privateFcTpBI:{inputs:r.privateFcTpBI.inputs()}},t=r._provisionerImpl.processInputs(i);
t?t.then(n):n()}r._baseCommandContainer.selectable.isSelected(!1)}};this._collectorImpl=i.Internal.ParameterCollectorFactory.
createParameterCollector(u,{},this.privateFcTpBI,t,e);f&&(this._provisionerImpl=i.Internal.ProvisionerFactory.
createProvisioner(f,this.privatePcPrBI))},t.prototype._getStepInput=function(n,t){return{stepId:"CommandStep",
status:0,isFirstStep:!0,isLastStep:!0,isOptional:!1,disabled:!1,allowToggleProvisioningLocation:n,masterIsProvisioningPart:
t}},t}(t.OpenBladeCommand);i.Command=r})(i=t.ParameterCollectionV2||(t.ParameterCollectionV2={}))})(
t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(i){"use strict";var r=HubsExtension.
Azure.Pricing,u=function(u){function f(f,e){var o=this,s,h,c;u.call(this,f);this.editScopeId=ko.observable(
);this.actionInProgress=ko.observable(!1);this.enableProvisioning=ko.observable(!1);this.eula=ko.observable(
"");this.secondaryLinkDisplayText=ko.observable("");this.galleryPricingInfo=ko.observable();this._collectorImpl=
null;this._providerImpl=null;this._provisionerImpl=null;this._parameterCollectionRolesSet=!1;this._actionBarOutput=
null;this._actionInProgressLock=!1;this._baseFormContainer=null;this._baseFormInitialState=null;this.
_hotSpotItems=ko.observableArray();this._initialSelectedValue=null;this._previousOutput=null;this._selectableMap=
{};this._isValid=ko.observable(!1);this._galleryItem=ko.observable(null);s=e&&e.content&&e.content.selectable;
h=e&&e.content&&e.content.secondaryLinkSelectable;this._editScopeImpl||(this._editScopeImpl=null);this.
privateFcTpBI=new i.Internal.CollectorBindingInternals;this.privateFpTcBI=new i.Internal.ProviderBindingInternals;
this.privatePcPrBI=new i.Internal.ProvisionerBindingInternals;this._baseFormContainer=f;this._baseFormInitialState=
e;this._initialSelectedValue=s&&s.selectedValue;this._actionBarOutput=ko.observable();this.stepInput=
ko.observable();this.stepOutput=ko.observable();c=this.valid;this.valid=ko.computed(function(){return o.
_isValid()&&c()});f.registerForDispose(this.valid);this.selectable=new n.ViewModels.Selectable({allowUnselect:
!1,selectedValue:this._initialSelectedValue,isSelected:s&&s.isSelected,isActivated:s&&s.isActivated});
f.registerForDispose(this.selectable);this.secondaryLinkSelectable=new n.ViewModels.Selectable({allowUnselect:
!1,selectedValue:h&&h.selectedValue,isSelected:h&&h.isSelected,isActivated:h&&h.isActivated});f.registerForDispose(
this.secondaryLinkSelectable);this.hotSpot=new n.ViewModels.SelectableSet(this._hotSpotItems,function(
n,t){return n.selectedValue()===t},function(n){return n.selectedValue()},e&&e.content&&e.content.hotSpot);
f.registerForDispose(this.hotSpot);f.registerForDispose(this._actionBarOutput.subscribe(function(n){
var u,f,i;t.ActionBars.Base.isCompleted(n)&&(u=function(){o.actionInProgress(!0);o._providerImpl.getOutputsToCommit(
).then(function(n){o._providerImpl.commitOutputs({provisioner:o._provisionerImpl,provisionerData:n,progressAction:
function(n){o._baseFormContainer.operations.add(n,{blockUi:!0})},discardEdits:o._editScopeImpl.discardEditScopeEdits.
bind(o._editScopeImpl),privateFpTcBI:o.privateFpTcBI,privatePcPrBI:o.privatePcPrBI})})},n.actionButtonClicked&&
o.secondaryLinkSelectable.isSelected()?o.secondaryLinkSelectable.selectedValue().detailBlade===r.Constants.
LegalTermsBlade.bladeName?(o._actionInProgressLock=!0,o.secondaryLinkSelectable.isSelected(!1),u()):
o.secondaryLinkSelectable.isSelected(!1):(f=o.galleryPricingInfo(),i=o._galleryItem(),o.enableProvisioning(
)&&f&&i&&(i.products.length>0||i.productsWithNoPricing.length>0)?(o.secondaryLinkSelectable.selectedValue(
{extension:r.Constants.LegalTermsBlade.bladeExtension,detailBlade:r.Constants.LegalTermsBlade.bladeName,
detailBladeInputs:{galleryPricingInfo:f,galleryItem:i}}),o.actionInProgress(!0),o.secondaryLinkSelectable.
isSelected(!0)):u()))}));f.registerForDispose(this.selectable.isSelected.subscribe(function(n){n||o.
_unselectFields()}));f.registerForDispose(this.secondaryLinkSelectable.isSelected.subscribe(function(
n){n||o._actionInProgressLock||o.actionInProgress(!1)}));f.registerForDispose(this.stepOutput.subscribe(
function(i){var r=o._previousOutput;o._previousOutput=i;!n.Base.Utilities.deepEquals(r,i)&&t.ActionBars.
Base.isCompleted(i)&&o._onSelectorComplete(i.stepId).then(function(){o.selectable.isSelected(!1)})}));
f.registerForDispose(ko.computed(function(){o.galleryPricingInfo()&&o._galleryItem()?o.secondaryLinkDisplayText(
r.Constants.PricingSummaryBlade.displayText):o.secondaryLinkDisplayText(null)}))}return __extends(f,
u),f.prototype.initializeParameterCollectionRoles=function(n){if(this._parameterCollectionRolesSet)throw new
Error("The 'parameterCollectionRoles' property should be only set once.");this._extractFormRoles(n,this.
_baseFormContainer);this._parameterCollectionRolesSet=!0},Object.defineProperty(f.prototype,"dataModel",
{get:function(){return this._editScopeImpl?this._editScopeImpl.dataModel:null},enumerable:!0,configurable:
!0}),Object.defineProperty(f.prototype,"inputMetadata",{get:function(){return this._editScopeImpl&&this.
_editScopeImpl.collectorInputs&&this._editScopeImpl.collectorInputs.inputMetadata?this._editScopeImpl.
collectorInputs.inputMetadata:null},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,
"parameterCollectionOptions",{get:function(){return this._editScopeImpl&&this._editScopeImpl.collectorInputs&&
this._editScopeImpl.collectorInputs.options?this._editScopeImpl.collectorInputs.options:null},enumerable:
!0,configurable:!0}),f.prototype.onFormInputsSet=function(){return null},f.prototype.onInputsSet=function(
t){var i=this,u=Q.defer(),f=[],o,e;return this.editScopeId(t.editScopeId),this._editScopeImpl&&this.
_editScopeImpl.collectorInputs&&this._editScopeImpl.collectorInputs.inputParameters&&(o=this._editScopeImpl.
collectorInputs.inputParameters),this._editScopeImpl&&f.push(this._editScopeImpl.processInputs(t)),this.
_collectorImpl&&f.push(this._collectorImpl.processInputs(t)),this._providerImpl&&f.push(this._providerImpl.
processInputs(t)),this._provisionerImpl&&f.push(this._provisionerImpl.processInputs(t)),t.stepOutput&&
this.stepOutput(t.stepOutput),this._galleryItem(t.privateFcTpBI&&t.privateFcTpBI.inputs&&t.privateFcTpBI.
inputs.options&&t.privateFcTpBI.inputs.options.galleryOptions&&t.privateFcTpBI.inputs.options.galleryOptions.
galleryItem||null),t.output&&(e=t.output&&t.output.secondaryLinkClicked,!e||e!==this.secondaryLinkDisplayText(
)||this._previousSecondaryLinkCommitId===t.output.commitId||(this._previousSecondaryLinkCommitId=t.output.
commitId,this.actionInProgress(!1),this.secondaryLinkSelectable.selectedValue({extension:r.Constants.
PricingSummaryBlade.bladeExtension,detailBlade:r.Constants.PricingSummaryBlade.bladeName,detailBladeInputs:
{galleryPricingInfo:this.galleryPricingInfo(),galleryItem:this._galleryItem()}}),this.secondaryLinkSelectable.
isSelected(!0)),!t.output.status||e||n.Base.Utilities.deepEquals(t.output,this._actionBarOutput())||
this._actionBarOutput(t.output)),Q.all(f).then(function(){if(i._provisionerImpl&&i.enableProvisioning(
i._provisionerImpl.enableProvisioning()),n.Base.Utilities.deepEquals(o,i._editScopeImpl.collectorInputs.
inputParameters))u.resolve();else{var t=i.onFormInputsSet(i._baseFormContainer,i._baseFormInitialState);
t?t.then(function(){u.resolve();i._isValid(!0)},function(){u.reject()}):(i._isValid(!0),u.resolve())}
},function(){u.reject()}),u.promise},f.prototype.dispose=function(){u.prototype.dispose.call(this)},
f.prototype.registerHotSpot=function(n){var u=this,t=n.selectable||n,i,r;this._hotSpotItems.push(t);
i=this.hotSpot.selectableItems().first(function(n){return n.data===t});r=ko.utils.twoWayBinding(t.isSelected,
i.isActivated);r.forEach(function(n){u._baseFormContainer.registerForDispose(n)})},f.prototype.registerSelector=
function(n,t,i){i&&this._collectorImpl&&this._collectorImpl.addProvider(n,i);this._registerSelectable(
n,t.selectable)},f.prototype.registerInfoBox=function(n,t,i){i&&this._collectorImpl&&this._collectorImpl.
addProvider(n,i);this._registerSelectable(n,t.selectable)},f.prototype._registerSelectable=function(
t,i){var r=this;if(this._selectableMap[t])throw new Error("You cannot register multiple selectors with the same id.");
this._selectableMap[t]=i;this._initialSelectedValue!==undefined&&n.Base.Utilities.deepEquals(this._initialSelectedValue,
i.selectedValue())&&i.isSelected(this.selectable.isSelected());this._baseFormContainer.registerForDispose(
i.isSelected.subscribe(function(n){n&&(r._unselectFields(i),r.selectable.selectedValue(i.selectedValue(
)),r.stepInput({stepId:t,status:0,isLastStep:!1}),r.selectable.isSelected(!0),r._onSelectorLoad(t))}
))},f.prototype._extractFormRoles=function(n,t){var f=!!n&&n.parameterCollector,r=!!n&&n.parameterProvider,
u=!!n&&n.provisioner;this._editScopeImpl||(this._editScopeImpl=i.Internal.EditScopeFactory.createEditScope(
r,t));this.editScope=this._editScopeImpl.editScope;this._providerImpl=i.Internal.ParameterProviderFactory.
createParameterProvider(r,this._editScopeImpl);this._collectorImpl=i.Internal.ParameterCollectorFactory.
createParameterCollector(f,this._editScopeImpl,this.privateFcTpBI,t);u&&(this._provisionerImpl=i.Internal.
ProvisionerFactory.createProvisioner(u,this.privatePcPrBI))},f.prototype._unselectFields=function(n)
{var t=this;Object.keys(this._selectableMap).forEach(function(i){var r=t._selectableMap[i];n&&n===r||
r.isSelected(!1)})},f.prototype._resetSelectionStateOfSelectors=function(t){var u=this,i,r;(Object.keys(
this._selectableMap).forEach(function(f){var e=u._selectableMap[f];e.isSelected()&&(r=e);n.Base.Utilities.
deepEquals(e.selectedValue(),t)&&(i=e)}),i!==r)&&(r&&r.isSelected(!1),i&&i.isSelected(!0))},f.prototype.
_onSelectorLoad=function(n){var i=this,t=Q.defer();return this._editScopeImpl.fetchEditScope().then(
function(){i._collectorImpl&&i._collectorImpl.sendInputsToProvider(n);t.resolve()},function(){t.reject(
)}),t.promise},f.prototype._onSelectorComplete=function(n){return this._collectorImpl?this._collectorImpl.
commitProviderOutputs(n):$.Deferred().resolve().promise()},f}(n.ViewModels.Forms.Form.ViewModel);i.Form=
u})(i=t.ParameterCollectionV2||(t.ParameterCollectionV2={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(i){"use strict";var r=window,u=function(u){function f(r,f,e,o){var s=this,h,c;o===
void 0&&(o=!1);u.call(this,r);this.editScopeId=ko.observable();this.eula=ko.observable("");this.listHeader=
ko.observable();this.listSubHeader=ko.observable();this.multiselectEnabled=ko.observable(!1);this.showCreateAction=
ko.observable(!1);this.triggerSelectAction=ko.observable("");this.valid=ko.observable(!1);this.isCreateActionResult=
ko.observable(!1);this.pickerActivationBladeOpener=ko.observable(undefined);this.createActionBladeOpener=
ko.observable(undefined);this.itemSelectedByDefault=ko.observable();this.filterItems=ko.observable();
this.filters=ko.observableArray([]);this._filteredItems=[];this._createSelectorField=null;this._selectorOriginalValue=
ko.observable();this._selectorEditableValue=ko.observable();this._createSelectorBladeName=null;this.
_createSelectorBladeExtension=null;this._throttleUnselectSelectorFieldHandle=null;this._collectorImpl=
null;this._providerImpl=null;this._parameterCollectionRolesSet=!1;this._basePickerContainer=null;this.
_basePickerInitialState=null;this._actionBarOutput=null;this.controlType=80;this._editScopeImpl||(this.
_editScopeImpl=null);this.privateFcTpBI=new i.Internal.CollectorBindingInternals;this.privateFpTcBI=
new i.Internal.ProviderBindingInternals;this.multiselectEnabled(o);this._basePickerContainer=r;this.
_basePickerInitialState=f;this._actionBarOutput=ko.observable();this.createActionSelectorField=ko.observable(
);this.isCreateActionResult(!1);this.stepInput=ko.observable();h=n.ViewModels.Controls.Lists.Grid.Extensions.
SelectableRow;c=this._getGridExtensionOptions();this.itemsGridViewModel=new n.ViewModels.Controls.Lists.
Grid.ViewModel(r,e,h,c);this.itemsGridViewModel.showHeader=!0;this.itemsGridViewModel.columns=this.getColumns(
);r.registerForDispose(this.itemsGridViewModel);this._initializeCreateActionSelector();this._filterGridItems(
this.filterItems());r.registerForDispose(this._actionBarOutput.subscribe(function(n){t.ActionBars.Base.
isCompleted(n)&&s._providerImpl.getOutputsToCommit().then(function(n){s._providerImpl.commitOutputs(
{provisioner:null,provisionerData:n,progressAction:function(n){s._basePickerContainer.operations.add(
n,{blockUi:!0})},discardEdits:s._editScopeImpl.discardEditScopeEdits.bind(s._editScopeImpl),privateFpTcBI:
s.privateFpTcBI,privatePcPrBI:null})})}));r.registerForDispose(this.itemSelectedByDefault.subscribe(
function(n){if(s.multiselectEnabled())n.forEach(function(n){var t=s.getMatchingItemIndex(n);s._selectGridItem(
t)});else if(n){var t=s.getMatchingItemIndex(n);s._selectGridItem(t)}}));r.registerForDispose(this.filters.
subscribe(function(){s._filterGridItems(s.filterItems())}));r.registerForDispose(this.filterItems.subscribe(
function(n){s._filterGridItems(n)}));r.registerForDispose(this.itemsGridViewModel.items.subscribe(function(
){s._filterGridItems(s.filterItems())}));r.registerForDispose(this.itemsGridViewModel.selectableData.
selectedItems.subscribe(function(n){s._onSelectedItemsChanged(n)}));r.registerForDispose(this.createActionBladeOpener.
subscribe(function(n){n?(s._clearThrottleUnselectSelectorFieldHandle(),s.itemsGridViewModel.selectableData.
selectedItems([]),s.createActionSelectorField().selectable.isSelected(!0)):s._closeBlade(s.itemsGridViewModel.
selectableData.selectedItems())}))}return __extends(f,u),f.prototype.initializeCreateSelector=function(
n,t,i,r,u,f){this._selectorOriginalValue(n);this._selectorEditableValue(n);this._createSelectorField.
label(t);this._createSelectorBladeName=i;this._createSelectorBladeExtension=r;u&&this._collectorImpl&&
this._collectorImpl.addProvider(t,u);f&&ko.utils.arrayPushAll(this._createSelectorField.validations,
f)},f.prototype.onPickerInputsSet=function(){return null},f.prototype.onInputsSet=function(t){var r=
this,i=Q.defer(),u=[],f;return this.editScopeId(t.editScopeId),this._editScopeImpl&&this._editScopeImpl.
collectorInputs&&this._editScopeImpl.collectorInputs.inputParameters&&(f=this._editScopeImpl.collectorInputs.
inputParameters),this._editScopeImpl&&u.push(this._editScopeImpl.processInputs(t)),this._collectorImpl&&
u.push(this._collectorImpl.processInputs(t)),this._providerImpl&&u.push(this._providerImpl.processInputs(
t)),this.stepInput(t.stepInput),t.output&&t.output.status&&!n.Base.Utilities.deepEquals(t.output,this.
_actionBarOutput())&&this._actionBarOutput(t.output),Q.all(u).then(function(){if(n.Base.Utilities.deepEquals(
f,r._editScopeImpl.collectorInputs.inputParameters))i.resolve();else{var t=r.onPickerInputsSet(r._basePickerContainer,
r._basePickerInitialState);t?t.then(function(){i.resolve()},function(){i.reject()}):i.resolve()}},function(
){i.reject()}),i.promise},f.prototype.initializeParameterCollectionRoles=function(n){if(this._parameterCollectionRolesSet)
throw new Error("The 'parameterCollectionRoles' property should be only set once.");this._extractPickerRoles(
n,this._basePickerContainer);this._parameterCollectionRolesSet=!0},Object.defineProperty(f.prototype,
"dataModel",{get:function(){return this._editScopeImpl?this._editScopeImpl.dataModel:null},enumerable:
!0,configurable:!0}),Object.defineProperty(f.prototype,"inputMetadata",{get:function(){return this._editScopeImpl&&
this._editScopeImpl.collectorInputs&&this._editScopeImpl.collectorInputs.inputMetadata?this._editScopeImpl.
collectorInputs.inputMetadata:null},enumerable:!0,configurable:!0}),Object.defineProperty(f.prototype,
"parameterCollectionOptions",{get:function(){return this._editScopeImpl&&this._editScopeImpl.collectorInputs&&
this._editScopeImpl.collectorInputs.options?this._editScopeImpl.collectorInputs.options:null},enumerable:
!0,configurable:!0}),f.prototype.getParameter=function(n,t,i){return t in i&&n in i[t]?i[t][n]:null}
,f.prototype.dispose=function(){this._clearThrottleUnselectSelectorFieldHandle();u.prototype.dispose.
call(this)},f.prototype.getMatchingItemIndex=function(){throw new Error("The method 'getMatchingItemIndex' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the PickerList.");
},f.prototype.getColumns=function(){throw new Error("The method 'getColumns' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the PickerList.");
},f.prototype.itemMatchesSelection=function(){throw new Error("The method 'itemMatchesSelection' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the PickerList.");
},f.prototype.createSelection=function(){throw new Error("The method 'createSelection' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the PickerList.");
},f.prototype._extractPickerRoles=function(t,r){var u=this,f=!!t&&t.parameterCollector,e=!!t&&t.parameterProvider,
o;this._editScopeImpl||(this._editScopeImpl=i.Internal.EditScopeFactory.createEditScope(e,r,function(
){return u.onPickerInputsSet(u._basePickerContainer,u._basePickerInitialState)}));this._editScopeImpl.
initializeEditScope();o={commitWhenSignaled:!0,commitAction:function(){u.isCreateActionResult(!0);u.
createActionSelectorField().selectable.isSelected(!1);u.itemsGridViewModel.selectableData.selectedItems(
[]);u.valid(!0);u.triggerSelectAction(n.Util.newGuid())}};this._providerImpl=i.Internal.ParameterProviderFactory.
createParameterProvider(e,this._editScopeImpl);f&&(this._collectorImpl=i.Internal.ParameterCollectorFactory.
createParameterCollector(f,this._editScopeImpl,this.privateFcTpBI,r,o))},f.prototype._onSelectedItemsChanged=
function(n){var t=this,i=n&&n.length>0,r=!1;if(i)if(this.isCreateActionResult(!1),this.filters&&this.
filters()&&this.filters().length>0){if(this.filters().forEach(function(i){i.getDisabledItems(n).then(
function(n){n.forEach(function(n){var i=t.itemsGridViewModel.items().first(function(i){return t.itemMatchesSelection(
n.item,i)});i&&(t._disableGridItem(i,n.disabledReason),t.itemsGridViewModel.selectableData.selectedItems.
remove(i),r=!0,t._filteredItems.push(n))})})}),r){this.valid(!1);return}this._closeBlade(n)}else this.
_closeBlade(n);this.valid(i)},f.prototype._closeBlade=function(t){var i=this,u;this._clearThrottleUnselectSelectorFieldHandle(
);this._throttleUnselectSelectorFieldHandle=r.setTimeout(function(){i.createActionSelectorField()&&i.
createActionSelectorField().selectable.isSelected(!1)},0);this.multiselectEnabled()||t.length!==1||(
u=this.itemSelectedByDefault()&&this.itemMatchesSelection(this.itemsGridViewModel.items()[this.getMatchingItemIndex(
this.itemSelectedByDefault())],t[0]),u||this.triggerSelectAction(n.Util.newGuid()))},f.prototype._clearThrottleUnselectSelectorFieldHandle=
function(){this._throttleUnselectSelectorFieldHandle&&(r.clearTimeout(this._throttleUnselectSelectorFieldHandle),
this._throttleUnselectSelectorFieldHandle=null)},f.prototype._getGridExtensionOptions=function(){return{
selectableRow:{selectionMode:this.multiselectEnabled()?2:1,selectionStyle:1,itemMatchesSelection:this.
itemMatchesSelection,createSelection:this.createSelection}}},f.prototype._selectGridItem=function(n)
{if(n!==-1){var t=this.itemsGridViewModel.getRowMetadata(this.itemsGridViewModel.items()[n]);t.selected(
!0)}},f.prototype._disableGridItem=function(t,i){if(t){var r=this.itemsGridViewModel.getRowMetadata(
t);r.disabled(!0);i&&t.hasOwnProperty("infoBalloon")&&(t.infoBalloon?t.infoBalloon.content(i):(t.infoBalloon=
new n.ViewModels.Controls.DockedBalloon.ViewModel(this.lifetimeManager),t.infoBalloon.content(i)))}}
,f.prototype._initializeCreateActionSelector=function(){var t=this;this._createSelectorField=new n.ViewModels.
Forms.Selector.ViewModel(this._basePickerContainer,{defaultValue:this._selectorOriginalValue});this.
_createSelectorField.value=this._selectorEditableValue;this.createActionSelectorField(this._createSelectorField);
this._createSelectorField.selectable.isSelected.subscribe(function(n){n?t._launchCreateActionBlade():
t.createActionBladeOpener(undefined)})},f.prototype._launchCreateActionBlade=function(){this._collectorImpl.
sendInputsToProvider(null);this.itemsGridViewModel.selectableData.selectedItems([]);this.createActionBladeOpener(
{detailBlade:this._createSelectorBladeName,extension:this._createSelectorBladeExtension,detailBladeInputs:
{}})},f.prototype._filterGridItems=function(n){var t=this;n&&n.forEach(function(n){var i=t.getMatchingItemIndex(
n.id);i!==-1&&t._disableGridItem(t.itemsGridViewModel.items()[i],n.reason)});this._filteredItems&&this.
_filteredItems.length>0&&this._filteredItems.forEach(function(n){var i=t.itemsGridViewModel.items().
first(function(i){return t.itemMatchesSelection(n.item,i)});i&&t._disableGridItem(i,n.disabledReason)}
)},f.filterPickerItemsParameterName="filterPickerItems",f.pickerItemsParameterName="pickerItems",f}(
n.ViewModels.Controls.Loadable.ViewModel);i.Picker=u})(i=t.ParameterCollectionV2||(t.ParameterCollectionV2=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
t){var i;(function(t){"use strict";var i=n.Resources.Strings.Pickers.AccessDenied,r=function(){function t(
n,t){this._requiredPermission=t;this._mapItemToResourceId=n}return t.prototype.getDisabledItems=function(
t){var r=this,u=[],f=[],e=Q.defer();return t.forEach(function(t){f.push(n.Base.Security.hasPermission(
r._mapItemToResourceId(t),[r._requiredPermission]).then(function(n){n||u.push({item:t,disabledReason:
i.reasonMessage})}))}),Q.allSettled(f).then(function(){return e.resolve(u)}),e.promise},t}();t.ArmRbacFilter=
r})(i=t.PickerFilter||(t.PickerFilter={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
i){"use strict";var r=function(r){function u(n,u){var f=this;r.call(this,u&&u.content);this.editScopeId=
ko.observable();this.enableProvisioning=ko.observable(!1);this.eula=ko.observable("");this.provisionOnStartboardPart=
ko.observable(!0);this._collectorImpl=null;this._providerImpl=null;this._provisionerImpl=null;this._parameterCollectionRolesSet=
!1;this._actionBarOutput=null;this._baseWizardContainer=null;this._baseWizardInitialState=null;this.
_editScopeImpl||(this._editScopeImpl=null);this.privateFcTpBI=new i.Internal.CollectorBindingInternals;
this.privateFpTcBI=new i.Internal.ProviderBindingInternals;this.privatePcPrBI=new i.Internal.ProvisionerBindingInternals;
this._baseWizardContainer=n;this._baseWizardInitialState=u;this.complete=this._onWizardComplete.bind(
this);this.valid=ko.computed(function(){return f.steps().every(function(n){return n.isOptional||n.status(
)===3})});n.registerForDispose(this.valid);this._actionBarOutput=ko.observable();n.registerForDispose(
this._actionBarOutput.subscribe(function(n){t.ActionBars.Base.isCompleted(n)&&f._providerImpl.getOutputsToCommit(
).then(function(n){f._providerImpl.commitOutputs({provisioner:f._provisionerImpl,provisionerData:n,progressAction:
function(n){f._baseWizardContainer.operations.add(n,{blockUi:!0})},discardEdits:f._editScopeImpl.discardEditScopeEdits.
bind(f._editScopeImpl),privateFpTcBI:f.privateFpTcBI,privatePcPrBI:f.privatePcPrBI})})}))}return __extends(
u,r),u.prototype.onWizardInputsSet=function(){return null},u.prototype.onInputsSet=function(t){var i=
this,r=Q.defer(),u=[],f;if(!this._parameterCollectionRolesSet)throw new Error("Parameter collection roles have not been set. Call 'this.initializeParameterCollectionRoles()' in your constructor.");
return this.editScopeId(t.editScopeId),this._editScopeImpl&&this._editScopeImpl.collectorInputs&&this.
_editScopeImpl.collectorInputs.inputParameters&&(f=this._editScopeImpl.collectorInputs.inputParameters),
this._editScopeImpl&&u.push(this._editScopeImpl.processInputs(t)),this._collectorImpl&&u.push(this._collectorImpl.
processInputs(t)),this._providerImpl&&u.push(this._providerImpl.processInputs(t)),this._provisionerImpl&&
u.push(this._provisionerImpl.processInputs(t)),t.stepOutput&&this.stepOutput(t.stepOutput),this.savedState(
)||this.savedState(t.savedState),t.output&&t.output.status&&!n.Base.Utilities.deepEquals(t.output,this.
_actionBarOutput())&&this._actionBarOutput(t.output),Q.all(u).then(function(){if(i._provisionerImpl&&
i.enableProvisioning(i._provisionerImpl.enableProvisioning()),n.Base.Utilities.deepEquals(f,i._editScopeImpl.
collectorInputs.inputParameters))r.resolve();else{var t=i.onWizardInputsSet(i._baseWizardContainer,i.
_baseWizardInitialState);t?t.then(function(){r.resolve()},function(){r.reject()}):r.resolve()}i.initialize(
)},function(){r.reject()}),r.promise},u.prototype.initializeParameterCollectionRoles=function(n){if(
this._parameterCollectionRolesSet)throw new Error("The 'parameterCollectionRoles' property should be only set once.");
this._extractWizardRoles(n,this._baseWizardContainer);this._parameterCollectionRolesSet=!0},Object.defineProperty(
u.prototype,"dataModel",{get:function(){return this._editScopeImpl?this._editScopeImpl.dataModel:null}
,enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"inputMetadata",{get:function(){return this.
_editScopeImpl&&this._editScopeImpl.collectorInputs&&this._editScopeImpl.collectorInputs.inputMetadata?
this._editScopeImpl.collectorInputs.inputMetadata:null},enumerable:!0,configurable:!0}),Object.defineProperty(
u.prototype,"parameterCollectionOptions",{get:function(){return this._editScopeImpl&&this._editScopeImpl.
collectorInputs&&this._editScopeImpl.collectorInputs.options?this._editScopeImpl.collectorInputs.options:
null},enumerable:!0,configurable:!0}),u.prototype.dispose=function(){r.prototype.dispose.call(this)}
,u.prototype.addWizardStep=function(n,t,i,r,u,f,e,o){this.insertWizardStep(null,n,t,i,r,u,f,e,o)},u.
prototype.insertWizardStep=function(t,i,r,u,f,e,o,s,h){var c=new n.ViewModels.Controls.Wizard.WizardStep(
i,r,u,s,o,h);c.description(f);c.stepLoad=this._onStepLoad.bind(this);c.stepComplete=this._onStepComplete.
bind(this);typeof t=="number"?this.steps.splice(t,0,c):this.steps.push(c);e&&this._collectorImpl&&this.
_collectorImpl.addProvider(i,e)},u.prototype.removeWizardStep=function(n){this._collectorImpl&&this.
_collectorImpl.removeProvider(n.stepId);this.steps.remove(n)},u.prototype.removeWizardStepAt=function(
n){return this._collectorImpl&&this._collectorImpl.removeProvider(this.steps()[n].stepId),this.steps.
splice(n,1)[0]},u.prototype._extractWizardRoles=function(n,t){var f=!!n&&n.parameterCollector,r=!!n&&
n.parameterProvider,u=!!n&&n.provisioner;this._editScopeImpl||(this._editScopeImpl=i.Internal.EditScopeFactory.
createEditScope(r,t));this._editScopeImpl.initializeEditScope();this._collectorImpl=i.Internal.ParameterCollectorFactory.
createParameterCollector(f,this._editScopeImpl,this.privateFcTpBI,t);this._providerImpl=i.Internal.ParameterProviderFactory.
createParameterProvider(r,this._editScopeImpl);u&&(this._provisionerImpl=i.Internal.ProvisionerFactory.
createProvisioner(u,this.privatePcPrBI))},u.prototype._onStepLoad=function(n){var i=this,t=Q.defer();
return this._editScopeImpl.fetchEditScope().then(function(){i._collectorImpl&&i._collectorImpl.sendInputsToProvider(
n.stepId);t.resolve()},function(){t.reject()}),t.promise},u.prototype._onStepComplete=function(n){return this.
_collectorImpl?this._collectorImpl.commitProviderOutputs(n.stepId):$.Deferred().resolve().promise()}
,u.prototype._onWizardComplete=function(){return null},u}(n.ViewModels.Controls.Wizard.ViewModel);i.
Wizard=r})(i=t.ParameterCollectionV2||(t.ParameterCollectionV2={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){var t;(function(
){"use strict"})(t=n.Roles||(n.Roles={}))})(t=n.ParameterCollectionV2||(n.ParameterCollectionV2={}))}
)(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var
t;(function(n){var t;(function(){"use strict"})(t=n.Roles||(n.Roles={}))})(t=n.ParameterCollectionV2||
(n.ParameterCollectionV2={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.Roles||(n.Roles={}))})
(t=n.ParameterCollectionV2||(n.ParameterCollectionV2={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){"use strict";var t=function(){function n(){this.assetType=
ko.observable();this.assetName=ko.observable();this.icon=ko.observable();this.assetId=ko.observable(
);this.status=ko.observable();this.state=ko.observable();this.size=ko.observable(1)}return n}();n.AssetPart=
t})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){"use strict";var i=function(i){function r(r){var u=
this;i.call(this,r);this.size=ko.observable(1);this.editButtonText=ko.observable(n.Resources.Strings.
Part.Chart.editButtonText);this._addDisposablesToCleanUp(this.size.subscribe(function(n){switch(n){case
2:case 1:case 3:u.interactionBehavior(t.Controls.Visualization.Chart.InteractionBehavior.ChartArea_Off|
t.Controls.Visualization.Chart.InteractionBehavior.XSlider_Off);break;default:u.interactionBehavior(
0)}}));this.size.notifySubscribers(this.size())}return __extends(r,i),r}(n.ViewModels.Controls.Visualization.
Chart.ViewModel);t.ChartPart=i})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";var r=3,u=9,f=14,e=20,o,i;(
function(n){n[n.None=0]="None";n[n.Data=1]="Data";n[n.Rollup=2]="Rollup"})(t.GridMode||(t.GridMode={
}));o=t.GridMode;i=function(){function t(t,i){var r=this,u;this.size=ko.observable(2);this.alwaysShowRollupCount=
ko.observable(!1);this.rollupCount=ko.observable();this.rollupCountIconUri=ko.observable();this.rollupCountIcon=
ko.observable();this.rollupCountLabel=ko.observable();this._options=null;this._container=null;this._container=
t;this._options=i;this.gridMode=ko.observable(0);this.hasMoreData=ko.observable(!1);u=i.selectableRowExtensionOptions?
n.ViewModels.Controls.Lists.Grid.Extensions.SelectableRow:null;this.grid=new n.ViewModels.Controls.Lists.
Grid.ViewModel(t,ko.observableArray([]),u,i.selectableRowExtensionOptions);this.grid.showHeader=!!i.
showHeader;this.grid.columns=ko.observableArray([]);t.registerForDispose(this.grid);this._options.noRowsMessage&&
t.registerForDispose(ko.computed(function(){r.grid.noRowsMessage?r.grid.noRowsMessage(r._options.noRowsMessage(
)):r.grid.noRowsMessage=ko.observable(r._options.noRowsMessage())}));this.selectableData=this.grid.selectableData;
this._reactToDataChange(this._options.data,function(n){return n===1});this._reactToDataChange(this._options.
rollupData,function(n){return n===2});this._reactToSizeChange();this.noRollupCount=ko.computed(function(
){return n.Base.Utilities.isNullOrUndefined(r.rollupCount())});t.registerForDispose(this.noRollupCount)}
return t.prototype._reactToDataChange=function(n,t){var i=this,r,u;n&&(r=n.items.subscribe(function(
){t(i.gridMode())&&i._updateGrid(n)}),u=ko.computed(function(){var r=n.columns();t(i.gridMode())&&i.
grid.columns(r)}),this._container.registerForDispose(r),this._container.registerForDispose(u))},t.prototype.
_reactToSizeChange=function(){var n=this,t=ko.computed(function(){var t=n.size();!n._isSizeForNoGrids(
t)&&(n._options.data||n._options.rollupData)?n._options.rollupData&&n._isSizeForRollupGrid(t)||n._options.
rollupData&&!n._options.data?n.gridMode(2):n._options.data&&n.gridMode(1):n.gridMode(0);switch(n.gridMode(
)){case 1:n._updateGrid(n._options.data);break;case 2:n._updateGrid(n._options.rollupData)}});this._container.
registerForDispose(t)},t.prototype._updateGrid=function(t){if(t){var i=t.items(),r=this.size(),f=n.Parts.
PartSizeHelper.isFixedSize(r),u=f?this._getMaxRows(r,this._options.showHeader,this.alwaysShowRollupCount(
)):i.length;this.hasMoreData(i.length>u);this.grid.items(i.slice(0,u))}},t.prototype._getMaxRows=function(
n,t,i){var o;switch(n){case 8:case 9:case 7:o=e;break;case 6:o=f;break;case 10:case 5:case 4:o=u;break
case 3:case 2:default:o=r}return o=t?o-1:o,i?o-1:o},t.prototype._isSizeForNoGrids=function(n){return n===
0||n===1},t.prototype._isSizeForRollupGrid=function(n){return n===2||n===3},t}();t.ViewModel=i})(i=t.
Collection||(t.Collection={}))})(i=t.Parts||(t.Parts={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){"use strict";var i=function(){function t(){this.resourceCount=
ko.observable(0);this.description=ko.observable("");this.icon=ko.observable(n.Base.Images.Shell.DefaultBlade(
));this.label=ko.observable("");this.size=ko.observable(2)}return t}();t.CollectionSummary=i})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(n){"use strict";var t=function(n){function t(){n.apply(this,arguments);
this.createName=ko.observable("")}return __extends(t,n),t}(n.ButtonPart);n.CreatePart=t})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(
n){function t(t){n.call(this,t,0,null,null);this.size=ko.observable(2)}return __extends(t,n),t}(n.ViewModels.
Controls.Documents.DiffEditor.ViewModel);t.ViewModel=i})(i=t.DiffEditor||(t.DiffEditor={}))})(i=t.Parts||
(t.Parts={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(
function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(){function t(t){this.groupInfos=
ko.observableArray([]);this.itemsDataArray=ko.observableArray([]);this.itemSetting=ko.observable();this.
valueInitialized=!1;this.resetItems=ko.observable(!0);this.total=ko.observable(null);this.startOffset=
ko.observable(-90);this.totalFormat=ko.observable("{0}");this.unitFormat=ko.observable("");this.infoFormat=
ko.observable("");this.hoverInfoFormat=ko.observable("{0} {1}{2}");this.selectedInfoFormat=ko.observable(
"{0}/{1}{2}");this.disableSelectOnClick=ko.observable(!1);this.showLegend=ko.observable(!0);this.size=
ko.observable(2);this.metrics=new n.ViewModels.Controls.Visualization.Metrics.ViewModel(t)}return t}
();t.ViewModel=i})(i=t.Donut||(t.Donut={}))})(i=t.Parts||(t.Parts={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";var i=function(n){function t(
t){n.call(this,t,0,null);this.size=ko.observable(2)}return __extends(t,n),t}(n.ViewModels.Controls.Documents.
Editor.ViewModel);t.ViewModel=i})(i=t.Editor||(t.Editor={}))})(i=t.Parts||(t.Parts={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){var
i;(function(t){"use strict";function i(n){return ko.isObservable(n)?n:ko.observable(n)}var r=function(
){function n(n,t){this.text=i(n);typeof t=="string"||ko.isObservable(t)&&typeof t()=="string"?this.uri=
i(t):this.bladeSelection=i(t)}return n}(),u;t.Link=r;u=function(){function t(t){this.sections=ko.observableArray(
);this.bladeLinks=ko.observableArray();this.selection=new n.ViewModels.SelectableSet(this.bladeLinks,
function(n,t){return n.bladeSelection().detailBlade===t.detailBlade},function(n){return n.bladeSelection(
)},t&&t.content&&t.content.selection)}return t.prototype.dispose=function(){this.selection.dispose()}
,t.prototype.addSection=function(n,t,u,f){var o=this,e;e=Array.isArray(u)?new r("",undefined):new r(
"",u);this.sections.push({title:i(n),description:i(t),selection:e,links:Array.isArray(u)?u:null,icon:
f});(Array.isArray(u)?u:[e]).forEach(function(n){n.bladeSelection&&o.bladeLinks.push(n)})},t}();t.ViewModel=
u})(i=t.InfoList||(t.InfoList={}))})(i=t.Parts||(t.Parts={}))})(t=n.ViewModels||(n.ViewModels={}))}(
MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict"})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";function r(n){return ko.isObservable(
n)?n:ko.observable(n)}var l=function(){function t(t){this._openBladeProperties=null;this.properties=
ko.observableArray([]);this._openBladeProperties=ko.observableArray([]);this.selection=new n.ViewModels.
SelectableSet(this._openBladeProperties,function(n,t){return n.bladeSelection().detailBlade===t.detailBlade}
,function(n){return n.bladeSelection()},t&&t.content&&t.content.selection)}return t.prototype.addProperty=
function(n){(this.properties.push(n),n.getType()===4)&&this._openBladeProperties.push(n)},t.prototype.
setProperties=function(n){var t=[];n.forEach(function(n){n.getType()===4&&t.push(n)});this.properties(
n);this._openBladeProperties(t)},t.prototype.removeAllProperties=function(){this.properties([]);this.
_openBladeProperties([])},t.prototype.dispose=function(){this.properties().forEach(function(n){n.dispose(
)});this.selection.dispose()},t}(),a,i,u,f,e,o,s,h,c;t.ViewModel=l,function(n){n[n.Text=0]="Text";n[
n.Link=1]="Link";n[n.CopyField=2]="CopyField";n[n.Callback=3]="Callback";n[n.OpenBlade=4]="OpenBlade";
n[n.MultiLinks=5]="MultiLinks";n[n.Image=6]="Image"}(t.PropertyType||(t.PropertyType={}));a=t.PropertyType;
i=function(){function n(n){this.label=n;this.type=this.getType();this.visible=ko.observable(!0);this.
wrappable=ko.observable(!1)}return n.prototype.getType=function(){throw new Error("Subclass needs to provide the property type.");
},n.prototype.dispose=function(){},n}();t.Property=i;u=function(n){function t(t,i){n.call(this,t);this.
value=r(i)}return __extends(t,n),t.prototype.getType=function(){return 0},t}(i);t.TextProperty=u;f=function(
n){function t(t,i,u){n.call(this,t);this.value=r(i);this.displayValue=!u?this.value:r(u)}return __extends(
t,n),t.prototype.getType=function(){return 1},t}(i);t.LinkProperty=f;e=function(t){function i(i,r,u)
{i&&i.createChildLifetime||(i=undefined,r=arguments[0],u=arguments[1]);t.call(this,r);this._valueResponder=
null;var f=new n.ViewModels.Controls.Forms.CopyableLabel.ViewModel(i);f.disabled(!0);this._valueResponder=
ko.computed(function(){var n=ko.utils.unwrapObservable(u);f.value(n)});this.value=f}return __extends(
i,t),i.prototype.getType=function(){return 2},i.prototype.dispose=function(){t.prototype.dispose.call(
this);this._valueResponder.dispose();this.value.dispose()},i}(i);t.CopyFieldProperty=e;o=function(n)
{function t(t,i,u,f){var e=this;n.call(this,t);this.displayValue=r(i);this.callback=u;this.icon=r(f);
this.callbackWrapper=function(){return e.callback(),!1}}return __extends(t,n),t.prototype.getType=function(
){return 3},t}(i);t.CallbackProperty=o;s=function(n){function t(t,i,u){n.call(this,t);this.displayValue=
r(i);this.bladeSelection=r(u)}return __extends(t,n),t.prototype.getType=function(){return 4},t}(i);t.
OpenBladeProperty=s;h=function(n){function t(t,i){n.call(this,t);this.links=i}return __extends(t,n),
t.prototype.getType=function(){return 5},t}(i);t.MultiLinksProperty=h;c=function(n){function t(t,i){
n.call(this,t);this.icon=r(i)}return __extends(t,n),t.prototype.getType=function(){return 6},t}(i);t.
ImageProperty=c})(i=t.Properties||(t.Properties={}))})(i=t.Parts||(t.Parts={}))})(t=n.ViewModels||(n.
ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.
constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new
r},function(n){var t;(function(t){var i;(function(t){"use strict";var i=n.Resources.Strings.Part.Provisioning.
description,r=function(t){function r(r,u,f){t.call(this,r,u,f!==!1,!0);this._partContainer=null;this.
title=ko.observable("");this.description=ko.observable(i);this.icon=ko.observable(n.Base.Images.Shell.
DefaultBlade());this.errorMessage=ko.observable();this._partContainer=r;this.icon=ko.observable(n.Base.
Images.Gear())}return __extends(r,t),r.prototype.onInputsSet=function(n){return t.prototype.onInputsSet.
call(this,n)},r.prototype.mutate=function(n){this._partContainer.mutate({containerModel:n})},r}(n.ViewModels.
ParameterCollection.BaseGalleryButtonPartViewModel);t.ContentViewModel=r})(i=t.ProvisioningPart||(t.
ProvisioningPart={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.
__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[
i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){"use strict";var i=function(
t){function i(){t.call(this);this.backgroundColor=0;this.title(n.Resources.Strings.Part.Quickstart.title);
this.icon(n.Base.Images.AzureQuickstart())}return __extends(i,t),i}(t.ButtonPart);t.QuickStartPart=i}
)(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var
t;(function(n){var t;(function(n){"use strict";(function(n){n[n.None=0]="None";n[n.CurrentValue=1]="CurrentValue";
n[n.GaugeBackground=2]="GaugeBackground";n[n.TotalValue=3]="TotalValue"})(n.MetricColorBarKind||(n.MetricColorBarKind=
{}));var i=n.MetricColorBarKind,t=function(){function n(){this.instance=ko.observable(0);this.total=
ko.observable(0);this.instanceQuota=ko.observable(100);this.totalQuota=ko.observable(100);this.unit=
ko.observable("");this.hideTotal=ko.observable(!1);this.hideQuota=ko.observable(!1);this.hideTick=ko.
observable(!1);this.maximum=ko.observable(100);this.startOffset=ko.observable(-90);this.totalArc=ko.
observable(355);this.captionDisplayFormat=ko.observable("{2}");this.valueDisplayFormat=ko.observable(
"{0}");this.metrics=ko.observableArray([]);this.size=ko.observable(2)}return n}();n.ViewModel=t})(t=
n.QuotaGauge||(n.QuotaGauge={}))})(t=n.Parts||(n.Parts={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(t){var i;(function(t){"use strict";var i=new n.Base.Diagnostics.Log("MsPortalFx/ViewModels/Parts/ViewModels.ResourceSummaryPart"),
r=function(t){function r(n,i,r){var u=this;t.call(this,n);this._partContainer=r;this._options=i;this.
_allowedPropertyTypes=[3,1,4,0];this._maxCountOfProperties=!this._options.noResourceGroup?9:10;this.
resourceGroupName=ko.observable();this.collapsed=ko.observable(!0);this.tagsVisible=ko.observable(!0);
this.hasQuickStart=ko.observable(!!this._options.getQuickStartSelection);this.hasKeys=ko.observable(
!!this._options.getKeysSelection);this.noResourceGroup=ko.observable(!!this._options.noResourceGroup);
this.noTags=ko.observable(!!this._options.noTags);this.noRbac=ko.observable(!!this._options.noRbac);
this.resourceGroupSelectable=this._createSelectable(n,"resourceGroupSelectable");this.quickStartSelectable=
this._createSelectable(n,"quickStartSelectable");this.settingsSelectable=this._createSelectable(n,"settingsSelectable");
this.accessSelectable=this._createSelectable(n,"accessSelectable");this.tagsSelectable=this._createSelectable(
n,"tagsSelectable");this.keysSelectable=this._createSelectable(n,"keysSelectable");r&&this.collapsed.
subscribe(r,function(n){u._updateDataLoading(r,n)})}return __extends(r,t),r.prototype.onInputsSet=function(
t,i){var r,u,f;return this._inputs=t,r=t.resourceId,this._options.noResourceGroup||(u=this._getResourceGroup(
r),u.success&&(this.resourceGroupName(u.resourceGroup),this.resourceGroupSelectable.selectedValue({extension:
n.Base.Constants.ExtensionNames.Hubs,assetType:"ResourceGroups",detailBladeInputs:{id:u.resourceGroupId}}))),
this._options.noRbac||this.accessSelectable.selectedValue({extension:"Microsoft_Azure_AD",detailBlade:
"UserAssignmentsBlade",detailBladeInputs:{scope:r}}),this._options.noTags||this.tagsSelectable.selectedValue(
{extension:n.Base.Constants.ExtensionNames.Hubs,detailBlade:"ResourceTagsListBlade",detailBladeInputs:
{resourceId:r}}),this.settingsSelectable.selectedValue(this._options.getSettingsSelection(t)),this._options.
getQuickStartSelection&&this.quickStartSelectable.selectedValue(this._options.getQuickStartSelection(
t)),this._options.getKeysSelection&&this.keysSelectable.selectedValue(this._options.getKeysSelection(
t)),f=this.collapsed.peek(),i&&i.content&&!n.Util.isNullOrUndefined(i.content.collapsed)?this.collapsed(
i.content.collapsed):this.collapsed(!!this._options.collapsed),this._partContainer&&f===this.collapsed.
peek()&&this._updateDataLoading(this._partContainer,this.collapsed.peek()),Q()},r.prototype.onExpanded=
function(){return Q()},r.prototype.addProperty=function(n){var r=this._maxCountOfProperties;this.properties.
peek().length>=r?i.error("Resource summary cannot have more than {0} properties".format(r)):this._allowedPropertyTypes.
indexOf(n.getType())<0?i.error("Only Callback, Link, OpenBlade and Text properties are allowed to added to resource summary."):
t.prototype.addProperty.call(this,n)},r.prototype._getResourceGroup=function(t){var f=n.ViewModels.Services.
ResourceTypes,r={resourceGroup:null,resourceGroupId:null,success:!1},u;try{u=f.parseResourceDescriptor(
t);r.resourceGroup=u.resourceGroup;r.resourceGroupId=f.buildResourceGroupIdFromResourceDescriptor(u);
r.success=!0}catch(e){i.error("It failed to get resource group name from the resource id '{0}'.".format(
t))}return r},r.prototype.setProperties=function(n){var f=this,r=this._maxCountOfProperties,u;n.length>
r&&i.error("Resource summary cannot have more than {0} properties".format(r));u=[];n.slice(0,r).forEach(
function(n){f._allowedPropertyTypes.indexOf(n.getType())<0?i.error("Only Callback, Link, OpenBlade and Text properties are allowed to added to resource summary."):
u.push(n)});t.prototype.setProperties.call(this,u)},r.prototype._createSelectable=function(t,i){return new
n.ViewModels.Selectable({isSelected:!!(t&&t[i]&&t[i].isSelected)})},r.prototype._updateDataLoading=function(
n,t){this._resetLoadingState(n);t||(this._loadingLifetimeManager=n.createChildLifetime(),this._loadingPromise=
this.onExpanded(this._loadingLifetimeManager,this._inputs),this._loadingPromise&&n.operations.add(this.
_loadingPromise,{blockUi:!0}))},r.prototype._resetLoadingState=function(n){this._loadingPromise&&(n.
operations.remove(this._loadingPromise),this._loadingPromise=null);this._loadingLifetimeManager&&(this.
_loadingLifetimeManager.dispose(),this._loadingLifetimeManager=null)},r}(n.ViewModels.Parts.Properties.
ViewModel);t.ViewModel=r})(i=t.ResourceSummary||(t.ResourceSummary={}))})(i=t.Parts||(t.Parts={}))})
(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));Texts=MsPortalFx.Resources.Strings,
function(n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";var r="aggregatedKeywords",
u={name:"UserAssignmentsBlade",extension:"Microsoft_Azure_AD"},f={name:"ResourceTagsListBlade",extension:
n.Base.Constants.ExtensionNames.Hubs},i=function(){function n(n,t,i,r){this.displayText=ko.observable(
"");this.icon=ko.observable();this.keywords=ko.observableArray();this.group=ko.observable(" ");this.
_key=n;this._detailBlade=t;this._detailBladeInputs=i;this._extension=r}return Object.defineProperty(
n.prototype,"key",{get:function(){return this._key},enumerable:!0,configurable:!0}),n.prototype.toSelection=
function(){return{key:this._key,detailBlade:this._detailBlade,detailBladeInputs:this._detailBladeInputs.
peek(),extension:this._extension}},n}(),e;t.Setting=i;e=function(){function t(t,i,r,u){var s=this;this.
resourceId=ko.observable();r=this._updateSettings(t,r,u);var f=n.ViewModels.Controls.Lists.Grid.Extensions.
SelectableRow|n.ViewModels.Controls.Lists.Grid.Extensions.Filterable,e=this._getExtensionsOptions(i),
o=u&&u.groupable;o&&(f|=n.ViewModels.Controls.Lists.Grid.Extensions.Groupable,e.groupable={groupKey:
ko.observable("group")});this.settingList=new n.ViewModels.Controls.Lists.Grid.ViewModel(t,ko.observableArray(
r),f,e);this.settingList.columns=ko.observableArray(this._getColumns(o));this.settingList.showHeader=
!1;r.forEach(function(n){s._augmentSettingForSearch(n,t)})}return t.prototype._getExtensionsOptions=
function(n){return{selectableRow:{selectionMode:1,itemMatchesSelection:function(n,t){return n.key===
t.key},createSelection:function(n){return n.toSelection()},activateOnSelected:ko.observable(!0),initialSelection:
n&&n.content&&n.content.settingList&&n.content.settingList.selectableData},filterable:{searchableColumns:
ko.observableArray([r]),searchBoxCloseButtonVisible:ko.observable(!1),searchBoxPlaceholder:ko.observable(
Texts.Part.SettingList.searchBoxPlaceholder)}}},t.prototype._getColumns=function(n){var i=this,t=[{itemKey:
"icon",template:"<div data-bind='image: value' style='height: 21px; width: 21px; padding: 0 0 0 2px;' alt='' />",
width:"34px"},{itemKey:"displayText",template:"<div data-bind='text: value' class='msportalfx-text-header-regular msportalfx-text-ellipsis'><\/div>"},
{itemKey:"",template:"<div data-bind='image: MsPortalFx.Base.Images.Shell.Chevron()' style='height: 18px; width: 10px; padding: 22px 0 17px 3px;' alt='' />",
width:"31px"}];return n&&t.unshift({itemKey:"__placeholder__",template:"",width:"1px"}),t.map(function(
n){return i._createColumn(n)})},t.prototype._createColumn=function(n){var t={itemKey:n.itemKey,format:
1e3,formatOptions:{htmlBindingsTemplate:n.template},filterableFormat:1e3,filterableFormatOptions:{htmlBindingsTemplate:
n.template}};return n.width&&(t.width=ko.observable(n.width)),t},t.prototype._updateSettings=function(
t,r,e){var a=this,h=r.slice(),c,l,o,s;return e&&(c=ko.observable(),l=ko.observable(),ko.computed(t,function(
){var n=a.resourceId();c({scope:n});l({resourceId:n})}),e.enableRbac&&(o=new i("__users",u.name,c,u.
extension),o.displayText(Texts.Part.SettingList.users),o.icon(n.Base.Images.PersonWithFriend(3)),o.group(
Texts.Part.SettingList.Group.resourceManagement),o.keywords([Texts.Part.SettingList.access]),h.push(
o)),e.enableTags&&(s=new i("__tags",f.name,l,f.extension),s.displayText(Texts.Part.SettingList.tags),
s.icon(n.Base.Images.Tag()),s.group(Texts.Part.SettingList.Group.resourceManagement),h.push(s))),h},
t.prototype._augmentSettingForSearch=function(n,t){var i=ko.computed(function(){return n.displayText(
)+" "+(n.keywords()||[]).join(" ")});n[r]=i;t.registerForDispose(i)},t}();t.ViewModel=e})(i=t.SettingList||
(t.SettingList={}))})(i=t.Parts||(t.Parts={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
i){"use strict";var u=n.Helpers,r=new n.Base.Diagnostics.Log("MsPortalFx/ViewModels/Parts/ViewModels.SetupPart"),
f=n.Services.Gallery.Constants.GalleryOptionsKey,e=function(i){function e(t,r){i.call(this,t,r,!1);this.
_setupPartContainer=null;this._previousCommit=null;this._outputs=null;this._setupPartContainer=t;this.
provisioningEntity={enableProvisioning:ko.observable(!0),privatePcPrBI:new n.ViewModels.ParameterCollection.
Internal.ProvisioningEntityBindingInternals}}return __extends(e,i),e.prototype.onInputsSet=function(
n){return this._loadContent(),i.prototype.onInputsSet.call(this,n)},e.prototype.mutateOnLoad=function(
){return null},e.prototype.mutate=function(n,t){this._setupPartContainer.mutate({partName:n,extensionName:
t})},e.prototype.onProviderCommit=function(n,t){return this._outputs=t,u.Deferred().resolve(!0).promise(
)},e.prototype._loadContent=function(){var n=this,i=this.mutateOnLoad(),t=function(){var t=n._commit.
subscribe(function(t){n._executeProvisioningIfApplicable(t)});n._setupPartContainer.registerForDispose(
t)};i?i.then(function(i){i?typeof i=="string"?n._setupPartContainer.mutate({partName:i}):n._setupPartContainer.
mutate(i):t()},function(){r.error("Extension's mutateOnLoad() function returned a promise that failed.");
t()}):t()},e.prototype._executeProvisioningIfApplicable=function(i){var u=this,e;if(this._outputs&&(
e=this._previousCommit,this._previousCommit=i,!n.Base.Utilities.deepEquals(e,i)&&t.ActionBars.Base.isCompleted(
this.stepOutput()))){this._setupPartContainer.selectable.isSelected(!1);this._setupPartContainer.contentState(
0);var c=new n.ViewModels.ParameterCollection.Internal.Provisioner(this.provisioningEntity),l=this._outputs,
o=this.privateFcTpBI.inputs().options,s=c.executeProvisioning(l,o);this._setupPartContainer.operations.
add(s,{blockUi:!0});var a=o[f].uiDefinition,h=a.markup.reference,v=h.partName,y=h.partExtension;s.then(
function(){u._setupPartContainer.mutate({partName:v,extensionName:y})},function(){r.error("executeProvisioning callback failed.");
u._setupPartContainer.contentState(3);u.beginExecuteCommand(!1)})}},e}(t.ProvisioningPart.ContentViewModel);
i.Content=e})(i=t.SetupPart||(t.SetupPart={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";(function(n){
n[n.None=0]="None";n[n.CurrentValue=1]="CurrentValue";n[n.GaugeBackground=2]="GaugeBackground"})(n.MetricColorBarKind||
(n.MetricColorBarKind={}));var i=n.MetricColorBarKind,t=function(){function n(){this.maximum=ko.observable(
100);this.current=ko.observable(0);this.unit=ko.observable("");this.metrics=ko.observableArray([]);this.
size=ko.observable(2)}return n}();n.ViewModel=t})(t=n.SingleValueGauge||(n.SingleValueGauge={}))})(t=
n.Parts||(n.Parts={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n)
{var t;(function(n){var t;(function(){"use strict"})(t=n.Internal||(n.Internal={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){"use strict";var i=n.
Base.Utilities.Internal.Serialization,r=function(){function t(n,t){if(this.defaultActionBarInput=ko.
observable({isLastStep:!0,allowToggleProvisioningLocation:!0,status:null}),this._configFromCollector=
ko.observable(),this._hasSentResult=!1,this._getResultSubscribers=[],!t.mapIncomingDataForEditScope==
!t.mapIncomingDataForEditScopeAsync)throw new Error("For ParameterProvider options, specify 'mapIncomingDataForEditScope' or 'mapIncomingDataForEditScopeAsync' (but not both).");
this._options=t;this._prepareEditScopeWithInitialData(n);this._setUpActionBarWatcher(n)}return Object.
defineProperty(t.prototype,"editScope",{get:function(){return this._editScopeView.editScope},enumerable:
!0,configurable:!0}),Object.defineProperty(t.prototype,"configFromCollector",{get:function(){return this.
_configFromCollector},enumerable:!0,configurable:!0}),t.prototype.getResultsBeforeCommit=function(n)
{var t=this._getResultSubscribers.some(function(t){return t===n});if(t)throw new Error("This subscriber has already subscribed to get the results before the provider commit.");
else this._getResultSubscribers.push(n)},t.prototype._prepareEditScopeWithInitialData=function(t){var
r=this,u,f;this.bladeCallable=new n.ViewModels.Internal.BladeCallable(t,{receiveParams:function(n){var
e=i.fromSerializableObject(n.initialData),t=n.providerConfig;t&&i.isSerializedObject(t)&&(t=i.fromSerializableObject(
t));r._configFromCollector(t);r._options.mapIncomingDataForEditScope?(f=r._options.mapIncomingDataForEditScope(
e),u=Q({})):u=r._options.mapIncomingDataForEditScopeAsync(e).then(function(n){f=n})}});this._editScopeCache=
n.Data.EditScopeCache.createNew({entityTypeName:this._options.editScopeMetadataType,supplyNewData:function(
){return f}});t.registerForDispose(this._editScopeCache);this._editScopeView=this._editScopeCache.createView(
t);t.onInputsSetCallbacks.add(function(n){return n.editScopeId&&n.editScopeId!==r._editScopeId?(r._editScopeId=
n.editScopeId,u.then(function(){return r._editScopeView.fetchForNewData(r._editScopeId)})):null})},t.
prototype._setUpActionBarWatcher=function(n){var t=this;n.onInputsSetCallbacks.add(function(n){var i=
n.internal_parameterProviderActionBarOutput;return i&&i.status===3&&(t._hasSentResult||(t._hasSentResult=
!0,t._discardEditScopeAndSendResult())),null})},t.prototype._discardEditScopeAndSendResult=function(
){var r=this._editScopeView.editScope&&this._editScopeView.editScope(),n,t,u;r&&(n=r.root,this._options.
commitResult&&this._options.commitResult(n),t=this._options.mapOutgoingDataForCollector(n),this.bladeCallable.
sendResult({resultData:i.toSerializableObject(t)}),this._getResultSubscribers.forEach(function(n){n.
receiveResult(t)}),u=this._editScopeCache,u.disposeAndDiscardEdits(this._editScopeId,this._editScopeView))}
,t}();t.ParameterProvider=r})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(t){"use strict";var i=function(){function t(t,i){var u=t.selectable,r=i.selectableSet?
null:i.selectable||u;if(!(r||i.selectableSet))throw new Error("Since the container is not a selectable part, you must supply a 'selectable' or 'selectableSet' option to the parameter collector constructor.");
if(i.selectable&&i.selectableSet)throw new Error("Do not specify both 'selectable' and 'selectableSet'.");
if(i.formFieldValueAccessor){if(i.receiveResult||i.supplyInitialData)throw new Error("Do not specify both 'formFieldValueAccessor' and either 'supplyInitialData' or 'receiveResult'.");
}else if(!i.receiveResult)throw new Error("Specify either a 'formFieldValueAccessor' or a 'receiveResult' callback.");
this.bladeCaller=new n.ViewModels.Internal.BladeCaller(t,{invokeOnSelectable:r,invokeOnSelectableSet:
i.selectableSet,supplyParams:function(t){var r=null,u;return i.supplyInitialData?r=i.supplyInitialData(
t):i.formFieldValueAccessor&&(u=i.formFieldValueAccessor.getEditableObservable(),r=u()),{initialData:
n.Base.Utilities.Internal.Serialization.toSerializableObject(r),providerConfig:i.supplyProviderConfig?
i.supplyProviderConfig(t):null}},receiveResult:function(t,r){var u=n.Base.Utilities.Internal.Serialization.
fromSerializableObject(t.resultData),f;i.receiveResult?i.receiveResult(u,r):(f=i.formFieldValueAccessor.
getEditableObservable(),f(u))}})}return t}();t.ParameterCollector=i})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={}));Rpc=MsPortalFx.Base.Rpc.Internal;RpcMethods=MsPortalFx.Internal.Constants.
RpcMethods,function(n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";function i(
i,r){return t.getProvisioningOperationEndPoint.acquireObject(r?r:n.Base.Rpc.Internal.client,n.Base.Constants.
Shell,i).then(function(n){var t=n&&n.getValue(),i;if(t)return i=t.provisioningPromise,i?(i.finally(function(
){n.dispose()}),Q.resolve(t)):(n.dispose(),Q.reject("The provisioning operation was invalid."))})}t.
initiateProvisioningRequestEndPoint=new Rpc.ProxiedObjectTypeDefinition(RpcMethods.initiateProvisioningRequest);
t.getProvisioningRequestEndPoint=new Rpc.ProxiedObjectTypeDefinition(RpcMethods.getProvisioningRequest);
t.getProvisioningOperationEndPoint=new Rpc.ProxiedObjectTypeDefinition(RpcMethods.getProvisioningOperation);
t.getProvisioningOperation=i})(i=t.ParameterCollectionV3||(t.ParameterCollectionV3={}))})(i=t.ViewModels||
(t.ViewModels={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;
(function(t){var i;(function(t){"use strict";var r=n.Internal.ViewModels.ParameterCollectionV3,u=function(
){function t(i,r){var u=this,f;this.provisioningConfig=ko.observable();this.provisionOnStartboard=ko.
observable(!1);this._validateProvisionerOptions(r);this._options=r;this._actionBar=this._options&&this.
_options.actionBar;this._provisionerId=n.Util.newGuid();t.provisionersList[this._provisionerId]=this;
r.parameterProvider&&(r.parameterProvider.getResultsBeforeCommit(this),f=function(t){t&&t.provisioningConfig&&
(u.provisioningConfig(n.Base.Utilities.clone(t.provisioningConfig)),u._actionBar&&typeof u._actionBar.
isProvisioningBlade=="function"&&u._actionBar.isProvisioningBlade(t.provisioningConfig.provisioningEnabled))}
,f(this._options.parameterProvider.configFromCollector()),this._options.parameterProvider.configFromCollector.
subscribe(i,f));t._registerRpcCallbacks()}return t.prototype.dispose=function(){delete t.provisionersList[
this._provisionerId]},t.prototype.startProvisioning=function(n){if(this._actionBar)throw new Error("Cannot start provisioning. This provisioner has been configured to start provisioning automatically when the action bar is clicked.");
var t=this._options.supplyStartboardInfo(n);if(typeof this._options.supplyStartboardInfo!="function")
throw new Error("Cannot start provisioning. The 'supplyStartboardInfo' method is required for manually triggered provisioning.");
if(t&&!i.isValid(t))throw new Error("Cannot start provisioning. Invalid startboard info.");return this.
_initiateProvisioningRequest(n,t)},t.prototype.receiveResult=function(n){var t=this.provisioningConfig(
);t&&t.provisioningEnabled&&this._beginProvisioning(n)},t.prototype._beginProvisioning=function(n){var
t,r=this._actionBar&&this._actionBar.provisionOnStartboardPart(),u;if(this.provisionOnStartboard(r),
r&&(t=this.provisioningConfig().startboardProvisioningInfo,u=this._options.supplyStartboardInfo(n),t=
u||t,!i.isValid(t)))throw new Error("Cannot start provisioning. User requests provisioning to happen on the startboard and no valid startboard info was specified by the provisioner.");
return this._initiateProvisioningRequest(n,t)},t.prototype._initiateProvisioningRequest=function(i,u)
{var e=this._options.supplyProvisioningPromise(i),f,o;if(e){if(f=n.Util.newGuid(),o={originalProvisioningData:
i,provisioningConfig:this.provisioningConfig(),provisioningRefKey:f,provisioningPromise:e,startboardInfo:
u},t.provisioningRequestsLookup[f])throw new Error("A provisioning request already exists with the same reference key.");
t.provisioningRequestsLookup[f]=o;r.initiateProvisioningRequestEndPoint.acquireObject(t.rpcClient,n.
Base.Constants.Shell,{provisionerId:this._provisionerId,provisioningRefKey:f}).then(function(n){var t=
n.getValue();if(t.provisioningRefKey!==f)throw new Error("Provisioning reference key didn't match.");
n.dispose()},function(n){throw new Error(n);})}return e},t.prototype._validateProvisionerOptions=function(
n){if(!n)throw new Error("Provisioner options are null or undefined.");if(typeof n.supplyProvisioningPromise!=
"function")throw new Error("Provisioner options is missing the 'supplyProvisioningPromise' method implementation.");
if(typeof n.supplyStartboardInfo!="function")throw new Error("Provisioner options is missing the 'supplyStartboardInfo' method implementation.");
if(n.actionBar?!n.parameterProvider:!!n.parameterProvider)throw new Error("A parameter provider and an action bar should either both be defined, or neither.");
},t._registerRpcCallbacks=function(){t._rpcOjectFactoryRegistered||(r.getProvisioningRequestEndPoint.
registerObjectFactory(t.rpcClient,{allowedOrigin:[n.Base.Constants.Shell],allowRemoteChanges:!0,handler:
function(n){var i,r;if(!n.provisionerId)throw new Error("Cannot return a provisioning request. The 'provisionerId' was not specified.");
if(i=t.provisionersList[n.provisionerId],i)return r=i.getProvisioningRequest(n.provisioningRefKey),Q.
resolve(r);throw new Error("Could not find a provisioner with the id '{0}'.".format(n.provisionerId));
}}),t._rpcOjectFactoryRegistered=!0)},t.prototype.getProvisioningRequest=function(n){if(!n)throw new
Error("Cannot return a provisioning request. The 'provisioningRefKey' was not specified.");var i=t.provisioningRequestsLookup[
n];if(!i)throw new Error("Cannot return a provisioning request. No request corresponds to 'provisioningRefKey': '{0}'.".
format(n));return i.provisioningPromise&&i.provisioningPromise.finally(function(){delete t.provisioningRequestsLookup[
n]}),i},t.rpcClient=Rpc.client,t.provisioningRequestsLookup={},t.provisionersList={},t._rpcOjectFactoryRegistered=
!1,t}(),i;t.Provisioner=u;i=function(){function n(){}return n.isValid=function(n){return!!n&&!!n.provisioningPart&&
!!n.provisioningPart.name&&!!n.provisioningPart.extension&&!!n.startboardPart&&!!n.startboardPart.name&&
!!n.startboardPart.extension&&!!n.startboardPartKeyId},n}();t.StartboardInfo=i})(i=t.ParameterCollectionV3||
(t.ParameterCollectionV3={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(t)
{"use strict";var i=n.Internal.ViewModels.ParameterCollectionV3,r=function(t){function r(i,r){var u=
this;t.call(this);this.description=ko.observable("");this.errorMessage=ko.observable();this.icon=ko.
observable(n.Base.Images.Shell.DefaultBlade());this.initialData=ko.observable();this.provisioningPromise=
ko.observable();this.provisioningStarted=ko.observable(!1);this.statusUnknown=ko.observable(!1);this.
title=ko.observable("");this._provisioningConfig=ko.observable();i.selectable=n.ViewModels.Part.createSelectableViewModel(
r);this._container=i;this.icon=ko.observable(n.Base.Images.Gear());this.provisioningPromise.subscribe(
i,function(n){n&&n.then(function(n){var t=u.initialData(),i,r;if(!t||!t.startboardPart){u.errorMessage(
"Could not mutate into target part");throw new Error("Initial data were not persisted correctly to the part's view state. Make sure the 'initialData' property is added to your Part.ViewStateProperties in your PDL.");
}i=t.startboardPart;r={partName:i.name,extensionName:i.extension,containerModel:n};u._container.mutate(
r)},function(n){u.errorMessage(n);throw new Error(n);})})}return __extends(r,t),Object.defineProperty(
r.prototype,"provisioningConfig",{get:function(){if(!this._provisioningConfig()){var t=this.initialData(
);this._provisioningConfig(n.Base.Utilities.clone(t&&t.provisioningConfig))}return this._provisioningConfig(
)},set:function(t){this._provisioningConfig(n.Base.Utilities.clone(t))},enumerable:!0,configurable:!0}),
r.prototype.onInputsSet=function(n){return n&&n.initialData&&(this.initialData(n.initialData),this.provisioningPromise(
)||(this.provisioningStarted(!0),this._fetchProvisioningPromise())),null},r.prototype._fetchProvisioningPromise=
function(){var n=this,t=this.initialData().provisioningRefKey;!t||i.getProvisioningOperation(t).then(
function(t){var i=t.provisioningPromise;n.provisioningPromise(i)},function(t){n.statusUnknown(!0);throw new
Error(t);})},r}(n.ViewModels.ButtonPart);t.ProvisioningPart=r})(i=t.ParameterCollectionV3||(t.ParameterCollectionV3=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(t){var i;(function(t){"use strict";
var i=n.ViewModels.Controls.Lists.Grid,r=function(t){function r(i,r,u){var f=this,e;if(t.call(this,i),
this.showSelectButton=ko.observable(!1),this.triggerSelectAction=ko.observable(""),this.showInfoBox=
ko.observable(!1),this._pickerOptions=ko.observable(""),this._basicTemplate="<div style='height: 40px; margin-top: 10px'><!-- ko if: settings.item.icon --><div style='width: 30px; height: 30px; float: left; margin-right: 10px' data-bind='image: settings.item.icon'><\/div><!-- /ko --><div><div><div data-bind='text: value()' class='msportalfx-text-header-regular msportalfx-text-ellipsis msportalfx-tooltip-overflow'><\/div><\/div><div><!-- ko if: settings.item.subtitle --><div class='msportalfx-text-regular msportalfx-text-muted-50 msportalfx-text-ellipsis msportalfx-tooltip-overflow' data-bind='text: settings.item.subtitle' style='max-width: 60%; float: left'><\/div><!-- /ko --><!-- ko if: settings.item.detail --><div class='msportalfx-text-regular msportalfx-text-muted-50 msportalfx-text-ellipsis msportalfx-tooltip-overflow' style='float: right' data-bind='text: settings.item.detail'><\/div><!-- /ko --><\/div><\/div><\/div>",
!u.dataNavigator==!u.items)throw new Error("For PickerBase options, specify 'dataNavigator' or 'items' (but not both).");
e=u.createNewOptions;this.showCreateAction=ko.observable(e&&!!e.title&&!!e.dynamicBladeSelection);this.
_buildAddNewGrid(i,e);this._buildPickerGrid(i,u);this.pickerGrid.selectableData.selectedItems.subscribe(
i,function(t){if(t&&t.length>0){f.addNewGrid&&f.addNewGrid.selectableData&&f.addNewGrid.selectableData.
selectedItems&&f.addNewGrid.selectableData.selectedItems([]);var i=u.mapItemsToDataModel(t);f.dataModel&&
!n.Base.Utilities.deepEquals(f.dataModel(),i)&&f._saveToEditScope(i)}});this.pickerGrid.items.subscribeArrayAdds(
i,function(n){n.disabled&&n.disabled()?f._disableGridItem(n):f.dataModel&&u.isItemInDataModel(n,f.dataModel(
))&&f._selectGridItem(n)});this.parameterProvider=new n.ViewModels.ParameterProvider(i,{mapIncomingDataForEditScope:
function(n){return{pickedItems:ko.observable(u.mapIncomingDataToDataModel(n))}},mapOutgoingDataForCollector:
function(n){return n.pickedItems()}});this.addNewItemCollector=new n.ViewModels.ParameterCollector(i,
{supplyInitialData:function(){return e&&e.supplyInitialData?e.supplyInitialData():{}},receiveResult:
function(n){e&&e.receiveResults&&e.receiveResults(n);f._saveToEditScope(n)},supplyProviderConfig:function(
){return e&&e.supplyProviderConfig()?e.supplyProviderConfig():null},selectableSet:this.addNewGrid.selectableData});
this.addNewGrid.selectableData&&this.addNewGrid.selectableData.selectedItems&&this.addNewGrid.selectableData.
selectedItems.subscribe(i,function(n){n&&n.length>0&&f.pickerGrid.selectableData.selectedItems([])});
ko.computed(i,function(){if(f.parameterProvider.editScope()){var n=f.parameterProvider.configFromCollector(
);u.loadPickerItems(n||{})}}).extend({throttle:50})}return __extends(r,t),r.prototype._saveToEditScope=
function(t){this.dataModel(t);this.showSelectButton()||this.triggerSelectAction(n.Util.newGuid())},r.
prototype._buildPickerGrid=function(t,r){var u=[{name:ko.observable(""),itemKey:"title",format:1e3,formatOptions:
{htmlBindingsTemplate:this._basicTemplate}},{itemKey:"infoBalloon",format:1e3,width:ko.observable("35px"),
formatOptions:{htmlBindingsTemplate:"<!-- ko if: value --><div data-bind='pcDockedBalloon:value'><\/div><!-- /ko -->"}}];
this.pickerGrid=r.dataNavigator?new i.ViewModel(t,null,i.Extensions.SelectableRow|i.Extensions.Pageable,
{selectableRow:{selectionMode:1,selectionStyle:1},pageable:{type:0,dataNavigator:r.dataNavigator}}):
new i.ViewModel(t,r.items,i.Extensions.SelectableRow,{selectableRow:{selectionMode:1,selectionStyle:
1}});this.pickerGrid.columns=ko.observableArray(u);this.pickerGrid.showHeader=!1;this.pickerGrid.noRowsMessage(
n.Resources.Strings.ViewModels.Controls.noRowsMessage)},r.prototype._buildAddNewGrid=function(t,r){var
u,f={activateOnSelected:ko.observable(!0),selectionMode:1,selectionStyle:0},e=ko.observableArray([]);
!r||!r.title||!r.dynamicBladeSelection||(u=[{name:ko.observable(""),itemKey:"title",format:1e3,formatOptions:
{htmlBindingsTemplate:this._basicTemplate}}],e([{title:ko.observable(r.title),icon:ko.observable(n.Base.
Images.Add()),item:null}]),f=n.Base.Utilities.extend(f,{itemMatchesSelection:function(){return!0},createSelection:
function(){return r.dynamicBladeSelection}}));this.addNewGrid=new i.ViewModel(t,e,i.Extensions.SelectableRow,
{selectableRow:f});u&&(this.addNewGrid.columns=ko.observableArray(u));this.addNewGrid.showHeader=!1}
,Object.defineProperty(r.prototype,"dataModel",{get:function(){var n=this.parameterProvider.editScope(
);return n&&n.root&&n.root.pickedItems},enumerable:!0,configurable:!0}),r.prototype._selectGridItem=
function(t){if(t){var i=this.pickerGrid.getRowMetadata(t);i?i.selected()||i.selected(!0):n.Base.Diagnostics.
Log.writeEntry(1,"Pickers","Metadata for grid item is null. Unable to set selected flag.")}},r.prototype.
_disableGridItem=function(t){if(t){var i=this.pickerGrid.getRowMetadata(t);i?(i.disabled(!0),i.selected(
)&&i.selected(!1)):n.Base.Diagnostics.Log.writeEntry(1,"Pickers","Metadata for grid item is null. Unable to set disabled flag.")}
},r}(n.ViewModels.Controls.Loadable.ViewModel);t.PickerBase=r})(i=t.Pickers||(t.Pickers={}))})(i=t.ParameterCollectionV3||
(t.ParameterCollectionV3={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(t){"use strict";function i(t){return n.Services.Rpc.invokeCallback(n.Base.Constants.
ExtensionNames.Hubs,"getSubscriptionInfo",t)}t.getSubscriptionInfo=i})(t=n.Azure||(n.Azure={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";var t;(function(n){(
function(n){n[n.NotSet=0]="NotSet";n[n.Allowed=1]="Allowed";n[n.NotAllowed=2]="NotAllowed"})(n.GalleryItemAccess||
(n.GalleryItemAccess={}));var t=n.GalleryItemAccess})(t=n.Internal||(n.Internal={}))})(t=n.ResourceManager||
(n.ResourceManager={}))})(t=n.Azure||(n.Azure={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(
function(t){var i;(function(t){var i;(function(t){"use strict";function r(t,r){var u=Q.defer();return t.
acquireObject(i.azureResrouceManagerDeployTemplate,n.Base.Constants.ExtensionNames.Hubs,r).then(function(
n){var t=ko.utils.unwrapObservable(n&&n.getValue());if(t)t.progress(function(n){u.notify(n)}).then(function(
n){u.resolve(n)},function(n){u.reject(n)}).finally(function(){n.dispose()});else throw new Error("DeploymentManager.deployTemplate did not return a valid response.");
}),u.promise}function u(t,r){var u=Q.defer();return t.acquireObject(i.azureResrouceManagerPollForDeployment,
n.Base.Constants.ExtensionNames.Hubs,r).then(function(n){var t=ko.utils.unwrapObservable(n&&n.getValue(
));if(t)t.progress(function(n){u.notify(n)}).then(function(n){u.resolve(n)},function(n){u.reject(n)}
).finally(function(){n.dispose()});else throw new Error("DeploymentManager.deployTemplate did not return a valid response.");
}),u.promise}var i=n.Internal.Constants.RpcMethods;t.deployTemplate=r;t.pollForDeployment=u})(i=t.ResourceManager||
(t.ResourceManager={}))})(i=t.Azure||(t.Azure={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(t){var i;(function(t){"use strict";function f(n){return i.deployTemplate(
r.client,n)}function e(n){return i.pollForDeployment(r.client,n)}var i=n.Internal.Azure.ResourceManager,
r=n.Base.Rpc.Internal,u;(function(n){n[n.RequestDeploymentOnly=1]="RequestDeploymentOnly";n[n.DeployAndAwaitCompletion=
2]="DeployAndAwaitCompletion";n[n.DeployAndGetAllOperations=3]="DeployAndGetAllOperations"})(t.TemplateDeploymentMode||
(t.TemplateDeploymentMode={}));u=t.TemplateDeploymentMode;t.deployTemplate=f;t.pollForDeployment=e})
(i=t.ResourceManager||(t.ResourceManager={}))})(t=n.Azure||(n.Azure={}))}(MsPortalFx||(MsPortalFx={})
),function(n){var t;(function(n){var t;(function(n){var t;(function(n){var t;(function(){"use strict"}
)(t=n.Location||(n.Location={}))})(t=n.Pickers||(n.Pickers={}))})(t=n.ResourceManager||(n.ResourceManager=
{}))})(t=n.Azure||(n.Azure={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(
function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.ResourceGroup||(n.ResourceGroup=
{}))})(t=n.Pickers||(n.Pickers={}))})(t=n.ResourceManager||(n.ResourceManager={}))})(t=n.Azure||(n.Azure=
{}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(
n){var t;(function(t){var i;(function(t){"use strict";var r=n.ViewModels.ParameterCollectionV3,u=n.Azure.
ResourceManager,i=function(t){function i(n,i){var r=this;this._validateArmProvisionerOptions(i);t.call(
this,n,{supplyProvisioningPromise:function(n){return r._supplyProvisioningPromise(n)},supplyStartboardInfo:
function(n){return r._supplyStartboardInfo(n)},actionBar:i.actionBar,parameterProvider:i.parameterProvider});
this._armOptions=i}return __extends(i,t),Object.defineProperty(i.prototype,"armProvisioningConfig",{
get:function(){return this.provisioningConfig()},enumerable:!0,configurable:!0}),i.prototype.startProvisioning=
function(i){if(typeof this._armOptions.supplyGalleryCreateOptions!="function")throw new Error("Cannot start provisioning. The 'supplyGalleryCreateOptions' callback implementation is required when manually starting provisioning.");
var r=this._armOptions.supplyGalleryCreateOptions(),u=n.Base.Utilities.clone(this.provisioningConfig(
));if(r&&r.galleryItem&&!!r.galleryItem.itemDisplayName)u||(u={}),n.Base.Utilities.extend(u,{galleryCreateOptions:
r}),this.provisioningConfig(u);else throw new Error("Invalid gallery create config options returned by the 'supplyGalleryCreateOptions' callback.");
return t.prototype.startProvisioning.call(this,i)},i.prototype._deployTemplate=function(n){return u.
deployTemplate(n)},i.prototype._supplyProvisioningPromise=function(t){var i=this;return this._armOptions.
supplyTemplateDeploymentOptions(t).then(function(r){var u=i.provisionOnStartboard();if(u&&!r.resourceId)
throw new Error("The template deployment options are missing the resource id, which is required because provisioning will happen on the startboard.");
return n.Base.Utilities.extend(r,{deploymentMode:2}),i._deployTemplate(r).then(function(n){if(u){var
f=i._getStartboardPartInputs(t,r);return Q.resolve(f)}return Q.resolve(n)})})},i.prototype._supplyStartboardInfo=
function(n){return typeof this._armOptions.supplyStartboardInfo=="function"?this._armOptions.supplyStartboardInfo(
n):undefined},i.prototype._validateArmProvisionerOptions=function(n){if(!n)throw new Error("Arm provisioner options are null or undefined.");
if(typeof n.supplyTemplateDeploymentOptions!="function")throw new Error("Arm provisioner options is missing the 'supplyTemplateDeploymentOptions' method implementation.");
},i.prototype._getStartboardPartInputs=function(n,t){var r={},i=this.provisioningConfig().startboardProvisioningInfo,
u;return typeof this._armOptions.supplyStartboardInfo=="function"&&(u=this._armOptions.supplyStartboardInfo(
n),i=u||i),r[i.startboardPartKeyId]=t.resourceId,r},i}(r.Provisioner);t.Provisioner=i,function(n){n.
azureResourceManagerProvisioningPart={name:"AzureResourceManagerProvisioningPart",extension:"HubsExtension"}}
(i=t.Provisioner||(t.Provisioner={}))})(i=t.ResourceManager||(t.ResourceManager={}))})(t=n.Azure||(n.
Azure={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){var i;(function(
t){"use strict";var e=function(){function t(){var n=this;this.initialized=ko.observable(!1);this.results=
ko.observableArray();this.canceled=ko.observable(!1);this._dataSubscription=null;this._canceledSubscription=
this.canceled.subscribe(function(t){t&&(n.results([]),n._dataSubscription&&(n._dataSubscription.dispose(
),n._dataSubscription=null))})}return t.prototype.dispose=function(){this._canceledSubscription&&(this.
_canceledSubscription.dispose(),this._canceledSubscription=null);this._dataSubscription&&(this._dataSubscription.
dispose(),this._dataSubscription=null)},t.prototype.onInputsSet=function(){return this._dataSubscription&&
(this._dataSubscription.dispose(),this._dataSubscription=null),this.initialized(!1),this.canceled(!1),
this.results([]),null},t.prototype.connectDataSource=function(t,i){this._dataSubscription=n.Services.
DataSetAssetExpansionMapper.connectDataSet(t,this.results,i);this.initialized(!0)},t}(),i,r,u,f;t.Service=
e;i=function(){function n(){}return n.serialize=function(n,t,i){t===void 0&&(t=!1);i===void 0&&(i=null);
var r={version:1,browseCriteria:n,newBrowse:t,useBrowseKey:i};return JSON.stringify(r)},n.deserialize=
function(n){var t=JSON.parse(n);if(!t.version||t.version>1)throw new Error("The saved browse was saved with a newer version than this deserializer supports.");
return{browseCriteria:t.browseCriteria,newBrowse:t.newBrowse,useBrowseKey:t.useBrowseKey}},n}();t.BrowseSerializer=
i;r=function(){function n(n,t){this.initialized=ko.observable();this.results=ko.observableArray();this.
_browseCriteria=null;this.initialized(!1);this._browseCriteria=n;this.results(t)}return Object.defineProperty(
n.prototype,"browseCriteria",{get:function(){return this._browseCriteria},enumerable:!0,configurable:
!0}),n}();t.ResultsViewModel=r;u=function(){function n(n){this.navigator=n}return n}();t.VirtualizedService=
u;f=function(){function n(n,t){this._browseCriteria=null;this._browseCriteria=n;this.navigator=t}return Object.
defineProperty(n.prototype,"browseCriteria",{get:function(){return this._browseCriteria},enumerable:
!0,configurable:!0}),n}();t.VirtualizedResultsViewModel=f})(i=t.Browse||(t.Browse={}))})(i=t.Services||
(t.Services={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;
(function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.Diagnostics||(n.Diagnostics={})
)})(t=n.Services||(n.Services={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})
),function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";function i(n,t,i,
r){var u=Q.defer(),f=function(){u.resolve({extension:i,assetType:r,detailBladeInputs:{id:t}})},o=function(
){n.bladeName()?u.resolve({extension:n.extensionName()||i,detailBlade:n.bladeName(),detailBladeInputs:
{id:t}}):f()},e;return n?(typeof n.onInputsSet=="function"?e=n.onInputsSet({assetId:t,usage:0}):f(),
e?e.then(function(){o()},function(){u.reject(null)}):o()):f(),u.promise}(function(n){n[n.DynamicAssetSelection=
0]="DynamicAssetSelection"})(n.Usage||(n.Usage={}));var r=n.Usage,t=function(){function n(){this.extensionName=
ko.observable(null);this.bladeName=ko.observable(null)}return n}();n.Service=t;n.prepareDynamicSelection=
i})(t=n.DynamicBlade||(n.DynamicBlade={}))})(t=n.Services||(n.Services={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){var i;(function(
t){"use strict";var i=n.Resources.Strings.Services.AssetHandler,u=function(){function t(){}return Object.
defineProperty(t,"base",{get:function(){return[{id:"title",name:ko.observable(i.titleGridColumn),itemKey:
n.Services.AssetExpansion.titlePropertyName},{id:"assetType",name:ko.observable(i.assetTypeGridColumn),
itemKey:n.Services.AssetExpansion.assetTypeStringPropertyName}]},enumerable:!0,configurable:!0}),t}(
),f,r;t.BaseColumns=u,function(n){n[n.Default=0]="Default"}(t.Usage||(t.Usage={}));f=t.Usage;r=function(
){function n(){this.includeAssetIcon=ko.observable(!0);this.columns=ko.observable([])}return n}();t.
Service=r})(i=t.GridColumns||(t.GridColumns={}))})(i=t.Services||(t.Services={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){var
t;(function(n){"use strict";var t=function(){function n(){this.properties=ko.observableArray()}return n.
prototype.setProperty=function(n,t){var i=this.properties().some(function(i){return i.property===n?(
i.value=t,!0):!1});i||this.properties.push({property:n,value:t})},n}();n.Service=t})(t=n.PropertyProvider||
(n.PropertyProvider={}))})(t=n.Services||(n.Services={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";function k(
n){if(!n||typeof n!="string")return!1;var i=n.split("/");return i.length!==5?!1:i[0].length!==0?!1:i[
1].toLowerCase()!=="subscriptions"?!1:t(i[2])?i[3].toLowerCase()!=="resourcegroups"?!1:t(i[4]):!1}function c(
n){if(!n)throw new Error("Invalid resource group ID, ID is null or empty.");if(typeof n!="string")throw new
Error("Invalid resource group ID, ID is not a string.");var u=new r,i=n.split("/");if(i.length!==5)throw new
Error("Invalid resource group ID, not enough segments.");if(i[0].length!==0)throw new Error("Invalid resource group ID, first segment must be empty.");
if(i[1].toLowerCase()!=="subscriptions")throw new Error("Invalid resource group ID, second segment must be 'subscriptions'.");
if(!t(i[2]))throw new Error("Invalid resource ID, subscription segment has an invalid subscription id.");
if(i[3].toLowerCase()!=="resourcegroups")throw new Error("Invalid resource group ID, fourth segment must be 'resourcegroups'.");
if(!t(i[4]))throw new Error("Invalid resource ID, resource group segment has an invalid resource group id.");
return u.subscription=i[2],u.resourceGroup=i[4],u}function d(n){if(!n||typeof n!="string")return!1;var
i=n.split("/");return i.length<9?!1:i.length%2!=1?!1:i[0].length!==0?!1:i[1].toLowerCase()!=="subscriptions"?
!1:t(i[2])?i[3].toLowerCase()!=="resourcegroups"?!1:t(i[4])?i[5].toLowerCase()!=="providers"?!1:t(i[
6])?!0:!1:!1:!1}function i(n){var r,i,e,f;if(!n)throw new Error("Invalid resource ID, ID is null or empty.");
if(typeof n!="string")throw new Error("Invalid resource ID, ID is not a string.");if(r=new u,i=n.split(
"/"),i.length<9)throw new Error("Invalid resource ID, not enough segments.");if(i.length%2!=1)throw new
Error("Invalid resource ID, invalid number of segments.");if(i[0].length!==0)throw new Error("Invalid resource ID, first segment must be empty.");
if(i[1].toLowerCase()!=="subscriptions")throw new Error("Invalid resource ID, second segment must be 'subscriptions'.");
if(!t(i[2]))throw new Error("Invalid resource ID, subscription segment has an invalid subscription id.");
if(i[3].toLowerCase()!=="resourcegroups")throw new Error("Invalid resource ID, fourth segment must be 'resourcegroups'.");
if(!t(i[4]))throw new Error("Invalid resource ID, resource group segment has an invalid resource group id.");
if(i[5].toLowerCase()!=="providers")throw new Error("Invalid resource ID, sixth segment must be 'providers'.");
if(!t(i[6]))throw new Error("Invalid resource ID, provider segment has an invalid provider id.");for(
r.subscription=i[2],r.resourceGroup=i[4],r.provider=i[6],e=r.provider,f=7;f<i.length;f+=2)r.type=i[f],
r.resource=i[f+1],r.types.push(r.type),r.resources.push(r.resource),e+="/"+r.type,r.resourceMap[e]=r.
resource;return r}function g(n){if(!n||typeof n!="string")return!1;var i=n.split("/");return i.length!==
3?!1:i[0].length!==0?!1:i[1].toLowerCase()!=="subscriptions"?!1:t(i[2])}function nt(n){return f(n.subscription,
n.resourceGroup)}function l(n){return f(n.subscription,n.resourceGroup)}function f(n,t){return"/subscriptions/{0}/resourcegroups/{1}".
format(n,t)}function tt(n){return a(i(n))}function a(n){for(var i=n.provider,t=0;t<n.types.length;t++)
i=i+"/"+n.types[t];return i}function v(n){for(var i="/subscriptions/{0}/resourcegroups/{1}/providers/{2}".
format(n.subscription,n.resourceGroup,n.provider),t=0;t<n.types.length;t++)i=i+"/{0}/{1}".format(n.types[
t],n.resources[t]);return i}function it(n){if(n.types.length<2)throw new Error("The resource descriptor is not for a nested resource.");
for(var i="/subscriptions/{0}/resourcegroups/{1}/providers/{2}".format(n.subscription,n.resourceGroup,
n.provider),t=0;t<n.types.length-1;t++)i=i+"/{0}/{1}".format(n.types[t],n.resources[t]);return i}function rt(
t){return e(n.relatedTagPrefix,i(t))}function ut(t){return e(n.linkTagPrefix,i(t))}function e(n,t){return"{0}:{1}".
format(n,v(t))}function o(n){var t=c(n);return n.toLowerCase()}function y(n,t){return!n&&!t?!0:!n||!t?
!1:o(n)===o(t)}function s(n){var t=i(n);return n.toLowerCase()}function ft(n,t){return!n&&!t?!0:!n||
!t?!1:s(n)===s(t)}function et(n,t){return!n||!t?!1:y(n,l(i(t)))}function t(n){return!n||typeof n!="string"?
!1:(n=n.trim(),!n)?!1:!w.some(function(t){return n.indexOf(t)>=0})}var w=["{","}"],h,b,r,u,p;n.relatedTagPrefix=
"hidden-related";n.linkTagPrefix="hidden-link";h=function(){function n(){this.name=ko.observable();this.
description=ko.observable();this.descriptionUri=ko.observable();this.status=ko.observable();this.statusMessage=
ko.observable()}return n}();n.Service=h,function(n){n[n.Failure=0]="Failure";n[n.DataNotAvailable=1]=
"DataNotAvailable";n[n.AccessDenied=2]="AccessDenied"}(n.MappingRejectionReason||(n.MappingRejectionReason=
{}));b=n.MappingRejectionReason;r=function(){function n(){}return n}();n.ResourceGroupDescriptor=r;u=
function(){function n(){this.types=[];this.resources=[];this.resourceMap={}}return n}();n.ResourceDescriptor=
u;n.isResourceGroupId=k;n.parseResourceGroupDescriptor=c;n.isResourceId=d;n.parseResourceDescriptor=
i;n.isSubscriptionId=g;n.buildResourceGroupIdFromDescriptor=nt;n.buildResourceGroupIdFromResourceDescriptor=
l;n.buildResourceGroupIdFromSubscriptionAndResourceGroupName=f;n.buildResourceTypeFromResourceId=tt;
n.buildResourceTypeFromResourceDescriptor=a;n.buildResourceIdFromDescriptor=v;n.buildParentResourceIdFromDescriptor=
it;n.buildRelatedTagName=rt;n.buildLinkTagName=ut;n.buildTagName=e;n.buildLowerCaseResourceGroupId=o;
n.compareResourceGroupId=y;n.buildLowerCaseResourceId=s;n.compareResourceId=ft;n.resourceGroupContainsResource=
et;p=function(){function n(){this.refreshPacket=ko.observable(null)}return n.prototype.signalResourceGroupRefresh=
function(n){this.refreshPacket({resourceGroupId:n})},n.prototype.signalResourceRefresh=function(n){this.
refreshPacket({resourceId:n})},n.prototype.signalAssetRefresh=function(n,t,i){this.refreshPacket({assetOwner:
n,assetType:t,assetId:i})},n}();n.ResourcePartExtender=p})(t=n.ResourceTypes||(n.ResourceTypes={}))}
)(t=n.Services||(n.Services={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),
function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";var t=function(){function n(
){this.actions=ko.observableArray()}return n}();n.Service=t})(t=n.Security||(n.Security={}))})(t=n.Services||
(n.Services={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;
(function(t){var i;(function(t){"use strict";var r=new n.Base.Diagnostics.Log("MsPortalFx/Hubs/Notifications"),
u,i;(function(n){n[n.Information=0]="Information";n[n.Warning=1]="Warning";n[n.Error=2]="Error";n[n.
InProgress=3]="InProgress";n[n.Success=4]="Success"})(t.NotificationStatus||(t.NotificationStatus={})
);u=t.NotificationStatus;i=function(){function t(t){var i=this;this.status=t.status;this.title=t.title;
this.description=t.description;this.correlationIds=["clientNotification-"+n.Util.newGuid()];t.correlationIds&&
t.correlationIds.length>0&&t.correlationIds.forEach(function(n){return i.correlationIds.push(n)});this.
percentComplete=t.percentComplete;this.asset=t.asset}return t.prototype.publish=function(){if(!this.
title||!this.title.trim()||!this.description||!this.description.trim()){r.error("Client notification is missing title and/or description. Unable to publish it.");
return}n.Services.Rpc.invokeCallback("fx","addClientNotification",{timestamp:new Date,status:this.status,
title:this.title,description:this.description,correlationIds:this.correlationIds,percentComplete:this.
percentComplete,asset:this.asset})},t.publish=function(n){var i=new t(n);return i.publish(),i},t}();
t.ClientNotification=i})(i=t.Notifications||(t.Notifications={}))})(t=n.Hubs||(n.Hubs={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){var i;(function(t){var i;(function(
t){"use strict";var i=n.Base.Rpc.Internal,r=n.Internal.Constants.RpcMethods,u;t.readHubsUserSettings=
new i.FuncEndPointDefinition(r.shellReadUserSettings);t.writeHubsUserSettings=new i.ActionEndPointDefinition(
r.shellWriteUserSettings),function(n){n.galleryCreateLastDeployedGalleryItemsKey="gallery_create_lastDeployed_galleryItems";
n.galleryCreateLauncherLastUsedSubscriptionIdKey="gallery_createLauncher_lastUsed_subscriptionId";n.
galleryCreateLauncherLastUsedResourceGroupLocationKey="gallery_createLauncher_lastUsed_resourceGroupLocation";
n.subscriptionsSelectedKey="subscriptions_selected";n.registeredAssetTypesKey="registered_asset_types";
n.browseColumnsSettings="browse_columns"}(u=t.Keys||(t.Keys={}))})(i=t.Schema||(t.Schema={}))})(i=t.
Settings||(t.Settings={}))})(i=t.Hubs||(t.Hubs={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.Browse||
(n.Browse={}))})(t=n.Hubs||(n.Hubs={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})
),function(n){var t;(function(t){var i;(function(t){"use strict";var i=n.Base.Rpc.Internal;t.notifyAssetDeletedMethodName=
"MsPortalFx.UI.AssetManager.NotifyAssetDeleted";t.notifyAssetDeletedDefinition=new i.ActionEndPointDefinition(
t.notifyAssetDeletedMethodName)})(i=t.AssetManager||(t.AssetManager={}))})(t=n.Internal||(n.Internal=
{}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){"use strict";function i(
t,i){var r=n.Internal.AssetManager.notifyAssetDeletedDefinition.invoke(n.Base.Rpc.Internal.client,"fx",
{assetId:i,assetType:t})}t.notifyAssetDeleted=i})(i=t.AssetManager||(t.AssetManager={}))})(t=n.UI||(n.
UI={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";
var t=function(){function n(){}return n}(),i;n.SubscriptionSummaryData=t,function(n){n[n.None=0]="None";
n[n.Active=1]="Active";n[n.Warning=2]="Warning"}(n.CreditStatusType||(n.CreditStatusType={}));i=n.CreditStatusType}
)(t=n.Billing||(n.Billing={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(t){var i;(function(t){"use strict";var i=n.Base.Rpc.Internal;t.addNotificationsEndPoint=
new i.ActionEndPointDefinition("MsPortalFx.UI.NotificationManager.AddNotifications");t.addNotification2EndPoint=
new i.ActionEndPointDefinition("MsPortalFx.UI.NotificationManager.AddNotifications2");t.updateNotificationEndPoint=
new i.ActionEndPointDefinition("MsPortalFx.UI.NotificationManager.UpdateNotification");t.addServerEventsEndPoint=
new i.ActionEndPointDefinition("addServerEvents");t.rpcClient})(i=t.NotificationManager||(t.NotificationManager=
{}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var
i;(function(t){"use strict";function o(n){return new i(n)}function h(n){u([n])}function u(t){if(t&&t.
length>0){window.fx.environment&&window.fx.environment.isDevelopmentMode&&t.forEach(function(n){n.assetId&&
f(n.assetId)});var i=n.Internal.NotificationManager.addNotificationsEndPoint.invoke(n.Internal.NotificationManager.
rpcClient,"fx",{notifications:t})}}function f(n){if(typeof n=="object")Object.getOwnPropertyNames(n).
forEach(function(t){if(typeof n[t]=="function")throw"NotificationManager: Invalid asset id. Asset ids cannot contain observables or functions.";
else typeof n[t]=="object"&&f(n[t])});else if(typeof n=="function")throw"NotificationManager: Invalid asset id. Asset ids cannot contain observables or functions.";
}var e=n.Base.Rpc.Internal,i,s,r;n.Internal.NotificationManager.rpcClient=e.client;i=function(){function t(
t){this._id=n.Util.newGuid();this._name=t}return t.prototype.raise=function(t,i,r){n.Internal.NotificationManager.
addNotification2EndPoint.invoke(n.Internal.NotificationManager.rpcClient,"fx",{id:this._id,name:this.
_name,status:t.status,subStatus:t.subStatus,assetId:i,properties:r})},t.prototype.updateCorrelationId=
function(t){n.Internal.NotificationManager.updateNotificationEndPoint.invoke(n.Internal.NotificationManager.
rpcClient,"fx",{id:this._id,propertyName:"correlationId",propertyValue:t})},t.prototype.reportProgress=
function(t){n.Internal.NotificationManager.updateNotificationEndPoint.invoke(n.Internal.NotificationManager.
rpcClient,"fx",{id:this._id,propertyName:"percentComplete",propertyValue:t})},t}();t.Notification2=i;
t.create=o,function(n){n[n.Information=0]="Information";n[n.Warning=1]="Warning";n[n.Error=2]="Error";
n[n.InProgress=3]="InProgress";n[n.Success=4]="Success"}(t.NotificationState||(t.NotificationState={
}));s=t.NotificationState;r=function(){function n(n,t,i,r,u,f,e,o){if(i===undefined)throw new Error(
"Invalid arguments when creating notification.");if(f&&!u)throw new Error("Subscription id must be specified when operation id is specified.");
this.source=n;this.eventType=t;this.state=i;this.timestamp=new Date;this.descriptionArgs=r;this.subscriptionId=
u;this.operationId=f;this.percentOperationComplete=e;this.assetId=o}return n}();t.Notification=r;t.addNotification=
h;t.addNotifications=u})(i=t.NotificationManager||(t.NotificationManager={}))})(t=n.UI||(n.UI={}))}(
MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){"use strict";var i=function(){function t(
){this.title=ko.observable();this.subtitle=ko.observable();this.description=ko.observable();this.helpUri=
ko.observable();this.icon=ko.observable(n.Base.Images.Shell.DefaultBlade());this.titleImageUri=ko.observable(
);this.statusBar=null;this.contentState=ko.observable(0);this.contentStateDisplayText=ko.observable(
)}return t}();t.Blade=i})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){var t;(function(n){"use strict";var i=1,r=function(){function n(n,t){var i=this;
if(this._hasInitialized=!1,this.internal_bladeCallId=ko.observable(),this.internal_bladeCallerParams=
ko.observable(),this._options=t,this._invokeOnSelectable=t.invokeOnSelectable,this._invokeOnSelectableSet=
t.invokeOnSelectableSet,!!this._invokeOnSelectable==!!this._invokeOnSelectableSet)throw new Error("Specify 'invokeOnSelectable' or 'invokeOnSelectableSet', but not both.");
n.onInputsSetCallbacks.add(function(t){i._hasInitialized||(i._hasInitialized=!0,i._initialize(n));var
r=t.internal_bladeCallerResult;return r&&r.bladeCallId===i._currentBladeCallId&&(i._currentBladeCallId=
null,i._options.receiveResult(r.result,i._activatedItemForCurrentBladeCall),i._clearActivation()),null}
)}return n.prototype._initialize=function(n){var t=this;this._isCurrentlyActivated()&&this._beginNewBladeCall(
!1);this._subscribeToActivationStateChange(n,function(n){n&&t._beginNewBladeCall(!0)})},n.prototype.
_beginNewBladeCall=function(n){if(this._currentBladeCallId=i++,this.internal_bladeCallId(this._currentBladeCallId),
this._activatedItemForCurrentBladeCall=this._getCurrentlyActivatedValue(),n){var t=this._options.supplyParams(
this._activatedItemForCurrentBladeCall);this.internal_bladeCallerParams(t)}},n.prototype._isCurrentlyActivated=
function(){if(this._invokeOnSelectable)return this._invokeOnSelectable.isSelected();if(this._invokeOnSelectableSet)
{var n=this._invokeOnSelectableSet.activatedItems().length;if(n>1)throw new Error("Multiselection is not supported with parameter collectors.");
return n>0}},n.prototype._getCurrentlyActivatedValue=function(){if(this._invokeOnSelectable)return this.
_invokeOnSelectable.value();if(this._invokeOnSelectableSet){var n=this._invokeOnSelectableSet.activatedItems(
);return n?n[0]:null}return null},n.prototype._subscribeToActivationStateChange=function(n,t){var i=
this;this._invokeOnSelectable?this._invokeOnSelectable.isSelected.subscribe(n,t):this._invokeOnSelectableSet&&
this._invokeOnSelectableSet.activatedItems.subscribe(n,function(){t(i._isCurrentlyActivated())})},n.
prototype._clearActivation=function(){this._invokeOnSelectable?this._invokeOnSelectable.isSelected(!1):
this._invokeOnSelectableSet&&this._invokeOnSelectableSet.activatedItems([])},n}(),t;n.BladeCaller=r;
t=function(){function n(n,t){var i=this;this.internal_bladeCallerResult=ko.observable();this._options=
t;n.onInputsSetCallbacks.add(function(n){if(n.internal_bladeCallId!==undefined&&(i._bladeCallId=n.internal_bladeCallId),
n.internal_bladeCallerParams!==undefined){var t=i._makeStringHashFromParams(n.internal_bladeCallerParams);
t!==i._lastReceivedParamsStringHash&&(i._lastReceivedParamsStringHash=t,i._options.receiveParams(n.internal_bladeCallerParams))}
return null})}return n.prototype.sendResult=function(n){this.internal_bladeCallerResult({bladeCallId:
this._bladeCallId,result:n})},n.prototype._makeStringHashFromParams=function(n){return ko.toJSON(n)}
,n}();n.BladeCallable=t})(t=n.Internal||(n.Internal={}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(t){"use strict";var e=n.Resources.Strings,i=n.Helpers,r=n.Base.Utilities,o=function(
n){function t(){n.apply(this,arguments);this.data=ko.observable()}return __extends(t,n),t.prototype.
onInputsSet=function(n){var t=n.data;return this.data(t),this.title(this._onGetTitle(t)),i.Deferred(
).resolve().promise()},t.prototype._onGetTitle=function(n){return e.DeleteAssetConfirmation.bladeTitle.
format(n.assetName)},t}(n.ViewModels.Blade),u,f;t.BladeViewModel=o;u=function(t){function u(i,r){var
u=this;t.call(this,i);this.data=ko.observable();this.result=ko.observable(0);this._container=null;this.
_assetType=null;this._data=null;this._selectedItems=null;this._previousUserActionId="";this._container=
i;this._assetType=r;i.registerForDispose(ko.computed(function(){var n=u.data(),t=u._onValidateCommand(
n);u.enabled(t)}));i.registerForDispose(this.result.subscribe(function(n){u._onDeletionResultChange(
n)}));this.enabled(!1);this.icon(n.Base.Images.Delete())}return __extends(u,t),u.prototype.onInputsSet=
function(n){var r=n.data,u=n.selectedItems,t=n.actionBarOutput;return this.data(r),t&&((t.action===4||
t.action===5)&&this._container.selectable.isSelected(!1),t.action===4&&t.userActionId&&this._previousUserActionId!==
t.userActionId&&(this._previousUserActionId=t.userActionId,this._data=r,this._selectedItems=u,this._onDelete(
r,u))),i.Deferred().resolve().promise()},u.prototype._onDelete=function(){throw new Error("The _onDelete method on MsPortalFx.ViewModels.DeleteAssetConfirmation.CommandViewModel has not been implemented.");
},u.prototype._onSendErrorNotification=function(){throw new Error("The _onSendErrorNotification method on MsPortalFx.ViewModels.DeleteAssetConfirmation.CommandViewModel has not been implemented.");
},u.prototype._onValidateCommand=function(n){return!r.isNullOrUndefined(n)},u.prototype._onDeletionResultChange=
function(t){switch(t){case 1:n.UI.AssetManager.notifyAssetDeleted(this._assetType,this._data.assetId);
break;case 2:this._sendErrorNotification(this._data,this._selectedItems)}},u.prototype._sendErrorNotification=
function(t,i){var r=this._onSendErrorNotification(t,i);r.state=2;n.UI.NotificationManager.addNotification(
r)},u}(n.ViewModels.OpenBladeCommand);t.CommandViewModel=u;f=function(n){function t(t,i){var r=this;
n.call(this,t,i);this.data=ko.observable();this._data=null;t.registerForDispose(this.data.subscribe(
function(n){!r._isSameAsset(n)&&r._options.grid&&(r._onPopulateGrid(n),r._selectAll());r._data=n}))}
return __extends(t,n),t.prototype.onInputsSet=function(n){var t=n.data;return this._assetName(t.assetName),
r.isNullOrWhiteSpace(t.assetTypeDisplayName)||this._assetTypeDisplayName(t.assetTypeDisplayName),this.
data(t),i.Deferred().resolve().promise()},t.prototype._onPopulateGrid=function(){throw new Error("The _onPopulateGrid method on MsPortalFx.ViewModels.DeleteAssetConfirmation.PartViewModel has not been implemented.");
},t.prototype._isSameAsset=function(n){return r.deepEquals(this._data,n)},t}(n.ViewModels.Controls.DeleteAssetConfirmation.
ViewModel);t.PartViewModel=f})(i=t.DeleteAssetConfirmation||(t.DeleteAssetConfirmation={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r},function(n){var t;(function(t){"use strict";var u=100,f=n.Helpers,i=n.Resources.Strings.DeleteCommand,
e,r;(function(n){n[n.None=0]="None";n[n.Success=1]="Success";n[n.Failure=2]="Failure"})(t.CommandResult||
(t.CommandResult={}));e=t.CommandResult;r=function(t){function r(i,r){var u=this;t.call(this);this._assetType=
null;this._confirmationDialog=null;this._errorDialog=null;this._data=null;this._assetType=r;this.data=
ko.observable();this.result=ko.observable(0);i.registerForDispose(ko.computed(function(){var n=u.data(
),t=u._onValidateCommand(n);u.enabled(t)}));i.registerForDispose(this.result.subscribe(function(n){u.
_onDeletionResultChange(n)}));this.icon(n.Base.Images.Delete())}return __extends(r,t),r.prototype.onInputsSet=
function(n){return this.data(n.data),f.Deferred().resolve().promise()},r.prototype.execute=function(
){this._data=this.data();this._createConfirmationDialog(this._data);this.dialog(this._confirmationDialog)}
,r.prototype.dialogClick=function(n){this._shouldDelete(n)?(this.result(0),this._onDelete(this._data)):
this._resetCommand()},r.prototype._onDelete=function(){throw new Error("The onDelete method on MsPortalFx.ViewModels.DeleteAssetCommand has not been implemented.");
},r.prototype._onGetAssetId=function(){throw new Error("The onGetAssetId method on MsPortalFx.ViewModels.DeleteAssetCommand has not been implemented.");
},r.prototype._onSendErrorNotification=function(){throw new Error("The onSendErrorNotification method on MsPortalFx.ViewModels.DeleteAssetCommand has not been implemented.");
},r.prototype._onShowConfirmation=function(){return{title:i.Confirmation.title,message:i.Confirmation.
message}},r.prototype._onShowError=function(){return{title:i.Failure.title,message:i.Failure.message}}
,r.prototype._onValidateCommand=function(t){return!n.Base.Utilities.isNullOrUndefined(t)},r.prototype.
_shouldDelete=function(n){var t=this.dialog()===this._confirmationDialog&&n===6,i=this.dialog()===this.
_errorDialog&&n===5;return t||i},r.prototype._onDeletionResultChange=function(t){var i=this;switch(t)
{case 1:n.UI.AssetManager.notifyAssetDeleted(this._assetType,this._onGetAssetId(this._data));this._resetCommand(
);break;case 2:this._sendErrorNotification(this._data);setTimeout(function(){i._createErrorDialog(i.
_data);i.dialog(i._errorDialog)},u)}},r.prototype._createConfirmationDialog=function(t){var i=this._onShowConfirmation(
t);this._confirmationDialog=new n.ViewModels.Dialogs.MessageBox(i.title,i.message,4)},r.prototype._createErrorDialog=
function(t){var i=this._onShowError(t);this._errorDialog=new n.ViewModels.Dialogs.MessageBox(i.title,
i.message,3)},r.prototype._sendErrorNotification=function(t){var i=this._onSendErrorNotification(t);
i&&(i.state=2,n.UI.NotificationManager.addNotification(i))},r.prototype._resetCommand=function(){this.
status(0)},r}(n.ViewModels.Command);t.DeleteAssetCommand=r})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
n){var t;(function(n){"use strict";var f,t,i,r,u;(function(n){n[n.AbortRetryIgnore=0]="AbortRetryIgnore";
n[n.OK=1]="OK";n[n.OKCancel=2]="OKCancel";n[n.RetryCancel=3]="RetryCancel";n[n.YesNo=4]="YesNo";n[n.
YesNoCancel=5]="YesNoCancel"})(n.MessageBoxButtons||(n.MessageBoxButtons={}));f=n.MessageBoxButtons;
t=function(n){function t(t,i,r){n.call(this,t);this.type=1;this.text=i;this.buttons=r}return __extends(
t,n),t}(n.Dialog);n.MessageBox=t;i=function(n){function t(t,i,r){n.call(this,t);this.text=ko.observable(
"");this.completionPercentage=ko.observable(-1);this.type=2;this.text(i);r!==undefined&&this.completionPercentage(
r)}return __extends(t,n),t}(n.Dialog);n.ProgressBox=i;r=function(n){function t(t){n.call(this,t);this.
description=ko.observable();this.type=3}return __extends(t,n),t}(n.Dialog);n.FormDialog=r;u=function(
n){function t(){n.call(this,"");this.listItems=ko.observableArray();this.selectedItem=ko.observable(
);this.type=4}return __extends(t,n),t}(n.Dialog);n.ListPopup=u})(t=n.Dialogs||(n.Dialogs={}))})(t=n.
ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict"}
)(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){"use strict";
n.ResourceIdTypeName="MsPortalFx.ViewModels.ResourceId"})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(){"use strict"})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";n.CellWidth=85;n.CellHeight=
85;n.CellSpacingWidth=5;n.CellSpacingHeight=5;n.GridSpacingWidth=n.CellWidth+n.CellSpacingWidth;n.GridSpacingHeight=
n.CellHeight+n.CellSpacingHeight})(t=n.AzureGrid||(n.AzureGrid={}))})(t=n.Widgets||(n.Widgets={}))}(
MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";(function(
n){n[n.None=0]="None";n[n.Fill=1]="Fill"})(n.ThumbnailStretch||(n.ThumbnailStretch={}));var t=n.ThumbnailStretch}
)(t=n.PartGallery||(n.PartGallery={}))})(t=n.Widgets||(n.Widgets={}))}(MsPortalFx||(MsPortalFx={}))