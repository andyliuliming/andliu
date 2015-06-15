using AzureManagementLib;
using AzureTerminalWebConsole.Model;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.OData;
using System.Web.OData.Query;
using System.Xml;

namespace AzureTerminalWebConsole.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using AzureTerminalWebConsole.Model;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Subscription>("Subscriptions");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class SubscriptionsController : ODataController
    {

        private List<string> subscriptionsInWhiteList = new List<string>() { "141c2865-6055-4232-aa49-41b5eb560a41",
            "a932c0e6-b5cb-4e68-b23d-5064372c8a3c",
"411baf9e-7967-4d76-b4ab-46e7ad8b02fc",
"5b6d2876-ee1b-4c31-ab79-42c186974c78",
"40f5e541-8e15-41a3-8562-27cdac4fcb1a"
        ,
        
        // inner
        "4be8920b-2978-43d7-ab14-04d8549c1d05",
        "5a52f9c6-5daa-4a41-8b1c-07ba7e1f2c8f",
        "6ec2c6df-fdd8-4d3e-99b7-ad64629a7bae",
        "76907309-9f00-4b15-a06a-f45e789ba96c",
        "c4528d9e-c99a-48bb-b12d-fde2176a43b8"
        };


        public IHttpActionResult GetSubscriptions(ODataQueryOptions<AzureTerminalWebConsole.Model.Subscription> queryOptions)
        {
            IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("access_token");
            string accessToken = accessTokens.FirstOrDefault();
            // get the subscriptions from the access token.
            if (accessToken != null)
            {
                SubscriptionUtil util = new SubscriptionUtil();
                var azureVirtualMachines = util.GetSubscriptions(accessToken);
                return Ok<IEnumerable<AzureTerminalWebConsole.Model.Subscription>>(azureVirtualMachines.ToArray());
            }
            return NotFound();
        }
    }
}
