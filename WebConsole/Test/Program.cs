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

            string code = "AAABAAAAiL9Kn2Z27UubvWFPbm0gLQFF8DKVl4w-jWZEJo2kxacUWFkTWbA_wxo5zE3QxKM28RmbOY5U9M7Y_3pa-GkuVwb83qM2aQfpx78C-Gk6wfbGSEYvPcDguHxIDQ78l5wbiDF58cKCRmAMdrCQfq1WGBovzo1kuE0Jm2x-mq9bfI_phuW9sQoyt97rMdwcZdwA4hi_d4JI1vnbWgN3hq4OB_CK-FzwLIaUC4rrpRWk0ktjGkmNpI4dVvOOWutjE_4oPViYkAweKQ6D7pRI0fscE-ypMp9X-Lmw9WMMbe4yb6SuQS-BMMC96MxOKHQkHxMAhvPmVRScUj4W2SPyvdPKiqXiKMZa3QAURCEquUQgjjawp40i_dFGzJp2pLh8HZliC-WtD1HerbNFwOkonAB5ekU7Jf7z7YH0SHRZeISNEVec4oARSVdC6O3HcWEaZJsDTlFbI--X9EAWiopA0FppAGXID_TD8fR90kXPE5SsszkjxQiJ2ypj-zC6olN6RgRUw3zk7VwfZ7IJr_CAPtBHCAUR-Qc0dOnwSc0vYATJganPZlFbkyFHjMEzC0XpZG4fhFs2RrT-tB1MN5ZicCjm8SAA";
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
                            new KeyValuePair<string,string>("redirect_uri","http://localhost:63808/index.html"),
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
