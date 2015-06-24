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
        public PrivateKeySSHSocketHandler(String hostName, String userName, String privateKey, String passPhrase, String port, String columns, String rows, String accessToken)
        {
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

            TerminalAuthorization authorization = new TerminalAuthorization();
            authorization.AuthorizationType = AuthorizationType.PrivateKey;
            authorization.Identity = privateKeyFile;
            authorization.HostName = hostName;
            authorization.UserName = userName;
            authorization.Port = int.Parse(port);
            SSHSessionRepository.Instance().TerminalAuthorizations.Add(accessToken, authorization);

            sshClient = new SshClient(hostName, int.Parse(port), userName, privateKeyFile);
            sshClient.Connect();

            stream = sshClient.CreateShellStream("xterm", uint.Parse(columns), uint.Parse(rows), 800, 600, 1024);
            stream.DataReceived += ChatSocketHandler_DataReceived;
        }
    }
}