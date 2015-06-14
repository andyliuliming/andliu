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

                }
                //client.Deployments.GetBySlot()
               // client.Deployments.get
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
            }
            return azureVirtualMachines;
        }
    }
}
