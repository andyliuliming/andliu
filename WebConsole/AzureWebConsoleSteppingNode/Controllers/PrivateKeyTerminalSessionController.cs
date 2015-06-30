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
using WebConsoleSteppingNode.Controllers;
using WebConsoleSteppingNode.SSH;

namespace AzureTerminalWebConsole.Controllers
{
    public class PrivateKeyTerminalSessionController : TokenValidationApiController
    {
        public async Task<HttpResponseMessage> Get(String hostName, String userName, String privateKey, String passPhrase, int port, uint columns, uint rows, String accessToken)
        {
            if (HttpContext.Current.IsWebSocketRequest)
            {
                // validate the token here :)

                await this.ValidateToken(accessToken);

                byte[] privateKeyByteArray = Convert.FromBase64String(privateKey);
                MemoryStream privateKeyStream = new MemoryStream(privateKeyByteArray);
                privateKeyStream.Position = 0;
                PrivateKeyFile privateKeyFile = null;
                if (string.IsNullOrEmpty(passPhrase))
                {
                    privateKeyFile = new PrivateKeyFile(privateKeyStream);
                }
                else
                {
                    privateKeyFile = new PrivateKeyFile(privateKeyStream, passPhrase);
                }

                PrivateKeySSHSocketHandler handler = new PrivateKeySSHSocketHandler(hostName, userName, privateKeyFile, port, columns, rows, accessToken);
                handler.Connect();
                HttpContext.Current.AcceptWebSocketRequest(handler);
            }
            return new HttpResponseMessage(HttpStatusCode.SwitchingProtocols);
        }

      
    }
}