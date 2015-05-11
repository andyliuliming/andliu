define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Adapter/EventsAdapterViewModel",["require",
"exports","../../VirtualMachinesArea"],function(){var n;return function(n){"use strict";var t=function(
){function n(){this.id=ko.observable();this.eventsOptions=ko.observable({})}return n.prototype.onInputsSet=
function(n){return MsPortalFx.Base.Utilities.deepEquals(n.id,this.id())||this.id(n.id),Q()},n}();n.EventsAdapterViewModel=
t}(n||(n={})),n})