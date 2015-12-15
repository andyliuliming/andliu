(function(n,t){"use strict";var i={},r;(function(){function r(n,t){var i;if(typeof n=="object"&&typeof
t=="object")for(i in t)t.hasOwnProperty(i)&&(n[i]?r(n[i],t[i]):n[i]=t[i]);return n}function f(n,t,i)
{n[t]=n[t]||{};r(n[t],i)}if(r(n,{Resources:{getResources:function(){}}}),t)for(var u in t)t.hasOwnProperty(
u)&&f(i,u,t[u])})();r=n.Resources.getResources;n.Resources.getResources=function(n){return r(n)||i[n]}
})(this,{"InsightsExtension.Events.Resources.Strings":{startTimeShouldBeEarlierThanCurrentTime:"start time should be earlier than current time",
noAction:"no events available",columnClientNotificationPercentComplete:"PercentComplete",titleResourceGroupName:
"Resource group name",bladeTitleEvents:"Events",bladeTitleFilter:"Filter",columnNameOperation:"operation",
warningSeriesName:"warning",noEvent:"no events available",statusFailed:"Failed",columnClientNotificationCorrelationId:
"CorrelationId",statusUnknown:"Unknown",columnClientNotificationStatus:"Status",columnNameOperationName:
"OperationName",descriptionTime:"Filtered from {0} to {1}",levelWarning:"Warning",columnNameSubscriptionId:
"SubscriptionId",levelInformational:"Informational",startTimeShouldBeBeforeEndTime:"start time should be before end time",
columnClientNotificationAssetType:"AssetType",titleResourceId:"ResourceId",columnNameEventSource:"EventSource",
errorSeriesName:"error",columnNameSubStatus:"SubStatus",partTitleEventChart:"Event Count",textResource:
"resource",textEventsGreaterThanThesholdMessage:"The query returned more logs than what can be displayed on this page. Use the 'Filter' and narrow down the time range to see all of the logs.",
levelCritical:"Critical",eventsSummaryTitle:"Events",headerDescription:"description",headerCorrelationId:
"correlationId",titleFilterBy:"Filter by",bladeTitleAzureDiagnostics_singular:"Audit Log",columnNameSubmissionTimestamp:
"EventSubmissionTimestamp",textResourceType:"resource type",loading:"Loading ...",titleFilter:"Filter",
descriptionFilterBy:"by {0} {1}",columnEventSource:"EventSource",columnNameStatus:"Status",titleCustom:
"custom",bladeTitleAllEvents:"All Events",titleOthers:"Others",failureSeriesName:"failure",startTimeShouldBeLessThan90DaysBeforeCurrenTime:
"start time should be less than 90 days from current time",titleResourceProviderName:"Resource provider name",
startTimeShouldBeLessThan20DaysBeforeEndTime:"start time should be less than 20 days from end time",
columnNameCaller:"Caller",bladeTitleAzureDiagnostics_lowerSingular:"Audit log",columnNameEvent:"event",
columnNameLevel:"Level",columnNameResourceProvider:"ResourceProvider",columnClientNotificationDescription:
"Description",statusSucceeded:"Succeeded",columnNameTimestamp:"EventTimestamp",textSubscription:"subscription",
noEventsAvailable:"No events available",headerStatus:"status",columnNameAuthorization:"Authorization",
headerLevel:"level",criticalSeriesName:"critical",textFilterAllSubscriptions:"All subscriptions",informationalSeriesName:
"informational",textAllSubscriptions:"all subscriptions",otherSeriesName:"other",columnClientNotificationTitle:
"Title",columnNameProperties:"Properties",headerTime:"time",columnClientNotificationExtensionName:"ExtensionName",
bladeTitleEventDetail:"Detail",bladeTitleActionDetails:"Correlated Events",descriptionTimePastWeek:"Filtered for past week",
columnNameResourceUri:"ResourceUri",levelError:"Error",columnNameTime:"time",titleTimeSpan:"Time span",
bladeTitleAzureDiagnostics_lowerPlural:"Audit logs",columnNameDescription:"Description",titleEndTime:
"End time",titleStartTime:"Start time",headerCaller:"caller",textResourceProvider:"resource provider",
columnNameResourceGroup:"ResourceGroup",statusStarted:"Started",columnClientNotificationAssetId:"AssetId",
columnNameResource:"resource",successSeriesName:"success",noEventsPastWeek:"No events in the past week.",
columnNameOperationId:"OperationId",titlePastWeek:"past week",none:"none",columnNameCorrelationId:"CorrelationId",
columnNameHttpRequest:"HttpRequest",bladeTitleAzureDiagnostics_plural:"Audit Logs",textResourceGroup:
"resource group",columnClientNotificationTimestamp:"Timestamp"},"InsightsExtension.Applications.Resources.Strings":
{newRelicSelectorTitle:"New Relic",noApplications:"no applications available",selectProviderSubtitle:
"Choose an extension provider to install that will collect performance data.",summaryPartTitle:"Application monitoring",
noAccounts:"Create a New Relic account in the gallery to enable New Relic .NET application performance monitoring",
loading:"Loading ...",applicationInsightsSelectorTitle:"Application Insights",columnErrorRate:"error rate",
columnName:"application",providerNotConfiguredText:"Not configured",inProgress:"In Progress ...",bladeTitleApplications:
"applications",providerSelectedStringTitle:"selected",selectProvider:"Select provider",columnResponseTime:
"response time",noApplicationsInstalled:"Click here to collect insights into the performance of your .NET applications."},
"InsightsExtension.Alerts.Resources.Strings":{period24Hours:"Over the last 24 hours",formRuleEmailAdmins:
"email service and co-administrators",formRuleMetric:"Metric",nameRegexValidationMessage:"The alert name can contain any characters, but the following characters: <, >, *, %, &, :, \\, ?, +, /",
notificationAddAlertRuleFailureLabel:"Failed to add alert rule",bladeTitleAlerts:"Alert rules",alertActiveNowLabel:
"Active now",notificationEnableAlertRuleSuccessLabel:"Successfully enabled the alert rule",notificationEnableAlertRuleFailureLabel:
"Failed to enable the alert rule",formRuleCondition:"Condition",formRuleAlertSourceMetrics:"Metrics",
alertsSummaryPartTitle:"Alert rules",additionalEmailsRegexValidationMessage:"The specified email address is not valid.",
bladeTitleAlertAdd:"Add an alert rule",notificationDisableAlertRuleFailureLabel:"Failed to disable the alert rule",
commandDeleteTitle:"Delete Alert Rule",gridColumnName:"name",gridColumnLastActive:"last active",formRuleOperationStart:
"Start",notificationDeleteAlertRuleInProgressLabel:"Deleting alert rule",groupTitleAllOtherMetrics:"All other metrics",
disabledMessage:"Alerts are not available.",notificationDisableAlertRuleInProgressMessage:"Disabling alert rule {0}",
formRuleOperationStatusSucceeded:"Succeeded",saveCommandText:"Save",deleteCommandText:"Delete",conditionLessThan:
"less than",formRuleAlertSourceEvents:"Events",notificationDisableAlertRuleSuccessLabel:"Successfully disabled the alert rule",
disableCommandText:"Disable",formRuleOperationName:"Operation name",formRuleOperationStop:"Stop",helpName:
"Specify a name to identify this alert rule.",notificationDisableAlertRuleSuccessMessage:"Successfully disabled the alert rule {0}",
formRuleAggregationCount:"Count",formRuleOperationScaleUp:"Scale Up",formRuleAggregationCountUnit:"Count",
commandDeleteAlertConfirmationText:"Are you sure you want to delete alert rule {0}?",notificationSaveAlertRuleFailureMessage:
"Failed to save the alert rule {0}. {1}",alertEnabledLabel:"Enabled",formRuleAlertSource:"Alert on",
loading:"Loading...",conditionLessThanOrEqual:"less than or equal to",openAddAlertBladeCommandText:"Add alert",
configuredAlertRules:"alert rules configured",noAlertsAvailable:"You haven't created any alert rules.",
notificationAddAlertRuleInProgressMessage:"Adding alert rule {0}",groupTitleSelectedMetrics:"Selected metrics",
period2Hours:"Over the last 2 hours",period5Minutes:"Over the last 5 minutes",formRuleThreshold:"Threshold",
period3Hours:"Over the last 3 hours",notificationAddAlertRuleInProgressLabel:"Adding alert rule",enableCommandText:
"Enable",notificationDisableAlertRuleInProgressLabel:"Disabling alert rule",notificationDeleteAlertRuleFailureLabel:
"Failed to delete the alert rule",gridColumnStatus:"status",period45Minutes:"Over the last 45 minutes",
period6Hours:"Over the last 6 hours",conditionGreaterThanOrEqual:"greater than or equal to",gridColumnDescription:
"condition",notificationSaveAlertRuleSuccessLabel:"Successfully saved the alert rule",bladeEulaDiagnostics:
"Turn on diagnostics to add an alert rule.",formRuleOperationScaleDown:"Scale Down",period4Hours:"Over the last 4 hours",
addRule:"Add alert rule",period15Minutes:"Over the last 15 minutes",period5Hours:"Over the last 5 hours",
thresholdRangeValidationMessage:"The threshold value is out of range. Enter a number between {0} and {1}.",
never:"Never",period10Minutes:"Over the last 10 minutes",validationErrorRequired:"Required",notificationSaveAlertRuleFailureLabel:
"Failed to save the alert rule",notificationAddAlertRuleFailureMessage:"Failed to add alert rule {0}. {1}",
formRuleOperationStatusFailed:"Failed",nameConflictValidationMessage:"The specified name already exists. Please specify a different name.",
period60Minutes:"Over the last hour",period30Minutes:"Over the last 30 minutes",notificationAddAlertRuleSuccessLabel:
"Successfully added alert rule",notificationDeleteAlertRuleSuccessLabel:"Successfully deleted the alert rule",
notificationDeleteAlertRuleSuccessMessage:"Successfully deleted the alert rule {0}",helpPeriod:"Select a time span during which to monitor the metric data specified by this alert rule.",
conditionGreaterThan:"greater than",notificationSaveAlertRuleInProgressMessage:"Saving alert rule {0}",
notificationDeleteAlertRuleInProgressMessage:"Deleting alert rule {0}",notificationAddAlertRuleSuccessMessage:
"Successfully added alert rule {0}",notificationDisableAlertRuleFailureMessage:"Failed to disable the alert rule {0}. {1}",
formRuleOperationDelete:"Delete",nameMaxLengthValidationMessage:"This field has a limit of 32 characters.",
notificationSaveAlertRuleInProgressLabel:"Saving alert rule",groupTitleOthers:"Others",discardCommandText:
"Discard",notificationSaveAlertRuleSuccessMessage:"Successfully saved the alert rule {0}",formRuleName:
"Name",formRuleAdditionalEmails:"additional administrator email",formRuleDescription:"Description",notificationEnableAlertRuleInProgressMessage:
"Enabling alert rule {0}",helpMetric:"Select the metric that you want this alert rule to monitor.",notificationEnableAlertRuleFailureMessage:
"Failed to enable the alert rule {0}. {1}",formRuleTargetResource:"Resource",helpResource:"Select the resource the alert rule is on",
formRuleOperationStatus:"Status",notificationDeleteAlertRuleFailureMessage:"Failed to delete the alert rule {0}. {1}",
notificationEnableAlertRuleInProgressLabel:"Enabling alert rule",notificationEnableAlertRuleSuccessMessage:
"Successfully enabled the alert rule {0}",bladeTitleAlertEdit:"Edit Rule",formRuleOperationUpdate:"Update",
formRuleAggregation:"Aggregation",formRulePeriod:"Period",formRuleOperationAll:"All",formRuleAggregationNone:
"None (alert on every event)",descriptionMaxLengthValidationMessage:"This field has a limit of 128 characters."},
"InsightsExtension.Metrics.Resources.Strings":{metricUnitMinutesShort:"m",startTimeShouldBeEarlierThanCurrentTime:
"Start time should be earlier than current time.",noDataMessage:"No available data.",timeSpanToday:"today",
columnNameMetricName:"metric name",titleMetricsPartOver3Metrics:"{0}, {1} and {2} more metrics",timeSpanPastHour:
"past hour",timeSpanPastWeek:"past week",metricUnitSeconds:"seconds",lensTitleAlerts:"Alerts",openMetricsChartConfigurationBladeCommandText:
"Edit chart",titleGrouping:"Grouping",titleMetrics:"Metrics",startTimeShouldBeBeforeEndTime:"Start time should be before the end time.",
titleMetricsPart2metrics:"{0} and {1}",disabledMessage:"Metrics are not available.",metricUnitMinutes:
"minutes",noAvailableMetricMessage:"No available metric",infoBubbleGrouping:"Choose how the data is divided up. Each grouping will appear as a separate series.",
timeSpanCustom:"custom",columnNameAverage:"avg",turnOnDiagnosticsMessage:"Monitoring may not be enabled. Click here to turn on Diagnostics.",
titleChartType:"Chart type",loading:"loading ...",radioTextOff:"Off",textAggregationAverage:"Average",
radioTextOn:"On",bladeTitleMetricsChartConfiguration:"Edit Chart",perSecond:"{0}/s",metricUnitSecondsShort:
"s",textAggregationLast:"Last",noMetricMessage:"No metric selected.",metricUnitBytesPerSecond:"bytes/second",
metricUnitCountPerSecond:"count/second",metricUnitDaysShort:"d",columnNameTotal:"total",metricUnitPercent:
"%",columnNameMinimum:"min",metricUnitHoursShort:"h",metricUnitDays:"days",textAggregationMinimum:"Minimum",
metricUnitMillisecondsShort:"ms",bladeTitleMetricsDetails:"Metric",graphArea:"Area",graphLine:"Line",
columnNameMaximum:"max",infoBubbleChartType:"Choose how the data is displayed.",textAggregationMaximum:
"Maximum",titleTimeSpan:"Time Range",noDataStorage:"Monitoring may not be enabled. Click on MONITORING under Configuration to enable it.",
metricUnitMilliseconds:"milliseconds",columnNameResource:"resource",buttonTextSave:"Save",metricUnitBytes:
"bytes",metricUnitCount:"count",graphBar:"Bar",metricUnitHours:"hours",invalidChartTypeMessage:"You cannot select Bar chart type since you have selected metrics with different timegrain.",
endTimeShouldBeAfterStartTime:"End time should be after the start time.",titleMetricsPart3metrics:"{0}, {1} and one more metric",
textAggregationTotal:"Total"},"InsightsExtension.Diagnostics.Resources.Strings":{bladeTitleDiagnostics:
"Diagnostics",fieldNameStorageAccount:"Storage Account",notificationDiagnosticsUpdateInProgressMessage:
"Updating diagnostics settings for {0}.",fieldNameRetention:"Retention (days)",textRetention1day:"1",
textRetention7days:"7",commandTextDiagnostics:"Diagnostics",notificationDiagnosticsUpdateFailureLabel:
"Failed to updated diagnostics settings",bladeEulaDiagnostics:"You’ll be charged normal data rates for storage and transactions when you send diagnostics to a storage account.",
notificationDiagnosticsUpdateSuccessLabel:"Successfully updated diagnostics settings",optionNameStatusStandard:
"On",optionNameStatusCustom:"Custom",optionNameStatusOff:"Off",notificationDiagnosticsUpdateFailureMessage:
"Failed to updated diagnostics settings for {0}. {1}",textStorageAccountChangeWarning:"Existing diagnostics will not appear in the portal if you change the storage account.",
openDiagnosticsSettingsBladeCommandText:"Diagnostic settings",fieldNameStatus:"Status",fieldNameAutoEnableInFuture:
"Automatically enable in the future",notificationDiagnosticsUpdateSuccessMessage:"Successfully updated diagnostics settings for {0}.",
textStorageAccountWarningForAdf:"This storage account will be used for all resources of this type in this region.",
textRetention90days:"90",textRetention60days:"60",notificationDiagnosticsUpdateInProgressLabel:"Updating diagnostics settings ...",
textRetention30days:"30"},"InsightsExtension.Usages.Resources.Strings":{usageBladeTitle:"Usage",noDataMessage:
"No available data.",usagePartCaptionThreshold:"Threshold",disabledMessage:"Usage is not available.",
usageGaugePartDefaultTitle:"Usage Quota",usagePartCaptionCurrent:"Current",usagePartCaptionResets:"Resets",
usageQuotaUnlimited:"Unlimited"}})