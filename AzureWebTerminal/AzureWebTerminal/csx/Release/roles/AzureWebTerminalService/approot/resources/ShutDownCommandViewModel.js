var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../../VirtualMachines/Utilities/StandaloneUtilities", "../../../VirtualMachines/Utilities/Constants", "../../../Ajax/OperationTracker", "../../../VirtualMachines/Utilities/Helpers", "../../../Ajax/Ajax", "../../../Shared/Constants", "../../../VirtualMachines/ViewModels/Commands/ComputeCommandBaseViewModel"], function (require, exports, VMStandaloneUtilitiesRef, VMConstantsRef, OperationTrackerRef, VMHelpersRef, AjaxRef, ConstantsRef, ComputeCommandBaseViewModelRef) {
    /// <reference path="..\..\..\TypeReferences.d.ts" />
    /// <reference path="..\..\..\_generated\Resources\_references.ts" />
    var ExtensionAssets = ClassicComputeExtension.ExtensionAssets;
    "use strict";
    var ShutdownCommand = (function (_super) {
        __extends(ShutdownCommand, _super);
        function ShutdownCommand(container, initialState, dataContext) {
            var _this = this;
            _super.call(this, container, dataContext);
            this._canUnlockItem = ko.observable(false);
            this.icon(MsPortalFx.Base.Images.Stop());
            this._container = container;
            this._vmDisplayName = ko.observable("");
            this._vmDialogText = ko.pureComputed(function () {
                return _this.getVirtualMachineShutDownMessage();
            });
            this.enabled = ko.pureComputed(function () {
                return (_this.virtualMachine() && _this.virtualMachine().hardwareProfile() && VMHelpersRef.canVirtualMachineShutdown(_this.virtualMachine().aggregatedVirtualMachineStatus()));
            });
            ko.reactor(this._container, function () {
                //unlock here
                if (_this._canUnlockItem()) {
                    MsPortalFx.Data.DataSet.unlockItem(_this.virtualMachine(), false);
                }
            });
        }
        ShutdownCommand.prototype.dialogClick = function (result) {
            //once the user click Yes, start the LRO to start or shut down the VM.
            if (result === 6 /* Yes */) {
                this.shutdownVirtualMachine(this.virtualMachine());
            }
        };
        ShutdownCommand.prototype._execute = function (vm) {
            _super.prototype._execute.call(this, vm);
            var confirmationMessageBox = new MsPortalFx.ViewModels.Dialogs.MessageBox(ExtensionAssets.Resources.VirtualMachine.vmShutdownConfirmationTitle, this._vmDialogText(), 4 /* YesNo */);
            this.dialog(confirmationMessageBox);
        };
        ShutdownCommand.prototype.getVirtualMachineShutDownMessage = function () {
            var isLastVMInRole = VMStandaloneUtilitiesRef.isLastVMInDomain(this._virtualMachinesQueryView.items(), this.virtualMachine()), isInstanceIpEnabled = VMStandaloneUtilitiesRef.isConfiguredWithInstanceIpAddress(this.virtualMachine()), IsStaticDipEnabled = VMStandaloneUtilitiesRef.isConfiguredWithStaticPrivateIpAddress(this.virtualMachine()), IsDynamicVip = !VMStandaloneUtilitiesRef.isVirtualIpAddressReserved(this.virtualMachine()), shutDownMessage = "";
            if (isLastVMInRole && IsDynamicVip) {
                shutDownMessage = this._addAppropriateConcatenator(shutDownMessage) + ExtensionAssets.Resources.VirtualMachine.vmShutdownConfirmationMessageLastVMInRole.format(VMStandaloneUtilitiesRef.getVirtualIpAddess(this.virtualMachine()));
            }
            if (isInstanceIpEnabled) {
                shutDownMessage = this._addAppropriateConcatenator(shutDownMessage) + ExtensionAssets.Resources.VirtualMachine.vmShutdownConfirmationMessageInstanceIPConfigured.format(VMStandaloneUtilitiesRef.getInstanceIpAddress(this.virtualMachine()));
            }
            if (!IsStaticDipEnabled) {
                shutDownMessage = this._addAppropriateConcatenator(shutDownMessage) + ExtensionAssets.Resources.VirtualMachine.vmShutdownConfirmationMessageStaticDipConfigured.format(VMStandaloneUtilitiesRef.getPrivateIpAddress(this.virtualMachine()));
            }
            if (shutDownMessage !== "") {
                shutDownMessage = ExtensionAssets.Resources.VirtualMachine.vmShutdownTextWillBeReleased.format(shutDownMessage);
            }
            return shutDownMessage + ExtensionAssets.Resources.VirtualMachine.vmShutdownConfirmationMessage.format(this._vmDisplayName());
        };
        ShutdownCommand.prototype._addAppropriateConcatenator = function (shutDownMessage) {
            if (shutDownMessage !== "") {
                shutDownMessage = "{0}{1} ".format(shutDownMessage, ExtensionAssets.Resources.VirtualMachine.vmShutdownTextComma);
            }
            return shutDownMessage;
        };
        ShutdownCommand.prototype._onVMChange = function (vm) {
            _super.prototype._onVMChange.call(this, vm);
            this._vmDisplayName(vm.name());
        };
        ShutdownCommand.prototype.shutdownVirtualMachine = function (vm) {
            var _this = this;
            var originalState = vm.aggregatedVirtualMachineStatus(), operationPromise;
            // change the status to portal introduced status "portalVMStoppingStatus"
            vm.aggregatedVirtualMachineStatus(VMConstantsRef.VirtualMachineStatus.portalVMStoppingStatus);
            VMHelpersRef.setVMDeploymentLocked(vm, true);
            MsPortalFx.Data.DataSet.lockItem(vm, 1 /* Update */);
            // Make request
            operationPromise = OperationTrackerRef.longRunningVMOperation([this._virtualMachineEntityView], function () { return AjaxRef.shutdownVirtualMachine(vm.id()); }, this._canUnlockItem);
            operationPromise.then(function () {
                // set the vm status to running
                vm.aggregatedVirtualMachineStatus(VMConstantsRef.VirtualMachineStatus.Stopped);
            }, function () {
                // set status back to original value
                vm.aggregatedVirtualMachineStatus(originalState);
            }).finally(function () {
                // retrieve the VM's status
                _this._virtualMachineEntityView.refresh();
            });
            return ExtensionCore.UI.Notifications.createOperationNotification((MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceDescriptor(vm.id())).subscription, operationPromise, VMConstantsRef.General.ExtensionName, ConstantsRef.NotificationEventSource.ClassicComputeShutdownVM, [this._vmDisplayName()]);
        };
        return ShutdownCommand;
    })(ComputeCommandBaseViewModelRef.ComputeCommandBase);
    exports.ShutdownCommand = ShutdownCommand;
});
