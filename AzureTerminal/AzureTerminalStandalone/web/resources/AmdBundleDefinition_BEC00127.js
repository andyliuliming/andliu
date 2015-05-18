var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Adapter/DiskReadWriteMetricsAdapterViewModel",
["require","exports","../../VirtualMachinesArea","./MetricsAdapterViewModel"],function(n,t,i,r){var u;
return function(n){"use strict";var t=function(n){function t(t,i,r){n.call(this,t,r);this.metricQueryDiskReadWriteSetting=
ko.observable();this.assetName=ko.observable();this.id=ko.observable()}return __extends(t,n),t.prototype.
onInputsSet=function(n){if(!MsPortalFx.Base.Utilities.deepEquals(n.id,this.id())){this.id(n.id);var t=
MsPortalFx.ViewModels.Services.ResourceTypes.parseResourceDescriptor(this.id());return this.assetName(
t.resource),this.metricQueryDiskReadWriteSetting({title:ClassicComputeExtension.ExtensionAssets.Resources.
General.metricsDiskReadWrite,timespan:{duration:"PT24H",start:null,end:null},metrics:[{resourceId:this.
id(),name:"Disk Read Bytes/sec",timeGrain:"PT1H",displayName:""},{resourceId:this.id(),name:"Disk Write Bytes/sec",
timeGrain:"PT1H",displayName:""}]}),this._virtualMachineEntityView.fetch({resourceIds:[this.id()]})}
return Q()},t}(r.MetricsAdapterViewModel);n.DiskReadWriteMetricsAdapterViewModel=t}(u||(u={})),u})