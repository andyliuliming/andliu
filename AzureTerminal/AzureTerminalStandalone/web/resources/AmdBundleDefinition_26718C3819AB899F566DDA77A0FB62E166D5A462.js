var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl.Controls/Controls/Visualization/Chart",
["require","exports","../Base/Base","../Base/Loadable","MsPortalImpl.Controls/Resources/MsPortalImplResources",
"Viva.Controls/Util/Resize","Viva.Controls/Util/Util","Viva.Controls/Controls/Visualization/ChartBase",
"Viva.Controls/Controls/Visualization/Chart","Viva.Controls/Util/ColorUtil","Viva.Controls/Controls/Visualization/Legend",
"Viva.Controls/Util/Hatching","Viva.Controls/Util/UnitConversion"],function(n,t,i,r,u,f,e,o,s,h,c,l,
a){var v;return function(n){"use strict";var d=MsPortalFx.ViewModels.Controls.Visualization.Metrics,
et=MsPortalFx.ViewModels.Controls.Visualization.Chart,v="azc-color-",p="fxcontrol-chart",i=e.isDevMode(
),y=85,l=175,t=355,w=535,g=65,nt=105,b=h.getRainbowColorCode(0),tt=b.length,k=u.Chart.noValueString,
it=".fxcontrol-chart-graph-area",rt=".fxcontrol-chart-graph-and-legend",ut="<div class='fxcontrol-chart-graph-and-legend'><div class='fxcontrol-chart-graph-area'><\/div><!-- ko if: func._showLegend --><div class='fxcontrol-chart-legend-area-container'><div class='fxcontrol-chart-legend-area' data-bind='azcLegend: func._nestedLegendViewModel'><\/div><\/div><!-- /ko --><\/div><!-- ko if: func._showMetrics --><div data-bind='pcMetrics: data.metrics'><\/div><!-- /ko -->",
ft=function(n){function r(t,i,r){this._isResizing=!1;n.call(this,t,i,$.extend({fillBehavior:3},r));this.
_initializeWidgets()}return __extends(r,n),r._convertMsPortalUnitToVivaUnit=function(n){var t=a.Unit,
i=MsPortalFx.UnitConversion.Unit[n];return t[i]},Object.defineProperty(r.prototype,"options",{get:function(
){return this._options},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){this._checkExistsOrRegisterDestroyId(
n.prototype.dispose)||(n.prototype.dispose.call(this),this._cleanElement(p))},r.prototype._initializeWidgets=
function(){var n=this;this._sizeAllowMetricsToShow=ko.observable(!0);this._sizeAllowLegendToShow=ko.
observable(!1);this._sizeAllowXAxisToShow=ko.observable(!0);this._sizeAllowYAxisToShow=ko.observable(
!0);this._sizeBasedXTicks=ko.observable(0);this._sizeBasedYTicks=ko.observable(0);this._sizeUpdated=
new MsPortalFx.Util.KnockoutDelayTrigger({rateLimit:{timeout:20,method:"notifyWhenChangesStop"}});this.
_metricRuleUpdateNeeded=new MsPortalFx.Util.KnockoutDelayTrigger({rateLimit:30});this._initializeNestedChartViewModel(
);this._initializeComputedNestedLegendViewModel();this._addDisposablesToCleanUp(this._showMetrics=ko.
computed(function(){return n._sizeAllowMetricsToShow()&&n.options.metrics.visible()}));this._addDisposablesToCleanUp(
this._showLegend=ko.computed(function(){return n._sizeAllowLegendToShow()&&n.options.legendPosition(
)!==0}));this._addDisposablesToCleanUp(this._nestedChartGraphViewModel.xAxis.showAxis=ko.computed(function(
){return n._sizeAllowXAxisToShow()&&n.options.xAxis.showAxis()}));this._addDisposablesToCleanUp(this.
_nestedChartGraphViewModel.yAxis.showAxis=ko.computed(function(){return n._sizeAllowYAxisToShow()&&n.
options.yAxis.showAxis()}));this._addDisposablesToCleanUp(this._nestedChartGraphViewModel.xAxis.ticks=
ko.computed(function(){return n.options.xAxis.ticks()||n._sizeBasedXTicks()}));this._addDisposablesToCleanUp(
this._nestedChartGraphViewModel.yAxis.ticks=ko.computed(function(){return n.options.yAxis.ticks()||n.
_sizeBasedYTicks()}));this._addDisposablesToCleanUp(this._nestedChartGraphViewModel.xAxis.unit=ko.computed(
function(){return r._convertMsPortalUnitToVivaUnit(n.options.xAxis.unit())}));this._addDisposablesToCleanUp(
this._nestedChartGraphViewModel.yAxis.unit=ko.computed(function(){return r._convertMsPortalUnitToVivaUnit(
n.options.yAxis.unit())}));this.element.addClass(p).html(ut);this._bindDescendants();this._graphArea=
this.element.find(it);this._graphAndLegendArea=this.element.find(rt);this._addDisposablesToCleanUp(this.
_showMetrics.subscribe(function(){n._isResizing||n._calculateAndRenderGraph()}));this._addDisposablesToCleanUp(
this.options.metrics.size.subscribe(function(){n._isResizing||n._calculateAndRenderGraph()}));this._addDisposablesToCleanUp(
this._showLegend.subscribe(function(){n._isResizing||n._calculateAndRenderGraph()}));this._addDisposablesToCleanUp(
this.options.height.subscribe(function(){n._sizeUpdated.touch()}));this._addDisposablesToCleanUp(this.
options.width.subscribe(function(){n._sizeUpdated.touch()}));this._addDisposablesToCleanUp(f.track(this.
element,function(){n._sizeUpdated.touch()}));this._addDisposablesToCleanUp(this._sizeUpdated.value.subscribe(
function(){n._adjustLayoutBasedOnSize()}));this._adjustLayoutBasedOnSize();this._initializeComputedCssClassesForSeriesViews(
);this._initializeComputedMetricsViewModel()},r._generateCssClassNameFromSeriesIndex=function(n){return v+
b[n%tt]},r._getHatchingPattern=function(n){var i=0,t;return n&&(t=n,t&&t.hasOwnProperty("areaHatchingPattern")&&
(i=t.areaHatchingPattern())),i},r._getYValue=function(n){return n.yValue},r._getXValue=function(n){return n.
xValue},r._getAxisByAxisName=function(n,t){return t.first(function(t){return!n||t.name()===n})},r.prototype.
_initializeNestedChartViewModel=function(){this._nestedChartGraphViewModel=new o.ViewModel;this._nestedChartGraphViewModel.
populateFromObject(this.options);this._nestedChartGraphViewModel.height=ko.observable(0);this._nestedChartGraphViewModel.
width=ko.observable(0)},r.prototype._initializeComputedCssClassesForSeriesViews=function(){var n=this;
this._addDisposablesToCleanUp(ko.computed(function(){n._nestedChartGraphViewModel.views().forEach(function(
t){t.seriesView().forEach(function(t){t.cssClass().length||t.cssClass(n._generateCssClassNameFromSeriesName(
t.seriesName()))})})}))},r.prototype._initializeComputedNestedLegendViewModel=function(){var n=this,
t;this._nestedLegendViewModel=new c.ViewModel;this._nestedLegendViewModel.colorKey="cssClass";this._nestedLegendViewModel.
indexKey="identity";this._nestedLegendViewModel.selectedKey="selected";this._nestedLegendViewModel.labelKey=
"seriesName";this._nestedLegendViewModel.hatchingKey="hatchingPattern";this._addDisposablesToCleanUp(
ko.computed(function(){n._seriesIndexes={};n._nestedChartGraphViewModel.series().forEach(function(t,
i){n._seriesIndexes[t.name()]=i})}));this._addDisposablesToCleanUp(t=ko.computed(function(){var t=[];
return n._nestedChartGraphViewModel.views().forEach(function(i,r){var u=i.chartType(),f=u===1||u===6,
e=u===3||u===4||u===5||u===6,o=i.seriesView().length-1,s=e?function(n){return o-n}:function(n){return n}
;i.seriesView().forEach(function(i,u){if(!i.hideFromLegend()){var e=f?ko.utils.unwrapObservable(i.areaHatchingPattern):
0;t.push({cssClass:i.cssClass(),selected:ko.observable(!1),seriesName:i.displayName()||i.seriesName(
),identity:n._getSeriesIdentityFromIndex(r,s(u)),hatchingPattern:e})}})}),t}));this._nestedLegendViewModel.
data=MsPortalFx.Util.thunkArray(this.lifetimeManager,t);this._addDisposablesToCleanUp(ko.computed(function(
){var t=n._getSelectedIdentities();n._nestedLegendViewModel.data().forEach(function(n){n.selected(t.
indexOf(n.identity)>=0)})}));this._addDisposablesToCleanUp(ko.computed(function(){var t=n._getSelectedIdentities(
);n._nestedLegendViewModel.data().forEach(function(i){var r,f,e,u;r=i.selected();u=t.indexOf(i.identity)>=
0;(u&&!r||!u&&r)&&n._savedChartGraphInstance&&(f=n._getSeriesViewIndexFromIdentity(i.identity),e=n._getViewIndexFromIdentity(
i.identity),n._savedChartGraphInstance.toggleSeriesSelection(e,f,null))})}));this._addDisposablesToCleanUp(
ko.computed(function(){var t=n._nestedLegendViewModel.hoveredIndex(),i,r;n._protectFromCircularHoverUpdate?
n._protectFromCircularHoverUpdate=!1:e.isNullOrUndefined(t)?n._nestedChartGraphViewModel.seriesHovers(
[]):(i=n._getSeriesViewIndexFromIdentity(t),r=n._getViewIndexFromIdentity(t),n._savedChartGraphInstance.
setSeriesHover(r,i,null,!0))}));this._addDisposablesToCleanUp(ko.computed(function(){var u=n._nestedChartGraphViewModel.
seriesHovers(),f=n._nestedChartGraphViewModel.hoveredID(),t,i,r=null;u.length===1?(t=u[0].seriesViewIndex.
peek(),i=u[0].chartViewIndex.peek(),r=n._getSeriesIdentityFromIndex(i,t)):f.length===1&&(t=f[0].seriesViewIndex.
peek(),i=f[0].chartViewIndex.peek(),r=n._getSeriesIdentityFromIndex(i,t));n._nestedLegendViewModel.hoveredIndex.
peek()!==r&&(n._protectFromCircularHoverUpdate=!0,n._nestedLegendViewModel.hoveredIndex(r))}))},r.prototype.
_getLegendItemsForIdentity=function(n){return this._nestedLegendViewModel.data().filter(function(t){
return t.identity===n})},r.prototype._getSelectedIdentities=function(){var n=this;return this._nestedChartGraphViewModel.
seriesSelections().map(function(t){return n._getSeriesIdentityFromIndex(t.chartViewIndex(),t.seriesViewIndex(
))})},r.prototype._getSelectedSeriesIndexes=function(){var n=this;return this._nestedChartGraphViewModel.
seriesSelections().map(function(t){return n._getSeriesIndexFromSeriesName(n._getSeriesNameFromSeriesId(
t))}).filter(function(n){return n!==null})},r.prototype._getSeriesSelections=function(){var n=this.options.
seriesSelections();return!n||n.length===0?this.options.seriesHovers():n},r.prototype._initializeComputedMetricsViewModel=
function(){var n=this;this.lifetimeManager.registerForDispose(this.options.series.subscribe(function(
){n._metricRuleUpdateNeeded.touch()}));this.lifetimeManager.registerForDispose(this.options.metricsRules.
subscribe(function(){n._metricRuleUpdateNeeded.touch()}));this.lifetimeManager.registerForDispose(this.
_metricRuleUpdateNeeded.value.subscribe(function(){n._wireupMetricsComputed()}));this._wireupMetricsComputed(
)},r.prototype._wireupMetricsComputed=function(){this._metricsLifetimeManager&&(this._metricsLifetimeManager.
dispose(),this._metricsLifetimeManager=null);this._metricsLifetimeManager=this.lifetimeManager.createChildLifetime(
);this._createMetricsComputed(this._metricsLifetimeManager)},r.prototype._createMetricsComputed=function(
n){var t=this,i;n.registerForDispose(i=ko.computed(function(){var i=[],u=t.options.metricsRules()||[
],r,e=t.options.seriesHovers().length,o=t.options.hoveredID().length,f=t.options.metrics.items.peek(
);u.length>0?(r=u.filter(function(n){return t._checkRuleMatch(n,!0)}),r.length===0&&(r=u.filter(function(
n){return n.scope()===0})),r.forEach(function(r){(r.metrics()||[]).forEach(function(u){i=i.concat(t.
_createMetrics(n,r,u))})})):i=f||[];t._updateMetricsViewModelData(n,i)}));i.extend({rateLimit:30})},
r.prototype._updateMetricsViewModelData=function(n,t){var f=this.options.metrics.items.peek(),r,i,u;
t.length>f.length?this.options.metrics.items(t):f.forEach(function(f,o){u=!1;o>=t.length?f.hide(!0):
(f.hide(!1),e.fillObserableFields(t[o],f,["value","unit","caption","barCssClass","showBarColor","hatchingPattern",
"prioritized","unitAlignment"]),r=ko.utils.unwrapObservable(t[o].infoBalloon),r?(f.hideInfoBalloon(!1),
i=ko.utils.unwrapObservable(f.infoBalloon),r!==i&&(i||(i=new MsPortalFx.ViewModels.Controls.DockedBalloon.
ViewModel(n),i.type=r.type,u=!0),e.fillObserableFields(r,i,["balloonVisible","content","disabled","link",
"position"]),(u||i.type!==r.type)&&f.infoBalloon(i))):f.hideInfoBalloon(!0))})},r.prototype._createMetrics=
function(n,t,i){var e=this,f=[],r,o=this.options.hoveredID().map(function(n){return e._getSeriesNameFromSeriesId(
n)}),u;switch(i.aggregationScope()){case 2:case 0:r=this._createMetric(n,t,i,this._getMetricsRuleActionSeriesIndex(
t,i),o);r&&f.push(r);break;case 1:u=this._getSelectedSeriesIndexes();u.length===0&&(u=d3.range(this.
options.series().length));u.forEach(function(u){r=e._createMetric(n,t,i,u,o);r&&f.push(r)})}return f}
,r.prototype._createMetric=function(n,t,u,f,o){var tt=this.options.series(),s,l=u.colorCode(),it=u.hatchingPattern(
),c,y,p,rt=l?v+l:null,w,b,ut,h,ft,ot,k,st,g,nt=null,et;return MsPortalFx.Util.isNullOrUndefined(f)||
tt.length===0||f>=tt.length?null:(i&&console.assert(!l||!(l.indexOf(v)>=0),"Invalid metric rule colorCode specified '{0}'. Should not have '{1}' prefix.".
format(l,v)),s=new d.SingleMetric(n),s.showBarColor(u.showBarColor()),y=tt[f].name(),p=u.title(),g=u.
defaultInfoBalloon(),g&&(nt=new MsPortalFx.ViewModels.Controls.DockedBalloon.ViewModel(n),nt.type=g.
type,e.fillObserableFields(g,nt,["balloonVisible","content","disabled","link","position"])),c=this._getFirstSeriesView(
y),rt=rt||c&&c.cssClass()||this._generateCssClassNameFromSeriesName(y),p=p||c&&c.displayName()||y,it=
it||r._getHatchingPattern(c),o.indexOf(y)>=0&&s.prioritized(!0),s.caption(p),s.barCssClass(rt),s.infoBalloon(
nt),st=it,s.hatchingPattern(st),w=u.unit(),h=this._calculateMetricsValue(f,u),ft=$.isNumeric(h),w||(
et=this._getOriginalUnit(f,u),b=et.unit,ut=et.autoScale&&ft?a.getAppropriateUnit(h,b):b,k=a.getConversionFactor(
b,ut),w=a.toString(ut),k&&k!==1&&(h=h/k)),u.aggregationType()===7&&ft&&(ot=parseFloat(h),h=ot),s.unit(
w),s.value(this._formatMetricsValue(h,u)),s)},r.prototype._xAxes=function(){return[this._nestedChartGraphViewModel.
xAxis].concat(this._nestedChartGraphViewModel.secondaryXAxes())},r.prototype._yAxes=function(){return[
this._nestedChartGraphViewModel.yAxis].concat(this._nestedChartGraphViewModel.secondaryYAxes())},r.prototype.
_getAxisByIndex=function(n,t){var i=o.SeriesUtilities.getAxisName(this._nestedChartGraphViewModel.series(
)[n],"x");switch(t){case"x":return r._getAxisByAxisName(i,this._xAxes());case"y":return r._getAxisByAxisName(
i,this._yAxes())}return null},r.prototype._getOriginalUnit=function(n,t){var i,f=a.Unit.None,r,u={unit:
f,autoScale:!0};switch(t.aggregationType()){case 0:r="x";break;case 6:r=null;u.unit=a.Unit.Count;break
default:r="y"}return r&&(i=this._getAxisByIndex(n,r),i&&(u.unit=ko.utils.unwrapObservable(i.unit),i.
autoScaleUnit&&(u.autoScale=i.autoScaleUnit()))),u},r.prototype._checkRuleMatch=function(n,t){var i=
this._getSeriesSelections(),r=n.scopeSeriesName();switch(n.scope()){case 4:return i.length>1&&this._checkAnyDataPointsSelected(
)&&this._matchSeriesSelection(r);case 3:return i.length===1&&i[0].chartItems().length>1&&this._matchSeriesSelection(
r);case 2:return i.length===1&&i[0].chartItems().length===1&&this._matchSeriesSelection(r);case 0:default:
return!t}},r.prototype._getSeriesNameFromSeriesId=function(n){var t=n.chartViewIndex(),r=n.seriesViewIndex(
);return i&&console.assert($.isNumeric(t)&&t>=0,"chartViewIndex should be numberic and >= 0.  Current: "+
t),i&&console.assert($.isNumeric(r)&&r>=0,"seriesViewIndex should be numberic and >= 0.  Current: "+
r),this._getSeriesName(t,r)},r.prototype._matchSeriesSelection=function(n){var t=this;return e.isNullOrUndefined(
n)?!0:this._getSeriesSelections().some(function(i){return t._getSeriesNameFromSeriesId(i)===n})},r.prototype.
_checkAnyDataPointsSelected=function(){return this._getSeriesSelections().some(function(n){return!e.
isNullOrUndefined(n.chartItems())&&n.chartItems().length>0})},r.prototype._getMetricsRuleActionSeriesIndex=
function(n,t){var r=t.aggregationSeriesName()||n.scopeSeriesName(),i;return r?this._getSeriesIndexFromSeriesName(
r):(i=this._getSeriesSelections(),!e.isNullOrUndefined(i)&&i.length>0?this._getSeriesIndexFromSeriesName(
this._getSeriesNameFromSeriesId(i[0])):null)},r.prototype._calculateMetricsValue=function(n,t){var e=
this,o=t.aggregationType(),i,u,f;return o===7?t.customValue():(t.aggregationScope()===0?i=this._getAllChartItemsSelected(
):(u=this._getSeriesSelections().filter(function(t){return e._getSeriesIndexFromSeriesName(e._getSeriesNameFromSeriesId(
t))===n}),i=u&&u.length>0?this._getChartItemsSelected(u[0]):this._getAllChartItemsForSeriesName(n)),
i.length>0&&(f=r._getAggregationFunctions()[o],f))?f(i):k},r._getAggregationFunctions=function(){if(
!r._aggregationFunctions){var t=function(n,t){var i=n.first();return i&&t?t(i):i},n=function(n,t){return function(
i){return n(i,t)}};r._aggregationFunctions=[n(t,r._getXValue),n(t,r._getYValue),n(d3.min,r._getYValue),
n(d3.max,r._getYValue),n(d3.mean,r._getYValue),n(d3.sum,r._getYValue),function(n){return n.length},]}
return r._aggregationFunctions},r.prototype._formatMetricsValue=function(n,t){if(e.isNullOrUndefined(
n))return k;var i;return t.unit()?n.toString():typeof n!="number"?isFinite(n)&&t.outputFormat()?n.toString(
t.outputFormat()):n.toString():(i=2,t.aggregationType()===6&&(i=0),e.toNiceFixed(n,i))},r.prototype.
_getChartItemsSelected=function(n){var t=n.chartItems();return!t||t.length===0?this._getAllChartItemsForSeriesName(
this._getSeriesIndexFromSeriesName(this._getSeriesNameFromSeriesId(n))):t},r.prototype._getAllChartItemsForSeriesName=
function(n){var t=this._nestedChartGraphViewModel.series()[n];return t?o.SeriesUtilities.getChartItemArrayBySeriesBase(
t,!0):[]},r.prototype._getAllChartItemsSelected=function(){var t=this,n=[];return this._getSeriesSelections(
).forEach(function(i){Array.prototype.push.apply(n,t._getChartItemsSelected(i))}),n},r.prototype._getFirstSeriesView=
function(n){var t=null;return this.options.views().some(function(i){return i.seriesView().some(function(
i){return i.seriesName()===n?(t=i,!0):!1})}),t},r.prototype._getSeriesIndexFromSeriesName=function(n)
{var i,r,t,u;if(this._savedChartGraphInstance&&(i=this._savedChartGraphInstance.getSeriesIndexBySeriesName(
n)),e.isNullOrUndefined(i)){for(r=this._nestedChartGraphViewModel.series(),u=r.length,t=0;t<u;t++)if(
r[t].name()===n)return t;return null}return i},r.prototype._getSeriesName=function(n,t){var i,f,r,u;
if(this._savedChartGraphInstance&&(i=this._savedChartGraphInstance.getSeriesName(n,t)),e.isNullOrUndefined(
i)){if(f=this._nestedChartGraphViewModel.views(),r=f[n],r&&(u=r.seriesView()[t],u))return u.seriesName(
)}else return i;return null},r.prototype._generateCssClassNameFromSeriesName=function(n){var t=this.
_getSeriesIndexFromSeriesName(n);return e.isNullOrUndefined(t)?"":r._generateCssClassNameFromSeriesIndex(
t)},r.prototype._getSeriesViewIndexFromIdentity=function(n){return this._getIndexFromIdentity(n,1)},
r.prototype._getViewIndexFromIdentity=function(n){return this._getIndexFromIdentity(n,0)},r.prototype.
_getIndexFromIdentity=function(n,t){return e.isNullOrUndefined(n)?null:parseInt(n.split("_")[t])},r.
prototype._getSeriesIdentityFromIndex=function(n,t){return i&&console.assert($.isNumeric(n)&&n>=0,"chartViewIndex should be numberic and >= 0.  Current: "+
n),i&&console.assert($.isNumeric(t)&&t>=0,"seriesViewIndex should be numberic and >= 0.  Current: "+
t),n+"_"+t},r.prototype._getMetricsHeight=function(){return g},r.prototype._calculateAndRenderGraph=
function(){this._showLegend()?this._graphArea.width(this._width-nt):this._graphArea.width(this._width);
this._showMetrics()?this._graphArea.height(this._height-this._getMetricsHeight()):this._graphArea.height(
this._height);this._graphAndLegendArea.height(this._graphArea.height());this._nestedChartGraphViewModel.
width(this._graphArea.width());this._nestedChartGraphViewModel.height(this._graphArea.height());this.
_savedChartGraphInstance||this.widgets.push(this._savedChartGraphInstance=new s.Widget(this._graphArea,
this._nestedChartGraphViewModel))},r.prototype._adjustLayoutBasedOnSize=function(){this._isResizing=
!0;this._height=this.options.height()||this.element.height();this._width=this.options.width()||this.
element.width();this._isUnderMini()||this._isUnderSmall()?(this._sizeAllowMetricsToShow(!1),this._sizeAllowLegendToShow(
!1),this._sizeAllowXAxisToShow(!1),this._sizeAllowYAxisToShow(!1)):this._isUnderNormal()||this._isUnderWide(
)?(this.options.metrics.size(0),this._sizeAllowMetricsToShow(!1),this._sizeAllowLegendToShow(!1),this.
_sizeAllowXAxisToShow(!1),this._sizeAllowYAxisToShow(!0),this._sizeBasedYTicks(3)):this._isUnderTall(
)?(this.options.metrics.size(2),this._sizeAllowMetricsToShow(!0),this._sizeAllowLegendToShow(!1),this.
_sizeAllowXAxisToShow(!0),this._sizeAllowYAxisToShow(!0),this._sizeBasedYTicks(5),this._sizeBasedXTicks(
2)):this._isUnderLarge()?(this.options.metrics.size(2),this._sizeAllowMetricsToShow(!0),this._sizeAllowLegendToShow(
!1),this._sizeAllowXAxisToShow(!0),this._sizeAllowYAxisToShow(!0),this._sizeBasedXTicks(3),this._sizeBasedYTicks(
5)):this._isUnderHeroTall()?(this.options.metrics.size(2),this._sizeAllowMetricsToShow(!0),this._sizeAllowLegendToShow(
!1),this._sizeAllowXAxisToShow(!0),this._sizeAllowYAxisToShow(!0),this._sizeBasedXTicks(3),this._sizeBasedYTicks(
10)):this._isUnderHeroWide()?(this.options.metrics.size(2),this._sizeAllowMetricsToShow(!0),this._sizeAllowLegendToShow(
!0),this._sizeAllowXAxisToShow(!0),this._sizeAllowYAxisToShow(!0),this._sizeBasedXTicks(5),this._sizeBasedYTicks(
5)):(this.options.metrics.size(2),this._sizeAllowMetricsToShow(!0),this._sizeAllowLegendToShow(!0),this.
_sizeAllowXAxisToShow(!0),this._sizeAllowYAxisToShow(!0),this._sizeBasedXTicks(5),this._sizeBasedYTicks(
10));this._calculateAndRenderGraph();this._isResizing=!1},r.prototype._isUnderMini=function(){return this.
_isUnder(y,y)},r.prototype._isUnderSmall=function(){return this._isUnder(l,y)},r.prototype._isUnderNormal=
function(){return this._isUnder(l,l)},r.prototype._isUnderWide=function(){return this._isUnder(t,l)}
,r.prototype._isUnderTall=function(){return this._isUnder(l,t)},r.prototype._isUnderLarge=function()
{return this._isUnder(t,t)},r.prototype._isUnderHeroTall=function(){return this._isUnder(t,w)},r.prototype.
_isUnderHeroWide=function(){return this._isUnder(w,t)},r.prototype._isUnder=function(n,t){return this.
_width<=n&&this._height<=t},r}(r.Widget);n.Widget=ft}(v||(v={})),v});__extends=this.__extends||function(
n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r};define("Viva.Controls/Controls/Visualization/Chart",["require","exports","./ChartBase",
"./StackedAreaChartViewImpl","../../Util/Util","./ScatterChartViewImpl","./LineChartViewImpl","./AreaChartViewImpl",
"./BarChartViewImpl"],function(n,t,i,r,u,f,e,o,s){var h;return function(n){"use strict";var t="azc-chart",
h="azc-chart-y-axis-slice",c="azc-stroke-heavy",l="azc-chart-view",a="azc-chart-viewBox",v=".azc-chart-viewBox",
y=function(n){function y(r,u,f){var e=this,o,s;this._xSliceHoverCoordinate=ko.observable(null);this.
_chartDataImmediateUpdatedCounter=0;this._internalViewImplsArray=[];n.call(this,r,u,$.extend({viewModelType:
i.ViewModel},f));o=!1;this.element.addClass(t);this._addDisposablesToCleanUp(this.options.enableTrackXSlider.
subscribe(s=function(n){n?(o||(o=!0,e.options.seriesHovers.extend({rateLimit:100,method:"notifyWhenChangesStop"})),
e._xSliceHoverTrackComputed||(e._xSliceHoverTrackComputed=ko.computed(function(){e.options.xSliderCoordinate(
e._xSliceHoverCoordinate())}),e._xSliderCoordinateSubscription=e.options.xSliderCoordinate.subscribe(
function(n){var t=e._xSliceHoverCoordinate();n!==null&&n!==t&&e._renderXSliceHover(n);n===null&&n!==
t&&(e._cleanXSliceHover(),e._xSliceHoverCoordinate(null))}))):(e._xSliceHoverTrackComputed&&(e._xSliceHoverTrackComputed.
dispose(),e._xSliceHoverTrackComputed=null,e._xSliderCoordinateSubscription.dispose(),e._xSliderCoordinateSubscription=
null),o&&(o=!1,e.options.seriesHovers.extend({rateLimit:0})))}));this._addDisposablesToCleanUp(this.
_chartDataImmediateUpdated=ko.computed(function(){return e._checkForChartUpdate(),e._chartDataImmediateUpdatedCounter=
e._chartDataImmediateUpdatedCounter+1&4095}));this._addDisposablesToCleanUp(this._chartDataImmediateUpdated.
subscribe(function(){e._internalSeriesIndexDictionary=null;e._internalViewImplsArrayIsCurrent=!1}));
s(this.options.enableTrackXSlider());this._init()}return __extends(y,n),y.prototype.dispose=function(
){this._checkExistsOrRegisterDestroyId(n.prototype.dispose)||(n.prototype.dispose.call(this),this._internalViewImplsArray&&
this._internalViewImplsArray.length>0&&(this._internalViewImplsArray.forEach(function(n){n.dispose()}
),this._internalViewImplsArray=[]),this._xSliceHoverTrackComputed&&(this._xSliceHoverTrackComputed.dispose(
),this._xSliceHoverTrackComputed=null,this._xSliderCoordinateSubscription.dispose(),this._xSliderCoordinateSubscription=
null),this._cleanup(),this._internalSeriesIndexDictionary=null,this._cleanElement(t))},Object.defineProperty(
y.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),y.prototype.
toggleSeriesSelection=function(n,t,i){this._viewImplsArray[n].toggleSeriesSelection(t,i)},y.prototype.
getSeriesName=function(n,t){var i=this._viewImplsArray[n];return i&&i.seriesViewImpls[t]?i.seriesViewImpls[
t]._seriesName:null},y.prototype.getSeriesIndexForSeriesViewIndex=function(n,t){var i=this._viewImplsArray[
n];return i&&i.seriesViewImpls[t]?i.seriesViewImpls[t]._seriesIndex:null},y.prototype._getSeriesViewsForSeriesIndex=
function(n,t){var i=this._viewImplsArray[n];return i.seriesViewImpls.filter(function(n){return n._seriesIndex===
t})},y.prototype.setSeriesHover=function(n,t,i,r){var f=this._viewImplsArray[n],u;f&&(u=f.seriesViewImpls[
t],u&&u.setSeriesHover(i,r))},y.prototype.getSeriesIndexBySeriesName=function(n){return this._seriesIndexDictionary[
n]},y.prototype.getXAxisIndexBySeriesIndex=function(n){return this._mappedXAxisIndex[n]},y.prototype.
getYAxisIndexBySeriesIndex=function(n){return this._mappedYAxisIndex[n]},y.prototype._renderXSliceHover=
function(n){if(!this._inRenderXSliceHover){this._inRenderXSliceHover=!0;var t=this._viewImplsArray.some(
function(n){return n.isHoverHandled});this._xSliceHoverCoordinate(n);this._renderXSlice(n,t);t||this.
_createXAxisSliceHover(n);this._inRenderXSliceHover=!1}},y.prototype._cleanXSliceHover=function(n){this.
_xSliderSvg&&this._xSliderSvg.style("display","none");n||this.options.seriesHovers([])},y.prototype.
_init=function(){this._render()},y.prototype._render=function(){this._checkForNoData();this._internalSeriesIndexDictionary||
this._immediateSeriesUpdated();this._internalViewImplsArrayIsCurrent||this._reInitViewImplArray()},y.
prototype._onChartDataUpdated=function(){n.prototype._onChartDataUpdated.call(this);this._render()},
y.prototype._onChartSizeUpdated=function(){this._internalViewImplsArrayIsCurrent=!1;this._render()},
y.prototype._plotAreaMouseEnter=function(){this.options.events&&this.options.events.plotAreaMouseEnter&&
this._applyWithCoordinates(this.options.events.plotAreaMouseEnter)},y.prototype._plotAreaMouseMove=function(
){if(this.options.disableXSliderMouseout&&this.options.disableXSliderMouseout()){var n=this._getCoordinates(
)[0];this._xSliceHoverCoordinate(n);this._renderXSlice(n,!0)}},y.prototype._plotAreaMouseLeave=function(
){this.options.events&&this.options.events.plotAreaMouseLeave&&this._applyWithCoordinates(this.options.
events.plotAreaMouseLeave)},y.prototype._plotAreaClick=function(){this.options.events&&this.options.
events.plotAreaClick&&this._applyWithCoordinates(this.options.events.plotAreaClick)},y.prototype._cleanup=
function(){this._chartSvg.selectAll(".azc-chart-callout").remove();this._chartSvg.selectAll(v).remove(
);this._internalViewImplsArray&&this._internalViewImplsArray.forEach(function(n){n.element.remove();
n.dispose()});this._internalViewImplsArray=[];this._internalViewImplsArrayIsCurrent=!1},y.prototype.
_checkForChartUpdate=function(){var i=this._options,t=i.views();return n.prototype._checkForChartUpdate.
call(this),t?!0:!1,this._yAxes().forEach(function(n){n.checkForUpdate()}),this._xAxes().forEach(function(
n){n.checkForUpdate()}),t&&t.length>0&&t.forEach(function(n){var t,i,r,u,f;switch(n.chartType()){case
0:t=n;t.seriesView().forEach(function(n){ko.utils.unwrapObservable(n.interpolation);ko.utils.unwrapObservable(
n.lineStyle);ko.utils.unwrapObservable(n.showDataPoints);y._checkForUpdateSeriesView(n)});break;case
4:case 3:case 5:i=n;i.seriesView().forEach(function(n){y._checkForUpdateSeriesView(n)});break;case 1:
r=n;r.seriesView().forEach(function(n){ko.utils.unwrapObservable(n.interpolation);ko.utils.unwrapObservable(
n.areaHatchingPattern);y._checkForUpdateSeriesView(n)});break;case 6:u=n;u.seriesView().forEach(function(
n){ko.utils.unwrapObservable(n.interpolation);ko.utils.unwrapObservable(n.areaHatchingPattern);y._checkForUpdateSeriesView(
n)});break;case 2:f=n;f.seriesView().forEach(function(n){ko.utils.unwrapObservable(n.radius);y._checkForUpdateSeriesView(
n)})}}),!0},Object.defineProperty(y.prototype,"_getXSliderCoordinate",{get:function(){return this._xSliceHoverCoordinate}
,enumerable:!0,configurable:!0}),y.prototype._mouseMoveHandler=function(){this._renderXSliceHover(this.
_getCoordinates()[0])},y.prototype._mouseOutHandler=function(n){var r=!this.options.disableXSliderMouseout||
!this.options.disableXSliderMouseout(),t,i;t=$(n.fromElement).closest(".azc-chart-canvas");t.length>
0&&(i=$.contains(t[0],n.toElement),i&&(r=!0));r&&(i?this._xSliceHoverCoordinate(this._getCoordinates(
)[0]):(this._cleanXSliceHover(),this._xSliceHoverCoordinate(null)))},Object.defineProperty(y.prototype,
"_seriesIndexDictionary",{get:function(){return this._internalSeriesIndexDictionary||this._immediateSeriesUpdated(
),this._internalSeriesIndexDictionary},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,
"_viewImplsArray",{get:function(){return this._internalViewImplsArrayIsCurrent||this._reInitViewImplArray(
),this._internalViewImplsArray},enumerable:!0,configurable:!0}),y.prototype._immediateSeriesUpdated=
function(){var n=this._options,t=n.views();this._internalSeriesIndexDictionary=y._createSeriesDictionary(
this.options.series())},y.prototype._reInitViewImplArray=function(){var t=this,n,c=this._options,i=c.
views();if(this._cleanup(),this._mapSeriesToAxis(),this._internalViewImplsArrayIsCurrent=!0,i&&i.length>
0){var u=this._width(),h=this._height(),v=this._chartSvg.append("svg").attr({top:0,left:0,width:u,height:
h,viewBox:"0 0 "+u+" "+h,"class":a});i.forEach(function(i,a){switch(i.chartType()){case 0:n=new e.LineChartViewImpl(
i);break;case 1:n=new o.AreaChartViewImpl(i);break;case 6:n=new r.StackedAreaChartViewImpl(i);break;
case 3:case 4:case 5:n=new s.BarChartViewImpl(i);break;case 2:n=new f.ScatterChartViewImpl(i);break;
default:throw new Error("The view type is not specified.");}t._internalViewImplsArray.push(n);n.chartViewIndex=
a;n.options=c;n.height=h;n.width=u;n.xAxes=t._xAxes();n.yAxes=t._yAxes();n.mappedXAxisIndex=t._mappedXAxisIndex;
n.mappedYAxisIndex=t._mappedYAxisIndex;n.seriesIndexDictionary=function(n){return t.getSeriesIndexBySeriesName(
n)};n.isHorizontalChart=t._isHorizontalChart();n.element=v.append("g").attr("class",l);n.mouseOutHandler=
function(){t._mouseOutHandler()};n.mouseMoveHandler=function(){t._mouseMoveHandler()};n.init(t.lifetimeManager)}
)}},y._checkForUpdateSeriesView=function(n){n.cssClass()?!0:!1;n.tooltipFormatter()?!0:!1;n.showTooltip(
)?!0:!1;y._checkForUpdateDataLabels(n.dataLabels());y._checkForUpdateRenderingConditions(n.renderingConditions(
))},y._checkForUpdateDataLabels=function(n){n.forEach(function(n){n.context()?!0:!1;n.formatter()?!0:
!1;n.style()?!0:!1})},y._checkForUpdateRenderingConditions=function(n){n.forEach(function(n){n.seriesName(
)?!0:!1;n.conditionOperator()?!0:!1;n.interpolation()?!0:!1})},y.prototype._applyWithCoordinates=function(
n){var t=this._getCoordinates();n(t[0],t[1])},y.prototype._getCoordinates=function(n){var i=n||this.
_chartSvg.node(),t=d3.mouse(i);return this._isHorizontalChart()?t.reverse():t},y.prototype._checkForNoData=
function(){var t=this._options,n=t.series();n&&n.length!==0?this._axisElement.attr("display",null):this.
_axisElement.attr("display","none")},y._createSeriesDictionary=function(n){var t={};return n.forEach(
function(n,i){n.name()&&(t[n.name()]=i)}),t},y.prototype._renderXSlice=function(n,t){var i=this,r,u;
this._cleanXSliceHover(t);r=[0,1];u=d3.svg.line().x(function(t){return i._isHorizontalChart()?t?i._width(
):0:n}).y(function(t){return i._isHorizontalChart()?n:t?i._height():0});this._xSliderSvg||(this._xSliderSvg=
this._chartSvg.append("path"),this._xSliderSvg.attr({"class":[h,c].join(" ")}));this._xSliderSvg.attr(
{d:u(r)}).style("display",null)},y.prototype._createXAxisSliceHover=function(n){if(!u.isNullOrUndefined(
n)){var i=[],r,t=this.options.xSliderFilterHoverThreshold&&this.options.xSliderFilterHoverThreshold(
);t&&t<.5&&t>0&&(r=this._width()*t);this._viewImplsArray.forEach(function(t){i=i.concat(t.getXSliceSeriesSubset(
n,r))});this.options.seriesHovers(i)}},y}(i.Widget);n.Widget=y}(h||(h={})),h});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Visualization/StackedAreaChartViewImpl",
["require","exports","./ChartBase","../../Util/Hatching","./StackedChartViewImpl","./ChartViewImpl",
"../../Util/Util"],function(n,t,i,r,u,f,e){var o;return function(n){"use strict";var rt=window,ut=jQuery,
h="azc-svg-style-fill",o="azc-chart-series-selected",w="azc-chart-view-stackedArea",ft="."+w,t="azc-stackedAreaChart-not-selected",
b="azc-stackedAreaChart-series",nt="azc-chart-series-hovered",c="."+b,a="azc-stackedAreaChart-series-group",
l="."+a,v="azc-stackedLineChart-series",s="."+v,y="azc-stackedLineChart-series-group",p="."+y,tt="azc-stackedLineChart-series-hover",
et="."+v,it=e.isDevMode(),k,d=function(n){function t(){n.apply(this,arguments)}return __extends(t,n),
t.prototype._attachAreaSeriesComputeds=function(n){this._viewImpl._attachSeriesComputeds(n,this._seriesViewIndex,
this._seriesView,!1)},t.prototype._attachLineSeriesComputeds=function(n){var t=this;this.renderLifetimeManager.
registerForDispose(ko.computed(function(){var i=t._viewImpl._view.lineState();i!==1&&t._createSelectedPlots(
n)}));this.renderLifetimeManager.registerForDispose(ko.computed(function(){var i=t._viewImpl._view.lineState(
);i!==1&&t._createHover(n)}));this._viewImpl._attachSeriesComputeds(n,this._seriesViewIndex,this._seriesView)}
,t}(u.StackedChartSeriesViewImpl),g;n.StackedAreaChartSeriesViewImpl=d;g=function(n){function u(t){n.
call(this,t);this._view=t;this._viewClass=w}return __extends(u,n),u.prototype.init=function(t){n.prototype.
init.call(this,t);this._initializeChartData();this._render()},u.prototype.dispose=function(){this.element.
selectAll(c).selectAll("."+h).on("click",null).on("mouseover",null).on("mouseleave",null);this.element.
selectAll(s).selectAll("."+h).on("click",null).on("mouseover",null).on("mouseleave",null);n.prototype.
dispose.call(this)},u.prototype._initializeChartData=function(){if(this._getNumberOfSeriesView()<=0)
{this.element.selectAll(c).remove();this._layers=null;return}n.prototype._initializeChartData.call(this)}
,u.prototype._render=function(){var t=this,i=0,n=this.yAxes[i];this._disposeRenderDisposables();n.internalMin(
0);n.internalMax(this._yStackMax);this._createStackedAreas(i,n);this.renderLifetimeManager.registerForDispose(
ko.computed(function(){t.element.selectAll(s).remove();var r=t._view.lineState();r!==1&&t._createStackedLines(
i,n,r)}))},u.prototype._createStackedAreas=function(n){var e=this,s=this._getStackedAreaShape(n),i=this,
u=!1;if(!this._layers){this.element.selectAll(c).remove();return}this.element.selectAll(c).remove();
this._areas=this.element.selectAll(c).data(this._layers).enter().append("g").attr("class",function(n,
t){return[b,n.cssClass,a+t].join(" ")}).append("path").attr("d",function(n){return s(n)}).attr("class",
h).on("mousemove",function(){u&&e.mouseMoveHandler()}).on("mouseenter",function(n,t){var r=i.isHoverHandled=
u=!0;i.isHoverHandled=!1;i.seriesViewImpls[t]._eventHandlerWrapper("seriesmouseover",null);i._setStackedAreaSeriesHover(
i.element.select(l+t),t,r);i._setStackedLineSeriesHover(i.element.select(p+t),r)}).on("mouseleave",function(
n,t){var r=i.isHoverHandled=u=!1;i.seriesViewImpls[t]._eventHandlerWrapper("seriesmouseleave",null);
i._setStackedAreaSeriesHover(i.element.select(l+t),t,r);i._setStackedLineSeriesHover(i.element.select(
p+t),r)}).on("click",function(n,r){var u=i.element.select(p+r);i.seriesViewImpls[r]._toggleSeriesSelection(
null);i.seriesViewImpls[r]._eventHandlerWrapper("seriesclick",null);this.parentNode.getAttribute("class").
indexOf(o)!==-1?(i._setStackedLineSeriesHover(u,!0),i._setStackedLineSeriesSelected(u,!0),d3.select(
this.parentNode).classed(t,!1),u.classed(t,!1)):(i._setStackedLineSeriesHover(u,!1),i._setStackedLineSeriesSelected(
u,!1));i._markNotSelected()}).each(function(n,t){var u=i.seriesViewImpls[t],e=u&&u._seriesView,o=e&&
ko.utils.unwrapObservable(e.areaHatchingPattern);u&&(u._attachAreaSeriesComputeds(d3.select(this.parentNode)),
o&&r.renderHatching(o,f.ChartViewImpl._getCssClass(u._seriesIndex,e),h,d3.select(this),i.element))})}
,u.prototype._getStackedAreaShape=function(n){var t=this;return d3.svg.area().x(function(i){return t.
_getScreenX(n,i.x)}).y0(function(i){return t._getScreenY(n,i.y0)}).y1(function(i){return t._getScreenY(
n,i.y0+i.y)})},u.prototype._createStackedLines=function(n,i,r){var e=this,u=this,c=this._getStackedLinesShape(
n),f=!1;if(!this._layers){this.element.selectAll(s).remove();return}this.element.selectAll(s).remove(
);this._lines=this.element.selectAll(s).data(this._layers).enter().append("g").attr("class",function(
n,t){return[v,n.cssClass,y+t].join(" ")}).append("path").attr("d",function(n){return c(n)}).attr("class",
h).on("mousemove",function(){f&&e.mouseMoveHandler()}).on("mouseenter",function(n,t){var i=u.isHoverHandled=
f=!0;u.isHoverHandled=!1;u._setStackedLineSeriesHover(d3.select(this.parentNode),i);u._setStackedAreaSeriesHover(
u.element.select(l+t),t,i)}).on("mouseleave",function(n,t){var i=u.isHoverHandled=f=!1;this.parentNode.
getAttribute("class").indexOf(o)===-1&&(u._setStackedLineSeriesHover(d3.select(this.parentNode),i),u.
_setStackedAreaSeriesHover(u.element.select(l+t),t,i))}).on("click",function(n,i){var r=u.element.select(
l+i);u.seriesViewImpls[i]._toggleSeriesSelection(null);u.seriesViewImpls[i]._eventHandlerWrapper("seriesclick",
null);this.parentNode.getAttribute("class").indexOf(o)!==-1?(u._setStackedLineSeriesHover(r,!0),u._setStackedLineSeriesSelected(
r,!0),d3.select(this.parentNode).classed(t,!1),r.classed(t,!1)):(u._setStackedLineSeriesHover(r,!1),
u._setStackedLineSeriesSelected(r,!1));u._markNotSelected()}).each(function(n,t){var i=u.seriesViewImpls[
t];i&&i._attachLineSeriesComputeds(d3.select(this.parentNode))});r===0&&this._createStackedLinePlots(
n,i)},u.prototype._getStackedLinesShape=function(n){var t=this;return d3.svg.line().x(function(i){return t.
_getScreenX(n,i.x)}).y(function(i){return t._getScreenY(n,i.y0+i.y)})},u.prototype._setStackedAreaSeriesHover=
function(n,t,r){var f=this.seriesViewImpls[t]._seriesView,u;(!f||f.hoverable())&&(n.classed(nt,r),r?
(u=new i.SeriesId,u.chartViewIndex(this.seriesViewImpls[t]._viewImpl.chartViewIndex),u.seriesViewIndex(
this.seriesViewImpls[t]._seriesViewIndex),this.options.hoveredID([u])):this.options.hoveredID([]))},
u.prototype._setStackedLineSeriesHover=function(n,t){n.classed(tt,t)},u.prototype._setStackedLineSeriesSelected=
function(n,t){n.classed(o,t)},u.prototype._createStackedLinePlots=function(){var n=this;this.element.
selectAll(s).each(function(t,i){var r=n.seriesViewImpls[i];r&&r._createDataPlots(d3.select(this))})}
,u.prototype._transformPlotValues=function(n,t){var r,f=[],e,u,o,s;return n&&n.length>0&&(this._layers&&
(u=this._layers.first(function(n){var i=n;return i.seriesViewIndex===t})),u&&(o=n.first(function(n){
return!!n.xValue}).xValue instanceof Date,s=o?function(n){return r.yValue===n.originalY&&Number(r.xValue)===
Number(n.originalX)}:function(n){return r.yValue===n.originalY&&r.xValue===n.originalX},n.forEach(function(
n){r=n;var t=u.first(s);t&&(e=new i.StackedChartItem(t.originalX,t.originalY,t.y0),f.push(e))}))),f}
,u.prototype._toggleSinglePlotSelection=function(n){var i=this.element.select("."+y+n),r=this.element.
select("."+a+n),u=!1;this.options.seriesSelections().forEach(function(t){n===t.seriesViewIndex()&&(u=
!0)});r&&i&&(u&&(i.classed(t,!1),i.classed(o,!0),r.classed(t,!1),r.classed(o,!0)),this._markNotSelected(
))},u.prototype._markNotSelected=function(){this.element.selectAll("."+o)[0].length>0?this.element.selectAll(
":not(."+o+")").classed(t,!0):this.element.selectAll("."+t).classed(t,!1)},u.prototype._createSeriesViewImpl=
function(n,t,r){return it&&console.assert(r instanceof MsPortalFx.ViewModels.Controls.Visualization.
Chart.StackedAreaChartSeriesView||r instanceof i.StackedAreaChartSeriesView||e.shapeContains(e.getObjectBasicShape(
r),k||(k=e.getObjectBasicShape(new i.StackedAreaChartSeriesView))),"Non StackedAreaChartSeriesView is added into StackedAreaChartView. Please verify."),
new d(this,n,t,r)},u}(u.StackedChartViewImpl);n.StackedAreaChartViewImpl=g}(o||(o={})),o});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Visualization/StackedChartViewImpl",
["require","exports","./ChartViewImpl","./ChartBase","../../Util/Util"],function(n,t,i,r,u){var f;return function(
n){"use strict";var h=window,c=jQuery,o="azc-chart-view-stacked",s=u.isDevMode(),t,f=function(n){function t(
){n.apply(this,arguments)}return __extends(t,n),t}(i.SeriesViewImpl),e;n.StackedChartSeriesViewImpl=
f;e=function(n){function e(t){n.call(this);this._view=t;this._viewClass=o;this._reversed(!0)}return __extends(
e,n),e.prototype.dispose=function(){n.prototype.dispose.call(this)},e.prototype._createSeriesViewImpl=
function(n,i,e){return s&&console.assert(e instanceof MsPortalFx.ViewModels.Controls.Visualization.Chart.
StackedAreaChartSeriesView||e instanceof r.StackedAreaChartSeriesView||u.shapeContains(u.getObjectBasicShape(
e),t||(t=u.getObjectBasicShape(new r.StackedAreaChartSeriesView))),"Non StackedAreaChartSeriesView is added into StackedAreaChartView. Please verify."),
new f(this,n,i,e)},e._allocArray=function(n,t){var i=0,r=new Array(t+1);for(r[0]=n,i=1;i<t+1;i++)r[i]=
{value:0,originalValue:null};return r},e.prototype._getNumberOfSeriesView=function(){return this._view.
seriesView().length},e.prototype._getStringValue=function(n){return n instanceof Date?Number(n).toString(
):n.toString()},e.prototype._getSparseSeriesStackLayer=function(){var c=this,n={},o,u,t=0,l=this._getNumberOfSeriesView(
),h=0,r,a=this.xAxes[0],v=this.yAxes[0],s=!0,f;return i.ChartViewImpl._iterateOverSeriesView(this,this.
_view,function(i){for(r=i._getChartItemArray(!0),s=s&&i._isDataXValueSortable(),h=r.length,t=0;t<h;t++)
o=a.extractValue(r[t].xValue),u=c._getStringValue(o),n[u]=n[u]||e._allocArray(o,l+1),n[u].originalValue=
r[t].xValue,n[u][i._seriesViewIndex+1]={value:v.extractValue(r[t].yValue),originalValue:r[t].yValue}}
),f=Object.keys(n)||[],s&&(f=f.stableSort(function(t,i){var r=n[t],u=n[i],f=r&&r.originalValue,e=u&&
u.originalValue;return Number(f)-Number(e)})),i.ChartViewImpl._iterateOverSeriesView(this,this._view,
function(t){var e=[],r,o=t._seriesIndex,u=t._seriesView,s=u?u.seriesName():null;return f.forEach(function(
i){n.hasOwnProperty(i)&&n[i]!==undefined&&e.push({x:n[i][0],y:n[i][t._seriesViewIndex+1].value,originalX:
n[i].originalValue,originalY:n[i][t._seriesViewIndex+1].originalValue,seriesViewIndex:t._seriesViewIndex,
seriesIndex:o})}),r=e,r.seriesViewIndex=t._seriesViewIndex,r.seriesName=s?u.seriesName():"Series"+o,
r.cssClass=i.ChartViewImpl._getCssClass(o,u),e}).filter(function(n){return n.length!==0})},e.prototype.
_getDenseSeriesStackLayer=function(){var n=this.xAxes[0],t=this.yAxes[0];return i.ChartViewImpl._iterateOverSeriesView(
this,this._view,function(r){var f=r._seriesView,o=r._seriesIndex,e=[],u,s=r._getChartItemArray();return s.
length>0&&(e=s.map(function(i){return{x:n.extractValue(i.xValue),y:t.extractValue(i.yValue),originalX:
i.xValue,originalY:i.yValue,seriesViewIndex:r._seriesViewIndex,seriesIndex:r._seriesIndex}})),u=e,u.
seriesViewIndex=r._seriesViewIndex,u.seriesName=f?f.seriesName():"Series"+o,u.cssClass=i.ChartViewImpl.
_getCssClass(o,f),e}).filter(function(n){return n.length!==0})},e.prototype._getStackLayer=function(
){var n=this._getNumberOfSeriesView()===1||!this._view.enableSparseSeries()?this._getDenseSeriesStackLayer(
):this._getSparseSeriesStackLayer();return n&&n.length>0?d3.layout.stack()(n):[]},e.prototype._initializeChartData=
function(){this._layers=this._getStackLayer();this._yStackMax=d3.max(this._layers,function(n){return d3.
max(n,function(n){return n.y0+n.y})})},e}(i.ChartViewImpl);n.StackedChartViewImpl=e}(f||(f={})),f});
define("Viva.Controls/Controls/Visualization/ChartViewImpl",["require","exports","./ChartBase","../../Util/ColorUtil",
"../../Base/Base.TriggerableLifetimeManager","../../Util/Util","../../Util/ArrayUtil","../../Util/StringUtil"],
function(n,t,i,r,u,f,e,o){var s;return function(n){"use strict";var ft=window,et=jQuery,h="azc-chart-view",
a="azc-chart-tooltip-circle",v="azc-chart-selected-circle",y=".azc-chart-selected-circle",p="azc-chart-hovered-circle",
w=".azc-chart-hovered-circle",b="azc-svg-style-fill",k="azc-color-",d="azc-chart-series-selected",g=
"azc-chart-series-hovered",c=r.getRainbowColorCode(0),nt=c.length,tt=2,it=2,rt=1,l=0,ut,t,s;(function(
n){n[n.All=0]="All";n[n.IgnoreMouseLeave=1]="IgnoreMouseLeave";n[n.IgnoreMouseOver=2]="IgnoreMouseOver"}
)(n.EventCreationMode||(n.EventCreationMode={}));ut=n.EventCreationMode;t=function(){function t(n,t,
i,r){this._noItemDataMessage="No data";this._inSetSliderTickColorClass=!1;this._viewImpl=n;this._seriesBase=
t;this._seriesViewIndex=i;this._seriesIndex=r?this._viewImpl.seriesIndexDictionary(r.seriesName()):this.
_viewImpl.seriesIndexDictionary(t.name());this._seriesIndex||this._seriesIndex===0||(this._seriesIndex=
i);this._seriesName=n.options.series()[this._seriesIndex].name();this._seriesName!==t.name()&&console.
error("Series name from index does not match passed in name");this._seriesView=r;this.lifetimeManager=
n.lifetimeManager.createChildLifetime();this.renderLifetimeManager=this.lifetimeManager.createChildLifetime(
);this._touchPointRadiusAddition=rt;this._hoveredPointRadiusAddition=it;this._selectedPointRadiusAddition=
tt;this._xAxis=this._viewImpl.xAxes[this._viewImpl.mappedXAxisIndex[this._seriesIndex]];this._yAxis=
this._viewImpl.yAxes[this._viewImpl.mappedYAxisIndex[this._seriesIndex]]}return Object.defineProperty(
t.prototype,"_chartItemsSortByCoordinate",{get:function(){var n=this;return this._chartItemsComputed||
(this._chartItemsLifetimeManager||(this._chartItemsLifetimeManager=new u.TriggerableLifetimeManager),
this._chartItemsComputed=ko.computed(function(){var t=i.SeriesUtilities.getChartItemArrayBySeriesBase(
n._seriesBase),r,u,f=n._viewImpl.isHorizontalChart,e=f?-1:1;return t&&t.length>0?(n._xAxis.axisScaleType(
)===0||typeof t[0].xValue=="string"?(r=n._getScreenX,u=n):r=n._xAxis.mappedAxis().scale(),t.map(function(
n){var t=r.call(u,n.xValue);return{chartItem:n,xCoordinate:t}}).sort(function(n,t){return n.xCoordinate-
t.xCoordinate})):null}),this._chartItemsComputed.extend({rateLimit:25}),this._chartItemsLifetimeManager.
registerForDispose(this._chartItemsComputed)),this._chartItemsComputed.peek()},enumerable:!0,configurable:
!0}),t.prototype.dispose=function(){this.lifetimeManager&&(this.lifetimeManager.dispose(),this.lifetimeManager=
null)},t._selectLastItem=function(n,t,i){var u=t?t:Number(!!t),f=i?i:0,e=-(f/2),r=n.reduce(function(
n,t){return t.xDistance<e?n:!n||t.xDistance<n.xDistance?t:n},null);return r&&(u<=0||Math.abs(r.xDistance)<=
u)?r.chartItem:null},t._selectClosestItem=function(n,t){var r=t?t:Number(!!t),i=n.reduce(function(n,
t){return Math.abs(t.xDistance)<Math.abs(n.xDistance)?t:n});return i&&(r<=0||Math.abs(i.xDistance)<=
r)?i.chartItem:null},t.prototype.selectChartItemFromXCoordinate=function(n,i){var r=this._chartItemsSortByCoordinate,
o=r,h=this._viewImpl.isHorizontalChart,c=h?-1:1,l=i&&i.selectFunction?i.selectFunction:t._selectClosestItem,
s=2,u,f;return r&&r.length>0&&(r.length>64&&(u=e.binarySearch(r,{chartItem:null,xCoordinate:n},function(
n,t){return n.xCoordinate-t.xCoordinate}),u<0&&(u=~u),o=r.slice(Math.max(u-s,0),Math.min(u+s,r.length))),
f=o.map(function(t){return t.xDistance=c*(n-t.xCoordinate),t}),f.length>0)?l(f,i?i.withinRange:null,
i?i.rangeAdjustment:null):null},t.prototype.setSeriesHover=function(n,t){var u=this._viewImpl.options,
f=this._viewImpl.chartViewIndex,s,e=this._seriesView,o=this._seriesIndex,r;f>=0&&f<u.views().length&&
(s=u.views()[f],(!e||e.hoverable())&&(t&&o>=0?(r=new i.SeriesSubset,r.seriesViewIndex(this._seriesViewIndex),
r.chartViewIndex(f),n?r.chartItems([n]):r.chartItems(this._getChartItems(o)),u.seriesHovers([r]),u.hoveredID(
[r])):(u.seriesHovers([]),u.hoveredID([]))))},t.prototype._disposeRenderDisposables=function(){this.
renderLifetimeManager&&(this.renderLifetimeManager.dispose(),this.renderLifetimeManager=null);this.renderLifetimeManager=
this.lifetimeManager.createChildLifetime()},t.prototype._getScreenX=function(n){return this._viewImpl.
_getScreenX(this._seriesIndex,this._xAxis.extractValue(n))},t.prototype._getScreenY=function(n){return this.
_viewImpl._getScreenY(this._seriesIndex,this._yAxis.extractValue(n))},t.prototype._toggleSeriesSelection=
function(n){this._viewImpl.toggleSeriesSelection(this._seriesViewIndex,n)},t.prototype._attachSeriesComputeds=
function(n){var t=this;this.renderLifetimeManager.registerForDispose(ko.computed(function(){t._createSelectedPlots(
n)}));this.renderLifetimeManager.registerForDispose(ko.computed(function(){t._createHover(n)}));this.
_viewImpl._attachSeriesComputeds(n,this._seriesViewIndex,this._seriesView)},t.prototype._eventHandlerWrapper=
function(n,t){var i=this._viewImpl._getEvents(),r={seriesName:this._seriesName,value:t};if(i&&i.pointClick)
switch(n){case"pointmouseover":i.pointMouseEnter&&i.pointMouseEnter(r);break;case"pointmouseleave":i.
pointMouseLeave&&i.pointMouseLeave(r);break;case"pointclick":i.pointClick&&i.pointClick(r);break;case"seriesmouseover":
i.seriesMouseEnter&&i.seriesMouseEnter(r);break;case"seriesmouseleave":i.seriesMouseLeave&&i.seriesMouseLeave(
r);break;case"seriesclick":i.seriesClick&&i.seriesClick(r)}},t.prototype._getChartItemArray=function(
n){return n===void 0&&(n=!1),i.SeriesUtilities.getChartItemArrayBySeriesBase(this._seriesBase,n)},t.
prototype._isDataXValueSortable=function(){return i.SeriesUtilities.isXValueSortable(this._seriesBase)}
,t.prototype._createArea=function(n,t,i){t===void 0&&(t=null);i===void 0&&(i=!1);switch(this._seriesBase.
type()){case 1:return this._createHorizontalArea(n,i);case 2:return this._createVerticalArea(n,i);case
0:case 3:t=t||this._getInterpolation();var r=this._getChartItemArray(),u=this._createGeneralArea(t,i);
return n.append("path").attr("d",u(r))}},t.prototype._createGeneralLine=function(n){var i=this;return d3.
svg.line().interpolate(t._getInterpolationString(n)).x(function(n){return i._getScreenX(n.xValue)}).
y(function(n){return i._getScreenY(n.yValue)})},t.prototype._renderSeries=function(){},t.prototype._createElement=
function(n){return this._viewImpl.element.append("g").attr("class",n)},t.prototype._renderTooltips=function(
){var i=this._seriesBase.type(),n=this._createElement(a),t=this._createDataPlots(n,this._touchPointRadiusAddition);
this._seriesView&&this._seriesView.showTooltip()&&this._addTooltips(t)},t.prototype._createSelectedPlots=
function(n){var i=this,t,r;return n.selectAll(y).remove(),t=this._viewImpl.options.seriesSelections(
).filter(function(n){return n.chartViewIndex()===i._viewImpl.chartViewIndex&&n.seriesViewIndex()===i.
_seriesViewIndex}),r=t.length>0?t[0].chartItems():[],this._createPlots(n,r,v,this._selectedPointRadiusAddition,
2)},t.prototype._createHover=function(t){var r,u,i,f;if(!this._inSetSliderTickColorClass&&(t.selectAll(
w).remove(),r=n.ChartViewImpl._getCssClass(this._seriesViewIndex,this._seriesView),i=this._getHoveredChartItems(
),i&&i.length>0&&(!this._seriesView||this._seriesView.hoverable())&&(this._createHoveredPlots(t,i),f=
this._viewImpl.options.seriesHovers.peek(),f.length===1&&f[0].chartItems.peek().length===1&&(u=r)),this.
_xAxis))try{this._inSetSliderTickColorClass=!0;u?this._xAxis._sliderTickColorClass(u):this._xAxis._sliderTickColorClass(
)===r&&this._xAxis._sliderTickColorClass("")}finally{this._inSetSliderTickColorClass=!1}},t.prototype.
_getHoveredChartItems=function(){return this._filterChartItems(this._viewImpl.options.seriesHovers())}
,t.prototype._getSelectedChartItems=function(){return this._filterChartItems(this._viewImpl.options.
seriesSelections())},t.prototype._createHoveredPlots=function(n,t){this._createPlots(n,t,p,this._hoveredPointRadiusAddition,
2)},t.prototype._createDataPlots=function(n,t){t===void 0&&(t=0);var i=this._getChartItemArray(!1);return this.
_createPlots(n,i,b,t,1)},t.prototype._createPlots=function(n,t,i,r,u){var f=this;r===void 0&&(r=0);u===
void 0&&(u=0);var s=(this._seriesView&&this._seriesView.hasOwnProperty("radius")?this._seriesView.radius(
):2)+r,o=l++,e=!1;t=this._viewImpl._transformPlotValues(t,this._seriesViewIndex);return n.selectAll(
".circle"+o).data(t).enter().append("circle").attr({"class":["circle"+o,i].join(" "),r:s,cx:function(
n){return f._getScreenX(n.xValue)},cy:function(n){return n.y0?f._getScreenY(n.yValue+n.y0):f._getScreenY(
n.yValue)},"data-eventDataSeriesName":function(){return f._seriesBase.name()}}).on("click",function(
n){f._toggleSeriesSelection(n);f._eventHandlerWrapper("pointclick",n);f._eventHandlerWrapper("seriesclick",
n);f._viewImpl._toggleSinglePlotSelection(f._seriesViewIndex)}).on("mousemove",function(){e&&f._viewImpl.
mouseMoveHandler()}).on("mouseover",function(n){var t=!1;e=f._viewImpl.isHoverHandled=!0;u!==2&&(t=!0,
f.setSeriesHover(n,t),f._eventHandlerWrapper("pointmouseover",n),f._eventHandlerWrapper("seriesmouseover",
n))}).on("mouseleave",function(n){if(u!==1){var t=f._viewImpl.isHoverHandled=!1;f.setSeriesHover(n,t);
f._eventHandlerWrapper("pointmouseleave",n);f._eventHandlerWrapper("seriesmouseleave",n)}e=f._viewImpl.
isHoverHandled=!1})},t.prototype._addTooltips=function(n){var t=this,i=this._seriesView?this._seriesView.
tooltipFormatter():"Series: '{0}' xValue: {1} yValue: {2}";n.append("title").text(function(n){return o.
format(i,t._seriesBase.name(),n.xValue?n.xValue.toString():t._noItemDataMessage,n.yValue?n.yValue.toString(
):t._noItemDataMessage)})},t.prototype._applyRenderingConditions=function(n,t){var i=this._createClipPath(
n);i&&t.attr("clip-path","url(#"+i+")")},t.prototype._createSeriesElement=function(){return this._createElement(
s._getCssClass(this._seriesIndex,this._seriesView))},t.prototype._getInterpolation=function(){return this.
_seriesView&&this._seriesView.hasOwnProperty("interpolation")?this._seriesView.interpolation():null}
,t.prototype._renderDataLabels=function(){var t=this,n=this._seriesView?this._seriesView.dataLabels(
):[],r,u,f=this._seriesBase.type();n&&n.length>0&&(r=this._viewImpl.xAxes[this._viewImpl.mappedXAxisIndex[
this._seriesIndex]],u=this._viewImpl.yAxes[this._viewImpl.mappedYAxisIndex[this._seriesIndex]],n.forEach(
function(n){var f=i.SeriesUtilities.getChartItemsByDataLabelAndSeries(t._seriesBase,n);f.forEach(function(
i){t._renderDataLabel(i,n,r,u)})}))},t.prototype._createHorizontalLine=function(n,t){var i=this;return t===
void 0&&(t=null),d3.svg.line().x(function(n,r){return r===0?0:f.isNullOrUndefined(t)?i._viewImpl.width:
i._getScreenX(t)}).y(this._getScreenY(n))},t.prototype._createVerticalLine=function(n,t){var i=this;
return t===void 0&&(t=null),d3.svg.line().x(this._getScreenX(n)).y(function(n){return n===0?f.isNullOrUndefined(
t)?0:i._getScreenY(t):i._viewImpl.height})},t._getInterpolationString=function(n){switch(n){case 1:return"monotone"
case 2:return"step-after";default:return"linear"}},t._getUniqueId=function(){return h+"-uniqueid-"+l++}
,t.prototype._getChartItems=function(){return i.SeriesUtilities.getChartItemArrayBySeriesBase(this._seriesBase,
!0)},t.prototype._createHorizontalArea=function(n,t){t===void 0&&(t=!1);var r=this._seriesBase,i=this.
_getScreenY(r.value());return t?n.append("rect").attr({width:this._viewImpl.width,height:i}):n.append(
"rect").attr({width:this._viewImpl.width,height:this._viewImpl.height-i,y:i})},t.prototype._createGeneralArea=
function(n,i){i===void 0&&(i=!1);var r=this._createGeneralLine(n),u=t._getInterpolationString(n);return i?
d3.svg.area().interpolate(u).x(r.x()).y0(r.y()).y1(0):d3.svg.area().interpolate(u).x(r.x()).y0(this.
_viewImpl.height).y1(r.y())},t.prototype._createVerticalArea=function(n,t){t===void 0&&(t=!1);var r=
this._seriesBase,i=this._getScreenX(r.value());return t?n.append("rect").attr({width:this._viewImpl.
width-i,height:this._viewImpl.height,x:i}):n.append("rect").attr({width:i,height:this._viewImpl.height})}
,t.prototype._renderDataLabel=function(n,t,i,r){if(n.xValue!==null&&n.yValue!==null&&n.xValue>=i.valueScale(
).domain()[0]&&n.xValue<=i.valueScale().domain()[1]&&n.yValue>=r.valueScale().domain()[0]&&n.yValue<=
r.valueScale().domain()[1]){var u=i.valueScale()(n.xValue),f=r.valueScale()(n.yValue)-5,e=i.getPointFormatter(
)(n.xValue),s=r.getPointFormatter()(n.yValue),c=t.formatter()||"{2}",h=15;u=Math.max(u,i.valueScale(
).range()[0]+h);u=Math.min(u,i.valueScale().range()[1]-h);f=Math.max(f,r.valueScale().range()[1]+10);
this._viewImpl.element.append("g").attr({"class":"azc-chart-callout",transform:"translate("+u.toString(
)+", "+f.toString()+")"}).append("text").text(o.format(c,this._seriesBase.name(),e!==null?e:this._noItemDataMessage,
s!==null?s:this._noItemDataMessage))}},t.prototype._createClipPath=function(n){var f=this,i,r,u;return this.
_seriesView?(i=this._seriesView.renderingConditions(),i===null||i.length===0)?null:(i.forEach(function(
i){r=t._getUniqueId();var e=n.append("clipPath").attr("id",r);f._viewImpl._createClipPathSelection(i,
e)&&(u&&e.attr("clip-path","url(#"+u+")"),u=r)}),r):null},t.prototype._filterChartItems=function(n){
var t=this,i=e.first(n,function(n){return n.chartViewIndex()===t._viewImpl.chartViewIndex&&n.seriesViewIndex(
)===t._seriesViewIndex});return i?i.chartItems():[]},t}();n.SeriesViewImpl=t;s=function(){function n(
){this.seriesViewImpls=[];this.chartViewIndex=null;this._reversed=ko.observable(!1);this._viewClass=
h}return Object.defineProperty(n.prototype,"seriesViews",{get:function(){return this._seriesViews?this.
_seriesViews():this._view.seriesView()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,
"series",{get:function(){return this._series?this._series():this.options.series()},enumerable:!0,configurable:
!0}),n.prototype.init=function(n){var t=this;this.lifetimeManager=n.createChildLifetime();this.renderLifetimeManager=
this.lifetimeManager.createChildLifetime();this.lifetimeManager.registerForDispose(this._seriesViews=
ko.computed(function(){var i=t._reversed(),n=t._view.seriesView();return i?n.slice().reverse():n}));
this.lifetimeManager.registerForDispose(this._series=ko.computed(function(){var i=t._reversed(),n=t.
options.series();return i?n.slice().reverse():n}));this.element.attr("class",this._viewClass);this._render(
)},n.prototype.dispose=function(){this._disposeSeriesViewImpls();this.lifetimeManager&&(this.lifetimeManager.
dispose(),this.lifetimeManager=null);this.element.selectAll("circle").on("click",null).on("mouseover",
null).on("mouseleave",null);this.element.remove()},n.prototype.toggleSeriesSelection=function(n,t){var
c=this,e,f=this.options,s=this._getSeriesViewBySeriesViewIndex(n),h=this._getSeriesIndexBySeriesViewIndex(
n),l=f.seriesSelections(),r=l.filter(function(t){return t.chartViewIndex()===c.chartViewIndex&&t.seriesViewIndex(
)===n}),u,o;(!s||s.selectable())&&(r.length>0?t?(o=r[0].chartItems().filter(function(n){return t.xValue===
n.xValue&&t.yValue===n.yValue}),o.length>0?(r[0].chartItems.removeAll(o),r[0].chartItems().length===
0&&f.seriesSelections.removeAll(r)):r[0].chartItems.push(t)):(e=this._getChartItems(h),r[0].chartItems(
).length!==e.length?r[0].chartItems(e):f.seriesSelections.removeAll(r)):(u=new i.SeriesSubset,u.seriesViewIndex(
n),u.chartViewIndex(this.chartViewIndex),t?u.chartItems.push(t):u.chartItems(this._getChartItems(h)),
f.seriesSelections.push(u)))},n.prototype.getXSliceSeriesSubset=function(n,t,r){var f=this,u=[];return this.
seriesViewImpls.map(function(e,o){var h=e.selectChartItemFromXCoordinate(n,{rangeAdjustment:r,withinRange:
t}),s;h&&(s=new i.SeriesSubset,s.seriesViewIndex(o),s.chartViewIndex(f.chartViewIndex),s.chartItems.
push(h),u.push(s))}),u},n._iterateOverSeriesView=function(n,t,i){var u=n.seriesViews,r=n.options.series(
);return u.map(function(t,u){var e=n.seriesIndexDictionary(t.seriesName()),o;return!f.isNullOrUndefined(
e)&&r[e]?(o=n._getSeriesViewImpl(r[e],u,t),i(o)):[]})},n._getDefaultCssClassByIndex=function(n){return k+
c[n%nt]},n._getCssClass=function(t,i){return i&&i.cssClass()||n._getDefaultCssClassByIndex(t)},n.prototype.
_transformPlotValues=function(n){return n},n.prototype._toggleSinglePlotSelection=function(){},n.prototype.
_disposeRenderDisposables=function(){this.renderLifetimeManager&&(this.renderLifetimeManager.dispose(
),this.renderLifetimeManager=null);this.renderLifetimeManager=this.lifetimeManager.createChildLifetime(
)},n.prototype._disposeSeriesViewImpls=function(){this.seriesViewImpls.forEach(function(n){n.dispose(
)});this.seriesViewImpls=[]},n.prototype._attachSeriesComputeds=function(n,t,i,r){var u=this;r===void
0&&(r=!0);r&&this.renderLifetimeManager.registerForDispose(ko.computed(function(){var r=u._getHoveredSeriesViewIndexes(
);n.classed(g,(!i||i.hoverable())&&r.length===1&&r[0]===t)}));this.renderLifetimeManager.registerForDispose(
ko.computed(function(){var r=(!i||i.selectable())&&u.options.seriesSelections().some(function(n){return n.
chartViewIndex()===u.chartViewIndex&&n.seriesViewIndex()===t});n.classed(d,r)}))},n.prototype._getScreenX=
function(n,t){var i=0,r=this.mappedXAxisIndex[n];return!f.isNullOrUndefined(r)&&!f.isNullOrUndefined(
this.xAxes[r])&&(i=this.xAxes[r].valueScale()(t),i!==null&&i!==undefined)?Math.round(i):0},n.prototype.
_getScreenY=function(n,t){var i=0,r=this.mappedYAxisIndex[n];return!f.isNullOrUndefined(r)&&!f.isNullOrUndefined(
this.yAxes[r])&&(i=this.yAxes[r].valueScale()(t/this.yAxes[r].conversionFactor()),i!==null&&i!==undefined)?
Math.round(i):0},n.prototype._getEvents=function(){return this._view.hasOwnProperty("events")?this._view.
events:null},n.prototype._createClipPathSelection=function(n,i){var r=this.seriesIndexDictionary(n.seriesName(
));if(!f.isNullOrUndefined(r)){var e=this.options,u=e.series()[r],h=u.type(),o=n.conditionOperator()===
0,s=new t(this,u,r,null);return s._createArea(i,n.interpolation(),o),!0}return!1},n.prototype._createSeriesViewImpl=
function(n,i,r){return new t(this,n,i,r)},n.prototype._render=function(){this._disposeRenderDisposables(
);n._iterateOverSeriesView(this,this._view,function(n){n._renderSeries();n._renderTooltips()});n._iterateOverSeriesView(
this,this._view,function(n){n._renderDataLabels()})},n.prototype._getHoveredSeriesViewIndexes=function(
){var n=this;return this.options.seriesHovers().filter(function(t){return t.chartViewIndex()===n.chartViewIndex}
).map(function(n){return n.seriesViewIndex()})},n.prototype._getSeriesViewBySeriesViewIndex=function(
n){var t=this.seriesViews;return t.length!==0&&n>=0&&n<this._view.seriesView().length?t[n]:null},n.prototype.
_getSeriesIndexBySeriesViewIndex=function(n){var t=this.seriesViews,i;return t.length===0?this.seriesViewImpls[
n]?this.seriesViewImpls[n]._seriesIndex:null:n>=0&&n<this._view.seriesView().length?(i=t[n].seriesName(
),this.seriesIndexDictionary(i)):null},n.prototype._getChartItems=function(n){return i.SeriesUtilities.
getChartItemArrayBySeriesBase(this.options.series()[n],!0)},n.prototype._getSeriesViewImpl=function(
n,t,i){return this.seriesViewImpls[t]||(this.seriesViewImpls[t]=this._createSeriesViewImpl(n,t,i)),this.
seriesViewImpls[t]},n}();n.ChartViewImpl=s}(s||(s={})),s});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Viva.Controls/Controls/Visualization/ScatterChartViewImpl",["require","exports","./ChartBase",
"./ChartViewImpl","../../Util/Util"],function(n,t,i,r,u){var f;return function(n){"use strict";var v=
window,o="azc-chart-view-scatter",s="azc-scatterChart-series",h=5,c=5,l=1,a=u.isDevMode(),t,f=function(
n){function t(t,i,r,u){n.call(this,t,i,r,u);this._touchPointRadiusAddition=l;this._hoveredPointRadiusAddition=
c;this._selectedPointRadiusAddition=h}return __extends(t,n),t.prototype._renderSeries=function(){var
i=this._seriesBase.type(),n=this._createSeriesElement(),t=this._createDataPlots(n);t&&(this._seriesView&&
this._seriesView.showTooltip()&&this._addTooltips(t),n.classed(s,!0),this._attachSeriesComputeds(n),
this._applyRenderingConditions(n,n))},t.prototype._renderTooltips=function(){},t}(r.SeriesViewImpl),
e;n.ScatterChartSeriesViewImpl=f;e=function(n){function r(t){n.call(this);this._viewClass=o;this._view=
t}return __extends(r,n),r.prototype._createSeriesViewImpl=function(n,r,e){return a&&console.assert(e
instanceof MsPortalFx.ViewModels.Controls.Visualization.Chart.ScatterChartSeriesView||e instanceof i.
ScatterChartSeriesView||u.shapeContains(u.getObjectBasicShape(e),t||(t=u.getObjectBasicShape(new i.ScatterChartSeriesView))
),"Non ScatterChartSeriesView is added into ScatterChartView. Please verify."),new f(this,n,r,e)},r}
(r.ChartViewImpl);n.ScatterChartViewImpl=e}(f||(f={})),f});__extends=this.__extends||function(n,t){function r(
){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=
new r};define("Viva.Controls/Controls/Visualization/LineChartViewImpl",["require","exports","./ChartBase",
"./ChartViewImpl","../../Util/Util"],function(n,t,i,r,u){var f;return function(n){"use strict";var l=
window,o="azc-svg-style-stroke",s="azc-chart-view-line",h="azc-lineChart-series",c=u.isDevMode(),t,f=
function(n){function t(){n.apply(this,arguments)}return __extends(t,n),t.prototype._renderSeries=function(
){var n=this,r=this._seriesView,u,i,e,s=t._getLineStyleString(r?ko.utils.unwrapObservable(r.lineStyle):
null),f=!1;u=this._createLineString(this._getInterpolation());u&&(i=this._createSeriesElement(),e=i.
classed(h,!0).append("path").attr({d:u,"class":[o,s].join(" ")}).on("click",function(){n._toggleSeriesSelection(
null);n._eventHandlerWrapper("seriesclick",null)}).on("mousemove",function(){f&&n._viewImpl.mouseMoveHandler(
)}).on("mouseenter",function(){var t=n._viewImpl.isHoverHandled=f=!0;n.setSeriesHover(null,t);n._eventHandlerWrapper(
"seriesmouseover",null)}).on("mouseleave",function(){var t=n._viewImpl.isHoverHandled=f=!1;n.setSeriesHover(
null,t);n._eventHandlerWrapper("seriesmouseleave",null)}),this._attachSeriesComputeds(i),this._applyRenderingConditions(
i,i),(!r||ko.utils.unwrapObservable(r.showDataPoints))&&this._createDataPlots(i))},t._getLineStyleString=
function(n){switch(n){case 1:return"azc-chart-lineStyleDotted";case 2:return"azc-chart-lineStyleDashed"
case 3:return"azc-chart-lineStyleTrendline";case 4:return"azc-chart-lineStyleUsageThreshold";case 5:
return"azc-chart-lineStyleWarningThreshold";default:return"azc-chart-lineStyleSolid"}},t.prototype._createLineString=
function(n){var t,i=[];switch(this._seriesBase.type()){case 1:i=[0,1];t=this._createHorizontalLine(this.
_seriesBase.value());break;case 2:i=[0,1];t=this._createVerticalLine(this._seriesBase.value());break
case 0:case 3:t=this._createGeneralLine(n);i=this._getChartItemArray()}return t?t(i):null},t}(r.SeriesViewImpl),
e;n.LineChartSeriesViewImpl=f;e=function(n){function r(t){n.call(this);this._viewClass=s;this._view=
t}return __extends(r,n),r.prototype.dispose=function(){this.element.selectAll("path").on("click",null).
on("mouseover",null).on("mouseleave",null);n.prototype.dispose.call(this)},r.prototype._createSeriesViewImpl=
function(n,r,e){return c&&console.assert(e instanceof MsPortalFx.ViewModels.Controls.Visualization.Chart.
LineChartSeriesView||e instanceof i.LineChartSeriesView||u.shapeContains(u.getObjectBasicShape(e),t||
(t=u.getObjectBasicShape(new i.LineChartSeriesView))),"Non LineChartSeriesView is added into LineChartView. Please verify."),
new f(this,n,r,e)},r}(r.ChartViewImpl);n.LineChartViewImpl=e}(f||(f={})),f});__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r};define("Viva.Controls/Controls/Visualization/AreaChartViewImpl",["require",
"exports","../../Util/Hatching","./ChartBase","./ChartViewImpl","../../Util/Util"],function(n,t,i,r,
u,f){var e;return function(n){"use strict";var a=window,h="azc-chart-view-area",c="azc-areaChart-series",
t="azc-svg-style-fill",l=f.isDevMode(),e,o=function(n){function r(){n.apply(this,arguments)}return __extends(
r,n),r.prototype._renderSeries=function(){var n=this,h=this._seriesBase.type(),e=this._seriesView,r,
f=this._createSeriesElement(),o=!1,s;if(r=this._createArea(f),r){r.attr("class",t).on("click",function(
){n._toggleSeriesSelection(null);n._eventHandlerWrapper("seriesclick",null)}).on("mousemove",function(
){o&&n._viewImpl.mouseMoveHandler()}).on("mouseenter",function(){var t=n._viewImpl.isHoverHandled=o=
!0;n.setSeriesHover(null,t);n._eventHandlerWrapper("seriesmouseover",null)}).on("mouseleave",function(
){var t=n._viewImpl.isHoverHandled=o=!1;n.setSeriesHover(null,t);n._eventHandlerWrapper("seriesmouseleave",
null)});f.classed(c,!0);this._attachSeriesComputeds(f);s=e&&ko.utils.unwrapObservable(e.areaHatchingPattern);
s&&i.renderHatching(s,u.ChartViewImpl._getCssClass(this._seriesIndex,e),t,r,this._viewImpl.element);
this._applyRenderingConditions(f,r)}},r.prototype._createSelectedPlots=function(){return null},r.prototype.
_createHoveredPlots=function(){return null},r}(u.SeriesViewImpl),s;n.AreaChartSeriesViewImpl=o;s=function(
n){function t(t){n.call(this);this._viewClass=h;this._view=t}return __extends(t,n),t.prototype.dispose=
function(){this.element.selectAll("path").on("click",null).on("mouseover",null).on("mouseleave",null);
n.prototype.dispose.call(this)},t.prototype._createSeriesViewImpl=function(n,t,i){return l&&console.
assert(i instanceof MsPortalFx.ViewModels.Controls.Visualization.Chart.AreaChartSeriesView||i instanceof
r.AreaChartSeriesView||f.shapeContains(f.getObjectBasicShape(i),e||(e=f.getObjectBasicShape(new r.AreaChartSeriesView))
),"Non AreaChartSeriesView is added into AreaChartView. Please verify."),new o(this,n,t,i)},t}(u.ChartViewImpl);
n.AreaChartViewImpl=s}(e||(e={})),e});__extends=this.__extends||function(n,t){function r(){this.constructor=
n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define(
"Viva.Controls/Controls/Visualization/BarChartViewImpl",["require","exports","./ChartBase","./StackedChartViewImpl",
"../../Util/Util"],function(n,t,i,r,u){var f;return function(n){"use strict";var k=window,f=jQuery,c=
"azc-chart-view-bar",l="azc-svg-style-fill",a="azc-barChart-data-column",v="azc-barChart-series",t=".azc-barChart-series",
y="azc-barChart-bar-positive",e="azc-chart-item-selected",p="azc-chart-item-hovered",w="azc-barChart-bar-negative",
b=u.isDevMode(),o,s=function(n){function t(){n.apply(this,arguments)}return __extends(t,n),t.prototype.
_attachItemsComputeds=function(n){var t=this;this.renderLifetimeManager.registerForDispose(ko.computed(
function(){var i=t._getHoveredChartItems(),r=t._checkElementBelongsToChartItems(n,i);n.classed(p,r)}
));this.renderLifetimeManager.registerForDispose(ko.computed(function(){var i=t._getSelectedChartItems(
),r=t._checkElementBelongsToChartItems(n,i);n.classed(e,r)}))},t.prototype._attachSeriesComputeds=function(
n){var t=this;this.renderLifetimeManager.registerForDispose(ko.computed(function(){var i=t._getHoveredChartItems(
);n.classed(e,!1)}))},t.prototype._checkElementBelongsToChartItems=function(n,t){var i=this,r=n.datum(
).x.toString();return t&&t.some(function(n){return i._xAxis.extractValue(n.xValue).toString()===r})}
,t}(r.StackedChartSeriesViewImpl),h;n.BarChartSeriesViewImpl=s;h=function(n){function r(t){n.call(this,
t);this._view=t;this._viewClass=c}return __extends(r,n),r.prototype.init=function(t){n.prototype.init.
call(this,t);this._initializeChartData();this._render()},r.prototype.dispose=function(){this.element.
selectAll("rect").on("click",null).on("mouseover",null).on("mouseleave",null);n.prototype.dispose.call(
this)},r.prototype.getXSliceSeriesSubset=function(t,i){return n.prototype.getXSliceSeriesSubset.call(
this,t,i,this._step)},r.prototype._render=function(){var n=this,r,e=this,u,f=!1;if(!this._layers||this.
_layers.length===0){this.element.selectAll(t).remove();return}this._initializeBarSize();this.element.
selectAll(t).remove();this._disposeRenderDisposables();u=this._getBarChartD3Settings();r=this.element.
selectAll(t).data(this._layers).enter().append("g").attr("class",function(n){return[v,n.cssClass].join(
" ")});r.each(function(n){var t=this,i=e.seriesViewImpls[n.seriesViewIndex];i._attachSeriesComputeds(
d3.select(t))});this._bars=r.selectAll("rect").data(function(n){return n}).enter().append("rect").attr(
u.attr).classed(u.classed).on("mousemove",function(){f&&n.mouseMoveHandler()}).on("mouseenter",function(
t,r){var u=n.isHoverHandled=f=!0,e=new i.ChartItem(t.originalX,t.originalY);n.seriesViewImpls[t.seriesViewIndex].
setSeriesHover(e,u);n._eventHandlerWrapper("mouseenter",t,r)}).on("mouseleave",function(t,r){var u=n.
isHoverHandled=f=!1,e=new i.ChartItem(t.originalX,t.originalY);n.seriesViewImpls[t.seriesViewIndex].
setSeriesHover(e,u);n._eventHandlerWrapper("mouseleave",t,r)}).on("click",function(t,r){var u=new i.
ChartItem(t.originalX,t.originalY);n.toggleSeriesSelection(t.seriesViewIndex,u);n._eventHandlerWrapper(
"click",t,r)});this._bars.each(function(n){var i=this,t=e.seriesViewImpls[n.seriesViewIndex];t._attachItemsComputeds(
d3.select(this))})},r.prototype._createSeriesViewImpl=function(n,t,r){return b&&console.assert(r instanceof
MsPortalFx.ViewModels.Controls.Visualization.Chart.SeriesView||r instanceof i.SeriesView||u.shapeContains(
u.getObjectBasicShape(r),o||(o=u.getObjectBasicShape(new i.SeriesView))),"Non SeriesView is added into BarChartView. Please verify."),
new s(this,n,t,r)},r.prototype._barMouseEnter=function(n,t){this._view.events&&this._view.events.barMouseEnter&&
this._view.events.barMouseEnter(n,t)},r.prototype._barMouseLeave=function(n,t){this._view.events&&this.
_view.events.barMouseLeave&&this._view.events.barMouseLeave(n,t)},r.prototype._barMouseClick=function(
n,t){this._view.events&&this._view.events.barClick&&this._view.events.barClick(n,t)},r.prototype._eventHandlerWrapper=
function(n,t,i){var r,f=this._getSeriesIndexBySeriesViewIndex(t.seriesViewIndex),u={seriesName:this.
options.series()[f].name(),value:{xValue:t.x,yValue:t.y}};this._getNumberOfSeriesView()>1&&(this._view.
barChartType()===0||this._view.barChartType()===1)&&(r=this._getEventData(t,i));switch(n){case"mouseenter":
this._barMouseEnter(u,r);break;case"mouseleave":this._barMouseLeave(u,r);break;case"click":this._barMouseClick(
u,r)}},r.prototype._initializeChartData=function(){if(this._getNumberOfSeriesView()<=0){this.element.
selectAll(t).remove();this._layers=null;return}n.prototype._initializeChartData.call(this)},r.prototype.
_getXOffset=function(n,t){return t===!0?this._getScreenX(n.seriesIndex,n.x)+this._barWidthOffset:this.
_getScreenX(n.seriesIndex,n.x)-this._barWidthOffset},r.prototype._getEventData=function(n,t){for(var
r=[],i=0,i=0;i<this._getNumberOfSeriesView();i++)this._layers[i][t].y>0&&r.push({seriesName:this.seriesViewImpls[
i]._seriesName,value:{xValue:this._layers[i][t].x,yValue:this._layers[i][t].y}});return r},r.prototype.
_initializeBarSize=function(){var n=this._view.barPaddingRatio(),t=this.xAxes[0];this._step=t.step();
this._barWidth=this._step*(1-n);this._barWidthOffset=this._barWidth/2;this._groupedBarWidth=this._getNumberOfSeriesView(
)>0?this._barWidth/this._getNumberOfSeriesView():this._barWidth},r.prototype._getBarChartD3Settings=
function(){var n=[this._getDefaultBarChartD3Setting(),this._getExtendedBarChartD3Settings()];return n.
reduce(function(n,t){return{attr:f.extend(n.attr,t.attr),classed:f.extend(n.classed,t.classed)}})},r.
prototype._getDefaultBarChartD3Setting=function(){var t=this,i={x:function(n){return t._getXOffset(n)}
,y:this.height,width:this._barWidth,height:0},n={};return[a,l].forEach(function(t){n[t]=!0}),{attr:i,
classed:n}},r.prototype._getExtendedBarChartD3Settings=function(){var n;switch(this._view.barChartType(
)){case 1:n=this._getGroupedBarChartD3Settings();break;case 2:n=this._getSplitBarChartSettings();break
case 0:default:n=this._getStackedBarChartD3Setting()}return n},r.prototype._getStackedBarChartD3Setting=
function(){var n=this,u=this.isHorizontalChart,t=0,i=this.yAxes[t],r;return i.internalMin(0),i.internalMax(
this._yStackMax),r=u?{x:function(i){return n._getScreenY(t,i.y0)},width:function(i){return Math.abs(
n._getScreenY(t,i.y0+i.y)-n._getScreenY(t,i.y0))},y:function(t){return n._getXOffset(t)},height:this.
_barWidth}:{x:function(t){return n._getXOffset(t)},width:this._barWidth,y:function(i){return n._getScreenY(
t,i.y0+i.y)},height:function(i){return n._getScreenY(t,i.y0)-n._getScreenY(t,i.y0+i.y)}},{attr:r}},r.
prototype._getGroupedBarChartD3Settings=function(){var n=this,t=this.isHorizontalChart,i=t?{x:0,width:
function(t,i,r){return n._getScreenY(r,t.y)},y:function(t,i,r){return n._getScreenX(r,t.x)+n._groupedBarWidth*
(n._getNumberOfSeriesView()-r)-n._barWidth},height:this._groupedBarWidth}:{x:function(t,i,r){return n.
_getScreenX(r,t.x)+n._groupedBarWidth*r-n._barWidthOffset},width:this._groupedBarWidth,y:function(t,
i,r){return n._getScreenY(r,t.y)},height:function(t,i,r){return n._getScreenY(r,0)-n._getScreenY(r,t.
y)}};return{attr:i}},r.prototype._getSplitBarChartSettings=function(){var n=this,i=this.isHorizontalChart,
u=this.yAxes[0],t={},r=i?{x:function(t){return n._getScreenY(t.seriesIndex,Math.min(0,t.y))},width:function(
t){return Math.abs(n._getScreenY(t.seriesIndex,t.y)-n._getScreenY(t.seriesIndex,0))},y:function(t){return n.
_getXOffset(t,!0)},height:this._groupedBarWidth}:{x:function(t){return n._getXOffset(t)},width:this.
_groupedBarWidth,y:function(t){return n._getScreenY(t.seriesIndex,Math.max(0,t.y))},height:function(
t){return Math.abs(n._getScreenY(t.seriesIndex,t.y)-n._getScreenY(t.seriesIndex,0))}};return t[y]=function(
n){return n.y>0},t[w]=function(n){return n.y<0},{attr:r,classed:t}},r}(r.StackedChartViewImpl);n.BarChartViewImpl=
h}(f||(f={})),f})