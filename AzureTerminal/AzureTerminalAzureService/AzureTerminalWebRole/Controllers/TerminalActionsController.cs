using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using AzureTerminalWebConsole.Model;
using Microsoft.Data.OData;
using System.Web.OData.Query;
using System.Web.OData;
using Microsoft.OData.Core;

namespace AzureTerminalWebConsole.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using AzureTerminalWebConsole.Model;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Action>("Actions");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class TerminalActionsController : ODataController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: odata/TerminalActions
        public IHttpActionResult GetTerminalActions(ODataQueryOptions<TerminalAction> queryOptions)
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

            // return Ok<IEnumerable<TerminalAction>>(actions);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // GET: odata/TerminalActions(5)
        public IHttpActionResult GetAction([FromODataUri] long key, ODataQueryOptions<TerminalAction> queryOptions)
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

            // return Ok<TerminalAction>(action);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PUT: odata/TerminalActions(5)
        public IHttpActionResult Put([FromODataUri] long key, Delta<TerminalAction> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Put(action);

            // TODO: Save the patched entity.

            // return Updated(action);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // POST: odata/TerminalActions
        public IHttpActionResult Post(TerminalAction action)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Add create logic here.

            // return Created(action);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PATCH: odata/TerminalActions(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] long key, Delta<TerminalAction> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Patch(action);

            // TODO: Save the patched entity.

            // return Updated(action);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // DELETE: odata/TerminalActions(5)
        public IHttpActionResult Delete([FromODataUri] long key)
        {
            // TODO: Add delete logic here.

            // return StatusCode(HttpStatusCode.NoContent);
            return StatusCode(HttpStatusCode.NotImplemented);
        }
    }
}
