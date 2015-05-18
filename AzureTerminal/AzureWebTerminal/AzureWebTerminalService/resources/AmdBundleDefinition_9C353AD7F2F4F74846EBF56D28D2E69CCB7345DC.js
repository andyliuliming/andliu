var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/UI/Compositions/UI.Composition.BladeActionBar",
["require","exports","./UI.Composition.Base","./UI.Composition","./UI.Composition.CompositionBinder",
"../../Widgets/Widgets.BladeActionBar","./UI.Composition.PropertyBinding","../Commands/UI.Commands",
"../../Controls/ActionBars/Controls.ActionBarBase","MsPortalImpl/Controls/ActionBars/Controls.CreateActionBar",
"MsPortalImpl/Controls/ActionBars/Controls.DeleteActionBar","MsPortalImpl/Controls/ActionBars/Controls.FilterActionBar",
"MsPortalImpl/Controls/ActionBars/Controls.FormActionBar","MsPortalImpl/Controls/ActionBars/Controls.GenericActionBar",
"MsPortalImpl/Controls/ActionBars/Controls.PickerActionBar"],function(n,t,i,r,u,f,e,o,s){var h;return function(
t){"use strict";function l(n,t){var i=new h(n,t,null),r={};return n.finder.tryLocate(i.locator,r)&&(
i.actionBarDefinition=r.value,i.extension=n.finder.locate(i.locator.getExtensionLocator())),i}var a=
window,r=jQuery,c=MsPortalFx.Base.Diagnostics.createLog(n),h;t.bladeActionBarName="BladeActionBar";t.
EmptyViewModel={};h=function(n){function i(i,u,f,e,o){n.call(this,i,u,[],f,e);this.bindings=[];this.
_viewModelMustBeReleased=!1;this._registrationDeferred=new r.Deferred;this._viewModel=o||t.EmptyViewModel;
this._name=t.bladeActionBarName}return __extends(i,n),i.prototype.getViewModel=function(){return this.
_viewModel},i.prototype.getViewModelAsync=function(){var n=this;return this._registrationDeferred.then(
function(){return n.getViewModel()})},Object.defineProperty(i.prototype,"eligibleForBinding",{get:function(
){return!0},enumerable:!0,configurable:!0}),i.prototype.getCompositionType=function(){return 4},i.prototype.
dispose=function(t){this._releaseResources();n.prototype.dispose.call(this,t)},i.prototype.awaitComposed=
function(){return this._registrationDeferred.promise()},i.prototype.getInputPropertyBindings=function(
){return this._inputPropertyBindings},i.prototype.getDiagnosticsData=function(){return r.extend(n.prototype.
getDiagnosticsData.call(this),{bindings:u.CompositionBinder.mapBindingsToFriendlyObjects(this.bindings)})}
,i.prototype._setupBindingsAndContent=function(n){var i="{0}-[{1}]".format(this.toString(),this.actionBarDefinition.
viewModel),r={bindableTarget:{viewModelName:i,viewModel:this._viewModel},inputs:this.actionBarDefinition.
bindings,referenceComposition:this},t;if(this.isDisposed){this._releaseResources();return}if(!this._viewModel)
{this._createErrorActionBarContent("The view model obtained from the extension was null or undefined.");
return}t=u.CompositionBinder.bindViewModelInputs(r);this.bindings=t.definitionBindings;this._inputPropertyBindings=
t.propertyBindings;this._actionBarControl=s.createWidget(this.actionBarDefinition.actionBarKind,this.
widget.contentElement,this._viewModel.content);this._actionBarControl?(this._actionBarControl.setValidationTarget(
n.element),this._attachParameterProviderCompletionBehavior(),this.widget.initialize(this._viewModel),
this._registrationDeferred.resolve()):(c.error("Unable to create content control."),this._registrationDeferred.
reject())},i.prototype._attachParameterProviderCompletionBehavior=function(){var n=this;this._isOnParameterProviderBlade(
)&&this._actionBarControl.setIsStatusChangeAllowedCallback(function(t){return t===3?n.services.desktop.
closeChildBlades(n.parent).successful:!0})},i.prototype._isOnParameterProviderBlade=function(){var n=
this.parent;return(n.bladeDefinition.lenses||[]).some(function(n){return(n.partInstances||[]).some(function(
n){return n.parameterProvider})})},i.prototype._compose=function(n,t){var i=this,u;this._registrationDeferred.
done(function(){t.resolve()});u=new f.ViewModel(this.id,this.widgetState());this.widget=new f.Widget(
r("<div/>"),u);n.setActionBar(this.widget);this.widget.element.data(o.Commands.CompositionInstanceDataName,
this);this.extension&&this.actionBarDefinition?this._composeActionBarContent(this.widget.lifetimeManager,
n):this.services.finder.locateAsync(this.locator).done(function(t){i.actionBarDefinition=t;i.extension=
i.services.finder.locate(i.locator.getExtensionLocator());i._composeActionBarContent(i.widget.lifetimeManager,
n)}).fail(function(n){i._createErrorActionBarContent(n)})},i.prototype._composeActionBarContent=function(
n,t){var i=this;this._acquireActionBarViewModel(n).then(function(n){i._viewModel=n;i._viewModelMustBeReleased=
!!i.actionBarDefinition.viewModel;i._setupBindingsAndContent(t)},function(n){i._createErrorActionBarContent(
n)})},i.prototype._acquireActionBarViewModel=function(n){var r,u;if(this.actionBarDefinition.source)
{var t=this.actionBarDefinition.source.valuesFrom[0],f=this.parent,i=f.children.mapMany(function(n){
return n.children}).first(function(n){return n.locator.name===t.part});return Q(i.awaitComposed()).then(
function(){var u=i.getViewModel(0),n=e.PropertyBinding.getModelValue(u,t.property),r;if(n.exists)return MsPortalFx.
Extension.composeViewModel(function(){return n.value},"viewModelName");r="Unable to find the view model for the action bar at '{0}' in part '{1}'.";
throw new Error(r.format(t.property,i.locator.toFriendlyString()));})}if(this.actionBarDefinition.viewModel)
return this.extension.getViewModel(this.actionBarDefinition.viewModel);if(r=s.createViewModel(n,this.
actionBarDefinition.actionBarKind),!r)throw new Error("Unable to create content view model.");return u=
MsPortalFx.Extension.composeViewModel(function(){return r},"viewModelName"),Q(u)},i.prototype._releaseResources=
function(){this._inputPropertyBindings&&(this._inputPropertyBindings.unbind(),this._inputPropertyBindings=
null);this.extension&&this._viewModel&&(this._viewModel.content&&this._viewModel.content.dispose&&typeof
this._viewModel.content.dispose=="function"&&this._viewModel.content.dispose(),this._viewModel.container&&
this._viewModel.container.dispose&&typeof this._viewModel.container.dispose=="function"&&this._viewModel.
container.dispose(),this._viewModelMustBeReleased&&(this.extension.releaseViewModel(this._viewModel),
this._viewModel=t.EmptyViewModel))},i.prototype._createErrorActionBarContent=function(n){c.error("Error composing the blade's actionBar '{0}'. Details: {1}".
format(this.toString(),n))},i}(i.Instance);t.Instance=h;t.create=l}(h||(h={})),h});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("MsPortalImpl/Widgets/Widgets.BladeActionBar",["require","exports",
"./Widgets.UIElementBase"],function(n,t,i){var u=MsPortalFx.Base.EventTypes,r;return function(n){"use strict";
var h=window,c=jQuery,t="fxs-bladeActionBar",r="fxs-bladeActionBar-content",f="fxs-bladeActionBar-blockUiShield",
o="<div class='"+r+"'><\/div><div class='"+f+"' data-bind='visible: func._blockUi'><\/div>",s=function(
n){function t(t){n.call(this,t)}return __extends(t,n),t}(i.ViewModel),e;n.ViewModel=s;e=function(n){
function i(i,u){n.call(this,i,u);this._blockUi=ko.observable(!0);this.element.addClass(t).html(o);this.
_contentElement=this.element.findByClassName(r);this._shieldElement=this.element.findByClassName(f)[
0];ko.applyBindings({data:this.options,func:this},this._shieldElement)}return __extends(i,n),Object.
defineProperty(i.prototype,"contentElement",{get:function(){return this._contentElement},enumerable:
!0,configurable:!0}),i.prototype.initialize=function(n){var t=this;this._addDisposablesToCleanUp(ko.
computed(function(){t._blockUi(n.state()!==0)}));this.trigger(u.fxactionbarresize)},i.prototype.dispose=
function(){this._shieldElement&&(ko.cleanNode(this._shieldElement),this._shieldElement=null);this.element.
empty().removeClass(t);n.prototype.dispose.call(this)},Object.defineProperty(i.prototype,"options",{
get:function(){return this._options},enumerable:!0,configurable:!0}),i}(i.Widget);n.Widget=e}(r||(r=
{})),r});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Controls/ActionBars/Controls.ActionBarBase",
["require","exports","MsPortalImpl.Controls/Controls/Base/Loadable","MsPortalImpl.Controls/Fields/Base/FormValidation"],
function(n,t,i,r){var u;return function(n){"use strict";function s(n,i,r){if(t[n])throw new Error("ActionBarKind.{0} has already been registered.".
format(MsPortalFx.Extension.ActionBarKind[n]));t[n]={createWidget:function(n,t){return new i(n,t)},createViewModel:
function(n){return new r(n)}}}function h(n,i,r){return t[n].createWidget(i,r)}function c(n,i){return t[
i].createViewModel(n)}var f=window,u=MsPortalFx.Base.EventTypes,t=[],e="fxcontrol-actionBarBase",o;n.
registerFactory=s;n.createWidget=h;n.createViewModel=c;o=function(n){function t(t,i,r){n.call(this,t,
i,r);this._actionInProgress=ko.observable(!1);this._validChangedHandle=null;this._options=i;this.element.
addClass(e)}return __extends(t,n),t.prototype.dispose=function(){this._clearValidChangedHandle();this.
element.removeClass(e);n.prototype.dispose.call(this)},t.prototype.setValidationTarget=function(n){var
t=this;this._validationTarget=n;$(this).trigger(u.fxactionbarvalidationtargetupdated);this._validationTarget[
0].addEventListener(u.fxreadyforfocus,function(){$(t).trigger(u.fxactionbarvalidationtargetupdated)}
,!0)},t.prototype.setIsStatusChangeAllowedCallback=function(n){if(this._isStatusChangeAllowedCallback)
throw new Error("isStatusChangeAllowedCallback is already set");this._isStatusChangeAllowedCallback=
n},Object.defineProperty(t.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:
!0}),t.prototype._onValidChanged=function(n,t){var i=this;this._clearValidChangedHandle();this._validChangedHandle=
f.setTimeout(function(){t.disabled(i._actionInProgress()||!n||i._disableButtonWhenRequiredSelectorsAreEmpty(
t));var r,u=i.options.input();n?i._previousStatus!==3&&(r=1):r=2;i._setOutput(i._createOutput(u,r,0))}
,100)},t.prototype._validateForm=function(n){var t=this,i;return(this._clearValidChangedHandle(),!this.
_validationTarget)?$.Deferred().resolve(!0).promise():(i=r.ensureFormFieldValidation(this._validationTarget),
n.disabled(this._actionInProgress()),i.then(function(i){n.disabled(t._actionInProgress()||!i)},function(
){n.disabled(t._actionInProgress()||!1||t._disableButtonWhenRequiredSelectorsAreEmpty(n))}),i)},t.prototype.
_disableButtonWhenRequiredSelectorsAreEmpty=function(n){var t=!1,i,u,f;return this._validationTarget?
(i=r.gatherFormFieldViewModels(this._validationTarget),i&&i.length!==0?(u=i.filter(function(n){return!!n&&
n.controlType===11&&n.validations().some(function(n){return n.type===1})}),f=u.filter(function(n){return n.
empty()}),t=f.length!==0):t=!1):t=!1,t=t||this.options.valid()===!1,n.disabled(this._actionInProgress(
)||t),t},t.prototype._createOutput=function(n,t,i){return MsPortalFx.Base.Utilities.isNullOrUndefined(
i)&&(i=n.isLastStep?4:2),MsPortalFx.Base.Utilities.isNullOrUndefined(t)&&(t=3),{stepId:n&&n.stepId,status:
t,action:i,commitId:MsPortalFx.Util.newGuid()}},t.prototype._setOutput=function(n){var t=n.status;return this.
_isStatusChangeAllowedCallback&&!this._isStatusChangeAllowedCallback(t)?!1:(this._previousStatus=t,this.
options.output(n),!0)},t.prototype._clearValidChangedHandle=function(){this._validChangedHandle&&(f.
clearTimeout(this._validChangedHandle),this._validChangedHandle=null)},t}(i.Widget);n.Widget=o}(u||(u=
{})),u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Controls/ActionBars/Controls.CreateActionBar",
["require","exports","./Controls.ActionBarBase","MsPortalImpl/Resources/ImplScriptResources"],function(
n,t,i,r){var u=MsPortalFx.Base.EventTypes,f;return function(n){"use strict";var o=window,t="fxcontrol-createActionBar",
e="<div class='fxcontrol-createActionBar-checkbox-outer' data-bind='visible: func._allowToggleProvisioningLocation'><span class='fxcontrol-createActionBar-checkbox' data-bind='formElement: func._addStartboardPartCheckBox'><\/span><span class='fxcontrol-createActionBar-label' data-bind='text: \""+
MsPortalFx.Base.Utilities.attributeEncode(r.CreateActionBar.addStartboardPartLabel)+"\"'><\/span><\/div><button class='fxcontrol-actionBarBase-button fxcontrol-createActionBar-okButton' data-bind='pcButton: func._okButton'><span data-bind='text: func._okButtonDisplayText'><\/span><\/button><a class='fxcontrol-createActionBar-secondaryLink' data-bind='visible: func._showSecondaryLink, text: data.secondaryLinkDisplayText, click: func._secondaryLinkClickHandler' href=\"\"><\/a><div class='fxcontrol-createActionBar-eula' data-bind='visible: $.trim(data.eula()), sanitizedHtml: data.eula'><\/div>",
f=function(n){function i(t,i,r){this._extraLifeTimeManager=new MsPortalFx.Internal.Base.TriggerableLifetimeManager;
this._addStartboardPartCheckBox=new MsPortalFx.ViewModels.Forms.CheckBox.ViewModel(this._extraLifeTimeManager);
this._okButton=new MsPortalFx.ViewModels.Controls.Forms.Button.ViewModel(this._extraLifeTimeManager);
this._addStartboardPartCheckBox.value(!0);this._allowToggleProvisioningLocation=ko.observable(!0);this.
_showSecondaryLink=ko.observable(!1);n.call(this,t,i,r);this._initializeWidgets()}return __extends(i,
n),i.prototype.dispose=function(){this._okButtonDisplayText&&(this._okButtonDisplayText.dispose(),this.
_okButtonDisplayText=null);this._validationTargetUpdatedListener&&($(this).off(u.fxactionbarvalidationtargetupdated,
this._validationTargetUpdatedListener),this._validationTargetUpdatedListener=null);this._okButtonFieldRequiredReactor&&
(this._okButtonFieldRequiredReactor.dispose(),this._okButtonFieldRequiredReactor=null);this._extraLifeTimeManager&&
(this._extraLifeTimeManager.dispose(),this._extraLifeTimeManager=null);this._cleanElement(t);n.prototype.
dispose.call(this)},Object.defineProperty(i.prototype,"options",{get:function(){return this._options}
,enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=function(){var n=this;this.element.addClass(
t).html(e);this._setupButtonHandlers();this._okButtonDisplayText=ko.computed(function(){return n.options.
isProvisioningBlade()?r.ActionBarButtons.create:r.ActionBarButtons.ok});this._addDisposablesToCleanUp(
ko.computed(function(){n.options.provisionOnStartboardPart(n._addStartboardPartCheckBox.value())}));
this._addDisposablesToCleanUp(ko.computed(function(){var t=n.options.input();n._allowToggleProvisioningLocation(
t&&t.allowToggleProvisioningLocation);n.trigger(u.fxactionbarresize)}));this._addDisposablesToCleanUp(
ko.computed(function(){var t=n.options.secondaryLinkDisplayText();n._showSecondaryLink(!!t)}));this.
_addDisposablesToCleanUp(ko.computed(function(){n.options.eula();setTimeout(function(){n.trigger(u.fxactionbarresize)}
,0)}));this.options.actionInProgress.subscribe(this.lifetimeManager,function(t){n._actionInProgress(
t)});this.options.valid.subscribe(this.lifetimeManager,function(t){n._onValidChanged(t,n._okButton)}
);$(this).on(u.fxactionbarvalidationtargetupdated,this._validationTargetUpdatedListener=function(){n.
_okButtonFieldRequiredReactor&&(n._okButtonFieldRequiredReactor.dispose(),n._okButtonFieldRequiredReactor=
null);n._okButtonFieldRequiredReactor=ko.computed(function(){n._disableButtonWhenRequiredSelectorsAreEmpty(
n._okButton)})});this._bindDescendants()},i.prototype._setupButtonHandlers=function(){var n=this;this.
_okButton.click=function(){n._validateForm(n._okButton).then(function(t){var i=n._createOutput(n.options.
input(),t?null:2);n._setOutput(i)})};this._secondaryLinkClickHandler=function(){n._setOutput({status:
0,action:0,commitId:MsPortalFx.Util.newGuid(),secondaryLinkClicked:n.options.secondaryLinkDisplayText(
)})}},i}(i.Widget);n.Widget=f;i.registerFactory(1,f,MsPortalFx.ViewModels.ActionBars.CreateActionBar.
ViewModel)}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(
var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Controls/ActionBars/Controls.DeleteActionBar",
["require","exports","./Controls.ActionBarBase","MsPortalImpl/Resources/ImplScriptResources"],function(
n,t,i,r){var u;return function(n){"use strict";var e=window,t="fxcontrol-deleteActionBar",f="<button class='fxcontrol-actionBarBase-button fxcontrol-deleteActionBar-deleteButton' data-bind='pcButton: func._deleteButton'><span data-bind='text: \""+
MsPortalFx.Base.Utilities.attributeEncode(r.ActionBarButtons.deleteButton)+"\"'><\/span><\/button><button class='fxcontrol-actionBarBase-button fxcontrol-deleteActionBar-cancelButton' data-bind='pcButton: func._cancelButton'><span data-bind='text: \""+
MsPortalFx.Base.Utilities.attributeEncode(r.ActionBarButtons.cancelButton)+"\"'><\/span><\/button>",
u=function(n){function i(t,i,r){n.call(this,t,i,r);this._deleteButton=new MsPortalFx.ViewModels.Controls.
Forms.Button.ViewModel(this.lifetimeManager);this._cancelButton=new MsPortalFx.ViewModels.Controls.Forms.
Button.ViewModel(this.lifetimeManager);this._initializeWidgets()}return __extends(i,n),i.prototype.dispose=
function(){this._cleanElement(t);n.prototype.dispose.call(this)},Object.defineProperty(i.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=
function(){var n=this;this.element.addClass(t).html(f);this._setupButtonHandlers();this.options.valid.
subscribe(this.lifetimeManager,function(t){n._onValidChanged(t,n._deleteButton)});this._bindDescendants(
)},i.prototype._setupButtonHandlers=function(){var n=this;this._deleteButton.click=function(){n._validateForm(
n._deleteButton).then(function(t){t&&n.options.deleteButtonClick()})};this._cancelButton.click=function(
){n.options.cancelButtonClick()}},i}(i.Widget);n.Widget=u;i.registerFactory(5,u,MsPortalFx.ViewModels.
ActionBars.DeleteActionBar.ViewModel)}(u||(u={})),u});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("MsPortalImpl/Controls/ActionBars/Controls.FilterActionBar",["require","exports","./Controls.ActionBarBase",
"MsPortalImpl/Resources/ImplScriptResources"],function(n,t,i,r){var u;return function(n){"use strict";
var e=window,t="fxcontrol-filterActionBar",f="<button class='fxcontrol-actionBarBase-button fxcontrol-filterActionBar-updateButton' data-bind='pcButton: func._updateButton'><span data-bind='text: \""+
MsPortalFx.Base.Utilities.attributeEncode(r.ActionBarButtons.update)+"\"'><\/span><\/button><button class='fxcontrol-actionBarBase-button fxcontrol-filterActionBar-resetButton' data-bind='pcButton: func._resetButton'><span data-bind='text: \""+
MsPortalFx.Base.Utilities.attributeEncode(r.ActionBarButtons.reset)+"\"'><\/span><\/button>",u=function(
n){function i(t,i,r){n.call(this,t,i,r);this._updateButton=new MsPortalFx.ViewModels.Controls.Forms.
Button.ViewModel(this.lifetimeManager);this._resetButton=new MsPortalFx.ViewModels.Controls.Forms.Button.
ViewModel(this.lifetimeManager);this._initializeWidgets()}return __extends(i,n),i.prototype.dispose=
function(){this._cleanElement(t);n.prototype.dispose.call(this)},Object.defineProperty(i.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=
function(){var n=this;this.element.addClass(t).html(f);this._setupButtonHandlers();this.options.valid.
subscribe(this.lifetimeManager,function(t){n._onValidChanged(t,n._updateButton)});this._bindDescendants(
)},i.prototype._setupButtonHandlers=function(){var n=this;this._updateButton.click=function(){n._validateForm(
n._updateButton).then(function(t){var i=n._createOutput(n.options.input(),t?null:2);n._setOutput(i)&&
n.options.updateButtonClick()})};this._resetButton.click=function(){n.options.resetButtonClick()}},i}
(i.Widget);n.Widget=u;i.registerFactory(4,u,MsPortalFx.ViewModels.ActionBars.FilterActionBar.ViewModel)}
(u||(u={})),u});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Controls/ActionBars/Controls.FormActionBar",
["require","exports","./Controls.ActionBarBase","MsPortalImpl/Resources/ImplScriptResources"],function(
n,t,i,r){var u;return function(n){"use strict";var e=window,t="fxcontrol-formActionBar",f="<button class='fxcontrol-actionBarBase-button fxcontrol-formActionBar-saveButton' data-bind='pcButton: func._saveButton'><span data-bind='text: \""+
MsPortalFx.Base.Utilities.attributeEncode(r.ActionBarButtons.save)+"\"'><\/span><\/button><button class='fxcontrol-actionBarBase-button fxcontrol-formActionBar-discardButton' data-bind='pcButton: func._discardButton'><span data-bind='text: \""+
MsPortalFx.Base.Utilities.attributeEncode(r.ActionBarButtons.discard)+"\"'><\/span><\/button>",u=function(
n){function i(t,i,r){n.call(this,t,i,r);this._saveButton=new MsPortalFx.ViewModels.Controls.Forms.Button.
ViewModel(this.lifetimeManager);this._discardButton=new MsPortalFx.ViewModels.Controls.Forms.Button.
ViewModel(this.lifetimeManager);this._initializeWidgets()}return __extends(i,n),i.prototype.dispose=
function(){this._cleanElement(t);n.prototype.dispose.call(this)},Object.defineProperty(i.prototype,"options",
{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=
function(){var n=this;this.element.addClass(t).html(f);this._setupButtonHandlers();this.options.valid.
subscribe(this.lifetimeManager,function(t){n._onValidChanged(t,n._saveButton)});this._bindDescendants(
)},i.prototype._setupButtonHandlers=function(){var n=this;this._saveButton.click=function(){n._validateForm(
n._saveButton).then(function(t){t&&n.options.saveButtonClick()})};this._discardButton.click=function(
){n.options.discardButtonClick()}},i}(i.Widget);n.Widget=u;i.registerFactory(3,u,MsPortalFx.ViewModels.
ActionBars.FormActionBar.ViewModel)}(u||(u={})),u});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("MsPortalImpl/Controls/ActionBars/Controls.GenericActionBar",["require","exports","./Controls.ActionBarBase",
"MsPortalImpl/Resources/ImplScriptResources"],function(n,t,i,r){var u=MsPortalFx.Base.EventTypes,f;return function(
n){"use strict";var o=window,t="fxcontrol-genericactionbar",e="<div class='fxcontrol-genericactionbar-summary' data-bind='visible: func._showActionSummary, sanitizedHtml: func._actionSummaryHtml'><\/div><button class='fxcontrol-actionBarBase-button fxcontrol-genericactionbar-actionbutton' data-bind='pcButton: func._actionButton'><span data-bind='text: func._actionButtonLabel'><\/span><\/button>",
f=function(n){function i(t,i,r){this._actionButtonLabel=ko.observable();this._actionSummaryHtml=ko.observable(
);this._showActionSummary=ko.observable(!1);n.call(this,t,i,r);this._actionButton=new MsPortalFx.ViewModels.
Controls.Forms.Button.ViewModel(this.lifetimeManager);this._initializeWidgets()}return __extends(i,n),
i.prototype.dispose=function(){this._validationTargetUpdatedListener&&($(this).off(u.fxactionbarvalidationtargetupdated,
this._validationTargetUpdatedListener),this._validationTargetUpdatedListener=null);this._actionButtonFieldRequiredReactor&&
(this._actionButtonFieldRequiredReactor.dispose(),this._actionButtonFieldRequiredReactor=null);this.
_cleanElement(t);n.prototype.dispose.call(this)},Object.defineProperty(i.prototype,"options",{get:function(
){return this._options},enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=function(){var
n=this;this.element.addClass(t).html(e);this._setupButtonHandlers();this._addDisposablesToCleanUp(ko.
computed(function(){var t=n.options.actionButtonLabel();n._actionButtonLabel(t?t:r.ActionBarButtons.
ok)}));this._addDisposablesToCleanUp(ko.computed(function(){n._actionSummaryHtml($.trim(n.options.actionSummaryHtml(
)));n._showActionSummary(!!n._actionSummaryHtml());setTimeout(function(){n.trigger(u.fxactionbarresize)}
,0)}));this.options.valid.subscribe(function(t){n._onValidChanged(t,n._actionButton)});$(this).on(u.
fxactionbarvalidationtargetupdated,this._validationTargetUpdatedListener=function(){n._actionButtonFieldRequiredReactor&&
(n._actionButtonFieldRequiredReactor.dispose(),n._actionButtonFieldRequiredReactor=null);n._actionButtonFieldRequiredReactor=
ko.computed(function(){n._disableButtonWhenRequiredSelectorsAreEmpty(n._actionButton)})});this._bindDescendants(
)},i.prototype._setupButtonHandlers=function(){var n=this;this._actionButton.click=function(){n._validateForm(
n._actionButton).then(function(t){if(t){n.options.actionButtonClick();n._setOutput({status:3,action:
4,commitId:MsPortalFx.Util.newGuid(),actionButtonClicked:!0})}})}},i}(i.Widget);n.Widget=f;i.registerFactory(
6,f,MsPortalFx.ViewModels.ActionBars.GenericActionBar.ViewModel)}(f||(f={})),f});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("MsPortalImpl/Controls/ActionBars/Controls.PickerActionBar",["require",
"exports","./Controls.ActionBarBase","MsPortalImpl/Resources/ImplScriptResources"],function(n,t,i,r)
{var f=MsPortalFx.Base.EventTypes,u;return function(n){"use strict";var o=window,t="fxcontrol-pickerActionBar",
e="<button class='fxcontrol-actionBarBase-button fxcontrol-pickerActionBar-okButton' data-bind='pcButton: func._selectButton, visible: data.showSelectButton'><span data-bind='text: func._selectButtonText'><\/span><\/button><div class='fxcontrol-pickerActionBar-eula' data-bind='visible: $.trim(data.eula()), sanitizedHtml: data.eula'><\/div>",
u=function(n){function i(t,i,r){n.call(this,t,i,r);this._selectButton=new MsPortalFx.ViewModels.Controls.
Forms.Button.ViewModel(this.lifetimeManager);this._initializeWidgets()}return __extends(i,n),i.prototype.
dispose=function(){this._cleanElement(t);n.prototype.dispose.call(this)},Object.defineProperty(i.prototype,
"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),i.prototype._initializeWidgets=
function(){var n=this,i;this.element.addClass(t).html(e);i=function(){n._validateForm(n._selectButton).
then(function(t){var i=n._createOutput(n.options.input(),t?null:2);n._setOutput(i)})};this._selectButton.
click=i;this.options.valid.subscribe(this.lifetimeManager,function(t){n._onValidChanged(t,n._selectButton)}
);this.options.triggerSelectAction.subscribe(this.lifetimeManager,function(){i()});this._addDisposablesToCleanUp(
this._selectButtonText=ko.computed(function(){var t=r.ActionBarButtons.select;return n.options.selectButtonText&&
!!n.options.selectButtonText()&&(t=n.options.selectButtonText()),MsPortalFx.Base.Utilities.attributeEncode(
t)}));this._addDisposablesToCleanUp(ko.computed(function(){n.options.eula();n.options.showSelectButton(
);setTimeout(function(){n.trigger(f.fxactionbarresize)},0)}));this._bindDescendants()},i}(i.Widget);
n.Widget=u;i.registerFactory(2,u,MsPortalFx.ViewModels.ActionBars.PickerActionBar.ViewModel)}(u||(u=
{})),u})