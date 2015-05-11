var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Commands/VirtualMachineCaptureCommand",
["require","exports","../../Utilities/Helpers","../../Models/VirtualMachineCapture","../../../VirtualMachines/Operations/VirtualMachineOperations",
"../../../_generated/ExtensionDefinition"],function(n,t,i,r,u,f){"use strict";var e=function(n){function t(
t,r,u){var f=this;n.call(this,t,r);this.id=ko.observable();this._unlockResource=ko.observable(!1);this.
_container=t;this.icon(MsPortalFx.Base.Images.Release());this._virtualMachineEntityView=u.virtualMachinesData.
VirtualMachineEntityCache.createView(t);this._container.selectable=MsPortalFx.ViewModels.OpenBladeCommand.
createSelectableViewModel(null);this._isReadyToCapture=ko.pureComputed(function(){return f._virtualMachineEntityView.
item&&f._virtualMachineEntityView.item()&&!i.isVMDeploymentLocked(f._virtualMachineEntityView.item())&&
i.canCaptureVirtualMachine(f._virtualMachineEntityView.item().aggregatedVirtualMachineStatus())});this.
_isReadyToCapture.subscribe(t,function(n){f.enabled(n)});this._unlockResource.subscribe(t,function(n)
{n&&(MsPortalFx.Data.DataSet.unlockItem(f._virtualMachineEntityView.item(),!1),f._unlockResource(!1))}
)}return __extends(t,n),t.prototype.onInputsSet=function(t){var i=this;return MsPortalFx.Base.Utilities.
deepEquals(t,this._inputs)?n.prototype.onInputsSet.call(this,t):(this._inputs=t,this.id(t.id),Q.all(
[n.prototype.onInputsSet.call(this,t),this._virtualMachineEntityView.fetch({resourceIds:[this.id()]})]).
then(function(){n.prototype.setDynamicBladeSelection.call(i)}))},t.prototype.getProviderInputs=function(
){var n=new MsPortalFx.ViewModels.ParameterCollection.ParameterCollectionInput,t=new r.VirtualMachineCaptureModel;
return t.CaptureSettings.virtualMachineId(this.id()),n.inputParameters=MsPortalFx.ViewModels.ParameterCollection.
Models.modelToParameters(t),n},t.prototype.onProviderCommit=function(n,t){if(t.outputParameters){var
r=MsPortalFx.ViewModels.ParameterCollection.Models.parametersToModel(t.outputParameters);return this.
_container.selectable.isSelected(!1),i.setVMDeploymentLocked(this._virtualMachineEntityView.item(),!0),
MsPortalFx.Data.DataSet.lockItem(this._virtualMachineEntityView.item(),1),u.captureVirtualMachine(this.
_virtualMachineEntityView,r,this._unlockResource)}return Q(!0)},t.prototype.getDynamicBladeTarget=function(
){return{detailBlade:f.BladeNames.virtualMachineCaptureBlade,extension:f.definitionName,detailBladeInputs:
{}}},t}(ExtensionCore.ViewModels.ParameterCollectorCommandBase);t.VirtualMachineCaptureCommand=e})