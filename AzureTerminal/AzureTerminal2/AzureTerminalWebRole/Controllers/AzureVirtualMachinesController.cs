using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using AzureTerminalWebConsole.Model;
using System.Web.OData;
using System.Web.OData.Query;
using Microsoft.OData.Core;
using System.Threading.Tasks;
using System.Xml;
using System.IO;
using AzureManagementLib;

namespace AzureTerminalWebConsole.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using AzureTerminalWebConsole.Model;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<LinuxVM>("LinuxVMs");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class AzureVirtualMachinesController : ODataController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: odata/LinuxVMs
        public IHttpActionResult GetAzureVirtualMachines(ODataQueryOptions<AzureVirtualMachine> queryOptions)
        {
            // validate the query.
            try
            {
                queryOptions.Validate(_validationSettings);
            }
            catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }
            List<AzureVirtualMachine> azureVirtualMachines = new List<AzureVirtualMachine>();

            AzureVirtualMachine azureVirtualMachine = new AzureVirtualMachine();
            azureVirtualMachine.Id = 5;
            azureVirtualMachine.HostServiceName = "andliu-server";
            azureVirtualMachine.OS = "Windows";
            azureVirtualMachine.Port = 58276;

            azureVirtualMachines.Add(azureVirtualMachine);


            azureVirtualMachines.Add(azureVirtualMachine);


            azureVirtualMachine = new AzureVirtualMachine();
            azureVirtualMachine.Id = 6; 
            azureVirtualMachine.HostServiceName = "andliu-ubuntu";
            azureVirtualMachine.OS = "Linux";
            azureVirtualMachine.Port = 22;

            azureVirtualMachines.Add(azureVirtualMachine);
            //eploymentName: "andliu-ubuntu"HostServiceName: "andliu-ubuntu"Id: 13OS: "Linux"Port: 22RoleInstanceName: "andliu-ubuntu"SubscriptionId: "c4528d9e-c99a-48bb-b12d-fde2176a43b8"Url: "https://management.core.windows.net/c4528d9e-c99a-48bb-b12d-fde2176a43b8/services/hostedservices/andliu-ubuntu"

            //DeploymentName: "abel-extension"HostServiceName: "abel-extension"Id: 3OS: "Linux"Port: 22RoleInstanceName: "abel-extension"SubscriptionId: "4be8920b-2978-43d7-ab14-04d8549c1d05"Url: "https://management.core.windows.net/4be8920b-2978-43d7-ab14-04d8549c1d05/services/hostedservices/abel-extension"
            return Ok<IEnumerable<AzureVirtualMachine>>(azureVirtualMachines);
            //IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("access_token");
            //string accessToken = accessTokens.FirstOrDefault();

            //SubscriptionUtil util = new SubscriptionUtil();
            //List<Subscription> subs = util.GetSubscriptions(accessToken);
            //// get the subscriptions from the access token.
            //if (accessToken != null)
            //{
            //    AzureVirtualMachineUtil vmUtil = new AzureVirtualMachineUtil();
            //    List<AzureVirtualMachine> azureVirtualMachines = new List<AzureVirtualMachine>();
            //    foreach (Subscription sub in subs)
            //    {
            //        List<AzureVirtualMachine> azureVirtualMachinesTmp = vmUtil.FindAllMachines(sub.SubscriptionId, accessToken);
            //        azureVirtualMachines.AddRange(azureVirtualMachinesTmp);
            //    }
            //    for (int i = 0; i < azureVirtualMachines.Count; i++)
            //    {
            //        azureVirtualMachines[i].Id = i + 3;
            //    }
            //    return Ok<IEnumerable<AzureVirtualMachine>>(azureVirtualMachines);
            //}
            //else
            //{
            //    return Unauthorized();
            //}
        }


    }
}
