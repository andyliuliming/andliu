using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using AzureWebConsoleDomain;
using System.Web.OData;
using System.Web.OData.Query;
using Microsoft.OData.Core;

namespace AzureWebConsole.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using AzureWebConsoleDomain;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<SteppingNode>("SteppingNodes");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class SteppingNodesController : ODataController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: odata/SteppingNodes
        public IHttpActionResult GetSteppingNodes(ODataQueryOptions<SteppingNode> queryOptions)
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

            SteppingNode node = new SteppingNode();
            node.Id = 0;
            node.Address = "azurewebconsole.cloudapp.net:81";

            List<SteppingNode> steppingNodes = new List<SteppingNode>();
            steppingNodes.Add(node);
            return Ok<IEnumerable<SteppingNode>>(steppingNodes);
        }
    }
}
