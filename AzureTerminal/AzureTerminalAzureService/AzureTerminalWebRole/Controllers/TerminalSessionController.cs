using Microsoft.Web.WebSockets;
using Renci.SshNet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Web;
using System.Web.Http;

namespace AzureTerminalWebConsole.Controllers
{
    public class TerminalSessionController : ApiController
    {
        public HttpResponseMessage Get(String hostName, String userName, String passWord, String port, String columns, String rows)
        {
            if (HttpContext.Current.IsWebSocketRequest)
            {
                HttpContext.Current.AcceptWebSocketRequest(new SSHSocketHandler(hostName, userName, passWord, port, columns, rows));
            }
            return new HttpResponseMessage(HttpStatusCode.SwitchingProtocols);
        }

        private class SSHSocketHandler : WebSocketHandler
        {
            ShellStream stream;
            bool firstTime = true;
            public SSHSocketHandler(String hostName, String userName, String passWord, String port,String columns,String rows)
            {
                var client = new SshClient(hostName, int.Parse(port), userName, passWord);
                client.Connect();

                stream = client.CreateShellStream("xterm", uint.Parse(columns), uint.Parse(rows), 800, 600, 1024);
                stream.DataReceived += ChatSocketHandler_DataReceived;
            }
            private object sendLock = new object();
            void ChatSocketHandler_DataReceived(object sender, Renci.SshNet.Common.ShellDataEventArgs e)
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
}