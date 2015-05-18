define("HubsExtension/SpecPicker/ViewModels/PricingTierLauncherPartViewModel",["require","exports","../SpecPickerCommon",
"../ViewModels/SpecPickerLauncherPartCollector","HubsExtension/SpecPickerV3/SpecPickerClientStrings"],
function(n,t,i,r,u){"use strict";var f=u,e=function(){function n(n,t,i){this.size=ko.observable();this.
extenderViewModel=ko.observable();this._collector=null;this._container=null;this._extenderOutput=null;
this._dataContext=null;this._entityId=null;this._pricingTierLauncherSpecData=ko.observable();this._spec=
null;this._selectedRecommendedView=null;this._dataContext=i;this._container=n;this._initUiControls(n,
t);this._initExtenderEvents(n);this._initRenderingEvents(n)}return n.prototype._initUiControls=function(
n){this._collector=new r.SpecPickerLauncherPartCollector(n,this,n.selectable)},n.prototype._initExtenderEvents=
function(n){var t=this;this._extenderOutput=ko.computed(n,function(){var r=t.extenderViewModel(),n;if(
r)return(i.notNull(r.output,"extenderViewModel.output"),i.notNull(r.input,"extenderViewModel.input"),
i.notNull(r.saveSelectedSpecAsync,"extenderViewModel.saveSelectedSpecAsync"),n=r.output(),!n)?void 0:
MsPortalFx.Base.Utilities.deepEquals(t._extenderOutput(),n)?t._extenderOutput():(i.notNull(n.pricingTierDisplay,
"pricingTierDisplay"),i.notNull(n.pricingTierDisplay.assetName,"pricingTierDisplay.assetName"),i.notNull(
n.specPickerBladeParameter,"specPickerBladeParameter"),i.notNull(n.specPickerBladeParameter.selectedSpecId,
"specPickerBladeParameter.selectedSpecId"),i.notNull(n.specPickerBladeParameter.subscriptionId,"specPickerBladeParameter.subscriptionId"),
i.notNull(n.specData,"extenderOutput.specData"),i.notNull(n.specPickerBladeParameter.detailBlade,"extenderOutput.specPickerBladeParameter.detailBlade"),
i.notNull(n.specPickerBladeParameter.extension,"extenderOutput.specPickerBladeParameter.extension"),
n)});this._extenderOutput.subscribe(n,function(){var i=t._extenderOutput();i&&(t._pricingTierLauncherSpecData(
i.specData),t._collector.resetSpecPickerSelectable(),n.assetName(i.pricingTierDisplay.assetName))})}
,n.prototype._initRenderingEvents=function(n){var t=this,i=$.Deferred();n.operations.add(i.promise(),
{blockUi:!0});this._spec=ko.computed(n,function(){var n=t._pricingTierLauncherSpecData(),r=t._container.
unauthorizedMessage();return(n||r)&&i.resolve(),n?n.spec:null});this.displayBinding={specCode:ko.pureComputed(
function(){return t._getSpecCode()}),firstNumber:ko.pureComputed(function(){return t._getFirstNumber(
)}),firstText:ko.pureComputed(function(){return t._getFirstText()}),secondNumber:ko.pureComputed(function(
){return t._getSecondNumber()}),secondText:ko.pureComputed(function(){return t._getSecondText()}),specCodeColor:
ko.pureComputed(function(){return t._getSpecCodeColor()}),featureIcons:ko.pureComputed(function(){return t.
_getFeatureIcons()}),partTitle:ko.pureComputed(function(){return t._getPartTitle()})};ko.reactor(n,function(
){var r=t.displayBinding.partTitle(),u=t.size();i.state()==="pending"?n.partTitle(f.pricingTier):u===
0?n.partTitle(null):n.partTitle(r)});ko.computed(this._container,function(){var n=t._extenderOutput(
);return n&&n.failureMessage?n.failureMessage:null}).subscribe(this._container,function(n){t._container.
noDataMessage(n)})},n.prototype.onInputsSet=function(n){var f=this,t=n.entityId,r,u;if(MsPortalFx.Base.
Utilities.deepEquals(t,this._entityId)){if(n.fromProviderBindingInternals)this._collector.onPartInputsSet(
n)}else{if(i.notNull(t,"entityId"),this._entityId=t,r=this.extenderViewModel(),!r)throw new Error("PricingTierLauncherExtender is required.");
if(r.hasReadPermision){if(u=r.hasReadPermision(t),!u)throw new Error("extenderViewModel.hasReadPermision must return a promise");
return u.then(function(n){if(!n){f._container.unauthorized();return}r.input({entityId:t})})}r.input(
{entityId:t})}return null},n.prototype.getProviderInput=function(){var t=this._extenderOutput(),n;return i.
notNull(t,"extenderOutput"),i.notNull(t.specPickerBladeParameter,"extenderOutput.specPickerBladeParameter"),
n=JSON.parse(JSON.stringify(t.specPickerBladeParameter)),n.options||(n.options={}),n.options.entityId=
this._entityId,n.options.selectRecommendedView=n.selectRecommendedView===null||n.selectRecommendedView===
undefined?this._selectedRecommendedView:n.selectRecommendedView,n},n.prototype.updateSelectedSpecAsync=
function(n,t){var r,u;if(i.notNull(n,"selectedSpecId"),r=this.extenderViewModel(),!r)throw new Error(
"PricingTierLauncherExtender is required.");if(t!==null&&t!==undefined&&(this._selectedRecommendedView=
t),u=r.saveSelectedSpecAsync(n),!u)throw new Error("saveSelectedSpecAsync should return a promise.");
return u},n.prototype._getSpecCode=function(){var n=this._extenderOutput(),t;return n?n.pricingTierDisplay.
specCode?n.pricingTierDisplay.specCode:(t=this._spec(),!t)?null:t.specCode:null},n.prototype._getValueFromPricingTierDisplay=
function(n){var i=this._extenderOutput(),t;return i?(t=n(i.pricingTierDisplay),ko.isObservable(t))?t(
):t:null},n.prototype._getFirstNumber=function(){return this._getValueFromPricingTierDisplay(function(
n){return n.firstNumber})},n.prototype._getFirstText=function(){return this._getValueFromPricingTierDisplay(
function(n){return n.firstText})},n.prototype._getSecondNumber=function(){return this._getValueFromPricingTierDisplay(
function(n){return n.secondNumber})},n.prototype._getSecondText=function(){return this._getValueFromPricingTierDisplay(
function(n){return n.secondText})},n.prototype._getSpecCodeColor=function(){var n=this._spec();if(!n)
return null;switch(n.colorScheme){case"mediumBlue":return"#4668c5";case"yellowGreen":return"#7fba00"
case"darkOrchid":return"#9b4f96";case"orange":return"#faaf40";default:return"#000"}},n.prototype._getFeatureIcons=
function(){var r=this,t=this._pricingTierLauncherSpecData(),n;if(!t)return null;var h=t.spec,f=t.features,
e=h.features;if(!f||!e)return null;var c=i.toObject(e,function(n){return n.id}),o=[],s=[];return f.forEach(
function(n){var t=c[n.id],i=r._getIconImage(t,n),f=r._getImageTitle(t,n);t?s.push({iconImage:i,isDisabled:
!1,title:f}):o.push({iconImage:i,isDisabled:!0,title:u.notAvailableInSelectedPlan})}),n=s.concat(o),
n.length>6&&(n=n.slice(0,6)),n},n.prototype._getPartTitle=function(){var n=this._extenderOutput()&&this.
_extenderOutput().pricingTierDisplay;return n?n.partTitle===null||n.partTitle===undefined?f.pricingTier:
n.partTitle:null},n.prototype._getIconImage=function(n,t){var r;return n&&(r=i.getImageFromFeature(n)),
r||(r=i.getImageFromFeature(t)),r},n.prototype._getImageTitle=function(n,t){var u,r,i;return n&&(r=n.
displayValue,i=n.displayName),r||(r=t.displayValue),i||(i=t.displayName),r=r||"",i=i||"",u=r,u=u.length>
0?u+" "+i:i,u.trim()},n}();t.PricingTierLauncherPartViewModel=e});define("HubsExtension/SpecPicker/ViewModels/SpecPickerLauncherPartCollector",
["require","exports","../Models/SpecPickerConstants"],function(n,t,i){var r;return function(n){"use strict";
var t=function(){function n(n,t,i){this.parameterCollectionErrors=ko.observable();this._container=n;
this._partViewModel=t;this._selectable=i}return n.prototype.getProviderInputs=function(n){var t=this.
_partViewModel.getProviderInput(n),r=new MsPortalFx.ViewModels.ParameterCollection.ParameterCollectionInput,
u=i.SpecPickerConstants.inputParameterGroupName,f;if(!t.subscriptionId)throw new Error("SubscriptionId is required.");
if(!t.selectedSpecId)throw new Error("SelectedSpecId is required.");return r.inputParameters[u]={selectedSpecId:
t.selectedSpecId},r.inputMetadata[u]={selectedSpecId:{defaultValue:"",displayName:"selected specId",
toolTip:"Selected Spec Id",constraints:{required:!0}}},f={subscriptionId:t.subscriptionId,regionId:t.
regionId,disabledSpecs:t.disabledSpecs,recommendedSpecIds:t.recommendedSpecIds,selectRecommendedView:
t.selectRecommendedView},r.options[u]=$.extend(f,t.options),r},n.prototype.onProviderCommit=function(
n,t){var i=this,r=t&&t.outputParameters&&t.outputParameters.specPicker&&t.outputParameters.specPicker.
selectedSpecId,u=!!(t&&t.outputParameters&&t.outputParameters.specPicker&&t.outputParameters.specPicker.
selectedRecommendedView);if(!r)throw new Error("selectedSpecId cannot be null.");return this._container.
operations.add(this._partViewModel.updateSelectedSpecAsync(r,u).then(function(){i._setSpecPickerSelectable(
i._getSpecPickerDynamicBladeSelection(null))},function(){i._setSpecPickerSelectable(i._getSpecPickerDynamicBladeSelection(
null))}),{blockUi:!0}),$.Deferred().resolve(!0).promise()},n.prototype.onPartInputsSet=function(n){var
i=this,r=$.Deferred(),t,u;return n.fromProviderBindingInternals?(t=n.fromProviderBindingInternals.commit,
t&&t!==this._baseProviderCommit&&(this._baseProviderCommit=t,u=this.onProviderCommit(null,n.fromProviderBindingInternals.
outputs),u.then(function(n){n?(i.parameterCollectionErrors([]),i._closeSpecPicker()):i.parameterCollectionErrors(
[{errorMessage:"Parameter Collection failed!"}])})),r.resolve()):r.resolve(),r.promise()},n.prototype.
resetSpecPickerSelectable=function(){this._setSpecPickerSelectable(this._getSpecPickerDynamicBladeSelection(
null))},n.prototype._getSpecPickerDynamicBladeSelection=function(n){var t=this._partViewModel.getProviderInput(
n),i=this.getProviderInputs(null),r={"collectorBindingInternals-inputs":i,"collectorBindingInternals-errors":
{},stepInput:{isLastStep:!1,stepId:null,status:1}};return{detailBlade:t.detailBlade,extension:t.extension,
detailBladeInputs:r}},n.prototype._setSpecPickerSelectable=function(n){this._selectable.selectedValue(
n)},n.prototype._closeSpecPicker=function(){this._selectable.isSelected(!1)},n}();n.SpecPickerLauncherPartCollector=
t}(r||(r={})),r})