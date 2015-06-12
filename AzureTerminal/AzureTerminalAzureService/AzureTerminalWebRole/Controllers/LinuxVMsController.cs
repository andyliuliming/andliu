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
using System.Web.OData;
using System.Web.OData.Query;
using Microsoft.OData.Core;
using System.Threading.Tasks;
using System.Xml;
using System.IO;

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
    public class LinuxVMsController : ODataController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: odata/LinuxVMs
        public IHttpActionResult GetLinuxVMs(ODataQueryOptions<LinuxVM> queryOptions)
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
            // get the subscriptions from the access token.
            if (accessToken != null)
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri("https://management.core.windows.net");
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Add("Authorization", "Bearer " + accessToken);
                    client.DefaultRequestHeaders.Add("x-ms-version", "2013-08-01");
                    Task<HttpResponseMessage> response = client.GetAsync("/subscriptions");

                    if (response.Result.IsSuccessStatusCode)
                    {
                        response.Wait();
                        Task<string> resposneResult = response.Result.Content.ReadAsStringAsync();
                        resposneResult.Wait();
                        string subscriptionXml = resposneResult.Result;

                        List<Subscription> subscriptionsToReturn = new List<Subscription>();
                        using (XmlReader reader = XmlReader.Create(new StringReader(subscriptionXml)))
                        {
                            XmlDocument xmlDoc = new XmlDocument(); // Create an XML document object
                            xmlDoc.Load(reader);
                            XmlNamespaceManager manager = new XmlNamespaceManager(xmlDoc.NameTable);
                            manager.AddNamespace("ab", "http://schemas.microsoft.com/windowsazure");
                            XmlNodeList nodeList = xmlDoc.SelectNodes("//ab:Subscription/ab:SubscriptionID", manager);
                            foreach (XmlNode node in nodeList)
                            {
                                Subscription subscription = new Subscription();
                                subscription.Id = 0;
                                subscription.SubscriptionId = node.InnerText;
                                subscriptionsToReturn.Add(subscription);
                            }
                        }
                        //return (subscriptionsToReturn);
                    }
                    else
                    {
                        HttpContent errorContent = response.Result.Content;
                        Task<string> errorStringTask = errorContent.ReadAsStringAsync();
                        errorStringTask.Wait();
                        string errorResult = errorStringTask.Result;
                    }
                }
            }
//            Follow these steps for listing VMs:

//List HostedServices using the following ListHostedServices
//For each service in from the above, a)GetDeployment by Environment(production or staging). OR b) Get Deployment By Name.
//In either case, get the value for Deployment.getRoleInstanceList().getRoleInstance().getInstanceName().
            // return Ok<IEnumerable<LinuxVM>>(linuxVMs);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // GET: odata/LinuxVMs(5)
        public IHttpActionResult GetLinuxVM([FromODataUri] long key, ODataQueryOptions<LinuxVM> queryOptions)
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

            // return Ok<LinuxVM>(linuxVM);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PUT: odata/LinuxVMs(5)
        public IHttpActionResult Put([FromODataUri] long key, Delta<LinuxVM> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Put(linuxVM);

            // TODO: Save the patched entity.

            // return Updated(linuxVM);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // POST: odata/LinuxVMs
        public IHttpActionResult Post(LinuxVM linuxVM)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Add create logic here.

            // return Created(linuxVM);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PATCH: odata/LinuxVMs(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] long key, Delta<LinuxVM> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Patch(linuxVM);

            // TODO: Save the patched entity.

            // return Updated(linuxVM);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // DELETE: odata/LinuxVMs(5)
        public IHttpActionResult Delete([FromODataUri] long key)
        {
            // TODO: Add delete logic here.

            // return StatusCode(HttpStatusCode.NoContent);
            return StatusCode(HttpStatusCode.NotImplemented);
        }
    }
}
