var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/VirtualMachineBladeViewModel",
["require","exports","../VirtualMachinesArea","../../VirtualMachines/Utilities/Constants","../../VirtualMachines/Utilities/Helpers",
"../../VirtualMachines/Models/VirtualMachineAssetDetails"],function(n,t,i,r,u,f){var o=ClassicComputeExtension.
ExtensionAssets,e;return function(n){"use strict";var t=o.Resources.VirtualMachine,i=function(n){function i(
i,r,u){var e=this;n.call(this);this.id=ko.observable();this.resourceId=ko.observable();this.assetDetails=
ko.observable(new f.VirtualMachineAssetDetails(""));this.assetName=ko.observable();this.resourceGroup=
ko.observable();this.applicationsOptions=ko.observable({hostName:""});this.subtitle(t.virtualMachine);
this.icon(MsPortalFx.Base.Images.Polychromatic.VirtualMachine());this._virtualMachineEntityView=u.virtualMachinesData.
VirtualMachineEntityCache.createView(i);this._virtualMachineEntityView.item.subscribe(i,function(){if(
e._virtualMachineEntityView.item()){var n=e._virtualMachineEntityView.item();n.aggregatedVirtualMachineStatus.
subscribe(i,function(n){e.setBladeContentState(n)});e.setBladeContentState(n.aggregatedVirtualMachineStatus(
));e.applicationsOptions({hostName:n.domainName().name()})}})}return __extends(i,n),i.prototype.setBladeContentState=
function(n){this.contentState(u.setVirtualMachineBladeContentState(n));var i=u.setVirtualMachineBladeContentStatusMessage(
n);n===r.VirtualMachineStatus.StoppedVM&&(i=t.Status.StoppedVM.warningNote);this.contentStateDisplayText(
i)},i.prototype.onInputsSet=function(n){this.id(n.id);this.resourceId(n.id);var t=MsPortalFx.ViewModels.
Services.ResourceTypes.parseResourceDescriptor(this.id());return this.title(t.resource),this.resourceGroup(
t.resourceGroup),this.assetName(t.resource),this.assetDetails(new f.VirtualMachineAssetDetails(this.
id())),this._virtualMachineEntityView.fetch({resourceIds:[this.id()]})},i}(MsPortalFx.ViewModels.Blade);
n.VirtualMachineBlade=i}(e||(e={})),e})