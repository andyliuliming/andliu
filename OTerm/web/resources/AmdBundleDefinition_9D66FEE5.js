var __extends;define("BillingExtension/Billing/BillingHelper",["require","exports","./Models/BillingData",
"../Generated/SvgDefinitions","BillingExtension/Billing/BillingClientStrings"],function(n,t,i,r,u){var
f;return function(n){"use strict";function o(n){n=n||"";var t=n.split("//"),r=t.length?t.last():"",i=
r.split("/");return i.splice(0,1),i.join("/")}function s(n){return n&&i.test(n)}function h(n){var t=
n&&n.subscriptionTypeInfo&&n.subscriptionTypeInfo().type()?n.subscriptionTypeInfo().type():0;return!!f.
first(function(n){return n===t})}function c(n,i){switch(n){case 2:i.title=t.freeTrialReachedSpendingLimitTitle;
i.message=t.freeTrialReachedSpendingLimitMessage;i.status=2;break;case 5:i.title=t.missingPaymentInstrumentsTitle;
i.message=t.missingPaymentInstrumentsMessage;i.status=2;break;case 3:i.title=t.subscriptionReachedSpendingLimitTitle;
i.message=t.subscriptionReachedSpendingLimitMessage;i.status=2;break;case 0:i.title=t.freeTrialExpiresInXDaysTitle;
i.message=t.freeTrialExpiresInXDaysMessage;i.status=1;break;case 1:i.title=t.freeTrialExpiresTodayTitle;
i.message=t.freeTrialExpiresTodayMessage;i.status=1;break;case 7:i.title=t.subscriptionExpiredTitle;
i.message=t.subscriptionExpiredMessage;i.status=1;break;case 8:i.title=t.unknownSubscriptionTitle;i.
message=t.unknownSubscriptionMessage;i.status=1;break;case 6:i.title=t.creditValidationRequiredTitle;
i.message=t.creditValidationRequiredMessage;i.status=0;break;case 4:i.title=t.subscriptionPendingTitle;
i.message=t.subscriptionPendingMessage;i.status=0}}var t=u,i=/^(https:)\/\//,f=[1,2,3],e=function(){
function n(){}return n.getAdminIcon=function(n){return n?MsPortalFx.Base.Images.Person():MsPortalFx.
Base.Images.PersonWithFriend()},n.getMonetaryCapStatusIcon=function(n){return n===1||n===4?MsPortalFx.
Base.Images.Unlock():n===2||n===3?MsPortalFx.Base.Images.Lock():MsPortalFx.Base.Images.Blank()},n.getSubscriptionSummaryData=
function(i){var r=new MsPortalFx.Internal.Billing.SubscriptionSummaryData,e,f,u;return r.id=i.id,r.subscriptionName=
i.subscriptionName,r.subscriptionStatusIcon=ko.observable(n.getSubcriptionStatusIcon(i.displayStatus(
))),r.isLoaded=i.isLoaded,i.subscriptionTypeInfo&&i.subscriptionTypeInfo()?(e=i.subscriptionTypeInfo(
),f=e.type(),r.subscriptionIcon=ko.observable(n.getSubcriptionTypeIcon(f,i.isAccountAdmin(),f===2&&i.
monetaryCommitmentInfo&&i.monetaryCommitmentInfo()?i.monetaryCommitmentInfo():null)),r.subscriptionTypeInfo=
e.displayType,r.subscriptionDetailBladeTypeName=ko.observable(n.getDetailsBladeForSubscription(f))):
(r.subscriptionIcon=ko.observable(n.getSubcriptionTypeIcon(0,i.isAccountAdmin())),r.subscriptionTypeInfo=
ko.observable("")),i.subscriptionTypeInfo&&i.subscriptionTypeInfo()&&i.subscriptionTypeInfo().type()===
1?i.monetaryCreditInfo&&i.monetaryCreditInfo()?(u=i.monetaryCreditInfo(),r.formattedAmountDueOrCredit=
u.formattedRemainingCredit,r.creditStatus=ko.observable(n.getCreditStatus(u.monetaryCapStatus())),r.
amountDueOrCreditInfo=u.monetaryCapStatus()===1||u.monetaryCapStatus()===4?ko.observable(t.creditRemaining):
ko.observable(t.toCap)):(r.formattedAmountDueOrCredit=ko.observable(""),r.amountDueOrCreditInfo=ko.observable(
""),r.creditStatus=ko.observable(0)):(r.formattedAmountDueOrCredit=i.currentStatement&&i.currentStatement(
)?i.currentStatement().formattedTotalAmount:ko.observable(t.noDataValue),r.amountDueOrCreditInfo=ko.
observable(t.currentCharge),r.creditStatus=ko.observable(0)),r},n.getBillingSubscription=function(n)
{var r,t,i;return n&&(t=this.getSubscriptionSummaryData(n),t&&(i=n.managementTeamInfo(),r={id:t.id(),
isLoaded:t.isLoaded(),creditStatus:t.creditStatus(),offerCategories:n.offerCategories(),subscriptionName:
t.subscriptionName(),subscriptionIcon:t.subscriptionIcon(),subscriptionTypeInfo:t.subscriptionTypeInfo(
),amountDueOrCreditInfo:t.amountDueOrCreditInfo(),subscriptionStatusIcon:t.subscriptionStatusIcon(),
formattedAmountDueOrCredit:t.formattedAmountDueOrCredit(),subscriptionDetailBladeTypeName:t.subscriptionDetailBladeTypeName(
),isRdfeSubscriptionId:n.isRdfeSubscriptionId(),accountAdminEmail:i?i.accountAdminEmail():null,serviceAdminEmail:
i?i.serviceAdminEmail():null,isAccountAdmin:n.isAccountAdmin(),offerId:n.offerId?n.offerId():""})),r}
,n.getSubcriptionTypeIcon=function(n,t,i){var u,e,f;if(t)switch(n){case 0:u=r.Content.Images.BillingExtension.
billing_sub_none_AA;break;case 2:e=i?i.monetaryCommitmentType():null;f=i&&i.termLength&&i.termLength(
)?i.termLength():0;u=e===0?f===6?r.Content.Images.BillingExtension.billing_sub_sixmonth_monthly_AA:f===
12?r.Content.Images.BillingExtension.billing_sub_twelvemonth_monthly_AA:r.Content.Images.BillingExtension.
billing_sub_none_AA:e===1?f===6?r.Content.Images.BillingExtension.billing_sub_sixmonth_prepaid_AA:f===
12?r.Content.Images.BillingExtension.billing_sub_twelvemonth_prepaid_AA:r.Content.Images.BillingExtension.
billing_sub_none_AA:r.Content.Images.BillingExtension.billing_sub_none_AA;break;case 3:u=r.Content.Images.
BillingExtension.billing_sub_consumption_AA;break;case 5:case 1:u=r.Content.Images.BillingExtension.
billing_sub_monetaryCredit_AA;break;case 6:u=r.Content.Images.BillingExtension.billing_sub_support_AA;
break;case 7:u=r.Content.Images.BillingExtension.billing_sub_other_AA;break;case 4:u=r.Content.Images.
BillingExtension.billing_sub_EA_AA;break;default:u=MsPortalFx.Base.Images.Blank()}else switch(n){case
0:u=r.Content.Images.BillingExtension.billing_sub_none_SA;break;case 2:e=i?i.monetaryCommitmentType(
):null;f=i&&i.termLength&&i.termLength()?i.termLength():0;u=e===0?f===6?r.Content.Images.BillingExtension.
billing_sub_sixmonth_monthly_SA:f===12?r.Content.Images.BillingExtension.billing_sub_twelvemonth_monthly_SA:
r.Content.Images.BillingExtension.billing_sub_none_SA:e===1?f===6?r.Content.Images.BillingExtension.
billing_sub_sixmonth_prepaid_SA:f===12?r.Content.Images.BillingExtension.billing_sub_twelvemonth_prepaid_SA:
r.Content.Images.BillingExtension.billing_sub_none_SA:r.Content.Images.BillingExtension.billing_sub_none_SA;
break;case 3:u=r.Content.Images.BillingExtension.billing_sub_consumption_SA;break;case 5:case 1:u=r.
Content.Images.BillingExtension.billing_sub_monetaryCredit_SA;break;case 6:u=r.Content.Images.BillingExtension.
billing_sub_support_SA;break;case 7:u=r.Content.Images.BillingExtension.billing_sub_other_SA;break;case
4:u=r.Content.Images.BillingExtension.billing_sub_EA_SA;break;default:u=MsPortalFx.Base.Images.Blank(
)}return u},n.getSubcriptionStatuses=function(){return[0,1,2,3,4]},n.getSubcriptionStatusIcon=function(
n){var t;switch(n){case 0:t=MsPortalFx.Base.Images.Check();break;case 1:t=MsPortalFx.Base.Images.StatusBadge.
Pending();break;case 2:t=MsPortalFx.Base.Images.StatusBadge.Disabled();break;case 3:t=MsPortalFx.Base.
Images.StatusBadge.Canceled();break;case 4:t=MsPortalFx.Base.Images.StatusBadge.Unknown();break;default:
t=MsPortalFx.Base.Images.Blank()}return t},n.getSubcriptionStatusText=function(n){var i;switch(n){case
0:i=t.active;break;case 1:i=t.pending;break;case 2:i=t.disabled;break;case 3:i=t.cancelled;break;case
4:i=t.unknownError;break;default:i=""}return i},n.getCreditStatus=function(n){var t;switch(n){case 2:
t=2;break;case 3:t=1;break;default:t=0}return t},n.getDetailsBladeForSubscription=function(n){var t;
switch(n){case 1:t="CreditSubscriptionDetailBlade";break;case 3:t="ConsumptionSubscriptionDetailBlade";
break;case 6:t="SupportSubscriptionDetailBlade";break;case 2:t="CommitmentSubscriptionDetailBlade";break
case 4:t="EASubscriptionDetailBlade";break;case 5:t="FreeTierSubscriptionDetailBlade";break;default:
t="OtherSubscriptionDetailBlade"}return t},n.getCssColorFromColorCode=function(n){return"azc-chart-color-"+
n.substring(1)},n.getSortedMergedUsageDetails=function(n,t){if(!n)return t;var i=n.concat(t);return i.
sort(function(n,t){return n.chargedAmount()>t.chargedAmount()?-1:n.chargedAmount()<t.chargedAmount()?
1:0})},n}();n.BillingHelper=e;n.getUrlPath=o;n.isValidUri=s;n.isAllowedSubType=h;n.getNotificationProperties=
c}(f||(f={})),f});define("BillingExtension/Billing/Models/BillingData",["require","exports"],function(
){var n;return function(n){"use strict";var a=function(){function n(){}return n}(),t,i,r,u,f,e,o,s,h,
c,l,v,y,p,w,b,k,d;n.BillingSubscription=a;t=function(){function n(){}return n}();n.SubscriptionTypeInfo=
t;i=function(){function n(){}return n}();n.MonetaryCreditInfo=i;r=function(){function n(){}return n}
();n.MonetaryCommitmentInfo=r;u=function(){function n(){}return n}();n.SubscriptionStatementInfo=u;f=
function(){function n(){}return n}();n.PaymentAmountInfo=f;e=function(){function n(){}return n}();n.
ChargesByDateInfo=e;o=function(){function n(){}return n}();n.UsageDetail=o;s=function(){function n()
{}return n}();n.PaymentInstrument=s;h=function(){function n(){}return n}();n.BillingSummaryData=h;c=
function(){function n(){}return n}();n.ManagementTeamInfo=c;l=function(){function n(){}return n}();n.
SubscriptionNotification=l,function(n){n[n.Active=0]="Active";n[n.Pending=1]="Pending";n[n.Disabled=
2]="Disabled";n[n.Cancelled=3]="Cancelled";n[n.Unknown=4]="Unknown"}(n.SubscriptionDisplayStatus||(n.
SubscriptionDisplayStatus={}));v=n.SubscriptionDisplayStatus,function(n){n[n.None=0]="None";n[n.MonetaryCredit=
1]="MonetaryCredit";n[n.Commitment=2]="Commitment";n[n.Consumption=3]="Consumption";n[n.EA=4]="EA";n[
n.FreeTier=5]="FreeTier";n[n.Support=6]="Support";n[n.Other=7]="Other"}(n.SubscriptionType||(n.SubscriptionType=
{}));y=n.SubscriptionType,function(n){n[n.None=0]="None";n[n.MonetaryCapDisabled=1]="MonetaryCapDisabled";
n[n.MonetaryCapHit=2]="MonetaryCapHit";n[n.MonetaryCapNotHit=3]="MonetaryCapNotHit";n[n.MonetaryCapScheduleOn=
4]="MonetaryCapScheduleOn"}(n.BillingMonetaryCapStatus||(n.BillingMonetaryCapStatus={}));p=n.BillingMonetaryCapStatus,
function(n){n[n.None=0]="None";n[n.CreditCard=1]="CreditCard";n[n.Invoice=2]="Invoice";n[n.Inicis=3]=
"Inicis";n[n.AliPay=4]="AliPay";n[n.UnionPay=5]="UnionPay"}(n.BillingPaymentInstrumentKind||(n.BillingPaymentInstrumentKind=
{}));w=n.BillingPaymentInstrumentKind,function(n){n[n.Unknown=0]="Unknown";n[n.VISA=1]="VISA";n[n.MC=
2]="MC";n[n.AMEX=3]="AMEX";n[n.DISCOVER=4]="DISCOVER";n[n.JCB=5]="JCB";n[n.DINERS=6]="DINERS";n[n.KLCC=
7]="KLCC";n[n.ELO=8]="ELO";n[n.HIPERCARD=9]="HIPERCARD"}(n.BillingCreditCardType||(n.BillingCreditCardType=
{}));b=n.BillingCreditCardType,function(n){n[n.MonetaryCommitmentMonthlyPaid=0]="MonetaryCommitmentMonthlyPaid";
n[n.MonetaryCommitmentTermPaid=1]="MonetaryCommitmentTermPaid";n[n.Unknown=2]="Unknown"}(n.MonetaryCommitmentType||
(n.MonetaryCommitmentType={}));k=n.MonetaryCommitmentType,function(n){n[n.FreeTrialExpiresInXDays=0]=
"FreeTrialExpiresInXDays";n[n.FreeTrialExpiresToday=1]="FreeTrialExpiresToday";n[n.FreeTrialReachedSpendingLimit=
2]="FreeTrialReachedSpendingLimit";n[n.SubscriptionReachedSpendingLimit=3]="SubscriptionReachedSpendingLimit";
n[n.SubscriptionPending=4]="SubscriptionPending";n[n.MissingPaymentInstruments=5]="MissingPaymentInstruments";
n[n.CreditValidationRequired=6]="CreditValidationRequired";n[n.SubscriptionExpired=7]="SubscriptionExpired";
n[n.UnknownSubscription=8]="UnknownSubscription"}(n.SubscriptionNotificationType||(n.SubscriptionNotificationType=
{}));d=n.SubscriptionNotificationType}(n||(n={})),n});define("BillingExtension/Generated/SvgDefinitions",
["require","exports"],function(){var n;return function(n){"use strict";var t;(function(n){var t;(function(
n){var t;(function(n){n.billing_creditcard={type:1,data:'<svg viewBox="-0.5 0.5 30 30" class="msportalfx-svg-placeholder" role="img"><title><\/title><path opacity="0.4" class="msportalfx-svg-c15" d="M25.5,17.5c0,1.105-0.895,2-2,2h-22c-1.105,0-2-0.895-2-2v-13c0-1.105,0.895-2,2-2h22 c1.105,0,2,0.895,2,2V17.5z"/><path class="msportalfx-svg-c15" d="M29.5,25.5c0,1.105-0.895,2-2,2h-22c-1.105,0-2-0.895-2-2v-13c0-1.105,0.895-2,2-2h22c1.105,0,2,0.895,2,2 V25.5z"/><rect x="16.5" y="19.5" opacity="0.8" class="msportalfx-svg-c01" width="4" height="2"/><rect x="21.5" y="19.5" opacity="0.8" class="msportalfx-svg-c01" width="4" height="2"/><rect x="6.5" y="19.5" opacity="0.8" class="msportalfx-svg-c01" width="4" height="2"/><rect x="6.5" y="23.5" class="msportalfx-svg-c01" width="8" height="1"/><rect x="16.5" y="23.5" opacity="0.5" class="msportalfx-svg-c01" width="3" height="1"/><rect x="11.5" y="19.5" opacity="0.8" class="msportalfx-svg-c01" width="4" height="2"/><path class="msportalfx-svg-c01" d="M11.5,16.721c0,0.43-0.38,0.779-0.849,0.779H7.349C6.88,17.5,6.5,17.151,6.5,16.721V14.5 c0-0.43,0.38-1,0.849-1h3.302c0.469,0,0.849,0.349,0.849,0.779V16.721z"/><rect x="-0.5" y="5.5" class="msportalfx-svg-c04" width="26" height="2"/><\/svg>'};
n.billing_invoice={type:1,data:'<svg viewBox="0 0 30 30" class="msportalfx-svg-placeholder" role="img"><title><\/title><path class="msportalfx-svg-c13" d="M26,28c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h18c1.1,0,2,0.9,2,2V28z"/><rect x="7" y="14" class="msportalfx-svg-c01" width="11" height="2"/><rect x="20" y="14" class="msportalfx-svg-c01" width="3" height="2"/><rect x="7" y="18" class="msportalfx-svg-c01" width="11" height="2"/><rect x="20" y="18" class="msportalfx-svg-c01" width="3" height="2"/><rect x="7" y="22" class="msportalfx-svg-c01" width="11" height="2"/><rect x="20" y="22" class="msportalfx-svg-c01" width="3" height="2"/><polygon class="msportalfx-svg-c01" points="17.3,8 14.1,11 16.7,11 21,7 16.7,3 14.1,3 17.3,6 11,6 11,8 "/><\/svg>'};
n.billing_tile={type:1,data:'<svg viewBox="0 0 50 50" class="msportalfx-svg-placeholder" role="img"><title><\/title><path class="msportalfx-svg-c07" d="M28.431,27.562c0,0.811-0.254,1.462-0.764,1.955c-0.512,0.493-1.254,0.796-2.23,0.908v1.59h-1.07v-1.546 c-1.006-0.01-1.928-0.234-2.768-0.674v-2.028c0.264,0.215,0.684,0.423,1.264,0.626c0.578,0.202,1.08,0.318,1.504,0.348v-2.666 c-1.078-0.4-1.844-0.839-2.293-1.314c-0.449-0.477-0.674-1.103-0.674-1.879s0.277-1.432,0.828-1.967 c0.553-0.534,1.266-0.846,2.139-0.934v-1.362h1.07v1.333c1.029,0.049,1.799,0.215,2.307,0.498v1.978 c-0.68-0.41-1.447-0.664-2.307-0.762v2.775c1.078,0.392,1.848,0.831,2.307,1.318C28.203,26.249,28.431,26.849,28.431,27.562z M24.367,24.017v-2.322c-0.678,0.122-1.018,0.477-1.018,1.063C23.349,23.269,23.689,23.69,24.367,24.017z M26.484,27.664 c0-0.473-0.35-0.863-1.047-1.172v2.22C26.134,28.599,26.484,28.25,26.484,27.664z"/><path class="msportalfx-svg-c14" d="M25,38.81c-7.627,0-13.811-6.183-13.811-13.809c0-7.626,6.183-13.809,13.81-13.81v0 c7.627,0,13.81,6.182,13.81,13.809h11.19c0-13.807-11.192-25-25-25v0.001C11.191,0.002,0,11.194,0,25.001c0,13.807,11.192,25,25,25 c6.393,0,12.221-2.403,16.641-6.35l-7.457-8.358C31.741,37.474,28.53,38.81,25,38.81z"/><path opacity="0.1" class="msportalfx-svg-c01" d="M25,38.81c-7.627,0-13.811-6.183-13.811-13.809c0-7.626,6.183-13.809,13.81-13.81v0 c7.627,0,13.81,6.182,13.81,13.809h11.19c0-13.807-11.192-25-25-25v0.001C11.191,0.002,0,11.194,0,25.001c0,13.807,11.192,25,25,25 c6.393,0,12.221-2.403,16.641-6.35l-7.457-8.358C31.741,37.474,28.53,38.81,25,38.81z"/><path class="msportalfx-svg-c11" d="M50,25H38.809c0,4.096-1.793,7.764-4.625,10.292l7.457,8.359C46.768,39.072,50,32.415,50,25"/><path opacity="0.9" class="msportalfx-svg-c13" d="M38.809,25h11.19c0-13.807-11.192-25-25-25v11.191C32.625,11.191,38.809,17.373,38.809,25"/><\/svg>'};
n.billing_sub_sixmonth_monthly_AA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><g><circle class="msportalfx-svg-c15" cx="7.5" cy="8.5" r="8"/><path opacity="0.2" class="msportalfx-svg-c01" d="M1.843,14.157c-3.124-3.124-3.124-8.19,0-11.314s8.19-3.124,11.314,0L1.843,14.157z"/><\/g><path class="msportalfx-svg-c01" d="M4.509,9.859c0,0.225-0.037,0.43-0.111,0.615C4.324,10.66,4.221,10.82,4.09,10.953 c-0.131,0.135-0.287,0.238-0.467,0.313s-0.375,0.111-0.586,0.111c-0.225,0-0.432-0.044-0.621-0.132 c-0.188-0.087-0.351-0.218-0.487-0.391c-0.137-0.173-0.242-0.388-0.317-0.645C1.537,9.951,1.5,9.652,1.5,9.313 c0-0.415,0.049-0.782,0.148-1.104c0.099-0.32,0.235-0.59,0.408-0.806c0.173-0.214,0.376-0.379,0.609-0.491S3.15,6.744,3.421,6.744 c0.168,0,0.322,0.011,0.461,0.034c0.139,0.023,0.25,0.054,0.333,0.094v0.653c-0.106-0.054-0.22-0.1-0.34-0.138 C3.754,7.35,3.616,7.331,3.459,7.331c-0.175,0-0.336,0.035-0.484,0.106c-0.148,0.07-0.276,0.174-0.383,0.311 C2.485,7.885,2.4,8.053,2.339,8.254S2.246,8.688,2.244,8.949h0.019c0.096-0.147,0.226-0.265,0.389-0.35 c0.163-0.085,0.355-0.127,0.576-0.127c0.196,0,0.373,0.031,0.53,0.095S4.05,8.722,4.161,8.842c0.112,0.12,0.198,0.266,0.258,0.438 C4.479,9.451,4.509,9.645,4.509,9.859z M3.778,9.918c0-0.129-0.015-0.246-0.045-0.353c-0.03-0.106-0.076-0.197-0.138-0.273 S3.456,9.157,3.364,9.115S3.163,9.052,3.038,9.052s-0.235,0.022-0.33,0.067S2.534,9.223,2.469,9.296 c-0.064,0.072-0.113,0.156-0.146,0.25s-0.048,0.19-0.048,0.288c0,0.106,0.015,0.215,0.045,0.326s0.077,0.213,0.139,0.305 s0.142,0.168,0.239,0.227c0.097,0.06,0.212,0.09,0.345,0.09c0.119,0,0.224-0.022,0.316-0.066c0.092-0.043,0.168-0.104,0.229-0.181 s0.108-0.169,0.141-0.273C3.762,10.155,3.778,10.041,3.778,9.918z"/><rect x="10.515" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="10.515" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="10.515" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="12.515" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="12.515" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="8.515" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="8.515" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="8.515" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="6.515" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="6.515" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><\/svg>'};
n.billing_sub_sixmonth_monthly_SA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><path class="msportalfx-svg-c15" d="M13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5v8.867c0,1.173,0.96,2.133,2.133,2.133h11.733 c1.174,0,2.134-0.96,2.134-2.133V5.5V2.633C15.5,1.46,14.54,0.5,13.367,0.5z"/><path class="msportalfx-svg-c01" d="M4.494,9.859c0,0.225-0.037,0.43-0.111,0.615c-0.074,0.186-0.177,0.346-0.308,0.479 c-0.131,0.135-0.287,0.238-0.467,0.313s-0.375,0.111-0.586,0.111c-0.225,0-0.432-0.044-0.621-0.132 c-0.188-0.087-0.351-0.218-0.487-0.391c-0.137-0.173-0.242-0.388-0.317-0.645C1.522,9.951,1.485,9.652,1.485,9.313 c0-0.415,0.049-0.782,0.148-1.104c0.099-0.32,0.235-0.59,0.408-0.806C2.214,7.189,2.417,7.024,2.65,6.912s0.485-0.168,0.756-0.168 c0.168,0,0.322,0.011,0.461,0.034S4.117,6.832,4.2,6.872v0.653c-0.106-0.054-0.22-0.1-0.34-0.138 C3.739,7.35,3.601,7.331,3.444,7.331c-0.175,0-0.336,0.035-0.484,0.106c-0.148,0.07-0.276,0.174-0.383,0.311 C2.47,7.885,2.385,8.053,2.324,8.254S2.231,8.688,2.229,8.949h0.019c0.096-0.147,0.226-0.265,0.389-0.35 C2.8,8.514,2.992,8.472,3.213,8.472c0.196,0,0.373,0.031,0.53,0.095s0.292,0.155,0.403,0.275c0.112,0.12,0.198,0.266,0.258,0.438 C4.464,9.451,4.494,9.645,4.494,9.859z M3.763,9.918c0-0.129-0.015-0.246-0.045-0.353C3.688,9.459,3.642,9.368,3.58,9.292 S3.441,9.157,3.349,9.115S3.148,9.052,3.023,9.052s-0.235,0.022-0.33,0.067S2.519,9.223,2.454,9.296 C2.39,9.368,2.341,9.452,2.308,9.546S2.26,9.736,2.26,9.834c0,0.106,0.015,0.215,0.045,0.326s0.077,0.213,0.139,0.305 s0.142,0.168,0.239,0.227c0.097,0.06,0.212,0.09,0.345,0.09c0.119,0,0.224-0.022,0.316-0.066c0.092-0.043,0.168-0.104,0.229-0.181 s0.108-0.169,0.141-0.273C3.747,10.155,3.763,10.041,3.763,9.918z"/><rect x="10.5" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="10.5" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="10.5" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="12.5" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="12.5" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="8.5" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="8.5" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="8.5" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="6.5" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="6.5" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><path opacity="0.2" class="msportalfx-svg-c01" d="M14.789,1.057C14.41,0.715,13.914,0.5,13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5 v8.533c0,0.719,0.223,1.308,0.579,1.734L14.789,1.057z"/><\/svg>'};
n.billing_sub_sixmonth_prepaid_AA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><circle class="msportalfx-svg-c15" cx="7.5" cy="8.5" r="8"/><path opacity="0.2" class="msportalfx-svg-c01" enable-background="new " d="M1.843,14.157c-3.124-3.124-3.124-8.19,0-11.314 s8.19-3.124,11.314,0L1.843,14.157z"/><path class="msportalfx-svg-c01" d="M4.509,9.859c0,0.225-0.037,0.43-0.111,0.615C4.324,10.66,4.221,10.82,4.09,10.953 c-0.131,0.135-0.287,0.238-0.467,0.313c-0.18,0.074-0.375,0.111-0.586,0.111c-0.225,0-0.432-0.044-0.621-0.132 c-0.188-0.087-0.351-0.218-0.487-0.391c-0.137-0.173-0.242-0.388-0.317-0.645C1.537,9.951,1.5,9.652,1.5,9.313 c0-0.415,0.049-0.782,0.148-1.104c0.099-0.32,0.235-0.59,0.408-0.806c0.173-0.214,0.376-0.379,0.609-0.491 C2.898,6.8,3.15,6.744,3.421,6.744c0.168,0,0.322,0.011,0.461,0.034s0.25,0.054,0.333,0.094v0.653c-0.106-0.054-0.22-0.1-0.34-0.138 C3.754,7.35,3.616,7.331,3.459,7.331c-0.175,0-0.336,0.035-0.484,0.106c-0.148,0.07-0.276,0.174-0.383,0.311 C2.485,7.885,2.4,8.053,2.339,8.254C2.278,8.455,2.246,8.688,2.244,8.949h0.019c0.096-0.147,0.226-0.265,0.389-0.35 c0.163-0.085,0.355-0.127,0.576-0.127c0.196,0,0.373,0.031,0.53,0.095C3.915,8.631,4.05,8.722,4.161,8.842 c0.112,0.12,0.198,0.266,0.258,0.438C4.479,9.451,4.509,9.645,4.509,9.859z M3.778,9.918c0-0.129-0.015-0.246-0.045-0.353 c-0.03-0.106-0.076-0.197-0.138-0.273S3.456,9.157,3.364,9.115S3.163,9.052,3.038,9.052s-0.235,0.022-0.33,0.067 C2.613,9.164,2.534,9.223,2.469,9.296c-0.064,0.072-0.113,0.156-0.146,0.25s-0.048,0.19-0.048,0.288 c0,0.106,0.015,0.215,0.045,0.326s0.077,0.213,0.139,0.305c0.062,0.092,0.142,0.168,0.239,0.227c0.097,0.06,0.212,0.09,0.345,0.09 c0.119,0,0.224-0.022,0.316-0.066c0.092-0.043,0.168-0.104,0.229-0.181s0.108-0.169,0.141-0.273 C3.762,10.155,3.778,10.041,3.778,9.918z"/><path class="msportalfx-svg-c01" d="M6.807,8.593L6.565,8.331c-0.063-0.069-0.063-0.179,0.01-0.245l0.698-0.644 c0.033-0.03,0.073-0.046,0.116-0.046c0.049,0,0.093,0.02,0.125,0.056l1.918,2.057l3.301-4.228c0.033-0.043,0.083-0.066,0.135-0.066 c0.04,0,0.076,0.013,0.106,0.037l0.754,0.582c0.037,0.027,0.059,0.066,0.066,0.113c0.003,0.046-0.007,0.093-0.037,0.125L9.517,11.5 L6.807,8.593z"/><\/svg>'};
n.billing_sub_sixmonth_prepaid_SA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><path class="msportalfx-svg-c15" d="M13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5v8.533c0,1.507,0.96,2.467,2.133,2.467h11.733 c1.174,0,2.134-0.96,2.134-2.133V5.5V2.633C15.5,1.46,14.54,0.5,13.367,0.5z"/><path class="msportalfx-svg-c01" d="M4.509,9.859c0,0.225-0.037,0.43-0.111,0.615C4.324,10.66,4.221,10.82,4.09,10.953 c-0.131,0.135-0.287,0.238-0.467,0.313c-0.18,0.074-0.375,0.111-0.586,0.111c-0.225,0-0.432-0.044-0.621-0.132 c-0.188-0.087-0.351-0.218-0.487-0.391c-0.137-0.173-0.242-0.388-0.317-0.645C1.537,9.951,1.5,9.652,1.5,9.313 c0-0.415,0.049-0.782,0.148-1.104c0.099-0.32,0.235-0.59,0.408-0.806c0.173-0.214,0.376-0.379,0.609-0.491S3.15,6.744,3.421,6.744 c0.168,0,0.322,0.011,0.461,0.034c0.139,0.023,0.25,0.054,0.333,0.094v0.653c-0.106-0.054-0.22-0.1-0.34-0.138 C3.754,7.35,3.616,7.331,3.459,7.331c-0.175,0-0.336,0.035-0.484,0.106c-0.148,0.07-0.276,0.174-0.383,0.311 C2.485,7.885,2.4,8.053,2.339,8.254S2.246,8.688,2.244,8.949h0.019c0.096-0.147,0.226-0.265,0.389-0.35 c0.163-0.085,0.355-0.127,0.576-0.127c0.196,0,0.373,0.031,0.53,0.095S4.05,8.722,4.161,8.842c0.112,0.12,0.198,0.266,0.258,0.438 C4.479,9.451,4.509,9.645,4.509,9.859z M3.778,9.918c0-0.129-0.015-0.246-0.045-0.353c-0.03-0.106-0.076-0.197-0.138-0.273 S3.456,9.157,3.364,9.115S3.163,9.052,3.038,9.052s-0.235,0.022-0.33,0.067S2.534,9.223,2.469,9.296 c-0.064,0.072-0.113,0.156-0.146,0.25s-0.048,0.19-0.048,0.288c0,0.106,0.015,0.215,0.045,0.326s0.077,0.213,0.139,0.305 s0.142,0.168,0.239,0.227c0.097,0.06,0.212,0.09,0.345,0.09c0.119,0,0.224-0.022,0.316-0.066c0.092-0.043,0.168-0.104,0.229-0.181 s0.108-0.169,0.141-0.273C3.762,10.155,3.778,10.041,3.778,9.918z"/><path class="msportalfx-svg-c01" d="M6.807,8.593L6.565,8.331c-0.063-0.069-0.063-0.179,0.01-0.245l0.698-0.644 c0.033-0.03,0.073-0.046,0.116-0.046c0.049,0,0.093,0.02,0.125,0.056l1.918,2.057l3.301-4.228c0.033-0.043,0.083-0.066,0.135-0.066 c0.04,0,0.076,0.013,0.106,0.037l0.754,0.582c0.037,0.027,0.059,0.066,0.066,0.113c0.003,0.046-0.007,0.093-0.037,0.125L9.517,11.5 L6.807,8.593z"/><path opacity="0.2" class="msportalfx-svg-c01" d="M14.789,1.057C14.41,0.715,13.914,0.5,13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5 v8.533c0,0.719,0.223,1.308,0.579,1.734L14.789,1.057z"/><\/svg>'};
n.billing_sub_twelvemonth_monthly_AA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><circle class="msportalfx-svg-c15" cx="7.5" cy="8.5" r="8"/><path opacity="0.2" class="msportalfx-svg-c01" d="M1.843,14.157c-3.124-3.124-3.124-8.19,0-11.314s8.19-3.124,11.314,0L1.843,14.157z"/><rect x="11.5" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="11.5" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="11.5" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="13.5" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="13.5" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="9.5" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="9.5" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="9.5" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="7.5" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="7.5" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><path class="msportalfx-svg-c01" d="M2.201,6.719V11.3H1.477V7.605c-0.132,0.094-0.273,0.174-0.424,0.24C0.903,7.91,0.73,7.969,0.536,8.019 v-0.62c0.12-0.039,0.237-0.081,0.35-0.125S1.11,7.182,1.219,7.128c0.109-0.055,0.22-0.115,0.331-0.181 C1.661,6.88,1.777,6.804,1.896,6.719H2.201z"/><path class="msportalfx-svg-c01" d="M6.443,11.3H3.63v-0.347c0-0.143,0.02-0.275,0.06-0.398c0.039-0.124,0.093-0.241,0.159-0.351 s0.145-0.212,0.234-0.31c0.09-0.097,0.186-0.19,0.287-0.281c0.103-0.09,0.206-0.178,0.313-0.262c0.106-0.085,0.211-0.17,0.313-0.255 C5.092,9.015,5.18,8.935,5.259,8.857s0.146-0.159,0.203-0.242s0.1-0.172,0.131-0.264c0.03-0.092,0.046-0.193,0.046-0.301 c0-0.119-0.018-0.223-0.055-0.312C5.548,7.65,5.497,7.576,5.432,7.517c-0.066-0.06-0.144-0.104-0.233-0.134 C5.11,7.353,5.011,7.337,4.905,7.337c-0.183,0-0.369,0.043-0.559,0.128C4.156,7.551,3.974,7.679,3.799,7.85V7.152 c0.092-0.068,0.184-0.128,0.277-0.179C4.17,6.922,4.268,6.879,4.367,6.845c0.1-0.035,0.205-0.06,0.315-0.077 s0.229-0.025,0.354-0.025c0.202,0,0.386,0.026,0.55,0.08c0.165,0.053,0.306,0.131,0.422,0.234C6.125,7.16,6.215,7.289,6.279,7.443 s0.095,0.331,0.095,0.531c0,0.182-0.021,0.344-0.066,0.489S6.2,8.742,6.117,8.867C6.035,8.992,5.935,9.111,5.819,9.223 C5.702,9.335,5.572,9.452,5.428,9.57C5.307,9.668,5.187,9.763,5.067,9.856c-0.119,0.093-0.228,0.184-0.323,0.271 c-0.096,0.089-0.174,0.178-0.232,0.266c-0.06,0.089-0.09,0.178-0.09,0.268v0.016h2.022V11.3H6.443z"/><\/svg>'};
n.billing_sub_twelvemonth_monthly_SA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><path class="msportalfx-svg-c15" d="M13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5v8.867c0,1.173,0.96,2.133,2.133,2.133h11.733 c1.174,0,2.134-0.96,2.134-2.133V5.5V2.633C15.5,1.46,14.54,0.5,13.367,0.5z"/><rect x="11.482" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="11.482" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="11.482" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="13.482" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="13.482" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="9.482" y="6.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="9.482" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="9.482" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="7.482" y="10.5" class="msportalfx-svg-c01" width="1" height="1"/><rect x="7.482" y="8.5" class="msportalfx-svg-c01" width="1" height="1"/><path class="msportalfx-svg-c01" d="M2.183,6.719V11.3H1.459V7.605c-0.132,0.094-0.273,0.174-0.424,0.24C0.885,7.91,0.712,7.969,0.518,8.019 v-0.62c0.12-0.039,0.237-0.081,0.35-0.125s0.224-0.092,0.333-0.146c0.109-0.055,0.22-0.115,0.331-0.181 C1.643,6.88,1.759,6.804,1.878,6.719H2.183z"/><path class="msportalfx-svg-c01" d="M6.425,11.3H3.612v-0.347c0-0.143,0.02-0.275,0.06-0.398c0.039-0.124,0.093-0.241,0.159-0.351 s0.145-0.212,0.234-0.31c0.09-0.097,0.186-0.19,0.287-0.281c0.103-0.09,0.206-0.178,0.313-0.262c0.106-0.085,0.211-0.17,0.313-0.255 c0.096-0.081,0.184-0.161,0.263-0.239s0.146-0.159,0.203-0.242s0.1-0.172,0.131-0.264c0.03-0.092,0.046-0.193,0.046-0.301 c0-0.119-0.018-0.223-0.055-0.312C5.53,7.65,5.479,7.576,5.414,7.517C5.348,7.457,5.27,7.413,5.181,7.383 c-0.089-0.03-0.188-0.046-0.294-0.046c-0.183,0-0.369,0.043-0.559,0.128C4.138,7.551,3.956,7.679,3.781,7.85V7.152 c0.092-0.068,0.184-0.128,0.277-0.179C4.152,6.922,4.25,6.879,4.349,6.845c0.1-0.035,0.205-0.06,0.315-0.077 s0.229-0.025,0.354-0.025c0.202,0,0.386,0.026,0.55,0.08C5.733,6.876,5.874,6.954,5.99,7.057C6.107,7.16,6.197,7.289,6.261,7.443 s0.095,0.331,0.095,0.531c0,0.182-0.021,0.344-0.066,0.489S6.182,8.742,6.099,8.867C6.017,8.992,5.917,9.111,5.801,9.223 C5.684,9.335,5.554,9.452,5.41,9.57C5.289,9.668,5.169,9.763,5.049,9.856C4.93,9.949,4.821,10.04,4.726,10.127 c-0.096,0.089-0.174,0.178-0.232,0.266c-0.06,0.089-0.09,0.178-0.09,0.268v0.016h2.022V11.3H6.425z"/><path opacity="0.2" class="msportalfx-svg-c01" d="M14.789,1.057C14.41,0.715,13.914,0.5,13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5 v8.533c0,0.719,0.223,1.308,0.579,1.734L14.789,1.057z"/><\/svg>'};
n.billing_sub_twelvemonth_prepaid_AA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><circle class="msportalfx-svg-c15" cx="7.499" cy="8.5" r="8"/><path opacity="0.2" class="msportalfx-svg-c01" d="M1.843,14.157c-3.124-3.124-3.124-8.19,0-11.314s8.19-3.124,11.314,0L1.843,14.157z"/><path class="msportalfx-svg-c01" d="M2.323,6.719V11.3H1.599V7.605c-0.132,0.094-0.273,0.174-0.424,0.24C1.025,7.91,0.852,7.969,0.658,8.019 v-0.62c0.12-0.039,0.237-0.081,0.35-0.125s0.224-0.092,0.333-0.146c0.109-0.055,0.22-0.115,0.331-0.181 C1.783,6.88,1.899,6.804,2.018,6.719H2.323z"/><path class="msportalfx-svg-c01" d="M6.565,11.3H3.752v-0.347c0-0.143,0.02-0.275,0.06-0.398c0.039-0.124,0.093-0.241,0.159-0.351 c0.066-0.11,0.145-0.212,0.234-0.31c0.09-0.097,0.186-0.19,0.287-0.281c0.103-0.09,0.206-0.178,0.313-0.262 c0.106-0.085,0.211-0.17,0.313-0.255c0.096-0.081,0.184-0.161,0.263-0.239C5.46,8.779,5.527,8.698,5.584,8.615 s0.1-0.172,0.131-0.264c0.03-0.092,0.046-0.193,0.046-0.301c0-0.119-0.018-0.223-0.055-0.312C5.67,7.65,5.619,7.576,5.554,7.517 C5.488,7.457,5.41,7.413,5.321,7.383c-0.089-0.03-0.188-0.046-0.294-0.046c-0.183,0-0.369,0.043-0.559,0.128 C4.278,7.551,4.096,7.679,3.921,7.85V7.152c0.092-0.068,0.184-0.128,0.277-0.179C4.292,6.922,4.39,6.879,4.489,6.845 c0.1-0.035,0.205-0.06,0.315-0.077c0.11-0.017,0.229-0.025,0.354-0.025c0.202,0,0.386,0.026,0.55,0.08 C5.873,6.876,6.014,6.954,6.13,7.057C6.247,7.16,6.337,7.289,6.401,7.443c0.064,0.154,0.095,0.331,0.095,0.531 c0,0.182-0.021,0.344-0.066,0.489S6.322,8.742,6.239,8.867C6.157,8.992,6.057,9.111,5.941,9.223C5.824,9.335,5.694,9.452,5.55,9.57 C5.429,9.668,5.309,9.763,5.189,9.856C5.07,9.949,4.961,10.04,4.866,10.127c-0.096,0.089-0.174,0.178-0.232,0.266 c-0.06,0.089-0.09,0.178-0.09,0.268v0.016h2.022V11.3H6.565z"/><path class="msportalfx-svg-c01" d="M7.512,9.231L7.27,8.969C7.207,8.9,7.207,8.79,7.28,8.724L7.978,8.08c0.033-0.03,0.073-0.046,0.116-0.046 c0.049,0,0.093,0.02,0.125,0.056l1.918,2.057l3.301-4.228c0.033-0.043,0.083-0.066,0.135-0.066c0.04,0,0.076,0.013,0.106,0.037 l0.754,0.582c0.037,0.027,0.059,0.066,0.066,0.113c0.003,0.046-0.007,0.093-0.037,0.125l-4.24,5.428L7.512,9.231z"/><\/svg>'};
n.billing_sub_twelvemonth_prepaid_SA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><path class="msportalfx-svg-c15" d="M13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5v8.533c0,1.507,0.96,2.467,2.133,2.467h11.733 c1.173,0,2.133-0.96,2.133-2.133V5.5H15.5V2.633C15.5,1.46,14.54,0.5,13.367,0.5z"/><path class="msportalfx-svg-c01" d="M2.201,6.719V11.3H1.477V7.605c-0.132,0.094-0.273,0.174-0.424,0.24C0.903,7.91,0.73,7.969,0.536,8.019 v-0.62c0.12-0.039,0.237-0.081,0.35-0.125S1.11,7.182,1.219,7.128c0.109-0.055,0.22-0.115,0.331-0.181 C1.661,6.88,1.777,6.804,1.896,6.719H2.201z"/><path class="msportalfx-svg-c01" d="M6.443,11.3H3.63v-0.347c0-0.143,0.02-0.275,0.06-0.398c0.039-0.124,0.093-0.241,0.159-0.351 s0.145-0.212,0.234-0.31c0.09-0.097,0.186-0.19,0.287-0.281c0.103-0.09,0.206-0.178,0.313-0.262c0.106-0.085,0.211-0.17,0.313-0.255 C5.092,9.015,5.18,8.935,5.259,8.857s0.146-0.159,0.203-0.242s0.1-0.172,0.131-0.264c0.03-0.092,0.046-0.193,0.046-0.301 c0-0.119-0.018-0.223-0.055-0.312C5.548,7.65,5.497,7.576,5.432,7.517c-0.066-0.06-0.144-0.104-0.233-0.134 C5.11,7.353,5.011,7.337,4.905,7.337c-0.183,0-0.369,0.043-0.559,0.128C4.156,7.551,3.974,7.679,3.799,7.85V7.152 c0.092-0.068,0.184-0.128,0.277-0.179C4.17,6.922,4.268,6.879,4.367,6.845c0.1-0.035,0.205-0.06,0.315-0.077 s0.229-0.025,0.354-0.025c0.202,0,0.386,0.026,0.55,0.08c0.165,0.053,0.306,0.131,0.422,0.234C6.125,7.16,6.215,7.289,6.279,7.443 s0.095,0.331,0.095,0.531c0,0.182-0.021,0.344-0.066,0.489S6.2,8.742,6.117,8.867C6.035,8.992,5.935,9.111,5.819,9.223 C5.702,9.335,5.572,9.452,5.428,9.57C5.307,9.668,5.187,9.763,5.067,9.856c-0.119,0.093-0.228,0.184-0.323,0.271 c-0.096,0.089-0.174,0.178-0.232,0.266c-0.06,0.089-0.09,0.178-0.09,0.268v0.016h2.022V11.3H6.443z"/><path class="msportalfx-svg-c01" d="M7.39,9.231L7.148,8.969C7.085,8.9,7.085,8.79,7.158,8.724L7.856,8.08c0.033-0.03,0.073-0.046,0.116-0.046 c0.049,0,0.093,0.02,0.125,0.056l1.918,2.057l3.301-4.228c0.033-0.043,0.083-0.066,0.135-0.066c0.04,0,0.076,0.013,0.106,0.037 l0.754,0.582c0.037,0.027,0.059,0.066,0.066,0.113C14.38,6.631,14.37,6.678,14.34,6.71l-4.24,5.428L7.39,9.231z"/><path opacity="0.2" class="msportalfx-svg-c01" d="M14.789,1.057C14.41,0.715,13.914,0.5,13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5 v8.533c0,0.719,0.223,1.308,0.579,1.734L14.789,1.057z"/><\/svg>'};
n.billing_sub_consumption_AA={type:1,data:'<svg viewBox="0 0 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title> <g> <circle class="msportalfx-svg-c15" cx="8" cy="8" r="8"/> <path opacity="0.2" class="msportalfx-svg-c01" d="M2.343,13.657c-3.124-3.124-3.124-8.19,0-11.314s8.19-3.124,11.314,0L2.343,13.657z"/> <\/g> <polygon class="msportalfx-svg-c01" points="10.351,4.342 11.408,5.4 11.414,5.406 8.589,8.232 6.46,6.103 1.936,10.628 3.062,11.754 3.062,11.754 6.46,8.356 8.589,10.485 12.541,6.533 13.592,7.584 13.936,4 "/> <\/svg>'};
n.billing_sub_consumption_SA={type:1,data:'<svg viewBox="0 0 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title> <path class="msportalfx-svg-c15" d="M13.867,0H2.133C0.96,0,0,0.96,0,2.133V5v8.867C0,15.04,0.96,16,2.133,16h11.733 C15.04,16,16,15.04,16,13.867V5V2.133C16,0.96,15.04,0,13.867,0z"/> <polygon class="msportalfx-svg-c01" points="10.416,4.342 11.472,5.4 11.478,5.406 8.653,8.232 6.524,6.103 2,10.628 3.127,11.754 3.127,11.754 6.524,8.356 8.653,10.485 12.605,6.533 13.657,7.584 14,4 "/> <path opacity="0.2" class="msportalfx-svg-c01" d="M15.289,0.557C14.91,0.215,14.414,0,13.867,0H2.133C0.96,0,0,0.96,0,2.133V5v8.533 c0,0.719,0.223,1.308,0.579,1.734L15.289,0.557z"/> <\/svg>'};
n.billing_sub_EA_AA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><g><circle class="msportalfx-svg-c15" cx="7.5" cy="8.5" r="8"/><path opacity="0.2" class="msportalfx-svg-c01" d="M1.843,14.157c-3.124-3.124-3.124-8.19,0-11.314s8.19-3.124,11.314,0L1.843,14.157z"/><\/g><path class="msportalfx-svg-c01" d="M6.353,11.5H3.5V6.416h2.74v0.716H4.343v1.441h1.748v0.712H4.343v1.503h2.01 C6.353,10.788,6.353,11.5,6.353,11.5z"/><path class="msportalfx-svg-c01" d="M11.5,11.5h-0.924l-0.457-1.294h-2L7.679,11.5H6.758l1.904-5.083h0.949L11.5,11.5z M9.894,9.518L9.188,7.491 c-0.02-0.067-0.043-0.174-0.066-0.32H9.108c-0.022,0.135-0.045,0.24-0.071,0.32L8.338,9.518C8.338,9.518,9.894,9.518,9.894,9.518z"/><\/svg>'};
n.billing_sub_EA_SA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><path class="msportalfx-svg-c15" d="M13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5v8.533c0,1.507,0.96,2.467,2.133,2.467h11.733 c1.173,0,2.133-0.96,2.133-2.133V5.5H15.5V2.633C15.5,1.46,14.54,0.5,13.367,0.5z"/><path class="msportalfx-svg-c01" d="M6.353,11.5H3.5V6.416h2.74v0.716H4.343v1.441h1.748v0.712H4.343v1.503h2.01 C6.353,10.788,6.353,11.5,6.353,11.5z"/><path class="msportalfx-svg-c01" d="M11.5,11.5h-0.924l-0.457-1.294h-2L7.679,11.5H6.758l1.904-5.083h0.949L11.5,11.5z M9.894,9.518L9.188,7.491 c-0.02-0.067-0.043-0.174-0.066-0.32H9.108c-0.022,0.135-0.045,0.24-0.071,0.32L8.338,9.518C8.338,9.518,9.894,9.518,9.894,9.518z"/><path opacity="0.2" class="msportalfx-svg-c01" d="M14.789,1.057C14.41,0.715,13.914,0.5,13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5 v8.533c0,0.719,0.223,1.308,0.579,1.734L14.789,1.057z"/><\/svg>'};
n.billing_sub_monetaryCredit_AA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><g><circle class="msportalfx-svg-c15" cx="7.5" cy="8.5" r="8"/><path opacity="0.2" class="msportalfx-svg-c01" d="M1.843,14.157c-3.124-3.124-3.124-8.19,0-11.314s8.19-3.124,11.314,0L1.843,14.157z"/><\/g><path fill-rule="evenodd" clip-rule="evenodd" class="msportalfx-svg-c01" d="M13.5,7.25V6.9c-0.751,0-1.366-0.63-1.366-1.4H2.866 c0,0.77-0.615,1.4-1.366,1.4v0.21c0.273,0,0.478,0.21,0.478,0.49S1.773,8.09,1.5,8.09v0.35c0.273,0,0.478,0.21,0.478,0.49 c0,0.28-0.205,0.56-0.478,0.56v0.35c0.273,0,0.478,0.21,0.478,0.49c0,0.28-0.205,0.56-0.478,0.56v0.21c0.751,0,1.366,0.63,1.366,1.4 h9.268c0-0.77,0.615-1.4,1.366-1.4v-0.21c-0.273,0-0.478-0.21-0.478-0.49s0.205-0.49,0.478-0.49V9.56 c-0.273,0-0.478-0.21-0.478-0.49c0-0.28,0.205-0.49,0.478-0.49V8.23c-0.273,0-0.478-0.21-0.478-0.49 C13.022,7.46,13.227,7.25,13.5,7.25z M4.5,11.1h-1V6.9h1V11.1z M9.161,11.307l-1.56-0.82l-1.56,0.82L6.338,9.57l-1.262-1.23 L6.82,8.086l0.78-1.581l0.78,1.581l1.744,0.253L8.863,9.57L9.161,11.307z M11.5,11.1h-1V6.9h1V11.1z"/><\/svg>'};
n.billing_sub_monetaryCredit_SA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><path class="msportalfx-svg-c15" d="M13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5v8.533c0,1.507,0.96,2.467,2.133,2.467h11.733 c1.173,0,2.133-0.96,2.133-2.133V5.5H15.5V2.633C15.5,1.46,14.54,0.5,13.367,0.5z"/><path fill-rule="evenodd" clip-rule="evenodd" class="msportalfx-svg-c01" d="M13.5,7.25V6.9c-0.751,0-1.366-0.63-1.366-1.4H2.866 c0,0.77-0.615,1.4-1.366,1.4v0.21c0.273,0,0.478,0.21,0.478,0.49S1.773,8.09,1.5,8.09v0.35c0.273,0,0.478,0.21,0.478,0.49 c0,0.28-0.205,0.56-0.478,0.56v0.35c0.273,0,0.478,0.21,0.478,0.49c0,0.28-0.205,0.56-0.478,0.56v0.21c0.751,0,1.366,0.63,1.366,1.4 h9.268c0-0.77,0.615-1.4,1.366-1.4v-0.21c-0.273,0-0.478-0.21-0.478-0.49s0.205-0.49,0.478-0.49V9.56 c-0.273,0-0.478-0.21-0.478-0.49c0-0.28,0.205-0.49,0.478-0.49V8.23c-0.273,0-0.478-0.21-0.478-0.49 C13.022,7.46,13.227,7.25,13.5,7.25z M4.5,11.1h-1V6.9h1V11.1z M9.161,11.307l-1.56-0.82l-1.56,0.82L6.338,9.57l-1.262-1.23 L6.82,8.086l0.78-1.581l0.78,1.581l1.744,0.253L8.863,9.57L9.161,11.307z M11.5,11.1h-1V6.9h1V11.1z"/><path opacity="0.2" class="msportalfx-svg-c01" d="M14.789,1.057C14.41,0.715,13.914,0.5,13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5 v8.533c0,0.719,0.223,1.308,0.579,1.734L14.789,1.057z"/><\/svg>'};
n.billing_sub_none_AA={type:1,data:'<svg viewBox="0 0 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title> <circle class="msportalfx-svg-c15" cx="8" cy="8" r="8"/> <path opacity="0.2" class="msportalfx-svg-c01" d="M2.343,13.657c-3.124-3.124-3.124-8.19,0-11.314s8.19-3.124,11.314,0L2.343,13.657z"/> <rect x="3" y="6.5" class="msportalfx-svg-c01" width="10" height="3"/> <\/svg>'};
n.billing_sub_none_SA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><path class="msportalfx-svg-c15" d="M13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5v8.533c0,1.507,0.96,2.467,2.133,2.467h11.733 c1.173,0,2.133-0.96,2.133-2.133V5.5H15.5V2.633C15.5,1.46,14.54,0.5,13.367,0.5z"/><rect x="2.5" y="7" class="msportalfx-svg-c01" width="10" height="3"/><path opacity="0.2" class="msportalfx-svg-c01" d="M14.789,1.057C14.41,0.715,13.914,0.5,13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5 v8.533c0,0.719,0.223,1.308,0.579,1.734L14.789,1.057z"/><\/svg>'};
n.billing_sub_other_AA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><g><circle class="msportalfx-svg-c15" cx="7.5" cy="8.5" r="8"/><path opacity="0.2" class="msportalfx-svg-c01" d="M1.843,14.157c-3.124-3.124-3.124-8.19,0-11.314s8.19-3.124,11.314,0L1.843,14.157z"/><\/g><circle class="msportalfx-svg-c01" cx="7.5" cy="8.5" r="1.385"/><circle class="msportalfx-svg-c01" cx="2.885" cy="8.5" r="1.385"/><circle class="msportalfx-svg-c01" cx="12.115" cy="8.5" r="1.385"/><\/svg>'};
n.billing_sub_other_SA={type:1,data:'<svg viewBox="-0.5 0.5 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><path class="msportalfx-svg-c15" d="M13.367,0.5H1.633C0.46,0.5-0.5,1.46-0.5,2.633V5.5v8.533c0,1.507,0.96,2.467,2.133,2.467h11.733 c1.173,0,2.133-0.96,2.133-2.133V5.5H15.5V2.633C15.5,1.46,14.54,0.5,13.367,0.5z"/><path opacity="0.2" class="msportalfx-svg-c01" enable-background="new " d="M14.789,1.057C14.41,0.715,13.914,0.5,13.367,0.5H1.633 C0.46,0.5-0.5,1.46-0.5,2.633V5.5v8.533c0,0.719,0.223,1.308,0.579,1.734L14.789,1.057z"/><circle class="msportalfx-svg-c01" cx="7.5" cy="8.5" r="1.385"/><circle class="msportalfx-svg-c01" cx="2.885" cy="8.5" r="1.385"/><circle class="msportalfx-svg-c01" cx="12.115" cy="8.5" r="1.385"/><\/svg>'};
n.billing_sub_support_AA={type:1,data:'<svg viewBox="0 0 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><circle class="msportalfx-svg-c15" cx="8" cy="8" r="8"/><path opacity="0.2" class="msportalfx-svg-c01" enable-background="new" d="M2.343,13.657c-3.124-3.124-3.124-8.19,0-11.314 s8.19-3.124,11.314,0L2.343,13.657z"/><path class="msportalfx-svg-c01" d="M11.253,4.472H4.576c-0.66-0.004-1.131,0.394-1.131,1.052v4.533c0,0.668,0.48,1.259,1.14,1.267l2.412,0.005 l1.98,2.136l0.015-2.13h2.242c0.66,0.005,1.201-0.529,1.201-1.188l0.01-4.551C12.45,4.938,11.914,4.472,11.253,4.472"/><\/svg>'};
n.billing_sub_support_SA={type:1,data:'<svg viewBox="0 0 16 16" class="msportalfx-svg-placeholder" role="img"><title><\/title><path class="msportalfx-svg-c15" d="M13.867,0H2.133C0.96,0,0,0.96,0,2.133V5v8.533C0,15.04,0.96,16,2.133,16h11.733 c1.173,0,2.133-0.96,2.133-2.133V5H16V2.133C16,0.96,15.04,0,13.867,0z"/><path opacity="0.2" class="msportalfx-svg-c01" enable-background="new" d="M15.289,0.557C14.91,0.215,14.414,0,13.867,0H2.133 C0.96,0,0,0.96,0,2.133V5v8.533c0,0.719,0.223,1.308,0.579,1.734L15.289,0.557z"/><path class="msportalfx-svg-c01" d="M11.307,4.472H4.631C3.971,4.468,3.5,4.866,3.5,5.524v4.533c0,0.668,0.48,1.259,1.14,1.267l2.412,0.005 l1.98,2.136l0.015-2.13h2.242c0.66,0.005,1.201-0.529,1.201-1.188l0.01-4.552C12.504,4.938,11.968,4.472,11.307,4.472"/><\/svg>'}}
)(t=n.BillingExtension||(n.BillingExtension={}))})(t=n.Images||(n.Images={}))})(t=n.Content||(n.Content=
{}))}(n||(n={})),n});define("BillingExtension/Billing/Billing.Diagnostics",["require","exports"],function(
){var n;return function(n){"use strict";var t="BillingExtension-Billing",r=MsPortalFx.Base.Diagnostics,
f=r.LogEntryLevel,i=r.Log.writeEntry,u=function(){function n(){}return n.verbose=function(n){for(var
f,u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];f=[0,t,n].concat(u);i.apply(null,f)},n.warning=
function(n){for(var f,u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];f=[1,t,n].concat(u);i.apply(
null,f)},n.error=function(n){for(var f,u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];f=[2,t,n].
concat(u);i.apply(null,f)},n}();n.Log=u}(n||(n={})),n});define("BillingExtension/Billing/ViewModels/ResourceCostData",
["require","exports","../BillingHelper","../HubsData"],function(n,t,i,r){var u;return function(n){"use strict";
function e(n){var t=MsPortalFx.Helpers.Deferred(),r;return n&&i.isValidUri(n)?(r=i.getUrlPath(n),MsPortalFx.
Extension.hasPermission(r,["/read"]).then(function(n){t.resolve(n)})):t.resolve(!1),t.promise()}var l=
MsPortalFx.ViewModels.Services.ResourceTypes,u=MsPortalFx.Base.Resources.getAppRelativeUri("/api/Billing"),
f="application/json;charset=utf-8",t=36e5,o,s,h,c;n.hasResourceReadAccess=e;o=function(){function n(
){}return n}();n.UsageResource=o;s=function(){function n(){}return n}();n.CurrentSpendResource=s;h=function(
){function n(){}return n}();n.CurrentSpendBreakdown=h;c=function(){function n(){}return n.GetCurrentSpendByResource=
function(i,r,e){return $.Deferred(function(o){var s,h=new MsPortalFx.Base.UriBuilder(u+"/RetrieveCurrentSpendForResourceAsync"),
c=n._getDataSetNameForResource(i,e.resourceSelfLink);h.query.setParameters({subscriptionId:i,currentBillingPeriodStartDate:
r});s=h.toString();MsPortalFx.Data.Loader.getData({uri:s,dataSetName:c,loaderOptions:{fetchData:function(
n,t){return MsPortalFx.Base.Net.ajax({uri:t,type:"POST",data:JSON.stringify(e),contentType:f})}}}).then(
function(n,t){o.resolve(ko.toJS(t.data))},function(n){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"billing",
"There was an error getting current spend data for resourceSelfLink {0}. Error: {1}".format(e.resourceSelfLink,
n));o.resolve({name:"",type:"",currentSpend:"",resourceUsageUri:"",currentSpendBreakdowns:[]})});MsPortalFx.
Data.Loader.setPollingIntervals(c,{pollingInterval:t,slowPollingInterval:t,fastPollingInterval:t})}).
promise()},n.GetCurrentSpendForResourcesInResourceGroup=function(i,r,e){var o=n._getDataSetNameForResourceGroup(
i,e);return $.Deferred(function(s){n.GetResourceSelfLinksForResourceGroup(i,e).then(function(n){var h,
c=new MsPortalFx.Base.UriBuilder(u+"/RetrieveCurrentSpendForResourcesAsync"),l=JSON.stringify(n);c.query.
setParameters({subscriptionId:i,currentBillingPeriodStartDate:r});h=c.toString();MsPortalFx.Data.Loader.
getData({uri:h,dataSetName:o,loaderOptions:{fetchData:function(n,t){return MsPortalFx.Base.Net.ajax(
{uri:t,type:"POST",data:l,contentType:f})}}}).then(function(n,t){s.resolve(ko.toJS(t.data))},function(
n){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"billing","There was an error getting current spend data for resource {0}. Error: {1}".
format(e,n));s.resolve([])});MsPortalFx.Data.Loader.setPollingIntervals(o,{pollingInterval:t,slowPollingInterval:
t,fastPollingInterval:t})})}).promise()},n.GetResourceSelfLinksForResourceGroup=function(n,t){return $.
Deferred(function(n){r.ResourceGroupsData.getResourcesInResourceGroup(t).then(function(t){var i=[],r=
[];t.forEach(function(n){var t=e(n.selfLinkUri);t.then(function(t){t&&i.push({name:n.name,resourceSelfLink:
n.selfLinkUri})});r.push(t)});$.when.apply($,r).then(function(){n.resolve(i)})},function(){MsPortalFx.
Base.Diagnostics.Log.writeEntry(2,"billing","Failed to get resources belonging to resourceGroup {0}.".
format(t));n.reject(null)})}).promise()},n._getDataSetNameForResource=function(n,t){return"{0}-{1}".
format(n,t)},n._getDataSetNameForResourceGroup=function(n,t){return"{0}-{1}".format(n,l.parseResourceGroupDescriptor(
t).resourceGroup)},n}();n.ResourceCostData=c}(u||(u={})),u});define("BillingExtension/Billing/HubsData",
["require","exports","./Billing.Diagnostics"],function(n,t,i){var r;return function(n){"use strict";
var t=MsPortalFx.Base.Constants.ExtensionNames.Hubs,f=function(){function n(){}return n.getSubscriptionsData=
function(){return n._subscriptionsData||(n._subscriptionsData=new r),n._subscriptionsData},n.getResourceGroupsData=
function(){return n._resourceGroupsData||(n._resourceGroupsData=new u),n._resourceGroupsData},n}(),r,
u;n.HubsDataFactory=f;r=function(){function n(){var i=this,n;this._disposables=[];n=$.Deferred();this.
loadPromise=n.promise();MsPortalFx.Extension.getService(t,0,"Subscriptions").then(function(t){i._registerForDispose(
t);t.getObservable().then(function(t){i.subscriptions=t;n.resolve()},function(){n.fail()})},function(
){})}return n.prototype.dispose=function(){this._disposables&&(this._disposables.forEach(function(n)
{n.dispose()}),this._disposables=[])},n.prototype._registerForDispose=function(n){n&&this._disposables.
push(n)},n}();n.SubscriptionsData=r;u=function(){function n(){var i=this,n;this._disposables=[];n=$.
Deferred();this.loadPromise=n.promise();MsPortalFx.Extension.getService(t,0,"ResourceGroups").then(function(
t){i._registerForDispose(t);t.getObservable().then(function(t){i.resourceGroups=t;n.resolve()},function(
){n.fail()})},function(){})}return n.getResourcesInResourceGroup=function(n){var r,u;try{r=MsPortalFx.
Services.Rpc.invokeCallback(t,"getResourcesInResourceGroup",n)}catch(f){i.Log.error("Failed to get resources in resource group.");
u=Q.defer();r=u.promise;u.resolve([])}return r},n.prototype.dispose=function(){this._disposables&&(this.
_disposables.forEach(function(n){n.dispose()}),this._disposables=[])},n.prototype.getDefaultResourceGroup=
function(){var n=this.resourceGroups()&&this.resourceGroups().resourceGroups&&this.resourceGroups().
resourceGroups.first();return n||MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"ResourceGroupsData","Failed getDefaultResourceGroup()"),
n},n.prototype.getResourceGroup=function(n){var t=this.resourceGroups()&&this.resourceGroups().resourceGroups&&
this.resourceGroups().resourceGroups.first(function(t){return t.name===n});return t||MsPortalFx.Base.
Diagnostics.Log.writeEntry(2,"ResourceGroupsData",'Failed  getResourceGroup("'+n+'")'),t},n.prototype.
_registerForDispose=function(n){n&&this._disposables.push(n)},n}();n.ResourceGroupsData=u}(r||(r={})
),r});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("BillingExtension/Billing/ViewModels/BaseSubscriptionDetailBladeViewModel",
["require","exports","../Models/BillingData","../../Generated/SvgDefinitions","../BillingHelper","BillingExtension/Billing/BillingClientStrings"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";var t=f,i=4e3,e=function(n){function f(f,
e,o){var s=this;n.call(this);this.selectedSubscriptionId=ko.observable("");this.subscriptionUri=ko.observable(
"");var h=o.getBillingDataContext(),c=$.Deferred(),l=$.Deferred();this._container=f;this.title(t.subscriptionDetailBladeDefaultTitle);
this.subtitle(t.subscriptionName);this.icon(r.Content.Images.BillingExtension.billing_tile);this.contentState(
0);this.contentStateDisplayText("");this.selectedSubscriptionId.subscribe(this._container,function(n)
{n&&h.getSubscriptionLoadPromiseFromId(n).then(function(){var r=h.getSubscriptionDetailsFromId(n),f;
r&&(f=r.subscriptionTypeInfo&&r.subscriptionTypeInfo()?r.subscriptionTypeInfo().type():0,s.title(r.subscriptionName(
)),s.icon(u.BillingHelper.getSubcriptionTypeIcon(f,r.isAccountAdmin(),f===2&&r.monetaryCommitmentInfo&&
r.monetaryCommitmentInfo()?r.monetaryCommitmentInfo():null)),s.contentState(5),s.contentStateDisplayText(
t.chargesEstimatedOnly),setTimeout(function(){s._displayContentState(r)},i));l.resolve()})});c.resolve(
)}return __extends(f,n),f.prototype.onInputsSet=function(n){return this.selectedSubscriptionId(n.selectedSubscriptionId),
this.subscriptionUri("/subscriptions/"+n.selectedSubscriptionId),null},f.prototype._displayContentState=
function(n){var i=n.displayStatus();switch(i){case 1:this.contentState(2);this.contentStateDisplayText(
t.pendingStatus);break;case 2:this.contentState(3);this.contentStateDisplayText(t.disabledStatus);break
case 3:this.contentState(3);this.contentStateDisplayText(t.cancelledStatus);break;case 4:this.contentState(
3);this.contentStateDisplayText(t.unknownStatus)}},f}(MsPortalFx.ViewModels.Blade);n.BaseSubscriptionDetailBladeViewModel=
e}(e||(e={})),e});define("BillingExtension/Billing/Models/RunningCostsGridData",["require","exports"],
function(){var n;return function(n){"use strict";var t=function(){function n(n,t,i,r){this.subscriptionId=
n;this.subscriptionName=t;this.amountDue=i;this.billingPeriod=r}return n}();n.RunningCostsGridData=t}
(n||(n={})),n});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("BillingExtension/Billing/ViewModels/BaseBurnRateChartViewModel",
["require","exports","../Models/BillingData","BillingExtension/Billing/BillingClientStrings"],function(
n,t,i,r){var u;return function(n){"use strict";var t=MsPortalFx.ViewModels.Controls.Visualization.Chart,
i=r,u=function(n){function r(t,r,u){n.call(this);this._minYValue=undefined;this._maxYValue=undefined;
this._todayChartColor="msportalfx-bgcolor-k2";this.burnRateChartColor="msportalfx-bgcolor-g0";this.burnRateLimitChartColor=
"msportalfx-bgcolor-b0";this.usageChartColor="msportalfx-bgcolor-j1";this.thirdPartyUsageChartColor=
"msportalfx-bgcolor-b0s1";this.todayChartName="Today";this.horizontalThresholdChartName="HorizontalThreshold";
this.verticalThresholdChartName="VerticalThreshold";this.projectedSuspensionDateChartName="ProjectedSuspensionDate";
this.billingDataContext=u.getBillingDataContext();this.container=t;this.noDataMessage="";this.container.
partTitle(i.burnRatePartTitle);this.autogenerateSeriesViews(!1)}return __extends(r,n),r.prototype.resetChartViewModel=
function(){this.series.removeAll();this.views.removeAll();this.metrics.items.removeAll()},r.prototype.
setupAxisProperties=function(){this.xAxis.scale(2);this.xAxis.ticks(7);this.xAxis.outputFormat("M/d");
this.yAxis.scale(1);this.yAxis.ticks(8)},r.prototype.setupBillingPeriod=function(n){var i=864e5,t=new
Date(n.currentBillingPeriodStartDate()),r=new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate());
this.xAxis.min(new Date(r.getTime()-i));this.xAxis.max(new Date(r.getTime()+n.daysInCurrentBillingPeriod(
)*i))},r.prototype.createBurnRateChartView=function(){return new t.AreaChartView},r.createChartName=
function(n){return"{0}-{1}".format(n.subscriptionName(),n.id())},r.prototype.populateTodayChartView=
function(){var n=new t.LineChartView;return n.seriesView.push(this._createTodayChartSeriesView(n)),n}
,r.createBurnChartSeries=function(n,i){var r=new t.Series,s=n.currentStatement,f=new Date(n.currentBillingPeriodStartDate(
)),h=new Date(n.retrievalDate().toString()),e=s().usageHistory(),u=0,o=0;return r.name(this.createChartName(
n)),f=new Date(f.getTime()-864e5),n.subscriptionTypeInfo().type()!==2&&(o=this.estimateFirstDayUsage(
n),r.values.push(new t.ChartItem(f,o))),e.forEach(function(n){r.values.push(new t.ChartItem(new Date(
n.date().toString()),n.amount()+i))}),n.subscriptionTypeInfo().type()===1&&(u=e[e.length-1].amount()+
i,u=Math.max(u,this.estimateLastDayUsage(n)),r.values.push(new t.ChartItem(h,u))),r},r.estimateLastDayUsage=
function(n){var r=n.currentStatement(),u=r.totalAmount(),t,i=0;return n.monetaryCommitmentInfo&&n.monetaryCommitmentInfo(
)&&n.subscriptionTypeInfo&&n.subscriptionTypeInfo()&&n.subscriptionTypeInfo().type&&n.subscriptionTypeInfo(
).type()===2?(t=n.monetaryCommitmentInfo(),t.remainingMonetaryCommitmentAmount&&(i=r.totalAmount(),t.
monetaryCommitmentType()===0&&(i=i-t.monetaryCommitmentAmount()),u=i<=0?-1*t.remainingMonetaryCommitmentAmount(
):i)):n.monetaryCreditInfo&&n.monetaryCreditInfo()&&n.subscriptionTypeInfo&&n.subscriptionTypeInfo()&&
n.subscriptionTypeInfo().type&&n.subscriptionTypeInfo().type()===1&&r.totalAmount()<=0&&(u=-1*n.monetaryCreditInfo(
).remainingCredit()),u},r.estimateFirstDayUsage=function(n){var t=0;return n.monetaryCreditInfo&&n.monetaryCreditInfo(
)&&n.subscriptionTypeInfo&&n.subscriptionTypeInfo()&&n.subscriptionTypeInfo().type&&n.subscriptionTypeInfo(
).type()===1&&(t=-1*n.monetaryCreditInfo().totalCredit()),t},r.prototype.createTodayChartSeries=function(
n){var i=new t.LineSeries;return i.name(this.todayChartName),i.type(2),i.value(new Date(n.toString())),
i},r.prototype.verifySubHasUsage=function(n){var t=ko.utils.unwrapObservable(n),i=t?ko.utils.unwrapObservable(
t.usageHistory):null;return i&&i.length>1},r.prototype._createTodayChartSeriesView=function(n){var t=
n.newSeriesView();return t.seriesName(this.todayChartName),t.cssClass(this._todayChartColor),t.hideFromLegend(
!0),t},r.getThirdPartyUsageHistory=function(n,t){if(t.thirdPartyCurrentStatement&&t.thirdPartyCurrentStatement(
)&&t.thirdPartyCurrentStatement().usageHistory&&t.thirdPartyCurrentStatement().usageHistory()){var i=
t.thirdPartyCurrentStatement().usageHistory();return n.map(function(n){var t=i.first(function(t){return t.
date()===n.date()}),r=t?t.amount():0;return{date:n.date(),amount:r}})}return null},r.createThirdPartyChartSeries=
function(n,i){var u=new t.Series;return u.name(r.thirdPartyName+this.createChartName(n)),i.forEach(function(
n){u.values.push(new t.ChartItem(new Date(n.date),n.amount))}),u},r.prototype.populateThirdPartyUsageView=
function(n){var f=this.createBurnRateChartView(n),i=f.newSeriesView(),u;return i.seriesName(r.thirdPartyName+
r.createChartName(n)),i.cssClass(this.thirdPartyUsageChartColor),u=new t.RenderingCondition,u.seriesName(
this.horizontalThresholdChartName),u.conditionOperator(0),i.renderingConditions.push(u),f.seriesView.
push(i),f},r.prototype._updateMinAndMaxForSeries=function(n){if(n.length>0)for(var t in n)this._updateMinAndMax(
t.yValue)},r.prototype._updateMinAndMax=function(n){this._minYValue=this._minYValue!==undefined?Math.
min(this._minYValue,n):n;this._maxYValue=this._maxYValue!==undefined?Math.max(this._maxYValue,n):n},
r.thirdPartyName="ThirdParty-",r}(MsPortalFx.ViewModels.ChartPart);n.BaseBurnRateChartViewModel=u}(u||
(u={})),u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.
hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("BillingExtension/Billing/ViewModels/UpgradeSubscriptionBladeViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
){n.call(this)}return __extends(t,n),t}(MsPortalFx.ViewModels.Blade);n.UpgradeSubscriptionBladeViewModel=
t}(n||(n={})),n});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("BillingExtension/Billing/ViewModels/BillingNoSubscriptionsBladeViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
){n.call(this)}return __extends(t,n),t}(MsPortalFx.ViewModels.Blade);n.BillingNoSubscriptionsBladeViewModel=
t}(n||(n={})),n});define("BillingExtension/Billing/ViewModels/BaseBillingStartBoardTileViewModel",["require",
"exports","../Models/BillingData","../BillingHelper","./BaseBurnRateChartViewModel","BillingExtension/Billing/BillingClientStrings"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";var s=MsPortalFx.ViewModels.Controls.Visualization.
Chart,v=window,t=f,o=t.currentChargesStartBoardMetricHeader,c=t.commitmentLeftStartBoardMetricHeader,
h=t.creditLeftStartBoardMetricHeader,e=t.noDataValue,l="BillingNoSubscriptionsBlade",i="azc-chart-color-00bcf2",
a=function(){function n(n,i,r){this.title=ko.observable(t.billing);this.loadingStateTitle=ko.observable(
t.loadingSubscriptionDetails);this.showLoadingState=ko.observable(!0);this.showGauge=ko.observable(!1);
this.showLineChart=ko.observable(!1);this.showSubscriptionIconArea=ko.observable(!1);this.metrics=ko.
observable(new MsPortalFx.ViewModels.Controls.Visualization.Metrics.ViewModel);this.lineChart=ko.observable(
new s.ViewModel);this.gaugeViewModel=ko.observable(new MsPortalFx.ViewModels.Controls.Visualization.
SingleValueGauge.ViewModel);this.subscriptionIcon=ko.observable();this.subscriptionsCount=ko.observable(
0);this.daysLeftInBillingPeriod=ko.observable(e);this._billingDataContext=r.getBillingDataContext();
n.registerForDispose(n.selectable=MsPortalFx.ViewModels.Part.createSelectableViewModel(i));n.selectable.
selectedValue({detailBlade:l,detailBladeInputs:{}})}return n.prototype.getDataContext=function(){return this.
_billingDataContext},n.prototype.buildData=function(n,r){var u,f,a=n.currency(),s,y,w,v,p,l,b;this.daysLeftInBillingPeriod(
n.daysLeftInBillingPeriod?n.daysLeftInBillingPeriod().toString():e);switch(r){case 2:this._resetState(
);n.monetaryCommitmentInfo&&n.monetaryCommitmentInfo()?(y=n.monetaryCommitmentInfo(),w=y.monetaryCommitmentAmount(
),v=y.remainingMonetaryCommitmentAmount(),v>0?(u=c,f=v.toFixed(2),s=i,this._buildGauge(v,w)):(u=o,f=
n.currentStatement&&n.currentStatement()?n.currentStatement().totalAmount().toFixed(2):e,s=i,this._buildLineChart(
n))):(u=o,f=n.currentStatement&&n.currentStatement()?n.currentStatement().totalAmount().toFixed(2):e,
s=i,this._buildIconArea(n,r));this._populateAmountMetric(f,u,a,s);this._populateAdditionalMetric(n);
break;case 3:this._resetState();n.currentStatement&&n.currentStatement()?(u=o,f=n.currentStatement().
totalAmount().toFixed(2),s=i,this._populateAmountMetric(f,u,a,s),this._buildLineChart(n)):this._buildIconArea(
n,r);this._populateAdditionalMetric(n);break;case 1:this._resetState();n.monetaryCreditInfo&&n.monetaryCreditInfo(
)?(p=n.monetaryCreditInfo(),l=p.remainingCredit(),l>0?(b=p.totalCredit(),u=h,f=l.toFixed(2),s=i,this.
_populateAmountMetric(f,u,a,s),this._buildGauge(l,b)):(this._verifySubHasUsage(n)?(u=o,f=n.currentStatement(
).totalAmount().toFixed(2),s=i):(u=h,f=l.toFixed(2),s=i),this._populateAmountMetric(f,u,a,s),this._buildLineChart(
n))):this._buildIconArea(n,r);this._populateAdditionalMetric(n);break;case 5:l=0;u=t.free;f=l.toFixed(
2);s=i;this._resetState();this._populateAmountMetric(f,u,a,s);this._populateSubscriptionsCountMetric(
);this._buildIconArea(n,r);break;case 6:case 7:case 4:this._resetState();u=o;f=n.currentStatement&&n.
currentStatement()?n.currentStatement().totalAmount().toFixed(2):e;s=i;this._populateAmountMetric(f,
u,a,s);this._populateAdditionalMetric(n);this._buildIconArea(n,r);break;default:this._buildIconArea(
n,r)}},n.prototype._populateAmountMetric=function(n,t,i,r){var u=new MsPortalFx.ViewModels.Controls.
Visualization.Metrics.SingleMetric;u.value(n?n:e);u.unit(n&&n.toString()===e?"":i);u.caption(t);u.barCssClass(
r);u.showBarColor(!0);this.metrics().items.push(u)},n.prototype._populateDaysLeftMetric=function(){var
n=new MsPortalFx.ViewModels.Controls.Visualization.Metrics.SingleMetric;n.value(this.daysLeftInBillingPeriod(
));n.caption(t.daysLeft);n.showBarColor(!1);this.metrics().items.push(n)},n.prototype._populateSubscriptionsCountMetric=
function(){var n=new MsPortalFx.ViewModels.Controls.Visualization.Metrics.SingleMetric;n.value(this.
subscriptionsCount().toString());n.caption(t.subscriptions);n.showBarColor(!1);this.metrics().items.
push(n)},n.prototype._populateAdditionalMetric=function(n){n.thirdPartyCurrentStatement&&n.thirdPartyCurrentStatement(
)&&n.thirdPartyCurrentStatement().totalAmount()>0?this._populateThirdPartyMetric(n):this.subscriptionsCount(
)>1?this._populateSubscriptionsCountMetric():this._populateDaysLeftMetric()},n.prototype._populateThirdPartyMetric=
function(n){var i=new MsPortalFx.ViewModels.Controls.Visualization.Metrics.SingleMetric,r=n.thirdPartyCurrentStatement&&
n.thirdPartyCurrentStatement()?n.thirdPartyCurrentStatement().totalAmount().toFixed(2):e,u=n.currency(
);i.value(r);i.caption(t.thirdPartyCharges);i.showBarColor(!1);i.unit(r&&r.toString()===e?"":u);this.
metrics().items.push(i)},n.prototype._clearMetric=function(){this.metrics().orientation(1);this.metrics(
).size(1);this.metrics().items([])},n.prototype._resetState=function(){this._clearMetric();this.showGauge(
!1);this.showLineChart(!1);this.showLoadingState(!1);this.showSubscriptionIconArea(!1)},n.prototype.
_buildIconArea=function(n,t){this.subscriptionIcon(r.BillingHelper.getSubcriptionTypeIcon(t,n.isAccountAdmin(
),t===2&&n.monetaryCommitmentInfo&&n.monetaryCommitmentInfo()?n.monetaryCommitmentInfo():null));this.
showSubscriptionIconArea(!0)},n.prototype._buildGauge=function(n,t){this.gaugeViewModel().valueDisplayFormat(
" ");this.gaugeViewModel().current(n);this.gaugeViewModel().maximum(t);this.showGauge(!0)},n.prototype.
_buildLineChart=function(n){this.lineChart().xAxis.showAxis(!1);this.lineChart().xAxis.scale(2);this.
lineChart().yAxis.showAxis(!1);this.lineChart().yAxis.scale(1);this.lineChart().series([]);this.lineChart(
).views([]);this._setupLineChart(n)},n.prototype._setupLineChart=function(n){var t=0;this._verifySubHasUsage(
n)?(n.monetaryCreditInfo&&n.monetaryCreditInfo()&&(t=-1*n.monetaryCreditInfo().totalCredit()),this.lineChart(
).series.push(u.BaseBurnRateChartViewModel.createBurnChartSeries(n,t)),this.lineChart().views.push(this.
_populateRunningCostView(n)),this.showLineChart(!0)):(this.showLineChart(!1),this._buildIconArea(n,n.
subscriptionTypeInfo().type()))},n.prototype._populateRunningCostView=function(n){var t=new s.LineChartView,
r=new s.LineChartSeriesView;return t.chartType(0),r.seriesName(u.BaseBurnRateChartViewModel.createChartName(
n)),r.cssClass(i),t.seriesView.push(r),t},n.prototype._verifySubHasUsage=function(n){var r=!1,i=n.currentStatement,
t;return i&&i()&&(t=i().usageHistory,t&&t()&&t().length>1&&(r=!0)),r},n.prototype.onInputsSet=function(
){return this.getDataContext().loadPromise},n}();n.BaseBillingStartBoardTileViewModel=a}(e||(e={})),
e});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("BillingExtension/Billing/ViewModels/EASubscriptionDetailBladeViewModel",
["require","exports"],function(){var n;return function(n){"use strict";var t=function(n){function t(
){n.call(this)}return __extends(t,n),t}(MsPortalFx.ViewModels.Blade);n.EASubscriptionDetailBladeViewModel=
t}(n||(n={})),n})