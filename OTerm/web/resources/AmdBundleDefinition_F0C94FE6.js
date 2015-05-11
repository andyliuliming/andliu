var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Commands/RestartCommandViewModel",
["require","exports","../../../VirtualMachines/Utilities/Constants","../../../Ajax/OperationTracker",
"../../../VirtualMachines/Utilities/Helpers","../../../Ajax/Ajax","../../../Shared/Constants","../../../VirtualMachines/ViewModels/Commands/ComputeCommandBaseViewModel"],
function(n,t,i,r,u,f,e,o){var s=ClassicComputeExtension.ExtensionAssets,h;h=function(n){function t(t,
i,r){var f=this;n.call(this,t,r);this.icon(MsPortalFx.Base.Images.Refresh());this._container=t;this.
_vmDisplayName=ko.observable("");this._vmDialogText=ko.pureComputed(function(){return s.Resources.VirtualMachine.
vmRestartConfirmationMessage.format(f._vmDisplayName())});this.enabled=ko.pureComputed(function(){return f.
virtualMachine()&&f.virtualMachine().hardwareProfile()&&u.canVirtualMachineRestart(f.virtualMachine(
).aggregatedVirtualMachineStatus())})}return __extends(t,n),t.prototype.dialogClick=function(n){n===
6&&this.restartVirtualMachine(this.virtualMachine())},t.prototype._execute=function(t){n.prototype._execute.
call(this,t);var i=new MsPortalFx.ViewModels.Dialogs.MessageBox(s.Resources.VirtualMachine.vmRestartConfirmationTitle,
this._vmDialogText(),4);this.dialog(i)},t.prototype._onVMChange=function(t){n.prototype._onVMChange.
call(this,t);this._vmDisplayName(t.name())},t.prototype.restartVirtualMachine=function(n){var s=this,
h=n.aggregatedVirtualMachineStatus(),t,o=ko.observable(!1);return ko.reactor(this._container,function(
){o()&&MsPortalFx.Data.DataSet.unlockItem(n,!1)}),n.aggregatedVirtualMachineStatus(i.VirtualMachineStatus.
portalVMStoppingStatus),u.setVMDeploymentLocked(n,!0),MsPortalFx.Data.DataSet.lockItem(n,1),t=r.longRunningVMOperation(
[this._virtualMachineEntityView],function(){return f.restartVirtualMachine(n.id())},o),t.then(function(
){n.aggregatedVirtualMachineStatus(i.VirtualMachineStatus.Running)},function(){n.aggregatedVirtualMachineStatus(
h)}).finally(function(){s._virtualMachineEntityView.refresh()}),ExtensionCore.UI.Notifications.createOperationNotification(
MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceDescriptor(n.id()).subscription,t,i.General.
ExtensionName,e.NotificationEventSource.ClassicComputeRestartVM,[this._vmDisplayName()])},t}(o.ComputeCommandBase);
t.RestartCommand=h})