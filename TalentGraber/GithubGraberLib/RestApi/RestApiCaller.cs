using GithubGraberLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace ExtractBase.RestApi
{
    public class HttpException : Exception
    {
        private HttpStatusCode statusCode = 0;
        private string msg = null;
        public HttpException(HttpStatusCode statusCode, string msg)
        {
            this.statusCode = statusCode;
            this.msg = msg;
        }
    }
    public class RestApiCaller<T> where T : class
    {
        private string baseUrl;
        public RestApiCaller(string baseUrl)
        {
            this.baseUrl = baseUrl;
        }

        public T CallApi(string method, string accessToken, string urlParameters, T body)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(this.baseUrl);

            if (!string.IsNullOrEmpty(accessToken))
            {
                client.DefaultRequestHeaders.Add(AuthorizeUtil.TokenHeaderName, "Basic " + accessToken);
            }
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36");

            // Add an Accept header for JSON format.
            HttpResponseMessage response = null;
            T result = null;
            switch (method.ToLower())
            {
                case "get":
                    response = client.GetAsync(urlParameters).Result;
                    if (response.StatusCode == HttpStatusCode.Accepted
                        || response.StatusCode == HttpStatusCode.OK)
                    {
                        result = response.Content.ReadAsAsync<T>().Result;
                        return result;
                    }
                    else
                    {
                        throw new HttpException(response.StatusCode, null);
                    }
                case "post":
                    if (!string.IsNullOrEmpty(accessToken))
                    {
                        client.DefaultRequestHeaders.Add(AuthorizeUtil.TokenHeaderName, accessToken);
                    }
                    response = client.PostAsJsonAsync<T>(urlParameters, body).Result;
                    if (response.StatusCode == HttpStatusCode.Accepted
                        || response.StatusCode == HttpStatusCode.OK)
                    {
                        result = response.Content.ReadAsAsync<T>().Result;
                        return result;
                    }
                    else
                    {
                        throw new HttpException(response.StatusCode, null);
                    }
                default:
                    throw new NotImplementedException();
            }
        }

        public T Post(string urlParameters, string accessToken, T body)
        {
            return this.CallApi("Post", accessToken, urlParameters, body);
        }

        public T Get(string urlParameters, string accessToken)
        {
            return this.CallApi("Get", accessToken, urlParameters, null);
        }
    }
}
