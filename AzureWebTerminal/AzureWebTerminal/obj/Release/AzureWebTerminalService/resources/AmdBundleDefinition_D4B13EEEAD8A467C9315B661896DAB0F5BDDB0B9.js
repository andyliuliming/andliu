var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Fields/MultiselectDropDownField",
["require","exports","../Controls/Base/Formatters","./Base/Field","Viva.Controls/Controls/Forms/MultiSelectDropDown",
"Viva.Controls/Controls/Base/ValidationPlacements/Css","Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon"],
function(n,t,i,r,u,f,e){var o;return function(n){"use strict";var s=window,t=jQuery,o=function(n){function r(
t,r,f){var e=this,o=new MsPortalFx.Internal.Base.TriggerableLifetimeManager;this._disposablesGroups=
[];this._updateItemDataTrigger=ko.observable(0);this._itemSetting=new u.ItemSetting({textKey:"text",
valueKey:"value",disabledKey:"disabled",groupIdKey:"group",selectedKey:"selected"});this._groupInfos=
r.groups.map(o,function(n,t){return{key:t.key,text:t.text,disable:t.disabled}});n.call(this,t,r,f);r.
formatSetting&&(this._itemSetting.formatter=i.getFormatter(this.lifetimeManager,r.formatSetting.format,
r.formatSetting.formatOptions||{},!1));this.lifetimeManager.registerForDispose(o);this.options.showSelectAll&&
this.options.showSelectAll.subscribe(this.lifetimeManager,function(){e._updateItemsData()});this._updateItemDataTrigger.
subscribe(this.lifetimeManager,function(){e._updateItemsData()});this._addDisposablesToCleanUp({dispose:
function(){e._resetGroupsSubscription()}});this._updateItemDataTrigger.extend({rateLimit:100})}return __extends(
r,n),r.prototype._initializeField=function(){n.prototype._initializeField.call(this);this.element.addClass(
"azc-multiselectDropDownField").addClass("fxcontrol-MultiselectDropDownField");this._multiselectDropDownViewModel=
new u.ViewModel;this.linkMultiselectDropDowniewModels();this._subscribeOptionsChanges();this._updateItemsData(
);this._multiselectDropDownFieldInit()},r.prototype.dispose=function(){this._resetGroupsSubscription(
);this._multiselectDropDownWidget&&(this._multiselectDropDownWidget.dispose(),this._multiselectDropDownWidget=
null,this._multiselectDropDownViewModel=null);this._cleanElement("azc-multiselectDropDownField","fxcontrol-MultiselectDropDownField");
n.prototype.dispose.call(this)},Object.defineProperty(r.prototype,"options",{get:function(){return this.
_options},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"validatableViewModel",{
get:function(){return this._multiselectDropDownViewModel},enumerable:!0,configurable:!0}),Object.defineProperty(
r.prototype,"validatableWidget",{get:function(){return this._multiselectDropDownWidget},enumerable:!0,
configurable:!0}),r.prototype._toggleUpdateItemDataTrigger=function(){this._updateItemDataTrigger(this.
_updateItemDataTrigger.peek()+1&65535)},r.prototype._resetGroupsSubscription=function(){this._disposablesGroups&&
this._disposablesGroups.forEach(function(n){n.dispose()});this._disposablesGroups=[]},r.prototype._subscribeOptionsChanges=
function(){var n=this,t,i=function(t,i){i===void 0&&(i=-1);i<0?(n._resetGroupsSubscription(),t.forEach(
function(t){n._disposablesGroups.push(t.options.subscribe(n.lifetimeManager,function(){n._toggleUpdateItemDataTrigger(
)}))})):t.forEach(function(t){n._disposablesGroups.splice(i++,0,t.options.subscribe(n.lifetimeManager,
function(){n._toggleUpdateItemDataTrigger()}))})},r=function(t){for(var r=-1,i=0,i=0;i<n._disposablesGroups.
length;i++)if(n._disposablesGroups[i].target===t.options){r=i;break}r>=0&&n._disposablesGroups.splice(
r,1).forEach(function(n){n.dispose()})};i(this.options.groups());this.options.groups.subscribe(this.
lifetimeManager,function(n){t=n},null,"beforeChange");this.options.groups.subscribe(this.lifetimeManager,
function(n){var u=ko.utils.compareArrays(t,n);u.forEach(function(n){var t=n.value;n.status==="added"?
i([t],n.index):n.status==="deleted"&&r(t)})})},r.prototype._updateItemsData=function(){var n,t=[],i=
this.options.value();this.options.groups().forEach(function(n){n.options().forEach(function(i){t.push(
{text:i.text,value:i.value,group:n.key,selected:i.selected,disabled:i.disabled})})});this._multiselectDropDownViewModel.
valueInitialized=!0;n=u.ViewModel.createDropdownItemsFromArray(t,this._itemSetting,this._groupInfos(
));this._multiselectDropDownViewModel.initializeItemsData(n)},r.prototype._multiselectDropDownFieldInit=
function(){var n;n=t("<div style='max-width: 100%'><\/div>");this.appendControl(n);this._multiselectDropDownWidget=
new u.Widget(n,this._multiselectDropDownViewModel);this._addWidget(this._multiselectDropDownWidget);
this.setupValidationBindings()},r.prototype.linkMultiselectDropDowniewModels=function(){var n=this.options;
this._multiselectDropDownViewModel.value=n.value;n.popupShown&&(this._multiselectDropDownViewModel.popupShown=
n.popupShown);n.maxSelectAllowed&&(this._multiselectDropDownViewModel.maxSelectAllowed=n.maxSelectAllowed);
n.multiItemsDisplayFormat&&(this._multiselectDropDownViewModel.multiItemsDisplayFormat=n.multiItemsDisplayFormat);
n.multiItemsMaxDisplayFormat&&(this._multiselectDropDownViewModel.multiItemsMaxDisplayFormat=n.multiItemsMaxDisplayFormat);
n.valueSeparator&&(this._multiselectDropDownViewModel.valueSeparator=n.valueSeparator);n.displaySeparator&&
(this._multiselectDropDownViewModel.displaySeparator=n.displaySeparator);n.multiselect&&(this._multiselectDropDownViewModel.
multiselect=n.multiselect);n.showSelectAll&&(this._multiselectDropDownViewModel.showSelectAll=n.showSelectAll);
this._multiselectDropDownViewModel.validationPlacements.push(new f.Css);this._multiselectDropDownViewModel.
validationPlacements.push(new e.DockedBalloon(e.DockedBalloon.defaultOptions));this.linkValidatableControlViewModels(
)},r}(r.FieldWidget);n.Widget=o}(o||(o={})),o})