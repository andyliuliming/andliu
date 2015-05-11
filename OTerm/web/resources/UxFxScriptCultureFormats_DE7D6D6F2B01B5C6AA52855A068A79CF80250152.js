(function(n,t){"use strict";var i={},r;(function(){function r(n,t){var i;if(typeof n=="object"&&typeof
t=="object")for(i in t)t.hasOwnProperty(i)&&(n[i]?r(n[i],t[i]):n[i]=t[i]);return n}function f(n,t,i)
{n[t]=n[t]||{};r(n[t],i)}if(r(n,{Resources:{getResources:function(){}}}),t)for(var u in t)t.hasOwnProperty(
u)&&f(i,u,t[u])})();r=n.Resources.getResources;n.Resources.getResources=function(n){return r(n)||i[n]}
})(this,{"fx.culture":{formats:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
daysAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May",
"June","July","August","September","October","November","December",""],monthsAbbr:["Jan","Feb","Mar",
"Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],ampm:["AM","PM"],dateSeparator:"/",timeSeparator:
":",standard:{d:"M/d/yyyy",D:"dddd, MMMM d, yyyy",F:"dddd, MMMM d, yyyy h:mm:ss tt",m:"MMMM d",M:"MMMM d",
r:"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",R:"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",s:"yyyy'-'MM'-'dd'T'HH':'mm':'ss",
t:"h:mm tt",T:"h:mm:ss tt",u:"yyyy'-'MM'-'dd HH':'mm':'ss'Z'",y:"MMMM yyyy",Y:"MMMM yyyy"},firstDayOfWeek:
0,agoStrings:null}}})