using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
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
            kpair.dispose();
        }

        public void GeneateKeyPair()
        {
            //X509V1CertificateGenerator certGen = new X509V1CertificateGenerator();

            //X509Name CN = new X509Name("CN=" + certName);

            //RsaKeyPairGenerator keypairgen = new RsaKeyPairGenerator();
            //keypairgen.Init(new KeyGenerationParameters(new SecureRandom(new CryptoApiRandomGenerator()), 1024));

            //AsymmetricCipherKeyPair keypair = keypairgen.GenerateKeyPair();

            //certGen.SetSerialNumber(BigInteger.ProbablePrime(120, new Random()));
            //certGen.SetIssuerDN(CN);
            //certGen.SetNotAfter(DateTime.MaxValue);
            //certGen.SetNotBefore(DateTime.Now.Subtract(new TimeSpan(7, 0, 0, 0)));
            //certGen.SetSubjectDN(CN);
            //certGen.SetPublicKey(keypair.Public);
            //certGen.SetSignatureAlgorithm("MD5WithRSA");

            //Org.BouncyCastle.X509.X509Certificate newCert = certGen.Generate(keypair.Private);

            ////Generate a public/private key pair.
            //RSACryptoServiceProvider RSA = new RSACryptoServiceProvider();
            ////Save the public key information to an RSAParameters structure.
            //RSAParameters RSAKeyInfo = RSA.ExportParameters(false);
        }
    }
}
