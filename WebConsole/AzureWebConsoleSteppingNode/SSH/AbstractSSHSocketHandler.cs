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
    public class AbstractSSHSocketHandler: WebSocketHandler
    {
        protected object sendLock = new object();
        protected bool firstTime = true;
        protected ShellStream stream = null;
        private SshClient sshClient = null;

        public SshClient SshClient
        {
            get { return sshClient; }
            set { sshClient = value; }
        }
        protected uint columns;
        protected uint rows;
        protected string accessToken;
        public void Connect()
        {
            sshClient.Connect();
            stream = sshClient.CreateShellStream("xterm", columns, rows, 800, 600, 1024);
            stream.DataReceived += SSHShellHandler_DataReceived;
        }


        public void SSHShellHandler_DataReceived(object sender, Renci.SshNet.Common.ShellDataEventArgs e)
        {
            lock (sendLock)
            {
                if (firstTime)
                {
                    firstTime = false;
                    Thread.Sleep(1000);
                }
                string msgToSend = Encoding.UTF8.GetString(e.Data);
                Send(msgToSend);
            }
        }

        public override void OnOpen()
        {
            Console.WriteLine("OnOpen()");
        }

        public override void OnMessage(string message)
        {
            Console.WriteLine("OnMessage()");
            if (stream.CanWrite)
            {
                stream.Write(message);
            }
            else
            {
                this.Close();
                sshClient.Disconnect();
            }
        }

        public override void OnClose()
        {
            Console.WriteLine("OnClose()");
            stream.Close();
            sshClient.Disconnect();
        }
    }
}