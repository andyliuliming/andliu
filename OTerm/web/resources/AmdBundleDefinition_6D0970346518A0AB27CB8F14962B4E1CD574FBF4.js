define("HubsExtension/SpecPicker/SpecPickerArea",["require","exports","./SpecsCostsClient"],function(
n,t,i){var r;return function(n){"use strict";var t=function(){function n(){if(n._initializedSingleton)
throw new Error("SpecDataContext is a static, singleton class.");n._initializedSingleton=!0}return n.
prototype.getSpecsCosts=function(n){return i.getSpecsCosts(n)},n._initializedSingleton=!1,n}();n.DataContext=
t}(r||(r={})),r})