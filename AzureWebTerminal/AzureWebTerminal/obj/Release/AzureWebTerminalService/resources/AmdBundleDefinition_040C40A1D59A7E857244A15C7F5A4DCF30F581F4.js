define("HubsExtension/SubscriptionsFilter/ViewModels/ResourceFilterPartViewModel",["require","exports",
"../../HubsCommon","HubsExtension/SubscriptionsFilter/SubscriptionsFilterClientStrings"],function(n,
t,i,r){var u;return function(n){"use strict";var t=window,f=t&&t.fx&&t.fx.environment,u=function(){function n(
n,t,i){var u=this;this._rateLimitInMilliSeconds=800;this._dropDownDelimiter=";";this._filterPlaceholderText=
ko.observable(r.filterPlaceholderText);this._subscriptionFilterEnabled=ko.observable(!0);this.subscriptions=
ko.observable([]);this.filter=ko.observable(null);this.showFilter=ko.observable(!1);this._container=
n;this._dataContext=i;this._initializeFilter(t);this._initializeSubscriptions();this.showSubscriptions=
ko.computed(this._container,function(){var t=u._subscriptionFilterEnabled(),n=u._dataContext.getSubscriptions(
)();return t&&n&&n.length>1})}return n.prototype.onInputsSet=function(n){var t=n||{},u;return t.hasOwnProperty(
"textFilterEnabled")&&(t.textFilterEnabled==="true"||t.textFilterEnabled==="1")?this.showFilter(!0):
(this.showFilter(!1),this.filter(null)),t.textFilterPlaceholder?this._filterPlaceholderText(t.textFilterPlaceholder):
this._filterPlaceholderText(r.filterPlaceholderText),i.isSubscriptionFilteringEnabled()?t.selectedSubscriptionId?
(this._subscriptionFilterEnabled(!1),u=this._dataContext.getSubscriptions()().first(function(n){return n.
subscriptionID===t.selectedSubscriptionId}),this.subscriptions([{displayName:u.subscriptionName,subscriptionId:
u.subscriptionID,tenantId:u.tenantID,state:u.status,subscriptionPolicies:u.subscriptionPolicies}])):
(this._subscriptionFilterEnabled(!0),this.subscriptions(this._dataContext.getSelectedSubscriptions()(
))):(this._subscriptionFilterEnabled(!1),this.subscriptions(this._dataContext.getSelectedSubscriptions(
)())),null},n.prototype._initializeFilter=function(n){var t=this,i=n&&n.content&&n.content.filter,r=
{emptyValueText:this._filterPlaceholderText};this.filterVM=new MsPortalFx.ViewModels.Forms.TextBox.ViewModel(
this._container,r);this.filterVM.valueUpdateTrigger=1;this.filterVM.value(i&&n.content.filter);ko.computed(
this._container,function(){t.filter(t.filterVM.value()||null)}).extend({throttle:this._rateLimitInMilliSeconds})}
,n.prototype._initializeSubscriptions=function(){var n=this,t=ko.observableArray([]),r=this._dataContext.
getSubscriptions().map(this._container,function(n,t){return{text:ko.observable("{0} ({1})".format(t.
subscriptionName,t.subscriptionID)),value:t.subscriptionID}}),u;t(r());r.subscribe(this._container,function(
n){t(n)});u={showSelectAll:ko.observable(!0),defaultValue:ko.observable(this._dataContext.getSelectedSubscriptions(
)().map(function(n){return n.subscriptionId}).join(this._dropDownDelimiter)),groups:ko.observableArray(
[{options:t}])};this.subscriptionsVM=new MsPortalFx.ViewModels.Forms.MultiSelectDropDown.ViewModel(this.
_container,u);this.subscriptionsVM.valueSeparator=this._dropDownDelimiter;i.isSubscriptionFilteringEnabled(
)?(this._dataContext.getSelectedSubscriptions().subscribe(this._container,function(t){n.showSubscriptions(
)&&(n.subscriptionsVM.value(t.map(function(n){return n.subscriptionId}).join(n._dropDownDelimiter)),
MsPortalFx.Base.Utilities.arrayEquals(t,n.subscriptions())||n.subscriptions(t))}),this.subscriptionsVM.
popupShown.subscribe(this._container,function(t){if(!t){var i=n.subscriptionsVM.value(),r=i?i.split(
n._dropDownDelimiter):[];n._dataContext.setSelectedSubscriptions(r)}}),this.subscriptionsVM.value.subscribe(
this._container,function(t){n._setSubscriptionFilterDisplay(t)}),this._setSubscriptionFilterDisplay(
this.subscriptionsVM.value())):this._dataContext.getSelectedSubscriptions().subscribe(this._container,
function(t){MsPortalFx.Base.Utilities.arrayEquals(t,n.subscriptions())||n.subscriptions(t)})},n.prototype.
_setSubscriptionFilterDisplay=function(n){var t=n?n.split(this._dropDownDelimiter):[];t.length===0||
t.length===this._dataContext.getSubscriptions()().length?this.subscriptionsVM.multiItemsDisplayFormat(
r.allSubscriptionsSelectedText):t.length===1?this.subscriptionsVM.multiItemsDisplayFormat("{2}"):this.
subscriptionsVM.multiItemsDisplayFormat(r.multipleSubscriptionsSelectedText.format(t.length))},n}();
n.ResourceFilterPartViewModel=u}(u||(u={})),u})