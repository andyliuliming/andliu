using AzureManagementLib;
using Renci.SshNet;
using Renci.SshNet.Security;
using System;
using System.Collections.Generic;
using System.IO;
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
            //String stream = null;
            //        MemoryStream privateKey = new MemoryStream();
            //        MemoryStream publicKey = new MemoryStream();
            //        KeyUtil keyUtil = new KeyUtil();
            //        keyUtil.GeneratePublicKey(privateKey, publicKey, null);
            //        privateKey.Position = 0;
            //        PrivateKeyFile pkf = new PrivateKeyFile(privateKey);

            //        AzureVirtualMachineUtil vmUtil = new AzureVirtualMachineUtil();
            //        //vmUtil.SetPublicKey(string serviceName,string deploymentName,string virtualMachineName,string subscriptionId,string accessToken)
            //        vmUtil.SetPublicKey(publicKey, null,null,null,null,null,null);
            //         publicKey.Position = 0;
            //using (StreamReader reader = new StreamReader(publicKey, Encoding.UTF8))
            //{
            //    string xx= reader.ReadToEnd();
            //}

            string code = "AAABAAAAiL9Kn2Z27UubvWFPbm0gLSuGrEaqcTSa_KhnQMkDUPPwxn6c3FafAu_poWq_UXvf6l-IJ5JvQl7FhpN_awecuZgkzbyuZtEeHV6009bfDPtNRqtO3OtQ9nWHzJViRMjaVERpNF2llRPdDDgNc8nv4VERaauKZnlnnz2u3-sq-u8xkgNFjEo9_pEK1h3aJWqK0H1h8pH2Fi8eqn1roMcBg9-5LL2MyRgRjirGDd1Oheh4BLMHzZQC5CKs04Y7FC0VorFNfCiYnUqg9KEoXyYxYPO6stC9sEMe5WgLurxxItfIbjl0QwAW76jEk5ZKIj-lfGTWSQu0XJvqmd68XUK84JxV2tAjscavPx45r8jaH9v9PqNiXr8E5ROJl_C9oIbCJ1Q-pEpG8p-O00clnefSM9oIf_CAbyvN4qHesRT9K8HLGxeA1CcWrd7_4dy0b6egHmy00XEoTOYdi3OXjoD6VVW9Ld1V5HfGIHaKqjO8N3gL6gBaDIHajyqrI4pAI1fH2ay4EHq54DoiHtB-4gbsFaT7c_gaerTfau7mdE6qbpsdPGYLpLc8p-XKu-q5ifrMMlQ75FzcjnTuAenEOlpySyAA";
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
                            new KeyValuePair<string,string>("redirect_uri","https://localhost:63808/index.html"),
                            new KeyValuePair<string,string>("client_id","e5740bbf-07d0-4e4c-b174-94ff7d6adbcd"),
                            new KeyValuePair<string,string>("resource","https://management.core.windows.net/"),
                            //two is 
                             new KeyValuePair<string,string>("client_secret","pBfi+eJ1AAh+aZzz7Q/JO6+t2jHzsZxpCrWohc1T3i8="),
                        });
                Task<HttpResponseMessage> response = client.PostAsync("/common/oauth2/token", content);

                if (response.Result.IsSuccessStatusCode)
                {
                    response.Wait();
                    Task<Token> resposneResult = response.Result.Content.ReadAsAsync<Token>();
                    resposneResult.Wait();
                    AzureSubscriptionUtil subUtil=new AzureSubscriptionUtil();
                    List<AzureTerminalWebConsole.Model.AzureSubscription>subscriptions = subUtil.GetSubscriptions(resposneResult.Result.access_token);
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
