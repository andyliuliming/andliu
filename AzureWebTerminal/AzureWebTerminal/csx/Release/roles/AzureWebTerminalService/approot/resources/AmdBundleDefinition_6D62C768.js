define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Adapter/EstimatedSpendAdapterViewModel",
["require","exports","../../VirtualMachinesArea"],function(){var n;return function(n){"use strict";var
t=function(){function n(n,t,i){this.subscriptionId=ko.observable();this.resourceUsageName=ko.observable(
);this.resourceUsageUri=ko.observable();this.estimatedSpendDisplayText=ko.observable(ClassicComputeExtension.
ExtensionAssets.Resources.VirtualMachine.CurrentSpend.displayText);this.id=ko.observable();this._virtualMachineEntityView=
i.virtualMachinesData.VirtualMachineEntityCache.createView(n)}return n.prototype.onInputsSet=function(
n){var t=this,i;return MsPortalFx.Base.Utilities.deepEquals(n.id,this.id())?Q():(this.id(n.id),i=MsPortalFx.
ViewModels.Services.ResourceTypes.parseResourceDescriptor(this.id()),this.subscriptionId(i.subscription),
this.resourceUsageUri("{0}{1}".format(window.fx.environment.csmManagementServiceUri,this.id())),this.
_virtualMachineEntityView.fetch({resourceIds:[this.id()]}).then(function(){var n=t._virtualMachineEntityView.
item();n&&t.resourceUsageName(n.domainName().name())}))},n}();n.EstimatedSpendAdapterViewModel=t}(n||
(n={})),n})