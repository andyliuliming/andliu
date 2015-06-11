using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Query;
using System.Web.Http.OData.Routing;
using AzureTerminalWebConsole.Model;
using Microsoft.Data.OData;
using System.Net.Http.Headers;
using System.Threading.Tasks;

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
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        private string RequestFormat = @"grant_type=authorization_code&code={0}&redirect_uri=https://azureterminal.cloudapp.net/index.html&client_id=0c46e28c-e8cb-490d-bd4f-21626b6601f6&resource=https://management.core.windows.net/&client_secret=NJDdG7kH0jLM9gNup4B/m3E4MaQhzks8ItrakWFL7s0=";

        // GET: odata/Subscriptions
        public IHttpActionResult GetSubscriptions(ODataQueryOptions<Subscription> queryOptions)
        {
            // get the headers, Code.
            IEnumerable<string> codes = this.ActionContext.Request.Headers.GetValues("Code");
            string accessToken = null;
            if (codes != null )
            {
                string code = codes.FirstOrDefault();
                if (code != null)
                {
                    // get the access token.
                    using (var client = new HttpClient())
                    {
                        //https://login.microsoftonline.com/000ff064-9dc3-480a-9517-2b7b8519df17/oauth2/token?api-version=1.0
                        client.BaseAddress = new Uri("https://login.microsoftonline.com");
                        client.DefaultRequestHeaders.Accept.Clear();
                        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                        
                        //var keyValues = new List<KeyValuePair<string, string>>();
                        //keyValues.Add(new KeyValuePair<string, string>("site", "http://www.google.com"));
                        //keyValues.Add(new KeyValuePair<string, string>("content", "This is some content"));

                        //FormUrlEncodedContent content = new FormUrlEncodedContent();
                        //content.
                        StringContent sc = new StringContent(string.Format(RequestFormat,code));
                        //HttpContent content=new 
                        //    HttpContent();
                        Task<HttpResponseMessage> response =client.PostAsync("/000ff064-9dc3-480a-9517-2b7b8519df17/oauth2/token?api-version=1.0", sc);

                        if (response.Result.IsSuccessStatusCode)
                        {
                            response.Wait();
                            Task<string> resposneResult = response.Result.Content.ReadAsStringAsync();
                            resposneResult.Wait();
                            accessToken = resposneResult.Result;
                        }
                    }
                }
            }
            else
            {
                IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("AccessToken");
                accessToken = accessTokens.FirstOrDefault();
            }
            // get the subscriptions from the access token.
            if (accessToken != null)
            {
                using (var client = new HttpClient())
                {
                    client.BaseAddress = new Uri("https://management.core.windows.net");
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.DefaultRequestHeaders.Add("Authorization", "Bearer " + accessToken);
                    //StringContent sc = new StringContent(string.Format(RequestFormat, code));
                    //HttpContent content=new 
                    //    HttpContent();
                    Task<HttpResponseMessage> response = client.GetAsync("/subscriptions");

                    if (response.Result.IsSuccessStatusCode)
                    {
                        response.Wait();
                        Task<string> resposneResult = response.Result.Content.ReadAsStringAsync();
                        resposneResult.Wait();
                        string subscriptionXml = resposneResult.Result;

                        List<Subscription> subscriptionsToReturn = new List<Subscription>();
                        return Ok<IEnumerable<Subscription>>(subscriptionsToReturn);
                    }
                }
            }
            return NotFound();
            
            //// validate the query.
            //try
            //{
            //    queryOptions.Validate(_validationSettings);
            //}
            //catch (ODataException ex)
            //{
            //    return BadRequest(ex.Message);
            //}

            //// return Ok<IEnumerable<Subscription>>(subscriptions);
            //return StatusCode(HttpStatusCode.NotImplemented);
        }

        // GET: odata/Subscriptions(5)
        public IHttpActionResult GetSubscription([FromODataUri] long key, ODataQueryOptions<Subscription> queryOptions)
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

            // return Ok<Subscription>(subscription);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PUT: odata/Subscriptions(5)
        public IHttpActionResult Put([FromODataUri] long key, Delta<Subscription> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Put(subscription);

            // TODO: Save the patched entity.

            // return Updated(subscription);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // POST: odata/Subscriptions
        public IHttpActionResult Post(Subscription subscription)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Add create logic here.

            // return Created(subscription);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // PATCH: odata/Subscriptions(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] long key, Delta<Subscription> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // TODO: Get the entity here.

            // delta.Patch(subscription);

            // TODO: Save the patched entity.

            // return Updated(subscription);
            return StatusCode(HttpStatusCode.NotImplemented);
        }

        // DELETE: odata/Subscriptions(5)
        public IHttpActionResult Delete([FromODataUri] long key)
        {
            // TODO: Add delete logic here.

            // return StatusCode(HttpStatusCode.NoContent);
            return StatusCode(HttpStatusCode.NotImplemented);
        }
    }
}
