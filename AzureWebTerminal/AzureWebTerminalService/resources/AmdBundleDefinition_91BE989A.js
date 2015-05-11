define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Adapter/AlertsAdapterViewModel",["require",
"exports","../../VirtualMachinesArea"],function(){var n;return function(n){"use strict";var t=function(
){function n(){this.id=ko.observable();this.resourceUris=ko.observable();this.alertsOptions=ko.observable(
{isDisabled:!1,disabledMessage:null})}return n.prototype.onInputsSet=function(n){return MsPortalFx.Base.
Utilities.deepEquals(n.id,this.id())||(this.id(n.id),this.resourceUris([this.id()])),Q()},n}();n.AlertsAdapterViewModel=
t}(n||(n={})),n})