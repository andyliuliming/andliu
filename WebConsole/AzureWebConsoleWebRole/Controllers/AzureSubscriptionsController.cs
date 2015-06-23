using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.OData;
using System.Web.OData.Query;
using Microsoft.OData.Core;
using AzureManagementLib;
using AzureWebConsoleDomain;

namespace AzureWebConsole.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using AzureTerminalWebConsole.Model;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<AzureSubscription>("AzureSubscriptions");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class AzureSubscriptionsController : ODataController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: odata/AzureSubscriptions
        public IHttpActionResult GetAzureSubscriptions(ODataQueryOptions<AzureSubscription> queryOptions)
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

            IEnumerable<string> commonAccessTokens = this.ActionContext.Request.Headers.GetValues("common_access_token");
            string commonAccessToken = commonAccessTokens.FirstOrDefault();
            AzureSubscriptionUtil util = new AzureSubscriptionUtil();
            List<AzureSubscription> azureSubscriptions = util.GetSubscriptions(commonAccessToken);
            return Ok<IEnumerable<AzureSubscription>>(azureSubscriptions);
        }
    }
}
