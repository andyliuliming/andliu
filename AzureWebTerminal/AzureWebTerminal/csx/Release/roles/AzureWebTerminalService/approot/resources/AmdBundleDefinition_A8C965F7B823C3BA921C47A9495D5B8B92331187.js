var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Parts/Parts.CollectionSummary",
["require","exports","./Parts.Collection"],function(n,t,i){var r;return function(n){"use strict";function r(
){var n=f.map(function(n){var t=MsPortalFx.Parts.PartSize[n];return'"'+o+t.toLowerCase()+'": size() === MsPortalFx.Parts.PartSize.'+
t});return n.join(", ")}var f=[0,1,2,3],t="fxs-part-collectionsummary",e=t+"-part-title",o=t+"-size-",
s="<div class='"+t+"' data-bind='css: { "+r()+" }'><!-- ko if: $data.description --><div data-bind='visible: size() === MsPortalFx.Parts.PartSize.Wide, text: description' class='fxs-part-collectionsummary-description'><\/div><!-- /ko --><div class='fxs-part-collectionsummary-summary'><div data-bind='text: resourceCount' class='fxs-part-collectionsummary-count'><\/div><div class='fxs-part-collectionsummary-image' data-bind='image: icon'><\/div><span class='fxs-part-collectionsummary-label' data-bind='text: label'><\/span><div class='"+
e+"' data-bind ='text: _partTitle'><\/div><\/div><\/div>",u;n.buildSizeCssBinding=r;u=function(n){function t(
t,i,r){n.call(this,t,i,r,s)}return __extends(t,n),t}(i.CollectionPart);n.Part=u}(r||(r={})),r});__extends=
this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[
i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Parts/Parts.Collection",["require",
"exports","./Parts"],function(n,t,i){var r;return function(n){"use strict";function f(){var n=o.map(
function(n){var t=MsPortalFx.Parts.PartSize[n];return'"'+v+t.toLowerCase()+'": size() === MsPortalFx.Parts.PartSize.'+
t});return n.join(", ")}var o=[0,1,2,3,4,10,5,6,7,9,8,],t="fxs-part-collectionpart",s=t+"-rollup-container",
h=t+"-rollup-count",c=t+"-rollup-label",r=t+"-rollup-icon",u=t+"-no-rollup-count",l=t+"-part-title",
a=t+"-more-data",v=t+"-size-",y="<div class='"+t+"' data-bind='css: { "+f()+" }'><div class='"+s+"' data-bind='visible: size() === MsPortalFx.Parts.PartSize.Mini || size() === MsPortalFx.Parts.PartSize.Small || alwaysShowRollupCount()'><span class='"+
h+"' data-bind ='text: rollupCount, visible: !noRollupCount()'/><span class='"+c+"' data-bind ='text: rollupCountLabel'/><img class='"+
r+"' data-bind ='attr: { src: rollupCountIconUri }, visible: rollupCountIconUri, css: { \""+u+"\": noRollupCount }' alt=''/><div class='"+
r+"' data-bind='image: rollupCountIcon, visible: rollupCountIcon, css: { \""+u+"\": noRollupCount }'><\/div><div class='"+
l+"' data-bind ='text: _partTitle'/><\/div><!-- ko if: gridMode() !== MsPortalFx.ViewModels.Parts.Collection.GridMode.None --><div data-bind='pcGrid: grid' class='msportalfx-removepartpaddingside'><\/div><div class='"+
a+"' data-bind='visible: hasMoreData'>...<\/div><!-- /ko --><\/div>",e;n.buildSizeCssBinding=f;e=function(
n){function t(t,i,r,u){this._disposables=[];n.call(this,t,i,r,u||y);this._$partTitle=$(t).findByClassName(
"fxs-part-title");this._handleSizeChange(i)}return __extends(t,n),t.prototype.dispose=function(){n.prototype.
dispose.call(this);this._disposables.forEach(function(n){n.dispose()})},t.prototype._getContentForBinding=
function(n,t){return $.extend({},t.content,{_partTitle:t.container.partTitle})},t.prototype._handleSizeChange=
function(n){var t=this,i=ko.computed(function(){var i=n.content.size();n.container.partTitle();t._$partTitle.
toggle(i!==0)});this._disposables.push(i)},t}(i.Part);n.CollectionPart=e}(r||(r={})),r})