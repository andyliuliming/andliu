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
        //public AccessTokenSSHSocketHander(String hostName, String userName, String deploymentName, String virtualMachineName, String subscriptionId, String port, String accessToken, String columns, String rows)
        //{
        //    MemoryStream privateKey = new MemoryStream();
        //    MemoryStream publicKey = new MemoryStream();
        //    KeyUtil keyUtil = new KeyUtil();
        //    keyUtil.GeneratePublicKey(privateKey, publicKey, null);
        //    privateKey.Position = 0;
        //    publicKey.Position = 0;
        //    PrivateKeyFile pkf = new PrivateKeyFile(privateKey);

        //    AzureVirtualMachineUtil vmUtil = new AzureVirtualMachineUtil();

        //    vmUtil.SetPublicKey(publicKey, hostName, userName, deploymentName, virtualMachineName, subscriptionId, accessToken);
        //    var client = new SshClient(hostName + ".cloudapp.net", int.Parse(port), userName, pkf);
        //    client.Connect();

        //    stream = client.CreateShellStream("xterm", uint.Parse(columns), uint.Parse(rows), 800, 600, 1024);
        //    stream.DataReceived += ChatSocketHandler_DataReceived;
        //}

        public void ChatSocketHandler_DataReceived(object sender, Renci.SshNet.Common.ShellDataEventArgs e)
        {
            lock (sendLock)
            {
                if (firstTime)
                {
                    firstTime = false;
                    Thread.Sleep(5000);
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
        }
    }
}