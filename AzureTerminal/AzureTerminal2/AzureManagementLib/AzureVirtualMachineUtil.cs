using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Management.Compute;
using Microsoft.WindowsAzure.Management.Compute.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

                foreach(var hostService in response.HostedServices)
                {
                    if (azureVirtualMachines.Count > 1)
                    {
                        break;
                    }
                    try {
                        DeploymentGetResponse deploymentGetResponse = client.Deployments.GetBySlot(hostService.ServiceName, DeploymentSlot.Production);//https://management.core.windows.net/<subscription-id>/services/hostedservices/<cloudservice-name>/deployments/<deployment-name>/roleinstances/<roleinstance-name>/ModelFile?FileType=RDP
                        var roles = deploymentGetResponse.Roles;
                        foreach (var role in roles)
                        {
                            if (role.RoleType == "PersistentVMRole")
                            {
                                AzureVirtualMachine azureVirtualMachine = new AzureVirtualMachine();
                                azureVirtualMachine.HostServiceName = hostService.ServiceName;
                                azureVirtualMachine.Url = hostService.Uri.ToString();

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
                    
                    //deploymentGetResponse.RoleInstances
                }
                //client.Deployments.GetBySlot()
               // client.Deployments.get
                //client.VirtualMachines.list
                //var virtualMachineDisks = client.VirtualMachineDisks.ListDisks();

                //foreach (var virtualMachineDisk in virtualMachineDisks)
                //{
                //    var hostedServiceName = virtualMachineDisk.UsageDetails.HostedServiceName;
                //    var deploymentName = virtualMachineDisk.UsageDetails.DeploymentName;
                //    var operatingSystemType = virtualMachineDisk.OperatingSystemType;
                //    var logicalSizeInGB = virtualMachineDisk.LogicalSizeInGB;

                //    AzureVirtualMachine machine = new AzureVirtualMachine();
                //    machine.HostServiceName = hostedServiceName;
                //    azureVirtualMachines.Add(machine);
                //}
            }
            return azureVirtualMachines;
        }
    }
}
