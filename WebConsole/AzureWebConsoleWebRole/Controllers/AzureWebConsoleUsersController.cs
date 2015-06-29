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
using AzureManagementLib;

namespace AzureWebConsole.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using AzureWebConsoleDomain;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<AzureWebConsoleUser>("AzureWebConsoleUsers");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class AzureWebConsoleUsersController : ODataController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: odata/AzureWebConsoleUsers
        public IHttpActionResult GetAzureWebConsoleUsers(ODataQueryOptions<AzureWebConsoleUser> queryOptions)
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

            // return Ok<IEnumerable<AzureWebConsoleUser>>(azureWebConsoleUsers);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // GET: odata/AzureWebConsoleUsers(5)
        public IHttpActionResult GetAzureWebConsoleUser([FromODataUri] System.Guid key, ODataQueryOptions<AzureWebConsoleUser> queryOptions)
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

            // return Ok<AzureWebConsoleUser>(azureWebConsoleUser);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PUT: odata/AzureWebConsoleUsers(5)
        public IHttpActionResult Put([FromODataUri] System.Guid key, Delta<AzureWebConsoleUser> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Put(azureWebConsoleUser);

            // TODO: Save the patched entity.

            // return Updated(azureWebConsoleUser);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // POST: odata/AzureWebConsoleUsers
        public IHttpActionResult Post(AzureWebConsoleUser azureWebConsoleUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Add create logic here.
            AzureGraphUtil azureGraphUtil = new AzureGraphUtil();
            azureGraphUtil.CreateUser(azureWebConsoleUser);

            return Created<AzureWebConsoleUser>(azureWebConsoleUser);
        }

        // PATCH: odata/AzureWebConsoleUsers(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] System.Guid key, Delta<AzureWebConsoleUser> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Patch(azureWebConsoleUser);

            // TODO: Save the patched entity.

            // return Updated(azureWebConsoleUser);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // DELETE: odata/AzureWebConsoleUsers(5)
        public IHttpActionResult Delete([FromODataUri] System.Guid key)
        {
            // TODO: Add delete logic here.

            // return StatusCode(HttpStatusCode.NoContent);
            return StatusCode(HttpStatusCode.NotImplemented);
        }
    }
}
