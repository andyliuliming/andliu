using AzureManagementLib;
using Microsoft.OData.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.OData;
using System.Web.OData.Query;
namespace AzureWebConsole.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using AzureTerminalWebConsole.Model;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Token>("Tokens");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class TokensController : ODataController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: odata/Tokens
        public IHttpActionResult GetTokens(ODataQueryOptions<Token> queryOptions)
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
            HttpResponseMessage response2 = new HttpResponseMessage(HttpStatusCode.OK);

            IEnumerable<string> codes = this.ActionContext.Request.Headers.GetValues("Code");
            string accessToken = string.Empty;
            if (codes != null)
            {
                string code = codes.FirstOrDefault();
                if (code != null)
                {
                    // get the access token.
                    using (var client = new HttpClient())
                    {
                        client.BaseAddress = new Uri("https://login.microsoftonline.com");
                        client.DefaultRequestHeaders.Accept.Clear();
                        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                        var content = new FormUrlEncodedContent(new[] 
                        {
                            new KeyValuePair<string, string>("grant_type", "authorization_code"),
                            new KeyValuePair<string, string>("code", code), 
                            new KeyValuePair<string,string>("redirect_uri", AppSettingsProvider.GetSetting("redirect_uri")),//"http://localhost:63808/index.html"),
                            new KeyValuePair<string,string>("client_id",AppSettingsProvider.GetSetting("client_id")),//"bdc9875c-7994-4812-803e-ea2b216efe60"),
                            new KeyValuePair<string,string>("resource",AppSettingsProvider.GetSetting("resource")),//"https://management.core.windows.net/"),
                            //two is 
                             new KeyValuePair<string,string>("client_secret",AppSettingsProvider.GetSetting("client_secret")),//"dOVtx79Bc9lGkOtyqEXmwAhOnAg5ZBFFPb402hvL1EQ="),
                        });
                        Task<HttpResponseMessage> response = client.PostAsync("/common/oauth2/token", content);

                        if (response.Result.IsSuccessStatusCode)
                        {
                            response.Wait();
                            Task<Token> resposneResult = response.Result.Content.ReadAsAsync<Token>();
                            resposneResult.Wait();
                            return Ok<IEnumerable<Token>>(new Token[] { resposneResult.Result });
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
            }
            return Unauthorized();
        }
    }
}
