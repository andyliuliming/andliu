var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("BillingExtension/BillingExtension",
["require","exports","./Billing/BillingArea","./Billing/BillingCommon","./_generated/ExtensionDefinition",
"./_generated/ViewModelFactories","./Billing/BillingViewModelFactories"],function(n,t,i,r,u,f,e){var
o;return function(n){"use strict";function o(){MsPortalFx.Services.Rpc.registerCallback("getBillingSubscriptionIds",
function(){return i.getBillingSubscriptionIds()});MsPortalFx.Services.Rpc.registerCallback("getBillingSubscriptionFromId",
function(n){return i.getSubscriptionSummaryDataFromId(n)});MsPortalFx.Services.Rpc.registerCallback(
"getSpecsCosts",function(n){return i.getSpecsCosts(n)})}function s(){var n;return{initialize:function(
){MsPortalFx.Base.Diagnostics.Telemetry.initialize(r.extensionName,!0);n=new t;o()},dispose:function(
){},getDefinition:function(){return u.getDefinition()},getViewModel:function(t,i,r){if(t in n)return n[
t](i,r)},getPartViewModel:function(t,i,r){if(t in n)return n[t](i,r)}}}var t=function(n){function t(
){n.call(this);this._billingFactories=new e.ViewModelFactories;this.SetBillingViewModelFactories(this.
_billingFactories)}return __extends(t,n),t.prototype.Billing$BillingSummaryViewModel=function(n,t){return this.
_billingFactories.BillingSummaryViewModel(n,t)},t}(f.ViewModelFactoriesBase);n.create=s}(o||(o={})),
o});define("BillingExtension/Billing/BillingArea",["require","exports","./DataContexts/BillingDataContext",
"./Services/BillingSubscriptionsBrowseService","./Services/BillingSubscriptionsGridColumnsService","BillingExtension/Billing/BillingClientStrings"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";function h(n){var t=e.getContext().getBillingDataContext(
),r=MsPortalFx.Helpers,i=r.Deferred();return t?t.getSubscriptionLoadPromiseFromId(n).then(function()
{var r=t.getBillingSubscriptionFromId(n);i.resolve(r)}):i.fail(),i.promise()}function c(){var n=e.getContext(
).getBillingDataContext(),i=MsPortalFx.Helpers,t=i.Deferred();return n?n.loadPromise.then(function()
{t.resolve(n.billingSummary.subscriptions().map(function(n){return n.id()}))}):t.fail(),t.promise()}
function l(n){t(n,"specCostQueryInput");t(n.subscriptionId,"subscriptionId");t(n.specResourceSets,"specResourceSets");
t(n.specsToAllowZeroCost,"specsToAllowZeroCost");var r=MsPortalFx.Base.Resources.getAppRelativeUri("/api/Billing"),
u=new MsPortalFx.Base.UriBuilder(r+"/GetSpecsCostsAsync"),i=Q.defer();return MsPortalFx.Base.Net.ajax(
{uri:u.toString(),type:"POST",data:JSON.stringify(n),contentType:"application/json"}).then(function(
n){i.resolve(n)},function(t){var r="Failed to get spec cost information for subscriptionId {0}, specResourceSets {1} and specsToAllowZeroCost {2}.".
format(n.subscriptionId,ko.toJSON(n.specResourceSets),ko.toJSON(n.specsToAllowZeroCost));MsPortalFx.
Base.Diagnostics.Log.writeEntry(2,"GetSpecsCost",r);i.reject(new Error("Could not get cost "+t.responseText))}
),i.promise}function t(n,t){if(n===undefined||n===null)throw new Error("'{0}' cannot be null or undefined.".
format(t));}var a=f,s=MsPortalFx.Base.Resources.getImages(BillingExtension.Resources.Images.Billing),
e,o;n.iconUri=s.icon;e=function(){function n(){}return n.getContext=function(){return n._billingContext||
(n._billingContext=new o),n._billingContext},n}();n.BillingDataContextFactory=e;o=function(){function n(
){this._billingDataContext=new i.BillingDataContext}return n.prototype.dispose=function(){this._billingDataContext&&
(this._billingDataContext.dispose(),this._billingDataContext=null)},n.prototype.getBillingDataContext=
function(){return this._billingDataContext},n}();n.DataContext=o;n.BillingSubscriptionsBrowseService=
r.BillingSubscriptionsBrowseService;n.BillingSubscriptionsGridColumnsService=u.BillingSubscriptionsGridColumnsService;
n.getSubscriptionSummaryDataFromId=h;n.getBillingSubscriptionIds=c;n.getSpecsCosts=l;n.notNull=t}(e||
(e={})),e});define("BillingExtension/Billing/DataContexts/BillingDataContext",["require","exports","../HubsData",
"../BillingHelper","../Models/BillingData","BillingExtension/Billing/BillingClientStrings","../../_generated/ExtensionDefinition"],
function(n,t,i,r,u,f,e){var o;return function(n){"use strict";function h(n){return{id:ko.observable(
n.subscriptionID),subscriptionName:ko.observable(n.subscriptionName),encodedCommerceId:ko.observable(
""),currentBillingPeriodStartDate:ko.observable(t.noDataValue),currentBillingPeriod:ko.observable(t.
noDataValue),formattedRemainingCredit:ko.observable(t.noDataValue),daysLeftInBillingPeriod:ko.observable(
0),daysInCurrentBillingPeriod:ko.observable(0),isAccountAdmin:ko.observable(!1),subscriptionTypeInfo:
ko.observable({type:ko.observable(7),displayType:ko.observable(t.noDataValue)}),displayStatus:ko.observable(
4),monetaryCreditInfo:ko.observable(null),purchaseDate:ko.observable(t.noDataValue),orderId:ko.observable(
t.noDataValue),paymentInstrument:ko.observable(null),monetaryCommitmentInfo:ko.observable(null),managementTeamInfo:
ko.observable(null),currentStatement:ko.observable(null),thirdPartyCurrentStatement:ko.observable(null),
notifications:ko.observableArray([{notificationType:ko.observable(8),descriptionArgs:ko.observableArray(
[t.windowsAzureBillingSupportUri])}]),currency:ko.observable(""),retrievalDate:ko.observable(new Date),
paymentAmountInfo:ko.observable(null),thirdPartyPaymentAmountInfo:ko.observable(null),isLoaded:ko.observable(
!0),offerCategories:ko.observableArray([]),isRdfeSubscriptionId:ko.observable(!1)}}var t,o,s;n.__dummyForTypeScriptCompilerBug;
t=f;o=function(){function n(){this._deferred=$.Deferred();this._promise=this._deferred.promise()}return n.
prototype.resolve=function(){this._deferred.resolve()},n.prototype.loadPromise=function(){return this.
_promise},n.prototype.reject=function(){this._deferred.fail()},n}();n.BillingSubscriptionLoadStatus=
o;s=function(){function n(){var f=this,r,e,o;if(this._loadDeferred=$.Deferred(),this._subscriptionLoadStatus=
{},this._subscriptionsProgressDeferred=$.Deferred(),e=i.HubsDataFactory.getSubscriptionsData(),n._initializedSingleton)
throw new Error("BillingDataContext is a static, singleton class.");n._initializedSingleton=!0;this.
_loadPromise=this._loadDeferred.promise();this._subscriptionsProgressPromise=this._subscriptionsProgressDeferred.
promise();r=new u.BillingSummaryData;r.totalAmountDue=ko.observable(t.noDataValue);r.thirdPartyTotalAmountDue=
ko.observable(t.noDataValue);r.thirdPartyTotalAmountDueNumber=ko.observable(-1);r.currency=ko.observable(
);r.dueDate=ko.observable(t.noDataValue);r.billingDataAvailable=ko.observable(!0);r.dueDateForPreviousCycle=
ko.observable(t.noDataValue);r.totalAmountDueForPreviousCycle=ko.observable(t.noDataValue);r.dueDateForFutureCycle=
ko.observable(t.noDataValue);r.totalAmountDueForFutureCycle=ko.observable(t.noDataValue);r.subscriptions=
ko.observableArray([]);r.unresolvedSubscriptions=ko.observableArray([]);this._dataSet=MsPortalFx.Data.
Loader.getDataSet(n._dataSetName,n._typeName,r);this.dataReady=ko.observable(!1);this.billingSummary=
this._dataSet.data();e.loadPromise.then(function(){o=e.subscriptions;f._lifetime=new MsPortalFx.Internal.
Base.TriggerableLifetimeManager;f._billingSummaryComputed=ko.computed(f._lifetime,function(){f._loadDeferred.
resolve();var n=o();n&&f._loadBillingSummary(n.subscriptions)})})}return n.registerMetadata=function(
){MsPortalFx.Data.Metadata.setTypeMetadata(n._typeName,{properties:{subscriptions:{itemType:n._subscriptionsTypeName}}});
MsPortalFx.Data.Metadata.setTypeMetadata(n._subscriptionsTypeName,{})},n.prototype.dispose=function(
){this._billingSummaryComputed&&(this._billingSummaryComputed.dispose(),this._lifetime.dispose(),this.
_billingSummaryComputed=null,this._lifetime=null)},Object.defineProperty(n.prototype,"loadPromise",{
get:function(){return this._loadPromise},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"subscriptionsProgressPromise",{get:function(){return this._subscriptionsProgressPromise},enumerable:
!0,configurable:!0}),n.prototype.forceRefresh=function(){MsPortalFx.Data.Loader.forceRefresh(n._dataSetName)}
,n.prototype.getSubscriptionLoadPromiseFromId=function(n){var i,t,r;if(n)i=this._getSubscriptionLoadStausFromId(
n);else return t=$.Deferred(),r=t.promise(),t.resolve(),r;return i.loadPromise()},n.prototype.getSubscriptionDetailsFromId=
function(n){var t=this.billingSummary.subscriptions();return t.first(function(t){return t.id()===n})}
,n.prototype.getSubscriptionSummaryDataFromId=function(n){var t=this.getSubscriptionDetailsFromId(n);
return t?r.BillingHelper.getSubscriptionSummaryData(t):null},n.prototype.getBillingSubscriptionFromId=
function(n){var t=this.getSubscriptionDetailsFromId(n);return t?r.BillingHelper.getBillingSubscription(
t):null},n.prototype._getSubscriptionLoadStausFromId=function(n){var t;if(n)return t=this._subscriptionLoadStatus[
n],t||(t=new o,this._subscriptionLoadStatus[n]=t),t},n.prototype._loadBillingSummary=function(t){var
u=this,f,r=t.filter(function(n){return!!n&&!!n.subscriptionID}),i=r.map(function(n){return n.subscriptionID}
);f=MsPortalFx.Data.Loader.getData({uri:MsPortalFx.Base.Resources.getAppRelativeUri("/api/Billing/RetrieveSumaryData"),
dataSetName:n._dataSetName,ajaxData:i,loaderOptions:{fetchData:function(n,t){return MsPortalFx.Base.
Net.ajax({uri:t,type:"POST",data:ko.toJSON(i),contentType:"application/json;charset=utf-8"})},processResult:
[function(n,t){var i,r;if(t.data&&(i=t.data.subscriptions,i))for(r=0;r<i.length;r++)i[r].isRdfeSubscriptionId=
ko.observable(!1),i[r].isLoaded=ko.observable(!1);return!0}]},pollFrequency:1});f.then(function(){u.
_onSummaryDataLoaded(r,i)},function(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"billing","There was an error getting billing data. Error: {0}".
format(n));u._onSummaryDataLoaded(r,i)})},n.prototype._onSummaryDataLoaded=function(n,t){var i=this,
u=this.billingSummary.subscriptions(),f=this.billingSummary.unresolvedSubscriptions(),e=n.filter(function(
n){return f.indexOf(n.subscriptionID)>=0}),r=e.map(h);r.forEach(function(n){var t=i._getSubscriptionLoadStausFromId(
n.id());t.resolve();n.isLoaded(!0)});this.billingSummary.subscriptions().forEach(function(n){i._loadSubscriptionDetails(
n)});this.billingSummary.subscriptions(u.concat(r));this.billingSummary.subscriptions().forEach(function(
n){var r=function(){return!!t.first(function(t){return t===n.id()})};n.isRdfeSubscriptionId(r(n.id()));
n.notifications().forEach(function(t){t.notificationType()!==8&&i._publishNotification(n,t)})});this.
dataReady(!0)},n.prototype._loadSubscriptionDetails=function(t){var i=this,r,o,u=n._subscriptionDataSetPrefix+
t.id(),f,s=MsPortalFx.Base.Resources.getAppRelativeUri("/api/Billing/RetrieveSubscriptionData"),e=this.
_getSubscriptionLoadStausFromId(t.id());f={dataSetName:u,uri:s,pollFrequency:1,loaderOptions:{fetchData:
function(n,i){return MsPortalFx.Base.Net.ajax({uri:i,type:"POST",contentType:"application/json",data:
ko.toJSON(t)})}}};o=MsPortalFx.Data.Loader.getDataSet(u,"BillingSummary",t);r=MsPortalFx.Data.Loader.
getData(f);r.done(function(){e.resolve();t.isLoaded(!0);i._calculateSummary()}).fail(function(n){e.reject(
);t.isLoaded(!0);MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"billing","There was an error getting billing data for subscription: {0}. Error: {1}".
format(t.id(),n));i._calculateSummary()})},n.prototype._calculateSummary=function(){var n=this,f=0,e=
0,o=0,r=0,s,l=MsPortalFx.Base.Resources.getAppRelativeUri("/api/Billing/FormatAsCurrency"),h=new MsPortalFx.
Base.UriBuilder(l),t={},i=undefined,u=0,c=0;this.billingSummary.subscriptions().forEach(function(n){
n.isLoaded()&&++u});u>=this.billingSummary.subscriptions().length?(this.billingSummary.subscriptions(
).forEach(function(n){!n.paymentAmountInfo()||!n.isAccountAdmin()||(f+=n.paymentAmountInfo().nextAmountDue(
),e+=n.paymentAmountInfo().futureAmountDue(),o+=n.paymentAmountInfo().previousAmountDue(),i||(i=n.id(
)));!n.thirdPartyCurrentStatement()||(r+=n.thirdPartyCurrentStatement().totalAmount())}),i?(this.billingSummary.
thirdPartyTotalAmountDueNumber(r),t.totalAmountDue=f,t.totalAmountDueForFutureCycle=e,t.totalAmountDueForPreviousCycle=
o,t.thirdPartyTotalAmountDue=r,h.query.setParameters({adminSubscriptionId:i}),s=h.toString(),MsPortalFx.
Base.Net.ajax({uri:s,type:"POST",contentType:"application/json",data:ko.toJSON(t)}).done(function(t)
{n.billingSummary.totalAmountDue(t.totalAmountDue);n.billingSummary.totalAmountDueForFutureCycle(t.totalAmountDueForFutureCycle);
n.billingSummary.totalAmountDueForPreviousCycle(t.totalAmountDueForPreviousCycle);n.billingSummary.thirdPartyTotalAmountDue(
t.thirdPartyTotalAmountDue);n._subscriptionsProgressDeferred.resolve()})):this._subscriptionsProgressDeferred.
resolve()):(c=100*(u/this.billingSummary.subscriptions().length),this._subscriptionsProgressDeferred.
notify({percent:c}))},n.prototype._publishNotification=function(n,i){var o=i.notificationType(),u={title:
t.noData,message:t.noDataValue,status:0},s=r.BillingHelper.getDetailsBladeForSubscription(n.subscriptionTypeInfo(
).type()),f=[];f.push(n.subscriptionName());i.descriptionArgs&&i.descriptionArgs()&&i.descriptionArgs(
).forEach(function(n){f.push(n)});r.getNotificationProperties(o,u);MsPortalFx.Hubs.Notifications.ClientNotification.
publish({title:u.title,description:u.message.format(f),status:u.status,asset:{extensionName:e.definitionName,
assetType:"Show"+s,assetId:n.id()}})},n._typeName="billingSummaryData",n._subscriptionsTypeName="billingSummaryDataSubscriptions",
n._dataSetName="billingDataSet",n._subscriptionDataSetPrefix="billingSubscription_",n._initializedSingleton=
!1,n}();n.BillingDataContext=s;s.registerMetadata()}(o||(o={})),o});define("BillingExtension/_generated/ExtensionDefinition",
["require","exports","BillingExtension/Billing/BillingClientStrings"],function(n,t,i){var r;return function(
n){function u(){if(r.definition){var n=r.definition;return r.definition=null,n}throw new Error("Extension definition is no longer available.");
}var r,f,t,e,o;(function(n){var t={name:"Microsoft_Azure_Billing",version:"1.0",hash:"k6f3qT/U78oFkiaYG9ASo/PdJxivPomqYoOOqJiPe20=",
schemaVersion:"1.0.0.0",sdkVersion:"5.0.1.121 (0d587ec.150221-0937)",partsCatalog:[{name:"BillingStartBoardTile",
viewModel:"Billing$BillingStartBoardTileViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc20740fbdb180451abe4d08a57a71f418",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],
initialSize:3,supportedSizes:[3],viewStateProperties:null},{name:"BillingSubscriptionDetail",viewModel:
"Billing$BillingSubscriptionDetailViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc2128800a4e7c498086744ccccdc0e34f",
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],
initialSize:3,supportedSizes:[3],viewStateProperties:null},{name:"BillingTile",viewModel:"Billing$BillingTileViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc97e8108ebd8e4ec5af34e031f4226802",details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"container.selectable.value"}]}]}],initialSize:3,supportedSizes:
[3],viewStateProperties:null},{name:"SubscriptionStatus",viewModel:"Billing$SubscriptionStatusViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc0843a25607a74d62bfbe9338070f33fc",details:[],initialSize:
3,supportedSizes:[3],viewStateProperties:null},{name:"DaysRemaining",viewModel:"Billing$DaysRemainingViewModel",
partKind:27,inputs:[],bindings:[],details:[],initialSize:2,viewStateProperties:null},{name:"PaymentInstrument",
viewModel:"Billing$PaymentInstrumentViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:"pdcea44f36e84384d0e8d9e9f0681b77eb4",
details:[],viewStateProperties:null},{name:"PreviousRunningCosts",viewModel:"Billing$PreviousRunningCostsViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdcb3607f4e7fee4efc96492fe98a6a8ba1",details:[{blade:
"PreviousRunningCostsDetailBlade"}],initialSize:2,supportedSizes:[2],viewStateProperties:null},{name:
"CurrentRunningCosts",viewModel:"Billing$CurrentRunningCostsViewModel",partKind:0,inputs:[],bindings:
[],htmlTemplate:"pdc818de95f1e41474e9aaa9b03d6864e99",details:[{blade:"CurrentRunningCostsDetailBlade"}],
initialSize:2,supportedSizes:[2],viewStateProperties:null},{name:"FutureRunningCosts",viewModel:"Billing$FutureRunningCostsViewModel",
partKind:0,inputs:[],bindings:[],htmlTemplate:"pdc89617c2d8e654e0288f7020cc5e5bf79",details:[{blade:
"FutureRunningCostsDetailBlade"}],initialSize:2,supportedSizes:[2],viewStateProperties:null},{name:"CurrentSpend",
viewModel:"Billing$CurrentSpendViewModel",partKind:0,inputs:["subscriptionId","resourceName","resourceUsageUri"],
bindings:[{property:"subscriptionId",valuesFrom:[{referenceType:1,property:"subscriptionId"}]},{property:
"resourceName",valuesFrom:[{referenceType:1,property:"resourceName"}]},{property:"resourceUsageUri",
valuesFrom:[{referenceType:1,property:"resourceUsageUri"}]}],htmlTemplate:"pdcbbd66ae935a64bf5adc5d7a3847a119c",
details:[{blade:"CurrentSpendBlade",selectableBindings:[{property:"subscriptionId",valuesFrom:[{referenceType:
0,property:"content.subscriptionId"}]},{property:"resourceName",valuesFrom:[{referenceType:0,property:
"content.resourceName"}]},{property:"resourceType",valuesFrom:[{referenceType:0,property:"content.resourceType"}]}],
additionalInputArguments:[{property:"currentSpendBreakdowns",valuesFrom:[{referenceType:0,property:"content.currentSpendBreakdowns"}]}]}],
initialSize:2,supportedSizes:[1,2],viewStateProperties:null},{name:"ResourceGroupCurrentSpend",viewModel:
"Billing$ResourceGroupCurrentSpendViewModel",partKind:14,inputs:[],bindings:[],details:[{selectablePath:
"content.selectableData",blade:"CurrentSpendBlade",selectableBindings:[{property:"subscriptionId",valuesFrom:
[{referenceType:0,property:"content.subscriptionId"}]},{property:"resourceName",valuesFrom:[{referenceType:
6,property:"name"}]},{property:"resourceType",valuesFrom:[{referenceType:6,property:"type"}]},{property:
"currentSpendBreakdowns",valuesFrom:[{referenceType:6,property:"currentSpendBreakdowns"}]}]}],viewStateProperties:
null},{name:"SubscriptionPropertiesLauncher",viewModel:"Billing$SubscriptionPropertiesLauncherViewModel",
partKind:20,inputs:[],bindings:[],details:[{blade:"SubscriptionPropertiesBlade",additionalInputArguments:
[{property:"id",valuesFrom:[{referenceType:0,property:"content.selectedSubscriptionId"}]}]}],initialSize:
1,viewStateProperties:null},{name:"CurrentCostByResource",viewModel:"Billing$CurrentCostByResourceViewModel",
partKind:28,inputs:[],bindings:[],details:[{blade:"CostByResourceDetailBlade",selectableBindings:[{property:
"selectedSubscriptionId",valuesFrom:[{referenceType:0,property:"content.selectedSubscriptionId"}]}]}],
initialSize:5,viewStateProperties:null},{name:"QuickStartSubscription",viewModel:"Billing$QuickStartSubscriptionViewModel",
partKind:21,inputs:[],bindings:[],details:[{blade:"QuickStartSubscriptionBlade",additionalInputArguments:
[{property:"id",valuesFrom:[{referenceType:0,property:"content.selectedSubscriptionId"}]}]}],initialSize:
1,viewStateProperties:null},{assetType:"ShowCreditSubscriptionDetailBlade",assetIdInputProperty:"selectedSubscriptionId",
name:"CommitmentSubscriptionDetailLauncher",viewModel:"Billing$BaseSubscriptionDetailLauncherViewModel",
partKind:20,inputs:["id"],bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,
property:"id"}]}],details:[{blade:"CommitmentSubscriptionDetailBlade",selectableBindings:[{property:
"id",valuesFrom:[{referenceType:0,property:"content.selectedSubscriptionId"}]}]}],initialSize:2,viewStateProperties:
null},{assetType:"ShowCreditSubscriptionDetailBlade",assetIdInputProperty:"selectedSubscriptionId",name:
"CreditSubscriptionDetailLauncher",viewModel:"Billing$BaseSubscriptionDetailLauncherViewModel",partKind:
20,inputs:["id"],bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:
"id"}]}],details:[{blade:"CreditSubscriptionDetailBlade",selectableBindings:[{property:"id",valuesFrom:
[{referenceType:0,property:"content.selectedSubscriptionId"}]}]}],initialSize:2,viewStateProperties:
null},{assetType:"ShowConsumptionSubscriptionDetailBlade",assetIdInputProperty:"selectedSubscriptionId",
name:"ConsumptionSubscriptionDetailLauncher",viewModel:"Billing$BaseSubscriptionDetailLauncherViewModel",
partKind:20,inputs:["id"],bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,
property:"id"}]}],details:[{blade:"ConsumptionSubscriptionDetailBlade",selectableBindings:[{property:
"id",valuesFrom:[{referenceType:0,property:"content.selectedSubscriptionId"}]}]}],initialSize:2,viewStateProperties:
null},{assetType:"ShowSupportSubscriptionDetailBlade",assetIdInputProperty:"selectedSubscriptionId",
name:"SupportSubscriptionDetailLauncher",viewModel:"Billing$BaseSubscriptionDetailLauncherViewModel",
partKind:20,inputs:["id"],bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,
property:"id"}]}],details:[{blade:"SupportSubscriptionDetailBlade",selectableBindings:[{property:"id",
valuesFrom:[{referenceType:0,property:"content.selectedSubscriptionId"}]}]}],initialSize:2,viewStateProperties:
null},{assetType:"ShowFreeTierSubscriptionDetailBlade",assetIdInputProperty:"selectedSubscriptionId",
name:"FreeTierSubscriptionDetailLauncher",viewModel:"Billing$BaseSubscriptionDetailLauncherViewModel",
partKind:20,inputs:["id"],bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,
property:"id"}]}],details:[{blade:"FreeTierSubscriptionDetailBlade",selectableBindings:[{property:"id",
valuesFrom:[{referenceType:0,property:"content.selectedSubscriptionId"}]}]}],initialSize:2,viewStateProperties:
null},{assetType:"ShowOtherSubscriptionDetailBlade",assetIdInputProperty:"selectedSubscriptionId",name:
"OtherSubscriptionDetailLauncher",viewModel:"Billing$BaseSubscriptionDetailLauncherViewModel",partKind:
20,inputs:["id"],bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:
"id"}]}],details:[{blade:"OtherSubscriptionDetailBlade",selectableBindings:[{property:"id",valuesFrom:
[{referenceType:0,property:"content.selectedSubscriptionId"}]}]}],initialSize:2,viewStateProperties:
null},{assetType:"ShowEASubscriptionDetailBlade",assetIdInputProperty:"selectedSubscriptionId",name:
"EASubscriptionDetailLauncher",viewModel:"Billing$BaseSubscriptionDetailLauncherViewModel",partKind:
20,inputs:["id"],bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:
"id"}]}],details:[{blade:"EASubscriptionDetailBlade",additionalInputArguments:[{property:"id",valuesFrom:
[{referenceType:0,property:"content.selectedSubscriptionId"}]}]}],initialSize:2,viewStateProperties:
null},{name:"RunningCostsChart",viewModel:"Billing$RunningCostsChartViewModel",partKind:26,inputs:[],
bindings:[],details:[],initialSize:5,viewStateProperties:null},{name:"ThirdPartyRunningCostsChart",viewModel:
"Billing$ThirdPartyRunningCostsChartViewModel",partKind:26,inputs:[],bindings:[],details:[{blade:"ThirdPartyRunningCostsDetailBlade"}],
initialSize:5,viewStateProperties:null},{name:"UpgradeSubscriptionPart",viewModel:"Billing$UpgradeSubscriptionPartViewModel",
partKind:20,inputs:["provisioningOptions"],bindings:[{property:"provisioningOptions",valuesFrom:[{referenceType:
1,property:"provisioningOptions"}]}],details:[{blade:"UpgradeSubscriptionBlade",additionalInputArguments:
[{property:"subscriptionId",valuesFrom:[{referenceType:0,property:"content.subscriptionId"}]}]}],initialSize:
0,viewStateProperties:null}],blades:[{bindings:[],locked:!0,pinnedPart:"BillingTile",pinnable:!0,name:
"BillingBlade",lenses:[{title:null,name:"BillingMainLens",partInstances:[{name:"SubscriptionsList",inline:
{name:null,viewModel:"Billing$BillingListViewModel",partKind:14,inputs:[],bindings:[],details:[],initialSize:
7,viewStateProperties:null}}]}],viewModelName:"Billing$BillingBladeViewModel"},{bindings:[],pinnedPart:
"BillingTile",pinnable:!0,style:2,name:"SubscriptionsBlade",lenses:[{title:i.subscriptionsOverview,name:
"SubscriptionsLens",partInstances:[{name:"MySubscriptionsList",inline:{name:null,viewModel:"Billing$MySubscriptionsGridViewModel",
partKind:14,inputs:[],bindings:[],details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,
property:"content.selectableData"}]}]}],initialSize:8,viewStateProperties:null}}]}],viewModelName:"Billing$SubscriptionsBladeViewModel"},
{bindings:[],pinnedPart:"BillingTile",pinnable:!0,style:2,name:"BillingSummaryBlade",lenses:[{title:
i.myAccountsOverview,name:"myAccountsChargesLens",partInstances:[{name:"b_BillingSummaryBlade_part1",
reference:{partTypeName:"RunningCostsChart",bindings:[]}},{name:"b_BillingSummaryBlade_part2",reference:
{partTypeName:"PreviousRunningCosts",bindings:[]}},{name:"b_BillingSummaryBlade_part3",reference:{partTypeName:
"CurrentRunningCosts",bindings:[]}},{name:"b_BillingSummaryBlade_part4",reference:{partTypeName:"FutureRunningCosts",
bindings:[]}},{name:"b_BillingSummaryBlade_part5",reference:{partTypeName:"ThirdPartyRunningCostsChart",
bindings:[]}}]},{title:i.subscriptionsOverview,name:"SubscriptionsLens",partInstances:[{name:"MySubscriptionsList",
inline:{name:null,viewModel:"Billing$MySubscriptionsGridViewModel",partKind:14,inputs:[],bindings:[],
details:[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selectableData"}]}]}],
initialSize:8,viewStateProperties:null}}]}],viewModelName:"Billing$BillingSummaryBladeViewModel"},{inputs:
["id"],templateKeyInputs:["id"],assetType:"ShowCreditSubscriptionDetailBlade",assetIdInputProperty:"selectedSubscriptionId",
name:"CreditSubscriptionDetailBlade",lenses:[{title:i.serviceManagement,name:"ServiceManagementLens",
partInstances:[{name:"b_CreditSubscriptionDetailBlade_part1",reference:{partTypeName:"SubscriptionStatus",
bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]}},{name:
"b_CreditSubscriptionDetailBlade_part2",reference:{partTypeName:"DaysRemaining",bindings:[{property:
"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]}},{name:"BurnRateCredit",inline:
{name:null,viewModel:"Billing$BurnRateChartCreditViewModel",partKind:26,inputs:["selectedSubscriptionId"],
bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}],details:
[],initialSize:5,viewStateProperties:null}}]},{title:i.costs,name:"CostsLens",partInstances:[{name:"b_CreditSubscriptionDetailBlade_part3",
reference:{partTypeName:"CurrentCostByResource",bindings:[{property:"selectedSubscriptionId",valuesFrom:
[{referenceType:1,property:"id"}]}]}}]},{title:i.details,name:"DetailsLens",partInstances:[{name:"b_CreditSubscriptionDetailBlade_part4",
reference:{partTypeName:"PaymentInstrument",bindings:[{property:"selectedSubscriptionId",valuesFrom:
[{referenceType:1,property:"id"}]}]}},{name:"QuickStart",reference:{partTypeName:"QuickStartSubscription",
bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:
2}},{name:"Properties",reference:{partTypeName:"SubscriptionPropertiesLauncher",bindings:[{property:
"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:2}}]},{title:i.access,
name:"Access",partInstances:[{name:"Roles",reference:{partTypeName:"RolesPart",extension:"Microsoft_Azure_AD",
bindings:[{property:"scope",valuesFrom:[{referenceType:3,property:"content.subscriptionUri"}]}],initialSize:
2}},{name:"Users",reference:{partTypeName:"UsersPart",extension:"Microsoft_Azure_AD",bindings:[{property:
"scope",valuesFrom:[{referenceType:3,property:"content.subscriptionUri"}]}],initialSize:3}}]}],viewModelName:
"Billing$CreditSubscriptionDetailBladeViewModel",viewModelInputs:[{property:"selectedSubscriptionId",
valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["id"],templateKeyInputs:["id"],assetType:"ShowFreeTierSubscriptionDetailBlade",
assetIdInputProperty:"selectedSubscriptionId",name:"FreeTierSubscriptionDetailBlade",lenses:[{title:
i.serviceManagement,name:"ServiceManagementLens",partInstances:[{name:"b_FreeTierSubscriptionDetailBlade_part1",
reference:{partTypeName:"SubscriptionStatus",bindings:[{property:"selectedSubscriptionId",valuesFrom:
[{referenceType:1,property:"id"}]}]}}]},{title:i.details,name:"DetailsLens",partInstances:[{name:"b_FreeTierSubscriptionDetailBlade_part2",
reference:{partTypeName:"PaymentInstrument",bindings:[{property:"selectedSubscriptionId",valuesFrom:
[{referenceType:1,property:"id"}]}]}},{name:"QuickStart",reference:{partTypeName:"QuickStartSubscription",
bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:
2}},{name:"Properties",reference:{partTypeName:"SubscriptionPropertiesLauncher",bindings:[{property:
"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:2}}]},{title:i.access,
name:"Access",partInstances:[{name:"Roles",reference:{partTypeName:"RolesPart",extension:"Microsoft_Azure_AD",
bindings:[{property:"scope",valuesFrom:[{referenceType:3,property:"content.subscriptionUri"}]}],initialSize:
2}},{name:"Users",reference:{partTypeName:"UsersPart",extension:"Microsoft_Azure_AD",bindings:[{property:
"scope",valuesFrom:[{referenceType:3,property:"content.subscriptionUri"}]}],initialSize:3}}]}],viewModelName:
"Billing$FreeTierSubscriptionDetailBladeViewModel",viewModelInputs:[{property:"selectedSubscriptionId",
valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["id"],templateKeyInputs:["id"],assetType:"ShowOtherSubscriptionDetailBlade",
assetIdInputProperty:"selectedSubscriptionId",name:"OtherSubscriptionDetailBlade",lenses:[{title:i.serviceManagement,
name:"ServiceManagementLens",partInstances:[{name:"b_OtherSubscriptionDetailBlade_part1",reference:{
partTypeName:"SubscriptionStatus",bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:
1,property:"id"}]}]}},{name:"b_OtherSubscriptionDetailBlade_part2",reference:{partTypeName:"DaysRemaining",
bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]}}]},{title:
i.details,name:"DetailsLens",partInstances:[{name:"b_OtherSubscriptionDetailBlade_part3",reference:{
partTypeName:"PaymentInstrument",bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:
1,property:"id"}]}]}},{name:"QuickStart",reference:{partTypeName:"QuickStartSubscription",bindings:[
{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:2}},{name:
"Properties",reference:{partTypeName:"SubscriptionPropertiesLauncher",bindings:[{property:"selectedSubscriptionId",
valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:2}}]},{title:i.access,name:"Access",partInstances:
[{name:"Roles",reference:{partTypeName:"RolesPart",extension:"Microsoft_Azure_AD",bindings:[{property:
"scope",valuesFrom:[{referenceType:3,property:"content.subscriptionUri"}]}],initialSize:2}},{name:"Users",
reference:{partTypeName:"UsersPart",extension:"Microsoft_Azure_AD",bindings:[{property:"scope",valuesFrom:
[{referenceType:3,property:"content.subscriptionUri"}]}],initialSize:3}}]}],viewModelName:"Billing$OtherSubscriptionDetailBladeViewModel",
viewModelInputs:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]},
{inputs:["id"],templateKeyInputs:["id"],assetType:"ShowCommitmentSubscriptionDetailBlade",assetIdInputProperty:
"selectedSubscriptionId",name:"CommitmentSubscriptionDetailBlade",lenses:[{title:i.serviceManagement,
name:"ServiceManagementLens",partInstances:[{name:"b_CommitmentSubscriptionDetailBlade_part1",reference:
{partTypeName:"SubscriptionStatus",bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:
1,property:"id"}]}]}},{name:"b_CommitmentSubscriptionDetailBlade_part2",reference:{partTypeName:"DaysRemaining",
bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]}},{name:
"BurnRateCommitment",inline:{name:null,viewModel:"Billing$BurnRateChartCommitmentViewModel",partKind:
26,inputs:["selectedSubscriptionId"],bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:
1,property:"id"}]}],details:[],initialSize:5,viewStateProperties:null}}]},{title:i.costs,name:"CostsLens",
partInstances:[{name:"b_CommitmentSubscriptionDetailBlade_part3",reference:{partTypeName:"CurrentCostByResource",
bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]}}]},{title:
i.details,name:"DetailsLens",partInstances:[{name:"b_CommitmentSubscriptionDetailBlade_part4",reference:
{partTypeName:"PaymentInstrument",bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:
1,property:"id"}]}]}},{name:"QuickStart",reference:{partTypeName:"QuickStartSubscription",bindings:[
{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:2}},{name:
"Properties",reference:{partTypeName:"SubscriptionPropertiesLauncher",bindings:[{property:"selectedSubscriptionId",
valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:2}}]},{title:i.access,name:"Access",partInstances:
[{name:"Roles",reference:{partTypeName:"RolesPart",extension:"Microsoft_Azure_AD",bindings:[{property:
"scope",valuesFrom:[{referenceType:3,property:"content.subscriptionUri"}]}],initialSize:2}},{name:"Users",
reference:{partTypeName:"UsersPart",extension:"Microsoft_Azure_AD",bindings:[{property:"scope",valuesFrom:
[{referenceType:3,property:"content.subscriptionUri"}]}],initialSize:3}}]}],viewModelName:"Billing$CommitmentSubscriptionDetailBladeViewModel",
viewModelInputs:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]},
{inputs:["id"],templateKeyInputs:["id"],assetType:"ShowConsumptionSubscriptionDetailBlade",assetIdInputProperty:
"selectedSubscriptionId",name:"ConsumptionSubscriptionDetailBlade",lenses:[{title:i.serviceManagement,
name:"ServiceManagementLens",partInstances:[{name:"b_ConsumptionSubscriptionDetailBlade_part1",reference:
{partTypeName:"SubscriptionStatus",bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:
1,property:"id"}]}]}},{name:"b_ConsumptionSubscriptionDetailBlade_part2",reference:{partTypeName:"DaysRemaining",
bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]}},{name:
"BurnRateConsumption",inline:{name:null,viewModel:"Billing$BurnRateChartConsumptionViewModel",partKind:
26,inputs:["selectedSubscriptionId"],bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:
1,property:"id"}]}],details:[],initialSize:5,viewStateProperties:null}}]},{title:i.costs,name:"CostsLens",
partInstances:[{name:"b_ConsumptionSubscriptionDetailBlade_part3",reference:{partTypeName:"CurrentCostByResource",
bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]}}]},{title:
i.details,name:"DetailsLens",partInstances:[{name:"b_ConsumptionSubscriptionDetailBlade_part4",reference:
{partTypeName:"PaymentInstrument",bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:
1,property:"id"}]}]}},{name:"QuickStart",reference:{partTypeName:"QuickStartSubscription",bindings:[
{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:2}},{name:
"Properties",reference:{partTypeName:"SubscriptionPropertiesLauncher",bindings:[{property:"selectedSubscriptionId",
valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:2}}]},{title:i.access,name:"Access",partInstances:
[{name:"Roles",reference:{partTypeName:"RolesPart",extension:"Microsoft_Azure_AD",bindings:[{property:
"scope",valuesFrom:[{referenceType:3,property:"content.subscriptionUri"}]}],initialSize:2}},{name:"Users",
reference:{partTypeName:"UsersPart",extension:"Microsoft_Azure_AD",bindings:[{property:"scope",valuesFrom:
[{referenceType:3,property:"content.subscriptionUri"}]}],initialSize:3}}]}],viewModelName:"Billing$ConsumptionSubscriptionDetailBladeViewModel",
viewModelInputs:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]},
{inputs:["id"],templateKeyInputs:["id"],assetType:"ShowSupportSubscriptionDetailBlade",assetIdInputProperty:
"selectedSubscriptionId",name:"SupportSubscriptionDetailBlade",lenses:[{title:i.serviceManagement,name:
"ServiceManagementLens",partInstances:[{name:"b_SupportSubscriptionDetailBlade_part1",reference:{partTypeName:
"SubscriptionStatus",bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:
"id"}]}]}},{name:"b_SupportSubscriptionDetailBlade_part2",reference:{partTypeName:"DaysRemaining",bindings:
[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]}}]},{title:i.details,
name:"DetailsLens",partInstances:[{name:"b_SupportSubscriptionDetailBlade_part3",reference:{partTypeName:
"PaymentInstrument",bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:
"id"}]}]}},{name:"QuickStart",reference:{partTypeName:"QuickStartSubscription",bindings:[{property:"selectedSubscriptionId",
valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:2}},{name:"Properties",reference:{partTypeName:
"SubscriptionPropertiesLauncher",bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:
1,property:"id"}]}],initialSize:2}}]},{title:i.access,name:"Access",partInstances:[{name:"Roles",reference:
{partTypeName:"RolesPart",extension:"Microsoft_Azure_AD",bindings:[{property:"scope",valuesFrom:[{referenceType:
3,property:"content.subscriptionUri"}]}],initialSize:2}},{name:"Users",reference:{partTypeName:"UsersPart",
extension:"Microsoft_Azure_AD",bindings:[{property:"scope",valuesFrom:[{referenceType:3,property:"content.subscriptionUri"}]}],
initialSize:3}}]}],viewModelName:"Billing$SupportSubscriptionDetailBladeViewModel",viewModelInputs:[
{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["selectedSubscriptionId"],
templateKeyInputs:["selectedSubscriptionId"],locked:!0,name:"CostByResourceDetailBlade",lenses:[{title:
null,name:"CostByResourceGrid",partInstances:[{name:"CostByResourceGridPart",inline:{name:null,viewModel:
"Billing$CostByResourceGridViewModel",partKind:14,inputs:["selectedSubscriptionId"],bindings:[{property:
"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"selectedSubscriptionId"}]}],details:
[],initialSize:8,viewStateProperties:null}}]}],viewModelName:"Billing$CostByResourceDetailBladeViewModel"},
{inputs:["id"],width:1,locked:!0,assetType:"ShowEASubscriptionDetailBlade",assetIdInputProperty:"id",
style:4,name:"EASubscriptionDetailBlade",lenses:[{title:null,name:"EASubscriptionDetailBlade_lens1",
partInstances:[{name:"NoticePart",inline:{name:null,viewModel:"Billing$EASubscriptionViewModel",partKind:
0,inputs:["id"],bindings:[{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}],htmlTemplate:
"pdc8c3cb470cd974a86a50fc1bc9e9cf180",details:[],initialSize:9,supportedSizes:[9],viewStateProperties:
null}}]}],viewModelName:"Billing$EASubscriptionDetailBladeViewModel",viewModelInputs:[{property:"id",
valuesFrom:[{referenceType:1,property:"id"}]}]},{width:1,locked:!0,style:4,name:"BillingNoSubscriptionsBlade",
lenses:[{title:null,name:"BillingNoSubscriptionsBlade_lens1",partInstances:[{name:"NoticePart",inline:
{name:null,viewModel:"Billing$BillingNoSubscriptionsViewModel",partKind:0,inputs:[],bindings:[],htmlTemplate:
"pdcc7acf58741a841e8af2d0a489328a352",details:[],initialSize:9,supportedSizes:[9],viewStateProperties:
null}}]}],viewModelName:"Billing$BillingNoSubscriptionsBladeViewModel"},{inputs:["id"],width:1,locked:
!0,style:5,name:"QuickStartSubscriptionBlade",lenses:[{title:null,name:"QuickStartSubscriptionBlade_lens1",
partInstances:[{name:"QuickStartPart",inline:{name:null,viewModel:"Billing$QuickStartSubscriptionInfoListViewModel",
partKind:23,inputs:["id"],bindings:[{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}],details:
[{invocationInputArguments:[{valuesFrom:[{referenceType:0,property:"content.selection"}]}]}],initialSize:
8,viewStateProperties:null}}]}],viewModelName:"Billing$QuickStartSubscriptionBladeViewModel",viewModelInputs:
[{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["id"],width:0,locked:!0,style:
6,name:"SubscriptionPropertiesBlade",lenses:[{title:null,name:"SubscriptionPropertiesBlade_lens1",partInstances:
[{name:"PropertiesPart",inline:{name:null,viewModel:"Billing$SubscriptionPropertiesViewModel",partKind:
24,inputs:["id"],bindings:[{property:"id",valuesFrom:[{referenceType:1,property:"id"}]}],details:[{invocationInputArguments:
[{valuesFrom:[{referenceType:0,property:"content.selection"}]}]}],initialSize:8,viewStateProperties:
null}}]}],viewModelName:"Billing$SubscriptionPropertiesBladeViewModel",viewModelInputs:[{property:"id",
valuesFrom:[{referenceType:1,property:"id"}]}]},{locked:!0,name:"PreviousRunningCostsDetailBlade",lenses:
[{title:null,name:"RunningCostBySubscriptionGrid",partInstances:[{name:"PreviousCostBySubscriptionGridPart",
inline:{name:null,viewModel:"Billing$PreviousCostBySubscriptionGridViewModel",partKind:14,inputs:[],
bindings:[],details:[],initialSize:8,viewStateProperties:null}}]}],viewModelName:"Billing$PreviousRunningCostsDetailBladeViewModel"},
{locked:!0,name:"CurrentRunningCostsDetailBlade",lenses:[{title:null,name:"RunningCostBySubscriptionGrid",
partInstances:[{name:"CurrentCostBySubscriptionGridPart",inline:{name:null,viewModel:"Billing$CurrentCostBySubscriptionGridViewModel",
partKind:14,inputs:[],bindings:[],details:[],initialSize:8,viewStateProperties:null}}]}],viewModelName:
"Billing$CurrentRunningCostsDetailBladeViewModel"},{locked:!0,name:"FutureRunningCostsDetailBlade",lenses:
[{title:null,name:"RunningCostBySubscriptionGrid",partInstances:[{name:"FutureCostBySubscriptionGridPart",
inline:{name:null,viewModel:"Billing$FutureCostBySubscriptionGridViewModel",partKind:14,inputs:[],bindings:
[],details:[],initialSize:8,viewStateProperties:null}}]}],viewModelName:"Billing$FutureRunningCostsDetailBladeViewModel"},
{inputs:["id"],templateKeyInputs:["id"],name:"BillingSubscriptionsBrowseBlade",lenses:[{title:i.overview,
name:"BillingSubscriptionLens",partInstances:[{name:"Detail",reference:{partTypeName:"BillingSubscriptionDetail",
bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]}},{name:
"QuickStart",reference:{partTypeName:"QuickStartSubscription",bindings:[{property:"selectedSubscriptionId",
valuesFrom:[{referenceType:1,property:"id"}]}],initialSize:1}},{name:"Properties",reference:{partTypeName:
"SubscriptionPropertiesLauncher",bindings:[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:
1,property:"id"}]}],initialSize:1}}]},{title:i.access,name:"Access",partInstances:[{name:"Roles",reference:
{partTypeName:"RolesPart",extension:"Microsoft_Azure_AD",bindings:[{property:"scope",valuesFrom:[{referenceType:
3,property:"content.subscriptionUri"}]}],initialSize:2}},{name:"Users",reference:{partTypeName:"UsersPart",
extension:"Microsoft_Azure_AD",bindings:[{property:"scope",valuesFrom:[{referenceType:3,property:"content.subscriptionUri"}]}],
initialSize:3}}]}],viewModelName:"Billing$BillingSubscriptionsBrowseBladeViewModel",viewModelInputs:
[{property:"selectedSubscriptionId",valuesFrom:[{referenceType:1,property:"id"}]}]},{inputs:["subscriptionId",
"resourceName","resourceType","currentSpendBreakdowns"],templateKeyInputs:["subscriptionId","resourceName",
"resourceType"],locked:!0,name:"CurrentSpendBlade",lenses:[{title:null,name:"CurrentSpendGrid",partInstances:
[{name:"CurrentSpendGridPart",inline:{name:null,viewModel:"Billing$CurrentSpendGridViewModel",partKind:
14,inputs:["subscriptionId","resourceName","resourceType","currentSpendBreakdowns"],bindings:[{property:
"subscriptionId",valuesFrom:[{referenceType:1,property:"subscriptionId"}]},{property:"resourceName",
valuesFrom:[{referenceType:1,property:"resourceName"}]},{property:"resourceType",valuesFrom:[{referenceType:
1,property:"resourceType"}]},{property:"currentSpendBreakdowns",valuesFrom:[{referenceType:1,property:
"currentSpendBreakdowns"}]}],details:[],initialSize:8,viewStateProperties:null}}]}],viewModelName:"Billing$CurrentSpendBladeViewModel"},
{locked:!0,name:"ThirdPartyRunningCostsDetailBlade",lenses:[{title:null,name:"RunningCostBySubscriptionGrid",
partInstances:[{name:"ThirdPartyCostBySubscriptionGridPart",inline:{name:null,viewModel:"Billing$ThirdPartyCostBySubscriptionGridViewModel",
partKind:14,inputs:[],bindings:[],details:[],initialSize:8,viewStateProperties:null}}]}],viewModelName:
"Billing$ThirdPartyRunningCostsDetailBladeViewModel"},{inputs:["subscriptionId"],width:0,locked:!0,style:
4,name:"UpgradeSubscriptionBlade",lenses:[{title:null,name:"UpgradeSubscriptionBlade_lens1",partInstances:
[{name:"NoticePart",inline:{name:null,viewModel:"Billing$UpgradeSubscriptionBladePartViewModel",partKind:
0,inputs:["subscriptionId"],bindings:[{property:"subscriptionId",valuesFrom:[{referenceType:1,property:
"subscriptionId"}]}],htmlTemplate:"pdc7543292054ad430faf1540318992901e",details:[],initialSize:9,supportedSizes:
[9],viewStateProperties:null}}]}],viewModelName:"Billing$UpgradeSubscriptionBladeViewModel",viewModelInputs:
[{property:"subscriptionId",valuesFrom:[{referenceType:1,property:"subscriptionId"}]}]}],commandGroups:
[],htmlTemplates:{pdc8c3cb470cd974a86a50fc1bc9e9cf180:'<div data-bind="pcNotice: $root"><\/div>',pdcc7acf58741a841e8af2d0a489328a352:
'<div data-bind="pcNotice: $root"><\/div>',pdc7543292054ad430faf1540318992901e:'<div data-bind="pcNotice: $root"><\/div>',
pdc20740fbdb180451abe4d08a57a71f418:"<!-- ko if: showLoadingState() --> <div data-bind='text: loadingStateTitle' style='margin-top: 20px; text-align: center;' class='msportalfx-text-header'><\/div> <!-- /ko --> <!-- ko if: showGauge() --> <div> <div data-bind='pcSingleValueGauge: gaugeViewModel()' style='height: 100px; width: 100px; float: left;'><\/div> <div style='float: left; margin-left: 20px; width: 150px; height: 100px;'> <div data-bind='pcMetrics: metrics()'><\/div> <\/div> <\/div> <!-- /ko --> <!-- ko if: showLineChart() --> <div> <div data-bind='pcChart: lineChart()' style='height: 100px; width: 165px; float: left;'><\/div> <div style='float: left; margin-left: 10px; width: 150px; height: 100px;'> <div data-bind='pcMetrics: metrics()'><\/div> <\/div> <\/div> <!-- /ko --> <!-- ko if: showSubscriptionIconArea() --> <div> <div data-bind='image: subscriptionIcon' style='height: 60px; width: 60px; float: left; margin-right: 20px; margin-top: 3px;'><\/div> <div style='float: left; margin-left: 10px; width: 150px; height: 100px;'> <div data-bind='pcMetrics: metrics()'><\/div> <\/div> <\/div> <!-- /ko --> ",
pdc2128800a4e7c498086744ccccdc0e34f:"<!-- ko if: showLoadingState() --> <div data-bind='text: loadingStateTitle' style='margin-top: 20px; text-align: center;' class='msportalfx-text-header'><\/div> <!-- /ko --> <!-- ko if: showGauge() --> <div> <div data-bind='pcSingleValueGauge: gaugeViewModel()' style='height: 100px; width: 100px; float: left;'><\/div> <div style='float: left; margin-left: 20px; width: 150px; height: 100px;'> <div data-bind='pcMetrics: metrics()'><\/div> <\/div> <\/div> <!-- /ko --> <!-- ko if: showLineChart() --> <div> <div data-bind='pcChart: lineChart()' style='height: 100px; width: 165px; float: left;'><\/div> <div style='float: left; margin-left: 10px; width: 150px; height: 100px;'> <div data-bind='pcMetrics: metrics()'><\/div> <\/div> <\/div> <!-- /ko --> <!-- ko if: showSubscriptionIconArea() --> <div> <div data-bind='image: subscriptionIcon' style='height: 60px; width: 60px; float: left; margin-right: 20px; margin-top: 3px;'><\/div> <div style='float: left; margin-left: 10px; width: 150px; height: 100px;'> <div data-bind='pcMetrics: metrics()'><\/div> <\/div> <\/div> <!-- /ko --> ",
pdc97e8108ebd8e4ec5af34e031f4226802:"<div class='msportalfx-statuspart'> <div class='msportalfx-statuspart-messagesection'> <span data-bind ='text: creditRemainingMessage'><\/span> <\/div> <div class='msportalfx-statuspart-metricsection'> <div> <div class='msportalfx-statuspart-metrictitle' data-bind='text: amountDueTitle'><\/div> <span class='msportalfx-number-small' data-bind='text: amountDue'><\/span> <\/div> <!-- ko if: hasThirdpartyCharges --> <div> <div class='msportalfx-statuspart-metrictitle' data-bind='text: thirdpartyChargesTitle'><\/div> <span class='msportalfx-number-small' data-bind='text: thirdpartyCharges'><\/span> <\/div> <!-- /ko --> <div> <div class='msportalfx-statuspart-metrictitle' data-bind='text: dueDateTitle'><\/div> <span class='msportalfx-number-small' data-bind='text: dueDate'><\/span> <\/div> <!-- ko if: hasNoThirdpartyCharges --> <div> <div class='msportalfx-statuspart-metrictitle' data-bind='text: numOfSubscriptionsTitle'><\/div> <span class='msportalfx-number-small' data-bind='text: numOfSubscriptions'><\/span> <\/div> <!-- /ko --> <\/div> <\/div> ",
pdc0843a25607a74d62bfbe9338070f33fc:'<div> <div> <div data-bind=\'text: typeTitle\' style="display: inline-block;"><\/div> <div data-bind=\'text: type\' style="display: inline-block;"><\/div> <\/div> <div data-bind=\'visible: showMonetaryCreditInfo\'> <div> <div data-bind=\'text: amountRemainingToCapTitle\' style="display: inline-block;"><\/div> <div data-bind=\'text: amountRemainingToCap\' style="display: inline-block;"><\/div> <\/div> <\/div> <div data-bind=\'visible: showMonetaryCommitmentInfo\'> <div> <div data-bind=\'text: monetaryCommitmentTitle\' style="display: inline-block;"><\/div> <div data-bind=\'text: remainingMonetaryCommitmentAmount\' style="display: inline-block;"><\/div> <\/div> <\/div> <div> <div data-bind=\'text: currentBillingPeriodTitle\' style="display: inline-block;"><\/div> <div data-bind=\'text: currentBillingPeriod\' style="display: inline-block;"><\/div> <\/div> <div style="overflow: hidden; margin-top: 10px; bottom: 0; position: absolute; width: 100%;"> <div style="overflow: hidden; float: left; bottom: 0; position: absolute;"> <div data-bind="image: statusIcon" style="width: 21px; height: 21px; float: left;"><\/div> <span data-bind=\'text: status\' style="float: left; margin-top: 7px; margin-left: 5px;"><\/span> <\/div> <div style="width: 50px; height: 50px; float: right;" data-bind="image: subscriptionIcon"><\/div> <\/div> <\/div> ',
pdcea44f36e84384d0e8d9e9f0681b77eb4:"<div data-bind='text: paymentInstrumentTitle'><\/div> <div data-bind='image: paymentInstrumentIcon' style='width: 40px; height: 40px; position: absolute; bottom: 0;'><\/div> ",
pdcb3607f4e7fee4efc96492fe98a6a8ba1:'<div class="msportalfx-statuspart"> <hr style="margin: 0 -15px 0 -14px; border:0; border-top:1px solid #e7e9eb;"/> <div class="msportalfx-text-ellipsis" style="position:absolute; left:0; right: 0; top:12px;"> <span class="msportalfx-number-medium" data-bind="text: amountDue"><\/span> <\/div> <div style="position:absolute; left:0; bottom:36px;"> <span data-bind="text: dueDate"><\/span> <\/div> <hr style="margin: 0 -15px 0 -14px; border:0; border-top:1px solid #e7e9eb; position:absolute; left:0; right:0; bottom:22px;"/> <div class="msportalfx-text-regular" style="position:absolute; left:0; bottom:0px; color:#555;"> <span data-bind="text: partnerBillLabel"><\/span> <\/div> <\/div>',
pdc818de95f1e41474e9aaa9b03d6864e99:'<div class="msportalfx-statuspart"> <hr style="margin: 0 -15px 0 -14px; border:0; border-top:1px solid #e7e9eb;"/> <div class="msportalfx-text-ellipsis" style="position:absolute; left:0; right: 0; top:12px;"> <span class="msportalfx-number-medium" data-bind="text: amountDue"><\/span> <\/div> <div style="position:absolute; left:0; bottom:36px;"> <span data-bind="text: dueDate"><\/span> <\/div> <hr style="margin: 0 -15px 0 -14px; border:0; border-top:1px solid #e7e9eb; position:absolute; left:0; right:0; bottom:22px;"/> <div class="msportalfx-text-regular" style="position:absolute; left:0; bottom:0px; color:#555;"> <span data-bind="text: partnerBillLabel"><\/span> <\/div> <\/div>',
pdc89617c2d8e654e0288f7020cc5e5bf79:'<div class="msportalfx-statuspart"> <hr style="margin: 0 -15px 0 -14px; border:0; border-top:1px solid #e7e9eb;"/> <div class="msportalfx-text-ellipsis" style="position:absolute; left:0; right: 0; top:12px;"> <span class="msportalfx-number-medium" data-bind="text: amountDue"><\/span> <\/div> <div style="position:absolute; left:0; bottom:36px;"> <span data-bind="text: dueDate"><\/span> <\/div> <hr style="margin: 0 -15px 0 -14px; border:0; border-top:1px solid #e7e9eb; position:absolute; left:0; right:0; bottom:22px;"/> <div class="msportalfx-text-regular" style="position:absolute; left:0; bottom:0px; color:#555;"> <span data-bind="text: partnerBillLabel"><\/span> <\/div> <\/div>',
pdcbbd66ae935a64bf5adc5d7a3847a119c:'<div class=\'msportalfx-statuspart\'> <!-- ko ifnot: size() === MsPortalFx.Parts.PartSize.Small --> <div data-bind="text: displayText" class="msportalfx-text-regular"><\/div> <!-- /ko --> <div class=\'msportalfx-statuspart-metricsection\' style=\'height:auto;\'> <div data-bind="text: currentSpendAmount" class="msportalfx-number-medium"><\/div> <\/div> <\/div>'},
styleSheets:[".ext-help-tile,.ext-info-tile{position:relative}.ext-tile-mini .ext-tile-image,.ext-tile-small .ext-tile-image{width:30px;height:30px}.ext-tile-normal .ext-tile-image{width:50px;height:50px}.ext-help-tile .ext-tile-image,.ext-info-tile .ext-tile-image{position:absolute;top:18px;left:20px;width:50px;height:50px}.ext-help-tile .ext-tile-title,.ext-info-tile .ext-tile-title{position:absolute;top:35px;left:87px;width:auto}.ext-help-tile .ext-tile-title{top:36px}a.ext-info-tile{display:block}.ext-help-tile.ext-tile-mini .ext-tile-image{top:19px;left:39px;width:30px;height:30px}.ext-help-tile.ext-tile-mini .ext-tile-title{width:80%;text-align:center;left:10px;top:52px}.ext-help-tile.ext-tile-normal .ext-tile-image{top:48px;left:63px}.ext-help-tile.ext-tile-normal .ext-tile-title{top:112px;left:0;width:100%;text-align:center}.ext-info-tile.ext-tile-mini .ext-tile-image{top:19px;left:39px;width:30px;height:30px}.ext-info-tile.ext-tile-mini .ext-tile-title{width:100%;text-align:center;left:0;top:60px}.ext-info-tile.ext-tile-normal .ext-tile-image{top:48px;left:61px}.ext-info-tile.ext-tile-normal .ext-tile-title{top:112px;left:0;width:100%;text-align:center}.ext-whatsNew{margin:0 0 0 17px;padding-left:10px}.ext-whatsNew-content{margin:3px 0}.ext-whatsNew-published{margin:2px 0}.ext-whatsNew-divider{margin:15px 0}.ext-whatsNew-feedLoadFailed{margin-top:75px}.ext-whatsNew-feedLoadFailed .ext-whatsNew-failed-image,.ext-whatsNew-feedLoadFailed .ext-whatsNew-failed-text{float:left}.ext-whatsNew-feedLoadFailed .ext-whatsNew-failed-image{width:256px;height:256px}.ext-whatsNew-feedLoadFailed .ext-whatsNew-failed-text{width:215px;margin-left:30px}",
".ext-tour-tile{position:relative}.ext-tour-tile .ext-tourTile-title,.ext-tour-tile .ext-tourTile-subtitle,.ext-tour-tile .ext-tourTile-subtitle2{left:15px;position:absolute}.ext-tour-tile .ext-tourTile-title{top:10px}.ext-tour-tile .ext-tourTile-subtitle{bottom:35px}.ext-tour-tile .ext-tourTile-subtitle2{bottom:20px}.ext-tour-tile .ext-tourTile-image{width:100%;height:100%;position:absolute;top:0;left:0}.ext-tour-tile.ext-tour-tile-mini .ext-tourTile-title{top:64px;left:39px}.ext-tour-tile.ext-tour-tile-mini .ext-tourTile-image{top:3px;left:10px;width:85px;height:85px}.ext-tour-tile.ext-tour-tile-small .ext-tourTile-title{top:40px;left:95px}.ext-tour-tile.ext-tour-tile-small .ext-tourTile-image{width:175px;height:85px}.ext-tour-blade .ext-tour-divider{margin:30px 0;display:block}.ext-tour-blade .ext-tour-section{width:auto;padding-left:0;display:block}.ext-tour-blade .ext-tour-section .ext-tour-subsection{margin-bottom:30px}.ext-tour-blade .ext-tour-section.ext-tour-hubs{margin:38px 0 -33px 0}.ext-tour-blade .ext-tour-section.ext-tour-hubs .ext-tour-subsection{margin-bottom:20px}.ext-tour-blade .ext-tour-section .ext-tour-subsection .ext-tour-section-title{margin-bottom:10px}.ext-tour-blade .ext-tour-section.ext-tour-hubs .ext-tour-leftColumn h2{margin-bottom:25px}.ext-tour-subsection.ext-tour-blades-commands{margin-top:101px}.ext-tour-subsection.ext-tour-blades-lenses{margin-top:127px}.ext-tour-subsection.ext-tour-blades-lenses div,.ext-tour-subsection.ext-tour-blades-parts div{margin-bottom:5px}.ext-tour-subsection.ext-tour-blades-parts{margin-top:184px}.ext-tour-leftColumn{float:left}.ext-tour-rightColumn{float:right}.ext-tour-leftColumn.ext-tour-startboardRightClick{width:200px;margin-bottom:-33px}.ext-tour-hubs .ext-tour-leftColumn{width:334px}.ext-tour-leftColumn.ext-tour-bladeImage{width:269px;margin:0 0 -33px -10px}.ext-tour-leftColumn.ext-tour-blades{width:150px}.ext-tour-rightColumn.ext-tour-hubsImage{width:186px}.ext-tour-rightColumn.ext-tour-blade{width:255px;margin-top:7px}.ext-tour-rightColumn.ext-tour-bladesImage{width:366px;margin-bottom:-33px}.ext-tour-section-icon,.ext-tour-section-icon img{width:30px;height:30px}.ext-tour-section-icon{float:left;margin:2px 15px 0 0}.ext-tour-blade .ext-tour-section .ext-tour-section-title{margin-bottom:15px}.ext-tour-section.ext-tour-section-endOfTour{text-align:center;margin-top:47px}.ext-tour-rightClickImage{margin:-10px 0 -5px 0}.ext-tour-customizeImageWrapper{margin-bottom:15px}.ext-tour-pinToStartboardImage{margin-top:-28px}.ext-tour-organizeModeImage,.ext-tour-resizeImage{margin:10px 0 25px 0}.ext-tour-resizeText{margin-left:137px;margin-top:-57px}.ext-tour-organizeModeImage{margin-top:25px}.ext-tour-section.ext-tour-section-welcome h1{margin-bottom:15px}.ext-tour-section.ext-tour-section-pinning{margin-top:10px}",
".ext-help-divider{margin-bottom:45px}.ext-help-listitem{margin-bottom:30px}.ext-help-listitem .ext-help-listitem-image{float:left;margin:1px 15px 0 0;width:48px;height:48px}.ext-help-listitem:first-of-type .ext-help-listitem-image{margin-top:-5px}.ext-help-listitem .ext-help-listitem-link{color:#fff}.ext-help-listitem .ext-help-listitem-text{float:right;width:450px;margin-right:15px}.ext-help-listitem .ext-help-listitem-text h2.ext-help-listitem-text-header{margin:6px 0 10px}.ext-help-listitem .ext-help-listitem-text .ext-help-listitem-text-regular{margin-bottom:10px}.ext-help-linkImage{display:inline-block;width:10px;height:10px;vertical-align:text-top;padding-left:2px}.ext-help-linkImage.ext-help-linkImageInternal{width:12px;height:12px}.ext-help-serviceDashboardHotSpot{display:inline-block;padding:0}",
".ext-hubs-picker-grid-details-parent{vertical-align:middle}.ext-hubs-picker-grid-details{margin-top:6px}.ext-hubs-picker-grid-text-subheader{margin-top:2px}"]};
n.definition=t})(r||(r={}));n.definitionName="Microsoft_Azure_Billing";n.getDefinition=u,function(n)
{var t,i;(function(n){n.name="HubsExtension";var t;(function(n){var t,i;(function(n){n.name="ResourceGroupPickerV3Blade"}
)(t=n.ResourceGroupPickerV3Blade||(n.ResourceGroupPickerV3Blade={})),function(n){n.name="ResourceMapBlade";
var t;(function(n){n.assetOwner="assetOwner";n.assetType="assetType";n.assetId="assetId"})(t=n.Inputs||
(n.Inputs={}))}(i=n.ResourceMapBlade||(n.ResourceMapBlade={}))})(t=n.Blades||(n.Blades={}))})(t=n.HubsExtension||
(n.HubsExtension={})),function(n){n.name="Microsoft_Azure_AD"}(i=n.Microsoft_Azure_AD||(n.Microsoft_Azure_AD=
{}))}(f=n.External||(n.External={})),function(n){var t,i,r,u,f,e,o,s,h,c;(function(n){n.name="BrowseBillingSubscriptions"}
)(t=n.BrowseBillingSubscriptions||(n.BrowseBillingSubscriptions={})),function(n){n.name="BillingSubscriptionBrowseService"}
(i=n.BillingSubscriptionBrowseService||(n.BillingSubscriptionBrowseService={})),function(n){n.name="ShowBillingNoSubscriptionsBlade"}
(r=n.ShowBillingNoSubscriptionsBlade||(n.ShowBillingNoSubscriptionsBlade={})),function(n){n.name="ShowCommitmentSubscriptionDetailBlade"}
(u=n.ShowCommitmentSubscriptionDetailBlade||(n.ShowCommitmentSubscriptionDetailBlade={})),function(n)
{n.name="ShowCreditSubscriptionDetailBlade"}(f=n.ShowCreditSubscriptionDetailBlade||(n.ShowCreditSubscriptionDetailBlade=
{})),function(n){n.name="ShowConsumptionSubscriptionDetailBlade"}(e=n.ShowConsumptionSubscriptionDetailBlade||
(n.ShowConsumptionSubscriptionDetailBlade={})),function(n){n.name="ShowSupportSubscriptionDetailBlade"}
(o=n.ShowSupportSubscriptionDetailBlade||(n.ShowSupportSubscriptionDetailBlade={})),function(n){n.name=
"ShowFreeTierSubscriptionDetailBlade"}(s=n.ShowFreeTierSubscriptionDetailBlade||(n.ShowFreeTierSubscriptionDetailBlade=
{})),function(n){n.name="ShowOtherSubscriptionDetailBlade"}(h=n.ShowOtherSubscriptionDetailBlade||(n.
ShowOtherSubscriptionDetailBlade={})),function(n){n.name="ShowEASubscriptionDetailBlade"}(c=n.ShowEASubscriptionDetailBlade||
(n.ShowEASubscriptionDetailBlade={}))}(t=n.AssetTypes||(n.AssetTypes={})),function(n){n.browseBillingSubscriptions=
t.BrowseBillingSubscriptions.name;n.billingSubscriptionBrowseService=t.BillingSubscriptionBrowseService.
name;n.showBillingNoSubscriptionsBlade=t.ShowBillingNoSubscriptionsBlade.name;n.showCommitmentSubscriptionDetailBlade=
t.ShowCommitmentSubscriptionDetailBlade.name;n.showCreditSubscriptionDetailBlade=t.ShowCreditSubscriptionDetailBlade.
name;n.showConsumptionSubscriptionDetailBlade=t.ShowConsumptionSubscriptionDetailBlade.name;n.showSupportSubscriptionDetailBlade=
t.ShowSupportSubscriptionDetailBlade.name;n.showFreeTierSubscriptionDetailBlade=t.ShowFreeTierSubscriptionDetailBlade.
name;n.showOtherSubscriptionDetailBlade=t.ShowOtherSubscriptionDetailBlade.name;n.showEASubscriptionDetailBlade=
t.ShowEASubscriptionDetailBlade.name}(e=n.AssetTypeNames||(n.AssetTypeNames={})),function(n){n.billingBlade=
"BillingBlade";n.subscriptionsBlade="SubscriptionsBlade";n.billingSummaryBlade="BillingSummaryBlade";
n.creditSubscriptionDetailBlade="CreditSubscriptionDetailBlade";n.freeTierSubscriptionDetailBlade="FreeTierSubscriptionDetailBlade";
n.otherSubscriptionDetailBlade="OtherSubscriptionDetailBlade";n.commitmentSubscriptionDetailBlade="CommitmentSubscriptionDetailBlade";
n.consumptionSubscriptionDetailBlade="ConsumptionSubscriptionDetailBlade";n.supportSubscriptionDetailBlade=
"SupportSubscriptionDetailBlade";n.costByResourceDetailBlade="CostByResourceDetailBlade";n.eASubscriptionDetailBlade=
"EASubscriptionDetailBlade";n.billingNoSubscriptionsBlade="BillingNoSubscriptionsBlade";n.quickStartSubscriptionBlade=
"QuickStartSubscriptionBlade";n.subscriptionPropertiesBlade="SubscriptionPropertiesBlade";n.previousRunningCostsDetailBlade=
"PreviousRunningCostsDetailBlade";n.currentRunningCostsDetailBlade="CurrentRunningCostsDetailBlade";
n.futureRunningCostsDetailBlade="FutureRunningCostsDetailBlade";n.billingSubscriptionsBrowseBlade="BillingSubscriptionsBrowseBlade";
n.currentSpendBlade="CurrentSpendBlade";n.thirdPartyRunningCostsDetailBlade="ThirdPartyRunningCostsDetailBlade";
n.upgradeSubscriptionBlade="UpgradeSubscriptionBlade"}(o=n.BladeNames||(n.BladeNames={}))}(r||(r={})
),r});define("BillingExtension/Billing/Services/BillingSubscriptionsBrowseService",["require","exports",
"../BillingCommon"],function(n,t,i){var r;return function(n){"use strict";var r=i.extensionName,t=function(
){function n(n,t,i){var r=this,u=i.getBillingDataContext(),f=u.billingSummary;this.initialized=ko.observable(
!1);this.canceled=ko.observable(!1);this.results=ko.observableArray([]);n.registerForDispose(ko.computed(
n,function(){u.dataReady()&&(r._pushSubscriptionsToResults(f.subscriptions()),r.initialized(!0))}))}
return n.prototype._pushSubscriptionsToResults=function(n){var r,u=[],t=[];t.push.apply(t,n);this.results(
).forEach(function(n){r=t.first(function(t){return t.id()===n.id()});r?t.remove(r):u.push(n)});this.
results.remove(function(n){return u.indexOf(n)!==-1});this.results.push.apply(this.results,t.map(function(
n){var t=$.extend({},n);return MsPortalFx.Services.AssetExpansion.addAssetExpansion(t,i.mapBillingSubscriptionToAssetDetails(
t)),t}))},n}();n.BillingSubscriptionsBrowseService=t}(r||(r={})),r});define("BillingExtension/Billing/BillingCommon",
["require","exports","./Models/BillingData","./BillingHelper"],function(n,t,i,r){var u;return function(
n){"use strict";function t(t){return{assetOwner:n.extensionName,assetType:n.BrowseBillingSubscriptionsAssetType,
assetId:t.id,title:ko.observable(t.subscriptionName()),description:ko.observable(t.subscriptionName(
)),icon:ko.observable(r.BillingHelper.getSubcriptionTypeIcon(t.subscriptionTypeInfo().type(),t.isAccountAdmin(
),t.subscriptionTypeInfo().type()===2&&t.monetaryCommitmentInfo&&t.monetaryCommitmentInfo()?t.monetaryCommitmentInfo(
):null))}}n.extensionName="Microsoft_Azure_Billing";n.BrowseBillingSubscriptionsAssetType="BillingSubscriptionBrowseService";
n.mapBillingSubscriptionToAssetDetails=t}(u||(u={})),u});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("BillingExtension/Billing/Services/BillingSubscriptionsGridColumnsService",["require",
"exports","../BillingHelper","BillingExtension/Billing/BillingClientStrings"],function(n,t,i,r){var u;
return function(n){"use strict";var e=MsPortalFx.ViewModels.Services.GridColumns,t=r,u={},f;i.BillingHelper.
getSubcriptionStatuses().forEach(function(n){u[n]=i.BillingHelper.getSubcriptionStatusText(n)});f=function(
n){function i(){n.call(this);this.columns([{id:"name",name:ko.observable(t.subscriptionName),itemKey:
"subscriptionName"},{id:"id",name:ko.observable(t.subscriptionId),itemKey:"id"},{id:"status",name:ko.
observable(t.subscriptionStatus),itemKey:"displayStatus",format:110,formatOptions:{textLookup:u}}])}
return __extends(i,n),i}(e.Service);n.BillingSubscriptionsGridColumnsService=f}(u||(u={})),u});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("BillingExtension/_generated/ViewModelFactories",
["require","exports"],function(n){var t;return function(t){var i=function(t){function i(){t.apply(this,
arguments)}return __extends(i,t),i.prototype.BillingStartBoardTileViewModel=function(t,i){var r=this;
return this.loadViewModelAsync("../Billing/ViewModels/BillingStartBoardTileViewModel",function(n){return new
n.BillingStartBoardTileViewModel(t,i,r.dataContext)},n)},i.prototype.BillingSubscriptionDetailViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingSubscriptionDetailViewModel",
function(n){return new n.BillingSubscriptionDetailViewModel(t,i,r.dataContext)},n)},i.prototype.BillingTileViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingTileViewModel",
function(n){return new n.BillingTileViewModel(t,i,r.dataContext)},n)},i.prototype.SubscriptionStatusViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/SubscriptionStatusViewModel",
function(n){return new n.SubscriptionStatusViewModel(t,i,r.dataContext)},n)},i.prototype.DaysRemainingViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/DaysRemainingViewModel",
function(n){return new n.DaysRemainingViewModel(t,i,r.dataContext)},n)},i.prototype.PaymentInstrumentViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/PaymentInstrumentViewModel",
function(n){return new n.PaymentInstrumentViewModel(t,i,r.dataContext)},n)},i.prototype.PreviousRunningCostsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/PreviousRunningCostsViewModel",
function(n){return new n.PreviousRunningCostsViewModel(t,i,r.dataContext)},n)},i.prototype.CurrentRunningCostsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/CurrentRunningCostsViewModel",
function(n){return new n.CurrentRunningCostsViewModel(t,i,r.dataContext)},n)},i.prototype.FutureRunningCostsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/FutureRunningCostsViewModel",
function(n){return new n.FutureRunningCostsViewModel(t,i,r.dataContext)},n)},i.prototype.CurrentSpendViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/CurrentSpendViewModel",
function(n){return new n.CurrentSpendViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceGroupCurrentSpendViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/ResourceGroupCurrentSpendViewModel",
function(n){return new n.ResourceGroupCurrentSpendViewModel(t,i,r.dataContext)},n)},i.prototype.SubscriptionPropertiesLauncherViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/SubscriptionPropertiesLauncherViewModel",
function(n){return new n.SubscriptionPropertiesLauncherViewModel(t,i,r.dataContext)},n)},i.prototype.
CurrentCostByResourceViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/CurrentCostByResourceViewModel",
function(n){return new n.CurrentCostByResourceViewModel(t,i,r.dataContext)},n)},i.prototype.QuickStartSubscriptionViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/QuickStartSubscriptionViewModel",
function(n){return new n.QuickStartSubscriptionViewModel(t,i,r.dataContext)},n)},i.prototype.BaseSubscriptionDetailLauncherViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BaseSubscriptionDetailLauncherViewModel",
function(n){return new n.BaseSubscriptionDetailLauncherViewModel(t,i,r.dataContext)},n)},i.prototype.
RunningCostsChartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/RunningCostsChartViewModel",
function(n){return new n.RunningCostsChartViewModel(t,i,r.dataContext)},n)},i.prototype.ThirdPartyRunningCostsChartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/ThirdPartyRunningCostsChartViewModel",
function(n){return new n.ThirdPartyRunningCostsChartViewModel(t,i,r.dataContext)},n)},i.prototype.UpgradeSubscriptionPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/UpgradeSubscriptionPartViewModel",
function(n){return new n.UpgradeSubscriptionPartViewModel(t,i,r.dataContext)},n)},i.prototype.BillingBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingBladeViewModel",
function(n){return new n.BillingBladeViewModel(t,i,r.dataContext)},n)},i.prototype.BillingListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingListViewModel",
function(n){return new n.BillingListViewModel(t,i,r.dataContext)},n)},i.prototype.SubscriptionsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/SubscriptionsBladeViewModel",
function(n){return new n.SubscriptionsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.MySubscriptionsGridViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/MySubscriptionsGridViewModel",
function(n){return new n.MySubscriptionsGridViewModel(t,i,r.dataContext)},n)},i.prototype.BillingSummaryBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingSummaryBladeViewModel",
function(n){return new n.BillingSummaryBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CreditSubscriptionDetailBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/CreditSubscriptionDetailBladeViewModel",
function(n){return new n.CreditSubscriptionDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
BurnRateChartCreditViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BurnRateChartCreditViewModel",
function(n){return new n.BurnRateChartCreditViewModel(t,i,r.dataContext)},n)},i.prototype.FreeTierSubscriptionDetailBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/FreeTierSubscriptionDetailBladeViewModel",
function(n){return new n.FreeTierSubscriptionDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
OtherSubscriptionDetailBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/OtherSubscriptionDetailBladeViewModel",
function(n){return new n.OtherSubscriptionDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CommitmentSubscriptionDetailBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/CommitmentSubscriptionDetailBladeViewModel",
function(n){return new n.CommitmentSubscriptionDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
BurnRateChartCommitmentViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BurnRateChartCommitmentViewModel",
function(n){return new n.BurnRateChartCommitmentViewModel(t,i,r.dataContext)},n)},i.prototype.ConsumptionSubscriptionDetailBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/ConsumptionSubscriptionDetailBladeViewModel",
function(n){return new n.ConsumptionSubscriptionDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
BurnRateChartConsumptionViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BurnRateChartConsumptionViewModel",
function(n){return new n.BurnRateChartConsumptionViewModel(t,i,r.dataContext)},n)},i.prototype.SupportSubscriptionDetailBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/SupportSubscriptionDetailBladeViewModel",
function(n){return new n.SupportSubscriptionDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
CostByResourceDetailBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/CostByResourceDetailBladeViewModel",
function(n){return new n.CostByResourceDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CostByResourceGridViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/CostByResourceGridViewModel",
function(n){return new n.CostByResourceGridViewModel(t,i,r.dataContext)},n)},i.prototype.EASubscriptionDetailBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/EASubscriptionDetailBladeViewModel",
function(n){return new n.EASubscriptionDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.EASubscriptionViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/EASubscriptionViewModel",
function(n){return new n.EASubscriptionViewModel(t,i,r.dataContext)},n)},i.prototype.BillingNoSubscriptionsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingNoSubscriptionsBladeViewModel",
function(n){return new n.BillingNoSubscriptionsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.BillingNoSubscriptionsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingNoSubscriptionsViewModel",
function(n){return new n.BillingNoSubscriptionsViewModel(t,i,r.dataContext)},n)},i.prototype.QuickStartSubscriptionBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/QuickStartSubscriptionBladeViewModel",
function(n){return new n.QuickStartSubscriptionBladeViewModel(t,i,r.dataContext)},n)},i.prototype.QuickStartSubscriptionInfoListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/QuickStartSubscriptionInfoListViewModel",
function(n){return new n.QuickStartSubscriptionInfoListViewModel(t,i,r.dataContext)},n)},i.prototype.
SubscriptionPropertiesBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/SubscriptionPropertiesBladeViewModel",
function(n){return new n.SubscriptionPropertiesBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SubscriptionPropertiesViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/SubscriptionPropertiesViewModel",
function(n){return new n.SubscriptionPropertiesViewModel(t,i,r.dataContext)},n)},i.prototype.PreviousRunningCostsDetailBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/PreviousRunningCostsDetailBladeViewModel",
function(n){return new n.PreviousRunningCostsDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
PreviousCostBySubscriptionGridViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/PreviousCostBySubscriptionGridViewModel",
function(n){return new n.PreviousCostBySubscriptionGridViewModel(t,i,r.dataContext)},n)},i.prototype.
CurrentRunningCostsDetailBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/CurrentRunningCostsDetailBladeViewModel",
function(n){return new n.CurrentRunningCostsDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
CurrentCostBySubscriptionGridViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/CurrentCostBySubscriptionGridViewModel",
function(n){return new n.CurrentCostBySubscriptionGridViewModel(t,i,r.dataContext)},n)},i.prototype.
FutureRunningCostsDetailBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/FutureRunningCostsDetailBladeViewModel",
function(n){return new n.FutureRunningCostsDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
FutureCostBySubscriptionGridViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/FutureCostBySubscriptionGridViewModel",
function(n){return new n.FutureCostBySubscriptionGridViewModel(t,i,r.dataContext)},n)},i.prototype.BillingSubscriptionsBrowseBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/BillingSubscriptionsBrowseBladeViewModel",
function(n){return new n.BillingSubscriptionsBrowseBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
CurrentSpendBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/CurrentSpendBladeViewModel",
function(n){return new n.CurrentSpendBladeViewModel(t,i,r.dataContext)},n)},i.prototype.CurrentSpendGridViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/CurrentSpendGridViewModel",
function(n){return new n.CurrentSpendGridViewModel(t,i,r.dataContext)},n)},i.prototype.ThirdPartyRunningCostsDetailBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/ThirdPartyRunningCostsDetailBladeViewModel",
function(n){return new n.ThirdPartyRunningCostsDetailBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
ThirdPartyCostBySubscriptionGridViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/ThirdPartyCostBySubscriptionGridViewModel",
function(n){return new n.ThirdPartyCostBySubscriptionGridViewModel(t,i,r.dataContext)},n)},i.prototype.
UpgradeSubscriptionBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/UpgradeSubscriptionBladeViewModel",
function(n){return new n.UpgradeSubscriptionBladeViewModel(t,i,r.dataContext)},n)},i.prototype.UpgradeSubscriptionBladePartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/ViewModels/UpgradeSubscriptionBladePartViewModel",
function(n){return new n.UpgradeSubscriptionBladePartViewModel(t,i,r.dataContext)},n)},i.prototype.BillingSubscriptionsBrowseService=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/Services/BillingSubscriptionsBrowseService",
function(n){return new n.BillingSubscriptionsBrowseService(t,i,r.dataContext)},n)},i.prototype.BillingSubscriptionsGridColumnsService=
function(t,i){var r=this;return this.loadViewModelAsync("../Billing/Services/BillingSubscriptionsGridColumnsService",
function(n){return new n.BillingSubscriptionsGridColumnsService(t,i,r.dataContext)},n)},i}(MsPortalFx.
Internal.Extension.ViewModelAreaFactoriesBase),r;t.BillingViewModelFactoriesBase=i;r=function(){function n(
){}return n.prototype.SetBillingViewModelFactories=function(n){this._BillingViewModelFactories=n},n.
prototype.Billing=function(){return this._BillingViewModelFactories=this._BillingViewModelFactories||
new i,this._BillingViewModelFactories},n.prototype.Billing$BillingStartBoardTileViewModel=function(n,
t){return this.Billing().BillingStartBoardTileViewModel(n,t)},n.prototype.Billing$BillingSubscriptionDetailViewModel=
function(n,t){return this.Billing().BillingSubscriptionDetailViewModel(n,t)},n.prototype.Billing$BillingTileViewModel=
function(n,t){return this.Billing().BillingTileViewModel(n,t)},n.prototype.Billing$SubscriptionStatusViewModel=
function(n,t){return this.Billing().SubscriptionStatusViewModel(n,t)},n.prototype.Billing$DaysRemainingViewModel=
function(n,t){return this.Billing().DaysRemainingViewModel(n,t)},n.prototype.Billing$PaymentInstrumentViewModel=
function(n,t){return this.Billing().PaymentInstrumentViewModel(n,t)},n.prototype.Billing$PreviousRunningCostsViewModel=
function(n,t){return this.Billing().PreviousRunningCostsViewModel(n,t)},n.prototype.Billing$CurrentRunningCostsViewModel=
function(n,t){return this.Billing().CurrentRunningCostsViewModel(n,t)},n.prototype.Billing$FutureRunningCostsViewModel=
function(n,t){return this.Billing().FutureRunningCostsViewModel(n,t)},n.prototype.Billing$CurrentSpendViewModel=
function(n,t){return this.Billing().CurrentSpendViewModel(n,t)},n.prototype.Billing$ResourceGroupCurrentSpendViewModel=
function(n,t){return this.Billing().ResourceGroupCurrentSpendViewModel(n,t)},n.prototype.Billing$SubscriptionPropertiesLauncherViewModel=
function(n,t){return this.Billing().SubscriptionPropertiesLauncherViewModel(n,t)},n.prototype.Billing$CurrentCostByResourceViewModel=
function(n,t){return this.Billing().CurrentCostByResourceViewModel(n,t)},n.prototype.Billing$QuickStartSubscriptionViewModel=
function(n,t){return this.Billing().QuickStartSubscriptionViewModel(n,t)},n.prototype.Billing$BaseSubscriptionDetailLauncherViewModel=
function(n,t){return this.Billing().BaseSubscriptionDetailLauncherViewModel(n,t)},n.prototype.Billing$RunningCostsChartViewModel=
function(n,t){return this.Billing().RunningCostsChartViewModel(n,t)},n.prototype.Billing$ThirdPartyRunningCostsChartViewModel=
function(n,t){return this.Billing().ThirdPartyRunningCostsChartViewModel(n,t)},n.prototype.Billing$UpgradeSubscriptionPartViewModel=
function(n,t){return this.Billing().UpgradeSubscriptionPartViewModel(n,t)},n.prototype.Billing$BillingBladeViewModel=
function(n,t){return this.Billing().BillingBladeViewModel(n,t)},n.prototype.Billing$BillingListViewModel=
function(n,t){return this.Billing().BillingListViewModel(n,t)},n.prototype.Billing$SubscriptionsBladeViewModel=
function(n,t){return this.Billing().SubscriptionsBladeViewModel(n,t)},n.prototype.Billing$MySubscriptionsGridViewModel=
function(n,t){return this.Billing().MySubscriptionsGridViewModel(n,t)},n.prototype.Billing$BillingSummaryBladeViewModel=
function(n,t){return this.Billing().BillingSummaryBladeViewModel(n,t)},n.prototype.Billing$CreditSubscriptionDetailBladeViewModel=
function(n,t){return this.Billing().CreditSubscriptionDetailBladeViewModel(n,t)},n.prototype.Billing$BurnRateChartCreditViewModel=
function(n,t){return this.Billing().BurnRateChartCreditViewModel(n,t)},n.prototype.Billing$FreeTierSubscriptionDetailBladeViewModel=
function(n,t){return this.Billing().FreeTierSubscriptionDetailBladeViewModel(n,t)},n.prototype.Billing$OtherSubscriptionDetailBladeViewModel=
function(n,t){return this.Billing().OtherSubscriptionDetailBladeViewModel(n,t)},n.prototype.Billing$CommitmentSubscriptionDetailBladeViewModel=
function(n,t){return this.Billing().CommitmentSubscriptionDetailBladeViewModel(n,t)},n.prototype.Billing$BurnRateChartCommitmentViewModel=
function(n,t){return this.Billing().BurnRateChartCommitmentViewModel(n,t)},n.prototype.Billing$ConsumptionSubscriptionDetailBladeViewModel=
function(n,t){return this.Billing().ConsumptionSubscriptionDetailBladeViewModel(n,t)},n.prototype.Billing$BurnRateChartConsumptionViewModel=
function(n,t){return this.Billing().BurnRateChartConsumptionViewModel(n,t)},n.prototype.Billing$SupportSubscriptionDetailBladeViewModel=
function(n,t){return this.Billing().SupportSubscriptionDetailBladeViewModel(n,t)},n.prototype.Billing$CostByResourceDetailBladeViewModel=
function(n,t){return this.Billing().CostByResourceDetailBladeViewModel(n,t)},n.prototype.Billing$CostByResourceGridViewModel=
function(n,t){return this.Billing().CostByResourceGridViewModel(n,t)},n.prototype.Billing$EASubscriptionDetailBladeViewModel=
function(n,t){return this.Billing().EASubscriptionDetailBladeViewModel(n,t)},n.prototype.Billing$EASubscriptionViewModel=
function(n,t){return this.Billing().EASubscriptionViewModel(n,t)},n.prototype.Billing$BillingNoSubscriptionsBladeViewModel=
function(n,t){return this.Billing().BillingNoSubscriptionsBladeViewModel(n,t)},n.prototype.Billing$BillingNoSubscriptionsViewModel=
function(n,t){return this.Billing().BillingNoSubscriptionsViewModel(n,t)},n.prototype.Billing$QuickStartSubscriptionBladeViewModel=
function(n,t){return this.Billing().QuickStartSubscriptionBladeViewModel(n,t)},n.prototype.Billing$QuickStartSubscriptionInfoListViewModel=
function(n,t){return this.Billing().QuickStartSubscriptionInfoListViewModel(n,t)},n.prototype.Billing$SubscriptionPropertiesBladeViewModel=
function(n,t){return this.Billing().SubscriptionPropertiesBladeViewModel(n,t)},n.prototype.Billing$SubscriptionPropertiesViewModel=
function(n,t){return this.Billing().SubscriptionPropertiesViewModel(n,t)},n.prototype.Billing$PreviousRunningCostsDetailBladeViewModel=
function(n,t){return this.Billing().PreviousRunningCostsDetailBladeViewModel(n,t)},n.prototype.Billing$PreviousCostBySubscriptionGridViewModel=
function(n,t){return this.Billing().PreviousCostBySubscriptionGridViewModel(n,t)},n.prototype.Billing$CurrentRunningCostsDetailBladeViewModel=
function(n,t){return this.Billing().CurrentRunningCostsDetailBladeViewModel(n,t)},n.prototype.Billing$CurrentCostBySubscriptionGridViewModel=
function(n,t){return this.Billing().CurrentCostBySubscriptionGridViewModel(n,t)},n.prototype.Billing$FutureRunningCostsDetailBladeViewModel=
function(n,t){return this.Billing().FutureRunningCostsDetailBladeViewModel(n,t)},n.prototype.Billing$FutureCostBySubscriptionGridViewModel=
function(n,t){return this.Billing().FutureCostBySubscriptionGridViewModel(n,t)},n.prototype.Billing$BillingSubscriptionsBrowseBladeViewModel=
function(n,t){return this.Billing().BillingSubscriptionsBrowseBladeViewModel(n,t)},n.prototype.Billing$CurrentSpendBladeViewModel=
function(n,t){return this.Billing().CurrentSpendBladeViewModel(n,t)},n.prototype.Billing$CurrentSpendGridViewModel=
function(n,t){return this.Billing().CurrentSpendGridViewModel(n,t)},n.prototype.Billing$ThirdPartyRunningCostsDetailBladeViewModel=
function(n,t){return this.Billing().ThirdPartyRunningCostsDetailBladeViewModel(n,t)},n.prototype.Billing$ThirdPartyCostBySubscriptionGridViewModel=
function(n,t){return this.Billing().ThirdPartyCostBySubscriptionGridViewModel(n,t)},n.prototype.Billing$UpgradeSubscriptionBladeViewModel=
function(n,t){return this.Billing().UpgradeSubscriptionBladeViewModel(n,t)},n.prototype.Billing$UpgradeSubscriptionBladePartViewModel=
function(n,t){return this.Billing().UpgradeSubscriptionBladePartViewModel(n,t)},n.prototype.Billing$BillingSubscriptionsBrowseService=
function(n,t){return this.Billing().BillingSubscriptionsBrowseService(n,t)},n.prototype.Billing$BillingSubscriptionsGridColumnsService=
function(n,t){return this.Billing().BillingSubscriptionsGridColumnsService(n,t)},n}();t.ViewModelFactoriesBase=
r}(t||(t={})),t});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("BillingExtension/Billing/BillingViewModelFactories",
["require","exports","../_generated/ViewModelFactories"],function(n,t,i){var r;return function(t){"use strict";
var r=function(t){function i(){var i=this;t.call(this);this.setDataContextFactory("./BillingArea",function(
n){return i._billingContext=n.BillingDataContextFactory.getContext()},n)}return __extends(i,t),i.prototype.
BillingSummaryViewModel=function(t,i){var r=this;return this.loadViewModelAsync("./ViewModels/BillingSummaryViewModel",
function(n){return new n.BillingSummaryViewModel(t,i,r._billingContext)},n)},i}(i.BillingViewModelFactoriesBase);
t.ViewModelFactories=r}(r||(r={})),r})