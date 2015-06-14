using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Management.Compute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AzureManagementLib
{
    public class VMUtil
    {
        public List<AzureVirtualMachine> FindAllMachines(string accessToken)
        {
            List<AzureVirtualMachine> azureVirtualMachines = new List<AzureVirtualMachine>();
            using (var client = new ComputeManagementClient(new TokenCloudCredentials(accessToken)))
            {
                //client.VirtualMachines.list
                var virtualMachineDisks = client.VirtualMachineDisks.ListDisks();

                foreach (var virtualMachineDisk in virtualMachineDisks)
                {
                    var hostedServiceName = virtualMachineDisk.UsageDetails.HostedServiceName;
                    var deploymentName = virtualMachineDisk.UsageDetails.DeploymentName;
                    var operatingSystemType = virtualMachineDisk.OperatingSystemType;
                    var logicalSizeInGB = virtualMachineDisk.LogicalSizeInGB;

                    AzureVirtualMachine machine = new AzureVirtualMachine();
                    machine.HostServiceName = hostedServiceName;
                    azureVirtualMachines.Add(machine);
                }

                //var hostServicesOperation = client.HostedServices.List();
                //var hostServcies = hostServicesOperation.HostedServices;
                //foreach(var hostService in hostServcies ){

                //    client.Deployments.GetByName(hostService.)
                //    //hostService.
                //}
                ////var xx = client.HostedServices.ListAsync();
                //xx.Result.
            }
            return azureVirtualMachines;
            //using (var azure = new SubscriptionClient(new TokenCloudCredentials(accessToken)))
            //{
            //    var subResponse = azure.Subscriptions.List();
            //    var subscriptions = subResponse.Subscriptions;
            //}
        }
    }
}
