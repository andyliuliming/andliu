var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/VirtualMachineBladeResourceSummaryViewModel",
["require","exports","../../_generated/ExtensionDefinition","../../Program","../Utilities/Helpers"],
function(n,t,i,r,u){var f=MsPortalFx.ViewModels.Parts.Properties,s=ClassicComputeExtension.ExtensionAssets,
e=s.Resources.General,o=s.Resources.VirtualMachine,h;h=function(n){function t(t,i,u){n.call(this,i,this.
_getOptions());this.tagsVisible(!1);this._virtualMachinesEntityView=u.virtualMachinesData.VirtualMachineEntityCache.
createView(t);var f=r.Instance.viewModelFactories.SpecPicker().dataContext;this._specsDataView=f.specPickerData.
specDataEntityCache.createView(t)}return __extends(t,n),t.prototype.onInputsSet=function(t){var i=this;
return Q.all([n.prototype.onInputsSet.call(this,t),this._virtualMachinesEntityView.fetch({resourceIds:
[t.resourceId]})]).then(function(){return i._loadSpecsDataView()}).then(function(){i._onVirtualMachineChange(
i._virtualMachinesEntityView.item(),t)})},t.prototype._onVirtualMachineChange=function(n,t){this._removeAllProperties(
);this._addProperties(n,t)},t.prototype._addProperties=function(n){this.addProperty(new f.TextProperty(
e.ResourceSummary.dnsNameLabel,n.instanceView().fullyQualifiedDomainName()));this.addProperty(this._getStatusProperty(
n));this.addProperty(this._getVirtualIpProperty(n));this.addProperty(new f.TextProperty(e.ResourceSummary.
locationLabel,ExtensionCore.Utilities.getRegionDisplayName(n.location())));this.addProperty(this._getPrivateIpProperty(
n));this.addProperty(this._getSubscriptionProperty(n));this.addProperty(new f.TextProperty(e.ResourceSummary.
sizeLabel,this._getSizeLabel()));this.addProperty(new f.TextProperty(e.ResourceSummary.subscriptionIdLabel,
n.subscriptionId));u.isWindowsVM(n)?this.addProperty(new f.TextProperty(o.Properties.operatingSystemTitle,
o.windowsOperatingSystem)):this.addProperty(new f.TextProperty(o.Properties.operatingSystemTitle,o.linuxOperatingSystem))}
,t.prototype._getStatusProperty=function(n){return new f.TextProperty(e.ResourceSummary.statusLabel,
ko.pureComputed(function(){return u.getStatusDisplayName(n.aggregatedVirtualMachineStatus())}))},t.prototype.
_getSubscriptionProperty=function(n){var t=n.subscriptionId.peek(),r=ko.observable(""),u=ko.observable(
{extension:i.External.Microsoft_Azure_Billing.name,detailBlade:"BillingSubscriptionsBrowseBlade",detailBladeInputs:
{id:t}});return ExtensionCore.Csm.getSubscriptionAsync(t).then(function(n){r(n.subscriptionName)}),new
f.OpenBladeProperty(e.ResourceSummary.subscriptionNameLabel,r,u)},t.prototype._getVirtualIpProperty=
function(n){return new f.TextProperty(e.ResourceSummary.virtualIpLabel,ko.pureComputed(function(){return n&&
n.instanceView()&&n.instanceView().publicIpAddresses()&&n.instanceView().publicIpAddresses().length!==
0?n.instanceView().publicIpAddresses()[0]:"-"}))},t.prototype._getPrivateIpProperty=function(n){return new
f.TextProperty(e.ResourceSummary.privateIpLabel,ko.pureComputed(function(){return n&&n.instanceView(
)?n.instanceView().privateIpAddress():"-"}))},t.prototype._getOptions=function(){var n=function(n){return{
detailBlade:i.BladeNames.virtualMachineQuickStartBlade,detailBladeInputs:{id:n.resourceId}}},t=function(
n){return{detailBlade:i.BladeNames.virtualMachineSettingsBlade,detailBladeInputs:{id:n.resourceId}}}
;return{getQuickStartSelection:n,getSettingsSelection:t}},t.prototype._removeAllProperties=function(
){this.properties([]);this._openBladeProperties([]);this._countOfProperties=0},t.prototype._loadSpecsDataView=
function(){var t=this._virtualMachinesEntityView.item(),n,i,r,u;return t?(n=t.storageProfile().operatingSystemDisk(
),i="",n&&n.sourceImageName()?(r=n.sourceImageName().lastIndexOf("."),i=r>=0?n.sourceImageName().substring(
0,r):n.sourceImageName()):i="IMAGENOTFOUND",u={imageName:i,location:t.location(),platform:n.operatingSystem(
),instanceCount:"1",resourceId:t.id()},this._specsDataView.fetch(ko.toJS(u)).then(null,function(){MsPortalFx.
Base.Diagnostics.Log.writeEntry(2,"ComputePricingTierLauncherExtender","failed to load specData: {0}".
format(ko.toJSON(u)))})):Q()},t.prototype._getSizeLabel=function(){var t=this._specsDataView.item(),
n,i,r,u,f;return t?(n=this._findSingleSpec(ko.toJS(t),this._virtualMachinesEntityView.item().hardwareProfile(
).size()),n.spec.promotedFeatures&&n.spec.promotedFeatures[0]&&(i=n.spec.promotedFeatures[0].unitDescription,
r=n.spec.promotedFeatures[0].value),n.spec.promotedFeatures&&n.spec.promotedFeatures[1]&&(u=n.spec.promotedFeatures[
1].unitDescription,f=n.spec.promotedFeatures[1].value),"{0} {1} ({2} {3}, {4} {5})".format(n.spec.title,
n.spec.specCode,r||"-",i,f||"-",u)):""},t.prototype._findSingleSpec=function(n,t){var i=n.specs.first(
function(n){return n.id.toLowerCase()===t.toLowerCase()});return{features:n.features,spec:i}},t}(MsPortalFx.
ViewModels.Parts.ResourceSummary.ViewModel);t.VirtualMachineBladeResourceSummaryViewModel=h})