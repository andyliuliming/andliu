var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("BillingExtension/Billing/ViewModels/BillingStartBoardTileViewModel",
["require","exports","./BaseBillingStartBoardTileViewModel","BillingExtension/Billing/BillingClientStrings"],
function(n,t,i,r){var u;return function(n){"use strict";var o=window,t=r,u="BillingNoSubscriptionsBlade",
f="BillingSummaryBlade",e=function(n){function i(i,r,e){var s=this,h,o;n.call(this,i,r,e);h=this.getDataContext(
);o=h.billingSummary;i.partTitle(t.billing);i.registerForDispose(ko.computed(i,function(){var e=o.subscriptions(
)&&o.subscriptions().length>0,r,n,c,l;if(!h.dataReady()||e&&!o.subscriptions()[0].isLoaded()){s.showLoadingState(
!0);return}s.showLoadingState(!1);e?(i.noDataMessage(""),r=o.subscriptions(),n=r[0],i.assetName(n.subscriptionName(
)),c=n.subscriptionTypeInfo(),l=c.type(),i.selectable.selectedValue({detailBlade:f,detailBladeInputs:
{}}),s.subscriptionsCount(r.length),s.buildData(n,l)):(i.noDataMessage(t.youNeedSubscription),i.selectable.
selectedValue({detailBlade:u,detailBladeInputs:{}}))}))}return __extends(i,n),i}(i.BaseBillingStartBoardTileViewModel);
n.BillingStartBoardTileViewModel=e}(u||(u={})),u})