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
        public async Task<HttpResponseMessage> Get(String hostName, String userName, String privateKey, String passPhrase, String port, String columns, String rows, String accessToken)
        {
            if (HttpContext.Current.IsWebSocketRequest)
            {
                // validate the token here :)

                await this.ValidateToken(accessToken);

                PrivateKeySSHSocketHandler handler = new PrivateKeySSHSocketHandler(hostName, userName, privateKey, passPhrase, port, columns, rows, accessToken);
                handler.Connect();
                HttpContext.Current.AcceptWebSocketRequest(handler);
            }
            return new HttpResponseMessage(HttpStatusCode.SwitchingProtocols);
        }

      
    }
}