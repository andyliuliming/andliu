using Microsoft.Web.WebSockets;
using Renci.SshNet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Web;

namespace WebConsoleSteppingNode.SSH
{
    public class PasswordSSHSocketHandler : AbstractSSHSocketHandler
    {
        public PasswordSSHSocketHandler(String hostName, String userName, String passWord, String port, String columns, String rows, String accessToken)
        {
            TerminalAuthorization authorization = new TerminalAuthorization();
            authorization.AuthorizationType = AuthorizationType.Password;
            authorization.Identity = accessToken;

            SSHSessionRepository.Instance().TerminalAuthorizations[accessToken] = authorization;

            sshClient = new SshClient(hostName, int.Parse(port), userName, passWord);
            sshClient.Connect();

            stream = sshClient.CreateShellStream("xterm", uint.Parse(columns), uint.Parse(rows), 800, 600, 1024);
            stream.DataReceived += ChatSocketHandler_DataReceived;
        }
    }

}