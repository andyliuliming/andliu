var __extends,MonitoringExtension;(function(n){var t;(function(n){"use strict";(function(n){n[n.GreaterThan=
0]="GreaterThan";n[n.GreaterThanOrEqual=1]="GreaterThanOrEqual";n[n.LessThan=2]="LessThan";n[n.LessThanOrEqual=
3]="LessThanOrEqual"})(n.ConditionOperator||(n.ConditionOperator={}));var t=n.ConditionOperator})(t=
n.Models||(n.Models={}))})(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(
){"use strict"})(t=n.Models||(n.Models={}))}(MonitoringExtension||(MonitoringExtension={})),function(
n){var t;(function(){"use strict"})(t=n.Models||(n.Models={}))}(MonitoringExtension||(MonitoringExtension=
{})),function(n){var t;(function(){"use strict"})(t=n.Models||(n.Models={}))}(MonitoringExtension||(MonitoringExtension=
{})),function(n){var t;(function(n){"use strict";var t=function(){function t(t,i){this.chartStartDate=
null;this.ResourceIdentifier=i;this.SubscriptionId=t;this.timeRange=n.MetricTimeRange.TwentyFourHours.
TimeRange;this.timeGrain=n.MetricTimeRange.TwentyFourHours.TimeGrain}return t}();n.AllMetricsQueryParameter=
t})(t=n.Models||(n.Models={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(
n){"use strict";var t=function(){function n(){}return n}();n.TimeWindow=t})(t=n.Models||(n.Models={})
)}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(n){"use strict";var t=
function(){function n(){}return n}();n.MetricAvailability=t})(t=n.Models||(n.Models={}))}(MonitoringExtension||
(MonitoringExtension={})),function(n){var t;(function(n){"use strict";var t=function(){function n(){}
return n.GetMetricName=function(t,i){var r=t;return i&&(r=i+n.formatter+t),r},n.GetResourceIdForMetricsRequest=
function(n){var t=n,i=n.toLowerCase();return i.indexOf("microsoft/")>=0?t=n:i.indexOf("webspaces")>=
0&&(t="microsoft/webspaces"+n),t},n.formatter="|",n}();n.MetricRequestUtil=t})(t=n.Utilities||(n.Utilities=
{}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(t){"use strict";var
i=n.Utilities,r=function(){function n(){}return n.getPrimaryMetricList=function(n){return n?n[n.PrimaryAggregationType(
)]:null},n.ParseMetricResponseByDisplayName=function(n,t){return n().first(function(n){return StringEx.
equals(n.DisplayName(),t,0)})},n.GetMetricResponse=function(n,t,i){return n().first(function(n){return StringEx.
equals(n.Name(),t,0)&&StringEx.equals(n.ResourceIdentifier(),i,0)})},n.GetMetricResponseByMetricIdentifier=
function(n,t){return n().first(function(n){var r=i.MetricUtility.getMetricIdentifier(n.ResourceIdentifier(
),n.Name());return StringEx.equals(r,t,0)})},n.GenerateMetricDisplayName=function(n){for(var t="",i=
0,i=0,r=n().length;i<r;i++)t=t+n()[i].DisplayName(),i<r-1&&(t=t+" and ");return t},n}();t.MetricResponse=
r})(t=n.Models||(n.Models={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(
n){"use strict";var i=function(){function n(){}return n.Percent="percent",n.Count="count",n.Seconds=
"seconds",n.Milliseconds="milliseconds",n.Bytes="bytes",n}(),t;n.MetricUnit=i;t=function(){function n(
){}return n.GetMetricDefinitionByNames=function(n,t){var i=[];return t.forEach(function(t){var r=n.first(
function(n){return n.Name()===t});if(!r)throw new Error("could not find metric definition with name {0}".
format(t));i.push(r)}),i},n}();n.MetricDefinition=t})(t=n.Models||(n.Models={}))}(MonitoringExtension||
(MonitoringExtension={})),function(n){var t;(function(){"use strict"})(t=n.Models||(n.Models={}))}(MonitoringExtension||
(MonitoringExtension={})),function(n){var t;(function(n){"use strict";var t=function(){function n(n,
t,i){this.ChartGapFillingBehaviour=null;this.isLoading=!0;this.IsSelected=!0;t&&t.substring(0,1)==="/"&&
(t=t.substring(1));this.Name=i;this.RelativeUri="{0}/services/monitoring/metrics/resources/{1}".format(
n,t);this.StartTime=new Date}return n}();n.QuerySelection=t})(t=n.Models||(n.Models={}))}(MonitoringExtension||
(MonitoringExtension={})),function(n){var t;(function(n){var t;(function(n){var t;(function(n){"use strict";
function i(){var i="MonitoringExtension.ExtensionAssets.Resources.General",n=window,t;if(n.Resources&&
n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error("Unable to find the resources for '"+
i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o;n.metricUnitCountPerSecond=t("metricUnitCountPerSecond");
n.metricUnitBytesPerSecond=t("metricUnitBytesPerSecond");n.metricChartEmptySelection=t("metricChartEmptySelection");
n.storageMetricValuesNotAvailable=t("storageMetricValuesNotAvailable");n.gridColumnMetricResourceName=
t("gridColumnMetricResourceName");n.usagePartMessageNoDataAvailable=t("usagePartMessageNoDataAvailable");
n.noDataFound=t("noDataFound");n.loadingMessage=t("loadingMessage");n.metricPartTitleFormatter=t("metricPartTitleFormatter");
n.usageTimeRangeToday=t("usageTimeRangeToday");n.metricValuesNotAvailable=t("metricValuesNotAvailable");
n.usagePartCaptionTotal=t("usagePartCaptionTotal");n.usagePartCaptionCurrentWithName=t("usagePartCaptionCurrentWithName");
n.usagePartCaptionAverageWithName=t("usagePartCaptionAverageWithName");n.usageGaugePartDefaultTitle=
t("usageGaugePartDefaultTitle");n.minutesLabel=t("minutesLabel");n.hoursLabel=t("hoursLabel");n.metricUnitSeconds=
t("metricUnitSeconds");n.metricUnitPercent=t("metricUnitPercent");n.metricUnitMilliseconds=t("metricUnitMilliseconds");
n.metricUnitCount=t("metricUnitCount");n.metricUnitBytes=t("metricUnitBytes");n.metricSelectorCustom=
t("metricSelectorCustom");n.metricSelectorPastWeek=t("metricSelectorPastWeek");n.metricSelectorToday=
t("metricSelectorToday");n.metricSelectorPastHour=t("metricSelectorPastHour");n.timeRangeTitle=t("timeRangeTitle");
n.metricsTitle=t("metricsTitle");n.usageBladeTitle=t("usageBladeTitle");n.usagePartCaptionAverage=t(
"usagePartCaptionAverage");n.usageQuotaUnlimited=t("usageQuotaUnlimited");n.usageQuotaUnitLabelMinutes=
t("usageQuotaUnitLabelMinutes");n.usageQuotaUnitLabelHours=t("usageQuotaUnitLabelHours");n.usagePartTitleQuotas=
t("usagePartTitleQuotas");n.usagePartCaptionThreshold=t("usagePartCaptionThreshold");n.usagePartCaptionResets=
t("usagePartCaptionResets");n.usagePartCaptionCurrent=t("usagePartCaptionCurrent");n.gridEmptyData=t(
"gridEmptyData");n.gridColumnAvg=t("gridColumnAvg");n.gridColumnMetricName=t("gridColumnMetricName");
n.gridColumnMax=t("gridColumnMax");n.gridColumnMin=t("gridColumnMin");n.chartToolTipFormatter=t("chartToolTipFormatter");
n.metricValueFormat=t("metricValueFormat");n.formatMetricUnit=t("formatMetricUnit");n.percentage=t("percentage");
n.bytesPerSecond=t("bytesPerSecond");n.milliseconds=t("milliseconds");n.millisecondsShortForm=t("millisecondsShortForm");
n.secondsShortForm=t("secondsShortForm");n.seconds=t("seconds");n.minutesShortForm=t("minutesShortForm");
n.minutes=t("minutes");n.hoursShortForm=t("hoursShortForm");n.hours=t("hours");n.daysShortForm=t("daysShortForm");
n.days=t("days"),function(n){var i;(function(n){n.unknown=t("AvailabilityMonitoringGrid_Status_unknown");
n.notAvailable=t("AvailabilityMonitoringGrid_Status_notAvailable");n.available=t("AvailabilityMonitoringGrid_Status_available")}
)(i=n.Status||(n.Status={}))}(r=n.AvailabilityMonitoringGrid||(n.AvailabilityMonitoringGrid={})),function(
n){n.noRowsMessage=t("AvailabilityMonitoringDetailsGrid_noRowsMessage");var i;(function(n){n.time=t(
"AvailabilityMonitoringDetailsGrid_ColumnHeader_time");n.status=t("AvailabilityMonitoringDetailsGrid_ColumnHeader_status");
n.responseTime=t("AvailabilityMonitoringDetailsGrid_ColumnHeader_responseTime")})(i=n.ColumnHeader||
(n.ColumnHeader={}))}(u=n.AvailabilityMonitoringDetailsGrid||(n.AvailabilityMonitoringDetailsGrid={})
);n.valueAndUnit=t("valueAndUnit");n.unknown=t("unknown");n.timeRange=t("timeRange");n.success=t("success");
n.queryBuilderTitle=t("queryBuilderTitle");n.metricSelection=t("metricSelection");n.multipleMetricDisplayNamesConnector=
t("multipleMetricDisplayNamesConnector");n.metricDisplayNamesConnector=t("metricDisplayNamesConnector");
n.multipleMetricDisplayNameSeperator=t("multipleMetricDisplayNameSeperator");n.metricDisplayNameConnector=
t("metricDisplayNameConnector");n.metricDetailsBladeTitle=t("metricDetailsBladeTitle");n.metricEquals=
t("metricEquals");n.failure=t("failure");n.endpointFormattedStateTemplate=t("endpointFormattedStateTemplate");
n.doneButton=t("doneButton"),function(n){n.partTitle=t("AvailabilityMonitoringPart_partTitle");n.notConfiguredHeader=
t("AvailabilityMonitoringPart_notConfiguredHeader");n.dataLoadFailed=t("AvailabilityMonitoringPart_dataLoadFailed")}
(f=n.AvailabilityMonitoringPart||(n.AvailabilityMonitoringPart={})),function(n){n.pathColumn=t("AvailabilityMonitoringMapDetailsPart_pathColumn");
n.nameColumn=t("AvailabilityMonitoringMapDetailsPart_nameColumn");n.locationColumn=t("AvailabilityMonitoringMapDetailsPart_locationColumn");
n.lastResultColumn=t("AvailabilityMonitoringMapDetailsPart_lastResultColumn")}(e=n.AvailabilityMonitoringMapDetailsPart||
(n.AvailabilityMonitoringMapDetailsPart={})),function(n){var i;(function(n){n.status=t("AvailabilityMonioringGrid_ColumnHeader_status");
n.name=t("AvailabilityMonioringGrid_ColumnHeader_name");n.location=t("AvailabilityMonioringGrid_ColumnHeader_location")}
)(i=n.ColumnHeader||(n.ColumnHeader={}))}(o=n.AvailabilityMonioringGrid||(n.AvailabilityMonioringGrid=
{}))})(t=n.General||(n.General={}))})(t=n.Resources||(n.Resources={}))})(t=n.ExtensionAssets||(n.ExtensionAssets=
{}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(t){"use strict";var
i=n.ExtensionAssets.Resources.General,r=function(){function n(){}return n.AllTimeRanges=function(){return[
n.ThirtyMinutes,n.SixHours,n.TwentyFourHours,n.SevenDays,n.OneHour]},n.GetMetricTimeRange=function(t)
{return n.AllTimeRanges().first(function(n){return n.TimeRange===t})},n.SevenDays={TimeRange:"P7D",TimeGrain:
"P1D",DisplayName:"7 Days",LongFormatter:"MM/dd",ShortFormatter:"dd",DisplayNameForPartTitle:i.metricSelectorPastWeek},
n.TwentyFourHours={TimeRange:"PT24H",TimeGrain:"PT1H",DisplayName:"24 Hours",LongFormatter:"ht",ShortFormatter:
"h",DisplayNameForPartTitle:i.metricSelectorToday},n.SixHours={TimeRange:"PT6H",TimeGrain:"PT1H",DisplayName:
"6 Hours",LongFormatter:"ht",ShortFormatter:"h",DisplayNameForPartTitle:""},n.ThirtyMinutes={TimeRange:
"PT30M",TimeGrain:"PT1M",DisplayName:"Half Hour",LongFormatter:"min",ShortFormatter:"m",DisplayNameForPartTitle:
""},n.OneHour={TimeRange:"PT1H",TimeGrain:"PT5M",DisplayName:"One Hour",LongFormatter:"min",ShortFormatter:
"m",DisplayNameForPartTitle:i.metricSelectorPastHour},n}();t.MetricTimeRange=r})(t=n.Models||(n.Models=
{}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(n){"use strict";var
t=function(){function t(){}return t.GetMetricMapping=function(t){return{name:t,metricListNames:t.split(
";"),displayName:t,cssClasses:["azc-barChart-data-success"],defaultMetricTimeRange:n.MetricTimeRange.
TwentyFourHours}},t.GetCustomMapping=function(t){return{displayName:t.join(";"),name:t.join(";"),cssClasses:
[],metricListNames:t,defaultMetricTimeRange:n.MetricTimeRange.TwentyFourHours}},t}();n.MetricGroupMappings=
t})(t=n.Models||(n.Models={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(
t){"use strict";var i=ExtensionCore.Utilities,r=n.Utilities,u=function(){function n(n,u,f,e,o,s,h){var
l,a,c;this.Name=u.join(";");this.DisplayName=r.MetricUtility.getMetricsPartTitle(f);e?(this.MetricTimeRange=
e,this.DefaultTimeRange=e.TimeRange):(this.MetricTimeRange=t.MetricTimeRange.TwentyFourHours,this.DefaultTimeRange=
this.MetricTimeRange.TimeRange);this.DefaultTimeGrain=o?o:this.MetricTimeRange.TimeGrain;this.ResourceUri=
n;this.MetricList=u;this.MetricDisplayNames=f;l=this.MetricTimeRange.TimeRange;this.EndDate=h?h:i.DateTimeUtility.
roundToHigherHalfHour(new Date);s?this.StartDate=i.DateTimeUtility.roundToLowerHalfHour(s):(c=new Date(
this.EndDate.getTime()),a=i.DateTimeUtility.getMinutesFromXmlTimeDuration(l),c.setMinutes(-a,0,0),this.
StartDate=c);e&&!h&&(this.EndDate=null)}return n.prototype.GetMetricSelection=function(n,i){var r=[];
return this.MetricList.forEach(function(u){r.push(new t.QuerySelection(n,i,u))}),r},n.PrepareGraph=function(
i,u){var o=!1,s=!1,v=0,h=[],c=[],f,e=[],l,a;return(u.forEach(function(l){l.MetricList.forEach(function(
a){var b=new MsPortalFx.ViewModels.Controls.Visualization.Chart.Series,tt=[],p,k=[],y=0,d=0,w,g,it;if(
(w=t.MetricResponse.GetMetricResponse(i,a,l.ResourceUri),w)&&(f=w,p=f.PrimaryAggregationType(),f[p]))
{if(b.name(r.MetricUtility.getMetricIdentifier(w.ResourceIdentifier(),w.Name())),f[p]()&&(it=f[p]().
length,f[p]().forEach(function(t,i){var h,r;typeof t=="number"&&(s=!0);v+=t;y+=t;d+=f.Count()[i];o?(
k.push(t),e[i][f.Name()]=t):(r=u[0].MetricTimeRange,k.push([n._prepareColumnLabel(f.StartTime(),f.TimeGrain(
),i,!1,r.ShortFormatter,r.LongFormatter),t]),g={time:parseInt(f.StartTime())+f.TimeGrain().TotalMilliseconds(
)*i},g[f.Name()]=t,e.push(g));t!==null&&(h=new Date(parseInt(f.StartTime())+f.TimeGrain().TotalMilliseconds(
)*i),tt.push(new MsPortalFx.ViewModels.Controls.Visualization.Chart.ChartItem(h,t)))})),b.values(tt),
c.push(b),f.Unit().toLowerCase()==="bytes"){var rt=y/d,ut=ExtensionCore.Utilities.Formatters.getFileSizeFormat(
rt,"B"),ft=ut.unitName,nt=o?0:1;y=0;k.forEach(function(n,t){var i=ExtensionCore.Utilities.Formatters.
convertDateSizeFormat(n[nt],"B",ft);e[t][f.Name()]=n[nt]!==null?i.value:null;n[nt]=i.value;y+=i.value}
)}p.toUpperCase()==="AVERAGE"&&(y=y/d);h.push(y.toString())}})}),s)?(l=f.FormattedUnit()?f.FormattedUnit(
).unitName:f.Unit(),a=n._getChartType(l),{series:c,chartType:a,tabluarData:e,settings:h}):null},n._getChartType=
function(n){var t=0;switch(n.toLowerCase()){case"count":t=4;break;case"percent":case"bytes":default:
t=0}return t},n._prepareColumnLabel=function(n,t,i,r,u,f){var o=parseInt(n)+t.TotalMilliseconds()*i,
e=new Date(o);return r?i<12||e.getDate()===1&&e.getHours()===11?e.toString(f):e.getHours()>11?"":e.toString(
u):i===0||e.getHours()===0||e.getHours()===12?e.toString(f):e.toString(u)},n.prototype._mergeData=function(
n,t){if(n.length!==t.length)throw"Arrays must be same length";for(var r=[],i=0;i<n.length;i++)r.push(
[].concat(n[i],t[i]));return r},n}();t.MetricGroup=u})(t=n.Models||(n.Models={}))}(MonitoringExtension||
(MonitoringExtension={})),function(n){var t;(function(n){"use strict";var t=function(){function n(n)
{var t=new Date,i=MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceDescriptor(n.ResourceUri);
this.chartStartDate=new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),0,0,0);this.ResourceIdentifier=
n.ResourceUri;this.SubscriptionId=i.subscription;this.timeRange=n.DefaultTimeRange;this.timeGrain=n.
DefaultTimeGrain;n.StartDate&&(this.chartStartDate=n.StartDate);n.EndDate&&(this.chartEndDate=n.EndDate);
this.chartStartDate&&this.chartEndDate&&(this.timeRange=null);this.selection=n.GetMetricSelection(this.
SubscriptionId,this.ResourceIdentifier)}return n}();n.MetricSelectionQueryParameter=t})(t=n.Models||
(n.Models={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(n){"use strict";
var t=function(){function n(){}return n}();n.UsageResult=t})(t=n.Models||(n.Models={}))}(MonitoringExtension||
(MonitoringExtension={})),function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.Availability||
(n.Availability={}))})(t=n.Models||(n.Models={}))}(MonitoringExtension||(MonitoringExtension={})),function(
n){var t;(function(n){var t;(function(){"use strict"})(t=n.Availability||(n.Availability={}))})(t=n.
Models||(n.Models={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(n)
{var t;(function(){"use strict"})(t=n.Availability||(n.Availability={}))})(t=n.Models||(n.Models={})
)}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(t){var i;(function(t){
"use strict";var i=n.ExtensionAssets.Resources.General,u,r;(function(n){n[n.Available=0]="Available";
n[n.Unavailable=1]="Unavailable";n[n.Unknown=2]="Unknown"})(t.EndpointAvailabilityState||(t.EndpointAvailabilityState=
{}));u=t.EndpointAvailabilityState;r=function(){function n(t,r,u,f,e,o,s){this.id=t.ConfigId;this.name=
t.Name;this.location=r;this.uptimeMetric=u;this.responseTimeMetric=f;this.uptimeMetricName="WindowsAzure.Availability|"+
u.Name;this.responseTimeMetricName="WindowsAzure.Availability|"+f.Name;this.state=n.getAvailabilityStateFromUptimeMetricsResponse(
e);this.formattedState=n.getLocalizedState(this.state);this.lastResponseTime=n.getLastResponseTimeFromMetricResponse(
o);this.lastResponseTime&&(this.formattedState=i.endpointFormattedStateTemplate.format(this.formattedState,
this.lastResponseTime));this.path=s}return n.getLastResponseTimeFromMetricResponse=function(n,t){var
i=n?n[n.PrimaryAggregationType()]():null,r;return t=typeof t=="number"?t:i.length-1,r=i?i[t]:null,r?
parseFloat(r.toFixed(2)):null},n.getLocalizedState=function(n){switch(n){case 0:return i.success;case
1:return i.failure;default:return i.unknown}},n.getAvailabilityStateFromUptimeMetricsResponse=function(
t,i){var r=t?t[t.PrimaryAggregationType()]():null,u;return i=typeof i=="number"?i:r.length-1,u=r?r[i]:
null,n.getAvailabilityStateFromUptimeValue(u)},n.getAvailabilityStateFromUptimeValue=function(n){return typeof
n=="number"?n===100?0:1:2},n}();t.Endpoint=r})(i=t.Availability||(t.Availability={}))})(t=n.Models||
(n.Models={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(n){"use strict";
function i(n){return ExtensionCore.Net.post("/api/MonitoringV2/GetMetricSelection",n)}function r(n){
var i=$.Deferred(),r;return(r=MsPortalFx.Data.Loader.getDataSet(n.ResourceIdentifier,!0),t[n.ResourceIdentifier])?
t[n.ResourceIdentifier]:(t[n.ResourceIdentifier]=i.promise(),ExtensionCore.Net.post("/api/MonitoringV2/AllMetricDefinitions",
n).always(function(){delete t[n.ResourceIdentifier]}).done(function(n){r.merge(n);i.resolve(r.data())}
).fail(function(){i.reject()}),i.promise())}function u(n,t){return ExtensionCore.Net.post("/api/Monitoring/GetAvailabilityConfiguration",
{subscriptionId:n,resourceIdentifier:t})}function f(n,t,i){return ExtensionCore.Net.post("/api/Monitoring/UpdateAvailabilityConfiguration",
{subscriptionId:n,resourceIdentifier:t,endpointConfigs:i})}var t={};n.getMetrics=i;n.getAllMetricDefinitions=
r;n.getAvailabilityConfiguration=u;n.updateAvailabilityConfiguration=f})(t=n.Ajax||(n.Ajax={}))}(MonitoringExtension||
(MonitoringExtension={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(
var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var
t;(function(t){"use strict";var i=MsPortalFx.ViewModels.Controls.Visualization.Chart,r=function(t){function r(
n,i){t.call(this,i);this._initializeViewModel(n,i)}return __extends(r,t),r.ApplyTooltipFormatter=function(
t,r){if(t.seriesView()&&t.seriesView().length>0)t.seriesView().forEach(function(t){t.tooltipFormatter(
n.ExtensionAssets.Resources.General.chartToolTipFormatter)});else{var f=t.chartType(),u;r.forEach(function(
r){switch(f){case 0:u=new i.LineChartSeriesView;break;case 5:case 4:case 3:u=new i.SeriesView}u.seriesName(
r.name());u.tooltipFormatter(n.ExtensionAssets.Resources.General.chartToolTipFormatter);t.seriesView.
push(u)})}},r.prototype._initializeViewModel=function(n,t){var i=this;this.series([]);this.xAxis.scale(
2);this.yAxis.scale(1);this.xAxis.position(3);this.yAxis.position(4);this.yAxis.showGridLines(!0);this.
yAxis.showTickMarks(!1);this.metrics.visible(!1);n?(this.xAxis.ticks(4),this.yAxis.ticks(4),this._showHideAxes(
n.size()),n.size.subscribe(t,function(n){i._showHideAxes(n)})):(this.xAxis.showAxis(!1),this.yAxis.showAxis(
!1))},r.prototype._showHideAxes=function(n){n===2?(this.xAxis.showAxis(!1),this.yAxis.showAxis(!1)):
n===4?(this.xAxis.showAxis(!1),this.yAxis.showAxis(!0)):n===3?(this.xAxis.showAxis(!0),this.yAxis.showAxis(
!1)):(n===5||n===6||n===10)&&(this.xAxis.showAxis(!0),this.yAxis.showAxis(!0))},r}(i.ViewModel);t.MetricsChart=
r})(t=n.Controls||(n.Controls={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;
(function(t){"use strict";function u(t,r){var u=new n.Models.AllMetricsQueryParameter(t,r);return ExtensionCore.
Data.getRefCountedDataAsync(i(t,r),function(){return n.Ajax.getAllMetricDefinitions(u).then(function(
n){return n})})}function f(n,t){ExtensionCore.Data.releaseRefCountedData(i(n,t))}function e(n){return r(
n)}function r(t){var i=[];return $.each(t,function(t,r){i.push(new n.Models.MetricSelectionQueryParameter(
r))}),ExtensionCore.Data.getObservableDataAsync(function(){return n.Ajax.getMetrics(i).then(function(
n){return n.forEach(function(n){if(n){n.StartTime&&(n.StartTime=new Date(n.StartTime).getTime().toString(
));var t=n.PrimaryAggregationType;t&&StringEx.equals(t,"Last",0)&&(n.PrimaryAggregationType="Average")}
}),n})})}function o(){}function s(){}function h(n){return"{0}-{1}-{2}".format(n.ResourceUri,n.Name,n.
DefaultTimeRange)}function i(n,t){return"getAllMetricDefinitions-{0}-{1}".format(n,t)}t.getAllMetricDefinitions=
u;t.releaseAllMetricDefinitions=f;t.getMetrics=e;t.getMetricsFromMultipleResources=r;t.releaseGetMetricsForMultipleResourceIdentifiers=
o;t.releaseGetMetrics=s;t.getMetricCacheKey=h;t.getAllMetricDefinitionsCacheKey=i})(t=n.Data||(n.Data=
{}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(n){var t;(function(
){"use strict"})(t=n.PartData||(n.PartData={}))})(t=n.ViewModels||(n.ViewModels={}))}(MonitoringExtension||
(MonitoringExtension={})),function(n){var t;(function(n){var t;(function(n){"use strict";var t=function(
){function n(){}return n}();n.MetricIdentifier=t})(t=n.PartData||(n.PartData={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(){"use strict"}
)(t=n.DataViews||(n.DataViews={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;
(function(){"use strict"})(t=n.DataViews||(n.DataViews={}))}(MonitoringExtension||(MonitoringExtension=
{})),function(n){var t;(function(t){"use strict";var i=function(t){function i(){t.apply(this,arguments)}
return __extends(i,t),i.prototype._load=function(t){return n.Data.getAllMetricDefinitions(t.monitoringId.
subscriptionId,t.monitoringId.resourceIdentifier).then(function(n){return{metricDefinitions:n}})},i.
prototype._release=function(){t.prototype._release.call(this);this.query&&n.Data.releaseAllMetricDefinitions(
this.query.monitoringId.subscriptionId,this.query.monitoringId.resourceIdentifier)},i}(ExtensionCore.
Data.DataViewBase);t.MetricDefinitionsDataView=i})(t=n.DataViews||(n.DataViews={}))}(MonitoringExtension||
(MonitoringExtension={})),function(n){var t;(function(t){"use strict";var i=function(){function t(){}
return t.prototype.getUsageDataView=function(){return new n.DataViews.UsageDataView(this)},t.prototype.
listUsageMetrics=function(t,i){var u=this._getUsageMetricsDataSetName(t,i),f={fetchData:function(){return n.
Ajax.listUsageMetrics(t,i)}},r;return r=ExtensionCore.Data.getRefCountedDataSet(u,f),r.initialLoadPromise.
then(function(){return r.dataSet.data})},t.prototype.releaseUsageMetrics=function(n,t){var i=this._getUsageMetricsDataSetName(
n,t);ExtensionCore.Data.releaseRefCountedDataSet(i)},t.prototype._getUsageMetricsDataSetName=function(
n,t){return"UsageMetrics|{0}|{1}".format(n,t)},t.instance=new t,t}();t.DataContext=i})(t=n.Data||(n.
Data={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(t){"use strict";
function e(n){var t=ExtensionCore.Utilities.Formatters.getFileSizeFormat(n,"B");return{value:t.value,
unitName:"bytes/sec",unitDisplayName:i.bytesPerSecond.format({bytes:t.unitDisplayName}),unitLongDisplayName:
i.bytesPerSecond.format({bytes:t.unitLongDisplayName}),conversionFactor:t.conversionFactor,conversionValue:
t.conversionValue}}var i=n.ExtensionAssets.Resources.General,r={bytes:function(n,t){return ExtensionCore.
Utilities.Formatters.getFileSizeFormat(n,"B",t)},kilobytes:function(n,t){return ExtensionCore.Utilities.
Formatters.getFileSizeFormat(n,"KB",t)},mbytes:function(n,t){return ExtensionCore.Utilities.Formatters.
getFileSizeFormat(n,"MB",t)},gbytes:function(n,t){return ExtensionCore.Utilities.Formatters.getFileSizeFormat(
n,"GB",t)},tbytes:function(n,t){return ExtensionCore.Utilities.Formatters.getFileSizeFormat(n,"TB",t)}
,bytespersecond:e,"bytes/sec":e,milliseconds:function(n,t){var f=i.millisecondsShortForm,e=i.milliseconds,
u;return n>=1e3?(u=r.seconds(n/1e3,t),u.conversionValue=u.conversionValue/1e3,u):{value:n?parseInt(n.
toFixed(t),10):n,unitName:"milliseconds",unitDisplayName:f,unitLongDisplayName:e,conversionFactor:"",
conversionValue:1}},seconds:function(n,t){var e,u;if(n<1)return e=r.milliseconds(n*1e3,t),e.conversionFactor=
"ms",e.conversionValue=1e3,e;var o="seconds",l=0,s=i.secondsShortForm,h=i.seconds,c="",f=1;return n>=
60&&(u=n/60,u>1&&u<60?(o="minutes",s=i.minutesShortForm,h=i.minutes,c="m",f=f/60,n=u):u>=60&&u<1440?
(o="hours",s=i.hoursShortForm,h=i.hours,c="h",f=f/3600,n=u/60):u>=1440&&(o="days",s=i.daysShortForm,
h=i.days,c="d",f=f/86400,n=u/1440)),n%1!=0&&(l=t),{value:n?parseFloat(n.toFixed(l)):n,unitName:o,unitDisplayName:
s,unitLongDisplayName:h,conversionFactor:c,conversionValue:f}},percent:function(n,t){var r=0;return n%
1!=0&&(r=t),{value:n?parseFloat(n.toFixed(r)):n,unitName:"%",unitDisplayName:i.percentage,unitLongDisplayName:
i.percentage,conversionFactor:"",conversionValue:1}},countpersecond:function(n,t){var r=n,u="",f=1,e=
0;return n>=1e3&&(r=n/1e3,u="k",f=1/1e3),r%1!=0&&(e=t),{value:r?parseFloat(r.toFixed(e)):r,unitName:
"countpersecond",unitDisplayName:i.bytesPerSecond.format({bytes:u}),unitLongDisplayName:i.bytesPerSecond.
format({bytes:u}),conversionFactor:u,conversionValue:f}},count:function(n,t){var i=n,r="",u=1,f=0;return n>=
1e3&&(i=n/1e3,r="k",u=1/1e3),i%1!=0&&(f=t),{value:i?parseFloat(i.toFixed(f)):i,unitName:"count",unitDisplayName:
r,unitLongDisplayName:r,conversionFactor:r,conversionValue:u}}},u={terabytes:"tbytes",tb:"tbytes",gigabytes:
"gbytes",gb:"gbytes",megabytes:"mbytes",mb:"mbytes",kb:"kilobytes",percentage:"percent","%":"percent",
sec:"seconds"},f={bytes:{valueFromBaseUnit:1,unitName:"bytes"},"bytes/sec":{valueFromBaseUnit:1,unitName:
"bytes/sec"},kilobytes:{valueFromBaseUnit:1024,unitName:"bytes"},mbytes:{valueFromBaseUnit:1048576,unitName:
"bytes"},gbytes:{valueFromBaseUnit:Math.pow(1024,3),unitName:"bytes"},tbytes:{valueFromBaseUnit:Math.
pow(1024,4),unitName:"bytes"},milliseconds:{valueFromBaseUnit:.001,unitName:"seconds"},seconds:{valueFromBaseUnit:
1,unitName:"seconds"},minutes:{valueFromBaseUnit:60,unitName:"seconds"},hours:{valueFromBaseUnit:3600,
unitName:"seconds"},days:{valueFromBaseUnit:86400,unitName:"seconds"},count:{valueFromBaseUnit:1,unitName:
"count"},percent:{valueFromBaseUnit:1,unitName:"percent"}},o=function(){function n(){}return n.Format=
function(n,t,f){var e=t?t.toLowerCase():"",o,s;return f=isNaN(f)?ExtensionCore.Constants.Formatter.DefaultPrecision:
f,r[e]?o=r[e](n,f):u[e]?o=r[u[e]](n,f):(s=i[e]||t,o={value:n?Number(n.toFixed(f)):n,unitName:t,unitDisplayName:
s,unitLongDisplayName:s,conversionFactor:"",conversionValue:1}),o},n.GetBaseUnit=function(n){var t=n?
n.toLowerCase():"";return f[t]?f[t]:u[t]?f[u[t]]:{valueFromBaseUnit:1,unitName:n}},n}();t.MetricFormatter=
o})(t=n.Utilities||(n.Utilities={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var
t;(function(n){var t;(function(n){"use strict";var o=function(){function n(){}return n.listAlertMetricsUri=
"api/Alerts/ListAlertMetrics",n.createOrUpdateAlertRuleUri="api/Alerts/CreateOrUpdateAlertRule",n.getAlertRuleUri=
"api/Alerts/GetAlertRule",n.getAlertsSummaryUri="api/Alerts/GetAlertsSummary",n.deleteAlertRuleUri="api/Alerts/DeleteAlertRule",
n.isMonitoringDisabledUri="api/Alerts/IsMonitoringDisabled",n}(),t,i,r,u,f,e;n.AlertUris=o;t=function(
){function n(){}return n.ruleNameMaxLength=32,n.ruleNameRegEx="^[a-zA-Z0-9,.\\s]*$",n.ruleDescriptionMaxLength=
128,n.ruleDescriptionRegEx="^[a-zA-Z0-9,.\\s]*$",n.ruleThresholdRegEx="(^\\d+(\\.\\d{1,3})?$)|(^\\.d{1,3}?$)",
n.ruleAdditionalEmailsRegEx="^([a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@(?!.*\\.\\..*)[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4})?$|^([a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@(?!.*\\.\\..*)[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4})(;[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@(?!.*\\.\\..*)[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4})+$",
n}();n.Validations=t;i=function(){function n(){}return n.days01InHours=24,n.days07InHours=7*n.days01InHours,
n.days07=7,n}();n.TimeRange=i;r=function(){function n(){}return n.Unlimited=-1,n.UsageWarningLimit=80,
n.listUsageMetricsUri="api/Monitoring/ListUsageMetrics",n}();n.UsageMetric=r;u=function(){function n(
){}return n.Percent="Percent",n.Count="Count",n.Seconds="Seconds",n.Milliseconds="Milliseconds",n.Bytes=
"Bytes",n.BytesPerSecond="BytesPerSecond",n.CountPerSecond="CountPerSecond",n}();n.MetricUnit=u;f=function(
){function n(){}return n.AddAlert="AddAlertRule",n.SaveAlert="SaveAlertRule",n.EnableAlert="EnableAlertRule",
n.DisableAlert="DisableAlertRule",n.DeleteAlert="DeleteAlertRule",n}();n.NotificationEventSource=f;e=
function(){function n(){}return n.metricColors=["azc-color-g0","azc-color-h0","azc-color-i0","azc-color-a1",
"azc-color-b1","azc-color-c1","azc-color-d1","azc-color-e1","azc-color-f1","azc-color-g1"],n}();n.MetricChartColors=
e})(t=n.Constants||(n.Constants={}))})(t=n.ExtensionAssets||(n.ExtensionAssets={}))}(MonitoringExtension||
(MonitoringExtension={})),function(n){var t;(function(t){"use strict";var i=function(t){function i(i)
{var r=this;t.call(this,i);this.UsageItem=ko.observable(new n.Models.UsageResult);this.UsageItem.subscribe(
i,function(){r.instance(r._convertToPercent(r.UsageItem().CurrentValue(),r.UsageItem().Limit()));r.total(
r._convertToPercent(r.UsageItem().CurrentValue(),r.UsageItem().Limit()));r.instanceQuota(80);r.totalCaption(
"")})}return __extends(i,t),i.prototype._convertToPercent=function(n,t){return t>0?Math.round(n/t*1e4)/
100:0},i}(MsPortalFx.ViewModels.Controls.Visualization.QuotaGauge.ViewModel);t.UsageGauge=i})(t=n.Controls||
(n.Controls={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(t){var i;
(function(t){"use strict";var i=n.ExtensionAssets.Resources.General,r=function(n){function t(){n.call(
this);this.title(i.usageBladeTitle)}return __extends(t,n),t.prototype.onInputsSet=function(n){var t=
MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceDescriptor(n.resourceUri);this.subtitle(t.
resource)},t}(MsPortalFx.ViewModels.Blade);t.UsageBlade=r})(i=t.Blades||(t.Blades={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(t){var
i;(function(t){"use strict";var i=n.ExtensionAssets.Resources.General,r=MsPortalFx.ViewModels.Controls.
Visualization.Chart,u=MsPortalFx.ViewModels.Controls.Visualization.Metrics,f=function(t){function f(
r){t.call(this,r);this.subscriptionId=ko.observable();this.resourceUri=ko.observable();this.usageMetric=
ko.observable();this.metricName=ko.observable();this.timeRange=ko.observable();this.shortPeriodUsageMetric=
ko.observable();this.chartType=ko.observable();this._metricGroups=[];this._continueMetricRefresh=ko.
observable(!1);this._thresholdViewName=i.usagePartCaptionThreshold;this._container=r;this._initChartSetting(
);this._dataView=n.Data.DataContext.instance.getUsageDataView();this._dataView.onLoaded(this.onDataLoaded.
bind(this));r.registerForDispose(this._dataView)}return __extends(f,t),f.prototype.dispose=function(
){this._metricGroups.length>0&&(n.Data.releaseGetMetrics(this._metricGroups),this._continueMetricRefresh(
!1))},f.prototype.onInputsSet=function(t){var i=MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceDescriptor(
t.resourceUri),r=t.metricName||t.usageMetric;return this.subscriptionId(i.subscription),this.resourceUri(
t.resourceUri),this.usageMetric(t.usageMetric),this.timeRange(t.timeRange),this.shortPeriodUsageMetric(
t.shortPeriodUsageMetric),this.chartType(t.chartType),this.metricName(t.metricName),this._container.
noDataMessage(t.message),this._container.assetName(i.resource),this._timeRange=n.Models.MetricTimeRange.
GetMetricTimeRange(t.timeRange)||n.Models.MetricTimeRange.TwentyFourHours,this._metricGroups.length>
0&&(n.Data.releaseGetMetrics(this._metricGroups),this._metricGroups=[]),this._updateMetricGroups(r,this.
_timeRange),this._dataView.setQuery({monitoringId:{subscriptionId:this.subscriptionId(),resourceIdentifier:
this.resourceUri()}})},f.prototype.onDataLoaded=function(t){var r=this,u;this._usageResult=t.usageResults(
).first(function(n){return StringEx.equals(n.Name(),r.usageMetric(),0)});this.shortPeriodUsageMetric(
)&&(this._shortPeriodUsageResult=t.usageResults().first(function(n){return StringEx.equals(n.Name(),
r.shortPeriodUsageMetric(),0)}));this._usageResult&&(u=this._timeRange.DisplayName,this._timeRange.TimeRange===
n.Models.MetricTimeRange.TwentyFourHours.TimeRange&&(u=i.usageTimeRangeToday),this._container.partTitle(
"{0} {1}".format(this._usageResult.DisplayName(),u)));this._container.noDataMessage()||this._loadChartData(
!0).done(function(){r._continueMetricRefresh(!0);r._autoRefreshMetrics()})},f.prototype._initChartSetting=
function(){this.series([]);this.xAxis.scale(2);this.yAxis.scale(1);this.xAxis.position(3);this.yAxis.
position(4);this.yAxis.showGridLines(!0);this.yAxis.showTickMarks(!1);this.metrics.visible(!0);this.
legendPosition(2)},f.prototype._updateMetricGroups=function(t,i){this._metricGroups.push(new n.Models.
MetricGroup(this.resourceUri(),[t],[t],i))},f.prototype._prepareGraph=function(t){var f=this,h=!1,e=
[],c=[],i=0,o,l,a,u,s;return(t().forEach(function(n){var l=new r.Series,u=[],y=0,a=0,s={lastResetTime:
null,value:0},p=f._getResourceName(n.ResourceIdentifier()),w=n.PrimaryAggregationType(),v=0,t={id:"",
title:"",unit:"",average:null,current:null};o||(o=n.Unit());l.name(p);t.id="{0}/{1}".format(n.ResourceIdentifier(
),n.Name());t.title=p;t.unit=n.Unit();n[w]()&&(n[w]().forEach(function(t,r){var e;f._timeGrain||(f._timeGrain=
n.TimeGrain().TotalMilliseconds());typeof t=="number"&&(h=!0);t===null&&(t=0);y+=t;v+=n.Count()[r];e=
new Date(parseInt(n.StartTime())+n.TimeGrain().TotalMilliseconds()*r);f._aggregateValue(e,t,s);u.push(
new MsPortalFx.ViewModels.Controls.Visualization.Chart.ChartItem(e,s.value));i<s.value&&(i=s.value)}
),v>0&&(a=y/v),t.current=u[u.length-1].yValue,a&&(t.average=a),l.values(u),e.push(l),c.push(t))}),e.
sort(function(n,t){var i=0;return n.name()>t.name()?i=1:n.name()<t.name()&&(i=-1),i}),this._usageResult.
Limit()!==n.ExtensionAssets.Constants.UsageMetric.Unlimited&&(l=n.Utilities.MetricFormatter.GetBaseUnit(
o),a=n.Utilities.MetricFormatter.GetBaseUnit(this._usageResult.Unit()),s=this._usageResult.Limit()*a.
valueFromBaseUnit/l.valueFromBaseUnit,u=new r.LineSeries,u.name(this._thresholdViewName),u.value(s),
u.type(1),e.push(u),i<s&&(i=s)),h)?{series:e,usages:c,seriesUnit:o,seriesMax:i}:null},f.prototype._getNextResetTime=
function(){return this._shortPeriodUsageResult&&this._shortPeriodUsageResult.NextResetTime()?new Date(
Date.parse(this._shortPeriodUsageResult.NextResetTime())):this._usageResult&&this._usageResult.NextResetTime(
)?new Date(Date.parse(this._usageResult.NextResetTime())):null},f.prototype._getQuotaPeriodInSeconds=
function(){return this._shortPeriodUsageResult&&this._shortPeriodUsageResult.QuotaPeriod()?this._shortPeriodUsageResult.
QuotaPeriod().TotalMinutes()*60:this._usageResult&&this._usageResult.QuotaPeriod()?this._usageResult.
QuotaPeriod().TotalMinutes()*60:null},f.prototype._aggregateValue=function(n,t,i){var f=this._getNextResetTime(
),u=this._getQuotaPeriodInSeconds()*1e3,r,e;f&&u?(r=new Date,e=(f.valueOf()-n.valueOf())%u,r.setTime(
n.valueOf()+e),n<r?i.lastResetTime?i.lastResetTime<r&&(r.valueOf()-i.lastResetTime.valueOf()<=u?i.value+=
t:(i.value=t,i.lastResetTime.setTime(i.lastResetTime.valueOf()+u))):(i.value+=t,i.lastResetTime=new Date,
i.lastResetTime.setTime(r.valueOf()-u)):(i.value=t,i.lastResetTime=r)):i.value=t},f.prototype._initializeChartType=
function(){var n,t,i;this.views([]);switch(this.chartType()){case 3:case 4:case 5:t=new r.BarChartView(
0);this._originalChartData.series.forEach(function(n){if(n.type()!==1){var i=new r.SeriesView;i.seriesName(
n.name());t.seriesView.push(i)}});this._setupBarChartMouseEvents(t);n=t;break;case 0:i=new r.LineChartView;
this._originalChartData.series.forEach(function(n){if(n.type()!==1){var t=new r.LineChartSeriesView;
t.seriesName(n.name());i.seriesView.push(t)}});this._setupLineChartMouseEvents(i);n=i}n&&this.views.
push(n)},f.prototype._addThreshold=function(t){var i,u;t!==n.ExtensionAssets.Constants.UsageMetric.Unlimited&&
(i=new r.LineChartSeriesView,i.seriesName(this._thresholdViewName),i.hideFromLegend(!0),i.lineStyle(
5),u=new r.LineChartView,u.seriesView([i]),this.views.push(u))},f.prototype._loadChartData=function(
t){var r=this,u;return u=n.Data.getMetrics(this._metricGroups),t&&this._container.operations.add(u,{
blockUi:!0}),u.done(function(t){n.Utilities.MetricValuesNormalizer.NormalizeMetricValuesByUnit(t());
r._originalChartData=r._prepareGraph(t);r._originalChartData?(r._initializeChartType(),r._addThreshold(
r._usageResult.Limit()),r._updateLegendsInfo(),r.series(r._originalChartData.series),r.yAxis.displayLabelFormatter(
"{0}"+r._originalChartData.seriesUnit)):(r._container.noDataMessage(i.metricValuesNotAvailable),r.metrics.
items([]))})},f.prototype._autoRefreshMetrics=function(){var i=this,t=this._timeGrain;t>3e5?t=3e5:(t<
6e4||!t)&&(t=6e4);this._timer&&clearTimeout(this._timer);this._timer=setTimeout(function(){i._continueMetricRefresh(
)&&(n.Data.releaseGetMetrics(i._metricGroups),i._loadChartData(!1).done(function(){i._autoRefreshMetrics(
)}))},t)},f.prototype._getResourceName=function(n){var t=n.split("/");return t[t.length-1]},f.prototype.
_setupBarChartMouseEvents=function(n){var t=this;n.events.barMouseEnter=function(n){t._showSettings(
n)};n.events.barMouseLeave=function(){t._hideSettings()}},f.prototype._setupLineChartMouseEvents=function(
n){var t=this;n.events.pointMouseEnter=function(n){t._showSettings(n)};n.events.pointMouseLeave=function(
){t._hideSettings()}},f.prototype._showSettings=function(t){var r=this._originalChartData.usages.first(
function(n){return n.title===t.seriesName}),u,f;r&&(u=n.Utilities.MetricFormatter.Format(r.current,this.
_originalChartData.seriesUnit),f=n.Utilities.MetricFormatter.Format(r.average,this._originalChartData.
seriesUnit),this._currentMetric.value(u.value.toString()),this._currentMetric.unit(u.unitDisplayName),
this._currentMetric.caption(i.usagePartCaptionCurrentWithName.format(r.title)),this._averageMetric.value(
f.value.toString()),this._averageMetric.unit(f.unitDisplayName),this._averageMetric.caption(i.usagePartCaptionAverageWithName.
format(r.title)))},f.prototype._hideSettings=function(){this._updateLegendsInfo()},f.prototype._updateLegendsInfo=
function(){var t,r,f,e,o=0,s=0;this._currentMetric||(this._currentMetric=new u.SingleMetric(this._container));
this._averageMetric||(this._averageMetric=new u.SingleMetric(this._container));this._thresholdMetric||
(this._thresholdMetric=new u.SingleMetric(this._container));this._originalChartData.usages.forEach(function(
n){o+=n.current;s+=n.average});r=n.Utilities.MetricFormatter.Format(o,this._originalChartData.seriesUnit);
f=n.Utilities.MetricFormatter.Format(s,this._originalChartData.seriesUnit);this._currentMetric.value(
r.value.toString());this._currentMetric.unit(r.unitDisplayName);this._currentMetric.caption(i.usagePartCaptionCurrent);
this._averageMetric.value(f.value.toString());this._averageMetric.unit(f.unitDisplayName);this._averageMetric.
caption(i.usagePartCaptionAverage);this._originalChartData.usages.length>1&&(this._currentMetric.caption(
i.usagePartCaptionCurrentWithName.format(i.usagePartCaptionTotal)),this._averageMetric.caption(i.usagePartCaptionAverageWithName.
format(i.usagePartCaptionTotal)));t=[this._currentMetric];this._thresholdMetric.caption(i.usagePartCaptionThreshold);
this._usageResult.Limit()!==n.ExtensionAssets.Constants.UsageMetric.Unlimited&&(e=n.Utilities.MetricFormatter.
Format(this._usageResult.Limit(),this._usageResult.Unit()),this._thresholdMetric.value(e.value.toString(
)),this._thresholdMetric.unit(e.unitDisplayName),t.push(this._thresholdMetric));t.push(this._averageMetric);
this.metrics.items(t)},f}(MsPortalFx.ViewModels.ChartPart);t.UsageGraphChartPart=f})(i=t.Parts||(t.Parts=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MonitoringExtension||(MonitoringExtension={})),function(n)
{var t;(function(t){var i;(function(t){"use strict";var i=n.ExtensionAssets.Resources.General,r=MsPortalFx.
ViewModels.Parts.QuotaGauge,u=function(t){function r(r){t.call(this);this.resourceUri=ko.observable(
);this.usageMetric=ko.observable();this._container=r;this._dataView=n.Data.DataContext.instance.getUsageDataView(
);this._dataView.onLoaded(this.onDataLoaded.bind(this));this._container.registerForDispose(this._dataView);
this.instanceQuota(n.ExtensionAssets.Constants.UsageMetric.UsageWarningLimit);this.maximum(100);this.
captionDisplayFormat("");this.valueDisplayFormat("{0}%");this._container.partTitle(i.usageGaugePartDefaultTitle)}
return __extends(r,t),r.prototype.onInputsSet=function(n){var t,i,r;return t=MsPortalFx.ViewModels.Services.
ResourceTypes.parseResourceDescriptor(n.resourceUri),i=t.subscription,r=t.resource,this.resourceUri(
n.resourceUri),this.usageMetric(n.usageMetric),this._container.noDataMessage(n.message),this._container.
assetName(r),this._dataView.setQuery({monitoringId:{subscriptionId:i,resourceIdentifier:n.resourceUri}})}
,r.prototype.onDataLoaded=function(n){var t=this;this._updateUsageResults(n.usageResults());n.usageResults.
subscribe(this._container,function(n){t._updateUsageResults(n)})},r.prototype._updateUsageResults=function(
n){var r=this,t=n.first(function(n){return StringEx.equals(n.Name(),r.usageMetric(),0)});n.length===
0?this._container.noDataMessage(i.usagePartMessageNoDataAvailable):t&&this._updateUsageResult(t)},r.
prototype._updateUsageResult=function(t){var o=n.Utilities.MetricFormatter.Format(t.CurrentValue(),t.
Unit()),s=n.Utilities.MetricFormatter.Format(t.Limit(),t.Unit()),h,u,e,f;this._container.partTitle(t.
DisplayName());this._container.noDataMessage(null);this.instance(r._convertToPercent(t.CurrentValue(
),t.Limit()));h={value:ko.observable(o.value.toString()),caption:ko.observable(i.usagePartCaptionCurrent),
unit:ko.observable(o.unitDisplayName),metricColorBarKind:ko.observable(1)};u={value:ko.observable(s.
value.toString()),caption:ko.observable(i.usagePartCaptionThreshold),unit:ko.observable(s.unitDisplayName),
metricColorBarKind:ko.observable(0)};t.Limit()===n.ExtensionAssets.Constants.UsageMetric.Unlimited&&
(u.value(i.usageQuotaUnlimited),u.unit(""));e=[h,u];t.NextResetTime&&t.NextResetTime()&&(f=new Date(
Date.parse(t.NextResetTime())),f&&f.getUTCFullYear()<9999&&e.push(this._getResetMetric(f)));this.metrics(
e)},r._convertToPercent=function(n,t){return t>0?Math.round(n/t*1e4)/100:0},r.prototype._getResetMetric=
function(t){var u=new Date,f=(t.getTime()-u.getTime())/1e3,r=n.Utilities.MetricFormatter.Format(f,"seconds");
return{value:ko.observable(r.value.toString()),caption:ko.observable(i.usagePartCaptionResets),unit:
ko.observable(r.unitDisplayName),metricColorBarKind:ko.observable(0)}},r}(r.ViewModel);t.UsageGaugePart=
u})(i=t.Parts||(t.Parts={}))})(t=n.ViewModels||(n.ViewModels={}))}(MonitoringExtension||(MonitoringExtension=
{})),function(n){var t;(function(t){var i;(function(t){"use strict";var i=n.ExtensionAssets.Resources.
General,r=function(t){function r(u){t.call(this,u,r._createOptions());u.partTitle(i.usagePartTitleQuotas);
this._dataView=n.Data.DataContext.instance.getUsageDataView();this._dataView.onLoaded(this.onDataLoaded.
bind(this));u.registerForDispose(this._dataView)}return __extends(r,t),r.prototype.onInputsSet=function(
n){var t,i,r;return(t=MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceDescriptor(n.resourceUri),
i=t.subscription,r=t.resource,this._usageMetrics=n.usageMetrics,this._container.noDataMessage(n.message),
this._container.assetName(r),!!n.message)?$.Deferred().resolve():this._dataView.setQuery({monitoringId:
{subscriptionId:i,resourceIdentifier:n.resourceUri}},!0)},r.prototype.onDataLoaded=function(n){var t=
this;this._updateUsageResults(n.usageResults());n.usageResults.subscribe(this._container,function(n)
{t._updateUsageResults(n)})},r.prototype._updateUsageResults=function(n){var t=this;this._options.data.
items.removeAll();n.forEach(function(n){$.inArray(n.Name(),t._usageMetrics)>=0&&t._initializeUsageItem(
n)})},r._createOptions=function(){var n=[r._columnKey,r._columnValue],t={items:ko.observableArray([]),
columns:ko.observableArray(n)};return{data:t,showHeader:!1}},r.prototype._initializeUsageItem=function(
n){this._updateUsageDisplayValue(n);this._options.data.items.push({key:n.DisplayName(),value:n.displayValue(
)})},r.prototype._updateUsageDisplayValue=function(t){var r=n.Utilities.MetricFormatter.Format(t.CurrentValue(
),t.Unit(),0),u=n.Utilities.MetricFormatter.Format(t.Limit(),t.Unit()),e="{0}{1}".format(r.value,r.unitDisplayName),
f="{0}{1}".format(u.value,u.unitDisplayName);t.Limit()===n.ExtensionAssets.Constants.UsageMetric.Unlimited&&
(f=i.usageQuotaUnlimited);t.displayValue=ko.observable("{0}/{1}".format(e,f))},r._columnKey={name:ko.
observable(""),itemKey:"key"},r._columnValue={name:ko.observable(""),itemKey:"value"},r}(MsPortalFx.
ViewModels.Parts.Collection.ViewModel);t.QuotaSummaryPart=r})(i=t.Parts||(t.Parts={}))})(t=n.ViewModels||
(n.ViewModels={}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(n){var
t;(function(n){"use strict";var t=MsPortalFx.ViewModels.Controls.Visualization.Metrics,i=function(n)
{function t(){n.apply(this,arguments);this.metricIdentifier=ko.observable()}return __extends(t,n),t}
(t.SingleMetric);n.SingleResourceMetric=i})(t=n.Parts||(n.Parts={}))})(t=n.ViewModels||(n.ViewModels=
{}))}(MonitoringExtension||(MonitoringExtension={})),function(n){var t;(function(n){"use strict";var
t=function(){function t(){}return t.NormalizeMetricValuesByUnit=function(n){var f,r,i,u;if(t.NormalizeMetricValuesToBaseUnit(
n),f=t.CreateUnitMap(n),n&&n.length)for(u=0;u<n.length;u++)r=n[u],i=f[r.Unit()],i&&i.formattedUnit&&
(t.UpdateMetricValues(r,i.formattedUnit.conversionValue),r.Unit(i.formattedUnit.unitDisplayName),r.FormattedUnit(
i.formattedUnit))},t.GetMax=function(n){var i=null,r=null,u;if(n&&n.length)for(u=0;u<n.length;u++)r=
t.GetMaxMetricValue(n[u]),i===null&&r!==null?i={maxValue:r,formattedUnit:n[u].FormattedUnit()}:i&&r&&
i.maxValue<r&&(i={maxValue:r,formattedUnit:n[u].FormattedUnit()});return i?i.formattedUnit:null},t.NormalizeMetricValuesToBaseUnit=
function(i){var f,r,u;if(i&&i.length)for(u=0;u<i.length;u++)r=i[u],f=n.MetricFormatter.GetBaseUnit(r.
Unit()),t.UpdateMetricValues(r,f.valueFromBaseUnit),r.Unit(f.unitName)},t.CreateUnitMap=function(i){
var u={},f,r,e;if(i&&i.length)for(e=0;e<i.length;e++)r=i[e],r.PrimaryAggregationType()&&r[r.PrimaryAggregationType(
)]&&(f=t.FindMax(r[r.PrimaryAggregationType()]()),(!u.hasOwnProperty(r.Unit())||u[r.Unit()].maxValue<
f)&&(u[r.Unit()]={maxValue:f,formattedUnit:n.MetricFormatter.Format(f,r.Unit())}));return u},t.GetMaxMetricValue=
function(n){var i=null;return n!==null&&n.PrimaryAggregationType()&&n[n.PrimaryAggregationType()]&&(
i=t.FindMax(n[n.PrimaryAggregationType()]())),i},t.FindMax=function(n){for(var i=null,r=n.length,t=0;
t<r;t++)i===null&&n[t]!==null?i=n[t]:i<n[t]&&(i=n[t]);return i},t.UpdateMetricValues=function(n,t){var
r,i;if(t!==1)for(r=n[n.PrimaryAggregationType()]().length,i=0;i<r;i++)n.Average()&&n.Average()[i]&&(
n.Average()[i]=t*n.Average()[i]),n.Minimum()&&n.Minimum()[i]&&(n.Minimum()[i]=t*n.Minimum()[i]),n.Maximum(
)&&n.Maximum()[i]&&(n.Maximum()[i]=t*n.Maximum()[i]),n.Total()&&n.Total()[i]&&(n.Total()[i]=t*n.Total(
)[i])},t}();n.MetricValuesNormalizer=t})(t=n.Utilities||(n.Utilities={}))}(MonitoringExtension||(MonitoringExtension=
{})),function(n){var t;(function(t){"use strict";var i=n.ExtensionAssets.Resources.General,r=function(
){function t(){}return t.createMetricGroupsFromMetricQuerySetting=function(t){var i=[];return t.resourceMetricSelections.
forEach(function(r){var e=r.resourceUri,u=[],f=[];r.metrics.forEach(function(n){u.push(n.name);f.push(
n.displayName)});i.push(new n.Models.MetricGroup(e,u,f,n.Models.MetricTimeRange.GetMetricTimeRange(t.
timeRange),t.timeGrain,t.startDate,t.endDate))}),i},t.getMetricsPartTitle=function(n){var r="",t=[],
u;return n!==null&&($.each(n,function(n,i){$.inArray(i,t)<0&&t.push(i)}),u=t.length,u===1?r=t[0]:u===
2?r=i.metricDisplayNameConnector.format(t[0],t[1]):u===3?(r=i.multipleMetricDisplayNameSeperator.format(
t[0],t[1]),r=i.metricDisplayNamesConnector.format({metricNames:r})):u>3&&(r=i.multipleMetricDisplayNameSeperator.
format(t[0],t[1]),r=i.multipleMetricDisplayNamesConnector.format({metricNames:r,numberOfMetrics:t.length-
2}))),r},t.getAllMetricNames=function(n){var t=[];return n.forEach(function(n){n.MetricList.forEach(
function(n){t.push(n)})}),t},t.doResourcesShareSameMetric=function(n){var t=!0,i,r;return n.length>1?
(r=0,n.forEach(function(n){if(n.metrics.length===1)if(r++,i){if(!StringEx.equals(i,n.metrics[0].name,
0)){t=!1;return}}else i=n.metrics[0].name;else if(n.metrics.length>1){t=!1;return}}),t&&r<2&&(t=!1)):
t=!1,t},t.getMetricIdentifier=function(n,t){return"{0}/{1}".format(n,t)},t.doesSeriesMatchMetricResponse=
function(n,i){var r=t.getMetricIdentifier(i.ResourceIdentifier(),i.Name());return StringEx.equals(n,
r,0)},t.getTimeRangeDisplayName=function(t){var r="",i;return t&&(i=n.Models.MetricTimeRange.GetMetricTimeRange(
t),i&&(r=i.DisplayNameForPartTitle)),r},t}();t.MetricUtility=r})(t=n.Utilities||(n.Utilities={}))}(MonitoringExtension||
(MonitoringExtension={})),function(n){var t;(function(n){"use strict";var t=function(n){function t(t)
{n.call(this);this._dataContext=t}return __extends(t,n),t.prototype._load=function(n){return this._dataContext.
listUsageMetrics(n.monitoringId.subscriptionId,n.monitoringId.resourceIdentifier).then(function(n){return{
usageResults:n}})},t.prototype._release=function(){n.prototype._release.call(this);this.query&&this.
_dataContext.releaseUsageMetrics(this.query.monitoringId.subscriptionId,this.query.monitoringId.resourceIdentifier)}
,t}(ExtensionCore.Data.DataViewBase);n.UsageDataView=t})(t=n.DataViews||(n.DataViews={}))}(MonitoringExtension||
(MonitoringExtension={})),function(n){var t;(function(t){"use strict";function i(t,i){return ExtensionCore.
Net.post(n.ExtensionAssets.Constants.UsageMetric.listUsageMetricsUri,{subscriptionId:t,resourceUri:i})}
t.listUsageMetrics=i})(t=n.Ajax||(n.Ajax={}))}(MonitoringExtension||(MonitoringExtension={})),function(
n){var t;(function(t){var i;(function(t){"use strict";var i=n.ExtensionAssets.Resources.General,r=function(
){function t(t){var r=this;this.subscriptionId=ko.observable();this.resourceUri=ko.observable();this.
assetName=ko.observable();this.usageMetric=ko.observable();this.message=ko.observable(null);this.showMessage=
ko.observable(!1);this.loading=ko.observable(!0);this.size=ko.observable(2);this.container=t;this.container.
partTitle(i.usageGaugePartDefaultTitle);this.isNormal=ko.pureComputed(function(){return r.size()===2}
);this.isTall=ko.pureComputed(function(){return r.size()===4});this.isWide=ko.pureComputed(function(
){return r.size()===3});this.isHeroWide=ko.pureComputed(function(){return r.size()===5});this._dataView=
n.Data.DataContext.instance.getUsageDataView();this._dataView.onLoaded(this.onDataLoaded.bind(this));
this.container.registerForDispose(this._dataView)}return t.prototype.onInputsSet=function(n){var t,r,
u,f,i;return t=MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceDescriptor(n.resourceUri),r=
t.subscription,u=t.resource,this.resourceUri(n.resourceUri),this.subscriptionId(r),this.assetName(u),
this.usageMetric(n.usageMetric),this.message(n.message),this.showMessage(!!n.message),this.container.
assetName(n.assetName),f=[this.usageMetric()],i=this._getAdditionalUsageMetrics(),i&&$.each(i,function(
n,t){f.push(t)}),this._dataView.setQuery({monitoringId:{subscriptionId:this.subscriptionId(),resourceIdentifier:
n.resourceUri}})},t.prototype.onDataLoaded=function(n){var t=this;this._updateUsageResults(n.usageResults(
));this.loading(!1);n.usageResults.subscribe(this.container,function(n){t._updateUsageResults(n)})},
t.prototype._getAdditionalUsageMetrics=function(){return null},t.prototype._updateUsageResult=function(
){this.container.partTitle(this._usageResult.DisplayName())},t.prototype._updateUsageResults=function(
n){var t=this;n.length===0?(this.message(i.usagePartMessageNoDataAvailable),this.showMessage(!0)):(this.
message(),this.showMessage(!1),this._usageResult=n.first(function(n){return StringEx.equals(n.Name(),
t.usageMetric(),0)}),this._usageResult&&this._updateUsageResult(this._usageResult))},t}();t.UsagePartBase=
r})(i=t.Parts||(t.Parts={}))})(t=n.ViewModels||(n.ViewModels={}))}(MonitoringExtension||(MonitoringExtension=
{})),function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.PartData||(n.PartData={}))}
)(t=n.ViewModels||(n.ViewModels={}))}(MonitoringExtension||(MonitoringExtension={}))