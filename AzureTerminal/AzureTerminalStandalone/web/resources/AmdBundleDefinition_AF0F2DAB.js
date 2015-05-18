define("BillingExtension/Billing/ViewModels/BillingSummaryViewModel",["require","exports","../BillingHelper",
"BillingExtension/Billing/BillingClientStrings"],function(n,t,i,r){var u;return function(n){"use strict";
var u=r,t=function(){function n(n,t,r){var u=this,f;this.dataLoaded=ko.observable(!1);this.totalAmountDue=
ko.observable("");this.currency=ko.observable("");this.billingDataAvailable=ko.observable(!1);this.dueDate=
ko.observable("");this.subscriptions=ko.observableArray([]);f=r.getBillingDataContext();f.loadPromise.
then(function(){u.dataLoaded(!0)});n.registerForDispose(ko.computed(n,function(){var n=f.billingSummary,
t;f.dataReady()&&(u.dueDate(n.dueDate()),u.totalAmountDue(n.totalAmountDue()),u.currency(n.currency(
)),u.billingDataAvailable(n.billingDataAvailable()),t=n.subscriptions().map(function(n){return i.BillingHelper.
getSubscriptionSummaryData(n)}),u.subscriptions(t))}))}return n}();n.BillingSummaryViewModel=t}(u||(u=
{})),u})