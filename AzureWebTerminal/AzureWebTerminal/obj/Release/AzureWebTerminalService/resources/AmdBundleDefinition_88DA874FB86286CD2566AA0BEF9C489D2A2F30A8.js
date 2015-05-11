define("HubsExtension/SubscriptionsFilter/SubscriptionsFilterArea",["require","exports","../Common/HubsObservables",
"../Store/CreateLauncher"],function(n,t,i,r){var u;return function(n){"use strict";var t=function(){
function n(){var n=this;this._subscriptions=ko.observableArray([]);this._selectedSubscriptions=ko.observable(
[]);i.getSubscriptionsPromise().then(function(){n._subscriptionsComputed=ko.computed(function(){var t=
i.getSubscriptionsObservable()(),r=t&&t.subscriptions||[];return n._subscriptions(r),r})});i.getSelectedSubscriptionsPromise(
).then(function(){n._selectedSubscriptionsComputed=ko.computed(function(){var r=i.getSelectedSubscriptionsObservable(
)(),t=r||[];return n._selectedSubscriptions(t),t})})}return n.prototype.dispose=function(){this._subscriptionsComputed&&
(this._subscriptionsComputed.dispose(),this._subscriptionsComputed=null);this._selectedSubscriptionsComputed&&
(this._selectedSubscriptionsComputed.dispose(),this._selectedSubscriptionsComputed=null)},n.prototype.
getSubscriptions=function(){return this._subscriptions},n.prototype.getSelectedSubscriptions=function(
){return this._selectedSubscriptions},n.prototype.setSelectedSubscriptions=function(n){return i.setSelectedSubscriptions(
n)},n.prototype.validateSubscriptions=function(n,t){return r.validateSubscriptions(n&&n.galleryItem,
t)},n}();n.DataContext=t}(u||(u={})),u})