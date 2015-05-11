(function(n,t){"use strict";var i={},r;(function(){function r(n,t){var i;if(typeof n=="object"&&typeof
t=="object")for(i in t)t.hasOwnProperty(i)&&(n[i]?r(n[i],t[i]):n[i]=t[i]);return n}function f(n,t,i)
{n[t]=n[t]||{};r(n[t],i)}if(r(n,{Resources:{getResources:function(){}}}),t)for(var u in t)t.hasOwnProperty(
u)&&f(i,u,t[u])})();r=n.Resources.getResources;n.Resources.getResources=function(n){return r(n)||i[n]}
})(this,{"BillingExtension.BillingClientResources.Strings":{signUp:"Sign up",missingPaymentInstrumentsTitle:
"Missing Payment Instruments",currentChargesMetricHeader:"Current charges",notAvailable:"Not available",
notifyRemoveUserSucceededTitle:"Removed co-admin",dueDateTitle:"For",UpgradeSubscriptionBlade_DreamSpark_Body:
"To unlock all Azure features, you need to upgrade your DreamSpark subscription. Upgrading is quick, you'll only be billed if you use premium features.",
seeMoreAboutSubscription:"See more information about this {0} subscription",userRoleServiceAdministrator:
"Service administrator",subscriptionReachedSpendingLimitMessage:"For your subscription {0}, the subscription reached a spending limit and has been disabled to prevent charges.",
understandBalancesPaymentsAndCredits:"Understand balances, payments, and credits",thirdPartyRunningCostDetailTitle:
"Partner services estimated charges for {0}",noBillingData:"There's no usage or billing data to show.",
pending:"Pending",accountWindowsAzureBillingHistoryUri:"https://account.windowsazure.com/Subscriptions/billinghistory?subscriptionId={0}",
azureSubscriptionUsageTitle:"Usage: Azure services",subscriptionExpiredTitle:"Subscription has expired",
thirdPartyRunningCostDefaultTitle:"Estimated charges",unknownSubscription:"Unknown subscription",noRunningCostData:
"There's no usage or billing data to show.",windowsAzurePricingCalculator:"http://www.windowsazure.com/en-us/pricing/calculator/",
freeTrialExpiresTodayMessage:"For your subscription {0}, your free trial expires today.",disabled:"Disabled",
invalidEmailAddressMessage:"Please enter a valid email address.",windowsAzurePurchaseOptions:"http://www.windowsazure.com/en-us/pricing/purchase-options/",
costByResourceGridConsumedUnitsHeader:"Consumed units",subscriptionPlansAvailable:"Subscription plans available",
details:"Details",runningCostDefaultTitle:"Estimated charges",billing:"Billing",removeSpendingLimit:
"Remove spending limit",billingSummary:"Billing summary",subscriptions:"Subscriptions",thirdPartyBillingTitle:
"Partner billing not included",notifyAddUserFailedMessage:"Failed to add '{0}' as a co-admin.",notifyAddUserSucceededMessage:
"Added '{0}' as a co-admin.",currentBillingPeriod:"Current Billing Period",managementTeam:"Admins",mySubscriptionsGridTypeHeader:
"Type",diagnosticsLogErrorFailedToGetSubscription:"Failed to get the subscription",amountDueTitle:"Azure services",
AssetTypeNames_Billing_lowerPlural:"billings",creditUsedMetricHeader:"Credit used",chargesEstimatedOnly:
"Charges are estimates only. May not include recent activity.",currentSpendGridTotalHeader:"Total ({0})",
startingCreditMetricHeader:"Starting credit",mySubscriptionsGridStatusHeader:"Status",pendingStatus:
"PENDING Contact Microsoft Support if this persists",resourceGroupCosts:"Resource costs",detailsNotAvailable:
"Details not available.",costByResourceGridNameHeader:"Name",resourceType:"Type",learnMore:"Learn more",
remainingToCapMetricHeader:"Left to cap",creditValidationRequiredMessage:"For your subscription {0}, this transaction requires an additional credit check. Your subscription will be enabled once your credit is verified.",
usePricingCalculator:"Use pricing calculator",userRolePending:"Co-admin (pending)",userRoleServiceAdministrator1:
"Service administrator",paymentInstrument:"Payment instrument",userRoleAccountAdministrator:"Account administrator",
noBillingDataChartMessage:"Billing data will appear 1–2 days after you use services",costByResourceGridResourceGuidHeader:
"Resource guid",burnRatePartTitle:"Burn rate",AssetTypeNames_Billing_Singular:"Billing",virtualMachineSoftwareDonutTitle:
"{0} (Partner Software)",costByResourceGridBillableUnitsHeader:"Billable units",virtualMachineSoftwareTitle:
"Partner Software",creditValidationRequiredTitle:"Credit validation required",AssetTypeNames_Subscription_lowerSingular:
"subscription",disabledStatus:"DISABLED Contact Microsoft Support for help",discardChangesCommandText:
"Discard",subscriptionStatus:"Subscription status",userRoleAccountAdministrator1:"Account administrator",
remainingMonetaryCommitmentTitle:"Remaining monetary commitment:",userRoleCoAdministrator:"Co-admin",
userRoleAdding:"Co-admin (saving...)",commitmentLeftStartBoardMetricHeader:"Commitment left",todayCallOut:
"today",eaWindowsAzureUri:"https://ea.azure.com/",thirdPartyCharges:"Partner services",addNewSubscription:
"Add new subscription",spendingLimitHeader:"Spending limit",usersGridEmailAddressEmptyValueText:"Enter email address",
notifyRemoveUserProgressMessage:"Removing co-admin '{0}'...",projectedSuspensionDate:"Projected suspension date",
unknownSubscriptionMessage:"Sorry, we could not get billing information for the subscription '{0}'. Please contact support to resolve the issue. {1}.",
amountDue:"Bill amount",integrateWithMicrosoftAzure:"Move faster, save money, and integrate your on-premises apps and data with Azure—the cloud for modern business.",
downloadUsageDetails:"Download usage details",subscriptionReachedSpendingLimitTitle:"Reached spending limit",
windowsAzureUnderstandYourBill:"http://www.windowsazure.com/en-us/support/understand-your-bill/",changeSubscriptionAddress:
"Change subscription address",creditRemainingMessage:"{0} credit expires in {1} days for '{2}'",editSubscriptionDetails:
"Edit subscription details",charges:"Charges",AssetTypeNames_Subscription_lowerPlural:"subscriptions",
subscriptionExpiredMessage:"For your subscription {0}, the subscription has expired and its data will be deleted after the retention period.",
descriptionColumn:"Description",analyzeDailyUsageData:"Analyze daily usage data",mySubscriptionsDaysHeader:
"Days left",creditLeftStartBoardMetricHeader:"Credit left",notifyRemoveUserSucceededMessage:"Removed '{0}'.",
loading:"Loading...",nextMonth:"Next month",contactMicrosoftSupport:"Contact Microsoft support",creditExpiry:
"Credit expiry (days)",windowsAzureUnderstandYourBillHeader2:"http://www.windowsazure.com/en-us/support/understand-your-bill/#understand-the-current-charges",
windowsAzureUnderstandYourBillHeader3:"http://www.windowsazure.com/en-us/support/understand-your-bill/#analyze-daily-usage-data",
windowsAzureUnderstandYourBillHeader0:"http://www.windowsazure.com/en-us/support/understand-your-bill/#view-or-download-a-bill-for-windows-azure",
windowsAzureUnderstandYourBillHeader1:"http://www.windowsazure.com/en-us/support/understand-your-bill/#understand-the-balances-payments-credits",
notifyAddUserProgressTitle:"Adding co-admin",subscriptionPendingMessage:"For your subscription {0}, please wait while we set up the subscription.",
userRoleRemoving:"Co-admin (removing...)",developPlusTestSolutions:"Develop + test solutions in the cloud",
lastMonth:"Last month",go:"Go",unknownStatus:"ERROR Contact Microsoft Support for help",cancelSubscription:
"Cancel subscription",AssetTypeNames_Billing_Plural:"Billings",overview:"Overview",notifyRemoveUserFailedMessage:
"Failed to remove '{0}'.",nameColumn:"Name",microsoftEASubscription:"Microsoft Enterprise Agreement subscription",
subscriptionName:"Subscription",notifyAddUserSucceededTitle:"Added co-admin",currentCharge:"Current Charge",
missingPaymentInstrumentsMessage:"For your subscription {0}, the subscription is missing payments. Make sure that you are using a valid credit card or invoice to pay for this subscription.",
displayCompletePaymentInstrument:"{0} {1}",removeUserConfirmationDialogTitle:"Remove user",costs:"Breakdown of current charges",
windowsAzureBillingSupportUri:"https://manage.windowsazure.com/?getsupport=true",toCap:"To Cap",usage:
"Usage",capRemoved:"Cap removed",understandHow:"Understand how to view or download a bill",UpgradeSubscriptionBlade_Header:
"Upgrade your subscription",billingPeriodTitle:"Billing Period:",usersGridSummary:"List of users",changePaymentMethod:
"Change payment method",mySubscriptionsGridNameHeader:"Subscription",thirdPartyTitle:"Partner services",
emptyUsersList:"Failed to get the list of users. Please close and re-open the blade.",loadingSubscriptionDetails:
"Loading subscription details...",cycleRemainingHeader:"current cycle remaining",properties:"Properties",
saveChangesCommandText:"Save",runningCostDetailTitle:"Estimated charges for {0}",billingPeriod:"Billing period",
unknownSubscriptionTitle:"Could not retrieve billing information.",orderId:"Order ID",insights:"Insights",
signInEAPortal:"Sign in to the Azure Enterprise portal to see usage and account details for this EA subscription.",
viewBillingHistory:"Billing history",freeTrialReachedSpendingLimitTitle:"Free trial reached spending limit",
unknownError:"Unknown",cancelled:"Cancelled",remainingToCap:"Left to cap:",notifyAddUserFailedTitle:
"Could not add co-admin",costByResourceBladeTitle:"Resource costs",usersGridNameColumn:"Name",accountWindowsAzureSignupUri:
"https://account.windowsazure.com/signup?showCatalog=True",viewSubscriptionOverview:"Subscription overview",
diagnosticsLogErrorResourceUsageUriNotSpecified:"Resource usage uri was not specified.",removeUserCommandText:
"Remove user",creditRemaining:"Credit left",subscriptionProperties:"Properties for subscription {0}",
understandYourBill:"Understand your bill",purchaseDate:"Purchase date",paymentMethod:"Payment method",
noSubscriptions:"You don't have any subscriptions",AssetTypeNames_Subscription_singular:"Subscription",
serviceManagement:"Service management",runningCostsChartTitle:"Subscription usage",notifyRemoveUserProgressTitle:
"Removing co-admin",commitmentUsedMetricHeader:"Commitment used",subscriptionTypeTitle:"Type:",commitmentAmountMetricHeader:
"Commitment",freeTrialExpiresInXDaysTitle:"Free trial expiring soon",understandTheCurrentCharges:"Understand current charges",
otherResouceName:"Others",idColumn:"ID",mySubscriptionsGridToCapHeader:"To cap",currentChargesStartBoardMetricHeader:
"Current charges",adminHeader:"admin",usersGridRoleColumn:"Role",UpgradeSubscriptionBlade_Title:"Get more out of Azure",
thisMonth:"This month",UpgradeSubscriptionBlade_Body:"To unlock all Azure features, you need to upgrade your DreamSpark subscription. Upgrading is quick, you'll only be billed if you use premium features.",
UpgradeSubscriptionBlade_Link:"Upgrade",daysLeft:"Days left",freeTrialExpiresTodayTitle:"Free trial expires today",
notifyRemoveUserFailedTitle:"Could not remove co-admin",dataNotAvailable:"Data not available",serviceAdmin:
"Service admin",noBillingDataAvailable:"Billing data will arrive as you accrue costs",usersBladeSubTitle:
"Manage subscription users",access:"Access",active:"Active",youNeedSubscription:"Sorry, you don't have a subscription—so there's no usage or billing data to show.",
removeUserConfirmationDialogDescription:"Are you sure you want to remove {0}?",myAccountsOverview:"Accounts summary",
subscriptionDetailBladeDefaultTitle:"Subscription detail",subscriptionsOverview:"Subscription summary",
UpgradeSubscriptionBlade_DreamSpark_NonAaBody:"To unlock all Azure features, please contact your account administrator to upgrade your subscription.",
quickStart:"Quickstart",noData:"No data",freeTrialReachedSpendingLimitMessage:"For your subscription {0}, the free trial subscription reached a spending limit and has been disabled to prevent charges.",
costByResourceGridTotalHeader:"Total ({0})",costByResource:"Cost by resource",accountAdmin:"Account admin",
noDataValue:"--",AssetTypeNames_Billing_lowerSingular:"billing",learnMoreAboutSubscription:"Learn more about managing this {0} subscription",
thirdPartySubscriptionUsageTitle:"Usage: Partner services",cancelledStatus:"CANCELLED Contact Microsoft Support for help",
currentSpendGridHeader:"Estimated spend",accountWindowsAzureStatementUri:"https://account.windowsazure.com/Subscriptions/Statement?subscriptionId={0}",
getYourAzureSubscription:"Get your Azure subscription",formattedEstimatedString:"(estimated)",AssetTypeNames_Subscription_plural:
"Subscriptions",freeTrialExpiresInXDaysMessage:"For your subscription {0}, your free trial expires in {1} day(s). ",
UpgradeSubscriptionBlade_PartTitle:"Upgrade subscription",subscriptionManagement:"Subscription management",
currentSpendBladeTitle:"Estimated spend",getSubscriptionNow:"Get a subscription now",notifyAddUserProgressMessage:
"Adding '{0}' as a co-admin...",runningCost:"Running Cost",subscriptionNameHeader:"name/type",subscriptionId:
"Subscription ID",free:"Free",currentSpend:"Estimated spend",resourceCostByApp:"Resource cost by app",
subscriptionPendingTitle:"Subscription is pending"}})