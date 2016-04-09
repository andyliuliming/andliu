using StarDustCommon.Util;
using Macrodeek.AzureEnvironment;
using Macrodeek.StarDustModel;
using Macrodeek.StarDustModel.WrapUp;
using Macrodeek.StarDustServiceBase;
using Macrodeek.MacrodeekCommon;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace Macrodeek.StarDustDaemonWorkRole.Monitoring
{
    public class RestApiCaller<T> where T:class
    {
        private string baseUrl;
        public RestApiCaller(string baseUrl)
        {
            this.baseUrl = baseUrl;
        }

        public T CallApi(string method, string accessToken , string urlParameters,T body)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(this.baseUrl);

            // Add an Accept header for JSON format.
            client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));
            HttpResponseMessage response = null;
            T result = null;
            switch (method.ToLower())
            {
                case "get":
                    if (!string.IsNullOrEmpty(accessToken)) {
                        client.DefaultRequestHeaders.Add(AuthorizeUtil.TokenHeaderName,accessToken);
                    }
                    response = client.GetAsync(urlParameters).Result;
                    return null;
                case "post":
                    if (!string.IsNullOrEmpty(accessToken))
                    {
                        client.DefaultRequestHeaders.Add(AuthorizeUtil.TokenHeaderName, accessToken);
                    }
                    response = client.PostAsJsonAsync<T>(urlParameters, body).Result;
                    result = response.Content.ReadAsAsync<T>().Result;
                    return result;
                default:
                    throw new NotImplementedException();
            }
        }

        public T Post(string urlParameters, string accessToken,T body)
        {
            return this.CallApi("Post", accessToken, urlParameters, body);
        }

        public T Get(string urlParameters, string accessToken)
        {
            return this.CallApi("Get", accessToken, urlParameters, null);
        }
    }

    public class Signer
    {
        public static UserToken SignIn(string cellPhone,string password)
        {
            UserToken userToken = new UserToken();
            userToken.Cellphone = cellPhone;
            userToken.Password = password;
            string baseUrl = AppSettingsProvider.GetSetting(FieldNameUtil.GetMemberName((AzureSettingsNames c) => c.StarDustProductServiceAddress));
            RestApiCaller<UserToken> restApiCaller = new RestApiCaller<UserToken>(baseUrl);
            UserToken result = restApiCaller.Post("/odata/UserTokens", null, userToken);
            return result;
        }
    }

    public class MonitoringWorker : IWorker
    {
        public void DoIt()
        {
            string monitoringAccount= AppSettingsProvider.GetSetting(FieldNameUtil.GetMemberName((AzureSettingsNames c) => c.MonitoringAccount));
            string monitoringPassword= AppSettingsProvider.GetSetting(FieldNameUtil.GetMemberName((AzureSettingsNames c) => c.MonitoringPassword));
            UserToken token = Signer.SignIn(monitoringAccount, monitoringPassword);

            string baseUrl = AppSettingsProvider.GetSetting(FieldNameUtil.GetMemberName((AzureSettingsNames c) => c.StarDustProductServiceAddress));


            RestApiCaller<string> warmersCaller = new RestApiCaller<string>(baseUrl);
            warmersCaller.Get("/odata/Warmers", token.Token);

        }
    }
}
