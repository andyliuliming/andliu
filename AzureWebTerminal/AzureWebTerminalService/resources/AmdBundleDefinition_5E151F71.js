define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Asset/VirtualMachineBrowseService",
["require","exports","../../VirtualMachinesArea","../../../VirtualMachines/Utilities/Helpers"],function(
n,t,i,r){var e=MsPortalFx.Assets,o=ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachine.
ColumnNames,u,f;(function(n){"use strict";n.status="status"})(u||(u={}));f=function(){function n(n,t,
i){this.supplementalDataStream=ko.observableArray([]);this._container=n;this._context=i}return n.prototype.
getBrowseConfig=function(){return Q.resolve({columns:[{id:u.status,name:ko.observable(o.status),itemKey:
u.status},],defaultColumns:[u.status,e.ResourceColumns.location]})},n.prototype.getSupplementalData=
function(n,t){var i=this._context.virtualMachinesData.VirtualMachinesQueryCache.createView(this._container);
return MsPortalFx.Assets.SupplementalDataStreamHelper.ConnectView(this._container,i,this.supplementalDataStream,
function(t){return n.some(function(n){return MsPortalFx.ViewModels.Services.ResourceTypes.compareResourceId(
n,t.id())})},function(n){var i={resourceId:n.id()},f=r.getVMStatusDisplayName();return t.indexOf(u.status)!==
-1&&(i[u.status]=f[n.aggregatedVirtualMachineStatus()]),i}),i.fetch("")},n}();t.VirtualMachineBrowseService=
f})