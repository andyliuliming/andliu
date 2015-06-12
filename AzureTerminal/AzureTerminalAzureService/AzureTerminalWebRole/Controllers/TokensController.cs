using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using AzureTerminalWebConsole.Model;
using Microsoft.Data.OData;
using System.Web.OData;
using System.Web.OData.Query;
using System.Web.Http;
using Microsoft.OData.Core;
using System.Net.Http;
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
                        //https://login.microsoftonline.com/000ff064-9dc3-480a-9517-2b7b8519df17/oauth2/token?api-version=1.0
                        client.BaseAddress = new Uri("https://login.microsoftonline.com");
                        client.DefaultRequestHeaders.Accept.Clear();
                        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                        string clientSecret = AppSettingsProvider.GetSetting("ClientSecret");
                        //StringContent sc = new StringContent(string.Format(RequestFormat, code, clientSecret));

                        var content = new FormUrlEncodedContent(new[] 
                        {
                            new KeyValuePair<string, string>("grant_type", "authorization_code"),
                            new KeyValuePair<string, string>("code", code), 
                            new KeyValuePair<string,string>("redirect_uri","https://azureterminal.cloudapp.net/index.html"),
                            new KeyValuePair<string,string>("client_id","0c46e28c-e8cb-490d-bd4f-21626b6601f6"),
                            new KeyValuePair<string,string>("resource","https://management.core.windows.net/"),
                             new KeyValuePair<string,string>("client_secret",clientSecret),
                        });
                        Task<HttpResponseMessage> response = client.PostAsync("/000ff064-9dc3-480a-9517-2b7b8519df17/oauth2/token?api-version=1.0", content);

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
