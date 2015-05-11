define("HubsExtension/Gallery/DataContexts/GalleryDataContext",["require","exports","../../HubsCommon",
"../../Common/HubsObservables","../Models/GalleryModels","HubsExtension/Gallery/GalleryClientStrings",
"../../Store/CreateLauncher"],function(n,t,i,r,u,f,e){var s=MsPortalFx.Azure.ResourceManager,o;return function(
n){"use strict";var c=window,t=c&&c.fx&&c.fx.environment,v=t&&t.galleryServiceUri&&t.galleryServiceUri.
replace(/\/$/,""),l=f.Gallery.DataContext,s=/^(http:|https:)\/\//,h=20,o,a;(function(n){n.MPN="MPN_2014-09-01";
n.MSDN="MSDN_2014-09-01";n.Default="Default_2014-09-01";n.Internal="Internal_2014-09-01";n.BizSpark=
"BizSpark_2014-09-01";n.AzurePass="AzurePass_2014-09-01";n.FreeTrial="FreeTrial_2014-09-01";n.DreamSpark=
"DreamSpark_2015-02-01";n.PayAsYouGo="PayAsYouGo_2014-09-01";n.MSDNDevTest="MSDNDevTest_2014-09-01";
n.AzureInOpen="AzureInOpen_2014-09-01";n.BizSparkPlus="BizSparkPlus_2014-09-01";n.BackupStorage="BackupStorage_2014-09-01";
n.AzureDynamics="AzureDynamics_2014-09-01";n.EnterpriseAgreement="EnterpriseAgreement_2014-09-01";n.
LegacyMonetaryCommitment="LegacyMonetaryCommitment_2014-09-01";n.QuotasPriority=[n.Default,n.DreamSpark,
n.MPN,n.Internal,n.BizSpark,n.AzurePass,n.FreeTrial,n.PayAsYouGo,n.AzureInOpen,n.BizSparkPlus,n.BackupStorage,
n.AzureDynamics,n.EnterpriseAgreement,n.LegacyMonetaryCommitment,n.MSDN,n.MSDNDevTest]})(o||(o={}));
a=function(){function n(n){this.legalTermsBladeTitles={};this._curationData=null;this._galleryServiceUri=
v;this._localGalleryEndpointsProvider=n;this.activityPane=new u.CreateActivityPaneItems;this._loadGalleryItems(
)}return Object.defineProperty(n.prototype,"loadPromise",{get:function(){return this._loadPromise},enumerable:
!0,configurable:!0}),Object.defineProperty(n.prototype,"menuItems",{get:function(){return this._curationData&&
this._curationData.gallery?this._curationData.gallery:[]},enumerable:!0,configurable:!0}),Object.defineProperty(
n.prototype,"createItems",{get:function(){var i=this,n,t;return this._highestSubscriptionQuotaId&&this.
_curationData&&this._curationData.specializedCreates&&this._curationData.specializedCreates.length>0&&
(t=this._curationData.specializedCreates.first(function(n){return n.id.toLowerCase()===i._highestSubscriptionQuotaId}
),t&&(n=t.create)),!n&&this._curationData&&this._curationData.create&&(n=this._curationData.create),
n||(n=[]),n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"itemGroups",{get:function(
){return this._curationData&&this._curationData.groups?this._curationData.groups:[]},enumerable:!0,configurable:
!0}),n.prototype.getMenuItems=function(){var n=this;return Q(this._loadPromise).then(function(){return n.
_checkIfShouldShowLocalCategory().then(function(t){return t&&n._ensureLocalCategoryIsPresent(),n.menuItems}
)})},n.prototype._checkIfShouldShowLocalCategory=function(){return t.isDevelopmentMode?Q(!0):this._localGalleryEndpointsProvider.
getLocalGalleryPackagesEndpoints().then(function(n){return n.length>0})},n.prototype.getGalleryItemsByMenuPromise=
function(n,t){var u=this,i=r.getSubscriptionsObservable(),h=i&&i()&&i().subscriptions,c=(h||[]).map(
function(n){return n.subscriptionID}),f=Q.defer(),e=[],o=function(n){e.push(n)},s=function(){MsPortalFx.
Base.Diagnostics.Log.writeEntry(2,"Gallery-DataContext","Failed to get gallery items by menu.")};return this.
_getGalleryItemsEndPoints(n).then(function(i){var r=i.map(function(i){return i.secured?u._requestGalleryMenuItems(
i.uri,n,t,!0,c).then(o,s):u._requestGalleryMenuItems(i.uri,n,t,!1).then(o,s)});Q.allSettled(r).finally(
function(){f.resolve(e)})}),f.promise},n.prototype._requestGalleryMenuItems=function(i,r,u,f,e){var l=
t.extensionFlags[n._galleryHideKeyFlag],c,w,a,v,o,y,p;return r?f&&e.length===0&&!l?$.Deferred().resolve(
{menuName:r,galleryItems:[]}):(c=r.split("/"),w=c[0],c.length>1&&(v=c[1]),c.length>2&&(a=c[2]),o=new
MsPortalFx.Base.UriBuilder(i),o.query.setParameter(n._galleryCurationAreaName,w),o.query.setParameter(
n._galleryLimitRowsName,u),o.query.setParameter(n._galleryApiVersionName,n._galleryApiVersionValue),
y=t.extensionFlags[n._galleryCurationFlag],y&&o.query.setParameter(n._galleryCurationIdName,y),v&&o.
query.setParameter(n._galleryMenuIdName,v),a&&o.query.setParameter(n._gallerySubmenuIdName,a),f&&e&&
e.length&&e.slice(0,h).forEach(function(t,i){o.query.setParameter(n._gallerySubscriptionsNameFormat.
format(i),t)}),f&&!!l&&o.query.setParameter(n._galleryHideKeysName,l),p=o.toString(),this._requestGalleryItems(
{uri:p,crossDomain:s.test(p),setAuthorizationHeader:f?!0:undefined,type:"GET",dataType:"json",contentType:
"application/json"}).then(function(n){return{menuName:r,galleryItems:n}})):(MsPortalFx.Base.Diagnostics.
Log.writeEntry(2,"Gallery-DataContext","There was an error querying gallery items. No menuName was supplied."),
$.Deferred().fail())},n.prototype.getGalleryItemsBySubMenuPromise=function(t,i,r){var u=n._gallerySubMenuPath.
format(t,i);return this.getGalleryItemsByMenuPromise(u,r)},n.prototype.getGalleryItemByIdPromise=function(
i){var c=this._getGalleryItemEndPoint(i),e=s.test(c),u=new MsPortalFx.Base.UriBuilder(c),f=$.Deferred(
),o,l;return u.query.setParameter(n._galleryApiVersionName,n._galleryApiVersionValue),u.query.setParameter(
n._galleryIncludePreviewName,!0),o=function(){var i=r.getSubscriptionsObservable(),o=i&&i()&&i().subscriptions,
s=t.extensionFlags[n._galleryHideKeyFlag],c,l;e?(o&&o.length&&(c=i().subscriptions.map(function(n){return n.
subscriptionID}),c.slice(0,h).forEach(function(t,i){u.query.setParameter(n._gallerySubscriptionsNameFormat.
format(i),t)})),s&&u.query.setParameter(n._galleryHideKeysName,s),l=MsPortalFx.Base.Net.ajax({uri:u.
toString(),crossDomain:e,setAuthorizationHeader:!0,type:"GET",dataType:"json",contentType:"application/json"}).
then(function(n){f.resolve(n)}).fail(function(){f.fail()})):f.resolve(undefined)},l=MsPortalFx.Base.
Net.ajax({uri:u.toString(),crossDomain:e,type:"GET",dataType:"json",contentType:"application/json"}).
then(function(n){n?f.resolve(n):o()}).fail(function(){o()}),f.promise()},n.prototype.getGalleryItemsByIdsPromise=
function(i){var a=this,u,l,o,f=$.Deferred(),e=[],c,v;return i&&i.length>0?(l=i.unique().map(function(
n){return a._getBaseGalleryItemIdentity(n)}),u=this._getGalleryItemsByIdsEndPoint(l),o=s.test(u.toString(
)),c=function(){var i=r.getSubscriptionsObservable(),s=i&&i()&&i().subscriptions,c=t.extensionFlags[
n._galleryHideKeyFlag],l,v;o?(s&&s.length&&(l=i().subscriptions.map(function(n){return n.subscriptionID}
),l.slice(0,h).forEach(function(t,i){u.query.setParameter(n._gallerySubscriptionsNameFormat.format(i),
t)})),c&&u.query.setParameter(n._galleryHideKeysName,c),v=a._requestGalleryItems({uri:u.toString(),crossDomain:
o,setAuthorizationHeader:!0,type:"GET",dataType:"json",contentType:"application/json"}).then(function(
n){n&&(e=e.concatUnique(n,function(n,t){return n.identity===t.identity}));f.resolve(e)}).fail(function(
){f.resolve(e)})):f.resolve(undefined)},v=this._requestGalleryItems({uri:u.toString(),crossDomain:o,
type:"GET",dataType:"json",contentType:"application/json"}).then(function(n){n?(e=n,n.length!==l.length?
c():f.resolve(e)):c()}).fail(function(){c()})):f.resolve([]),f.promise()},n.prototype.getGalleryItemsBySearchPromises=
function(i,u,f){var y=this._getSearchEndPoint(),p=s.test(y),e=new MsPortalFx.Base.UriBuilder(y),a=$.
Deferred(),l=$.Deferred(),w=t.extensionFlags[n._galleryCurationFlag],v=t.extensionFlags[n._galleryHideKeyFlag],
o,c;return e.query.setParameter(n._galleryApiVersionName,n._galleryApiVersionValue),e.query.setParameter(
n._gallerySearchQueryName,i),e.query.setParameter(n._galleryIncludePreviewName,!0),u.toUpperCase()!==
n._galleryHomeIdName&&e.query.setParameter(n._galleryCurationMenuName,u),w&&e.query.setParameter(n._galleryCurationIdName,
w),this._requestGalleryItems({uri:e.toString(),crossDomain:p,type:"GET",dataType:"json",contentType:
"application/json"}).then(function(n){a.resolve({curationMenu:u,galleryItems:n.slice(0,60),startTime:
f})},function(){a.reject()}),o=r.getSubscriptionsObservable(),o&&o()&&o().subscriptions&&o().subscriptions.
length>0&&(c=o().subscriptions.map(function(n){return n.subscriptionID})),v||c?(v&&e.query.setParameter(
n._galleryHideKeysName,v),c&&c.length&&c.slice(0,h).forEach(function(t,i){e.query.setParameter(n._gallerySubscriptionsNameFormat.
format(i),t)}),this._requestGalleryItems({uri:e.toString(),crossDomain:p,type:"GET",dataType:"json",
contentType:"application/json",setAuthorizationHeader:!0}).then(function(n){l.resolve({curationMenu:
u,galleryItems:n,startTime:f})},function(){l.reject()})):l.resolve({curationMenu:u,galleryItems:[],startTime:
f}),[a.promise(),l.promise()]},n.prototype._getGalleryItemAccessibility=function(n){var i=0,t;return this.
_highestSubscriptionAccessibility&&(t=!1,this._highestSubscriptionAccessibility.exceptions&&this._highestSubscriptionAccessibility.
exceptions.length>0&&(t=this._highestSubscriptionAccessibility.exceptions.some(function(t){return t===
n.identity||n.identity.startsWith("{0}.".format(t))}),this._highestSubscriptionAccessibility.accessBehavior===
0?i=t?2:1:this._highestSubscriptionAccessibility.accessBehavior===1&&(i=t?1:2))),i},n.prototype._getHighestSubscriptionQuotaId=
function(){var t,i,n=-1;return e.Internal.highestAvailableQuotaIdOverride?i=e.Internal.highestAvailableQuotaIdOverride:
(t=this._getSuscriptionPolicyQuotaIds(),t&&t.length>0&&(t.forEach(function(t){for(var i=-1,r=0;r<o.QuotasPriority.
length;r++)if(t.toLowerCase()===o.QuotasPriority[r].toLowerCase()){i=r;break}i===-1&&MsPortalFx.Base.
Diagnostics.Log.writeEntry(1,"Gallery-DataContext","Subscription found with unkown quota: {0}".format(
t));n=i>n?i:n}),n>=0&&(i=o.QuotasPriority[n].toLowerCase()))),i},n.prototype._getSuscriptionPolicyQuotaIds=
function(){var t=r.getSubscriptionsObservable(),i=t&&t()&&t().subscriptions,n=[];return i&&i.length>
0&&(n=i.map(function(n){var t=n.subscriptionPolicies;return t&&t.quotaId}),n=n.filter(function(n){return!!n}
).unique()),n},n.prototype.dispose=function(){this._activityPaneComputedData&&(this._activityPaneComputedData.
dispose(),this._activityPaneComputedData=null);this.activityPane&&(this.activityPane.dispose(),this.
activityPane=null)},n.prototype._loadGalleryItems=function(){var n=this;this._loadCurationData().then(
function(){n._loadActivityPaneItems()})},n.prototype._loadCurationData=function(){var t=this,n=$.Deferred(
);return this._loadPromise=n.promise(),this._getCurationEndPointPromise().then(function(i){var r=s.test(
i),u=new MsPortalFx.Base.UriBuilder(i);MsPortalFx.Base.Net.ajax({uri:u.toString(),crossDomain:r,type:
"GET",dataType:"json",contentType:"application/json"}).then(function(i){i?(t._curationData=i,n.resolve(
)):(t._notifyCurationFailure(new Error("There are no items in the gallery curation data.")),n.reject(
))},function(){t._notifyCurationFailure(new Error("Failed to get curation."));n.reject()})}),this._loadPromise}
,n.prototype._getBaseGalleryItemIdentity=function(n){var i=n,t=n&&n.split(".");return t.length>=2&&(
i="{0}.{1}.".format(t[0],t[1])),i},n.prototype._getSimpleName=function(n){return n.publisher+"."+n.itemName}
,n.prototype._loadActivityPaneItems=function(){var t=this;this._activityPaneComputedData=ko.computed(
function(){var i=r.getSubscriptionsObservable();t._highestSubscriptionQuotaId=t._getHighestSubscriptionQuotaId(
);t._ensureLocalAccessibilityIsPresent();t._curationData&&t._curationData.itemAccessibility&&t._curationData.
itemAccessibility.length>0&&(t._highestSubscriptionAccessibility=t._curationData.itemAccessibility.first(
function(n){return n.id.toLowerCase()===t._highestSubscriptionQuotaId}),t.getGalleryItemsByMenuPromise(
n._galleryActivityPaneName,!1).then(function(n){var i=[];t._curationData.activityPane.forEach(function(
r){n.forEach(function(n){var u,f;n&&(u=n.galleryItems.first(function(n){return t._getSimpleName(n)===
r.id||n.identity===r.id}),u&&(f=i.some(function(n){return n.identity===u.identity}),f||i.push(u)))})}
);t.activityPane.items(i)},function(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"Gallery-DataContext",
"There was an error getting activity pane items. '{0}'".format(JSON.stringify(n)))}))})},n.prototype.
_getSearchEndPoint=function(){return this._galleryServiceUri&&this._galleryServiceUri.length>0?this.
_galleryServiceUri+"/Microsoft.Gallery/GalleryItems":n._galleryEndpointForSearch},n.prototype._getGalleryItemsEndPoints=
function(i){var f=!!i&&i.toLowerCase().indexOf("gallery/local/")===0,e=t.isDevelopmentMode&&f,r,u;return r=
!e&&this._galleryServiceUri&&this._galleryServiceUri.length>0?n._galleryServiceGetItemsPathFormat.format(
this._galleryServiceUri):n._galleryEndpointForMenuItems,u=[{uri:r,secured:!1},{uri:r,secured:!0}],f?
this._localGalleryEndpointsProvider.getLocalGalleryPackagesEndpoints().then(function(n){return u.concat(
n.map(function(n){return{uri:n,secured:!1}}))}):Q(u)},n.prototype._getGalleryItemEndPoint=function(t)
{return this._galleryServiceUri&&this._galleryServiceUri.length>0?n._galleryServiceGetItemPathFormat.
format(this._galleryServiceUri,t):n._galleryEndpointForGalleryItems.format(t)},n.prototype._getGalleryItemsByIdsEndPoint=
function(t){var f="startswith(Identity,'{0}')",i,r,u;return this._galleryServiceUri&&this._galleryServiceUri.
length>0?(r=n._galleryServiceGetItemsPathFormat.format(this._galleryServiceUri),u=t.map(function(n){
return f.format(n)}).join(" or "),i=new MsPortalFx.Base.UriBuilder(r),i.query.setParameter(n._galleryApiVersionName,
n._galleryApiVersionValue),i.query.setParameter(n._galleryIncludePreviewName,!0),i.query.setParameter(
"$filter",u)):(r=n._galleryEndpointForGalleryItemsByIds.format(t.join(",")),i=new MsPortalFx.Base.UriBuilder(
r)),i},n.prototype._getCurationEndPointPromise=function(){var e=this,i=$.Deferred(),r,u,f;return this.
_galleryServiceUri&&this._galleryServiceUri.length>0?(r=new MsPortalFx.Base.UriBuilder(n._galleryServiceGetCurationPathFormat.
format(this._galleryServiceUri)),r.query.setParameter(n._galleryApiVersionName,n._galleryApiVersionValue),
u=t.extensionFlags[n._galleryCurationFlag],f=function(){e._getDefaultCurationItemPromise(r.toString(
)).then(function(n){n&&n.itemUri?i.resolve(n.itemUri):i.fail()}).then(null,function(){i.fail()})},u&&
u.length>0?this._getCurationItemByIdPromise(u,r.toString()).then(function(n){n&&n.itemUri?i.resolve(
n.itemUri):f()}).then(null,function(){f()}):f()):i.resolve(n._galleryEndpointForCurationData),i.promise(
)},n.prototype._getCurationItemByIdPromise=function(n,t){var i={filter:[{property:"Identity",operator:
"==",value:n}]};return this._getCurationItemPromise(i,t)},n.prototype._getDefaultCurationItemPromise=
function(n){return this._getCurationItemPromise({filter:[{property:"IsDefault",operator:"==",value:!0}]},
n)},n.prototype._requestGalleryItems=function(n){var t=this;return MsPortalFx.Base.Net.ajax(n).then(
function(n){return n&&n.length&&n.forEach(function(n){n.galleryItemAccess=t._getGalleryItemAccessibility(
n)}),n})},n.prototype._getCurationItemPromise=function(n,t){var r=this,u=$.Deferred(),i=new MsPortalFx.
Base.UriBuilder(t);return i.query.setParameters(MsPortalFx.Data.DataProvider.OData.shapeQuery(n)),Q(
MsPortalFx.Base.Net.ajax({uri:i.toString(),crossDomain:!0,type:"GET",dataType:"json",contentType:"application/json"})).
then(function(n){return n&&n.length>0?Q.resolve(n[0]):Q.reject(new Error("There are no items in the gallery curation data."))}
).then(null,function(n){return r._notifyCurationFailure(n),Q.reject(n)})},n.prototype._notifyCurationFailure=
function(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"Gallery-DataContext","There was an error getting the gallery curation data. {0}".
format(JSON.stringify(n)));var t=new MsPortalFx.UI.NotificationManager.Notification(i.extensionName,
l.loadCurationDataFailedLabel,2);t.description=l.loadCurationDataFailedMessage;MsPortalFx.UI.NotificationManager.
addNotification(t)},n.prototype._ensureLocalCategoryIsPresent=function(){var n=this._curationData;n&&
(n.gallery||(n.gallery=[]),n.gallery.some(function(n){return n.id==="local"})||n.gallery.push({id:"local",
displayName:"Local Development",summary:"Local Development Summary",children:[{id:"localPackagesWide",
displayName:"Wide",summary:"Local test packages",template:"Rx3",items:[],categories:["localDevelopment"],
longSummary:"",publisherDisplayName:""},{id:"localPackagesSmall",displayName:"Small",summary:"Local test packages",
template:"Rx6",items:[],categories:["localDevelopment"],longSummary:"",publisherDisplayName:""}]}))}
,n.prototype._ensureLocalAccessibilityIsPresent=function(){t.isDevelopmentMode&&this._curationData&&
(!this._curationData.itemAccessibility||this._curationData.itemAccessibility.length===0)&&(this._curationData.
itemAccessibility=[{id:o.DreamSpark,accessBehavior:1,exceptions:["Item-A"]}])},n._galleryEndpointForGalleryItemsByIds=
MsPortalFx.Base.Resources.getAppRelativeUri("/api/gallery/galleryitem?ids={0}"),n._galleryEndpointForGalleryItems=
MsPortalFx.Base.Resources.getAppRelativeUri("/api/gallery/galleryitem?id={0}"),n._galleryEndpointForCurationData=
MsPortalFx.Base.Resources.getAppRelativeUri("/api/gallery/curationdata"),n._galleryEndpointForMenuItems=
MsPortalFx.Base.Resources.getAppRelativeUri("/api/gallery/menuitems"),n._galleryEndpointForSearch=MsPortalFx.
Base.Resources.getAppRelativeUri("/api/gallery/search"),n._galleryServiceGetCurationPathFormat="{0}/Microsoft.Gallery/Curation",
n._galleryServiceGetItemsPathFormat="{0}/Microsoft.Gallery/GalleryItems",n._galleryServiceGetItemPathFormat=
"{0}/Microsoft.Gallery/GalleryItems/{1}",n._gallerySubscriptionsNameFormat="Subscriptions[{0}]",n._galleryIncludePreviewName=
"includePreview",n._galleryCurationAreaName="curationArea",n._galleryCurationMenuName="curationMenu",
n._galleryActivityPaneName="activityPane",n._gallerySearchQueryName="searchQuery",n._galleryApiVersionValue=
"2014-09-01",n._galleryApiVersionName="api-version",n._galleryCurationIdName="curationId",n._gallerySubmenuIdName=
"submenuId",n._galleryLimitRowsName="limitRows",n._galleryHideKeyHeader="x-ms-item-hide-key",n._galleryHideKeysName=
"HideKeys[0]",n._galleryCurationFlag="hubsExtension_Curation",n._galleryHideKeyFlag="hubsExtension_ItemHideKey",
n._gallerySubMenuPath="gallery/{0}/{1}",n._galleryMenuIdName="menuId",n._galleryHomeIdName="HOME",n.
_galleryIconKinds=["small","medium","large","wide","hero"],n}();n.GalleryDataContext=a}(o||(o={})),o}
)