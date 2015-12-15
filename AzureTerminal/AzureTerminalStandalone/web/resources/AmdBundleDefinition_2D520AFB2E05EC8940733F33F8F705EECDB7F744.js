var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/HubsExtension",["require",
"exports","./HubsCommon","./_generated/ExtensionDefinition","./_generated/ViewModelFactories","./Common/HubsObservables",
"./Common/HubsPermissions","./Common/UserSettingsHelper","./Store/DeploymentManager","./Store/CreateLauncher",
"./Notifications/NotificationsArea","./SpecPicker/SpecsCostsClient","./ResourceMap/ResourceMapCommon",
"./ResourceMap/ResourceMapViewModelFactories","./Gallery/GalleryViewModelFactories","./Help/HelpViewModelFactories",
"./Tags/TagsViewModelFactories","./Diagnostics/DiagnosticsViewModelFactories"],function(n,t,i,r,u,f,
e,o,s,h,c,l,a,v,y,p,w,b){var nt=MsPortalFx.Base.Rpc.Internal,g=MsPortalFx.Internal.Constants.RpcMethods,
k=MsPortalFx.Services.Rpc,d;return function(t){"use strict";function rt(){k.registerCallback("getSpecsCosts",
function(n){return l.getSpecsCosts(n)});k.registerCallback("getResourcesInResourceGroup",function(n)
{return a.ResourceControllerClient.getResourcesInResourceGroup(n)});k.registerCallback("getSubscriptionInfo",
function(n){return f.getSubscriptionInfo(n)})}function tt(n){n||(n=nt.client);n.registerObjectFactory(
g.azureResrouceManagerDeployTemplate,{allowedOrigin:null,allowRemoteChanges:!0,handler:function(n){var
t=s.deployTemplate(n);return Q.resolve(ko.observable(t))}});n.registerObjectFactory(g.azureResrouceManagerPollForDeployment,
{allowedOrigin:null,allowRemoteChanges:!0,handler:function(n){var t=s.pollForDeployment(n);return Q.
resolve(ko.observable(t))}})}function ut(){return new d}var ft=window,it=function(t){function i(){t.
call(this);this._galleryFactories=new y.ViewModelFactories;this._helpFactories=new p.ViewModelFactories;
this._tagsFactories=new w.ViewModelFactories;this._diagnosticFactories=new b.ViewModelFactories;var i=
new c.DataContext;this.Notifications().setDataContext(i);this._resourceMapFactories=new v.ViewModelFactories(
i);this.Settings().setDataContextFactory("./HubsExtension/Settings/SettingsArea",function(n){return new
n.DataContext});this.Browse().setDataContextFactory("./Browse/BrowseArea",function(n){return new n.DataContext}
,n);this.BrowseResource().setDataContextFactory("./BrowseResource/BrowseResourceArea",function(n){return new
n.DataContext},n);this.ServicesHealth().setDataContextFactory("./ServicesHealth/ServicesHealthArea",
function(n){return new n.DataContext},n);this.Pickers().setDataContextFactory("./Pickers/PickersArea",
function(n){return new n.DataContext},n);this.SpecPicker().setDataContextFactory("./SpecPicker/SpecPickerArea",
function(n){return new n.DataContext},n);this.SpecPickerV3().setDataContextFactory("./SpecPickerV3/SpecPickerV3Area",
function(n){return new n.DataContext},n);this.ClassicAdmins().setDataContextFactory("./ClassicAdmins/ClassicAdminsArea",
function(n){return n.ManagementTeamDataContextFactory.getManagementTeamDataContext()},n);this.SubscriptionsFilter(
).setDataContextFactory("./SubscriptionsFilter/SubscriptionsFilterArea",function(n){return new n.DataContext}
,n);this.Locations().setDataContextFactory("./Locations/LocationsArea",function(n){return new n.DataContext}
,n);this.Deployments().setDataContextFactory("./Deployments/DeploymentsArea",function(n){return new n.
DataContext},n);this.SetResourceMapViewModelFactories(this._resourceMapFactories);this.SetGalleryViewModelFactories(
this._galleryFactories);this.SetHelpViewModelFactories(this._helpFactories);this.SetTagsViewModelFactories(
this._tagsFactories)}return __extends(i,t),i.prototype.ResourceMap$ResourceMapProviderViewModel=function(
n,t){return this._resourceMapFactories.ResourceMap$ResourceMapProviderViewModel(n,t)},i.prototype.Diagnostics$HubsDiagnosticsProviderViewModel=
function(){return this._diagnosticFactories.Diagnostics$HubsDiagnosticsProviderViewModel()},i.prototype.
CreateActivityPaneItems=function(){return this._galleryFactories.CreateActivityPaneItems()},i.prototype.
CsmDeployment=function(){return this._galleryFactories.CsmDeployment()},i.prototype.DeploymentStatusPoller=
function(){return this._galleryFactories.DeploymentStatusPoller()},i.prototype.GalleryItemLoader=function(
){return this._galleryFactories.GalleryItemLoader()},i.prototype.Help$HasSubscriptionViewModel=function(
n,t){return this._helpFactories.HasSubscriptionViewModel(n,t)},i}(u.ViewModelFactoriesBase),d;t.registersRpcObjectFactories=
tt;d=function(n){function t(){n.apply(this,arguments)}return __extends(t,n),t.prototype.initialize=function(
){MsPortalFx.Base.Diagnostics.Telemetry.initialize(i.extensionName,!1);o.UserSettingsHelper.initialize(
);f.initializeObservables();e.initialize();this.viewModelFactories=new it;rt();tt();f.createRegisteredAssetTypeCache(
);h.CreateLauncherFactory.create()},t.prototype.getDefinition=function(){return r.getDefinition()},t.
prototype.getObservable=function(n){for(var i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];return f.
getObservable(n,i)},t}(MsPortalFx.Extension.EntryPointBase);t.EntryPoint=d;t.create=ut}(d||(d={})),d}
);__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/_generated/ViewModelFactories",
["require","exports"],function(n){var t;return function(t){var k=function(t){function i(){t.apply(this,
arguments)}return __extends(i,t),i.prototype.ProvisioningPart=function(t,i){var r=this;return this.loadViewModelAsync(
"../Store/ViewModels/Parts/ProvisioningPart",function(n){return new n.ProvisioningPart(t,i,r.dataContext)}
,n)},i}(MsPortalFx.Internal.Extension.ViewModelAreaFactoriesBase),i,r,u,f,e,o,s,h,c,l,a,v,y,p,w,b,d;
t.StoreViewModelFactoriesBase=k;i=function(t){function i(){t.apply(this,arguments)}return __extends(
i,t),i.prototype.ResourceTagsCollectionPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../Tags/ViewModels/Parts/ResourceTagsCollectionPartViewModel",function(n){return new n.ResourceTagsCollectionPartViewModel(
t,i,r.dataContext)},n)},i.prototype.ResourcesWithTagBladeViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../Tags/ViewModels/Blades/ResourcesWithTagBladeViewModel",function(n){return new
n.ResourcesWithTagBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ResourcesWithTagListPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Tags/ViewModels/Parts/ResourcesWithTagListPartViewModel",
function(n){return new n.ResourcesWithTagListPartViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceTagsListBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Tags/ViewModels/Blades/ResourceTagsListBladeViewModel",
function(n){return new n.ResourceTagsListBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceTagsListPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Tags/ViewModels/Parts/ResourceTagsListPartViewModel",
function(n){return new n.ResourceTagsListPartViewModel(t,i,r.dataContext)},n)},i.prototype.SaveTagCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Tags/ViewModels/Blades/ResourceTagsListBladeViewModel",
function(n){return new n.SaveTagCommandViewModel(t,i,r.dataContext)},n)},i.prototype.DeleteTagCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Tags/ViewModels/Commands/DeleteTagCommandViewModel",
function(n){return new n.DeleteTagCommandViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.
ViewModelAreaFactoriesBase);t.TagsViewModelFactoriesBase=i;r=function(t){function i(){t.apply(this,arguments)}
return __extends(i,t),i.prototype.ResourceFilterPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../SubscriptionsFilter/ViewModels/ResourceFilterPartViewModel",function(n){return new n.ResourceFilterPartViewModel(
t,i,r.dataContext)},n)},i.prototype.SubscriptionPickerV3BladeViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../SubscriptionsFilter/ViewModels/SubscriptionPickerV3BladeViewModel",function(n)
{return new n.SubscriptionPickerV3BladeViewModel(t,i,r.dataContext)},n)},i.prototype.SubscriptionPickerV3PartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../SubscriptionsFilter/ViewModels/SubscriptionPickerV3PartViewModel",
function(n){return new n.SubscriptionPickerV3PartViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.SubscriptionsFilterViewModelFactoriesBase=r;u=function(t){function i(
){t.apply(this,arguments)}return __extends(i,t),i.prototype.PricingTierLauncherPartViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../SpecPickerV3/ViewModels/PricingTierLauncherPartViewModel",
function(n){return new n.PricingTierLauncherPartViewModel(t,i,r.dataContext)},n)},i.prototype.SpecPickerBrowseAllPart=
function(t,i){var r=this;return this.loadViewModelAsync("../SpecPickerV3/ViewModels/SpecPickerBrowseAllPart",
function(n){return new n.SpecPickerBrowseAllPart(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.
ViewModelAreaFactoriesBase);t.SpecPickerV3ViewModelFactoriesBase=u;f=function(t){function i(){t.apply(
this,arguments)}return __extends(i,t),i.prototype.SettingsBladePartViewModel=function(t,i){var r=this;
return this.loadViewModelAsync("../Settings/ViewModels/Parts/SettingsBladePartViewModel",function(n)
{return new n.SettingsBladePartViewModel(t,i,r.dataContext)},n)},i.prototype.SettingsBladeViewModel=
function(){throw new Error("Method 'SettingsBladeViewModel' not implemented");},i.prototype.SettingsBlade$SettingsPartViewModel=
function(){throw new Error("Method 'SettingsBlade$SettingsPartViewModel' not implemented");},i.prototype.
LanguageSelectionBladeViewModel=function(){throw new Error("Method 'LanguageSelectionBladeViewModel' not implemented");
},i.prototype.LanguageSelectionBlade$LanguageGridViewModel=function(){throw new Error("Method 'LanguageSelectionBlade$LanguageGridViewModel' not implemented");
},i.prototype.LocaleSelectionBladeViewModel=function(){throw new Error("Method 'LocaleSelectionBladeViewModel' not implemented");
},i.prototype.LocaleSelectionBlade$LocaleGridViewModel=function(){throw new Error("Method 'LocaleSelectionBlade$LocaleGridViewModel' not implemented");
},i}(MsPortalFx.Internal.Extension.ViewModelAreaFactoriesBase);t.SettingsViewModelFactoriesBase=f;e=
function(t){function i(){t.apply(this,arguments)}return __extends(i,t),i.prototype.ResourceMapPartViewModel=
function(){throw new Error("Method 'ResourceMapPartViewModel' not implemented");},i.prototype.ResourceMapRefreshCommandViewModel=
function(){throw new Error("Method 'ResourceMapRefreshCommandViewModel' not implemented");},i.prototype.
ResourceMapPinnedPartViewModel=function(){throw new Error("Method 'ResourceMapPinnedPartViewModel' not implemented");
},i.prototype.ResourceListPinnedPartViewModel=function(){throw new Error("Method 'ResourceListPinnedPartViewModel' not implemented");
},i.prototype.DeploymentsPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/DeploymentsPartViewModel",
function(n){return new n.DeploymentsPartViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceGroupMapPartViewModel=
function(){throw new Error("Method 'ResourceGroupMapPartViewModel' not implemented");},i.prototype.ResourceGroupMapPinnedPartViewModel=
function(){throw new Error("Method 'ResourceGroupMapPinnedPartViewModel' not implemented");},i.prototype.
ResourceGroupListPinnedPartViewModel=function(){throw new Error("Method 'ResourceGroupListPinnedPartViewModel' not implemented");
},i.prototype.ResourceGroupEventsPinnedPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../ResourceMap/ViewModels/ResourceGroupEventsPinnedPartViewModel",function(n){return new n.ResourceGroupEventsPinnedPartViewModel(
t,i,r.dataContext)},n)},i.prototype.ResourceMapBladeViewModel=function(){throw new Error("Method 'ResourceMapBladeViewModel' not implemented");
},i.prototype.ResourceListBladeViewModel=function(){throw new Error("Method 'ResourceListBladeViewModel' not implemented");
},i.prototype.ResourceListPartViewModel=function(){throw new Error("Method 'ResourceListPartViewModel' not implemented");
},i.prototype.DeploymentsListBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../ResourceMap/ViewModels/DeploymentsListBladeViewModel",function(n){return new n.DeploymentsListBladeViewModel(
t,i,r.dataContext)},n)},i.prototype.DeploymentsListPartViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../ResourceMap/ViewModels/DeploymentsListPartViewModel",function(n){return new n.
DeploymentsListPartViewModel(t,i,r.dataContext)},n)},i.prototype.DeploymentDetailsBladeViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/DeploymentDetailsBladeViewModel",
function(n){return new n.DeploymentDetailsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.DeploymentSummaryDetailsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/DeploymentDetailsPartViewModel",
function(n){return new n.DeploymentSummaryDetailsPartViewModel(t,i,r.dataContext)},n)},i.prototype.DeploymentOutputsDetailsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/DeploymentDetailsPartViewModel",
function(n){return new n.DeploymentOutputsDetailsPartViewModel(t,i,r.dataContext)},n)},i.prototype.DeploymentInputsDetailsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/DeploymentDetailsPartViewModel",
function(n){return new n.DeploymentInputsDetailsPartViewModel(t,i,r.dataContext)},n)},i.prototype.DeploymentOperationsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/DeploymentOperationsPartViewModel",
function(n){return new n.DeploymentOperationsPartViewModel(t,i,r.dataContext)},n)},i.prototype.DeploymentDeleteCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/DeploymentDeleteCommandViewModel",
function(n){return new n.DeploymentDeleteCommandViewModel(t,i,r.dataContext)},n)},i.prototype.DeploymentOperationPropertiesBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/DeploymentOperationPropertiesViewModels",
function(n){return new n.DeploymentOperationPropertiesBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
DeploymentOperationPropertiesPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/DeploymentOperationPropertiesViewModels",
function(n){return new n.DeploymentOperationPropertiesPartViewModel(t,i,r.dataContext)},n)},i.prototype.
ResourceGroupMapBladeViewModel=function(){throw new Error("Method 'ResourceGroupMapBladeViewModel' not implemented");
},i.prototype.ResourceGroupSummaryViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../ResourceMap/ViewModels/ResourceGroupBladeViewModels",function(n){return new n.ResourceGroupSummaryViewModel(
t,i,r.dataContext)},n)},i.prototype.ResourceGroupQuickStartBladeViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../ResourceMap/ViewModels/ResourceGroupBladeViewModels",function(n){return new n.
ResourceGroupQuickStartBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceGroupQuickStartPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/ResourceGroupBladeViewModels",
function(n){return new n.ResourceGroupQuickStartPartViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceGroupPropertiesBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/ResourceGroupBladeViewModels",
function(n){return new n.ResourceGroupPropertiesBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceGroupPropertiesPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/ResourceGroupBladeViewModels",
function(n){return new n.ResourceGroupPropertiesPartViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceGroupListBladeViewModel=
function(){throw new Error("Method 'ResourceGroupListBladeViewModel' not implemented");},i.prototype.
ResourceGroupListPartViewModel=function(){throw new Error("Method 'ResourceGroupListPartViewModel' not implemented");
},i.prototype.ResourceGroupEventsBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../ResourceMap/ViewModels/ResourceGroupEventsBladeViewModel",function(n){return new n.ResourceGroupEventsBladeViewModel(
t,i,r.dataContext)},n)},i.prototype.ResourceGroupDeleteBladeViewModel=function(){throw new Error("Method 'ResourceGroupDeleteBladeViewModel' not implemented");
},i.prototype.ResourceGroupDeleteActionBarViewModel=function(){throw new Error("Method 'ResourceGroupDeleteActionBarViewModel' not implemented");
},i.prototype.ResourceGroupDeleteWarningPartViewModel=function(){throw new Error("Method 'ResourceGroupDeleteWarningPartViewModel' not implemented");
},i.prototype.ResourceGroupDeleteListPartViewModel=function(){throw new Error("Method 'ResourceGroupDeleteListPartViewModel' not implemented");
},i.prototype.ResourceGroupSettingListBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../ResourceMap/ViewModels/ResourceGroupBladeViewModels",function(n){return new n.ResourceGroupSettingListBladeViewModel(
t,i,r.dataContext)},n)},i.prototype.ResourceGroupSettingListPartViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../ResourceMap/ViewModels/ResourceGroupBladeViewModels",function(n){return new n.
ResourceGroupSettingListPartViewModel(t,i,r.dataContext)},n)},i.prototype.AddResourceCommandViewModel=
function(){throw new Error("Method 'AddResourceCommandViewModel' not implemented");},i.prototype.ResourceGroupSettingListCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/ViewModels/ResourceGroupSettingListCommandViewModel",
function(n){return new n.ResourceGroupSettingListCommandViewModel(t,i,r.dataContext)},n)},i.prototype.
ResourceGroupDeleteCommandViewModel=function(){throw new Error("Method 'ResourceGroupDeleteCommandViewModel' not implemented");
},i.prototype.ResourceGroupsGridColumnsService=function(t,i){var r=this;return this.loadViewModelAsync(
"../ResourceMap/Services/ResourceGroupsGridColumnsService",function(n){return new n.ResourceGroupsGridColumnsService(
t,i,r.dataContext)},n)},i.prototype.ResourceGroupsPropertyProviderService=function(){throw new Error(
"Method 'ResourceGroupsPropertyProviderService' not implemented");},i.prototype.ResourceGroupsResourceTypeService=
function(t,i){var r=this;return this.loadViewModelAsync("../ResourceMap/Services/ResourceGroupsResourceTypeService",
function(n){return new n.ResourceGroupsResourceTypeService(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.ResourceMapViewModelFactoriesBase=e;o=function(t){function i(
){t.apply(this,arguments)}return __extends(i,t),i.prototype.ManagementTeamSummaryViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../ClassicAdmins/ViewModels/ManagementTeamSummaryViewModel",
function(n){return new n.ManagementTeamSummaryViewModel(t,i,r.dataContext)},n)},i.prototype.ManagementTeamBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ClassicAdmins/ViewModels/ManagementTeamBladeViewModel",
function(n){return new n.ManagementTeamBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ManagementTeamMembersPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ClassicAdmins/ViewModels/ManagementTeamMembersPartViewModel",
function(n){return new n.ManagementTeamMembersPartViewModel(t,i,r.dataContext)},n)},i.prototype.ManageUsersCommand=
function(t,i){var r=this;return this.loadViewModelAsync("../ClassicAdmins/Commands/ManageUsersCommand",
function(n){return new n.ManageUsersCommand(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.
ViewModelAreaFactoriesBase);t.ClassicAdminsViewModelFactoriesBase=o;s=function(t){function i(){t.apply(
this,arguments)}return __extends(i,t),i.prototype.PricingTierLauncherPartViewModel=function(t,i){var
r=this;return this.loadViewModelAsync("../SpecPicker/ViewModels/PricingTierLauncherPartViewModel",function(
n){return new n.PricingTierLauncherPartViewModel(t,i,r.dataContext)},n)},i.prototype.SpecPickerBrowseAllPart=
function(t,i){var r=this;return this.loadViewModelAsync("../SpecPicker/ViewModels/SpecPickerBrowseAllPart",
function(n){return new n.SpecPickerBrowseAllPart(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.
ViewModelAreaFactoriesBase);t.SpecPickerViewModelFactoriesBase=s;h=function(t){function i(){t.apply(
this,arguments)}return __extends(i,t),i.prototype.ServicesHealthPartViewModel=function(t,i){var r=this;
return this.loadViewModelAsync("../ServicesHealth/ViewModels/Parts/ServicesHealthPartViewModel",function(
n){return new n.ServicesHealthPartViewModel(t,i,r.dataContext)},n)},i.prototype.ServicesPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Parts/ServicesPartViewModel",
function(n){return new n.ServicesPartViewModel(t,i,r.dataContext)},n)},i.prototype.ServicePartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Parts/ServicePartViewModel",
function(n){return new n.ServicePartViewModel(t,i,r.dataContext)},n)},i.prototype.ServiceRegionPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Parts/ServiceRegionPartViewModel",
function(n){return new n.ServiceRegionPartViewModel(t,i,r.dataContext)},n)},i.prototype.ServicesBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Blades/ServicesBladeViewModel",
function(n){return new n.ServicesBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ServicesBladePartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Parts/ServicesBladePartViewModel",
function(n){return new n.ServicesBladePartViewModel(t,i,r.dataContext)},n)},i.prototype.ServiceBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Blades/ServiceBladeViewModel",
function(n){return new n.ServiceBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ServiceBladePartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Parts/ServiceBladePartViewModel",
function(n){return new n.ServiceBladePartViewModel(t,i,r.dataContext)},n)},i.prototype.ServiceRegionBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Blades/ServiceRegionBladeViewModel",
function(n){return new n.ServiceRegionBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ServiceRegionBladePartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Parts/ServiceRegionBladePartViewModel",
function(n){return new n.ServiceRegionBladePartViewModel(t,i,r.dataContext)},n)},i.prototype.ServiceHealthListBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Blades/ServiceHealthListBladeViewModel",
function(n){return new n.ServiceHealthListBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ServiceHealthListPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Parts/ServiceHealthListPartViewModel",
function(n){return new n.ServiceHealthListPartViewModel(t,i,r.dataContext)},n)},i.prototype.PublicShdUriCommandViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../ServicesHealth/ViewModels/Commands/PublicShdUriCommandViewModel",
function(n){return new n.PublicShdUriCommandViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.ServicesHealthViewModelFactoriesBase=h;c=function(t){function i(
){t.apply(this,arguments)}return __extends(i,t),i.prototype.FeedbackTileViewModel=function(t,i){var r=
this;return this.loadViewModelAsync("../Help/ViewModels/FeedbackTileViewModel",function(n){return new
n.FeedbackTileViewModel(t,i,r.dataContext)},n)},i.prototype.AzurePortalTileViewModel=function(t,i){var
r=this;return this.loadViewModelAsync("../Help/ViewModels/AzurePortalTileViewModel",function(n){return new
n.AzurePortalTileViewModel(t,i,r.dataContext)},n)},i.prototype.WhatsNewTileViewModel=function(t,i){var
r=this;return this.loadViewModelAsync("../Help/ViewModels/WhatsNewTileViewModel",function(n){return new
n.WhatsNewTileViewModel(t,i,r.dataContext)},n)},i.prototype.HelpAndSupportPartViewModel=function(t,i)
{var r=this;return this.loadViewModelAsync("../Help/ViewModels/HelpAndSupportPartViewModel",function(
n){return new n.HelpAndSupportPartViewModel(t,i,r.dataContext)},n)},i.prototype.NoSubscriptionsStartPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/NoSubscriptionsStartPartViewModel",
function(n){return new n.NoSubscriptionsStartPartViewModel(t,i,r.dataContext)},n)},i.prototype.NoMsdnOfferOnSubscriptionsStartPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/NoMsdnOfferOnSubscriptionsStartPartViewModel",
function(n){return new n.NoMsdnOfferOnSubscriptionsStartPartViewModel(t,i,r.dataContext)},n)},i.prototype.
TourTileViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/TourTileViewModel",
function(n){return new n.TourTileViewModel(t,i,r.dataContext)},n)},i.prototype.HelpTileViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/HelpTileViewModel",function(n){return new
n.HelpTileViewModel(t,i,r.dataContext)},n)},i.prototype.WhatsNewBladeViewModel=function(t,i){var r=this;
return this.loadViewModelAsync("../Help/ViewModels/WhatsNewBladeViewModel",function(n){return new n.
WhatsNewBladeViewModel(t,i,r.dataContext)},n)},i.prototype.WhatsNewDetailsViewModel=function(t,i){var
r=this;return this.loadViewModelAsync("../Help/ViewModels/WhatsNewDetailsViewModel",function(n){return new
n.WhatsNewDetailsViewModel(t,i,r.dataContext)},n)},i.prototype.HelpAndSupportBladeViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/HelpAndSupportBladeViewModel",function(
n){return new n.HelpAndSupportBladeViewModel(t,i,r.dataContext)},n)},i.prototype.HelpAndSupportBlade$DiagnosticsPartViewModel=
function(){throw new Error("Method 'HelpAndSupportBlade$DiagnosticsPartViewModel' not implemented");
},i.prototype.DocsPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/DocsPartViewModel",
function(n){return new n.DocsPartViewModel(t,i,r.dataContext)},n)},i.prototype.MsdnPartViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/MsdnPartViewModel",function(n){return new
n.MsdnPartViewModel(t,i,r.dataContext)},n)},i.prototype.StackOverflowPartViewModel=function(t,i){var
r=this;return this.loadViewModelAsync("../Help/ViewModels/StackOverflowPartViewModel",function(n){return new
n.StackOverflowPartViewModel(t,i,r.dataContext)},n)},i.prototype.Channel9PartViewModel=function(t,i)
{var r=this;return this.loadViewModelAsync("../Help/ViewModels/Channel9PartViewModel",function(n){return new
n.Channel9PartViewModel(t,i,r.dataContext)},n)},i.prototype.NewSupportRequestCommandViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/NewSupportRequestCommandViewModel",
function(n){return new n.NewSupportRequestCommandViewModel(t,i,r.dataContext)},n)},i.prototype.NoSubscriptionsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/NoSubscriptionsBladeViewModel",
function(n){return new n.NoSubscriptionsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.NoSubscriptionsContentPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/NoSubscriptionsBladeViewModel",
function(n){return new n.NoSubscriptionsContentPartViewModel(t,i,r.dataContext)},n)},i.prototype.NoMsdnOfferOnSubscriptionsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/NoMsdnOfferOnSubscriptionsBladeViewModel",
function(n){return new n.NoMsdnOfferOnSubscriptionsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
NoMsdnOfferOnSubscriptionsContentPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../Help/ViewModels/NoMsdnOfferOnSubscriptionsBladeViewModel",function(n){return new n.NoMsdnOfferOnSubscriptionsContentPartViewModel(
t,i,r.dataContext)},n)},i.prototype.TourBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../Help/ViewModels/TourBladeViewModel",function(n){return new n.TourBladeViewModel(t,i,r.dataContext)}
,n)},i.prototype.TourDetailsViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/TourDetailsViewModel",
function(n){return new n.TourDetailsViewModel(t,i,r.dataContext)},n)},i.prototype.TourBladesBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/TourBladesBladeViewModel",
function(n){return new n.TourBladesBladeViewModel(t,i,r.dataContext)},n)},i.prototype.TourBladesDetailsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/TourBladesDetailsViewModel",
function(n){return new n.TourBladesDetailsViewModel(t,i,r.dataContext)},n)},i.prototype.TourCustomizingBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/TourCustomizingBladeViewModel",
function(n){return new n.TourCustomizingBladeViewModel(t,i,r.dataContext)},n)},i.prototype.TourCustomizingDetailsViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/TourCustomizingDetailsViewModel",
function(n){return new n.TourCustomizingDetailsViewModel(t,i,r.dataContext)},n)},i.prototype.HelpBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/HelpBladeViewModel",function(
n){return new n.HelpBladeViewModel(t,i,r.dataContext)},n)},i.prototype.HelpDetailsViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Help/ViewModels/HelpDetailsViewModel",function(n)
{return new n.HelpDetailsViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.ViewModelAreaFactoriesBase);
t.HelpViewModelFactoriesBase=c;l=function(t){function i(){t.apply(this,arguments)}return __extends(i,
t),i.prototype.GalleryTileViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryTileViewModel",
function(n){return new n.GalleryTileViewModel(t,i,r.dataContext)},n)},i.prototype.StoreGalleryTileViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryTileViewModel",
function(n){return new n.StoreGalleryTileViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryTemporaryTileViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryTileViewModel",
function(n){return new n.GalleryTemporaryTileViewModel(t,i,r.dataContext)},n)},i.prototype.ProvisionerPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/ProvisionerPartViewModel",
function(n){return new n.ProvisionerPartViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryLaunchCreateFailedStartPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryLaunchCreateFailedPartViewModel",
function(n){return new n.GalleryLaunchCreateFailedStartPartViewModel(t,i,r.dataContext)},n)},i.prototype.
GalleryLauncherPartViewModel=function(){throw new Error("Method 'GalleryLauncherPartViewModel' not implemented");
},i.prototype.GalleryMenuBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/GalleryMenuBladeViewModel",
function(n){return new n.GalleryMenuBladeViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryMenuPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryMenuPartViewModel",
function(n){return new n.GalleryMenuPartViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryFeaturedMenuItemBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/GalleryFeaturedMenuItemBladeViewModel",
function(n){return new n.GalleryFeaturedMenuItemBladeViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryFeaturedMenuItemPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryFeaturedMenuItemPartViewModel",
function(n){return new n.GalleryFeaturedMenuItemPartViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryItemDetailsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/GalleryItemDetailsBladeViewModel",
function(n){return new n.GalleryItemDetailsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryItemDetailsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryItemDetailsPartViewModel",
function(n){return new n.GalleryItemDetailsPartViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryItemPropertiesPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryItemPropertiesPartViewModel",
function(n){return new n.GalleryItemPropertiesPartViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryResultsListBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/GalleryResultsListBladeViewModel",
function(n){return new n.GalleryResultsListBladeViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryResultsListPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryResultsListPartViewModel",
function(n){return new n.GalleryResultsListPartViewModel(t,i,r.dataContext)},n)},i.prototype.PCGalleryResultsListBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/GalleryResultsListBladeViewModel",
function(n){return new n.PCGalleryResultsListBladeViewModel(t,i,r.dataContext)},n)},i.prototype.PCGalleryResultsListPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/PCGalleryResultsListPartViewModel",
function(n){return new n.PCGalleryResultsListPartViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryLaunchCreateFailedBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/GalleryLaunchCreateFailedBladeViewModel",
function(n){return new n.GalleryLaunchCreateFailedBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
GalleryLaunchCreateFailedPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryLaunchCreateFailedPartViewModel",
function(n){return new n.GalleryLaunchCreateFailedPartViewModel(t,i,r.dataContext)},n)},i.prototype.
PricingSummaryBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/PricingSummaryBladeViewModel",
function(n){return new n.PricingSummaryBladeViewModel(t,i,r.dataContext)},n)},i.prototype.PricingSummaryPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/PricingSummaryPartViewModel",
function(n){return new n.PricingSummaryPartViewModel(t,i,r.dataContext)},n)},i.prototype.LegalTermsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/LegalTermsBladeViewModel",
function(n){return new n.LegalTermsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.LegalTermsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/LegalTermsPartViewModel",
function(n){return new n.LegalTermsPartViewModel(t,i,r.dataContext)},n)},i.prototype.LegalTermsDetailsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/LegalTermsDetailsBladeViewModel",
function(n){return new n.LegalTermsDetailsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.LegalTermsDetailsPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/LegalTermsDetailsPartViewModel",
function(n){return new n.LegalTermsDetailsPartViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryCreateBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/GalleryCreateBladeViewModel",
function(n){return new n.GalleryCreateBladeViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryCreateMenuPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryCreateMenuPartViewModel",
function(n){return new n.GalleryCreateMenuPartViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryCreateMenuResultsListBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/GalleryCreateMenuResultsListBladeViewModel",
function(n){return new n.GalleryCreateMenuResultsListBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
GalleryCreateMenuResultsListPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryCreateMenuResultsListPartViewModel",
function(n){return new n.GalleryCreateMenuResultsListPartViewModel(t,i,r.dataContext)},n)},i.prototype.
GalleryCreateComingSoonBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/GalleryCreateComingSoonBladeViewModel",
function(n){return new n.GalleryCreateComingSoonBladeViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryCreateComingSoonPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryCreateComingSoonPartViewModel",
function(n){return new n.GalleryCreateComingSoonPartViewModel(t,i,r.dataContext)},n)},i.prototype.GalleryCreateSubscriptionBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Blades/GalleryCreateSubscriptionBladeViewModel",
function(n){return new n.GalleryCreateSubscriptionBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
GalleryCreateSubscriptionPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Gallery/ViewModels/Parts/GalleryCreateSubscriptionPartViewModel",
function(n){return new n.GalleryCreateSubscriptionPartViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.
Internal.Extension.ViewModelAreaFactoriesBase);t.GalleryViewModelFactoriesBase=l;a=function(t){function i(
){t.apply(this,arguments)}return __extends(i,t),i.prototype.BrowsePinnedPartViewModel=function(t,i){
var r=this;return this.loadViewModelAsync("../BrowseResource/ViewModels/BrowsePinnedPartViewModel",function(
n){return new n.BrowsePinnedPartViewModel(t,i,r.dataContext)},n)},i.prototype.BrowseResourceListPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../BrowseResource/ViewModels/Resource/BrowseResourceListPartViewModel",
function(n){return new n.BrowseResourceListPartViewModel(t,i,r.dataContext)},n)},i.prototype.BrowseResourceGroupListPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../BrowseResource/ViewModels/ResourceGroup/BrowseResourceGroupListPartViewModel",
function(n){return new n.BrowseResourceGroupListPartViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceGroupPickerV3BladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../BrowseResource/ViewModels/ResourceGroup/ResourceGroupPickerV3BladeViewModel",
function(n){return new n.ResourceGroupPickerV3BladeViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceGroupPickerV3PartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../BrowseResource/ViewModels/ResourceGroup/ResourceGroupPickerV3PartViewModel",
function(n){return new n.ResourceGroupPickerV3PartViewModel(t,i,r.dataContext)},n)},i.prototype.BrowseResourceBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../BrowseResource/ViewModels/Resource/BrowseResourceBladeViewModel",
function(n){return new n.BrowseResourceBladeViewModel(t,i,r.dataContext)},n)},i.prototype.BrowseResourceGroupBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../BrowseResource/ViewModels/ResourceGroup/BrowseResourceGroupBladeViewModel",
function(n){return new n.BrowseResourceGroupBladeViewModel(t,i,r.dataContext)},n)},i.prototype.BrowseResourceSettingsBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../BrowseResource/ViewModels/Resource/BrowseResourceSettingsBladeViewModel",
function(n){return new n.BrowseResourceSettingsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.BrowseResourceSettingsActionBarViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../BrowseResource/ViewModels/Resource/BrowseResourceSettingsActionBarViewModel",
function(n){return new n.BrowseResourceSettingsActionBarViewModel(t,i,r.dataContext)},n)},i.prototype.
BrowseResourceColumnsListPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../BrowseResource/ViewModels/Resource/BrowseResourceColumnsListPartViewModel",
function(n){return new n.BrowseResourceColumnsListPartViewModel(t,i,r.dataContext)},n)},i.prototype.
BrowseResourceChooseColumnsCommandViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../BrowseResource/ViewModels/Resource/BrowseResourceChooseColumnsCommandViewModel",function(n){return new
n.BrowseResourceChooseColumnsCommandViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.
ViewModelAreaFactoriesBase);t.BrowseResourceViewModelFactoriesBase=a;v=function(t){function i(){t.apply(
this,arguments)}return __extends(i,t),i.prototype.NotificationsTileViewModel=function(){throw new Error(
"Method 'NotificationsTileViewModel' not implemented");},i.prototype.NotificationsBladeViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Notifications/ViewModels/NotificationsBladeViewModel",
function(n){return new n.NotificationsBladeViewModel(t,i,r.dataContext)},n)},i.prototype.NotificationsBlade$NotificationsListViewModel=
function(){throw new Error("Method 'NotificationsBlade$NotificationsListViewModel' not implemented");
},i.prototype.NotificationsGridColumnsService=function(t,i){var r=this;return this.loadViewModelAsync(
"../Notifications/Services/NotificationsGridColumnsService",function(n){return new n.NotificationsGridColumnsService(
t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.Extension.ViewModelAreaFactoriesBase);t.NotificationsViewModelFactoriesBase=
v;y=function(t){function i(){t.apply(this,arguments)}return __extends(i,t),i.prototype.BrowseAllTileViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Browse/ViewModels/BrowseAllTileViewModel",
function(n){return new n.BrowseAllTileViewModel(t,i,r.dataContext)},n)},i.prototype.BrowseAllBlade$ServicesListPartViewModel=
function(){throw new Error("Method 'BrowseAllBlade$ServicesListPartViewModel' not implemented");},i.
prototype.BrowseServiceTileViewModel=function(){throw new Error("Method 'BrowseServiceTileViewModel' not implemented");
},i.prototype.BrowseServiceBlade$ServiceItemsListPartViewModel=function(){throw new Error("Method 'BrowseServiceBlade$ServiceItemsListPartViewModel' not implemented");
},i.prototype.BrowseServiceTileViewModel$Websites=function(){throw new Error("Method 'BrowseServiceTileViewModel$Websites' not implemented");
},i.prototype.BrowseServiceTileViewModel$Subscriptions=function(){throw new Error("Method 'BrowseServiceTileViewModel$Subscriptions' not implemented");
},i.prototype.BrowseDynamicAssetPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../Browse/ViewModels/BrowseDynamicAssetPartViewModel",function(n){return new n.BrowseDynamicAssetPartViewModel(
t,i,r.dataContext)},n)},i.prototype.BrowseAllBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../Browse/ViewModels/BrowseAllBladeViewModel",function(n){return new n.BrowseAllBladeViewModel(t,i,
r.dataContext)},n)},i.prototype.BrowseServiceBladeViewModel=function(){throw new Error("Method 'BrowseServiceBladeViewModel' not implemented");
},i.prototype.BrowseDynamicAssetBladeViewModel=function(){throw new Error("Method 'BrowseDynamicAssetBladeViewModel' not implemented");
},i}(MsPortalFx.Internal.Extension.ViewModelAreaFactoriesBase);t.BrowseViewModelFactoriesBase=y;p=function(
t){function i(){t.apply(this,arguments)}return __extends(i,t),i.prototype.DeployFromTemplateBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Deployments/ViewModels/DeployFromTemplateBladeViewModel",
function(n){return new n.DeployFromTemplateBladeViewModel(t,i,r.dataContext)},n)},i.prototype.DeployFromTemplatePartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Deployments/ViewModels/DeployFromTemplatePartViewModel",
function(n){return new n.DeployFromTemplatePartViewModel(t,i,r.dataContext)},n)},i.prototype.TemplateEditorBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Deployments/ViewModels/TemplateEditorBladeViewModel",
function(n){return new n.TemplateEditorBladeViewModel(t,i,r.dataContext)},n)},i.prototype.TemplateEditorPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Deployments/ViewModels/TemplateEditorPartViewModel",
function(n){return new n.TemplateEditorPartViewModel(t,i,r.dataContext)},n)},i.prototype.ParametersEditorBladeViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Deployments/ViewModels/ParametersEditorBladeViewModel",
function(n){return new n.ParametersEditorBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ParametersEditorPartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Deployments/ViewModels/ParametersEditorPartViewModel",
function(n){return new n.ParametersEditorPartViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.DeploymentsViewModelFactoriesBase=p;w=function(t){function i(
){t.apply(this,arguments)}return __extends(i,t),i.prototype.LocationPickerV3BladeViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("../Locations/ViewModels/LocationPickerV3BladeViewModel",
function(n){return new n.LocationPickerV3BladeViewModel(t,i,r.dataContext)},n)},i.prototype.LocationPickerV3PartViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Locations/ViewModels/LocationPickerV3PartViewModel",
function(n){return new n.LocationPickerV3PartViewModel(t,i,r.dataContext)},n)},i}(MsPortalFx.Internal.
Extension.ViewModelAreaFactoriesBase);t.LocationsViewModelFactoriesBase=w;b=function(t){function i()
{t.apply(this,arguments)}return __extends(i,t),i.prototype.RegionPickerBladeViewModel=function(t,i){
var r=this;return this.loadViewModelAsync("../Pickers/ViewModels/RegionPickerBladeViewModel",function(
n){return new n.RegionPickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.RegionPickerBlade$RegionPickerListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Pickers/ViewModels/RegionPickerListViewModel",
function(n){return new n.RegionPickerBlade$RegionPickerListViewModel(t,i,r.dataContext)},n)},i.prototype.
ResourceGroupPickerBladeViewModel=function(t,i){var r=this;return this.loadViewModelAsync("../Pickers/ViewModels/ResourceGroupPickerBladeViewModel",
function(n){return new n.ResourceGroupPickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.ResourceGroupPickerBlade$ResourceGroupPickerListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Pickers/ViewModels/ResourceGroupPickerListViewModel",
function(n){return new n.ResourceGroupPickerBlade$ResourceGroupPickerListViewModel(t,i,r.dataContext)}
,n)},i.prototype.CreateResourceGroupBlade$CreateResourceGroupBladeViewModel=function(t,i){var r=this;
return this.loadViewModelAsync("../Pickers/ViewModels/CreateResourceGroupBladeViewModel",function(n)
{return new n.CreateResourceGroupBlade$CreateResourceGroupBladeViewModel(t,i,r.dataContext)},n)},i.prototype.
CreateResourceGroupBlade$CreateResourceGroupFormPartViewModel=function(t,i){var r=this;return this.loadViewModelAsync(
"../Pickers/ViewModels/CreateResourceGroupFormPartViewModel",function(n){return new n.CreateResourceGroupBlade$CreateResourceGroupFormPartViewModel(
t,i,r.dataContext)},n)},i.prototype.SubscriptionPickerBladeViewModel=function(t,i){var r=this;return this.
loadViewModelAsync("../Pickers/ViewModels/SubscriptionPickerBladeViewModel",function(n){return new n.
SubscriptionPickerBladeViewModel(t,i,r.dataContext)},n)},i.prototype.SubscriptionPickerBlade$SubscriptionPickerListViewModel=
function(t,i){var r=this;return this.loadViewModelAsync("../Pickers/ViewModels/SubscriptionPickerListViewModel",
function(n){return new n.SubscriptionPickerBlade$SubscriptionPickerListViewModel(t,i,r.dataContext)}
,n)},i}(MsPortalFx.Internal.Extension.ViewModelAreaFactoriesBase);t.PickersViewModelFactoriesBase=b;
d=function(){function n(){}return n.prototype.SetStoreViewModelFactories=function(n){this._StoreViewModelFactories=
n},n.prototype.Store=function(){return this._StoreViewModelFactories=this._StoreViewModelFactories||
new k,this._StoreViewModelFactories},n.prototype.Store$ProvisioningPart=function(n,t){return this.Store(
).ProvisioningPart(n,t)},n.prototype.SetTagsViewModelFactories=function(n){this._TagsViewModelFactories=
n},n.prototype.Tags=function(){return this._TagsViewModelFactories=this._TagsViewModelFactories||new
i,this._TagsViewModelFactories},n.prototype.Tags$ResourceTagsCollectionPartViewModel=function(n,t){return this.
Tags().ResourceTagsCollectionPartViewModel(n,t)},n.prototype.SetSubscriptionsFilterViewModelFactories=
function(n){this._SubscriptionsFilterViewModelFactories=n},n.prototype.SubscriptionsFilter=function(
){return this._SubscriptionsFilterViewModelFactories=this._SubscriptionsFilterViewModelFactories||new
r,this._SubscriptionsFilterViewModelFactories},n.prototype.SubscriptionsFilter$ResourceFilterPartViewModel=
function(n,t){return this.SubscriptionsFilter().ResourceFilterPartViewModel(n,t)},n.prototype.SetSpecPickerV3ViewModelFactories=
function(n){this._SpecPickerV3ViewModelFactories=n},n.prototype.SpecPickerV3=function(){return this.
_SpecPickerV3ViewModelFactories=this._SpecPickerV3ViewModelFactories||new u,this._SpecPickerV3ViewModelFactories}
,n.prototype.SpecPickerV3$PricingTierLauncherPartViewModel=function(n,t){return this.SpecPickerV3().
PricingTierLauncherPartViewModel(n,t)},n.prototype.SpecPickerV3$SpecPickerBrowseAllPart=function(n,t)
{return this.SpecPickerV3().SpecPickerBrowseAllPart(n,t)},n.prototype.SetSettingsViewModelFactories=
function(n){this._SettingsViewModelFactories=n},n.prototype.Settings=function(){return this._SettingsViewModelFactories=
this._SettingsViewModelFactories||new f,this._SettingsViewModelFactories},n.prototype.Settings$SettingsBladePartViewModel=
function(n,t){return this.Settings().SettingsBladePartViewModel(n,t)},n.prototype.SetResourceMapViewModelFactories=
function(n){this._ResourceMapViewModelFactories=n},n.prototype.ResourceMap=function(){return this._ResourceMapViewModelFactories=
this._ResourceMapViewModelFactories||new e,this._ResourceMapViewModelFactories},n.prototype.ResourceMap$ResourceMapPartViewModel=
function(n,t){return this.ResourceMap().ResourceMapPartViewModel(n,t)},n.prototype.ResourceMap$ResourceMapRefreshCommandViewModel=
function(n,t){return this.ResourceMap().ResourceMapRefreshCommandViewModel(n,t)},n.prototype.ResourceMap$ResourceMapPinnedPartViewModel=
function(n,t){return this.ResourceMap().ResourceMapPinnedPartViewModel(n,t)},n.prototype.ResourceMap$ResourceListPinnedPartViewModel=
function(n,t){return this.ResourceMap().ResourceListPinnedPartViewModel(n,t)},n.prototype.ResourceMap$DeploymentsPartViewModel=
function(n,t){return this.ResourceMap().DeploymentsPartViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupMapPartViewModel=
function(n,t){return this.ResourceMap().ResourceGroupMapPartViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupMapPinnedPartViewModel=
function(n,t){return this.ResourceMap().ResourceGroupMapPinnedPartViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupListPinnedPartViewModel=
function(n,t){return this.ResourceMap().ResourceGroupListPinnedPartViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupEventsPinnedPartViewModel=
function(n,t){return this.ResourceMap().ResourceGroupEventsPinnedPartViewModel(n,t)},n.prototype.SetClassicAdminsViewModelFactories=
function(n){this._ClassicAdminsViewModelFactories=n},n.prototype.ClassicAdmins=function(){return this.
_ClassicAdminsViewModelFactories=this._ClassicAdminsViewModelFactories||new o,this._ClassicAdminsViewModelFactories}
,n.prototype.ClassicAdmins$ManagementTeamSummaryViewModel=function(n,t){return this.ClassicAdmins().
ManagementTeamSummaryViewModel(n,t)},n.prototype.SetSpecPickerViewModelFactories=function(n){this._SpecPickerViewModelFactories=
n},n.prototype.SpecPicker=function(){return this._SpecPickerViewModelFactories=this._SpecPickerViewModelFactories||
new s,this._SpecPickerViewModelFactories},n.prototype.SpecPicker$PricingTierLauncherPartViewModel=function(
n,t){return this.SpecPicker().PricingTierLauncherPartViewModel(n,t)},n.prototype.SetServicesHealthViewModelFactories=
function(n){this._ServicesHealthViewModelFactories=n},n.prototype.ServicesHealth=function(){return this.
_ServicesHealthViewModelFactories=this._ServicesHealthViewModelFactories||new h,this._ServicesHealthViewModelFactories}
,n.prototype.ServicesHealth$ServicesHealthPartViewModel=function(n,t){return this.ServicesHealth().ServicesHealthPartViewModel(
n,t)},n.prototype.ServicesHealth$ServicesPartViewModel=function(n,t){return this.ServicesHealth().ServicesPartViewModel(
n,t)},n.prototype.ServicesHealth$ServicePartViewModel=function(n,t){return this.ServicesHealth().ServicePartViewModel(
n,t)},n.prototype.ServicesHealth$ServiceRegionPartViewModel=function(n,t){return this.ServicesHealth(
).ServiceRegionPartViewModel(n,t)},n.prototype.SpecPicker$SpecPickerBrowseAllPart=function(n,t){return this.
SpecPicker().SpecPickerBrowseAllPart(n,t)},n.prototype.SetHelpViewModelFactories=function(n){this._HelpViewModelFactories=
n},n.prototype.Help=function(){return this._HelpViewModelFactories=this._HelpViewModelFactories||new
c,this._HelpViewModelFactories},n.prototype.Help$FeedbackTileViewModel=function(n,t){return this.Help(
).FeedbackTileViewModel(n,t)},n.prototype.Help$AzurePortalTileViewModel=function(n,t){return this.Help(
).AzurePortalTileViewModel(n,t)},n.prototype.Help$WhatsNewTileViewModel=function(n,t){return this.Help(
).WhatsNewTileViewModel(n,t)},n.prototype.Help$HelpAndSupportPartViewModel=function(n,t){return this.
Help().HelpAndSupportPartViewModel(n,t)},n.prototype.Help$NoSubscriptionsStartPartViewModel=function(
n,t){return this.Help().NoSubscriptionsStartPartViewModel(n,t)},n.prototype.Help$NoMsdnOfferOnSubscriptionsStartPartViewModel=
function(n,t){return this.Help().NoMsdnOfferOnSubscriptionsStartPartViewModel(n,t)},n.prototype.Help$TourTileViewModel=
function(n,t){return this.Help().TourTileViewModel(n,t)},n.prototype.Help$HelpTileViewModel=function(
n,t){return this.Help().HelpTileViewModel(n,t)},n.prototype.SetGalleryViewModelFactories=function(n)
{this._GalleryViewModelFactories=n},n.prototype.Gallery=function(){return this._GalleryViewModelFactories=
this._GalleryViewModelFactories||new l,this._GalleryViewModelFactories},n.prototype.Gallery$GalleryTileViewModel=
function(n,t){return this.Gallery().GalleryTileViewModel(n,t)},n.prototype.Gallery$StoreGalleryTileViewModel=
function(n,t){return this.Gallery().StoreGalleryTileViewModel(n,t)},n.prototype.Gallery$GalleryTemporaryTileViewModel=
function(n,t){return this.Gallery().GalleryTemporaryTileViewModel(n,t)},n.prototype.Gallery$ProvisionerPartViewModel=
function(n,t){return this.Gallery().ProvisionerPartViewModel(n,t)},n.prototype.Gallery$GalleryLaunchCreateFailedStartPartViewModel=
function(n,t){return this.Gallery().GalleryLaunchCreateFailedStartPartViewModel(n,t)},n.prototype.Gallery$GalleryLauncherPartViewModel=
function(n,t){return this.Gallery().GalleryLauncherPartViewModel(n,t)},n.prototype.SetBrowseResourceViewModelFactories=
function(n){this._BrowseResourceViewModelFactories=n},n.prototype.BrowseResource=function(){return this.
_BrowseResourceViewModelFactories=this._BrowseResourceViewModelFactories||new a,this._BrowseResourceViewModelFactories}
,n.prototype.BrowseResource$BrowsePinnedPartViewModel=function(n,t){return this.BrowseResource().BrowsePinnedPartViewModel(
n,t)},n.prototype.BrowseResource$BrowseResourceListPartViewModel=function(n,t){return this.BrowseResource(
).BrowseResourceListPartViewModel(n,t)},n.prototype.BrowseResource$BrowseResourceGroupListPartViewModel=
function(n,t){return this.BrowseResource().BrowseResourceGroupListPartViewModel(n,t)},n.prototype.SetNotificationsViewModelFactories=
function(n){this._NotificationsViewModelFactories=n},n.prototype.Notifications=function(){return this.
_NotificationsViewModelFactories=this._NotificationsViewModelFactories||new v,this._NotificationsViewModelFactories}
,n.prototype.Notifications$NotificationsTileViewModel=function(n,t){return this.Notifications().NotificationsTileViewModel(
n,t)},n.prototype.SetBrowseViewModelFactories=function(n){this._BrowseViewModelFactories=n},n.prototype.
Browse=function(){return this._BrowseViewModelFactories=this._BrowseViewModelFactories||new y,this._BrowseViewModelFactories}
,n.prototype.Browse$BrowseAllTileViewModel=function(n,t){return this.Browse().BrowseAllTileViewModel(
n,t)},n.prototype.Browse$BrowseAllBlade$ServicesListPartViewModel=function(n,t){return this.Browse().
BrowseAllBlade$ServicesListPartViewModel(n,t)},n.prototype.Browse$BrowseServiceTileViewModel=function(
n,t){return this.Browse().BrowseServiceTileViewModel(n,t)},n.prototype.Browse$BrowseServiceBlade$ServiceItemsListPartViewModel=
function(n,t){return this.Browse().BrowseServiceBlade$ServiceItemsListPartViewModel(n,t)},n.prototype.
Browse$BrowseServiceTileViewModel$Websites=function(n,t){return this.Browse().BrowseServiceTileViewModel$Websites(
n,t)},n.prototype.Browse$BrowseServiceTileViewModel$Subscriptions=function(n,t){return this.Browse().
BrowseServiceTileViewModel$Subscriptions(n,t)},n.prototype.Browse$BrowseDynamicAssetPartViewModel=function(
n,t){return this.Browse().BrowseDynamicAssetPartViewModel(n,t)},n.prototype.SetDeploymentsViewModelFactories=
function(n){this._DeploymentsViewModelFactories=n},n.prototype.Deployments=function(){return this._DeploymentsViewModelFactories=
this._DeploymentsViewModelFactories||new p,this._DeploymentsViewModelFactories},n.prototype.Deployments$DeployFromTemplateBladeViewModel=
function(n,t){return this.Deployments().DeployFromTemplateBladeViewModel(n,t)},n.prototype.Deployments$DeployFromTemplatePartViewModel=
function(n,t){return this.Deployments().DeployFromTemplatePartViewModel(n,t)},n.prototype.Deployments$TemplateEditorBladeViewModel=
function(n,t){return this.Deployments().TemplateEditorBladeViewModel(n,t)},n.prototype.Deployments$TemplateEditorPartViewModel=
function(n,t){return this.Deployments().TemplateEditorPartViewModel(n,t)},n.prototype.Deployments$ParametersEditorBladeViewModel=
function(n,t){return this.Deployments().ParametersEditorBladeViewModel(n,t)},n.prototype.Deployments$ParametersEditorPartViewModel=
function(n,t){return this.Deployments().ParametersEditorPartViewModel(n,t)},n.prototype.BrowseResource$ResourceGroupPickerV3BladeViewModel=
function(n,t){return this.BrowseResource().ResourceGroupPickerV3BladeViewModel(n,t)},n.prototype.BrowseResource$ResourceGroupPickerV3PartViewModel=
function(n,t){return this.BrowseResource().ResourceGroupPickerV3PartViewModel(n,t)},n.prototype.Tags$ResourcesWithTagBladeViewModel=
function(n,t){return this.Tags().ResourcesWithTagBladeViewModel(n,t)},n.prototype.Tags$ResourcesWithTagListPartViewModel=
function(n,t){return this.Tags().ResourcesWithTagListPartViewModel(n,t)},n.prototype.Tags$ResourceTagsListBladeViewModel=
function(n,t){return this.Tags().ResourceTagsListBladeViewModel(n,t)},n.prototype.Tags$ResourceTagsListPartViewModel=
function(n,t){return this.Tags().ResourceTagsListPartViewModel(n,t)},n.prototype.SubscriptionsFilter$SubscriptionPickerV3BladeViewModel=
function(n,t){return this.SubscriptionsFilter().SubscriptionPickerV3BladeViewModel(n,t)},n.prototype.
SubscriptionsFilter$SubscriptionPickerV3PartViewModel=function(n,t){return this.SubscriptionsFilter(
).SubscriptionPickerV3PartViewModel(n,t)},n.prototype.SetLocationsViewModelFactories=function(n){this.
_LocationsViewModelFactories=n},n.prototype.Locations=function(){return this._LocationsViewModelFactories=
this._LocationsViewModelFactories||new w,this._LocationsViewModelFactories},n.prototype.Locations$LocationPickerV3BladeViewModel=
function(n,t){return this.Locations().LocationPickerV3BladeViewModel(n,t)},n.prototype.Locations$LocationPickerV3PartViewModel=
function(n,t){return this.Locations().LocationPickerV3PartViewModel(n,t)},n.prototype.Settings$SettingsBladeViewModel=
function(n,t){return this.Settings().SettingsBladeViewModel(n,t)},n.prototype.Settings$SettingsBlade$SettingsPartViewModel=
function(n,t){return this.Settings().SettingsBlade$SettingsPartViewModel(n,t)},n.prototype.Settings$LanguageSelectionBladeViewModel=
function(n,t){return this.Settings().LanguageSelectionBladeViewModel(n,t)},n.prototype.Settings$LanguageSelectionBlade$LanguageGridViewModel=
function(n,t){return this.Settings().LanguageSelectionBlade$LanguageGridViewModel(n,t)},n.prototype.
Settings$LocaleSelectionBladeViewModel=function(n,t){return this.Settings().LocaleSelectionBladeViewModel(
n,t)},n.prototype.Settings$LocaleSelectionBlade$LocaleGridViewModel=function(n,t){return this.Settings(
).LocaleSelectionBlade$LocaleGridViewModel(n,t)},n.prototype.ResourceMap$ResourceMapBladeViewModel=function(
n,t){return this.ResourceMap().ResourceMapBladeViewModel(n,t)},n.prototype.ResourceMap$ResourceListBladeViewModel=
function(n,t){return this.ResourceMap().ResourceListBladeViewModel(n,t)},n.prototype.ResourceMap$ResourceListPartViewModel=
function(n,t){return this.ResourceMap().ResourceListPartViewModel(n,t)},n.prototype.ResourceMap$DeploymentsListBladeViewModel=
function(n,t){return this.ResourceMap().DeploymentsListBladeViewModel(n,t)},n.prototype.ResourceMap$DeploymentsListPartViewModel=
function(n,t){return this.ResourceMap().DeploymentsListPartViewModel(n,t)},n.prototype.ResourceMap$DeploymentDetailsBladeViewModel=
function(n,t){return this.ResourceMap().DeploymentDetailsBladeViewModel(n,t)},n.prototype.ResourceMap$DeploymentSummaryDetailsPartViewModel=
function(n,t){return this.ResourceMap().DeploymentSummaryDetailsPartViewModel(n,t)},n.prototype.ResourceMap$DeploymentOutputsDetailsPartViewModel=
function(n,t){return this.ResourceMap().DeploymentOutputsDetailsPartViewModel(n,t)},n.prototype.ResourceMap$DeploymentInputsDetailsPartViewModel=
function(n,t){return this.ResourceMap().DeploymentInputsDetailsPartViewModel(n,t)},n.prototype.ResourceMap$DeploymentOperationsPartViewModel=
function(n,t){return this.ResourceMap().DeploymentOperationsPartViewModel(n,t)},n.prototype.ResourceMap$DeploymentDeleteCommandViewModel=
function(n,t){return this.ResourceMap().DeploymentDeleteCommandViewModel(n,t)},n.prototype.ResourceMap$DeploymentOperationPropertiesBladeViewModel=
function(n,t){return this.ResourceMap().DeploymentOperationPropertiesBladeViewModel(n,t)},n.prototype.
ResourceMap$DeploymentOperationPropertiesPartViewModel=function(n,t){return this.ResourceMap().DeploymentOperationPropertiesPartViewModel(
n,t)},n.prototype.ResourceMap$ResourceGroupMapBladeViewModel=function(n,t){return this.ResourceMap().
ResourceGroupMapBladeViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupSummaryViewModel=function(
n,t){return this.ResourceMap().ResourceGroupSummaryViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupQuickStartBladeViewModel=
function(n,t){return this.ResourceMap().ResourceGroupQuickStartBladeViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupQuickStartPartViewModel=
function(n,t){return this.ResourceMap().ResourceGroupQuickStartPartViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupPropertiesBladeViewModel=
function(n,t){return this.ResourceMap().ResourceGroupPropertiesBladeViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupPropertiesPartViewModel=
function(n,t){return this.ResourceMap().ResourceGroupPropertiesPartViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupListBladeViewModel=
function(n,t){return this.ResourceMap().ResourceGroupListBladeViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupListPartViewModel=
function(n,t){return this.ResourceMap().ResourceGroupListPartViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupEventsBladeViewModel=
function(n,t){return this.ResourceMap().ResourceGroupEventsBladeViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupDeleteBladeViewModel=
function(n,t){return this.ResourceMap().ResourceGroupDeleteBladeViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupDeleteActionBarViewModel=
function(n,t){return this.ResourceMap().ResourceGroupDeleteActionBarViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupDeleteWarningPartViewModel=
function(n,t){return this.ResourceMap().ResourceGroupDeleteWarningPartViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupDeleteListPartViewModel=
function(n,t){return this.ResourceMap().ResourceGroupDeleteListPartViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupSettingListBladeViewModel=
function(n,t){return this.ResourceMap().ResourceGroupSettingListBladeViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupSettingListPartViewModel=
function(n,t){return this.ResourceMap().ResourceGroupSettingListPartViewModel(n,t)},n.prototype.ClassicAdmins$ManagementTeamBladeViewModel=
function(n,t){return this.ClassicAdmins().ManagementTeamBladeViewModel(n,t)},n.prototype.ClassicAdmins$ManagementTeamMembersPartViewModel=
function(n,t){return this.ClassicAdmins().ManagementTeamMembersPartViewModel(n,t)},n.prototype.ServicesHealth$ServicesBladeViewModel=
function(n,t){return this.ServicesHealth().ServicesBladeViewModel(n,t)},n.prototype.ServicesHealth$ServicesBladePartViewModel=
function(n,t){return this.ServicesHealth().ServicesBladePartViewModel(n,t)},n.prototype.ServicesHealth$ServiceBladeViewModel=
function(n,t){return this.ServicesHealth().ServiceBladeViewModel(n,t)},n.prototype.ServicesHealth$ServiceBladePartViewModel=
function(n,t){return this.ServicesHealth().ServiceBladePartViewModel(n,t)},n.prototype.ServicesHealth$ServiceRegionBladeViewModel=
function(n,t){return this.ServicesHealth().ServiceRegionBladeViewModel(n,t)},n.prototype.ServicesHealth$ServiceRegionBladePartViewModel=
function(n,t){return this.ServicesHealth().ServiceRegionBladePartViewModel(n,t)},n.prototype.ServicesHealth$ServiceHealthListBladeViewModel=
function(n,t){return this.ServicesHealth().ServiceHealthListBladeViewModel(n,t)},n.prototype.ServicesHealth$ServiceHealthListPartViewModel=
function(n,t){return this.ServicesHealth().ServiceHealthListPartViewModel(n,t)},n.prototype.SetPickersViewModelFactories=
function(n){this._PickersViewModelFactories=n},n.prototype.Pickers=function(){return this._PickersViewModelFactories=
this._PickersViewModelFactories||new b,this._PickersViewModelFactories},n.prototype.Pickers$RegionPickerBladeViewModel=
function(n,t){return this.Pickers().RegionPickerBladeViewModel(n,t)},n.prototype.Pickers$RegionPickerBlade$RegionPickerListViewModel=
function(n,t){return this.Pickers().RegionPickerBlade$RegionPickerListViewModel(n,t)},n.prototype.Pickers$ResourceGroupPickerBladeViewModel=
function(n,t){return this.Pickers().ResourceGroupPickerBladeViewModel(n,t)},n.prototype.Pickers$ResourceGroupPickerBlade$ResourceGroupPickerListViewModel=
function(n,t){return this.Pickers().ResourceGroupPickerBlade$ResourceGroupPickerListViewModel(n,t)},
n.prototype.Pickers$CreateResourceGroupBlade$CreateResourceGroupBladeViewModel=function(n,t){return this.
Pickers().CreateResourceGroupBlade$CreateResourceGroupBladeViewModel(n,t)},n.prototype.Pickers$CreateResourceGroupBlade$CreateResourceGroupFormPartViewModel=
function(n,t){return this.Pickers().CreateResourceGroupBlade$CreateResourceGroupFormPartViewModel(n,
t)},n.prototype.Pickers$SubscriptionPickerBladeViewModel=function(n,t){return this.Pickers().SubscriptionPickerBladeViewModel(
n,t)},n.prototype.Pickers$SubscriptionPickerBlade$SubscriptionPickerListViewModel=function(n,t){return this.
Pickers().SubscriptionPickerBlade$SubscriptionPickerListViewModel(n,t)},n.prototype.Help$WhatsNewBladeViewModel=
function(n,t){return this.Help().WhatsNewBladeViewModel(n,t)},n.prototype.Help$WhatsNewDetailsViewModel=
function(n,t){return this.Help().WhatsNewDetailsViewModel(n,t)},n.prototype.Help$HelpAndSupportBladeViewModel=
function(n,t){return this.Help().HelpAndSupportBladeViewModel(n,t)},n.prototype.Help$HelpAndSupportBlade$DiagnosticsPartViewModel=
function(n,t){return this.Help().HelpAndSupportBlade$DiagnosticsPartViewModel(n,t)},n.prototype.Help$DocsPartViewModel=
function(n,t){return this.Help().DocsPartViewModel(n,t)},n.prototype.Help$MsdnPartViewModel=function(
n,t){return this.Help().MsdnPartViewModel(n,t)},n.prototype.Help$StackOverflowPartViewModel=function(
n,t){return this.Help().StackOverflowPartViewModel(n,t)},n.prototype.Help$Channel9PartViewModel=function(
n,t){return this.Help().Channel9PartViewModel(n,t)},n.prototype.Help$NewSupportRequestCommandViewModel=
function(n,t){return this.Help().NewSupportRequestCommandViewModel(n,t)},n.prototype.Help$NoSubscriptionsBladeViewModel=
function(n,t){return this.Help().NoSubscriptionsBladeViewModel(n,t)},n.prototype.Help$NoSubscriptionsContentPartViewModel=
function(n,t){return this.Help().NoSubscriptionsContentPartViewModel(n,t)},n.prototype.Help$NoMsdnOfferOnSubscriptionsBladeViewModel=
function(n,t){return this.Help().NoMsdnOfferOnSubscriptionsBladeViewModel(n,t)},n.prototype.Help$NoMsdnOfferOnSubscriptionsContentPartViewModel=
function(n,t){return this.Help().NoMsdnOfferOnSubscriptionsContentPartViewModel(n,t)},n.prototype.Help$TourBladeViewModel=
function(n,t){return this.Help().TourBladeViewModel(n,t)},n.prototype.Help$TourDetailsViewModel=function(
n,t){return this.Help().TourDetailsViewModel(n,t)},n.prototype.Help$TourBladesBladeViewModel=function(
n,t){return this.Help().TourBladesBladeViewModel(n,t)},n.prototype.Help$TourBladesDetailsViewModel=function(
n,t){return this.Help().TourBladesDetailsViewModel(n,t)},n.prototype.Help$TourCustomizingBladeViewModel=
function(n,t){return this.Help().TourCustomizingBladeViewModel(n,t)},n.prototype.Help$TourCustomizingDetailsViewModel=
function(n,t){return this.Help().TourCustomizingDetailsViewModel(n,t)},n.prototype.Help$HelpBladeViewModel=
function(n,t){return this.Help().HelpBladeViewModel(n,t)},n.prototype.Help$HelpDetailsViewModel=function(
n,t){return this.Help().HelpDetailsViewModel(n,t)},n.prototype.Gallery$GalleryMenuBladeViewModel=function(
n,t){return this.Gallery().GalleryMenuBladeViewModel(n,t)},n.prototype.Gallery$GalleryMenuPartViewModel=
function(n,t){return this.Gallery().GalleryMenuPartViewModel(n,t)},n.prototype.Gallery$GalleryFeaturedMenuItemBladeViewModel=
function(n,t){return this.Gallery().GalleryFeaturedMenuItemBladeViewModel(n,t)},n.prototype.Gallery$GalleryFeaturedMenuItemPartViewModel=
function(n,t){return this.Gallery().GalleryFeaturedMenuItemPartViewModel(n,t)},n.prototype.Gallery$GalleryItemDetailsBladeViewModel=
function(n,t){return this.Gallery().GalleryItemDetailsBladeViewModel(n,t)},n.prototype.Gallery$GalleryItemDetailsPartViewModel=
function(n,t){return this.Gallery().GalleryItemDetailsPartViewModel(n,t)},n.prototype.Gallery$GalleryItemPropertiesPartViewModel=
function(n,t){return this.Gallery().GalleryItemPropertiesPartViewModel(n,t)},n.prototype.Gallery$GalleryResultsListBladeViewModel=
function(n,t){return this.Gallery().GalleryResultsListBladeViewModel(n,t)},n.prototype.Gallery$GalleryResultsListPartViewModel=
function(n,t){return this.Gallery().GalleryResultsListPartViewModel(n,t)},n.prototype.Gallery$PCGalleryResultsListBladeViewModel=
function(n,t){return this.Gallery().PCGalleryResultsListBladeViewModel(n,t)},n.prototype.Gallery$PCGalleryResultsListPartViewModel=
function(n,t){return this.Gallery().PCGalleryResultsListPartViewModel(n,t)},n.prototype.Gallery$GalleryLaunchCreateFailedBladeViewModel=
function(n,t){return this.Gallery().GalleryLaunchCreateFailedBladeViewModel(n,t)},n.prototype.Gallery$GalleryLaunchCreateFailedPartViewModel=
function(n,t){return this.Gallery().GalleryLaunchCreateFailedPartViewModel(n,t)},n.prototype.Gallery$PricingSummaryBladeViewModel=
function(n,t){return this.Gallery().PricingSummaryBladeViewModel(n,t)},n.prototype.Gallery$PricingSummaryPartViewModel=
function(n,t){return this.Gallery().PricingSummaryPartViewModel(n,t)},n.prototype.Gallery$LegalTermsBladeViewModel=
function(n,t){return this.Gallery().LegalTermsBladeViewModel(n,t)},n.prototype.Gallery$LegalTermsPartViewModel=
function(n,t){return this.Gallery().LegalTermsPartViewModel(n,t)},n.prototype.Gallery$LegalTermsDetailsBladeViewModel=
function(n,t){return this.Gallery().LegalTermsDetailsBladeViewModel(n,t)},n.prototype.Gallery$LegalTermsDetailsPartViewModel=
function(n,t){return this.Gallery().LegalTermsDetailsPartViewModel(n,t)},n.prototype.Gallery$GalleryCreateBladeViewModel=
function(n,t){return this.Gallery().GalleryCreateBladeViewModel(n,t)},n.prototype.Gallery$GalleryCreateMenuPartViewModel=
function(n,t){return this.Gallery().GalleryCreateMenuPartViewModel(n,t)},n.prototype.Gallery$GalleryCreateMenuResultsListBladeViewModel=
function(n,t){return this.Gallery().GalleryCreateMenuResultsListBladeViewModel(n,t)},n.prototype.Gallery$GalleryCreateMenuResultsListPartViewModel=
function(n,t){return this.Gallery().GalleryCreateMenuResultsListPartViewModel(n,t)},n.prototype.Gallery$GalleryCreateComingSoonBladeViewModel=
function(n,t){return this.Gallery().GalleryCreateComingSoonBladeViewModel(n,t)},n.prototype.Gallery$GalleryCreateComingSoonPartViewModel=
function(n,t){return this.Gallery().GalleryCreateComingSoonPartViewModel(n,t)},n.prototype.Gallery$GalleryCreateSubscriptionBladeViewModel=
function(n,t){return this.Gallery().GalleryCreateSubscriptionBladeViewModel(n,t)},n.prototype.Gallery$GalleryCreateSubscriptionPartViewModel=
function(n,t){return this.Gallery().GalleryCreateSubscriptionPartViewModel(n,t)},n.prototype.BrowseResource$BrowseResourceBladeViewModel=
function(n,t){return this.BrowseResource().BrowseResourceBladeViewModel(n,t)},n.prototype.BrowseResource$BrowseResourceGroupBladeViewModel=
function(n,t){return this.BrowseResource().BrowseResourceGroupBladeViewModel(n,t)},n.prototype.Notifications$NotificationsBladeViewModel=
function(n,t){return this.Notifications().NotificationsBladeViewModel(n,t)},n.prototype.Notifications$NotificationsBlade$NotificationsListViewModel=
function(n,t){return this.Notifications().NotificationsBlade$NotificationsListViewModel(n,t)},n.prototype.
Browse$BrowseAllBladeViewModel=function(n,t){return this.Browse().BrowseAllBladeViewModel(n,t)},n.prototype.
Browse$BrowseServiceBladeViewModel=function(n,t){return this.Browse().BrowseServiceBladeViewModel(n,
t)},n.prototype.Browse$BrowseDynamicAssetBladeViewModel=function(n,t){return this.Browse().BrowseDynamicAssetBladeViewModel(
n,t)},n.prototype.BrowseResource$BrowseResourceSettingsBladeViewModel=function(n,t){return this.BrowseResource(
).BrowseResourceSettingsBladeViewModel(n,t)},n.prototype.BrowseResource$BrowseResourceSettingsActionBarViewModel=
function(n,t){return this.BrowseResource().BrowseResourceSettingsActionBarViewModel(n,t)},n.prototype.
BrowseResource$BrowseResourceColumnsListPartViewModel=function(n,t){return this.BrowseResource().BrowseResourceColumnsListPartViewModel(
n,t)},n.prototype.Tags$SaveTagCommandViewModel=function(n,t){return this.Tags().SaveTagCommandViewModel(
n,t)},n.prototype.Tags$DeleteTagCommandViewModel=function(n,t){return this.Tags().DeleteTagCommandViewModel(
n,t)},n.prototype.ResourceMap$AddResourceCommandViewModel=function(n,t){return this.ResourceMap().AddResourceCommandViewModel(
n,t)},n.prototype.ResourceMap$ResourceGroupSettingListCommandViewModel=function(n,t){return this.ResourceMap(
).ResourceGroupSettingListCommandViewModel(n,t)},n.prototype.ResourceMap$ResourceGroupDeleteCommandViewModel=
function(n,t){return this.ResourceMap().ResourceGroupDeleteCommandViewModel(n,t)},n.prototype.ClassicAdmins$ManageUsersCommand=
function(n,t){return this.ClassicAdmins().ManageUsersCommand(n,t)},n.prototype.ServicesHealth$PublicShdUriCommandViewModel=
function(n,t){return this.ServicesHealth().PublicShdUriCommandViewModel(n,t)},n.prototype.BrowseResource$BrowseResourceChooseColumnsCommandViewModel=
function(n,t){return this.BrowseResource().BrowseResourceChooseColumnsCommandViewModel(n,t)},n.prototype.
ResourceMap$ResourceGroupsGridColumnsService=function(n,t){return this.ResourceMap().ResourceGroupsGridColumnsService(
n,t)},n.prototype.ResourceMap$ResourceGroupsPropertyProviderService=function(n,t){return this.ResourceMap(
).ResourceGroupsPropertyProviderService(n,t)},n.prototype.ResourceMap$ResourceGroupsResourceTypeService=
function(n,t){return this.ResourceMap().ResourceGroupsResourceTypeService(n,t)},n.prototype.Notifications$NotificationsGridColumnsService=
function(n,t){return this.Notifications().NotificationsGridColumnsService(n,t)},n}();t.ViewModelFactoriesBase=
d}(t||(t={})),t});define("HubsExtension/Common/HubsPermissions",["require","exports","../ResourceMap/ResourceMapCommon",
"../Telemetry"],function(n,t,i,r){var u;return function(n){"use strict";function a(){MsPortalFx.Internal.
Extension.hasPermissionsToHubs.register(h.client,["fx"],function(t,i){var r=t.entityId,u=t.requestedActions,
o=t.providedActions,f=s.startTrace({source:i.srcWindowId,action:l.CheckPermissions,name:r,data:u}),e=
!1;return n.Internal.PermissionChecker.hasPermission(r,u,o).then(function(n){return e=!0,n}).finally(
function(){e?s.completeTrace(f):s.cancelTrace(f)})})}var t=MsPortalFx.ViewModels.Services.ResourceTypes,
h=MsPortalFx.Base.Rpc.Internal,e=window.fx.environment.isDevelopmentMode,c=MsPortalFx.Helpers,o="\\*",
y=MsPortalFx.Internal.Constants.RpcMethods,u=MsPortalFx.Base.Diagnostics,s=MsPortalFx.Base.Diagnostics.
Telemetry,l=r.Action,f="HubsPermissions",v;n.initialize=a,function(n){var r=function(){function n(){}
return n.getCachedPermissions=function(){return JSON.parse(JSON.stringify(n.cachedPermissions))},n.hasPermission=
function(r,o,s){var l,v,h=c.Deferred(),a={};return r&&(r=r.toLowerCase(),r.charAt(0)!=="/"&&(e&&u.Log.
writeEntry(2,f,"Subscription, resource or resource-group id '{0}' is missing a leading '/'".format(r)),
r="/"+r)),v=s&&s.length?{value:[{actions:s,notActions:[]}]}:e&&window.fxDisableRbacCache?null:n.cachedPermissions[
r],t.isResourceGroupId(r)?a.resourceType="Microsoft.Resources/subscriptions/resourceGroups":t.isResourceId(
r)?a.resourceType=t.buildResourceTypeFromResourceId(r):t.isSubscriptionId(r)&&(a.resourceType="Microsoft.Resources/subscriptions"),
v?h.resolve(n.hasPermissions(r,o,a,v)).promise():(t.isResourceGroupId(r)?l=i.ResourceGroupControllerClient.
getResourceGroupActions(r):t.isResourceId(r)?l=i.ResourceControllerClient.getResourceActions(r):t.isSubscriptionId(
r)?l=i.ResourceGroupControllerClient.getSubscriptionActions(r):(u.Log.writeEntry(2,f,"Invalid subscription, resource or resource group id '{0}'".
format(r)),h.reject()),l&&l.then(function(t){n.cachedPermissions[r]=t;h.resolve(n.hasPermissions(r,o,
a,t))},function(t){t&&t.status===403?(n.cachedPermissions[r]={value:[{actions:[],notActions:[]}]},h.
resolve(!1)):(u.Log.writeEntry(1,f,"Could not obtain permissions for '{0}'".format(r)),h.resolve(!0))}
)),h.promise()},n.hasPermissions=function(t,i,r,o){var h,s,c,l;return!i||!o||!o.value||o.value.length===
0?!1:(h=o.value.map(n.PermissionsToRegExp),s=i.every(function(i){return i.length>1&&i.charAt(0)==="."&&
i.charAt(1)==="/"&&(i="{resourceType}"+i.substring(1)),i=i.format(r),e&&i.charAt(0)==="/"&&u.Log.writeEntry(
2,f,"Permission action for {0} had a leading '/', permission has invalid format".format(t)),!!h.first(
function(t){return n.IsAllowed(i,t)})}),e&&!s&&(c=i.join(", "),l=o.value.map(function(n){return"{ actions: [{0}], notActions: [{1}] }".
format(n.actions.join("|"),n.notActions.join("|"))}).join(", "),u.Log.writeEntry(1,f,"Could not obtain permissions for '{0}': requested: '{1}', available: '{2}'".
format(t,c,l))),s)},n.IsAllowed=function(n,t){var i=!!t.actions.first(function(t){return t.test(n)}),
r=!!t.notActions.first(function(t){return t.test(n)});return i&&!r},n.PermissionsToRegExp=function(t)
{var i=t.actions.map(n.ActionToRegExp),r=t.notActions.map(n.ActionToRegExp);return{actions:i,notActions:
r}},n.ActionToRegExp=function(t){return n.convertWildCardPatternToRegex(t)},n.convertWildCardPatternToRegex=
function(t){var t=t.replace(o,"\0"),i=n.escapeRegExp(t).replace(o,".*").replace("\0",o).replace("\\t",
"\t").replace("\\n","\n").replace("\\r","\r").replace("\\\\","\\").replace("\\'","'");return new RegExp(
"^"+i+"$","i")},n.escapeRegExp=function(n){return n.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")},n.
cachedPermissions={},n}();n.PermissionChecker=r}(v=n.Internal||(n.Internal={}))}(u||(u={})),u});define(
"HubsExtension/Notifications/NotificationsArea",["require","exports","../Common/HubsObservables","./Notifications.Diagnostics",
"HubsExtension/Notifications/NotificationsClientStrings","./EventSubscriptionService"],function(n,t,
i,r,u,f){var s=MsPortalFx.Internal.NotificationManager,h=MsPortalFx.Hubs.Notifications,e=MsPortalFx.
Data.Loader,o;return function(n){"use strict";function a(n){if(!o[n]){var t=new Date;o[n]=t}return o[
n]}function v(n,t){o[n]=t}function y(n){n&&n.value&&n.value.length>0&&(s.addServerEventsEndPoint.invoke(
s.rpcClient,"fx",{serverEvents:n.value}),c&&c.extensionFlags&&c.extensionFlags[b]&&p(n.value),f.matchEvents(
n.value))}function p(n){n.forEach(function(n){var t=d(n.properties&&n.properties.level,n.status);t&&
n.properties&&n.properties.description&&MsPortalFx.Services.Rpc.invokeCallback("fx","addClientNotification",
{timestamp:n.timestamp,status:t,title:n.operationName,description:n.properties.description,correlationIds:
[n.correlationId]})})}function d(n,t){if(n)switch(n.toLowerCase()){case"critical":case"error":return 2
case"warning":return 1;default:return t&&t.toLowerCase()==="failed"?2:null}return null}var h=window,
c=h&&h.fx&&h.fx.environment,t=u,w=MsPortalFx.Base.Resources.getAppRelativeUri("/api/Notifications"),
o={},l=!1,b="hubsextension_showserverevents",k=function(){function n(){var n=this,t;this._notificationsDataSetNameList=
[];t=i.getSubscriptionsObservable();this._subscriptionsListSubscription=t.subscribe(function(t){t&&(
l||(f.subscribeToArmEvent({source:"microsoft.resources",status:"succeeded",subStatus:"ok",operationNameRegex:
"/register/action$"},function(n){var t=n.operationName.split("/")[0];i.addRegisteredResourceProvider(
t)}),l=!0),n._disposeDataSets(),n._loadNotifications(t.subscriptions))})}return n.prototype.dispose=
function(){this._subscriptionsListSubscription&&(this._subscriptionsListSubscription.dispose(),this.
_subscriptionsListSubscription=null);this._disposeDataSets()},n.prototype.forceEventRefresh=function(
){this._notificationsDataSetNameList.forEach(function(n){e.forceRefresh(n).then(null,function(){r.Log.
error("There was an error refreshing notifications.")})})},n.prototype._disposeDataSets=function(){this.
_notificationsDataSetNameList.forEach(function(n){var t=e.getDataSet(n);t&&$(t).off("mergeComplete");
e.disposeDataSet(n)});this._notificationsDataSetNameList=[]},n.prototype._loadNotifications=function(
n){var i=this;n.forEach(function(n){var f,h,o,u,c=3,s=0;f="fxNotificationsDataSet-"+n.subscriptionID;
i._notificationsDataSetNameList.push(f);h=e.getDataSet(f,"fxNotification",[]);e.getData({uri:w,dataSetName:
f,loaderOptions:{fetchData:function(i,r,f){var h,e,l;return o=new Date,h=new MsPortalFx.Base.UriBuilder(
r),e=a(n.subscriptionID),e.setMinutes(e.getMinutes()-1),h.query.setParameters({subscriptionId:n.subscriptionID,
startTime:e.toISOString(),endTime:o.toISOString()}),l=MsPortalFx.Base.Net.ajax({uri:h.toString(),type:
"GET",data:f&&f.query,dataType:"json"}),l.then(function(i){s=0;u&&(u.status=4,u.title=t.errorFetchingEventsResolvedTitle,
u.description=t.errorFetchingEventsResolvedMessage.format(n.subscriptionName),u.publish(),u=null);v(
n.subscriptionID,o);y(ko.toJS(i))},function(){s++;s>c&&(u||(u=new MsPortalFx.Hubs.Notifications.ClientNotification(
{status:1,title:t.errorFetchingEventsTitle,description:t.errorFetchingEventsMessage.format(n.subscriptionName)})),
u.publish())}),l}}});e.forceRefresh(f).then(null,function(){r.Log.error("There was an error refreshing notifications.")}
)})},n}();n.DataContext=k;n.getLastFetchTime=a;n.setLastFetchTime=v;n.handleServerEvents=y;n.publishClientNotifications=
p}(o||(o={})),o});define("HubsExtension/Notifications/Notifications.Diagnostics",["require","exports"],
function(){var n;return function(n){"use strict";var t="HubsExtension-Notifications",r=MsPortalFx.Base.
Diagnostics,f=r.LogEntryLevel,i=r.Log.writeEntry,u=function(){function n(){}return n.verbose=function(
n){for(var f,u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];f=[0,t,n].concat(u);i.apply(null,f)}
,n.warning=function(n){for(var f,u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];f=[1,t,n].concat(
u);i.apply(null,f)},n.error=function(n){for(var f,u=[],r=1;r<arguments.length;r++)u[r-1]=arguments[r];
f=[2,t,n].concat(u);i.apply(null,f)},n}();n.Log=u}(n||(n={})),n});__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("HubsExtension/ResourceMap/ResourceMapViewModelFactories",["require","exports",
"../_generated/ViewModelFactories"],function(n,t,i){var r;return function(t){"use strict";var r=function(
t){function i(i){t.call(this);this.setDataContextFactory("./ResourceMapArea",function(n){return new n.
DataContext(i)},n)}return __extends(i,t),i.prototype.ResourceMap$ResourceMapProviderViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("./ViewModels/ResourceMapProviderViewModel",function(
n){return new n.ResourceMapProviderViewModel(t,i,r.dataContext)},n)},i}(i.ResourceMapViewModelFactoriesBase);
t.ViewModelFactories=r}(r||(r={})),r});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"HubsExtension/Gallery/GalleryViewModelFactories",["require","exports","../_generated/ViewModelFactories",
"./Models/GalleryModels"],function(n,t,i,r){var u;return function(t){"use strict";var u=function(t){
function i(){var i=this;t.call(this);this.setDataContextFactory("./DataContexts/GalleryDataContext",
function(n){var t=MsPortalFx.Internal.Extension.getRuntime();return i._galleryContext=new n.GalleryDataContext(
t)},n)}return __extends(i,t),i.prototype.CreateActivityPaneItems=function(){var t=this;return this.loadViewModelAsync(
"./DataContexts/GalleryDataContext",function(){return t._galleryContext.activityPane},n)},i.prototype.
CsmDeployment=function(){return this.loadViewModelAsync("./Models/CsmDeployment",function(n){return new
n.CsmDeployment},n)},i.prototype.DeploymentStatusPoller=function(){return this.loadViewModelAsync("./Models/DeploymentStatusPoller",
function(n){return new n.DeploymentStatusPoller},n)},i.prototype.GalleryItemLoader=function(){var t=
this;return this.loadViewModelAsync("./GalleryArea",function(){return new r.GalleryItemLoader(t._galleryContext)}
,n)},i}(i.GalleryViewModelFactoriesBase);t.ViewModelFactories=u}(u||(u={})),u});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("HubsExtension/Help/HelpViewModelFactories",["require","exports",
"../_generated/ViewModelFactories"],function(n,t,i){var r;return function(t){"use strict";var r=function(
t){function i(){var i=this;t.call(this);this.setDataContextFactory("./HelpArea",function(n){return i.
_helpContext=new n.DataContext},n)}return __extends(i,t),i.prototype.HasSubscriptionViewModel=function(
t,i){var r=this;return this.loadViewModelAsync("./ViewModels/HasSubscriptionViewModel",function(n){return new
n.HasSubscriptionViewModel(t,i,r._helpContext)},n)},i}(i.HelpViewModelFactoriesBase);t.ViewModelFactories=
r}(r||(r={})),r});__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("HubsExtension/Tags/TagsViewModelFactories",
["require","exports","../_generated/ViewModelFactories"],function(n,t,i){var r;return function(t){"use strict";
var r=function(t){function i(){var i=this;t.call(this);this.setDataContextFactory("./DataContexts/TagsDataContext",
function(n){return i._tagsContext=new n.TagsDataContext},n)}return __extends(i,t),i}(i.TagsViewModelFactoriesBase);
t.ViewModelFactories=r}(r||(r={})),r});define("HubsExtension/Diagnostics/DiagnosticsViewModelFactories",
["require","exports","./ViewModels/HubsDiagnosticsProviderViewModel"],function(n,t,i){var r;return function(
n){"use strict";var t=function(){function n(){}return n.prototype.Diagnostics$HubsDiagnosticsProviderViewModel=
function(){return MsPortalFx.Helpers.Deferred().resolve(new i.HubsDiagnosticsProviderViewModel).promise(
)},n}();n.ViewModelFactories=t}(r||(r={})),r});define("HubsExtension/Diagnostics/ViewModels/HubsDiagnosticsProviderViewModel",
["require","exports","../../Common/HubsPermissions"],function(n,t,i){var r;return function(n){"use strict";
var t=function(){function n(){}return n.prototype.getPermissions=function(){return i.Internal.PermissionChecker.
getCachedPermissions()},n}();n.HubsDiagnosticsProviderViewModel=t}(r||(r={})),r})