using AzureManagementLib;
using Microsoft.Web.WebSockets;
using Renci.SshNet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace WebConsoleSteppingNode.SSH
{
    public class PasswordSSHSocketHandler : AbstractSSHSocketHandler
    {

        public PasswordSSHSocketHandler(String hostName, String userName, String passWord, int port, uint columns, uint rows, String accessToken)
        {
            SshClient = new SshClient(hostName, port, userName, passWord);
            SshClient.KeepAliveInterval = new TimeSpan(0, 1, 0);

            base.columns = (columns);
            base.rows = (rows);
            base.accessToken = accessToken;
        }
    }

}