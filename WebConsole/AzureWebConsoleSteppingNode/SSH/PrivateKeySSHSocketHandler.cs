using AzureManagementLib;
using AzureWebConsoleDomain;
using Microsoft.Web.WebSockets;
using Renci.SshNet;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Web;

namespace WebConsoleSteppingNode.SSH
{
    public class PrivateKeySSHSocketHandler : AbstractSSHSocketHandler
    {
        AzureWebConsoleModelContainer db = new AzureWebConsoleModelContainer();
        public PrivateKeySSHSocketHandler(String hostName, String userName, PrivateKeyFile privateKey, int port, uint columns, uint rows, String accessToken)
        {
            //byte[] privateKeyByteArray = Convert.FromBase64String(privateKey);
            //MemoryStream privateKeyStream = new MemoryStream(privateKeyByteArray);
            //privateKeyStream.Position = 0;
            //PrivateKeyFile privateKeyFile = null;
            //if (string.IsNullOrEmpty(passPhrase))
            //{
            //    privateKeyFile = new PrivateKeyFile(privateKeyStream);
            //}
            //else
            //{
            //    privateKeyFile = new PrivateKeyFile(privateKeyStream, passPhrase);
            //}

            //TerminalAuthorization authorization = new TerminalAuthorization();
            //authorization.AuthorizationType = AuthorizationType.PrivateKey;
            //authorization.Identity = privateKey;
            //authorization.HostName = hostName;
            //authorization.UserName = userName;
            //authorization.Port = (port);
            //SSHSessionRepository.Instance().TerminalAuthorizations.Add(accessToken, authorization);

            SshClient = new SshClient(hostName, (port), userName, privateKey);

            SshClient.KeepAliveInterval = new TimeSpan(0, 1, 0); 
        }
    }
}