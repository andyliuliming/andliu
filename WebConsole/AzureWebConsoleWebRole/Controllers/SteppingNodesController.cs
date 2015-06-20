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

            // return Ok<IEnumerable<SteppingNode>>(steppingNodes);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // GET: odata/SteppingNodes(5)
        public IHttpActionResult GetSteppingNode([FromODataUri] long key, ODataQueryOptions<SteppingNode> queryOptions)
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

            // return Ok<SteppingNode>(steppingNode);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PUT: odata/SteppingNodes(5)
        public IHttpActionResult Put([FromODataUri] long key, Delta<SteppingNode> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Put(steppingNode);

            // TODO: Save the patched entity.

            // return Updated(steppingNode);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // POST: odata/SteppingNodes
        public IHttpActionResult Post(SteppingNode steppingNode)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Add create logic here.

            // return Created(steppingNode);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PATCH: odata/SteppingNodes(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] long key, Delta<SteppingNode> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Patch(steppingNode);

            // TODO: Save the patched entity.

            // return Updated(steppingNode);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // DELETE: odata/SteppingNodes(5)
        public IHttpActionResult Delete([FromODataUri] long key)
        {
            // TODO: Add delete logic here.

            // return StatusCode(HttpStatusCode.NoContent);
            return StatusCode(HttpStatusCode.NotImplemented);
        }
    }
}
