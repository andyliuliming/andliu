using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace AzureWebConsole.Controllers
{
    public class WindowsRDPController : ApiController
    {
        [HttpGet]
        public async Task<HttpResponseMessage> Get([FromUri]string subscriptionId,[FromUri] string cloudServiceName,[FromUri] string deploymentName,[FromUri]string roleInstanceName,[FromUri] string accessToken)
        {
            HttpResponseMessage message = new HttpResponseMessage();
            // not found in the cache.
            // "https://management.core.windows.net/<subscription-id>/services/hostedservices/<cloudservice-name>/deployments/<deployment-name>/roleinstances/<roleinstance-name>/ModelFile?FileType=RDP";
            string format = "/{0}/services/hostedservices/{1}/deployments/{2}/roleinstances/{3}/ModelFile?FileType=RDP";
            string finalUri = string.Format(format, subscriptionId, cloudServiceName, deploymentName, roleInstanceName);

            //string imageRelativePath = GetImageRelativePath(imageName);
            //// get the image from the address
            // IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("access_token");
            // string accessToken = accessTokens.FirstOrDefault();
            using (HttpClient client = new HttpClient())
            {
                client.Timeout = new TimeSpan(0, 2, 0);
                client.BaseAddress = new Uri("https://management.core.windows.net");
                client.DefaultRequestHeaders.Add("Authorization", "Bearer " + accessToken);
                client.DefaultRequestHeaders.Add("x-ms-version", "2012-03-01");
                using (HttpResponseMessage responseMessage = await client.GetAsync(finalUri))
                {
                    byte[] imageInCacheByteArray = await responseMessage.Content.ReadAsByteArrayAsync();

                    message.Content = new StreamContent(new MemoryStream(imageInCacheByteArray));
                    message.Content.Headers.ContentType = new MediaTypeHeaderValue("application/rdp");

                    message.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
                    {
                        FileName = "rdp.rdp"
                    };
                }
            }
            return message;
        }
    }
}