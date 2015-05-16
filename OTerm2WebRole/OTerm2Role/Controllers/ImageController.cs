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
using System.Threading.Tasks;
using System.Web.Http;

namespace OTerm2Role.Controllers
{
    public class ImageController : ApiController
    {
        [HttpGet]
        public async Task<HttpResponseMessage> Get([FromUri]string imageName)
        {
            return null;// await ImageCache.GetImage(imageName, AppSettingsProvider.GetSetting(ImageStorageBaseAddress), GetImageRelativePath);
        }
    }
}
