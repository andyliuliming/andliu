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
        public async Task<HttpResponseMessage> Get([FromUri]string filePath,[FromUri]string accessToken)
        {
            if (accessToken != null)
            {
                TokenValidationResult result = await this.ValidateToken(accessToken);

                SshClient authorization = SSHSessionRepository.Instance().TerminalAuthorizations[result.ClaimsPrincipal.Identity.Name];
                Task<Stream> task = this.Request.Content.ReadAsStreamAsync();
                task.Wait();
                ScpClient scpClient = new ScpClient(
                authorization.ConnectionInfo);
                scpClient.Connect();

                HttpResponseMessage message = new HttpResponseMessage();

                MemoryStream memoryStream = new MemoryStream();
                message.Content = new StreamContent(memoryStream);

                message.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
                {
                    FileName = filePath
                };

                scpClient.Download(filePath, memoryStream);
                memoryStream.Position = 0;
                scpClient.Disconnect();

                return message;
            }
            return null;
        }

        public async Task<string> Post(string targetPath)
        {
            var files = HttpContext.Current.Request.Files;

            foreach (string file in files)
            {
                var postedFile = files[file];

                IEnumerable<string> accessTokens = this.ActionContext.Request.Headers.GetValues("Authorization");
                string accessToken = accessTokens.FirstOrDefault();
                if (accessToken != null)
                {
                    TokenValidationResult result = await this.ValidateToken(accessToken);

                    SshClient authorization = SSHSessionRepository.Instance().TerminalAuthorizations[result.ClaimsPrincipal.Identity.Name];

                    try
                    {
                        SshCommand command = authorization.RunCommand("pwd");
                        string currentFolder = command.Result;                        
                        ScpClient scpClient = new ScpClient(authorization.ConnectionInfo);
                        scpClient.Connect();
                        scpClient.Upload(postedFile.InputStream, currentFolder.Trim() + "/" + targetPath);
                        scpClient.Disconnect();
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine(e);
                    }
                }
            }
            // get the access token from the request.
            // read as the multi form data.

            return "success";
        }
    }
}