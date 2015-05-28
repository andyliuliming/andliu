package ostc.sh.webconsole.keypair;

import com.jcraft.jsch.*;

public class KeyGenerator {
	public KeyPair Generator(String privateKeyFile, String publicKeyFile,
			byte[] passphrase) {
		try {
			JSch jsch = new JSch();
			KeyPair kpair = KeyPair.genKeyPair(jsch, KeyPair.RSA);

			kpair.writePrivateKey(privateKeyFile, passphrase);
			kpair.writePublicKey(publicKeyFile, "");
			System.out.println("Finger print: " + kpair.getFingerPrint());
			kpair.dispose();
			return kpair;
		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
	}
}
