using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Management.Compute;
using Microsoft.WindowsAzure.Management.Compute.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tamir.SharpSsh.jsch;

namespace AzureManagementLib
{
    public class AzureVirtualMachineUtil
    {
        public List<AzureVirtualMachine> FindAllMachines(string subscriptionId, string accessToken)
        {
            List<AzureVirtualMachine> azureVirtualMachines = new List<AzureVirtualMachine>();
            TokenCloudCredentials credential = new TokenCloudCredentials(subscriptionId, accessToken);
            using (var client = new ComputeManagementClient(credential))
            {
                HostedServiceListResponse response = client.HostedServices.List();
                foreach (var hostService in response.HostedServices)
                {
                    if (azureVirtualMachines.Count > 1)
                    {
                        break;
                    }
                    try
                    {
                        DeploymentGetResponse deploymentGetResponse = client.Deployments.GetBySlot(hostService.ServiceName, DeploymentSlot.Production);
                        //https://management.core.windows.net/<subscription-id>/services/hostedservices/<cloudservice-name>/deployments/<deployment-name>/roleinstances/<roleinstance-name>/ModelFile?FileType=RDP
                        var roles = deploymentGetResponse.Roles;
                        var roleInstances = deploymentGetResponse.RoleInstances;
                        foreach (var role in roles)
                        {
                            if (role.RoleType == "PersistentVMRole")
                            {
                                // find the role instance related to this role
                                RoleInstance roleInstanceFound = null;
                                foreach (var roleInstance in roleInstances)
                                {
                                    if (roleInstance.RoleName == role.RoleName)
                                    {
                                        roleInstanceFound = roleInstance;
                                    }
                                }
                                AzureVirtualMachine azureVirtualMachine = new AzureVirtualMachine();
                                azureVirtualMachine.HostServiceName = hostService.ServiceName;
                                azureVirtualMachine.Url = hostService.Uri.ToString();
                                azureVirtualMachine.DeploymentName = deploymentGetResponse.Name;
                                azureVirtualMachine.RoleInstanceName = roleInstanceFound == null ? string.Empty : roleInstanceFound.InstanceName;
                                azureVirtualMachine.SubscriptionId = subscriptionId;
                                foreach (var configurationSet in role.ConfigurationSets)
                                {
                                    if (configurationSet.ConfigurationSetType == "NetworkConfiguration")
                                    {

                                        foreach (var inputEndpoint in configurationSet.InputEndpoints)
                                        {
                                            if (inputEndpoint.LocalPort == 22)
                                            {
                                                azureVirtualMachine.Port = inputEndpoint.Port;
                                            }
                                            else if (inputEndpoint.LocalPort == 3389)
                                            {
                                                azureVirtualMachine.Port = inputEndpoint.Port;
                                            }
                                        }
                                    }
                                }
                                azureVirtualMachine.OS = role.OSVirtualHardDisk.OperatingSystem;

                                azureVirtualMachines.Add(azureVirtualMachine);
                            }
                        }
                    }
                    catch (CloudException)
                    {
                    }
                }
            }
            return azureVirtualMachines;
        }


        public void SetPublicKey(Stream publicKey, string serviceName, string userName, string deploymentName, string virtualMachineName, string subscriptionId, string accessToken)
        {
            List<AzureVirtualMachine> azureVirtualMachines = new List<AzureVirtualMachine>();
            TokenCloudCredentials credential = new TokenCloudCredentials(subscriptionId, accessToken);
            using (var client = new ComputeManagementClient(credential))
            {
                VirtualMachineUpdateParameters parameters = new VirtualMachineUpdateParameters();
                ResourceExtensionReference reference = new ResourceExtensionReference();
                reference.ReferenceName = "VMAccessForLinux";
                reference.Name = "VMAccessForLinux";
                reference.Publisher = "Microsoft.OSTCExtensions";
                reference.Version = "1.2";
                ResourceExtensionParameterValue parameterValue = new ResourceExtensionParameterValue();
                parameterValue.Key = "VMAccessForLinuxPrivateConfigParameter";

                //              we should base 64 encode this:
                //{
                //    "username":  "azureuser",
                //    "ssh_key":  "I\u0027m a bad key.",
                //    "reset_ssh":  "true",
                //    "timestamp":  635699820973851823
                //}
                string privateParameter = Convert.ToBase64String(null);
                parameterValue.Value = privateParameter;
                parameterValue.Type = "Private";
                reference.ResourceExtensionParameterValues.Add(parameterValue);
                parameters.ResourceExtensionReferences.Add(reference);

                client.VirtualMachines.Update(serviceName, deploymentName, virtualMachineName, new VirtualMachineUpdateParameters());
            }
        }


    }
}
