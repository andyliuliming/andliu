using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace AzureManagementLib
{
    public class TokenUtil
    {
        public Token DoIt(string code)
        {
            using (var client = new HttpClient())
            {
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
                Task<HttpResponseMessage> response = client.PostAsync("/000ff064-9dc3-480a-9517-2b7b8519df17/oauth2/token?api-version=1.0", content);

                if (response.Result.IsSuccessStatusCode)
                {
                    response.Wait();
                    Task<Token> resposneResult = response.Result.Content.ReadAsAsync<Token>();
                    resposneResult.Wait();
                    return resposneResult.Result;
                }
                else
                {
                    return null;
                }
            }
        }
    }
}
