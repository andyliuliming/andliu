using AzureManagementLib;
using AzureTerminalWebConsole.Model;
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
                        //https://login.microsoftonline.com/000ff064-9dc3-480a-9517-2b7b8519df17/oauth2/authorize?resource=https%3A%2F%2Fmanagement.core.windows.net%2F&client_id=0c46e28c-e8cb-490d-bd4f-21626b6601f6&response_type=code&redirect_uri=https%3A%2F%2Fazureterminal.cloudapp.net%2Findex.html

                        //https://login.windows.net/000ff064-9dc3-480a-9517-2b7b8519df17/oauth2/token
                        //https://login.microsoftonline.com/000ff064-9dc3-480a-9517-2b7b8519df17/oauth2/authorize
                        //https://login.microsoftonline.com/000ff064-9dc3-480a-9517-2b7b8519df17/oauth2/token?api-version=1.0
                        client.BaseAddress = new Uri("https://login.microsoftonline.com");
                        client.DefaultRequestHeaders.Accept.Clear();
                        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                        //string clientSecret = AppSettingsProvider.GetSetting("ClientSecret");
                        //StringContent sc = new StringContent(string.Format(RequestFormat, code, clientSecret));

                        var content = new FormUrlEncodedContent(new[] 
                        {
                            new KeyValuePair<string, string>("grant_type", "authorization_code"),
                            new KeyValuePair<string, string>("code", code), 
                            new KeyValuePair<string,string>("redirect_uri","https://azureterminal.cloudapp.net/index.html"),
                            new KeyValuePair<string,string>("client_id","0c46e28c-e8cb-490d-bd4f-21626b6601f6"),
                            new KeyValuePair<string,string>("resource","https://management.core.windows.net/"),
                             new KeyValuePair<string,string>("client_secret","NJDdG7kH0jLM9gNup4B/m3E4MaQhzks8ItrakWFL7s0="),
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
