define("HubsExtension/ServicesHealth/ServicesHealthArea",["require","exports","./ServicesHealthCommon",
"./DataContexts/ServicesHealthDataContext","./DataContexts/PersonalizedServicesHealthDataContext"],function(
n,t,i,r,u){var f;return function(n){"use strict";var t=function(){function n(){this._servicesHealthDataContext=
new r.ServicesHealthDataContext;this._personalizedServicesHealthDataContext=new u.PersonalizedServicesHealthDataContext}
return n.prototype.getServicesHealthDataContext=function(){return this._servicesHealthDataContext},n.
prototype.getPersonalizedServicesHealthDataContext=function(){return this._personalizedServicesHealthDataContext}
,n}();n.DataContext=t;n.icon=i.areaIcon}(f||(f={})),f});define("HubsExtension/ServicesHealth/DataContexts/ServicesHealthDataContext",
["require","exports","../ServicesHealth.Status","../Models/ServicesHealthModels","HubsExtension/ServicesHealth/ServicesHealthClientStrings"],
function(n,t,i,r,u){var f;return function(n){"use strict";var t=window,f=u.ServicesHealth,e=t&&t.fx&&
t.fx.environment,o=function(){function n(){var t=this;this._regions=ko.observableArray();this._servicesStatusRollup=
ko.observable(0);this._loadRegions();MsPortalFx.Data.Loader.setPollingIntervals(n._dataSetName,{pollingInterval:
n._dataPollingInterval,slowPollingInterval:n._dataPollingInterval,fastPollingInterval:n._dataPollingInterval});
this._dataSet=MsPortalFx.Data.Loader.getDataSet(n._dataSetName,r.AzureServiceType,[]);this._services=
this._dataSet.data;this._servicesIssuesCount=ko.computed(function(){var r=t._regions(),n=new i.RegionStatusAggregator(
r,t._services());return r.forEach(function(t){var i=n.WorstStatusByRegion[t.id()];i!==undefined&&t.status(
i)}),t.servicesStatusRollup(n.WorstStatus),n.WorstStatusCount});this._servicesLoadPromise=n._loadServicesAsync(
)}return Object.defineProperty(n.prototype,"services",{get:function(){return this._services},enumerable:
!0,configurable:!0}),Object.defineProperty(n.prototype,"regions",{get:function(){return this._regions}
,enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"servicesIssuesCount",{get:function(
){return this._servicesIssuesCount},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"servicesStatusRollup",{get:function(){return this._servicesStatusRollup},enumerable:!0,configurable:
!0}),Object.defineProperty(n.prototype,"servicesLoadPromise",{get:function(){return this._servicesLoadPromise}
,enumerable:!0,configurable:!0}),n.isServiceMultiRegion=function(n){return n!==11&&n!==12&&n!==5},n.
prototype.getService=function(n){return this._services().first(function(t){return t.id()===n})},n.prototype.
getRegion=function(n){return this._regions().first(function(t){return t.id()===n})},n.prototype.getServiceRegion=
function(n){var t=null;return this.services().every(function(i){return(t=i.regions().first(function(
t){return t.id()===n}),t)?!1:!0}),t},n.prototype.getRegionsStatusLookup=function(){var n={};return this.
_regions().forEach(function(t){n[t.id()]=t.status}),n},n.prototype.getServiceRegionsStatusLookup=function(
n){var i={},t=n.regions(),r;return t.length===1&&t[0].regionId()===5?(r=t[0].status,this._regions().
forEach(function(n){n.isServiceMultiRegion()===!0&&(i[n.id()]=r)})):t.forEach(function(n){i[n.regionId(
)]=n.status}),i},n._processServicesData=function(t,r){if(r.data.value){var u=[];return r.data.value.
forEach(function(t){var r={id:t.ID,name:t.Name,status:i.Utilities.serviceStatusToNormalizedStatus(t.
Status),regions:[]};t.Regions&&t.Regions.forEach(function(u){if(!(n._allowedRegions.indexOf(u.RegionID)<
0)){var f={id:t.ID+"_"+u.RegionID,rssCode:u.RssCode,regionId:u.RegionID,serviceId:t.ID,name:u.Name,status:
i.Utilities.serviceStatusToNormalizedStatus(u.Status),incidents:[]};r.regions.push(f);u.Incidents&&u.
Incidents.forEach(function(n){n.Descriptions&&n.Descriptions.forEach(function(n){var t={title:n.Title,
messages:[]};f.incidents.push(t);n.Messages&&n.Messages.forEach(function(n){t.messages.push({time:n.
ModifiedDate+" "+n.ModifiedTime,details:n.Details})})})})}});r.regions.length&&u.push(r)}),r.data=u,
!0}return!1},n._loadServicesAsync=function(){return MsPortalFx.Data.Loader.getData({uri:n._dataUri,dataSetName:
n._dataSetName,loaderOptions:{fetchData:function(n,t,i,r){return MsPortalFx.Base.Net.cachedAjax({uri:
t,headers:r})},processResult:[n._processServicesData]}})},n.prototype._loadRegions=function(){var i,
t,u;for(i in r.AzureRegionId)if(typeof r.AzureRegionId[i]=="number"){if(t=parseInt(r.AzureRegionId[i]),
n._allowedRegions.indexOf(t)<0)continue;u=f["region"+t+"Name"];this._regions.push({id:ko.observable(
t),isServiceMultiRegion:ko.observable(n.isServiceMultiRegion(t)),name:ko.observable(u),status:ko.observable(
0)})}},n._dataSetName="servicesDataSet",n._dataUri=MsPortalFx.Base.Resources.getAppRelativeUri("/api/ServiceHealth"),
n._allowedRegions=e.servicesHealthAllowedRegions||[],n._dataPollingInterval=3e5,n}();n.ServicesHealthDataContext=
o}(f||(f={})),f});define("HubsExtension/ServicesHealth/DataContexts/PersonalizedServicesHealthDataContext",
["require","exports","../../ArmHelpers/ArmApis","../Models/ServicesHealthModels"],function(n,t,i,r){
var u;return function(n){"use strict";function e(n){return Q(MsPortalFx.Base.Net.ajax({uri:i.Subscriptions.
listLocationsApi(n),type:"GET",cache:!1,headers:{accept:"application/json"},setAuthorizationHeader:!0})).
then(function(t){if(t&&t.value)return t.value;throw new Error("ARM locations not found for subscription {0}. response or response.value is not set.".
format(n));})}function o(n,t,r){var u=i.Events.getEventDigestsApi(n,t,r,"ResourceProvider eq 'Azure.Health'");
return i.callWithContinuation(u).then(function(n){return n.filter(function(n){return!(n.status&&n.status.
value&&n.status.value.toLowerCase()==="resolved")})},function(t){throw new Error("Outage event query failed for subscription '{0}'. Error: '{1}'.".
format(n,JSON.stringify(t)));})}function t(n){var t=[];return t.concat.apply(t,n)}function s(n){if(!n)
return null;var t=n.properties&&n.properties.Region,i=n.properties&&n.properties.IncidentType;return{
correlationId:n.correlationId,description:n.description,incidentType:i||null,eventName:n.eventName&&
n.eventName.value,eventSource:n.eventSource&&n.eventSource.value,resourceProviderName:n.resourceProviderName&&
n.resourceProviderName.value,status:n.status&&n.status.value,level:n.level,regions:t&&t.split(",")||
null}}function h(n){var t={},i=[];return n.forEach(function(n){var r=n&&n.id;t[r]||(t[r]=!0,i.push(n))}
),i}var u=MsPortalFx.Base.Diagnostics,c=function(n){for(var i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[
t];u.Log.writeEntry(2,"ServiceHealthArea",n.format(i))},f=function(){function n(){var n=this;this.outageEventsStartTime=
new Date;this.outageEventsEndTime=new Date;this.locationsCache=new MsPortalFx.Data.QueryCache({entityTypeName:
r.locationMetadata.name,serializeParams:function(n){return n.join(",")},httpMethod:"GET",supplyData:
function(n,i,r,u,f){var o=f||[],s=o.map(function(n){return e(n)});return Q.all(s).then(t).then(h)}});
this.outageEventsCache=new MsPortalFx.Data.QueryCache({entityTypeName:r.Event.metadata.name,serializeParams:
function(n){return n.join(",")},httpMethod:"GET",supplyData:function(i,r,u,f,e){var a=e||[],c=new Date,
h=new Date,l;return h.setDate(h.getDate()-1),l=a.map(function(n){return o(n,h,c)}),Q.all(l).then(t).
then(function(t){return n.outageEventsStartTime=h,n.outageEventsEndTime=c,t.map(s)})}})}return n}();
n.PersonalizedServicesHealthDataContext=f}(u||(u={})),u})