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
    public class AccessTokenTerminalSessionController : TokenValidationApiController
    {
        public async Task<HttpResponseMessage> Get(String hostName, String userName, String deploymentName, String virtualMachineName, String subscriptionId, String port, String accessToken, String columns, String rows)
        {
            if (HttpContext.Current.IsWebSocketRequest)
            {
                // validate the token here :)

                await this.ValidateToken(accessToken);

                AccessTokenSSHSocketHander handler = new AccessTokenSSHSocketHander(hostName, userName, deploymentName, virtualMachineName, subscriptionId, port, accessToken, columns, rows);
                handler.Connect();
                HttpContext.Current.AcceptWebSocketRequest(handler);
            }
            return new HttpResponseMessage(HttpStatusCode.SwitchingProtocols);
        }

       
    }
}