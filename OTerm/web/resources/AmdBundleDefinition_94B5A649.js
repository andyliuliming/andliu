define("ClassicComputeExtension/Client/SpecPicker/ViewModels/PricingTierLauncher/PricingTierLauncherExtender",
["require","exports","../../../SpecPicker/Operations/PricingTierOperations","../../../Program"],function(
n,t,i,r){var u;return function(n){"use strict";var t=function(){function n(n,t,i){var u=this;this.output=
ko.observable();this.input=ko.observable();this._isInitialQueryFullfilled=!1;this._vmId=ko.observable(
"");this._newSize=ko.observable("");var e=r.Instance.viewModelFactories.SpecPicker().dataContext,f=r.
Instance.viewModelFactories.Create().dataContext,o=r.Instance.viewModelFactories.DomainNames().dataContext;
this._virtualMachineEntityView=i.virtualMachinesData.VirtualMachineEntityCache.createView(n);this._subscriptionsCapabilitiesQueryView=
f.capabilitiesData.virtualMachineSubscriptionsCapabilitiesQuery.createView(n);this._locationsCapabilitiesQueryView=
f.capabilitiesData.virtualMachineLocationsCapabilitiesQuery.createView(n);this._domainNameCapabilitiesQueryView=
f.capabilitiesData.domainNameCapabilitiesQuery.createView(n);this._domainNamesQueryView=o.domainNamesData.
DomainNamesQueryCache.createView(n);this._specsDataView=e.specPickerData.specDataEntityCache.createView(
n);this.input.subscribe(n,function(t){t&&t.entityId&&(u._vmId(t.entityId),u._subscriptionId=MsPortalFx.
ViewModels.Services.ResourceTypes.parseResourceDescriptor(t.entityId).subscription,Q.all([u._virtualMachineEntityView.
fetch({resourceIds:[t.entityId]}),u._subscriptionsCapabilitiesQueryView.fetch(""),u._locationsCapabilitiesQueryView.
fetch(""),u._domainNameCapabilitiesQueryView.fetch({domainNamesCache:u._domainNamesQueryView})]).then(
function(){var t=u._virtualMachineEntityView.item();t&&t.storageProfile().dataDisks.subscribe(n,function(
){u._setOutputs()});u._setOutputs();u._isInitialQueryFullfilled=!0}).fail(function(){MsPortalFx.Base.
Diagnostics.Log.writeEntry(2,"ComputePricingTierLauncherExtender","failed to load vm/disk: {0}".format(
t.entityId))}))});this._domainNameCapabilitiesQueryView.items.subscribe(n,function(n){n&&u._isInitialQueryFullfilled&&
u._setOutputs()});ko.reactor(n,function(){var n=u._virtualMachineEntityView.item();u._newSize(undefined);
n&&u._newSize(n.hardwareProfile().size())});this._newSize.subscribe(n,function(n){n&&u._isInitialQueryFullfilled&&
u._setOutputs()})}return n.prototype.saveSelectedSpecAsync=function(n){var t=this;return this._updateVM(
n).then(null,function(){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"ComputePricingTierLauncherExtender",
"failed to update VM {0} to size {1}".format(t._vmId(),n))})},n.prototype.hasReadPermision=function(
n){return MsPortalFx.Portal.Security.hasPermission(n,["Microsoft.ClassicCompute/virtualMachines/read"])}
,n.prototype._setOutputs=function(){var i=this,n=this._virtualMachineEntityView.item(),h,r,u,f;if(n)
{var e=this._locationsCapabilitiesQueryView.items().filter(function(t){return t.location()===n.location(
)}),o=this._subscriptionsCapabilitiesQueryView.items().filter(function(n){return n.subscriptionId()===
i._subscriptionId}),s=this._domainNameCapabilitiesQueryView.items().filter(function(t){return StringEx.
startsWith(t.id(),n.domainName().id())}),t=n.storageProfile().operatingSystemDisk();this._vmName=n.name(
);h=n.storageProfile()&&n.storageProfile().dataDisks()&&n.storageProfile().dataDisks().length||0;r="";
t&&t.sourceImageName()?(u=t.sourceImageName().lastIndexOf("."),r=u>=0?t.sourceImageName().substring(
0,u):t.sourceImageName()):r="IMAGENOTFOUND";f={imageName:r,location:n.location(),platform:t.operatingSystem(
),instanceCount:"1",resourceId:n.id()};this._specsDataView.fetch(ko.toJS(f)).then(function(){var u=i.
_findSingleSpec(ko.toJS(i._specsDataView.item()),n.hardwareProfile().size()),l,f,a,c,v;u.spec.promotedFeatures&&
u.spec.promotedFeatures[0]&&(l=u.spec.promotedFeatures[0].unitDescription,f=u.spec.promotedFeatures[
0].value);u.spec.promotedFeatures&&u.spec.promotedFeatures[1]&&(a=u.spec.promotedFeatures[1].unitDescription,
c=u.spec.promotedFeatures[1].value);v={pricingTierDisplay:{assetName:"VirtualMachine",firstText:ko.observable(
l||""),firstNumber:f?ko.observable(+f):null,secondText:ko.observable(a||""),secondNumber:c?ko.observable(
+c):null},specData:u,specPickerBladeParameter:{detailBlade:"SpecPicker",extension:"Microsoft_Azure_Classic_Compute",
selectedSpecId:n.hardwareProfile().size(),subscriptionId:i._subscriptionId,regionId:n.location(),options:
{imageName:r,location:n.location(),platform:t.operatingSystem(),supportedMaxDataDisksCount:h,allowedSizesForLocation:
e.length>0?e[0].virtualMachineSizes():[],allowedSizesForSubscription:o.length>0?o[0].virtualMachineSizes(
):[],allowedSizesForDomainName:s.length>0?s[0].virtualMachineSizes():[],resourceId:n.id()}}};i.output(
v)},function(){MsPortalFx.Base.Diagnostics.Log.writeEntry(2,"ComputePricingTierLauncherExtender","failed to load specData: {0}".
format(ko.toJSON(f)))})}},n.prototype._findSingleSpec=function(n,t){var i=n.specs.first(function(n){
return n.id.toLowerCase()===t.toLowerCase()});return{features:n.features,spec:i}},n.prototype._updateVM=
function(n){var t=this;return i.updateVirtualMachinePricingTier(this._virtualMachineEntityView,this.
_vmId(),n).then(function(){t._virtualMachineEntityView.refresh()})},n}();n.ComputePricingTierLauncherExtender=
t}(u||(u={})),u})