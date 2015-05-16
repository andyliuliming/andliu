using Microsoft.WindowsAzure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.OutputCache.V2;

namespace OTerm2Role.Controllers
{
    public class FilesController : ApiController
    {
        [HttpGet]
        //[CacheOutput(ClientTimeSpan = 100, ServerTimeSpan = 100, NoCache = true)]
        public async Task<HttpResponseMessage> Get([FromUri]string fileName)
        {
            using (HttpClient client = new HttpClient())
            {
                client.Timeout = new TimeSpan(0, 5, 0);
                client.BaseAddress = new Uri("https://andliu.blob.core.windows.net");
                using (HttpResponseMessage responseMessage = await client.GetAsync("term/" + fileName))
                {
                    byte[] imageInCacheByteArray = await responseMessage.Content.ReadAsByteArrayAsync();
                    HttpResponseMessage response2 = new HttpResponseMessage(HttpStatusCode.OK);
                    response2.Content = new StreamContent(new MemoryStream(imageInCacheByteArray));
                    response2.Content.Headers.ContentType = new MediaTypeHeaderValue("application/java-archive");
                    response2.Headers.CacheControl =  new CacheControlHeaderValue();
                    response2.Headers.CacheControl.MaxAge = new TimeSpan(0, 10, 0);  // 10 min. or 600 sec.
                    response2.Headers.CacheControl.Public = true;
                    return response2;
                }
            }
        }
    }
}
