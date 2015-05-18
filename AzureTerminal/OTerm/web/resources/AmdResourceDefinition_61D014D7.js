define("Events/EventsResources",function(){return{bladeTitleActionDetails:"Correlated Events",bladeTitleAllEvents:
"All Events",BladeTitleAzureDiagnostics:{lowerPlural:"Audit logs",lowerSingular:"Audit log",plural:"Audit Logs",
singular:"Audit Log"},bladeTitleEventDetail:"Detail",bladeTitleEvents:"Events",bladeTitleFilter:"Filter",
columnClientNotificationAssetId:"AssetId",columnClientNotificationAssetType:"AssetType",columnClientNotificationCorrelationId:
"CorrelationId",columnClientNotificationDescription:"Description",columnClientNotificationExtensionName:
"ExtensionName",columnClientNotificationPercentComplete:"PercentComplete",columnClientNotificationStatus:
"Status",columnClientNotificationTimestamp:"Timestamp",columnClientNotificationTitle:"Title",columnEventSource:
"EventSource",columnNameAuthorization:"Authorization",columnNameCaller:"Caller",columnNameCorrelationId:
"CorrelationId",columnNameDescription:"Description",columnNameEvent:"event",columnNameEventSource:"EventSource",
columnNameHttpRequest:"HttpRequest",columnNameLevel:"Level",columnNameOperation:"operation",columnNameOperationId:
"OperationId",columnNameOperationName:"OperationName",columnNameProperties:"Properties",columnNameResource:
"resource",columnNameResourceGroup:"ResourceGroup",columnNameResourceProvider:"ResourceProvider",columnNameResourceUri:
"ResourceUri",columnNameStatus:"Status",columnNameSubmissionTimestamp:"EventSubmissionTimestamp",columnNameSubscriptionId:
"SubscriptionId",columnNameSubStatus:"SubStatus",columnNameTime:"time",columnNameTimestamp:"EventTimestamp",
criticalSeriesName:"critical",descriptionFilterBy:"by {0} {1}",descriptionTime:"Filtered from {0} to {1}",
descriptionTimePastWeek:"Filtered for past week",errorSeriesName:"error",eventsSummaryTitle:"Events",
failureSeriesName:"failure",headerCaller:"caller",headerCorrelationId:"correlationId",headerDescription:
"description",headerLevel:"level",headerStatus:"status",headerTime:"time",informationalSeriesName:"informational",
levelCritical:"Critical",levelError:"Error",levelInformational:"Informational",levelWarning:"Warning",
loading:"Loading ...",noAction:"no events available",noEvent:"no events available",noEventsAvailable:
"No events available",noEventsPastWeek:"No events in the past week.",none:"none",otherSeriesName:"other",
partTitleEventChart:"Event Count",startTimeShouldBeBeforeEndTime:"start time should be before end time",
startTimeShouldBeEarlierThanCurrentTime:"start time should be earlier than current time",startTimeShouldBeLessThan20DaysBeforeEndTime:
"start time should be less than 20 days from end time",startTimeShouldBeLessThan90DaysBeforeCurrenTime:
"start time should be less than 90 days from current time",statusFailed:"Failed",statusStarted:"Started",
statusSucceeded:"Succeeded",statusUnknown:"Unknown",successSeriesName:"success",textAllSubscriptions:
"all subscriptions",textEventsGreaterThanThesholdMessage:"The query returned more logs than what can be displayed on this page. Use the 'Filter' and narrow down the time range to see all of the logs.",
textFilterAllSubscriptions:"All subscriptions",textResource:"resource",textResourceGroup:"resource group",
textResourceProvider:"resource provider",textResourceType:"resource type",textSubscription:"subscription",
titleCustom:"custom",titleEndTime:"End time",titleFilter:"Filter",titleFilterBy:"Filter by",titleOthers:
"Others",titlePastWeek:"past week",titleResourceGroupName:"Resource group name",titleResourceId:"ResourceId",
titleResourceProviderName:"Resource provider name",titleStartTime:"Start time",titleTimeSpan:"Time span",
warningSeriesName:"warning"}});define("Alerts/AlertsResources",function(){return{additionalEmailsRegexValidationMessage:
"The specified email address is not valid.",addRule:"Add alert rule",alertActiveNowLabel:"Active now",
alertEnabledLabel:"Enabled",alertsSummaryPartTitle:"Alert rules",bladeEulaDiagnostics:"Turn on diagnostics to add an alert rule.",
bladeTitleAlertAdd:"Add an alert rule",bladeTitleAlertEdit:"Edit Rule",bladeTitleAlerts:"Alert rules",
commandDeleteAlertConfirmationText:"Are you sure you want to delete alert rule {0}?",commandDeleteTitle:
"Delete Alert Rule",conditionGreaterThan:"greater than",conditionGreaterThanOrEqual:"greater than or equal to",
conditionLessThan:"less than",conditionLessThanOrEqual:"less than or equal to",configuredAlertRules:
"alert rules configured",deleteCommandText:"Delete",descriptionMaxLengthValidationMessage:"This field has a limit of 128 characters.",
disableCommandText:"Disable",disabledMessage:"Alerts are not available.",discardCommandText:"Discard",
enableCommandText:"Enable",formRuleAdditionalEmails:"additional administrator email",formRuleAggregation:
"Aggregation",formRuleAggregationCount:"Count",formRuleAggregationCountUnit:"Count",formRuleAggregationNone:
"None (alert on every event)",formRuleAlertSource:"Alert on",formRuleAlertSourceEvents:"Events",formRuleAlertSourceMetrics:
"Metrics",formRuleCondition:"Condition",formRuleDescription:"Description",formRuleEmailAdmins:"email service and co-administrators",
formRuleMetric:"Metric",formRuleName:"Name",formRuleOperationAll:"All",formRuleOperationDelete:"Delete",
formRuleOperationName:"Operation name",formRuleOperationScaleDown:"Scale Down",formRuleOperationScaleUp:
"Scale Up",formRuleOperationStart:"Start",formRuleOperationStatus:"Status",formRuleOperationStatusFailed:
"Failed",formRuleOperationStatusSucceeded:"Succeeded",formRuleOperationStop:"Stop",formRuleOperationUpdate:
"Update",formRulePeriod:"Period",formRuleTargetResource:"Resource",formRuleThreshold:"Threshold",gridColumnDescription:
"condition",gridColumnLastActive:"last active",gridColumnName:"name",gridColumnStatus:"status",groupTitleAllOtherMetrics:
"All other metrics",groupTitleOthers:"Others",groupTitleSelectedMetrics:"Selected metrics",helpMetric:
"Select the metric that you want this alert rule to monitor.",helpName:"Specify a name to identify this alert rule.",
helpPeriod:"Select a time span during which to monitor the metric data specified by this alert rule.",
helpResource:"Select the resource the alert rule is on",loading:"Loading...",nameConflictValidationMessage:
"The specified name already exists. Please specify a different name.",nameMaxLengthValidationMessage:
"This field has a limit of 32 characters.",nameRegexValidationMessage:"The alert name can contain any characters, but the following characters: <, >, *, %, &, :, \\, ?, +, /",
never:"Never",noAlertsAvailable:"You haven't created any alert rules.",notificationAddAlertRuleFailureLabel:
"Failed to add alert rule",notificationAddAlertRuleFailureMessage:"Failed to add alert rule {0}. {1}",
notificationAddAlertRuleInProgressLabel:"Adding alert rule",notificationAddAlertRuleInProgressMessage:
"Adding alert rule {0}",notificationAddAlertRuleSuccessLabel:"Successfully added alert rule",notificationAddAlertRuleSuccessMessage:
"Successfully added alert rule {0}",notificationDeleteAlertRuleFailureLabel:"Failed to delete the alert rule",
notificationDeleteAlertRuleFailureMessage:"Failed to delete the alert rule {0}. {1}",notificationDeleteAlertRuleInProgressLabel:
"Deleting alert rule",notificationDeleteAlertRuleInProgressMessage:"Deleting alert rule {0}",notificationDeleteAlertRuleSuccessLabel:
"Successfully deleted the alert rule",notificationDeleteAlertRuleSuccessMessage:"Successfully deleted the alert rule {0}",
notificationDisableAlertRuleFailureLabel:"Failed to disable the alert rule",notificationDisableAlertRuleFailureMessage:
"Failed to disable the alert rule {0}. {1}",notificationDisableAlertRuleInProgressLabel:"Disabling alert rule",
notificationDisableAlertRuleInProgressMessage:"Disabling alert rule {0}",notificationDisableAlertRuleSuccessLabel:
"Successfully disabled the alert rule",notificationDisableAlertRuleSuccessMessage:"Successfully disabled the alert rule {0}",
notificationEnableAlertRuleFailureLabel:"Failed to enable the alert rule",notificationEnableAlertRuleFailureMessage:
"Failed to enable the alert rule {0}. {1}",notificationEnableAlertRuleInProgressLabel:"Enabling alert rule",
notificationEnableAlertRuleInProgressMessage:"Enabling alert rule {0}",notificationEnableAlertRuleSuccessLabel:
"Successfully enabled the alert rule",notificationEnableAlertRuleSuccessMessage:"Successfully enabled the alert rule {0}",
notificationSaveAlertRuleFailureLabel:"Failed to save the alert rule",notificationSaveAlertRuleFailureMessage:
"Failed to save the alert rule {0}. {1}",notificationSaveAlertRuleInProgressLabel:"Saving alert rule",
notificationSaveAlertRuleInProgressMessage:"Saving alert rule {0}",notificationSaveAlertRuleSuccessLabel:
"Successfully saved the alert rule",notificationSaveAlertRuleSuccessMessage:"Successfully saved the alert rule {0}",
openAddAlertBladeCommandText:"Add alert",period10Minutes:"Over the last 10 minutes",period15Minutes:
"Over the last 15 minutes",period24Hours:"Over the last 24 hours",period2Hours:"Over the last 2 hours",
period30Minutes:"Over the last 30 minutes",period3Hours:"Over the last 3 hours",period45Minutes:"Over the last 45 minutes",
period4Hours:"Over the last 4 hours",period5Hours:"Over the last 5 hours",period5Minutes:"Over the last 5 minutes",
period60Minutes:"Over the last hour",period6Hours:"Over the last 6 hours",saveCommandText:"Save",thresholdRangeValidationMessage:
"The threshold value is out of range. Enter a number between {0} and {1}.",validationErrorRequired:"Required"}}
);define("Metrics/MetricsResources",function(){return{bladeTitleMetricsChartConfiguration:"Edit Chart",
bladeTitleMetricsDetails:"Metric",buttonTextSave:"Save",columnNameAverage:"avg",columnNameMaximum:"max",
columnNameMetricName:"metric name",columnNameMinimum:"min",columnNameResource:"resource",columnNameTotal:
"total",disabledMessage:"Metrics are not available.",endTimeShouldBeAfterStartTime:"End time should be after the start time.",
graphArea:"Area",graphBar:"Bar",graphLine:"Line",infoBubbleChartType:"Choose how the data is displayed.",
infoBubbleGrouping:"Choose how the data is divided up. Each grouping will appear as a separate series.",
invalidChartTypeMessage:"You cannot select Bar chart type since you have selected metrics with different timegrain.",
lensTitleAlerts:"Alerts",loading:"loading ...",metricUnitBytes:"bytes",metricUnitBytesPerSecond:"bytes/second",
metricUnitCount:"count",metricUnitCountPerSecond:"count/second",metricUnitDays:"days",metricUnitDaysShort:
"d",metricUnitHours:"hours",metricUnitHoursShort:"h",metricUnitMilliseconds:"milliseconds",metricUnitMillisecondsShort:
"ms",metricUnitMinutes:"minutes",metricUnitMinutesShort:"m",metricUnitPercent:"%",metricUnitSeconds:
"seconds",metricUnitSecondsShort:"s",noAvailableMetricMessage:"No available metric",noDataMessage:"No available data.",
noDataStorage:"Monitoring may not be enabled. Click on MONITORING under Configuration to enable it.",
noMetricMessage:"No metric selected.",openMetricsChartConfigurationBladeCommandText:"Edit chart",perSecond:
"{0}/s",radioTextOff:"Off",radioTextOn:"On",startTimeShouldBeBeforeEndTime:"Start time should be before the end time.",
startTimeShouldBeEarlierThanCurrentTime:"Start time should be earlier than current time.",textAggregationAverage:
"Average",textAggregationLast:"Last",textAggregationMaximum:"Maximum",textAggregationMinimum:"Minimum",
textAggregationTotal:"Total",timeSpanCustom:"custom",timeSpanPastHour:"past hour",timeSpanPastWeek:"past week",
timeSpanToday:"today",titleChartType:"Chart type",titleGrouping:"Grouping",titleMetrics:"Metrics",titleMetricsPart2metrics:
"{0} and {1}",titleMetricsPart3metrics:"{0}, {1} and one more metric",titleMetricsPartOver3Metrics:"{0}, {1} and {2} more metrics",
titleTimeSpan:"Time Range",turnOnDiagnosticsMessage:"Monitoring may not be enabled. Click here to turn on Diagnostics."}}
);define("Diagnostics/DiagnosticsStorageResources",function(){return{defaultStorageMetricAggregationPeriod:
"1hr,1m",displayNameBlobAggregateMetrics:"Blob Aggregate Metrics",displayNameBlobLogs:"Blob Logs",displayNameBlobPerApiMetrics:
"Blob Per API Metrics",displayNameQueueAggregateMetrics:"Queue Aggregate Metrics",displayNameQueueLogs:
"Queue Logs",displayNameQueuePerApiMetrics:"Queue Per API Metrics",displayNameTableAggregateMetrics:
"Table Aggregate Metrics",displayNameTableLogs:"Table Logs",displayNameTablePerApiMetrics:"Table Per API Metrics"}}
);define("Diagnostics/DiagnosticsVirtualMachineResources",function(){return{diagnosticLoglevelCritical:
"Critical",diagnosticLoglevelError:"Error",diagnosticLoglevelInformation:"Information",diagnosticLoglevelUndefined:
"All",diagnosticLoglevelVerbose:"Verbose",diagnosticLoglevelWarning:"Warning",displayNameBasicMetrics:
"Basic metrics",displayNameCrashDumps:"Crash dumps",displayNameDotNetMetrics:".NET metrics",displayNameIISLogs:
"IIS logs",displayNameInfrastructureLogs:"Diagnostics infrastructure logs",displayNameNetworkMetrics:
"Network and web metrics",displayNamePerDiskMetrics:"Per disk metrics",displayNameSQLMetrics:"SQL metrics",
displayNameWindowsEventApplicationLogs:"Windows event application logs",displayNameWindowsEventSecurityLogs:
"Windows event security logs",displayNameWindowsEventSystemLogs:"Windows event system logs"}});define(
"Diagnostics/DiagnosticsResources",function(){return{bladeEulaDiagnostics:"You’ll be charged normal data rates for storage and transactions when you send diagnostics to a storage account.",
bladeTitleDiagnostics:"Diagnostics",commandTextDiagnostics:"Diagnostics",fieldNameAutoEnableInFuture:
"Automatically enable in the future",fieldNameRetention:"Retention (days)",fieldNameStatus:"Status",
fieldNameStorageAccount:"Storage Account",notificationDiagnosticsUpdateFailureLabel:"Failed to updated diagnostics settings",
notificationDiagnosticsUpdateFailureMessage:"Failed to updated diagnostics settings for {0}. {1}",notificationDiagnosticsUpdateInProgressLabel:
"Updating diagnostics settings ...",notificationDiagnosticsUpdateInProgressMessage:"Updating diagnostics settings for {0}.",
notificationDiagnosticsUpdateSuccessLabel:"Successfully updated diagnostics settings",notificationDiagnosticsUpdateSuccessMessage:
"Successfully updated diagnostics settings for {0}.",openDiagnosticsSettingsBladeCommandText:"Diagnostic settings",
optionNameStatusCustom:"Custom",optionNameStatusOff:"Off",optionNameStatusStandard:"On",textRetention1day:
"1",textRetention30days:"30",textRetention60days:"60",textRetention7days:"7",textRetention90days:"90",
textStorageAccountChangeWarning:"Existing diagnostics will not appear in the portal if you change the storage account.",
textStorageAccountWarningForAdf:"This storage account will be used for all resources of this type in this region."}}
);define("Usages/UsagesResources",function(){return{disabledMessage:"Usage is not available.",noDataMessage:
"No available data.",usageBladeTitle:"Usage",usageGaugePartDefaultTitle:"Usage Quota",usagePartCaptionCurrent:
"Current",usagePartCaptionResets:"Resets",usagePartCaptionThreshold:"Threshold",usageQuotaUnlimited:
"Unlimited"}});define("Applications/ApplicationsResources",function(){return{applicationInsightsSelectorTitle:
"Application Insights",bladeTitleApplications:"applications",columnErrorRate:"error rate",columnName:
"application",columnResponseTime:"response time",inProgress:"In Progress ...",loading:"Loading ...",
newRelicSelectorTitle:"New Relic",noAccounts:"Create a New Relic account in the gallery to enable New Relic .NET application performance monitoring",
noApplications:"no applications available",noApplicationsInstalled:"Click here to collect insights into the performance of your .NET applications.",
providerNotConfiguredText:"Not configured",providerSelectedStringTitle:"selected",selectProvider:"Select provider",
selectProviderSubtitle:"Choose an extension provider to install that will collect performance data.",
summaryPartTitle:"Application monitoring"}});define("Scales/ScalesResources",function(){return{autoscale:
"Autoscale",bladeTitleScaleProfile:"Scale profile",bladeTitleScaleRule:"Scale rule",bladeTitleScaleSetting:
"Scale setting",descriptionAdvancedMode:"Create your own set of rules. Create a schedule that adjusts your instance counts based on time and performance metrics.",
descriptionFormatFixedDateProfile:"{0}, scale {1} - {2}",descriptionFormatNormalProfile:"{0}, scale {1} - {2}",
descriptionFormatRecurrenceProfile:"{0}, scale {1} - {2}",descriptionFormatRule:"{0} {1} {2} ({3} {4})",
descriptionManualMode:"Manual setup means that the number of instances you choose won't change, even if there are changes in load.",
descriptionMetricModeFormat:"Automatically scale up or down based on {0}. Choose an average value you want to target.",
instances:"Instances",notificationSaveScaleSettingFailureLabel:"Failed to save scale setting.",notificationSaveScaleSettingFailureMessage:
"Failed to save scale setting. {0}",notificationSaveScaleSettingInProgressLabel:"Saving scale setting.",
notificationSaveScaleSettingInProgressMessage:"Saving scale setting.",notificationSaveScaleSettingSuccessLabel:
"Successfully saved scale setting.",notificationSaveScaleSettingSuccessMessage:"Successfully saved scale setting.",
partTitleScaleSummary:"Scale",textAddProfile:"Add Profile",textAddRule:"Add Rule",textAlways:"always",
textDecreaseByCount:"decrease count by",textDecreaseByPercent:"decrease percent by",textDecreaseToCount:
"decrease count to",textFixedDate:"fixed date",textIncreaseByCount:"increase count by",textIncreaseByPercent:
"increase percent by",textIncreaseToCount:"increase size to",textRecurrence:"recurrence",textScaleDown:
"scale down",textScaleUp:"scale up",titleAction:"Action",titleAdvancedMode:"schedule and performance rules",
titleCoolDown:"Cool down (minutes)",titleDays:"Days",titleDescription:"Description",titleEndTime:"End time",
titleInstances:"Instances",titleManualMode:"an instance count that I enter manually",titleMetricModeFormat:
"{0}",titleMetricName:"Metric name",titleName:"Name",titleOperator:"Operator",titlePredicatedInstances:
"prd. ist.",titleResourceId:"Resource ID",titleScaleDownAt:"Scale down at",titleScaleMode:"Scale by",
titleScaleUpAt:"Scale up at",titleSettings:"Settings",titleStartTime:"Start time",titleTargetRange:"Target range",
titleThreshold:"Threshold",titleTimeAggregation:"Time aggregation",titleTimeWindow:"Duration (minutes)",
titleTimeZone:"Time zone",titleType:"Type",titleValidationError:"Validation failed",titleValue:"Value",
validationEmptyProfiles:"Please add a profile",validationMax:"Value can't exceed {0}",validationProfileNameUsed:
"Profile name already used in this setting",validationTime:"invalid time"}});define("Common/CommonResources",
function(){return{commandTextDelete:"Delete",commandTextDiscard:"Discard",commandTextSave:"Save",friday:
"Friday",loading:"loading",monday:"Monday",off:"Off",on:"On",saturday:"Saturday",sunday:"Sunday",textLoading:
"loading ...",textOperatorEqualTo:"Equal to",textOperatorGreaterThan:"Greater than",textOperatorGreaterThanOrEqualTo:
"Greater than or equal to",textOperatorLessThan:"Less than",textOperatorLessThanOrEqualTo:"Less than or equal to",
textOperatorNotEqualTo:"Not equal to",textZone0:"(UTC-12:00) International Date Line West",textZone1:
"(UTC-11:00) Coordinated Universal Time-11",textZone10:"(UTC-06:00) Central Time (US & Canada)",textZone100:
"(UTC+12:00) Auckland, Wellington",textZone101:"(UTC+12:00) Coordinated Universal Time+12",textZone102:
"(UTC+12:00) Fiji",textZone103:"(UTC+12:00) Petropavlovsk-Kamchatsky - Old",textZone104:"(UTC+13:00) Nuku'alofa",
textZone105:"(UTC+13:00) Samoa",textZone106:"(UTC+14:00) Kiritimati Island",textZone11:"(UTC-06:00) Guadalajara, Mexico City, Monterrey",
textZone12:"(UTC-06:00) Saskatchewan",textZone13:"(UTC-05:00) Bogota, Lima, Quito, Rio Branco",textZone14:
"(UTC-05:00) Eastern Time (US & Canada)",textZone15:"(UTC-05:00) Indiana (East)",textZone16:"(UTC-04:30) Caracas",
textZone17:"(UTC-04:00) Asuncion",textZone18:"(UTC-04:00) Atlantic Time (Canada)",textZone19:"(UTC-04:00) Cuiaba",
textZone2:"(UTC-10:00) Hawaii",textZone20:"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",textZone21:
"(UTC-04:00) Santiago",textZone22:"(UTC-03:30) Newfoundland",textZone23:"(UTC-03:00) Brasilia",textZone24:
"(UTC-03:00) Buenos Aires",textZone25:"(UTC-03:00) Cayenne, Fortaleza",textZone26:"(UTC-03:00) Greenland",
textZone27:"(UTC-03:00) Montevideo",textZone28:"(UTC-03:00) Salvador",textZone29:"(UTC-02:00) Coordinated Universal Time-02",
textZone3:"(UTC-09:00) Alaska",textZone30:"(UTC-02:00) Mid-Atlantic - Old",textZone31:"(UTC-01:00) Azores",
textZone32:"(UTC-01:00) Cape Verde Is.",textZone33:"(UTC) Casablanca",textZone34:"(UTC) Coordinated Universal Time",
textZone35:"(UTC) Dublin, Edinburgh, Lisbon, London",textZone36:"(UTC) Monrovia, Reykjavik",textZone37:
"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",textZone38:"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
textZone39:"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",textZone4:"(UTC-08:00) Baja California",
textZone40:"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",textZone41:"(UTC+01:00) West Central Africa",
textZone42:"(UTC+01:00) Windhoek",textZone43:"(UTC+02:00) Amman",textZone44:"(UTC+02:00) Athens, Bucharest",
textZone45:"(UTC+02:00) Beirut",textZone46:"(UTC+02:00) Cairo",textZone47:"(UTC+02:00) Damascus",textZone48:
"(UTC+02:00) E. Europe",textZone49:"(UTC+02:00) Harare, Pretoria",textZone5:"(UTC-08:00) Pacific Time (US & Canada)",
textZone50:"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",textZone51:"(UTC+02:00) Istanbul",
textZone52:"(UTC+02:00) Jerusalem",textZone53:"(UTC+02:00) Kaliningrad (RTZ 1)",textZone54:"(UTC+02:00) Tripoli",
textZone55:"(UTC+03:00) Baghdad",textZone56:"(UTC+03:00) Kuwait, Riyadh",textZone57:"(UTC+03:00) Minsk",
textZone58:"(UTC+03:00) Moscow, St. Petersburg, Volgograd (RTZ 2)",textZone59:"(UTC+03:00) Nairobi",
textZone6:"(UTC-07:00) Arizona",textZone60:"(UTC+03:30) Tehran",textZone61:"(UTC+04:00) Abu Dhabi, Muscat",
textZone62:"(UTC+04:00) Baku",textZone63:"(UTC+04:00) Izhevsk, Samara (RTZ 3)",textZone64:"(UTC+04:00) Port Louis",
textZone65:"(UTC+04:00) Tbilisi",textZone66:"(UTC+04:00) Yerevan",textZone67:"(UTC+04:30) Kabul",textZone68:
"(UTC+05:00) Ashgabat, Tashkent",textZone69:"(UTC+05:00) Ekaterinburg (RTZ 4)",textZone7:"(UTC-07:00) Chihuahua, La Paz, Mazatlan",
textZone70:"(UTC+05:00) Islamabad, Karachi",textZone71:"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
textZone72:"(UTC+05:30) Sri ayawardenepura",textZone73:"(UTC+05:45) Kathmandu",textZone74:"(UTC+06:00) Astana",
textZone75:"(UTC+06:00) Dhaka",textZone76:"(UTC+06:00) Novosibirsk (RTZ 5)",textZone77:"(UTC+06:30) Yangon (Rangoon)",
textZone78:"(UTC+07:00) Bangkok, Hanoi, Jakarta",textZone79:"(UTC+07:00) Krasnoyarsk (RTZ 6)",textZone8:
"(UTC-07:00) Mountain Time (US & Canada)",textZone80:"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
textZone81:"(UTC+08:00) Irkutsk (RTZ 7)",textZone82:"(UTC+08:00) Kuala Lumpur, Singapore",textZone83:
"(UTC+08:00) Perth",textZone84:"(UTC+08:00) Taipei",textZone85:"(UTC+08:00) Ulaanbaatar",textZone86:
"(UTC+09:00) Osaka, Sapporo, Tokyo",textZone87:"(UTC+09:00) Seoul",textZone88:"(UTC+09:00) Yakutsk (RTZ 8)",
textZone89:"(UTC+09:30) Adelaide",textZone9:"(UTC-06:00) Central America",textZone90:"(UTC+09:30) Darwin",
textZone91:"(UTC+10:00) Brisbane",textZone92:"(UTC+10:00) Canberra, Melbourne, Sydney",textZone93:"(UTC+10:00) Guam, Port Moresby",
textZone94:"(UTC+10:00) Hobart",textZone95:"(UTC+10:00) Magadan",textZone96:"(UTC+10:00) Vladivostok, Magadan (RTZ 9)",
textZone97:"(UTC+11:00) Chokurdakh (RTZ 10)",textZone98:"(UTC+11:00) Solomon Is., New Caledonia",textZone99:
"(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky (RTZ 11)",thursday:"Thursday",tuesday:"Tuesday",wednesday:
"Wednesday"}})