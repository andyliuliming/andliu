var __extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r};define("MsPortalImpl/Parts/Parts.Chart",[
"require","exports","./Parts"],function(n,t,i){var u=MsPortalFx.Parts.PartSize,r;return function(t){
"use strict";var e=jQuery,o=MsPortalFx.Base.Diagnostics.createLog(n),u=60,s=355,r="fxs-part-chart",h=
r+"-editbutton",f="<!-- ko if: $data.editButtonSelectable --><div class='fxs-text-primary "+h+"' data-bind='pcHotSpot: editButtonSelectable, text: editButtonText'><\/div><!-- /ko -->",
c="<!-- ko if: size() !== MsPortalFx.Parts.PartSize.Mini && size() !== MsPortalFx.Parts.PartSize.FitToContainer --><div class='"+
r+" msportalfx-removepartpaddingside'>"+f+"<div data-bind='pcChart: $root'><\/div><\/div><!-- /ko --><!-- ko if: size() === MsPortalFx.Parts.PartSize.FitToContainer --><div class='"+
r+" msportalfx-removepartpaddingside' style='height: 100%; margin-top: -5px'>"+f+"<div data-bind='pcChart: $root'><\/div><\/div><!-- /ko -->",
l=function(n){function t(t,i,f){n.call(this,t,i,f,c);var h=i.content;this._sizeChangeReactor=ko.computed(
function(){var f=e(t).findByClassName(r),i=h.size(),n=MsPortalFx.Parts.PartSizeHelper.getSize(i).size;
h.yAxis.showGridLines(!0);switch(i){case 5:case 6:case 10:case 4:h.width(n.width);h.height(n.height-
u);h.metrics.visible(!0);h.metrics.size(2);break;case 2:case 3:case 1:h.width(n.width);h.height(n.height-
u);h.metrics.visible(!1);break;case 7:h.width(n.width);case 8:h.height()<=0&&h.height(s);break;case 9:
break;default:o.error("MsPortalFx.ViewModels.Parts.Chart: The requested size is not supported.")}})}
return __extends(t,n),t.prototype.dispose=function(){this._sizeChangeReactor.dispose();n.prototype.dispose.
call(this)},t}(i.Part);t.Chart=l}(r||(r={})),r})