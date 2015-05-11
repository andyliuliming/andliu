"use strict";define("InsightsExtension/Client/Events/Parts/EventsSummaryPart",["require","exports","../EventsArea",
"../Utilities/ActionUtility","../Constants","Events/EventsResources"],function(n,t,i,r,u,f){var e=MsPortalFx.
ViewModels.Controls.Visualization.Chart,o=function(){function n(n,t,i){var r=this;this.subscriptionId=
ko.observable();this.chart=ko.observable(undefined);this.hasData=ko.observable(!1);this.size=ko.observable(
undefined);this.currentFilter=ko.observable();this.filterSetting=ko.observable();this._timestamp=ko.
observable();this._criticalSeriesName=u.SeriesNames.critical;this._errorSeriesName=u.SeriesNames.error;
this._warningSeriesName=u.SeriesNames.warning;this._informationalSeriesName=u.SeriesNames.informational;
this.options=ko.observable(null);this.defaultFilter=ko.observable();this._container=n;this._container.
partTitle(f.eventsSummaryTitle);this.chart(this._createChart());this._container.registerForDispose(this.
chart());this._dataView=i.eventsData.actionsCache.createView(this._container);ko.computed(this._container,
function(){r._onDateRefreshed()}).extend({throttle:3});this.size.subscribe(this._container,this._onSizeChanged.
bind(this));ko.reactor(this._container,function(){r.hasData()?r._container.noDataMessage(""):r._container.
noDataMessage(f.noEventsAvailable)})}return n.prototype.onInputsSet=function(n,t){return this._setDefaultFilter(
n.resourceId),this._setCurrentFilter(n,t),this._timestamp(this.currentFilter().timespan),this._dataView.
fetch(this.currentFilter())},n.prototype._setCurrentFilter=function(n,t){n.editedFilter?(this.filterSetting(
n.editedFilter),this.currentFilter(n.editedFilter)):t&&t.content&&t.content.filterSetting?(this.filterSetting(
t.content.filterSetting),this.currentFilter(t.content.filterSetting)):this.currentFilter(this.defaultFilter(
))},n.prototype._setDefaultFilter=function(n){var t,i;MsPortalFx.ViewModels.Services.ResourceTypes.isResourceGroupId(
n)?(t=MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceGroupDescriptor(n),this._container.assetName(
t.resourceGroup),this.defaultFilter({subscriptionId:t.subscription,resourceGroupName:t.resourceGroup,
timespan:{duration:10080},level:null})):(i=MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceDescriptor(
n),this._container.assetName(i.resource),this.defaultFilter({resourceId:n,timespan:{duration:10080},
level:null}))},n.prototype._onSizeChanged=function(n){n===2?(this.chart().xAxis.showAxis(!1),this.chart(
).yAxis.showAxis(!0)):n===4?(this.chart().xAxis.showAxis(!1),this.chart().yAxis.showAxis(!0),this.chart(
).metrics.visible(!1)):n===5?(this.chart().xAxis.showAxis(!0),this.chart().yAxis.showAxis(!0),this.chart(
).metrics.visible(!1)):n===3&&(this.chart().xAxis.showAxis(!0),this.chart().yAxis.showAxis(!0),this.
chart().metrics.visible(!1))},n.prototype._onDateRefreshed=function(){var t=this._dataView.items(),f,
o,s,h,n=0,i,l,c;if(!t){this.hasData(!0);return}f=new e.Series;o=new e.Series;s=new e.Series;h=new e.
Series;f.name(this._criticalSeriesName);o.name(this._warningSeriesName);s.name(this._errorSeriesName);
h.name(this._informationalSeriesName);i=[];t=r.sortByTimestamp(t);this._timestamp()&&(this._timestamp(
).duration?(c=new Date,l=new Date(c.getTime()-this._timestamp().duration*6e4)):(l=this._timestamp().
startTime,c=this._timestamp().endTime));t.length>0&&(i=r.calculateActionCount(t));i.length<u.maxNumberOfTicksOnXAxis?
this.chart().xAxis.ticks(i.length):this.chart().xAxis.ticks(u.maxNumberOfTicksOnXAxis);i.forEach(function(
t){f.values.push(new MsPortalFx.ViewModels.Controls.Visualization.Chart.ChartItem(t.timestamp,t.criticalCount));
s.values.push(new MsPortalFx.ViewModels.Controls.Visualization.Chart.ChartItem(t.timestamp,t.errorCount));
o.values.push(new MsPortalFx.ViewModels.Controls.Visualization.Chart.ChartItem(t.timestamp,t.warningCount));
h.values.push(new MsPortalFx.ViewModels.Controls.Visualization.Chart.ChartItem(t.timestamp,t.informationalCount));
var i=t.criticalCount+t.errorCount+t.warningCount+t.informationalCount;i>n&&(n=i)});n<1?this.hasData(
!1):this.hasData(!0);this.hasData()&&(!0&&this.chart().series.push(f),!0&&this.chart().series.push(s),
!0&&this.chart().series.push(o),!0&&this.chart().series.push(h));n=Math.ceil(n/4)*4;this.chart().yAxis.
max(n)},n.prototype._createChart=function(){var n=new e.ViewModel(this._container),t=new e.BarChartView(
0),i=new e.SeriesView,r=new e.SeriesView,u=new e.SeriesView,f=new e.SeriesView;return i.seriesName(this.
_criticalSeriesName),i.cssClass("msportalfx-bgcolor-c0"),r.seriesName(this._errorSeriesName),r.cssClass(
"msportalfx-bgcolor-d0"),u.seriesName(this._warningSeriesName),u.cssClass("msportalfx-bgcolor-b0"),f.
seriesName(this._informationalSeriesName),f.cssClass("msportalfx-bgcolor-g1"),t.seriesView.push(i),t.
seriesView.push(r),t.seriesView.push(u),t.seriesView.push(f),n.views.push(t),n.autogenerateSeriesViews(
!1),n.series=ko.observableArray([]),n.xAxis.scale(2),n.yAxis.scale(1),n.xAxis.position(3),n.yAxis.position(
4),n.yAxis.labelPadding(26),n.yAxis.ticks(4),n},n}();t.EventsSummaryPart=o})