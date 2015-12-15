var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/ServicesHealth/ViewModels/Parts/ServicesPartViewModel",
["require","exports","../../ServicesHealth.Status","../../ServicesHealth.Mapping","../../Models/ServicesHealthModels",
"HubsExtension/ServicesHealth/ServicesHealthClientStrings"],function(n,t,i,r,u,f){var e;return function(
n){"use strict";var t=f.ServicesHealth.ServicesPart,u=function(n){function u(u,f,e){var o=this;n.call(
this);this.subtitle=t.subtitle;this._dataContext=e.getServicesHealthDataContext();this.title(t.title);
this.shortTitle(t.shortTitle);this.map=ko.pureComputed(function(){return r.Utilities.getRegionStatusMap(
o.size(),o._dataContext.getRegionsStatusLookup(),t.mapSummary)});this.icon=ko.pureComputed(function(
){var n=o._dataContext.servicesStatusRollup();return i.Utilities.getStatusIcon(n)});this.resourceCount=
ko.pureComputed(function(){switch(o._dataContext.servicesStatusRollup()){case 1:case 2:return o._dataContext.
servicesIssuesCount();default:return o._dataContext.services().length}});this.resourceCountLabel=ko.
pureComputed(function(){return i.Utilities.statusToCollectionDisplayName(o._dataContext.servicesStatusRollup(
))})}return __extends(u,n),u}(MsPortalFx.ViewModels.ButtonPart);n.ServicesPartViewModel=u}(e||(e={})
),e})