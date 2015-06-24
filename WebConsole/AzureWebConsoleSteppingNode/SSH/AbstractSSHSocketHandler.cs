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
    public class AbstractSSHSocketHandler: WebSocketHandler
    {
        protected object sendLock = new object();
        protected bool firstTime = true;
        protected ShellStream stream = null;
        protected SshClient sshClient = null;

        public void ChatSocketHandler_DataReceived(object sender, Renci.SshNet.Common.ShellDataEventArgs e)
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
            stream.Write(message);
        }

        public override void OnClose()
        {
            Console.WriteLine("OnClose()");
            stream.Close();
            sshClient.Disconnect();
        }
    }
}