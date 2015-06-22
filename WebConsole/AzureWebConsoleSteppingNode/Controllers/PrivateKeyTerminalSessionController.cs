using AzureManagementLib;
using Microsoft.Web.WebSockets;
using Renci.SshNet;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Web;
using System.Web.Http;

namespace AzureTerminalWebConsole.Controllers
{
    public class PrivateKeyTerminalSessionController : ApiController
    {
        public HttpResponseMessage Get(String hostName, String userName, String privateKey,String passPhrase, String port, String columns, String rows)
        {
            if (HttpContext.Current.IsWebSocketRequest)
            {
                HttpContext.Current.AcceptWebSocketRequest(new SSHSocketHandler(hostName, userName, privateKey,passPhrase, port, columns, rows));
            }
            return new HttpResponseMessage(HttpStatusCode.SwitchingProtocols);
        }

        private class SSHSocketHandler : WebSocketHandler
        {
            ShellStream stream;
            bool firstTime = true;
            public SSHSocketHandler(String hostName, String userName, String privateKey,String passPhrase, String port, String columns, String rows)
            {
//                var xxx = @"-----BEGIN RSA PRIVATE KEY-----
//Proc-Type: 4,ENCRYPTED
//DEK-Info: DES-EDE3-CBC,B799189364613681
//
//xxoR4eNNBEtaYgrFGXbGwIW7OtB3PHhNiq5OkaS54SUNsjxGHw414GSKm3cEd0cC
//nl17pFA4fwLYRHtjfTpNYJ3y4OagtYm5LLrWyq0riJ7DY+7UCviPZsgpn7EHLKT+
//aK7z3kdtCMGkwuuwciUhKKxcyj+knEw2zP4bVkkvZm1Il34aai4uATJze7g5i4bU
//E6MTAS2v7fQ9dz3HgjpcfJpOB7httnCPi+lqO08LjK2KSwI/q54ASNjTEuZMx5oo
//d5S5pWB4v49nBWP7yavOlCe5llCU4kYnaYNQ+S5pxvmQRR/860k9i/BmANcup6LC
//jJgnEUKGgMb2FqUkOv/BvaOVtPBcWeBM98/oyUmL9YrgHteEnrbLP9uJktgOaStd
//rAA3hGD4kDGEXly78JHzqLDMDLkZ8EFxzrd76j4v7OIsZ5wHqIxlm8LdrudqEe3G
//tPL1zXXimhIOYLOJaVlsPSYCJEbHeEgccogXTXqvG7gJEKUymTFPmhNCIhUOgl6J
//IAi8F9rWQBIMswcmL4W9hyiHAJ+lgRC75r/j3Ep5ga2ZvNekwDT1+axP/+vAPjFR
//FSMK28kNoWIlA75rrHUXTzQzPVfv0JI9DkMb6r2Dr+SExAznDVqm0zPXbmjwm7Yb
//qqMh/9qC9zNYl5h88GlNRlNZuNkUbE3FCKI+ZMbZlHJppqmOxCXGeT3sG0CKGL9G
//3ZtexuP1zGdOCpOWeh1es1TIvJf2wNXPrVzGOS3r5xVEWH+Tcne7cxEHqUTnYWNw
//0Fo232jB3pAaHcZZFJzMcUX1b/l1MD8yKNbeHAlP/3v7YZf+g81TRQ==
//-----END RSA PRIVATE KEY-----";
                byte[] privateKeyByteArray = Encoding.UTF8.GetBytes(privateKey);
                MemoryStream privateKeyStream = new MemoryStream(privateKeyByteArray);
                privateKeyStream.Position = 0;
                PrivateKeyFile privateKeyFile = new PrivateKeyFile(privateKeyStream, passPhrase);
                var client = new SshClient(hostName, int.Parse(port), userName, privateKeyFile);
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