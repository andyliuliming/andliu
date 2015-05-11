(function(n,t){"use strict";var i={},r;(function(){function r(n,t){var i;if(typeof n=="object"&&typeof
t=="object")for(i in t)t.hasOwnProperty(i)&&(n[i]?r(n[i],t[i]):n[i]=t[i]);return n}function f(n,t,i)
{n[t]=n[t]||{};r(n[t],i)}if(r(n,{Resources:{getResources:function(){}}}),t)for(var u in t)t.hasOwnProperty(
u)&&f(i,u,t[u])})();r=n.Resources.getResources;n.Resources.getResources=function(n){return r(n)||i[n]}
})(this,{"ClassicComputeExtension.ExtensionAssets.Resources.General":{Settings_Keywords_Properties_domainName:
"Domain name",Settings_Keywords_LoadBalancedSets_loadBalancer:"Load balancer",QuickStart_Parts_Main_Sections_Learn_title:
"Learn more",Settings_Keywords_LoadBalancedSets_lb:"LB",QuickStart_Parts_Main_Sections_Learn_Links_SupportForums_text:
"Support forums",loadingStatus:"Loading",Access_rolesDescription:"Manage roles for role based access",
alertRules:"Alert rules",ResourceExtension_noExtensionsMessage:"No extensions added.",metricsNetworkInOutDescription:
"View recent network usage",metricsDiskReadWriteDescription:"View recent disk usage",QuickStart_Parts_Main_Sections_Enhance_Links_LoadBalance_text:
"Load balancing virtual machines",resourceMapTitle:"Resource map",QuickStart_Blades_Main_title:"Quick start",
Settings_Keywords_Properties_operatingSystem:"Operating System",ResourceSummary_sizeLabel:"Size",Usage_pricingTierTitle:
"Pricing tier",Settings_extensions:"Extensions",QuickStart_Parts_Main_Sections_Enhance_Links_Capture_text:
"Take snapshots of your virtual machine",metricsPercentageCPU:"CPU percentage today",QuickStart_Parts_Main_Sections_Tools_Links_InstallPS_text:
"Install the Azure PowerShell cmdlets",Settings_settings:"Settings",Settings_Keywords_Roles_RBAC:"RBAC",
metricsPercentageCPUdescription:"View recent CPU usage",ResourceSummary_subscriptionNameLabel:"Subscription name",
Settings_Keywords_IpAddresses_subnet:"Subnet",metricsNetworkInOut:"Network in and out",Settings_roles:
"Roles",Settings_scale:"Scale",Settings_users:"Users",Settings_disks:"Disks",Settings_Keywords_IpAddresses_publicKeyword:
"Public",Settings_Keywords_Extensions_script:"Script",Settings_Keywords_IpAddresses_ip:"IPs",Settings_Keywords_Properties_ipAddress:
"IP address",Settings_availabilitySet:"Availability set",Settings_Keywords_Properties_os:"OS",Settings_ipAddresses:
"IP addresses",QuickStart_Parts_Main_Sections_Work_title:"Put it to work",Settings_Keywords_IpAddresses_instance:
"Instance",Settings_properties:"Properties",Operations_eventsDescription:"View recent management events",
Settings_Keywords_Extensions_av:"AV",Settings_Keywords_Properties_status:"Status",QuickStart_Parts_Main_Sections_Work_Links_ControlTraffic_text:
"Control inbound traffic",ResourceExtension_extensionsAdded:"{0} extensions added",Settings_Keywords_Disks_ssd:
"SSD",Settings_Keywords_Disks_vhd:"VHD",QuickStart_Parts_Main_Sections_Enhance_Links_EnableHighAvailability_text:
"Enable high availability",Settings_Keywords_Endpoints_ports:"Ports",Settings_Keywords_Properties_deployment:
"Deployment",QuickStart_Parts_Main_Sections_Tools_Links_InstallCMD_text:"Install the Azure command line interface",
QuickStart_Parts_Main_Sections_Work_Links_AddStorage_text:"Add more storage",QuickStart_Parts_Main_Sections_Learn_Links_Tutorials_text:
"Tutorials",Settings_Keywords_Properties_location:"Location",configuredStatus:"Configured",Access_users:
"Users",Access_roles:"Roles",QuickStart_Parts_Main_Sections_Enhance_Links_VirtualNetworks_text:"Use Virtual Networks to set up connectivity between your virtual machines",
Settings_Keywords_AvailabilitySet_sla:"SLA",alertRulesDescription:"Manage alert rules",QuickStart_Parts_Main_Sections_Learn_Links_RestAPI_text:
"REST API reference",QuickStart_Parts_Main_Sections_Enhance_title:"Make it awesome",QuickStart_Parts_Main_Sections_Learn_description:
"Get a jumpstart on virtual machines in Microsoft Azure.",QuickStart_Parts_Launcher_shortTitle:"Quick start",
Settings_Keywords_Roles_access:"Access",Settings_Keywords_Properties_subscription:"Subscription",ResourceSummary_locationLabel:
"Location",Settings_Keywords_Properties_hostName:"Host name",ResourceSummary_dnsNameLabel:"DNS name",
QuickStart_Parts_Main_Sections_Learn_Links_FAQ_text:"FAQ",ResourceSummary_subscriptionIdLabel:"Subscription id",
metricsDiskReadWrite:"Disk read and write",Settings_Keywords_Extensions_antiVirus:"Antivirus",Settings_Keywords_Endpoints_port:
"Port",Settings_endpoints:"Endpoints",QuickStart_Parts_Launcher_title:"Quick start",Settings_loadBalancedSets:
"Load balanced sets",Settings_settingsDescription:"Manage settings for your resource",QuickStart_Parts_Main_Sections_Tools_title:
"Get free tools",ResourceSummary_privateIpLabel:"Private IP address",QuickStart_Parts_Main_Sections_Work_description:
"Check out these guides for what to do after creating your virtual machine.",Settings_Keywords_Disks_vhds:
"VHDs",Usage_pricingTierDescription:"Unlock features and increase capacity",QuickStart_Parts_Launcher_description:
"Find resources to get you started",QuickStart_Parts_Main_Sections_Tools_description:"Manage and automate your virtual machines using scripts.",
Access_usersDescription:"Manage users for role based access",Settings_Keywords_IpAddresses_privateKeyword:
"Private",Settings_Keywords_Users_access:"Access",Settings_Keywords_Properties_resource:"Resource",Settings_endpointsDescription:
"Manage endpoints for this VM",ResourceSummary_statusLabel:"Status",resourceMapDescription:"Shows related resource information",
Operations_events:"Events",Settings_Keywords_Users_rbac:"RBAC",ResourceSummary_virtualIpLabel:"Virtual IP address",
QuickStart_Parts_Main_Sections_Work_Links_ConnectToVM_text:"Connect to your virtual machine",QuickStart_Parts_Main_Sections_Enhance_description:
"Take your virtual machine to the next level by combining it with other virtual machines and other Azure services."},
"ClassicComputeExtension.ExtensionAssets.Resources.Create":{Pricing_month:"Month",SharePoint_CreateSharePoint_Field_OptionalConfigurationSelector_title:
"Optional Configuration",Validation_UserName_Windows_spaces:"Username cannot contain all spaces",SharePoint_Field_HostNamePrefix_helpBalloonText:
"This unique identifier is appended with the virtual machine type suffix to create a unique name for your virtual machine.",
SQLAlwaysOn_Field_SetAvailabilityGroupListener_helpBalloonText:"An availability group listener is a server name to which clients can connect in order to access a database in a primary or secondary replica of an availability group. Availability group listeners direct incoming connections to the primary replica or to a read-only secondary replica.",
notSupportedStorageAccountType:"This storage account type is not supported.",OSSettings_Blade_title:
"OS Settings",DomainJoin_Field_UserName_title:"User Name",Cloudera_Field_EnableSearch_title:"Enable Search",
UserImage_CreateVM_Notification_Success_message:"Successfully created virtual machine '{0}' with Image '{1}'.",
SharePoint_SqlServers_Field_WitnessPricingTier_lockedText:"This VM is the witness for the Failover Cluster used by the SQL AlwaysOn Availabiliy Group. The default size is Basic A0 and can't be changed.",
Pricing_network:"Network",DataStax_Field_SSH_title:"SSH Key",Cloudera_Field_EnableSpark_helpBalloon:
"Spark Help",Field_NewRelic_Enabled_title:"Collection",SQLAlwaysOn_Filtering_storageByLocation:"Only storage accounts in the selected location can be used",
SQLAlwaysOn_Field_PricingTier_title:"Pricing Tier",Cloudera_Field_Username_helpBalloon:"The administrator user name to be registered on each virtual machine in the cluster.",
SharePoint_DomainControllers_Field_Domain_title:"Forest Root Domain Name",AzurePackWebSites_MachineConfig_info:
"Machine configuration for Azure Pack Websites",Cloudera_Field_CDHVersion_title:"CDH Version",Filter_Domain_Subscription_text:
"You cannot choose this domain name because it is in a different subscription",DataStax_Validation_ResourceGroupName_regex:
"The resource group may only contain lowercase letters and numbers.",Field_Location_Locked_storage:"The location is locked to the selected storage account",
UserDisk_CreateVM_Notification_Success_title:"Successfully created virtual machine.",Cloudera_Field_SSH_title:
"SSH Key",Validation_UserName_reserved:"The username cannot match a reserved username",Filter_Domain_ResourceGroup_text:
"You cannot choose this domain name because it is in a different resource group",SQLAlwaysOn_OptionalConfiguration_Selector_displayText:
"Domain controller, Virtual network, storage, diagnostics",Cloudera_Blade_title:"Create Cloudera cluster",
AzurePackWebSites_Cn_title:"Controller Configuration",Cloudera_Field_Products_title:"Products",Validation_SshKey_invalid:
"The key is invalid. Ensure that it begins with 'ssh-rsa' and that you've copied the key correctly.",
SQLAlwaysOn_Field_AvailabilityGroupName_Validation_length:"The availability group name cannot be more than {0} characters long.",
AzurePackWebSites_Cn_info:"Select the number of web farm controllers as well as the pricing tier/VM size.",
SharePoint_DomainControllers_Field_Domain_helpBalloonText:"Use standard domain syntax: example.com.",
SQLAlwaysOn_CreateSQLAlwaysOn_Field_ResourceGroupName_title:"Resource Group",AzurePackWebSites_Lb_title:
"Load Balancer Configuration",DataStax_Field_NodePricingTier_helpBalloon:"Select the pricing tier/VM size for all worker nodes in the cluster.",
disabledSpecMessageWithGalleryItem:"This size is not supported for this virtual machine in the {0} gallery package.",
SQLAlwaysOn_Field_ConfirmPassword_title:"Confirm Password",DataStax_Field_Username_title:"Username",
Field_Subscription_Locked_PerformanceMonitoring:"The subscription is locked to the selected application monitoring provider account",
AzurePackWebSites_Wm_title:"Medium Dedicated Worker Configuration",ImageVersion_Blade_title:"Image version",
Field_ResourceGroup_Locked_domainName:"The resource group is locked to the selected domain name",SQLAlwaysOn_Field_HostNamePrefix_helpBalloonText:
'This unique identifier is appended with the virtual machine type suffix to create a unique name for your virtual machine. For example, a host name prefix of "contoso" will result in host names "contoso-dc1" and "contoso-dc2" for Active Directory domain controllers.',
SharePoint_SharePointServers_Field_FarmPassphrase_helpBalloonText:"A secure password phrase that will be used to join other machines to this farm.",
OverQuota_cores:"{0} cores are needed for this configuration, but only {1} cores (of {2}) remain in your subscription.",
UserImage_CreateVM_Notification_Success_title:"Successfully created virtual machine.",SQLAlwaysOn_SqlServers_Field_WitnessPricingTier_lockedText:
"This VM is the witness for the Failover Cluster used by the SQL AlwaysOn Availabiliy Group. The default size is Basic A0 and can't be changed.",
Field_DomainName_Selector_title:"Domain Name",Field_SQLAutoPatching_Selector_title:"SQL Automated patching",
SQLAlwaysOn_CreateSQLAlwaysOn_Field_SQLServerSettingsSelector_title:"SQL Server settings",SQLAlwaysOn_CreateSQLAlwaysOn_blade_title:
"Create SQL Server AlwaysOn",Field_IpAddress_defaultTitle:"Virtual, instance, private",Field_AuthenticationType_title:
"Authentication Type",SharePoint_Filtering_storageBySubscription:"Only storage accounts in the selected subscription can be used",
Field_OSSettings_Selector_title:"OS Settings",Validation_UserName_NoDomain_ErrorMessage:"The username provided should be in the following format username@domain or username\\domain.",
Field_Network_Selector_title:"Network",Field_SQLAutoBackup_Selector_title:"SQL Automated backup",InstanceIpAddress_Options_title:
"Instance IP address",UserImage_CreateVM_Notification_Failure_message:"Failed to create virtual machine '{0}' with Image '{1}'.",
SharePoint_SqlServers_Field_ServerAccount_helpBalloonText:"An account with this username will be used to run the following SQL Server services: MSSQLSERVER and SQLSERVERAGENT.",
Validation_Linux_HostName_regex:"Host name must be between 3 and 64 characters. The first and last character must be alpha-numeric.",
Filter_StorageAccount_Location_text:"You cannot choose this storage account because it is in a different location",
Pricing_Network_noGateway:"No Gateway",Field_Extensions_Selector_DisplayText_noExtensions:"No extensions selected",
Cloudera_Field_StoragePricing_title:"Storage Pricing Tier",SQLAlwaysOn_Field_AvailabilityGroupListenerPort_helpBalloonText:
"",Field_Disks_Selector_title:"Disks",IpAddress_Picker_Blade_title:"IP addresses",Filter_Domain_Location_text:
"You cannot choose this domain name because it is in a different region",SharePoint_SqlServers_Blade_title:
"SQL Servers",SQLAlwaysOn_Field_AvailabilityGroupName_title:"Availability Group Name",Cloudera_Field_Username_title:
"Username",SharePoint_SharePointServers_Field_FarmConfirmPassphrase_title:"Confirm Passphrase",Field_ImageVersion_Selector_title:
"Image Version",Field_Timezone_Selector_title:"Time Zone",SharePoint_CreateSharePoint_Selectors_displayText:
"Configure settings",Cloudera_Field_WorkerCount_maxWorkers:"The maximum number of worker nodes is {0}.",
SharePoint_SharePointServers_Field_UseAdminPassword_inlineLabel:"Use the Administrator password",AzurePackWebSites_Ux_title:
"Portal Server Configuration",Cloudera_Field_WorkerSize_title:"Pricing Tier",AzurePackWebSites_Wl_title:
"Large Dedicated Worker Configuration",AzurePackWebSites_Mn_info:"Select the number of management servers as well as the pricing tier/VM size.",
SharePoint_OptionalConfiguration_Selector_displayText:"Virtual network, storage, diagnostics",SQLAlwaysOn_SQLServer_Blade_description:
"",DomainJoin_Field_UserName_helpBalloonText:"The account specified must be a member of the Domain administrators group.",
Cloudera_Field_Workload_analytics:"Analytics",SharePoint_CreateSharePoint_Blade_title:"Create a SharePoint farm",
SharePoint_DomainControllers_Field_PricingTier_highAvailabilityDisplayText:"{0} (2 instances)",SQLAlwaysOn_Locking_subscriptionByNetwork:
"The subscription has been locked to the selected virtual network",Cloudera_Field_EnableImpala_helpBalloon:
"Impala Help",InstanceIpAddress_IdleTimeOut_title:"Idle timeout (in minutes)",Pricing_vm:"VM",SQLAlwaysOn_Field_HostNamePrefix_title:
"Host Name Prefix",Field_VirtualNetwork_Selector_title:"Virtual Network",SharePoint_CreateSharePoint_Field_ResourceGroupName_helpBalloonText:
"Resource groups make it simple to see and manage related Azure resources.",Cloudera_Field_MasterPricing_title:
"Master Pricing Tier",SharePoint_SharePointServers_Blade_title:"SharePoint servers",IpAddress_Field_title:
"IP Address",AzurePackWebSites_Lb_info:"Select the number of load balancers as well as the pricing tier/VM size.",
SQLAlwaysOn_Field_AvailabilityGroupListenerName_title:"Availability Group Listener Name",Field_Location_Locked_domainName:
"The location is locked to the selected domain name",Field_Selector_DisplayText_configured:"Configured",
SharePoint_CreateSharePoint_Field_SqlServersSelector_title:"SQL Servers",Cloudera_Field_SSH_helpBalloon:
"Copy and paste an OpenSSH public key, which can be generated with tools like ssh-keygen on Linux and OS X or PuttyGen on Windows.",
OverQuota_storageAccounts:"{0} storage accounts are needed for this configuration, but only {1} storage accounts (of {2}) remain in your subscription.",
Field_DomainToJoin_title:"Domain",SharePoint_CreateSharePoint_Field_UserName_helpBalloonText:"A domain administrator account as well as a local administrator account with this username will be created to access all virtual machines in the SharePoint farm.",
Field_OptionalConfiguration_lockedText:"A valid host name is required to configure the virtual machine.",
SQLAlwaysOn_Field_AvailabilityGroupListenerName_helpBalloonText:"The port for the availability group listener is 1433.",
AzurePackWebSites_Ux_info:"Select the pricing tier/VM size of the portal server.",SQLAlwaysOn_SqlServers_Field_UseAdminPassword_helpBalloonText:
"Use the same password as the one for the Administrator account, or uncheck to specify a different password to use for this account.",
SQLAlwaysOn_CreateSQLAlwaysOn_Field_OptionalConfigurationSelector_title:"Optional configuration",OptionalConfig_Blade_title:
"Optional config",SharePoint_SqlServers_Field_PricingTier_highAvailabilityDisplayText:"{0} (2 instances)",
SQLAlwaysOn_SqlServers_Field_PricingTier_highAvailabilityDisplayText:"{0} (2 instances)",DomainJoin_Field_NewDomain_title:
"New",Cloudera_Field_CDHVersion_helpBalloon:"CDH Help",SQLAlwaysOn_Field_PricingTier_helpBalloonMessage:
"The virtual machines created as the domain controllers for the new forest will use this pricing tier.",
Field_DNSServers_azureProvided:"Azure Provided",SharePoint_SqlServers_Field_UseAdminPassword_inlineLabel:
"Use the Administrator password",Validation_FullyQualifiedDomainName_regex:"The domain name must be a valid fully qualified domain name.",
DataStax_Field_Password_title:"Password",UserDisk_CreateVM_Notification_Failure_message:"Failed to create virtual machine '{0}' with OS disk '{1}'.",
EntryPoint_Blade_title:"Create VM",Field_NewRelic_Enabled_off:"Off",SharePoint_CreateSharePoint_Blade_description:
"",SQLAlwaysOn_Field_NewExistingDomain_helpBalloonText:"For joining an existing domain, the username and password specified for the virtual machine must also be the credentials of a domain user who is a member of the Domain Admins group.",
AzurePackWebSites_Fs_info:"Select the number of file servers as well as the pricing tier/VM size.",VirtualIpAddress_Options_help:
"A virtual IP address (VIP) is a public IP address that can be used to access virtual machines in Azure. All virtual machines in the same domain name share a single VIP. By using a reserved IP addresses, you can ensure that the virtual IP addresses for your virtual machines never change.",
Cloudera_Field_EnableSpark_title:"Enable Spark",Validation_DomainName_locked:"The VM host name must be specified before you can configure the domain name",
DomainJoin_Field_JoinDomain_title:"Join Domain",OverQuota_reservedIps:"{0} reserved IP addresses are needed for this configuration, but only {1} reserved IP addresses (of {2}) remain in your subscription.",
SharePoint_Field_ConfirmPassword_title:"Confirm Password",AzurePackWebSites_Mn_title:"Management Server Configuration",
SQLAlwaysOn_CreateSQLAlwaysOn_Field_DomainJoinSelector_title:"Domain join",DataStax_Blade_title:"Create DataStax starter cluster",
Field_PricingTier_title:"Pricing Tier",AzurePackWebSites_Wl_info:"Select the number of large dedicated worker servers as well as the pricing tier/VM size.",
TimeZone_Blade_title:"Time Zone",Field_SQLAutoPatching_Selector_helpBalloonMessage:"Configure the download and installation of Windows and Microsoft updates for your Azure SQL virtual machine.",
Field_Selector_DisplayText_reviewDefault:"Review default settings",AzurePackWebSites_Fs_title:"File Server Configuration",
SQLAlwaysOn_SQLServer_Blade_title:"SQL Server settings",Cloudera_Field_SparkVersion_helpBalloon:"Spark Help",
Field_DomainUser_emptyText:"Domain\\user or user@domain.tld",AzurePackWebSites_Wm_info:"Select the number of medium dedicated worker servers as well as the pricing tier/VM size.",
Field_SshPublicKey_title:"SSH Public Key",Cloudera_Field_SearchVersion_title:"Search Version",Field_DomainJoin_Selector_title:
"Domain Join",Endpoints_ConfiguredMessage:"This package requires the following endpoints to be created, so they cannot be modified here :",
Field_DNSServers_Selector_title:"DNS Servers",Cloudera_Field_WorkerConfig_displayTemplate:"{0} x{1}, {2}/worker",
Field_Subscription_Locked_domainName:"The subscription is locked to the selected domain name",Cloudera_Field_WorkerConfig_title:
"Worker Configuration",DomainJoin_Field_ExistingDomainName_title:"Domain",SharePoint_SharePointServers_Field_UserAccount_helpBalloonText:
"A domain account with this username will be created to run setup and SharePoint Products Configuration Wizard.",
Field_Storage_Selector_title:"Storage Account",SharePoint_SharePointServers_Field_UseAdminPassword_helpBalloonText:
"Use the same password as the one for the Administrator account, or uncheck to specify a different password for each of the fields below.",
Field_Password_title:"Password",AzurePackWebSites_RoleConfig_title:"Configure role",AzurePackWebSites_Ww_info:
"Select the number of shared worker servers as well as the pricing tier/VM size.",Cloudera_Field_ClusterName_helpBalloon:
"This name will be used to generate names for resources in the cluster such as machine names and storage account name(s).",
Field_IpAddress_Selector_title:"IP addresses",SharePoint_CreateSharePoint_Field_HighAvailability_helpBalloonText:
"Enable this to configure 9 virtual machines for redundancy: 2 for Active Directory, 3 for SQL, and 4 for SharePoint.",
disabledSpecMessage:"This size is not supported for this virtual machine.",SQLAlwaysOn_CreateSQLAlwaysOn_Field_UserName_helpBalloonText:
"",Filter_ResourceGroup_ReservedIp_text:"The resource group is filtered to the selected reserved IP address.",
AzurePackWebSites_Ws_info:"Select the number of small dedicated worker servers as well as the pricing tier/VM size.",
SharePoint_SharePointServers_Field_FarmAccount_title:"Server Farm Account",SQLAlwaysOn_CreateSQLAlwaysOn_Field_UserName_title:
"User Name",NewRelic_Blade_title:"New Relic Monitoring",UserDisk_CreateVM_Notification_Failure_title:
"Failed to create virtual machine.",SharePoint_DomainControllers_Blade_title:"Domain controllers",SharePoint_SharePointServers_Blade_description:
"Configure SharePoint web and application servers.",Filter_Location_text:"The selected image is not available in this location",
SQLAlwaysOn_OptionalConfiguration_Blade_title:"Optional configuration",DataStax_Field_StoragePricing_title:
"Storage Pricing Tier",Validation_Password_strength:"The password must contain at least 3 of the following character classes: 1. Lower case letter, 2. Upper case letter, 3. Number, 4. Special character",
InstanceIpAddress_Options_off:"Off",Field_NewRelic_Enabled_helpBalloon:"Turning New Relic collection ON will install the New Relic .NET agent onto your virtual machine, and application performance data will begin uploading to the New Relic service.",
DataStax_Field_StoragePricing_helpBalloon:"Storage account(s) that back the disks on the cluster will be provisioned at this pricing tier.",
Validation_Field_required:"This field is required",SharePoint_CreateSharePoint_Field_HighAvailability_inlineLabel:
"Enable high availability",Field_Location_Locked_reservedIp:"The location is locked to the selected reserved IP address",
Cloudera_Field_WorkerCount_minWorkers:"The minimum number of worker nodes is {0}.",Field_Selector_DisplayText_loading:
"Loading...",Field_Subnet_Selector_title:"Subnet",Field_UserName_Windows_empty:"Enter User Name",DomainJoin_Field_ExistingDomain_title:
"Existing",SharePoint_Field_Password_title:"Password",SharePoint_CreateSharePoint_Field_ResourceGroupName_title:
"Resource Group",Field_Endpoints_Selector_title:"Endpoints",Field_DomainPassword_title:"Password",SharePoint_CreateSharePoint_Field_HighAvailability_title:
"Farm Architecture",Field_UserName_Linux_empty:"Optional",SharePoint_SqlServers_Field_WitnessPricingTier_displayTemplate:
"{0} (1 instance)",DomainJoin_Field_Domain_title:"Forest Root Domain Name",SQLAlwaysOn_Locking_locationByNetwork:
"The location has been locked to the selected virtual network",Cloudera_Field_SparkVersion_title:"Spark Version",
UserDisk_CreateVM_Notification_InProgress_message:"Creating virtual machine '{0}' with OS disk '{1}'...",
DataStax_Field_Username_helpBalloon:"The administrator user name to be registered on each virtual machine in the cluster.",
Pricing_storage:"Storage",Field_HostName_empty:"Enter Host Name",SharePoint_CreateSharePoint_Field_SharePointServersSelector_title:
"SharePoint Servers",Field_HostName_title:"Host Name",Hostname_Validation_nameAlreadyExistsInResourceGroup:
"VM host name already exists in the resource group '{0}'.",Cloudera_Field_HA_helpBalloon:"Checking this box will result in two master nodes being provisioned in the cluster.  If one master becomes unavailable the cluster will remain available.",
Field_SshKey_title:"SSH Public Key",Validation_ResourceGroupName_generateDefaultValues:"The resource group name could not be validated. Please try again.",
VirtualIpAddress_Options_title:"Virtual IP address assignment",InstanceIpAddress_Options_help:"An instance IP address is a public IP address that can be used to access virtual machines in Azure. Unlike a VIP, each virtual machine in a domain name can have its own instance IP address. Additional charges may apply when using public IP addresses.",
Field_PerformanceMonitoring_Selector_title:"Performance Monitoring",Field_StorageAccount_Selector_title:
"Storage Account",Field_Location_Locked_network:"The location is locked to the selected virtual network",
OverQuota_requestIncrease:"Request an increase",DataStax_Field_OpsCenterServerPricingTier_title:"Ops Center Pricing Tier",
Validation_Windows_HostName_regex:"Host name must be between 1 and 15 characters and cannot contain most special characters.",
Validation_Password_length:"The password must be between {0} and {1} characters long",SQLAlwaysOn_CreateSQLAlwaysOn_Field_DomainJoinSelector_displayText:
"Create or join domain",ResourceExtension_AddExtension_hotSpot:"+ Add extension",Cloudera_Field_EnableSearch_helpBalloon:
"Search Help",Cloudera_Field_ResourceGroup_helpBalloon:"Resource groups make it simple to see and manage related Azure resources.",
Cloudera_Field_ClusterName_regexValidation:"The cluster name can only contain letters and numbers",Help_SshKey_text:
"Copy and paste an OpenSSH public key, which can be generated with tools like ssh-keygen on Linux and OS X or PuttyGen on Windows.",
Filter_VirtualNetwork_Location_text:"You cannot choose this virtual network because it is in a different location",
DataStax_Field_NodePricingTier_title:"Node Pricing Tier",Field_AutomaticUpdates_on:"On",SharePoint_OptionalConfiguration_Blade_title:
"Optional configuration",PrivateIp_Options_dhcp:"DHCP",OverQuota_dnsServers:"{0} DNS servers are needed for this configuration, but only {1} DNS servers (of {2}) remain in your subscription.",
SharePoint_Field_HostNamePrefix_title:"Host Name Prefix",Cloudera_Field_HA_title:"Enable high availability",
Cloudera_Field_SearchVersion_helpBalloon:"Search Help",Validation_UserName_regex:"Invalid username",
SQLAlwaysOn_CreateSQLAlwaysOn_Selectors_displayText:"Configure settings",Validation_Password_reserved:
"The password cannot match a reserved password",Field_Diagnostics_Status_custom:"Custom",SharePoint_CreateSharePoint_Field_DomainControllersSelector_title:
"Domain Controllers",SharePoint_Filtering_storageByLocation:"Only storage accounts in the selected location can be used",
NewRelic_Blade_description:"New Relic .NET application performance monitoring for Azure virtual machines.",
VirtualIpAddress_Options_reserved:"Reserved",ResourceExtension_Blade_description:"Add, remove and configure extensions, which are software modules that extend the capabilities of your virtual machine.",
SharePoint_Locking_locationByStorage:"The location has been locked to the selected storage account",
SQLAlwaysOn_CreateSQLAlwaysOn_Field_ResourceGroupName_helpBalloonText:"Resource groups make it simple to see and manage related Azure resources.",
Selector_ReservedIpAddress_title:"Reserved IP Address",DataStax_Field_SSH_helpBalloon:"Copy and paste an OpenSSH public key, which can be generated with tools like ssh-keygen on Linux and OS X or PuttyGen on Windows.",
SQLAlwaysOn_Locking_locationByStorage:"The location has been locked to the selected storage account",
Field_AutomaticUpdates_off:"Off",DomainJoin_Field_Domain_helpBalloonText:"Use standard domain syntax: example.com.",
SQLAlwaysOn_CreateSQLAlwaysOn_blade_description:"",Field_Subscription_Locked_network:"The subscription has been locked to the selected virtual network",
Validation_Field_digits:"This field can contain only numerics.",Cloudera_Field_ClusterName_title:"Cluster Name",
UserImage_CreateVM_Notification_Failure_title:"Failed to create virtual machine.",UserDisk_CreateVM_Notification_InProgress_title:
"Creating virtual machine ...",VirtualIpAddress_Options_dynamic:"Dynamic",Field_DomainUser_title:"User Name",
Cloudera_Field_ImpalaVersion_helpBalloon:"Impala Help",DataStax_Field_OpsCenterServerPricingTier_helpBalloon:
"The ops center node will be provisioned at this pricing tier/VM size.",DataStax_Validation_ResourceGroupName_maxLength:
"The resource group name cannot contain less than 3 characters or more than 20 characters.",DomainJoin_Blade_description:
"Customize the new Active Directory forest or join an existing domain.",OverQuota_virtualNetworks:"{0} virtual networks are needed for this configuration, but only {1} virtual networks (of {2}) remain in your subscription.",
AzurePackWebSites_Pb_title:"Publisher Configuation",SharePoint_SharePointServers_Field_PricingTier_highAvailabilityDisplayText:
"{0} (4 instances)",DomainJoin_Field_ExistingDomain_notAllowedText:"Joining an existing Active Directory domain can only be performed when using an existing virtual network, while joining a new Active Directory domain can only be performed when using a new virtual network.",
PrivateIp_Options_staticIp:"Static",DataStax_Field_ConfirmPassword_title:"Confirm Password",SharePoint_DomainControllers_Blade_description:
"Configure the domain controllers for this SharePoint farm.",Field_Selector_DisplayText_notConfigured:
"Not configured",SharePoint_Locking_subscriptionByStorage:"The subscription has been locked to the selected storage account",
AzurePackWebSites_Ww_title:"Shared Worker Configuration",DomainJoin_Field_PricingTier_highAvailabilityDisplayText:
"{0} (2 instances)",Validation_HostNamePrefix_maxLength:"The host name prefix cannot be more than {0} characters long.",
Field_Subscription_Locked_storage:"The subscription is locked to the selected storage account",Field_OSRelease_title:
"OS Release",ResourceExtension_DefaultExtensions_infoMessage:"This VM image installs the following extensions by default:",
OverQuota_domainNames:"{0} domain names are needed for this configuration, but only {1} domain names (of {2}) remain in your subscription.",
AzurePackWebSites_MachineConfig_title:"Machine Configuration",Cloudera_Field_EnableImpala_title:"Enable Impala",
EndpointConfiguration_Blade_title:"Endpoint configuration",SharePoint_SqlServers_Field_WitnessPricingTier_title:
"File Share Witness",SharePoint_SharePointServers_Field_UserAccount_title:"Setup User Account",Field_AutomaticUpdates_title:
"Automatic Updates",Field_diagnostics_title:"Diagnostics",Field_OptionalConfiguration_title:"Optional Configuration",
SharePoint_SqlServers_Blade_description:"Configure the instance of SQL Server for this SharePoint farm.",
Field_AvailabilitySet_Selector_title:"Availability set",UserDisk_CreateVM_Notification_Success_message:
"Successfully created virtual machine '{0}' with OS disk '{1}'.",SQLAlwaysOn_Field_SetAvailabilityGroupListener_title:
"Set up availability group listener",Field_OptionalConfiguration_displayText:"Network, storage, diagnostics",
SharePoint_SharePointServers_Field_FarmPassphrase_title:"Server Farm Passphrase",Cloudera_Field_WorkerCount_title:
"Number of workers",Cloudera_Field_ResourceGroup_title:"Resource Group",Filter_StorageAccount_AccountType_text:
"You cannot choose this storage account because its account type is not supported",Cloudera_Field_Workload_helpBalloon:
"Workload Help",AzurePackWebSites_Db_title:"Database Server Configuration",Cloudera_Field_ImpalaVersion_title:
"Impala Version",DataStax_Field_ResourceGroup_helpBalloon:"Resource groups make it simple to see and manage related Azure resources.",
Network_Blade_title:"Network",SQLAlwaysOn_Field_AvailabilityGroupName_helpBalloonText:"An availability group is a container for a set of databases that fail over together.",
SQLAlwaysOn_Field_AvailabilityGroupListenerPort_title:"Availability Group Listener Port",Field_SQLAutoBackup_Selector_helpBalloonMessage:
"Configure automatic backup to back up your data on Azure SQL virtual machines to Azure Storage.",AzurePackWebSites_Pb_info:
"Select the pricing tier/VM size of the publisher server.",SharePoint_CreateSharePoint_Field_UserName_title:
"User Name",AzurePackWebSites_Db_info:"Select the pricing tier/VM size of the database server.",Validation_Field_range:
"This field must be between {0} and {1}.",SQLAlwaysOn_SqlServers_Field_ServerAccount_helpBalloonText:
"An account with this username will be used to run the following SQL Server services: MSSQLSERVER and SQLSERVERAGENT.",
SharePoint_SqlServers_Field_ServerAccount_title:"SQL Server Service Account",PrivateIp_Options_title:
"IP address assignment",Field_NewRelic_Enabled_on:"On",SQLAlwaysOn_Locking_subscriptionByStorage:"The subscription has been locked to the selected storage account",
DataStax_Field_ResourceGroup_title:"Resource Group",SharePoint_SharePointServers_Field_FarmAccount_helpBalloonText:
"A domain account with this username will be created to perform the following tasks: configure and manage server farm, act as the application pool identity for the SharePoint Central Administration Web site and run the Microsoft SharePoint Foundation Workflow Timer Service.",
SQLAlwaysOn_SqlServers_Field_ServerAccount_title:"SQL Server Service Account",Filter_VirtualNetwork_Subscription_text:
"You cannot choose this virtual network because it is in a different subscription",SQLAlwaysOn_SqlServers_Field_WitnessPricingTier_title:
"File Share Witness",Field_Extensions_Selector_title:"Extensions",Field_NewRelic_Selector_lockedBalloonText:
"Create a New Relic account in the gallery to enable New Relic .NET application performance monitoring on this virtual machine.",
AzurePackWebSites_Ws_title:"Small Dedicated Worker Configuration",Field_IpAddress_updatedTitle:"Configured",
Filter_VirtualNetwork_ResourceGroup_text:"You cannot choose this virtual network because it is in a different resource group",
Cloudera_Field_WorkerCount_helpBalloon:"The number of worker instances used for data processing.",InstanceIpAddress_Options_on:
"On",Field_Diagnostics_Status_off:"Off",SQLAlwaysOn_SqlServers_Field_WitnessPricingTier_displayTemplate:
"{0} (1 instance)",SQLAlwaysOn_SqlServers_Field_UseAdminPassword_inlineLabel:"Use the Administrator password",
SharePoint_Field_PricingTier_title:"Pricing Tier",Field_Diagnostics_Status_standard:"Standard",ResourceExtension_Blade_title:
"Extensions",SQLAlwaysOn_Field_Password_title:"Password",Field_UserName_title:"User Name",AzurePackWebSites_Blade_title:
"Create websites farm",Cloudera_Field_Workload_title:"Workload",Cloudera_Field_Workload_hbase:"HBase",
DomainJoin_Blade_title:"Domain join",SQLAlwaysOn_Filtering_storageBySubscription:"Only storage accounts in the selected subscription can be used",
Validation_UserName_Windows_periods:"Username cannot contain all periods",SharePoint_SqlServers_Field_UseAdminPassword_helpBalloonText:
"Use the same password as the one for the Administrator account, or uncheck to specify a different password to use for this account.",
UserImage_CreateVM_Notification_InProgress_message:"Creating virtual machine '{0}' with Image '{1}'...",
UserImage_CreateVM_Notification_InProgress_title:"Creating virtual machine ..."},"ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachine":
{confirmDeleteEnterVmName:"Type the virtual machine name:",Properties_subscriptionId:"Subscription ID",
Status_provisioning:"Provisioning",vmDeleteBladeTitle:"Are you sure you want to delete '{0}'?",Status_ProvisioningFailed:
"Failed to create",notificationVmDeleteInprogressTitle:"Deleting the virtual machine...",notificationVmDeleteFailureMessage:
"Failed to delete the virtual machine '{0}'.",Properties_launcherPartDescription:"View information about your resource",
ColumnNames_location:"Location",notificationVmRestartSuccessMessage:"Successfully restarted virtual machine '{0}'.",
vmConnectCommand_NoSShEnabled:"No SSH Enabled",notificationVmResizeFailureMessage:"Failed to update the virtual machine '{0}'.\r\n{1}",
Properties_virtualIpAddressTitle:"Virtual IP Address",Lens_access:"Access",SpecPicker_extraSmall:"Extra Small",
SpecPicker_extraLarge:"Extra Large",ColumnNames_subscriptionName:"Subscription",Status_FailedStartingVM:
"Failed to start",Blade_SpecPicker_subtitle:"Browse the available pricing tiers and their features",
ColumnNames_status:"Status",VMCapture_ImageLabel_title:"Image label",Status_running:"Running",Properties_domainNameTitle:
"Domain Name",notificationVmShutdownSuccessMessage:"Successfully shut down virtual machine '{0}'.",SpecPicker_autoScale:
"Auto scale",SpecPicker_disabledLocations:"This pricing tier is not available in the selected location.",
notificationVMCaptureFailureMessage:"Failed to capture the virtual machine '{0}' to image name '{1}'. {2}",
Properties_privateIpAddressTitle:"Private IP Address",notificationDnDeleteInprogressTitle:"Deleting the domain name...",
vmStartConfirmationTitle:"Start this virtual machine",Scale_ComingSoon_description:"To scale in and out this virtual machine's availability set based on performance or a schedule, go to the current Microsoft Azure portal.",
notificationVmResizeSuccessMessage:"Successfully updated the virtual machine '{0}' to '{1}'.",notificationVMCaptureInprogressMessage:
"Capturing the virtual machine '{0}' to image name '{1}' ...",SpecPicker_messageForEa:"Prices presented below are estimated retail prices that include both Azure infrastructure and applicable third-party software costs.  Prices do not reflect applicable discounts for your subscription and may include currency conversions. If you have purchased Azure services through a reseller, contact your reseller for applicable pricing.",
Status_unknown:"Unknown",SpecPicker_basicA2:"Basic A2",SpecPicker_basicA3:"Basic A3",SpecPicker_basicA0:
"Basic A0",SpecPicker_basicA1:"Basic A1",SpecPicker_basicA4:"Basic A4",vmCommandTitle_connect:"Connect",
SpecPicker_premiumDisk:"Premium disk support",vmShutdownTextWillBeReleased:"The {0} will be released.",
Properties_deploymentIdTitle:"Deployment id",notificationVmResizeInprogressMessage:"Resizing virtual machine '{0}' to '{1}'",
SpecPicker_loadBalancing:"Load balancing",notificationVmStartSuccessTitle:"Successfully started virtual machine",
vmCommandTitle_restart:"Restart",VMCapture_ImageName_title:"Image name",notificationVmStartInprogressTitle:
"Starting virtual machine",Blade_SpecPicker_byolSubtitle:"Prices are shown per instance and do not include external license offerings",
SpecPicker_standardG5:"Standard G5",SpecPicker_standardG4:"Standard G4",SpecPicker_standardG1:"Standard G1",
SpecPicker_standardG3:"Standard G3",SpecPicker_standardG2:"Standard G2",SpecPicker_standardD4:"Standard D4",
SpecPicker_standardD2:"Standard D2",SpecPicker_standardD3:"Standard D3",SpecPicker_standardD1:"Standard D1",
SpecPicker_standard:"Standard",SpecId_medium:"Standard A2",VmCommandTitle_mandatoryGrid:"The following items will also be deleted",
notificationVMCaptureFailureTitle:"Failed to capture the virtual machine.",Status_stoppedVM_WarningNote:
"This virtual machine is still incurring compute charges. To avoid these charges, use the portal to stop the virtual machine.",
notificationVmStartFailureTitle:"Failed to start virtual machine",windowsOperatingSystem:"Windows",vmShutdownConfirmationMessageStaticDipConfigured:
"private IP address '{0}'",ConnectBladeTitle:"Connect",Lens_overview:"Summary",SpecId_a10:"Standard A10",
SpecId_a11:"Standard A11",Status_misconfigured:"Misconfigured availability set",Lens_usage:"Usage",SpecId_small:
"Standard A1",SpecId_large:"Standard A3",instanceIPAddress:"Instance IP address",notificationVmResizeInprogressTitle:
"Resizing virtual machine",notificationVmShutdownInprogressTitle:"Shutting down virtual machine",SpecPicker_ssdCache:
"Local SSD",Scale_launcherPartTitle:"Scale",singular:"Virtual Machine",notificationDnDeleteFailureMessage:
"Failed to delete the domain name '{0}'.",Lens_pricingTier:"Pricing tier",Scale_ComingSoon_callToActionText:
"Go",SpecPicker_medium:"Medium",Scale_ComingSoon_title:"Set scaling for availability sets",vmStartConfirmationMessage:
"Do you want to start '{0}'?",Properties_location:"Location",notificationVmDeleteSuccessMessage:"Successfully deleted the virtual machine '{0}'.",
notificationVmResizeFailureTitle:"Failed to update virtual machine",notificationVmStartFailureMessage:
"Failed to start the virtual machine '{0}'.\r\n{1}",SpecPicker_disabledForDomainName:"This pricing tier is not available in the selected virtual machine's domain name.",
loading:"loading ...",Blade_Capture_description:"Capturing produces a set of images that make it easy to deploy copies of virtual machine.",
Status_creating:"Creating",SpecPicker_message:"Prices presented below are estimated retail prices that include both Azure infrastructure and applicable third-party software costs.  Prices do not reflect applicable discounts for your subscription and may include currency conversions.",
SpecPicker_caption:"{0}/Month (Estimated)",vmDeleteConfirmationMessage:"Are you sure you want to delete the virtual machine '{0}'?",
Properties_launcherPartTitle:"Properties",Lens_configuration:"Configuration",lowerPlural:"virtual machines",
notificationDnDeleteFailureTitle:"Failed to delete the domain name.",vmShutdownConfirmationTitle:"Shut down this virtual machine",
SpecPicker_maxIOPs:"Max IOPS",notificationVmDeleteFailureTitle:"Failed to delete the virtual machine.",
SpecPicker_rdmaSupport:"RDMA support",SpecPicker_disabledSpecialVmHelpBalloonLinkText:"Click here to request access",
Lens_downloadRdp:"Download",linuxOperatingSystem:"Linux",notificationVmDeleteSuccessTitle:"Successfully deleted the virtual machine.",
VmCommandTitle_deleteCommand:"Delete",Status_stoppedVM:"Stopped",disks:"Disks",VMCapture_Sysprep_helpBalloonMessage:
"Before you can capture an image, you'll need to prepare it by running Sysprep or the Windows Azure Linux Agent.",
VMCapture_ImageName_Validation_invalidImageName:"The name can contain only letters, numbers, periods, hyphens, and underscores. Start the name with a letter and end it with a letter or a number.",
PartGallery_summaryCategory:"Summary",VMCapture_Linux_SysPrep_message:"I've run waagent -deprovision on the virtual machine.",
ColumnNames_name:"Virtual Machine",vmDeleteConfirmationTitle:"Delete this virtual machine",VMCapture_DeleteStatus_warning:
"The virtual machine will be deleted after the capture operation completes.",notificationVmResizeSuccessTitle:
"Successfully updated virtual machine",notificationVmRestartFailureMessage:"Failed to restart the virtual machine '{0}'.\r\n{1}",
vmCommandTitle_captureCommand:"Capture",Status_stopping:"Stopping",columnType:"Type",columnItem:"Item",
vmShutdownConfirmationMessageInstanceIPConfigured:"instance IP address '{0}'",vmShutdownConfirmationMessageLastVMInRole:
"virtual IP address '{0}'",virtualIPAddress:"Virtual IP address",notificationVmStartSuccessMessage:"Successfully started virtual machine '{0}'.",
notificationVmShutdownFailureMessage:"Failed to shut down the virtual machine '{0}'.\r\n{1}",Blade_SpecPicker_title:
"Choose your pricing tier",virtualMachines:"Virtual machines",Blade_Capture_title:"Capture virtual machine",
vmCommandTitle_settings:"Settings",privateIPAddress:"Private IP address",Status_starting:"Starting",
domainName:"Domain name",virtualMachine:"Virtual machine",confirmDeleteEnterVmNameValidation:"Please enter '{0}' below to confirm delete.",
EstimatedSpend_launcherPartTitle:"Estimated spend",notificationVmShutdownInprogressMessage:"Shutting down the virtual machine '{0}'...",
deleteVmMessage:"Warning! Deleting the '{0}' virtual machine is irreversible. The action you're about to take can't be undone. Going further will delete this virtual machine and the related resources permanently.",
notificationVMCaptureInprogressTitle:"Capturing the virtual machine ...",notificationVmRestartInprogressMessage:
"Restarting the virtual machine '{0}'...",vmShutdownConfirmationMessage:" Do you want to shut down '{0}'?",
Status_restarting:"Restarting",notificationVmDeleteInprogressMessage:"Deleting the virtual machine '{0}'...",
Properties_bladeTitle:"Properties",Properties_resourceID:"Resource ID",Scale_ComingSoon_header:"",SpecId_a7:
"Standard A7",SpecId_a6:"Standard A6",SpecId_a5:"Standard A5",SpecId_a9:"Standard A9",SpecId_a8:"Standard A8",
notificationDnDeleteSuccessMessage:"Successfully deleted the domain name '{0}'.",loadBalancedSets:"Load balanced sets",
CurrentSpend_displayText:"Total cost of all VMs in the compute domain",Properties_subscriptionName:"Subscription Name",
EstimatedSpend_launcherPartDescription:"Shows estimated costs for this billing cycle",Status_warning:
"Warning",notificationDnDeleteSuccessTitle:"Successfully deleted the domain name.",Lens_monitoring:"Monitoring",
Status_stopped:"Stopped",Properties_operatingSystemTitle:"Operating System",vmShutdownTextComma:",",
notificationVmShutdownFailureTitle:"Failed to shut down virtual machine",VMCapture_RunningStatus_warning:
"Capturing a virtual machine while it's running isn't recommended.",notificationVmRestartFailureTitle:
"Failed to restart virtual machine",notificationVmRestartInprogressTitle:"Restarting virtual machine",
notificationVmShutdownSuccessTitle:"Successfully shut down virtual machine",SpecPicker_standardD14:"Standard D14",
SpecPicker_standardD13:"Standard D13",SpecPicker_standardD12:"Standard D12",SpecPicker_standardD11:"Standard D11",
SpecPicker_captionPerInstance:"{0}/Month (Estimated) Per Instance",VmCommandTitle_optionalGrid:"The selected items will be deleted",
vmRestartConfirmationTitle:"Restart this virtual machine",SpecPicker_gb:"GB",SpecPicker_currencyCode:
"USD",SpecId_extraLarge:"Standard A4",SpecId_extraSmall:"Standard A0",notificationVmRestartSuccessTitle:
"Successfully restarted virtual machine",notificationVMCaptureSuccessMessage:"Successfully captured the virtual machine  '{0}' to image name '{1}'.",
vmRestartConfirmationMessage:"Do you want to restart '{0}'?",vmCommandTitle_start:"Start",lowerSingular:
"virtual machine",notificationVmStartInprogressMessage:"Starting the virtual machine '{0}'.",VMCapture_Windows_SysPrep_message:
"I've run Sysprep on the virtual machine.",DownloadPartTitle:"Download",vmCommandTitle_shutdown:"Shut down",
Lens_operations:"Operations",metricsDisabledMessage:"Not enough data to chart yet",SpecPicker_disabledSpecialVmHelpBalloonMessage:
"Access to this virtual machine size is not enabled for your subscription.",Scale_launcherPartDescription:
"Scale a VM using availability sets",vmConnectCommand_SshLabel:"SSH",SpecPicker_dataDisks:"Data disks",
plural:"Virtual Machines",Properties_hostNameTitle:"Host Name",SpecPicker_small:"Small",SpecPicker_large:
"Large",SpecPicker_basic:"Basic",SpecPicker_cores:"Cores",Properties_statusTitle:"Status",SpecPicker_core:
"Core",notificationVMCaptureSuccessTitle:"Successfully captured the virtual machine.",SpecPicker_notEnoughSupportedDiskCount:
"This pricing tier doesn't support the number of disks in this image or virtual machine.",Status_deleting:
"Deleting",notificationDnDeleteInprogressMessage:"Deleting the domain name '{0}'...",Properties_instanceIpAddressTitle:
"Instance IP Address"},"ClassicComputeExtension.ExtensionAssets.Resources.DomainName":{Properties_subscriptionId:
"Subscription ID",ColumnNames_location:"Location",ColumnNames_status:"Status",Validation_notAvailable:
"This domain name is not available",Status_unknown:"Unknown",Picker_paasFilterReason:"Domain names with a web or worker role can't be used to create virtual machines.",
Validation_nameRequired:"Required Value",Create_Blade_title:"Create Domain Name",Lens_overview:"Summary",
Picker_header:"Choose an existing domain name",Create_Domain_title:"Domain Name",Status_created:"Created",
Picker_noRows:"No domain names found",singular:"Domain Name",domainNames:"Domain names",Properties_location:
"Location",Status_creating:"Creating",Properties_launcherPartTitle:"Properties",lowerPlural:"domain names",
Status_changing:"Changing",DomainName_ComingSoon_title:"Domain name management",ColumnNames_name:"Name",
Validation_nameLength:"The name must be a between 1 and 63 characters",DomainName_ComingSoon_header:
"Coming soon",domainName:"Domain name",DomainName_ComingSoon_description:"You can use Domain Names to enable high-availability or load-balancing for multiple virtual machines. \r\nWe’re busy working on bringing this functionality to the Preview portal. For now, manage your domain name using the Microsoft Azure portal.",
Properties_vip:"Virtual IP Address",Properties_url:"URL",Properties_bladeTitle:"Properties",Properties_resourceID:
"Resource ID",Status_resolvingDns:"Resolving DNS",Picker_Blade_title:"Domain Name",Properties_subscriptionName:
"Subscription Name",Status_deleted:"Deleted",Picker_Create_title:"Create new domain name",DomainName_ComingSoon_callToActionText:
"Manage this domain name",lowerSingular:"domain name",Validation_nameRegex:"The name can contain only letters, numbers, and hyphens. The first and last character must be a letter or number. Trademarks, reserved words, and offensive words are not allowed.",
plural:"Domain Names",Properties_statusTitle:"Status",Status_deleting:"Deleting"},"ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachineDisk":
{AttachDisk_Validation_diskNameLength:"Disk name must be between {0} and {1} characters.",noDisksFound:
"No disks found",CommandTitle_discardCommand:"Discard",HostCaching_readWrite:"Read/Write",HostCaching_readOnly:
"Read Only",CommandTitle_detachCommand:"Detach",AttachDisk_BladeTitle_attachExistingDisk:"Attach an existing disk",
AttachDisk_HostCachingValues_readOnly:"Read Only",Notification_attachDiskInProgressMessage:"Attaching disk '{1}' to virtual machine '{0}'...",
Notification_attachDiskInProgressTitle:"Attaching disk to virtual machine.",Notification_updateDiskInProgressMessage:
"Updating disk '{1}' on virtual machine '{0}'...",attachDisk_maximumIops:"Maximum IOPS",diskSizeFormatter:
"{0} GB",Properties_vhdLocation:"VHD Location",Properties_saveLabel:"Save",columnName_osDiskType:"OS Disk",
Properties_caching:"Host Caching",Notification_updateDiskInProgressTitle:"Updating disk on virtual machine.",
AttachDisk_diskDescription:"Description",AttachDisk_DefaultText_diskDescription:"Disk Description",Notification_detachDiskSuccessTitle:
"Successfully detached disk from virtual machine.",Notification_detachDiskInProgressTitle:"Detaching disk from virtual machine.",
AttachDisk_hostCaching:"Host Caching",ColumnName_diskSize:"Size",totalDisksSize:"Total Size",attachDisk_containerSelection_bladeTitle:
"Choose a container",Notification_detachDiskInProgressMessage:"Detaching disk '{1}' from virtual machine '{0}'...",
AttachDisk_Validation_nameRegex:"Disk name can only contain letters, numbers and hyphens. They cannot start or end with hyphens.",
Notification_detachDiskSuccessMessage:"Successfully detached disk '{1}' from virtual machine '{0}'.",
ColumnName_vhdUri:"VHD Uri",CommandTitle_attachNewDisk:"Attach New",AttachDisk_diskSize:"Size (GB)",
AttachDisk_diskName:"Disk File Name",columnName_dataDisksType:"Data Disks",attachDisk_maximumIops128:
"500 (Disk Size : 256 KB)",attachDisk_maximumIops512:"2500 (Disk Size : 256 KB)",attachDisk_maximumIops1024:
"5000 (Disk Size : 256 KB)",AttachDisk_StorageAccount_filterStorageAccountByLocationText:"This storage account location is not supported.",
Notification_detachDiskFailureMessage:"Failed to detach disk '{1}' from virtual machine '{0}'. {2}",
Notification_attachDiskFailureMessage:"Failed to attach disk '{1}' to virtual machine '{0}'. {2}",Properties_diskId:
"ID",CommandTitle_saveCommand:"Save",AttachDisk_HostCachingValues_none:"None",Notification_attachDiskSuccessMessage:
"Successfully attached disk '{1}' to virtual machine '{0}'.",disks:"Disks",updatingVirtualMachine:"Updating virtual machine",
HostCaching_none:"None",AttachDisk_BladeTitle_attachNewDisk:"Attach a new disk",Notification_updateDiskFailureMessage:
"Failed to update disk '{1}' on virtual machine '{0}'. {2}",AttachDisk_VhdFile_filterText:"You cannot choose this file because file extension is not supported.",
AttachDisk_DefaultText_diskSize:"Disk Size (GB)",AttachDisk_DefaultText_diskName:"Disk File Name",AttachDisk_Validation_diskSizeRangeValidation:
"Disk size should be between {0} and {1} (GB).",AttachDisk_DefaultText_vhdContainer:"Select Container",
AttachDisk_vhdContainer:"Storage Container",AttachDisk_StorageAccount_filterStorageAccountBySubscriptionText:
"This storage account subscription is not supported.",dataDisk:"Data Disk",Properties_lun:"Logical Unit Number (LUN)",
Notification_attachDiskSuccessTitle:"Successfully attached disk to virtual machine.",Notification_attachDiskFailureTitle:
"Failed to attach disk to virtual machine.",Notification_updateDiskSuccessTitle:"Successfully updated disk on virtual machine.",
DetachDisk_detachConfirmation:"Do you want to detach disk '{0}'?",AttachDisk_Validation_vhdFileNameInvalid:
"VHD File name should contain '.vhd' extension.",Notification_detachDiskFailureTitle:"Failed to detach disk from virtual machine.",
Properties_diskSize:"Size",Properties_saveConfirmation:"Do you want to save changes to disk '{0}'?",
Notification_updateDiskFailureTitle:"Failed to update disk on virtual machine.",Properties_type:"Type",
Properties_Validation_hostCachingNotSupported:"This hosting caching is not supported for current disk.",
DetachDisk_detachLabel:"Detach",Notification_updateDiskSuccessMessage:"Successfully updated disk '{1}' on virtual machine '{0}'.",
AttachDisk_vhdFile:"VHD File",AttachDisk_DefaultText_vhdFile:"The Disk VHD File.",disksDescription:"Manage this VM's disks",
attachDisk_diskSelection_bladeTitle:"Choose a disk",AttachDisk_HostCachingValues_readWrite:"Read/Write",
maximumNumberOfDisksAttached:"Maximum number of disks already attached.",AttachDisk_Validation_required:
"This field is required.",osDisk:"OS Disk",AttachDisk_StorageAccount_filterStorageAccountByAccountTypeText:
"This storage account type is not supported.",ColumnName_name:"Disk",numberOfDisks:"# of disks",AttachDisk_Validation_diskSizeNumericValidation:
"Disk size should be an integer.",AttachDisk_Validation_vhdFileAlreadyAttachedToVM:"The VHD file is already attached to virtual machine '{0}'.",
CommandTitle_attachExistingDisk:"Attach Existing",Properties_discardLabel:"Discard",disk:"Disk"},"ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachineEndpoint":
{notificationUpdateVMEndpointInFailureTitle:"Failed to update virtual machine endpoint",DirectServerReturnNotification:
"You can't enable Floating IP on endpoints that use different public and private ports.",NotificationAddVMEndpointInProgressTitle:
"Adding virtual machine endpoint",Validation_privatePortAndProtocolConflict:"The private port and the protocol conflict with another endpoint on the virtual machine.",
notificationRemoveVMEndpointSuccessMessage:"Successfully deleted endpoint '{0}' from virtual machine '{1}'.",
NotificationAddVMEndpointSuccessMessage:"Successfully added endpoint '{0}' to virtual machine '{1}' .",
Validation_maxPortValue:"The port number must be between 1 and 65535",notificationRemoveVMEndpointInFailureMessage:
"Failed to delete virtual machine endpoint '{0}' from virtual machine {1}. {2}",endpoint_LoadBalanced:
"Load-Balanced",notificationRemoveVMEndpointInFailureTitle:"Failed to delete virtual machine endpoint",
endpoint_DeleteConfirmation:"Do you want to delete '{0}'?",NotificationAddVMEndpointInFailureTitle:"Failed to add virtual machine endpoint",
notificationRemoveVMEndpointInProgressTitle:"Deleting virtual machine endpoint",Validation_endpointNameLengthValidation:
"The length of the endpoint name must be between 3 and 15 characters.",Endpoints_AclLabel:"Access control list",
notificationUpdateVMEndpointInProgressMessage:"Updating endpoint '{0}' on virtual machine {1}...",endpoint_loading:
"loading ...",NotificationAddVMEndpointSuccessTitle:"Successfully added virtual machine endpoint",Endpoints_Acl_Rules_text:
"{0} rule(s)",NotificationAddVMEndpointInProgressMessage:"Adding  endpoint '{0}' to virtual machine {1} ...",
notificationUpdateVMEndpointInProgressTitle:"updating virtual machine endpoint",endpointFloatingIP_disabled:
"Disabled",Validation_endpointNameValidation:"The name can contain only letters, numbers, hyphens, spaces and underscores. The name must start with a letter and must end with a letter or a number.",
endpoint_DiscardLabel:"Discard",Validation_ACL_Require_text:"Value is required",Endpoints_Acl_NoRules_text:
"No rules",Endpoints_AclSelectorTitle:"Configure access control",endpoint_privatePort:"Private Port",
Validation_ACL_Order_MustBePositive_text:"Value must be a positive number.",endpoint_noEndpointsFound:
"No endpoints found",notificationRemoveVMEndpointInProgressMessage:"Deleting endpoint '{0}' from virtual machine {1} ...",
endpoint_AclRules:"Acl Rules",endpointCommandTitle_add:"Add",endpointsTitle:"Endpoints",notificationUpdateVMEndpointSuccessTitle:
"Successfully updated virtual machine endpoint",notificationUpdateVMEndpointSuccessMessage:"Successfully updated endpoint '{0}' on virtual machine {1}.",
endpoint_DeleteLabel:"Delete",endpoint_protocol:"Protocol",endpoint_publicPort:"Public port",Validation_ReservedPorts:
"You can't enable floating IP for Remote Desktop, Windows PowerShell Remoting, or SSH endpoints.",endpoint_floatingIp:
"Floating IP",Validation_MaxEndpointsReached:"Maximum number of endpoints created",notificationUpdateVMEndpointInFailureMessage:
"Failed to update endpoint '{0}' on virtual machine {1}. {2}",Validation_requiredField:"Required Value",
NotificationAddVMEndpointInFailureMessage:"Failed to add endpoint '{0}' to virtual machine '{1}'. {2}",
noItemsFound:"No items found",endpoint_Standalone:"Standalone",notificationRemoveVMEndpointSuccessTitle:
"Successfully deleted virtual machine endpoint",Validation_endpointAlreadyExists:"The name of the endpoint conflicts with another endpoint on the virtual machine.",
endpoint_protocol_http:"HTTP",endpointTitle:"Endpoint",endpoint_name:"Endpoint",Endpoints_EndpointsDetail:
"Endpoint details",endpoint_protocol_udp:"UDP",endpoint_protocol_tcp:"TCP",LoadBalancedEndpointStatus:
"This endpoint is part of a load balanced set '{0}' and can't be modified here.",endpoint_directServerReturn_helpText:
"A floating IP address represents both the active and standby units in a redundant system. Enable this if you wish to configure an AlwaysOn Availability Group in SQL Server for an active/standby system. This setting can't be changed once the virtual machine is set up.",
endpointFloatingIP_enabled:"Enabled",endpoint_AddBaldeTitle:"Add an endpoint",Validation_publicPortAndProtocolConflict:
"The public port and the protocol conflict with another endpoint on the virtual machine."},"ClassicComputeExtension.ExtensionAssets.Resources.AvailabilitySet":
{Validation_nameAlreadyExists:"The name of the availability set conflicts with another availability set in the same domain name of the virtual machine.",
saveConfirmation:"Are you sure you want to save the changes? This VM will be restarted when the operation completes. If an availability set is empty, it will be automatically deleted.",
EmptyText:"Not part of an availability set",Picker_NoAvailabilitySet_title:"Not part of an availability set",
StandaloneVM:"Standalone virtual machine",Validation_nameRequired:"Required Value",discardLabel:"Discard",
NotificationUpdateAvailabilitySetInProgressMessage:"Updating availability set '{0}' to virtual machine '{1}'...",
saveConfirmationTitle:"Save availability set",status_notConfigured:"Not configured",saveConfirmationMessage:
"Are you sure you want to save the change to the virtual machine '{0}'?",Picker_noRows:"No availability sets found",
NotificationUpdateAvailabilitySetSuccessMessage:"Successfully updated availability set '{0}' to virtual machine '{1}'.",
addBladeTitle:"New availability set",Info_deletingVM:"This virtual machine will restart automatically after it's added to the new availability set.",
Picker_NoAvailabilitySet_description:"Standalone virtual machine",differentDomainNameHelpBalloonContent:
"You cannot change to availability sets in different domain names.",grid_displayVirtualMachineCountMessage:
", and {0} more...",Validation_nameLength:"The length of the endpoint name must be between 3 and 15 characters.",
Picker_AttachedVms_template:"{0} and {1} more...",commandTitle_save:"Save",NotificationUpdateAvailabilitySetFailureMessage:
"Failed to update availability set '{0}' to virtual machine '{1}'.",commandTitle_discard:"Discard",status_misconfigured:
"Misconfigured",commandTitle_add:"New",Warning_availabilitySetWithOneVM:"You need two or more virtual machines in the same availability set to qualify for the 99.95% SLA guarantee.",
Picker_Blade_title:"Availability set",AvailabilitySet:"Availability set",Warning_noAvailabilitySet:"To qualify for Azure's 99.95% SLA guarantee, virtual machines must be part of an availability set.",
saveLabel:"Save",NotificationUpdateAvailabilitySetFailureTitle:"Failed to update availability set",addBladeSubtitle:
"The virtual machine will be added to this availability set.",Loading:"Loading...",AvailabilitySetDescription:
"View or change this VM's availability set",Validation_nameRegex:"The name can contain only letters, numbers, hyphens, spaces and underscores. The name must start with a letter and must end with a letter or a number.",
NotificationUpdateAvailabilitySetSuccessTitle:"Successfully updated availability set",NotificationUpdateAvailabilitySetInProgressTitle:
"Updating availability set",Name:"Name"},"ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachineResourceExtension":
{Commands_disableLabel:"Disable Extension",Notification_deleteExtensionInProgressMessage:"Deleting extension '{1}' from virtual machine '{0}'...",
Commands_deleteLabel:"Delete Extension",Notification_addExtensionFailureMessage:"Failed to add extension '{1}' to virtual machine '{0}'. {2}",
Notification_enableExtensionInProgressMessage:"Enabling extension '{1}' in virtual machine '{0}'...",
Notification_disableExtensionInProgressTitle:"Disabling extension in virtual machine.",resourceExtensions:
"Extensions",AddExtension_duplicateExtensionExistsWarning:"This extension '{0}' has already been added to virtual machine '{1}'. Re-adding the extension will replace the previous configuration.",
installedExtensions:"installed extensions",CommandTitle_deleteCommand:"Delete",ColumnName_extensionName:
"Name",Notification_disableExtensionSuccessTitle:"Successfully disabled extension in virtual machine.",
Notification_deleteExtensionSuccessTitle:"Successfully deleted extension from virtual machine.",ColumnName_status:
"Status",Properties_version:"Version",resourceExtensionsDescription:"Manage 1st and 3rd party site extensions",
Properties_status:"Status",Notification_enableExtensionInProgressTitle:"Enabling extension in virtual machine.",
ColumnName_version:"Version",numberOfExtensions:"# Extensions",Notification_enableExtensionFailureTitle:
"Failed to enable extension in virtual machine.",Notification_disableExtensionInProgressMessage:"Disabling extension '{1}' in virtual machine '{0}'...",
Properties_learnMore:"Learn More",AddExtension_letterValidation:"This field must contain a letter.",
noExtensionsFound:"No resource extensions found.",GuestAgentRequired_windowsWarningMessage:"Before adding an extension, install the VM Agent from here: http://aka.ms/vmagentwin. After installing the agent, click Add to choose an extension. As part of installing the extension, the agent configuration will be finalized and this message dismissed.",
resourceExtensionStatusDetails:"Detailed status",AddExtension_maxLengthValidation:"This field must be at most {0} characters long.",
Notification_addExtensionInProgressMessage:"Adding extension '{1}' to virtual machine '{0}'...",Notification_deleteExtensionFailureTitle:
"Failed to delete extension from virtual machine.",GuestAgentRequired_linuxWarningMessage:"Before adding an extension, install the VM Agent from here: http://aka.ms/vmagentlinux. After installing the agent, click Add to choose an extension. As part of installing the extension, the agent configuration will be finalized and this message dismissed.",
Notification_deleteExtensionSuccessMessage:"Successfully deleted extension '{1}' from virtual machine '{0}'.",
AddExtension_upperCaseValidation:"This field must contain an upper case letter.",Commands_enableConfirmation:
"Do you want to enable the extension '{0}'?",CommandTitle_enableCommand:"Enable",ColumnName_publisher:
"Publisher",Notification_addExtensionFailureTitle:"Failed to add extension to virtual machine.",Notification_deleteExtensionInProgressTitle:
"Deleting extension from virtual machine.",updatingVirtualMachine:"Updating virtual machine",Notification_disableExtensionFailureMessage:
"Failed to disable extension '{1}' in virtual machine '{0}'. {2}",AddExtension_minLengthValidation:"This field must be at least {0} characters long.",
Properties_viewDetailExtensionStatus:"View detailed status",Notification_addExtensionSuccessMessage:
"Successfully added extension '{1}' to virtual machine '{0}'.",Properties_publisher:"Publisher",CommandTitle_addResourceExtension:
"Add",AddExtension_hasCharactersValidation:"This field must contain the following characters: {0}.",
CommandTitle_removeCommand:"Remove",Notification_addExtensionInProgressTitle:"Adding extension to virtual machine.",
AddExtension_notHasCharactersValidation:"This field cannot contain the following characters: {0}.",Properties_message:
"Message",CommandTitle_disableCommand:"Disable",AddExtension_punctuationValidation:"This field must contain a punctuation character.",
Commands_deleteConfirmation:"Do you want to delete the extension '{0}'?",AddExtension_noParametersRequiredInformation:
"This extension doesn't need any parameters to configure.",Notification_addExtensionSuccessTitle:"Successfully added extension to virtual machine.",
AddExtension_lowerCaseValidation:"This field must contain a lower case letter.",AddExtension_BladeTitle_addExtension:
"Add Extension",Notification_disableExtensionSuccessMessage:"Successfully disabled extension '{1}' in virtual machine '{0}'.",
CommandTitle_updateCommand:"Update",Commands_disableConfirmation:"Do you want to disable the extension '{0}'?",
Notification_deleteExtensionFailureMessage:"Failed to delete extension '{1}' from virtual machine '{0}'. {2}",
AddExtension_digitsValidation:"This field must contain a digit.",Notification_enableExtensionFailureMessage:
"Failed to enable extension '{1}' in virtual machine '{0}'. {2}",Notification_enableExtensionSuccessMessage:
"Successfully enabled extension '{1}' in virtual machine '{0}'.",newRelicNotAllowedOnNonWindows:"New Relic extension cannot be installed on non-Windows virtual machines",
AddExtension_rangeValidation:"This field must be between {0} and {1}.",resourceExtension:"Extension",
AddExtension_requiredValidation:"Required",Notification_enableExtensionSuccessTitle:"Successfully enabled extension in virtual machine.",
Commands_enableLabel:"Enable Extension",Notification_disableExtensionFailureTitle:"Failed to disable extension in virtual machine."},
"ClassicComputeExtension.ExtensionAssets.Resources.LoadBalancedSets":{JoinLoadBalancedSetBlade_Field_LbsOptionHelp_text:
"Choose between a public (internet-facing) or internal (private) load balancer. An internal load balancer is accessible only from within a virtual network",
LoadBalancedSetBlade_Column_Name_text:"Name",JoinLoadBalancedSetBlade_description:"Add this virtual machine to a new load balanced set or an existing one.",
LoadBalancedSetDetailsBlade_Section_VirtualMachines_Column_PrivatePort_text:"Private port",LoadBalancedSetDetailsBlade_Section_ACL_Column_Empty_text:
"No access control found.",NewLoadBalancedSetBlade_Field_IPAddress_text:"IP Address",LoadBalancedSetDetailsBlade_Section_VirtualMachines_Column_EndpointName_text:
"Endpoint Name",PickLoadBalancedSetBlade_description:"Either create a new load balanced set or select an existing one.",
LoadBalancedSetType_text:"Load balanced set type",PickLoadBalancedSetBlade_DisableReason_text:"This virtual machine is already joined to this load balanced set or is in a different domain name.",
LoadBalancedSetDetailsBlade_Command_Leave_Confirm_LastVirtualMachine_message:"This is the last virtual machine in load balanced set '{0}', so it will be deleted when the operation completes. Are you sure that you want to update virtual machine '{1}'?",
LoadBalancedSetBlade_Column_Protocol_text:"Protocol",Notification_JoinVirtualMachineToLoadBalancedSet_Failure_title:
"Failed to join virtual machine to load balanced set.",Notification_JoinVirtualMachineToLoadBalancedSet_Failure_message:
"Failed to join virtual machine '{0}' to load balanced set '{1}'. {2}",GridLoading_text:"Loading ...",
Notification_DeleteLoadBalancedSet_Failure_title:"Failed to delete load balanced set.",PickLoadBalancedSetBlade_CreateNew_title:
"Create a load balanced set",NewLoadBalancedSetBlade_Validation_IPAddress_Required_text:"IP address is required",
Notification_UpdateLoadBalancedSet_Success_message:"Successfully updated load balanced set '{0}'.",PickLoadBalancedSetBlade_CreateNew_message:
"Create a new load balanced set",LoadBalancedSetDetailsBlade_Section_ACL_Column_Name_text:"Name",JoinLoadBalancedSetBlade_title:
"Join a load balanced set",LoadBalancedSetDetailsBlade_Section_VirtualMachines_Empty_text:"No virtual machine found.",
JoinLoadBalancedSetBlade_Lbs_Selector_displayText:"Configure required settings",LoadBalancedSetDetailsBlade_Section_ACL_Column_Action_text:
"Action",NewLoadBalancedSetBlade_Field_ProbeProtocol_text:"Probe protocol",LoadBalancedSetIpAddressOption_dynamic:
"Dynamic",NewLoadBalancedSetBlade_Field_Name_text:"Name",pollingAborted:"Polling was aborted",Notification_DeleteLoadBalancedSet_Success_title:
"Successfully deleted load balanced set.",NewLoadBalancedSetBlade_Field_ProbePort_text:"Probe port",
NewLoadBalancedSetBlade_Field_AclRules_Rules_textFormat:"{0} rule(s)",LoadBalancedSetDetailsBlade_Validation_MissingProbe_text:
"Missing probe configuration",LoadBalancedSetDetailsBlade_Section_VirtualMachines_Column_Name_text:"Name",
Notification_UpdateLoadBalancedSet_InProgress_title:"Updating load balanced set ...",Notification_UpdateLoadBalancedSet_Failure_message:
"Failed to update load balanced set '{0}'. {1}",LoadBalancedSetDetailsBlade_Validation_Unique_text:"Value must be unique.",
NewLoadBalancedSetBlade_Validation_PortNumber_Range_textFormat:"The port number must be between {0} and {1}.",
LoadBalancedSetBlade_Column_PublicPort_text:"Public port",LoadBalancedSetDetailsBlade_Command_Leave_Confirm_title:
"Leave a load balanced set",LoadBalancedSetDetailsBlade_Command_Save_Confirm_title:"Save changes",LoadBalancedSetIpAddressOption_statictext:
"Static",NewLoadBalancedSetBlade_Field_Protocol_text:"Protocol",PickLoadBalancedSetBlade_MoreThanOneVM_textFormat:
", and {0} more",IpAddress_labelText:"IP address",LoadBalancedSetDetailsBlade_Section_ACL_title:"Access control list",
LoadBalancedSetDetailsBlade_Section_ACL_Column_Action_Deny_text:"Deny",NewLoadBalancedSetBlade_Field_PublicPort_text:
"Public port",NewLoadBalancedSetBlade_Field_FloatingIP_text:"Floating IP",LoadBalancedSetDetailsBlade_Command_Leave_text:
"Leave",LoadBalancedSetBlade_Empty_text:"No load balanced sets found",Notification_DeleteLoadBalancedSet_InProgress_message:
"Deleting load balanced set '{0}' ...",LoadBalancedSetBlade_Commands_Join_text:"Join",NewLoadBalancedSetBlade_Field_ProbeNumberOfRetries_text:
"Number of retries",JoinLoadBalancedSetBlade_Validation_EndpointName_Required_text:"Endpoint name is required.",
Notification_JoinVirtualMachineToLoadBalancedSet_InProgress_message:"Joining virtual machine '{0}' to load balanced set '{1}' ...",
LauncherPart_description:"Manage load balancing across VMs",LoadBalancedSetDetailsBlade_Section_ACL_Column_Order_text:
"Order",LoadBalancedSetDetailsBlade_Command_Save_text:"Save",LoadBalancedSetBlade_BasicVM_text:"Load balanced sets cannot be used with Basic virtual machines.",
NewLoadBalancedSetBlade_Field_AclRules_NoRules_text:"No rules",Notification_JoinVirtualMachineToLoadBalancedSet_Success_title:
"Successfully joined virtual machine to load balanced set.",PickLoadBalancedSetBlade_EmptyList_text:
"No load balanced sets found",NewLoadBalancedSetBlade_description:"Once it's created, the virtual machine will be added to it.",
NewLoadBalancedSetBlade_title:"Create a load balanced set",Probe_labelText:"Probe",JoinLoadBalancedSet_VmHasIlbMessage:
"The virtual machine can have only one internal load balancer set.",LoadBalancedSetDetailsBlade_title:
"Load balanced set",Notification_UpdateLoadBalancedSet_InProgress_message:"Updating load balanced set '{0}' ...",
NewLoadBalancedSetBlade_Validation_ProbeNumberOfRetries_Required_text:"Number of retries is required.",
JoinLoadBalancedSetBlade_Field_PrivatePort_text:"Private port",Notification_DeleteLoadBalancedSet_Success_message:
"Successfully deleted load balanced set '{0}'.",NewLoadBalancedSetBlade_Field_ProbeInterval_text:"Probe interval (seconds)",
PickLoadBalancedSetBlade_title:"Choose a load balanced set",LoadBalancedSetDetailsBlade_Section_ACL_Column_Action_Permit_text:
"Permit",JoinLoadBalancedSetBlade_Field_PickLoadBalancedSet_text:"Load balanced set",NewLoadBalancedSetBlade_Field_ProbeNumberOfRetries_helpText:
"You can specify how many probes the load balancer should try to send before the endpoint is considered to be unresponsive.",
NewLoadBalancedSetBlade_Validation_Name_Length_textFormat:"The name must be at least {0} characters and no longer than {1} characters.",
LoadBalancedSetBlade_title:"Load balanced sets",Notification_JoinVirtualMachineToLoadBalancedSet_Success_message:
"Successfully joined virtual machine '{0}' to load balanced set '{1}'.",LbsType_labelText:"Type",Notification_DeleteLoadBalancedSet_Failure_message:
"Failed to delete load balanced set '{0}'. {1}",Notification_UpdateLoadBalancedSet_Failure_title:"Failed to update load balanced set.",
NewLoadBalancedSetBlade_Field_ProbePath_text:"Probe path",LoadBalancedSetDetailsBlade_Section_ACL_Column_RemoteSubnet_text:
"Remote subnet",Loading_text:"Loading ...",LoadBalancedSetDetailsBlade_Command_Leave_Confirm_message:
"Are you sure that you want to update virtual machine '{0}'?",enabledText:"Enabled",NewLoadBalancedSetBlade_Validation_Name_ValidChars_text:
"The name can contain only letters, numbers, hyphens, spaces and underscores. The name must start with a letter and must end with a letter or a number.",
Notification_DeleteLoadBalancedSet_InProgress_title:"Deleting load balanced set ...",LoadBalancedSetBlade_Column_AclRules_text:
"ACL rules",LoadBalancedSetDetailsBlade_Command_Save_Confirm_message:"Are you sure you want to save your changes?",
NewLoadBalancedSetBlade_Validation_Name_Required_text:"Load balanced set name is required.",Notification_UpdateLoadBalancedSet_Success_title:
"Successfully updated load balanced set.",NewLoadBalancedSetBlade_Validation_ProbePort_Required_text:
"Probe port is required.",Notification_JoinVirtualMachineToLoadBalancedSet_InProgress_title:"Joining virtual machine to load balanced set ...",
JoinLoadBalancedSetBlade_Validation_NewOrSelectExist_Required_text:"Create a new load balanced set or select an existing one.",
LoadBalancedSetDetailsBlade_Command_Discard_text:"Discard",JoinLoadBalancedSetBlade_Field_EndpointName_text:
"Endpoint name",PickLoadBalancedSetBlade_UseExisting_message:"Use an existing load balanced set",NewLoadBalancedSetBlade_Validation_ProbeInterval_Required_text:
"Probe interval is required.",LoadBalancedSetBlade_Column_VirtualMachines_text:"Virtual machines",JoinLoadBalancedSetBlade_Validation_Field_PrivatePort_EnableFloatingIp_textFormat:
"You can't enable direct server return on endpoints that use different public port {0} and private port {1}. ",
LoadBalancedSetDetailsBlade_Section_VirtualMachines_Column_Status_text:"Status",Description:"Description",
LoadBalancedSetType_PublicText:"Public",NewLoadBalancedSetBlade_Field_AclRules_text:"Configure access control",
LauncherPart_title:"Load balanced sets",Endpoint_labelText:"Endpoint",LoadBalancedSetDetailsBlade_Section_VirtualMachines_title:
"Member virtual machines",NewLoadBalancedSetBlade_Validation_PublicPort_Required_text:"Public port is required.",
LoadBalancedSetType_Internal_text:"Internal",DnsName_labelText:"DNS name",NewLoadBalancedSetBlade_Validation_GreaterThan_textFormat:
"Value must be greater than {0}.",NewLoadBalancedSetBlade_Field_FloatingIP_Help_message:"Enable floating IP address.",
disabledText:"Disabled",JoinLoadBalancedSet_IsNarrowVnetMessage:"Internal load balancers in virtual networks that are in an affinity group are not supported.",
JoinLoadBalancedSetBlade_Validation_PrivatePort_Required_text:"Private port is required.",LoadBalancedSetIpAddressOption_text:
"IP address assignment"},"ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachineIPAddress":
{saveCommand:"Save",saveConfirmation:"Are you sure you want to save changes to the virtual machine '{0}'?",
loadingStatus:"Loading",reservedVirtualIP:"Virtual (Reserved)",updatingIPAddresses:"Updating IP addresses",
IpAddresses_ComingSoon_callToActionUri:"http://msdn.microsoft.com/library/azure/dn376542.aspx",publicIPAddressInfo:
"This isn't supported in the Preview portal yet. Use the command line interface or PowerShell cmdlets to manage your IP address.",
dynamicPrivateIP:"Private (Dynamic)",discardLabel:"Discard",updateIPAddressSuccessMessage:"Successfully updated IP address in the virtual machine '{0}'.",
dynamic:"Dynamic",instanceIPAddress:"Instance IP address",updateIPAddressInProgressTitle:"Updating IP address in the virtual machine.",
updateIPAddressFailureMessage:"Failed to update IP address in the virtual machine '{0}'.",IpAddresses_ComingSoon_description:
"Azure offers static internal IP addresses and reserved public IP addresses for your virtual machines. Until we add this capability to the Preview portal, manage your IP addresses using Azure PowerShell cmdlets or the command line interface.",
couldNotConfigureIPAddress:"This virtual machine can't be configured with a static private IP address because it's not deployed in a virtual network.",
IpAddresses_launcherPartTitle:"IP addresses",on:"On",IpAddresses_launcherPartDescription:"Manage this VM's IP addresses",
ipAddressAssignment:"IP address assignment",off:"Off",IpAddresses_ComingSoon_title:"Managing your IP addresses",
updateIPAddressInProgressMessage:"Updating IP address in the virtual machine '{0}'...",instanceIP:"Instance",
virtualIPAddress:"Virtual IP address",ipAddressesBladeTitle:"IP addresses",privateIPAddress:"Private IP address",
requiredField:"Required value",enterIPAddress:"Enter IP address",dynamicVirtualIP:"Virtual (Dynamic)",
IpAddresses_ComingSoon_callToActionText:"Learn more",updateIPAddressSuccessTitle:"Successfully updated IP address in the virtual machine.",
idleTimeout:"Idle timeout in minutes",staticPrivateIP:"Private (Static)",staticIPAddress:"Static",saveLabel:
"Save",updateIPAddressFailureTitle:"Failed to update IP address in the virtual machine.",discardCommand:
"Discard",ipAddress:"IP address",IpAddresses_ComingSoon_header:"Coming soon",reserved:"Reserved",subnet:
"Subnet"},"ClassicComputeExtension.ExtensionAssets.Resources.Hortonworks":{Create_Field_StorageAccountPricingTier_title:
"Storage account pricing tier",Create_Field_StorageAccountPricingTier_helpBalloonMessage:"Storage account(s) that back the disks on the cluster will be provisioned at this pricing tier.",
Create_Field_WorkerConfiguration_title:"Worker configuration",Create_Field_Location_title:"Location",
WorkerConfiguration_InstanceCount_Validation_rangeValidationMessage:"Worker nodes count must be between {0} and {1} for standard workload.",
Create_Field_Workload_helpBalloonMessage:"Evaluation workload will create a smaller cluster that is suitable for testing. Choosing Standard workload will default to a larger cluster and let you further customize the cluster size.",
WorkerConfiguration_Field_PricingTier_helpBalloonMessage:"Select the pricing tier/VM size for all the worker nodes in the cluster.",
WorkerConfiguration_InstanceCount_Validation_invalidInstanceCountMessage:"Worker nodes count must be multiples of 3.",
Create_Field_ConfirmAmbariPassword_title:"Confirm Ambari password",Create_Field_SSHKey_title:"SSH key",
WorkerConfiguration_bladeTitle:"Worker configuration",Create_Field_UserName_title:"User name",Create_Field_Workload_standard:
"Standard",Create_Field_Workload_title:"Workload",Create_Field_ResourceGroup_helpBalloonMessage:"Resource group help balloon message",
Create_Field_UserName_helpBalloonMessage:"The administrator user name to be registered on each virtual machine in the cluster.",
WorkerConfiguration_Field_PricingTier_title:"Worker pricing tier",Create_Field_AmbariPassword_helpBalloonMessage:
"Ambari is a Hadoop management tool that will be provisioned with this cluster. The admin username will be 'admin'. The password will be whatever you enter here.",
Create_Field_WorkerConfiguration_helpBalloonMessage:"Select the number of worker nodes as well as the pricing tier/VM size for all the worker nodes in the cluster.",
Create_Field_SSHKey_defaultText:"Paste your key here",Create_Field_Workload_evaluation:"Evaluation",
WorkerConfiguration_Field_NumberOfInstances_title:"Number of worker instances",Create_Field_AmbariPassword_title:
"Ambari password",Create_Field_MasterPricingTier_helpBalloonMessage:"The master node(s) will be provisioned at this pricing tier/VM size. The number of master nodes will depend on the option you select for Workload.",
Create_Field_Subscription_title:"Subscription",Create_Field_MasterPricingTier_title:"Master pricing tier",
Create_Field_SSHKey_helpBalloonMessage:"Copy and paste an OpenSSH public key, which can be generated with tools like ssh-keygen on Linux and OS X or PuttyGen on Windows.",
Create_Field_ConfirmAmbariPassword_helpBalloonMessage:"Confirm Ambari password should match with Ambari password.",
WorkerConfiguration_Field_NumberOfInstances_helpBalloonMessage:"Provide the number of worker nodes in the cluster.",
Create_Field_ResourceGroup_title:"Resource group",Create_bladeTitle:"Create Hortonworks cluster"},"ClassicComputeExtension.ExtensionAssets.Resources.VirtualMachineCreateTimezone":
{arabianStandardTime:"(UTC+04:00) Abu Dhabi, Muscat",eSouthAmericaStandardTime:"(UTC-03:00) Brasilia",
bangladeshStandardTime:"(UTC+06:00) Dhaka",jordanStandardTime:"(UTC+02:00) Amman",bahiaStandardTime:
"(UTC-03:00) Salvador",pakistanStandardTime:"(UTC+05:00) Islamabad, Karachi",alaskanStandardTime:"(UTC-09:00) Alaska",
westPacificStandardTime:"(UTC+10:00) Guam, Port Moresby",centralStandardTime:"(UTC-06:00) Central Time (US & Canada)",
ulaanbaatarStandardTime:"(UTC+08:00) Ulaanbaatar",northAsiaEastStandardTime:"(UTC+09:00) Irkutsk",vladivostokStandardTime:
"(UTC+11:00) Vladivostok",usEasternStandardTime:"(UTC-05:00) Indiana (East)",eEuropeStandardTime:"(UTC+02:00) E. Europe",
tongaStandardTime:"(UTC+13:00) Nuku'alofa",libyaStandardTime:"(UTC+02:00) Tripoli",azerbaijanStandardTime:
"(UTC+04:00) Baku",centralEuropeanStandardTime:"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",atlanticStandardTime:
"(UTC-04:00) Atlantic Time (Canada)",yakutskStandardTime:"(UTC+10:00) Yakutsk",hawaiianStandardTime:
"(UTC-10:00) Hawaii",argentinaStandardTime:"(UTC-03:00) Buenos Aires",singaporeStandardTime:"(UTC+08:00) Kuala Lumpur, Singapore",
arabStandardTime:"(UTC+03:00) Kuwait, Riyadh",saWesternStandardTime:"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
tokyoStandardTime:"(UTC+09:00) Osaka, Sapporo, Tokyo",saPacificStandardTime:"(UTC-05:00) Bogota, Lima, Quito, Rio Branco",
centralPacificStandardTime:"(UTC+11:00) Solomon Is., New Caledonia",greenlandStandardTime:"(UTC-03:00) Greenland",
mountainStandardTime:"(UTC-07:00) Mountain Time (US & Canada)",wCentralAfricaStandardTime:"(UTC+01:00) West Central Africa",
romanceStandardTime:"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",westAsiaStandardTime:"(UTC+05:00) Ashgabat, Tashkent",
koreaStandardTime:"(UTC+09:00) Seoul",turkeyStandardTime:"(UTC+02:00) Istanbul",wAustraliaStandardTime:
"(UTC+08:00) Perth",greenwichStandardTime:"(UTC) Monrovia, Reykjavik",magadanStandardTime:"(UTC+12:00) Magadan",
capeVerdeStandardTime:"(UTC-01:00) Cape Verde Is.",russianStandardTime:"(UTC+04:00) Moscow, St. Petersburg, Volgograd",
datelineStandardTime:"(UTC-12:00) International Date Line West",pacificStandardTime:"(UTC-08:00) Pacific Time (US & Canada)",
easternStandardTime:"(UTC-05:00) Eastern Time (US & Canada)",mauritiusStandardTime:"(UTC+04:00) Port Louis",
georgianStandardTime:"(UTC+04:00) Tbilisi",caucasusStandardTime:"(UTC+04:00) Yerevan",centralAsiaStandardTime:
"(UTC+06:00) Astana",wEuropeStandardTime:"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
afghanistanStandardTime:"(UTC+04:30) Kabul",nepalStandardTime:"(UTC+05:45) Kathmandu",centralAmericaStandardTime:
"(UTC-06:00) Central America",samoaStandardTime:"(UTC+13:00) Samoa",utc02:"(UTC-02:00) Coordinated Universal Time-02",
utc12:"(UTC+12:00) Coordinated Universal Time+12",utc11:"(UTC-11:00) Coordinated Universal Time-11",
utc:"(UTC) Coordinated Universal Time",centralStandardTimeMexico:"(UTC-06:00) Guadalajara, Mexico City, Monterrey",
mountainStandardTimeMexico:"(UTC-07:00) Chihuahua, La Paz, Mazatlan",canadaCentralStandardTime:"(UTC-06:00) Saskatchewan",
pacificStandardTimeMexico:"(UTC-08:00) Baja California",seAsiaStandardTime:"(UTC+07:00) Bangkok, Hanoi, Jakarta",
egyptStandardTime:"(UTC+02:00) Cairo",pacificSAStandardTime:"(UTC-04:00) Santiago",namibiaStandardTime:
"(UTC+01:00) Windhoek",myanmarStandardTime:"(UTC+06:30) Yangon (Rangoon)",montevideoStandardTime:"(UTC-03:00) Montevideo",
ekaterinburgStandardTime:"(UTC+06:00) Ekaterinburg",ausCentralStandardTime:"(UTC+09:30) Darwin",nCentralAsiaStandardTime:
"(UTC+07:00) Novosibirsk",moroccoStandardTime:"(UTC) Casablanca",paraguayStandardTime:"(UTC-04:00) Asuncion",
kaliningradStandardTime:"(UTC+03:00) Kaliningrad, Minsk",fijiStandardTime:"(UTC+12:00) Fiji",southAfricaStandardTime:
"(UTC+02:00) Harare, Pretoria",cenAustraliaStandardTime:"(UTC+09:30) Adelaide",tasmaniaStandardTime:
"(UTC+10:00) Hobart",gmtStandardTime:"(UTC) Dublin, Edinburgh, Lisbon, London",taipeiStandardTime:"(UTC+08:00) Taipei",
newfoundlandStandardTime:"(UTC-03:30) Newfoundland",ausEasternStandardTime:"(UTC+10:00) Canberra, Melbourne, Sydney",
centralEuropeStandardTime:"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",fleStandardTime:
"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",northAsiaStandardTime:"(UTC+08:00) Krasnoyarsk",
eAfricaStandardTime:"(UTC+03:00) Nairobi",newZealandStandardTime:"(UTC+12:00) Auckland, Wellington",
centralBrazilianStandardTime:"(UTC-04:00) Cuiaba",israelStandardTime:"(UTC+02:00) Jerusalem",venezuelaStandardTime:
"(UTC-04:30) Caracas",iranStandardTime:"(UTC+03:30) Tehran",gtbStandardTime:"(UTC+02:00) Athens, Bucharest",
indiaStandardTime:"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",arabicStandardTime:"(UTC+03:00) Baghdad",
eAustraliaStandardTime:"(UTC+10:00) Brisbane",sriLankaStandardTime:"(UTC+05:30) Sri Jayawardenepura",
azoresStandardTime:"(UTC-01:00) Azores",syriaStandardTime:"(UTC+02:00) Damascus",middleEastStandardTime:
"(UTC+02:00) Beirut",chinaStandardTime:"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",usMountainStandardTime:
"(UTC-07:00) Arizona",saEasternStandardTime:"(UTC-03:00) Cayenne, Fortaleza"},"ClassicComputeExtension.ExtensionAssets.Resources.DisksAndImagesResources":
{ImageProperties_NameTitle:"Name",UserImages_lowerSingular:"vm image",DiskProperties_LocationTitle:"Location",
DiskProperties_LocationLabel:"Location",DiskProperties_StateTitle:"State",DiskProperties_OperatingSystemTitle:
"Operating System",ImageProperties_OSState:"OS State",ImageProperties_NumberOfDisks:"Number of disks",
DiskProperties_SusbcriptionIdLabel:"Subscription id",DiskProperties_SusbcriptionTitle:"Subscription",
DiskProperties_OsFamily:"OS family",DiskProperties_IoType:"IO-Type",UserImages_lowerPlural:"vm images",
UserImages_plural:"VM images",DiskProperties_Size:"Size",singular:"OS disk",DiskProperties_VhdUrl:"VHD Url",
DiskImageProperties_Command_createVMTitle:"Create VM",DisksBladeSubTitle:"OS disks",lowerPlural:"os disks",
DiskProperties_Source:"Source",ImageProperties_Size:"Size",DiskAlreadyAttachedMessage:"This disk is already attached to a VM. You can't deploy a VM from a disk that is already in use.",
DiskProperties_SubscriptionName:"Subscription name",DiskProperties_UnattachedLabel:"Unattached",ImagesBladeSubTitle:
"VM images",ImageProperties_VhdUrl:"VHD Url",DiskProperties_NameTitle:"Name",DiskProperties_State:"State",
ImageProperties_Source:"Source",DiskProperties_Command_PricingTier_notAvailable:"This pricing tier is not available for the selected disk",
UserImages_singular:"VM image",DiskProperties_AttachedLabel:"Attached",ImageProperties_OsFamily:"OS Family",
ImageProperties_Command_PricingTier_notAvailable:"This pricing tier is not available for the selected image",
ImageProperties_IoType:"IO-Type",lowerSingular:"os disk",plural:"OS disks"}})