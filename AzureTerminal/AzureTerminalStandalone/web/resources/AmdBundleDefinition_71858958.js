var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Commands/ConnectCommandViewModel",
["require","exports","../../../VirtualMachines/Utilities/Helpers","../../../VirtualMachines/Utilities/Constants",
"../../../Ajax/Ajax"],function(n,t,i,r,u){var f;return function(n){"use strict";var t=function(n){function t(
t,r,u,f){var e=this;n.call(this,f==null?!0:f);this.virtualMachine=ko.observable();this.id=ko.observable(
);this._canEnabledCommand=ko.observable(!1);this.icon(MsPortalFx.Base.Images.Connect());this.httpMethod(
"POST");this.enabled=ko.pureComputed(function(){var n=f==null?!0:e.authorizationToken()==null;return e.
virtualMachine()&&e.virtualMachine().hardwareProfile()&&e._canEnabledCommand()&&i.isWindowsVM(e.virtualMachine(
))&&i.getRemoteDesktopEndpoint(e.virtualMachine().networkProfile().inputEndpoints)&&n&&e.targetUri()}
);this.downloadStatus.subscribe(t,function(n){n&&n.status!=="success"?MsPortalFx.Base.Diagnostics.Log.
writeEntry(2,"Remote Desktop file","Download failed for subscription id {0}, resource group {1}, site {2}, using CSM Uri {3}".
format(e.virtualMachine().subscriptionId,e.virtualMachine().resourceGroupName,e.virtualMachine().name,
e.targetUri())):n&&n.status==="success"&&MsPortalFx.Base.Diagnostics.Log.writeEntry(0,"Remote Desktop file",
"Download failed for subscription id {0}, resource group {1}, site {2}, using CSM Uri {3}".format(e.
virtualMachine().subscriptionId,e.virtualMachine().resourceGroupName,e.virtualMachine().name,e.targetUri(
)))});this._virtualMachineEntityView=u.virtualMachinesData.VirtualMachineEntityCache.createView(t);this.
container=t}return __extends(t,n),t.prototype.onInputsSet=function(n){var t=this,f=$.Deferred();if(this.
targetUri(null),n.id&&!StringEx.equals(n.id,this.id(),0))this.id(n.id),this._canEnabledCommand(!1),this.
_virtualMachineEntityView.fetch({resourceIds:[this.id()]}).then(function(){t.virtualMachine(t._virtualMachineEntityView.
item());var n=i.getRemoteDesktopEndpoint(t.virtualMachine().networkProfile().inputEndpoints);n?u.getDownloadRdpUri(
t.id()).then(function(n){t.targetUri(n);t.targetFileName("{0}{1}".format(t.virtualMachine().name(),r.
VMFileExtensions.Rdp));t._canEnabledCommand(!0);f.resolve()},function(){f.reject()}):(t._canEnabledCommand(
!1),f.resolve())},function(){f.reject()});else return f.resolve();return f.promise()},t}(MsPortalFx.
ViewModels.FileDownloadCommand);n.DownloadRdpCommand=t}(f||(f={})),f})