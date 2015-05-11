var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("ClassicComputeExtension/Client/VirtualMachines/ViewModels/Adapter/CpuPercentageMetricsAdapterViewModel",
["require","exports","../../VirtualMachinesArea","./MetricsAdapterViewModel"],function(n,t,i,r){"use strict";
var u=function(n){function t(t,i,r){n.call(this,t,r);this.metricQuerySetting=ko.observable();this.assetName=
ko.observable();this.id=ko.observable()}return __extends(t,n),t.prototype.onInputsSet=function(n){if(
MsPortalFx.Base.Utilities.deepEquals(n.id,this.id()))return Q();this.id(n.id);var t=MsPortalFx.ViewModels.
Services.ResourceTypes.parseResourceDescriptor(this.id());return this.assetName(t.resource),this.metricQuerySetting(
{title:ClassicComputeExtension.ExtensionAssets.Resources.General.metricsPercentageCPU,timespan:{duration:
"PT24H",start:null,end:null},metrics:[{resourceId:this.id(),name:"Percentage CPU",timeGrain:"PT1H",displayName:
""}],chartType:0}),this._virtualMachineEntityView.fetch({resourceIds:[this.id()]})},t}(r.MetricsAdapterViewModel);
t.CpuPercentageMetricsAdapterViewModel=u})