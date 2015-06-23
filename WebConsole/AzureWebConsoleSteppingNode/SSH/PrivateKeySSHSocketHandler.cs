﻿using Microsoft.Web.WebSockets;
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
        public PrivateKeySSHSocketHandler(String hostName, String userName, String privateKey, String passPhrase, String port, String columns, String rows)
        {
            byte[] privateKeyByteArray = Convert.FromBase64String(privateKey);
            //byte[] privateKeyByteArray = Encoding.UTF8.GetBytes(privateKey);
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
            var client = new SshClient(hostName, int.Parse(port), userName, privateKeyFile);
            client.Connect();

            stream = client.CreateShellStream("xterm", uint.Parse(columns), uint.Parse(rows), 800, 600, 1024);
            stream.DataReceived += ChatSocketHandler_DataReceived;
        }
    }

}