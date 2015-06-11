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
    builder.EntitySet<Subscription>("Subscriptions");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class SubscriptionsController : ApiController
    {
        //     public class FilesController : ApiController
        //{
        //    [HttpGet]
        //    //[CacheOutput(ClientTimeSpan = 100, ServerTimeSpan = 100, NoCache = true)]
        //    public async Task<HttpResponseMessage> Get([FromUri]string fileName)

        private List<string> subscriptionsInWhiteList = new List<string>() { "141c2865-6055-4232-aa49-41b5eb560a41",
            "a932c0e6-b5cb-4e68-b23d-5064372c8a3c",
"411baf9e-7967-4d76-b4ab-46e7ad8b02fc",
"5b6d2876-ee1b-4c31-ab79-42c186974c78",
"40f5e541-8e15-41a3-8562-27cdac4fcb1a"};

        public HttpResponseMessage Get()
        {
            HttpResponseMessage response2 = new HttpResponseMessage(HttpStatusCode.OK);

            List<Subscription> subscriptions = this.GetSubscriptions();
            string result = "fail";
            if (subscriptions != null)
            {
                foreach (var sub in subscriptions)
                {
                    if (subscriptionsInWhiteList.Contains(sub.SubscriptionId))
                    {
                        result = "success";
                    }
                }
            }
            response2.Content = new StringContent(result);
            return response2;
        }

        private string RequestFormat = @"grant_type=authorization_code&code={0}&redirect_uri=https://azureterminal.cloudapp.net/index.html&client_id=0c46e28c-e8cb-490d-bd4f-21626b6601f6&resource=https://management.core.windows.net/&client_secret={1}";

        // GET: odata/Subscriptions
        private List<Subscription> GetSubscriptions()
        {
            // get the headers, Code.
            IEnumerable<string> codes = this.ActionContext.Request.Headers.GetValues("Code");
            string accessToken = null;
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

                        StringContent sc = new StringContent(string.Format(RequestFormat, code, AppSettingsProvider.GetSetting("ClientSecret")));
                        //HttpContent content=new 
                        //    HttpContent();
                        Task<HttpResponseMessage> response = client.PostAsync("/000ff064-9dc3-480a-9517-2b7b8519df17/oauth2/token?api-version=1.0", sc);

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
                            XmlNodeList nodeList = xmlDoc.SelectNodes("/Subscriptions/Subscription/SubscriptionID");
                            foreach (XmlNode node in nodeList)
                            {
                                Subscription subscription = new Subscription();
                                subscription.Id = 0;
                                subscription.SubscriptionId = node.InnerText;
                                subscriptionsToReturn.Add(subscription);
                            }
                        }
                        return (subscriptionsToReturn);
                    }
                }
            }
            return null;
        }
        
    }
}
