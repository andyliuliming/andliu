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
using Microsoft.OData.Core.UriParser.Semantic;
using Microsoft.OData.Core.UriParser.TreeNodeKinds;

namespace AzureWebConsole.Controllers
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

            IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("access_token");
            string accessToken = accessTokens.FirstOrDefault();
            if (accessToken != null)
            {
                // get the SubscriptionId first and then filter it

                if (queryOptions != null && queryOptions.Filter != null)
                {
                    BinaryOperatorNode binaryOperator = queryOptions.Filter.FilterClause.Expression as BinaryOperatorNode;
                    if (binaryOperator != null)
                    {
                        SingleValuePropertyAccessNode property = binaryOperator.Left as SingleValuePropertyAccessNode;
                        if (property != null && binaryOperator.OperatorKind == BinaryOperatorKind.Equal
                            && property.Property.Name == "SubscriptionId")
                        {
                            //return true;
                            ConstantNode singleValueNode = binaryOperator.Right as ConstantNode;
                            

                            AzureVirtualMachineUtil vmUtil = new AzureVirtualMachineUtil();
                            List<AzureVirtualMachine> azureVirtualMachines = new List<AzureVirtualMachine>();

                            List<AzureVirtualMachine> azureVirtualMachinesTmp = vmUtil.FindAllMachines(singleValueNode.Value.ToString(), accessToken);
                            azureVirtualMachines.AddRange(azureVirtualMachinesTmp);

                            for (int i = 0; i < azureVirtualMachines.Count; i++)
                            {
                                azureVirtualMachines[i].Id = i + 3;
                            }
                            return Ok<IEnumerable<AzureVirtualMachine>>(azureVirtualMachines);
                        }
                    }
                }
                // get the subscriptions from the access token.

                return BadRequest("");
            }
            else
            {
                return Unauthorized();
            }
        }


    }
}
