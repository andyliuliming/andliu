var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Commands/StartCommandViewModel",
["require","exports","../../../VirtualMachines/Utilities/Constants","../../../Ajax/OperationTracker",
"../../../VirtualMachines/Utilities/Helpers","../../../Ajax/Ajax","../../../Shared/Constants","../../../VirtualMachines/ViewModels/Commands/ComputeCommandBaseViewModel"],
function(n,t,i,r,u,f,e,o){var s=ClassicComputeExtension.ExtensionAssets,h;h=function(n){function t(t,
i,r){var f=this;n.call(this,t,r);this._canUnlockItem=ko.observable(!1);this.icon(MsPortalFx.Base.Images.
Start());this._container=t;this._vmDisplayName=ko.observable("");this._vmDialogText=ko.pureComputed(
function(){return s.Resources.VirtualMachine.vmStartConfirmationMessage.format(f._vmDisplayName())});
this.enabled=ko.pureComputed(function(){return f.virtualMachine()&&f.virtualMachine().hardwareProfile(
)&&u.canVirtualMachineStart(f.virtualMachine().aggregatedVirtualMachineStatus(),f.virtualMachine().hardwareProfile(
).deploymentLocked())});ko.reactor(this._container,function(){f._canUnlockItem()&&MsPortalFx.Data.DataSet.
unlockItem(f.virtualMachine(),!1)})}return __extends(t,n),t.prototype.dialogClick=function(n){n===6&&
this.startVirtualMachine(this.virtualMachine())},t.prototype._execute=function(t){n.prototype._execute.
call(this,t);var i=new MsPortalFx.ViewModels.Dialogs.MessageBox(s.Resources.VirtualMachine.vmStartConfirmationTitle,
this._vmDialogText(),4);this.dialog(i)},t.prototype._onVMChange=function(t){n.prototype._onVMChange.
call(this,t);this._vmDisplayName(t.name())},t.prototype.startVirtualMachine=function(n){var o=this,s=
n.aggregatedVirtualMachineStatus(),t;return n.aggregatedVirtualMachineStatus(i.VirtualMachineStatus.
portalVMStartingStatus),u.setVMDeploymentLocked(n,!0),MsPortalFx.Data.DataSet.lockItem(n,1),t=r.longRunningVMOperation(
[this._virtualMachineEntityView],function(){return f.startVirtualMachine(n.id())},this._canUnlockItem),
t.then(function(){n.aggregatedVirtualMachineStatus(i.VirtualMachineStatus.Running)},function(){n.aggregatedVirtualMachineStatus(
s)}).finally(function(){o._virtualMachineEntityView.refresh()}),ExtensionCore.UI.Notifications.createOperationNotification(
MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceDescriptor(n.id()).subscription,t,i.General.
ExtensionName,e.NotificationEventSource.ClassicComputeStartVM,[this._vmDisplayName()])},t}(o.ComputeCommandBase);
t.StartCommand=h})