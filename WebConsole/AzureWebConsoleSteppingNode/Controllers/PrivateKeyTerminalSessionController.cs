﻿using AzureManagementLib;
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
        public HttpResponseMessage Get(String hostName, String userName, String passWord, String port, String columns, String rows)
        {
            //if (HttpContext.Current.IsWebSocketRequest)
            //{
            //    HttpContext.Current.AcceptWebSocketRequest(new SSHSocketHandler(hostName, userName, passWord, port, columns, rows));
            //}
            return new HttpResponseMessage(HttpStatusCode.SwitchingProtocols);
        }

        //private class SSHSocketHandler : WebSocketHandler
        //{
        //    ShellStream stream;
        //    bool firstTime = true;

        //    public SSHSocketHandler(String hostName, String deploymentName, String virtualMachineName,String userName,String subscriptionId, String accessToken,String port, String columns, String rows)
        //    {
        //        //String stream = null;
        //        MemoryStream privateKey = new MemoryStream();
        //        MemoryStream publicKey = new MemoryStream();
        //        KeyUtil keyUtil = new KeyUtil();
        //        keyUtil.GeneratePublicKey(privateKey, publicKey, null);
        //        PrivateKeyFile pkf = new PrivateKeyFile(privateKey);

        //        AzureVirtualMachineUtil vmUtil = new AzureVirtualMachineUtil();
        //        //vmUtil.SetPublicKey(string serviceName,string deploymentName,string virtualMachineName,string subscriptionId,string accessToken)
        //        vmUtil.SetPublicKey(publicKey,hostName, userName,deploymentName, virtualMachineName, subscriptionId, accessToken);
        ////        public long Id { get; set; }
        ////public string SubscriptionId { get; set; }
        ////public string HostServiceName { get; set; }
        ////public string Url { get; set; }
        ////public int? Port { get; set; }
        ////public string OS { get; set; }
        ////public string DeploymentName { get; set; }
        ////public string RoleInstanceName { get; set; }
        //    }
        //    public SSHSocketHandler(String hostName, String userName, String passWord, String port,String columns,String rows)
        //    {
        //        var client = new SshClient(hostName, int.Parse(port), userName, passWord);
        //        client.Connect();

        //        stream = client.CreateShellStream("xterm", uint.Parse(columns), uint.Parse(rows), 800, 600, 1024);
        //        stream.DataReceived += ChatSocketHandler_DataReceived;
        //    }

        //    private object sendLock = new object();
        //    void ChatSocketHandler_DataReceived(object sender, Renci.SshNet.Common.ShellDataEventArgs e)
        //    {
        //        lock (sendLock)
        //        {
        //            if (firstTime)
        //            {
        //                firstTime = false;
        //                Thread.Sleep(5000);
        //            }
        //            string msgToSend = Encoding.UTF8.GetString(e.Data);
        //            Send(msgToSend);
        //        }
        //    }

        //    public override void OnOpen()
        //    {
        //        Console.WriteLine("OnOpen()");
        //    }

        //    public override void OnMessage(string message)
        //    {
        //        Console.WriteLine("OnMessage()");
        //        stream.Write(message);
        //    }

        //    public override void OnClose()
        //    {
        //        Console.WriteLine("OnClose()");
        //        stream.Close();
        //    }
        //}

    }
}