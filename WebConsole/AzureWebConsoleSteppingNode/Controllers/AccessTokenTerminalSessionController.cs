using AzureManagementLib;
using AzureWebConsoleDomain;
using Microsoft.Web.WebSockets;
using Renci.SshNet;
using System;
using System.Collections.Generic;
using System.Diagnostics;
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
            try
            {
                if (HttpContext.Current.IsWebSocketRequest)
                {
                    TokenValidationResult result = await this.ValidateToken(accessToken);

                    string customer = result.ClaimsPrincipal.Identity.Name;

                    AzureVirtualMachine existedVirtualMachine
                        = db.AzureVirtualMachines.Where(avm => avm.HostServiceName == hostName && avm.Port == (port)
                        && avm.Owner == result.ClaimsPrincipal.Identity.Name).FirstOrDefault();
                    if (existedVirtualMachine != null)
                    {
                        existedVirtualMachine.UserName = userName;
                    }
                    else
                    {
                        AzureVirtualMachine azureVirtualMachine = new AzureVirtualMachine();
                        azureVirtualMachine.HostServiceName = hostName;
                        azureVirtualMachine.Port = port;
                        azureVirtualMachine.UserName = userName;
                        azureVirtualMachine.Owner = customer;
                        db.AzureVirtualMachines.Add(azureVirtualMachine);
                    }
                    db.SaveChanges();

                    MemoryStream privateKey = new MemoryStream();
                    MemoryStream publicKey = new MemoryStream();
                    KeyUtil keyUtil = new KeyUtil();
                    keyUtil.GeneratePublicKey(privateKey, publicKey, null);
                    privateKey.Position = 0;
                    publicKey.Position = 0;
                    PrivateKeyFile pkf = new PrivateKeyFile(privateKey);

                    AzureVirtualMachineUtil vmUtil = new AzureVirtualMachineUtil();

                    vmUtil.SetPublicKey(publicKey, hostName, userName, deploymentName, virtualMachineName, subscriptionId, accessToken);

                    PrivateKeySSHSocketHandler handler = new PrivateKeySSHSocketHandler(hostName, userName, pkf, port, columns, rows, accessToken);

                    SSHSessionRepository.Instance().TerminalAuthorizations[result.ClaimsPrincipal.Identity.Name] = handler.SshClient;

                    handler.Connect();
                    HttpContext.Current.AcceptWebSocketRequest(handler);
                }
                return new HttpResponseMessage(HttpStatusCode.SwitchingProtocols);
            }
            catch (Exception e)
            {
                Trace.TraceError(e.ToString());
                throw e;
            }
        }
    }
}