var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Asset/VirtualMachineDynamicBladeService",
["require","exports","../../VirtualMachinesArea","../../../_generated/ExtensionDefinition"],function(
n,t,i,r){var u=MsPortalFx.ViewModels.Services.DynamicBlade,f=function(n){function t(t,i,r){n.call(this);
this._sqlImagesPattern=/SQL-Server-(2014-RTM|2012-SP2)-[\S]*-(DW|Std|OLTP|Ent|Web)-[\S]*/gi;this._sqlExtensionName=
"SqlIaaSAgent";this._virtualMachineEntityView=r.virtualMachinesData.VirtualMachineEntityCache.createView(
t)}return __extends(t,n),t.prototype.onInputsSet=function(n){var t=this,u=n.usage,i=n.assetId;return i?
this._virtualMachineEntityView.fetch({resourceIds:[i]}).then(function(){var n=t._isSqlVM();n&&t.bladeName(
r.BladeNames.virtualMachineSqlVMBlade)}):null},t.prototype._isSqlVM=function(){var f=this,n=this._virtualMachineEntityView.
item(),t=null,i=!1,r=!1,u;return n&&n.storageProfile()&&n.storageProfile().operatingSystemDisk()&&(t=
n.storageProfile().operatingSystemDisk().sourceImageName()),t&&(i=this._sqlImagesPattern.test(t)),n&&
n.resourceExtensions()&&$.isArray(n.resourceExtensions())&&(u=n.resourceExtensions().first(function(
n){return StringEx.equals(n.extension(),f._sqlExtensionName,0)}),r=!!u),i||r},t}(u.Service);t.VirtualMachineDynamicBladeService=
f})