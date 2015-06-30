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
        public async Task<HttpResponseMessage> Get(String hostName, String userName, String deploymentName, String virtualMachineName, String subscriptionId, int port, uint columns, uint rows, String accessToken)
        {
            if (HttpContext.Current.IsWebSocketRequest)
            {
                // validate the token here :)

                await this.ValidateToken(accessToken);


                MemoryStream privateKey = new MemoryStream();
                MemoryStream publicKey = new MemoryStream();
                KeyUtil keyUtil = new KeyUtil();
                keyUtil.GeneratePublicKey(privateKey, publicKey, null);
                privateKey.Position = 0;
                publicKey.Position = 0;
                PrivateKeyFile pkf = new PrivateKeyFile(privateKey);

                TerminalAuthorization authorization = new TerminalAuthorization();
                authorization.AuthorizationType = AuthorizationType.AccessToken;
                authorization.Identity = accessToken;
                authorization.HostName = hostName;
                authorization.UserName = userName;
                authorization.Port = (port);
                SSHSessionRepository.Instance().TerminalAuthorizations.Add(accessToken, authorization);

                AzureVirtualMachineUtil vmUtil = new AzureVirtualMachineUtil();

                vmUtil.SetPublicKey(publicKey, hostName, userName, deploymentName, virtualMachineName, subscriptionId, accessToken);

                PrivateKeySSHSocketHandler handler = new PrivateKeySSHSocketHandler(hostName, userName, pkf, port, columns, rows, accessToken);
                handler.Connect();
                HttpContext.Current.AcceptWebSocketRequest(handler);
            }
            return new HttpResponseMessage(HttpStatusCode.SwitchingProtocols);
        }

       
    }
}