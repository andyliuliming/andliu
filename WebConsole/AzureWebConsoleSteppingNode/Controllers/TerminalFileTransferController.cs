using AzureManagementLib;
using Microsoft.Web.WebSockets;
using Renci.SshNet;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using WebConsoleSteppingNode.Controllers;
using WebConsoleSteppingNode.SSH;

namespace AzureTerminalWebConsole.Controllers
{
    public class TerminalFileTransferController : TokenValidationApiController
    {

        [HttpGet]
        public async Task<HttpResponseMessage> Get([FromUri]string filePath)
        {
            IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("Authorization");

            // TODO verify the access token and then get the principal.
            string accessToken = accessTokens.FirstOrDefault();
            if (accessToken != null)
            {
                TokenValidationResult result = await this.ValidateToken(accessToken);

                TerminalAuthorization authorization = SSHSessionRepository.Instance().TerminalAuthorizations[result.ClaimsPrincipal.Identity.Name];
                ScpClient scpClient = null;
                switch (authorization.AuthorizationType)
                {
                    case AuthorizationType.Password:
                        scpClient = new ScpClient(authorization.HostName, authorization.Port, authorization.UserName, (string)authorization.Identity);
                        break;
                    case AuthorizationType.PrivateKey:
                        PrivateKeyFile privateKeyFile = authorization.Identity as PrivateKeyFile;
                        scpClient = new ScpClient(authorization.HostName, authorization.Port, authorization.UserName, privateKeyFile);
                        break;
                    case AuthorizationType.AccessToken:
                        PrivateKeyFile privateKeyFile2 = authorization.Identity as PrivateKeyFile;
                        scpClient = new ScpClient(authorization.HostName, authorization.Port, authorization.UserName, privateKeyFile2);
                        break;
                    default:
                        break;
                }
                Task<Stream> task = this.Request.Content.ReadAsStreamAsync();
                task.Wait();
                scpClient.Connect();

                HttpResponseMessage message = new HttpResponseMessage();

                MemoryStream memoryStream = new MemoryStream();
                message.Content = new StreamContent(memoryStream);
                message.Content.Headers.ContentType = new MediaTypeHeaderValue("application/rdp");

                message.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
                {
                    FileName = "filecopied"
                };

                scpClient.Download(filePath, memoryStream);

                scpClient.Disconnect();

                return message;

                //scpClient.Upload(postedFile.InputStream, targetPath);
            }
            return null;
        }

        public string Post(string targetPath)
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
                            scpClient = new ScpClient(authorization.HostName, authorization.Port, authorization.UserName, (string)authorization.Identity);
                            break;
                        case AuthorizationType.PrivateKey:
                            PrivateKeyFile privateKeyFile = authorization.Identity as PrivateKeyFile;
                            scpClient = new ScpClient(authorization.HostName, authorization.Port, authorization.UserName, privateKeyFile);
                            break;
                        case AuthorizationType.AccessToken:
                            PrivateKeyFile privateKeyFile2 = authorization.Identity as PrivateKeyFile;
                            scpClient = new ScpClient(authorization.HostName, authorization.Port, authorization.UserName, privateKeyFile2);
                            break;
                        default:
                            break;
                    }
                    Task<Stream> task = this.Request.Content.ReadAsStreamAsync();
                    task.Wait();
                    scpClient.Connect();
                    scpClient.Upload(postedFile.InputStream, targetPath);
                    scpClient.Disconnect();
                }
            }
            // get the access token from the request.
            // read as the multi form data.

            return "success";
        }
    }
}