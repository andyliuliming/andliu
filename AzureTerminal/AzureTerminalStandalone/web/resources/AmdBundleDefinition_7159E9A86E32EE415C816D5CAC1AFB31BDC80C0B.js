define("HubsExtension/BrowseResource/ViewModels/Resource/BrowseResourceColumnsListPartViewModel",["require",
"exports","HubsExtension/Browse/BrowseClientStrings","../../../Telemetry"],function(n,t,i,r){var u;return function(
n){"use strict";var t=MsPortalFx.ViewModels.Controls.Lists.Grid,o=r.Source.BrowseBlade,s=r.Action,u=
"24px",f="100%",e=function(){function n(n,r,e){var s=t.Extensions.SelectableRow|t.Extensions.ReorderRow,
h={selectableRow:{selectionMode:1},reorderRow:{},resizableColumn:{resizable:ko.observable(!1)}},o;this.
_container=n;this._dataContext=e;this._operation=ko.observable();this.resourceType=ko.observable();o=
[{name:ko.observable(""),itemKey:"visible",width:ko.observable(u),format:1e3,formatOptions:{htmlBindingsType:
1}},{name:ko.observable(i.ColumnTitles.column),itemKey:"name",width:ko.observable(f)}];this.columnsGridViewModel=
new t.ViewModel(n,null,s,h);this.columnsGridViewModel.showHeader=!1;this.columnsGridViewModel.columns=
ko.observableArray(o);this.columnsGridViewModel.noRowsMessage(i.loading)}return n.prototype.onInputsSet=
function(n){var t=this;return this.resourceType(n.resourceType),this._operation(this._dataContext.getSettingsOperation(
n.operation)),this._operation().applySettings=function(){t._applyColumns()},this._operation().revertSettings=
function(){t._revertColumns()},this.columnsGridViewModel.noRowsMessage(""),this._operation()&&this._populateFromResourceType(
),null},n.prototype._populateFromResourceType=function(){var n=this,t=function(t){n._operation().canApplySettings(
!1);n.columnsGridViewModel.items([]);t&&(n._originalColumns||(n._originalColumns=t.slice(0)),t.forEach(
function(t){n.columnsGridViewModel.items.push({id:ko.observable(t.id),name:ko.observable(t.name.toLocaleUpperCase(
)),visible:ko.observable(t.visible),commandGroup:ko.observable(),commandGroupOwner:ko.observable()})}
),n._operation().canApplySettings(!0))},i=this._dataContext.getBrowseColumns(this.resourceType());t(
i());i.subscribe(this._container,function(n){t(n)})},n.prototype._applyColumns=function(){var n=[];this.
columnsGridViewModel.items().forEach(function(t){n.push({id:t.id(),name:t.name(),visible:t.visible()})}
);this._dataContext.setBrowseColumns(this.resourceType(),n)},n.prototype._revertColumns=function(){this.
_originalColumns&&this._dataContext.setBrowseColumns(this.resourceType(),this._originalColumns)},n}(
);n.BrowseResourceColumnsListPartViewModel=e}(u||(u={})),u})