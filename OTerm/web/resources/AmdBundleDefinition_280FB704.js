var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Commands/VirtualMachineDeleteCommandViewModel",
["require","exports","../../../VirtualMachines/Utilities/Constants","../../../VirtualMachines/Utilities/Helpers"],
function(n,t,i,r){var u;return function(n){"use strict";var t=function(n){function t(t,i,u){var f=this;
n.call(this,t);this.virtualMachine=ko.observable();this.id=ko.observable();this.icon(MsPortalFx.Base.
Images.Delete());this.enabled=ko.pureComputed(function(){return f.virtualMachine()&&f.virtualMachine(
).hardwareProfile()&&r.canVirtualMachineDelete(f.virtualMachine().aggregatedVirtualMachineStatus(),f.
virtualMachine().hardwareProfile().deploymentLocked())});this._virtualMachineEntityView=u.virtualMachinesData.
VirtualMachineEntityCache.createView(t);this.container=t}return __extends(t,n),t.prototype.onInputsSet=
function(n){var r=this,t;return!MsPortalFx.Base.Utilities.deepEquals(n,this._inputs)&&(this._inputs=
n,n.id&&n.id===this.id()&&(t=n.actionBarOutput,t&&(t.status===3&&this.container.selectable.isSelected(
!1),t.action===4&&this.virtualMachine().aggregatedVirtualMachineStatus(i.VirtualMachineStatus.DeletingVM))),
n.id&&n.id!==this.id())?(this.id(n.id),this._virtualMachineEntityView.fetch({resourceIds:[this.id()]}).
then(function(){r.virtualMachine(r._virtualMachineEntityView.item())})):null},t}(MsPortalFx.ViewModels.
OpenBladeCommand);n.VirtualMachineDeleteCommandViewModel=t}(u||(u={})),u})