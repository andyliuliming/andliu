using AzureManagementLib;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            string code = "AAABAAAAiL9Kn2Z27UubvWFPbm0gLdIkaK0GTvWEF-13ihPh8ApSZYKShDu3yf4hlIv0tbUprvj3mGcgw40sH2oU_goSQp9s8XIEOQP9kMb7Tu4doaM4uJuiRoKaucHHsv_rgkGI6WbaYtysAIZ4TLvpHCEcCI-MN92cDLjSLg4HqB4phZF0BGEEo7YhpaCAGCq0fVwFoMvthjVSNKxTAB-F0hiGJeI6TWDllQpIAugyD8XI_8m_543K-NFDlf8do6AjaIr6m_Tfo_DJD82xb7kBy9mhAgGrBCLN58FDOi4LRcJAfyLrgueaEXid9AcgotQHDFHfhaQkPsmhBRqv92BhaRYlARztUbuC5Szuk4EIrC4LIOf16u1QZWPHQxpOYcNLosvzYP7Ww5ChL7qA2xkBBg8DzarlgTNnOcvRrk5J3XXaE8BI7WibGN78rzBUfUaAt7FcTf1RqTLQjoKTAJ1mZ9ZFu79WwI_VMgsdurnD-kWLw4iMF01OLD34HoDsK2Q3fC_aS0dEy3aKC7V-iJ0Wl6vJYQDzFDqq8dkvCfbkg3XMSwLP68WjfysgUWRGrDIgaEtLHwiV2zMV_-Gcot4l2L8oIeTzzbn9TJxJuFzjYilBjMop9ipAdljq8yNw8PbnwUT-IAA";
            using (var client = new HttpClient())
            {
                //https://login.microsoftonline.com/common/oauth2/authorize?resource=https%3A%2F%2Fmanagement.core.windows.net%2F&client_id=0c46e28c-e8cb-490d-bd4f-21626b6601f6&response_type=code&redirect_uri=https%3A%2F%2Fazureterminal.cloudapp.net%2Findex.html

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
                    SubscriptionUtil subUtil=new SubscriptionUtil();
                    List<AzureTerminalWebConsole.Model.Subscription>subscriptions = subUtil.GetSubscriptions(resposneResult.Result.access_token);
                    AzureVirtualMachineUtil util = new AzureVirtualMachineUtil();
                    util.FindAllMachines(subscriptions[0].SubscriptionId, resposneResult.Result.access_token);
                    //return Ok<IEnumerable<Token>>(new Token[] { resposneResult.Result });
                }
                else
                {
                    HttpContent errorContent = response.Result.Content;
                    Task<string> errorStringTask = errorContent.ReadAsStringAsync();
                    errorStringTask.Wait();
                    string errorResult = errorStringTask.Result;
                }
            }

            //AuthenticationResult result = null;

            //var context = new AuthenticationContext("https://login.windows.net/000ff064-9dc3-480a-9517-2b7b8519df17");

            //var thread = new Thread(() =>
            //{
            //    result = context.AcquireToken(
            //      "https://management.core.windows.net/",
            //      "0c46e28c-e8cb-490d-bd4f-21626b6601f6",
            //      new Uri("https://azureterminal.cloudapp.net/index.html"));
            //});

            //thread.SetApartmentState(ApartmentState.STA);
            //thread.Name = "AquireTokenThread";
            //thread.Start();
            //thread.Join();

            //if (result == null)
            //{
            //    throw new InvalidOperationException("Failed to obtain the JWT token");
            //}

            //string token = result.AccessToken;
            //return token;
        }
    }
}
