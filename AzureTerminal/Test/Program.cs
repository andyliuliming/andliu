using AzureManagementLib;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
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

            string code = "AAABAAAAiL9Kn2Z27UubvWFPbm0gLbGa4hECKuSwB4eIHwYflb36TTu2jpnMoNyzYDNH5xCGTVKx7oUSseBFVfhup-CZlsiBBnta7T4HIOlelptjuuN69i0DTDhcqDtOaLxOcbNZVHQMkIdFgs5W9vDoBrxqqUw9-oRWAt8PtqnrG7-Gg-iVkwjLsQqaYlkECtdVtx_YRKAfBaDAbLVZgZPNbpIZFmnB3DIMdQKWSdDgjNxeCrGkn3l1z1pLryUYbtkOYwXPII4Z6pdjEjrcy2W6LSuLj1Mt5Xfxlf6_UTeJWsevQuNaUBY-WCF30Y3hG380WVK4cmhj-7tTijzngW7eQ9sV1RNo9Az0F0GFUuPgnXdXU4wJFxCS9uMvsLZPvjfYxO6mV1edaUCQAUQs0dxCtcag2F1WD98xGKFf7Rt3ZL4A7DBg8UwwRmhpo-7z2Xz8kBLjF2iZFxaAaPvEKJrWTeIkV97q4CoJYEWkHP79tbsyCvCmI-AUbMITLdcMxEobYNQDBcOT-eJXtn48gB58u9LPFOEvZTYg5_tcRhXcccjqJlV3fEaOQigjPxAbSi3CKIpNdtCUevTOoC8Mkq8rwrO7ZPJ_UOlu7RMERlWhXK_0Iw3JM1Gv9zBuE9lyJW-evQ3tIAA";
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
                            new KeyValuePair<string,string>("redirect_uri","https://azureterminal.cloudapp.net/html/index.html"),
                            new KeyValuePair<string,string>("client_id","2d0642ea-80ea-4713-9910-5b7eee904dc1"),
                            new KeyValuePair<string,string>("resource","https://management.core.windows.net/"),
                            //two is 
                             new KeyValuePair<string,string>("client_secret","PolKyZpB2SHuYIYLNgOLsKCuVSJXOaQeSl7CjwhVOCc="),
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
