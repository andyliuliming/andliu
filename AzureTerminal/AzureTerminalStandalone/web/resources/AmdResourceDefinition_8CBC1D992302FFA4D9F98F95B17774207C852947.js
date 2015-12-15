define("HubsExtension/Deployments/DeploymentsClientStrings",function(){return{createNewResourceGroupLabel:
"Create a new resource group",createNewResourceGroupPlaceholderText:"Enter a resource group name...",
defaultValueMessage:"Default value",deployFromTemplateBladeSubtitle:"Deploy from a custom template",
deployFromTemplateBladeTitle:"Custom deployment",editParametersDisplayText:"Edit parameters",editParametersLabel:
"Parameters",editTemplate:"Please enter a valid template ",editTemplateBladeSubtitle:"Edit Azure Resource Manager template",
editTemplateBladeTitle:"Edit template",editTemplateDisplayText:"Edit template",editTemplateLabel:"Template",
location:"Resource group location",parametersActionBarButtonText:"OK",parametersEditorBladeSubtitle:
"Enter template parameter values",parametersEditorBladeTitle:"Enter parameters",requiredFieldValidationMessage:
"This field is required",resourceGroup:"Resource group",saveTemplateCommandText:"Save",selectExistingResourceGroupLabel:
"Select an existing resource group",selectLocation:"Please select a location",selectResourceGroup:"Please select a resource group",
selectSubscription:"Please select a subscription",subscription:"Subscription"}});define("HubsExtension/Locations/LocationClientStrings",
function(){return{bladeTitle:"Location"}});define("HubsExtension/Store/StoreClientStrings",function(
){return{CreateLauncher:{billableSubscriptionRequired:"A billable subscription is required",msdnOfferRequired:
"A subscription with MSDN offers is required."},Notifications:{DeployTemplate:{DeploymentFailed:{label:
"Deployment failed",message:"Deployment to resource group '{0}' failed."},DeploymentStarted:{label:"Deployment started...",
message:"Deployment to resource group '{0}' is in progress."},DeploymentSucceeded:{label:"Deployments succeeded",
message:"Deployment to resource group '{0}' was successful."},InitializingDeployment:{label:"Initializing deployment...",
message:"Initializing template deployment to resource group '{0}'."},SubmittingDeployment:{label:"Submitting deployment...",
message:"Submitting the deployment template for resource group '{0}'."}}},ProvisioningPart:{provisioningFailedLabel:
"Error creating {0}",provisioningInProgressLabel:"Provisioning {0}",provisioningSucceededLabel:"Created {0}",
statusUnknownLabel:"Creating {0} status unknown"}}});define("HubsExtension/Settings/SettingsClientStrings",
function(){return{AssetTypeNames:{Settings:{lowerPlural:"portal settings",lowerSingular:"portal setting",
plural:"Portal settings",singular:"Portal setting"}},languageSelectorLensTitle:"Choose a language",Pseudo:
{language:"Þšéųδô"},SettingsTile:{title:"Portal settings"}}});define("HubsExtension/SpecPickerV3/SpecPickerClientStrings",
function(){return{enterpriseAgreementMessage:"Prices presented below are estimated retail prices and do not reflect applicable discounts for your subscription. If you have purchased Azure services through a reseller, contact your reseller for applicable pricing.",
notAvailableInSelectedPlan:"Not available in selected plan",pricingTier:"Pricing tier",recommendationBladeTitle:
"Recommended pricing tiers",recommendationBrowseAllSpecs:"Browse all pricing tiers",specCardDefaultDisabledMessage:
"Not Available",specCardNotOfferedInBillingRegion:"Not offered in the region of your subscription",specListViewIndirectEAMessage:
"For pricing information, please contact your reseller.",specListViewLoadingPricingInfo:"Loading pricing...",
specListViewUnableToDisplayPricingInfo:"Unable to display pricing",specPickerBladeSubtitle:"Browse the available plans and their features",
specPickerBladeTitle:"Choose your pricing tier",specPickerUnableToDisplayPricingTiers:"Unable to display pricing tiers",
specPickerViewAllPlans:"View all",specPickerViewRecommendedPlans:"Recommended"}});define("HubsExtension/SubscriptionsFilter/SubscriptionsFilterClientStrings",
function(){return{allSubscriptionsSelectedText:"All subscriptions",filterPlaceholderText:"Filter items ...",
multipleSubscriptionsSelectedText:"{0} subscriptions",subscriptionPickerBladeTitle:"Subscriptions"}}
);define("HubsExtension/Tags/TagsClientStrings",function(){return{addCommandText:"Save",AssetTypeNames:
{Tag:{lowerPlural:"tags",lowerSingular:"tag",plural:"Tags",singular:"Tag"}},compoundPendingAddingFormat:
"(adding...)",compoundPendingDeletingFormat:"(deleting...)",deleteCommandText:"Delete",ResourcesWithTagBlade:
{subTitle:"Tag"},ResourcesWithTagListPart:{emptyListText:"No resources",filterBoxText:"Search to filter resources...",
nameColumn:"Name",subscriptionColumn:"Subscription"},ResourceTagListsBlade:{title:"Tags"},ResourceTagsCollectionPart:
{noRowsMessage:"No tags",partTitle:"Tags"},ResourceTagsListPart:{emptyFieldValidationMessage:"Please enter a non-empty string",
emptyListText:"No tags",keyFieldEmptyValueText:"Key",loadingText:"Loading...",maxTagsReachedMessage:
"Maximum number of tags reached",subscriptionStatusDisabledMessage:"Subscription is disabled",tagKeyMaxLengthMessage:
"Invalid tag key. The maximum supported length is {0}",tagKeyValidationMessage:"Invalid tag name. The following tag name prefixes are reserved: '{0}'",
tagsKeyInvalidMessage:"The tag key value is invalid",tagValueMaxLengthMessage:"Invalid tag value. The maximum supported length is {0}",
tagValueValidationMessage:"Invalid tag value. Following tag values are reserved: '{0}'",unsupportedCharactersMessage:
"The following characters are not supported: {0}",valueFieldEmptyValueText:"Value"}}});define("HubsExtension/Browse/BrowseClientStrings",
function(){return{allResources:"All resources",allResourcesLower:"all resources",browseAllResourcesError:
"Something went wrong while getting your resources. Please try again later.",browseFilterLabel:"Search to filter items by name...",
browseSettings:"Choose columns",BrowseTile:{description:"Access all your resources, all in one place",
shortTitle:"Browse",title:"Browse all"},browseTitle:"Browse",chooseColumnsCommand:"Choose Columns",ColumnTitles:
{assetType:"Type",column:"Column",kind:"Kind",location:"Location",locationId:"Location ID",name:"Name",
resourceGroup:"Resource group",resourceId:"Resource ID",resourceType:"Resource Type",subscriptionId:
"Subscription ID",subscriptionName:"Subscription"},loading:"Loading...",noResources:"No {0} to display",
nothingToDisplay:"Nothing to display",partialResultsWarningForBrowseAllResources:"Some resources couldn't be retrieved. Please try again later...",
pinnedPartForAssetTypeBlade:"Browse changed for this part, please unpin this part",refreshCommand:"Refresh",
resourceTypeNotFound:"Resource type not found",unhandledPinnedPartForBrowseType:"Browse part with unhandled browse type, please unpin this part"}}
);define("HubsExtension/Gallery/GalleryClientStrings",function(){return{AssetTypeNames:{Gallery:{lowerPlural:
"Marketplace",lowerSingular:"Marketplace",plural:"Marketplace",singular:"Marketplace"}},Deployment:{
initializingDeploymentLabel:"Initializing deployment...",resourceDeploymentFailedLabel:"Deployment failed",
resourceDeploymentFailedMessage:"Failed to create {0}"},Gallery:{ComingSoonBlade:{description:"We're working to add services to the new Azure portal, but we're not quite there. If you want to get started now, sign into the full Azure portal.",
linkText:"Go",linkUri:"https://manage.windowsazure.com/",tagline:"Coming soon"},CreateBlade:{azureMarketplace:
"Azure Marketplace",browse:"Browse",findAndCreateFormat:"Find and create more {0}",marketplaceMore:"Browse 3000+ additional solutions",
noRecentMessage:"You haven't created anything recently.",recent:"Recent",recentFailed:"Something went wrong while loading your recently created items.",
title:"Create"},CreateFailed:{description:"Something went wrong while creating {0}.",header:"Oops!",
title:"Could not create {0}",titleNoItem:"Could not create the marketplace item"},DataContext:{loadCurationDataFailedLabel:
"Failed to load the marketplace",loadCurationDataFailedMessage:"Could not load the marketplace data"},
DetailsBlade:{defaultSocialShareText:"Just discovered {0} is available from Microsoft #Azure Marketplace. And it's awesome!",
emailShareBody:"{0}",emailShareSubject:"Check this out in Microsoft's Azure Marketplace",eula:"NOT YET IN PREVIEW: Go to the {0} and start using this service right now.",
eulaLinkLabel:"full Azure portal",publisherPropertyTitle:"Publisher",usefulLinksPropertyTitle:"Useful Links"},
FeaturedSubMenuItemBlade:{byPublisher:"{0}",noResults:"No results found.",searchEmptyValue:"Search {0}",
searching:"Searching...",searchTitle:"Search results",seeAll:"More"},MenuBlade:{description:"",Grid:
{loading:"Loading...",noRowsMessage:"There are no marketplace menu items",summary:"List of marketplace menu items"},
homeMenu:"Everything",title:"Marketplace"},ResultsListBlade:{byPublisher:"{0}",description:"",Grid:{
loading:"Loading...",noRowsMessage:"There are no marketplace items",summary:"Marketplace items"},title:
"New resource"},SubscriptionBlade:{description:"You need an Azure subscription, or a subscription that's specific to this app. Signing up is quick and you'll only be billed if you use premium features.",
linkText:"Sign up",linkUri:"https://go.microsoft.com/fwlink/?LinkID=522331",tagline:"Get a subscription"},
Tile:{description:"Discover, purchase, and manage add-ons and services from Microsoft partners",fullTitle:
"Marketplace",shortTitle:"Marketplace",title:"Marketplace"}},LegalTerms:{andLabel:" and ",closeLabel:
"Close",createLabel:"Create",freeTrialLegalNoticeText:"If you have previously purchased a free trial offering, your free trial period will run 30 days from the date of your original purchase; all use thereafter will be billed at the standard rates listed above.",
gridFooterHtml:'Pricing above does not include <a target="_blank" href="http://azure.microsoft.com/pricing/details/virtual-machines/">Azure infrastructure costs<\/a> (e.g., virtual machine compute time or storage) and is based on the pricing tier you have selected.  Neither Microsoft subscription credits nor monetary commitment funds may be used to purchase the above offering(s).  These purchases are billed separately.  If any Microsoft products are listed above (e.g., Windows Server or SQL Server), such products are licensed by Microsoft and not by any third party.',
indirectEAGridFooterHtml:"For pricing information, please contact your reseller. Please note that your reseller may not permit monetary commitment funds or other subscription credits to be used to purchase the above offering(s). If any Microsoft products are included in the above offering(s) (e.g. Windows Server or SQL Server), such products are licensed by Microsoft and not by any third part.",
indirectEALegalTermsAgreementHtml:'By clicking "Create," I (a) agree to the legal terms and privacy statement(s) associated with each offering above, and (b) agree that Microsoft may share my contact information and these transaction details with any third-party vendors, if listed above. Microsoft does not provide rights for non-Microsoft products or services. See the <a target="_blank" href="http://azure.microsoft.com/support/legal/store-terms/">Azure Store Terms<\/a> for additional details.',
instanceCountFormat:" ({0})",legalTermsAgreementHtml:'By clicking "Buy," I (a) agree to the legal terms and privacy statement(s) associated with each offering above, (b) authorize Microsoft to charge or bill my current payment method on a quarterly basis for the fees associated with my use of the offering(s), including applicable taxes, until I discontinue use of the offering(s), and (c) agree that Microsoft may share my contact information with any third-party vendors, if listed above.  Microsoft does not provide rights for third-party products or services.  See the <a target="_blank" href="http://azure.microsoft.com/support/legal/store-terms/">Azure Store Terms<\/a> for additional terms.',
legalTermsLabel:"Legal terms",loadingRowsMessage:"Loading...",noRowsMessage:"No rows.",notSupportedInRegionNoticeText:
"The publisher does not offer this product in the country/region of your subscription.<\/br>Please choose another subscription.",
pricingDetailsLinkText:"Pricing for other VM sizes",pricingDetailsUriFormat:"http://azure.microsoft.com/marketplace/partners/{0}/{1}-{2}/",
pricingForByolProducts:"0.00 USD (Bring your own license)",pricingFormatForFreeTrialProducts:"Free during trial, {0} thereafter",
pricingForProductsNotSupportedInRegion:"Not offered for selected subscription",pricingForProductsWithNoPricing:
"0.00 USD/hr",pricingInfoFailureMessage:"We were unable to get pricing information for your resources.",
pricingInfoLoadingMessage:"Loading pricing information...",pricingTextFormat:"{0} {1}/{2}",privacyPolicyLabel:
"Privacy policy",publisherFormat:"by {0}",purchaseLabel:"Buy",thirdPartyExtensions:"Offer details"},
PricingSummary:{actionButtonLabel:"Close",bladeTitle:"Pricing summary",freeDuringTrialText:"Free during trial",
freeTrialLegalNoticeText:"If you have previously purchased a free trial offering, your free trial period will run 30 days from the date of your original purchase; all use thereafter will be billed at the standard rates listed above.",
indirectEAPricingMessage:"For pricing information, please contact your reseller.",instanceCountFormat:
" ({0})",legalNotice:"Prices shown above are estimates based on assumed monthly usage and may reflect currency conversions that are subject to change.  Prices do not include applicable taxes or discounts.",
loadingRowsMessage:"Loading...",noRowsMessage:"No rows.",notSupportedInRegionNoticeText:"The publisher does not offer this product in the country/region of your subscription. Please choose another subscription.",
pricingForByolProducts:"0.00 USD (Bring your own license)",pricingFormatForFreeTrialProducts:"{0} thereafter",
pricingForProductsWithNoPricing:"0.00 USD/hr",pricingInfoFailureMessage:"We were unable to get pricing information for your resources.",
pricingInfoLoadingMessage:"Loading pricing information...",pricingTextFormat:"{0} {1}/{2}",regularResourcesGridHeaderText:
"Pricing confirmation",totalText:"{0} (total)",totalThereafterText:"{0} (thereafter)",trialTotalText:
"{0} (free trial period)",usageResourcesGridHeaderText:"Usage based resources",usageResourcesGridNotice:
"These resources will be billed based on your consumption throughout the billing cycle."},ProvisionerPart:
{operationFailedMessage:"{0} (Code: {1})",pollingFailedLabel:"Error getting deployment status",pollingFailedMessage:
"There was an error getting status for deployment '{0}'",resourceCreationFailedLabel:"Error creating {0}",
resourceCreationFailedMessage:"{0} creation failed in resource group {1}.",resourceCreationInProgressLabel:
"Creating {0}",resourceCreationInProgressMessage:"We're creating {0} in resource group {1}. It'll be ready in a moment.",
resourceCreationStatusUnknownLabel:"Creating {0} status unknown",resourceCreationSucceededLabel:"Created {0}",
resourceCreationSucceededMessage:"{0} has been created in resource group {1}."}}});define("HubsExtension/ClassicAdmins/ManagementTeamClientStrings",
function(){return{diagnosticsLogErrorFailedToGetSubscription:"Failed to get the subscription",discardChangesCommandText:
"Discard",emptyUsersList:"Failed to get the list of users. Please close and re-open the blade.",loading:
"Loading...",managementTeam:"Admins",managementTeamBladeTitle:"Subscription co-admins",manageUsersCommandText:
"Manage",unknownSubscription:"Unknown subscription",userRoleAccountAdministrator:"Account administrator",
userRoleCoAdministrator:"Co-admin",userRolePending:"Co-admin (pending)",userRoleServiceAdministrator:
"Service administrator",usersBladeSubTitle:"Manage subscription users",usersGridNameColumn:"Name",usersGridRoleColumn:
"Role",usersGridSummary:"List of users"}});define("HubsExtension/ResourceMap/ResourceMapClientStrings",
function(){return{addResourceCommandTitle:"Add",AssetTypeNames:{Deployments:{lowerPlural:"deployments",
lowerSingular:"deployment",plural:"Deployments",singular:"Deployment"},Resource:{lowerPlural:"resources",
lowerSingular:"resource",plural:"Resources",singular:"Resource"},ResourceGroup:{lowerPlural:"resource groups",
lowerSingular:"resource group",plural:"Resource groups",singular:"Resource group"},ResourceGroupList:
{lowerPlural:"resource group lists",lowerSingular:"resource group list",plural:"Resource Group Lists",
singular:"Resource Group List"},ResourceList:{lowerPlural:"resource lists",lowerSingular:"resource list",
plural:"Resource Lists",singular:"Resource List"}},deleteListLensTitle:"Affected resources",deleteResourceGroupCommandTitle:
"Delete",deploymentAcceptedState:"Accepted",deploymentCanceledState:"Canceled",deploymentDeleteCommandConfirmationMessage:
"Are you sure you want to delete this deployment?",deploymentDeleteCommandConfirmationTitle:"Delete deployment",
deploymentDeleteCommandText:"Delete",deploymentDeletingState:"Deleting",deploymentDeletionFailedLabel:
"Delete deployment failed",deploymentDeletionFailedMessage:"There was an error deleting deployment '{deploymentName}' from resource group '{resourceGroupName}'",
deploymentDeletionInProgressLabel:"Deleting deployment",deploymentDeletionInProgressMessage:"Deleting deployment '{deploymentName}' from resource group '{resourceGroupName}'",
deploymentDeletionPollingFailedLabel:"Polling for deployment delete failed",deploymentDeletionPollingFailedMessage:
"There was an error when trying to get the operation status of the deployment delete operation '{deploymentName}' from resource group '{resourceGroupName}'",
deploymentDeletionSuccessLabel:"Deleted deployment",deploymentDeletionSuccessMessage:"Deleted deployment '{deploymentName}' from resource group '{resourceGroupName}'",
deploymentDetailsBladeSubTitle:"Deployment",deploymentFailedLabel:"Deployment failed",deploymentFailedMessage:
"Deployment to resource group {resourceGroupName} failed.",deploymentFailedState:"Failed",deploymentInputParametersMissing:
"No deployment inputs",deploymentInputsLensTitle:"Inputs",deploymentInputsParametersLinkLabel:"Parameters link",
deploymentOperationDetailsLensTitle:"Operation details",deploymentOperationDurationProperty:"Duration",
deploymentOperationIdProperty:"Operation Id",deploymentOperationPropertiesBladeTitle:"Operation details",
deploymentOperationProvisioningStateProperty:"Provisioning State",deploymentOperationResourceIdProperty:
"Resource Id",deploymentOperationResourceNameProperty:"Resource",deploymentOperationResourceTypeProperty:
"Type",deploymentOperationsCommandText:"View operations",deploymentOperationStatusCodeProperty:"Status",
deploymentOperationStatusMessageProperty:"StatusMessage",deploymentOperationTimestampProperty:"Timestamp",
deploymentOperationTrackingIdProperty:"Tracking Id",deploymentOutputParametersMissing:"No deployment outputs",
deploymentOutputsLensTitle:"Outputs",deploymentRunningState:"Running",deploymentsListBladeTitle:"Deployment history",
deploymentsListPartLoadingMessage:"Loading...",deploymentsListPartNoDeploymentsMessage:"No deployments",
deploymentsListPartSummary:"Deployment history",deploymentsPartMessageTitle:"Last: {0}",deploymentsPartTitle:
"Deployment history",deploymentSucceededState:"Succeeded",deploymentSuccessLabel:"Deployment succeeded",
deploymentSuccessMessage:"Deployment to resource group {resourceGroupName} was successful.",deploymentSummaryDeploymentDateLabel:
"Deployment date",deploymentSummaryLensTitle:"Summary",deploymentSummaryStatusLabel:"Status",deploymentSummaryTemplateLinkLabel:
"Template link",eventsBladeTitle:"Events",htmlResourceGroupInstallClientLibraries:"Client libraries",
htmlResourceGroupInstallPowerShell:"Install the PowerShell Cmdlets",htmlResourceGroupInstallTools:"Install the tools",
htmlResourceGroupIntroduction:"What is a resource group",htmlResourceGroupIntroductionVideo:"Video:Introduction to resource groups",
htmlResourceGroupResourceManagement:"Resource Management API",htmlResourceGroupSample:"Sample Templates",
htmlResourceGroupTemplate:"Authoring Azure Templates",idColumn:"Id",locationColumn:"Location",missingResource:
"Resource could not be found.",missingResourceGroup:"Resource group could not be found.",nameColumn:
"Name",openResourceGroupCommandTitle:"Resource Group",refreshCommandText:"Refresh",resourceGroupAccessLensTitle:
"Access",resourceGroupBillingLensTitle:"Billing",resourceGroupButtonPartPropertiesTitle:"Properties",
resourceGroupButtonPartPropertiesTitleFormat:"{0} Properties",resourceGroupButtonPartQuickStartTitle:
"Quickstart",resourceGroupButtonPartQuickStartTitleFormat:"Quickstart - {0}",resourceGroupMonitoringLensTitle:
"Monitoring",resourceGroupOverviewLensTitle:"Summary",ResourceGroupPickerBlade:{description:"Resource groups are containers that help you manage a collection of Azure resources.",
title:"Resource group"},resourceGroupPropertiesBladeTitle:"Properties",resourceGroupPropertiesSettingLabel:
"Properties",resourceGroupPropertiesSettingLocationKeyword:"Location",resourceGroupPropertiesSettingSubscriptionKeyword:
"Subscription",resourceGroupQuickStartBladeTitle:"Quickstart",resourceGroupQuickStartIntroduction:"Introduction",
resourceGroupQuickStartIntroductionDescription:"Learn about resource groups and how you can use them.",
resourceGroupQuickStartLearnMore:"Learn more",resourceGroupQuickStartLearnMoreDescription:"Manage your applications using the Resource Manager Service.",
resourceGroupQuickStartTools:"Get the tools",resourceGroupQuickStartToolsDescription:"Use the SDK to build apps that use scalable cloud resources.",
resourceGroupQuickStateBladeShortTitle:"Resource group",resourceGroupSettingListBladeTitle:"Settings",
resourceGroupSettingListCommandTitle:"Settings",resourceGroupSummaryLastDeploymentLabel:"Last deployment",
resourceGroupSummaryLocationLabel:"Location",resourceGroupSummarySubscriptionIdLabel:"Subscription id",
resourceGroupSummarySubscriptionLabel:"Subscription name",subscriptionColumn:"Subscription",subscriptionIdColumn:
"Subscription Id",subscriptionNameColumn:"Subscription Name",unknownSubscription:"unknown"}});define(
"HubsExtension/ServicesHealth/ServicesHealthClientStrings",function(){return{AssetTypeNames:{ServicesHealth:
{lowerPlural:"service health",lowerSingular:"service health",plural:"Service health",singular:"Service health"}},
PersonalizedServicesHealth:{assetName:"My resources",noDataMessage:"When you deploy an Azure service, you'll see its location and status here",
outageMessageTemplate:"There are service outages in {0}",Severity:{error:"Error",healthy:"Healthy",information:
"Information",warning:"Warning"},title:"Service health",uriCommandTitle:"Go to Azure Status page"},ServicesHealth:
{loadErrorMessage:"Unable to load service data",region11Name:"Silicon Valley",region12Name:"Washington DC",
region13Name:"East Japan",region14Name:"West Japan",region15Name:"Sau Paulo",region19Name:"Australia East",
region1Name:"North Central US",region20Name:"Australia Southeast",region2Name:"South Central US",region3Name:
"North Europe",region4Name:"Southeast Asia",region5Name:"Multi-Region",region6Name:"West Europe",region7Name:
"East Asia",region8Name:"East US",region9Name:"West US",ServicePart:{mapSummary:"Map of Azure regions with status",
subtitle:"Azure service"},ServiceRegionPart:{noIncidentsMessage:"No problems! Everything is running great."},
ServiceRegionsGrid:{nameColumnHeader:"Region",statusColumnHeader:"Status",statusColumnWidth:"50px",summary:
"List of Azure service's status by region"},servicesCollectionCriticalIssuesLabel:"Outages",servicesCollectionIssuesLabel:
"Issues",servicesCollectionLabel:"Services",ServicesGrid:{nameColumnHeader:"Service",statusColumnHeader:
"Status",statusColumnWidth:"50px",summary:"List of Azure services and status"},ServicesPart:{mapSummary:
"Map of Azure service's regions with status",shortTitle:"Service health",subtitle:"Azure",title:"Service health"}}}}
);define("HubsExtension/Pickers/PickersClientStrings",function(){return{CreateResourceGroupBlade:{description:
"Name your new Resource group.",title:"Create resource group"},CreateResourceGroupForm:{resourceGroupFieldName:
"Name",resourceGroupNameConflictMessage:"Resource group name already exists in current subscription.",
resourceGroupNameDefaultText:"Enter Resource group name",resourceGroupNameInvalidMessage:"Resource group name can only include alphanumeric characters, periods, underscores, hyphens and parenthesis and cannot end in a period.",
resourceGroupNameLengthValidationMessage:"Resource group name only allows upto 64 characters.",resourceGroupNameRequiredMessage:
"Resource group name is required."},loading:"Loading...",PickerBlade:{createActionToolTip:"Provide Information",
title:"Resource"},RegionPickerBlade:{noRegionsMessage:"There are no locations available. You may not have permissions to view locations.",
title:"Location"},ResourceGroupPickerBlade:{createResourceGroupTitle:"Create a new resource group",description:
"Resource groups are containers that help you manage a collection of Azure resources.",listHeader:"Use an existing resource group",
noResourceGroupsMessage:"There are no resource groups available. You may not have permissions to view resource groups.",
title:"Resource group"},SubscriptionPickerBlade:{disabledSubscriptionMessage:"Disabled subscription",
noSubscriptionsMessage:"There are no subscriptions available. You may not have permissions to view subscriptions.",
title:"Subscription"}}});define("HubsExtension/Help/HelpClientStrings",function(){return{AssetTypeNames:
{HelpAndSupport:{lowerPlural:"help + support",lowerSingular:"help + support",plural:"Help + support",
singular:"Help + support"}},AzurePortal:{Tile:{title:"Classic portal"}},Feedback:{Tile:{description:
"Get help with or share ideas to improve Azure",shortTitle:"Feedback",title:"Feedback"}},Help:{Blade:
{description:"The essentials",Details:{AzureTools:{description:"Develop wherever you want. Deploy wherever you want. At any scale. And get powerful insights at a glance. All from within Azure or your favorite IDE.",
linkText:"Get the Azure SDK + tools",title:"Build at cloud speed"},Forums:{description:"Browse the forums to see if your questions have been answered by others. Or help out, and answer questions posed by other members of the community!",
forum:"Go to the MSDN forum",stackOverflow:"Go to the Stack Overflow forum",title:"Azure communities"},
Header:{description:"Get help with issues you encounter or questions you have. Share your thoughts to help us improve the end-to-end Azure experience.",
title:"Help shape the future"},Health:{blade:"Check availability",description:"See performance, availability, and stability of all Azure services at a glance by pinning the Service health blade to your Startboard. (Don't need them all? Pin just each service you'd like to keep front-and-center.)",
title:"Service availability"},Support:{azureSupport:"Get support",description:"Whether your questions are about services, subscriptions, quotas, or other technical topics, we're here to help.",
title:"Technical + billing support"}},title:"Get started"},Tile:{description:"A quickstart to Azure",
shortTitle:"Quickstart",title:"Quickstart"}},HelpAndSupport:{description:"Read the docs, check service health, get help with questions and issues, or just share your thoughts to help improve the portal. Whatever you need, We're here to help.",
Help:{Channel9:{title:"Channel 9"},Docs:{title:"Documentation"},MsdnForums:{title:"MSDN forums"},StackOverflow:
{title:"Stack Overflow"},title:"Help"},Support:{GetSupport:{title:"Get support"},newSupportRequest:"Get support",
title:"Support"},title:"Help + support"},NoMsdnOfferOnSubscriptions:{action:"Get free Azure credits with MSDN",
actionUri:"http://aka.ms/esgn23",description:"With MSDN, you get free Azure credits every month plus usage discounts of 33‒97% on selected resources. To get started, sign up for MSDN and link your subscription to Azure. Then set up a dev/test sandbox in the cloud using Azure virtual machines.",
header:"Dev + test faster—for less—with MSDN",partTitle:"MSDN subscription required",title:"Looks like you need an MSDN subscription"},
NoSubscriptions:{action:"Sign up",description:"To create resources and track usage, you need admin access for a subscription or resource group. It's easy to get a new subscription, and you'll only be billed if you use premium features.",
header:"Get an Azure subscription",partTitle:"Get a subscription",title:"Develop + test cloud solutions"},
Tour:{Blade:{description:"The basics",title:"Tour"},BladesBlade:{Button:{title:"Customize it"},Commands:
{description:"Commands live across the top of the blade + right click anywhere to see your options any time.",
title:"Commands"},description:"Fast facts + features",Lenses:{description1:"A lens is a collection of parts, grouped by function. For instance, this is the Monitoring lens—each applicable resource will have this lens.",
description2:"It's also easy to reorder lenses and customize the parts they contain.",title:"Lenses"},
Parts:{description1:"Parts show glanceable, dynamic information from your resources. For more, just drill in.",
description2:"Tapping (or clicking) a tile will launch the feature, resource, or other experience that's represented by the part. So if you tap the marketplace part, the marketplace will open. Pin the ones you want, then move and resize them as you like.",
title:"Parts"},title:"Blades"},CustomizingBlade:{description:"Make it yours",EndOfTour:{title:"That's it! Jump to it."},
OrganizeMode:{description:"Make the Startboard yours by right-clicking and choosing Customize. Then resize parts, add them to blades, or move them between lenses. Click Done to save your changes and exit. To pick a new theme go to Settings or double-click the background.",
title:"Customize"},PinToStartboard:{description:"Parts on your Startboard get you closer to the things that matter most. Any part can be pinned to your Startboard—or to any blade. Just right-click on the part and choose Pin to Startboard. (Or pin any part to any blade using Customize.)",
title:"Pinning"},Resize:{description:"As a part grows or shrinks, it will reveal more or less information. Right-click to resize!",
title:"Resize parts"},title:"Customize"},Tile:{description:"",shortTitle:"Welcome to Azure",title:"Tour"},
WelcomeBlade:{Blades:{Button:{title:"Learn more"},description:"Clicking a part on your Startboard opens a blade. As does creating a resource. Blades are your entry point to discover insights, perform actions, and build applications.",
subTitle:"Insights and actions happen here",title:"Blades"},Hubs:{Alerts:{description:"Get alerts about system operations and tasks",
title:"Notifications"},Billing:{description:"Forecast expenses and costs to optimize your apps",title:
"Billing"},Browse:{description:"Navigate to your most-used resources in an instant",title:"Browse"},
Create:{description:"Create a service or add a new resource",title:"+New"},Home:{description:"Switch between your Starboard and your active work",
title:"Home"},Journey:{description:"Easily resume work where you left off",title:"Active"},title:"Hub menu"},
RightClick:{description:"Access commands, customize options, and more.",title:"Right click"},Startboard:
{description:"It's your homepage reimagined. See dynamic data and all the details you care about most across resources, in real time. Customize it to fit your work—and your work style.",
title:"Startboard"},Welcome:{description:"The Azure Preview brings everything together in an infinite canvas that adapts to you—not the other way around—with fresh and fast ways to navigate, discover, create, and collaborate.",
title:"Work the way you want"}}},WhatsNew:{Blade:{description:"Latest updates",feedLoadFailed:"It looks like there's nothing new to show right now. We post updates regularly, so check back again soon.",
FeedLoadFailed:{errorMessage:"The feed for the What's new blade content failed to load",title:"Nothing new right now"},
header:"The latest news for",subHeader:"Azure",title:"What's new"},Tile:{description:"",shortTitle:"What's new",
title:"What's new"},Video:{description:"Take a tour: The evolution of Azure",title:"What's new"}}}});
define("HubsExtension/Notifications/NotificationsClientStrings",function(){return{AssetTypeNames:{Notification:
{lowerPlural:"notifications",lowerSingular:"notification",plural:"Notifications",singular:"Notification"}},
descriptionColumn:"Description",emptyNotificationsList:"No notifications in the past 24 hours",errorFetchingEventsMessage:
"There was an error getting server events for subscription '{0}'. The operation will be retried automatically.",
errorFetchingEventsResolvedMessage:"The issue with getting server events for subscription '{0}' has now been resolved.",
errorFetchingEventsResolvedTitle:"Resolved issue with getting server events",errorFetchingEventsTitle:
"Error getting server events",errorNotificationType:"Critical",infoNotificationType:"Information",inProgressNotificationType:
"In Progress",labelColumn:"Name",listOfNotifications:"List of notifications",stateColumn:"Status",subscriptionListUpdatedNotificationMessage:
"Your list of subscriptions has been updated.",subscriptionListUpdatedNotificationTitle:"Subscriptions updated",
successNotificationType:"Success",tileName:"Notifications",timestampColumn:"Time",typeColumn:"Type",
warningNotificationType:"Warning"}})