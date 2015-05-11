var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Fields/CheckBoxField",
["require","exports","./Base/Field","Viva.Controls/Controls/Forms/CheckBox","Viva.Controls/Controls/Base/ValidationPlacements/DockedBalloon",
"Viva.Controls/Controls/Base/ValidationPlacements/Css"],function(n,t,i,r,u,f){var e;return function(
n){"use strict";var o=window,t=jQuery,e=function(n){function i(t,i,r){n.call(this,t,i,r)}return __extends(
i,n),i.prototype._initializeField=function(){n.prototype._initializeField.call(this);this.element.addClass(
"azc-checkBoxField").addClass("fxcontrol-CheckBoxField").toggleClass("azc-checkBoxField-inlineLabel",
this.options.inlineLabel);this.checkBoxInit()},i.prototype.dispose=function(){this._checkBoxWidget&&
(this._checkBoxWidget.dispose(),this._checkBoxWidget=null,this._checkBoxViewModel=null);this._cleanElement(
"azc-checkBoxField","fxcontrol-CheckBoxField","azc-checkBoxField-inlineLabel");n.prototype.dispose.call(
this)},Object.defineProperty(i.prototype,"options",{get:function(){return this._options},enumerable:
!0,configurable:!0}),Object.defineProperty(i.prototype,"validatableViewModel",{get:function(){return this.
_checkBoxViewModel},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"validatableWidget",
{get:function(){return this._checkBoxWidget},enumerable:!0,configurable:!0}),i.prototype.checkBoxInit=
function(){var i,n;this._checkBoxViewModel=new r.ViewModel;this._checkBoxViewModel.validationPlacements.
push(new f.Css);this._checkBoxViewModel.validationPlacements.push(new u.DockedBalloon(u.DockedBalloon.
defaultOptions));i=t("<div />");this.appendControl(i);this.options.inlineLabel&&(n=this._createLabelContainer(
"azc-checkBoxField-inlineLabelContainer"),n&&(this._appendLabelContent(n),this.appendControl(n)));this.
linkCheckBoxViewModels();this._checkBoxWidget=new r.Widget(i,this._checkBoxViewModel);this._addWidget(
this._checkBoxWidget);this.setupValidationBindings()},i.prototype.linkCheckBoxViewModels=function(){
var n=this;this._checkBoxViewModel.value(this.options.value()?1:0);this.options.value.subscribe(this.
lifetimeManager,function(t){var i=n.getCheckboxWidgetValue(t);n._checkBoxViewModel.value()!==i&&n._checkBoxViewModel.
value(i)});this._checkBoxViewModel.value.subscribe(this.lifetimeManager,function(t){n.options.value(
)&&t===0?n.options.value(!1):n.options.value()||t!==1||n.options.value(!0)});this.linkValidatableControlViewModels(
)},i.prototype.getCheckboxWidgetValue=function(n){return n?1:0},i.prototype._createLabel=function(){
if(this.options.inlineLabel){var t=this._createLabelContainer("azc-form-labelcontainer");t&&this.element.
append(t)}else n.prototype._createLabel.call(this)},i}(i.FieldWidget);n.Widget=e}(e||(e={})),e})