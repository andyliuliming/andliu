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

        public PasswordSSHSocketHandler(String hostName, String userName, String passWord, String port, String columns, String rows, String accessToken)
        {

            sshClient = new SshClient(hostName, int.Parse(port), userName, passWord);
            
            sshClient.KeepAliveInterval = new TimeSpan(0, 1, 0);

            base.columns = uint.Parse(columns);
            base.rows = uint.Parse(rows);
            base.accessToken = accessToken;
        }
    }

}