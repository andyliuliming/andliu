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
using System.Web;
using System.Web.Http;
using WebConsoleSteppingNode.SSH;

namespace AzureTerminalWebConsole.Controllers
{
    public class AccessTokenTerminalSessionController : ApiController
    {
        public HttpResponseMessage Get(String hostName, String userName, String deploymentName, String virtualMachineName, String subscriptionId, String port, String accessToken, String columns, String rows)
        {
            if (HttpContext.Current.IsWebSocketRequest)
            {
                HttpContext.Current.AcceptWebSocketRequest(new AccessTokenSSHSocketHander(hostName, userName, deploymentName, virtualMachineName, subscriptionId, port, accessToken, columns, rows));
            }
            return new HttpResponseMessage(HttpStatusCode.SwitchingProtocols);
        }

       
    }
}