﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tamir.SharpSsh.jsch;

namespace AzureManagementLib
{
    public class KeyUtil
    {

        public void GeneratePublicKey(Stream privateKeyFile, Stream publicKeyFile, byte[] passphrase)
        {
            JSch jsch = new JSch();
            KeyPair kpair = KeyPair.genKeyPair(jsch, KeyPair.RSA);
            if (passphrase != null)
            {
                kpair.setPassphrase(passphrase);
            }
            kpair.writePrivateKey(privateKeyFile);
            kpair.writePublicKey(publicKeyFile, "");
            //System.out.println("Finger print: " + kpair.getFingerPrint());
            kpair.dispose();
        }
    }
}
