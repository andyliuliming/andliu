var ko,InternalJQuery,isNullOrUndefined,ExtensionStatusCode,__extends,CompositionViewModelBase,MsPortalFx;
(function(n){var t;(function(n){var t;(function(n){"use strict";function i(){var i="MsPortalFx.Resources.Strings",
n=window,t;if(n.Resources&&n.Resources.getResources&&(t=n.Resources.getResources(i)),!t)throw new Error(
"Unable to find the resources for '"+i+"'.");return function(n){return t[n]}}var t=i(),r,u,f,e,o,s,h,
c,l,a,v,y;(function(n){var i,r;(function(n){n.noRowsMessage=t("ViewModels_Controls_NoRowsMessage")})
(i=n.Controls||(n.Controls={})),function(n){n.preview=t("ViewModels_Container_preview");n.unauthorizedText=
t("ViewModels_Container_unauthorizedText")}(r=n.Container||(n.Container={}))})(r=n.ViewModels||(n.ViewModels=
{})),function(n){n.loading=t("Commands_loading")}(u=n.Commands||(n.Commands={})),function(n){var i,r,
u,f;(function(n){var i;(function(n){n.resourceManagement=t("Part_SettingList_Group_ResourceManagement")}
)(i=n.Group||(n.Group={}));n.users=t("Part_SettingList_users");n.tags=t("Part_SettingList_tags");n.roles=
t("Part_SettingList_roles");n.access=t("Part_SettingList_access");n.searchBoxPlaceholder=t("Part_SettingList_searchBoxPlaceholder")}
)(i=n.SettingList||(n.SettingList={})),function(n){n.editButtonText=t("Part_Chart_editButtonText")}(
r=n.Chart||(n.Chart={})),function(n){n.title=t("Part_Quickstart_title")}(u=n.Quickstart||(n.Quickstart=
{})),function(n){n.pollingFailed=t("Part_Provisioning_pollingFailed");n.deploymentStatusUnavailable=
t("Part_Provisioning_deploymentStatusUnavailable");n.description=t("Part_Provisioning_description")}
(f=n.Provisioning||(n.Provisioning={}))}(f=n.Part||(n.Part={})),function(n){var i,r,u,f,e;(function(
n){n.september=t("DatePolyfill_Months_September");n.october=t("DatePolyfill_Months_October");n.november=
t("DatePolyfill_Months_November");n.may=t("DatePolyfill_Months_May");n.march=t("DatePolyfill_Months_March");
n.june=t("DatePolyfill_Months_June");n.july=t("DatePolyfill_Months_July");n.january=t("DatePolyfill_Months_January");
n.february=t("DatePolyfill_Months_February");n.december=t("DatePolyfill_Months_December");n.august=t(
"DatePolyfill_Months_August");n.april=t("DatePolyfill_Months_April")})(i=n.Months||(n.Months={})),function(
n){n.september=t("DatePolyfill_MonthsAbbr_September");n.october=t("DatePolyfill_MonthsAbbr_October");
n.november=t("DatePolyfill_MonthsAbbr_November");n.may=t("DatePolyfill_MonthsAbbr_May");n.march=t("DatePolyfill_MonthsAbbr_March");
n.june=t("DatePolyfill_MonthsAbbr_June");n.july=t("DatePolyfill_MonthsAbbr_July");n.january=t("DatePolyfill_MonthsAbbr_January");
n.february=t("DatePolyfill_MonthsAbbr_February");n.december=t("DatePolyfill_MonthsAbbr_December");n.
august=t("DatePolyfill_MonthsAbbr_August");n.april=t("DatePolyfill_MonthsAbbr_April")}(r=n.MonthsAbbr||
(n.MonthsAbbr={})),function(n){n.wednesday=t("DatePolyfill_Days_Wednesday");n.tuesday=t("DatePolyfill_Days_Tuesday");
n.thursday=t("DatePolyfill_Days_Thursday");n.saturday=t("DatePolyfill_Days_Saturday");n.monday=t("DatePolyfill_Days_Monday");
n.friday=t("DatePolyfill_Days_Friday");n.sunday=t("DatePolyfill_Days_Sunday")}(u=n.Days||(n.Days={})
),function(n){n.wednesday=t("DatePolyfill_DaysAbbr_Wednesday");n.tuesday=t("DatePolyfill_DaysAbbr_Tuesday");
n.thursday=t("DatePolyfill_DaysAbbr_Thursday");n.saturday=t("DatePolyfill_DaysAbbr_Saturday");n.monday=
t("DatePolyfill_DaysAbbr_Monday");n.friday=t("DatePolyfill_DaysAbbr_Friday");n.sunday=t("DatePolyfill_daysAbbr_Sunday")}
(f=n.DaysAbbr||(n.DaysAbbr={})),function(n){n.years=t("DatePolyfill_agoStrings_years");n.weeks=t("DatePolyfill_agoStrings_weeks");
n.months=t("DatePolyfill_agoStrings_months");n.minutes=t("DatePolyfill_agoStrings_minutes");n.lessThanAMinute=
t("DatePolyfill_agoStrings_lessThanAMinute");n.hours=t("DatePolyfill_agoStrings_hours");n.days=t("DatePolyfill_agoStrings_days");
n.aYear=t("DatePolyfill_agoStrings_aYear");n.aWeek=t("DatePolyfill_agoStrings_aWeek");n.anHour=t("DatePolyfill_agoStrings_anHour");
n.aMonth=t("DatePolyfill_agoStrings_aMonth");n.aMinute=t("DatePolyfill_agoStrings_aMinute");n.aDay=t(
"DatePolyfill_agoStrings_aDay")}(e=n.AgoStrings||(n.AgoStrings={}))}(e=n.DatePolyfill||(n.DatePolyfill=
{})),function(n){n.unauthorizedText=t("FileDownload_unauthorizedText")}(o=n.FileDownload||(n.FileDownload=
{})),function(n){n.fileDownloadErrorStatus=t("FileDownloadCommand_fileDownloadErrorStatus");n.authTokenNotAvailable=
t("FileDownloadCommand_authTokenNotAvailable")}(s=n.FileDownloadCommand||(n.FileDownloadCommand={})),
function(n){var i,r;(function(n){n.viewPricingSummaryLabel=t("Services_Gallery_ViewPricingSummaryLabel")}
)(i=n.Gallery||(n.Gallery={})),function(n){n.titleGridColumn=t("Services_AssetHandler_titleGridColumn");
n.assetTypeGridColumn=t("Services_AssetHandler_assetTypeGridColumn")}(r=n.AssetHandler||(n.AssetHandler=
{}))}(h=n.Services||(n.Services={})),function(n){n.okButtonText=t("Dialogs_OkButtonText");n.cancelButtonText=
t("Dialogs_CancelButtonText")}(c=n.Dialogs||(n.Dialogs={})),function(n){var i;(function(n){n.reasonMessage=
t("Pickers_AccessDenied_reasonMessage")})(i=n.AccessDenied||(n.AccessDenied={}))}(l=n.Pickers||(n.Pickers=
{})),function(n){n.bladeTitle=t("DeleteAssetConfirmation_bladeTitle");n.warningText=t("DeleteAssetConfirmation_warningText");
n.confirmationLabel=t("DeleteAssetConfirmation_confirmationLabel");n.assetNameValidationFailureMessage=
t("DeleteAssetConfirmation_assetNameValidationFailureMessage");n.affectedItemsLabel=t("DeleteAssetConfirmation_affectedItemsLabel")}
(a=n.DeleteAssetConfirmation||(n.DeleteAssetConfirmation={})),function(n){var i,r;(function(n){n.title=
t("DeleteCommand_failure_title");n.message=t("DeleteCommand_failure_message")})(i=n.Failure||(n.Failure=
{})),function(n){n.title=t("DeleteCommand_confirmation_title");n.message=t("DeleteCommand_confirmation_message")}
(r=n.Confirmation||(n.Confirmation={}))}(v=n.DeleteCommand||(n.DeleteCommand={})),function(n){n.versionMismatch=
t("ExtensionRequestHandler_VersionMismatch")}(y=n.ExtensionRequestHandler||(n.ExtensionRequestHandler=
{}))})(t=n.Strings||(n.Strings={}))})(t=n.Resources||(n.Resources={}))})(MsPortalFx||(MsPortalFx={})
),function(n){var t;(function(n){var t;(function(n){"use strict";function t(n){return n}n.unsupportedPreviewBg=
t("MsPortalFx/UnsupportedPreviewBg.png");n.unsupportedPreview=t("MsPortalFx/UnsupportedPreview.png");
n.unsupportedArrow=t("MsPortalFx/UnsupportedArrow.png");n.sadalien=t("MsPortalFx/sadalien.png");n.microsoftLogo=
t("MsPortalFx/MicrosoftLogo.png");n.favicon=t("MsPortalFx/favicon.ico");n.errorBackground=t("MsPortalFx/ErrorBackground.png");
var i;(function(n){n.drop=t("MsPortalFx/cloud_drop.svg")})(i=n.Cloud||(n.Cloud={}));n.chevron=t("MsPortalFx/Chevron.svg");
n.arrow=t("MsPortalFx/arrow.png")})(t=n.Images||(n.Images={}))})(t=n.Resources||(n.Resources={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";function i(n){t.push(
n)}function r(){t.forEach(function(n){n.reset()})}var t=[];n.register=i;n.resetGlobalState=r})(t=n.GlobalStateManager||
(n.GlobalStateManager={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n)
{var t;(function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.Internal||(n.Internal={})
)})(t=n.Rpc||(n.Rpc={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
){"use strict"})(t=n.Boot||(n.Boot={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t)
{"use strict";var i=window,r=function(){function n(n,t,i){this._cache={};this._formatCulture=n;this.
_intl=t;this._formatFactorySelector=i}return n.prototype._create=function(n){var t,i;return this._intl&&
(i=this._formatFactorySelector(this._intl),i&&(t=new i(this._formatCulture,n))),t||(t={format:function(
n){return n.toString()}}),t},n.prototype.get=function(n){if(n){var i=Object.keys(n).sort().map(function(
t){return t+":"+n[t]}).join(","),t=this._cache[i];return t||(t=this._create(n),this._cache[i]=t),t}return this.
_defaultFormat||(this._defaultFormat=this._create()),this._defaultFormat},n}(),u=function(){function n(
n,t){var i=n.split(".");i.length>1?(this.displayLanguage=i[0],this.formatCulture=i[1]):this.displayLanguage=
this.formatCulture=i[0];this._intl=t;this.numberFormatCache=new r(this.formatCulture,t,function(n){return n.
NumberFormat});this.dateTimeFormatCache=new r(this.formatCulture,t,function(n){return n.DateTimeFormat}
)}return n.createWithBrowserIntl=function(t){return t===void 0&&(t=i.fx.environment.effectiveLocale||
"en.en-us"),new n(t,i.Intl)},n.prototype.supportedLocalesOf=function(n){return this._intl?(n=this._intl.
DateTimeFormat.supportedLocalesOf(n),this._intl.NumberFormat.supportedLocalesOf(n)):["en-us"]},n}(),
f;t.IntlContext=u,function(t){var r=n.Internal.IntlContext.createWithBrowserIntl(),u,f,e;t.displayLanguage=
r.displayLanguage;t.formatCulture=r.formatCulture,function(n){function t(n){return r.numberFormatCache.
get(n)}function i(n){return t().format(n)}n.create=t;n.format=i}(u=t.NumberFormat||(t.NumberFormat={
})),function(n){function t(n){return r.dateTimeFormatCache.get(n)}n.shortDatePattern={day:"numeric",
month:"numeric",year:"numeric"};n.longDatePattern={weekday:"long",year:"numeric",month:"long",day:"numeric"};
n.fullDateTimePattern={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:
"numeric",second:"numeric"};n.monthDayPattern={month:"long",day:"numeric"};n.shortTimePattern={hour:
"numeric",minute:"numeric"};n.longTimePattern={hour:"numeric",minute:"numeric",second:"numeric"};n.yearMonthPattern=
{year:"numeric",month:"long"};n.create=t}(f=t.DateTimeFormat||(t.DateTimeFormat={})),function(n){function t(
n){return r.supportedLocalesOf(n)}n.supportedLocalesOf=t}(e=t.Internal||(t.Internal={}));i.define("MsPortalFx/Globalization",
[],function(){return n.Internal.Intl})}(f=t.Intl||(t.Intl={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n){"use strict";function b(n){var t=
[];return s&&t.push(s),n.level===-1&&t.push("[DEBUG]"),t.push(new Date(n.timestamp).toString({hour:"numeric",
minute:"numeric",second:"numeric"})),n.area&&t.push(n.area),typeof n.code=="number"&&t.push(n.code),
n.message&&t.push(n.message),t.push.apply(t,n.args),t}function d(n){var t;try{t=l(n)}catch(i){t="ERROR serializing message: "+
l(i)}return t}function l(n){var t=[];return Object.getOwnPropertyNames(n).forEach(function(i){var r=
n[i];typeof r!="string"&&(r=JSON.stringify(r));t.push(i,": ",r,"\r\n")}),t.join("")}function g(n,t,i,
r,u){var f=!0;f=typeof t=="function"?t():!!t;f||(n.debugBreak,n.error(i,r,u))}var u=window,r=u.fx&&u.
fx.environment,s=r.extensionName&&"["+r.extensionName+"] ",a=r&&r.isDevelopmentMode,e=r&&r.trace||{},
v=!!e.assert,y=!!e.diagnostics,p=!!e.debuglog,h=[],i,o,w=20,t=function(){},k,c,f;(function(n){n[n.Custom=
-2]="Custom";n[n.Debug=-1]="Debug";n[n.Verbose=0]="Verbose";n[n.Warning=1]="Warning";n[n.Error=2]="Error"}
)(n.LogEntryLevel||(n.LogEntryLevel={}));k=n.LogEntryLevel;c=function(){function n(){this._buffer=[];
this._purgeFrequencyInMilliseconds=6e4;this._minRemoteLogLevel=1;this.setBufferFullCallback()}return n.
prototype.log=function(n){if(n.level>=this._minRemoteLogLevel)this._pushLog(n);else if(n.level===-2)
{this._pushLog(n);return}h[n.level](n)},n.prototype._pushLog=function(n){var t=this;this._buffer.push(
n);this._buffer.length>w?this.flush():this._bufferPurgeTimeoutHandle||(this._bufferPurgeTimeoutHandle=
u.setTimeout(function(){t.flush()},this._purgeFrequencyInMilliseconds))},n.prototype.getEntries=function(
n){return this._buffer.filter(function(t){return t.level>=n})},n.prototype.emptyBuffer=function(){this.
_buffer=[]},n.prototype.flush=function(){this._buffer=this._bufferFullCallback(this._buffer);this._bufferPurgeTimeoutHandle&&
(u.clearTimeout(this._bufferPurgeTimeoutHandle),this._bufferPurgeTimeoutHandle=null)},Object.defineProperty(
n.prototype,"MinRemoteLogLevel",{get:function(){return this._minRemoteLogLevel},set:function(n){this.
_minRemoteLogLevel=n},enumerable:!0,configurable:!0}),n.prototype.setBufferFullCallback=function(n){
var t=n;t=t?function(t){try{return n(t)}catch(i){return[]}}:function(n){return n.shift(),n};this._bufferFullCallback=
t},n}();i=new c;f=function(){function n(n){this.debugBreak=v;this._logArea=n}return n.writeEntry=function(
t,i,r){for(var f=[],u=3;u<arguments.length;u++)f[u-3]=arguments[u];n._writeEntry(t,i,r,null,f)},n.getEntries=
function(n){return i.getEntries(n)},n.clear=function(){i.emptyBuffer()},n.flush=function(){i.flush()}
,n.initialize=function(r,u){var f=r!==undefined&&r!==null,e=u!==undefined&&u!==null,o=t;f||e?f&&!e?u=
r:!f&&e&&(r=-1):(r=u=-1,o=g);i.MinRemoteLogLevel=u;n._setConsoleOutput(r);n._assertHelper=o},n.disable=
function(){n.initialize(3,3)},n.prototype.verbose=function(t){for(var r=[],i=1;i<arguments.length;i++)
r[i-1]=arguments[i];n._writeEntry(0,this._logArea,t,null,r)},n.prototype.warning=function(t,i){for(var
u=[],r=2;r<arguments.length;r++)u[r-2]=arguments[r];n._writeEntry(1,this._logArea,t,i,u)},n.prototype.
error=function(t,i){for(var u=[],r=2;r<arguments.length;r++)u[r-2]=arguments[r];n._writeEntry(2,this.
_logArea,t,i,u)},n.prototype.debug=function(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[
i];n._writeEntry(-1,this._logArea,t,null,r)},n.prototype.custom=function(t,i){for(var u=[],r=2;r<arguments.
length;r++)u[r-2]=arguments[r];n._writeEntry(-2,this._logArea,t,i,u)},n.prototype.assert=function(t,
i,r,u){n._assertHelper(this,t,i,r,u)},n._setBufferFullCallback=function(n){i.setBufferFullCallback(n)}
,n._writeEntry=function(n,t,r,u,f){var e,o;e=r?typeof r=="string"?r:d(r):r+"";o={timestamp:Date.now(
),level:n,area:t,message:e,code:u,args:f};i.log(o)},n._createConsoleOutputMap=function(){o=u.console||
{};var i=[],n=function(n){var t=o[n],i;return typeof t=="function"&&(i=function(n){try{var i=b(n);t.
apply(o,i)}catch(r){}}),i};return i[0]=n("log")||n("debug")||t,i[1]=n("warn")||t,i[2]=n("error")||t,
i[-1]=p?n("debug")||n("log")||t:t,i},n._setConsoleOutput=function(i){var r=n._createConsoleOutputMap(
),u=i===undefined||i===null?-1:i;[-1,0,1,2].forEach(function(n){h[n]=n>=u?r[n]:t})},n._assertHelper=
t,n}();n.Log=f;a||y?f.initialize():f.initialize(2,1)})(t=n.Diagnostics||(n.Diagnostics={}))})(t=n.Base||
(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(){"use strict"}
)(t=n.Net||(n.Net={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
n){"use strict";function t(n,t,i){n[t]=function(){return n[i].apply(this,arguments)}}function i(n){t(
n,"finally","always");t(n,"catch","fail")}$=jQuery;n.ajax=$.ajax;n.ajax=function(){return $.ajax.apply(
$,arguments)};n.selector=$;n.Callbacks=$.Callbacks;n.data=$.data;n.removeData=$.removeData,function(
){var n=this,t=$.Deferred;$.Deferred=function(){var r=t.apply(n,arguments),u=r.promise;return i(r),r.
promise=function(){var n=u.apply(this,arguments);return i(n),n},r}}();n.Deferred=$.Deferred;n.when=$.
when})(t=n.Helpers||(n.Helpers={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var
t;(function(n){"use strict";var t=function(){function n(n,t){typeof t=="number"&&(t={palette:t});this.
type=n;this.options=t||null}return n}(),i;n.ImageData=t,function(n){n[n.Blank=0]="Blank";n[n.Custom=
1]="Custom";n[n.ImageUri=2]="ImageUri";n[n.ActiveDirectory=3]="ActiveDirectory";n[n.Add=4]="Add";n[n.
BadgeError=6]="BadgeError";n[n.BadgeNone=7]="BadgeNone";n[n.BadgeSuccess=8]="BadgeSuccess";n[n.BadgeWarning=
9]="BadgeWarning";n[n.Book=10]="Book";n[n.Bug=11]="Bug";n[n.Check=12]="Check";n[n.CloudService=13]="CloudService";
n[n.Controls=14]="Controls";n[n.Cubes=15]="Cubes";n[n.Database=16]="Database";n[n.Delete=17]="Delete";
n[n.Disabled=18]="Disabled";n[n.Discard=19]="Discard";n[n.Download=20]="Download";n[n.Fallback=21]="Fallback";
n[n.Filter=22]="Filter";n[n.FolderBlank=23]="FolderBlank";n[n.FolderCube=24]="FolderCube";n[n.FolderWebsite=
25]="FolderWebsite";n[n.Ftp=26]="Ftp";n[n.Gear=27]="Gear";n[n.Grid=28]="Grid";n[n.Guide=29]="Guide";
n[n.Heart=30]="Heart";n[n.Hyperlink=31]="Hyperlink";n[n.Info=32]="Info";n[n.JourneyHub=33]="JourneyHub";
n[n.Key=34]="Key";n[n.Link=35]="Link";n[n.Location=36]="Location";n[n.Lock=37]="Lock";n[n.Media=38]=
"Media";n[n.MediaFile=39]="MediaFile";n[n.Mobile=40]="Mobile";n[n.Monitoring=41]="Monitoring";n[n.Notification=
42]="Notification";n[n.Pending=43]="Pending";n[n.Person=44]="Person";n[n.PersonWithFriend=45]="PersonWithFriend";
n[n.Pin=46]="Pin";n[n.Powershell=47]="Powershell";n[n.Properties=48]="Properties";n[n.Question=49]="Question";
n[n.QuickStart=50]="QuickStart";n[n.Refresh=51]="Refresh";n[n.Save=52]="Save";n[n.Search=53]="Search";
n[n.SearchGrid=54]="SearchGrid";n[n.ShellClose=55]="ShellClose";n[n.ShellCollapse=56]="ShellCollapse";
n[n.ShellDefaultBlade=57]="ShellDefaultBlade";n[n.ShellMaximize=58]="ShellMaximize";n[n.ShellRestore=
59]="ShellRestore";n[n.SslCustomDomains=60]="SslCustomDomains";n[n.Start=61]="Start";n[n.Stop=62]="Stop";
n[n.Storage=63]="Storage";n[n.Store=64]="Store";n[n.Subtract=65]="Subtract";n[n.Swap=66]="Swap";n[n.
TeamProject=67]="TeamProject";n[n.Toolbox=68]="Toolbox";n[n.Unlock=69]="Unlock";n[n.Unpin=70]="Unpin";
n[n.VirtualMachine=71]="VirtualMachine";n[n.Website=72]="Website";n[n.WebsitePower=73]="WebsitePower";
n[n.Canceled=74]="Canceled";n[n.Clock=75]="Clock";n[n.Clone=76]="Clone";n[n.Error=77]="Error";n[n.InfoAlert=
78]="InfoAlert";n[n.Paused=79]="Paused";n[n.Queued=80]="Queued";n[n.Warning=81]="Warning";n[n.AddTeamMember=
82]="AddTeamMember";n[n.Attachment=83]="Attachment";n[n.AvatarDefault=84]="AvatarDefault";n[n.AvatarUnknown=
85]="AvatarUnknown";n[n.Backlog=86]="Backlog";n[n.BacklogPoly=87]="BacklogPoly";n[n.BadgePending=88]=
"BadgePending";n[n.BadgeCanceled=89]="BadgeCanceled";n[n.BadgeDisabled=90]="BadgeDisabled";n[n.BadgeUnknown=
91]="BadgeUnknown";n[n.BillingHub=92]="BillingHub";n[n.Builds=93]="Builds";n[n.Code=94]="Code";n[n.CodePoly=
95]="CodePoly";n[n.Commit=96]="Commit";n[n.CommitPoly=97]="CommitPoly";n[n.Disable=98]="Disable";n[n.
Edit=99]="Edit";n[n.EmoticonNeutral=100]="EmoticonNeutral";n[n.Favorite=101]="Favorite";n[n.File=102]=
"File";n[n.GearFlat=103]="GearFlat";n[n.GetMoreLicense=104]="GetMoreLicense";n[n.GetStarted=105]="GetStarted";
n[n.GitLogo=106]="GitLogo";n[n.GitLogoBox=107]="GitLogoBox";n[n.Go=108]="Go";n[n.History=109]="History";
n[n.Inactive=110]="Inactive";n[n.InstallVisualStudio=111]="InstallVisualStudio";n[n.Log=112]="Log";n[
n.Pause=113]="Pause";n[n.Postpone=114]="Postpone";n[n.Release=115]="Release";n[n.Request=116]="Request";
n[n.Retain=117]="Retain";n[n.Scale=118]="Scale";n[n.Tasks=119]="Tasks";n[n.Triangle=120]="Triangle";
n[n.Upload=121]="Upload";n[n.UnknownBadge=122]="UnknownBadge";n[n.VisualStudio=123]="VisualStudio";n[
n.VisualStudioLogoBox=124]="VisualStudioLogoBox";n[n.CreateHub=125]="CreateHub";n[n.BrowseHub=126]="BrowseHub";
n[n.HomeHub=127]="HomeHub";n[n.JourneysHub=128]="JourneysHub";n[n.AlertsHub=129]="AlertsHub";n[n.Help=
130]="Help";n[n.BadgeStopped=131]="BadgeStopped";n[n.Connect=132]="Connect";n[n.Disconnect=133]="Disconnect";
n[n.PolyAppInsights=135]="PolyAppInsights";n[n.PolyAvailabilitySet=136]="PolyAvailabilitySet";n[n.PolyBackup=
137]="PolyBackup";n[n.PolyBrowser=138]="PolyBrowser";n[n.PolyCustomDomain=139]="PolyCustomDomain";n[
n.PolyGlobe=140]="PolyGlobe";n[n.PolyIpAddress=141]="PolyIpAddress";n[n.PolyLaunchPortal=142]="PolyLaunchPortal";
n[n.PolyLoadBalancer=143]="PolyLoadBalancer";n[n.PolyLoadTest=144]="PolyLoadTest";n[n.PolyLog=145]="PolyLog";
n[n.PolyLogDiagnostics=146]="PolyLogDiagnostics";n[n.PolyLogStreaming=147]="PolyLogStreaming";n[n.PolyNetworkInterfaceCard=
148]="PolyNetworkInterfaceCard";n[n.PolyResourceDefault=149]="PolyResourceDefault";n[n.PolyResourceLinked=
150]="PolyResourceLinked";n[n.PolyServerFarm=151]="PolyServerFarm";n[n.PolySqlDataBaseServer=152]="PolySqlDataBaseServer";
n[n.PolyTfsVcRepository=153]="PolyTfsVcRepository";n[n.PolyWebHosting=154]="PolyWebHosting";n[n.PolyWebsiteStaging=
155]="PolyWebsiteStaging";n[n.PolyWebTest=156]="PolyWebTest";n[n.Redo=157]="Redo";n[n.ShellChevron=158]=
"ShellChevron";n[n.Tools=159]="Tools";n[n.Wrench=160]="Wrench";n[n.AzureQuickstart=161]="AzureQuickstart";
n[n.Publish=162]="Publish";n[n.ThisWeek=163]="ThisWeek";n[n.PolyAutomation=164]="PolyAutomation";n[n.
PolySqlDatabase=165]="PolySqlDatabase";n[n.PolyTrafficManager=166]="PolyTrafficManager";n[n.PolyWebEnvironment=
167]="PolyWebEnvironment";n[n.PolyWebJobs=168]="PolyWebJobs";n[n.ShellDots=169]="ShellDots";n[n.BadgeErrorOutline=
170]="BadgeErrorOutline";n[n.BadgeInfoOutline=171]="BadgeInfoOutline";n[n.BadgeSuccessOutline=172]="BadgeSuccessOutline";
n[n.BadgeWarningOutline=173]="BadgeWarningOutline";n[n.DownloadFlat=174]="DownloadFlat";n[n.BadgeStoppedOutline=
175]="BadgeStoppedOutline";n[n.Ellipsis=176]="Ellipsis";n[n.ForPlacementOnly=177]="ForPlacementOnly";
n[n.PolyClearDBDatabase=178]="PolyClearDBDatabase";n[n.PolyResourceGroup=179]="PolyResourceGroup";n[
n.PolyWorkflow=180]="PolyWorkflow";n[n.LogoBitbucket=181]="LogoBitbucket";n[n.LogoBitbucketBox=182]=
"LogoBitbucketBox";n[n.LogoCodePlex=183]="LogoCodePlex";n[n.LogoCodePlexBox=184]="LogoCodePlexBox";n[
n.LogoDropbox=185]="LogoDropbox";n[n.LogoDropboxBox=186]="LogoDropboxBox";n[n.LogoGit=187]="LogoGit";
n[n.LogoGitBox=188]="LogoGitBox";n[n.LogoGitHub=189]="LogoGitHub";n[n.LogoGitHubBox=190]="LogoGitHubBox";
n[n.LogoVisualStudio=191]="LogoVisualStudio";n[n.LogoVisualStudioBox=192]="LogoVisualStudioBox";n[n.
MonitoringFlat=193]="MonitoringFlat";n[n.PolyCertificate=194]="PolyCertificate";n[n.PolyClock=195]="PolyClock";
n[n.PolyControlsHorizontal=196]="PolyControlsHorizontal";n[n.PolyInputOutput=197]="PolyInputOutput";
n[n.PolyModule=198]="PolyModule";n[n.PolyPowerUp=199]="PolyPowerUp";n[n.PolySupport=200]="PolySupport";
n[n.PolyTrafficManagerDisabled=201]="PolyTrafficManagerDisabled";n[n.PolyTrafficManagerEnabled=202]=
"PolyTrafficManagerEnabled";n[n.PolyVersions=203]="PolyVersions";n[n.TrendDown=204]="TrendDown";n[n.
TrendUp=205]="TrendUp";n[n.Variables=206]="Variables";n[n.PolyResourceList=207]="PolyResourceList";n[
n.PolyResourceGroupList=208]="PolyResourceGroupList";n[n.BadgeUnknownOutline=209]="BadgeUnknownOutline";
n[n.Commits=210]="Commits";n[n.HeartPulse=211]="HeartPulse";n[n.LogoExternalRepositoryBox=212]="LogoExternalRepositoryBox";
n[n.PolyDevConsole=213]="PolyDevConsole";n[n.PolyProductionReadyDb=214]="PolyProductionReadyDb";n[n.
PolyWebSlots=215]="PolyWebSlots";n[n.PowerUp=216]="PowerUp";n[n.ShellPreviewBadge=217]="ShellPreviewBadge";
n[n.GuideFlat=218]="GuideFlat";n[n.Support=219]="Support";n[n.LogoMicrosoft=220]="LogoMicrosoft";n[n.
ShellCornerCheck=221]="ShellCornerCheck";n[n.PolyGlobeError=222]="PolyGlobeError";n[n.PolyGlobeSuccess=
223]="PolyGlobeSuccess";n[n.PolyGlobeWarning=224]="PolyGlobeWarning";n[n.InfoFlat=225]="InfoFlat";n[
n.Signout=226]="Signout";n[n.LaunchCurrent=227]="LaunchCurrent";n[n.Feedback=228]="Feedback";n[n.LogoRedis=
229]="LogoRedis";n[n.PolyCache=230]="PolyCache";n[n.PolyBlobBlock=231]="PolyBlobBlock";n[n.PolyBlobPage=
232]="PolyBlobPage";n[n.PolyStorageContainer=233]="PolyStorageContainer";n[n.PolyStorageQueue=234]="PolyStorageQueue";
n[n.PolyTable=235]="PolyTable";n[n.WebHostingPlan=236]="WebHostingPlan";n[n.PolyExtensions=237]="PolyExtensions";
n[n.BadgeUpdateOutline=238]="BadgeUpdateOutline";n[n.Tag=239]="Tag";n[n.PolyBranch=240]="PolyBranch";
n[n.PolyChart=241]="PolyChart";n[n.EmoticonHappy=242]="EmoticonHappy";n[n.EmoticonSad=243]="EmoticonSad";
n[n.PolyDiscs=244]="PolyDiscs";n[n.PolyVirtualNetwork=245]="PolyVirtualNetwork";n[n.Tags=246]="Tags";
n[n.ShellGear=247]="ShellGear";n[n.SearchFlat=248]="SearchFlat";n[n.GearAlternate=249]="GearAlternate";
n[n.PolyCounter=250]="PolyCounter";n[n.PolyProcessExplorer=251]="PolyProcessExplorer";n[n.BadgeFailed=
252]="BadgeFailed";n[n.BadgeFailedOutline=253]="BadgeFailedOutline";n[n.PolyFile=254]="PolyFile";n[n.
PolyFiles=255]="PolyFiles";n[n.PolyImage=256]="PolyImage";n[n.TripleArrow=257]="TripleArrow";n[n.LogoMicrosoftSquares=
258]="LogoMicrosoftSquares";n[n.AddAlternate=259]="AddAlternate";n[n.ArrowDown=260]="ArrowDown";n[n.
ArrowLeft=261]="ArrowLeft";n[n.ArrowRight=262]="ArrowRight";n[n.ArrowUp=263]="ArrowUp";n[n.Columns=264]=
"Columns";n[n.FolderAlternate=265]="FolderAlternate";n[n.FlatKey=266]="FlatKey";n[n.Mail=267]="Mail";
n[n.Message=268]="Message";n[n.PreviewRight=269]="PreviewRight";n[n.Query=270]="Query";n[n.SaveAll=271]=
"SaveAll";n[n.Undo=272]="Undo";n[n.ShellHeaderDots=273]="ShellHeaderDots";n[n.ErrorIcon=274]="ErrorIcon";
n[n.Tour=275]="Tour";n[n.PolyManagementPortal=276]="PolyManagementPortal";n[n.LogoChannel9=277]="LogoChannel9";
n[n.LogoStackOverflow=278]="LogoStackOverflow";n[n.Diagnostics=279]="Diagnostics";n[n.PolySSD=280]="PolySSD";
n[n.ArrowWideDown=281]="ArrowWideDown";n[n.ArrowWideUp=282]="ArrowWideUp";n[n.Star=283]="Star";n[n.Trash=
284]="Trash";n[n.Globe=285]="Globe";n[n.CaretDown=286]="CaretDown";n[n.CaretUp=287]="CaretUp";n[n.ResourceRole=
288]="ResourceRole";n[n.ShellMinimize=289]="ShellMinimize";n[n.PolyStorageAzureFiles=290]="PolyStorageAzureFiles";
n[n.PolyPower=291]="PolyPower";n[n.BadgeCritical=292]="BadgeCritical";n[n.BadgeCriticalOutline=293]=
"BadgeCriticalOutline";n[n.Preview=294]="Preview";n[n.PartGalleryCollectionPartWithRollup=1e3]="PartGalleryCollectionPartWithRollup";
n[n.PartGalleryCollectionSummary=1001]="PartGalleryCollectionSummary";n[n.PartGalleryDonutChart=1002]=
"PartGalleryDonutChart";n[n.PartGalleryDonutChartPartial=1003]="PartGalleryDonutChartPartial";n[n.PartGalleryExtensions=
1004]="PartGalleryExtensions";n[n.PartGalleryGridWithMoreData=1005]="PartGalleryGridWithMoreData";n[
n.PartGalleryMap=1006]="PartGalleryMap";n[n.PartGalleryMultiLineChartMultiTrendLine=1007]="PartGalleryMultiLineChartMultiTrendLine";
n[n.PartGalleryMultiScatterChart=1008]="PartGalleryMultiScatterChart";n[n.PartGalleryMultiStackedBarChart=
1009]="PartGalleryMultiStackedBarChart";n[n.PartGalleryMutliLineChart=1010]="PartGalleryMutliLineChart";
n[n.PartGalleryPricingTier=1011]="PartGalleryPricingTier";n[n.PartGalleryQuotaGauge=1012]="PartGalleryQuotaGauge";
n[n.PartGalleryResourceMap=1013]="PartGalleryResourceMap";n[n.PartGallerySingleAreaChart=1014]="PartGallerySingleAreaChart";
n[n.PartGallerySingleAreaChartSingleThreshold=1015]="PartGallerySingleAreaChartSingleThreshold";n[n.
PartGallerySingleAreaChartSingleTrendline=1016]="PartGallerySingleAreaChartSingleTrendline";n[n.PartGallerySingleBarChartLarge=
1017]="PartGallerySingleBarChartLarge";n[n.PartGallerySingleBarChartSmall=1018]="PartGallerySingleBarChartSmall";
n[n.PartGallerySingleLineChart=1019]="PartGallerySingleLineChart";n[n.PartGallerySingleScatterChart=
1020]="PartGallerySingleScatterChart";n[n.PartGallerySingleScatterSingleThreshold=1021]="PartGallerySingleScatterSingleThreshold";
n[n.PartGallerySingleValueGauge=1022]="PartGallerySingleValueGauge";n[n.PartGallerySplitBarChart=1023]=
"PartGallerySplitBarChart";n[n.PartGalleryStackedAreaChart=1024]="PartGalleryStackedAreaChart"}(n.SvgType||
(n.SvgType={}));i=n.SvgType})(t=n.Image||(n.Image={}))})(t=n.Services||(n.Services={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){"use strict";(function(n){n[n.None=0]="None";n[n.White=
1]="White";n[n.Black=2]="Black";n[n.Blue=3]="Blue";n[n.Green=4]="Green";n[n.Gray=5]="Gray";n[n.Inherit=
99]="Inherit";n[n.Disabled=100]="Disabled"})(n.ImagePalette||(n.ImagePalette={}));var t=n.ImagePalette}
)(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(
){"use strict";var u=window,t=jQuery,r="koJqueryAppend",i="###knockoutArrayEditFixupTokenPropertyName###";
ko.bindingHandlers.activateWidget={init:function(n,i,r){var u=i(),f=r()["fxcontrol-options"]||{};t(n)[
u](f)},update:function(){}};ko.bindingHandlers.jqueryAppend={init:function(){return{controlsDescendantBindings:
!0}},update:function(n,i){var f=ko.utils.unwrapObservable(i()),u=t(n),e=u.data(r);e&&t(e).remove();u.
append(f);u.data(r,f)}};ko.bindingHandlers.commands={update:function(i,r){var f=t(i),u=r(),e,o;if(u&&
u.group){f.on(n.EventTypes.fxcontextmenurequest,e=function(i){var e,r;e=ko.utils.unwrapObservable(u.
viewModel);r=t.Event(n.EventTypes.fxrightclick);r.clientX=i.clientX;r.clientY=i.clientY;f.trigger(r,
{commandGroup:u.group,viewModel:e,entityType:2});i.preventDefault();i.stopPropagation()});ko.utils.domNodeDisposal.
addDisposeCallback(i,o=function(){f.off(n.EventTypes.fxcontextmenurequest,e)})}}};ko.utils.fixupArrayEdits=
function(n){if(n){if(n[i])throw new Error("Knockout array edits have already been fixed up.");n[i]=i;
var t=0;n.forEach(function(n){switch(n.status){case"added":t++;break;case"deleted":n.index+=t;t--}})}
return n};ko.utils.applyArrayEdits=function(n,t,i){t&&(i||(i=function(n){return n}),t.forEach(function(
t){switch(t.status){case"added":n.splice(t.index,0,i(t.value));break;case"deleted":n.splice(t.index,
1)}}))};ko.utils.observableArraySubscribe=function(n,t){return n.subscribe(function(i){var r=i.slice(
0),u=n.subscribe(function(n){var i=ko.utils.compareArrays(r,n);t(i);u.dispose()})},null,"beforeChange")}
;ko.utils.twoWayBinding=function(n,t){var r=n(),u=t(),i=!1,f=function(n,t){if(!i)try{i=!0;n(t)}finally{
i=!1}},e,o;return r!==undefined?t(r):u!==undefined&&n(u),e=n.subscribe(function(n){f(t,n)}),o=t.subscribe(
function(t){f(n,t)}),[e,o]};ko.observableArray.fn.subscribeArrayChanged=function(n,t,i){var r,f,u=null,
e,o;return e=this.subscribe(function(n){u=n.slice(0)},null,"beforeChange"),o=this.subscribe(function(
e){var o=ko.utils.compareArrays(u,e);for(r=0,f=o.length;r<f;r++)switch(o[r].status){case"deleted":t&&
t.call(i,o[r].value);break;case"added":n&&n.call(i,o[r].value)}u=null}),[e,o]};ko.observableArray.fn.
subscribeArrayEdits=function(n,t,i){var r=this.subscribe(t,i,"arrayChange");return n&&n.registerForDispose(
r),r};ko.observableArray.fn.subscribeArrayChanges=function(n,t,i,r){var f=t,u;return f&&r&&(f=f.bind(
r)),u=i,u&&r&&(u=u.bind(r)),this.subscribeArrayEdits(n,function(n){n.forEach(function(n){n.moved===undefined&&
(f&&n.status==="added"?f(n.value):u&&n.status==="deleted"&&u(n.value))})})};ko.observableArray.fn.subscribeArrayBulkChanges=
function(n,t,i){var r=t;return i&&r.bind(i),this.subscribeArrayEdits(n,function(n){var t=[],i=[];n.forEach(
function(n){n.moved===undefined&&(n.status==="added"?t.push(n.value):n.status==="deleted"&&i.push(n.
value))});r(t,i)})};ko.observableArray.fn.subscribeArrayAdds=function(n,t,i){return this.subscribeArrayChanges(
n,t,null,i)};ko.observableArray.fn.subscribeArrayDeletes=function(n,t,i){return this.subscribeArrayChanges(
n,null,t,i)}})(t=n.KnockoutExtensions||(n.KnockoutExtensions={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){var t;(function(){"use strict"})(t=n.Internal||(n.Internal=
{}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict";
var t=n.Helpers})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n)
{var t;(function(n){"use strict";function r(n,t){return new i(n,t)}var t,i;n.wrapWithCancelablePromise=
r;t=function(){function n(){this._canceled=!1}return Object.defineProperty(n.prototype,"canceled",{get:
function(){return this._canceled},enumerable:!0,configurable:!0}),n.prototype.cancel=function(){this.
_canceled=!0},n}();n.CancelationToken=t;i=function(){function n(n,t){if(!n)throw new Error("Argument 'underlyingPromise' cannot be null or undefined.");
if(!t)throw new Error("Argument 'cancelationToken' cannot be null or undefined.");this._underlyingPromise=
n;this._cancelationToken=t}return n.prototype.then=function(t,i){var r=this,u=null,f;return i&&(u=function(
n){if(!r._cancelationToken.canceled)return i(n)}),f=this._underlyingPromise.then(function(n){if(!r._cancelationToken.
canceled)return t?t(n):null},u),new n(f,this._cancelationToken)},n.prototype.progress=function(t){var
r=this,i;return this._underlyingPromise.progress?(i=this._underlyingPromise.progress(function(n){if(
!r._cancelationToken.canceled)return t(n)}),new n(i,this._cancelationToken)):this},n.prototype.finally=
function(n){return this.then(n,n)},n.prototype.catch=function(n){return this.then(null,n)},n}()})(t=
n.Promises||(n.Promises={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||
function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=
t.prototype;n.prototype=new r},function(n){var t;(function(n){var t;(function(n){"use strict";var t=
function(){function n(){this._modifyMap={};this._dependantMaps=[];this.observable=ko.observable({});
this._isInModifyBlock=!1}return n.prototype.put=function(n,t){var i=this;this._validateKey(n);this.modify(
function(){i._modifyMap[n]=t;i._dependantMaps.forEach(function(i){i._putNotification(n,t)})})},n.prototype.
lookup=function(n){return this._modifyMap[n]},n.prototype.modify=function(n){var f=this,e=!1,t=[],i=
0,r,u,o;if(!this._isInModifyBlock){e=!0;this._isInModifyBlock=!0;this._modifyMap={};r=this.observable(
);for(u in r)this._modifyMap[u]=r[u];for(i=0;i<this._dependantMaps.length;i++)o=function(n){t.push(function(
){f._dependantMaps[n].modify.apply(f._dependantMaps[n],[t[n+1]])})},o(i)}try{t.push(n);t[0]()}finally{
e&&(this._isInModifyBlock=!1,this.observable(this._modifyMap))}},n.prototype.latch=function(){return this.
observable()},n.prototype.clear=function(){var n=this;this.modify(function(){n._modifyMap={};n._dependantMaps.
forEach(function(t){t._clearNotification(n)})})},Object.defineProperty(n.prototype,"count",{get:function(
){return Object.keys(this.observable()).length},enumerable:!0,configurable:!0}),n.prototype.remove=function(
n){var t=this;if(this._validateKey(n),!(n in this.observable()))throw new Error("Key "+n+" not found in observable map when trying to remove it.");
this.modify(function(){delete t._modifyMap[n];t._dependantMaps.forEach(function(t){t._removeNotification(
n)})})},n.prototype.forEach=function(n){for(var t in this.observable())n(this.observable()[t],t)},n.
prototype.some=function(n){for(var t in this.observable())if(n(this.observable()[t],t))return!0;return!1}
,n.prototype.every=function(n){for(var t in this.observable())if(!n(this.observable()[t],t))return!1;
return!0},n.prototype.toArray=function(){var n=[];return this.forEach(function(t){n.push(t)}),n},n.prototype.
dispose=function(){},n.prototype.subscribe=function(n,t,i,r){var u;return u=this.observable.subscribe(
t,i,r),n.registerForDispose(u),u},n.prototype.map=function(n,t){return new i(n,this,t)},n.prototype.
_addDependantMap=function(n){this._dependantMaps.push(n)},n.prototype._removeDependantMap=function(n)
{for(var i=[],t=0;t<this._dependantMaps.length;t++)this._dependantMaps[t]!==n&&i.push(this._dependantMaps[
t]);this._dependantMaps=i},n.prototype._putNotification=function(){},n.prototype._removeNotification=
function(){},n.prototype._clearNotification=function(){},n.prototype._validateKey=function(n){for(var
t in Object.prototype)if(t===n)throw new Error(n+" is a reserved key and thus you cannot add or remove it from observable maps.");
},n}(),i,r;n.ObservableMap=t;i=function(n){function t(t,i,r){var u=this;n.call(this);this._map=i;this.
_transform=r;i._addDependantMap(this);t.registerForDispose(this);this.modify(function(){i.forEach(function(
t,i){n.prototype.put.call(u,i,u._transform(t))})})}return __extends(t,n),t.prototype.dispose=function(
){this._map._removeDependantMap(this)},t.prototype.put=function(){throw new Error("Can't put entries in projections.");
},t.prototype.remove=function(){throw new Error("Can't remove entries from projections.");},t.prototype.
clear=function(){throw new Error("Can't clear observable map projections.");},t.prototype._putNotification=
function(t,i){var r=this.latch()[t];r&&r.dispose&&r.dispose();n.prototype.put.call(this,t,this._transform(
i))},t.prototype._removeNotification=function(t){var i=this.latch()[t];i&&i.dispose&&i.dispose();n.prototype.
remove.call(this,t)},t.prototype._clearNotification=function(){this.forEach(function(n){typeof n.dispose==
"function"&&n.dispose()});n.prototype.clear.call(this)},t}(t);n.ObservableMapProjection=i;r=function(
n){function t(t){for(var r=this,u=[],i=1;i<arguments.length;i++)u[i-1]=arguments[i];n.call(this);this.
_maps=u;t.registerForDispose(this);u.forEach(function(t){t._addDependantMap(r);r.modify(function(){t.
forEach(function(t,i){n.prototype.put.call(r,i,t)})})})}return __extends(t,n),t.prototype.dispose=function(
){var n=this;this._maps.forEach(function(t){t._removeDependantMap(n)})},t.prototype.put=function(){throw new
Error("Can't put entries in projections.");},t.prototype.remove=function(){throw new Error("Can't remove entries from projections.");
},t.prototype.clear=function(){throw new Error("Can't clear observable map projections.");},t.prototype.
_putNotification=function(t,i){n.prototype.put.call(this,t,i)},t.prototype._removeNotification=function(
t){n.prototype.remove.call(this,t)},t.prototype._clearNotification=function(t){var i=this;this._modifyMap=
{};this._maps.forEach(function(r){r!==t&&r.forEach(function(t,r){n.prototype.put.call(i,r,t)})});this.
_dependantMaps.forEach(function(n){n._clearNotification(i)})},t}(t);n.ObservableMapUnion=r})(t=n.Internal||
(n.Internal={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){"use strict";function s(
t,i){if(!t)throw new Error("Argument is required: lifetime");t.registerForDispose(n.computed(i))}function e(
n){var t=n.subscribe;n.subscribe=function(n){var u,f,r,e;if(i(n)){for(u=arguments.length-1,f=new Array(
u),r=0;r<u;r++)f[r]=arguments[r+1];return e=t.apply(this,f),n.registerForDispose(e),e}return t.apply(
this,arguments)}}function t(n){return n&&(n.map=h,n.filter=c),n}function h(n,r){if(i(n)){var f=u.call(
this,{mappingWithDisposeCallback:function(t){var i=n.createChildLifetime();return{mappedValue:r(i,t),
dispose:function(){i.dispose()}}}});return n.registerForDispose(f),t(f)}return t(u.apply(this,arguments))}
function c(n,r){if(i(n)){var u=f.call(this,r);return n.registerForDispose(u),t(u)}return t(f.apply(this,
arguments))}function i(n){return n&&typeof n.registerForDispose=="function"}var o,r,u,f;n.reactor=s;
e(n.subscribable.fn);o=n.extenders.trackArrayChanges;n.extenders.trackArrayChanges=function(n){var t=
n.subscribe,i=o.apply(this,arguments),r=n.subscribe;return r!==t&&e(n),i};r=n.computed;n.computed=function(
n){var u,f,t,e;if(i(n)){for(u=arguments.length-1,f=new Array(u),t=0;t<u;t++)f[t]=arguments[t+1];return e=
r.apply(this,f),n.registerForDispose(e),e}return r.apply(this,arguments)};u=n.observableArray.fn.map;
f=n.observableArray.fn.filter;t(n.observableArray.fn)}(ko||(ko={})),function(n){var t;(function(n){var
t;(function(n){"use strict";var t=window,i,r,u,f,e,o;n.Shell="fx",function(n){n.Hubs="HubsExtension";
n.Billing="Microsoft_Azure_Billing"}(i=n.ExtensionNames||(n.ExtensionNames={})),function(n){n.Notification=
"Notification";n.ResourceGroups="ResourceGroups";n.BrowseAllBlade="BrowseAll";n.BrowseAllResources="BrowseAllResources";
n.BrowseAllBladeWithType="BrowseAllWithType";n.BrowseServiceBlade="BrowseService";n.BrowseResourceGroupBlade=
"BrowseResourceGroup";n.BrowseResourceBlade="BrowseResource";n.Gallery="Gallery";n.StoreGallery="StoreGallery"}
(r=n.AssetNames||(n.AssetNames={})),function(n){n.ResourceGroups="Microsoft.Resources/subscriptions/resourcegroups";
n.AllResources="Microsoft.Resources/resources"}(u=n.ResourceTypes||(n.ResourceTypes={})),function(n)
{var t;(function(n){n.BrowseServicePinnedPart="BrowseServicePart";n.BrowseResourcePinnedPart="BrowseResourcePinnedPart";
n.BrowseResourceGroupPinnedPart="BrowseResourceGroupPinnedPart"})(t=n.Hubs||(n.Hubs={}))}(f=n.PartNames||
(n.PartNames={})),function(n){n.Billing="billing";n.Browse="browse";n.Create="create";n.Debug="debug";
n.Journeys="journeys";n.Notifications="notifications"}(e=n.HubNames||(n.HubNames={})),function(n){n.
ViewModel="viewModel";n.PartViewModel="partViewModel"}(o=n.ViewModelTypes||(n.ViewModelTypes={}));t.
fx.environment.trace||(t.fx.environment.trace={})})(t=n.Constants||(n.Constants={}))})(t=n.Base||(n.
Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict";function n(n,t){return n===
t}function t(t,i,r){r=r||n;i.forEach(function(n){t.firstIndex(function(t){return r(t,n)})===-1&&t.push(
n)})}function i(i,r){var u=[];return r=r||n,t(u,this,r),t(u,i,r),u}function r(n,t){var i=this.firstIndex(
n,t);return i<0?null:this[i]}function u(n,t){var r=this.length,i,u;if(r>0){if(i=t||0,!n)return i<r&&
i>=0?i:-1;if(i>=0)for(;i<r;i++)if(u=this[i],n(u)===!0)return i}return-1}function f(){if(this.length<
1)throw new Error("Cannot get the last element because the array is empty.");return this[this.length-
1]}function e(n){var t=[];return t.concat.apply(t,this.map(n))}function o(n){for(var i=[],t=this.indexOf(
n);t>=0;t=this.indexOf(n,t))i.push(this.splice(t,1)[0]);return i}function s(n){var t=this.map(function(
n,t){return{i:t,v:n}});return t.sort(function(t,i){var r=n(t.v,i.v);return r===0?t.i-i.i:r}),t.map(function(
n){return n.v})}function h(n){var t=[];return this.forEach(function(i){t[n(i)]=i}),t}function c(i){var
r=[];return i=i||n,t(r,this,i),r}Array.prototype.concatUnique||(Array.prototype.concatUnique=i);Array.
prototype.first||(Array.prototype.first=r);Array.prototype.firstIndex||(Array.prototype.firstIndex=u);
Array.prototype.last||(Array.prototype.last=f);Array.prototype.mapMany||(Array.prototype.mapMany=e);
Array.prototype.remove||(Array.prototype.remove=o);Array.prototype.stableSort||(Array.prototype.stableSort=
s);Array.prototype.toNumberMap||(Array.prototype.toNumberMap=h);Array.prototype.unique||(Array.prototype.
unique=c)})(t=n.Polyfills||(n.Polyfills={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
){"use strict";var u=n.Resources.Strings.DatePolyfill.AgoStrings,g=Date.prototype.toString,nt=Date.parse,
t=n.Resources.Strings.DatePolyfill,tt=new n.Base.Diagnostics.Log("MsPortalFx.Polyfill"),r={days:[t.Days.
sunday,t.Days.monday,t.Days.tuesday,t.Days.wednesday,t.Days.thursday,t.Days.friday,t.Days.saturday],
daysAbbr:[t.DaysAbbr.sunday,t.DaysAbbr.monday,t.DaysAbbr.tuesday,t.DaysAbbr.wednesday,t.DaysAbbr.thursday,
t.DaysAbbr.friday,t.DaysAbbr.saturday],months:[t.Months.january,t.Months.february,t.Months.march,t.Months.
april,t.Months.may,t.Months.june,t.Months.july,t.Months.august,t.Months.september,t.Months.october,t.
Months.november,t.Months.december],monthsAbbr:[t.MonthsAbbr.january,t.MonthsAbbr.february,t.MonthsAbbr.
march,t.MonthsAbbr.april,t.MonthsAbbr.may,t.MonthsAbbr.june,t.MonthsAbbr.july,t.MonthsAbbr.august,t.
MonthsAbbr.september,t.MonthsAbbr.october,t.MonthsAbbr.november,t.MonthsAbbr.december],ampm:["AM","PM"],
ampmAbbr:[],dateSeparator:"/",timeSeparator:":",standard:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",F:"dddd, MMMM dd, yyyy h:mm:ss tt",
m:"MMMM dd",M:"MMMM dd",r:"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",R:"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
s:"yyyy'-'MM'-'dd'T'HH':'mm':'ss",t:"h:mm tt",T:"h:mm:ss tt",u:"yyyy'-'MM'-'dd HH':'mm':'ss'Z'",y:"MMMM, yyyy",
Y:"MMMM, yyyy"},firstDayOfWeek:0,agoStrings:{lessThanAMinute:t.AgoStrings.lessThanAMinute,aMinute:t.
AgoStrings.aMinute,minutes:t.AgoStrings.minutes,anHour:t.AgoStrings.anHour,hours:t.AgoStrings.hours,
aDay:t.AgoStrings.aDay,days:t.AgoStrings.days,aWeek:t.AgoStrings.aWeek,weeks:t.AgoStrings.weeks,aMonth:
t.AgoStrings.aMonth,months:t.AgoStrings.months,aYear:t.AgoStrings.aYear,years:t.AgoStrings.years}},s=
60,h=s*60,o=h*24,a=o*7,v=o*365,y=v/12,et=s*1e3,ot=h*1e3,st=o*1e3,ht=a*1e3,w=[{limit:s,format:u.lessThanAMinute,
factorSeconds:0},{limit:s*1.5,format:u.aMinute,factorSeconds:0},{limit:h,format:u.minutes,factorSeconds:
s},{limit:h*1.5,format:u.anHour,factorSeconds:0},{limit:o,format:u.hours,factorSeconds:h},{limit:o*1.5,
format:u.aDay,factorSeconds:0},{limit:a,format:u.days,factorSeconds:o},{limit:a*1.5,format:u.aWeek,factorSeconds:
0},{limit:y,format:u.weeks,factorSeconds:a},{limit:y*1.5,format:u.aMonth,factorSeconds:0},{limit:v,format:
u.months,factorSeconds:y},{limit:v*1.5,format:u.aYear,factorSeconds:0},{limit:Number.POSITIVE_INFINITY,
format:u.years,factorSeconds:v},],it=function(n,t,i){return i=i?i:"0",t+1>=n.length&&(n=Array(t+1-n.
length).join(i)+n),n},c=function(n,t,i){return it(n+"",t,i)},b=function(n,t){return n.substr(n.length-
t)},f=function(n,t){return b(n+"",t)},e=function(n,t){return b(c(n,t,"0"),t)},k=function(n){return n=
n%12,n===0?12:n},p=function(n){return n.split("").reverse().join("")},l=function(n){return"\\"+n.split(
"").join("\\")},i,rt=function(n){var t=n.length,u,o,s,h;switch(n[0]){case"y":switch(t){case 3:return c(
i.getFullYear(),t);case 1:return parseInt(f(i.getFullYear(),2),10)+"";default:return e(i.getFullYear(
),t)}case"M":switch(t){case 4:return l(r.months[i.getMonth()]);case 3:return l(r.monthsAbbr[i.getMonth(
)]);case 2:return e(i.getMonth()+1,2);default:return f(i.getMonth()+1,2)}case"d":switch(t){case 4:return l(
r.days[i.getDay()]);case 3:return l(r.daysAbbr[i.getDay()]);case 2:return e(i.getDate(),2);default:return f(
i.getDate(),2)}case"h":return t===2?e(k(i.getHours()),2):f(k(i.getHours()),2);case"H":return t===2?e(
i.getHours(),2):f(i.getHours(),2);case"m":return t===2?e(i.getMinutes(),2):f(i.getMinutes(),2);case"s":
return t===2?e(i.getSeconds(),2):f(i.getSeconds(),2);case"t":return t===2?r.ampm[i.getHours()<12?0:1]:
r.ampmAbbr[i.getHours()<12?0:1];case"z":return(u=-i.getTimezoneOffset()/60,o=u<0,o&&(u=-u),s=parseInt(
u+"",10),h=(u-s)*60,t===3)?(o?"-":"+")+c(s,2)+":"+c(h,2):(o?"-":"+")+c(s,t);case"/":return r.dateSeparator
case":":return r.timeSeparator}return""},ut=function(n){return p(rt(n))},d=function(n,t){var r,i,u,f;
for(t=t||new Date,u=t.getTime()-n.getTime(),u/=1e3,r=0;r<w.length;r++)if(i=w[r],u<i.limit)break;return f=
i.format,i.factorSeconds&&(f=f.format(Math.round(u/i.factorSeconds))),f},ft=function(t,i){var u,o,f,
e,s,h=t.toString();for(i=i||new Date,s=new Date(i.getFullYear(),i.getMonth(),i.getDate()-i.getDay()+
r.firstDayOfWeek),e=[{limit:86400,format:function(n){return d(n,i)}},{limit:(i.getTime()-s.getTime())
/1e3,format:function(n){return n.toString({weekday:"long"})}},{limit:Number.POSITIVE_INFINITY,format:
function(t){return t.toString(n.Internal.Intl.DateTimeFormat.shortDatePattern)}}],o=(i.getTime()-t.getTime(
))/1e3,u=0;u<e.length;u++)if(f=e[u],o<f.limit&&f.limit>0)break;return f.format(t)};Date.getLocaleValues=
function(){return r};Date.setLocaleValues=function(n){var t;r=n;r.ampmAbbr=[r.ampm[0][0]||"",r.ampm[
1][0]||""];t=r.standard;t.f=t.D+" "+t.t;t.g=t.d+" "+t.t;t.G=t.d+" "+t.T};Date.prototype.toRelativeString=
function(n,t){var i;t=t||new Date;n=n||"difference";switch(n){case"difference":i=d(this,t);break;case"timestamp":
i=ft(this,t)}return i};Date.prototype.toString=function(){var t,u;return arguments.length?(t=arguments[
0],typeof t=="string"?(tt.assert(!1,"For globalization purposes, do not use date.toString(string) for formatting dates. Instead use date.toString(Intl.DateTimeFormat options)"),
t=r.standard[t]||t,t=t.replace(/'([^']*)'/g,function(n,t){return l(t)}),i=this,p(p(t).replace(/(y{1,5}|M{1,4}|d{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|t{1,2}|z{1,3}|\/|:)(?!\\)/g,
ut).replace(/\\(?!\\)/g,""))):(u=n.Internal.Intl.DateTimeFormat.create(t),u.format(this))):g.apply(this,
arguments)};Date.parse=function(n){return(n+"").substr(0,6)==="/Date("?parseInt(n.substr(6),10):nt.apply(
this,arguments)};Date.setLocaleValues(r)})(t=n.Polyfills||(n.Polyfills={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(){"use strict";function r(){var n=arguments,f=this,e=!1,r,u;return n&&
n.length===1&&n[0]&&typeof n[0]=="object"&&(u=n[0],r=f.replace(t,function(n){var t=n.substring(1,n.length-
1);return u.hasOwnProperty(t)?(e=!0,u[t]):n})),e||(r=f.replace(i,function(t,i){return i<n.length?n[i]:
t})),r}function u(n,t,i){return typeof n=="undefined"||n===null?-1:this.toLocaleLowerCase().localeCompare(
n.toLocaleLowerCase(),t,i)}function f(t,i){return this.replace(new RegExp(n.Util.regexEscape(t),"g"),
i)}function e(t){var r={},u=!1,i,f;for(i in t||{})t.hasOwnProperty(i)&&(r[n.Util.regexEscape(i)]=t[i],
u=!0);return u?(f=new RegExp(Object.keys(r).join("|"),"g"),this.replace(f,function(n){return t[n]})):
this}function o(n){return Array(n+1).join(this)}function s(n){return this.indexOf(n)===0}function h(
n){var t=String(n),i=this.lastIndexOf(t);return i>=0&&i===this.length-t.length}var t=/\{[a-zA-Z$_\d]*\}/g,
i=/\{(\d+)\}/g;String.prototype.format=r;String.prototype.localeCompareIgnoreCase=u;String.prototype.
replaceAll=f;String.prototype.replaceMany=e;String.prototype.repeat||(String.prototype.repeat=o);String.
prototype.startsWith||(String.prototype.startsWith=s);String.prototype.endsWith||(String.prototype.endsWith=
h)})(t=n.Polyfills||(n.Polyfills={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var
t;(function(n){var t;(function(n){var t;(function(n){"use strict";function t(n){if(jQuery.type(n)!==
"object"||n.nodeType||r(n))return!1;var t=n.constructor&&n.constructor.prototype;return t&&!o.call(t,
"isPrototypeOf")?!1:!0}function s(n){for(var t in n)return!1;return!0}function r(n){return n!=null&&
n===n.window}function u(n){return n==null?n+"":typeof n=="object"||typeof n=="function"?i[toString.call(
n)]||"object":typeof n}function f(n){return u(n)==="function"}function e(){for(var y=[],s=0;s<arguments.
length;s++)y[+s]=arguments[s];var h,o,r,i,c,l,n=arguments[0]||{},u=1,v=arguments.length,a=!1;for(typeof
n=="boolean"&&(a=n,n=arguments[u]||{},u++),typeof n=="object"||f(n)||(n={}),u===v&&(n=this,u--);u<v;
u++)if((h=arguments[u])!=null)for(o in h)(r=n[o],i=h[o],n!==i)&&(a&&i&&(t(i)||(c=Array.isArray(i)))?
(c?(c=!1,l=r&&Array.isArray(r)?r:[]):l=r&&t(r)?r:{},n[o]=e(a,l,i)):i!==undefined&&(n[o]=i));return n}
var i={},o=i.hasOwnProperty;n.isPlainObject=t;n.isEmptyObject=s;n.isWindow=r;n.type=u;n.isFunction=f;
n.extend=e})(t=n.JQuery||(n.JQuery={}))})(t=n.Internal||(n.Internal={}))})(t=n.Utilities||(n.Utilities=
{}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={}));InternalJQuery=MsPortalFx.Base.Utilities.
Internal.JQuery,function(n){var t;(function(t){var i;(function(t){"use strict";function w(n){return n&&
typeof n=="object"&&!(n instanceof Date)&&!Array.isArray(n)}function b(n,t,i){var u=[],r,e,f;if(n&&t&&
i)for(r=n,e=t.length,i--;;){if(u.length>=i){u.push(r);break}if(f=r.indexOf(t),f<0){u.push(r);break}u.
push(r.substr(0,f));r=r.substr(f+e)}return u}function k(){}function a(n,t,i){return i?InternalJQuery.
extend(!0,n,t):InternalJQuery.extend(n,t)}function d(n,t,i){if(i&&p(n))return n;var r=Array.isArray(
n)?[]:{};return a(r,n,t)}function g(n,t,i){var r=[],u,f;for(u in n)f=t(n[u],u,i),s(f)||r.push(f);return r.
concat.apply([],r)}function v(n){return s(n)?"":(n+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(
/>/g,"&gt;")}function nt(n){return v(n).replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/`/g,"&#96;")}
function s(n){return n===null||n===undefined}function tt(n){return!n||n.trim().length<=0}function it(
){return!i.parent||i.window===i.parent.window?!1:!0}function rt(n,t){return n?!t:t}function ut(n,t){
if(n===t)return!0;if(n&&t){if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(n[i]!==t[i])
return!1;return!0}return!1}function h(n,t,i){var r,u,f,e,o,s;if(i?(n=ko.utils.peekObservable(n),t=ko.
utils.peekObservable(t)):(n=ko.utils.unwrapObservable(n),t=ko.utils.unwrapObservable(t)),n===t)return!0;
if(!n||!t||(u=y(n),u!==y(t)))return!1;switch(u){case"array":if(f=n.length,f!==t.length)return!1;for(
r=0;r<f;r++)if(!h(n[r],t[r],i))return!1;break;case"object":for(e=Object.keys(n),o=e.length,r=0;r<o;r++)
if(s=e[r],!h(n[s],t[s],i))return!1;if(o!==Object.keys(t).length)return!1;break;default:return!1}return!0}
function y(n){var t=typeof n;return t==="object"&&Array.isArray(n)&&(t="array"),t}function ft(n){var
i,f,r,e,o;return n||t.isDiagnosticsEnabled?(i=u(),i&&(f="\n",r=0,r=i.indexOf(f,0),r=i.indexOf(f,r+1),
e=i.indexOf("@",0),o=e>-1&&e<r,o?i=i.substr(r+1):(r=i.indexOf(f,r+1),i=i.substr(r+1))),i):"(Callstack capturing is not enabled. Use ?trace=diagnostics to enable it.)"}
function et(n,t){var i=function(t,i){if(t===n&&!t.hasOwnProperty(i))throw new Error("Missing property '{0}' on root object '{1}'.".
format(i,JSON.stringify(t)));},r=function(r,u){var o=u===n,f,e;return u&&typeof u=="object"&&!Array.
isArray(u)?(f=o&&t?t:Object.keys(u),f.length===0?o?{}:u:(e=new c,f.forEach(function(n){i(u,n);e.addProperty(
n,u[n])}),e.toJSON())):u};return JSON.stringify(n||{},r)}function ot(n){var t=function(t,i){if(t===c.
sortedObjectsArrayKey&&Array.isArray(i)){var r=this;return i.forEach(function(t){var i,u;if(!t||typeof
t!="object"||Array.isArray(t))throw new Error("Invalid sorted string, property array must contain objects. String: '{0}'.".
format(n));if(i=Object.keys(t),i.length!==1)throw new Error("Invalid sorted string, property array must contain objects with only one property. String: '{0}'.".
format(n));u=i[0];r[u]=t[u]}),undefined}return i};return JSON.parse(n,t)}function st(n){n&&(n.container&&
typeof n.container.dispose=="function"&&n.container.dispose(),n.content&&typeof n.content.dispose=="function"&&
n.content.dispose())}function ht(n){return o+n+o}function ct(n){return n!=="constructor"&&n.substring(
0,3)!==o}function lt(n,t){var i,r,u;return!n||!t||n.length<t.length?!1:(i=n.toLowerCase(),r=t.toLowerCase(
),i===r)?!0:(u="."+r,i.substr(0-u.length)===u?!0:!1)}function at(n){var i,t;return n?(n.indexOf("//")===
0?n=n.substring(i+2):(i=n.indexOf("://"),i>-1&&(n=n.substring(i+3))),t=n.search(/[?#/]/),t=t>-1?t:n.
length,n.substring(0,t)):n}var i=window,r=i.fx.environment,e=new n.Base.Diagnostics.Log("MsPortalFx/Base/Base.Utilities"),
l=function(){return(new Error).stack},p=function(n){return typeof n!="object"||n===null},o="###",u=l,
f,c;i.parent===i||r.trace.nonsecure&&r.isDevelopmentMode||(f="This call to {0} is not allowed in an extension.",
i.alert=function(n){e.error(f.format("alert"),1,n)},i.confirm=function(n){return e.error(f.format("confirm"),
2,n),!1},i.prompt=function(n){return e.error(f.format("prompt"),3,n),null});u()||(u=function(){try{throw new
Error;}catch(n){return n.stack}});u()||(u=function(){return""});t.isObject=w;t.split=b;t.isDiagnosticsEnabled=
function(){return r.trace&&r.trace.diagnostics?!0:r.trace&&r.trace.nocallstacks?!1:r.isDevelopmentMode&&
!!l()?!0:!1}();t.noop=k;t.extend=a;t.clone=d;t.map=g;t.htmlEncode=v;t.attributeEncode=nt;t.isNullOrUndefined=
s;t.isNullOrWhiteSpace=tt;t.isIFrame=it;t.xor=rt;t.arrayEquals=ut;t.deepEquals=h;t.getCurrentCallStack=
ft;t.toSortedString=et;t.parseSortedString=ot;t.disposeViewModelProperties=st;t.generateNonSerializableProperty=
ht;t.isSerializableProperty=ct;t.isSubdomain=lt;t.getUriAuthority=at;c=function(){function n(){this.
_propertyMap={}}return n.prototype.addProperty=function(n,t){t!==undefined&&typeof t!="function"&&(this.
_propertyMap[n]=t)},n.prototype.toJSON=function(){var r=this,i=Object.keys(this._propertyMap),t;return i.
length>1?(t={},t[n.sortedObjectsArrayKey]=i.sort().map(function(n){var t={};return t[n]=r._propertyMap[
n],t}),t):this._propertyMap},n.sortedObjectsArrayKey="#",n}()})(i=t.Utilities||(t.Utilities={}))})(t=
n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(n)
{"use strict";var t="MsPortalFx.Internal.Constants.RpcMethods.",i;(function(n){n.brokerExtensionService=
t+"brokerExtensionService";n.forwardEvent=t+"forwardEvent";n.getAuthToken=t+"getAuthenticationToken";
n.entryPointDispose=t+"entryPointDispose";n.entryPointGetDefinition=t+"entryPointGetDefinition";n.entryPointInitialize=
t+"entryPointInitialize";n.hasPermission=t+"hasPermission";n.hasPermissionToHubs=t+"hasPermissionToHubs";
n.mapAssetIdToResourceId=t+"mapAssetIdToResourceId";n.mapResourceIdToAssetId=t+"mapResourceIdToAssetId";
n.mapAssetIdToDynamicSelectionAndIcon=t+"mapAssetIdToDynamicSelectionAndIcon";n.mapResourceIdToDynamicSelectionAndIcon=
t+"mapResourceIdToDynamicSelectionAndIcon";n.getAssetTypeInformation=t+"getAssetTypeInformation";n.getResourceTypeAssetTypeInformation=
t+"getResourceTypeAssetTypeInformation";n.getResourceAssetInformation=t+"getResourceAssetInformation";
n.getRegisteredAssetTypesInformation=t+"getRegisteredAssetTypesInformation";n.notifyExtensionStatus=
t+"notifyExtensionStatus";n.ping=t+"ping";n.provideExtensionService=t+"provideExtensionService";n.registration=
t+"register";n.updateSubscriptionInfo=t+"updateSubscriptionInfo";n.updateTenantInfo=t+"updateTenantInfo";
n.getRegisteredResourceProviderInfo=t+"getRegisteredResourceProviderInfo";n.viewModels=t+"viewModels";
n.getClientNotifications=t+"getClientNotifications";n.shellReadUserSettings=t+"Shell.readUserSettings";
n.shellWriteUserSettings=t+"Shell.writeUserSettings";n.azureResrouceManagerDeployTemplate=t+"AzureResourceManager.DeploymentManager.deployTemplate";
n.azureResrouceManagerPollForDeployment=t+"AzureResourceManager.DeploymentManager.pollForDeployment";
n.getExtensionGalleryServiceViewModel=t+"getExtensionGalleryServiceViewModel";n.getLocalGalleryPackagesEndpoints=
t+"getLocalGalleryPackagesEndpoints";n.getProvisioningOperation=t+"ParameterCollection.ShellProvisioner.getProvisioningOperation";
n.getProvisioningRequest=t+"ParameterCollection.ShellProvisioner.fulfillProvisioningRequest";n.initiateProvisioningRequest=
t+"ParameterCollection.ShellProvisioner.initiateProvisioningRequest";n.registerLocalGalleryPackagesEndpoint=
t+"registerLocalGalleryPackagesEndpoint"})(i=n.RpcMethods||(n.RpcMethods={}))})(t=n.Constants||(n.Constants=
{}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var
i;(function(t){"use strict";function u(n){var t=r.Deferred();return i.requirejs([n],function(n){t.resolve(
n)},function(n){t.reject(n)}),t.promise()}var i=window,r=n.Helpers;t.load=u})(i=t.Amd||(t.Amd={}))})
(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){"use strict";var
i=window,r=n.Helpers,u=function(){function n(){}return n}(),f=function(){function t(n,t,i){this._fulfilledPromise=
r.Deferred().resolve().promise();this._hasNonExecutedData=!1;this._mergeFunc=n;this._executor=t;this.
_interval=i||0}return t.getMergeIntoArrayDataMerger=function(){return function(n,t){var i=function(n)
{return n===null||n===undefined},r=function(n){return i(n)?[]:Array.isArray(n)?n:[n]};return i(t)?r(
n):r(n).concat(t)}},t.getPostArrayExecutor=function(t){return function(i){if(Array.isArray(i)&&i.length)
return n.Base.Net.postJSON({uri:t},i)}},t.prototype.execute=function(n){var t=this._getPayload();t.data=
this._mergeFunc(t.data,n);this._hasNonExecutedData=!0;this._setExecutePayloadHandle()},t.prototype.flush=
function(){return this._hasNonExecutedData?this._executePayload(!1):this._fulfilledPromise},t.prototype.
_executePayload=function(n){var i=this,r,t;return this._hasNonExecutedData=!1,r=this._getPayload(),t=
this._executor(r.data),this._payload=null,t?n&&t.then(null,function(){var n=i._getPayload();n.data=i.
_hasNonExecutedData?i._mergeFunc(r.data,n.data):r.data;i._hasNonExecutedData=!0}):t=this._fulfilledPromise,
t},t.prototype._getPayload=function(){return this._payload||(this._payload=new u),this._payload},t.prototype.
_setExecutePayloadHandle=function(){var n=this;!this._executePayloadHandle&&this._hasNonExecutedData&&
(this._executePayloadHandle=i.setTimeout(function(){n._hasNonExecutedData&&n._executePayload(!0).finally(
function(){n._executePayloadHandle=null;n._setExecutePayloadHandle()})},this._interval))},t}();t.Debouncer=
f})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(
n){"use strict";function f(n,t,r,u,f){var e=new i;t.progress(function(t){f&&f(t,n,e.millisecondsElapsed)}
).then(function(t){r(t,n,e.millisecondsElapsed)},function(t){u&&u(t,n,e.millisecondsElapsed)})}var u=
window,t=u.performance,r,i;r=t&&t.now?function(){return t.now()}:function(){return(new Date).getTime(
)};i=function(){function n(){this._getTimestamp=r;this._startTimestamp=this._getTimestamp()}return Object.
defineProperty(n.prototype,"millisecondsElapsed",{get:function(){return this._getTimestamp()-this._startTimestamp}
,enumerable:!0,configurable:!0}),n.prototype.reset=function(){this._startTimestamp=this._getTimestamp(
)},n.timeOperation=function(t,i){var r=new n;return i(t),r.millisecondsElapsed},n}();n.TelemetryStopwatch=
i;n.timeAsyncOperation=f})(t=n.Stopwatch||(n.Stopwatch={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(t){var i;(function(i){"use strict";function l(n){return new i.Log(n.
normalize(undefined))}function s(){var n=Q.getUnhandledReasons();n&&n.length&&(Q.resetUnhandledRejections(
),n.forEach(function(n){typeof n=="string"&&n.indexOf("(no stack) ")>=0||u.error(n,1)}));e=r.setTimeout(
s,f)}function h(n){n===void 0&&(n=1e3);var i=f;return t.Utilities.isNullOrUndefined(n)||(f=n),r.clearTimeout(
e),e=0,s(),i}var o,a;(function(n){n[n.UnhandledPromise=1]="UnhandledPromise";n[n.WindowOnError=2]="WindowOnError";
n[n.LastError=3]="LastError"})(o||(o={}));var r=window,u=new n.Base.Diagnostics.Log("MsPortalFx.Base.Diagnostics.ErrorReporter"),
c=n.Base.Utilities.isDiagnosticsEnabled,f,e;c&&(Q.longStackSupport=!0,Error.stackTraceLimit=100);i.createLog=
l;i.setPromiseErrorCapturePeriod=h;h(),function(n){function f(n){i=r.onerror;r.onerror=e;t=n}function e(
r,f,e,o,s){var h={message:r,fileName:f,lineNumber:e,columnNumber:o};if(s?(u.error(s,2,h),(n.lastError||
null)!==(s||null)&&u.error(n.lastError,3,h)):u.error(n.lastError||"",3,h),n.lastError=null,t)try{t()}
catch(c){}return i?i.apply(this,arguments):!1}n.lastError;var t,i;n.initialize=f}(a=i.ErrorReporter||
(i.ErrorReporter={}))})(i=t.Diagnostics||(t.Diagnostics={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx=
{}));isNullOrUndefined=MsPortalFx.Base.Utilities.isNullOrUndefined,function(n){var t;(function(t){var
i;(function(t){var i;(function(t){"use strict";function a(t,r,u){var f,o,s,h;return r=r||!1,o=!0,Array.
isArray(u)?(o=!1,f=u):f=u?[u]:[],s=i.telemetryEventProcessors,h=f,f.length||(h=[n.Services.getTelemetryEventProcessor(
e.telemetryUri)]),i=new c(t,h),r&&i.traceBrowserInfo(),o?s[0]:s}function v(n){i.trace(n)}function y(
n){return i.startTrace(n)}function p(n){i.endTrace(n,r.Cancel)}function w(n,t){i.endTrace(n,r.Complete,
t)}function b(n,t,r){i.endTrace(n,t,r)}function k(n){i.resetTrace(n)}function d(){return i.flush()}function g(
n){i.telemetryEventProcessors.push(n)}function nt(n){i._journeyId=n}function u(n){var t=new Date;return{
timestamp:t,timeZone:t.getTimezoneOffset(),extension:n.extension||i.defaultExtensionName,source:n.source,
action:n.action,actionModifier:n.actionModifier,assetType:n.assetType,duration:n.duration,name:n.name,
journeyId:n.journeyId,data:JSON.stringify(n.data)}}var f=window,e=f.fx.environment,o=n.Base.Diagnostics,
s=n.Helpers,r;(function(n){n.Start="start";n.Complete="complete";n.Reset="reset";n.Cancel="cancel";n.
Mark="mark"})(r=t.ActionModifier||(t.ActionModifier={}));var h=function(){function t(t){this._evt=t;
this._stopWatch=new n.Base.Stopwatch.TelemetryStopwatch;this._evt.actionModifier=r.Start;this._reset(
)}return t.prototype.capture=function(n,t){var i=u(this._evt);i.actionModifier=n;i.duration=this._stopWatch.
millisecondsElapsed;t(i)},t.prototype.reset=function(n){this.capture(r.Reset,n);this._reset()},t.prototype.
_reset=function(){this._evt.duration=0;this._stopWatch.reset()},t}(),c=function(){function n(n,t){this.
_timedTelemetryEvents={};this._uniqueId=1;this.defaultExtensionName=n;this.telemetryEventProcessors=
t}return n.prototype.trace=function(n){n=u(n);n.actionModifier=n.actionModifier||r.Mark;this._trace(
n)},n.prototype.startTrace=function(n){n=u(n);var i=this._uniqueId++,t="telemetry_"+i;return this._timedTelemetryEvents[
t]=new h(n),this._trace(n),t},n.prototype.endTrace=function(n,t,i){this._traceEnd(n,t,i)},n.prototype.
resetTrace=function(n){var i=this,t=this._getTrace(n);t&&t.reset(function(n){i._trace(n)})},n.prototype.
traceBrowserInfo=function(){var n=this;this.telemetryEventProcessors.forEach(function(t){try{t.traceBrowserInfo(
)}catch(i){n._logError(i)}})},n.prototype.flush=function(){var t=this,n=[];return this.telemetryEventProcessors.
forEach(function(i){try{n.push(i.flush())}catch(r){t._logError(r)}}),Q.all(n)},n.prototype._logError=
function(n){o.Log.writeEntry(2,"telemetry","Error: {0}".format(n))},n.prototype._traceEnd=function(n,
t,i){var u=this,r=this._getTrace(n);r&&(r.capture(t,function(n){isNullOrUndefined(i)||(n.data=i);u._trace(
n)}),delete this._timedTelemetryEvents[n])},n.prototype._getTrace=function(n){return this._timedTelemetryEvents[
n]},n.prototype._trace=function(n){var t=this;n.journeyId=n.journeyId||this._journeyId;this.telemetryEventProcessors.
forEach(function(i){try{i.trace(n)}catch(r){t._logError(r)}})},n}(),l=function(){function n(){this._preResolvedPromise=
s.Deferred().resolve().promise();this.telemetryEventProcessors=[];this._journeyId=""}return n.prototype.
trace=function(){},n.prototype.startTrace=function(){return""},n.prototype.endTrace=function(){},n.prototype.
resetTrace=function(){},n.prototype.traceBrowserInfo=function(){},n.prototype.flush=function(){return this.
_preResolvedPromise},n}(),i=new l;t.initialize=a;t.trace=v;t.startTrace=y;t.cancelTrace=p;t.completeTrace=
w;t.endTrace=b;t.resetTrace=k;t.flush=d;t.addProcessor=g;t.setJourneyId=nt})(i=t.Telemetry||(t.Telemetry=
{}))})(i=t.Diagnostics||(t.Diagnostics={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){var t;(function(t){var i;(function(t){"use strict";function i(n,i,r){var f,e,u,
o;return i===void 0&&(i=t.messageContext),f="From RPC:",e=i&&i.callStack,e&&(u=[],n&&u.push(n),n.indexOf(
f)===-1&&(o=[f,i.srcWindowId+" -> "+i.destWindowId],r&&o.push("("+r+")"),u.push(o.join(" "),e),n=u.join(
"\r\n"))),n}function r(n){n&&typeof n.stack=="string"&&(n.stack=i(n.stack))}function u(t){return i(n.
Utilities.getCurrentCallStack(t))}t.messageContext;t.createCallStack=i;t.addRpcStack=r;t.getCurrentCallStack=
u;n.Utilities.isDiagnosticsEnabled&&Q&&Q.defer&&function(){function t(){var t=n.apply(this,arguments),
i=t.promise;return r(i),t}var n=Q.defer;Q.defer=t}()})(i=t.Internal||(t.Internal={}))})(t=n.Rpc||(n.
Rpc={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.__extends||function(n,
t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;
n.prototype=new r},function(n){var t;(function(t){var i;(function(i){"use strict";function b(){return[
]}function v(n){var i=o.getMetadataContainer(n),t;return i&&(t=i.client,t||(t=i.client={})),t}function k(
n,t,i){var r=v(n),u=arguments.length>2;if(r)return u?r[t]=i:r[t]}function d(n){var i=o.getMetadataContainer(
n);i&&(i.isNonSerializableCallStack=r&&t.Utilities.getCurrentCallStack()||"(Unknown callstack)")}var
u=n.Base.Rpc.Internal,y=n.Base.Stopwatch.TelemetryStopwatch,s=n.Base.Diagnostics.Telemetry,e=window,
p=new n.Base.Diagnostics.Log("MsPortalFx/Base/Base.ProxiedObservables"),w=n.Helpers,r=e.fx.environment.
isDevelopmentMode||e.fx.environment.trace.diagnostics,h=t.Utilities,c=0,f=h.generateNonSerializableProperty,
l=f("PO_Metadata"),a=Object.prototype.hasOwnProperty,o;i._dumpOutstandingObjects=b;i.dataContainer=v;
i.data=k;i.markNonSerializable=d,function(i){function tt(n){var t=n;return t.splice||t.map?1:0}function o(
n,t){t===void 0&&(t=!1);var r=typeof n,i;return(r==="object"||r==="function")&&(i=ot.get(n),i!==undefined||
t||(i={tracking:{},releaseCallstack:{}},ot.set(n,i))),i}function si(n){var t=i.getMetadataContainer(
n);t&&(t.disallowRemoteMutations=!0)}function dt(n,t){return(n&t)===t}function k(n){return n}function ii(
){throw new Error("Attempted to access skipped property.");}function g(n){return typeof n.then=="undefined"&&
typeof n.reject=="function"}function ri(n,t){o(n);Object.isExtensible(n)&&t===1&&Object.preventExtensions(
n)}function ct(n){var t=n.inspect();switch(t.state){case"fulfilled":return{state:1,args:[t.value]};case"rejected":
return{state:2,args:[t.reason]};default:return{state:0,args:[]}}}function hi(n){return ct(n.promise)}
function ci(n){switch(n.state()){case"resolved":return 1;case"rejected":return 2;default:return 0}}function lt(
n){var i=o(n),r;return t.Utilities.isNullOrUndefined(i.promiseValue)&&(i.promiseValue=[],r=function(
){i.promiseValue=Array.prototype.slice.call(arguments)},n.then(r,r)),{state:ci(n),args:i.promiseValue}}
function at(n,t,i,r){var e=o(n),u=t(n),f=i.getOrCreateOwnedObjectsList(u.args);return{state:u.state,
args:f.map(function(n){return r.dispatch(n)})}}function ui(n,t,i){return at(n,lt,t,i)}function ut(n,
t){var i=$.Deferred(),r=n.args.map(function(n){return t.dispatch(n,!0)});switch(n.state){case 1:i.resolveWith(
v.ThisContext,r);break;case 2:i.rejectWith(v.ThisContext,r)}return i}function li(n,t,i,r){return t&&
i&&!et.isUndefinedEquivalent(t)?t[i]===r?!0:n.isTracked(t)||Object.keys(t).every(function(n){return t[
n]!==r})?!1:!0:!0}var bt=function(){function n(n){this._propertyName=n}return n.create=function(t){return!e.
WeakMap||r?new n(t):new WeakMap},n.prototype.get=function(n){if(a.call(n,this._propertyName))return n[
this._propertyName]},n.prototype.set=function(n,t){Object.defineProperty(n,this._propertyName,{configurable:
!0,value:t})},n}(),nt,ot,d,st,kt,rt,ni,ht,ti,ft,vt,yt,pt;i.assert=function(n,t,i,r,f){if(r===void 0&&
(r=null),!t){var e=f||u.getCurrentCallStack(!0),o=r?r.id():undefined,h=ko.utils.unwrapObservable(r&&
r.getObject()),s=r?typeof r.getObject():undefined;e&&(i+="\nThe error occured in:\n"+e);o&&(i+="\nThe associated metadata id is: "+
o);s&&(i+="\nThe typeof the value of the metadata is: "+s);p.error(i,1)}};i.getObservableKind=tt;nt=
function(){function n(){this._ownerData={}}return n._getMetadata=function(t,i){var u=o(t),r=u.ownerMetadataIfArray;
return!r&&i&&(r=u.ownerMetadataIfArray=new n),r},n.prototype.getOwners=function(){return Object.keys(
this._ownerData)},n.prototype.getCallStack=function(n){var t=this._ownerData[n];return t&&t.callstack}
,n.prototype.getIsRateLimit=function(n){var t=this._ownerData[n];return t&&t.container&&t.container.
rateLimitedIfObservable},n.setArrayOwnership=function(t,i,u){var f,e;r&&(f=u.peek(),i!==f&&(Array.isArray(
f)&&(e=n._getMetadata(f,!0),e._ownerData[t]||(e._ownerData[t]={callstack:h.getCurrentCallStack(),container:
o(u)})),n.clearOwnership(t,i)))},n.clearOwnership=function(t,i){if(r&&Array.isArray(i)){var u=n._getMetadata(
i,!1);u&&delete u._ownerData[t]}},n}();i.ArrayOwnerMetadata=nt;ot=bt.create(l);i.getMetadataContainer=
o;i.disallowRemoteMutations=si;d=function(){function n(n,t,i){this._refsObject=0;this._refsManager=1;
this._isPrincipal=!0;var r=n.getMetadataPropertyName(),u=o(t).tracking,f=u[r];if(!t)throw new Error(
"obj cannot be null.");f&&(f._isPrincipal=!1);u[r]=this;this._obj=t;this._id=i;this._metadataContext=
n}return n.prototype.getMetadataContext=function(){return this._metadataContext},n.prototype.getOrCreateOwnedObjectsList=
function(n){return n===void 0&&(n=[]),this._ownedObjects||(this._ownedObjects=n.slice(0)),this._ownedObjects}
,n.prototype.isPrincipal=function(){return this._isPrincipal},n.prototype.id=function(){return this.
_id},n.prototype.getObject=function(){return this._obj},n.prototype.refsObject=function(){return this.
_refsObject},n.prototype.addRefForManager=function(){i.assert(1,!!this._metadataContext,"Obj is already released",
this);this._refsManager++},n.prototype.addRefForObject=function(){return i.assert(1,!!this._metadataContext,
"Obj is already released",this),this._refsObject++,this._refsObject},n.prototype.releaseForManager=function(
){i.assert(1,this._refsManager>=1,"Faulty ref counting.",this);this._refsManager--;var n=this._refsManager===
0;return this._disposeIfZeroRefs(),n},n.prototype.releaseForObject=function(n){i.assert(1,this._refsObject>=
1,"Faulty ref counting.",this);this._refsObject--;var t=this._refsObject===0;return this._disposeIfZeroRefs(
n),t},n.prototype.dispose=function(){this._disposeIfZeroRefs(null,!0)},n.prototype._disposeIfZeroRefs=
function(n,t){if(t===void 0&&(t=!1),this._refsObject===0||t){var i=this._metadataContext.getMetadataPropertyName(
),r=o(this._obj);n&&(r.releaseCallstack[i]=n);(this._refsManager===0||t)&&(this._dispose(),this._isPrincipal&&
delete r.tracking[i])}},n.prototype._dispose=function(){},n.getMetadata=function(n,t){var i=o(t);return i&&
i.tracking&&i.tracking[n]},n.getReleaseCallstack=function(n,t){var i=o(t);return i&&i.releaseCallstack&&
i.releaseCallstack[n]},n}();i.TrackingMetadataBase=d;st=function(t){function i(n,r,u){t.call(this,n,
r,u);var f=i.getTrackedPropertyKeysAndFreeze(r);this._trackedProperties=f.trackedKeys.map(function(n)
{return r[n]})}return __extends(i,t),i.isIgnoredProperty=function(n,t,i){var r="_msPortalFx",u=t.charAt(
0)==="_"&&t.substring(0,r.length)!==r;return u||i.get||i.set},i.getFreezeLevel=function(t,i,r){var u=
typeof r;return u==="boolean"||u==="number"||u==="string"?i==="popupAlignment"||i==="inputAlignment"||
i==="displayName"?0:2:n.Util.isNullOrUndefined(r)||u==="object"||ko.isObservable(r)?2:u==="function"&&
Object.keys(r).length===0?1:2},i.getTrackedPropertyKeysAndFreeze=function(n){var t=o(n);if(!t.trackedObjectKeys)
{t.trackedObjectKeys={ignoredKeys:[],trackedKeys:[]};var u=n instanceof Error,f=u?Object.getOwnPropertyNames(
n):Object.keys(n),e=t.trackedObjectKeys;u&&f.remove(l);f.forEach(function(t){var f=Object.getOwnPropertyDescriptor(
n,t),o;if(!u&&i.isIgnoredProperty(n,t,f))e.ignoredKeys.push(t);else if(e.trackedKeys.push(t),r&&f.configurable&&
!f.get&&!f.set&&(o=i.getFreezeLevel(n,t,f.value),o!==0)){switch(o){case 1:f.configurable=!1;break;case
2:f.configurable=!1;f.writable=!1}Object.defineProperty(n,t,f)}})}return t.trackedObjectKeys},i.prototype.
getTrackedProperties=function(){return this._trackedProperties},i.prototype._getConstructor=function(
){return this._proxyObjectConstructor||(this._proxyObjectConstructor=function(n){var t=this;Object.keys(
n).forEach(function(i){try{typeof t[i]=="undefined"&&(t[i]=n[i])}catch(r){}a.call(t,i)||Object.defineProperty(
t,i,{configurable:!0,enumerable:!0,writable:!0,value:n[i]})})},this._proxyObjectConstructor.prototype=
this.getObject()),this._proxyObjectConstructor},i.prototype.instantiate=function(n){var t=this._getConstructor(
);return new t(n)},i}(d);kt=function(n){function t(t,i,r){n.call(this,t,i,r);this.refreshTrackedItems(
)}return __extends(t,n),t.prototype.getTrackedItems=function(){return this._trackedItems},t.prototype.
refreshTrackedItems=function(){this._trackedItems=this.getObject().slice(0)},t}(d);var it=function(n)
{function t(t,i,r,u){n.call(this,t,i,r);this._metadataFlags=u}return __extends(t,n),t.prototype.getFlags=
function(){return this._metadataFlags},t.prototype.allowRemoteMutations=function(){return dt(this._metadataFlags,
1)&&!o(this.getObject()).disallowRemoteMutations},t}(d),v=function(n){function t(t,i,r,u){n.call(this,
t,i,r,u);this._deferred=i.reject?i:o(i).ownerIfPromise;this._setupPromiseEventsListener();this._isSelfInflicted=
0}return __extends(t,n),t.onPromiseValueChanged=function(n,t,i){var r=g(n)?n.promise:n;Q.isPromise(r)||
lt(r);r.progress(function(){i(Array.prototype.slice.call(arguments))}).finally(function(){Q.isPromise(
r)?t(ct(r)):t(lt(r))})},t.prototype._dispatchBufferedPromiseState=function(){this._bufferedPromiseStateArgs&&
this.refsObject()>0&&(this.getMetadataContext().raisePromiseEvent(this.id(),this._bufferedPromiseStateEventKind,
this._bufferedPromiseStateArgs),this._bufferedPromiseStateArgs=null)},t.prototype._fireEvent=function(
n,t){this._isSelfInflicted!==undefined&&(this._isSelfInflicted===0&&(n===0||n===1?(this._bufferedPromiseStateArgs=
t,this._bufferedPromiseStateEventKind=n,this._dispatchBufferedPromiseState()):this.getMetadataContext(
).raisePromiseEvent(this.id(),n,t)),this._isSelfInflicted>0&&this._isSelfInflicted--)},t.prototype._setupPromiseEventsListener=
function(){var n=this;t.onPromiseValueChanged(this.getObject(),function(t){switch(t.state){case 1:n.
_fireEvent(0,t.args);break;case 2:n._fireEvent(1,t.args)}},function(t){n._fireEvent(2,t)})},t.prototype.
applyEvent=function(n,r){if(this._deferred)if(this.allowRemoteMutations()){var u=g(this._deferred);i.
assert(0,!u||r.length<=1,"A Q deferred is being resolved/rejected/notified with multiple args. Only the first arg will be used.",
this);this._isSelfInflicted++;switch(n){case 0:g(this._deferred)?this._deferred.resolve(r[0]):this._deferred.
resolveWith(t.ThisContext,r);break;case 1:g(this._deferred)?this._deferred.reject(r[0]):this._deferred.
rejectWith(t.ThisContext,r);break;case 2:g(this._deferred)?this._deferred.notify(r[0]):this._deferred.
notifyWith(t.ThisContext,r);break;default:this.getMetadataContext().raiseRemoteExceptionEvent("Unknown event kind.")}
}else this.getMetadataContext().raiseRemoteExceptionEvent("The promise with id '{0}' does not allow remote mutation.".
format(this.id()));else this.getMetadataContext().raiseRemoteExceptionEvent("This promise with id '{0}' cannot be resolved.".
format(this.id()))},t.prototype.addRefForObject=function(){var t=n.prototype.addRefForObject.call(this);
return this._dispatchBufferedPromiseState(),t},t.prototype._dispose=function(){this._deferred=null;n.
prototype._dispose.call(this)},t.ThisContext="The this context of a promise is not proxied over.",t}
(it),gt=function(n){function t(t,i,r,u){n.call(this,t,i,r,u)}return __extends(t,n),t.prototype.proxyInvoke=
function(n,t){return this.getMetadataContext().raiseFunctionInvocationEvent(this.id(),n,t)},t.prototype.
invoke=function(n,t){return this.getObject().apply(n,t)},t}(it),b;(function(n){function o(n,t){return n.
subscribe(t,null,r)}function s(n,t){return n.subscribe(t,null,u)}function f(n){return n._changeNumber||
0}function i(n,t){var i=n._scheduledPostChangeHandler;n._scheduledPostChangeHandler=t;i&&i()}var r="_ibizaInternalPoPreChange",
u="_ibizaInternalPoPostChange",t,e;n.addPreListener=o;n.addPostListener=s;n.getChangeNumber=f;t=ko.subscribable.
fn.notifySubscribers;e=function(n,e){var s=this,o;if(e&&e!=="change")e==="beforeChange"?(i(this),t.call(
this,n,r),o=t.apply(this,arguments)):o=t.apply(this,arguments);else{this._changeNumber=f(this)+1;i(this,
function(){t.call(s,n,u)});try{o=t.apply(this,arguments)}finally{i(this)}}return o};ko.subscribable.
fn.notifySubscribers=e})(b||(b={})),function(n){function a(n,t,i){r&&(t.push(b.addPostListener(i,function(
){f===n&&(f=null);l(n)})),tt(i)===1&&t.push(b.addPreListener(i,function(){Array.isArray(i.peek())&&(
f=n)})))}function l(n){u&&delete u[n]}var s,h;if(r){s=ko.subscribable.fn.limit;h=function(){var n=o(
this);return n.rateLimitedIfObservable=!0,s.apply(this,arguments)};ko.subscribable.fn.limit=h;var u=
{},f,e=!1,c=Array.prototype;["pop","push","reverse","shift","splice","unshift"].forEach(function(n){
var r=c[n];c[n]=function(){var f=o(this,!0),s,c,n,h,l;return f&&(s=f.tracking,c=!Object.keys(s).every(
function(n){return s[n].refsObject()===0}),c&&(n=f.ownerMetadataIfArray,h=n&&n.getOwners(),n&&h.length!==
0?(l=t.Utilities.getCurrentCallStack(),h.forEach(function(t){u[t]={mutationStack:l,ownerMetadata:n}}
),e||(Q.nextTick(function(){Object.keys(u).forEach(function(n){var t=u[n];t.ownerMetadata.getIsRateLimit(
n)||i.assert(0,!1,"An array has been modified but an observable that contains the array did not receive a valueHasMutate call. The array was acquired by the observable in:\n{0}".
format(t.ownerMetadata.getCallStack(n)),null,t.mutationStack)});u={};e=!1}),e=!0)):i.assert(0,!1,"A proxied array that is not owned by any proxied observable has been modified. These array changes will not be replayed.",
null))),r.apply(this,arguments)}})}n.trackObservable=a;n.clearEntry=l}(rt||(rt={}));ni=function(n){function r(
t,i,r,u){var f=this,e;n.call(this,t,i,r,u);this._subscriptions=[];this._changeNumber=0;this._handledChangeNumber=
0;e=i.peek();this._currentValue=e;nt.setArrayOwnership(r,null,i);this._handledChangeNumber=b.getChangeNumber(
i);rt.trackObservable(r,this._subscriptions,i);this._subscriptions.push(b.addPostListener(i,function(
){f._handleChange(f.getObject().peek())}))}return __extends(r,n),r.prototype._handleChange=function(
n){var c,l;if(!(this.refsObject()<=0)){var o=this.id(),u=this.getObject(),e=b.getChangeNumber(u),t=this.
_currentValue,s=Array.isArray(t),f=!1,a=tt(u)===1,v=ko.isComputed(u),y=this._changeNumber;if(this._selfInflictedChangeNumber!==
undefined||this._handledChangeNumber!==e){if(this._handledChangeNumber=e,nt.setArrayOwnership(o,t,u),
v?this._selfInflictedChangeNumber===undefined||this._desiredValue!==n||Array.isArray(this._desiredValue)||
s||Array.isArray(n)||(f=!0):e===this._selfInflictedChangeNumber?f=!0:a&&this._selfInflictedChangeNumber!==
undefined&&i.assert(0,!1,"Proxied Observables does not support operations where a subscriber to an observable array modifies the array.",
this),this._selfInflictedChangeNumber=undefined,this._desiredValue=undefined,f||this._changeNumber++,
this._currentValue=n,s&&t===n){var h=this.getMetadataContext().getMetadata(t),p=h.getTrackedItems(),
r=ko.utils.compareArrays(p,n).filter(function(n){return n.status!=="retained"});h.refreshTrackedItems(
);ko.utils.fixupArrayEdits(r)}this._isLastChangeZeroSizedArrayEdit=!r||!r.length;this._isLastChangeZeroSizedArrayEdit&&
(r=null,c=t,l=n);this.getMetadataContext().raiseChangeEvent(o,!f,y,r,c,l)}}},r.prototype.getCurrentValue=
function(){return this._currentValue},r.prototype.applyChanges=function(n,t,i){this._validateAndIncrementChangeNumber(
n,t,i);this.allowRemoteMutations()?t?this._setArrayValue(t):this._setValue(i):this.getMetadataContext(
).raiseRemoteExceptionEvent("The observable with id '{0}' does not allow remote mutation.".format(this.
id()))},r.prototype._validateAndIncrementChangeNumber=function(n,t,r){var f,e,o;this._changeNumber!==
n&&(f=t?t.length!==0||!this._isLastChangeZeroSizedArrayEdit:this.getObject().peek()!==r,f&&(oi.disableEncodingOptimization(
this.getMetadataContext().getMetadata(r)),e="Proxied Observables detected a simultaneous change to both the original and the proxied observable. When this happens, the original and the proxied observables will go out of sync.\n",
o=u.messageContext&&u.messageContext.callStack,i.assert(0,!1,e,this,o)));this._changeNumber++},r.prototype.
_ensureHandledChangeCalled=function(){this._selfInflictedChangeNumber!==undefined&&(this._selfInflictedChangeNumber--,
this._handleChange(this._desiredValue))},r.prototype._setValue=function(n){this._selfInflictedChangeNumber=
b.getChangeNumber(this.getObject())+1;this._desiredValue=n;try{this.getObject()(n);this._ensureHandledChangeCalled(
)}finally{this._selfInflictedChangeNumber=undefined;this._desiredValue=undefined}},r.prototype._setArrayValue=
function(n){var r;this._selfInflictedChangeNumber=b.getChangeNumber(this.getObject());var u=this.getObject(
),i=u.peek(),e=this.getMetadataContext().getMetadata(i),f=e.getTrackedItems();if(!t.Utilities.arrayEquals(
f,i))for(i.length=0,r=0;r<f.length;r++)i.push(f[r]);this._desiredValue=i;try{u.valueWillMutate();this.
_selfInflictedChangeNumber=b.getChangeNumber(this.getObject())+1;n.forEach(function(n){switch(n.status)
{case"added":i.splice(n.index,0,n.value);break;case"deleted":i.splice(n.index,1)[0]}});u.valueHasMutated(
);this._ensureHandledChangeCalled()}finally{this._selfInflictedChangeNumber=undefined}},r.prototype.
_dispose=function(){nt.clearOwnership(this.id(),this._currentValue);rt.clearEntry(this.id());this._subscriptions&&
(this._subscriptions.forEach(function(n){return n.dispose()}),this._subscriptions=null);n.prototype.
_dispose.call(this)},r}(it);ht=function(){function n(){this._map={};this._count=0}return n.prototype.
getValue=function(n){return this._map[n]},n.prototype.setValue=function(n,t){if(this._map.hasOwnProperty(
n))throw new Error("The key '{0}' already exists.".format(n));else this._count++;this._map[n]=t},n.prototype.
removeValue=function(n){this._map.hasOwnProperty(n)&&(this._count--,delete this._map[n])},Object.defineProperty(
n.prototype,"count",{get:function(){return this._count},enumerable:!0,configurable:!0}),Object.defineProperty(
n.prototype,"keys",{get:function(){return Object.keys(this._map)},enumerable:!0,configurable:!0}),Object.
defineProperty(n.prototype,"values",{get:function(){return t.Utilities.map(this._map,function(n){return n}
)},enumerable:!0,configurable:!0}),n}();i.Dictionary=ht;ti=function(){function u(n,i,r,u,f){this._pendingReleases=
{};this._liveMetadata={};this._allMetadata=new ht;this._freedObjectCallStacks=new t.LruMap(200);this.
raiseRemoteExceptionEvent=i;this.raiseChangeEvent=r;this.raisePromiseEvent=u;this.raiseFunctionInvocationEvent=
f;c++;this._metadataPropertyName=n+"_"+c}return u.prototype.getMetadataById=function(n,t){var u=this.
_liveMetadata[n],r;return u||typeof t!="string"||(r=this._freedObjectCallStacks.get(n),r&&(t+="\nThe object was freed in:\n{0}".
format(r)),i.assert(0,!1,t)),u},u.prototype.getMetadataPropertyName=function(){return this._metadataPropertyName}
,u.prototype.getMetadata=function(n,t,r){var u=n&&d.getMetadata(this._metadataPropertyName,n),f,e;return t&&
u&&!this.getMetadataById(u.id())&&(u=null),u||typeof r!="string"||(f=d.getReleaseCallstack(this._metadataPropertyName,
n),e=t?0:1,f&&(r+="\nThe object was freed in:\n{0}".format(f)),i.assert(e,!1,r,u)),u},u.prototype.getAllMetadata=
function(){return this._allMetadata.values},u.prototype.getOrResurrectMetadataWithId=function(n){var
t=this._liveMetadata[n];return t||(t=this._allMetadata.getValue(n),t&&(i.assert(0,t.isPrincipal(),"A non-principal metadata has been resurrected. This may cause unexpected behavior.",
t),this._liveMetadata[n]=t,t.addRefForManager())),t},u.prototype.createReleaseSetId=function(){var t=
n.Util.newGuid();return this._pendingReleases[t]=[],t},u.prototype.isTracked=function(n){return!!this.
getMetadata(n,!0)},u.prototype.applyAddRef=function(n){var t=this.getOrResurrectMetadataWithId(n);if(
t)return t.addRefForObject(),t;throw new Error("Unable to find the metadata with the id '{0}'.".format(
n));},u.prototype._applyReleaseManager=function(n){n.releaseForManager()&&this._allMetadata.removeValue(
n.id())},u.prototype.releaseInitiate=function(n,t){var u=this._liveMetadata[t],f=n.releaseSetId,e=n.
callstack;u?u.releaseForObject(e)&&(r&&u instanceof gt&&this._freedObjectCallStacks.addOrUpdate(u.id(
),e),f?this._pendingReleases[f].push(u):this._applyReleaseManager(u),delete this._liveMetadata[t]):i.
assert(1,!1,"The object with id '{0}' has already been freed.".format(t))},u.prototype.releaseFinalize=
function(n){var r=this,t=this._pendingReleases[n];t?(t.forEach(function(n){r._applyReleaseManager(n)}
),delete this._pendingReleases[n]):i.assert(1,!1,"Unable to find id for finalize release.")},u.prototype.
getAllMetadataCount=function(){return this._allMetadata.count},u.prototype.createMetadata=function(n,
t,i,r){var u=new r(this,t,n,i);return this._liveMetadata[n]=u,this._allMetadata.setValue(n,u),u},u.prototype.
dispose=function(){this._liveMetadata=null;this._pendingReleases=null;this._allMetadata.values.forEach(
function(n){n.dispose()});this._allMetadata=null},u}();ft=[k({kind:0,canEncode:function(n){return ko.
isObservable(n)},metadataConstructor:ni,encode:function(n,t,r){var f=tt(n)===1,u=t.getCurrentValue();
return f&&i.assert(0,Array.isArray(u)||u===null||u===undefined,"Attempting to serialize an observable array whose value is not an array, null, or undefined."),
{isArray:f,value:r.dispatch(u)}},decode:function(n,t){var i=n.isArray?ko.observableArray():ko.observable(
);return i(t.dispatch(n.value)),i}}),k({kind:11,canEncode:function(n){return g(n)},metadataConstructor:
v,encode:function(n,t,i){return at(n,hi,t,i)},decode:ut}),k({kind:10,canEncode:function(n){return Q.
isPromise(n)},metadataConstructor:v,encode:function(n,t,i){return at(n,ct,t,i)},decode:function(n,t)
{var i=ut(n,t),r=i.promise();return o(r).ownerIfPromise=i,r}}),k({kind:9,canEncode:function(n){return Q.
isPromiseAlike(n)&&typeof n.reject=="function"},metadataConstructor:v,encode:ui,decode:ut}),k({kind:
8,canEncode:function(n){return Q.isPromiseAlike(n)},metadataConstructor:v,encode:ui,decode:function(
n,t){var i=ut(n,t),r=i.promise();return o(r).ownerIfPromise=i,r}}),k({kind:12,canEncode:function(n){
return typeof n=="function"},metadataConstructor:gt,encode:function(n,t,i){return i.getLastPathSegment(
)},decode:function(n,t){var u=t.getMetadataManager(),r=function(){var f=Array.prototype.slice.call(arguments),
t=u.getMetadata(r,!0,"Cannot invoke proxied function because the function has been freed.");if(t){if(
li(u,this,n,r))return t.proxyInvoke(this,f);i.assert(0,!1,"Cannot invoke proxied function because the '{0}' member of the this context is not the proxied function.".
format(n),t)}};return r}}),k({kind:2,canEncode:function(n){return Array.isArray(n)},metadataConstructor:
kt,encode:function(n,t,i){return t.getTrackedItems().map(function(n,t){return i.dispatch(n,t+"")})},
decode:function(n,t){return t.dispatch(n)}}),k({kind:3,canEncode:function(n){return typeof n=="object"&&
!Array.isArray(n)},metadataConstructor:st,encode:function(n,t,i){var r=Object.getPrototypeOf(n),u=!!r,
o=u&&r!==Object.prototype?i.dispatch(r):null,f={},s=t.getTrackedProperties(),e=st.getTrackedPropertyKeysAndFreeze(
n);return ri(n,i.getFreezeLevel()),e.trackedKeys.forEach(function(n,t){f[n]=i.dispatch(s[t],n)}),{hasPrototype:
u,prototype:o,object:f,ignoredProperties:e.ignoredKeys}},decode:function(n,t){var u=t.dispatch(n.object),
i,f,e;return n.prototype?(f=t.dispatch(n.prototype),e=t.getMetadataManager().getMetadata(f),i=e.instantiate(
u)):n.hasPrototype?i=u:(i=Object.create(null),Object.keys(u).forEach(function(n){i[n]=u[n]})),n.ignoredProperties&&
r&&n.ignoredProperties.forEach(function(n){Object.defineProperty(i,n,{get:ii,set:ii,configurable:!0})}
),ri(i,t.getFreezeLevel()),i}})];vt=f("isPoScalar");[Date,ArrayBuffer,RegExp,window.Blob].forEach(function(
n){n&&Object.defineProperty(n.prototype,vt,{configurable:!0,value:!0})});yt=f("isPoUnsupported");[window.
ImageData].forEach(function(n){n&&Object.defineProperty(n.prototype,yt,{configurable:!0,value:!0})});
pt=f("isPoUndefined");[jQuery,jQuery.Event].forEach(function(n){Object.defineProperty(n.prototype,pt,
{configurable:!0,value:!0})});var et=function(){function n(){}return n.isUndefinedEquivalent=function(
n){return n[pt]},n.prototype.dispatch=function(t){var r=typeof t,i;if(!t||r==="string"||r==="boolean"||
r==="number"||t[vt])return t;if(t[yt])throw new Error("Encountered a unsupported object type {0}.".format(
t));else{if(n.isUndefinedEquivalent(t))return undefined;if(i=o(t),i.visitorIsAlongPath)throw new Error(
"There is a cycle.");i.visitorIsAlongPath=!0;try{return t.encodedAtomReference!==undefined?this._visitEncodedAtomReference(
t):this._visitNonScalar(t)}finally{i.visitorIsAlongPath=!1}}},n.prototype._visitNonScalar=function()
{throw new Error("Pure virtual function called.");},n.prototype._visitEncodedAtomReference=function(
){throw new Error("Pure virtual function called.");},n}(),fi=function(n){function t(t){n.call(this);
this._freezeLevel=t}return __extends(t,n),t.prototype.dispatch=function(t){try{var i=this._freezeLevel;
return n.prototype.dispatch.call(this,t)}finally{this._freezeLevel=i}},t.prototype.setFreezeLevel=function(
n){this._freezeLevel=n},t.prototype.getFreezeLevel=function(){return this._freezeLevel},t}(et),wt=function(
n){function t(t,i,r){n.call(this,i);this._pathSegments=[];this._metadataManager=t;this._desiredMetadataFlags=
r}return __extends(t,n),t.prototype.getMetadataManager=function(){return this._metadataManager},t.prototype.
getDesiredMetadataFlags=function(){return this._desiredMetadataFlags},t.prototype.getLastPathSegment=
function(){return this._pathSegments.length>0?this._pathSegments.last():null},t.prototype._getPath=function(
){return this._pathSegments.join(".")},t.prototype.dispatch=function(t,i){i&&this._pathSegments.push(
i);try{return n.prototype.dispatch.call(this,t)}finally{i&&this._pathSegments.pop()}},t.prototype._visitNonScalar=
function(n){var h,u,c,e,s,i,f,l,a;if(r&&(h=o(n),h.isNonSerializableCallStack)){u="Attempted to serialize an object that was marked non-serializable.";
c=this._getPath();c&&(u+="\r\nThe path to the property is: "+c);n.constructor&&n.constructor.name&&(
u+="\r\nThe constructor name is: "+n.constructor.name);u+="\r\nThe call stack of where the object was marked is:\r\n"+
h.isNonSerializableCallStack;throw new Error(u);}for(e=this._metadataManager,s=0;s<ft.length;s++)if(
i=ft[s],i.canEncode(n))return i.kind!==2&&i.kind!==3&&this.setFreezeLevel(1),f=e.getMetadata(n,!0),f||
(l=[e.getMetadataPropertyName(),t.metadataIdCounter++,this._getPath()].join("-"),f=e.createMetadata(
l,n,this._desiredMetadataFlags,i.metadataConstructor)),a=!i.encode?undefined:i.encode(n,f,this),{id:
f.id(),kind:i.kind,data:a};throw new Error("Unexpected.");},t.metadataIdCounter=0,t}(fi),ai=function(
n){function t(t,i){n.call(this,t,0,i)}return __extends(t,n),t.prototype.visit=function(n){this.dispatch(
n)},t.prototype._visitNonScalar=function(t){var r=this.getMetadataManager(),i=r.getMetadata(t,!1,"Metadata missing for NonEncodedAddTrackingVisitor.");
i&&(r.applyAddRef(i.id()),i.refsObject()===1&&n.prototype._visitNonScalar.call(this,t))},t}(wt),ei=function(
n){function t(t){n.call(this);this._metadataManager=t;this._helperVisitor=new ai(t,0)}return __extends(
t,n),t.prototype.visit=function(n){try{this._atoms=n.atoms;this.dispatch(n.root)}finally{this._atoms=
null}},t.prototype._visitNonScalar=function(n){if(typeof n=="object"||Array.isArray(n))for(var t in n)
n.hasOwnProperty(t)&&this.dispatch(n[t])},t.prototype._visitEncodedAtomReference=function(n){var t=n.
encodedAtomReference,i=this._atoms[t],r=this._metadataManager.getOrResurrectMetadataWithId(t);return i?
(this._metadataManager.applyAddRef(t),r.refsObject()===1&&this.dispatch(i.data)):this._helperVisitor.
visit(r.getObject()),n},t}(et),vi=function(n){function t(t,i){n.call(this,t,0,0);this._releaseInitiateContext=
i}return __extends(t,n),t.prototype.visit=function(n){var t=this.getMetadataManager().getMetadata(n);
return this.dispatch(n),t?t.id():null},t.prototype._visitNonScalar=function(t){var r=this.getMetadataManager(
),i=r.getMetadata(t,!1,"Metadata missing for ReleaseTrackingVisitor.");i&&(i.refsObject()===1&&n.prototype.
_visitNonScalar.call(this,t),r.releaseInitiate(this._releaseInitiateContext,i.id()))},t}(wt),oi=function(
n){function t(t,i,u){n.call(this,t,i,u);this._performAllowRemoteChangesVerification=r&&!dt(this.getDesiredMetadataFlags(
),1)}return __extends(t,n),t.disableEncodingOptimization=function(n){n&&t.encodingOptimizationDisabled.
set(n,n)},t.prototype.visit=function(n){try{this._atoms={};this._visitedAtoms={};return{root:this.dispatch(
n),atoms:this._atoms}}finally{this._atoms=null;this._visitedAtoms=null}},t.prototype._visitNonScalar=
function(i){var e=this.getMetadataManager(),r=e.getMetadata(i,!0),f,u,o;if(r||(f=n.prototype._visitNonScalar.
call(this,i),r=e.getMetadata(i)),u=r.id(),o={encodedAtomReference:u},!this._visitedAtoms.hasOwnProperty(
u)&&(this._visitedAtoms[u]=void 0,r.refsObject()===0||t.encodingOptimizationDisabled.get(r)?this._atoms[
u]=f||n.prototype._visitNonScalar.call(this,i):!f&&this._performAllowRemoteChangesVerification&&n.prototype.
_visitNonScalar.call(this,i),this._performAllowRemoteChangesVerification&&r instanceof it&&r.allowRemoteMutations(
)))throw new Error("Cannot create proxy of object graph because the object graph has already been proxied to allow remote changes but the desired ACLs on the endpoint does not allow remote changes.");
return o},t.encodingOptimizationDisabled=bt.create(f("EncodingOptimizationDisabled")),t}(wt),yi=function(
n){function t(t){n.call(this,1);this._decoderMap=ft.toNumberMap(function(n){return n.kind});this._metadataManager=
t}return __extends(t,n),t.prototype.getMetadataManager=function(){return this._metadataManager},t.prototype.
visit=function(n){try{return this._atoms=n.atoms,this._ownedObjectList=[],this.dispatch(n.root)}finally{
this._ownedObjectList=null;this._atoms=null}},t.prototype.dispatch=function(t,i){i===void 0&&(i=!1);
var r=n.prototype.dispatch.call(this,t);return i&&this._ownedObjectList.push(r),r},t.prototype._visitEncodedAtomReference=
function(n){var i=n.encodedAtomReference,u=this._metadataManager,f=this._ownedObjectList.length,t=u.
getOrResurrectMetadataWithId(i),r,s;if(!t){var e=this._atoms[i],o=this._decoderMap[e.kind],h=o.decode(
e.data,this);t=u.createMetadata(i,h,1,o.metadataConstructor)}return r=this._ownedObjectList.length-f,
r>0&&(s=this._ownedObjectList.splice(f,r),t.getOrCreateOwnedObjectsList(s)),t.getObject()},t.prototype.
_visitNonScalar=function(n){var i,t;i=Array.isArray(n)?[]:{};for(t in n)n.hasOwnProperty(t)&&(i[t]=this.
dispatch(n[t]));return i},t}(fi),pi=function(){function n(n,t,i,r,u,f){var e=this,o=function(n,t,r,u,
f,o){var a=e._metadataManager.getMetadataById(n),h,c,s=[],l={shouldFullFreeze:!0,desiredMetadataFlags:
a.getFlags()};u?c=u.map(function(n){switch(n.status){case"added":return{changeKind:0,index:n.index,value:
e.serializeObject(n.value,l)};case"deleted":return s.push(n.value),{changeKind:1,index:n.index,value:
null};default:return null}}):(h=e.serializeObject(o,l),s.push(f));t&&i({id:n,changeNumber:r,arrayChanges:
c,newValue:h});e._releaseObjects(s,!0)},s=function(n,t,i){var u=e._metadataManager.getMetadataById(n),
f,o;u&&(f=u.getOrCreateOwnedObjectsList(),o=i.map(function(n){return f.push(n),e.serializeObject(n,{
shouldFullFreeze:!0,desiredMetadataFlags:u.getFlags()})}),r({id:n,eventKind:t,args:o}))},h=function(
n,t,i){var h=e._metadataManager.getMetadataById(n),r=w.Deferred(),c=r.promise(),f={shouldFullFreeze:
!0,desiredMetadataFlags:h.getFlags()},o=!0,s;return!t||et.isUndefinedEquivalent(t)||e._metadataManager.
isTracked(t)||(o=!1,t=undefined),i&&(s=i.map(function(n){return e.serializeObject(n,f)})),u({id:n,isThisArgValid:
o,thisArg:e.serializeObject(t,f),argsArray:s,returnValue:e.serializeObject(r,f)}),r.finally(function(
){setTimeout(function(){e._releaseObjects([t,r].concat(i),!1)},0)}),c};this._releaseListener=f;this.
_metadataManager=new ti(n,t,o,s,h)}return Object.defineProperty(n.prototype,"metadataCache",{get:function(
){return this._metadataManager},enumerable:!0,configurable:!0}),n.prototype.deserializeObject=function(
n){var t=new yi(this._metadataManager),i=new ei(this._metadataManager),r=t.visit(n);return i.visit(n),
r},n.prototype.serializeObject=function(n,t){var r=t.shouldFullFreeze?1:0,u=t.desiredMetadataFlags,f=
new oi(this._metadataManager,r,u),e=new ei(this._metadataManager),i=f.visit(n);return e.visit(i),i},
n.prototype.applyPromiseEvent=function(n){var f=this,e=this._metadataManager,r=e.getMetadataById(n.id),
t=n.args.map(function(n){return f.deserializeObject(n)}),u,i;if(r){for(u=r.getOrCreateOwnedObjectsList(
),i=0;i<t.length;i++)u.push(t[i]);r.applyEvent(n.eventKind,t)}else this._releaseObjects(t,!0)},n.prototype.
applyChange=function(n){var o=this,t=[],h=new y,e,i,r,f;n.arrayChanges?e=n.arrayChanges.map(function(
n){switch(n.changeKind){case 0:var i=o.deserializeObject(n.value);return t.push(i),{status:"added",index:
n.index,moved:null,value:i};case 1:return{status:"deleted",index:n.index,moved:null,value:null}}}):(
i=this.deserializeObject(n.newValue),t.push(i));r=this._metadataManager.getMetadataById(n.id);try{r&&
r.applyChanges(n.changeNumber,e,i)}finally{this._releaseObjects(t,!0)}f=h.millisecondsElapsed;f>u.minTraceDurationInMs&&
s.trace({source:"ProxiedObservable",action:"ObservableChange",name:n.id.substring(n.id.lastIndexOf("-")+
1),data:{srcExtension:u.messageContext&&u.messageContext.srcWindowId},actionModifier:s.ActionModifier.
Complete,duration:f})},n.prototype.invokeFunction=function(n){var e=this,u=!1,i=this.deserializeObject(
n.returnValue),o=n.isThisArgValid?this.deserializeObject(n.thisArg):"An invalid this context was proxied over. It may be because the source object is an untracked object.",
s=(n.argsArray||[]).map(function(n){return e.deserializeObject(n)}),f=this._metadataManager.getMetadataById(
n.id,"Unable to complete proxied function invocation."),t,r;if(f){try{t=f.invoke(o,s);u=!0}finally{u||
i.reject()}if(t)if(g(t)||Q.isPromiseAlike(t)){r=t._underlyingPromise;r&&t.hasOwnProperty("_cancelationToken")||
(r=t);v.onPromiseValueChanged(r,function(n){switch(n.state){case 1:i.resolveWith(v.ThisContext,n.args);
break;case 2:i.rejectWith(v.ThisContext,n.args)}},function(n){i.notifyWith(v.ThisContext,n)})}else i.
resolve(t);else i.resolve()}else i.reject()},n.prototype._releaseObjectsHelper=function(n,i,r){i===void
0&&(i=t.Utilities.getCurrentCallStack());var u={callstack:i,releaseSetId:r},f=new vi(this._metadataManager,
u);return n.map(function(n){return f.visit(n)}).filter(function(n){return!!n})},n.prototype._releaseObjects=
function(n,i){var r=this._metadataManager.createReleaseSetId(),u=t.Utilities.getCurrentCallStack(),f=
this._releaseObjectsHelper(n,u,r);this._releaseListener({releaseStep:0,releaseSetId:r,callstack:u,rootIds:
i?null:f})},n.prototype.releaseObject=function(n){this._releaseObjects([n],!1)},n.prototype.applyRelease=
function(n){var u=this,t=n.releaseSetId,i=n.rootIds,r;n.releaseStep===0?(i&&(r=i.map(function(n){var
t=u._metadataManager.getMetadataById(n,"Cannot release object.");return t?t.getObject():undefined}),
this._releaseObjectsHelper(r,n.callstack)),this._releaseListener({releaseStep:1,releaseSetId:t,callstack:
null,rootIds:null})):n.releaseStep===1&&this._metadataManager.releaseFinalize(t)},n.prototype.dispose=
function(){this._metadataManager.dispose()},n}();i.ProxiedObjectManager=pi}(o=i.Internal||(i.Internal=
{}))})(i=t.ProxiedObservables||(t.ProxiedObservables={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx=
{}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(
i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(t){var i;(function(
i){var r;(function(i){"use strict";function rt(n,t){return(typeof n=="string"?n:n&&n.message&&n.message+
"")||t}function ut(n,t){var u=i.messageContext;i.messageContext=n;try{t()}catch(r){i.addRpcStack(r);
h.ErrorReporter.lastError=r;throw r;}finally{i.messageContext=u}}function et(n,t){var i=new f(n);t.registerForDispose(
i);i.onDispose(function(){t.dispose()});return i}function ni(){return c.ProxiedObject.trackedObjects.
values.sort(function(n,t){return n.getMetadata().creationTime.getTime()-t.getMetadata().creationTime.
getTime()})}function ti(n){var t=new y(n.originId,n.loadWindow,{hostWindow:u,parentTrustedOrigin:u.fx.
environment.trustedParentOrigin,parentWindow:u.parent});o.start(t)}var h=n.Base.Diagnostics,k=n.Base.
ProxiedObservables.Internal.Dictionary,at=n.Base.Stopwatch.TelemetryStopwatch,d=n.Base.Diagnostics.Telemetry,
e,a,v,tt,it,y,ft,c,w,b,o,s,ht,ct,lt;i.WindowLoadTimeoutsInSec=[20,40,80];i.minTraceDurationInMs=100;
var u=window,ii=u.fx.environment,r="fx",l=n.Base.Utilities.generateNonSerializableProperty("WindowMessage"),
vt=6e4,yt=(i.WindowLoadTimeoutsInSec.reduce(function(n,t){return n+t},0)+20)*1e3,f=function(){function n(
n){this._disposeCallbacks=[];this._value=n}return n.prototype.getValue=function(){return this._value}
,n.prototype.dispose=function(){if(this._disposeCallbacks){var n=this.getValue(),t=this._disposeCallbacks;
this._disposeCallbacks=null;t.forEach(function(t){try{t(n)}catch(i){setTimeout(function(){throw i;},
0)}})}},n.prototype.onDispose=function(n){this._disposeCallbacks?this._disposeCallbacks.push(n):n(this.
getValue())},n}();i.DisposableValue=f;e=function(){function n(n){this._dictionary=new k;this._countChangesCallback=
n}return n.prototype.getValue=function(n){return this._dictionary.getValue(n)},n.prototype.setValue=
function(n,t){var i=this;this._dictionary.setValue(n,t);this._countChangesCallback&&this._countChangesCallback(
this._dictionary.count,!0);t.onDispose(function(){i._dictionary.removeValue(n);i._countChangesCallback&&
i._countChangesCallback(i._dictionary.count,!1)})},Object.defineProperty(n.prototype,"values",{get:function(
){return this._dictionary.values},enumerable:!0,configurable:!0}),n.prototype.dispose=function(){this.
_dictionary.values.forEach(function(n){n.dispose()})},n}();a=function(n){function t(t){n.call(this,t.
window);this._trustedHost=(t.trustedHost||"*").toLowerCase();this._initializationFunc=t.initializationFunc}
return __extends(t,n),t.prototype.initialize=function(){if(this._initializationFunc){var n=this._initializationFunc;
this._initializationFunc=null;n(this)}},t.prototype.isHostAllowed=function(n){return this._trustedHost===
"*"||n.toLowerCase()===this._trustedHost},t.prototype.postMessage=function(n){this.getValue().postMessage(
n,this._trustedHost)},t.prototype.getTrustedHost=function(){return this._trustedHost},t}(f);i.RpcWindow=
a;v=function(){function n(n,t){this._outerList=[];this._innerListIndex=0;this._outerListIndex=n;this.
_handler=t}return n.prototype._processInnerList=function(n){var r=this,i,t;if(n&&(this._innerList=n),
this._innerList){while(this._innerListIndex<this._innerList.length){i=this._innerList[this._innerListIndex];
this._innerListIndex++;t=!1;try{this._handler(i);t=!0}finally{t||Q.nextTick(function(){r.addItem()})}
}this._innerList=undefined;this._innerListIndex=0}},n.prototype.addItem=function(n){var t=this._outerList,
i;for(n&&(t.push(n),t.sort(function(n,t){return t.seq-n.seq})),this._processInnerList();t.length>0&&
t[t.length-1].seq===this._outerListIndex;)i=t.pop(),this._outerListIndex++,this._processInnerList(i.
data)},Object.defineProperty(n.prototype,"isEmpty",{get:function(){return this._outerList.length===0&&
this._innerList===undefined},enumerable:!0,configurable:!0}),n}();i.Sequencer=v;var pt=function(){function n(
n){this._isReadyToSend=!1;this._isCallbackScheduled=!1;this._frameBuffer=[];this._sender=n}return n.
prototype._schedule=function(){var n=this;this._isReadyToSend&&!this._isCallbackScheduled&&(this._isCallbackScheduled=
!0,Q.nextTick(function(){n.flush();n._isCallbackScheduled=!1}))},n.prototype.flush=function(){this._isReadyToSend&&
this._frameBuffer.length>0&&(this._sender(this._frameBuffer),this._frameBuffer=[])},n.prototype.send=
function(n){this._schedule();this._frameBuffer.push(n)},n.prototype.start=function(){this._isReadyToSend=
!0;this._schedule()},n}(),g=function(){function n(n){this._handlerMap={};this._messageListener=n}return n.
prototype._getKindAsString=function(n){return n+""},n.prototype.handleMessage=function(n,t){var i=this.
_handlerMap[this._getKindAsString(n.kind)];if(!i)throw new Error("Unable to find handler.");i(n.data,
t)},n.prototype.registerHandler=function(n,t){var r=this,i=this._getKindAsString(n);if(this._handlerMap[
i])throw new Error("Handler for the given kind already exists.");return this._handlerMap[i]=t,function(
t,i){r._messageListener(t,{kind:n,data:i})}},n}(),wt=function(){function n(n,t,i){this._senderSequenceIndex=
0;this._receiveSequenceStart=0;this._transmittedSequenceStart=0;this._isParentRoute=n;this._remoteId=
t;this._routedMessageHandler=i}return n.prototype.getLocalInstanceIndex=function(){return this._receiveSequenceStart}
,n.prototype.getRemoteInstanceIndex=function(){return this._transmittedSequenceStart},n.prototype.getRemoteId=
function(){return this._remoteId},n.prototype.handleMessage=function(n,t,i){var r=this._rpcWindow,u,
f;if(r){try{u=r.getValue()===n}catch(e){u=!1}u&&r.isHostAllowed(t)&&(f=i.seq,i.handshakeData?this._handleHandshakeFrame(
i.handshakeData):this._windowMessageHandler&&f>=this._receiveSequenceStart&&this._windowMessageHandler.
addItem(i))}},n.prototype.setWindow=function(n){var t=this;n?(this._bufferedSender=new pt(function(n)
{t._postMessageToWindow(n)}),this._rpcWindow=n,this._isParentRoute&&this._initiateHandshake()):(this.
_bufferedSender.flush(),this._rpcWindow=null,this._bufferedSender=null,this._windowMessageHandler=null)}
,n.prototype.send=function(n){this._bufferedSender&&(this._rpcWindow.initialize(),this._bufferedSender.
send(n))},n.prototype._initiateHandshake=function(){this._postMessageToWindow(null,!1)},n.prototype.
_handleHandshakeFrame=function(n){var t=n.sequenceStart;this._receiveSequenceStart=t;this._localId=n.
destinationId;this._windowMessageHandler=new v(t,this._routedMessageHandler);n.isResponse||this._postMessageToWindow(
null,!0);this._bufferedSender.start()},n.prototype._postMessageToWindow=function(n,t){if(this._rpcWindow)
{var i;typeof t=="boolean"?(this._transmittedSequenceStart=this._senderSequenceIndex,i={signature:l,
seq:-1,originId:undefined,handshakeData:{isResponse:t,sequenceStart:this._senderSequenceIndex,destinationId:
this._remoteId},data:undefined}):i={signature:l,seq:this._senderSequenceIndex++,originId:this._localId,
data:n};this._rpcWindow.postMessage(i)}},n}(),bt=function(){function n(){this._refCounts=[];this._totalCounts=
0}return n.prototype.setCount=function(n,t){var i=this.getCount(n);return this._refCounts[n]=t,this.
_totalCounts+=t-i,this._totalCounts},n.prototype.getCount=function(n){return this._refCounts[n]||0},
n.prototype.getTotalCount=function(){return this._totalCounts},n.prototype.clearRefCounts=function()
{this._refCounts=[];this._totalCounts=0},n}(),kt=function(){function n(){this._refCounts={};this._totalRefCounts=
ko.observable(0)}return n.prototype._getRefCountSet=function(n,t){var i=this._refCounts[n];return!i&&
t&&(this._refCounts[n]=i=new bt),i},n.prototype.setRefCount=function(n,t,i){var f=this._getRefCountSet(
n,!0),r=f.getTotalCount(),u=f.setCount(t,i);return this._totalRefCounts(this._totalRefCounts.peek()+
u-r),u>r?r===0?0:1:u<r?u===0?2:3:4},n.prototype.clearRefCountsFrom=function(n){var t=this._getRefCountSet(
n,!1),i;t&&(i=t.getTotalCount(),t.clearRefCounts(),this._totalRefCounts(this._totalRefCounts.peek()-
i))},n.prototype.getRefCountsFrom=function(n){var t=this._getRefCountSet(n,!1);return t?t.getTotalCount(
):0},Object.defineProperty(n.prototype,"totalRefCounts",{get:function(){return this._totalRefCounts}
,enumerable:!0,configurable:!0}),n}(),nt=function(n){function t(){n.call(this,""+t.keyCounter++)}return __extends(
t,n),t.keyCounter=0,t}(f);i.AcquireWindowResult=nt;tt=function(){function n(n,t,i,r,u){this._windowUnloadTimeoutHandle=
0;this._windowId=n;this._routeWindowSetter=t;this._clearRefCountsFunc=i;this._sendShutdownMessage=r;
this._loadWindowFunc=u}return n.prototype.isAlive=function(){return this._windowUnloadTimeoutHandle?
!1:!!this._currentWindow},n.prototype.setWindowLoaded=function(n){var t=this,i;if(n)if(this._currentWindow)
this._windowUnloadTimeoutHandle!==0&&(u.clearTimeout(this._windowUnloadTimeoutHandle),this._windowUnloadTimeoutHandle=
0);else{try{this._currentWindow=this._loadWindowFunc(this._windowId)}catch(r){i=r}if(this._currentWindow)
{this._currentWindow.onDispose(function(){t._currentWindow=null;t._sendShutdownMessage(t._windowId,void
0);t._routeWindowSetter.setRouteWindow(t._windowId,null);u.clearTimeout(t._windowUnloadTimeoutHandle);
t._windowUnloadTimeoutHandle=0;t._clearRefCountsFunc({windowId:t._windowId,reason:"The window '{0}' was garbage collected or forcibly terminated.".
format(t._windowId),callStack:undefined})});this._routeWindowSetter.setRouteWindow(this._windowId,this.
_currentWindow)}else this._clearRefCountsFunc({windowId:this._windowId,reason:rt(i,"Fail to load window '{0}'.".
format(this._windowId)),callStack:i&&i.stack})}else!n&&this._currentWindow&&this._windowUnloadTimeoutHandle===
0&&(this._windowUnloadTimeoutHandle=u.setTimeout(function(){t._currentWindow.dispose()},vt))},n}();it=
function(){function n(n,t,i,u){var f=this;this._refCounts={};this._knownWindows=[r];this._loadableWindows=
{};this._clearRefCountsFunc=function(n){f._knownWindows.forEach(function(t){var u=n.windowId,i=f.getWindowRefCounts(
t,!1),r=f.getWindowRefCounts(u,!1);(r&&r.getRefCountsFrom(t)>0||i&&i.getRefCountsFrom(u)>0)&&f._sendResetMessage(
t,n);r&&r.clearRefCountsFrom(t);i&&i.clearRefCountsFrom(u)})};this._routeWindowSetter=n;this._sendShutdownMessage=
i;this._sendResetMessage=t;this._loadWindowFunc=u}return n.prototype._getOrCreateLoadableWindow=function(
n){var t=this._loadableWindows[n];return n===r||t||(t=new tt(n,this._routeWindowSetter,this._clearRefCountsFunc,
this._sendShutdownMessage,this._loadWindowFunc),this._loadableWindows[n]=t,this._knownWindows.push(n)),
t},n.prototype.setRefCount=function(n,t){var r=t.target,u=this.getWindowRefCounts(r,!0).setRefCount(
n,t.kind,t.value),i=this._getOrCreateLoadableWindow(r);return i&&(t.isActivating&&!i.isAlive()||u===
2&&i.isAlive())&&this._refreshWindowsLoadedState(),u},n.prototype.getWindowRefCounts=function(n,t){var
i=this._refCounts[n];return!i&&t&&(this._refCounts[n]=i=new kt),i},n.prototype._refreshWindowsLoadedState=
function(){for(var f=this,n={},t=[r],e=Object.keys(this._loadableWindows),o=e,i,u;t.length>0;)i=[],u=
[],t.forEach(function(t){n[t]=undefined;o.forEach(function(r){f.getWindowRefCounts(r,!0).getRefCountsFrom(
t)>0?(n[t]=undefined,i.push(r)):u.push(r)})}),t=i,o=u;e.forEach(function(t){f._loadableWindows[t].setWindowLoaded(
n.hasOwnProperty(t))})},n}();y=function(){function n(n,i,u){var f=this,e,o;this._routedMessageClients=
[];this._routedMessageRelay=new g(function(n,i){var u={callStack:t.Utilities.getCurrentCallStack(),routeInstanceIndex:
0,destWindowId:n,srcWindowId:f._localWindowId,data:i},e;f._localWindowId===n?f._routedMessageRelay.handleMessage(
i,u):(e=f._localWindowId===r?n:r,f._baseDispatcher.sendMessage(e,u))});this.raiseRemoteException=this.
_routedMessageRelay.registerHandler(2,function(n){var t=new Error(n.reason);t.stack=n.callStack;throw t;
});this._baseDispatcher=new ft(u);this._localWindowId=n;e=this._routedMessageRelay.registerHandler(0,
function(n,t){t.srcWindowId===r&&f._routedMessageClients.forEach(function(i){i.handleResetMessage(n,
t)})});o=this._routedMessageRelay.registerHandler(1,function(n,t){t.srcWindowId===r&&(h.Log.flush(),
h.Log.disable())});i&&(this._shellRefCounter=new it(this._baseDispatcher,e,o,i));this._sendRefCount=
this._routedMessageRelay.registerHandler(3,function(n,t){if(f._shellRefCounter)f._shellRefCounter.setRefCount(
t.srcWindowId,n);else throw new Error("Unexpected ref count message received.");})}return n.prototype.
handleMessage=function(n,t){var f=this,u=t.getRemoteId(),i;(u===r||u===n.srcWindowId)&&(n.routeInstanceIndex+=
t.getRemoteInstanceIndex(),i=n.destWindowId,i===this._localWindowId?(n.routeInstanceIndex+=t.getLocalInstanceIndex(
),ut(n,function(){return f._routedMessageRelay.handleMessage(n.data,n)})):this._baseDispatcher.sendMessage(
i,n))},n.prototype.getTotalRefCounts=function(n){return this._shellRefCounter.getWindowRefCounts(n,!0).
totalRefCounts},n.prototype.getLocalWindowId=function(){return this._localWindowId},n.prototype.getRoutedMessageRelay=
function(){return this._routedMessageRelay},n.prototype.createClient=function(n,t){var i=new n(this,
t);return this._routedMessageClients.push(i),i},n.prototype.setRefCount=function(n,t,i,u){var f={target:
n,kind:t,isActivating:i,value:u};this._shellRefCounter?this._shellRefCounter.setRefCount(r,f):this._sendRefCount(
r,f)},n.prototype.start=function(){this._baseDispatcher.start(this)},n.prototype.dispose=function(){
this._baseDispatcher.dispose()},n}();i.RoutedMessageDispatcher=y;ft=function(){function n(n){var t=this,
f;this._routes={};this._preStartReceiveBuffer=[];this._eventHandler=function(n){var i,r;t._window.Object&&
(i=n.data,i&&i.signature===l&&(r=t._preStartReceiveBuffer,r?r.push({data:i,origin:n.origin,source:n.
source}):t._handleMessage(n)))};var i=n.hostWindow,u=n.parentWindow,e=n.parentTrustedOrigin;this._window=
i;i.addEventListener("message",this._eventHandler);u!==i&&e&&(f=this._registerRoute(!0,r),f.setWindow(
new a({window:u,trustedHost:n.parentTrustedOrigin,initializationFunc:void 0,disposeFunc:void 0})))}return n.
prototype.sendMessage=function(n,t){var i=this._routes[n];if(i)return i.send(t)},n.prototype.start=function(
n){var t=this;if(!this._preStartReceiveBuffer)throw new Error("Cannot start RPC because it was already started.");
this._routedMessageMultiplexer=n;this._preStartReceiveBuffer&&this._preStartReceiveBuffer.forEach(function(
n){t._handleMessage(n)});this._preStartReceiveBuffer=undefined},n.prototype.setRouteWindow=function(
n,t){var i=this._routes[n];i||(i=this._registerRoute(!1,n));i.setWindow(t)},n.prototype.dispose=function(
){this._window.removeEventListener("message",this._eventHandler)},n.prototype._registerRoute=function(
n,t){var r=this,i;if(this._routes[t])throw new Error("Route to the remote window '{0}' already exists.".
format(t));return i=new wt(n,t,function(n){r._routedMessageMultiplexer.handleMessage(n,i)}),this._routes[
t]=i,i},n.prototype._handleMessage=function(n){var u=this,t=n.data,r=t.originId,i;r?(i=this._routes[
r],i&&i.handleMessage(n.source,n.origin,t)):Object.keys(this._routes).forEach(function(i){u._routes[
i].handleMessage(n.source,n.origin,t)})},n}();var dt=function(){function n(){this._filters=[]}return n.
prototype.register=function(n){var i=this,t;if(this._filters.indexOf(n)>=0)throw new Error("Callback is already registered.");
return this._filters.push(n),t=!1,{dispose:function(){t||(t=!0,i._filters.remove(n))}}},n.prototype.
applyFilters=function(n,t){this._filters.concat(t).reduce(function(t,i){return t?t.then(function(){return i(
n)}):i(n)},undefined)},n}(),gt=function(){function t(n,t){this._name=n;this._options=t}return t.prototype.
invoke=function(t,r,u,f){var l=this,v=new at,s=r.srcWindowId,e=new n.Internal.Base.TriggerableLifetimeManager,
a=this._options.allowedOrigin,y=this._options.handler||function(){},h=function(n,t){t===void 0&&(t=!0);
e.dispose();n=n||{};var u=l._name,h=rt(n,"Failed to complete the RPC call for '{0}'".format(u)),o=typeof
n.stack=="string",s=i.createCallStack(o?n.stack:"",r,u);if(f(h,s),o&&(n.stack=s),t)throw n;},o,c;a&&
a.indexOf(s)===-1&&h("The origin window '{0}' is not allowed to access the endpoint name '{1}'.".format(
s,this._name),!1);try{o=y(t,r,e);Q.isPromiseAlike(o)?Q(o).then(function(n){u(et(n,e),l._options)},h):
u(et(o,e),this._options)}catch(p){h(p)}c=v.millisecondsElapsed;c>i.minTraceDurationInMs&&d.trace({source:
"Rpc",action:"InvokeEndpoint",name:this._name,data:{srcExtension:s},actionModifier:d.ActionModifier.
Complete,duration:c})},t}(),ot=function(){function n(n){this._endPoints={};this._endPointDeferred={};
this._endPointFilterManager=n}return n.prototype.registerEndPoint=function(n,t){if(this._endPoints[n])
throw new Error("The endpoint '{0}' already exists.".format(n));else{var i=new gt(n,t),r=this._endPointDeferred[
n];this._endPoints[n]=i;r&&(r.resolve(i),delete this._endPointDeferred[n])}},n.prototype.invokeEndPoint=
function(n,t,i,r,u){var f=this;this._endPointFilterManager.applyFilters(n,function(){var o=f._endPoints[
n],e;o?o.invoke(t,i,r,u):(h.Log.writeEntry(0,"RPC","Attempted to invoke endpoint '{0}' but it is not registered. RPC call has been blocked until endpoint becomes registered.".
format(n)),e=f._endPointDeferred[n],e||(e=Q.defer(),f._endPointDeferred[n]=e),e.promise.then(function(
n){ut(i,function(){return n.invoke(t,i,r,u)})}))})},n}(),st=function(){function n(n,t,i){this._requestIdCounter=
0;this._pendingRpcCall=new k;this._destination=n;this._refCounter=t;this._kind=i}return n.prototype.
getDestinationId=function(){return this._destination},n.prototype._setRefCount=function(n){this._refCounter.
setRefCount(this._destination,this._kind,n,this._pendingRpcCall.count)},n.prototype.getMetadata=function(
n){return this._pendingRpcCall.getValue(n)},n.prototype.create=function(n,i){var u=this,f=Q.defer(),
e=t.Utilities.getCurrentCallStack(),o=Q.timeout(f.promise,yt,"An RPC call to '{0}' in '{1}' timed out. The call was made in:\r\n'{2}'".
format(n,this._destination,e)),r=this._requestIdCounter+++"";return this._pendingRpcCall.setValue(r,
{destinationId:this._destination,creationCallStack:e,creationTime:new Date,returnValue:f}),this._setRefCount(
!0),i(r),o.finally(function(){Q.nextTick(function(){u._pendingRpcCall.removeValue(r);u._setRefCount(
!1)})})},n.prototype.resolve=function(n,t){var i=this._pendingRpcCall.getValue(n);i&&i.returnValue.resolve(
t)},n.prototype.reject=function(n,t,i){var r=this._pendingRpcCall.getValue(t),u,f;r&&(u=new Error(i.
reason),f=i.callStack||r.creationCallStack,u.stack=f,r.returnValue.reject(u))},n.prototype.handleResetMessage=
function(n,t){var i=this;this._pendingRpcCall.keys.forEach(function(r){i.reject(t.destWindowId,r,n)}
)},n}(),p;(function(n){var t=function(){function n(n,t){var i=this,r;this._targetWindowContext={};r=
n.getRoutedMessageRelay();this._clientContext=n;this._endPoints=t;this._sendInvokeFunc=r.registerHandler(
4,function(n,t){var r=t.srcWindowId,u=n.requestId;i._endPoints.invokeEndPoint(n.name,n.arg,t,function(
n){i._sendRpcResolveFunc(r,{pendingRequestId:u,successValue:n.getValue()});n.dispose()},function(n,t)
{i._sendRpcRejectFunc(r,{pendingRequestId:u,reason:n,callStack:t})})});this._sendRpcResolveFunc=r.registerHandler(
5,function(n,t){i._getOrCreateTargetWindowContext(t.srcWindowId).resolve(n.pendingRequestId,n.successValue)}
);this._sendRpcRejectFunc=r.registerHandler(6,function(n,t){i._getOrCreateTargetWindowContext(t.srcWindowId).
reject(t.destWindowId,n.pendingRequestId,n)})}return n.prototype._getOrCreateTargetWindowContext=function(
n){var t=this._targetWindowContext[n];return t||(this._targetWindowContext[n]=t=new st(n,this._clientContext,
3)),t},n.prototype._invoke=function(n,t,i,r){var u=this;return this._getOrCreateTargetWindowContext(
t).create(n,function(i){u._sendInvokeFunc(t,{requestId:i,name:n,arg:r})})},n.prototype.invokeAction=
function(n,t,i){return this._invoke(n,t,!1,i)},n.prototype.invokeFunc=function(n,t,i){return this._invoke(
n,t,!0,i)},n.prototype.handleResetMessage=function(n,t){this._getOrCreateTargetWindowContext(n.windowId).
handleResetMessage(n,t)},n}();n.StatelessRpcClient=t})(p||(p={})),function(n){var u=t.ProxiedObservables.
Internal,o=function(){function n(n){this._value=n}return n.prototype.getValue=function(){return this.
_value},n.prototype.dispose=function(){this._value=null},n}(),r=function(n){function t(i,r){n.call(this,
i);this._metadata=r;this._id=""+t._idCounter++;t.trackedObjects.setValue(this._id,this)}return __extends(
t,n),t.prototype.getMetadata=function(){return this._metadata},t._idCounter=0,t.trackedObjects=new e,
t}(f);n.ProxiedObject=r;var s=function(){function n(n,t,f,s,h,c){var l=this,a;this._producedObjects=
new e;this._acquiredObjects=new e(function(n){l._clientContext&&l._clientContext.setRefCount(l._remoteWindowId,
1,!1,n)});this._remoteWindowId=f;this._pendingObjectRequests=h;this._clientContext=n;this._senderContainer=
new o(c);a=[t,f,s].join("-");this._messageRelay=new g(function(n,t){var i=l._senderContainer.getValue(
);i&&i(t)});this._proxiedObjectManager=new u.ProxiedObjectManager(a,function(n){l._clientContext.raiseRemoteException(
l._remoteWindowId,{reason:n,callStack:i.getCurrentCallStack()})},this._registerSymmetricAction(0,function(
n){l._proxiedObjectManager.applyChange(n)}),this._registerSymmetricAction(1,function(n){l._proxiedObjectManager.
applyPromiseEvent(n)}),this._registerSymmetricAction(2,function(n){l._proxiedObjectManager.invokeFunction(
n)}),this._registerSymmetricAction(3,function(n){l._proxiedObjectManager.applyRelease(n)}));this._sendAcquireObjectResponse=
this._registerSymmetricAction(4,function(n){var t=n.requestId,u=l._proxiedObjectManager.deserializeObject(
n.object),i=new r(u,l._pendingObjectRequests.getMetadata(t));i.onDispose(function(){l._proxiedObjectManager.
releaseObject(u);l._sendReleaseRootObject(t)});l._acquiredObjects.setValue(t,i);l._pendingObjectRequests.
resolve(t,i)});this._sendReleaseRootObject=this._registerSymmetricAction(5,function(n){var t=l._producedObjects.
getValue(n);t&&t.dispose()})}return n.prototype._registerSymmetricAction=function(n,t){var i=this._messageRelay.
registerHandler(n,t);return function(n){i(undefined,n)}},n.prototype.handleAcquireObjectRequest=function(
n,t,i){this._producedObjects.setValue(n,i);var r=0;t.allowRemoteChanges&&(r|=1);this._sendAcquireObjectResponse(
{requestId:n,object:this._proxiedObjectManager.serializeObject(i.getValue(),{shouldFullFreeze:!1,desiredMetadataFlags:
r})})},n.prototype.handleEvent=function(n){this._messageRelay.handleMessage(n,undefined)},n.prototype.
dispose=function(){this._acquiredObjects.dispose();this._producedObjects.dispose();this._proxiedObjectManager.
dispose();this._senderContainer.dispose();this._clientContext=null},n}(),h=function(){function n(n,t,
i,r){var u=this;this._routeInstanceIndex=0;this._receiveSequenceIndex=0;this._transmitSequenceIndex=
0;this._pendingObjectRequests=new st(n,t,2);this._clientContext=t;this._sendAcquireObjectRequest=i;this.
_sendConnectionMessage=function(t){r(n,{sequenceIndex:u._transmitSequenceIndex++,data:t})}}return n.
prototype.getRemoteId=function(){return this._pendingObjectRequests.getDestinationId()},n.prototype.
getPoConnection=function(n,t){var r=t>=0,i;return this._currentConnection&&t!==this._receiveSequenceIndex&&
this._routeInstanceIndex!==n.routeInstanceIndex&&(this._resetConnection(),this._sendConnectionMessage(
null)),t!==0&&r||this._currentConnection||(this._routeInstanceIndex=n.routeInstanceIndex,this._currentConnection=
new s(this._clientContext,n.destWindowId,n.srcWindowId,n.routeInstanceIndex,this._pendingObjectRequests,
this._sendConnectionMessage)),t===this._receiveSequenceIndex?(this._receiveSequenceIndex++,i=this._currentConnection):
r||(i=this._currentConnection),i},n.prototype.acquireObject=function(n,t){var i=this;return this._pendingObjectRequests.
create(n,function(r){i._sendAcquireObjectRequest(i.getRemoteId(),{requestId:r,name:n,arg:t})})},n.prototype.
handleAcquireObjectResponseError=function(n,t){this._pendingObjectRequests.reject(n,t.pendingRequestId,
t)},n.prototype.handleResetMessage=function(n,t){this._pendingObjectRequests.handleResetMessage(n,t);
this._resetConnection()},n.prototype._resetConnection=function(){this._currentConnection&&(this._currentConnection.
dispose(),this._currentConnection=null);this._transmitSequenceIndex=0;this._receiveSequenceIndex=0},
n}(),c=function(){function n(n,t){var i=this,r;this._targetWindowContexts={};r=n.getRoutedMessageRelay(
);this._endPoints=t;this._routedMessageClientContext=n;this._sendAcquireObjectRequest=r.registerHandler(
7,function(n,t){var r=i._getOrCreatePoConnection(t,-1);i._endPoints.invokeEndPoint(n.name,n.arg,t,function(
t,i){r.handleAcquireObjectRequest(n.requestId,i,t)},function(r,u){i._sendAcquireObjectResponseError(
t.srcWindowId,{pendingRequestId:n.requestId,reason:r,callStack:u})})});this._sendAcquireObjectResponseError=
r.registerHandler(8,function(n,t){i._getOrCreateTargetWindowContext(t.srcWindowId).handleAcquireObjectResponseError(
t.destWindowId,n)});this._sendConnectionMessage=r.registerHandler(9,function(n,t){var r=i._getOrCreatePoConnection(
t,n.sequenceIndex),u=n.data;r&&u&&r.handleEvent(u)})}return n.prototype._getOrCreateTargetWindowContext=
function(n){if(n===this._routedMessageClientContext.getLocalWindowId())throw new Error("Cannot acquire an object from the same window as the caller.");
var t=this._targetWindowContexts[n];return t||(this._targetWindowContexts[n]=t=new h(n,this._routedMessageClientContext,
this._sendAcquireObjectRequest,this._sendConnectionMessage)),t},n.prototype._getOrCreatePoConnection=
function(n,t){return this._getOrCreateTargetWindowContext(n.srcWindowId).getPoConnection(n,t)},n.prototype.
acquireObject=function(n,t,i){return this._getOrCreateTargetWindowContext(t).acquireObject(n,i)},n.prototype.
handleResetMessage=function(n,t){this._getOrCreateTargetWindowContext(n.windowId).handleResetMessage(
n,t)},n}();n.ProxiedObjectClient=c}(c||(c={}));i.dumpTrackedObjects=ni,function(n){var t=function(){
function n(n){this._targetWindowContext={};this._routedMessageClientContext=n}return n.prototype._getOrCreateTargetWindowContext=
function(n){var i=this,t=this._targetWindowContext[n];return t||(this._targetWindowContext[n]=t=new e(
function(t,r){i._routedMessageClientContext.setRefCount(n,0,r,t)})),t},n.prototype.acquireWindow=function(
n,t){var f=this._getOrCreateTargetWindowContext(n),r=0,i=new nt;i.onDispose(function(){u.clearTimeout(
r)});if(typeof t=="number"){if(t<0)throw new Error("durationInSeconds parameter needs be a non-negative value.");
r=u.setTimeout(function(){i.dispose()},t*1e3)}return f.setValue(i.getValue(),i),i},n.prototype.handleResetMessage=
function(n){var i=n.windowId,t=this._targetWindowContext[i];t&&t.dispose()},n}();n.WindowAcquirerClient=
t}(w||(w={}));b=function(){function n(){this.reset()}return n.prototype.registerRpcEndPoint=function(
n,t){this._rpcEndPoints.registerEndPoint(n,t)},n.prototype.registerObjectFactory=function(n,t){this.
_poEndPoints.registerEndPoint(n,t)},n.prototype._assertReady=function(){if(!this._dispatcher)throw new
Error("Cannot use RPC because RPC has not been started.");},n.prototype.invokeRpc=function(n,t,i){return this.
_assertReady(),this._rpcClient.invokeAction(n,t,i)},n.prototype.acquireObject=function(n,t,i){return this.
_assertReady(),this._poClient.acquireObject(n,t,i)},n.prototype.getTotalRefCountTo=function(n){return this.
_assertReady(),this._dispatcher.getTotalRefCounts(n)},n.prototype.acquireWindow=function(n,t){return this.
_assertReady(),this._windowAcquirer.acquireWindow(n,t)},n.prototype.registerEndPointFilter=function(
n){return this._endPointFilterManager.register(n)},n.prototype.start=function(n){this._dispatcher=n;
this._rpcClient=n.createClient(p.StatelessRpcClient,this._rpcEndPoints);this._poClient=n.createClient(
c.ProxiedObjectClient,this._poEndPoints);this._windowAcquirer=n.createClient(w.WindowAcquirerClient,
null);n.start()},n.prototype.reset=function(){this._dispatcher&&(this._dispatcher.dispose(),this._dispatcher=
null);this._endPointFilterManager=new dt;this._rpcEndPoints=new ot(this._endPointFilterManager);this.
_poEndPoints=new ot(this._endPointFilterManager);this._rpcClient=null;this._poClient=null;this._windowAcquirer=
null},n}();i.ClientImpl=b;o=new b;n.Internal.GlobalStateManager.register(o);i.start=ti;i.client=o;i.
internalClient=o;s=function(){function n(n){this._name=n}return n.prototype.getName=function(){return this.
_name},n}();i.EndPointDefinition=s;ht=function(n){function t(){n.apply(this,arguments)}return __extends(
t,n),t.prototype.register=function(n,t,i){n.registerRpcEndPoint(this.getName(),{allowedOrigin:t,handler:
i})},t.prototype.invoke=function(n,t,i){return n.invokeRpc(this.getName(),t,i)},t}(s);i.ActionEndPointDefinition=
ht;ct=function(n){function t(){n.apply(this,arguments)}return __extends(t,n),t.prototype.register=function(
n,t,i){n.registerRpcEndPoint(this.getName(),{allowedOrigin:t,handler:i})},t.prototype.invoke=function(
n,t,i){return n.invokeRpc(this.getName(),t,i)},t}(s);i.FuncEndPointDefinition=ct;lt=function(n){function t(
){n.apply(this,arguments)}return __extends(t,n),t.prototype.registerObjectFactory=function(n,t){n.registerObjectFactory(
this.getName(),t)},t.prototype.acquireObject=function(n,t,i){return n.acquireObject(this.getName(),t,
i)},t}(s);i.ProxiedObjectTypeDefinition=lt})(r=i.Internal||(i.Internal={}))})(i=t.Rpc||(t.Rpc={}))})
(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){var t;(function(
n){var t;(function(n){"use strict";function t(n,t,i,r){t.activatedItems.subscribeArrayChanges(n,function(
n){i(n)},function(n){r(n)})}function r(r,u,f,e,o,s){t(r,u,function(t){n.trace(i(f,e,s(t)))},function(
t){n.trace(i(f,o,s(t)))})}function i(n,t,i){return $.extend({source:n,action:t},i)}n.addActivatedItemsWatcher=
t;n.addActivatedItemsTelemetryWatcher=r})(t=n.Telemetry||(n.Telemetry={}))})(t=n.Diagnostics||(n.Diagnostics=
{}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(
t){var i;(function(t){"use strict";function f(t){var f=n.Base;t?(r.location.search&&t.indexOf("?")===
-1&&(t+=r.location.search),i=new f.Debouncer(f.Debouncer.getMergeIntoArrayDataMerger(),f.Debouncer.getPostArrayExecutor(
t),e),u._setBufferFullCallback(function(n){return i.execute(n),[]})):u._setBufferFullCallback(function(
){return[]})}function s(){}function h(){return u.flush(),i?i.flush():Q.resolve(null)}var e=5e3,r=window,
o=r.fx.environment,u=n.Base.Diagnostics.Log,i,c=n.Helpers;t.initialize=f;t.upload=s;t.flush=h;f(o.clientTraceUri)}
)(i=t.Upload||(t.Upload={}))})(i=t.Diagnostics||(t.Diagnostics={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){"use strict";var i=n.Base.Rpc.Internal,
r=n.Internal.Constants.RpcMethods,u;t.extensionStatusEndPoint=new i.ActionEndPointDefinition(r.notifyExtensionStatus),
function(n){n[n.Normal=0]="Normal";n[n.VersionChanged=1]="VersionChanged";n[n.AuthorizationExpired=2]=
"AuthorizationExpired";n[n.TooManyErrors=3]="TooManyErrors"}(t.ExtensionStatusCode||(t.ExtensionStatusCode=
{}));u=t.ExtensionStatusCode})(i=t.Extension||(t.Extension={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){"use strict";function r(n,t){return{
type:n.type,data:n.data,options:{badge:t}}}function u(n,t){return{type:n.type,data:n.data,options:t}}
function f(n){return{type:2,data:n}}function e(n){return new i(4,n)}function o(n){return new i(82,n)}
function s(n){return new i(83,n)}function h(n){return new i(84,n)}function c(n){return new i(85,n)}function l(
n){return new i(161,n)}function a(n){return new i(86,n)}function v(n){return new i(0,n)}function y(n)
{return new i(10,n)}function p(n){return new i(74,n)}function w(n){return new i(12,n)}function b(n){
return new i(75,n)}function k(n){return new i(76,n)}function d(n){return new i(94,n)}function g(n){return new
i(96,n)}function nt(n){return new i(210,n)}function tt(n){return new i(132,n)}function it(n){return new
i(17,n)}function rt(n){return new i(98,n)}function ut(n){return new i(18,n)}function ft(n){return new
i(19,n)}function et(n){return new i(133,n)}function ot(n){return new i(174,n)}function st(n){return new
i(99,n)}function ht(n){return new i(176,n)}function ct(n){return new i(77,n)}function lt(n){return new
i(101,n)}function at(n){return new i(228,n)}function vt(n){return new i(102,n)}function yt(n){return new
i(22,n)}function pt(n){return new i(177,n)}function wt(n){return new i(103,n)}function bt(n){return new
i(104,n)}function kt(n){return new i(105,n)}function dt(n){return new i(108,n)}function gt(n){return new
i(218,n)}function ni(n){return new i(211,n)}function ti(n){return new i(109,n)}function ii(n){return new
i(31,n)}function ri(n){return new i(110,n)}function ui(n){return new i(227,n)}function fi(n){return new
i(35,n)}function ei(n){return new i(37,n)}function oi(n){return new i(112,n)}function si(n){return new
i(193,n)}function hi(n){return new i(79,n)}function ci(n){return new i(43,n)}function li(n){return new
i(44,n)}function ai(n){return new i(45,n)}function vi(n){return new i(46,n)}function yi(n){return new
i(114,n)}function pi(n){return new i(216,n)}function wi(n){return new i(48,n)}function bi(n){return new
i(162,n)}function ki(n){return new i(49,n)}function di(n){return new i(80,n)}function gi(n){return new
i(157,n)}function nr(n){return new i(51,n)}function tr(n){return new i(115,n)}function ir(n){return new
i(116,n)}function rr(n){return new i(117,n)}function ur(n){return new i(52,n)}function fr(n){return new
i(226,n)}function er(n){return new i(61,n)}function or(n){return new i(62,n)}function sr(n){return new
i(65,n)}function hr(n){return new i(219,n)}function cr(n){return new i(66,n)}function lr(n){return new
i(119,n)}function ar(n){return new i(163,n)}function vr(n){return new i(159,n)}function yr(n){return new
i(204,n)}function pr(n){return new i(205,n)}function wr(n){return new i(120,n)}function br(n){return new
i(69,n)}function kr(n){return new i(70,n)}function dr(n){return new i(121,n)}function gr(n){return new
i(206,n)}function nu(n){return new i(81,n)}function tu(n){return new i(160,n)}function iu(n){return new
i(225,n)}function ru(n){return new i(259,n)}function uu(n){return new i(260,n)}function fu(n){return new
i(261,n)}function eu(n){return new i(262,n)}function ou(n){return new i(263,n)}function su(n){return new
i(286,n)}function hu(n){return new i(287,n)}function cu(n){return new i(264,n)}function lu(n){return new
i(279,n)}function au(n){return new i(265,n)}function vu(n){return new i(249,n)}function yu(n){return new
i(285,n)}function pu(n){return new i(111,n)}function wu(n){return new i(266,n)}function bu(n){return new
i(267,n)}function ku(n){return new i(268,n)}function du(n){return new i(269,n)}function gu(n){return new
i(270,n)}function nf(n){return new i(271,n)}function tf(n){return new i(248,n)}function rf(n){return new
i(283,n)}function uf(n){return new i(239,n)}function ff(n){return new i(246,n)}function ef(n){return new
i(275,n)}function of(n){return new i(272,n)}function sf(n){return new i(236,n)}function hf(n){return new
i(106,n)}function cf(n){return new i(107,n)}function lf(n){return new i(123,n)}function af(n){return new
i(124,n)}var df=n.Services.Image.SvgType,i=n.Services.Image.ImageData,vf,yf,pf,wf,bf,kf;t.CustomImageWithBadge=
r;t.CustomImageWithOptions=u;t.ImageUri=f;t.Add=e;t.AddTeamMember=o;t.Attachment=s;t.AvatarDefault=h;
t.AvatarUnknown=c;t.AzureQuickstart=l;t.Backlog=a;t.Blank=v;t.Book=y;t.Canceled=p;t.Check=w;t.Clock=
b;t.Clone=k;t.Code=d;t.Commit=g;t.Commits=nt;t.Connect=tt;t.Delete=it;t.Disable=rt;t.Disabled=ut;t.Discard=
ft;t.Disconnect=et;t.Download=ot;t.Edit=st;t.Ellipsis=ht;t.Error=ct;t.Favorite=lt;t.Feedback=at;t.File=
vt;t.Filter=yt;t.ForPlacementOnly=pt;t.Gear=wt;t.GetMoreLicense=bt;t.GetStarted=kt;t.Go=dt;t.Guide=gt;
t.HeartPulse=ni;t.History=ti;t.Hyperlink=ii;t.Inactive=ri;t.LaunchCurrent=ui;t.Link=fi;t.Lock=ei;t.Log=
oi;t.Monitoring=si;t.Paused=hi;t.Pending=ci;t.Person=li;t.PersonWithFriend=ai;t.Pin=vi;t.Postpone=yi;
t.PowerUp=pi;t.Properties=wi;t.Publish=bi;t.Question=ki;t.Queued=di;t.Redo=gi;t.Refresh=nr;t.Release=
tr;t.Request=ir;t.Retain=rr;t.Save=ur;t.Signout=fr;t.Start=er;t.Stop=or;t.Subtract=sr;t.Support=hr;t.
Swap=cr;t.Tasks=lr;t.ThisWeek=ar;t.Tools=vr;t.TrendDown=yr;t.TrendUp=pr;t.Triangle=wr;t.Unlock=br;t.
Unpin=kr;t.Upload=dr;t.Variables=gr;t.Warning=nu;t.Wrench=tu;t.Info=iu;t.AddAlternate=ru;t.ArrowDown=
uu;t.ArrowLeft=fu;t.ArrowRight=eu;t.ArrowUp=ou;t.CaretDown=su;t.CaretUp=hu;t.Columns=cu;t.Diagnostics=
lu;t.FolderAlternate=au;t.GearAlternate=vu;t.Globe=yu;t.InstallVisualStudio=pu;t.Key=wu;t.Mail=bu;t.
Message=ku;t.PreviewRight=du;t.Query=gu;t.SaveAll=nf;t.Search=tf;t.Star=rf;t.Tag=uf;t.Tags=ff;t.Tour=
ef;t.Undo=of;t.WebHostingPlan=sf;t.GitLogo=hf;t.GitLogoBox=cf;t.VisualStudio=lf;t.VisualStudioLogoBox=
af,function(n){function t(n){return new i(181,n)}function r(n){return new i(182,n)}function u(n){return new
i(277,n)}function f(n){return new i(183,n)}function e(n){return new i(184,n)}function o(n){return new
i(185,n)}function s(n){return new i(186,n)}function h(n){return new i(212,n)}function c(n){return new
i(187,n)}function l(n){return new i(188,n)}function a(n){return new i(189,n)}function v(n){return new
i(190,n)}function y(n){return new i(229,n)}function p(n){return new i(278,n)}function w(n){return new
i(191,n)}function b(n){return new i(192,n)}function k(n){return new i(220,n)}function d(n){return new
i(258,n)}n.Bitbucket=t;n.BitbucketBox=r;n.Channel9=u;n.CodePlex=f;n.CodePlexBox=e;n.Dropbox=o;n.DropboxBox=
s;n.ExternalRepositoryBox=h;n.Git=c;n.GitBox=l;n.GitHub=a;n.GitHubBox=v;n.Redis=y;n.StackOverflow=p;
n.VisualStudio=w;n.VisualStudioBox=b;n.Microsoft=k;n.MicrosoftSquares=d}(vf=t.Logos||(t.Logos={})),function(
n){function t(n){return new i(100,n)}function r(n){return new i(242,n)}function u(n){return new i(243,
n)}n.Neutral=t;n.Happy=r;n.Sad=u}(yf=t.Emoticon||(t.Emoticon={})),function(n){function t(n){return new
i(3,n)}function r(n){return new i(135,n)}function u(n){return new i(164,n)}function f(n){return new i(
136,n)}function e(n){return new i(87,n)}function o(n){return new i(137,n)}function s(n){return new i(
92,n)}function h(n){return new i(231,n)}function c(n){return new i(232,n)}function l(n){return new i(
240,n)}function a(n){return new i(138,n)}function v(n){return new i(11,n)}function y(n){return new i(
93,n)}function p(n){return new i(230,n)}function w(n){return new i(194,n)}function b(n){return new i(
241,n)}function k(n){return new i(178,n)}function d(n){return new i(195,n)}function g(n){return new i(
13,n)}function nt(n){return new i(95,n)}function tt(n){return new i(97,n)}function it(n){return new i(
14,n)}function rt(n){return new i(196,n)}function ut(n){return new i(250,n)}function ft(n){return new
i(15,n)}function et(n){return new i(139,n)}function ot(n){return new i(16,n)}function st(n){return new
i(244,n)}function ht(n){return new i(274,n)}function ct(n){return new i(237,n)}function lt(n){return new
i(213,n)}function at(n){return new i(20,n)}function vt(n){return new i(254,n)}function yt(n){return new
i(255,n)}function pt(n){return new i(23,n)}function wt(n){return new i(24,n)}function bt(n){return new
i(25,n)}function kt(n){return new i(26,n)}function dt(n){return new i(27,n)}function gt(n){return new
i(140,n)}function ni(n){return new i(222,n)}function ti(n){return new i(223,n)}function ii(n){return new
i(224,n)}function ri(n){return new i(28,n)}function ui(n){return new i(29,n)}function fi(n){return new
i(30,n)}function ei(n){return new i(256,n)}function oi(n){return new i(32,n)}function si(n){return new
i(197,n)}function hi(n){return new i(141,n)}function ci(n){return new i(33,n)}function li(n){return new
i(34,n)}function ai(n){return new i(142,n)}function vi(n){return new i(143,n)}function yi(n){return new
i(144,n)}function pi(n){return new i(36,n)}function wi(n){return new i(145,n)}function bi(n){return new
i(146,n)}function ki(n){return new i(147,n)}function di(n){return new i(276,n)}function gi(n){return new
i(38,n)}function nr(n){return new i(39,n)}function tr(n){return new i(40,n)}function ir(n){return new
i(198,n)}function rr(n){return new i(41,n)}function ur(n){return new i(148,n)}function fr(n){return new
i(42,n)}function er(n){return new i(291,n)}function or(n){return new i(47,n)}function sr(n){return new
i(199,n)}function hr(n){return new i(251,n)}function cr(n){return new i(294,n)}function lr(n){return new
i(214,n)}function ar(n){return new i(149,n)}function vr(n){return new i(179,n)}function yr(n){return new
i(208,n)}function pr(n){return new i(150,n)}function wr(n){return new i(207,n)}function br(n){return new
i(288,n)}function kr(n){return new i(118,n)}function dr(n){return new i(53,n)}function gr(n){return new
i(54,n)}function nu(n){return new i(151,n)}function tu(n){return new i(165,n)}function iu(n){return new
i(152,n)}function ru(n){return new i(280,n)}function uu(n){return new i(60,n)}function fu(n){return new
i(63,n)}function eu(n){return new i(290,n)}function ou(n){return new i(233,n)}function su(n){return new
i(234,n)}function hu(n){return new i(64,n)}function cu(n){return new i(200,n)}function lu(n){return new
i(235,n)}function au(n){return new i(67,n)}function vu(n){return new i(153,n)}function yu(n){return new
i(68,n)}function pu(n){return new i(166,n)}function wu(n){return new i(203,n)}function bu(n){return new
i(71,n)}function ku(n){return new i(245,n)}function du(n){return new i(167,n)}function gu(n){return new
i(154,n)}function nf(n){return new i(168,n)}function tf(n){return new i(72,n)}function rf(n){return new
i(73,n)}function uf(n){return new i(155,n)}function ff(n){return new i(215,n)}function ef(n){return new
i(156,n)}function of(n){return new i(180,n)}function sf(n){return new i(201,n)}function hf(n){return new
i(202,n)}function cf(n){return new i(201,n)}function lf(n){return new i(202,n)}function af(n){return new
i(161,n)}n.ActiveDirectory=t;n.AppInsights=r;n.Automation=u;n.AvailabilitySet=f;n.Backlog=e;n.Backup=
o;n.BillingHub=s;n.BlobBlock=h;n.BlobPage=c;n.Branch=l;n.Browser=a;n.Bug=v;n.Builds=y;n.Cache=p;n.Certificate=
w;n.Chart=b;n.ClearDBDatabase=k;n.Clock=d;n.CloudService=g;n.Code=nt;n.Commit=tt;n.Controls=it;n.ControlsHorizontal=
rt;n.Counter=ut;n.Cubes=ft;n.CustomDomain=et;n.Database=ot;n.Discs=st;n.ErrorIcon=ht;n.Extensions=ct;
n.DevConsole=lt;n.Download=at;n.File=vt;n.Files=yt;n.FolderBlank=pt;n.FolderCube=wt;n.FolderWebsite=
bt;n.Ftp=kt;n.Gear=dt;n.Globe=gt;n.GlobeError=ni;n.GlobeSuccess=ti;n.GlobeWarning=ii;n.Grid=ri;n.Guide=
ui;n.Heart=fi;n.Image=ei;n.Info=oi;n.InputOutput=si;n.IpAddress=hi;n.JourneyHub=ci;n.Key=li;n.LaunchPortal=
ai;n.LoadBalancer=vi;n.LoadTest=yi;n.Location=pi;n.Log=wi;n.LogDiagnostics=bi;n.LogStreaming=ki;n.ManagementPortal=
di;n.Media=gi;n.MediaFile=nr;n.Mobile=tr;n.Module=ir;n.Monitoring=rr;n.NetworkInterfaceCard=ur;n.Notification=
fr;n.Power=er;n.Powershell=or;n.PowerUp=sr;n.ProcessExplorer=hr;n.Preview=cr;n.ProductionReadyDb=lr;
n.ResourceDefault=ar;n.ResourceGroup=vr;n.ResourceGroupList=yr;n.ResourceLinked=pr;n.ResourceList=wr;
n.ResourceRole=br;n.Scale=kr;n.Search=dr;n.SearchGrid=gr;n.ServerFarm=nu;n.SqlDatabase=tu;n.SqlDataBaseServer=
iu;n.SSD=ru;n.SslCustomDomains=uu;n.Storage=fu;n.StorageAzureFiles=eu;n.StorageContainer=ou;n.StorageQueue=
su;n.Store=hu;n.Support=cu;n.Table=lu;n.TeamProject=au;n.TfsVcRepository=vu;n.Toolbox=yu;n.TrafficManager=
pu;n.Versions=wu;n.VirtualMachine=bu;n.VirtualNetwork=ku;n.WebEnvironment=du;n.WebHosting=gu;n.WebJobs=
nf;n.Website=tf;n.WebsitePower=rf;n.WebsiteStaging=uf;n.WebSlots=ff;n.WebTest=ef;n.Workflow=of;n.PolyTrafficManagerDisabled=
sf;n.PolyTrafficManagerEnabled=hf;n.TrafficManagerDisabled=cf;n.TrafficManagerEnabled=lf;n.QuickStart=
af}(pf=t.Polychromatic||(t.Polychromatic={})),function(n){function t(n){return new i(158,n)}function r(
n){return new i(55,n)}function u(n){return new i(56,n)}function f(n){return new i(221,n)}function e(
n){return new i(57,n)}function o(n){return new i(169,n)}function s(n){return new i(273,n)}function h(
n){return new i(58,n)}function c(n){return new i(289,n)}function l(n){return new i(247,n)}function a(
n){return new i(59,n)}function v(n){return new i(217,n)}function y(n){return new i(257,n)}function p(
n){return new i(282,n)}function w(n){return new i(281,n)}function b(n){return new i(284,n)}n.Chevron=
t;n.Close=r;n.Collapse=u;n.CornerCheck=f;n.DefaultBlade=e;n.Dots=o;n.HeaderDots=s;n.Maximize=h;n.Minimize=
c;n.Gear=l;n.Restore=a;n.PreviewBadge=v;n.TripleArrow=y;n.ArrowWideUp=p;n.ArrowWideDown=w;n.Trash=b;
var k;(function(n){function t(n){return new i(127,n)}function r(n){return new i(129,n)}function u(n)
{return new i(128,n)}function f(n){return new i(126,n)}function e(n){return new i(92,n)}function o(n)
{return new i(125,n)}n.Home=t;n.Alerts=r;n.Journey=u;n.Browse=f;n.Billing=e;n.Create=o})(k=n.JumpBar||
(n.JumpBar={}))}(wf=t.Shell||(t.Shell={})),function(n){function t(n){return new i(89,n)}function r(n)
{return new i(292,n)}function u(n){return new i(90,n)}function f(n){return new i(6,n)}function e(n){
return new i(252,n)}function o(n){return new i(78,n)}function s(n){return new i(7,n)}function h(n){return new
i(88,n)}function c(n){return new i(131,n)}function l(n){return new i(8,n)}function a(n){return new i(
91,n)}function v(n){return new i(9,n)}n.Canceled=t;n.Critical=r;n.Disabled=u;n.Error=f;n.Failed=e;n.
Info=o;n.None=s;n.Pending=h;n.Stopped=c;n.Success=l;n.Unknown=a;n.Warning=v;var y;(function(n){function t(
n){return new i(293,n)}function r(n){return new i(170,n)}function u(n){return new i(253,n)}function f(
n){return new i(171,n)}function e(n){return new i(175,n)}function o(n){return new i(172,n)}function s(
n){return new i(209,n)}function h(n){return new i(238,n)}function c(n){return new i(173,n)}n.Critical=
t;n.Error=r;n.Failed=u;n.Info=f;n.Stopped=e;n.Success=o;n.Unknown=s;n.Update=h;n.Warning=c})(y=n.Outline||
(n.Outline={}))}(bf=t.StatusBadge||(t.StatusBadge={})),function(n){function t(){return new i(1e3,{isLogo:
!0})}function r(){return new i(1001,{isLogo:!0})}function u(){return new i(1002,{isLogo:!0})}function f(
){return new i(1003,{isLogo:!0})}function e(){return new i(1004,{isLogo:!0})}function o(){return new
i(1005,{isLogo:!0})}function s(){return new i(1006,{isLogo:!0})}function h(){return new i(1007,{isLogo:
!0})}function c(){return new i(1008,{isLogo:!0})}function l(){return new i(1009,{isLogo:!0})}function a(
){return new i(1010,{isLogo:!0})}function v(){return new i(1011,{isLogo:!0})}function y(){return new
i(1012,{isLogo:!0})}function p(){return new i(1013,{isLogo:!0})}function w(){return new i(1014,{isLogo:
!0})}function b(){return new i(1015,{isLogo:!0})}function k(){return new i(1016,{isLogo:!0})}function d(
){return new i(1017,{isLogo:!0})}function g(){return new i(1018,{isLogo:!0})}function nt(){return new
i(1019,{isLogo:!0})}function tt(){return new i(1020,{isLogo:!0})}function it(){return new i(1021,{isLogo:
!0})}function rt(){return new i(1022,{isLogo:!0})}function ut(){return new i(1023,{isLogo:!0})}function ft(
){return new i(1024,{isLogo:!0})}n.CollectionPartWithRollup=t;n.CollectionSummary=r;n.DonutChart=u;n.
DonutChartPartial=f;n.Extensions=e;n.GridWithMoreData=o;n.Map=s;n.MultiLineChartMultiTrendLine=h;n.MultiScatterChart=
c;n.MultiStackedBarChart=l;n.MutliLineChart=a;n.PricingTier=v;n.QuotaGauge=y;n.ResourceMap=p;n.SingleAreaChart=
w;n.SingleAreaChartSingleThreshold=b;n.SingleAreaChartSingleTrendline=k;n.SingleBarChartLarge=d;n.SingleBarChartSmall=
g;n.SingleLineChart=nt;n.SingleScatterChart=tt;n.SingleScatterSingleThreshold=it;n.SingleValueGauge=
rt;n.SplitBarChart=ut;n.StackedAreaChart=ft}(kf=t.PartGallery||(t.PartGallery={}))})(i=t.Images||(t.
Images={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){"use strict";
var t=function(){function n(n,t,i){this.key=n;this.data=t;this.lastAccessed=i}return n}(),i=function(
){function n(n){this._itemsAsMap={};this._capacity=n?n:0;this.clear()}return Object.defineProperty(n.
prototype,"count",{get:function(){return this._count},enumerable:!0,configurable:!0}),n.prototype.addOrUpdate=
function(n,t){this._addOrUpdate(n,t)&&this.trim()},n.prototype._addOrUpdate=function(n,i){var r=this.
_retrieveItem(n);return r?(r.data=i,!1):(r=new t(n,i,this._lastAccessed++),this._itemsAsMap[n]=r,this.
_count++,!0)},n.prototype.contains=function(n){return!!this._retrieveItem(n)},n.prototype._getItemList=
function(){for(var i=[],t=Object.keys(this._itemsAsMap),n=0;n<t.length;n++)i.push(this._itemsAsMap[t[
n]]);return i},n.prototype.trim=function(n){n===void 0&&(n=this._capacity);var t,i;if(n<0)throw new Error(
"Capacity cannot be negative.");else if(n>0&&n<this._count)for(t=this._getItemList(),t.sort(function(
n,t){return t.lastAccessed-n.lastAccessed}),i=n;i<t.length;i++)this.remove(t[i].key)},n.prototype.getOrAdd=
function(n,t){var r=this._retrieveItem(n,!t),i;return r?i=r.data:(i=t(n),this.addOrUpdate(n,i)),i},n.
prototype.get=function(n){var t=this._retrieveItem(n);return t?t.data:null},n.prototype.remove=function(
n){this._itemsAsMap[n]&&(delete this._itemsAsMap[n],this._count--)},n.prototype.clear=function(){this.
_itemsAsMap={};this._count=0;this._lastAccessed=0},n.prototype.getList=function(){var n=this._getItemList(
);return n.sort(function(n,t){return t.lastAccessed-n.lastAccessed}),n.map(function(n){return n.data}
)},n.prototype.merge=function(n,t){var r=this,i=this._getItemList().concat(n._getItemList());i.sort(
function(n,i){return t(i.data,n.data)});this.clear();i.forEach(function(n){r._addOrUpdate(n.key,n.data)}
);this.trim()},n.prototype._retrieveItem=function(n,t){t===void 0&&(t=!1);var i=this._itemsAsMap[n];
if(i)i.lastAccessed=this._lastAccessed++;else if(t)throw new Error("Unable to find item with key: '{0}'.".
format(n));return i},n}();n.LruMap=i})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={}));ExtensionStatusCode=
MsPortalFx.Internal.Extension.ExtensionStatusCode,function(n){var t;(function(t){var i;(function(i){
"use strict";function w(n){return v.first(function(t){return t===n})?!1:!0}function b(){n.Internal.Extension.
getRuntime().disableAjaxServerVersionCheck()}function c(n){return u.ajax(n)}function k(n){return u.cachedAjax(
n)}function d(n,t){return u.postJSON(n,t)}function g(n){n&&delete n[r.cacheTag]}function nt(n,i){return t.
Utilities.extend(n,{"x-ms-cache-tag":i})}function tt(n){u.initialize(e.version,n,e.extensionFlags,e.
effectiveLocale)}function it(){u.skipVersionCheck=!0}var l=window,f=n.Helpers,e=l.fx.environment,r={
effectiveLocale:"x-ms-effective-locale",authN:"Authorization",cacheControl:"Cache-Control",loggedOut:
"x-ms-force-login",pragma:"Pragma",sessionId:"x-ms-client-session-id",requestId:"x-ms-client-request-id",
version:"x-ms-version",versionMismatch:"x-ms-version-mismatch",extensionFlags:"x-ms-extension-flags",
cacheTag:"x-ms-cache-tag"},a=10,v=[404],s="no-cache",y=function(n){var i=n.getResponseHeader(r.pragma),
t;return i===s?!0:(t=n.getResponseHeader(r.cacheControl)||"",t.indexOf(s)>=0)?!0:!1},o=function(n,t,
i){n[t]===undefined&&(n[t]=i)},p,h,u;(function(n){n[n.Continue=100]="Continue";n[n.SwitchingProtocols=
101]="SwitchingProtocols";n[n.Ok=200]="Ok";n[n.Created=201]="Created";n[n.Accepted=202]="Accepted";n[
n.NonAuthoritativeInformation=203]="NonAuthoritativeInformation";n[n.NoContent=204]="NoContent";n[n.
ResetContent=205]="ResetContent";n[n.PartialContent=206]="PartialContent";n[n.Ambiguous=300]="Ambiguous";
n[n.MultipleChoices=300]="MultipleChoices";n[n.Moved=301]="Moved";n[n.MovedPermanently=301]="MovedPermanently";
n[n.Found=302]="Found";n[n.Redirect=302]="Redirect";n[n.RedirectMethod=303]="RedirectMethod";n[n.SeeOther=
303]="SeeOther";n[n.NotModified=304]="NotModified";n[n.UseProxy=305]="UseProxy";n[n.Unused=306]="Unused";
n[n.RedirectKeepVerb=307]="RedirectKeepVerb";n[n.TemporaryRedirect=307]="TemporaryRedirect";n[n.BadRequest=
400]="BadRequest";n[n.Unauthorized=401]="Unauthorized";n[n.PaymentRequired=402]="PaymentRequired";n[
n.Forbidden=403]="Forbidden";n[n.NotFound=404]="NotFound";n[n.MethodNotAllowed=405]="MethodNotAllowed";
n[n.NotAcceptable=406]="NotAcceptable";n[n.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired";
n[n.RequestTimeout=408]="RequestTimeout";n[n.Conflict=409]="Conflict";n[n.Gone=410]="Gone";n[n.LengthRequired=
411]="LengthRequired";n[n.PreconditionFailed=412]="PreconditionFailed";n[n.RequestEntityTooLarge=413]=
"RequestEntityTooLarge";n[n.RequestUriTooLong=414]="RequestUriTooLong";n[n.UnsupportedMediaType=415]=
"UnsupportedMediaType";n[n.RequestedRangeNotSatisfiable=416]="RequestedRangeNotSatisfiable";n[n.ExpectationFailed=
417]="ExpectationFailed";n[n.UpgradeRequired=426]="UpgradeRequired";n[n.InternalServerError=500]="InternalServerError";
n[n.NotImplemented=501]="NotImplemented";n[n.BadGateway=502]="BadGateway";n[n.ServiceUnavailable=503]=
"ServiceUnavailable";n[n.GatewayTimeout=504]="GatewayTimeout";n[n.HttpVersionNotSupported=505]="HttpVersionNotSupported"}
)(i.HttpStatusCode||(i.HttpStatusCode={}));p=i.HttpStatusCode;i.disableAjaxServerVersionCheck=b,function(
i){function h(){u=new i.AjaxCaller}var s=function(){function i(){this.ajaxStatus=ko.observable({code:
0});this.initialized=f.Deferred();this.errorCounter=0}return i.prototype.initialize=function(n,t,i,r)
{this.version=n;this.effectiveLocale=r;this.currentGetAuthorizationTokenFunc=t;i&&typeof i=="object"&&
Object.keys(i).length&&(this.extensionFlagsValue=JSON.stringify(i));this.initialized.resolve()},i.prototype.
postJSON=function(n,t){return n.contentType="application/json",n.data=JSON.stringify(t),n.type="POST",
this.ajax(n)},i.prototype.ajax=function(i){var u=this,s,h;return(i.url=i.uri||i.url,s=f.Deferred(),i.
useRawAjax)?(this.ajaxWorker(i,s),s.promise()):(h=!t.Resources.isUriAbsolute(i.url),i.setAuthorizationHeader===
undefined&&(i.setAuthorizationHeader=h),i.checkVersion===undefined&&(i.checkVersion=h,this.skipVersionCheck&&
(i.checkVersion=!1)),this.initialized.then(function(){var t=function(t){var f=i.headers||{};i.setAuthorizationHeader&&
(f[r.authN]=t);o(f,r.effectiveLocale,u.effectiveLocale);o(f,r.requestId,n.Util.newGuid());o(f,r.sessionId,
e.sessionId);i.checkVersion&&u.version&&o(f,r.version,u.version);h&&u.extensionFlagsValue&&(f[r.extensionFlags]=
u.extensionFlagsValue);i.headers=f;u.ajaxWorker(i,s)};i.setAuthorizationHeader?u.currentGetAuthorizationTokenFunc(
).then(function(n){t(n)},function(n){u.signOut("Get authorization token failed.");s.reject(null,"Failed to get authorization token.",
n)}):t(null)}),s.promise())},i.prototype.cachedAjax=function(n){var i=f.Deferred();return n.headers=
t.Utilities.extend({"x-ms-cache-tag":'"0"'},n.headers),c(n).then(function(n,t,u){i.resolve({cachedAjax:
!0,data:n,modified:t==="success",textStatus:t,cacheTagValue:u.status===200?u.getResponseHeader(r.cacheTag):
null,jqXHR:u},t,u)},function(n,t,r){i.reject(n,t,r)}),i.promise()},i.prototype.ajaxWorker=function(n,
t){var i=this,u;this.shouldStall||(u=f.ajax(n),u.always(function(){var f,e,o,s;if(n.checkVersion&&y(
u)&&(f=u.getResponseHeader(r.versionMismatch),f||u.status!==400||(e=u.getResponseHeader(r.version),o=
n.headers[r.version],e&&e!==o&&(f=e)),f&&(i.shouldStall=!0,i.ajaxStatus({code:1,message:f}))),u.getResponseHeader(
r.loggedOut)&&i.signOut("Received logged out header from server."),!i.shouldStall)switch(u.state()){
case"resolved":i.errorCounter&&(i.errorCounter=0,i.ajaxStatus({code:0}));u.then(function(n,i,r){t.resolve(
n,i,r)});break;case"rejected":w(u.status)&&(i.errorCounter++,i.errorCounter>=a&&(s=i.errorCounter+"",
i.errorCounter=0,i.ajaxStatus({code:3,message:s})));u.then(null,function(i,r,f){n.detailedError?t.reject(
i,r,{error:f,responseText:u.responseText}):t.reject(i,r,f)})}}))},i.prototype.signOut=function(n){this.
shouldStall=!0;this.ajaxStatus({code:2,message:n})},i}();i.AjaxCaller=s;i.reset=h}(h=i.Internal||(i.
Internal={}));u=new h.AjaxCaller;i.ajax=c;i.cachedAjax=k;i.postJSON=d;i.invalidateCacheHeader=g;i.setCacheHeader=
nt;i.initialize=tt;i.status=ko.computed(function(){return u.ajaxStatus()});i.disableVersionCheck=it;
$.ajaxTransport("+binary",function(n,t,i){if(n.dataType&&n.dataType==="binary")return{send:function(
t,i){var r=new XMLHttpRequest,f=n.url,e=n.type,o=n.data||null,u;r.addEventListener("load",function()
{var t={};t[n.dataType]=r.response;i(r.status,r.statusText,t,r.getAllResponseHeaders())});r.open(e,f,
!0);r.responseType="blob";for(u in t)r.setRequestHeader(u,t[u]);r.send(o)},abort:function(){i.abort(
)}}})})(i=t.Net||(t.Net={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;
(function(t){var i;(function(t){"use strict";function r(){i.warning("MsPortalFx.Portal.Version.disableAjaxServerVersionCheck() is deprecated, please use MsPortalFx.Base.Net.disableAjaxServerVersionCheck()");
n.Internal.Extension.getRuntime().disableAjaxServerVersionCheck()}var i=new n.Base.Diagnostics.Log("MsPortalFx/Base/Net");
t.disableAjaxServerVersionCheck=r})(i=t.Version||(t.Version={}))})(t=n.Portal||(n.Portal={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){"use strict";function k(n){var t,
r,e,u,f,i;c={};for(t in n)if(n.hasOwnProperty(t)){for(r=t.split("_"),e=r.length,i=c,f=0;f<e-1;f++){if(
u=r[f],!u)throw new Error("Resource key '"+t+"' is not in the correct format.");i=i[u]=i[u]||{}}i[r[
e-1]]=n[t]}}function y(n,t){var r,u,c,l;for(n||(n=o.fx.environment),v=n.applicationPath,f=n.contentUriBasePath,
e=n.contentVersionToken,i=n.versionedContentRoots,f||(f="/"),i||(i=[]),e||(e=""),u=0;u<i.length;u++)
r=i[u].toLowerCase(),r.charAt(0)==="/"&&(r=r.substr(1)),i[u]=r;h&&(t=t||h.getResources("MsPortalFx.Resources.Strings")||
{},c=h.getResources("MsPortalFx.Resources.Regions")||{},c.formats&&o.Date.setLocaleValues&&o.Date.setLocaleValues(
c.formats));b=t=t||{};l=[];n.isRtl&&l.push("rtl=true");s=l.join("&");k(t)}function d(n,t){var i=null,
r={};for(i in n)n.hasOwnProperty(i)&&typeof n[i]=="string"&&(r[i]=t(n[i]));return r}function g(n){return d(
n,function(n){return p(u("Content/Images",n))})}function nt(n){if(!n)throw new Error("Control must be specified.");
for(var r=n.split("."),u,t=c,i=0;i<r.length;i++)if(u=r[i],t=t[u],!t)throw new Error("Control "+n+" is not recognized.");
return w.clone(t,!0)}function r(n){return n.indexOf("://")!==-1||n.charAt(0)==="/"&&n.charAt(1)==="/"}
function u(){for(var f,t,i,n,e=[],u=0;u<arguments.length;u++)e[+u]=arguments[u];for(f=arguments.length,
t="",i=0;i<f;i++)n=arguments[i],n&&(t!==""&&(n.charAt(0)==="/"&&(n=n.substr(1)),t+="/"),i!==f-1&&n.charAt(
n.length-1)==="/"&&(n=n.substr(0,n.length-1)),t+=n);return r(t)||t.charAt(0)==="/"||(t="/"+t),t}function l(
n,t,o){var a,y,c,l,h;if(n=n||"",n.charAt(0)==="/"&&(n=n.substr(1)),i)for(a=n.toLowerCase(),y=0;y<i.length;
y++)if(c=i[y],a.indexOf(c)===0&&(a.length===c.length||a.charAt(c.length)==="/")){l=c;break}if(t===1||
t===2){if(r(n)){h="The '{0}' URI is not a valid content URI because it is an absolute URI.";throw new
Error(h.format(n));}if(!l){h="The '{0}' URI is an application relative URI. However a content URI was expected. Did you mean to call getAppRelativeUri?";
throw new Error(h.format(n));}e!==""&&(n=u(n.substr(0,l.length),e,n.substr(l.length)));t===2&&s&&(n+=
n.indexOf("?")>0?"&"+s:"?"+s);n=u(f,n)}else if(!r(n)){if(l){h="The '{0}' URI is a content URI. However an application relative URI was expected. Did you mean to call getContentUri?";
throw new Error(h.format(n));}n=u(v,n)}return o&&!r(n)&&(n=u("//"+window.location.host,n)),n}function p(
n,t){return t===void 0&&(t=!0),l(n,2,t)}function tt(n){return l(n,1,!1)}function it(n){return l(n,0,
!1)}function rt(n,t){return t===void 0&&(t=!0),n=n||"",r(n)||(n=u(f,n),t&&!r(n)&&(n=u("//"+window.location.
host,n))),n}var a;(function(n){n[n.Ajax=0]="Ajax";n[n.Script=1]="Script";n[n.Image=2]="Image"})(a||(a=
{}));var o=window,w=n.Base.Utilities,v,h=o.Resources,f,e,i,s,c={},b;t.initialize=y;t.getImages=g;t.getStrings=
nt;t.isUriAbsolute=r;t.getContentUri=p;t.getScriptUri=tt;t.getAppRelativeUri=it;t.getVersionlessContentUri=
rt;y()})(i=t.Resources||(t.Resources={}))})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(){"use strict"})(t=n.Base||(n.Base={}))}(MsPortalFx||(MsPortalFx={})),function(n)
{var t;(function(n){var t;(function(n){"use strict";var t=window,f=t.fx&&t.fx.environment?t.fx.environment.
isDevelopmentMode:!1,e=t.fx&&t.fx.environment&&t.fx.environment.trace?t.fx.environment.trace.lifetime:
!1,i=f||e,u=f&&e,r=function(n){if(i)throw new Error(n);},o=function(){var n=new Error;if(!n.stack)try{
throw new Error;}catch(t){n=t}return n.stack||""},h=Array.prototype.slice,s=function(){function n(){
this._disposables=[];this._isDisposed=!1;this._isDisposing=!1;this._container=null;this._children=[];
this._failToDispose=[];u&&(this._diagnosticCreateStack=o())}return n.setDevMode=function(n){i=n},n.setDiagnosticMode=
function(n){n?(i=!0,u=!0):u=!1},n.prototype.registerForDispose=function(n){var i=this,t;return t=Array.
isArray(n)?n:[n],t.forEach(function(n){i._registerForDispose(n)}),this},n.prototype.createChildLifetime=
function(){var t=new n;return t._container=this,this._children.push(t),t},n.prototype.dispose=function(
){var f=this,n=null,t=[],u=null;this._isDisposed||(this._isDisposed=!0,this._isDisposing=!0,[this._disposables,
this._children].forEach(function(r){while(r.length>0)try{n=r.pop();n.dispose()}catch(u){i&&(t.push(u),
f._failToDispose.push(n))}}),t.length>0&&r("error to disposing this lifetimeManager. Exceptions: "+t.
map(function(n){return n.toString()}).join("\n")),this._container&&(u=this._container,this._container=
null,u._unregisterChildForDispose(this)),this._isDisposing=!1)},n.prototype._unregisterChildForDispose=
function(n){if(!this._isDisposing){var t=this._children.lastIndexOf(n);t<0?r("lifetime Manager internal error.  this._unregisterChildForDispose is called but the disposeable is not one of the child it created."):
t===this._children.length-1?this._children.pop():this._children.splice(t,1)}},n.prototype._isRegistered=
function(n){return this._disposables.lastIndexOf(n)>=0||this._children.lastIndexOf(n)>=0},n.prototype.
_registerForDispose=function(n){var t=!0;n?typeof n.dispose!="function"?(r("disposable must have a dispose method."),
t=!1):this._isDisposed&&(n.dispose(),t=!1):(r("disposable cannot be null or undefined."),t=!1);i&&this.
_isRegistered(n)&&r("Unable to add this disposable to LifetimeManager. This disposable is already included in the LifetimeManager.");
t&&this._disposables.push(n)},n}();n.TriggerableLifetimeManager=s})(t=n.Base||(n.Base={}))})(t=n.Internal||
(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict"})(t=n.Intl||
(n.Intl={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){"use strict";function o(t)
{var i=h[t];return n.Util.isNullOrUndefined(i)?null:"#"+i.substr(r.length)}function s(n){return y[n]}
function w(n){if(n.length===f)return n;if(n.length===f+1){if(n[0]==="#")return n.substr(1)}else if(n.
length===f+r.length&&n.substr(0,r.length)===r)return n.substr(r.length);return null}function b(t){var
u=w(t),i;return!n.Util.isNullOrUndefined(u)&&(i=h[r+u],!n.Util.isNullOrUndefined(i))?i:null}function k(
t){return n.Util.isNullOrUndefined(t)?0:t.length>=f?b(t):y[t]}function rt(t,i){var u=k(t),r;return n.
Util.isNullOrUndefined(u)?null:(r=d(u),i?r.map(o):r.map(s))}function d(n){return n=n%g,it[n]}function ut(
){if(n.Util.isNullOrUndefined(u)){var t=0;for(u=new Array(33),t=0;t<u.length;t++)u[t]=t}return u}function i(
t,i){var u=new Array(t&&t.length),f=t.length,r,e=n.Util.isNullOrUndefined(i)?0:i;if(i){for(r=0;r<f;r++)
u[r]=t[(r+e)%f];return u}return t}function a(n){return i(nt,n)}function v(n){return i(tt,n)}function ft(
t){return n.Util.isNullOrUndefined(c)&&(c=a().map(s)),i(c,t)}function et(t){return n.Util.isNullOrUndefined(
l)&&(l=a().map(o)),i(l,t)}function ot(t){return n.Util.isNullOrUndefined(e)&&(e=v().map(s)),i(e,t)}function st(
t){return n.Util.isNullOrUndefined(p)&&(p=v().map(o)),i(e,t)}var r="Hex_",f=6,h;(function(n){n[n.Hex_fcd116=
0]="Hex_fcd116";n[n.Hex_eb3c00=1]="Hex_eb3c00";n[n.Hex_ba141a=2]="Hex_ba141a";n[n.Hex_b4009e=3]="Hex_b4009e";
n[n.Hex_442359=4]="Hex_442359";n[n.Hex_002050=5]="Hex_002050";n[n.Hex_0072c6=6]="Hex_0072c6";n[n.Hex_008272=
7]="Hex_008272";n[n.Hex_007233=8]="Hex_007233";n[n.Hex_7fba00=9]="Hex_7fba00";n[n.Hex_a0a5a8=10]="Hex_a0a5a8";
n[n.Hex_fff100=11]="Hex_fff100";n[n.Hex_ff8c00=12]="Hex_ff8c00";n[n.Hex_e81123=13]="Hex_e81123";n[n.
Hex_ec008c=14]="Hex_ec008c";n[n.Hex_68217a=15]="Hex_68217a";n[n.Hex_00188f=16]="Hex_00188f";n[n.Hex_00bcf2=
17]="Hex_00bcf2";n[n.Hex_00b294=18]="Hex_00b294";n[n.Hex_009e49=19]="Hex_009e49";n[n.Hex_bad80a=20]=
"Hex_bad80a";n[n.Hex_bbc2ca=21]="Hex_bbc2ca";n[n.Hex_fffc9e=22]="Hex_fffc9e";n[n.Hex_ffb900=23]="Hex_ffb900";
n[n.Hex_dd5900=24]="Hex_dd5900";n[n.Hex_f472d0=25]="Hex_f472d0";n[n.Hex_9b4f96=26]="Hex_9b4f96";n[n.
Hex_4668c5=27]="Hex_4668c5";n[n.Hex_6dc2e9=28]="Hex_6dc2e9";n[n.Hex_00d8cc=29]="Hex_00d8cc";n[n.Hex_55d455=
30]="Hex_55d455";n[n.Hex_e2e584=31]="Hex_e2e584";n[n.Hex_d6d7d8=32]="Hex_d6d7d8";n[n.Hex_807900=33]=
"Hex_807900";n[n.Hex_804600=34]="Hex_804600";n[n.Hex_740912=35]="Hex_740912";n[n.Hex_760046=36]="Hex_760046";
n[n.Hex_34113d=37]="Hex_34113d";n[n.Hex_000c48=38]="Hex_000c48";n[n.Hex_005e79=39]="Hex_005e79";n[n.
Hex_084c41=40]="Hex_084c41";n[n.Hex_063d20=41]="Hex_063d20";n[n.Hex_3d460a=42]="Hex_3d460a";n[n.Hex_32383f=
43]="Hex_32383f";n[n.Hex_bfb500=44]="Hex_bfb500";n[n.Hex_bf6900=45]="Hex_bf6900";n[n.Hex_ae0d1a=46]=
"Hex_ae0d1a";n[n.Hex_b10069=47]="Hex_b10069";n[n.Hex_4e195c=48]="Hex_4e195c";n[n.Hex_00126b=49]="Hex_00126b";
n[n.Hex_008db5=50]="Hex_008db5";n[n.Hex_00856f=51]="Hex_00856f";n[n.Hex_0f5b2f=52]="Hex_0f5b2f";n[n.
Hex_8ba208=53]="Hex_8ba208";n[n.Hex_464f59=54]="Hex_464f59";n[n.Hex_fcf37e=55]="Hex_fcf37e";n[n.Hex_ffba66=
56]="Hex_ffba66";n[n.Hex_f1707b=57]="Hex_f1707b";n[n.Hex_f466ba=58]="Hex_f466ba";n[n.Hex_a47aaf=59]=
"Hex_a47aaf";n[n.Hex_6674bc=60]="Hex_6674bc";n[n.Hex_66d7f7=61]="Hex_66d7f7";n[n.Hex_66d1bf=62]="Hex_66d1bf";
n[n.Hex_66c592=63]="Hex_66c592";n[n.Hex_d6e86c=64]="Hex_d6e86c";n[n.Hex_8f9ca8=65]="Hex_8f9ca8";n[n.
Hex_fffccc=66]="Hex_fffccc";n[n.Hex_ffe8cc=67]="Hex_ffe8cc";n[n.Hex_facfd3=68]="Hex_facfd3";n[n.Hex_fbcce8=
69]="Hex_fbcce8";n[n.Hex_e1d3e4=70]="Hex_e1d3e4";n[n.Hex_ccd1e9=71]="Hex_ccd1e9";n[n.Hex_ccf2fc=72]=
"Hex_ccf2fc";n[n.Hex_ccf0ea=73]="Hex_ccf0ea";n[n.Hex_ccecdb=74]="Hex_ccecdb";n[n.Hex_f0f7b2=75]="Hex_f0f7b2";
n[n.Hex_63707e=76]="Hex_63707e";n[n.max=77]="max"})(t.AllRawColorCode||(t.AllRawColorCode={}));h=t.AllRawColorCode,
function(n){n[n.a1=0]="a1";n[n.b1=1]="b1";n[n.c1=2]="c1";n[n.d1=3]="d1";n[n.e1=4]="e1";n[n.f1=5]="f1";
n[n.g1=6]="g1";n[n.h1=7]="h1";n[n.i1=8]="i1";n[n.j1=9]="j1";n[n.k1=10]="k1";n[n.a0=11]="a0";n[n.b0=12]=
"b0";n[n.c0=13]="c0";n[n.d0=14]="d0";n[n.e0=15]="e0";n[n.f0=16]="f0";n[n.g0=17]="g0";n[n.h0=18]="h0";
n[n.i0=19]="i0";n[n.j0=20]="j0";n[n.k0=21]="k0";n[n.a2=22]="a2";n[n.b2=23]="b2";n[n.c2=24]="c2";n[n.
d2=25]="d2";n[n.e2=26]="e2";n[n.f2=27]="f2";n[n.g2=28]="g2";n[n.h2=29]="h2";n[n.i2=30]="i2";n[n.j2=31]=
"j2";n[n.k2=32]="k2";n[n.a0s2=33]="a0s2";n[n.b0s2=34]="b0s2";n[n.c0s2=35]="c0s2";n[n.d0s2=36]="d0s2";
n[n.e0s2=37]="e0s2";n[n.f0s2=38]="f0s2";n[n.g0s2=39]="g0s2";n[n.h0s2=40]="h0s2";n[n.i0s2=41]="i0s2";
n[n.j0s2=42]="j0s2";n[n.k0s2=43]="k0s2";n[n.a0s1=44]="a0s1";n[n.b0s1=45]="b0s1";n[n.c0s1=46]="c0s1";
n[n.d0s1=47]="d0s1";n[n.e0s1=48]="e0s1";n[n.f0s1=49]="f0s1";n[n.g0s1=50]="g0s1";n[n.h0s1=51]="h0s1";
n[n.i0s1=52]="i0s1";n[n.j0s1=53]="j0s1";n[n.k0s1=54]="k0s1";n[n.a0t1=55]="a0t1";n[n.b0t1=56]="b0t1";
n[n.c0t1=57]="c0t1";n[n.d0t1=58]="d0t1";n[n.e0t1=59]="e0t1";n[n.f0t1=60]="f0t1";n[n.g0t1=61]="g0t1";
n[n.h0t1=62]="h0t1";n[n.i0t1=63]="i0t1";n[n.j0t1=64]="j0t1";n[n.k0t1=65]="k0t1";n[n.a0t2=66]="a0t2";
n[n.b0t2=67]="b0t2";n[n.c0t2=68]="c0t2";n[n.d0t2=69]="d0t2";n[n.e0t2=70]="e0t2";n[n.f0t2=71]="f0t2";
n[n.g0t2=72]="g0t2";n[n.h0t2=73]="h0t2";n[n.i0t2=74]="i0t2";n[n.j0t2=75]="j0t2";n[n.k0t2=76]="k0t2";
n[n.max=77]="max"}(t.ColorCode||(t.ColorCode={}));var y=t.ColorCode,ht=window,ct=jQuery,g=11,c,l,e,p,
u,nt=[11,0,23,12,24,1,13,2,14,3,26,15,4,5,16,6,17,28,29,18,7,8,19,30,9,20,31,],tt=[17,16,15,18,19,20,
0,1,2,3,4,5,6,7,8,9,23,24,26,28,29,30,31,11,12,13,14,],it={0:[33,44,11,55,66,],1:[34,45,12,56,67,],2:
[35,46,13,57,68,],3:[36,47,14,58,69,],4:[37,48,15,59,70,],5:[38,49,16,60,71,],6:[39,50,17,61,72,],7:
[40,51,18,62,73,],8:[41,52,19,63,74,],9:[42,53,20,64,75,],10:[43,54,21,65,76,]};t.getRawColorString=
o;t.getColorCodeString=s;t.getRawColorCode=w;t.getRawColorIndex=b;t.getColorIndex=k;t.getColorCodeTintSet=
rt;t.getColorCodeTintSetIndex=d;t.getAllColorCodeIndexes=ut;t.getRotatedArray=i;t.getGradientColorCodeIndexes=
a;t.getRainbowColorCodeIndexes=v;t.getGradientColorCode=ft;t.getRawGradientColorCode=et;t.getRainbowColorCode=
ot;t.getRawRainbowColorCode=st})(t=n.ColorUtil||(n.ColorUtil={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){"use strict";var t=function(){function n(n,t,i){this.startDateTime=ko.observable(
n||null);this.endDateTime=ko.observable(t||null);this.timezoneOffset=ko.observable(i||-(new Date).getTimezoneOffset(
))}return n}();n.DateTimeRange=t})(t=n.DateUtil||(n.DateUtil={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(n){"use strict";(function(n){n[n.None=0]="None";n[n.Percentage=1]="Percentage";n[
n.Bytes=2]="Bytes";n[n.Kilobytes=3]="Kilobytes";n[n.Megabytes=4]="Megabytes";n[n.Gigabytes=5]="Gigabytes";
n[n.Terabytes=6]="Terabytes";n[n.Petabytes=7]="Petabytes";n[n.BytesPerDay=8]="BytesPerDay";n[n.BytesPerHour=
9]="BytesPerHour";n[n.BytesPerMinute=10]="BytesPerMinute";n[n.BytesPerSecond=11]="BytesPerSecond";n[
n.KilobytesPerSecond=12]="KilobytesPerSecond";n[n.MegabytesPerSecond=13]="MegabytesPerSecond";n[n.GigabytesPerSecond=
14]="GigabytesPerSecond";n[n.TerabytesPerSecond=15]="TerabytesPerSecond";n[n.PetabytesPerSecond=16]=
"PetabytesPerSecond";n[n.Count=17]="Count";n[n.Thousand=18]="Thousand";n[n.Million=19]="Million";n[n.
Billion=20]="Billion";n[n.Trillion=21]="Trillion";n[n.MicroSeconds=22]="MicroSeconds";n[n.MilliSeconds=
23]="MilliSeconds";n[n.Seconds=24]="Seconds";n[n.Minutes=25]="Minutes";n[n.Hours=26]="Hours";n[n.Days=
27]="Days";n[n.CountPerDay=28]="CountPerDay";n[n.CountPerHour=29]="CountPerHour";n[n.CountPerMinute=
30]="CountPerMinute";n[n.CountPerSecond=31]="CountPerSecond";n[n.ThousandPerSecond=32]="ThousandPerSecond";
n[n.MillionPerSecond=33]="MillionPerSecond";n[n.BillionPerSecond=34]="BillionPerSecond";n[n.TrillionPerSecond=
35]="TrillionPerSecond";n[n.Bytes_SI=36]="Bytes_SI";n[n.Kilobytes_SI=37]="Kilobytes_SI";n[n.Megabytes_SI=
38]="Megabytes_SI";n[n.Gigabytes_SI=39]="Gigabytes_SI";n[n.Terabytes_SI=40]="Terabytes_SI";n[n.Petabytes_SI=
41]="Petabytes_SI";n[n.BytesPerDay_SI=42]="BytesPerDay_SI";n[n.BytesPerHour_SI=43]="BytesPerHour_SI";
n[n.BytesPerMinute_SI=44]="BytesPerMinute_SI";n[n.BytesPerSecond_SI=45]="BytesPerSecond_SI";n[n.KilobytesPerSecond_SI=
46]="KilobytesPerSecond_SI";n[n.MegabytesPerSecond_SI=47]="MegabytesPerSecond_SI";n[n.GigabytesPerSecond_SI=
48]="GigabytesPerSecond_SI";n[n.TerabytesPerSecond_SI=49]="TerabytesPerSecond_SI";n[n.PetabytesPerSecond_SI=
50]="PetabytesPerSecond_SI"})(n.Unit||(n.Unit={}));var t=n.Unit})(t=n.UnitConversion||(n.UnitConversion=
{}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){"use strict";function u(){for(var u,
i="",n,r=0;r<4;r++)n=4294967296*Math.random()|0,i+=t[n&15]+t[n>>4&15]+t[n>>8&15]+t[n>>12&15]+t[n>>16&
15]+t[n>>20&15]+t[n>>24&15]+t[n>>28&15];return u=t[8+Math.random()*4|0],i.substr(0,8)+"-"+i.substr(9,
4)+"-4"+i.substr(13,3)+"-"+u+i.substr(16,3)+"-"+i.substr(19,12)}function f(n){return n===null||n===undefined}
function e(n,t){return n===undefined||t===undefined||n>t?undefined:Math.floor(Math.random()*(t-n+1))+
n}function o(n){return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function s(n,t,i){var
e=n,r=t,u=function(n){var t;r.hasOwnProperty(n)&&(t=r[n],t!==undefined&&(e[n]=t))},f;if(i)i.forEach(
u);else for(f in r)u(f)}function c(n,t){var i=t||n.type;return r.Event(n,{type:i,target:n.target,currentTarget:
n.currentTarget,isImmediatePropagationStopped:n.isImmediatePropagationStopped,isPropagationStopped:n.
isPropagationStopped,preventDefault:n.preventDefault,stopImmediatePropagation:n.stopImmediatePropagation,
stopPropagation:n.stopPropagation})}function l(n,t){t===void 0&&(t=0);var r=n.toFixed(t),i;if(t>0){for(
i=r.length-1;i>0&&r[i]==="0";i--);return r.substr(0,r[i]==="."?i:i+1)}return r}function a(n,t){var i=
n.indexOf(t)<0;return i&&n.push(t),!i}function v(n,t){var i=ko.observableArray(),r=ko.computed(function(
){i(t())});return i.dispose=r.dispose.bind(r),n.registerForDispose(i),i}var y=window,r=jQuery,t=["0",
"1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],h,i;n.newGuid=u;n.isNullOrUndefined=f;n.
random=e;n.regexEscape=o;n.shallowCopyFromObject=s,function(n){n[n.Alt=18]="Alt";n[n.Backslash=220]=
"Backslash";n[n.Backspace=8]="Backspace";n[n.Comma=188]="Comma";n[n.Control=17]="Control";n[n.Delete=
46]="Delete";n[n.Down=40]="Down";n[n.End=35]="End";n[n.Enter=13]="Enter";n[n.Escape=27]="Escape";n[n.
F10=121]="F10";n[n.Home=36]="Home";n[n.Left=37]="Left";n[n.PageDown=34]="PageDown";n[n.PageUp=33]="PageUp";
n[n.Period=190]="Period";n[n.Right=39]="Right";n[n.Shift=16]="Shift";n[n.Slash=191]="Slash";n[n.Space=
32]="Space";n[n.Tab=9]="Tab";n[n.Up=38]="Up";n[n.A=65]="A";n[n.B=66]="B";n[n.C=67]="C";n[n.D=68]="D";
n[n.E=69]="E";n[n.F=70]="F";n[n.G=71]="G";n[n.H=72]="H";n[n.I=73]="I";n[n.J=74]="J";n[n.K=75]="K";n[
n.L=76]="L";n[n.M=77]="M";n[n.N=78]="N";n[n.O=79]="O";n[n.P=80]="P";n[n.Q=81]="Q";n[n.R=82]="R";n[n.
S=83]="S";n[n.T=84]="T";n[n.U=85]="U";n[n.V=86]="V";n[n.W=87]="W";n[n.X=88]="X";n[n.Y=89]="Y";n[n.Z=
90]="Z";n[n.Num0=48]="Num0";n[n.Num1=49]="Num1";n[n.Num2=50]="Num2";n[n.Num3=51]="Num3";n[n.Num4=52]=
"Num4";n[n.Num5=53]="Num5";n[n.Num6=54]="Num6";n[n.Num7=55]="Num7";n[n.Num8=56]="Num8";n[n.Num9=57]=
"Num9"}(n.KeyCode||(n.KeyCode={}));h=n.KeyCode;n.cloneEvent=c;n.toNiceFixed=l;n.existsOrRegisterId=a;
n.thunkArray=v;i=function(){function n(n){var t=ko.observable(0),i=n?n:{rateLimit:30};t.extend(i);this.
_value=t}return Object.defineProperty(n.prototype,"value",{get:function(){return this._value},enumerable:
!0,configurable:!0}),n.prototype.touch=function(){this._value(this._value.peek()+1&65535)},n}();n.KnockoutDelayTrigger=
i})(t=n.Util||(n.Util={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){var i;(function(
t){"use strict";function f(n,t){return n&&t[n.name.namespaceIndex]+"."+n.name.name}function e(n){return n?
i[n]:null}function o(n,t){var i=s(n,t);return i&&i.itemType||null}function a(n,t){return e(o(n,t))}function s(
n,t){var i=typeof n=="string"?e(n):n;return i&&i.properties&&i.properties[t]}function v(n,t){var i=s(
n,t);return!!(i&&i.isArray)}function y(n){var i=[],t;if(n&&n.properties)for(t in n.properties)n.properties.
hasOwnProperty(t)&&i.push(t);return i}function d(n){var i=typeof n=="string"?t.getTypeMetadata(n):n;
return i&&i.idProperties&&i.idProperties.length>0}function g(n,i){for(var h=typeof i=="string"?t.getTypeMetadata(
i):i,e=p(h),o,r,s=[],f=0;f<e.length;f++){if(o=e[f],r=u(n[o]),r===undefined)return undefined;r===null&&
(r=k);s.push(r)}return s.join(",")}function p(n){var i=typeof n=="string"?t.getTypeMetadata(n):n;return i&&
i.idProperties?i.idProperties:null}function nt(n,t){r(n,t,{visitArray:function(n,t){h.data(n,l,t)}})}
function r(n,t,i){if(t)if(Array.isArray(u(n)))i.visitArray&&i.visitArray(n,t),u(n).forEach(function(
n){r(n,t,i)});else if(c.isObject(n))for(var f in n)n.hasOwnProperty(f)&&r(n[f],o(t,f),i)}function tt(
n){return h.data(n,l)}function w(n){var t=typeof n=="string"?i[n]:n,r={},u;return t&&(u=y(t),u.forEach(
function(n){var i=a(t,n),u=v(t,n);if(u)r[n]=ko.observableArray();else if(!i||i.entityType)r[n]=ko.observable(
);else if(i.name)r[n]=ko.observable(w(i.name));else throw new Error("Cannot create entity.");})),r}function it(
n){return n&&n.entityType}function b(n,t){t&&!t.name&&(t=c.clone(t),t.name=n);i[n]=t}function rt(n){
for(var i,t,f=(n+"Type").split("."),r=window,e=f.length-1,u=0;u<f.length;u++){if(i=f[u],t=r[i],u===e)
{if(t!==n){if(t!==undefined)throw new Error("Cannot create namespace for '{0}' because it already exists.".
format(n));r[i]=n}}else if(typeof t!="object"){if(t!==undefined)throw new Error("Cannot create namespace for '{0}' at the segment '{1}' because it already exists.".
format(n,i));t={};r[i]=t}r=t}}function ut(n){var t=n.namespaces,r=n.metadata,u=r.map(function(n){var
e={},i,u;rt(f(n,t));for(i in n.properties)u=n.properties[i].typeIndex,e[i]={isArray:!!n.properties[i].
isArray,isDate:!!n.properties[i].isDate,itemType:u===-1?null:f(r[u],t),trackEdits:!!n.properties[i].
trackEdits,persistEdits:!!n.properties[i].persistEdits};return{name:f(n,t),properties:e,idProperties:
n.idProperties,entityType:n.entityType,hasGloballyUniqueId:n.hasGloballyUniqueId}}),i=n.rootTypeIndex;
return u.forEach(function(n){b(n.name,n)}),typeof i=="number"&&i>=0&&u[i]||null}var h=n.Helpers,c=n.
Base.Utilities,l="aux-type",k="NULL-VALUED-ID-PROPERTY",i={},u=ko.utils.unwrapObservable,ft;t.getTypeMetadata=
e;t.getPropertyType=o;t.getPropertyTypeMetadata=a;t.getPropertyMetadata=s;t.getPropertyCardinality=v;
t.getProperties=y;t.typeHasId=d;t.getItemId=g;t.getIdPropertyNames=p;t.decorateWithType=nt;t.visitTypedData=
r;t.getArrayItemType=tt;t.createEmptyObject=w;t.typeIsEntityType=it;t.setTypeMetadata=b;t.setTypesMetadata=
ut,function(n){function t(){i={}}n.clearAllTypesMetadata=t}(ft=t.Internal||(t.Internal={}))})(i=t.Metadata||
(t.Metadata={}))})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
){"use strict"})(t=n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n)
{"use strict";(function(n){n[n.Unsorted=0]="Unsorted";n[n.Ascending=1]="Ascending";n[n.Descending=2]=
"Descending"})(n.SortOrder||(n.SortOrder={}));var t=n.SortOrder})(t=n.Data||(n.Data={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(n){"use strict";var t=function(){function n(){this._resetListeners=
[]}return n.prototype.resetNavigation=function(){var n=this._resetListeners.map(function(n){return n(
)});return Q.all(n)},n.prototype.addResetNavigationListener=function(n){if(this._resetListeners.indexOf(
n)>=0)throw new Error("This callback is already registered.");this._resetListeners.push(n)},n.prototype.
removeResetNavigationListener=function(n){var t=this._resetListeners.indexOf(n);if(t<0)throw new Error(
"This callback is not registered.");this._resetListeners.splice(t,1)},n}();n.DataNavigatorBase=t})(t=
n.Data||(n.Data={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){"use strict";(function(
n){n[n.None=0]="None";n[n.Create=1]="Create";n[n.Picker=2]="Picker";n[n.Form=3]="Form";n[n.Filter=4]=
"Filter";n[n.Delete=5]="Delete";n[n.Generic=6]="Generic"})(n.ActionBarKind||(n.ActionBarKind={}));var
t=n.ActionBarKind})(t=n.Extension||(n.Extension={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;
(function(n){"use strict";(function(n){n[n.ServiceViewModel=0]="ServiceViewModel";n[n.ResourceType=1]=
"ResourceType";n[n.AssetTypeBlade=2]="AssetTypeBlade";n[n.NoBrowse=-1]="NoBrowse"})(n.BrowseType||(n.
BrowseType={}));var t=n.BrowseType})(t=n.Extension||(n.Extension={}))}(MsPortalFx||(MsPortalFx={})),
function(n){var t;(function(n){"use strict";(function(n){n[n.Standard=0]="Standard";n[n.Url=1]="Url";
n[n.Blade=2]="Blade";n[n.FileDownload=3]="FileDownload";n[n.List=4]="List"})(n.CommandKind||(n.CommandKind=
{}));var t=n.CommandKind})(t=n.Extension||(n.Extension={}))}(MsPortalFx||(MsPortalFx={})),function(n)
{var t;(function(t){var i;(function(t){"use strict";function r(t,i){return n.Base.Amd.load(t).then(function(
n){return i(n)},function(n){return new Error(n.message)})}function f(n){i=n}function e(){return i}var
i,u=function(){function t(){}return t.prototype.setDataContext=function(t){if(!!this._dataContextAsyncFactory)
throw new Error("This data context container is configured to load the data context from a AMD module");
n.Base.ProxiedObservables.markNonSerializable(t);this._dataContext=t},Object.defineProperty(t.prototype,
"dataContext",{get:function(){return this._dataContext},enumerable:!0,configurable:!0}),t.prototype.
setDataContextFactory=function(n,t,i){if(!!this._dataContext)throw new Error("The data context has already been initialized.  Factory is not needed.");
i&&(n=i.normalize(n));this._dataContextAsyncFactory=function(){return r(n,t)}},t.prototype.loadViewModelAsync=
function(t,i,u){var f=this,e;return u&&(t=u.normalize(t)),e=function(){return r(t,i)},!this._dataContext&&
this._dataContextAsyncFactory?(this._dataContextCreatePromise||(this._dataContextCreatePromise=this.
_dataContextAsyncFactory(),this._dataContextCreatePromise.then(function(t){n.Base.ProxiedObservables.
markNonSerializable(t);f._dataContext=t;f._dataContextCreatePromise=undefined;f._dataContextAsyncFactory=
undefined})),this._dataContextCreatePromise.then(function(){return e()})):e()},t}();t.ViewModelAreaFactoriesBase=
u;t.setRuntime=f;t.getRuntime=e})(i=t.Extension||(t.Extension={}))})(t=n.Internal||(n.Internal={}))}
(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){"use strict";function f(t){var f,e,o;if(
n.Base.Utilities.isNullOrUndefined(t)){f="The manifest is null or undefined for the extension at URL: {0}.".
format(u.location.href)+"\r\nPossible reasons for the failure:\r\n - You passing an invalid manifest to the MsPortalFx.Extension.register/MsPortalFx.Extension.registerAmd call that is used to register your extension with the portal.\r\n - The manifest file is not included in your project.\r\n - If you are not using AMD, verify that your scipt ordering is correct so that the manifest object is being created before the call to the MsPortalFx.Extension.register/registerAmd."+
r;i.error(f);throw new Error(f);}if(n.Base.Utilities.isNullOrWhiteSpace(t.name)){e="The extension manifest should specify a valid name. This name is obtained from the <Extension> tag in PDL. "+
"\r\nExtension URL: {0}.".format(u.location.href)+"\r\nThis name should be a string and cannot be empty or whitespace. It also cannot contain the ! character. \r\nThe recommended naming convention for an extension name is to follow the pattern {Company}_{BrandOrSuite}_{ProductOrComponent} (e.g. Microsoft_Azure_Insights)."+
r;i.error(e);throw new Error(e);}if(!n.Base.Utilities.isIFrame())throw new Error("Cannot register the extension because the current window is not an iFrame: {0}.".
format(t.name));if(n.Internal.Extension.getRuntime()){o="The extension with name {0} has already been registered. ".
format(t.name)+"Ensure that you are not calling MsPortalFx.Extension.register/MsPortalFx.Extension.registerAmd multiple times within your extension.";
i.error(o);throw new Error(o);}}function o(t,u,e){var s,h,o;if(f(t),n.Base.Utilities.isNullOrWhiteSpace(
u)){s='Extension name: {0}. The EntryPointModulePath parameter must be specified  in the <Extension> element of your PDL.\r\nFor example:\r\n<Extension Name="SamplesExtension" Version="1.0" EntryPointModulePath="Program">\r\n    <TypeScript Namespace="SamplesExtension" />\r\n<\/Extension>.'+
r;throw new Error(s.format(t.name));}i.debug("registerAmd() called for extension {0}".format(t.name));
e&&(u=e.normalize(u));h=function(){return n.Base.Amd.load(u).then(function(n){return n.create()})};o=
new n.Internal.Extension.RuntimeImpl(t,h);o.register();n.Internal.Extension.setRuntime(o)}function s(
t,u){var o,e;if(f(t),!u||typeof u!="function"){o="Extension name: {0}. The createEntryPoint parameter was not specified or is not a function.\r\nThe MsPortalFx.Extension.register call in your extension's Program.ts should pass function in the createEntryPoint parameter that returns a new instance of the extension's EntryPoint class."+
r;throw new Error(o.format(t.name));}i.debug("register() called for extension {0}".format(t.name));e=
new n.Internal.Extension.RuntimeImpl(t,function(){return $.Deferred().resolve(u()).promise()});e.register(
);n.Internal.Extension.setRuntime(e)}function h(){return i.warning("MsPortalFx.Extension.getAuthorizationToken is deprecated, please use MsPortalFx.Base.Security.getAuthorizationToken"),
n.Base.Security.getAuthorizationToken()}function c(t,r){return i.warning("MsPortalFx.Extension.hasPermission is deprecated, please use MsPortalFx.Base.Security.hasPermission"),
n.Base.Security.hasPermission(t,r)}function l(){i.warning("MsPortalFx.Extension.disableAjaxServerVersionCheck is deprecated, please use MsPortalFx.Base.Net.disableAjaxServerVersionCheck");
n.Base.Net.disableAjaxServerVersionCheck()}function a(t,i,r){return Q.resolve(new n.Services.ObservableServiceClientImpl(
t,r))}function v(t,i,r,u){var e=new n.ViewModels.Internal.ContainerViewModel,o,f;if(u===!0&&(o=e,o.selectable=
n.ViewModels.Part.createSelectableViewModel(r)),f=t(i,e,r),!f)throw new Error("content was null for {0}".
format(i));return f.promise?f.then(function(t){return new n.Internal.ViewModels.CompositionViewModel(
e,t,r)}):new n.Internal.ViewModels.CompositionViewModel(e,f,r)}var u=window,i=new n.Base.Diagnostics.
Log("MsPortalFx/Extension/Extension"),r="\r\nMore information at {0}".format("https://auxdocs.azurewebsites.net/en-us/documentation/articles/portalfx-creating-extensions"),
e=function(){function n(){this.viewModelFactories=undefined;n.thunkEntryPointMethods(this)}return n.
prototype.initialize=function(){},n.prototype.dispose=function(){},n.prototype.getDefinition=function(
){throw new Error("The method 'getDefinition' is an abstract method and it is not implemented in derived class. Make sure the derived class implements the 'MsPortalFx.Extension.EntryPointContract' interface.");
},n.prototype.getViewModel=function(n,t,i){var r;if(n in this.viewModelFactories)r=this.viewModelFactories[
n](t,i);else throw new Error("Unknown view model name.");return r},n.prototype.getPartViewModel=function(
n,t,i){var r;if(n in this.viewModelFactories)r=this.viewModelFactories[n](t,i);else throw new Error(
"Unknown view model name.");return r},n.thunkEntryPointMethods=function(n){var t=n;t.initialize=n.initialize.
bind(n);t.dispose=n.dispose.bind(n);t.getDefinition=n.getDefinition.bind(n);t.getViewModel=n.getViewModel.
bind(n);t.getPartViewModel=n.getPartViewModel.bind(n);n.getObservable&&(t.getObservable=n.getObservable.
bind(n))},n}();t.EntryPointBase=e;t.registerAmd=o;t.register=s;t.getAuthorizationToken=h;t.hasPermission=
c;t.disableAjaxServerVersionCheck=l;t.getService=a;t.composeViewModel=v})(t=n.Extension||(n.Extension=
{}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(n){"use strict";(function(n){n[n.Permission=
0]="Permission";n[n.PermissionSet=1]="PermissionSet"})(n.PermissionType||(n.PermissionType={}));var t=
n.PermissionType})(t=n.Extension||(n.Extension={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;
(function(n){"use strict";(function(n){n[n.Error=0]="Error";n[n.Warning=1]="Warning";n[n.Success=2]=
"Success";n[n.Progress=3]="Progress";n[n.Info=4]="Info"})(n.NotificationMessageType||(n.NotificationMessageType=
{}));var t=n.NotificationMessageType})(t=n.Extension||(n.Extension={}))}(MsPortalFx||(MsPortalFx={})
),function(n){var t;(function(n){"use strict";(function(n){n[n.Part=0]="Part";n[n.BladeInput=1]="BladeInput";
n[n.BladeActionBar=2]="BladeActionBar";n[n.BladeProperty=3]="BladeProperty";n[n.Command=4]="Command";
n[n.Constant=5]="Constant";n[n.SelectedItem=6]="SelectedItem";n[n.Adapter=7]="Adapter"})(n.ReferenceType||
(n.ReferenceType={}));var t=n.ReferenceType})(t=n.Extension||(n.Extension={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(t){var i;(function(t){"use strict";var s=window,i=n.Base.Rpc.Internal,
f=n.Base.Net,e=n.Base.Constants.ViewModelTypes,r=n.Base.Constants,u=n.Internal.Constants.RpcMethods,
h=n.Helpers,o;t.registerManifestDefinition=new i.ActionEndPointDefinition(u.registration);t.getViewModelsDefinition=
new i.ProxiedObjectTypeDefinition(u.viewModels);t.getExtensionGalleryService=new i.ProxiedObjectTypeDefinition(
u.getExtensionGalleryServiceViewModel);t.initializeEndPoint=new i.FuncEndPointDefinition(u.entryPointInitialize);
t.disposeEndPoint=new i.ActionEndPointDefinition(u.entryPointDispose);t.getDefinitionEndPoint=new i.
FuncEndPointDefinition(u.entryPointGetDefinition);t.pingEndPoint=new i.FuncEndPointDefinition(u.ping);
t.getAuthorizationTokenEndPoint=new i.FuncEndPointDefinition(u.getAuthToken);t.getLocalGalleryPackagesEndpointsDefinition=
new i.FuncEndPointDefinition(u.getLocalGalleryPackagesEndpoints);t.registerLocalGalleryPackagesEndpointDefinition=
new i.FuncEndPointDefinition(u.registerLocalGalleryPackagesEndpoint);t.sharedObservablesEndPoint=new
i.ProxiedObjectTypeDefinition(u.provideExtensionService);t.hasPermissionsToShell=new i.FuncEndPointDefinition(
u.hasPermission);t.hasPermissionsToHubs=new i.FuncEndPointDefinition(u.hasPermissionToHubs);t.mapAssetIdToResourceIdEndPoint=
new i.FuncEndPointDefinition(u.mapAssetIdToResourceId);t.mapResourceIdToAssetIdEndPoint=new i.FuncEndPointDefinition(
u.mapResourceIdToAssetId);t.mapAssetIdToDynamicSelectionAndIconEndPoint=new i.FuncEndPointDefinition(
u.mapAssetIdToDynamicSelectionAndIcon);t.mapResourceIdToDynamicSelectionAndIconEndPoint=new i.FuncEndPointDefinition(
u.mapResourceIdToDynamicSelectionAndIcon);t.getAssetTypeInformationEndPoint=new i.FuncEndPointDefinition(
u.getAssetTypeInformation);t.getResourceTypeAssetTypeInformationEndPoint=new i.FuncEndPointDefinition(
u.getResourceTypeAssetTypeInformation);t.getResourceAssetInformationEndPoint=new i.FuncEndPointDefinition(
u.getResourceAssetInformation);o=function(){function u(u,f){var e=this;this._extensionId=u.name;this.
_manifest=u;this._entryPointDeferred=Q.defer();n.Base.Diagnostics.ErrorReporter.initialize();t.initializeEndPoint.
register(i.client,[r.Shell],function(){return f().then(function(n){e._entryPoint=n;e._initialize();e.
_entryPoint.initialize();e._entryPointDeferred.resolve(!0)})});t.disposeEndPoint.register(i.client,[
r.Shell],function(){e._entryPointDeferred.promise.isPending||(e._entryPointDeferred=Q.defer());e._entryPoint.
dispose()});t.getDefinitionEndPoint.register(i.client,[r.Shell],function(){return e._entryPoint.getDefinition(
)});t.getViewModelsDefinition.registerObjectFactory(i.client,{allowedOrigin:[r.Shell,r.ExtensionNames.
Hubs],allowRemoteChanges:!0,handler:function(n){return e.getObservable(n)}});t.getExtensionGalleryService.
registerObjectFactory(i.client,{allowedOrigin:[r.Shell,r.ExtensionNames.Hubs],allowRemoteChanges:!0,
handler:function(){return e.getGalleryServiceViewModel()}});n.Base.Rpc.Internal.start({originId:u.name,
getRouteDefinitionFunc:undefined,loadWindow:undefined})}return u.prototype.register=function(){if(this.
_registered)throw new Error("Already registered");t.registerManifestDefinition.invoke(i.client,r.Shell,
this._manifest);this._registered=!0},u.prototype._initialize=function(){var n=this,u;if(this._initialized)
throw new Error("Already initialized");t.pingEndPoint.register(i.client,[r.Shell],function(){return Q.
resolve(!0)});t.sharedObservablesEndPoint.registerObjectFactory(i.client,{allowedOrigin:null,allowRemoteChanges:
!1,handler:function(t){if(n._entryPoint.getObservable)return n._entryPoint.getObservable(t,[]);throw new
Error("No shared observables are defined");}});f.status.subscribe(function(n){t.extensionStatusEndPoint.
invoke(i.client,r.Shell,n)});f.initialize(function(){return n.getAuthorizationToken().then(function(
n){return n&&n.header})});u=s.fx.environment.localGalleryPackageEndpoint;u&&t.registerLocalGalleryPackagesEndpointDefinition.
invoke(i.client,r.Shell,u);this._initialized=!0},u.prototype.getAuthorizationToken=function(){return t.
getAuthorizationTokenEndPoint.invoke(i.client,r.Shell,undefined)},u.prototype.getLocalGalleryPackagesEndpoints=
function(){return t.getLocalGalleryPackagesEndpointsDefinition.invoke(i.client,r.Shell,undefined)},u.
prototype.hasPermission=function(n,u){return t.hasPermissionsToShell.invoke(i.client,r.Shell,{entityId:
n,requestedActions:u})},u.prototype.mapAssetIdToResourceId=function(n){return t.mapAssetIdToResourceIdEndPoint.
invoke(i.client,r.Shell,n)},u.prototype.mapResourceIdToAssetId=function(n){return t.mapResourceIdToAssetIdEndPoint.
invoke(i.client,r.Shell,n)},u.prototype.mapAssetIdToDynamicSelectionAndIcon=function(n,u){return t.mapAssetIdToDynamicSelectionAndIconEndPoint.
invoke(i.client,r.Shell,{assetId:n,forceBladeSelection:u})},u.prototype.mapResourceIdToDynamicSelectionAndIcon=
function(n,u){return t.mapResourceIdToDynamicSelectionAndIconEndPoint.invoke(i.client,r.Shell,{resourceId:
n,forceBladeSelection:u})},u.prototype.getAssetTypeInformation=function(n,u){return t.getAssetTypeInformationEndPoint.
invoke(i.client,r.Shell,{extensionName:n,assetType:u})},u.prototype.getResourceTypeAssetTypeInformation=
function(n){return t.getResourceTypeAssetTypeInformationEndPoint.invoke(i.client,r.Shell,n)},u.prototype.
getResourceAssetInformation=function(n){return t.getResourceAssetInformationEndPoint.invoke(i.client,
r.Shell,n)},u.prototype.disableAjaxServerVersionCheck=function(){f.disableVersionCheck()},u.prototype.
getObservable=function(n){var t=this;return this._entryPointDeferred.promise.then(function(){var r=n.
name,u=n.initialState,f=n.createSelectable?n.createSelectable:!1,i;switch(n.type){case e.PartViewModel:
i=t.getPartViewModel(r,u,f);break;case e.ViewModel:t._entryPoint.getViewModel&&(i=t.getViewModel(r,u,
f))}if(i)return i;throw new Error("Cannot provide the required object.");})},u.prototype.getGalleryServiceViewModel=
function(){var i=this,t=this._manifest&&this._manifest.galleryService&&this._manifest.galleryService.
serviceViewModel;return t?this._entryPointDeferred.promise.then(function(){return n.Extension.composeViewModel(
i._entryPoint.getViewModel,t,null,!1)}):Q.resolve(undefined)},u.prototype.dispose=function(){this._disposed=
!0},u.prototype.getViewModel=function(t,i,r){return n.Extension.composeViewModel(this._entryPoint.getViewModel,
t,i,r)},u.prototype.getPartViewModel=function(t,i,r){var u=n.Internal.ViewModels.createFrameworkPartViewModel(
),o={initialState:i,selectable:r?n.ViewModels.Part.createSelectableViewModel(i):undefined},f=new n.ViewModels.
PartContainer(u,o),e=this._entryPoint.getPartViewModel(t,f,i);return e.promise?e.then(function(t){return new
n.ViewModels.Part(u,f,t,i)}):new n.ViewModels.Part(u,f,e,i)},u}();t.RuntimeImpl=o})(i=t.Extension||(t.
Extension={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
n){"use strict";(function(n){n[n.Observable=0]="Observable"})(n.ServiceType||(n.ServiceType={}));var
t=n.ServiceType})(t=n.Extension||(n.Extension={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(
function(n){"use strict";(function(n){n[n.FromInput=0]="FromInput";n[n.FromProvider=1]="FromProvider";
n[n.FromSourceProvider=2]="FromSourceProvider"})(n.AssetIdSourceType||(n.AssetIdSourceType={}));var t=
n.AssetIdSourceType})(t=n.Extension||(n.Extension={}))}(MsPortalFx||(MsPortalFx={})),function(n){var
t;(function(n){"use strict";(function(n){n[n.All=0]="All";n[n.Any=1]="Any"})(n.SetRequirement||(n.SetRequirement=
{}));var t=n.SetRequirement})(t=n.Extension||(n.Extension={}))}(MsPortalFx||(MsPortalFx={})),function(
n){var t;(function(t){var i;(function(t){"use strict";function r(n,t){var r=this;return i.client.registerRpcEndPoint(
n,{allowedOrigin:null,handler:function(n){return t.apply(r,n)}})}function u(n,t){for(var u=[],r=2;r<
arguments.length;r++)u[r-2]=arguments[r];return i.client.invokeRpc(t,n,u)}var i=n.Base.Rpc.Internal;
t.registerCallback=r;t.invokeCallback=u})(i=t.Rpc||(t.Rpc={}))})(t=n.Services||(n.Services={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){"use strict";var i=n.Base.Rpc.Internal,r=function(){
function t(n,t){this._hostExtensionId=n;this._scope=t}return t.prototype.getObservable=function(){return n.
Internal.Extension.sharedObservablesEndPoint.acquireObject(i.client,this._hostExtensionId,this._scope).
then(function(n){return n.getValue()})},t.prototype.releaseObservable=function(){},t.prototype.dispose=
function(){},t}();t.ObservableServiceClientImpl=r})(t=n.Services||(n.Services={}))}(MsPortalFx||(MsPortalFx=
{})),function(n){var t;(function(n){var t;(function(n){"use strict";(function(n){n[n.Ready=0]="Ready";
n[n.Failed=1]="Failed";n[n.Preparing=2]="Preparing"})(n.CompositionState||(n.CompositionState={}));var
t=n.CompositionState})(t=n.ViewModels||(n.ViewModels={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||
(MsPortalFx={}));__extends=this.__extends||function(n,t){function r(){this.constructor=n}for(var i in
t)t.hasOwnProperty(i)&&(n[i]=t[i]);r.prototype=t.prototype;n.prototype=new r},function(n){var t;(function(
t){var i;(function(t){"use strict";function s(){return{allowUiBlocking:ko.observable(!0),selectable:
ko.observable()}}function h(){return{allowUiBlocking:ko.observable(!0),selectable:ko.observable(),registeredSelectables:
ko.observable()}}function u(n,t){n&&typeof n=="object"&&Object.keys(t).forEach(function(i){e(n[i])?f(
n[i],t[i]):u(n[i],t[i])})}function f(n,t){var i=function(i){t[i]&&Array.isArray(t[i])&&n[i](t[i])};i(
"selectedItems");i("activatedItems");i("itemsWithChildEdits")}function e(n){var t=typeof n=="object"?
Object.keys(n):[];return t.indexOf("activatedItems")!==-1&&t.indexOf("selectedItems")!==-1&&t.indexOf(
"itemsWithChildEdits")!==-1&&ko.isObservable(n.activatedItems)&&ko.isObservable(n.selectedItems)&&ko.
isObservable(n.itemsWithChildEdits)}var o=new n.Base.Diagnostics.Log("MsPortalFx/ViewModels/Composition/ViewModels.Composition"),
i,r;t.createFrameworkPartViewModel=h;i=function(){function n(n,t,i,r){this.internal=n;this.container=
t;this.content=i||{};r&&r.content&&u(i,r.content)}return n.prototype.updatePartInputValues=function(
n,t,i){var r=[],e=this.content,s=this.container,u,f;if(this.content&&typeof e.onInputsSet=="function")
{i&&(o.verbose("Invoking onInputsSet of view model '{0}'.\nInputs: {1}.\nSettings: {2}".format(i.debugId||
"N/A",ko.toJSON(n),ko.toJSON(t))),!!i.breakOnInputsSet);try{u=e.onInputsSet(n,t);u&&typeof u.then=="function"&&
r.push(u)}catch(h){r.push(Q.reject(h))}}return this.container&&(f=s.onInputsSetCallbacks.triggerCallbacks(
n,t),f&&typeof f.then=="function"&&r.push(f)),r.length>0?Q.all(r):null},n}();t.CompositionViewModelBase=
i;r=function(n){function t(t,i,r){n.call(this,s(),t,i,r);this.state=ko.observable(2);this._currentOnInputsSetPromise=
null}return __extends(t,n),t.prototype.updatePartInputValues=function(t,i,r){this._currentOnInputsSetPromise=
null;var u=n.prototype.updatePartInputValues.call(this,t,i||{},r);return u!==null?(this.state(2),this.
_currentOnInputsSetPromise=this._updateCompositionAfterOnInputsSet(u)):this.state(0),this._currentOnInputsSetPromise}
,t.prototype._updateCompositionAfterOnInputsSet=function(n){var t=this,i=n.then(function(){var n=!t.
_currentOnInputsSetPromise||t._currentOnInputsSetPromise===i;n&&t.state(0)},function(){var n=!t._currentOnInputsSetPromise||
t._currentOnInputsSetPromise===i;n&&t.state(1)});return i},t}(i);t.CompositionViewModel=r;t.initializeSelectableSet=
f;t.isSelectableSetLike=e})(i=t.ViewModels||(t.ViewModels={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){var i;(function(i){"use strict";function r(
i,r){var u=t.createFrameworkPartViewModel(),e=r?r.createSelectable:!1,o={initialState:r&&r.initialState,
selectable:e?n.ViewModels.Part.createSelectableViewModel(r.initialState):undefined},f=new n.ViewModels.
PartContainer(u,o);return new n.ViewModels.Part(u,f,i(f),r&&r.initialState)}i.composePartViewModel=r}
)(i=t.Part||(t.Part={}))})(i=t.ViewModels||(t.ViewModels={}))})(t=n.Internal||(n.Internal={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(){"use strict"})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||
(MsPortalFx={})),function(n){var t;(function(t){var i;(function(t){"use strict";function f(n){var t=
n;t.preview(!0)}var u=n.Resources.Strings.ViewModels.Container,i=function(){function n(){this._callbacks=
[]}return n.prototype.add=function(n){this._callbacks.indexOf(n)<0&&this._callbacks.push(n)},n.prototype.
remove=function(n){var t=this._callbacks.indexOf(n);t>=0&&this._callbacks.splice(t,1)},n.prototype.triggerCallbacks=
function(n,t){var i=this._callbacks.map(function(i){try{return i(n,t)}catch(r){return Q.reject(r)}}).
filter(function(n){return!!n});return i.length>0?Q.all(i):null},n.prototype.dispose=function(){this.
_callbacks.splice(0,this._callbacks.length)},n}(),r;t.OnInputsSetCallbacksImpl=i;r=function(){function t(
){this._triggerableLifetimeManager=new n.Internal.Base.TriggerableLifetimeManager;this.onInputsSetCallbacks=
new i;this.unauthorizedMessage=ko.observable();var t=this;t.preview=ko.observable(!1)}return t.prototype.
registerForDispose=function(n){return this._triggerableLifetimeManager.registerForDispose(n),this._triggerableLifetimeManager}
,t.prototype.createChildLifetime=function(){return this._triggerableLifetimeManager.createChildLifetime(
)},t.prototype.dispose=function(){this._triggerableLifetimeManager&&this._triggerableLifetimeManager.
dispose();this.onInputsSetCallbacks.dispose()},t.prototype.unauthorized=function(n){n||(n=u.unauthorizedText);
this.unauthorizedMessage(n)},t}();t.ContainerViewModel=r;t.markAsPreview=f})(i=t.Internal||(t.Internal=
{}))})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(
){"use strict"})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;
(function(n){"use strict";(function(n){n[n.None=0]="None";n[n.Success=1]="Success";n[n.Warning=2]="Warning";
n[n.Error=3]="Error";n[n.Dirty=4]="Dirty";n[n.Info=5]="Info"})(n.ContentState||(n.ContentState={}));
var t=n.ContentState})(t=n.ViewModels||(n.ViewModels={}))}(MsPortalFx||(MsPortalFx={}));__extends=this.
__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[
i]);r.prototype=t.prototype;n.prototype=new r};CompositionViewModelBase=MsPortalFx.Internal.ViewModels.
CompositionViewModelBase,function(n){var t;(function(t){"use strict";var r=n.Helpers,u=function(i){function u(
n,t,u,f){if(!t)throw new Error("Argument cannot be null: containerViewModel.");i.call(this,n,t,u,f);
this._currentOnInputsSetPromise=r.Deferred().promise();this.container.operations.add(this._currentOnInputsSetPromise,
{blockUi:!0})}return __extends(u,i),u.createSelectableViewModel=function(n,i){return new t.Selectable(
{selectedValue:arguments.length===2?i:!0,isSelected:!!(n&&n.container&&n.container.selectable.isSelected)
,isCommandSelected:!!(n&&n.container&&n.container.selectable.isCommandSelected)})},u.createClickableLinkViewModel=
function(n,i){return new t.ClickableLink(n,i)},u.prototype.updatePartInputValues=function(n,t,r){var
f=this._currentOnInputsSetPromise,u;return this._currentOnInputsSetPromise=null,u=i.prototype.updatePartInputValues.
call(this,n,t||{},r),u!==null&&(this._currentOnInputsSetPromise=this._updatePartStateAfterOnInputsSetPromise(
u),this.container.operations.add(this._currentOnInputsSetPromise,{blockUi:!0})),f&&this.container.operations.
remove(f),this._currentOnInputsSetPromise},u.prototype._updatePartStateAfterOnInputsSetPromise=function(
t){var i=this,r=t.then(function(){if(n.Base.Utilities.isNullOrUndefined(i.container.unauthorizedMessage(
))){var t=!i._currentOnInputsSetPromise||i._currentOnInputsSetPromise===r;t&&i.container.recover()}}
,function(t){var e=!i._currentOnInputsSetPromise||i._currentOnInputsSetPromise===r,u,f;e&&(t instanceof
n.FxError.UnauthorizedDataError?i.container.unauthorized():(u=t instanceof Error&&t.stack?t.stack:JSON.
stringify(t),f="Part's onInputsSet promise failed.\nError: {0}".format(u||"[undefined]"),i.container.
fail(f)))});return r},u.prototype.updatePartForUnauthorized=function(){var n=this._currentOnInputsSetPromise;
this._currentOnInputsSetPromise=null;n&&this.container.operations.remove(n)},u}(CompositionViewModelBase),
i;t.Part=u;i=function(i){function r(n,r){var f=this,u;i.call(this);this.isSelectable=ko.observable(!0);
this.selectable=null;this.clickableLink=null;this.failureMessage=ko.observable();this.noDataMessage=
ko.observable();this.width=ko.observable(0);this.mutate=ko.observable();this._partState=null;r=r||{initialState:
null,registeredSelectables:null};u=r.selectable;this._partState=ko.observable(0);this.partState=ko.computed(
function(){return f._partState()});u&&(this.selectable=u);r.clickableLink&&(this.clickableLink=r.clickableLink);
this.partTitle=ko.observable(r.partTitle||null);this.assetName=ko.observable(r.assetName||null);this.
contentState=ko.observable(0);this.operations=new t.PartOperationList(this);this.registerForDispose(
this.operations);this._registeredSelectables=n.registeredSelectables;this._registeredSelectablesInitialState=
r.initialState&&r.initialState.internal&&r.initialState.internal.registeredSelectables||{}}return __extends(
r,i),r.prototype.fail=function(n){if(!n)throw new Error("Argument cannot be null or empty: message.");
this.failureMessage(n);this._partState(1)},r.prototype.recover=function(){this._partState()===1&&(this.
failureMessage(null),this._partState(0));this.unauthorizedMessage(null)},r.prototype.registerSelectable=
function(t,i,r){var f=this,u=this._registeredSelectables()||{},e=function(){return Object.keys(u).map(
function(n){return u[n]}).some(function(n){return r===n})};if(!i||!r)throw new Error("identity and selectable are required parameters");
if(u.hasOwnProperty(i))throw new Error("A selectable named "+i+" is already registered");if(e())throw new
Error("The selectable instance has already been registered");n.Internal.ViewModels.isSelectableSetLike(
r)&&this._registeredSelectablesInitialState.hasOwnProperty(i)&&n.Internal.ViewModels.initializeSelectableSet(
r,this._registeredSelectablesInitialState[i]);u=n.Base.Utilities.clone(u,!1);u[i]=r;this._registeredSelectables(
u);t.registerForDispose({dispose:function(){f._unregisterSelectable(i)}})},r.prototype._unregisterSelectable=
function(t){var i=n.Base.Utilities.clone(this._registeredSelectables(),!1);delete i[t];this._registeredSelectables(
i)},r}(n.ViewModels.Internal.ContainerViewModel);t.PartContainer=i})(t=n.ViewModels||(n.ViewModels={
}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(){"use strict"})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={})),function(n){var t;(function(t){"use strict";function f(n,t,i){return Math.
min(Math.max(n,t),i)}var u=function(){function t(t){var i=this;this._activeOperations=ko.observableArray(
);this.inProgress=ko.computed(function(){return i._activeOperations().length>0});this.blockingUi=ko.
computed(function(){return i._activeOperations().some(function(n){return n.options.blockUi})});this.
progressBarViewModel=new n.ViewModels.Controls.Visualization.ProgressBar.ViewModel(t);ko.computed(function(
){var n=i._activeOperations().some(function(n){return n.deterministicPercentage()!==null});n?i.progressBarViewModel.
status(0):i.progressBarViewModel.status(4)});ko.computed(function(){var n=0,t=0;i._activeOperations(
).forEach(function(i){var r=i.deterministicPercentage();r!==null&&(n++,t+=r)});i.progressBarViewModel.
valuePercentage(n===0?0:t/n)})}return t.prototype.dispose=function(){this.progressBarViewModel.dispose(
)},t.prototype.add=function(n,t){var e=this,u,f;if(!n)throw new Error("Argument cannot be null: promise.");
t=t||new i;u=new r(n,t);f=function(){e._activeOperations.remove(u)};this._activeOperations.push(u);n.
then(f,f)},t.prototype.remove=function(n){if(!n)throw new Error("Argument cannot be null: promise.");
this._activeOperations.remove(function(t){return t.promise===n})},t}(),i,r;t.PartOperationList=u;i=function(
){function n(){}return n}();t.PartOperationOptions=i;r=function(){function n(n,t){var i=this;this.promise=
n;this.options=t;this.deterministicPercentage=ko.observable(null);n.progress&&n.progress(function(n)
{var t=n&&n.percent;if(typeof t=="string"&&(t=parseFloat(t),isNaN(t)))throw new Error("Percent values should be numbers.");
typeof t=="number"&&i.deterministicPercentage(f(t,0,100))})}return n}()})(t=n.ViewModels||(n.ViewModels=
{}))}(MsPortalFx||(MsPortalFx={})),function(){"use strict";var n=window,t=n.fx.environment.requireConfig;
t&&n.requirejs.config(t)}(MsPortalFx||(MsPortalFx={}))