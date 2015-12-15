define("HubsExtension/BrowseResource/ViewModels/Resource/BrowseResourceListPartViewModel",["require",
"exports","HubsExtension/Browse/BrowseClientStrings","../../../Common/AssetTypeCache","HubsExtension/ResourceMap/ResourceMapClientStrings",
"../../../ResourceMap/ResourceMapCommon","../../../Notifications/EventSubscriptionService","../../BrowseResource.Diagnostics",
"../../../Common/HubsObservables","../../../HubsCommon","../../../Telemetry"],function(n,t,i,r,u,f,e,
o,s,h,c){var l;return function(n){"use strict";var v=MsPortalFx.ViewModels.Controls.Lists.Grid,a=MsPortalFx.
ViewModels.Services.ResourceTypes,g=MsPortalFx.Base.Diagnostics.Telemetry,t=MsPortalFx.Assets,y=MsPortalFx.
Base.Constants.ViewModelTypes,nt=c.Source.BrowseBlade,p=c.Action,tt="<div data-bind='image: value'><\/div>",
it="msportalfx-gridcolumn-asseticon",rt="41px",ut="32%",w="24%",ft="24%",b="16%",et="/delete",ot="microsoft.resources/subscriptions/resourcegroups/delete",
k="succeeded",l,d;(function(n){n.name={id:t.ResourceColumns.name,itemKey:"name",name:ko.observable(i.
ColumnTitles.name),width:ko.observable("32%")};n.kind={id:t.ResourceColumns.kind,itemKey:"kind",name:
ko.observable(i.ColumnTitles.kind),width:ko.observable("16%")};n.resourceGroup={id:t.ResourceColumns.
resourceGroup,itemKey:"resourceGroupString",name:ko.observable(i.ColumnTitles.resourceGroup),width:ko.
observable("24%")};n.location={id:t.ResourceColumns.location,itemKey:"locationString",name:ko.observable(
i.ColumnTitles.location),width:ko.observable("16%")};n.locationId={id:t.ResourceColumns.locationId,itemKey:
"location",name:ko.observable(i.ColumnTitles.locationId),width:ko.observable("16%")};n.resourceId={id:
t.ResourceColumns.resourceId,itemKey:"id",name:ko.observable(i.ColumnTitles.resourceId),width:ko.observable(
"24%")};n.resourceType={id:t.ResourceColumns.resourceType,itemKey:"type",name:ko.observable(i.ColumnTitles.
resourceType),width:ko.observable("20%")};n.subscription={id:t.ResourceColumns.subscriptionName,itemKey:
"subscriptionString",name:ko.observable(i.ColumnTitles.subscriptionName),width:ko.observable("24%")};
n.subscriptionId={id:t.ResourceColumns.subscriptionId,itemKey:"subscriptionId",name:ko.observable(i.
ColumnTitles.subscriptionId),width:ko.observable("24%")};n.assetType={id:t.ResourceColumns.assetType,
itemKey:"assetType",name:ko.observable(i.ColumnTitles.assetType),width:ko.observable("16%")}})(l||(l=
{}));d=function(){function n(n,r,f){var e=this,c;this.infoBoxViewModel=ko.observable(null);this.isInfoBoxPresent=
ko.observable(!1);this._supplementalProperties=[];this._requiredColumns=[];this._mappedProperties={};
this._assetTypesInformationArray=[];c={createMapping:function(n,t){e._sourceItems=t;var i=ko.observableArray(
);return h.subscribeToArrayEdits(n,t,function(n){var t=e._assetTypeInformation||e._assetTypesInformationArray.
first(function(t){return t.resourceType.toLowerCase()===n.type().toLowerCase()});return!!t},function(
n,t){var f=e._assetTypeInformation||e._assetTypesInformationArray.first(function(t){return t.resourceType.
toLowerCase()===n.type().toLowerCase()}),h=a.buildLowerCaseResourceId(n.id()),c=a.parseResourceDescriptor(
n.id()),v=s.getSubscriptionsObservable(),l=v().subscriptions.first(function(n){return n.subscriptionID.
toLowerCase()===c.subscription.toLowerCase()}),r=$.extend({},n,{icon:ko.observable(f.icon),subscriptionId:
ko.observable(l?l.subscriptionID:null),subscriptionString:ko.observable(l?l.subscriptionName:u.unknownSubscription),
resourceGroupString:ko.observable(c.resourceGroup),resourceGroupId:ko.observable(a.buildResourceGroupIdFromResourceDescriptor(
c)),assetType:ko.observable(f.compositeDisplayName.singular),isWaitingForDynamicBlade:ko.observable(
!1),dynamicBlade:ko.observable(null),dynamicBladeExtension:ko.observable(null),kindBlade:ko.observable(
null),kindBladeExtension:ko.observable(null),commandGroup:ko.observable(e._defaultCommandGroup),commandGroupOwner:
ko.observable(e._defaultCommandGroupOwner)});e._resourceTypesCachePromise&&r.kind&&r.kind()&&e._resourceTypesCachePromise.
then(function(n){var i=a.buildResourceTypeFromResourceDescriptor(c).toLowerCase(),t=r.kind().toLowerCase(
);n.first(function(n){return n.resourceType.toLowerCase()===i?(!n.kinds.first(function(n){return n.kind.
toLowerCase()===t?(e._updateItemFromKind(n,r,f.extensionName),!0):!1})&&n.dynamicKindsEndpoint&&e._updateItemFromDynamicKindsEndpoint(
n.dynamicKindsEndpoint.format(t),r,f.extensionName),!0):!1})});e._mappedProperties[h]||(e._mappedProperties[
h]={});e._supplementalProperties.forEach(function(n){e._mappedProperties[h][n]=ko.observable(null);r[
n]=ko.pureComputed(function(){return e._mappedProperties[h][n]()?e._mappedProperties[h][n]()():null}
)});f.dynamicBladeServiceViewModel&&(r.isWaitingForDynamicBlade(!0),MsPortalFx.Internal.Extension.getViewModelsDefinition.
acquireObject(MsPortalFx.Base.Rpc.Internal.client,f.extensionName,{type:y.ViewModel,name:f.dynamicBladeServiceViewModel,
initialState:null,createSelectable:!1}).then(function(n){var u=n.getValue(),t=u.content,i;typeof t.onInputsSet!=
"function"?(o.Log.warning("Dynamic blade service had no onInputsSet."),r.isWaitingForDynamicBlade(!1),
n.dispose()):(i=t.onInputsSet({assetId:r.id(),usage:0}),i?i.then(function(){r.dynamicBlade(t.bladeName(
));r.dynamicBladeExtension(t.extensionName()||f.extensionName)}).finally(function(){r.isWaitingForDynamicBlade(
!1);n.dispose()}):(r.dynamicBlade(t.bladeName()),r.dynamicBladeExtension(t.extensionName()),r.isWaitingForDynamicBlade(
!1),n.dispose()))},function(){o.Log.error("Failed to get the dynamic blade service during browse.");
r.isWaitingForDynamicBlade(!1)}));i.splice(t,0,r)},function(n,t){i.splice(t,1)}),i}};this._dataNavigator=
f.resourceData.dataCache.createNavigatorWithOptions(n,c);var p=function(n,t){return n.isWaitingForDynamicBlade(
)?!1:t.selectionKey?n.id()&&t&&a.compareResourceId(n.id(),t.selectionKey):!1},k=function(n){return n.
isWaitingForDynamicBlade()?null:n.id?n.kindBlade()?{selectionKey:n.id(),extension:n.kindBladeExtension(
),detailBlade:n.kindBlade(),detailBladeInputs:{id:n.id()}}:n.dynamicBlade()?{selectionKey:n.id(),extension:
n.dynamicBladeExtension(),detailBlade:n.dynamicBlade(),detailBladeInputs:{id:n.id()}}:{selectionKey:
n.id(),resourceId:n.id(),detailBladeInputs:{id:n.id()}}:null},d=v.Extensions.SelectableRow|v.Extensions.
RightClickableRow|v.Extensions.ContextMenuShortcut|v.Extensions.Pageable,g={selectableRow:{selectionMode:
1,itemMatchesSelection:p,createSelection:k,activateOnSelected:ko.observable(!0)},pageable:{type:0,dataNavigator:
this._dataNavigator}};this.resourceType=ko.observable();this._container=n;this._dataContext=f;this._resourceColumnConfigs=
[l.kind,l.resourceGroup,l.assetType,l.location,l.locationId,l.resourceId,l.resourceType,l.subscriptionId];
this._defaultPrefixColumns=[{name:ko.observable(""),itemKey:"icon",format:1e3,formatOptions:{htmlBindingsTemplate:
tt,htmlBindingsType:0},cssClass:it,width:ko.observable(rt)},{name:ko.observable(i.ColumnTitles.name),
itemKey:"trimmedName",width:ko.observable(ut)}];this._defaultColumnConfigs=[{id:t.ResourceColumns.resourceGroup,
name:ko.observable(i.ColumnTitles.resourceGroup),itemKey:"resourceGroupString",width:ko.observable(w)},
{id:t.ResourceColumns.location,name:ko.observable(i.ColumnTitles.location),itemKey:"locationString",
width:ko.observable(b)}];this._defaultColumnIds=[t.ResourceColumns.resourceGroup,t.ResourceColumns.location];
this._defaultColumns=[{name:ko.observable(i.ColumnTitles.resourceGroup),itemKey:"resourceGroupString",
width:ko.observable(w)},{name:ko.observable(i.ColumnTitles.location),itemKey:"locationString",width:
ko.observable(b)}];this._defaultSuffixColumns=[{name:ko.observable(i.ColumnTitles.subscriptionName),
itemKey:"subscriptionString",width:ko.observable(ft)}];this.resourceGridViewModel=new v.ViewModel(n,
null,d,g);this.resourceGridViewModel.showHeader=!0;this.resourceGridViewModel.columns=ko.observableArray(
[]);this.resourceGridViewModel.noRowsMessage(i.loading);this._attachItemsWatchForSupplementalData();
this._attachTelemetry(n);this._attachEventWatch();this._container.registerForDispose({dispose:function(
){e._disposeAssetManagedObject()}})}return n.prototype.onInputsSet=function(n){var t=this,i,r;return this.
resourceType(n.resourceType),i=this.resourceType().toLowerCase(),this._resourceTypesCachePromise=f.ResourceControllerClient.
getResourceTypeCache(),this._sourceItems([]),this.resourceGridViewModel.noRowsMessage(""),this._supplementalProperties=
[],this._requiredColumns=[],this._mappedProperties={},this._disposeAssetManagedObject(),r=n.selectedSubscriptions||
[],s.getSelectedSubscriptionsPromise().then(function(){return(t._selectedSubscriptions=r.map(function(
n){return n.subscriptionId}),t.resourceType())?i===f.resourceGroupResourceTypeLowerCase?t._handleResourceGroupType(
):i===MsPortalFx.Base.Constants.ResourceTypes.AllResources.toLowerCase()?t._handleAllResourceTypes():
t._handleResourceType():null})},n.prototype._handleResourceGroupType=function(){return o.Log.error("Cannot use the browse resource blade for resource group type."),
this.resourceGridViewModel.noRowsMessage(i.nothingToDisplay),this._columnWatchLifetime&&(this._columnWatchLifetime.
dispose(),this._columnWatchLifetime=null),Q.reject()},n.prototype._handleResourceType=function(){var
n=this;return r.getResourceTypeAssetTypeInformation(this.resourceType()).then(function(i){return i.viewModel&&
t.supportsContract(i.contracts,t.AssetContracts.BrowseConfig)?MsPortalFx.Internal.Extension.getViewModelsDefinition.
acquireObject(MsPortalFx.Base.Rpc.Internal.client,i.extensionName,{type:y.ViewModel,name:i.viewModel,
initialState:null,createSelectable:!1}).then(function(r){n._assetManagedObject=r;var u=r.getValue(),
f=u.content;f.getBrowseConfig().then(function(r){if(o.Log.verbose("Retrieved the browse config."),r.
infoBox){var f;r.infoBox.uri?f=new MsPortalFx.ViewModels.Controls.InfoBox.LinkViewModel(n._container,
{image:ko.observable(r.infoBox.image),text:ko.observable(r.infoBox.text),clickableLink:ko.observable(
MsPortalFx.ViewModels.Part.createClickableLinkViewModel(ko.observable(r.infoBox.uri)))}):(f=new MsPortalFx.
ViewModels.Controls.InfoBox.ViewModel(n._container,!1),f.image=ko.observable(r.infoBox.image),f.text=
ko.observable(r.infoBox.text),r.infoBox.blade&&(f.selectable=MsPortalFx.ViewModels.Part.createSelectableViewModel(
),f.selectable.selectedValue({detailBlade:r.infoBox.blade.detailBlade,detailBladeInputs:r.infoBox.blade.
detailBladeInputs,extension:r.infoBox.blade.extension}),n._container.registerSelectable(n._container.
createChildLifetime(),"infoBox",f.selectable)));n.infoBoxViewModel(f);n.isInfoBoxPresent(!0)}return n.
_mapConfigColumns(r.columns,r.defaultColumns,r.properties),n._initializeDataNavigator(r.contextMenu,
i,t.supportsContract(i.contracts,t.AssetContracts.SupplementalData)?u.content:null,n.resourceType())}
,function(){return o.Log.error("Could not retrieve the browse config."),n._mapConfigColumns(n._defaultColumnConfigs,
n._defaultColumnIds,[]),n._initializeDataNavigator(null,i,null,n.resourceType())})},function(){return o.
Log.error("Could not retrieve the asset view model."),n._mapConfigColumns(n._defaultColumnConfigs,n.
_defaultColumnIds,[]),n._initializeDataNavigator(null,i,null,n.resourceType())}):(n._mapConfigColumns(
n._defaultColumnConfigs,n._defaultColumnIds,[]),n._initializeDataNavigator(null,i,null,n.resourceType(
)))},function(){return n._container.fail(i.resourceTypeNotFound),o.Log.error("Could not find the asset type information for the {0} resource type.".
format(n.resourceType())),n._replaceColumns(n._defaultColumns),n._columnWatchLifetime&&(n._columnWatchLifetime.
dispose(),n._columnWatchLifetime=null),n._initializeDataNavigator(null,null,null,null)})},n.prototype.
_handleAllResourceTypes=function(){var n=this,t;return this._replaceColumns(this._defaultColumns),this.
_columnWatchLifetime&&(this._columnWatchLifetime.dispose(),this._columnWatchLifetime=null),t=!1,Q(r.
getRegisteredAssetTypes()).then(function(r){t||(n._assetTypesInformationArray=r.assetTypesInformation.
filter(function(n){return n.browseType===1}),n._dataNavigator.setQuery({resourceType:"",subscriptions:
n._selectedSubscriptions,supportedResourceTypes:n._assetTypesInformationArray.map(function(n){return n.
resourceType}).join(";")}).then(function(){n._dataNavigator.items.length||n.resourceGridViewModel.noRowsMessage(
i.nothingToDisplay)}))},function(){n._dataNavigator.items([]);n._container.fail(i.browseAllResourcesError);
o.Log.error("Could not find asset type information for any of the resource types.");Q.reject()},function(
r){t=!0;n._assetTypesInformationArray=r.assetTypesInformation.filter(function(n){return n.browseType===
1});n._dataNavigator.setQuery({resourceType:"",subscriptions:n._selectedSubscriptions,supportedResourceTypes:
n._assetTypesInformationArray.map(function(n){return n.resourceType}).join(";")}).then(function(){n.
_dataNavigator.items.length||n.resourceGridViewModel.noRowsMessage(i.nothingToDisplay)})})},n.prototype.
_disposeAssetManagedObject=function(){this._assetManagedObject&&(this._supplementalDataSubscription&&
(this._supplementalDataSubscription.dispose(),this._supplementalDataSubscription=null),this._supplementalDataSource=
null,this._assetManagedObject.dispose(),this._assetManagedObject=null)},n.prototype._initializeDataNavigator=
function(n,t,r,u){var f=this;return(this._supplementalDataSource=r,this._assetTypeInformation=t,this.
_defaultCommandGroup=n?n.commandGroup:null,this._defaultCommandGroupOwner=n?n.commandGroupOwner||t.extensionName:
null,u)?this._dataNavigator.setQuery({resourceType:u,subscriptions:this._selectedSubscriptions}).finally(
function(){t?f.resourceGridViewModel.noRowsMessage(i.noResources.format(t.compositeDisplayName.lowerPlural)):
f.resourceGridViewModel.noRowsMessage(i.nothingToDisplay)}):(this.resourceGridViewModel.noRowsMessage(
i.nothingToDisplay),Q.reject())},n.prototype._replaceColumns=function(n){this.resourceGridViewModel.
columns([]);this.resourceGridViewModel.columns(this._defaultPrefixColumns.concat(n,this._defaultSuffixColumns))}
,n.prototype._mapConfigColumns=function(n,t,i){var r=this,u=n.concatUnique(this._resourceColumnConfigs),
f=function(){var n=[],i=u.sort(function(n,i){var r=t.indexOf(n.id),u=t.indexOf(i.id);return r===u?0:
r===-1?1:u===-1?-1:r-u});i.forEach(function(i){n.push({id:i.id,name:i.name(),visible:t.indexOf(i.id)!==
-1})});r._dataContext.setBrowseColumns(r.resourceType(),n)},e=function(e){var s=[],h;e?(t=[],e.forEach(
function(n){var i=!!u.first(function(t){return t.id===n.id});n&&n.visible&&i&&t.push(n.id)}),e.length!==
u.length&&f()):f();h=function(n){var t={id:n.id||n.columnId,name:n.name,itemKey:n.itemKey};return n.
format!==undefined&&(t.format=n.format),n.formatOptions!==undefined&&(t.formatOptions=n.formatOptions),
n.width!==undefined&&(t.width=n.width),n.cssClass&&(t.cssClass=n.cssClass),t};n&&(r._supplementalProperties=
n.map(function(n){return n.itemKey}).filter(function(n){return!l[n]}),i&&(r._supplementalProperties=
r._supplementalProperties.concat(i)),r._supplementalProperties=r._supplementalProperties.unique());t&&
(t.forEach(function(t){if(l[t]){s.push(h(l[t]));return}if(n){var i=n.first(function(n){return(n.id||
n.columnId)===t});if(i){r._requiredColumns.push(i.id||i.columnId);s.push(h(i));return}}o.Log.error("Could not find the column with columnId {0}.".
format(t))}),r._requiredColumns=r._requiredColumns.unique());r._replaceColumns(s)},s=this._dataContext.
getBrowseColumns(this.resourceType());e(s());this._columnWatchLifetime&&(this._columnWatchLifetime.dispose(
),this._columnWatchLifetime=null);this._columnWatchLifetime=this._container.createChildLifetime();s.
subscribe(this._columnWatchLifetime,function(n){e(n);r._updateSupplementalDataForColumnChange()})},n.
prototype._attachItemsWatchForSupplementalData=function(){var n=this,t=this.resourceGridViewModel.items.
slice(0);this.resourceGridViewModel.items.subscribe(this._container,function(i){if(n.resourceGridViewModel.
items().forEach(function(t){var r=n.resourceGridViewModel.getRowMetadata(t),i;t.isWaitingForDynamicBlade(
)&&r&&!r.disabled()&&(r.disabled(!0),i=new MsPortalFx.Internal.Base.TriggerableLifetimeManager,t.isWaitingForDynamicBlade.
subscribe(i,function(u){u||n.resourceGridViewModel.items().indexOf(t)===-1||(r.disabled(!1),i&&(i.dispose(
),i=null))}))}),n._supplementalDataSource){var r=[];ko.utils.fixupArrayEdits(ko.utils.compareArrays(
t,i)).forEach(function(n){switch(n.status){case"added":r.push(n.value.id())}});t=i.slice(0);n._updateSupplementalDataForResources(
r)}})},n.prototype._updateSupplementalDataForColumnChange=function(){if(this._supplementalDataSource)
{var n=[];this.resourceGridViewModel.items().forEach(function(t){n.push(t.id())});this._updateSupplementalDataForResources(
n)}},n.prototype._updateSupplementalDataForResources=function(n){var t=this,i=function(n){var i=t.resourceGridViewModel.
items().first(function(t){return a.compareResourceId(t.id(),n.resourceId)}),r;i&&(r=a.buildLowerCaseResourceId(
n.resourceId),n.contextMenu&&(i.commandGroup(n.contextMenu.commandGroup),i.commandGroupOwner(n.contextMenu.
commandGroupOwner||t._defaultCommandGroupOwner)),t._mappedProperties[r]&&t._supplementalProperties.forEach(
function(u){i.hasOwnProperty(u)&&n.hasOwnProperty(u)&&(ko.isObservable(n[u])?t._mappedProperties[r][
u](n[u]):t._mappedProperties[r][u](ko.observable(n[u])))}))};n.length&&(this._supplementalDataSubscription||
(this._supplementalDataSubscription=MsPortalFx.Services.DataSetSubscription.subscribeDataSet(this._supplementalDataSource.
supplementalDataStream,function(n){i(n)},function(){})),this._supplementalDataSource.getSupplementalData(
n,this._requiredColumns))},n.prototype._attachTelemetry=function(n){g.addActivatedItemsTelemetryWatcher(
n,this.resourceGridViewModel.selectableData,nt,p.BrowseItemActivated,p.BrowseItemDeactivated,function(
n){return{extension:n.originExtension||n.extension,assetType:n.assetType||n.originAssetType,data:{detailBlade:
n.detailBlade,detailBladeExtension:n.detailBlade&&n.extension,assetId:n.detailBladeInputs.id}}})},n.
prototype._attachEventWatch=function(){var n=this,t=e.subscribeToArmEvent({source:"Microsoft.Resources"},
function(t){var i,r;t.operationName.toLowerCase()===ot&&t.status.toLowerCase()===k?(i=t.assetId,a.isResourceGroupId(
i)&&n.resourceGridViewModel.items.remove(function(n){return a.compareResourceGroupId(i,n.resourceGroupId(
))})):t.operationName.toLowerCase().endsWith(et)&&t.status.toLowerCase()===k&&(r=t.assetId,a.isResourceId(
r)&&n.resourceGridViewModel.items.remove(function(n){return a.compareResourceId(r,n.id())}))});this.
_container.registerForDispose({dispose:function(){e.removeArmEventSubscription(t)}})},n.prototype._updateItemFromKind=
function(n,t,i){n.icon&&t.icon({type:1,data:n.icon,options:{isLogo:!0}});n.blade&&(t.kindBlade(n.blade.
name),t.kindBladeExtension(n.blade.extension||i))},n.prototype._updateItemFromDynamicKindsEndpoint=function(
){},n}();n.BrowseResourceListPartViewModel=d}(l||(l={})),l})