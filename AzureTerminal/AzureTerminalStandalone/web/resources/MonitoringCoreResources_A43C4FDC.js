(function(n,t){"use strict";var i={},r;(function(){function r(n,t){var i;if(typeof n=="object"&&typeof
t=="object")for(i in t)t.hasOwnProperty(i)&&(n[i]?r(n[i],t[i]):n[i]=t[i]);return n}function f(n,t,i)
{n[t]=n[t]||{};r(n[t],i)}if(r(n,{Resources:{getResources:function(){}}}),t)for(var u in t)t.hasOwnProperty(
u)&&f(i,u,t[u])})();r=n.Resources.getResources;n.Resources.getResources=function(n){return r(n)||i[n]}
})(this,{"MonitoringExtension.ExtensionAssets.Resources.General":{hoursLabel:"Hours",metricValueFormat:
"{0}{unit}",usageBladeTitle:"Usage",metricSelectorPastHour:"past hour",metricSelectorPastWeek:"past week",
usagePartCaptionThreshold:"Threshold",seconds:"Seconds",gridColumnMetricName:"Metric Name",metricsTitle:
"Metrics",metricSelection:"Metric Selection",timeRange:"Time Range",usagePartCaptionAverageWithName:
"Average ({0})",timeRangeTitle:"Time Range",gridColumnMax:"Max",gridColumnMin:"Min",gridColumnAvg:"Avg",
metricUnitSeconds:"seconds",metricSelectorToday:"today",AvailabilityMonitoringMapDetailsPart_nameColumn:
"Name",minutesShortForm:"m",formatMetricUnit:"{0} {1}",metricDetailsBladeTitle:"Metric",AvailabilityMonitoringGrid_Status_notAvailable:
"Unavailable",unknown:"Unknown",gridEmptyData:"--",usagePartMessageNoDataAvailable:"No usage data available now",
metricPartTitleFormatter:"{0} {1}",hoursShortForm:"h",metricEquals:"Equals",usageGaugePartDefaultTitle:
"Usage Quota",AvailabilityMonitoringMapDetailsPart_pathColumn:"Path",storageMetricValuesNotAvailable:
"Monitoring may not be enabled. Click on MONITORING under Configuration to enable it.",multipleMetricDisplayNameSeperator:
"{0}, {1}",metricDisplayNameConnector:"{0} and {1}",AvailabilityMonioringGrid_ColumnHeader_name:"Name",
usagePartCaptionTotal:"Total",AvailabilityMonitoringDetailsGrid_noRowsMessage:"No endpoint data available.",
valueAndUnit:"{0} {1}",usagePartCaptionCurrent:"Current",millisecondsShortForm:"ms",daysShortForm:"d",
usagePartCaptionResets:"Resets",AvailabilityMonitoringGrid_Status_unknown:"No Data",queryBuilderTitle:
"Data Query",usagePartCaptionCurrentWithName:"Current ({0})",endpointFormattedStateTemplate:"{0} - {1} seconds",
milliseconds:"Milliseconds",doneButton:"Done",AvailabilityMonitoringDetailsGrid_ColumnHeader_status:
"Status",hours:"Hours",AvailabilityMonitoringPart_dataLoadFailed:"There was an error loading availability data.",
usageQuotaUnitLabelHours:"Hours",AvailabilityMonitoringDetailsGrid_ColumnHeader_time:"Time",metricUnitBytesPerSecond:
"bytes/second",gridColumnMetricResourceName:"Resource",AvailabilityMonioringGrid_ColumnHeader_status:
"Status",metricUnitCountPerSecond:"count/second",usagePartCaptionAverage:"Average",metricUnitPercent:
"%",AvailabilityMonitoringMapDetailsPart_locationColumn:"Location",AvailabilityMonitoringDetailsGrid_ColumnHeader_responseTime:
"Response Time",minutes:"Minutes",metricSelectorCustom:"Custom",AvailabilityMonitoringGrid_Status_available:
"Available",percentage:"%",usageQuotaUnitLabelMinutes:"Minutes",AvailabilityMonitoringPart_partTitle:
"Endpoint Monitoring",usagePartTitleQuotas:"Quotas",metricDisplayNamesConnector:"{metricNames} and one more metric",
AvailabilityMonitoringPart_notConfiguredHeader:"Endpoint Monitoring",usageQuotaUnlimited:"Unlimited",
multipleMetricDisplayNamesConnector:"{metricNames} and {numberOfMetrics} more metrics",loadingMessage:
"Loading...",AvailabilityMonitoringMapDetailsPart_lastResultColumn:"Last Result",failure:"Failure",AvailabilityMonioringGrid_ColumnHeader_location:
"Location",chartToolTipFormatter:"Series: {0}, Time: {1}, Value: {2}",secondsShortForm:"s",minutesLabel:
"Minutes",noDataFound:"No data found",metricUnitMilliseconds:"milliseconds",metricValuesNotAvailable:
"Not enough data to chart yet",metricChartEmptySelection:"No metric specified.",success:"Success",metricUnitBytes:
"bytes",metricUnitCount:"count",bytesPerSecond:"{bytes}/s",days:"Days",usageTimeRangeToday:"today"}})