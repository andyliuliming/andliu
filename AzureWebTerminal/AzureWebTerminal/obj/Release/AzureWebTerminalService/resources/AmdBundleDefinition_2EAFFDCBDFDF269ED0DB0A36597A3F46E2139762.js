var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/UI/Hubs/ViewModels/UI.BrowseAll.Part",
["require","exports","../UI.BrowseManager","./UI.Hubs.Common","../../../Base/Telemetry","MsPortalImpl/Resources/ImplScriptResources"],
function(n,t,i,r,u,f){var e;return function(n){"use strict";var o=MsPortalFx.Base.Diagnostics.Telemetry,
a=window,s=jQuery,h=u.Source.BrowseBlade,e=u.Action,t=f.BrowseHub,v=MsPortalFx.Base.Constants.ExtensionNames.
Hubs,c="<div data-bind='image: value'><\/div>",l=function(n){function u(f,e,o){var h=function(n,t){return u.
_getSelectionIdForItem(n)===t.selectionKey},l=function(n){return i.buildAssetBrowseBladeDynamicSelection(
n.assetType,function(t){return s.extend(!0,{selectionKey:u._getSelectionIdForItem(n)},t)})},a=MsPortalFx.
ViewModels.Controls.Lists.Grid.Extensions.SelectableRow|MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.
RightClickableRow|MsPortalFx.ViewModels.Controls.Lists.Grid.Extensions.ContextMenuShortcut,v={selectableRow:
{selectionMode:1,itemMatchesSelection:h,createSelection:l,activateOnSelected:ko.observable(!0)}};n.call(
this,f,ko.observableArray([]),a,v);this._container=f;this._dataContext=o;this._attachTelemetry(f);this.
noRowsMessage=ko.observable(t.noServices);this.showHeader=!1;this.summary=ko.observable(t.services);
this.columns=ko.observableArray([{name:ko.observable(""),itemKey:"icon",format:1e3,formatOptions:{htmlBindingsTemplate:
c,htmlBindingsType:0},width:ko.observable(r.IconColumnWidth.nonGroupingList),cssClass:"msportalfx-gridcolumn-asseticon"},
{name:ko.observable(t.columnService),itemKey:"title"}])}return __extends(u,n),u.prototype.onInputsSet=
function(n){var t=this;return this._inputType=n?n.type:undefined,this._populateFromAssetTypes(),this.
_container.registerForDispose(this._dataContext.browseManager.browseAssetTypes.subscribe(function(){
t._populateFromAssetTypes()})),null},u._getSelectionIdForItem=function(n){return n.assetType.id},u.prototype.
_attachTelemetry=function(n){o.addActivatedItemsTelemetryWatcher(n,this.selectableData,h,e.BrowseTypeActivated,
e.BrowseTypeDeactivated,function(n){return{extension:n.extension,assetType:n.assetType,data:n.detailBladeInputs}}
)},u.prototype._populateFromAssetTypes=function(){var n=this,t=this._dataContext.browseManager.getFilteredAssetTypes(
).filter(function(n){return!i.nonServiceAssetTypeNames.first(function(t){return t.toLowerCase()===n.
assetTypeManifest.name.toLowerCase()})}),r=this.items().map(function(n){return n.assetType});ko.utils.
fixupArrayEdits(ko.utils.compareArrays(r,t)).forEach(function(t){switch(t.status){case"added":n.items.
splice(t.index,0,{assetType:t.value,title:ko.observable(t.value.compositeDisplayName.plural),icon:i.
getAssetTypeIcon(t.value),commandGroup:"serviceCommandGroup"});break;case"deleted":n.items.splice(t.
index,1)}});this._inputType&&!this.selectableData.activatedItems().length&&this.items().first(function(
t){return i.assetTypeMatchesTypeInput(t.assetType,n._inputType)?(n.selectableData.selectableItems().
forEach(function(n){n.data.assetType.id===t.assetType.id&&(n.isSelected(!0),n.isActivated(!0))}),n._inputType=
undefined,!0):!1})},u}(MsPortalFx.ViewModels.Controls.Lists.Grid.ViewModel);n.ServicesListPartViewModel=
l}(e||(e={})),e})