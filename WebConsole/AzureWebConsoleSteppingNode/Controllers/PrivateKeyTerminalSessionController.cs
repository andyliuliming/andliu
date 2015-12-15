﻿using AzureManagementLib;
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
    public class PrivateKeyTerminalSessionController : TokenValidationApiController
    {
        public async Task<HttpResponseMessage> Get(String hostName, String userName, String privateKey, String passPhrase, int port, uint columns, uint rows, String accessToken)
        {
            if (HttpContext.Current.IsWebSocketRequest)
            {
                try { 
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

                SSHSessionRepository.Instance().TerminalAuthorizations[result.ClaimsPrincipal.Identity.Name] = handler.SshClient;

                handler.Connect();
                HttpContext.Current.AcceptWebSocketRequest(handler);
                }
                catch (Exception e)
                {
                    Trace.TraceError(e.ToString());
                }
            }
            return new HttpResponseMessage(HttpStatusCode.SwitchingProtocols);
        }
    }
}