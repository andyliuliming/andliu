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
                            new KeyValuePair<string,string>("redirect_uri","https://azureterminal.cloudapp.net/html/index.html"),
                            new KeyValuePair<string,string>("client_id","2d0642ea-80ea-4713-9910-5b7eee904dc1"),
                            new KeyValuePair<string,string>("resource","https://management.core.windows.net/"),
                            //two is 
                             new KeyValuePair<string,string>("client_secret","PolKyZpB2SHuYIYLNgOLsKCuVSJXOaQeSl7CjwhVOCc="),
                        });
                Task<HttpResponseMessage> response = client.PostAsync("/common/oauth2/token?api-version=1.0", content);

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
