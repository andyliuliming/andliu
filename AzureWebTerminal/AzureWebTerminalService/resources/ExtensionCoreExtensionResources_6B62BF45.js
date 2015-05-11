(function(n,t){"use strict";var i={},r;(function(){function r(n,t){var i;if(typeof n=="object"&&typeof
t=="object")for(i in t)t.hasOwnProperty(i)&&(n[i]?r(n[i],t[i]):n[i]=t[i]);return n}function f(n,t,i)
{n[t]=n[t]||{};r(n[t],i)}if(r(n,{Resources:{getResources:function(){}}}),t)for(var u in t)t.hasOwnProperty(
u)&&f(i,u,t[u])})();r=n.Resources.getResources;n.Resources.getResources=function(n){return r(n)||i[n]}
})(this,{"ExtensionCore.Resources":{kiloBytesLong:"KiloBytes",LogStream_connectingMessage:"Connecting...",
durationMinutes:"{0} Minutes",Network_Validation_reserved:"The IP is already reserved.",Validation_ResourceGroup_regex:
"The resource group must begin with a letter, end with a letter or number, and may only contain letters, numbers, underscores, dots, and hyphens.",
Create_ResourceGroup_filteredSubscription:"The resource group is filtered to the selected subscription id",
EditableGrid_Validation_fieldMustBeUnique:"This field must be unique",megaBytes:"MB",Network_Validation_missingAddressSpace:
"You must set an address space to check containment",genericErrorMessage:"There was an error processing your request. Please try again in a few moments.",
region_northcentralus:"North Central US",LogStream_connectionLostMessage:"The connection has been terminated.",
durationMilliseconds:"{0} Milliseconds",EditableGrid_MultiselectDropdown_displayFormat:"{0} selected",
region_eastus:"East US",Validation_ResourceGroup_unique:"The resource group name is already in use in the selected subscription.",
teraBytesLong:"TeraBytes",EditableGrid_hiddenForSecurity:"< Hidden for Security >",exaBytesLong:"ExaBytes",
durationDay:"{0} Day",Network_Validation_betweenPrefix:"The CIDR prefix must be between {0} and {1}",
region_westus:"West US",Field_ConfirmPassword_title:"Confirm Password",region_northeurope:"North Europe",
region_westjapan:"West Japan",LogStream_reconnectingMessage:"Attempting to reconnect...",Validation_required:
"This field is required.",yottaBytes:"YB",region_southeastasia:"South East Asia",Network_Validation_malformedAddress:
"Malformed IP Address: {0}",petaBytesLong:"PetaBytes",durationSecond:"{0} Second",Create_Subscription_title:
"Subscription",Create_Location_title:"Location",durationHours:"{0} Hours",loading:"Loading...",Create_ResourceGroup_title:
"Resource Group",Network_Validation_malformedSubnet:"Malformed Subnet Address. Address was: {0}",Network_Validation_notInSubnet:
"The IP must be in the {0} subnet.",Network_Validation_privateSpace:"Your subnet must be contained in one of the private IP Address Spaces: 192.168.0.0/16, 172.16.0.0/12, or 10.0.0.0/8",
region_northwestus:"North West US",megaBytesLong:"MegaBytes",durationMinute:"{0} Minute",petaBytes:"PB",
certificateValidation:"An attempt to verify a X509Certificate did not complete within the specified time limit of {0} ms. Please ensure the certificate is valid.",
Validation_confirmPassword:"The passwords must match.",Validation_ResourceGroup_maxLength:"The resource group name cannot contain less than 3 characters or more than 64 characters.",
gigaBytes:"GB",Validation_invalidArgument:"Invalid argument: {0}",zettaBytes:"ZB",bytes:"B",region_washingtondc:
"Washington DC",durationMillisecond:"{0} Millisecond",durationHour:"{0} Hour",durationDays:"{0} Days",
yottaBytesLong:"YottaBytes",kiloBytes:"KB",region_saopaulo:"São Paulo",teraBytes:"TB",reasonMessage:
"Reason: {0}",region_australiaeast:"Australia East",Network_Validation_notInRange:"The IP must be between {0} and {1}.",
gigaBytesLong:"GigaBytes",Network_Validation:"",exaBytes:"EB",region_southcentralus:"South Central US",
region_unitedstates:"United States",Validation_ResourceGroup_regexNoSpecialCharacters:"The resource group must begin with a letter, end with a letter or number, and may only contain letters, numbers, and hyphens.",
Create_Location_filtered:"The item you are creating is not available in this location",Network_Validation_maxPrefix:
"The CIDR prefix must be smaller than or equal to {0}",region_siliconvalley:"Silicon Valley",region_centralus:
"Central US",Network_Validation_subnetOverlaps:"This subnet overlaps with another subnet: {0}",Network_Validation_octet:
"Octet {0} with value {1} is invalid. It must be between {2} and {3}",Create_Subscription_lockedResourceGroup:
"The subscription is locked to the selected resource group",region_westeurope:"West Europe",region_eastus2:
"East US 2",bytesLong:"Bytes",Network_Validation_prefix:"The CIDR prefix must be between 1 and 32",region_eastasia:
"East Asia",zettaBytesLong:"ZettaBytes",region_australiasoutheast:"Australia Southeast",EditableGrid_MultiselectDropdown_maxDisplayFormat:
"max {0} selected",durationSeconds:"{0} Seconds",Network_Validation_nonNullSubnet:"A non-null subnet address is required",
region_eastjapan:"East Japan",Network_Validation_nonNullAddress:"A non-null IP address is required",
Network_Validation_subnetNotContained:"The subnet {0} is not contained in the address space"}})