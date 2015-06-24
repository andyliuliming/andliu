using AzureManagementLib;
using Microsoft.Web.WebSockets;
using Renci.SshNet;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using WebConsoleSteppingNode.SSH;

namespace AzureTerminalWebConsole.Controllers
{
    public class TerminalFileController : ApiController
    {

        [HttpGet]
        public async Task<HttpResponseMessage> Get([FromUri]string imageName)
        {
            IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("access_token");
            string accessToken = accessTokens.FirstOrDefault();
            if (accessToken != null)
            {
            }
            return null;
        }
        public Task<HttpResponseMessage> Post()
        {
            var files = HttpContext.Current.Request.Files;

            foreach (string file in files)
            {
                var postedFile = files[file];

                IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("access_token");
                string accessToken = accessTokens.FirstOrDefault();
                if (accessToken != null)
                {
                    TerminalAuthorization authorization = SSHSessionRepository.Instance().TerminalAuthorizations[accessToken];
                    ScpClient scpClient = null;
                    switch (authorization.AuthorizationType)
                    {
                        case AuthorizationType.Password:
                            //scpClient = new ScpClient("", "", "");
                            break;
                        case AuthorizationType.PrivateKey:
                            //PrivateKeyFile privateKeyFile = authorization.Identity as PrivateKeyFile;
                            //scpClient = new ScpClient("", "", privateKeyFile);
                            break;
                        case AuthorizationType.AccessToken:
                            //PrivateKeyFile privateKeyFile2 = authorization.Identity as PrivateKeyFile;
                            //scpClient = new ScpClient("", "", privateKeyFile2);
                            break;
                        default:
                            break;
                    }
                    Task<Stream> task = this.Request.Content.ReadAsStreamAsync();
                    task.Wait();
                    scpClient.Upload(postedFile.InputStream, "/ path of the destination");
                }
            }
            // get the access token from the request.
            // read as the multi form data.
            

            return null;
        }
    }
}