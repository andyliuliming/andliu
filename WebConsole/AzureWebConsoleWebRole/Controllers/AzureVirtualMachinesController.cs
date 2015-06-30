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
using System.Threading.Tasks;
using System.Xml;
using System.IO;
using AzureManagementLib;
using Microsoft.OData.Core.UriParser.Semantic;
using Microsoft.OData.Core.UriParser.TreeNodeKinds;
using AzureWebConsoleDomain;
using System.Web;

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


        AzureWebConsoleModelContainer db = new AzureWebConsoleModelContainer();
        // GET: odata/LinuxVMs
        public async Task<IHttpActionResult> GetAzureVirtualMachines(ODataQueryOptions<AzureVirtualMachine> queryOptions)
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

            IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("Authorization");
            string accessToken = accessTokens.FirstOrDefault();
            if (accessToken != null)
            {
                TokenValidator validator = new TokenValidator();
                string authHeader = HttpContext.Current.Request.Headers["Authorization"];
                TokenValidationResult code = await validator.Validate(authHeader);

                IQueryable<AzureVirtualMachine> azureVirtualMachines = db.AzureVirtualMachines.Where(avm => avm.Owner == code.ClaimsPrincipal.Identity.Name);
                return Ok<IEnumerable<AzureVirtualMachine>>(azureVirtualMachines);
            }
            else
            {
                return Unauthorized();
            }
        }


    }
}
